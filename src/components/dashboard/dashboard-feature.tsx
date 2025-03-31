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
    "66oZSVop3QLmJnvDUePZWa9ThiGezkMB9dJXQdyPfvfynQa3nxYrEbazoaPLYHkPEEa6RxyXRK1HPRKW78WcRGpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ALWpRTL6so3M7xQqTtz7whTapmhLqqqe4T7HD9mrdhRa8iCj7JqaVii4LZb9HcFTKwFLbuc4ZetrBDNpCJJq21C",
  "key1": "5uQpxRsJkGQZDpNfz2wTAF4dTbGjLdzibgCUVxoqq8dtfcfv8mePKMt1Uao7nEuJGyZ38Ws1hAuHJtpLV84N47oY",
  "key2": "59PbbWussWwqSh9Yp37Zq5yz2Bv6dpTd36Poj69LwA98LJeVsXwV25vK2KDCufP8Lp83AWb61CdaH5bWir2tA94M",
  "key3": "2xLonZJZZscj5LULMaE1E4m6un9xTUioFoPvRK3wctuyT8wZC4oVSVFsB3KZXUip5xCTLg2QC1js1vF2ZNUfQqeZ",
  "key4": "26g58Zp7aJffk3aNvNCeFW2MGAE8DxrLftxkXURqfy9yr3GqeJMTEqhc2YDR1a4kMpDw1B7zio1hz9qpLTScaCBv",
  "key5": "49h6gHQ4P812Z5vbY1WuothAsQsx7JfKNeArYV5hDA9SvAvZPyEo8qYvzAcpDHrvCzF8yAaRKnczixrJio5HrZV4",
  "key6": "3uCY8XCbuwZvZ8V4zkcaDmjR2r8RQGFfnY1PqrYUyob69NomTaRhh7VtaduzqQn7QFS33g4zebCoYDzDbadhNQCu",
  "key7": "2sbngCE3S5SRYurWmGNs5krqufWKpoLGJ1kURG3QXaeTYcGdn8Q4DTrrpYsQohhTy2NvbUTgiJS7kwmezZZaYVXY",
  "key8": "9urPuaiUPJU7f59JaLLfuoxiERj39WMEKqmehgFC2eUZtGjYjG7parfjmwq4pNWPPw3M1R4GefGJn2BHnZwQjFG",
  "key9": "LVKTHKbqPAhf65G8K2Fa4iQqTqGAthKzYjV8bWGTKDwQapbh1q5z3UEd8aj19Y9po2Ei9iHRA7Z9GLXhSSpU2AW",
  "key10": "2SGDGxaq79pkUS3wH44fZzhGAHRsYvNuRe2QCTpX2ZCYCAWwrL9JsqaGFm5KMRaQDBwBj2HSjPrXifHuVc7cbyuP",
  "key11": "3URvzzU1b6JoKBy4Gp93oneGvyvmkkSogJZwPcxQRWvfuo4A2CrwEv1FrDrJzuLfXUpKZP4DyBYn2Ldu8FEdsb1f",
  "key12": "5yxzSzKwvC6REVhxXK6gGPkReUdLkdFnnpf6SmhHhEFhGpJXm7YicR1N3y6pVQ9y6wqzBQcA3r1KCYsbcC6uJv6u",
  "key13": "4Bj9Ssw8UtXtKdA4xXaC6fSzurKZyRsSz76fEWXC2n5favFAJdbw8tvbq3qpbqJys1G9zCWKxYiRTM11deEL3Bwp",
  "key14": "5rwJPz9uhXyeKECPuaybaURQEarNUxxjWnacfDJVuM781snV2yyT3LAJ38BrV9iegMJsDcAk4pCNtzKWoGFfMaqe",
  "key15": "3DTCqBBajz5icx8yt2cDLFC4zwBKJKNx1QyjwVD4zk9VPntwKsN3SViXd7vh8pPnvvai8VPYZHDY7QU5tUWRiT5u",
  "key16": "5E7xmipXc5da8j6dKsyUJXNcaCbsg1n2Uu6rTPYAp2NWnha6j81pbPs1SfTmiAN61EDEAoDDaeNg1yH29izKo6zC",
  "key17": "52W3roZvQ8xN14kLicPMEXWBfpD9hCjKpNYBWJ3HTmkFJJTJrwQLMX1dLM8vNJj1kyTeQcmPNGF5VPZANKt1A2Xo",
  "key18": "2z4uMXzcxVPVtz37BVpgakk41DqFoCREo66Qd1omr45x8rKoBrSWf3s3f2LfaMVJu3ysF2euBeCXqexTtV4ayrdJ",
  "key19": "nMRv375HuooZ5oDg7pqs5J2yoZAPDy5kxkM7SrA4HfJxGK8CENJtXxyzsxzSw4TP3y8pLitmZLYJTpYTzLuET3Y",
  "key20": "2geBPg8BsPk7Rka3DnDVSCwH8e463T8hdXhKdRaGv9Q5mzuRPYxwQAqTdU3Jf5E2XjEE1MVk3dC3kCd6THmnG64U",
  "key21": "5WTdfG6JWt8fTf4LJkxRDLACCVqpFngbqqKVeZYK7ykMGX5nCdFJvSfJGRD6QKE16LGWwFMWUFBKLHJU56nE9k1h",
  "key22": "X9FcgJwyjQQU5JJPRJJPZK2WR6Q2hguztNj1FcpAe4EcEgYNhdL16boTq7Cx6eBdrvrNEgC7zmGD3t836vAeMK4",
  "key23": "4fuLCzR5pqrJQj95Hb8iTAH6djZ4jRwkpxtFhVmnbbkXKqBYRZ94dX8oS6MV87nv6y96LzxL2fCKomGH8cnh8ws9",
  "key24": "51wLhWeLw7Ej76giXieTVGbctXVQu99S8Qcs15dzp3qHHJzBpTebEmUDfSait729LDQpZ1Zh22hFeo1US4e8zTVM"
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
