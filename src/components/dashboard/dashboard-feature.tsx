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
    "3y4KKzDZ3iCtmXnmzLC1ymoqytk41QKuGmuWATD2TzqZBwcwGd49cLKqj23V8mnb5x2e83y7xBuYX5RuHQPpmpC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8RujmF4iGRRv6fThBWq837qY83GwAmr5TjZ5thyhJA9H2H3tnesqbGPBUTCMSWHKDW6Ka6n8q74FZra6zkNmRk",
  "key1": "4ws2ECdRGUYcYoWCuinTvL8KNuw3e9ZetdPAQEr4aZPRJ5nvP8RoL47ytH8qhWU9JrL27nRkRkY1dWTtWEDqjtmG",
  "key2": "Ttv4pKZD15kCye1xyhGLybMoE4294bsrE3fGMvdQnJ4kaA942mg3fLfnbvwZrtKEXNwTvnU6heEEHx9p6HhSjS6",
  "key3": "42sxY9xSbCMhH1ATXBfurewb4NVvt5GzX8wEpfjsRfxFYNWfhp5iomDge8TML9p8V3m2WDizz3HAcvoxU1WBm1Sx",
  "key4": "57u8BEn1cp1N8nYYbarWnLuaK2Tv1FomdJCNtazAExcm7afdr56s8Xg6HHAEDBrSX47R7s8JamJQ3qoYaz9JA1ia",
  "key5": "5usdtdSpQVqsCWNh4Z16BtYiUzAVyphaVh4oyKqecEiqUEBvuoZe1ocCWD1F6yotyxztChY8Xp3cx6bzNAJnkyzr",
  "key6": "4LEjxTZqS4DuWK9zz7ujPL3FU7FVEZTz2iSmLHe44ERATXr1EE8Eq3WtHL9kE85dKtFH2mPGSJ4WH9qoJM4Mb3HD",
  "key7": "gWDfbxBZwNawg6qEzk6m4Msi4eEy6q2R6GnrEoHDCPiuPg1vXNZg3oUQFXEd9mv5rd2dZxTYD7Nr6eyYB4fVpxr",
  "key8": "5N2XBQvSVCv6ur7Qu1KdPx9qKYgS8A2ybCrZ5iCvGbsTeR5uHHPsdbgkUiAAZZw8d45B2BL3FkX5VToA1a3FC3dA",
  "key9": "4EejZvo5LZru2daDHrphDCMFfjwecuYbRBr3d7H6GQkCj1obTe6KiAoMYddau4uafBf9dCU33FendWNpzF8yvcas",
  "key10": "3SxDfAfGj6raHZfqRGmGjKq3WaQJLfZCJA4hMBJKtyTfZg7pHXb8WR5zxVBR1fk6RHa7vXXUYwtFVCZLubrrzCV4",
  "key11": "W1VA26mwiTVzJuAiBUUo46EFJhJo6iEyWXyAd4TM3TkkDELfy4mZdpVZnTsU25Yu9cVfRHXJKqxreKRtmGd7NdR",
  "key12": "5jw2HijCX153XG5S7g2Huv1TGDQpvv8n3jUkiVWbgfNrZVyVZiJgkakSxsXB5yEDpSspJUkussDp5mVK4h5PEaQm",
  "key13": "mLBq84ycvjvvWpCR2tzrX8nrzxDirMkSEu9bDDSnvLr9ckuzJtK859eVEBK1EUerzJ4ZtFfFHcb4abfaat6QieA",
  "key14": "Sku8Y5s3X1Z5CkGkMSjfTHerCUJaAwCB4nF9XKPfzsD1FX18x8KYr2SsuC8NbnLZvsT5sDpvxLm9LuNm7HXuByz",
  "key15": "3MKCZ3jNRCuyW11a5gX41HcvNtW1cBEjAM1r79Gq5qZcrhm344P45eeWcpgquRPrLE5bF6RCZPeeKi6NRpFpBsZn",
  "key16": "3veVrNe1ucJh8VkRS7qvjnjYDs6LhiY2E6YAHNBVqx3hedgtUkDPGJ6frR8usj7s47NG5Tur2esEJMXBBDitRVeG",
  "key17": "3qNVHpjg5CrvR6XUpPcotNAiqmzYbLCM389JC4KMAwC1wEBPtre6SMbLtq4uoqov5b8H7hKEuggb58Ti9ss5Qoab",
  "key18": "3gcoAKJsvMqE6js2pDroUCyzB1kavanQuNema5hmXEqduvhiWcXeMAXFpNqMf8ztoaJMquBeirwnc5ssoXtnJMvr",
  "key19": "5XcuWYeUA6bCLWsHaioh8gvHKdnhKVHtdkyVSyJYeriYGLZmRSw2r4qMcJoixNLzZq3GjXGvid3LDkuLEz3hftAA",
  "key20": "2KKtCHPHPj6iYsF35Jg3Bp7Yo7MHzyTQcEgjFYvFdyYjn2xCTFCcEnGsyQjdhtKVMT8KenVoXpeAcstNFV5VQaVj",
  "key21": "57H4roPU8ARt1ornCieYxquYibAoLR5ZjXssv7aUQAwT1w2Efssrn4kZzLjtF1f9LnbygMEBrKYWM2ZhkRsWYakR",
  "key22": "63WMAcDBRrMRFTkitbi4goc5TZ5zRvBjTcPHaGrREeQVK4t85m1h2FyRwMRdbaUFhTVSPjBdntRWkt2mNxmdnj3Q",
  "key23": "wZxkFmj8pH3QEZEX2axizP31AgprEpAbpVEMVeCM929PrEp26xA1xGU8QB5awKYgqJeDmUXAgRVrcs72aNX7dbc",
  "key24": "9Av2DX7134dRoPzVWaB9prySPCCQQyTP9LGSGTxWkvU1d3YAoNaPqXeufPLkvghchFeSfCQty9q5RQBek8k7HRP",
  "key25": "2U9w8b7XegxkhGvrPcpctBPkCsDQSYpU5HWMP9tCW6w9qTCJqQ6sQQn9CcT3MfbwqJjDuZonK6cyquazGbKwvLDb",
  "key26": "Pb3aZco2i3LgKjUJJBDPYgkCUoAB9XwFyM9Nt3nRsfvmFWGF95Sj8Gcnxy48Y8NHsFCPwpDV3SwbBHevNw1iyfF",
  "key27": "4kmCRnZaDTeT5uWeW6WERdCSySHzcXoKQk9kPmsz1uLd6CWVeyoYvpzWmWpEpi9JaM1smJZXqnMJJnZxNMp7Yhrh",
  "key28": "K31XMeweN1RbMA7JqxeLKrCnLPwyfBkQHCgEQbmF1vR8TWPpDMagydNS7fYt2HKRQKSqBJztrKAkXBEXVj39di8",
  "key29": "oZ4dG3uPGDL1Z9hnWcvjqpUo2DBSiKjohiPFQoB4DLJhBtjXgQhgbdn2o1kc6f8X1w7RtFMH24xi63mghzM7Fcc",
  "key30": "64SevaTtTu2TRwnu3NWN1FB2rB5bUZTeWoie9A5fWb6LGyNEe4nKswu9A88jXEhTWMYKPv1KRqCcALrri845LwZX",
  "key31": "55XrbzDtPTAbmFpEtZQk1xUpn3yJBfJBPaqHq5zHwfCQ8gqPZYoqFqs9xuPpeovTtVwmafTXFBuNxHNQFwWYG6LW",
  "key32": "5CV1D6f4usERRwptZzydB4jxP4aYgLyJNHc6k9q9ys2kFk1qYpX3tMuRBD9PgQsWcnv7bzgEJcACwUJonSxzbhpf",
  "key33": "4Ye5Av6a2MPZgtBFetoJZRoypTCsa2riHLQzaHjyeu3S2s78PsLN28rXtrWwSF1Yj2C7r53mHrD7neYo355QDyUE",
  "key34": "458gmj8kCxPSBXxXC2gQvWCt4w2CQfkhZwPWWWL8azSUWsQ6nnAmJ9Fo8gEoVvk59Vyi7WKGpstHQQ7trJDXtuEo",
  "key35": "4LRaBBGzizVx2BzzJDEEyV85NyecJC4AHJaD5Cz1SEYUZguLJFbtbbdhdd2K6Lp2wn9SdBAZNMiBmFnFMAhoELmi",
  "key36": "59c3jBL4UFHB1NjdKzhcPcRdAndL1p42SfY7kRU9MsScoYrqLKaHfkpStKjnMWvo8sEbjyWbBnTSWH9eLE39mKiR"
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
