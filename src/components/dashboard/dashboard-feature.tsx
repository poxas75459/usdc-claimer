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
    "2b3oDbnwDNr5cK8ibBCQCt288W3xTfyCKSgV7RUzMjbghAq6ropvBwXmUsnuzTrxDg2xp7Q8gYxShzcWqkC3xMeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NwhRya7sTut6sZkonB6cfMcCaFt4xr4ig1ZQKTuXD8FCTWvLwQDhrctNiGiHLBwa9toGgMy1eNU9BEmdwA3Aakf",
  "key1": "46nH39GQPes4RP1TZyxUJbtiVJPcgMCCFxmgnASPRvK9dsyPBmNt3oBK9kcoRVM929JncpgRwsby5WgYaLRKBzwR",
  "key2": "5jtbhNr9waWdXXYsrrDjs14kXfZPrYTDs35NNZna7iSg874ewuTvybi45hX2QoK8uYBkqwCzRZ8iJJQoLqNbXU7n",
  "key3": "3bvemtVJV1CP6CjFCQfH6ZfdpvTBH7bwr8wKrYfCmj1QmxEDJSXMJt6oLqTjdzaNZUpehwi6gPKGh9Lj3w5MVCvQ",
  "key4": "245YN7qexZ6v1KJvekMv8akFSMvm8ZnZf5NQnvP2LMKjUdzqrzHmEUKW6Mnth6cfJN5CGGmPoEfBUZgbQpBLHMYJ",
  "key5": "331cAmbo331ttUVyg6n6KsDxkGwR5GdWLBmUsMg6K7prGMx22NSaV7tsMAoebpYM24vb77cdMWHkzxF5Mqvvc2Wm",
  "key6": "3qzSjkxUfSqNLLpChjva33g8WDnH6wVEVXQgeXxKuhUWwSyzZCAR62PiVgm9gVMHLhozStWqrix8iBPEF19kLjTm",
  "key7": "3eVbZRMZp17bVRM4agqQviSvEhUzNKQLmg7kaFvZ5QacJrWxZM4xmtnqJzKKScZ7a4cdYFi1TnnS3Nhk287m8iNM",
  "key8": "4bYW5pfBFLyYPyPy6SusawFajcASVkARH3AiANHMKr68N4e7C2sSYccy9fVaRQkhJfnwSVcBRuafwPPVuNh3W6ii",
  "key9": "57973TweCz6trjyJXvwMhfrG2oa5eFxdxVgpJapTgm31PoV8PwqXs6aueaeHAzg8HRDzX9mj42hgfUtHiyUViqoT",
  "key10": "26vmfApTwPTq74RKWvnT7YxuzKi3rypQJGkQQVtp584L2g2QL7yk3XCGuiiKcKgjCRYc25VwsfzmjaCjdp5A65ZT",
  "key11": "seAC5kb9i2eqfWFqDSiYmHdBLFT15iHEJsyNo8WyzECzvpGKWGv2nmpUQymJjuoHH5C8J4ZpbSVFeruy23GgVbp",
  "key12": "53XgiKPfzattyaB2qJqgKpo2ai4hxZWzknGJqHrF1Z4xt8ypmUqJYkcEbmpbPiYRNW79KKj8JVUqJDGXEnLLUDfF",
  "key13": "5kHFHqu4f66orwSMzDpFdjmzMUZcbJR7hQZg2ypMEZ8rwabgDpVzfvJAWAFrSfk6w4D5unY2MvEaKQK6YwuRPY6K",
  "key14": "5pSaxtC9HZjvHAid7t3qH3vvPPP3CoEx76SEacy7tqD12hW1SwtVXg7tKQG1BdaCKr7D9pRvHNeXaDTpE3Tvohgp",
  "key15": "nMw6E3goYUXGSv2NP6YbuX14dZnFpAnUVHH2wbonW8dTDEEXdtZkzVhDbcfqB1joYPUjsNWiV1rcCTQPN3B7mub",
  "key16": "24rBKa8uBnaifxHoLRLGvwsxVht6nvARSQK6H5WoNET9D73iwbusQdWycaz5fNxtr21SgKAqXzZHJzWU7RX6rXox",
  "key17": "4QAjXyAXUm8KrZkecpdFTAJikmecjp9DwxG2HtceM1QskbecFMiuRyo1WTynzP6e7cypY2UMA3XX2tg1ZxMoDU8i",
  "key18": "3jNstwWyzUzoyWbTCZ819CjAMCxyuYrK4ySSUfgHFreSgb3hfJMzZyLxbSbDUQ9LmF9AKSSB7i1Vegnc8ncG9Yms",
  "key19": "3kzeak3kQaHVy6MVKY2VkRJxR6mHkBLSnuUCBEBqtuoUuU3qMYy3gNADvqc6p9qFiepSjBK6bxjFm54dw6YHnzwy",
  "key20": "phnRtBaNCZA2XYtLZxsUJ2HAza8H3PpgJnCT3jzttvYrynUHDxuxy4pD6Fr8itopYkfV1RteHWMvhf1pRQpnyPi",
  "key21": "3nbEwV82GYNeqRyr58i93uTWWaeVQdKDZAWZmsicwoSEivMhBwBMNYzbjTbnZc2Wb5ZMan7vjwyJ7YBkZHjbxA71",
  "key22": "4ih4XYf943TLXLVXAXRZFz2oCB1FkfuBhbEdBqs9qHAPPL2gYzXsEzz4yRr1uwKtiN7hPgxAxdTXq6aWWMrtvWGT",
  "key23": "2ciPtkYBGeRna2JTdRXgPbVg9bEGMUS2u2bduvjiDzc4tdZPzGJjDbgMeizQqptbVuy8PbJPemZbqdVd3CdPLLDh",
  "key24": "5f6THGAJdVQHnJnrLa5Ks7QAreMKZi4NhECbSbhfxaK6FwQKkZipfrXyPt99Ac4pxDMv4eJ5mxRzRkvZiNj3qcjN",
  "key25": "2h8RaSGPVEs3QhQgbMEzmzwKBWPTanf64MxfEeYnMVT8aHM64YZJB3RzWzCuEfcoQMJVagb8sp81wHQCwkGcV56g",
  "key26": "3QE9DWLVi8u6Ytp8xUFiTdGisdU4KLqTt55CogmBZKt8Z7Uk9Y5NBb3WtvT56Go6hQQ9BW68RoABbsPrRihMzMh",
  "key27": "57SAoKa2cU5jcgoz8CHAfCEnG141fyUYtQqs4gztPasfKvQQ2dvN7uYebVU29TCEQQY5GehxtSdD9aquLAfG6KWS",
  "key28": "4uYxXqWSig1XgZPduvvW9Y4HbHBnfV2nDkbkNtRD22ZL5dhXD48s7D6a24HBgrkBWEHeWzmtPzomt1aY3kPpo5Ng",
  "key29": "Lah8NovSJhdp3DRFUKb27nRUqKGqSmJUySq4LMzfTNDhwTBuDMpktdpFhDd3CSzx93S6bEqypkTfqL9n3DJ9pup"
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
