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
    "2NzCJAQWWNbn8sr6SeaSjrvSfN2ryYQTktVXjU55inAkaKD8sKr3jUrgTNbd7CFt2ifCr7Grz9b2x3kQChQf24mH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XSQwAgQGM5wgzbUwtLPj4DaW29jg9DfgGUHUsu2MDmpF8AGsV5AxActCAwVuAdXCaVQh9E8wLxycetgSXgyLgcm",
  "key1": "MpMx4UgYLRarCg8jLLeZn4aQYsUqzrmMsubCmhqjmC1gQ7Ym9FQirfRdNRpAMoA6Ud97XtLSHyRV7dhNXQeQPg6",
  "key2": "4TdBPK53y9jtXL39TAE1DPcYwBANwiU3oL9hofSzfkmBNuFSi9UURnqnRLHiRjwUaAabCKioFfLdPNvhZALgnhCP",
  "key3": "5WdYSFCJUWhMVV2cuwLUCgGtMD4jv3g26jrSp8wqHPNoCTV2UmabdiBjZSSqiza4ytH6KW196VotapJogooyTD3F",
  "key4": "2MTuVqGGez5yABQaCctgCfu7WWn2nF6C1sxH9448nSjqw89acmx9YLrRLNzvJHDXdTshCzCh64ycAVZLvTipFX6S",
  "key5": "3Ehx8NQk8BAWkjUQeCWEDRAkY6jUwt1aE8o6JJ6N5y3gqnbtnhRagj5vc7hYbtEaW8Afb5GZRJCmwswDTjkJ1tNd",
  "key6": "EZB5ggLQjp2p1re8Qd1nFhe7fARDvdzLRduFwByC9F4Ua9Cz4w97Lhf2dKjL36SzksKCPXoi96C2Uy4mSsrAFqE",
  "key7": "9ryXfW4VuHwHnUWG2PH8EFkkoL89UpVSx5hUNt27ZeNE9BfDseESe6pk4uZhxKgjJQyvB51jqAKU1s27UKE5nEB",
  "key8": "4So2ixGmk1Rm41CiPvdrmkwb1YgdZ5ZYuTPmGS98pdrm4SpZ3KJDgDfMabkvvPGEgrQzfVMhzTxQH1T6cjwTzF4A",
  "key9": "Vgsnh5eWjSHNszd7SaHM41GQDHpqDjqi72yXj1CixNDht9jYmhW3CuMt9gYLuWR82PhWYYqTuZgTRtNsESDhKs9",
  "key10": "4GSoXDmsybCxD1QmfqJqwvbxeqyNvnHD1atGGgC8ABSTWmjw3L9LsGEzxgVrqtSKmJtL3qyKxw8DZxAt3yU2VHhE",
  "key11": "4QHn3JoCZcVU5cTwivaESegzhNQLELaP1Djn6r3LSZFMj7apWWoNxqVSiaAXuB42dMsgdGsCY9jbK6Z28Buq9q5z",
  "key12": "2c5NU88E7qE6AVCWi8M6HwPBnmxYZiWex84MLPbn3HkGpMSokFXKdCPRiKpokSPGyNX4kzGfzEh4PWWNSX9yxbAM",
  "key13": "2Sv1EXqQnqL8cfYKcGdzZXfhYo2pckgUWN8iNW2ptxDYbndB1Tqvwe4LXffoSHB3L7ByxxshQB3hDmzcxPzya9R8",
  "key14": "2VV4WBgpBEAVVsbF6uApqVBDwocNy8zkHNPJWRRkphdVPW4QsDXXcjcjqx56WFR4DP3rSmk9Txix7TBgqGigpoeA",
  "key15": "jQRb4Le39rh5sHDeWoLRpUQV9zT84G1AVTk8wSgEXzrgpkhqjESCG44Q2JuGqNggS7fq6j75wMPQT1oLLWyi6Yp",
  "key16": "kh3JsS4e6PzRsfbaPohL2jfibXm87pdx8DfnMpbjPj1NdkqmGHYsH631mbjVMB39Q1R37qYdiqyMFebhDZRxGMD",
  "key17": "pSnAW5yLEM4NKkMb8CfaznEKWs7D11WM7Cid5E68FvUGkNBSBub2StPTBHc4xqE3EA3N4PHor3uuyxkhdtmqaoW",
  "key18": "4epZYEPBAmD3BcdAWXLqJP9icGf3jzseJjbpuCHZidvdcCj3Q6BXwnA2cvDfJwab3xFhvpCRNwYn9bBaFuuHWS9T",
  "key19": "2dsDSJomfRu4rzDDeR8TjT26NQVWFms527hehWwNPUmdM95MSjygHjyoLyuXMuVPghrKtDQBiYk9k8Zgb9287Srq",
  "key20": "4UUpY4V4JiqPHhqJtEc7wa6f1SHsDLUsVuogJeaqpukAqqBovsZJns9BZGLUVESdZrUhpKxbudowZVz8kyjhTcfN",
  "key21": "3b2FbD5WRHX9xSDUHH9RN2uCHNx4iN8XnZQVmE8VD3zrgTRhgkEKr9SFN9f2dAJYzLxoykNFuXvJcmBPT5vAahNb",
  "key22": "hrCt9h9fPXfQtc2pyvVfLzuiZ4gYAPLB2CnbCMeRDfU5EroJ8LUVaB4WPCrwrb9NJi1FYJKguLUdAHW9s3a73fA",
  "key23": "3EcZSPCuPxZ17Zzg2xNhyGezKpPQhYdcphiLBQvQSXw8Zw2sPu93bd6cWDEeuVoH318RKs7jtwkYfKajGrhX9iHA",
  "key24": "4gQqsCzPmoWeVTe2jaLamCKYGJvWJP1kevBXCrTpeULBcogpFBTq2YvLYRFN2p99fL1bbvaRsQH2WF6ScoinCiKU",
  "key25": "g3GwcNeabSHs8KjRSiM45T637oYKWtFDFCqBbqK5amjN23y4CUYzNZ5GhsD57G12SDCHXHzsXC3cpbzUQgKXP9c",
  "key26": "2c6jGg73LFe6gnjT2WFLC9r4V7MfYhTygM4CYXyx6taEVicgYQFpAb1tNtbmTZcMTsTorBRLpvh5hyupYASeyHgT",
  "key27": "p47kP58hEUL7Q3ozvqB2RSc6oZT1FV54xffvkwvZEcQz5C7eGH9GVEGxK2vqsU4Hoq6pnVNau4qij6qwbzTywRE",
  "key28": "32vRYvhVTZBZ71PTrPjzN8SZTdjQwAkgcGtJTshnjtdWt23eb38JjfRkU5zBZKLTPc7mJVym1sUwfe9aNjN9ArB",
  "key29": "5fPKHigivu52s9KHyQqjNQkUjR7MmxMx4QnsH5TJ6RPE89oGAcB3PjeLET3WPP9AtSXqrtmcbD6xxivyricWDuEP",
  "key30": "fg5jpN813HboakARQhLHoktnD6haQrzW1SU5Bgqr42T8JbVSmDvCQMpi9hFoxAVBB7hS8poYjLoVA9qzveS4pse",
  "key31": "5Xjs1Gpbik9TtZdzdeZmiykeYDRH3A57RdiEvGvwJ7SZe49AXQP9mFbrFJ5L9mTW2vMgYcxe2qsH6JMmMWZtPgfF",
  "key32": "2xSdHmdhkCNQUi9Sk8JGmmqenPKJrmnjPausX3xiCqRVDAfWFJEdsyahyYbG7amjtxduQXwutBtCkT5tVdKydCf4",
  "key33": "5ARSLdvnYzbkgsdPhYR2wGDTUAC9trLdibCKc4FB5mSMXrGe97BzpbeEfuDx9HvoRGH3dM38Pe4wVyP2ZG5TtApV",
  "key34": "67QH2sNXYCJyJAFaKsJru3Zpv2hUjrn3NasY5pRprDM8nSTdXQezVbAFEE1FyzwbT8CuW4KMbVAUsvGq2VpPneAp",
  "key35": "4Atz35Q5aeGAFpDDoTNu5sZVNvMMKTE7RPH4t7HvB21kgxt3z3fHiRiVAUhkP2VPunqNds6YdCJgMzyS4pJjez8n",
  "key36": "FdJ4vmgPyyuAhKzcXvEiXdp8sqWvG9n3445qSKK8J7w38NA9RY9aJpe8VXoUSc15VtsPF1hY5QuAUHTCSvPCK56",
  "key37": "3vRZWsdnfEpEa25uSrxa7dRPiDG7Rrjj5v7frBoP82apb4BDxc1U62NyULVLTtBre9Es3UFX4hktrSYUcY21J1oD",
  "key38": "4dh7i7oKEKqpbTYWVZ8fDKEY7gfttsxXTWfBXK3z4C5JN5erAtQYaZNt1MXXfGNQ3mwK8SQ4usmrejMbaGnPgeK3",
  "key39": "2Aocr9qBz5ePJYydvS5gEcGDPjqahuYCCgJxuFDaTgh43Qy1BfcfY6h4Gpk1SiLjuNwA5mCzEcYvaimh449pzLQc",
  "key40": "4JQ5bmkjR3x6x9eisNiywQWj6G8cc786nhNWMLe1nuXk9u4wkm1guHAqo2DYR61Eoomt286xjjQnQnW5uiPbKkVu",
  "key41": "3j66ik7cTpZWiuMGuVzbjVSMUswccdmN55VBSxHcchNnERWoKK81Poj8Z62gGCuxcR4P94pEsKfyZ9AGMxVqJSnt",
  "key42": "yyrawwtGvMgbFUA1dFHXz63AL74AKugvdMdLpWXQdBA3MALZeBMn9d6EBuk17qeKiuzcyycPLDE6VfF5LbGr7zy"
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
