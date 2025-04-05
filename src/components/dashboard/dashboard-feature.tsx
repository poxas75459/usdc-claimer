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
    "4eezK7DkZwownvCfjgVhU6Tp7GR2wDgohCrDmfvQPiH2JpKWEB4DJzg4AhLGCZFQqKdBsjQ8HVpwt6ugy7Q1SgiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNg7G6hveMLSQCgnEeEqJHmveFXYu9yfiEZwzWL8S41djqhdVpg42ZBmF7PskVHFpMVQ7x2ebPeRF7d5UXwQ2wC",
  "key1": "DixKjBDjLE86f4r8jN2oEzvU32bLyzHX63kybbFmu6Zd3ZrEkeJ7R9Zomyx4YuusV5w8SHV6kBLyKFByEbRXFr5",
  "key2": "2WcMA7gfpve1BVur1BpogaZfttkiYGt4QZwXfiEXLdnmcsyXg2ZqNUkxoZMWbEHbG1mJV6nDQHMKsKGXqcgHunkX",
  "key3": "5LA9jFw6HbaQjc9VAFduRC1s1mTqaVCX8CVTFgB3NEoyg7PXjqGhPGr352M9kJgd44K1YJrCjesEcHrbQtLJ39Lx",
  "key4": "577LVdkbnRjo5GMDFnwaV3uiE7Q4GsfXNR8Ba5BjE1fmmTxbdd2TiXEe1kNwzB2xJXErnW2VxujYEzXToHeJ2G1o",
  "key5": "MQ1eGZKPVK4Aw2iTUCZwNvucr7o94jwAri6jwPQdcZLCP4KUKguQFTSgeaJWHST5JrL2VD7cgi3mb9SfSymAmiL",
  "key6": "2AxoohmE9SAXYyPADX2DfcnvMmDKXkLshrm7XxNGDoV5GTfPSJNPQZEzHPNDzyKxAaT7ijNPpjqMYBR8YRFR24nY",
  "key7": "3vLjeaccDyJEzodpYr4aanT45WTQTJLksAj1by5K6TAELdMa2AVstTH4FRzjfPbRB3vKDJye9XTL5gYML8RKSBEU",
  "key8": "m3nD51uM3fjgs8S6xdfoC5qoTVoQzULqtiJKYarFVUyvRVcKcwYqwdBHgLj4mx1EgmEh9RLKP6S4aDU1moWHhUT",
  "key9": "5hsh7oQcs7ag26S9CCVym8SJGT4FHr98Qbrpyz81vC7qpXjfndpXX4bbqJLTEY4rZpuHpzfrGPSq4e2PhrUPrrAo",
  "key10": "mm291Xir15uToi8xBWSR9HxhPg93xand8gGJVTj81A1XmmWBdYna6kFHX4j72rYknj5w3jgB4vmkU9BXQG4Js6k",
  "key11": "2ft1zVyR21J6Kn8yXQAwGoFFCd1nd2ezLR7oFPKafvkgxAzDbrs9LjmoMDrbxEcDw3Jnb5knL28WqP7ehTbwxLjD",
  "key12": "5N1k31eq7k7frtfJHJ73XCKk4QoqGBRmbuR1v9ythJcjnABWhBDYmNYw9KWrLuD6Hdh3qcGbLoKbSoYvwY9UAMEn",
  "key13": "5XChs7RnHDwTCGeBidBSL97u5UiEauJzccXahivrNKVqkzimPua8q9hYF6QcyoLw5o4acZDtY2eCrLWu8WogAPwR",
  "key14": "2EDPaQtw4ZzX1WQPQQd1urcTfHmbMDkuGR9m5utLPZoN5h3Q51Z7HY1HB5CXK91xzEKQ6fKoYzeoXFuR863dhueP",
  "key15": "2wM8zZchjaqrwuhMyAaGt2LLUUofGUFEhvdH6YjMUjNkwAYMbkNXVAHMTqAbrLqazxB48DFsRHtFVENx4AuvJhDg",
  "key16": "43HAhW28YGfccMvw5hix6fm1LTGokMUeME6Yj4GL5X69v3M2y8AsKYNLqnsFuEMtWZKvoQ2q5wxskVzWri1hS8Ar",
  "key17": "f7gcpwD2XfnVrXPZjY1GwAwUX2Xe5KUjyh2zXtdSb5ZTJ3WZYkKHPo4C4ZtYg3iqVx3TYKeQWGhUhkCjt4p8Wm2",
  "key18": "ZpP7Gw32jMYNmfAurdjaLd3UM5dzyXCBrDtjSuESCAsD2GnZ2CwTKwG5fhNo44JuDDhCh8WAhR2v1SgqvoZPSBL",
  "key19": "4ou94jHDfCwQW5gSpVusG4NPea1QH8wLFfsZ6SWFCLsaYYe2vShyVyDSfQ7jxzPugQyUQehpbKeFkuGZ4R6SaSGU",
  "key20": "gzwu65gWdb3F3QCpi8weHNFYMhTYqh7z7HDoE879NQuQNbzZXnJuUkzareTHMnpgxtJVqJByUBF77rwgCx8nbnE",
  "key21": "5hGRrAv9HwgS2F8FmGDZePNm9zwFSrBRWkt9Bebw6ctDRHBktKEyT5sH5g1YS4PfwKA2mBPntahGuAa7NGnQ4n5F",
  "key22": "5CnY3EUGRoPT29oEadKniMcFmHYWKsYC4URwMhUV9UNZekxD2pwnWVsdUgJk143PStvc7EL8r7iv2FpVxjf3xVS6",
  "key23": "2B1aeqSQwX9T8BoA1gxAB1yfUo33UNisuKbgiZoGdNHCefcm5CcuRRvygGhuEyy9XJAVVQdxeXJxkExV9nrN7QDh",
  "key24": "5gcq4XzTS8uQ2JQHw4c19kfqMMBUKPKQ39ksWQm7ohN5pNKEW3zqhkhY62eMbNP3XwAa1KDuFA5UbhwN4kAKXT7o",
  "key25": "3KCqJoNn8GQm1YT3JrYwbjzFooc4EgWGA3iz6qYi8GUuj3zf967XJ9SkBPRzTiuZqCC7zFZvDTYKFGQVqdr9g5Cc",
  "key26": "2s38rptwuTNXNFuvgCMVoD2GvzYXBXpFLykyXnetdNxKesga2ssUWpdP2fBgUPZ66miHStJBy9W51nBuN9bfsveg",
  "key27": "NCUjnPdi6Ure3S12JXNHvYoX9fhhQVGwn48HWQnq8Rbkp9DtnbSAXet5PRv9c5CJD99ynuGx7uAu4fdVCkGmsRs",
  "key28": "3v4TyVUTF4zzLPh1uk1vSvzLmCpzw5kbe9E1TEH6jv2HHvdgvkAtzqRcU4kC5NvNBaQh4wjfAnbkn6WXYTuMQF23",
  "key29": "56KkS11TheZPZN3PNxHz2EqBJ7wN4MrBqHv75aeX3sv1Ysq78oUmitgEZbaT9627EdU1yRejpD8RhoJBabr2dxxA",
  "key30": "66PSZbdnnK7uzn9XHQ2VsXa32cDSyLAX8pCT68mkBQDwjBzUa3VQbtcxKsPoyEJ3tgi22kSUxC9gtqpM75bvf4Ax",
  "key31": "2JdY52Vg4MbUrH9kVdhL9kdjFufRrk2Tb8Pc7FdrG69yqr6BHiKQUvXn2QwSmua7saMhNjk7LttaBwgtRUvPkycm",
  "key32": "3d2LhQnr2ZZzEtMXp7RzP8B5HBB9h7YLvFtb9s77o68JHznizT8Y2oEWmwzAGvaaWZuVzjJk3uM3Q7NSjMSTcsrs",
  "key33": "5CwzWvjCqU5Wn1MfQvcaZhHqpv2VotTreT8aHmsRvLKzHD3DYmuyjG2h2imgnqZhAeEmertbcoatKcGdZpcmcYon",
  "key34": "3QEbH4DC8kHCvPp6ZdyH6tXsn2aieTUSVdFjy9wMRCDexi1MY2A9GmGJjG7xZkQn3fxHCAVsSCo76vBwa7NsiDaA"
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
