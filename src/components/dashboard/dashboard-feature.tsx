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
    "D5jrijj8Duoh1ft3vVqmREovBb8K4QYUiFPU7byTCKqdNrACsm2T4VTj7biRHUHe4GY5rqZyFtasMUv5Q6eFPzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pUxKicAJqav7m7CeXtvkTXTVqNgQFxhcg7sWayG49r2HMTLcGptm7B1S1CW6rQ17waLUCvWZTEgcqNDisGtmSZ",
  "key1": "3ogmjYaiDuAGn9ZGeFGqMFADUFsp32gnY432t4ffUbS3VvDX6wn6xF9hU8okhsvWpb2YYZtuXyoUe7qtN1hUWt9f",
  "key2": "5CcYv8ScXh2NDwfHWJNJkixDiGveUPZSdxm79huouMGk46PKALFgS8AFFMc1RR33CscuFqDQKXMTEWBtQVWKZzAn",
  "key3": "3qakp4QrsrBQhJhUj6K5QdYTZruJtDhCzv2qR9CkSKu2RWm6PvS2wbS5QJLCs9FywpasYg691mLFQNYaennWvjsg",
  "key4": "3wbxpXSGLrfTvd7r4Y1rnXfw8ZvUr1Fy1o6D5xuNQLJnGx22ErfQFSj69dHzy3QGu1eStgzAAXMPdSp5PyCyExfh",
  "key5": "2F2KsnxGQgh1zhww9K9WTNhabiD8Lx8y8udtxYwUZNAYwu1W6EwiWcH4zdnznMzsTjWfH1e8oWkHVg1fHYTPf7gw",
  "key6": "3ZphPc7bcNedNacGQq6yjLXneSxxkfV7KgWshKryvVryQ6QQCEd3CFaQLRAqKY4va7w3REPLPSWMKqGwxqtPnHU7",
  "key7": "3FNno1sjcRF4YVYHKoDDJUywZTiiozWRBK1axuGkQeL6QrvbR8THkopTw82wkM4R8Qceq4eQ8sDru6Ni4mJL7Jnx",
  "key8": "3Ybz9Dyo8kWAtDDKuQ39WemTGhi5r8VQd71cfxjsh7ncRJBmvJsbAcRdBh7nPjux2tUk2h1rMV6aQsoNiXr6Xftk",
  "key9": "jYLCBcyQm6yTprkTfvgHTn6eiP19f8btnThg9uNjBsfcEVychhxhks6z1UAy1fzHeJaAYvsmBR5VXLFdMnR6bpk",
  "key10": "61XuTX8ckDJhrWvxRuKu1i8jH86DEAiL9NWwEVDRpaKkx3SrS9JtZ9BK9RkDUHU5Hhr6eEVkf6413fKf7RCF666z",
  "key11": "3bMcpCozDmdeFgL3rBH8ziiHsV7TKcCiFGe5CLx4d8hBPNg76cMKHFXsprtq9DjQvz4sZnTZbqvHaeR2Z8zRZ1mB",
  "key12": "yLP7fFxHUTTD95k6zyoDanhiT7ZCjZD9gnUh9CUXLSFTUVn2ZndkZbWrDggixri3C88LAhc9xUZXYwxiT59V4VD",
  "key13": "2zPmJmxg5wRFTiqfrWTZCvYwbDeRSk2pgmCYZrLnLVtfh3tHotRgZMbsm42ugG9TRAQ8dXWm7DkJbg2AVunztjKe",
  "key14": "2mbFhgiUWCphCTYKNWL9f11JNpgLTEzshund5AYEdspTbPvd4E936sk4fK7pkEckxP6tveKakjMPfuHLEkBQLhDN",
  "key15": "z3gp7urFpyS7tuoyUSMyxkNdAwAWcgnHX6UCpubNCoJcDZbdnVdh7P7PqNBvXWKfUaqtJb24zUN8TngC57RpXZA",
  "key16": "n991cwUrzGXr6Z9t7UGC2wsfAC6eSjxe3TcFfTssdDRPLqVVKydrKdJcNV9XVvD3ZDKxNKHXr1pQjn3dHpbDXYa",
  "key17": "5yos9evZ9Po5SGnxxRpjtpMKZ9pVWWUZ481DrrX4mr9Ui2MFib8yb7ejeEaV7bSwPqeBSEubVgxzEAFXAufNhNkT",
  "key18": "2GJnHxqbVzw61wyLbv6CUmQMXWskgFBtLC3SdfPNTXB5Juzzw6Hqj8s1uHxDQNuYbgfQkqrfwZU2brxc3oEBnfAS",
  "key19": "5nhk7p2miTF8mpfbrV8qYQtsTadgYKb8FZe8Zjd4hua47dZQDp4hp9DssojPs6LFEqrcY7NoXHggYRuJrYbZTY54",
  "key20": "3WyoTHnmJWXLV191DWWbMhbAwLEs4gegXV9y192HewC7gxBEwRf29MgkpCYVqwzjG2JA7TZWwgaFWj3KZTbncS5M",
  "key21": "5PfwcJEF8Ur34WMx9pzz12XnibXm2t1hdVCNdfta9A9wrDNYpWqbQWNBPqhLmqFPgoydhE8ut9rciw5VCHFfKTqs",
  "key22": "4erPzvFM9QxyYmtDq91JxJeuMLb5pyoZdPsopZkhbGPns4VHEpEok5HQdNdXQywhD2SkFjpwHXELa1JpcBUVJEQs",
  "key23": "57fwst2oKrzDYcgLTEopJbQD3LdwKLzQ6r8fQjs5T2obSMTUewybGt9NpCRbbCaWUjMXwAzLG177WTMr3MuRYkrZ",
  "key24": "5bJkR2EyKjpLMpBcKbxF5ssYpHpdXtYR1qjpHBKFbtMmeK7ejFZzEMW6mSkG2qVvLWfPM6oY2VRZR2jqGmh6jhpc",
  "key25": "4tDkmoLgUjd5AfVTqxBEsasWAbrS7QomXokKtVVB6uHgWUTJDH3hUdf6cfn1p4xmM6gaFWkVPpVL62KByxkRYZ6f",
  "key26": "2EsM3SryX1p52rFrt9xsUT1LyPzcLMkb2ehP9BUNb8JvBWwt62hvh8VQta81kHyPEucXXjUHoB9DwTT5BSa11fB2",
  "key27": "25GFPEJBxvpoyeSkUPWmCjPoxQfZHsgV2ia7dLomytjNM21xrRBYtWhig1MyN1oi9dVAoZxLjyQnYJcizYATc82p",
  "key28": "62yvW2nHwKA47fDhKeEpP9gVKpfbPnrMZEBnLnRCPCxW3vpkpMvzcubtoMyMWPf3GMrBGbhciSmJzEGjLP7b8Hr6",
  "key29": "3QpzdeJhwr5Qa4xUAH411FNAwYNn1Hoxe5TXU9sz4F8SkDuAuKA5Mf6n8ju5cCbGeFkVFNLztUfYykFAETsCbsBD",
  "key30": "3xXBMUL2dRk2NHCeJeUzm6ukv1TisCyRYYGDiXQL8xFWzw79CrEGHNucwVEPNwP9fdHHtAq6Ezyi8eFvuythkqKJ",
  "key31": "5zwABWgix4cNkahxLLYRCPaNrGL9mM9VyLFQgFeE9rDAu1qaKi2hvpFf9NNV3JbsDH5JspzSCUTtcojPmGwYAUdG",
  "key32": "38XRmYyECh1Z6EWggXSd52tpKm4rneBtyZf8gZuNBwzUn22dzFm6htqHjUSs9XAQAMd8WCKWSEHqPGWhBwTxBbJv",
  "key33": "43FtyazawmnVzYM6fg2HcWDpzjnnb7DdmX9H8zJ8iPAu8J1AizMbjRETArGZ8CLPU7dSr1n4iNU9oyveAEXzDgB6",
  "key34": "2hi36LuGSg5QuNm9wujEd6YF1Xxk2usUs7UbzF3S8sHVrakHADRfpYwQG15i3FtUscU3woa12yAiXhzUm8f9QL6W",
  "key35": "2RN29Lu6PUGWcv9ERvN5eFdzUTqF4ocy9AwSezPQuv4GeEFq6nGmVMezm76ooFk7HTg2oBod5b14hEvVhUXLdjBy"
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
