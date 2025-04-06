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
    "2WEfW7TE2UaPnxUfPHZUBH4SFa2nuWakhHoAKZBL4Dk1XvoA1vFHvRWAk9iEL4nTCpvRMLF4nLhafY1acKP9Fq3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSyUNN8Mvh7q7Ci79ZFnCAZwMM37sx2TSx38GqH8Sk1neT2smoy65Dy9VC4QgDqwRmPmqUftS114Ytak4Ex3WR2",
  "key1": "4MxCqf6zuTPCczjx1ZjhwMecX65dAvLYvWtHKXPrNXpPiHDSgm7KXd82NrBAvFSzzjc9Gv2DptZrAFLpX2WX4aGa",
  "key2": "2AJDshg21En8PBmAqG2ZCc8ofc84UBPBi4Wf5kiDReUxcNBNjJH6rGyohhihFNPasZ6kGHsK3gaj8ff4dU9yaNPy",
  "key3": "2zqEXfrjjR8eBcn4nqmpCRyV468Kn1Jg96jT8QR6nzS6maqx52pANFf4E4GzUA64QmoCuLSJXqyTHLG2et9cgjtE",
  "key4": "3WzVssf1EUhxK3ojReugXePtYVn2xqeFDfzQkbjC4RT1kxdVA6BSvQGaajT6pBxjbf6LrPfmvjLUkB1tcJ75ZQEa",
  "key5": "5fPqxGDh5ZcddyTKheF6gCQPrAmssqvoLdD7EVd4tHd3Jezh4cGH5XMoygivGYxczEJPzoaXXkHQWrF7A543JJ71",
  "key6": "3SqBVGYSq3HMxhv8otUntM1pH3LfPrwAVveV1qFEunUmSaLVBHoiaiygM8gzjrBz2tn23sB13PHdpPcbQW3sWwBt",
  "key7": "5UufxxBxty3ibgwjijZAwwLaRNKu3gLmVhSMh1Cw7xgmmM1NybjeGgirzcoSQttVCBsj4oPXSkiGVubehEytyBTn",
  "key8": "3uYCZ2F4eEvkTq6NH6d78A4emePTkR4jAgtrrV5DQ9ZdEiYFtMLcmcGHpk5cukf5Y8zhhoFtHzDvM8jCDSLWQseu",
  "key9": "3GoRYQYYoNUJduuRpRpc1ZPsEaN59zKTJaCir1n2NomUGh3hDTgivdW76FtjAFPfVcuvbLTYgunXynHcLhkAjxBX",
  "key10": "4SDWPcc88fsDNGfqDc5tNrfZNGfFKQ2tScJjrTTB1qXTqD177qPWScQRNCVSmBVQrLgJnofB3mRTkHJHymmaC6oH",
  "key11": "2ZAqcU3BcqQo2v25eQMa2pWsBpSUY81rie4snSTttYiNxZDLoE1wSrX6h3Aa1VK2JrqJLfBzrMaJgFFFPbMp5EP4",
  "key12": "4kXLzGRyNNeWgZoTm8aZFgmqEFufdJfnfLaA9GKieGNgG9FG5kMr53sZx8ArLpBr71Fkktq7Geasput8VAycARvE",
  "key13": "hYkHFdPjTrhoMqbKa3PsWc1L7cdVMTUBodxzz6fFvfaQZtbaTJ7zLTesPiPVSwqCENgraCkJtenugmx6suzVFDS",
  "key14": "3feSJocDDx7PxGynpmbXRhmrdJamhx7VTFxWovyYmfTLq1TuVmbD4vTrmuBubScgJGGabC7z8MfvexiSefZpFEJc",
  "key15": "RmH4xPDss4jUjePNTx7bL1qBaRYNzyqzH6aMCHjiUmFbR59xu7nPhr3eL3WACPDfrCLacRgCkyaHvut4H6YXNcw",
  "key16": "3at79MgqYkxbV1hLo4L8sUKKNSbRVGdCLoaxTwZYEM49tSZgXuSC3LLHrkhiyFmqe22VTrLFKxng69gwecVofaqK",
  "key17": "rcsbYwNZngsRaGTyvJZ6EFRsuHnaCd19j315EwjJWWpZ6LMVi5AdKiVXNPUTAAzyD7rxSBJSs7jVnkhcGWvg9MG",
  "key18": "G6bM6BbB6Fpb5qBe4gpoB9nbGm5ruwCttNpKRPkHcyDE4PsudCt2mCobyjHqTxfjDWgwb6chEHnw9LzTf5T3CEd",
  "key19": "Ed3v2WNVXKTu9MaXD64nzWYo7YZgAY6WcrghkYwuPDb9594zEXCMNV4N7aTp1MnfnBsD4d1SvvDRFad4bTu3LHL",
  "key20": "122gtbp2XQKPTFVNyhwMiKpYH5R6puu24ev3p77dVZXVHjHnpWKA1PGTgZ3gx4YxJdPwFVGDeGgc73nBPTvPn1YA",
  "key21": "7XwNmsNfb1iphevuf3mtn3GmMLpLFSnS84aV8gKfmuieY4btpKe6mD62wP1rmupLknXCtFvVTaeEz85FDhCLksc",
  "key22": "mfT5mUwx5XP9QaasNstFva5dKWB9nYRTkGkHbDNb2AMm8kT1MAZqFYm7DNEYavKgaNJDnuo7fYAH1hs3ae63hYG",
  "key23": "5TnRRbVxh6jqQGVXQRegAQJHf5P5SXR4jZmCR9N8q79gQFm61QrYWMfJKdiuDV2KTYXoHXZVgEdAuwUBJJnDTFUw",
  "key24": "nDnXLPFcF4KzgHbC4YbY6pXik4A4uRTtC3R1nLUhTRCnExpFqSZYYU1AsDb9myCXzt7jLoxp93iMtx5kW6ApuSS",
  "key25": "482eiAELeDz3SM6vuKYRZVz4g3DEzhEp2myYAyDkn2N18xU1fgogL7dMETJyT6VvFyrTVHJJk6tHHTghAzmQhJ7e",
  "key26": "4fri2tCZfmAnxqn9HDgJvVVk75MCkodFnTRg66ezFfuspiNouHUZjRRmGtgeA99PxqxYkvLYUZVpkF4uXFhgHAyd",
  "key27": "5dLUQq9LCbH1yYKAkMyFAKMbjQkqMbamK5eYSN4uneq4pSVjV7HupRH8yGr7nntEUe3duEMwUECwQk4oHZ4UjZTq",
  "key28": "vE8XeBbJdfRUk2DvyEJyFfQ4muGJMczHRtC2G4W1wybQe6C6LtbY9nVf3wS5PTzVpG486hyyZVJc46Vbdrbsq1c",
  "key29": "2ZnE4f5Mem7UoWMG47n4XE3bMxY9YuCdMUYukJPhoKhviEh1JtTfPcp4n5xDAUfSqotYSABjKf9NhQspG8UQQxRB",
  "key30": "4oUVKqPKmjj63yhdVq3EnxwTa359LCceicAfpeXysderV92ciZFmktc7umYrDQuqseLo4KJPLDwSVD7icCEz2Vfq",
  "key31": "4px7sA2AaV1CaTa3a8GRvAdVShnMjxGZ3wDTCCgCBTCn4coDi1QmB6TTczz4shgzsgCsdSedFEHr9kijccjr6ws6",
  "key32": "35KUVkoWEK7Ts1RFJUpmN4B5GhPE3gYhhhim9mAivQoVL8DJB1adAhFFNUKtYntsywdZQxwj2QFCd2XVGHZ6ufGa",
  "key33": "4pV4GXGi4b3gg9xQsU3AJoGYJ878EuUC6W4HMfWvELxLP1aVKic7czoRpFCiPHN5T7Dqs54TMqskWRUmwFr7dEou",
  "key34": "5TfJn8Bb8RxoxJGcqtmra4PdBPMWg69w137r1Jc84FUAq7qNhQc8nja8gtDG42kriACYgdXjD4avoNGHxMb9QLab",
  "key35": "2dgUzShDinVrd6NQgtYGroukm7FDeZsZq4wsPNw3nFycLVFWJwyNuZW5GLjTn42kRnW1VNqAnUX4CUcaGZzaAgVh",
  "key36": "31CuFDCQei8vgQ2gsk4KkZyGmA5cv662cbrDUNnUJ6wBKnif8aQgePw4jn3LjV4znqRVfsWAW8iZ2ZZuerp5ENi9",
  "key37": "5jTvYnvqfiKcPYnRxoc8Yzb83gfxnx1HS5938rrXePrK7zVKGKTgnqWki3HEMpbL7rH4iS54JRVgPYH2UscvMKdZ"
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
