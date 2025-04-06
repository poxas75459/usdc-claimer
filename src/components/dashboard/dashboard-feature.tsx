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
    "eZM6eJtbMBRkyEqhTp9xDj1KL7mz2gQkrEiskM6K78ZRvx1p5RGqLdRda3dhrzHSjTnM18yZM9aTCdWHcwYRDcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2jhkMZF5abk6hT1xxaCDjttpycrx7UwF636dBaXGAsrj7XSSZDTneGBRmwt1zLA7Xh4tRNoqqYQVdqaqHAJLpS",
  "key1": "3NfD3FUY1h1JzBQcmPvz1dgSZdad1yhoQaggW7VwNBbuy3vfB6KUkh2XstpxD7pQvDdxrvVDk8LokVcLfHNv21aN",
  "key2": "4cQq34QLJUw6v7ziudkh9W66YRijDaZ56ibcdHV81d97FX6FdtTiQCgZJNLWvxUmReAcRnwS6hU2jMDLeAuKyJNS",
  "key3": "3CspSta8Csh29fmMdV9ZkhLwjtiYNampapeinJVDxQ9ok3YJ88hyFmo8JREaUvNsd8jwN56kGshXiWHAH3Ke393Z",
  "key4": "2EFJ84nNgg8cSUyoobdgiowSov4JoGgVkdq9Dc64tTP4BBqmJQAsYp6YtPGfHwLYik4DXCPYu4Dez9cdkeu4ZRUG",
  "key5": "3A1LnyT7PyECiiH3JbVcuD2144cGCxj66a6X7WBUh3JTFLHhFYKHht5SbZta36Vag45quamHLkBi1i5KPyZAMK5m",
  "key6": "3YbTbnJFYyxYqq1h8nnonAN1ozLKVFx2ebXau6hpoWDVnJwHaQKjcGBanCsZeheJLSgtDkTbjh7VMxxs4VgqLgU6",
  "key7": "rAVHhKjC9voa7T4FjTobqX1VZWVnnyYSCQ4eFCc6kFb3cUzb51a1eNpsLRDr3WEJKKxTC4KYrkAk2ZZhrMipT8c",
  "key8": "iNeXURY5njWqx14kEcNmw8DGB27hiz1LT4xoD1ieqHipntnnVmqgQXdPHTknpy7hkmhud9gJfbKe9e6i2Kak4qN",
  "key9": "4HVzB45z5Ddihr3SVk52gw4MyramBgtHe71Q84k4fw1t2B4eCXor1KYxEFCcq4LZ6wiVxon8woEd5oBmL7PHeZuF",
  "key10": "kC3z7YZfT3oh4DDrGGATT9nc5YKjrp7oUbMCqbuZCgk9tPCJPXNMoAy7kuWvCZ8SKHpwQABKhHKS83jdYhoPK4Z",
  "key11": "4UrzKjMM3SmV6ApYMcvXE7e1kKMUGkbn4fmDTZqkrtkoZhv9hRPAL93NCinJYJNhm6EuqfSiEyxrnXnLzoiwfj2F",
  "key12": "3zvYJhYfcGWsE1NKvMnQR9hT5ACrXbP6mjzS7Q5UEBttyEWgjnpZvWu8M24vuMTXaJXkorbAh4WBCLEKmFNDwpTY",
  "key13": "5Y61ie9baKqpnuhLrG64ow1kUZMV28CEZGEJEhFaAL78pwN3s5PkY8iXxnDTen4DWPpcHcU3Hn8sDWZC7qokBeW1",
  "key14": "2D4TJdMMfGuiLC586UrmPa5EyQ4SVCr7QXErFrVmyNYD35wis1UgiYbdd36442qmkzxDonzzuUaRmAfBmDoai28G",
  "key15": "63qepakfwAdCryavAPt1APs1ihSa6imW3wscnkhdKJjtXEYcDffPcu7zmp1H7CUvX5KpBvmyK5LoL4M4aFHJ5mMG",
  "key16": "snQkKVP36F2i3NPQ3U1VNkFJv9GvTKtXrxMwbqTGZSyZp4krQRjKPXNzocKUzaKeMuujVn8zeMJM3AZW6uaf3Qw",
  "key17": "3uWQftHUV8UoWJ1VA7i59jMGToEiLvWg3pprBxkVrTRuPzJSpQTekuMv8TSHu4uqZk9c6hEFZsjzuyefbNcseXxx",
  "key18": "3zzzedE1ZmnzkDAEPZLUWAmqxRU6iQ6rhUEXDRuQqfzGYsCz7NkR2kmAqvFJfJj2yc4sNHsKKzeW47gBkCTVE28T",
  "key19": "5ScyrK7bGiPUA6VBjxqWgHsj8uG9PRkSYTztRPiQ1hjRp2EvCQirnfr6fTdvCRcdC3yvN4pCu8514og6kcZcf3CW",
  "key20": "4FotRtvBm5veqcToiMy9ceqqxY9TtdaruF8NTvLSa3gz9SM8EzrHZBezh1raxJKjesSnWuas3TS4SRiY7e8AZuq9",
  "key21": "3fbKFuKGryaFhzrnAAyWnnRgxe22jhegAoAhNCWtZ3jkKAAjnYX265X7Mt4ux178Le1FoB4i1i5vQnts6pDcQipP",
  "key22": "2ANjdtcRFJLwaRzAiJikCPJLTvmmf59kWMzAszcgRKvaiioT5UZ6FFYeqrQwAcx5o5Ezkgm62KNBsTnCM1hnTZaZ",
  "key23": "NMnBMH3wagLnAWxQZDMtvoQpcAv8DUq8qe8fBpAHRmay5o3RkuU2uJJgYS7dKBPrTE1hasM5PyF3wc38fNSxxpw",
  "key24": "5xKYzWN2tEtFsTzFVfGXYepykXjdPbmYRNgr7NNvVASL53Mwk2L5kVvRk3wj3JQo4PhEgifRJ4RXThLyVqkeCs6u",
  "key25": "3TT6C3YPrxyHCD9haYmsDAsszuzZEMpAgbDxPXfumdNGFXBEkcj4qzaH18Y1S8eb4JSYMSC83Jp1zXjvW7bWp7KJ",
  "key26": "3CzmJ45MsReKqK89FHm5UytB9AEGjwwnWejsu6SK64ipLpsZt6Y65HGmt15kseGPLyX3wiJfAuzNbukZZDcpRKLY",
  "key27": "2f9XrZkwAfbobvKiB3qcd4LqtDefjWEPa81DUvFeB6h3LaWVCPPEKqhRba9W65GNcuhEod5ZfpNTBySvppHH63ux",
  "key28": "KD5K5xEyjnYKkboP19WXrmvm5kEUJNZS2qydCmixZmCU7ccVjWgqdaXEKKzRJ5tECkq3tdJHcpVzuqXxyqfzrCs",
  "key29": "LbvfznFmetsX39v4jgySSgHoCZydVThRaZey6bBV5ibXGvQ2V9M66vETx6a4Du8R6cvCvVDNQK2MCWNshfwwYgX",
  "key30": "yPDn6yERrWHF3J4hjZaFN27Y9iHLwwtVuaF7nTt47mgUHp6kDvxt3Wx9wnmhsmRuAepwFwBc9u1WTUTQCr6Zxo6",
  "key31": "3MEsy3stkwRCNdq3zivEBaA9JLQd7qq8YMCm85ZfT2SuHmHLuxB4hhVsom5KJcfoMDNJt6qrw6T2tbHDSDz9yR1T",
  "key32": "65HH2xkmgP6pekcznfNeCiFFDbk9dPQ84KqP2UqHPUqE6ub7oP9vp8RnLrHhQcsL7qh1yhkFDb7k2Ywq67YZgkPp",
  "key33": "utQSycwQ4biAKWzHsuo4sqGtuArG6zanfmhjpeYSJ3RNd9BYtKNWC9oTVrRNriifUZyg21XWxyEpZmbRCJbW686",
  "key34": "67D1hwA6ew99RdRGUjsRDNTikKFKrr3UuCLBDi4MXC9YqLpE4hd9f7uu6mB8B6wpavYN8vrzGksed2NBwTk6DPdd",
  "key35": "CFG3XvrLgazyS63kAMpxdPBvTXHeJaZcdbwWN7cMYmFewoj8CWAexu4ndYoKUhVt6p45HBEWNCVQAK7nZ3VYSNa",
  "key36": "5ABtTLrgypbjHzUYSxfHaaGRucNzD6u11VDWbvdSJN5qNf7C3Hn23natGoA65bgQjiese6XupkPDr4QHsCPnEwUu",
  "key37": "5rT2QE7t7vTn4bT2Xsq7QAfrxzrzkLKk4xPXNGfreHoV5SqSAMiPugvuB3oXMbBixVD5rdf3XPVeoZ181wSJ7h5U",
  "key38": "4N5RSTj7zQqHMwt6gWVzZmRsx5AAsXghkiNNSmu9CaxEA6yGRPtWVjqCYVgxobGwcoLJM2yBqSjCavTugxtZNUJ6",
  "key39": "56d7hFXwADZMzP3askL3sNAgsxgXLt1LWoFVgQ1ePLLLR5AJRKWHCy5Z9TWE2SAChyHyDsJg28SRm8YgQpcfAPGK",
  "key40": "N8Nkh7fVJKYJPMRLezP6rTT9wktugQNBWS2WxwCEUWuseScTR6evqQMDXfQHE3dfKBdek6gJEoVNjNJSeh2b68f",
  "key41": "jztTYWcbz58Yrjk2WWn4hUEBG9f42v67WXj5ybLX7kmsjrQjjV8tona8nhmo6cXb5L1N3Ew156Apn7S1YWA77jw",
  "key42": "93TZevdV7YtCNhCZmEky3zyby9CUZwafpM1yhExLicDEDyp2MtrjpBtZrGqmf5rqvfCJRd8PpXa34Qq9Kyqrcxg",
  "key43": "5DGGquXWC1jHb2UvbhtdCSHzTsNo6BGtLVZJHmNbvpy65F8ujj4tU6FNtzPooGmyfxP9uoDsCy2HhB7kZ77nMCCp",
  "key44": "Si5tbPLXRP7eq7PYNR53BmuVCCrxWmxqgTwktfKzW9SKdEHUJ3AvjeDhpxuiWh23DKV8L3aDTupqzqXxRto9kYU"
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
