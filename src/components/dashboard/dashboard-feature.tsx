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
    "3gaHXfb4LKgZe8FaXBUS2j4NoMqvXPRwvjtTX9iS89icCfmGQPWqDvpfQ8KcZohg7tpRk8fXWV6yssgmbKMTUdX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqhL3Gku6tg4XVC9DFW37HZF1oH6MXXVYuiXxXPuKMHWosnQNvcS9nnaBU8yr6gdcUsTpKoKQPwkKFLA7MFY3NJ",
  "key1": "SqCeCJJwKikchXfLwdiEZf1LPkR6gqFwLGJCye9Y13REoZhGTpMHeL7XrJuNeM1fWTybo9VmbYZGhbyKQw2aDy1",
  "key2": "2knqCa1Ye2jLWBg49HmpnnXQwxyRxcDGDtBBnKVtRJJVTXTuhBaZ85pmM1fcCSATCs9Avfwxv4ZTewpZ2UNedWq7",
  "key3": "3di2b6j943VegSD8nmQAsevyDEouGxE85oainomosyxKuHVcT9j9ds9Dt44rThFvzLg28cPBu1K1bE537qtMFVo9",
  "key4": "5xDojbdufcqMCPUvFKtUVrFHUmj8iZUHHyz4dbC5tyxMygUxbbXPzCshJhNecafPc2YRsM4YvXR5FXj2ZrnJVktt",
  "key5": "2HpbeoP1mCL82citw87tuAFiHWXy7vHcMkUWF7G6Tv9nYmLsQ6AywX3HKWpFv4TEND8gAtvqzTG49SPjoGWRmwQ4",
  "key6": "5wgBGKwdXPSjeDju3bCzmDLJg2gK5aMDYynepdFjckPjVpvMv8wrKfg8TNXV19oWD8sYjLwqiuJwDmBmtbcZjptY",
  "key7": "Efr4oSFK8z63WNvATq41vtv3aynGgm3zbXu5oBzp5i9Wy2ySDq4MtbBjaXMst363r34WSP7nnRGg8u3iPCbnXnt",
  "key8": "4auwp8LdAtyZy18wAaBvdaqDTgM2kw9dmef9vw51J3tHphjHYzE3nj2Pr3H3rRutc6oM6EtahDhL5QQ3DY24q1A9",
  "key9": "5vHH9nqddcGN2RiBLnd3sNMoQ6hGeFcK3QWwddhn1QJs2uQioYin5aLSQiw8yuGC1QFkgcS3JBcMVd66H7d7cpYX",
  "key10": "5TFDNzR2WBPj2qc8tmYATLSJDcdtcYuasUMK2opvt327fuZvSNb4KVaLAzbZqv3hpMvoMNCiWNQMGkQ3MoHYc75y",
  "key11": "xYMo534Bsrj7deRmDhyx8jmdDmCti98LCd5HFRQt3p3bwGzTKqoexbznNd9Myt5WBo2bFNViXJwZgmqq5gdqfMk",
  "key12": "53sSyLYovXpMj7DFnv3wuBzhv7SCiiq2S2HYAYGDpnyeb2yph9SU2SqACU249Boz79TRsSPkVNHYaoryn6aJgeLQ",
  "key13": "2Dk3DT5R7hXmfkcDnKCqfS2JPdR75QYH7kpBj6TeAzwdCuuMAwC9WAZiENYaWQsGv6gzg8NhYPWy2YNWSyJVmVYy",
  "key14": "4pjRsiybw94MqGjKCPkLwQS5gBYYi1Dh2nTWYp7CeJiwCDzKTTQaC6ySPBUkcj9rHpMTMV6QiYpdtkNq2wzcfKKC",
  "key15": "2UKWG8jJpUCrYWPbT3a1hCDQJNH6v2kM7ywuDgDpm9mftCYAsbTKkGskNrTGy7N7Ms3pfufuCWMZQozKtwWcCtfz",
  "key16": "3E27b4nifj8xSPpcLrk3UjRuhN7bkoP3jcJniuAaqF8Tw21mQmckKHF4nEBGHYsBN2bTUBdX2mWALroD3TA7CMwk",
  "key17": "3tCC6d1qcXTQiQh7etFUqaSebAxADmAYKSUJkVKRZGk1UyCZMKoxui1ifMbigs1ePrjmJNBojkaRsvgihGuJzWQ2",
  "key18": "3ctvLu4U75UynSxfTLqp5Uu6A9Yx6YWmzpzY8pKpn2Kdz7qEdjBmUm2qeH6hRVU8WTgJnD7YjLkGcFw5AuHjEpKS",
  "key19": "WuyVkt9Zv7Bz8kePCULACLCf4tcy6usD6rTLkkUccvtva4Ac4fiMSszhMg7vBThGxQv28348BD4DtAvwt6nNSDS",
  "key20": "4Vq6FS64vJPRfaWUNbzFFifpGKG1hRoS6Sar3T4cMbFUDb2ms6r4MU1nKJbZrrM65qjgVAdrDvft1E9G6ReJYoG6",
  "key21": "3uMEwZVnAGYvnY7VWnmZDDAEBeUxwyLuuNGStSrmxUEJtAf5mHS1zAHY8nUk28F64TBpUdCHLM7WRraJLKKa9DP8",
  "key22": "cBxUPMfV9vGHMTwYFp7T2HhB2xPY3fpzq65EBipUor1wLRyxKzMXYGn54P8iVmGXEnEitiwJij6axy5EY9xrRPA",
  "key23": "2DcM8Sy7cfWdgnZ186MnaW62CJfiUPNqFtMhGHcME3weLyHaEJ619NB7Nr9WRQUBti2niAwwsxis4a1SGWLK94MU",
  "key24": "2ocBWpAiZgF4do553aZLpSM6VJ16TdKBsBi4e71Lf2iLoKZiykEHXxyHkBA4Q8DTvrWjGkKpH4EyT7DKit9ePNnR"
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
