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
    "36D5h4wb9haVcu3RAyQ9sEXe4tqN2FJT3uA41sC9tMroPZsZGC4HJtPvy3Cu8LDCDs6VVZyVP1gBCpK5iZyDpJjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXVCn7193Mfn3MNvuZCP7xZ1VsaLrJLNS84BDDAw2FxC9MoUrhk2usjNpqL8GHU2Z3jo7H2yiXkGBKJkXMh8bNz",
  "key1": "5CGgteKG4wpfHkP8PZHp8s87m6CQc2GsA7xVUUQFuAkonnibocvE5hUHuJVWs64Q9hmZtDNgMZmFarQ4sfQPQa4A",
  "key2": "4RGqnNRnkzxCscNwKT9LVfDLEhqttowX7QaiEefGAnnpWr3JDfHLGox6anc63H9hysCZGmkKqpkHNQzK2FhRbkva",
  "key3": "2MjSW8AKuJvsjLveDtuyAEVEbNxg58muScGqBaFe8LAyDYbxGPCXXeEkvikC7vYtk4TBKiBBJNYMn6URr6gVxphT",
  "key4": "5PpwLmay8Ze6C7Ua4Z76XHhbvsWBTwkUeqKhJGkpozeZyVCqEGu71wCGN5gcWCMGcnAJUkveTxiVYy3fPx3NhJKV",
  "key5": "3bQH4ZXBs9r6751Vh5gSuqpR1ZM6oqXxr1j2nnRwSvuzmUXomnLPibwm7xZPGhKygcr2W4Da2qRhS2wMWzVQuNmo",
  "key6": "3Ju8E71A8AiQPhRWYYjbvcYiNp2wSEXbohPUhsB68pDRPMqayXSbFe1tsV8u3xSe2evkhxP2FveBD83QQSF5ZDWe",
  "key7": "5QKER67MJFhHZswY27hzMESwV2ErK9J52GJk3bnTCJwGPwA4dzVQk635qy9zsYCaM8ZBaSYaRRhWF3VDXAHFykNR",
  "key8": "4Eoph83DdF384RrpsS4USMovh2jHTiwMdgxAipPfg9eji9v3PSVqeoDxgjuLUKgp1E2C7112Gv2zEXAAG1YcM26S",
  "key9": "2SM2rwasBRp2ie3ZAiuJsAGdhzBKjG5tWzAcXUVhehyiYraPobdkRjhowCZwWSxdiYfRRg4jbkHg4EQLzrEK63uR",
  "key10": "3j2RDWBsiHv2vTQotEbPr1YnUL2fVtM8mZnszh1zCRaig914n4aEL5mBwVUSpmM9yS4v8ku5ronpVWtwxamrFvQb",
  "key11": "4ZjgQ5YpdDxFuM8dAPaCRqDcypQuzeXTEHzx2otaXXmc9fT2bHPy4hz1uv6Q7SLDqpLDqYLpjB77FHv8XN7oSWHw",
  "key12": "4AAAtQ2dVuiU86LN7SiEpHVYTT2DVbyPZ2EEENuo8wWwUFrcJfsnWNqTLh4RKioKM8xouewtfQjAntgL14Wgva2u",
  "key13": "F91LK6N9pkNn3EMdPReWPWNvLiD3RTQ2wFXKjK1QXtsqAuGJmSYibUpGJpc6YzgGtXusYtu1QFsrFbg9MjqJM4j",
  "key14": "VWmDm4vSWW5GQszoQBgGT4pYcQk5g5b683L52JkTWCKacgtNVB28p8xPhfV2poLxnqdNmaUMhKKkCFGduyNfBiQ",
  "key15": "4CAMC4YgH4m1etDBc6pMFZxMimkPmQmT6gRM8MsgSXq4UM3kZ7jGfsroDa8zwCUFRVHcK3Q26dX1eQdBW599ZhB6",
  "key16": "4U81seioEqybGmyr92kDieP5UqWeGyXsXmV42WdpN8sjG8ybzCJACSPFJzukKKRSMZyVgEVjXdsLNmjKgGAp8KPG",
  "key17": "35izJichxa3jeJvBY4yVryQtRTtHotRDDTeZxvxbVvrjiMkDsKRgg95vkJiWFxPzNinAjvs7bvhRVwEnnpZUPYSC",
  "key18": "4wUdMwAVB929fottjXTG7LcURXgzSRW8btY5jgLqn2xTpcv2iys8UmvDqM5RRAMKzxy7TqGZygzn4zdJRxw3itmX",
  "key19": "61vKA5x2QAUDJhMwNduCps4PH7ZJo3yR5jZrpVVB1NoSdQGxZWV6BVPSRddELG8EkYU5uV5KE42kqLE9SG7VLB5k",
  "key20": "mBw2krbz9u5LHd9LB8DfENY7Ly3ake28o9Ak4ZCWYZUJuVoQnFNbe1kqn9cAAKMjShn8QdsuW51G49ocWwW5oAB",
  "key21": "2gTmS4EDxYArudV9sYXfgZ3s4TwbjqUS3NUZfpL4Jc74L9AWA3vrdEgz1YaCkTLLKVYZregB4H5sQCUSCBFQNuWm",
  "key22": "5g7QYiWK8auEc3YfgHcKneVyT6xvAGdHNtvwWyMrDnWWjFg9eCozP4dDLCZ5AF2Y5dDsQ2pBJ6sgWjBRHcgo1aZo",
  "key23": "5yhH5Q5YFrk5bNkrGZpNKDaetC2VvUaGtpmNii1AAHdaG4UfoTjvei5u1sYAYbGuxf2jj2VQvsq3adKNaEP9nzmM",
  "key24": "4HMZ41dTdxHx1xvQDfVPVUgZyw467EXc433XzscLyjydx67FYhJBpFrgWTC6xy5c1UpBqVPj3T9vAAuRZHYZLGwm"
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
