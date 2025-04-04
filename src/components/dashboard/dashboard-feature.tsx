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
    "2NPKZS1eJko8wEShUpPj1kvyHrLReAfYWxLG7LVhM5U71RaHeKzfb6HoT5dpZGpub1pGr3UVFGVxwkm5At1B5ydr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EvzU1PoRnqim7sXjmDPvi7sHQ6V2GDVNpsdtKV8bJonbhGYNivEyAUiNKrJnCphsYkNnHK59drvh3PNPn7Yq8o",
  "key1": "66W23USiGrC56Bu62gosub67SSGR1gCfXeHyNKsZxV7ZpinTTDWU496hNrpyCxonEE1RAkfPTdKvaFv5QAK1c6Cn",
  "key2": "5vu8hBVrRANun7irmznJqki95ZppGbhothBngw8Wck58L2neXGPWSUzyER2c2haTmcqMKvBEGuzS97CbLtw9J4cV",
  "key3": "3TURFMV3DQpNH4KxqM2sjSjQhJvUApy1cHYbdsCucrFp5cKe2vPiuKoYko1885gCyZtt5FvDr2cyEv5QUKcqyism",
  "key4": "349eLTT1cBgecUx9DZtes2eiemdUcvdCWimc1yK594mpm3UGDpb92GVPZsrNRawdzcZmvHSEt6tJH1LU3f9o3ZaL",
  "key5": "3JyfoqepU32PV3RjFmNhgFC439q5GcNcXVdRVoqDKfectz3HDBnDbCXt87yDFVT4NjZeV2VQ9bpYHWai3mfAXecV",
  "key6": "5Bk4pNierTzbz2Veh75EgZv3Paf58MDqatwyv33UMAkJkpJVJxKt5y8gdQShU8rm7E2ukJbmEVg5MVa1hLn9H2bF",
  "key7": "2CrMBFF2uk8GxZCq16zcZCRE1uDq618FMajRUUeb5Xi97wfDj6pEUx4DPud1fEW3jNqQBvbsiD7ahWZ7PQVKbVwq",
  "key8": "3p83x6FgaPtsuJCgnrCmCwAngEwR4VCUd8rgospAYLCJMysoWnkYBS11QuBvpmyPbouqEK4fNpKVoYMBgRxDnzYF",
  "key9": "5a3c5V4SfxSnD8i9AtGqkbDHL2TzEH3ysVrXmN3yC4eA1LWkLKNbV2R81vTVXEVp2aaFGmT1WZcEtHnjSaA7nvrP",
  "key10": "5PFk9PADs9axpLyMgratqSkm5RgqMjJsteJcMvL7bK6RKeA9t2eG6joD4Fiy41YMjUccyoAqrjmU6574s2MeWA4k",
  "key11": "5tQG3pQJR1PqWiqMfiHEfULbkdo3nmx7N91xyk7EmSNM7C6HCABjF95o3tgVLPfQ7QHqwuirhucajbGNJdK2wS4P",
  "key12": "QX2FERGrzV3oLu2MjNo3ewD7PyW1hgsX6B2xLAWD3cX3Vx2Tn8ikZ9uekTvxVA7mhe4sXwBwWorGHvQiN76sRJx",
  "key13": "2aAg6MnxsbK397A1eiqGWPMyEdTjLvgCzoZdgN7bBZVTyVbb4mnJAR8kRYHkQLrhrNE5w4oX2SxQ8fVQgGoBe1p3",
  "key14": "5UGdfx64fZhTrUULXgwMkxsyHkRwYnkJAMKNYvFF7sdGftoJtUAYViLjCcpCS79xR2N5yrDL2VYDGDJDVzWo5DV4",
  "key15": "5qUauaEAMzr5U9u5FPeyC7PyygCn94nT2mGSuJTtqoSMaUxB7yVBc4X1frEBAPMhd5iSwiWdjqT3GYpr4KGR5Sjo",
  "key16": "517eaqXoQ4YnKnxPzLKGkwLdXive5bynSRm5sUDeW2QEMz2XZuD3i6NC2SJSnq2vstHQxsNZRCSESYF3ERG5TvcS",
  "key17": "28incjVE7ekN1fWFtiz1Gn7U1NFkVBxTZcJGnTng8ga4PLkWvYvHZ1cs7nsDtqyH1YNVt6wV5bo87x9G7tDJFkkT",
  "key18": "2GcDru6N1vXAjnoPu6HDBLqAytHp43FzsZw1uSSkKN4b9HLdJjExwUutZixSoCpBqWoJvcVBbkMxJZ2rqXaAvXa2",
  "key19": "4g8G3UKy4HVhW6VF4rAHh9SvLUoJRqryTy2GRz1yV54JYZ4EsfrfFmMDNihTt8WvtXx5Ge9w4T4kxX8jAGNLDcMs",
  "key20": "2rQmJ8XypNYGfmbH36tDxKNUrxjMyMnuvdiH8JvCS73T86NGsb3CZc5VQBzdkMdxCer7Ar3dDnikqfFJeztMPSqM",
  "key21": "61iVi3hpVwfHV7YJpxSn7MMSiLAd82CEm1z7TMNf9cuegpcdb4kz8NvGVwhp5qavLawV2WTds3BDMGCXbeYhssbe",
  "key22": "2gerhCrD4gVrCMNvmz7iLRfnPnWfUyCSs7wxXWg9owTzw5cxvueZEkbVoQJco6WwMZYwKDMGK2YHrhBLvPEfggJe",
  "key23": "3Z2YysgjtYBTDe7KrGPD2VVkRTeu4ZYPEQ1hBXu6LZrAYFJJSUULQb1gak4bRMCP18iFDEX9KGQz3c9jTCSDnACH",
  "key24": "29PyZKQ6ETSAk5tpXp7rYA7HMx4NAfwmcRRKCKunRry1zgPJVAPK7UbvdJcJmpMRNHDEZUGeV1rPn8NKpYaSa4As",
  "key25": "4frcMeiJAwSc49eccRnc17tiD1XYfrGe2d4Ch5VP6PYtfgrgXCBuuhTVuicvStUn4EJJgG78CBzDNhrJPus2ngpS",
  "key26": "2TddCX2AxmQHDyyqJaDaYef31Kr3sd8R1MsBvThdo2roowPnHfFY4RtFbaA2JbPHsFnteTSHeQAaMWZgsrncZ8tq",
  "key27": "3E6RrhEzzJdP6pdjYrx8VTmYzP7y99X4dszi8YUKTayWNAbgq4kB8yxvrzjUtrddmXMC5CkkdF4mB45gHXivQko4",
  "key28": "XtyGppSyHvkfHsHLi7q7WWD7Ui3brRwwxzTTdeNEiTkCefzz5QbXF62DRDwB17EWWRcRmPBJZ7pMLMSgGGdUm2W",
  "key29": "5HQyFqtvxpq3gQgZ8gy6X9WnxvYUUQRJogC9S2F1NsVUd9KX6YPch6KF4q56Cy3HFRyWkzBLQaXeSuGnWyFWzWdr",
  "key30": "2k39MASDvLc9M1kzCfQTfo32tZTtqpRZRFy5bNx7Yrm6fpRgd5UKjCVDG8bBrwZBCfUQEB4R4ug9ecSR8Rnaivd1",
  "key31": "wsM2HpCc37m5qqcePSRekDDzerxweTB4iuGgFsArUoxcF9rRkJSxfQHFyW7Tr2Nr3qXC5ZwjmtDo3FaMkEDsEz9",
  "key32": "2pCstkH87k7ruRFTbU2EzwYf5cauPFrrAP812jg2iHNVuoVfc5kx47DrZyieHw45JrxK56nYTB47L4iwRaLxMzmt",
  "key33": "3nR5iANABxgBTEYwHahPaVrLxCHmzMDU1UjtW7LN6DJk2DbyBuspkzaVGbihGhCtXH8yFmeZXVAj8RhwWLeVRJRX",
  "key34": "VwvMR9tjffbY9o6FW5AK4WDvkJ5RGBCsKsPiyHSpz5cYsFtqAFbrGBULNnajgtArZo98CBmvqMi6eNxPCwV8bUC",
  "key35": "3ZLH8uPupPvMSXivk6JPNmYBaVngZc6wLKoiqR2LQs8XvVWLrFvL6jGU5Lr447jURe5Who6o68mQbRgY6AA8cxDL",
  "key36": "6We8ydTQD1SvN9YBhTAa7btnXEWA7MUwyfc2sTrV2X2a3xgpKavXXNzyrMCPsLqvp57vhU6Gr2CeR7zUu1BLrZW",
  "key37": "5ngjiZXZMDkHynkKU4BMqeawFQyjGbbNg36yTKtWEZxiuiZz4R5no7EX2WgvbQoj8Y3NFm8x4Z2TpNL3JkGRgsPH",
  "key38": "2mcvcqfFsf9BA9WAtKTkaK1czRubjhEnz4KthGyAJbMVv5pQfmMWGCNYGS4uyzi55DqfpGdCPSSRwsjFVZQzsFg3",
  "key39": "51LBpRDQwxbU8GfVbX9G4FxRDc6zhxdVgFBUvg219QqP8BDCbWHYmMdxvezVz8e9aj4PHKNXujuV9vGAo8xhGK2Q",
  "key40": "AnuKDs5fhsJUBdkvmfzRgFXANJM6HjjoXCwRM4A7nwYgSwKbeQgTM3Kyp3Djda6sWxmCqWuDKiaUVoeNP2fq2jQ",
  "key41": "4NAvMcjCWGshzjpn17j75Kp8WgV3ZYqtxcMiqkgLV2FGmvtHzdTQxKEB1hmXDuZsJuKCiwzFoXWLV7YuhmzzkpA4",
  "key42": "4QDw3hE2Huj6AiBcxUYAtTcyXMU1fhUJrRmzV9QtBzLiUUoby82zbbNrNbnd74xfJnjULMJK8AT4t9aJ6LvQbm9E",
  "key43": "5HjriTRLbVFzfxLiWcgHa7DsrqouRjvAWCVzoyGjET2spSR2SbtLGpL5bkQATiRmtbnYXsH5JVun9GKg1WYRZKDv"
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
