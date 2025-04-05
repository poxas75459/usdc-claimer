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
    "3y46F7RGTdVzdQQqGrA4ZShS8fEh7Nq8Ydmd6v5EhRs5XmSXFQV3zBMfntmgQWScQ38zpWvvbMZfzUWjPSDfNVut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWFxUJwz9dTpaFxRj15QraypZwTA1AQDWi4e811rKwtg6T6RnBMyuSXANb7axU2sZQHFwqAv6jzVH7N25y1Wo2S",
  "key1": "3PLEXGUFsx22VFu8VdnUbjiz5F5xYF2hKzSvtKy3EA48fRiUvmb8qtUom2p8Ws5ETj8jYfRvtRdWcm4AoStK7Wnh",
  "key2": "5o73XjqbLFJy1uZa5Twyyu4uGNjEHjcicAsttSpn242vv8mBCwkwtmhqc2EkBtpCxR4KhDmtudwQwoaLmqyrAV5W",
  "key3": "3YWFK3RDD45EfLMRg9DnuhjyoX5XCP7ouhKeAiYKrjxkQib4zFUbEyTLmHQ31tkW4F1Sw9cX5eLqW4em8grG1JKu",
  "key4": "wZ2VBsusUSZhebZuDxuv9ReJxubKRuc6r57CsDMe4Qkc7qQ8UpJ5cymMg8i7UYpQjtWktB7fiPaegtygT8QZWnC",
  "key5": "3MssnHayan5SgoybmN35ZGaFYC6jRsU5YkhmeWNXdb169g9PcEwaBN7HKq663Rp33CUUV1maVfUEZ59kstbtrkiu",
  "key6": "c4WEqLjvxjxbYnLSx1cRWaE5ojTWrQQ3Qg5SCZriegJJ4jdjwGkUfEHfpxqJN4SHNTisPR1fuCAp8cdeQqHBrpD",
  "key7": "3EmnpV8KnJfUzMEKtENi5MDuoJCYnHz2VdCmV2Dw1a2eWw5MSDcyAemDvgKUhugQm4qZ9VL8e7bKZzRPgvtJ3Bot",
  "key8": "FGcMnWKhS285o5zNP5ncHjA5e4weTmHmWa1g3P4TMur2nZvvoXAYXEosdwbcphkXaQPQBq5AM3iSb98MExDurj2",
  "key9": "5SiFd8zVstWkoFwoWSBTCVtJhLJEk6CYwoCGrHfkYHTbDcDkx57X7gYpeTxCkwQLBgDsfvCNn2fLucqB94jbVpnC",
  "key10": "4cgneLWE4cjSj6fJ9f2JQwinQJ5H89hk85SZKVrgd7MaawP7fbZxJusR7reR9QFqXZhUw8WmbbFMJxrRWo6oWgcg",
  "key11": "3La2jP3awJDpdthso1848Ha5TE3deKYRUDEjZyPDu7ko4tKkKsnXtpiMb8m2pNb3pBi52wfYuzp74KRmsTG3Hf8Z",
  "key12": "2AcHYLc1wFunS5ub9xrrYQXXmUfm67rytEbxP1tXyRsWXVYUGRBzhvk2F9KyWf3KKTN2YuPgazD7t6VRXZfQujpB",
  "key13": "PBQ661rxKcgyT6PEPNmkPFay2UKR3dY5cjXJEVr9umqtbqjK7YhYJN8TJ3oMUGKYEG6A7dhN3CqCMS1zwoQkZ9K",
  "key14": "4kepVtyZVbf9fURt5nuXRmmCATpYXKbdgEDUuZN6k2xmQcteYoYgFB1gdfSy9FWVspy3QTtv2xrxdXAAKmZriSZn",
  "key15": "4yRgtX5R7ozNpkU4bKDFcNSwhjSK1NMBxE55NrMKu8Rn6PQZHNQuZeK49EWp7ZicCRoTiKiGX1FCu8BBpbfN1yYm",
  "key16": "2vcT7137yCGiRRe9RWE6nGGuQHH3uBPkJX5HyidRyJaBogf6CbnuZDZ1srn1484XbsxnJXU47YonNJPAkP95n2JE",
  "key17": "5hSTDQfifXVogj2ZFVe5QpWHt2oqgEtC4UDGA5Mp4pixcXrQn9RxcLgNBxv6vU78go8gwP1JUErMDbMmgWwrAASC",
  "key18": "3qGV4S5NzuXkCQEmXjmRfDQJG2YmgzMp1fyXxrL8zXcnF5ybfBJdyYFW1azVnjUWnaZfUzw1EngZeBJh7SoheH3g",
  "key19": "2Yft3f4UfRV74fyhuvPeuymXEaLpashyJhX8XaChVd4NnKg3tRu57rLgFBsjVfq8wW8eFvmMbAusStk2R1Yktzz",
  "key20": "iVjzLffWUzfAmCRNK6jGiN4NKd6DKutnEuPrv5BuCF3eJtNwm97QyreKNDTrp3BbS9Ck56yNUyvCGWkJZmdp1ob",
  "key21": "2VQ6ZjDv7DZrAB14Vk5ck1UnqkxDiebrTSVc99UhQ917mtnHpJJDuRuTgWqyaLMiZW4Nx1no6RCFQJSMqpXMtJpT",
  "key22": "4oPSXWov2xgmcAP9dK2qS6mHx2GsgVtKCp8rTUYfM7eMoQmKp68UjCWoa6a4MoYQWhY1h1f5Rzk7zfJjpLMseQhc",
  "key23": "2TiqVv46kQQLd9unx9Xy1JNPkuzsDBCsKrR24ZMGLNzygVs7VSjtRRpgYW4oVWCM2mkHTdKS1RRxm4ar4a64dwc3",
  "key24": "5oP81YyNFtax8y4mxX1u4FtGjBM1TcGZdzm5ckqXtNJtVL4UY6uNZ8M7W3oGy22zWjK83QbRYuftWfRDjomqcDX",
  "key25": "4Duhj7MC5X4N16hM2SFPCs2L7pfjSsUxg6jUxV5XTPDvJQ3t5PKkknUuEHwvX48cdYBBff3Bb5rUmLEoA8f2wMtq",
  "key26": "66YLGCdzkiZU1Yor4Jk2yXiRHRitqLrLAhLkpeb61uNSQ7tKyY268QTaYegTBLdQdGYRBuJpdHWWhtHCDsbh4xAE",
  "key27": "veoBNABjVdtoGCdcR1qXe58mfKQ2PuEk5kNm3MZyYpzk6TswCyhcuFzFW4tn2cuY6sNu8zKmUCCaZdDFZFxGrcT",
  "key28": "3vETZQKPeE1JZgzgzmJ3xZ9zWEtKTVQ9ix4MpPjRd672Fo39CjLyh5STYWyBu2ugD4YvfQKuKtuqjiNZFkLbtkbU",
  "key29": "432hwChcwRzNtvvS71spSrojDbQLfuhZDUBMupyk2rDQvSQzf2kVZJXo7SYgVuzXo9rmg76Hi3dDR6oaRQMj7Ta6",
  "key30": "5RMYgiFvd4u1SGapnDv5qnJ8PsSQmS7xWfZYYHn6kKcrvzPMrL8v2AbBcxcp9aAwufZAgc31Hwfnqmwwiio1t4uq",
  "key31": "39d4Fz1rYAjZiPHNRkVamzafKAvE6ZrHtWip3mztjBkeuaqt7135cPcakUhWqvfbX8eQJJpGajWdRA6NtMbBqYvb",
  "key32": "5TxZbXeLfSRtGgAW32wdQFGbRZLxUeMNugnG8jCJeseKur1FagAE6p9LzCJ4E2n9wH1GAnqk5AzhRa6xMFAtzsJD",
  "key33": "uGDi2v12RtvQmAY7N6RhxFdQS7RWSWftaqkmeH8eqzYHAQSopfh95nY5k5BZstZEXyRwA5FwNdsBuv4iBUr6c5s",
  "key34": "dFQjURRbJVAjQzDamWe9CTw8P67KfP8mMZcsP32hRnSJzaCLCY5AYhAZywfWss4HDat3LGSFgAaArUB8JuR7Vei",
  "key35": "4JyFfNkweNCRhvoSRxdrfVjRo7RSFfchdQP716kAGCHEXbA4Z4GcdgHpcEjw6CF36RKb1RxFDFD9G8mFcd11qTWx",
  "key36": "3T2Y2jcF5eaq2U9KPzkwkEW49h1m8m13rbJGuXy1oYyfN3Qhgsuq65m2XmVGXE4rNFZvEUdPN7YzNG6CTA4nS5AW",
  "key37": "RPANk9fkTVqmPihwQjzX6eKCteeADLarX14jnnkPybkQXxXZuee1CKXCJY1upFYGhziFD9be9ZLVCJhN6VHWiMm",
  "key38": "CBqSqgeurRid6AoycLznEHsvfJNtUn1Ji4SyCRm5rvvuHi8M8NnyGR1RsKtH96sb7d4rB15L4QfbRRzZKBxxbgk",
  "key39": "5Zju383C1vpi29bx4M3DpNLRj5A2mn6tehSfzNiuK4mouee78yqxmRRGMDA8mmQYcWhysbttX2Xw5v7bqHE5iRod",
  "key40": "5pXR1YnzZzh3FzV7cKkJPJBH7qg4pvqyy1ejtpofTrpcYXsqMwUU4rA7S7h1cyVxMoiN3ms4tBZt7tWQd46d2oR8",
  "key41": "51h8EJPnC4W3XKszwS4RbBMN4MJkzKtsFPw4R3m3hP92UkjnK2P6rmSuNPteU3UNVTfLRQDXWT5qDtigjCQUy1mA",
  "key42": "5AqxmnR979FBrV3PAK41rAgEvB4rtNaQz36jGiNN6HcZdwbHPqNYdua9St94aR4RsxhRgNUQdGngFV7CdjPbN6UF"
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
