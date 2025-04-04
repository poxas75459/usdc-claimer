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
    "5h6C547U92z1zvHRozYbrL6MyGWuiRTV3zwaU5T3dUDS4C9x5eQcSS8y62pYDafydALzmoA2ddTn2hpMUJkX8hHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeHaAZPMtSygtZiGPq3EPayNHjMYSCtaZKUsc8hLu1EMNPvVfvWMY6CG46DWphgjuQNEWch4siUABVeKSvAXaKH",
  "key1": "352JLsTPySsNsHtd9dLp8KvA52TZ8GJNKVCNLPAg2eKeZ5NkTbX7jz8hV7LSpQDN11esBZm4g4hXRweEbPL1RRcv",
  "key2": "2CG6pBLUNxMDSHSs6iyKNBpmcbZpXbhmPwaC4pRUwMCqZtRBLbWoqX66acXiGQ5nKotdb1dVaxTGMwV8MdrxomqN",
  "key3": "3t2CLyJpsYz6c52PfGSqwJDfmcRMoRW6xu11VEdpTFyGRB9tUQBqDUGfzyG574xRevH2SSZy65TbuqLADwqnvQmp",
  "key4": "2eGarpWm1ojmtoR4k53BkNUCNDTWAya8MzraCnkaF3sV17M1RJdi9GYy6XJHnXTmUqkfXu9n3QHGwcHJpoHZEzGp",
  "key5": "53Y4nb8oe3rf4tn6JiTFfnPFoavwk21QevS4CtGTNJbXFBsnkzZuqE7dLMcPbCNq77Dg2jy4bqumR5vPioAHohnv",
  "key6": "5x5N6q1JGvkkM13z6tXhtRPikQfb2tT4CFWA9nRjqUestMYeTUUnTjSSX7wUbwjsCQPfueDQUE15Yxm6VFeCRQAR",
  "key7": "dt7vgEBurkTAK97YU9wd6DF3wGGgFHdeT2CQjDuSv1L5xK1pRfvXPrwktwoSkUGtSLZsxtMMYonCPjmbwhedwu2",
  "key8": "3iJeJFwVXnjfHomC5mN66JdtSKSJXc4qHXEZLuE27wjk3U736KZZrDoWRoQsxEkdD7c9rLMsSAehRqHGWqL89Kzr",
  "key9": "9xreiCWL75LBQdC5ZJo1C9sAEru5FZxujepzK7DF1cgbm2gVa8AhxEaHd49tJypMkGrepSJnmCQirzpFFTfuYtL",
  "key10": "57j3NNsauL2Pm1f53auTYP2zT3vWkCVoS64rrBhpz66ySoZusGnxHVJni1gwMLWqzZE9kNbuXw2dRhny2CfpHVuA",
  "key11": "bonDzBnqPUHX2fsjY4sj7GnhpeeDjSfUwhkVmpZwm17Q76JkDHkKSPa5C4UJQXiEVWbE3jXkHk1ehZ1FE3MX362",
  "key12": "GTTC9srHvnFzxYiywzyppMqqd5Dsny2ySa2fyQmMNqPdvSDvX7bibYzikgpdGErNWLQ5MDxmhFYdi2Tq84SBvsC",
  "key13": "5rtCrSQUvaodtutanR9Re3hp4bd1c5JEou8vpzghsQoK6z9o8bgq4LDTc9CkjP4YDwk9sPDC2MyX6QZQDDUjS25M",
  "key14": "5ZMLJtUX8wPhyvsZdY2cFUoJPTzQ6xKBeK7XmiXr21Sq7S8YrUa9xrHQbFrGfjYAJMQzsMEAwTFSCav4sCSk46ZK",
  "key15": "3UDaPoEe3MddbiPb1wDnE7gy6M2eXmWMjEgUdnDRNZRjLLUbhwk9px4mkisN4Q3jVJXFmRXshMnUdmEM9K8cktbK",
  "key16": "4uwCVJwh8VPs8fBhiMjFRaL9NY5qKrDCFRnoKrPZDeexmgtPwKSMmEBi69mpdvpaqMHPNuxzCVppBYVVJMPbLLf2",
  "key17": "4SabFdchdtPXUSbFapnzSs5FmYWDm5ZAPvKeVfVNUdBUuUGXtePQ2PTupjGJwWE1XLDk16E4oFJPERedysxnCJPb",
  "key18": "nLtZPqq1kx5w7qhPw47Rjyb877hzrU1oDhL2RHAyHiDhkmVbi2Tfhfgo51gnqc1Y9CDBfchgk2heoTwR23zx74F",
  "key19": "nyVGJC9E8h5ZWQyzd3FHgsuF8UFBRGf8M8QE4M7FB4y98NtZxYfvzjQ7H2tvCCTq5jkrENd9w82SuXtiBXez6bP",
  "key20": "2M4qcurpGrMrSjSvbfnncXsbRmEar4fU82M67UJD97r72JUCBP7msymkakCqMt6SnFbEqfnrz7hGKSTEasi4KzZx",
  "key21": "5deUGQSrnphUunSszbonewZ32DNoaUtiwCkcVpntKUfjVXchXazDtMFpwD76sCjSTtCBrNv56ou9hcqiAT6BxBee",
  "key22": "5JfjLAdUg9jtwwSTG38Q4aGwRL9AAinwakUtc1865yi7PpWuVzpaKoYaW7zsCmA4dFQTLqfdybJ4Gg8NNHWAaxuu",
  "key23": "5T5ip4oUu2D3RyCkPjV68ff4ZPxsCPjfU2ELCeNDszDoYFCFuQqgmPUFbvp97yhoWmkjZwn4RK3jjANiu9LXAiXp",
  "key24": "4tsTDRJhecpxszVur8NoMe9kEkAoJSV2uMUyMRUzBLFWbXN4THX5odzAbkM2Q3LgGxGM1HVwqy6K462gC48oJ6P2",
  "key25": "3ejZCD8PW57uH6yFLpWn5aKW1aZwQ2ewH4kjvH2k9vuJa9HiaaoDWmK4AP7ZUigNWjvk9CX8k95idx9WcKpdoS2m",
  "key26": "iU4XKNGiXBKEzQRRPrpo4JX44ir62ByFipYg3pgdQ9fhMFzFN2AB341SCjvVS7aVSU42vCQM3r5Qr7spvx349DX",
  "key27": "2PZRijdJfCDhsi7jB93Tx6n2JrWtFREup7XWS2sbgqRUB3Yfof7tu332tWX7YcnZNCs9bfHign4xqD4exYENBo7y",
  "key28": "3zKbcDFWUB34d76enRfCgc1fkk13LcbxnGVd8Pstx2y48eNBPPCRSPQkMebS34dLxunHWzJa1wF63H9ZDWmsNx3a",
  "key29": "XjNSPqtEaoSvx7peiz3VuyhvcrXJZb5J5x62QagT2Gr2RuH7etcgodZCxFW6aLL3N5QASDhapZ3WGVXPbBwVU7o",
  "key30": "JvHuxZEJvbXzXpfaKFiZBpoiZEaaWX9JS5ftUDGScY5jNdPXtQsMmKBBg4vTEYqwe81MsjWy6k4117pP3nSV4oT",
  "key31": "35f44yLAvzYUbp6idBVKmvQKQXDSvmUehe8fMpxzV8rVrXgiE47PLtMj6639WANUdtAkJp7jiJsKerv4nmJKL4ki",
  "key32": "2BYJq1m9jWFRkDNDCbWftanTpAvdV6szsSuDDbbnnKnR7XmRxYEEuBLGkvcp16NswBPzgYpDYcwKgZAaZ4eTdRCm",
  "key33": "3E4oNQFXZx7RpWN8Z9fxM1G98eVnJfY3m8zUcDi1VFKXmUG97ihmYAiSUfPT2ekoicLXtac4wZw3ucJzZcU9MJgo",
  "key34": "5GRXDMVwEBwGr9LuAXX2jLaePM4pqQ1rLtgLFxnbgd4A2ic13kM3JVTvuBgfemoB5VonRjkqzbXHntyunLfbyfsQ",
  "key35": "3ZQHiTsGhHGVn72YooWSFueGTiKtrgwKzGDSt5P1a6dwf8YaN8g59wNc9qsvWkcCSnhnUcoVRFvJMMdheDnCrCQM",
  "key36": "4ML9RdxNFv6BmRbNB8j3CK34JCEHaGw96HtXsK1Ek1dhstUNGahCRoY7F1xD36gdYGuRwweqJzkVn3NV2rzZ2cHy",
  "key37": "KvicKm7PcMViSPHjWmjxGkBmCRkE3ftayKnD4rexidu3GV3Lo9rV7ngU3xwaGw8EsoBuXpCqEaPm5ufYZapzCpF",
  "key38": "59G6wtmZSrtGKkWMrAdhZ8L7njvk9iRZiTi3MPMiEqZphv223FdU6ZWtfF1Y865xR3NgvZitRWFddHZFwT2BdCei",
  "key39": "21FHB35XRvWGKtgYMDJe4gYE7Lm8pC1hSL39TcePZHNTHEVrJrsH6DvcedF85F7MK9gp4BCZU4Akcr9paryAnjLi",
  "key40": "QZbafzZtgaTm2nZzXT3J5QHGwzfrhmih4GWGHTy4s7NGfC8mucTmd4bSDjfq23a3ksCEGivjYxnyN3qnx1Z21xP",
  "key41": "3mXYmiBUXAX4yArtZpGsTCUwEgzNQ9h5D9sNkKUM3MfknUMGSYMm8Qgv6DUpt9scvqXU8SscPvp4ewEGNsqTCuVh"
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
