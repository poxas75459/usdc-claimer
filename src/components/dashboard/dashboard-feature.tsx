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
    "5K1SiHhhZZeaCdW5Km5EmgfimU2DmVwhqMggdstbztRsNFt7BVQM9hAPt4DRzBjR8hHLdi32pXoP7EkFWgdtPPQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fozsgZqPQ22EBbFKbW24bZecDrLFqZZzfPXkedycCHNUpQ8UKE8xozSuhVeLShZUL3ziTi6sS3p6oatLG1XvAEd",
  "key1": "2RScSUt9eQEDc3vxSRxM4C5r4wLxggj9gHDDinLF1jy9wkopkeVcYwiBWSHGW27QvMPaho9jbAZbVSBY5NR2Qo3a",
  "key2": "5cwA5XserC5sHavJbbxajSu1jhhgpnmYNE2SBvkn8HxzsjioM4uxBnVdqCFnRGLUS23b1Lqu7x5TnyPt7AAWY3uk",
  "key3": "sEDNeyBTHteYyio3eL4nFdZGPapRRDDjooFUjEh4DmK5gg9gTUXcjLzyJgviswiXDpvTLLHaH3AsHhLqUqhRN8i",
  "key4": "3MZ2PKz993jkU2Y4ZSEZAKQPV5t1D474ZjsAhKuUxMAmUAyqggV1jJPPWQQby5kpzwnYQssufsgBrurYejJbWnYd",
  "key5": "5VQ7BtatNNJLduXuD38gj6fowTmiae8zeAPUEE6VSxdbACfwtNKQeV3j9KGex6vYR62Wnmo8BbC1RfgLJU3vqwhv",
  "key6": "4gLxF3vLHLGpRkgRhSSv87WupHHxe9pk3MFVtTuY2gaq7ArgrtuLKdDVutVANcxwkhBUp5ji94jbmwDfGGmBXbqK",
  "key7": "5qVMPuuSkzkcj41v3dr2X8rVeVe2VEAmWiJBqccWQ3ouDwNd8tNBCZ8asgThPbeW4DVTn1mJBY1eKnEBiMkRs7P9",
  "key8": "3AeE2oPWSmXa6hAdeFchU6gE4niyZPdkEZ41cLTS9Es1caexK35KsvE8aiZUsf4pjiXp635z6UjXwc8yhiUU8tzm",
  "key9": "4orweD38apcNRW6Vgz5W9TH7TuMWKYBS9nMYBqFvGswH5j42gsdcdxEzFGsqHLeDUPwa5Vu5ddqVHEuPUjdPkqAG",
  "key10": "57nqVrMJDMCN6FqZGkqYpnbLDztskqavg2mPLwbB1EdBNx3zdZALc6AVRy13Sen1uNYRB8aZNcnLfLRef3eUmb7e",
  "key11": "5kc1dHvy4tAfVFxUqUiXhgF3g97Qebg1ZN8PubkxfLZEcmVfdL2Xf3zHv9xuQvodruFbYZDRKkvnTUL1aBy2PPwa",
  "key12": "arKGvSKX48494MqYFCex7NjeK15TufinrZogr7Sw9zLWKH9SGHwYyenVLqTxrhqrnXTTpVYSSRuXAMMdvcqzV32",
  "key13": "3fYqs7E3np8zZ2zHqet9CTPznu4sgpwZrfeegDLoTVAij7V8YsLV4MkQWLQxWrRSuTwNUaK3exjzhZtZC5tQyJgf",
  "key14": "2ETvAKifYX58ddJWbZvQdJsTHi4imLpmgpzbuSfj1jNQGHqq9D8gS3bggan2osQhni92YPrTQHXZNYc3xe77gyh1",
  "key15": "x8uLiFdbpZBH5fxdfQwa1EKQaPdyn78eviUZC6ckVEkgwS7CYHmmQUgDTpTCdgKz5JqqXcN6x3q2JfuMLVMRpKM",
  "key16": "2iZbfK2Bv6hrnscYzxP8vfRgQvzSnyPxAzFiWsuJdzbCzpU9npVpYdWCDR6KVXfNVYVXcZ22gH2EQ96q4kxqzgRr",
  "key17": "3uMptLVaiYiytQUk5eGeYwmJW11iFf2Ueth7pSutBQKALYUGPmbUyGsMHuergmchE4eY2xAEnDTzSUdxMehR8AjR",
  "key18": "48JWoTSpjn5Bf8k3scafapvpmtENunxNLUbi4jo2vwkDP4TgcNjdPSxThxzTREtXGjhviMkCqoGCPSP2GKrCGi3g",
  "key19": "5aN5Ji9jpJ8npAFEYZUVTWhxBNXwA1RCtbXUbcFtrg74KMMEDXQrcHKPi5eWHrVFSDFRB7pem8jiyuYbsjStYdoC",
  "key20": "3GJ1fB4LMSbmwzhCxFxpbMB1FzFyTVxvqUbuJb5AmYGXyuEs4Hc3LBjteY1coSv3iFNb9qFkjaNarBCa7E3fWr9B",
  "key21": "47HXrj2zkeggnyeYbczUFSym7nPEjEsjrYNqtBfC2tQHPLEaHWL4foAzfi4wQxk65caGCDYBrw1weCBMKGb5z8Ar",
  "key22": "5pG5J1c1RqcQrPaL9uhBZRwxyBGhZSf6YzzX1eiq7JPp2dtRVwRXiE4hqbURtQ4Uwu6NJDUz2a9eSanc5wymjnPF",
  "key23": "2Grkqrei9LXs7DgdgJiQTi1cXoyHhPYPuXNynsmpq8J3awc2wpYhKk1xvHeJLqSyrcA8UqUT53172ZaEJMXr7j5h",
  "key24": "3JWvVg1PbFYottegDB2mQ1UaFw4ECELX47dGD8QLYktKZ8ZBRiShoq9kbw3JS3TGDUcZVfLkzbp3gz6q8XroQurH",
  "key25": "2wyVq5nURUvbVy1oLvL83cs4ZWrDTYzsAjEwTzScEqVKid2yX7jWB4khXnbV59fqdTxNu6dBc4NVCDyCENxgiyfF",
  "key26": "2SmrACLxhWZZwkfKephN4Kq8EsguU6uUAHRhE86Sjhrmkd84QS86VPQ8Zs3aF5jHCCrPyyGsnE7ENEsGfWWZdvjJ",
  "key27": "4pzJYk1yjDKAukJ4cx3SbCNaKDD7NLwcQs9ak2sGK8UgCVvdZW5ksMeQBJTftKB6hiFSSzmZFNEXjxznFaZ1vAuu",
  "key28": "384JEDi8gkaxjJBcAQUFisudDwFW9BxjnRzcv2LugZNoH8srD1eeiWV1hTV9DwGbgZpuToKf6ryAVoWmekG8nrdH"
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
