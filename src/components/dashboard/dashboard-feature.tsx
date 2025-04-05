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
    "3Bksb5Z5Hr8zzZNhmaGf4A1wSYjgg4gEXyccKPd8bNWbwFtdTspN7CRQy12wadeATf5CfrTVAs3KrsxGoZ9EpQBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YrTpyTRX3DjmPw6huQSmhHAfybkGCJsUKwHSEeBh3PPwqTBqUpH4fhYAvztSLJFpsEhgsRXvqQTWLUWTy5mMxL",
  "key1": "5a1qn8F4nEgCJiLN6Vx8RqFYzk9N77BahVDSi9VgUS4GNJJE6MpNsBasEZS2wBJFmAcHtaYMWZFeXnQCJeSmdwx2",
  "key2": "31hsCbmMaWjZXChUWH79sxYUwntmvqtmpC3QRrdNzBzisxPq5DTNAWD35Pyd9RoiDZqkUkCgvcBeEhjB155Lpms9",
  "key3": "2FzW5AegPMZ6Qx8jTXgQY5c3y6hsG6ZJXLo4NrnYrp1hkUGYufadAyY8ahs7SU4NaTNLD5zsWk5ynS4697TDZEuh",
  "key4": "4FgSpUP7HeHfmRz36X1rfQeGfnD3MH1J1keknZVX9hRbouuxqNjhVvjZSMizwtXcuBCAuuaVGXPaU7HxQELtHaka",
  "key5": "42fsya3ESrGTMzpXRxYA8Q88F2EW24vt3VRRaeXdbqh9vx8frixW5L9qbUDgbRLfd4h1qH7BkTzZQ9JNQjX2snyw",
  "key6": "4SSb32fqeK3gsX4ivAWuBewcGqFi6hYKM4XQ4j6Aq86ja8MCK9uYkHMefJ4pSvaXGjyzF5KwAx6YvFEA8Xfo4UoP",
  "key7": "3eM97NGKa3tjBoTsdyMe62FFYVKEfYgvHBf3Z3RtXLZbSatYMCoxCFCkUz9NcugxnJiGPJVURUCPn5uALoR6fnKW",
  "key8": "3776SqqYkRbjkrHEtcnfMctdo3Fx4MgmcFdasP5GboygasbczkF8B7XDk56dwEsRdedhqBY2qBiGsjojPz8St1eo",
  "key9": "2jkYNZbDFYngXFNaHqW4KvygQVUPYRBiWcNaTVsPEvVTfcd21DYZBfL5sa1cmPHqiUcm5aTy75ebTpDBXRB1mhhM",
  "key10": "gzv34YVHTzUiYUvHm2dq7CoyTjPy2fFm57Rh3Qra5gigksx7SfAktgkjhVdvkUdWdxWArFKSrw2SBAfp519T7S8",
  "key11": "4Co45Qc1xrbcpV2WBUdnr2351GS6KTf6TU7XpRWNXRpmhE261wGtjsmesPn6QhrXT88euaNY8HvwohtqaVD9seX9",
  "key12": "436yGqkg5tD3cAaoVpzx7mhQXFJXaeWjgAWkrrsqFYMeFukYVY826MEtf3jXoFtpZYz1TDXn8cnZqk8XWAKRoJt7",
  "key13": "4PnUq86eVHmtZaV6tHjwGQiKzjSED8qecb9BYmRtwLCqMwTfiF5pkNXDMHNmvovMPT8Ht3jxWqbyL9hcPGW3ivcP",
  "key14": "4RPMqTb9KCTx5iTtK2JdG4UWn9CdmfSzxqSqD3yvNnk8mBpSGKi8sk1uYHhRSjM81Dxaadtu5hT6eKLH32noGGdF",
  "key15": "5tWqBn96nLV3AhcV9rjK2tjn3yb4jPTqHqSe8euDRYKrsDzSris93J7J55xJkgAz9DHiSdtX7rsXccR1rBsmtQNf",
  "key16": "5X2cA5pqTKEAcqxisof84CpEbaFUMdUXPTckPufEHtZXyc5z1rhGn6FqHo9UR9Ph7VaP63BuBf9AUadT1UAyEg5h",
  "key17": "5w9FDUXpGq8cySkkEi9QurGd6vMAdsTRodoX28cKCUVt8bvDGgz1ETXGwQ9vgLcV2RHMsEZNWJHDtvzHyijcjeZJ",
  "key18": "4NqJ5MV7dYzvHLin2YNeNWFWL7LxMmGkK2R1Zo8KbFdUbu4YJ4632n9PTTJGR69Quzv8buFzHZiaGLBnGX7Jadas",
  "key19": "2Hozmh6RNkBnCGLmQwnernRrLxFS1dfcc2r7CDq1wBHptgvTKgQLT7ZEgYBQ7AMpBdweRrUbsu1Z4Bi4gS9wKeWZ",
  "key20": "4UWJd8XtPUuGBvPZFKknbihisYXWJTCrW4KSMcMexuvpDHYRsAG62UzdVdSTwybVWE6extZnH3ip7YTTcANwR2pJ",
  "key21": "7QPbq6uFVwrprL7MxLggPnxqoyjUWFWPEhy7feMR3RDKf8Gv7im6P42NMQHbP5oBpKReiySdAwJEdnXgEXmFR8n",
  "key22": "2vCNsVxsMM6LGe6ohYQcgF7Dc7yV9msQrpAyy7vEfGPmWo9SLpdBoCxyAvhAf6inTT62Us61nJGT73S52MY18dXw",
  "key23": "1WovCjbVoFR31fH5H9VYC1aWV6aKdewcqrGtrmt7UW9aQPuC2FhT5UyxQCaWvMrBre8dPdmjzQJSHU9GDuQsvqf",
  "key24": "3DLinzpnJ58pkcsB15hH9RjyZgdwgB3oZPYa5NVRi9hW2zqwBNoKe4uhVmoi1f41duGkwcpEfodh6VCQDbwAV8MF",
  "key25": "4PuDs6CTw5BsS5KisAah9JaLdbNMBo8uSxBqmuPVHEvaatNdmk73vhA4stQm4a5J11hNgWP2CNysfzWWwH4ZEbNn",
  "key26": "G2bWVBrWqbSnET9AYN8acCmfgvcNYHncDGWpw9hQSBJQaWzhtH827GtrtGwwj3NWaMzn8gWsBMehzofZWoxMyNT",
  "key27": "5pCUdq7sGvxtdg4txc6ogrxGHVLbkXy8atjBwu9rCaY88Q9p1gaTSodsw6asX8YykR2spYF3vz1HtcmiEV9E3PRS",
  "key28": "23AHQyNQHewz2KqE7FNR4PDehyGwK35qPLopt9icysuRcxKy7csFs26FXA6AWhXuN6wQYykjfYbckFMS34wVWHQg",
  "key29": "HUuLCSHueFeVdxpwjB3wTHzAfTRDNK1Nb6PK7i35u7bTmUKUdjgTuR6bj2qxrsNhf3rzvAxkqjoWVZSzF9s17JZ",
  "key30": "3uhj3pkJa3pymeuiEphAgLxRf7PcxnGTd9mom2oFRU4rPQ5Uj7VR3hsXWyLHzViMxWjucreLbnWfXv5aapXD6ryr",
  "key31": "iBndEkiNTBYDivHaSY18Q6eyDnugcWUjdhG19cYy6gNyUtumrMUA1HwcSedh5XwXrAqzBZSpVjXJB6PbZvDBJdX",
  "key32": "4YYJLXDjCNgNCSyMdR3XBndbzK5YA1KeokFsKpfDpps3BbyXj8hjzjNGmZvx79onnRF3fbpJdiLe7zFyJcF1EMRM",
  "key33": "3Pc3ffukeroi6PYFhRLQcdqaLDzjGMPaYTbySrkUQkkWTsW9BdAE7VmkD3dHjv9HgNCpX6E9EKwZstWhqoyjddGm",
  "key34": "4FpYbCkAvmKXTwoCHB5QcSkT5VYGjPekPqyLFTHTfh13wxgEdtK2mWZUsse9GmehzTYyvjGEazAhrjb7B7sXabJH",
  "key35": "2sXz7j5nM3QNzLaW45npao53Gc2fm57ZZzvn4Mnz2Dqy9yopM3E5MFEXDXaX4NGSupZTL4vk8Xbpc2crfHoMPf87",
  "key36": "2FhWf8aPYEi7yy5tMqf5MPxjXRHdGTXBxiATusPfnJYtaUnE9oDZ52GFvn3wmmQnMXV1FHGYzhqwAoEN2fd1DjCT",
  "key37": "5vaGC1dc6w9qgVoobRtDdXEJLL62vpDpixC4hT2JT2yJ6moyxaNnS8RTvU7iXvoMmbkmTYZ3SKeT1QAYPiVkfxSW"
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
