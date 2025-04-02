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
    "52f6d5zUQfwJGwHuZCS23iMXqsbQcvS1pfkEB9b3DWsXybnDoqYAzXVXzrVEQYwrAWfcHdqAPZNHNW3CpU2Fr2DQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzboAgHhFiGpjcJ2m7eTBkBifmEGNDYGYZ89LJzLJg2y1HEcPNnfZHujPZqCD4gtBm2hoGweebczGMvB6iS3Dxd",
  "key1": "36WFgB3VaqtHoTuADTvwt43qcMbKKjW7xipZ1AdtEj91KMXGEAMuUGbpbbPGNZYVNj1S53Kdr1vLcNjQcFrLkV23",
  "key2": "qpZ29Zm5WEjdCevdzwdjpjNwjYYf6JFa7ufyyDBhXPFRxqUvTP44R2UWFM58XvedQdMY9mgVxNdVvdvAVpnGNyP",
  "key3": "N4idmqaH6eqA7wrz9P46q9Kxt4c86Ls76B4GTgQb5FFSturBTvmsWwq2zpNfHYsrXugmEytU83DCxkiCLVGgwpW",
  "key4": "4Sz14ZqA1LmpfZSk1aYNE3hAutNTWQKoVaLe9mjsmpiMThC2MXkpgVFVLqcZtSVjT1vEj9c2fe4v7T9Mbm18V5NM",
  "key5": "29bD5ov5N8Pv7TYYoarstdv6dHWsSxNySXWP1CtAexBZTyhMKZTj6kiLUFgukZoAK1ERNeFRXkLiFQwGFdCevmsV",
  "key6": "2RYAVB2v4FFi1nbQ6YwHsXhjXxwaq6ZWQJpFfN5Ka7sy8pk1uFnHo8Ao3zb5X3mgKTyz5qGNtSyWBHM8GyLmTWdB",
  "key7": "x8S2qUsPaixBetsfexd8imxNVhMguTCFrthoFDJF9e4dQAMN4mJV956iKXYhQs37RMvQF4VrSnPNQqBH8C4dAqH",
  "key8": "5K4M8BN8GzDvzYJth71UPSQQmZLQmokfvfeCY3bxz3ErtecRxDbSDmUSZFZh6q5TD2RakNDESuKSMUNUQWfRben8",
  "key9": "4mPfDp9Fv76yifmmSVicMUSMwgYUx8uHpTREiPsuxuLFETmT8yXGqpjAM9CLNPgRmwUPsXhzZYbNYJEfT3CBrP8p",
  "key10": "5n7RtMRY26cxyqd6Z7QC1hmCMw1sNZK85N86a3nq7eM1HG9UgQFusG9WZkJZcqBDQqgSieb2QcNrgSQZUiNY9FhS",
  "key11": "4GUPS4bRPN7FGCpUZi2DYoM1brV8jCHcDmgCYqhdKnLWVTjXuvdtULnpfsa5QqtiWWkhQBrbeiUxKeypBbeWwrQz",
  "key12": "2fr18DPTwcw5wPEDd8efhHvoUTDdxM762AUV5b6kAKVX1PzhB9eb739trY4rzSxAbLzn1YB2fbcsu6Dt1d3yxez6",
  "key13": "5Fw1AGXPHA3NXXCxCGk3hMFDnK7co36PSeNwRtEQm6NTpHrVDBBEMko1WYcrwte4WYVLC3bGrwwvshBgm7gkM9vY",
  "key14": "3uMbjbhjDq2Ri9jZpsmhQB6aythvS6zuihGg3g3dsh12VzwQj5scCRc164Rb2H8khC5UDaSFEzm1sSsJmwZGz5gN",
  "key15": "3yht9ibjLKnTyx8Sh7bZrWvXMbgjaiubTi9Yc2whVmc4D7Xm14dLsPGj21yth7zcjAXbNhgvQzh1AGYtQSnc7NTS",
  "key16": "5JQTsJXEgBYFTzS4dnfpCmAgLxk7nzMWJFE6xsQbZXGFTtQMtQWb39AjZChoVjKaSEEZd5dfEZRB6pXuaqPQMZqw",
  "key17": "3LYEq82AuhssDdWQMydXssgDNexi1KZx9cavsjo2jfnibJGAfEmZBYv2WnXW3f61KAvEf8JL1Ej6p423Xf7Z4v1d",
  "key18": "2LLikhYJiXeRToUaJncSobhdp3qdWi5TA4VamBKFhLkb4ZTUw1VJdzvGEyx7FHbxxQ3CYyMF89yxwnauq4iKv3tY",
  "key19": "3ie6mDGUF9xJH9Mt1mVM4L8UtQ7zvWbT6jXXDujutUrJtej8yHmiz9rd9a9pWhMAZwgAb3uLZrzebbpCMKZbumJm",
  "key20": "pG9FoRzUy1HhWVbRoXuV7pZtg8Zyk4mS1E8vsCrPHSiCp352qQPK1ZtXGymJ8zPP3Ygnf3BG5wiSrqw6kraTdNt",
  "key21": "NN1ZXgJ7vB1XU7prewtkDhJKq83pzWJnoTv7RwwcoHWFjLxkJo4Wx9PBP173s8an7usrWdrz1vJoiXdFiox4yme",
  "key22": "4FGRVXJQj477sD7JQtix7wA9SR5vNjjD6mfeLVMunsUb7XF5dTXzRSEAtFN4jvju5f9YcdFRHT1jDGJTjG8VPKnp",
  "key23": "48arbXvxQYgxH4aupdj1DnxfkcZNT8WZZgAgyQjzgy39tceXjjrd9NoKR1axMwaccoY7VCpJVeXpJr986rL3BX2Q",
  "key24": "48BcC91M7XeuJnGUt6mrmFvfpWhYQsxXDXh4Y1Q95DU5KD3zqECVDNkvjb4LizXJFxffuaB6rnw7JbcSJUswZMds",
  "key25": "5DqpeaqUT374niDXRv1jdFWcFD2D9ruYVAUvJ2JeqTvNTJ5c1q4AzHCt911viQk3RX8BdKY8e2bPxERfmapuLo4X",
  "key26": "3DUsLgrVd3t31nu8SjD6ydoP8g4ZhKYDwWcxegtsNwNioCAdex5dB9rD7s1r1j9xCcYzSAUxVsyonoVUpbSeBsmE",
  "key27": "5Pk2L2Gar5SDaeAfYq2fNnjC7rBwFQGvLf7LzH1ZbeYYGBTBnmAPnyV4X4x9DwjF6ru47XWwNwEkPKaJBBXzNcTU",
  "key28": "3PHPRaSmorf9ShwSxYsqmSawaozRUCNLjqC7XXWhPvisJu3aMQsCcfjkxSadafsvwoG57LC3GT5nshWZoC25DMaC",
  "key29": "5cSiyzb6nukaZkfdYYzGgn738JTdzipXVfjT84LhDXVseagHZ6wZB8qDyUTowKw7Tt7j15dJYdZ5xeg7qEQGKjzt",
  "key30": "qKc7ET9qpuoTGgKAWwgQRnV3hX168hUTHzHggsrFTRGwEfYiwDcHkqspGfiLMcE24XkWABwV6LtXfu6PN6gqLGe",
  "key31": "2pcTZMhAkTVKjfforgtxxcZag9sUE22tMEKDA6YQdY3oQXrmKD1wkuUyqMQS7qrVN2iGzEbdXV8HtVcAL4YQ9KsM",
  "key32": "9TJjDru5puUGB9xMb8EfXJJcD6wLrENad3NuAmVAqJ1EHstNNd1y9A8DgWe3cALi3LyMfXn478wB4jW2aKJpnoC",
  "key33": "5h8RoYKVJEwUBGtfhASw92D6RhXHBaPDzVx5t8xwtChux26gidcEis7j1pNfgqevwnssXJLNKVNaF7f9VN9aYSLa",
  "key34": "PMWA5hSh94XzArqnXmVCFhxYHy9x15oZcHbw8k7zcWBFNZDcVAEMB67kVUVdSYZjgS3iFMK7ERQKAoNjZFfTW27",
  "key35": "55YLLMW7Xtpes9ufgZNvzxcrhPqV7MYQMmHtvCH5yBjKVZP4DLpRM36S9JhV6eUgKgZmeVuZ8vETCVLRW8o3nKNZ",
  "key36": "4mbvUpuUTpvUuR1nNtwQTvvtibjEf38YXR7jVrkXiuGkFm2HtHkA8J8CQBb1j1FMwViZtXBfVZLheQX9RnELQFxF",
  "key37": "3LsXY9HduJcjaLofFtQD3PNwyV4nGaPPJRQgdUesMLnkdyt3Am9Df6mmvHshQ41QrLXXggat92As7BqsyVg9kGbe"
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
