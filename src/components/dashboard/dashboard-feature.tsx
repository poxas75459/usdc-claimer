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
    "3anUvgEtihSDsqzoqjeqTZYERhw364WrMGdGySeEShLaav85MFtwFJ17QwA1k3jqXKah84MunJGUXdxcKwXqiisS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3URnVPm5UChP1Uka6iHAXiKoE4hJS4T7rz3VYB238nK6yrXaJjMrG2M92WPvXMAv3VaX1V4sHtBF67fm9Z6ukSNJ",
  "key1": "QpUA7t6fE8MD9uJC2Z2yiUudCqrUEW9domMuisuHYyG1ZLLB3H5KFEmJCQ3aAafwZmLx44GC8ThvEbJKge8bgca",
  "key2": "3S1F3q8pVcS8aazNTZxbw2c5Z2i8YxrzeD8UctZVZjbFMK2K28q51biVK8aNEv4WgiaiQDELbQ7nruYWeJ2cuSZB",
  "key3": "5rTbpAmprnCFuzguzigMoEvcNjpx4kiN2EEXHZSnxkJStrFYEj2ZA7eLj9SAGEGaSMHyti1WB9YF1Gm1gz3iZA2U",
  "key4": "3sVbwyrNEz4MKQZxZXvj1VgUb86eEriKCGSDTYZ17Rd1E4bwzTXznMLmJ68DYoUtXwLixPSavJTvDy3sfzggaNgw",
  "key5": "515nWJoK45aAZRayAWZSyZ1GWt11Ccf7cmaqWemW89F2nE1rcgBnNpnDyEczGZKSqRCxqB9nrpFpnyZKjCZmLeVy",
  "key6": "yYad9ggxa8V7FjUCKMJnjRDwsVHah6Ny9jK7iJGQJAB3fKS6J3CTHvLWYi585TczrJHkW1juades44PJk4LZCq6",
  "key7": "4dCAWPo4N4oAa8DGmfcbNaEDxRGWKCKxmEwqV3Ju5BYsKMBJpRRYe3DWQfV3mhktiQjebziuSeAJJhr7unkZLcE8",
  "key8": "5LEWLWR6DWFpN2vMW8BqDX8JYFuqSpVMzp2ThEPi5xXRxvvpJGnTCgUqiPtSdSAMU9YoYmGWurh17ad87YM5KcQu",
  "key9": "5HNNjUGiQP1NWED4SZiRLyMmLRqEygVR8rqD4MsugPHx2bfe7zi2dComLTAdYt5vLbNgpknUMSQuU6yCGn3oyFzn",
  "key10": "2DxGfgateVcYFFuZrFRqKSdagEpTxJXXUppgtGmCwrczrAwWMqYqmVjJUU92E84FAowv4vpFEhpZrEZwXturbtCR",
  "key11": "64yWF7ShikobGiPTUy8iKvg3qc3D2r2o91C2MYotcwD782JVd2Vk3W127DXkSZBHrvVALpJD4khcf9GgHKrNw3jX",
  "key12": "43TZZNFBMs22FidDXguAkU8LmZAi6jkfb8ix2tyvqfqYMYgDSifdCA4AKjkEMRq3PgwSQ9Wo76HSNqfD1CUYSLqj",
  "key13": "2JwuuCJi7Y2D8DRdVPh15TygdGmjnq1eZhrnvPjpktXgZioWLpdQR6sQbDn4RZqaobX9ZDPQzY15dmrc5cmGiZWS",
  "key14": "3jyxeCTVVuxsecasHCnLGmmKxvFipbVmHLjXPQ12j1v4EyuqArgEs5KChcrcgf4XxjtuqZhHx3vC5B5RzH81swNc",
  "key15": "33ayvzEZqrnwGdDqdjkTfGgWK7yMZTQvUu72ULCJgQs8yqDCUjFpB6nKxVsNDJQMaJKa48faMWGjLe2UB4kHhqDE",
  "key16": "25sVSvDX7jn2CiJYNtXjiwG5nkWnbYkxBpuXdAkE3U4J1WE837FpUA5dHLT8ytw1Wqu7nsCoSjzkwrz5sDoEjcMs",
  "key17": "eL3BdBRuKEdFLoHdNHxPWWEoSZfnUbsaJAWciCtYKh6w218gFDsx3vagwLvx7d4q6r8TRQn4HFsE2z6ctiKQSVp",
  "key18": "3D6jApN7diGoTuGBeECdHYEntnYzNVGZuVm3Yq62fdwdGpkyzq6nbeoqb3UzKYksujLUrFuiRJAtrqnq5rinRnwD",
  "key19": "4suKSke2ro6dciNj7ur9rpD9rRPbiYrP4jXjoAXUMRTKkzPWzgpeitkiJniyERTQ6T76dDfK5JGsDyF9JKkLegDo",
  "key20": "4Udjun9XfsLGw5MqBF4meFnWGVnkyiMQ8ESDWs76n2jpRQdVQZgYEF7BQMNK8YGztkKKUkouBpATNCUUXzZxr8JK",
  "key21": "3LMXuPVyVWBnQoWpKardLwLptJvyRK1zNTHLqEgR76SHDwhk3XTsG232bYusNhiczcqUrAqJKgHLDi3atXtGPD7M",
  "key22": "5bdjRG4iQHU3c3VZQDYRs262p1xJYcbDu7b4K37LWqmM9qYYAGJTrdd1JgkzzusYakw1EUDnPhXx9oufeP3LzR5V",
  "key23": "5xPiVAhpBUzVB5c5YjUeN5ypiA1jXoRV4wJY5H7q35F9CKXzDD4X5qH5Cv3KbXNEP5zHu1etGE61V7LMNrd7m5TB",
  "key24": "2fVWjBq27kNY28os35hrcSK2AFy9aBqnPYJyXrHCebkLbyr5bNau7rg2z2daX6njmnrY4V1eZfBW67d4oS7YenjJ"
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
