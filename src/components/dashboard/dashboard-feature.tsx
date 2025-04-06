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
    "5XsoTpAhUaJfeFa7oxiN9hjHwwWYUc9qi1GSe6pHQLYJjkSYaWgWtAaB2MVe3vyT114gKHEsjNkXJw9PaTPiAkLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WwXSAGnEcWjBA5tkpL6aKV1BBDMUPD21WpY7nC5ciDj7zXydAxyEiGSNhhXVyefJPSt5FTfMwPMRocHV7HSeGd",
  "key1": "3NdnwdFpLjSmyDvsgM15PyaKJa2AEG2bfrZF86rPLDrJ13sNDALyipnNmHaBLrvfvRQkouytUMPTV3KMDaFwWUXh",
  "key2": "5ejEkXKpEKsDAVVfEaVox3BgtdQW6GhLm4xM9pz6o15CckRa1kQK46JPGqAPp8yJ8TpT6wEPMeeG3ojC636zm9Ty",
  "key3": "59yQrdtdSGNRS61na5RmEPS6vmmy3p3rgjZdnyupZh2zUGKLuyEqxpDFkWHKLSWeJq55Pto3wMSq9q5AVVYtoBrb",
  "key4": "4U3rwfEKRvadSoSy8pqMmmXqpynYw8cyvUMFmEtutiS6rgeK4VXWscpdDYy7bPojhnqHYYs7SuhF4ehb7CjYuLt2",
  "key5": "2JRuAUvcPonUwvVv1vrXoLF19hJ7zKfYabTa7FQ9VgCziSSdCdzzsVst8RzkfBJbLdVhzUiSEpJpv7Cd7rZcsrjB",
  "key6": "3Pzt8622BxKNXtFVdF14MSbHeewfE54oUtppQZ6RddjUdvE4GhEHPtGJo5zq8KCWXrD6s1FY45zoWV3Lwn2Ks1ev",
  "key7": "2T1Cj8kAMHtDnXNo8nmqYb2bwF8gNWF1xqPxZKNb53iWQnP75mrkwfhZ3oRyw5d9XE8rZSC6r1rq2nFdDY6pEQ5C",
  "key8": "2mbFZo7i3HtNFvg7YGMDXtyJ2eD9gYKn5pgkCPTHTJ9YLwycWsgCZXyM7pddXhGAH6nco3rRqbGf4x3yFUZVXSzS",
  "key9": "4feG1XawyePqY82aXkZVRkDTLBdpRgrK4S2w8CJGWtSpYsA6bFLL4LsMoZgoaEMKjrtBCxg6Jp3jWTrzAGpwnEq4",
  "key10": "3sjbCQmg6siiMg3anBKKGGtm1xjsKod4KVoJaDU2EEVoLdYeTmEnitdgwhMWqWWtZQJeaieJmwgLKwgQMH8AYizU",
  "key11": "5iSBa36NKiZi8DSWMgymNNdq13pJg2yDPZS2iYak5hrTuhg4K4CcjrTTPTJP4nk95eZNy9Sdur3YtvdAJbtEkn6J",
  "key12": "2PgxnKVNQAYfZfpWmRpP9Kbs6xL8xLbLqcWWis2pW54oDxRvRdWRtf3TzvaxwVoftD6PiWQH4rHTVtUf5wdJRWqp",
  "key13": "4PBm97gwpLxYxyfgjxqFHMk1aDpHkmEUrrcn8Njy9f3ZZwzJ8GkWDfPeMWFuAs3KcRhMbKwuWv21zvnhuJSSjuEp",
  "key14": "3rD3tQ3ba2p4RxSRwsM9LhpyVEzQ5apZsZGpTHF2RfBiYUsWb2QghZ7Tthauiz8M7xezL3fZTqwGkhQPXCbB2ezj",
  "key15": "3HiEYCrvd3LwyAbC2qG8zjRE9XFRYUpBgus9dCoh14m6kjKAoHXRAawRyE3uHb5397wDWRAjb12HZFN5aiVd1746",
  "key16": "4ct3Ly8M7swQDCr4TiKpekkNoxfTrRoUfVmgq7wJL11iVeuppJGsLZ3A4Kz8Xw2FJRLZSk4TE2qQHetR2y2oKsZp",
  "key17": "4xPaUXN8GJ45473vKAXJfeRpnGkQGmWvYGFLPu2Dj5Ey9xb4uRLQyLN7ruVigr8iPJVqZprdLRCwrSXP4QXMnWy8",
  "key18": "9JfzKzDAZ9quYuxdutinvPMtcJLn6RgzTjtMi3NYuvsesRJHRSbL3ie9Eek9eQk6CpwgV6A5uo3q1m5DNXuaHA5",
  "key19": "5tbZ2GVt8fvoiYBG4EZX6bc9WT2e3gXYRA17XmMKq8Pz5RSA2oYNLuz2LMWP7yE7k9fD9MySBee6EAdgQxKQEymn",
  "key20": "2E176oTTtseoqKh5XpYHfyn1myvkqraVe3qDdAGhCpwAwP33xdBAXhcGDwYxhpU8Lr29CnrdTcLtiWTWczJ1yibJ",
  "key21": "3NKCWBe1i2Vodf4HhqsJH5EEPRhPXGGCS4oK6Vt5bYX8tAZsckGCADWNdvzkBrEm7fSisVF1ZqFF3dyMjyUtX32v",
  "key22": "5vKYjtZC94VHbhbVZiGe4ofTDdZgVJ43KaHSduWk71Dgde9r3amTaYAKPNj4REYaguTSAKQBRPdwvTB8FYWnws98",
  "key23": "3uJifUQmg7B4rXYyWF8SN91FTRZoyahza5MYLULkruH68bo5paL8ke1WXHQzASXqgcgKALU1Lvawpgqr9rptywac",
  "key24": "3Dd2icBAv1bYez2EPEu61sbSSyTRxkUb9tNFFxwhEs3qkYYrEZHGSZYANeSo8xMLu1hwJAAcgx95rFTnAD3xg9By",
  "key25": "4ZwzytAR2BHEZtBzodFBs23gRZokSgQyWscQiYhCea2z9MZAu5xAtvryBL7w8Q5CMCP4WgTNd7vqkTXDmt9vnkbG",
  "key26": "mBN1YXtxBQF4YsGTuFefTNacP33VeVTg3wL2JLHVUsewknApwM9Hs82CuXUgnatthxKiibwRGbCyFSCEUkCL9JX",
  "key27": "4XryE7vHU8X4sLVLsueXQ2nvxTBkR8P2RfoAHFvZZ23FHpzzqagmFYwTC3xkmExxSroz1yYLmFnHm6kcFEiWiRD6",
  "key28": "4ED7xdVo4xP7RBKhCbXP6iUzebszCkUJmA3eh1QxtZQvLcDzR7T4a1WpiYhA9UW9wYRhKebebLmGk6QrF6vznqhH",
  "key29": "BUfHRvxs5mr6DNmiQ3kGx3oc5R7BnqcPf7n2J7MiGLNKvcjLT1DcW8f6hbDrX5uN5tVNUj2syKmZ8HBeWSwYAH6",
  "key30": "5GfyCiGN9kvJXfCDN952ygoS7HpjR2EadGKaDnnMHnncHU8z3fDhFhTrbG5JjniCjes8ZtEHLs8KjDCx6x2y9a4e",
  "key31": "4EtVcwdEX8Zw5BRmdURg6a6KzQ9jvEG4yARYip8U8Uz77mt5vEZnxKU67X3neWaeWmrJawtSfeFAokj5XYkvstrZ",
  "key32": "61QgFinrKBsuDPmektddKKfD3rQ6YKHsZriEVgZBKBgne6F4UmKwC22yqDtBuUsBkDTjH3wULFrBX54J9eFKgPJj",
  "key33": "2hHX8EzL7X2dqo7c8VyoDSCoN1XeN5V53hpgCCsMYa5uiJ6twgQ2xtcfuWey8adMFGNvX7i9DyVsUKU3bQQ4h9nz",
  "key34": "5uLip85cnx7BQPC9ta8sfU4rvWt1YMZRQKiWrYqJCNCVEwWiLaE4fn9chbMvCrVh3ZHAYWs9hGUtzXxDbqSQSY2n",
  "key35": "3tMRYAR4R8azmmkRDFMqEZDaUUEa5ApFGPGcYjCDCHakfMxLLTbt89UjY7wPLiNMyavZ2gCPr1Mkb8Ht2FDYCMPs",
  "key36": "5QFhTWbxrLLnZ67v3MhnVHo4mX7FA5LUqyke36sHGPZajFeHLbSqR6byYnruWTT9jkLP1voyamHZd9tr65ndCx97",
  "key37": "3bxrfnfZvoCazMXX6GZsX3eHZEHhq9ZVxQi6752eLyiA7DYyEHxXBH72fWaD7ohvDKABUiNQKjMEhUUu3VLzSofJ",
  "key38": "4oiTyF1dkapdYmygRTyjSuZcRHkcUmUvAGgvyx6gAjmA6s6aL8icYFddM8DPL6rCyHjrFzvk6ULkFt9QwZ84sJ5Y",
  "key39": "4iYZ4g6LrwrGeuWEiSdduMTnfiSznhYNjmzQY34Q46NskTEvE1MUmGvD5noj2TbXJmdRfmUgJe12fLjrfbDJnWCz",
  "key40": "5F7RXq8reZr6FZNTPGVUFUjEn5ZRopsGCn1HF3hjygWUUsiGmf9f2omtS7a9mcqV5nsDuU1XcekjiPVrrpjPD5ab",
  "key41": "XFAFPaRR51xKbkhp2QryADNNACZDJ9fc7CWeXBJww6Rve2ZJvrhacH8irptKGpCtuBcHAcimrGPFUApeSYu6Nug",
  "key42": "21715nNXpkNvhUB3fRCB8j3rayodM2ujE13REegbrP9JyyD18cwq9p2QfskiFn8YtCsomf6mtXnSnuTcTwoDmRgt",
  "key43": "22sPcHVUdFeenyKS1jTc9HKjjTzgWv1YiTS5ym8L2TowedJWUdApVsP9Ae8W59QJjhDeDqrGkDhcBNaY71mRUdWf",
  "key44": "zKckHfXUJoWXrduxWkaaSk6U8ssvNqtSHuWL8vUZFd27JtQB4RyN9R3okmKhwNd54LJZmJfhXUhsXmKjnjss1cp",
  "key45": "58unD5DNobLhKKwnGgctoabJ29ztewNTfi5fS39VvusULDa3DweUtKyBoQwFNJPvVA6NZhbYbNaNDjVMtUK7ByKr",
  "key46": "4NoyYFzt75uCu9xRw3wVRvSfVnrtWhHxfChqWNWJk8HxDqkgvwtSCxQwPHPcvxsrheJGSQDp9C1huUSGBgzdAndd",
  "key47": "3VkF85YaP4jWgvvvJ2cfWEoKo6MwY3oFKtnaauRzMvDqVT6f2NLrrdVzSR7EC8ALkrAjQzFernhFF6RQke9jpd6s",
  "key48": "4y4qG7VotzaX16ekwSouyLBirsE3SFqaC1eh3nmbZgG4MXXFGhZ6TVwXkZKL7z4E2CzHeC7nGnC6SvJrmbyEmtQ"
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
