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
    "2e2WaWuwWPRZ1fUFJHFmbbUHVdm1CZ4o72mYYn5CUAVvgwZkPMLAZvd9Vs8qXCa44M8bxCoucTja2XAkTctRKTrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amnxo2EQGMCpDvkEDitZQ44o1kmNP33nUfiS8ErhprEXANGihE2WZ5eVUA2FGkkjatsvJ9Zh6triBx7zbdDuiNK",
  "key1": "cYsUFUhujKQiqJ88fxJ9nBS9XCkLC8i6K2PUfK1g2zoPG49byUTyaJqUK2xAs6hJpXHubxJgELcj69tj7A4v2bR",
  "key2": "QzZEepf2SgNfu9hXX5zfM8sL5RHY5AhALLd7uuTig7vzmHmcyAYb9Q3ZWedUX3gQPDmzqmHn4PBXHcmEP4aR7yp",
  "key3": "2S6ajQLzLKYvbwp5YdsfNk7jezpqePxMWZ28fHQeR6USR2TRN3MGyCUwDk3fxGsQUKAHseywnnfSRk5hXhBeeE9N",
  "key4": "3PWjH95iMybV2nvCrQ4kM2WNb1j5USupGr8iz6UAF2mDWes6mbyLAdU4RmxZAmb4eLLoPefyBnr5Ui3zmsGzas6x",
  "key5": "5NjiRb2CWRGLb4noDTGF6W1k7jYg3ptXwriSsLD2zArbwby9MMmEwQXpQqCGWs4zGDQBAvbErFMGVZp8QzpAo7JM",
  "key6": "64Rrv9PE4G4hwaT5c3bd2e4wd3bBqYS4xR8veYCD5byvcEmtM7iJLgnTxZAGua8pj4MRgmfZwemfZY5RHHSCSPnN",
  "key7": "2i8dHpc7R2dTDWu7UbXkamLRpsfL7kbQc3sCXywj4XCjeW6obGwXeCendJnKqaYhhQZADFUkT7wYhKh2dwGC7naB",
  "key8": "4LJpNAeVMMH8stB98VKZEvrAcuCXUz8Hdf2m65bLaMyAAxKyXwUx2CLTs2KzHJjZWwmsCZ1FzDjoWYKKcAecedBf",
  "key9": "2dVDv8TBFzRRab45C6G4EcrnCNsy5xLKodyp17YdmrvKRzM5iRr5pu3KGtqp6tZw7dKeNvmc4DAHSsh7jk1eJq2H",
  "key10": "64qtF4QMQYeN56hG9PhAyY1h93PgwPBo7s7a4GukVPNQD3KfSCmHfV18n81rvSRgXLiArQvaWRpEUhP1Xkm5Q8M3",
  "key11": "4bPjaWrSt2WeNceDwiky9zqNWRNRuzR3e6qNs41tVkGZ164ULUNrdYD23WMg3b93k5j2EuGbL9W6uzgPtJLQnJh2",
  "key12": "i4MNinMfxGZdXboANaZ7prNEKrxdHAArXKrv627GvVo12DDYgMV5FuThJPFZA719zWaAd6Jn8DALY1J3xodzA6T",
  "key13": "4c346Bu5kbTnibMvbDxw2hTJ8NG98c2A2rHA9SvKpoTBQZwYYKUPTpLffiQHzEnVDY1yU8NVExgD7RGrZBHoz5UZ",
  "key14": "27c3dWTCZCVjpLpK89We4VakHDMvHDYWDA1fTVsJYpMwhKqg5kjchczgHVztVbnVWun6YVBJYEwovZSeDZXdCwVV",
  "key15": "39F3X8SQzDr69Hqox4VAdDtSSCcY9j4DzoP8mYurkLCRmKkzG6PKUsUFcTdzUxt2wZqwGGpSVdjK62KvRZW1VMk7",
  "key16": "312FL19x9fKBD4iCMu8Wi92VWUzZiA6jqYjU8UGhfbJZ3jFbK34eCLzt1yG77mBosR4PnZ7sHJ3GGwzCY8ac1Jj",
  "key17": "3P6vz2o1BHhjs1Gedt6LXJy2mYZmqeryTFzewApLoWQhSdeiHJassqe2A2ESRUhWRniYnbm3sHpKJ84QM4hdn12c",
  "key18": "5uHacMy7hwuWJAUfpK1sxh2TGabaGTJ6c3ZhniuVQmSN4XSGFHmS1p2LUBmP78KmGYkVrBXRt6KRDpQEGsjwu7Na",
  "key19": "4KVb7HnJmqWGPLH1Wj7ibRv4QkBcuEvYryQfuwZWe1JN2GGZM6DJzoaipkkXhjv5BACXkyGmxHtd5B4CaCsHWfCM",
  "key20": "Jy8TvPhX3AAkEZ6GkQvWBYX4onApYFxFMSsSGNSNzzoz2B8Xf5yTcsYkXAVWfJX1b8qo8Cha9afDk7b6DRiUVaA",
  "key21": "3aReY88XgV87eAsoe9BHtefGwEcNiepGGQxLeTQtEHHofpiaNit52sjpZ7MpAqAABLRm65x33nhbuNYoE3tQzEUX",
  "key22": "j9x4YBnS9y619fCvF9rtfE4Y1f8nweWZWxzDMDEWk6XJm61aso9cqZopv2RLXm7LmzGhtUzAdYDSPNkXptAJ6Np",
  "key23": "493nSJBgLsbPdNDFRBdgH7D2wAdfYs5LFPYAWZmhHMBBuVSciNh4ocGDVYRMUV6uCYVMnxx6rgToF8NJoDtiChQE",
  "key24": "cTZAd38HH3r9DF5X6eRcVMNu3exbTdtR1qEws8CVURzqHKwiKJ1x9fAzS91hUeRiXpAnRvA5SQ3kgExuQ7gnp8C",
  "key25": "3ksyXk8b7K7mmy1TDbQYHshtSXYqyzayRPLRdhJ64GqxiSWkQGn5fjfux3efDhKaZ3hMN9G6fsgqeVPD9aLujWjB",
  "key26": "5FHvWfJgBjZV9Xdvw8rHwLURKHaJcpaYYp1PEYkwTzjMKSUhyrCgh4ad5yjSDVdu4BwGHQN5FUptE5dtpL57tDgi",
  "key27": "414NBRsPxqhnGrWHuD96sBufwj6QmMALz9f3huEkWYoVRSiVcqN7fq1e1DHiee4ntBQ7XJgttaPyeSuBAzPn89Yc",
  "key28": "4uKwzWB28gvS5RBMqcTvYSLHPs8V4wTHkW5bVdami9ai79Jj9aPM9Y7Kmh9RSpKZWZkSSnoDZRpKcTR6SqZ349bn",
  "key29": "2nmJWPztiysfcFfTvg6qnxkB9dVEnRvGkoVkeFVjMTfPZvVyaCMtCkGo2wmegKT37PpD92CG4mQMqD4kDED5xojf",
  "key30": "2QkD8CXyMhvLAxdXFLMMwGcKNc3BiBBUgsKFqGM5VvP2g6ahfcUuQRg5zkjvK6XxjGteHvwfonBPwWSxjKBUMiKT",
  "key31": "3ev1wBiGgWYm4LbzNGdXvsKQ9Gqxo1JDv8ek3PviwrwsUqu88EYi65LfJWSjSwaHo3FoAv73PQzVg1cXyDCnAGGF",
  "key32": "4LMY1LJwPGPsUxACghZR9zWSQpmeBsS2iP8dD4CAUUBBgiEMuw7Ro2WVY5KyETKTGvQXYShTsCgibgDZ5LxWLSUu"
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
