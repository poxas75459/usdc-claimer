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
    "4ovv4zngAroME4e49sRMoxQ8GrQQwHYTYp6aVTV3zx9JBQkGDAqzRKqaPgPmYt2GpN3rzzNMQxHyoE2rwXyohw8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JehxDSZSgJMpto5K3XGHfufi3SzGnygrj85V4xQtW7FXsc1XF2DAfBQmdsnDXzXBPW5rraPktM37yYG4bxG9gos",
  "key1": "453AN1EbgF5nMaurnRvRwJKXuoqArpJjSzUx1Cn7gp2zwr5Musk5uXvpVxb7HbFPhxC4u5dYmbK3Xq1kfUTPfpmc",
  "key2": "Pwe1Nh4Wmg6cosRYZEwWYsZU5ahZTFyYcbqkiKjs1mrnJMeV4hj1h9X8tXWQ3ZDVLwvCkECcU9p9Ex3r5s393S6",
  "key3": "54VjdvWRJZJcLMFRb4CagjJ6CYEQWpCDwHTej8LQbVuk1KNdwZ6Kmb8BycukCGBSFTmH9CbVTzJfz6GH98rA1xbx",
  "key4": "5n3ty2MMVMSJLV1wD5oG2T3QL5TBkydRA9xFz4UAjMpdnrHFBxjLWs1BRVg1ZrzVeC36xhZghuze745LZX5ZDvum",
  "key5": "2AdMZNL7yFoeWQvn61qkfR699eZx3VneExe13gqoEt92tCjXDL6b1rhjD4KSofbLNWMA28pqRzSpom1KggBkx1yo",
  "key6": "5FQSynrrHBj2VsJVCiekhLMLwRAS2dwv1v2NGkN5iQ6nxWJx4GypDFNP2UCF5ASKuzLBJx1hjStAj8HVheMfYWgF",
  "key7": "33sAAhwyM3xxfURZdWy5AyRARnCD454f7sJk5WaY1mqsueZQYuvvM256vTYZennBZmmqqTf41vsy7bFksPxDt2qD",
  "key8": "5gVwgY197gYFyzNrazqftsksawbd2fpHfQe54nzGsaDRYu6LRrexEFgKEX1o4bsGarjeew3cxEAjnoPniJGDQR17",
  "key9": "4vNWXHVtsq4rjW3AXdnP6s9pU4NBTDM7aNNjrekHzouprS4H59GsS51XywiNLbGBkMsuCC7Wjajgo5ueWJxpQWnU",
  "key10": "goKMEfTh1UqDRVBeGFpqB7Zmf6KJykNFVV1FWdcQjn6k7VFvhT9qitTmD9q1swnfGmmP8nbRDZd275JiwCAEr1m",
  "key11": "3awA72sfrZeufBEa5gkmdCBwQMuQGmDhw8W7484jEJnZviQosPyaVW9JxGuCggfHb6VnqFzE7pxfma7R65sWGxST",
  "key12": "3wBZTwekc2ZVhJJefMK8b2B3baJ1cUhHyos97opxKaWiPgZoyCiShdpVynrPFUduhukLAd6UV9Js6sFGE2hVhCNv",
  "key13": "4tqNNSAcfFM4XSkV19hMdZ4f7yCYc7zVsGtvpgXsqXJxHm1XQc3KXyjdHcVBpwRb5xuDyYQL5813wJSJrV8UQ1Co",
  "key14": "2xyuHMzYE6f1kmVskfspjgCBUTVZovTqnuAwZUVGHBTuLqq8jaFKb6qYhhbaMX1SnKHmhFUSRV8oC5wmRJKrMD5E",
  "key15": "2EwvQQ5WGjgRWetC2YDy9x1rbsBQeWZKFdUgd5Ai7NHJW1FnpiVL2tiY6jzU1gtzqhe699yv5GddGFXth4Qj47cw",
  "key16": "2VHdfEL3MBB3PY9BoiJL9qGPivL16jEFLX36zPUpjq43KVTDqCWYB2rUfM6n4j4fv7YFCA6Qyb3Nn2wTSWaEgLkh",
  "key17": "5kmAnfWa44wj8vrLncwykBHA89Yk2h6HaiRLMTJVN4CAaaEVdpfXavst9FEU6dfEFkTsMjao5d4jbyjQeiQasfwV",
  "key18": "5UPkxxRY5YYBNdMjwpJJxztpEqCJdam5nrwdXECrU8KkbbSqkYu1oCPRXVBdNvxS8XABDTbVe5SBFjSoEAT3dSDp",
  "key19": "5fsMCtWjbR2AiRMNucKKBsC4wSPtMYm3iTJ5ebQNsJTTLftAFSeC59fZNW1eZvbQTtTukA7pcA1sMCeiQiGTgDuq",
  "key20": "4oJehLZGtt9Vxo1g4FBGHe986KEMxFbBxuShoCMiBPffbBb7pxnczwCundenHLuoEasixYaf8fdyUu2odUxf1n6a",
  "key21": "3uTuAY27E3xrnrqxqHgsBxTmFaHbB9PbqoR2CZ9S4pDhJJJgJyV4Lg3EgDWXQ43AcCwghqqmT53dKF2SPGWa1F9p",
  "key22": "64cLLgSdXY96jgPZfCG9mbGNtxfh6Fb7thDM2Tq35E487ZNC3HBaG2aGtjCYGtT3zYUNbi9JcGemKa4ih1ZyCBAg",
  "key23": "3dfrXesRHEWCeHiYj3VWEASxeydJtJNfLbi5ycitKj9jab1t4opykjSrakK5R5AfutkDyktspee29AGyqFHooaG4",
  "key24": "668g8Wk2QXXLS7vmeyyj3bj4N9po5scmxa1YgrWvrxRrxnsCmFuCka8GCivyKJNch9RDQaYoJ427TkNhBfbsgXEq",
  "key25": "bQYkkhuGjVvVQFSWjFgoiW67MrN2TUfE6YXW7gns8WCJLBGTNqyoqB62jk2seZip8mB2V3gbjTvFZYezGWQg97E",
  "key26": "QK8VWNAbdtCHXFub5bKtDxH6VFsPe4jQZP52cv6TWbsXtK7okqQgUiJNhX21LrCFdEUhnNJDwZJkhKDMNRH1xCQ",
  "key27": "36ZeFyTZdVwVNcv5ZS6YcrNajYw1pLaZ3BeGWX1eZU5gjRahExhem3x6sowAT6ir6egn6S9BVRx7Ewzrex6hAK7P",
  "key28": "3QggLk6Kz5ftQ5z52p4JzmBtU9JerD9UPq6jsDfKM4J5J6Vxx7Hj4sppiLgsbKwj3yZxhmKMMJee422xMqNNJvTE",
  "key29": "4ptebgTtBqydKHP9LTnZkWpfSG5R9n1cR9vcwE1WWpd4DPvUQevZjtutxr63fEUk3Vb8XKhf3Kw7VZVXT1qLN8q9",
  "key30": "4CjpYZN2WHAeriGTr5eiksyLb8NSNwZUUPEmeN5TZvewV4VFSodUsH1u6gB28kG8VSJo5ncK8Lf5nqppBLicbc79",
  "key31": "aMVaZuzYGMSpejtms8AyYy5xFwS2vnoxQs2V6cERaB4GbBz3JMBFEe15ZMrzEH5fh6cWH2BVTGSwmmyccwYNZhx",
  "key32": "6186hYZxK1SAkZxwm51Y5nx6YS8YH9jX4omythRcaS9Tu25iAwvpPDK1SkZSXKivJaxB5WjyuAww26yfdWSCH4o9"
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
