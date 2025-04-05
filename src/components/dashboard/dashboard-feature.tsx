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
    "2ovDDVaNo58cbmLgkDRGKS9se3WendZbKMoHeJa9Q274vhVgmbPm67dsn3bkPWyVGHwgZpT6SbJfG8zHCdzXRpQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMiScjkBrLiri1qm1EqvAUmeNHqTN3Z3aAhtxAP5KdacSTvySX5cYmiytBCUpVDVC4Vgibo8dbe42x93tSpHb1i",
  "key1": "2Rt2p3wrFYNmzdWVnsn75XqupwZexotk2YjktzM8YeKV3tLL3TN7NX2wdfet9jz56rdPDLztiD78tPggvLjk8o62",
  "key2": "43RgdwrRthuE9q4pyzCMaG3QWLseAeyNeHvqoarv5RUA9NNDPCr5GMBt7kry1u3eaE7CxpDbi4jcFqpQzGJVr1VU",
  "key3": "3efNNjneAKyvaQSL8R8KVzFhHsUQkQCBRNLvEDSh8S6V2uNZWBnJNVDaM8b5zZdhPrktBwxE3Zdonw887ib9xGtX",
  "key4": "2o7D3mxjYLumm1wycSuzWY41YByjGBQ3Wq2nRwNgMiiPVH5YquU3skAgcrxo5US1gPKv5NEAt2Kh6Tq5vU3UJSB",
  "key5": "616tyqjsvrUJTGA6dQumP5CArsmTqzyMfMy8XfwQHp9FuSJ9gbdTPuvW7kMEE2oom5MewV3EtS6MFUqgxcpLnnSk",
  "key6": "5j4nNWYhDhXP5NaCRUZ1ehexB1SC75F9sRYZEeqXCKMiMxM3bhucNdbcLAy6t1XBCbHoRWbPXiE1sHhT1hUUoiEw",
  "key7": "MQha7c5MXSmKuseiu1TptpTYmNqEhzz8C4oP6HZJ2mMFb7Wd7THwa8MBKBxG1JVUhQ7qXLrmwmWcswv7AiYZnkG",
  "key8": "59SDDeL3dDsRBjaavu2Sar698xCkh9RViSfwuQpnfsEFTQgjEC61v3BGPM1sFikNhuEuQwREX6aVJcFUmrn2ss1n",
  "key9": "4WYKk8v3NXsBVZfjFdHcjjrFaeiCdWFv3YU7myKdttqF8o3RZRkGnXJdTZgL53uWaVAVUV1DeVJQhaQT7efvaA6A",
  "key10": "3EJTyobiFKmyPtKEjBrpvgRh4dttA9biWTbs8uz3RG3SidiGSzbJTvpvcw4QThPPJ7VLWPyTanieFRBdSaZEKV6t",
  "key11": "5TpV7RwpBMnL8A4gjdanmzdBkB5LYtcn5U6vQ97ZpSwjdqhPRNF1buoiUrzKd5UHrXyXQxQAUd16bTQgMufSwCoj",
  "key12": "hyVmg76XRCdpSPdvVLRjFgMZRhCa3LnnLbvWJ8oZrF1ERdDK2SruEFAm2bF8mTGALFt4MmsHVS4kAWsQWUnVoga",
  "key13": "2DEAwa5kqLM3zDJdEvkhuZu52rpcTXE796E3s3oaGeMK9hnwCNRroeeB8xhaW9R6VRrVbgKQPUVcvQoKuRepGTjD",
  "key14": "5bDTEssK2BoMmJX7i5T4kvUR3yWXiKHJDpJxBPqxnNMEut3CCFvbRXh7MW68zrW3ixodsyec2Db6MondYCXrnJDd",
  "key15": "38EKce2nmB8Pdo3C8mySmYN6sR35YjKBeQtkHhzpyuXpJtPaccLcHQSRLsRUJCu4JXo5xS356U3bsErP3f6HDVbX",
  "key16": "5khagM2Xkn1eELyz82U2YAd7MyqzTU35SL8JWByiiC15RU12GpvDfNA6FNfUzqCw5VhW2j1A3ocTPunPXvtpFwMx",
  "key17": "29jSD6bxsGT1h6dqhPggFNa6RVMYN2Z4wy611VFf4ENNYVuEEPSfVvNTFgnkBd2CPqpjQHYwpjsxccEcc3SNcnRV",
  "key18": "2nd3kKATv2UvBRpsPCyaNVPjMs2uyN3L2N2x2z4WhdL9fNdjwnou2J5Y6rAd1xGEGD1gsu4tCmQsYWAme7iW2tzZ",
  "key19": "5ryBgJ7fXGZBwW5aDV465i2q4d3uwCa6tosyXqcAxxcm8QAZevvAXTU2SQ8vRTmPhMWJiYeb29cSGAnRudUSNFFo",
  "key20": "3qWo7NFXtht2FPGvRhDj1FmQJP4pihAEZN1UAPUFvGpMsJytaC92zVCm9UHvsFjPoWLyje97TE4RTssHnwzUoS5C",
  "key21": "4ZTxGxgezNXoEBFABeq4AWSWwUXUnn4mbQL5WEs15ZLtgoxq5TfYWS7wM1xD1QzyDLznd9V3vu99j2NCBapXBCqu",
  "key22": "eoL92oTG5FXLKshuL1wvscfUQWFm9STStnCL5L87CX4FPjz2drXc1b7rJDidenhSAq4ye2gKNN3FaZ7sDzpuhvb",
  "key23": "ctVfow4rQBP8SbTRqvuLjVSUDkw7vag73vM3tn1xfTjB6HYeV981wv7CtdbMPA3RC9r3Xm4LnduHCizTBEJY8b9",
  "key24": "3zN9NDvLUN4gcuCktfETC8iLarJiNjC1b3HEAoT4yxc7242EjFxummBcgkJX8fCdN34uhimXDmdhzZ9nJUwGLu1Z",
  "key25": "VaTHzTUax754UpYuHmWDcRTBfkAF6ZmtCNxn9BvfaP1GwfPZSqDdVQ8ty4NutBjNkBbTdgJzxJZR3ErGbKgoSCt",
  "key26": "1xnuKQZQHbRaL6F2pjTpWRuYgSqm9KymXJq2EAHyEPPRooY6q45DbhDhm76rWJQgKzmZ8MzyFDBd5g8vcyGcxHt",
  "key27": "44e2igapWisP6pqARELrhpgrmAuauLtDg17keUtyY6nNwEg2XUq6SdgpxADiLvygDEXQdrhApFboa91hmUFU5DTp",
  "key28": "33BARusvaDm1EngdVNoBcjnqEaNQ5o4QSEXvLSFvX3Dc8Yz2dejNfMPckjkeSsBwXSGqLrZQSzYqJQC7gw8Ho8vs",
  "key29": "2r7sTosHXd2sFjHDCbVJygmZCRS9PV4RoY4J5Y9m1VpBKPg3Z3zQF2Shd6E43gBteu5b9mmMvmzYM7V1jwrhrQjs",
  "key30": "4sdWkwzXc7M7dQ6dB8tetTWrWFym2aq5yxwLTktHN5Q8hhRtztF6T74np581ZkedGL6m1gsUdX4KnfCKbc6Xp5bJ",
  "key31": "3tgAUNgSxUVVaagyNta3qKgfD54trb5fnzvMq8GAMZXzLAGnSckx1QueQoGdiTrQZks2XtQ2tqc57kFQkaNvVX5y",
  "key32": "hZbdKeqV6GGN17XAm2oWMihXSgVYrEbeMaWnjNYW5Yo8g4k7XCdY331iDYC2Db7FxLPcjKLbcWwRoVw5WspGLok",
  "key33": "57wzeoKfEjG5aNT8QFzFUYR4nrE4ziEPTtV1vUKMSuT5j3yw4odhYP532rNEPpW7Yf38RJrw4Ecxth3iQRDqXxuW",
  "key34": "5tSBsKsKRq1eQhhaVbm7k7sxi5HHsLZwgVC8Qt3pkCEXUn4ifc4BbqavHjqrp1x74GbXBozHkDU1oE5yie1CTVsp",
  "key35": "4DMro23PVA6i6BdW95zajYXT9iUR4KWAG5aFffrF8BTQnyPc1YQijgSB6oFYtCVvETqr2vXkE5NAVxaGuf5sQbQW",
  "key36": "2Mkdf92ToiSCGgePWvQF8yznATNx8GdMgy7LkxUKTx4QXXModQQxegM8p7FFUfwaBWsd5gEQkce63dgrHiU5TENn",
  "key37": "61ZbttUWRBbiJF1NqmAsjAjME2SxAabJqYaR2vo1UN8stuPbZsZXw6Y4sFbvJWFQ3nS9y9QQoABzeqU2GR6KAoY6",
  "key38": "tJg98HzJNpmEQMAazhHh7JFwSSuTvseTyPzvn8Xjpk85J7LmDWQFZ3KwYGbLfeqnd35fzzjN7j2fSnap2Bc8L9r",
  "key39": "2mnSnYHY29c7VquysETFmHvMec9eHNBgTm1RXhiFmus3ZM4d3sFjNqNfiiWo2CJV6XAoHcmwjwiJc5pGfEg29GEQ",
  "key40": "4u8hJkwnJqvzpDT7w64d13wmxs1zDaCZGNyMuVv8wtQeaA3zytuxeDoLGNxGBsFvZShHuu2qK7t2LfddpDHXiYMG",
  "key41": "2CWESB3o6RG19djYNcHJK15R9jMBcoXPd7q4rJiBei4aMCHDxSEULmMmyviWNsHkZfZJDrucD7tcKhn4fkgwvaNQ"
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
