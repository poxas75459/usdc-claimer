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
    "Vt4zxHKRsaqZpbmEr5jQpGC7jCuWkULXizE1bkNL4t4pE9gcb6SNHj2HnnSFiVygfeJPgv2vqCXBmNzLgiRFa6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1NiR3eMxEJeWBPyUKF3oXr8Y11aotcEF7zriscYiLgSrFiiy9NjTvBevXDQgmBX8dm5SVFduELUtVn7sTjJVxQ",
  "key1": "BbvHG6X8Bv9kKTdos2HEtXy36joviqMtnak1MuU4PcbYyPhwnFCLqv2tSsex1icqH74Ldsm27aAQ4F7Qq5w74JT",
  "key2": "2mBVJngFUnPDNzgW3NZotQ5PNL2REXaUUPcxNNaEBXBKDhw1anrd8BQ61RQLJ7VtfV79LHXbCWtC9ZvmTgdErrhE",
  "key3": "58T1cayT4JjBMeectLZzhdRQi8qBi6i7UgxNuMZTAU7yP1YC4AEUp5PmYHi4b3MBHD1jbcmyWmWB2gW9E6bP2sse",
  "key4": "4BxUs2PQKLQzR1htF12bydP8X6gfWfUUVJt8Dxips7bHZ8vvG7iaJSBehKGxexNrgQDpmwEHycNF4wP3K5zietY1",
  "key5": "2uJq3bSLVwDGiyHPnbDUaoGfA5zEG4KvYf4fLuNyUp9q3YWdPwiVm7KanB2tiu9AZLBvVgpU5bY7yk8AoN8M8PC",
  "key6": "2RMBK3185YRNC7unFxUeUXzLoe7Sc3uMhiVzADniDRsoPcGfW4vjoUGgVHK2BazjjeJyWN75Xp3h9LT1wiHruCc4",
  "key7": "3iXzKncU5EHcYtht1ZXBwpryNnLmsLedB7YonLKgVbo1m9hqak9VHBNorWiWNbE3Zgt2B2n4g3vKgNv8TZKdH14Y",
  "key8": "QnRDVoDx3YhxMxhMDQMPbXmhjMv2BnBXa3XAcVCMhpg2HBq18yJsiCDfQgP2B2tmcMuWBzRHN9CrAi86W4Ln639",
  "key9": "SaLf25wn1xbqdFTxdqmDUJb2cPHzPTwh8MErEA8yeaNPyhBC5T5p7WQs6tsJsZWodAA5Jm43Mf6rwQ37Kcdcz6Q",
  "key10": "2bqya6Hj4pPXkRayTcFmZUuaskz7koPcSsWcgbaBmiS6ugrfo8A38YcdrcfWYAxzGX4AG53ukbxP7pMgDxGPVSgi",
  "key11": "wtn5aaF3tjhcknUEyYxF74NbSJjxtQ6oKzZmrjedaxFtaZvVnccp3eN6dD7wyr2vaeaxq6XDNcDo2vomopbWWSJ",
  "key12": "3n3N3mrfEQesXYdwYdozdaSm2V2iJZ2W5S4tJGbCo3Pi9GDhKLfJiVQDhhyDGffF3qe9oGBhLsNseXmyFQqAg74K",
  "key13": "268jnYD1HawfgYPhMdyRQVKMFR4z6sqBdzzkv7iGv1rjZYwds9T9NvYrRsWhyuvpw82ZLrm26E9aFigcvguLM6aZ",
  "key14": "5xoJSkmiArTZtg5qeULz5SnZsrDsZtGZA2udDqrBRVHyzMqMpmSasKAoSBFU36iKjYqTCxTGx8L2Kcerda4A3DmF",
  "key15": "2p7izdx4MDGUNDweaFwEoKMzVu98a4kfs1wX8QJRFGEwBfdK9ByR7NdB7T7Ruqv5aZfvRT6if562xv6RNTzui6Wr",
  "key16": "4M1PfJTPSokafmNYmbViAx4bvK23YWJhmTu6fyF3PFxKVJ2bM34yadctFQSbeCW3ghkixqSqTtW6QhZF5n7Lc5U2",
  "key17": "5q9ZkvBNoFwNswSXFGcTjbBjGjm5pbkBHPQwgcGiPDqvyfGpaEy1D8ZHWZZ7WfX74fc8hRF5Fa72iFG9eDsYUUUg",
  "key18": "28jNgrDH1uWetwbkeTtscheY48sZ1G8UGGBKKGPGcEV7mSKYGfeZnMBULgjTk6CsebGkNT2m1SsS2nk5RYhBPoY1",
  "key19": "4UKfcypK3xZhtrbTEZoEEmQd2doxqhHY5E6Pvwivr3T7MVAdA1rLEA6uSrbm2cCAXm4SHcqGN1F7AtVJ6KdaeRsi",
  "key20": "35x8XKGPGABqTLZofLHcy9kPMRFMcJUVoeSPJwSzuL9MqYD3qyWSKU5yjH8A4u6jKgZUxe3yWgCYqgmZwr4aHhFA",
  "key21": "4hSbYTwrSNKtrFam84GW2V7VT26iNbZY1Z27aG3zj4AfK4mhpLx273zuXuUfQKHoJrhS9b8HZBNC5aC59f9KewRi",
  "key22": "2YWQVpd6X9ZE3tEkHemujUxTW9bGh3HUgzk3zoHi5xntREZmiecVjjN4JaJMvKBCWgeQvkQezohgoTsByBZpSkTj",
  "key23": "4xXRE1T2XJR67CdcPG9KFCcmtQxf1UVyGqNi31kQF4fvKUZK9LkaRrnyRwtmLmhaPSDALtAW3YvQyyrFSonV8Tne",
  "key24": "2bizp9hC893KWkJrMH3v6Bt1PuLkDKD47aLGsQMmayejyHBkS27QipKNKEsBMsUTMmphNKUYFp4LpobwXjAqJHi5"
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
