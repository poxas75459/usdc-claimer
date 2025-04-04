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
    "3ZCKAqcxyh7R9PoqDcKGNNwyhFVtQwzDfTtCvxJnL7Ah1E7Hzo98FV3uMuiEdG7NBJhaEpmcRYcnKUiyKFBuCvjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hps9NqZj1rahtgqLYFmFgWinn7mR5pY1wzozxXwj9aZpTPNsLno7kVT8h3SpHC6t6eFuoa63YKWA7FusWg1uRhX",
  "key1": "ebPBoCkign24W1hwyoPawckxgqRTPLrupBgdE3vdakLoUALs6kCCTxJmNZZn7NXKsGRevuUYQxFWXQSUV4WHCZA",
  "key2": "anifGHHEXWUCEhnqEVeivtK8mN71YJctKfiCHuCRtELRh2QcGoWvBvK9PKFbVfLNFtaPkTrhy1JWSzN5F9jSfAC",
  "key3": "39uTcLjEUAwoL7BbuVsLniAZgkJyTS5Bk3MCXxEk5ZRnv7grMwCMCB7vm5VwmXnFYS7e4XuiiozzP5nDEEQQi7kq",
  "key4": "4MqLSRgYw1zSBgJeEC1rGEgDKnZd1s51uKcybYVMXQRVmNuLJmxe6qk3QR6z5tJsXxHZdeXyTyP9kWWXzBAwEtpF",
  "key5": "4wncCQvnq2d7yXzAgPUjzVg95FKqDJ9q89mPdH61EWeFWLEB9BsiXgEHtSMUdoAvMGw2PWK9XxFSVYRpdgMU6Yi8",
  "key6": "63mhGjveeVFFhN3QVgW8DKnz5nt55QqUnExFF9ov4HCbCdDFnQj567348pzpnt37s6PkxzT9L5Ebs4N1D7Q9173t",
  "key7": "2xMetdhuBjvUBWA3tWw2kCeRWPtFA9q6gZzPMhzMq4aPzFGY491HLjpPXAySpzYVmF5NzmzWovNZqbDET68DyxAW",
  "key8": "B39GyDsnaMWZ54W7P5NfnCQHrxxrPzxs81ankfwfyxdRPmJz7dXUvtmBch5ySMpzQd6gZfHcRAq2nhtYCu9g8Cf",
  "key9": "2KF8ud8ByTZkBh1zXivTWEtMU3YAqLTpRouFRjGkyMSfCQhPmnd4i2vZmwR1Ex3L6xb1eNLReRqeZJBCaGxs6oqZ",
  "key10": "5jEJDVNRg9vt15LbzfWUBRX96CwdDChbSLNhrLbcbsPCQG87Mx76oWRE4Sif5PraEDKmMWjdQNWwyFecKEncTvGe",
  "key11": "4QiLHsWGSexeyoYNvY5DCvAd2XedW5aA8oSHVNjReMjCKutMWVoxhAjBgxtHx6XWHBQy8URLX3u1yu62n6DfA4HX",
  "key12": "49WjuRsa3XrUvoca969AzSjfmndAzz728eMiUgxmVBkKUQbfAZKLkgXdFBnuMeBcwnfVX1AXB6vXxKBd5W5TNGsT",
  "key13": "3MoJs29JaBejVGDCB3ZDcd1UAMXKBnChqEXGZtSjPkAF7Gig1mwd8Te3oCMV6J5cU8kSEeygdauaXLPEViCPZmZh",
  "key14": "5Ueqfg9MyvwqKnppYQgLPpjMhaxGWpZKzBtTUSagRe1fSziiYWihZB6tsB71XqjaY1vaampQRrZA8xtJNUyDQCF5",
  "key15": "3LN2rwr9HSYft9vvjnvSMEF4mrEEZm98C3WmfYuw8V5YyMuo4va4GjjrjrdeaiwHejQkk9uAt8UTFPtuHhhKMg7",
  "key16": "37AVUsgSGoQh1GQytoMdqB3egvaStzUTQ4xSqnwhoW6Lav5m7S4dXsCBmRGDku6WaigU9ojgXmV3wpcMrV39tS39",
  "key17": "3yPQLpvSJhUcWaHrRmYJ7BP6jVf95nVKFUJ8PAWynjTff2qHgve3nZhUVbcy9JSRbhfc2pheZkrrs9gjm6hoeV7E",
  "key18": "2v4uXCLdutqYsReSyyUNVSMmoqKRGUn9U2mLhuPxkSfPFNY59DE4hLTJaUqnm17b9sk3SFQAvRQrFV79myVc4niv",
  "key19": "5FE7QFKtkmminMCyRqvuX33cTFwxjeyiX8v65YuuoiyLQuxZiYPCYnJxs6kR9Uuj2tX8KHf8jYehoke6baRycRss",
  "key20": "MqMTiQzxZjMvFicBShUESFh3hCoYv3USyEgSbhJTcgARWggP9gzxH5qrvdynjxevTfn1UQVQwLJstij7bHRgG2W",
  "key21": "5PJ7raFAGRiHCnTTnTjvCqnec9imeK1CWKokFVGmbUAZcTQmwjBAyqV3wbMca7bRj4KvH6UPBYtH3GNLadnVJRtn",
  "key22": "5ktAuWpyPrTdyjfYy6Jbyvv4uJLvhAGABnu9asvciQTjCSuRqNYaph1zKd7AEKVkqVCVr3tWuWaYxTRSu1fFYydY",
  "key23": "4XRRXuMNbHiwz7NR5VoFLNwvBVcqdu8ri4e2giakchTz247qZE6xAiUGPGfSaH3NeoxpkXz4Sb5jv3ArZaKZKve4",
  "key24": "4wfeALtj6SSJvxbo6XhygnWQUDD36ujF8YMtzQKasi2tZjFomgw4TfNtLw9Y4b73wwKfouuZgzPwoSdASMfg6X5s",
  "key25": "3dhu41nHj2WrjYxDcSSJwQjykqabDAFXSB7kp4Zt5hrYDGVAQhB47jt4HdtFesPdMCUkpZYGLFhPJE1mGRCi3prd",
  "key26": "4aJd4hfoezi5LMDu5BgK3fcsVnVQ7D1nTyEVgpEYEGSWMXDQY6H7wdvtw2FQ3CSLVi4A3szCAjBcH7z32co2WvnN",
  "key27": "wvHLNcMVKXD7mqgkYriDbUQKU3AM1Gy6UUsLTHieSD3taz8WXx2nS9XVfnGNVY926CNcPZjJTzbVuzzKWjF2CnG",
  "key28": "36v7KMLMDsCzGi88w7W6exBXfDJNpYYcMQgpUt5XKaWQvFCgVDNf91teavbMGfzrw3gsWW4QvmsSXRJdLT8JstQQ",
  "key29": "2X4HELQahYmuwvWjJAxFRWaKMRFgya2a34yTTdUJtdyxdW1w6qJka9krHtCLiGGNpws4xLzvFDAYAonMZgkniPgv"
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
