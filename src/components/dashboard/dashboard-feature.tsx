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
    "3chMJSTkurQNQguYiF7z6vLQZ5faVGkgWDNLGGGL2L85VucH6RHj6ZrJGiqt63roDNQpukrKYpRFFgBgBqrrhSnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjSfsr8SMHpjvH4oHZhmywqzRx1kjHJQQ3HiNxHEqTWCiatNS6wY1bBt8MFuW3gSrAMmLJ7k1FQ6A2X8tdJdcV2",
  "key1": "4VD1v9Dq7xuEucM47XmeWZBbRst7eTcC6LvZbM4yxdqtnKEFdqejAGisBZ16gcJg33GttN2CYhrBzUTn1QokS56x",
  "key2": "121tXLSZ2wsJaujiuggK7PXpu4jkKPeyjayPJnxf13vKfpB25P6m82EXxN5fRAte4SVcskVWiA5kDoodeyyVVPSo",
  "key3": "2kq684bmvh4p1xqTdDuDHQTpp8rpRcqCE3hqTjNLMGmHfugqpZfyVV4zZiztTZAABA28sPoCwPxxWhCbpziMs2zd",
  "key4": "2owKkdH5x3xRJMDauCAuvQjZbyBwQvN6FMz32aQfmgs6xUQYxMvwhz9mrEvYKNnLdgZeHNfHy5zUJjgEBRD4T9dE",
  "key5": "dPB41cU6FTamejLM7XLhhHHZSJ1A17vZoCwNQmaErUE8mkbQkXjKLnQQJFc5U5LbBA91W31HPL77Z7cNZtxees3",
  "key6": "61pBzwvVo2hFBh8ZVUSsTnQnR1D27hyysxpJDzRT78CawNpvfcoEpYGXdnc83gSJBTRo8UVbUzrHnKhjEAKfbdfN",
  "key7": "2cVuq473srSr2d9hwPzYYp1rLL7mdVE8RuMD9WoLDnqcSKkxUNtXyQbKy84r8aBbxAigMaQKnRAKBp6s2YpnxGHw",
  "key8": "3hDUiPqcVA9WDK1RMDJDEL4RgdeB17zJrzzt3Bm5z1nNTxZQEhNwN5nk3hSxba5kdwtRZHPU1J3ZCyCVxfRFzY1a",
  "key9": "2VUbKFvgCpLDApSuuWG48xite1u6zX2A8hZYT2cubQ26rBSt6apw1QGPCbqs3xwUBAxCA47KMkY7jqEn53g7eHL1",
  "key10": "4kCiD2qKNWLRDgJbF9fCRwZ12Xt3XrJ584nRNvePerHUPHPBc9Z7tjENQ6PBs9w2baKwwd8WfFLAikWV3ri3eYfQ",
  "key11": "vRoGRXiJyuyrT8fJJSKKE7kfJfA6GfPrvCg1ynbhggkDXWVct1QKSgCZKcfREPbEG7he6hnUcNnBaQkHSC9DAjE",
  "key12": "2YvqkV7U6ztQxcDzpZBmtB6txvXJgH2KfFpvaRbuWkBzjAe6XFnNkKP4A1eAJjy1VTLNAtQi3Y4ysTtENaez8Dzt",
  "key13": "3pJrMAB8np1houMyHPuF1ZrEqaPCT2hwq77gpu3rcnXTQpi4Lx1yRVaNrcgw6LPzMfg4Ac7DkijcUCHUzLLdL3ML",
  "key14": "2ERm4BDC8QLGYE5hDWVJZQ1KCAyCQNgv32ChU8iWctvtu8Ls7dzfKfV8u9CRkktDb9RbjotpwHxSvB9VGa4F7nR5",
  "key15": "5f6t5p48Esm8v2JtP2TKJ8UheynP7scx9vWYDqurAGuQxwEQLM17dYfDC1LhgTH3hwHiuJqhifygNWJaf47yivdc",
  "key16": "3MmHg6WNtEv1Lrw7V78DYcHZLAgmRJEsiAZ76HHMgQV715H36nVvEps8EYmKABcg9zBu38274UeufUTSQpeknCXr",
  "key17": "5zcwLSZoWVyz7sD5xrZiTj9HWJAfiJrAaGKqM8vxRY4pmAQGULbkZb94ReBuJ8Wfgpq7Lw1Qk2EnDZjycdNvKD6i",
  "key18": "377wxoABUjAhnNVwzTjnkrv6JwT612stx2DytbeCZaT8rjiWoctp1R6bR9Bgp3vmUrDvoLB99cJo5pSSzKjyGTQj",
  "key19": "3B5TTswjcSq5f6yW8JeoxyyXDhPXYyPBdcZJkqr5biW191ANzfXeSx4VWCK3HBuUkihwoecoAoB6mT9Vw9NpCgXS",
  "key20": "cNQsM2q5gnVB3jfQPTaZGeqkniBVHQi4aFKgunsMZsj7D7CB7dRMKvhmmV5cr8W7YGvz5jFLKDV1eax2FjxfdSG",
  "key21": "5vUu2rbjEtMhkgqzcBB3ZB3CRZTgxRpsXriuTr2FNwv7bJGoaeav6eHueENEA43Guaoz1fkXEaAbB6h1xiVepiir",
  "key22": "5ZhqQVA96oTT4BxnsfvjfTUGbEpKYYLS2xyKmHt4wKSauJxdUL2yZvzNsLuRUJXZPED9Yu7NooQFQvgcs225VEJ4",
  "key23": "o28XJExrpxj4HGBN3Cf9oE2SJC16kCzSvNK9Cv3d3GjUwyHNnWukLdsTzwqp5LVdFzQ9EAdv8dUcxHZiN8Z3duZ",
  "key24": "32196hrr7W1c3cTUSxWwH4BE3JZoBJkcT9HHf3c4jknP8yswoxBYRx88qzTfN2EnwN5bExbYMTJEb6HhWHAxied7",
  "key25": "2j2QZeYmpQesa4p524KyfWSLTAWeu3hzbV31Jd6rdgwCQ3eMLQRmhfMvhyTerGUZueAuKgk9Qs8uuCpjxitDQfJH",
  "key26": "2GHguWcQvoHfJURg4ukssyxt5m4pGZ8JpLcLDVLUCzhyuGMsdtTHQJgyuCqHnj3rMWTY1FLjutnFsvUQZ8iBnwpF",
  "key27": "2B7bCywdQsrULw4ask1Va4V3KnSdBC43baBuzKNxgG7b4A7BTHMWNkwmzNfVTV58EeCPpEkb8zEbKjHTbNTShY2j",
  "key28": "58d6cMdgFPaWYN7pZB9U6AagPd87EmViMtymQt8my5aD8ga5MMrscQd47DM1buNZEwWcVCfySHQhvBff3zykEGdS",
  "key29": "3icfh8q7DWMrs1utgpfnhm42R3Q7Xe9pTQHuHpHqE4zL6egCmfBbkiyKnt3LZ1fjq94qxKaS84YTYiR5BHjUiuEi",
  "key30": "X31RXBd7tiTLab1ctb3whprrjPMGbvbbf2h3Nf32oUmmK4y5H2MQUKpEkCN1JYQXFxwL1uQvMU3AQrYU5iXFacL",
  "key31": "3Uvbbax5wLxcPpYNTKEXzueKqNJWqpxkPhanfqm7KigyEGmgb914uSkWtdK5jGeASstAcQwFEiKrZ7UrTevDCawG",
  "key32": "67ZCTACVhZhjmhaqhLdwUZkTLUY454nRGKoXZUQn7jBptjgkL5FakcN3peY9GD9YJg4cfRKoSg3JCCeCLkm2w91x",
  "key33": "2MsWNXhPg5x56eYsXmV1JjuPcTJi35PZ1DrX8TuYtvKABxFVCXTqHdjFiqcToyWK17Qa6fnvbpuYXu3MjT3t6mK9",
  "key34": "tH3HmHPdD3zty9oC8mCQPQkhkqgeVFu8LM1USYsgGhvfRHdw7GHBQFF2uFd9ddXBSBHYpmNLwehyWrJhGHKDcb2",
  "key35": "4PhL5e4Un2iaGqCnWGWAkPoSSGbGGKu1TZ6xqab9vTV6b9SCeFh9QNp9cP5WRJDmWG41v9uoEkXfx79K4sdhiWf6",
  "key36": "3aQmEJccCQNUv6BGsL1Q8tyt9CSD6xyXDCohGFLfoPax2tcGnj51wexaAnzuEjqQ2kkfQLehpSAf4LqRKqAujgqp",
  "key37": "DhUpGtfs426CzWZ9p4bE72KPhPHDmiXXyfBetnMCvyRyx6fbRkPm8Ce9pHQauwx1h6Qi47MNNksb3efbVXksoaw",
  "key38": "4LneNqHd715sXdF886yom47DWPff5ekFdYCC85LeEHUWH8ravkfDbFtWx2YiUdSKKvfGPtbWGbTsELnc6HvhnoQF"
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
