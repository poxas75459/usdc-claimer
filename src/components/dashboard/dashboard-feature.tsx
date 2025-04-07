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
    "4e8hEp2tpiywSvzUXDNVH3HNVMRM3pTdh2wkEDtQREJ9V4mPDAhdKLi2awVbzEonBQNWiLpmwt4UrXq2hpYepD4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Ai27ZCSMbD3ttm3ykbbEgqeTVVjHepswjiF58AThMcceWYRacw7JSWdUaEvV5iy9cJFsH3mfLQh77FTHf23m4G",
  "key1": "4pWUagbv6WNeE2sx561egzkrFMJQA1K3hRkj7sbtob3wnRiQWmxCRp7ddt166bqCdXXY5A5g5hSxd7iHRn7uC3c",
  "key2": "49vijfLjqfnGbqvs77bgmCaSqe8GNW9FJpAEtaE7yBtQrgdAKTz5yx7cHqcC1Rd7N579ETfN19KL6Vyx5pW315AY",
  "key3": "55oXRBjQdKfhr8Zq2dPBSYfqL4tNMTRtUMBJD58NWBoxkQsNLBShSHcm5nS4rpxsQWvbjeLngcU5e1LMiQH3Y68E",
  "key4": "4yHP8UGvZ9UXBxz1DujcZtjVTyg6vtb7DnhTuiFWPGf6ruWH9dMbeD2WU1ybVYqDesaQc3k41PhGMs3CXHgkuYiQ",
  "key5": "JgTrh5MtmPXsTcv6GFp8svpxPNMMe8YGB8wjhmJtcpQbrEEYnV3vkRgg8xKFZ2qdToDZ8brg3hnBiaUChs4E5N4",
  "key6": "5QNmzcrN1YNzRQrhvY6xCCYxexqXUjwnEPXUHkrPu9XuC6ox4bJARLrb9hxo3CR4JJUscWCHBkmCyKpQ3ZByCW7E",
  "key7": "2P1u8TnPMkmouhq4A7KtyxVbZP3xVkykbvsZa87xBJutRAv5JPxMthJPZuz2S5Q9sdy9ePosigikeFk35jqNHztH",
  "key8": "48sTkgLewCe1bHzNAWghxdKLFnvo99HEKDY3eNc5afnzxevHH2QgCBui2V2R22UyX3XRzJgignjpTz6A3potkbK9",
  "key9": "9jJHsNUqBjzYDpePMBUxx2TuqyuEaBuMahTwu165KvpMj5VMp8PjNhSyZMsS3Y9YhnU3kaEe768T9gM71ms4VTr",
  "key10": "5uhA8VZdgv7ECzH8U6hAgaXTK5HDy7RqrTLve9141UZpQStkzHiF6TihtgdtSUAjLxaWHVKUpWxSMqHUE3UfT7Z5",
  "key11": "5e7goJ8q4BTUo9xw5tWe34PbapbD7kUeY6wzB3YWwohybNVShP2BrEEJn62c1yczNQpqEJUehnEGeLQa74FHWJ6G",
  "key12": "CYkGwSzV4vF1dysURZAVNs7MszyzRD3sWiLHzPgXqSjzPmpU4cAhW8uzW6WpCZpHehes18DgcDy3DuwzZoutSPc",
  "key13": "4KEs8tiSduyYYLxyfFSLNGgRCdPqXab4P3L3EdSKLsfqE3vMBn3e8TmYz1315hNYQHDs8B3mUFYGLoQWC9jdHguw",
  "key14": "Aw7aeRVyAFvfQTHMtGyk5b368m67qD9NCbWaCdY5viAM2pPUHmMETQJZYYx2uNYn9SFiWLigkT5gjikENNjyCNy",
  "key15": "3jM9gT4gfMFqRoW9cho4fucRXwaDzLCenZdnmzvRCV5S947vPfZkHnz7fDYqM59phoqMVsGYG64S7YQKHo13xMPB",
  "key16": "4ubGfN8rHAH5TR48k9eF4fB84RMwzSjD1RrXsGbwVDh27drDQKYAwAu3tJfHyDWxJuJHqp3V7ARrCE7VnrYSKzyc",
  "key17": "2VXfQaDxr9G3T6xWfriabW2ZFbdjsVKcrh9te83DbnFhuxpMHoKyge7JSFLYfFazwsXLhnAyPnUe92DNnoe346zY",
  "key18": "3QkLixEv3SmmLsygBmAP4yoA1vmKVLyFv65RLKFboTCtx7xTvpFQ8AaLNzbKXa37a527DiLK35ssXub67okuzFu9",
  "key19": "3a7tbNbmfQV7SDy1XJXNMrCZH3n8KSQWdtsAR1mn3zr6Pkq4z2wEQDEc2iHpxSArfUUmZ6YThYBX4dbmXK7vc5Rr",
  "key20": "4JR8VueW5bV2HYtutXvBKsF9Gitjfx154t4FRZf5q213Bz6Rbs4aJKQbm9XZSCA3iLR5Pxv5Lji53pXnPwNLyaBV",
  "key21": "2s1hnHhWssmabpkZTo3KqqQQCahrynW32vGvhxGcPUZoHKgWoKw3Q9b4imkrNDiHA8Thu5CLjSy48vz4ngAL2Z8G",
  "key22": "sPYiP15nvbTUVGgXd3rB7nUQKdbx2R2pz6Xmbzq5NZahLD8VAvj9NvzDtWxBM9KSDpASLqZhDLiqFeD5W8J5MhL",
  "key23": "UxRHufikyRiK2Sttc7TEM8kKWoQwpyhYWMPBHfUQqJ5Fkazoy14WXezMn3gQwHZyXez8rzzjGwcft9ViM6Up1Um",
  "key24": "3dHKyemew4LkeLr8rMPBY1NEX63eT5c8a3LH8YdZ42xQgP5ZbDbYpNDb8KGX6yMrPqGM6SxNfJA5UUGB5b5D8i6v",
  "key25": "BhUkUbJvuBBoXKyUFEXtjr8wp69RXk1okP3qBLFX43L2n2513c68wGMaYLQKfFSxCdYC83p1r5KdfbjnTFGFJqs",
  "key26": "3ETfphht7X5uTPQQHSRPQoLnciHELEPKDdX1wVb3E9w5JTxg4WgmudVQRCuFMMebEL3oLbaLRyJnfizheztpFgnC",
  "key27": "4soqtgurH44aS2K3QAuFAt9tot9ETKusoRrY1GACBfJULKHBsMNhkyKk4kY9yp3UMs9VwtcQ9DUxNgybPtcV1tWo",
  "key28": "JKZr27DEiTEAXVn85NfjP9Xi9nwca8bNK6ZxHsQGDJj3LrFvDELYFU6VTqsanqWtjuWGPnHxvEMHCgnTMNMNuMD",
  "key29": "3mfj8YYfHo7dVpH7M1YDzQfjWfvU3fJeMF7pWDzeMHs8EJLY4DpnbXgma82M8g5p4gjT3zfYDsfwvQFoirvpEFh5",
  "key30": "2C3ZM8XXeZkeKcc6SHCrX7Jo35KnfQUJLQeda44Ws8xoU273pNr3Ybgj3zjESGArfBpPboKmzZnXKNQPa6GuS4tE",
  "key31": "2rxCgAF6eWhpXD7MHwq6y74SyWpWEBxm6EsRdARZkaqiGGhvAKsF3K9zgBjY2L7FUEnKbS9WKWqoFoVN4Qy14RFe",
  "key32": "wMdhSRTNo4eWXdBSsTkipCq4iwSUh9o3tAMBaHNazkcGgo9rvbjfAkZPEqq3ReocgjufMJ6mxPJEHggdX6cX1JD",
  "key33": "4nitVjevXQxpqQPMyaQnrQPcYtL22rfP61coCt9EcNJA4ro1EYzgUrWnoyQTUHDukpeJLoKS5qXf67WGZy95YL7F",
  "key34": "3kCrbNzr1UBYzGGnCchutcYcHAE3Vd4TvM6VnUYtyyxK3uWMSfPnqYMBBt6FgaB4gNKbNB7Qcjn7w4ceQ5b7oSwY"
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
