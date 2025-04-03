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
    "3ZVsava2qWZDQaTduvqhmYAA48CBcxYndt2KHhBhzVi6quK4dHp8WL3aB8zSnZ6jxVqKGMJiE2ed7KhV7JhotgGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pAiqdtu7w8RyB8h29ztKonTqVL3aVtbWwYR95Hwdex9jSGCTEJur2wTVpiH11mt3udPsGdzaGJGSqxZRjdxutH3",
  "key1": "3cf2sLgh3XCq1fQAG9u1juVQyU15PPYJfYJSczkuEUEwUhJuzjYm1ZQsEtReHrrmPuk53KauTZW6R88ZnoLLjGQy",
  "key2": "3zg3wQjN6tskScFT4xkMkkRegHWXPDak3EYys9jbnmrSP6Da9LdiQsLvncE2XyqtHruniLnqfSVd97YxR3UdkdUY",
  "key3": "224qAeDH8EJDNM8TXJKLFCpq1h7yJFQ8cRFfFe8gFjzYxyiWjjXCAU6p4Wov6SHRHqfieLpBzNELzh5yUFRPiSaW",
  "key4": "3pvcDhX5ShHJRtjYRqwAqFMMc2MRUpSDinCG4YxtticK6fRi15JgLBiyt8r71pWYjAxMVn327T64zebdxWxfCCqD",
  "key5": "kCtVSL6smWbJGtEbzURr1E4De4fe9xyitaW2HLBCntW2kwB8L1vD1Xh1mrNCs3gVSDUnJXVhMwiTWCoHEp2pxgj",
  "key6": "KMJCWdzsYUmrcb7rYot1ACGGETPfXuTNmkh3WTcwG425395iretvLKJFpvTnDgzywHhM8ijHU8RUyJ6D9jYdTnk",
  "key7": "2jUjU8Entoia1riFLQ452i4ni5NoWeJnKgFrm7dj8wxDMdYdNXGgjhDSSXBmyoWGRJed2uo2znVhEyrbDZsboYW4",
  "key8": "4USSvvvxLhH78oMboQxvGnsfBhfBsbjnYurKK2mfX1ueJk1QFUUWGUP9y5tihG5iCyRgyLcnaX4h6noBQLQV73rE",
  "key9": "46SikB1GavrnUMJ6oXjKPGtLqkuw42rpmtMotmof91JDztx3GVDS32BCkFg5YWiboDA7uGmLQush1Ute8jutoAKs",
  "key10": "3sGHa3zx5ka7pooqBq6baETKVkiMVpBp1vz19SuH1po2jeAEyMaFebHx1fnv1nT3rtiqqyMvMZi1JLi4NhwPmzah",
  "key11": "5HzTHfNDRBgdNpt3FDXKZgKiz91gVNkEKZ3xTUHACD3S1sBaRhVXLeLDhjhqYet3QCNgkAbm6R7b4ndcPB8bSdC8",
  "key12": "5HaFKDy1jRT9kJZexn4mitvdBky4fguyWdJzLRujwCqLkRVFHdURDQXyahf3ab3yYsujkdTW9g8ippRcD79qc8nM",
  "key13": "3ganB3T8o8SEikE4oaRVhnGTtvyGkJhDWr8gD2kYiFbkyXKXrBrLGR8s4DrEhvZ6xBeKFKYq8KGuBHmEspYmjEs8",
  "key14": "5G6jTYDixiPEfGWXi7gcyb5ekefYjKnkUm51SbAjisCqJvuShsc8PaVQojDEHyZfaAfnfbWo6aA7LNPoukK1S9Md",
  "key15": "3qwQGnqDABRdbVp6zY6gfTcMdEb21sS1GkJcqNeY9SdbB5k1f53uMtpDYgeV1sFYWDPw2MFZ9zJwWp7xskCHT746",
  "key16": "2QYR6kUCePb5pAcrDBDsgVTLkypMfNhCM8vbWxbRGVEtpNESKzaUuf4LhD7986RpGwuYWJQx1xxxM7adCbjKG6VA",
  "key17": "vRNKrJkaWuYjkaQ7ChimZ3n4AYJR3qZNa18kDh1SW2RQPSjBbdBWRfG8cg4ep44c3NnfnULNTh2GVH7EHaGEFuV",
  "key18": "3TuuBMW3LZRRWcKMz5qr8CPKjHGoWiPdTGhnnaeaxHmoLYaNeo9aNuuuSfctCE4PofdbTyEZNCc3RdWLT4H2nUea",
  "key19": "4CNvemCMsuUcQ4hMDPMcP2uBPXtzgVxadL7VWLRhMnqz4HVjraH5rKapmSiDwgYmEadJSozXZGVJGpmYKnMfJgLz",
  "key20": "3UdrrsTzZCwy5vGNNPD4GubBqY3pGtuUKJTz7aKEjUZ7xbyswQ5eDAbqAUXXJ3uncs8w8gWhD51HKy8LVaZWi226",
  "key21": "3Sm9jVkeG1wwuvUuphzsHJQGENb1GPBo4dN2a8ET9PmaKhEHChmmVEvCbF36q7YkFwMAfgMCvyAP1RKLgru836Bw",
  "key22": "3RdHrLDZpJ9Zy8sti9vmhZM9WUUeCXohVZFNZFyef7rycjvZoFh83cpyHk2gFkfYjiaFSc7yM1ZUHrrfFGvM4ujm",
  "key23": "Sbpq4p9FpRhQGE5qnoxNfoGg7uHTdgAUo8sAg6raPTicZntSHvo5TXDQXakw8cHkUHa2J6f7TsPujG8d4sR8wHf",
  "key24": "YG5waBkKncaWizy5YHJdLQQDeeScSAF7Ed3W2CamfZEjgPdbBdrsyrb1HTkgxMhCRKwvAyMh5rmiqEZtyLQDjUZ",
  "key25": "31j6mNiVnCoGbGoJ2nwnz7tiXQZ96MrnHaTj51e6NovNJEnUoLrmK3Fx8eHLUtVJcb15KrBqnBrbPMWeNLfmUAbj",
  "key26": "3FrnnRgiNywbNyXzk5rot7zVBrvpTWD9KaPWY2dR2KNXGVUh3hK1xi6Dr4YQTa65ZuvB8DTmzJoQYXQHQ5YyitWy",
  "key27": "2qPrp9CYbtUs9uo911Dfcmv8yNEzyqDNxNi5VXdVfSYUQ3s5QT9ifWSqXgjq2soHgfWZ7rRg3oHnvcABtEN29Wej",
  "key28": "3dLNEMWAtVg1fhZ8xjnJAATKXWP65p3dc9m6srb5Xtw7Hju8fSvcr4nTPwZYj7BjFyTKJwdDRD3Lq4LS8E8wJ3E9",
  "key29": "3wydBgT3AMSU3s1FgPSRZcASWJorHmkSFbGJgEAQ6JuCJPAE3aCYUofiwRfm8hFdSx2Bs1vPcHmAxHQkhr4QaYvg",
  "key30": "ZdsncVmfju4PiJsoQyzkH7wdBCRgMQi5BB5UF2npfqesvBJDHbSQ9jRgudtPpWwZQV24K4P8jdbfLw85u7T7AS8",
  "key31": "zDAusprazayLu3VTywBLmKQjKvzdZNycXWYJcjEGCBHVpFyUg9Y29kMyZEoo589F4SFQ1757D3A4DhbS6MrZJK4",
  "key32": "QzhySUFHqWSMxkvUHB2dVVhMhEYBEmWVzwJFcqgs3Hsr7r7xGBJ2MWG23TAnkAtVre3ZPPLSSFy9JMnqiReuT1b",
  "key33": "eoj9GGiHEMPwzv9r1UBGKMAoef9gExYDRzW4tFNBe24eEQGCFCSu51MgXetCDEo4YhULxm7upecMPF7EWoN5fGV",
  "key34": "4Lv472A4xW6RymuwbENjaZRJsWbCkAeaoTDxUQoDW6NqcAuBTWPh4Hyun9DPMdqqvtc1w7aSQRE1BL8rZzwfJBLc",
  "key35": "5BrPcXe9pFU85wP3Ji44X9tFBmZPGJBhNdgYPZuoGoG36BB5qnVR97uk5LtcA6izJnBzLMfpjzDzh7GmDx68wxrD",
  "key36": "4dqmPZat18TrsG4oWc2wDDJMy9fHz4QWkvR4VMuzaXxRGwLmx6Kfitxi5qfY6ySQB7PHQM293EgCJPaBYQptQxZx",
  "key37": "3Z9N6AZ99EdFEsVLbhC23xHBgW7Md4F8syp2it75WK5iQSPJ6zbfVNUyUfWSQSJubkCixkoCTvStJhFZ3zGWiwH4",
  "key38": "YzrzFqYUqEgtzyGYWMxJDmZ8LbRwp8BVZyW6advoVKtoLZJ8Vz2aqEDmRrBxc5mGEP8Vjr66y3BYovPUVbCSYfX"
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
