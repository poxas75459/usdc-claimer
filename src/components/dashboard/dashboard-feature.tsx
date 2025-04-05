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
    "5i7Rt5jadxR2GLqx7cs4yu1mYHpkWFDVAMzQJMdQFpnDSUsEZNL49npKPfjbb8Xo2o5ih5mgmQDt6kiq9bdnFfDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkZtykN9KC7f1R7huEU91d6DKw92jS9i3ir9qqVc8JEf2ekmaqnzAAqdnw2uCgmjuCL28qAKCo7QsCLMMDxTMwF",
  "key1": "49M3dXquaBaqcdgXrwUCC5UqqZm3EBDaiJ7Zv2t6YXX68XJGSaqMQjKXUYPrfQJb98e7csUX7rBbfM3gatrBZPU6",
  "key2": "2oqPahvZXC3944hee5xSr9DyACjYbueSW4UBbJZYPoEoJAiX3HXwtWuEkeUqiS6wPSpDmyMvNg3VanohJiZeymkt",
  "key3": "3LQvaAV47qYaR3LWAnkBCXzftY1pQGA3c43v5S2d68W3fZ1WieYAYiGAP8iSSNFY8wKRFemQu8agBZuv6o81uLvq",
  "key4": "2fsFb7sjHNgoW9PpbySwe3fdFsCTKyR3P7aAJ5uaWo5QkGAZani8feodJgMCYB4Tn5AufWi1rFisrzbdjCcVWRqH",
  "key5": "3BPMDhpvSmhrq52X3YXA8mMmGXsA1hPjEH5dsXZqJ8fJ1Boiq9BAcLe8SYbcCreABfdc3TBWkhAjpNk1mN2FY6qo",
  "key6": "4wJEQpruhQ72K7AV6PcMTKBv3jgNNFJJQjvdZ1yoD6f3qix6DnGFPBBkFJewEVuU4jtPfeeyHT1yb9a61FXEkPZL",
  "key7": "4QXvtDXwLnAtC5F4GZ8iRbrABcZXneAJZDhqkB9KmAUfE1tudi9sZsG1EeBg2EjWW2k3uSLbNBFK973crrdJgRuh",
  "key8": "3bXa2vd9w6iKW8tBkD6KcR99PocKJSweYmpC73MY5vfLpgczyGxcBiQRXTxTHVEMM64kCgFdwrrw1havhMtQRfNM",
  "key9": "34LSW8KGxPy6NVec89D3ZeKxkenhpQfn3XfxQy3XRpSojes7f2K23uhNpWaypVDZ6mp33KeGeG7SzpJ9edTksP7R",
  "key10": "3BdGC21o4EkcfzBXesTMVHVDDTueEa2LgbfNnGGVB4gLTJJnLENgta1n913yn2Bpb6mfURKU5iEfHxhpnEZZEPNZ",
  "key11": "58VQk5QmxDCeJnGtCcBuNhQN6XcY1p5SPdjFwPXowqHRh9REHpo6pTzpN7eZW97wDtmw6oLxuCzEa9gQrL1KkDAU",
  "key12": "XMfdYgeT8uunukKERiRrXdtq9eKBBGzTnf7D3YW5d2NjXAgH6Gsr7vx7kZ5kKa1B2Rqs2j9pyDmP6HdNZg438kP",
  "key13": "jq1fLHg5WELU34suTchMFbNZak3WD15iaexZEMprvxMBqKrY1vwdaPuKT6zSgou2AePGwPt2PDkCmzgMJqoWDjh",
  "key14": "2Pq19Q6rCoLYidmi44BWjeGYox2VA7vsAsMusAE2aBBboTapxkMt5rtuVoCdL8ULm1uoRU7eQLnXN2Jwj9LPwJJj",
  "key15": "2RB1L5LZ9VMzkGoYtCSqbiz6NbKbpbEuG7ByGAT7dwdrPJxwW8U5cjRPdiPaeEkYCacFuAEtXp11kp4staUnKJf1",
  "key16": "5eo9kCbmYiv58wWq8EsZwgiSPytpy7s5QJBXDpfTbnFuFaeXa23kWpJj1isAGTQKajvfNN5nJ46qFcMddVVpdYTA",
  "key17": "YjU6LHCoUy1T6hP99W9KFsxMYc67pGsMeY6DPSUYeLEEXUwK7E9zndtrs84eU4in5KeaAEBwbTYbt3o1iFUVhbr",
  "key18": "4hhVHz8KUknSja3ueGt5z6GTabLUJGwjBw7WagN46nXZKcFjYgVGGVNS6AMczQDGWBS8RyDE1S1hiFgbkdbESC19",
  "key19": "RwGyi2d9xpazditiamDMnZE2WxaeQB69qBHX5QHosSrXNiYADpLVhsY9pWEm6TyJrcvK5uKBBL6H4bdPBFYTyLa",
  "key20": "JtYt8ATrMxhbKqj13T9hozApNkKuDu11yNgCpyTMrF44JL4B2HBH1TtgdB6FMQsfqiEdfiG4P16nUUxaJBXsx11",
  "key21": "48uRWr2Afd8BcDp7TFUo1Y82wUEBxi5BX6AEY7PjmqZZreQBE913d6jtQwqZ6ypTHEpRsPwLyEGbSGnLeqpP25VV",
  "key22": "3VQ8m3M3DUdm9ifj87PeqT85eM4akd8vjmJoQUmZ3WAjQLsbhpggChJEvh9VcGTZmE5VfHXuWqrtjinNLV8ebM7f",
  "key23": "5FqsafdgqJjisBcTR3QwZ81kfHeke4SHxrtRUFcaueeTxuN3UyVZGFtTyWCi3hdiVoEMyjUd7swMA8gau6qMKoAy",
  "key24": "4GJqrHh4bqG9NZx5d1xAzVPsQi6km1Xk4nSxn73QSvtR5H7CHoFmFD6TaDKDevDi2u1XHyi8bkkQD64FNJk8EesP",
  "key25": "4rmMbTEF1Ru7fCk8vPEY8KjkRYbCZYmL5oFT7fAsmR8GSMa1LuT2aW48xtQc5AxDZzkNMJXSFiZCnJfqimcvX1VB",
  "key26": "5xPDVSuRqhDjKZuzu6BuwcCGRePe2DxQrDvE9ffVXtf5LRKgBNUxG7bB8EVbgYFMErippWJxJv2xR4mjptmBKZxL",
  "key27": "pr4cx7c8QV8AYbvd5XWXKzSMcSbxNFfWCGyJdzy3dywRogK691BGomkARcppKJpmHYZdEDR9iFoWpEnTnBy9gps",
  "key28": "V76rrr6UjtdZYczXT1UqyK6HLZ9Tp8AC7TXD3kR8JZFouA35MjEDZL8bfJjobhcQAPiCdmwPV9WSQkw9cze9H1y",
  "key29": "4s3ChnKpEhqNUYGvb8BDSRtWZyzeWumz9n9kWkCgSfm6oo9q5sFZZoWaRBKEiJL3vvNZYmEpQbcarN7d3BYBnymD",
  "key30": "5qQUWEXacsTVfaoCLa9feGGL1koeRxYcKBm8EZot95jLTESNEbvWnUMc51yjF6fjdywuyuFSYJsbTLRgjj1wWWDb",
  "key31": "3uQuvgdiy8TcZJB2R8jRsSE33XwRmU13gqEpCxLmSrXH9ui12Q9ZZqgCidvHRrKoTUP3GHSkjeXJxb5JGGpp6tfG",
  "key32": "5sNasVPmQhqYbbfJ4f9h8eWJzvSzEnib4WB4FjE3S5pUZQpetE9MHtmMFFwmWJ3Mxga4VuVhWWMctUTaD7n7VWxk",
  "key33": "4CLAy1L6JXV7HCtSaCb47GUDxxWyPogYcjWkMLri1LJ3tyL2BUYWgPrNSh5p8deQmUBjqFxjZ1V3PgvKipMdu6C7",
  "key34": "4RDh91aXVHXiC8s41S34Ws1JUbBcn1BukHgBuRyAJbWUztEkt3ivv9vFToRBSkEW3n5kYEmguzkGBDxDNkCRyzGL",
  "key35": "27LpfPiG4wHagActqinRDSB9aN3sDymjCwyrpwX7ygvYZ1ATtUmLsE4ZQE4YiD7JGe1GbrF9RDreBevhVP6yYbP5"
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
