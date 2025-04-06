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
    "5jU619yv8K4XpMwpng9gXDeS6YRW3sLHGv4iJxALpNQetTzPzcUDP93jLuQGAs8u3psZ6xk1ouZZrxbrG1AGaynZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfAjxHmJrfsdvcZByAmpp3RBgiGbYPT78rMLkrDhGgndwKqe71TkCHHc3pBdSvhZSPMGTRxJpjtDfs12YFVCxDm",
  "key1": "3MLDNEZwUpnG31yxmUEgcSXUtK7pxSkokdwXwPLgBJm5RyxXSc9zUkRXcUTt3XsqztjHf5dpz2bJWEbypwMZpoSE",
  "key2": "2UC8qG8Pc6RC9SKqwJR5MMw3Z4czVZAiMLBxiS5WRaCSenQGV2rNn8BKGaumNWokfQSQmqFEUF3onsCtek9KSSx9",
  "key3": "3LSecJMoMaeLivVKf5NNxVV2pSDh8ppMUjHfMNxAASNwiiey2C8GxvXEEuwTkiRT7oMt5GVYiEtZCP5B9Kw6NDBm",
  "key4": "4wGe19BWoSV6E8ycGsX18UnViDcjEpcN7gRUhhJN62eZM4Znuo2Av9R9kW7jmG12gpewGT3RqsU6tjWvUpMRzLaA",
  "key5": "4ALwhZucX53zmuAX2pn8h6jcxU5KUgvJ77HVKLb4ZJ3BDYv2bMsqhout9uXNGu3XxREA73am4pN6LXCPVJFNcGBL",
  "key6": "5BPzBMjZ65fq9kw7Cu5MF48zouek3HZQ7DdfCWjdcMCRnTTcpoJ9Ch6B34wgHU2KPBbMXMyx1EZQ9NR514wctUxM",
  "key7": "4R1YfW3SHxY9eaetrbgetgT3S8tTfabG2iGajx3oFfqfcRfqxYpDYKGo8p9y6xmC9dunVQs4fxppHv9apWfwyZAv",
  "key8": "5rLEmF3ojny4therdNNWxgQmKhjLJos39A1HS5Ny7gcQBPCsyXjveKeZVVbCnxcUv94dTyDYiTYQq4rEeEjukuBm",
  "key9": "5Fw3rrxeiCMiXycQ6gMW3D8GG9Zjpauu8kEiM7itru3H9gs5xkK7NYtNuaq7aeMnbVnhBiz7wG3g9xdXyZdR5eVc",
  "key10": "5nNSNiSb25tkJjK7S4wxv9kvZow2gHpgkF4vhH6nHT1SVW7UdgGNzRQYcfQMBo3pVLt5NaUT7Wwpa8HVY1FLPaCy",
  "key11": "21FpLfWFfEKKtLmrqaCJa4WXnDaENLVUrU7aaVnRm9DQXcm4cHUxorPgDyfHLY8sKPZqkbVqXTjBrWRTLF8HzxS6",
  "key12": "4irznZdUve4imqvPuDZW68kE4nqxww298ZW7QiaYm86QfZHmzEZ5K8wTPLuscYugnvYjoNMajRXA1McVVtvBBriZ",
  "key13": "4NfALx3xvXraB4xt273EeoACjejUPNfPmCUXWk34cLNrCzdEVSk67cNrAb9c197hcRDVTKqGd9tiPwbPt6LJGMb2",
  "key14": "ZbK21A8BRjcZiPxK4MwjdxBon7aKd94vnTYEmZG9qwxoXuKwWfEZ9pMYqCqfwHhx3XBS7zv6yzQQJW7NSoEM1ny",
  "key15": "4Y2pLeYxtYrKMHpNbpavqWkxo7HMgYTon1q12TFKxcvFUcUMUGLgidb5RmgGeQVumXytRe6p3sUg5B41e9TNnQU1",
  "key16": "49jP6VGWE6f153Fi6QfcmTig414rBVgJabBAQquT6i5pdeuT9GQFzKpGzVF1CuSyuH8raRRyyh7XQtWkkdoUDoev",
  "key17": "4KNYG1HcAw4gdY4jcMXi8ngzcgV7hnztrUaCnuvN3TeWiZiBvbkSfSqixfVdigspkLQHLbKwA5hsXD9tnSNCWVqu",
  "key18": "5Nt6Xh2Pn3GEjg9GxFQKj1fLuQCkTTpMnAAgLigCWXGDydecjDawxFQKZUjzaXCyPNoayyF2ME85Txovzx5ZHHzi",
  "key19": "3jfNTRyBm5eywbofU5uCuwYiHXE6aTNcvQ7MzWizevhRcik3Gnm6Wo2poUEHb1wTz2Dtt6SzU9r8LqtBx1qh1oo4",
  "key20": "mNTXLBBexVZGErvwQPp7v3JvHJzuVd3dvSymMDGxsXCQDn6txQqqZfrZV6rQksd9GcbWpacBcLCYNuKyFgmVZdw",
  "key21": "3BmKb6trfo9pu5jW3gf5dDaobxttJMtSePCBWsgv3M7LfB2GHXxksmYE4X3UyvoqgDE78qY11nwXQq9kdm8R6im4",
  "key22": "3e6h8ZBJzkKJEjiiejQn3nCMhyMXS6aMqYjGa4No1c5M8QUC5Bg929h6tr5YYu57pSHQ5j2ikeBqUUgVQqzLoYjf",
  "key23": "yxPaGEpzu4AHCnaKi2SPFvYF2oDB9Fmb7AU2t42d88JNDhSgENjxFhNUhcAdqLxdXyVz1KgAB8q6juLv8Ayu7hU",
  "key24": "5kHcwH2RATWi6p6QKhRqtU8hFDKa4eqZZXUzpmxaUvrXBu5kUQBydrY8Je4AgFFG5tauDsvSrRskDBURxxRLXgJX",
  "key25": "5v3Gc2xRmFPEAoGJLdn9MPhPQCJtd2DP6ySvVByDxT6DJ24M2GHqbVpAMcyAG7MQc86aqi531zfr4pnbugGeirAv",
  "key26": "2E8B3f3bCw92tYqmFv35GPmDVCLZck2QjrbKtmQddCJRcpqtQCnpH7vnBsHDHXXTrhac8d68MKpXhoZgYeiU8FY9",
  "key27": "584kVCa2BkbWwAar7sUwSmM1c2UnGeAP6HJ82U8Yj8QxsA7hcJzD34NKMt3SmC2Na6XuqbVYHipjTTUfMVhNL3NH",
  "key28": "3tkgruMFicWxJVfKaJ69WdrB2ddgeSTUkiyTrGJhU4hxgimmRfgwMzkh1fb8Bq8ZrCU7TRuTjcDVHfosRStFJD8u",
  "key29": "54YskBEt2bBy9AzZ7pAMJT3uTJ6XoMN7jW2oxi4nX7feKZptcRzb2MksiTJ8iMs48RkqF399REzjeQtLVeFL8u6B",
  "key30": "2X7ESJYUs5i77vPBh1kXfGNyReQdpxNxEzvPWchkrcdjjtSRevxn74aH3E1QkizLJiQma4ohLcSgFFZC1J273ZRo",
  "key31": "63QBfn9SGt4JUiv4bbabvQyZDniy8zaYkKsv4Pr6NxHS7gTVVnvJ1ZWLWn8AFUeTFhJmCQGkAYgrALWNE95hjwf4",
  "key32": "Sxaa3UhFhxiZBDGV1k7LHqmpbr14Sutk1YWvqEkx4HGdmm8H3SHoyU4XpSxPfqTHqv1ixCvk3Ejh8ziSpmMgY9y"
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
