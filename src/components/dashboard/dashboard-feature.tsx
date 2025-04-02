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
    "8GxP65shVktNbERroHoquBigUu5N6zzFicwYjmBvhg7HNoHTzMuWnpxagZ6918WFW7iuei2AGTgWaWa8yi9XbDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvZPzBfk3axg2Q7L3MpRyQ2B6sKmpKXrQFwbQQXcjbRbv8VRhaEj4qkfqKatPfgXK6GcwoAArNYEfg3rXHWBpx9",
  "key1": "61jg8HHXuk78FP8NJoy4inXVmsbmXw4eMEi3afPNkpZDYPLYB9WA9sEn8gMySrps9WUS6E8iG6BdD7xKfaA7Ag6J",
  "key2": "46GfdNzZvWfuYf3U2xaoPmexTSQDLHewUTeBCHPgvhkRzQTkVMPaREWV79LVLfSUJqqhW2x7bhej1oEVXzVf4e3Z",
  "key3": "47wpmR5dMHGUpKTMhqxxDrwtPUCVjtQLR8ESbxkAcePgVbTJR986UtvKgbQ5SC1TsVLbQ4aZxohkoan6uBK27WXT",
  "key4": "2Mv9BjRQNSvmACurNo9Tr3U2CGMVrXcPyrM5mtUc8siDixxoBAUQVfMNumpPyL9Z3g2f7YXUeH8yRK66BA8DE9aN",
  "key5": "2AXRHjHj3pqGTSvWdTtVnQR5VRddpDcrwND4mVH5uon5ZB8Ab4kH9a3xSqCPeFNeeSqvt3LLYorzFmPDFD8Bi8Hw",
  "key6": "37KiwwjmJv7mQuLWckRhZUkQ675CGMTAZwccmkeBTM727FynyYZYtvpxEwxKip7EMzFnoiUm7LHwyxsGB4AKqQvo",
  "key7": "6NXZ3v7hjG7HqPKTrsUWKSwUyZGUWb3xrRT7BGWX2TKUkMnK31sAdgpKrasdb8SefHNbew4kKZxd5ns32ywcFmN",
  "key8": "2d6xLodLhcKnxiQqqZ1a9iEASYu2yjAFLzoxoG4c671u1mwJSfVxWz4qZ1xyyTTDzrhNtNQ3n6oVkiYedxMr9qed",
  "key9": "2z7Qbhb9BpohmUaJRJAGErN4P7qTBJEU9J7s27dqQpMgtyxKKPhkKBikaJbLu2yknd4uf7yyX55xqaNCsEKUvSUx",
  "key10": "33MsdUJD18fAYnS6tszrCxncE8qJivbrmtfrpBC3hXwY4sC4LkJ4iuq9F3bH6uevv5Cjs6Ztjk5J5z3KDHuuNWJW",
  "key11": "4yK3rsz92nfVCkQNjeQjxTUVHLsnkbE363GzYMTwqHcB2a1B838fptUqnjVaBDSVbU7vjchvdN5i1taLcXToNoFx",
  "key12": "2wThkJrEvGKxgVb8jfQVnrCjic1BVgUZmdNYBmrGa511omf8xhSadCQYQGFJv1Nmw3o2taCVyTPdfuvnYbG8YRh3",
  "key13": "4artbMHdiYK9XUcxBGGDVqd4mw77AEhjNENZa5Mpaf52byjDziENSfRwsm9jTAQv1zFrTc7MxngzaWh88uQbHwca",
  "key14": "3VoKBe5h91juUs9dtsMjupGyvwFta1KSjdCRUVmvvupGYRL8F6RvGiiHvn3BxsUi5hNMADFAAbdXx9DKfUuZ2N1E",
  "key15": "2T4hV8mWbkEve9Z1PwpxgUu3vokKMo29KUzkjdx6vVkP3GCLQj6M9DXPngX4aaYW1KBpFzjdaAQpjuUkPow3wqd3",
  "key16": "47n3Zr8GzR5yKsxqzwNHmVm2RxCFaUEgX4ghbggw2govZ8gtpeYCHgcMLdh5kbKVxAV2VgFLYnARfM7atfKSLZbu",
  "key17": "62rovpRk3JNZJxjomonwDb7VZDXkkFMQosUxKAsBwWo7dMAYdVWwP5k9ahhNFdTXuh8m2TZgQzrQukTXrKVt2oYx",
  "key18": "2ArDbb8y2y3wLpGV2PVZZrp1orVLJh7FZbrZuj2gWW3zXiwJbqJ3bHEdKoiX6SynDudLcJGU5WBpGLUCaMeQ25PR",
  "key19": "3uZEoAHGkkXySHdjhoQL7VL9NowjSMNL9jTSUHnfzUiUCLM9uZUYNimrgkaBRYseRBLgfcv4hc2DJ6p8BYA74nxr",
  "key20": "NacRL5w6vRzZ45HnYwhwpSrxXXhJ4gdsgEA4N7YWosQbDpU6LDKK8FoLVp31QYcuMYmnZ5usER76xySTP7NXzEV",
  "key21": "5EzLJJB74nfrVetSnez652adG3yY2tmqtSkAXjr8mnFKR2WueUrEA8dU6yk7h36sAjjpFb1DLfSipikxHznB3Ch3",
  "key22": "buaZMSG16nbpzXdfTZEgsAwv22wMWaMGTUcKTfXE2o987FJUJy9gg2Nr3KYAbhyczoLtuyisVkMuqLtuhT3dwqM",
  "key23": "4qRCCGYxKjzLc48fTQrNVJGoLq34xwVqKLKznDWPrpvf9qAEKvChVKmBf2xqNK6WHMSPLNZB9mGYf5P2ajaWwJXD",
  "key24": "29qpV7R9fgBdScHBnXXocXXPknfRcjiv3xFTAZboP8Bc2KELkX3PSSXE4kqYFVTUEiSXvnFtmFyEKD8GX7JPxfKM",
  "key25": "5U5pcXhX85ntqmkG4KmWCE4Yz56anVvv4t9Mp6vG8vhPkUN9FB4gpuLczWwBhWsaPcXb8vYKVr4W8A7jSD22nVrr",
  "key26": "4jitiaXssLNEg7oqxfECaDJjacdzHHPRbQxNvan5eYVpkSrA8bJaqwDkh8oM2KKe1kEna2djF8zpchbHEgBt1UAN",
  "key27": "5E1MHXpb78wXQh6HwyWHPhKtDoNRw5kkWFJbXwU8uLPXjKRFqsYFx8g23jHDX9GNdaX7Sei2sGMKjSbvjkfjzZQG",
  "key28": "3KMtKdgTYwRRs4qkEiERnhrLzNwdKXGeiQH8B9tfoZFd7tueTpCXKL5zDALLpdWLa8eRWGvs6X5bx1PKW5AV2zCZ",
  "key29": "4dvCCu1zgnXmDriiECrMHAkhgd8s2uzLS9fJpYsjS94nyaGShmqjPwJtxk5Ka8M9eDHWuPKfyZiKvrTmQ4zxDZ7W",
  "key30": "2HEsXC4zhVXe4Ti6jUZxzHw8J5ixEDEVqfBYhayHGnkDwS7fixfaapFo9i5torKU7ZkQ7esXGYD3GquqB12SM399",
  "key31": "39QoCTA1H6wEc8sm9oxJuqg3Ks1HXD6U1mFvz4JEtruA5BM9pA2KnEc4R8kWEwaqs3YckvVgJAH19s3cYJJqwGcm",
  "key32": "65yoqGbBitxffgL49NBcTXDPGdGwVBqZZivK1RVA8RwhozKGArQEjLHwSPPpwJnYPL1fNzQqVDEi7jybHZg5x9pe",
  "key33": "3txUm47Hncy2dBW1e4as743M94ykttyB2iJBLWfzqKEijsb3MiW4rh45ZhTyHrbiRS9GALie9pPcAFusYGDmkZ9g",
  "key34": "2Y7WmG8ts1YKNyHgntS5YizfX7b54kEZPupddNTaaup9gG9heexwUxiJ2c4YB65fSVL5kP5u9b9AUf6L4majpyt6",
  "key35": "5tZ591qZgExEgFrUiYadSjETd5G2xQcBtAid8V9C7qq5T6XjKAvnAWG2rDB6G9BZAWsgHfbKja8iLGJUTGRREHFB"
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
