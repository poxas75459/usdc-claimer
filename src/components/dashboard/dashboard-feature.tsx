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
    "5GPJ6WvyVXzN1XYa1aHAv6hGbzRY8TNpGEMNXKuknhAZnkmrNoYZZZuc7AdHXxwTA39UdSkMNr8HwnxWbAVhuHQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5g8SdhJbzosMbc3GGtnHaNGRtRfgZYks37ti3jSWH1RnnLKr26XB2XxYkTFnEi3sCRzHVu3FcF4gDrnQdhbjX4",
  "key1": "fYSZTkZYqRuumTJpF75yA2PdvVzjo5UQCKSSAUhTy1xGa1hSm484xBfXgbFX4pLsnbVFvSPvinaqWBdxArp2Qtf",
  "key2": "2teh6UAvmembXaY1bBXdA6ZsnUmzEwFBxiUcUbHK53Gf1djLkYkGTYGbi3Wyd7zNuNSTT96eRLoAtZ59HyzHmdPA",
  "key3": "23bHzRGsY2e8XzGvjVafqt87kjeehtZifDS2t29iXzyoAC1Zg6DmWM1QywLN1oY3feAqQeufAbxCH76ga71aqFFU",
  "key4": "3tfXDrv9WYBDwEPYpbt5XX9TEsRtoczTtcbmudNCt9GUjVmC8cykoC1wRVugUXQgLe7ZAb2oY6NLqJUa3Z3bhW3D",
  "key5": "2YCCGnS7b7DoeeBWEi6EKhWGquPHCCEZ9KA1FogQtqbJb48KaFms29JeHrUWC9S7T5CyoHiXFai77TJNsgd6Xi6T",
  "key6": "5hAYp1ZHrbLqkCjmdrdadXVcdYZ2PpKLfXachHYnkRLfvgH7WZZmxG3z5bxKFdXDQosiGmgq9D2cHbm2F4WQviHC",
  "key7": "kgpyAAXDTdTgp4rWs4HomDYVssxh14dh34twYcWe9ebteUUmGx7WWJ8VFQZukSDy5DJ2SmyJJa8Lz8Z8HFY5y93",
  "key8": "d47CGQiUUjhUX5ELtvy4AfbfjECw8tYBZuJ6u7TjZWCCPPnVKW4ndFS64XF2zmCuXuNFZEm3ue9F4s9WUFk8ft7",
  "key9": "QSpTjaBsTbKsM7UrghG5jumTGKzPogCeLXK3L4Sn6fbmVnEaaDzFZKVHr9KYYgzXbymFDhoniRGQMspuLNUtQ7b",
  "key10": "32XdwhVD3ctovqATuyiVd4qBgAfV4YRLoiuPcp3aZUiG1tFBcm8RTLwqPLtu9hNn2gDg9Um2EL7So4mzBrjgpppG",
  "key11": "f8X5syppQUcLoUJafBye74koheUHQHcvj9h4XuUcaus8SWfPXV3hy5grn5s9ENhcLYRejRtxShaKzQDotPA8zoM",
  "key12": "mhd8deqdqdhPns3hHohobr8Yy84nhkEYweiRacYK7o2aqYDiD6ubs5q2xD4TXr7FbiYx7X8bzGxjgCpw1qFpoFr",
  "key13": "21sQavqAuJ5t3vxNoeD3x1fYtFWvrcdBh93wQCvfMMYrLdya4PnVXURbR7Dg56c27RoAZPNFjmypTVC4tSxDc2BX",
  "key14": "3qNdthDZAq7rG2wBmtqxrGpV8f68CbZbejwMytBf6K1qisutFzqUM9rTmwxA8pjxAtgJKVKjMc7FMF5ytzEVX8g5",
  "key15": "5414zw78T3jxQfiuD3gESSdfL4TJnmMYD8hHSoHiB9kHukVxNw1bjseA8VPTu1BrPfjGmctNVv9bWZnLBM314BMr",
  "key16": "3NGPnfoNaszcw7Ldz7X37irskrEqSyLiMwCXXKWUgTLPpRYVmtyV5UkP7mwd8PHFA1WJzRFxCJj3zDFy7cJTytwQ",
  "key17": "2Ui1BwuyG4W44hrVQmyUH2jhdqGGK2PgkTSc8bAT6VP32XxmzGWdo1ZRCoiJWnGoGNfzpPGuDc4cW6kPwmCrR635",
  "key18": "3DpF7AV3XmgJvnu2tG1nTvboMaWqqzvtXa6X15V2ENqzdmTnEK8QYNiwirxHiD1xdCS4f1YaNgSZAbgGv2K7ncpG",
  "key19": "2wofDRmSmya9UmcyQsFpdi1B1E9pSaV6epEi5puFoTJ2Pz5A2r2NveBVXrfKatdRuREB5JzfRzvAvyTTmDF17sGg",
  "key20": "3EVc1zAX5hcg7CNynzffQCWKKdW2HLxrPQ5RJai2gQ2r44BrxoTpAwdGtPnd9XqsghQgv9FUg5fhkUdzpupXc8KA",
  "key21": "4SMyDKMbrLDnyGfNH6fGEPmx2zhchmd1YfzHX5t4spXWSAYg7uhwKAzjqroVuLw5FyetVbvcAAYWxN9m4JroEu8V",
  "key22": "4rrUEmkL2asXjU3bjxMhwJLqtEKNB6DmVGQQZ8wuFSrSsPBb9DKZyeDhWqwHKMbS15CMi2XUQeotcvUB5ZSC3zFx",
  "key23": "3HPU1FXH1VCeTvBv4Ttnw8TcJLG79FgNEgfynsjKdYyvKd9jGD4NYWrbJcbtSyq2oypWmWSLMrLEzGCgHffDRdgd",
  "key24": "3TRgaa18Kfxwz95ZXB16rCypshC15M3ncsm73gCD3Zf6FwFynJsx51kQPiYmfiJg5kaMyExbyR1pUbPGVvu8R3iL",
  "key25": "La5qELt5cRxTCYY2ZVd3fzNkssw1ohhMMRZEwpjAVW1wXsXZCR8hZBZgqNQ2JBGvKSM1XZQKEJXK2WRVVuPQ7Br",
  "key26": "4cbNk5RMGU3fY67aYJqoA8X5SZicxchTFdDGzFXY6w2Mndid5NtBwN5dwEM4qTSukcfqo955SXYE3DaPDutDLQtF",
  "key27": "vBpGnS8FTgNdDi8xQq6mGj8SQrLrJoyLFcYDNpj3s8ftYKWeQnfs2S3VRjTi5n6ymLLPc3NJ2UWVGw8swNXxzvj",
  "key28": "2yKV5JTuwSxXC9WGx38FZJxiU2tjKJqgRoE37BY466hC1XESmMJxr1NkfeDzZtyqFdxrD4gpx4ydtWxH1xSbiaSS",
  "key29": "4koptoULHC6mJgZzH2v77YdqghdPZt9Jcf9FMewYUcVuhftJ5goCJzw1fwU8hXtifFToirLoGoKsjcGFfes9QzH3",
  "key30": "3V3QCynUbF3WBeoKW5Jj21QpWQ9mGQWiHZQpoJc9GHFj3Znu4Strd7ErCK5GS3d1mqpj3CjC5ZwLrVzjn57NQmRN",
  "key31": "4fHeg8E1R6G7QsP6M6bqDvifSWSH89M9m4Tz6wqWrJsKHaJJ5KvFaxWikGrsGhunEze5fbTUynS7hnpAkbc3ePkF",
  "key32": "2XD42PZDk1NmPBKvxaRWxHFf7BvhqcEsQwtv4WLFQi6BTmRzP52YuTzq3XVgnZbAzgqGxdiwxC1sPXC9QQgN2Ku4",
  "key33": "5ZidkrHLiJ3K2hgSLqgLzvnZegTQ63ut8gcyHgPuFHYYj4qzTcNDKWx9TGt4kTEkHY4ZQMULju1JeyK7HKjf3EJ",
  "key34": "dcVis9m7htaRXgCyqPQxVSSEjnrrUBzH3S1jSqPE5edEgjevQqe4tjbNSGQrFYbUfwXbbQfQWXZR8DoSCa7EsGM"
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
