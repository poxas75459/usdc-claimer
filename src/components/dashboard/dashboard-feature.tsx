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
    "47NgqS6XEqcR8EXw7vQuUHLKUsZWHXQ9rPMo9kW84jwMNSaZ61WxFFy2UdGEn2sNQwPRrWNSFfxs1wJAUkNS9bdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQUgWF5sfgmrYtrmEeL7gUpGTZibJWYYtVfCGVi2JJeRbpEzLupHEte6g1rfjTiSBTHt8yxBynR1Ar2km4n6tLb",
  "key1": "4H7xyEQteMwcycyGZnZ76SamUAUdjBrk3Rcns3boYkar6tozpSrwbxLzUjn7ggL6m4ntEFMTujPYXwXg61hcJuqn",
  "key2": "5pbYQzHty7UEHjY59oSSsmDb9tJWWP8JoYJWMGk3f48cziafSFba7sqAiRdQu1KuRALCj7SuA8h98tVoyFRjrEqS",
  "key3": "5HioVbfCqfQQK4NW6JB58wWkzLAqF3imYaNbE69ChKfLBeUqVCYdatBigtYnPqHNoBzFjainf4VG89AtVmZgP9Lj",
  "key4": "4S6cV2LFrLpCYPXCtDotttRXiAdp3AynEGNa3GzdRAjDP5piZimj8zxhM2uHwSiPt6mZBSp8WkyYrBto9Wug6N33",
  "key5": "2sQ88ZR86bM6fGKBvYctf59bV38JyL4z1voECf7xurbJhfNELuKvwde1AywVipLdoDQ9doYy8mzSYEWsK24i99Ki",
  "key6": "3pvtiLoMFcxbF2KDTnzGbpENYRwonYo7YNaRcSZTxY2qUVgXAsbLk2Lg1DnL25SG1nLHC7xhuBcFZxmA8dN2mXQy",
  "key7": "4AvQSFxPAswTrDintyVpkPmQSbjc1e8wgxMyJqTKYrypqfH4WY1UvGh9pmsfFQhDfHrTjD7BA4cT69LkSquQy5DC",
  "key8": "2aPycwSDFd8NH1imUJwNtWN6Zg1ZmgJLtj3bPRDkEzd6jALVLv9ydJpQ4fhZGCiuyjyeK71kHieskgS9y34HQYg1",
  "key9": "2YxRjrL2qnM6RdPZCjGjEdiGKgvbPyAwRPNnMksmahJMwLbdp4Lyju6g19QHRZVzm9Kw3VbzDdki9ZKJz81yD6Z8",
  "key10": "aiahHjuBYK3qqKenQtPNx8MvsG9cTRnKpfeGxak1PY91V27rz2YoumH8cHd7EoaTpSViFsx62v5GA6NGZi1ToSp",
  "key11": "39r2aLTCgTYxrgWm5KZrWskVQqbFACrrTzSa9kcU22c4oiZmhzniMtpkAdHvxX6i5uw6Uj4uh3wUnrfcaSdQwuij",
  "key12": "44tEE4jqdzN42CZESPvqTNw5EHAXwYtGZZkv7UKUcbLJ1HohpcjYjZqogUHyPVgZYkkbE6fTMjyhgeE3Ko8vsKRk",
  "key13": "5faR3srFdkpfTWABFuZgk8Yt4QMkJz3J37LocuJeNZVC1uos8jjAe4Stt3kVrvQSPgF1CM2C9dX1JLP9oSRSYUuL",
  "key14": "2B2utUSuEDMPijM2hMbDQpxQBh13xtuHdr2jgvJj34wzZP4Ep3KjmTdsBKKuh3yQcvfPZ13StrK2AvEzzimRnnCB",
  "key15": "26cuL1poBysgxjuiy7HeTk4thFy3pU6kqjbg4vLYZVkyxnVE7CF3JZ34oneRVpmrU7U2UXNRyVjgbN5nEKfJqatT",
  "key16": "5CyMmSEregLSqhCvtPkNkvUQeF5arhVaGmxuppPjPTGrJj9Kj2jPYJesP3uRXWUf3sgNwudfd62WTUbgVuc5Ej1M",
  "key17": "h4fMWaW7NC2yUVepn9NCqXg4Wb8uuMJvBMNQ2en7BTiHXZ9MJFMGJaCR9jq2XTYc8gvwSKErHcCsEcwoPv1VGPe",
  "key18": "i5YR6vP66Te1UnZu7LGFexRwiWuD1XuiPMmHUD1B5izNi56uzgzuqLigJDHsgjrM9YaD9k4LLVj4A7RsKCrUdzn",
  "key19": "27YeNfjDJ1YmdF72LpwPGQQ59sR9W2EtMAtx6Zrca8zFc2owsV17LUjpPegXAWw1YwuDKpxaMN8mc9h8Z7vZ7vbB",
  "key20": "2DvJe4Xy4r6ov8yjUZ89tCqYi331PpJuDVS3g44QwFHgpftJuSZ9YkCxc25xfDE77K3DFzqSvMX1Snk8LNrXVQg9",
  "key21": "2ps12hxM8cT78jf1byfzy4MABDUc1YJF4VyPrSkQBP591n7sWPV5SyMctMqQc3wHhyJqH8P3TU8fD7KPpoDwxxSA",
  "key22": "4iWLfUBpWMQPGvt5ziYrS6urpxTCKts4Xtz3DhaG3TTwnqrdpoWGaAYJo5CfRvtDBB43VwU1NCdTY9g1tehW4piW",
  "key23": "66Cu8dBaZj72vMTR7nWYdJYVT1fuPTXXS3QCbChRo9m4ME15o2MNrHgPjn5QRs6qVghgdDqwc53rGfY6pQgpvNQ9",
  "key24": "E15MwkZygtXjG5eSDAjoTXHUZCH9bxNaZEZahVJnjv3UQ1kqdKRzFyyGNx9YGs93BNRnzPPNDjUrqiasCeUHmcz",
  "key25": "n1dtZoaj69WsGfLypgpWTaJMiv6m91ePqWgMAgfoGSd8mhEKq1dYDJPjvP6ZRawGd3mkBAMjtSuGKUVHorAxLHq",
  "key26": "oT1ibcnM6Q84cj8zex1umGyaSQ5CMCbm3RF6zpvcpUF1sjLkGnCU2Qw7Wb4tEE1RQxs912zUhweu1SU6Yg92efH",
  "key27": "2htZEPJLKFFb15dxwzP2cAgMpUxAqzBzQDwNN9stb5r4ToqKvsbKucJ8N3h5naSFmeRNigWS4ApRGakjuLoc8XN4",
  "key28": "3ZpjvoftQjm9pHjvdioQsvFeRMS5H5My455Q2T1sAYwRHP5Ea4otW5bvMBHqdUcwiZPSXbT7z2rUR5VwovNvHiAp",
  "key29": "3aAt1PFPHEFd3sbNL5vaYdYq7rLjavp5WeiTirU9Dh36JcnheSe3khi66dxp7tAz9Rk3APmCxiwh9eyRMXWsUopP",
  "key30": "4eEBdtwfgC4QjH5mCwZa9sNvi42cZaUgH1G9bfDR6u8kq2MKJ7CPs4TWnoRkJd4dFS432LHwgVbxUdYcjSqKc9ks",
  "key31": "2RJrBuM2sdgZ2jqYmWgSvxs6XETNR7Bb9qq2DXRgLuuh7D7bR4gswX8qjYYuE5FMgEBEYhvNKx3zGF2orZ5eiZLW",
  "key32": "3Aafx7hehtaYW9xUSbk1RQaXnCVXxhQiAyZjcYWW3WhhuZJqzpJ55ZyD1Yamr7GDaVHmdun51hTuDEztq5bu2S7E",
  "key33": "2m7tmTQ5SJQF5sHcNW4E8RQYwdUVt9FGC62Dp5FixW2gfEsa6UWe16TG5UTaVXvRdNqBkHdb76beDvsKAqXNvydM",
  "key34": "2sHTEnRGvDxcvYnVtFyrCipyMMXLkh9J3kmDHqPdn7xATV9DjmWzh2KUnMrk5Vj5gDZU2mHj9WQ2brEgGhqecNks",
  "key35": "345TeGhRLHNFNwXjth6vjZ54r1tdPdb6RK3T59z1ytRu9aXMwzfL9biakxsVzETHRRoCmWiG7d6JypJcdkWSyMyJ",
  "key36": "38GkStvmYWrmqh4NRYKvtiExRAekVNxxN5xP2Ys8Ha2PdXnhGvpHPK6T9Sp4y5fvi6wZBuhtCzMHgYLywJ2nRcmj",
  "key37": "4FXoAxhU7PpkSv8ACSDbcChi8xqAyPqboo3rrXZtGWeWmi4s9BxRkf9AKzrrNCMCbFiioMcH2964p5PLJJXWpYsS",
  "key38": "4qKncUJgVjYVp2RoNxbwRX5ojzv34r7YgMbzT7EPRw8fu5a2VJ9KGHYPAebAvnvcwoCyUkGtvs4yU54Uubkfrfs6",
  "key39": "7sF3Wm1P5UY5gzJ6XfkS99mGeCUBQP3U68CHAeK7k4BnLGVHZ7uS8yD9W3AwakaJAzWzfjkhfeWPHaUNgrXn1rW",
  "key40": "2pjNsHbBUEHUNAWMYf43TWktGgnyipoXTz4JUzD1zfuC9XMppJdPattAZ3j5ghaezMUwbdMQ52Ym9kC5qhEVtXA7",
  "key41": "5Li9mZvrcvuWjV7r8ufuYb6AZqrnmo6WtcLdUr5Ke7nuiBK5ByJ7gtAFN7pdAhaX6L87sjjPP1KDuhoYZHQLAupL"
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
