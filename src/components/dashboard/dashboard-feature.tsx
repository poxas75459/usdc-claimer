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
    "3A9ZW4zNbryXRmQ1CyJfWAgmdKFuE9Dr4Bnm2Ro2K9Qg88K8c5VEDztWrCw1UzAe8Q6ExhmDsBpuT3driQittHyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jAxWbjvMXLpPtLfxKPg9QnNCxHi1csTiN859Dzcxzy2m6BHPNQGtGG8eF9FX4eGkqusrHSEbRjoneYEZCT4pmNR",
  "key1": "hw4etYK2Au98Pp5pfeUnaXL9NPjuMxJrJNRozo5yz6pbUHDWgh6H6yHhyGCUe6TcDX9xpuWjbh5NYjf66fiHtbj",
  "key2": "4tX7oKMTRZKTeA5zARFkJqxmFtHWJC55ttVsgVWRPFWQSc4bhPUQwJYP5NHXbwswVFwc6pQ1v8UfGXx4PNeFAjX1",
  "key3": "3aWNGsY8xsEpd8bnXscuCXndVbsjoa7hKEKr85Rr9eyCtBqgVfxZ494SGyrwLBAZidkUhBFUt1jcf5Ea4hruBKGx",
  "key4": "4BsKV48wySAhiPzMTWEFDCjH6GHXrCW646spJ9Gp1BQ2enGrr6tDB68hv4wj2mUvqLVecY3JhEJ2QZJiwAPtW9m5",
  "key5": "2XcBgUza6Gc1Tjtr6Y3kDNZwFteXgSMvngCAxNxX2nGukUvwrArPwhpijs4TWwiDuVBBe6HEKTGRisf79gkKAeHF",
  "key6": "564xB1hcDv1dApeMYVSUEsVEMhuR1ZrRU3Ccen8cHGidsRNScwgcH1s1wTFmf4JmomcDkx999T61SwyKyTLzxF8r",
  "key7": "2xonrTYwNp1HgA5h21HU3xvyYKRX7RuWMzHe8bhpMh61De3MHRYXnxhwxtz31erEKkuCS735hA4cvDrsvLN4thFn",
  "key8": "5HaBq1Enb8BmZLnkHFDGCMbJYoLcNK5dZhVGa1r38CbeDDKa7P73rgKW11ahPSgaDRvf6CCAjybZnUTe9Y9Jssh6",
  "key9": "2C4cFFmqx6HYAxEXKxdsjriEw5TrV3t5WSAHZyor86Q7p5RNvoHwDfMmg7LbUw48wHjoXoevQXc3gnrpGGpuUTb8",
  "key10": "26QL4ZVzDDjPFrFRRB2UdLLKCDi19wMk7oamVXVgBEGDFgxCMf9AnGB9AQWM39qZNgwTtfzcRG11LGNobToYiZfy",
  "key11": "2Tc9YmAEbsUDnaRn8wb541WDWYnJbwZpxjmowpk6d1Hpdbsm66MKeLmPEQxyFs7h4HusdJmHAwmnBdRFPjStL3Ro",
  "key12": "4nvwX27y38YQA3Xp7hTmXT58Pk725rwZ1XAAekBMoKVDjqJGjjoEVXcs5jxbARfWjqEuQTKD83MmAfuCxsd7frBz",
  "key13": "AnkGRAQoGokfJUEQAkFQrHQitBKNMFSmQm5M9ipjQXFhY6LvUCNarUDpmxjrbCN9xv5HH5vkxurT6dSFqBsAmnR",
  "key14": "2sKGS1Wo1BRQ2A85ujF7XaUHo8qzbbnVjcmNwJrWgjezUGsMEtHzQkZwNVgH13unYPjRmgvJk6caAy1DCQfT8KZ9",
  "key15": "4spfWHvdm8C8cZfTapQh94eCLkEg57Pw7QMJsUqD11mG82ptuc4KDqtAhQBVuvtpzCo4c6G3RpPEDWeejoV4wnNm",
  "key16": "32AMJYEDPfNqatKzG4aU2pXR9uqQxR1y5UrfgcWxKfZ5RZz7DUnNC3YZWLFTkhpvYFjsRAriLfgmMA6atgdhPk2P",
  "key17": "zcZSPCDZihGu1WkBzVxD3msTR9Z9BAigZfXBKhnxcxNE4TWnUiv5EMhbjyUKf76qrwT9AzwJrGo8iUGMtTm11PP",
  "key18": "5x7rmQRHkoF9garuuvq3vtjMpJQ54Ppw9mC9KwtZo3LihcRHvQ5bwe2YBup7MvArhsLK26hkejYTuCCVEKCChQqm",
  "key19": "4WB2PjZU4fWVmfLSWgg2xZag8LoW4NmjPhLPY7FUiyypqk3sA16z8eRjHeUmkNPZVTjbFkyosAHwKgQg4voprVjD",
  "key20": "3BzbvLk5CyxnBR7eMi6LFiT9p5Q2WVn5WCuG45bdDdeFBetLPLRSZ7VtXsdNMpbhxZktSmnFZkDZzFHRCqQWydNn",
  "key21": "5U5WcybFZViixPrqw3rA6nBc6zLPnVCpChQaUmj4HeyNEYeG25KcCApZMx7QsMZfL2PYcqbMif4tf7zDaaV6UTKG",
  "key22": "2fzGw3Vif6oZpkhdT3G3cLKsxZQfpjQ6YQqyWauAqbPAukJSzjstiadd6EjZXj24SYCNwmkwZuiZniQffJt4umRU",
  "key23": "3254Qbg7qVMfyXCdmkENsmKBToDYncAwRB5sf5XWwJViafgGTVTXjC3n7EHWaV4uqwDx2GqB8L9xEQ4XT8PR6orX",
  "key24": "zPyPp8YDARUUVd9HC2jXJ6pJXCK9arbwnR7muoCZpeYqdKd1Gb9rGoF8kntbuwa5GBHESrqJ33qJM3EtvCudWHX",
  "key25": "3BF9E59tP2X8PHAvMr3jk8smwKJ6jL9wJCtWit7M7YqBba9iK6hoayHHbWjPnJoKbRCBvGhE7pMEdpFN6eq71xFq"
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
