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
    "4uGS13K2mLn4MuQPtkVkezPFSRS5XGzggZi8HdrcN69ZyRSJ7UnQ12tUq5caB7sJMcd8rtPniwdbQYk11cFiguUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47wNct6iQQVMqurmFeJry1qhnW2WXAUrFhSauwV86XzAFNGv6Lw9VEa7yaEkTTsre2VJ3T9Ex8gYiqx2HR8CUaAD",
  "key1": "2ds87d8gwZV517N8JS7UpmVJdAyFWJ15X4N873qWoBbRG8md1uuniPtyTUhmsrvjE4umXv8nF67S7kybTm4DkJfX",
  "key2": "5ojrHZfbJhW5hECTw9oP4Vt5Grc7QNPDg4P2CSRDuZFzuARsGjAX1MGTQr1cMrDcjfQzLRLstQTzkpES9ueeYH6T",
  "key3": "TBpgweRdBTVXSRtYmBVzqJ1WDZGTzxzzmmbezy2Gcj3e2197GRfzk3mbecrpn3N2TaSUKbyZYcixh8fwzdNkJCF",
  "key4": "4CNfUAbeX5UcfGfcAUykKu3BFrMgP9pa98twjA8GfTx5fvWmabeqzMfopmyfcuYE6WdPPwK6hEqJzY23xWiQVt99",
  "key5": "eG2ZLbCWzzC3bEv95MBT15Pnsayhz69rKMMCTUBXG32pEb5T4BvyKv2RKbWEtqYWCDgKtD48TXbApp1im3wLfY7",
  "key6": "48btdaUVK6jzFw7WwdaQPF4kwyx1cUifXGEK8WEnVzW2nL3ferncF3aXMjZiATkc4nZeFBf4b2vYqoX29nVmq4YP",
  "key7": "2Wjqs5LLt3b5wFV8FtY7X9Cv79s3BPJS5QznqtC65s3j6bXYRqGmFcpTUVxho45bWsnude32FgBFJA62FkViAWSF",
  "key8": "3vDdUFCLBihH3rcQyef3LFSzktWqH5tEiQCAe4yBaP4Gie5bvJEb44LEUE8KiUxFVKK4FGBVsoBYyU818A54w7wc",
  "key9": "31Kxs95rmUBAjCz3xirTGyPwQkBHP5Vmo6X76g8QCtos4RxhR4UFwCt44dXpUQ7u4BYR4A4E56mcDJa6seJ4mwmg",
  "key10": "43dzu4YMYjByX6a54UEN2AFSbxFSUXm5GET7CUgW23dYBYx5N6X4Ed7592Dcbh5JfeMyLxfAJyY2Yqrbwaas7ZFu",
  "key11": "63UKShdWSp6167MrfsdynqvnDb7qzuq6AmSKpPj1TdpHUVbNEe2HSwza3PrPM2s4qH2nadDSRa9VsJxAwvZqbZ7Q",
  "key12": "2LhTg274ALUj4a35UcEje6zUmPTpP3EX537WEpgVPd8GNKKPCH676hFjVbynjq564tPojiuwtHym4hpKVoVKDLnH",
  "key13": "3Z3AGTsXGk82rXrhBkesTZszQuNtQDoS6DxE5FQi9QJJtFRQ9EG6Ga3AUrm2nqdiBSf3XqbiAW3eXpvkxK1AccVN",
  "key14": "57ZE58jF6S7rV8t6EPTxQHXN9RjPaGRn9VGu7odeXpa4Lz5zPUqYYLt1XEBoVvnWFJGUXGYcBfFNeSDm6zTcD9e4",
  "key15": "4SgRgnb4wyDtETz8g7WnDcAqYvzJPXqeK35iFcMpSaXGPk6jPCzc86ZQh8J8pC6buWrBy8qCmJ68eJ6EeSZ1Ha2i",
  "key16": "TxvrrNx7Aw5NJLXPn8t5asxKpkuMzdPWb4JAASJyUT15pi7bLASwi86vM7o4Ec4uz5aEvgaibiTe9fZRZQDwG6u",
  "key17": "39BcGfoHKWh9ZK5xBwXWaugswF1U7udqv6Ky6QqUu49HGUZRjyWDCN3F9XGnsW2kjH2zcNjxo3KPaRGThLd1VyTE",
  "key18": "5nwA52V4dSYB7JNQxWmKnmP4qaoiiF9zTimGi2xeDPASaU3RuLrw7zJJ3fzXBicewbU6sGmJjSgesLiFkCHsKxM6",
  "key19": "5JNwZQhM6HUkX3kHJLZYqwt3McisZ3vYriZN25XeNEminPrjKTDT9PCYuNxxDxHkGVZmPar6ErpwSiThB2pS7HF2",
  "key20": "qgaD3rMJeBuekBQYP6CJGjWs9Lm1o6azu2uAzepciT1yER1h5hJpvd5augBoZffUydVYmzt9nTvFRPgjJ6Zg6fP",
  "key21": "ai3mK56gR5h5GE3Ntecsa7EAsZFN7T6dFdFpuTRkEzes5kU8ToQfNfrMrKuWZp5v2WgYpfQkSusNApwch6mZiar",
  "key22": "5eG6ZZXndTbq6veiBrpfb6bHm2R3u7YjsET97QHECYeZb6sD6Baf13iPpNmBcj6TJJamZyedRmtpPyzvTrEaTpyN",
  "key23": "pgWh5FJgq5GfB65RuAoacGQ2Ydv24UUaNyQT8tfU3r5Z5pZsAYmC5BGFGnDbYN9aHEfRC2VLrSNTLLQnqtYeBDJ",
  "key24": "7vjkhSUuPLq3eTBgTiooLUuaZVktLoQYTdRhqBroJGw7imTeNEYdMcdorVqsFP9S63XeFXABTtPE5eKSuoN8ZMB",
  "key25": "3unSW1NqQMSvjxXYvY1t2Aqho7ZsujeoR25SwUmFM8TiWwXQ3Ef8r4zkj3zeYiNi8uf5YE99fTJBf2kUwvFr3yJ3",
  "key26": "2N5Cfk4dwJbZqVGGHQKxwGWJqHLaQrTtHWUY2yCHHuyqstiAoyDVhpp99dDSsuJn9oYdLypssdF7NuWjc4Hbq7jG",
  "key27": "4qFewW8Gs7WJidxQGkf3Ya87vJkpf4c4m7YbS34KcfSqcRU5YQ2FsCDm7zcCC5LZeJpNXyUoi1jy2JrJKg9fzekx",
  "key28": "cZ5hp8LYdiJG5ZBgmGBjjY8d8yPcUQbXouykeZ5rnZSgtc8QEeFpBHDGnCJkDs4AstCNbdEFTvxoesRsvyNqzbC",
  "key29": "HPMpHrB76ZxNVe6L28isZnHfgmJukjxKTNeavcvVe16eu688w1mCSpRHhHkLj8qTmY7CmpgPvY1J5WQJWVdGBD6",
  "key30": "3LicFs18rxgdv8uQwAX2HwuYsvAP6ggcVwhwC38tRSA77VpKDh4YURNwpoFwiKBZSUwKbKUHUcn9eu1c7dYECfZG"
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
