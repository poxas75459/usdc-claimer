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
    "r39oFFC6ZM5iUxVTQaN7HM2wz7xQLXkcYupBQ4tkyZbhfpD3G6oyrU3ik4q41K6gjDExHutmwiGdwVEnjPJVXJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyaQDfU9trrBEcMVHq9PZwBe1a5QZkvSqEBrGMEDLkCCA5Gbkg2onuUQVcib3jvSWnBxx6uW9c85TUxEcZuPMFo",
  "key1": "3dBPe3HCpRMoQjkkVzYVUjyJNqX9o7mCnG38EQzENExMFktjvutskqVY3ie5bj5iKerDH9SbhFtymM92U4nVYNJt",
  "key2": "3CiEcUba9iYPB1vBWA2UuiuBKYSL9pttK9XCDc76nJ35dHVQhj1QSALJDWtb7MEJJTSy5QBQrii1d65y5jw2rui4",
  "key3": "3g1ZHhPyF91MViyQ2wHWSDaDzCBq8JPmdjciDcZ17a23TPYM6yDZGWxVYrRCPiDN7BKXbVfSuorBJyFpa5Z5FGAt",
  "key4": "32jQd9duXTmfoPFfzSdZb6DLUV8MhfeBAhCE7DjiNvTQp92uSx66vv5coz47vQAehnWv6hjG3YGURy88vN5gfYVg",
  "key5": "4tdnG3udCD4nWdSUc1LwELoeBQhYiWZzSmT6dmcBD5YzX6QEPpGoAVVW4VQRELz64XzdBHkz4DgzVGGDktU9TF1n",
  "key6": "5uutdfSnt6Dh58sKCxAW755w2Wcf3x2VrVhXgaP1oJhwK36UvKuY7YsQ4DdXpHM9TKkgfPrQRtM3YT4obEWrdAzF",
  "key7": "5iXLw1mrb1TCQ4e99nP9uHpRQdo4x1m88zpBgL3M1rJWfUvxsmsUBXnPyqdkHYD5drR1DD1ih6FM7TAMgy5AhuzY",
  "key8": "4TGtP3UCBjFAvecEootYiPVEkS5XmVZN9K5DJh7uHYFZaAJPFCNQavFjYq5ceVVg66YsugBx4bXLS3wQPC6hzeSa",
  "key9": "5Me2jXUU4NKsotxrUEScQiuWe6a4L1t5C9A9btaDMk4v48VwVKUx3WHVemFHv5oF7xjc8GBfqwzSmh3rsKKgrdfX",
  "key10": "2oWoR3EMstgcfcjqoMEG3bh3GFytkDvVGLQLaGTmpEPJCBTLaSt1i7FUUyo3xhPqXeRTpPdLuU2GW3HBTNPWex55",
  "key11": "2YuhXZguUu2U9k3n7jyEjiqZwsSuBjWmsL7uzwfqu4BC8hXoqobnczH9wRj1uxoXUg5h4kobB4LU8V3fSG955eQB",
  "key12": "gXHR9XRERmve8hyXyRBEbHSCxLKe8pZiFzhNsgQnNjqY89jXopCvZYTimfeUigLsPFL2kbqgtfLTN56DJP5K7Bm",
  "key13": "2JzsK5h6hW1Vz4foHtPYoiawQcnSaZdULi31GmGbyoHbAnydqkAMgYr8rZNZ36cUMy7hun48mHDv1W3qBqG9rsyX",
  "key14": "3JXtaVKDQCGD5HuMU6dd9v3YskvfEUrYU6jNsSM2SvB5ZWtLxdEcpsiinGvonsrxNtkf2sSpEDLrETpexmtWbQEu",
  "key15": "4t7qdP7fUf1KTNteFQ8cgte1PFDq9Ex25B5fajKRwouFRvqwWK4mU1ECfPZLiBoLx4nsgmHRqbGcLwuo6fNQDbAQ",
  "key16": "2VzuxztzaJ9XsSDfShGHQgm2ePaJ4XnXMWLhoyuHNPXzijKaB5AQ8FNmSrgwCDZ3JGbXTR6cACMdUHY1CZvCQpsw",
  "key17": "5J4NCvC1ApaVEARRT4HWs3YsoqRufYLLiqH5DAB4NHjK9oiUBVmmKcGZLNvVvf49tfaPqaRQeeKKZNXvsmt65XZ5",
  "key18": "2jjgrgRY838K6SkY1JNQJkLaX1aYJAfaAkboABCQHrgYydG9fD5iLrsWtoctkT75chCseUFshDep5RZ8Rb3ZGDwb",
  "key19": "38csgdAF4Ub17JXzw6VELb6WABg3R6TFhuZozi5Xj8CiRDc3YbqSh5FjHWJm7s7P7HEP5fun4poqV5MY9hWa3TU5",
  "key20": "4JyFNMGARng5rKofhwfVWF1vfUJtpfsi9bPHKLM83P5LbUJEy6maaKbJSqxorHPF5gf9euH3uFF81GQ9w5xs1t9p",
  "key21": "4kM7i5S8WrU8u1Jbp85sttSmbshyfFhXi4Z7yQz9FMGK6cieVebFGWH2m1WcwV5yVENjxpXSEENE2zB3H4zTb3sA",
  "key22": "57Jm1wwpsHcAvdQCXnfj3GaXBegCW92tE46US6QKsKxFzyBw2uUUjfWsNzaUHPjY9Co4wDxuC3bMYZ1K1zj7ag7x",
  "key23": "4tMQtp833WwfoEwWAwGqisjWU6JjxUuELpGuaovH26aLYUX5WEnarADfXHRwodw2Pj4e3Fe2pNS39VDddefALGcA",
  "key24": "4v3NGgo7ywrwmbWKGSACYV3RqxffNA4FXFHDGMTcEpsm9jv3H1BonrtSxvKwkAP9Ey2KKebAuQqxQgfXbuGbpHET",
  "key25": "3SLwH4rG2PBtkNM749ybdevsznSoNLLyMJ8jmkFzfuBsQUyhyk8H86k85W79uR7iMV9Q46NGcBgw25uaffDw4Y4q",
  "key26": "67DCU7W7i8Eer9beaDt9zwSYhYtQCT4ezpR9obdBexk9hqcgdP4dtEQfENUB48yCeXGQqEmhUtQjph28roZqHV5s",
  "key27": "3BSY1VKdwuvCk759hZ2PjiDSCvUdogm7M7zyjRAJrn4yyAoykanpVmmoZs9e7bXEVrN3PVFL6JJ17CSpHrXHoqZD",
  "key28": "ZDb2hhpm9Ye3ffausLJ1a2J8yChUmRimFMWGShLSk25XKBUm3P5f8JnFVkVZ5NGhYftNu9xBfqZKYDorRWMs1k7",
  "key29": "3LqYMuCrscPgg3MXsQ6ScX6DtSSPGxoauWaxaFtp2h7PrbsXHZvjRCKb2X8X5zzQkHZotVknetg3iKzatWekHTUf",
  "key30": "5EQnFG6N3BMXXCzFuRqGPLiJBTcGBSkrbhzwaWiHKgyKtKi38zip9vVyTRHMfJDHoHZe2LoNk3UMECXF67PNa4FL",
  "key31": "GkNBQwMGTigWMTk1tNck66vtKcGMFVyfrK4BdFyAvovLR4rWEGHXUWHANdue5aY12JXv1DWhfxMX5LJ4aZ5e4H9",
  "key32": "VqdSz54fmhvqCRYoHSTHYztnotriPLKmpykiT23apE6utAjSC8r5XoB3Jf92DCdwSNEEpFP9meSuvDS1gcnp2RS",
  "key33": "5Acn8cGB4uxMJPzWUbbouhZEpRf2QkSVmU2i2xZHtchj6hNAJDc1vqXjuVTkeJ1uciUdeSrZ6kF4otmiLwZ1JJE2",
  "key34": "rU4YDamfAnPJ1kwwdPsmmmGq4wJ1YXnirD4WkQzmL4HiZiN8Lzg5XwA7puG59pFBTpp2TFseV7HCwhRMDRnoB9e",
  "key35": "559t8MtxF9RUVpiJ8rbmh939iWG9jyr4jdxCCkF6QMqQqamAn8iV3bieodSnxUvbHUE8pMGP9hzwVfpS8Zohy4eR",
  "key36": "VHnHscR1E1K4t4SPcGpW1CAxWcZo8S1ZWWcsZ8VJGvwBHJtwmZCgm9mwTmNJQuMRoPa7KoBKCp9JS1Ke3bYYUES",
  "key37": "2uv4Juca8vQCCfxLBUtgcB9ge783tS74JM9mczGe1sf58n6X4zw3FJeepvVF5ruxkMDRFeJFFPvx5mv4PMWKc22b",
  "key38": "f4JtqwA4keVVQMt9rxiRA5XNQ468jDCgoBzJdVKHWUEqnXZjEv62xv1MSZBxfxpEftZZPKtsJaZ7A14Uf9j1nq5",
  "key39": "XwKAJ3VD9oMM9zt7YZ5M3K581Xnw9rtG7XfJ7BqNMh2nJ82QMaEKCk24iW6iRWg3vwNvcUiytWPiAFdUHx3wQMN",
  "key40": "5Zcs58L5KaCXhACfHo2LQrotJRQGXbjiQxvPGUwx1XHDnQT34xwTSsTUfU6gZd7DRpipsRQj9rE4j2VdN647wEyR",
  "key41": "2utmAmEzvcmrFQKDeZN12dsJ49R15ShGEqEGvb8vib3aaJwdb5urRfHWdzbQxd8sBuxXvz9sNi1vJBaRRvY43ZCo",
  "key42": "2qRoy6UiK4PCmSo5jrJULbU56JVDYwRwqbw1MPLrVuM1YLGSNmmiVpz9176SdCi1hKRS9m8NXfge3fGypBGPk2Yd",
  "key43": "3PzQTb9Yi1yUeGDP1XSQYgtwweX7CX1Gf4qoWWrYvrwzcT4MszZURTNebgzBkjJ9XkadmLRWny3B1KbyA1EedeJP"
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
