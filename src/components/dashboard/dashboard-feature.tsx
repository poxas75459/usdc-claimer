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
    "4uKLrDjt27YFtA7RQJteRJ1CyULRjQX7oKvCSzGbwqp83gJWnL6PqLNXRWQ15BzGusPkgyAQLZpMj941bCrFDCa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwwWmMm1XeueWPxjC4aBNYdBHwT84YphoVk47zfViHTUwyWLkPa6m894bwYnBoRGEkoAJLzfN4kxTfhJdgQTR8B",
  "key1": "ko6Nwt91TknyhRq9dFmbKZLJ5fcRDTFjLfahLhcMmkT4KuhxvMd6wrzZGkJJ3fv85VuZcEpNzCkxEvrR1Hvvomh",
  "key2": "3ZP1BiyjXGAisD2Hc24p2zUudXXUGN8ztoQYcXTcm6ZLvba3CrSjxTeymCexjoaNdoxMyHM4MB9s9nMX8gv2jLxS",
  "key3": "4TtyR2qCriaYbgQTKqBhCFn2C6LMp5bucwEA1ZWxZEk3QwQXPT1F4Zc5Gp5ijJgPN5hoQQYyyxsSNLXci8eGxmpA",
  "key4": "4SkFB5yBLnMAaVKuNVu1J7WxE1akgfUB6obaT4JKv6PjanAf2mX6XneY5MJKdCBXResjn1E8bHWGbVCdaPxXmjPR",
  "key5": "5M3Lr6Wn2U9eP5FpzWNnwV1o3LYtgCtczqf9Q21uLXg54rpFqpqeEvkL4sNjYdpyQ9YgRRVdy2mWeaTt5ECmQknm",
  "key6": "zsJcwMfBLydsqnhh2rJyQufatZyq8Dc5BXfxULUzGAezxERWzSwA5UehdUrjUe4quhHQeE3KbvjYTVxnJRhjQ4x",
  "key7": "4ctj5USAAp5wu3H6PrjhwU8uMjQnBVx8rRBJnDwuBMBt5phGY1bATWwZfKC8uWMkWyduYPVjNv8cfu4AWnsDMBs8",
  "key8": "5gngfJd5ivDuDXN5Ea48x6y6aXacxCpDEf74mSpZutxvdsXqLMUhzx2NEeCp4A9NNftAdvZdvp4MxyeY4kVMw6Hk",
  "key9": "2WC2GPK12JDAjwDzccb3YZCMe71JFNcEb2iVnKXU2WGFpP9C1iNEmhhp6aVCezVjQQo9BkXmJcestRd9yHrjpRYF",
  "key10": "VhuUcPwYh6U57v5gSY3pPSqKW12R7cneM6fjXb58BPQhbaess5jfPqaRTkZf4fvU6j8A2BCiMopLYjGnZ24qERM",
  "key11": "4w2oHEoH2jpTg2651hbsXzjajEuhBqGDiQ67fyimDTfZ6ZJBWtLnerUnP2e7Ku57JfeHejePTxnJWbiNZYLmbPs2",
  "key12": "52Et4BUab48CtnRSHQYERTwfhcLs3mZH3cQbWsJbinNRbgypugzrFTX2WaqH5pjEHuf3YhvUjXXfAdr3z4DTvcK4",
  "key13": "4PgXififrTaFYJZ7n3wTUAXGPAr4CmMUsf1tvhbjvbRuFComNxrHRHPGSfCnmeFjagXurZbKms8T19n3UeTXSpH6",
  "key14": "2tHBBetuTiMEV6KWjkpVd2FWBTa3Ks1qi2a7cC37HN13AqPrRCyYnE8Xk74poxeXVt4KjovB4R2YbaKCjvYBpCtX",
  "key15": "2MEdd3bcLUnYGrvDZvT3TLEWAY6h2jcz2apTmtqtc2VgT8JBUw9sZXjaKwP9phV6b58TogqmvDSgDuHJp7LgGxt8",
  "key16": "4U9f66RNhYrcDK9Chvy9fQRRzD6HoqK5x1WJxB5oo7Agj4teCZwCvcN8PUBmqBALXC5hHpyn2XW3FHqn3YC6skVg",
  "key17": "2cZfoN1sEwDvBr7tDJ2vF8kVE8oXuLg7sim1CC2kDCxdU1JWtevusvQFyG6S6P3Ea4P2RwoGhJ9eZv2nCSYgmc48",
  "key18": "5ANVYm7VDPpbrujUUX9ALbCskozwp8X6qjaZ7JLFLGxKUTYxWRzdMcD26xXVVcvJxdPKEgnVCP9wecboKPMBV7Za",
  "key19": "24nNHZaqSjReBFzTUBffuEQZF79cTdmDZDjnA3gEUXzfPPaakiKsnSMGhZ3cAu3B43ZjCLosaTsqQLZTEpZesiT5",
  "key20": "5tWPf21uFUVcMybNHumnTbcEFWHo3bvf4gaqDYu7FbsS2xxmPPAgeDeuost7TzBFf2H1ND4KUGUEGkjGZA6ja41T",
  "key21": "2AXqpozeW64iGiTD1bufSEWmmmTu9GNM4eDhF4zjNH73gJFJwrvGE5QQygkPU41EcTt94Uv1KiHbr5xifmjJuGRD",
  "key22": "56s4LyUGheBgmFPoLnoYz3BGVTLtEucLYqwBFFagvnJccgULH3JLdme8XYSJJaEDmP5VMQtxwQd2HSCCidXgd2Wm",
  "key23": "EBx82FW1NFMKRNSwRMhqnEfeXCLrg9htYeTL24NTm3ExwPeiBCMSAYXJgkAKcsU1isHFEBmGH8mbDN88Ljev8rH",
  "key24": "2TqCmfzQzUWSXHAff9eJwB23mWgReWj4a7uN3CMSjgYFpGDTUGjgHrPSw1czM45YEPU92EVdaGizL61sFpjDbqDB",
  "key25": "5xcL2CvrVVStTKYvzjP2QRFb84MFYToFX7LzQGL3QN89auVKfCtjLgLBmi1EvmNrPvrKfrQP6gSztb1hjqb8fe7Z",
  "key26": "4MZ5C1pcrNDFucDj9DtdpZDRBRw51S5tpNpxRsnr45WH6ByF7FW2hQzNZWzvuDLb8wmuWRwZ7nndYsPZ6VKdAe2J",
  "key27": "46Z5uF3k1sdeTAHa3smot1eC5EXjW5B5DWD9FEYfXvSevdCBZX77C4iJHdxwEbsKpeCAAhFBTKHxXseu5oGDeexF",
  "key28": "3irpcwqYijSGwkLUCok4b7oZou4FxkD8uJnadHPzQrHFbUciGmBA7ZUSpm6qo9G5c81RYVqnxG5GnJ8wtm2ESyDo",
  "key29": "2kPgNBYC4a5LA9FLbFkdcXvxkRAFUHbvYYTb1DRZ8y9BsPAUVsYkZ6NQ1WNPF5rWxh8sgvDYoEfsMEvftEfTCwrz",
  "key30": "2ZfrLPHYSKLd7BKUxkUsJH4icauiwaae6JeVc5cendUfikYF8XEY6e2rSDZ5vfSfC4ET6fEji7Jo9zxRrpygzmVv"
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
