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
    "64bLTh2BGeFgENCUXve4eBXz25JNpMjmprt6MVoD2Apafgx3JbdtFaw7MH1uS9MvbgHGm7NrNeNGmF1kxat4CDqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWNXfZk51eHF8yLZvmWv1gfCpkJUZyKEn1kXq7c7tC7zAmfa3yj7AywvBbC2KYGtwm1A21o9Bhseyg8dhME828m",
  "key1": "QT3hkyEWvPEezEbdDxDbAGsBWUUk1qHHJtJ1qTxpRxb2Rghbamtzn7HMSSr9tGoQA6Ppgkki4bHEuGfQnF5F5sP",
  "key2": "4X7bJHbNMTh5sNEcd9j84pZ1UJaNJfSzCeC8RLaL4RZoeXcoGZsV8ojM7aWWF3BfEjm4jKP7e44Gb9kchPA5PrMi",
  "key3": "4ThtUT6qfzP3x1Bpbyh62jrcQNRYwzq8itC6BFXp2RgsYAhTeD2qLbQK9rySHHjxc68jvLvPGSawLFJbfv8bFPbX",
  "key4": "5yyajSJUE8RDFDc54pBCQ721XHyPfwb7z1KVsHGFK6aV5tkUdHdZ9PXiTjtVcY9g1u6yT3678mtM7w6xYDPhie5M",
  "key5": "4SH3L5Mn6ZfeTUqRPqYzphH6YwBu6ajDKyx52LXVWTPnrTz9MY3Wk3tK3xzWGNFr43hxFpyZwEHVTqcS9C212Wsp",
  "key6": "2z36neGCfG2MsXyeP1zyNrUoRxNVrcaPPpE4oUmoxKkMkMRZumN9oTEzyXevSbaqdqosntiPMaRWjLeEShkizXxs",
  "key7": "2ieZjSpVeUMKGywfuYJejzdhvKxFDpbgTUzf1fLHre3PPt2So4GD4NSJXQaSGM1vs7prtgsUwT1P3JmpvkvgeGBb",
  "key8": "37C4aQqXWdDa4M8ZEk61ciXP2LtKHmdoisRPcV3X1DhqcRYK7RGLkSsKZjXsaYjszf8QQUd6RXYNRfRXDzaZK8SV",
  "key9": "H2GmHVx7d6wHCcCiYxKnghHo3reEngTFPuBFuyQV6fGfRdF9KotsAdmfKjXGtbYChBCsLGtqyuLw1MqW1fgipQ8",
  "key10": "4DcyP12L3U7TG1Y8YXdpvHnkhLhHsQSAh6LW4GbX2wQREYDbjkzfmoiCsWu1hWr8Lwtv2qdJmtCc7kDgZQR9xnBF",
  "key11": "sxydm41r8f9chq5yAhNFGfYLKwXvES4aAGMXcza7tLKYpSnAbcS71pzvSz1Rt5NKhNdNYe1eCSacQ4LnqMxy1Nu",
  "key12": "RXScwxCpdsBMs46PzaTsM5AyttuU2dXKJuQUex1ap9v7o9gQ6bMxya8cDKP4MzNADQyN3CicKGVuHhdYLfRs8BS",
  "key13": "5VzgJk4j9TZNSYp7NxezWLFstAstJvRCvhjRCnNSZzjK9qTFFuDD3G4Bory8CFLcG7tXmB2FcgjDdauGHiqhiwuu",
  "key14": "5qUdexvTR3NRbJvbQGGqMCdXv3VZuTtMgR2z22W8cjRs1HcxB1hDt1iimAjpDbw6w1bwDYG81ktKhHKZgnqTeQRR",
  "key15": "5gyLgxYooUjwy15njwFUd61iJsfMEeVcQ4eMCD4x6a3BwXp8zbaCH7ai2aCF7GyXdMLxg256vKpQyYy5f7LTXztm",
  "key16": "24kpWV5EmaYvpNUHvFP4wJskaLWkxh5Ehvwv9bpX9MD574vD973MEWgPAMm8tfbZzm49raeB9LKaKxgFSbYANcVw",
  "key17": "5Fae7SGq3XZ1iPGf51HYwieyWmMSfWkrpWZXwnEj37QdjNdcXqy2DwCBXb9ZprdRkWi4M79KEb6RXZrcdmNddaPc",
  "key18": "35eTGn1XfDhNGYZGhMCLPF1HYgFwvK6ngUDxWmPSDtMGrAgRFF29tEYXbh2sX487SoYFAZXeQy7G79LdTbSXAkDW",
  "key19": "2Rib6AGfaBgJNNVHTU7DwZshvp4pPrrxD7ESUEh3BsHTRJZvyooUkuYJJB59VG87JEZPfQE7w36S39k5UiM9ZFBR",
  "key20": "5hoN4H8gpSPwTfhwNJ5KikbJxAdWvVTkaUq5eveeGyivaJUrX2wpvryY2vQmk3ERL9VYUoK7Q6pfmWmrdJhBxXVb",
  "key21": "4ufxtwbXhVbpzehH9ecprxtm3gS9S5uSktyh7xPbU2SBiqEW9pVBjNFAjNJpXL58HkGdhZ27RaHq5TWJEZZfPdwk",
  "key22": "4qfWcPUmSgRZppKAXjTDuZii4SmEj2CNHa83NgA2dtsvHcpYh9EYSHvqjLQeDgSTa56aoR23iL4bekKNw6s4Sk3N",
  "key23": "57UkeZdzbFowvcxoxwAXVZJWiFrQYhBngsRXHbTTugWEBBAkNqCi38hiP6igyoLNnyMmsBMKhKDcE5bn8DwxyqNF",
  "key24": "3nSYo7t1FUyoR512zPRVjDN3GDRhyakVSL8RQjqBWHDptt3Aju545QXJ5gnThvhkvTXmqzCZVjprBVMvrEu8yp4T",
  "key25": "4Fr5iUiUcV7zjbrvQGLp4paoeVzTc26mYu27iecQjdY9tMxg92snV8i21NSZXY4kAbMAK2KJVAVwQEWaP6aTBwpJ",
  "key26": "4XhuwXnGDVL9xVX6z8G81ZoeZKacWEjkHvJuqiBXutadQSEtGPVpu47oNWspk8QhiDzaycWU9PjhfZfqjkbK4wYW",
  "key27": "4UM6Xv4PnNMgur2noyqDiaK6T6KV3uGuTg35RCcD2zhbhv7U4rHMhB9Q7cAyrXXigSBSxt3NBksn1L1EQLPB1MMp",
  "key28": "2hYhtt9mpZCSA8sdGUgK41CfdEG5GdPShQh3NF1voaXNuAYXJ8euWTQjKg3m53EmfKWCagsxbscuoz6sGeo7L27V",
  "key29": "wTxRmeA9mj1yeJnpS7ZoJQLjdEBLzzJk77hAXfeqJRTcZx4hxoLPJQUbvZ65ib7EqL6D3FcPD8sqPzk3hY89kPw",
  "key30": "JB7D4RATHbhQEGULWsXbMmm5H2EY4hSbndY5WHC5iuu3B2o4btTWRs7goqZSftLpTACut8z22ipP4w4vLxNc1DG",
  "key31": "9C92bDiBZbwZCZpYaCjFEu9t1X7mmZvw28hSdrW4sE68k2wqfQ6Pk8Hhxy7gmAG3vaPdDKy9txgHyNcr8G1FCPh",
  "key32": "y2ExXgaeFVm41GTm1tZHWwvgjTDmSjwBc5Bco5nkJ6wy32GX42MnDwDnkjihjwpwCVzWJmGr3PKhCZXivzx2NKx",
  "key33": "4Wkz86LzJ5hJV5qvsDEu3U5aWWz9mGnmucBoptBuZM9E1n4c6Tbc4i6DunfMKapWjpv3H4DjkzNYVFWnevPmgohd",
  "key34": "58KgzgpNsxsvbQhyVNe5K2PkXKR8jJHcuxVd9NjcXk3ovWkFfx2Cb4bA3iwLXbiHqvECzyWQY7PUmZvtqgq41GiF",
  "key35": "5iRvu2buiCoYnv34K34Kibc4yM3SGZ9CFHzJJFtGhAe2c1LmCLqyKbKpyzT3g2yFUqpNBiokAVrLR6kopxCfZydL",
  "key36": "7tSLu4DZoEQ7QR3Kss4U9NxM6xYdrbzHkrVYk7g628bVhL1DhbYVToUNnGKF9FkxkxNnACVpvbjMXpYSmEsWvcX",
  "key37": "2MzkPwzVg7PjENEihGvpuUMP5EcVhixMQMM3BBMCoNzYmrebMj4VfJcXK51cFJDSuyWJ5nMUAQB6Hxo2MFjAfgzi",
  "key38": "YjQDCNAXJLeKUHEGNVr9PhDr8WZi4wQg56bdEGD4uS1Z1ZAVK2TqLGKjhG9G4mj5WAFMApiQ5A7AE1h49DdrGmc",
  "key39": "4A7ZU3UCQ2kG4rWN8dgj2vjbbMkDDuYKwaTxNN5EA6zwDim8icVHWudsFja6DCU7XTZvCSQvBDDd6pw5TrqK5jSw",
  "key40": "3W5Yk9cQKuUmxRA1UTZb4kw9M2tRcynyRzpUE9ZiuRPBMMQYiA8XDeeXrfCU6U4DpRGaHMWSheySHxKU98341Xvz",
  "key41": "4xJeVhEXZA3er28uwbJdq6u3Vbq45PtFYFmvL9tcgCcDjraSjdPKBaJzQmYF4PrqAKJiAWH5eizHTDqUDrGUtzKK",
  "key42": "3MWHRDU8rDadgDLeKmK5Y9hQUV72e2qVwuMgGiAPzCogpd8XN6hH8qz87Yx2fqYS8iXBoHssxR22SAXiis1YRQvm",
  "key43": "2Zst3dR3D5qTLtzJ8EemcNimCHj36jutrkbwC3ihh2PWxUK2Lhy94vyf3Qm9KxtpP7GytNshcLxpaq5GrAMWYrYM",
  "key44": "3KBPqJKq9WKQsG9i8cGvJLx5dB1DCavbZrtyV91bq3T95ZySKAQafep4B1TaaEp4GoEMahv7xf8vaB2NwNVaGxDd",
  "key45": "4QaDgjExjE6rZgTpPTqFTdUvb5ewfBgMiDhwaLSwpyE5dDfwg1Kigdv5ur8Drv3A94Mqhc1j9HhLYzJkxFBSiLsh",
  "key46": "51z8BwfmkwKwyuYZKf38Z7Lg2QQyqz7ccwXKPRmQPc4cwN19PQntM8wxcifipVvLrijFoie53sCWexZCjQM57d63",
  "key47": "3dnh4HsfeKPjGvwHFhcZJNrbhgXsMt3a45AHWHKxmk13iGE42TZfSzeTetRgEtEYLzYm6SjM54sYBStGGNCx9MUA"
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
