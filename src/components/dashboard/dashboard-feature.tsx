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
    "5VJEA6C6by3x3ZHULMEqPkLyNxvbrxdmbFoC7Ysv7ud1idA829HeeMgqHDb5z7d4qTk6jLMHX4JvyF1hbNaWmTU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPGCWcoQuvUovqwGUtkRpCcvemwjSe3NKNxFNscaqPXYUh6HrDRRUiiXpJxWLDLZhtCxjqJ4d19sqXWD9WLppy4",
  "key1": "2CSST17RkbK5WUUJbCJxUSMZj7zrpDQqVH5A4xJVwuSpF8P5GwWZKFxajJFh7eV7g3w3xCZchiVqMWBcu3HyrTKD",
  "key2": "Qs6sZbMp6kLEZnBikMPAuaTGFGGWMrMBRXtN2GH7eMeGYzKXLQA4f8AD16AWrbA2RryxrFGzaeWY9Yrx1qkUTdS",
  "key3": "3tvJTuZE3JTXmQW4CDdVsXTMqgkT6tdGkswsGiJ5c8DkGHYFTrJAzRzEb28thChqY1Nw676YF5UHqL8B9ZvCs3v7",
  "key4": "21hqg3YFBhLYQw9tnxeUWSUbedCJMQNRJJb7g7Gu4C9nECgFVQCo3ZTMs21ShwR1CkErY1fGPnEgQ1UJ1VgkEPXf",
  "key5": "5G6uHD2BUuNjpaxVqAjEQcnoy42r6ux3swWHWy1r68jvGJam7Gc9FC2osAYnKiGsJ8TxK4i3AJoEoLDaJVtwUPTz",
  "key6": "qoyMgSTS5odu2j1YzcDXcBNTp4TA5AVXYwfvczWsuicCEickuCWmRANhvgVi1RXEcrQbf9UG5RPgc6nbrPyLtYa",
  "key7": "39KwjKRePHMEDjNepX9ER6fnFoBZSDqaJTNUcmLL5iXuYsLvkz1Wcwhn1LAT67roHh6vmAUKnEje5ozj32AXyW6p",
  "key8": "4QEXZWb9i7sCT2zGcVPP45k3HaZqyq6Uwpk32bjBzsCA4PY3kqaXzKLckSTR4G9pWyxiugF1UFQn3vvviVCheypc",
  "key9": "3pLCE2QQmKicgLWVwVWAgSLSFHCxVsLB3rXrMRJSBwa45cAbrMAzFYwjy1eskHm8ffV1mV2iBCwpJJNc6HeCB8to",
  "key10": "4M8dD72j8byhc98g8H19b5jtYMqAH4Z9VB9iZLbnjykMMp7eLCH4yDXERBSbXsZhb4nan5yXGJsjL7SYEvzR5DPs",
  "key11": "EcDoaoevaDxt3zfD9U9xmDcg3KrBfj5rrNSGS3L2oXi2U7cXfbQGNsmCZeCNtTL9ava4fx9DXGnkTrgaUTHrYP8",
  "key12": "4eWizz2y5TWbhrkyBPGGAQQxCYRjHEKimjrr99Q2ycWMtKVHXtbgnEGWZLL5z5Dm9JyUrTU6FbJWq7biU4RQjgRV",
  "key13": "2BHzEaan2Uk6kwEdoYYAKPzLGF1fd6kD1NHxbyaN9fmaBTuVb2SvuB1Q9z56CSCPYMxq1tUARZQYCWe8PzaWFPaw",
  "key14": "2DBXpvWPGGqAe5V49ywrLTN5cgzWxiT1kUyUFX1Y7Sjr3eXnerbnbhVLtBKiTEC9ySFXq11eRhpa397QmkfiVY1e",
  "key15": "P1maZW7NuQ5JH2shQGhvz2KMfPacAHrUrFvtfJM7EjGZ4zuGSWjK8xU9EJGXyQ5LK9M8EoWjLwfbpvfpEpHcczM",
  "key16": "4XtV1jAR7af3E73Y9G1CAdXMyEpRhUKzgSzbJpncKmmzFyqZNsYjbYNnXKnahbNmsxMEjBheWCtSE7KKHKke3ywP",
  "key17": "3xXVJSmbYbPRDkKPoCkmzdJUBNprJLu5YgAMyGYqskcCwZbEomGek4r7C9PygRxbZZPod1pEYVdpAVhkEMEtT1Xi",
  "key18": "5F8JFRnRRfjqyBbAd6EJYsaZnNp4kyVhnzWcZP2Gmiw2o64DcZByz2kmLhTtUXif6kKyH9CQovmZNPpx6JMrG37x",
  "key19": "3hLHJwAG3Dhjv42QVVh5wNk5GHQZaTGjdyDKRAeQcXgBw87AAM8AKgoMMwqQCBxnZezCEctpspdRBtN2qsgefBGx",
  "key20": "2LTucHpXMLWqAoBazV6RLELmjP1VLbaXozSRRATJKDegxVcvW28JvEP8sar4SCtmo1YDwie5kT8N6oqJVpbBjifu",
  "key21": "p7vGELELbCau49uQ2Ki1TLxP1JvWnk5TNjDvoFP8QxpFAz6iwtUCktmRqDYeyzutMYjGmiB2gZm1ickaELzvcBr",
  "key22": "5Q2qWAm5ThKsur8QV8MANk5FkhsftR1SaFuF5GP31e2ukg66MVif9S8f5jmmyRmziexAS8s6JMAV6iKUNUAGoAtb",
  "key23": "23nH2EeVpeC2va85UVG3m8W5CSzWbq3NNjvaBrHJYRPfpfURVxviHduXCjRAma5VVmxtDDfRM3PbrhUu4av2ZxU5",
  "key24": "2wtBVDBnyaphAp4VKDWogzqYDMVRVJ7t5N5aDSjddZ5oXyw94pKiBtRpaafUQRbcwcAnPbWgpY9pHLeZBEF521hB",
  "key25": "2PSeZfKYyMe5EXN52beuJfR8vC1U3YkY5zaHAoMcjz1M1bta37AdNevqYnHv1kP8ZaBwNHBXsLy2Zvp8TeE9E7i2",
  "key26": "4S16kCDxrgTn99cKYb2SdTzjKm4TNN6MFuFPTT3XGDCSAZEXY9Fqj7cBEsCUoqaM9PNY39n8scbzp8eUYZQuvXGm",
  "key27": "2nHppupALyapPFryJrqYVKM6kaPgGmrd2bETMo9uZnd9Baaw8uCJguPAGSiKxWzyp8xC4EWiD81oQSfXnGxFcceU",
  "key28": "5koGCJ3Np3j6kvEXSiD2TrCtV1GKLukEpw7jFsxv9iM3Udy1d2CLfcyPkQDa78pHdsSYMRjCzsirW3YQeSw7vGH1",
  "key29": "44jSyV4EQZe6i3qvCf32xfHwVLx4K8Ecu3haTvAx2MELyg19wenP1TT96C64ptTJ8tMeye5ye33CGQcH11YM31eB",
  "key30": "2wGCeEUKKiEoJgw83HfEWUdoxrpNkWHR1eLsEk22B82MgWUTppBjbaft6zjvYiuj7v9UVBTnoCkZYrM95rvhUiJH",
  "key31": "3NEK8igp82dknoPdd5RSQJnKiAdRnqMHuQcVodGp7849rAR4qUj6cQp1gEL7mhawZKuR3Cf63jVYmgyxB1R5U7yg",
  "key32": "3YdWni8MjFRVjsNmTu45vNkHcamRUWvFuaraCUsnqCtAJPyejU89VrZToPQdt5WK8WGv2tET27iAekwNhpr6PQNi",
  "key33": "47V3ZSppLbVD89fLpJ2DuCWffcMpYy8WarhK375MTdohYiHsEjnaziYDUusffAL1pCgPr6FURTM44fWz9B72Cd9Z",
  "key34": "3D2sCcCtTnjrUYNat2QePiD3XH9GE9sWwVDDdKQZ8o4MXNTaLQdCeJnyETYmBQNWJy5xEQefTdDNvhSmb56ENji8",
  "key35": "5Ev1CmpJ5NWAibQmvHrzgXZaEyRQMquUwinkxXopbdiQv2CPmvHGAbKFD67TiG8iWHSHdEJ2qiR5qYTwvaFtvr49",
  "key36": "4HbRiUJUMWiWrx3qtbi1i1YAEKFWfZHjHmesTgZcTaaQZbkEqGDvp5Zvip2hPDgaoVmuv4Kt6dhLAHR6BWLJ5wX1",
  "key37": "3zuDx5wfXaVKuYLziJrHt4uP9aXD945PyTQBG4ESyB5rn6Ui4buXBJKc4zE55uW86K2Cpodrxhxx3gk8UwNXPfPG",
  "key38": "3jyXki43o5PoZgdzKVwma576KojVxwxYQ8UzVEk6DH6VU7bd5GpZaqwNS5Y91dXrxzwmvrEi9jV66LTb6MKkgAqG",
  "key39": "4ekmxX8j3sHVcdP5KoKAZwxSsiHLkb2WsuKzUrYhit3ThNN4y79vEKFoYjWrZxP8dkqAp3NDqNxCazS5jRvoSxXF",
  "key40": "4U8ycWDam7HaUcKi6cxZzfHEFdfH4utLCLrKGf4D9fFpv2d3jPFCUsmtU6FKj5MykiPZ5vCxeG7ZWMYGbURJJp1V",
  "key41": "3VxvRZkXDQLAbiXwaMUjYmGp4QHhEPyZPcJ61nNwceDmh5e4osRqFos8PYEQgwv32ugcLj5jL6hRB362bA4udRTb",
  "key42": "4LVCqpK5sauffQ1Z1ZYtn6HzyzQmgMJGFgcx4Y64FJB4T136NgLtSrtkf2p2Hru2Z9jFwFLdy2gNkUUPf34qTmg4",
  "key43": "33tYFJmUgpHiwmobmuTCBmajZDWSzqLw9wvjE61meShhq1gcPy67wEogHN5xJs9coYMN4C4FB2zdn1dSqZctjPJ9",
  "key44": "2u2k1GvafwPQtuH99LQztNhjwu3TQecEFgYxkNyo1tADkMMF9Ha1ZyiEgyQbxQdfPBzmZRLDLBib6G91FscfZ31Q"
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
