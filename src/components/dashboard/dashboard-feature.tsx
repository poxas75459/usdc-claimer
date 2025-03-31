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
    "4kz6XZpxx7pW5T1vtRHKkAaisS1XzPa1pd4fYE59tKUf7NB39unpobPT9wJibixcaBy4MsdvCwQVT11RiF6Q9irN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcFxQq7Q61RfQN6Ev9MK5MewxM3yQcsAW2TemYR3jF3TTW5gHTAhLDDFC4N2H3vrQ1YYuJmFWV5pCWzbTVY9kb9",
  "key1": "bkmvMPd2jbQJNtL5ync6Mog6c9wm48q5a384QY8cB4LtxZzqyRqADif2M64PsrhV7Gqai6xrFkmGQ7HzstcAegx",
  "key2": "9hD1iqMrD7Do297D9L2ADUTqNR8qqjXvogrqfviXfqbaiP58zqkj6mRwMu2uD2GwXUn5tN5bVWfJ7WZebXaZSTh",
  "key3": "2KzFiyd2Hd3oRtbzgJhEgfFxTy3mkCGy6LMiwnzdZWPh6q8SR2UmUeB2W1vMSTDwjb7y45ZZJNN3wWTAH3Lh6pAF",
  "key4": "2RGPej3yfV4uP4cv5YYiwAzyYMny4sFQZiTdMMKBqwgb4VXcGcLvZK8JWggFhoNyCsGak77Zw5ywDDdK4y77qDsM",
  "key5": "59B57r6bPPWHjBdvBWswt8zYUU7h1H8zzeS1dSaggqWw2b7M5jifnnzfWsAXjSNv2ANpMCAPU5onxJiLy9dcRjLp",
  "key6": "Zn7qaDEuNrWt1HKuNrKSiybmgupWFWt36PdcvXB5YakFxmibLyxBn2qjdaroNZJw5uLdWKzc71kSoEW1pcr3n2A",
  "key7": "5RcNBGCWKmx3WJ2dS563BzYcjBQJEyRqn7thQYaz7dewMKUPBTAgkDSCXvX5QvdM1FUG3G6bSKxkxy2E4UFtM3pD",
  "key8": "58LRromkXqFErzSJHcGtUWbhtengzcR7mvETuKQ1zHKxyAwpFjxJpyq51z1q5QWVeJ4RnMU3YAGyKYdHFaiN6NFW",
  "key9": "4Neu2xGcEpTNvAotyPk7wPq8erYRA3a31kqKsCZhKdZiv22Miu9uqX1TVXva2pp53jydwBjhY9QKmCBEd1gRUzZb",
  "key10": "RHGDYvq5A8fPKkW1cWZTpj5ZzEjWmHN3wPqpYNJ2TJfA1dhwreU92dHLheRio16PVu3wSZmiFvkkrqGD7ZzpKNZ",
  "key11": "27hdeEKSpjzs4MT2QJZafhHyhev9M7avb9LTRZuaCgGxqMmLJkkdeBiwZvtSP32tgQ6PCVvYdpY3dAhMaaZMpKca",
  "key12": "KnonaTWtrBQpYz4Gyn2wVSvoLtwC13MbMS86nc9UoaamNGN6YnKbRQ6Z17HEhhdS8rBRaPxMdkoBWg7JJcQJXyB",
  "key13": "2L6JjqcjqeXwYRnWB1QhLsBxbY4WuJyhExpmBYcTPZWbUpwkCHMRVrDdrX9BrDZxEMcQ4MxKozHhZAEHcBMpqv2H",
  "key14": "2nBJjgbAFLw5JdCg2DUXyNQRKGakEGBasLseC8sGCWiUyeWQQPXFpGczjTdgxjpn2ML6dDpqP5CUCuR1Pt86P7pp",
  "key15": "3PEq1kJ43rFUN1YVXidpwRAG3wD4L9yeXXTApPmd21VKfCM5Ju4jXU9iw27QT2epaMRd5fXVnwX3PhgTLNvyDjm2",
  "key16": "2VCxHhvFdiA1Cn65nV2J7JwRBxiJiZapskemKUdZ5KxynHNZWwc3vpkUmJPikzy3Gq3wZkAKuhkbWzfc7kkUsgFV",
  "key17": "2KupwZq5UGCLtUJqNfYHX1teTRmqgdMCA5B4c7GcvJsDizMQYrHdXDfn1aMGc2KH46U3bNB9Ah3EpQah7uaHfHif",
  "key18": "23GVqnoedbCcrCUYXoFU3RUGs1FaGkhxYfBoUE6CzB4BjsuZ1mQd16jJVCxK9V1pS6PLYbcpXuwsadtcJy7kUqpd",
  "key19": "QXQ2LwTiQpuBxJaD1vSJbHiMev2aoKYJ2Q7vHT8AQbRMPV8foCudSRpXBKYmR33FYSb5XotutiViq1PmZsvjFHo",
  "key20": "5dQSuNs3zzGuSugFquAkyMJbaoo6r1QzCXGgBrUXVmP9cDTs7KeZKGsggaTu987zhSgcXzDp4AusT8Z2Smz5FCf3",
  "key21": "5k3KVYJAyqYKNvQaYuGSQTWsnDKZ1pXU16H59M1oMkdERDRkjyr9JkziyZhVCqKgxxrWLz4t7MUDRUfiVWRhTe6",
  "key22": "oagf6fRgMPmpwDUCrH8nQ2YbqEZ6vUGZ3QXPSapgrxgEDb1dbEMrA7jGfBSQYSvwp2RhWvQWSnJuHSjA6D85BnR",
  "key23": "PEcGNkinHsTCyQSShxfXE9QBZ6HYHSz2u3D1ykasGs8sopdz2pA4pzQQfugTm8yJNZ2gHqi3Kk3nY2zokySMFWW",
  "key24": "4Fugrznkk4HwbNz3YmMcQM2vjk2dQAFMw7V2JhwP1VYgWqjJjhD7W61SLCqZ6LVC3PT2XZhgaJpespN4JbgdCxCi",
  "key25": "4quHgTbrHH7yvjsJWhBaGQXNdFrTwkU1qhGoTGifA1wnaf4B1jwYnvbRsfsm4PniE9kTTWMivqe39MHYuoCr6Qjs",
  "key26": "2ndCEocpmZgjajvAX9HuctkjnFjNQ93nzvYNvxFeQ3LEnMVrgfmnbGrnr23SqFYyfS2ujvBfXPvdRGfokFA3466i",
  "key27": "x1pRQZTUzVbgKh36E2wgUh749xY2u9uv6pmrUNkJE6hqvGmMMnUmZM1qtvphtjHNWfy2KkQb9om8bx9h6zDtanA",
  "key28": "4Z8gCpLhV6sqNWtMfWP827vE73kMyHDBoQ8ECfPjcv4qmCc5WU4Ntvfwc1yBWwjpmzP3usaP7DbaCeMYcFNAkVQ3",
  "key29": "4VJdm3oQzRMretziHVAc7Ja121PQRhxEwEiyPh7sH8xdwFGDj2iSgrM5AHnw5JZfvmiCsTaKQrJDwe4p6ee6eDng",
  "key30": "prx3fji2dufkCAyZK1j5yjnVcNz6CVLSJoU8fdo2g8eoLhXg2uJve4AYYxLtzb4ayR9symWSsADFsX2q9QUUqxU",
  "key31": "25YA6HnADqFdEURFdzU5AMSAkQ9B8p9dZioi2oe2kdkAzdBxCwCmfxxV1E2xTf3qGHYi431qMK31YANCqinTNa49"
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
