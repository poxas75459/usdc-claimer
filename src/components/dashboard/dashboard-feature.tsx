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
    "5okMPG44roXHgkxToMFQjcdHhU36aYY9t6atAhowPMijGrEd1kSn2SAp99yuFF72WCu8xqrfvZgWCpNJQDoqbKi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXH9EzC5cSNNfGYcS1RmLouJKH3a9XdzsW64fM23VkEKXPdzdBQ4JogGutSYgsw1rFNh1NMRRz97YScsTNwv1dg",
  "key1": "2vjJfddQ4Q3D1u8adUeLMZiDFG7mLayYoSFrvGvNoNAPnd5r2R6kxmY9urLJi3keJhRVvTR68g71vmnMxwLF5Ryc",
  "key2": "2kjs919o3rCuKUKcFiDXwn9ZVdGP2sHcKurQMJCk8PeaJc2A3UR3XxfoqA5zYvhGzeFZEHCES943iWU5NA3WDun7",
  "key3": "3uEvuf3PoqgBwdYb4FACL59FHTfzLDeDEnZp8CpfCPQ7rkkfw1GLFH2WvU8jWRE4kYGietzq34WaSogpSRF5jDCc",
  "key4": "4aSvzoqPNmVaLDzGfFozYTKrUcsBKz4Kvb9YVhaDZDSrfrSwuEk8BPn1UDCEsWWCRV7RXY6xGs8W1ygWtcsbbTmm",
  "key5": "5iN21dYjvT4Avf57PcfCVPmjX4mGdrB5M6LYBNFy1C5pyBbJqH6idhvLPVoZoirPzGVXrwZaUE3V7bL8Cb8wv1ir",
  "key6": "3VSzfqkBHSjuimPf8xWYtzKFM8Ac9cB1GH5UjbCQXm21i8MYULQUdbhKjtgpvv4yYHVKUFnwQsxBHaha3jHRJu7f",
  "key7": "X2UxGG4x86YGKbmCwjaSbNXVsvW9Za7UPBHP1TLEu8h5rfhCpTLuSctASKpQatEhSmVhFzrkKggjACePXueGe7w",
  "key8": "2NLs8UawXXSiG7TvF7ajktFKTFMdLDQHtin1tRDxaaeByKFZbPkmhVYEH8emx3MBHCYNgcFHrRHipuysgmyWeJqB",
  "key9": "5uZqDiUFuC2CXuB3AaW3VXQKwaBGPtJAvjvapbedDzjiYKZVRcqv2rXujuSNB8fSGNLWQVAq2wL7xQ8U8YdzYzKB",
  "key10": "34t2RSuJHXnvm6rPscQzTkYDUi3q35ytmdgzeZjUeupnSXZTGkphFsKXXd7ZX2nv4j5Cauv8PmvDy19BTg4eofJk",
  "key11": "3w7HdUbP1GqtQUt5PCpQ62Ur7BrhfvVj7io3zfBjGVcukke9g1iNjAxvQjXk8NC2kmqKU3tiL747L8KHhhtf2hpG",
  "key12": "5y3Rb3ktTfHZgXMRyn7jmvfnGF1iGJgb8RkLvGkpsAnez8PceKEPvvGCKK3We8ig6tsApv4iQqbHm2jB1VJqHZii",
  "key13": "2nfAAH31JES1HTc7UDak5tKuHjCACMEPBFoGewVMd5AH9fB6VZ4SBNbZmxGvvoA5N7enphZ25UgYLvHcyPnL8KEc",
  "key14": "66ybsQjJg8fM4iJo6sFf1T2MKiPKyGjR72gypvTGjbTRGvf9M2NFmzvcqccFu4JJgL8JA1WZdAQprxGqsZxp7Yr6",
  "key15": "zrVY531YuvRzd8cbTyBVw2FMjiQ8UrwBQhebYy2W1oEVD7LxALrd8ukSQq1bBjXJDmJMVQAuc71e96aQQejQ15x",
  "key16": "4NLK1X48grtiKm4vK8BLE4rfLnB9Md4inwdoUyJj7CxyqXMcCXVr2sdGyLYayB5nNMWxxgpnGknTNyM4GkcKNQJq",
  "key17": "2Uc1XVMzvWEf3HKpZgk1cKdyjTZDV6vzQ2nmX4KqgAjHo8EKhiqV2pxaX2jQrF2y8K1RrMy3RcaTYTANYfh1eooa",
  "key18": "4xV2JhHRZYfLdn9BYzBCybJHS7FzQn6Vx6pbj6wwdexX4LKXannsZSXaUEvMHgVd1H5i3Vm22E8nCVg37TAausAN",
  "key19": "CdvnoEhfgsU7DC2PFr2n2YC1P8Y8tmnNpJ4qpEeMeGA89h6skhnPV9iMEb4UmVqBeDwmJPxsqX8WMRvbFygCoQ3",
  "key20": "S7dgMswtgbPr9YUz9KXEBJ3vR4HLxutCQjP9eTFWGdSpMFMgUcCMxn8HeE11vJN8X4b2s8Eb62KfqaxnpBX2pW8",
  "key21": "3b1tP7WDrAjNmtWVC4d5ACytuFsZCPJUnAp3Dboue5Aq6cKgHkVYnE51nmKnFvWZDCjXn4CcG2jV9n1jz6FVZFkG",
  "key22": "hTZtHxhDwKGwu6i3nM3AXSfC5ozRQii6RUD6u6Qw72UgtjfiwuM8e2KXzWmee7d8SZtEV2eXrR36JoV2ge75eAu",
  "key23": "5uYJhgrPhgjrxisMLE3PLmbnNQE67i5AApkMMkmsKXtgNWMtBHY8AYvP9TXEn5JHMN21kRWvgDq6bDtGeTj5gi6c",
  "key24": "mmzyNmhRShw17EW9zUU7CesiVDZT8C6wES3nupmeVtP9rM7BdoK2TbGvSCyBk7c2VTcZQTzM7mTQuKYQdRB7YCo",
  "key25": "49HWna9rEascbj9xTxnv2jmiqme5nnqKXaoPKWXUQXV9evwmwy2F9bt7qoDKTpx6sHHszRsCsS6FoBzxv6eSEFij",
  "key26": "4NbCdKYgpSqjFphR3EKCTheGQUFvLSjLUuacDNJDFV2zm9srDUFbK7zDJtKgG1y7rVDcY9DvRPhngqCtvaQ51xYM",
  "key27": "ddzX9QpMYPRSqALEJR3BKWD2bCJSV2Ut7Q51ajS441kHgj5EzmwzXWtej629bPLdfQuoQQnfeEWMZwHxWWHvJLU",
  "key28": "3E1yCrkb36zT8MmYVkxPnvd7RczNXoAD8h43LEsq1S7WmH2jfjF6rbe2cdpHRRE57TnrFU9VmQJKdMzyeaNujRWr",
  "key29": "4GTL9YrGJiN5qRp4FMqwMx29TyCG8Y72C9Lq5jKMHpg87ZTVFnpCqTZQFJ3AvVWRMeMFmMjg1ajCY5fFa59h5ysw",
  "key30": "4FGGqVd8h2TqCUNWTLHJYA1Na8SvsovSp2vAPMvyMuZ64vnTJE9et8QdKJb4aK1pbQ2xAENwuZkf4ciAxWGPdcxV",
  "key31": "4Vtorhxwd9fjz8R5Ga6Ef5gCFf7gvPzRXk3CbRstTr3wjXUD1BFAhEW5hc2UaJMaiJNTM8B3rNYTBGxsgS98gRfY",
  "key32": "2tUHPNowkf8VeXymzL8t7SDRKPoEV2ewRJb6KqCVM42v2KqJXJoWtnC6QMerFH2CTSizJbkN4CxRTPT6MfJSSqtN",
  "key33": "4YnLczczgKdNWS5Xf8C4WB3evWnxcUcX87eQb9NhLspvxciVuXigfzvzYDNj3x5tbxAxP6HhUwoUFxqvCEjtQufn",
  "key34": "2FdAh8XrQh5VkGJpX1CdzdqQQWssrCiR38FYChZDg4J8fGiodx2DwPGZMbCJ7zbpBehdFTLeCLYe3M36wuj4uhnt",
  "key35": "5HRSXtvyzNpM36vJ3J9P67ksG1JPpnLKPiV3F5xRYJhJMpfb2xTE7AwN4EtnoZZF2a2AJ1s3MAmPi236PAJKSYwH",
  "key36": "bQnKDTB4v6jD8c7HUziyBqsfnJCQD7N5ecstvBVxpj4Qgi2RhkWkTaTzgX4vQfPVty6fW6XVM5XTJuT9zJxaD9C",
  "key37": "geFcJ1mVGDzpQGyn3kGwV6sNJNj1YCYoRAgacNgh4aXZPMij7JDmFS7nmv2gGH16eUENg3VSR1zKZuWLZ1vQrC8",
  "key38": "3W5zrPHXubDh317V5PhgTeRyY6FGFy5jK2xM7yskTiYQUWLnGurVKXXs7bVvneBsCixRXxyJmxtodBoeAY9n9Pfw",
  "key39": "4g3kUrGJB3u71HuwDAxs9PqvvPdvLMmLSqoidrJZLLEUzE2BAZ2hPxX9DoFP7dqaSLd4K3j3dU77j5YynnnAikaN",
  "key40": "59Toh4XuWesfpcBtM5zM4enQLmdTn2oS4c2R8J4Djm2fFAUxQ794FNcd5tiY8FPcHBEKcQoBymnmV2YufZAga1vH",
  "key41": "4oAF7aKemZSJTrh6yeyt285PtVanUtEfATUdtp3PxsBrNJ2LkaAQ6iqmi6N8ZNkMVkrZTTGKNgZXSRdrM65cuK72",
  "key42": "4caLLrhsMEyYsfjePjR9rWCysX8gw9hB9c1CB64UTyc6NiKcystcyHc8WUNZ3sbhnVdYXbGiJcvxZQbN9syhvF8M",
  "key43": "55xezezitEY5eTZoxFifcTDmY3Wt35trH2Dva7vGoMixMnDiNVyL5mYXEscDhQ8sFUzZA2nz8XUyagcpnZ2iSyeJ",
  "key44": "3zgNSNLhqfehxW1aqdQNPYYuB44ocTRbNA1hkDSvgirTbJnfnSQ727h4WbefTqCE3mnGULJX9scbVNT4JViNFw2Y",
  "key45": "3MQBPMGZVAyfMRaf6yxNdUq3y74C8CmjcjoASBUbGStQve95SWWUeX39qER6rk3KptdwZDAFTPiQNj2ionG6QrD4"
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
