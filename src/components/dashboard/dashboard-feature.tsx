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
    "3iukXJWmFo6ECs4erwCsqg5ExZ28UibsfJxggWANxWTFHG9ftkmNCKS7gmTM5SEpRdLpMBsWXZ8agHUbb9rtXLmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqJHm1oCuBjXpGPuR85pkoKm9tpMpLym6gByUE3ohYNS3Yn4Yd1iwa62HoFrvRBpR5vhDVHKBJ2GR8tY9p3qgm2",
  "key1": "5prx5yYBJ9MhnEFe8WWVogJqAZcfoZmNicdC1uTNv5e2JJbizHcPAwJdaywz6hDNMRqj6eD6wr3SRKb3MMC8W5Nc",
  "key2": "BcSjF129Hx6y88WediGEuZQemSAEsfAntWAt46xDjSpTWqjSshJYCtyETXTNjD8KiVA9gktG46T1obWzvT46nDn",
  "key3": "5ci6oReUau7dFWsbiR26Z8sXEerJLcTTa61M87m75yaZMdRePiVgujiNjnqCgLtHEwQZr59Fg6jHfBgDN4zeTcVq",
  "key4": "42cBQLgCCbhmJz2RCrPAh4e4RNLLaU3cLq16ETC27zc11ZZVEEjTbwCroKMeYpEuzJNuBU6zZMgu96FcEoN2NvE",
  "key5": "3VN26KGcWrr9J359FqepMPtvU7HgLxUin6URXG1EKFszwsvVfuSfhe5H4Dft9Yn9nm8UTmjRFwQwEXWNj1k4mLCr",
  "key6": "T43nJfWDQ9TXodV88Awh7nKTqeAf8RGbmeCwgTru2RJKXD31kJigYL3UVHebUcXFiTpR8dv2QDwwCa32dxu2Fyn",
  "key7": "EGypkuzbLtPY7A3tWifEfyX9pN8yBrHHrHeefom44bLpnjsRtAH7hjgizvuGVffD1JhTJLwmXb97WPjC8ssBRgL",
  "key8": "3kwKsvPQg54bCjqjzS2JzioDTsVZEiywzupCVvfCNWRYAh4CLV57xKqpJfE86PtQm5psSBCF3zAkckN13kgEcMSs",
  "key9": "2GcwwLBYbmtbmWbZs6izuW7thdYeRhG5e6zXku7UBKe2bbwX7ePELqUDMGV2xuX4K9AkhgidqzCvHiLWSKqWxHaB",
  "key10": "Rvpqkp9u6KANhpaCdfAAnS8ZbFuVPmUTa6WZjZ27jqhd4zEnUTyGrK46vvDfavjnsW61QxNAESfY1axkYeuV3Dm",
  "key11": "DLX1DWgpxZDFYtCkd3agKmwnQKQfLvZzDsHt74PXMiJwKMuoH2Vdm2ZPsei1DxoNwWvNw6kXS9wgSeK8FAKYRJV",
  "key12": "54yTVd6rJZ2EzVwxeep9CS6284G4EN5vcEVdgyWZQYJfLYBubc4fLAGkEJ4YcRumKsNggp1PLtKKn3wjU5UJRg9P",
  "key13": "4zyjauKdMBrbS1B2sXdJwXo7XAJ9qfhpVwr6qmzoZiU4pEAHdy9Ab82Dqg1qCsB6WnxX6W6Zuae4GYNYLbUCH2oM",
  "key14": "RkP2J5Bn96GyMfjhiSSKhRYnre6FPPeUbgWnAqQqtLzK3EmXsRhZ2qckyPT2dRto7u18Eg1HsAKD2TX2mt5Jiyj",
  "key15": "2J9ezR3nVx5Szq1JhMDg9Anr4dXduZCEFSJtYdcEw8HPtzKKeS8GuKYWfjFr7JYKwrvrndeD7BfeSsEiCKQECRVK",
  "key16": "32ERpJN1u5e4UD9Gb1osac1pCBftnzkgNrp5QUA71vCJTeTz2BjebDomMoLkbFbNtnx5RxK8GZBwKc23y8W6SRNm",
  "key17": "3gZQL3yCQnEeVfpKWWBQbm7reTAH9j7yxxGegFuKMrPPzKCmEWKc4dthtsQ3aF321CVLi2DKoAidCrm8crHBMhit",
  "key18": "4StE67o4QbviJzEsLNjtp4LxsTb59NWjGaQU8CUQdhrpaU7S9MS7E1mS5gSmi6UDygtAdxPTmj5EvChJJu2BuJut",
  "key19": "2HE32pRtW4dUBGxvhRai9ACms7bdohKJC84KEV4vKWYzY719NJrAs1e2c9SyCuwqXQ9YgEMitZgncZbJ5jP8DjU7",
  "key20": "3q2ftqhyYscMcoq1prF1FHYnK7g1jhiR7XSAjfHd6x6Gk4TzYn6UE9d4cSgw4ADkF73k2k21NPZkA6PdHeoJZC8s",
  "key21": "3r3HxDMtfjhBQH7VkqevwAAi6km25iLxTjGGcs3oc6VB7959kuF57z1ZFuzaBf5DxyTXxcPDNN1Ekc4FoyJ45UuQ",
  "key22": "5Ae3bjQmsmp8zcWCK679gMpzxWoM9A3SvHGe7rNM4TuM63Td2dWm1W2fSLCHv2FZ2gxDda2hdpazaREnSTGJAsU8",
  "key23": "5BoZkgCRLbpXEG8LzpFEM2f7GCupzLbejy6761z9GYALCELEpXdduddFPLT8NqkqwYxv7vmwu76hNBZzZ8YDPkpR",
  "key24": "3CcZ3En5aYQ85FiJWimRHbX8ECxvTybghvYbys2CaVVTUcRSTbjBd6bwcf2rSV2FLHaJZuooMekDeeiZ9NA2vPZj",
  "key25": "4Csbqmd8nrVC7JYf9HELyPaSW3nouwNBmy1Tn3xgmAFeMbJvrFcW4Xm2NzX6e1DmNL9r4rakTkdRwejtjumpoGaF",
  "key26": "5Mk3xsZLcZ4TeBNs5Y3ha5FqytuwmnN1Fn9f8vmoxJW4BRzxdPSbPTrg16EurcfgR4NG7aUR6Ta3ygdYyAZDbV1q",
  "key27": "3wnDzEo5H8oos58SG1TbzmNkT2W7Wh46gyUjotg3c14Lw3Qt6Z2hzSuQze4HefzBVisMpKmbUJ9hqQgXz3V5N5uy",
  "key28": "2UBZZPpGJnXt22KwUUtanQfJFdbA1ht1dN5pALkeJdYALnGLTVuatZqHoy427QqXBhhcMoUEBG3bivQNFGnFHjVQ",
  "key29": "4g6Bv3b79khhbwSxfim69KXEigr8VmprA8NyLAT4kJkcsr5vP2uDt4wHddt4kzF3TUKGkGLaTZHtwHRq8V4vaDid",
  "key30": "4dtq592nMGajwXsAdUGSqQ9oPpgwzpHPK7qWMbcZCAo9ahvLHBwhoSoeDQTUyHa2ptz2mH2mx6uGxWCNrJKuBQwe",
  "key31": "3SzbkM7CL7T7qRC8Th9TxhM6knELB1ynM32H6zFZWvX9MFD2znMLaxujEqKvePgkzANUPWKsHFD3VUr8kCkt93Fz"
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
