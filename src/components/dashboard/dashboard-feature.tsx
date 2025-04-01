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
    "7vsrdAPYkrgcRBRs9WvcHf1aUu6QiuF3WmJDVx4isuuvLYnN2ZQr9QFH7Djq2hAnrafThBRZvfK7CDSc2xsKNRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X7XnfCpPRuqyp5nQZ6LXcFGXBhMiosvjxsVvvg89nZCK8fg11qg6CTjMYdV2Zk1gS1ZQGSwvpnEPeYe8vFKJcSm",
  "key1": "2aJmsaxs7WmgAeFcrPbXFpYKkn2Gpd7FQyy8uDYmfxZK1siAuHbHYXTGiakW25tfjGyD3i3R22P5QzTFLC8tEkwE",
  "key2": "2wb4pFAqXrARuDUURq36DgBJGdJusfP9fSDJLipoCAgEw43X2VzCiCGdHs4JGqcWi3smNC6hQjKk4v6GTjX9bmwi",
  "key3": "LDBYLPMr4ACPsMyjrbHFAfEDzECFYnxXtju7PjxbZZarghrrYhkSeomyNveaxBkHvfdZNU53ozzBEUqhcA71KzC",
  "key4": "3BxQyTStr2jmhbVmQjP99zoiM8tAVSpcNaquEhXtqXTMFRwemyt8g82ZwXWYzbbM1AVaBAJgzhudR59FGbGQ8DHx",
  "key5": "2UF5sCWAvR3VLKQ3cwyehhdKnawFLCJHiQn2u1bSa2qDcDXdRh9njKacDocaJXMgL9w2bAfcbQfK7Po8M7rbv7p7",
  "key6": "4Do1uEsZ4ZGFHfcgbJReGCfoCaKRwe3PNKjqu1g5ZRC1d4trZM6CbgywKJpahFhDLdchrimDNWyUedzdvDWyEQb4",
  "key7": "4UTtD48dC12Eg5NZsZriiS9NfPF5xEiuMTyd2YN4at8BRfykPPkZu47LYXGixskzmCvTDZ5WWBkzLi5ZAAt8wrBP",
  "key8": "621PY5AdkAon5ufH6xfBzXaukuVRDUEfH1jj7ZHnvzfvjiXeiSk9KmzyUJC2E9bsPLnwRDy9Z9jAaDzxeydboDa7",
  "key9": "2uYtqAEcf2mimkkNXpGu3GhtRLP3ierG361Q38kxn1Li49117zxT6LffF4nYcTqMjkSKo6sBV6AGK55NTHByoqTK",
  "key10": "5dySnbVG7Pu77PseXFrwpuBa2ruRUx25Mx8HFGCo86qNm8vEVaS4G8FTPUW3Y6FJGzfK5HNAWoQYbPY6h8ck8HPK",
  "key11": "5Xpjagm5Xv28qk95NSXw545bcJHRsSyvaUEHCuKWpECZhqeAnt5ayYXJY9taRdfFcXwKZnyRoLsAfqy3n79MKrPt",
  "key12": "agfABF3ATfd7JfV9PYjVHQYu7RYmRrpm4QGXhtU1eKaNFd7Gcpwjhrs5vRtopmbnbmYv8KtT5KgY5dk4XMhHeip",
  "key13": "PkmBmwB7HZbyc2ytHg8irT3Ae5GGqergNedNCvZcreTdatkQRMDigFcxgMGFKcy278pfoYnqZ6iyFHcLbdKtNZU",
  "key14": "FKiYtP9KFjrXGND8WxzoZ4nTX6TMWr3nrYwUwf5wdBvbTQVsbqFzyyHBzBWBPX1HpLjCHA4AdU71wEqcpUtKe3h",
  "key15": "3vLaciqfpxMYqk1truvcFUMsF9apYbGAAMXAjXWZCFfpx73hxnT7mXg2Q6kRWUHvd3V25Cgg4RsPWbpwVaP1hfsy",
  "key16": "5pgpcbFjdmU8rYj27CurFTK8GWsd81o987ogpsHqmDF9HF2gopxWyms72jd5rhCv8wQ5B6zWAmtcGffEAGpZtgQa",
  "key17": "4g3LeSQ6s4uW6yhCqqPB3ryAAu5BzANiyhkAXmEKti4xeGKMWgF4dN3RQLWvw4Rxq3MY5xWMRAkgRNwZRFN3gNHt",
  "key18": "5eDcGrLB1pxtA2F6MxWaytQ6BPrsPRQvE71YRbGHyty1mjKYR9DS4As7gQchJKjYsfxWx4tHzfKRKKT1Be3KWB6X",
  "key19": "DqdcM5XRZiaY4xARNjgjpwccNLLXncwungS7ZjbcVha7GyidazfK6qH1Q28vqJTvJJUt9ooKTXozbJFNjEKACU1",
  "key20": "4pk8fsGrESkXDoVk2hhFjw5avVzS1qsfiXJ1UnBvo1DjWRhgL2Z5EUQNiHrXfhJYDU5bxoDE3LZTPz6TozWQY4aT",
  "key21": "26myGqR5MrowGbnBKhqk1CTCXkBPfjENH8koH3iawrJemvig8778JY8ZXHMNQ3vqzBUNurYBH1QXyXdPAhhFnV9F",
  "key22": "43hFELA35VsvsKuHVoKmpZScE8e33ncHGhqNtZucwqmTp3hp8ZBRkEMWrNgy7ygXg84XoKr8mXMfRyg4yGJFYLbv",
  "key23": "4REpMrMmj8v4YdqH1wSteqUUfAH8KN4GpHVNVjKLeVsamjcdo6Mi6bVQ8Yw4BRASku8yRGmPr2QN2RVgoHGREifr",
  "key24": "4bMBfFduv2r1n3aCJLte2yT9wgF3iW4DK8mGPr3E8KVtXiGKaA26tKA9WgmFwU1NrYD7xqbz9uXFeDBgpdSg3w9T",
  "key25": "5FRJMHnSaiNTYrqnSVnUZk7vMhRFtxSfzD2p6VYPpDqge26dZJCeDx9jWqwdhZ1NsFwD6dANNTsLwFPdc5jLfiGx",
  "key26": "2ChP6o64wp9n75G5r74mRm8LjN2nUR4eFLY7umMW1QFzBJ7PgRn4ea75E6rDdoq181WSvjvtXb3NZKMwAE27oYji",
  "key27": "2s7TkTXxb9kAgywjPSmbwvoJr758aZ8b1mqmx3kYmvct9MG6TSBvrV2EDNpqf92NNJWsYtebZcemRbNuNbsvWmzW",
  "key28": "2mBE4iUJADnDJ7ckhuYkiTpzpRG8UWjVWT3VGP3yfi8Zhu4fkgYinZuqK9VVBuae1ExocUWUPHAULuN1cMwPUnXs",
  "key29": "2jmpAkgM5yaufcNScNrtLkhwnNwjVPUugXRvDw4QSvttHydyAKxE4idit8TETCvi7gf2sKVqpohKBjMXVrW4ho3q",
  "key30": "3ntgyuyuYjdANQYnnFPu5ngyqujCUrToqe5x5LmELjo5fubn4t2opfEnqptmPtumoEt5iLzCZCniZeWEiWqJa9KY",
  "key31": "3GFMDQDpYBbmnuRBHaXUn15AqbwCZFMmVdRGHD6R37eMRfRMa7E4EeDGnT8uBtzMPTRgrVmhvPCPHjxLuJWAPTSY"
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
