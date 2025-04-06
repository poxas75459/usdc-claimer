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
    "NEDKjLZPjkY48QSBzyrDW9SQZoCgoBi2fdiKcZaggm29S7BzQuKdYgQAmXdVGfNkhLmcTZXQQRLwJYRCVfeR4DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTXvsrLmzHB85AUZbX8vpb1DNtCuBdi9VSjYuTaX7yaHVfNxpt6inkL889SLjpyWLkzueZT6dEaBw1xQcgzf61b",
  "key1": "4jroZm4AHhPAiGNkN6rpEjbop2rKUasZmuNDbvWfyTMW25tEQG1qmMMHmpiAhkDpQQ68m2bLhSo2TgcXLrkUz43z",
  "key2": "3mNMzZBpEv5mS5h3q8d96T1SDuPjYcsZupLfY7kvPmEfqoAPecUhfkficfd9LQbkPkZmqNhnLNXQrAyAYZPeqWJu",
  "key3": "9Bzj9qgWzdYfWa8pXncNveTwmmwUtQfeKQ99bZ4pCBMaWbHzQktxcWzZ6jE3rtPL7LBTZ7xtpqk5jai9Z2bS2E1",
  "key4": "3WH9ucEfZyALNciJ5669VRmjneGyFQdjSZq5Y6rGHupPayY9Vav7sz51Ux8NQtfGMYh6AqADZPUpyvBFkz4YaTV6",
  "key5": "2mPyDXmp6xuukVeezzPvSEabG6c2xu1t9pr4xMEyhqhjrjzc2KaXup8z2JwA5q8j7prQtNw6KUZrA3wjsJTDBuBi",
  "key6": "24gicEBKjvuT9EesgTWrBvwcGE5mcZYcGbJPMLvuL15tX9o2DgpoyX1Dhcb1NBhRfKDSLuoSw4DukuFLGuu5971o",
  "key7": "4bxi8Ar5A84NoFosrLC8RqRhJEo2odHMhDDZ2VRVLtieJp1PfsAqVwhY3N9kxBsMhWYHCGDMBn11Ys3ALBW7JpZy",
  "key8": "P5rsodQTJ1iSahV6cNpdDZHd2WN983ooJRAzQercH7fyp6dGfTQtQKc6SMN13ob4BpXVj1yhNgE4RF3MaUhgErv",
  "key9": "5hgc326w4xUbwQxQmDvfwzwShefexjc1nbkTzsBXDYVtt12n3HZXCpkNs9MW7KHMjAY5jEUzmjAnxknPnNgkzoDh",
  "key10": "5HnNBYJPi661a5DjuSkarVayrmYRjgYfjhAfwyZ8UgVZpyQA1uwvWjrL1y1ki41EbDVXiR71y68Lvpe6WYBrHxmT",
  "key11": "13NmAqKSnnR4jG38MmDRkqmpxe1gKCvguh87bVbGvXKaEq7vpj6bwmchEQz4FizdAiAcc4Db7HemK2L7Pc43jm6",
  "key12": "371dqH8qmDDaTz9HSpbEiEYFdTFrtaW7WAcwEtia6sRMrZHCxxVtDd8788ZPAtcVodbafKpkncLq6ig25ar44nt8",
  "key13": "48rFxaDF3ZaCLKHsHqEQ4zf9m4dVUSEYWzK2iu9TGRn7optA2AqZvD29XUh6y8iD518ZXLsNZqew1bzpDGDQK3ko",
  "key14": "6635YJGZ36NHcK5RMvwFa5ru89rtMwjU6G5ZjtD2zmUFs7C7X5G5st6R7jH3ExP3raUci6fS8ZwrgYNtfvhh7ZoC",
  "key15": "264uAc3mrCopsK1MCybKZQ78dYgvGupvcbfmRzZgidWXg1M3CiEfyZxLp2LJJfG2yFYhUo8bPz9SBbw19h6cNf5r",
  "key16": "itoYWwWiW83Yq9AayGPxSPvSPcA4tnAEeMAXJPAgDyLcEbzPrkENefrNL3ynQXXtKMpVaV3bPbRFTSd5CMgpxe5",
  "key17": "5Vnv7g4TApELccsdcmFZ8hjYHnzwJbXhTyYY9ZquPRBgxAFnrc96sY4VmBsdikJueRrgFARKWdQ3iFL1erqkzib6",
  "key18": "4UsLPSug5zqVpZHEWXoqsVun9MmckbZtav4yUST75L4v2bKqMH937mndG9oZWdR6BMszePVqzsdxCpfANLrpfg4N",
  "key19": "49MnQkn5yswj2YRTsa8b6SpTZUCyVS6ybBPLHsYUbgNUckVJ9cYbeKSfP9LsY4D5mkMazgeSkHJoadEY5wuQLCmh",
  "key20": "5VWj1gsvtm3fBeGzcs5ngTUTx3a7HedfLDFjppyP4et26fgjVAugcBFfEzGQ1RMqPcrQA5wwLXruyBUrU75u1i5M",
  "key21": "4hf8thGPXh66QmX6YdFpHFuGsEHwxRXFnajZYpaAJKtgF3yduGAXL6XRVpYyAfRWFp2jch1afu1Fq6ZM4fxQeWDz",
  "key22": "morDxE4aDU57KGUTMEKsbSp5v6rActbr9ZPLy3CtTs1zhBt28bMWFJvby88H3rJa4ED8qrarSpbiBDCWaQ9s742",
  "key23": "nEBd68nARD2yNQ9BxrPLAy2B45QX94ophAPMEwAgJmkHxFuLwnJ1YoBNdREYdHvJnto7UFaY79G5Ma2czwZjcFZ",
  "key24": "266LXYgAA7rLxy9JwkYWcqpdVwf733AX7ytjbweoEq2XfgdxhRY7mhu9pfvWjk8TTihwFqKzqsSubigys5PyNjhT",
  "key25": "6iHzeK8wZkdrvy8GTcAPkeKCGPoJhFbZEqyf9QRaUcwX5UunmHxpPcLm9cCXqKXyyKNN5soxmGJaMHFT9UngYZN",
  "key26": "2vuHdQx75r8sNcNa7qdWrNwXoEQxPp2R4BeVCHphmHpKa6QDs5cbzpEPxcAgDF2cXjzGt87LBuC1Z7Tme5KpnViX",
  "key27": "47BSSU2JmpepSfkEmibAmxHaMyJoLQUGhFePkPMTzxsWjxqfdQwofy6XXibN43mEgwMgY6mdb542yDiPmehMoLA3",
  "key28": "2Ae33ukEWAVZf1mbb8xXDgrNmZEBhcteR2eyWHUDLAR6tCpGZXK7sBRKJJbYP8Gi9tZFGZxL3L8yEygc7rPQF9aF",
  "key29": "4oe5ow2YMzRKzyZvJgCAPUxphWJBq7sqRpWEKRiwGskDENojPHWwnC6NSYxUYon1mNvJ9fP7mFhaZkiSsmYNNfyZ",
  "key30": "3GyFEC48BqRk2tWEwddkcAiYXxWc55ChNGJwhE6d1PENxMENZbj6HdQP88G3WyYVLCB8dUB2koMGre2mqRRZajas",
  "key31": "wx6QYpTj6ukg3WQTroHuPCVdNoaQYf8FBN7X9P27pw8Kzs8P53VvUN4hZGmbJiU3Ws5t9ND9RLaaFxPGVh27sum",
  "key32": "5GJ7o3oajnDoSAWpbiBEm9J1ULNexGgvNaas5G8MbLRxeaMQoHbS3FhYBNpZwQmSPL9jUbpHyocfLxUr8oWD2BQP",
  "key33": "52XfmrCHue8MpBUz9dUWgKE6aivBSnQbggkz4hiKcnHAanpViRBeKwxykV4WtfJba7sXV6FHQ2ZLXshfS2wwnHPg",
  "key34": "4p1RKg9yvbzrB9x1AoYhctYuEWF3vat5h9d5tZP2HAuj2ruTZQkjSMLCsX6jW6UZj16umkf9eYLHK9gGSjKG9LXs",
  "key35": "63PmDGXkzP1KRzY5w7aBmwFDfB35rvWtGLWZprZHk3J75aWXL6jkytbAVny8Dh2PK2MGXXudQUFAYqdJZrFEhiFU",
  "key36": "7P4s8vRZQ1AbrTFiVEFixGbtkChL8N4QGLSgziHYXoQoF5B1W7SzBoXaMf4YbJh3VW14wPvjq7vRrkmJuCz7sXD",
  "key37": "34cetGqx3Nx28zWBVE7qwwYC7o29a4U8UpunG94cxRneJT4JW6EYtp6soy6RS73yToB31moBWKJpWXozVBzGDNuk",
  "key38": "5UiNRz6xorWPvf3FPTxAbHHximcaMAQBX6ypmu3smLz1aQgcj6WwfRnVuvcsLVLxCbrA3PNjQ943gmnsidV5HRio",
  "key39": "4RMFRTn5mFuvGJtUpV1UMPkLNagRXdFtzyHd7Zv2ZrSDj62VAZptLvYXC3BDYAizB9AZ2yYvvxy7zexAN1jmV15Z",
  "key40": "5v1uyueuHXZWUPPxs4tNweBZZvFcErGR8UKi56s7ebNoaFHFMUZKQHepwRcFRsSs2aN7yeWGjZzjXiuxpxVyt3Ni",
  "key41": "3tbFMFpGQjXTY6qCmjwV5GJ1p41oNGD5x37CN4GoV6FoPH8DX8rvhsWAVW5283dDU3N7ZnhZ6JWvRDEwNJre2h9r",
  "key42": "wx9Edh5RmnXZ2AFbMEYGEs42YSMjfjfY2o6JhfEHMSVK3wfpUgj4rmApaZFKYYk1ruRA7NDUCTqeuddrnSBbgV3",
  "key43": "4r9JKW27EH6VeRHNQhRyuzwx88SvcDjDPNUDKJkePrirwn9WU2EWg7nvPMxsYF3FsbRDXrD5fyXgUXstTSFS4vSb",
  "key44": "4ckhSZwiwmMRdQ7pvmvg7QasdiJbA8e9eFQnLsPDNuRvJGGgZwKEWMhigG8MTzf8AWSRNq9WnGEofZ7abWS2hCAW",
  "key45": "5tLSmaPwKurbYQv62zDr9UaRhg9oBFsaBy4xRX4z1qRzbToSBWr4mG4UE8r7AyD3Unq9gtRVqYVCYCeT3YqmiehL",
  "key46": "4G31YfvKvPRFp8pVPawc8LGF5uFQwdWXhQAxV4c3FwiiatJvbe6PH6MqREHX2TWELPfX3GsVvkTkPzycBEBSC9Y4",
  "key47": "zwH4oxBw7u3XDKCwDJw4hSiTwQ1GyUQc31ngvkofETe35UbJ9ALX37c867GjRamFY6Btw3TdTSCTH6ro8BJpLhx",
  "key48": "4rg9HYASVua8m5XF6AQvEf7QyJ2rkLraMCnsNW9NBPC43mr82EXbikVBFNpvAxqvogdqoRd7eYKwEsH4zUuxx1Fk",
  "key49": "5uUuEx5of5HMd6X3M7qVSeN7hPZJWb1CvcY3oj73EWb3PGu72V9uKLL9JEcweZXKU9451RJWrhUQTZtNTD8dP99N"
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
