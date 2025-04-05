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
    "33Za7iprvPcDnNicNSpS9Kjw9XKGXcrQbXPLE4689PPxGw2ibXFp1b1L6hqQdvUh7Vi1fwLPaySwrhGSUxLkkL1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8v4LxQVAFREPk6YzwrQFSbx5CFA6qDUzsUYejhYYT9C4dGgZgYnJLy736LxwFoHpxZ1aYkaYbsJ22zTnem2fU3",
  "key1": "5jpg7GF9wMzAzuvqLUoji9wwxPCPZvdRFvSTrbwEdhD8sdZQ6akhrbgoMcACNVUPKAoxXSBnpJUES3kNYWak5K1P",
  "key2": "4VwzxBuNYyxD1GWTiCMMaFq3BfUtLdsZEGeTfEps9v5PJA7aBxmLW5kxhcB6fpMGKVLCUPC3guoggeChEcQyX3rt",
  "key3": "44kSdMFvze5odUGbRcMoQYyrQhGUzUmJcT3pH1k1Whguc5WLRswatoDAmpEd8a1fZwp9uLNjAcySNGtA3JvDjNvG",
  "key4": "3sXDk2TKHWS35ec5CddMVQdvAohvUKnUuQA7g9vMLpMyrLfERgvNYjeTDEbgQR7CA2jxkMRyLo5v8CjvqvtEJrME",
  "key5": "5Tr6wZZNAbfhaoxzirbsziNCha6DQy8vvZPyZwf4kN2S26NxUmC3ygwhFDpHyE6GScicNpnsU26Tb6shHur3joyd",
  "key6": "24Uvz3363udfYm5PJpCuP2j2sTVhwpuSPgwXQMPkZRGnx1UDyvvUE18AGkNrDJRLZLHkByJe9QYy6ELBvmpeDnpo",
  "key7": "whNGXyra4PCMh5ZWYvNueJG67cRbM7DyKzwMdhyDPVHFTpq5FDH2MaoqBBE6ocFd7J9s2WzpVRHCF7ZNovKZG7U",
  "key8": "2hgWCpsGR7poWJmo9a7VZkkSS1kJcheSQaheX972eJsQMySP129ZZoJFqdSFfmHLcJ3Vpnc2evyGd5S3wVCdsMbU",
  "key9": "buRD4N1ck1gPJTVh8Kpb4YEBddCVQiiNhXKnPffFnQhyKB5M9eYSi3UsF3eMvJTpufLBRXeA3QZht6YEvrUUETw",
  "key10": "3SSbHmavezPYWo4t4enZqzcBdAJVzu8U9UssP1EwmEBRbXhouBBvCG6fKe3ToUfDcNxkLPz4ujKm5GqDHyrU1AFf",
  "key11": "4uJKZAKFCF45hHpjLbiXytYfcd4SETzZNPmpYP8sNX1QSzBeqFwxr9p5UaARWNSN27tpSSecfCvT23X1wCKsVvX8",
  "key12": "2XAxB2EymP7VN48rntEW18FAytpb1Eg9QzwjQrLvDkdDgAfYZzsFo2rieFJRQCCi2vu1o2DJkwSzYGJoJhP2NocH",
  "key13": "5BvDCwSNLYtFcZ76hsyqrSc1yz2Y2hbcPdUDV6vFgyrvbyyUuMvBagb6XReFavKD6k8PgV2Mg1TqBHThHc1nk6We",
  "key14": "52CUFjCQzsyB5mkuHuGqepRF8TmBH8BjsmJj8LtFakbyFvhYW9V7cLgxaJiGwvi1FUuCXT4FE5gkrMWjSJ2oUzPB",
  "key15": "5XCNC2kVcniMFiTvZZ2e2SJymXqNpujYYcMYFr4tsr1XQQbUejo6W8gB24Z9Zur4xtdZnZ5VBzRTWZwS3hLddiSW",
  "key16": "eBBbNBkatqocyxFJndg5jGq3hJVFBiM59JnutyMWnRiWCexqKSqjYdVUDdt9Zh75djehxuMaVfapKAynKQdG2nD",
  "key17": "35g1ikgBwVdoyuZ2fF9PXutajQfL5xibtBmYfCH27Me92dDwNrD5j9oUXJL3AfVSTqDwCzKnxU7c5yNGCYLgeAZF",
  "key18": "2KjC7aBm86UtwNXMG1B2EW9MTo661V6Xi4Zv5zqkK4h5aFmRbfV5CCYUXLD7Httw32BJYUvGBmbuFdxu1xNvPDCv",
  "key19": "2uZ7HeLB1wi55KJShcDo8xb2bqDEjT6JREijLVD3VzjteREWsNXi6pSSAn75r4zPNBuNGbB9zjTnumDkGUGzQcT4",
  "key20": "5Hwr2Bj8qePJtaHBEv42Z7CLMHdcY1vdg4L74ciMy9H7Crt3SNkwpXW56ywGuLBfpMVfscLr463CuT4MBmuJDJcb",
  "key21": "JfDSTuqDRtQp8ThXgv8TYsyPynA9NZoyiT772HqVsMUbKRNN9i5WoLqyNHyJaNRret1A7NsojYyuQHGWpFo2RX7",
  "key22": "23R8vcnexapDuvd2cqhxRVr87PrDZZXQA439uhc3uGv1FMiuzCQQmjspo8qnEAU1yB1g7ro6Sz7J5WBBQXZZsEYA",
  "key23": "6622gVX5PG7AtQyjo9PXEv7XTMDgo62G4MHvkrYh62Ro5ykwTg4Au1jW3buMsHeuhcneqXBoEoMd5yn3J5A4UzQY",
  "key24": "3yXokx7vZpdcjks96BmdrRH93xz7DsXfehDQFC9UDyZMdsLJbD5fEKx3aEKAmkGyfugxpLz4XkbwbmgNSxTRfvvK",
  "key25": "5PYMUhAhF8StUYPC6dwURHA1g5tchJKPGnFaBPujBW9EZJnNDu8kkhgbktpx5ZBAbhbGLNTueKhAV5Yq6jckMGbN",
  "key26": "zfPpsCohmEEvCGXzQZ54hD65sFLfh99y1jTyhm6AbEj3prLrFo8G19MYfEJRPXkmKi25LcmFNjaCiZtgwf6ctum",
  "key27": "2dNTv6YMV3LueyXAZENt3o1bzJhnPxFT9cEnQ6LE2aY93MmJGLhYu7xYazYWNdE52KYXeq11eaT9dgZyeoE9P5RL",
  "key28": "33kGzfHi6jVvj3L5W77DDoT63Zyzp4g8QuhJXLqf3b8bJ5sboZGsFhC9NKJiZ1VrTSNemUtvHMgmU8mMhuM2rwfK",
  "key29": "2zKtawLLVfy7QhmvmNnPeDKuC6ia3vADAn1MBt7bGLP1BKz7XztfmiBc79arpJz7Kjg9WrnRjvuyj6HxphhsqwBr",
  "key30": "289sJnrMHMTCEEwZTSife78DamgYBXtjqzLoPTXeFGsAkJhsryhujqhNupQxYAR3CEoaLBfYUuFtrUQr6UrXSHnE",
  "key31": "4JCjBUD73go1Vt3kX1y6cFrWRttmBi5NNw5ozLTkGNCF1AoriUHbJpP3w9fKatPntrhFUkGd7Q3bXuXEUizFmFas",
  "key32": "47pBUUNi8tN3QA643wjAmhsY64DFAGccr2aG4HvWyBPkRWizH7J1XWT56CztTr7TXLHhvpouaSdb4WxBzKhTyPUy",
  "key33": "2VBDRsjiX3ArM9QHYJLz6LWxeNmSD4JmyrHrLZowKVqe5AXn2gksSgd47yT4ofU1G2BjWfD6p8rSxYRC3dqodHHq",
  "key34": "2NvoHg1eDMHQfZVtNAidGjXQPTVWJZHeaH5QK96wJzETmnGCfoNvsCCWp3cqsJwrKDAFZSbSn56NsXDNQ2WGU95S",
  "key35": "3SSwthRf8UssP5d8EYYDNj7zjhogDLhVRKYq59ZETscyFo8HMi5Y7My3kBFz8AmLWvpa5ax8S9n82QKxz1XZpyU2",
  "key36": "31xGdzJMLfMAASMd4Uq5GGkV6BTkyxcT76qunt9xMmZexnBnRohYe3HD2LjJTHQAaUty9ppQPEByupk2cq262hot",
  "key37": "VfgDHCHm8fsAEKjryWoEh44Jt2gKzUY2bLUjFC7NS3V3DgEp7dkdUEWDXExA4BEVrpsy7CtLCkRkydHyA9tukRb"
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
