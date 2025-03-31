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
    "2cA5FsCYQUbSH6AnRaxRh4tHiv2QgkoEY8NSXsFUwDvsVr7F6AP2hZCprimW1UXmpZ1WS2DYCzxa8L48DjXySFsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqppQ5yiYzJnDYEJDeaGS7AUXq2p6UV3nDLzz6FK7gUeLgLDopx8rH5MmbWBeYYpYaTcZmdhDwVu5XD66GbSjV6",
  "key1": "3PEHQa4VLPtdz1BFK8Mnmzas6jPDBcSsSPHCn1xDHHPGMiJUsj8Ern3T7csSHmn1CZix8oLTwkNcF2pnZ8nJ41yZ",
  "key2": "2pWfGqWaMYewgf5sWGg3ud6NJPnLpmYf46KCWXsQo1Xaueib9nTy2cwRsyJgrsxpyi7Kt3XcWnMExY5Vt1sRca2w",
  "key3": "UGPzDfzE68DiTauUxJtyPz5fHr5NdoHY7yrmwsvprNwDAtpUGGC6Xm7ooJTpt8BBYHsNoZXzStCH6CFehDaEyVT",
  "key4": "5gPUzaPFCjNNA662CsCGfFMgcF6gCgzvs7Payx2bd6qv4vf7mU3Qz5TGQgmbWkZ1BYqxr3uM6J3K4jDaiQHiCWNp",
  "key5": "33VuHHQWCSU77Nz2jp5MLNkBGKm5XXwsXCK3JQ9TKqjc1UTyUBz2EpTHKYokpWHa3hxEqM7ZLMaeHCCC4SUTXZmW",
  "key6": "idRUTfNLcP4VvqBiCqmkx4K1946Qdxb5iJuUSzhCR7ogdYSxRoU1Vp3gLWCMWdFRmNCvBxxZiESmT2BNPyeB7PW",
  "key7": "2zVy3QyHY4akTjZ4RybjuqwYEMEGFXWBZLbUizuN946qRRKfms6FzNU2p5fqoioxdFgTCdFZPSHxZNF7hM63KWAn",
  "key8": "myKk76awXrwL1Ht9giZ5jd8GMusVEMgQxj2U2ZAtT8oeThBF9ZCRqU9Ec1UuLh4dN4DFqNWCFe1bTm6rYbtXDFo",
  "key9": "rTCAbb4HJF4EFxYn6Sv3h77ALjiBvzryQ1GB5jzij8vpCXNt8MYXAXc2qWit3cxt7df9WwMFaHrxmXzUyJdhndn",
  "key10": "2Pr4feu44Eg6hSURc52nZCBbKPf39AJDqNVwH4QiCLTmAzVUAyqFBbRVBYtFxSz66RA7vBTix5qQudBsyUyHDcux",
  "key11": "2mgfgyRTiPdQ9aVfPhKrWKAMBSGLKTGPC1rQoL3rxWsaAH9FXfj3ZCAUJ9kWgQi55fVzF3hf2vL95xQvMGe1Y9qR",
  "key12": "4TtC2KrKyz4uEReZe71QGeahYCLmX9g4Gwu6aytNWy1UdHeuxbspooh2sMvpsS47MrE4NeTTpkkiFM5JW6ByRziH",
  "key13": "2uTyqcoogi5c8KzioHNCZqQMyH6hz1qRx54vnjH4xaanfNANG2zbax7bCREjrAWpjKy8fLn5crnEuqivookojyak",
  "key14": "3nTnTUSTgNauvD9HQNViLD6fecG7rqPDgDqH4M92nR5kKcXExn18PDFmjLpNLRHL4p4o9KXQjk922Q1qh1nbxj9k",
  "key15": "4Sn7sthVWoEWToP6YV6EwX532mbQJzrC1DRSHV6Q8BiZTQNyeqbbhdg4fNdrh3ts2HA6tZTcTHMPVhccoKj3MbFe",
  "key16": "5yfhxFXpiEGpyoUMMGc8MWj1EbyLmDZasKvd2WohBEpUAGyDJRVbL9bTNvYrE2iQTEGimLWaFNtzWSLdAw4AYi5f",
  "key17": "3GUeXYVSWyavvH2qSoJWfKe1cJnB2M5iumxMtJdJXpdbMqgbPRboS5REJLRQeLUmRZCnSABDtpBBBGuZQr4zfPNa",
  "key18": "4MEg9j9yEvispTXJhxadATqSUcMjApKFQZuSTZuFCakvsQj7Sw8y4qPiUPps6xpP7gWPNMnWXhKW7QxcKrqbVLfM",
  "key19": "3FspAt9hN1YG6NB5r2wW2K2nbkAakdJs5hKFLDKBMHJZ1q9joEuarkgdxhuTEbRHELXti1C9os5wE7UskSsNfuZb",
  "key20": "2BF2ucRaPw7CgcHAMps3SpaxyH61ZfzqsR421jCdcFcyTCZW93o6sfXg3gK2oQwpsGJ5o3Yf7sSVSec2ngGb1m1G",
  "key21": "49xjDSdyBzyhQMesfz3z16Khi1DrXiLkp7bHEovuV3BcNpES9bxodqcdoQQXM29AMLo3CbERF1ZJyGZ2ZhnKfmHm",
  "key22": "2FXncCJaAW46fadZmdJVYDmXBoVaX5LpgYYL5tonYUELNUMbEPSUtLXJojq1SVsVWrGx3H3TJZ7C6jPyaTxUhjfN",
  "key23": "4Mqc1Xd7VkLBCUdHehVcVHwhT2KW4i6xVbgMzGvZay3PPKQuauz28SPwaW2EBABjsooeeKaymcFHaiDCfD3a4hRW",
  "key24": "4HgdsCF3wBhNcCSHVs1sZhyFcv2QHVCGdDqM5swBSFzSXfPmSXEUKyMbMZuaYxco5xWN8tNMvmwLMBb8Jua3i9kM",
  "key25": "4q2nim9f6w28byxQPrPrZyLpgqGytabnuufaJ5tnj6ZoKbLPMcopUqgxp51ecveLvgSy4A79r3NvDad1uzQLaB4U",
  "key26": "bJc6Hq3BTevAEPJPfdcSfDBaYF3vKPLeQowSLyUVfwQVcgHbXBKXrYvBhB6qAbzFuPoXD9LqNaksZpcf3KhZDsS",
  "key27": "4mPq6gBp6QrRrxsw8U8XhSvpU31cfVgqKew7nSF8SBDSkpMW7ENQCshnSNYc5w7LT6UApwvTkPgD3yVptPyx3ScM",
  "key28": "GcTqFK1j7QEAJmmmK2zuCxg8uhhqM5mauJqHXWWp2NNFVGF9kCwCZxhe2kXjFkKWdEnQjP2xMa54UbumTAec7i2",
  "key29": "2f6RQChGCod96RzoWK2NWQ2vRAhhSk57ht7VwmF6pxbXZ1Z2VfyU4FGEvpt6eMiQcSWKbcW6qFMdmqeiW95LxAZU",
  "key30": "4A4uRmqogbaat6pCveNZtcY5GAX2kWFxjvYUYGmVxKUD1tN3K1kA3f6RcosiLnXAthapX6e5bwkVwnBpX4WAW3W"
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
