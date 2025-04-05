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
    "5pcQpPWnkXE75UE6iBUCQTG1oPziMTyH2zFSnBgBtXb3hJ3sKihzDjVvhEw4FMUAv6yLzmw51NBvTn8ykpMLMQkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJ5UZj5CRmLBG8FobEumJyC35VJDXJDvdLn7djQ9EC48fiRrTb13obtcTXNaJjMauChzpVGZ5VXBwvv27CaBHLm",
  "key1": "5uDdspdEzkNvvctRYCoXxajBy9XzsBPD3iaVrdjGRgXN7HAVnKz6nXsch31Z6ij1D511hKo7idQ9xyNpesTdv3Ma",
  "key2": "5ZZTkFj19tUqaa5hyyyykAFz2bPCrFw5eQmXYVHrgNGZ7EmPyeAfY5XwkbXKpAr3xj1QySHuG5A1aFDzKbPbEe2G",
  "key3": "5Z6C1LbrrzXgFUzYPFS38eYE7ycRVWuTQfGvS69i8MztygKaZk25J9qV31YmADYKtbrJL5sGBTx9Jmqh6gL71inm",
  "key4": "4L1MVSsmhivJ1BaJBpGjrbm9M8HRtHYkXDF3bdnnvhAQXPNyjJJM7ExpExmkYoyV9y5Vmd8D4H6JGXWwx2zATmcD",
  "key5": "3A9RAQozK8ezPGsiGTBA9p1ysoBAeddkcDX8PEPbGwSWbMijJnFVLmLsFBPseQDfFZbweVaR1YVhJmcwTHkMtwuT",
  "key6": "h7CjBke9zZbmpaQun16QjtQ7HSrRyNJhnL4XKCuSTrDoBXp8B9aseqVdqK2wthr3iksN5EzLntVhsmxFyLXcw5c",
  "key7": "3nEwaF2sanYQLENwiBr8UAtYDB9Z63WZFvDpSiSu5ryQadSUu2Jx9dpYhFoq6XxEYVdoWGh8iE5umWvCNzZEU85B",
  "key8": "5gtSaQ6uXQb1VBYgWgPE587c3gtGFRpJVcbzSQkbUpCDi7bHSuGrJ43XXTRH9Ny63Gq2CE3TsoeyJFZN6jHeEqpV",
  "key9": "3ayFHRb6kK8nFktWkSdC2aDCPTTQj4qJjf6fTwvWFaz6ga4PcWY2qCUyAdJgEFTZ4tvdSVDnkMV8izLiLHvAZkz3",
  "key10": "45Lim7z1qGFqPwcGt37Gcy8LKhY641b1ahD8tKYpdaxS45FoWxjTUAUnwcTpaCVFRPAbHkZpKPxPx5J78sdZ1WvL",
  "key11": "38Li9yZSA1ooUB34rVxaZSJey1i8rhP7XUAMuN4LVciGFtWY3Q5FVCp14mht17M2kZWPLfJCGXautNtTUMkEbBV9",
  "key12": "2HXWXULdLJVXkWkP7beMMy6YJZWgeSYH1cKLMeqwJYymnCy1RWorMRyxonmMXzwbrfmGPwyKacr1Bi2kkoCDMbeJ",
  "key13": "5GoWiSmKe4JyhAkB89ana34quYs1uLgxTCyR8tvVT5M4yMCixyEhfUKDkg7cMKcKX2Sor9H6yZxVyYqJRBzJFbmc",
  "key14": "obAi8j9ikgqeXbw3JFCqWLnvfWbnmPwxRBhL3yjc16rwXGmz9xxAS8gviHhzVRD9EPH3dPzkrJgnRFVEj9eF9mR",
  "key15": "5MuGDt8y4gF5abCXf3pBVp2HwbunBw1rcQmaHYQBM5oAeniCWb1EJXnro1TwDeCCL5FwCpC1iu5jVhqzjpDioP9m",
  "key16": "2RMPhg5gzy48KvLPdACGdHF7hasXav5MjLWD1VwgJ9p3oaiDJPS4gQdcgNgDkDfZECNMksbEn8kxrWpnCeu2BnZm",
  "key17": "3jQ4yJFx7TALF11BfL1q9tpr6FzBUoFL6jcHfEsq7bCyxL74p1Kz6cYTZncMGa3oPkj4FPukyUKq6TtBTR7hpRJX",
  "key18": "44ApyJUZUWLPctQEQ6NWDGaQwrNh4MbHPP3ZXPvETRn1cvqjJa4aMESrYTNjyQQdFyxSq7v86TSUFZ1APpqF8Mcf",
  "key19": "5sUUWJuQ1SeaZL5MhEjcQuRtMDzNPAVzED2H8Vk7afNZqqaSNUNG6Uf2pmaBJVf4m1JcA1396YZWRm4UEQ9vJZgz",
  "key20": "24Rc6djZLHPYvdhRjFWCuWDmdwS6ztwDfBSEwdNS9qAn8csUbaFer7x3kzizdkp24oVTski1LCXLDX2wiV7562qh",
  "key21": "3VVWZXNqRsVabYbfP7rUNSG3jn536D4AhCp9GnfrW4m1UGV9B2UEcx6jne6vUy6FZwemouLbhV8NnYJuKXRVg6DZ",
  "key22": "2K4M8oEawx88j4pLM5smNW58KW4Hugf4gpbxkqHXLy2pqczSdjrVmUW1EsKGwJqjX4ZHd772GMKLaDjtuBpessSZ",
  "key23": "4rN4yV31w1gcoTDLo3oRvAvKntRwmveSbkeCPLjRCDeKdpkWKbgvGCthuKK7fDwgBzp48GK6hpJwWXDTRwRydtKm",
  "key24": "3kobTgrDYRCsHQ2y4f4BdeitG6AG87QAuKbm8irpm241wgdfcmyyjnoaoDqJ9oyEeLQnq3koLCMtWkLoDUUHofoD",
  "key25": "4UGN78gHbj464TWQKSspGbJiqoS3bnejRokEBxTHyuud2wPHbGkgdPdgYUtbHRw1aKhByjQ4imgxAxofpMJWbeG8",
  "key26": "owWKadMMSZutkY8XXYGVo1knU36W1MjheSnE2zFaNn5DYsxnd6YfRyWoemGSo8MWirX4K6aGxuqvkN4Dg8sr2Cn",
  "key27": "26TLbCRaPHgzH99R8gTuZbmskaLhPN7wqfDcKNvBZGqmb7Act4CU92wJBLa6rbtUTJt7Ta18jUW8icey2oDmJD6F",
  "key28": "4fJUBV3SLSWF7oPSUEpuyTovp2uhHYnK7sqHARu2JXZHdhF3JP3mrex2Yswc4Bja7emikwrnqZwzTpVRuV6yVckU",
  "key29": "ELz7xHMBfrAz54Y6fnXWLZyGpfAPStVXmKRqg5PmvrNQNHbh5SCfmjFMuqraRizb3A5WddpQ8WdJEdwQCoaw62N",
  "key30": "3jWCvFAYtEn9bJTz6p3MZqpDGmq3nfzEKYNWJQxHycRFRcWno83sx2aRNPxu1fGyzaN1AczycRnvCY2jLPfNXZQ3",
  "key31": "2BDbT9X27ZBbcA4R5XyAzKTUXs8xTg6G958QrJHbVnxChALjamSnuJ5B9cZKr1WmujrHrwn9JSVxgcQnkoJcsuLy",
  "key32": "5jkoxWbPvsinkuXiycZD3jAtuyw3MWgQ1Dg4DJ21PxjAxkaj9bVt5SSxdc2dMhcA3bGKorsnRqYJAYQtJpf4UZNP",
  "key33": "1V1kvE3dJsyg4Ex5zM6mijfGcwHQfuFRt196JaayFo9QAh8ozaCPkCVndewDTw1jzjeRjRTMyLyfzukgugAHEAN",
  "key34": "2wiLwx4Sb8tuENuuPFQP8G4SQdCkWEszCVRN6mCxj374WqDg5kMPTu1h2K8LNQ7K4jZ25PKLFmqYrEdaa8JHeFzs",
  "key35": "5ivgcRtsgbr9gPGmBtU2TE2nttCjMfD6BQpsA3v3h9EBPPSUNqQWSxs7mm4Dg9NuLSc67PSiVzf8kVHNyjBFPaRR",
  "key36": "63wLXboEmpwYAj774RJGb4552bWH2vNF3SsSBKrExRGWkmHtoqR592eZj6wjcLe2cR6YtU74ETouw6yog4MU7R9d",
  "key37": "3oqnosi2n982vFsP8yJhMpoAtNQReNXDs7GTk4G8KedqkcVAxB8ubhXZ3dNWv5qJdKgxRqyni92MjSvWyx6RJATn",
  "key38": "2YkJUuUtSTHyy9uwbcTRZ1gnKSxbkmR9b3GgeR9zz8XSNfacsgxCkmNS7rSjGyqdbtpX8imQCbGWWv8sw6iogDBd",
  "key39": "3mTfiUBHKMwcdgNfNWMJX2GcAhFwsJHb3uPTSXwpDnjD7o7BC65t6gUCNaLMjr47wzKbuZmNNn2MwwFWMGsT8v5u",
  "key40": "2SuXEfBfDsmVrfXzuFuxG4Jhv5RRfDGwsknXzA9jMLr1NbxKb8YeUjm5dQYwB25ZY98BVf8QpdkDQKsuJCyKCEy2",
  "key41": "5tWoCHLZpJZmdTuhRF2VcUPs1WqG3HaqTAB6UT3p2HrkEv8qsCfp6o9EdrVbM5AZNh9SCyNG9gX3ytw6XLHd2Kfg",
  "key42": "5wEHunNAb8Wnaxs3pjLZH2UFVAvRP3QDodUBybrYNpN7FXyuXvgxjEwN8MZRJDRWjfcGz2S2CZp5JLNHkJjrzT5Q",
  "key43": "5CMQTHpKTHg5pEFzap4ExL9oWRbXYsss4D1tmg3PNBv1HkRNaVnsDEa1XS8SWdBoWSSiJZLR3TRANX8GjwiPe1zz",
  "key44": "25gN84ABtptnUuio5x8J4naFpMXLumybFftJD5DBfe4d7Gqx2kzx85374eEguQ1GgFBzD3Sourh72fFNXYbNm6xr",
  "key45": "2kMmyMLYyTrWF4vknY6bNZWYycuyFhkCwEYUXncAUdv86KiQ7bDyXZVYZds7raAk33jYNLMmCh95x6aMeZH5aPF6",
  "key46": "53vn7L5QWASoLiJpkjgS6YoChmVgZe1mxzs5whZn61Mth7QT18pCqW9rvrZkvkz67j2Y9C4vwMbofAwnhFEGJ3eZ",
  "key47": "5sMvY71SFR76nzepJq66WYAMoinathe1nNBB8GuSzUZax3u54HJeFfhuYuKsQoP6L1dRjVM9NDf8PkcBHb5yNCfv",
  "key48": "4bhQUz29LgGDbHtneJvAYY6PaHHbeKngmb2LmPEs1jGFDhmJUgnkU62vFz7YveGhXUmWR4xkPeVj3FJ2FcFegAYd"
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
