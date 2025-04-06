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
    "h3uwC6RQ3iozXeVHUYEvpD9kyE4VVMkG6UQVftPAopo3oxa7kG6QREjZ85aQFAmADy4oNAwsZMtBu6JVjCr6ebx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWvFJcCYQYR4CeTNktGNQjfAprdgDpjwCJkxE6s2oyXmDWxAQjTxLZS3AvvohdoxUuKm5Jw5LeNDE2N8CHcEU4A",
  "key1": "2KpWUbg7MJtzXDRDoZ37hf4eE7RJXCv4ydTgvzLHeMvQE17Wec2skKhG436qz3osUtGwmhAM12nfwmVAyEnT5csF",
  "key2": "3FBxE9mgrkWeHPciWtP3U21GHNeg8P7cj8cKGMcrj4jVkLHLJo2jrnyU26JKmZCPkoetUVzJpwjwMAfZPMAKfqn7",
  "key3": "4ftjtUe4C5rm4bGVeriGF8qR5G2oBXtP9UCpRBfH1JtAtBw4t1uBzYBuS3GkiTQws6AVW6WbRLcWrkLZntnNJMu4",
  "key4": "5kpsL95A3PXphZAfdVBL3h85LURMfhen8bXtFGeNWfmZXCTpLmJWz8AiDQhFLv6u8GjViGjL1rYG8KbZj18xfmmY",
  "key5": "26fDPMhz6BoUgsgkdJ3bknuqNSEQSG19TY9fv1tQwaz24Pjw3wxmViyJ44vCQYeG3hJfB33H9UFfoBwi4wS9kDZv",
  "key6": "41bg5kWLei56sWLVn2y36bMNDhBKotKBQM2VAVoUB64sE7toYoTrCmo7K9SpqWV3D7BTwiqX9u81TQtY7QmjRNAh",
  "key7": "2azYFnq6GzRu52JuAtsfsK48DcfxDCEtiBRfqoVeHzjDe69cpbTwC23VYQ9bsUyQ8okb4tE2gSc5cKg881bhtcNK",
  "key8": "2kjdQrof8BiQcJNySPFTQPfnjf7Cv2NXtL1yRjNp1brbhYuRa2iU6Xmf9o13CnwR4PzAx29ZgVy88v1CKt7SqHLL",
  "key9": "4p17SEncGzXdFNKQa1VCDAzP5dvy3EybebsvkVU6WMpfQaqaKj1ChkJ78D21Ybw1jA5fXaNVNJnhjABjiUoMLk6g",
  "key10": "rZvmtXqojpabsWA1EfH47kxbMwyYsXZDnqTMHm5pfW6WjRLEZDCQ33RtzFzXhNyjLksHdBiruvVWfbXQR4qUCJy",
  "key11": "5HcC2JKaELdXjP1ns8cX9iLS7Hyg93h72qxEtn5sxU74ZGTSbERYntSscL6nTZpUjEFyf62Syfnma2hkLUNvBuzf",
  "key12": "5AxojkcgP9dPr79JZAbSi7irhF1YWnAaTXYCq7GVutx95TXJPZJUph8mUFCDmRHTD2aDosLFgwANVPMAiAAhmhvn",
  "key13": "294hEgAoLbowiG3MxLL2Dq3ACFRp97gaWWg3kwzTsbieQafimGENwYe73e2Gjpy9iSEgH4M6srrfXDyRJbAtqmRb",
  "key14": "3R5DJLnmo498tPqqapU19Jno2CM6EUJgUyZt8kJtzxS1esUjfj5hEPV94vtSTP8MYDrCdgrhbPaiY8xwy4fZcFzr",
  "key15": "fjMQVmC43vQuQdmLdhTndzgDdekPcSyLfhxTGSGcaihXaDbLaxW92zzooqk17TjgDheZ3DdfTsDGjMc1x8o1ACB",
  "key16": "3CSJYiuBmCiF9e2FiuQBzVB2zYveCbJPizfpgBbrC3oZSqhxds4LC6PhwjaSFftSAmhwghpwYimKehUME2EBXgPi",
  "key17": "5EkZV86mm2Vv6ZdahzNwAs8ktDVVVcFyP6UqCDjzxf7RVudTFGXDbpqFAfpuMi5vvUGZVbXyCHgnfq9PjsQTjNKm",
  "key18": "2ZVH3RbHdqc5JUNNcxLXbyTEstjaSTasbHtSb57XgR7PSJNmChJk6aWSef6SaESaPWMiCAXhxRR6vdY5gyuFZTia",
  "key19": "33Auqjat2ynPDnTR5Exs48oHqLkCNkjrigMNFsyrPLt1szEmbbeV73uC9fMC2qrMdKshWNnoygGN2Wv69oUJ9VZx",
  "key20": "5WLwGQhikeDShhQzoYJ2ohnetpREf54DkMRHXH6W2Jy75HbCatrwT7wu1DoPfQMC9m27QexBFCq5PWpU1fPGgixu",
  "key21": "5QhpTtzDYZN2KXMvyMr5Ust9NGvK1YuTT1brnniMMHk2BpsHMTdzPMDzRNnXypMx4T9am7F6bnH2zCUWYmqaR7TB",
  "key22": "kSvQ1Chsz3AufxxcdXzHRkMhtbhXCWeuRknfPB1NJPrMkaUcJd8cskzBWvYrBMoUS8N89NSZxYSoKmqmzbPYz72",
  "key23": "5S4VxpkfQm7YQtLtZhhAkq9GK4n7mzvnZ3FnJGVGcSfKxUhs6MowoKVKJwZDYppwxtSw1EkA9NHv3Q82NDPJ5tgP",
  "key24": "4f91ty7U8QKtA7U5sGhR3fk5qG8Uf83Avo2URyCEB6uYRHD9xJvhxLk3VPmHR7HTWivSrUjWdnWLaDcdSdbFrpoy",
  "key25": "5gEzw8i4ACgKWrWVSmwPDax7xF5J6a2rDz6XTeY9A2MPN6teaqSX7uDuxfy6dzmahoDwBc7rCVsrv6Q6XgmUJGR8",
  "key26": "5jvezxhCrfBPaHwrRHgSZqo2CPGYxXis4ukKHvQRMC1GsyYcHARRWdDUTsqDa9ssdii4wUTkEtt7r65Uw8t6icXA",
  "key27": "2Hunu44YmoEvsJuA6QNLreb7nepCcbLwd7yswCAGRKysSybVwnskL4HRTRzL2r8fVE3QdVDw6yE4hLHd3aUSdWP5",
  "key28": "3Qio2wbDn4FZ2PzY2PdxJFK5YPPcMganpgp6Pneth1uWY8jRzLwhYAL29sGRwD3juzNNq8vBcUbuSqYBHj1WBxKE",
  "key29": "5cupb1BBFQwirivCZPTXsFooh3bjioyGVE2Se3LjD991XzpCLkmm7vKeb4iuDRgFKtQva35eiwvMYWZyFurPKYzd",
  "key30": "3GBTyM8QKtwNvrzxQZcLZPmVawdYQuBX7gZz1JE487h8aFG8Mb2ybfdTskjT4DkzmzxvQUFVazsZioEP8tsmowzp",
  "key31": "27AjWkMArFRmuB8YoQaCMRZrPnitJXoFk2gCmrXTPNbkozDF4PJNHkHZxL6oHJygivRCrEwRtJF65e7TDmbhKbfT",
  "key32": "2sF3LW9PcX6xs7XAvEfc9zwszRhTRu8SRMiaYn416xGknEYBpSqnePXfNPErkGSwg3x7QLPWq8xBYba924XRGeeg",
  "key33": "hQnv6W4x3LLZYUcWZZAPpAw7bXVunot7dGPrV84xwFE4EvKnhDawvqDHWYA1ZJZwxrckvTF2aTrBwNv3abQMXW9",
  "key34": "22kRrTkxHsp4c81Zb16bwsKmxUnXZ7AjVAWXXrsCn8qDBtm2h3uhViQobUfbsBViSxJfK1ytffS63SxSMgxP23Bh",
  "key35": "5QCjAip1C4UQBK2jCK6263X8nrkSGwyFWdx8gVZHTYhAKG6gtTRKzPUrREBmbwaP1FEMJHiA7CfJte3Mu1VC5p6R",
  "key36": "twqcDDhHuYxutUdPmedXwbytfAc5y9McoVtRTQNq6SDxefykqavRn5wCZVdd4cZCkUMPidpqfkKfZVj9HUYfB6q",
  "key37": "5Fn9DS6vkz5NHj4zh6yTRza1SupApy8irDaAaNkWx1JiB6SQPDNZ6z8DXnWc6nep9bxd8umsKS7pWL8eKRaiGLGW",
  "key38": "4UnDKuyVtR7G2Fyv8pggToNAL7PKy8uDodisSLaw1EraaChZoMq7iFiyvY7Ztp6bmx25ECRhTXCUdVAcy7Y3uAo5"
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
