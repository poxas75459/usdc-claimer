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
    "26J2dauzKut1zaM1MRqfzxgmYdyjhkeHg8mUK7FwCck79ff2exFHdNgR923PTE59wwnTad9PLeLpXHcKN8fxuGpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evctsVewvQNW7cXd89zboFrd43WFwy12LzbMA8KHF1Tsc87CZ6fUAfgsE4mLv9bn4EkAnvrinFpNrF3gyV3mpwL",
  "key1": "5ndFcu6qdaNRupZxQq36M22i14RTb13HDiWMsVVFM7CTns4GymuAfSZ98eyeYdhRFk91JcdQEEbLVbMEgAZNMtRV",
  "key2": "3b9YBNpxjbhSunFjStUK3bgSYCeQ7TQJLiypPr462VvJuQCRqwd4G9HfoUV4a6nVUJHwSAKBT8LZ4Kqqm2DUcpzA",
  "key3": "3L6cNGcazjSbzUAjGRe5Q5znZ8RpscZafyuMHktijoZuWY6he5PvSdvzj9Wb1c8oPuWnD11Ubbm4GbK7LxuiSAh7",
  "key4": "PeVb8B7A4jThbpEe6ZW6eSAmbZEheJCZhH15eaQifWgfFkH4TeoYoY8udn5nDYcdbL6yVYZVdz3aNbYGhRbDuT1",
  "key5": "2rTEnRsoFHJ6ar7qgFq8aqXiP1suByebTRmfpb41adhdkjEcY8BddP1NQp5LvbCVqCweEyRzZ9jQbcddncDJfKtQ",
  "key6": "BsGqvvzjyFrXHPPk8zoBCV4zvB84hc9uit8vdgcZvUp25JCuRMeuxnLABV7Fv7UzgwsVeGFtiX6VQ9oF5Z7dE8V",
  "key7": "59ngy4kSetq6ZwHcXtouJFHWiFkx2JGqjUdp4BmaezPpcNsCaKWjhfeaEEryX22TeSBtaA55Ce4dqw6KurAZnKSy",
  "key8": "4gwttVMG3r8et2FrUNunCgFaEieQJmE7gNBxmcUCnyMGUL7wbovWk1ZDWax5rbCMsZ1TEKYCZ3DPNaQEhD8tZ61W",
  "key9": "YD2gzn7ceRfBASm95Ri5GyEwa4KsyVtgCCfFPnVkwaFsUrir7ccvafLSL3jyFN3a9GnhivYm69Fh8oFDQiULppj",
  "key10": "55evNYNUdNcH5iKbQsv2Jxc4b7vRTKYiQLMt7uC7T3zG2CEavWm4RmrPWk9ASVhgrPv5TGF1uMczyE4oC77Cfd3B",
  "key11": "5PoiPEvzMxtq3MxFL19CBzfoTcrm8HbTCRT9ywUkDGVH7KHtzmcbANvhQyE9642aMFDJB1EDFtmDRLVcegqJuXpF",
  "key12": "nTPzxoGiq9CPGdrtrMPCsQYWroyqg5LaNs7tDBx3GcY8YzEXnMBykUJNVxY9yro9dEMRzbDMUK69hDiD9sWpYqj",
  "key13": "5KnMj9rydoRScpG3gaZoeGWgbcnNrCe7cXFnLMPAMVA3nLzkoDp46Phww5vXeGN8ndviV7vzhsooSxHzvMJkK6G1",
  "key14": "5YKMre62uRWwB2NCn43hMgaJcsZomFbeRH5EdnwAy7yqDZq7DeFecqTLKep2YKCZVr4hG7PgFWz6EVyZtdSfMCJW",
  "key15": "4aYbRb4vq9wD49b2AvTvt5p1VsG6Asai44brLJTeo1EqAtvyZ9LcYdRXANoc57QuXEKEFemErLbRBJunixxdF9B3",
  "key16": "26HmipLhuzECaGtmRXvfT3zDumCBcZVJNQ9EoFNR1iEddUqxHCb91iPHXxcuyTJ1DS2EpGh8wSyHAQ3FgUhEyNvW",
  "key17": "vc3GQtGcyjHbE2QekZMDQoyEyibTUs9NR5TFErP6QnmWuLv6SRqm9AWURcgCm5D7qrtMz7bYyZqcaKz1ckTqRGt",
  "key18": "4T9aU7QbASojfc5YbDVPzMs85btnwXN6dbxHreXgw87jw29e9CC96mW5BUZZJgQnq3izKk64ZbueQhLDvguJ9S6o",
  "key19": "611MazRpRhs7YJHG1GdQ7niWUWNz44ncyDEgJ4RQAhVzDCLNLHZgkri7pgZwUQV1vc7qzBdpto5yDTd7CtxWpB6G",
  "key20": "Xsc72orVyPprSmCqNohTtLRhT9q29B7cLnKYKiaCpPBJnfy9wuKANRSGWCe8WCra7GJ2EECnHfFbV4N7Mz7K4N6",
  "key21": "34SfCtdzBty1F8gctfhRFBn7zrPE9nxRQQJ2vY8NNEuNjhiGFTh4NxeqVcjrHpi2U4itXKQVdZJLraCNVJW49Lza",
  "key22": "4Gax1tXs4XmVbTfPgXfNjxF2eEnVKUjb1Utez5oz14HYGH4LdnvbuK8AUrP4deXW6CNea2Zz59uAxmXTNHFP5wWK",
  "key23": "4Vjq9EoAUcimkTPYmmGVeR2WW7HmgxWQq1qQ5JUUypFQucjdrUoRefLK18YHu4YgMLSeWfNY5ErErV4uA48nio3U",
  "key24": "2AejjGsuiJz1fxXjc8xKyFXgRWRd7VwehShtzLzYmfYgKtms6C4f4bVPFR48cnUjLJeGAhz6HgDqAUNUshjwQ9DZ",
  "key25": "5DMtTVb9RdJ6fweYbaxo6NuqQH4sKhwB1vGCd11VrA2AxS7Pfsrmotc2KCTXnmR116zTXXJh1dDufnA5e43sjzmX",
  "key26": "5dcaduGarTCYZGNPeK3a7s2KNva6CkaRK6KRCn1cb7wZmhVGFyvKBEcKZFrPyvZTeevj4DDzanXSkqRg8u29uYs9",
  "key27": "3Hymz3eQ8WvB3YYdBjw6T2QrecUmWX9jEvRR2J3F4ra6fHt5v4wvHGafQaunuHGcKYkiTe57YE2RA4M5xAP8jzye",
  "key28": "TUgsWutDY76a8KT1hSTnZiFvNwcoSDKYtxZ7TMMd1CdsNu3byR4XGPuT92oAdGnFty6vpkCrXVEumGXkgDqPX9z",
  "key29": "2Ama4KDLcx5SK2no6yL4qH62F4wci1ye7Kif8wHx4No5oTHQdS5jpTtKRFpTxeaniygKLyjhxHEP7KEPr5UyvLpx",
  "key30": "25nRbazyqt7iD21MmtvmFMsMX2BJrAJqa67n9mPn2hkkUBsK9x35T5kWn3ozD39ZRQqxg3xmehRzkJgrBwuPPGat",
  "key31": "5AKf25SDy3ysYjZ5PyoYeS97zM8iYCMywzUV22KZAnp2vNtggtFtyzqekqX2eGuhTBqHcVV8dvy3gvLZNdibSwzv",
  "key32": "2G5PgBNEQ3awzW7fWs1bdTaTa2qshFH3BcfaQ3W4qLebTStMSDcFuJTFDfmeG2ks1etB5sE41i2buZ1qCdk4YwJ8",
  "key33": "5uVPkDKgUhw7h629Q7xGFRmmuTyrdKQCVyBqC34cZrQf9z1anScQaXKsuUFcoUGDLY7a2HSYNcK4WRGVkySJFoFm",
  "key34": "2RL5kdxm5p1esy1enSYYoGkqmcT3ECuiq2CRn2QKEUeemuaTLqFLpjKGmeQg37kbKDDzPCkjrqvRxU4S8tzZgCF5",
  "key35": "3cUf1xqAbZs2AM4hU3zNfr7tpdn8f2qM32pNcc7AtxVVrLww2StUmjAjcDpZ7F6WuRFAYCeNXUo8EsNzh26PHGnX",
  "key36": "3NnchT5oqRX8jNQYTPrtSChwH2wzCyV27aivaWCMZzWdHQ86EuBUtWHbV4aj7U9eSXx8Takjrg8JQY4fSsLxS2cV",
  "key37": "3Ku1qeyTDArHRtpiR2iKF6sYxGAR6DFwQDxBSjtYAi2uuoZnqbELmMuBJF8s4GTs81Li6XghVyWEsPw2HYF85jkr",
  "key38": "2wFfZpn98qpt7nBkduttJB2vv2KuXqchVfyLigQC1DHYrJ8wLGyETC4ePQC6FEhVXVhCkH8un2DzYuTQBA7nTbwb",
  "key39": "5VxGPbqjJaskzbe5eDxDLmPdXZosVYtL7MSHG83Fnr9y9oHpP8ynVnDXwKtQx6tNPaNKp8dKM2BPNahbwbhKvNbQ",
  "key40": "5nPJfVNmaThm23S5hxpz6PvDjNzrPYkLcrmcJL6zhsnMCQZJ5ZzCjzZCewYeq7obMNjduuhU4rHdQhSj6bRrh2R6",
  "key41": "3KWxukYN9qZXb3c9pr75F52eTCyqSRnHtiM3LMy53ocL4XFazagUSK857K8BKe2tgK2Deacw5mkr2CdnGGxkDH7f",
  "key42": "5mhmbvZngdBFTQqmPC9gmx96SiqhzcZMak9npopbH4SRVfEZAyDz5w7emKLZC7cAzx49PvGRFE2225DkLLmHUmqf",
  "key43": "2ksudQKqs8m77MCTheGPVfRSVoudqJ3Jy3m9Z6ZQMViJgGQrCL16LQf6SeYAPNqbzcBDFxi9J1KftSBcd2jGbhZ1",
  "key44": "n7RdkPPXLtAwhtrr8CiRTdcwtyKmaWkdRFLP2yLzP4QyLUJ23iMYgGoFjWxQ3EbCQib41tenGSe6eZd43zdzgGH",
  "key45": "4Bn2tyxmknHqLhsqHj2DMKYToNPSBimo2WNGxiyEcxpdC9bqmZNk8kVWADZT2U7GFW1nuHGF2iENpVghCeidY5UH",
  "key46": "3vSbq2dF4CJJtMVcTuJpKj6QYawhQ1WvaRMbBCgXh3B2m23ezqPC4PhLmftYpJd7vHuXoEQLTMSLAHSTSdbN9iy1",
  "key47": "3vBVC8HtcKRouLp3GKNZouDaN4PBpb1AZtF8NaCWrELf8HSvxdtj1E5somBDec18bEhpV97LAq93erX5AY4Ce978"
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
