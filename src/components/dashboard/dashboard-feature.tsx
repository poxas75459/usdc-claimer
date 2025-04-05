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
    "4pt2vT1eUMLVattUa9XZBsRh7tdr7SagqAeUBXVdeTLHo6T6V596HCqbnog5HstEYU3b5Q7jPQQEDCt5a2zex7EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HfrUoeSVTHbha4278r3m139bB43ZLhA9Ua9fbcC4A7CErYCEq7Za4UkVEzdtkMXzfG5UUoYtzheLtgaBfQyo9fR",
  "key1": "2ZT4AP5W5YMRwsn2RMKVq8QfTHMqVp7mwMZJwz4K3WFMh2McTHJWDeP8B9aJXYgo3yLbzt5pWjbMMbG5mbqhxkJS",
  "key2": "4MYPS97JPnRqSW6HgnXorrLkQRi2DHgSkWorqmqngCCHvhSwDBryNuXPw7fBoSPkWWmZEWthwWKxRrsavTQQsTuP",
  "key3": "33C52WuSp2ef1n2V8xbuD97sKS5rMzkjZvjKne4vyFXvaKAPzfn6nKviuKrSCBmvtYjHDcrExMKoqY1jKUbxfvjZ",
  "key4": "3zAcgt3qAb7qjTgJhq8eDN3HRhRPvnQS7Lmd1YKn6TNUGEqyYnJ1MQv2cnGkZX66PUwCejoDeg6yzvxmv1Az7MAg",
  "key5": "vm8i7pLtTPSLAwiC2yYgCmMKHHu2oCGwNZiVJbf8Yw79MUiuRQsTqFNXURtocRf36NusTG4LiH95mGS6HX4cCfb",
  "key6": "3i3ok8qKM8ioo8C5pMQeTRH3aUB7a2a2nerrCiwc16Y1jfXFM4bFaNhbfeDiFnY15o9xRXL4BBZPc7AbxcXZWiiy",
  "key7": "4kgVyBCRfTnNHvz9XhH73xVVdrzmSSCxzs5GP6QC1NJKwMCJ6dwCwLGwdnm1GQwDNzPrPAjKyJHpdWj3Qg8TgYpL",
  "key8": "wZyqqtXsB4DDkQ8b4sszSwdV9E6gk9bu9TP4BxAMyKJDqotkMwiDJRbeUHzzKwrFhZ9ir1SU9BVgbjCco4AtTgJ",
  "key9": "trETgUUMQX5Vp6sGK5utjRzh8YDGow1Nvzd5Ey31DjCAqnuHT2H8doVUva8bqEYXrkbJ1mQQFL2DQFCg6o77sib",
  "key10": "5nnPzn714iqoRK1RLCKKe8kf4BRvYzgkRJ6jUAke5FtDac6Ehw1hXJ3emtizu9ZLEUPAgCVyPrCDHHX3q9aUqqGN",
  "key11": "3xb3B6ubWg9s7Dsq5tcejWNDFqyv4SSi2dfvQHUrAGucTQ5sJzrPwwSRfVY2MtVCUVdb7WA7Zw5vjFaXqyZ4YkmE",
  "key12": "iBAyjJkCxMkSHsQByUtgarmnFVGN4yYoCyULv73sAqXZuoJwR1BjnJ6Vp9V2FGv4jaPm9fKpVLMJCAew9F14NFw",
  "key13": "qssbb8GbD3jc6oX3dmPL6cEUFvoDZr3HE3TbmevNBazrhrwdmguynzQsY5VZ9BTisry8UqpUkC3FF58EpG8jmnG",
  "key14": "3x2GszJx9hu6PxAN5kJwFxUtD8ZVwZ2jhpn6MQ7WmRDfAJQ7cwRwKcn5JUaAe69hbqtn5LciQvvDweHXdD9Yemtw",
  "key15": "2jYfzuU8KK4VX5TLTWNgDd8RmoQ967LeqZbGeSyHsjfoxm6YPJV9Q5pZMkrAP4XPyW5DgJbbJtkcsuZkHrxbAp8y",
  "key16": "HgwsPL2ciCjx8oofUTRKB5KkmHmPXTVKuWuEdGCtF7VcxXMNSn65ZrKP489ZKxpFY6vt9mFzhwjbM443TgqsRoM",
  "key17": "5vzJM4hUwgNc2xFA8rjhZFSE8PAQYXzsdGhPUrCGH3xB64LmMj3tBTTDKzDaoDmsKdVhLHJjF98KidyBzuaKEHeS",
  "key18": "2ZaerKA53p4XrkvKL7bH7ZDGNj7kazmd4ccvXCUDPzx9QnjDPHDx54axk6GwqAaJvu4Mhuk3YVHKxS9RAgQJi7yc",
  "key19": "5p9HfXojFiSFXrWMkrpPNWCSMzFr82UMggzYmeFGSKMGFsnzgRp5LczZpW31V3YPRMQFmXH1UPEoC2xCLheZ9Pa5",
  "key20": "43homnp9LuLN2sdVc2RCZUxN7fDC8tucBhogsQ79aTcpqDYhSbdp3RgUhGSqBJndGirocqEtnqkUdJGHCGR7rwkM",
  "key21": "3etuBfttCXKwjBpSoa18KwZhNddhA2rw4ccWqK575pnwswCnXs6hkndd9kkZYG8HqJF2QM9KjJ9PKDVppkwB56A4",
  "key22": "5UuBN9YKouqfnNDEuisU8ZgKmmwmPzqhzbK6D2vdCJva3mekUfNc7ctPjM4hBgTPYiwQE9ZFgop6wcfPaFxC6So4",
  "key23": "3guhbfjTYtUndS3mv3wBMfjBBsFLBThRYCkYZZ5gJQNJWu2cEcea41NGY9e4Tn6TPfPhkemdLj9swhubrjZHc9DB",
  "key24": "5szWyaPER2cob6ZNdRapHY7q863UkQB5FkerpVgd6XBZFqh9yo5tHjM6nizzff7QscvztHRgmRq2S7VYn2C4a6su",
  "key25": "2aQ9EjAkwq4wWV2Jq684Jh1Xnvzu6XDWEhq1h9Nx7wP7dCMPDeZ1SVJMcsJaWmTQxBoqQz1uBGrSggzRgJM2AYpn",
  "key26": "4bNbmc6B3qjNndKLXebJNc6sPZgHrXQpc97tGfpAGBJbrw8NScx7MDzvDMptAkKcBxb7qEEKbPYsXmhncnQsP24G",
  "key27": "1EBcZAu7unessuF4QN1vP6Nf3NUD8kkj6KTgqog3Y91qLFTHuoj95b7UzsRD5919C5wdntdJKNH7HMJqEozPDyj"
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
