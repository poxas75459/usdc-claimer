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
    "27UY7MMSUMgriRz3ayDuz6V6hcbFewCor6hVELaJcoe9Rr9KwLFrHmTgdrefGd24UpAkiEkqCqfqHYw11De3xYYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kRdD7PR8e77ux7pHzBfDDef6WdEMQF1X1z7BCaNdCqxbZtGoLcR38638DssTM1eboDSYp26T6NBzKZiV4GCktTR",
  "key1": "4RrqtYJ6jKhJWC9VS7e4V2SGEAMRUZ6FZWMu2GrT8BkBQXegxgUPxAzQeafviZpPpFyLzEKSYw6FVuXkgMe27obB",
  "key2": "2fJ86NYAuuFRNSvm3H352nDj3Kw9ebsitXrw1BJCpbn9gcBJfaMi6Ywss6honsvobCS1Viz3xj3vBQVgLJg3NHhs",
  "key3": "4AknpD9671xLueP11B9EXAdNsD6gPBkijDxDo8xXhmZfZkj5c1AshQAKDqcD3jfBqsxX7w23RwUYVoL8fh7dsk5c",
  "key4": "2wY3NYuo61perCEdWp34BYBhDL8LjryR5NBXzUXzkLYzaf1AzUVE512vspiX3md8BzGDJh9HTyyo2NBfbUftgTsc",
  "key5": "5uwnZJhmzJkiQ9VVc4ZmyKKv5sSk6VerSXkz4EaFquPxw8Gdx4Sea9A9ou9RKgQ72xtbq4A5cZg9vYLZUJPvqMYi",
  "key6": "3dLXVERLZUAsLooGfv8cBCbQQ8AJU87W114sGbBXJNDwadeJ61MuuWujDboBEc8EBb973eS5gjmtGrU2C214rQkn",
  "key7": "3isLTvRj1dkRSydjfgT9yEiwHDE8rFTBK68JyrbEa92TD2T1sDzpXsFM1gJer3nrBSt4DgYpLW54KsCQAjfC2Cjh",
  "key8": "24LBtm3KR1UsukwF5gLPFFqtWreZdZ9YocxPF7BikYvu95tDu81Jgyb4yqCCKHSJLBfkkhKr6Wgz4qjZGZNRRwUn",
  "key9": "FKhPmyULaK2L48nRuCMfFNAwfSSkyG2UAErfVz5JgHVGtLufdNazKVvBgeTSzkcR441gBGhc86eCZ6W3SnPs86p",
  "key10": "3BvHpXAFfQesK181ZWdZZU3NQKX44qDDeP9ezphUwM7H3cUMcbyhs3UoFKYfArwyMqjHvakpM8LzSYFuCTdz6hnX",
  "key11": "3UapqXB1YsMEEDU3f4qXvNhfCHAqcoVFmQzWR3rz5fEEGAcQzYNGvrYbD9uuM8V8q4md3nz7JGqVYmwfLnYnKSSx",
  "key12": "Hv6mKtES9RyRHmSos2hA8VtKyJDkmB644LSVJd2vzsriqwUKFdEgfpofV7EPBzkLE6ZfjSNjSp2Gwobyx7XX8Vp",
  "key13": "XHfVBrLnvF2tyZD281n44fdWyJ5XQJHG8gRnv4bv3LoCQQWr6iXbbt5T5hCwNQLPnQzL6PHzJAYDDNCCbqVbsdo",
  "key14": "4xLo4BEwrRkeqQcLzKYkmxz9R99AHA1CjNfEN8WwtFrSZ5B8Zp3QNRLNeJV12AiUqoLZ8hGNwgm3mccbLBceFq6E",
  "key15": "45GWM3Z3kQ1XWKNU9XPHdbtEjLGhvT2v9fo3szfvP6XFacfe2nzNuv9VQPaESNk7pxjNpgmh1H6UMXm3yer9Q1Aj",
  "key16": "4Fe77BNhDaLGcC5zY7WSkcDQBeNWvrtWitZFHKpxsqP4tAqeipedxvvBQCrmUjwM1Fvn4gUmtqefwa2PLEttqbXQ",
  "key17": "4v4eyKD8gVAMPLzGTRuLDaWjf6GsDGec53oUoddB41JULn4Lm4GGWihvoXFzLXwfrzor4WMyy29vJ6MvTBUTbUoH",
  "key18": "2csiqGiGyUcwJuekAaYQLwbc6tKHV9BsFEqWzvjGmwZiwxzijNix7iU6qzQ2QAq7db3vB1AjhyaZgLu9ZSPdD2eK",
  "key19": "2ehhQ4JKpquuKdEyFT2ywYKHJtRxGFZAJnRLgBdwkqL6Q4nYYkaP5kMTynRSM7GdYP9Rme6n7mJCnMjmuBHmHxut",
  "key20": "3DJSHGv27eRLU36yzmfnLyB4piE9HCrwRURV6qG1L3mJ222jtQV9okjzrmMZpb5JATBFfwtneW6yymggxPMpMHzF",
  "key21": "31oJJbfDPnjQZqh5UfSiMn4E9WiYhAu5qipddv2gY6V79Y5qtbeYJn2QmwKQyFnfqHdptEBJ6b771uFNX39CfQjj",
  "key22": "5NXXJdhLtk6TXsCbVCNucsYT6yN7outbLqyYGjMMLhHGKKFnoS1UD3DNRx1DCUXF69r2xXtq4FxvG4qBN34hej1v",
  "key23": "rDXHSUQzG9Eo6xNrrhkSVu2TjYVkS1JyQNUxWs8ZHcMHNUyZbcBMMEQ5CQCrhKWUgvKqWPAvfnmPcvDPXPPHDkG",
  "key24": "Fzfk1rG2Jswy7ZSeBs8dRsJvFG1wL4z2oELE6j9KNUKDU1tq4xUNoyUEC5EybAK7wkHZkQThrjHVtS2o2NuQHuN",
  "key25": "4ci5tnByVkW42RDdAw11fws37FBK98whYB5ZpvoyRGaH9KAHY2fptuWEVPF4CWvVPFwWEVzTxZ6Fbc6ow8EU92mH",
  "key26": "4W38TYNDXbZiWsXCNGiFMSefcNLqpfE6gT8BgGJHsFggoB1KET8TqU5YUftodyKfFLYKZqGk6iqZvC9noyE1T5hP",
  "key27": "3aen6PE51GpTbuFHAY7Nj2pXLWywgjgmFBb9YUsPFjZ4EgzSeUKTPEVwXmjw1HHcLoxfZa1fsykuiHPBVWz5QD3S",
  "key28": "431ZScgCTjNApQLRiXJzi9ZmrsfsmuHPUKZyGkXA9YCmQ8qtMSZPWegmjL3CbneVQ7qUbUZ6iqCYQPrmGq3b5Mae",
  "key29": "GPPXoUCqVSKny4c1BNMy38P8LxwqSRD5C1TAG5M2bqS11L4z9iiXKcHJVjZd4XEcorgEMDHtG6fDteADpr5NFCZ",
  "key30": "4yrbWmewAY6Mh7Q46DbHThaLdxdj8WY4PpJAg2BHnUiZUUvfi7H7nKe5fna8Ri8jwxCtSmhuRQAd7sS2ZZAX61bN",
  "key31": "3DvMENWLsM5UcaY5R699JCJmjWSNDPHFqpzPVeYTU4tQsXbpfsrvCPtfGFym28Vn4wuC9frEgcAB4m6kBWWG915B",
  "key32": "61q1m6oGkPX3CnqNLh9CTX5eptxTp7oYBbrNNkkkNdoTi7w5rHxwheh7KYaV1d1aYMVGqJbUD3G8kzkgzHMrvmhu",
  "key33": "3CowHLUXEJXWtYdK4fnWkaCbgAJEQbY143KPQmMzcgQotipQXa82UJ7ytgqvyoXEEifDsyVJqy3WnwfNx8SXQDDc",
  "key34": "3pAvyPqKkPmEUhS5t1t7z5ojxL3ahKobdGr7X432tdqd73qQNVDhqbt6ypTziAdSpEQzzmAgvPH1v8xDzWgXjKdN",
  "key35": "39oZeESNrWU6idyD8uFDRXxNrKT7mhpchZXsFVkjGr9AFMJM4cfUoKjuUUwmBfPg4qneeidSSQAw6KhKPihTPctv",
  "key36": "48wBY4PxteQiDWYfEFZ2CmgY53TdimJYHVV4rZkAQ3Bp4bsngSinzuAcyhFPSaTmNm17qNfSJNg34fbbtwLjnCz1",
  "key37": "Bc95DaAfE29QcdbwnwMsNaJWFxtvvbjBLStmPrrqnnWaCvJgFaYitg27SFwUuK63ybQ6KWTkPasLz2pCAvr7amy",
  "key38": "jzMccuirdchJYzZ1rr68eZaw13iafsFsDm7ZdDZyni2u5cJ8TG3h8YFhrEM74MDT9vC3nT1NdJF3BTGhNeCTprG",
  "key39": "3FN5fQVwwfkBRj1tTKpogcZSer13YaGX6dM6hd3tYqbE2wgq6eLUsiJgsjpmmPLvToM5MzDskWc3haPZhge8bHLc"
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
