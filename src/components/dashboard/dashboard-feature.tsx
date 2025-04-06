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
    "4ZEeypnrrjcSPacCCrSyXNriHn87E6oZjR9KKtu2K38pMeJKdUU2DzUyx2bNHWAHUnCyAayUbib4DBLTKpK5JfqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPefpFne5kteBgrqfwyCNe3drdHV5UsAka9C2bfL6P1CgFeqMnL31WYRjwnVqTbrneq4rHf1mixD6pX5ttDTpMd",
  "key1": "2sxeSyKLmeTW6ddfnyLgY5UJfUaSKRNTgyBsURPBk8LjShB4KjRDkWkQ2TJN8tjAq27o2YNjgbLo2NsVCtXMzXZS",
  "key2": "5NjXidiSMqxKMgg9Dptv5uFWQmMuHc3BLP1JseFdXw8XNrSmgugAVg1QzQV4uy1S1LznoksB3yr3xqq6wa5fCNN5",
  "key3": "5cFtqcZ2A7vs3jMU4QYkoaBYUVfSV6Hi1VVrQdxzg11tjpKks6gtAYP7wJwSiywRkV3WLQx8iJMLPDGrscHTHVXC",
  "key4": "5HZDnFjfmQCaYWUCgGxdgaNC1qQJJVbjhTw5ppk65hQU9pBc7j9MPZBHBrjMYmpthZoEx5Tyv9DgRjRhiMAy3nNy",
  "key5": "3qiT4gx3MyK3jjYzuMmHvoMbFCprjBzdDikQexKC3ZcuMAPcwvhNN5RoNZwdcqr6ASxtQcTpuMmW1DaZ8zTyofqF",
  "key6": "3NxA7MT9RZbcLjPaD9T4hXFbi7robo34xiya42SD7S4pRGAwCmtSfCcrZ8ZPrE49yhJ2XUMyoewJg5gMKRmtGJXf",
  "key7": "affHTJS8U66jLz5fR6AssU8DBdNQVRLD7PBpqhJuXDeTvHhZpHkZqhP4YvCDXzSB32ievbMXLhLNmzyct2WLKxk",
  "key8": "4KK2pvP5KuiMkbXyfhVoRFbQUcAEKWaYJ7RHKusgsuSkA9gRLnHeCwXNpL9ubqcFihqF5h1ibWen96muk4wPvRCX",
  "key9": "MUw63BkyJdPcxSQ6PRhGRr96ofGHFyLZnVbWZfC9Jf9iXFGT7cGp5Z4FSDwfSs2Xe3DeURfyrkDXWxVUVoUpbjm",
  "key10": "5MWpYBGdeFFf4eQUEHb3MT1wf5KvM53AveKqMnq4TvHTfDfkgsoD8L8eybE5g3nuQG52PKC1dF1D4ZeFyACgB6Rt",
  "key11": "4imfdj5rqZetfzaLnjT5TU5Dy1TidyjEoxzA3rhNkBNRJTu7YdLzkqvjpuutELQPpYNCqnKriq8XCSd5zey3Vnr",
  "key12": "59UUC6dEpSosbxofhUcqH2px5K6UnoaeYpBqrC23LUhRnSy77Cni7T5nR5Mf5n1RCiNna2w7XdQye2PTe7eQkX3y",
  "key13": "5NrpKWNwS9yKVBjW7yA9GdAqoACqxk94YL6JDyuCR2BD5Vqtu3xt3PWBNbA4tzvsafcRodNeFRFBam4MPUTHbWba",
  "key14": "PdZNdTikPz7Axf5NwTP9wb8gt8jvoUB7WkmFqJ3oSX5hP1aQua9i8nKDQFBaWU84gQYtDtcTh8ihR66TPhcbcxt",
  "key15": "35bLJYAYKVwmygpC6pngGY5PaC4GvtBc1zSqMkg82nAokyhHaeFeDkicWedD4KiySGykaSFgJjMeyq9pbjviVLK8",
  "key16": "3EHsgFSeJmj6DUh8njWsSTXPzYn4fMzDQUtm4xKLjxuZCr7hdR5gJ94S4mV6efXMogHV2hSK9hDHM2L18fNhhh26",
  "key17": "3MFy5xceve7cNTsmFaZu5wkx5rGHKPMXn7oX5J3LNCMoyFNmx5BpxKBa9sEFR17F5unmgkSs9WytayyQ1VDogLv",
  "key18": "2bsYgPenFxcxNUDfwmGKKutd597EvQhF4z9XKPHd28ygA4y59HtTUTyZHivvxUCXenjqNzcix6vFGgvkQN2kD9Z1",
  "key19": "rMN9z1W3EyDB484MhAHTRPSuYimNG43Txw1ZxHr4rqVnP6W47CGBpZMrx8yqWJCLyN13V8zrJw6nqr8ax88zM7u",
  "key20": "2DK6MsD7W5pZQT6nvp7g8QmnKFDDexuvSBUn2fx5ivwCgBA5BQvVbScUJu8gkYFCghpQHWupxtnkxNvT9wgB8ngH",
  "key21": "JbhQ7inmTgX2Y7Gwg8izHxSqejYnVxXZgY8C5xmmpPJyp7pq3JeKJhBDNc9WBSayQLKNk9QP5KknEcRCUgSBKUz",
  "key22": "4b8ocn4hjKc3Ljm9o5DPwuikCHrZvYQmbCCAaXAH3uYQzTSKRiud8M2FzEN5HPggqLSRRebJ8eXBRZbmJRPAuE5Y",
  "key23": "4A2jFxcg5anSNPrust6M8c8ENW6ETG5yES6JHkv7hckn5mmnsbArAtXc6axJFUsihCZELh2WVKbZfrz3pVktM2d9",
  "key24": "mkL2Mj7Zjxu679TKo9XsxtF1zJbj76xLEtyxskQLouG8up239ASE9MBzFf97HFr9JKTvpsGoerX1kfgvX91Nxww",
  "key25": "2QgrJDpMHcmYDspE9SEfcLto6NSxZhUvQaQAZb3u3CfezqUbFQueXQyVqsnyPpBJfdaXqCtW5PDuG971vW9aiL2P",
  "key26": "56bkZF1MjooGiELZ2fPieLvCFmSNi3xkhDWr1ekhCJEMQh6JLkRrkJhxpEbKcYmAcUzTmXi5jZPfMYowgw8pE1Hd",
  "key27": "3jo4WbXbCcX7T1Hp1Wy8fSiJezN3drM8Qd8YMPzWnxkCXYqRh42a9ueoRUFDTbvQhWbzXjAgpdu5a2D2fnrSe6Av",
  "key28": "31WgJBUvZjWN4JBR19GLfn4CsNm6PbF7X6okQH78ehED9okGCLdf8Xw4FFrLjTfLG3NhdwuA5XDv4iJq1f4xRn4A",
  "key29": "4jRFLHFKBffWyV9rFC8Sfnt8KPsGwtNmMuYJ6cwkjy37PWJRuFK5eGML7DppsbxNmfLHjjekxPn3XiJJBis6xHsp",
  "key30": "2aENcRGQuP8c7si6vWrwvFb1a2i4DopoCee7YM5TGcnLTRAxy7shf2ybB554UsmKjkRypSnLmAgpTkfrJS339Yjy",
  "key31": "366nMLnHmqEnsfaiEECCUehsJ9ZNsQVZtJxQgJrCo3Tj4hrQJQs4zdyFCmtwPgVGdurdeWLMqUjjtVT1BodhzMwS",
  "key32": "uD7Tf6747dQ43AQ3brT5KSf6NPoPK78mqHjF8ouPYgR8D3bi9qwHbf2NcZ77pP9GjfKzRa843ejQWbUjEeJvqcP",
  "key33": "3jp2g4nAf3mrcuLgozPYUHHzwK7aKSvzQ81dSRF4KmdJRX5mYJV1LxuepCreX4ePiU3REo8dGVwvzwss8JcncVAT",
  "key34": "3ArYCP3VuU6mtDrAQV2VhEHxeKPkN1oGBQv9GdBrdaUrC1yevmE9LewKg6JXfMsb6zuL8SwBeMDLmGW7tX4YJLdk",
  "key35": "5RGvMSB6t4HQtRA6yRgSJL3Xu5o8pTXwwNQcXRVBqjo3FFM5gDDQDnrdKBhidY6ZsRRhdo5UpZZzAB2ba12RmqYF",
  "key36": "5cpgeKmdaHjKBjuz6NGv9XMM6oJVrSz31DyoFm9DHES5gHtbwVJmTod1izeoJ4ij1e741Hi9DVhAHSJzV9ipQ9jQ",
  "key37": "34N7LXwxa2d3iWTQtAGK4Jx7uSUy6ZYk3W8VqEnEk7TuygoBACoSFqchpyTfABFAarkjS1rQQTFceUd1UMtTp6vV",
  "key38": "31rPX5BJ1NY1K6hdBUcoKrMaKiRbCDD93VV58a9joJZWZcpqQTAQ6b4av8im6ftgZakmKCLGFDnkoFinbzwf9SZH",
  "key39": "ZPwqmLgdXA2xP9kwPaa1Y1459FUE3DxDobt9a59ua1MMJ8em5J85gHgwVLzBukt8Lr1gv2NbvXkoD1DZ2dcY84U",
  "key40": "3eaLxYkJYKnTkH4s1cGGAbs2dN75Aqj2dZfh78vCHx3VnQ2fBfSXS7Uefs9cKNFAvTzJt8hNsdRqES96XrtpunKj",
  "key41": "JBjtd2jddQXPt3dnLenWRKuKg85nK61VQX47YYaBY3J9GusNJwPHrJYQzGPkLx99hXVvna3nSBj7whVjNpjZPaM",
  "key42": "AB8YYsSdTZrJxbG4iwEcW77W5zw7UvfZ1ksWsp2sJBejTLMnkkotDXeMwq6URr3j29c4DdPkBUpHZ2Mgb6KJNuo",
  "key43": "46YTMc4VU5r3hb1eW2Q1tsX4W79amCLBLj2PpbtyEchj75faAFYLc6vwVSy9pGu8qTMs3Shy9N9YBmEZRGt4LJWk",
  "key44": "4kh33eHcaNUQ4ZnQTtb8VutbVqgqKpLSZj3Kyek4c7jqYmqShL1sVmjXvVDitcb6biDXmbjuFZ1hSGKghDeewc2s",
  "key45": "3ZRiRLroZW2wnfkSkAtPADGxPUuFocKqu5BqzbAcsYxrYYRZStBQNwTH1sTEswTbyTMwuNU4zvry2umwFPuDEHXa",
  "key46": "35uvig89TwSSeL19fiSF7SJmscHsJtrXa7v4LE3uQn6EbTeQDjThQPrmp9DH1JPwNq3eaHxvPJKCjrkqxAsmXRUv",
  "key47": "2nYWxd7G4F1CugtTbTyy6a1rytSZVvbxxda6eiyBoK6sTFLxVSsWixhgEqcHa5K71ZtzH3PwRfTihDZQDJ56kKEj",
  "key48": "229phY27QhyV8bB6qXZiu1Nhsbkt9rNqhJtetRwn8YSEFnYQMLR3qkD7q8DSeEjRBraQwySb5fD6BXk4NV6Ut7r5",
  "key49": "3dK9herzH3zScT5RgeQNZL8c4FXRbLKtyNhAKdcLvguM9oYATz1MGTZbRhMYL9wegm8zWRhUK1AR47vf7GfCKWya"
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
