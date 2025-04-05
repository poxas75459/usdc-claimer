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
    "3NYE98pbjwTgbZzEA6zJBgAZ9LEYU23scStZDcyUSuTU3mNujuBKFM5Jhp5dzZdgfJrcvH6GqJJVPMTUDszJwPgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2id5CNrqXQnm2PcbZrT4wBWHyL9EXgQLjvjwpoCipTADD1LM3HsWrCTqoHbPy9b99fXoc5gsbGhZgJeeyvRwiAqt",
  "key1": "4vzxSHMjf3BjTZr7N4xAvt2huw3C4b5bYx6Dwo67kL1xVyQpSEFwCsRFFJWU1bA62PZ7tVqzZZe5AX8255Mk8N9Z",
  "key2": "4gq7Pc9avxXaKYTnD1swsrhyWnpdQKkc7hhDnpsjN3YDvad4sxhgCMDn7b3VK9Es8kdX1gjnydmCpGNE7bTyvCUa",
  "key3": "57RHVSLPSVWKbCduSm1MXXcj4cU7s9A4KA6vbHTfngiKcwKvAhMr4fWiXhYiK1Ej5KN5FE32Foxf8KUMFCrGKEEh",
  "key4": "2BfJHXJ73RdjrHkgHme9PoNAJchZV7hF4NeSMHkyVvPKVMfRyrgsh36znh35BexLDGaKSqDsKMDfhBqCAga8n9Rg",
  "key5": "25SgCvviwvBqkfpNMXtXh6oAqZ8oYuwxxVy4SWnuY3FUBZYmdh9iEzn8E8vjt876EKRJ7s7Qnbo9MnSK7YqKw2c9",
  "key6": "2zkb9TZxd6moeGsKLPvDg9Qe2n1YbC3s9bNJqJKGrLtiNghWPWLCNKCW5ovNnipuGNyCcB8gkoRmjRmvAxLtvUzk",
  "key7": "3MDjeyPWWmvT96eiBEFEpUQbJf8AnqLnSCAjeRLHwapeRDqq7mY6jaHSViRJ8v8gcfw6ZpScTaqXoRkP9CALhPeb",
  "key8": "qX2MMubCEwqLvFEsWDRt3JbwiLNhZKVznFq5dzA2bd2mmdsURfPdzYDu89YjWk67swzsjBKkyWvH6epc3zYmhB3",
  "key9": "4sGAZ5hDjPuY1mtTJ2BNuNaAYaupw5V3aSH29LAGLwvg56TbfcyN9xT7QFiL5ebmWQQ3XvZW1Qc3dMxENzMBxzgK",
  "key10": "4e5P1KJ9uXD6mgLgsCyT2664da3m68LM4cyTVkwHftvKqk4c8dBzxJFTD61Lw5fCpK9mXHJ2HruafaoVgSfgHQum",
  "key11": "3hRJnBL4bMhC66gGiZiFuBGimKdPZenqYQi3EzGq3C4BCQF2mctiMTAF4geLyKgGnicwZxpeU2bcmiTy2TecH6rY",
  "key12": "2JdrV9YkA6z4xYSra5Hc58Jsk7nNNskSJcECRJpmhpga6WG2HEktDsca57MpYXkfQzdGW87yx6w2oiMrshoEjQfn",
  "key13": "2RPwDjYWNn7UuKXTpBMDc7PVawjxVi2Pem87fNv3xwahvk6UHVkB655AdYAn7HQ6kmD8br4Xsb5fxmhJbJDT3bNt",
  "key14": "MBqivce71PNKyJV9T5u3zq3Yy3btNhQzX3W529KV99uqzQSDb8t4S8WkySucyULzP1eSebok4tZEkyA4Y21o47m",
  "key15": "5idS7pmrSdf4KKFahxjGNymB5NvykJjttVbVxkkgftxr5AYTRdyq1G5XXnigjcQ9mvoKDd9pkLuWo577t19daFGz",
  "key16": "5ME6J8QF9gAcGowp2GXuFy9qjuRchbCiBdauQpoR8bneJt4nHAfCf9QTjroC8b3LCfNFnihmunUoTqghteoTy9oz",
  "key17": "3epcqxhf8BcPHnXMjg9pjoBEe3fzN5goCK2uNTxqFT2f1wn7wVStPAuvSr399qphrQUVfW7okEKkj1TvfZWX4gwh",
  "key18": "3ZU9GRreBHa4kzRV8DwwGPmLPhMJiaMU4aLYb2evAS83jzgz3cYVyMh1Zfxtjt3xcsk7Z6z4NRAAeSkeXEw5r2QL",
  "key19": "2RqJbCxfJvfmWxntkwqHYAZv65uFAJ72uhj1Eh9AFagfM5Uzgrkuzu6D7yKkYm5ai26xFiiRhk4YMmZW1RSNwAUN",
  "key20": "4M6gneZf3Z24qeB9h53xNKovdPEBvyqLX8iXY8rrQWonw6wpSmRdhqySJE3m9uB5gjgjwhFUasGvYj8cynYvgn8e",
  "key21": "4BR7p6CUBLs2osTFf3eRPM32WY5YmcRM7gVpCtcit6M7p81afmdD7bgU4vUU8aSif9KuBzMQdvHncGYC1DuqpNWN",
  "key22": "2twkuwWG1NhKdnisH6aCVMYTTog3Xt8Wx29QczuLTRspcbHAVXpdsmbhWTqCE5yBfmKoq6rDUXuTwzxmthBP43P1",
  "key23": "38LEKdUDCiZnuC6mwro7oVDEdXatsPDtS3KDG2ghMJm4SUhfD5cyLSz45dPUCb7EbYWN3hk8hWQ4f46m8LedGANn",
  "key24": "5Lv11JedLiexqjk7nwxMW932kp6q59A2rwBQLTHdQiD1ikAwMivzGskd4SmZS43dS4199xMrBtUrdtgejsxgWqZH",
  "key25": "9TAEh2ytNU2Af6ioGF4KuiuFme7oMovfUmNVM6ZDerWBQ4BfGe8ctBEW6KeLCSagESvZjEfbDwZ2Eo73hvS5ZrE",
  "key26": "4EheDFMNJgXh1XckEmKznHsTvrB3KK62LcmB2iDbYiXK2GMX7GpPs7MsWzBkKZkrLtEEeFR84PGX83LY3JXMBDXr",
  "key27": "4LKMyUoVTAiv5RkxBhxsYkXEsj2SHShBKguSYrfLKGoQdFDsbLr8dHv712RkFsovCiWTwz3pk8X9hZKF4GQnkVfp",
  "key28": "TPmeFiJXnLgrYh88hTMuMaXhj3G1Cf9ZYBXJTUSyjYJMAuLsSezZm41JHm2etzrS8juaDQsPPjiEZUVTcTiuLu4",
  "key29": "5t1hCeZ6s2JPLMfMoWbMwkHeJ4L2HmMmsUg7XE4oXzHtMaaQ7dZuiTJNYRsoAwSt4comqwaBADRtiVz4LKidcVpo",
  "key30": "fx8MbzD4vsTDgqk5H5ic9Z565mJkqsDiXs2gNUKLF4ninrpVHFtJEoTMP4RwkJ9snieMAdRd4PFALW5GrvenSkz",
  "key31": "4DYmoMwA8vC3aNyoZ9yuToKJtf42RX6aE4ui3qwPwtNv6bEUGjssNzzqjgVFoEurbdrSZfsCiBrq444e3qWBdSZq",
  "key32": "2AzF94yaF6TX2JiT5MuVWzrVSUmmXiwFtZ7akMXmdBu7EBvh5eKeHi64mryefxySUR2Vz7nSX3tvYTFDLzcQWfSH",
  "key33": "2ST5nNXW2b72M96tW7gMfuc1mxYdVPmhmhC56qpmXBe43UyVYYiQ1vhYrNhGeNReEda5YyK22fhxFHm39whFN6Fa",
  "key34": "56q74sQ2prLSBABZh4bXDsmbN8voGE9HthpBUDnsDzAVS2rpJVpis3Lf5ZzHsaWnRdPxJG6CtzMkXU9fysXLCtG1",
  "key35": "55Gyst1eBYAy8G3dz3dmex6K2ZThz3L6e1XQs1FJSo7T5imyTwfkvTagnioTx3Nqe1QEsNs21Rcwdde1QDD93Mzv",
  "key36": "4rzytXiv7W6KZTAqibHDotxgvze8W6hEtg4gZcFxWqiiKEKxQeTrLPbjwoGajSs6vihUxBSbzxAcQsbyZNQyHjK",
  "key37": "5zssFnyMBn9bWUCRfdfmL5DxKMqMLGHqG5HDj1N2Qa7HtpnQiKuBzi4JBNg3a1fUmREzDKadZ8WB2MiysdjbF56v",
  "key38": "5ocKhtYMQjv1W9kg6zCHQjAcVCW2cVXCvUzbbtPFTFqWeY5Ey4kAK8J8SUPBi1UxE5BydbtBSBDxAXSy4JwCGbr6",
  "key39": "2Jgs4UFmrXwvPKSVpiyFVWP1xH4wpXsuaKcsuPqRS6r4WnMmX6sEsHL7pazixzEeDiKqjWBc94SrgbvPd1FSquyA",
  "key40": "5WGc1YVc1AiZ5A6sRcKS18gnyQdjCZQoraCbreqB1fEZBLU6S8Hibp2BScgNj31SNqcTmFKCmHSXVjwMyzqgqT8h",
  "key41": "4oWLyNRvdKUrH6k6KoMnhtAq8jYrewvP8Dkd4YnbecRGeKQwDNnMbXxWj5UEgVQCzMpcj8HccPrdPtdMb6k6kJjK",
  "key42": "4UnsFXKQgAbRjavr6kKJx7XxMLdG3gFNuFnpRhpxcyhqJ82Kf7zwWRcX6enabjbJ4szMNxKrXhTdCW2ayhCHQT8w",
  "key43": "56YnnL1pjZE7Pi7HPnXCQeoEyVFc2qhBmEqMBvLbjKeij2WmPXjtBSSGuWg1LFcpN3NoZjMD3nZoEKhvY9Aq2CqF",
  "key44": "5mfuUHrw3LHhSN3Vx1AHNo7wZ54B1R3Wh1FS3rLY39mJkVsyJjXLj6nLAG2dNc4QSxpFhZ3hVQ423CPEgxKnev3Y"
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
