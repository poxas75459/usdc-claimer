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
    "2qA8rhFBaMEsUzZh9zpNZWy9FspVDxkNZBKBVAdiC72CfMUbJ8ZDKzzmV52XfC8WqQem468KiE9TGbyiSa8TnnDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9crzgU8EVYWpwsvAjtJ6RDZmGUz2Leg5UVYZtyeB4EqHfegY3jT2u3dfzGnU8REupxE5pef7bkGowZdaeAQCjQQ",
  "key1": "5e4xVSdBjAL4qnH7zn4a3skuwSyuN5RamEBBTshukBfybQz4hzoCje8ofJEPekXgEif22d86iTRVL6kdLeosvP52",
  "key2": "3TYomTkjE9S5WfQH6jM3AbnL773rCRyrYF95wLR1KCKWDp4SHMdkUubaYRT88sLxc5Vgy6Lx7m9tXs7XZjYbZZng",
  "key3": "5dgnaacD32kR3cyc3JXzBCcv1X23yKtw9CeFsm8rEazTF5CDVoNGqYaHhAjg4AU3wZY6yuHezjrY84mLD17gTPas",
  "key4": "46ZAAPXNPevb9Ythh4fhtNFrXoQb6i1QXHM3xxY5pN75gP9ea7Jtw9EGpRnSMqC93Ro7cmmGdM9Ld5RqSrzZ9up4",
  "key5": "5fHuZiQTtnKEVgH31cggJjxgDBUCfVx5Po3PFNY5qDGqXyCQVUy4MXcgtrw4U8e9jyiUbMUUfswxHmByBWj8ZUHE",
  "key6": "toThhv591Eumj1edZtjbdQpytvRtKG74ay3kXXZJbsujVGeAB53yLTqYi1c9PhtR75bu2rsuiKF7VHUVhkFs1bd",
  "key7": "SakM2UDZEAHorwtmRABn3hsEGtixnTHyu5EQMutP32s9GYUbnhosLkduJdCr35wR8TdNHi1e8gxFqZxBVi669hd",
  "key8": "5T6zDJSNnDHPbpCLmgsQ3giiTi73ZwA36YvQjX1EsXCvky6abpDn4rgTJGgt3j9ieL4gxKz9yF1LXwSpV1Kp5Qbq",
  "key9": "4SG9YTxWxR4xbCmhd7GZmSKBKLpZ9RAWxiBkUGB24styfCDaEnTPsaMZXW7g28wJzcJaWetxBHsv3qfPPQ9U4nES",
  "key10": "2ZEgEKYUyJzdHZvht5WH9pGuvL5gQpG1gqF1f1SobJhvcQdbA2rJ8W3k9DMVc3AYm5Seyi4m9WX6jj3UeSdZkhp4",
  "key11": "4dpFCqxyoJwwXxEpj2WSXwxs77Aei1DF9M8JXh3Yjnj9xgK9N8ipAULkeyP8Jy7wFMtHYJhHHCX3U7UdRMNpMLXy",
  "key12": "2vvhowhs9Vg1sjd6dDJkg2Ms9FDoXd6dRQd15zPH3dpr4TkQ5GvF6ZyWKQM99D5KLeDo7c1CrZv9jTpc1JZCokZ",
  "key13": "koytRHoKaYNBFdvo97jqg6PopA8xQCrASLmfMCS2GcM9uWVqCbH9Rck9D5mLfoS2Bo1iegkKcJGTfoiTPTXUwC9",
  "key14": "4cuHbtDaYzSDMXrLkiNE4jav1kJPvQGK6yLgp1QVyrRUYctJ9v9pgce3zTquybno6nkVqxcyDh8LJ8vQRK35tfUH",
  "key15": "5Q3BH2iigeuhSfbnfMy6PAac2YBxtd334sageoxossNUy4Dmk6ihpnWBgPY4fZfvCZiPEFuqKXx1KR8qWfcq3o9C",
  "key16": "231nP7zKgakmFbtQqVicLuNSVJkhL7Y1gxXWrhvX4gCBVDF4k76TLYsGHy8KwDECXpvQmF9R41MqTicZnYpUucFx",
  "key17": "5Kv5msekjVAuKRh4G3LJvE2vrL4NqnkRGXniFwnXrVxxKgZCurhBGmeiv7DWJv7vDHb6qztYKEkY14iT6fCRkwR2",
  "key18": "oy12Wnzdo2ZfjwFj5w73QDPn4nWnYPzyNZTnqodSzfyQYefiWSmnQ49FXhk7DthHeJSLbvxL66zcvB7eEDxdD1j",
  "key19": "4iMAoBd9DFczXm879E8bkNN7wNmWrRfCh2EubqSjotKFBtk7GB9hGygqgGUL5PctwDY7kU9cVR2cbSpM8izxgfn3",
  "key20": "5jR7HFuKVCdDnnsVTjTmeZNgGSu1Q3ZGBLeT6mYgWo7Wc4ntYudiwaTHZB3VwDtTBk339vERt3g9p5ngAhyhnqTV",
  "key21": "3vQJpbxZzApEwnksie7ktm6VWnLyAu8vLYUUFZ9xgox5V738s25MUkv5RUoX92FH11WkmtdC5vpZrm5xPxfWdNkc",
  "key22": "3HjmU5zC3zVzTKMWJLwTHsKXAx9t2zArkTj6EPsLDzJnPpvTr6hRQfQ1x6q5g17mfXvkZz6mLQBoTbtDyvHmzuso",
  "key23": "57JNb2ReDPnRX7c1DNWmkyMneqi71uazcPStdeLZ4kyPJ9Twqk8gPx7tYVfh6bVm65xwJcdY67c6jDWdpvSdfaJJ",
  "key24": "66w3Drb1oVpNwgMB2mqUYcTVogXtXxitRMatXQYMawLiJnrx93XHYVneuc2Me4wsBkCR5oqNRQ4inAVRkJBd4Q6Z",
  "key25": "XGbbzZi2yNav5BbreoimXdXNNrD8V7Nwou2oQjskNXjwmf2VMD2156KUcZKA8ePaK2Qx4wSyiDFKiBTEQhZ4tXQ",
  "key26": "3vAiUbfNA3TXuW7RmEiZsTDwuqNrPdXgmS2EH77pubiqpz4ScgqRdG72hDq4TmCzNc9WrLUNtXExkivGjAABxrrb",
  "key27": "SagS9dnntmha6x8PKTNbGZcADDJ33273VfmZEjdxNgoW7YpPumNbHznV9vEwxSNFurptFj9xvMFyc8jrnbsoRJX",
  "key28": "47m4SwQwytmCrhygHePQHuZJ3NsVV3dDDf5qJasWpkc8PA4asRSYjhrwjjUyUH3jyPNeuny21DvLepQyd8viGAFQ",
  "key29": "3wHrTiQ7eBixzuEzf591qmfR86HKUecqjJ1aewjHBxZbQ3cg69KX2WaXgEymxNhZt3qAWaVG6C6mRh4wMnVGkmMK",
  "key30": "2ztkVwyHhrUuYWmfS1fwSiNEt4HNTAkE7A4Xd7Kyua9LZVXKR7GN8SGsc9afFDFGH95gq95qS3DhWw3iF59coxUN",
  "key31": "5miwfkvyvsb87CQ1vjR2JUfTZFGnVcr4x59Jn4LwgwREK2pwWyLN4t28cRHeNpp5EU5zuMbC15JeaQjfUb8otRAW",
  "key32": "5NX6o688EU8JeWbrYV9iLkmFkiRAnbQcVG7YL92YK5TSL8JLJGVxGiXxgYb1jgYwKcaW7TP86FHSTfQTx2TpMpQf",
  "key33": "4CN3YnzkzqBGctG9BwCxSpnM6mfGyXggqxAT4fB2VHLzHMUuC9Y9w9eMtDy655BAvDZPCrLKeaDP834GkXqTKBKp",
  "key34": "42wJ27MbYE4vYrjZikM7o6WXEu48MCvxvrDZUWdGQqse4TyYU28L6Az21G839j7X3hF3QbUsLDKezxWJd2VZ32hZ",
  "key35": "9yDyMSEJNfJ3yvyMyrqtyZTFBcYzhmceQNELPKUzBTG6dytgvUD1onvTuoD9gz2trLGgpTUdf6nM4Xi2kAheAzz",
  "key36": "4QXpFGWtv3icL4dvPaeBTzbzcgns1gBirUCUJGNB5r6zwt6PnumPcj36GUgZMnQxcpfXK2fCVt62FGhggzGshuPv",
  "key37": "2BgUeTWqbMgunNyGggXkqSvsebj9G88G1kWDDDisNfevVDHPUM2mHivaZEgB1JXi75b6DGY7EDEa68FnuLTLk83D",
  "key38": "3AJmmwy7Ga5wpC7RnBhjXzgF6Rfbu7zUANDNc65Kx2bbTjqVSMhAMiPgssWm3tfxQkCyTcWgNVfZbr4gHrxVHRY4",
  "key39": "4D3stnPGd7J5QnmPuVWcvsvsSx9GdVoVkuBpz9y9h1vgH1bnqfFuh6MPrBfTQU1eVhxVHiHa4uJ7wERQRSzbu9Ak",
  "key40": "4JA6KuKVrRLdYitberrWHmciPedARQgue1ra83rEVwswVJrCadStdpGkDr9Dz12mHF3migYWJUtpKusZS7BsQY3n",
  "key41": "5PTdBBzFJHToKNPJfihnL1DmRXwV1QgtTG41SxLR2e4LujNo7WtSgSUxttExFidtP3yoXRi35EtgtuyBotEbUgdc",
  "key42": "2whz2WEru75VLh4bLeBWWaBuXjjYrJMUhiHVCXdcu7dbZot7cPtosJULYEA6W7Vj5f6NTGfBNfwu7HVxaTb67xFJ",
  "key43": "uR5FqubRg5aujPPvSwFdxN7fcmUYn7S5YgWJdGUDzepDUk84hWQnHTvAw7NSa8NMvMq8quZyAPq3qXpEnDXDYHs",
  "key44": "3uYyrEkWqaBSuYf6tBhYDgrP1qMB7DV6ASPfK6FWuCLhFgNoujCHoanfjXaS2GNiHcEPp7VEyiK3CZSDRLRyAY5f",
  "key45": "4smB9iTrqCHDULxSr44v9W84ebXEmDi5NHdoTaiGPurXooBVytXKEdgC5Cdqzsdoo4S8TgjG8P5fGksHBYS6eUVh"
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
