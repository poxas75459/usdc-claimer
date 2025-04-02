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
    "2iDqDSaCLYR9YxoJGN2ZbVbCGAn8vCe2foreoowhK1nV7Lxt1gGdowuLggVTtuLrBRjsd15S1ACL5cQ2iLRFtjxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYtnN99fTnGuNN669aTqr938tnBiizBiKeSfHN1jaZs7TELeWnGwZJtNxB7efUXG4ije5pnFJdNrjsKgUrxkPoj",
  "key1": "4vQSoXS25w9giLKUS38DqG21HBgL18dB6ZBNJjjtENyXoTRZCJSfRrWzrNhpKwAsBtEqVGsstVGJkggSJW9LQe3y",
  "key2": "467vD8W5YNmVkhuM5S4PiandG6RT5NL218QJaXApXXPVTkTeDawmT6ddYueMU1qP6KSgbHRUUc7UTJrYhG1L7SCF",
  "key3": "2PstuDUq9QqH7Mq1KU6qpihFsmjv41v2GXAXWqv8T7xDZdYRVo5qX1ySShcyWnGC9UL8WPSLNiaedXYMeEtpPEZq",
  "key4": "3nA42R316kxR2bdLB95n4pR3nNAx1b5B9ZSuxj2jmWKkvQ1dPKALhQgDya6sgY5uDVAXQNQsd98teMB5qManEfM3",
  "key5": "4hxp4WkVin8Fhn5myxmaS9rjtiGoJYCdGe8TmqDexdVACWyiEhF3eTFjcjUtZtNvn5Ur1soxzFM936mzr6byXLrB",
  "key6": "27Ypb3FqXkf6Aobcie1vk5SzocQ2NAX2dRsAbAjkRH8Tw2rSztiikHYMuDGEo48VZjBvvncJFdYSJh5Xcp1F59mT",
  "key7": "1UqQZbKpXZR5HXsVXyM6qCHcKe7N39nU54DxVHnC5twqqJiafQP2oWmSMfRGLFbaMGqiThirn5s6pgLySG7wSh",
  "key8": "3p1GwzCzACzUN35boZFMaKZaUffQS8wXeUEj8X5Dk1jt77CbXkPBwX7NBJE959eL5Lfv6pEmLsZBgnJ8nqiUnP8E",
  "key9": "2nAAyfJdfeQKYtxGzr2cRzFAWtrBETuEto8tYpXWzqorErNnTHSgTu2vNJ2dgNMR7xbgVcqisxUgVj5qLZrY3Nqt",
  "key10": "4UsSxJRzsgh8RKgb6ZhyD531GFvbv1WUsv9V6kvav8CesYz53fbCmocQSZBSWZXsV51UEEHpeo8GgEiq5976uRPq",
  "key11": "5LLK9zNoVuaxRCuqhVQS7HbMp7z3Edb7f4CnYziv66FZRyyLfzxmyRqhJXqBWFRBaQAeZHab2KFRXXsb9krf64i7",
  "key12": "4Q83Ym7H1jpaDE36LpGkG5dNdDasmwVpiJiUFnGCameFKhj8jyrcrzfvz8oYqq88ahSH3sfyy6MixJ7gmD4hppS2",
  "key13": "2JWFDoE2hLeQY4qFgEzRyJvvVJDCu73g2XEPxpgVqBzbjP9GnbnxPs88XunYcWJkP9oWwweorw9ZRqq69SRe4Vjp",
  "key14": "3eFgyFAGzoPR1Pdkas4zbFgQhSwzEsSZzddkwNvgKVuJEE1W6M8zZT4Q8mHCbjJjLZvRuQqCptayw7oAxNxw47wN",
  "key15": "5cazUMuF33oLhX5nouCfdQGxbQzQvKRG729v64mngYJkdD4GsDVLXYdcraNmwJ2VYrqhUawvgS46cdUfDiyCvRo",
  "key16": "2DvhNhmPuuUMYAxPqKgHACK2m6mDqwGZaJF4mb1EKnAEQv44o9Mr4xdYENfKApMaggUFdZBaA55rZosoJJ152Kjb",
  "key17": "3NTLfR2RjRSz7Jj73b7RRSC5P1BpYPoFoCCMZTxpvgHPq8as98WJ8EEzMwaUGCsLHQ58kiD5Vbk5fd2haA7t4bLF",
  "key18": "3WnnaCF4B7hPGJ3fV3tqKizNq6u3Sk6EwnSKvvohiUkuWiBRPYh86ww6RaBpNSBTxsJb2atJKP5M888A1WuN6GoL",
  "key19": "3vkXbXCihBpiHH9c8Yr4dv3M9tvPcDCpSnGkbgswEDVbuXgcHczdsuZLgg7CC8XHq1FR3hDP231th2WQtmKfFsRt",
  "key20": "5EJ5VATtYLVZP7w77uxtVHDHMYzJHXiKw5W1gdg5fUXpiQduLQn3VvaPZdf8NRMkN2QDAbUWz9UvFrkPriGLGosK",
  "key21": "3hLxqkjCSV5gtopdEfK6AdE8qAhCh1cAdRjHY1eYY3Ua4pfNxvUnLPS67Ku7Q5s9Kxc6LoYwwsMMaGYujWnwTtTS",
  "key22": "4Ah8fQC2WEPYRJZpbTfQxJSg9tQpQQAxJC8CVoR1JJbKTErwm9FibfPePiwombkQZMeSdfmfB1B7ew9aNxTNa9hM",
  "key23": "4SMRUmn1D5bJyDkAF4njzyhdTeW7q8DkymydjdzXFn6RWuM1Vy7EqXsSxMZwpQ7TeNzvtscTASn21yLHWu7DfXte",
  "key24": "MTVLpXLRMemRphM7geGqrRw4cakMCosBzSKmQbiGSFraV4fvYLMc9cEyngASHqd5MuvDkDppkbSc5wgyRaB5tKN",
  "key25": "3Gg68YGacvF2TmmkMuFzPApM5bGt3JDPPbmCwwMh7WZqmWWkfF1bbtoyoGKVYY2bhBT8LuYF4tPFse1KtVy5SWmd",
  "key26": "5bRCjXMVjsePqfKRQmqkX8GiJdBfbu47YoKQnXS7XdJa2jY5McNginC1AWGD36izTk6to8hj3LUhFGZNf1Byc75M",
  "key27": "5UkdDkHcCk2kh7E1D2DaJhLcm5izVkPkPnDXANDGTSo9Q2bvgMhitN1mpTg6LhmTKTno2T3GwAAefovC4bte9MaH",
  "key28": "667V5JVv6c3CFhW37n95wuQSnP3U9mTonfPBu4GwH3PRKd3sFJJGhJfwMyLFLDztrXgfG64PrNHMVLkDQPseUb5B",
  "key29": "3ubeN7N8nZWQdRrRU2RuJF5MDqEXJkJosrVW9nDzYUJzmDQFN1tRdqJHLvPtu1z9KZwh6YVZbVJ87LJ42dd5eVo3",
  "key30": "Wwj3zEyTmJGvd7vW95TpgtAc8E7aHzeYwM8pCFBwff2Mhyfkxmjr982htZDYWrGErzAmYB369yk36BbuEyp8wQP",
  "key31": "4C9KDcF2RrCNQFB3ecF6JM2JcchvxuggxmBgAfpiTFXQYx9QZmgZ4uSNFjMSo9PenT4JsegsBo3R53ePAnVLNq6b",
  "key32": "3dsJpkAJNi6TcYEztuaSVz9b5gvXwpaVVw93iS2vXvsqJBeDeqgPb33coJo4qEmbf4kFfgHqh5jxcbpiB9mmw6mD",
  "key33": "23RPRExY5W54mK15JGt8n8W5GiF8tRgH8pHveN6XUhTz4Eo6TpQRs2pUifG6C1zdNiaeAfxtXApzttKE6CGE4NeP",
  "key34": "LcGiWWE3fjCY4sMtbHKbo7ctn2UuCBSbybo7yxJCqLmqgYNccCtcP7DFPJDHVifv1wfY3C4bjfyBbAbWcTUCk3T",
  "key35": "sQrHKtuo7kXRUAMUWJGmPdApLs7WtDhkSKL9uedQe3mryUqGhqVWBzv3LJnLViEGdhjGdDAbdSUFBPwLUNsfkXa",
  "key36": "5WKuGGAofGnqEj5krJaJumzp5MkqY8Bi1vwEwEexQ7jPfCzuF1YqaywpYVqWs5veZi1mseKM5ZSx9PLGkuYfXwkR"
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
