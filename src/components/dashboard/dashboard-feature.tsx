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
    "33EWy9HSMqA3TJyyv44bpZ9tq6qp6JYdKUrjDmaQJExGfC1Y6WjYPDppdRjPyibry1Do1UinUrW7TAGcAeuSkLWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfubjaBYCnHr3CdEeoQhT8GPMpgtbkirMEgat2Z3Ch1JoVyxHMACSx76jxQYtJyHcsn2rQuhj4HdbX6R2VDKKQv",
  "key1": "5n6bk5bQSjdvARy5dUMauDqMQNYG7b3jiHzbPcYXvGrVgKbo3MGHniYKef4HdZKGWoCAB7Xx5Dk4rGN2Nyrwqkwc",
  "key2": "n5x5p6F52pEu989SFbygNz9xxFzudPn987XvrWpACafGUz5aNSFJJ65b3M6raCeHQ3LeVRWpjjsFqBgBXqwqXNx",
  "key3": "3NSjxnq1Qtsvt9jKUYq4y2HSy59WMZ7ipgiasyDADmBDoJahCEMMe1QDt3bS2Exx4H1Xz133AcRikpzKwe19eEbc",
  "key4": "4GiYJ1663c8c6gk2cyGQHjDGg4AoSdyjYQzdPxiWVHxSsqwxw7dTPnj6U1Sowcx9UYnPKm3aQpSspQDRnnBaQFmY",
  "key5": "5B2nKeC1Rr8qpAohxUkxdzf26utri67ZxnweaB8zdwG4dYL9mJnt7RpZqzMP136uFBK21p4jUrzBzKaTfwMxXbDo",
  "key6": "27YFLj6YUUV9tokKnGJHczuH2YxviehodcNEdQgDdeA3sGuXGv19YPjX7nFCTew6RzvYfuBQebx6g9v1DWJNGDqe",
  "key7": "2qvhXuUcAx3CXEhdmWYsxqN6mMQ4wX2pZgPtGidYknVBoSrHBth8YBEo68eQjnqudAiSavELMso6Fj2tGmTKuUfA",
  "key8": "3phZMYBc3qb3gEpZekEGTnV3HeAQryVzzE2vjHP3fhXtJ5doWG7fy2qDZFmzZH5qzKNtqb3B8kZQSYmAzJvdEZzV",
  "key9": "28gViJ8bsg1NSucM9kgyxHdbBFHhUFi21STaxcVXWAppcLQWouwaf9mFTE597iEACusrG1gHEvv1d2jt51SnfoAY",
  "key10": "2UBfgRwA7vsbGZFLg3NmepCZu5DTtkzew4o6h9mqjUk5NnpoeThrBuNjMBJS9J4vKckDQdSLkEy6ghmgyrrm99Qb",
  "key11": "2J9h5HmpC4ZDSriv87GphXTLCS1ZUH6srPUrCXkeHQ1E9Ves3dZkFtaJMhEDkLho9cdu2Mn8HqQGdYecHMsEHGq8",
  "key12": "2v3BF7ENfvcGQC8VcTUCLXsJYXWAJXPaL9ERE4Hp14ue7TN8FjGBn4iMPcFRCfNvnmXMGQpXYuAeZTAiLiJS5iCp",
  "key13": "5KKwB6UbyRgZcQf7GmR8VvEU4NfAJnYpLmAFujjGq3MRoYXyMtViXPvN6mkhD5WFX4GmfWb3jFDC5WDbxdntiJbX",
  "key14": "5Ee1DK3B3C7ZYhq6wwPafVUDEpjDcd7SKaXVUN2RqBcCoE3ZDYdWMvBRQm4LC43sm3RPc5V25ya3NxqypU2GkZ3f",
  "key15": "48qfnP9ZyuJfypc9BegxWDuWdwudUrxGWDMCj8MDGgxRdGxjxQvDeKauim2axEtifQ5yEiD3vpoJMsYC2tXQfpsz",
  "key16": "3gwZti13oxYYaYGQWDygABnYYf2cVQSewEjBN613HdLFPEFMhaYeW35uJ7EMbEbftBtsK1ssGXgbFhHtgWkyEWVM",
  "key17": "5n7AavKMuM9Yg5XGhzkhFpysxFHxTMLHRZh2kveuisS6bbmwpcdM1erkEg5mDhpPUdbBAyeDqKmP4DPt4XYVu9zn",
  "key18": "RR2F6Dp3Md9x7PvbQA4CkYyFTzDhs4UCGFJrjh9XzmEW4TU8gCqKPJrSwkuZjMw3QPK9CDyzcKYdU2m6fXu2J1h",
  "key19": "UxeF3XpEevSBeMHKPLGZXsHjSyx7pU6Q9x3LLdJNuoJXEZp1U5asNrnaG23tcWvy3fMQ4Mv7kpCkaGYPMRmwCBj",
  "key20": "3vzQWUgAxcYVW9hTs1EgpjHL6rNqYYbuaZ2KGxtaeAPkrMPpWGQ9qMrZPHsj97MrZYUgC8CCiTZXyr8qsDCecZvy",
  "key21": "8LNEsJfJz1Bbgx3s36Qsy3tXYX5yPFPvBbKxqfgMGYJxTSfJKfJy8FMgKXszqpZNRCE7VZqj1pPnpvXdkdGZWPi",
  "key22": "2wnvQ8TkeGQLPHEfw156oMaXVMBpmWeegKuKQ8QpHeLUwNt7a2dMZGspcaxKAdNy12hANR3tzhR3kpGJ2fdn2fop",
  "key23": "3UwDM1kjNRSd5tgUDntu1isqCuBt7HFsMNKAzm74q8wBvs9jVsgWoEzwnivQdB1ChqqUHoWo79Xod2xU37V3Xbft",
  "key24": "2Fz1uVmiaaGN7oF1S2AeocSrwXdnXXmvN7etMcKtRk5miPQhLLSjTiH5ZJDCjeg9VchhysGn7MZkAnwdQXoyr4VW",
  "key25": "3zumsUWUPUnFKFdazdcdk25vPf23jpYbfKkTjrZGoPtx2tH9agHTnwEzKHdTVNSZ2215dcu9nLsVaCN15aUGUN9g",
  "key26": "2HB3oEjRAqDgspxZixzoEpdao8Bq1pvFFQ8UZBP1RaSYdAEUHQwZTiCQ83miusqVagRmywAmbQabYuDEb1pQza86",
  "key27": "3b9kHL6dBuT6Ftew1d8s31M8WfyW8Hqtjq8QE2t5kMgLHgMEfieQ7fqnUugdCLoP1zWdD3bCgKzR3yXiMMTuFhRS",
  "key28": "2Bgg6kSdsyDsefXV9GbMk2AseAf6yyadKms4Wg5uU4Pu6jhUZRVYY3A7Fm1ijKZ3EGzNyvsMk7oCdihi3H88SPtw",
  "key29": "wXPAbru5JyX8J41nuD4uf9rTvZPnGMXRmeExJT85yY4fzER4VNpVRYHoZE769Xvr5FEmKn3X7HpVoGqxssaPx2K",
  "key30": "4momvZrkNBu97wiLv6Kmv4d8C4cbyEBfrtTqyJbFfhZraUHqJK326CV29B53Dy3wibS32C9PsyNMSiYpMZPmtdP3",
  "key31": "5H99SQfdFSJgKMPPmMUH2Sq33MECDfppNTu79YM5MPZRDapuSvEZNsywc4jV8LWubET4XZCBwR9uFjPggMM4U9A5",
  "key32": "41wWGgPKhgNADmJfYsRwC88ZT53uaxtoAG8ZrTHT4wtzBc9RAkUUa7H8KrAffUzfLJw97uViLCLf2BMk9wNqARdN",
  "key33": "5LSukKrEyzEBUaxNwEeC5tE9mTvYR1n7XjsJqVJ1HnfhWJ64DdkmG5tb6bxNhLCaptatzj4pAL3YPAuCjg12MXG2",
  "key34": "CE4iRjrAyd1hYn9Y3iTRhhj9NQw7waAx15MQvAwB8czvzAidr9eQnhvoG299Dm8XmydYFWXovQPy86rf3tjW5cn",
  "key35": "KQMBTXhN9E51kPjaQkDqGRx9UQpmDVuG1b15QakWjtxiJvD72AZhumRyGNJPZhMdtHV9zRAvZDkGQaWaBui8fKd",
  "key36": "3yTSvQizEVm6AoYMcVEUUZP4hR4gq2wbgGwL2MytAt6ShaUXbZRjTheXZdDc6kFQkNNtHbbvP9RGAX1g44qyM6u8",
  "key37": "NPyKiFMZ4FxFiWJf7VzoSXU88GH8MtN3t66r928zDGNjMw3jfUMKQtKjh21EedsB1vo64HTCrahSMdsSsZBv1oS",
  "key38": "415MkftqtXj2YRSWJRdZXuUyX5SspLvLN51tY9hrpnqvvJ59PdKNSvYspC3XQF4TVcapesn6Wczv6uePCMqapmNK",
  "key39": "57XCiSeVc1kehdCFubc4cW69kGXo1GGYFGCs9Mo5ZiyTMxcyyqBdmdNAXESQgdK1HnEH3xKJkgcA3nVhTbx13iK9",
  "key40": "329MgiCajqUtkodzG8yfGxLXEujo3QAqJ8M1Nfzx8p4JEj81Wys6qKtHQSuFxRETgpPyJ1r8nA5HYa473SEqRmN7",
  "key41": "4JaidutuSUmmeFtpbewUuJXHtzng4p23R9hJuYP6gTbX3hB5gyDsYFRqdnotGgjT9AqCDw7x7YVDuYeF9DgYUTXA",
  "key42": "3GMikAio5iRs6xZNBQ4ajymw9fSZiyUnfPoatU2vpSjdYf2MVJ8pt7ttywqsstNuy4Aqm9SxZLWbPP9Jps8FWZes",
  "key43": "56b5XLwhBiNGcjGzV1r95dKVDVjMJyjBskr2cHRkbqqm7qcV7K95NKDt8AmkkhyrvVnxfeLF6zh4RHxPmnfHhfZz",
  "key44": "BYfp9qDHSL9FNe6ArpKXA4Po3ProQRY3Xbz2iJYbj9B1v49o3cx4R2n5YuDqDdn4RRxkUynsMHwyqSsFyji4jhf",
  "key45": "4puWXFh9BbWd4oGPdPNFyWgheS6QyP2vuw7RvazaRjKDxj9dGdYvPfaQExCwdSq63JbQHDC546ZYbhMjRs88qGmY",
  "key46": "56jqixN9cHUEakAydWhjZdgNLdgr2JUXsPNvMh27do5dk5RGUertYiKEkCrw3hPTRbRqnCBCajXLcnNGjhg3w4BP",
  "key47": "3faDw2RPLJGz4gwkr6cLT9DeVqCg6FRcdhmUui1a8fAackumQwioTznRHi68Ni6MYQhADYkhuZzG5FQsWiX9XwzB"
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
