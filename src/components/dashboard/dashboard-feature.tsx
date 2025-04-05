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
    "5nh4A3JntqKxNjJGr6wQ6b98hTNKMtvkpWPEsSKUgJ78NDeRYjZ9rTisygrCuSwxAMRRNLep6wW5C9pANg9a6KWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwoBqyYo6u8QLqSuhaNyAcff5FEmA1vB1gESMoLXWSb4Tx2vnxUadnzHQdJTdxuipmAVVsAy1sUNvMyCcegUfpc",
  "key1": "2yyfRLKXYoMnYSeApC7F28hTq6Jd1D6Jjoe18nppz521rqHjvVRBF78MEk4saxqyvHShM19x4eN9rs3Hw35utC7M",
  "key2": "5ZRWkdWj4r6c1w6pwfFiRFx78N3Zwhp5LAub7tqRdNVgpzubPT4LiF2mdG88eLzGNo5C4FVjz5YhoW3TDg1fyqoh",
  "key3": "Xb2kqvVHao1Gzx43cVFN1g7gpV9aCaNiRfwzuQJmpTDTdpUUzfAkg1mBpYbf3ZRhc9wfR5DqNpb2wbZrsPh6f8U",
  "key4": "66YXScVBGE5W7FLK2ctuH17xbdJTo8UwHeEwJx9QRYWv1c2TqDgqDMGcL67H3dWGEdE7MdhFPJBMMMBuJxUgT5ay",
  "key5": "5EZtKgVTePbWvDwaaLFso3wfD9rYdByC3srBwxx2qrFAEgik3rdcUbsNDqBtPEFuXk63iFpXJW15NUEDYA3QRioF",
  "key6": "3tJzJZqoGDarHP3pt8oYdwyhnnkk6q6WXn283TTWFTEccauyjTcpmJqSWK8F8AjvB7f23p9ADppNqFdvf4hJr4ro",
  "key7": "3zgqH4B9obZUQa1jFndS6jyDq1DshkUWsWKR8PT1uwfzFSEhe82ia8ZqaikqzUa21djJVaTcHToiLLZ6F6o8M8rT",
  "key8": "bsQsfZHzZPNcQ11d2vJXgxotVX5FT3PgWb4SWWQGigkM4CLSbpYaDsUozaezLZXBtk6qVjBzgPcWjUWVbQyq3jQ",
  "key9": "26EGkM7DmAFkuMDvGy2paet3XCErtEt11iZyT99w9M7689xJHHaW1sqBJCSDP6zKXjBZZCgnj5woCzYJuYRkj9AZ",
  "key10": "2xuqkX2YwahqDFoAFLMZ9ugZ51RanXvAnyWd4xvUiSG3kJFj1KCMtmuw1Da4Kh5Daqms4L4ZRfSrtgA3X7pfEHfZ",
  "key11": "22jL6SEzyZ6kmB2mG3h92qa9RcuMk7Kh1Zw1ujGPyDhYwPRVXdP1L5QLhG4Nr1Q3aHuyRyEQk17e48mh99whanDp",
  "key12": "2XkvVdL1bhiZS1HeYahMdNbyR7PoXbyh2dHMGxxWK8Lbj52bn1Wi3rsZ2Acd9QpdyzmLbj9Xfa7fyogqA1igkr4Y",
  "key13": "2y3oVn6FdZwUvdzHYs6pQedueTCD8FJyqQ4P7EDwJ46p1HqET6XfxRiLVFGqjGX5RwQFBERrMgqPPUgAZngmLG1B",
  "key14": "3uZmAdFQBSaLBXNGm6pt49ZyddhJQTgm2diiCx2NfQN7tExgpvqcArLz8EV59sDqQaQDw5GpA2roA7QnifWgZbZq",
  "key15": "2Zr9tNNx4NJkFq56hGYChKDrMqeCqG6kEDUsAMN4XU2gu1a8FVLMN391VqUqQ6RhAhQqLqDSAhS3TVn7F4mZ54NU",
  "key16": "5YHBYcA6k5YBsyrQykw3ppxKHmQukdnQ4AyUtgPyZBuYc2xkob34es3oj7eyRiZF3ShdpPFQ7NVVyBbKhu8w993D",
  "key17": "qdsxMUwuJCcYa5KQky4S7xJzFdgNSG9eKwU988Ay3zKb9tj6trea7NaCuyQtmbrfQnMm5TEtHjRnJBYG9vXXXgb",
  "key18": "4gaKmQ2SpJne7Au2R9cbdoHTYQKuZ4bykqsBep9g1f4BZGtfz41ZJ9PgHBt7VTymUXWafBFZxwmR9HZiAsabsEjt",
  "key19": "4P3xg8WsU9hnF95usffsPDM4ZShNoUiqvU8sSyRW3vaQPsLR1S3pMTYDgDUhjNKzqWT5CeWMbnYCSY7b6KQv3dT9",
  "key20": "3LY4bFn1HtN792WnQ8w6Aw8wp6jq43HE4oGtvDvopNCZKmVxBJLXtGPAARrvg1mTEEYiURVXPhBquM1YoUDkyo3h",
  "key21": "3pV3fnUULjUi2w3yc9c5GuFRLW6W8UWX9SoahpC6AaLymza7oTGQ4zUFxy9HWrwzXKstvzXJ2HvkiHLZbgPw4o7p",
  "key22": "42v8P1Jn53eVUooZqc6STTq8FqvUdDjmX2rWKvnmiDtnAxj99PVJtfsw2kzT5K6R7REGHSes1pxfYGbPiCXQqwTe",
  "key23": "3YQQ4C3yrBmnkwc6vqBkyBn3eQKs9tDkD5jDHJYDGiZoyAkdSeTAX32sfyb4z9nom6vjyRtnnq7PhQ3CCJVRCKN2",
  "key24": "2QGsmvPDRcLs4ib3Td5X5KsrU9vwzCKcEQmDSaUPibuHQ2mkmEth9sEAHGaRYchvgQLzAadPdV9gExSHB6wZ98by",
  "key25": "5RghKmunwrdBaDoEtYAdYi1YmxyMqokhV7KrSajpvs9pbruxFQHYSRRVQKL4nJivZ66t8fdN74GzfbU2MqGFTxao",
  "key26": "3E5WnE7CZXzRsPeEh7Vui6sAWxrt7bV5ZKfeSkesGZUZAiohZawJFnzsLk5CKwtgT9HDQtYeGYekre6VBFgEhwvf",
  "key27": "5kJi2x2TUiu3eQzMDHbYR9UQd166hdwiL876Qb43B5w2Ly2u2bjYzFYUvoHzM97QJy61W2kqigC29EeqHvwJP9f4",
  "key28": "3rybNCwFe3bNZvQ1d5XtS99AW1QT4SppHERjhkqgAZyCpHVneUok6m8d732KG1NxQ4pEhuRDHgkKKSBT2bMUYqQ2",
  "key29": "4xKtd9KJrUYMk2dtLY7CjEV8Ds5jUKWSxciKSrDbGks4Q429gG4DoPtb8FHHwAPmvReZj6aKrqfN5AHmQREfHzKT",
  "key30": "44BXUX7T838fmY25RWEsrcyGaybp8mtXXkZpubXV7eH7J2NBUGaQATru3NXRJpy5vrJvsddaVRdRnqLa8tLmWV2T",
  "key31": "Z1dmqAZfsi8kcN2AEaPKnKbCRXyhs3qXsdU7HHTWzU7m8aDLa1vwFh352MRM6PBC2x19pHjY7kvTaNCzL8wz4YY",
  "key32": "2nir7MwVnphCxDmkoYvjHwPJ1UZZGqaZHVueYBtXqNWU1ygTm7MqbutMgQZce56sc3BJhLWp9BHzyyhja6YFUYs2",
  "key33": "2thnCGJuxyXWCD5MJtXdnczdTKsMiizXEU3k8ma2W48us1oBJ81qCuupXPbH7SrruzYQAeX62dDEmuB8yDyKnMn7",
  "key34": "2NZ6WZ9LqS3G2D6UhfLeJn8iQeXJ1QHuzZhQDXFdtU8MAy3XNXp93tD1Tv1iUyFBDD5CeaQJW3okVdabtMkouQZx",
  "key35": "59UJc7HbXECD3xMp6c5KpCJwzqP8bi8CULsYT6HnWw8dmaf93eSkkThJgcUx8bgW2Z6bMwsqg4Dodp1jN6cA4cMR",
  "key36": "51iHssBJ89MZ8hMmSJgVeFfa9umbCXJZCT9CPHBy4afgUJGBBBS32CsmvKT9MiPKmaq1AvS72XRum9yvjcANLiZ",
  "key37": "48t6XHPAsR4aotn3hjvSz8ALcYhoEHyHbkpEnm49u2ix2kFdqQixw5tK7WweyotWcM4UhRZsS9NcyZJDteqJLs4F",
  "key38": "5sbKqUNCfTgduXH54GD6D3gSkxHDsovVLx6MPFNiYU2Fyv5hcJsyYaia7ctTQqYYrze78ouUoMtXFExi13qVKRYS",
  "key39": "5GpZaQP7sx6xA2s2mEg6zBBZWgbUsKTYzuwe11sZre1JWtY7XCaZiuzWajjdCnYSKhokkhw6X558PhAkkBH3EPHZ",
  "key40": "2U1eCbi1dtWv8HnXJEMtMguZEF5zykSeSnsEnxrKxfJGLJFMqVoF1rjuEgXKA4NFAdvad2kz2HuCH889PaWzj5PB",
  "key41": "4AMJEW8eVdi7fPKCcpA2vrpc548PydrkEkG5bdJWFCP5hE5VyRxhEXF8X19SA6PCAAaEQpmtaNahoMXK8evt9LAr",
  "key42": "2TsssjxwRXTHgcsKFdr9ues35WUn9o7bWpf11vqMFXctwyH6deQoHcH9pG3anP1xUJDARwmEbpvDFGuYJvezyizz",
  "key43": "3By2XWZVaMDwyKVfvLu61CWvGDzkFj9PbeKGyPUKA4PevBFbGyePrQrbKotAhi5dvSrV6ZBE7T3dLst3byvSeepd"
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
