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
    "3EAmceZb4UP6ZMhX3ek5t3xNxt5kFgh8Ce1i4uPpPuuQ94kAKeh5ojkSvS6yrTF6z8DDHFeNqk6vspLQiTRsHJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgGsANqgVfW4wtxzuEznTtZbpAzfXuxXjiVMeKNKBKtZ2qTMHu8vYBX18szj6xJvdZEa7ccjTzeqrKj5LFbgQop",
  "key1": "2E22QeEJypfta1dopBbiZpFTc4NmxmuCa71YAexkAVCvX5VH8wFPEN9415TZ2VjjXj1F2PFtJ46YUAZiF3SHfUHs",
  "key2": "21XN2z9EbyfctCRr7FQ8EYwDeJ2mTpZoJ1CapVdLBuMkbyPq2axuufqX3y75QNgczxD7W1XX8pC6VVqvFZcvdUUd",
  "key3": "E736b7Wz3x3UMek3T9pBnG7WmduR9WBec59UbG6pXVB29xMsKye6ngQExbi3fVJfqbPWjxCmdHQRXBHqgCwoRev",
  "key4": "5R8eGbpwRtZcy8rXc2u7T4BCHU1CoYz3eceTvzYEKaB9qAgW1Bn2cViFij2gsS3VHehPNigMfjUrRRrzzL5oQSf6",
  "key5": "32oLftkK67qrbF77FGHEhhoRSfnt73B34jAqaJYQeQTM6cFNpLSrTjSUcxyXmYHHDfyubDooW5znPuQAq42VEnq7",
  "key6": "61DuCAv7gthZyWmTFcZZr4kfxM1gbUpvK3fopamnUewxRU7CaxfQUoay3BAV8EoDd9WnYCjLukGmdFr2jtJNCded",
  "key7": "4cL6jRPnoqbgYXNKPFxku4pvXS6sb1KLQ8b3BEFn3VHySVeaq5z5DY3ZikRm2gyzrSBbEcKEbxf9cWXTH8RQBSQF",
  "key8": "5KChpk4TNN5e2bJn5eb5939kuRyMzfBqFGvXdbDcHvPV421uh18wYFGnYNkeutFFbh9e9X6eB4nhMVmnj6gzrRF7",
  "key9": "4Se365YHJgtW8weBDw3iVoG7iir5xUV5nLnRdUNmsRNwNjCdqSFxAePHj1AbLYgcUwHt4YzTLFfUZkUDL2XmJSr1",
  "key10": "2THKupWXHA1DLMxbFnheGF7Ji4JXXnDydBVfKn8c3n9FphmoLE7Q5zS7U2misGA1EU59EGrFCisaF1FtceSeMXco",
  "key11": "uJBeGVscd6wZkowmcFbsxKEtzdGQk62eeGRDB2mFKkg69tm8snGmu1RRXPsYpWtvVgaibjgKt4b7B47Cn4yZZYd",
  "key12": "3VDHFZWZwUQAnmmB5SbHQ8HyG2veCu3ax5TTtDcy8BzqPZpRHspj3r9YwBRNbM9fgGwBKqBF2WKpNkcTKB8sJtke",
  "key13": "3gLrMDoftjWLMJQAoLHxrU6ibx16xHivw4mBeKGvdcbMYF7xGbhntMvqrx1Kd5Kvqri8pgZW9PrzSdsT8egtC8jB",
  "key14": "2H4grQHoSmTZre9RUiwikT2iinGUADLcUooTzBwMpghScD2Mpg9euQD6MhwvrkQ9Pize2Cc8imnomBXbT2Tb62f5",
  "key15": "3fC4N3eYQ3ejWwhtgts1vLXmMHopxyvkdE7Grr36j7YnahzvhKTVJP5uNL3yVS7x5S3JeD23UGSNgnNcTSWoQ4iG",
  "key16": "58DTrpmpfKnWUGbah4kvHnyu813fr1QYvQkgPK5qjzrXCyHMneRvT6NRxoVQDV6dvuoKxxB89n68mPKfekYVitfe",
  "key17": "rNyJUnsp8KuxPS7WMvb1kPk42cfVWQUXMoKMZyLtUypm65gCkYYY7MTEcE1LrvVYke58JBVZfpwaxP1CotUC8F3",
  "key18": "5qZz1bRxYy9VweAoTusa72nuNVLDTFSYRBzagfdDD5vAu2oeGgDf7KNVjBN131vwMDcWJ57EkBbbfiyzj6bSkdb3",
  "key19": "3u1gUWefsQsCG1kT5fKnfoABfBuJEnu4Ne1YtFRww6jzyLb3vwhdj7bsZ2dHsmCqNBBYG74SSqqn9zJfQaeNdaQf",
  "key20": "5VoLs4eDbTUvte87Rv73a8VhmDnYW6kP2TKbVvJeWLDkyKupvfpV2A2iKVXF6AyCp3PRc7YqX66ueV4pHVum6hpz",
  "key21": "44wfZn78pucbPhaPFpjQbktSeSDCSqiAMssiWWZBFT1icYNoFzcpfkRqkuiXV69gdmEb1q2jpEaLoAFxRNRcDutH",
  "key22": "3HSdzTH1mt1uqGadbKAJ56VVJMBKeaqp8REXbtf3YqzKvJtPcWFcPnXwgD3fir8TAsr9FqKrARMqEhjPkfVS3U3b",
  "key23": "2z1goNstQw74kTDSrmCvNFY6YmGSEkYcfzSJRvHCqC1w7LmC6CXMYb8hq6ma65wY7ZnZhq6Z8GfKSkm9GhkAnGJL",
  "key24": "5M216gyxtV43HeCKxFcQUUvb8TjME9vGwg7gCdyxrR2Ukw9AWQtwkUSbS6gQNvyCnRRbziQrmyVSg7jtsKLWg6Yp",
  "key25": "4Soc4QCsBo2uC9MtMu7C9kYyw5nsgW836SeDmD967AjuSG4vGGtHKVndAtqvKxTV7xwhzyuTRuyRk3vHPzdHAAiB",
  "key26": "3rk6zQ39sfDrQKPnHiDotKMTQYShHBx7y6meY7DCteezsCFL35SY6rxgJR7UjRgwm8dbWiJDz4J8AqPbDmFhWC6L",
  "key27": "2EihZoY7FmUi8Uv4RgFqvwCqze7aQJcwVs3kfP37uroBEaNn44nWWDhXpMWySiDxYLRepv7PfCWVmrKdus5sXEKS",
  "key28": "5FWbqscjr9wAKTPLZHYv47s6nMC14zTBrenPRgRrP2qZYW9BQYWXNSAXfQYrCMQdmi5aPs82t8pxT6jsiahvzPSU",
  "key29": "2uqRRoyT7QQiS2Rps8qm2nqMPEN2Mbv7iobRqjLCdRDVbdNQzEaQ4eFfERejeZKKjmvDePJC69v3maaBV2HkCFev",
  "key30": "4BcdmAkA9VqAriPh7xnytwyxpWHkJ6eNQHshsBSDNzRhtWK2xhJx5A47a7kHPNou7KMm58z7PKR15ts5R97R9Qdn",
  "key31": "3Do6PtDMjX8oNZvbQB6KeeEGWgn1A86X42vF3FJdKc4BQdWhAF4oAxJuTWP3PcbAp316TyPmUGrZ2E3XTYTJmB9z",
  "key32": "ZXbat4PA4sxhRp2T5dFk89RNdBqdtWeCZPKZ1ajjMqcXtzSAEhdn2yvCww9Gf3Q8S6ncMrhnMR9NoBiHeTj2QLL",
  "key33": "44z291YKzyCXBmXPkiSurjucwj9e8eNP9ZdhK3JEefcVrp9p5N2ZgBMGyQwD74XSZmFSaFJ9QPv9EdDMkq7ypQo6",
  "key34": "3VH7UHpLH9bwZL6RnUv6Q4aQHfAra87JM8A5HNQV9SZrh3HTyrKHu1PWVxf6L7cwxMwe8ULksymUoCrRPARyntm3",
  "key35": "64JkVQRbArwcSCPfsTr63MWbh4nUY3CLDuCiwzK5b6oh58ovL7BGv8g1UXRffLETSuQba9TMeKxq5AL2mEMzMV7D",
  "key36": "3fUSNEv3Vbs9E3kuW2CrPMz4rhzCWT45EMF3zqHvFzZmNnBdq91cBinP92VejsMM5T5yc2bN1oRUGwD5zQH6z96X",
  "key37": "2TkWUrNbbTX7iKr7WcWEYN7noqCRGEFnkvwmoY2CzFUjE3Y2swqXSwCVNQhiBS5qgm2fxr5XGsyGraFcSDgkdMWR",
  "key38": "56JAU4xx4aXdXNFuu3SDxZ6QHfk527CZ4fPak8aApxMESwhT5phF62d4eyVeuuvUVuM9dngw7t5SzSZ2ydFVb3nr",
  "key39": "42emQwW4VfBWJjXHoe9Hvb9U1xhFcyAD1aiBfAmZpYyA3gbUopA5uahLaUxX4RstFqB2jENth8dXQT363HWcy5jq",
  "key40": "4KjQnfujP8v9w8Vd4fHNC8ypGwfzHqA53S7HcxLxrCfaLMVfhQR9tpymiDzUtTfnwT3Hwzgmyxdze6AB2Lyo3F46",
  "key41": "JQQEiLXh7BVUdD7yqqu4v2t9EUQNp1nHPFEjnCmcHwXHyXG5eS7ZVBtnRK2qD9baUfY4Fx5RAjMrk8CQ2FD7u8Z",
  "key42": "YE1g2BsHs2p3cuizJWwQNRJAnf5mwybynV4eiXtCTZ7gXj8sXkCbPbKmRYCTyU1KqahJfjDqF6Gd6fYubmQkq4x",
  "key43": "3GKWnL3A7GGcnkNka9j8MYVtKcQSRnSwjRxZABQzABt15eCNqUfhBzBaazMN9HdBnkw9tJMTG3f6Z4TK43wiBFKj"
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
