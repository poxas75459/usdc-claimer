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
    "4uA6GQRxJ9KinG2v436VnjwzPz4fgnBjxxfPGGsG5KLsW69s84b27E7nM2k2tt4mn6iCZkmJeb5FN9z5eg29H4x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eA6dw8sZ3MHvJEdEbxLDj7PesqiGLtoxeB6UJc2nn85x1DHRQA3anqTNoAeBQyM1bYvDAZXUHxnzsgbQ8DGZ2t4",
  "key1": "3Q3hPNNtkq9X3JgWLtC6PAsVqkoKbWFxxVEW7BSv77aeumqMiDocadvGkvrhCBfJJG6gwLSpBnsh4Fkb9wYbDHC9",
  "key2": "4S3fBSG3eWQ4xeSu9JUSwXpPT9RgnRrcBmJToeffZNyBpGQ3F7wV2WEEwj2pw3RrqJP1APHDWsWDUToS6VdP4e38",
  "key3": "oBSQwV9L2FfVr8Nhb14yaDPTFsZsGJzdckbDGQkYHc3TDjwUAKjcMACUFe1fEs9K7jevJ7kkxS1giEM8cSscGXe",
  "key4": "1hom8Lymwe9Wn9wEbmSSMKTYrgf9M14ts9JfTHZyzB527ktXSMptkZUXHzx4yHYzx9sxx3zdvkTAuHn6voWDMRS",
  "key5": "2PkYE7vzfPmBAtfvjBcF7c6a4aBU4W48uHx2CoMbkjJDZoQmWwRdUupMg6vgLQrz6nizbTep27CtN9ne4sDqD381",
  "key6": "2ZVRfKHaRkvgNabgDCysvuYKZc7UdkzK6FQcTNnZkhDsMEFM9tBydMd1USMj7fzvuTA1r5yzaDxuAqWqCqUh2zeS",
  "key7": "3XDvZjr9GiRAweyWQne4fMd6f13hV22xqroPomFCCybKJU61rcT4QUTDpPfnpV9TVscUVfKtnCMwDRsTn4RAaJzJ",
  "key8": "DYZnkQ4uC8y71gSHcusaZvfbrNdF51ScfVCXg1TkECdP9fGAPs8hFiauErFta7HG1JEkCjDsXxx9WmnyNAwBp7L",
  "key9": "3WknhgyvkURdcUKtBtFQzgCjEtFEzje1QUdZ1giUrQkVQGgSLRsS4TvC2WzeT2grej4t42xkxVymZ4LzQLQHAzGy",
  "key10": "4fqNgeM7GzMYXTcvQu8haoBCssfJdTzZ1wWpVFK3TQyT3qESHWwxaSQhJkaxX3N5ueSXPdPE8KhJgjdXvCuKph6V",
  "key11": "5PBtrZ3Quknsjiso5eaR6zE6Lgoykga2H1vZxEC7cbtvcUnsXueREvf6o8CmYrjhL9VTvhAnSPLiFBa5rwPkcV2r",
  "key12": "5yt6RPeW5JStcqj6RC6ZzKpfVzdvAaZkz7Tr8afVTCsehcbcA8wPkjBCo9xE2ugt7o1kKB522ogATNokFAwiwKgM",
  "key13": "TNLEYJ4crLnytRDg5qi4X6Uvoxwco189GrotrecoT3cHSqGdHQcLokWPpNpY3bXVDcfyeUHXLspr76V1h9vpqwd",
  "key14": "k5RxxgTm24nEo783ENfSoZ2C1K6yoyP1gghTWfawQSmBaafAZDf4e3s4uZt1HjK5DhyWjx17rPikwc1NisEaioZ",
  "key15": "4huuobZZB4evLEUi8pQo8h41JxKXF9ADYiFzhZ2bibiEYmuLyz11YmBk9RCgVhsygxS9ohKCYFfXY8kZsbmSt56g",
  "key16": "3RKjBnKxXhW6KTkYHrqoBvpEjf2zeJPf5a4DPkJgwwKUNs18KSj52arGCFCsw2UeSTxsJMK2Eh3nXtnXERdg2EG4",
  "key17": "aVBLj8ZVtn9Acnqskshb3yqKxaCzu9rtpjD1cu6H6FJmfU9Hb2EkQa5CL12CuLsuRibhZjCMcx6CjVqTpKhZXPz",
  "key18": "2DMibKzXFtHo6NvvtiZgsgJ5UwS8qHisfxXJKAJLGL6KCi61nTgxQNiG84Dar5m6UWQEqGVNxRxPuSgB8MKLQsVQ",
  "key19": "2poLcxvCG76zzuRubGE2RxsfkGDv4YsthEfZ9GAm6k6wMfAWcq8JyNVkGwyQqSGogcTYr9hQ22rGP9FDykJ8KgXA",
  "key20": "2D2suwbWbkHJ7QqLzq1LqspMhTu88d8DktJ3BuqznDdk3WhAcz6Yr6J4urbvpSjGfGHDDpJJNAodWYgXA7nXCMMH",
  "key21": "4HAzkt8ae9jDfbtwRMA6YcTfSd7UiuM3oiYZQLGYJiuL17iw2dh7vgiEy8sf4EHKjATEdreksMBh2LVJ9NFmW3wQ",
  "key22": "5PGi7ED2NfozZE3BbXaVxm6Csi5V2csu13LKnEEGMk4YHP28EfdqUGRTsdF3Hbp9YTBAGpjUW7k77XQxi6oBbbHB",
  "key23": "29J2pZgoAjUGneZHVdzDM7M4eouMCxoAhfRZBYRZSCiXqFJXeUR1pBcKV5bGbpqEE3di5tS2RaxbsMK7qGWAJdWX",
  "key24": "5rXa1ZJcB2hS7Kqai5Q3p756yZ8RkR2JKnTtsgHLJduS9QVs3JjXpLTQb9Aq18gET1ydmAGrmXA24iPNAKuXuVx6",
  "key25": "3f79dber4snSmt3Vfw2LjiRv1XJ7kJiVyFzCt4sa7u8tJ55qrfGbq6ejeUH36nPww3MvTSQBTpqL9ZAdPLuaCBoG",
  "key26": "2mPh84VUdrW9McS8aQZjtBEFjyYR4WmDPrVxeztDAeUY876eqQmGwLihn3yAkUoeamS9raBEhNax16JCx5Wk2H2N",
  "key27": "3uwuu2Cb5FHd4pSyEtCL9986h8BwWEahtw2xtwi4rDQbHVZS4U6PbxuWS3sqxJ57Mni5id8rdzxGb4iXSUhGhFsd",
  "key28": "3P338L5edqLZ54cUuhfXb7ZUvVQVGAx9fRGkqhWmhZdSPdkba1ytrEKdYZnJaamnUg4Wco2YhLYxVBB5ogywTteN",
  "key29": "4YHxMHXRgKjKbnh5VQcaV6bioafDyrymGtQw59EM2soQTbKMvknB4t6Pmbvn5uviAJfLNrasqswimwstw6t8Wxrv",
  "key30": "34QcPvQBHXuS9nzCrdzAsRnKJvRuSJK6YtDGhWyLwwCpVaHacWBfTNbriqhicUmK16B95d6BdomHrWsKEqZVaDvn",
  "key31": "57Q23tUqAhGBjMDNH4HoaWDADUm4QHf8QfCeivA84V4sAfY2e4LEmQiJeDWbn28Fzz2kGRaSnd913jG5XvTWzA9L",
  "key32": "fXabCuzXce3ge8ALS7MMhXztfcUm2TvPqRyq972NeEppsQNY9sQDCkeFrQXr3mvauCVgfRnLU43zZ1oRvK9jQEC",
  "key33": "3Rq5PntET24uhEFm4KbpNRjrjcd1dgJzLb2VQBnbvg4Zf5KXNAuHTphoTJCBkYL4Gcz2oxxMeMaQaLvN2xXrTQH",
  "key34": "21VnyLJ1AE3ohZm3kqMdCuK2eHFhUH7WwV2WK6hvEHzN2NPtvXVzdDT6RNRpiBD8AhT15rUnerydNf1dYq6WXpJz",
  "key35": "4iEaZNJ4iEz54cwuFRU8VSiL21DXrg9rW31oKkBCgDkacZXMuoGhff15R75yTNAzsfUANXEooZHXyTnEPzMUpCM",
  "key36": "65ouv1EKjD64zeXLWKoowXBYkTphNePU5oxJxmxDUjCFoYMYmtqtgi5GeKgRKEXw5uYdeGUrFgQfobD5Ksziijq6",
  "key37": "33YGGp97M7yyTKDMnM1EMJ9epaCSonhGoojuw6zRWKsSvQVpZALRUPBJXfAdEa9g2G8WNsdcKLeoathCsmfh8fME"
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
