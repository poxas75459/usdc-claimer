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
    "5odDjoCy2sbDgKyTmnpZCkASRY1M8yMcs3Z67VEhNpc1oMoi8dydpfjvddPm19fKrgRS6ctcsig4Jbbn3AjvFRPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4mhNC1EhxwyEu1qhenBH8PXtH86w9KCR5M4Rso7TSxQeqRR9SSa7AWK2CYjqFnusDHACdELbAzJ41jvUHPcLsq",
  "key1": "5pBNqRz1CKxGsQPstWeA9hgCjRbxu3xuMEqAjM3KQ8rXFmu9nWssDK68y4PkTuiEV8hiHtEsU4sW6PhsLUv2xxGv",
  "key2": "29cujZ5K85hqaNMPfUQUVXCMD7cQEL7oRZn7SYsHm2foQ9ZNYaGiUkvMtx6bxwvPxwAo1hAFvo8sv1xvXcktpBrb",
  "key3": "3io5zkvxZEN2afRSuf21nzLHYyCj666hkc54BjkjAGhxwsPPwiXKsAF1FDBvQo75odJGva3KtxJvDBymC661NTvE",
  "key4": "DEb3KuHoW3A6tsVenisXv82HrZbSPwytdDYo33osCBQCET9LpNCcwQMkH2J3Wtmp1LqJdnGgUimLNcAnkPjZToH",
  "key5": "o7xsRa6a392d5LXKBR3k6Z3WjUV5Q6HKcWWhnggxRqdP5VqedCG3eWsCrgqcqEVHZSJrD2jJaGQF79xB39kFqgH",
  "key6": "4yDq9pUCfzo7prDXXLEpKeQBsn6zexJJESgWMe11ZB9NfX45EZ2KTh7LqFbCec36EKJjvA1vko8qmVZ5WYu7kUgm",
  "key7": "KiUf6XbjX1r9zpXJujNQzi37Tdc1JfvmuBCshbY3U1emGXccjg7kf24sXkeoWfmVsynp5Ly3JUVQ3nFT7dihZxg",
  "key8": "2V9v74YDcVz7enhYNdskDu8dpbswowXSiagf1k5259gKqiqh2po1ZtkSJzHoXu8p8YuJJHqvLAKueH49gsZBRHtF",
  "key9": "2Vuw5xXcXDf3E5vdXYv1WdvYnzhACVAn7jznfLiut8eUxtX45kaCzywvsZ4oxJ5pLb77XrwuvCcSrRUTJURcLwWu",
  "key10": "3kKVw6Kfx78E6FL7fbvPhx64SDnLJJYE5jocPivBypnA2uk4q346nzbcY45oRj1BE8qpTnzDXWtNetTL9GmgJJBU",
  "key11": "JiErQ5PSa65CY1yMtDag5Juwvxjwqdig8LNfePEyWpN6xf66EQkYC2D5yCjyTcsZBFZq7gnN3hYNxjRevz8Yn4u",
  "key12": "4DF4Zy7h7tCAwkBVFJQ5zBuEkkPR8yaLgHeS25eRBzShV9GAMjTAuiaYMtmvgAiyXP6ABruTQ2py3TCSyDb3S2MV",
  "key13": "5j7C9vb7aSvDYaXrGQipqhNcrtsuZh2J34nBJ7beHVM4ETadteZt3SStPPPH8nKnLsGjiYq2HCPUtvCpXAEKJ96K",
  "key14": "52rLPcSQLdhbpvRq2F4vZtZTCWbu9ADadAAFbFoPk7NZQnRnyd6hnNBPhqzeDffm2RbNLeFkro1ZinJqf8XKifFy",
  "key15": "d2uQcrBmwjgwNp5mHxdf8rnPHbNsfJLsKfA6pTCtuqMckRvq2A7CKiQHYHWgdy86CBHDZBZLf8FNxgaiCQdbib7",
  "key16": "2q3HeV7BD2PgDTg6yw8jDXRUFXvXdP124Y325VCcx2pG7fTZto2xF8fAfJHA7gteArdBSe4aiMD77hdSiTmG5JZr",
  "key17": "3ccmxbBikAMz8K73jRKtTaC86U1WRrLF7Khob612U76mNpHjT2fzxEz75cs2jZjmoe3VW6P7fvU6n1yAR59hn4Jv",
  "key18": "3tw6mfkytL9c4pDE6vayZLNXf9ptGkQYww1nw1si4pbx1QR9wMypiYzr86P4cB4S2mBe1VDhLUDXciHuQ1E44Go5",
  "key19": "2zziPSB9cKc6suJ1GopKxXKeD76czek8swvMrgHmJcHXda5A9h3BoLvbQpfQAsvgtoJnQG6gvURyEf9i3H7m9XB5",
  "key20": "2F2styK5mDN9W2SearRFGkKBWXhmywYhikAZDDqAFgsoYgMKr8MB8irQZGG6M6z138zAF9Db5PjFNL4zT9V5qKnv",
  "key21": "5gNg5kA1mv8pP8ie92oaE6mdJRGe7yXDK3U8N3AB1Q8coBdcS8iP8d34YVARSBdRWbJDZpdmX4JYM1AukUzV5uBM",
  "key22": "3fwNeGj1MKuDKdVG5XdnmhjRzucsqJtiTwV1FYt7GARNfLPBPGKW5B66k5b9qJ5XnEk68NbFj2BEpEGPXHYrewGf",
  "key23": "2FbyRW5uLSh5S7nJFwS1KSWYfFVSpLhv1UxwJAGntsDXRqDaakNAo92LXFFHLxfpd1J7ccGbLeop2usMtK7vkDJm",
  "key24": "19qgupQguZE72w82N1Hfx51FeWEag13wzT7wQHMBs6nLCShabiS4okqkfM9uwYokFXQmsDhsbyALRuwDHK4w5Bc",
  "key25": "2EKe9mpPSSwkeURTcNEWdDjrXyrJEVBy7ickesrxh1LdyzD2GNRzbVhp3wndCQmGAX1rNFTtQRQHw5NYudWfXw7",
  "key26": "1xTT7CbM7oC9793XokKQ51t89NyW6uAe9gprx4yZ9XxJ9gwpwD7eAhdWc66GXQ4NporAn26agixSkFgqxZswPLs",
  "key27": "2HJQQ4U1BXuezYNoasaGPZeSjMdPPS8dEY5s6CCRjbF33huaUAdX8cqQu77Ri7qDRWjW4pCpgCaLMWnhxs7sY7RV",
  "key28": "2WEsGXoTkGDMRN72pbY2K9RZ2zgyZieonpgqbYpTomfrEhaSGvc6Z8SFZ89FRztcqngkf9hFdoWatREk5xdJ8ZfT",
  "key29": "3Hd5rJ73cjJjimG5oBMRDUHqbWh5eXjtmD9G5vddKhPHuoHmKLzVkav83b8WW5m2eBWGSr25cuKv1B42aeZqnzVE",
  "key30": "2BG4N2pKT51iEicqFDcP56tsLT1mM3XvqebsxaQH8Hm1t6sgQDVAci2fm1cxnuYu5SVCsV5VZm5dNqR95PViSBzu",
  "key31": "5vFGfcaioWA2y3omMXXDysPTVkBGZApweU98KfN8HmK9jz1L3pTGfDaTY282rk7CxzoWhHyeXhzVMZ6zM6oYXEeP"
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
