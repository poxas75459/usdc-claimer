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
    "2Ayfr9qyaNnoRhL6TYkB2UnPpoMsrQf1QPSB1zrpaQ5sPjF4SWw5QetwcNdqcx6EtrXA4ZBLV3pthDKWXUhYGUNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gn7xPSzdphFAoCzgGmLa1Mj8v9H7ZjH5s3PLguNoKsCQ2XA7nzopG2fXZNBKovkZpxsP6Z47uTyCSVg8aTHsM6D",
  "key1": "2ko5RydL2JANn9dRc1rHdRL7vBNeeWw2haQj5F5qdSKTNHoYUw3yXnRn9ZWjABFUu2dXa6HtMGDMBccphREDorp1",
  "key2": "2mCaYDQLBHtVTWkpRzJYjYPFipHKEuVr3GNSti3WUaw3BPfGB2H4K2E2ef5Lugvn9L87sLBwt2e9avF7NsfGMqR5",
  "key3": "3uxp31j4jHy7scQLKcBULaJXoyrF69YQaBTn82vLUyvtyizMV7Tdix8NgSyptw2oH7mQMs1bZbScdhvQPjjW5VSS",
  "key4": "NfkY4A4eUXeFv6w6ao5GhNQd28JQz2xAxGbniZvDmYda5L6QayJNPUVgetfnLrsHLGgr8174gsaRt64H8cuad2d",
  "key5": "5a1dU5pmYvoDhiBiMrV6GmmGySfhL2V7ApeDN8bPZvdiHua9ghMQ3rhdrT5kDDsheRR2sdaPZHcjguEBv1Nfcf6n",
  "key6": "u9oyqi6qHWR4o2MTNmCMJWHLeADft8hoDtnBiVMdTmAfjLsCUxvqWsRB4DBm6Y6J1FJTWbdqDo86ZRzecRnfHkP",
  "key7": "4emHEThK5sypTKjxa3j2SwaDYbrr1iejQbiGmZCtWGPyXhX6L8GHKGzDRDpBrQy9aC4HRVSyuq3crjMht6g6ciU5",
  "key8": "sQiJH74uTJUC9qJ52ArRXYaBXozqfUNXYxs3zuxbWis33C6o2MvwZtPExsWgB9RY4Q8sEq97fTwqmg5KZRsR6Uw",
  "key9": "F6PfbMxjyyK8oxfPDD96utPCi4orNiHBdfQXaMA4RXEyq2Tk1ddEyYi8ST6x74kUpcSje13TGEH1esqsfF32hbu",
  "key10": "5JEhqPkEfUBZYtgJdyB5yup2kB432eKaRxT9ceMQK4DyKto8YtH1EfEFQmR8YydGCUoaQbSTRpdo7piKpgBQVRc1",
  "key11": "45iGR8aGzyRmDMTeXR5tNERNZQSeLRZfSSM59qGA8RWb35HiBFwzd6rE6BzdQ7TZ414uxGaPZs27KJDZHvMYAcHE",
  "key12": "T6sfohUVhMwDqziA8iDvWjZZ89iBpo4sXPkXfcxk2LBnWUuWV8UFWdn6cP4tRPkZLinRD2UXNCskMxcChKoQBsW",
  "key13": "yzrB27m4NQ85kL7qSK7vT9bsjqrc9L3oMQDo4W5KuaZqDhS26uZh5Ba9niaSpjtzbpyb1wxuoxD8ymfMiKcqhep",
  "key14": "5NTNiiBDSByCge1cR47tzjF1ykv5XR2ZQfHZcZpksGKg5eWTghQSiz6daydf7MgVDp7h8337aJCcm3LMVgNDErTr",
  "key15": "3b4fxP3G3rEvijWTMJeEKkoQquqJz83PTS8yQNbxCS72SYhzPCr47Y7ZDBmyjMCuJqBxCc8m4JgMMDLcV8Xz5Xfp",
  "key16": "3CUwnrp6jsJPJdTvwL9pcjwBzQTM4bmZabwnz4B7kdcAM95ddvjfaUURXvWSfSnNHcRR8Vvg1ShtgkGUS1YUSJsi",
  "key17": "3mz8SFnTUHVKnistBPhfz3JUdDJCX4mb2SkaAs23oALtdsrUSKXPGUMcWbzNhmjAMrCfdoD9axACiigoFSTDbAc5",
  "key18": "5ssFBm4w6hdfMvQ1XDpxta8PNTaQkFhVR51LoqvktvqetSF92LRsRm85EbPdj6PDHRbiHFLp97Dvhb2VkAjK66Ab",
  "key19": "4Zd3oqC6PGauqAYSkFc13GhwcTEqu5kiV6YuFUCwS9Wb2nLYMrL3p2s1C3UhrSwrq5fX3dEbapg957kgQUkVLcyk",
  "key20": "3XLZyaCB4N546oJffsEipqSsmPmnq6Ki16kgygkvhRdF7BUjSVREr4kWv3bhcAVg4vmLGv9tqFi9q35GqsrZybPv",
  "key21": "4T4D1b2ALeCokRQPyiYH1tUSUnGCii2q1Zor12mqZMmYcY8JkDAiHofpDh4EB8sp5L1UMH7pwEEU16a6vDozSusn",
  "key22": "5DEHfY1bWxGUZ4HePKajrkfQVxTGFEAS6cznSMGzdXXHCWUJ1nxtE6xQ8r9wV58EsjWrZyMAs88RwitKHVfcozY7",
  "key23": "3rkmdSU6FCAnrDzJJ87dzUfU5CMgNgyxo7yMwRfUYHwaJno7HCjhqUCBNwDBc5xQavSkQhWepNNtSwqVLG9hQ18H",
  "key24": "2bjoEL3Tp7MSYPwUHGSFXAmavW1iE1sK9wbxVW2qKnYNPvGGHupd6PbXufjKNurkedqeT5VVhZ7PbxeFfCbwNbbB",
  "key25": "4gf3MCgjudjZy5KWBJxTi33qQUSGxhC8UEFzAG7dWfP3Dta6CaT8xgdUn9H1yznuxWtUTW6tvYLWyGawXJM7kccY",
  "key26": "4Wvm6jb7YiSp1FR2EMfAyoag1irUFEHAV1U4rNDxmuo1wVJ3H3Kvn1eYXr66upjXxRKpQG1ymAAQ6YZqV7xaV5j9",
  "key27": "4QCctQi2qPJKZGeXZfmx4aVm2Y4YmAqPB6uD4iMRk9r9wY8npXH3idCi8mFUdbzJcyNTQn4m2VYD4Gpq5Nr872KR"
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
