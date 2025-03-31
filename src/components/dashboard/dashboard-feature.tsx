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
    "3Jbndamjxnr2hMHmwCR2aFnQ1RF6paa5F3gptDYQ5KKWxyW9aCuAXxmrcqzurDzKC99c67tFJK3UXwMzgmi42qU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBKXHHK3DYZZdQYq8LS5PDuHpD4YSJu38GTDoA5azUSsKGCEKrNn8fNn9xWwCgmXu1TFdL1hRkpPzcjVkXQFcxC",
  "key1": "9wdBKejRW4HwdizvJconssWb14NDRzZ1qEGE4QhVfXPHtRMZ1koZ8Co7qaT86yXXroKjQ9HGktN3vfsccueEZKb",
  "key2": "4iRUjNu9jgMMbVA62XBdFSTGtbqD19MFh1bQfyJufpxwQxxismD2WSDD9FKU3AEoANxhXgrUbv4HAYctj48bdxas",
  "key3": "JyVeEG3RtTDX11dr6tjUUHfr5hPsokLbremrfgiCR4f5yHWUmaFpjbvyKHnpeDNiT9j7c6qk6rV6YpzoFNrM5h3",
  "key4": "5KyTTZh2BoGHzSo7TYFUvZauzYGsEMQYBN9JxKQhAo1198w14T91QT84ssGWz14YJbZLnxYWwiU6iYH7NHzDY43A",
  "key5": "3NgApGSeRmnsBQ5tS2EC2eMb2MSUUBy9WpHymbbCsQkFPYxbdvxy8aZmErD2QJB8371PQUAxxbk9C4J3p6MRXHnT",
  "key6": "5gLizU17onZRBr7QbVL3swtC4uHdk6ZiqgSReYfJa3EaTZNDketALunvsRa8q3JEx1RNuvedSPW1uSPPj2UC1AFE",
  "key7": "2WuDvuxci68oenPD7V4D7XfGw5GUWXnKX3VsAqTMQiz9b1ipgsaRofzn6rLRJ2eGjck2MzZNZMDCH7gW7pkmhFWZ",
  "key8": "3g1dFBjukEPqRPbqcHG5iViMpXatnjedEfV95kRZNQvGkoVFV7CGTKm7KibE9qoGDoZXwwBygSmo5WDBehXY4DeS",
  "key9": "5uGyyQP5hhvtj52usuJQMRW8ucxDgbcNPGACqvbn9cvAEm64eiCVKMuuWCnbJhY7aQocVVdKyEUkucknxYDAVPwh",
  "key10": "ji7oTbsRMGjaJTDbk97hoHEqMDDD7KAZHWJw1MB8gSeZPWUrdxPZGCAa3nCRS97k3H3asPywQSJb1eigVqxzxpH",
  "key11": "2vCUs83W4kpECLWw2nc8iihyktNXG739q8LzFUfgba96CFcTDPQHpVb7ScDhUFoev5pKHpKX2exk7UeZMbUXEX8J",
  "key12": "3pVi3XvfsscBx7Kk78i5Ega7tXWrJF5RTe75qc8Kn1ATeBHqZSYEBVoJR8ait1m5Zxan1cExBj4FUHsx1Meac1uj",
  "key13": "yycUvuCt4tvJGNkbAJ9dKG8MQ6X9hfanTGCDws72V8rT9pX3NbScZWrqK2SrvSooCZr48i29MHvRind1HUfAax4",
  "key14": "2xvgUNtLgYHv7KJkVkiuDrGAWfBUqqA9oHHBVjJ4jvbpVnVSYui6SnqSD5Z351qf2SBz53kFPMAkzN9Jd5UiSWCH",
  "key15": "5d724JBkzdwrwarWvoBzETyn3dwFpAuBHnTjUdr14X2xk6tA3ZshsgX258kdsmFdvy4yT777KD5DxToPUeVKRhUN",
  "key16": "4hGMD9mcJFeAdz7HtcUffCh9NY6bcqy2nR5hCNcKY6189grW8AtZCeSEhK8vGVTj2oaHicNWBy4i7PdKrraf1kbD",
  "key17": "4BCkckeudnKqpEfn5u8gLbwQR9kb1yvwTL1ZJDUHRFP33pdL6XpWrLuav5up9zucaRq9GGU5jzVcFwiewdPANgaX",
  "key18": "2RbJPmkAF8yqB6w5P6UDbPuDZRDAqiDdGa9SxtUrpja6NmNHedjzQtptV23RpbbNg5J2f4Z9faw3peWj8W8Njx1H",
  "key19": "64zk1U6JuHQYSmnPGGiXfZoHxcmsQGt9amqSjVq1fB1LTqdnHL3QKEvPyfFW3tAo7sjChRrubVzKbzCtQdHL7tGy",
  "key20": "TcbpwVFWqM4sURd8TDQdHYwmgc3vB7CXKc9r3CHWFTUCxgFBkfxovD49LBQaUshUC5wHsrXW937vNtikmRskMgv",
  "key21": "29uGeJL8y1YuToYWDvDPq1TVt289nXp6zSPz8tCPy5sU4uHSuJdx8KFhoeq44K4UV8MpooiEx2Leb1xFRBYfZdD4",
  "key22": "4FexXnXyfBUMNAkzWbGU5FvV7hYz6X52wFD98e437zzrCNyMGodJEYzz7qsaQRn6prjFHNF9STKpvUwoUnWjor2V",
  "key23": "HZb3dAz5QqDG87RUTnNmoCcNBbMeeQ9C4HkZyYwR2M5gbmCT4rG1YDHgbQpP4XipD3qQR3Ns179mWyvpySVe2vn",
  "key24": "RkfVYFkwiJJjh3MwGhy2q28mBR6eN5xSj3WrZk2A2gukpivKuc8UfByxp1SBcJq14pxaEMbCEbdY3fya6vs4sFF",
  "key25": "5JayaMbanotYhDUnPned1zRvxQ2jSkT26oukqkePGQjxiKm4kNKC4iE23d6msAM3n3EFfy8rSnjSLW1mdB8N7ZCh",
  "key26": "5t2EGTmB4coa7mbu5Gz5gHb2khKKGn1npzE6ngFk1pBUgve9xqzPekKRGjx4qx14EtUHcZAdS9dfGdPMxn2k2Rny",
  "key27": "ncQ83NCRcfFihHHF7i3sNJZmdRddr3e1PTak3PwPzMkGRjupoWpj3JniHfYH7ewrvUc5U2TsigpFXwxgwZrHgD5",
  "key28": "3aeBji1EBHZCyVFabdvA1bFdV44pkK5SzAku7PNArdwkQTmShmow3ybhEPeyo5KcW8GqiFjbf35uiwyzoWiwrYhL"
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
