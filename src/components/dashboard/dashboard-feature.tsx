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
    "5qLaWLPxVxKY7Yw8uTc6y9YpGvJuq84wxWsjFRZuXAeW2rPztvueiXeE5KKueLSKfoVoRScAjhangsEMsKkCe84T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKWHxkA4x35SfYSosQYfnsqk5W8U2htcTPL5jaCh3m2mcMQfmMTn2RxHdeMWuAbwcLvZCeuZiQuG79PK1ffQkGy",
  "key1": "5QYB3foVF2zxTnfaF8BRQCFrYUQMjYdNboJoMyqWCZd7HW7xZcRaeNvNCXdtdnEeLNmPabi7YNkZJD8wSmzQJZrE",
  "key2": "41LvW9M52VS18mJbBPydQ7D1QaSdXymtuGkDaLPoPXjPRUYXpEBfY8UfNNA6gpmp56B8TmX4LwKrwhw9XxBNdpW6",
  "key3": "3B9o2JtWwnbzzsjG5Bya48DnBj7JDbFBNfDdQU9ji6qGm4K4n9hpC9iRAyKvVLJCBBu7W3vJbDpW7Edegnbg2JSC",
  "key4": "9EhBAPbG6RLnKXGSJRdTimrSrzRFn6spJigbhVgDXWBeWnLXaRkaCsw8gvwUwLYaRMa9PamQhWuK3KovPoekdrg",
  "key5": "3iXGdgqkQGyH3YAufvtduxUi6WSwFtZAaFMMC5rbFVbu1x9TT2Yn76ategivEjjPW21n51jp6YhbEQ4pSctvpHQE",
  "key6": "21zQV4EmMzzxzqyjnp5VsXFB5Tfmp5foCgad4WozRGdBR5eCJ7HLNEszhqvjReaapUsyr7vTW3yuG4BqpmZ2qtkD",
  "key7": "aKSwqTFRFfa12nB3tA63j2n6qp5aRJFHHb2zXXnAmU4hEGUFzPi4QHywvq3cfD7HyV5WprsVfwFPid5s1uz8TeT",
  "key8": "h5WzHNod2nRLGCUiR8sg8VpAbHQuqAEwepr5PaA1rZa4hPnDtyqigqwbH1z2XJbLtmx2b7erC75oaDgu1SaDPb5",
  "key9": "2AZkVmf9VrxkrvszzuBro81DQHUejYQxwgdxActqEwF3GUcFnPQQceDa43rhJVshXDMY5eqWk3X8Ue96LPfsBwMx",
  "key10": "5RGoacZSSoWSUu5MbkHFv54Ki88sHWMUpPJvv896NbM8B4vN5zQuP3uPA3ct6cpXWjGxe1CAi2CgBQ4UNu6E1rnj",
  "key11": "3J8kHRcJxevDYkJPos546hKZ5KnLFhCSPmHND6KjNhmWGZBmr2dzQ5wyncAjxEQZBBghVTtbzgrit6MphwinGb8w",
  "key12": "2NeZbf34bkr1Z76UkfqRauE2H6M3uwtD1snaxCquhbYiqFprWSPMCUTjq6DpkEfvBDTRs36VHcvGCK6rt8EHqXgS",
  "key13": "5AoVasKWbg2AsEARCtjxjEb7Bpqb6NEffRtNxfnqfZprn9JtVKQnU2CDFCqYRRdzxKAs1kwYyg8FdRTLpPBRHnLt",
  "key14": "3Lu1ZPYqjVWW6ZJGvipupdResjoFw4eyQUbL9XLW7ego9eFGn9M5qRqhRJY7G4s5YnjL3bAZxZ6Fa2333tSLx3xT",
  "key15": "3FZhxTzZyfXP8JTPd3hdq6SS9SytmiUSg4deMj83bWPq4fFeVgDXQxY6ixQr8J8MxFpC1QS8WwDKbnBLVvA15bcp",
  "key16": "4qp4xMscWhx5NbhutcntTVb3zZCxFPEtQrWkMfxvN1Tn5dRzvn8AFsdX8wuKLyu2mKnoU3Y7GzwhfqM2Y6YKSbQy",
  "key17": "5LAXien3xpArUy2hCbh943WpYMgmhucEZazMdKvqf1qcvvFSP5r1K2Sdy3WNQGX3qE144TJri71Xq9E2tev88ymD",
  "key18": "5ukbTQiwqZBK1wi2JhRhvThMX6r7oaRd9vN5sut4L261mo7oJ1yzftif97ZkxyoaHuJtPGQ843BjR7txqDJf9eJH",
  "key19": "W4DJpHy8mCHjncJmMH7icbf6TTb6eRctakoiJTZRFsj4BAjhvfv8NPdNG5Fmy2FzJid2Srt2oL9n9mrztpcx5j3",
  "key20": "67jsBE5Ejakb7KqHiZrd21PcboTJCBtQYMhrDHYtYZzDSVfvnfJ6vTK1WXECYCjCVQSCLo2o838bTbXPaiLpUGhU",
  "key21": "Gwf1masdVouz1y1aFpxozMKq6KFDnaxfNJgxTHcbzPLd25paPXbkPZgqio9Ft5TvBKihtBh5Y3t7puugVAfYWnk",
  "key22": "4Wh1cJvBKBf4PwDAz1dKkoBV3QfzYBQRDeRvRXuwrdEQoxaQUCcYHc3uSZTSQozGAVeS3c6M4cZbVDyNEFgPDeho",
  "key23": "s3yiTtRzRfMWv8zxjbcmaXdxMJxJJtxrJYGWTPqegHvXVDWSpnBwpbD3x7zAQqFoc2UoFD34qHatzCrS6pLyuPZ",
  "key24": "5TyBwvb3Zsvv8Cr3MDSUZBJ9tqvFsRwfd8QL76qziNwSEzaea9EDBf9LRY3MrNwyG65hf14GFjtaFeYPJCb38X18",
  "key25": "4dsUtAza7BGrBM9hMYCvPbsVdfZJDmcaBm9hhX1wYMcnSGH5XxMPmvuryFmYEPQfMHNXywdAdYsCZtpyMoHTZmyz",
  "key26": "GUCk1CksShqWXcLXc74Fttf4ehurb6JYX4NBPsmiA3ft6Dtp9cJvBhVseqsssR6CRA88WMLDrBhj7WSYFoqCUGM",
  "key27": "3ysfUgvxMgPhREERie9VpR5C12HZhixckKnYy411ZiYZf4cakx9GBc5aLdfbV4cH6mHVRQJW5YDXfKzjEjVEGF1j",
  "key28": "4uUW88Y5LJuXgPBcYfPcnWFDC7Mtye2hwrTQtUXiBKLS43P4u5kMCJao2vdUkxNf94yeUbjDMBuyEAA6H16GBrQk",
  "key29": "5NQcSPYb3DHFE25GASC6cNDfXr85hcDXVwBNkmFrcRxBPx7bv6BrG6BkfGs6HnbuTdXHXiwj8xuETHLB7TLETNS9",
  "key30": "5Uuay3vj2nCQC2oisr5BTfjXyvnduX8ijNsRs6oT289WntqnT5wLesLQrFdiAJuNmhPfJpPtEKiuKFXF8YZzXCTM",
  "key31": "3TEm9utsEHF2eWFB4pa9hy6xpkmuGNh26cYJAd4N9YRyLEHwXU9mripshgVtPX2NMfBbyJDN2Y9B9u864ridswum",
  "key32": "26w6U2e4Lz8YNHzhczPgK2TBavJEWDTJYvoGhiEjgVKBacuPNM2GKMC7w3oamrc96yTY1HTkkLDTifdnWDHEwt4U",
  "key33": "59VE5HsKPDCoUoAvQG5TqqJ3rTNAw3XoamvX1u9kUj5BsEZ71w1tn2Y8QwP1G3Suu8Lfk4wMN3Rud1aBgbqtTSuh",
  "key34": "51jJAtgxafEkTTtTcs2eZsto9hFriVzjPqpZYtpJF6qpsrYXNWqBsjgRNwgPVSrUQwBX9Jokvwbiibu2ppQ8X94o",
  "key35": "2ShHsURpgoEB4e92citWtFPSnMJ7vudB9ykA8EwiZ6woXZoegW6VUTPeLCDJ3fKW9WmjJeCJfZ8FvE4pKZDfjB93",
  "key36": "2ujsFYBrXpGY1S8CcQnkaEKzFHZsqspSQv1aYm6rJnmzYgxhB45ALUuomrLaeLF9X39QzB3ramdkbd3uH8pGNu2f",
  "key37": "5wmay3Jqb8QhXhYRRan71Nkmexb89JTXXYKjgyaMau8ngteE6sVnvPtKUaDm7X4mPXhr6LbmQqPe6oq8BywoKT5u",
  "key38": "ihKr2tKXryqqRhGchc73oQq5mqh4uo4vkbhzMWM3ytPvw7mDJ6trfMJJ8EwqCjpu5NjQYeKpGSNCZBAYTVKWoSb",
  "key39": "532kJt6GLuuqczEKttS7cFEGiFnYiEfGvjKAZPYnkRHzbwqcuFMK7UJ1iFdKeASzsKjR7hJzDFcebnMbB1SXGVsM"
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
