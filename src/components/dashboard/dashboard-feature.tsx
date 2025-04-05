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
    "4Ti9F3pTRTC3V9x7jzdn5x3YmYK3eDLdF3wKXWsR8QGyYyabV1S88W68evAcSKi5Mod7t7x2bN5ZU498R21VsMvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMJEyMvSZtFRt2DEuKTRJTabxCmCc4ZXvUkKFBqzkcF3ELRzPbhX1fpajGC2WUdn5Z63Ei9f82C2JkzbMBU9EDh",
  "key1": "62B8bcHxRwVm6Qr4v7PFe5cavCxKEd5qW2D3czRYWDaLx9qGowBcXm7ecyWeNre89RfNqfZCf6v8nENraGSezskB",
  "key2": "5SizmMSwSBXcPM2VoED9DrSPvLNqLRi49e1E1agHabayCVajUDfLwNhBJpyrFeDR17wyYM5bf28NMg9c38RTkMjD",
  "key3": "5ra1naMoo1uWE2WKBo72GNxHGGGtbTbdMy2AnebWEN5cHNQHeAyAaULkiGG2xqXLEUvRwi78EE8EcYpiaVhUU9an",
  "key4": "382JWzwqfuaR1vYVvF5MCMgvYcMWvSp59RetssCtAWpBgH5ztV2VmDVcPupxqpJf7nTPxKmcQUBX133RUQ4MBPVC",
  "key5": "ekPs3vnTRD2v5PT8xz9h6iscTVP9hU1hVtFRtNGkdG2DxvgA7UFQhD2aMZYJP4c3NDuTmp9D8BwnipLjEXJcuvd",
  "key6": "55ZR1fCTjJuWPjmboFCmQpiNRZjHPdYtKYmKagaTY72eJkUMt1fRdd7t57Jd1ryMACKNrKgox2Py6xgc82juP6cM",
  "key7": "hMBQJAKrr822XzgEDcrmzUWMdDMwnJTG3RdrQvBH3kyuifudLVbK1YGNVUu4TNpDjoh3cW9zwH12MpGYEGkaZeF",
  "key8": "41fEd6KVEiHeL5Sp6BApDabsaNaXYb7pf9sW4qkEpP17ehGCUdbr75VGmC6QMktK6kJMHtP9nJUibJvyj1QVZ2PQ",
  "key9": "4CmyGPhpJ2N1Qqqs2QZsoHax1TcDkuSYhUiMPhJmryBW2QNDCuVDPTALYm78GSoi79Dhj4xbK6rSaC2U3nPqtHb6",
  "key10": "5fWXi7nDsvuNTzqh9Fm25gw4sW671GXLffYGhaS4YpJe8iJ21Bb9vqXwtCwt4NND6QdodDyBz6WVFtSqQyQk4byL",
  "key11": "3RoG2pq9r7oiEmeVT1r8wnTh9bb6PSiko9JK7gxY5rjRzZVsY4K4QFzwjyimojifNih65oXZsynNcLHf6afXt5GA",
  "key12": "3U2PS3TeUiMrzH38iWAqUU1SfjkggzTSU3QirRdcwfuxm4PgSmGXEXkcn7NXR5EkHz7JavYYxLH1o4p2oGEXCpmL",
  "key13": "4a9odMhUUqwQ79M9dcNhCjEQLvrp7RpyaEdVdFmu5xtLgrhqC9es8czVT6c17eH2s6rSeUAT2LngEATwXDHYKEfA",
  "key14": "4XVAFoAtSv4Gmm9Q9SxoGqk7J3uGehMswzKFp7HTLoKTnQzd1yhp5YJBNnmp7ABY8SZq1C1Su2ehqfn9iLUAi4Bq",
  "key15": "3if12VpjBe6zJ7DN3qtaucqNmqoEA4uTYSUA6GuB2wDNz4eKQFfkhaC5BP4HMPCQeMVDLUbuVojDXSdm1Enum2ws",
  "key16": "4Bq91LnRpmVWrG88Cx9GC7CY53TzH9VgDyiNZrSy4o3Fgyjcmo9mUD4UaA5w6bvCQjBYsTJ5HweENKgSYTpkersR",
  "key17": "1fXQEKTV5onJgqHjZzNUUjTSgrmcq645i2K63iDxQEaRvcDp63kMBvHGjLS7yPPiz1dXkwH5xccbbqHD2nwhNjF",
  "key18": "2kBa5rS8o1cRpHtkyBoEF4wKTi2mCsm4KhiBeWoDZWTAzSGrgwoCuEXSguwjSAksTukVVCsLfQ9oy7oTeNHa9u6q",
  "key19": "2LRVEJ2dwcSJfrgrnHfUGbAEo1oRYvXBN54HMCgy3JEKRa9hdHakxfyvpxenRftYTpsb4JDJyDqGAmnDVSD1wYck",
  "key20": "5yteEoJgDetdmKDZd8XxtJVvnp4SbBgH53TSUN79HvEjvdGFxPFiVam3Fu7WmYwPiQgDvJEwxuCpm8uyH9KLoPvF",
  "key21": "2aM4XXMiXsoDwTfHi61fXLHAgSJf3H43WwPEbsjwnhw9BMjYHz9riKyh3QT5d4cvXg5GevzXK1Djm6a6ru3JWWYH",
  "key22": "3wdEUn3UbyCXQnZohZk3Hcr9TA8WwcgPx86RBSNuQAuH4RQEExpwgKJicdu6beAmv6M2Vzdx877gDBNdQSTM2bpC",
  "key23": "3ptZdTz2fabbjgu8kRnGLWpgERQQDx3BDp13HomnbGxxu9F2ukkxUoE2ZkJa3tdqaKyZEaweZgUhEryQ5gCmNRDr",
  "key24": "29Enhk55DTHJ9PisY9eTjphzCJcYf4j1acsHmBnXEbgYRJ4erLPvj9nZ7Qwomu9PcW5yBq9gzW7krGVaQSaMMvEr",
  "key25": "5p2V38RB2W1MR36HLfoXmaqzbAAouw5HkznFLf3jj3fhcuzpJfqM4v6J7o8bMJGahREyJKs1yjTC9deoENSmxtxi",
  "key26": "5s75xxmZTH3ekDXLTjqAdRT78FMcsxrrZucTvWg7WGdid2195EB74vr7YTzZyVnhtdy4HfwyT6RjqaK4nowg4Bpy",
  "key27": "3Rev9ABa3YrXhjrMV7oV7u9bSDd4t221qhq3FxbFzyyt1X6TaSD7Zk7KgLECFPZp43pKLbN6t2niABo3KTZBUMer",
  "key28": "FQHFi4JKEDtUqneXm5fgy1GhfcUmiPSR9doN9iVTcTyqzTx2h9UofufAx3hd36PTuxjkTqkuX6TpvZ8FZoVhQre",
  "key29": "4TyKs91iSkCFi9Jd27RXSzdDawMDVyBka1arwwpMvBRDePPr85gqskUiFRkmSgpdsiW2JTQyNpXT4xsRaFrNN8NR"
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
