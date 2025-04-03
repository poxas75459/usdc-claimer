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
    "4JfsPC1LocYRUoQPyjXp84UJB3mNSXFuexu8ZCeNvK9JDpCbGimBnpeZB48QqxitC9gPNzykSzQFuAws9Hw8cs8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJ2ei2Fm2HGttuPc4j5XdXR9Xsf2r6JxH8a221aXaULtEXxsCwe3YMyJ6jVWPSzP8uf6eZD759ZBrRS8T1aEovx",
  "key1": "2Yh5juys6cjweiLjwnXK3QSXtpz9WV9oMq51Q8HNne1axDDmaiXnKGrkM2ojRqMLhwcxDL69DaFeeCf9rQdRsGtc",
  "key2": "4DCKXqYnF3ngCigTcd2tJiX8jortqJGxi29TnwUQQWW6bqj7HECWJwEn7LSmrChqrrQfj4MeMn3HTvNcz8SrR8z7",
  "key3": "3cYR8bhj3v7H1R5LpcnBR3a6pXwYmydR4GzCryAN37xUwccCN97ydF4VCa8MoXP3rYahEvUieiLsoctXcLHi8Bhb",
  "key4": "5dhtQbePtbrgUy7Zhyj747HPeyAXdSYGVHLHqeczd5iR76jmo8BPrsn45CqJake8jsRmY98JTEBMKotjfEMzuBSZ",
  "key5": "2Nk5RMSYtLC51y73zFrmvrCqQuKpmnutZGvwggoCmwUsK6SA35Hvbspej3Q1GLZtTktDDdeeVycceuDQCtR2BKQ9",
  "key6": "3GL9VnZaAMhPDSwtP6ZhdCfLjZ2xH5KpvmH1XZsFVQSikQa7SLAjjy2gQannv6GzZ4SiaBymhHevUZTM6aGdqNyp",
  "key7": "Y8YdePVENPsevkWwJcCFnZnLxqTaTAKHTq5jF7Ncr2dwAhZfrJose2Zm6h8qi2PaoerfVLjbQ8Kq8YCTb4tfUxG",
  "key8": "5yfegoUiRTfAHAxXNmuCWvEBaVUyLkFtbdXPPLWKJu8TL7PhPBufNDgWanTtaZ1HbyU8PsAj1g87TfpbWWUitrRo",
  "key9": "3LP9JYkjxhNPKCj1Gq4vToXjrNonUovjQTH21ZAxMprrZhdo7NAfNKmsVcVxbu9vuVdQ1Zg51fXQ8P9rDh4mPn9o",
  "key10": "vJCWw3Y9Hc53G2mzuf7TegJniKsSk3NRWLLac3AHEQkdciCWs1XGVGyMuxm2LpNY1X4P44oi2Z5FkvK42dCU3by",
  "key11": "3W2hGzj8PnTpsx5iCKT71bn8tRUpEpoqRUP2iUQStbRubjjzMsxkPWJoCb7uqWnYjogh3BoQ8QLK1QsEcJcgjrP6",
  "key12": "4raxZbmLmHJkH5AKK6JEr7u8fACRAvqYvdJmYXVLmBM5BPYqtJE9jPPnnuekHHn73L2oN4XMuRxzzgwbFSJNZKK7",
  "key13": "3hsnLHeJoRRXsyVckQ4YLBiEna84SEo48o5deYnYba4UUDJiEwjZQ48XLN9xdqxkfzT6fqBqAV9WxNB881igaTt3",
  "key14": "5WsFGVDDY6MC11NWwPRpXKJp8V71Pa39ttNqpbPXMnDtCAQeUMYMHUMTfjHTP3rKPmUmX2oX4KtTa8f9Cug2m45M",
  "key15": "49bWELptbw5DnbqDY7qySvitNy2oi23Qico52FJcGXa9C4KJismsgy6wiP8cEyNmkkE9Tm5mea5ReyzYd281t8eZ",
  "key16": "2nRpPkHpwjGHpLM1jekz1rKkJy6EKfuyrTZJ81N4A1PJDEnLnRZbgj5ixvwPdWM4s2jKpVcVus8puxF24Xp1a76x",
  "key17": "3U91DQs8nvSRUEPdFkWJYqCmYMXKPyCTWPDUUKWiQdG5hTYZqLWaUsxRWSgeYPTuZqDq9CaTMPumhtPRmYsNsX7T",
  "key18": "5rsPTjMjhpiNuMqUyufQfHpD6gHVZCF7Fw5zjLqfKPsN6R1acRndxSGxCT5J2EVSv1J65fh8egjKLQKk8EXyErJG",
  "key19": "3K5ndFkhTheWVycRtDRaFb465KXicXGXdtpJdFq1DR6SVAADv7JFzasEn3zy7kYU8VnogHJqPwW17QKag4uR6ZHn",
  "key20": "4MeTvrSWUUFuFasWBaeyb1ZkwMPUv8hbBjMeuttmmDo7DTWw2WURTsRMv3RWhXf4t3pfgmfrhrmYnVFVsJ4Mg7bZ",
  "key21": "2ZPewvLz8jKp3DmKg62zN1vPteq95ensoX6T54gHfygzn15XiucdBcDv13scJ89MNf35JYEbhvkUFALjLNKnH4Em",
  "key22": "5SSaan7TFYMsLZzVc6pjqXBALZiGSfEvRWWCodkYgq9M3E2GLrabtASbg5jrmjbsntyDKHu9HXjDiN7wGUg7o7Qc",
  "key23": "5RWNWe3iW6cXbogEbnaUZCzXHbx16deMmWHGgRNkQU4yMTePHokU3Avc5vSxvZvWj4fqP62Dr82u2VRyzQsJEvBo",
  "key24": "32m5wbukSuLsiPAks831QbMYGh5XypvzkzNsvt3GhBJQTwC25iuPdsSZCoMVb1KPebbyUqCBxqP5M6gSdGrtXFpH",
  "key25": "3PghARomCMXnBJxXM9AzdWinSDzwhR7kquViLWBbw3REyxAUP6vweSWkGzu45WDXAjQAGGLN1RenhoXFhPM8NDDf",
  "key26": "LqcYsnQxnpUhxH7n1orhK4Q4mM4asR7mNQ11wdyHBEwgRbDbDRNYK3ZbnvQzY9FcNfsT5RdrU6qv8vXJDPbtpL1",
  "key27": "3YA7HhabvABQPC6Tm9TpS7FmduwAGTjenLCXQXEDpnBi4m4AdGsJeJwbUkv9MkGXWUJp7gNQWnSa92oWFRqnMtpY",
  "key28": "48ZpKRjV3p8uDomfWGRkoGktDWvqHeaJerQL6zcjUFRv6cZ919CG4mrBdtMzuQrsqZ1rvC2Zk1V9R3uCX5USSFfs",
  "key29": "3vgbtN3vRfbz2UY7uvD88JkBQDZwxXk9XsfNfCdFzsF4oY2mcak11pbTmebZn9WD8xoc13Zs8RX8BJNdzoX8AHqh",
  "key30": "4ns8mUvBZzw51B2z9VrjLnt2ZhMR4wCNZUAWUZfLNMw7a5UHkjJ77jJPte2XERVndQtEx4XGmeLQP3zxcVunRh66",
  "key31": "4zb1B7CBBxYxEz8hepsbcBvK2PChjdoAg5tnU18YSzVVj83z7wBkq9CA1pWM9YTetykPQLKzLaTtmvoSiHcoLU9z",
  "key32": "3zCQDFm4z8wR18yrHbz6E4t2AaosjFiajZTbC9rqvZCs6vgUQP2Doqojcm51TmeVwVNgQjQFbPtATbcTjczECSoJ",
  "key33": "5AceqEsHuzYjnJH14ribuPiuMCRrANshyezyqJim1U5QgkYTf8AtMg2hCfsiMRZJXakYM9ej5ke91TGkMyUyTU7L",
  "key34": "pRCWYtUWgdiZ9d42Jir6Nk4ufPeG3iBVaQwE3NwYWuvEDSDhPTzdpXKf6BEhMNo4NiLtEaHqPxQYpz6YjoYKYy4",
  "key35": "2LHSCD9zHWxSLTMKE28jQ2qwu82rJ2CcdL8cUZwUVCHwTptx8oQt9ShHSZMvxB2UYoR8tMFLw9YLnyLQewCqExxe",
  "key36": "4ewUbRK8UG46GERdZ4wd88QeZg7hPb65FRnGXJnm2QbvHmoTMTo5HRLW2fFzC7bSy71VvQW8fpgNR3KGsABQAebC",
  "key37": "4VWK2Wfv6VbWmhPsAxoq6fT6NHeNV91WkuYhiAH6KgKLAoYR1hmgE9eDEnGYHCrpNLawNgMri62qrjVra3HNTSUG",
  "key38": "5X97SHqScqA4QFYGNmEabQg9eELGCtJvEZyfqzfPwMEUcEvNdQEt1DsVNCYd8QEUvZ6ZzpWDueLLYoBmQkjKvtCC",
  "key39": "3xgh5pv7pGtdGeq1jA6T6VoxWQ5TkGkXUzdzx25ZWRvMxg5w3SCqm3WfjngrppSqPadEE5DZgWJ3F2HNizxDhRTy",
  "key40": "3R1KyEP3rvWm7DCrY6wSwRwcmxVJA1bBLDdHmZGaraLcEvPfTHvRw9Jh8h7W345wpA4iH3xjZsytwL7tvZPiRHzX",
  "key41": "yXqQ1DRj8Lcorg5ZAqmXP8JD53cgcQYEZY1n73VWRvYVqy492yJUr23hKKm4VgTcMtWEUongfvPWhFdKeZPFeVu",
  "key42": "5iKDgKbpsxswnrQKX8h84krfxMDrrSidCUkCQJNVioK5snSfA61M1ZZnBe76TZFmMzNjoD57ZoUor9FQvZ2B1goe",
  "key43": "47gmRaQHus5NvLV9uUGc8LYEDSd5ZVrieV4K2XzfbNUFgwhSDSWwtMzExtEYFYL3jdPNmmyqTsX7SdQWSb8sBitC",
  "key44": "NdzSQiCktfJBDkHQjgJefACic4d2tqGPsSXFNg42Kpk1SeLzvwm3YvvNHKE2uuy3iY55AoNgJgFG9H8RzJ6Avsn",
  "key45": "55QrULCCV8oXxrgSZFYmw6rP7BUcccUswCqXuQUk5hmgGdoaRzFgTN4Zb46zZqFhvEa7PfBbNCKP63A3zbCT41uW",
  "key46": "54PY7coRd7o1aX1e4DftPn7BtBWdbZ9zvDhrJrjU1XYJi8TLusx7QpHzZc4xM6RpQh32L2YCwsa2QxGvqsAGyYjg",
  "key47": "Db1zBkBBSwcoQTQeXm9rpAmE6Dcc73BwBfh6WDqRevv4xUKqcGhxVZRr2j1DgZ8An58Vibm1fwRFocJRwvxTt9L",
  "key48": "2HfwAPGdLm9v6yUbXCzy8rjUXdnNDaBvRRHUMRqTaBvXnMA2HssJuN9MUMiGE6MAb1AwGmh1kjxPUsitNZwnnetw"
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
