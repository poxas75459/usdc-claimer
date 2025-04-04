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
    "62uQeQnRq4AjbEegX8Xwr6NJFwcm6tSGPJPNv9LNxuPZy1QfmD1o8aR4cyUeg8K4TreTbsPMT57aKvBDPSFr3TQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPp96L4Ncuemrv58QgH9fW1s2ctkSm781Vz8Rm93HqgryHTARUyWTZndPDqStuFM2G2kF816qHDecJc6VvVzTnY",
  "key1": "3egyyK17cA6gF63fAJscAdEmJprnQMa9U8Ww8KP7rBjdQpBMWub8MKG5yKGktVCiq8sf4xF2xsBZVHWoyDr1Pv4s",
  "key2": "3DASnmjMXQZbaAstpJ6mfAAhQ4kwceABWH1228U4UMHxn9uoauewDFXonSU45nNALxh5ycf9ZoMgrZPuqWVfZpyf",
  "key3": "Q8ocj6Un314URiNH5e4Uj5b6nmxpCGRJxapiDi1AkDSyV2W8iDHwNoRfRviVf2wn4Avce2mmMu4YdxdUjHizccT",
  "key4": "3S355ou1AQp4gZ2GwcW4ss5Pres9NvXTyAg3dw72y5EX94JA3dJaqtCckRXR1UuoZn1FUSEaAoPtYQaZ7mmTp1er",
  "key5": "5JmK8eNJM61M5j3NTTjbPMk3gQGjU55Mvc6zMod7S6fHBTETYhNvGoRpPsJ9QZGwwXYGhtnZWbQM9N8bU5UXXXXx",
  "key6": "5JHymi2qEGVaNBVu198g7Zhmnts9JgzcKEqjmEfv2dFMJ6DV1xgvVqrecYPdc1EwoJxr4yfwkGfDEAUQ4nTfcW9w",
  "key7": "2dbK5CnrA2KvmsxYwwcKZ49Nw2WDzRC5FzPBkRtmat5qsVFQHdzB14eVmrRWQUJfh9XAeTf8VHR66RhWMEYapu4M",
  "key8": "4KRppbWDPS62MoZurGMZ6bBrf6BySDUo1KNkb65WJG9NZVCFz23CEVtBZdQtdZ29dJj8jkT4EFow6yLrwyV8U6hq",
  "key9": "2fwi4crR8k1dFPgjbP6kfrPXHDqdZwEEbU3CrEK93vaVurPLrGjETYk23734W6VTkF7UTah5dK3VJ6toAaFDba3j",
  "key10": "z4TEr4MgtM7DCACkv44CAhC36U8eWWTqKtm2xXCNBB2Lwafehzk9wkBDFfGzqQsaJqrVveb8ouK2N6PA4PKq3vJ",
  "key11": "2BuoozZDaye342dZ969Abyu2wQ1QX1H6LbrGdPtSBgdgJ6D8Z3XXBiYTRgMkL3ozb5jc3Ct7gx5tRLMsJfDG2Tzz",
  "key12": "3QqChqgKCfJorcYfTtbK5gNiNg3nXtzeFDfVSoAuKkBuaWdS1dBT7EN7nUyEnjfwfd4itZCVQxGi3LXKne1hTYDw",
  "key13": "2kgbsnZhPFJbABK9UYAbGWo5m6sBad9EjeMjPnwLPpZ38qziMDhG14aonRyZFr223W3cEmgcHRPzXCPo8H3rCwLx",
  "key14": "xA6GBwEY87CVCteGPD4S7DkhYBdpr2aat6NxmjBfaQ6ZbdQrk2kNQxCA3AnwxT48p1XHvj2nP5ixN7d8YDoM9gF",
  "key15": "2jE48hsqWzjTLyXCoXw3QAd8PbqNjZ7LkmxSQwGPzJxADKDbR82BNKtkLZzL6JagGiMBZW3ZAYrBAWH9U36ANq8n",
  "key16": "2cEuqREh2VmVKPjssrEuW1qLbp1fYDUhwyTvG3KRTncevt24GkFSyzBaCuwRGudRnPTEXMfx9RiUpU3Ey2iXtGbS",
  "key17": "4LR9ZBQNSjDF6cPo7XDv6sTaozrmEXfK8HC2x99wdAeaJuLGJmV51MRFbvbCyqAgr8vq1hWHXLzH5V6jRkiyMnXc",
  "key18": "5TzNL2BCnSHW2zonHX5Lt7o1vrkxUX4EnLJLRyFMRaEaBsoFg62DvNcjARq3bCSA61ZQ1PRxSJkcscATDnPce7xr",
  "key19": "RDiNcfqbQiboqsuV9HNSPJ7B48cbkJtNUKErjt2B5E2HAYLkGkVrWeTHC51GQbiG597wwY5fqioihWCv276Nw73",
  "key20": "2wbm87Tov9stgRjPGNf56M7oMT3G877BjHJ9nicCi2hamRoBL1UjnJk1tpbMhZmuiq6AC9i8STgJ151EmZmFAJ64",
  "key21": "58XgS2jAR8Vf4UzHriupdqQ2c8ugsH9pJ16vSXyFeVxQeoXb1B5Q4QPxibk7bQUVJr7H5AN8zfpUjGDjvEvCGkhc",
  "key22": "63M7knQrrEFYpHPpz826MAUn1qyFmUhLcHTvxH98SBgwu3K7U2WZGNbUpotyLeBP1rzW7sr3PiCukFsBhdzcjib7",
  "key23": "2DKyuH7LD2EiXZXMRFiijEk5LTcTZioHHqfD9oZiujojWX5FxTjydc4Jm3waSyUEadNzvecnRCWDoFmXoSec2F8H",
  "key24": "3Y6aMt6iZNWFoVYeDuB1XVuDurGVWMFqinh4FaQANWYFPbGfSMoxfTfy5X5P7GYvescmYtQGPr3eLXPRGz6aPhJv"
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
