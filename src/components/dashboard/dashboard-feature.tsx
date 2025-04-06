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
    "3MDneycoCLJHv7RffgbXPJsZuF6h8C1WWeycoE2WJK2BYVo43dngeBXMowPbgdYEzJXBGaFZaRL6au3ZuwyQxHRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NafQky1cgyPwdXNYrFWD2PPRxBRQqcTbSy7u8A5mSiQex7XDZaSsRtneu2QzB1ytaRojHahTC9KeNhREHKALwy",
  "key1": "4dem2xpCELDr9Z5GutifBsU1k5RAZXzdNRQthbfzQFL35gXj74zFyAyY7qerUYSLgiYbx4rGd6LzykZtPtDSQsv7",
  "key2": "4oC17THxdiB3pfVqxyvakHfFwKXiEHmHDEWvj78ZhNbYAFZmDZ4b4FaEfCPayAEyWtzRBGrhbgGzyS76bg6xapLp",
  "key3": "5AdEhf7o37iS2gGqxzbiFkQhvYYmiwdgEVZTsVhjx3cBifHSgV8wWSGwbA9vidR6jay9JzcUXKjBfhZuDjSLjyAf",
  "key4": "4vZV2Ub4jmsRdYBTB5aj1N6s4UQ7naL8GcmjQqVxSyCht2MB4NzKjyqdEoAv1dpRg7hAaBhz2rBzG3E2KjS27esF",
  "key5": "JjqpiN9F57p5coKoU9dGDRV4xwH52XTPdSzoCBpA4o72CjW2FcnJb4Qpne3FUD8iEBbVcLqGdXSB3HL1ue7iDzx",
  "key6": "5CE3qyxbHrqVKxaCqGUqZSpJpELNifj7a6Kee3odDDUhDDajSagK5jD4hUFiqZnYG8B28AhfgmNN8NyTqZdpsVBB",
  "key7": "3NQ84SFWjMoyncr9LFo8Gh7fjToFT96KAvEfyxwePHDnH4iMf32hj3jo5J3AmZ7c3XxJ6kftu8GTP9jf3TpYaSiu",
  "key8": "5XdMshfmsUgSwLqq7DVKKSC8C9UX8onHStAguJAZ267YW61bqiDZgnYNZgxw9dxMtFTUAWU67BLjeiEW3i3Gu1vX",
  "key9": "3LxSfRjs7XRBaT67LW2CRwZGTMNNW4M2oQFSqZ58SXvDEjYDrjGauM5K43tGwkMAiSe3g8QDwhjjnnzdoxhfb1rL",
  "key10": "2Zbu7f4wohLVnUW4Y7mSuz7dyAaPGHv4tPHjM6yHgEb9B4eYB9aCoigUYMvZ2zus8Mk6xnaoz8PJG6dV1j9zYxZS",
  "key11": "4rHXAA9kjwKN7jsUbFCoKYww89ZNAXm7AmfVwwad8vKkaXGzhm7VczGTiWhroAyRBaavLZt2zdejvs4i417gBkek",
  "key12": "3iN1AyJ7tuAkUXbABE9t3HxbQtuuNNwSw5LBFjfQydi3bKWBR3Gky2aHctAEjtaYaGcfZ4Z9NGkBaVevvT34kgnp",
  "key13": "4u8N5qg4L8izbtaJnfuUGfREMtVj29nY2siVpLQMRuyjKjhcasxkkGuxNHZazvSbqsZ8ky36g47frAzaAjpogBu3",
  "key14": "4kcThpWvZWzEva2BncvWzTGy3JkVQpD68b1GszdfomqpA2SowHS6cP9kcbeUAACECgjYH5QNkMvciWUZWvC7TuJH",
  "key15": "55W4qhcdL9T69RNnzsfvFQLGjiJdCTNetXv5sRY2H1rdviFLCdVAwEyq7h2DsEmop2XTguJnViPz6Wfk1pq42Ndf",
  "key16": "59j88u9zvVditD9c5aVGVia6eSyjyKbSBRXdx4HrtEKgsgDMF3aNv9THR4EzxGkPNauUZBBTjMggSgnT5U8qksbo",
  "key17": "3N9JedF9roSkD1xCjp7DwoMLxoNe96dw6xmcs33KGYJuVw3xWyrVhRVVsSHKrCqPCoB4iQV2T6WmyvRv89YshFLV",
  "key18": "4gdpfeie4BJU2Dsu7LHxiKXczFzPqzDkKcYqJaEA5QqgQQxWUALpeAWeLkpYa3ttkeMshKFnyBHDZQdMQNwt3Anh",
  "key19": "iAGDsre7r3axxkSfg27maria5Cbn3shw5KUz6rYd5c8cQPaHCcMeCFTEYjDr48VntqzwuvmLpgn24pVo2ML858P",
  "key20": "4uyEeApNJHY54ZnapXXX79tf8Xq4gUjuPs1GnMocJixgzSbw5RDyHpwJUbvyL1Edu89fnnW7D9DcX3HHSLG48X3p",
  "key21": "3sQ7XUaSKPXDEJUpMbHLGMEAnC3uvcDPPoxQ9MKKhxCheWdZdoK7eFroU43TDzsogmw2TqxyTwYzWkwWfVthtzwW",
  "key22": "5ni8ZbgxLWiM9RYRLutWbkMrqDYxdzPWW3zEs3iW2n3vNFCPhqP9nXVe6e49DBEzEU8ZMPfinBmXNjxcUnYpHeKX",
  "key23": "4Q7Qr1ShHDJRAabxDV3cCbMza8FYQF64cpYoUfn5vGrZbFSjagjZTcJXrNRci4rDgNr6pcKLSYDaeFBUcUnkV7tX",
  "key24": "298Ycdh1BnkEQie1mWt685V2JDBNzucaDmzfHBEoFaxfkkX7DAD1JHfYuzfbHVtLHf7WLCCD27ggxDMF6qcdjZkb",
  "key25": "3wifKPH37yDKDwAqHMLW3kEZuuBQfc6WEQXWaDVyJVn9yscScMW3X56KVcD3o2ig3hkcza4Bt8ovBErtARLMxpeM",
  "key26": "2HmMUaCiWvvyuAzpeqeGpzQQ7wkR3uXPmspmbzMgmwCDFudtfEt8PPJWt6pckCmB5TBMnEBhttBtiQ6CRCvrMcZu",
  "key27": "3PGzRRWAhj6PRPHRjoHXEQ7ZAkMW7JSevr92dTTf8Crm455nC9yqWYTLmuZpE2eBYGJj9auiha4bXfsb3oNYT2SL",
  "key28": "4dFxnNbBxaLiw4xWdi1CkoD4USQBETNt2o72b3jPntHvE847FKQL225u7ccqCCRmSHoBRLd15WLXcHw7fac4iev6",
  "key29": "2NJ2JPKZaySFXxvuBGbw7ZrARCDRZeNFo4rY3JGVFbG6DoGEUcujpvRehjBRQJpZzrNBbCEPeooazbJsaDaH2krU",
  "key30": "5iWABsNy5SwTCwgo7GFedhvmY5pLA1GdFhTSuoXqQiNWHf9yT8Ca65BEo9ouCkA5tr6FpxUGR2RAi8zJ8gqChdML",
  "key31": "4f1oTWosCoLiJSwPALt7eXmXePn6mPYhj2c7s99NNfh6xYvJLzADnjF9vm4YewYBHHpEDmN5UDb4Y2yDUC86fU1m",
  "key32": "53HTbHATe2w7uoDa8Vt9zHukP2MnUctw9xE7B3ANBLgTkveP8vtksp8W1HobwTNMzNmooJbcvqC2PgSwbrDmLrSQ",
  "key33": "4G1NpHi85xoeNsP8LTQb2scm84pHtxxCKb783X13XquxwHZm67UeEnd6eajmaYvwKQCZ6qyVoRHnDksh4CrJ2Dbj",
  "key34": "5WvP3wV75xTnduMi7QkyV58J96ch25izJsXkDyhEhV1FeCkiZvH1BTpZPhACZ9bbexqh8SunBW66MiU2ho4grv4d",
  "key35": "mUzSA3QgC1xeGaWiY2eyBDgDKspSXqv6Jcv8oMxdix171StVxkA48ju4hiwtPQGeU1qarEc1uv5883wDYQQfgwV",
  "key36": "38qgTkBM73TrCVyGkf8cSvZKcFhKagPcWLhjzmy4NEfJkc5r6PStmKig2YJQpBfbvpryccriDwYbJsQzYa9nkXqF",
  "key37": "5LnDY57gHF9rrXxHhATVLVjEpW9EoLGVMHWfpmHfNPsJs1Hgv1MqSQktovmn1XbhzWKgPu9PxZsvZFiEZwLx5mr8",
  "key38": "eUFtNj4sNS4eSajmFuG6iNfYwbtWMnVcC9hkRoz8Q1ki37Z89UPvQe3sqomprgvZCcM64F1bFEN3b91Zv465We8",
  "key39": "3ZBVaemhRWyKxBGieGS3yuormvVRiwy4CWG4LEZBCYRWRqCFjj36oWLQm6x44w9Qb7hWpwmF8HQxVKr6CBUns8qX",
  "key40": "4bm1p8JxMVAs4yVjvQjPL41ZesvB4ej8gKPrtinqS4FHKvTiT7kQ8rbB5VjWmJ3zmVyL4K1AG5EniHVU7VPmVME4",
  "key41": "5FKewWePxtiK7ukUmTvgZ9pSCJenjHGBoeC67Z8adCiReFZmBNNvVCCL2L4FVipLXkimKC86fuSeSHqeA9UnNCDD",
  "key42": "2XxLfvq8rX5XturXgoX8rXe2wXnXspPjYtcL7jYhwSFrV5xSgjbqAaQXBEitHZM3GXnKzrKC7j7XhAwgre3E5U95",
  "key43": "52REjmY4twW5Vb9btt5Js6CMNkdgr61VDnRHhyU1MDg9UCseH9gMH721j24pRkx4vZy4xT7195xb5R1ERmj46trx",
  "key44": "2v4u7vH7G8d8aBciHiBuWTUQ5gNtEgwhNAL84c89oBhg5wHKkcW4enJhB7UFG8PKUZt85gQTvi79wzZexZPrQeSA",
  "key45": "5amY9rJmBcHts4GXQvWHjESTNkx2t63r7UhWWYF78RaG1vxB8GDuJAiVDtDmuLgpG2oWAATbZFwPyPB3L79pEFLt",
  "key46": "4eUAv8xaA9bL6mo8sRN4tEE4zDNnzbs464MFjifAXndbqhCcEXZn9AV5GGEQNQwbLqfWFFtaMXRq3aqgAcynHt2b",
  "key47": "5kAaJC7dh4HHuj7cnXUtR4s1Dd2qtJyy3cmV15UJMC7QfouZeRAGtzM3ZGnyBbYj2ngWjpjBmqxwUmFHdhbhdUMQ",
  "key48": "66tiDD7PnGEngCkXRQ7SZdhYXDw6pModG2d4CXUgiLgXG6P53itwd95VLuZYnjtvH5npKkUtvXaxbVg6KoYFTJwP",
  "key49": "4z4jZ98PezDpR4vq83e7WvoxS1qyo9CrAhyGjEfc6f33bB7dcKka9c4aBoYcmLNAYVKTwaeX4tTG7rr8HNxKc24U"
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
