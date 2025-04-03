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
    "5i2qHThATUmBckR8AYzyAaQ86qjHSm2nwo8sNDPAQDk9MiTkLtZVv6qHtfEWpTmhe7t3pyqL8pHey1rGw7q5BX9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3pUG2jQN1f8F4d6akWZPyxrTURi4CGyNCrxh4X99FRSXraiADsHXEqoq53HhEHUenSXLXvfih9VgZynqdCxEw8",
  "key1": "2cnAjMgmd9AZxSK8GQwFGRpigude9QKrQ6TsWdG9j64fEArj4FFeebqLcz7q7E3dKQDyqY8drteQHvWCcahybAnZ",
  "key2": "5b1yTrzipkBj5MpgKQpW4hX45yvEtqFxUAA5iSMCw8icnruHwDYoxWMUQH3ktS1P94LbxQrk1zXetVi5TVtnsoQn",
  "key3": "427SzKd9eCLPrFayYEySNJUynLaH6S2ZVyWWfkG17pBELxHitL1VtduXw7kW9pgrUPNuxgAdSTqisK184zMnpa8F",
  "key4": "QBxCVAmYtFu2kPJcaGjAp9HEoG6i5b7DuYvJgRdLQnhKGtHHRSHwr5zDHsdK7CCzUUyYLvZsg9AetS6km76hmhA",
  "key5": "3LNSNUyF78Xyui9UZ3YF4ps6Wa71aQgKzDA5kGWd7oyjfYauAdFS1QpCUajqg8MALbxLS2u5Adriu3o7oECpp8rG",
  "key6": "3mxnRSHjrBkpS3EzkGEUPTjiN2hTUkBAyAcFHsEq9HihZTAbzATAChpuwT8GdYj6x3MUZTS8DwhqpUYcdGJgWZyB",
  "key7": "W9mfUiTLTbMZGMHDLgJe3L28cs8ysZJ6eJMLn9wfpADz34aAy8yLcUqxNYQ5BJaE8FCKzqhWFZtbkuLBz1kghtA",
  "key8": "5yRtDcPs1HDXBXKoUzTkY6XMDmHJJwJD6AteRyGxF5jP81ptGsWRUMrdfEZhEkb9os6KHL8LYfYnoynWT4Ryj8qT",
  "key9": "ZMwgHD8WGsUvR47M9Tc4w8LGDYZA14Dv8Ex6nnPXm1vLoAugpEdN4jLswceYDFZKwxJkhWjVn5yGJC6keS9QSpk",
  "key10": "2EAtT4YAuzoMo6vRdxXnN22oRFiQY1Z2BH3n8Hc1nELXCek8WayL7Kh2kuv2dbgm4A6q3Aw3HTe8H797LDM3mvF8",
  "key11": "4K8Gj3duGwH4g8vhz8R2zdL1Dr1AKrJUjUNt8HV2aGqPK1aw8FpbLZYvd5tRAZeDX4UhKsorB5wNpTwjZCoSgiUp",
  "key12": "2GwCpxCqNQSek41jauPR58gkUS74ktFGHeHKztad8eMcbaBwewtR9GnJUKdX2AvVPwUVCGZVSqj24Hp9EveGTvzd",
  "key13": "5QtBLpWDGCVYGEx3u339A2KYcbzRnCw64FGWi3zbYvFZHyf831breq8XMnCaur7jYQdXLKgfYAaWnpjXSf1zbk3C",
  "key14": "iHoNeGWS7yikimLWunEpty6YbbDGEZEoa9KvL3FPL1G2jAGZhi8JyACX6KwcnRiyPD5vUKUWvzrzoP5Ks7PZ8YE",
  "key15": "3fJiebV7ZkNkFWy2eTQbcSGhBjuR352ooQnuteAvygMQT1zHaSHrn672zfcsyD3XcB5yypRq1us8MySygz48b5tu",
  "key16": "4faWvX1GeFAcVyhthfiQTQXTFJwLCAxvXYALh7L1xM3jaGQMrRLZY5F4jKbBPdm2KwqKdw4SKnMpR5ks8cdDRKEc",
  "key17": "TT9Adj2ZrXLnnrzeqx8er1ANfm1RoJ8Z9cERK5pUHSWY1CxWRT6J8jYfeaneEi1SWktjEZy5cfasr1jAHzDTT9w",
  "key18": "QYFByeGePNFRUhYaATVdBJfvRvhraFvFt2i3f6MYnUvbD3WaubfkutEwHuY9CcaB6krs6JvrC8LtkemjKdSG4qg",
  "key19": "2oLGZEtUwCo8Dsr3eUfQMF7xGojarHrSaduVQMgPH3K3FAXqWjEKugWRZ84nPE4MY38vs8oqxhmSAKkTBP6Y4pKT",
  "key20": "3PuUGQERyUQie7Rnvd8z9DNj4i7Q9qfptXpcWX5fcPNohZZgoMfGAHULz46GqMzVFYuvKriCu3rayvdsixvHEcF6",
  "key21": "LEj2pJUHj1iwUYCnh7oPXK64NKeuMzqbADF7MzkURiJEoigFaRXxzLNyKyCa64gNuuVH8ihz8euTFMKn2icpawo",
  "key22": "45ENzZv4xuzfWfipzG3LhYzATxQdjLw2ctePPVWiqqQzWseBHFcJoj9urbPjxKHfrPrqGz7MtQ6k8XpsMcRem3vw",
  "key23": "216UyfBFt3Vto6yJa7GDCPDSAkTYdehhyAZwHCcsibvShyo4So7kE634FoUJYL1AcSjDaM7CBNVp1wmKAGQcYY3X",
  "key24": "FC2v3U6LFxnxANXvNaZZmrM7pnTNN9fLhMgeoes1M2qMDzStcKZ1ktWYstKYDUvFEEPDA8En3UtnYbPtjHHzGAd",
  "key25": "2dVXhhfX7qRADGubCpq1f3VB6FpxLTYiTzfXmxd3W6YTFTDy6ScpksAJfhz964Srs4eK8PSEiahs7n4tBGSNs9iV",
  "key26": "4iCAS4WAkX1wd2bVCQocqk79HAiYDUAjRVXZjYMtVMZFnvEaGxryH4LnHurURt9jKdZQj5qG648EzxWuTxztRSi5",
  "key27": "2T8imB4cEVBZZyFy9kKBR4Cyn24LycGwUYWPatcjicxzoKd6KgKt9rc326BguCxzkTzmTN9xS4bNAit3B2ovJZiy",
  "key28": "46EqGJku9tdxbyaBHbseXBrarY61VcPB1ST1Sg1ztkQPLQCt2zBwHskkB51uVbkFEMaGkSwwHoZmBPiJd6pAoMjd",
  "key29": "58Kt91VoFvJpBco1TGx22huzpS1L4PWBZrvyRmB7c8g9HwiN6j76yuBtdoi17es1qDf9rUSw11W3ppKxD6TAdiiz",
  "key30": "4TK62bH6JXx58VLqKPEXq3qA9do5CQyeKkfE9ZpsouG8GVq84zbExxvwsZ3CxKoufzWqt5PM4hYtLCuR7zXvHQnr",
  "key31": "3LNgu82QcAwts68Wmw6vjqQ4TLFgVZ47XCLa2msqJsXqzyvECoMZhZw9t37v8wdzxLQek3c4Zwy7FCXe1LMoW9FU",
  "key32": "2nTtVyEFPS6M9xKDRaXSAuEdnDwhRfPG844VEiYY64tjpHAgcmb2CfCvYD9hAHB9HbtSuE4VRjP7NhzTumTjHLPQ",
  "key33": "qNSXreYmQ65g4Gq47LV1PDFApMBAg1C129E5nXF3WMhFHmzZmxtJtMCKYrUYq9777mLgS6WyPmFzxw812cAhXhE",
  "key34": "5vQyVBF4ZNnvjhMFxwEYkehBjayJqSCyNztsgDSMDDsjjujUYAEZBRF3P8p3p4UZBtxYCwZ8wfQYmogn1fkjwZyp",
  "key35": "51kuFG2AjVDe5JBU79SSCV9RjhNCZwjrXk7PsLiNHpyFNXEaVhzaY3pWtZuprr1VD38REaQtPwaCDtCpkZQF7pPz",
  "key36": "3Zn9x1LQaJRwNJcu79Z8KZjP3U84uEd9k31GyA6ZHYUNdfz1LmiY3xFaTMS6M1efAHks185BnJYadpJo3AoBsLAc",
  "key37": "4XDy4YSZpgeJ1o9zRY6GSi2L4PyRWf4eZgV4fJKJfwQU1drAdDSWJMbxfECG6xu3jgg5eo1k5UqLQvCxM4o2BAsm",
  "key38": "5L93bXrvCHgBGzgVQkJCaAiywbgmAkumKRB13u1WNGc7zQ7JJcoquk2EAfewRtJwDT9aYddV62srD2tL8LDxu47X",
  "key39": "2mTzZoPUL8h3Ni34G1chytMia1ebxwRCUiHzBBhSyxY1Y6Knrh6dUzL5T55wUETpEUVHe3cBJQkRUZoaysQxLdz",
  "key40": "3QKCyFeQkgp2LTR5Ft7F4f22aZPu9L2WoDkA3YjwEVAL99RhstSHiHWrtc4z9kcqG7ZmEHQ9smJgNgTPeghCfJwc",
  "key41": "3GHhRKeHHmvUmajXt4tzZPYmVzbPqVPKSVZLbkLm2Wc7d8s8DGRhffEpW4mtMKwFNNnzKE9RsTbAwLZqUzHkCpvN"
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
