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
    "5qJNi1Esz4CGdmt9S9nf3MFz637U6h9JTdqZsox3z6ariJFA5ZM7J3ovNFPWVEb17V7wU8cEKGjrHLoLg4CKc5zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYwxXbyP9KeuCpV9Xzxg9aoZ4ih16ZwbRCGLt9WvAKuoBiBvXxY75kftQWpmY1ZMrM6rfYNZFxLoirYSLDTensv",
  "key1": "VRLS7uY9dnj6JupBDnRDPRNJGFmLZM4rcvNTbDa83u5knKv7BCQLiVtkFYbbxQwxBpdVLBeaF762xNavF4Zqc1e",
  "key2": "3mmoPErGAtcKG11oXVCanzFmVHusM2Yk33BiYf8wEKDqGMqFqK5cJskftvsirvBzvBkF7m5wXxgdSQ7YYXzkUYRi",
  "key3": "5f2bWEQFGF9otHyb1Zg2dym6gvwPESrAYr4tw8KFWCEn8qt8QH7EpwH2ViMKMTwamYTq8aXw4apQtKhDGG1nDpTy",
  "key4": "3gYa1NDmYWvKePj8k3TMc39CNgYSMQH5esxBSFzqFDNNgnPmpQUD4SAKU8sqxTJAhaA3ZKim7ApSup4DtPQmpFUE",
  "key5": "4J3J6K4mFwTMG1jhmnxrZ3zeFc2QNt9gEfXFyUbAoGJFZJF7d6nex4jkan96Zx6FEeANjMpVvaoQ7TLt4iu3dbTw",
  "key6": "22VdwR8psP7kpsxC17Vpjx2AZQvJXfRgMSSTT3MA5fVcTNDce7LaZ8D9Cv6v5Zq72ZpdnwhUmsVQxFU5ut3oCzoR",
  "key7": "2iRCo9zuoZh1YGEDBu7n5v8gwEQnWm9N9889c2J76sspENNrs4AjBGcYp6a6twe7BoMybTQJhGort5NtSSbAAKY6",
  "key8": "3TEVXWBX6ex1f4BbSCyJZXSmhfkMYx7XU7odPT2ckYy4sQFobQHT8ayuXKrsVBzcyq789vaojG5MV1UWGH7A368g",
  "key9": "3WE78JABUY4xjrqieGnfosrLnN4d4XXrcbCrrYHB7z7P9PBkWHmCMcfnzKeZceGSvYBt2gPc6k1ZqPrucmxL5Gpd",
  "key10": "3FTURTVNzpcM3gFoaDpemmaVg7XwGUCrBshtHKZEYK86mtqepKG5MG9y2Cjfi4QgRorNJKcck9L4jufF4UWFJ62a",
  "key11": "2NPtjhMFSigHsiSdcfY8DNdH8CbW1EiEnBS14qekKysjmNRnLwrqypAqWPFvqtQjNwKvzfBXToNr1BhctxT1BNrD",
  "key12": "5ckCFQKg9Xf9r6CUFWMKTGRgiiBgoZdfaq8HvQTgf2UcA3MRSzQ7kiwDum67FSrALCDaL8xiBHXSDFg1ex21psEg",
  "key13": "dgQPStC6N1pfrZPEmtGAK7rSMZGjpykjCEqoDepXooZ9FPLk9zPwxZGGDpGXy96s3k5k31hQYCXKW8yhuYcJSNF",
  "key14": "5AGDxv9YiPyfwRfa1b4ZsEu9SqgjVxLpGQ7MiFAxzPXwDAJvRvNmrQYt59THvU2smidaXLwGyxbdThvkg81G4S6N",
  "key15": "3B2L1SpN3o4M1uLWHuYcqUWBDRgH7K3Kf4YxYoz2V6dD94DuVVxhurRwAADVzV14DbgWZkdMJduZx6T5WS9BE2ct",
  "key16": "4XvvqV34X46Zvk4mSbP9M1a8Tfok69hJ2cXCTst3G8RaEbntd5DUSCRqsS3c8szV3zC2dHYKVU4aU8zJ7xRLEJiX",
  "key17": "3ybt6o2QB9f3NyEWASaryK3UumRRD26VfPRBYenSZL9buUAiWBbno9Fj9q826Uzp3hC1v3UJMqRCckiGaRLHEpxt",
  "key18": "2P9ryCzdsRdtoEWi2LEzrS44yUFjJdWP8Ffdg2XMYyAfAzoENwrq3G1MqGQmURxJY8vnxR6RpqxRULiUQS6Y82pd",
  "key19": "1eL6t7gq87uNTWoqEx4QwjgkHJfQReHySordMDjt6YhNi8VFQGbWgqovbxSsZYZHhDfoKpFJhLChm5iiYmtSYK7",
  "key20": "4U3V3nEWJtrCWgVjTTUHZub3vmbEWoT9nKj865odE6wmDWfKTMoxGHMvFnmcXR66x7fXxTLNeh5NdWTERPyVfSpy",
  "key21": "46MmVZ2pDoGEtgLtnVubVTgWufKsCypBhyvyRSGaUBzMkZNDJo3xFrbKY1UDohu1g8uUTMHhnHN7KRocJ7AFgt1o",
  "key22": "54QcEdPFM7q2BwcjtaBT96hFkTRkkVkvqATEre5sdWwkGmCfJUwFaZZaKPrSnHsBjJ6HqAZECYekGGnBHJujnev2",
  "key23": "3xRp1kDGuqnYtVPsuAx6XXhSVjp8sVcFWwVsApAsE6i7ECSJockDbutUwRGGVqZv2MrrXaoaNCDA6qnJmoB3Czqv",
  "key24": "4t2tDB6bhuAhGd7JCMxzjGujASKMTSv4b5P721urjcshw769Qh1u2DtfwKPykPmneJnAtyt4TEAVXhQaKuJFoz13",
  "key25": "3JXNpyJ3nKCmUN327sPnxA5Dd9vMDp84o6eidQqJ3KfxQJUFY8CZNTEjXoCKzc2xg6tNv9Wmc1fXmL1HiAoy11Na",
  "key26": "GWoaTDAeM4s5ALeuRaL1EA9yzYLgZ9hjotAhqqs3v1qrgAtyQvVhjRR4NoBKpqn9aQoRzpnkoHfHsqNHnnUDAP5",
  "key27": "57ChCVe1kZmJdMwuBMWHRRMHtgSEtYmiCunhVFuayrNQm6utQEa1vAR5SmhVnpuTvd9AFx73CGS51QkGwSHqqFA",
  "key28": "2griDkmLYA9V1DfbE6fpjbtBXFfvhRUHvrVZRGUSNwZicsQYMvycPPYPfQ8NKpGwtRVbgzfSv33o5wNHqGoPzgRW",
  "key29": "KeNKQMFumibfo1b5bf8hAiEE1fLqjVkCgqBtC4Mp36ZsmEBVpxYTEq21A664BAcRXEPGCcEcKMR9XFbojJjSAx8",
  "key30": "3fY3gmBJGByG2BPaXCTrWRRmZJbRKr45g7wtRkXF8M1vBrvnG9Xrsa2LdDFxN6DijBvGEV3Gdp1rGj7r6kkuQcfa",
  "key31": "4xZ7CYvBv4DEGZyF4DE5kKPPXZucEtBPyNsra29dnL7eXopqW7VbLTbUG7W4x93fk3T8QbPw9t97okT18bmR7qHB",
  "key32": "64nsZW2Ao8gWebZsKHz5vTSoPfoEh6gpaZann9tbSgm9PNpw2hxreMm1ifExZ35239CVimKNhiAkbXwTbEFHq6Z5",
  "key33": "4wwDndMNRfN4aMm7kNJkjYRbGdz8j11v64tDfn5B16dbWizxq2EfynydAZUEoTdapunNTbPS1Y2YEZCxdVDbWssk"
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
