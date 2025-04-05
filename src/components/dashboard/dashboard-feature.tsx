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
    "3mnf8avB3BxwkeZWjKg2e4JyHHq8Fso6xmjSqu56oABFuwDJgfHk8o5raYbPPC124v1cW1XLmzNH2YAXKp82PYes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAXBSkNfHS47kUAMZKU4mCb8mKT4nySLeZQraib5HwjBkuVsqRhQ8YY6GTAVmRtUxzgeaBQEcsKC3tR2fNyMfe3",
  "key1": "nUmTbdX36J1b9hyxtBwjP45gC1kGsdxJeSyNXU5bJ9SyX9WstLWaFNWr4GkMM1wLbNehpco2nwfLAcmjbsemx3u",
  "key2": "rhENRHTkQwcBtGcx9Zp7yZqSWi3pXiizLWDHabXRA6xuVfXcTAdDtRQJYeiww93n8mtC3DmWf4ryKdUqC4wF3zs",
  "key3": "4vKvMdpN75ajSLK9Ci6MyBuvMW8VhftcrfuELGCTG7L53kAxLuy1UMYrYTLezMrqZg13MiRgEczG11KBudhBy26F",
  "key4": "5AAcbtJHYobXstouSvxzwErKYiL8EvK5rsG517UEjrXPz9W45TEhbtG1KdM9EMCRCrAnf62jMP18dcq9pYzjBe6W",
  "key5": "4oYNdJXBM4syrMbsXEM2Pb5BBRK4QzMuHQ79NafKsSn9Xn9fZTmMaHdir27E3ti2pMe167ayMRfTZnk3rfKfJxJq",
  "key6": "4eA6kBn3EfjXEoo6GDv4VgFjyABswV5apMVUx66fuN85R1zzDx4KrxUjDu2RKeP6vPvcauzF1bT1zu62koMnBBww",
  "key7": "4vhJzVseBDPmVJnQn5eSUkiMxEtWuEkB4gbd2yYAReLh9cwPEJyCdcUKJ6fMneG9GkQ9kJqcnuX3bUQEoLrxij5z",
  "key8": "4AzdsJ4ApRytRqg5uVvjNgdW8pZVGt9nd6rWqRdEHmN8TAAmLAmcUvXXbtpMqNUBpuk16jAwiH7tALp48TC8yNg5",
  "key9": "3CiXdzanafuAPztLuTs6Xkq32ae82JuYWADF3iD8eHiGmhjtKA8N5sBCGV26Wvu49BmFowie9S2F5SgZ1HRMKXjT",
  "key10": "3avvrke7FcMcwzSbNYj9R2n33GuXB1qgnXVbWzzSFVBSSpKA7kwXbpDytM8C92kF5ZhjPTnzzRNnBCgfPWPTieJ8",
  "key11": "51vPJwMWoAAfup8xBPAvuz2DxgaTcMAr8E8FUKuEMNBE78BWh7Fse5NvLT48fdj9Ue4ikmWR2yewuZjwSKusduZH",
  "key12": "4NL6u2VSL72tKQrFcu9JhU6Y5mpx5o9VgDM7fhfZYFdRdenUJWQAWVfANVo8PmP2afW6ESSvqT3s3sbtZoGe2BzE",
  "key13": "yLEM91EskcnyiY1iMBajH8N2c1WD63C6PX8JmB81GWVBqCGMFaWqV4PvRiwZ71UExGHf1WUbRMVgykMgjK9AUpH",
  "key14": "3GNKPozjEkntRem7Ap1wB4yRLJtYDEpXn5DJrK1umsKBBWWGwTASjxv2iAmX1tvG2Aon3dxSgUVqud78Aa2N6dr6",
  "key15": "3opcNvuq2vedmZGAwtGX9S2HfFTNGBYhREd9vFSR9TLityvUchWpMvLKMVTZ5WvJKCwDq1XF8X9ia5HgEusG65Sw",
  "key16": "3QWsSZSdhLMCxTNXJA2UojaqDpQ5ofV34VxXeqayEzx6dD5pHANozRkwDucA9PuWMAT3JXQ4umT91Rv9xUACxKNP",
  "key17": "3D9YyvDsdAJhormKbDAcnr3WiuQwvGFzZWuTj8GVdfbLpMwpMMmbrZeQ4brjhwfAkXvcDJarQruUMKca3DH78Wv3",
  "key18": "29u3itUoGmByyDEqf1ELtNyDg6oeiUYaSLcKJGFUSDHEH3DzTxD6gNV2QSNk9orAUq4pyUXTsrUu1ucdSxFHma8r",
  "key19": "2BjHaYZ8QVFqWqP4qd8PT9ema2qDbNwx3mNfZmH4dnH2RhWz5iKx85dECcKtGwNM2qLpXzLPXVJVqui6k5c7zYLH",
  "key20": "qhPcyFqSVQ5X2LmGVUEbVAVoxWD81aUfeucEEiBtZe89kPS9LNAuzQFR3WQJNrwxdwKiyHXukUgDu5CU1DxBRiX",
  "key21": "48Trhbbf3hhKyFbPVUQZJq3uzsqRjxmdrqHN2tZb2xQt9hpCP9nn9RjRRc7paim8TbWNc6METBCxFjusizqAy5HU",
  "key22": "3DbKi3nzMk5Y8WgMVqYu3U4mdh73mK26u8cSVc8w66UmPNpFtQXMkMw52wa6Ks2XnqwwgJpC3CXbbMoC3L5kzJoJ",
  "key23": "3w8C8dwZ5LwFPYUEDecok8311LVCdUztLFXpdP1A5jBUn6hrNQpNr6Ah6wx6JJ83Y6LcghPKb9dzunmrkfFbtzD",
  "key24": "5UmccgKmFpbYHKMcj5YNeytopjLRy9oKWgcSKcHZigd68LJw8Fwfk1iEoocEiDmzTtdEwnuBSwsY86PocB9iBApi",
  "key25": "5no1QjRoa8JhVegMSTLBUjdP6jskypj2E7jvWPVRQpNmqVLpcvdoKcZoYENMwdXgwNPxT4Q2qUY45nCaVa2omuA9",
  "key26": "3j1TpmrDjLmFawoZA1N2o231v9t5hG2j1RKkMoeTe8RNhew1dYWR3nwvdMahGgymotUyUVqZxpKrxz4DoHGTvCZC",
  "key27": "5ifhgm9P3eMmnZCXUzYFQzYWVPgPwp4vbbX3r3Zr9kJVF9K9NaDo2PYm1TuG11X4Fs4kFnBqqz5GXegwGzPnKCPq",
  "key28": "65VADDU1kAu3iLu7CSqUnxJq9fp2BLaZ8wp7vag2tedEwBHb1RTAWVQXFAxsn4PCt6FnSBaD799eKVtJ7AuXeFcG",
  "key29": "4mm2rr3s4XBUPUTkJBv4pSCV34b18ECw6VNijKGXF7wsPTxxwci5uZ734p72NrskGttxkHMG7szXKDu4Lz8GaC6D",
  "key30": "528Z6x8YicdDq6Nym4hUwqXJq6FunpvTUSPUebKZsd3wofGFCR8pzmCoRBZM2nw9WaPmyVgHDNbxWmHwUa738rX5",
  "key31": "2dvSK4fSNWPxE4Phg3T9xGsTAJAzEv8f9NuZ8uUcVZoUwQTkitLrEYqoFu1UfpB6TuRqX12XvQ5W1SMBiQAaWvur",
  "key32": "LdqGJJPfhgRBkpMLoFjS4aowY1sdFmZQ83af9f1xJifoV3YmjoDt3KAcVbZtzbpxHUDbbcu4pjyDW3ub1DUY21z"
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
