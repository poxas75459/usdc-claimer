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
    "4DwqHE2NCP3zz1W8Tx1R9g5JEdYw6JdUKFSk89tcuyUG6RWqnSGGrYFSM5GeUZi8hcAtRNx8gT2RWJP8LLYP3yes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVLHMuj6yBQFGMgZ3p8JKL6Jj8KRsKcoeXj6n1BiK75zCCkK4wFGphRDT4YLh74QdhZ7tbMePCHooked9DcMXDq",
  "key1": "fvZeqgv9VKygjTrrCSgnsUwgfDdL4Wix13A5YpXgdj57uptE9VKgxN1JeWSj4M3DSyt8g1RmnMcpv318PPLsScC",
  "key2": "2BiwcoRHGzcc4gnHDoK9TP3oUm6ev3dcvKsdSZsp4Beh1hAEid7WJVbf2RQ39XLLZyvBhoKh7pGDmfM9sJDwbWUj",
  "key3": "5QmqJbsbYn4svS2jd8rQoGTSDyKUbH29gWguDgdK56wjtj49DXJ2SWbGWtMdc5kqA56nEuRqCeJzSRLjVLiJn9uS",
  "key4": "4VGMF4epvgYozEfKS1gAV5XQTxKZt5wxTTyi747JrDJ56EYoCP9Pcps6CPVWdMgAaC1pjBquRGVLd4udRnpAtbQT",
  "key5": "5Xnd8CTqaoLzU2su2DL1qJQQwHtp5oSEC4UuesCVGmT2p8TSQYmzPF5KPfcX2JdBagEDpvJAoD6tQ7PzPJzVM3Mw",
  "key6": "5L1fURGpCc5xrmM69wiSHMogJG2cZdWG5N6QfzrByWBBGRn22VUi1LCdXHPzZZH82AirSgjYoNyG1iTnMntunfcj",
  "key7": "K5oNE7W9SiD2uUZLKviyaBbQGWuCYe2MpLq7Vt5j4ZrE9crZMPPqoZQAYaoNGDxZV7aMhoTwZzx3PkGoCm5aTce",
  "key8": "4d2zuEGk7EuR2q31edwor2v6Pp3ba7NXqBY1yQDffRVa89urYL7GNQPvRQWaqh5Q6QtHPhTHhTibB7oak53pqxAN",
  "key9": "4QfzJxkygZxxUnh1Do7NqyNbgZQbxJxDoYvdn6Md9JqPUHxFEnMcLgTzTWLajPGhMQrafugfKy3WC2kq1kXNZYeF",
  "key10": "3CqUZa1VDebCR6fKW11ESMpsiMFNgzP9c243kwxzPVUCYtnsELpA88b8uRmcciuH3x76hLYHPVhP6zUXLtMwZUBJ",
  "key11": "3sJpg1E8zveNwdeBxaotTDk7ircc86zEAjXi5qZLmoQ1dK99HSML3NetBczKArJ3Kj5CTMP25m3pC3defjP61CZQ",
  "key12": "3UX1sCDugd7x7FQH42knSzToU6DKM1wLUJ54akXg32U29H7hsnJXQtx47ocQJMaBvVvsCLjtHT1qc14fLkU96aHm",
  "key13": "QiswaL51NKH7FNFM5f9Zih4zPMzq9oJKCfaD3rmhYGBK6fbSFCBXbhE8PzGgykhA4NtxcSe3acEVNnDE5TArpS3",
  "key14": "3va3hH94RvjEr3R2F81yYRYkpm85kHsF3DtJnQ5cPF4w8styqwz8Nq9sMekEexbQseSiv4oqxcvqycJNovsLHY7i",
  "key15": "PFaULubRt9bZdcwc4c8QJqQfGiDJzNY2nQEoaMMT41evuGveabXFPvctj1KXMxhTx8FE825wqt6PYk7gPAACP9Z",
  "key16": "2dR6hzijnLFYfVEEkyVx7t4whMHFEijETmFHGbWssLP9Yu7WQZLpRMiHU8MAGi7AWgVoPMzi6GW9n9kAa5GAF3xX",
  "key17": "2B5bCK7uGwiU2HsPBeHUVuUY4Ef4bEWoHHFmC7kRUZZ72gScxTaGRN6avRE8GRn8jv1sXE5DHb97dwgRG1sRvaWp",
  "key18": "5adPKf6pKvL1rk6PrxSXZZTsoCWAgKaZVRytnzV6xMgSw64pK4ojYyoHFG38pzXLXmM2MwRraw4nphpKgk7DZ4GY",
  "key19": "KgP1DtVjCQgh1nzRuN2poyXxuoiUQe27S8D2WJ9ZyzhRPtVW5Sue4HtW5MVrzKwchkxjzY7LCVte79KWSmT45ZL",
  "key20": "5YyoaWgmqo2JWUHnpcEa1mExh8VoTNHiMbu3ZWsVAakdRdqCpsPqyphze9YLTBXpRjasY5S4AHZQ6sHkg72uYSpq",
  "key21": "44HqxEvmDuMbkwSWm4JSiynepns7rGXGcdszQPSwNKobUeXoU51ZEssPeKpzpLm57X5E8vJvPRzNbbrkvSyYe8aM",
  "key22": "2iru1aRShjfQda5qQsZjVconiypHT9yYwvSiuQ96ynnVexypVyDPgYr5E7jJE4KG98zZ7MzwmEy1g3arL9mDFLR5",
  "key23": "3r2Cgq6HuQqwSdtY55xErHNCGvEPBNu4U9YkVgoipvtEgoqnKbNAQGYwZKpYC3CYZbtTFYtggPrNTxujJVDY5x8V",
  "key24": "288xsjTymVCJCai6VXnephoB6d1zbJFWFMf9JHaKESDa32pBxnRQNM8tWU86dSUjpdiq8QzoBqpNuBLSriC66B64",
  "key25": "3dRntPcgDgzyzCVHxE1io4hBvu4wP1Cf7dKXTESTxjdxqJxrNQKKrAf5DfDQ1TQJifdWu9gdKEQ4KrKPATZZFZ9n",
  "key26": "4QwEwNPrwQAJGtrcDBEM69odJjWysPS8yL7XHRVLfX4ufAt9YtH1cskN14JipY57CDbGjA7u7L9DhdGgUDpXGqN1",
  "key27": "5YUG9GKFsVCBMwhNDvJRnbCjXGCE9PVZur55U5cbMQWC1pXMdjMCeqwpHmGEHJAt1n6SZwpZ5oE3F5cRJtaxDa6R",
  "key28": "5BA4qmUD9rru3UKwwd3UvzZoazJ1TyXS5UKKGEqLXGJ3833tF6MugeAmXhTXkgH1pbeFg4yBbJ5EvoEJdr5MLPt2",
  "key29": "49KJXUEBiHqWjMuiU3V7BcDat3H5EyPwdus6RLCxoMtWxwpXG1hCnEU3hL3VQu86MakndfKRZRLGTdzzCkX772uL",
  "key30": "2tCtsuwtXUELbibF4GLsmbmzTtwdFwnnfpYKfE1pJurKKbyMevAVcnkMnDgTdfXENDJm7SCkRBxoPWbq5vKTJpDo",
  "key31": "rHV8KLLinX7zGwzSSMMFyi4hg5y5CwnKadizbcYna66LoqB9kuYeYjfoVDMuDF2c3CwV8jGVvuHqNJuzPkf4XkR",
  "key32": "3SxJPTfSMSaa5i5mnwPFVXEtEGBHvmaq4ssKbUq5V2Gvn2Nn3o9NZYt1FVpkC2eeDK2uz4pTkyN5JHRX8EWjJapy",
  "key33": "2k2E63HD2XVUZGw5n3JXGLZhVPZpNjvTfJmKmZBmbEFHzRRXZuQNvkVLpWF9pUkUQMNFxuPwLnKDaCxwhwqPi5Vj",
  "key34": "56ownRiE8Wz7TeXqcEubXS9CCAud6fhQYfGPihJurR3qKvceym1uJhovVztQYxDurt2eETvKLvKpVwE8kVYxsRjb",
  "key35": "2BSGWNcJHHCQ9o6vHt6pGSkWbpRTVH8rK5F5Y5UZ1M5f9P5y1vJafn6Wf29ump3XdsoR9wySJc99MZtE3bj1Ao41",
  "key36": "3GJE9vfW53Ln1zBUZSSJjc63phCYJmizPGPPc2v1icqqqbm1GWVGiUUWVSiPwNRLnx1R3sWu1CMcWGtDM4wC2V9n",
  "key37": "3F3VBvS4bzQ2rT3o9wMTUjuCUi6eqQ9fhNjGw9j6NMcwZJzQVXFn33MPJzVi43K2BvhivKdDTCkrAjjuhHBLx3vj"
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
