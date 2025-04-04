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
    "63YnbbZyDTUYoZqctPiAra2CtZQ5dRMoN9CX4gdTUUHXGhFMpUBUWyRjAyKuGmFkGjKHb95Ztoy2acR9aZLK6Typ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NzCNMQhBRtqAoJjn4G1yembQpCkmMZjt46jkzfnLhpFUA4cf6HHaVq9m5ezEmnrwNr9CB2mbobGif7uuZNxFScs",
  "key1": "51Cjgh4SArKaAXFRaDEikocQgwzqNW5BQTYyiguKhctMTzKERQccsVPdT4NSmTiePgvF7wvNxVndx6KXgPudvbGG",
  "key2": "3YdeqKW7p8z2ujWEs9XJUbKikjZVSNP8ThTcZA5QhP9AsdA5ffxdDDbGEQDzipL3WavgEKdhfdBPwknn96qdCHt4",
  "key3": "3B3fjUMsZRFqbGGpx1CQCEeHtGNM3TKoqfbadDPkup9eHqtaSQiNAY2rkqhDtwNrqn8PvV8bWUDDpnho34CtM7Kp",
  "key4": "3UrUQ5gGbtZkH1HVARQGXz5rhbq5k8SpPgEy7dRYe9GNBkSBLfPZKUhLxjfbtL1AJ2rvcUtcnAou4bXhJRpJRvxe",
  "key5": "5XKK1bdQ7HzMnbdkTBLErrKeBswtzrTforpu5NAeakhbtzr3DqB1smqD4zA9nGBdSvj9564qFXzny7j9XDqAxg9B",
  "key6": "3gsb71j86ULSQdy2hnrfUCC84JZdZFGCCMk8BQdZbWPg5y9cG9mMKdpbTpZseMSqkyRqq82V87sk586M7mMRtLNW",
  "key7": "22rwtzCaF7Q6cWp3sVPk2Whkmaaus3exFK6hyNhibDtBpzZbkgs6RMpnmToXYyxj36hLvNZfktKozyoWyEfJa8RU",
  "key8": "46UwuAnatcai2TSo1knrT9x2mLoXuHXCzaCTbQiABFL5SznkQUuaAskpCUXFVortDQt3KR14EiETm5psVmSSU1R8",
  "key9": "3u92jm1VAKsaeY1Q6sHmy1bDHYq3DhfLZHHfxTN1Nx7mmacD9BdnbnRg3AAhowtJQn3QXUDBCfbLth7yzampT1Gu",
  "key10": "3XigSSjKttKMCv1Xsdecrz1nTwmVAbGWQ4vr4bJgtYcTKEvF3w23aaHxkWVzJxEAAPab3GZ78e2Uy8RR3D8QyZiX",
  "key11": "4nqFmmXVvGPPHQ5Mxqorw4P33Yw7fnKDN3z9e3aXL9MEShrbbtFbZvvxuZXYSQjc3sFtj1uHQRwrDqFcQzk3244u",
  "key12": "28XD5R4q3HKWcdUbvKt2VvR9hP7ioPBqXngbn2oVDmorqdwGcvyu75HHWmLKm8jW7WxpmuokhdZpWBL1Q6x5wJ42",
  "key13": "4b3nheTM7dkFTtC4nCbFA2kEG7L4RHWFXd1wHmkD5Fnt76Jx6ucp54q6Sn8jFsRJbJkMRL3T5C2LbQvtBUqR7nYk",
  "key14": "29CpqQSm9fcgFGKWLsW6FdEYYKi7zPBNcaeY7Rrkixp432Vmp3ucNngqb35e5PKJf5Jaw1fxPSUD63GNdM8jZ7qm",
  "key15": "2dpoKkWLjBfn5XduHct5BX2acznViT68tGM4b46KmnKgFgUqpfaoYz2NRVHpzDGBNCtPs5YyhbhDv2EumiXSWtJF",
  "key16": "5AGXiW1QQV1gygMP2HzE2v6FLxdDGfx3VAGNq5HrnBy4SMWrpWnmgiZTNNc1t9hbDDsziAaroVp6tW8H1HHELXKS",
  "key17": "5UY1vb2y551GAy9EgARHzsAaAxGoz3B7aQCQwvQh1YXsvjHH6wURW1S8ye41e8cSPqyj6UZUqoCzQeZLDu2cNaDR",
  "key18": "1o9cUwHJNizSEKwjREEUChGCdgrEfe3SA2jd9PPpUirV1TwKjrecUZwSfLNStXgFwmCw4rvotBfikixGE7i2KcH",
  "key19": "2HiCLotx9jMfvZHk1etBhU13TbE8tJXb9cRCDCJo3y43VGwZsiSEUFW6zWE1fHKqJRiSKRRT2YPfehvibQHaHACD",
  "key20": "3BkyxYtcpmeMAfA3N6F4g2ctNLn97PiSgJKrhusCrED6kyxqqKRy4dhxxL45Yhz2yogCBoE53BqjEdPofgiGEsCF",
  "key21": "4i8mCnnpXAci9iL4SAypDMwaGYa5vCrdZgB4ENZAtM1NtN1MLmFHf8Cpx8mACu1YJXiSWQsNyPebHFq6ALvNdYaL",
  "key22": "294ibM1fgrh2qxEhMNmogeWbj1Wum8ZjXtRDqcQdo7WAbFqfb5826zBQPrDqQJcZdFNV9ki8E3bdvvqmNfJqp3xM",
  "key23": "4qKUhQbqs24L8schP7o6QNhyngETnKY1H8SbbhAGRd5WBQTaTLkjrzUahLRK8YpqQuT6w67LxzG9K3wwxom6RdKr",
  "key24": "63t1K1SgXbDK6wEaBLqy8pSE1mghauVxBiJhQD1aeoPHLT6V6qwYxD8LeAKAwg5aYyNicpJ88xSs64ZJEsUc2kDx",
  "key25": "3BFmaaz9VEayTX1XVRSCDU9VL2yMk1DJRXwvE1V99TBiNwhBH8hUESKR85fMQhYSdMJXBBYsFznTyHtyecGRVm9z",
  "key26": "3QHQoKPbDsUyYaq1SAHqvVSqswGxBrPCrqHUQ3rqKYCRoG5ub8Py7JkEPWCY9GKaU734t33zWg76iVKvWRPh4nHy",
  "key27": "3XBJinrS9UzkB58pcehgFCbpAknQuqnoyVGynYbRAiQHTnahRFicNTCoTe3iKg1PVefLYka17uU1kDnEY3qHpgFU",
  "key28": "4U35PPyfHryNqEVK5DkHLEuwbHUNbWjcX2i92ki8FZw5d3t9pvutE4G6sRQiaEzaHKckYdpNsRRJtBGGLvUbwjnt",
  "key29": "2N4YMLx2LBYQ4b5XxFkyxR7FVTTJ7627A5fxCBSrQMUVCrNaDhrTxE3oSLxCVZnASBqZgzxaHubvPSsBexSwzLLz",
  "key30": "znhnuwwnbxD9otPRMxmDNzbiScXn7bPfLqUL6YyouT6RDXr2WvepJ5UU5FZ4WH1N7AvDT7VJUKoczcMRTkHyKKq",
  "key31": "8e7YbwV1BnqxuDdYBeTStt6wJk8az2YvTWxSTP1MpgG3d5vQVTiD2kjyVZdyrKz1u8KXwvSPZVghHZKXeZ87GJA",
  "key32": "4myXPzSeZHdKacSjHxePWFEEJ2xwnTsVRmCtvTMFRcNDdiSVbp5g5kK9vgRKNe1YfUoUhSc3ftkxhSgmcKHVUg39",
  "key33": "4h65jtgQuSCYfzbjv4zALwWiKWngEu5ncm7y1qC3Wq7xSFm1dQ5zLTGZr8EgAJzt44SdGNT3tauJYDkgDuVZm4JY",
  "key34": "55qfYSfQWSGCskN4YnSSywAXgdJo5scQQN8smKqx6nu4qVXtGqAHSeogcpXKhVT4L9pFnQ5W24CfZMJyCMV3RTfF",
  "key35": "2xpjGv8vi8upJLeqD8u18Nm83ZxmSJDQ91fWnYi8kW771kAzHToxG6PwK2354WBW98pcqcyzYxDuDj3NQsknv9Kw",
  "key36": "FYL8aHmrE4XAVfvfYRx51JxsDPMGhQj3f1wJcAyfaEF3HfRKztKN4oush3zMi1BNJQXEZmAWoxge5skbJNiV2Pc",
  "key37": "3hZvBjg4GNApivBAmmcBYXgAjbyRnJkvp7HACxeHy7YnibwtzKm1gZCTKrU9jojJ2usUC7Jr2mWVZ7mXnN8AVZv2",
  "key38": "5uVKfhHDgt11jhLF5nRRMESc6CFKoceiX9K3X6parHUhUh3Tx5MrWT35o2mbV4eWbYQcUcrcSSgaHowP1gMsoWrW",
  "key39": "4gd8YzC4RPtPQj1GtQdRybLapL3eM6v2xbhpxGeHox3egsQrrbmP6oT9TwLpAk9AnaFtmScWjTvQ3DShGp8fEat6",
  "key40": "4Bk6Sc9abXtGKUYmdxAngLGxf3c8XbVvpgVvxayMEvVjMKus6f8xJTatZNrKdBhxX1nB3bn1uPGnDie2bV4mAnE",
  "key41": "62Rsba4e43qBkWWg61PoQbDKva9MjLtJn6n4K5xNCvRaRnFYv5mDxBoi9UG82GYk6wrumvJ9QL2meBpGpSA1PveP",
  "key42": "329SdBaQyLFAta3Qoey3J3FpPzVijCpjnvNvFf8hT8Rsqokc9Ty8AH5HRcr1rswcEvNBiVqkDbBVRyPkqCofZN1D",
  "key43": "4NJp36XaGcAEvqYVMspXtCUeA5kJnENj4H8NAjtKTjQGtpBRdg4Jppe7DhoU6hWmfmcubP37VPUnXte4UB3NkZw3",
  "key44": "4ZjtNdmAGCLkuYCnsFP5a6C1McmWof3bRW1J1ydeDWp4xgG1hza56rEYWLcCD92b8T5FTWYt7exyTKcCJCn4WVXu",
  "key45": "3o8iCFyJRx1UE5bjikna4ZrtqPviRb9mqK8RcfvkLb4reEAP6JePzsPyyqUinxdAyRfP8wR1SU5it41eNNqRDYjJ",
  "key46": "38riEvEUcUxDZ9htGYMQvwxXeti4Bc1nTn52QuHarzr3Hym3jna7KtFoSN75W2XNgqvgmRZ1PKV2bXWovS5pSYgo",
  "key47": "2awTZZ8rrSKSAj2dXwBqASeMjtFg6VLK8bB8Jm8RUYgp4ra7GBgAk1HLuYNTHKXsyBxLdhzjW1pRwtb2ugmMxM2o",
  "key48": "4dhMrCKdj2spP7fLvqcsiMpwX2w8duqoFt2iRAVsmEx6dr3vQoKiAX3uobY95epc84y1Jh7C5nS8dfBDWTVGmvc",
  "key49": "2ucujXVsPp5vWTdNTcY9FKTyc1CGhNjWqbZPrTAGdzVeKb7VfzYwCgJW4BDezHac9GV8mELL39BYztvGXZmSq9XG"
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
