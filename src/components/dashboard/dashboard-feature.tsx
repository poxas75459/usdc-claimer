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
    "5i9ub1fU6JdprMrxMFDR5sEcDiw6T33n3XHeLQmKVGmpLSKSERdkQY69evPpxpbiLnPcoAfhX5otzaCS8J2xtktS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25368XVDJf3gcDAurvFwCmKPpgnYqfoJQDJXk4kaZ8a6hbnmn2vSf8BcVaCFR4PUjGeEhrXr7EwXnJe8EUcDbQep",
  "key1": "2b3NC628Fb12EfwJPR1XMv4G7vZS33pUQmhMGGXX586Pui4MPjvFE49LCUYAv3FnKGtg2KCTLUgZaU2HQqNfRRBA",
  "key2": "3Rs5S9aC8gDezuUNTvZHMx9amHei4gvyfNSqXoyzW8V9kTyExdhdrhKJP9ftGJXoZEZ4Xw5mh1nZVEw6dV43okmU",
  "key3": "4zPMY4uqBTcMou5tgNKdaUTvoU9xxhkkpQhj1QLGPdhLRRV3kfnxCZzjo89cd3r6okvXSYT6kwtyJkvAheaaUuyn",
  "key4": "5wpJZ1ecDrCbVry4yeKBViMEdeTdtXp5okgst5C9wAKxJe6oemiEdhiFJw44VfPZa8yt8wkXyzzFDPwMPZaLRyiU",
  "key5": "4uuuDAA3mo3hFT8Jc3y5Myq28SXQ69iEeXagDQS8uGADfSXuEry8uuSzaR9rTgs5cZMc3TuymH86Kz1UDX1RRjF3",
  "key6": "4h23hGVnRim9TzyaJ84sf1Yz5v8jCM6b6tbHj2tveSFZU9eSGyQuSaMjH9kb3v5jEgx8PWjPc5DBvkd2W372yZpU",
  "key7": "34pRC9UopdCd9Hce7uEPtWZyCu2oHp7U3Y3F5rqKsdMjS6Dp74bCjxryT2TaWWcLHYzGKezQaafPfq4Lc51Lxj29",
  "key8": "4tmU4Qtx4shJjJ7sazAHBSUS8oWfTpwZVykQ4FwA9R2qtmpAXLu8YbCcA5eRcBmvvp5ZKdwmXZkUne9diJw8C9Tb",
  "key9": "Y8YMeA8sYt99HRJMx4YwZPjJH6qyyW6sSwbFMgyQh667ipno4SHjznrma8bwv6GhbHqKCtBeQFVeK32jrCTSX2T",
  "key10": "2RhpYJhBDNuGLBoS2kLtKBwsNWCPpp7ebKUjw8nwiJXLDZSfP3mHcDTfEmkbdKoJWoiWrgbaH3UMNnKdxmNBADbw",
  "key11": "2wpPHQ8Q8MEyyBRRvPem6TkiqZTCYZHiWPiEFd6kx5ubPxFg6Hr54mFFs322wwGacpQMBTYiVoihsynD58H7YtqA",
  "key12": "2cikoFgTzrrUwjDmYfqoXDG1QoHeiXAb4vYWgPzgydMfzzEcmJBvGTxvgR9uKQPSjJK3wrWAEVES5Bc1V96Miqt5",
  "key13": "2kRkkz5Ljhu3usXemqADc1zt6B2c6v43xGMK8nkcwzeooCQLDVxzeA9q8bxTjCdfcdi7DsghLPxMdcP9xX8HT8L",
  "key14": "4zvxCL2xaSKoSgB7LuVBg2AeLdAWx79vjJGw9H74iYcnmthu3fsAk97fyBC6Wf7khb4tmxyNiVsnRDaStEZb3qxb",
  "key15": "5zpE4wwQqvH4aSN7G2kdpQ6sHujs5dgcoVadqDGSq52rs4udKXwXeuY5hLZQgNqP9aA9HVXwjP9z5iYWiqAQs6gv",
  "key16": "43uMSp1WH9U4auRRihXACo6dArGqGUJBSxQkZQoRbj4RTm3zm2tDwe55hE4DLyvob5ihLD8QvkqvUFEEtBUvPJ94",
  "key17": "oUQxck2N59gM42fJAbSHHcYJVydHoM15AAF8HPnyGX7di2RybWz76ohFDRoPvMZjVTbo76SMJkMeBN3HfPDvyWn",
  "key18": "4HrLRVDAvrLhxkQ9NEjFzWmhkWSGR1FLJ4owgQCnQ9F3gJwoikv5MPJfpQgQravU4PR86HpbSW9kGwhhW5GQrk4e",
  "key19": "51kwU1WeEkbW3ddy4hkCbmdH394atFCyRwEoU5G2PcyfdviDyvnNXwYrynSGLp6hqSzQ6eM6M3K4b9niHnzioaay",
  "key20": "CV9w2j4KGJgaRM2UuFJCpUEwJ6oSFQ54zpwcScnZVnR5AoybWtC5epQpagtYLbhMU73wTc1YCtyJ2BNhMXfrMAe",
  "key21": "5adhqrgMZxSTUkBv7uRH5gspr7nSR3ecevPBM2oGC2EADUub4GeGRQ2d11HaL395h2ZsxJNpVJDff3MiTeubPmuu",
  "key22": "3taJwS1YAhjDMLif6CA47jEy6VpUFu9H5zUpVVjDY4kvEQqbxw6n4QRek84LFKqeSQyGP6oX7o2CnkcwoMM4Mnqt",
  "key23": "3gSNRKwWWxThb9Zuypg2oiD7GZX5z5XoH3VnhpEtoSVJxbcoFfwu32bFyrcK3mqdfiyvHAsbvmXnJNLen5wXncfw",
  "key24": "3e4UQocDzz19HNYWKp2qrWdvWJsyCdeqhZmzzUiwwU66drDbJiqybuSkeTYxQQioS32Ko1EL777sU2nigTZhF6cU",
  "key25": "5SGsZ8xZHTanfvqytEWDs4qoGmVjz2UEcyiPwKY3by4PVua9YVYTgjNto5K1tehrkcqyCPLPDjG3JnoAApSZ2vmv",
  "key26": "4Rbr8QpfWcJMrh2iH5B3WvYi7xrhSLFHpRznk1JKDvMFuTrFKrghiKNcZZ9iBwUx4wequhnin8r5VXHVTvZL94UC",
  "key27": "2iehGMUyvapCSeEF3TrfZH53Y9Cc2Wg44pTKfRLj7bfef2nxNv7vX1oBpMSYP7R9m7U2s8edMKpFLspUfmT7bD5Y",
  "key28": "4urAiEfZwTXXucgBSZjg44a5ZRr53An8aLpktWWp3YTdUUhjqnQ5HQfZuLETtCCVeBnwuCyaw1JUbM1ydiFDrqZx",
  "key29": "27E2ihqTP4ovgX6BWX3AKaKdamMdzwEgXDLpJB4FG1jWHU24hJNDS2MSiEJN4TuWEEpNT5pz89Hd7KsULUUWjWVY",
  "key30": "5ZgHCDvNnARyJDDrKYeJvjAqoYA25TBaUNqAVPbnvVRekK5LzXNcxdfCan6Uk1TkttEWUir9Y9ihgRffLT8FeCok",
  "key31": "2cfmLLzJYmX2RciDUNqBJ1QZcDjaQzpiCyYDwYaPsSc8i2nUrsE8t4Dcze8ABgbiyYExxqu83D49dgdCyJpMr9CN",
  "key32": "JTqqFyow2QziBdzaRo19YfAjv27WBXSQCWFGRMuhWWs9hSYdi5rpRZYFvxVwbRjrzKedbopthxcKV6EE5TkRRki",
  "key33": "nc8gvRA4UHKvCsRqwtNUJhfX3saRmNC13MJGDXhJagAyH38vYcKpt8JRXvL5q3tQwJrrg5SPYCiHJSUdQvhwC6m",
  "key34": "3ByaYGKn6EeYFsBAKzhrn2W8JH2RKzFXJcZjmjvxYrAbznQeCQwSqekaFrnUo7rNsukad9KNNPzZH4KopmRxUijf",
  "key35": "4t94CG461G6JUwS7Bq8n9HJ6nJn29P2kgArHw3ebcyV3G782ajQeCD8FHQ9SEDCFnQiyragVhLGU98KCTYwEx56U",
  "key36": "FP78TB5jZzdErH67nYCqDLpGs1qJ8LPHso2tq8MgJ7hHhMyv3XG87XfFXBRMT8NkdhKy4u39wnjwCgdDrujJm4C",
  "key37": "4xZTtue2KuyLfhUNcoAauuACujVYHExxQGw7ENGQfas9w2gMXfDfonYB8N1pE1tcWwZ75JWJ6wRvG45hKhaKeccw",
  "key38": "4uGfewJw4cLSkn9PuyGorx4MhEozSWWgWkemk32c5YUDwVhenBPBzv2KTQRZCnCTaPivnrdBqxPvjiPyfbjNEHev"
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
