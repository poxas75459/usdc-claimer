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
    "4Rg1rFP6NPTHbCvjV5uD3kAd3WHwJ4LDekVHJDLCegZX8Lqzji9dCd6zc5aa1xcjxwYJXxVycTUAzHhqUPv9feoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPZ5b776287e6qnooYR7BmjCJr7sVmh5EFzhbkPJAmWc296qAZqKaPesMwFr3LK44HabVcJjfwSfjDRFf4dkCAn",
  "key1": "3kNmUmjAnRA8MdyMXrcKtp73vhmi8w4Z4AXrgaQtw1WbXB58PQA5WbKwFkHneM8V22vNjCdrLfM43y72ewoXb4FE",
  "key2": "54rTMc6exdUx2qTwks5A8v8qdmpKcCdaXAjAG9ZDcxP9rD9WixFGVi9qqKDvhKsm9sdWde9R2HJF4FwKJq7AsVf3",
  "key3": "4vV7yWNWmnyxSRbWcZJZbkrGFD4PT6r39D1WX8SnykRYADxr7nN5T3uG5FtpfSmVwFpkPUyL9J5EzEqpgqqtUj6K",
  "key4": "8HNMhC4jcnNiKWZBXdm2oiatjzfTxPHZgMYHTqSN87tNFd7umBN656G6WhuwC3mFZhDZjMYfwp7jmow93q5ufkq",
  "key5": "3ArabYL7pr41KA4PBmmAbweYgJ1UKqy2BWCNP2WoqKvfXsQCefHj7FHAeecH8j4fGwa1XdxHb9oj8rohy7kyfRiS",
  "key6": "urSMgBmyCX1RQxDXweyArc1aqPDd4ZxdW8yBNRZiQmQ6x1nPUag3h8in9o46r8TcrXQ379sV3gCYksXJH1LvUTN",
  "key7": "2yexy5TxdavLcidTvBSU7G5cd96qtmRxLJx8m9iFg6wGfM2YhEtrrkUnvDq9qhU8fi5CrgrifRbuLroGEoNXr1Qo",
  "key8": "4Vf3XZWsfDsw4xsX1V8M5wAZv2PAhg3jLvNZ3b9KHafiks3sgsEjxomyAFM4BwP956S7ZaGBnZJLav4X45FdQ2LW",
  "key9": "5azpEbjkHQ6wscj2cq3so5hoashzQqWfsN7HBMiuCMTpiaqZtEEJ3vXWGQtm4QarBtt7up5inAgtPSqhDoYMiEAY",
  "key10": "3Qu6WKWGcPYXYQ5To3U5i9zcK1zyJmBudwCGcLBfkjFnV1Df8WBbgpPR8QsfX6tmDC4ciT6F5FXyBJAbJFDyNdFo",
  "key11": "2iKNBeMyNEkbXeKi2BqzDGF1KMyTv1HSgo6wiBoaWM9Cyv4qMWBTSwYTfeSXNADAJdWfz485rjwvSoPZNSYJbwqb",
  "key12": "3mccwi4MMxvvzsDfpmjWnu5STN9vNqJtESky5Gn1XTfCYQuP6oKaW9ktnnVmJq1vnjGo6CQXuZTXucAtb32zBkjm",
  "key13": "5YpeQqhqyVeN9r7F9CBQ1K3BGJP4RJpBMSFsGQwcBhruKv7cWSmErQmmQ6D9C2DHHUAP7uwqmdo54gv4tModNdwP",
  "key14": "Ur6u55qy1fMRWxSusbX6e5gGidP5nXgu7bY79raDCWNSKg4wDxpzkVK72FQzSnFcNwj6kKRT54gQqgLVA8m2aPr",
  "key15": "5ovLt37pUvqDqut6VaGySaKpC3kMYcgxx7aAnv6tMDQkXxaczUgu2XGRqS3q9RnxtsYVnsuTEBLMGB95WZ4wjmBg",
  "key16": "43WaC2XdLRr98XmoXML5G87GwmMMPtEMmRXDWTrqNU1RSCU3uGMkbe33WqVm58i4WYCSoH2sRofUiyNV4hZWmvZ6",
  "key17": "2DYe8bZ1jn3xYs5d79oQg989poDtoHunZvmU4tbprhiiuUj6gRpBke59L5XoKs4a7KZTFyQk9d2zaRZSZAcHa4uv",
  "key18": "2a63MgiGbs5jRGGM45uFbLou4uyMWh6FQXKZAtvKocuMyFdK268QYnqBZjAUjFrM2xBJi1TVbjZArf7KnjJLbUkE",
  "key19": "4YUQ7a7oTLgEDSTA5SewKHL1qrMDVTQwu6YnK25daeoPFg1iH2AUvR1KEh6UjBDx1X1CgheeWXNaMYD9vaDcHDLA",
  "key20": "5jLaupPEpEHyAZ9M9vXvLo2KhrYK1SSfTu86LaJTHCtdZCeebmDy21gzNSRmkRtrCLVxM433BoXib2V1Kkpqb35r",
  "key21": "zHgmZWq7xXwcucFfNt5CHswvuK8URH27QfL7LE3dSjGd1qJjm6oG2p34RB71kXBEjehKuPTTWmbBQeAhrkmchEn",
  "key22": "62uDpZBQprQB2wYMUGpVN1YnUJ4VLsDiopGrzKSodNR5wM7EGAgmgBVCvcqv1LDPwMAE1pANwuk8j7A1D6cEZNcS",
  "key23": "37NqQ3eJ79VpDAeazqTcQf6PuJJyUrxekKUoYD3UtzeJ4A2kmP45QSP3KmaXvSN6XSaNfTgk8dhWugPXgczx8tdo",
  "key24": "PAP7oSSnjbLmoMjQYSEEF3Yr1kCrsQf3N8HUH2p8qeA1SCCd4wNun8V4zkzZQxyw6cZ8CVPJAuAKtjdpTsbUJ2T",
  "key25": "5CSDH5wazRuDvwgqTuGxcHP7L3XxPD87gZ5FTi9vNJo3DJhxRfvwTdSDdcRKKWeqzq4FjNfNgPVLBxu7J62JrXvZ",
  "key26": "sZR8hS5oqjk9jfMWaMUExckXtCapEcBYRYVTmPkyY1SCHGigAN81v7ipSCbc1AtZZbuAfMh7J9DKXosq4kasqja",
  "key27": "4XSAQoJnDc2eXSUibPt8sJcjyLknXSKrBJuSaDiCWvwfygm6rrouWG7Hu5d6vY86FjbYCwPUz24NJWvvDDnLymG8",
  "key28": "2cHag7vuVaMPKgFRsSaykodpFYo8ekAWh9fDNEBRCrB14W1iVhDF8tj38duuWF664y66DbPXPpaoBufoDVVkM5EV",
  "key29": "jQxzoHew8WUULQ5qR1Hg4wLYTYGHySTKKvTG6Gq3H6S9kcRg4nhakYprAT4D78YEYUBNXLLSnesYDxX4WQ6zyLt",
  "key30": "skcaGVQiW8bQG8nKdZssCfazKpH7yEj1ey2DyUQL6345NwNMyqZVXsv9VwUCBXoEy835Fj936damtrh1NX8P4D1",
  "key31": "4dN2KgbFdcSJ9K3s3kQ5VXUFdndCFudf2ZcV4TxZFL2FNZpGRFBKfLU537yijmngWNbx7SiZQAKaVBRGk2hbdu9B",
  "key32": "3AcqUUD8tA9CzW8MpfjjLuRHqx5GcG7J6SrkD6evj5sh2oDQSDkw4i5qAGi9xkzyyPiCrAX5jPyfqNCDTaddmw9K",
  "key33": "39yEGWVL6YyJCJptTa5HGiEpxjE8EShtf9s6vEPBXcpPveiKRaMWndW1PrDWzHTpZcW8AK8wf24SBCgFhgxDbHHJ",
  "key34": "49qPgKFmpabsHaH2rKa3Dx9EGYENGAmAqiaypHUmY9Jfb1WTz1Ldajyw2vtcWBnrxguWpBXrNJPfLBZdXAcShnp4",
  "key35": "4L4irTYPr5q2QsKQBh23KVHcijaXnGu1BNuH4tHUxr49RUuhjNr3RzLhFTwPGeXGt3trFzHtScVxT7zJjHFKbxyd",
  "key36": "37AXf7HaTtfi6LS79imBDvqa5KE4VLNFazs4KtQEtWfXGpB5oQtmagrd4EsG46ZgJfeK72nXMb7gkBB3rj3HGXPn",
  "key37": "2wLwTRxRrJ1sJUZNEAreFpQp3cYmQfxRKh64PzJBA8t8ET3Vqyprd3tdKn8X5AUzha9wDMJijLmdU5H83oY6A2m7",
  "key38": "36fzbDFmXpdF9a8Sgv7irSHuSHCxgySEkeioaao4ukDmp9Eccf9CqmqXAUuL7swz5ifB4aXJAXi1R2qeTLK9Z2CU",
  "key39": "2BxoQ7FaCHtzznGCm2Fj5ddE8TPiGoFjCECA22C2wQ3voWekxEARFEdfTZetmMjr82fBMRBkgPauTFFJTzCvKTFL",
  "key40": "2gUKC2yEEG6J1za7zcNgKCEGqGuiNE9TY6sSB5968rbhCAUHJokYuc8dYhaBiUH3WMKLoj9ydEdnuY4y8TTaHtHC",
  "key41": "uUBg5PZN8c56U9GkvzxwYVThb5sQ9Y44Ui2Ncj9YVs11zzKu9qBri397pEeLEH2X8i83f3Wp9M3n8DVGDUZJsqS",
  "key42": "55qJaT7TotFjQfqMZhm5UwYvUtpmPFMe5zGjD6qFowZVuqmq6ja3VbQu1nLPbfTmasR4DVcXfn3Zxr6xTojY7Re2"
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
