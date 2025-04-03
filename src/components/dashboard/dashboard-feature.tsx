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
    "21mWh2A1myvSjvHkuhbQHegoUKxb1D7E1g1jyBDwBCuXbahDnFfZCnNQmUQSMb5WdgiKA3TemCoc9ygpqXATHrEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dp2wAtXt48YSrLyWgY6cVGK1o5RwAJcBqL6aFoR8PHRVmnfCpsDZPWxLRcpuSqntndgT6nK8tANvnnK4BtVNQoE",
  "key1": "5TuUJbfhA4okXete3pQZTHFceAayX3seNyitP5vykXYa3cNEJ4wSxtCoiva7T9jAc2ku3y3uARtTFSrFNnhGoCa3",
  "key2": "9sUYvJj6oNv5iXgFL3bS97uhEQKDD5BX7wbn2btYTeXKKYnWjKbZGQRoW7CQ4hmXDBVvTyyA8D6GXzGTQnaKoxt",
  "key3": "ASgFjyotzN16xECs5va94j5nYipkPHaD6WsmVbYDkvBz7Gqs9E2x9zft432MmRhmnST37JUKhEAB4nfQGnyvZDZ",
  "key4": "CBCCGA6TuqpS5rupgGjaF4ksEdeedDTmcCRZJPV5mpVh7sw1tGJb8nq7S5bbd5QsRu5kyWxCLTX7nDQN5GEpkDL",
  "key5": "25SWK9CU1Uq2zmrDLgAAa4GGjAcvQwAaW61YoUSXtMaM5N9w4bhAUC9Rui84A9ZXSqM2UjV2sgSWu5m3iAZKoWfF",
  "key6": "3Ka8Sbt5zrkb79WwDczh5sbicZjHAinjATuajwFT21SWW8kXFq95dk1DSTjsvTZyg5cK8pUiptDB8wonj32auL1y",
  "key7": "3gRR1KrfU7oQWEQCzZchSufqLJfoBwzTZSxkZfnqxd2MeHjeX3cSsnnrmMUFE2TsMiQPVxDTWYF3mCLEtMn3udaT",
  "key8": "3nEnrywwsQc546bzzEutEFgdHAwY12v2T16XdUCu6yq82XR4b1xc8fDYLCNjbUnaHtyYwtNxTQew9oMQffLpJDi1",
  "key9": "TkDoeuqixLLwEvGNiYpfDHp4A8LmRiaPbQudieRHZPCg5pKpMnfvQbXjJrNuq6WUAWxJw7t9Wok2j9o3ENLc4vS",
  "key10": "53ur57rrK3KwP759NmLS9MhwFd7Kbp8uRXm54e4Fu7tVfAaMr7uy1wKw3MXnYR4Pqj5geDSXiAsK2PbmZRAwJmBk",
  "key11": "2WdSRnpdFLPma7NddhjFfyU4MEw5BR9dT3X6F9x8Ju9Dtd3Kq4pKbf6Fnump9KbF9PghLDJMfptWConnKxFKCQj7",
  "key12": "2FbgWnW83YSHfZu9nuLXfYuXzdq8ZkSjfTDoDPFzAe9NiHa19wVHRY1F2oap7aFyVijbtPrcMKb6Yu5jVZrZ7Jof",
  "key13": "2Vg9ydpobknNuxWWidRZ1YSqfXm6GSHhdGVeFK8skhknm9XFgkfnwBozvtgkDz9VLhtHu5SsfSD4tQVGZDNacF2L",
  "key14": "57MvkffTG7fjudqUdvMn1NULAfnDMNaPVhE2kd6KVA82cviXWrtq8x4qXBRipWns9fstNQbJQ6Cxi88sYemodCPF",
  "key15": "4DufJuGgHU5NKtZ2Wf3wRynTn9u837U3uutpvSyVUdEN4wP99YqUAX47sQNjSQMCc2g8BGfr9fpBgGskjqFxVjtM",
  "key16": "2aV34J5oMqaNAKYeq4EvuhtNN39Mo6awZTL9gf3whn1gEPVJoc5XYDqa9PSsJZtUS6veqNo9jws4PfPx5TKYxqTM",
  "key17": "4tGyZyay6fKrMMLGFqUkmqk9dyrdrbLCVUMBABsjD5BJTcEjphhMHAigQ1p7ztwY3fELjP5Mhx3fFDDJWJZJGTu6",
  "key18": "2EUaP413ZbH48PmeyBKp1YhRodzKZhBgnBQZVnYYDBeCAgZ1YQkCKdTWpmZCLEJbRo9dp44ZBUbTJmzJJjokSeEA",
  "key19": "Ph9EaomLjBSURhmM9b4igXJrUwEs54CycCxUbxMPNRpCkdpcUkuNMdJ7CLfMffoGoazLUMc55VKGyC7HWW6fCYr",
  "key20": "3ZywXhJJwK1mex7SYFBowupVK28ziAA8kbikPue7MBrs9QJYksFd8wSzB3xBoRwfxtKLM2oYkFihnAV8EUwHqzQL",
  "key21": "2RjQXR9zvtxRDitsBUbizfYLXHQPGgf6SEZwekXgnnu8GZoeJMR6cVRpAx6tpLzjPi1aYRuSYBZ9b6uGCC454wP5",
  "key22": "4nYmxGtK6tFNt149mWC7jY225cbK8pXfvZ5Qu76KJni1tQKRWwtZWQWLU4K2jj61gVhHZVx1T4A87yxNBRsq24Ho",
  "key23": "5HW21anajCQbeX9LjKqjfpusTM5N2LMaNkLbniDzkQWqKnjd824FjgnHyhWM1hYmge24JJS16ghSdYvgcnRTzQiT",
  "key24": "3sGRqFNBgtzNiQAwJFFKUEnE39j1h5yM5B6RxxjLL3DXTpR5QZoLTPubgLm1QVmNEd9iAvhbpnLaZ3hcVGJFAPxB",
  "key25": "4VBBDPmrCeDMme3Kxk8a3RzRfDuAnPtvwuB5H9fEFpDrUjMaCBrxahYD65jKBebMNKDbwfKQbifehAfYoLRUEo7Z",
  "key26": "3BvSdSLeQxQ6c9tYMQpgDR7VuyJ5dXEuwvEYKFqQ22FwZevLK3zHv3nkLPiNgmRh8gMJopz6tdrBF2cSgmwUzK7f"
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
