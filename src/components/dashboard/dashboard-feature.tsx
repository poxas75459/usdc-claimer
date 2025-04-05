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
    "4jgaPy7qqATrfudapTis4y7g8KhyNQWSR9LVsAsYhuyRUiotWVL1uNoZ7oZTYSPdqhev32gJMW7uMdozY4VzngTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ikFszDHBkvmWkRkxaVbjsbFwRquQGFGibtXEET6EunhJryA9tdFERr3rjcpG5F4QjPxzb6SMsqcsYvp16eA3QCR",
  "key1": "2Kz5XYsoQ9QPgP9Q3Kc7KWAgokidEiAbtuDq6dKiBRbgn1PVx447ZAHmYCLYD6JmwvYHhYFUAAruDDvat29pfwUi",
  "key2": "49izk3gN9rEnhfyGnvvmkNJrMroZeQewoY5uRhQcnYRCEB3xbxXyXpSut1sS8rTYUTS8p29Qymywgh5Zwu7YhKvH",
  "key3": "DrS4bpGYfsJZR1g37JPjR3QiRn1vpukYMc6WtxWX7L5cz3ZKxFHcSAjJohjF4N8vd1kQVEV654GpVpR4N8dHcdF",
  "key4": "4y1o6iZ2rBikgqKSXDCtEgXxp5QcDRmXe5ieCsnHZLVxRsp55Si6kHDER3Aiy92qv1HxBuctwJcQxrB1YqmZXPDy",
  "key5": "3yNeQYpbCiTnbshCnvJmcXTT1yckYd25J14nrQxjav5ff4Ck7a9CB51zUHK3A3CsP4DuRbeM9198qsFhmHPB7qb7",
  "key6": "2Go62rE7g7pPBZAJA3CBYDzkFoRFNTQUUT8dFUFPNQWqoptBgdHdCjvwMGf3nriRSB97GHRXfPjqwjGseBqQpBZ7",
  "key7": "2K6ADRL9MZpyM45rRH7U5V65heKgSHL5KJapzWgnPhoujsqTMpN5YZtfz1C3Z3EfTNaaiGopEtkxGzPmkSAh7FR9",
  "key8": "3tmdcQNNsvj8BQx54Bcy7bGzxpAcFx6m24P4hahHkZMFgGE9woCNujmoThv9QBzyLrLYYP2Pdt4P5e7pQotHFvfe",
  "key9": "AnHTkRsPN4hXqZQGFmPSTYgzoPRQNyQtvFaiNZYsPo18bacFAVecmAVNhhGcNHn9YcGsQkRdA9mbE5iCoNdxbgN",
  "key10": "5rzzjD6eKog2DgPqZMrv6J6dPqiK86oVd7oG7xaZTTv5gxSshx53rFHPjCrBX3DXDeT37BauAQSN9D5zX9PvTm2s",
  "key11": "3vjEtZJ6pR9WnqoMTsDHsLHhu8og3rch6B2Bka8iqtJVgU1i6Up1Q2AfDFZqFZtVjxrWMjyokyeswkFk5Hv4euH9",
  "key12": "27QnoQ9uxRzH9kc32FmutGbiSkUBVhmcVA5cAQUkJ8FxBF8SmZbfcNtnAgnAwfNVAJDHrgbouJhKfMst82Q4qPZ2",
  "key13": "3i2uG83uYrMV3JQgf3gWmfonVKazPQHtLFnyxBVuRqa1cV75Rt6nUhcy4KRa3LSK441ysxNutnqN1v4dckcpcA1w",
  "key14": "3QSy2TMRFRnpoZCoY3VEg2QoBcWxNfoVBe4ch7yrXbKeAVxm1Z3BDGcMJy7iaKmpcQRdemHGTvJwuZvjgc8Do1Z3",
  "key15": "4bJXjZB761Q8ei5D6K1Wv434X5fMPprttqafX4sTqNWvAjsW7fLojMFks2Fj77uZwx6aXEryD7xbVsKdsKqPVPhU",
  "key16": "iePF1WQ2HnSTzzxDP5Z3jg5hXHqiKbjbnwi76ov7iyYiCBLqoHxhZS8w27WAav2e7mbSt4kcjyHMjFN5mX2tAms",
  "key17": "467LqF96H3FugvXetGLpDNrWu8yWRYmzsKNZ2UN6szPs9BJLz91EzYnS9zraHbCVtoVuTGPia4JtU7QR6p5uQZQL",
  "key18": "2fCiLEKgFdf5MXyetwXaB3eLLjffa6neT6R92ebpEiCzgtX2foChgwFBunEyqkJSqQxzExSfX9hc3tpRJgvKaPfm",
  "key19": "277HYEjP5Y5adiqg7QnN2ga9fRui2veYCHjZK6LLtz8dWx1dpEZ2vWv5N4ufpM7FiQPjqcvSRV5UJqFAsQGS3hQT",
  "key20": "4nSnPHGiaJDxhcpR53PNKtDNn5vJEMhJrZHxQsKMYKpX73pBVV7drX3wVt1MR1XHt3QyjZf3jJMEVfrgedeQW5tH",
  "key21": "41qJ6xYF6N2ty6ojnmfyXGM4mSF3YSWrtiVVmfsb9Zm8R1DCFj4UPht73ERVVwsVh9PrzJTdAnUYENgs4KPR3bWN",
  "key22": "Qz8Vzqa7FYGEDhr7qAvjQUaBtvckXkxFsS2FJxjxdhYas7dxqGGkPEnGi1dKaURq6g8Yi4czBvUMdBZeqXyE5x4",
  "key23": "5xkSmuCW1AXENq8j7NjsM1qyzWkpJ9YF6eD2buVLH9GkUDsheV3wqrrfFZu7CV5CAccq3JCmF9QKUAfV1w1CU3St",
  "key24": "5VForYGbRqvo2PcStRxLygXanZbePtuJdJ1BkSyuRHhB9jVsKpsKX1VT3CuqQSM3fmr4aBJGqgRm4mkA5TRPCmYK",
  "key25": "5rgWgjGEUSAS4Nnj1ydV1upVE1iMYbPV7fKZbibAiB4X9TiCBrWPpfWJp2gM13jr7Zcwb8gVxBsa9qygdTVvFfyk",
  "key26": "3oe2fgEWaBUk3qypigcKj339a93KJBBkmoDnDp4qc9Zv1dzueDMG74w2pg6aD2yL26D68cfVGweWTZ4nnprdy4JD",
  "key27": "3gHdpmV16CSUfd3MyVDGPTqqsvbwVWbGCMBxqmokrdEj1eF4wh5gf5oJCfrc9MqQsBYtPgknXE3c3pp9v9bjzxQR",
  "key28": "5ZtoAPa2Dq47TJSM7TRWU6pd3U6qR7cMr5ZSM47HBFMxm51Gte2ZUFTbaabvmey1YGQS5hq272d7Q14rid6FN9nZ",
  "key29": "5zvvPRwM2YFWvb6iEvL5y3ezeBY6iqUF4KcuUwM8pLKYCaDTX19sYYY35rANDBZ1XttMNczMv1TXuueygzoSCqYi",
  "key30": "448vhbJC2TeZ866K46QGYhcE6aHkdvQ9D8emWGSigvq4tbx4XirYetGJNw3PmFa9XJpz7CBfQZ7bk56prb39niyj",
  "key31": "4bcPabBjCSN5jJx8bQjKyyA7k5nkkSqWj5fLnaKJ8aZLJXQ67xxbDPZRTphGzQFNkG85UPunw42ugH9CmiFX1wjt",
  "key32": "3fjqW9ooDW4C7DY2G2DnenT5gEoLk3PKTTeN4Pc5ivbLq8rLhx3T3DJVsetq9UhhVK8aK7DxuLBoTQrsvA2wwoic",
  "key33": "BnVPcBQ4yC1ReQ5orqMUjhcE9RiZZGh2FAY42GpLoKCbzk7YM19RWd6E71ezP5SDzCnkJnfZUvTFFF511PYjd3e",
  "key34": "5X4JC6odoYSo94L88KyQxqATggGvv28v3GiZxqYK2zjPj9NqxBXkodqdPPYn5dUUssDN41RkosuCPaxskhBU6jR9",
  "key35": "SHdcsJ2VrfdjB4QSk4tZaVYu2vNVMCQpHqtCD9ik8xtwgq3sLiyiyMZBpAPgZJCzyG1RBBhdRSzczoW6NmqhL6Z",
  "key36": "31bCeZtoSazesK7D1J1r8hYJ3yK8Cf8x9mhwJ2AG27sa7XJ3AgjTPY8QutGTRL5qbA4tSKfQ6EkNrUG7aEMU5qjt",
  "key37": "5auknFE3sQv8Zp4bkcPcPSsbd4cBuCdmybHE6BRRA8Z9pzL1PEZGm7ktpmKdxWkgbwpoxaPY1foU1rRyzpx9Lxzy",
  "key38": "398TiukB9eGif7d98x9Ggiwyi1zC6W4XoD6NqKHU2b68Jk1TWBLC7Cg2jGZPoF7uKEtU7xLTgYvwkig5c5AQPQzv",
  "key39": "3ByaULeZsKcAvccKRNVVvwiD5JsCagie6ZpyAAY3xjHU3BWxEtNmxzCxZHPBBSirag2hWbxuvRm3NKpruo9qZK4o"
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
