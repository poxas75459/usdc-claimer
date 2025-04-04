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
    "5AHjXBCXvhm8az5XUKnx441BRYQLHU4kyEJrMdKGSAscwBSpCi3DCzA59VC4cDNd5JChPN9JGxBv5oZ5K8owq9ZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yeq5o6ZrwSLWt4bfrUnPktWqobqCTyZXaQGAu6YX5JomeazNZRmTyXhUibQC8EqCiEeNwRVuX8ZEnRMAfrxQ5fM",
  "key1": "2dCnVCvrLhZSQgsq6V4B1MCKDDpHbTQfchupZD5QNz1DvnDfVwGFK2XiPZ2AaA8gKteXnocmDnyLirADP1Hd3sq2",
  "key2": "x7YbeCfJ4iaPX3PLq9e9uUK2TUeTiSo2EWCRSm3vwkQmanNVKrEWhzxTkQbnC8BzTBKXTiHFyvnZ89rsn73g6jw",
  "key3": "4nzEtVeaeYoyAKTkgWSXuMBrT2n8YKUSFNBHiBifcEw1ugRvaKW5xPR4biopuSX1g8X749KbMJ6naMDvb95usfLr",
  "key4": "4Hn2cPKSjitHGudr3gm362QuEKC86pTcpJtpt6ks48cjZBDUBGEt78mfLcYomqcsh7DiXzNWW9FAEnGM2U3bjoW6",
  "key5": "3Li33vZa9E7o4UYeqheS4rVAXLL9sGJ9xevK4TGByimWBX913yiRmCRztpxwjJptsoVk1251ZXPo21LHEWoVB4dj",
  "key6": "54jg6H5zRYxxf2TzMFTq3PF1DQfrcsB16hfJbe9ryAjYo2LHPnYLHgVqRPuErC8woYoF7dAbPPkN9HuaU2oPDoh2",
  "key7": "3Zbx3k7wnPxw2wREU9ux7pyJLwEowfV7wPKLT76ng2GqAgFaPZxL4cTknWsV3LFmtZcPtkL4ENkQZdp8WZkgBmUi",
  "key8": "4uxxZPKBsfncH3xRM7jRj79f3pvpnGiKwkNZg6zFkPXLJ6To27R3Yqg69b7BoQe7ftj2yuFdWbUqnH46g3mF9deh",
  "key9": "ADPJCWAKA4v2pU5UzG4Uv9BZsHJ6mQCuAaS7BdLdSGca5dP3otkqPYqzZfBYqXRAVpgCv3dpzr7cdbBUuihfBRy",
  "key10": "YMXDg1ttcffeasDRXCKgMgQuDPpywNfy3GfUYxzkEzJnF3vq64QueqSyi6D3dq3yBhZXW1Bm2WcQ1jpC47TTspv",
  "key11": "4rdDMFrgKMVARpXGqrkshr9rsMV1tAbodSvdNKUV4JGS7CCzUXeWTAotagDTmvwbRG6ZZ1UXpDQdJK1yq7fkhAP7",
  "key12": "2EeY2aT7TeEAPAu6rjoav1wFxQwo9Q8P6WkQ4yu3biuDJ96xiv6RRJKKWKHbFb3GydFzXUv9iCM6nyRs4jukR6rX",
  "key13": "3PTHSvwY2R42pssHDjRWghKpHbtnUTWswLFTLcKLfvJAjqxDHtqstgHx62RbHYNocvuiNsDv5msrRoZcsR5L5dtm",
  "key14": "qDY3HBuzsb2SQj4bmWLbepEc8ziCFpjCwWMgeoBrdi6BZM4q1A3nDWL2Hnu5fHpbrMi1mo9otzVWTbEZTXFr3GU",
  "key15": "5HVCqkBK7P4RMXmZRxkCt7GacbWoBFTdmskAUqmm267u9RpgTPRpJm53vSKn1cXbRsLYSjtZj1GcrAeHvwSbpV81",
  "key16": "TK8hEvY77MZUFV6mAUBYxdWjFEH54aVRMUe6RiN9Gxb9aC5FZ5bSb7GbQyjWrXzsmBhJ4fmuhdsuFmsVWiJfC5c",
  "key17": "2ReRwdmxTrdt7hRtWbi17QJDhwiFATmuYvMgamFgsRHJmWto1uoybyJzfH9dBAXkxXacs8i941j9VRbCRqgovzBi",
  "key18": "5DPuHPxqtZq6kuKvGRkbTR2CMPN2SQPD4AdPgZp3BKjTLKK5aYYvREDjZsP1ZZgKsMU9FXbm3u4BK7cjeHarDy6K",
  "key19": "xCk54q6dPnw3YnXF3dc6Lgk3LZbAsF8Zfd3igXWdukBp7VeKGuFwAeStnAt9bk4yfw8Nt7Zy3QWHNP3DkAMxPfw",
  "key20": "4dnHmTPzGMwPdSof8X1KWoAyxFbrhKkSJzRwvGm76q7ka3uaxncuSMG2zBFageS6Y9CXtGDNXQtoRREWWfA4P9UX",
  "key21": "3CvAj69KZf8cTuxFvcg5uz7ebGu1gotEyCzEQeK82f1aEcPnyHDvE11yAgNDBE4q7PhZh9i2Ro3spnGaauu9WCMX",
  "key22": "5yUFojYUnfSWjs4Gs2EVPs34aCBiK8vQ9Wt989xxmkkkiBrrHd9vnnSBvt2xxh1PJHa8S1QPym9obNCi486iKU1C",
  "key23": "GhtnoV1KFtRSF4STRSCH3NVqtq9vrTSjWGTBvzjB5wsfHkBdH12fiNCumKvSR6CFERaDow4iqNyLMzQASrmz3pv",
  "key24": "3RLS547PGmn5rDnmxbSG5ctGtRPAhyTkCMfDV1XXDeoVcSnt78LToTjXFJvQ5MDBWgizZAebptwWvw5w7gmrJJX9",
  "key25": "3FJQ6gm7f1dF9FRGopNikyYFSycQq8kGbTca2P1AzkWefmE16naVAoPvZLWoHDfief12CJpNwVU8aKAQjh96oPxW",
  "key26": "4XXJpdC2xFEXPD7bFcxsqE9BungDNqVdsYsY4gjUscakS3UqVStpoau8z7R5V332bEfqxtNeua83jBnjCdwLFP1B",
  "key27": "3iKYWhsFRGBEjH7JzX4VDqC336ytt2TnjZjVo2ZWQxfYtPyk14ahvk2YYwqi6Vye291Y7ykHzfs1RU9S4tuQD1R"
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
