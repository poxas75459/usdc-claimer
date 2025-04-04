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
    "3RuJVCPiiPc4NfghdNe8pL8H2mkEuu2bxXPHV3ScgDf7UgpjffYvgrfwYZpNRYGKLdqCDdSWdTxJZ1XR7PBuEKek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyEEdxZvM8JYhCkCsPdMuBSVEm4VHahuDS5JhfEdPu1UGDLs8RVPETSKx6RsoF5vF83GgriRPN9Snw4NPjkLddn",
  "key1": "43pUCpmaiAXy1rVsQBxVKGMQz6pEuHRWmaeQYs7Act3NQuugYqGY7bNUq9C7sURwpJu8CPVSH1xjUmQnA21CvUHK",
  "key2": "21UvAEzcTfFDbWGLV5EFvX9XHRXhyEa6x86adr1zxeUWzH5VtDLeV2qi4PhKWCTLcju3JHaUgRDm9EnbUGkXdRMW",
  "key3": "2ebJY2EAbVPVEqiVSsrfjuJhHipQJVrPuzNAmztofQd77y31vDfXL144JqjxKFbh1pjTaQ2J6J2eX3RqhuLfWPPo",
  "key4": "5bfaRQUj3NKUeAPAdQGyy7ArC2ZB1AUf2McyyzgyTSkBZLdDX5svUd6e3v1JekRUBAjgXrSM7AUDHBM8G1kac2vx",
  "key5": "2BfmTRTjWuzBS6Gp8Wa1GEiMN6HegPtQZsVdFxR7TQftQT2pACb8KmQV6kiTSsn796fNq9tr8q9BPTUx7LKmGS7g",
  "key6": "3M3eZoGuwxcNUYbAXnCG2gvbLM6BSHF7mzyLTv45QsaweVmLFqQGsga19J5eUqht4F6GX8Yhpmja3X1vkeiptoXC",
  "key7": "55DS3VtXtTzrBAuxrwQofzyU3kcHgEfbKHjq74Xe1zzyJWXBjd55qEbagew7nH6dWLykJUZEgvSXToyWVMXXKH7y",
  "key8": "45aB6v9jhP5cckPk14xJe4nAGF955wqQeMAJrsuHPjQW4MfjS9qEmgy4vgrvYvuasYKVvWjVKqTTfzMy8sdGY62F",
  "key9": "CYtVTeCvuBQQaEcb7uWxhNtKwg1wDi8MX1JQDgaZRtAfVxoxweC6SSFGTji6krfdNY9YhSBc3ut5aX31V35jgiz",
  "key10": "3dWHhCPgbukrTkP1muvSzWeLfi4u5yQCFbpb28agxL8WDPVKFwESNtV81smMLb4ZpEvhAw7Z2JaATUooMiZ2g69U",
  "key11": "4ABz5cmCHGSX3Zo4kyXq1tbpqWWjY94cdT3yAhjazkwu2jRR6APdeKNmtESYkwy1S88RPdcA4mg5Gkp9WqG1rBin",
  "key12": "2fqcMunyXCGeC2GduTcthhGrsqUccAQqk2Rz1b9H21eqJ2QGycYm3U8xVjzowUV5gWy5PehncW1ADWQBuiCPNVH4",
  "key13": "3vbP3pNshWYPJmjboGucLUyLb7MQD4aFQDz88GMLZJWoyqKcjGLzyaZ2kBhcgj448Hy8vcmpiQXDdYxjKZZdsmii",
  "key14": "5ZA8BcoPZbjkbZxcXLjoYWWkKN331TUBap96qXFWPYNkqLHxd73dKB9oiFDWF8jvepA66WewnYxfhTCc4U5Yvy5v",
  "key15": "5Ahw5UfiGB12yp89b2oLmom7xT9ngt47KPCzQW2s1LAWMgSMpgEcvgRaSTLbCXjMhEGTeCyFUaz6uL2dv9GdZVvt",
  "key16": "TAC1aWA2USsuUzMfHaTiQKJsbKzTQ4RcXxQv62TnBV9PeatnZRn9FrpwqNJaz2n3UNPf9StD4dmUtmEFhVRmeKf",
  "key17": "1c7nWCSvtgGjhsLwnfBgU93LC4taddxT6zXs6ZQKdXgje94Z2iDpF9b7bZ8JHJCtXwTFsVNy5e3G9XpSUUAjHRU",
  "key18": "3kJGzUnkMKz47n5SmusKYNnKWvEj5btn6LWSbDbA9ySsDjbe9QcRZPc5t2VrHiSdHFeXGsDunCnnZxmvK9MTz3LJ",
  "key19": "2qPZEpXuwubFfoKS2UUTDgr8dyC8uaEJLLe7h6QCXbAcXwBbqwuBj1YfrW5gyscmUguQLLtKG5XcLa7yHArZyDVg",
  "key20": "3Eo2njYPQbnmrocYiTx8cpRkEgaPKtyBaF3euzkzEtuzcwAT5a21iVTXxMtU93tCXRdCFRKeoFJ5XikS9gwkv9D2",
  "key21": "258uTs3UxMCJKgCU9zSuReyWHUuRDjPTpBi66FJU9KwyaVeqsxjqk8dzyhL1XQToZ7LrbSYCSDmcCf8ye7ARHvj4",
  "key22": "2vkHnE3FvDuWSw75vKonUYBj2Z5oSt3VPreyrhGUbERzen4AgEV7hHfNidqSCLNWVPDBhF4YphJnaw2s5vt4B9V5",
  "key23": "28h3HLySMTqNqJU4QCa6hS4rMHMMsw1xZkVAWhcYBaNurZnn54TJ7xytq4x8KmM6H1iqnn5zibnGjDwBV4jniekV",
  "key24": "5KRNm84nCM4RC3886U41EtURq1nkG5zyUzTgUwQy55uy4Qk4LTvM9tE2588HuLKZkERFBXXeCV312GxA9CgNWjub",
  "key25": "4RVQboHdMnsrtS3kqjpqSRwEafzb5kVfLLzsyiVy1onMpg5are1FBYmktJaUZgyYDzkFFF9cHqJwAWbEDnybML4G",
  "key26": "4S832v2wgB4G59Y6T4uTy7eUES9xbymBeJDPtrmHddjg4nAgUbaQerpm1XMAj8bUk4PsMQCvGpLvDGEUgrxMyZiL",
  "key27": "3S8k9dQPzDLdyty8PsZAENHKBHGEdguKxxb2CrvdpGE2pYWhua7rkMkgy8ADKRwcPKpQ6TqjvGu7ycDvr4aWMRWX",
  "key28": "3MdA1TjC7u9mdg3YPC96gwbAb3go28HY4q3dvhah8cQoro7DXY2BRmDSYiqze4Vz74QUnKonumMKJiEnavymQxk",
  "key29": "5LKag4a34UvVnqDEui8BKaEt97khnsCSKchcsSfFpX2iSfm1HYajYr5VFxorkrgDX7UCMSZsahyZL2xxnZThopTQ",
  "key30": "4kxTAWWEgWieo2Bs1szjsewAwXFQq5KfutwCZWhC5E3DZ1NikLYy8iUCUTJNMBkGSzmQ5aW3RmbswJz8V9BATeTx",
  "key31": "4j9brSNNotFMfB9TFqzizUxQyr1fYZ1UWqEwPTZztcVgZuoGdcwCRSvjjxar8A33kfTHtnBoz911tV5vhax7hg6h",
  "key32": "4dzkZ6PcvaPdNvAQXEDDig6eKCmdRjU5mYCyemx6hSr9q7UPbpBB5v4ytqRdREKbFpW6jdLHjkGJFBHViUKJHHPR",
  "key33": "4x6neDyXomMZZ7KsCXc73Swkx9C86DkpPqpHW8zBYdmthYtoooUf8io7x7zJMM3Cf6fUcaMM1KC1huxAqy7k3aX1",
  "key34": "5wZAfnk3XVbKmd8swH6kHi6FjGoAakE7iERmNSVowj5LthNWPYU2Wy6xJxXzEbG3E6BuBGN19UUSXDs4HpHEjrWR",
  "key35": "4yBythPewRMiKZi8s6CHfShXkb4bmC65hmx7y7X9N95e1CZ5oLvspCeWjTqioh9zwrP1XCTiA9MzqUTkueDdZ1Tv",
  "key36": "42H3YBwPJZsj4ycbzvwBu9wFbTpoqDWTKdSJd7maHSbT92AK2mtowqMtwk9iemSfd45YkxMUmiwiCqoPBXDeUph6",
  "key37": "29JFgvkrSRkEkUTdQeSSfLXrfcucSCE4tBgfK1ofAkusGmHV7EB97ssyCNL5tAmeYDP6VgPyAEakX4jsNWov58zj",
  "key38": "3L5kKfqkhNqPy6HAb324huN9HWhFX4TrhVnVQMuK13LmicRavvtHcE35AZzeKLEwJ3cyDiwCEEn6SyJwXGZttT9p",
  "key39": "Sm3ukTpdcgFArfkHaAb1Bu8n2ZcAnH6dgyUcSH8g45JapimBQabo1aSfFC5QjomsQKZ9EQADH7eURYAmdSTuzY8"
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
