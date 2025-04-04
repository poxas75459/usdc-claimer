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
    "5qHYznVXAg7DSUMJbVQW9icadF7MpY4pm2taNUgpHyQ3zGrahc2cgV8tvhz4LshHWgmUkYjsFKwXnsFpQShv6HgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABNvUXuKR9sz8yUXWFVdUMuHFMbTmiYyzwKRxCM4KnzwraijYV7AhgX76YgDZSzxMdWiudK3W8KF4bDp2UsknHC",
  "key1": "2xR8S97AJihASMa2FiubaSPP8MExb7tKG5qVyo1jADKk8gcnJZk9mazgQ5ULFqP7amh3rjjZLDeKfPMrSanW8gu7",
  "key2": "2cF1PKJoVtn4V8LXtZ52yaxMrduHWZ3hGjyTXd6BJy9RqqVjHhQSnqH8tjzgwGf4guEErnhQ7qk7Y2rD8hWJmjQf",
  "key3": "wKhcpzAevghVEhDk1YvzVNZJL3FoFYRP5CJG4WNUfGZPP5PPSrtpWj1j1ZJXKraUq51qjNpFaa1W7yhTJXNksNU",
  "key4": "tUUrgM6DR2JoQhpyQtgN6Ziwt9WPEUxuHrao9YHaj13ABP9kxcPMYLjahqXvjCtssoCv8t48UbaDQKyUPfk1rr8",
  "key5": "59ds8MZ61TuEkJgHwpJ7b19LHef6czS5Dttmots3RiwsNUU7ZM6nwH1tueCrFRgqCDmNVbfTqUKUbtvNKMhjoZ7F",
  "key6": "54cAMYqBgov6aKxUaP3i9Cz5PZw3tWgB5bAqRPpXizVqVDRY5h2t65J6F37enX5YC9eKn3AqZHwMZuwVppEWHXpZ",
  "key7": "4Fx7Fr8Da1BXDeunZxsuGAYUaM5hfHfu9agYqd2main7EbMjkT5vi8aP6eoyA6NFptjtegW6VWBmn8XiCdv7MH4y",
  "key8": "4YnKt2oh56ygMpiayzKULRmkznYo61eBHh7JVxqKg5N79LWtu4VHwkmsGyfUhzxp7YMtEeEhULjmNmp5P8QHsHa7",
  "key9": "2EkmMme6E9KpSAjPZ19bVJH6NoSKD9b2adJErBSvJCDFhCN8mxD3C3SGTnXMCHPBjuVmKk2xGkWr8cjT7rUTyKCo",
  "key10": "4J8oJC5i2U8nzfoXV2cnjhqqdJBMmdQmx4MYZShs3Sm7AvjYSp3pn8LF499pGZD7wyReRsj6RYnYuygXGmDge52k",
  "key11": "255UsxEZJFT1XDWbhjykGFPmDKttAMfSzHgLgb9TbJg1X2HD7g1NRNF1VM8fkBQALiDe7nvJARLAoeXPFAoWBegU",
  "key12": "3SJyCH6Dpb6s4Ubj5pe9R5T8N95xK4agqxx1Wy8kqdfxTm6EPRAkBcwNVe9bNxNNE7m1mCozeL8g18LtwtooggmZ",
  "key13": "4CbakXiWX8H3aRWpn66d6Li5cHxpU5cwVofoeAXgxgcyGoC9DPHyhPvjJbywA5nwdfrePT8Y7oAybCB6ad8L7vEA",
  "key14": "4Q5CaJ1nSMNDtLp4HoobUBV3oH24QkPc6tWAqb56FEVE8obnYSxYe8KRtyBnGg9AxngrdntTCsp1hh9cqgxaagFh",
  "key15": "4QcCg6YgbvkxwonYVj5HAurozyCL5ioU4JdK4LzUdWbhVJXqWGXXKs8nUd6cBvwZwxgvfm525bEfBF19b16BEjQo",
  "key16": "TFvRi3VsVvN1Nmk94gUoiBH4k6bJu3Gc3abMFKU79WZrmLHCXh4hoPa2ypMo4JPn9Gv3T1gCCSnhV1dzpP5SrT5",
  "key17": "3yCo7VYNCzMygLdbGsfFcsieypdSSECRNFQ54NTj9AvceMwdB323BdaCXTPkkuTfRAn3TRCUeD9M5FJLg8EVRcFD",
  "key18": "3NAQhSTbVFaBRWJSxnPdZB5HUBto1qaR5RbJwQ1dKvjGF3pKE5sCLLM7GjzksqxfC7JCpa6wYQvucptXEiH6HGkL",
  "key19": "4b8njv7y5VaJDxh548epNsNEnzLBYN6G18hEaxUiaoeH84RzfQzm1nZtnivAcDrM6B1unWWRGN6bpfc75R6kSRBs",
  "key20": "3PitcPsmt8hADxskayNXVV4qSki6Rhej5fYq7RxF3agQBK2548yJ41TCdnx7VmjvXnGHHxY2FogW6qKDN8JyafqD",
  "key21": "2aaYuQb48WVsFJ3TsJzgojYfRjvpcxFhB5ts4rqJtDQ7pQbxuW2frZpBF623aTUFGALQUfVAHeQ4mT2CdiE8WVEC",
  "key22": "2nbMfTivhSWU1PDMxL2PAmU78AK71wGJ6S9gVmNkiwb6br85J5acdF5XD3SV2EfGXcZnHtoFPncLuDpyLax2DERc",
  "key23": "2wxdgBsqbFB44fw5x1r77V5wMribYCNkAk7UiTztH77Hz7kDaki3D9ha1eAb8vgsTmP9DppMxCCZnvPWrVmJzGr5",
  "key24": "3GsMnFVwqvKz8mKiB6ri7qLopotGFLa2yHVnB1DcGAoHELnkqp8QzfBcCnmivShY5XCSSBZPGcqovNMT7KwENXBm",
  "key25": "4TpVguizDgM9T35TV73yfVpDV3r8Y1Ns9hpi2Uf6GBBGfeEVsNk7twRphpf7yTTmPpeBqyHu2NrwdB4ZcmD12wcT",
  "key26": "4bEoCKjedqPYbJBesCaQMtgaNBYbpM4yG6fBmpPZYKJM3B2s38NJenhfsAbmrU5hL3nGj1PJ392opKNg8mqjnXam",
  "key27": "hb1JRhwrn2axMSk3Mke98Wnt2Rj9UgV9JuN16oP7dwsEsjrqtg9DZgm4ZtmuFSh7827a3nJU9rQbKH7XHVydifZ",
  "key28": "5useqybiwFxzvfeETyBvHpUVvfzT3yAwfmSiyq6p5XHXxLNUacN8bvXxBAZjCFTxKKvbkozAQPHvtqT7iKR6tKhy",
  "key29": "2kHTDgqmYkqiTNkdSnYkTrHg7uynnFwnLpjp7Uw6QKSTGEVF89s5FrbD47Y1vMKtZDVGmkBvfVERqjHQuzK9DAsD"
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
