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
    "4KDUaEZPkN9wApchYvZsA8SXAbUNUqDnnis8xcBxAqMnw3ZMEZothXErHpMHV2w58njdgF5gDneWraUN4KvKjR31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7mJA5yo31xNXtokd5ZsmfH9tk5PnujFWfrDdDYd6baxrSaeY8VejHDzfmRMmgY9LoRZs57z44pCnX2byPKoypk",
  "key1": "3gAqWAiUoH1YttrHZYsRK2mvueTe6Ghpo6LCDckwDFiwx6sxBZtWNfS4SomVw158q1YSMPaVUo9VnRLLVM5sTV7f",
  "key2": "5GMteYVKq19Ta6N9LJG7ZkNuJGxjLknHpQo7gbLQoCMJzeVJBMJwYpG8dr4z9fLzmdLdyF4Wk21MDnJAxaEr3WYr",
  "key3": "4XCuHf7t6ZXMgmH6YFJ5dZDRYchQ7fLqMaTanBrDrfBjyMgkHvfd8uPdwY8e76rCNtHHWhVCyEfFfTQ1ASjrS5rj",
  "key4": "3soEcCrGkxd8k7xnpsyMbu7nM3CqWUdJWJKBtbVYPYRi8URsqHYPwEFMisoWRF2pu1E89zZnq6DDDL8TvujbNQpK",
  "key5": "onVvcA4tQbMB9GB2piPeCQkKx7t2CFiEkmCqMwQqQFGkrV52bzm2DVkNEJC7JYPsPTFiSpzh9MekDh1WDt7byUh",
  "key6": "4FkcJTYLvf8jCAmVFoywLhUi8uRYgXQdodYxKPd1itsda3Asd6caGUoHqhrvKFDvuKi5gy3eK4JZaRfyS9r1PiJU",
  "key7": "2D28pERyscHCEL4yiqqZprpNrXnRJF4QvFxFFgTE5sRCuPCDpQEaQaxVhcDcsbAd5czmJZGtsYF2hF8uFHiRxF1Y",
  "key8": "3x77mvZ9VxDGbmHZyCjJyiY6WijHXR3r7e3GLPH3s7mb3sp5Nh9FeiPEXsNz6QTRWp3t8qkftYJwn4HwVRDX12F8",
  "key9": "5WswBg51JyJ7Rjb5hQ5Jhsm3yDnkqgQVrt7zCZf2JEhGM2RYPaM5mnTAtxioqG58ZyQkDYAYFZmoKUQLtzuzbquh",
  "key10": "5HHrzdjmgSUmqBJQom2dgxzXwjdcFWUPR8rjKCUmbyRNmPgrENTJbxmHiRaPYzxutwjyucy4Q7ATUZYo8KAits5w",
  "key11": "4sXi151SpVHaW6juxeFmUFWMgdgRHU6XeshcmEKBxvyE9FQmi9PyMp53QgyYKcaQ4edwFfbv59HSaj4vkH4nTxa7",
  "key12": "38T2fqQduBsH334zx7LowhD921Vs4JFTtWCRWE76B8XsUASjEPcLfg2N7UGPuPs4azKbdrrjrj4U1JjwvxjtuC2W",
  "key13": "ShXby7FuFkHhdhY6KsPqy9aV2i3kLgrPSqFZMsW65ufjmhnFY9o1cS1xyiwUrpbLhnsB4RTC6LhALxbib9DUdyo",
  "key14": "4P83mW6oCUS1uNd55fagUAmi4EbA9FvKZueWoh9d6ccaY9nu9D6yrHcXoHHjdsMU4yQVQ8vSmoPdx6UGEJxBS4fU",
  "key15": "SEddrLYhRsnqs3en8UkjrksPixqEn59ihBPoJP7kqh1Ch6mLgjyFRD4bgK1A7B63ucseLYDLx5G6VpcgFYwsw7y",
  "key16": "3eW1DHQHzYExwPMEWdCtCXGZ5wf7Z9HpM6WpW2AA3iHgH8ZQ18P3CVupMFLf5W7DcMxAn7eVgYSEiqScKCFD4wPN",
  "key17": "4SoMjYLD9KffT1JydPSRFqP1NpAiTYr2gCXtBdukBgHXUbgLv4pew8dqGjqXaw9s2SdiDLgFWi1dqckHxbDS1Az5",
  "key18": "5S4U1Je8ff5WqTVxmVfyR837ktR6pBCnVLqsBzFsyqcwBHz16drzxsv2AuyQ7JB9idZdxquoA1k1CZWyxZ8vSsoG",
  "key19": "2whKmQ8KGiVZZkHvFag87F4e7p5PitscnNUHEGebpDYAqJdBVxLeMfov8ZEA8jLmYeiq1gtrVor6ek6pQexwnszG",
  "key20": "KAwEuYyGJRyJz7qaorH4ucj4qvjF99yiDgXn3AZLit9XvikQ82T3eaQ6HzqjSdYbwpQwNSvTgux2EBhmS4qxaDH",
  "key21": "233uqes2UuJZyRFWUFJiH8PCYhbpgsmB2edBNx1kusLnAcsjNufzoBfLT1qTJuJop33R9tqU3VLXcB2NQoLxaVMm",
  "key22": "2ehhqxPmPR1ynH9Eq9otzEGvGTbmENgUJejDLtoX2SYzXPmFJC7uaW3EoeVATzZHucp4EGzM85JmHFuDjnd1E2Xb",
  "key23": "4QNZSJCfStL6BtTCQmab4TqoXdvPdAy7Fz8sEipKJBBPai1wHpWsw7vy1wbcncoUrMQ5GxLVemuek3w8gzuZTZA9",
  "key24": "22CascjHNfT5NuLrCWNWqQTaxv4PKsFCphQrbBWzh4vbrhsZ227buc7Kz1oXALzNQLG9kSWdwGChx9QcGz6AZVzJ",
  "key25": "3mwF4eZiR9sA8QeZnQKtgzA1Hw7kCMCqaDVSmmadKHCyyS6YvaW9wi3nzHthJHXQpZrGmkpeyENzP5KhMvGQXA6S",
  "key26": "2bsqcattXtCm4NYqWMJdzVS7K1VC4xmRrYvjc1A3Vi9vmhEYkph6AeMuaXd557b3848GzsmtLjqdTavsJ2RRiDzL",
  "key27": "3LeNiGGaQ2f4vJXyFj2jqeCczDEqn3eqz3QMCd6SQpGvmrGbY6rMDHJycKaJr1eqJqU4F7CGxPe3B2PXUuHgSNQQ",
  "key28": "58XRXuNy7TSJqJ7wemCEdv6yarvXK7RrkMNtJapj4P2dpLCm86zpGyCY48XjjFBR4Akc6Dr4WBxHLUqkzb3eRKBE",
  "key29": "2wcRNJbbWQL7v35svx2TwC8AF3PQKDkdUMP4pXQZt3Bag91dDVBQF1WUxoV7iWHihF9eW54uYZZkP1Y6EFSFXuZn",
  "key30": "2Xwg9Tkbd492rY8MGWJSYDHKFxSfcX2kzcHa4AxUpMRF2YWJ38euaRLfp6eeJ7hCM2UMvoxu3nfN8SRHM7LpaJHE",
  "key31": "4MGCa5dBKmHGfA6LHaN7AdmrxZGwV5r1kdknB7E3RcDRp6tmRfANsxKBZjF19kTCs1sLihrAd59USjZsmVKHmWo4",
  "key32": "2M4dxAJdnL6FTMW9AHipdRNMiKqoVHDySJkxZt74jsKUnrh3apRWA55hGitbXeWnycCyKjPgW1HTmPicX5fHSMjf",
  "key33": "FTiLp5LyeVdFER681FBxBsMBuVQx4PZx4J9yb8W7ZW4YwxeswUQuSDUff3b8rMVwrsHXbNiJc7Tiyfo4Kwmm5Nt",
  "key34": "5Tt3ygHUsBggZJzLQ4qJaPrpvs8C9Ke6YGBX8SESBWmZ5WR3fzgjnRnHR6wkEEQmgHQp921PfSYHgx6ezHSLg6Ht",
  "key35": "nd9WBy71Xdh4vMHf3gYVSkJwPVcHXFyyCcEpe5grExWTaLB37njajUE54Cy6Eijvb5xoc8nBP3emeJqSqz5mkji",
  "key36": "9oSd4jhNm3izZEJTQzFjakkhmivbxH5z7GBL2FSSx4eAD7ypdpyYZvNCKFXZuVQM6BcbwnY6pcTdo45CgHQ4wTP",
  "key37": "56sgLPKbHsatWPNmf7cRHXzAxQwhkN1h8PTHKb2j5V6xmd5JbjZnN4JAhxpPErav6x515ywVy9dFw9aBQZk24yfD",
  "key38": "cDXBAjAh5AaPSrKpwsD12WZa3p3pa3azKFrixigDKpzuRfuKQ59RnY2VgiDVyTWf4SQWSgV9jVtgKSBqrnSX6di",
  "key39": "3Dv2ezRtW2JHxYxvxvgq2Rmcba5UcckLpbHTZkH3pChS6Qa8j5TVgYRWVPm4h5Me5zTzBRqtMarrLqebST1ftFy5",
  "key40": "42Skd7hADs6fgLWPqFYW156ndq59YLj1VXUPzCj4w99EB4D7wJSd4eAKY7AJBsxwHCgvf3v4XJUcxUoG32ss4ech",
  "key41": "44QWTAKDZ61KSjfbmWi45gVjpfXjcqPs7QQTUHVuVKv8UDHrvTxPANYd8bpYUg395NVyw2GQhgTM4XfjmpQKUqB5",
  "key42": "xKREr8PjfEy3fDj4HAiCbLjxERJvdAkTyt3TonMHqRRA7bY7fnjr4XhE4pAD3PxrAcwESHJbAeDugLoaParaMdT",
  "key43": "5mhbmH5SL7DbMB5pcvnwqE11ZXYZgc56KR6seT6Z6gAztCPdjfS84VpgjcRyVnzaSHi559EnuUkVcaR9pGDZETE",
  "key44": "XuSK1tnm3cz9RFFxRtvhJTXWxvu1MgbyZE8QoqkPHagRjYiYLEtrpZ18fw4MFUraUNTE9miZLv1JMyui2V1Fcm6",
  "key45": "4VgJ3UCS7GfSRMnXSKBmV8KEEkyzukoiqcZd1iCJ9Q8U8LbJBTjvA7z7zDF1LrQ9aZ4CVosaXqLxsFPZarV1FpEC",
  "key46": "2DkfnTDXYMxPvZi1bssokSFooaM1sNk3uhZ4KshT5BSuurnzP6phC42xinuWaFvXKWRkQJiDC6r24euYHnXEFrWV"
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
