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
    "bDtU7cFEoZeNLZ1sXYuDdiXe4w47D5eBdUWBNq5ChmPRqzqeS8ykQZkb78hqQEv5nhMcS7Z6qZHxNd8wdfBzMco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HHkihoY41FXVKmyqLFHJkUonpasFtGZJ3hmUFr2V9U5q26NZdzyJtH8nTGczHAz9HqyQhF851ByTPFtMDkKz1LP",
  "key1": "3W1DKQUy84jnuL1VjP3FUcaeoB6KACXLV4E59h3FGm9czHX2wtfPZvHcb3z9kqAiENtHthS7yKFBeezBR5oKs8da",
  "key2": "4YfWEZ3mHY1R455XxkYucwAWmBJodRUUCiD7okeSFDsjmKvXppfWuhDVDGX1oydAh5jCtz59hVhRxebNfrMadcaz",
  "key3": "59crKkWFtjrVxwkqsVocenXASjajG9JNdCU1xJHersZCwrRKHnFR9au4F66yqD4n1v1HMzB5qrd65S39xCa7hq8c",
  "key4": "34gmLzeMtP3Uw1J2EuZ6aUQ6A32PPPMcXCkxEy91T99HU4BHyr1DnWmiBXrbptn2nnNYGPkUF9mLJDkbE3MgQ21B",
  "key5": "3t9s6zAve8cTvr87okQpg5Yy6PQwJENgpghPmz7vn8wvyJFoMdhiEA78P82FvhNBRjjigwhYiWjL9PTN6wyiRc88",
  "key6": "5ueiPA42Jmk2VoEdqXE28o6DbDg6BQ7eGWxYTRQFbY6ijpS13XY87e36x2sYCfBpbk2xXWVtUJxEmdAgKLVUzFGb",
  "key7": "LFyH2Yu63jm2VbR2Kj1QTYBNPyrxLa77m4uuFsEqRGsQUezhVNngqux9UudagjnWeJrHjeHc6eNUcQMeuS3vvZC",
  "key8": "2wcfAsHXqGe8sYVJQDCHk1FEc8MgaJfmjYqHjaYb54phd7eCSS831HTmtHUC176JW4HWVCYijmMqG3iAwW3Vz16u",
  "key9": "58S8grErMK2Zfep5ZTVxXXS5JmvqDE6h1jzoYQsBTHp9G29WLBLwzDSdDCGTZMjFZzwj71GCR7cSkYdFeC2fppWN",
  "key10": "L3cRAvtfAyQqxUQG8Cc1G6BRgX3Qf7Q5hwnRN7eJESukSriPAfAUsZTUaFjhGYDzD2s5A4e1QsNzfSnyrDrMd4v",
  "key11": "5PBZHTKiMVWeeYq96qaz7rn6fAAcFdQb8KbugUuSEtQEUaP5EWexf5Mr6XusGBSFnxaGbSj6huAm3qpX7epA7B8g",
  "key12": "3PTGKKeKgGgbjRbDo3ahYaPC5ywHC6xJ5x9QZNXfsnusk3wQNsmF8E5wJA9EqFsazacnFPdCnkbxtMRCpKxYcMMa",
  "key13": "2YXQVasydzw4a1xGAwLJesTjFDMyKq4R24zMHmpYPSG5V8aErSfAQDoPsM7TvYHfrRD7Ymo6Wzzi3Lh5Vp3RvZ8M",
  "key14": "42ZcFGL7zmSwpJD9YnE2AGqYjQUCcMiaY1SaAMdn3RAqZF9CmdSpHWUJ5Mit8pvK8rqyY5HnCwuXFnw1uNL6gRCq",
  "key15": "4qMejNoeY1P2ZcmCXqF57A5YanjCF4iHEw67A8WdiM7JznafAPsXUfVvzjGyf8UxtBsQeJ3rdhRJoiMKdUQQzseZ",
  "key16": "4WF9ZdyRRhWTNHJN6sXXxu9911GhnSD7Kkhg1W2T59SHNVphBo8tU8EgcCU2PCouWr5R1swtnT8c3bp2RwyCQGPN",
  "key17": "3Z4KJx8iz39UUrBuBsvZ2vbmxw8cyruR5noTLaganEaQSCA8qV5fKtAHMZjcB8ufUqAGVVYweDiBGCtBUW9vJy1a",
  "key18": "4SpNKseTtX2q5FGZxdDgm42aNWPphsootRxeSGWafVwYNJBxH9gN1tHZ7x8h4GVbCyr1YWo51rYakY5zmDXQxTXe",
  "key19": "5kH6oH2JxkYwPXakKUpNNRKm5ddDnLXt1CmHkFP3bXQePewMHRajiCksxA6kP4kyLLPkb2mMFzk7TNcvPEvqqtvU",
  "key20": "5aAf9eg1ZC2tTsiRP6ntFQT5u52vKkYyqQ9hMXqdF3q9KUQZKXrcTbHAqbNfsTQdVeTg6HL97kyU5T5jaEh6AMTX",
  "key21": "i4jGtXKj62NSnp5rL5WtXGCnDGQr8fXkNmXopLLVy9jA5KURvx7oKRpvBXygESsfhBkRDyZ9v6B8DhtVvxw3iAJ",
  "key22": "2gDcsDumgBm9S2QJNonv4nXeVeP5D8266RzmhfrJStDTXfcMHCYMXGdshVAdGJSveXcoKtHsV3GZZLSq85zboCaL",
  "key23": "8rFeu5vTQETmUadtkrGN1r87mYHmKPeKJw2KS2XLh3R8T5kp4uUdfGgtqGLEr2kFyAUij9TS27J6tJciCUgBQiW",
  "key24": "GRftVyZ16tGqKEpTKw1iw7BUhSPUtdYPRZ1wAb72wnnXcrwXiTinf6eHLPGykUsV5ud1Uqv7yYWtSZEkUa7FnNs",
  "key25": "5uuM5GZScBmJ9EBNDfMv6WSqGHSsKnUM135noyukhaxKLMiUfCwf2kA8GaR27Uu4WjdkMUdsniemCx2UV8k5BozD",
  "key26": "3VVQiGozt67NCBDnXy5fByhGrrtgi3vuQK15PUEPe34w72BuAnyM1vBHXJf9ZCzGQJYNybw4L6pQPYDobCoMK2yP",
  "key27": "3sSfCPiwgz9g4DRC11B46G1qqXyPafi2ZfE9VZt51h4LUzWJepmfpemjBXPpFoQ4G8TxuHgRja5SxTHPUJ6rsD8g",
  "key28": "wpJ2DgUKspLAzeweN3VgZkSrFhZ3y3Z98io7MsxP9BQ6mWgoM6e9xTdCQQPuadrrAkScVmBSu3jcemcXjgE5bhc",
  "key29": "4T9zkbcBHSrR8u42UcASDJwrBwZw7zWokTiMY6nVZWpbQbdTQFvuL4zjTeQZ4ErhQFLrtTN6hLudUHcLmdqcVDS4",
  "key30": "4dfWbyPqVWzwjJWUywp7Y7TGkp19MWYptYkYAajiC2z5gubzkrmDkqSnDepHBZJ3k68HK5h8Zb6wptyJtEjXkeA5",
  "key31": "3Ga54QGSSaZJWvh626rD33BDJiJcJuwL3d3Ck223SQPP4qN1MKfYL2YNnopvvDFYCLf26AprtgqPgtSyS3EX4gVb",
  "key32": "4jkLnFTcSQxqeE3uT2kPnnGQCrUJe949Y82kph58uyYGtKLawEqs4xbKQW1musKMBsRnRAGvT8TqicFodtdGVdHV",
  "key33": "5GqSgxm2rLVr9tXMYohxeBG3sN52itMaiAjUGY2ykntnLyL64BoUFHnsx62HCLMSbqFQZSeuR4MLkRBLfLnHZ3No",
  "key34": "JJVV4AzwUykz9UwVA1WbvrDnVpcyf3mqgc1mw3eyeobCFzdDHzCf8BUQwJoht4xrXkzmMhiq8wxSr2nFQFhb2r2",
  "key35": "32c2RFEqsPbyhAaNb9Ech3YemDgHv8zBcDDyV99zmBKgPUaTQyErhcdbyszLH6LfrZY6PRN6gbP8jQDYeH1rwqQi",
  "key36": "2ZA3iWeBvFDAGjaL1NVT3FiCjjBLB2mQxZNAuQG29noRMW2uswPSweJRgrbt8m2fYhLJr2mHMNjs3UUpPLGPtjTT",
  "key37": "ysgZ5ZXaunUEiDPdC6ngFKVBR2GnrsyymjtThYQNY2spGaPZ1tyj12GoutFyKoSWQKqVc3JRcNMkx63EiDz6Dtp",
  "key38": "56R1L7f2QogDChhcjCrViWBwBPZZRtp21gZvNdkUn8Fm1KpNkqe25g1YXy1ieagVHhptWbocwEWqwJm1YtdTgmCR",
  "key39": "3f6rKbRXRFR45P9pgN52EpaNoj74JDZ2GJaf6ZB2fz5o8EHy6rzsQ1SGs7VN4DghY1YnAyxHi9VDBdgG24Gz1jRN",
  "key40": "4rwvEA3WTK6MjbpKfq7dC7mmn2bur4k1b2UJs4jE2B2D7xhyxBzMy8NtukHC8N9jYW7QAw866f3uxiyyM3AREbXu",
  "key41": "3qAGUSyQYQDnAq2SmCykYd33jE9VBihfvNXn1hxnfX3xZuTGsc5MWmd41dyKiDEQMsqXDwAqe8RtnGQT4V7ALYBh",
  "key42": "4YRhSdB5cM37oJ98esYKLaFXpp7BiMoWqszE7ApkM9pTEtd9WLVHgD2uUFHQtfSjdL9D9GJq5kLbF3SpmncKh9Si",
  "key43": "PALbFk2n3rLFZ7EaiYnm3Ec5yUFZUeMh4w9wZEjHdo172ngZ7KVbjWZ8QQoYGiV7pogUF47bmkECGbxxWNSswAg",
  "key44": "2zmqHwg3beK5Dxb4sAam8Jn5yjTpTpzantk1ybaLtebWSiXANEo9uEuhYbkGuWQBjyJv34QJ6Feg5fjXbrWpFgxx",
  "key45": "kxkFZrZyzKAWaiKCh56fqXtCjRAfwyTG3vEzKDcVXcmdXJPZqM5pU49ft5LR3b5BVAosT5KLxicuVueeYSGzMBm",
  "key46": "5p2LTvxaa2CcBwKUoteDrHas8p6aeRVkgEkkMqr16rMFYVcnBqZczjHfANor4ihLgGMnHUjywcdgTXZg4G2VTkHE",
  "key47": "2rmTKhKMhYLdGX88ocGF5qjdop9LApyFdFv65tS58aJE2ZnFVvJfzyenw12s64zC4T1KJSEkVCv8LWDpJFMuKE84"
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
