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
    "5gGhK13KVgFjybfntsvxqWpmoS7vc7pJkKogyGPZ9AREdhRrozMSwckyLGpBooyiJ16jPtBB6N6X7tBu5KURe1TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NsSiHXcL5M1a5Qn1sNNxPZ85r4KooZq22EA8CMbL6tds2dcPT6s6Mu7jzcpyRFSphZpBpNMosBH6CosFA2XxCR",
  "key1": "3Wd73m6zvEgqtfNKmjgwBZGRBvNKtDaVgYWJMR5JHtt5g2eHmozxaTDmvZL3g7d8UaqLH7VUEyx6NZH6H7GnzTEC",
  "key2": "5KbUSeBPfowjnf7onChgYv5AxCz7a1E5RS6N6wx1Nk8XPcP9ewpEKSaZsC7pjTZCEzT5ijVhAZXddPvT6kjw4Vcp",
  "key3": "2MGjEAKtd6wux9WNRvRa3Nre2xNKbCuhf4Wq3psnPFEPc3knzHM2uSxMNN13SjkQpg6VezKbeayGeBPQHdH1sigM",
  "key4": "5YgqTaHKsQ5htvKEge7M2oPAVoT42HZ7gotjmeuDKFHrcGTuDwtQ2AuC9MvirdevFpEBkSuAoj2ojDSegdaNSFep",
  "key5": "25YghAnb6PupQN5u5gAovxtqHGRPRivTuKq9KPnNftcB1HdcGn2BwiRSZHSjV4ZMGYriUEDTo8r11JhejoJ6k6pD",
  "key6": "2WrJkZYsXGi9GY12hbFPfPUGKK9H4WqVFdWy72oFQAaiqHg6HtXxP3bwtUbUVZXdbzqMjpQab6rBWZvyW5fwyskU",
  "key7": "4ccN1VsMdcWU6HwLuG9gdm3W6HLE3rJdBo6U4HrhKeBBd8ghzUH1zzaEkm82LsTJ2eE6f4tMCTPQpJKEAufiEZ5R",
  "key8": "3S3pkNu81SJCXuvq5RrVuv78iGJmRP7UmBZxCGdMjSVNfTR8JHMhaJFWkcKxmoWvqXLknMjQ7dXfWR8o8PvJQPjL",
  "key9": "124bp1v7nGDo6BPwyqaND6Uhk4HgH9RbJvDzpH8bDWo8TkrgpNaPhAikzLRwbyzJNwZoxf9uuo8morzbBFhZEtVv",
  "key10": "61NwDeq4ZzCENsXsbhycZ1Ysar7sK9wg7MARnSAAKUFhiWsfC2XyZnCqQASJXAXotKTtcCUkdJKWaLXWJwkukR3C",
  "key11": "4yPhJG4MnEH37Vc3g2Va3pXur4KVEUH6uynhmeEYgLKL2MMwCK1B6SSE6KFy4mX9SNVkFx1bux1g9vwDyWbWj7J",
  "key12": "5RfkQMLhNoRcpsNapQu5jzUcj2Zj1sVRik2psB1Xqex2N8UUXiiMQqHgbmL6Dw3SL9rc6ugLCUoJAPLDEC6YUQSs",
  "key13": "4fm9a8WSLGMuGohKTiRP2Bh5b12amgjubCgFrzVfeTNmgxhRsa2XXoupYvWMXjotzGUHusauShaMsLYbMcz4ckU6",
  "key14": "4zjPaXE4DUaAzG8Y8zEG4RinPGN7J3qLfYPTRHGiJjaKE9D9tfA6DWoPy6dpVswT3aWG6a6XdbTbQ1TMJepFg2te",
  "key15": "2gM66U4MfCvscEebTttZmFXAGoU7Dpvx3XqCkgWnw8tRMXsj5UwpMKCVLxbvnHCJmNXvVwMrwfNFiDaPcHgSf3h4",
  "key16": "25GNR89YwKvJHK3Gs1K9i7CkbPte6ppVAXDHvo4cLdpP4vTqq3bnLMdzcQXrVCqmkuqR5PSpLxripy1n1sEDTExi",
  "key17": "4hYMaGwqF5TiW8B4K7jme6dj23udx64zGiiHGv2RcuJiub71cYBZoktQokkpvrexv6wGrrcgqek9hT3PWQneZBVd",
  "key18": "pHqPpsEbdotmwqwVxAiV1dQWQDajZxAA77eFgth1PgCC6dt5JN8Ayh6JSpTZ19ToofF68StrwtbpfRzUSvruPLv",
  "key19": "2ivxAup8cZBoAGbRBcCquBGoNNNFnUNTreTEQjn74aXyz96yWVVGTcjtaUPHCVqKHL9cyHaNrEPHqemgNaDEgB5g",
  "key20": "4BTdsaKVYgsjDGz7XLRtBqS9XLWwPF9TkVVkrQLhzLT4pv9kW6zoCRTpz6uNZa1Uj9RMQw3wXfMa353z29iyHr6W",
  "key21": "4KXgo5WNKJKVmLJPWzNEVTSwerZrEAAgFBsyrxymqCMBGhwMXTepppuEFANxSt9eNq9RpgZyZn3TPVgX7yTDitYm",
  "key22": "2joUiESfap9y6cQGpce2QUDA5RaNsHEHQhMH5Em1Z2hpUGPYmN2ahnpzfHWuYypeCCqbxrB9hmyybx3YooGn3jmK",
  "key23": "2FRNPwjH6J5uWXUhSenFXstqDi8iUjWPyfkVEehmRtbYtyAgKPvaMEeNi1PBfhkpsKcr4LCnwio2CHogjWSPCWoL",
  "key24": "25LNPk561vvXL88EZmgQShqF5TH7aKrqE2azV17YB1TmjuUkxBxghL7bHYBNBJSGwvqzSZq8K37krwcd8FkA2Vgg",
  "key25": "BUTpHGybvfpk6km9Xp1ZnMqbeK1LhZF6msNL7WV7WDWFrd7uocw1w8pMDr4dwv5HBjTpUcRMjcQ7czNLQKLqoKH",
  "key26": "5hWeTU5hpuqMxGrfXEWTn4KnxFYeTA9mEUmpkJS1m1pdDL6ZWWm7sKoLxrxfqRcA9mBEunE7DXihZ5vqNNqU2sWY",
  "key27": "eFso58KFWD1VjcgMrQwFUWuFRD5LjNtBHepXbQDSNseicjF1ESoViKzBYJCnG3SnEiLh29LXNEPDq7rtNMakxAb",
  "key28": "619VAYwz3jqMnijumM49owEfiPS87qNGbSU1rUe7RKPhCo13qVWRtoaM2XsqKuki2b4qWGVqS4hHwqA8BHgwyrgz",
  "key29": "3DjJQMYRHafFE31Bi8rucHQ65u7aRVUrpoL2hjdzf5RB7vuQqsccCT2kStzma7q51D66Mrjgo6p6Rb36NZsmNRSV",
  "key30": "4Y5eiKJZRChjmQk8zmJQfc49XHm1r9QZBKuJHUwNBCLfG3dyhWcZEH9q8JK3U29REkYq1hPbgakk4F37bK29YCvw",
  "key31": "2E5YgVXvS9ibwBL7X65LRUAj7N7uA8zhnrn1ynVgEB6mycVAv9Sq6Ae9LQvSkgcwLh2dyMtmqohtadGy99cZ8Y3E",
  "key32": "3EoaWzPefm4WMYKtz4uemHnkSRXcrTp7UoMdWvHbkBJngKQ7cwTtevkZeQkQfR6yokHkr2ubjqW2WJn5QhaoeoMt",
  "key33": "42uuvuinSZLZu5bbGCTQw7bXwbBk9L9Ww47poNffnjrHh1EQ3TQhn4K2y7c87DKUtqfX1fxtBvVzK3jTQKvNAtbj",
  "key34": "3q9esAS8CC2L4j7z5uremZ6hHYBGbETUU3reKT4GZmMTUfypS3NQohzD2BQi9hUzHs48qGKHKUDQoZPgm8t4GwDZ",
  "key35": "2igcMuRwaLwdeBSXav7urocece5CnE1nc3Fypgmm3Tb8BhVyp2fw4NN5tAsYuUXQJyiTS4jEK1NtUmwSpQWR1FAW",
  "key36": "kUMSfmvKeAAkamU1CEyNduW9NQdzER9o9dh11ENZfQwY831Z1yszRPNvvJktPXVYqkRPaN8SMcYuwF2TBYU93Ec",
  "key37": "418euEVDvWFD48GTqzsroyqDaiESiTK3pNqZSqXFddVH3iKbhWxJDzeycpk9gb8W4KUgv4TjyjEYiZPEi2V9EwLt",
  "key38": "3CdxnwHWR5fvapa7xgZ5E5AwcuZfXk4UttepR7RPvc98EhQD5Tg6pHJZLRbyEHNHrJQP5ctgPY2Tz9Qn2LptXETT",
  "key39": "4fZFmcJtu7ywP5DHGpbFJVMVv36gzA9HYC1bm6PvU7ZAGGsZQHA8xVcyaARKsodToZNifFzW8SuVyxMLWmYdTaii",
  "key40": "2RDBdhowp3uvzbSPUb38FvD6nZCMoYzJtxHtaPySwT2b9gRFBNqqCoRSgs7mPaDeRZPv2rXPtb2dgAaQSbvq2FWL",
  "key41": "5k2AcnAjTfZJf9qmbAxpV7r51QjbEvYzEzJM4fD1Hgk81mJiFS1B9JA6LwrZskwiBdttX2UTb5zEHe4bHtLRLYo",
  "key42": "3Vyp62zmqA4xFrD6yxjPK6jVCKQTeDofUDJ2xUuYP67BCV5BukMfR8hcs2aSf5Vkx1W8jwE9RJ92hQJQkvYYETWB",
  "key43": "5X2knWt8s9kraSr3UeZNERDz4K55eRkNsoK9TPi4FC2hfBkcSwDVx2hchHiBZYbrtqMLykhhWUt85kWN5vFCteSD",
  "key44": "2xDX42BFvT12gu7a6DuuLb9GFPreZjRAoPjxcKpQXrrpQ223Ve8F3GDAzLXziRqJfxoGavkMqv71pyW1k9Z97Lcg",
  "key45": "3wG6HHkSv8vsWcfmbpNcDuLSZiFjfcV2CD541dbb94qXTTngzwprPMksMuKHR4z5WtSc4EzN1hMSGPxDgcZ1Yav2",
  "key46": "2GSikVma7nQRMPibtjUFiW1ciokTf3EXGr72UjpPJWKJ3HjfUtyHmhJa4mZwcYvByfyBHJ6jBPuyr68kqU4Xmi15",
  "key47": "62h8mw297qLGM6csJivSU4cCZtkHTyb81V6Mixd2TXJkY6KkvBYfCx7njGnL5HJvYu9LPCr4FzRBZiYh3HJvj2uA",
  "key48": "5mJnvsg7Th8VqNvpkCtT9zpzaN5KpuUz22H1kEg22dNhmPzGM3Pe3T9QS5k1pzSirsRCqJaQ8hbxdSEYkqnNFsb5",
  "key49": "2VAFVUF9whgLi1vBVd5BWjRpdy1Zh5rCJpeS2kvoe4pHhFctKuonGdhJz7Ad55rEMcsZWgToUJMVdEA7Jp6pPut6"
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
