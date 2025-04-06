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
    "2mmqZay1neHdwx5prR67QojqRi9WiVVox5Ci6UmZU5d22TzZYqDLRB96RjzzzWCCLPwyhcjFNgfEzthuT99TCjCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygUmzRjHEqBGS15h1Q4sWHiDNb2S67zzJuB3CZJ4ViJSdAqkwxdcGhd5wEeM5hqmBN5NLsK1YxBjtWRESYQnYQH",
  "key1": "35UsX8dcsbBZGCrmDCrzdWSgJmhjocWq3MYtGaUniUE1AYKZMJzgGL7mXvMb6GHZi6BJjSTFnZpuLBXJVw1R7fHB",
  "key2": "2ssL5Z68ePMbtPT4zjgjjSq2RAPhZbquNuWAYfnpEd6DBz7WkzSVfDkEwU919BUiLHFcCkwavrhBXqUvMWCR51Ag",
  "key3": "26EfQXDx69gbbw4UTFd2YnZBKFPPSRTiknUA1fBozeTcVc8kUYt5ChQTH13V5hfbBMvUybLndcideYuiCR7yS82r",
  "key4": "4zL7EyecyCV7KUrm4MynUFhVy3qpzx6zEaHDZHw2vougJDLJN8e9jrKxy4JDoiKn5kvNQtLePhwuvJQgssqSLQZn",
  "key5": "3XLxVKLXF1p6mhU7ipBRpZu4w8T2UTJCrXvvU8SfEhkPcB4yYpNZ238A8mLpfLS2ogT6fexGuhpZBwNBwDQ4x3a4",
  "key6": "5DFTeMe7ZaXF3eyy6PJ8uZ9bxsZqWb7hEW8sn9BmsvMKQcPa6LqArtHVB3iH3YoFhaaPXHifsYUXQZzYVyHCAxCL",
  "key7": "5LQgmax6myujTTpG8FA37dMb5tWYZ2fFEvGBDAd3yhAyLCaQCeS2bUGviXEksuRPymgXNKPk78JADiQu8US9BTJc",
  "key8": "3WyYPgQ13df4Dk7Hy9ZoJqXKsRpDiTu5JZWmeVdVv5smXffSqYjcsUwpfkGbVbk9ReFe8kyPzKy4NSRucTi8L7by",
  "key9": "61zuqtUswUSL9QY1LKwVpvXp7Dz4D1xdHknHeKy8VdwJNwECoN5mspvamCLUr1TPzp31SygXGVs1X2NuSCjFqFUA",
  "key10": "4R6P1YWNDrjxhsWrpMdGxDbZBq3Sbc9EJp3bjm3aRoHiqKcMFkNKkQ36Sie11KfAoi9A8UXhofytPvbECNygH83",
  "key11": "4LSWqqEsu8ETyGqRKbwSDrxPkthjuFrSANuQ5Qp1C2fd5q3j1ogLEc9MHixDuKfmnRyT3sqHorNjWMSwj3B2zNyK",
  "key12": "4rJQi9W6zEx7NCATns7TBEdvss1CTUsWptPLBfv6TyUoHmLc8kXiAJU9hdYivuW27Uxj6cjJAt8A4ZYaK6iGsYRx",
  "key13": "4BGhhqpAUfRsiyzRxoTrJRZGtWfFuCcSF5rc6yxUXTPWRSGmG5XwpFWZ5gYi3L73CuuV71sdGWniJZfZnNhhQCtQ",
  "key14": "21NpEiZorQ1zjuR23nVg3X4xVrRjdstgakZfHdXe4eAnhUkJSFu8EoyRvSiNk3bXc3JCjEYxikgXnDUHDNAvBVeD",
  "key15": "2xY98aByYEQqEH1gxzwwgZHH6kJbJPzEcLT2ZgTmjh7RAutJwscSLHWPPsBPNzfV2iteHRLYhidWikGXxADEi2QW",
  "key16": "5W1Ped7uHdg95bgJJUH6VoSyrrHDHNExb6zV4Lu4Cntd9atNQjVmnmT9XRtysghhyWwy8ouNjzRqTuTaVbARitgn",
  "key17": "5hn1jdQqjkLMbMvpCvjCsLwdELuFr9DxEAhYt7AXroPXjUR9dT1h9TWj6LyKBASaPYHN5q72Nn1GFLSLqHgBSCwK",
  "key18": "2ebicryr7hktEJjoTMxK3VywRafmysE6MrAmccKR4QsPd7jSUmGNF8qVRzvfQMTepDzWEzNxJVqcbkrC6FXWk85W",
  "key19": "3meNaXcLoMFhaeKT8pgNVXZwfKtRKsivV2iZ9nHhZ8NSmLdfAeXFAPCDB8v6FY8p382HSXCf9JrorvD4xTYpKkrN",
  "key20": "bCvBJMUTrGwkxZYD9z4jMNb3Weu9iigt8RGoFAvYVoqGuZJi7krRUXkXUqtC4yj2PbLUKrkABa9Hoa1kJHvpyi6",
  "key21": "XmfYF9XY3gxj1ac9pMtPFxaoQmzpiRNKR5AdCSHMV1dsxVFiZhKmvgEWJ3vrLnEb8YMsfeivoAVLtaf6DKSJDCN",
  "key22": "3z4gadH1L6cEG3zPPwsj8k9SAiLPo3ZT3SN7qZC1rWTVwL86beGRi3gnxvsKY2qymvbZKnxa5LTcNoCnx4BHXHiu",
  "key23": "4q5EBwSpWZhUEQjZji7GCSQFkL9ugECQbdVubCCrchUuaTKnjH9j45fEtqn7ZLQxRKUjoP9WGy6etuMJpKZasg1d",
  "key24": "2fkngjB7V1NXq6ta4PKjkETR2D5PN6x8zvQDV7iyijoET47vfEGtd5Yq4dCLV353vbYyBEFwsbPAEbvJepzNKBZg",
  "key25": "5BwcfYAqyDkMNEy8w3U6Q8vqCUGmvLoux7V3km1FXkVix69vTDTxJJQWG5XbUQBLRHd1iHTXNqZ6Nvt2R1YADbr",
  "key26": "37ywzGB2h7sNpez4maT2qBPbgm6vA7MsSmcd2tboctw2n8j4PtQtATDUAthJ9GjEJXJn5pRnNJh7pKkMC2XHnDdn",
  "key27": "21ApTWvMSUK9T1km7mU42dkSHqtaH4i7C3nAUJYDnSdpb88yKXM5BkXDT1qMLsFFSks3yY6PoTodo3jd4LLA8Nrb",
  "key28": "5uvd7x1KB1FbSL6N2mvfaK62PiN7135YmFuHJu8Xj8EQohyRDytWuJAf5ToZA9iYBYNNyAv9mP6k979vSb9JZBEo",
  "key29": "5ERCA8zmweNY6skcP8BVeaEYmb242d6iL6M2md82DmEpZKjEfgkF88AmQ3tRQenH4YkjUfBxE4GHQ9mUeBkNWADT",
  "key30": "49GpjEnA1jNvAZD9AV5WB9kAyohJt8rtUdsRBDvSut5RznfDRfqBUM3juHxPc2TesbZES6nEWvYpedeVRM6zDwJg",
  "key31": "2hqFnviRwmNMdYJRyEeAcNH9Knxh2EuneMSa3BvMK8xvYBGcrWm7ZzLCXcbUB3g364u66ojE2TQDfR9WyycFJsFB",
  "key32": "F9q1RtypSNwRnwFkmLG4apckX2MomWTsJaSq7cJYgZ5xjoWoa34uCZ2qxm5F9LpdzF41cxqExZ3SYrjXP4Xc1h8",
  "key33": "4mXbH34ARqZpBRqZwsnSoXAbui7npVuV5s73gAGtWMBH9kBsyC6433HaSJwkS2tGXgv3zEBRcvSFgZYs9gJ3FFcn",
  "key34": "5PZLig99LCtbXCboXaLZk9n4pcu8emRqKJsZNzoUnYyagmgvr1eLpX3LszZ1ZNWZ5ULryHWXnUtAKQG4UxLGhY2h",
  "key35": "wpuu8KCPw3WT67iz7SiAoEYZ4no91XLSpZMQ9pSSYz7WJhZin1LExHx6EFhfG6pSmueYYC3dtqA1W9DAPsSfai6",
  "key36": "5dey2k3ZxGgPv6ot4oVTDAp4bJqcAAatzNEkGESr6fs6TbBs6yU3gx4kHz9gakr4kqn64hgFS9UQwaygw9a8vkU5",
  "key37": "uEcSaK7qtdKAoWLtrhVRFdzn2rk37KkkgNvg9bKP5VzU9gpnpEc6poeGpjWcGumdqPcJGVGWLUW3KJqxj6DpY2q"
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
