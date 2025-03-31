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
    "3YNh6HykDVkkK66HSWhG5nsUse5bHkr24KfUuSVHaoPoaSGRqc6FkR8ZY9WJML3SVCM4sQtQwdXsom7xcM6JRm7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s57SWwj8mCDQGVd4AHi3qVChANat1tRFoP3y2HqU6aNuWNEr767ren6nAjDU2BZnVy7UgxcDFLLKEuK8uSfmVEc",
  "key1": "4EejHfbVqKQv91QhxB2enPfM4KaENvy3mRbW4sztBvJSjHpteekuHJo74mSuP1MkNFUJNik2wzNTHta4mKGnjzvq",
  "key2": "3fqjZoq8qz3UHdtekakcx6sC2kf4sMrLQaccYAGrqbL1wnohjTPUE7CMN6PZDtxpJBY8ABYBVAbq1zFbTDwCfZAz",
  "key3": "JepwvYMtN95LUUpgVa3zhqHnZ6VoPbgEhfEdb1bVVGySZecuCN4iy8b7yw68LBPTbFFbFByQT6Kr7A7baeTrVX2",
  "key4": "4yFR3ezPgC3ugim11uMdXovxGH54qNJfAawtRs5FixjXDtXoVzCa5Wnic8GaCzqyyMwvAvEGpPd269Noa76ysrE8",
  "key5": "5KcETLYv1DQj2Lh2prJdMiSQ9D5u71PugZU66CdrpAHzVni1CLTr5ZFydibNkMT4gnQC7fNQpAWacGfqtgKGbSmv",
  "key6": "2Aj9piuYJW4DCZaMRVTvawBURW8vG9kXWL1TxbNH7dhzVyLUqyDXHjhpqV7XhocDS6PcMH1siUZLdVHkpuQFCjVL",
  "key7": "2pTWfTAbuspa6BWVFPvhgTLAec9xstHeUCX8nHZ6s9Z2suXWVzM35nDSMWmXnYa7GaLPQAxJjoPCU9FyGFgMh4bw",
  "key8": "5zt9K2q79vMQ795tSzW77A2WSSBx8Gfy9VWBTLW4wUk7yZ1TN36YkivvDHYVstE4xp6HsnRD3LZ5Dpajd6yYqfAH",
  "key9": "5wS394N9e6rAhxkpNvQ7TZBVz7SHGpQDznZAV2tPk9tAmkMTudoaGEUgggPS349iRvvXoXRVfMxhmmwbBX2nD6Xs",
  "key10": "4FquvBXfvDpLhkCKYftGku6n7BSv8kTK48pgCkCtF3c5koL5DCiNcuyc9EgfcRzKgL46XvYuE5G64yWUAfBZNGFs",
  "key11": "2cMgJDSUY63TVvvqQuyKhMw3GhKAaB3EdNQCnU14rqALgsvi9GByLs3f1PVmK3gaUQSZ6weMiv9G5D2RESPUqC7S",
  "key12": "4VTdpR4LfCSV8GuxfQR3Bp3sQTQDxr4iWtk7AP4DPgsp4ShTC6xWPCcjq3uJrSikjbd8MoZvmeDqoNUd2TkPu3pJ",
  "key13": "K2rDz2ZKJsYWXLBvZ1WfQk6WcMVpAqQUK7pCsQtPAho83iwfBuLMsRbmmUoYXhzYxMKBPrAKztMMYhCBFsirtyF",
  "key14": "36cE3u9T7tkf55teGPd5BpPD7FWWkqFh5uS5aUk3b28mJA7HeKcGAfVYd78hpCVB2EWg2sPN3umS4NbEASt6bM23",
  "key15": "5BNSDm1rLtSzRnhPaAxoMRo7VQct7iWUUByi7rn47KcYE6SAU2QmBPHY2CpiwPBzear6ABfYfXQvG9zpqqpY25er",
  "key16": "ZMc49grBn5igg3ExNqh24d6E1RQLa4ZqDeWW15Vw2VU691LkZKZryn9HzByoPT76BYtsimhdtSX1ECV1Z5KeHAK",
  "key17": "TZTUxbZsfXKH1Pa13xcco4yAwfW3aEEHrCDtH71kUWuc3m4KjUeiyC5jAvtiqipvkxgpeaC7ChZszycZGiDawjq",
  "key18": "4ni3d4GiEpmyyUkr75BC1SpBnmhDbzJ7ksDia5vMMWnRUZ8XVYNd3xurgfU7Q5GESYHdJuPgVUo2Do6XvUCBR3Co",
  "key19": "3HbbtbCHM8MVNFdwbeyozqKqtyVqzaEuenwoTD7HJvw8gokV5eYbyEnwAL4GbogoJ3uc3T8LhAajjne7BZA3rgam",
  "key20": "5iLrc3E8BSAjeF7juZVe2RdNfWRGiEtVKkA2yYUp3HccTsKb81G8aMeRsD2uM9WoFL5UsonoC8nbfLzj5A4VB7kM",
  "key21": "MMse46HW68FtiXdC8nagdeJGXEyAtswbhAy9E1jDYNFUijHaaZs1mKWA6RGwAPBWe69DbVe3YznWGd84tcz3Mh4",
  "key22": "4zPUYwBcPNxj1jSNTuh9jpbxjJJZQ9XPYY9TEFzJbafVy1Be2pG8wLUmcLwjdzfCbPh69YZbbfmu5sqyUkvahkzu",
  "key23": "2KzBjB7dtTDrqeurd3tz8KYbLsA5wffeJrsb2F3gy5wqsFcSgS8cge7Cfm55HGknKTZB4PprSgk3346zMG8womo7",
  "key24": "2BWD477fhRMkZHkR9oS4xNJvTJL7pDSNxatdMi1L3KcHhE6GBKwpZgCMdStC9YxZPzz8os6hqvvpPtq39dghZeT6",
  "key25": "3xmZhhEDhnPN5cNbcJ1TKCfd9hDBwZECR7To48ZC9tXwa8xw2D9j9fhNCemj3y5q2bvExVUtwhK8tFQnfhpm8GJP",
  "key26": "343Zi4Hk1TajBHepF4avUSZYHWEwuR7EsYZGtMVTNEmSrSXshxE8Vbb68joV4NdvZWoJzQbPqpFY9doNoUEsncBx",
  "key27": "4tQAap2KmpjPyK1vGpqtEino8iAcWh3BNmeGJfUrGP8MqSDJzUEEQTyXk4QR9K5NP7cjh9TZMCUfx5U7oGhyggq6",
  "key28": "37spG7ahMCfiDHSG8yzVCg6iviDd1w1RS7qPxJVWaoht8SAGRL2oQSWDqyhEt2bBy6Xo3YimKQJL3MztTiLkj3gm",
  "key29": "5onNmzyr4iRrfKn2YP1dvGZj3s9woSckCU4qsRhsxhJ1coJgcLJDmCj5Gr6NGUi6KXQNjhq7UKBfAdgcsUfeDDCr",
  "key30": "Esp7WCZz7qSr5cGJKhm9hx7VnuCCcoaZ4sSDLkvCTXfsZyKW75GaPuFmbjP776ZbiRB7AcBzBU4Ddr7Y9K11e2L",
  "key31": "2hrrtr2nVFEyAB2v4pxRhnvzjjhSTGgjyRzht6enMT9cb1GuCK5MNqevT7irDnPTfjpJQJefq9X16CSKkvks1wTh",
  "key32": "5LTTe97YnUpPWqcFznehDxnJw63p1cG5Vzd3n5gm7oMFvfQhHzArCfgeUWEHaNYhda8JVUoT5JSse5gWPJWhPSdc",
  "key33": "47LAU8EM9289QpqKaqe7koRpuGSQeWDTMhGRAtTa9xQK3pkDszXCN4etUHBgTtyxUfVJ6RMgZo8XhcpFzfTRF6EL",
  "key34": "iYESvE4hNHFyp1mapyJMGPERhQRhmcfkxbu9UYN1hkTqPgLZ6EJqBYYx1nhv8gKjJWHLEHkojSfzfK3WTGZM9hu"
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
