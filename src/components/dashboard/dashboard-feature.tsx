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
    "3HENy48LVFArK2xLJP6hrV6ev8QnVjLcNhnB6ZJkQ24vnQ18k1kXvd4reAUpGDWfDmB9cJ8RnT6DyZNG67jHXQZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmqp1VRYF7ZztW5ESSCgWavSSg43Rc3bvWLAKajXuceiA5vj4DLfKunnxpqRobPCzBX17RaY6eSkT6QhDLMWTt8",
  "key1": "5z1dr4ijSLH3B9qg32TcXgKtBEDPA1sD6LhT3N2iYgyP4CPjNEXzyriegMC9RfQx7cBR3ZmXEYHHLEULGx2mudEE",
  "key2": "VXtXayYjnZcQpg14Y4xwWWUyHDYMT8adFi75v9t1jouqHg42hV1UqFBsJcCzRJXB3XDPxqiMpceCrYguFkHzRBL",
  "key3": "YFbczqAkqYLeJc7mSi62szxCzD4Nnkm2DHJRyHnmjTZRZGBG2A6nhdp1AnSkbMd3Rx8it3BcHQRm13D5F1hbSPp",
  "key4": "W74CSe4M5Dv6Y4BYo8wJPnR8zMsS4ZmDNTJyZHp4J91Pa2qPBhL5xhPVYamhibEhwy8Uihq25HwfNsERfwKkBkz",
  "key5": "5pWZiwuwC5gtVEErdTAuHYkPgYGnjS7FFXKKmDjiMixGgRWhe8uL5uReXVifgXSLZjSx3GKA97SgpcafbbdCJNty",
  "key6": "4nQdc3ZURf3C1SBnDMRX8NDmwGPvqB4xvmNEBk9KSHNAUqnCvdxPfLS4XykoCueaWRHvjV2yq6ASCYUCLLh2vj8h",
  "key7": "5pZhaZd1uJByCenkKtCfKTnX1kLoxpUPxXVeLhZV6KYzaFnALtT3eC86U5xUCjuPQ6C8LbdRZYN1tnUsuNZs3URk",
  "key8": "2AJKusuNLGMC9a9VAcZwhv2N79bpXhiL16QEh2EgfztUfchygbZweUK7mA1yjxXs4tTfAJNVv2tBVmepy6NC8kKu",
  "key9": "4ou8AZEXu9eAujNXNGQojv7EkQCCWSiQrENPGJRvPbA9A6GQ9VyYZAg6GXKyjqX3DzdL5HFwfJiRMancLxEtJeJa",
  "key10": "3ouwQCissC4GZQTCig3JLn9qixL6hcbNxyTeJEPpwgnLXKGwdCbER4PKdySKzD7hAXMikZM5BpJRgoBXTUKdtE6u",
  "key11": "5P3JWWRjm6rF8ud7faZtarGKBb2V1rLfWHTwW2dCKyDX5vnahfUpXWKVJgAi8n8X31x5HQoLEZud4KTqSPz6fEK6",
  "key12": "4Y4iyagz9uhgaUaVSbJqsVwL9m2vMHQKKxoA37yepEsQciQJNWS7mGeuCrnsv7icBvneXQdfJG1Mii5eqWMppkq2",
  "key13": "2LjVSfnYyMHZ96MXigiDuUAQfqBtne7FQtkQQS8baB3JBEHxDwsy5YZma2fTVDMWEJdJYh9CUskRbasY9Bd3cbhw",
  "key14": "Br9K8QSRR33Svx1durGctpXPCRqiML4ULUWgWmEWxWSwQ2c9LjhvcXE5hwz2j2CDsTkHdzQSNQi55HoLs8m5A33",
  "key15": "33Bq8xoTHx2p8bTnVSqkQf9ic2wNzxD4piqzSkiYppaHdndTAFhvBZ5e2R2p2EU6siNifg1zKGbQHxbx7dmuLQKd",
  "key16": "d3TZJGBXPJYFKesDos4he9P9aFGUfWzmo8GbQq1eg8tYmeu3yHMMnjVQ1Ch99RraM59GqPf8NRN5f46x2eHhzf3",
  "key17": "3UYmXDLuxjZspqt8xQUguk27QEUvjuXuUrR7usEHR8896WuETCZKoW2B2wV6PnyJQu3bZm8hs5fyLrX6mcvAsrxE",
  "key18": "34AzxBct7JeWbcYFKvq89iooJnZLMXyGbxBafgNUbcJ583wDBBq6b7ij8zzgtYznbQNnhH49tXtdq6EzejHmsPPd",
  "key19": "3bogTiHeCwKPXXCgtGbSkcaUxZU642yB4BgkUnSCu336bP2ZjveT1GLLtMoAWgZSAiD4LRjuPmUGRfLue1UbFVbh",
  "key20": "2f2VP3rMA1QFA228W9Bsj5Jveak9vvfKeYU8gzN23mL8AFcPauZKZ7CmVuB2EB2HJSQUvp5DaTYpkYkCxjcjAk8D",
  "key21": "5Tmt8YYD6bci43TqpnyuUYpzumhAxuAhcRK5NkFpHivdSvGuVygdidpwuRAoKErKW4fpESmXPfHB6mSxMZP9zjV",
  "key22": "3ixAk54gBX31kD3q77gL6WQxBE9NG9UpitybvvMLTpnW73TQnWUDLH4fus3KVmvade5Yp9jY27B5QopGC6WCQSvE",
  "key23": "2eW3g6kX6ActWfDEYWzhmcEdWC1wW6x4ubbr7XcmRrQYyAaycoRXcQHLL8grQN6uZmMsuanKMMp9MmFJANkxSUcP",
  "key24": "XDgv7HLYbPuBSXtHH7LteoJk1pdrq2eNsDXcn2N9CGZ96ZVQEwpSW6YMcKKxeichvSgR2ZTfzXTdk4NjABE5s7y",
  "key25": "4gRWqgCRruLDdo8iFCjpqW8oZFtdidKUtseJ5Xy6MMQPEdwryGCCcGSwLhjZTpTwvnGHNP3g81KKUK7wbPbpU5Tz",
  "key26": "66e6Sh33FAMyJJaMWZDncWSDwzytazDQozzhE7FHDaDsSKKSjqPxwLe7mc7KGjY91DYMSukmznr7hvEF9gxRF6zA",
  "key27": "4UBRwN1FhScjddCLD5YvLBhV1sgM4aTzNyAvSHHeyJG1PiApXQANYahzmg6zfJQFY5Snb3UZBiR49Z5UXMA3jbed",
  "key28": "2gKX5qhNiGs65o2x1tEJFKHUGyXyH47vdA7ZwcEQVnPp36HGE1CakdtN8VJTaiavtQVaWFY6hftNhQdZ3EH1PbWc",
  "key29": "488dLVFfqAmpb1sXUWVaLSAeXJjPGd751XbzNJDqCCP77JourJDf4ZcuhkRzib5R9aiRYgCdLuU9LZetvwkFuwp1",
  "key30": "51SkvZ23oiZ9HReybprUsfYMEZ8x4VZC5vq9hwKaWyrbX3tGiPqokP9JmcyDywUDL1jyuuJGYATeoJe8Hq9bgZSZ",
  "key31": "3iX2Lg5C5MssyV3DqithCAttT88TzeeC5eu2QgThvCZAL1KF9R9HmwFBsXcQPbbfQAx7uKdfeqG1zNPPz5jQvsGt",
  "key32": "2adsxL91LVweX2h1jofsvGwmLuKsUudfHV9xTFe15QFWUMB1jDDhak5VgyQ4YqtS8UdBzxUcUzYhaAB6AhpAwXfX",
  "key33": "5xkWD9FGu1qSBFi4qqpxKnzmdFqsFS4jkEgyC8zUSubAAMQ2J15y5z3BSEDhL6YG4trvNbvQKLb2b9YJct1nhKFJ"
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
