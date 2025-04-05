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
    "3bvBA7oZ2F3uun9kv9yD37oj4tC78a4Cg7rFKUgkTo8tp9Arvb9NcNhaTMwuZgH89pBY9Bm3HxRPmv4KJuhfdMzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44mmvnjsm57b4Gs51CzATiJz7nMpFGS7nDFBMZEBrKAkKRiDsB9VNKJxKbXfFrqjvGgYyVREdhjdVAdEoZqNJhVP",
  "key1": "1269AvsTyfEGourDXfpSCNSS8XRkHXDgJc6Eh5azkobQ39QhsVApA7jTBQQz6usUNeRjKoytrh4YDTGqH3CwhFy4",
  "key2": "5f6oa7tC1AwqNggWXQgJrPSzE2sNHNxPh2imntrPuMUVwgVTzY2wSS9iBY3FSvUA9cYK5TBwhGMW95KGUqa99ViA",
  "key3": "LGGVzj28vfTDXNz5RcYobY4EjrfuXxorS1p4xjVATW8PmL1dqeBrsLWXUjKBoWVwJR7X8Rrap2Stsixsb61nv3h",
  "key4": "TeShiaSgciebCXkQ59pS6URCFnzFsNFXKFdN3B4gMQSMMukZHMzSEpcnvaBZVojry9V73oDtiRZtkiumwaXFsYB",
  "key5": "WBBLbnK5xesrArHyxndBxDbf2MxUDsMBiej487XS5gGJ3m8M9Ppd6vapDNEuXdbGkjBJGWYKTNprhJF92PP9t3r",
  "key6": "3v3MfZ6rKQApPc5QnREqfWe3icuDrtoD4pwMmDXLG5CLCdwbLPy5iruXwK2DNYSswnvV2yxZSwoMVJPLvDgRZTgQ",
  "key7": "3UJchhcvXFPQm8hKTD9X48rdaVwzRfYD8okkh7Xbw4v9KMFdxqYoFhCDkB22xbsUP9hz6B6oZ2vaVvgEWfrqZKfp",
  "key8": "4cJZDL9ptpWbtCEe2KguN5yWZ2LVXDYuXsoy3WdbfrtLz95KUgREVNNyCnbNR8YPCU1kMy8gjiKivASQmjv6XsVL",
  "key9": "4ME2pTpCPhErgVQr843vdjgZ2tC1SVsMz8mvPspVBr1GjFL5w12BtMgLr5TfR7ta8ZZr4zPoThF2fFb1KXDYYNfS",
  "key10": "egkwHT6YPvKLX4oWd7zSy9Wt3LdfA6siySu4ZHAvWz9y1mR5XhGsRaB42bNxEi2KZpndFNUxwwdY7SxMfNg3bL2",
  "key11": "4tC3psTappWu3Up5GchFkvmaebAVKizwMDbeFenQ7w91exf6PF21AnfVgtFqUGACWGm3NDBCqJiqeenLhc4SZQeu",
  "key12": "PaKQvWtC2obJhG8wqCuyCwDPFBfZYaz71wbW3NRBVSgCGkGztQ4DYR3wA1PxKLQxEVKw228yCHeknEZtT1jGjkt",
  "key13": "4MyWfFSnDFC2Eno6SM2cd5NhZXfUf9da7wvNz8XdbkABmArerx7KA133PNYtdSAxsCohryitzCLEACF13funEkFm",
  "key14": "4YzTWmWvNc17ua9yzHpi7cwJVg8Z42SToEpNMuzQwwX4azfgWNoHL78iLxMVkbJnZVfuQezAkRzorj9gPbWakaaL",
  "key15": "54CEm4aSGT8i6NHW3bxye5tRvJVqDRGDz7t6oh9uHnfjfQz5bB3gdv87j6UqyXiyfjnBkcW1jB2kBm5mqpGxd5Nj",
  "key16": "hx7h8dkxqfu4xm23iqAgfq6PGjHCqhQU74ny3D2adaUNZJhkEjstCrPweJREkt44EeLpay76TPV1uxwND9VxEKS",
  "key17": "UroT2WYzrSGV5DxdAi86z4zpNTRN4dCZTBQBH8UGVFXW3Uk2Bh2sZjSCeYBdGJEK7L3HojyMq4tX98XpQ2dE3dU",
  "key18": "3oFBuTHCHX4NX6GDA3a4DRvxCk67hXbKzWA2FC3iSPopiMhuD6yi3RrhNoonGHmwZyDpWwHLUdg3qkokhNpVzi3a",
  "key19": "4TCfWGEXYijdeeqo7iWuS7BamC77ViK9faWu1WMBiDqFpoik4RxtxuGx72PG2YFqUYjW6kfKEGGSw9p57w2hSFaL",
  "key20": "5SXgf2mgWKDNfs1W7z3xsKzToK3CJmkjc8sjeSuVZYQCWbwzxdwUVFKtHY2A6qauxygJWRPPKea1qutxHcxbDG3q",
  "key21": "5MQ9hsSnLsJ5F11YKzwzLAwDiAGEJAc98CCgzdAemsa9sZ6TuJanFMnzZBQv92y8RnqwJLLeQhYDigr1usBbU19i",
  "key22": "65vkwt3eqAX7WBnAH7CZe1ACzm3wQnX5e8emCApxq62SH4vLKTeiU7NJLovKrmer4MmzMhhrM3JxXtR4uz2DBju1",
  "key23": "48oo7XBf5mcAFLNAzGYGmVnBRnrrouZNPgxaAAwizHcQkDgB7qEu7daSDGpDWEgLyvyJoV3R7xKcpve3v51dwr4H",
  "key24": "229cJkB3vD4VpWoBbLscwfxfwZyJauXqjuXwewhiA8nyCKp8QM1Q3De6Kkaon4cRLLRa4g1qWAVKgVaS2BEfrArJ",
  "key25": "ro1nmfPLVj9RtWwoGY2JPRsn24T4Z3gUuXgHvkhBNf6sz9yGE7jZK13W55qQtKrfTioWg4fGi5t8Axaipvb5ipw",
  "key26": "4s2RWXKmM3UhY68SttG5g1gXbq2Z7qu1VJb6SFtmwdHirQWekGwCjfNCHDw36gtfYB48EJcrrFQoQ3K1iH6s7K7L",
  "key27": "3L2yLD9Ld3g9mvB653of8HFUfi2dxMn9YRFXeoNj2VUGCHmsE7wur7iNUc3h33wqug2PNHZgCnPJvP8Dc4S7KgQh",
  "key28": "8M1ZEWAygHov3Fk8UCvjGsaMZEvLPvW6sQCReCzwriYMQM6noGmhU3UcKbFChz5MoCC9Xrz5c3bfnsBTNCnAWFZ",
  "key29": "zwtYzptfFMzBWghkFKmVuvP4dvbvNxz7gVyZkfWH35quQmSDwb4Mk6eWbe7mCtHWijt7D52EJNsBajzhKu1KyoE",
  "key30": "34AUsVNMacdC9wUtV9UHnwFxNf4hmKn76WvEyo1RqpL9KHUZj1QrpkuS2M5BCNxNgbe3HDSwNkRooueJMJC5Jhxt",
  "key31": "a8e25hkB9GhLtGM9CPppwEdnTPSxMj8ru9wafxmwp5EcpqW6gDAzwTZLyLhwZFCcRPGWyhD41PUMzv2tFMAHF8N",
  "key32": "AeBXiKoZz9VJpZRCz6AFGvjmx22pazRYx15uyUAih7Hjk9brkYAMNdy5TtkG1Y1YmL427KaXojnC5K1hV38hAT3",
  "key33": "mkcJgFhW7g1eYXNPiFqoXkyZWSnyee5PUWNi8LUHohhgVq5LYcmjs23ZAxEcLxdtAgm5bRdcQH7jkLV5xeuMgt8",
  "key34": "3QGRdBPL7mdqMFQoXPbi21bSPPJLyQvKJJu6Gci8SgF8RU7AEMrg2HbjW9xuc5o8pgwVwfQX2Few4ZCdPtoGw42S",
  "key35": "4AvYdCFWKCikqrgUvj5Si3sLqzmQ7z85yg1z9UG5DFQb3FcgLom3LacBRLHWDcL4M9yBU2hpRn5VyiafsQRdcEgA",
  "key36": "4wfZTqLZXthXdfnCFYLRHSuzvi4JqapwV3pfFwqmfx4yExMH4Tm5hJQiqu5AYBy2XjA5o9748ru9scVshPAbDZ8w",
  "key37": "3KjaViwm5PYmEEkJjaRuS5z2eMsBxGzdXMHXo49CMESteo69a2q8duqKCPhpXJzfFWoNzeToTNoAqsBa8vQyKuTU",
  "key38": "3nXCti55tT39m1uqj1kT2xhPMoWvTFwc35ht6GphrMwXyHQEKicmuzC7Ex5p1M9CmwtcaGZQYPxUBAMzSaEEpqVA",
  "key39": "4QLgcjBbDHA1H6kHUMDzyzQG8bLQvU8vPTSQTYHpNXjKSHKtKaWp4vpWJJm6JmiFgU2QsiBPs3hxypshQ2PXUxRb"
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
