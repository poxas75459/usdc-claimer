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
    "2EgDxbBVBzBNqGitpHj87quyHKzXp8ab6YiYz6TPn5DTxjT7U476x6W49qC9ywUQaxXnGaXgQtFfgbrQTxWwufw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMGSEh3sXH9oU72vCngCzGjAAe6JYDcPDsFQCoCj51bkUfLyc1gzQhLHHcKv7CV5Uc5dFyBQDzspgHPh6nc2SCq",
  "key1": "ReXLtbfxMSMjsTuZx2dJrkZ7VzLKYVWrqFDV5KwEgfu4GcmoH8Th6J1sX76kYfYDEFnVLTZ9QrWnBEnGVrHPmtf",
  "key2": "2EnK1KMmDCWE8rP9hwGYsWLcQBhVQzVjtb1TC39miKPSbx5JYs9mXSgwytwA9ofqViXs6tkgf55PHWjrMgMyeLST",
  "key3": "3f34SdKjwEhd8TWrtiGXfeXmC2cZhoFSZ2KaosS6ZDVXw2UvuSmLMMQjposPVfoWBCC7J1YRvAkn7CpUZuwa3QVt",
  "key4": "TPAjnbECNW4PXHJMqYoRgx5iPGEAe9hRBYdmcxmKqprnFFys7gnsscsV1n4vgd5v1s3AQoJpEQi6pyqz4McFbrh",
  "key5": "5QKAtvXbvpHp8ETy4pG8a1wpssQxsPCaftACRuEmCQ8kNLBXwAuS63dnV64ZJsqFBpeWhJ4LkodqGsN2E5XkwrYV",
  "key6": "3J7yQGbcvCtJo4qvpC1RXj9nL9LAkZmnspUCXLgtzNAWKfgcMZ2x5yhApU5P46mjds4ApZwpSHXpcx2M3gtL7BUJ",
  "key7": "5Ch25WQmfsSRvaJuSEQ9VPCH6oTt3JkWqfYsveTyA2W8G2kRdhb7VhEf4jwqc4Mn96dbXvKWCMgQbghk9GPyoKcS",
  "key8": "4vPTKaD4VGfM9EepCXTCpXp7iEoW7j9zohg2WqgKPzfxRqKVieLQqXHjpz9YtCkTJ5vE8oUwYGbkX8WFaybYPatQ",
  "key9": "5oy7yA4UcddGVYapsSEtkZnEo7TrHnC72CwcgSo88iswB5QrMtUWDqgvuxrdvnhCtnnqTJ3d3twHBGRLaZrqv6mo",
  "key10": "GhdknJ9WVU5UT1JLBGGPy2sveZBsz57SseQeNUqPp3ZNxCZWSKkRrdNz4SnMonCASrk2UAyFAbEvQMV2QLXVZW1",
  "key11": "4y2PsHYkNs8vfsSvDzpGC4wzWYKmE6Ms829fUjENSfnu34oHDQ3B4eKrvmXGy8sTCNYu915i13QdFZs1vHyhTd4N",
  "key12": "2vndenKBPFVTVchvXMtApUmieZrtmTNxJPowhSboLxTez2T8yZ3VXHQnegz82kh7HGLfQfPKZo6uVdrtLgLzzbNu",
  "key13": "39qJqYwxePfUKXSCrBJuCWbMbQZkF4VtkWT8nH9sB3Xd1xfKQuABEnXJfdkfWBSgiKJHN2GhnYYfBgUBN8udkxwS",
  "key14": "5Xxm2dmA5ySwLi8un81yn9hNXH5txhRD3fAA6BxReMV7icKvRRqDe5WtPqv7joLrTW9q5hoN664mDi7nnBzCo59",
  "key15": "5dp7aDwMcGnuSqjCGi1ZtgCDuGWEBq8gXGgayLra4CkK1esiwk8MsyYB3SHoV8Mt9UCZojUB5ZgduSZDraNZrTRA",
  "key16": "3s7M53B1aLGfdGmZheE5ULZgKyzbAw6xrVjHCkzck9sAGA9f3YSFxxEShKDZTLyyjThacE7no16858vmL31cnHtL",
  "key17": "3uaFf6VS135775tZ2XKU6UpPur6DAmvDFGMNGcgvt8A3F2wuCe6Fh4iENfbsh9KccwamzDN17XZJ72r6ipHX5mcG",
  "key18": "4v8MWjoMXmY2KPRVK6cCt2pqgNnZ15JNwistVbpB93gQdZ3RwEzC7kTPm8JcuYxxAHhWiogGjqudPgRMrfTbEiyo",
  "key19": "3ewt6CeVTF3dk9RW9dM2p9y2qJV67g77zPVtyzMHwHJ717Fw35BDs5ieqtJicqFjUrSHzYwoet2ixaRVgcLCdPyp",
  "key20": "Fwg1JEWojwWt8V9bDaRFbNeamKy36uwFo8Qf9yXrckXLWjHoNNo4zy1b7XSY2pDPbSRfrZLVFnDQFdKpvFaL9uS",
  "key21": "4a5e3wzFytMYX1g9VU62o8xAdN8z2vuQE7Jz54JHCCEkeHZ3j3g9d5tUbggzt9oQyFNj4c9ziDxHjuUjKijqMw3x",
  "key22": "4JATkS51gDcNp7mTtcRZBkJ4uAMCuUy9ppsYp7nGhB1tmkZ6meciyyR4nEjL75Rz4rL9gu3BcXRRZajVxKLDtNee",
  "key23": "3dDfGCPWx2A9PzAWX9SjCSphp1cE9XXo5RiPDDYnyJcwraXuBQ2QSWPDdVbeCfdyEonvJXPAB39GNbw9voWsVeRB",
  "key24": "5xUQP5QudhPXqennzXEQ3Ac5fEfHWDdrQh6G9mNPEZEqw8ys2LaxZHqQHfjkWBCs1pydLZWRaS23Ss3UFe2pYe72",
  "key25": "2pATC4y3BSNfxJS7kpuH4Nx5enHsv4tyXAbA4zi57rKNtuM2BERj9xhzrp1GUjPxvBobCiZBfhb4Mo64sQSQHCM3",
  "key26": "56m4QZH7aJeGboeqVSg6JgNHEbPf4PHeBXwSjc9U3SRsLh18WXVnqBhL1UzGxxkDmCfJF7rb1XSpffZ7EppC9dUi",
  "key27": "4u1dv7XvECHvFiLSjjLfwb3QPNQcL4A4PRAi9cWvuhsC7CSwyH9Pw6647ftLSwLpqSkApVRzYTDXrSVNGpMXyWXv",
  "key28": "3DvDTtsbLtogED4JMhPvDfNjoYSbDMveinF1yJCqbdxprHEWR29uKs3F4a6aVDAykhKz39ne7N78SodtLJA6HYHd",
  "key29": "KeqS131gqpDsrYZM2NbXXVBgi6bG13vsAXCsMk3YXyj1CAHbWUfKm2LZQtjkfgQe6DEsJEQcZqitmxYNNFAKuX6",
  "key30": "4ZgKqJJjYVwgMTwAEkYrSQTcTdZe6YewnSpSg3rn9e1QAtUUytFeYqkvd1LNR2befaqeZuTrnDDWBdvMEEcFDxWV",
  "key31": "4mbjSRazgFe2gZiurUT5aCkP8AT3jzYxujVZpgbqFg5mMnRZM3ymXnxpSFz13hDLWTd7nna3Mh8dATsXEPMXzsPs",
  "key32": "2XmFAEn3MrkrUh1kv7fnJ2gtmAjEDc6eNHJPewzLAaMa3cj4AwfiAxAyemEaUZfdzHb9iuLwRxqqa2eDMo5Tbzw2",
  "key33": "2yPc45upSb12M1FgKHDWWWWKbhgXqm2u7QqZqyS7U6dqs9rWK4KLsGWydpoRfjsmEh68pydtGdLzWSAh7UHHKQBY"
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
