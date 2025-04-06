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
    "2WuNURz6DrcFVXAtV7c9rhTZoMikfGWXzb6zycYbeqVbYPqREpiT1LFXGzYZyy3tCTeZRdNUuz22epDRVTub6mCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aj2ujBXxVA4mN2Q9UTDiBr1aUxNpEkNA8SgvpWjkkNtBPqcP1kCE4LTpbTUa9d8Fbju9RaVuUJv7HTjBPN8Wdr6",
  "key1": "DEvzG4u8eLBEh4MR4uNrvagggjAn1mWPjhuhweUPWun3nBdD9z9msGtTPq5AbM2GhJTmVXaJxbEgnbpZndV4spa",
  "key2": "3d8jjCbJDdFzxMUdf9BXMpZ3Ko4ZshvvYXxPQ5kb6PEGoYAxwtybaRgGaC96vm7jPy8dEbQhWDpfLa21n29cdxSP",
  "key3": "5YzyjwwrJ8zFXMdfwvb4QzkfQSwE69KZjNC717npjMfh9S2HCLDgYXLhscKrmY6TcZHP1Yaw4T3r3GfEjwjZz5eb",
  "key4": "5SjVNmay5A6YW2Ggc4c2vscmfY8uDUEyWCtfnsVihhGCe25LgTfuLR1DX8PaY24ao5SYtK5BHMXgwwqvoJ4RumLD",
  "key5": "3xuC47KjToVzHNLXbjZMU1iQQaoKrTC77q5G2SqnBQmzA4cCe9oaiAxJEG7Ce9B3DnsjmFWecxrjccH3RALhqsT2",
  "key6": "5FHz9MXEwrpYP75Y2VVzXPkPQzXZCrtzVaZy1tvdfPUfeMH49gZezRaxCDkHD7XcJukqup4YmoCRfAsBNfa6kE6L",
  "key7": "3DDc9f6rULD2ZXR8ffFUnfkcru4otF4arzWmqsPybcQHxnos8okhi5sf6YoxBMv7FJSjh7KCWHZcS2bMXyWTCnn7",
  "key8": "3Z9QamVApLCnofVCzR9WwWyZfNhGXsPF1q4qtewNPsCM8Ko8kSaziqfswQrQkyutJZ7Ti89cyZud2sEraFdAQ2w2",
  "key9": "5snEREkLssVRhZMjnvgebWwvUAfos7kCgukUciNoRcEWJJPFCLwg4NxckfXpjFpWfvaCZ4mwYkE2Le7M6FGFMT29",
  "key10": "26sBxnzf6brzXuM5uyaNJuD25jpprtjQ85Mq3tyBt4BG9p6gvnatnSfLsoj7n4ScVnM8jWtvhRfZueUCCchaz2x2",
  "key11": "2VNh54MuLY3THc3w6vYVBUah2T5qyBkuwqpUMdCARSZXA8q8Qqr4JgJ3JhU2HpMURCxiiEmu7VDZXcyhUEn7UHdo",
  "key12": "4anjqj7ctnMJGtfe9xyWSejiyWWZzDZ75gQSKW68BxTsXAbuV2ty8UHhr51aSnD9kja2C1LkDJZgq96YWrAtD6ix",
  "key13": "23HbyMHcT8do2qjhTUxRtZKpPUPoKYPRKdu5jWY3uhMeA9ZJ7c8JuFzt5eRjaCfHV6k1DSPr2CsX1VrEbgBmYZpG",
  "key14": "4NT4pns2Nb51SBoC1STZ4vDE65mPTrfBLwoinhTbqi9MJkDffdMChNbn4bSmzbCEZitrFtSaQhCy8sCVkQxT2wTm",
  "key15": "3HP3HEfniSG6vSGtn1prKyVrmefe66wQJoh1P8zpsf5EmBTooXw258teeEQjSAXnoJ5T5Sx4n3g9WZtKETcrn3Dm",
  "key16": "3L9sv7kP7cZcZK2sxm5A39KN1VAeMwKwz3oqMAeCwkjUyaFUMrutYjBrJxVNG82tKWt8TqA1P5YN7XALTe87qfQT",
  "key17": "3PgQqfYYK1VMuntudJ1Ri5ca6F4b7iM2DLR4ZXa34Qg8AcjcsmPkimgHLAeSq95V6x8jHqdFYRE6eDXpRPe67i9E",
  "key18": "3rJkSyf8KJXCx89hHy7zZoPAocvD6n5CSMSYjM2Lsi6poxcdUh3WrF1Mu9Tbc2b9dbSzcZmJMxsHURbfvKy8xK3e",
  "key19": "5oVkgnmoxWvx71iipaFE8sJG2NkkV3YWKvwWHoKuzW7Vhz1AfuwpKfQ9PrAnBEeKccGja9pQ4tXi3u5Lxa9y4deZ",
  "key20": "5uaey73zxTWKn6qF1V65aifW8HBRGSoSZruzagfVKm1kzjLNyvGbdPV6qnPeg3ii4FkrGaDD1Qk6ZB3Dq63VHUfL",
  "key21": "Vr1B4Wuj15PAB5qGp89Dkmazh7y2JhGxRZDFrY9CXGjBQTjrD7QJbkP5YFduPWeqKVCywNFRCKmdHxDKGVTdiZw",
  "key22": "4XntBGyQjJLaFsHaGyFdjuS575sQa9qJQCjdDQeWdAkccffXUcRZQbEedC4EZBPWSJT51JLqUrQAR43cBT7zbXb6",
  "key23": "3F7L5tHBmv8b51BXffBd9qih4KR3BgTFHZhmzwTuqtNMHmKKCLyP1mC3pJsj2dCZvgfrodkng9x1s1AAdRY8KhQ2",
  "key24": "5rsxnCwNd7YPZspWF1GSd2Kv2FzQVUECvry8AEQVwVsJDHo45HRS9Amni8Tr9wzdmVdkH2xbABVFikrk3LSUvYEd",
  "key25": "5sJXN9RZGok4E8q1kQ2n9NxsAMftVP4gTGd2wDeADJU8dkAwNZLyJAPvLg3KDGCwESuA7jcCFE9RpMh7UR89JhKd",
  "key26": "5F988Td52w3A65sbDmJaNLY3fDmLMH2MQsEsXVn2qBmZKvwwnNua3EzZaLUqngGoMZ7s8kk4zpUBgRqroHWRWt5W",
  "key27": "2qgoZ8dqhjoHECGdA798kUPh735VFyAH859wopMMSEZFqcShY1NxPnKSGbXy7SYe3vEeJXguh1SAc76WXm16VJji",
  "key28": "hveCYJM5yjvnVcybRWA9kTk7zi2zg1YvGdSZiqWjxdhPVD3jVkfQAGRBfDTQnggz2WDVExN14PXX71Xm4kPuBaN",
  "key29": "2XeaEfu68utSeZ1Lk33TP5X7WfUcpBoFtCfzBZm8c3k8R2TMu2SwoEUWXbwSCai1C1Kix176WaveavcResdk1TNQ",
  "key30": "2Gw1cZ92VPxmyCjcZv8JmZmuUejTN4jkxHL7Z2M9L2F7C4viCPPxCXW9tvfMCWwnFwYcmzPJdEwsb4c2GJ3pKY9a",
  "key31": "3GPHqZiDQmVJrxG7rKSDtvENFFsFNnc5j46Gte44ma3362ToULwSXZcK7YbfGha2kHZDVNhkHVqP826HusG4i19M",
  "key32": "fdz6s5MpUoCqaCeYDisZqq9NWJLRc3kD35fuHpByQBnfzXQDBAM3gEqZArHsBgWrV6WiAyMs5pPduj7nA8nm74B",
  "key33": "3mUjT9WGAMr6yquYVA8J5tcrAaxxYUopTxULudNye5SzPNncsX7MFb2vtCyAF79VQjmwuYbmyFZ4qUERH5GkvYrC",
  "key34": "Du1kCszu4i1xpgwKnHR8fV4PijCEQzPRCViYj3soUHj634kyZ8SyPCfdCjra6Z98qWYj2xvYEjXEKvcpEvcYqys",
  "key35": "3NB9iNxVcvr1A9nBWjEnA4eM12thLfe7oDVtkgjyhKXzZ1YKwmzTtdurCTgoZ9uNv1uQXYHGr7cdDBmhsqYdExsT",
  "key36": "48D7rGBLgxAJDdaDw7vxSwFgUzMerHFJ26aFApNjMLKz4EYK63CgP2cSvs8JcVss47upykNXwjY7S9BAHrzPR4mQ",
  "key37": "2Yro6b3YDRtfUnM7YPm2yUyeoDketmKmh9GAjc4gpinpLqSQnEBm6ALZbNVa7BF5ePA8fQ7cR5XUc4SVjYxUk2YF",
  "key38": "2EN5wEicKTdtzpQVbuTpnmNAFW5Ax7ro437tJW7HqykWeSfXjc4Lpb8PEaNbjZzw2smczeMUXacvkqYbgNvCGKH1",
  "key39": "WtJUA36RkJ32gAKrf3eKAr7aNoTAnNJjB1tLDwKHp83AA2NoBv95Dp5QAocMmk5aNiYgJisYyyJB1MDKshJjCgA",
  "key40": "e7HfgZ5UFQAeqd6S5WZ5xpDkRWUvBtdn3y8Eso7y9jhr5B3adENwFmdieuSj54SveeaYhYwonXZaSjEoarDdTQQ",
  "key41": "4rgQntzj8797PG9i28fDcLoH4jP2Hsn9w6eP1d7YGkdswKY65U6r7q1EzN577bi8EjTM9HEST8pXCg5iRxgPounK",
  "key42": "4x4L7ogeL3QGp6fFVaHGD4tLxPqi9Dtouzyk6Gk7GSQDPWgm421H8AYqnikxmE7gPWMJ3SPHfeHd9wx8pStSMazj",
  "key43": "3UDy7ELXQLSCA6Ap9aNe2KLEejLL8hqjY8gFPp8L7D6CEauJjZ84jLfz8mRXBZpDVrUYTSjEYLWm8cNQGAfwX6xt",
  "key44": "4ktyhGApSHnHTAFEkAnkw9JDuJdrFT2KnbTjTFL3hchKE9N7rHpkAwGYtUQ5gFYbwJYrhEQYFr6ti6xz31ru4ZBh",
  "key45": "2rLHyb4rSKmmPGqFUeLvWZYNxaX5gTR6Rm7uDeNCvXSmQUjg9Ahh4NABYS7LNTzPFgMUTjppr9ZuvFBVkhSbPPRJ"
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
