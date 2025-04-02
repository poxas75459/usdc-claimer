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
    "51ES7K1aK1xxhBs5msNUEPiT2bMjhUawBNn9NPjV1GQeTSovuU1wdSLJTNGv5YvZubUdqbYAGHtB8Wb9nV3TPwj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfubMzDgTtUPimuHEh4LFndHPzes9ZFHswexUfH6YgpLjiNG77qSmo1Rw6T98JJZxFYy4CuqHL1JgBiE6TamLTe",
  "key1": "hYqKzufaU761o17xHfRY1QwjkB3JiNM4N8MpmjZkC2QSn4RC9oP9aLfzuf7pcpowhEwP5W7fFhtR4eLxW4cvjCd",
  "key2": "565iMeE98d7SL6vcgZYBriQsrcN4jXUnFLKAb2xRXRkHe45VtGPQuvNRbgByw2Xx9fPs2BtedQN1kFRwH3JfPiYW",
  "key3": "2iGW4v1b75eD9uVXxEdLyTnVRC98c8PSBFj9TpAWfLEQYCKGNaq6h9J1PY2isEfq3iHVsPyewaU61t54kaqoyD7P",
  "key4": "3AC1EuKLg4bNnxbMuQjC7xv1EfpWZ5CVBdFLCXzP1QvZ5vh9ASJRAzKLiiZ7AQA8BbDm95Ek1fWgqFUZuUNphk8i",
  "key5": "4upCzv2XRprFf7Dd3erQFoKTgDqLcT8qLtHgZVGGeUJnSpnLfWcw1TR1Nu4Hx7HTx81u9xEBs3qTWFipEx5vzopf",
  "key6": "3Lhig1SrH3nZARTwc3AJCZQNEoquHt6Ag5S91EXVHGZ9WmvMafcqatbFUHkg4NkTHZJ9kKcqz72NLphrsz3AZotj",
  "key7": "5G2n64nsesXpCryHLYQdYGgbSA6k1MZjU7xnycw67K7JcpRXcbpJqXZMYwA6AYtbUFajqavdqaKWobr6krK5h4QZ",
  "key8": "4wnWcf74k8apdPMKusFxhsp9QjSDk2qeAShEFxdskKvSzx7UB5nJjgkcfVNUWptxXdgN8WaAUafBxA9SUi1X2YXa",
  "key9": "36exx2yPkuEvvEuJpHZz4xDwAWDwqPr4Gq1BSbkrw6waaVjgrnPpHgBDsHdYidWmSnqJg4sNGrntbqZcdN6j9aYu",
  "key10": "4Sys3BTRUjtt6P8Ceut5gvev7mD7gHc3uE9BgaByY3MCEV5MzQW3tQu3AtdpAg4PUXnkFxmeUTjzEnnuAQkDYDab",
  "key11": "32tLvkDmQ2utBo8U2c6qTHHABdqZJa9WpXkuAWg7Q232Pz3BJC5zCz4ZroxHFZ5kKuk6BmbC6wQPq6cgziwFZebt",
  "key12": "2WSgdpSXznCasTH12QRGQiWF6o4omkF1KDy5qrzz2BG6zcJacS13kvUTjJAwGn8tzDfQPZnxhRaLNgSTnX3V5rfG",
  "key13": "2az8iwZ8mQgws7U4fFPYpbkTymYQjeRyAnvHkH5GJmNgXch1fQ9PjGmQUoP5T2pSpy9AiM9imZE7Uph9MepFjPnC",
  "key14": "3aE1N66ZLJpQxHXnSqZ3EMsmEeLd7bkaY4LgHY5DGatpCeziubUXfqoNLtAQYzaJfc7aA35fqaYYzCwVCmbUtfs5",
  "key15": "5jA1ca66pUiCc2y3DZqbX9rBS8Ztsrw8skiSoMtAygjcLN1dqdYgXLzpaXNisDneFC4X8W1R39MAA6E1iANQ1syh",
  "key16": "xbAE2ZVf2rA75Xroq6PdNTnEq4wqxk6Kaq8TzcfhtoNaTxMDzNEwgUSu98nyKFhoDz33EdtrxGnVjwNuCeAE8J1",
  "key17": "3ZJQHXphD55Li6D4Rg8EWw1QfuorY3zqZcNiYo7V18DsGMpAeqA6McbZ1WjoZ3nBfkzJCsGkAKia8kq42drvhqgC",
  "key18": "2f2BmtRgAoQWFpCikm3ugmnmF8umY8MxzkyM7j3QnvfmepsxjPxdJhgN8sCAoyX5phH56yzN6Nyb3FmrG9491YAq",
  "key19": "2XM6n8M7FGmWt9K6uv8cBs6z6uAUX5s3MQyqqEoZXJreYzWDFMpwNiA5VJiJc74gW3XkTwprThVtbUaeAt3DXV6b",
  "key20": "4j56mFUVnMDZBMa5AvdQzMLSihkbZTsvvfx2x9guLf6TGFfVxXzhKuVDGa1Sr72j5GUVoQu1bYTT94Fuj1pV2P4v",
  "key21": "2swnEHzGDx6FffjDowUhc1duCF7SDqddULPit3U8hAQ1KmW4HXXT4bo1ybTrHscku6iMfg9D6JeGwM9NFJXCdMh",
  "key22": "3MhfuY81fQDniG5GQFJt2kEmF2kiqh1A91tTf3XxBgZFMdxEAnfUhwNgDQQBXrbvJbqhcHdrkJkdmtFR1HBgLH7o",
  "key23": "31B7BXja5V8FbgwpxQoztiUTsrDkh6iPjNsYD8cQsWVX7nAV4chbE8tqfb89hbW7SQAHokt67TKEqY2WHFJQE53T",
  "key24": "5vhnRM7cLk14WTFGSquKZhxgZ6QAjKYCYVVgfSHApP1MJUCcciYDRx9jBo9jGunnVS6DosCVJtd22NZJAQh8L76J",
  "key25": "5KKvszqiSMYZyWmjvickvvugSsWDUaQThc3dVnwgjabPuP2WjDZmP8PMKzaXArjHEE4R5wKHxb4GWcn2B5PVUJy4",
  "key26": "2k4jEGRRmUsXWG91G1EBmEZJUeev96UBuBhhHctyheXAsN95Q61wKPMRnxfsjdxrfT5ftgUamGkhdWJ6u8f1eyZS",
  "key27": "8diaYD8A6ENafx8F7YJd6PfhzQESB6P8RfmwymLvzCATnuLtUdefKAvReEBizEkd5Ke5HMWJnipKCVxC3pfn1F3",
  "key28": "2rUfHRfmMnAuJUm8sd9gJwVead9htKfcCAk3v1rZapYwQ7bP2LfhP6ffXjKGMa39uAxcE35FqHGjDXjXMSbGfBjM",
  "key29": "5ywAVtP9grUWRPSdTZp2EtLwKLe5BgWb4zKzg3vhWR2ZJBEwQxeWDY8pgh9HeuCq1ixN7gsa7oShTnqESE39sqGr",
  "key30": "nzkmGuyP5iAQJ9ksQtKGhwqNzVp1df36qiqp2Wd12ZV2bguXLrKfP6RMcv11cdCCVnqdv5V8eE2EHatoLXVmtrH",
  "key31": "Var9ZmCNr9MCRzqRwYJTeYFpRkQtwDrHTxQCfbRM69Q6zWcNTiQMKbaZwsNBJGtCyZVtStZK6hEBdBWio7ViKjG",
  "key32": "3zijUDMPKSMuAE3iuPEAYjbf5ewvepdogoocTyjghGsXGGzZQRH5xrRZbqEu6NzTQHSjW8J5NcSw1tCtTjNo1zQU",
  "key33": "2UC1vQSNUUfVDCyENRYwmEY42dSUHmSKtYoce5PgZ8SdiDEuqk1xHJxJKFkGdtKymVrVUALyVFYQhy33wfB38cxF",
  "key34": "3zBZAUNi7otGHsPz5XJubPWqBtvRe2GZNkMsZypnTjFYoUZgkEGhtMzUVeLuNXXmwwWCM2jJb7RbMs2L8DMqy1RF",
  "key35": "2LBgCpGPJfWTMzKtRBzteB9HSpgeuwJqRBK7xGzwKQbHt1NTwbHepRjvsrnZUruQyvRFAczcrTrnLbVR5mizDepG",
  "key36": "4XkMz93JdHe7EEVNkYngdrDmJxKPdihB2DiVvmeCuurQrfnc1xJcKhkWD82Gsws2gSDcvCJCCr6MwVDD95nvBdqQ",
  "key37": "AYXvkzrGAwFaNiJiwLDRiVvWj3GqAY5My7pWCzWKC6zzTcpeZ8biTyMHU2MX8sb3JYhDXo3o4HwzwzTwGXJoREc",
  "key38": "3kufj211GGFXXvroVnK9SqXRjXREzYh5J4nuieNFvwWoWKDENBnh1zNkLj6wJhYHk1jApnkG7adnG1J4M43yXF3U",
  "key39": "AsMBWVEJ9sWyka7FQnQUx7j4vaAbe1sQkRGD25Zfpy5UrUHBTZi5GD84vJUEHMLP2sg4aLhRKADea8RXs58dbeZ",
  "key40": "3DKNkZSzc9xMSd8Dat3VBd82Ehsd1gFwf4HJoY98NfiSsXNpM4stDbsDURZF2RrfyKLXxyuaFNksCQRvgUndNhMd",
  "key41": "3vxfy6QYfJjkLJjuUGdtjppGoqnwtKsQ6kQEJ8jbkP8HZz8zogswHXs9PPudK3c8Adzf2nJEMaBssvq5KngsP7A6"
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
