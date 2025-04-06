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
    "d7pkMh2i33sahywJWLDD8Cj8hTfQekRc8QUigeweCJKQLU1YE2TASaa1NnDu8dJXAVEn4GfSxcA6EWQBenvusSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gi2G3y6ZRphJ83HCYCMgaUL582RsKvviKZ2BpKwgzUqF68RKyNnintBoWoUoXt5B9zgRwSD2MJnoKoK87aSLfjH",
  "key1": "2eg7sfYfbP2DS1LxXAfv75se4bTEiwqZjiMA9CMSmsiTfoJpfbaiMQEnEshzK9HhenFRUrNWa5pcCUudfu3AeKLa",
  "key2": "5N6sAgp3jLQkVEbGHLM2cS9X6KQF5qJ9w17aAPDEMjnnoEs3RbsGUJYe2bBHfyHq1bT3zqtmQfyMqpa77AcJyCdY",
  "key3": "2AjSiEQ195bsxmeRz1HYfXyT7g1PufeXAy17CcvKS5rUMj8yjt2CbVeEatwpVR9pDw9H1eEzJ7zTKgUgDsWEnmTm",
  "key4": "4jRqLeiUdGVTHJF8mjNdSHqAEEvkBQPfTPyRkVnWVvax3GtsWJ8cKwFwU1wKjEmErAwKZ2dHkBWnLrR24SXY6DYg",
  "key5": "2qcWRitW56znAcRAezKAUZSKBd71548oC2ERHCHrR9UkH4kXnQJSGDevc6aCncKyBqUqM6qAnuxGgx4TLK2z6hWC",
  "key6": "3VKkU9zuqLqYq9dvEVkqNriWBnm6ELRfTE3JVTJrVqBCDkv1XwAh59EVJDzPuCENX6RtCdjkcP4dDW5BuQRnppKg",
  "key7": "4YWx6c6tachjMah3XXAiuuT4sQwAyyGV79yVoupf6GQ4CJVxVmquQ7J9kzqAFgk8pLaoUb8ngDwBb8eVxxQyjt34",
  "key8": "4uzE4WFhAfQc3roVnbKRRkaSQAdkF2yMCes8ZeSLS73WvH2GdYeaNbcYPKiBB7KgTzhoeUG88A5eq14ydAsyfyuR",
  "key9": "4xw7oQQ1mLBzfy9sAHanjF6BynYrEgxyv5McY9xz8owbzLyJCpFoeGv4voQJYMwsVTMpGrTUDb9UzyUUBF9EgKyd",
  "key10": "3Xjeg4aNhJS192covxFtyQg2mcQH7GDexhXUAX4j3ZffmDYGu5JKKEPRexDFgVvaqGmWrvR7VTZsd7KSr3W8qc14",
  "key11": "3K1DVyMrgYHH4xHrkjVf63XZFNV5WYgd2rh6GvgobA4nBsG5Asc92S8uCeQyTePFpZz6tBa6fHGtgqkFYAovvnjB",
  "key12": "4wgQ4MBnjWJD6MP8SgX96deWfq5xSH36aRinGez41kWCZ29JKKPDG6CjXDtA4fjWboDqRixpbi4B3if4KJRP5C4v",
  "key13": "2n2qsxDGLciFJFkHUyv8UMj6ZGYDZpA5aaCZJw1ZpEwW3EymZNVnnCqNzdyNPtMf5ctXGjh5VF1rsrGv2aCQqndi",
  "key14": "22fG4fmfb3uWtAeBZBtmRgEuWWBdbm4AdDhxK1xA1AyBb1EuhRoNo6VJkd7rh6Cod8i1m6gzg4UwqHPBJ4t3NKAN",
  "key15": "4x7TMKKag6EFVjM3adAeiP2kaRvu3Ed1sjWLfnkkZA5EttJsxLHof4TVfL7zD2UmWsCDCJNgqrvwJdjasGYmAMfE",
  "key16": "4dFigfF7BrAB9hvBhVY66dj9dDUEuTQyvhXooF9BYZxVieLbhVXpj7UGuiWo5RWQ694wq7LhwsN2RityYDBfur8i",
  "key17": "3r9beuSjrMTYz8YHNep6kK1Tev7k1Vg8SVLt58ZBgx2uyRrcWUW5eCsefQXVGmN4eNcWr4djx1mZHFEKC7TEVTZT",
  "key18": "63BCGfLX3N3xSk5SZTdcrvZdBznUCLXQut93S1kpK33fhkekevY6xqajJhYPQJnfVNuLPho15JrbfhxgG4tXgo6W",
  "key19": "3JpVDMyhYfCSf4RvTDWeM4AjiJ3V1DqGz1kPEetSzsu8JJKJZ5QbdYuxtbMzHGELtHndkyuuXbbCtFV5CwB6MRY3",
  "key20": "EvnF5R8Exc2QZRNM7YzB9NTYhv3ppxkkih1uezUUMK3xEKZ2kDU53jUhqRgTvaCEXFm95iqZds1gNdddGS81TUk",
  "key21": "5JskZAyzaqV3DVYujrEUxFAQEdfjoFTXt6pXNvjKSD8s7NBfdArFn7DYf9jqmCyztpBVnXduXrkrsBG6QZb28qLG",
  "key22": "4gGv5Pbqk5VhKmawHpVWXynpG56FfZMW24xxtJDPHmY8fxA4h1iqc3yAmhbJfQ5LqdidmpXcxgCQg9tSmbS51BGK",
  "key23": "2zb1ZjbYa5bBHRvsrZ2HRmvggwZtLNkA9JgWFrkthRjEBJJeMrz6vMS3ucDQWrkqgBViWpiM3TbS12vikBKzfnqf",
  "key24": "3NCvZowYCCQRyraB8sKqhhRiCHy1xvZ7iF5ZqVSiHWfx98Uo9bHkjAQyMEZ5MP6rRaFkhryVGgBKDiL4b2wHWumH",
  "key25": "5C16JgLLkmW9xxXbsGZc2X6TQ9CwGuMpKvTMsVBdB8DnVMgErG4g5KMM2NMSDeoakgtMSRwJARnLy4g5ivKfxCvX",
  "key26": "2UgxgV1An3gLCtyiD5VxTzSKUcLtYk7PX8hcGiJYqifxH7ZurHZH5719VE6QL3KU24jWwkiKBZhPhfXPGyENEnkK",
  "key27": "39if3cP16vaZgwJYKRH1a7dUgWTnA9oPFY2rTVY54GaZ2Zxs5o59M17rykeKPqGXGrUMqxEGATEeYwJ2zQtP24rz",
  "key28": "2vufXKpvXD5YvEYJmezFG9cJ1Ste9JJKg4rAksPBXGDdg6SgRQE5251WwJYUtFgrEQKDPLnf5Ddhb1Vp5V8pDuH9",
  "key29": "5fdM7uZaS4ftkGfMpo5kye9SwpgrSNWaKr5JFSZAjCuXwRfyK742VVvEz3H5gKp6UEztZGFA2BfbXXrjtD2K3m5v",
  "key30": "MDvokyYggxWP83nr2q27tCY9ZYkP1dba8Y6n9PNcNUg77iQzG3m4G59ezWLGwTb9CKLKDXyKadw8dXUpH4VTHVL",
  "key31": "eCAEgEh66y857WKXRWHieXNTvdzdJgqX9Pv2pjXtmHeUD1ejGCtPM9UtJHZtCeBRdECBfkGmq2MuLAmReck1Ba2",
  "key32": "3QfC732MjCRjiqQAxyNMD3G7MFfLdHuRjkZNtote87umh7Z1kR8i55bSx6qdch9nJJtt7kyJHgwb7xv7t4nGVEDK",
  "key33": "5Ty1v95ELts6LkLMkr25xbc3ZFhAHqymvPKA6Epy5mMZBLR4ka1Cho5ag6xnT6K2HPwRmm6LkKFzJiKxWkbSKuVp",
  "key34": "2HJETbgP4Yq8UyCW2wgf8dv3ZK12JmDL7w8pwPGKEaeze8umhN2tQK4LwHU8ewuFE1e8BGiKZ5upeDdeeWMr3Zm",
  "key35": "4bVad1XjYPQf4TUdCBeU25hUfBnBvWCxAXDrwdGgbxBMZVnyihjjxckJWWtvPMx9dKnzP3RfB1gfb88rirRpPKMr",
  "key36": "UMcYuKRvnWVKtqSwABrfsrdX8hBZYnE3VkiTQUzYfEHvkKCYeHGXBcrXkb8gMLsWRzLMyur8DvNH4vUXCfatYXR",
  "key37": "5qfkoiRnmWFGHFsGRX8HLgsLjHzuz49xbVhUPv9jjdPwXqRApzvt3LtTycY3nLpWePJRU38nexUp7KBciVPzstaA",
  "key38": "1UVhvSe2nmvA67Xgiq1wrbSYmX27BnxSC8udXFVT4iF1hTUXNVTU7cnM7WztEnMd21oH6WDEmsEDUrBDXptZZKJ",
  "key39": "3zWy69pat8ihbqruBvC64sbSo3C5QrvsSuVVh2F1tZpzfdGKfZzwZL8rmYuR5afDLSLbRMC8nrXutTciWFDT3iue",
  "key40": "4NPWsojR8SuNXTKpfgVzNfiqdPfCZLe2SxaF4dQTHYjNobaXS2zCm3NRfxVngir3QJoPVCz77rfZk87pQbzsDEXc",
  "key41": "5U94nqPhvAtyBSZtEoc2MNaqd1mQJDx7HxQGZ2q5W6VQYRBHVbgGV1omhwibesPLJFQUW5VNwXS4Ph5G2gKdGkrn",
  "key42": "76EkuYMUN6UwpwoMrNp8JutAQaKWECZThKm93g1fSiLQEiUeu1Bum8Db2pE9PYWdSH78eMmEJef1tGo7JNKyRCJ"
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
