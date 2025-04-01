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
    "47zNRhPBkea5Th1XjaWJ9iQ6t4pTTnAFPwqpsYVfJscEau17s9KjFcp4UsjYYvx5qCLPVGckCPKvMxLrF4U9rh8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbByfYrp5Y22XWopBzXniwYBw1KUBhVzFW27WLs5S7H9QRmGHHXUfFcoZ8Je1hPwt7bnyvissxXbUY3kze3PWCq",
  "key1": "5jy8R743Dv3yJVUzcHw5HEXFYfQ5TnohtDYQvm4nJ8nNLavL6C6JdSfCk1eSEyWdc8GM7ycxmpFCuJnFAQhh6a54",
  "key2": "31H3Ra2Zmy6qwDPWGeonVdBYYMGWPS4Mb6d4dgikWSkxRpjc7ebe7yd4ERrVhtWvS56h3jh7C6mDPdN1QRfJpnV",
  "key3": "2NC8hUXCoBRs7fd9s13ueCtR4ZVYDmkyCpz5k5A4hPjSy2mtL87KxvP44x4d3rsEf9bkyJwTaKq33ufFodeV6eth",
  "key4": "NjxkbPzF1SAqRDUj6iU4wvmESKSshRo7qqPkFqnzBYsusjg4Tpwkr1vdgoDH8DsA8UeRWPdFogd53EJ56XREhWo",
  "key5": "4JUubTUZs6CRA4ER6Swn5Z7kmrZgiD5BrL3s3SaFLAB9tUbyxSkJVfEot587nmcJLUYGsY3AipKnPEEcJ8QmnZ3w",
  "key6": "5PGAnU34iFcqPSgarny7baDruAUiahtvMY5NFuZ9By89vwEDB11e7JkuQ3Cm3Y7cgyic7KEP79TisdqbGzEkngKi",
  "key7": "3ZvW4b7hBFLYKKGzKXVaS8yXV3gXhB6NsHhfb31JZmneQpCQrux1ayFCPwFTHcug3VNUXyb1aWVQ2HzrPYN8fKb4",
  "key8": "jzHknpvZsE1eTbQd1ksPbB71S6fDTPeQ1a14hGWuGtU9J8z1tnjYnM1dxVuQNUWARExBHofP6yXaHk1avrnPbYy",
  "key9": "4ECxgUDr8QvCDaFkFvDXJmHrZ3kajoJusMyGP8Wj3FugnBxvyxJWz7AQTG6TduCm1koHqqL3YDoe5tQRZ14nuZ22",
  "key10": "5Nnm5zJPiuV5pzHe5fMNqRcRSHPV8S12yUfwKpetuRTSKP7mZhz1TsvYzMx4Zr9naX8y3ybaGQfxjhm3WPkHsRFY",
  "key11": "i4n8wNpazQf81pWKTV6TxGmhegYebAv9xr6MyWm1xEUmdaBrBuPkCqEd9JZrLt5oNzCv6nh7GjXmEr9B1ExTjfT",
  "key12": "2BRJBwmvhdb1ZRCb2QHRDwPF5wSJshw387hV2Tku6oTHuXe72FZqqJUf2qVnW2EAaT3LtkJnYcR3XcQF1Lkagbxq",
  "key13": "3c9UQuszEQf8ccxc2pJBsFsH581VpHFQMSXeVQteCLH5s4iT2qBLchbfGw8WqUuiSLNfc6pGKa7JhakmRy2fdMC1",
  "key14": "2S7bG32wcwzp4rnoPxQDisWLiizkDW6vW6M2uGjQrEX5Qm1QGThodcUp3DUgKqcEQ1aNDCTWE2dBjA6aXy9dm9ss",
  "key15": "2cVwScLZnHX1BWAsHhNhq7QL9dKTmit9WHJb6HoFDo335p2jxKFkewo6rmvqNHrhpJa8DExdFVd1hTY3EVCiGcAN",
  "key16": "3vAHU9cAeTNEfNt2B3SDokW4vDoTiLYyB147KyXDfZ8Tc7XHmS7wTEJHLGx8LyFJzirBVNsBAWdPcFEPwXAM8etm",
  "key17": "4nJYZmYw2iwhYEC7jgtpjJWuCdcQ6a664BeSm1akf5g7AQohCDzdfn7WQb4acTyTm2JGAPG5tS4tDrMUrvm6z7ae",
  "key18": "3doHJFUVvnwiZfAo2ZeVgDnCcoukpnUHHTQP9UA2RnSaj1WFhySUHtZidrYQBMiSqwUr1Fe4V2LNoSsQLasP2yR7",
  "key19": "4qsTj8Cq4vN5KfYjpUu9NLxWyzTaNRXLqzEHDKAkyjhaGqkDwTDetxrBsNsiejnwD35Eb5wN5bFzK1ELXnEq1Jqu",
  "key20": "24pco81JpkW3Q5wsERVrLGL4oRyuHk9n3BC3synnHNyVUMW3wD4YaGh5rfLREUyNpXjFSXwCPLF6BgvGLVVHFLx9",
  "key21": "2n6K4qRj773JYKVsPUcT5nWkTFoZkgHuS9mFeh6vExp37Rp1mXmYKhFUvGKRxmL9Rg45EYrKtAHLmmfVtFKacVyk",
  "key22": "2T8GiMAQWFCPNehQcfopfNyZf2w2SXxJGbV59LXDtdZXFWy1fH5NtFD8c1QNW7vrUr1acAEchsrUgAFtU9NmcU9F",
  "key23": "3jEaw7NbKaVuVsrJiB3bvXESmh2vu1dsjMqkwzqFJQR8iuBVxiv1oDaXYVmThFhYZhW1eJkhegJ8g2M2hU6KWyHZ",
  "key24": "3aiAfdagi31Sjx4bWLtc6CfFKpYnP5XX2Fw9pXTciKDBYANyvgGkBjZp86YgVFEeh6dg7t8dvDLn1kSErBeWH6xF",
  "key25": "4GQQ2StGPvfPqay2V6ysTmhZsf128deQSUc27pFmjxWy3Wh3ri1TXZwG7BMF8f8BARB5zfumeHaca7AJZFzouZb8",
  "key26": "JQcDuz6PHLFaKT7uPVchy4avdQwXPi1ATjZpjP2uhNiKc7czn9MwAvtxa1qWpTqEaHNHuCVZaoBgchJuWnqRi3b",
  "key27": "45khMtZY9VtP98aSUeSxagVyqxk7KSLbhm3DT9kmWQvM6mUQZGkHbiWHcCrrEkykxoTbwsNdFu5Y1itkEPugX3gC",
  "key28": "4vgzQqN26VbNH34aH81EQ9pN2G4oovyaUGnQg2PzUyyaYfn1PeLdVu4i4BysohNqzu2JEGfzicf13iXoGQDsXMUJ",
  "key29": "4rnWZWimKqkqsBU2PqFAQZCEgAXyfdWY8uqHKxCQ4m8xDk99z9dWFLbdjPtcc7Kna3DGGKsbsWcyWxP6HtwUHoSB",
  "key30": "8yUPC4c57Mm5x2o66VbPDt54CxsuMge3LRwQ8MYMfFdvj9uqb3Re7FU2vXa1kGJDsdTax3escY5KeeFZZbQyJwp",
  "key31": "3TqqdTLbdEnGbTCv29ZiqPQdsiXRjqixYgED1xwmVY9t2M3fEqwH17zq7o7T8bRYTr9JjzFnWxXqWYUa9vkpe9SF",
  "key32": "Mg3LrVRAjS2v9E3mGKHt2LNUEKY1NumSVyxzntgJNQcYVSrZQScqNvPD9f7BueFbKtJEhzcBLPas8XqHV6owv8Q",
  "key33": "4vXCiyhzRntFj4giKmSMAGCuWstbVJ5zwVp9MLVoFbEaoLXiuoFUu2PEPJEdAm2brYBJndy3DoHgreQWqxc7TEEh",
  "key34": "khtXwTiNi9VAa8iy7BrNuYkr2QYm46KbLSJEh3DYkHtugojkcL2eXat1oVg5jZ27UarTRYWvUb2n5rwJUD1iqSS",
  "key35": "3eo2kppX6Bym4e812JYbJ76Lj18jwaoPKY5KnMBRFnLyfkTzG6MkcbLtZStucAE3GfpCc3EaT3TsxXRxenQxFj25",
  "key36": "EGom9Q4ZiaTf2FV2AGHSZgQ4Fy3MoZRjXNusA5zd569Le8FDdG9hbSfTQwM9DndnBkVnEoNokNLnSgQ9ZM61bHD",
  "key37": "58AAoM2oYNKGuFWtKZVy2RjKt3o1jXPXP2z6DuSX57xZdmKTMhEJs4Cs3mqQRdfwJpZN9AxxvqXKXP4Fw4Dnrqzz",
  "key38": "3SxjcshghN5hv7Q5c8a1WGzBd5sg918VTFCTnb7dymMtNTBFKUmZ22DThbWtaaHdkJKkUA1odNZgXD92jN2G743y",
  "key39": "666Aj96hu2Km9kQZ5QC4BoU3ah7ppQsGxfz5kHwSnQve6Rda5bfkC8H5BHh29zdG4ETVCHo4mTsytABF7Nbkc4J2",
  "key40": "BawYY3BebDfnFVtPKctUKLFG8QMWAW99Jvv9hvxQyH2Ys1xEcsDqe5nXBXB7McpNWQhLMeigLDmhtyWKyYX5gqf",
  "key41": "5PMnWFkvgqQZjM1Ac4hj575iyScXc3r2wwfEgVsk4jRaCMHQ8yG6CheipdyafGWmT5wpCb3UQwDLyKLKJPrFTKDS",
  "key42": "2p8rj8jeiQTgXQ4d8NZCeTs8ENUf7B1iYhP2hEhWw1D6y7zHkMu5SuqvUMGfkctV3SmWSbgP7UQx43rS3QK5CHTy",
  "key43": "2VsD6FgkSKRvbLMgb4g887KC8GLhGtj86m98EusC4UX5DptVfGB5HsGNFQxcaRFVAPZmBDLnXrEaFfXST4GTEpk8",
  "key44": "3HCPrHcNp61R6FCTUHPcYG4F7GfxYAHXeBHtnTQAi5rppkocA3XWQircJfkNaJpoVXzpTRuUPXFSgmTHvoYb2N57"
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
