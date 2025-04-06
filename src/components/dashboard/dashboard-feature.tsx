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
    "oxcKi9upn9CYeYis4hXS2vc1w4p7SvgpcnH4NHHFboYnydbqs7C9GYygjPonoAWsYAzVWxynbkUDiTrT1kC7Jz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sde4Uc7FMNs55ex9axBL9k6oawdzfYa8mWfMJiMqgapYdD9SirJz6s7hDBa6g9F2Epvrx8pwehsmnTLNa2zJKb3",
  "key1": "2UkAafyAB3y8ki8q8CaYKhwrbik4ikEjhmvWnHmWHmmcyyvxYSqbVb2G6aFwZAoxQre6PhL28MswfcB9RrMHxPtt",
  "key2": "53jxRHn8D2D9iCgd3NKn5YPhLT9JvF9Dbv3Vo2Y7JXbq78BrhGxviKfm6TBnt4gX3KuWCPoknXLRkCihih87wWCC",
  "key3": "3QDRrPbXqmRyuzMkonq6yJSGEHQfk6RS83z4xonz34ZbENHxqPRg5U5S66Crowk7iQt7tpuDgK5adNRJyX6dMvBS",
  "key4": "382ddk5N1kkoVYfLCQvync3GyEojArhJSPC5qsZoU2epuDSxZwVzQMEzUVxJeWj2PY98rF3PSs9yj1kqCFE5Ki1b",
  "key5": "KFCKxq7HHzZzGPmBUaEX4YV2PQP4PAEAagziT3e8CoUkpnWGmEqm9r59x2VbKgAeVmR7nojC1DhkSt7wZJ37uvP",
  "key6": "dBj8Lr9kHWX8WK5UXoqknQay2Nqkcpzseh8AWKznpoA6uvPtWFAW9sMNuMEamgvgmA8bRCFu37ePTQJ1FQpS5PU",
  "key7": "618PcVegvxYb6ksbFikz1kNAmKZWhaPJ9n4MZ3zZGGbDS65xW2zybu1zQB5XFfj692AH6FLkrboFnMF736vcpRg",
  "key8": "5RP2TLquftgJ3x967srgRTSGRzArZieVPtsC1G46U89JVk6AUePZ1PwVsL59MMFdoNCebcni6nVhoNuMoy5Rvx2q",
  "key9": "2ggypcvKRoy7xtoeikaaVSj4fwQN8HriCDcXf2gVKXC34G3gJoHgHwCNdHj8adnTtG1hpHc5iibPAtbYmqecT1cn",
  "key10": "4nez9wCgtmCzWZfTp9CpFLS2DZNqeTXPfKoRbGotAMRHx8pKRsfhCzThdbSKhgurSHQKBadskbSaHpHHjjzZB9SR",
  "key11": "2RMVFqSvNqDkqP1RrH2Tu6kXgzEJR2tXTY7uCby4VmKz1gaJtYZrZq7vrvAkrn44cgi4yWhwsAJUA9ZmQt4TLhDf",
  "key12": "22TFyL68pJuvd25yc9CNCEjYXurDZW9XTb5MCNZqxSoy4kUUBjUhcg7LfANq6SfkY4oG6Wq88sMaGXed6wEXQDjS",
  "key13": "4sX8d1qjRbXY2H7FRKKKZZYxykdZU7SUEw64UAj6DEXsyentmr9jhV9R7dGjaCDoa2GPPvuA8jtyGQ81Qwyhp6pu",
  "key14": "3EHgmubZ4g56kNCeTsz42k5cLdKkofEH8BtMUnJgqDRHYtgucqEckeuoTMgfghCy658Lk5mfSGQmanKtwRAb9HTL",
  "key15": "2mZ58J5zxmhGvV5N8Pi8MkfVieSmK5dZoyrmR7SG9FJNND6kszdVK2quWiXddQ47FmvRHth3b7xAddk5oWtCjfuw",
  "key16": "mwrsQkn7CX46aQVnZzjPAGgNeKMzZEDrG5a7mHn3xup3ds2FqQHGBFr6FVvi8qumXwQFy7kkmppEvi7cN1LEoef",
  "key17": "3bFLt7xi5Zt5iCSjH2WVCJsF8y4AJYLoxksiMRwJrrUGf6qHRCSe7p5S2F4wY8XAjvjb3Qkc2TbiR8HZzMuY6quX",
  "key18": "2DVc3K1zY9BZqyeWS2QNLfY6vNX7Wnkm6hQ8n1fp6XayxJUwRh7KR8dBbV6s2di6xbzxqF3qNmrjS4dg6hwNDAp6",
  "key19": "3MhHJdn9N6tCtqGqVszmpEoMTmcCi5sDDPVHj6Hq66Zgr1o7yvNP1Lr1znm5jAunfcJ6EBeA6xHFBuhrsUYhxHSd",
  "key20": "3PwomvQcydSHSvRRwa33yrr8SAtsJatmn5V91mfBDUefKpUZmEUcLPve8Luz7dwWkGdfjqArPrhCyfFRRxJqruQz",
  "key21": "3cXDbUGLvggzEYbR4Nvffzmj2UTFi7r4U95f1DKNyYEP65zjmqfFBmUqqAK5ecX7qESZoMbCWSERMUZmwRLGzJd9",
  "key22": "42mbiV7jegrZuewqq7V83QR8eTQUDNrDPoXTPkF9FKrooB2BEcwTtke82YGh51BE2WThzkF6mWnuG85fLcKKLtuW",
  "key23": "3XdCWU2PfxyDqX7oTzEFwmzj39zAE7ZudrPqZLvmkaAsvtutHYPsgg9ou5LcPW4EHxo8JohMSXEfua5cWSjryrXy",
  "key24": "2ZZFaeLWHUwv8aabBaaUTPKjsnSuofCMMRdpCLi41pZiisQx7E2a6ZGZrXaCvrGkgpBNU2ohojSKQNrsZpGmR54K",
  "key25": "3SKRBrd377KpAJcQXqShJ7zwpn5jnPTnEQRfHcoxhWe6RgqKZyBdwBTX6iFMZLJvx1tFYN3EoNG4cgqPqEa3RaZh",
  "key26": "2NdB9ccGhQFqhaDNFe4PezhBynKrvLgFX26sLFeGDBf9aVbTDBv1Cv8sw1n6yhqPdjiQ1wiFnDyxqiCZkaoiR6bb",
  "key27": "2McUeW5JcTMMo9thUzo3nazTErLemQwAheZkSZs3VjFVhvGqvKYPwzT2YWAPrFD4KvXMU9BGywJLPy1PXrvzQSs2",
  "key28": "32jeo28BBPiyd6vySXpMYDRFC2UGHbV5TU7uUFavixvsameuNnwCaLrLVUwHaJfF13cuTwh73xV7q71AMWqsj3xZ",
  "key29": "2DkD599Brgz3E8ssosENqjndL6Pp1qKkUwysPbzeR9yRKu3iKuBXJpkMLEq96KZo4WW7FT2wKRfGwTPcicP2A9CK",
  "key30": "4qDEmhGevM6M2viXw3cUfJFG1xEuPNy9GEwvEpEtzArwKZ8awjswK1VcSRuGUXrNsL3nSA4QJVDpHX7JFJCXxU2q",
  "key31": "3zh5NMx7hzrX6AruPZYcUg7s6J3vWnoJFx3BPGcy22cNn9F4KLtkeeEBPoVx3e8yMDB9HqWonLVGN7xDBU8ZHDm1",
  "key32": "2jWGcHnz3vP9NyLkE5vzsMbGzfGrRPcrM2AyJ83vq2FtmDSUMtcdSAECvtuvqL7pfkLmW6fjQU2pZWqDJSG8yhM2",
  "key33": "35JQ7p6s3Uu9ttzvtQzCGcH4KsTL5Yb1nyx3e6UWfcXFdzwHPuqUVxnLrKTxu1BWa5iDKMaRsiRq4mNiAvSjpAaZ",
  "key34": "375P1uPNHoZQKX5dYF8pLnLJQT8DN7b32aCCt49tzo6zUxyqHTyb17gWyFXvJ5mBRzj6V4g7ubq8q6hHxQquypRy",
  "key35": "NNiFJ66n86BszZ3jQwFVsEn9tGoD7CRDqsAw2GEH1F5grFFqN5EeEAgMtvyFsWAzcJN5etTaPS7jy26bT6eQkcX",
  "key36": "3JytEb1Aw1sXnPStFZqi7ZNoS2myuPCk72hdwbEmb7A8Cg5hYQv91KoopQbat19Qa5JYAkrmSympMhDRkUM4SwTS",
  "key37": "3gXWMjam6oG1Z5TGu48sY42rD5DukNiBKg6Mhp596v1j61diejgHAtRZkKm3ZycGEuudU3hPVgfLWJepHSUar8js",
  "key38": "2M4btHLwfPDae2wCUyev93NQ7g3UtmvQe3duLKgwsTdEpRj9LJA3KPz1eLeVp6bMqSo7eNxQj3XgbaQNaEBXQz1n",
  "key39": "SpYXVQvNYuyK71Jye7vwRfdveUapCKyViQVZNDTn6KWgsj4T3Cweb6qeVm33pTDtAtwhg6CFyAgCReXkyhmm4oQ",
  "key40": "3oyKYi7niqCKngRqxyLAy7bPcC9MVe3ruwxxvyiwgchXGTcyoTnRepi5G3MFXA7jL7LdL9NmMhS2NdFuwhRmy7kT",
  "key41": "2vWksH6X9khCJmk3WpAiuffEP2Hh8gugb652BPAVyRrBoDkrTWjJDCE4ZNCKrriKUxHyGNgHf2X6HwvUTVVeiywp",
  "key42": "5Rk9yjWpAzN5d5gfJmT4DfXr7nMFP5G3e5pZ66QtKPWW7c8MHAd6wzEYGcGqCtQNctrDBwvynBSbCo51PezK3GmC",
  "key43": "2hupx9ayiJnBQx6GCX1xXwKjc5HbwQgVt25NM8vdpqg8zp8Xf2shV4evBFbqV7wD9jjmMEx9xdmLb4FU8QmQk796",
  "key44": "4fpNzvyVD9mgknWfyN3H52XgGw5r9EVAmYFjQ5fJ6VNCHEW5x7S9tnzYuHP9QRK6cvMU4C1nmTrrcwRUNfNV93y9",
  "key45": "5xWnGa99Ezg5X1Kxqm5gkxcJSWknhTqN4qopTXSR73dPrRnx7YbAhd11WXBmX8JokHwuA8QXiZRjHE3eRZuWRsy",
  "key46": "3tYv51BqyG1ypFA86DCv3PQeFX5YzrcjHq4uNzB7eBsN7EpCSSXowyDQkhRcpctyT9mEVaPw5VaXvE9ryomkjuMH",
  "key47": "2ey1yYNMMkfczU5kfb412gehWtXNM6tJ1ZJZnjKDYHMSvZyXME8n2TvjZhvHAb7quzE2Aw6toJ5jNtU7vALwsULi"
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
