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
    "4smytPdzkPhJsvh3ffbTriZQeKJ63GRMYdNXNHeTWXL6JP6ZREh9tpPnkhdQwh5bVoB8rKSu7TWwvWosAVccPuLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXdKx8mYWZDP28Uqgkh5cFxxre8vtc5GKNnzVN7v8eFy7c1oUoM8SY6FBa7BjgtUD84qFnDTiQ4MJY72cbsDZx7",
  "key1": "4mrFZjQm2VwGPLfuwQyFKU5s67EZvsgTe5aUAsMS3ijdJ5G7qt4ARoX2LsSqkRDp5f5i1QQkkxi6aTK32h1kpZwa",
  "key2": "4fTsBzNEkxeoXHWMwKe4vAnPeLUQB3CWeaA8Q8Kt2mypzLrNh4bnYBsWsvyFpVaw9pJTz78UWCYha4TGjTEVTMn4",
  "key3": "4NYm8DzA9wfrhxPXxxyULV3ix4iMsjxDVZbCzrxJQ54LNdmLs1xM3yMMxCi2bE6KdJSHKBpuR9pTSrkDXKJVPfs7",
  "key4": "638DNofHruYQ1JnF3nED6XbCqqMDCYwnhMVjzM4B5NhtHgHk1iYzZCpPEPeyYUbNDL6sQgtjmcYC1ucevhLDQSD4",
  "key5": "7EPqhoW4MsDMoEPx7Crurm5b5BJWBXSqankj4yoXe8BhiKjivmJWFcr2XVeaCwXpVdX2iujQWqimdmbw9PYumG8",
  "key6": "3DDu4pW56FvP3c1ChqDPHfZKMKwWrpdiUTXia3P6LZWMwX9tS1yr1QwZAL6daVR5SsgTrJpwcit9aapenB5cPkrr",
  "key7": "5Cm4Y1Wd3GUfPQBG8a5Uop3E7SqTL6E8u2CpDjX5isUYH7RxwmZaqnZ7mL8FbeD7B8Ake212rwjRSM3fxAG5s2a1",
  "key8": "4YuAJJJBvxuU6d4hvdojVDcWM1DgUgvhaZJhLqvJhLNuy2gW2Pf9Sn95i2vpAxscGd76AecCJydhqi9GoGUTef5i",
  "key9": "5rsMHvjaiVaWYEbuLYDVm7DuoTFTTxPkf5SpXJKNiMPh51KBJ5i1cwhhQpSsJi941AVAYvG8S7Aj19JhTDLTtp6o",
  "key10": "63VviNdR6MuEhA63vEiAqMzKUWtmMVUt88j5LidTDmuwkzs9DJTU9KQW4APB7sArehw2LPzkRwj4jHs9GNzcj2vh",
  "key11": "2EANAuL5UuocjBAb1qdv32dEf8LnuSjpLQWpjBN64XNSPu3M5CyU7wLjVrfKEhQd3tacxHXb7JRf6uqNbctcysL6",
  "key12": "pJvRKcETTJGJW4nvVuni1AAECVnjaFF5YbYq7gZ6wf24AgqNFJLwZmARXhypGo2hAgrC3oYvhWZYDZAs4gnzosn",
  "key13": "2rLRrAqpjoykNccjkheGN6smywQVkifAiv9arSKCghyYd4aJ3pa1sh3RHCqrD7jcDABh1h6qFvy9EdEBddbSUryB",
  "key14": "3CsriEGVkpM8K7G5SFGKwWBMY84cy1z9ky7746BT1ckrgSiCibuGn9own5p4hJbQ7nuYQcp86jwh8uixKfg6EKTW",
  "key15": "f7nYrjYtV9DseZiVkgV9nSdvjDakHSCyb7aCEZFM45Gwpi85DVXoQsYJCDxZQyR8U7aYuGDz7hB66BQ4J8b9GHv",
  "key16": "3qnu3dYLPy6B78fHfJ2o7ujyxv2F6iShQADpskcq9j38kgqWJoGYHSZzVpBVsHiDhhGB8R98KeTXYDMw5owFugEQ",
  "key17": "5QNXaTHHVmQy9fT6R3PgoLE15U9XkWQY1Q1RTNgycxbcSUuAKkGKAAgGAbDqeiAKHHXeGe38eqAMjfYCBpgs1Y8e",
  "key18": "4jEXm7oV3STx6Gwos3gVYgwWeQ2mcpydFo181sZ99XUqCjvsdj63pLHejX51D4ZsWZR9XsUqS6JkEx7eUL34bRo4",
  "key19": "5rtsk9qDHVyM4L4Rncrd1vkniaei5JxS111dnMU9GYBcpfbiTTyT8yTijavz66YQZSGyazqDqbK3NJHeBqm5HUJn",
  "key20": "2YE4kVBsEMKs3CxQW3PkEHDWkJ4hKRiLqU5g1v27mdu49wTTFaFnu2fmz8AjzvRopB9yp36qmTdHv6HYkQvsXGGB",
  "key21": "2dz9C9KP1EzZWoBk43zo6fNhUxpr8XQUGjNiYCN2nATuZXHT6WYdXbuA3jDSz8BNyiVeZTWwksroc9Y7PYBBwjK9",
  "key22": "3gCPTSExovbcraN1Gdn1LUax5yaSqrXgxX9pyMTyjqgiEzN3FHndYxt8y1CKumZduhpEyyt6pKZ7eZy7HtE3o4oF",
  "key23": "5TtypTZG9QUrPwkJKdUEM7WkM8kG5GRv9yU2kXkowzVBwtrr6M32ZkDeYTjre9pgVdsMRW5cVGaCovzjBmKN2vXP",
  "key24": "4eG7zVwrrvbBvEkzDtCZ3dHjmwnsrYNYAeimZq7G77SFyudtxrSFh2V4fxn5Xg2jenNDuBM5PLLwkRB2wPwZfXme",
  "key25": "58v6P3sQyN9dJBXTekud3L7KkeKahiuoYTULrbZokxttB3r7vAzfJBDzAMddDVyXXGghuMk7VjpHE4h9J5dZT1mW",
  "key26": "65M4i8JUmeYJmNLxRXGXVCp8uvoKctyuPnaimwCi4nURZx4Q8m2jCexVCkKBt9rB1iDfWafDUBaQXHTi3SdFJgzN",
  "key27": "QHFgYEVppmGzinEuKKzT6quEoqgZFH5a66rdMPDjknHEeHGX6g5UQG4Q34mWBeY61xiqZKPYF6WZYLHufxa1iYV",
  "key28": "4uHTvKyY8RCZundNAfWG7rw8rmaSNnmf2vShpC7QK3GhX93k4sX6nHDoiYTrwjpjhzcr4DrG6N4USZJ8FLSpScT5",
  "key29": "J5TS3TqzZYDqzbr2o6iRi4WQ79kX8Hs4LT3tFS4NEfTbpT5RR5SmL6vznLQEtKtn1A79vcqKoyVXp9i4MiHHTxK",
  "key30": "3BwPxwypCU6nwyEtxe2WvoHRvhTFjmdDHgRBewx7VSHae3cv6dJDM7Q8Lqd3fBbe86bBttQ2LqeiSBHcQtTxb8kD",
  "key31": "2KsmYf8p66h8dCY4zAqcPA7jwqpPCXckyxxRYTzhs2kbMjmXgwRBwcx8kqhmp4edNaAzckgTvJu36XAUCkE2xTyn",
  "key32": "5ScaHYapUkW3JrNrBScoAJnKWvntSFYJvjbw4FSSyqsqC4NbNGGSXPCG25pVBTbXBEVxwnnATavkDnMgMH4D7ttw",
  "key33": "2C9UuYFTasxku8QaHYr5x3oajZdR2P5GafKrkNRXjYJFb8UjRQzL1vWGpKv58QhYwobLMe6bR2tAEvzuKQtKDT7v",
  "key34": "3CqTs1taC4wuSqECHD1NwKrLWrHegPGPjcXLPVjA3uwBjbYBoHP45ReWY3nqCS7qsc2Xyw4ja3EjhXGXccePkzvY",
  "key35": "wj3GxkpdG66CfVH9sFppMPVAdR1jLk7esLvdgUtkFyY9kPe4hmVmuFezhN9K9Wb1A9ADxTADAsgP5pYfn4pN8NG",
  "key36": "Hb4o873DkE5FH8KAdvUqALcFTnoy5GAXBaLeEZ2Cy6buaztBHtwVRZzANZZGeTewaZvWHjF5LdyrdRuaoydQRuW",
  "key37": "53QaVDsCDjRXkyPYhhsNnYMbGmYiqS5LadDsUgBbf2moXdVTUYx6ubYjDcuc3G354GSEtZRCcR2RJCk1597HTWF2",
  "key38": "4vYDGrdECiHb2vdQ8zsWrtYG1fDwCunLwrZ1auAnv5ub5r7qTy1iBy7fPQMNr7gvUXMVHh5mujGqY2N7LUR35HBd",
  "key39": "65aXEndRERrCCi9Lh1n3jxHhSLNSyohedyEKt1kfV4CNCcHRL6VhMrs2rgD15Jt4TYPAPU2f51JEbXgi1XdmUuXJ",
  "key40": "31Zx9KGQYqjgRbEFtZnn7nyUiGLQpFUTS893xqTE1i7pbUsied6VdyTZWhx5hbLRiXgoEfr3VRmsfcnpRC1ZM5iu",
  "key41": "4XpNJE2ZWjRwCdcjpAcz5f42TgYD6yvRDsEAcPGX3dnz2Y9sf8Rd35rW8iwB82H1cZj3ixqTtcKKoirT4haV7mFt",
  "key42": "3eT5eCDNAmDatc71zQcY2kvubtymASFjxSsACwkPuj3o9HWah8EoZpQKsTgr6XCQQdSr7vRBFczWFCLgvQBbNDmd",
  "key43": "2Kazw7AAUPkPh2hKcg8aYGj2yb2swyFkiZrRAJK4LBuszJnNt7MWx568Fp7ksZgC8GuYSb8pTP23n6U2JNGFbEvY",
  "key44": "5iTsjz6t4fw1CmEq9AgUSYmyFVtwoa4bigY3refo2k5G59uWQvJd96UiT5CgU2vd8pgajfV2gevnwDNvk2xgvCzL",
  "key45": "hjVDcpcJ44WNULQag8sG1nEAXuhb7vtoJToZX7NrAphzgHWB13aPKe25Z3wjVoYqMCkExngsJo1EbNmuKyHghoZ",
  "key46": "2nkFWdbXcBFPLRYnswizf2Qp4mxbEWq8RP8JFr6UwFybQkDuPCvFkzn6f9gJkaYnnmqW1t36hkrA4zX1F59g7fyQ",
  "key47": "5Z29zLD2EjUjoZUAfUZ1URt2t4zn8qweZR7TZqakYW1FLkkQvcYzWwHzGEGiAKC7AGL92pdYkww1FNg7ihnFoDVE",
  "key48": "2F3CbM2kepWJtQeBHLLHStixLsc8bxzPM8oxq2WhwTJSxad7XLCF9B57wfEE9DvYswwFZdZ7eURpJk9P2bLtLTDr",
  "key49": "2STMfaKWDGH8sVSrKBhHRdq6j8ja3Y5w1hrejXeN7dKr5drPDdKiiwrdNUysPp1Vt7qtimWNWx466oGaXgRKyZEa"
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
