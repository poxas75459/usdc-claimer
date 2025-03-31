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
    "3LiX1gN9GU47zMX7Cn1Z2EBjLaP1jgRhdAfxgY7En7P6nNfqSUbcEgjF4wNmwxs5TZxueG8JsFJNVHh4gbWHMPEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7o6ubAqMPgZr6GGBYijbnT3iYkmdzerTn6W5mDxgvnP112upjRvS24CYJrjfJvrHdTLVi7i4sm1cYabhrKaqrF",
  "key1": "nuejpToL1UcfjMdeReaMfqTvhWAMizurMAopXA7y3HML9Ms67WLWEqY3E4MXYt4bPYsHEcwCis9peaMXuCYJ1NE",
  "key2": "5erv7evMv9sN8TY4Qx9foKyHhhQk1oBB2PckvLGaXxMrAQSTpRCJd9LJyaNZyAMuPV7YVPgFYQx6ufeKuRny6tK5",
  "key3": "4Bkxi8zDkDeKnhjKYAv1uMuGetM3bntF5sW3zeJStAe7J5naaDivVW4b5gJu47tE3bxR5fvnUtvGrdhqT26cdnYx",
  "key4": "53fxojQgJYbzJYBYfzjHsAx9a5MQ5HhyHHaV91f8eWNj8nRgQrKbue2CgM9KjT6usyGAXQNQgsxMdCJDgF5FX7dL",
  "key5": "1kCLNg7y26NwvnxK5FMrNUJyz2LbBxUh4cDCG36q6W5g8HaamsL9opsTMhVrSSgq7HSSxATbSDG36YLDdK96JHV",
  "key6": "3JDcYRqEXv2wzxYaC7g9ob83P1KQBS7uCFgQxcKU3Z9L7MEBcG3Uh7k1ZKiXnR1yBKjT1TmHMEpw7gSL3fEZUH8Q",
  "key7": "4ZvrzCxCgwnddGwAE7rp5vgnLABauNCcBjDjEAyHKySnczbpkBbjzKNSWE2HvHtSGLmBQN4u9TeUE3XtqZDZRhZ4",
  "key8": "5dHtFk6ruEa6atnjVotwZjVB7nT2CrEJy1X9feuiqM18MADExbKZJBd35Cibtbxxv9zEt4YdHojhTnkAPjj8f4Cg",
  "key9": "24USnRwazq87WbDqBizUjXaFE54VaK8Przgwxa8jSznEKpiCZhsNvLW2wBwLr7x8vTUfWwKjeCDTDciTbxwxerKA",
  "key10": "ab3cbgEzyrkhBkfUirRdH574poeZNSSEzWiy28mqFb16LA89evz72B4ifq6C7gmGkKFpTvcjwUSQUPa9LcoSC2T",
  "key11": "4ai5C8mYfivhYr9QMXDg7zAgnywYSztDTgiJCFiFjqEnAWtvCak9xapM3Hdh1JrVaBDu9PZDQUTaQqWpkib4faLp",
  "key12": "3Mm82DLAVcpJUtH7eSmDAiiGAMCXgCz6RzZHGd78tWhtSMJxdnG1CN2VDWF2GLY67X2RTrKKtR27RFDr4FGd2ZkJ",
  "key13": "3Shwzxjvf2a8fE2LV2NrSdEuiCgRMSwCWKxurXWRVm1e2JnU7i4ZPGGhodiqxSoc6AWijLzUhRCFibp4Pr8V2sge",
  "key14": "42PJbSZ4Yf9sHodPqnc61ni2ee7FSxxKt1PkMfg3xv8eLFFhQAzBkD9A35nNMhphbb9oR1GD51jcFCy3M32LLn2E",
  "key15": "5AEPTNbLx18LfmMGFaLeQfwQCPMXRZkrkRT2TS2LQ69JGjec8dEqBcWiz5bktgavGwQr2aq7Y4K2MWqkeAp4NyJC",
  "key16": "4bTGfqNRJ9ww5cSTv4zWrPAKuF3wvje3zMk2MdZ9jttj3tSLxPe7efPNDoGBTirTRfngW2YCFdM5V13AamD7Gpzc",
  "key17": "3BEWN9jR39Aj5kTBN6VVLWjqVMeCzfM6DwT29zsHfZBrZxLWkgghf18uSowqkBubuEE9426jVdRJpvu5BXpnNynW",
  "key18": "SUBfr3puzhrkxYhWNEtHByBEcfbra8CYP8GPSqQi9ufUq6cQr99BdMUqPdujJRaBikwfgoCtsG3BCcGYVqGsaQ6",
  "key19": "3QA6v68C4XrXaGapjqhdGDzxHU3NSQpb4ZrqNzTLYLfjgWGke1GMRmYDD5xhQxhjjpeN13gVqBiqaJXaW7yYm9kf",
  "key20": "Ye8hEJbkVwUFLYhS9fJZdqCHBXRmJerVWKwgTuc4aKDmFeLPPi2xwQeQQJkd9wwG3bgjSKiah7A3qq7f339HVYk",
  "key21": "3Av2RLLvGh1CtE4yp7z6qGLZZw8jTQmbyfpQkSU7xU6Rp8fBAX4ShJMCM1rk9ei94XPFGv5SgcncffL4rJC94YgA",
  "key22": "2yG9yGPSPdyamDZkpTnWyJ4UooPv3X3xuCW9GWJwjYtUnQ2ctfDG6c5gt3GWTrkHAKd1nd7tux7atuQk1k1Qz8jK",
  "key23": "BneL8FnkhDs8CrXP7ZreUJfcZzr4vxUvP1NK9sbV7BJ2DcirHWEw5NwXruWLM4CJwgfgE6YNZZxVz6EcgjV69k3",
  "key24": "PPX6ULf2CrusWM9ntvpNsSfR27MdQdmXjnezq2xaGUK63yfAsvZfwLa8NVYpWupu6gBpKuV1f7ja3cn4149GRZY",
  "key25": "4dzXPHoGJpzQEFWxnv8hfVCQVPLAonz3XjhYsAiHCxNDiyNWqLQkmHnx3FCCgJTmuoYrrgWcZP2gxTKgkBYqSo77"
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
