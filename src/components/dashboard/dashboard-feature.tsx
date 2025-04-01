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
    "3LAMpLB5nRhNvAgLpCpakscrMFBkyuhqfdHUJkPiznYyxn4ECR7W3TfkmWyAfNt2t6vVJFJArZFutjZo6CEZVTYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PrTV7TFxMZm3qvF2C1JDBC1dTjg9Qugf1ycbqazyUixnoYWPJHALop2v27iyCj3aCkL9rKVDbb5Pz7sGPSK78T",
  "key1": "WMjQmqRansLrp1Gr6J7J682opk8XnTnRYDFsD1AA4UbNzN7zrTMepa39dNunXcwjW8ijMow1PhoStW99kNcJ1NL",
  "key2": "3EiLsEVfWS59NruYug5MwHWPWhFmobfMh9dUVgZ8t4kyASX6JsJ94QnkeYs8Y2y96oBneNc6oRPoXU4RSpQhTASH",
  "key3": "5DpdLWVknyC9qymXZrcoCoevuP3sjVMR2TboQ8xxiF47AvCjytRS2h2S9GdpkTAzSw4pX57SUrmP9XZwK4NgmeXY",
  "key4": "4pvMmhcrtcnVXtuBUW3PUQzEBRgBSk1PDu3n84BmuUSsBufEB69AgA6xwAUsvLXKEGagqoNEBnQHfdMGnVvnhwQN",
  "key5": "3dL4tDiP7oeLS1xL1ro8wQcJrfR35dcUNXQ5q6zzj3TrfBRnwyU4ui27h9afYYZ7e6bzEUobRGGN9VKZzs2UL8vz",
  "key6": "63QkJ45aaLUXHeVomSy4qJhpBL6fhKfoFvMQWZVGjVRBsTq5bVdazfrf16RiJ7FAsDZGNfh5iahMwMh1egsRDuC3",
  "key7": "2DkaQ5iYUCCWDCVm7yyFQD5B3YG5WBDEEv4SUtW6DayCseZzkm1e1YRYAbvhtywjHxZVgzWKKpSj8PK8npNodBj2",
  "key8": "354WmYbpjD32QXXBWojh9Aecawx7zqGL4JC2vFs2pc18Qhw45EkP3XbQdsvwFAqu93UmH5DYnw3ZC86FzzqPopMA",
  "key9": "2nF1jrVmzuMR4TddBice3VukSb22YeMs7FqunwuyNGMKdVcD3WPTdx4BFBZbxQS42LhDp6DEX9weP3XsYpHr6N6P",
  "key10": "3U4fAzMNGnG4SXrG86EwZHCCPU6dQYQpKHZqWV4w6LPfwWzCCoZzdtabBEzPLnfSZoxKwJoNK9HRozXfUaQk4hoU",
  "key11": "2R35DrmhdfXc6bdhZ2JZzLEjV5Q81BrQLyQvPkVdth294FoExbh51yz5iT3X9Vm9fzrJjYYuv2Yvif2tXiSVHgZd",
  "key12": "2aJ3chfqWBWBFS7UrWJZtd5gCUPxinX6cyrMUYxUnUcNPUigYyc59GLxmYywZcftpBA3FNnVdUszXBm4aPcK5b9E",
  "key13": "3zEuMUJno5163CeJKa6vHcSV5Da7SuJLZbN7c6yRisUQAb7mCLVnJVrHEBUMuDsgQhEgeGNTZRDuS6xCwxALnabU",
  "key14": "3vc1CV1shsQrmPBiagC73k7TpZE6jDUsVTrh4o16c2FJqGCd52q6jKF8j5XQgnb8p9Bdg4fyxQwEo9j4TiEZv4DH",
  "key15": "2af9JFe3MxHciAhCnNUsBnKtBbGNbrQ69opyWQsUCySSybVVaKrAi8p7kCYY3VF72n9YzRsqmPU3tnKMhQapa9WD",
  "key16": "4SAVpYTWkC47Pmn3ftBDqx3uRTnULrLdwUBvYMbtWY97u6i1kB9hoEBqak9XxH64mmEM5F6RK3UVKsyNxoSfcosA",
  "key17": "53nt6qMTH6JoDMiwSvGh4LgQJ59eQ3cha4xESq2Jp143CQPe2cZ4fh3MaY3KELEwAjyLHHjhv5s8Yo4yGKtB9fr6",
  "key18": "4gnUmgPrqbFtjnPjXPiQ2L9MctBUfNFYetbQUh32gnehaHCxMYuaogYAgkm9bXrU1DHrueC7hYyLUn53BR5zbzEc",
  "key19": "2YYbiM6GFrR2mK9xXxuB2xzQyDyXdJ2cnfqqTaGQPK2NXBJa7WXjBF2nX3ddgz5Ad4unYwkaUUb31hkxKaR5wtFC",
  "key20": "37vMwL3e4yScig8fr2jZp282bAzLnSj5CnxTDHMuRYjjdWLXhzXKn44vFmXJRvKARY1estu88o5VXmXB6NnmrLde",
  "key21": "4So54QXZKpGz8zM3gS3ZrogQsLbumFKeSgTsgzz2WpYrtnzhakcdUwPrjR8Se4k6MjWS9MirhMTkUEEHQn3csS3A",
  "key22": "3wss9JHhzgXqjtuWzPXvkHxBpbVWMwoXFyQ1XXDN3jYBZhtVmjubuKd1g6386HsHFueRdYDPLAhnj1THnbab2YtM",
  "key23": "4HVa7Pk2Y6ZDor3MYwyGK8WtnpLtfDv1SKU47u55xBwuTDUr3sbcZHZNZz38vHin9JqVxXNDPkhhUMiKqCRYgdD1",
  "key24": "3TwYPYbtSdR8zizZK3zWEveT9bhKkEcr2oFMisCUeN1AtkNSSBBAGgffNnc4CCBqsSc7rQDmsx1rcZ8iD1DG9REE"
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
