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
    "3PgVXeCn1io2Uu3XAMq3233NXJiNXJRqFbt3FyUV9tw3Ej5YW4stu1gEguS1D8bfQsWq1aWs8j5YZj6MpUpMciSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58WDQCkKtSUz2Sbd75ZfdSfiuSxPNa2FAi1xVNewLdYTmsLr3gEtupKauLsDZMrSdFJyofzNS1h2RAPCRHYTDeZK",
  "key1": "33MBjS34SdfVbajGzS5nKJDHLcKrfGPzs8H6u5NU4MmTE1DA4Zk2zgTRPGgiWpYTUmbCrfMPt67GzbMMSx17JHqE",
  "key2": "5FwiM7E4Pzxkati1tQXoXc554CNCVBQV14K2HSMxY2oEBFzU5hDV6Wy1knGujgGCcErqd4GjgHohw81aygmLprR6",
  "key3": "EQw368miB8ZCtmALGdU5Ntijh5ZHnhxB5coPGecRRsTqgobmQd7YG3jNzkAY3mXFuZPRq14ASgCqehp9KbG5cvv",
  "key4": "2vwGsD9iymc3DiuedDCj14G4tgABFxrp39WLhquxj6i7nWrys9cSoKCKVAJqRqxRqsEDt7HYXmuCC1s129yiVAj4",
  "key5": "4Sd66WFDyaNSsakcuGP8fodu3UBsR6ELZqHnz1D8k1DtdoiDcfuBt3qtWN3n5os1sjxZSFEPXRdqyrnAyGxTFSsM",
  "key6": "4BTYyoupKW3D4eDG9YYhN5nicVr9pWzcKnDkcUffBDd1off6G9YGspzyKD8HzS8G6gE2DRdZE8ymuzC1LAiZe6u5",
  "key7": "2QKEKfvEcgfDb7d1v64NWy1wTq3Xwg5qDWC1xjtMSfufyQMZk5qDdRZN9St7Bp8kDzQSbe25ozL3v8vBaX4yeZKc",
  "key8": "2tEihWCup59LpQzR5tSW58kh88qT4n7gGKwFs55yw5h5Qf2f2sGxAzc2NQjbWQYF23yPjzsj8gA98JHLxdU3QgLS",
  "key9": "67UaFMUDUgm9y7w3GA74Uyg4qHvTtcCXdLC8YW1QBaETXLc5c6Q42dMB4yJ9rRHFG8pAA3XH86TCWESTwCYpTR7k",
  "key10": "4FrVGvgjYD7skBf8kghSZWqmoXhE5SSz33qJZE8ZmtGW7oE1qvEjRr7DLyRH5rVpYSQ6yUbnRpSTZeFPSTvtyAsM",
  "key11": "3gF5yPizJrzj5fxFvkDgrKhsCuu449cm6PKLi8jjrTbhucaXPofbhKvZXzdMwigaR3r63vPSryLkgZEGsixjXqfo",
  "key12": "5fYd8BPa4xKBDtgQABAwpdRhYd4zFUZE89PkcfhTmdqMDRCRvuCcfUrzmJjBCyodYZKnxRARJMP8TomGWdfieujq",
  "key13": "4FLTrwzw7LAvHGqW82NSErR8GJfvLAjo8FMdMhPkqsHtR1gboycfN27VG4tEBMk5yYc42j2ML8XQvYG641bKWMNP",
  "key14": "3qSt9TBWt7SydtKGHEuxzt6Geos8UUVz28XxGYZMEUeKtbPxap9WL3iEH8ZGagttDzwEwN8Bue4wKNU2wLfkq4Ar",
  "key15": "3HxGfjR6uRL5V8fVkBnCeJf4uZ75FGGSt158dCMoApd1beUgv2wDHfhyPJDAMcFzSFEcfSDRLgXeF1SJuokVNdzL",
  "key16": "629Sn8UfECTJpJbFd7qXgqeWSQ7WahUqpTVcMArgZr9hV3UCvetWt7HhvYqTSw6zHf8cBdEBeTE1xwpVEwrqV4Gb",
  "key17": "3C6wb3qkpP9DDfW2JXyKWTMsN487MzhwnASa4Vk3FPxh1qDyVjCW8jhBrWoycAzQ6gA6dcJcqNBG36oX67xKjzco",
  "key18": "61dh8tg9H4e7RnA2m5ZqY2hPk5pXGkjNdYKQntAsFhUmixakpMqFjzYZ92VL6LUh67urjFmLqtRAk2Du464qMRy2",
  "key19": "55bHZzmwkTSTwvxToSLzpiD8mwskBdEfD6dERzWfQx3o18T1Y3jBfkXdcpLP68zYDFqKZw45zWFJigr7wtUJ778s",
  "key20": "5gjKfyY1bXKZvPHf1xq4nAwDRtjtk91o62eBfofXwyu1hocrTF8WN4mWUa4gmKZsSDXNYK9hcFc8RtR6e7w6ksTp",
  "key21": "3pMvpCJFzceh3hpEa1kyUpJDqhU57UJ7dTTUZKb3MvD49Kpwg3JxihNBLpypWYLJ8vwMxkqVqvGwK4BaC3gk6oM8",
  "key22": "SBDwNZAGfjTKK1Mkis1zyPZRGDW84NJgYzLs75ErtGqpCxbCz1ifhFR1LYe7Pst3Ea9tgLKazxidUeKwdpUFxue",
  "key23": "2KJd95eyymFB4DpQH4DwctZa5DXPn82fjUXYwvAbeJFeT4ixizziUW4aLmWxXw9xYergq7Xvabi4K8RZe1ewNbUu",
  "key24": "2dHYWzdcwWX4ncjJS8vBeFTw1W1s3NQQmdmNkQ7YjDUV1vSkdLcYGvKWPe15vz942RAZNfhHFUptb2dY86r9Tnz6",
  "key25": "oiyCG5cWKjnUJDbuW4K6GxyXns8nNxXLyk2CygfC6CbS6hsn1wSpMjSw7oVPGeWoXjgJxRy9Dvgg61CSnbQFQgg",
  "key26": "kBRYzohPQLASRuUUK8rMF1x9ttLBtSPa9TzvQwVjX36hBzEkC7zkFDXZ3qAMSPJtaK11ZxydVfNnSZt51cRsA2S",
  "key27": "2TiBv4dJ3Hf9omUBZh7ga1CNUDbkBqVbFo9HyzoDNRJFNBGTjuEvUVcj7wx4eoGaQ9wMwFfQfCB8yiLoW9Wikqzk",
  "key28": "3Qmg8mUABCAgTLn8FnUwXrb9CZisz7q1ACpvLi9YjUSMUnedwswpWChbwqr7ENj5RgSVYeTRD4EUwjRn11XuKKr1",
  "key29": "33Vw5phSdAYF6gPQBizSd8cQMzU3WgPzKVLhj3E5aNKeEdqhAKV6V9v35ycnYg6xbS7tEnn4vUctaYrPxKTgDGZ7",
  "key30": "4jnNJs98iSWdSsk7FZohCPbiponkDDzLaSStC6d7y7b5uJRbRovxR2fkYkKxSKqyE6qaXQBj85ULBmcRCGL4pbiD",
  "key31": "2ZJuygjAJU64GzpRTXNGMFJGpmfjPo5Zohpe8ymQAA3gtbMNN7NfCn6TkRXUXc6EPt1N4Fbn8gGzG6BsBaDvKut1",
  "key32": "4msF4FDd2JSBpiWMb938NcaEAxZLfr98v5ZwPPSiHDTqrAcDRtgrpMEh26i4B2wMGUyMdPAatKLeTttwdrxLmGs6",
  "key33": "4Gu8tKK6y5KZN3VNuyBFcFsKgqHNTXRC8QDirG4TvB1x4AoseYYqtseQNrbHMeMazCxBkzPYZMPCezCKeiDT8E28",
  "key34": "5RxbCf8ZsahuCnvXtFcs5tRwmZvWXy2TakJrMyLcJxHH4BGGR6W3Y2g7vNZBBSkMnC7jgCV1rEFpjaP71aYUsmAg",
  "key35": "5djeMsrdhCxasFyoLmNPq9w2eTZQRSfwYP3U3MhMapA6ffJNWJ9zehi9PDAasQxc4pVsVoqwHHqMFq3mqDxKtVGD"
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
