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
    "5s9QBeEHmSuCQ47aZommbPGSqyDxGnGyBewXQb2Mtp33Duvk3HY2BGDT2fFCacrF6QXGXec84YDqr8AsSMKLvMGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsnSKpk8Rq1TRHqHJK8chnkpRaAeeugNvZhsjQc54PmPG3ez6sVJkLqiWSGJ1HHEzbx92AqHqoguMpHMHVUWrKx",
  "key1": "3etPMtKhXd28L2KGuRPpnHNPKNB1iCd6eJVG6TREqAkWX7Y4aR2vPyoo6Ba3qmtLXLVgk22Ln7AyfB21yAVtFBK2",
  "key2": "2SDBfYezVe4vWXHDdJbf5CzvEH3EZwWXDPJ6AuVqM5ZX8HYwo6SaoXkERR5NAuwgZQ4fjUYbcqcHCDwYamERUwYu",
  "key3": "2M71SD7hyT9ZSmBNvok8fUojpEq5UfsK9uYBXZKnWUmm8kxcjPkA58fvt2KkPZRYYjmcJtXxFtTnjWjhKhC3C6Du",
  "key4": "47N8ku7nbYqvBA8qUHNk92Y9xSubKqC9NyJ1MRy2qWxnScYst7JJNtn6vQzWgziRPUhjm1o2SodvLwWRaHPrcMRV",
  "key5": "2cZ6YRx7MytLZqT4XbXZJtL1FitpozfJcAdmqXkWrfFbhoSh1hiNgUjpyRaE1u5a7yDVoYTVjC2cfWRth2zekc7F",
  "key6": "2fvkGT2StzRAdcC7iRbJsVddFe3kXqJBskEz9fBkbvN6wZDTHK76WETJUXLMadnLaShdZJP2PdzJ1bGFpEtDQYwv",
  "key7": "5aghz428PfrnsLHcxSubam9xFMxXiETvr8dECqgTrcrM89gtWbhyABv5P6TtdBU3BJYeVqzPM7WhpDhUDkFHHN8L",
  "key8": "9STE32cFPzCqGAcdiwpLv2rVhNqP33oAgYrnav5ZHwxkYU6gPmvYNpLY35rKQvFpGa7bVuQqz6W9uNpUYm78EHQ",
  "key9": "2zNyh9pgiPzQtCKboLfk6T6FUnXPKYS7MsmNSqBrcHUgenrzoKxSgCehKmtPuKGv7Td9SUQ6J7n4xQ2krRpHE87B",
  "key10": "4YawF56J8Nr9xsEcTmrh9QSDTtBeygTUtkAcFxSzYeUPgVxBrvDoRz5omShadQsbHJgTUvvec5iRBtcatpucjhCo",
  "key11": "9tmeSVo91PpFjcfJXYx2YBJ8JVCrjndApNNBDnTg7wQQ56ZnHgiDkEvNT3woVedwykXbtNKmsQAX1aqXDnvUng4",
  "key12": "4zJn8aHSxxNY5oMJyVkijTowQuWwxu8KfNXrD9Yc8dhPsvDtM3kQp5Lz8jCVgWj1giRt87sUVzR6DjTmHpzMcKW9",
  "key13": "49jVHWLYbRHxNeE6B7okdYAULiHo2DLnW4nBEWmhQbNYEZNATp9fyUJekLkthDtaAwc6B73bCrEjXyTbtdzrfmR5",
  "key14": "4YdCqHzRgas66EuFHusGmuGKrAvFX6ruVGqRhzwMruUBW474k2VodjXtGm9sow1qZDdz8HSt41qF9zoadyQTSK1x",
  "key15": "29E9zd3rjsa3UyDEG3zof3Jjy1dxESny8ZyPTo1rjzZnwxRJE2bmpcet1Yr9rQZ18Xi2tcCS1n5oPuWThFeTiPB7",
  "key16": "2iwTKiLpNZHoSWLbWEwLCpHMzJnLq3EtbJrq3w8jceUk7RXwUoY6JtY6zhGziYfevXXhviPxXRCreKfXJPv8N2bC",
  "key17": "sU1XK3SwRcwrC4Mm1ZbgcEgU67F6pMD1F7XG9NQX9kWHduL4RdESLmSDEdjqHs98A3Ki8TjpLwPWZgo5B5ifSMD",
  "key18": "3BxxBkYDRRq5HPtafU72JBFmPEb9vG2ziHkch9z96iPxWsaUdiZdHjEejbH7YVrksLdpyv83Nj6E92GYXAGq8H8y",
  "key19": "5RmubJY4QoekzWZddQ7gSY49D42Mz1YfKhcaFCvqdYhq34KbN3rNCspZsf1e6iSpLHWLJwjZD4rdzFPgQfznTE3f",
  "key20": "5NWBaGZe4Cxwp5NLKVoXBH8HDkNgwNbEvvcH1itZkzDNtojEUnstGGXSfGRfPAsZfFHrfJ1Bhp1BfB1AVMgaeprA",
  "key21": "3NKcqnThaqEW4KNiwqLTw6d35mqwjQAWAnP5ULQqAvBzXCYo5hR8yd79DEHRemHFy8C695ahBQ4RgS16BDx4aMTB",
  "key22": "oz4yjJEY3dJJMxgKsT9oT6LS71qmpfAQ36bTM37z3gWMaCKmCUhYxCnNGRnbRfMHxnAuy4oQFTdV2CuZrrUVDsU",
  "key23": "26iDSxnyJCVDUird2yEH3y1kCbp4LCJfdmQaRzA3YqpXW6vRrNKC2yCSToTqCj6hRuXDsg6McfCLaVxjg7eaEDYE",
  "key24": "27s4s4uchvNFeQ8EmZo5PNvEEFXiCstH5eYwjLaaRcgkHpgWi9MJSeVh9m5iH5wPHPM79ACbs4DkD16GEotugX7A",
  "key25": "Qd9J9de48DT774ySWymTmzV7W9GzaenGwhaqDp7MNWDHFNx5qb8uAvMqWfvx4i2SzDrbrCiSkc4uQvvzN2sxXoH",
  "key26": "ue28fMUqZtYNh5HoTHxJnoSqd7Nj28NXDe72QqKW8PDMsobXK7cVZA4x1AJXYz1w6vbQ5xUndK2ZCDr6vgApyfs",
  "key27": "5V8ioXJWY3bF7huTqjd8upryCKSuZBrrTSxd8YBuKPs3HnByQDaUdmjzXjvt8FS5Hgz5KN1mdv9Ljn5f4aB2dYAc",
  "key28": "2xLQZ8UJimWpAxUxHuCVvtBLFzKSJceKkZ2DvShZRVP9dqGB4eMDe3W2tkvf2nKVhPm1y45eepcPeabFR5h9w9HM",
  "key29": "4VEB1bFJp2Wr7MYawKtTvtHcc4K3MvHXmcp8wCgMPohUcjRUzb5JVUvBd9GV9GJcpNSwFkpzF4RPHRDMS2pxETeZ",
  "key30": "QNsGN116HpkUBZSvEiim8PpJmeKDAa5jZGB9dkjqhvD2k1QL2jsayaCgJoGJegovF2tpy8PBRK5nWR8Bf4BLyuZ",
  "key31": "3NQFULjci3gpLSAx8d6jJkpTWDMQRkfAmkWn4A6ubb1gkRMPowqfQaAkgssAFjReX8hN3DqP8UneFdtfABpnQEUU"
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
