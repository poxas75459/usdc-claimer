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
    "RcybutGB94GYB3ubYNsni5LhrUxe51MVS2mQYgp5KXo79Zp6pNX6F3M7p5WKhktX3SQ6tMgDPVHuXYMgdqMcckE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvZwX9CrW39pYKLASE36iBmE4s9NamGxiYLCrhWxkbb1GDN21eEdsqJQmXaTaodf8hMVSAdP4DsBAew2p82aQsq",
  "key1": "5Vv9LkeNcFDWuQdp6vMFSTECtaKwn64qot3u2SSmbEAB5gTtLCKvU1CeF2QnXykFqZspE4tasvJujYTjYFJyrtM9",
  "key2": "35BAm4gZ4M8bKsv5FYjwVTkYotuZUNjr6fBYBVAQbW1XtxQE9Koo2YWmNu1VdrkhVv7UkKSRsFUac9C4MrZNYXeH",
  "key3": "6BckBVomBHQ1dHZNCTGFes6Y8nHqX1yNVcGe16zpFVjLTZVq5QUDKW55jU8jkZCSYoRWz1bFCiWHhKZW3ES8mTv",
  "key4": "5TeqY9zTP6GjHDmpouEmQYsygcfPrfyiSdVwDfHXRjYcLtC9JDm3ciZqBa5HYnBdR1U819oS4QFYT9ibipMF7T9S",
  "key5": "45r8nTRLb6oRq4PbrZXWr8ykWLjeANQmAGxqcS5u8RAbrvwxuwAimWfG4VhX5iEjJv6M2UJHRFp5qmeB6V9xyLj2",
  "key6": "4HsPSQVSdE7EGH95UnoQr8PzDNvDcDABd76x26eob6ehULkvEaPUraE38Y57faFjX3ityg2XwRNc3vkCeBy39McS",
  "key7": "48qMPheWN6TnsCwk2M8FNSoUe4CBuX1TxBhMYwnyfHzN8iNHZG1aatRUDcLqsPum4Suf1zWG6gitHn5CiSP43wV4",
  "key8": "2bkK7KZYF2mQ56PgcTckaZesCgcX7Hk2oS96BS4R1zcx9w7rJhNq73aZyLD9KdYP1EHMTskJtXFEbAfsPNinZTXb",
  "key9": "4AdjsSgh7gqwH1oYuRkpQzCEkb5dqGxbTVxb8w2SEaYiAoPLxCPaQ93w1a3usDw35SW9PYPpBT72b8JajGPNuYUG",
  "key10": "K5cexK2JBqDhQF28jgqxS6KTXqmF4YkhCkc5Mn24Cppac4dyNWNCwweGzUKuSMbowb5e1e4MrqJTBuEvR3k49JG",
  "key11": "4xdwHbkvwQ7hVr42Jo1xgtArnF6PYFZthA2dxcxBm337NjVYpHbkM2uMXQa8q4txxHupSSWzJwHKKRrQcHUchDW4",
  "key12": "3A8VaGfw6ETbdF4cg5RMBqBTp2R8ncbyY44HdNpscssCzkozcDMDzPuTLy8LA5FumV2aCK5RMhHqJUvJP4kzaGox",
  "key13": "L2a6kXz3vXQ4e3qNPFm22VXTS41EdHv7E9QL4XXiGJzhUnSDig52N5WB66Chx6YuhPfQCQ6CKPvJC477F2GaPiZ",
  "key14": "ErUMpoNJgTMR3pF8u6FiZFrSCWn4TkRYdD6tdUey8odmXB5qQocnBcmDbFDbcaFMcUugEj8BPfN8dcqhurtFZaW",
  "key15": "35m7DGZy4YFd93h8D9N3aLoUCKfsvRoRivChnV9EGZF2NvyGqFpqi3dZ5pKZFsHfqtBHaPmero9T5RbLZuafUFxL",
  "key16": "3bVZUdz7D9fyXXS9FhdUzexGeiFH4gbg4M5NcANQWqk8Qo3xxqhbruokRopNM7y8mxhFWTE2noXNH3i9QfCN1ciS",
  "key17": "4DyZcwaAEpuFS5h4YcWsSpVFzjwL4xQjruGfwUGJiHz7fznHgWqLtVRFogcSHrz2wTSavdGJzuADotzWEHPEw9wK",
  "key18": "5PFoqGVR5BWVF5c3mtWxXbkeD79zpdfbzC1UesMb6f9MR4ik38KzxpAyTUCd487Lv26UtEypFxmk9n7Zm8evDDfX",
  "key19": "4yxoV7gyCYLoviSvBisLyXsywSmoGsoCsXnBnjjg5Pb2qRhqwnLhrcTXtfRsdFkHAgMx6cJzbBAH3LS5KKYjtGP1",
  "key20": "2tK6Td5wd1YHwRpS11zcVDvjAgUz7WVwsgxTAg2b8pLXdYaMqrtGAri58HJhprRcRwDpagxJEhfpXgCpMCfMoHQT",
  "key21": "4Vw9wAqUvsjaDmVvQVhpndMriwooXZ86EP5LPxdVgmVg4CEwtf25H8bHJkJiyJxBo6xmqzwWd9paQJu8u4nAbP6G",
  "key22": "2MMALkgFss45NcR9bCQiKBofeR9QtJCvCuQ98QVRzFgDv9W24yiAXZbYJDQ6PpTDCzimwrjmqPUbxkbR6DsCM93Z",
  "key23": "4rQHpyLRQTMVJohgE37wj2hj4iFGct3NDt1gkNk2aj4RcgS8WsXnFX6s41748jEeu9fyhwhoAf5hFjV2WNBmxhFE",
  "key24": "5gEJLjtu7xcgPKNc4AudA2NnpCXGMHPL9MoR6ShmbPd3ionGqj2asxLetjZYCqWuoUemjJhrCfk7iBnpuuURMgWG",
  "key25": "LVhn7KswtWgZrjPaSio7DZxaEZ5oA2qWMs1itodQx7wZYVDGcXDNQef87ZQ6M7LDpBZTxFGAXwfp35Kgy2CqCjg",
  "key26": "3CJtLktHkNwLYY2EyoghSE9HmDnLshJqTBP2tzhpdzPPU41bqohQoCnK8RMrndLTSPCFU9MAbh7bd9hDSk7gMjZ3",
  "key27": "2oexAAKZzbbeBR7ZMTxR5dgRPwYGBsQEjEB3Sd3F8t2B2WwvkEp8NBzFRuEMcwFhm5LNZSz6vy8Gg8CKm9dC8oQu",
  "key28": "3pp7gudTA6LtMmLJQ1inFBzptnwSB1Jn1CtiiiVbWZHUDgAJez8LUeBDUSiMFHHnrN8T3KPVjaiL8VMQmT5majmU",
  "key29": "4izqa2fppja5XDn14VW9jrfNFR2WWSuC33RqoZH1rEytxuid5CP5r7C77JRL1zaha2MXbGpe9y97zDYtsRUW5Lqq",
  "key30": "2NwXzvnLbDF9rz8oAJVtTyCfUTKJrkTQ54w21GVm2R2Pn4twuo63detUgrqdycC3jtmEsZjbEQv7NYdqJuTJ5nUi",
  "key31": "5T2GLzL3XC8CZRXQ3QZDBdVJEudiYxMoLitLFfYvGWbeJEx4SDJGHLyExJnuMdcE36MmBaZoszYzyR6EoLHAHaqW",
  "key32": "2bDemvvDcvUBhhJwLzzPVukFDu8oMhMuzEg5xr6CHFFS65wmK69NboSNWgkDLqoXUnRP5Y16CczH9em9gexLqnVN",
  "key33": "5wKx4JqwyoQdK5YCuwwAR7ymV6BK1yCg12oPhw7Fdm2wbWUspMLNqJgNuz8NHwmDyZnuqz4Lgc6Wp7fHgbh51YUJ",
  "key34": "2uJBsUi6AH1sixhmKxJ63EaqVJqwCwphH2oqnveLQhngnwyrdj3s6pdygtVuZazapwAhugFvkuZ3mDdh3KHMbfA7",
  "key35": "2fvYHoRZH4exinqPYzA2uDU1epXTVfVCtbhdzZRjivoznTSjnCnctRaGK4bFvRJFPfRQNvXQ9saVD1TnPP2dxKKU"
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
