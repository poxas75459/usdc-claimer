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
    "3V5NYQPobxRnTMwWCeqgLUZ24u1DrRgZGrQzBcAc1MPTZLCjTbMVCzkRdCBeFkbdf4fyBqWPGrcm1pBgNKzG4D3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjgMcjdjgQ6XnxUZV5DXNdDzeYnTPsFwtNaNqTSttsZ5WsB8bpMWGPAGwgzAW3WGtz939Hxake5x3PwwzLZstu9",
  "key1": "4RCQiCBxZ4UskmMKBmrxYQs3p2gkUJvPHW9v8pUiJaPP3h954fAhLf8pYwEUjfNpFtYcM7dLLg2dFWCkPJtncTbh",
  "key2": "5R4zMmdCtEhFTTnD6eEk4bHnAYDbwBUh8MXKnmiwUNMw5W4ZFNp2jNgWaHmBHbYztaaEuw4BrqffiLw1tynU4kLp",
  "key3": "4Lv9QuknrxVWCneWdyrpoXCCzrYmAQ4CYqmBYBnfb6CkWjgCb4ks3HMZmc2bhp3RioXKKp6M6oK4E9ire9kEL8j5",
  "key4": "4hwzLxX8ECeJuvYmbdsVww24LMvZ55frWAKmTqfTdvYroVHyMvrh4Z7hqBF2MR3hyDs9MNQ5GXWiNqA483zL2YG9",
  "key5": "2E76zjxrSWQeeV6BzJTyUHJqq4VXfjmLTCDqSYiz2iknzQVGrdzh25bYwV1g7uTsdGqcJwbCQz5a6afp2YdfauTS",
  "key6": "4s1wutQepKvKSsAybzLkva4j8bZyMuyfFhetkkDuCuTq2oV7mg6rGh1FNqanAs86GVc4t6AuV5Db22ed1SmocSF7",
  "key7": "2AKMbWRv77U3phHWkgjNKwZce8qz4cVJak1asdPGAVEURk6hzc9TrpeZKwhf1PxYoX4thFdd69QdJui1XiT3qxPh",
  "key8": "2RZZ6GyX1jxALecPja3cHXZuowKvWtSavVx4doTfcUaEnRJGHVhXKuBDwMKk7EhLr7wW8z3wF6K2jPLovp54KLCZ",
  "key9": "5BFtJrHt8Fny4dHqsej7P12dEd9QviAHb4er23Yi6HfosrdLmUWyMcymif9aNiJLKNn3d48NSzVF1hYBZZiGCyBy",
  "key10": "5ChCcQBzN6Ua1DmwVqfE4D9LDaVKgkqXWbMJz3XEH2BrUzcgvwaZrWHvHhbq7o7kHS533rR3yyRVJT5kuevTunLF",
  "key11": "3RVW7ZDcjktgnZiZun2FMdopT9bBnnyHxJMLAqsGHXZSWyCq2eYkau3ugrGVH2jAwVf91kke5Un8WbH3Bny6pR7A",
  "key12": "5BtYYKHHcwExhyrSBZBU44vK2pvivGhL9dtSR6JYDvPV7CVQSXTjJNYiSx3ri8T1MCQNNFa5xupwWD81uZVK7q45",
  "key13": "2TXcn9WiHsnu13ph2Rbx1WugtjYPHsUi36MJo5Rh3sDXnnmLzXHCtKRnbnwsaPKJRu1hR9tDRyQBAW1n8KETziph",
  "key14": "2UPCTuDVajgeg5gM2vdKdHyUF5LHdiTtnBdf8uJwm6N3gHYDQQmLa3mzPwwse8moTMBcAYy5MtUUTqWfdoTYQiF6",
  "key15": "49Gm7gT9hbXqjTZSLNPFkjxHmk9KnZcSGaN2ENXaadQfAWtGJjntB9aUhPq7ZtJVbYHQj89oCgop6cmbuK5iZYT5",
  "key16": "5urHtUTqaYHZbeXFkBWPfbH3p7iipsYyT3NyihqTvozUewSx8V1PtfJjpJc8KQrzzt8ToaRTfKSkuDL3jfCaipZR",
  "key17": "3uWEsYwpFuja7ycCstU8oGBs8WajW3bcgjpyisGCroSRbp6F6NaZ68Cr8G89UGH1Jv85WLfhdoLEeiwLFydU6oKS",
  "key18": "HcFSdDUYrC4rcydU2KaUEi7o2irwFyyAnRPBS2vYHyviZhbthYhwqhQgxB1id1N7B7Ncrs6zMM3WEMVVNUm5jC9",
  "key19": "58bE8K2Ge4UK98Cv4V1uQKDrqhzTjyURdsDq7Ew1AphSDdeKLZb3T6qXpNssCPZWXoJyvp39H4U8jre2GA3nGVVz",
  "key20": "5H4SrufFVBNDFkStsYBSxuB9L1ZcPr8aky9GXZ6unifop5URfgC4dLxCJSbgDityoJk7txJtd8Hp6cwhSFob8Szu",
  "key21": "5wNtycXNVjEWRmdvYX2Uj2wmqRhCWVA13UG15WYwyN1bGfxxC4B91Jna1f2fJYzXknxzG6kV9r7djcGvzqTboVoS",
  "key22": "5DiuZygXQRJuczpFwGjCF2XyRjRykjBrMjrd1MxpcRXRgjxV7HfNq4WFVC741SQ1Ts2BZF7kKKYMMXQUdAeH8xrM",
  "key23": "2BC9GNELLCvP1GRw8iPv8hXFmUfUND6CThXAvYQv71DQVB5NA8uFEViCtkhT9iZkr36zwGSTQe4tLKWbDYDmdVz1",
  "key24": "41cQDrjphsdKMFui2XmE8QSDJPEZnezysJnkYuMSSPQESVx9SRVmuX4WgrhDkAXf9sqCwuvNHD17xiKsJ4KmtY35",
  "key25": "4bLnhW5CqDFdkaq67TpreuxG2N3dAdWqY1eY1ep393nG4msP99BwYvs2gtSB58Y9qJN1bYqDGTnmBw1SELdZhbqm",
  "key26": "3ed7rDrSTJVMUJhR1QfmYwTtwF6MiN7VLwrXSjTooYurDykzs4HTUQ8r2TTrtmz5FE6q7GRUgMjnxa3Qg6AWCYGt",
  "key27": "5fv8FEPhzKUZdLkdi4SRCov6cZtgnDVrdJRew9HwSzeCVDUvRTpZ2FEbfLiSGggBB2w8VQynMMiTooNmb5aoXRy5",
  "key28": "2gHdhnHaS5GHypfA2NDs6jiLkge1yUcpxBoXHpi9byNnPH2xQsmuaPCJrXCsGSqhsSh2g9SfSzdXdkMFeGUtMit6",
  "key29": "4jKgpmxSCeiBYP6vZQfuvonsVoHfZuyWN4eCMHKmue8jmNGJznsx2PnMUtKCfN8hDNv21yyVQUVsGXmjdRpiH5Jv",
  "key30": "2ZZUJhBwZZhiH845fVVZk12kBGoWNQPNbjxSe8xqwqo3gJqPf2iUHMqZWhNL2RRpKSeSx9vYEsvXdLaeQiHJKvqR"
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
