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
    "57ueUSzRQWBCJJ37zuz14AfVydzwiZkraWfBy1qJSoSxupfjXyovarYSQWE8o9B6wfYBDkbUbHR23EPPYrTMvwxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXnD8zBTAERdjXwLdKiREwRzkRV6qbsqUrwRhJghzBzQrgZqLwJ7z1SkfVx4mhRujjXLu231geyZxBeYcdtJz63",
  "key1": "58hHXSEgzFgaxidmWbqTNjLC7tE4vgrjXGJhHdGW29xDHXSdo1ndQoSAGxS1X68uCg5i41zRAFSYB7F6iU6XgFTM",
  "key2": "XwywMjXCwKvSsbmtdxWNfEWzr4E39cjNHf8QmYqKckFgFjwhEeSVZ1qM838uaaZEPEEi2HJvTFQC7Dve9zkpHgv",
  "key3": "Aq4dpLNHwCS35xL3vvSLjaT3njFP5p6BoGguaZs3jKuSMVpnqPxgEG1ZH7RpWrUjFvVjyWiH3uC2akVS36z45w9",
  "key4": "5AosX4Rw14jcwmnp6g7DzTW2LRjne9m8JwbToeTUUNRiFEXjuB82Vu9prNtTpdej2ysV237qthtkTrgFYxnETGeL",
  "key5": "4Uz4M4zjmf2nsNxwBDtvauiwrqotvVYzNbH8B4wkVUmfcuVP2JT7jcA2nwAMZbo9EZsCXtrXdALGf2SWzUCX8B6T",
  "key6": "5igVzEa9dncnfjQhQ66xDheCoeQgdyGMR396JLWkfGwyXFrwTztnXKGt61CH5qy5nmV1BBELkQHVZwgkThFgm39R",
  "key7": "37MAr7j9q5iLpDViNFYUpA5JxcSb2DvHeSH382TBceMN9N6Y5KhMEKm2QpKHcGEPicToycpUdkppAEEYwauip62y",
  "key8": "Y8HYeGFQQNJdx7Ay1X8xgPBGAfPifJnL1gyofcKeeM3sLKNpTwBG8EAqFnsrUqvKgxwigehA4ENpnbctYJed8jU",
  "key9": "3QtaZzsSKYy9z62uw85mcCKGKkmufTzycv6NC7p3p6qZc4ET1MxXraXntL3upZPNxhoe2ihwMgm37nZfW1pCWXnk",
  "key10": "4YWmGwv6sWyZaYFVN9hVxtS8dSjpZKD1CbHk2oNyAup3MtycJRxRyifAjPJbKuGrSEuJFyVXaywchy2sc7F9FpEf",
  "key11": "3tqAzUHYQTAi9mmcFRo2aLFDJ4qc2Zyho2f9QkHEq23iKAU1ydj8UahmFGKWjeFhPt6vmJWSb9YWSZP7pTJjWeEK",
  "key12": "5SZiFUf6Xa5Stzv81V9hV24fjkFbYHjzUCScRQxFCiS9YJA4AhtGrEvVDQnpzmCu2TtwfryiR3N58kHYATh3rnSf",
  "key13": "2xCnLNusGLSZW4Vwtk6H4BFx5C3dmqCVb3JkoeEJsCEPvtUHPV5jpQ64mxwHHxqwvLbfSkgcaf1vJK4hgVvGe3gt",
  "key14": "4srAU7qPoNwUoX6t29tY9DqSXx5h7MDhi31R6B4Lpc1h1CGMKwpyTQUq36ajmtiJ4t1Zdc5ue5vaJBGrLJgNHGjY",
  "key15": "622RYC1ZRmv4jwtL62ezqsHaLDrEFJnxWxW35oV6K1rdXoQJvx6azRvscJiL2DqEwGJSE87Ck3QEpgS9LLynUPpt",
  "key16": "4WFavG2kmoEokMW2fHzsPHJP9kfPVjN3uHoQRbraV6o1BJ38SkU1AKqvd2EUaaiJrqDr3nrkdScfuwAWp6mbH1pX",
  "key17": "4XzEBSSJyjcLXvpEotefNuP4X4ewUaRJPyxHoH62xk3ctZYv3E7XGcUg9CntPquDwpjcAXShwg18rcUYNyqrqLrn",
  "key18": "3uUo1zPotFxgRS9AMmChYrauP9U5AVT7kc19TV3CB81VAdH5P41tVvtmiF42okAHVBBeifPtiRVPpC5rnqMBJZTP",
  "key19": "5mgi87bDbjNLtgXaDYMCTp2ptptmMhm7FPFJrxovmebMCgT4mDeYi4CS8ESdE3ZJPpzjTVUPNn5MmrWWZW1hsLms",
  "key20": "m91udKPP3EEfejrV6VqSei5tERRogQm2NNhGX6FaeW1ZSZCQajQngTUmMRAZddvDFA3Ts8m4ZqzpmDF7rvAkTJS",
  "key21": "miFMi6UZ7e8uC8f8YYHkCLayq6JbhXdwDEHNDTa3jEUNSzA2LB534cxbCdTB9eQpGYG1ckAnYjGZgZnXo5wGFdJ",
  "key22": "5e2RbmczQut5zj4CVrqFQrhGwoWqkgJ5uqeH9zfCh19qhLePYhPbWbqeeRuZUAeeYmY13g7bNdNLgSrS131R5dz8",
  "key23": "R4iJrhYCiHCCHfZGon1LGxWVAV3wqxeZzcDxCPi3LozMVtVfLKtVU1MjHrmya1Baxo6jSB6HGDjAKezuA71SE16",
  "key24": "3i8pcuEJZyPpHbyW5NvhLLxKHxLSUbwRgfRXEdnRqJee2igLrR4rVSP6BvSEMhvkij4fjpwPoFA9ibpKxHXB6U7A",
  "key25": "2dLTkR1Cha4chPhXte7cCvYFYz5wAbKk7DVbMWE1XYi1GmThFsUv1VVbxh2P5guYSpaKLUWFUnrsUN28eQ4VyvkM",
  "key26": "4dwqdGtoo2bpKgez7nzQ2iML6KbnMEUbgTeybNF8yMkTtEkYpyRinsqstnzC7LNBcpGWTxPK18scgKdSRUjPaRKM",
  "key27": "o9xhjssKhXfkqB33hrautpdkM154ZxJ8K9h7oYf5nhymaWR7iu9sSxkpLzaMeoYgiLkwzLDgZuofU6TXqp7KQYu",
  "key28": "3tqk5usUZE25dSviNZQZdApcD7A3YXDw48HNi56z4hAxid1P2avQTr6Yt73NDjftJmFK1nJ6WsfjmV1cVpMtFqP8",
  "key29": "2vzM5KzcNwn9EiZk1ZAMmH27Ay44h18rZRV5Y9ucVo6M92GXrCARhvpX8zDF8SW2GF8AFyv2F1WdtmSseU8aEM6t"
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
