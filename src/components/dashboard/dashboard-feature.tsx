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
    "54QWj2WzP6J9TaJfHK2ajMqc35r8RUvhmGQfQUKu4ZRxbT4qZTTHrAQoFaPxpEZAuAveksTyBHjFebB5ocFeN4N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ueo6ixd4BVkPVvgjSfiTqeqpJi1QhR3jWPwqvXt2mxjcnQ3UWx3P2RuEaimA2ZhT4jeHNouCSjJS7XNN3VUSHVD",
  "key1": "5orz2ZmSgaUJw3k9Ke4WXNHWa9eGm1obSGEQgB3KhfcEcZpYVQfaMQKReDwUwxfQ5c2Y5HmgVSP5ZZFEPY6YkNk7",
  "key2": "5uwxChfwz6YVAXwfhKZqX3VDPuJKX6WdEYuJqUGtgT6wVJccKm7yGpGXvLkC6mCqScSQNzDiWcD2t9cn6PcH47SA",
  "key3": "64mSLwGyJZyDrfevK4u6LR6rnQKrz55WdrpgtPcfzgBbBFtZkZwocHMgfYnzy733r5dMJhbSZRAnp8BsBMZfsJeX",
  "key4": "wfqH6CGHfp51Zb7nyXS2dHG1RRCJCWEdDokXVScvUVvzbS9KiZtP5Ze7uN8jU92amDuaQXVTWi3FvDaK1tmdp8N",
  "key5": "5Ui8gXmNQc8hAG8nGR1rhJsmy2LALKu72wGNzY8b2VH5btvki96mSCGsxZc7VZGMuh74gqY6EPRtEvyEpeo75tyx",
  "key6": "5L6RfxypLjH2e78srKdNyP4S7Yo5mRorVQVJavfhDHwDmLunXhdE2SD1CrPanqjUbj8iHfSLgNMHiRejedNuQXEs",
  "key7": "3iGpj54YF2AE8tTFzQoBGwVXmQf91DuL8AfSg168bKLo7nmeU8qFZqur5WF1UvKZoqnuNF4bJ8zQqeQUZRGMwKn4",
  "key8": "4N9KDmiBsX4L49adXEN7v7DxrAtA76J3w7azCkooEP14zmFtbe2QXHEWNupv7NM2762PXiBrSdmVY1YBras9gMU5",
  "key9": "4tLM2bQ85tB9Ab1JBJgZYEMz8eCRu2wxk551PM47d1ueQFzhyerZ1oqx1H9P2mmf4kGwj96LYn4iwmMbMJy2qAgq",
  "key10": "3BiT4WgUch5PG13ArjYkqqDXJgBvREjz1Uj5Tm4ZNt6rdW1sAcUkef4p9BAFztg1D1LLYvoPrC81E75HjCSpazrV",
  "key11": "5MAG692EHgmefxkrmKZjwSMEXX2ugQ4jgyRnPbHyU6mn7mdRm8vWf7swiqLivFLdAYZYjwHsyM4J6deKxKmMwXW8",
  "key12": "2r6e3BUyvc7nWUsfWHG4Y1UNMTSTzg6omvMXMo8aVSQDdR4fsZ2LJ38oBPnDK8hmZ4GqymDPxpHJV7AfDS8thht3",
  "key13": "3WydMvhPPWS7LV7CZjePfRAZUwEZVTytgLg6dVwPg9jYnUpM9i6Hoavn3qbtXAX9yQNv3Bqw94wXVhmVwvDMiBh4",
  "key14": "kScFPyAejt3WNFExeFJ89Fzgqi6VBBU1DDZfdPTssyLqLZrDcZ1i7yR2x8ShLpfJXtKTfPGBGicXKzxJDJKJCZT",
  "key15": "3kaJ89HTeFT37WGtakweHcDb6qqUY42iPY7gYMWq7pE1xd12snTNRSM76wR37Cs6BML6se3nV2yWggwcysa8TYa5",
  "key16": "c5XCpHgThYVRazphnqrojjfZLvbSirCWwz4RD7rNVtk8fyqTRPyZiqvm3YMoeFJdRhF8twZPDdBjnsmX3zxmDMj",
  "key17": "5AAkTEc9jzYridqNG6zzh7iABj95r3RAhY5H2WLkKRRGPTfyhsnvvEtL4oaVigETv4DbbE62gsnUtq7PE5tV13SQ",
  "key18": "66QCaxVvTdycwqFZAbpVecxkSTYtFAwhaxdYD9antXFb5dJx1q1CrFcQ86frwpowhq9x2SUUCy3e5ru6SpDCoT1b",
  "key19": "3Kfn3rn5tT4VUTL9MiCUteFEpdW88n2dDBTuGQocNLUsX7iyrFGm47oyjcYW6kzhesAJkJfEJMqcU97mH3LwuTCQ",
  "key20": "4Hv1JSGJytjWxyVmEMCEyASDEwUWWu5xx8eH5uGqSgG4c287y3VLfw4fag8TGZL5BcQax3uiWDZgRxtzBSP6pkmZ",
  "key21": "4JHN4BYSFLSciBn9vmeCN5DcZcpptAZMeWtRGRtqzKHSYS69M8dc1YWW8CmDVJrmc6nh5e9ADMmu6xa2ur2hFeKn",
  "key22": "44Wu9cjmN4bHCoW6TWozSMfDExfgErnB29PFSjwXrLXwqcPmnwbyGh5r6agSMDBFgKhicEreuQkDoBFDCZwon1V2",
  "key23": "3qFLnYKM8pvs3J8eQpEVCZ9xZnXUyMCNbTDQ47uUbqUgGYLSBMCStS9tUGuFykgM92NzZ3HgiwYRXGya5cajUB3G",
  "key24": "5iNWdRjYjSXx62SZPH5BkoAxT1W8dJDMWvAUduYVmFmRVpFwCwj5SLhcvPV3d3dksjULDFtduBoxMg6xzpRvoAHo",
  "key25": "3Ar21PeowzDzw1PVvEcWuABDHr1pEJszBQN5d6Nvcpov2iBsauBw3jEHscP4BJzzo6WqqbdCGhSH6QkpvrLmRYmK"
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
