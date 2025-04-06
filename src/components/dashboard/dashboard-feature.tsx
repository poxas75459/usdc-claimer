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
    "3KDDwxMkXX7zxtQgfbMpTNtverSvUfj2m7aYYnuStTEdwPuwCe1cqL8Mxr1iSmGgrb7knjLSwPwvD2kUf7dr8AGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UUERGRdhRFtu6dgamFfxKJdgA5nRGVmRfDwuBqmwLJ1UCCuYmwraj8ua6199kopSQVvMoYMbqB2o7jXSS3c5d2H",
  "key1": "2CVCJbtWxYH1tme25sX4EDVy4vPUYNsaAMXZC2SRHpXpgAbJdJT95T8msPfeoehoBoQsiYdVZpDKk71Vw2ZbdaJU",
  "key2": "QEwYMJLcv8EpLwJFnr1cQcFja8fSrY9V6n9D6aqtfZmdpDn1bZvi99UtdtmpkcfM8MiVkQY9HJTPUTxGZ7tSrGH",
  "key3": "27K28ZqzSxceQcUQdQTAVeHH5CAUtVbJqm6zt1idvCmE1Sszkjsa3Z9gs7rmmhpTeSEwwZCd31mFxroz4hWcsHfD",
  "key4": "5bKFqgvU1VXdLyySRPJQvu8QWAZWUxMEicvdCE643aycujSDw9ox6gsDhpUtzXKv9YbK5uFB2kshbYRvfCCxEDmj",
  "key5": "4wMFcMTgBtjsTN2fMBry8ZLWHL7oThgHGxwLLRYuBfXYvpMcYcDUt35B5n9sqmCUgnvzGBvB5AV2U8AHzDJpNb9W",
  "key6": "5gybhf2XmiHLqmhm9JjvqngsktJTEATnJE64KKT6DC5pBAV97edJQJ526Lmdb1ABuvWxhg3e15wPoWuH8squD1on",
  "key7": "2PyH9oE1GpWoWqLLzNxohzAfrSbrgCdAKzFDsTGh5JJs48hp4TWe6upwoEuZoVmoBkn2oCm1q7P7FMQiKXKkyqXb",
  "key8": "4RUkpLD8TVeiKAqZKy4gDixvyPg8MYKsFpopTaTaRSHuHX4utyUwqNjrekHvCyLU9YMJmzaTsDFxQAk957TKbM5k",
  "key9": "3GNEbSG11jxNTbkbYAb8B2d1YKpBm1huBe9wKoFxukeAv2CdYoY1Z7UiXkS6zZuxEe5x4kJ7hVbYbkRmo15RroMH",
  "key10": "4gFzf4jQM4Bgn6xqyyDhubc1qfqFP8khZNGHaznG1Af2BTovLM2YTPf5EZ2o8YAFx4PeNEz51QFHcwUtPHFFuwJE",
  "key11": "23QPkTSpj5vNes8jGhht7TVnYywpMSMEbBTZDqWP4RoPXbhNX1tDkxxxNTSCmopiuYbjXvL5gp2wpCa7eTb3Ct6f",
  "key12": "4C62C9g5wS7agvmKKaCtxtsSpFpB7diWSqSEdDaXRShjMBTSZoWcPyWUPY4CHkFe2Ayv8sCVqKy6AdRRoQkK9pJN",
  "key13": "3hy7fc6TLqJ2kDj19kqu3KDwtXLRQv7PXR71VkwsuDGnxCNRnFQB1Av3WUR52Fz8hVaw7pB4iDcfy1VJw8hqYsX4",
  "key14": "2kNrP2c9P29gwwVWZQNR5tykiCcDpuT72nucEkVs1bBsRhU3kSWqrvfW1k16DVDa8vZ1gJ1B3eBBMkF2F8jdzhkN",
  "key15": "4gy5dNc1kyXdgXH4qwTfZohHggUDFnBPmZvVabjo8ymbTB4C3we26ZMh7ML9gtcRyAaUMPnTcUnocsjoHyvd4sWP",
  "key16": "5rUw6dUoVV3caAsSdRibN113JL3GUVDcQNDt4XHE4CABknjkLUCCd1MgZLgyzQcn5qf1YXyCadANXh3wa5czDnnK",
  "key17": "2frGEX7WoGDDbzLGRj9XyPTZfNEV9juEbTJ4yQJ6YC5YWSgUbFHUmgbZ6rpBaqYSF5Tq9iQuTvZ3vBdLKncDrGJq",
  "key18": "5p98L6y4awij3uTAYGd4N5JShh3PWE7DoBC9fgRboUNvs7znYaVSscXkbVQtYoFBR2AQNAQ3ptD7kpbyckj4TJrZ",
  "key19": "3UHbRRTE8oVAsyqyuu6GXzaWKsysxGkndyPbJeoUCUR2NtXDKxEp9VNtRghYjDs717ur9ZK6Y41xXvZ4SeVrQx6a",
  "key20": "5pZySDqbbZmYQzfUeZkrwjbBe7Cj4aNzeeWVUmFaFFZ9AZKBdNbggqjw5dopnZRbQt2ngSKqG8ycUqWRby7unv2c",
  "key21": "3uP1zUKSbX5Zpj8EBTeoHFYmdMqjfHvses3VEh12r3m93kNUx461jtECQyzaqBWgocM6Q7AzCK8GKPe3BYmZ9bze",
  "key22": "4fwv8kDsYGDQj5REgDdCE8MvZGiWbfbx4GiVTQ2tsFQvpt82ZFXCYa7kzbVLs6XBBa4jK15mM9Dkk8ryredJEbFJ",
  "key23": "3zFhcwMgQYi1A8dzVcdNGZkF3n6v8HyWHEmCpbettootXwwpRdnwXKRraSDMGkm6KU6Zu16t1kRBJrgkKN4CXANf",
  "key24": "3VjUiZSXT1YEAL4kbPdLTXbdVpsgnRGQKTEHpBNsFv4FNDLv7qn8ysYFPDPrGM41LF3MpQGWxLcx6LdCwBVbfrQE",
  "key25": "ZzhJniPB7xEZ69GUgVdnJqE1yHh1sbX1Q9ncTyXaaESq73LN22h33w3bfuZTwG7czLgjTuiBvJxWNzcwDb2gXYq"
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
