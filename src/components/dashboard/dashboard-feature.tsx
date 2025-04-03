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
    "2FrVfLrYmP6tBz84wbCAFnb19TtdzgMVHhHj5F9vhkbBHfyLs1pneKn43HdHFgAmUD4G35hrZTR58c63YtcNPinb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ErCRq3F6UbGCsbpG7xHnBnXugzkBhScDPBeLbHB1o5FByNce6VFbZedqqEdWY5RLBxDiHAJosF196Jfh7z1AyQ5",
  "key1": "j2QYC4d6eZxfF7RYpEaMbSqHhKaYjfR4yeRD9UazEUXpZsGRork3ZycQRYchjbhx8CskvomSAS54acsFUxRtQHu",
  "key2": "3oTh2MSuSL9bs71WDud6jiGBF1iKHkASET19Psv3VVMdHoK9U7HqMb3irLc43MW7BagjcW5PpzqnKe9vytHa8DEE",
  "key3": "3JEtHDWv1D6DM2hbyA1r5tQwPVeZ6DgZ4hEDw51b1G1hAqrdHkYPCYbCPuh7araRM6v6DL8FPErTTTw4p21z1k6w",
  "key4": "5GPmEXP1dKGugfswhnkasgkLdFz44WdTYnUYqk4hJgBgSBVwd28KtSuVzA2PRPzHBFbuHYyWosdimh912dywfp79",
  "key5": "3gPCvQd6JPrQ5TnCMZYQ7hy59PWkuFeqDp1t7NzTRXNHGs66Y5HFHMvRgcyhaARe2fKHuVPaJyAfaUPpF81PgLMF",
  "key6": "5wpZPvrKZUY41z5jGiA9PZ4n9MKsGTHsZTgfCsuqCh1qz3i8q5R3RULQ4hEyxsa2SQQoMciWcZLehfx5ubjrE5yw",
  "key7": "4DtJpGwGJ7KJ4nM31PW9fCT6cbbqxYAjEyNfvWnnk83SgSss3hKn2pc6DUSiZwH3ykekZoJsHoFPTbjm2F9LzCKh",
  "key8": "4RY33sQk3CE9ov2E1oCaU8iB1mCuhqjtUCKzbw2QQtjVvMgaMbb1wbo69HDSKBxPeGJCmvnUaH1puScHmf7FzYi4",
  "key9": "4oyN2orF2Pkvo1D8xHwByMLvFGou4WKjJwSw7SLtiCquNh7tEgpuzm19Nk5DfEnDf359R7RERReFw21yCw8As7Zv",
  "key10": "veuNYG67U6PgCkUeUQ2JQ1JtHcbNZz1zTmTEYzHBxzq774Jc5h5xb97ewarohusn61B9morW7hzKGR6LW8Y1RUP",
  "key11": "82pPS8MTX5Cwq6hcw59BswGkHsQFrU1dnb3bPEJKacJkTVvB26B4T9RqchZBPpVauTHd3eq7jtoHbzZ7X1RTDx9",
  "key12": "4iUE8sQzC6ZqPAts5RX1Xu8itFuhb6RLQ7DZvArG5rGXfPcCPnsNvYy8dBrGEGBVioJJGEdzkEoKKQaUqV7g23Xw",
  "key13": "5nvTD8rkVUgTnysojTnodzXzdf78jYJoBYp7eDLTWhozZG7Us8oAnxLC8zjaiCF3Vf51buW1cDn9fnLzDaZQ9Z3Y",
  "key14": "2fzRZ4ShQTCBb1MrZL25NKUs2wgcNdizrpFW7TCeUeJ7VphKaEHdKWj3rgSNziyfYfJtsqgBnrowA6RRRkZxtder",
  "key15": "BCEStEhLf2CKDFEvKNeyWtK8BjuttVM2KgqCgfyYKs7bVbNBHitbcaFhWLWxYD1yS6Di2fYSm7dbVWYaxUHBFja",
  "key16": "MG8rRyaCMZntHqmGEj5HqvZV3wAB5YyjMQrnhoV1yR6X4RWMRrXhnbgM5Vd2WZWe3absWudLbSsiqYiyrcqPC3s",
  "key17": "1UEWghrVF8jSiwwJZ2JNo9VStjnrpHoedKUGqL53EfZHj1veBoqA8YjpVgzCCgSAwUKmSqzoPt5NbeunvJWKSHJ",
  "key18": "2XERQrKTn6piRzxoxm6d7C17Pj7WyFeLk651A235QFbuaPPkZym23Tsy5opXjud7azu8TGZdwrGyqgsg54ChY3uW",
  "key19": "5GM77j6ScKGPG2ocR2ajbekFUbU9zJ7KXtDgipEwoRz6jMrvzhsM3rYNRoKkELhwPHDZNfJJHf7uDAKWwibnqbcu",
  "key20": "3Vdqe9yN79R9BUy2Y6vwufkQ4wRTCFdfu8BzVCk5q5nXjcTCR6ybPEi7rufKpDwPaLYRxtKNQ93SRMDp8DYAUbT2",
  "key21": "43RpsN1wJzQWEmN8Rtebs7brSar4pceEixvQQkzegpSGcZ2KEN337oUnBgiuEywZcvB77SeCQ8puHD9TS4PmNBxe",
  "key22": "3BzX2ADgWTQnEL6Pg75vUPEUiVGZfNQ9WNqKUhrKxGExY6gaYtW71eQjCigMuxsmPDdNF5qz1Xe57vi7kMxntFJn",
  "key23": "4unQfk9iw7N4WK3jM3wTeGPYpemjAwwxZhTxhoCvNKMCGDjTyDcqyeCzkK5oy1mho8qkNKQD2uLoz6kM76qYDFyM",
  "key24": "2F4eocMturgJqJuCM5kN1oxTsCMj8vS3K9QZbtQSYDsqr4gmgUBVDkYv1yikeWhYKiG9HrEgxayweCvmEEWzCyST",
  "key25": "2YH8w7mcbJkVk8vfFVbUsexL9fDBUyCN9DddaZkPjF5GU3K7yyfFNavd1rfCyBLa8dtLMp6v7brx3nWpMEn1BiaM",
  "key26": "VPFUjp1VAFECBsBXmxDzx2aA1KH4HpiYAuPgFLggNwEWmonCcueNZkoiTUxduJPYsAWtd8ba48YMhX7iVvNMS27",
  "key27": "5kmBmtT74QXnkZef9Pgn8EnMDCoJkWqYi92iM7pTf6hJ2Mdq47RUuzChVwTttBhetGwQw4VaM4kNpzsCjKZ4imJm",
  "key28": "2eq6Pp45CqnpFBKWTQgVLBCxVPiD3UGZ5JWPiqqj3xjjFVJrJYDvv3tBcduvhLQKKrvt4GSuEhhS1kAFHHtwD1mX",
  "key29": "44J7YRKwNTJgYxy6aq6hyiBkBfCCZQXSyKwoF1LQ16vCyGi7b3fEKqRSV6Tuhw117PkRprv1qEzkWQVb5A9atPsC",
  "key30": "2K3GJMYhcJJo3bNYPHodQuJ8T7Vep6J1aRFfWBkAqySfydrHK7KbV8rExxx8xQFMkjTvnZRWwWEFsVDBFa17YXYS",
  "key31": "3ppKBzJ5B2Gr9uXpxUbmmDMafRqWqwaxpchHNutMzAKLk3N3EHo2nWhuV25tDxvoLpLVwdCThY38gE6PBPhnsA9o"
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
