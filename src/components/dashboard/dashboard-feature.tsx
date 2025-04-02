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
    "34AknaFKEsZx4qCw88eoDeueGo9p1Q5AJiPbkvB4QubTVvCvPA8g3N3NqcPTzVynsFfTT4poeEpBifjaNVuQS112"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUHvMv6vXZnYGEvN8zuVZVeX5AVeLxLg1n12pZ9hHVPoPxxLVjfd1QRwFVrbkwBStyEA2b3piwUtUvagaE16ATp",
  "key1": "YrjwmobnaiRfg74FC1KLazcarWqsdyoedonxvgFUXuuEBcJ8GuQoMMoFjdavYF6WC7mErLszkRnr2sJ5q8BxhXc",
  "key2": "gnfZ7axSyKcBLiqN5cTP4jen6VWdty8xLCN282tMm6Bk9mgfKQUpBq8MPXSHeoksHp7PUAJuGyHcF7VzCKbUYCD",
  "key3": "qFNY5NCiQvQWcHu38iQ5H3Tj2kB39R64Whq456nxtVpvhrzuDbuj2ieMxxTKtsTALz94u9TxLfDgGdQcjKws71K",
  "key4": "5CoNjyRYAxAPk1mLhxXX1DFMD4jKyVhcgd7pQUgqRQNankXkSb4CMRvexYwWe4jj2bCChqPsQfyVW3H6LugJjSBY",
  "key5": "52HRQW42TCN3yZHkmrxRL7n1K4K2FprenUdJH8f12jtj3rvduYUsU3ErCG1dqvrzFXHxUKSt5q32qFp7KB1RHDzW",
  "key6": "2ZVzTfSZRV7uEPFCuR8p9fo3y81hynYzSWsohJM3qpyEAZxjtjx7mHQodx98EocTsHbdoArXbWAqJMkjC6fWikEb",
  "key7": "56oy5cXYU5JGJRwMJbLwQcFyj8ZFu3wix8M82GRYdz9mstxj2QhjuofsZbyJ6Z4DUPryiCyzxHU5UpRZk6BicFdz",
  "key8": "yaPPsjXyWsQbgUM5HE5g7gfQBKSp2sAco4hyKxf1vpLemDYACqs81mkFDSNVLye2VJ8AXNfdTpKPDvT4JNYDNHh",
  "key9": "2X6V26xqhzjmQcRK5WEgBBDoj7PjKTA35bUsQR7Z4mu5sCdPgvQnYtSrsyzZy78hsykkGtAkmTa9ismQBf9GhyW2",
  "key10": "5voXfEeXSD4HhrVPfHSx9ioBg1Gg9Hu1Y35zHaPhWbbsV8nXuqxsrVBZiKXGsLFq8Uhd7MWTyBxxoKUd4Bcw88s5",
  "key11": "47nsRmG1XVZw211wt7m5RAVZkRPZnd9W9nYJ8H2xcGzwMRUwTqdac8YHdZFr9NiUn81p5eWMJht44n4CB7pY5N3Z",
  "key12": "3wDuX3LKq2JdkBf5vJ3hRSdbzRBdEvGRY2hqTPiKyhG38i4AFfNZzNP7bZNub1ZkCES1hRyorP8KLYyj7UP3pRTL",
  "key13": "2VwsbT9mEjjEN3Bv7dzRmL1tsABFjbZh3jwCttBhXw9QCGrRWQ6Bprsd46zK2LzhzEfaJLyXrpJTcanx9vLVRhRS",
  "key14": "25Wumpq3TzEWkvLcp18G9hNskW3rj2tk8S9ARtTkNe7iJLio1ifk5yynzhZpjLdzCdg5LCpc96toxKoN5p9aHtBA",
  "key15": "4mt3Ld5rRqBFibqrgQDMrMPq9qVk74CbNnBZEX5H9oMDb2bxatqgFAAZeXuwnErPE88BSaWA71DqskJjzcCtrVaR",
  "key16": "Ukzzrfp6Y5dD87TLeDfZ9D4za9ys6MThW8SHDBgiaVBBK8hKzP5etEgRWu761aeUKPCjSJeQQCZnZ9eopV3F8vN",
  "key17": "47h6KVDsyQiWzXR1QoeGfGs4cTtW54MXUp12UD3ouAnh5HMUoQFRUti3vGASZmyc9pC73CUbc5YnvEmWbStnSdi9",
  "key18": "qsfjnbLNt6wLFH5GxvGYMnAjQ2YVnc4DkWVDV7gqWJRLZDENx5qLUqAmpoYPgo2uc4KyA4Mih1DJDGAuJ1TivCc",
  "key19": "xSSp6YuP3uaXfwc7zJWaH5pqvJZesWNQB4abKRJnu7jhkUsGVrMD4LfAu4cfpaUWrxwrknaj4NM4TBQ6z1q7yW5",
  "key20": "3dYV8uWruPye7XsQoh8N5MeTX9TyoqcWnE2fQMLN6KtqCW6kGSZnDnekhyaba9raXmhKzWyJvB3PawnoMpYEeRse",
  "key21": "3EGn9D3hJrSeRotZvgkgpxoTukVwzXyUSeUM2EEd3z5A6bXo2TrvNGx6Wzxb1M1rotgjgpjzUE1XkWWjy3EuiYvh",
  "key22": "5gTgKBP1dHU3RtJibFoaHonDejMmAYyLXqgLXWmrE8X3ZBHNn39U3MuJCpmxAy3W7AVTmQdpPK255VvKY22RaMpv",
  "key23": "5zynUYEMDwAZKPu9ADa22DQLweSyJVGqn433c3WguxV1e7kzrpagmpWBxpqk8CQqCzxXEnqfs6sZxVVAcNVsA9Vm",
  "key24": "4KTVFipdcyb9x7uTTw1KQpNG2yLXjLkVLMRp7whPF7o7kaPQM4FXjiVWJ8nF8W6ypJE8RhhvRRhU16WaMyfdMoLy",
  "key25": "5GKzDVmixogoGzEoZ7i3z4GHAzs6r4EaaxB2kVyU6EC1mj6j1YzuuK7femMHw1FynxkaosA1D6R8BwRmumWiSdA8",
  "key26": "NccAReqhTgB2TTSDzbfh333LT2jA9Q7A2dthdRPuKr4tXfZW172AY9Zw8HYHCBJpAhPtTaRoJzMT7AdhCFcPffN",
  "key27": "54KtbkmL19yAgBWyvV6mNtaMDZWy76Dvvprpa5NoApJUJ5FiuswSyaC4jGyCQxbFYka8adR8MZ9gr9bZMEKFs4Bg",
  "key28": "57XiFmTi6sPZyUfkrDXZWXv47t8SuxF2MEuxLY2gACyNUJUr1Y3ACs6CukWkYt7gZaDPfc98K8kMFURX3NbhspgX",
  "key29": "4yAxYrSVCfNCM1SYrDSAshrUpL8EmKKhdpj6it4NUZ9hkoirXgMD7qFgCq2G8AE8s7YweEHvEyJ75SkqCLWQmju1",
  "key30": "5B3r8RjyG1hFx418RJ6JsHKg49Z3UEPT35rVqrKcTgis3jrHSeqWSANenW3DhinHJdvSoAH9RKTNP2t398jPhfMc",
  "key31": "53F6sBQTqU16NH3yNjzY1LA4W9bDFmvw9cDc7pYcVxD3MknK2xyqfCCY9CJQj6q6PBMdrU8Ys3EfL8LvB5JEMNHM",
  "key32": "2rVTpGL13bD3HsQg68HrNUkq3ZzbpYruE8p2YXFrkRVF7EwcTyPLEKFQiHP4TGvdW9mrZVFHWseFGmumSai12nHk",
  "key33": "KbmEtCASWURj5XHytYvLvoZgdUDxY28j1xAPFSiFm7UAMQk3NsU8vJhSLhf2rsnaszxYgz9BX3d2SuR6jheuGgV",
  "key34": "3McCEiZmmGRM1ZAKf163SwQ4NvzhWgHESTbNEvQ5Ztiy5Gs9Ui8ae8q3iASPKhhdp4vV8mx1sYJjCKvX8DMVHBMT",
  "key35": "2TMSvg4kSe8pJLM3FnTiMfaTx3bbvwV5pWeb8CEXawgLVp5EdB6xmXQtuyFZbv8pKwxVZghruknr1o1D9yvCoNyY"
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
