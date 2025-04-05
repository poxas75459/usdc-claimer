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
    "3rVyV5eR4ErtcDbdT1jX1u3fYvvwrkNA2qeUpdrR3VWFBZrQanHsU3ML4j5XJfbSa5obGcUHTZPJoumZPZHz3XPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJsNg79gNtMG7sCx9LV2RxgcJVitzxhbS6QvwsjJNF4gLCCo6hU87dmpnZcKZMcgnHZszSRym7XVQJkpUK9e48a",
  "key1": "5pPFLUWLY3N7RRTVkuwVt7C7f9McyrKbq5wLeLu6dSRHivWrCWnGDbw8RkFLbEJnHEk5YM3jKNqLRGe59oa5oPCw",
  "key2": "abYvhLWZ9xTSiLY5oFg47jpG7XhxZhyqk6o7bLtgg9aZ2z3F32iXDwvNc95kp1WKTUwKuPdi4m3RjVXrDXFKKW8",
  "key3": "4R4gfHwkervGZ3kDHaWbdeCR9Ufd7HoRYs9fssz9b4o7zGtLRiagu2ZSFLECXMd7ncFeSN15u4AVfrY4U2B9nyZv",
  "key4": "4A3frU84e3b8jC47vxp7dHc22MbUDynHXFhDiZzyJ3DmXYmb8uftc1FUCFhdeEDFnmrAq2RANA4dfBR37ZwE2JDM",
  "key5": "gixfcJxiWBGpDMc9JecyzRSFBE3Yj5LrzJZqSwodhGxWX88jiEtz4Jx5ha3f3f8KqXn4rAnqH2N6LURNubAfZPC",
  "key6": "4ryu9a8XMwud3zJkLqzrozAyiNioke5PtgBg1JoDUw5FgBS1PvRx6ktqMA18Xu8utnc9Ywmhp3rnoJLQNBHYezPd",
  "key7": "66FKmo7ACqVDqed2tgWytTwATESHEeLdXQEtViCBRWazWJuaUruigtfCttq81xthNbsrLrN1scYoUpPsT8tPp8hf",
  "key8": "2Mv2nuoEsY3hhxGr8j2bTk77iz3mz8xuFMiRUEe3m8abG9iq9RB9HFJVkwvohpGR3fBYzXhpPEfqqBeNy2rtGp5y",
  "key9": "9NKiK2nzN7Xz76Gpkkt813BPjUPrkYNtdkjAZsoTRrKPvJMoqs3Byj1hXpULH5Tgv5tV6SvwQPdPdjHuuPitdeF",
  "key10": "5VfCVhgL4RFJ3LPj4hXJNdJ1HMB84eq2AzLCDnMCLqEdoEWp8MYgMVaDLPW3DgzBRBtgany5AbYewzzRyGL84LoV",
  "key11": "5ifiAtFiZZRqJvFdjrWaJMSQPRhEoy7eCFNsAWBbTzb4BnUyeAHSxJyo6zWsoCoQ9Tgqc9DxdoG9ZTmNf6PSkL7M",
  "key12": "5iAzz3QV8RUEYv36MV4XSaen7TSuxuTJFqRxNNnTA9NNGSpKqcZemnNRFRdgFdFQArA1ZdtLwBh7jNyVPw5cr5nd",
  "key13": "5mvoKoY4WEDmxpLUELj4th9PZxeoCuLNZhVDxLNUvzvFgbcW82gfTEpcm2M5D47PyergWvmBGLwjezkdkSA6LXnp",
  "key14": "31y89749bq3P26NdVXrAVZ8spNFZMmBFqArQ6LRyFJiZTK6RqRsPUZ7Tvu8wrURYi65z5KBuUGr2xBy4mqDTdXFk",
  "key15": "5D9vZVjuZtEt45BgAXQjRLWfbUrkABp1GPbzoL53gyPMUv77rwrqaxU6ZkTK7wksvVjWSz6XoxajobNTExDpnUG5",
  "key16": "5otrViK9Cw8aHz9T36VeahxobXXbHV6SPMUrMeNd7qoDDL2MiWewB8VWSe3qMLopuUi2Bu4hdHKbNBCiWFEcaeKd",
  "key17": "AgJHy1MFXpRZHZ2pCznsMX6zmSqyM4SmurZ9u7vgs5kRM7tYZ5TKpzpCXVDDMuY8v7NDFn7LgoZpwbPbwDYCDNF",
  "key18": "4L3LuYELQEZPbJ7NtP2uWPhMyY5LyvNaGQGT6q8GT2HKQneffJTjjCBq2mzQM5aeJPpdcNpoqa3sdciJ4kdVZY6P",
  "key19": "5KNuN2bb1gGoDFUgzrg4ePcZXY7Eu3i4Zy2u7dgzBjWiv3uPq9k5PLjGqbJv3oTo11ZQPrTi6DEgdQjjw6eouT1k",
  "key20": "2ULVmuEJ5rimn6uDy1GcBNubuvBKght7c8kMjm1ASyVtifSpVcd52Xu2wjtSJTG5H7rGsRq9vUBCxsdSUoSMAeAF",
  "key21": "4vBQ5DPNMseH7AQEzCPAvC1iongBLMMRVGB1eeahUpbsEkovwRUZmm18xah9cBuLTUqtWMvwNV1kTGcqZ7Dirpr4",
  "key22": "5C2E8rZxKtB2jpX3vQqaD4qmTY2Z3YkAc2tqrJccxGgVvT2C3VpsHp9BP4vATbwKDbohw7RtjvBT2CGzuaoLAW2C",
  "key23": "419zWAT5zUyHvb8f7byY98iCoCvwL3BtjBYJvnzsPBZB8JkqZvXFD2c8bjpQQhTQQREREfMp2xTLdi5LzD54MFB8",
  "key24": "3w4Z6V8z3oBqr53JBaYhfvjjVhFoYpFiEFXHqXhqsM1RmnvZQ6NLraqJC1U516aJ7iDXFtxywPa64aGa7YVm947G",
  "key25": "3eGC42fN1L93CwnfM55jz753mogdwBS6cX6itdybKMeuRa972AK2thcXQSsJnznAzfsDUsA5aSsbTJsvcBdU9Y6X",
  "key26": "5bGWjWcHdCJYhnuiKMDp684Ak3iFsEqi79dvYG6nuyYH3AnHtmPL4Drinvrys4ZUvA5RgESz5tZHA3s9dZJeh3xE",
  "key27": "3rdyT6PomBdT7kmw51wPzGL1smkXGACxAek97AthEcg4F6y4k76EhtZj4rfntKpXKEHQo34VogMDAVLTJpX6SbKC",
  "key28": "2my9WjTw4obf7nnpY9pNkfL6oeeyn6RqrC8cWU3BgRjbgpBwoXanFWPHBngH1uQMbUs2DjjdXvFQqtHyxtMCjfu7",
  "key29": "2VhWfbfDiDwHsCXzEktf9WsBNK7FL16VcZHJ6o2b88gqJvN6N7KwtLL9FJVoJZVA7RpQn9SCNzCJNufKBZ2QPiTa",
  "key30": "3WtWgCNrgWedP4jG8aj8jwM9AHVnVjBfzy2ojkKV2akJ8zECJgSz4aGUEgTNgaSvkf6sE1Wc6LS4vLywpEEW1fF9"
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
