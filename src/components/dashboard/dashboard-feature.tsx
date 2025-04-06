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
    "3czjkuKm8WBM7DHc4EJVd7eoPvAKkimhFt2WahYnBrHMRxSAL5gs7Tvy1kA6b3bQNQwbesi9gTxkx5eYTYh7Z7DE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WBbcTsvprbMVmtVqehbZm98qQgbinuFfhPLC7YE6qidCPCZTAUdzdQyoKkqrwKL9dd3k1EGWVz3FxJjgnG3uV7V",
  "key1": "65sjfzPa37wbSvLd6hiavZvM39Dy27MFuDJ8Z7rCY61kFCowdyZZNSco6yJMWczcEiBbhqS8Dcybf5X1w25vPX4v",
  "key2": "3YvLZnTxRSjVCAxbgZEETVz2JVnkjwboVNYiMJ6JyXiotbAnXsqxE4DMQekSYckwjPVVU6uijDEs6yTtKXL42VWB",
  "key3": "4PzSkyUjwCp4wejeHdz2ubsDQpfF8XSrATbtBAPGAoW43T56kdCXy7xNgeCnyE9AUeKDRwdD8n9pSvnUuUkjGeyA",
  "key4": "48vXYCFyzbVmgvx8dtrgDLPNm2itVJx13CiTVBhkSr4KgSip6k9ya2xt5JBmpdRhDhMZoNeYFnj337CBej8gfHoG",
  "key5": "5LL9GEhePU2vXujXkDwp1Tv3TfzULknSYnJZNzcfZcSQTWnxz37zq4kKeWQ4WtzRTo6Zb4AqYfERMiHyVM2owSab",
  "key6": "38sc5z8HRLA47ECQrgtDCGzUcsFYoEipsjQsokEUG4HbQvik8f2DxJ2uZ1PCHmwr7eSiCT8zVFfniRyF7L1rrMXL",
  "key7": "5469eaCj6YCPHZVY3Xd5zCWsJUyZGhChJtHvZ7jCz2WGTQbkWCWhBzCiBUVdNqEDUFpv4ntC3Anhr4wE9vmpYGLD",
  "key8": "3iEzgXy9C58vQiTe3zsaNJyk9UT7ptdwwWu3BT2gyheH74ZxevHk21KsHBdW8uBoEksF6TYsmZRM76g44eWBn57W",
  "key9": "2FFk58aFDHBVqVdvV7YmhhXWKg9Fp6tco6MqDNy9UX5cQxUNSRfrQeA9AXWEbKerkGQ3WUW4LyEh5gR7FYs8pmLL",
  "key10": "x8ZKWfpq21obrXd6ExfWiajssyZWdKR7NF7SWZNTq1L7TZUzu1qqbDEbw3oo3Sdg1ssPB4j5UaLCysypVkay4kM",
  "key11": "5BpVSUy3r9buAYost9S4JuvinPLvebtKRyEX8vZZND4mhEAquRNfca6NKFFkkCgcAXAWDM2HoaFTvTgpeko4fyLe",
  "key12": "3nSEUNBsP8MWd2aaGSDBPK3WGRb87iJhc62x6N5qBfmU5Js3LAhzDL5hMV1PcGui1j2jR2fsbsPACpzfboejKbpH",
  "key13": "8Eg6BwMQj51vkBMagn3aSx1dtcUywyrKPud6rHoxtHxeTwmzMb3m6DGirdkhto6Hcu7zATt2ZdZZX1Vr8GTEcAe",
  "key14": "4tfdwPpyVyv444cEUyi4nBSqHEuEz8GfySiTHEX7RRQ7Bh6QNDE7S3N3k1tdMLbvLiwABNaPLSBxA1LsR3naEuNR",
  "key15": "3b4VnEm3EfaNyp6zHUJaabE4qQaUgwfmpP7gQwA4zuFk6LWrw3ShAA35oit1MwsgwqiQX7U9fwD3BLXYmEwWBztP",
  "key16": "5dMSBVaAHPrXQK6eHf3QQKgeS6NPW3YERojd5Prkv7p8LNrEAhoopRxnMvnxauGSjjvBoZfDfbhHACbsPy8nzK4T",
  "key17": "5euyCPBNrNsbVBQQv13mvukeRo17iiNEnamkShw1yFA5z4H6WXYtL5RSGU6dUU4QXsjiiXuWRmW6UfwXj1ZBUmin",
  "key18": "3nyuXjs7YZtEpp7NhaydpVx9J5niH3buf23ADA3kXQRdCWmYWQWeUmB2HtkuutYSWFwnsCnAay5oxvgg2UbiBRMh",
  "key19": "3uTT82UUBjsY9Y2GHgXdgoCTkX3MD1CDjTGfYFN6V5y7gzQPXwpPg4321dTdUR8FgSSA6tnDtZDVMZ8FXRhtVNtg",
  "key20": "4PvihEhwNrudMFC5BfWQ32FViHLwDwCiF6Z4hmNmVoMfVSJPni4pYAFDRUru9ipuZrJLpKRxpc6epPABYs7u1y6M",
  "key21": "41NxdhxZ5HjaoeVdmxD2CiDKriGABzip1pD3QfUXhHuUBFMoB7GzNN8yp82nNMYDaDDBrefqk2dZyxbcrmjp1um2",
  "key22": "4mUAKRLDZcmPpAJ5C3yhWaDXJrvpK2o8FEK5Th7MP1Ya9A9TbzACjS2yZHjQuyfpZhCU8jkiTeYUAvNdrdYCXJD7",
  "key23": "2Md9ajndet84BKw85CJ1r1GUQy6NckopCr3KRUGu7kXc9EkgWsdJdXBvfa2sPhR4gG3wqjuS2t3SbuhBM2zwuMn2",
  "key24": "FNAne3cZRtfx1u57scHQACPykEUSqT31hAmdHUihp8xG9Aa4TWNaCQ7woaimXSr5HLq5akjgPbeR1CwFXMhsobT",
  "key25": "2z51A9kzRiHuDsS29EnBCDHpPTexU2DMMRJ1415yjSVP7R8SyD8BhZHQYE3toMZTT28bon7c9xFmAuqS9dX4raoF",
  "key26": "5ZYFCLzrzFJq9RX3gGV8bf6ZWeaXU5aKJNWBu3wRoZBatpCfe4MNCaMDwPKR253VimgbTN5wjqzZPfXFgBPTtbqU",
  "key27": "4RaW7bMzSy2skFjQPL5ZbaPv8ji55WQKJBAQ8Dkv3T7Uwv1fFgAgA4NvehA1CZcy5pvd7bjdpqhL7MWoykinZF6e",
  "key28": "4uWL36odDoqNrr23qvvCb1CWcJaShjr1xsgUQZ6gM4UWXwMEWh1q31A6GjMqeN8zx8v9cYBhAjhBHuywNFzS8WVH",
  "key29": "3VjhYCcng2WuQGUgQiBMGJp8beqF26iPSR3J2x65EuBGAtn4QSj9pwxdGCahedgWfpXAVasEs6EGbmFm4dqUbSLZ",
  "key30": "5umv5DbmyxqyTYyDGUymEfWZBY67cgmceo5mdRg4JRXLwyyMw9W9b9vev4w4A5UkbjfJjo9zyHZKrM4pmLQYzJnZ",
  "key31": "3PwsdRKqGyd68ar6H39hoinNqiPAmoLaWXns8M27sQuvQKx1GhsyfCj2ucoWYZJsZyPoBLRygbTVZTaSvwWKuayD"
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
