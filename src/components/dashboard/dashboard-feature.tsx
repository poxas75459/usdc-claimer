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
    "2xRa47MwNxDy14yuAv4upG5xEhanSzej1LaRNXf69Lng4JbNHp4QuyPBqDHgaXqqnK7WXWN37MTEr6emJ12AYLzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VD9JbKsSLQ3dqofq9eETVPFmJsUcnyeJocBcVcmzN8AKt9uaxG1KzmVZ6LEGujckVnwJi4Sh3zZEBatDBK7SRpe",
  "key1": "2wpyfo8Jgp6MN9kdZHgXv5MSWt4zJHmPU4pEA68P9xFk2Rjc6gYfVEwpAgkYYQhh4iEfSf8dssvaqq5NzzLyE2GC",
  "key2": "4KrTjypkmXBGhUgMiobYjVN1rML83ra93bZ2pQNHkYwNiiRCrRrQW2dJPgpZkLzH2q86EMNsortk9R73iqioCXQD",
  "key3": "4VFFu8cvLF1y62deLdsAYabZAn7e9jhvvKcYnnYhmWkd46LFmz3jbfVhcUbsQNtsynz8wUaM8CG4CmtAaBPt9x9b",
  "key4": "3a2pro3yDpJdfSpM5z5GCwK1bmVE6DgvtvrxypsETSoagDVLNufdSh7W4REsarQSVLDMQCeHwaNmWtoupQhetGQh",
  "key5": "2nVJbWtZRD1DX3d2jjaNk2zRcLwkGDjFt8LBt3bqkTN8qzDCa5CYTwf3Vv7WXFJpqsVHpYPujbLU9C8sSQtqWtSR",
  "key6": "hDfXFXDp4ushooPmMki2KpKYPQFma5MKz9yebSUSxZ7UVfHzr2mMPrD8a5qefkfJtrNi6RMUcTs2xKUEeKUTh3C",
  "key7": "3dLjAydrimpeeoFnbtXKWXeMBuqrJNrJjh8vXQWxNByQgWrSTogpwSpfk9D8Bdwm5QPzZ2YVHbRoYspjwcAkwgxg",
  "key8": "5GVN1bMMsvsFSg5oeN8J1pFmKTni3nW3MmcPh3nScA4LVhGmPae7Xg4myecwvKXDuHugKtf2eGwnL9rPRiE7ayVL",
  "key9": "4o72zJpwZFtZUUz2X5Q1kJhYT1w4RqNRjEmorDBkxSv7gzA78yHbYvejFUAqRvDcMaURW9Q6KFeit7MoBix27nqg",
  "key10": "5opaD7udytyCUCr24mgvs1P37mBaB3BAAq37nBV2FDp8PBZMfHYXmMHGkowCaxpD59iBQm8JD3JmLDYRRFeJ8PXu",
  "key11": "zj8xWVcZXp7aLMTejDh6UdVrXvLfohenfWqBdWHY2n4TPH1ZUruFa5wMnzQ1xFarcbJ4oQUTNUhW9fMJe4MEAjR",
  "key12": "8dmgi4ZoUJTGzGmYoK7rreT25UNyfeN1qX6M6M2BcSu67ggyvYwNLnD2SV6ARKWicYpsvUP3HaNCyzn3698q43h",
  "key13": "2SUWq8SX17t6n7V56Fk8JQ3MkCbdpHPkQANhWhBdQxVwdAJUKKTampa9rtu1cKQeRc7efqzQg16vhXWC3aU7xLBw",
  "key14": "4yBFovsABYPfMnuv3BdYXrxMbjtWQaBuqZYesLGLuQ1JoSGHrrc3N4tz84KD2rBzpogrsEjvzEs2W4i8fQCN3QR9",
  "key15": "5pEjzpPBC3Z353esmBCDZmyT8iPkGs9uyu7Qy3jNjJ4eXkwQnDZTaxysgjRkampKFcdaZ9wSq8uNhFsP7U2ubG4d",
  "key16": "oo4Gk1dSc8LRtu8LyypgfH78bfEzYnFCAJQq7eixJmYyVwjLYhyN9TfjCdvB9byLAWn6HybFBZX3KAhH1VQXNRK",
  "key17": "24Tkgpj2RK4aqMquFydS3RDDH9ANuY1s4ZLTKcTpBNkoMVG4eZRp4Y3Lc28w816nvWKTDRiMAaohevTapz1HDfTN",
  "key18": "2FasHAreWpP1WhCNYrxtbVKvMS1m6ZUCgjViVqkCEYvgFf9cyFdso1fSgjYf3UqkuEMd7UDHtYCiRXpBYwgjccDs",
  "key19": "iRQLHjZMAcbki2pxwUHuAoETRBiyhhfADwtexuinW2NvTSg9xTnk26UzMwec875uDxhXQarYwryGaZAWBHZWL6F",
  "key20": "4WwrkqRypsLWkkdasifUBUMzteJJ7EVw5FTSo9vea5QjHctao3Et59os4pdiN3zA9RqQfJETMphHMxqMyTfLgtjp",
  "key21": "4KTHpnDtP9yB8X3f98oTG9SWfECsJ1tXvAwmsWvXACwD1ihqPdPKzdGfP3UT4xjWoZDGurjsBAzxuYo1PynuqCfH",
  "key22": "4q76EFGXYXz6DW7pjYVBh2tPNZfZZFVGEDmv2C9nPKaoJpMTBXo9yDPxeg2emVSWKfKfVhq3E9svTXP9ztQMQKWn",
  "key23": "22Du4Cae7eoJhtgfwBXimMHLNApK2TKhy2RBFBgkTpbwkmgW2YWT25wCc8QPBCEF3BpTcFto5qnG488kADPHG3si",
  "key24": "5wBgDoqerxZ1JzDS6rT9xEecq3cYHvDtcNL5u1PoC7CcQTSa3z2M1AQ3QEYVJFncz6VJvZA3VvpmTgr7kT7ivGCF",
  "key25": "3zu1TTZt8he4iktHVFqaj49JiLQYE63DC1XwnRiW86KgU1rBonSyjC7XPpXFHi42VpKGE67KomZsRBRTX9zwyZ82",
  "key26": "577NzEvsfJG7xJ82mttcXEwovDrBnbEKpUUwq4Ld3xcaX1DNrgXAQDjnbiWn1D6RReVsyVsSny9J1kmShHMwo8U3",
  "key27": "5JoWsFBe7XSFM7vrizzQv45zi5nwbcLDPJim9K7dy3TB7Tt5RAc8XR1PxcxVnG8gX7WE4RkQEuVLCiEnbeHbjqQd",
  "key28": "41E2MefujDLGXgCmZT2a3NHzxRk6yCFpaURwD7HBXwWj42fTbxVpuv4k3MTLjrTGtUeMGPhnppP5wmXvfsqq2aoj",
  "key29": "3cbyAG1zEchJVGepNceD4HNRbF8S5rkDp3Y8yHZsJCchD9cJtW7HfzTsj8w7h8KQitSfzocRxfduXzpcvJHGPw5j",
  "key30": "2S2ykwopvr2F4kXsd6CGvh4r7sFqXKG2WdyDecKrQ8ZeoBSCCn5p5iRXAEbhzko4aeiWSdwyHNZwJzaefrEUEbyX",
  "key31": "WWmVqJPeBAaiMZcQzX2Sfk3Do8Q3KvxUJ1FzdQUc71wx1GJkE5Etac7XQcCqkKSgexBsm8MrzjaViQFBuMwwBzv",
  "key32": "2zRcJmqTGy4FxeJ4SgpaCyjNNMsNUWe692YL4rVbkbi16bJbFWfFCGmhReJUMDMFou6z5UoaNhGB8NDjB4yaNm57",
  "key33": "5YVJBF5NirwfFMg5NW99PgNLt8SkjLDvLKMpD4N4HWSPKToto6wVCcn8sWGuQXTYrkQJxiLTBuV1cw8aWfxCKjeg",
  "key34": "4hNSsueHMBhvTwjmfKMbjLhgTuLjtcj9XbsMKdojd5ohxSUHu2qzo6SoTb1S1vw6ifvZRivgXvLQmAWcrefL9Crk"
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
