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
    "2kehpp4CUVHR1YS2oGubcSWSx1vrck5xq4c8kUi4zZdUD5ZE4b2ed3oAdxWLj41nGdj8Uyc3dkutk9CWE9ZssmYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qztFcyfxbT36idz2cuLZqBQ6Jw2csSRJsFSkCv9r24rtCuP2NFZieLDtjY2A4GajaEc4agCuMzxwiM1s2mgBqXE",
  "key1": "5dxsBrZ2y89jcrzdcwvWQucycYC6R5pcwSpiMGShn5PpMindmiwt9zhQ88RYMuN8AbT72X5Gjd3ar419Bm1nU7s1",
  "key2": "4ju9i5Hh3A32E6zFVPP6swx9o54Ytn1BKMny8Do3XHuyzKZxb78tQHdq9YEaBa8F7R4kevvkJLUWgtEFinTrnwJQ",
  "key3": "AhmJbmXK7acrqtxHZhiFVLk5Hd7FscQ65uURxiqBU16gnUFPQWZ7xu6FUpvDppXz3rePfjFwjrU2cSjMJuxqvZ4",
  "key4": "5D5PRtpTZFk3SmwbvaG7YQ3i1ZwHuHng759qUgZbaXPJ69da2HM7EZoAxFQ62E8acWqu117XXvGGE16YLxYNG5bU",
  "key5": "SWNUk18kExX4xowxjmg69wDa18LytWmVuh8FHJNVbYCDFXe7aQ25SGpDHrnsfmKE4S4p8S8ZCEaYGQB8aW4CPkA",
  "key6": "5nfgWy5dXv6t49ruPfxLaUD62x3EHr2NJJHMgjRmQ4Z9fpaUGazVf2YVX37PWu2zHcy3eb4EcMFhL577LgXW9Mdo",
  "key7": "54kdygZbzLdb5VRv2HAZnLTATnZkF1tEbSb3jVVEG4W8xaXPRoVNAXzgMgPZJQs7BqKmZw3EsWdg4SqYHrA2cNVZ",
  "key8": "5tSNn5AqUE4np1q6Nizksz6Jt439otpZgiHvVFZy83yb4EV8y87hPoGcW9FAxxUfezbDzRDoUPnueZJnwLBgyMy7",
  "key9": "5XRzZioR7q3JEf3GvH8Wt3LScjmvun6YcEyuA7V94e7QV357A5gzxbsu8e6inHzc3seX7JQc6VUKecMYUNMdC4Sf",
  "key10": "25U1uuQPUDHsp96sxaFoJx9qyWqdEBTNhhQ5f9n25e92hS1SjLozTGLszjkHn774eBZDFjLTsaPSCFX6n2vBcC8i",
  "key11": "42ttGcvmmifJL1y5yYDvhcooQmzd6PcF6NTcDWAkTQgpryTc9jMvzzBcPuUeUgxZWwHTyFREwMQaFwnuygHSRG4u",
  "key12": "5gbFHhoUGcXTTSFGVSYPB6nBPo4rsCXNK8FCXiEuYAWcizX6NJijW35UYUbwuaTNUTpJyrGzyw8k2XoUUp87QjnM",
  "key13": "3XVDhGW3mx6iJ8RcWmsemWTF1Vyj48ZfQpN8eubK4rPvX7QzfXtDyBhBLwkFGcmZQDbTviSqiPcWFGuMo73WHzDs",
  "key14": "5NzV7yJpvpw4MvotBTbqG15wfswRhyc8nCnnGPCnVM8bMZ9KEpmbCpBFpgaN63v4ukCJodgXc5A2kXFe8hz7khFM",
  "key15": "4mYrFwhpeQbhT7cHtD58wcZ2Q6fRGwCPrjA9YmWmTZAyw7VZp6gAZMgJbKqS7cjT7ytXLqDgATayfGX6nXJyQ7mo",
  "key16": "5ciiLXqYrrRqPqFdBhqWH7nwKVy41rQCfFy29LNEYQsfe7tFmV3QEid56U5akLRe1o8ujbAxevA8oeN6drFG5HZ1",
  "key17": "ymm3hCJAjrLgA1qEUX45KrbRTkPAxCjaRpqidWWKAypABiSE8PP7uqxGBX2Je52R1kDHYQKpp8JBqv4BDi9rZiX",
  "key18": "LtXwirNmvhMHacv1Wx91Bed57wtzVCFD4zX2TdsS2W2NbBggzVZztvE8wYbwA2yarm4aYXCKpJuUYTwN17mYo3g",
  "key19": "5XFFwKg8Az9vaMyw9frFerPWYH8ZMmXSzbj5NNjSrJ65ekuLHoY9kSfr2h8LwJYjSRFicyWnpb4CnYj5fEitFwkY",
  "key20": "5ks75oX3Ekv2tSyf4DTxDJ5VFucjZG6bSKaEFsKUAnS1HQtguwZ1MKJXYMFnnUbsV6eLXoti69zfQJpGZZ8zjChD",
  "key21": "3eNj9TKjz5BhEs5u8mNTncNcdkF6qWyxTSMEpmg8RDgh3evieFfARW77H7b5Jun2D54mdKvbSg7XMZgN3dv9yuFq",
  "key22": "5ckXgnRsJEVT4YSNMucD42hLzrVZisyepKuQAsKZZpN5FfcJrp6JYyUvYh64VFqaDC7bwomdkPk3PRGMgoGjk21F",
  "key23": "t9FXeJz5TPVywM4cwAoYQjirJJcjABHoaZrnQ8AT2gqSQYwcKQnfXfao87jzJQ62JrA8HDEKCXvWHnTBNBMaR4k",
  "key24": "iw54zQTW3hxmAx1Mk44gJPttpCaLvQzq7w6rAuBLiepXF6djCq3JoimzHn4HDrdFDNtPdzEQGJYvcTxJRWjd87m",
  "key25": "2tJnKHMxGZoTZpisK1oBmirvm1ZnSEYA2igov51bKhtvGihG7pXW4uY1TxQ59xTKzGFPtgELuonZ27qrgroQUMVx",
  "key26": "45iCscNMfNqrLsk4u5y2tCTYXPrrrYJ6v5YMp2XEkVELzonixLGSsoQT8iPSxonTBMbQSPi52mNPaCrT2erMs8fz",
  "key27": "5W8rbCX8j7tsZCEUtBDa4DWwbB9PbPon8orgC5wvkx4uqHKC31ZNeHKi68X7rJLNa1Wi3ZikKb7vZy2WrnDeJbg8",
  "key28": "3neZdkyyfqP46ev4fwwaaHg5uSSE2tAmzNFEbb4U3RVrnhNwLr8QF5cQZhVJiNURHqy58c5XUY63oCcgHGMnbBjj",
  "key29": "Z8S8WW5AUZzPLDDJqrgPJkbyMyfASCoLvC2NReCSRnEVRbSj3w9tJL8uqUgyVbYfoi98m95tRRiG3iiYm8D9j9j",
  "key30": "615Qwvdx5HhLfLvUrp3vusSGgJREFCcniVEy2mzTTe9bRYHZ4oCCgZP8yAgwGT1ESa9JCGVumwhysk76Kcz53XEo",
  "key31": "45XGAgWt5FQuBeq5WqhKaafc5yShnMYDTdLEZvEQdWqZAemDFALNeQ7F5PnnBbJgS8pYt6JQL3vvouKNJS1wJYXE"
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
