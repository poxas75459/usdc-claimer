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
    "3Ri6RoWwbqts3ykEHFSdfvGRWyr95qceCM1fbV81NkRE3JHWFoX1FjaTQTkQFnqFD3hMCTme8TKRtiBCicwdb9Sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Akof6Mvzpuah7mo27GbWYzRg4ubjD2EQYvSDzJnmirgds927WYaVp1UyUX6ESVKvzpcJnWmtyrv2CmhW2NoTnEa",
  "key1": "5RF2spuBa4Paacu4KspKTMiADw3VkxcPwcpC7p2Ev2e9C6kJPkfzvtqVwUKNr6nmZ82X9F7XMUseL2sGdCPUTMUr",
  "key2": "5D9UP38Mp7H2X4yBFjiZ2MjrJXJdN2vhJ8PumicgqogrWfM1hZv3V3t8h33tiC288EsE1Qf3UNJi3uZUPwJ6ZkLB",
  "key3": "5BZGnCNCxiZKHDwSL6KgzdZNQx2iQWdTUmU8sMAkxgNjv8uqoGsqoUnq2jSLDvbt14ThqLNYJc4YCcdSFVT96T8b",
  "key4": "3u7gpHQjhqsFgNVkCqmE11AoSTf9k7ESgiqNfn7cWqCa2p3meBqJunpS4o8Wgr41y8AmZC43J2UcYaaZ8EUDS67z",
  "key5": "4XH2PuKas599BCJcAFffCVgQFL5iXEBGkVHdRBFWf4Hf2MpowCD7ZGrUTzrGKGfS2ZYsG4Cvxq38hdYKeHKR3hmk",
  "key6": "2TV85KfuDhUjTf8z9wFy7DYCJPCUeqjWsS2xhxkovFy8tYQoqukpVDazviiht3S5U5FZQ2mDLhEFEQgqqJhUQ3gM",
  "key7": "62wPVJaiLHeqtfWuaW54eSw2QiKGeZsN4woB6wHsqk7Jwhzk95SRGayBPinihZ8K1Qc8YQrsye2inZCzhWDX2M6n",
  "key8": "61f2d27N5qFKQ5ucQqeT3f2TsUh62NLkdgy4d121vPDRR2JRdtsLSHSzo3eB412pKKs9rnbs8Gbi3EyBCVQfRsLH",
  "key9": "5d9eR2mcCf59LbgLTHhGG2jUKYbVsB35krRn1xywoPWzjEiDu9TsWzPMDayRaXgLtWyEjyHevuTCLsbVVsfqzace",
  "key10": "vfNmfsBT5bHsC6svk5aZYCH3wqencTUyD72uSiheWdxfXCVbb12RtGwoqfxHUFhMiGx84Kan26vwFLfhDizLwmN",
  "key11": "41Y6Am9QQbokyqJfFR7Rdv6pBxAnq2EPAyYdtfFBf1oscrsWGUGLqhiYMbKgPa1vZbN49b7wvCWoB9szb29wjSvW",
  "key12": "3rmzGLgQcFosMR9AQDLVQE6sSN7r2ThNEhm4aZRpM6kZr4b15VQQHD8fdAbaVu1tYKnHAjyLGcjGpgR7WPgPV8u6",
  "key13": "L38huov3SrNZr5B3RWufeRdWKXMTKVYaQcxVYHa4BfCyTD8dUAq3ymeyQb4uki8u8oS7PYmAMnyCV6cYZhjpLZZ",
  "key14": "4NLrWLwU39KCU3UiLJXhGKpBboWye951DJurnu49E1v44qXQPaUZaFmCiv6FBvoqDSikapJkTaW3wuEkRgpHErXC",
  "key15": "66fjLAuJCMUeiXLt5iPYkEbQeNpUfpQWMDVJ8FxadEg29nhNryn477HmyLhXC7n5rnqJiuvxwkCVEFp6myyFnXTd",
  "key16": "3EYNiqsMPij68T8sfnUZtx1Zt3RHpNc47Luc8hHahQR9vXB7QyiN4e78nhtwp6WmgqdtdXY4iawRjAR8hQxZxhcN",
  "key17": "2FJG61JiCzkstGgKHcdAVFcns7Fzs8zdsWwAXwJrb7rvKicjBDDS8eyJ5qTRkLwz7VmozqcXRWp2k5B8VqUDHdwJ",
  "key18": "BBNtnoXxzwB2MP41mCAE6ps12n8ncxiQZsGU51eATxtg4ePm631sWiQUb2jAun2vvMuSKubxYcjKHKJ1rL79Ajd",
  "key19": "4Kz3iUEACbvULQMUiwo1p1zYWz8jBCKvEaqbpbvn2RYLUMFbdE5MwCAfB7zVFZpzaxY1NH7phZTAktueKHtgRmBk",
  "key20": "5nUzeCf3t9MVWZ3ksSvfYvX6kPC5ztec3KUPPGM9znVk5r7La8feeXX4CHFC717fWTrRa6SM2QTQSKpp8B3TadVz",
  "key21": "5RYYmTJQe5Mf129BikFPkNrGN7w2hR9JooW11tKinsVzUWzYfZNxvsBpaafDMaYYgow745qQiscsU2UTcC2zyBJc",
  "key22": "2qSEHyHyyVbmvD2mrZNvc36FfhXsgU8kzCfFyoqdcxxGd3z3fYLnu9sqfEYeGuJPfDHhJRcSD13XUarrVo6ZiBbi",
  "key23": "53cypPen7TUNexdSAjwNWWHQY7LAKWvgFn8gHha8D1DytnCVzzJQvggLehKK3FbqPo6ghfz94Sch2Rn5Bb228cao",
  "key24": "2Shh77Nw5Yz4QGkZFXCGwpL9rEL97tdiEArBiHQmk5baMWtG6Z27CYrTs4eVkKSGRSKyXwd2FPCDfU6EEG58NGRG"
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
