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
    "3iH4NEJc6hZfJomAry2BLenRPSS8VCiC7sTw3fRMETYvpMvWcbrXrthzKzv9qtGFYPLEfjfiKpZzsXa1reuYxCzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1PaTYhVaLu8jm2u4jhuarySNNNJR9WGAwVeCZPB4dBcDGX4BX8PaSsikeXe7eYRQwTfRG8jfnqeBTKzN5uvq7d",
  "key1": "35YuhSgubAWJYhHWiWwG7FQzNoF6VQeDsexhwnDTL94uS6qq8jQn141kLTUPWQr1pi7SGq3rVUXJNh22SH3geoTr",
  "key2": "4sQM8tSK1hXPnXx6Lo23DrBot5fFLkHcKSsXKdvdUECj9EfRguc9J2B5cMw3PxP8KG7Y2kyowheT8aVNZpjJuHjf",
  "key3": "4jZZYjcZNRZyVnbqUNm9hPcXmhTtTPRtiCYAXTRvrCYTYsMje296J9pqMu7hC1kQvW8wp2JUDwtrVkcTw8GCn5Mk",
  "key4": "24SCKz27T83Mj5h154afbTfBiWAkHvgaTHJGrheXkeGvaanwGcTk9ZT6khyjRkzAsAg1EqYF258FDPVyFQ73JB2p",
  "key5": "2aRifU2YoiAUQrxmX6Zmp4uHA7cUM49LfzyrCZtHTm5E4dNx9CWMNk5qpGEADvZYcERtBdgBuFYoPdM23idVQMzS",
  "key6": "2HQGngnWeUkmttT3C8KhVSyJ3yhfUpHBN4UMCP4BhTs9ShaVFpDQZtFC3F6kGQk6CHywCudJigkbfBKjJNaAXLXR",
  "key7": "9gj51TeqkLWQGv7gpLCpokb2yDs5MVczseLb4CSj3EpEMboPBRjpM12XTT7vvKa5UDYJMdk3HihPydXdRVwWJFT",
  "key8": "5SaA9Aaz2Le43PD3CKTxabYUBsruJrc4GjHxXidb3rjoVLvrFqG5W2aQK2ceUhYDwmuGY4hLABKFtYHeghjNPozh",
  "key9": "2W3cAp9gy46RMt6Spu26cNYA48atx1sXpY8uSmnzoZBG5u8rE1Fayhq6gRDQJSqWyKjRwfHPChebqea3Bkb8jDRB",
  "key10": "2EMJq8VXDokqZWtuw8Dub5oWPZ8rSMrzKYKxeFe6eHKuocgaEdZoKHaQvXmNY5jLRybpHwtdTRpaGNcPqRMGSJko",
  "key11": "VjxvXnqfnvZgwsQ9HxmvnyZQVKSvMXBb4uVtC6QBA5KwsBujXwD9Dh1kd9UEFPGustpALTLQR5ijwk8bNUYJNhZ",
  "key12": "5bxijTFEeRZu8ghhsp1fyAebMizSPg9XvuU1ZNGwFocTpcA7dgtzUDrjZd2QYvHUeeXAPaybRtNdHmK7LMGLDwBv",
  "key13": "ujHJWDgwjd5x96zqiuk5zSMPSYGdB57wZ4EMCpHjtSnBzpjpGmtE9tfoBhPH4q111LskRB52U4vdB7pdBMpLKEo",
  "key14": "3NYupYrhkf6P1MthdeQ9F6tzXutQ4CvAMbockfZiYYF3i3DdvVgAX85T3TYXFA3fsBHhMMDaUFXm2iVwd4Kxhncb",
  "key15": "3quCFbSuqP8MjAuJimCJngrCnUFmwQYn3ohvmsFpo6khMdsBbdcQ27NyQKF2LAgQSPGhPdS1SX7oQrnXcEf3fkVe",
  "key16": "3oRnbpmb6noqNCuRBHvDyQxxBF5aeVExqwV8wCEKSVZmz4HXpN112Fb1sMPHtEnLQqJ2HLiPZg1EEQS3G26mLVUj",
  "key17": "4Pen8NgvvjcJryFugCQy42UNeWEEaQdoxghnqP5inUkysb7KRhgaUSXUJnUgbwxJhGL3SinNjCGS9GG7uYGtaoBd",
  "key18": "4CWvd8iS8xCnXqopwJEoLJfJEdFwyN3mu7nBypNVpZpPcy73NJ2Ccn8SaCeXyGBi2QrxPZ9YwchVqtNmqvKLCV3n",
  "key19": "44ASYEoaQNEwtfwPwLjUGyhfXUoHaQ12HBsTadSq1yrEEUG9mACUArPVPdDiYnStfvgfdecs4bimTovfuFht5Usf",
  "key20": "46Wjzy6xATiAgvw9AWALWx6KLMk9hgTphjK5tXFBV74QezWfguq1B7JSsqc8QsRydLXpUmNEQCeA1opzduMnYkg5",
  "key21": "4vqZVNw5ACR4jZeEscxs8HRY67dnqa61n9ubnFnSro31dcPZpaa1dJ81yJDBBNHbeY6jvN6oJbRYU1ZF7FvWFpBz",
  "key22": "5Mbz21cFcEorXPTKK89gEvzDKixrybhFuUwpbmRUtT8YkBNGLMoaa9BZocUb5PcmQJVRie1z2GnWZPdAe1Uanvbc",
  "key23": "5XEpmasa2P3vVEyvUHvFBS4TPwvLYDYeJHYp5WiThCE4YS7SzV6wfVi8JKoHbSQ3nrgbxwo1GwBekazV31Ty4sdP",
  "key24": "5uNv67Su69NPu37ENooXVHqH3eUNwZLPwy3X9RLibPLejM3ExDJBrGXG2oQp9ZZTNkf1parQBuUArH1e5an6NFkF",
  "key25": "2MqXzTHd4tkrDCc28MfFisaJa2VoXqkb3LiyPdwqz25M6QxGpLxWo3UA59bd9vWmFWTHpgwegEymRP1v7mpFS4vY",
  "key26": "5rv5mYbX9Fn38QWybbMmqW1s7fFijg2boWy3kzWFXHSqEdqUeU2ArJkh9Dis5Mq955EfT2CaRrU2mKSDe4eqSNY7",
  "key27": "4ELaC5SmeXxU5CA4pzrS7KUd891Fmad1XkVegKjp2b3mYDxwT95odxQfdySmn7DjyQRTZgkbjVuL7jH99DjENhbb",
  "key28": "34B8cjLswv7XfEAFh2ZWAKNF9WEhHSUeZQi2BYzD2FGSeJd3JoPkUhaKh3hfXShQ5VpayBVMFypg4JgiojLtPpmG",
  "key29": "34fxL2SVjw3AVL6dYs4NfoKdjoUMYEBpAA9MaE2j4TRW4ZawpFQnwsadDde2qFPmANBM4iyVzNjDuun1fKUYRwfB",
  "key30": "62BZgFsPVXQoAcmMnxNN2gHRHwqA31QVkF2FXR2Vx8mx7tDKfsUPui4nz2oJkZKKpmSYepyiiDd5Qrqm5kFPbtqh",
  "key31": "4dgKjfLpqW6UxNkq4JydztsAZagjMfyLu4zZnt42EPawespxk1FppWGPsLwQWz98jnnHva28HAyqdu3gjwTxxESh",
  "key32": "2izKHW15bFavuemMa9LwCnF2tUF1wbHUscfxAzKkdwwZ1Zx23Pvx5AcMigG5FzHuxCTpmoWJMnMuTnqy67dxWhCG",
  "key33": "3oEuy3jx93G6nKG7nfyJgHNXjNswEtUs8gfK9w7vsVeqzcvA4no5KR3wWnvNAoi6QvtYzpzp7xWcTKN82sgJaL5W"
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
