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
    "4UtZxiLaAQuzcekxgDLEbeBUzDfVcE1WqvMsCUN3TG484xkKrU26N2vupdj1gA9yNGBMbjHnZYncr94dLw3GSfo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGhvxfsPDNTiX8i5HnndQZ32rX9EwYs6Uo4nojWSj1iaaey1vs5Veq4rERru7guFs2emfBJnurQKuAwaG4jcVRi",
  "key1": "4YcLB5neiKk1Yxb7W58eSpNE1sLQBonKL6bchXEHi9hYwyfzE1r9PEY3J6biswaEG7UkJAATZtmXFXhnjUqSjk3y",
  "key2": "2hcgW4ffPSYAULr5aanm5jGZLBpd9c9Wi3oKQ4kyy5byRQSdZUuhnJLv2DwzjLiNkCj8zd8JUhWPs9jy1SH9CvRh",
  "key3": "4NUCjc3EfHPvsqifJwk7a4utyBetsYbr2WiuDChREy1DqLCk9ZEJzhtUgoz6SjhGLcTWQtVHMPJ761xg2cecQixm",
  "key4": "2WEVBgXrmPXtUWVU4a8kRMB5UuNkUzkUf2x9ErJWBUUFhHQs8rFrh3wLLfHEXTFCy7kkJTtN8nMpB1AdUdATD5c6",
  "key5": "3gu3igMLgtUhjhdaLMDgLxqQ7nxg9WbAL5mfYJys17238LYct27mAyBYV1Q2Xa7hxtHdYv59wqmJdojwRjgJBkGY",
  "key6": "24EDDKJdvaeyzjj2r1hjrA259bCa9X8y2SeSVgUsvFD15JsQF44G64vZUFtH38qwHmpVfP66XLdxf1aezydG7Sfm",
  "key7": "3qNzhfMvebZGdF355xaJ8tuBdDb7dHf3hauGuNdvnJWTvwbigjCysES3NfqEG4SngXqRsRMPWsDtaoeoQ7y9W65Q",
  "key8": "2u3Nr6QHLR2GRgtzU6BwbZqC4n34GNa6mSfFL9QhmWTNpLpewyLPk6mQ2tDEqEoKn7zCk7bqvEDwmbPLGvgCNAHA",
  "key9": "3jjFVGzmRCyZfw4zntCFNZbqEscHyyBb9Mwb4i4dcXAfxNSEAtSsGi4WQNNrL14VmbPyT4mUM7G54Dcj9QG6w9pW",
  "key10": "2K1f6LwJ4E4WiBDxysNEfLws4e1AfSNcLk1dCQwkfzVjRBoGuaneKcNfVyCt1hgst6o3xayMambaMx2HMx5VZCEf",
  "key11": "4j4GdvBY1ejDG1bqMGwiVGwRYF4ETyLX9HeeYAU5pF5ccrNS49P9QFaQjGpoWELGf8XHqyUU9Vid6yKf4LypSr1q",
  "key12": "36CoDi5RpzzEQZKAQawYdp5hbbWDaB6xbGAtX8keaT3HL5LYsBxAaTk5Es5f8U3nAtFKCUrvHRYrBDxT4AKnihbQ",
  "key13": "zztVaDuUsEAi5FLrbJ8axMpb4Enw3hYzEEwL3ysuLA7bDpkj1foXoQ3nFTyjNgbsa82kRNtXFMKyM44ZAKR9FFC",
  "key14": "3Qy4N5o97VeYXQaaqTGNJCgLvP12aqj6mt5Ub5RSCXKKJmNutty1faT5Wy687o8e7z78LPzeQqFdC4KjyaHEFPkv",
  "key15": "4MTxGVmzbxjuZP92sgGbnVnzMLTQAXyhmwYXAgNJZhLARM5ZSAovDiwsxeU7VzYxTi5tvs1tVnM3WU1wY8LAaq3U",
  "key16": "5VzTRvfB7RbeAHCuJp62EmGUoE1yxNrXGZgUMPKXsBz9iVr6soErjAmDJUiNkqrB1AA5ikWC19BsmDvCmZWRBNX1",
  "key17": "C9saMxCm7eiZLsVxpYFdD65bZnbwBR7nTXh71mzj7jSJow5p5xDS6nLKjWAjqd3XVsFmMkmb5PdqXKspbqpgh1q",
  "key18": "4sXKsGFwBEZXeBV1iS6LqtFsuw4RifbYXshd5GDypk2UxBsGN1sdbg2QU3zgRVmCzRTxBF6LBhRuwiWZj3HG1Xyp",
  "key19": "25Xzu179XiKhxkNXVLoCr2arCM9QKU2xEAYgU2rEKkmAWiWk7AhsJQp4mFh7CAMkgTsSNwWXSm36bDqA8ocZiBap",
  "key20": "4HJmntPTtg286heAUxAeNagPetJgNTeWPMAmCViLKoE7eLwZToJhvAxTmGLbP3SRfi7tQfx12RGhwbVnq8pwSNdo",
  "key21": "54ygPq8VTGq7CXFfBbXfd6KPCTPJTEhGeRUncg6hF5EfK7mWYyCcHEcLi39HeE7gMZHFopGpHb4yKoVAtj16mga",
  "key22": "5Cnn1rrJ6yUgSnCVTWLf1xQfPvC4dxFF2QYSA7JhbUvHKtoUh7C5vPcMiY4TTvxLFRhEnHQvDnk85NugRHb7E3bR",
  "key23": "4G2Qqukf9sP2As4hhqdMtU4Bx3h3oibGJDjeU9qF6USXDg5zjCUFQbAFytvajsNKYMyDwJwHjYmvocu1Ry9L1ytm",
  "key24": "4J9VQTicHZw6WjZznDRZrg41d1GserkmAGL7SwdxgoEXjt2KmSwTTnKMmrFUW8QYqU5N6teEBqcBBXdvASj1sHwd",
  "key25": "43ygHNo1NFYpyizGPTiXHAVer8FFLYcDikLV62Yc9w8SCcyad7Mnyhpp5P4F9buoPrCjNwmsULKJRy6k5eozCKC9",
  "key26": "GANyDSreC6WKqRbuD5psCxrcmFFGRJdY5s3g637t2XvcGG7vCoutkw9JgKaUZeGtEbuynRhxBAPHrS4c3n58BJJ",
  "key27": "5ancgw3huNsorWjXeA9ky1GgDp2JCocV3TYuZPRrM26vdwiXLK282ScPFzkxYADDUE4i9WWttCZGWgE6Ab4VMWRR",
  "key28": "39HN7faRM5HD6hFhohhS37GHgJEpAeBCg4wi1JZd2UY8NeASr57ySAw5LF3fG3DuDNhc4sPd6TCYzFvWWrfUBRcn",
  "key29": "5HRHmC6KgzBVNhwiWiem57nGqasq88GzJMpnwmo5spQfGRvno6q1wV8krUks79GJ99dywEodULt8GF2zXFGSC7D3",
  "key30": "2cFFhj7iYB36QhjiRHBWtb99Eky8tKHze7m2Y8XyKUkkZf7N7QyvHbgwrLq8jn4TdjKi5aG58XwuXarBjF16jWBM",
  "key31": "RUAaLURB3nHB1xPPQzsGoGh5cu5MwSxFPMgvPAQyK1dXrCarmiKvPs36vwSLvapamnU7GnGX5iEAy7wjGYsJAnX",
  "key32": "5dCGfwjGT6YCSaL6PQWc11reMVjpHhppgcjL9ijQm3RnKCdUUSQ9DbVFs7j9JSdypBb11iojGbQVpYLAcTsQCbot",
  "key33": "NWxNQRcr593yzGWJJrm5ZA69HUAampmsbP7qbUCi5DvLdamU1ocBaBQH8MLLz4rS4pVQwPsTFJrjxmWtSpmXyjg",
  "key34": "epSiXWRVJRFbieVjXeo6PTDGBeF3Rju39rJ7zX8jMVKCr2NEdkUpuq7TDxMxf8nrmRPXPMwqqXXuRzrRaEH9NJj",
  "key35": "4ZU7Lfp8SGTEB4fo71RhAh7trYW51spkjPSHkJWq5doKvqVuJVowuSEVWZCksAnkxXBx49PBTTzYSv6nAvpUANzj",
  "key36": "XhrkXsQxLaBEhvePvhsxpqsjEG3Gd2mrwM5L6Y4oAU3Jj5TsddnXXv6JEwyioW8wdFAZykdaEa5QhLBvUEKYqbz",
  "key37": "68hhxxEPUvHn3HqN3c3NYxfVU9DQrSLSWV3xpsdCTbkHkp8Egaf13mNwG7Mw6wngdwUHLL5gmEzs1B8nuKdBynT",
  "key38": "4i94fn1DnyCF46P9ZQyPvAAX1rLHHXuzhP9jWtvTDfm1Rf4Kd8tzWqveLpW2GNQQd8QL2QJz1GZvQNAcXGrd97zP"
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
