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
    "4eJAZJdfqvf9PQ1TnB643jx5ZGu7QVQQsjoDmq1b6QK9174QZxvV7LH77fFuGVkbSjo7wBTn71kiP6h6vrAhfrSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39noi5PQc552E65Px4fu5QkrGshaAheG2Rc3wpSofgXL8nKY9tBcdRmwbCSawuthAS9DdwS7JeFvyDWd9RQ9Ut2W",
  "key1": "NwCiJmohPDjc2vTYmmHpWvabcqBY9hNsFLHhj5eCV1KccGrFGe6F7JwKsJP7RFwufeKQDToTraYz8toCokSr5N8",
  "key2": "4xaMLFdFpXkbj8UuYgYGd15xyJw8NDwmqqq9wB26Ag6SnLb4ZTrM8vywPjegMJFto35Wmw6FXw6Lehm6dfEejMVH",
  "key3": "5PmDnAe8jtPCrBs8SQyhE7j2JCqiJufDzoYhW46tHQ7K5BmfWxawpkJudnw2iUKbtViGGwU87SP6YBLZ3aJowTuk",
  "key4": "4XN2w9nT2J7SiviWjTn9RTJyJBHVXoxAAoB6HDRYyo7c8H3YFgLyKjkKqXXQL4nQiMeq4bLq5us9LQY22iTNRM4q",
  "key5": "MU4VDfRydbmfNWXeE1GPrLvk6r3mu9fjRNDt5q1HFGuHskp4PrzrZmsrQh5KCSittqmBZjFhmygo2FSLVSYJnYM",
  "key6": "5UHHT5M6y9LWpd3vRxzkCbpBFJEiygBocjaKWFrvdkxzwApFsJ13mhoob8d3JrBBdgB7rM6NfiJTEaoRgPRATJot",
  "key7": "2hkiwDzJQSf7cMW3Sw1HFoPr1Fkr2RsVMSWfEBTYTfrtmDT5SHnYyRUJfUX36pypF5By2vRTv5Uwex1hiCNP2hQJ",
  "key8": "5tWaUc7QuHpGAqpnPZEbM6WMRdiPjBTwZvxHmrKbvnovDtJiSXg4NM2TLydNvjehuH9vr27pQq15JZuvxL5HF2jX",
  "key9": "3sGuodBACwXrcbYf2dDzEYvA8XdCzvM9r62AyYoCWMdLuz5bT5mK3EQ4TexSFU8qrabmui3Q6LvBq7qsrKQXascG",
  "key10": "2H6VqGYBtmVygE7XwxGsqsRHr66owjQkyxyfBWxz6HT4Y33h3WCYX3oqLzqQGUGuYPdVoKVK8gkYtnFfF4biMCn3",
  "key11": "4FCGxxUxhWHrnqSAZSsoSSA1oDMu4htVqY36skGA1qNV1rc4HAPPz5Lb5nrv15zSyuBXJwiG6pgfw9aDa757gXuW",
  "key12": "5enQZNkcD5rUThCEeMW6VSj64dFaMW1tmQfo4TXwb9EVFL7tBPZabehtGGBmbGmWTP1ajkQqmqKCLejpDtXAQkXP",
  "key13": "2qq4SeHBNMWpkdMwwfnXbpUjbTaBrC5eqA68U18zN4rVMfAGU24An3LnN8Xt7h5PdCByYXoBoePXsm3iDEa8VuB7",
  "key14": "5n9ypAhr1smkHyXhpuBSe7MbX8knkc8XLP4Np3YkLaBRzzJsMmxS5TbxCQba2hLT4sHTmbSVfUMFmTcatCLz83wG",
  "key15": "5G8ubUXxchPaqwXBfLavBKEtj2toRW7h7hefVKS54fjsqPBYWDDC3x1ybwYmZZm52AjC7TqvxmTHcKaJUKScqfD1",
  "key16": "4jJQXfN6EbPFU6RNCQFyAxkykdy4S8fidKcnK1CZLogV8LpTzNfzsDqWtErA2bBXsnzpaP7k81BZq83baG4mSnF",
  "key17": "4rWAGzwi6Gety1VEZgVagdiBeVqR5nk3XCkjSEr6kKeRe8wpxigUyPD2oKgzv43zhNE4Jai9PJNyWfxLCRJH8chA",
  "key18": "3WT5pobP1XaojuUnkmR95NRSW2huyaD757rGqsjoKEyBYiZ4HteqTYEURCSeQKbfE7Ekmc72rmkva9MDuWvTcHw1",
  "key19": "5xUkJj75f6juKoCxMe7GZ6zBgswgy8zwHJitTe68WyGzaH7Wxa3ZpueaRYb4FN269yWxbwrAHxa1vinRp76sYPoR",
  "key20": "42zmEZXchysdjcCQp6Y8j3JKqF494FhD4ihF7MZom23Bk6pAJsMSZLzs2unEMNExYoV1ANbB9v3yeTmoaAdHWdsA",
  "key21": "mh4QWmXK2qWXMoeqMGLaXmBdFGBdbuSE3JGvCCvb8W7CsFL5kJTv2hYoAsU8ZVCkeLURe5Ghj9KRMTjzz4EsFxT",
  "key22": "4d8pAMcBHCWTvvnuu22gPkui9fJJAEXMKnELEfDwRTt1EcGVJcrvwYsv1ctUGycLtLSHg1NoJcmBWrJ9pVdeHQix",
  "key23": "3PFk1o1HB1Bg5tpPhBj1iyog5x2v3Cj3e65H3VJvtmMypEo2Wkvq7BwzrPGXT5UB9oQq8bTSXpiJDBpRBiZb72yr",
  "key24": "3NjZEC5xUgLCLbnbZRXpjiYS3zqSDmHhu9NuwL8ZTt4gQhuU6A18CVwaFhXZSrb2Fybd8jgcr4jnk3ZhevRPxP5M",
  "key25": "3SX3ZHKtXviKMCf5UJeJNWVVgbzq2VmCQRNXHrDEAmgVUC3K7WcrkaeAVSihpFB42DQr1K4vq6q9gM6pcXRotcqd",
  "key26": "3XUAYh1nMgSToNP1GRfA1tpRFTqCLbJpLTGSBvNdT6tu4oSwMApKwuwbpAiQ91B5JykeX8edgFwzZYPgpn51pvi5",
  "key27": "58JBswB1dDHAUEsaTtr98BB13hGtCWeFpmN5N18PfXFEdTC48Y68gN7YEcUwZbzWkiFjK9eZXByuoDuqQVDU8CTe",
  "key28": "2TzhLoLs5f7vAZBR96DFWWto71zWLxaQ4EiEz4TYSyCphmDnmZ9ei4cdE3mARUGacdNpTiTDncPyP6AoVqsQhmq9",
  "key29": "4Yh9DTHBSR48R5t8qehLE8Ur1RDLXEL1TYE3GVvaA99PmPEqHiuvv2mXYaDshKA2jAxs68sJ9CfhJcCw8djB1z75",
  "key30": "hshyuGQsBYTGrAL8roxgtXAtNrhbsLanUW9mRC41cC6GqRqdmieEn9vDsKw5ajZLCNmG6hzpFLesz3v5pg8HScY",
  "key31": "2qX8dBKQFjYcKFDEfke1thEs8tCD8TsYrpiaP3TC6n2HVZvnNAhPReSyfZvXHYsc7opdyg9uvZAfcthT3fdu9fkg",
  "key32": "2mZknjybSdgSUj2G3qxXseCv33tzD6LukW3XqixxuFPuKb5L9ibDJgwEjV4YHW43MVcSMRcpGtRLnYk5WM5FVVqR",
  "key33": "3Y5b6zx4uXGgsC3T68Yb37aXioKBLqkrZiEHiqTMC8ZtHoHDUPB6ZHzsNqwyd5AtpNfPWjAcYLMc6HTGuNn8tp6w",
  "key34": "3qDT5bjBFqDLQCBmYc7rBooNNz83TMBBDeqaC6Mo8is8V3VrmQkpRPaEiYvqjYoWdfX34uuSGAYktGwsdyfJ5Koo",
  "key35": "36dEJnugjX72yufYnBPjvDaU7KfyFYJ7ptMxVqXHFz9DDXpe1NFDYAjpZLRZr53kPNvwY3mAyoBBxKfte4ScqMpt",
  "key36": "4wa1MmC9rdxEpHXouqUkTEg8FJNwHFk68KbSPKvkgmg5DkmgSRkf1jrUv6f2VUkx2CLCn4MCUmWqp2uAk9tiGYbj",
  "key37": "BonrKusvHeEwGGjvv8De8Ff3V7aS7fJRLFeCHmKxQ9dTND1wXykAag1Jnb37uemhQRi7E9oupAMNY8CJmFKzF1e",
  "key38": "4NB2wwci3xQHDQC64M12rCBpFgYJFhrc1jfwK3hSfjWZTbmPFpSeV3u8owE2BUGux4UtS1UFayCBJmjXVMccRXvS",
  "key39": "66Dimd1VndaJ4dG8gjYKPShFiuu9Z3YKhGpB4GhVJygHDH4rBgRkJKzt573DwVSjU6CsvqTQQgzGBj1TShp7QvE3"
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
