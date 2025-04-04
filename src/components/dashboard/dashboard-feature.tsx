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
    "54srCXnBHA1Fz1JaGtbpNpuXedKDYkbgFuoxvjBREKdRj5G6XHEdFVTAxRWb4zfHiEStKiy19h62xE53ZNw6FicD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38o1Ds89XPxedPrwPAkVM1nGkgXDnKpmQVcRNQFioraXyPHZd71BTc8YDU7gsqhHeWtmtEzvPGSCr88mmGiHTqZC",
  "key1": "sV6wGdp7pwWgjDSrnWc15qRtp3eM2mc3AQMHmAkhwnS1VLT6LVckSxSe2knuuR5omV4sz1g5aurAxX5j4QtPRu4",
  "key2": "4oC2utBYSRtvmdWivx8AxZMXULe18aTp5zH7AbFYybeHx4LHRH2Y2N7yqaCenZt6XcK7du7zhFR99sRsbVoctewK",
  "key3": "3kFDUvSyd4KY9VHm3yn8o6jT47f8rhF6TdUUTMSnY5m38APo92av515TeBWrtQ3tW1tuzBUxfcHvzkaFAoAFwJpR",
  "key4": "2BLfa9N9VTztJ4dcMpQoUn3WwKU6YjW6Qs42XE2XdTNhKULECWAFAYmfkT8DwsHKD8sqk9v8wbfWyAvL7QVePWRH",
  "key5": "31Z8PgH51YZaTDhTHAfkLjFMxU8WqSiKVvo6kBGzns398qwCokfnKLjDT7WVDFtaUk7ZUmmm26CVf95a6C384nC2",
  "key6": "22rTmzsHrLcGWZ831UQwdR6ZywHmTYDmZKwWRRDhMkp2uA6RY4ksKv6cF2ikQhF9jtTFP6Yiuw4AE5PCZMcogUXt",
  "key7": "5MAoxJfazyUcnf9Fa9NjcbRstTVV9KUUZt1u85PJyGWUhKsq1N4Svwfto2G36LyuboVScjNnAr6QeYLn7tBzGE8k",
  "key8": "51offPoWYVZXU2nUA2RjpgKAeauNcxJ4AET1zYHPCf4g2G2Mg5SoRLTv7Hy47giBCYDZYnWbsXSTZvQM6FoT3y5c",
  "key9": "f5343XUxKsioebdqvHDMxAT2vxpp7Gp5psMNYeu7rqvFBmijD4vofr1iKxrbKk5oHVyvikXEgx8Tih7qqSbHgKj",
  "key10": "dvxMh3GnT857idVvxAnCPUc6r8mJ3CXa1T2zbotzv4PSGt1di168jN4oTpVuPoRpNRGhKpGjPM3YPGqMR17ZkHW",
  "key11": "4ASZPx1Y2ne3n3MHcagSrMj4RTme45LXktFCq2iDmS3fRk6TDuNjeeaQhhLZtp3ZmQW5mn2sCmEg5bTbAxHbCLtf",
  "key12": "27yhSKbhydjnb7HiJyNfEJGE5cxU4go8Yj3EE99CU8TpmdHds6TpkuHLSMjsoD4EwWhUkGwwvjmEQhPWcV7Wopd3",
  "key13": "2S9Jzia9xtXx3FsygkPxoj6K7okk44woJCefat9uuccYH8PuirzsmMyyYLDRAyLvHen1EovaFJHrhdP7aZVUjMU6",
  "key14": "2bagTLuaB7453YuTwEgecKSxm2fs7qtgbsjxWdhmg7XDV8sQE4mihnxAk8jrb3uP93v3WcLUBTwzvGxqUaXdCa3M",
  "key15": "2rPhSie65BFR6cwggrgA9byiH3oB4LfYFY1H9DiwuNPj1KdAZi69QhD7KGyRtepfceGEAK88o9HDe429C61ZvRN9",
  "key16": "C5Rh7HUhSkDA6kyzdyTA6LVFHBXi15CseGM4eAhc5L9QAUSSrHBRGvtGgEKbJ8zJMcecmVevFekPanUAiRWECoY",
  "key17": "MqyQoQovVKqf2nMig4gmbRRjM8PgceX5Vt5cS8nzzMUaUbSdAxQmUMaxkhbpECbowp6a9EmFtbcp5qXHA49uUxQ",
  "key18": "4gi7mt91UbHYbof3Fv1QxnkGB8XNDvLX4BvMx72Xd3M1kT1BNUJSneSXSERDMG7YBmYwwK5AUiDbifcpHyhJndF3",
  "key19": "5PWUgfa4ZsEgbKcnj26rLRjixwQ4Rcu77FDuv6hBkptPk7woQ1Xj8a1HavV8L9VkV13NQyUyw9n51FAo7wnSwUxD",
  "key20": "5N8HdRZHcqrJAw8UaV3gaEVU7kd8BuWhHecdVHybY6am9nwJLZZamkfAeXK4PnNnFAwfTYzREHuGp7SfnXdVRGFa",
  "key21": "2WMFnDSLESjF86ftHnsxKJpcnKzamVCLwoNUgvkyh7P8uAnkdStPpw1o9Feg23UynVXHtDahzFk48NPNL8UdMQwK",
  "key22": "4z4CGjgXQ7deVBCKHhi3iCw5Ef4oiK5PPQqKuW17ynWm547ogQP4QScaTfd7RskgT4yPWQ18F2QiXypQtqCCXmMD",
  "key23": "5seq4q3Cy6R6bp5dqvwMbvhidzNq64KE8y5SKZWSLKVVGe3wgsVetQZubfttFvo3vGCoJqHKXFGUfLyiRis2UmjS",
  "key24": "5Ueg8fcFKqf5SiTMhQqkstGooVp6XN1TqRYrn7Ve3Dw7vheBwWk7xJX8dr3hCnCtm7WnYLy2W4YMNegGyqs6kdGp",
  "key25": "412CJWU2xbtiH3tmKFeECqW9F2BmNHsNrpF8MEUwPDL2fC8Ud8e7U3TiYeg48YZbdDtquuAHxifNmJi1nEvyPA7p",
  "key26": "4fAp4tsAxdfuJXZyJyn6BPN3hkoYRULmVdXUEBFy3CtG4sF5C5wfDocZC6rDA5NppWZDTpGaz4wdQzpAHCYWfv2t",
  "key27": "5CtqWwisbbNY3SoAS7QZDu7dXgdhskCHnM5mvW5sQmDpdbzPhUMB6goWqSS5H1jvbNxa7QkyCrsFeaMgzsJQpd2N",
  "key28": "5B4FRTvdpJGiLEqUEbmPGgub5KhyamoF1xUtb4zxUQ7TB1kfmvxP8A2WVEVFqr6Cc6dieKHFLS8ETmh8MXoMFjQZ",
  "key29": "3uXX62jv8noAT6Y49DvitRGawXWhV4U8NmT8ScUo3jWSusqpuurk8YAXi8rMtTdyZ6k38tEKcqhJf6HWKzbK9XqZ",
  "key30": "4ArSTDVNNo61smpkeED1mYv6eukFZszDkCsUm4u9yRB7qBzSUiaWh1EM3JRYkXFHt19HXoZK264rv3Mu2bnMTMKo",
  "key31": "2p7iJSAuroMp9yrWKbkyhDgeRBS4K8cbRDVJZb4cJVmrMXseERjhCHVqSBSipqRDFPKRWAgof8AEN1YW8vJdfZRS",
  "key32": "2no9gYFM6UmgPAKm2RFuzeaNSHvKQXz1gLrbeRnoMhbPaoLPBRP6UfiRpkk7VxGT3gcnUcTkqxipLTF3fBfXk2hh",
  "key33": "33m3DF6xtrAPL8kyCUK78GTnMHjnRyy2X44oCUKToCqoN1JAGoUpEYJJc45eQnJkP63bhAazNgDVgAGegpuEFXG8",
  "key34": "57e9e2gJ4NfFRw31uBSRvqLsEPf1P8TxEHzTLoJmnV5ZGJw7ZPXMtmrjo71xLQw6WfqXCRG5PwPWc3GWbNqFTxQZ",
  "key35": "2vN5WQDUKRU6Q8gquwsSYMxkAM1hT1GqHnN8oCFN6qoJBHYeQZwuUQxKupcV9BZ2y4K3xpmyC5ks4QN83zrrpa9J",
  "key36": "kHFd1eakGuLgVqHQyp2bWU9YhZWoqM4C9wMq4jaQVpbTpeKsThSTs64f7oYypSdgg2iLz5FDD6gT4Jx6sWoBpHw",
  "key37": "HpUTsou9mvMCcuYNdmfrARq9tVMd749FpCAVGrRdwREfWJJ9xusgmWViVpnhkAwR3xHvaC4oR99KR2qxpZbLFcP",
  "key38": "2UCis6EGGVzKLGevL7Sv8CY5o3vTcPtv1FJwBdRdhLvFWkQRCTdBaeec8v8PWbDngEgu6eifcaLsYXu787ogkYpM",
  "key39": "3vjXwRfsg7TtCz8vqLE1gsLij9FabkqHNMo4PGim37H7EZGHLLR4u3jd1PNZ6BTG6PGWWDS3bYzVqdzuWJFntsTF",
  "key40": "5Ez9whBhpy8Tqixi1GvF6ox58wwAummogtrpEsynMrtBp3eiZNyKEahS9DUifHVjAntj7VaesTvKibNkf8oniB52",
  "key41": "3SoJtZd8ojuTRTzeVVk46gSXKWvvwt8wYkMQm6mgDEBr54NVta3sk4hhJHZHa9eNEd3Jf9Po5bH68uCFumRhC4y8",
  "key42": "2rZGPqxV4ckxBjVwQdoZFPGZYd9w2euuxjxGWdXcLAmDYHNVqkdfpYEBjuc7dkXE5Tjr3fd9tv2dHCBmPDqgiLGz",
  "key43": "pmfGVn91MG3DkdwRJBFChWoNYT78p3vC56bXw6krXqXMPKWf2PkeqfsREhHhgEqecfwGLDriT2487MKLYVbSTAg",
  "key44": "4kHAJKRG8aL4uTftCSkiJJDaLyXcFsmVWFqB1eNiN1kYZi5xETrQydygd3REG1m8CbLd1A7f4zejGXo1ZkaApmWW",
  "key45": "c6AdQtUaXxjiDSE5L4RLU6DKvE9zkXBtVbzPfr7Yai7gdj7C4WRnvrwGNiKjVQCZeZjUmAFsfQKtLqjajkuBuWf",
  "key46": "4ZrYr84qhEZZsi6voYwcXTtu2HSGvXuJEV4CuuZ6dobwHZhKJnZdvaqMfs3jbWGRXKbGWBj2ogrxhCbPGo1h3wdk",
  "key47": "4FChj3e3YSB5r6We5UsLKhFG7cUnBcs1ijD8zqRZGuhptvyT3Wf6mLM23i2i55cVDzUFMX8yoR5vGUKsx8xhnRkL",
  "key48": "3gg646pmu6Rkx1NiWvnnQZ3ANwyzEQmFfJyHQZt1uuv7QYT56X8Fw27bQcwS8maG9wqQvqdEwbha5uHBZUPXAJsk",
  "key49": "jxLmsLhSfs5ZoT5SsxkaUCByaGMZYkhYq5M7JLpVVrttDrNiyxxRQJSsC6j2kN65KA6eTq7XjeSVxazFXB7LxTm"
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
