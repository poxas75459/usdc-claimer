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
    "2HU8Bv8svt9UFwcZSwYpunaLaMbWoQtHSxpmKeymXZykXosQRFDjssjgArk1PtpM6gkMTYobgTkCnoqQQKwb1aec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvBYXFqJZoVDPDquLBgj8mqB7Egt9NbqEmczntGZWDiXyksKa4tLrETtmNfnDZqbpzrkhpuj5spwHC8vT9Lwwxy",
  "key1": "4Z9FiAnbfpcNjnT1tQueshMFSEQF9yvpx4bsrxbv2GcCLRj8n9QFi79oy8ScDLXxjmPyGJ7MRWvoJ7Zq7tRjExmo",
  "key2": "39N2kwEkGkmsxVAavJEibGL1BT29oEJg66qukQHsdR2UiGwj6NyLtk9UUoepiR97JE2iawtbBFf53fonktQB3jWq",
  "key3": "2zEfwge8sXJ39oEY47LfVD4hfCGGT4UDP1QeZivfq9nM2wePZAnsoWhamLLSKdKakXJDULjNrEsu3oVf4KXFHaSE",
  "key4": "5joydYKgETVXjzkSfK8AwknqCe2Y4hscvMnpHfDPrHjPxPn7JzBQYUzfMvQVmtbhd6PBJzyTxA6mDpn8RJrX3zPb",
  "key5": "3B9Lu7eqn83jWU9H2hgyTL6CTnHpHocxu2mpEczAXnUcB1fFtQcmVf6Z3L2SBuzb9sW1gMPfXkk6nSzbM2CEV16f",
  "key6": "SX5ihmW3M66XvSB2Zx2c3x6CfTsN59pKB9KdU8ezV67sLTud24aKrJixsUHk4TyntjhrAdKbvuKT5gHF1T63gvL",
  "key7": "3eEcvTBxANvht6aPt5tmr8qpfgqbvaeHEA7e9t5PeGeHHghQVve8hC9jRScfz7psr9g65VhytexAmQQo2ADiRYag",
  "key8": "naZuTdobrL5TmKMyYy8zvsD78ELwdVdR7t6GQqcMKtr9HehqszwMb2yGWmK1c7wj894YmNpLaZDq9YUeV9kRy2e",
  "key9": "4Xv5Lfs33irAG7NLDZdy3eeGBCm4uNVTuvmsSXAK4eAWcNhahXr9th3HPWmBvJTLwBNQKjq358Gchu4SJcLxzCwM",
  "key10": "21RdN5caEtny9hhYLUmzJTKRMuQmeUJpP1rxM6AXK2ReMcezjfSWubkXu84UtrpawUbxMaSHr8x7cih7U4JTQmUK",
  "key11": "5zAVcrrY2q8UWwv8WxvjJc96pXs8cH69H4PKVpGW7rgM88Md8tkuZCJR9CEnjdGgZbxG2U5GsCvUruPSKmmAcAnm",
  "key12": "5Xq5u4KnbZmi914bap3BUnmQ5RoAm7XknFZxysgvuQi6LTFEE7QNjfboq3TtYdQZ1T83nj8BrBJyQmUmTXhbdhpp",
  "key13": "3ygqEAPcBf5UjAieQv6nEtYESTYAku6TQNJ5YQeBDMbwWcoubuZnjsD6jpsypfcGyHpAcuCWyad3Gh5DstHsdK2S",
  "key14": "piFgS36GQ35xGpvSMwSCNvQ9qhzzn13G1GxF59ThKahpkDzAxn2He2UN8KHMjPYytNBD1vwnP7U4JkMcv2obBh6",
  "key15": "emWXUs6KVtCaxeCABt6d3oeUMb8BPfKCKbei3LEZdpyHZgARb8uHg3aoVdZZGjCp1C2X1bm6vVdEggVAixBWEbA",
  "key16": "61T9kERi9qx2xdtnHzY3uFUoWqSViNrT2VeMmky1wLceCabrhnj3xDU4LiYRzmKxop3f8RtTNxeq3GPXWNk1CjEG",
  "key17": "5gVrXBiHo5w1QDodLz8E7q1oFk6HpTiKs4uzeLUsb4vYizK4wcHMoYdBn1H15PiZcSLQxan45tzH5gcAf5EaQcpM",
  "key18": "2Nz7ErLYL7ppcM1LzhqdToSnyymBBWFGxzPFn2kkvGpVso72ovp4GPt4npEQEXPV3Qia4EM1zg8UhnRmKULYQuNV",
  "key19": "4AjG3Qi8RzPBdtb76duDdrT8EFr3xqZN2F9zUKmHzNLQRSAaNaX8v9ydJWFrW95D8e4XWRDy2sPG9V8Y9vyiMgN9",
  "key20": "2MmMykL4cD5sEXA6EGF8sko734WD4EF3HPinwTR863nsKE18ik44HwPsyMw2chUny47VJsA2pzZ7GzfGPEJfaqKe",
  "key21": "3tjFkpii1SCvejrVKfnSU99a4YzVSfoKm3j1pCT2EcfMUjwfscdNUASQmaGvT5bEGfvPHTYJYGpHUDQjSj5ChitW",
  "key22": "5pEACqZNHAFc49Ehp2ddMN6NvJHgzhXKtCvTALggn1r6PYicFZzskJnuJSYEVvf8cAPPsSAQDUw83oxJY6q5B1kt",
  "key23": "5wrwZvDv17Y2epaXzavCYkg7doQLX4giko7WbnruwwzJuMxEiWjAeWKAoAdMgne5eMWv7A7YNNYXtTZGLN7cf5my",
  "key24": "2y5nsarpY2EEJgdT9uGFUqrW3uuC4kK3g63EzSf1cQjGVQxusap7T1vfhndphnR2wjFuhhxr6Fs7Pu3mdomZ896n",
  "key25": "mzyPnMXPynmkVQV1rCcTf541v8AkwDgN1LDeQU47Qux42GM9TMbpD5ZAJM1w7it1mSEEnkutuoPVjZECxzQvVpb",
  "key26": "4FtXXLbLUKD1GPo7MprmUxTccivTtXSatdvcq8ERktEpy5Ch6RwNJxXdKVfoyqcUdEmep67E6pwXF3Z7FNwThFMn",
  "key27": "Hbwj6YJDULMrC4SEuiopVnyKaBDVJr7YN7TBja5q5bg4WBRom82zWmDY1s3QvmcKnGdUmS6yfjRPmatEjTRGvfc",
  "key28": "2JZseaZQ4Ss9vKqmZXtFi9K7bwrBhtMhvFLqxwv4rpouLK3wLU4cfJRimQxUSgaq7d2kffAMfS1TToZmHzrRxsS5",
  "key29": "MiKAZXwKo51EiF8HVfKtY5uM3HQPUtzv1xaAxjoW87LSKwsHRvG84C92NjfcQvL6RhK1FKcDBbx572Y4jAa9TSB",
  "key30": "2M8Tw9Cii5zz1c6UBAXLL4CDu9rVqbhenVGPSoM2cnEC53V7eKnUCGofRp3SR44c6mkfNo4mCMYYtyYmi8p8fFMn"
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
