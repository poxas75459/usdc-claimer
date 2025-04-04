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
    "4yeRZaSZGCeeZeegAM9ZVmUwFN6Bynbd14FkckTWuF47QLPXXhzwHJEy6LVp7JyU4zcvvjAPfeLJhwfdqnWbdpNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuHTU58SfWbMfQG7PocmSpE49wPfKaS6nbyHNroSiN58Ly77gaTTScZnKpupAgqZY8YU9b1BLAvWiRAii3Dy35Y",
  "key1": "5p6TF5oFPWChHSngLHZZCbn5x1Q2y9gNZfwa78tH8QE4RBjAjaJ1dEiqdobNPvgfAtdf5Vx7vo6sn2WsXTA8prVC",
  "key2": "3ZG1DRgB9pZUhKXHPDgQFoyjBqJwT9tgXbkMS85LuZfY2Hszi4mLdpT3XTtmmguSP5QUfPrQ1KFGTTfgNHm6wme6",
  "key3": "4kKu3groWhpgt1Gp6Z4Trj64v3UrBorRVoeYSSxD2xgpwpRSmXTV47YmMcAFaixrew2ZR3Bs8kpTG93ZDxqXy5B9",
  "key4": "5jBLXpiYwH271mgpoazsEKZa18MfyjZ57dEbdbjPGMaa5wwLLdV44hmNF4Mz8iMGpVdGaZPnfqkEWfFXKxS7WTTU",
  "key5": "3mb3XS1mFf76K37t4hqMrv8sx7GAwnvvV95qBi9NRLwcR6c33QLr3VvFJZGZUMqh6UKbHYDPYvhsqDkzfTzTrXu1",
  "key6": "4J8fjP2cg1NvtsNdmdo9oLWU1iaYVu83FtVs6RhcEhserxVXWLAZfN3vfnoVeZncAwXwqCKU4aF9UgmdLtLKJbVH",
  "key7": "iuKc7A48b1S6e9yerWsNytv897uKLzAQ8P3ngmr6a6ivt4oYAWUrGP7X1eViGrh34HBNpJLBLEX67mRfk6B1o3W",
  "key8": "W4eYpWA8CWTGum4yZLyVaDt8var8hPD6t5kK3q5yW5YqqjSMwdgKURZV94656X7qijmzoWqZS4AKbbbLzcHV7Gh",
  "key9": "4QTN7rkMsAjH9oqpeiYLNiJxaKwmKMaB2r1xYo2TByFrieMTg5ccu42MUZhHCXv1vPHeuG8ADHXEr26zDvtFbTqK",
  "key10": "S3ScQJBiAKQAVbNqFUQvVgpVXS29tAwV6rX6Nxcfm7vJk8nGMGwwT48EttKNekiY2onCvr824f2sy9VzMGjA9u8",
  "key11": "5WCqnBca43AA6oAAwzkiRXyHMGYLJPPCmkS9HofEJ2wmJQiqipDJWhydAVBWQv3q3MtjU4FiNRBGA3QY6djAY5hk",
  "key12": "p8urdXHyiREPFosDGF8PAMvAg2ACcM8BvTRZJy5kTgBDLjHCE1qvK4PsYJYb3fsSbWFNcMCdChJ5RYVdftYnYw3",
  "key13": "ChZ9mcq727g3cbihiBnxGPCej8ynoSjiUEL4oxe9Dmv2KAsZECaGjdDtwg1rd6Nx29PyQTKT99vMumjdFBuLkLa",
  "key14": "3E3DZtbNbbMYTFcYTPGA8GJKJMbxEvoixt3jkaU8wGBiYmZyayNtqEMedc6LrboMHRNbupgjjWRcXpfmfTdSpQ6h",
  "key15": "4KPUJbM9CWkWJZejqoaS9UM8wY3p6RaiRMGKR8xt1PShvc4kJM8mffCKBYLxZCkw1K7VjZTCe3mhx8oJWXpXjmfa",
  "key16": "7XvmP6MGkAc3whKprJJaq88VMptKAgtkDY9c5pMoFP3fBFsAUMvkjuqiMQtvfqatAA5xt3ztvAC3eAAy5UwPjh3",
  "key17": "4M7cGDDUArYbZNSXkpMTkSfFxuz7bPwLTFE1KtqKJ8gqpuTKojZg4sQiqrLURpVDBuYxFoF3TAUoHYNBsnqGEu15",
  "key18": "2FrTSLjKw3QXZ9EryMFWjRoVxEHtL882KZ64osKaYLF6nF81oQJurMyGpHSM4ebtHAGnnZAmN3sRbpLSMJuqsUUC",
  "key19": "2wFcLcBrxu2HHrzU7A3BToGi9vK2GnpvG2sHPA8JXguYfeQUxTB7DG9pD9DPrMVSWQ25w91ofztN2fLDAe1Socih",
  "key20": "2CQt8cmpfwVDEJXp6hByNXXCNMFcJbs1QiMePpYYhiC5ngQ4MbeBJj7gq6nwyPb5m3tGvBb3AmH5Jz4UTPFaz3oT",
  "key21": "3UrfJMRasVzSaYP5ct63sVHgy5Zv4Uk8GcKngGYNZiYpzs62zE9QT8ZV4rd4xYm8NeHLtKFz932j5upGumtUCHZ",
  "key22": "2tKqbYkF3kiSoQb4aQorRusGdMpCGRVNEHaVkXAfhPddWTTDV2sLa5yAeLCb76a9iN1We1G41xGFRk8JrQzq5MHw",
  "key23": "55P7cGL6SYw29EzfPJRPUJp7H444paFqL3PyhCcUQhz9VDnzfPmv6t4ZbE39mFRdzFCy1xbVeEeT6K7E7UyKX7NF",
  "key24": "27ezkZQBaWM5gnQr6Z8xHSxjPQ2Daj8ik8CQt3zQqUypS3eUuFfbeFjeQ3rM9cWRjJy5XcGsKkL96KpgWtAZR28x"
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
