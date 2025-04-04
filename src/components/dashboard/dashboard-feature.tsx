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
    "5t6mH1shj7AgVqYCuhxdMjAPdRqmYzT4Zmrx8bU92GChBmh8XFeTMAekVTyFpyAwfHGqUQPqrPToN7LvdAEuJzR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3VHiJgViYWkV9WjBvhR3GH814uQsJ2XxkeSVGLrnugHNFppV3yL53shiDFwAf8yuPfPnyzS45bNpFWHU37nynx",
  "key1": "aFg1B4MEaQFEZ5NEyruDLRRiG62n27iLdijaMWcEMhbg5taCzZ2QuGb9UEufcBAcpss7SbVmzR9ZxT8zPDgSn8Z",
  "key2": "5YaoT6b6Kk1fd8yG9F3mWQjeeZ3xsqh3hg5P3GW5QdT9tVYHWh8Wi3nbRWyDwcrMT44ocAvs9bESbSFhcLJUMReS",
  "key3": "56hVDkMWBkQ8CTxKj2dDN4sr34JE9xTqz6aoGHideQDLqadakHTK1XaBhFofjZbJ5HeFCrxxTayFdSFeLkCFhUvq",
  "key4": "2HS99Gbps9jAXEaxY4qAnkK5deVj3vAp1ECe8qKHTaug9uzpG4qh6Zy9W7o14W6DoVBoYYy9E6homdvVDeo5axjs",
  "key5": "5quZj5d8GrbTj5eFzg5r4A6SqT4qgi6xp5gEr2dFJ4jcJt2YdXv84iWfgW6s48LvwGvBdaNi1Us5ZDdbDVqzEa3G",
  "key6": "29mi2paHCiopv9Qy8gj1qkbwJPohKZKWmJjCW19Boju3YgXVCrqGGZhDsCfY8LDgQTymhku4K1uADn2GJARrqgfA",
  "key7": "4mxK5dHeDGoBL3AsSrguLorvhjvf1ruE21JKwzhavRUwD2p3snPWC5ehwhUE1o23zM2zFEwRkkmdwRuuNfg3FvfR",
  "key8": "5ksjpR9Gbz2JRL9wdCsfXEz4canPc6CCTC1AoXvt1BQ3ZNHxyVsWB2obGLzkPEwdJpTWyPiG6tus3soeVWDHR3yA",
  "key9": "4bNfvW7wxzVADVSfnuh4s3ixg2rTNETuQN6R9Ta2y1DexSTmdffvzcjpCfctjCF9wLpBYz2tRddp7LY9qsXhJfBW",
  "key10": "4fCUiyNMyF5GfVXs6NJ1RTyAoCDm4yRVf43xedso3WhoprijvX5kc6CzkdRkfB3U8oo6c3b23FMybWMNq8Z81UAf",
  "key11": "3YzVzpYxzmFywRNTC6kCdsmuGAEdgpWF8L36CviW5RE52oqmJsLoVEn9h3Amz315Wak5nfmnbvMty1aFDkEu5pFD",
  "key12": "5si1uTUeheKrQUeZuVUHMby8Lfz4itxmoSxwbbHXUaYCuZUjYC9Q4w96yZrkTo3kp8wnYzdBobYATrJpuRAsM4W6",
  "key13": "2tydrVDoCAFSbAHpCoY1ZcxuhbBvW7B8tsvSbUQnMZaJDbMfSf5kDasfBYKhh4J1G3AjxeV1AKC9yTkPo7ovex5f",
  "key14": "3gDRKW9SXBf7JnbhSjM3MZj1aEBcpKgn6Wh9HTkT9WE6zAsU7zPgM4FNMpjA24XAqTCgJuBj8oLfhvyB5inmpJWM",
  "key15": "3bPjnfF3iYhxjx1zPisWk9cmv8WWZnf42KY4i8khnP7LN6TbhmWQwBBdodgK8ptNSr9JmY9BPYKSe6S2q34Rje6v",
  "key16": "34dEiGviGtwZUQGkGc7sVrvn2eD9BBmxb6VsK5BMDKGFEu9VBz2D4TNRaCXetYWJKhYCG9YZtM1pvFWV4kgwRLEw",
  "key17": "BPEcyQM4VZECdU3zAQz8W961wCpwtkH8Erpp41TT3BmwkECJRXcmcXQxUVKT1GvaS2SWnzikbJjr3rVEC2VBrX1",
  "key18": "2oZVCzqorJai2k7SsFprH1AxdyWkwBYQZWh8kuwtXwu4dTRzJWEW2MbJMriEhdQm7z9JJ4o9jmeTW3aTDZtc2S2x",
  "key19": "3RX23yz8T11h1tnXVcVNijf7LarTg6csrZDr7NW3W77gsB9DHc9faiokVYDkQJRVKczDi2dXckw3GR7KTXYw7NoN",
  "key20": "3tPcsSTPDhjr7KqAyrDNSdpPBnbvZZvFS2Cn9TLsMJ6Yeypr9mhQcZH5qH8i3iGVPZkmMYy7FRFG7g82aUAp654G",
  "key21": "UccwkijXZnGznf7KniPY1AMuAkA2chxuKEtzL6312gegeUnngc1CS8KD9J194VsfbocnaTFTMoLHKp4qtV7M3yt",
  "key22": "23voHhmEJzFnhmW7er3fZ1BWySpwHka69fvL2T28PaqM9h3VuFMPVVG98C3MGHkP8u49Db42MbpSR6sbZdnKZNmU",
  "key23": "36Sz3Wde3RqJ1dzDP6dgpR8rQ4mWdKWRx9CLkCeQUQGWngM89a5E8v2qAt7ogfe6bYkDCfXHZLN7RbYhjdcfgMmR",
  "key24": "41ytiHpfWUktsuZ5PWhFKJBJmywg4YUHqwp9LdtW9Uq1P4qTBgoMmRGTzk9f6oirwouCf9iSKDcvfQNTozzRGEFY",
  "key25": "5RDaLm4csWSuGvAcZMaiiLV3wE2qSF7WutBBbxTLc4krGP8ksBZfAdSViSH3c3LLVuU9jTU3ypV8V3dXcSud7sW3",
  "key26": "3CFLjHe3py4SW94diUV7oK2ZwRiSegdJsrb8aKWPBYSGbgrjN5WzoafpGffy1xXs4LY1szD3k25hjh4yo4sezjfE",
  "key27": "qG9TRBqJNFxaNX9s7ma1UDU9T5TJ5Z7b5vVWVS6VMAo9aMQ4RjSkFScezbQ9BvuRw4XbwDKLpZbFraEtYnsiPHL",
  "key28": "21xbewurgHMkojRTWgbVG3W9jL9GRXKLRhXjLU2KaQVEh11ABwocCEdgXZsZ4GiycMqNAqby7n52ok5pJXGz4h34",
  "key29": "5zVAMdM13RYxi4Yp5Tes5VGxcTRasotAWEzbLmB1MG275EBVpH4wLUZcRKhnnwht1kEXP3sBs4QZkKRheKjgpVXE",
  "key30": "329Dii7fdvQUvGRgSVp9p58wphkE4kGWpPBCZvEHABoHBo35gYN6vsCh5JGd252XFGqwEUsminammj2CTfMSvA2M",
  "key31": "5fecpKusLSq2GinTBqGq2gY9tJouujoK2VsuP4ytDtFKRFUMqCpLHC23NfBzUhBSYzJuvLSJiZwJS29dazXVXzLN",
  "key32": "3ekV7q6T622TbvfhbmLvJaHNufutCyQX3iwnDnwYL4zxb6rpwGZJ1F8Ubdfq8C2QVZJUMskCKqd8hQriTy86B4Wy",
  "key33": "5i8B9TkwvEkYn4unjpY8qWVUpL5ENCg1eGtrXoJWQa1iJ9LL6wGft7sM2aFpHWhvL2oAyVnWGK5sxCaZUGes6dGg",
  "key34": "2Y4Sp8SWn6LW6wFb7qcRTMtr6iTUukLfC4o4pJ7BfBLxro4sVDYe1yEsCXEPRvdCrFrdzKg8vHGP97WVtHq8i87P",
  "key35": "34ij8eyJvS6UKAYt45duYNjDqUYdzL4cmF1JsLhzoUSFz4fuGvKJmMP46nRTC8ALhppaHhNw9993D6t1cboxj1da",
  "key36": "3Fo1Dpc5mWkxLNfwryzA8HyhGxUFjYA6TcAdsmPMwBkrXTXkcYebx4n6NSDW23wJ35DgEapXU2zbauFYjPYuRs9o",
  "key37": "F92tPXri47gWYwdanXSrYhkXLB4137YpXctE3Z8gRaKmHZx1KxdvgGLKDoVGkFtE4KokL7SfuCrWRtGLjYYyxf3",
  "key38": "5V7oNUM5sBQsKz1b1od4F8PmUb99nyci6G5HG5uPKaSwCzFDYadthgXiWeSt5fnnVgewbL37zMkCFQvJTGwgTb7c"
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
