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
    "5we9ht7Gmew2wR9YyMqgibErWzMB9sh4nQeaDfdS75UUd7m8LH7vH2ETnqCtZgsreDxKZ1G1oXE7DFc75f5EPAkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PExGLU5VJCv7XVULmic5CZm4tEiMMJH3v9RjvaYfv6YaQfKtxP7gJviHskMak9SNzeWNNzLPJ4MibTki117QRCE",
  "key1": "bicxib5rTDyKKcLYnifSy9ohVQcrhh7cxdMjNcECFaZUVoanvufCpRxP7wLbzCiK8jdSg1NfcFM2g4YAMwLjiax",
  "key2": "3CYjZicopzvaEEzWGYzUeeazkfsheJzkRBZrwYD9aPNDQrSN1fC7YEJrhbzoZFtR2iVBeGVaeXVtPrpaWq3fjZJ",
  "key3": "YVDy1oa8V2wdd5yJhcy3PMMh9HfBnMsqDkJ5awatCzF9379Pushi9ZhEP7o7NB6tsCrirTfC8miB7jvKZaB5FhY",
  "key4": "bxxAKsvNTeuswL7MTRzrQGMsZZwphu1jQMoZrRyoQ4joybymeyN8LXJbYmVLs7dL49wfCQcDkkg8d8qAt7GwjZT",
  "key5": "4wrA8xEBdEXNG2d7zLsyHifGWE1VRPJMMMFnKUNg2gXBpmT2bwp58nXxNCUs4DuwKjjm96jYNfZoAS6wuK7zSyMj",
  "key6": "2j3ahq36VFR411nYVFuZDASsvyg1UX2YhDjqy9rx8ywo1sJCJcZ1RgDLiPvuxkPkeBfz7bfvgKRrkYLA1RKnpacB",
  "key7": "4fxMjRmVHfm6Dacppys4CtYTVj1KZofx9WeG6yygfphjDszvomrWfUXbZ4Ptzo1RyK1nkf3zNEP5ijJo1QHrFNnE",
  "key8": "66rwyB5REfKg9pMuoUUKsvxuyYU1zjSgtN1o4M1af6Y6dDZmSHfRqZWFEZjLGMT4g367P8k93xBJmh4gNRHBg3Ro",
  "key9": "5JYZG2YcsxoGyxido7iPQMCgEjUxTz78YPAijc9TyVDqzxc3k37o2ZHzGdNjdNBYvhz3u7UUeh3SipMFFyAEAxFg",
  "key10": "RF3tfxVVeQrXixGarpS5ZTSynrBhc32cWDctwAEth35qM1rScyfJCtA3EwfyHHwyyhZ7wdwpnpxBzFtHcCSb6gV",
  "key11": "venbDWHUm1LdYpPeaWvYsigx1Np3hCKKDH36D7r2vSzSJR89oF2XapPSa2ufdvTj3NYbhAfNs9TLF7p5AH5Hk7z",
  "key12": "DmgjHbg5TrVFABXPv276KAyJ8EBjtV31mPYL9a4VRGfCdW5zvabVm9NKm5J52fx1HiPFQ6rxbnxm6AgVEwgTVgy",
  "key13": "5tDzY2cKE7hnAAVvoqNcfgQ57YwrouycdrEMG4Lidrrdt8KrWBe8yzXoR4mGLrJBGpmsiku9qC8g4v3k2wAP8Dnk",
  "key14": "5tuEN35vYA9E27oCNMbfK9bEvZmeyDt5HWagRNmu6L6oqUHCVjzPyWZFtit7mz8ytTdWw7o9DqnEyDyWgA6zGGZ5",
  "key15": "3YY1PZUGHgobmBnC9axeqaMdXZVzMzd7pQ1wa8Hp8M3MjzEPZSUVxf3Ki7Mo7DK754gYL5ZifhTqUG8ZLr1wtbGd",
  "key16": "2PgV93XCwqH4yaSfZestcQ1kANyu9AFhj2VkW8eZ3L2DWWC8Bza3nhVMHKZhUafQZbysaYd96RsdmTaMFG6QSYtX",
  "key17": "8VZwBHREmRdQ1B59GBoJAbAhuqTYiFC5UuoCqzAGnNFAQggbEsFkQ1PRpX5dMDXEbyHeQYR4AnPE2d5mN8xgRRB",
  "key18": "48D8vg8tefaD997gNopcUQDVddZVFPggttEsxnBsbMtBUsBdWvaaiVjPx3pnBszudar61Vcw2Y9FMFzEVkGaumJb",
  "key19": "2UWHiNyKrb7V81EXKxGeJtJ1aMrGNWBXJjxeGwjaRd8RPgpEDAuPHrrQZJ8RGiQVvj6zm1KVagbNRYhgPLqo3mL1",
  "key20": "2yitCzdoKsJS8TsNLn65szyMFPc3PRktvibJCdyg78LAUBahFCRf1xCrnhE5XET3xW8rmfbqQGJwa1dL4ELcGFMN",
  "key21": "3CygZeJNBwqyrmagT6SiSSVZwDoeBuFxMYA2PwJSTbWun9qhN1fKHLJnGJdnsqTDFVgxnSLqZm1sir5BUhYpMAwz",
  "key22": "2t8SZtbyHZu3X5XT5WqxZSWBAeG727YoovpssAwMizxGdxmUHzjxRNnNJg1XcrPpD7giaPLF8D2Kodqex1q8xaPd",
  "key23": "2K44469jHJv2HXeCGFMxv6BEkey6SjJ8TZJBi1sHyKcYcDiDBW8cAS36DpfT3AGcmb5drq6jHyhCM1NPQwHGENP8",
  "key24": "3XnT4cgPAjHWV3BMG9r4iMWEJdfGdVj13UpzD7kWeoj96w8jS67VDgWkZqiNqzAwpLKF2MVNUzso3nBjNDhj434p",
  "key25": "3jRTcWPSuSMhzbK2RmH6NZ4U11U5tY9YG6PemRot4eh2WLczc4UpKLmwdXZ7uTfHkB55cdmokCnvUr4aPdqCoSGP",
  "key26": "gKpD9cqeAuZN8aBCJi3hvHf2XkaNv9NivAvk3Duz8YXWxVjd1kyD5gQqGn6V3hgJZTRjmqXzgW18YWrsvcgHRgN",
  "key27": "3ATZZLr8weSS8jfURJga6p4r7ZK41EdTfR6nvw4bSUTDgPkHDZurvTWMW4yM7ayCF7rK1AKBjHX5K6GsvL8sjPk5",
  "key28": "p3t1UEzurZ5eZuHjjLxRM4FCbquWfrEA7vkgnapuu93yB38DhRaiysuxxocudGVMcn1mSh63bbhjhMXg7pmb3z6",
  "key29": "4utMUZ8gL3AUf3NYAkLxw2iD7SiFcZC5KgRKjjvKjSuU7qordNg1BXoAwYzkSGLtgvrUJsRoDYWExG5ZGyFZytpD",
  "key30": "5TzVejvWo8T91GP8avXpF2p612shqik3jEZz1Cs5qBWF4EjTkYE9XRgjZ1LHEYTFeBr6iFJwiEof4tX2DTDjmdFV",
  "key31": "2GjnuWENzbgz7EdprwEVtDJAk7Soq6eKy2z6PcjTfx6bgsGy8Ez8ajgvjWKDftm2mwYRFsroSiPHK4M9AAx4nwhp",
  "key32": "Bx8qR6ckcnoywCE5GYE73wNPpCARfWu1cxFTvyN6aqWMG6QeMoWUUfEPE1t95YbhnfVwBujmkzUqgKDLtpGkkW1",
  "key33": "5FxYQYzibkhcmjMbaNLGjY1Ma6XqrbS7aNTGtJTcVTy8hpvLSvh2hjVzgvLKcZRigC7ypmNWY3i3RkJkz9nCQfyV",
  "key34": "5HW3bLjnVk1oDm5VGtWWZACFHcwKKBhYtJoqRpSEvKedZAVdkJ55r6EXUNc6jEvyv5Drnc4dm9JeZo3dGTZg1HTT",
  "key35": "2Z38qhtbx77YN6prW2nqF1XMEnsnAPsBzNCyGc2ySDzH4AWAvc3TedkM2gB7MWJx7PBrfXTj7oisZWiQ6uLCHYxd",
  "key36": "2nsrSDVRNH3Ykwtws1C9n3pA6wuLdJ2eZ2vct7X9YKHA4iDxQJ67eh1Arkiqu6SHGFwXJKGa6po2ioyAoDV7zHmq",
  "key37": "MruHZiUip1vfNzsjtHPvxE2jiRZGH2bePVRygLTyGQk4vnxWf5oP5HGXEwA5nhYmAD8PcH2rqXdCpeU8fnBDAUC",
  "key38": "5EjU2cgNLkqQnWM2U17X7DyxM4fbrJUpjtQCDojwBJ398A7m23deFfoXBawPVNAJ7wyNjYW7dZR3kxHBCjbuCobV",
  "key39": "2rQHb5WNSZEoeVtesKqBPJeYa6bhXaCJCzyuuxt9TtmTjhNWUguf5szaSFaLHGVV5WaHod2e6dpCcHXhpG6CFWqV",
  "key40": "NnvtXUuuYD2inKzwR8K6gdz8mxs47cJu24jQJhjff5ZMQe3hwiBxHDNLoyjFVUDWE2B9QysYYUinobNkWttLdCV",
  "key41": "T12mhhg7MSZV9J21UdGJhrDE17CCMe71E5dvj66t5N7PSdekx8Uo4LTfzjAfdNSepbw6GzdXGfaqEW6beTasriU"
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
