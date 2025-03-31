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
    "2CTdpoai2iFGGvzUKA7NuLNa8dtUyrMZ37kjxRJMn4UimMnPWga3GhC2o5FPFbMFQwsQV4RconkHczBsYvsKtLTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjHvs6h7E4bJEXUJzsFvB7QBA65QYPyS4BpRvcWuHviPD4FKETw3GMHMizrkjNQXVJ9atVdbWPRg25AFY7wfj5",
  "key1": "2q4F6P2zH2o4ziwXBQf48Htnk8uzR31GgTXr3jyQwxbp9yU34cnRPaXV3RXjruA61Z9nsM8VSqb8R2kX3JpFvz3Q",
  "key2": "4XZjQwRJzCh6KMd3H61z3aiYL67ksF8Wjur3BFwicL8aURj2WFEukNtjbqmTYpDHrKiEdSYNd6Eox8Gqf8HxuSnf",
  "key3": "zjicJgeDtgeZXDCsukUNNKVMTKMFyyzQwoQBcs23B1YwHhQu2kTRK62zyLLiPFtxxhx8C88UpjEwbgYcuBaGTu5",
  "key4": "bG6HbWq84wjdSn9UiNyLaZkKXAoohUFZeixKXjbArmnqYFz3QFTZ7FArGxE9geyuFDgaqXzRjzPBqPT9sdwkSBt",
  "key5": "4AFTdGtUaSJryBmAUvSVpLzzTAF99HSam7x2Bnudx77J45ua9nuRgRBc7ZyQcwcAE4WpVghL1hvxGNnnPh7CE8Gm",
  "key6": "hM9Ty2hu5p7xvfrTb9KZCWGwLrjt2PRQXqCSn2UhYVzUyznASiji1DDgZ947wz5yPZs1uGWQjmCJuwy4nVadPC3",
  "key7": "21YvhwirFGLLfMq5xQR2izD9zK2ER9QQpabQazXonqmpaRHhHQFNWLCKNXfa1Q74LRkuQCDdMbkVAmHKdynQ6h82",
  "key8": "txFPkRqK8eECzv8UVkiaqtAQThJ32hU7tqss3b6ShTJhzNHPUAK3uex8XVnLdr6Y2QQfTWtX96nSB5gL4Gt1cvR",
  "key9": "4g96uqL9TRfn97CrWySX3NMXykoyNP4sHXfhyXQc7P3FdbxCsEfvHZUXg4gc16ekXHqTJt2rHEJtoPRJuzbvQgYb",
  "key10": "TYTUNsmEfeW5sCNY8bA7WeapWsyan8zHJbtEZ7hgthEsocnxFhp2AT4nssMhk8WqEFG8LqmXGx8met5fugdPFE5",
  "key11": "5zP2sgNVJNnimeKwvi7DB2X5qqkiZP4jXsviSGYihHPxM65u5viBVwDPcbj5n2XmKCwbrHu8h2yMzQwd83enQoV2",
  "key12": "AUVZHPWZP9rYabnQVfTxEKvLF2SMRTAXWx1cLz9YNnpvKvBD2Ry9LohLLXPD25cArPAhPMAAAvMeFEsa9kSora4",
  "key13": "5Ksdb5d8mf4gKHTXTAiUNdLbDSt887rXs5vzH2jjXoUCzxTAjDgVcNm4nethrqrKGMjsqyoATkRVtr1pU4EHaxrV",
  "key14": "2ocUvUHkpTpc9bcnj1ifAdBit1bN7jmqQgc2MVJnvU9W1fYF6mqsu7Ks9T6o7p13gtbP3Dy6FkqxxiWdsBm8cmxv",
  "key15": "48nPmQsuiG7h49nFToVEf1TXBUyShrVmSGymDfFt5XyNiT5ww8qwkxz355HoAvfdYsDuZLmc6KXH8SGPsQJ1sMPi",
  "key16": "2JF2PP74qcGwMK4aseqYK8uwkXjzZMFdVZj6Tak9gyMWqm2rzasRQc7ywvAWRoqvaE7XPLYCcZXjSDEtk62Vxni6",
  "key17": "5MqZTannDAh4BoAv6V1NhrQwovtxr1NL5XjMtFXR6oKhWqvEXvjoeF29tp5QorrUpK776Nm6rku64dNTUjNXxFC1",
  "key18": "2fvQXHphqV2uVEcxPdrGdbAvkJSxtGJJpP1c1e8HqfcmqGedLGrcVXYFkdBmALKUWyCyMuwjeQR6ofndzmFPjAMa",
  "key19": "5RjE118ZN2btTgkxbnT1AvMoNP66iZnuT4AcnJCS9Sd1FKAT6rg68t3GhZTtbf5f4q4znmBbc8uTxLLdZkALH3kv",
  "key20": "4nRex5Fh3dtUuNLFm3zYopwWnE6PGJ6qj9ZxGzp1mepye2e2iuP9orbEWeuccFKSGWY7Co4E8sgMMkqNVdhLesJ4",
  "key21": "4LL3QV5xJHcqepeWjWH4yGFqUWgctzRegAHFJP4Gh5ZKuK1MvhLgcSqCR5XTmjTFJQViXLhntYfhZZLMiqovcuDq",
  "key22": "E7WjBYfYZCTf6sdet3gYDfzAMLY5DbmW4gY55oUoFDjKVKpQLmRZZsV3pxznuCmtBAA2kJrwozvhTbL3tAccbLf",
  "key23": "N7A3ykeahpHzhUga6NKzo5mwETvWxcBtgbUYLR4kajzRBUF443J9jozzWiRLat3K323fX8gpoyr7SCrXXfhrtAe",
  "key24": "3hQqxeyNhNLTxMpUHK1YkiGRMvEqDqmFvgiyywFzrSEWeBbdMFADrWmyg3ihxZ9fryU9QcRQta2toWDrUP4Laa1M",
  "key25": "5utK4jZKWPJJModFEEQVJXY2Phb7qDym1uV3S55teNGNxfMHw6VFmx1TNqfB3yUzDATYNPzaMFasnjaUqZXD3pAZ",
  "key26": "3wMaYwqaJ8pcDyCFLiGTAgnLvYeya7z5dZbPmYnsJsA8ZeSdt4iJzN25Z9ux2MHTj8vuYmeaRYJgvjmkRyQCr22W",
  "key27": "5ecPp3CMzQvNF134ME9J3x9FQh7SVq4uP9P4AmBQMkrjQpYFTZb8xXdbcr24SzVzGnbxZxLxGBGhbg8Rb2CBQii2",
  "key28": "2eZx96kVonugjeddhsztgaspUUvHYwwWZv531jRWicgmDC1YNPzhghSUJwzRxuCXbnZVLKQn8Z7JFoPDwch2pZLw",
  "key29": "4oS1G6NW5xykUiqephWtWr3MiJKRV8nQihSQB6U6oCEQJ3jxxj4XkcaNuUY6ecJ75jNjuufxwF7Z71XRVD8jbiGB",
  "key30": "4VGuQkrDjpf4FHehoF1eHHjDL7qrvQxLNF1ATgjWAkCFLjdWJEbFyn87Z1ntTacvtNBx7LuKkh1xo5RLAMUfqVW3",
  "key31": "2bNWut5i4Yc9pc9kz2TQ13R65KMtcYHXDPvh1iD7NTizwyY2PHeqv29C6wCCqgq7MaBbKgASKRinrLFdb3S92WrM",
  "key32": "4pSrVrCtCGTB6GvNBBtVzJt6YpAtTFoUVsfF6ZzaKdmNEX648vrdXVPFTPFnMDh5QsKQ2vbK8g2ciqs5jHCKQrvE",
  "key33": "66qC7iwxYFooVDzStQb3xwq2zeCLKxDyNRka597KTi8wCbFNc7zay3rRxhpxZHUQzLDsTt4AmHfjz55R5XemFAPF",
  "key34": "euHWTRosgK24g4FwamPSzcx1o8CYiUxhtKs4QCBqxM8XLKtrpo3JkPKaa3uKmdPKFdvVdNbBYQHdk7WkZ6odsyr",
  "key35": "uJEq4YawrdDYteidYYNogir3yLcSRSURZmNemcJtiEwMBJ8YqQmnE79zXFq98bYkiVcw2hY6kLjXAWGgUeCcaLe",
  "key36": "2Jgz77T2x2wqbco5dS1U6NHaFWYAATSibNvTQSk5qC1FvBUaoUu8twn6wAuZFWP1Jz1XC34quAPz6LGNTmG8KxTX",
  "key37": "4Bi1SbqiTyEwZNE1aVfnSGBQUV6wJVE8CM6pwXno74sb4Th3MfihX4Z6BdHEGoFnpmBHCk7o9FT9adNL7DR1XmqD",
  "key38": "5PcFfEuNsGDm1Aew4wbynFKdZp4WPVCqmw757u2jo2SEwjWWdZWhcbeHEjoiiXxS4e3FyeaWfeudUuA7XCXxetCE",
  "key39": "2rmMwPBnxAAZjsw4kSR42CuSArQgKBK6QrdtYGEjFVn7fc6oUqxTdezugn2pXrtfC2knLkvBTmPAe6swzpDe1MkY",
  "key40": "2xRM7q6nGSbrMYva7WbMabWLy9PxmpMtU3sz7yM3JvMw6qRkh6TaaUChic7pcUpkXk91rMPoksoLLc78AnyDu4Yx",
  "key41": "3jQyr9hd9nK1aMhhu7hH4cMabfsg2Gw5QghjBPZNjsMVuiKEg8K9BDpSCzT9aRybnuTw4bTvgBFiwSJvtJdQTwqz",
  "key42": "K6r4aPVMkKtgqwXS7tzoRexBH5MM1Ex4huZzQQMnQ16WvPgXiChWqtnu8hJEiS1a3mcBNSEiBNU5MdZj1dAv5TA",
  "key43": "4BmY6meJP73TP9vWNRgDvHjTuQGehRgJm26KcoGrfFN7SfRzwBTs9KseRRJFLcfYYAZazQWQDkfLS6oUBEGCACdr",
  "key44": "4w3JKW41TsXcZX59u73fKNDKUcnAcTBBMJhQtvbeyveg3N6sRKpytzWtUVDk9y8G1eNMAmYiXgAZ1TPEvpKUKyP1",
  "key45": "2Fp1EeHRAJCYCkVQaazP67jJ5EYBcADvvHCFsDi8W7iq2Scx9eitq18HW7EJmCPpU5reKiF6nijaFnsWAMXWfZVE",
  "key46": "M8LcvmwKAvAAhVhhEvihU4tEFwNiCLGm1MLYFiFPG23uAUSmoXTC2GSjFMoUNNS7qtVYjEckVEeKoihWHLKMJc9"
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
