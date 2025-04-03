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
    "37k4ERuiqWriQZe2mBVSUz9Jw6bosGXx14pWiwTMUXqFqYA88aGCoKfAQ7oXaTZWnnq2jMsDG4v9arceA2YiWFiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQCwSQNTbRfngvbHp68RbmzDVBhit8Y5HkXdZKUiHWWmChU4nHJyEPFPoQQwztfxeNUKD9ZM259n6X1s9fr8n6y",
  "key1": "3Y1hSLVbwEcGKg8jo2ReA3CM9pJ4nybqDWjg8wuh97aW4tfc3uCrxFhyyQrRnaiyjEfD2yB1tzftCvSDvdqZ4EXD",
  "key2": "e5sK3MwyxNhHNaDWWvdYQCCpbb1LE3ejX8ntMCVf9KEBEVpciFsQB4ucqjt8Pf4k1onJgXmWhMj8jLTPmP1b8CL",
  "key3": "2ynCTRUXPZzA9zC9Ehu1PhvGYWHhUbj7GgjUEivQpNdETzUVHBTKmrEngwV29Y8WqKscbHceswim3yyFKDTpjYBD",
  "key4": "3fuJWrDNmKqnZpZe8b6BiBpcmFioX2iztMYn1nnSDeBkcNvwBm1JoBt4pB9bhV7RA99nUEb8FQP5FdXQcx5DXZ9t",
  "key5": "3utKfLw8prsHPsghpuDjQb7hdPXLCQUWu1STGQV1ZqSoPLjAZZWoiKkmJcafMGbh6nXoR3HJv8xkGbXCcMLeNGuA",
  "key6": "5cuMRAPXBtntxVjoURHrTGgYXbJenkddKGtsezQyatAStZRjAAvPwNvrYqr5MbsVG42M6CEZkpo6sNV1oC3MdUyQ",
  "key7": "2GWMbb65j7EvAzm9sRMf6pRgPjj65n1u35C6tDXyLVD6sESZB6tmknvtztJ3SsZPiSKEKFqEbxM6nNKNbYWFzz6t",
  "key8": "21qNHVLePrPv7ZQTm3trwjYgoPqAKgXUTTHVqvssz7FM7BhnccWJdb34XfrCnknpJnd5dcgY1jY7XzUxj1KRCYc4",
  "key9": "2ztkWQ8HVFbJhEqFnwGCHfS5jTkN1MfZkuKEXx7JW4z2dTAzBZsfYREAUkjXkacHMCRWamm8YdF6kqyVtxTfat7p",
  "key10": "3koAynpqgpX4X8nP54j9zsuqzMe7VjGQcZBxcGXfEF8cpWB8ALpf7ntncfpMPPXg4YiTVQ6EkB9yqSBAm9ijnTDi",
  "key11": "pmUq4zQxjJdCwnNtdLqeX2dgxBX1qGo7eLoCx3vihT2QbvJ7kaEqDfLj3nhpCApqvrSQJQhb5XzSp9L4uNQd5jF",
  "key12": "yzrbKXYyJPs22Ubfy2zeF7AkXWTHYycnhc2rxtpMeFgtFbsVAsdEDvPYu5sW6WAJZpsBjTJHm1HHkxWWmdfPidV",
  "key13": "2swHYEXH8KKT7AnGgYvPdzaQ9STQSCidSUEQFZqqXKtULrTpPog5i54dnK6eLFMvCHSonBn5u42ebZ98C2kCF8zG",
  "key14": "4kFD8zSDU4NkRzfpoweVuaCj5fXSAYbssCHuZ9uaodVNKabk6BhnHLT6ysjcBFNc6pMnKH62GLxtezXr6UYmHTkj",
  "key15": "2Gyuqe9LiSWCpSaBt3eZY6LxCtzFFKevduLZ41qvjDfzdmmHLMFKxeanxjr3DTknX1k6kyzb5xc39d8MqYq5KWmf",
  "key16": "9UEp2bzNZ2thbypjmcfzp4Csr5u1UGi1g4JntEnXYfDhjiywK6tNruWDNsRi26Ja5WYQxoivcEcun6u1Vd7KiqN",
  "key17": "3kzFYFK7dDMMSsGp3ZpK7VeBMaNj1G3UPGu1Q3R1NNaeRsjsbdx6cgVveqZ1CQK8zS9vYo7ZnTs4N9RAFrv53bwi",
  "key18": "2rhdvYDN3NNyGu3xmiL6TV6nh57Bk7kneQqRFVQBx9rKVgSkGu8Ro1B33YSejA13g8ZpCwM2RZgVDNu6YsBtU98",
  "key19": "4nToWX9g7e8qxJQooedbct1qCif4Yo5ukGdpYrpJKqqNDsEjiGjGJvJFyXmU19C67BsZBz25Dsj1u7Z8WMKNS2Qg",
  "key20": "hs7ow26e5ngfGevqBGbsF2M1c4EduqT5viReZEmC1qYzDSkRp3MWvEq4mS1rFnFbw81dfo7SQb5W6fdFp9fuYZK",
  "key21": "2XMn6YajLKv2SEU9PCxSmUX7gFPPuS8w3kL6VWVzjsVhJakmNf15A8qzCczuvEgbFJPnxB8YvXUNdqcSc14hmo9K",
  "key22": "3t83yNDq67LQbN5uyYTT1NiETcnFKbq4W7P7rxTMZ5dMf3uDGzAwoN5rGeMRUcHaeibeznedfvuspn54AxnGjqhE",
  "key23": "5RQdu1yb6TETP13mHG4ouMEQBk4EbkcdrVWiKMEyTnaMKtaLg97DGfgcUAyqyaidgjdxYZHvVYdCrzzspf1XbAi5",
  "key24": "3GPCQdvmxyJAnYR7brnSTZ3s2bC7aeX8kD74rFCmP5TXmohwviyDJ4zy9U18u3TYD6p2VKkhUJ5nvGKd8ZmByA2V",
  "key25": "4oixx1gxC11ncsTgXj5Mnz7j3qfPqUVaZfc26sxim1WRkxi2pULoivfsfMfvwgNKgjsVkxA9HHuhdiHj8Ct6e98C",
  "key26": "3UuFwyB1hJkgRPgDU6DWqGyqSBBNpBUUidh4Vvju4yeHUFuDviaS2Zo9jwQfkej6Pm7o2dECiNpqp578sygkr1ZV",
  "key27": "2B9NRgg6d69zuwpKDuBdJeq53iWgC6SbsqCF5k7oq7kqiNv5ZpoMRRPZSkdMzWZaLqxSbEV8vBcJiTyDa7S6Z6b5",
  "key28": "2bqL7ZwabZ3fvucDmnYzJn3N59gUVgof3hkRm1FS5X6TutmHKSQPEuDpHEWdmvvSWP2sDhKNa6T4bsmuPVWyhmyd",
  "key29": "5uudLnMGSR7S3HfHAEfV5cDMdzQ5fQ7iMQapeoKd4iPm1p6UfUJQNSBBP9tAbtLLCzpeGNSnW437QseS84Xyorry",
  "key30": "5wnyhSHrbM8tsxZALB18gx6waEGLFyVunguyNy8FjPSmZM9wzuVB5W7yDLH2eEDmFmuQRfjnCBNjDUKHYNMWEA6s",
  "key31": "yWTPfc4gaYzS7PLesoh4HhSUuAe2XKjMttLHBsbtMrL6DKEVS5S2D6dP6WE72sNe6Pa4e3coSvyvea168xfwYHB",
  "key32": "63A39oHGVaNZrProUWPcu629QYFmubajMMPHFDfDv9QwdF4qoEoGhuGoVf4taVLj8BaCoVjXFvDXXfMoHhreMFq2",
  "key33": "3d9PszWoMKbJS2QHMo4hT6pxwbSrWyaRS5tNwLTK7GxwExYRETnThpdpYkwTw5qGjHeorN6FagCvw8BsqnQMXgiz",
  "key34": "2DE1W5NM4qTU6Qe68TFqXASoT3eKJhhUKJCJKSmKxGEYHWv9yd1LNeVuxdCabvLtnLij9UB1j7DF3rhuJsjGr6QH",
  "key35": "3snPiZvxLEwqC3ZzfKJjw8NnvTBgD9g4bvEAzrX8CjJmPRkU7bKok9nxej17WuTKzZH7GjEhqz6wR6zSA3fCLvv5",
  "key36": "38p5LDK74nNrHq1Cxv1MSu9Mv68b9NQESEVw8HeyYfYdsSSynQiUhCeAaRTR7Fw4Xbjxiwn591JPH63hqvGEMfnd",
  "key37": "Ft4cPJ2j7Nny2UChwBTawyX5QbQKAH6QepKrocZkgmCiWKcvDZ8mx8JYoqnxApPvaDR3mqCPZ9i5GPj7TiNsipx",
  "key38": "36sAgu7VLd1YxpdtV3QwsmkLN3vckZ7MmwBxzjY3fi9CBiEnK7THxXkcu6mqDu7kMRfjRJPo3fRpRzVny9aanesv",
  "key39": "2SLjeU2m3jrkrR6FJ6x1JNrqaKNgqST3GadFJY2a1YgovYLFKZbL6CQgs74z6Zk5JL45pNF3YqvEMwggEpMn8UiQ",
  "key40": "2VDQsYs2APiuBS8cHQBY444JZC6rWdYrQPkrVjJnqyC94UuUb1hEd41U8uX1PrqXLYxmQm7GE6oJDM5U1tLttN86",
  "key41": "2nMfvy91v1syF7o1P1fFfzt4qSM6VtznfVZfSgt5qQp5babyCjY6m1dZYhtu7A8frY45cn7XrBfXzraSB3H3ZgAe",
  "key42": "eT2JMtgkHt43pWrw3DKW5bPa4exnCHPPM56cdMrRgX9fwGCK1MoULjCphVy6KD5F6ZnBeJmKPecHvSkjTSre4LW",
  "key43": "p1MhQPKZvefJ344Tk2WX5jnSAjNaJ7Zto4NfLbvmk1C8bKkkYus7t6MfpwVgYtWKW3sYpvCEUksX9raWdG4qRGL",
  "key44": "4gXCHgZ45hv8h9iPPrmGioTW9KGHxnAGe8T3wgwis1BxPM46KsVtv7odQMuzFezpE8EvhMzXbWYs31ByWsyTWxqE"
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
