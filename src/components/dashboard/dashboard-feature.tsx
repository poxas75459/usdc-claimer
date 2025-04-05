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
    "44zQq3iBv4PLfEDB5CZquxgt3znTzPvgmd8GEFs1knqSpffNxh1uFnFixvdatKRQjeSgzSKV5avuRSDtEQXN35Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S8XdRPUdAruNRkosqFeg2obUKxJdzbf9DyR8yyjz3fzUjriC151PT9dhzGPn2w8FrBfBtEPHrRXorJPFKg5evQm",
  "key1": "7AaMXAwQoay1vLWLyXhf9A9okUuXAuhjmbpzm7kF3RmVmhEf5SquvMLwqtZ37MEpFBMgoUo7xni3KpvmLDMhzhr",
  "key2": "2wcLfwFxo1F3zDER85PchVVYnbriT1DtzcjKnZe3BdSHvV1wGeScCj2sVzWSgDBBeFzqtiCnWwmKAFgBaCv6cJVV",
  "key3": "4VjVgSYPS4prghe7HQeVnKDv76ysfzrV4N5t8nR3DBbQNATKntYeGM11DtfmzTqXQtXYScsmkee5Q7NCrAky6GKj",
  "key4": "Z4BdWGHhERLgzH2cfYm6rb646TSE12ZsVZ1iKzYRifKVkiZ6YyJSqzA4wjWthQXmsji43SrG3QyrhNcpJWvKrLo",
  "key5": "4ApkS39nRJ8bocPEW99s3MarVqGcYHA2xgotdV7VcmH7Fin6knAf6dgV3d6aUyJ829ZgPQXDYhmYef2FuS1jK274",
  "key6": "qicHzA8N5VQBbnF4gjWLprrQrsK8K9PMa91LgA6Af7ujVJQD15g7zxx6FxDCJXjMKXe1b7mcABRrfKhHN2xUGwk",
  "key7": "3bVRo5E4LWvk95PxjoWjuR1xV2PvSkfbMdJNxg7rzaAb7vcJuZMXdZizjL8LcMpaFQKsCfD5JEBbYuEqcLsnDEUk",
  "key8": "3ABAamFqrVLVdVToy6B9vyjNTuigHCCmsqmWZdkZaWEBtbeja6ukLNtJGwmqLtaofk63T2viPCo1Fjxy1wgy5j51",
  "key9": "5PBaVsa6cL5P5q5At3JkkqFE3ipDHtNrazsmEhirPJvq9tcz1iGWucTMbtjF47EBcK28UtqnKbTDNqRH41ca6mBH",
  "key10": "TKuuzNcrTuhFBxY35k8RmeHYqW2cQpAyUmpPSckkUqyRUkuZfDYPzkqAoi9G9Jm7ZhotQ1F2sSgrh5nJVvVCDZY",
  "key11": "4WPfeC752y8az7uSWB1ET2EqG8KDmskLTFgcV3Zo7z3yEt9bhf2S5mCNQm9VKUc38QnvJCWHX3hnB7PEwRPyTjPq",
  "key12": "62zpwB3e1h1ufk7JLwnSNgXTcuTcv7p3qd7qbkTqcHdWAEamz77Y3isN9JX642BKMrbDS8XJjRE7D389JnwjYphE",
  "key13": "AiSWd49c5UHpv2tTtGiFTY4vbyanDYf1pCiDEETvEMpzbtQUK711KCAJAMqZQeDqTRZJZshYsXEiiCvMaebDPLV",
  "key14": "5HtHuB6GZh4pkSBJfXeVM1594EW5bRZvhkrcEmqXzytoEsJvCxjU4nfUDTETa42Rox6Us6xjgAhp719bra2Uq4M5",
  "key15": "32Dahd3Yq567kNnvJXKBJmbV9jmG5FUqjvtoRpeuMAzfTVoVHZfxkqeyNMGuuHVyVK7zgGdyaJ22zFF3fKWnThhr",
  "key16": "Pi3ACd7vW12qnHq7GLH7uS1szUjdx8nSbqipdrkbbdQca4Su8srV1ArmB6eRfnHfshgJaPKxuwGJnczsuoyRZmz",
  "key17": "G1q9sJ6nZ8PE9KKjN3xsxQzbHeuA4BY7QDEMMREyo5fLh5xyTHtkoVixFMsEQ78jrAHsozGh9PdbMowotCUdcrg",
  "key18": "3dkR7jd5vxXJvSChCaonJqjw2ya5uzEP3VdRxUJe6DGBmP7MVEoJTWNmzGhMhmNHUaRg5Qo3EVsdoR1JAvD7p9BB",
  "key19": "25fEifegknxfKo9n6qer8HkM5Lw2UqTDtVwNuJpLdRYGUAgQ6poovFoUW6MTKC5CR3EQLZurULryjP8Aiufr5542",
  "key20": "31KNtV3VQ47MLE1b8mST96f9r8LocAW2mraqHhAPK13cjvRpjsDRDJFAL1g3hppGjS8mGQdyDXGMEwm7r5bDxdk9",
  "key21": "4Ri4WXdDkWA7FMCfs1ZjYmsnzb8iu7e8AUCwf8xjSZ69o1p2u2NZ941N6xNNR2qqT5hgpdS4uhifBbihrwCwiq51",
  "key22": "2PrCTGPoPBpzDWRbs8DgY7HBXQa71VAo5n1s1YYu8p5Vezo7Ddsnn5UB9QdQyM132LjBr7CQrh5VxjwXn5TkMczH",
  "key23": "PRW9uYohDJQXbGKUvr8Azru3AX9Z5kvLu4SrMGhC4pNrWxnufKXSFx6pAdkJV77q1ATBwW23fdLzHyBh2ixQD4n",
  "key24": "57Q8jfHYyGoNYyRW463ZjnfFcfVd9z8kdbpkQaEKBGqzLFmWmFFBEUqBPjvZWnsRk8budqd4VDHthu1oDoFwnSoJ",
  "key25": "2YqqzZG6cSYbmcMRJkCz8asKXDFkmQoxuirwLG25chAeP4VhaBvx1mAhxaCLqwhXNSmrdJ6rJ6Bx5Cq2HqkRsUL",
  "key26": "5xxS4k1wtye3x8xCLL1K2bu6jVKn33yCkADZqBrgzRhUnrbW3EoT5HJjPXG2suuWFpwbeiiXkhRQnCZMAN5FJuh5",
  "key27": "2uhP3qMY1rAAogcTZAE8KJ6YktaNfEejuvuqiMbpTn1aAPPJRrZkQijcS9ZA9iQs8hnYfuH771PHM7gYCHNFCrZg",
  "key28": "4gdibJFFpE7bRDsh24HfGEPbebMUrG5VP1Uvgn3S4FfFr7tW5VhCjJBB1a4gWv8NWJXii5gaWREpdfYXeqdDL5nr",
  "key29": "4cxqTKKB7aiKo1JumqY2nKznCf85QvnfDMNJ4ymVTYRRTj7JZKXqaajDT91Axmxgh1sGRdazn3k7G8fhWe9jA8n3",
  "key30": "4SFHXQGrmDLyWxwR8q7998b2NhJTzJqWBXDHiKcxZHbCMDhzLRF2RJh8YVuVqXXehJMu2JFJybqaBxajjK9H7e5N",
  "key31": "5qgpcmZ8Xfs9iqc4ySPKWdv6eAtBSwstGwA2kaz1qjauMPKat1BYAwjX7KWykRw1DD5igZeoon93jkgdGkHK7MdA",
  "key32": "2P7HeenqXDquVqSQGWS1WwTXCj452i9AczNJwzD5g6UWx6iLEwWJbAionXa3noRVZhwds5FBY6VpTgaYrTqkSeps"
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
