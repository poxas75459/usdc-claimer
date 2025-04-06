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
    "5PkXQxN9hY8JKvKmppW7MhbUHsDSvWgFPSEbqekcemmgMU64CqfxQAeVFLJTDmsKJj6wtU8xGZEEQQcKdP5WuVkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T7tZw4tfq3B974G5scELJivQh868RVWZ7Pf7JW6iYfgQsJQyJZfcnw3biD6Y2c7m3RaSF3nv3JwsNrRocgtnDGK",
  "key1": "4SzA6jXf5Lgpd6k8R3t549oDXMfMWBE24Kn8Xxyw2MULE2SkGdvsSz2PmvXR1mnM4HajA1xHDN4bWxXmidQfyxSQ",
  "key2": "5QKEd1EoWABygePXXJ8yVBYNBeBjoKU6HnbVA65rTBiyZiVHkqhcNq4ZasDAjGtGizvov47GBQZFiHDdojSFQyeh",
  "key3": "5HbDatvQvUbGdAVFMPZHYMi7Q7yyHBU9HLUMpMB9K4gpXj2HG3i8ujah9hpSU61n26HAzo3gUW5uSZiVauoM6QHs",
  "key4": "55RQrGiQM2Lvq6iVsSoaxcMtniTmZikMTySPyJxFh56H3CSMw4S8MtNLNwwCzTXGp14rUzyJpKSUW28nEwX91d6i",
  "key5": "4JbdxaFjTpPHsgH1MwcHDtoHYcEbcbgNgJFhtoTrV7dzpFtNhjaiJhMxWRgdxP5aDAuCaVSFYS8BPbfy9yUADSbN",
  "key6": "2H8DRxbapPDDbfXeeSosMX4zihgsmbTSPhnt8Q8G2SDpgxS5YbGm3wvisSYR8xn7wWQeUjQso6p83ogsZvptUK9C",
  "key7": "298GqXC3LMrHfwNXtY5wouxubc5pNMkoDrCM3hxj33hVnzs2aKT7eubq3Ke4SgqGYEgezxxM7hcYmbNVkE36GDCb",
  "key8": "39nKgr4MsGFQVKNDDQx4kU9gA29XR8P1hYiHECkkwiDwwt9MrAbDkGFP9iw7zFTnjyxic1zFjGAG6jY8Z1GWL21Q",
  "key9": "3yv9cccXiPZJjo2TtjJ9Gej1DNSvp8458B7SxdsCko2TUP6HahYL9YtECGGQ1hrVpXAuEk8wzmiaPYUyeQCbVrxo",
  "key10": "hC9pMNjpWytgyeDaQrDBWFmFeumNFLMtCGL7itdH1zh7V4RsRf9FFN1sRhEQ1JGainXc42GoxgogwUXBZ2T22bG",
  "key11": "2w6DGVXhYF5qX7khF6E71rsDUoPTH1nyED1kY3YKagmQ2ksMqhj5mXCn4uBF43P7RMYYvaAbc6gUTyPc7zo4TPHf",
  "key12": "4KnRVteJmizcR4go9Hs94Me8RzZJq7EDpUgXMeLpjJPkta7kfftPrKdSyh6r85L5DozBrFEgjkNZzB5Yrk2tN7pu",
  "key13": "3iPQYLitFTSD8aooUimra1s5LKKYbdscbaFoPiSnAs8eow4eB6aEPVvEX7kPiB28vC9TAF7CigwX9io4TXgqFfrN",
  "key14": "271j5CKEnfgJoHUB7QhLNR5APukh8seGYTsrMaNnv6fLnJP69qkVyQ8EbabAD8VvfGuAH5z1Ug5a54jEEQdNsGCH",
  "key15": "3KPd1HRy6ZPZ5BZV81iP2S3FDRgpfqcjxZuhFrtVVaL2vNzovdu6EttA6yhbwcPy7RAnLouoMQfDUeHY9FoEghTU",
  "key16": "35xbj1dLnDGA6waRGdBye3hgnUGZxD36NNb5bQYQ5At8mj79k8Smw5W3dVvxk8Cj7Y93swSxuhUeQGU6nSnFd41K",
  "key17": "51yTTvqCsk8g5bXpZmcwNPi7oRTJcWVR6LnTKSc13TKj3CaTLLZQPkc871ddbFU9x3caKxhSPqsyUJK7uCgDL2XH",
  "key18": "EvXif8GqGMfkoy7jfc8icaXr9sJ4nHuLtgrwmqDKTK5Tq6ZnioDUwnG6v4rHkx9nk5YxewDcYruNn9sy1zTzPBL",
  "key19": "314KequFtiFHNTWfFPyX7LEPoDbE9HYYKYJDYYbsxapQxgXR9hTUsDUrecdhWC7CkRhYF1h2KnUSUjQ8Gu1A63Vd",
  "key20": "29Qyw8wfYAWwUyeKW4ucGMxCS9nDkeNmnF5PhbThAuRQ39Pa4mXJfMrkkk9nCALvi26L8NtWnsk5ZxyRYfZzW7L3",
  "key21": "23SveHYbirZ8aaSVAhZDfzD4BGWxqfEVoBKV6NWQFcAdbNsDhtfbm19Qv39rhpAL3AhVPDy7Fa6yBTqEt8xNRPXJ",
  "key22": "5Lhqtm5G2Rr2MLxM6k9twkFAvfRTfPcYhoCeQvANYQX6rt9sqiuFr8JwjNr6etBpjgbrTwxx15UpFehAswBxQ4hU",
  "key23": "4AuBqpWrheuF4YS3wX3RpecjZkLKKCCQ9iFrq5NdxmLziURzTvesWjCEpsJcEAxq7rvz61cBW91VHJuTAgbMX99Q",
  "key24": "WhmCgYfmw4wgLDbByqYbF3EBicZj46CEgGD5TtS7MShH9Dk4T2tCQiwKjtp8Q6KKCS7taEdy4ZUHUkpMCFYZuCv",
  "key25": "4ERiYfzn1658NKKP2JAd4nRn77buTPpq4UsP5hjZ3LDBWJ9RKL8qeEhWbRgcnz8RCUHSQjqrKEmji95Lzjb4msQz",
  "key26": "3y7uGXV4PYno81HaWvg8x2TzzKcMzc6vPKuhViygAY39mTfDgYFsWTjxYUAxvXEkTZKKBvTPbSD77LWnmEwXp27V",
  "key27": "2jLvxdBRzDVrrbnzK56TdTRGRnUiMUJ3bMbvbsSH66sybtJ8tWXgWmZtk9RzwSeGoxrncofBq3u3vXjBDrJJZubn",
  "key28": "3XfK53H3CPmTpof3T5gsnuDhSUWGkoKVwvE5GqAxH7ZMAVwAMJXXmzmQZGwvKwUVVtPLRz1DyAeLYx6CX9b99kHt"
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
