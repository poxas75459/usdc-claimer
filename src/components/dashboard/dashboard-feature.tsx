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
    "3VSkfgXS6ccPDnpNbQu4zEREvPzhG61AdxSjsMaeXAVo2ZiiGLAPPkWyS5XSJd1SNpxpwdiBxNw44NPKbAGuSGs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMcebQ8MPjd2uWe5rdWQXEXg7SmFcdB5khpD3TfNmD25A6yivqbcR2jCbCbw2Uk9eNQ31YmxPTPfsFEZsJz2reH",
  "key1": "3stvW7vyiWzFtthTpEFhZLSmVpGhnQvrGuY7cUGhJ1FBtAnwyayP4cvrVAoVAxYdqSCzm3reWWgW7TBprorq28j8",
  "key2": "2rwpNZg9iPBFcxw4J43x33wpCJq6b7TTWWdED2rAT8cVZyPMY2tqeaXANLswXHaeCq8tUWtm8bCuJ9TZ12k3PXQy",
  "key3": "3kTFoyifnq4QbyzE2T9ZVu9dhyBPitR77doZPVYVvhAJuKgejDvtg5FGbcZ817fgz4L8DT94R4ww3sLBsDxLvTMi",
  "key4": "5oJSuZ3L75Msdt32SBa9ooivrxaZk9dvHKZYrxWyzxy5vFhYuFoTZcKm4vqg6CQ8mKk9BSrdF8xirkgFb2JDeQKS",
  "key5": "63dW3MrR3bpFhyq4UsXwSdJzzh86oMowVG9xGdxp1QsGknJwTojeUk5NZSQanarRBzprqztGQGzzPqQxToSAvBmh",
  "key6": "KJ4jdBTxbPGqwziDy4uecyfJwf2oTfKaWZxLXqgXG5mkg2dNCHoPWEZPCyZshKGQ2XdLskRxg9EHWrTN9cd6mpo",
  "key7": "YTVAsbtMKaNsPMAbjQ3BJBKZtXfSoWwHf5G4phtQLpdG72omDat5Je9yLw7wd3U46eHBToNKvtRrSRHDCQNeNGH",
  "key8": "3z73dqcioTfukeKMhXSvLMWz7zYncNPoPJezJxAjvwrkgrCgrACcwo6GKkrwaV91YZLsPPYLBFmLb7GyX97EdGGu",
  "key9": "4RiK4cZWU9DY5vjwWT9pRuQNqt2rj926muR4brWXaEMxf15gxrUx2mbZwki4kwkw1DgsN8Xjppz7jVNJiNGyA2yn",
  "key10": "27MCDfVoxfWzdipPKYHTaanqULptbV1p6Gr9NWCkpcWKqLZfQB8RS9LCZtNMDXY666tDWQVFAYBxBwJFfqdQtZrQ",
  "key11": "vu1hARJgQbtQ6LUkKow14DQncoHwcn43XDsK3EAxAKSx35te98H62tXaFBbykNnLXu4fLqQD69vyHeYmyJD44VL",
  "key12": "3UECHhKFnwj2HNg4wJ1DZxWow7eXA63cxq6z8RoCVjGbRJLYmqSXBSimqv5S7iacq3cWDjRy1BixWhwk4CtwUT4C",
  "key13": "3PwX7B2GywJqNMwj5nHSfMBXboSSbuHFArrihpes1xfyEN58WEEumLFet6bZGqyUd4z2JUm7hSP2asLYi5ZoL1WQ",
  "key14": "2AoEaFK4QrCF76BFrcK4y8YbXPnYqtNUkUmbqyuCPRSxA5JpgcXfNkEKuEUrv7f5QX5nxkTDs3omJcjKcgjRLyvr",
  "key15": "2TEVzwvmZuXQt7o1hu9zK16vFiaqinE6cn7MF8A3o8Lcrfdj5owbzETiatp2KdekhLjo2aewTbVSgKNNEQfi88T4",
  "key16": "3JM3iLajv3ejwxRcs5Z24CYv1R9YrtZ4azwLXdok4pCzth8iH7zfdsQNkixuzwsqRFbjeuU4EfCWCoo5kQSqjuaq",
  "key17": "5qHWG53RqB5GKSVNY26uVir587QoQnZoQiVb53Mi2h3CsoxBtVcp2L6x95dJG5jwmr6Dvg4kuuG2E6o1o3iuaywX",
  "key18": "57KrA6TFRx75yroPC7oWk67vjHEajPzWCzNAeKt2q7g1Pr9hpGH3KCHV9dPM5rNSfdFs6LfhrTkP2Hvp76SzLANn",
  "key19": "63JY7hoVxZGTruBzESyXgAL43zLtawBR6oZdPdpcsrE9P2RpPMz5hLZgUXme8RPwzg3Lz33ExNtBw9kjex4XAVc2",
  "key20": "PSrzFdThScrGSSsdgTcm2bLrsTMrw9sktV1oB9Nv92DbMmnLxKvvpAmt7LmnpRnhsjJUQoB6K71ZW835fNLXZdw",
  "key21": "q3yT9E4JP3uuHDxPRGUwjsZ9fcYG7rQMEbFLpK6NpnQrHpzjzshYE6g2zzAFSR5vfGV4doN5wmFpvF9HPofzPzM",
  "key22": "2gwC8gzFJdAjokuaDLEdXg1ZuJHX8QGvjpdBQAyYDy5HRXWngHbW4XzyKw3G7zvr9gpWWATLCEMvTdF8MEm8QVHK",
  "key23": "4XybqoFNpAYFF8cVDsbMWMAbEe2FWziBwd2dmh1QkVhCmjkeFMZbzzowXTwS6oZ133zeeDFGTReNfZXEUEHfb4go",
  "key24": "Sn7Yq5PG3bnEjju8RC5LdnfxEs62DL1Qvibvdcb6g71qCTccvvQQK3AvA69hRKs6dtgvEECcFzGKcDpYQiJsXKP",
  "key25": "2kWhH2d6acjWzdCYQ7fXBXcTHLMQqtsAgNNuhBZRwL1pu8RoBbDAUiUVFmXyfAa66TwydSMENHKxuoNDN9GdW3xw",
  "key26": "2wYoh47bDz1wSbb2TgJcUDSREqqN26cjedqFzsn41nEB6wCecwacCYLW6JcA59z7Zqw9WvDnCxVvuXN8Y3C6gVdW",
  "key27": "2fwsf62v5iiXiudcbLdqFbcWP3ac9NXdtEm6PAvcrQLgffBXBxfUE3ZZ2crGZUMkzwuUJNoit8JoFPiV8oH5GUZS",
  "key28": "3fta1CxXNM6gReyZpDGBMB4xfN52XzBSm2HBS2AVHnMNkje7ijDCv14RpiqEg3yzLhERgF4AE8uNsgAjUPz6mqeN",
  "key29": "4xpFqpKh7Lnbj3vfdPsh5kKvvJSvx2Wmir3nz2WpxwBBLuHBnU5Ftaq5iW93GwxgmH3ZFmAdYXWY8oMSm4Sws3uZ",
  "key30": "2KotUHJ9xrkSoEgNLHPtR4nSwhy1MjmPJGeZLNAasuDbei7nMV4ecieJb4Ro91ijs4VWUZCEmkrzjpGLNHsRnG4L",
  "key31": "5fuJHQucnU8bSRpFSogtT9zTTSqmAsS3zkK2gKmZuLBT4sCB5wqxVPkEQHt8gTRaJLsAYBwfG14iy817MUJhMxJa",
  "key32": "3REFWQUeFszP4RzWyQvouyU4H5BaKNYxpjSznDoB64e3pKnsFgew5cgtwMHTX3hgk9zC13zzjqWWCsiJe2tspQgU",
  "key33": "3QrMUY5LkcPo46LFufKj8vi5Jdef72jwSsJ4G8DMkJ9n2wrFyWPnc2qHoKTBqYnVE6HRF4cuGn6ZTGz4hJN8EZ4j"
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
