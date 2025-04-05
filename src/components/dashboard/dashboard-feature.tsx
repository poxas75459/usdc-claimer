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
    "21RozYuvjEo2MQvnRL4gcJ7AJ7CMN3C6EEskVaU16n9axXpiASE8vz8mJVFWit5boykdgHK6mW1X4yFRo8vjJkpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKfueV4agk2s39c5s1G8aqdKmAewUt5EDPgwU7y59kXh9QrJw7CH1oMBnwEN2EQ8z3d3kHQTEFrnYuoAmWg98Wc",
  "key1": "2UZEEMKbRpzrHUSRidRv5yaM9vJKeJvxaTfkXjdmtUnXUT14NEXMT2nasXt8Wd8VU4PMb6b5s13f2XRCBFeuAbWi",
  "key2": "4XyX9S8Egfa2PdyZ1i1ahkjkSPC98JGCqDRLeRxuaFpmdU3dW7LVowZ8z3UBm4UPhjMPpWpXXQ3p6E2nPsBX5TAP",
  "key3": "3aYWb2XKNjCfPu8MaD36utkbB4gzFt27d7ihTTKDvqz7jxqq4piuH4myef4RpEva6kFdX5WQX8DJ6v5FhQRaNrsh",
  "key4": "ptLhKQZ3WtAFq8LsWMo9v2fRhaJVub7PiC3wP7pq96u8CdBph3ZzVyJBajiNwXY845HW682JDRmDm5hSfZWsMfn",
  "key5": "3mA9HmibHvX4jqTzhnn9kaZuBfBhbhKpHo8AmwgFZeJjCpFDDodbAQyTuX4CT7HYYrViKVgPkEMxQHuSh8bPVMRQ",
  "key6": "51jP2HmgRHzJEFCNehsp8MSo8rEzQhccv2AEKvcywoVqRsB5y7D1To1e6cMJzwJjvbCdTfreApLM2JJtS3wgy3XD",
  "key7": "4JMJ4gbWS8oHaMxSBDJfoQBia8p8G7LRVWA8scjmmHGQBA2JCNPmw87zVTLuEeZUQA7g5veZcV6YgZg3miqYZ9ej",
  "key8": "65civ1paRjW76Q7f5DA6xcF6wG6dTUDwUTPLWt5yHgyiVTDWTDAwm2BbNemAPZ1qeEvXuodtcxo8oSxrjjTV7zcb",
  "key9": "2F1BLKt6rFVUUHYNvoU4Zbw8HvGTSb8w44TsnoD7nK4bqvF3Hf4dsXaNJpKhbzN2HPU1Spwkz6mX6vFfpz9HbQG6",
  "key10": "TmhXaHAedXNiM5spFGzKxTxZ6n9vHN2QiLherZXcSd4wan4hkdwyoGqXH4XgWQ4mSw2sXNRQYiN1BGvCPMfcPmM",
  "key11": "3mgDkB77caFgdEXQF9Y9jk9JUyCS8qUYmvTMSion5e1PC3cwGdH7E9xvMgNqBmErkegm1RbViJ8vCrQeNKuuvdD5",
  "key12": "221VVo5gbQyTGUuAEA9MXq38QBLcm3fiMGyxY27KyDp8hZME5xnuGenf9FLSvcgbjHtaoiPWQHfVfJDuzehxak8T",
  "key13": "2GGieVJwGUZSiBrybGeCHH2nAKSWkzD9dMGGh4JDDpUep93J9wMmd5QeqiDYBKXZFbL2Vq5Ms5RR2ZDf4Xaqp6RD",
  "key14": "5Zqm4WH6jtZznoYK2cowcBm5s34g5WCHYJHq1ni4X7yb9Q28a5qM261yg6GomDfg8y6jqSEgTP3RgKXmuKHuDd8q",
  "key15": "34SgcbjPK7hSkVSPEC4vSCyFqysgwkcWGedfnvUjb9eMU8rTYARxufThVuY1pzesDMVhxU4cHwJ5BWRF91ui7WWT",
  "key16": "3LMiUg5nrcC8DCVBdtfSa9hiDv2DeKqpi5HPLgSBH7sqwzTjUdBxFZJVya5J9YqfdZt8b8ABteGB8zKiwui1w2Qc",
  "key17": "4HN18sYkNB1JRVoyDrhbpBVxhCSSwsi3xSbDZWr8btCSxmLn2KhxoanwDA7mqwCUkESoGk3Q6c6T9PeUkdpTm3XZ",
  "key18": "55DfSuxmvRniSJgaPjM7gDc2fV9zHDTAra5E4UvjqLJsnCxhzfNcaGEakYr6yg9iA9WeVxrKhow4SyqUNpaRM8sJ",
  "key19": "2kDi7XSEZLJXq1DYgrMa2JvZFCtSHs8NjRoV4mAR1PmtWR2iMXHrYGZ9wtECm6UtttMmkkjNTphiDrjpjK3ptytx",
  "key20": "3Rk313wL5Y4Wt6wvDv7Fuvrdn6CpSy2NwgW8wEXynjQYGbaLwZbtCmwF5QmpLjaHPn7yNtQt5DJbkUCtgZ196rbX",
  "key21": "4SdpBssK63snrF85NSo9qKSmk6PmkCpzyG6AX8Gr57LkX3QRNJPS6zvFvcDeyuMKzvxUniwKXWSv9siFR7fSor7n",
  "key22": "5QUgXqyjhGgWRTnNHAd4j4fbFSyjsMHJGBCVtMDcWKmoW32VRYZujhERPXTe4Umr64FhXifPAuaj77B18GCmThZK",
  "key23": "34uQoPkZEm5SB8SEsx8kNHa4xcNTNJW9R87cTvqqCmSu2MjzNn6GRa4s4vmP4FLznnhgEs852KNf7QLD2cdTFvxA",
  "key24": "pm7VRks4EgoJbE3SYne4fu9ZtqfnwgkyHVQU6sDLnDTAADPTULttHYPtY5y6DU6AmR396u2XfEC8u74V2jgvZsw",
  "key25": "5ZfUQeuU56w2nxfHKhbk6QhDFYSp5XSdvjb7XMhsrG8YDcyoYMovAwkwRH681Emn1DvgQZzKzqDqeY7LG5QfyeDe",
  "key26": "sGbJRRZ7BB8sZLUD9PJW8yn6p96pPd8h2ps1PsCF51Fd7fxr2Jp3sndkgeuPgjuCP8zYAezDnhA7x85hRuv2CBg",
  "key27": "3AZwj2UmhYXgv5s5vwGDYptse5EUpfiambLccGGNtwUqq7eU7v3r8iUiCjeBYz1oyhGYcuALGCDeD7JoSWof3Znz",
  "key28": "diM94W16ptQSgiunXapK4ZMbU1kG8MwcounweVArPVDFnaKGCBKLsai5cb4tfiRnNM648tNfNJXrHA1dgTY41qQ",
  "key29": "5LzCuU1BQiBGD7esoEZHZ1edccHMZ8kBouj82hChhyJnHF2rc6J9wnCFvNvTvd9xLP9aCkZa4DSvgn9v4H2K3ZLo",
  "key30": "4GaCva7mcoG8z6hKWKGLYx8VZ5y8GTC6zBVN5rAAHN9hmNvrpDofHVRKF7EdPXa3T4Y3S5vNzSt13bathZHUSkcJ",
  "key31": "3p34X7KhJExh3oMrWfz77QoVLKBYtazMq9uzKR5rA4Hi6xGWSs8TDawreBvsnTzvXNwqQSuQivG8Y6ayzF8mefoG",
  "key32": "2Ct9kFt8BBigK4v1z5QF8kobMCzJXzKxHVgkm3xzyhZDqAFoAgq23beBdbNczLyUE4a8gGAVfNyeq8v7fZeRd7cU",
  "key33": "3CdPvHmDRxH7DdRKGKSHW1SkJ3ut7gKnuXMecZ2XkDwZLoyzu6TgsxRaKMAXyXNcTghJzG4hqRbwLaCgMQqvpnJE",
  "key34": "2U49EUUra3YNo3rX9735KSug1WFMAWmAu9778NRrvnQBXZMmToHY9DnoYyHyZktk2Z7LZcTaebkaoZ3kEWtSzvDL"
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
