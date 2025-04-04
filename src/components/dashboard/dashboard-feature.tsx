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
    "9C2s463ASDp8xnNKKyRJFaEQy6eCns7zK58aJrxA9scF2gRGTqSpaFbpv9ddFq47thmi2L9pyQacVL9uD1abt77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MwnePFV2J2hTL7nfuHE5oRnzVAkaPjXtTX13GJboXCBeXtcWRMSG9mfKUZ8afHak9wsrEm2Vh1RoJKpz2tpcoh",
  "key1": "2crDM8qfMmCrkMtGH13ybKyqccBffGLTX2m4GHLPSSgwZzvmBXAqkixDAPYJdz4NPj6ZhFSJ7FGHn1rQDQgkJead",
  "key2": "2jNCiL5kPMGAStpj76kXwgt16oFbboRSqfEhcBF7Mzefs9vURmfmPSWeUtkXVERoVpb3761uSVCoTcXjzwLhqQqV",
  "key3": "3Tea8ezMtuGyns7PbxxXk9hhPDDNmfTY8UovGEDGdrMzoaYA1Q6C1bCMxaA7hYyAeV7CotrVT98SRyqbonSFkxok",
  "key4": "56Zi2AV8Ze4aDx7YER3Ybzt3op7T5hkyTipL8MpqZsfkKxCMWbWaPkzoqSWr3ZqxQWbhkCTUsgPdNBsF8eyEog7P",
  "key5": "3H71iznd9UYnatK4nhStpuzLvbzjGF81fbXh3XnsUHzsPNSmrXbrG7CA9LRbumQ4a3RD8Rq24pxv6uCqMt2NHCFC",
  "key6": "5LRMWEHcXCZ9v5gDGCrfiNZh1j2osuZDxMqTsN2v5o6qYuDSMwGeXohZR94YhZfeRjXFFvSiPVahysLdjZiQUkz",
  "key7": "21xVTyU4tUnycEUw8Yoywkddow62op4UXszEQQovHVb1WtmKZ7uY63o4tLd3X3CBYRFv5eypWNYgsqLqgq8DJJuD",
  "key8": "5VHyAM1wBJmhirP7WXBDgv8GXkt5jmupmpxiQ9uc3ZbHJtW7WEQVrATwT3RZw6KAuZxgyozbcMSAwtnj6ES1JLw4",
  "key9": "4zL4Nxgqgdic5wRKRDU8WkX391RVQPhjNqGm3UeTjUM8eYTkWASWN89E8qEqVwnRJyFfw5UWwcQ5A8dZ1cnUHtfD",
  "key10": "3re13RQ9myhWXqeeuEpLcE4tmYgwmw9SkydC5rTpRiABHUWkpjqjuGc5a9BmcQkTAQdaiKHXDkRvuR4TxfXc8c3s",
  "key11": "3f6V3k8ud8szHqKT3cW6YKJDStiGSEZsxiYdCUPUT6kQwrY4nb5HkaJKRAJvyiPmgdFh6CE7aL88gXjw8vTYxBh6",
  "key12": "4BugFwjWicJVXF7etNbhXJshfijCxf9PzbSKVhiRf3HUTtZKyF6q2G3nCCk7RpNasjEkeFhtUAprtGcmNRtMqE7N",
  "key13": "5efi5bhFrFuB4h2JHZW2sDmswgJ3627ZbSnDy8Pn9XqW3r6V3i5kzCUxQdsZfgTayg9qJKY5avJUQi1c5TX67523",
  "key14": "Bp4p2A7fMtZe7BcKpuRYLwbzVu15UfNaGQoCsb32ZCWjRbbiaLDuSLEKuAnS48vUdzJNK1WBtr3PmjrVuzyd5rF",
  "key15": "31cw86qfkbkdPPwpiEP1VtbQm3J67miY46wXivrJ5aKyjpGSUhin1MAWZKgEtfJTXorVVi2cbC5FoFP8DpFeSpJe",
  "key16": "MhpgCqUBPFLYRHKcgpqXtD3Udz2Wi5cm32wsuNQFmugRJqHjmeWAkfAaSTQbriaLLekneXPFoaf9V5J1HaJdADH",
  "key17": "39EonY9kzUGnwhLu8vgYjYF7JVw2eTFvcqsRyb6i9uP5aVNFKQLx7sQmWbu9ifnSFZxHcXsHbnBgxPDdnELZo9Pw",
  "key18": "2VAw8SFg4gCeC79UQxfSFrDwFEJPsHpXyVBTKZeBjc2MgTeEgiRc2dJuuS8WhLaq92wz2zbtchW4Gujq6f37eXHH",
  "key19": "3mg3bVPBLD2zjxaM1EVXhkkFDAXjpauThLrnHFEgJCEEym82sa1bm9wVD7N8YkKCwNa9a9m2EH8TmyyVFbCSjegJ",
  "key20": "3VwrUxey3WufpMKKC6bGya9yVDPxA99TdNPvxSjriWYfUQyLsbxwaGBvmAiUhQnGGKrmLqiFHebEWZH3Usj2Hh74",
  "key21": "2BgZFEeugh7DVSKgU2jUdfK6UfdpBG8ZZrsg45Rpp9TDiv4scoGw1GZT18EqNoDFkk3sD7dUCy1sUGcSKvrarVdt",
  "key22": "2EvZpiXFq5crkAx7f9vh2GbgNtrcBHQcd2Vpz2faLfCSTtCpLgRU6qgeM5MWey6XUbu8qcjxrMLo7BhkxGUxi2SF",
  "key23": "yxs5tBdAo9yZbwg3rropxXkXX4e5kAnvDBTbDXSD6yXybJRNSUEJTioKhjf6vkPcydaDoasCESqEAnYQY92sH5v",
  "key24": "5yvDRS3FgpH87ZbLXLRXHxK9k4RXwok5J8kT67pofGLNuYB5AiPvTpNUkauMKL6mXMCui2ftDRrLeMeZA5FkVGH",
  "key25": "u1VkwH9aiXoCPELkUVyFKJjhsjct5Uka5N2Px87wedVZfhkxHAL4ARzbzUwNq8DFsBxtYhUM3YtZFqUF6emK5DJ",
  "key26": "5FCkXWpvqz4G6psrE45GYSFEJBe5b8tLauTuXj2gprUCJf9AEGJoJYhp4Nhp7FNj8L2jPRbpqGb3tUnsX2J9qQhw",
  "key27": "5qvJR3tYarwYqEm23Ctdyvimx8t3kbCo8dDYyrTgdJLi9Bei1DkzCbSUSX7yS5gDZy64atLAcQevVrNkE654HYkZ",
  "key28": "2TpH4GAmAspw7kYEtZnGUJvW8HhbrBRM5TmGC8G6WK9BUYhefpzhqWQRjtP2WjB4FHPYgooMF9CEyCpkp762HCiV",
  "key29": "4N1pVCfPTJtVykB21kMBa8b5G726yD9PicTQFUBsuTcT6wgHd5DRSXEMLX9wUwdL8ahAxMdU3j5edUuxqn8LBBaw",
  "key30": "4KMuA4YM5qGoMf1MMyMYSYhNTVP3Urkm277CqngU11PMXp69NHMZfKmKdJipfrdB8TEfbNtrdA9w4PhH8zjeanp",
  "key31": "4hSUcePXqHFJp1KGVAGB7A8cS1gVxWeYn8gSoY9EvsLffjfHa8LvaPBX5AVkcv9Ddr6oTsW2316pkTnHBGsBuVGV",
  "key32": "tXFk8sRbDDFxeaumxVjJydEuJ4XCrKW4kwr3DHQdoMGUuWMDgCcPKQs8vkmahGz8yuJgur6HmLi2sHJ8rijxZej",
  "key33": "F4MWdfrc6dSytJvF1CPbHeKRjPbLfv1zVXcP9BZF8seJ34oVNtuUqsX5GPA6EBQAwJqGkBP8jNTxKjbJ4AroQtD",
  "key34": "43BnT816VySC2B4NXS7PsoppGFWEYWEyLeoSqjdqMpjk8nxVAZXJ7TCvr8y6vt6wH37qhQnK4Hiq1B3pX5YVYzAZ",
  "key35": "hhKegigDKbzJHoJ8KuSeVt9ZyUJ4gzV5Y1rzVJx6zy4iSWEcgVMem5ipCtKUTSXvcbk7LmftmUZwsj7kT1pMZwo",
  "key36": "5Td1JPmsSHVzP3qNhcSUqbD3C1zCBUAhUYLSbC4pSaHQAriQBhyAm4G3oqvEyGkZae22q2CutQ2HH37TpKD4G3U6",
  "key37": "5RGENp6X4rQsFUGR4RkFtvVZLeJXZcHjPMc2FQ7pWC6Nz5WYGvjRQZTjtYyQ1f1221CgCSWSLvhzHKP8ZSdkMEpE",
  "key38": "4G5i8ZJsGfP8JZYf5CJEyt69KL14tFxHCNdvWxi9ZcdzFGFkkjZVZYNABVjt7NjWr9vt56ZPAamyruyBUs7mv6nS",
  "key39": "2kTC6cjFHZKGt6wXGtiXNf3CoiaGhzK7JhhiEC1pqxdEqRSpmqJChpJnhvdwhLt8J72DFsmzk5RqHgnwK6kiFLxY"
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
