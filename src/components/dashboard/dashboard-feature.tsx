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
    "w627UrgN3orEqJGU2vpAFyQu1fpLWFmZk5Ekd9zPdzei2UqjjBqg38gGgjSo8ZvTQD34iSXV9M7FUwwUd5w7mpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNUsTZ9u548WqBJ9zA33PdFa2yxSJerW9YbT1rFuRcN8r7WNxXY5mrnb85Zig5SKciwQG5GSJ9QG3nCrbZPLJZs",
  "key1": "4drfVMhVU2zZKWZ8JwFgJ5W24JkoGhuaP2X1qBBw8ydvW7xCR7ugq2JukEpwYnZva24P9RANJYbTJQmw8zdQ2Gwg",
  "key2": "32TzvPHrByXB1NxBcLXM9jp2FgGqNHeYNSS6ADTgjRgQWzNCD94xYkWXyEvPNzV1jB32KUvjMbS3bEpCg4TaQhfw",
  "key3": "45x5dvVa8FgUotXG6GxK72RAA3f29RwMqSEaTeHSr3gjMhXLky5Mb1kRqAgBcHxurnkPtQxbmFiJuL846ZqK2r7q",
  "key4": "4jntskcqVR6oLAHRo874nrX9Wi5KJGHweWDq35aX9Mi83pgUYbEdRxNPKNyWV3LC1WxuUWfN5jNYCSPKPK7ePfDi",
  "key5": "5vougfF2qrcg5g31Y8myDpysKmyS1Kb5T9pfJzLsdDmdh7BGY945WiHKvwYCMtFXhnPmuwH24mSK3p4mtgNt4SPs",
  "key6": "ii96cUV5vXmUowHZqySNhSQWE1QZRyYqVth1eEGdfzswyhL81zahR93b8aEDfAnHnFHoi1RRgTCSkTk5TEdYiiv",
  "key7": "4dpLmJyhQtTbaY3rK3oMiAJ9jsBD4ftVwpfe4hNsabLHeZFD7e96FdwGFFFfbBPaxH1TZzuE2EiAj7amvPDLtA4d",
  "key8": "2fVahTmCFByH9nVvc1BhHBNDeJHBHzsnUbL8QEYNyhitaTkNaE6i5VvxvWysRa1A86UureAkxsSz6bnaor3jsG5",
  "key9": "213gSnmmz5B8x91RGYvRF9iRVZMXBn41KWp7xuVwRRDDbSZRuveJ2V8GCYy6PJm5z2vnDTvuNK4H8ZefPYn1EtgJ",
  "key10": "mqoERgFkNZFW6ADZrYYCQTrV2L3foBit4Qdj6tZyds6LEvZBnC792mfzFbSpQD7dvyB3tKrYob73TjeidrBPLhd",
  "key11": "5Q2yWV9rY6m7YFqMZdGRWYBvX1FLo2Y4LLHe28wkBV4aCKmj3DxNQgsRdQFtbX7skcMWZXrRhLwtAbpjjTz9NETT",
  "key12": "4ZbZtHbrCrcQqHixZtLBDbWcStMiwJ5mAytarpmpP8EoJJNSdLijgUQKYgaiqCsCVnJxpiHguKdhqXmRDfpa3Xv9",
  "key13": "5ee4XHrJXKXi1Nc7A2LMLhgsYQKWrCs53wf7T6fLLekC5sduAm9wmLKybJCixin168yEBdmX1CWYrexza8huHqAy",
  "key14": "5HLfvuBSJSgv3YN35HsVpD2YAYryNe4MPTWBqKNqWWB2dLMWDn3BVPp3hXXZ52ZbEj8PxHAqw364pY6X27XF6XXu",
  "key15": "5YKkcLzcbJq5iCUiHrHirRpJsTcnwuxJeiQBjRCddL3mEeN9nq5sT54pvAed7z7xFFYH9JfC11dFVAj4LgKZbi5t",
  "key16": "4ais9HsW8xwqvvJKMMP1DHLJnDNP76Tbi3yCqTnbRzhRV7fJcc5AtyEGFGAg1JNawX8QUawr9Qy1AP3RADiJAtnm",
  "key17": "2AqKaP193MRTDL4uRXJVVfZWfMw35BLGXkm5Te9yXbZdSbNVkuhd7sdcYoufS7Yp9yDVo9BRN4H9ZsBW3tfoRY4L",
  "key18": "3GWSLkzGAHdY9CEpCidKKoByxaNqWupfYr2NQt83RHPgN3f4X1giNHAZbsMW3eM12iHjwZjoXWwNN3CYMP2nNoe3",
  "key19": "tR1Nu4ZqwWNc83L8XEr9wTBorvZXwGFTQkN2mZkGx1iHh17pRVReSWnSGgXDwHauTTXbUG83FUQHNBZRFT5basU",
  "key20": "3dCwzbQtg4znWnHPw8wNAzKscQasqKzNac2ZrprB53n9ZAhaFjMAQeqeRURrmKr7Kv74M7jS6hmRh6gmP6UPRxLu",
  "key21": "4b5D7fkjucHntZ6FECvWDhZFNLPvnbxMuabeWd7Lunbqjip6EThmGY6amogypECR9JWBnFuEoCCBGF9AEMvAVSiB",
  "key22": "28x6zNeMusU4t4rr8HXKEUa7roHRHYJ8UdC5YHuEY1wpUhDPrurczVnViKtSnjKs4BQrvdpUpvzRnumaUJQt4Hf5",
  "key23": "5qsLeDUbnx43py33tGT7nnomvEkQ6Y3uXn2xL2aVBQmEZRjjENbrR2WVrDqU9gwb3NKXcmJxw3EqnnHD2PMk41uD",
  "key24": "5rE2eEVrF3Ki6EBmarfbrdbesjisrSML1vXFUsXaTRmXtJNT9EUfHimanz3ideGzFcPvf9MYT2MqMFa3g7CobDkt",
  "key25": "4JqwiJMXfojsy9JSfhFQPAUJv97ooX36gBPcA2d9atmUabAsrF73TAuLu5ZWwBs71NoPseoyJHSWbtSLTqV47VVQ",
  "key26": "5aoeaauoXFxAKLBkMJ2KRT7qTnA3du8D1bcJBvz49gjEaJWHVwP15AeymciGg2QP7Ze5pYZrNVTVUsT6LBqVimuP",
  "key27": "2YMpwoeeiBZJFeXUcCVU77s7EgfosnPDbASu2cD3wjEyTtHhnLgxxJh8jAPBYtzbL43yXqe6XRJwHqdn8DYZ4LHZ",
  "key28": "44L5QYDhXRKUBLD8USfEoEC2oMrZpJkda2hSNqcMcnAf6eBN5xkwND5EhzGYpXC4AWYPYHrRoPavvHrFFumqTFQN",
  "key29": "qPK4hDZmTWrJ2n8VN34ExYWA9vCA2JzBq2CTfAPwi4GeDsPfSRAUwDyuwiaS35vDnJYBAm18rEcMJ6RoBfPPumq",
  "key30": "3krwyu3XpgUzrL4oTW7TDencEtf9Rp7nFFAqgi9MLvPmgh5MMJbVwQhSpsdYkFDpYFM6ng1Rr1fbNYMSVL1i5mYd",
  "key31": "iJjNxNbH3TkBtXUuwpbx2QBkNrqazWhTeK1uXSHsNAeKL99BkPJYBF6MiKnut8xawiP28ovXKn8ETEPZ9qnqGpM",
  "key32": "2xjxAeVjcCLLBPuJFBv7ZxJr8zCtsCrmTkSteFeLGN3D4qdoC5P4koNB3S9Ykqdrt89VbrZsWvjXKNzEGAaVntZu",
  "key33": "45RjqX7tHBFSv88iXairFEPxdpLmhexk38rHKoRNMzfnmA5TVsSqCfHvJ2BkePrdqV2z1Hoa6WqcZpidYdMadzbh",
  "key34": "3YmR9oCoxkud6uA8sM9tLUH4igTrF5cwnCXZLUjZZui1zCwCdcphRoz3BbmjVQ2SrFjo92s5rxcbEyKi9KTWfmjJ",
  "key35": "jq8fJqVQuVDAaNKT5mgdkDvSop1fRFE1tXspgNw5AYDmuz1H3jHa597ndKfN1cd2BcqMSoCL6W6oQfAvgy4Wkj5",
  "key36": "3Nuq2NK7XEJnhyrTu2Uq5LCnAeJVfpLFG3ibP4V1ESKP72QGFpx98TsTcMoRsnZUiJo5JDjaLPQHgBKw62EvQzFt",
  "key37": "4VZSt6PovjAZk2wAhexBsEdRRuEGeP7KUoGvw6p5yfEFaznFTEbv4R7moGvgDRf9hkXoPw558hSMFf23GMX8233m",
  "key38": "31yvAJcKMXcemDX7Z8ip9zEg8SpdrFrs6WdfRAJGgTSGzR9PrtVcLJAR5y9GT4QSr5CMqE42vddcLvZGc9sgrj2Q",
  "key39": "5qCNsf8RTix1M9Aev3Coc7tdUzqguXnprZ2okhkrZHrbSwv6ospQgirrhDHgB4VtJRWvJvyhDbZk4Mtp5vh2vxkg",
  "key40": "66zkrCvBiB1SZ4PJw31uWUJ3zBtN9R5aiFWmcJ4kPCL7X13ybkqL1TsaJLByErFTunp7Ljntfk5G98hWRiKAJcTk"
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
