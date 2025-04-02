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
    "4V6afGKDVGhu4BFvQ5CDfcs9BNwTQG4BTf73vTQDEkcx8HAA63k8q6ehjhhX277osN1DNbuQCT3AoiMKVoyP9pKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77NTrbRSs92fQ884MsU8kHLmUULQSvoGSjG8M94bywUpL2nZh7ymHxW4NVDML6eg3ZhHXEgXh5HodNcDViqyrnv",
  "key1": "5yxgaWv3M5UExW7gsZEQB1hviqrfqrMy32c26v2PhxH5Sg5zmWxWG66x1ae4V2566qNwcpnyXXSbrhegGGTPjQDQ",
  "key2": "3JGpcbzmafdV8tAfpWVCPW1gid9Dup4xKMZgXRNRQP46qQpX42AKwrFLHiTL65XwCLrPqSmv5JQnbKX9JH8MZxDo",
  "key3": "4MaFrQgZni5n7QTjo5dhUoup4T5vNvBE3UT35XAHpw5dpDGhFxm1JY3kDuSTw7De27df4AtUUHcgNwxFpnSA4wMK",
  "key4": "59wAKMhhTu3rUyMWNDXeZYPZMjEkMSHjNUbDKEmpHKSTRxvxhXwkQWKeS63Pc36JMfRQtoYg3QxdeQydF6Cj4frF",
  "key5": "4Z472YpnZcEKAnkq1jKvQYwgdwKE2GyGP4DNQKwjtV139MRuVbezgNAoBJHrQvJNxEE8C7BK5ciAyAVLhYCeCSqi",
  "key6": "2r9jpxA2tfWZwAwCGT74YUWUP62SSBgew9eNv4Tbr81XixSPKUvsQC1W8XSHapc31nr7oiH83G9Xa1N3EySiB2pd",
  "key7": "51BhGxn75qrNhKCB1kHE8LXFVWSBe69mj6pgacUMpngJ9uDDs4txGZaNH6KBoNdpgA73ZMPavWCqpZfoV8hks5Tk",
  "key8": "582fQCR5vmMTGK34Vcxw5vhzxfBtpDdQngJ2pMfNZgYS3MSahczMF9ssi5j2nR8oBoJnLLAe5zuW2ur8moa7ow15",
  "key9": "3fe6Gdtig5k5q6dAHmvxqVRNv45VKdpaf6N7amqfpaBp7gS4rEXFH4x4rMD22Ut5vz7FBLrQU2RcjghKWcpYM5Mb",
  "key10": "5JSZqcbCVgRorEuWJsxG6GpV4KWbzLUgkK255PhnJe69JQgcri4pxdBV2dUAczX1riYCXyJDwqYuDJ7DAjMSbX1p",
  "key11": "4SuuJgAn7xPNh5NGEnBsJsyJgRFmVcCAmhZNPoA16CwoAMaZNuC9YcaXZYaDcpWp3E61xmtuYezbHHpZXSdN3RqD",
  "key12": "56djRPS6FMZzGyDNrtBRfdXs38Fn3ECbBhQsxyuVjBdkiphrhuSawUzs9ksMJxW1piqu6tDSSjrsxaj5WWvfVLJi",
  "key13": "49Piknqxbfv4m4NGxxG2QnRai9w9oQT3wqkEr8Qqrjm1xnKnpbaErK2BQyg8jbcY6L7TZNPeR1zESKNtkrD1r5WU",
  "key14": "3TL5FrdMbhScdPLAzTtGkZvxv9ShHgyC3aSfFZzvwBmfUsmMvLCJ9EnBTbbkGTsog1XFcouJyhEBLX6qmvqRMkqg",
  "key15": "3myFHqLTfwrxdehtMjZPq9hgDaQP7HXWn2wkftt3hUEHM696KuUgaJuBiEbVoKKmkig2Jv4JDaz6uuFmXZm9WmaQ",
  "key16": "iV3ibo7ANNBJznPnj1vUxoATeqmrPSmpWjTUkiPTHATFKPLrPuFfnCmtxVFMm9dZ7kEGFXr58kXix3NPi8AiBxz",
  "key17": "3KwbMadhJsH5YZgkxKmAY7VY2XuiSBVceC29VtdVoePuTMDnwMK2rK4ZvxzCcwU8nGat1fRvmjSzFCNf3SkxSso2",
  "key18": "5u8BggcWx6HsFqbBERXnHJrysvy8KVXmXhX6Fdxd9WaJfr46tkN8dckF37TrsAVZaQabkBfQ7L74kUwD8pzAWi3a",
  "key19": "3An4TksSjK1qyrCQsfg7XzMs6i9u6wjz9GnyyuscfARVQSBT6p5FT5BD6uxZsKq8xtTg4z2ijgCidSKkvvycH2G8",
  "key20": "3WRwqu3sDUBf2NQiQRha3icQjttUN2moR95hUk88WAobkMyeNy5NwDwpkMA2amfN7u5Ki1LtfDLQCuLhTNQ3pmo2",
  "key21": "tEfQLHf92drE8gUdu5aCgaXhrjUQZoSM6VpHY83EhFZ2fBWKZrLSCo8bjNuUezsLKSNb9LtB7EdTkVsdg4UN9RX",
  "key22": "49jYS33osWUe2ZT5rLvb5MTAs53Rj2F37x76KKm67u7tTsUXnbvQzM2X1UMdx9QQUW1Q9D6P5wejdSZpjSb7qwSV",
  "key23": "4C3pf3Q16qjDdB56kKhHgU5TCDDPemQ6ZUpgJBvQzWTCNPVvV7XM6QRsPDiFSXiSfJxKrxDDHxFjh4QGKSeiQ5uD",
  "key24": "3YkyFT2tuwsRMF8FfWMy1hEaift4SHjDeD62Fks3DYz77k2erXy2gfnPByWc689viGgwQQZAS7CFzdzaEMFzVnD2",
  "key25": "9uctJPMbouQh8S3X1jptnhCrnFdLbBjL4RhYhHc4WqJ26MHQXvhE9Q7pDRFtQM2wZiw635RcWxHLJrqSu8k3kuT",
  "key26": "54eV3DhGQAqmDRAyULJDMmnMRHmPWqjGW2DCmwdWSG8jpLFfwNCVGxcG2TwHA1boGR6su7BZCDrsDtpLSVfM1G9t",
  "key27": "5wa4ZKhEX6bcSLaYJj1b3a7XBR8NG7mCxaPATgJbd2VTkYy8FEGHu7yVBzsqjS98nFQLg7e8q2np2cjp8aC7afjT",
  "key28": "ies4oUPRz79BeZcdev9NFCZ57FZqq7mCfNJsi7wLuhUJ7B85Nt4KD8YtrfG6Y925WCpBBTUnmeSyWyN7SjcjXoM",
  "key29": "WixKE6HADNmJixUPriEzQWVcNQKUKiGMj3QSz2UCgck78DpFAyM4EUmpxS8Vf1T2qcvjH1832JBL8EeVzr74Qqi",
  "key30": "EQYjCVT6Zw5xZjP3ChXanXuLeWpDJcCWTghDspYtCzBz2ZiNXGcyiWuLFUHuYAMXbHDZfftMieG51udShbNJJqA",
  "key31": "5MGDUCYiVqNB8VfApZRP34Y3MDU74T8Yfehbq91MHWAnwEttqWEgiPNxV5sJhSYPedTcXjARTM1iqyLHzjWqGzPT",
  "key32": "4QJH6VY1JLAmnoPo55uyxoS2HnKHu8Guom3zdkXioLt3GUnP23zAmciHrUrc1ZxrHnsKuTeULnCLNm4bQKMoMAu1",
  "key33": "5QRsJc6LXyEQNaGNUn8Kxc3Hq3om9YoU1h1JeNNH2NkcyRm68JcHkmUnaHEFsJ3nLu993DB151QHrwUzdMqedy2u",
  "key34": "3kPBTxKMTcTK2x8vMccUzJPXxgrJVyBRaYEjmvTrJoaK8unPxinarZmZCtNtf9k3B4yLd2R3as2KUy2o2Nhedqe",
  "key35": "4Y3vXuQSyVAJRkCKMim44dto7aqTvkGZkrnqX16aRfykmKDSY59NgqVfmQkGMMRKE3mpmeE7d3DzydFfSiHNrqDJ",
  "key36": "QWFJNgBn47yLEKiRZi1Rk4cKtGySvNZtd4ihCTCY3ryDr7pkx3SihAzLztMU13nA8BSHGdHzrrfyAPY3xWkDDV2",
  "key37": "3fgqVnPMaCqE4KDKNzSD5q7QyRQHh3iG8mFhYRsZFyc49gN64XV9sFmgJaQ9N4YDpQcn11A397cv5C2PhSVJiQbU",
  "key38": "yXwKaMDDRCvrsNiQ5t1jSUk9fPexUU52HyTxc164DTd6LVvzstn2YeyjKJeJ1CQrAj7ewzLAsc4oTKHXwH9hExg",
  "key39": "3chQfbkTAdwE1Q8S93vfB7vcGMVA7Lws8YFZF3pwqGPyDQy7rJv7yVJ4U7uRwnczfifVBBHVq2Mm2QZncUXQ75gg",
  "key40": "4eeBdPKxt3GqTSo9QMHCrMTdVDxwvNrbcWSfzR7Z8hq7qtDUXuEqKAaWvYxv7bAi2crdi8DQVGaieEFnTf9u59aD",
  "key41": "311nscg5ihMaF7B8Av6pbB853YCacfWDEaRbMidoY8hLXyfxTG28xQz1sqectbMsddGXSo4midhvSPMeW8EBpXmx",
  "key42": "TfWjpBLcWZzdR5jGoK4tWpuXbDseLfsoqqS52DkDqwPnCVhK6vAzW7nznCfSLB7nmDvoiYL6NdP7UvwPLS8fFNS",
  "key43": "3rmX7fMBtNYTcdzdYoYEbJ83q9kGRmwWaVrjEG8XNbhnqHcSDrgHo7tkAmpJyGx8RKtuGkNtJ535cHfTwtKnxPEz"
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
