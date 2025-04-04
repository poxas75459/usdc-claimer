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
    "5wmdbUWiZCXUmGEmTFpixSJLTvMREciQCHymT3hmf7MFmSqwj716DwP7iCr5GF3tkmprivX8uyyAP5ZjLFLDTiJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jbEsmVaGYiVjWH3M1EtsUjKmufSFuwXQMDjmjoCbNp9HGhtsE2U5nKkbdZNfbirNvnPNPEwrgkECHwC1W2162LS",
  "key1": "3T6r4dtaAKy8BLHhfVCsgeX6RshXMGZ5jsXrXZUzoGu1gKPGu1MQ9ZH6BxCeUrxny5uSG9gtdQxLbRFnVbb5ofE3",
  "key2": "3t5Qxh1ZNMCHTL87Vfy65NaSSEZx63yuH4QrUWXzHqJ2mGq5kLqPQJB56aGwfSdhQDcEeE3uyDbWu46MkdL6Ctd1",
  "key3": "vpMwZTdYGdwJd7naAsxqXjZ8FXiZRgwW4odUCdr7RurW2aaxEXDbD61pYoeva27GHxtBArYitS1iDPRdj75RS9X",
  "key4": "5XtNmPp1Uf2rfAzPyDzZzY24pXUXQbgQ26MoepPnyiguzZ7cmvFvCJ5x3JuKChH8Wq47NtrvK88MuFVjM6BM4hrQ",
  "key5": "2p1EnuQGznrVGhtjMcUnHVB3gUTRg5gGWbPEESpC76CgBkt5TgqFfGt1sJsGFC1UMto16PjuEvZEuYQTiMh9mKSF",
  "key6": "21RiJnubRXwuFhoQLKR28hkBFyAZV5X7Z6WvwJUZpm9Q8Bn9NTGf8CoeHafaZH1Tv4ps2iGfK6EqddfLyiguKDL6",
  "key7": "3kKbw2GFUX9tJffgi5Skw7rpo36CAkyZxi8TZGa6ybtWUFZgyhTjknW5gvsVpfr2fJfAWtPZdGUre8AY41SMF4Sk",
  "key8": "28yStTCUBKBrwc3gEBkrqdLfPS76eWf7n67LW3rUFD9Ke4JErw7F7pHAz9yScgvknEyDmiYonxQezY1WoE3mgVaP",
  "key9": "3Ue7BWwjYbznwTXJyFNFiTUMh71KiDB6mTRQZNW1oQHyCqVpbpSRAPfowcsabsFQBoukNk8XcxvNpLW1dcoZ6SjW",
  "key10": "49gWL1TVGUa4J3VuwcMM4fvBLSY78ovLWKc35yDYvgp1yaqqxpVyaF6rzorvbu65rvieMhfc1mzG591vnEtQSwDa",
  "key11": "f3AnGfvMRHz7M56itthAdTWnQFnJEWrzvquhLpw9F7bVxdStBy4rYwoZyGsjodEwZ1GCzUaMiGFYhD26CdExaHV",
  "key12": "5Y1nvdecwXQtPW8ctAcHTMxejnMEd15nD4PHdTSrUNMWnUAbMXf8kkaoxAey2Tguho1tEBwZ23NBxMni1z8CwAKS",
  "key13": "nVw6yLcGLUkuTCn6fmyk33sG12rS3py7GWEJnQuHFZVoJLEf4oBTxyakmenxs7nujRftm5tZA6Kx94GLtqigatX",
  "key14": "4hcPWusUSorQUnNQeMPmMNR6zXkJ4cQW77ibvhqm62enyrGVtE9TA6BrhP6hkHFJNhefrVYyCsHmVyDCzgjjCw5M",
  "key15": "67pcmARV42BzLg1yg66DwjYg6mwCG1irEvJ75erws8D5Es7WSVKJPHsNUpFAnwtCb7MVY4gSg7dmwbsxWRdCfivy",
  "key16": "2sEJB7DQFozDSn8xj5au3huUZFxT7W9XJNiDb4YNmagbrgc92D43ggaDXrgPzJn5TqjgRkayufqRqGrgf1iU4pcu",
  "key17": "2F8BPwop15ATw7UXb2ieHAAn1tqXDKT22FZ65RtAk7tmBmbssocwJvNP2AUe3aGKxdUxWB4nAqXo2SZMEd6FuphZ",
  "key18": "2SnjvCmsj6seSyM6hiCSBRXT2g9n5LWQGVVsHSeEnhoQsYFRMPzcTG93g2h4QGLMdN1rft9C31HpXinyfubj653y",
  "key19": "4e346Eb6UZT5nd1rckwv31a13zNij2DiCxyKSdnskahtzCHFPmGEPWTeMRNGDo23fDQzXnzaViqVNXn3zWuVuxvU",
  "key20": "3bWPSAmgE7GGXtuwffFDsZhusSLFhCi2ym5dNwLRPdGJxpUr3LZum5G5Uo8smtRth2Ju3r3CcwqQwEwALxrWPUm1",
  "key21": "286L4TXsLDvVqwbikjEt5i1c8VrMWEW5MsNHjLuDe5jpUu6J93vYgpAFND5jdVCgP7BUZxKGoiPRxE1GfHZq6kGs",
  "key22": "52QBy8iNRjjiBRDN8VvDKXFfRztGLf3BGj1go25Bc2waQ7wnNkwBEP6g4mutiELjeTT424sVZSwzEpRZTSrEuHQR",
  "key23": "2YzQicyewcqLwhb4WBfTDaVw1AzHyAAEwZhbWuyG5to2XTySGPPD7uxDrRtPb45eXPL89BaKEpisbjfpwMkVDb9w",
  "key24": "gpeByJXGq4GgtXgtb7XfsfwGFdMfdTKdRiNHSiuxA7tcLAWgNe9b8tgzaBFqSFDDg717vYeVoEgserAGnjMr8Ek",
  "key25": "ZPujgk4EzVR2Dr8QBs5x3U6catMBAhAJ6AYhCTgouLwHewtBBMCePXwLyPvcbj8RZTPgKDxwmF3eRKsjKrhixBo"
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
