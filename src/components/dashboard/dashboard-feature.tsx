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
    "2ZND8jnjWd4acgb1pVojnMJ3KcPr8DgQQwSkGpjp37uCtUyCU6GKRzQJgSXbaUYhPGkd5SzPwEeJwQzgNVQVawVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XeXg8STjmciLCV6asNkjPQ86meTV7gHnvS82i6DZyAqbjkD5gu3XTqkiTEF3Vm2AapVuVhCxmPtLc2AUASGZFYs",
  "key1": "3XsV1PvJp4do5qrprZkC5etjT2GkVpanvz1RcDqbPm8q47aBBe6tD5dUWsZ4jNrz1y1EVLBavi9VrD3TTnGgKsXV",
  "key2": "2nw2k5gZ7mXfomvqxM6fY7UcqwAejKnAzfrhgztZDTgETG7bV4VZBK26ACTu9q9X4ctNvmpzyMskWUC1RAHGhsxZ",
  "key3": "4ztzRLdks6yJWj4H7BQ2yZFpMx9PYgdYppEjEkSwt7Nh9Jip5toohtq7EdR4w2731iVMhWNYoA8nhwZssaK6azJS",
  "key4": "5gTvmjtNER97137ULBrTwPLKich7MTJsbz2P2zcq4eDhowtJ7gEKW2G2NNF2KNiZc7AqSvDvWhP4t7D8LQVQUNfV",
  "key5": "3nuW43jv7NMqW9HRpaZfU2TaaAXvdTANViw3tEY7KTh3xrBLVQLApDfY3vVKdB4aWs5eYe8GAP9pRdYrQPfxSEak",
  "key6": "2bESoyn84SJpi6MYmraydEgAtNPR196dYDXpiAhvhFHEm7ZsXSnJxnj2gs9eydN5VtAsezgXiGmjncQE72zyjKT2",
  "key7": "3gSYvBgBXV8R3fwWSQZtTxgZbT3buFUdJShAeWBgvJMgGja6puPCcTLhBw7UZ2BqEQZDbcx4nDHjF3i1GB9z7xnJ",
  "key8": "22a3Knh6q8M5igwhZMyY2HGshikBnt7C3uwwNJ3BvKipDCD62Tjg4Mock7oQz2cw1dGSSYm6rmaWaBajaFhD6FSp",
  "key9": "4eSn1WHLu1s68oa53ozw3NBvZFYG5kHRzuziKHYLk2W77TpeV6TRyBkYgBqFQBhbVqX7snuSc4D1UkP6jtb7ULpQ",
  "key10": "2X89gpeNPwxQmJSkUvF3ewYzfaV4E6UdGAhyiBmxjsUwwCPyWEPDwsPzAWrdgJ7V5FHJe7ggkMbYXVYrzDCbxRq1",
  "key11": "2q8SynELBicKRg6fr7DpwG3xNTDh4Bvfgugez7Cmjp3tSPZ3cJWbNJtdynk1fHCGqNfx78MFSZVm85rnCeDX1hzH",
  "key12": "3BaGwKoPX9B9YAyJxF5MapCAafyo2PS54dkEnnZKKQQ2kSJK8fxsTkurTEXGv5c13XNe6Wep87yu5qJcZmzePjVK",
  "key13": "62smrSbZHXizdoX9QE6VUKGd3WwSB3XxzbEspKeBNsbtzRH8CsBnve7FgrDXkbyPEqNdpJFS2yncp8YXTeYPs4Ka",
  "key14": "dJMBNZeF4cmT9qfTWZ6cicak1JZkS1uXK1hNaXUfNMeHYY9Lv5U3vZHAC9juGY9zvYnUjRANKtk6nvjpmXhtsiB",
  "key15": "28fHPW3rR1o2xY4b8UKqYtLwAfu69GGcYKhHrSbQyhzRxTYPef9hcqRieeVxpdYXZ5H7M4juzGxzX3z4aisFpqDw",
  "key16": "2EEM75jETW8rA6bYPsgf7FprMDorfjy4RvGonNgUWQ1awGSmsxpgH4CFHuqo5w527GkAwSNLa2yDFbhSeQDkBqrR",
  "key17": "5w8x2PaqrfUaahWcaoouP2E7aRNaqFaEdcKN166enjdyE88rTPWZQkgsgKGCn12Q1CtuMdwqumfuZJfvds8p7w2D",
  "key18": "5jNrhb3wvwrn5WJPkivnyXPgmruPUaEUq5Sc2hvo2zm2BRZLhLYntm5gW27nR636x2x1S87mWrJHAWBJz8bYvb4X",
  "key19": "g1kZbEEskeAMy9uxqxVYhSLR9cDCG9HFfStBG47gasiHfhQCknjuH6SXts7CJPBy2dmT1v5CrUnCMouJfySYo6u",
  "key20": "kZWWKxm2BMpiWmYuaPQGyMed8eufikDLehmPZXwUNiX2r6J6SM1nYfX8EsytTuXG246zdQ4mpqnLtMUguu6CGUt",
  "key21": "5cmz4gME8D5bEh2tmn9kuzpGhjBP8HeYevDj59w57Yqfqvk1o7nBCZqBc7gpq2Cu1LoBgAGppReULP3KsWV7FhwG",
  "key22": "2N75bksoNa8Rwg5WUr5Pv6FfWyfGSXrb729qV1xLNuhcUDMcqTNCDh3CiEduq5FdioiAic1MN9jv5QqpHqFE1jU4",
  "key23": "37mrS2LGadR593rCtMNJAsBDiVLyQfP7xBTnGqtF7VJLHAJbofdx2SgZnVHbxw9bdJXFwqgS9vdve6GAnZQyYJ8v",
  "key24": "4xEiL4mRXDg4mjmfEjWGhFfD83mmXyJJywqhU6DjtgBMThfZVVAHtkjWYJ8SdXk4msZ86XZf2k56gz1WSnem9kAF",
  "key25": "3juYrjP5u4MLRcjdEQ16dohTRNNrrU6spHLi49ULpRJo6od1g5rGSDHPZDN4tngCRU6wjZNdKKXYkXoPdn2471F",
  "key26": "2VKZoTuBKPW2yYwtguUV5mEXbEWchKLAEjteRiobnLGkYLFYCUuZfy1WJ17j4mpFAbkjru3b6hZe6haeLjLvaVuk",
  "key27": "o3TLvEDQ8YTXPmZDJqWBczjyxmfmRtfJMiSpRa4ZQKT6mFtzgSztMpgnpLcSaeDBSzkhsMV2PobHXDqaX55Spk3",
  "key28": "5wVhVG87jMap4epEWM9ZfTnNXCopTvHyyaaKeSEKb9JpFFrg8YHRsunze6q2i5FVgHHSboTnsBEpzZz2r8QB929Y",
  "key29": "g4hC6BsjGqe5w1gnRP8bsfmbU6kKMbb3RXTBJ9GasmwkVUGnSkNVMpouxxfEMn492sPvx6WdbxRmqZZLPxfC9gV",
  "key30": "2j79brD7inYppnKvbmYnnogzzWiqkBC53WwacSnJhKPP3SL79MKLoT7oZsXNqn8jDL1SnTGpEgisJxoJCj93pETT",
  "key31": "5BwYLRXZS1Lf1nWd7QXYvQqtsnuLoTvB364gm3pjBsKaiTtDqvPyoRduSjKBW6kEh665XUJrwUVXxYExnXbTKkMn",
  "key32": "4ncaWXYD6eXCffBtNkcuYQCirJbwM93uRXaTjiEpp2QEficJsPo7KYDecnCAS1dFX5rHWkbWdMC93a3KuMPdPWEe",
  "key33": "5Ec7Smuw5bzDZA5q4rcfHr64g98dc4YfuBqAeTYatR8Uap99sEs4sRRMgvvgPBAs96bGZaBLUgeNwJEx8XAQ2cHQ",
  "key34": "2aWD6mjuY3xVhhbkWwZ1hqHwfX7RaQmU8zkckrpPma28RB9hajQtTXck9LBCKbnXDSnKYvSyupLRe3dG63TDM8t",
  "key35": "5jvaL52EUUH4QVbEqCJ3q4Nu1FeC23cCg8hnfmeeCH5eUPKCkBKLXPoyhidNFUDcNnfQE4daNGYUhwNWJr3kyHUM",
  "key36": "3m4eS69TAwS8qzcRbtoHeg3PP4nv87oC9szXgNQQQcgZY16JXHCR98V31Wf2b2MD6KXDNh6rsHXg7se47tXeWUEt",
  "key37": "HY7zvni7wsjrq8RmKTzdH1YWqvKjKCS86MpwJDa2tFS914WK34ypX8UgfXpZqSyC6tWvqyaVJRQZfxdyitEh71d",
  "key38": "3V1xykYWWfvSrdpB7to9hYXXEyXmgu2XVywDrxFqZe48T1navNbB2hGWsmKNLHLPahyDK4rzL459Y8XHjX3mbGur",
  "key39": "4XN83egDzAZ9ysG8ATRDLBKPGo4RbdGBemHG2bHwEvmgmReAjJ1yACZjFXbqsqKtjd1az6BGZ8ji54GKFjrr4G1C",
  "key40": "2TQdfX9wcbPmhfHmBebhV6DNSRvuQRn1gVvPZAu3wgmjczHZ9G4VjVzxgHpfNiXytuYc5EHxLqSKEX4WxEVq3yLR",
  "key41": "nFfo3iaqzDFjs5Uk6hDqgwm3i8Q16stqF7CJvyjNPxvjMrho3pbBCvovKEeoDpDKPdMYTLdTrWhSsBufxCmZzyi",
  "key42": "5sJauvSq29gpQU7976AdxiW9D3Vjvw6TkCnqh4ipJ26HsRidS4KMhqE2JEtBR8dz1yp9ixA5Hmm6fFisde8PbWaH",
  "key43": "ks9UJMZP4SaM1RRkV6zJAdhq3AHY9aAg6tHRGwXBk9MqF1a62prgw4xVohkmCKVrRfjRvHEMSvvseWTenozWPEn",
  "key44": "67EeTb7RXBmfWNwxGTzyVmdcjBzrxNkTTSfXseb9sqoH7CiUfGg4ySBGtMJmcmoND6yuPbrxnNmR5aoa7Xpw6cRS",
  "key45": "3FVXEx4J4Fp3u7UNNGXqSi7RBDrS7YttK6A1Lf1ApWGK19Tamm92wHmdVMxT76FjpZBuaZ5S13TMHV3Zu1enykky"
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
