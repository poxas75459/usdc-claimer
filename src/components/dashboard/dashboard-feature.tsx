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
    "3KxcJAiBpmpE2BEyQLfqnMaWdK34cXas2awSgPCGUKLYDyFJhFiER7TxBHtrt7pWM4zcFwv6Wxwvc3T6xkbjrEQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzL44UG6nNcdgeCwnsyKKDdqBw3GDEA19F4HZCTXSrjakkFM5iz597ddSdw8ZjhmgwbDpUn6epmAFYmBNaFeMLT",
  "key1": "3h45VKxnHNyLEjfdYoWdHPp9j6RRpRmMSgfhcB6LdRSeZmC4UmyW8YrsR9ELtREaLCamuWqNjMJwxv5vaLZMmngd",
  "key2": "35MQphRBmmckdRbmU95rKYEYPkTNuTp2wYyac44dh8hMXkBW9fwmHD8ZMcS2tQQcQCWDLKNf7qyWgmjydKiyiPpJ",
  "key3": "54urA6rqqVx81uhHMwuVdE7pJD98uaaAnALqs1M2wyHnsGyZPMBJ9mBcbwJTqKjrA1AdEcDTNiAexqLgMTofNWnG",
  "key4": "n6X9vGv42ZYhhK6AVR6cWmekfrfb9gHVECknuzMcApDervAZVfYyS69PFwJjGFDXR6N4txLfgYXZbh2YRVcPkFD",
  "key5": "5veB6dsitk9KVdPy9Dx9dKurrJePiVQSxorija3oEwyn1GAyFpiEr3Zhotz3niVN9WpUHiqEeG4M1VgwwKLPD3nT",
  "key6": "5f3dBXTjWMErQFJk8je9rHyu9KYVuBKi5jgSsoj27Axt1hq3EHnUmoWUboE3WnXYb5J4pC4LahVekqFKk5TyPvAV",
  "key7": "3GuaZBbGiDLaQrC2Lc6BKJA4dUR1cLJGRgHaZPRzuYY6tZbu6Xr27JeutBavL3jVHAfQxBuTpJgbJLYSRuiFXmfz",
  "key8": "vD9NBPVNxCjUbM9krojV57a8edPKBRkzpfJsW8zsKD8EAegongNvdvSTQQpgWXwqTwxgmHri2iFSFUeL3SpnStU",
  "key9": "5HWRjr478RvfBxgeAbCWt7hRXUrzEE1acrtNd9yKoz5QizSS45An5VjFGPuRbC9jtazzMBMLDHdcwszV7bfLCWaP",
  "key10": "5whMyWRXBWTEVuEq5PXRtBy4jy1oWVwkS9RYigYXohVhRcreJbk4L7xchDY3cdjYcwwDNvFdNX7jJL3doeuHLJ3G",
  "key11": "5QkchGzSzdXtqZmQkBo6wCq7nwyLtK9btPQuYuMvDmQ5FmRYxD7Qg8aH3s4x6G7MXseJqhbj57CgTtQXW55PHQWL",
  "key12": "J6VQx69qTw22EtXr8RzqYVXQCtTH2F53iuKGi4waTfPnLTZnBct77Kj9hvcv8TG1XEkFxYqKS3BSkmzw2od8u2n",
  "key13": "2Abo32RjfCLXuWUcZyMqyvKYf7FqG4e6d6sqbhff8NaRe6BbeLXoGvC5mM5hCBkgxdvBNBDQLuf8EFBuEywG7GpF",
  "key14": "61vAzSDXuHZDKBssuw17ZYnp8mgZAeCEGFcJzxQDT2o9QpSW51i4Lps7bPVUn5byX24DPiUi446oBPzmH6suvmFw",
  "key15": "3Gcv6DCj2AQgRWMoys5oGE8YZrz2a3DTpmKwxYP2f9naKPFVAaCav82EiZVtYNE69gdDohMG8XsaXxAvYysjMTaP",
  "key16": "2o34HnaRH1dhKhphER4vacGB6noCDzQsSGi6Qd78fuV2HqweZhaxSG16ruZgMNYf7NWeUp65GyNR3T3JdWuShqmK",
  "key17": "4zuC9VMgCnXJEzD8szJWwNvepeVx32XsSL3kTmMELr6P6r9eQ81GXM69JidBbeKU49soXRLQLnZyKHHPHkypziNf",
  "key18": "3Q1PWnj31xWZVAb9nZ7tFuZHumFc3BaBcGwWfMKQytRzm8PiocJRBqvy1P1FtyNid1CmXR5kNST8Xz5wMD2hWcHY",
  "key19": "6369owsFbxqDSPtHqgGiR7z4FofUmVEzrRuZdWq47ZjExnGwSaKNQS9zcpNZcD7KS8tWaPCtSnRRatUDMJhSXVgN",
  "key20": "61JLnB5jig5ECErQkdsYS1aAqG5CuhG77iMQyTDf5wV9pHUWSSE8KwSkcFcF4AVHTcDJvgKKDtVkFAC2H61StV9S",
  "key21": "4XV82aAZr27vtYCa6LFWMDviWKCMK4NNwLdYgeoyJqc34MN1HN1EdTTpiziVm5jRPZukfa8r4WsduoDze2ejjgTR",
  "key22": "4QpmraL4p6VnjFYcZvp8A6doesDzaidSGEouDTa5AzHjiFAmaKdcZneFFPoa97rnAvtbheBhZiCG1F9JMNkhHubj",
  "key23": "3958sJSwie4c4tEw4YV7otxkqh3vUxirSWtF2K8LQAgPQsVgLjquK1SBwkRjmf5uxnXqyXuQNFJbBkFFXYdajRBE",
  "key24": "xtHES6Yeo2Lq3JCnLh2qDubnibQ1xoEnm6QG8MxQBsmjXV7iGjky2HLKP1XXPm3N5Gqca9qbe5TKPDzwvVw5khi",
  "key25": "2a2aEfEt8fThc7gx33Bv9sKpToh8UbibqLrKfuVvHNp6Q7KbqC9TUQJoLWb3kU3ci3ahP85qDp8TbLa2n7Fypv8E",
  "key26": "2kC1rCcX2zKueZysydcintBVMrGuKMjkqaVUUDnXxaUnrmAkU61AbHAQxfk3gEGPvpP71DYA8zPHMGW1kSdaM78h",
  "key27": "5FKsyFBgLdn1ajkuGQndeXKeG4JrG5g35YFpeuyLKBbjLGWcsJ37TjZxESBz5nMiYCutS7z8dZjVG6cKQEZ4prYV",
  "key28": "5PrXgkFfejoDv9eZK3FQw4g9KFH4fmubob2Qxgi8cGv3jsj1W8vU1cXt2KWtv34g32GdmNo3KGiJWJMSt4tcD5hW",
  "key29": "EDoyZd9JsZ3xBUUP9M8F9aVyPJyyJZcj22tKErWGoCJXDuSaLDAYEikA6912CSVyrYq3q9n1vDrVk827okdixon",
  "key30": "3unFdrUpuLL6yjVpLCswoukDZb2ZjqYXgSbsVnHXYR8T6omgAcXxDRL2YNDqGD2G8GY9dQhgcDjXpg9r1G4b8iy1",
  "key31": "3rgZNYrusqwXAYCGDG74HV6bH3XNSBQhgdXTEKRmZED32U6EQKYJ59z15tf2AtPj978S5EGwznapkxGw1RsKAa8m",
  "key32": "515x5CgPhk3aGzLbLy5TaHpZk5dUH26fPRjwKgurqY6zgU97413NDxDioJNwvUXVrmroGr3k8PE7WHkNRWHFGysV",
  "key33": "3JPzgBjJ3JBH8XNorVwLwoB4f863icsG9B1NHec5wNf9VPbZSoh1nc4PqauBfdd5SogzxvJhCxMYUrDuQhLUUMtF"
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
