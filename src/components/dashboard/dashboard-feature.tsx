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
    "EJAdjcPQFC6NvFjyr4rLkJ2itV6E6djyFs6AYSWsUmt8VU5anZiaNqxAF5AqYu1jxnp43Tib8GTp4LVhocxduqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSRohUXFT7PMyBRan18tBTvoTAck9njQyeJ1zKSQS8QwaHcNAv3DNqrYynLjKzuu1fiE1e2xjmsb6Gh9B2ANm1X",
  "key1": "42cJeSLrQURs41MJgfS1Ss5aGqYsY6LdgpKTpJbsv7kvqGpSRDfH3ubHcgC7SDuQNdu8gPvYk5uPXGG3Xgpyhu8d",
  "key2": "5DGoJqnPL7kKbrPGSNUADPxceqdLEHPSH6VqU1AdbjNmW4smoRBqEkb6T9bBhha1v64W1Dv47YFAfvHNou3EYPcH",
  "key3": "47fmGSLRiGmpeVvjrkfEwCmJHWYQtASHD6wq1AeTfCURziEfGJAGHxQtYEcqZS15B2sx31hQLeXWvKBnu5wSanLU",
  "key4": "5S6w7MPa3vesVuUzieq1PiJ1EK8R6wxh6Yo8RbxuwUfchamr3fsv5CbNxCVBvSmioNyKSzdDkeDPfKBsuk5G7hEU",
  "key5": "5v8eCiMMtD4Vb9H7hbfRfSkqgS3B5wYZWDSZsWnmBw9LXPZAbw5Gj4crVmveXrQdtxvUtb9rjChv4Gqzde1EndhS",
  "key6": "4xVp1bwM4yQ29dau5ggzrEEpRhLKTvAZ9BJZiUK7T6Wi4xFKjg71CViC7nG8Zrx2MpZe8jNfb5q1trKUSF8gc3k6",
  "key7": "245ADfRg5qa4D2Yw4xci8BbDxDr2xvfTdKprH2TF6TbBBnWm3sdERgRNfBLZBiURk8ukqoiTSwpgi8mzvHXosc8p",
  "key8": "5ma1w1nve1pSNLHxk8bHrGzCtd8TrtJH1DzzXCeNzGAEANZ2BgUCMeLRceKrvLCCFupYoq8DiZPXm3aRH5qy4bN2",
  "key9": "3xZPXwPEfFosw63MoHXgXhHRXStthqdXcivRiiiKUM7QKYEB6UAVd2aKqR43zfx5KXhizgKjQT2ZAKn3C1jE5pUs",
  "key10": "4qSH3kEE86JaBzRQUG7yrDAd9QHKCXAkv3mFRQ3YPTHRKtDaZgdtWSiFLCGTtBWG5gLsXSeNwVJXcJ8FMB7WR9TJ",
  "key11": "64XHDTcLjsEfftjxxkUC59WTG76k7CH7GZQLnqHbeJHb29zRa9zrssJLVVnzXze2QV8XgqMDvmXjZCvG8wihMdwD",
  "key12": "2R1AAsVMqznpkReCiqufhbPenktqG56sCKpXBowxrKb7om6qPt3V7gxZED3iZZ4A6FNxy4ZdyPXLjb1bW2ym1atV",
  "key13": "2wYF6Cx7LSfMeRJpsSVwMe73jkhGq5bhJ2o8erhYWTNdrSDNwUSJFyyTd6GDVqfGjK8Rm9AUrkVbXb8MnhwHfPY9",
  "key14": "4S3z3EZUypuTRdThyTs4pDTnuiUXzdgArPyQa7pyvS1dLzYLGQXoFhd9s1TxGPkuEe3dXZe8b5XmEVn85m28c5Tw",
  "key15": "4NeR7CY9s63Aajtvw5CQRQ3vTHJyEA5GYVkV5KtJ2gausWbxWAec3eLHfmjZ3GQvAs5fXj3TRHfShG8GNYyx4M2i",
  "key16": "AvqX68Zxu4e6LGCtnsyk9G3kXtJ6XhoN31iMrcAcn8zRA2ycMGDLRhokmWJMt2JrvCgQQzEdkXryPNo45eELJMy",
  "key17": "2ToBcY7eMzAo6xK2K6CZQWrKNV3pzy6cxVvPQJ7T6KWhmVSfUSX8UvY1gBqTcCay7YVDp5DeMSZjyESRnG4czWo5",
  "key18": "R7Dm319UyWbKJ9LivyhJuzgZAPfUDfE3woj6ZiDAMPh1VMJR4t16fGFRmizy2JV9n2t1cNQPv55dDm259eiuwQG",
  "key19": "fyeFmHsWLhybzBD8jfp763xDTK8NCGt3aovfgKRP2qgn1akNnoCLy15edCfemQPN7rmrp1e8tCrrxxtcqorpqSz",
  "key20": "3egMUZFzHfTTx7PedcAfAyz5uzeBGtmSgLJkMY4RpZjPZJ4FpzYKhqL6JWuCez3rELGXXv6q5Zun22dppnsALePu",
  "key21": "imAPy3z96kAvqnyvFsmtKZh293isSim9sAKxudTP2DdkNfBgSRyMemLecLq4aGAkDFyp4nWv5WF7suYsJwDMbVr",
  "key22": "5SqbjVd2MPZEQC48EMEer2i915nZyRvcJPu9x1DJs8G9ffAHRdf5ZhcBzDUc51z17gBSP4NgEcVYjravTL6vkNp4",
  "key23": "Wjsm7rcDPC8mvgGPsySk7XdfTN632rpH6rnePGRTXwHNDrxQ782Co5yrH4cPiAfdmpjRsuCiLVed1Jms2AoKu2i",
  "key24": "52gPv4oKedEuV26ptX5T7iPk5j4h3rSsjzyCS4JBp51eNXFqRnaZ5mSPttfZJ9CpLB5S8rkgqRQGKF2SPYG2VwcC"
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
