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
    "xHddn8zpvP23Kw7rZWRvPpL8q9eRbjW2ejb6j9q8XVJAsjcnEUVPBxCQ5CcbTzGapJg9quwZsjpCSMEhCJyXpsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbXy5a3Dh4JjzkH7JPXhU9SK64X5xRzofA9h6KzD8tLBht2bSpL1RvAZJDnFfQboQdLJvQi32UPYpiXCA2vEMa9",
  "key1": "3AwfSTLbm4GFiVVpNczByGrGrjWVeDa8ixENuLjm2i7yboaXRu56VnHrwJeciSgmiTuLbbYLn8QrXkUj92J1DyCP",
  "key2": "NZyciWb3QTRK8s6DBPJ4JHqfxaEtBfWxLAWPfJZZ2XBkoD5exxxb1SqnhMWSHAgCcxJ8UmEx8V1xYEApq9x6e22",
  "key3": "3RUyRsAfHXwQtUsz2V3nuZ4YjcdG5ukrcqZTf8mfLevEUyD3oQvRMa2w8LyP4sh2GcgQfDubaN2LAcyc7U14iq3d",
  "key4": "SQ63DaT5T59CbAffFKzZnuKrtU1bHA9cTQXoCz8RGC2hnnbmHT9yK4J8EjU8g1XxAzZ7fXnvPaLSZgUuPgf6jEZ",
  "key5": "K3J34yDfRtbGf4YVggHFhJGxVwHoDDk5fUsW5WeQZR7MKykif8qvgjFyk3AzZ3dTk48JsaPa56Wx49hiWV8i5wR",
  "key6": "3CezZSCEDr6ux2EGo3axwhdbvj4x3uxctPj9PWLkHqTajuHFnujXkvqhy8T51um53LpyRBcxGR3dhxmnXNWe5eYY",
  "key7": "2d3SBb1fTiW7xs1PbzrkXNgD2Q5j6zJmB9v5mg3E9stCv8QHdLMLHRyRewURmq4CXSBG8hSqMXLrxLxorhZoHGPh",
  "key8": "4htb9zZV24zMoTsdXPLFCFicLs2MPg9FM1nd5e5ZZiPgqQTWGoKGdPjppk9H464L2UX2Zgqjtr9vzg86HkFJGGh6",
  "key9": "2GH56ouBGaMgG6CW4Rapyav6N9W87oE1UdMrZLAY4QrccuWvsee3Z8PactZY5fbKCVGW1ak9mzrjGSoDPe8J7P56",
  "key10": "MKcJN6FUvb9f4kqUGvRZ8FcaBv4h5CFpCLTyc6E8tRMArXZPxfQvoAB9gBbH9sHUXpS5MszfH8X659f74JSGZBZ",
  "key11": "MRW5GXfXrtGQMqWLEe8miXXF3RBZ8QfhB3Js6YgAW6d83vs6ZNo8DiixX74D8R8wN98bzjrHKB2cGoi6DQ7KVJg",
  "key12": "4Wo3Qsovf6fdZkhSSrWuq365QsmAZ7rBgmYf9cGQnqaP4PVtg1jVoJgb8KgZDExzPz4Xb7f9WERyxD7YFtEHD5Sm",
  "key13": "6287TiQT83EkSrRUQbXrWrqSWXy8nVPkGtVL74wfVffJQKCqEX7mtUEpehEkowYNHnKPWFrzxjwS4kgHaTn3NUzf",
  "key14": "2hzwoVTCcRncWrFNNWErffDEhRfHV5Vgi381MVTdn8U6Tx8MsJZ8NtFLu45bd9NweqgYx1SuZqJc5aMDsARiRArp",
  "key15": "3pRTYfaSMmJMQr6AVk2B6vzH13FNdmwofCUXpLFvzcFULH9m3jb9kP2ZjpPFwBJT1kjWf6H5AQqF7MepG3wdBUGB",
  "key16": "5KivMntXXiJXGCULUEqq93QLN3dP5DXX3cPn6ScD232jKsTshJrPhWgdz3ULW7dZjqwsho9R5Yi5LuDX1sEcnnfx",
  "key17": "35cW81F488888TD7z7Suf6wzVco61Gy7d45mTXLiFY9LF853VSMdQFswX5Du3WAZS8qVpW3LMmTsBYT56YG1BBW8",
  "key18": "5nv7fM2fyEgz7FbRj2mf4BNTaR3R5nx6b3h8rBBLjM6nvgSDHVRQ9UfgSL7Tiu72FmJ3NCB8ijCUHHsGDgGKWmGV",
  "key19": "2rNBSgvf9A37iyJUZKWrtxxnPMN19y9ZFDrBPnk7Mrnwi2ytWFKHU5gK5bqXQn3FkpGsN9zEQfcUzwJzW6G9fUf",
  "key20": "5LDvNdgtbFg8ivTFLDmcQwnG4uuywkK3J1nSyMaBeayYLDEbEGLhxcZM3iCCnJutB8fP6CF73Qc4TKwLSuL55g7a",
  "key21": "2vSoafVZ7i2RfFrVTuYibbzBCui3RzcV5yCG59tjKWRy2tNCmpnAiKWsJqFXMykHk4L6DmxkLV81eUg7NWk6Jvd7",
  "key22": "2f5LuRZt1iUqDdJehiuBDRE8HoXxVB7yHGpqsNoPZzm71uiotpE6LXoTfNCjuWMJiAT1zH7Lf5rB7BS6dVBA1Dz9",
  "key23": "2tjxj28i3E3wcCHrP1TNgh8zF9AxbZZW8mLRb4rRP66WNeh21PNH6FkUVmsRu4GvAL3b3jDePVNc4Y29uWN3jL1p",
  "key24": "5rPJcowvA4YbicutCPM3UJy21ucg7za8eryopvkXca8k2XMU2QWzpsyE9ek1U15miwod2PGTDSRHsuHv6zzYWfNL",
  "key25": "2VMLcNnMDRmM8hbCAcBu5xSpdQyXPubxpQ5FfVwAyAzNEbeNWXSHDsjSe845NpLH6hWpEdbzJQ3bR1FSdRsSW7fg",
  "key26": "5crEVQQMCYjdp5JVDNEFdQjgDxSrSyJzPdX6yMoUTbmzstCLJjmiYfiYA9cy4Uscum7Xybgnxq1HdY1gfxNCHY7H",
  "key27": "y7XxUWKkhNLZdvYWDGf6w8prT8c7Bu4oXfqKt8LaWdJmqGMfiTT2sKkpzkFWNW9h7YTTiFtyAaxo5GrtQ5SSqGY",
  "key28": "2ko5tg1JrqbYAtXQxzqaPKzbyHa2QWg6ddd1uNP8WxzVv23RYJj3JwuYo8xjnfCAqAHgqDx9EPmrzyBJixRyGXGg",
  "key29": "oHwnVe8eDMq75cRrnfz78WTc1ZKfLVhLSLBdymc5SW4NWy67tsVn9MCcxPHRs9wuD7nDyiriuYssrnGnpZqD4Ha",
  "key30": "3cP4zPu2DhU5DMa14Ei4vjiWyRyAB2BuLbsJHvcFhr66n5YFjHVCNfyqhavZbk9RhmPZDC85DW8ZJkmn4w7aZjXR",
  "key31": "4raLoPpofqzhcoBgccqFiACmJsxWnTkrV1Vqfk6cLfSiA2eH1r5FqdnUeGXxLE97vdxZ7qAGzVCg8ZPWiFH75jXE",
  "key32": "21swpRBhYB7DNvWbsC6fxY4aYk6upUjkcoCZN5paEFq3jwU1ZMf4WDMMW5dgsdriJf3Y4txDdGW8rT9iXVh4Xuic",
  "key33": "57VxJcH2fwhvXFiqMjnGR278TQ3gBMcgjzcVKSaWfrEARwbR1BPjMe5JJxVrWRKyVomoDL5RYLdY3dUfKrkzJu1H",
  "key34": "578a5eZSjmXCDZgjuopcmz5LKExzf5DvLoGMNzhdGHRrkCncb6nBzBPSkm4kDgA5DVmetyFaqjpHBcF6MS7cq2A9",
  "key35": "4kSEzCe19JkDPEHz2ypWq7Ls98p1mJTZdED5n897gTrEoGKBiMZjfWzspiZW8LmFW5Sxe3ZasPL9s4EaGqwgviww",
  "key36": "4FhGHA7X3jZdPEWEU2SJWojL8AeioTx5kA9dVjYJ2uhTtpgzsKon3FaBXUj7jfQ12b6ThGefH2ERuntvHymmD4JH",
  "key37": "5bdQmMhCfqi5pz6MQvaErFDFbzRizPUU5VTXiAXJjTBP3vfeJRtuaHtEFkYsTqxZ1KFvXhiUuxouwevV3KA54okd"
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
