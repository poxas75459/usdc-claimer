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
    "3pcC4e1ZGoKHCkHMK3HP9wNGyNVJUTaozkwpXWpVwFPk5cf84aYcBec1dC1Rtaa8CppHeaRo94ghB45U1ystEBi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UzA6DzKf4YmXXWYZEMnD885ra8CcmubVxaGQwc73LoFAh79xBL9HFUu83oykw5YQYhgYkuVnP35iTBExd3QT3g9",
  "key1": "4zzHnGR5t7TabefUdQopg2wgFUGsffnosmJugwm6wFJBMcuyTqWE9TUh6KXL1wTeZac32DtAU82XwqvCeMVnKMYa",
  "key2": "imcgrwhSCLFUwUHecLpuebUvQq2SYVxyd9LX1teQWmnEX4xoZdAVmEYR3PFWgTJ932dDi65V7NzQ7rm2eR5BZrj",
  "key3": "3x8KjU2RVcvjy5k37dtXtKpjMfbzHERjKMqzRBXuqxaVMfzHiidu2dtUfFTWjoCGzPxUPHZtGswpeGdcwnsWWirU",
  "key4": "4pKiWzetarpXMZ5Zo6T8azqm7BaJZnLfKBQgNrVhVHRTAxaaBPMwsxQ4zwy9nqcxGdkH4dXNvqZ3zRPyeEsUMnh7",
  "key5": "4WQrSEb5Bf2hGAxEFYmPht6cdivdSFdHV7AH4cfJy99rVpvGdQLiEdgcJ2LhzdbGQ3PehsBWZWVmzYK4Ea6zRnwm",
  "key6": "EzK87eCBdw58ecLL71qKhyaVYsc4vnj9pjCXeX5BGUCU6UzhjmajTzkc5SSjb4b5xqa6y9p4HaKD2T7xxZf3Kz6",
  "key7": "2aoznXrB3KBahenpbNz6U1UGLm5HQqcDUTGCt1Q4nzuhuJ854zC4RQKvFG5ehkHbBRgTuuADusL6b9FPj8toUpb7",
  "key8": "4UpN5Ed3jVsYKKCqR9bGHbzzAARidaN9N5TmLhsF5B1g8oPt5PqCaajBxJEWvXR1BUKJM5txUHRvbyaEoB6agGst",
  "key9": "49MeqEbYjJfa2dXNDDyEM2iZApcKmfXuwx9obaTZKGZVzB6R9vnprkp9f6DwGK3RfHbNt8cxu3UawHgUNbf8orAi",
  "key10": "EGL9uvYXB6txPUAEBHRMqcZhFqvLdgQoVmGHXnSC4oHLzE77dcWK9XeXzdYmbxaJ6pprrVDS4UhwpvbPGQZWUVF",
  "key11": "2mDdv3h7eyFeCDSNUPUUXZGmpsXVChULBGd4mwMgeMszFBXmDLgN8Urmc22GvTCPPkYeEZ4xqrpakVqBoCTUsomF",
  "key12": "3FzJvzz1mFV33va4KhAMAdAavstjRjxpi9VUUHqzXVVdmQoVUjXLnwpRWCWsKMtNmoX5DP7BhEt6ZosYxPBqwq8",
  "key13": "49UkUCrHmPbXuPu8BbeSDDHZNDRhdAFKH9gh87F1nSqaZxv7eDCeiDn1zh4wSdwBzMDsdFa66rNXPHbyNFWX1Ui",
  "key14": "582oYA8s12U2KpfGrK88p2PsjobiCnLjbhSRjf4gWXPG226c9qJbjoreQJZDZovBGZMkYCbCkjntH2QsPBC9MTXF",
  "key15": "2dYRiUHKuv6yDyAn1LZTBJa1u5tyxJwZQW1j3ZEKzj3yudcBSeBWJDrUhkNVWwzWVqZSodoxQ7N27DJwBwPpuFnJ",
  "key16": "3ccJMTjRjR48BhPn7sQbmvUsnmfYBrzzvW5niyzhytdBHophokTHsEi348yao3V8La5vApSnwSw3Pyg4CyWrWBbG",
  "key17": "2NpRoJgkch471LcLvLvyavr9YH6nitks988wpAReUCvvxGesFZ7ZstVyFRqx4QgpfMjahytVu75pEhExuwu4aiQ1",
  "key18": "547CxQdaZB1hBLm3BnE2iSt3SAjsQv6miokxkTFtjcXzdyMQgPhrqVhJQJMXbjnxp41Gv2UztTSbt4izN4whHykz",
  "key19": "4MiB5wwEUMQhwyXBwY5XMmpQJ3mNoYXq9Ds5SJmmvpP4iCjkvhy7srZejhgEsTX1jiF5jPUtRCYGH4NUHJN8CZU5",
  "key20": "3RPkwmM2MLafeBf9ZfJNsNwaXDRnyzBSVBDrFJArvCngNowphpWmhWa1gGekWupDymDbKy7sHAjYpWAE6nb1pSxb",
  "key21": "3dggR6VVhj1wZQy2pAiR16SR1nj6EGMUkWnZvaQ8Wr6jrhoyCfT69eEMxBWzSmQZHg4oKBLP2mSF8LsCR69xgCJt",
  "key22": "4agZzZcqNMxKXbrjFFFGrSH4uaZM5aDcHYeytv3iP498aonu779Mno1j41wDBN5z97d56tAdqBNwRVYtZ6Gesdnr",
  "key23": "3TbpJowXrRXVaBkcVjVdNqpL2z8ErWq2rHCos83r6Gk5npDATUhmfC6VNB4VWN9AUe3W8QZmzRsAaZmR5VKYdz4E",
  "key24": "CRgNW2Hj3gzD79cnNMgCX6fDbQPas6LjCWjwnqV9eLUtPxF1DRx8sFnmkvvxzZ7Ujk5C5Z2vgkbwQmTL5tY4sk9",
  "key25": "3RHCfoJDw9eomHgBnwbBPMZBrXbQQ6dRSrYRL3TryMpQRp8ej1UTfVRyiPpRfPZKALYzyYoHehtBAdnf9aBjtB9h",
  "key26": "4CzhbJ3nSbbcaGv57bRkcT9aF5Du18v7K3P3wHSzzj7YH19QoKcWQmLNSv8YaozmdgfTw6XwSdV4nNXX8tvPgU15",
  "key27": "4F6DVpS6wAs1CHbWkVcDBtDtnRX9Yf2DWU66GXhhp3gigrfEyxceLSX6rRAdM3hqJ8WSDTKjz8cteUY8sTeqoNNL",
  "key28": "21BzPPwSBasuof3MRzXug33o2qvPPdLJVHB3XxNzMULJELLEwD8v9xNeHisSEEvfEfEnkDCPpURuHXJU2U7Wgi8q",
  "key29": "4dxt72S5Ck2Ugz7KAeWwtx7L9uKEBgbZajonVNES8WSRQZMk3EUMjKp87mSMmy3rV8rSuse6Ve3L4SRiJQ997yiu",
  "key30": "Uy9aXRjKEr9z3fNNSYvedcinu6gzL5m1cPBJ9oHntZakj1C655SzJShJHHb5g5ZmJ4i6CVbb6bGwuKn3y8Q6auq",
  "key31": "4fdFquZ4mxADx1CRYqNaFK62AeweEpgtdgz2MnQC4gY8HZyWtYDGo9MpaTBJue8Qnn4RGTQBFDe5mb2793vG4KGZ",
  "key32": "Yt3GuaMBtVdhykSCxujXRM4TBgbJWdKP9NqqZEYgkk79oxdhidMAq58q8vWEXZ6fWM8SzDGESBjAQsMhgB9EC31",
  "key33": "4tP1NhaBNqWXk5ewANamCoqPFC9HVgyWjVPW264RvH7YUc8Ztp6rmVkCHLCVJFLBxLxbQyYTei91jtffwniUDz8S",
  "key34": "5wixYePK6rxvS1fCtXCWhPHBsafv8hcNGEbdBU9JcRSeCsGud77FPkyBjbspRBiUwG3dGVFdgUMaWNPNP6KUHtkK"
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
