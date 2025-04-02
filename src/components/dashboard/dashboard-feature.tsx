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
    "2hoEkBbXL6D9qSLCYwf83w4RBSWJqA9KBm24ZSzj2fCpBGdAwi8ftVoAK8LaykRhGfnnnPMP9cizSShvNaU9gyok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGYF3STmkVR2iie8JWRx1gnEWmGbBs7a9KwMTa1cxB7WVT9CcLcS5M2SDPHvgMsk6eWdmbdFL4wi4N44XQUg6qY",
  "key1": "4u1FWB6Z6A3qqCBdAbp3mtzxZTPh92cQcihL8UbLQasspxKdSyDK21ArkVanBgyW6yUTPYaKeVWAdnv6EWMsjZFR",
  "key2": "5wzSHjGJAtPsvsW71KvG2CHcA6HBFmd3GLPof1oJ2VB5R7bmgQY6sECQ5ByzU4ygaqWmwXVd3P7AxXEgHmnFuCUB",
  "key3": "2GwVgu9HGx8BB9WFGvXi4Exk4fATKHdGVCPeFjGp7tmr41QzZYPDGC5kK2GZStnQ24z5tPiuZ6zFoaMA4cYvcKyx",
  "key4": "twN1h97hQcfqmyK9GTCweB9k9TdHUmmpGVsmDT8qufGnKcB3yDvZnJZNYqc2fZSkNWdddizCDeTu66s6u5e3LSv",
  "key5": "5pMHgiQUTTmjDzEqQDhdcERsUo3kPedntUtoNP3YzFAw1odFRRSKgXfE1vwyz9qqZPFma2V2W4Z1eKiBv3nFnDy4",
  "key6": "3gsbXGS3YjDj7vRnWiuNj7GR67N6DHi4fG2WeBjHn4VgHfhd4adr8nNiTXiUiaBRrao9JpU63bWD5XCvqfRzYZBo",
  "key7": "3J5raYBagxNVVtqwsafmt4VWdQeYL38EeBehj9fH2v5VtaFBKv7McN7d7jpw5mgNhRBjhJxwHVMoBkxzZBGAoJMu",
  "key8": "GHjLL6nx7W6GRWKt7jAJABCC5fCaQf1zvMBZyN8K8vkgPBMBHKfR6FfEzqVmbDKbQguawdXrPwWa5PszvoouUCT",
  "key9": "4mq9xgQTVmtZ5UY8GEh1p3famCUPpsF716BZtzzzsAbkq6D4BcMM26qp6dfk9dZnBBo41eBovpWG5HKGi2PNno3o",
  "key10": "632trnxFCBz6TnuRN3oL8fbNc8YEFJ3ACstoq4EFmLWLXhW4jZgLyCVshkqPXqahb9Le2qNNfo1gtHvSxrwHwSFT",
  "key11": "5Hi3cT9Qg5b7i9Mu99TzwqMqqUaukuhiMgfZybDWCetMYXkbSMRdauw9PhqttUpnJ7FHfmK3eRC4zUFDP9r5MTd9",
  "key12": "5dJzvEZtdhkdUYeh6BSqw5kArFYubNp1PUZGzqvUiS7ttywACfYQ2CB1htnZbNX9jcUp2hCtFSf2eg2uqkSLtsxP",
  "key13": "dziqR2hrm3Z8Sy6XXp7Q8GzyRcZHuSvggS6jSiDSsQg5MWdyeyFvuFGT7zHsA92gZvPWWZn6SdE1aBogDY3ppdy",
  "key14": "po4QQcfuMj7ot2iiBJXtH6D14NiX8YrKy3PtvTkhVv36i5U9EtbiRqDazQjyrRHt8Lpn6NaPBAfu6tK4kUmbHFR",
  "key15": "3Yk5zejvRmV7syzfWyiqdsL4KrLAsZnUbsYFujRQhRvae2mW8BLfk49cy3WZZERGnEqyYHgeZnyTuHZUiP1rRbMo",
  "key16": "Mxc5zK6N1ndgio21pe45rMuU6h1xnhPXag5iGszNEMa7dpoWPjZVaqDFbz6g2xsLwBBh8LHp7K2bD6Pfu9LicoK",
  "key17": "3nfXUUHCvD62W1TfKpgZgFG4a5soTwpjFf44sLT2NjA5tcTMfUzqbz3r18uEgVHxJNKTrmiMjqhEkmqzwLEyVAfm",
  "key18": "i52ut8qhCvzUQqpujna7DAjWYvhKHTM5JUGqP2uRrrYZ4DnvYyW4r5WujLu2GAXeEa6KmCDv2oode4rTbC48KW5",
  "key19": "2TDt5PV6y5pUL1w7dWn5W1Fqhn5jFzUKUjYcz4BVJ6Woh6Swn5ricmHKE9TuSK4iihnR3yLZa2VxKMnz4g2YgKbL",
  "key20": "4x7P2Fdw9f5fd2XVuR5pKRN3h2iK8HG68fKkTUY8Y9p4zdGtTxSz25fUJ42GQq4kHNkmPfME8kEWfwL8g9z49QKm",
  "key21": "3HFiArFgGTieLbvzbZe4oJtVqVC5EzQUZXBseNNzosQ1VzH4HZPGF8kbDFLBHogw6VQE7n4iP89shXxqXPyTfsKd",
  "key22": "Jv1o328tDuCJrN2VUdwiNYmZFsQU5xRF7UqP25CL6qPkCV2iQXuFn4pxZC7tAnXpsB111gVcoGarPFFPpEPeQCr",
  "key23": "2BvqqEbsjjKox8N37iHKbpMzrJ4kxctZwGwjTeY7ph51At6wRnwmSsKMEKeH1YJsVyCKgjXfW8BztwHgYS57UsXz",
  "key24": "3P6DtaP1pgyAtXvq5dzYB2n6KEnf9VYefmAjz5GgiKsP113ULx7QEGQjytG6mxW14P27tGBgUZL1MqWRtatFvSWt",
  "key25": "2Mr2BsPZo1XjqnZbfz4i3QWhTzQiGPpyvAMtVWcHbnP7b8VcPBZzLokYvArCedDJuoCuH1pNrhv6LZyNuwKVFV36",
  "key26": "EAJSou1ps4nSQk3Ewxro7FwJGtqpyqajL8uKGmHFK4PUfj1dHhcUHnfDa1xQJt43wg5Kv4VMhu3UG7AHCvVA6oc",
  "key27": "5eGvp8F6Hjka1X7nVGMGfPohfisQCF9QKcg9hkYQSJaLNA6zuqnctadBvTbiJxJUo1aHvtPdBRE1QuUd5X4iuBmK",
  "key28": "gwyXjAPfBKNMim3SBdD4M9eiTzbWASvZ1Eww7MknG18ZcbxbLX2QQjSw93SeUToXvjB9yPYDmVexQmUjrEpjKY6",
  "key29": "3rZyxMRCCovz2fcYCPDVQwHADKgfs6skW87GqaMeJRNmdL8dJ3ncaDZgVPNpH2VL7Q6CQRBfmmbfjyxKzprREirf",
  "key30": "PBJhbJ29yBT42LKJgcumuTTTNivqUu4R1oemvVWGa9Cw2J7C4edyrtGuXoMCRpgreE5xcDu5kPR3wXxEhWibRsN",
  "key31": "4ALRUc7pp1uBtiRcnG8EA2XvDz42BQ8kT6QKUQ1N21u5egnR2C9ehdA3drGxo3S8uekKU4AYuvoPNtRgmk9oSUDe",
  "key32": "33hJssegg82UgTr3MuPLbec2Q4M9NGPQ44vpG4ghWsWoWEKzQD14oUT98iJY8C5vY7aogUVmJDTV8FaJKPR8CweL",
  "key33": "5HxR8uWEgVZ2bssdZpDAD4iEoHB3RvLi7Y3QSx9Rv5tuA3gCgGZn97r2vKXHh2vnczth6JgZQL748gENdEW8DyF6",
  "key34": "2hQ6f58ewinXc2g1Fv3oqJJrPbMJmcMyFm8EQLKWWos2TZfkycs4vR5PGSjT6yqWGMA9P7XP2HfPBycYjpZf6ebC",
  "key35": "4LKQLHmF52ATpyV6z6EwVPWg4mrGCk9j74Y5bE88gh8zuiQxWnjnutQvEWfQKTZYrGwcoQgdphAvnoHpqwHn9LKU",
  "key36": "4uWKzHYKUp9p2KKN6jyQxpUfttbXVY1sh4eVuEpSnABMeB3hkouhsF8HHYmzFPEcHZtD2opqBo9P9VrZRtts2HZx",
  "key37": "3NeVof581fHTVM96kSHBh8b1Ub4kbGAyf2oXQP4S2Y5r7j9kpgcptzby74hgU2MGVEGAjzmYBg4YpZKZsoRQ68Eu",
  "key38": "59caheqzdiRR4kXCW7xrMZapBGyUzbZWNPxpwCTwff2yfdCBhAWedrF3EgUCcLQfj1vtdMG6wZHqVFxY3mrXECAp",
  "key39": "4U2wr4NX9DT4LCGrCH3XvKgBCPMP3X7ze9HorNy3LeTpxYG4ntW1pzhS7LhfstoLpBs6Gnq39RPSU6ce1fghDUec",
  "key40": "4HrN8kksPNn5UD8bR79W1HnuoL8e8ogN2qySrWRkjaVkXLku1TTnktp95vZajbm6UqtE9udasFC2XkhvU1D91euN",
  "key41": "TxsQeggFNu3pbtcwB19PksJF6K1pYAhnwkhc42cs6ZAajqmQVRSXKqrS8M2NTtAhEzpMrmX8X1kRoUzaQTtfvSj",
  "key42": "v6x48CdHkT31BypMAEPN3YPu3w9PVCg9ZPju4AwBDTdicq6miHCxuEtV1aDuEVC61rmHyKhMgLBkpu7YnQz3Mgn",
  "key43": "2T3hkwZYJN2TfXH8XV9ouGGZyyyAHUxN592xewF7cnmM5qrEEZxuRqRj9knDsZyNPJUSZenHo3tBPwgbeNLcrRGh",
  "key44": "24DNx1whgE7MUEXXPu8cKXGH2gQsKYiJUNweBRpuGq9UpGstzM8p3t8A7tdnjHTWitw6HbidjLUrdjAi1d4CWgSH",
  "key45": "2Bek8rU5QSZNX2GVB4P9ZWvhU81GDj8iEKicYnLV7yx823ok62A2d65eB58MgHHXcMEZg26w5PHqXFgZzNALpCeo",
  "key46": "ZJdLnMktfCPgHWW6fVagEgCFXF4DkCyNxnYGHTQhiCjwRbH9FxgDpgjHHyuHqHSCeHzJN7BpJUryQv4bXPRWWzV"
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
