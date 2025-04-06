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
    "5EBwEXgKbaVueGZoL6Pgr7CbrBwKuP1hrVuqBqT189WkbCR2DiVuwtbmQkTuvxPFN96yqskkQC3nS8y27UYCfenP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwc39M83Y173wSpxGUukY6JHWtjCSU8iuWKbBuq91Q4WpUCaasTdAqe2ugHPoPwjPeAUhkWqpyZKdvfGbuFLSxf",
  "key1": "67CsiuxPWtGjrbmGdYuJuyCPTYz1fY4bPMGbQBPhEpqA2SWDgs8VELS7Na7JKnw3J3KazhSx8pMYUiwUWi3a4VsA",
  "key2": "4QviMMv6kc4v8qjyoiVBvUfZAPKo91XVjEKS4zcmytkC8SRGCbxv699FxEmk9CuxNKTq4Wut7uXB73iPXXnqQoYX",
  "key3": "5g8YjzbUNEHSATKfcRrEuPM8uBzCcNZPhjP32dErumsy3b3kJn97SBoB6Ue2XNPnNzvSMVGpG7E3483cPrCPxkk2",
  "key4": "qXZzABXwvoNzAHw1GxBqr5UcbhC8SYUKy53ZB3g6tKKG1qyhkHRcJXNMnYfJ4HKs8UjTTFHnqKk5MgubQSSSfR7",
  "key5": "5zQHs1r17LbCMpq2UXgnDuzQcfhSXd4WLe4eEPbAjbbG2EDLxa7mNiZDXqJHD3m2mpVoLZD7t8NWJ4TD21itD8C5",
  "key6": "fH6xzsGVo1CKQGkhS8NonGaS2yUuGMJaiS6Decjbc6Ewsqq9S1wtyBgV4KgEYopP6S9C995BUn92inXSPAZB2W5",
  "key7": "4C4fgUWuLTMkMk3G4F5qVEvyif2BAV56qFqAsrdNoTPzMKvY94RDzB49UL4SLUNuEzgQnUuyfTnyMHFEFH6ndNMn",
  "key8": "26H1dxu7Hm9Bjs27VTUttUayDatDQ8uDFVk5QYdYQKQvKrXVgujLGLuecLEm7ZRhn5ZikMBQpawhe9aMWk5nuqzq",
  "key9": "3HJFanQqr9Bc2AQ16Yd2frjXdmFA87wvh7ct5omvbbntCYTS6Pfv97mpXzcRNiWpazXrmGsVHzD4xrhAjTeBrUuT",
  "key10": "UVxsye2myhvo1hubynzXuD4d521YzumBZiF2P8PHk9mx56CnS3EfwAA4pK4V37yvu6KoDg28nUL4fKaPcFaYDW8",
  "key11": "2bvCsvgt2mXTmtMoMX1EtYKSJTuDo2Bxfv1k9tPFgAjfhSPNvdk1QhsjpJvUUdDtVRXVH22iPYdrFwCvSbYWK4gs",
  "key12": "5XFn5TepcdNHhEsaPtabZtmo9oQMKvVttPTaUDXZEkrVRrVo5PJAUH95Yt1XJzUMSY6djyUhxCH3bC2oMzWE6h5B",
  "key13": "3JYx6yxZiT5WoG74CFzLm2PqFQy8jL2HmcNLHWNMiwpZ4tdbZFFt3rMHodwWNM1pmknfC4RSMF3sa3bWEZGnca5j",
  "key14": "3wHpgWbvPUs8p6yNDoBTA3Xf9Dp6DdaFZSWnYsD71HqDBd92AKBMyAmxFag2gWy9Q4itYXLcKJDN1jWKoo8rdhho",
  "key15": "4cbcEMndutnSRM48syWJwFfdSnkpkRpTPVwG6Gvqay6Aj7VDsYRf2AHUyGJC9DXKNpTHrRmZwnMJeJohzZfF5FMp",
  "key16": "62tTC5fFVwYK5KHRXvWRSbfnXk2RVyHaVjKQpEa5Ru2dPvZ3tJMhvMftpVTL7cfbAig6iRUAjrShSCivUPjagvoK",
  "key17": "26Je7WEgc7XioLYX1Q78P4ERtnd7fkPrbKe5rTmbuswopyBPhXqssgYjaNb1P9M5f8pEJ8mwvVZ4oHayYjzaoD23",
  "key18": "wTohcbF2tyHBNAKGxZXZCDsbruF99RmjCa61fjpruEBz6yKbbcC4S6wiDUfAcWQuREgoDppzz5gjWhFhbLjLgt7",
  "key19": "iexazGinmuRUz6Fjkb9Rc5haNG2FyoadgeqfeXwNB7VHsfzuxESTSswndKWQg5LPv4m4isyJHjXn986xCqdmqT6",
  "key20": "4S1QaA6zokdnqGokGsBF4wXHgqjWdVMj7sZkMet5vnDyJqJe1cGweMcpTzM7LxHaeTJdYyYDYPiCC6dPK79Sv5UX",
  "key21": "jHexh2cCTjMrHm5gn5MRa7Bky7s1b3XzhBStSN27D1rEGX87b4nRYLERG7fNH6pQuagAJaUMdCSGygD7choYG1d",
  "key22": "5RRwAYm8pb6qwtr8ZaSr2nmYLvEG6rHCkfWek39r3sueX4jXnjRhWXT1bKtjzFPCP7kPj9qmcDGZhgFeFoDLXvyh",
  "key23": "5k4ZeRJ9SyygECpKfizmscMjUEyHFLMpNjziix6xyhCqp1tNn7HrqaMVwrXxwSNmnCXM89mFgV6ppo1CpZgMWyof",
  "key24": "5FoLmVxzELEmW4KXz7JgQWFxfHZMLb4JnyYaXpinhD5JUgrST85Jmu8U3RrKZXuQmqocMx1oMN6P6zYy3iyhgmRa",
  "key25": "5YxAJi4bZwuDsisJXDui7yMtHyLM8qfhsfb5hxPEVtVzosQPb25fV8bT4eRSLgEfkCpxXTmA1A3Lvef39YWbBxMU",
  "key26": "5H5ZE8oaA2dXAWyfo29spBHwAEuekP2UJTZAZopnhiBV6r5kbkFdHDtHLDRoyaWHqbz2FoNXmNykfi79KioE5acn",
  "key27": "uRVeCCay1y56sUAffERTvs1ZxgnKZKBkdqS3RCQA2ztZBmLqCJZSFRFNN5kwW4QAhikYgAaDpqvf5ZkxZaGid4f",
  "key28": "4zX88SFPqzRe3XsJYjt1BeBBPr7C9TDq5Qv7mqMj4zfDa5MywYL34xKnFx7vSxseDoyNh1ZDxz23BGHciKK4jEgy",
  "key29": "573xmNj7tePzqgsJEGgNrhrtfehFhrwGrBWjRniCaveSf7AC1Rs7QRMcrKHEiNG5LiTHnYd62UYsJmB1f84JPBiy",
  "key30": "3WtC4ddWS5Pmw3FKTP3YJ9Rdu5zFFr8HaTj3qQWKnRn9esQTU8MogLwoqVasLU1AixL47KGf32AUCkXikT7eHgMj"
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
