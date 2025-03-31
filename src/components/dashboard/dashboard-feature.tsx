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
    "NauSaSr4anhLDsM2aWsoSEBXBbYR1VUnzWWmQDnUTLHxqxMtRsrbX7CANkGch6g6afjvyXmPXoPAkKAHCtLozHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLbQxV15WmWNFPf1BZo7FGw59hrrAeWEq5UyFczEQc2Yvje1s1QxszzD2kDPsveNi9MBBypyjAaa1u1rs3rTqyh",
  "key1": "5TAF4MCGEYPXX6kDCzktMbjHsC8z29DpMHB6xRGgZmkZq1ejoKGtSkVKd3zibBrexPacZBjZkhqRZaqmvHYtM7hV",
  "key2": "3bFs4TeXS253UkKkbmF5C8wTxK7bWqxb2msY6g8JoPic7kgYzHvuc2C4GV9PYnpHiS7uheFsUaBpLF45YT2Pyj8x",
  "key3": "4nk8s3e67CM1oRmfW8J9Qen6k8hoLfDGTjzeR6qxSy3s1bRcujZxjeGq9VJpYMKKL8bwpeFSpFohc7daxve6Xxoe",
  "key4": "3rNgUQCrv9t6MdmtjMnsLsxEXQWoKEvwv55ENHhpnpSqgCPg5UM95YfYyMb1XkjD288ZsxGhsjm39NSVnRUFMQJ5",
  "key5": "hnjvGaMFR8VD8nEPvvUTmMvAu9EvBghMCStFwFpedQ9NmoYePjRtQV8167B9C1VjHeGxD4DjdugasiZBMgttyzK",
  "key6": "LVs2TawmiK2RKughydkt9pBV3dggkY6EgQ6yx66JJPQp6RsKGxjnrE4wWfJ9uzqMARS8n4rrfGGxuivWqBxnnQD",
  "key7": "gEqkCCZnEMFpEimkgcai7p887onYtth31sLDXx9wgyHQa35LyeRDEh12XC2yP5akkaAm5g6DHkkgjq4d6NSNTMp",
  "key8": "4FYpfb1sWyNNWppDND6nWz7cFXh5rrHBjyDPGi12zru6Vw722q1JqJk7PbxjTYtU4gnXpgL7bGNeNV5Uc3LkL1Rb",
  "key9": "26SC7SYbGFvbgk5691Vjs8qoYqn1iu2pK5hT7t31dUGEAxcL8QEJEXKp51SFHkECkPftMrWs9zrENXDvicatzFpY",
  "key10": "62j137DAPyQbY23pHMUL8shMPgnZ4qgH59PmrG1kGxvkCuPaLP79EqQv1LsmkmFct2Qyj7sMsdviRykk4rbtwaeZ",
  "key11": "2pMJkD1Yxn8EpRrE92Vbb2ELBzUC19F6vFVGESXLbLbDLzm54fxHaki8EPxUTxBWbyeHb5f1WYC3jgk1ioYJ1o7t",
  "key12": "3YMw1bB89VuLWFxtRz5TYcEhvxyBvYy2n4u7Mf96quHy5PKx4ZvMdi6LPLotnKi7wid7Lv7VtCs5jKwHDMM2AjM8",
  "key13": "3fwWpEqrsSaKch5BCmcbUovDtcSS8nFA4oesNUEYrn7jjxcK1TqLg12V6GVsdzfdJ9U7wZWbsfphiPnPFo7pJD1j",
  "key14": "4qU5EHrPS6BApofjegu8xUj2JrvUyBVzJceXYnvrPUXu7KUGtJP5XbBAbzjBntrpXiFFijypjogiTkVhZbPuSxYt",
  "key15": "3r5A1jwoY8HDRe7zSXqfdcJEfaxamy12ftGPpWxTzGQxBDyGuETdYvHq4Hm81m3qvk8CNUvHN4n29zC4YnQiwbwo",
  "key16": "wndUGUvSTFTUha6XuyT7fBhRwQUx7Xr7x77zFJKNB1Qssqgi8r9GLvsvAkxLzXwTt8TgnFbmJL848R1SyJ26u5o",
  "key17": "upg8Tj21GH9M3EDTrGBufJ3w2VfxfspnYHSnH99mg7CZRzGKCD5W1EQFBx2vFYTUESTQVNGpomgK3VeDV5XeX6D",
  "key18": "3Eje3jsDDyfFJUm2EJRvAJwxC7fmTHPrWMoNX1xT4kPBuVPtpEWG8uerXnJEMMDHBVmxSytKiFzTaYvTy5AB8LVA",
  "key19": "cCwPh5eyKJYoc5keGByoYJywHF1KLyk5eobcSi9AUpGdSs82fU9RvPGgSVK9uZbZnKhAu9KFtYE8pbBzm5hUj6L",
  "key20": "5ogN7iUoHvgVuuunpj8HTBY12DeUiRm85SZdxLudU4tub3kDSH4EawtciRp736wHm8NbmBnz81fBwvcxLT44kKNT",
  "key21": "2akrMGqP7q8Ckhh5vkpYAw2NhfdLabMaqaBLc2RYeShoFMdvTf6GRsKu2YftkkRNFdfbvVWGekvN4ESHXSDCg7wp",
  "key22": "4z66dQdQJfPCKARNCrDY8aQz4XpDz2oVf5HRLGpQaypcsUsaCtRSTceJ9Wq1sWhWTC3Xtw9Z2F6GGTWa4sSJZKWg",
  "key23": "4PMnTmL9WpLG9DsoFXmaWefnBhnPbBsZxEXPnTv6ugiZ5Udq2NWu9ao7NeWwzzyixnzXBpmAquapDZvBMR8QtvLy",
  "key24": "23te3TbALXhhDNRosZHC6SHijz5j7iSzWYv4t8ERmU3HsLFznLuJWdRFvEZAneTbpxGWx7RSScbmeczNt1WPPXTZ",
  "key25": "4oSDkN9o33j9qGXTnTvXWLiD3gUk7MKjATPihBAeBm2GbDWfsFtHhCqsGHB1bUEEWbgBPNrVBYvMtyfDdZDSLFtz",
  "key26": "5nMsY3NcdazFqgv9ofgUGoB17B5Q1e3PaBbGZjDu5NwrKhJSfA7ny5drnci5XtDPKjBEXT86azhj72TZ9vFC8Y9x",
  "key27": "4vD6ovwrxNrYTGEDLKTVwerPCjmWnf6jPr7M5Aoh9VSFtNuAjuDNVdK4bzM5g8KEr6cyMd3xo1Sj7nA53Qv6MdQ",
  "key28": "4EUJ78F8tWcLdwmbLg2RGAeqkCceggS6aAs3C64Zx7gihbPJEsVu2NTw1P3v1ik5gxknFmwjBTeaXDdAXSHCE5oN",
  "key29": "2jtS3t9oKrY8kBDjyix1kr8iKETHko3dxMnm9bZ81psGQMarMTq9n5QE7aQGVrXUreHJG5i93P8Q4MB8oQDzv28m",
  "key30": "V8ugFM3XBmmkTDWv3BjVJCHjwRzmRU3XDNy2dGNdnwK1orxSZtsheZoZ9Tc1SbCSJny7UEumswUVuXdHcZg5yx6",
  "key31": "4hEpM4VcUq2UmFaMqsYGnJJ8C6A1wJqpKDXjo7RJB1qWYCokZaYczdCg4A6gLyJdBv8aKt2yyjEFC2nsp11ntX12",
  "key32": "2w1A3HUqYKg5Zmbi9Rwafx382YPDFLJXYC8Hn6pcUqD1kjHQoK8yy5N2yp4TrjXeeRTLKwSzNpL1Mc7LoKqYYiKX",
  "key33": "4iR4Ag2CKc9WYriCyVS5k9o4CQzZ2LwxkB79M4cxpfuPmfaEgcowVvu9vNgtoakKEoR5PiMZZPjwydexoTBpwkUu",
  "key34": "2vpkd9VvecaWD6HkUZKxmDHmR4myVQwqShJmRdCtaHGABe6tXUZLC3hu9Df34UgvCUiqu3NzgpbkhTPc7YaGctfk",
  "key35": "5hBVeW6yDTopp3NLdtRgxZREmCafbwL6j5ByaAdDiTmzF2FBTdCjNNMhDYUzuikzguv7qtB9MSYEsi6VC9V3YGf6"
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
