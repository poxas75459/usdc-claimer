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
    "5NmSTGZYH41d5Zs8qqTPeJNafEtsBMwQNioqZeLHuW2EhELoa6dh2M44pT8gmFsbW5D7Ha7zese7nC8ykrxCGAmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6nrKDN97CpCYvMem56BXfLj2P8GYDEUXyuTz5CnppePGPBgsPnzk5kBgP77x1ikSQVLwatQaGoRoBcoz746cwv",
  "key1": "3HRUnGQRGxpRepGpcZG8q7ZGam7JykYZNxmh1mnvBUyDXTYyi2aBEGifQf2p4jbvaUyHqYavZ4G9wzfiz3Ryn4kB",
  "key2": "L1TACnD8fG8NaReSSRbN2moF58dyQLWSrVZXGPifPtye6pAeXVpzSHvXvMyRMipmMAyQS2C8YS56EV3tMWeuxSv",
  "key3": "2wkDpA6kH2HFnGxhzM8HywtuPw1Rf19jvGTjDczMPCCWmT1cs7H7xVcdQ1HN4mZcsBXH64zXr8C2bCKJe7xFMVYr",
  "key4": "4xaXHAPzJ6F3UfWbMTDhda4ESuCfuaPoioo4ybpk6Sx3TuyhNr61Vyuk2JoRiFvWESZjqjJJnaK9RTuPCRuYMeqX",
  "key5": "5i1H9H2GgvWhzczEXTRQcgDCFaV3sjEhiNXfMRYo3Wf1KN2NHX5kovC3NgCh6wyjSiA4EVHdurVgoL9Fmgf85DQ8",
  "key6": "iNdJhhBukGjHEpr7W3ja5NK3HyRGRiN3RLq4p24HnZ1gYNYFK6kU3P2CR34KPSY9HvMw5W58T7zyaXbtrZRHRfV",
  "key7": "5NKxSdqLSZ22YTn2J9GxdwVhoUVKK4KqhBidYvSRyGd9yi6MgptUojfQDmRz87FHV9ASMghtBFuPSXvvLeLwbzHV",
  "key8": "36MWqfN4ZkzFNM5nzRZ9bFjHRu7FtMqMTXru2MAFwZYcnKZm6bL9fGhw6q5jArN4ZcRkA7fDF8JwZGCG942i3RVh",
  "key9": "5XyUUkWtG5U8NDxWR5CVvPuugkoudBd68yNCTgwimPCVoydbdjgqeKjD1qoRyhPaxQTU4e66rvhyid6MRahkqqaQ",
  "key10": "56sZ9MuEu6ENTTuDYMqr1WhepNhEUiejvLVvjjGqDKSLpqnifX5CAHp9t66yiXQaAdZfwcr9zQ8BnHW8tyotHaQH",
  "key11": "4jtggpANgZYjGpw3KZBjVBPrQ2So6J4MrqmG2kKqm9cbzBE82ueoczPnYvQ4yDvY6eyS6LDNnPJaL7B79RhBW5eM",
  "key12": "X5tSVdYu2F3uC5JxDWj2umpiZcih9JD2b7eqaCDyBSDd662r6b2R5pQ9zJh4Q7XASkK9aJmYwTczCbnA5ZFhQ1k",
  "key13": "rWcNrq24ntvgax8o9VxUgEtjdtfkFhxCajNRz9iWgaAXT8qjA6QAvuCahSo1eoroCT1GG3Swn2svh5aPMHMpPX2",
  "key14": "3ce39FrFmmB9pFaJaYARbDZZagV5WgoQnWQ6PBwYcYemmkcPgobPFCf3rJoDazK7AeMUJyYpG46kX7eQu23Kta2P",
  "key15": "2H93kYmBAegAaCrUeMADuAE6BFwHKawhy6twcCsd9SoG9fWG7rGDFxhP9CcnBr3UnBGa6a49MnLLQqvWHVC9oM1V",
  "key16": "4PsL82sVSCHN7xNBCajwsaXeopTTQnGdQbG7kWo2fgvtkS2fWTFY9UPpaa4QGheHtBgZkrErHMfBPWyxvR1WhMxS",
  "key17": "54b5YbHy1CbKAcUAHgmd1C4JzNuS2vF7HSBh9J846qRDjyJa5A8VrWrB3R9E37zkE4go48V4TWbMWfBWm5r6Ypc2",
  "key18": "668jmqdgKEoYzua1rVBzANghvUkaK4DmKedyhyBwhstsJ1yPdbiAz7Et8iLexeWY1bffXNGStFtFQDPkAwYynoDs",
  "key19": "5xNtAcHSBJ3GmDsPG15D9GNfTvMiRGFD3UpRwiJascMNFrtMFzvLUR8KAjgbPfykEGmP87SPcbyPdz3VCMjF8mVC",
  "key20": "2TARRsskwTeQTzGQ9nU38UWEE8f7EYDdy6fMAc5ZF5mFNZP6pKQMHSA8qHdf1F4kX4mbA81S2goG963WKQd6rM6G",
  "key21": "5LSG7B8KrXeJDdxVJLbubcKrsb2ioEFkaviXzEACNmb3zXMR9C8Fex3R8SoNXiGZYWe3nsV8RfLY7Atm3peT4e9C",
  "key22": "Zr4gHgKxbYm6gWL1bBtC8nSSyro8SDnd4iwdtPzxev5qNZE3iJGmiGGWwpiyFFGYpRFFfPNoHcuhJuF4kMMWi2i",
  "key23": "5ELEAshRtYi9UdaLVSaGsFDPgMsHDqWN2tN4NCqmmdQ2Sk8i2BhzqcUqdRBD3hsJVCsBb1ih59ZcUGNTE4uN6CJW",
  "key24": "94zXhKGso7VNf9YQMtEm1EFy7KsK8Ey4ynQ5CrHsk3UXaqdehu4Di9Qqt17PEPMN55APjaNsPLEk2NSgDRMWMR8"
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
