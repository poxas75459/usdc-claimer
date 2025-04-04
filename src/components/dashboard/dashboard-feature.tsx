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
    "5q5RWacCbtiWoDoqTVpF25ajGqDoHnh4TazdiAqgt77E1DuyUyTvxkjN9eioZHhZZUyqdsHEJcMHX5N2GEG47ekf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzdM2tykzn7rtpgNJi2ZFaR65iDu6gxZootpvY2pr1SrFfKs1gzva47F8rr4uFbHmsHSsmkfxbZ4Up6nZyZgJm3",
  "key1": "4hrksN2MiYeuMC1u86tXdAJxKAnKuxjA3UDJwiq2PT7K5gCiP7LPEFhcgPgW16bqjJoVkEtwLzjpoGAhvdjEU5RE",
  "key2": "3ERX6VuhTEwqqqY87NJ2MZJpjwrSo59pXmEGhLEcXt98vK28EY8QZdVJBrVznkxbiaVeB9T49syikDeRaX6jeNKk",
  "key3": "5BAeSQhKLSzRTeVawAwPsfgMw8utwk2sJWKeg6eEdSpYGp8bJKwJjHKy4FcxkP6DvdKE83PzqyzdfRFsgG91giar",
  "key4": "63q46aRhR2wjcCdKdeEJUw7RKJ87SuqYQGp7NciPo6c7Sd43u4ABEhmCUpq6moY6NSRXHYyC9a7SEM9WmPFXZhyc",
  "key5": "Qnjtz9daAbGZVmRZVvnvtG1enSSy1uaHF1mmKAtBovVzWnxCbZZbPq8zJ5Za4xorJzjZoGGxCy91HjcH2et9bck",
  "key6": "2smxVvfZAbSkSPzxdoMYSwXbN46ex4BJTTdBMihhx5sW3wMeA1V4CpaEhBhxEjTZEtZN9aZqrpyRu9qpAJUPok1Z",
  "key7": "5ZkDpQZt5aGv6diq2q45wRwganA1qrF3NCqt5qMAECvSSn4bBBgssRvzpUWTYuoRgVtUjWUFamQrKz4fZ6j9P1Ea",
  "key8": "NJzqAVxFx2sUCVnuSntykd6eaEDskTbdZdqLmoVeDgTytBaNKPPRoJJr5xmEvQXKbSkq3YfCsS8mmu5m3fcKPG2",
  "key9": "58MmjUDE3fi196QRWgZ7R814T41HGMEZYwLEqCBtjRUBjjhXFef3K7g5nfqJUQSyc2v23z7QjKMsuyG2QLsm5X9S",
  "key10": "3eQBfTprWWSRLoD6M7ehMXGgiKwunNpn1BQHAkdNKiioeWsj7RWKUtanNd5AbhUdbGUtbvFMVbbo4ZwvokootjLA",
  "key11": "62cpssvCQ9GfWNjXbfYQhrRbYQgAztLDRvzkSKEN6e5AdhddmvhKzvd6UEYUbgPSZVVuoim5VUPQPgaJhbn7ZJYL",
  "key12": "3HiW63B4QTbTxyw5vEAoxLqaeR1Pk5cQzhNvstydBB4kT9DCQgcUfRCk4E4qMB46p3ioM12fNp1DfpjQMQwBg2Yx",
  "key13": "3Br193CQCoarHrCVzWnEyGHwb7SRESiZM5YFPttPHjtQeDNiRTrD2wLsmMZX3BM3YLMPvkaKXUfpi4idC9PjzRvM",
  "key14": "5wHfjHkEUh7mmo14xfdRJEfa4ntj9aSzgXAHxDE6F3Vj8GRizLMnMFJR4Q5Whr6mR5DtvouYTWvVP5Pp72vYWxow",
  "key15": "4vUcydQhfdFKetWUpVjZQWRC2nNTEPv9Cx2UVM4RnPEq1Uku5au388srAQq1yrgjpC8PtsdzpV7x1A8iGUxt3mKQ",
  "key16": "5BuDKmShKoMkTwmoT27zB9RvEpJNj9hLPiCxdJbsfxMDboFA412mjdnChXVdPgf7vHB1SpdZkqJUwLK12Vu5VkG8",
  "key17": "5Gb7hZj9VF6SH5GcQQfkMDiQ8soLG5AViMF9EXQ62RTpUcy3ap3Rn3GJe2bgcpQfikjgCvVWSn8Dwzdr1DzQLdEz",
  "key18": "3M2jkuqdS6AYV3eiyU8WJy2ZttnGnFpecmXxG4kY429b5potbRNg9SbTccYGhzyeWen7t4Co91UQdj5WGVyBR1Ws",
  "key19": "5Uj15f8zQMibeE4mvPM4ps1VNeQZh62vNAeb5C6R2EHMGrbEeE89BKre2PiVGddiCq5uhsyqa1MhT46shfz2duf4",
  "key20": "Chwa1SmNCwi66RQj1erSq7q9uPjszsiDKbUU6jeDgD9u533Go5eFgiRMYv5irqtmqeaPim1WtYVx3v9rMAHTToV",
  "key21": "3XiMrSmFfCpCGicUziF56yScy7Lis9GLfWzsC8TbKhf8xb2FMFoUPYfJt35wU4G1R25ib7MC5fy4mJpsrHUrxeAN",
  "key22": "43vuRtQMUUmEjraonxYmKXpzZKqJjxfDY5hPrMEvQQGaRfxJdfrrg9smPoGhVsHPeq68hFHGg47zPmhAnWPFhGY5",
  "key23": "2JNiycZPYMkKvJaot3PNVCDjTNxdze9SH6id6kvQ4p6FsMtS57uPobRUxPSAdj2PTDzLJKDgNAXpsHc8zKepNmaS",
  "key24": "4CPXKCNiuhBHLV7dN7g7pkpd1bFnprtHi7UdPJrBcRWCshmkc1ve87W75EZxeeSNsA2BfNv1YdQqBfEaw1d9Q28Y",
  "key25": "sn6JjKdsxmatbSjycXMRSQSxgiVPwhX5ZLNHsdrt319teSbMGfscSY4WdzDX4a939AeU42wqyrD1GTQRRZhAYZE",
  "key26": "GYznxdJnCqSjsawzsDTM7UbPneuQyy5tMNKVCiL9AXMXMX8TzTefeVZX6RiqvJRTuSqcB5VsGU13BqdpfMFwgwB",
  "key27": "3k8LLES9M3Uk39nXoLYnFx5FioAManoF197aEUCuR9LZqoCCBgX2xhVGFaQ7wtJBPUoM4ZrTWUazeWwfraiHAsRe",
  "key28": "AzXyjsJiqBzoUeHjxu5pyQ5PduiG9Skj1JP7n8AtA4kvdRraQy6nSHcG2PpscJXtsVdxEbG1ZXipVKsVXCTWVmG"
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
