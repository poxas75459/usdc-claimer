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
    "5uLKxMJCwX6zXssV6owcLyQJbXNDNqBhsnfso3kswAyHm5C2gfhCHF59Wf7pEunTgts2WKAVhTXUCSQAT5QJN56C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WuFfwb9b2miHwifLBiHSbi82z9RnxddRQTuFYAUYq9R9SKr7PMzcowpbwx4dfg8AeB4PsMkvvfGKgiH1xqRQLmH",
  "key1": "3aFMUeeEiNCUVW4beSoQM3vPjH7o9U1AXdG66y9zRa95hvzaRpk7VLWJrDKk1wyMm6AysdpkfJRZfUhYPoKEVew5",
  "key2": "4e7a2x6yfoKkKwngDtPYM5RAEuuKcD2iDvMEDVKqKd11FR99VQZSJ3jafSTRQdEV8pxK9W6dCfGpgkn2Zehk6JGW",
  "key3": "4Qgk6ZdSEJMfLZALG6BTqyuZ3aJve9D7wCSM1iz6kWVf6E7rXK9QbvJQvjtTQ3Ff44uqW8HEfMQaoY8ym38FB5CY",
  "key4": "3R3Fj7DA7wq2Bmm7hpqkVpxpDN377z7Pt4xK4GTS7G1hQeSCFMXdgfTt4UoAXpjQe6DGo3WsP5pUJh56u7ZfEMX6",
  "key5": "2MUty2HKxiFW17erpb6L1ad4M7Thd6SsjLrNhaGYbEVvBp9Y7PvAFAYymZPK4HjFTskGYE8fsdNjSxNp7PYFHDE7",
  "key6": "BDhYwXTPcLtmw9gZmetfu8eU1yYUh8QAqDoc9no5dvAQfgPkfSG8vKshoUDhtsGZTnD49eHQMWmDLHxHWNJEboZ",
  "key7": "5jwuaayCDUj9w54VkQoHmuyAKNEMX8kDp3fP3YgaJcKiBQnQhgEcuGjLXgaLNua9ag3VuQS3JtLxcHAP4coarqjd",
  "key8": "oDPBSiRusNhUDdS3LWRr24i24sK4tuYT9u6wKNjSXni2x32vjmw2eUCUNdXLcsfUtwXv8AHXURJ5KijQKKvdoPn",
  "key9": "4UiVKDCftQ2TwcGF4eJfL1yLsb73VaFAhLrQkzuu89XcDDSN4Jk1fS3a2BYEAMR3yMpLT9CkmWEUpVgQf1CHNXB9",
  "key10": "5NPwRXgyLG9v5hgedCm2ADmsAkcVhBciEMJMfS1WP4S7VaKxDF9BCfbQASqnkBTT2N2noWVftASQnJr6npdUPdAM",
  "key11": "xjn4eWz1mz98vMKXpdQ6MAtmBSTHwV1Q1tatPTkTHc4SVTgZDgw2r9PfzgryVKqJU4DeaFCeuFSd5WnSrFLoKZf",
  "key12": "3hQYtVGQGtMnKMmFxKeEnjBRTKR1RVpn5VJvg449TYgzmWUQA3jLG747uLPehgNVRvURtnNPbxxLm6WWvDVWcL4J",
  "key13": "3N8QnWNZK1A7HEtrdADu9PaAmdfBLJwSDfcXYhvhsYTDHsu4XZ11XdSnrDAYdwGY4VMY2fdB7k2dVVfFvwqEUxRi",
  "key14": "43qwuwDwUbdvuBuM47ssPJWSnTVCTyLksXw4Zzhn9qddBDAbYZDxczX9wWDKJUBzt15MZeRXZh8j4eUNpBpXSjBo",
  "key15": "5ZrXFnxPopDTCjoBnBzJWiMwwk3xL2HDhBTh2V4pbhSvn1D3mkTnJeexKWQd3xvckqLqiEWvfunHQogpbMrTL8oe",
  "key16": "2X36bVKHd8k9yjMCZKG4uY4Jup5YJ7iYZ1v8wkr1E9fHGuuR1Ec3J1SnMwhAJPRuQggQdRGN8yC9UbsW4iHPGMo5",
  "key17": "sF2RdVci1kpV71EyxjYiuJH8X5uzEyUkNDXDoZMxXYk8NxkX2duB3URQBBF7cFUpwieXQyRkLo9fHJjxmQXU7Br",
  "key18": "5tm97A22yDACt1s7WzBjbBdUwm9i5G1SQaqvUvDXnnNkio8mQV16keFr9eypSeks8S5nHx3fETTFTiorDDq5NuKQ",
  "key19": "3TiD8ZJvZci6GeMhJ29kzbr76fFeBKAGWeTSm8QQXwjBhNLMqReNTzZyVpfMJJiHqqwg3Neikq3FjXTMUnJwWU6E",
  "key20": "eK3TDXVNZAXT9jPXzx5uXndN2FVW6hj34FBtjyE8pHfEDZGNRZmvhtUTuNXFfp5ckJ9kcokSCAuSTnQMHudKAjf",
  "key21": "3W8sJ1ncA1m2jbAbWaPdzUu1nyXv4PuszppMnE9WvRbKEmxGHQbh3R4eLNqGEYXmv8ziGX6sPnqdhPeJBzGM45MJ",
  "key22": "2rm8Uy1KEXbLvE15U7FEthgGVBUbXt2mNwo9zeQtfSwxWmEC8f1HaeanjgRCFviES6SHtw642pVsedXqj1uBTMQt",
  "key23": "ozCJzvDMqPjjWZQiCY5w8JiMCZKs5jMmu2tn1cnaiVJiV1a2WSH1xR4tqcsPbAqwtdGNa53zmi9Q1yFQEQHtmv5",
  "key24": "4c1b6uRUBasumijJvv3FseJgvTam5cLc69HN9e8T1n2UZsZsnkzk18wKsdqoPhWzbbsnrzJRENfD1PePKbPM2xjo",
  "key25": "4mLQ9ktzriHoPwGwYpjVQfm9mNbh6h53QcLxSiGGB64wtBKtB8AZdgAduu1Q2JdLG5JPZ68TNwo8xMdjXYE5B5b2",
  "key26": "4ZNZztAemFxJnepRjzRpWvpE5vuQbWQBhmAAizTyqc5b68CYeQuokhtEPk2TidWVEH5yRhNCTLo9TyLXMLFwDK6f",
  "key27": "2rCm4hiog6b2NGYC3Sr4pMZwdCdBTGctdg1he9wVZ7M5gohquAYva9sh85GJ1FzdzRAMvaTN6oViMHrK9kDMSL8u",
  "key28": "5TLgtTHxsmVaU5nx8BbMVxobqMaGVBUUgtuipjgq5v1LxR6Lo6ohoBwpMJd7qJtSxRaDd8qayCB5TQnDPLejVATb",
  "key29": "PSJkbsU2MdNKVabzmPzicrP84g86bGUSNA43JZHFVLq5jJqS3CZ9SnfzMA8Vv89M17mBpNFPuPBPwsgk4qrcVFR",
  "key30": "rJxnQEJHgWP61ttk3zYWyFD121vDfQgWQoeikMzXESHCNxTNM1UD5SL8DiKB1EQxk33UXLNADKgXFU6cRCtDKfi",
  "key31": "5C6j21rRS9Q88rKn6jFfU8Bds3d4NWb9bCRe2VJjUdaZs4L2iDrMYvJdjKzkVRAHmRncqMnRVfniELo1iouu77UE",
  "key32": "26qh3YRPHqtDyrtTHxHN9VCGfT8SqHupLn7kwgWZP7FkNL7ZKni6WRj2UttJHL9SxtAKFpCDrjRuKCBWzBVZo9ua",
  "key33": "x12RftK9DV1K3oUDSLgWgHG1Ptw8gcxLoy5U6yfvxBV17MVYQE26qfJbnN1L7NibG9jpkJi4BnuAzWmZQwgTP23",
  "key34": "4QDUGKHTfyxMiSYkxFmi7Ur7sZGCATEZQWZW745icmdUMNF8twpwaVchMoBJoyAsPspRhyuVDcvJ1QLRFe3mQywV"
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
