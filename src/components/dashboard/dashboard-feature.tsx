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
    "2k6fTXb7b8oN78YWmK2QyWSe1Wtc4tSdP3tnZfnixdoQAvdtzsYh46XG4WGi7bcxubW6xdqLSiwtxK2yZ78b78xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMD1rdodEM4r2CD3C5mWdaqHc3kCav3Aa65pdct1QgPJ8n8WBdC8sRoqsZd2bfFGiPW81wgWJcRYFRduGuod5jM",
  "key1": "4uP2DQFoGvZaPuoud5fikvrJgyZcXyAACFYEdFkWVxSwfahMU5QZi4RnnhFzmZCTSytHEbN8Xap3WDxkuni9wY6k",
  "key2": "4Cnfzygx9f9HvbW9z3CuGFn1Tqk55J8BWwDCG8Xi6gdoNRr9FhXiUWeNqnWGdy8r1wDu9wLzz2PcZoqpoeKNV2KT",
  "key3": "3AxBRDXrxAiUhx6T1CvXWaezEDaHpgR6NdJKsy5XTWX8m89oKWVqiTWhZNpqXEmRbrqRowP8qrrvaMqESkYd2kTH",
  "key4": "53V9xYeYzJPb6ZrR2CjQrVNtjDDnutoBbcjZqJVhtETEegyTYMtb8eiNZmS8kxPeFKPfo1ijRSX6Ncoau8th1KpX",
  "key5": "4rBA97ZK3axWikFJYa6E4LUyFKiLPqMdeQNFeZYgiFAv46ppmJ8SxmnKqXBNrRaywLWePLStaEj6CMYLnKfnU45",
  "key6": "5s2Tq5eUq94mrHPDasHdpX1f75YoUqjjFX8AzfcHJfWMX4W9UkXtfZt6cw2Jw1yfU63jdjPU9bkaphYdehwhCAt5",
  "key7": "5VmrFaCeSnB5nTFkLeDs629e1Lai58dybhfUSQfmWkTLYjaZ2z1L77M9s4FVekXhbHwoPAPDX6FFBPQLYb1Mnf5r",
  "key8": "4PBUSvAwLUZEdLKjGfPZvEB3Q2iZ4maFtMfNHu9i1Q8DeNJE4q95GQkR1btxkZx3cXsDynctMQ1k275jZnqoA7k6",
  "key9": "3WJWK9ytuACWGJmo9qJc8RpcgbCM3shbC66aotjf1kn9GPaTPzrfSZ85BKs8e9qNirWNc3CGjyVL1Sv5J1T8Dsvy",
  "key10": "4xxCcf9i2QtgvvMy76ihrvWJgJJ4iQFDu7iR6PKFKsJpNPcmV48UEdp4hSHXF8zWdFVGfHH7omqEF59zVTZmi5ow",
  "key11": "2NzduqMsciJdUpWb1FLt3bJFcwHXKPJ8EGxYCifpQdk4kfxwdpxS71mTu5UF6GnfNnMdxLfEzap5d4fgLC7sRTnx",
  "key12": "64UN7QNAmSA8HjgokBZcKa35krcaqyaBw97LH9WtxCymQSn4PnCBCkfpmVJ8ToNwQbtc8FQbjrXs32jVku3wvQtv",
  "key13": "3xVzEdSKxbt6fChVkt66PeytB6qhur26831XdvD1yRScdZWR1LDkTAGEK1S3gSip9aNYwwfT1sK2KpnySjypT9J9",
  "key14": "5DDhPTXzf64M8CmP7E47JFZ49sbssA8AHJEKCM6MQdgRW3tymaRUst2eQ2k3tcfnsNRoGBPuJjHrii3jCm1kbGjD",
  "key15": "4zezNpngQgwormYxjtnHT22ZaWYcQvzd62vwoNgRMURnMVo3TfsuaHpVNAWrKQf9T4LaQPbixkdLjApbiju94ua3",
  "key16": "3CgSz2Aei4yzw6qWAZDqWnkMumey7V5yBVmvQ6uXjLCMUr4fWVFCaBCwzL2QKRznf2vKDVCjDYawtPT823LarMLZ",
  "key17": "2e4VLBy3e4gwMCfY9Cgk8rkKUFiTYKLUuiAXGL8snojMJg7xYmzGjR3Se1ieRgUB8ERjZA8UkfZKSqQCC4aTMi5M",
  "key18": "5HeVCW7jwvZXE2er291rSipa32AGpRHWC1oi1dXZPC4EaxsbtxdVebR8zYZZBDVSjsW3dwvZYfZULq2rJWRuX6ev",
  "key19": "4pscoM6NZBEMpz8x7gGGdePycTtMr4HYpp1BfLDiv5a6zro1ZHtpZbFFwSbASD66zgE5YmdFcZet1eBoxtL893oA",
  "key20": "5tMxj2PjnaUpK26uL7ECzwx8Ei5Ahfgk9yK2reuHaFKR9CP6qs9KLWx5ELSsKQSmryTWUHw3DjRbptqPQGMNC3UP",
  "key21": "4pt7jYUNWNosruH2whvEA9acSxFLRG6ypXdS94xuUjVExAvPNCvAevVor8Spoig4GuPqrsNTbp2vJbBESUsJLDvT",
  "key22": "5txsiGSWDuZtTCC18q5NGqHQhKmoePpQkRbVYfQi1HKQFdnKeqNJmsAKETGcsjzAMKwueWC5snTsKquPUcJHLPzK",
  "key23": "3wwY7BgAKFiSGJMLp7xCLgNQPGqsDVGEWLNB5FPwZrKgEJA1wG4ts59j9kbiXpSqqEqaCkLDrDqde6o3jLpgta9j",
  "key24": "4jyhQ79eSxVUgnnboRLqgFNyb36S77u2cihapPkkDG9Rd8dKPzwUMqAAhWdpCFdWLVxxtQyV4VaEs7yRpK8GqRcg",
  "key25": "55wYM3YQXLF7U29yaZ3y2K8AHP1wEpbCVjysvEd6Pe35tHptdsufNqDWWhd2wtZQkcCaR9rk1WXkt5HHBWoocoZx"
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
