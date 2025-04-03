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
    "2XYFY6ZnYke4tS4VsC7x6iMPxvwtiKsr7neqqvPqdv7F3QVR65Xue14JWMUBTm9EoQ4GsKFTFrS2p4CLCCwWCnX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ULjkj53EMH7WTJQABg2UCdfK22NtDjkjqABGGXKB9ph6CT6p7ikyJcpCNZ2fmcKnvJX4MBRKHSi5Y4MRYP5SeRR",
  "key1": "4fV7oFjXNbSGLP7H4UohFqaJuScvgSqBYPpxP8rXViZ4VVZzKksRmS55RpR15Uiv1HAfVBHTKBNi5SPykucu1Mur",
  "key2": "4SKmiZcroBwHjDKQkRhMSYAm3uZBsYpDUTXdVqXWmLJymGjR9s9y2rHmGKy6HBsaXKxesCtznxKr5g9J73yS3VJV",
  "key3": "54NLvKrkxexZ7EPnvyKxE4WvLNTZvVFfpPGn4aKDeitwTFH8hiiXWPx8nUXsqKtu1ZEHamfQwUK49Asqr8WBtAvu",
  "key4": "3WhBaXioowiGWZWaEy4o2VvYi9vpmUmi3JZRHAF7fVtx3ptvERggztbivUWqtbfTAXuyCNdaoQtXewHyS6gycDsV",
  "key5": "4EtEEF1eFnFBrox4m9HtotyF81foJUbmVEAkxxCo3gUygUej8VH8gvr9UmEtzCRmjwDtBqMr1AgmvYvi3TgxSXnC",
  "key6": "4jDP8ndSjcNGhFTCyiMdvGhcEQCyqqPR78Cna1PWGVzDJvxVuE28zEwS4d4W1rcUyY6C1pF5kkuRhVFSEEqowA3a",
  "key7": "uSCKSZCueQMa9LZswXepup22FNb24Wn7fhq8UUzsPBoB5ZfoeUG5sEsrbXf3y5nNAQbe6BoQwToFNfNV5HNGGu7",
  "key8": "2PWWUf399LBcqvPMgBxi7HKFZ1s1fmX2TJQ7TVJryCEBg32DkR98KvjiAkdNTMDhZwGQqtTV8Td38VfaPKHYQWNZ",
  "key9": "4WkuXDUJXJFsLvSMzuGhu98iovmpRwQgzmh7yBpp7CdTyCkrkKBWNFFKVEjqkYkLLLj9NnJpdMhzTxXMdez653TT",
  "key10": "5SrE36KpugbCHotDrocxt8cq3q9JZiY9o7S4DMrmYBx5U5GzFDppueEFqve5F9GARH494okNwpJGSJH12TkJGd5u",
  "key11": "125MHK71fwiUM2yfEnqkJq4EDDNY4nBdYkuxjPxfL82wKKJYN5jECL8WdSPAEPyGRK6VqR8KGN1TVjYVKpbF4RmN",
  "key12": "34TAEtqTzZ5TvYNjJaiCXSfLsTgRELr763BmhSph8vsPDRMkjUD9tkDxHAgMC4M5bejyvptpKtrzQH9FwJ7WUhzu",
  "key13": "3ZtWJ9QZJhgh32kpDh2ByLcQszZyJUiwp72e9KyGbKXKA9kEVUVMX658GuiBS9UGSEJ4WHn6yWiGYpYfJR3HpJ6Z",
  "key14": "4UyhSbGzyrjXY31rQhTseLxxmoPYRsWnKZteyRJdGydHrcNasc4KYzmSVcmpio9BTo5TKtmrAVvDYYf3Du3V7ozY",
  "key15": "4AQVkGQvKKfjJU5smmxygvyuX996ExU66zgJS1Jh5n5JBUmiASBdsqUU8uPPmwmdWeoTUNm9fah59AY12k8ZEU2X",
  "key16": "4kpfzB9LEViwtA8KPr7LbvbQhPEEjxPyz1piLc8NUPZcp18CEG8mJyJB4yKsPnSmnRew7XjpxTYPo15pJzxUBzcy",
  "key17": "5dh3TXMLHnVGn7MavAsRNjqL8fzMCovYpUSDu7Au2UgwTXjpbxRUFtLenMBEsNGExbxovLxvqGPZYvXmL2Cntnpe",
  "key18": "59AWFLoQ2NDmJrqr2eXi8jST5wYLayUz3agpX6HJALdHW7M6g3wuiWU2er9upuKho8ZzHTEztpMyKNYiKEuVHcGC",
  "key19": "29H7euvpcM5hWK85dMr1GwY6Ktdx44VF9S5bzDgN3DPmVSGgtHFCpi4iQ17A49iaicfCXCiYDPFqY1SxDaY9VAXE",
  "key20": "26gM1yQFuobydWTxXMnWW6UZXgDgJjuAV75new8Cm5TDg1Ev2YXdtyhwvryHKCg4Kz8TPH8MTonNZySj8hQYB5Rw",
  "key21": "5VL9X6Wc9FUfYvSNFbULp154bKkhumszzTAqH7y3gFsQPc2jm7Q1fqvike8EGMMtPph5yqk8t2gBPpj818Ga5jRu",
  "key22": "2szVoZVVcQZQKsnSqR98upSj8jidBbPJJca8Yq3v8eAoaM64mobHDbNUPQeVTqfRbf4ReFtajZVhecBQ8dR6AT7x",
  "key23": "2ofjjMrwfUM4Rq8zSv252AAC1QS7R6m4gwhnwFibdJbYLn49vCWJQGLnpzjNovohcJARtfnxQzLPxkSVy1LBsAiD",
  "key24": "4fZtyELSjCrcFDej7CNV6JMSAAS8wUppJExjVkDu48TYKYemvjyia4e6eDr2c8frUbwHmmKFWPtrgGN8LbvvYQfb",
  "key25": "ukY8yPk6wgsUaCwwGBvEwpYMfs64h7acDTRrZWmKEbR35HgZoJmTC2v8kSySkKgDQN3q72svcfFrqLKiYY3Q6NL",
  "key26": "5iqBTmoaQbyUpYg8MSc1mustozEBYr6W5bTgx1s5dmFqnwiZUiEPZhoNaVNYmjvAHFyyKbitDVKdXx9qpcgXJU8d",
  "key27": "4A1SPPMStqQomxGKuL6gKUMkuct4qQpv9jrtc1W7JWnqEzNA2ofC4kN71P7ezPKXgLGTngFVMr6wtfHP8MYNg8pa",
  "key28": "4zXw9o5W2PsiQ3Ad8HZKoduLaZ2MTUYDNQJXnrgBhbbpfsKMcY4tVmRtAntLWVULXAo59FQNBiSFNEjhdhq2wbZ9",
  "key29": "5eugTgfyigfPeHpSBnoEvtDZEP1MGtytMeM41BQwtTSAJtyhsQYXNnf1Ug6VEboaCyp7W1RV8QicpxkbRAtPgEQu",
  "key30": "HKsDT9aQgjjUgp4fGW2dhjxRpsG7jZsSZoQQgZEAWrQyi5xNEwyrdrhxYtG3hrDruAD78YzhDqTpH8eC6VyEmMB",
  "key31": "4Z7jY5QhdbrbSaKzyqMLRZpDDGu4ZYjpR5apXZgB9QSboLksvb7eujtcfTigo6AucHm7Pye91pgEVUFp4dG1jeNC",
  "key32": "4iLEXwR7kyLH3P7RXnd8msdPUkkaDrWsABAyfbTGj4ifGaUA1tDKrJQ779xFSHVFaF4Sv6NN85ndFQvqN4R443fM",
  "key33": "4UBoDgEiruJvkKdB8emnDCCu9nfGyXH6d4zyemhntPK6h3HyqcvknWk814CHbUaXjpJxJLxMGqjXr1SyfDj5hfbz",
  "key34": "2fKTCmVzXSxtyPAuZ1ihpwUYQvjpcvJ33M3rATUvQZNLftev9d1Nsz2LcP4mHgtMBfojD21DLcpHrEerVJ6zhvt8",
  "key35": "4Q1LwwsiRJJupXNWjdq2KvEUYCCKr6Dn1oVP2e354vBgQzE19Xi7tDcZZd9Vg1ajX9do4iR9MyrGKNgYt2KbCL5Z",
  "key36": "38ar8ZoMGnZjQSGryr7UWNp3MNX2yXjVjxF3GeLH7i4WhTKzp9QQLgu73yKg2dCAd3bTFwfuoLYS7thXFER7abr6",
  "key37": "4zDoaZQXeamNWbRHeyaYWm6VSxuokcg7Fu7wDBq4cbDCJSzLGE6eLnhwnMVZtGXKqGEpH5cb1DSY4ypUQPD8RbUj",
  "key38": "yZ3Ngy5Gqx38U3qeCRaxhfnzp149mijGdH131YMTg8CecsD7sJNPUKJmvp4wryx5HZYhjkhuKY2eXDrcmTJ4MgE",
  "key39": "3V2kG6H6vYGe7nhKud71iXFLgLVUc2fNkt6uRGeAmpDgZXcawx3LQ5UvFzWmeMoNunLZmx2C8PPJ1uMZbiAq6Vt6",
  "key40": "4HE66Knm1TQrMAAZq7h5sUmDzG7vuu4j8CyGPxpvatrH1gcWfyavvRpKYpexGz7YWQFJAaPnWNUbwT9J6WZ5N7Uk",
  "key41": "5htAsa5mANSUaiNtBYnbWD8FDxYnCfUoWehkBojwVEC2zom2T9v4RJ3dVrSrj54AvgU4kaUnmkk4H51ZXnqP2HPK",
  "key42": "3zBbsPpjgsGN4rPN5GXu4HgZHMnvk4ARpi4pVrHuEeFxwahvXfa42DwztVWiAQYhDyArvUEDQKjAvpsaZz7QET55",
  "key43": "2KbShnWxmnLbjCQRPi5G1XsmkyZoK92noJFtoL9h2PaKmbPojCSGvArKQ1j219GrkA3xbv8xtMYuQ6qL2eWAeVvr",
  "key44": "4GqCA7gDgHaU3dZ4cU3qdGXcgrLx7U6afaFvq2kpQ6kB1ECxjgKc9AHAanjzKqJBNCYfE42ew9mD1yJgBdp6qhaP",
  "key45": "NyJPYkms5Gt3MTj5kQ7PgxQjPARySahNLeKXQDebquuPcjPMLyW59FDEoHaHxj6enHvwRPvFegq7XyGDWPxHEkv",
  "key46": "3WM8qCzLKrZwf2QW4tDBrErscXPdJFWD8vpGY5ZQtb9o1yTjpcBeF3MismG1U3hUH4iJegaJNSSjD8g5hpwX2Be9",
  "key47": "5uoF1vWYntzaQ9sy8yySPWRZLT8SMu9JAipQy4V6VqMEoxPdNHRN7gde1djxmTZFoiuDdYiqUx2NhBqJDoqqd5YV",
  "key48": "53SiX9MextZscWSQWqvwLPGycfQi19PYZdzQDRkvYqdtHTQR5dG3US4Fxgf4SEjQNpKaSuu6SKetDTymR3Btr75r",
  "key49": "1PaG588MvxVqUQaKZ39KqP68YiK5jKNwTAztT8doRBnuF5Xb3zUNVdq8UgkEtbZFA5Ld6wf6uXxNa4NRYDSsxBn"
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
