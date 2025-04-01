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
    "4VVkpfQ3EnoiUA4d1ZJ6mayM7NDwcDXrouR4RJZcZZKNTzpPZ9n6fSvPpWh8D9EtNBwsmvdzGivzha9a4ckubCY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d4JG2HGKB7W9C8PRFthBfhtn4Y66ECWa28hhX2R3YzxgLTVvK3HqmA5RUs4skGRDZmfTJoCZHGKbZwTNCx8hsBx",
  "key1": "2bQBpHgP2C93XEHy7qgMwa2npcUWLyHGJQfXms8rD6ytCM21GL33fKpHndQJPEuyWqbCGqmQQskBcoPSPk2vmk3y",
  "key2": "1hUjjvn33Tko9RPHsy937qbEKHrqMn7guk46KWTizEeKhg25itWqG2vQ3XRv2U5K3qsuMjofg2HbPNU5j3xSE2o",
  "key3": "2CoJ6eKBkHMntK9DFMKQtJPgh8RdVqkAafX4pvfJN9esCaJJ6Eyj5xpQ8kRX84vkniYztbczcXFYXTmX5ifF1f5w",
  "key4": "3Vgme1N4aHp7tbqAiBspTkc3P5G3injX9Dq634Ly16MuEq3gL117yYxrNVYxdTtv3CyThFBKpiKEgLqRctEjzviU",
  "key5": "jrKeEARGSBYnW8NFyE78sSrpVDr3ikGFVsN4D1vgvbqxfsnr3E67dmsnKTCh6V37qYqTL9W9cqxK1npu1u2cbSG",
  "key6": "JDJD6HVLgFj5NPjHZf8wrL4H5KAfq3ZzWMU7RnRCzuX8HSrPB69qDMAeKNykjGLFNxdETSz1aWtfZxYuu27MU7m",
  "key7": "CwNmQZPS5VpW1Gr7T4wQbCRMqysMro8Y2knY8nU4vgQn6cJNRpnKHcUt45N4diMZMTx3zSSxRJMGUAmwSL7J22d",
  "key8": "UWyVZfCmEfqe1dG5rBXjD1LJt3Ks9MfYvBkzkPDU8cEeTx6MVbAv1qthLrjGxo37UpuZMxmzSwwUjumwDiwArM9",
  "key9": "EaSRcv1TPseDXwmfc8erP57nCP6Z5dA24yB8mQQ3joH8LvVgN5gt43GqeQzAc1n53kap2fQaBZqsf8Vee9GQnma",
  "key10": "5Ex8Ds9FwrZawufkrerrgRHptWL7a4CxDev3Cb16DKX69JAvs89mJtwqKRdzHtQ8esjjhdjAw7LU8qcaK4d8cuJX",
  "key11": "4egVJdP3ontrDoN1rt8tKqECsfKxP7oa6wRqNc5NshvCgj1so7kiNM6KFHABRB1mL5dkw1KXQjcgmkgbmsd9HMpk",
  "key12": "3ToBYH16HAgBg1GsGrSfdxQqSHByK3JrgFvGhu5JdkZdh6BStDVYqBwaf6aC4R1bcUkFrksrtP5y8LBTgVVZqGAc",
  "key13": "3WmtMrgm6JrUjuPjrX5GC21EYsczHwpD3xJdqcNmmDYXoe6Fc5mywTn2ZP9mndixp5B2DiX16oP58hd1jGiij3nA",
  "key14": "2exqiKWw9mcfAS3BCLJpRd7vNZY3VEQxQvephWzHiPUiD9wML4ELW6YWT1QK3N7RUzzvfZVoPEZ6oM9MgDp5x1Xa",
  "key15": "4mV1Uk7uB2XLtx8JjSAAWDjraZohmWjEtt6USUaE5wsTGNazaNw3i45vUNRCMB28BmheQKLBJy5T3YS43SRnreR",
  "key16": "Vi9EF2VmC9nme2YtpNGiwRDSCT5XTd3WqUc8ZdjmTfVviZutKxGban1RSrWrFXw5j4FRyAtK1wq1m89R7y1diep",
  "key17": "3kE8CGVQuzAn2V9zvbgUFbetjtWQei4nmp6UhBNzfDc7BiqV7T3YJZnHtH7bTs4Z9uvvk2hjEk3LU8axK4ft8RJG",
  "key18": "2KWQtsiHoMYBWPGkvaMny31ZbQxpjhN3fKw98rXhRmZK9zc3fgXdysTQXmUnwjSUhppFBTwj4CejqRVZj33DWh6j",
  "key19": "2DPaRXra8iN7jrXsanQCwzt2qBeYwycKdZMxBAMvJHZFZXgUbZurtNMkXHUWPQsGC2pm9vyvbYU5JU1PjoA4xpGA",
  "key20": "2V41LyqSumn9rrxGorYPQek2w4Jt5oJiyk2JSkkE6cTapuSXpPYuU1CyAmZNiCaKSeNtvUndSSNNkU4NparwGKpF",
  "key21": "4jVqz259mHeHqk23Kc6QJZL5th34h4oJ8HxH6SoTXheyNWRqLuBGEJkiBQ5kExM6NwwRMxkK91i5yAd5eRpLRr8s",
  "key22": "4x2DUDVZLRdJnfW2sQDTHhjMUewBKAZrHhy1XGfJrmwh7nZGv1kbMUT6JbieumbPjC36C2sErCmmHe3H4JYfxEHz",
  "key23": "VvkA52Tc7vmbTAs9RpneTWP3aQitaGSX8UEdK566VnVWRA17xXFbtrquenfhb3G6MVPaywweuRyvc343NPvEXBN",
  "key24": "55BaGhmEdTAqWedRnCqQyJN554K96FZhsv46faDa8g2aued1oQyPwMgNyDR7tACmUSF1JFVkNni9nLxfmziWpSUb",
  "key25": "3MVCa4Hyfyuyppi3QvhMYTneW9phB1bDpHSxHsbrKPDyAeFGEpfv4vohA6WSoxau2nCR56HvvgsCSSHnFBUEdufp",
  "key26": "knpbnBYB82P5ZLcySgB2cf51VkMW8wpLRggFiyJx8CvVJYekFrEPiscM4uioLBHXisvHT8AAiiEXj6bHQMDmXQL",
  "key27": "5t6hgE63agwgueMMYhaEcn1ky9ZhJY3C6tTwkpYSEwtWrjLmPWh4simUcPie2JajDegvzYdR8zuxrhrzbi2hVjvo",
  "key28": "2eYPNbUNJpoemB6RDGzUnxZp736CVDTa1dUbZ5Cmb2wBxowAU9Kvk9yYiG6A1sBojwjJmsCLt3DLZzp2jUHjavi5",
  "key29": "5RE1zwBsVLmsbmWzaCtxNBBLtyUwscQiKFmrMJxFN9jqnJoUKsr6ECzHv8Kjhg3voXszjgRDUJWdwJi6UFSQTCGZ",
  "key30": "2cBrJFE9G121Qyv83nWSwUMyoCF8a3BLzbFxmh8Vba6auk2ZoxVQLiNqwjASoLfDwJp6sbaNWCYnikY2kmeEJbUT",
  "key31": "3TAAFSn9oyFYCPaiBYFLZsjhZCZYNFfsMU8WYS5D9x3gixzA9x8MnHkxGMJ77igCwkSygwNkXGp6wn1ZZJssMdCg",
  "key32": "3S7g19DcLgh8FJasAEGd6BoXeLN7ZtXs7yE1BtERtRzPzX8CNvgraadrJ5Z1CBe1LZVqKHmLbpCSfFaoMUh8Wnai",
  "key33": "5bjE1QuisrtE9rTGdpe3wrzkEMtUgYVB4scWvzBLxPS4KFrYfgy9EZa53UYtBjFVg2gopTVqNQftSzrBT9vaFEnw",
  "key34": "qHXqkMLe2otB77KVjv6qKGCAoZ4i66zw6DsrQJCv7JFN2eXxucpWijBrnNBzsaAqDyrd2cjzr7hSDLz18GPfjSk",
  "key35": "5nfK681D98JTVN88pxPrB3XmfjoM7FNNJVANAfzicpNYHwwEUm86WyANTybFkgaWwg34WijcXPnMSMoFoAhY5Tfw",
  "key36": "39vSETs2ZGpqwNHxKWoySobMjSbja4VymFAe73fD6rwPDxk7o3UNyMXHkqhAkrnALAY4VTBfeUiA392mMHHPSvh4",
  "key37": "21ziCAFKHPdZX4UFAQ3edDXAu2zbbhjfxchcxofRCNtz2EDMNoQpR1b58877mPQoZaHWEs6yrRMUDU1nop93gzim",
  "key38": "koTYAqnq9Zc94RS39gCNvZDWSM2uqqB9Mcy2LsZ1joRmSGePDAWmWSMPUp62kZbMk2rivwWiqrfcDyFj1dbUuFb",
  "key39": "3BKp319YYnMSn9kMAteYwWimt9fbSTVsn2hw6xKr2qPQfHwCRx8uX85vWSuBuF1Q9zoWCRqpED3XfsydVPyFyWYF",
  "key40": "B27q6onkJyKDyCjiscvXDqSAFVXJkeA1wQwx4S9K7j8GPkpwt4UhGsrYLuU6xDrnBSJiqzJkBzxmDYQffzM2jXY",
  "key41": "3K671CiknHpDXKUBp1YNsPJiCd1VY2LzNWCPw4Q95SxXacVXNJwcAthShNPEeWrMMcrC5tzxcEuQEXimguTsY9JR",
  "key42": "67AQSmaycZRdjYyr72n9uhRf62c5szyYvrhePbKzy2BTHC6t6u7mUFroiwmG29Cj6r8XcEtY6u9qEMorYZXy4KG2",
  "key43": "2nyPGSYfjoozQG9FbdjhCxNoyahjLHFK3Ur2c3Gm5uyhfAzUAMTRsc7WPvB5tJFqdmPRsRSDTTEeUxyoTtv9JMa7",
  "key44": "37Z6e2i3HuJUbrc736ssLpDnQyVueRDoqrtYJauMSk2CWN4q8QdYnS33SW5To2EEv49EiSJU59aoQ7erdW77xGzn",
  "key45": "3KRMadSPA9dknMLiVhUytvkhdyjY2D9AjwAtMwssX9w6jtkCLoC6z65Rcy6qzLFdiFgizXHToKm9koZ3shNty42R"
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
