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
    "614pG43D169RR8v1LusL9JXkxq25GB93kPKFpnZesuvSwuXn2TtxCQndJTBg1Y8QHmqUVZBfcJw7qZnSc1wBW8zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpnAzsoh5Kxrj7qMp1Eu4YK1aQi7SFK1aew3fNSs7g3e5SArqHSMumrdrmoNJmnCCPGtKYzyJhN2GBMHU5h9cxy",
  "key1": "mGoB3CZizJ88gTRDEYgw9msoR3igBHPDDTW7sVvtx5VhR7b9ov5SPwtGJZv1de7pXAv7Sfr3vbLXYmTTYHK16Gm",
  "key2": "58AyxuhRmpT9L3D39co4o2rdgDFAXzrsx8M2gYnEzxj7AUX3hHGKhFd3V41vaNFaacyE1YEGs7tCRSm3RkxiqXxA",
  "key3": "3Zw9vyQ2PwqmnEA5w3G7sXxK3Bfaepf4vsWvsuNdKwHRg2MSQkS9HNBncapJmjrSVGkCAFT9pr7BQ6GZg5LHxjgq",
  "key4": "TyvgBVj1r5vjyJdVtp8VLdFDA8zkj4sRFvk6AscoimVd93usikXkEBa5WYa8LNdEXbJMSpasEdq7Me2Uj8ts1xy",
  "key5": "fumZne5N4y5dbVMmbXvnQsiJSzwTGsasVWDsMDKCaSVhYaAtjqw8wAsfJWpDwdHo6PQMQ2r5TTm33nFvEyhow3H",
  "key6": "2sFxFGUm6xkNRKEA2r8pgNWibmrtJEQhkNic65EQtX7nNiKywR1ai578AcTTZp3uepd9hgHX2VyodjpDmtayLgka",
  "key7": "46bXyrjxmxHScbjZ2atBjWdtubLt7aNU1TthHVyEWtbGaWi7ouerded6b1ifd85X4seJ93RH4U7A5umqTZ9begq5",
  "key8": "3hrs7oNzD5J1vM4y2otXqjov8JVTpSFjVddmVMf238ysTq6FfLkJZ91ZJRXQCSiiJW6eWqtpdn7V56YEfbiBR95X",
  "key9": "23LGT1FZcPZkkGHDsLzQuk2gpaWQh6eLhRnEHbSWGiLdGZrgEjJ9QedmpcAjtqacM2HtkcaZW2nVCCLzYjNp3jH7",
  "key10": "3g28RgbVbDRaeM2bijq2SqhteQx2rXYSrSMkTQCqdjAAt1RZoZDtcJVsz2Xk1BA81Quzt7Ta7sgaGhL75BYashZF",
  "key11": "3eHZN8R69Vof2PRiFMGMxAe347TZnFmsCGAPp6oph13btFSjEQSkiT4FyyCXBbWhFSnuv9XD1ZgcBYezWuhdwpqE",
  "key12": "3YRE3z36T1K5R7cQaeiDu2aH1x6AbKK7S1U9JrZn4Eysz2LuqhAstUhbR8QMxGtKtSfYkf7KzejY77kjx4AvL6uC",
  "key13": "2fEBF8tpCmoLEM5Y7gPDgKKdpZEAPTm7irsqXQjV3oa3KiRKwWJoajmCTeAhG6Vv7WkTvaWdtGCpJD4jYajZyJ9c",
  "key14": "2EZ615n8mDXtXUqFXBGDoqdkVhRR11LswULUGgF82abxB8QpMAKqqFfBSwcNauJERBzgZAzekgiBPSJnLmPXqHJk",
  "key15": "5ywDBppAN7eenxVamjEMrumDxsLLPw6y9XxJLUQVU23kECpoWsQ94jVrJNMGCJKWst2cRDh9GRi5dVFaF9TVDgBn",
  "key16": "4oQUgZVJBuBCLS2DXQSCSgrMeZbPXCFojEbfJA9mwjUUi53WoonHCZzJxt9cxUaifhoh3u2KgGPpoiTFqmppRV15",
  "key17": "3qLCSwWcsPHQqvFJCCNt691SwosEkRnvgibWujc4irZnaSSyhJxMA7xKhawmpamMG622hUGYfFMjBpM32fqaDbrT",
  "key18": "47vokE5nrZF9ARGnnAmnbV9EphMaHgw7FGjB25tBZkJmnXaN2jFQ6jGHJESkcxkzKLEsQcj8CXygX5KRuonddJGQ",
  "key19": "5n3P2krHNzzJ1qZ4BCywWE9Vb7TD87MFs47MQ3WdiK1mPJwJuw7dyB1eZEGEGJ9b1ZY6zFHVPui9ELK4666YNF4E",
  "key20": "4yqcp2x26TeEbFavGWBuBWqE1gycTLq9Xp6KjyWY3mGTao9UgRywJd9Gi5m7oMjR8UtFXxwp2EwCpLUrDS92R5Zx",
  "key21": "4RJhaybBvh11Nqoc7TBePYA31UffD6DkxNRsUuhUkvxiwdUcFc4FW9QHCa8Uqp89fW2LaN3eWzkLM8FYV1pELB57",
  "key22": "23hTgVqCm1LaAT6sSAtpJJG14X3qdde6MHNrqKnxFNSsn4W5wehARsR51PiyM8GT7MgyGqZo8Br2FpCHenWrVPmE",
  "key23": "2toQZDGvfosWumoS2Qib7mfM5uLDnAda5MK95SK7Pcbxhp5ZJ3AJpuTayeTE1WSqEKUcsvMTNem8VAv7on2HZEAq",
  "key24": "52UJqiQZTFkWC8cj1TWHRiLXX2NYbDeArYYaNYTwXjXcbdRvGMXkitwj9q3twhx2ZQ6R8HwZ8KxEdWSA8Jg3i9pY",
  "key25": "4VgtC9h3YqiLEVJwW2WwxXC7CCuFHpsgdZufeorsgLpHU5m2jWZ4dXATygdnScxshDbhJUCXBpVQQ1UxHazN1Pft",
  "key26": "4EvuD3n57Qgw5mHdyDYCfRTUKNhfXae1VzT13y6DMSEoF1ErxEikLFBZNYGmnfzgxXqf5YQ48RTxAVjRbqWft357",
  "key27": "2u1DukyZTNt3QCpEXv6DfSjv6H2NNcP59LLUajdZC5S67dJyqrdL7XWkqdvkXNTpWBMvNNqRBgPLxrpxYJqEwTE3",
  "key28": "t52iuK9MEakdGWDyigGwuUgXd8ZZmDUX2kKHeQZTGjv4pPYHEkdKwVGdubsH4zKsrKTyWAjM1SwjBJnFBU4USzb",
  "key29": "29Y8LmyxVjcYJnnEmCRqNfazXSNa57WCqQhLA2YSoig7E8DxC1p4mw2fnvxpY233M5HHQxoLc3ZivKijs7B2Vuiz",
  "key30": "25c2gdtyvPvd8k1zV2HDXh3GqHARjkYmHcrA1bH2s5Mi7TEHfEvM5cECdnz3MxD6tW6xCc64krJsty1tM8JtYHKB",
  "key31": "UVkkGaqorEVT6mMUy4AVKFMyf3iBMNxVn5ciUJPmVqL4mjjSPumCE1bnpo71jG5DRx6BDeB69gro5PPRtiGm8kq",
  "key32": "5jWrsYn6geHEicG1hKbJwY3CNYs3o9ZLQLDpqJA3ohUVhFdLksTvZwMoxuwXPVAxe4fRMemLf3ReScT4RsRbHXyZ",
  "key33": "4aK1AsHFruCzDAMKbBJsKZ29zaXRD9jjjg5LvmomcnqRRAkUyb8yKTGVEGKvf3CL9EDkgiqU1PK9SYU69eP9DNX2",
  "key34": "3qYiexZNcENnDGiEcoQ1NBdgX8megjqGWQJr4JDj1nYDQ1UPn52nT77KHrj7NwKNsJTpDycKSnNYTwYuxyvqV4MW",
  "key35": "4uAoXhTnic6mABGNBmMcea3w7QxRpGCHRM7fq2eagUnjyvDUbwFwjMgHHi5Hz9YFEsJsCk6XtWaRWbJ5xBs9T1oN",
  "key36": "4QuhnuuMXuSdmLXAEhxcDSset1wdcAqNXN9VqqcR3KVsraqmjUYgsPKhrZ14wmvvkqRLb38stZm4Bsb46we4P5t7",
  "key37": "5A2NzL7SheW7V7JUKEMnfmAoSuf5EJyBKXfFa7MfsaGKFNTbPHHV3FXmi3T1z2GGGYK7ZDBjEFFvBJWPSCLzEY49",
  "key38": "5ijgS6N8suVMQiGLf1fLpoSKsrMMW57Gkf72iCpUqjbdq53pYCaCunZfV5zzdGXNwWbpSjfQatHCPaj8BPUNg362"
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
