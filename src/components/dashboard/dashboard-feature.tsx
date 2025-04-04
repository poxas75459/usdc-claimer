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
    "2foinkkWs1mnSYmMGDujPCM86nDbJprDwfiUzqFCfCmVqMMVNnf18hPEMWWJE5Hp7JMdFVmsU9aELAtYL3o1SPid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CxWr7W6jw47o79vThD941xpKuCu2n8NBehQdGFm5dYd6PiLEe7R5jufJQDn1azMwUo3ehHnfa4aKn6XQyxHJWbv",
  "key1": "41h5AYJrsw8JhXHP4pv2KZnXbsmibEoZpHnyvdmoiqGT596AS5JnYGPpBdLy7w8H6YFbnhqEAEks1kDrw8Sz2Ef1",
  "key2": "5C5X8yndD2bSgiRfUnCy4qSAZ67cqMMVpBJ2uWzFBDQo4kkKz5TH7Dj6zefUD6AZFWmAuMrfTie4N2Abwc9mvnUZ",
  "key3": "124ARBebDUz6KYGyt4x7yVMwr93Pfmm8L8s7RWVmtavePmgu2XzxgQTMqtEDXb5n8v7qQsT54St7WEAg5SwBSNo6",
  "key4": "3nWk1Ch4m5px93yu62k2zYsyBMwvhJ8FTNaDmh44PVvKY2LnMBHYnbC8ZciCiF2bCxBkdscGMSxfmVRHTvGBigdr",
  "key5": "2X6VP7yKK9jBqajydtz9WJPVrd5os4DmJrjiRoGoQsNzbiq8Cks53cVH3PvTJtiFquvaxXicFG7r2aUL1aanKUrt",
  "key6": "4V1ZP46NaPpayQYw8Uk8ju4Xjh5Hu7cscML3P6ghdjyUHP2woyozb8wogEU1SF9MtWaYU33c9DRK1qQvagW9njMb",
  "key7": "45JQcUuKoQ8DWincE1u2Ps2kfnp6ass3RJT2onipVcAa1U4dDLti8NAP735iQxXzPtrZJVgdqBm5SRG7pEH6Qkpg",
  "key8": "54hSRyiJTN83jD45Vb8pVGWfn5w94dVgvrqe9kXq3JYHXnYFUMMfSoKVNBi6kszzXktbeWtjcYPUxVW6fjCHDSnQ",
  "key9": "3M2HGAbSRE6bVL7XcuzpR2Bvhh6vKk5WY1sPCG3RKWboCHSzMf4WSbBHjGyeJgC7YSgzkuTmiRM2YNf4F5N5ZrTv",
  "key10": "27giWzwA1tJ6eT6RhjencsRu6HQBRhEzsT6WYCYYvewQTkuSVnYNt3WnPeTAVJyVRmYZh3rPbWJDgffVjrw21AFt",
  "key11": "3ejVfU3fk5cerrGs1Sc5LBussh2oX2w9RfmuZQa1cackLJoHvnsGSfNZoHwk6yedgfhjGev1ax1eW7eBxqpLWLZc",
  "key12": "3WQA9bQkpmm29fBL6wCNeLRGAs2pB44vhW2ap6SX8mzavYH1prEqPA6vjF1nMCHc2NRpNVMGZfRsvy9Wjq2jDm2p",
  "key13": "3XvTKcqRrewstscrzowKzwwR1SojqBTA5LDH9qzkQYjKSJ9Dbnnr5GW1g53iKQd58cTRQNG8HQ4FzB3uLA9Ljrbg",
  "key14": "dHVV6XDN14XpxzfHjqqc6x5Tbx3nPbNdL22qotWkwPwdKpAz6vzrEjv2XNCx2pReD3cinKMKP5Y5d7qJADbsEBQ",
  "key15": "3hB2EHGAAfsBfpHYupUJahSp1QAi1iXLKRBJpJ78wpRV6mJrGGjUr4NZuo6oRTFH33mvjSkx2dYHr7PowBDabNAJ",
  "key16": "26NxBM4nzs1SNdFx8EpKaa2wAMVae4KYRUSF9KAXfYpEuXXModxNgpz9cz2Pb7EkX6BBjszD4D75P9ZWinUKzeGx",
  "key17": "3YCfokBb71ntXns5wFMQicJ2D9cG3KTrQ4929A698GKHzYHF2FZgx9rA2aR2hk2yde9SCBY52dJoMre1CWpQTixm",
  "key18": "32Hft1AvKCnsrhWSwYH7ijqxdqAfyEqCJcfPpwS8NqhTQbZEHdf95TtCPg2tv79GxGxp262CYkaLapNpJuqVgWPJ",
  "key19": "3hTDv45wRHvAKyVJhFpyMSfmEJa8bR7dUaQZ5ZFnxcxeJaW2bkKP3dQf2RcCq64DzrssanTMFY7hQMi4sevRTQFH",
  "key20": "Cfzr35jxYfQkgcg1XNgMPjTicSgMP8ApEcBzYzWZdeBjxQp3jYGka4UCWgr1t26wE5khToBefQCpKDJDnCBtRzv",
  "key21": "4Li6qZkg8DMANbyVwZFpsN2S22DLdVF2vqQyjkSdt98kZW1gmc2d2uTepQeTEddp9WEnuctPqiMLpMSaMFDM5q6V",
  "key22": "4TCAG4BP4afUZEQ1ujBVGsfe8ELgBQ34ErVteuXCxNXorV3ex6nggaSYfF5s6y5aKNN8KPShqEixXve4gqd3XKU4",
  "key23": "4aaVsuPn27oqUi8FYmrhKJX1k7bHe3pe3JmEBU2HdsjciYmF8iSVsZUcDvnMWGhNnWpHrJbs5LEmzkjU44QCJTZe",
  "key24": "49oHHwrsJsrq6vfwfChRjt7N4wSG2pNURzBAMPr5AWsrgpSGHFeH5owvybTz2R4o1n6K4BcVQ5eUuQbsAXgRvkMy",
  "key25": "4Vpb5GFJnRTqU7N112jp7Dxp1xE736bQK6M2E3HjiXD9a8CjtGAX4sK2EXEQg3SoSykBTJKacYfYDZiUChiH9WFL",
  "key26": "5zpYt7Vh4PwjBbL6mjKwxU5ZPHFLfxtiwPiLwc3jRhL76UQCH59wnuibdESaytkP34JKihPgqkVnnhbRienK888",
  "key27": "42qJ5fWyvHVVBaVm1sy46pvizB6i5WrnZ2QsGmR4LcgHAPtzwMnoPBrPqHWzLpB46PXvcmVmfgZPoKb8ePVQ7SNT",
  "key28": "xG6CFWzSTSg32RgcuinSENPXCE8ihkS22YDnA8oSQE1yjajSo3Mm5VqLyhwLY8kPP2NJZyjkiDeUBH62orEDHGk",
  "key29": "2pXXTFGd6L5o68aKhmJTF7YgjMTzXfn989tUNCfN9qSUQHHdJE7juDYu8CSABm8BcKxi1zf4ptxYbqkQmBUrELNT",
  "key30": "YR1Xoxash83MUdKjtBm8KXyexepMtEQuGtn1bMMCRdKrRkWBtzUFAQf4bMUjBJWoxaSkx6HkFMM54asTbXXXhrB",
  "key31": "2JMf1CxopdHArcW1Fn5ugEVx25r7bC6y8yZkvCL82eYVy9PV8icP5AsSU3AM7PcHKVQQwZAyKYT47w7R5dU71X7m",
  "key32": "64mA7w2e3aFNE3ZJdfSKMmuG65GMfY3ztSA7yZ8WTdDtubfDPMPfZ6jd1sJ5Asnv2yk97RKC6BqPsaoNpz7ZLJBQ",
  "key33": "2FejNHTZtqtatWY3TMLNg1Xasj4ot4huYwnmx8crfPSEVfCZ9Vu799qRZ8QFVLANfeNgbzLWGRjvU7QGUakSZZrF",
  "key34": "2LUt2CSJVkwhrMvtECFFXuXMa63aSTsJdJtBc851CdtQ9DH5P4qN1wR233E9qqHK6j4xsUCie3TNzyDMkHWQatyr",
  "key35": "5eZtv1XMom6Zu8u4z1PSoTFeDsokpJif7CUCaAvomPp9HzddDfCs4Nw7PXzLvB4VaZ9xZznshfqotxdZHoAFEhTe",
  "key36": "2KMWDfzZNWzGUbfxTcGzzc9GRchm4KSrKD9jLv9DPdAC6oihuucH4b2W4RXZEWhKCzScX6Bycd712UQQfZJF3Lcn",
  "key37": "4j7k5EpkrTMpmQaG7WfVBvMmUk4oAGFfxfK6CSMfdKKJ4gyxRp24GbLmxbwMit7YMbHhTdF7xtzDezV1moaqeLJV",
  "key38": "48ybD7jWLZyGECr1gNFoYqNdaYJFFgX19kmqwT7yTqqFhXexDKjStoE8EjNvErVbUd54kvpHk77WWYnVfhrbQbGP",
  "key39": "WdVuL8PW9ypdkXJ3x1MwhRaEUCpPc2xABppUghpCLbNum7iKwAnXHNnQwpTaBwYg6zi5KoReX29MsZ7kBcSqa4x",
  "key40": "29wMBMsdgCUbDCwRbXKF5rZHq6w36SpHT9j1gXGrWUrLnrvZFabk1veZ1kCZui4kD8ScELzFu7Na1XNXjMaaXAUY",
  "key41": "2fAhb3GM3ze4xWY5CvbpKm2q12wn4bfiwxXWNtY5jxhSL4VfVWKEy1LKyx3GCP46nKYbP8JZbJW3BvNsDF2G421r",
  "key42": "3YdGPAVM65NqutSH64hNXbpNL2fHUyt3euA9kKgHbGB6j3Azx1k7u4vpaMQjJ4tS4f5tbpY3qSiL27EctTcPY7xY",
  "key43": "5thrH7xhw5WdKtuSq2XnDy94vZKTonFe3CbgAyHU7pS5nZN4riAyPu7W2Guk7fSSXuxDjAbcFjwv5d97BgsC2rkn",
  "key44": "2soKHvSYBTm78AfoCqLgwk5PkT9dLU6bCCuYTJp4raWHPRJP94uwDVUHWNN3fA22dLa43rQPYPi6xAD5FzuTUrao",
  "key45": "3rbJf5uaRrw2df9XjvhuRU1EWBkinyyezTciBvatzWu8SJischewiZ3g8GzexGhs4DnQQiSj6na7GKzPbg31khLi",
  "key46": "4RoRKe3DpK84DTy8iKV5rtPsAo9v3hZVpB63ZRJ8eZEXAAK8zPBsSBM7NLH2gMQanjr9zz5aYQx6cYTwvLVC32EQ"
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
