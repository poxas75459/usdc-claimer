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
    "5QaoHjwBY7Cee2iRBXHXvjMr1tJQwNdQQPajX5Re4DnWWRjWtFebk272MCJVbELXZMbDw78hTp7MXt3YSFEC8TtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXqi315thWzk3RhC6tjREgF2SsMVWJ6TMW4xbJzBSAwaZTnXqxcWFzqFDjbouAPxJLJQEefndFhbb6qwYb5gHa5",
  "key1": "26GudH58BTxznX3DrXJS9QCN9mjRxuczqzYyZf3a6GDbbsPX9TNdyGpbtxRYsfZSLdKcY3nP5TmYsX98gTkEtmdt",
  "key2": "4HKJ4fuugjCH8PxjquoENL4jVzbsmMWT7hX64kzah91kt3YRxdHJuPNMmd1GrdD8SJFxebGmorniFeWVw5w2o2z",
  "key3": "3KKLTEWhh6NwoP46Cw3eSNAKjyV6mhNvbzzhAvPpSjQrj13hohHxXSksiaRZEuGYmmMMjpvWZh8t6EBpgge2btir",
  "key4": "5uiR4NJ327SaMt8337QJrZzE6dWwXWyRt1doRJMMFJ6x2raAv2WUcc7ajnWTzW4qkgfPruJ45zEWAE6UpepPLL2Y",
  "key5": "Ej4xGFPKLk5c95tXASnWxgC4ohmiww5SqMcFrTA7hjAN58B81zdpveDTpwKMXaqHDBpK15VZto9sNUnqBw98iDW",
  "key6": "JYWJ52VHaGxdtbtqz1cr7Vo4qzMqfXv5ceC6hdx4hn1yBQJ38djpxdj2KoXW2wS7UHUGxsquZKuQKCh6BtcsUGo",
  "key7": "2P4RPxMQbmEGrVQttsFiPsChb8DaSgEHpcbZQ7oKESspPGHXRv9HjDKes6NGkMdVuHfS65wpAc7Vf15epyqX5naE",
  "key8": "5N75YPEtDJaPy4ifcVA3ggr1nJJbeX6cnrZ29vRRPULnX2kaaRUy4err52ua6xMP25yaTowwBA3abHEFYQ3RcNxc",
  "key9": "74L4sDxshDapPjA3iHtJjCJFZSdeUXbWprCwPbabxZcrXgofrbsndcuwq5GskbNRyk296ZGTNWW6F4kXovL1DjL",
  "key10": "wDn6BeGnDKwqeoh9XTPH2oGBNT2NYCkumwqJtAesEKB6HuKVs8Wfo54bsyPc5FLo8q8doSbbeatwqi895mC6MfP",
  "key11": "5ukhd7M81shGBr2UpjjtbqUMDWYCQEkbpvLP6LwRuRyF4747prHdBbKBgpKQCHsmSHsf2ELWWq64FcVHXPGDs8H4",
  "key12": "4gt7doWJbPHWLykFjD3JyjvzYaE1HjSESjtCc8FiRvRHvQkyiL7Kqz9xuyYUuscVPyaRqyVSqrFwk4C64ufFRtKH",
  "key13": "aPzWGZFWAE2XjGpzUvsnfVGUPTp8RFZJjvdtZYdpD9AAUWCAwGeq8s1MQbzX9Fpj7SqJfeb8XDSVm7NgBfsmqvv",
  "key14": "2cr8y5Whghcm7mV6ik9BQzyvYUunry7u6LSwC3ShuTpyXX6uBsdhGCeoQYusdqBDSuPPYA9eGx6Y2Sy45EV9bdvB",
  "key15": "JuNh7TUyzyCggzW3rtHWfP1NoGWBY3s9k2ifQ2GzpEXNmsBC7wLzQB1WoMFbxAsETJNJaun8nWarcnxnwXau4T6",
  "key16": "hben28FoAv9GrMATRkbvkwXPU7w8F5QZtfGaYFHiGRjM775s2mRL1hvownLHEvmKiWwcmpn5czvPEjwqSs1SCe7",
  "key17": "3zAxxbniBvyN7wcWaca4oaTBWU5mqaU5SeP5wmTDQL9uyWUaYQHZqxAALsp1hx9htGmKhVxYBmfr5rDBdwsse8tu",
  "key18": "3Cprf1QVWTpmfGvrzE5e645vDj8GqHFZ3Jm3nnrWVEAJppaUgiJWfpYTH74NA9wzQqhnkwicyjSNmQYw7MXPgGWC",
  "key19": "35sXBzePz2JVUeSFaiJzF53st8nZSS8psrYS6paFNt2n67F7J2N8AfCaZhPMMADwGEzknxCPTTtZgaD4yVBEQEfW",
  "key20": "8xZfa6pYquMMeSqqpWuLMoYbLY4uT8RgJR7WFi7A4T6dSvhPAUgznTXG6o9uRuhurQZXTZ9DMGi9hnA9vT1Ai1M",
  "key21": "31c5zG3oX2UvEQ1MEPZj5Wk2wpbMA4ii5KkW8EFaFcYuHDhzoYZjLwjXYuCexLMP2HkUKu6eQuuBrEKhxT97aUym",
  "key22": "4vWvfbs6dY4i1dXPDUf25N1NB1u4geEKwLuaq1ZYL71WNqh8qEgJx9xrPbPSugcMFonYWcs4rkycDHBQcA8fyGZP",
  "key23": "4nC5vJg3oFakppDZRYqLK3Kn9VLFnV76EcTzdMrnsj8s3JHB1pBytF9gyd7rrZ9aDL6C625Nw8i3Yrx977Tjy5Jb",
  "key24": "24LRp7JYCmQjFsfUpGN9gMjawCoqcEgJGUTKG7D1SGngeoKH1hfcR5uFMQ4x8W9idP4ybjqLohrHzePdSt7fjiuQ",
  "key25": "5ukThLA3jqsM2uskGZqBwTCjQ8MKxmT4RoMKRFiWZ4WWTq2kCdVKLqTAF3Byjp1xyohLTwBkb9YByfTbnfk4j5y",
  "key26": "3JegQzbwryc1tWvYndyV211nUNswBu7Rd3zEz7Ekq51c8yh8YGCDuRJcX8DYa6dgDNVdP8ZyZLA7oWyxpHNhtevx",
  "key27": "27VvnnjF7okzjb6EFJV8SHRskZHp79QTq9P2C1kf4GhPrPfXGxsoU5tQwyFUFALpaYrhmbM8rqsWoKtBSegz1bpK",
  "key28": "4igWSdy9vZaU1KhtUcHzasdW1VfDfnAHikyvNbeZSqHCebrn7KS5t7BQ1fq9EnphZWcKQjJ81nyBfY1YWFaoVdnG"
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
