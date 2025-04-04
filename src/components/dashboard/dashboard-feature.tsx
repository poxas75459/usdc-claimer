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
    "6UgYK8S4ztUFsAJw73PTEM4LHYtVHhRyBMfN8ijb94Qm5XkKErNW1asBEyfcUHvN5BZj2w3BjHoxZiXe79YTzp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKYurBoKZFHTx8nx4Vb8Tgzp9GNcpRFnWGWN4WauMmsX6jJ56pqbz2Be9iNBQwPVceBeJfXKtdZDBhZG5xFmp71",
  "key1": "W7ammBhREXkXnWcYpgxQ4AozwZjL3T8R2rhiQu4wTHVZ7PWfcuShdtVGgZGJzkoks52u1bqHPxqb5giBvd1ZoTc",
  "key2": "2EtzF5ucjj873EVhmFZnHegukgoJaQhj9Bwm4uuCLWZhgpqruN9AerXHR52wr7V13KK2Su5zDuLmx7Ny8FMsWtfg",
  "key3": "3iSP7kjmSpwHKD2WNGgoo8H8Q9XgpctywTdDvRALcpLQXm6ojFPiuP6nkVTt2V5XU6TDUcbMomRYFPRLFvb82zNp",
  "key4": "eQfXDc6M1nkyxhwpKjQnvfY2d9167NJYLs93SVti6WfWG1mQzqowD2Bi6NpGd7nDGuEDKQLQHvmXPwM97Tc3xwp",
  "key5": "FBbDxdhgsgbYJJVgTDyNvDHtp8JUc9u4YFKWYVHEaXh6tGvbS8QjQLQKaSp4JKVofDYJ6hnCmAxZTYtvFmvbJdo",
  "key6": "2bSWc1K6Ki1WYpTy1YXXGUVmGUUAsXiLtyCqWFCCw3YN8DYDsa7ZpmdsX3k1ToRFyEAxtaXaejMCVx2tkjqsWik8",
  "key7": "3bKDwWB8Mnxa1y8XmYbsP8XM1pKeDM3ymuvWXdBAEBu92PWsTvVwm6ZNA1rTumzbShoRZUt8YzaQnRL2KnriivKC",
  "key8": "4AGH7eM9DbQeKBWF9qNyCWjx4PpisTna5nq5b3JuNZe9eS16zevrqz5VHa6SNn9z41Wg3tgonWvCeF4NShYC9gZm",
  "key9": "3m9RESEoxsvQQnUsZkaseWJnmjLwW4y7gSHM6UVv2tc1hPzTiwQnuU4mtopM1xjUgdEvNvaYytQeC6Hn6jQTzbGC",
  "key10": "YsJHSJwj4wLgy8ob3kP5qM2j1tXiiNV1DDWyusbQWL7z78a47r6RjrQv6yyTvoQWJNueRXP1ThMzpzk1bHrz5Jj",
  "key11": "vf2ERdgb6GmfchfmrFvBJkbaE2fSfXqiqyHuSW6gJ5zMWTmYfyJUYgBp78EEfE9V6BhAvF52qTkKVKqKeBiK3Mi",
  "key12": "5FyayNXwXCQVs8sSb67DMFfzVLMCqW4mfveTr5vHMEkbD2XPvKsuAtnYJW83k6p9MpcmDSvZK7hXQV2CwrRDeCkK",
  "key13": "5GL3fJRwm5KJnUANxqnTnm9e8Hfc9QGC4h1SF2G4CMsh3C2qELMnij3QRQ9LQmTAZXkQG6FCcvvyHEk1sv7CgiuK",
  "key14": "43ZH691kYnpJs9kAFVCRG2v1NsmSbLANEpVVV6SWNqXPR1JqhkLx89htnxxSG27XDg7nFa7yQ6CYJkUXDExS8QhV",
  "key15": "M5RkMF9fVEt42T3Bb6NfXCE8zYHDYeQhDr2Nm4XK1BDcU69eyK8XFig8i76HAmvQpBAKW48JLYScTcBiKvjC891",
  "key16": "4vXFVJusYxp6JKpHvvdfDc4TKzaXDpXjBMK31hL1W7GeAu3EA6iva94BAGrda2UK9QqMG5HjhKpD5nRvzmpy1LF1",
  "key17": "4zkEErdwJTnzdiC1rETnPdPxGqiNLzvEtvho3JCKn9qLUEsZSz7rHi6DaH9rpUMhLkjvk1xL3edt99GHeaZM8p3c",
  "key18": "2WzyA4r8VbrGLLB3AEqRePw1MDjTEJ4Dkgg5xh7M39ZoRJ5PgdQR4NMkgLixCdPgaWD6jEvseRbPR3mabAozfRqV",
  "key19": "3PAgcRzCyAddQBcGATJu3UEzqatZ71BuaK4gqEUWy9E9igV9FjgL1VxwW1fMMtj3QHNAzfaVbgvhQFcBJmr3sY7H",
  "key20": "2SSJEVPz2Y6ZwFGt98qgvC2vdrvFkqFaGrxBMhNnDFoMZtVrj5vP6v4BC2h6YGqn1foK7Nai2bMaCoQmBWwd8ggB",
  "key21": "3v5XRx6EUFEPgEW1F7XJNHyH9MM2LqruH39usGunh3QWjwdquzGn1B3YawduvQiT5wRRffjeTV4F4vmAFqujg7Co",
  "key22": "4uhmSGC69vTvqHcjphq12kzTiWKh5yXXKWFeDGY7fduracTogotmKNggyyZQA2baUuVUSr1As2GEJpGYxQApN2T9",
  "key23": "3GGjMsjYsq4JtdSgifqduCrDvrCemVuNd8DnhA7wtwZHQYyN65zG4L4YnmkToRFUGBESRS5xu9frNC7UbZtkETcB",
  "key24": "5gWQ3TJKZ81UY71ihUog7Npv87bwAMuY4JBNS2e4QheGAP2WPpm7TPhVUckmxEYgyKtSSeTBHPDNrdJjeDSadZdh",
  "key25": "2fYUBCFXYxWxKV7rzq8QVdAi5HeoJZ7hG3Dd4Vasa2JEBD1Pn7By3YATz6SfMwkb7oLZEXpvw1tVCMWbNM3CgxjF",
  "key26": "2JbTb454exAWn4evFLdxuj1nmLiVAuBqWbNsjMx2UQP48MnH3zFaj6Fok9LufwrgR8kdDDKRceXJRNGWWQ1ubZzy",
  "key27": "4dPXg8Aqt48kfZZZztN7BK2UocccBPpxQvr3zveh31rbZ2AaYtbuje26dHV3GQwJor4ojcN22wKaxKPEE61xPXDo",
  "key28": "dvMTFdfkzWQ67aQQu4RVQaJwFtQCKH4Ls3DhtjgncfpR48z2MqNw7vvYh6Z4vffs9XCXF5wf8pMctSK9M9MzSs8",
  "key29": "4mR3Q54G7QvPErAjzt2r8fAsJVkNTGQywbQn1hsSgizX7JPVA4kMqKcoaSKWsjzvLJxPCHzDHzKBaM2C9XDGYLG1",
  "key30": "3ie1nPFNgvf1oMEy5k7LCGseFgnASNRRkeNeT1gBtNo6AXvc2fqXxWJtr2C2jMYFgoKKLp45UaRCqXedGSavLXPH",
  "key31": "4wX1hFqQxnsKsPnmAVirmwNXHrVs9kBE4JjW8JmQCZ49ZBosmqgxHVzN7T45vibSvvcAYwrdXX9brUDgHP6gqXLh",
  "key32": "QZBaBdHauTR1hPSJDVyCMGWfH8MtHWEz39MC1eBsN1LWb7AP2Lkfuh8BzAw4Y66i3AuRb4JMrLvtvHHBd5hnVg8",
  "key33": "2fFxzjqGtdk4LKFfwGWoj8YbAqViSXHjDRmhuTbRfQYjsaw88wyWj78HTmEVDmiFKdh1jEbvdcrGzMKQLDJcvS8R",
  "key34": "4UTnX5egzYe6YyHKupvyKGkTsQVkU3RHMJ1Wzip8KuP6mjZRV6jYFAxysN4Xxz1WNt1XPZJhhF9awkWetHCQaS6y",
  "key35": "5X7XV7fkusZ6skQeBqnQNZqFWtJFQ8bfvypTQo1dJXRMTmSqZAwDRajeYE9NRHrDy7WD1PDqN3XQMAy9RM7QN43r",
  "key36": "4Afx9Ge89iCqL9XB4tBkxDWrCPheideu8dEpdT4sLtmcNFPSr69M69bABrWVWKUhpTHSQa5bAtUdRzuy7V7D5Tm3",
  "key37": "4H56uSEdVExRs3g2CjU1iwiGxhpvjR815zujC5jtYr2Xqfv4PDP7b3RBByyAHcq4fseJWyZ5wDksA9GdcKM15NqA",
  "key38": "3rLNntxThZMM9F4eprK6dAvEDKoi5k9Yw51ccoj2UABRz6fREwKL8ZXDUeNkQQarX1MSFqb4f5uj4tkG9VBAsKVS",
  "key39": "4zHuB75QVnHscLHxGvyaYziSYMJrv4sMgiGCwynPwwGnh8kp5pVLmo4FU1si6P7DuHhCo2DN3zcD9jdKJuJ1ruY6",
  "key40": "4j37nNaxGRpXL9ye8ZUyTBmdvgt3HKrvJaHQ9C95nZeqR2sAZZGn8CbVqxz1NR9Ee528LXtkLCWhXUekJeoNWScy",
  "key41": "Av6LgTna7G2vXTg2YqC9DK4XRMieT2GrCrQVKGbNwL4AGwgoeJxrwm56jvqMs8V7rbL8Rr1wiph5P6cBNSCkYjN",
  "key42": "22GcZUDFYNuQt2GJN52FyYAtGSePvtZMAkNWp2W7wfPwVTvcKAFMDfP1Wi6wsBqFBDrA7R2RpZjUBLZbdxLN1BLD",
  "key43": "2jdzvvnzt7DKp3Rp5xDVQdGYVxZmsppvf7W2qokEdY84a5PDo8xEmxaskiXXLHJVB78H53iJkv4T7HgFMJE6G85Z",
  "key44": "4MNMUjdPaLPyX6aja8EsSdY5AMFCmNdUP7vgMQN4pFGJ4J2T5FxgEZNqqSbnXc262u31vxa9ZuyiKRL7aqe6RV73",
  "key45": "5piesjA7fUjmT3BhXDSpHcPLGjTRquaUM8MJ5j64uRohns9kUqNcGWATPYBZmDqBAcbuM8zXdNaoSyNo5Zs6kt2R"
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
