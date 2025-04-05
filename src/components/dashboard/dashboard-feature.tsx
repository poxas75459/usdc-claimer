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
    "2WPVMBWRNos89yJq5P99xLZvM9jqwt2bFqG45sxA1uSABHBNLdesrAyZQsPhUNpHTDyFdtzErLc7gUqwDyZ25Nkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qzHmxAao7tqo3zyDkXneeF2MYgkjFwjhcbinvCx1mdQXf2QuQqFfpwxoaVtQ16AmW1MooAUGaRVDBkvYLdUgkPS",
  "key1": "28u372wAtg9XQvaXGpQFghPazS4KDxjFhDxh5FCcWwcXMW4FSMXyqDTKzbLoe3drwZjLA7zwz7qWGgbtUrRmmo3A",
  "key2": "2JBScwCvWdvLc2wLEonphGEcuEQXPUfLcng6dREevyNiz76xCoprkzXad5PcMMzRMD694yNbzYJvo19LSmUezgqP",
  "key3": "rJTMgdVX1895gyJkbiKRyPMVyvhgwNh37bZP3D1aycPLwyxkH234PDAKjpgfRsgYbrzd8qxDAvecBsodzKerCmY",
  "key4": "KgSGxScTEvXb3LidHn6Xu4bDQLTavXr8eiNGQnjqbUvn1UhNn38mCpuL89KP4DueMmnvjdGRmmApriQjSvQFXyX",
  "key5": "3zWFy5q9sRNxL3ufSFpr7g3VQGjVRydVRRDvVXENR5akMXAKo4qdaDk5Y47wPKFgf4To7Yk7Sqjma9khybCbQt11",
  "key6": "2RpzKw8R4pLZ2hkJ1XgU3gwQzvjRZp3fvx4gWdaM2ZGefDNc4i3yJLtskVHX6zTf6qVCe4o2LtPsqdcuyykDg8L8",
  "key7": "3V9sFE9LuPJnq8omQo9TjRWQSjam95ZcEYLBKCxAVNoMVLmxoF1PSaQi26QNR7GbcfcJ2HuX42iX35PoCHqZ3NT2",
  "key8": "3Joy3xufPAMLGGojCquuPkyaZLnmGabLXSKiv7ZcfyjKiaKdf95Kue6tGaVo7p9Kaf3G5st1poMZpZRvBqkkFcWw",
  "key9": "7r88eqnhBRuzgcKeaa54726pdKW49KPFs3cVbMeZWd5c8EfrsNuxpypDJ9L3xTnsWhDvP3UUMyZ6ahqLXUMnALN",
  "key10": "3vBxgej839FYwmAorUnw9evXzSwJsiXXEJmaxmdwHnpF71YHN424wJoLD1EJ3Nz7b9K9GWGN9qiBzhap7CJvJcbc",
  "key11": "3AKcyVB5kXZszGWHqAZJiUod9BNbzDCpJn2kgVMynfrptXkWF6CC9ACJvM5UzVMPLMNYv7QTeVALWU9znuTcrm8P",
  "key12": "f1eFGN6i73MN6BkPBZRhgd7oDPAjWhohCKvZsN2ZwoEPsKMk1oUEftiDB7fEqA394diF5hG43eeUnPTBmUdFdiW",
  "key13": "2YEAAj4VZXwCdsFjMGQs7iPzNMANgAU87S5FvrKX1LfF9KN8CNm9HxJAzw1Ka7LVo4HZnYamAeaPTZnjiU9cfjcp",
  "key14": "2uswcGHa1yLaKTCwXwFLmcAfuLXtJTXzjgJLcveUtBAf75EAkBeBH3ZkqtCzcozjY7sgohe1YzND1ShQBLkRaX7e",
  "key15": "VLdfp5sAvYGonVr4E4xt171VDwjAAGU6eKaXFatmMCXqgDHD13ZjFTxTXXxNoWkkAfXyvtoPnsbVgdv4as4fPaL",
  "key16": "dac6JQYqWhCYUFy9nsmHGgyAebGPXrYRcL7rpMneeCVgLWmeqdroR6WryHAqHyk5F8DgiUccVnVxY1myCmqd6F1",
  "key17": "rQAiXXuaj4xFCXtCAcQrCDKuU2jbgoyBdtjDEtCZ5JCPiNyfiU27zJyM1e932V8FnsYdA1EACoPEogmX9278rLQ",
  "key18": "3ZEGmBcDfgnesRLePtsTnQKw68dMjGt5oKbGA7TEbBvGLn1K7qSRfcRGwDDh269ZzhJ62k7CYuKZovWad9gh978N",
  "key19": "2GhWFGM68AKR69FkmPBR3HgC3M8B4j58xdJbUaKqkZqNLQ1AMRzXSDJvhsQnn38jV8A9a9FgzMDrFbfVQniZynis",
  "key20": "HqtysLJaNMtDSoMPmHY9xbgmtzNmJp1X5RRyYgcV7SwiLWiTJqQSgAxeUdwLezASZbS9nbRc5iRqtExi6jWHh9M",
  "key21": "5j5oYFtoie8njJyJvrBQQL7LixkVm3JBMd7G9DqaerPGNvGXnDbjQYphPBEVxJPwLFoJpYQ1hmLCFJJyrr9AW1J5",
  "key22": "2X3sbi2VbrxMZg7do87txvMDrgUhcr55uYdcicTcFz4oLLdYg6jqJtQoQrcCb5bdRFU7JNDrbzTkMEQHZnynRqaC",
  "key23": "ZkRLtane84V7pK1zs1ebarduR1nHHQtxgJP4KnyqAxde62jGFfcyd4seXqeJ8bL39wwHVacY4BoUvEn2oYgCUwi",
  "key24": "2CVhWrvEmFaaFP8hfZ3YRas2buLyHP5rhqmBNKJT9XT4MKhxAbCH21L4EXX1prmAz7fTZGWvhmMni7qijvfyZVTj",
  "key25": "WL9y16aGEDaiZCxyXhC7Q49yF5YPwU1ZqfVc5u33XvqETE74KcTra5gKc1NDcSyTkJF5mDb8AtgBvfn2o41q6hA",
  "key26": "4HYzU6qarptSsX9pRhTYXkBhGmHbn2WTPSepuSU2z8wheLc8cVrtcfc1cjy4YnVEPxNygMvSQzan5KxXzsSBVpQF",
  "key27": "2ztXF7QpnquLkmHjXkPjmkCZ3ay1yQwkeZvMx5P1tpH45c1eD29bRW1bfNVFbYj2Xn5V3UFV26KhQUsWiw29QWMN",
  "key28": "39ModtkSYSXYL19Hqb2iQV699B9q8rbFxz5mA6rPQkz4LjWc37XuBujpXZp6BhxQReUd74CvKnuEEbXL9ySU52My",
  "key29": "33T4mfCd9USYu5t7zsEZcqpjZyMjxCso7WCKEAXd1HPyTVkK5Y9hnNrMVLors5oe4AhKAkRoUnLoLUbKEUvbfyJW",
  "key30": "4mCsRM5J29vigHzMndMxCHkTaKRUm7FqbgamK7YTu6qAyGSPgENwJ5SaLxbMNskrjoJkoAY9avYRQhXCP59qiNbj",
  "key31": "2CUppL2rjy4DPeZiavv7FruKVzJbTAKzmHDDsnDR1KxyM1w8YMS444AuCiPg4gk5SnVwZJGWAeVshEimDU84XQdg",
  "key32": "3URF9dy5Fqoigqvee24FzV7E4HgW5HniQefUF3dX4DY452LbVS7mxvcAyZPscoCdzVbJeMxmodXjp834pZwgox1r"
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
