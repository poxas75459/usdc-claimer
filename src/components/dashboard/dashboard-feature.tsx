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
    "5dWcWLMi58HwDJfKp4nKh7Cx1tpXbT9MqgBdLhyCjifRBvgnszQdEbuARRsGYP6itXxjKWB7h71L7JFB6fk2Uoeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkcwJfvAXcR5JTNw2HzEy5tnFiRdNZwPWCHWQTQiDd25WhHRa7nny6y8ukMs3A9PToXJwWFWrfeANXZJ3PeF5xx",
  "key1": "3NRLfjBDiAy6BssC3DniizHotj932qFLrfZuXDYixvws5rSgw6wXEmwWrAjUdKcv18giUpWaGjMqP2sHUuKyXCxy",
  "key2": "BUEsMJ9mHtgnu8FKkUa4gymbwfbs2a9u92Y6CNZu8oKNH6AcxaTAaBbaqxdg83grgyXn3ZwvTnNiUL4Yb6A33UR",
  "key3": "49a1vsm4xcjT7PSwAAMPFipW7UVxtGc4nSvASDRtaNfwcbf4FyERvuJLbag4QMEq7aVExVrJzHDgxM3Hj8wWXGYs",
  "key4": "4ZR8f8mQnamRmbjmMrwdd7XuuA5xMjiMCP9tSqwutMyPG9oCNBitat5xA8oA8KHnDCwhv9QkxnEbMCszHhBt3kpb",
  "key5": "5idWgK2kTzBzfToAuDDXn69Kuou2UFoNJksHcCyoo7TbpJMjfkyW1EMM8yz1DgHpo3A1Df4LTbRpAQa5dYrQeJAW",
  "key6": "2MFNkmvM5NH7TMJe3Fm22BtkLmPjA2ypE9QoyXDXhLxrffhHWzKfksaBLjP42mqtq277kzskP8uGp9hwra3XWmht",
  "key7": "5sfBiDP3N9phMon2ACc9Kjksc2Xpc9cS7RoreGA5VHi48ecBFXdwPfkyVTSy5uMY1oggTiGsyNtCNXNPCNWRUkgJ",
  "key8": "3yx58efEaiBZCrKFFgYSzyCX7f6raAsKubspxDUgHH1YYVc2KfxtnwZj2Aqdqp5xGFbEd4Q3MXNJsU6MEdzJFHs6",
  "key9": "3Sk8S4hjdbGymp9GkwwuJfgYksqnpfnuJkFpcC5TgbtzdpNzrLavKum19RSD6CyKkyzkGZmH7J6jf4ghkgLPiTDc",
  "key10": "fCvk7kPrR9teqLMe15rzWy98h3ioX4jeCXgfJiNv7hcicUcxpueifxzbicTtsSeysXXdtvTRfPKKmVFLHnSDVyn",
  "key11": "4DsRMdBkXkqk4pgrkDviiom5NFrXGmeSo5GkCJouzAz5dC79YiVGAq3bAgBsvo4RGfVm2BXTAexhJDDcpYdQiikJ",
  "key12": "4EdFXfyTZnoZaWyzteAfkbtrr1xmyAV6AusFs5MS68JBpsmdewCohgcVLWAUk5pPws9B9xSBgyMMCkE7hJscLrK3",
  "key13": "2y3ns4Rghp5ybsvXayg7bgDaTpRjz569SYaoazGkWudn2G4VDKuFepEMDQnvQbkJZhYFkuz2wnkYSwSWbfB2rDTi",
  "key14": "2egxZbXnSzMKzXsZhXUDEkn558WMLFAs1dBK9aWJAsTJoVwphxXvMqTHw5z3GgjSXbPieQFP6my7Jp9z2StR6aRA",
  "key15": "5qNkcs9vRoB2Sau9QMMriWwGefm1ckNBdgN4HvtbamcVtU5GCJaUvHBnDtA4R9LPnH9wXc5ghjgmMixSEjNPQQ67",
  "key16": "2yquFhYM3vY4yJfgjPRmvsCg3pvDU6WD4Uh2j1WLSK22Frfr2UWiCK6DTNCHv8Yx4kkiQzGrgEW7Z6nmC97wGgjP",
  "key17": "49BVJk1P14ZvyuDo5FoGUBJoWKkkzBbrR3iHvQrCLcvvoTVBP8LjGx53Nvn45gCmTpKNDX1QsgtE37KGcZUYju6J",
  "key18": "vLrd1h9ptQwUNGTpMN75kjJ5TFPT354LXV3tBw13WqMSCBBtaq6QvvxrTFatPXF7YCFiZ46GVgQMKzCs9K5YjYa",
  "key19": "4fBWxw8zECQqCNo25VaWkoC8BCtNTpNbma8HPLj67fH6CgdWQ8DHZjY8qM8XCBzPBaTyVwhdVzrVq5V8hCDFfvEb",
  "key20": "4Kt4ohRXSPWMRMLpv5ogGNAG44v5ZVkyQTLv4hJVSrpoYzfGvvhvFo22ydy8CbcUA7t9j7vZGBN6eBoukpL8pq1B",
  "key21": "2PLEjLGm9C93aPPXnoGJem8efPPptKYv4AEbbgHY9YGbzbtdBoo6Zqivdwan5FpHaroqacRxdzHyVmxzfVJvYYxR",
  "key22": "5fxWdEZCBMWde79wRXFyA8sZdSJvCLsWafxaUdWxQFEdZnkKPwRBaa1qAMQik33BEEFfP6hdKaC7k67NiX7uYXCA",
  "key23": "MCiqoQJfdhQJNEt1GsxJDbS4NVEfzx5PDHa327EkQReEAR8WsMHDPLkf1TFkhm7J4nq1VdtudaU4DLWHgxfHdoK",
  "key24": "384nK2YeEnxcwcZhzBAjp4oKjEwsuGFkhG9iPGpdtvZeVZxRvoNb8vNwja5fQ7WdniicKvSWNGScTpUuHqD3w9o5",
  "key25": "5uRV9SbwJGqaYbbbBdytDjy9xsqzMrGge2T63PBXCvKCaGp3nS942M2JBeR46jtbUbLjYSpL9dwpUXGA3YGfyMyK",
  "key26": "hfcZXhEEdbtbREL1TBoNhkQLBWHm8HetGBN9BRh47L4UBkJM5RuktcMmyZg8h2kAknykC8oHBs7u3sPqpCf6vRf",
  "key27": "weuENXywkbazQo8WwLaTdxJ2fJebCCHYaFg1E52Q7yKGW743Rs5rFW3bKT3B1D2Amb7qK5F39TWwQvThaATmYSe",
  "key28": "3UpS96d3F6pfGMMVX9mTpgvyu4MGhzikJGbfvYZCVsm4VonmmnpKiZyUZe7Cjaa18v9yusAMz7pUPxV4NWFRHRNb",
  "key29": "3jbdPxnKDTLZJ2oPC7aSjwrB4yp6oT3u63YeHrDCHPguMnvED6QjZLemJ23yfrLQaGR14xRwPVnKzuygaMsxszS5",
  "key30": "5oTxFV3BjFsHpheeRbNupEYV5YexQBWL4a7A7Vkttnyucr3P2pBwtsitVNT3Xb3j8CGhKyAuVc848dxt5uLw4Qnu",
  "key31": "4wDNcNvH2MyjwTC4So7XrQ3Dr4a6xGtAro244NK1SNkJQMGkWKqQThH1bDrbfga23uRsEMSf46J6Wv3oNqT19Hyd",
  "key32": "2ejTnNLiLu2Rd9bjrCYzEaKjy23SGKrXcSmREfRh45EmzNnLvSffFsoKoj5AYZCVL3VqhD9RHbkAgyT5idLjEjv1",
  "key33": "5ey24DXnSkA2SWnVPkeqa8z8MRKRqLjanGRYmxzdfzJji9yYc3XXT2Q1Lj1LbZoEGZgaJw4S1g7Q76cwk9GzEEB7",
  "key34": "5huzGSC61fWpiU3s9vpERhEBZjjg9LUoKjBKzBVMyN44icQViBmV4Nki4Wm1hwDgvxCCWriqwkFdmtChcise9TWe",
  "key35": "ngkoSiNNBzd5tNwgNWVK143ARcXGYKeQcSxCSRYnLiqNApcHpRV3vC3u729zfrN1tB1893uThA6QUZCnzHkKCQb",
  "key36": "43uHiyu337vgRwTPubbUnxtgxgsJ8NhYaAHy97hm8RXEua6CNSm9AVxYMzwGdeAAcVAR76ZoNAmbuat8HEc6R2Mt",
  "key37": "bEiB6YCDCgXoMmJicJLk2i6mAqBoEqzE8QWpJX2o7Bm3m43mUdPn1ZDrMEZ8q95cZHh3rPx3pPbLoCDPsh2Uf9m"
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
