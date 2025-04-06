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
    "3DKodVoEHKPgNgX4dbiZyGFa6Ra6GNfHxsCF6GUvdtzfAKQyH1xUfvYEqP1LzEA9xr66UXRCmmpzq3pvpKo79g79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5m1WxKGnjAauKY3WC8GLT5eerRGsWFLEoE4r9Bb4Uw8ntyoGwp2d17jsDLxUBmwy9zT7MAxiigUr8HbYCyXDaP",
  "key1": "5qnrfBocGqUNGe81XrG4FcCJWNRq338okgBEXyH67mNKcSvpPJASFTmRi8iTjc29XH5qUz8SrF3RcH2FoDASnTwY",
  "key2": "39cc1BLiEW7fqQZqzz2LZMUmkGw9GryodevV8ryKGVLo2mvdSTgg5XL1Dkw4NgK6ptNUmAGzYreUKbyJcUEzAWCE",
  "key3": "42BqTuAjLFUVD7hWE5hWbCrownM8Wg7vAuB6avmBfiCYWRW1y39JgChBb25vSzwbym9ZnKXW3deEfc5bfdgun8LN",
  "key4": "5wjbs6v9geUqZ8ogvTf7XB5rQachVndCKcekNdKLadBMez5iM7iqVMZrh1Xkpd3KrP4cRLqyioz5HXzTP87i5ocx",
  "key5": "5SzXWzFsGpiSd3L3P8ji9yLD1XPNS1yJjRjwBx5RWGZD1Uymb4obbWRudbzqp5wXaedtjBEFEZ8qNKXdc6LYKj1F",
  "key6": "2mvz2PtmNGB8HP2SKRnsq3PgU7LBMKFLLRssPE5pDwKpaJiagvi4Cpcuhp4rSubnFPD6c3oExMJgAg99ep8WWqnR",
  "key7": "Sj2BBbVmi59JomDAfYtXBd6qWTbebBHDAWNvAkXVgLrG8Q5tBh69bRkYs93mRLNPQqRvCYj9SrwFdz7yP4gWLwz",
  "key8": "2b9F2UDrY3YeGifm14yF2YZBC5A9DqWyS2M5mPkMvdjcZPTRGcEGvm4rVt7wfpeQoUsT2s5tJfUQXxoh95seZUC2",
  "key9": "3qqB5aCjKHEcPioJAQN3zHPASU6SzT3xmbdaMbc8GTcDjiY6nY9cvL2DaZRitKyvUn8tZJkX4KtkQvmUeBb7edNQ",
  "key10": "5Gnv6HNea74dGJxbkQmwfTcuA3bZtQVRn8ASLiJ4q7KdwHyxXtADspadmfNiC4oF7S6Lt2BHhqJmq4CCgJUyP9Hf",
  "key11": "55d2rb6xwHznNgSG7NaVp2Ho7Fnvq8LUAPwbYP5Gv92ybQnhUJWqkn6ZBRYkSh5c7z9RREnvGBgbi4BnweJV8EzW",
  "key12": "vZv7z7M85aK7bkLTR7e6J9p7Y85qrm9ATkb5jijBu83BLRzYgtaHZdSQALfBsGCcxzqt6BHAUvG5vqdKF19QdnD",
  "key13": "2TnZWTa2f7TVME9zoiCW4Cfe78tNp4jEU33NTsN4AktmBkpFuZ9oPLAfKtiWQJP8NbNpVmBKf9DyzdKRFkZG6K2H",
  "key14": "yu6d3co2kq2hpCNaFPUhEyZWLDNvPrDCGQ2WgL9ZNtdfGArCNpfgAnwv5Q9JeWDA118KFdJUmmZSPw4iA9eDJAw",
  "key15": "3qCESQfSf7k18VW7NfyhrUNAE2sCTuKRsjnWiVNkJqnHxpCvkWKC3RZcgAH76aPxQLV2CSgfzNgwoJSstNUFYTay",
  "key16": "5DR8ebvkBbRo3NEhbymw2DV22aTQYAj8ce43H1Rmoot4XZumk8JEMQGYL7oN5Y48QyLL75iDQR1mrymZB8CkDkRy",
  "key17": "TDLVAjceWAd8XyRJLss9yUwG5fvhnh9djbPc7k7kUCVseVnuKyRJygeFziLvDwNH4kLZ6pbz51XqSEJeA1uUfL5",
  "key18": "rvvmWmgqABPeGXxA6FpegEAPzndPoSnrY2PndHGmPZM5s887Ge7t8nwvReb8jzdGmzU3CzbCp7rhYk41UzvDHwe",
  "key19": "5y1tP5sYMEQ8sPDDsA6wsDsPGW4bCfwJqcuwPsLUkWXnTwQpNh6MWyxjUtz2x2z3ysTqxSUeUYMhGHtMVe7A5Tp2",
  "key20": "kGWhZ5WZfBNULBon2DhDXvWmU5dJsTRishXRA7hhru2AjDSiiR6XNvErVjJXbA9ogBPP5dCY4ePGfgyEA58r9j9",
  "key21": "3pXGnARnLRF9GX78xURW6dbkddha3y3APHYFBLbDSJ7d8iZyPJ9iYCwVSzUB9h7pwt5WsD78cKGP3AdbHfaqCMLx",
  "key22": "4sphC3kcE4YKvtdibV9LmVyrNwkLJhbMQakmYHXZt6qU2EfSrECTedxmWiftJEHGVpQzNeLNsYDWPWf8AKQnZ2ro",
  "key23": "4ceFhSJJTSiVU9GG7hLehxvbkqvzuSgyevMMFHNuzpn3q87kEB8QLpkZyUNa3iUDSZaW1PDZcQ9uDAdSD4KzT9pT",
  "key24": "2QkAoNreuj8A83pEX6SAr7nxn7stTR6ZZLXghnwcD2WxcApyPKWFaWQkc4c4rxdDpL2MAqZnwTbsPnCrTxLa4JQQ",
  "key25": "KwBcCHAiMUKaSeWXVgckAS1phyJ7Ju327h3WNDuSJ6dLzJbUedSQ4TBDQjCzBwGA5MkNbQWL5TPCtCmqYf75xDL",
  "key26": "43GQRm6TUA2devUAfwbFohfyTLRKXjAhEgmr3mUKW83eSbc4oBr3pN1xb6sNQ5aLSKENd5DTxqMkTrYdVASwEXZm",
  "key27": "33WAYc6dHnVF9WF8pv5L3VFwXy9sp5r6akAwNPGhfNUU9psJ5LoxoPr146U5G3nLPLpqkbwuSS3WaGgbqtbEChm1",
  "key28": "tR3zVc9cQP4YCX4YRU1Q66ckEPeXhjdrbsVurrmxr3vq3bZQLTHJcMvBG6sufVXcc1yytQPjwApb2ZGSM7xHg6G",
  "key29": "4uTFMzm76xjditr9AFuqJynvNYCHU4v7Ewh5XszM5zZeWfA34YatzRacMmxLVrwmZqxH4jtQYVx7jx972ZyHHcUX",
  "key30": "fpZ6FuXGjVJ5DC8wqPiHa3QCTigo1sPMq9z2MUqSg8tiVbSH144FyjBC9L3Jtk1FRN5PjLtM4sxZ1Rru7YVPWhK",
  "key31": "5fW958zTCcQYqVxopsct6iBjci92LE7jrQPhZ4dqmyYGzqwXTEtmba9Fc3eoqew4PyZJMiNdpKh2at35aG2HEd5U",
  "key32": "55G9L1kCFrmPPS4hogbCAZDE1xYbr4R48mwn7k4fTx5jZjDVDLQC6BfC93e4PMNA8ueupbUt2pqxKCiwUMhXtxdT",
  "key33": "5PDmQq936idmPdnnoJuEkSgYsDm5oWEojSTGyiDCWyicsJxSkyJaTXwLu2Qzs4wtVFEgZnzk5CTNnKBzdpbi6c2s",
  "key34": "5XVBkbtfo7V9CZ65VFrqEdXMGtka1WNpvYLdhzP8mVyySZ895Z5c7VwVxgtBPXc6yFq9nEq9L66wUJG1SpyAP4n4"
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
