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
    "27iWZnKzopa74u72ifVSnj8qgZ2bnYokrKdXBbJpaEeLEKoLZXghqi7H2vXtsDAT2nbh6asYmrw6PsYaQN5JnBZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpyzK1NPdcxkkNfWbPGB7TH5cYrvsJRgix5CJ1Nhdnp45YU6phAHwDx3rE4xcDBpeaQacB4LD2L1NFCvdAgPzXa",
  "key1": "3jHJ4qi55XhtsFjPvkQ3XEZJmQhjwqSX6ro2Coo6Vufd1G5cGEXUeMPyMD2v8iKtpw622degKdb5ZnqyJMLPhuLQ",
  "key2": "2xmjhoPNy2EqQrb2S6sdoXg991kG13RvgvPyJRYmCsymaD5NKp3oGeXQ5LMfvQD3WMJqnxsjEFa4N2f2NkaYnfRj",
  "key3": "5p4Jgu7EXSuny5se91r1gkp6FZsq8hmpRVo2UP9Z6AHPvd3HKntCYq5ezxWnWeE8YTRv3Ejb7p7UeLLWL2Az4gvv",
  "key4": "wmimJeUcV6K6mXWRZXnRBB5s8n2FyH9Kr7JRQfP8PuEcfE2cm2Zs4E7vENt9x5C5ZwGnrv1dvpHFw2hLbX7eups",
  "key5": "5sjLKa1k4pWSEUcfPi4FnkH7NWgwT1pFivV1B6Dc1M24BJo6LnDSRVBNPD317AQEmeiSnkwgLeGQfLXyZGCrKguT",
  "key6": "4Jcmy6EBmqprR8rkpQHk5PLKUpZ7sBt7X4RTjmvgFK5HtkQ428QCWbhQC9dqH3Kn7Yky1PAW9B6aqpgamj5nky68",
  "key7": "3eS3CWeNjSMu1VaTUbv17ascxAXMyvQuczp67WhMj87Zozw5fdoem2TaRmjkVmD55gGRsR5cn9zoi1DfdXuYhsQ8",
  "key8": "2WAh9J3CaDracUqWVPkDZHUe6DQgVnB4kUbGSU6fjhtHtKVAL3AGLownc2wE69SyenBgUKjUTGdXj9gQEZD6bDJZ",
  "key9": "5i23mDvuZHMMkw8Bzidf1ievBBbsbG3qWeTXG34Pn6eGWsaTRiGvcim3NNSD42h9jrkwjJ6W8G7Xni8MjJnAEJsB",
  "key10": "5YbeWJJqzKMYYDgmx9D51QwQybMbHVCwDMAfk1ocKYYe42JNakhHQE4RujDbfnaPk39VmzRt9b4L1zkoYmvFhJ4A",
  "key11": "3fesaP6wyy9K8uvbgURCh2nocvB5acqqjSMsVK4rXUbChWtEZ8k78SJcbwU9Zv5JuKYeDEcyAECcoj2eJU5N5Rqs",
  "key12": "4ENZdggcZaLQ3MpttTeZ5EB899pGCGbqgfgNv4RFS5Uu1w4pQR9GVYuNgsiCMYDYMXe25cbjcbAhFi8G779c8uMp",
  "key13": "47LyUbSbaz2gC6ZQ11NGnAj7YEwcrzyjU99ZmqsAE4p4vdMj84oh9cLMc3KbfJ1viDeFCBCjN2pjNcTePNxKZQSv",
  "key14": "53AAi85N4afARvRmF4WLGzA1bJFESDHwiQcVDKb239ibdtjS5ya5ZG4t2PfBLji5VeLLCjX75sFsvo6oWrESg8NM",
  "key15": "3gncdYCN9bw9J7nKvHPjVMa5NSobKUCoynMVsbGJiJu36o2npVfQLcTQZN79qsvC7eE5PqRTkn4e1fdoyZaBT9VJ",
  "key16": "5A3oMaiwjBkKEXiVwSwkZ5e6AFhFnLB4qQSHu3Y5qSUW9GCSshibZ9m12Yojb7ggFWnwwWvsLxcznfNzZtq48835",
  "key17": "4KjBJZVxCugoRaf7eGuyc7wpeUUcdALLiwqWCTrf7xYti1CZBEhkBPQbu2uX3c7tetMNWBAyg2sCvSKj23ciS8gc",
  "key18": "5s4Br4N6Xh8QX3sYEqewVQivQU4x2UPCMiku9fKdm55StKj9BZ9ExY4N3sK7amELEg1ytxbxjJWAwLsEKpz3dXVm",
  "key19": "3F97geeAbwZqXJYdvA56CPUaT1TCs4gXrjj6eaHsYWJ5sW4Ugmy38E2hdTya7QXx31ncEdNnTx2CrkesWVgNJG4t",
  "key20": "2XsU4R3V7HkZh8bCZGEAqcgjUcfysV6SLWvkhtx6XgCHACcKyUjY4nyP6q8mmWFodtHrm9DHPaxQQJV3q6Wr6t3N",
  "key21": "2d3Vpz5YeCFdScDwgNrUchLBpRYuy7bKathbfc52UEkeRdqipmHCngpM93QNU2L7xRGEsaTx6HGPGsJx8KiZWcZQ",
  "key22": "4Eda4ZRvJXgbuAg4f54UdQdDdEJoknYPwZvEukFLmm2mahW74Mrt9x5K3cmWnsmqUq8Tg1sqMu9Z1HKMdPPjGRPX",
  "key23": "58754mAP1MmM7KdAPpZMUbQnz4jKChd19bEcUvMX8t6MxEq5HxTsMSwxLry2ztPtJQ19k89Fu1rUDwRTLDcctFp3",
  "key24": "4Kkx2xfPLRCUEBJ8tpFBpgypaW3b7KhDnfnyhu2Dsd1upZfjukXKQXuPVkHkJeBP1yZCEXZuHkZRjMvjmsXSpfGA",
  "key25": "J2iRqHUkpRPYXuKrP4kCzUXKPj8jB15gkZWNiBSgxHyM9VyCbhM9PDBjzGTBW2ofHiKNMtLrPqyvFkZdAThLrZA",
  "key26": "2oLXDBwMLHMujvHypp8Cbqpiid2tq95JisYRjxVrzqENhJ2xfoKp5j3Ce5HuHDZSsz5uPuAKdZqHDmoD7eBXiw8f",
  "key27": "5zD2njjTewg8WejGrG4WzJQ5hB3wEHKPyuayRYvwQw8ohvYYQPZab3pG1UASaiXtXa4E9yg4gdEHU9joRABVJ27W",
  "key28": "5sKqjTLoeyTuy6kdVQj7hL1kyvseT8zM7yacrPan88f8RrKLXYaUteJgX7TS4YZMucGnuRpTiw4i9uokMs39jar2",
  "key29": "3hDNXYya6sHKZFjADEqtip28ezW91svjWfjZWA6SUmeB5HSkAV8mffAsMizpuNuvDKggunvL44Lcewq2VZGhbTbR",
  "key30": "3RUtv9rJwZ85ptn8P67eKrd1hCkvq5CBG2oFg5J7mcKyKZQsercqt6LyTJ4Dg26UqoZ4Nk67Y8eFjyaiknj3UfFs",
  "key31": "mUoxH8jBLy533pqjoge5KUEZXt7eSTgwfhtTMgNF4n56dbJEYZ45wsvV4maTKdEeqxVk9HCQ4aknxaQzrEzRVMd",
  "key32": "2yr3F6JUyF8KE5mnGrKQAf9MAQMKXbEDvGEnfAgioExvrxuWqNsKZ7QU7XsfYdeFLyEDsw6RckwDePxPz717wLkL",
  "key33": "4YA9SLWyuZ4vgPStqG6miCs176xex5AW1ALMn4LDXrHPeLJY13Wm2r7xV69ZYG5xw3c2ZMvmiDayaBBQBa4gHsRv",
  "key34": "5n3A5Bi1NRxTKNG947b5sTvrEtuj7r5ehNCjcj25saC7kQR6aMFYjV3HCrqu7P9PFuuXsvRQcxCKgHJn6r2fCWt2"
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
