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
    "ScN6wQQ8dqRxzshQi7Wu2B2aXZPyQJEEDnawsYTsqdTXZP7ugZDB1hmqqSeqnuhJ38mwr5fbLNnH1UxvCXi7qea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfDmy4MXuzUsCo9E3bzjrztzjBGn8agWyb58WF8DWv8AfCjjKyZCRaSXDRJQaAedoWbSa8aLd6CPmvXg2W6CLvt",
  "key1": "qo4MH2DpyW4joqd5Cix6CTaG6UZKtUkErxLCp9zfKV6mTDJPSDmLMC5zjVDVmQNUjGW9A5zVxwgihsPGDMaLyFy",
  "key2": "3e6RfY7W61cVWqyTgAQ9LPJoL3FYHNCC9Vb3RavhEnK1zcDQ5e4JRssSZegAVf9PFtX5mhVYPidoBJhgmHo2aCKy",
  "key3": "5t4zTqvbxJ2yb5Gi7i2zdcGcpnhNruvDzRoixBa6qXhVz2137Un1aVqyvALwt49KGqzbeRs3rm6NUQifpsdX718o",
  "key4": "24rsYsUNRXgz22Yn7nZdSiV7xNAVUtWphyoPuoXbccQ3ih5QELMF2qu7hkhU53ZVTrx1CvRPFbyJzBsnCqK4zScr",
  "key5": "TgxSYVhuDxNbmfr3LPrstRJsuJYnYd7GMA1VRUWDdhneKtg2AXy4dXq56XzH9cZtYV9MZYR41npe19GjApDpzQN",
  "key6": "5bpdK32jzVr8CvS2sbxWaiJLbXc1XH4k5XbVNBZM7wXyJS5ARq6xeQRkwEc4f4bKo7qHyJDJgrtxGviM5xngXVHH",
  "key7": "3HppAMVrJnLSW4Lt8SQtC2C62zUuzow88LydhYZdq1vMEVQea6dTMMY9mJo5bdHm7VJZrcxSyn7sNp4GcdLuF9JF",
  "key8": "2n7EjWHEY3mRwBy1MtqFmHUS1ydzypHLUaH9s3it69G6da5wxS6NCTdC2XhpqRSMK4pVMU2tn2Rn78uWbya6P2kM",
  "key9": "2hJULYx2reNFJUgWxJx7s9dWsJkvmi1ciTsPp7XVwEezsszYhjvjb5H8NtxgJiE1k1UmaMn5Dc2rFURWWvRsxVim",
  "key10": "jvrvcvvDzRD6cM8vZb5YcTS9w6vxFFtwdYyc3PoannzLFkMYpHFT9D3ygrddzpw3TifRrwJQDYG82ccJy1n7DaZ",
  "key11": "5RkrRsngb1uhfhtDHNp9MD5MQcWUhwrx3nmW9ScpPD8BecjGm8M53NYESHdX39JwidnoizYBy3LFjPBeb2x7Bc3R",
  "key12": "5hmvXBjLFUfHknivfH3DT7wmtsLDivmvhaW924BJ6JYW6QPsnw81tGqpZNgnUt8KNDbN1rHqgjq9tYutEDAWoR8d",
  "key13": "HDWmms69CPTdeEVxQGC9gAKH7PCz5FnWYJnXRZuU3CmCctAGvxU7vPZbMwy64Tgc2JkpaSpzWbLcYDfBMjNDRzr",
  "key14": "K868v974Niij4T6R7p6ehKmmezW8LmFRMkW3kzu8fP2wTCa3yLnE8C6MBdkMbkH6bGxZULhKfeEWJijFF7Nd9VD",
  "key15": "3WkG2hh2osAcrChR4LXN1rJx6y4PjC9WhhDEYZFDddnZLCvPTUdaYvLHpNBrAxWDLgvVvidZ3bFLinD7AAXYsr75",
  "key16": "3CBoecDwbVdTWobWb3U9LF5HYcEf9sRbWZaCZP9QtbsXt3G2nGyTujgoEJcpZMEEbDeB7CuMKzGnAH9zXkKbwZjA",
  "key17": "26a9uJP8QduDMx1pvAcENFezGyqhQdoysvytuxGjqkN4mpexRhn1Z3cHai67X89cWZETVJHKxhn1a96Sy7DQ8ZQZ",
  "key18": "66u2ERFL11SAbskiyPTzmQtPWwEV1v63thvFw7U8XrdWkNvbfgt9uvq8kjHoLXEsoZDBwPDqcuqi3eKvTJUNcMzD",
  "key19": "49euUpV11CMazmec8xBduTmCR2i1vZWKtmg7ERysb9UhsLVTPdRM6uzkegaTtqvxy1ePWfXHTnCBBHoLJfsT22ic",
  "key20": "5okeBnJZDUD3RRmEsUgB4hycEUg9ZP48pc4UEb2D2DY3FngLG1dfCPr85z1psyTJ3bTSDaNZFjLg5jgW9M2faime",
  "key21": "5xxWxX8mKrsqeMFKSYFo28zEUyQ5FQFMAZUQDEKviAUJL6xaXr5gyRDFBRD7WS3JqFSwkP7hLZ6Ds9LdJQoqZfir",
  "key22": "2YGPgCZLpC1sGAMT6g7LHBMHCSaFUnEPvf9UaEvi8SCHafmqrfrXoSPVgYRZJ4jvoLXPgKEdmw7zb8Y8p4uQf9cp",
  "key23": "2zqrV9tVhdeeG6AypqmKYhMKi8CPTrpxTmwW1wBvqLtrsPBvou7br2R7ELFgu51GAL3fLT4kJF6J7gTfSY5rgRE5",
  "key24": "rmu4rTwiFwJZyRCZzWrQADiRH4K4mbAZfS1vTcPPkPAh6DKKe1FqRTToYqVkTL2rMcWXEgp9h3amNAYzFBP89yv",
  "key25": "4h6vydpuWiBgf3dv5DMwBurGL9VEkRjjDUC9RztkYFhRCL6LJ6p7zJmE9UvjNG258NT93REuAYSScXn111TwepVL"
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
