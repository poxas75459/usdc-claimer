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
    "nGnHdc2YtNxg6Aye6MMdQVjN6i1GGEggVyyfycDtoWj9yTRiLojZWw7q1iYXvZGiJpzv9ktERQuCC4Q8VynvXRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23VaHffZHArW2zp4AJZiLvhCPFL969bWmpj3tDKVTYMTyuitzKib7RbfkDLM5VKhQwXGnj5WYmuDJhRmngfbMB1o",
  "key1": "2G6Cfxx9mg1p2FhkvZTWseQXXmWRaUW6mefesNsuYLXMZHtcK27Mk432h5zWzv3YNRk8M9nBPD5HPwtnJ6EdY53s",
  "key2": "5GedXTneWn3TfZvHimvmJ7CctbNiTbntJWCUQGboojyuGSpTKt2Gzaxkd5tRSPae95ZFoRLaDXqw7DKiQuGfTBgE",
  "key3": "21qpC4nw9GdcjsyZQjrdyYCggijMonS1PnUbfgmBdp33wYVnsk6sdBA77WrEX6ds4eFFvdfAvEpoB9KuDyFeSiUM",
  "key4": "2RgHrhURBbHR7SDgXqA39z2LX6Y4jHmWCvF4HNJ6hSFkZehL8xYUj2suCqPsGvesqwJp59tzY7V6zAXgDCY84tqv",
  "key5": "4B8dKyvxyT4gh27AeEXZyDYRm7MVADWv6XbbHYUL6qDLwvhPAVFnS2NPkbGWNPeXrJr2T6u5sHiSTejGkJGBR8RG",
  "key6": "4bmTpyJK5Qp7L3iUGvis5yzRbNjyanVvLJUJPYY4dzRFeyfdCAEy187tJC4d72tQfAhZ7SfdZKF1TRufweL511s",
  "key7": "2mF8jghzzbqgUSMrHTgJcm7Rn6qEWKMQhzZpNqpcQw2umtAFFsZE75VeQmVVct2p843KD4Adeks45u3Hp4yfTJE5",
  "key8": "2ena3NT56ewCFmQZPHHunYYu2bBjNuW53Ecxrf5NxWMus45zQgg7xbKvqyC2z4W6ecqbeEPtssyo6m4R45ZDc4Jw",
  "key9": "2MfxF1HiqGEmSutcyp3KFmrLoa3tcJBaTnvDTRX9mkubM2N3TF7SfTsjsisRfYCxTNj7w3KzxQyYZK6ye4AqccK5",
  "key10": "29UK9GM1LQk9ZtFsvGHfR2YN7nLjJLo9pXiMfTHG9MzbEW63nu8PwAAVymrpgmYKcbvHrwgeECigAGQCfVqbAHnw",
  "key11": "2gDEeLqi8ny2KgxeLj1khQnrpWjMewK9TAFRFsWceCHqrEYQrSHBQprMSTvXdXV8HHD5qi23HGKVXeAn4VjZAKWf",
  "key12": "3ATtW3mXTDcR6MTosG1nNsnhtoEsJBvcHESmD1xLgKcK1DS4UxddZyozroZXAgaAxjtH15nudEdJXUZNGHE5fLPc",
  "key13": "5dmRuYoMTNePmfhtEqkW22EhmvBsrCAhRB9ZVnznZgJS1w6Rf9E85eXsqGzKeb6BbUaf7VLxMAa6k1GpPnaMeNjE",
  "key14": "4q7XbAdDa2HfgavuK3imabeXoecnxg5ThJg9t5GPcNjakA5ditaMjD39Nrz8q98M3sZwsGierH51s5Wg5yJWwuz1",
  "key15": "27fBtMEYnygNiu8ff6WPndXzxXpiKXm1N3WCRbfB5TJagoLsRSYJuQ7bU28LV62g8CZtnhEcbhWM25PSWGgMRaR7",
  "key16": "GVur86psu88FnKwBGRyBhcGFs5GWSzXj3eAurkTaThWgr7zj4mUMGeV5zwdXGor9Z1k8cF2Zzs1Rp3ENa4S7AAd",
  "key17": "5xv2A8gtiPo2nkeZp5C9kmHtSEVLvq6M3wjk5ofXmfD48taRPYxCUCWD4UsvXN2wS9jyRowQxTGk36LDzR52zy5V",
  "key18": "324ew5BwtUyUrcAKwNoRe33wKAMVZ17aBsTrz9P5fU3F1VqETtkxfvAhxgvK5sMdrv5C1rG249w9DUbeN9oPB47D",
  "key19": "63irpDWgHoT7hLzkfhbDknauX6U3SNapV3sysMB4jBz4cGyniaYbx5BSEuzDotuwsJDCAeJpqHDJUbThfBbp8pWY",
  "key20": "4w33Sfy7vq3YVeoxTE4XT2LG6nC8fgDhBknSXjn4fYjdgbRFnt6NSAyzhMfXyxCqrthhSECgh8LaKFFyNEMeGWvB",
  "key21": "AfqixmDpeJgxfgqhGBjeBFeSDk96qEusc2di2uuXQxxzrnMpcakgKbra6E276SYGqUBYwZDKM5qYXCychdxpbsu",
  "key22": "zGAyg9nAcFERCCkQ4q8htAWGdkQKDrbjY2bR4p6TX36vq7woPA9Amhc2R2DxVWQJHHo6UbqCP8YqBdg2pLSiUTm",
  "key23": "35rmfmD92g1W7YswsguGh8zAF1wG9DmiSn6zQm6fZmzZp6R9L9U4yGcPupw1uKfxLDsvcRqouwuz3h1QowAPcrk3",
  "key24": "46u3WXUm1iHSYMBFUNL6BTuC2PBQQqzeBLgeA7wxJ6iNfdehiekjoHv9PBt4PzqhL2F3Bax2nwBcXzExyWjb8xea",
  "key25": "yQHfJoJEEh6TUyFUE99KhDTfphc6YoK2YN7FtHm5ocQg3ALHsSWXP41JxJnwee3iecmCTsS3FJwEhBaxp9vwpH5",
  "key26": "4ziVvDiPMSzT5fwtmEyhnitWWxayA63MrVup6i9s9Xu6hqwzVv7utuiiLVRewDv3peajJ4FVB1avb5FjuEhFnmoB",
  "key27": "29BvQ6h8mqxhm1FeWxMzA6ra1tuF2vJyVoywyPFuvpe2iYQsmQYhhvnavhcwtwuR7jSJpEyWWE8Mkkn1j8AxviL8",
  "key28": "4yvzzGxPhMpqg1c7V8TVr3yi9db9saq7ZPbn6LCu2WNdkamU7C4jHG5762iNzYvUz59DLzSMJCBKBLTsbfaeA6o7",
  "key29": "hgU6FobXXsnvmT4STi6wDyrVSMUUafV2qbeX1dcAahYgbzs7WE59WTimdeqf7Ln2G11cWiab9Pxa3xjtFPWzsDC",
  "key30": "37qM6tnsxLqhvyMEBcuV1h44aRv1LCeqRSs8Ko7ZKgadrkLSR6oM49BNikAQpEnDbNT9qWwoigWa54yZ6Wo72TjC",
  "key31": "64PtqwgZDAcwwzSSKJoScSthUaXSvMRfYgJup2f1UtadTFLDVNNAqAzPNCbGxjFhtm1by4MM9T1iZiKtprHfP1KZ",
  "key32": "52UVHyvxvCTPvumh4KtUZwKTkGz4qhht6ModNv1U29UtFuiAQYQ49vchiBsPVzsD6PX6u1hXrAjPaUqR6XT37K6m",
  "key33": "B4bx9TSU6DEiMj2VM1VtjJoMwa7NDQnSFoNS4CSjY5m1YsxkyL8D5zgp5hLskcsra7oRuXDwokN5cAS2FwSJcXx",
  "key34": "5dLNGUW3b5XfUnY54iDC8r5WdxwQaTTQCKQq8xKGQC35BtgdTckhNGd3anEc7grUZAxorbzp2RAh6Z9HoF1CXJdE",
  "key35": "dqsaZBYqZm1D9WhTC5SY7pdnYhUBzMn2QUY338GVyn692dSTvj1cjcYi6WjPXBrZeLXhJSmubgNKC3K63gd3Syk",
  "key36": "5sokhqq4Dy3tUop1BgnqrvmR2Ank6fVHUp3RZFAzQCZ2YbfuKo266pgeKaChqLTZg6ANoXSCzxAGZ2sTJ5BgRVHj"
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
