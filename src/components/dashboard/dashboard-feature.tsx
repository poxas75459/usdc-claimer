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
    "3mVjHDotr5KxC6YPE3MrEaTU2DS16sh2AAMZLYfTZBrHtCG71ZiHVqsbKUPLp5b3vEMKqHRQP7oQbkbh9pfA1E68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hrvvNHAVVX6XrgEg2U1NEVoavMxa3a33ymKmQMuYn1FuXLosh5w5zaZgfctmYwP6PewSWQKpkzj9zBm9NmgtUe",
  "key1": "5FD6LpL3wAj2iSf26FkABXPiLy79Z827xBa9SBr2nDppT8DXns2FzEZmEkAhH7QVJAupqVNo1cY6tTDHLc5etYP5",
  "key2": "3HPZcSzJ5pv8xAT1ZLQrjBxtFVAzxK5ZDdTdHcn4PBnt1TCKjAyYV8G6pNjxKeNnooHf1ygeWUJ4UBnegXsPoj9B",
  "key3": "eU4Py3TYabHaSq7CpJrnGVGUKRervgsGuPMPUeKgeoDMPEW1AiZVCP5oQGcx6g6eZvJgciUUt4euC439jRR65i2",
  "key4": "5xQFnYEU1nymPVP31vHsN2B47ohaWrw7vLxTcFvvSFrJ54JQJoNR4i7Bg9idkHmWq8YQtmgDXQHfKn252Ktzs3yL",
  "key5": "44Ski3z2Ws77iT7R6AcaJmHcLx2xSzrJUuNyjo7o8FDD7VCcYuutd6e2tge2VhcPy69zZRPE4WkaVrKEp8H9RmK7",
  "key6": "RrkY78LrkngSQJTsVpU5uKjdLK5juA5vbTXLK6eAMGAE9Xpvmsu71Z6dxyCaAPZtEoziX2abVpKvKP4GC62UQFP",
  "key7": "3VaZ8boBDKuz8DpPgEN8oJxkk913bwvFJUKe5he5N2nP2Nr6Pmkx68jPiEvdmDrETzBRsbwe23pUdFadR5ZAcH1S",
  "key8": "zibjygMhpeF2gG5Em9qD4SwXxpQkYZgzUrgxbjnyPnnhjK7UP6WsQjcoSr8xMysQFqXJuewdhiyAPnPKNY2JoKW",
  "key9": "r9eZF26LUYtVGbXLbniFBi9xwumGwuY2xHLBhdkzHp4DeWXTQpfS1pSpQ4ucUqj2FD2USBa7Z8EABFdTNYcrxWT",
  "key10": "3NuguFdRnEEgDsibfCdN8Uq5kGs8vYT3b6xRLkbaCLZEu5USKfubL2qpkXv6dKqh75N3q8FnqLNncv6M1DXT1iDG",
  "key11": "3uwC8CRYLUPcnEqdLptGg9B9x36b5FYWagPpwSTjMfvjJ9UGeaoiPiBYZDWPunUkzkGpZJ6Jy4KaXGZatZYinnK5",
  "key12": "4N4rawS657ZG9hs6F54qSigYBdrCjkYC84wTi8Pyz9g9u3waxscv8JEkVNHjjNtUQJaCkhxfDpMPj7nhVZyQoCAG",
  "key13": "4wq51VPvsCMvK3T998F7g18Z8tcUN6jynrw8FFArg6D3pmcnYpmkgzHC4m8ceo5Pf6rWWVx4fRqrpiNHgeNBthMd",
  "key14": "4GwfMoCgLgKBtBDcSpYi2DBoJX27y8uJJaXuDjQV6AwhMnm7ezTayJN2gFSucWp5w1THa7rXuXDp3W76uZ5Jwy3d",
  "key15": "wan7cGC971H7CJMfcpqYNRrdiPjpHUsokkiLkfiA2eMoLTdaNMT4XRnxy82CzmKDiLLTJRKPizFsp47T41WjYPt",
  "key16": "3PL1c2yM2HPBbAMb9BsvPXb752C57a7zEfKCpAh7hRoUvsZC38sr4qX6ej64VcqEjF7MAjAgBxyLjLweTNQmvmsy",
  "key17": "2W8cad7N8kUx1Smbuup5PWCyQop7PfsKxZJqZFtUNWse1Q6rMdFuuPCqzt7EpMYBajvTL19DuamKuq265csQ4oKi",
  "key18": "5BkXiRh4aJc4yU2wAsG64zavYDhkaqZMAbgyhmM852TY82YxrkKvwkUSdvSoePnxLmmPc9i8Ye6Ej691E27pRRmJ",
  "key19": "oJeSKnHzFjm3s8FT9sNUpDrXoxPHQfJZvwsmdtSWh9rwv21Swtn1btz9g5FFihVvtv5pgSYUPSWNprY9HMdsrWf",
  "key20": "48ANTVyS3twT5bdKQXy6xTB4qCECYkA9tem35RcYwYWJakrSYuGifdfEjvufZNrBdGUnZHh3bXZQXP75piQThi6K",
  "key21": "2S2rCgW2PdVCezxycUvvaBmWvojqFLD4BNp2UAuaSfF84Unhk7ozTHyufLTKyKGXSTba66qh7XNs1BxyyqCKPtKj",
  "key22": "4Bv9NVJuzqqpsfNak2twuBGwqSZHJqmWdTvaapzB9VPkDd3X5LrSnX3ijGrhAwn6busE15UDHMhFqq4a8FD5p4UN",
  "key23": "5mGsByFtJjY5jKTeeme5VG2Wj7v8yBapHNvei2DdivD1A81htpgNGGZ67TCPUGcFxUTYfLZBfhhukngTHtz7Qaun",
  "key24": "2C1eeuawQ4KerNDbhks24BNnr9mEqPzccow9nficKvE9Mjp7FYs6sL9zv45Rpz9TWQ6tJP687PNGJ4DxDu6Rwbon",
  "key25": "22B1PPF4xJx1LJCwDF7rxxLb7FGKYMzvCLn2MCbogQy8fRsVdvhednQfySG4m4E9Va453xJbKLRGDPM2V9WyEqow",
  "key26": "3hUc3LUzMTBqk1vZNUva2oNQX3u5UbTK5oZtG4wC6kpxS6CSdc1P5UEWZJdyBtS366NDxs8tEzzEQqMuxQGo2uBW",
  "key27": "4Yb5FnFyzRT89aozh62uhTEXSsVPHW1bmjyT5nj9i2mwnUancchCdPxasfvtXa25rLYxP2xdcSa88bVyLeKez1om",
  "key28": "3MmnTbD5cG7Ut13U1FJ9EzbdBsweFMUiq6WUt86k3T5BZw3pr8a5YUpLxF3ZAvVjiRsX5HERkCtJDYBH4pSXHqNj",
  "key29": "5YZRRj62vSsTVEZpf8jgGo5adrhbG2xpk3mMY2eg3zPdeZfBiDNMQA2JaFLrj4QpGLkEn1XRGFDVk4eD2Eb5cxCN",
  "key30": "3cEjxsxnC179bfntoDNd7F5HdSScRHLyNYJnnoSdwDdtmXY8N4GR4FpTKUntftJowx538ezb1PQWgpX9ohpJ1pGH",
  "key31": "5yjE5dncPv6ZhwysXn8fj11RmdsMPEnwkMh1dN2r4MFGiqfca5gzCCZzWwH3qdBhwpZXVMdBog7rv2ctLAGCkYE6",
  "key32": "3ah5u3gnucWhVRPMS5sde5SVKeKEyqhiV4zaCx5h2GbsKXRk3rM3Lk2nQmL4X2qYxb6Snign4rKC4iP4RKA2758B",
  "key33": "2B3uXWf76oXMUu265SjsnVy6GgmBCspLZWhUHWsvC8MfJEAMDRDczYcgJJF4wuuCCHMvD7KP5UMPixwULvj5Ukfr",
  "key34": "49JFFdoymDtbRGYVxfE87PbTWnSQVVmwinT15NieaSDuZSBNVA3mvu6yvDzyuJk6dGE9Kp4dawTfaeUfVr1VQWHj",
  "key35": "25vURaDUJ1SF2dU18HSUQt2q81hAnEdYsN4TSu52Gme1CskRHyLyXnfAepV1a6bFCvtPVFDAVBPdAdxPYn9ZMKzs",
  "key36": "5vx3srrW3DWUHMwj1SAogiPUwbXb5QN2eAq1uB8KuDrU34qVq37ZMxi6kKAhJ6RnzG4cv4J5EVc7p3FK2wYodnJf",
  "key37": "2V7dGxceuWB52ubAitEdmQRi7Jpro4yNW18adb8zayyvN2vbMfoMFURQy6pzyzGXzL9BYj8aN4Q5BGb3Wfcw19QM",
  "key38": "36kZvyrm94JvBPKev5ZrbUCbsdn73TqzvpijZ1ubwuVc46kvekceqVY3U7KDRQsTRRbsAYzGbV35XV2yYySATCo2",
  "key39": "313FrDS7hr81n9tjVNjU8UX7SdXXpAJXG1Jue1P5msoTCsB8aoudUTU4jy5VVJkpqcLLRZJPhhyNEEh3zez1dTZ4",
  "key40": "5ez81kZRJrFzhuhnSQaqEsGCTNta4QAgZhKxBSHyRZijLehkdZPySNFkJZQphki9qa3k8wRmMsc7LzxBy9xCnjq3",
  "key41": "2McY5hVoDr6gZmxspsdWpbAjUfi1UYsB8xEVEBBahpmhGEo1DAXNitB2JEPGZm3f6noDjdSSdf55L4cxzRj2FU17",
  "key42": "4Qontv9eXifEhTVJdrm6PeKWvQ14N5Mw1NdnEK7mph2ndnvDfvQVL2Bw5WiDSNYk1Mw1nPLoehmwazUmxFJmaRgN",
  "key43": "4mQaekTFJwT4K5yukVymfyQZZY8icWea5wwtEK8c7t7BGjiUgEVVHkuZwRqXq6DZq14BXXMK8eHZX1D82Geu32cN",
  "key44": "52BZ6tooHG5FCb7ueERC3WCoro5STeKDxdWs3zBfBerJxFyKHJpDvpzuRStrJKRYjnhFDhxLwPYzqjS6rRwFsqu5",
  "key45": "5n4gy9LwhyfB32MEvR3SxXeMY638z1JjD2oXQRnWTREwNYtGWDGAG3J7yRqExAgCwDE2XMGypKjeGpd2gCkRwvXs",
  "key46": "3G1nhLjdPfuEb32Z4Ne5jwJDbeHL2VgN9Lus7S6Qr5SUuBeLVrY8KhkoQznRxRbrj2nTLtkdcTac4Q2TQvrbsxUc",
  "key47": "3oY7aWLqSPMSzgWeKb9xjnHyDQeNCX7ETaM4DnY2EjRhS2TwRv1vxFbdLegPdrwFTbcQjeZL4afMD4X2ABbfrpzw",
  "key48": "5s7fSBH6x8JcjFzqG13SSei7KGinujCQr4KR85ea8yKrioMzoy7cPmjHx8YVMSPvNKjSQ8JR937q7zg95nxRpkaW",
  "key49": "4paarPeAWSsGKPFgVa9Z15DTE7jsQikKs7aabhMdjEFV93RdK1J3S6KW4HECpxUJTfxVeWE4BfoanC3ViQN18JaZ"
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
