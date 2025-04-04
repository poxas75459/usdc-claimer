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
    "3BWwCebGQYM7yD9CBWauBw8C3BhnouBrcLjMRy9Cji5FMT2LA2cNZfzsuXnjK3bRu2p5vGf8UtZn2umqjRk7gdkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m7BCH7ZNXfYcTSoutmaAJU6XMkgozDeXQqtZ4nucQH1B6nrDDUTryyc2b5NDibLd9WMhQsEbgCHrextxBkVNqun",
  "key1": "4DGvkPDaHQP6Ga9J4JbGNwgVuwwj6Z93vJfNjwmU4SFiL4EnJ29FMt1NVmE6KGXBu7GrW4WkJCRjM6D9aNDFXVHp",
  "key2": "AhPYvBTckDUfpYu95y7kBRgb5A2u5Vr5nJu1WPzmtPKa28Z1jTwxfSFNshXSRJLpPdDd3KqQ4DzfwLLPQfgt69C",
  "key3": "2mLNEBercA6euYsutmJfa9j8yPR2C7NvPsPwdfZxdQ61VwRMxuzKuo9wPGhMuF49DjVhWL4VL9dDowQdsH6VXkW5",
  "key4": "PWbugdQPghw6AbxAtdPJM1YkNsxCdorVfAiBkaaef1ksiUnJam3528wWQjTi2dUhdPwZpqBztqkeHy5TWRDmxs4",
  "key5": "nXktEad3xef1sTvxzyUZFWcizgbknv65LbVsfsnUcGDCxcFFzNiuekrzaAbJJBH7FBu2FxhPbd1QPqrxrsdaMic",
  "key6": "4eEhAi9Rqn52DBznZwMmBefDo7iUxnfNMbvARXREogvxN96KSHUjtcjVDk4idhaezTvAD7cJ2enzFLCavEfn2js4",
  "key7": "4nPk63iUXvxKZEwoMwbhuC86BuG28fDfBUkPWuyRaGU4ZmrCvDKYVN5MxhnKMjKDnwmrFWEogc7ttywU5x18Ndoe",
  "key8": "2C9EprHdakX1ktJWhQ5BRDurtHx3CLMGE5CqbmDBa1RMopc6fFaxLwGAQUVXe4qsEys65CBPaGuxhRu6fMBd22x9",
  "key9": "5YWc5zBLhND1VeaUQQ23hddzpBXBMbfNtodYCXSsTz4dyNC1ePsGeKHD1YkPBMdyhKsvbJWnYne7xY2HxNoxM2j7",
  "key10": "2M2QGXM4kPMBuSbRfjEYRLuXQeBrDvADf3sHBNDgEpb5Z6SB3Nq7TVgXFL928SjkgmGnkWQEzeV1Nh1n2xzguHkF",
  "key11": "6ZDUmp9oCmt7SUYWPbWdSdRis9gjCg1N4AHmK3mDukpTU1rofq7BdbVPc87bctCB9RwhMYUcBEm6bnchH1npFvi",
  "key12": "3asjBoAVHxRfCLsjJEyMyT9AXdHpuWPdFaxUux3t2FZM4UCMh2U41AshzPKM7wGHk8Zk892DWD95aTRg7jtRPrYp",
  "key13": "67kwFQQ8sYkoy7EJv4Y2RFnNSNA9NcBfVpbPWQfjEjRC7JSono3akt7EBbkGqxqTvv89qeV4GRqtG5YXXtUTtziU",
  "key14": "4BMciwvTJnXYq5k96iTKR9UEofzXf3jc2jb7A7cZ17ud5sbUrE4YpoRLEv2oAxVdamX1MJt8b1YUgk4nnmtN3yaQ",
  "key15": "2w4AvvfWiov2ezWszzPUDcx5zAyN8GwkH4FeE8qNrHa2oHgNtczkx38kCu8NtH2FNLdkrNMETraFyVMQjJnE1gV1",
  "key16": "5WfPfbF882ig28w2fYY1oSGrDtUe1sS5rU1SemGcUAeRTNTBvYaEJpF2xX3A3W48JvtxSaupohPFyz8U6zwVk5ZP",
  "key17": "2cyqM9u85HhVc8V3WidhdD3wBRgnz2oQHSYXP7Cm2Y5yufL9ufawxFA7mcG9KZhKSQfQ94NorJ1RZm2gef1kZ3yr",
  "key18": "3qPP69FhRyybiGkqF18zVS8geTSksdg3W3NYtpzMmYMwRqbY6UX2YAvCF72Pb3PCuBRuVVDzf4NZqyapvydEyVVi",
  "key19": "i2KjPCyviNYJSJWyhekgSpRHipiEnXeNpLSjYWUiDsjamHbE9SqC2dAAPbdFH4YwhPUJbmLP5ArRfiW1J8hGLnA",
  "key20": "41ASA7VMfA2Deum5E7L6LP6gGqvS1knuYtAhumSNtHgZ4f12q624Cs1kjs42tnmGFHXXf6f6t5u7dmJ2ermB7Lgf",
  "key21": "5BzXHMarDDqyDqeScThT1YSHoBhi2ynUjrqTDnySUfMraCVJQEHR4QGmypoFLSevgLZ8coDedPj63HyV3D5qjZhR",
  "key22": "2EJ6CAaeN7a6UXP8PFftpQrqeCTcPqxKqANjMNXxLTq9Sj5FjB9T3KTJ9fMQAxnYF1KFYM9jHSaPEFhaS6dsPCNC",
  "key23": "2LNSy64x6LUNP6ocnPpCfhcRosnkDUCSTfVzt1RKHc3cbvpUNsue1amNX43n1rUJdxybJ9GZm87Cmy3rL6bsdzDF",
  "key24": "4W7rCfGn4xhNES76Jwa96DRa4WHqUgeizWG8DgWZerm1AH4BdEA5TZhKaJZCWZC9UjY9yNMwm1WdLJYHU3hrX4ET",
  "key25": "2kLcchSB5CbBJbscPB1k1hPSdoA2rjQCpNHupScT7X3cSkBrFrRNfJBdQFm5j5oNfCWko6PJkUsgcn1uafu1nxMV",
  "key26": "5SJbgathv6VTxSfuyphwjbUy54dPhV4ehMbxsAsnm3ZQy82VE42Jgf7dwtE8uRpGGUEKJmXYaJuBfFBr9u2XDfUB",
  "key27": "4DvRyBJLZ47HyvuH8Hk7d27voAKx1cQZ33SxjbSD9y1towusPjJ1aCJy8RT4tJTvgZhGrStd1meXQJrp7ZNTkCWq"
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
