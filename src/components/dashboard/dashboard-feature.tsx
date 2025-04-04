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
    "5L1z32afnftFAVnhZKWTJkpZw9esukNLKH1a7ntV2iJvfdvpnTNacFb9YZ7J6XJmdXha2aKjUjLaxJB3LP53cx6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jbKGmgi5HEUQrDxUt4WUFyWubRZacMFzkeWZSxfxEp3PyQRVM5v8yQ2A1ZtrHQaG7AwAbjfPANSZVGcDFS73bRN",
  "key1": "29Vc8tpYC9BVep21VcizvZHtE5sVqC5cFJ91yDLR5X3w1nUiJeBM7AT1zvUfPwxC3fG6HwHXjxVknT72PUg886Jh",
  "key2": "4CD8ub6AEREXTNND7tpWY9gHGuyL7zz39v4B7V1vdZXH9FCxzZ7QEZ2UnqTp9zP7NXB7otNJ3AePEMjEbmpM1hns",
  "key3": "22UmWNyxJfs6GcqLGeHbRedoF6jLQbBLA5mmRkV1b9kswUFs1N3v7UJbntVZRxtu3K9YaPqXCykREr5venMDgGRb",
  "key4": "5H4was2UT8Y9i6ucZPp7gJAD5PxcE1fQ5FuQQcBxhHvdMBCet3a2Q7hePZhaA5WYXswh5QrPNr9GAcDtabqytNoA",
  "key5": "52CgQgNVjvJA7FZECToqGJRBQSTdmha6K2RVXsc4NNazXZcXtadzeyNt2N1fpStKiYrYKKhSaGWxxNc276UYuEs",
  "key6": "3FifeWBjRbD3rsVgGVGhrBQ3YJqMnz66eFiG8HHwe9nhhZCnNHG16P2Nw9qSCehfRfSdkNqhhYQqYD6kY4xgf7VF",
  "key7": "3LthxatHxct2oQzbw8GdsGx1A8kC6hHVGhDMoNudnWsqmfzdEWgRbeodVA8LSeWjFLhAGNAdVyUsoeDKuwsGdk2D",
  "key8": "SBPux8VbGgzk2eFrsC9kyb2NiZTukHoE5rDc3EpGWfugEXFFgDbJr86EHYfGAaLisKGFos5CV2JgG2RgPHhRNQU",
  "key9": "5g67iCP9i9GsY9hRSkeeK5PfQDNe8N69NTH54Tg4DSRUn6XKZaS8rZ3yiMFPhCVGZioiFkumrFQPPEAxjg5n3GXq",
  "key10": "4B8LGMibADuFML59SEW6xuBCprgmJPQzrMN27RME2yaBmH19ZokURVN9ECcDGykuut5EYSzs7wbFa1wBQcqGzMBv",
  "key11": "3W53GDiRchxttWRMBViKJXA5LgkihGnt69oZbHU1MY9pSMfUxMhoeRcj4epF1piyFh35Kt58Bwye2cEdbexHuV52",
  "key12": "3NkhTQiTjMmmBdpiWkdBEfCNBSpQBvrj3epfsehdqznvPP7TQ2QLKjZKKZgFmysZmG3nS1W8oNfcuReJ6GYiR8Aw",
  "key13": "3hY4TbU3Hwax48ga8wD6L3pxLvEUa6eUdygDGKsbGExP1jSuFd6zktR86E2hFBxhPdQrEbc3CpSvox7RLNgJSgsm",
  "key14": "3FoXjNaJ13UMdxqmapqsMiMf2rqAoDnQYhVvtZUMrkFYqAbQuUvNuHfypA6scf1NaEwSsg6ygQv9jthWSv3MFnkU",
  "key15": "xTKJKApj4rcny4nuS5WYPwJhFCNTMpAVf4vHy8RAC5XAWfdJJv8wV4RdaEeQPFN8oP7hPdTeymKbFMMdzAZNTm9",
  "key16": "3mT9j6eAk8SVEX36M6Wq5cXHrXUsVBzgjR4DHuCrmovuWhMHPEAmnWPuMfEh8D8dQJav89kLLLQoKR5SXrhUQ6Er",
  "key17": "3MsxaczQaSn86C1reE7GGTx8CjjTNfvkAoy5kP2MfcEhNcdAQcsMtY3PwCQs6torAE8jsEDtcgefhQVeaHXnwA8w",
  "key18": "32ksTjBtCHdZ5Wxe779bwA81my738T3tRAz2Ub599HNuEdJTrLJS9W4QTc8eXLCvMFNpFa8LiWnmCx7WjjSsHP3V",
  "key19": "58Qfup7SGg9LNVJVJui4iTFtQB82NnPNNPGcKeENwYvrpDr4UiwpgVZwtWATn93E6qF79owgm3KQPSPLjMCbQkZQ",
  "key20": "4tDHCvi8FcTvxUcBBrHRmySqSkiKEWAEKPR3J6uG5oewZyv1rqsLFSKULNryKwCWRKmxcs9VKu1TSxpogded6Y99",
  "key21": "4BoABLjXnJe8zpTahMF8TreM71aft3Bx3hEL6qkB5WxxgMyLSEzamFHgcGbWE3mMQnC7gL3dSrgCRHU2rA1Gmpwi",
  "key22": "2xNXNwY4wys52kMB62iVVidNuxnTB4VG9geoVYQDSuyUZcJgtfqApnhU5eYDYyMfNpvqS53AydL9oQSpgdRu7162",
  "key23": "JyoxA9RGLS9f1PCKSNuV5bGvCWk96sf9EMdYGz5XkfMA5TG7gELDYPe9McjSTY48Y7jCQ8thtz3QRfWWpetDYk2",
  "key24": "3HzBNTtvfPtKpi9tb4ZLtD1ZuRbpxJ3Juw7GESSfRcjaaucQU5oSWiDbLxFpe8krPYwimqvxpaBvSgAr3LbML6VJ",
  "key25": "2yMMaUWcEo2KTPmChMdTS1SVmcZWwYtXd432ZuXL1qcVUhmwD7Ecx66UdzyxaihM6r5sA2ZyTqZW3RtASzGr4KP2",
  "key26": "3wdJ54SCXSGk4VvakaCLx2j6ggpLyaaVXU8eDNWREurFhQ6XH29oxQWkjCMZ9xR3wAys4EwuCUGz3vP9C1jzukb1",
  "key27": "5MeYeySpvPs2beafqbg4RFN3Gjz4RG7EM4Wrr5KT9xTj12HA79oPbuNKPahEd1jbsWsUVuJLTiSVaKGW2cLZSD7d",
  "key28": "52twPaPmGPPH7esUTgjka2PaEot9keQB78q6mo6SibQhRryFpNoRmrB9cNfftZB3FCBgpNtArSgxAyKxK3Ew5tBB",
  "key29": "2jo2h7AWhQjDY2ZBXcpu9AmkzTAYB7TvUwq9Xm83KgyPk3ztird31sZ9V3C5on8y8wtPyu42gZV5GMQmMyLJfsbU",
  "key30": "5UpVvEQG6ZyH7VCJWH7JG5YPHo2Eu2WKKpEzvTFQ5HYbGZCjAsHBnW996JyQGA3jNB4z1yMQkZ987dd6soTEZtwX",
  "key31": "5ckVENiy4pR5wThpgQZc2nkj5FB4AVSwCaSJvxC6qrtHiaeofJryy78p7aHfgpPQpgAf4qUAa2fxcChib1yh6EiT",
  "key32": "3xnVCm9Tjtbm2JjbiRAN3mtd5Urf2gqBYW8YtJGXnMTRaV7eH8BeKmo6aPRGPRx2PEkD2BgCWGB8puMJ6CCw7Zks",
  "key33": "4cgCqD2SupaNy6dDkwDq4FmcxCh3yV1hVBuFLwsXvCb22zEVeKfBsianxTZA7FzvbS2L6wU3DLEUQA3pdxxdcdyU",
  "key34": "hXRES68QuBpWCB7T4eTSZVouhVokpawcaxwxBUoRZ8cSJUiC441R5fFjBrJegyAAEm3c96z3FHTGcDEujQNsuQ8",
  "key35": "4Gj8b4aBDXsV8a7AeqSY8KxWAkV9J8a9hVgYsEqQg7s4D1baT9Tk2CFTeJuTwKXXbQrNy2DMfUtbt6cu75vUGsZk",
  "key36": "3YJJSdu8ivRmtgr3cnLmYYvNHY5jTtzdQEtnycHYMGHEyw7LvZ2uWJsTLR4fGwezRRuQ4YTj12K9QWR2FeDg3ssg",
  "key37": "56LaC6e8wvmemXDSSAaWBDHHZPLE8jVvxTkKhcpqQrKZHanbKPpjcE4E1gEZLzdkfoa6usJVb3AWRJzyXw7U6RnC",
  "key38": "3w6CoMJwWoiJwxrD8Rpb86hxpzxbyVwWbckfSFmPVbCqUMinr4Z9YMy9cSTzxjjCgx35Xvg2P6sUaxz3Qr92Uyo4"
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
