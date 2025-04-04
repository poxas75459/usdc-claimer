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
    "8niWrPxbTWNiSVYxVLDpmsBu6eebJSNQ3houWLYMcxzMcL827auSeUun8N3gkBRjh3oh7RVAoSMZSoEDV1WCbb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ci4J3PSBg4khBgWm8gBZz6qomG7e4ZGWFh2B38XqcZH4Ja6jAb4GZk3qpfcifQ9JXpnnW3eGEdCnkCuURot2AsQ",
  "key1": "2K1a3LtR5YMG9VqwnBwnH2XNvMCqevEGfxS4mXxacG1dq2Yok7zKVo8hV3dqzeVKmmNcDKJFycJca7fV34k9ppXK",
  "key2": "5o8AtkPsT82yCnrcfxWYT12MaSoECQPnR6y9cpCmyELSPSQ5RNkASNP6RRnvwFRZmFaUXo3Mg1mKvu2WXARLzL3D",
  "key3": "CokiZ8gnv6SC3dUokN6Zzxd2FcCCTyfNhefX3hgNrw65s8C85WecHbBv6EZBR3Sfk8WHcKzk39C786HeJFsSijr",
  "key4": "4Uh8TNAY6u6unXFBqq91RVH5EsPSqhFa7UQ23ehEPzGNn9LbKwUFUBvG4pc9pvFunAZHUPtTAtnsa2VdC9e8Jkvh",
  "key5": "5TiLwbZDFVhUwehU4aR4H2FgmtCRVGSs66UFdGim1iqybErhzD1fEwMoyWbN1SuktLYKWm1dG1J82LRkQ6M1L1uC",
  "key6": "5Nxfr6ZQVxzpQKn996TVp8CvHFshPxKaaXwJMPARsCascXEmAvMgakKsbjEneFzmnEkEfLw6rPuJ2DF9jGjjx8xV",
  "key7": "3ykqZP2uU94U2QtbZtvT5z1CnX5bvv7JyiFizv1qN2agoQvApg3W7xp4FvorzrUbPaMx9axEUuYFeAEJEahC5qjm",
  "key8": "2piuJFHPwZUMM1GHYXLoRAji5CZjJ9T86YnmNjh8S3QPEFxsEjfwQpd76UY1YsSwKUuvdfjyNEc7iFgJR79Xvntw",
  "key9": "3sTHSih7NwHcawHNkj8u9GC6Sch4rPLRQJ3teUq3SAetey54pjpiieycFMrEHWFVX2PHbP9uuPfvSmKKzk3zMWPW",
  "key10": "4DjShqKxsM4Eq99CmNC8GSXPzGGkR4Cm9oADRAudikJrJikdk6yDSdXtqL26YsMwGm8omS26k9gddfFE4uuxj1XW",
  "key11": "PQC17VhUqCf4CfBeBKFsg1GwJWRDDvTrgKtPS6iYarqNLesazVByavmA7y4CTAeha1ih6DzRuQEdrvVNSqikaaz",
  "key12": "5QookK5FEdrS1b7UDH8qZHAXKS2HEjPo7TQrzFDyWVEUyrFumct2wG9HKU475tfF6h3MMY4FoBjvCJN1RtDyCAFJ",
  "key13": "2dzuBHPSKeB6tkyDeWp565XBR8uBbPna3K25v1x6mwT8wdTnYtcRXUWBq4BUSWQegcV9ystjReGxLSySZGtTiKLK",
  "key14": "2odunfAtzquJoayEG7B9E12r8zn5ZhTWFV4BuQrsCtkFu4FrkXBkkJVAaYjiqgtyz7H8PLYekXcsw2Tj2puwvGJK",
  "key15": "DseHBJ9QV11krdYtgAkkgNsLfbaDompdmrFU82CtYKDq7TyV3k16SobjuLLhDuAqD6ZrDbzU71GicifPdYQ2ZLB",
  "key16": "c1km1twP4vxCsG7DqN8yUWuf9SzckK7bvWXhWwf7SRUj6AAwcE6hSqCGQThHPvJ1hittGF7MCTqkKn1nXzuetgN",
  "key17": "4TgQjuMryuSbc5NAyx9DTXx2ct84MyA2s1Zy5Vj2FJr8q3BvuXQXVbt2DrrdFdaz5Z8HEMYCBzpEpGxDc2HSEZ2H",
  "key18": "h6kZJXCBSjLiNFMV4GcBmn47vQCzvEvi2E4iuKG1m7K6UUtf9sxU13jX58QXJPFDeTbqM1Z4LDhbcmtTRYTv8F2",
  "key19": "24B2nUQ5jpGoGMRyU7eYEVq5yS5d44nDkjKZ9Vsib4ZpcgPd5y1n5XLA5m234fm3SDAHbuts7uahpGRdCiDhpXMU",
  "key20": "57Yvx4AXXSbUrFR1M3NFoXu1JfHTJS1u32Ek2zkjorxQ6bvQRjmpqng54yx5Y6EWi6Zjipmb7XM5jFKJNrzRJdtY",
  "key21": "5eLEVARrJPwGuBTnnrKgVMZJsdx11KawpqdvnREUpLXQb1AnkywSsvKF3y5rCKwovrQ5S6nFpanFHYHgoAsGDefk",
  "key22": "44Q4vwY7VRGTssAtrbwKgsVSV1GSyr9tKjoanwFjPKcsKcr4kuaZ1TZR886x1myKz4vnnwWvv5vBeCzSFjBEP2dE",
  "key23": "3xStpuGK1TizvLU3nCZ73B1WYfZyq7pmEK5F5KoTZGDzwaKkMNwxNmSwENVTg4xKqe6vRmAtkGNA9PLbrYiPLaHf",
  "key24": "2g4RnAP3rdeM8S1S73SBBmEVNkRTrkNbQ61tQGUnVhAZvpd1kUJvuixaSRyYnUoJCoeua3pocvj3XkqCmamN4iGd",
  "key25": "5cfhQvTWsjzeKf5QSNqVTwcLeePNVvLKbkwxYHbehdaeLsQhYv6DpmVp3hi4Su2rPHDemyEVdJifTwGngcSurPnc",
  "key26": "bmcJLMZudiAFZSNLFJKtCrc8hTAkcqNtcrYzYqmpKXuDFP8wFpzABPDKRcszMmEaJyHo7CDLjPoQo18353Ce9sN",
  "key27": "yF1V9SbFnKffjkqQ5VDcRiKg4HhjXYNbw2pYVu7K4YcZawYQmqEqMArkRoAAyDeBNeVQ2DVorzJhCCeJr3FgJXc"
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
