/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2J2GyipSRyZhzsFVEgr2GU1xHeqs8ZYUnQX2EW3RrvzyB5Us7X3FDdoiuoGn7TF99qS7i2QunoNEc5xfCP4UsGPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FfVb8CL5ZJ586uLFRZRq6JC8783U4tSShZi2jhPQgHCsbP9oyNCEA4TSdh2V6K9TNYunBoTsLSsy8nR4QNLSvz",
  "key1": "65ow2f8ovaiAEzY4LyxNqAHmZYXEcobcESGwVTWJ8Y12L81iBmenjFf9zLdwbZ1rnvu91q5XkTMHa5KKURsibRcS",
  "key2": "32JaUnVYTs1SkTTmAniT7pW2jSt3aAWx6JTYM63NTeEwKSk2a9fN3SqNghmTr7U2FVMjwwxpPuEUTxrHFc6txJ2p",
  "key3": "3a8KerzZPHp1sj43eMeb96DoMX6dArfSoB8Fwr3vi3BZk1YPpUFy9k4whfSJyWYEkEtvz4kQ8v4fzaK6G6n2QZCP",
  "key4": "4je9Zp3myQi1Cqy7wso9BSzy1s4cN1bVJvmD6AF3fqGQ2wN2E8fz4VV5N9B9Qy1uC7A4gR9Mz64eM8fDn6uZwXii",
  "key5": "2K4MbhTYoofkDfshLbj3QPdGm7RYDQru8ttf9XEvu36dGCct2ZtYjJsAZyqBRWBTZdr7SAgV4XsdH8KfXJweQjeY",
  "key6": "sk88rUrGDcQyLEJRMeB7bmQipDb8JFL4mgaqtbDTkJ5fvRiPwHVKy2ZMwZ5mVWTeY7v7xD8FzhPNfLTtMm41CDN",
  "key7": "1DGBECdw4jzBLuWZpXKKcJvJYAL595yjYjBpQmYHTAGw3wym9dW3JyP8yYC84zKjSZkMriG9McKetNGrUjcQw1w",
  "key8": "3ikSdqu1UFttaRBDjcSVWZWynqKksBgdkznMJkpZYKzmH81R4X9kszkvijtzqkGXE9eSt8K8zmhmo44Lw7n3qtPk",
  "key9": "Q9SLfL1n6VguVUyga2rtz1eGXM59Y5mvFXzg37TNCFh7emJvPALsda69h3gYAMe8s2RZ4SEM2ERvMcvVRUY334Z",
  "key10": "s7tAPMgfcj3Mkya8ep1ukgRCxpmoBaRGTgUTheyTbdmzxw4wZSubjwxw5mGfUteVmJzVQ8qWJQKbvjEjVkuLqbH",
  "key11": "49ifNUFS5qkLtRA68GmE3kmi6SqQfRHbdxniNeSBEPbcn9nKccUBQeryWuZGvpc6KcW9Gp9deoXbYgiYgwuuqffE",
  "key12": "6e37kfwrjfgiMYjPvQL99FPJnC5D8aTt3XuFhV87Y1BJXHt8djQbtwdMC1bsJcLSL7vMWGC1npRbcT3YDoyGZue",
  "key13": "4k9dasJAxG3HugFkSZHUVSNQ8bWJJCx8fWbE6sscB5iyPVGjkLNCyKZ5QDxfmKzdaL2xmZf79YGgScjKaQoam897",
  "key14": "PDLXH3TR3GicPzTQyKyc2c1bsPXmSd17o45JSFcRWcb1zvLnYm8UDtvLws668p5YScDV2FMztPxTDSDuKXVLxad",
  "key15": "4PgkQ5iND7w3goWMeU96riodXmCyXYj7XcstKWWDiW6sNkkkn6YEFjWonhR7LFsnKQoEj1gSx1fiaZW4jy9JUXyz",
  "key16": "568hUoEhR2wr25zAqjhWDYafXxjQLA3fq8mfHykdqPyi1UBevHq42VxnLj9wGW58ZG4wR13vzK5jsR3giyYkFDFb",
  "key17": "juR5AuUeESwiecGa5tajFKDKduWmhsqUE1pfmH4ke23d6wnsW6jEWZSyJGWXgU2pm51R1MCthEjjWkyjahFDB2i",
  "key18": "5EWurTQ1YkcGauWYoe5ysNBx4hg136b9ShSzAFG4gqDSb15hsnYivm39XLJgMMrgCqGpnyyuD2czqVtHhzoaC8HG",
  "key19": "4PzeZfN3dGNRywWj827BVXZziyfirqxX9EJL5yQK6G6xxP92oMdhBcRn55EstYVQxLVaQSNzh98XB5fTNxp8ZsNd",
  "key20": "2ugFs6QvXnjtCZsiNZMapCuWUgs3cn4DFQWoobmxgvL5miG5vABF57ZhcXD2X9zgrh1WFKfFhc9iiW9nTFxvBcK9",
  "key21": "3Yds2ZtKoTp8HgG5xJp49UmHQgJnBstPwY6Pa7szcqJm3hZmeC8FZSZpPCJx2iA6zeBAuvY9QorNKkLuuNRGF5ZP",
  "key22": "41wpgbTmeEkBwWSq6Y4RPWTwjT4DvdtNBRSZxWzMYx3ZSmyxrQTEYSoDYcpwyaViUrYjPVBMmXnEBR3Q4GaRG3L9",
  "key23": "5qQ7g42vjPKtMjf4Xh6t54CaheMFgDsSNt1Nepxg1MJiguhJ6x1zEy5XjkwEhEHhWpxX3y8FWfj2W5nvJfmDiMk2",
  "key24": "3nwpPZmqonrNCpuPqDdrReXfDddTvUL4JfeW977sZJy6g9cmBJgaQHibfRpykFWfhYVaFTSaALb4PXLktk2gMqnw",
  "key25": "5vykKhu3WAP2iVWaUDZ7fTeuDQKRqNyNFKVBgG5TLT3iBrh1JfnR6BP3N9kMTH3B3agLFV54swS9NFKVjudhUuBj",
  "key26": "2wvTNrB31VHc8RcCUssKFpyYgBZ3aCJ1x1uVUNH8h8ANGifpV6zfMsHK2HojsdnAmnXMf1GQeMgpDW8345aD4w4h",
  "key27": "Dqifyr4H9bJB9JoYaKPWb8J2NDCeHULVv3sauHgQbGiz3KtqPJJf9Zsf5eTQBzYsiFJ1wLU1HgDQaSL69n51Fa6",
  "key28": "2gVt2Xgapqi6tS5si8nx38AG8uxZPvzZJ48W3zXtbQ7mgdofiJ5RztnKbymRCgaJgPcMF8amRDGEcc1nq87A8f1v",
  "key29": "2tbdFwG1bKBFPnys5TM7C5EkQHgXR3cz84wNg4g3ntpJAxjdRYegJYJz6v7uJYp4UcVydw7kxz8DcgehN2rndu78",
  "key30": "53KoXbobTJt5nSrszhqMFthK9isJm9NCZANSMo9F9Tncb873ZoR8Vevk9UzksPM4NKokYkeSzrzG16JTpdxoXx7r",
  "key31": "3d3cAd25agzaiF2qUpgN1UuCa2s85CfgUbUKVS7DHD6jhJPFZg7BGis4PfBFuVotZyW62gaE9WFDJKgri3cfBwpQ",
  "key32": "5cQhhJhc7wURtzo9QbDTJ99vvexeDgRUpMcQ4Q2KsvkdCbeEHTXU3ZCEn7SdLyfLhgSMEVC89rzEwfioa9wPcrPU",
  "key33": "3gRnkRizzbZdsQ4B7xQaPSJTju6dxo2jPeLK1DGHHRoMn4QQhspyTAiJXzSUE4tyqWGA6BpykEizjRbrAFDAjr39",
  "key34": "3pWV64TiPpX49VY1F8fe8tS8exE5ey9DMzAQYo8eCZ5T89gfNzFaJrg8dTKh7KD337DABDQqMeNxTznPfMRxtBgD",
  "key35": "4tqQ96puujggAzre6nZLmnWyabumCYNkKFy4y1LdHjqV2wJ5exuETjs5ViKtaaQN14B75hcshf5nwzYAM4k9vv4w",
  "key36": "5ggTjpFFZyjXF9eKZdE8xKaRpY28PsPbwBVrCPQiqQrYJHSUAAyuDubZjpMgvrYXJDuD6BHC9GRvgN2eeH94AM8",
  "key37": "5XbZLfpdhthDHzFnj1XE8zgxetcDHBf4EFiz7ZN6oBzGQqqBGsVvdEyseutkxhpBLooHyy8CruZecWpdPoCN27cy",
  "key38": "3nWyKJU2EkM9VtDaN9Qg2QEU94vhbJhwYyMvkgqfxa4kcqLmMvM1xDG9jegsJoK4M96RCWm5TyhJYP28tMsR7V1o",
  "key39": "5GiiP47JYccgNR6QTFGVozGkdC5pESJL5xsNLNUve6Hme9ZSoXrLR7eQ6HfYmfywCUgHZsopJiX9PZ9YhbEZJVJN",
  "key40": "3EWT2viMxectB4DgWedKYKnb6sF47edT68HTw5Urk15xAiQVMpmrruhrnJ4RKV7TSeqjSRN2VRxLUzZyXqofLswo",
  "key41": "4uRUcumCgWbWtsVRfBvCN3mLme3Gn47tD127tk5hTJAvE7ykrMCD7tJN2nT8ShQYJhejhNT8jEacfUw9gVfZ7QBi",
  "key42": "33DRJgGcrFY7ym1EDgWiCUqxgZp8i7bTWnhUWwfDUkgrbEg3UcKEMz6qTfB8oUeFKC3Dv3wTcP62uZ6Mzt1jqRd2",
  "key43": "4DhYaHHAZCHFAR1dKGN98FeZZuqFchH3xgmPNLXEoniAWhBnrdRejnVBFwf61FmLrWXbPw5ezujMngLQjzcocSoU"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
