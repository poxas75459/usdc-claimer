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
    "42SGfntKrLDRGfKfw42dfurXUAh2BsTTT98kC2BzDMgPdeEGRzXgENxBZo6M7Pi2s2nmBpyWCMzN2sPQ5SkHedUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1rcaTd23a5pM7NVSJgDRm5Pxrpbvywmu18pw4bDjdLfeCNoNWbE7dSpqXM3MQiW82yyZozeevPN2GMegUyH4Yd",
  "key1": "5kR4Jrg8LfVuDHRcP7ioNi8crY6VFiTE6eGMNZdfRLfmHFhFPYJqFRJWJ6Ds9LT872bjtUExx3fcnBgG5AmgXifD",
  "key2": "ruP2ixe3W7Tx4kcPSg98GbvU9ZY7EZfw91tALdKUtEEFimyEkTwoSqqKhbW1ywXDGpaQ8foTsc9u7dGqRMuJECV",
  "key3": "5p6bC7iXWGVbL6GC9sdYizogSXeeyD7rVkdcqgqzw8zB3izV9TEuauh2wwWpLnBjuRXtZ58efLnPhZCvx7F2D5CY",
  "key4": "24V6e64GCGrEpk2DAnYJpScbre6PqiVLFbvT8DoGcK5MfDHrrhVSnT8NywEjFmkmeRZKLKWPwkcEHf6je4Do2gWk",
  "key5": "58XSSZBXRFkNqrMaNwXDQhvWnzdPHYRtzH1sd5HgdreRFWqPLwCYEFp113nG94deyGQ4oSs8Zug17GHhYF53Cxzk",
  "key6": "2cDeocRTtCDtyvQXGyYpThvsh4JgtopSmHMyjapGuBG6nhCqQ8xjsdpYbzLSsPM7aESrRyqmNCeZkejLNi7Z53v3",
  "key7": "BzEHDJBJpykb2XBXDjVikQNd5xHveusVhMKuSDhGrSfoC86BSr8uVRFNDDxjWfTHih7iUCRUDAigu2eWtK5jHdC",
  "key8": "4J5gsGbZg6P2CzY8bkYqFLDprBoiquXbfwYqCZv8gsuY9k5kBgQagHrR7QQ3ug8dsnydPjPdSky9ogayVumwoPjF",
  "key9": "3PSFVYMWvN3VH1ZWUdkunVTnhKnY264WS58jGoeQKRoyLz5fwPPswUMUioKvTm9CEeuP4bjKW93QAi7toh535kB",
  "key10": "22NmnFYuvBp7tTHPQBUsepPjSxdn4iciANoKC7VxEbLCPSC9V7k9rfrfbaWtFzhMpQRVXbocEJNPJ2jKVKbqmSam",
  "key11": "63oLVUU9jYcYrpf7FV48EpQpqubzRYQoDzAYApn9jKTwB2rw2a294G7JSskhfPgt4R8eiPmJYAb8fMumWJqpMn8X",
  "key12": "5oSoGQ5oxJwv3gk4comvyX7HcEd4AefJoMhi8exH77AVfGEegj512eiVQ28xjYRZ3NLuTsKwD3Ty9xGhKzvkJAZf",
  "key13": "4BAGCY8roSx2MpqQnk8xaDLQNYkPKDP9hH74dJHyeqSBEuX6giFsHkSYGwF7h9oMJqMQzBTvcJzHVmS1dCJpjAdY",
  "key14": "4BuAuAhuyWsrHmyLanB2AmnFT6bQnhLSur3o3LP45go5wA64TQNGeHaLr69BeBQnExUNaSvDBTBExsKqsXfWSVx7",
  "key15": "5FQmzUmBhyDkf3WHHP1MAdir3nxdqzH8Mr6KinRmcuAVZgXvdaBVDypNVyMUmFAFGF3WhngRTcCB9nGQsEJtyjq1",
  "key16": "34fQNQpgbXi2QKTQzvjD9wD7zXrhiERyo8SRvTcKuVKE9XZ9z3RgPkZfBDZBUite3m9YAoQVUwZvD4DUcho9TvDA",
  "key17": "2X6yAsAUxQYFPu1JL6UBbABiTJS6PvxA4sWXmpbkWy3nN5SscV2Nq5auVyrUwMKJ1jgEQfx2KjRmq627HVPzbJjm",
  "key18": "38w6PEBtG5s8uqq5tTN4mMjitgLP8KNYskNmSrasqGh2DBra6y4HBqNi7hit213JtZkodTNzKYAgqJEVSHQZHq9n",
  "key19": "mDmxu1rD42BLewM7Dmropo82eUC3vbdhQSppHUn5U4Rfoa3UzSrNnVvTtPEzg4Ep37AuuGKLoDsqraW7mrxE8SA",
  "key20": "dJDKB6pYfXyTStc2g5n7vgGoA2qJbWKtNmJ5vnCEF5bTa5Xx1jH7K8crVXoE4sbLhHJt8bushV3Ly3JVxBGfxHe",
  "key21": "5cfzyf1R5BXP9EqboTZqNWBMufbnrW9VPVk1Nc8riHUF6mhJQzjzfPpqDh1HiNoUo618Z1SQ6BykhZifJveQ4Lm6",
  "key22": "RfipDMyx8ddk3uPxk1Xb4eQXQXknApMNNTUQ2adVgKKyW89N22XTDu46b7hfpAr2VtxepkJL6zkAStgAr6sGYHs",
  "key23": "2RS525PA6yx3tSbJfHo3LvnQTtxG1NbJtrZAp5ZAyPrg2BjrhT9YH2yUtboxFdv1XKs1sxnLbvvPhcQ1YnpEDrAz",
  "key24": "644nKG3iZyKHeM5mRaKTNW3WQPAVNaFunWz5JT5dyhpZx3Vc9UtTHQZTDDoyCPcdQu2Pk7sB8SHs7y9HXmg9C8di",
  "key25": "4yLr37CUEpBKfUKoWqXuUmR6hiJ1vhWELNLFHvTs2FNvpxcWe3b2PbuWuwcvAcbuSSrsAi4fmNrdC2xj76KFeiLJ",
  "key26": "5aNMXvUXCgV2WX1jAz9CTohX3m1rsdQggJ3ykeRtFNsCUNuT2S8ZQtaamud6Mb3j6bukU2PcCAYhYBy8c1EqFMLw",
  "key27": "3uWVXdAuEvzAthGSRMjj66dML11vVSWcBoDCcbD2Tmbw46J18nKUVGGuGpcESfbjsvkwSPecBgd3CVP3fk8ax4UM",
  "key28": "wDZSn7LW7F7NxTbsidbvn6LrG4y5dCprwThdU6kgj4K1tNXBcvY9SNDVGfPruk6E9hpx6eYftBUBEQs89c8HPFy"
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
