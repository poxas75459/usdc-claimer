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
    "4W9pNcJZhuYc15NXtWrvwFQ1nvsbQUpNAy3r8F6Eq8kz2P1p54RCgkjTrZ1k7KXgMibgZv3mo2TaMxsabJDSxZtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTFo9omF3FXzhSXiRof6t88yTuSC6GiA1FuLGf3ttSkhjZb1fpgBoWXviUpZ7w1qfF2ayXF3UicuxDEYViJtNTH",
  "key1": "5aJYsEZRVxFcN8tUZbDv2DKDJJM3EEykox2bngqmYk9Y1sNZMVYPnN9PthrgLqps1oZ3fGgqBEkqBQpjEdHrNNc3",
  "key2": "PqtmvMRXZ8aygYeuhHJzmnejZ3C6qCqmNDAB6EqMgBzPkzcbyYB6uBWt7zEkZxKX9W7a678X9hQj4tb3nnuMRc2",
  "key3": "5MWXMPgojw6yUb3jSjjwsE1UBm898QqBiYw7THXifMGEhSTZoph7aGDgogbPEukgoeXhyLyD9BiRmqGbgMTtX4HS",
  "key4": "3r4CLSPJpz1zcH74vTwRdrHnQyhJgxJKpBxqbeNWQVuRAcuv2SL18oJPvtWU1TiPq1fR6QLYhAWYmmMoJ8YUa9br",
  "key5": "5qwDKXrsc536LrrvmKT58Qxy8ZjBFKdvNcY9GfdQ1Af93uDVhchLWNp924cXfX1LC9UaB7e8VnuKbScbN9A6WMpm",
  "key6": "2mdcPsys2BCahRmNYhiABKQCGYfrRDnwUP5AW1ckjjNqLSQMdD1myQhAgdB7EKsRazTCkJLxkU2uVGN9MxDHa5dm",
  "key7": "5jihC3QtfrThUMYW6BpWwURUuM7JoHHWBpgyZUQctFtkMYdrqqm82x1kfDf7WYVMqorxWBtPqcovWH5WNCoXUo6r",
  "key8": "45NwmrVn9Q5gUkt8jUgFuz2DcoRNB8YBBvwfVyrjHjXTe1XjsVsp4P4B2T32LQRq4uKaBUU6D5VXtCB4gAxEKmFT",
  "key9": "57MYHaxqRGVpQC3w6wxrTb7HJwqvKPHKFJTD8RqPdtQjxozbKnuGBpfXXvbpnLTBZex5DKFotQSzvh9e8YzMJUEK",
  "key10": "38fV2kcg1tZJiyikNVf73Tru1MWPvJ1XB1EWqwgkJ9o28iY6J2z26d4bPh2cEus9Ki32zXGETGC92kApzK5HtHPr",
  "key11": "4knjfNoHxGScpiNX4g3jNWf5g6wULa8PnXqdpgBzmMoCezSqswmKmqNWYiYRV4BUYh9LqH1QFW3mC7KF4xbEiG54",
  "key12": "34q4591LNu1ssbn2sLexMkiYBv4tp9qpuT7bwYts1tfzgy6bThQ4HsZm4gvsPuzq6sgvzcDJwMhvDKgUzA2P7FmR",
  "key13": "4MH9TDmVkFaUKWp6fug3QN2DWFoLSpBkEFBj6WMwCD1dkHY9rR9tguE7yYTBtn8jCuVNdMTajZWyv1k79qTu9UNh",
  "key14": "4F7i1tnSo96APj5Yozkn6mAbJnvLaYWVqrbZzvCniwWFzhPQY5oR92GFJt43copLNvGuAcrfvuXVcZQXKGFY4KCx",
  "key15": "1kmToDMf76uKc7cCVeAa3mXMFRmvxGrRRSmWwnUQiNGvYKrWQKp73VfMNsgaxGgJLuuDVZP5g6SCtqBQheVFRc6",
  "key16": "5tgdj3SXkiAkjZ6ZD7i8YfY2kmpbKSBtvRNExYRkWQTmqpLdoL4fXG2kyUCv8TkQBpj554aezP5xCwZnDfUbuwB8",
  "key17": "25CrTaDZakEfasfvcyxXAre2t2Nkxksx4mpbVGwXFqEUWPF74MEszMB4m1g7bMNXY4LGLRx1rNfEepEnanVV5ikR",
  "key18": "2JRsxjEYFt68zHDsurmpZkv2GVK3Z2ATPAZaaDRnS9VoQdYnJvjaHJAdXqvNsWx3jtRSbYT5xUNnzZahP5ycbEjv",
  "key19": "UXaZQFmouRn1PqGcEeo6NPcGGEgZohNUsrLLgkCYnVqviiDgW98KbiKQYEDbpFeUuKrdSS2kTpoToVgHELYwVfv",
  "key20": "3ZzybDAVR5TWkApE5xhSEXSNSfKXexnKnkBFBVPau63SF2PBakSUexmjYK7LN7sHoCGqGb24S4NeeZC9Dd8kKfXV",
  "key21": "3Zcgj2sZUiqgHyQRxBcb1AmqkwNQbdqxBZpW92FmNyr3eRWmPHDjEHnrfxB1ewaNC84Vn4TMFBC5nMuGL7riwmyz",
  "key22": "4Bfaa5mcnJNvihz63JzNJhh5HAaw6KuwDx7TH8WZTrbMc8pPAvo3zaSZRMTE2nd2ic9PTuuhY7ybhvs3byTagXrs",
  "key23": "2gKDnQ4Xg2GmvtM667VdCYD6VCHMGxrTvFShY1DMyu8r63i7CznDXDRvdfeTYG5si9fLcNPvrAgzU5wuekF4RHdR",
  "key24": "5W2KB5cVndenzqtunMCFSNJE7FVPkc6piHTnGvbn98Gejx6kvs8MCpviefLYiUvy7ZAp34WCqduiddfpxp1oLQXk",
  "key25": "5PQTN8zLMwpyDHVC5b7rz24iMMvdB5qCFReQLEHbckueqrzjBCT1G5227DULweqytV4P1oMTGR1Bpe19JeAxfTZV",
  "key26": "gdpb5A5wnC8ZzfySvXdgyGrexVP2tvKsg15LEP8knd6zj72PGYV6ekFFWuAJzKBJwSiiL1kr48vavEfq5xpHqyj",
  "key27": "45hDXAnGXmzi6ipXGDcLwYX8bbDfnjCB4SQTt3RX7DDGvLv4oXzRSx8RQEypFu2QrfCCH277D39WKDRKZsWbugpH",
  "key28": "4k9vJziMUpYuLp4xckPz79C6p5TQUg1gwNJgWydWs77LS572mvzTqnM5RoXq6Z3rGH7ZesCMRbY2ddswNNmUpfKx",
  "key29": "3fChYgkcj5bkaDQjnmvVBEnxrha8e7RoVQJpzi6WdyGbUeWGAPkgA78G7jfGdWMoEpHJpQf8oSXhno5c8CMSmWPr",
  "key30": "A4Z2SGjwJb2v1bSCNaJMvMgt9k5DQnET3Lt9FrQQt1yQ6gj2oQCpgSw3TZsza83YENyJapS4iNdWsVpr8XNHaVa",
  "key31": "37CTLonSaYfehLpaqMBtbj5dR6Sa53RTmbxwubPK4vw7gT1Sz2c2PJmGeNnc9sA8kYMWCoyu2tabNS3Vizmfq4Qp",
  "key32": "3YzV3LaqtS2Y5DCgQEkbBt7L1H7zCCRrAukAnLqda55b3GWeqVVma3kNGP3ddcxfq8cHPGvwRBC96eWrWJMgu9T9",
  "key33": "4tVujAspV8J2Cuv9i57PEjEsm5tGPmyJT2hFYr7acGhqHGy9owDrMWfGcfcrgab2yD6o9TDLzEGbuZDYbcF9bYXt",
  "key34": "2eg2U2Txp6WzW6zauymoDvvvYaYcpo41eJUJzjBzzMmKcBJBKQPsAXprEEY4XNwvqtKFxWo1GLXkjeMDso9UwJyg",
  "key35": "3A7zmb8zJfG9Rsc4oKJsiWnUegtgFcXjEsjEzSrs9KGrFQTrGkWEURy5ZHzQj2zjWQ55wLbT5xib93MaPacdmXo2",
  "key36": "49kdqvTnBH1ug2vQWXPzKzQiXvk5havqvNiPbxMSv9Rkt1GNfhsWeQugmBJanxPeujyiHDFgyqoj3viKPFfv3ERi",
  "key37": "4WthwsPxy6CZSBZyvi3HfPUQb9uCexVmjma3hrAxCd5FioeqYNHNH8E8xCjpGQ4oiFrhgdqr8iuwvaEnv3GK7Lhu",
  "key38": "4HYBkake9cgcCxWHqKMFvefFk44X4MQqGnRFuVAifErdahQj3dLsEx4JgQ2xB5E2XSkBsKhSydd3M7Y1fgLucoVk",
  "key39": "2nqoWMmPAtq5pW9ACPF2viYsgsdyAVj9FTh8j8HK3somJScgFpZUHBLCdeEk4RtFMnFX5VFN8P6fvFLn25WDCwGe",
  "key40": "244Y9PVEniosLmkDG2fm6g86spevuYSPoUScNkPuoVfsZSrUMQQncegxyWn9x6GtSqorUWuKtvvPorrSr4QJvR25",
  "key41": "5PohcrkkGWaQpuCkHax6X7PRoRxGeaoAKFE3kZ9airvs9AxVeHin2nSHCKGwsd84MoTQy3QVCJAhfmAejBkAkUWq",
  "key42": "43EzdVNpEtt3TDAvHVgMgtsh3ywD8h5jXK6eJRZRbTitkKWdFCZywsqudDeo2yTmEKcS21oB5KW4E6nxasUfcFmk",
  "key43": "4DAf9teG4UfsKxLpbxUm4WuPqjFxEMMvnruqnkhQMiN7kRuSp9pP5Q32VVVwu4YqbWLLzzkBNGKoo8MeRWTK32yA",
  "key44": "2wmyCAW8B6ma5cv5cbPmyiqjUYETosQqYw9DBxDeiSFyZ76JCNLbo168YgMRz48632RdRLicANYbdGRvnNfvmP1M",
  "key45": "4wg8egyfkXWg3VS4bQhqa2WG411Ys3jYZgLn3V3MbFwHC5ZiFDUCNHN2pJu4AEXffBFLNaLNMFWyzKPZbepsg3LX",
  "key46": "5Dxub93yQDCNxwd8zhTQPW5G1KTyUysuFEgxbtB5TXXLEfNtJ7XUN6JuyjRqMWQFv1ZPzWKVdea8AhW57cS1mrXd",
  "key47": "57xyNDwpm38fdthtunkDiGL5D5Mf5QrNZjJKzWcEZbu7QBdSCPtvooAeivLZgD1fvPZaPMQYuWRWrWHLmx126wdR"
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
