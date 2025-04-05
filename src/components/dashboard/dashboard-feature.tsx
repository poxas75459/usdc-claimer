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
    "3MHCH9cHxytcoKV1qNV7cZrdkPoE3hg5q4AdQu8FxcqVNwSPPSs2GQe4EN1vhGQFu3XzPCLvDyNm6NgSZB7Eb97Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RK2JfYL9awvoU2XKyBGshUEGmfaTHbNWJny3SSHygrwLqHBk5gaMAbJnCPA4VrgUp3dFpRQJTVkeTFJxx4y8ECh",
  "key1": "2rqZsmA59vJ2FEF8Zag4cxNV1yDNPmgJcHbTgmViCwQJhL79NUS9hLFGNSfjAhvTCXUjWEirgrT5AZizURU37nLf",
  "key2": "4eeRPMciJaTTv1khPeQfigLMk5ryQj2pV8FurYqzvmVD1rYwh4NXeKXZuS9RRhXyRZcWEDbTA5M19ohgW8FrZLwU",
  "key3": "3kVEphvWJrBxGoRP4FQTv7AWt1Fhunh84yKVmpfKQPAVYXa8mRqvxpxdUDDAv8MVQcT69MhNjWchREyjESCc7ANK",
  "key4": "2HnbebqAX9DRjdVcMfzbW8dEhrL7n4rwdYTZBXg94m8NDrmVY9qr7soJNwB9BC4pTzuFn7EJLKYqQsQ28CmkLNLw",
  "key5": "3mwDpoZA3512963ryU2wDBLv7wGgEavvkNRwaDGnhPNWWrXjmeQoSCcY8FZgjjfAswPK9dNr4KYpkac8LdpZgGnT",
  "key6": "4CJQui5YW79gr6SLvU4chmwVfWKyxAbEBEMKKbVLMUCodA7FZG8Zgnoo2fCuPaidT2HnJyFkGb7muXbKRU81fKMy",
  "key7": "3rVr3Y75s54bQU6jLH6gpLR728iUoWJVn3z2TzRdfaCq9di3YjwRW1vaBRD1nMYRVQDibEH4ZxcDNz7dovyTadQh",
  "key8": "58rtAeu4111Sz2H2y7Zv4zVAqqjexiEp354wV7JgDJBA81SE8ZphVqm8DdAjKq42YyrdQpH3g7f1bGKMqsLBzwS2",
  "key9": "4vna9Hfx8norr5t6QSvE9538qmGdVntqSUS7UcAojTEbjjR72rtFGjj55cr2jaj1ftr2o8koz1w9XcdTZ5fDf9Jc",
  "key10": "33VaFrSifj5rza3sMZF1AAEZjqPvYhzdCXq6TSs7QjqGMbWswtTU1VBdHsovpMZJyFzjffqHaH24jQpERUwVutfW",
  "key11": "qcRCrBa2eAJNM8r8oDWwst3TfbVvm1Uq2d81ozsyFHfRuGV6vEN4uCgiQji8ohM2a4jW47kG6MD3TYuNZ7XU5VD",
  "key12": "4sQPeWJg9JmpQH7vnXYsUzAXCiPeN1FV1h8L6DUJPf973eBdWAkc6nRjGPutqVK8dd8kAmvU9rs2C7yy7szg4mMm",
  "key13": "3TD9rWujaTsQwTvRSb5hifrvKwoCHikpCZx79bk5CNz4c8XSqHJzQjt7HrqaBTTULB62Nc36v5vUMh83fk17zk7R",
  "key14": "2qDSmiaZvLjaxVkQkYk2mJ1YQw97bWmD7NjSPmWJybMd4Vj1kGNLpMBSU4Cv2aDcHjYYAvAbNQqLmXhxy4wbHzbo",
  "key15": "5g7YFCLQzmE9DsCiaB9H7K6o6bjCtBm5rJKG4ELYfUExJtk9VsmJHG9kEVKrC4xgDx4C3WJzi8PRWFWw6mRGmSkL",
  "key16": "666EHYpDRvf2GG7u2TGNWoznHzuMFEXoKL81FPM1w8XJttEqTfaE54WpfWdfy8wtXU1y3Z4y1K4vwxWvYbzJVVSK",
  "key17": "3CPgvwC5jbE4K6ui3vpQaJkP5AdGTs9zYU4ezt1dt3Kt1Fftht8bgw7PCfRk9rRYuiuw7S3Sj4nMf7tDK9GwUtua",
  "key18": "44AE4uQic2Rht2jXvU7Zh9bJKFfY1a72qdChVxYYAsJiDggKPcCB6Gi1hbJXNbFoktYPRnyKL9aKp3mkkqjN22NF",
  "key19": "EdicrMmNAAe6m2Pe4xrVok6PvZMjmXXNxtDQhyEuds5SHVcYufvB4qN65jjXPib4XdHJ883wh6Fy8MJXKNAFmYC",
  "key20": "egauJsGBxtMkDGGRjxY82aGf4FND8sFa9PxX6SZWPX5LSKqSL95X87b8QPUSVuW8EkuLpJTMveBMDU7pJPmnHhm",
  "key21": "4hgPxQPMuxtV4GHSdRLBqhvgR93FV5sqnaCKTZT5fQ1sqYrhra4BtznzN4xiXZBDx79JLK7QrSRVUXJ7zGsqQ2H9",
  "key22": "78b2FJ5bsaSJzT4AL3Bb6Qv7ptBp5jc6ERdnmQuKsXmDwdzaG1TdmNFMHN2mwdWrDrn4McNuv7hqKBHL2PzwtGa",
  "key23": "XkTx8db3CkNK2ZiVRtGXKZEao4pHZMcNyoeBQs2oJoLXweyNUvXdfsmTCusdPavvfdeMMQHhNbzxkMEQpWvRWmB",
  "key24": "4VreJVYk4VTSmzSnFCrRuGhhuiqoNm9yr6BnKDei5wxtQvEGbNyDQhaTsTmX19uqDCHkRRpjtM8b8nDxZ5sQ5L5n",
  "key25": "2pvqVkozL87Rfio3SQmQX9FqgagL6MjKnNAFJN9AtEC1owmrfaquswKgdiXEwuvaJJTeTAbec97QZa5XxeDT2b3F",
  "key26": "SnXvkLYcN117i9ycRzk5XLuA7vKN9qxcPFy8aJHHYvbZ4aVRb56V36BDPqVAupShGrtVt6sZxAw5zhBs8Fa5bm8",
  "key27": "41WM2gsnC87sWiRurihSMa8PoEnjPKqQ849dG6pExiR7MDXT9Xj5EhpcrNf7ej59sHaDL9R7DhPMuy72B5NrLsvr",
  "key28": "5DMWchJi4MAaVJHvdF7yCUMaUgosXUJKU7MYWPATceMsuVdior7hYMupuwjREDV7cPyJZ2WBvT194zot5jdgDSur",
  "key29": "31XyvD3ng89KqooJz6z6ikh6UsQKDJAgCfZQG3dkYP4gaNJKTUw6e9qWWiqQNBkWEdL6z6qa7AoULEmCMB8nrfsF",
  "key30": "531iyyqNPpGURRnRymAiK916sRGFXYiTdWAkiGvPqVbsxZTgpMTgzYQDPB4vqUP2YD6gGdZVbhrKzW2NxyDZTjrA",
  "key31": "4Xe2bhpR9pTFKjd74Y596V576UxbMdfzx1jWANT2FBETJs13h5s4vELR2L2tb8YAfxrGiww1j9mJavrESm5BtfTf",
  "key32": "5VgnxJXLWiN6wRfkbbEriamRbmg4MZLp8ixPHWmcUarAsyTLNACRVwf93nrSh7NUjG4ZVcZKcgz76xGu9VfKEHLa",
  "key33": "3c3RSAX36a4Y7jcGSekjDQf9Z8CV8KyKcgZujk8CsuiFAudZA3NnkPHnZFDTCwH6pkipD71a4CequYHXZiTSqJMk",
  "key34": "2Evi4gwLQTFN7YcGoD48C5rmt4zzZ1E23WMzJAqBgJPdqiWZjvRUMTCLRJGLMno9TdsuSgTZtAp4B2juhrdwDAUH",
  "key35": "4RiRdm79hNVHkt2SuwsGfNwE2NEQQCFoL1iXihJw4LVrRjYQ5HGkeSGVW7Xf9JiZM8oHYhkT9rLjAiKZ9bNmpqnx",
  "key36": "aoRgKNfH9ZnqiPtNhofSgj6cR6EXRXJwHMzbGGnub6xEkAuEnxpETQHyix7X3jaYpKcMqLBoBJ5JrtMSdbduKAC",
  "key37": "pMDZpsiLeAwVYkeF7nN3chuuVNbrXfVaFBeaM77Jp3K7sdKoAtPmKNfykLej7PY9XasDYE1aE2SGDvC1K15SQov",
  "key38": "5q5nLDbzswmXD4UemPGiCnbS3gWn6de9E2qQkQkRUDV7FTMKNLaRUCU8ASiwjA9z1ZQfjxS3wvmXkwvMruHMBmnw",
  "key39": "3KDmC5i8FjVdbjpjtqE1Y42ePQ6VRViYTireM8EQi1tEfQ3prNnXLhPZb6tusfNEeskj2NEEJkjqwh7pRFDtJ7Dm",
  "key40": "2kxzgXY3Ss973d42WNV8BgWZmFWZNqfpA52Ygppg5kZzg8AVkTSdYux8eqy7XBGqQw4DS74Pz6zmERd8up6AzBnR",
  "key41": "dJaE6ciASSrcDrzMPU4UqRytroWxCtr7FN28NuQhywFefgNUPqcHmBrjjBceRsuaxxJtZ1zn99CdZDe88EDAovk",
  "key42": "635ysk4ic3dnLUhFcREu1QzZDk7jDWjcri8BdpayP2qtTBwk3nVACB5cTfjWpJb7LL25BvkksNs6Sbb5d8HkawQe",
  "key43": "2ZeruGk8kV8EEpMoctr5SyAAtSWWfY894vXJtsKaQ4Cf9sJN4qqG5v9e5wM7bEjUEM3rVmsRjcFqFXZunZcY7N1X",
  "key44": "3B7WVpHmtscENE32BJsgQnKtBSMJcrzsPznAnLqY9hkQ15gLrPvgmS73QRRJZtruJ4WwBdxG9xvTCAXdg1tQyiN8"
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
