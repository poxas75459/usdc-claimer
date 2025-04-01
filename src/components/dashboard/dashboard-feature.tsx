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
    "5MLP48Nc6F3NVpbqCcMuW7tcgbpHAwBcV8SMhdwfEkcf7ghcspaxVTPoA4AtNyKXdccNLUXB5wJb4sWd6VxvaMv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Xjhejg3biyc1VqVtcWxRyCXgESMXAajS4qgL2smTJCu5t9NghM1RspLJFrHhKTobNxfaXCcVPWD6KEQQ1THcGp",
  "key1": "3eVmGh6JT1ET4qWt5PYWuat5BPbC2iunEaLYH6awHHPoLzJB8aPsMeKmTZyzCRDKuWXfLbrHvLQwxE7zDp72voqP",
  "key2": "2ZU5hqd5YTNzq8vxXTEMp39grpZTGryVwpjdDqjdyRHqynBN7yQVUtCyv42pJ2M81zoRNMiD5zEwng8CN5katzBH",
  "key3": "352HuGVQ1sf7cVd6mW2VaS6Qq4ctwuJTzMu1nVWVJEBJ2eDbDPvvrvfaTrq8gT8nHQRy33MCLz6QZLjZJ3p4CVDd",
  "key4": "EgHaf9B3xhZcmbKHpxKPpkp3RLMAZTnpYPYM4cSemZjsNCjSLvJ6VZkdi98KLKypMokz2hfS46rHRL96n3ZVnHp",
  "key5": "5QAVexFLh5gpDtwsAGZHNPg44NgofepZTNjKoAoMjTpyyf5THabffwu5pmcKUZLN5qDGuSjaGH9JhmwnMhyeZntF",
  "key6": "53jQHvpDipzsNHELDMMdzuLqyeL9UoNRZx3HjwJSo7gRudHee8QCPAdW7y8fe9BqWZ1XRoXd6v61RVnD7t41iPSA",
  "key7": "4GVhTRS5xvVcQrnsbnjicRFp9oE5o1kjiQQWoVJUgzctdvFJkDD1TQuF68D13j1Uhqj3wTABxbMk84YjWoTVT3pS",
  "key8": "3FgHjKn54DWvi8EMvTQm7sLZfsoD7UNpumeap5PtGJa1VPUDZgfEfAEyPA561u1JJbNVFHTrsPWuX6NpNNR96vMa",
  "key9": "29rSciNsVwYYe5kpMk3FndpERGaLED3PEXFuimtbkCjwiaFx5pxTygP8f5n4is23JkbDXGb2t6ZUw6RnNifvVprK",
  "key10": "4j3pHVNakWc6FciwtG7SSxrD51E95Pa7AhDiSFDs6NuPMKUVAKwpHLNwWztcsM6hLwPf72xfGPjin9CzUc7bNgd8",
  "key11": "3f5AvCMn6864QgmXtENZWdLTwwcnB4vZ6uycV7f5x5BzGcujDiqe4PwJCKeRekKkKJtcqhUtuDE36eZFhQg9cZjj",
  "key12": "4Ppb5hTW4vWmsoQXxN963uQsPL1rMSQRYqowqaDX4nVX1peVihc3NEqwM7GTDyvkEqib4WEEghgT5VB5hABU9wUL",
  "key13": "5BmKa5nGNq3LX3aqUzjF1LzYEZfAQav9n3BfQ81vXuEQ5rCZ2XWEDiksfotMNmZjU4gwzoHZQstJvAnVPesKip2S",
  "key14": "QkL5Fp77b3RJc2jhFok2GgQYUtBi5vDF9K2aAZ9fSYmBczgmG7Nv9f3QVDovH7BAJ438uj5qUr2uFxBbJ58MAJ8",
  "key15": "a5dP9WQ2Lmx7rkWmR76CxSUqgErAiBTmSeKXM8bxAfcdMBgdQZGZmUzW8yrcFEJwQVTFahEdaYUR7no6VsMsziy",
  "key16": "2LpLeMqPEUE5csuTcxdC5VX3rXvXz3PGaLEwQHwenTpUgXaUxGCmL5Fzqgysfwo7iJ6mgDA8hrp7wQpJ5dVh9UV7",
  "key17": "wqMjqgA28jmsoiEy9mBbJdVZdAtwQ3JSAFU1kqTbbBnaPsTb6s38gEeY97R2JhcHGyZqbbaM5nHhGMrriizVnpN",
  "key18": "26Gn32NLSdectAaP8MJ4sSDDCP2U6nHgwdw92K8wWMfUHwCcBBYt7fjWU5NwLWW2BMFtYzQYXzN52FZFAuY4kJnS",
  "key19": "3sAzkiskpR9XCiF5ntvdpTojrYPT252EB85ZRQuT282tenF5VcfuhFLKs41YfNuc54csyDPYM88FgBmRUfz19huk",
  "key20": "3G27SRsBDZrkP6X62GwAt9dMyuKdAd2PZNcBVDT6wfR8tj23PMkr5Tegz1ojfrVCKk9i3seZjVipbb7ZjHaBjF2E",
  "key21": "36xYCuYcL9usX6eW9RDmZe71TrW1Z2seJLb8ZPRnmTTJN7fDV6c3vf6TKuYpjjducSjTPxea2Zbb31CqG5rr53zb",
  "key22": "JU5xsZE26Xy74zxcTbVi8fKeLMQedHnsedhq3cWoWkTVizGYbS1vryTH164678rfMERY7oQwmz2MvNt9v4kiMkA",
  "key23": "63rNRJtBAFEfHu7pvGVBzBVMdRKrR3ih5ZBrLzDPxhrBJMs4yrYd4GoupKkVuWVVzWkrwhveqBP4cUu6wXcJPYVr",
  "key24": "2YJsfSerUb95ysbHQQ1kf57eLdJcFHtsSUsYJBESu3muhxtftsVUH3qhUs1BEc5Sb6gdtKzSqDXgadY51u2pebnu",
  "key25": "2e5BndKPv9MXTXzeZWVSPZc9WP65t3YS8tHkhWFWjqzJWqYfkS5eSqsfS9m9g6oQvhPknPBL35LFPtTSmDyoec4e",
  "key26": "kMSHLQjeNr5WP8n6pmtq6DaJzGJFoVf6Sri7rXB8FzMz3edEX4gyZDaQnH6PLnsw5hAbFMXkg16r2esUNnLNUt8",
  "key27": "28SLTrCjNkzt52ew2D9NyHZAjXnUamQTzvRT5eq3pYbZDuEsdMVjCkijz7U2EM6CRmG1XNkQP5xJpNLDieDu1YMW",
  "key28": "3gYBJYd4Rzdq5q8t792Lq99UkTaBdr3HPQomZBA3FHTSxM7wnj8u4gno7maPRyBTKZcvW5HweXSUB13YEWhGnkb2",
  "key29": "5NBaYGycBLxh3jtt5xmBHtTpnpM5S3wNqEbVWhXA37Xv6rEDKpuh9YsHR3EnSjaXWdmj4SWhrqdevX32d9zKPf3S"
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
