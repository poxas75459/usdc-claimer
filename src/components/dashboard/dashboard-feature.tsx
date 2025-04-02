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
    "cW7DxSpajjyx5FczEPWSJUe1Tf4rSYTjtwz8Yvyi9Wk5FML61bXkemgY3Hhwwjz11eQLHRDvqdY75f7i64kGDhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbKzo5bw1Usf1Acsu3SsvMMmxEQJt5Hba58zaGiVw3ZReaWCS5SsLtTSGtnvi8Lk1MXJ9XBrFW1gbA8PfHAyqqR",
  "key1": "2fBrxpFS1YzVoedpiX3f1NGDuBJ3v8sSkAUwdn22E5rHoXj3RPnFjRtzPz24r1ZqUFe6NawiPHgGio2xxbxchPo4",
  "key2": "2UBrxfkUQERckfpNkESBp1GdWKYD3cfxrFcpWH5xS5qy4kZfpHbTWEfGKjb29kwL3mwC7b6T7rg5MMqHb4SH78CN",
  "key3": "oTGZeNEGizYfxPW181qdMnRCZ5Q7heVCunZf5z5Tb4hxBPtBwkeZFgpgiKWMxxn38vp2ijj1hHF5nG8yH9gNcmZ",
  "key4": "4n5aqnUshHPQ2uS1GcsxTT8FqoQas295s4jsMaZYxMVVH8ixZgVruFosoXeFTYfqSmfpfSPuyi2dPCP3X9NAMk8Q",
  "key5": "2xG97eCivKYqfAGEvtj8dbtAJwWrj65FeKeGtGEtkF2BMv6NEnUhwkJpL1WHg4XH7VCyALtRmB5Knq7eN5YEQtib",
  "key6": "46sTi7Sax1J6JFjJExcPvGp4up8id4EgYXFjDAQNZjBoLhx6TykL7sjGbZ9fHE8hv5SkuR3iBXKhyGoszkCpwc12",
  "key7": "5AUbpGHDUdfozPt3sDDEBMjPqF1oEVBXoJ7Ns2WrNtbBuCEsNDJZSSeDXr3MBPfYHWubD4f7FgVgrMwNCVzT4ng3",
  "key8": "GGsyDdpfVzwRmDKG3i8wx9rhp9BJG1LH55c2f4uZkdAFhUPbRnimwBn6bJDx3yrdMNySxDgB8L6R9LBwdW4guTQ",
  "key9": "2fnia2FUVKXWjVpqEHDZw2pXEYTfvUstGLB6Rzyh2R7CDQ59J9hvrqGB1dgas4EFA3PLZSoqAJKn8G4M88Mra2d8",
  "key10": "4bRiG1GeLsvz5a79wptrhQnDpwR55Gi7rdzunVxhJn1sfFDoKsw9JYkyuDWiqDJBeWvUUqd6Y2DqAXxMv95uZCJk",
  "key11": "2k1hCtMk6dnW1niJyk5PxZxZfr9KSvBsNnaPqozbUDzTwKmizLyXnZpCag11HUHvkYCBKPt91R2sNcWC2VWjHaVp",
  "key12": "3kU6Tvj7fWg33pPkQuMpLFzdn27BTMV9TFAcDYa3HqwevmiZWGJKgpK5CnhnyYDk599cSRPCMPqy135SJJZLvqW",
  "key13": "5A1ML48EYupiPfA8NUGodump9yFEwUx7aPXmnHSGNd4PuUWZVdLPe1M6vGK2EFb6Ykm6uyPpPxXYjQ3P7zdoomq5",
  "key14": "2WZHkm8vMXRARaxVGqsHkYvZkwWzefYmd5gRUAMZM9G2DakrEcSmtE1f4Ce57hadXQkzR16zSPGj7tt4kjaftY5G",
  "key15": "1UbVjMnSNkdsxDp5bZgfBs79sEbpvDdjoh4ELJW4H47wL8trSBxbd2CU7LH9ARKmwFCzNKfxqde2a1Gi2DQkNw3",
  "key16": "q2NJYaZkCxyQJcaPCsGoaTDw5r1nLxxBWcrqMsrPFkcnQUnT6zYe3MX8qBg3JnJYoSaNTZ8KKQm4wzg3AczHNau",
  "key17": "2SB9nqgzvdmYCvdU16YdPRdBZLoMfCYTB1HwCezRCBTS4pesMDNjUtzGezZMUW7snrmcv3qTFeEvrDNPybDMeSzZ",
  "key18": "YeKLSEP3qkFV7iUt9Hd1SvGvSDJ1D6vSX6wuWCGfTcZ3bo6p7tWFrVgaC7qznmbWFom2kEB8ZzW78r6Bh2mpV73",
  "key19": "31bg4iqBRY1woRuMkRWW9EErWs9q6r42HudFxBCBD8TgyX22XV3p1ZTPBt9auD22xDDkdjMvPrLvqKFG7c7RMtm4",
  "key20": "4Uvp8NHFLfsr3Z5CCNgquYoeCRepzHQdMQ1Q9rsk8H4qRLuPmTH6XUTBiS9d22SfDDsvT1tfqu7chfYkQjmsUy8U",
  "key21": "4WxkMRc9E4bEpKzYvqNx9zLCdKS2jKmREqdpoQcEYzwKUSwUqkpLFN2ePiqoXXWWpK8hxs5epUQ1DRNpHWfGwEsS",
  "key22": "Cn6oD9w9EUACKb262cDQXXq8f9mNwEyhKjGA6YMbRSuGXU3Uv5WyoEv4eZFWzFEXJhYGxRTQF3ntndfc1GuQLtW",
  "key23": "4rt3uYoJWPY8RN7gSDg9Nv42KmvQTiKCjDK3gDe7KobkDekaF6NhEDK5HR5ELbw3vv1b6ZAXWpodsCB6WyCc75x2",
  "key24": "5TzaSDerWzNbFtCDawKNneMB3UP9s3hSskmYtDRJ1dyGv1h6nYHCSVj3GSKdEHdUQTKVBrFE27S7WGYWadEw52Aa",
  "key25": "5vrS1ZSijMjVSUmcPoBNAGWHa7J96gXBGbQBV6BYjynQRwfQuSjhgkwW8BfHG4jzk9hJeJP5dngTduu6r3FJSN8a",
  "key26": "52TdeWtNTSTjepiPB1ccn4HYnrjBirrajH4ZUfJjBLJuh1n6YekhVmNjDpsUicaRxpseEj5dUSxM81q8ompM6xwy",
  "key27": "yyXUKFtR7u1RMzb3HPNYYtszPTKYGu5kM5rgWZwEYDaQ57zCkhRmVpWP3JnDNfER7fZRN9oydvgJpF6x4PLi82p",
  "key28": "5a5HZ5VSVBocr2rvJ6GznRxSb8UXsWxaVPwZKX1SqLoL68sh6FUVHBB5S1aYgX8oJMnt5q4eg1b1St8yaa4W82yN",
  "key29": "2LWks66yebJjk64W99CZRCv4d8VHmCfWK6bt7qcWLp2G3SH51u5xdHjNqm51TQudJMXkxK3LuvDQzja4yDFNZNE9",
  "key30": "459W21TPvh6fEn1HvfG2gHRb7B9XS6WQ9sH5nsD2Apu1uM5S272239XRcZs5J9y8C5w2JB1KkaT5awKouLevHzwU",
  "key31": "3wXxGwJ5Z3uWtijmHpQu3oHvqtbVL1cSXRXGRqRGNnFbMQigc88kaayaHFbAbsgRH6TVqK9XNH7kCy4JQs3rz2Qz",
  "key32": "41LJRRgPRZoCAu8NNwjwhJTWBuqPSaKBcEcfPxdViayc97UJ6T4pnRiFR9h3QwEmfYD5ZkwAojUgfZ4uZGsKc4Qj"
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
