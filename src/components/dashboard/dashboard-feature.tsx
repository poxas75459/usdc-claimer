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
    "5KhKnGQzdMt7GHGivdCNAWfCvj2MNknBHakRKxb92PsPjeyQKbYwnpWvFKk6GduTBj48BGQGcszhzmZDcaftcZLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YJgkX28v8BFvqziZEku64AX3NGDQbUYrYypDuKmAYL2GqdMjpwnEwoWTRR88RsALFczTrAzFJ8U6URd2CXVz5V",
  "key1": "t2BZq6cBaYfq3YhDwmoX7y8FRFGp1rBBkYJi3eBbxUur3EDcMgWEYLtXgjH2GPErGEwAoVPXtojkmdJdeNX7Xjv",
  "key2": "2in4nkHUwSbPXPDSksYtPuNCpTu634eNWELE9mJ4PY8jW2341jCKoBLzsJY9xhxF5opebtTRGTJzJoLSGaMUMJpv",
  "key3": "2TifeLAqenU28Jyrq6bbtWAmNjGGjUEvrcJV9X9FC9YYhFu5d4WWNhaPeHKQc5u7p7dapNCmGvFaAvsXA31NPq8f",
  "key4": "HaU3XjYbAGtHVHcVAsaVKaM8uLSF19StC1CS2kFgBA5oHBF9oY58cBLv71bvmsAvVXTVntrdLwbQH8qmCcGwCj7",
  "key5": "AsCdmhyT69QzEWwMYw6pP3EevLUPeQiLNqQTu7ozhRd8SWtddfcKJxNG8VXsSRAE3dsbm6NjgMSyP135GSEcZuq",
  "key6": "4agMTJcmQY4kT3MhQzT1e2od6qyMaAa4fraMxyscph68kXH2p6aC2E7gFzoXByy9avEDioYH7xxajAmVV36Rj53u",
  "key7": "5RgjZq9oWPqiaN2yLxZLojEHTqjTaYysACtvJF4MDvQ5WbavSKyKzUTRDqxKF2kfup2Ng7pZecrjZJcQLpMKeSqy",
  "key8": "4mkVt9ysswVjJaTiEEHrjXweKVUEnR97caB2dedg9WpETSi7ghty73JuH3c3TsxK22iftyP4dVkCoRbyfCYEdbdX",
  "key9": "cq9vciANAe5UX8dLm9Agfvf8SEpsHLnGCKTnbUKGKxEE661Am5txRwUznJbciT8X6LJvgH7zoMcDnctdwkz9Ku2",
  "key10": "2afk6VciLpqh3V34UQTTMo1eQHkWuXjNJdmw3C1PCUfJ5ydoVFQ3MncATfVqre5NnAfBP5c7CScWF4nAYcVbk43E",
  "key11": "3BznTN9UbT96zRaNmiFpySj4k6AnUFLQCJokrkg8Wjqk2KG2Dgohw5heD7pRDEmnPJhuHBXafRBwPH28MKXdEexW",
  "key12": "4ndpvoVfaTUEZ31NGb895PDdQgZ7eGt6yzRFhwrYodxCmLeu8DjNT5Xxhwvmpn5uMrQRBxteEFL6vU8HUeeGMH5k",
  "key13": "4eQxpAH223NMoVHed1N5ubzySyc17dVtUos5arA9uVXHJ7P1eHXc58RozV7hgYskr3FSPX7DRfsW3s4DhrAoredM",
  "key14": "59qgUYFs33N3TCLfuxrR5suQeAKGy9KQ6eZCfPyMmQyb4kowYwEhbLenkiS3nzyMniaZDC9XXzxzW985SjGi6i3Z",
  "key15": "4JioV8ukoc3KRFRyR4v1P1T1xCKbkAmhnRz8oaFhQTCXZibNMexqM68jL9LS2VhNj81LPJoa69N7hTQ3gv7e3mRT",
  "key16": "5CqypPQHqTio3L6rfx77WYfr7tmif99hX6teHgxH6TJ2BTonkfh4NKyfLZs5Sr19XXUorpVREHtJ7jw8Sy1azev4",
  "key17": "5VENywqYaZYgWhH7JZ2eTAPQpwFgdQ6HD9QMVJAm7vkzEDpVs1WXs2e28KYPQo36WcJaPYzgMKbC4RUfuSnaHr67",
  "key18": "Yvvo75Cz4xCmRgGXvUKRnkZ6XavwWqQ3uUXbUyP8awKSHDN7KXf9Tda4XQgCRnjWL3tJhHmBrXWGhhGzeYMjJJJ",
  "key19": "3B2fjwVUYEFbdFnf6jwkgCzz7VurrWgCARpDAAt2jTem7sm1ApFkzkgizy8sejpXyRJDEMBXJBSVk54uDzrCs9ZS",
  "key20": "2bcC2uQg4je6qiFTQh5Dh5i7hLtZzdA7etm7hcmqcDZvk3YXf4RxedEeRZEJ2MuFXn479tFXjun7ekCFJAzfpEWV",
  "key21": "5AWXD7HeXsXjc9aK4MoFyxD3TZBm4nNg8P2M9pSjNWKCEa4Ax95FVchQ6pmXq8UdZVzZNqo4QPDvWFP1ZGGzcALV",
  "key22": "UkuPN5HQk5mE2YJ648WUCxrCmbXvMRDrZKqCQMXuXUxaUekHzMimRtbEMc7ZikjmHFP5qzpgVvdf6RwJ9xeLK8p",
  "key23": "39frsTHACjmqGFiPt2c87mrK4dvKKYBpxh1M9BEjNvAFjP2rhhpBe6PEUg2Sy6isoEe4W1tdH4FT7bNKq1Ad7spr",
  "key24": "4QStWff6aFpEcdAVMBTZqQ422MggWfRetoUmdGvtkJyWM4JTJsEtyLj7Ex1W95oqAkcr7PhXK1GPS8T7HVcMD8qa",
  "key25": "4kyRXnURe9MnGj5q8VkMooRAxBGhb9tRbXquDoyYap7UAaZTmmh9PurHACWrLJiTvzf95ZKu8nJZyzmmacXSrwkR",
  "key26": "rNPVm7Mm6AEQo7m7yopumGg1ZdzuuitvuR3cgjgkX8bF42ZZuKkvrjkeCHd8NWRK4MrPGcX7SBeraYDp4SheoWZ",
  "key27": "3uY7Q33HjK2vj1ag6F8YC6W6knoeH3PH2Xp9TwEyAP2b55ecuL7bTdKjv8wjHc9UdJ5n7Gm54YwDE64xbmFs5h4a",
  "key28": "2P9zYVjRPmeapcXxQNryao69WFFwpi6NTUe5KnLxxQeRCkTSQqyWM9zP6fe8G3KTw94gyMKktvpN6VELj7C9ppDE",
  "key29": "4szM8HFVx1wr52wBWAbSBPCeH5M8nm2eoBEXakQg3duR4RBT26NbpFVvGNMHWyEihx5hNAoFLmfidrLLpXhwFkWf",
  "key30": "3Ts6g5G6LaUvAP9Wqz9pMJx3Ptfpw6hres4fBbJq5pYmxBVMdHujNroVb62w4EiD47KiuQzaEmPBUR8TEHbVJV7D"
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
