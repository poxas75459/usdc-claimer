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
    "52uEAk9opdB5TRHK6pjQKtQifzr3cMwPmhbkW4pjSkViggD8Lxy2nzbQeW1NFUTYMAeZHugNqSeD4SF6i6Gi6t3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5mThA4kkVbRDEkHEybTjH8QG3FXQtFPqpzNU3YT1wtDcf6Gez45uQmSUpKQ5JVhoVj7AaH2roYCQLxUD3bjDPd",
  "key1": "TXUaqkHuhhWdxv29izm439BEZ9JTpDm7YgCPfbYDh4jGPEXPzD8JT2MZQGw5eChNZ7PvhEmChbGQp6NwM7zCYJC",
  "key2": "27uh2L3XZxhE3Wa7Yzy5M5325vHGQa3B8p9cZNGw8Gdh4sLDtEpc27djz4F5XodzvEfMEQ5cXVcKb2g1vsLCTApZ",
  "key3": "4tgqcuBSDudXBm6f9fa4C1sqm6nj8WMJt1nZ6PWxYRZU1LBARwhBAJFAUaiPrLRTcg4xLZfrS9D73AKdQRiCsWaw",
  "key4": "LNVuPFQfNwNzyzGFeitrw1bj6zdjbjHTQYbjduAhFHgJVasttBB2BVhDrL16BMjViAuixivhXNWBZUv5RqBdKfM",
  "key5": "2Nvp7qgRnv2DrznZj1Vi4RDsBz48S8ukr4Rjbe91RM7aj3cUcdbwbHpnoDA7jbjBbREhbcmkoap1ySQv535bDoft",
  "key6": "SehFZaMy8kViR1aY3ur4Ayw7Mwz4Z1k12oworHa7yHsw1aUEHAPzR4rteaq7foyW7PDTW4USKfWAkGLGxGRU1uH",
  "key7": "5nU7ogF4Ttq2zSm1R5Uqphckgu7RWR1dfB29GY62oct4jcitMefUBepHp9qsyJxyiyKxBqA3Hvb2YhVgMKLbDMuw",
  "key8": "35zwhzccpU771wmYk48Wtqu2cKRnbQHdysHgRmbjRAgWxKXVHRAtsjpv1jGpLReE3fVj6q8Zjnp3YPTkA8NrXhTu",
  "key9": "5ydL4tmNZM7edVRWNUKMUxKqxufp5gvrdcwPYyZ2v4S6QC5AUtnprczrATPs1VPYFJ7hQn53h1VtRDHa4Rzrx7xo",
  "key10": "dAAT1EgmmL3rPMEB4VNsDYm4qVUcMSRFoNy94AdA3V2dpVHMPp5Wh5wF4QTiKGJtEaLR3BCvXx3Z4hkWgzUPh1t",
  "key11": "45QnQ6DaCocbEBivaa2uzdvVpejyg2nLW9a3eNNY2JCpzXjYTBewPhGJQYo47BY52mzFowmHqdsgE3L1FydptH78",
  "key12": "3tUhJDkj7Tim4KbD19orQRj9vyeRtcFudL7jDkRzvMUPeW9gfphkmNpdWBuACEA2mZdVA4ZKMGpuZ7sQ9rd5BExN",
  "key13": "2n9t82P2Uq8ndE2tTPEF328yQDRzH6zRMna4uFA3kSV5VBzMFo4g8fjNX1grwZCARpY1wgJDoep8w3eZXjGBWzDE",
  "key14": "5kgwsto5iu3YWJGhieyeyhBLSwBCJaZwD5hQakwBygDds79kont6oBmbzGmn5RAJskyYKMbJ88S6j8qxq8VesKwg",
  "key15": "3sAvnF129Juh27rz4eEADT47okzZ1narZa6ZX51EddSiCt585HfjsD9i8atRhPaMXaV9cfiNnwEjdCojcnndrjwA",
  "key16": "5aFTqD5UjwMhBikW35A7ikJRxxdRc6KG6UxKyQbzUPTbBqNCsR9CwDUNUiLmMT71xvA28tx5doxBFJXRnTDnVDFd",
  "key17": "3dgvXExJepAFTpsQvFMh3DymFnccBtgrGCGRSiFqtDFdqDQosS2CWo9S2xYvPXBgNR4ta3m7UpKqyPunasM9SgrU",
  "key18": "49zCYpNYBKfYEKycq6oZRBxv5F4fMCuuhPSsUfCYwnpoKWzXCmCrX1HXV3MT1qkhgJSuLoTkeZKmprprcTpK2Xig",
  "key19": "qENdkaAM4VMUHRgJTmGU1edfEFSadh3NzQ7iRcdKU8mALfkmYF8fHynsEpjwduMfLhK3hGzX6N2iHwNHpgHRQ8H",
  "key20": "hN3Wq4u562GpFcq14FVj88E6jr9GMpZFEauqnEdGd8iUPtiCYaqCWrewYi3UYwh1tRw56ep6NuCf5A8gJCB7qh5",
  "key21": "4jzUn2oAJimdjVHnxQadz2E9wGX7XQ2cEzLae1yWNzvfbPbnyjc5gw2bnCJA7qZY9J6TnRaQPKaiGxfMm7panHjJ",
  "key22": "5fyw7zTpRwX8gpGMot7YJFHpm9iv2oXU5qtHLuWTtkc61LCPEiWK8vob5Xs36yTDexJzyXG9Hsbr6pm4EvjzjHNF",
  "key23": "4VuPJ2hPAW5BkyBgSK4ZPJN6uE7k11yjdC6xzALgUoD4AmRr5LHuRZLjoJFkYLyVMTj3yAd7bMy4naFAP1H6RXKf",
  "key24": "4fQZm2ERQ5wDhQEzVogULBB2WDy2LMzt6Xf8bmME46kZwaD9SnN8JaZoabhvKaiHh8a1b7JiJydYJYmb8eDwUd3Z",
  "key25": "2AhDk2yqG6eixnTdEwa3nJBwBTEH7hBNgcYz9YEcw2ttjpjzrz6NJJEVnezg12TPwWWk72GeyzmRiGfVdAbU4d74"
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
