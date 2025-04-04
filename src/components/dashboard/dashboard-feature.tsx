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
    "3pvhmm94eEKacYRTgTJExpzCqULjUuj6YsDF9WdJNm3dUp1hssigM3fnhTLLUiwMLWaJHRjzerHaBctQJpMLzrMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEVNovDQHPBJDsLznfpaPs2wN5skDgsdTou2iWwgp6Riah7LijtreQKEFJbnjrXmYtA41qEjPaeVEBYfknoorDa",
  "key1": "2cibA1gfByBiB7ED27RzVMaEvpJRrVqHzqjgnBnurEWtuHLc8enrjj34g4PjTXNAMLvQtDWdMYePi3n64SY4fPTY",
  "key2": "2uBpGrwHiWzHbmbUcXW8zynMAdumusJk8BbKKd7irRn8pvzX12gxbbioNLpwqHZbhrhUcLfGrthkpZyoDJe4LYHL",
  "key3": "nDDbGqeDPTpgtP3STZ9nfuCKP77e6EYkaqGcwNmbv8BtUycPkK34uy8So8cxYAqgtW7UjByvnNXXxyhN2YaCtcM",
  "key4": "42p68qQtwGTuXWrNAwBfCkBGX2yzDvLuMDsxywxN9SKoHcxMgTeAtPFkFpi5y1X9uuS5LBZaN262ju7xnt1Sf7go",
  "key5": "5jzDV1ZPH3HFVyJAZycLvoWm8eHH5gDWov4QzKqJUaJhcUC4bRZWpN9p9cbtTy5vwMXXJQmbLSCBYtq3HkdzdAan",
  "key6": "3k7LF9i37iXpFCoBWidcQux2yihVpRtbtxiE8V58otpPrbkfnR1aX7j5Cxc3TrXPXQfKZW2dJRYxr7b2y1NKEiR9",
  "key7": "3bALHsGT6VwyMLXGJz1LcV68kZkmrG8VWg6PKrVdsbSV7fsjqcrDLQzaM6WHodCXGDcUXyxXxhazJ8jVzgMojE8T",
  "key8": "5UWVfmS1bYS8g7DdRH2qW7MEH3XhqcCHvVz9Gf5zeobJy3RJwE5u6bzcRPjPrM6ZwHsi4mi7ynM9FtjpgKSutETc",
  "key9": "HEvaJCbKi2XWMzgPW7N3Hy6hozKavyERbJt1MjreQae1h8jtbPtQ5WbxBPAAwspMRAfTi9jfB9EaCrtXs6Rcvxx",
  "key10": "kubCnR9gqrEv7vh6HovfQbmDtrT6935HGCshvAQVs7T3PQBPg1sxSpu9p39cP6v4h1boAot3Kv6UyDDeT2ULZZS",
  "key11": "5YytRnCnWedXjE2Cx2JicgtNekJTAHUknCbye9mM7ipKXZ4pFE7scnbEzQH3FvAL1wFVgovPDtpd7zbBfufaFEkz",
  "key12": "4s2UPt5itukCDjMep6SVmAoLY6SHFbMp6jBFSqMbXG5MUqBzGCnHnpAiWiA14Eu4E3d7mkaowvQzrCX97e57AzZ1",
  "key13": "4QhCbKuHRd7qGRsaa6Tm9D39N3EWjhfNLFwFbVh6L4gR26w3wRHJSfyq3f3miZU7XxNCnPqbXTEKxWAqDLzRsegh",
  "key14": "13ueE8ekiinC57vCjFbBnZhqJdUFwQSsDNMnchbxtqCQenCmrjEVU73Pi2HKMGZ3sCEfooM69TCVsLKpAGREXiy",
  "key15": "3RzGStPAyv6FyJ8n7BEBfngi5w7veP6pZa9D6bH4SDcSH7f75GNtkQ8qDHYm2GKLKNrrwA5HDKYPmaqcpCZfCw2J",
  "key16": "2GA87ANuMxFQpj6tNMN5hc2rdPQ5sWdFxvBBAqkQqMEmBXCy49ujXTMtkKhi95TWXdpLb4wMpJ9K4USqMVfJ953n",
  "key17": "64Lo1LWNAafSDoGYvaxBS4mhmYoyfxG3Fxbx5wP8UsAb4vBRyzs8Xd8WYBJfj7nzott8RLbV6X3q9rgby8zW2MTR",
  "key18": "381fy29dKPuJD6FEnvju6GB2EwD3RL2WdJLznATi6kTQ5QmUuAG4tQExvr2TkCZYYjCxcJiWDzhwGmPKxmW36hXP",
  "key19": "3gUsEh13M5Gr5z8TtFCsSWazDc8RdaThQU3ixwxqGEEYjsz7SZUFRju1xzzfcnx9RQ3EDyAVY8uYWREo8KKMySjv",
  "key20": "4gXeo81SqAtMyh9ug4QiK2S81QLLUm5ct7aLY1kxsPcwDMZh1G6ZE7txTEtk438coraSELWCPcdCHxYPrRAT7wuU",
  "key21": "2G12T6ZyxiuNYE8SeFs7QGhj7yQiFPFy6s2koo9DfTKk9o9AW8MiBrS8jwC6nEtsegEZRp6ZZ1dfMWZGTFknhj1L",
  "key22": "5o4civtfcdYger55reZ1oJnhosTvPtTN3umu923xY6ogrszmft1jJFp92fQLjAGbo3DfXZuv2AL1V6E4U3aKW9Tr",
  "key23": "48WVXpM67B36ufttX7NGtJuxtrtpYSJn6kghDZshRN6um7VpUMKDxd5PMcQt8Hh43ReXzEiKsXmJWMUzhJ27sVj5",
  "key24": "2S3zUSs61tsPMfZuj2uqh58sPKnYhU1gPetibsLde1KbQB7SHMnXfPcUHpjaxRPh4Xfq4hP5UcDFh3fTGbJi73e4",
  "key25": "kb5c5UsxUfVdZg8i6EMAwJhoNcdy9NhPZr3J4tcw5YJXLrxwNbPsZgLECppMzgfhSJvFQM5AfxGMPYJB9Hxr7Ei",
  "key26": "5beE7zouFzPDkdWVExdJaEYMRBQDGwBiCx4wqfqvDwDwDjTvzpVcVcmi5FuSXGsdGNbyFXWKUApkA7S7Sek9iTiy",
  "key27": "3kYeN5qHNXMHAk4UpQ12chAsnAEUS4aPJgNGNJtJ6yVuGiDDmaY7aKAY5GXe57aZ2D8yfUKBqDRtYQiBKPQuz98c",
  "key28": "d2avjwecdC49zTaX4cDJY1cHRQiUhRhLR31RLStbyCosfpwFHeDe2xDVnTk8zmASdx6yFpVxNgFdnuydpBAK7Ui",
  "key29": "5zarKppTNfDM7t4Rd7kSYxhjyHgnxN1RxLS9v6PLLbSXvLppZHmW7ADqP9Z5jTDb214o5DVVmn7FkJJjAChwkUxm",
  "key30": "CoQyYJuXXYknAr5h454PyRFDJTNVziofaC2RbjPNTPPQpxWZh6RRcosJ93HCRRkQaZXP73VUeviVTAku7tr4Mw9",
  "key31": "4yoF65AhPXWhMQZkbu47fe1TpfJHvBSvAXUv2zRFPmnNkeT9ZhyJwrdCuF1A7zkMk2jN3dSvACEjU97gAuyLFtDc",
  "key32": "46QuGzbxUk8S6gge8at5xZdQaUz12aaXpxG2K1YZLYB32npFyKbTDmyfQ3tmZPdGV8mY2iBQotPGiBpkSGw3AfXS",
  "key33": "3aKsjoHnwdUiLUrwzqPWNNMDtnAgSMfygKi7ikRKnks2Bfw2KK2aBr7L5V743BKKztradMocdqTM9XhPkVUW6618",
  "key34": "4JGbiXPRTXbo5GqfvyhzLLqHGBF72Git3VrTLyRG5T1EU6jHfqjjNmaE7r5RLxw3HgVZ9WMechDarWwkevu9yzj6",
  "key35": "2N6BxeQA1Fy3coNPgsmn2oyGtK12JHSgrRpEE6zVh2qjHvhXdhtaoRL5FSJDqyaAcDpuPF2Asuwo19FJUC6TCHEg",
  "key36": "3mgtQqSfYtFwqh1Zbx3YcKfqh1Q9hDn7GcoCHKQniLAynkiAisuFEgduqBoxCZuSuHiNugBXhLfSX324cYJWuuL",
  "key37": "VQQ4aYbhDBPBJEhFrDdBnRcEV612c6TQJ555V2BH9fCgqoThadRdrJ85GE9aTJuYWEfSBG51V8Aex4iFGGDUPqo",
  "key38": "5YihAw92fVuY8aNSMPgXJZDinoKYarc9KVe82eKBSXBKhJeJvAuNT9CiUrVWdLH2sM4Ljitp4TXSY1TFdfqzB5v4",
  "key39": "399ahv1RSRbMpMGhsQTdSMyPUALgkp7YcFqo44NZY9MDAExqrJ1T7mQQ6hkdXsq5fjx7Qhqk2HVWN7wDJ4p8ZVFU",
  "key40": "3CXv5hncQmYEY55dShstmwA3S2k3dfNF81Am9GxgtsBcpEAkehc5nFud9JcqKkyjNw9WqecgnoLLCogi9v1Dug4i",
  "key41": "N22EwU8zCTa5aC1vH2gK2L1LPzqFykmZ7QCSqb3tmWfveQdkRpXhZkyRdts1SraapcJL6uYuCLS2bu75psCQutX",
  "key42": "2RmoZVvDvHgRE8pTqKpCxwR6zgbP4UVNhKikffcMMMu7myiRMtZx2pp59Zk8jFixGoum9sNa3tjP5MJxZta6G5Tc",
  "key43": "5GJwWfRDgUyuCTciSyZ85hRXjv18UeKYXHumRKnLBj2W3h6M7ogx4PuRasorAbuVfpf38d42MdPbD2GSBj8d3HP1",
  "key44": "2ipKxuCQufzWq4a8TKH5T7DaAmMEaQ6Zsni2kL63DGi3LsEPWJmW3RB8Rq276N7qy6U4RRADQhtG7kXMEFt71T1Y",
  "key45": "3WfPN3Zph13AvE3nZ7XWZM9oEMZMxC2S1zgcUEym2CxjjvXr3bYE3dNjfWyACXsjGGpGgdDnkiE45saQPMtaKFYb",
  "key46": "4G5JZdehFRdhLc1B2yd8cycwjCMiv2XfpGWeL8McCMo6YRCRSvmito6SMreXATwL1BzHwxoHngsTGpMmhts3yhyK"
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
