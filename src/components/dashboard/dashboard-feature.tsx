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
    "522JBCVYchtDDh8gqxGCZsEyVjRn2pE8vBn9kdLS8YLX3te5Y3hjsk6oy7LBxV866aHJaTx9bkKq9KJMDwBmFoeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcG28ZiwKcq7VgwNzVnXzAzkTpKmpzvaoPKSNwFatLzJqDNQ6Y3p3485S6X53fEzG2Mmsi9feAFt9wrsPSvpWcL",
  "key1": "5b6nqtaDCMf5yWEM51KpWSD8MmHvJWRBMyGYufHD6WEVaWQhUzYnytMdTUMpgt6PJnszfnX4xjvqHSjNCpT1Q8Uq",
  "key2": "3pBe2gXk9ss3X9wrtm4pFFTwL4ARzGbsPU11KQM54fkZebKV3ia3J418mJzuJNjQWoXkJo6yxsuxX4y8MUKdegJx",
  "key3": "5ejx1nuRn8gTcxUgEioMg5v8gTZCZwvbEN5VfXfNVdn3wzMVzr3aNR5vGizPcvb84o1ZvUzEN1XCj5sry4RTb63Y",
  "key4": "xNBuAJDWDht7h7vbd6Duj4vr1E7Y68TkE7525a8HENM3giab8XPwniKSWzncBNHYBpafYAyjNzWCQqLmBztDKLd",
  "key5": "1RJMRg2qmBNVpiLUp2Hhivfqs1NXa3wtsLCgvN32kMvF4nzzUuxpjo6KRx364h2vZN9wgacv92yhYwnVsKMupWK",
  "key6": "2RdLtSP8U7S73h1UzdsZ2vgX5JZf6iaQ9qukWHDDp3R41jZoxaud2hfoGd57mv3hmdmhuaYMj1UjcU4RLpi4PyVE",
  "key7": "M4RkW6Pri1tBPwMb9shz3SmLojNTPeuwBvf4pgA7j9s2KDi86FxEycmd5Yeq4Kkc8z1uxFLNRhSCtH2Jv2DdigJ",
  "key8": "4bYuyCFU4rGmsdHDQM5j548cyvL9FWRJXKZszcsdLgB2AyfwWsmBcBJKN6Ezrw2oM1VE1rXcYRqNgkEG1kUmS3yh",
  "key9": "4HdzpNGf8QiHiJhq4uhzwzhvaBAKc6jJnunKakJU62DQFQ2L2LshE88NrXqHeyRtMm2TgefetK4qPqtR9CEkugCW",
  "key10": "4oUQTGw6ieaNhyw4LnjSuug1K9r4xDux15beT8q9TVMh1UpJYPwRHcxP5FwzhcWoJJu4QwFoY5o8YW6hrgCqJgUA",
  "key11": "3sPcWGvy9eHfeZgwE8brPq5fYeFkjfbSGXpQ11fUDYLEwCao6Y3hh9z1D3J5SA4ru1kM45rHbEuYk8ybicPXfjbn",
  "key12": "5pSvKxfvj6wmFR4uPK9c9mtxegJSQnju3yMTtd14tfLoBshdJcEe4N6pGSiU3633v26amGULebduJJJaPQTsRVmD",
  "key13": "Jpxp4ZQX38u52wGDNCP1VwSiDCns5BWuUJogJqGdhs17mvF68ppbGwgCgnHHcpZJgNgAMtP3UFTYi9VMzvmh19r",
  "key14": "5HCF5co1CaZypfhrvHzxMHi5ZuQ83mSEoWJHrNL5sQBWcGmUsQDKyzUR9KJxNwi4rRFd4ezJHwkGep7aZv6jHbNQ",
  "key15": "5UhLoJUJHbCCZsNDCdukKh2nXrr35hMLVfeiskFmMxKkcSxc8dyhC8kRZa6Q86zPo85BAD9YsvLHwGhNnonDCfms",
  "key16": "4zpK2nihwCDs1bzUfYtwFeXNuCY1WC7Zc5SWKRfA5LphmAD9KfTLLYxEXt4gUXmC18HSNkoUJjahvxfmbXES6US8",
  "key17": "Xh5KgHuvuJrgEiEJAw4ASKT6AdzhBJVhZjaF9EQ21qoy9kPWSYDPZUt68cdH2w7gw5rkBoTVkZsLSRNEyaDsBuE",
  "key18": "3GuJFxuLYxkFfWzdHefcxViZwSZ77Hn2RuMfarMNgKpyBfnAf4ZrkQhTyNbnApqhsf2ZgUgdB6BQhiExuS71NN4i",
  "key19": "4bRBd7SEB4ZaDxEHHYk9bwBKarjTFzSyn2p9bFv3R2yrna7WHQr6WQK9n4qayHXdw2Ja3QZX4cCKsj2iqB8jGmd5",
  "key20": "2Kig8W2CtXBfPv7Y21vye2HLmc6z3nqWKDykbR3L6iJ8zhbuSVtmoVEVrbgc2T3rPgivCYDycBXdBYqnqeCTWsD4",
  "key21": "tLhauQ5SURjyThKoTxr6iUdATyvaHPB3FhaTo1MSdPeFacXrbvxKuEjvhqzpqKQJNvoP1HpyNfDPddVLpVrW5he",
  "key22": "2VVo5xTR16tnRs3tVJfcf6KpGcSZsnbvKGy2ocx3enx5kkqTpoJs8aLuLoati9BPGCRHnnEfNY9FiXok5h2E5Pab",
  "key23": "3guU3UC6HbeFtMMQLjbMyhJaEsLwtxrLakt52PhuV7wTws2PX3JQRkSm7xnxrJTpfSRdRncNbiSTQeR5ZfPAp6BL",
  "key24": "5Fk9NBUNFxLdvJxQaBj5sRahACqoMbxDnBF9VLdLeQc4Pbhn9o4oS4cAFcTvsKCLwnXGWnKtbyNWaLsdFcbtzBaq",
  "key25": "5255YfpXNSVaWg6QU7G4oLdPd4R4gxV61hxgpt73sQVuFQncaZRFPojB94RjuU9hqkmdK9qKTLPvCYM15Wwv7s7d",
  "key26": "2TayKGWhmr6aWpqmL8hc8CrdUNpoVKqHsChaoWyrkbpwoNDxanW1DzVK1Gck2qsuF6z36vndbqbaeXKwuBQUJcMs",
  "key27": "3sJvhHXRkj9LoiKR9tVuwfYWEc5LPYAuzVbGa1DXhSFZXBpS1RnTHLZxuXEa2hBpFdVuEHRK8rwzCd3ykbRSFLVZ",
  "key28": "3DG17dLQ4nUsKkWLiMhukSYXbmKmJCMxQsP4MnHwTwxDCYTuaAYepGbrJmG3mvppoXa7AGePQWKd2xZeUpBU5dKU",
  "key29": "3qYUWHDAdFtcvMQsS8BPZh2EF5xnoE4eEgzD6M8985Qz7c2yX8vBr6pFupGkKbfUvLMNndEPp52zwKzw6uyvjfQQ",
  "key30": "2EtBDsFAunySXaJjn9MYvWc6bZ5YteDcBc5b31TGxqRY3emSnTgGWh9aTnTNFnJz6PCHd7epnSLfGN8LEULuEfd",
  "key31": "38AREYC1ZgMWEoiQguVHfjTxCnyW6fhQTCsNJ6KWDV1Myidqabd9i6WAviX3cAD3UfwHR1MZrHACRKggbEXwHex2"
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
