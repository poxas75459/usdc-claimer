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
    "2LarRfZpksTT3eaJQxpbw5o6teQSLVaD1dP9ysKRjK1gnKyNsQuvMz4gUEU7P6216t14TQKEBabT8XcwSLaYVMPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpw822BL3LZXub1ZDMkMK4pS2GPaV4eCjuuVfDKVJx4w4JWrabpKdbEzB2sUiW4FNQFgrdmWSVBi5gYYDZPtvGq",
  "key1": "2ev5jSF45Ym7Qw72YjQhtBPG6YWy18heBZdAWHYummBxtZjgvTn2mteFHUToKthMU6zzNogWdzwAzn7MDP74wmRb",
  "key2": "5bgB948Sq3LFXMsD73bVrnY5e5Syh7Nk4X9KnHESWdvRbE2f6mYLzUvSUhb9jBoURJKT4n7qjyZBQGmoeH1mtT1j",
  "key3": "4Gmad8dfDBAS7rvNHmM6VW7KVVFFH7EbDpqgy1nb8ZScFGSXvR8o6GUY5JkDcSEsw1tcDSytaazHPiNabpzK16Ed",
  "key4": "3CJN2PKSw1PsZ47EapL9iwsJXjWmcxZwQgtKMknGDJWDb6EyWDGtqfPLJo9LZ7CYMciGdEHrovp9TQsoSMqkgeyr",
  "key5": "2j8L4GipiS9Dxcw6Biwp9t3srqKkqYBDdKTMDh3C7BLqXhzZfpGocU8RnZbDuTCG1dsz9aKnnRdbuko9chJh37jy",
  "key6": "8v6NV86Ek55MJ9kSHxupLBAfFh5YR4FeqiRiJzFNMS9LtH2wQ2PD12uhMtdDNxzWD3NDSGd2rCd4fL6P94Q5LSn",
  "key7": "5ebAHZ9qhT8GqpfbsvFPQzcsQ3pxBWqdGX7arfnFLJ3um2oiKoFZNdhPC5UumsH6nbCQQM96o7ehvHGV9kArtcVA",
  "key8": "5sLF4BcZgXqRNhg8GAvSVWKB242ZqiTATUZTbmuxrrByzKQsvPREKKcccgCRTVXVFFM9Dm4NXNDFtvm1EJfSJ53s",
  "key9": "eyHs9PP2Y8vVCZLu8vP6a9V988aU2683ruqMXCXgZPTa43gy7VXBqzpU6uexpgVxFeshPNpkViVwWiaPTJMZybt",
  "key10": "2vNFZN7CEENCfEhshvnsShxFCUgABAjYbXsTFydS4t3hTMV9mxE3gormECvfwcYUeF9wGfLEppnDv6oQH4esszzd",
  "key11": "5FnZPPrihej5uyLWi87kyRNQZ2TBdUPvnWWh9CrY6r3VCm6CvrmtUqSsaW2dyBVBq3MHGc5UeoFsUoWobZKAefZN",
  "key12": "5uXQZ6R3AekXfhoqmso66XfCqKnaQrvW9v2VQuk7Y97Ltuv2qoa6mN4zkvENyL9mnPeahN32nUFN12A3VkaW4ahS",
  "key13": "5wro3xDgajbfjPaMgtoQKP3SvHnqPEcMRTEi5anApo8E8VhbTi6bnBFfvtg62BSvaK23tHDmdxo948WFfeDi5dcW",
  "key14": "2Ns25RsMJ3pbgEXRgQAvZcGCxh7mgv9fMrzytjkntmovDbGtkoxgETLiexh5nUWgz4BjpanPW5FMEKTyZeFD5jWf",
  "key15": "3kLnSKM2srrg6aQDVXVZRRq7GQ3xpkSjbo9XktJL2P38p6EoSSYgPVEpcnZKsdbyKeN1F2BMME7yLdbWoVXaLeHP",
  "key16": "4bot5eRbYqPamUKi4Dtc33nvtygXqYHjGfpGAtyc3Lq3wczG4ukpXB8awSnCHYMfBuLJgdKCMkA9kVjBGVorToBC",
  "key17": "4ZDsJyhPBS3mYyk2swKXYa68YUwpoEfo8kTN5KQ85gHYQNFGGmWkzhEnRsRioSudDGLbgM62qAd1UPBxH9Mfr8g4",
  "key18": "PfYe8U3KEkoQpMuxEXQGLiEqyM1YXf6SnZyQxHbMd1QQAMLZuKgahHuCFsZtKVsJT3oH3MM6A6EMR1417foiGBV",
  "key19": "Wx9eAoLrdMpHfovanX5RSLqrDU7EeboecBPqB1PeXCDe2wTEL49vjXqeobCeSLcDTdNT7SjjtUfn2W2P9WWdAd8",
  "key20": "4rNCPhzuRR6WXkw5PXwBeU8ZK8nPeWWqhp25v4oaqVjMoyssDhT5LofgUdwJm7qn3Z13SmScLmtetJxW1W7YgLio",
  "key21": "xZ7sgejU45khd1WbAN8Vc3teZFPQ1ej7r2gBbk7cj9GBFnoxFQtpAzh6LfcLGgm2ax7o73jXsDRXt5zsz1NnFev",
  "key22": "62wKwCvUPaND31Gc8drKBREsHWox1C1QYCRd6J5pSuNAhoDQk9ht4vxfFKs82FT828ccVRZBjrqdxt4Qo4XZ9RxN",
  "key23": "283V2XiefgYebCT7vG2AxzYV4hAEMXEd4KrRDKHKDt4PucWEHwfTYgaSjGPPboeQXmRHNDWZEk1c7g88iDDy2Mwh",
  "key24": "jpwnunFfKt5yo7CyYmRCBhjbGJW1zyE6WsKdYrunJG2QYFPD2ZyfoaSqb4he9wBC7hsBFU1DehTSvcL58Xe3rbe",
  "key25": "TyJmt6upEoBLk6YXBdxqdGeomNtf7XTjZgswAWWosMmeMSiETM22RkbZfixADbaQ1Ty1NjfR31weepfY8hXBUBL",
  "key26": "4xKsqvhw9iHc5ks7SzeE3r2J9ktX5hB9K4adcz7jBkFcGHPkyDrJgr6TmUU78SpwV7UrTDz4sdpHHq4mVDQwM3LF"
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
