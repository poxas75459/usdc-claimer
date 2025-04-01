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
    "2H476ZWLVmzJFUcsH54cCks1LeR3G5o8iSsu4W4RjdzdPeJpB5cQ2ySkFkzJbiVNTXT76vkZhYCSZDkEPZKMpzbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJunD4Xp1hzHPfKpqt3rFeUvCy732fepzW5qrnFomZ7gusnC9goYG1WovpugUVL1mNES7YLLUzjwj8tMMs9qSmR",
  "key1": "3kSxEXJjEdqsREo5rqjegCmLGFDq7ytYPD81Qs5WRVeCbQxuVagvVDcVP9fd7g2NyeJvCU1iJfZaKiC31iNmJ9qE",
  "key2": "4Ae9nXiCNaY98PKL7Qn7yKQutUZNjdQwk7fSWupgYErj6embpaHd6kbi1C7S6miWZSgZP8veB5vnb9QUdZZKEgRE",
  "key3": "4r4AXY2NwckM2gbPDp8hkkwzPD8NkjDVdwS2p1v3iaHSSKLSjZJBEwBurMZi89hsdx6ed8jT8xXiSEJ8bcH3vGcF",
  "key4": "42FssT4MRZjauhdMfJ32hTu1kcFJ24mNWTChEty6Nk5KzcwpantN1cTbF5QNhLcREMK8M1do5PvCLh4rAfEzubPe",
  "key5": "2zHKGdqA3VAHdHn2QQKmBiJmJUa58UPupEcufwxrToSdp4fP4kzkwHnP8aYzYP8Y4xwEjgdg2s9BQi6t8vjJzgg8",
  "key6": "4ed1gkx8UpMeVXr8FReTv9iTCteyVqZyiqBFjHMeJ2RiDsL829pjc4iv6GxSbYpVzHaLrue6PKnJWmRVFzCakm6F",
  "key7": "3575L5CF3wkU4oLMjP3Z3BTsBWfnruN5Lh2PYQ17B56z7St2tSmf2FFUabkgxo2tYhrrU3YqhrtAZ1ExppUJngHF",
  "key8": "3ACzdzW2hHwzjAZAtXs8xnFBdhMy87YKhvtHABKoZ75qmjus5YuELcfiqRoAmpM5W6PygphDxFZZ4HuCdbz9kyFA",
  "key9": "4bKjTuwfQssjAJhWonNngfLkSDsYU3en2BkfaRWib1iasfUooo8nB8hcdDpZtfy9Bh3irshyRPvFGfeQPvYM98oe",
  "key10": "3xqtpQVnVtp5tT2WYCkufHnyzqU9AS4cNq4AqRMur8DwU5yUP9TCrqn8rrZp4qaPU27y9QWmtZzFQ3rCto6gy6ax",
  "key11": "5UKiH1YBv5GqRr9ALPifq2qRuegiToF8LeXHWwBBedRHHXMzzSn7qvf1kExHNradR8dQNZZqE5wEijY6bXwPxWg1",
  "key12": "5mfhxqYW5t2PcPEY2uHRFppNS3xX94P6AvPLguC9qte549EUy51eokqxDn8WkKWXUNwWqANj8VzupLS5mCWFYHwH",
  "key13": "51k8rWmoRMs65YQeNjNkayfi4voRxqUsF595cEtsCXxiaUjM7wtzhWc3VxnLy61eAPkuZkJnUU1v6iAdAMrzMHLo",
  "key14": "44hB6wBHZnRhvr8nhMXBQ6eMCmQfaZm3cP8GCancKz6xDLNS3P5VrBuuLhnpY6T9nkRxJpfTjhDCHfBqC5u7vbMw",
  "key15": "5wok4syGQsxTNjCysHbP7iAtbzdqeonyMmVu5bgZFfRkwkP5Hqoh2PzddZukZGVYxsSqRBcMFWKLeWfsGpAn2Et4",
  "key16": "5oxcbabun2nQYqtqunYdWzTATa42E8yX4X7m8wGXUD1enPxAdynsVd9f6tQbj5kmK2jwGb3j2G2uGr526X19ivKN",
  "key17": "2nivA6ajC68UopxbGoAizjhAJjyBZmBT6zkFWe7VsF84d6MC9oKRbW17VDcfdfXCMGnctHTEcPG1W2gxAVmdktKn",
  "key18": "5B7cpzfQugwSEkKzAiV3DvT8hQJHokJuzAPJ8gtUYj2QF92ANeH1ajUBmGfU5o2TPTwEn1veikxW5nTnS7UPGKCo",
  "key19": "3QXaBU3QgMubcq2PZKJDhFt1LkR3CV45hbZf9RdTHytLedW7EBKA6LwfbxU6UxCXvtzucbMvTBRWL96GsFeRUenM",
  "key20": "gieo1Eudxdvbdx6d9vTf7u4kaAAtWFm9UJ31KPf2czNbia2ZnWJLYP4yrbEGRvG8oCXgszKNDxPDV9qrVQ5iwtH",
  "key21": "5TKUjVKMfKubVdyvkAGgtq8gPfrRM4ZRSHMJ9VRFw2Mcq5KvXUeLWskosrwnBhfyfa2iN4Z8tBqDBKnRJgQ9AHFP",
  "key22": "f7KZeQwzSAV5PKMyuAJK23AHtjFawfdkb5uLPoGHjHKV6PAXsyyzQy5HRGvCUBpRWLoDPhJgLeJDCUWg4eDsmp6",
  "key23": "5KzGJcMsuG1ZHg4qrqUQ4wRYuaqsKuwMaPj9rzrh7joriex46qg61jwt46mw6hbxQoVmVcxoucCRErmkomKk7aNK",
  "key24": "3zW169kBy7oHEywC1rHVPQQfaYEFktM79idpH5CGinbdnnjsHEDAxNxGTgfHbK6Y3sFEvr6tEG8HtVfUfssH6mWE",
  "key25": "3ZgRHyqfggrYW4Y9LAUNfEvEmeHmLaNzP2hiF2JiLTuV2Nkxxxc4GZCwQux2tSH7y5JZRJZ23mdDhtRNJnPNgxnQ",
  "key26": "5PQwyLxcWW1UFBLLpwPJmb2ybPMWcDWFpHQ15aEU8y6HnH8Sqxfq7Ekt8ZmSkPU6NAUB7oEM31PU1CSWgSCsBrPk",
  "key27": "4L88B23K4fZFpZieyFU3a3Hdzm82McSiSPm1T7DMW1BzRoCFdb2pGo5cUUfLKzYCjokLZuub9SiFi6NcCRqqQiBk",
  "key28": "nzcwAA6mttiT9EW8MjL9MJyiUFhNibYHz8KSdiQDNSqDcyZiFdLmG6wja97w5DbHj4QYYNKPvNvTMpPDpnq7LZ3",
  "key29": "4dDZKHfqtREqAkRAhdk7nBo8NTYjAS9LEMBt6MKUyXxS9QcsGjd2Da4aq3uvmedJ8ZNsFSxcc7Pj57xKH2JL5X6Y",
  "key30": "4beaSGfV1Magp23sdAr1r5kbg2RdCfCAzeWEJe3M113PJegtKqrafkUpKSoLqjB9xrP3zGE7t7iB2i1xwMcp2Lyt",
  "key31": "3L2AJTCUSj89pRpNDnsQJtwTgMJkmEM2rjgbcpSGB2y9aY5GihWBhEYHREi8VgANH4fkfJPAMyih43WbVrmnfUMZ",
  "key32": "37dCYHCL5wtm44bM3SHg7TQuoK5ckm4qLZSRv6oK8zTxgMizRT4hUZtCKwXjKiZwYTvKNQM8fq9xajcogRmTaSSW",
  "key33": "2T2FmaNAFGxUcNLF1oWom37VmVd654Y7EPCG1f5Dw1Nrx1LxUxLBAg6NwQREE22RPubzo9YckouWvvR6MmTQcZgR",
  "key34": "QqYrKo4JSgSPRJn7KxBhs6X5BQRRi5VxkENUwp6uq6UJXCzaY76qfUc4pcWgL44svf7AZposUFoGJRCKMxsK52q",
  "key35": "443ys1pY7LfeNAiNCBXm6gqyUZ3p5uTHbHaMH4AT4YcGTrK1kJMrRA7mSd8appVfHpuAmSSvvsd3k1LcxQc9TBEm",
  "key36": "23Zrti9dYY618jVd34i68GTveMbaZhp3YeFheDdThCLc1UEzLh49oCTSi9pyUtYhS7zyZVg72pwKeFL52kPww48c",
  "key37": "3B9wUqSeRFTqPmKJiYiPoMZ7p3UdHLvjBPeweA6CzSkECCXLLKztT7DHy31sHNpZBCfmMsBiaoLhWPPQsBGsRe5A"
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
