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
    "2sYkgcLTkefCeEqRd5bF58eYc2oP2VLhJ3VHFzexQS2rfg9wtLihK5r7mWKhmHA1ND1QAcebZ1Yk5Jfa6ZjBNxR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqEXqM8oFejNe5v45MkbufCRr3SnBRPvEetrP4fXXWdtgKrDkFG7UNyeAzJ2kYuHGBdt4qsXJdRT6jmC61rCWVk",
  "key1": "3JKBG4LQckdEyMBqfeW74YHXxbHS5GBXS2cJevqwbgLvY2iaWPMiFVaWUAyCAu7wVwT4sjyRqHwPGieP3erAxNXZ",
  "key2": "9hFZA6G7YQ4nVxsqP9CA6T1KjVnLQQi8FVZJ5njw9uGH9iAfeAyCjMJwpR2Ub97m5frbFHp9sTVTJU2gaTZWzkC",
  "key3": "2PoiqHVEmeAAGkHb9Z4sj8pXmvDa18B1cbmzPwpypU7u4fiQVUCAYAi68mAFGkgYay9WGRSHsCEUFW3F6ErSWyPi",
  "key4": "UDnXadYbnGJcz23FZL3rH95Qm5c8C7x4zCEgtbDWothpR7CrQxjnKZb3aU3EpcHAfdkQvQZfiXdtqefS8VBiYZz",
  "key5": "3wWMXtjrCWoVraQvvZA49eX2bT9paWZZUh9iYTxDjeQKJmJn2x54irVPHFJKN3ttom89SmqFyi9M7QCguJN9xqys",
  "key6": "2iaXvkhGMbrwN2TaNG5AaRbxujnAKMhp4wtKa3zFKFkkE6kWNnRJzie7m5SfxCLn7QPbFkk86oobJzFJpw2cC8Jk",
  "key7": "63AyiomhBssSgVpZNoBj7iDoJSoUCkDbg4by8vSBuMBA9yWWGCHMS8HCgYV2LAQiVQxj9Z4kEuXCG6dzZ2RzvyHj",
  "key8": "L4Qawc7kvwWTCgeDgktoRCeezBR8BvbRq43uRBPFNbXxbxY82Zuupk4Uew98w9omqdGQdho4VyQwgs2hhuus5Sx",
  "key9": "4aAZPzBpPXAdSQhNn3ggBmupgmkiA3V65Nc6mwdQEqRN2Wrb4sGrERyRMtjHzp4HUWK7r9hxwTYKedRmmMCrE7AJ",
  "key10": "2WYCVeWDGxcmeNzX5pJqybLLk6STm8YuuB6XjsEeqBVg7V9EBnrd6ZAyhEH7VdGdEDHwr9A5P4taDPyn6d4UkPgT",
  "key11": "2P1p85auBYMmGE44zc4GnWE3rgQpzheyBHeziiJQrfJkxUfRvyi1eywMMBDusnYCgeEkSbedMimCXJuoTbzXGP1b",
  "key12": "4tnABsZMoymVoTaiUfzRFKXXVEQgqkQ1sg6YL4x371LrXbSsGK26uok6fUY3pWGWwptSStrzWHybwhWGf8qUj9S2",
  "key13": "2J1T2vpwL9QUnKkdQw2d2wTbZot2axk8YcGpSteuBk16raGZU4hQ2XVBHtchbwiLPazTVL37s5zRvBoy8fs8zkfV",
  "key14": "3ipQLGYEhuy7Kehyfp6txdQgzbXuccEr8eqkMkxeiDsEzTxGicJPH1FRMkNXskfyZaRHpRaMqpncs47foTaQcBSw",
  "key15": "3eiVF1vWdVyq9oqnAbdgoqtqM5XqUdZtFZjPFSQQXAEqjCqV4h4t7ThCKbLWjUjY2BXSbUqJdxCi8RkzeQr9PiMA",
  "key16": "2PSwmRDkH2MmXSuVdgxJ8osKrL7NgKZU2BeYg6yEpDR1gH3CnamZnum23G1e2MER3v9AARre4CLQUCo27ukZv7xo",
  "key17": "545Bi2GsR9nR6RrvC7fCa3TAqQ9gu3km5LA6eu9TqCfbZYbzYDxo8gPiEQCZAHBjgHXqWeXa5m12vrGbWVFGquSv",
  "key18": "2s1GzRTtyKuqsXCiNqhkCRaywefKdvXPRt4P2uL8bwJihwJJN9W2UqgykWmL5mhAG2A1pSwvcopbbzSHBEYTT12A",
  "key19": "3wx1eSDUkrbgQrXhhLU7XrUXcHwUcoAVsRCz6C3rutNrfhtTFnQQepHk4ikycp3qx3SAw14gkC7jAt5NVqAtUbVU",
  "key20": "5yqBKk1idGqhdxGWtd5TATsN49rh5p9qnbpVsr9puXrb6D5WRr3XWW3dsshcuDWJuX7fnxZjW47B2oqP6DEN1F6z",
  "key21": "3NUt6vSeWJBFmAa3XGu2y8gXRw6kKwJZT7h4XBxKxneefq3sjqaskQ3nS2Gx1ugi67Y6hiFBfLcmXEujgXLmwyr7",
  "key22": "DJQyBxgu2UTWVt71Aiv44WNcf7mbEX6v6TG5RW5ccZ4VQwJ9FDdcVfrKTrrvmihpeE8HqzB5HHExvH3HwduBBq6",
  "key23": "i7Ug9BbKJds1xqwRJJrUK8opK8cankt6s6FTv6MNx4ENbm2M7bJh5oSLicgRYcdEmB8bPseAJKgScshxwV55AMM",
  "key24": "25gWree1SQ6oJjNZvXpi8ZCqyVwXA7AyV6qwm9pzVxYZzSBnJApysyoBR774uyWwK4xQcjL38ephDdCbDFA5pkZn",
  "key25": "4Mu7Y46sSNFCZZz4gX5LnkQnidZ4wF8JhYJgL3H8TiDiMCKC4g15hqeTAfkaufmiqjgTcAtqXDazZVGGbim4T8kK",
  "key26": "5kP2f4cBQwiooqyeQV11aZBpZFo5HRYFA9v3X8DWS1qdRKZDsHecK17u4Yy7xYEjdgwKdRfdRzALvdRRCGn4eMC4",
  "key27": "Duvac14nbHpVKEvyUWmYhUFWTkjYbLFymc21hrUfktgPiQVy1c5jr6eMNirx6xJ6a16HWn5KAPN6bNeXeuMwEDS",
  "key28": "3Hn5oR3AJ53RBy8Q6yHp3ZDPLbiabvMtLwWT4NVHmYRMQsB4GvtescVycK1bCeibicpzEeaNy9ykkhgG5N6YtB2s",
  "key29": "4Rvav6DXxReVktyhfQW2eJFAt2k6u5DcqypqSiNhWkG1saoHCzDyQsRFowUw4zZmV85AFk11YHMj2dnP4b4sJ5w5",
  "key30": "52JXBbUidT1oD9DBr11vFZj8Vu2wuvm5z2NEvtU5pPLrYPfT8ahoB8DzHnrogxreaShbsPQm6GnWLk7aztCJNYV2"
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
