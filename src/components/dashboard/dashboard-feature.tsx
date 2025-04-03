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
    "3XYE2sDAkanmuTkqGDyjk1X96SKZF7XvocAf8ADREtU4iVnYFBc7sXMpKaUyvjaxeQSJLWfBBhhB46auPMGzbm6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BYwhgHzrueVN9i6rDafNMrFgQMc771ZF8MsffaSFE954MJqivaBM4KNnEpgHwMxRgvYgjiemQyaFox3bYGNtrL",
  "key1": "5eJ62JGFshMhM1Ur9467xsvkkW7VWXkThi8b2ew5NUWJT4PtdKX9yMiv16is6a4LyEBE81xztLrMkLt1CrjTbxg3",
  "key2": "4v4cwn3cFXe6UBwZPJ61Z6jp9NxKVrrv6YfuRe127jMeyivJhTB4Qh9Em7VGJ5UJeR8ELkTLwLuK6CZjgfixSvZ",
  "key3": "DoCkfAhyvZgp4eKgsPZBXdGLxPoSNqJwduzJpD89jo6LfBpiBLtBT5ag5oUXcijqb8P9PfAmd6n7sothQEv8wNq",
  "key4": "5jy5qcjo9dvQ6QUFonJT7cKVQ2s4JbAPShSpLtQHv2A1bTCLN1nJwyRDUyzExtGdTpDv7hnXRYphPN4jcevEfgof",
  "key5": "3B6iGhgoENHHApu537eX1fEZ9nLuJaUTwnaG16P7YY97VnnHaRZfbFb2XxWHNYW3GUpkG17FjweMUESTBAtC4SXG",
  "key6": "7bTyyiV6F5vQbed7r8JhWbi5wkDf4RJnh9Qv9GikURKw3kpocRSF7rdJDB7yvp8tSuq24y8XYaCq4EDhMEq5WVV",
  "key7": "4VdCiJ2E6v6jFjXyYtwejVkVqcwJxowDM6tZPbimEbM579cj343UuZQE6pbk1TFcLY6oiXXcjkVCFPftU7ZEgnA2",
  "key8": "2sKo84D9TcDYJDCVW8jBaqPqQYszWFwFhC6kmeAvE3FKSThxPUMPvu6wWoWGFu9eJcYude9jo1aCBMX3cgTpApvr",
  "key9": "3mpUfxmi1nQdKuZdqaq3vREcv7HdUfQL1sikQnt41xfvQy5wiAkYyDSh2B3a77UGmQXXVoDYxrshwnNKjPzQPwSz",
  "key10": "PgJzdiKix5YNstYUDXaDWuu4yb6xdNcfETKmUHXtnkAkkqGZvKtZALnXszFAk7hnD9m3oAyJefvbGFQyPeKQhPJ",
  "key11": "5F3de3zoyV4StvmdTRJjQMgiURxfM6UGBZTLX9gHkJuTfBw56VcnraegPgZ2dM4RQrCkj9Eedw4A5QPxFPy3SZBS",
  "key12": "3z5EbvyxPT3b7hLRGDSuiLoRbUzGkhPY7z4cY7AckvGumo3aBY1T1cfibvuk7oJ56y27LYAfPYYocKGCuBPbTrNW",
  "key13": "5ZvyBJAoMMvwHsZGsNGVUJZZF8gDPMzJSw5VkMn9xdiMGvcRHNStds3HG9fK4fkpcS6k8eLToR4VK6ey8jSarBjz",
  "key14": "2ySHJPd4H9aY2F7fvJjmrkXA5puep1GRSquCHuBMfWmrRc3gNe5R3KzgEGpb45t575rUKB9vL6aNdwPVmd2mrBSx",
  "key15": "2hS9xWYeAa3zuizQ2driwNvsbNx5q7e7TM3NFtfBRqd4Axj23a6JUmcqWRG3381KrAGhAAovwAYWiHDHRXc6yhLw",
  "key16": "cnGQiRakRUa5S7zVZ6V7pU3GCyuoNXf8MqPB8APkjL4Jg8MiNCvXHtM1BhSrTiQ8aErKCAHZn1592owW8qqCi6A",
  "key17": "5MjgbBo74SFrnqULigBQXbHCHdHSqBX7iU1ixHzysFR5BpN6UKwMYwq3nMC7Rv5Lh6Emt43NSEHmGJm9b7hAqqPj",
  "key18": "2iHbjWvvGQ95qNewp1AXcwXz6WoMDGStevr1zfmAWqfWnjfb1FVnSeG4i9EDx1Km6hoShDMgR8GGx5sUmhCDQmHP",
  "key19": "tmMb56ZC336uwLkdQRq6se9tR1FHJQ32nePAB2cu36L96xazx5pUTkPThquDCokT69BFcVHPqLzDRuGRMHwGfK9",
  "key20": "52SzinG3Dw8Hd92g4RPGttXEtPRf1y43dWb61AFPjudpbWUunSBY7eNJsQ639dqE1covSfmuYEFJXQD6SztNnHgQ",
  "key21": "5RrmzW8dCNTnk31Vt6tQDLu6XvnL9KUnPBDGfrHd3G7aNbZrj79w4CLdQzw8TuoZ8gDbvRKAixRqK6Ah8v5oCC6k",
  "key22": "5jWH4RCY5543BmMVYxj16yPfJRTVEgEMXG8FMfPFvZVLSzUfCRoMfjfi4Fg1gW9pL77924UuJm262qMntBPGT3YK",
  "key23": "4mPrmAnZxZxX5mNsFM3o739PjhxhndQdfpnTm6mq6uGeffuB3ZPnUjAXMgjwrZkgDg8RMxN43FdjFMe5p4BeJsAu",
  "key24": "4P9Gm56r6Th6kpabffwbDct5cjkyDw9Hpnng7FpEkRSNgz8YtBNw9oEW2qFBBPfHZbp7wjvBc9EMb5D1Qr2QTMHg",
  "key25": "5SFSoMonmgCG45qkEf9f4qjJPEXYV8YPBzE4BsMxvxs64NPDXELDXebESDqsKYZw7qLWMvbVv5D8GgU1NLWCxbzu",
  "key26": "2AjEcwsdKnu1FcC7hb9G7YwiyrpBxspcJ4rKiM3cKht1mBTThE2wR9m5Nv84N51JQgKTF84jEkbUrmoKND9Vswde",
  "key27": "zBCSfEZeiCHvkeNN6V4xLVhLpyTvzTRnVoUph9kdsa9M5ohBWqFFd9pMVhQzSG3nnbbV6FT5Je4TpcmYcCKhvt5",
  "key28": "sxXvYxzR35Ncq3hSykoSj96GzEV4ik2zbsgQHY62spV2sqMZghZvY6LNVLjaHHfDmHp2VTup1TP3YhYmVniFDn4",
  "key29": "SdKkuykMTFHWjc4S6U8ZUpfecEWoJnNR4ThsQ4apYShbysH9CUuyswAwD6WZEsMWQShi3gtf9zKRUrSMK9hvAhP",
  "key30": "sfcPJpu5CRMxURWrvehCoM4jYW9JEPnRD8GYadCQkgUGomKPCnZcbA5Wh7j68osofSQcBL6c8Exj4G1EwyqDHR3",
  "key31": "9fRMnqrvxL8wupdtUtEGR4YQ37qkiii228LS6ARTvnSPdmEb8W4Ghb42FwNscE1Gkxzg32oj6UeijMZAfjJTQt7",
  "key32": "NPhCZv4Fckz9QzPvwt8SbAg3yMmXK4oYnKSLdZoLaURNaPBZfdWa6hXgXy1vyFQRtsq7rbs5URk1MDtaHZFN2Y8",
  "key33": "BvVdhQjRLHgK2YptdTdxQodbXMKQCeBp65dBxTiWmn9Kk3H58qdQuQQCHZVJsYTWEpk3WfWsQ8b2wUm4QAU34RC",
  "key34": "29tot4wndtXq4nRhYXBzEif8GGfE1pRt9fBVNM6khQRq38W7RXQeUfTPUF92294xmfrZDHgscN6bGYff8pWXEpAu",
  "key35": "rHEc13rbVhYpUR8Cq2Ms34h5GgYAg9ZPVCtbahQf1Mpw1C7mPauC3raY6pKq75JjqF8BgjKqoeSXErhZc9zD7q2"
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
