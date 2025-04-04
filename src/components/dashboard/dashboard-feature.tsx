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
    "4Knfo1z9PvLnJFDt2b8ZLBAbGwhHQSHHTEpn8sg6xZgYbSFhPgBzSKewjYMoEE8oaEpiXmVHkof1y96jqPQVwmoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFeC5YbaDmUGhdjs7KjjDnavZAsuTCV4ARwyH6sHSbUvhBjvt4HcYpvQi5PcdvN2ya1zgnAAfSy8VUGnhCs7RT1",
  "key1": "2JeEnHwGzUnvWLcKPYjjNdxpfS4FvdaggTMU1ryGXYE97PFJoLuRER3UGi1BV4pbV6H9f3uLvhJsnFN9jbZJBYxb",
  "key2": "5PY9EWYQ4KBdqkVDwP9vp4ix42ciZ1yBFUSYADtTXkR9otGnqxJhXURTX36NbwCpm6DjYM2NaW5FADdac74EHJNZ",
  "key3": "fq1q72pQLRXY7V1cBdhB5JXxYn7PXfZ94Ttr6xewhyN4r9bt8xPmtsZD98JBQva2PddNdoiZFPRgMug4c2uJqQX",
  "key4": "3b61XbFEdxNRj4XSxncv953x8wpjw2PYFL1DnYM7sQ9r6va4irifmAxQFMg7ski3ZAAgoHFJCwFyBs2HkVS6kvLb",
  "key5": "65NdXEvB6hofLtGofq3RCKNx9b2NDvaNHiiCod5NTfwA74pgFVWi2kzWLhaUfRPgdwRF3cTtExULUWStLV9DsiaC",
  "key6": "4vdmyLrbE4V7pv1BKP14K3bxmYKvDXJ9TgMHwtQ1KxoSoQFabJYgxk4ZoivGVeF34BJJdjS9bPXyMY66xn9mjEvP",
  "key7": "3yMM7EwcynoPUnjYrRxCJGuFWJtC4DPPFXaKZyWwyRS83WHz5BUGfXrVzivzQNB1QGZd31Be4xkowgrJMxx29YFk",
  "key8": "51GXZCwFS2RrDXzXLaWXTwJzhavP76fbGyVGXkcqEqSREw4jZ6U4bjv1d9Yr3s1Apau8DdAqywREQ9TJkAxHnZTn",
  "key9": "4TRhryN1s6Nq9eq8Q2Nyv1HLcXU8HV65Ger4rxyCtp9FZpZiujnrSNXKZXrjYKSirVmYkxv4CpdPo2w8PaYYMync",
  "key10": "5YHTyavAdgCo7hvyU7CZe62GFyoypN9xATGaK8WyGCr8B4953cGzsCrQ3XyLF7TRLNrr7naP8B3L3AyTVuBpvPoh",
  "key11": "4zGTRtSso7RD33gpCX2cV9Y887swDtpsSypvqdywVQtfs1TMY9g4uSgXNrqeBfkt34TPesyhmRa1foXxPpEkMVmA",
  "key12": "7knm1ki7isB9Ta8ma1K7dxAPns6Rgi7Br3VvxCwLBEUdPaBno3Ks3GcBqYogfBcx4fQeF6mL45LcpkcEYdjkVNy",
  "key13": "3NwStfW6gH57bpy5oj5GdYn1UxVEXZGrGFkhueq7J729Znfa8zGfHP3pc3hH7Rvzrvwjbu5dcaxHLS7JQQoUKLX2",
  "key14": "4jXCaPQ2zezm7CyfUbBF6sdoWLq81PE5h2CtCmB5Np4pU84dKX6MVkvnLTXztFNsyjTxxeHYTXcvN3xKMksSTNTE",
  "key15": "2a7oTc5GCLawU8VQU1cP2iViyfK8sQqwLVQ8Q87o1pxFQyQJGDdFZDGT4cFS5CTBR4bPg4fMM1nimLpyxGkU9NbX",
  "key16": "5opKovHtb7e3bV4ck31sJUcBg8ReCgybK28poi2U5kSjcpJaojnoSGjKBMRc3o6qk5kXPcH96zc8Twac3pa617Ji",
  "key17": "5MyDTTqrskft1wTn9FP1Ac12Q3hqCF6qFhNgEPQJGLsTJUgX7dmhRziRaEwoEaS4ER2h9GvLFQQLj1K5xBVBDwKv",
  "key18": "4XL1Mnc9EkKdUJN12nhqeMhEjaT2UV263TP4z8uNqpHyBRkyo1aueSJbAr3sxq7prjamqVv6DmwXoCzqUpGeCg3H",
  "key19": "gZyL9HteZLrg2k7MiNY532KCHC2Z16dLeETz4KCHgVZuBQbQQkYCVir5pxwubzi2FRTDasbuUxNRCERikKRNzfH",
  "key20": "2JYj2GCaPoivMKLXdSiPDwuKFKiTQRj8PS87ZzKx2qqwFgXtccihN2SUEYMYJ9SYxpKyXCtxSno5RsP97SvCRn74",
  "key21": "5GWyBHXoxUzwah5Y1noXJAQhEKe2dB3dHoT4US4mGVTiHiB1zgEjg7qAFZqjnoNqKUkugFXMHhvmu2NfpJMtx9pL",
  "key22": "4c6WvVFGbdCjPuDMWzHpfKQawooDZvLZLAvd9j7hKrYNaNWqsJ8BvX2mKqu4vSrjGmg45hk51QkVsTTbUtFk5ND9",
  "key23": "55hws3BohHWQKYB2JWc6VCL7jDTPoXfRyQkBytxXKtQSACv2fNvNMTRYyFHMn6axarGwr4VWP7dtL2SG1Q8qfk42",
  "key24": "5hyrWMnY78va5ZaJhDCaYwnun2V49et6TbGLLfrALNeqQKqqdwRFhEJk8nZLMftk6ChNNJB3eDMtLLCKPTCaKFQj",
  "key25": "46VcK9SUmBijSVQrVAuqmX7sVfkWzPqNruZPnZCqgg4i3j8Ch8RZHzqLVfpHbZaBU5i516CUWQ9M5WHtnJzA6HqR"
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
