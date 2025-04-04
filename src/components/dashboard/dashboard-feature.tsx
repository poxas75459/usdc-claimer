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
    "4zifTEZWVhJ72pvov7UotKgVe8b69w3apsa4GtEcU7G58sNNEEPvMe6bMz8TxS1QULLuEbd35H51ke8pHKiELMoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qGwKwyDK48YtAvxYToPGEEuekXsGeHkXyziAPPADbDE83Lh1QySnEGGPNBhfCzj687jZY5XTtEDPahmxTC4twbK",
  "key1": "5YrCQcQouFXf6LDdJBZR1nPLP8orsLNyYDPNoBPif3g1tL73tsNMz1cJ9stgweHgvkfBWvy1WeNBmgWSMQMXNE1F",
  "key2": "5j352usxKMLpF3RxD4K2WZ4UJegQb3Cv8BqR4ZWqsoBbNLwpnEjw6g8gK4hTSBmvNois2ty7K7P4fdtxiwuw8LiF",
  "key3": "5ztuvvJrW2CV7Z9mpDDkMv4bpMBGuEyn15YBE3cF82NWoWKZNSe31ZLhR391frAt2yj6gsVpVBthpzGnDgRZz3iE",
  "key4": "3JWwpYrwAKUQJnokoyMNXo3HivRBWpzG3jZ6UsD9AaEzM7gRWgUX4iaMK8WbYRuuUZz6sN9snpRKiNQAF7wZjmLt",
  "key5": "2crZf5WvkbeHfh1ZTJ5AmyYZGnCsAXcEzzgAAtbw5yL582XuQzUZmEUrVaLCprzXhxLfpRQhxiAY7tKG7owPmAkG",
  "key6": "4KL5c6neKpKZQonHc6y8MsQGtWW5QN9ApAKKFs42dYB6cDqRPrteZSuYKavBx35MEGfZmV2SMPgVS4T8K1waxXsG",
  "key7": "2LF8NQviMqXWPRrWGr3Q9sULrJ4r785khNbeN7PXMQXbnEwVs1Zh3Qed7FWXdazFP3eSRPNHPS7MVsoKYPMKGqAM",
  "key8": "4X2zs81UUAbiY4njKfnSJg4ZYtHeyvvGEURXZfcMF1GKaUZ7p3vp1ZBK1pxENS3FdmeMiSs9HLjL5eEfKzUetdfR",
  "key9": "3SWXCcNmA2omcteAyxdgHGG6gnD1VEWQSra7JomJVMyxNzoH8j3Eu9wDbjtG2zhEfg2UYLpcmSMaoP3u9GHjg2H2",
  "key10": "45ZmXM2sZa7coxeLc4Ls5JZWG7SXjMpUrmvQ97Az9QZZ4izY5CBs6xT4Zjt2nB861q1gd48Y2wownVV36webdpfp",
  "key11": "3dSBApZg5T1EmYn8iA4WnHiiAjeHMvZJiBMib44po6155AV3vZuZtWYCkWEHHGJU6d4SEQycEPGBZs1sXr484vNg",
  "key12": "25YmjVC3bkxWPTXK8kNDQH4J6Ndgf7sbQsuqDF56eoZDsknLzjToEWgTDBvx3QA1etCTZ6nAfkVbmYBnYKaQNDXv",
  "key13": "5XHDSV8VTgQ4on2xD7x7sZvDxn5G4yjaiUkivBWbk2Efp2LQBJmTyW1F6CV7aror1f4sAfRHt3SxkGFpVJPt7vBN",
  "key14": "5SthqXkRoUkEihENqEi39t4HHG8YgNZ9uLUL8dvoWpYmbYmucXLGCG2jLWEhUNp9Y8DfVDdsLPgsuVXwzZMevEXs",
  "key15": "4gTxfZQFoaWN2dKVoqsYxEbRiLoCoYX8ikf6ribAHLj5aERT1zydVr6LHfiegvXifL2cwPSEqojycakaBu4JfPeE",
  "key16": "3KE1xEXdmBzThnAsBJosEYACWYFurXUr51h22hkTTgSKef7NPSJTXiRMzsyb4MKQNPopk5BkEHGWeV4mqX6Sx5dN",
  "key17": "4d8nSv463AaTeGW1dXkCsLyu2WdZrcJcnxAhxdT7TZfRjL9npXdg8Vd3V6oKajAW177itezXSJcjwyGnWC5JmzN3",
  "key18": "3ZwtKugZECnWVbZ81nR1NnWKh5yhUwwa9oJf3To8AGzv7URTUNZEjr5VfF5BaK6c7Guc5ZTWhEskzoy9puUBPYMa",
  "key19": "D7v1uDyWCXkmzffXbsGqdZ4kgE77SKvf1LZWTJU1NFu9vHrkt6ApCTDw8cKZuXdoWb6DvVTAExnovjWbFjvaaC6",
  "key20": "5Uow5izQ7i1p7VJTouVWSoSfPGM6h2B2gAHqJaDVvDpLkfDDLrK8aHsTaU63uqYuajDsZRy1ZVScJ6y5bQVjxHSd",
  "key21": "4dhChcDaJpZFJVAtDSae6mmUGa2NtgWuMokZQWL6MBqVio9fovpJ531xaqkNkFAZV3zC4f2YrChNGAGttyg3ksVJ",
  "key22": "eiiaiKk7hdzhAcJKKSLbQP3kkhzBseWVR9eqZWxpfr69QgsfdYUsjRaKChN2joeALFpn3tBFxrdNmTCvXwueHiD",
  "key23": "3cbzTwtAv3uA2Qc8QZjqJapTZR1Nz9a4Fc8bMUCg3Jq9niA6oeJ58yA4JuLbbJkT1jU6Tc6SCrm4ySGJvuBMiiNb",
  "key24": "4grWZgS2YNCuzN4ciVhFwxZNRau4EubznWDWGbTbU49jDsiJGZLUWWs23Wr71it1cZE45oruaQwy1QfhZoD9oCXc",
  "key25": "5rXnYytu4AttRRuzq1ka6ZRMFUGZWgFdvF7vzFGhkXorzgojCHHX3BnuZtsSd5RYEASkUr8oiasTT8Q1Fwj2x2Qd",
  "key26": "5KkbHv37BG2H5n3aihJ5FFA9oLKFitn5zqMDDrGBaJNkgydcXDxxzSG899aYEHtqrtaEkUR81D52vFNoCEA5CiAZ",
  "key27": "5zcpspAqTtGaoLXiy3ueqNYzsB4KGnu4bgJvMdKmCp19P8LsiX3XYVgjBqJGiUJPZ1mJXPmYeXEMgDsnx6iVYGrA"
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
