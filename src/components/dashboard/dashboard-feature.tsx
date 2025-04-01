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
    "2Hd8vZ9tSj3eM4wQgzH4e7k4cQeVXbENev3GuSwLBhM4S5M56C9xa6XvE4yARgahaRu3n8gyzxRJ8ijiPuYybn5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yutPeb1tmqAx1CP8vv9HimwF5XKoy2aVuSDU5Mfft4XQ2r7TdgHFuam9eXaqMu78PdaPKoq9f3gijsmJwPE79d6",
  "key1": "5vXjtEKCLRkgcKSbypqkEFPJnqEyBe5SHH6bYNNeARATd8NAvSvazaTse6cXBDZ6yGwk8BgDvuPWvHV8abnKf85Q",
  "key2": "61hwL7EnL9nhgqBon5AN4H6EK8fAfZRrYkF8pyxNbJHTABGP54d9R8X5UdvkSQ7judefE4R7JoG3zJij7aPowUmG",
  "key3": "62qGrri8KREbGBMwnfVxLpVqjgpzL34UQmFQtN9qVhnapbqq6ocJG5L6kqJLTv5KYnwkyQrQsCrbiznhsj7qRyGB",
  "key4": "4q7CCPaYY3AwFFEPvKeGdMBpvjwioaWtKHhmBNFd9bcf1frjt36U1AJs97cFUKDeMexjaMFvCNRpUGFTfqxB5pbc",
  "key5": "5e8wEP9Bpp2ryno3Bmy7g8PKF8MEkPaDemgGKGMuoFP39SV2fRSbWinEDw7M69Doux2wVoaG24NiSFNYTy4v1tHE",
  "key6": "5dPpCsU2SyE4k8CSXGuCdtVeSDaVPUQ7XkRq5tzshtnuBXrbESex7KM1YJFvc2q6569Wczc2KAXBNXVPE24rWYhj",
  "key7": "2FNcNZma8TRh7DND7hNmefZP67Unfgs7Xd1K4eTcrw1J3CydMz7B4XgrwZT3A1ubfpX7VPD1pAnS95QErpBZYnRG",
  "key8": "54ufhYCkJRqVh4ctT2wC9xbstuVYGvUk4wbAw6GaRABXRb8bQAZmtAFLMeCPDJ9tMAtsfNjABvqAtMmGrymqHNZd",
  "key9": "67B2TsGsjUpPTXudjguVXqTz2tXi5rsV52yWpS6SymUxfNYWYFF5kr8hhL3uCxjGw7qDwwzNRfw6FDRnVzeZ2wqY",
  "key10": "4y1o92pA33pJuG4aVf91vbJch98R9XzsYz7LMktbFC6wtCW29AHmqsSxdkEoqtF7ZRGSETYSHsgEZZzqTJ7wVt86",
  "key11": "62LANagc7Z5zuTxEf1x4z5xQiYUc7uBDWWUHmHWFF2EhkQA1dfstQtzP9CqgSqr7Q3WFecoz6W4qjpeEKKtLNm2L",
  "key12": "2hLMYwboyor9YPvGAoufZUtzTnYLkBK2Zt8ixwvbsfrfGkHPvgZSCpypZXfbmY9TcRueehMyoaCdgMJCSspQeBw2",
  "key13": "2uLNarS25JRnnpgvLoL1VdNPLMWf9kJ4udkuz2AYWKH2sAqJw7ExwPQ2VFkx12t6q9CbbjyCUiW6VEmLM7cWfAWb",
  "key14": "PYvxX2ULTZvy6DG1gpCHrj7RtZvVVw9bVtqZMeaHLzsxFgzb88NaAytdFuEYgPuG6HQ7MDCJxKiaiBUC8KSoCqZ",
  "key15": "cfqFraNpdn5fyjojwV9saiNRjz4Nj5jWzdz2xYv3ZsDQ4GBbR8PVGC6yXu2kpMBo16JEVYqL2jvEoQnuPwLbGTr",
  "key16": "MsroPf5YLWmriQZt4aSjbAb9a9Drfhg7bLCCnen2d8D7wmxP6Up5noVUXwoNhFe9Two8AxmJzWg9MCik85E65gp",
  "key17": "1ZuuVC9M6AoU9cLvZPpnaijfH6yD2yARw2RbBr2sPda9uHaXrHqm4hu5gWZX7sR9y5BaowcT88gxdJwzfckTgJV",
  "key18": "28kyi3DxsEoEUmxixgLRBfSfhbHodZrvkjjShr2CF1673bRN9UhZyJrXhbxC1XhNCK9zgSScCxiyqogurKdWZYXq",
  "key19": "3QVpgbp3ukg4UR1wAFMEZhFfwjprdQFQ6qE5EGS56Qz8XCjsA2ivErBesn8TVH2id3qCatU6UmH35oZhtw6ntypM",
  "key20": "2afoPeGJUprbsn87uLMM2GfVWmnWoELsYnsqNnaeCRFMLWH3mjPTkmm6xN2yEFhWNiBfsrYZ59oRBgRYyFfUPe4Y",
  "key21": "5kKbRfRRtoznT8mD4uE6PAyfWEt9W6T5mNjbSChUZDyFJ5JjviW83RTARwk2PLhUMt4qPkrmTvAdzsiexEtpYaGt",
  "key22": "3mP9HDCTKzsBCUBna4DBUQSpmZxXbkh9piUzu2gWtNoRbW3MBpWyHS26iUnqJjCwgbPXxjn3XG7PkiMxQJBnhjMf",
  "key23": "3fWhgbECrxMiYuByHrwsqPRErBLkEjnL2LcDRJRdGUVN1izG4AQ5oq9Va4ntdn4upnkc2hxbnAyN43vnDmF7LtHu",
  "key24": "R3Z5wt1Farj3zMWDnguJKRzPjEkD7iVenhHjbxbM7BysXzmu25dobbVbzZfC9nN36UzX1zJNQxHq2z6cRHxiQJ3",
  "key25": "4MZPrVWK6yC3o7ozcLoSZW1Aq2oH9o5gjJTGDojMq94wKXcJea5VaHfYWtdm18V4zc1EQ795GSr7gA7Y7j4zGE9Y",
  "key26": "sdQm9P5g68pkQyS4PiXAJrL66g6d8mWcrGyDunGrPoAPrAQJAFwtch7ZFnhT4z4vtDX2XhcdeRKVH4PraprL1oH",
  "key27": "5s6j4BsUwfEJqHjUwnCzNUMmtHCbCjXGHt2qWLmyxUEwJmb1RedXS2w5wGLkXJsiixW9DBnmsp4pCUreZ1hT5ua5",
  "key28": "5wsGK9LXcJhkbWaurGw4XaXkaLUxCCQ7taFvX6xTy4xq9gpFGeAN1j798gEaDfGzRMTbzNGyaW7LWLmKqq6zHuqS",
  "key29": "41ac1BiD7XTKrsMnxzJtmtzsmm9QXCo6RyRRVgHFw92KiC9Qc2AiVH2vbsro1gnnwZcbwvxgxF2zahY3ZLuQiKEz",
  "key30": "52dyaormHH5ragGJzW53LjkEnkKPWPKJxH3NokkLeRRnDLXz2JL5xVTdgrs3evupzfHaPBcy5uuFs1tDdMGCQF7i",
  "key31": "128hE2toSYefo7znpZAeMjZjpdP7YHtb4GospJedRTmgKNmLKcPqSrJvPkH3hYdBY4kRpJQZFeujXFvNh7XYp8n9",
  "key32": "5JzFjyNSBjeUdrRVk37TCJfrJbNVJ3WyXuKZWZYkSx51yHPfNNJrRuYcPnsH9pnu33kdvUue7FiTWq57hiGtD7bk"
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
