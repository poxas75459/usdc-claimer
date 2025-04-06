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
    "e349yD8RT1qq38aPb1DJkVSF5yaUhgJzVFXfhgjKjawp4agCXTVYZCHKeovNzdyyRUGSd2smyoLt8XJo2krgriT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MhNC7gcDufHT67HRXFo5grSfrfb5MSHiKDhvcJ1f1ekcYTQ8C7jVfLzrJShX5zgtAysbs7i45oQC72Z9VF1FRzH",
  "key1": "2EGshJK565ifrs4X8tLd6CNX5z8JHev9mpF3a7eEs7HSqmXqr7NSDBnmN6U3gXp6PawfTGNX9SwoprGkfAmXrL7D",
  "key2": "3B8zTLtbhUeMvLsjJwESCpSnV4qg9DGT5oDRTUP3H2AGgcddb84BCDDWNwmvukgzEGxfY9WhPJSNrZqjBTSg9FP3",
  "key3": "2A436kRC7HpLTw5LHvha2m4tZNcE7ZoGzTFYnENSRqD3EkAizqrJdLZxUq6GiG3uYF8YxDZxGd8KT3BuNu3SMhu5",
  "key4": "21Bu4BumXrnMozgctXSgufYQtsrGTtohC5Gep6Dhf7FpPy3zS5ukARai8R6z8HttDvP5duCRedEfg3tr6Ep4fTXp",
  "key5": "2yKZpzP9jotuQDuQqWgQiBMmrCfaTNqSKS7ermtCTPe6yDCmYUi439Reib9gn7GacynYzJKewTTp4WBaVEoPBo7m",
  "key6": "kffVaKqzuBAakfe1i96t9cVy5H5afCMd9Dr2M3huLhEEN5haK582tYykB7KpbSR4VEpKRkHPf7pUnyVuLbwVxnv",
  "key7": "21eKYYRRW8CAsoma1iTQPDtawWqE5BE6EuryEUaJhTWAPsP6BgJ1kSX6GqCqfD9b8e1Y7QeZkwZhdPPKTD6UnrMa",
  "key8": "2hLEt3RvDmDLgtYe3pC1yKgobyEkkMxxw4FqxQ9a4TNUM7gGsdoNCR6Y9gCNCHFCaPb3br2ATKKrEmPda1gfm18D",
  "key9": "Dxxrp7UCd5ioyaL3jqFx3Dgfo7ZJc9UaSwa6KSJkRhPzCkYcYBv4v4hD8c7v9LgpRVFYHB7xJh4zYKxtUwkUBEe",
  "key10": "2k6e2c8Qfjwrgk2TY7ghv9x846taGFni5284i7KynvdDXyYSGbtU198Z9bMbSQZvu3b4dG11UA1vKRybpyWbKCG4",
  "key11": "5UZsUXJCfgvwYQJYyhqDBYyojFDQv6XKKyx2ctYgffnh3E4xBBriSbUdK1XvaQ5vGyoASP127JRzKcv6dGwGvkXJ",
  "key12": "B5XK6q4wQHLW9DSbtrue3F9kCvoyXazqNqyfE2afJujSaJhDnahoydqNgNUz9GRWfgH9nxACq68iKnYb9Vrx9HW",
  "key13": "2wWURB59DckjGEWUgAWrYpS8feKLjAAmHq5XzvbdVG6yUM4FYXuBxYqU2nyPLQxMBzD3P3REHrEibZW2294Jgm3Y",
  "key14": "45xJpV24UfW6iyeq8EAexY9CBr9NS7cQ2Fav7sihykxhi9R5VhuioQ1a6Ba2PFNToJC37QgZpQVyjZ8hxeCt2DoB",
  "key15": "3ERsAkZJQgN5TbnvgQ62V9wkzqHJn4jAKfxDcrQU87c1ELYetZRLaNG52nQgqhmrUrtyERdU7PYKBV1NN2HUXd61",
  "key16": "4zFnFUaairskmsdF6QkduhSN5po4FTA8QnteGACWummGpw57nkfqXCaeH4xmnYEWpB48z6PQTzyqjhvXFZTfRNop",
  "key17": "GronD1RptVN2f5HuaBQ1WrN9dpy9Zm9vZyrFQjWJsY78CZoUanX9wiPv6CUTqmDTsXe6VxdLKqga6V5nh4r68cE",
  "key18": "5td6Mapcnk9t7T2YtFQNrCCZUPwuDGGofpBdsXPi4qgqyTFkvkvFCpxE4TgcjuGXrRSoHAmnf3eP92oNDYnRRq12",
  "key19": "5jhh3aBRLYgA3LKnP63XxtMbLxk3A2LqAhvyTspTXHSK3khFnv3gLrSoxBGXJFM6qdJB3AErTJVfLbyAtvozq2hZ",
  "key20": "4UrdgLUe2KjyD3dhdrVb52pLXwaTYmvp7EoMYyUSBUuiWevt6ScabRU1cMufx51NgMsVvXw2vB3cMFp2NnZr89Xv",
  "key21": "3qrVowqySGpjC47NcLw6k9zXmyCcDk9oc16X93LkuZKTjnGKVxSW6k3GxWzuTWjbJt9nBfn2txNeQzptqhgwUZ2Z",
  "key22": "3wsXc8VGNj2mgMYj5smZ62WV7PLPqCDr2cceMYud59w58z1mcSYYM3jugbE2rjszV44pp3KkurTgicesnZwDL2gi",
  "key23": "58wQ1vEyhkMHBtq97FuNwFxnAQVcSQ3JfCUTzht8jZyZ7TGFkki1inWGCSpU6uHmWLeUv2E13jMhUPGc2t57yHoK",
  "key24": "3ScvJsXBNdf8PEV2c2s4dJHXgWyenDQrvgQVuUDSPxREaZGgZTvdRehvf1NwaUopUhM2s31txAZxD62tBtRY9xS2",
  "key25": "37b9NHqcnr5fvcU5CD2pbNCj1wq4nfHsAr4JMDxsLkeejZJHd7vkUG2tzssZFvSZ4gMCdpMML7XZWNgJYLHe5YTz",
  "key26": "3S1mBTwcBEZ98gSX6nyw5gQHmYvDVi7WkhekDSoxrrzHwxnUrZrsRaqGkFVVWpaGvp8DNwMfgJfJcvatUTcNXTJP",
  "key27": "5hbX1Lch7dNGUyPfdYXfRjZ1CwXCxDxjGgLAFUeLQbQw8S5iyUTpEBVQftdSePCFq5EUm453HsbvjExcRjudtDRB",
  "key28": "3G1NGFEZU1f6suin63D7eknPPx9Umr3UCqpPHtqw8gxAFQ5xoxQMmT6YoYbKnnRyjGvjtFM71jxfGYHQqeTThPQ5",
  "key29": "CttoR27ttw6BntkURHWGSqosvidjjeQphvLPwkZgSmv52DfPzyvpj66sV2rygJJ8DNTNKNTjDCGGHLdoE88efMu",
  "key30": "tT55kEEqshY69ZmZoxj5PHdKWXqRLEa3s1vfFj8LMWR5uKLAcQVGkVP3AoqzDZzoQTvszQ2g9TdRcjap9f4jvyN",
  "key31": "2xyiky6vkpmhZrB7feeUfgcGkeNehszNN1YLbyZZgpBqrubQc9cJvS7JBLrqQiuYuL4jNsvm9d9xFW1xxFHsWEJa",
  "key32": "53QayFDZg35qH2cXCm6EeqdvzHzobmVXtGKmCHyUqedWiVubcRwNDP87SyaQdfeFaVwcew4FWa1yXU7W12yQCdyt",
  "key33": "H793spABFSZzmdTSVgzjchmfxu7iQv4wDXRoTwKoAqpvGixKAKQsTtruYY4MNoucgbR5hW4TB9XZJHqAHXcDuUb",
  "key34": "4fJw1urqiBFMW6ECs58QWURP2pyqqGjQq1NQpScfSnC7HQkLRxH4VYs3oRbEm9ETRnxSB2venZGRBfydU5EFYqEx"
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
