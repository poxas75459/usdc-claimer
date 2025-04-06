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
    "29pSLxTryhstypU6q8i59TXyMfgfd84aHUWwvzCi3hceZx2SS6eQe94w4CZT49aNZkTE7A6mbVTikZyRF62HtwKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4494UMzbeLDJLshVX838fF1awErgTewqvtUwtmYDELrFckm2ekTqETo3YbvhrEr7eeTExy6haxiiTsVTCXXRuySf",
  "key1": "33dWxNEKDFEwdY3f81kvWD7DLoLrcu8fzM2Qvpj3taZdhQG7FXmMnBznNkNqBwmyLfUqqA42oGpXq64g5tafudCP",
  "key2": "UdLmuHzp6Gjs4kPbn5eB8oymtWYMw9zGkwhW2rhQBzGPmneNYRuBYm2BQgd3YEsq3EfigDNqwjqQHm6ToQSNVbM",
  "key3": "5N4bSTdtEFM7t4AV8LqTsHu7PWCaStkD8iCC3A8WUt3J2BbPA3qt54r3U6DWD9zYr1cdMKWnX1GiX8Vc8TYT3sWw",
  "key4": "2QEbxuxdKh4MGW2NDGUEKTr3RPgy2CoptLkHbpRtatz6JiniyTsPkDgijkdRZnZurue8BXEa2Nt2QdrcyFSMWC1g",
  "key5": "NN8wCoKeDwwiSpUt5UoFQHZ4bmy9B7Xw2EwLgPrCxP3qnQ9DeRENVdWagGBnmVXBSf5dKfB14vD3njgKro3a6i3",
  "key6": "4JVtD9keu7PZqkTE3x2tLo84Ene8j3WyM3i6aPm2XWZKcuaEKZdc4G4RhJaUabQFHdUDbmssSu5WpRgzWkdqwvud",
  "key7": "3UZaXC89dpFdgvMh4fuyRCbEDC7eyh4HTSFC6AW8fLEVitr4jCr9acv5r4prDHqzcSzT5VFjJ9qjhJ3yVUTyGk1q",
  "key8": "4QQjEaupyu3Q8jpsqUUM7WJkAkB37jV5MEnUFvyV7cTwn1WTyLTvhxmZEnzWssGyT9fdiXATzboG6amo9vaahUy1",
  "key9": "3tMoj1LdQVo4KhdooAoW8Sg1L6k5GVz8xPDKn1ndGyNM3CB52a3inmnSLFZ59gVqzjpuVXbyyVE9TY17koUJrhPn",
  "key10": "52jx83mfV6jwQ5ijimUuNcZskdw13MdWbhXYBXX2hutHH1tuxNY81L7dHWtqb9MvNYCMmAE3Pw5efpFCQgR8u9Wd",
  "key11": "3ME3f3C4xibQrDKhzNcCx3qXqCMvFrZRpuLebZLEomFi4xd2LctLsZAtMM5nwVDMtBz62sHBQbC593upphFSS6UP",
  "key12": "29Hcascxk79HrX2cU7h9LKnMY2s8MF3z3eSoUyqrqQsKefi7WVsvGKdV8siNdbvEHm6b6EDVEYQxPFERAb4uD1M6",
  "key13": "2TVFQXD2xfRG1fgsdJaBHdCj84s9mseLLMxhmkFpx9a48AWM7sjrFE5Ccgwrv5QEtV7z2oigKyPCipzFxBibApKG",
  "key14": "5epXBXm6bRwM6Wbyo3ZQTEvxywLavAM1ScM5eDpYuWHWGQFZHrNgHxkhABc9AAKRFH2hbp7twZG3nw16RZDdrewr",
  "key15": "5xMg85PdLTDSibNsdmB5nAuptrQZNbf2cLUbxSjmGAbybrkxAxeW5G5831vbFLyTUwLTjLncXatrBha9eTV6QnS2",
  "key16": "5VPRkcBMqKqbCG7LEqSAXhmYUSNkYw8Fs5PsEZLmRzUQbzAy4UH6o4kVkUK1fdzPwpPXPWESReLKX3yqm9LKZDUs",
  "key17": "5YUikQAkaDT4j85D2Vd6uVyNHD5HbP3xE6PWkpCqZVzNFhaFhakhGu7qNpd3zMeMJn1TcMTNZ9Xqyw1bS3wrDsVa",
  "key18": "2iriwf7fCdTkKRfv1paKGmxyc9QtkgXraT3TT6AoC2zCBtToR7hpy8mKrQcN7sFcivQ3vRb8mmG17mk1q8wfnwnb",
  "key19": "38ZPG7nLBkzeBTgxSSRj9SBBYWdcMggBvi6Ud2ammQFGMZHbMDEaTbTmKyFX5UfkXXzQN2LfLjEzQkEQK3ZaWRZT",
  "key20": "fnjHUHhsjLHN8EEU4fYBSZ3Awg7s6DQdV3ye1SgD82oZqZS6kMKumtmNRuRVdfTv5g4L9rXmxFpPvLUNjwUNMLr",
  "key21": "3MaqCqsh6p6svpYP4aut4xSJKcSRW9BMPtb6n4p9TtqadbwTtBTAXDkLJs2b3FgRDPkRug7aqGxQxKh5w5VRciDp",
  "key22": "4yYNR4M4MQUGbK9Bx3rhbrbSwBkDMHj3q2rPNhxPPXPKrafaKXk7thquJXXhT9TfhYsV7ViUWTDuLcRCpTARJyqK",
  "key23": "3kfjPauRUKCcPy4ZqMDyw6D7uEHxApZZKb9gzTxkxgecEgah8RvjGdGAtGfMtj6hckuyXGYJEWMtuqBDuneyQwk2",
  "key24": "5YunGzzHbA75NL9jk8tAWmPLk7buTV8k8uTMzsTUitZM6ZGkDow4WWU5vuyM7kRGECxaEURAo8GMhgJtKrQFFpGJ",
  "key25": "4tLtM6DFSkiuj8H9CapqD7mJqgyfAJ4X2j9Yb5qFwG5gxxFHdCykfCL2hQ8JQwn5P1XaQ9WAvPh1KBoueYGNNPzG",
  "key26": "3g2w3jFHdaFWM4jhJDXDq7KuWkhs7ZgFTXttDVGy4UX9xWybHungXf6FC7iyzQmpynjtNNcGp3A1JQ9bNzKM5HWg",
  "key27": "3x9XSVEwSgvYsK5jsuX2VHa7i9fE2gciSBk6Td6LJ72G3KCq8mtWSLVQQ2VDnFxdRaJWLurtPC2kHboYiD9bHJ7F",
  "key28": "5i3Et5PTWPcsStsCQsW2PhHVDoPbh7yeXqW6U8axiP9L6iyGKmCRnDcReWqzswE2sdqSm7fErgakvBLcN9kR5UXU",
  "key29": "4PmvC6yhH2uZ5fasLevk6BSjDEuYDXjubb8qsWabDNKY84a9VCwMAcDcKxvFUX6yHhcKU2RRecybDBxpeiAa29vk",
  "key30": "2WGRzAbwmcMWajmvafLANR1HQuhaoCJHdCsdgTveYgCoZGuU2aKDnEBF5bNGSDLno1v8e2c1dT7m9FqXfbZah25y",
  "key31": "33AWVoV3xgykknBr6koHSoPgBHQ24AokyN7wPrsVmFVZ9r3sa7zCvgmHUG9VpsvJavv9Wsz5W93VFYMQtJv3D9vo",
  "key32": "22PM115pYLDTARxb62sqL3eqbpbdEgwv5jimgcvJNfF31cxzU1DHZ58gpppJiQSZExRVWBi8oxpMBQtfvZyo9eqs",
  "key33": "3WNgEsgwnE27rip5brv4EKhUvREh8PD8qtiRZRPHtj9VFGKeKbajfD3wFc7D1sm4cPKY5A2sBbwdNeVWEx8CFSSx",
  "key34": "2HhbtUxz47YHCDcgSgTgVWajjYJRFPrUTLZ8TL2XMJZeKCYxFweoqVnNChh9KcMnuoTUs3iVZwpwYuUnGskzikT5",
  "key35": "8hBHXZmC9dZ2LC4EQxCWW8i2G5npMbRh7gnWvnq3xv3DybZr9qK7y5Hg94tKHFdfnVGgq4gjUZBQ7RjzWUVXW6w",
  "key36": "Y2DPYbNj5dBhP7GuzxvcHS2BydSgw71cUyQS8aLMndQTn4f3t1xsZX3fUxkSkJDKdDzW28kjsC45ayZMkEBm6Mn"
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
