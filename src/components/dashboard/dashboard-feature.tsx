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
    "jL5VxyMZS5oPxvZrUCW6bckcifUzygVG3PgauMYiV7bogqaDXC7rYeG4CGSmZZ2KSjHwpWq7HadM4eyjX4EhL6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fkmHHDhNyAD9Q2i8cQvkkxrk6MmXuAKP8N6Z7YtMRAAAYXzumAUSYCy9k9X2ZhSEFWNj9dfC6uGBEhThWSFMWV",
  "key1": "dU74zXcppXVtfvKLDxJz7HdctraDS33BvDCVXq4X8tPYCD3nDMC6NBfTv4fVDduWcgRwQ9WkeUctWrFF3gMPUXh",
  "key2": "4JP5mNVyjbgDzbj9t3WXAm7vQx5ZsZEaYCCx8JMSxwSgcUXLDK4SwNQbVoRg7pEHiyWkFGKzneyx8tcgVzQEuRu1",
  "key3": "5V15Cx5fcuJaENBE1jEE1W1uuvbU1SxkywPXtqQvBupqb1QgdLR6FC5HGLpCMaCCQxJmn9aZgKo1M8bUUjyvA7qr",
  "key4": "4DFNGqrZnMCix3BrFxXYYpes8Tr2aDrW12PL4ccBraQ4hkFaHbG9feN3fG5WVY282NzdqmtHR87XTZkQdawuiYFc",
  "key5": "3tnnpfTzAtDXbxP4aJx6JMY7wjq52n59wKMsiwQQu9pGzXvHrcu8jTjCk9kDXoMsWhDrz36Mr5A57WRamZdd71Tu",
  "key6": "3AQ7rHdPchRHS13GrB2n9pejeNSWS2tLevudZ9BTBPH3S2HjBJhMkGdH8uu478sk3Vazk7qLDVu1HjnkJFg2Y1Wg",
  "key7": "4o16BKtNtYV9vGPgo5JM9jhBRL7xhrk7BvarbGcwGvvuYU13vMoKRuRZQrFhNZuxiacNjLRM46vn2ZPK4T7uqpcF",
  "key8": "52sk8GNaBgzhnDya7V85VBct6TLzmoLKiqDSVD9nhF69P6uYjXfSRFPobFETm97AsSxx1K211WSoVCcbEk9Dzquh",
  "key9": "RsTKFpfxYAJ8Afi5fvZUqq1m4txoFnqTEhjsLwKKoh3S9U213bqs5YJQMjiVwUL3YfgZaQk4u6pQGRXeN3zRRuk",
  "key10": "HrcENG9EuwxPAk3srHv4zLBTu754vk6vJ51tyGMw4dLLtzsfxFgfuEDwpanKmjj6cyzhTSvfjuynUTiejLKm5rp",
  "key11": "39mGW7MxqtAz4dvQ3wUfJxy6GLVxMwQBX31euMBA8z86v6ZiXZvoA21Dabx5YU8M422S5M3D5k2ouo5QpZLtw8HV",
  "key12": "4J9P6xvt9RoT5UnfmaWV9qX22VyKL2iZPp9ShFbMZTFzrZHGyv9cpdzJUwcFhK97MBorx1M6mLTs8PncuWi3jQFu",
  "key13": "5DVBACbGVFhrvAoXk7jkHGrVh752hheZ919V36Y8y2D6wH2oZzqW2FU6xk7A7N5mLoAgy7Yfsd7V3LrX9GJwPA3T",
  "key14": "5otGzyyDmo7rYPRuGGhqKR58vufH2d26RWMVgpd6taEMMKHky6oHU35HNcFATuX52Lrv1VUs4ppPkkw4hZJfd4FH",
  "key15": "5dTNoH5CZffkbCqGcuDZ1sVuyzHQ9Tb3FTpeko4MYQNkdNRDb5YoDbhm5ZG63y28iNrYjUZoJuc5VmQ1WH2kPaTX",
  "key16": "23fn4UHoRK85kXEJRsiM3JEDyFiZLoUgboLvBMpXiNtpkXFsxpgeTbEmcNAVFWRNndHjh1vTUkPB41H8neGFqLaX",
  "key17": "3oVyjyXypuLks2JKkvQ8yFyeYnb31ggxwkQWtwMxX1hQ8oS6JSZAsTv7mpGc84XHNqWyNvXZUiDYQBSU1NZLMhcJ",
  "key18": "3zbw79xmsN3Runq2QDRC3Q867HciRATFJaL4VC9a2TaGdRwnLU8JNDWMP5xa2tpxbWLdtkpytoTbdHnw4LPMK7qr",
  "key19": "22tfEFbjE2uM8aKesNTTwJzSETuJZww2AZJpk4oRoMUCdi1LTjqgFMDD1KQn98QvgHGWDvBCgjRT29hJifsrFmbq",
  "key20": "2AbmkfaGkpJDqDsG2ggVqAjy9Xga7ifgyMj3Jd2UaqZtWVAEv7qgA6vi1oRps1ZBEhxAqiSKgQ3sj1bwX95Yq54G",
  "key21": "5R864qApv4JEpxkMBpBuMAjisaJ9zeL1irU3ikuaJZEpiBczsVAAcLTZPkw8B6pci2VxLjSho3hSQbpJgtDg1sDX",
  "key22": "3Yz71eiUx4RqCvfRGMNhFnJh47fCW7zkpVovThGAz5aQT7ZDNvao5E9Z7KLFWeQCbstYjDXPkAmFKWTdY1sZLofz",
  "key23": "3FB6c87f7DFjNwUZY2kBzLBwpLwNH6ugJZtzsx88M7J61L8bj6qnXEMziSAa9PCSuLBfsjJNWB5habpbZUyp2Rai",
  "key24": "239qbP8KYotikYJezxrDkUiKRnRhBWgespYkj1pd5Jt2Wsa8PHwB1mg7QiryWw9bcpkMZKnHxuqTKcBDiqy8jFBf",
  "key25": "3rbQxtTHhtoQ2bgPTixs7iCKvR2Kgeigi1kW7cb3J7rKY3denc3fGHDyZN4EauwsrFr3rJ8Y7hJufHQ2pquRNL5b",
  "key26": "5RG6s6mtoFk9ZPtKxEYPiudtKq2N83F2RrPS7QGVjrTDdhu7rimGoRQxzptWHujZgFZYHGJeczY1sMyXKhePognV",
  "key27": "3NCdoS93smiQkM24XcusDi87ZVZMqUFbYmY2TKSWhU68uUu3eLSuevzMy4GwhSaB7wLKmh8ZZFPccA2qP5LSSV6x",
  "key28": "2TYVDzqLVt3rczUCPaDNsxLBoqe5y39HgvejACKF6wzunebwLFwd2CGYRqCm8utQ4tfcCsg2RdxfnATm5JEfTCLf",
  "key29": "28yon88dcL8BGw8FFWM2wQUGZDFULVtJDdbDY8ovoqtq2hGqQgs6pQJa3i3Sic5nYXSLC7kT8EjMpNa2vtSECVjK",
  "key30": "3UpCd3Rx5KCuvVnVQVsDcWZ4GU2mLZU3cxYt3V6kfkjc244Ku5pCPWKWMowte8MwVFUV4FPjET3cDkC9GytfvC8f",
  "key31": "nRfxYartf5Qa7eyzA67nJrdPjFfgqY58hF96WU6GF3LRWRT5wyp2yaixunogA1vfySujdFQoaPjm2Enc3TzWYE4",
  "key32": "51fMmYEwvbsa2B4WLPQGuQdeH6ityfSRYhD2Ln7BBKug1seZ9p6fK5nwbZzBbc55hf25CfTn2b3D16CqTgbmKEwp",
  "key33": "4pqUcMYgWZ4oTm5jzaXfunv8dphsbCSBu32GfoP9nbFgjUzXobiYBVNEFKqKvXhSSxu4oXnsPmQr9BpoWarUMvJt",
  "key34": "3uPb7TSR1DxF7i1DjQ72g84Wt2mVfmvmPQwp8acJE6ii11v4agHa9QR2SAAfCiFeywdQT4pg11qVsYpXnS9ddDQK",
  "key35": "2xfKjXAtqr1Se6jxM4WDfX9YqPKSx6R2RsVhmwbexvgZPWFAyB4WdocNY9hao1d1j1NHLQHtXma7obzYzrv1VQDM",
  "key36": "5vb4gtsaa8qctXJ5NhiwWNK5ye5v18EabW3mQ63oNimfRCh4GQfSgTS3mbxaAJV2PQ1CYpL8vJXVfRAGNQqa2he6",
  "key37": "2fzC7jZ65m93rBAyZJhgfSvdTJ8bBCXymUKzLmjzALbHyW2bvo5E76o1tdk418zixjnzZAFuRj8XNgcUwxrg3hTX",
  "key38": "2VxC5j7ETc1LvSXGRmWCnox2AS4vW4TNXGTFTZhWimyS2pqcemfAszoC4xcPEUr2xKLK1DeakHAEKognrBQrLiPn",
  "key39": "2VV3uPptAzmECXorxXWRojGWAq28YETDTFsUHsmYYKw1KgPtZrDxXtkAfC46Zx4uS1VC76XyZ2ZFrHYj7xK4xXt8",
  "key40": "4o2UTNw9rjyczPK19YNSriUh4jVYeNUr6JqUebK84xGySnZwmTS5gJCtoxqcsSJpn9KhiG8ce4oSexikcxKhrG7x",
  "key41": "3EpXw2SmjwnV2P6YXXrGyayTTeL7ePphBbZPo9jFyQLZMTa5PryetP43m9Pht3Thi1d1RiVjuZDPnmLBUoVqueVL",
  "key42": "2YwtRBG6nbtKAXizd2gr2E8UvPTmBGi2B3o6VUiDv727ZPUvGkKVDuWA7aMASr7FuXPKH5eeeAyBncraMGGLWfNT",
  "key43": "39U8uARTGdGnpapWQktu9JqCTUzUNbitjnyLRic7XZ1UFTAsDtGeJmuM4XPuKx2UVLoEcbxMjWNtiwnVSLQhYAih",
  "key44": "5g8GLe3hgZGNxJyBpa86DqeHhJBdbFrfVkK5AYGTyQPp7HCryjd6Cad9AuBpiyk72KeokZGZd36ViatF3pauJsfm",
  "key45": "2fS6JM8i5SqpgCHwPAevwJueoTEjyp1u6sS9LyhdNCN1W1L9u8qMUB2BLmq9sT2nssBeQB8hbXf5f2bmqaaGb7ZW",
  "key46": "34qfR8B9KsBDLM4ZPsgVWeu1LhoXGggj8T4JbP44zz5f8HpG9Q3YBmwvjWuf3ibThLvBpE1TwDjxb6wyL5NAH9Cx",
  "key47": "4u2Zp9pVyagU7KDTV8DTFqkg9ti7Zq3H3JaRQRDJG6XzWSHmwPXGVHMwNtjFeDBkeFyA8d19wPJTi7QrZcVwtDex",
  "key48": "5Hi2gX9PnY8gRGfc4bEsRYo3rvuZt6C7WeenN3dA1xfCKDpAJdgNxmEK58goBSeQap37cmQapxqUAMhSQy4smC25",
  "key49": "2nbtGvc5vJQaUN8xQma8de6KkYDyvzyUNaJ2JTZuwmNLZSPb63HpxfyWQ8hPpMc7esvExqNtuJNbGwaNsvgN8rU3"
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
