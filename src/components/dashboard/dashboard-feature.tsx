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
    "kgjCWHx7eaPU8Ve5iwCPfWYP17BTLfPSMRP8RdFr8AqGjYn9cEedkct9qVcsCP3jQy5ipwRLWRqx1gcsRC1stLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBQVe5rSmaYWYxyDUaueP8fDXSg5hmCbSEwU3QApuJyx8MnfHXcCX3KAbBLnYQzfsgDDxivzwUKMbgvJJspznVo",
  "key1": "576KGScNe1d54LL8i4stzV4EboMQTZ1hNR2Bq36mms4rBFzvE43Q3Rm4s1Lw3kteZL48NghXD9bXU29YpA5tsHJ6",
  "key2": "4iMw6g4VZFj4ykyZLFFvqifnWv1mBbQ3goo17zHT8pqBxhCZ5HBLmF6dZQEdHgWkUiveDqw5k1fidZP5Dps45qKz",
  "key3": "4rWz3rfc7k4qpAMCU6rxWtktsN7puM2CtPteeVGB4sor3NggFuCLRigxjVFiwPceE4kvKoZCw1iwTLc73xbtaWLP",
  "key4": "3m8MHdwuPGLsAtBqWXtUNqAB3R93wpXzF3w3VoU3qhWGW7YWuvbGec2YAG2dqKU77PbtVMx1yW7MKNz6dgdNU8ez",
  "key5": "51U3tYAxF5Ko8D85RXK6nyumyZx2NNrJLXTABKrTUtPgqFLAVBMKfotYFmybRZQsD4MU5gByYD888bYATWf8A6RT",
  "key6": "4qNWH5qUV4FgeDT8ta4csp7nJ4MH8Nw5isPqdQbwcnd7fyYZS5fHN2EksvPwxJc6DnAh1HPuP5JbVxPZ7d6unoSj",
  "key7": "4D8fekUL3KG82jVFha9FnpcwPpZgRegYpuHPcMMmHBSX5hL29gnMGZY7mKo5sPJy9n8geui2AQMbGfAmANAZuLWe",
  "key8": "4YhdD3zKEgEMxr4kFJYpeHSNVMhzd8E9Ldz2ZhzM1KGEm2cVb2MzNB8KszgSrw4JJUyfAzGer3kqFM8r4xNtS41M",
  "key9": "3kavHJBepLhAmNrcQ7iuqZs27xbxhDbquvNS8vUajyCEKuKbhLCyovCJGqNRHWNEiNtaByHCehzruwKmTv3oPK62",
  "key10": "5MeUJv5pYKDRJivKigxr4oshKPVL5s8oHrfAgPaBmCm52yvGLa3J8CD9PpMvycLkmXsebCehrCSUeL3sCYKCixMH",
  "key11": "2oQoesu3YbBnDPSNxwkP26edY4gByw4t6vyzVVSamDikTTSAFU9SFAkryDvnzU525bopPiLMqsJZops5vpbi8xEg",
  "key12": "2aAcbHxB6yd8voUVwjkCWz63XoyC7vJyzTd7WLhvvaXz3rf8JThbsq3abcwAgQmtB3f9Zkxc1iq8rW6teBzBDHbp",
  "key13": "2KqG8VZqSRHdnuN4rkGwuRPAdf817aeRBEySJYhNuDvn2Yfs7gz6Jirf2RsoiLq8rcH5jt4nifRyxFjJP9y7ucB9",
  "key14": "xP72rUNvj7gxKk7bUwLFkMAfLiB3X7fzrUosQX4sz2cr94uy183tpTiXmS5fteQrbugwYUNVDGmv3kp2dQvEAmm",
  "key15": "3jvi8CmCoDkps9ddrq1tsD3GG1KApbHYhdMAoat7JdbguqMGZTVFwepgPb3XyEx8pDEj4seiF7EfwqBMg8hZm4KE",
  "key16": "5BUuw6sziCYAfoiTAYJv5wxBDtL1XJSqAjN8a2HwdTXRE9ztNCbW1TvPkvUPSkjdMrFYzApuevMNueHruzVqq3R2",
  "key17": "5mFgrBLFngcuXJCUHjZVbkVVksMiogYj5eJJ8CEXcimiSueG6bY1RGc1Xj7NAoTunRWjpxWWT9hmUtFPWASKMe7P",
  "key18": "3rZg5YQSUwaWxkSZPQw6TauEAPozxuMizwqgf4BjRQN4uxE4PiVZWHXgSqSfZ8v8tmuqi7Vyx7kb3ezBRWbiVfsK",
  "key19": "5Y9wj7TzfFsUTQEGAHPGAfBjdV82y3G74yeQfqD3ps4yb3ddWZEm3eF4oogrYfdUd5QoSqYENrricXZwpsPDiUHS",
  "key20": "26VEom7jxeAx6J1ovGaECfn319HwRmKJNEhuMe8ZErnTAUEKSfe628c4zGXiRwjPuqGiYzfXQ9kLPS9zoWS4gauu",
  "key21": "3FwJnDHnpe8f6U6KrxyeiCwMFYjJR1itBzM4RveMZRWsgUiFEzPx56iHZn2qdFhAfjpZcbHjbRTb6npnZPyVcSV2",
  "key22": "2WMaKV8gtY114Zz75rQYN2jHSLjC5DoHqUZDhzoNjHWs8d8amT5UWcoGVCo91aGZAGqxH67rGbe7SCkc7KrtEup2",
  "key23": "E1UmuGvyWyJTVTmBzHFpeBWBL3G3Ve8a5tFcEX9nu74kZsxsS8va5w7CBMFrqEPpBbncDzdCB1GV8wNHsTkfP4T",
  "key24": "5KD6FQEBsmR8h3d9R9Yg6mXRAuHadUQ2od2MkwQ6RRowxS1tC5BuG5vgCW5y9g7MGmRkAud2HJvL1hRhZpBn9R9G",
  "key25": "51BX2xVpdp7MtdRTaTcbvhT668Y3jhAXAL6uneQukhKCEhYZKRDF5Qn8N7iLkV8vPcpQethywE9FJEawt7zCPh2s",
  "key26": "5RLVm1Vt75X5D6wUPHjcQiLakZ64rdMWVv8YiZ5txeaTwxeTGa2HoPxisqSV5r3EEvV6s2bPzHgAf2s4vTbJ8y2p",
  "key27": "2TxdecsrSJHFvscqKWbdYxVgJJ1FxzmjfTmW4BBNsNradFYFeZhkZctVzHMLZWrhNhVzR7tpWGmUjjoFEqbpRCDy",
  "key28": "2TUEsMZQ8Az2UPVhw75TaJDMqw76syYRq3tLignE9QUBg2ArudqSUokQq8dSJX7MTXrQoGD1XzArRY58uHx1ZAYi",
  "key29": "5xYCbwjPYgkjrZFcuoAUvW5KEZ8FrMQjBnK3GxwSKvCmJH1cMUciFPChHWBxw4WkBihTK9gBNG5nb5URMd1TXHvf",
  "key30": "3Vr1E46YKSWKmqaCNBL7SozJ45MhmnxfHKPYq5wG3LuaDwkyQW8suzjGLB1pY3Xzaq67YiWub1mHorHx963UeSjy",
  "key31": "2TLy3evUvMgLwh6CYAxqaSTx9qCJ43yxAZQ9uegCpQgS1scqkqciE8xRQ7ADr7w3W47hfiZ3aAqgzcPrsbjxbhbY",
  "key32": "3JHjo2Xu9jgv7vtzBn62juJSgEvt6p9c3jCCZyvh7qADiszGQVJ7HCaQQwwiVrgAHuqVRDidw6ZDZom8nMRjHRnY",
  "key33": "44tuXfN2nVSg5hDVFdPx22o2W4FA33c72aqT4pCyDyxVLLFFEaXDbFPD9qLXTSgRR4tJNJuDGHJuNAzKWhMLH9rz",
  "key34": "5xshYZhAS8ae1Xm5WW4k9QVyeGERyuR7PneozSYZKjgXpZyjT6sPTKyZ9t9KWxqHSedvaGXRPoPrcmUKrBBtZE8y",
  "key35": "3EzczqKayxK8B2jziPbFtJkHpGH4FYNSHechbowA6wVy39Mfps4F7XM6G6D2o1hogEc7wiLQC2QpiUfm3ReaVFqr",
  "key36": "3DFF9wfjzWgHDqiaagNQgP471KmQ2gsi4pBVsLHiwsaNg8LqMdMEKdX7J5ZR9oaz2zw2rVLRUoUhKa8CCBg3yGxk",
  "key37": "3BuAdy5PkcCDday9ANBzc7wkLV97dSSkNtbw1vtVXbMBstMxmwcz4h3HKakw5QuwthjrCK2xcvfnFQQue7niG8Ro",
  "key38": "63ouETBaUoZKL2GkCk9tvU2vQ8NpbVkFj7bNjnHow8L7n93U5YzpMJMDbq17wwWuAcKji7WArnCNY1RcxkUAZJ9T",
  "key39": "3n7p6kWz1kMgJhGbkJQsqD6WQ72aBrx6Y3tUzy7kqfpft6pMUF7r9dnn9bY8tQR72kNGm9NqPSYnarHfKLbvmFWc",
  "key40": "5auUGUojsMHFi1ttD5gzt5SuUBcLcrtod5qkqNuzJx51xpfyHSYHuCzBMnqKVmWYsjgn68BJMpm4Le2vEm9WvRhw"
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
