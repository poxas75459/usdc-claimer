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
    "5XNWwthAnQzb7q8dDE44rWzrS7L8Kx3uQscf1LcunDsN1g15B8zHaMndeiEWTZvPosD6Ddb4DncxWRTPyuBgvezP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdxTQzm7TuCtPtoJFA5bwidEjpqYdrw1A7UYuZCQnRzYVJYdgjdNpUkfFA11U9VyMLQSi779t5EtMsqNnxPPZsm",
  "key1": "56sPYpsebxx6niSgj9UnodDiSJPCaUDCSjwhg8VuSDa5rdv7PYytg4YpLAjqRn8VWZ1RQJntZ8WKGQo7fojfbGE3",
  "key2": "DwVgxrZUfFe5m6rr3VgZn5YTJkW33rMgq2h4GFdsNKHyitLpBiug8XHFf8cqkixymuHTfLbfS88PEaw2ceHXbc9",
  "key3": "5YppJnG7Wa5cXJTd5LPXsD377cLodJnJnXfd5w62BEJbmfLu9U1uCqk1kZaTE3JWNhQXpUHMfUqon6vWa4gzRgnm",
  "key4": "32jAbaxHp3QA5XczhSYrSdejZJzWXyDPKj9auFiDXZqnou29Pdk87K1XmhQoXFWpw6pnAK2agukbbArqMjQ39ANS",
  "key5": "4KGaTeM4ud1XZ2JfvrbXcN4iZvkXnHYLaBWJjsmRWnGVGBiByLs5eku7mSuVEbPoTsvu3xxttLmUZvZHyMxkaV31",
  "key6": "4QUUeYVNj9NdWsGwpDzd5E8frSJvQrvVCVLUKsDQKWsgeUvikadA7cEbtQdm2VkGDH6YpovLdjTnbS23Z3Re6nZi",
  "key7": "457odWPLRg5NKnch8kmQ57nwXfBxLrXooUryHuhm3W6hQCQUN7FGPQN1msQboL1YivTYK1LakG6p4Kn5kBWgNWpq",
  "key8": "5Sp4bN2CrqR8WZEqhThBaPXgKiEWFcvgCrddnDPN3gQG7vizKbkNG6QKwZPNyvopS43hU1gCEAanZjvrJ7ihD7y3",
  "key9": "3BE6fHY9UW1ZpPHLFSHZckLELWqZrsaio9YBg2dAUDAthUay3ShHXemUYZtRR66QKHb6Sh9HSq9utzijsNjvea7b",
  "key10": "51qgbmtJ4HZTDtLqF2V9joKtnSwTbzRY2VXHdUvJX8qe3b15WDzLJzKQSjxFM3Sa1ZjL94D5AHeBcuNXfvjahqWn",
  "key11": "3pp91xpRbQ7QfhS6GshvqGtbAEdfnND4dzJD6owQNrULMZZT5vbfboXRCbx4KzbfPt781cqnErT1yq3MuzoPHpBY",
  "key12": "4PqZ3YY2tbMHtiEdiYZusaVHcgTfp3dv5osmH6m8z6pSL6KYNAYuXS3TtRgnKtMR5xrn7ESFmpYYaiGFJ8xyZFdA",
  "key13": "5HjJrzexjGYKZUmSMLyLuBg85zQZjoD9Bt3bxiVVEwq5huCGcR3cTanDErW7MkiqvJJ6kaGFfw31P9ntCtCfM4do",
  "key14": "2UqtKPD89HgaQ6964wUwbBwYsLoi6AAMFH9ZDdVpUYuohdzPTyNaNBxPae5EttENYZnqj5S46V6XuxotrYeVptv3",
  "key15": "5zvgjfWi5jngJNvPYT2y1DwBoSVEfANbdQka6UhJYP7NvcEzNcMRekyLJPytvX5jyyfwGKQWdAjgysaf6CKZrvai",
  "key16": "36eoiXgwd6quCvUVs3eYG5W8KkT9bPrJ5sf66KPPjiXUQDEqYs8tgNGYYhUgEg1sm2Lp7UAeuJFd2ZiaxuNZFfkA",
  "key17": "AjEiD59MXqLipJuG5v4qWUSRM5CWBb9HGChzzAXHNNJUkgF5Vi8QmiYF3cjrUjm4D5m1E9C1u2867X4REWV95Nm",
  "key18": "yQUXDZD5kzMY2HR8ewBAEkcX76eApcJSz8VBKFQkhLzMXgSDwGi6iYCqRSaw3nUZKCeRHMGGUMReXaMhwVtKQcY",
  "key19": "CWSLLXihseBUsZqYdaEbu2Yd6uyU97Upw8HdtcVfoSg9SG3V1JeRn3TCQDndFBbtMTDfqxAZSZeXY85Wb6pwG3Q",
  "key20": "5YaihNfRfSDZQ4AiwVBTZK6sPBQMeSG765tvUydeGLyev5JvSi3rnKBg6mE2dDQ5cr2GbF23XiJJpeZMDNyfzuD1",
  "key21": "4b6p6berwgp85VDaaBDiJMHqWQnYxeRWb6nSpm42Sxd9bhyQ3xP8nvQTSy73wvJwb9rJRGJmZC7wxcVjxsKvRsVT",
  "key22": "4BvVv7s5xs2AYqXUvSHpgXp9Gy3w1c7vQvGF78aqyLLeXcyf4MZa8CKxUVNWKMokmjhJRfkYmDcFLiTC4fEou5jQ",
  "key23": "b4vGi9J1nuRpid4GRDg93SuU46fbnTUB4X8DgztmUXRx5idKZ6MGdokBQBtZbdN23F19KMUtcTGwyb8qyCZyaB5",
  "key24": "3XwVY6usvWvP7JU4tznKtMqU95zR2r7kNbeng7aqmvn3zTuQMjUDyWDzmSaXZW7iNLJkk4ZuDxk1tELdTbbQ2KKC",
  "key25": "sr2e9cReLaagctJn1exq3aTJE6aHYVg6eyK75Nzanj8d2MeBy2DF99JcXja47HPKpzUi3XPYdzFaMetrJYxLj5N",
  "key26": "381d5NwL936hZyqFwvWtdJEQWcfcctLBfxA98by6NoDiASWwvCVinRYwKw6wP9pbUyBmAtztsdm5uwuvB3FnFoiL",
  "key27": "zareXuf5C4Qdnphx8nXzxSkESaWcuHDHJ3uDrbH6wznmrWyRBxSd5YNuPa84dHSy4fiP1zL3UUQcL4MkgPNZsH2",
  "key28": "2jigGJ7bkfBE9GpJaSW6KaB1NHaCgsWqyKGgzVweWQ8bFmks8TRGYEmWvrVqngCeKSpk7T6TMBBVXbeow41gVVhK",
  "key29": "jej5rbZXjDnVM1NCcHRjqwXMM4Y7opxpVLp1QBaLZSTucDFQ9Z5HKG5T7wVy5MDAj1nyDiuQ4Ef483rc2tYWR6Q",
  "key30": "5bc8rsCV2wPdHKpUH46Pz2hZTBi6A6uGMMsvSKRrNAJyZHrpatQXBW1NWtuydqS86xSy4F7jHa4WWJGx76T4DvSt",
  "key31": "5m2oezdabGpE8TeFyp1PxN2cJZfBxbGXofw2d9SHovdGzgTDRCRJSJk2iRWao8yrbVoKWncCKUSwWpfBbMnooqbn",
  "key32": "46UUwsbKY13vWFcbhdEUiMBinHzqrN96BK9jvFjt81nJY5nWtpA53uWtyaYUi5hUXvx2TDC4HUiJkNPA7Ua9G7NJ",
  "key33": "WeZWhxhXvDw2LTv5LTJDZcZ3GBRVEGyutNSfyeJGo5svrbR6qWVs1HjZKZbB9vvQvMb1L3dmKPpc4NTcwK2tZe1",
  "key34": "66nehE4YgnkF5eMdcaBocuHMmdodadysXXnXL5BD3xKyhZwPi1XVpTby3EHguh9jWFS7sGxVXoBkm2Ma6M7vxgbw",
  "key35": "4DcbVX9DwyWWy9vyGFtEsypVr16gmqYyhr2aiXWTRKgvBZHrdcz3APWnXJHFn4A7XCVJXXLivCGac9nnP2Cfjvya",
  "key36": "2qjECGaHKZF7tZoyAS8T8ozhsw3Nhi84HQ5BaKVPuF1Cqscpxc9jUEryuBvfbfjWXu35ASB8RpD7UiQxdHXWgcJd",
  "key37": "5qNrySKDQS68ppV4HNFVSEuZDD8t8esfStSegrqcUuYTsq3rQZt8QbKPCRmHJ5ujzjMhkJPeNYMwBPTWQrCNeh8G",
  "key38": "ipHWNMNxyQuWgKJ5EmvhDfGWJmPbPQFp19nn3TsgpQb2Au8ynwUE46ycEJ5PgToZXAZMG1VMmC6hgragy3ZZQ35",
  "key39": "2cgK7mMRMgMJP5JVSufGdvamWFXW6DSzaagouehNWfEgZKUbceN8SpAdDpNZD5c8PmYbovm99K4ThLLHKtyJKwMc",
  "key40": "2gg3VbGXNC7xwDsY9AtRWzrKmX5YdcR8G7CyTbTGf4Am5jqwuHdYuBFEjUFGHkL5rhV5aFp7aXXdcupNmzsSyZGj",
  "key41": "4dGT1XiW8oaxLkrz6a6xmZzRyWnpuxoNkjC3ciM6XAcnmxdsMJjiWYr6Ea17ENDNS6ZW1vU72MSLQ3vGxTFvUwJS",
  "key42": "5kmTzSEPqvJoFHpRrVP5UC44TZfYPRvw7jqiQctib1HC9GL2kZPxBN6qXe3eSmHoHHQooMoC2JT6hEdaZx5cgt9f",
  "key43": "3a2Gf8m5ZRN64k3aWoVTyBivgk3KEeXxKZDDKzRYokSyuFF5kor3hxmBtfr9EJBAU8bZXn7ypeEgWkGE1qcCviPj",
  "key44": "5qpf5uQZE8TxaxipSKGpuk78QfSQpXmc5J27mfyibDboJmMNaXbMcc5jK33FEqaGqHmxsd4Xd6kXZhA1SpbkiNYu",
  "key45": "D7EYmNW6qZFkCH5bYYXotkMaFqqQpWPz1hNVCuo4t3axBP2z2GaTpbrRnJpGvk7jCtAFtQ5tfHvSX1AVozDNxq8",
  "key46": "5fDpBCHzDrRjj49U2bvRyBY5PWKbAinez1eFx4coo3S3MMBwc73qhaLzntAJE4XkFSBH9N45iq361N8B2Qc7pgay",
  "key47": "5PkHxZnYvNBqXSgA2tmVpDAXesPYxrhTqyMXyq3VVzHTCASz7Jmtfeu7Q8hZB5z8zJCZe6ADW3HXSiiDtk5WDUUr",
  "key48": "Wkg38RzSMi53HWg8EzVpGJsp4v5CuL2GyYPQohqJfLm1UDNtpUnwkGsw3VRCppYvukbZQkJYGypDLnEjPYLqzHS",
  "key49": "3DhGCdwRRxPcUXkj45Zzc4ifRVzyVacBovwEHyQfVCL2htLrKyMX1FbcYcnnt1nCA3pzwSThZFkir6Rr1YaBfmre"
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
