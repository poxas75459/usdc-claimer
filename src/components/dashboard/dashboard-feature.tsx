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
    "5kQeRTdozAPJ9Nv1ppNmonTYEKxhYa3uYwMPAxQSvCrbhitF4sAHL2UbMf588n7WQWcmHv4YmPrwDs94FvpQeT7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zo71c4uydQLyjBsjxCh7w5foC6xw7H85GH42hTbuyov4rDvAyibrscpQQwYoxaueSeCRBq2eAJcyEV974NkeNu",
  "key1": "4N841Z7sREQ1kXfHoYL1PY2cEda3HZEDVmpk7EtYTzXodGb9YZBsiiCMXuarBtGaSwiFxDRhTqUnzjVEH5kDZsTz",
  "key2": "2sUgQuzUPEZ6rp3qRthjq3jPwsA2byzhYJdaTCZYP7RwSN2CfSnrePqPwgRk1L1TTC1EPLAeXudexrHgeBNytCdC",
  "key3": "5bfbNVDiGxyyYy8MabA8rpBYvC5MWjqEAqzxYtL5FzFA3F2FMUgwBduQm7my7SR5aFKSsMGw5Bms4J4T22n3RqTa",
  "key4": "2QXxQgvGcpC2nHKP5qQgwKmqejTbeKM9REehtgW53cyETbYFaeq5hu9c23ueagJLDZWe1zMyVydgX2rSwaNYH3hm",
  "key5": "35CYUtULWd7fCqo6VPVurTNu673968DEnyvzxemChgi9hGrzCVX3CMpzskhZGZiurdpZc8wCCjPMDyt485xHKJ8b",
  "key6": "XZtNesPRDZf7NiLQxd6Map7cEX9qkG6wRTj5JY8CGZSkXroZ5wBB1xW89TTbSkVnYitsRTLp3rK2WfmUd2AeRiJ",
  "key7": "2vvNv5FuXYAiCWm5drsdFMbhLuGBYZfBWX64f8Wfy4kzkA33pMzZM4PHertxPRmuK39pUUWrfm5zvTe6DfM9i34Y",
  "key8": "2ANJtfopjEsjCfBVnRdEVFwDyn816JM2EHcnxQ9xFmsArTvyQiUgfeeXgyuMio1CwBtTD5hRfUxvRA7tkW9cCdk7",
  "key9": "4JZAYViPY15nJXFnC3Kk5LTvmYe1hEZkyC5rSRh2LsGFVmoX9d9YoUf2PDEQ386gm1DN7ZLD16HMYwjKAEsj2nMC",
  "key10": "51xd8hPRyAiM5JySiWLjY1QcGLNSYgZu4uMDHbCMJ8pK6SMxGYDKAWRP2cRjRMmXxdGTeRpRjh9vT925rBRtnoHg",
  "key11": "4cE2pD22vn5nZ4TncozRNKmSKyA2R3tHP4T2esRm7qTKpNVubDrSWsdesiSDhSCkWTL3vuMADpwqzZyZZ28egZ4k",
  "key12": "3UUTQk8ChEFrokYM7BrxaeAfDz99QUaUdnycTkW2Aq5ZuQTNgRuPXKLoJ8DEimJSKTvwQvDAdbkpKMhkknp47Aa3",
  "key13": "477ff8TzpZ8fR4JTcM5upon832ACAZSZrWrQWaM1vLuxW5Dv3PG3KjneiyyrrcdoKbo5gmrW9WDabJGRsvQgAj2C",
  "key14": "3Y3ybYsdWawtDLrNg6dq3XsdmtJVjmFJxcZeNJaW8xBsvx8usVrXCsco46uvxABGjiZPYi56zKmWU4Y9UKXrosp1",
  "key15": "28A8mFCwScNaFCxyrTCKpAU7V87VxP1anLEcwj8Dwd6Jat8QgwpLx7A1aJiAJ8NSLFrchkpb3x5uTdZ5HX59tFWA",
  "key16": "5KNFNf1Y6etn9VP3hgWyKfroayo8rjTzLQr9Ag1oS1RqxAnJ7u61M4emm8fVCxoTStNYLymoy9Soab8fHQ6UNsxF",
  "key17": "CW5pio9vpYu8kHpsLfqqVWG6ier92499E22XyqAXjNBMeE9xHVqF1QZ32eoce4vSsmLrrSfBaTAXyaw8PrgTnKC",
  "key18": "usuSbswxXwktV3XQoBFkLz6SvjRfjjEW23Czbj8eGNLEV11anFZkPndm7AFBFgwvpdDxagUiNrdYLJTRpnmsQhD",
  "key19": "5i6A42V2rKEF7A96QwZD6AJczSj7kYJGen37TdFviurBqY2rbRmoXa9RZzHghJHcMZisGFZueyVhKErqjtpMakdU",
  "key20": "5qGEwRi5msVv66mv1utzCrEANrHzwSB6kux8RWFbStWToYWbTRDvFy6KMyTGMA2vCuvaWtcC1SLR4n1cVpVgc5hn",
  "key21": "3roYfiMV98rfxHwUhSL8AKZAzc9AgvKskUAzCdqRBXpUkXjnABFzfysYV96LEpiQvy77oRiZ4SfGGhPQWmFGqNTT",
  "key22": "2LpYEWyZpnGD9Uss8o6ytdZatZaKL7TASXVaoMn3Vj6FhdQYs4V12tkbAAaArqDq8mGXXgNo19VtgHzrScXs1ebM",
  "key23": "32KFUTBbBjSCuY8SrVm9zatJaLohbZT4Qts9zirxKcGc3eT8wfQ1cULrRQf7Rw7ZVLarTAAnZYjfDt8yp44WQWeN",
  "key24": "5AS9reotsXbfFTDGzsUMuBe5Gzmtv4c6vmpH32JEF2tJVpgmvM2BUzV2c9kagzznZWxuZUnkhPtfsdYvpyAeuYwz",
  "key25": "3A9S37T7yxtPt5FUgg9it7SXNiqcyyktu8ojArvvj7eXVVto4v6dPx33iG1CDRxBMHRpvLWVAcxDDik4WYCRDrBP",
  "key26": "2ruPGjMKsQQoRfcn6MhcjsQUTK4USgXV8FEUJBAuYsXqHWozSAgePAgE6bab7nhsrSC88aPrJ5jGoDb4mJLZPPti"
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
