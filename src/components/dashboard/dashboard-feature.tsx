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
    "S73RkLVBXECMphtKsBkJbDezVcc3HagaWxfrqyW6FZLBXYbR4prhi6zDEiXWFP4cATAynPDkykKVYpKqxRGngKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ku2Pw2JtEnYmE65rinnbQcwB6XAsBQDYVzTeEQjuZtK8Txb7L1C7WFtaBiJbRYDFkfR6sGHo7kw1XuLh456refE",
  "key1": "66nStZ5UqY2i7wkvriCo5jJfNs3spP8jocDt2BAHjo772D5xjktGnUadEHzkjLfBUoq5cT66Rw5tdFqBaQd7kwpw",
  "key2": "59HHqBSS7DpNAHQNoiezERtXFg6wbmbChMpd4yk5s46cDq8KLaYbYVhQiChPLgGpWrxJ8NfZszQkXBayShGZra12",
  "key3": "3oCm2HHEa2dYqKv2HnknQTT4bP5Q9X6kMCPa4CTYZsuUDh1gxmxmm24s7GVDqp9CbWEeyXR5XiGwgxmJGVvjoLw7",
  "key4": "2VkwcqWEnfqaKN84NJZv8E7x9J2YhsFfCN7TdDdUhFTdZhGGg16KMKwX8a3TYkCoDVNGvmykuVxVsu4xWQ2TwWNQ",
  "key5": "5Wys5frwAMtM3QT7nLbZbwCVZW2C8JYsb5oJ774A4eCtMemJvkEJHPqgMeJ2rCmwrP8J5gToQzmN9m91BZtg5xeX",
  "key6": "4cWSsDHzKPpgMRBVeH38tgkPXNBza5RvCmg31jhWjyh72tqeR9A8fdhNnNnhPxt7KZLJkvgm3nNB2jwS4K9jvjs4",
  "key7": "2V5vWczeXuHSzjwxfZVrmQNeyTTki5oJ6SbPdDwZS9bTrEGuLF4mTZw9RDKDEWPWdgzu9F5w3JhjHqeattZ8sJbV",
  "key8": "4UuQmuv5HpGpp1fTqigTjizXjKVR85mgBrYwfmk3QRTbSwJv7RqxnrRoypJNjhmB1ekEdDantwqnwmdQGLXpqnVS",
  "key9": "5BAGif4A1VQzZSRJdN7QNAEkJb1AZnjwef3RS9Y7pZ6G4fH9U1itBb2uE39pAEuoQVFX4tHeZyn6EFMHkFU3sGi9",
  "key10": "4mBdemNdbCYwyifhdUjLgNYE8ab5YqXCe5pcLZod4aTX3J7np5u2QRnwqHsn3RwrNzp5KbWstD95BYFaDKxp7E3s",
  "key11": "5Ka6rm9K3ETpSYZu7XAAfFAsPYUYdiRTAeTehuTE6DL1h9ND5v4LsJ2W6v6HEq4iKTi22XgJJpKmXjDwLM2GcCmc",
  "key12": "2PDbCNB4DHbKfBjbsWQdM5gLMKeFgtzGV22T6cNCZXCvB6hqLQmy7si3R5SjM2eLXtWJAiTi8mFWTZuQ4FuJ9Mxo",
  "key13": "5wd66yQseizabeFF2Aj6XMZAPCLgZjtKHEXiT6Hx7ah8dqmAj84E2UirDWHfVK6ABHwF1S1Vx1xQhpdMrqU99q6P",
  "key14": "4He9vqHA71EoZZPY6ked5mL7mrRu3tdKEtKRrnQbWEdJnzC2GecE38dAngcF22eVLgrs46GQPAbp4R7DqBHjgXqN",
  "key15": "4iQot391CdLxuHVoANMioU3QgsGBVZA2kawsydCPe5Mro73AhA3kamXDH7t8z4GD3EUPBYX5P8wpK5izapGs3vw3",
  "key16": "5hFjcLRQHosEU3Eh3sSvWyqSuhM7mnfJJCUChoxDEHT3s45xfDeJFJrkHMzmTTXCXiWmpFGeprwd2PSrgP98bENf",
  "key17": "9ZqqWPrGXnQhW9RrzUhTDnzmEdN7qXoDs6et7bD8iZDFkY75gTWkHYm4PFQ7d1JnqTuwoWrBag8uUC3bsSZAWG5",
  "key18": "23WxuwvTJ12mtDfyVvAd1J4AoGjc4XgmHh78UKKc1Z6EsLcbKUbMArsGq6nX1nEj8RSJ2QH5ohSvggcMWLHd3NDP",
  "key19": "rtCvNE2FUvT1fC9N19v52rJczuLdHbPkuVAztQsKRcy5usydrhKrnYyrSEku8vB2hTfzJ4QzKMcF1fWKV5gSSNy",
  "key20": "34KnUaG8Rt4pUfhwqVY8Qm5NLUr8gJNhGdmqB3QuKWsRBum2shpxQPPhTRe4aCNUrt1eWG8kbQ9vy12FeJs3n2wX",
  "key21": "32BnkW2Hu9ggSadEcPZvthYfWPNMFT9RYw7FuJjwh862ce4Qsi9DYM35VarEdzDTqthXBEnR5icCYMsKEzocTbuN",
  "key22": "3sgYHjH7NPyRTPaDwyEXpXAHiLQsifuHZHTgJwTHHj5vDFc3hJePaoBomu3A6vrJVGDGZjvuD4bmvE9diLwp2Jz9",
  "key23": "4cVJBSKha2dfK8C6ZiERWoqwFL6eszGoBr5cnkbXfQBR5pSm57LRA9KdH1bm7vZuNboM96hgcftfeFRvRmFn8dfx",
  "key24": "BRY31k4qXkpybwVbTPwoGFKfk6j1B2ttV8TxvhY7h4GXgbpexHRZ6SFz75EJ8FoACGuHSNLpKtaAQxGcg8ycUeZ",
  "key25": "4z4jdK7wFxY72z13qhbfmeMtXGcb1W7Jes6gNxdxjFc3gfZxUcP2jgwNv49LFMC6bHNt1D6Qox2xhFBh7Nix5dQb",
  "key26": "4ncMhTnL5sriB1pdJ3wF7grejeftd5yBqu83AEs7zipwpct9PkESyKkNCchyesxm1pc7BGx1do6yUqkhno1hmf2Z",
  "key27": "3o2YYzCyDYp4K3jAXAzQys3XjGJdu3iviHh79qML7D5h588xqHks5yoFanZ6pfv6pU5iYoW9runM5FFiSkPtsnma",
  "key28": "5ffq5tSk8ytk2MTVgKKCXwGRbGWmTNCi5ZqxeaXngTJHfJkVCN7UtCxmBDyNnYSCUzAJmVVCaLMSAmoXxRN9FC9w",
  "key29": "4MezzSRANGeN7avsMqFaiDRBWbFowCJ3aEAheg1Dnssz8TaB2UwAuyaP4CcnnNPLHg7SfUNef8MH8UdV42KankF9",
  "key30": "2BFGrzWMck9rrn4kqyBLFvdQi5wGNTFuXpqsYAKNRqT3rXqREn8owp8SmMmUJEkee3XUEE3Ehxsojfr23U4SNiy9",
  "key31": "2JmmeboBotMCjidBPeoTnedffhrPJnVgTZXNAsCfkv9bFT82J3ssKmYpUhm9CArqr2uwNc73Ff9R4vNt8nJ3vBsy",
  "key32": "65H4S5f6MydHeBgARTx7mLvAMCXNoVb3nUcGuRWG8fNcQRK4rYXgcuUNtHh3qNmRZ2rjPYgppLQxQE4TgcqMH74K",
  "key33": "39KGRTNRGq9VQVrHkypfwg1mixyNePLQgvMY9tQgzB5KrMmWxX7YYZRFHtcYYqvAzHan4TemdiPWJbLKYWyU8yqG",
  "key34": "2iwYzPEyHZcCRPYJuGTvKTk114UJtD3wZT39yuvU6fYhubdfrt8FsdGnSUkb5WR29Ks8d2s68wGHMBM7xkqtMxcH",
  "key35": "4nBoPNfEVciZ1kQSPWLgE8JBRr6EukconQj8w8FbMCXUHBsaEWza8AHodYrWKWeQK3HrKmBozYrZnkYWB3qiXrDj",
  "key36": "5r4YYYMRgUhddzzN44UyKnCzWEBS3p7YG3nDQ76yYmtciXGTbvawJp2z1XQJZteSbNS46xocuKbXTnWiBtACvdLx",
  "key37": "5oWdZZCeZfn4mZno74n1borietySUDwFfL7k8BFAfoDzi4HDXW1JJi9VoAebF9KowyUmbcwwRxTtPZSjKzLxNV4J",
  "key38": "LpRvc4wbyyswJ3odJphyY7PpefHApnUMjUehEVAJDDCkmMLRbMUhZxrVjdKj95uYDhLwQGXWAzjATLNpeo7WweG",
  "key39": "2aXddB9D3suxRh3TymJ8Co6EFu1zwNqTWBAW6cRZP4YdHi9fzNKb6rdMhbYCmuCsGw1me8Hd2ifpDA9NKjd7saD4",
  "key40": "ktxgS8r1hbW42TXQku5tvV7FSBtU3F3XXeRHWFTPCZbZpnfoRazBxeWsF9mEexeRaEZjqkS9wwLU9GwyQWEmooo",
  "key41": "7aNqHK7bUeDB3Pe5ExNowttPMDopzC2PriXjyeieJtAeYTGTQvJTX5rfNviYxFPzS1H5FxRkPoHGZyCHwHJeh3s",
  "key42": "5zqKfkmvbX7XRFS4n3DxwKQWNNrpDDjUs1st7ouPr7Buaax85pmB7KWngBRFitrfvMAvwmvU8L1KzpwkLo994HRE",
  "key43": "2fFyP5kyAbgvVJ5HvbuWagABpA7i8WnevYyUSThQYnvXaPK1Dfy1o9ym4C6mdMATndP6XhpD9kNrwT5q4P4PVEAD"
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
