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
    "2AdNM8xgGdrXQBSpwmYYRfR3pezVaibHLN84hzpuTyP3Bfdzv4ATJYaKTBSrpbJpcHh3NDE2gL1tJkDh8eNGLUSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6vvYBFyuSUCqE8bfHmA4JXz4TRTgaaBpX3RQVa2hGvTGQhRm17wFQX83srd4xBrB4yRLZxzqa9gdqRkP3YEG6U",
  "key1": "2dcZhFxo4U4rPTEqdBwGtEgP1yUvVMpg1ZyQLXSEJ5KtvxBDzmvyuXv9qb42hHFTv5WuSZo1TfKsxDCKPbkQf6jE",
  "key2": "3LgYun6aAT6k28nRNMuQctZwbkwBWTgzrWLoq7xNcAZpxaEuSgPXCTDjiSjMmA7eXmeM357D56fGABLmGJvz7f1H",
  "key3": "2P5XbVbqG2YbmgA9JAgtSWaKArqjpu6qbEZNJtpPXBD5JkD4TKwrSr12b9T9V51bba9wzSWGohQSGJhEK2DNyKcd",
  "key4": "2M2pwuPiS8S14fqbQhdQ4k6uzr6nV6o2wfcrkfmSbZTKWZCD6yMakuDJ2tbd3d7mDbGdT7wLHpsb5XeVZ3RN1BRP",
  "key5": "66MQPysP3pEr1fPaoEmLDCX9PUXMoezGHiVDrcs9CQnRefnRx5DrsLiZqx6HMWJjQbMUhv5yFcvF9rVfF5vfBJsB",
  "key6": "3zLCRXcsCDkpM8NVQPeY69kKgBajqUMr8pwu83DET6ayWPGUUx11W9vevfi2wCaGJ893L1W16QZCMQpiVqbPiJnY",
  "key7": "4yEn47WATbXK2xfWWgoE2PxWru3W3M7hQYBHPasVgFix9JgWxmQELT6zH9ZPvE61EWtJhcvM5K4bXY5ZaagDPwsL",
  "key8": "39e63Wru7ZkTxgEJefmVVnKvW581j3K344x8NG2eJrBawfUeTNWDTqD4oD3krZk4WgMX2MQbpiwfjQWY5DthckuJ",
  "key9": "3Rki2XC8mh2xW2znUwsQqcb7Met6wrtkVx1Y6QoGZcFCx6Xr3rvardjt3PnsfHoQhtEdGS6bP6mta7umLuXYHktR",
  "key10": "4H2q2vR8tBSBxn8HmUZygyhmPcQvgmDedAV9CnxMTJfvptP3NqkqZzEPqt1zvmTtYGqvTmkCXFvyht94S6xHpaGN",
  "key11": "uUUxBskmPC21rbzGq317r4dZxrADiQL5jioWASFWKAyvdyBVkwRSTiSFi6oa5b5FKG328kmhFDmoKE6GZjv3fjy",
  "key12": "HLUQTXCja1YDzp9o9jqU7jrQL7KLqgpbps7MTUiYkQ6eXD2FAVGaqKXzqH6csbVKy5Sre9TzVJV4Gn6DZjKj3SG",
  "key13": "97DCL4az8ZzvQNUaZevEAtq4W7bDDCsmFWTRMg2LXx5pap8SrgVYuijExjuhkV7Ex4gcT5WoeVafYZJVwb24XhG",
  "key14": "4xmh2dY28YshDKm8YCTdNZRmegwEHCoZVk4pK6qQ79FrFkV5y7cSb6WwnRQpi81Tr1sALRcYmLoCBUGTwvvSA5R1",
  "key15": "a8myrp9JrxGEqnaaRDfmSfg1TWvzQeNzspv3P93rXKVTFPKV9pwvYhQMe9jjrq4y2TxRD6C4BrFNnpg5UqnFnqu",
  "key16": "cwMb4KhcDMGGFoN8GzpkUMS1Gka91LwHv74qBoBkMHtwxkCHv1hEvhkD8L831gyQhv68qGjiAEhikniJTi7njXV",
  "key17": "2CBXYefZ3o9bwu6LhvvPBq5q66TP4SYGq8LWQEfXGD6ytS4jZW29dEVNJNB6PrwimJoE7RWZbBPJbAkRKmbUdrh6",
  "key18": "3a5sjycHz7G6L2pA76K3mnNmE9ajEP1ZQJr6jyzhiF65wvrCpziEKLNMDzj7LxYkt2yAADgyGmxWkdB2KMewWfme",
  "key19": "5kcAAgztfxUrd5vJXSazEx7HxcMd1ivNKbUAeus9URSRsmyUzebzMYDwUuwrB65fwAxtL9trd8DSUwpAgM9sSwp3",
  "key20": "46fZZWKzEhXcvm5PcJ4UaCZ4K8Jx2BdmpYfXxXzK8DKAWuJJB1djRCCsTA85B2TbeL8jCbyTpe5K8Qys7P7Kq2uo",
  "key21": "3cYrapkAHfDSNk1v7QS4DvJr5jQ1JoZ2p8FfMkiiidLRDHyJWrRAXQAc1Drnmsnz27SAVawr6WMTL9ADB6ChPpAu",
  "key22": "4sp5vUa1HufB9awR29V6qFrYzLUQL7yuJCnSaZDNLncUYKWUQbS4ENQz2UwHmf382cR3c8WrQaBa6WEAF4qsiCeK",
  "key23": "4rxpDqW6ixWUDJdFMLkrgZUmWaegb1Uv7niqE7mScrfLCZUFAFEQBq2xSZ2kEYPXFNYC7jURkBaXPCWzzdk7YqCk",
  "key24": "27eTgyGv7ynnC5kCCquC5DWpz2q1ViX7oWKwgWMH6hcKo6mKtPA1iYF8qzY7ttLfKcV6zYRtekGgkD8CKFmPta2w",
  "key25": "2po37ZvAgsY8HuLTMw4beZcLSZw2iEvJ4XKAjKvQdw9mZYKfPMhG2MJmdNB8SM4onASr7TdKTjh4GRmbBB3GbX5G",
  "key26": "2hxVBroUUkbBN5HkYs3CkbFrQSEsUMbXYez9byeBHpZ4ozWxhn9jB1ogMTVTSgo27hJNpNCtN9WSYFr2AEbr3pq2",
  "key27": "5vYw6r5kTpHnG14Z7Pm91Czsvw8YQp5dYHV3zKKzEJsPrFtS2oXByehTdcadxL1gJonkwaBYtKhcoSGrD5fRQTvV",
  "key28": "4xr2XJj53QJEoriwrHziVqqtNrars7wCyuYXcdkST1dQYPineDYAxHs9nU8iPsqPy1iGboMLZQa3iBdUaE9gHMfM",
  "key29": "8S7kzt7z8vGp1YBpeikVRPDuErirBb1ztYF2EaQttZ6TSCUbfaj8u5xdygnwxDSnGaJY3U76FydFRRSqDu4c7J1",
  "key30": "2W1TEnRY7mDUaQy3URkkbpeTTb9ttcRA6tyMUKAaUs4pzbWHHfKJJm2g9HD5vWKcCnPyfJVn65HvWbYWoEFLdQga",
  "key31": "3z2ctit4v4SpzxDmDaGMprsEWiojASQnT7kSMPYaAP3Ea3XogXPmNcC64WnfoYseVVfSbRv5gtuQtQ5SdpaNBufu",
  "key32": "4XVmiSGqbqG73huqqqfYSe5o7ETxzLvjcG56XtbLnJDWatZYqq9sZGn8sNNBNA77JY3eAyaVDgDTLDvDp1CQPWRM",
  "key33": "39sbjB56KjYDpe5EybkfpxiqeCgLFjkMDsZ7XKNZroYqkRrrWMNPvreGS2f2UHwu7LJRJSR5L9XZgsnA9M1kMGZj",
  "key34": "2496M8TTrRZHh7buLcdvZKDeK3XsFC8JJumWuy9wNvX3fKHXuLrSh3irrNUWub7vxH7chPftisD7uLkk53p6dnDC"
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
