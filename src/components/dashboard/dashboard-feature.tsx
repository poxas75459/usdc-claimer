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
    "3czCAoHJ9QedwwfnE7v195GRNuyDWA8SnT3iQUXmEjBAPpoSsC27R47B3sLHLPRxqpwJoW1QL8GtDkq2C3r3uZxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQ6WQJfNt59x9utPGM2kXQi4pDrxfP7m8GmoT9GxyPdwdpDHEdgLTNj63EBFBG5qfQ1NGgnSVJv95knMDgQQJdt",
  "key1": "2VS4jkYfjKQuEVEL3UTGTSyeRyQ43DQb94fdZTJHP1MtNcJReU7J95ASEhL7tH94chdZXpuX4hvoybQNu8Msek5g",
  "key2": "12678KEN4CtDD8NUPCHaaWGGnoffGX96SnQuixjvfQwCuRjotfDfZmX1LQUFsd22Nmj4QveQCHTeo7j5xFjgYn5r",
  "key3": "Q1mWJqToj2gmMjq2W4YdFyUhzMcaQDERTBBE4Ur8EZzgKnEXnZfAecBp5upPKW9nB2gu3KXggZeCtbPptL2Zi2L",
  "key4": "C5muaDYAuFHNsDBU49xYPxHqqV9oCkehiu4Bkhud7gnSKteNCUgCmbGkLJKrM241Aik9XerkeAUoy1p8cf2e2Yx",
  "key5": "AQKyjTprMjRkbGijTci8FhSuab3HaPQYFaHievdsPiz7jJpikBxE2coJrtZeJ5ANMbk5JnaTdL4QGZyy1e5pNk7",
  "key6": "CLzojEVyANGsHvBgKQo9HRYqnVscN7ZDAc1TaVSWyEguG5UMiqdSULrefPjQbFxMboWT9fMVezTJkJNfxKZ35ii",
  "key7": "3Tp1auzL4Ku9ybvSJ7pjj7ZputmVBiAvofwqzFqsxHByoQTfAfogBsRYD8NDw18CghEizbzTVUSVJJpzhcxSYEYJ",
  "key8": "Km7x1nKLY8gAWA1dZEaPA3fg7EaZyc4C1bMLHKuYyQahp2r74Moegb5zb1sG9UUx9z3G1svTsnMDWo2RxY4yuaX",
  "key9": "3QztTMSHhgeoV1MkpxyoGTiqE1gg6U9TiLpKbzmN4QEiQ19H2aUwYhK4d2CFGnrGnjXApL9wEs6mJMVzxMxhtPsK",
  "key10": "5dtA4u3p3g9xe34xeyYJcQBhbyEnHahw4j8BnrqLt85x5d66BcWq6HwR6DZ4JrxJ2RUVzbuniKKTAZsV843S6Tb7",
  "key11": "4HihdTzwdx4MuDmeYh29P6qZpbvwsg3EB4ACUHZf6SPKuzo6WfJJ5AXuE8PN1io7HjszACarc8ec4kszPrJzHoC9",
  "key12": "45sbDPUmezTXqemK67UyWepWnikjWCuSYR4SmoVsk8GarSVGWqCyZRRLM4yREmNj2pd9Aw1idpqr121ioEhY97xv",
  "key13": "4tLiCwz2UR1MCiLNjeYZq1S77v7MA5hXKgSAz1kmN4woofbiwZkyzAzzzEyoT4V9esK5dLo6yAexEVdunoA2tft4",
  "key14": "3TkYeKj76G3iL1shfMV52giWNBA1tx3waPAXBjhAPVzGzTd4PHuJjDNTY8WT4fz2NMibsGHcyxFspqtXn1EwF56a",
  "key15": "5FgAPD7JucicsHzmrUmrsR38B5VgnwVk6pd27d7x8f1FwDvG4mQq5CnGcM3ghV6nqSaJXGJvt5JeekHeXcSrc5zt",
  "key16": "39pBmQSNhaEec3y4TmMa6cZ3ACkcgjLzAkQQbfDnmLnB9kLvyjCmvSTh6xtDndpgVitCbB8BTZ2mRy6KeMn6dNuy",
  "key17": "4KDtzEHkxWFV6abemnHYuNFMSddax5Kwjn77kbERMQcrFoT7rq6Xsb4cFi8yvnibzKwAWZyfbUh2FPo9yXkYzz2i",
  "key18": "4Jk4HWnfhksMSCDvF6mz8dPNK62Lv5n9qNMk7yb4T6Sw8sNp5onr9D2aLviV5sdAetTZwhdcHgz2gqNeSMWLgcCc",
  "key19": "31zbxy1qj2kLXgrYW6qzHtfMd4mipYSH7pbt4LYR4Sj9DjyvJ5sR5wKSHeinpP2jUEh5gCGLUFCwN2RyHnUNq9Nq",
  "key20": "32441nPpD6Pfn3PbT4EY7u5hGoggFiUkCDQ2WWCmxQYHXcfknMeJ7poW65sV22g2rYyD4SeDNEADRpjf2JmDdAd6",
  "key21": "3xSbNTU8PY35BDcBCg2h3V7CLSBf4cHce2idB9YiMq9KEYxTHqyxMhhhs9p8dzXMFgByzabCNZyoMuGUFKz41gAu",
  "key22": "EnNoaDR9sUL1hpXV7jpjnzhkCr2X5tBfSsG7un5PX4TJuXzA7TwdHWiCKgJNHhCvAo2ztXWFHXfzfnHDSrypbaF",
  "key23": "4DPd6Q6G8JqDnwgNvUdqPXN4UCbAfFB2bcyURnhYGKD1u17jQfZN2onjnfAf3DepzKaHW7zBEg7FpUZjPJzXeefr",
  "key24": "2kmJX8R4aPwGRUcLc91BQPL3SGHnJgMgUAneoJrt9yQ97mBhEwtEN6Nx2Fm21fYZtUKu3wxP9Lp3wM9vudWNN9Tn",
  "key25": "22XpEyfrgXp7gJTvpJwxGHJj3V9Chv4mU6PR2xUoR94hqTarqqmVoxsVxtJfLQWrgF3ZAKN7VpY553U4AbaTg4G5",
  "key26": "ADSgtNozCxZe1PoSitRNN8kVd86fncNFkvDkSeaiZP7buZBXp5tmiFmZFawneDKyKzsU3UnueSYMLLv9QnFiKZd",
  "key27": "5f8FWWSNb73DYoqi6dBfFD8eTHCVofDra6crdts54mL4tkGFDtJrrfwDojQc5FH5SCev2BfJosNRCf6x75brkgYr",
  "key28": "5LSqknWcKJXaRmULSGc1g1momNgEueKwDcwXfaJ2xGrfaE1FuxR22eQFVtHAmnu2LoKQPXe2rqZ4ZpFrwgcREzNW"
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
