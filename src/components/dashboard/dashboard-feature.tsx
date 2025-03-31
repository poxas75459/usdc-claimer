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
    "2qaNN6ZcPgHGpZLDdSmdN8tnYhQd39skDYgcFKosvHZjAGTFzquqX6CSD8gCpGQCJLycavgSzZok413qMu7tLoYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyTjZb3dnU72fqf9syDGnddav8Vh5yuynZcmvvTQ7KtG62Lwzhg9hHba5773tJSgpGmnU7Aau6f7bD39QpjuX4",
  "key1": "3JMzwfZyDinSoRrPJMppeizBcg4nxDExCM7isgLqHKWS2AiPyL92Jat5iFW2kwVzouaNVhorvYXHWohYTeZBHYdy",
  "key2": "ZHePtEvtaigUD77GLRG6BJMpWMoVLFMYkvGxP2CSLrZTYuFuKQoJJRaQwr2VwHNtRRZZku2Wnaka6k7enNuK2sS",
  "key3": "5tikLNVSSqEhrqcHbpg12GSgKyc3WhG3jsBS41cX6tdsmPkmoNgP8tq5E66QUDNEPHfz2btxSpJTBmVH44PP3s8z",
  "key4": "3qpURr8pwKR9fXpZSFCkQT4nkBJRR5Je69ee8PU72KcxhGVzz477d8nDHuMdLTKoFj7jpUFrM5nwHBGBi6X4ixVE",
  "key5": "8gHGENe7uqsmvHXRiTX4eGHEvZXPjKt7Zx9BEL5j7TzKV3JpBt1S2EfZEois2XM83yZdNhFuKKPbw4QG7tTvzpd",
  "key6": "2wwEGc1BNX23Hhr9wpLw338TXJnDbjNLXzVvvqnLKwj9BmWjxAtftCPXLNZ8rE2mQBceubye23fnfv5Mjnxh1kyC",
  "key7": "SoBt859EqHAdBrVDFTUGH8FvAY1SDpK45CJ83h33qg48mumYSFv1JdwKtH5rVEBxJ7kmcrrtHaukXZPaQytrTiN",
  "key8": "2vHfakQTWaqTyCk25fT38fA6bWZSxyUzF9jvU3hxoLkBvk43eJYtiEyJTySPRrjVJaWCx8AGHeTL8yE4y1dq6JsS",
  "key9": "3RtPrZ2VRyWc1EoQKNPVY6knzrY9SY91pHksgnRbV6yp2qocKmUaNShoQPVmAqLGiDHaB4nsfkWNZudjvVYaaenr",
  "key10": "Fa7fsixUJswpYB4T1tdDepwQF47fx5TJGHfkvpgSS6kncUCcy6qGxTfh7ZhV6wL5JuQefoNeJA1ikA96czpsPkW",
  "key11": "2kFuC9EekW8LoBcADniR92tMSCGaBSpeaHPzZq4as5B8JZWHW74fatyWaQ74Krxz3abV6hLLsQEX5o9AToG5tGxp",
  "key12": "aPu4yzEHze2mA2anCCdfMpzMySKDKrmTpaVGZLTgdH82eZrBiHmUBLC3VhRwMe3tQ1dd8co1Sp65fsUQgLhXMqr",
  "key13": "3xU4dsYHFbzHuygwxBJDxQQ3jtW1MGvzFxqKHgqcRBqUbcj19hJxtMNYBfL9i44KZh8GuktW4fB55Bh5LVVj3F8f",
  "key14": "28jYCH7PJe9TX3aqTggwKJnBFK8HW7QpdL6LjvJ8YqzXSfWeeP8fG1J9KMwuFFVnyXN7Rkg6hyfzkschBwkswghE",
  "key15": "51vHi7rgq8RxdqMk5MrRVPnXr5wcA2i1sGYoQNvsRHZXdeHfARts8gsVkxvyvCscQdhgF2CrQrddxbV4chBk8b4w",
  "key16": "5qvZt4Vk7RL6xaojiRRogS6Fy8G6CqnwMWKRNhzWpGDYrz2L6okaM7zApvbKZEGw2YWqV5GBQerr4KcUPpi9fTDx",
  "key17": "2mjaFMQQDXrP4N88avXdd9ho5LEf37iwsxjdHAKaKYSaNNwaUJ8WVkiPfj7hMk6xUjuWga6vu6edtHwoPsKs413W",
  "key18": "4jxNDZyFkiGhfcUvbJzMnLJumxWcdsyuMdt5qMWX8CvARYJcvBi2xMnbLaSU3dg9Kd4LfYQGGb3fBs7ZDG4mbrBa",
  "key19": "5JbrZebPmNUVnGmcwxSeopamrJJhqkzPC198evpK9ZVkxBoK8DSgZmAWUTnJY8ZC9vKCY6cYqhBDK1RyAbbs9bma",
  "key20": "5j6uZyS6Z2DzXYVNxeUsrzVdjC4MPombXQvQEGPns2Sb1NFv2iejqDqqYMAsuaDD5dkgc47xER8BeH7X9c2eCNYH",
  "key21": "67HUy9eWgvyVzDn5Gp8M5zFigiQ6pbGf58Qb1yZKGoiyunLq8jZCUuraJLBPg9kNH1WkZncAEuakcwj2AFSfBnsR",
  "key22": "5EprnPbBarLC1SzJFFyRfBEswDBXwJLA5DwafamHEDb1aCXPMAgEvCoJ4vtPEB4kRoBcrEU3LwTcbbDbBPkR3dwa",
  "key23": "2cPFoVL24egzk93XUS3s2DwCrAYLeLa64YZBWh4r1gPHSDFXu3HrfNRs43QjcUNC7szvzvyWmSNy5rADBq3bf7yz",
  "key24": "5y5bb2thUPX8nuMGk9LafVsX6HHffFSsVp1HTyxMTiwYmJC1SNasE57WKYZYJboDuESFHDG4hqV2UEjESZtAx6DN",
  "key25": "3QJ2UsXcpYiznX8JE8hjPADXw2K3QRKox8QnMUvjt8NTNQXSUvDeaoGh1Mq3LTBQdRfFeC2N4fFLaGpf5pwVdK3H",
  "key26": "iVhpSQYT3ZHuSu3PrZmFMZvBo8hVU39GS7buNKCzjW8fufPVbu9et8rqULoM1aWptfJQ8rVtFW8eAtddqG9N1v1",
  "key27": "4KzgzBaCu9Dhgy1xXhbRqJdHXS5Vfm7BNRggCTQqJDPZamzpRbos1XZih4fJMLUj94dox77TA9pMQn36dkkCG1ua",
  "key28": "Q6T8htFGMdkN9UXDZujGQ1FwHVtNnU4TMaj9gnhAJsaXEVaAtGs21f1NJ8c9vvAAki4hiT4wyxwd7HqMcNaZtSd",
  "key29": "5K3X4TaL1umRiRsgdFvupoNeXkLwXuN89iqEwFJ2kG2oYuMQeGFoDrbySNTUPJMqweNj2qzBibUwNKJCqonPNNnC",
  "key30": "4JiQWMCnViMhkzDoGnKPJPsFoohAxsZqpW3NpQhLKbK18YbVQBZwACTZwqneBBsY59PvHy18ukgHgwjLSqEn9Xu8",
  "key31": "2rw2gWmrZMKBXoLBfeXnZ6KXG1rfFoJyBwseZwFrYWVxo8XH5xXnpb123c3ZdSLvj3mmGyzzsr3H6qymjWvdwHbc",
  "key32": "RsX5SH3jAurjX9dDxdP3QXhvRCq6dUifat6YJnDSvhkxFdRvJEigbnLYNh8ne9a6xsRu86DsU8C8xaPiVrrChcv",
  "key33": "4tF5UMWqbHgKAjEqRyyT3vQf8za8Qk9nK8VHXd6qMEjUyTygba7zK4DqnZQ3KtnYwtcxnhyavqKjUeK1od1FLyAN",
  "key34": "2Xupg2G8LCsV7J1J1QMbLtRhv5AF9aDP1MBeJq5zdMPNy9YdgiwtXsvKeN1wN4KQcg5HxQfdWt6co1GW8LAoV3mi",
  "key35": "e2karjjaCdA65uxrXBBAMmjYx6M24RAAQqSqT23okU1yCaD8seb6tgtotcmGvRDuHva9iLRucpXheQRS18MBWtV",
  "key36": "4Q1coMAXaVZXr8ciYcicz32jB5768g32XDHGVEBxoAeq28NowgvDYFnHu8J16skHs63pgiCboRY5sqWU4rbniQ8w",
  "key37": "sDRj9LR9VHGtSQ8otK8NkgqPxNaoMuw7dQEUvVZm795iLFnAVPEjMbeyyVtzHZQb6d1DM6Y2Y9gr519jRYk6Lv3",
  "key38": "3yt4LsV4aZ3Rj4hWjwAXqziuy48DAhwH4CWCkjPGVU7Au6EapSnnd2GPEtHU1nsnimA7WswkdsgGJjH8Z2w8WUwh",
  "key39": "3ab7a9UpEx9KovGtDgjkow8RUmhicuxSRV74KR1VsoV62Fqc47eLFrGhF6U6Hu9ZkAhRNnSkiFfUDAdVkCwgQh7d",
  "key40": "kUokuCRCRf3cVRyDeKMg1Q6w4MdTapCkLcjWmxJztzDsB131i3oE4Ktq5zyy7riGkh2xeFF19jnS8Mif6TQnRHk",
  "key41": "2aTiCHuAk51MtdGG9KbRVP2PbZEFaRmriD7dJKTwHdw6VmzBqqRnhaFLeCwE1MiV8ZHZSrv4LLCBfMydgg2Ucw1F",
  "key42": "52SU9vmBsWgkBEVsL714CoSy66ZZzYqoiNvcu39f2jDoyzrpzEZefL46pdsVPYMRKf73DBDz72McDxCuqie1sALk"
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
