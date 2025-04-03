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
    "4UiYyvwNUGG1FvvMycEJWpHKkna63kud9Hti3T3B7HRxnbH2mu3WfaXRKUNHUq2t542NCkKYMLEP6eEYVsFarfBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCGDvshb27XnCjASyB5MTFxncsvFX8ASYAQ4PSvgbXX1DHKk46R6XueNgASsuGb5VF5mVhvtc5re8hwqDpy1vtw",
  "key1": "Y1N1SkzW7CGTcuNFpLRv7FbVfQ78H3qpHwfMhJsveGWV9Cv4fCAzQ9T6mdRsjLfDi7j3drosUrMD33DSkg4Cqmk",
  "key2": "2GvuHEmMGEscMQspSBzY6L3GTBufSXioKUfxRpudVuPzpK76dQArd98fvdqHEekZDgRVZ6137f2EyweWBCKju2Wx",
  "key3": "2fcVp8ZFRJYVXcMeEnrpm5BdcgGhMCykB5H8vniC6oeRn2dige9uJ85zvYkZZLxFhG6RWTT8QBDJwRtmszuNbAmu",
  "key4": "StYSWNQcp6geVwyffYPLXenfiDCNY95SeJsbfbe8sacMnZAsb2RugcJwZRoGh8vrUVPdsUKr1uUfVts9TQFTaWr",
  "key5": "5bQG2h3z5YCHkHqi5WSsUAwqyJiPJjTBo7kppvsuxYDzKTuGGeU8m3wkDTFBVDuT2gxnf8eJmr9PLBjs1FHRt9W7",
  "key6": "2niraeQDu5NNh92BcLv5LnuUdNUB4Ztst8SmsPguvPLFcpd2aYE1EazAzTeYcm8Qatsce8diHVA2VaRWvNsGqmN6",
  "key7": "9TocUENdnjCLrUEWfWWw7L1RjhDzCanh64pCahkgjE2LiJpdhw42WF2BmcY6XZtRo695s9dUESgkKFXaP37Lj1f",
  "key8": "2jjG2D9XfEFMCv6GMeQPaLsFgvfrW9c5rw6Gs35sppzgq5LvqijBhTCoHgKioYXq2LuACE35keFGhKFzzUSTgXSi",
  "key9": "5v4h6Mmjx9YKc5gxEx6XwjMz9DWHUTs8p8MNLUPPtmoXLZAqWDNGhCaNBLWhs8bD3BXFtvfhM6h1XfJ8cFrgRx7u",
  "key10": "3aHgxEuazDAQFSVrvLnYojZeTcHBSvWVJ8ibTNqyf6NWzR1Wjy7rsXQsZoDpzcp5oUc5eo4jumtAdKsb437oFJRp",
  "key11": "4i2k8HX6hSz45KfC2m4bpzV5TgpR4XjiuBpq4vXhkpvuHHY1Pu1nuvyjDz39MfMQ1XUv6gtrzaEg6wavWXX1TJXj",
  "key12": "3tjgoxAPcFYd6JEoxJiHevFQku1ftZz2XvxV14tS3bYkSrv3tP8TSv3NRnoBrvrFM4Mq7b7XodDtnoEjdrgune9R",
  "key13": "5SoAx2i7BP95smq9yTrZzdXAmUCXCw24cxShx5p6qSErFdw5bBkTJWH4sSTvLjTfNSZvwwfnFumuyqLrtWJLBZsh",
  "key14": "4U3GJBMjw89LqwNx2RWSyYNpd2sKv6EfrkShJ31HWCvVe5Fm93nZyTy8JZVWEQWSrmbDfdDpNYYPArV3T8U5u9Z7",
  "key15": "4sXsMch1Hvfv4asKdW26bpEEJ7CT65Khmrw175xR7FXuW24Ao5PGTwA1mtu8sfzEFghBxdqB5CJa7KAQadFdtW8C",
  "key16": "66FS1k5eqPoLpfpTd4VknEjGTrwAQPvoxFMCNyhDV6Q6dCn74XFFfuGTJTouv2LBhoFiSeFRTpWJtEVS885DkwDV",
  "key17": "2kCDmnBa9oLZ91DFqod5vKjy9JEscJoBtHXrj2xv4fwtg5XzeYXvzz4ct8ycRJG9eokW2Mgpk2aUDht2nb4R5NMJ",
  "key18": "5aCfNASpEHAiwKcJJw3hFzn54xrX9VzGrhVwkfGvkZbQ4CUaprpUJDagkgZR11MMjyFDfsVRzhqJtyG1nzYrArv7",
  "key19": "36gVqMt84cKYdsVsZuveHFB3n1ac5UwHsyqtFCFBJaKuBQB6Q1nZbi6RNe6P949hV2cdsxg8VPX28n7X75WAUGL8",
  "key20": "4jzUruEEEJqmQgjC5tV3ruBNvoZp3Z8SU9PWBMQbi5AhAqKzrZya6ko2rBsrp4Re9wNgNJsFxKcwruwrMJfuag9E",
  "key21": "5yww89jer14YNHNnogbTMMPxC7WPwZWjNyQvaoKm8Tey8vNy5vKdsHKAzfwCHqQrFxNU55H9Fz1hThB4CDmgm1KA",
  "key22": "4LvX2rfr8dvrC5X2qUtL4EajWeggfjbPawKSUJJ7fFeoPxnMDgXvZzb7Ytpzj17ajWPocunH5Piq1yozNBRs8pEA",
  "key23": "2iufugosrJ1HvaPyv4syvungSrCNwpMdtNhMEMrRyHgCdunaS7dFtMWXFCUxhkfVrtq4WizYU2iuspwg7xUPn7EN",
  "key24": "3MihEJyGo1ZusGt8kixMkQowfYEMPVfSVuYDaCmMfcVwBR35gJnZiXfFspcxfe1U3nNsf7kKUTbbSNMg4Z2e2JEh",
  "key25": "5FHCEGr6RT8wqVrJx5fHbLBrCdikuRbt8iQTwmLBMC42sVLRqpMc6vPJTq91sC4dYsLJwcizqHuyuk7eoCoV2g1j",
  "key26": "5pNVth85MbgktD6UMVMVRi7gS7yYPkau9ZvbTgjqKTFhsLmgjm5iZVGeMNnDwsG3JdJuCwCe97pisnRg4xUt6D8U",
  "key27": "2PmpyQszsquaw9KJFLcjZj5avKzQyebwik4XJ8mNwdmNu7GfyuGotLds2snCtQenpT9NR4cYDgbFvFmygAbUcvmD",
  "key28": "jk8cbUi3LQbkKUocWRTyqQHfgW6upqXX1Nz3EiEuY4nNiWdE4NJ3FZw2QHhAnX7uMgXW1bUBrMKsdcpCnThJEEt",
  "key29": "gvPt5wjGcvgHXtTtAyYPc9xUU9U9qKSdNCJVH7kJZLLk11wFBXFyGq3iNrgYypq8Hv32gDbAfr8cgPrC9daZxnK",
  "key30": "3u82TQrjkMcxyTkVjVPPNmqvKmprroGNA2EhxeZY2vgdNQHvg9qWmj473cBqCJz5VoVQpSmVHWPYoC2evVJkksHN",
  "key31": "5rwirGWhL6BHqigWys1dntfNdk3kUaj9WgZpd7af57kj9s5ngqaXzPGZorfMbP52o8JGMG2STsTE1XAh6DnQW4D6",
  "key32": "3p1ebxtou77wperNbTApBvUYwSp4mYXnh7SoS9zZDYqxzN6vCswZjef4TUcc3LzuWqbPPs4BzwSacrfwy7XbQR55",
  "key33": "5Xpf5SWF5eKjkV6M6ubbaV1dj7yWTwAjqtd24hdRe6sMxPMXj4YTn4tzroTwqn7satuCDKdDjGHY2h4Hqx7UPWqZ",
  "key34": "39rMD7zsHHVirfCtiGZSotMQoYbNF9FxBHZpT6GtRqDZQrHypjTEABJKscfqjfFu1eUT1FTP6XCEBgYZ853TMv2q",
  "key35": "2Xym3iLTpC4uaDF14ojVcSzD3118PTeungxV3EBP1agCgq39XhFT38qUca5AJK7Dvu38LxzxMFMZqghsZRsFCeJu",
  "key36": "2qrgLzATtTe2oVALoFW1FSskCY8iMs67e3gRzwWatpXbVpsBjNAx2FpGEdvpCcKttNPgzg13DUFAkGFv835tfVxM",
  "key37": "5LdWB965UzxPGwiqUgNASq7o4VTRqHyZH6DxHB9jci7fE4F8HoFiLDWAiwVVq34GKGTchJT5zUaax1rKzfhSe8pQ",
  "key38": "3RpkfUAZ5eZtejcsEVY69qqCU5Ykin2aLnmrszp85C3TY6DJGUSqskb5sNSyCbQZUJpHvJnU4WGKM4obHVvoHYWg",
  "key39": "3ZczzJdvENcxhga6pf3vwph8SvqiVYYF3pK4VVz64xzwLYVtTjaP8VeL7kxz8mphZr4k66LgDievb2tN9Sav7uY",
  "key40": "5XFrnCZBnbPGBarDbsC35EuECYPqFxyKrinGMfxCiAFfV3bhgzjxRH9htYdAgwwWMfEi58284UVDe1j7Wdx1DuDN",
  "key41": "2CMw3wbtJDG2455TE2wHApX88RvxZY9AmphbZX8UMntb2vgKf2DGJoe3BGYP94hgZcxSBKGsoDcBNWqeSXvVyLRi",
  "key42": "2wDSkGTVu3ZLXbE8Pw8YqyWQbdNMcbdmWokqjHbKQqdFhFj7Ugbf4NJnjxBX2twT245tRf3UjCyd8jy8LmBy83Lj"
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
