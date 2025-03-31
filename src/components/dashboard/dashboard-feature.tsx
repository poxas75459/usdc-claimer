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
    "2tow8KbQuUUu731k2Mn3hDXLy5Pnztd96Pc5exVsbJJYrgucsn4PYuMz1YNGokgCVS4qm8VypFQFNJH8cq9nnqF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f6KqQPuviKbxWhEUMPRigXTizCRaNbvGb8bdBYmMGYN6z9ByvND7HE1XyjHcfY1Xhee9hiZPb1SGMcVMyiv3vJQ",
  "key1": "3MMAigHDgB1WYsPGtG8tByoACmWwspa77v96eZjphFhUQfsZHqS24V6q2XsqKa7kifxLCcDDgsasvQEXQoXBtYv6",
  "key2": "9ZJePDoqx5bbsko3LpNEhAUv25QkS5nfavX2LPtgKHtcNENQ27TivWyJxsVSMjoWAkqXE2RmedJDMQx2aYk5jQW",
  "key3": "5agusVN2k8HRU9qpvkJ8mitSHvkM5Y4bAZ4DBwaeshpLaqxouVVgpr84koRYoe7Fmf71ssFJxinR4t9vTDUgmR7g",
  "key4": "4w4kDUEaPN6gVEzoNdFNDjiTAfzW1uuDHyvJfehkQZJn4koYBckCfFhWvB5SNZaR8Lya9DLEL97mFgn8ymeC2F7L",
  "key5": "2rw4619qabmYz5YJF3TvAdkVGu11g3QaqbR79NoiFJwbyDzBuinekiuHu5osPSa7Ce1g2EbGa19xhoEE2nNbA3Uo",
  "key6": "3HMudsfYx6R1nnQ5j2LUjd9FPQXcUokNjy6GLzo11Tw4R8YqpD7WgBUVAHbw9NrmLjyku3XwRF3q1EJNMoBBcQaq",
  "key7": "2umt39vvBtVSegfitEtaCMb5ZGjZx1PeoVbb4pkknybnMtHTC8yJVR86stnpXVnDYESWXBtPpmmPx2tFyW5GgVuu",
  "key8": "419SfRUqD9m9nFuksK3tiCiZZsrFdwKYPmfEErw817evthXZ5cj5DZ5yxWAfVXqCuC6Ht8XdtRTbTNt6uycn2EoT",
  "key9": "2DbAJywpgD4idyPNoZ2xS3pgiXYwAtQc5mFHT2MA49w2mC91xW6Q45isXh46dscTbmMHHQw1qjQMXRShGkxb7Ukh",
  "key10": "3jsdCcVDNqaHPH6zPVZq6mhX1DkGWjBHWenobbxTqb2pH6D36rnh9DZUSLZRB6js6sfoz29TbDhrjohSPSyJb5h5",
  "key11": "4WQWuXgVf4TMkM41DbW46SWRe89xJkpzkuq6teKXaW3R7FHXEBydv2dJSii8M4qjh2gapGWUMSmjzr799MphvR8F",
  "key12": "4UcpDzkZ94Js6k9doZVfzDE5PD936fWzg9w3QBMiev9zqfgFgHrfssGdKhss45PHz8R69Ny3zkXFNBGomtZvcjiR",
  "key13": "3SK5PMqmQzpM3bvSh3CAsRXVK9SXebEJAdfY27yWcVtrJ8gYjyLinMWBieVJHyEvS4bAs5xYK7BTjxxwEEm4Z4fv",
  "key14": "4iGw5vkpwHZQF3txCSLMYYS4jPm3fCKFVjZMPzyUcarvwkB5QdXTjaVRzHCyiF66b6sxBvUQXtvgi2awCojzjage",
  "key15": "3SZw7fQc9CQ3sWPtWdcudpo6oUP4AX4ecpvLwQX5aBYGLj2J2uVPSDW47HWGrxeht3CGcM2rntxs9B9GjGHjXydv",
  "key16": "5z66syQ82qtw7g2NsgSxs7HUckXTSCi9rqnEMmZW8rD3z5VTkxmkMWw1Xjmtv3rPPfaakv8deXBdfnYqDbThsbpA",
  "key17": "3DQTiQpDgYYhqPFwkZdyQX69HB1cQ3qcG75A1dzwD9b163fnXzK1qBoqwEbi7PUMCckLFpeoFd9i6GouzYipaPnY",
  "key18": "4saUHL5j4ML6T6q5nHYxHNukq4vxCdERUL7bqjueQx9GR9bmTd7NivCR3UtqEVHb2rmHBPSQpELDnixCxBE8ZKry",
  "key19": "5UAJkZg41J8AVX4M3rtbca52BCszfjN9mrxLRsQnstnLbty4dAG35aq6T3o1YdFPfhRc53X1ijadZQYLYMfw4eT",
  "key20": "3Umg8DMGYkKix3P3g7yMWvPqNE2TTf18gCnCm62cnxTzoy7JrbTL4RW3yokMf1gkc6hHzqtj47DaamsPJkvkpxEc",
  "key21": "61j1nKWwvH2AyxRNznsAdAgwa9BTckTsVJd26ZRdVbam57DnQdXDdRFKG6ZorNAamtckLhHXN87aGNmZFFXW3vwt",
  "key22": "5rTxoRDreLQSpEymRaNS8w5eQDTXNVFecYN5MoJRcHyyWd2KEEJAPwH8o79GxrQFa4vq8Uyxfi1fQWNYV7sTY8bh",
  "key23": "3r2be4Lzf4cqfMoWF3JwweQfLd3HSM6BKuPqCVZzqh2DyEtmq4gSKk9L4Ggd7JZJJrKwBoEymeTFnFWrdjuP22QR",
  "key24": "56Pq8fodYbRZYdrSW8oLe8TpbH8B9Ee7w3V7AXUsxqAJfsj33osc6xjPvsExqf3vZvNhyh4wwD7akYkScUF4DE4n",
  "key25": "3MJQDtrnLJk85XX6KDwjKfP81juDqoFr6mXxsGSU9p7x2aTjUhY3MHG3nhVAwwaZncA3bbq2FT2gCgwk7SrHn13X",
  "key26": "3AG1H7w27d92NT9oDn5TuQ7FgLzXMhbNo2LWPhjbmWxTYtpM9GG6oQfFZzfnFLkJuZaKfEaH4GSVa35tTME7Ur3L",
  "key27": "2PViwJDck48aX1WB9J1K6fvUsvqMwaPe6JfSazoxjSg9MwRqQ6b7abWYHeyU9wcwyUwXZuXPhdtgYjVTYaJAxiBQ",
  "key28": "5kJBA8fhuVdwuHvSvQV2Zn1NT2qxzHa9LfDQTsyLgeLeA22UCoyaYyVfPtTsWZhuzi8vvQ2F9pvQXqy86uDDTSxX",
  "key29": "4bWc9TNdvVYBKRyAdjncanQ2uuM1nBCK6RjqYyvx91QTRbGcc12uvQZAyC74KnJVqVbzESiyottMogJRCDg4mBdN",
  "key30": "5CbWExeK7A5uFzDFLmKKKqKuPsawC8Z2hzFam1kEzEe9g8HjKij4jSVRRST8iGCXCR6vBkNmn5c8eSxLY2RNRdLm",
  "key31": "gfcxhRg1kpinApVtVtrXG3FvA3C5oxG1rYA2QxH4u4fvwFzw25rhTT5e1sAq98XBRaMP61AnXgXv3wabF86vyF6",
  "key32": "Mps8gFhXvTi9GAjG4XewpSQCBzodYJ4W2FTSJmkWkonUpWebsXchFB4u3gWLm7p2SvQ5Jdf6os4v13RL53A42iZ",
  "key33": "4J2P2UCwp4URarJeAJUkP5aSkuFv22TH2qZzsgzesZUdBJZY4E7oRsZKnmxb5dYRAPZs2nNxck2iRtets4cjP2v1"
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
