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
    "2CTSnrC5N8X8MczqsmacRVW4EVE6HjLU56LmN9o7zFEzQgkydg8vZBdhQp9XSXUHHwazw2qgAUWWLnhwvpQcAaYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TY79PKxGXB5HjbWbSGAtZWSgwiXW2x5xQCfDXDit6MG5UkvTpZ9dmzwZTNW6LV1MNf4Wort6TDM1iUdaVZJ4Rdj",
  "key1": "2hoPuCjkAkfgAbfbdirqNJUdZUjwyc2RP6cJ2Vi5cYaRhBKWK8ig5QQKKVuyrjhZEpXUbYCN57jCxA67AZZsoJrA",
  "key2": "2GH5Eu4W8j9v1pQNfx25mgBtUufP5wrbCgD7oKJCryU5duRf6PBveTdCTNi7sMgNbJBkaAUcey1zPAokZeEBYvr5",
  "key3": "82LfevAD9iNxJG2StSNvAFvqXtKNpRQD8vuGJpGCHjmC9MWkzP4rTLMwrJPoGFqfuwY7mDCeSersJkAsgwx936x",
  "key4": "2QDadaciWrgB14HyJbgqZo4UqGrQ4DPq8qcVA5WBTyQjifwMtsfeFz7jXeUdN6vPLNf3SuYdyWLogbKfNTQAg4QM",
  "key5": "3gXoJwKUvCCXyvnkjKX593g7m5ntAAsqo5pPkXD9VqEzmqhN2WLCfXfHhW69sMhbTroHQBX9kE6jgYtKqNvgrwN7",
  "key6": "5bk7kFYmT7pHBcjBoZGsvMR1BfQSoS1eDNrKPmgKoWigDGsLamaSxmr6wtdCYxsx36xPTNuEHpKJ7QgRTRBP41iQ",
  "key7": "3GaYNzUmA23AmryUYM365HQaYPiL5R63wwLBSVT2uDqYcZCArPzjD7P4gvCpmufXZPE7EnE3cQujmAWBNKTSL7c4",
  "key8": "2UTuZ5i7oQqkPXyFbQotmTUSN8NJN4pgbFGy3DTogQCryWPh6vV1gwTLPiY94uoWuhzJoF8g8LEueEm2X5jw65KD",
  "key9": "3MqLuqLwuRk6j99NuBBQsSoKqWLFdzHAZQWCYuzqzmw3TAVRBWb7T2667jJ97PwcHCA6hhjAnACWrKKRZgsW9Rms",
  "key10": "41bY6T4t3WavL4eCbsoUB3AiorFgFUWRkHZtNywqDHzz7oXqyuaaLifa1d2iNdjz73cQMEvq9QUohNd3BG9dkJ1G",
  "key11": "594dtamerDWmLydE9vFLwJCRCqptAhTfc1iXFrmC3VfhHyZrevXnNiHDCUPFwpDXr3BcTvgK3AYychvZUSZoPch6",
  "key12": "2RNkPNJm5MJ3prMNwhvxKdqYAQzDUzCYC5YxvfBETBD6HJAR7jephHD5x53KZ2XqJ6xHfWEVhiYzpgNy2cbDr7Bh",
  "key13": "BCd72ehp6VPWa42CzHb7eRDyiTSssRdpDJZLWEyyYJnHaXjSnjWrPBmGGrNBwyf2t72J3Z1MRMLuwHgoUMk812Z",
  "key14": "5ECJJN6ctMXBqCtFt1uKURiGYvcg4hJ6EyNuAs7DAxRXZ8FBHUjT1UoV8R73EgqtixnntJnjomJ7Njec2pr8cX35",
  "key15": "58bM85ySRRkQNV4NcrdGGNxnJM6jQgnUBydGug7ms68CAAMjFEa3y4Fjtp1nSKZ5nPZi7rbngqXvxy7uqPioFTfZ",
  "key16": "4rwBc5iqE6ZCmrjnztNs7RtD5qT5qRq5PChLSp3DwsvzCroCBX4aytVWzifpBZjS27Vh9vxVDkmPB7jsafQkTuTR",
  "key17": "3Kpt2UNhRjpz4T8ybyXxvNjCvxYQCAdwZaZ7WFVDjGEHWUaRsbph16NMg99E3QeneYmVP9UFccH17JNaZNLJvKVZ",
  "key18": "22CP1RtdnAqkTG3dEfQKHDFhzVctaUPMJykxMByEgHjcXXiaFZKzVeuUrcKhUTHYqFRhTZHGT3zLmAb6uGrjrXvq",
  "key19": "Y89ZCtNo9zT5cCc74sozkBWXNRK2CUWUHFPM8atVRK3Th26tMKFyZQUptuC9wZBJD2pSiquTLgVP4FfpccKSvsm",
  "key20": "4fu48vHg8z3FRBu923xgiDLSLriuqRffeftNQxv42ExGUHzRG1FpjNta7CLjFYd7VYgbYGvTG2mGRpeuN5ax9eB",
  "key21": "2epnB7szkvAsf1GRGBk8B7zzaZTuFzxPthkLpZoEKjXCC46vHT1GGkCcchkLYDdPoBZUFm31KvbPz4mAVfpGEBeb",
  "key22": "Ut6U8xUB8GCDt4LgcsVS834sHxp3yaCLo1bRNph2JG8v9E7SEvD4Sfu4RSZpBx4gmaeno7Zi1EUu45QAd8J9vF7",
  "key23": "6GZZk3UChEmdBep35bZKLgoDNNigbpw5wsCxjgBmM8umFoXsrPT1C83CsCqSvdhcJxxcAwVtykUvDgSix7aWisZ",
  "key24": "V27WmYsaCf9aWpU3wWafmN1mTq7tPevNa5aVgctk5j7rbZBkAbWqrHXfMbq9rwANXREkWJm7LzmrzsoMudTTmX1"
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
