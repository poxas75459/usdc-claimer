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
    "3HwAgMExvV74Lpqu1ffD3ydnQ7EkuNzMtcdF2pVfXDNjbv2eMZVBjzfq94EmZfxZfyFeAtAJyU4wFeX29BwXbmyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nFXgbRknAdTnQasbfr2nFZSC65nnqbHtcHnycPpxbB7ZSBMewAU4NfG4eFhTZorGoVvXcBxParZcLAxeMisytuS",
  "key1": "UDhduRcgW1KYCKq2VKX9LV9u3BydjYWXcr4qxdrYUqn2K8BBVDV9JwjLs6Pj9s9mnWBRctuNAjZfdPGZp8r6TPD",
  "key2": "aTjrgdagfbJio44dPEA4ufpwWfo7LLCYAsjttqBjPekH7rDi3w6b2sLAx2W1hRSaxZHUAXysuoG1sjh6m7tLYHW",
  "key3": "3CMt4SWCFcdSSAAPQpmr1hawDW9cE1CuREGKf6McHYPvvAYoAkFrFHfZaD5ax6Scz3ARYBhnDP91sWQkeWJFLych",
  "key4": "5FEwhmU39wTnAq5R3XATa1ndPtchstDEUqRtTPs9c7RBbWS98PiKZzuJw3joBetKNb9GofnMwqTGGf9mzJyBJH7n",
  "key5": "3TxMNn8ZCz2jprkW3Jx4Dw35fQkXpsyGwKCi6e5bmaU8We7cJfJBbzDsnAKqt1ipksQNRWC8E5AAoL2MDSGTjt9E",
  "key6": "2Akg2CapJb7Um3uLmauLG52xWeCXhcgjJn9djfZwYzee83ZKA5uiBLHmoA7DW9xws3waGNpUypnF1m34sxkoXUzH",
  "key7": "hdUucPa7jC16W4YK8hjnNd6vBvDgK5DEeYMxFuz1xNnEYoEbUTjqkMyFXLRMotdqtSDvkqtAgbM5HxMzxb2LSrX",
  "key8": "474othvVpvDDQrvhrYEkpd3yo6nVz3KBkVXD5FexEUrtPy79SVUfsXAG5yGFDAzJ1JmwkvzvFFbrYQvo2t8B6rvN",
  "key9": "2GVuwHY5cRmKwkxjuRcA6iU9AfdgwZrbmBypEVrQnqNgtKRPomdtFXaDD189StJqKrSDxc9xofhoJwTctY41XHLA",
  "key10": "5u6e4bcsrKD87TZHFMwMLd4NxVuyQTAMJXjSFqEKoWafgs2dG6c2g9oThDQxWW3rUyPTkC5vJrdqyFqd1ppRu33N",
  "key11": "4ZisqYWwEPebprfs318U4GQPJJ2PnGZfjFjVh69Y6Kb2sUmNbGc5eJsqdLC111XSUav7DcywMSZ9RDZGRTs6o8qx",
  "key12": "3PeExED4DLCJcTZ3awpcmWEwaFb5dop1EoyB1umrcyWeyCTsSeijwih4a4ccW2BCXft7QUtFiWYPVD68s7BM9tdT",
  "key13": "EdeHrLbkpgMupaQe7yqF4WMmnXAeTh4FCPvxJScfdpL2YyL6v8mjyYV3aakMjSt3Yxm64eVUWAjgYMzRcZVTEJm",
  "key14": "5aWrDJo2H74kjg5XwiYBaGhjqkeMXBcXSq6xHbvxmtH8WWkueTeKwxQd1DS3jc3YYruJmZ2SKpC9Uz6DEE34uQus",
  "key15": "2gw6RMZPLwNPmskXZnRAr4wtoxMepCUmuv3MtBJ5AxXQmwhLruYTtCnBiz15rNw3cCgvpLgFzsKt8FWt1MVKMDZh",
  "key16": "2sD8TNtnkVVYby5gpUEmfi3jHYgFG5fBjof7kiRkiajLjmusV3bts6hVkYbtukjV9XH1v9qSwmDzQK3RSTkPpLNe",
  "key17": "k7pQFz4aG2kAhi5Mp6T1MgJZoe5CYy6iiwmK38yhneChuzMR4mfNzagQeNFqvJ5Wt5RiBDYuKFFwcbj75PWoxYo",
  "key18": "4PFTDmyH2vx1VA4W81RUqoswHu91N9GX84qPERsboM8votLfmkYpdeCFdXEZ2e9U68REBhJi1NfQkaJmV4YtPStY",
  "key19": "2QVzqBik1RBCjTWHXnrY8SYW52D4LyWKzKS3RMYtzCeW6Fc8PwqRy81kZQMpfQG7TxG2KLDggaSwgNSpwWrp7yyR",
  "key20": "3HBo5r8dYGMjfFsnrhejjdP24rAbnyeWtYN1cuisakqGzMC3TdBrMKxrY4d3oCgP4cf2XrrXMvSEWfyJVBDbH55Y",
  "key21": "4sNWj5pRgAn26zNbqhXNX6d9CP3wXh7wVsoF7NZSoRfVg3yvhKATvveybjNubHGhtWCQXjhpNSKyA6kdab7TVtf5",
  "key22": "3SpVJ3fVAR6R4pAz6cHpnzevpSMp2id6VDEmw4voJdW1fpHPurLVuHH8BCMWK7m9U2mnwAqgzjsSAWFNZqCrkTAR",
  "key23": "5yf7pzHiaVUrytdEq5UmfGBmsMGVhR5bdQNexzgXPjmN1FQk1bp5Fn67Adzcg9QdmK8zWx3i24ABvPjKahymHNCq",
  "key24": "2hLLK5EWdkcAz6NjVje29uZNHd8KDujwNHde7H2zx3jjR7UnE1GAdu95NdD4a1GuNoegzVVhM4ddzoqJhErAUqzZ",
  "key25": "2pu6UKcSTbyNGBHcqbU5BKQX7Uye6DcVqa1nLL7cPvCUti7YUVb5ZBhXQ6KH93Y57BB8BGY2ogtf3ha5TbKbgydA",
  "key26": "5RVKrCuxf7ADWA7QfvAAujoNRXspAgJ14rghzAbvcjS3HQsRZmGVVQ6a36B5ft8CVtw6Ltcab4K6DaqZVecxQBZN",
  "key27": "27haeAK3pFbT5iHnVjcY2dgc6diAkpW7UQJSSnAi18FPwXrRK6cAm1GrDhsxmTBWri5MXRvFnxQt1M3eU7W19SC9",
  "key28": "3qVG6VmNcyXF82QKJRAawqBEu8mjTqtftSQUqC7ZDrcqtA5Q9truEBURrusGT8KzW6vEvehZjghgTiq6wJ2PQkxf",
  "key29": "r5gz5Y2LUcShtKkUjAznHjXafjPjqHWPjvMF16sDB6uzrGsmbcciNk3HXMz18PD2qM7DJUxAe2dJMTU232FjFm2",
  "key30": "2QYemjaJXa4S2CMCRHrggBT1yzz925SiDdFV5UuQ28FuUkeF7WooT3Nne6smKuvCenqaNsmtxCrdrjzBiG42cKxb",
  "key31": "5hfjRptCB9T2U3kcseBFN7aXxt3fi38oepiaBzY4Lzn3GkwD56aKhrDGd7x2As6CKytCY6UCxBk3YbHgoKRQ72ER",
  "key32": "2dLT7quEaC2kP2GpACBCgcLbQ1j8qYZAkk9QqKf4LfyF19NHmVEbtWiDwK9Q6hPLGkjRpJt7CkuXFxREs3CG3eYJ",
  "key33": "46bm5ctb3EWfpvf3vJwHcj4yQwQG76boZbVBgaYeVYk1NwMTBF9R7g3eisWas261YD2qGWHWnMBNqNZ6RSPemCEH",
  "key34": "49migqGgLHpqYFVkWsQ2ML9B83wMzy7p16NiczyXbRU7FirJGF4HnCmbaoapdrPK5Z5tHUbEistVjUJSns2xFtmc",
  "key35": "NBuecw9tesKyECwLvjJJ2a5diHjhvNQXtHjGSnmLgsECtwhqb54xcoHM8yCeJnysWheW6GweWFk6MHgibr7Xd3c"
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
