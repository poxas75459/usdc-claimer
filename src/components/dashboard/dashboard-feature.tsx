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
    "4ndx2gDciFfsqr5UZ1n6GWhXXEKTmDHL6mCPiScgDSkj9w7VUy2QMEXK5TFfeMdbvi12jVRnyTp1P8s4RxFFa33c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bEAa3zm4cGXaB4RNiAgFc5ZWBkMafhESDH9ebKMbeCnrjGhzkfmA3NfCCcT9LMBHScYhgWKbC4WV6tvy5T9MikM",
  "key1": "gP48eDN3GEs5Y24rs6b4NjjhSSgxGmth4V8rqzhjHRyLVvdePxDCVcoF8kQNZeEZCYs8EPqvsi5jzUNDx4DQYvj",
  "key2": "4Boc43PqupbYrUwc2h45NWJq4ae5eUJgFy19cuSLx24jBibJQngW676j88mJtzgtt2HsGg2yiX8qWiXoeJ5LHbQ6",
  "key3": "3pr2ddwDC8kDMkG7xJrgU4oaUJETmHPtEogTjxtgFHbgLDsVMvjZEbcq2HKaWuuu6ZBCkeUSZvXLgcYJdVdzMrwx",
  "key4": "2y19AVEiWW6zKHke7YDexXavYbRPeFSZD5dnxnpr2VEsw62EdpANVkAT58rF4UkjX5uj5HHFkZ12qo75i6v1Stuf",
  "key5": "bVJ1aUtDrXduki8qygu2uaFob1USySYU34FwGz37LFk89REzwdsG2nwjFD8VrNJNtRX7uSfG1meZHJrPyJGhr5Y",
  "key6": "2XThKyGVgYDXb9A7tWUWk8Rn6kH2SF7bc92J1ndcs7unfoi7uhWGiEohKSb2KuubAjezFwoPCK1b9ecvEEssnBjA",
  "key7": "4iPHYBPeeCmKpUF9NcbYZsdsnjFjvRs6bdgqVE4VoBv8YRt5zokLdpSKvH5qsxtkwJrSYPGqTmApLN8JXmErMqay",
  "key8": "2mcKPQQDuDhkht13iJTK2gPnK2KUpK38sdYBAbX51q4BPP8iHzKSp8fRCZVR6hRcw6Gz99atyog45N4D6WxEmnqN",
  "key9": "64Hj6nRZszC2hn2CGQW3ChaxCFpUf3y3dScrz2CQnFaUxbbi147ANVJ6NjKQNNsSeh1UB4MYqWfQpWMThXjj4hee",
  "key10": "5K8GR5mgYFQFpsW3R5za4FeVW4EtXfJi1vxuJUxMm9nXPAgYXjUWPKXsrPDfbsQRet1JQcSte4fmLVGac58CfkeT",
  "key11": "2RXY5yGBjVZYZXo1mEtV9Qmbsbj2PChuXgpNsVuWViQxS3t3mFrFCvYa5RaDeCS2CBr7JXKgQa2Y1WADZJJpP4fR",
  "key12": "ALWFPwYxGtz61GKVy4YfYFTNAxW7P9FnqUyacjptEwLs2MUtoyVi4b9xHZToaGt8MJTZ2oUwSGK7Buvqn4xPvpn",
  "key13": "GKvLWWWGst42PjMZ1gL63DRtTdErpLBj8rSccRLUByR6285bPVP3SdAMYTuy7jwkQHwCUBzTioAqqcT4AqojjLm",
  "key14": "bEjmMiPcJ183irxAxcHR8fiqqnbxh641soeBgkY9cyZtN1TiaE96etbURQiZqdTnYinFgKp7HxNaemZEDH36HmG",
  "key15": "4oQQmgcES6FadvAwMXAyJV5KfPAdyhsuTEKRHxqmJD9z99wL4hNCYjPNE9WCrJAuai5Skjbe8rvCcYtH4cagfUbZ",
  "key16": "4d51wE5sGYyZprsGFr9YLPGtpPAnuSqrPidbFQV31D93NAJkiBAM15z9zj7NWmfaiWiJBnrsgU5NXQ1y4FiTV5Qk",
  "key17": "hAf4wPBkzbX76Q7ZXSJ7yBiwggBySufyRt5s8k1mKgvGkjuMcdPZWyoGJHPkQBeFKgfPF8KX5ZvUQAkz5ibJXYt",
  "key18": "5pg9k8xa1g8bmH2rsB4yAhtEecv4Lir5KFKGfYJUfLXSRKgndaqudnE2zmaSKozvW4JTVNHkcS6Fu2CpwFNcYYZ",
  "key19": "2fKmzwBCqp8L1zDosDqR5MWd4F37Mt4qc9bTbS3tnnHyGjyYjkNMXNeQTo7FSordp46d2fSYXqTJgsZ1ZWfg2qY1",
  "key20": "5ZnvtbMMKRWexKoEoH5Ur1PiXKRbLpd88LJQsFzJFadmRWsceoZmSNTNffB4AhmftmGWUMeUDefy8vQTjrfYi45m",
  "key21": "28KcRWKduhUn3nEz82ktbQZmmJozQAp7wLfJZ6SXw7Am2K6zRvefFAB7ViByH7xJAnDAMzGzR6EgrDfqbhqG7SKD",
  "key22": "2C1aeXUCgRAFFVsKUg1pZG5prie1tRwAY9RWsBJDuP5Y9ueEwss2gFp3h356ZgnynZfnef3etRbjsVXoweGC3KeT",
  "key23": "54AXysXXyLjGqEee3D8zR7NLgucEXqQddipc6DkZGCENABpoG1kYcJK3J2TeWcCEZJwZ6tJ5Mn5RdqQzcvMWX1XT",
  "key24": "ztk9wUyTczesXSsyYVSYCayAuCfyFcxRxZKEBJW8denQRkzk2gnjBCVkomCi5eesmqP1KZaLzV7yZhzKomEdVwT",
  "key25": "guoQbCUFUFCjGuF49juQoGtsQjN3mvzwnME2Necr9aCazDJpSzHiWLd6sYGh4Rh4cEoQ76aT5w5i42Yb1YQnMy5",
  "key26": "4qfTtHymNmfXf4heEphaBceMdrDhtXh5o8fNwoXDu5Lkc4nM1Bx14U6mxwddjEe3w5cds5qgbvnCYx4KApC2Uip7"
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
