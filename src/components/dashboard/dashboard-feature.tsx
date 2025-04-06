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
    "27D65Er1WACFbJPZzJnVn4ZwqHsrcDUopukAcM6k5YDmTDZBgaTUxPW2C5Nf9zxJGXYLxG9KFiPwixTQxLBpQhQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6eEY7vT2MQRHKWCqiGpraovDLD971DnSuh75JtudsiC2chZaUe23Eo9ihmNRU8kmCqNA2DByFor4UvhkSq3MCW",
  "key1": "2AsH1uMqL6yXJboNGJfzzjUPp7hZup7k19W6MtyxDNqYU2i8qy8ayadEkUQ6m41gTqnhvMyHHEuxPEwhNzAniFJ1",
  "key2": "32EjGv6ht8jcsyxKws2Nj8Vf64xAJnY6tiAyzrDZserzD42jUjUj2bdhCLZ3LhTfQpwMG5rK2TTeZU1dmnqWzPsP",
  "key3": "47HBK1iARGvfyfxbRsTJ82SvimjwoZRNwx5WVapLVKknouD2Ypp4yjH4xA9ppUPHwQ3Rpg7vygakEQ5FexTMWgUa",
  "key4": "2D3xesJJGeu1iVUmZw8AUw8JY4VWNyEDfysgfM6yPEaKTgBudrXdiwDUq2wT8CxHkdfL1ivNBMzANcWai6372X37",
  "key5": "5RNcqQXzMJ1wUxNtsfrV3WcoEt8EySfvvWVfx5ggA4XqoP8gHJBkX9DkGRu4G5zuJrJz6c8HgTT8sbmfTCyquydK",
  "key6": "3aJnmHFUZzC4Q55gwksuigdfnWD8N5CAZ4HPyam5ShbMXvY2oC2fjJ152cvYpaiCSGkrnNaLchyjsNuUAm13LS8f",
  "key7": "5Sgvmjnw54X4ot5pgMo3T9ob4X9iUncYie9eC5jhTVwQEse4LNnd4tzVbWED1xrbMWkfhUujJGD9mnRYKiJZ3UNs",
  "key8": "2PoxKUxi96Wj6CwvhdiWGDGBoCThvMoN4uV7th1bWWUAYmeMA19P727nJvHzD3nqumdnPsYqPL9skj46CDk5QXFD",
  "key9": "evKWJ2nHFHhwcBMgAxQjHMU63XMqLuxN7uwuCgLxnxL8i2BhpsEujjnCh8J7brKVMw1yVVEYQ19o7U2GuvQosjv",
  "key10": "PgxWNovkuAf57Vxe1tkWQXmJgzWgZMUXjFU3t9H2H5rvDWSNNKiA6LV1eVDX1Jqi93yxPzdTxojffekzjgvWHAZ",
  "key11": "5jCHyvQQLuUZ4j6dkYkmx4kfk3KBY5oPqmJ9XiiUtoXz2XARj4Eugc2DPFHgS1ixpTEPU6cL1DVtnkqkYFVX9BDx",
  "key12": "nheXcyGXGnHgwkXadP1smt3VBCDdf4vAWt5R7veqo98aEamDkmymjaG5suhrzeT4UH6kHiE8eFyGWUAfseV8wkh",
  "key13": "5VzDPwbPXp925TSLPeePxciohAao9Rgkk5RW958p1wbAwNwfSPwF2CtQApCdcikKMgaHgBdxCvtj1VN432WdjF8d",
  "key14": "2r5FAbVRTk2CnoECBZaANJimgtojSgfToH2YFbYnV9E5r1hqzxYopBYck7iBRpFKR1JMs3cqQPPf11nhQtJLMswF",
  "key15": "D2DiwDqSKCepcXYuQPnmrk1pSzZZdz1xbXzyG8NKMVC3pG8rVzV8zx7pbGkJGNp15HFnXQeQhongQK9E95TX8dP",
  "key16": "4W6Ct5CiJb6PSQ17c2hwCvk7L1Yyc1zAVaiQJiQ7voAP5rMUhjunU991XaM26373UoTwkYhfDogtjdvD8GEU4iFr",
  "key17": "4Ly1z1RbbiwUWBVxinDvYi6BErNwUhxgUfsN32mpz2jzZvPPi52ZJjYp122Ln1wXDowUPQL69BeDbeCrcJqr1Dd1",
  "key18": "5LoeSriutmZQ2WMzgrw8VygfGetor557zxPxKrSRwfaNTL4wKV2yMXxKbnqdqrZE4MeW9sxb8jznveNzgcPdKbF5",
  "key19": "5uE7Vq179SP7FGi4nqTrNAFw8moNBM2hW5HX778NRsEbEMxUbnp4Q7GJYmAfEF62hdJsCWYzaS4iXsTenPfCQuBX",
  "key20": "5DvQQMF8TFpLH2Zxb7fnhs9q1fZjrVEF1t9yHBUVDBkrXVHemA5cw1CzoAK6phurazLohGknckC8VrZNK6VDfEZd",
  "key21": "Tmq91ee8r1EZQgXsTZdzofXmouvy1yUjE93wy2p38LjpLYYhWibHUUCGt9zUhp41ECL1SsrQ5bdrKPMZC1Sd355",
  "key22": "5HsK4kcdVTjkieYmQBCPW4hrnWghjdHX9g1mctDRh1rLorYq7pm4vrTC5zJedvMnhgYi2oyiZfE1wpAnTNfEfDDR",
  "key23": "5WK2pE4qD8HeCx16yLPJU7Uhh4NVLZ7c3uwZ5SFkadCsJQFvmSUCA4UfE269FkyPkreuJhWAs5Mn8dXMZxVvkdWB",
  "key24": "27PTxggR2E17JAu7GnVUeFAKkBV1hJnZvehZrbftBLSta31dW68oRXsxop1bUSN9NoZT878QUip6yYR3aLiD4bDH",
  "key25": "4XTVEEzuSe2yeRqCdUmUTxvKfpBfTNcAUua8huMGMWtr8QsBZvwpbYxfg1uP7JCXaNjGgzU6oMX8cjCRUaA6n46G",
  "key26": "33g3wCcqWdohbwerfn3sAiyE2hxcR5ynJBkYD3EvfAd3RzEujuWj5fD8gAqNmFB9JEcUHBFii4ijicYcFiGSjT5i",
  "key27": "3iWchkbRHJKdiCodiV9fgDsFgEwq8UwBttxV5hNFBCTd5FGtBqkpmSQLVY3Q5rk7Zp5z93xyZtwAN7KwZF51fapc",
  "key28": "3c9rddDPNNwAiXa8KBtasmpdgLS2RgfGdEjSmFrtP1hH8sd2NeUsfmYc4rHNZBPwnxud6zDrnDK7tzVouAVRJTyg",
  "key29": "26VWdDJSgahTHmVDuNSP2E3JFBm1rRspsJWMvAmrof2tqRo5pTyLKo3y82P9Wp2cA1YggkDCqXzzjGn6w24APmAn"
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
