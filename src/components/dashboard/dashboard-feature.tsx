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
    "2YcJDYE6htL83UJtsobCBSkHqdHeyKpwvw765od7RiycfPFxcpdxTaR82ZocJ3jNWDziWt5XqUcMfqnNEsnmnBoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KG6uwhJA9CSM92EsoeKAiwTmbJ9vHD5H97WCaxiXA8iizY6eV7pZWq3SFx5epWNVDq69M4Khh55g2RAnTAMEaBj",
  "key1": "4QagbSqWJSAQ7GvXwrmyNDhF5At1ktxFyky4pXsS4uF38bvehQmgkgAX7ctsTA6qT5gny7AuSgqxsjYB4TesQ4vE",
  "key2": "2UcPxd1p2LL3WS6qTyHrXzpz7bFvgr4HkfmDVQaofgLHsD7XdZ3n4dHX1k6Nw729KHakLe6BB7BEHAop4DBamDKr",
  "key3": "3SFcTC7Vd6YPkwvop4AEPLP5qHiMaSzE8y2LQ96At23mBmWt7a1QCFuYLk6LCYsgyZWQwGwMC4978ah1EuAnmfYz",
  "key4": "3yvy2hHLncGpD4awo9dXZvJhhDij6hw9zpMJgSi8Yp9su5SpeK7FrvUviYZdhv2RxG8tajbMWxmLviwYAeza4zyo",
  "key5": "4zLM8FrDCn2VTdm4JdXvs5pD9RbUq6YcvNbo7ZZ4CKhGTAHgBDoRQiZ672X9cuzmZWpcfb14zVwTpeTsff3YMx6i",
  "key6": "4UwaqJXnADqPqE9p8QNTKKBb859TQ51yC3HSBgSmXK2BnEbfCBEzeCwhpZcLVnkz3L4SMZ4qTL5Tw2R7tXrkD2Yz",
  "key7": "41kwc2hs3Sn2eUety4Mng3q3wqH9vvqAjTDeSxbr2WYVcFUbiDSeWXa536n3v6vgg8Z9WiF8fwsWFXFGdj7xmZPM",
  "key8": "2s2c8Lz1oZzcvqnqgH5JRGntREHfuHxQMiz2A6wVqqtUtAYpnkfhP9QaAd6V6yRAUyzqyvNpHsSLKWJRrScP6h7B",
  "key9": "3ChNBnSssiBWgZ3DsTSXPdH1DW81w3nvgETMd7qg7wYKFpxAjoPpAFF7NyPEnpNGJ3ALfV6S8VE35sYtBoNuC63",
  "key10": "TsFE7ecNsTDYHFG2sp4deQVvbMFX5CJtsptHyx4Rh8m6JNy6eNqi2Vc6FigsimpmVfJQFUJD3WJSiwa1hTajViD",
  "key11": "5pADH1t8Z4V7VVVNLLYeY2B4NsbWmH7D1VP4jmxyUQJWSZNdHbiYi5dyU2LqNPm3g1C6DX8cgNhQGRmpU1n2d5r2",
  "key12": "5zB8W6LqwDv7TEoP1EUrNMZznikcZS3iK4e5ktZYY3fFwV8u8DV2j7Yafu7iaiMVhBgwmVwmBimZRrmGoF8sR1DQ",
  "key13": "xXkNnLFaM1WmerodtS7UKm1KdGvSYnfADBPjJcFe5gWLQaPtRi6AvoE7FV6UrHmrSMo1VMz3EFQTqojakuiwaBh",
  "key14": "2puwNB6w12xPhchX9PtP7hzda3sfgW2wSKzZKfVtRxRox7njEDftoK6aZxeNm3ZVhSERFgiavVB9eJVdwcSC18CW",
  "key15": "reqfsMTRZXUTY8RYhz4kWLNYoZfBw2kK2ruK589aqsiGhSx5yZtQqbocyFD8f6PcA3CwC9buzCsV5ZqSiB73JAN",
  "key16": "2vpjj9ivntTkYdZ3FT5F1MgLjxioLLCfJdnSn6uJQBchbeLwDQB7mLrv417hU5rzYzyomp8ZFZTNxrKJxUGBTbgD",
  "key17": "2zLzwYn4ETMjJXTErpWeeFxv3t77DHEMSeAyk7N8tQQA8oz15kQGxP4aFW1hjPCKcrgseJcjXH1A15eGg1NPdjBk",
  "key18": "WejqmD2Mo4JNtZhqZmPrPKJtpYP22EZ6L4HyRFLPjYUCQzs4dyo121dFQjUtVGmBKNwbBZz5HCLzWGPBm4VZwEX",
  "key19": "3bLBsz6AVVmRBa4wZ42KgmGpu8uXiq4hDV11FPqsBfPvTGKJTzREheqRRw68HDbfvo2uhT4ccrsWmTdtBHqpUsh7",
  "key20": "58etBhL96wxkJTufNzomb6DZzvgsXr7QS7ghK7VANKcgdt1gmnHewK8jGKJxY9qM5V3HzXWLAVPDzqjEFiU2vbR7",
  "key21": "5CsL1oBg1FTZWehRtiMZ61zv1Jqz9qKsTDwKGyc3svJcFpsmS5u1YKHCgrofrAyVQdycJFfnJR4ayku8Pmd6pis5",
  "key22": "53JR3FCLisQiLq6hMKybeQTBGuU7kA24rGdxDT2X5JEjebdAK4rxcmu2jkdrmxSmEoRYi2S67Yi3Up6FgpYXrhT1",
  "key23": "3MXETAR7hN68KjjZT3etnnUQTVEgRXRLaUEVUea26zfKeBFpuBwLLUigmBSCymo2xPDev5r6zZkzPRUTF2iVYWVz",
  "key24": "hrwrNxFMyFjXeNUHUWdL29T1swZKrhnKCRodkksWVdgNYJCg8137St8SFZ87fQXK86nRNGsYfEh1KfF375XkrdH",
  "key25": "5mAvSpmnTxsBBC4tzncYaxmi8Ns6By5xchRNz7beJyzLGzpCyQqBP6qb3pKXunPppB3WceVFAhX3L9szaLPNn27a",
  "key26": "5m4gWEzxi6ztveWF9i7D7JBnxN2yRjcuVz8PijbBXxRKpw4A1f4Wkbv95TVFqvEGhpaTzLnKjChUmbFfY65m4hYq",
  "key27": "aAtGobKeakU6cW5HaM57Jry1pFvyY2zJRvL3ExyXGWyoQbSL8XfTBBHGN2xZF2ojtZSQfkoxT2DgjN8N6YcEMsR",
  "key28": "5auMxwqBwc7rfg9s9NRttogUYah1FFf5BGXbrVxqQFojenYEBdgqMkKUuR9Z5rPCRjZhnkJZJvfcXJsudTxGpZKP",
  "key29": "5A6yLX53VLQBrcXjR9hexy2XEYXsset6ozFx7UMmaHQtdZC1EGh3DAqyiJd5C1s3mbet3WcLhojs5nnZYftpPuMv",
  "key30": "GcvRTzdWbZ7zAPr3UZDqUzw6YbPK67H6VJ6Vug3o9rwqDakm79nzudndFJyytghQi3PK4WqED1UqonsRLdXjsgQ",
  "key31": "5h7UJJZ1eqU56J1ywpkNQ985epwDj7NPbdnFTXJ6cmows1USF4vhnDFXQXGZ54e16fDozUZGn5bdBaMXSYN6atAM",
  "key32": "4m5ygtahr7tuSnMptBu55NoZG5VKH5tLWDor5QTNWpBimiY3uqRSsx1BvHArKEAUkfpypf5jKq1hiKogU4V1osrt",
  "key33": "3qjMYPA9AXtpt49giU2WmHy9XDmXB9VHQrr3JkP6mhWUdpLVvvUaifSBDRUX8J3cg1mXTH5cAX4DN5nAKouY5oHJ",
  "key34": "o9o6ocnTF4dsFWa5UdKKu3Bt2fddentF8QPtxwSwJ1yzB3WVZ994zVu9qgNV1YKbqTCWRKQB2FREW2pvnQ4S9C8",
  "key35": "dVr3poToBENek4FA1rq6E2FeZA8xCRSoDFSkVXn6o1zy9xTktSmZZqLG4sJA4xLKtdsyRVsgg4jNNMzQmbHMoGb",
  "key36": "d6yE1iboemLSt79yjofCM52fvYhLGFRPjuWMZqdga4exvTAtsmSUnVFVcddRv3hosTBrcRFAEcbiVKRfuD4peGi",
  "key37": "4Jhw4rSWgPuFTaPFNXkRPxUhfT497z3v7282GYKAixkF3M7RQr3opVzwZMfqzkGujJ6kdBsVWeq6H8mYhMyVBsHA",
  "key38": "3SmfFna25F2GfoCqxnpsTTMwirEFoMNrz4anMRorbhKEst3tMePsCUWJgZiR9cU3UNANVYRyFxC5E1Sr92Gd7p7L",
  "key39": "2himrzC38XtbAksyDi67ruiKH2wQizLuiZWarBYaweEGixNCm6e16oG9fRvScXFyLtM21nTMfB6yETNNZM2nunAD",
  "key40": "LfW7h48YXu6h6DKgzpFEsgikv9WeCzpFpKMYPJ66SyDLbK3nFikswgsvrzHA27fQUzd85iA9QrsoE5cettD6GWi",
  "key41": "n6W5wNPq5N5wkDKSrWYZDEcBATb9yjkNHnb6bhcKR1VQYhSj21WNo77PCdR6hGrFYUsaa8z68ZZwf3o2DvKhsFY",
  "key42": "454jZ5syKgQwuLyL6FPMSLoiXqsQZCv3WGwcMBL5NRb4JZJZEZRATrvnMkuN5sA24im38BpinCSKu5Cg9jHZVXu1",
  "key43": "5vQSECzTDKcxdetdCaAZjNZTQikUQDT7vCYWyzjn3eVvKLPaAjB6wZpHU9B5y354unURnPhJpuMaUaPGHokUR8eZ",
  "key44": "4HqmLQ3GDDwxyHsuV9JhFqGCneb8TjTTVqC2vBytn2EAQhVvV6F18kHw24beEEjAcmknYxZE1PuKeAjRbrgPV6nt",
  "key45": "3j4NtkhVFxfhmSafoVtW83YoNvUdMppSSrm6Qhb3fyhChLodzFEeH5HKAEyZQqS8mKQsDi6E4HfmyGz9AiPbWMHs",
  "key46": "28PwwRCihcTfsWSp6pZjwcQ2YUhKTTfwXdei9kKHgRLwbuLyKdr5fxVQe3MdWEfc7Mb5nAxjkqj6SBQYVEj5MjMW",
  "key47": "4jFTXvTJN3FYYY67qvBSfXMYeJDRLu7pt6XDDV5F67WA7v4VsfYRRhvhYjwDEhF5QJoF8Ec9QBFjY2xh8bw9NVsf",
  "key48": "54PYZXBoX6YQEnTUnJEkCvjZd5gq4T3X18v5FjeLjS6qXTCVTXvBnmmVGphwfxTkPtWAESZR1Bgh1TXPQKArzrrQ"
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
