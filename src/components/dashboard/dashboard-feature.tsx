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
    "2zEpYbvrrw4uNCK7H6vdharYiKdGKsXNNpkGXoaiBqjCU26XvY8d72qQQ42GUe7m9gerVhMhghFUn44ho2SPDLGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJY4V4iEx9Aaids4NcHf62nV1bKwE6qZqmxD8FkmWHiqVK3k76v3ZWArCSYGYGjBMn3DRmibEaF2xhQQLy145TQ",
  "key1": "rmyx5ja9WGvQakSVGAdJBMqwEcX9oxK7XvmWhHqHY1RLy4L4aqoaApWyKsm76gFTixczWCFwpRqtK9FxJkwdHWG",
  "key2": "4saZr5TAiA5vFCoUsvJAzovq8H8pmk9o1CMTswtwixGp37WFyNKhL3JWeXmouwi8JA87h1gpKuawwKiLx18Gd66Q",
  "key3": "4pdTPcLPYdFXnbCG6mRoVBL94K2nq1noeLCB49fcSLuowHxyZGnWkCYHUChRwnsUDa1UvyGTdb96onYJ8e5Bsp4b",
  "key4": "3dxiYBtuD4m4zren6hUFRnFHJt8AHqjWVGxGY7TYTWraQNDyHvsxAampV9WvN7R2U3ovnVHjC52a6pz1t7ctBrYS",
  "key5": "4gsB9Sza9MvcXK14vUWzX8DqxLtoN7TV4FpUkkPSJ7uxDfEvJ3jaXPvgs5PmBhzuU72W8nSC5aYrt8aJichqH6rB",
  "key6": "avYrJjVRVqn6yexKwRvby9vWajp6ekmmYrV19iV8fCwKXjpLGLosmomTHoQBj1tjKSQXAHFHQMpx4acByohnfNb",
  "key7": "4NCFCY1L2jYcA8zuN733hJB4HhZd9jYmaHL3sAoFkHzkjvLER6RC1WutWuCd2yTD34E9znRJoCqErTP8L1bZdi7m",
  "key8": "24mFthsKVG9BnrhnLHSEghbGnae27Uc3q4UsqJJM2tbbptigyCwrdJxMXJAua1qywkwsXNWCtKJHP96NHW1UCF1S",
  "key9": "3UrnnoVKxq5r6x3pjc8s1f8kNefMzhHzq7dRPQFhoZGC159jJEsr8R56oRyw5i9kN5tHXHNWj3KQgnAZa1vUHjkz",
  "key10": "45ZQMrPdz4Cv5sihdmSeM9cJ1g9jPtHYYdwrM5RJgN2sWqaxxXNz6Pf5XLH5yNw8FcgkfE7Ng6uKKPmp6yJZxQrN",
  "key11": "55ANcg8vARfpBpV331mWvoFrTARTQBKLJinrwWauwCMKybncFPCEFPceLtjZaKsnoiuUA8vcDiXArtMvpp4aAnuw",
  "key12": "5sFHvYmq6UGfeh1Ha4zFJgToHCZDdi1xGR7aq2T5N5nB5u1qj9coMQ6NxRmbT9UJ3uQ8rpDMeYgKH9dhj1VdiZ2z",
  "key13": "2uyiDJQjAvt67L462E1jX8pv6N2CRLNWLScps951RzgZaa2eUaQnPcrdPsHCVcNZVo8gD1KrQemfPXaGAPy3rVs9",
  "key14": "HKgW8Wke1XyWDcen99ZAKp9hL8MESuwaptqobjYvxnPsGLs6Wy2iZanApGZ4RRmQ2MBhjpsch2d7BCsAiNoT5CS",
  "key15": "kEAZ3BBhisGqEhMaVQocBG9BdrDxkmqKbaG6asLo3j1n65xLdH3HFPucdAf8DK6QEjrYVdvp9sd5p2Zsyb1cLtJ",
  "key16": "38LJVZ3M5ztGcpWtjRcdgyj49nv1CU4hssuDj1sXsRmmBYQ8LNxmNHuyj5o9xxho1tyUFcsBmta14gRmJbWPXt6e",
  "key17": "3dTRYN7m9xzsjz3Nd47ZPhcxXQ1x47c5wLQQsPL9iUsBiK4NqCBFREsN2N4Bimbi5XtaD79qzuE1a9vxopk444WL",
  "key18": "5kR71uchgQFKh69eNW6Lycjt8sS53azuxuLNKCjbmQ8SUpDHSsvAoqp42tirX4UjP83XZhGrdsAQA61JzCXoNvvD",
  "key19": "37jKsk1zM6SPANhFBy1A4s6Z1u4XE2k366SwiUR6X92fnKoEcCZj7WgDzVUnre1StDZhpwf3rNrSKVz8tatvMSw6",
  "key20": "31Sfas2opoMyPXPb7FPz4eviP6rG3eovxmi3bcyKxgHT3BtAfmP6bYS2ittcFxnm1Jii1cW2dd8HfekAT6kcubuy",
  "key21": "xow1eZ33SnoTXjv1hHNV8b3UXysdcuPcp193KXTf6rA3zNcnzjgve6eGSkcq4btePaBVh5AhwWHVjHXJGQdhBCw",
  "key22": "4kLb98Loui4fJpRcbqb5Qop3zdP24yMnDEhYfCRkfQnFQpfKGAo3njqgR3GxK6fPSqEbk2a4KTQLgFD7QWnCejFy",
  "key23": "5hVbHkQZ92oMBKauaq2yRXCZyudoufuj1gKzJNqPx8xMLq73d6QxUeTSZQEdQcp8nrGYvf7tyGJFUr3zDTJcBYPX",
  "key24": "5mRgg2QLNvvLrGckKsh5xWq16cJhfPy2R5uN1dsetxFwAE4h4hUbtMyfrtdB7u2pxm6NTnvP9ao24eNtKkwHj9sq",
  "key25": "67gGTMLq6vkZpFqmXcovCFAyTDGhxBaFR7b9pLg2fJt1wG5QF2VVhahhQrw32L88Q9vk7r1KYXDcEmpniJSLPyiB",
  "key26": "5vSeNEpcKuKcKF2pA877u4ByWLNFud2rdre1RBGqryUdMBqKW2pSjN1N1rPpLwxK9Zb8pv9UPMBh6kdFzbFuGKsQ",
  "key27": "5PxW9bqkcSWLjX25hkV2eResEgGSjYeLeruGuiQpj5v8PFfPzdZy84oeYgNZXwfZKYd4byVTz3HkUuRf47dwct5f",
  "key28": "228FULy53ur8Mn3tbjs9voReGtNZiHXwYjGMV6F2CXC2zdLiGb1mHzghyLmDyHxjTZ29q1bMuiYuK2sG88Vrs46v",
  "key29": "4cgUX5nbnh2UkCMENet2qzJ82FqBw9hKp2Gxarvn8GXJ4sTzdfkXwx5AqXbXXAyaY4VZsUDLWjcyMRrscMmRUpm2",
  "key30": "2v5chaWCbpMLUeUhAJ4r1jrzSnbv2KuJsHixEUavJ9m84Eru5yYsa87UsqSx1mc9HnKrvbT1xNJkbpWWNVr74tRG",
  "key31": "3tuE2Fjmh1kAMhSG6cwMTaRszLhAKuiBQCdLAqScmzJ4NYB4i19cQTwsJSbdpovKjcbEzpka2wy7VvfXoJY8nqQi",
  "key32": "ATEUQ3vijGyuFRTjNghwQjJfJFkEE54VM3fuHLcxdNDbjJn55r5pm8fg1NUi4kNiCGcw1hLFcim9PRrh1HDDQN8",
  "key33": "27F1ETHn4TJq98yDdbyMZJuQyzS8W6de3fUZSBTudJmB7n2kEqPAJXqS1teWhK5rJ7Zo3rfdFPsDQvMEoKkew4x8",
  "key34": "3mqjexWG3ypzMqR8dDX2NSciHAj79PJ6EMb7BLzLCPEbdoSRqTfkuQDbf41uS8xv78e9SYm2djev19YAnF7XPzs7",
  "key35": "3mUyFeLYxTafLavnv1EjD8M1xXqWVs7DzoGi9Gu87FaxeCci1d8w4xEJARDw7C8ppxVmb9vaLJSuVy5XHbtPfSb7",
  "key36": "4EXZSQYefnPZPDfwJ3FG4KfEVFQzN6oeEYrU5Z87JuQb3nxCTBqW57QiApea4tsC5wsGqwpFTu2a1UdG38Hsw1QB",
  "key37": "2az5oq4ruJWQuzgepAH6d2VdYFpXQ6314uzwAtE61ky1hbM1euojCpbPxBF6MgMdLDPFfQnGSsHdrncaqUSgswFU",
  "key38": "2RaPaQuzSdtgGp6ofbDvHrsBVVAdXvRVZGRMGBn9PCwWU6oUmzUZ1LJPXDxb5Kucter5Fe4ryvxzxNs7Lsc711cH",
  "key39": "5DfGMcCeLPnJHu5p6FXDyVrGH5c2YtgwqRARL76qEeHkFaSqSfrfpP1SkA6SSy1eDngTm4J3r9mjh57tjwdvYvQJ"
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
