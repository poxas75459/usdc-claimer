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
    "61PjcWVD3D22YmqkMiDsHAKFaajxggDZ5JoCtH9V8o6bFGjEUadVPvuUvviNTtcYAyK99awEYi4MJMDidp9vuzGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vxQrVZiKjr1KPVztvjSa11p8KCnSQHxd1ZYJrUaWg1PWTieaNmJUUUDM2zJNda2Co2Tty8XFd6eurukTnkB2xub",
  "key1": "2Xsy3gLPC5LBi3poa1iJZSr2X7khSPoHpbyXWiMN8NV72VuJ9S3VnhryejcpSZpQ9GLvSMicksiUc7eqs8kJStae",
  "key2": "5KPPP8bD1TT1C2wduueyFCLCAMAY3mY7pk6FUh1SbGoWTDmoaJimU5t77XmoDDv4fAhLJQ6SQ84TKFRaCuG4nmew",
  "key3": "2hubf7kpeU6o1NdessarYBpPcC9P3uwzuQKmLEVzvoTWAN19nqLY8yFEdPuQ3oEHEMzAqDBChxHWL7qN6MJwBrwc",
  "key4": "5WxiXp7nQ6geMykktwPv1xxnF7g9C6feuZ51RCFMJqC2bALjrY5pDP9bzrrdqm86abEoA2mopXBDtAvs2eqzv1aB",
  "key5": "5ZKqfndBxCeP2ivqwTa4bhofCLV8XpXxMWKixCbJ123aHnCJqfHpSTcs42QrVbkAuEe9XieduxvfYZZRLCPSxeEM",
  "key6": "3ZwhHSwwiX1GHMfNBNvzd6Thb5bQgiQkbVUvTCGrSGTDWMQ9EECR5WKL9K4o3doPHYV3ai6kavgdDdN6FM72dN4J",
  "key7": "5QvYu78szu2C8tLY5jwFEAERnY4pU8BkP4crv6h14ATZoXPaoJp8BiUiPWxkDU4eCvyptvpHLUxMhL6UKSoFyU3W",
  "key8": "59x8Xjaam9NmD8xqbzNLF1SeegppnKNAPmJK5ruk7o9cKpdKu5nPnNnisTiBKReCi942DA4WY8yi4bddd7u5tMwz",
  "key9": "5y8xypHDFw3wGPKKdmyHhpPtLmgzL3f9rpoXZ3LqDJkpSmdRgz9hH7sfHyJHwPmFncCMc1VE79wL7GDJXsrBXHXx",
  "key10": "2LEVCXH3zrD8oKsERH2wJgLjQEC35wXmtEENugALwXiQfjHrxciDwWwgzjk4cbySoo1intFBiVcHPf5HQHBb2n7E",
  "key11": "5Bvd6vYuKhqBxR1LfiZmjJPni5e9jscu6iNw2oCYu3TE6Wen1rsaBhP9JCKswpgTyTH6NgUkyVzLic9WqWgah5fc",
  "key12": "2CEQ4gE1yiDKenTxUR5FYdtL1QdPYkpWfQfQRLqdjqVjSkHPW5WfAswLs4jz3EbPYeyu241u7rz8RMWn5iFX6gcb",
  "key13": "3KFf6BEQT73d9qNgAYNkE6T93pEymae2fC8RgGNXYnvAd668gM635ai5XycXMcCHTbtPNRwP6JcGHXQMn1czSG7B",
  "key14": "2KL4WDrLbm6pXiTRTEkPzpLrY8Wr9zPoy9BfajrZAvZ4VNkP85Rzptq8rWd6pJhmht6mp8BhaTh7fuabepAnJS7M",
  "key15": "Y33L6cUAZdiqFApoKvxj9tV7seeqkdG2aysiftF5szPv5WzsokghxFtoLdpXrM1HQQ8QNm6TjRc7RBvsHtoPi8g",
  "key16": "3ybk8AzKFR4n9SQsD25B8quKwLS5JDz3e5xjJqym76LibqUCmNkiNcEHQKRu3Ga3Trg1K2K6MPbfjFoyJUNWmjx2",
  "key17": "4VXjo4wH8iSfgfmZGrG4iBFkEQMzRUQGcg3zCCC8RiuS4mS7osCYPe3CyYfz76UxmsYQ2GAYWVdczey1GedybvEf",
  "key18": "KYfPEsm8NfddZs1d6tjsNL52tTLxVvBFX1XEiDx76nr2vVfqxC4vbrnMn5GUsEBNyXCqNQideWDUCmDEHhB4Lqr",
  "key19": "42CuYQkHVrDBwTCijLp9qkN5XfS66jhedWpLRYumTV4qo1KFqFjCrhV1fng5zGVaVrsKbNXTzMYcsRe4BhEdhU8E",
  "key20": "4oZBFsEEff2K72p5CcBKQoYQxvTmtvd3sa29wYcCniCdKEvF1yQRGts4B1PXEzVuaP8ZUxRExP5jz5JuipaLsvpT",
  "key21": "27KnB9zEHXcCnK5yNhr8CpyQcFpSfBTLyvgtt6eC6oJMv4aB4Tr5BsBgxtWqF3BYJGQ2BngjSe6RFFTJKbf5ntbt",
  "key22": "5QhZe96K9y96Famzt4siYPYQ7XGMz2o8pbwGd8nzg8qjf87wkQAzTQp3YGRAtFEc2YrWYKDLVentcUxvLVqgEKso",
  "key23": "5KfDqJiYhSB3AZNq4iF2SwbGLM1KyJBB9u5Z2Fn2BJHWJhSpEGBkkT4qB4Z7ZYzicdaxCCEuSBsmD4ejZaRgHNtj",
  "key24": "2bjQdQZLP1VyUE57y97FvW5P99idLDCBfAFbTF1WUNKFFgukMyWQQCumasUGpxb7RQ6u8tkWuYkgssJFcKgLnYwg",
  "key25": "2KsSj8k8Nok2Z85m4rP6Y22w2gXsdzGd8nzRns96peWHB1d2hysiQbXSdPb8G7rovHPScsNuzeSWTh4r4F4WvVXC",
  "key26": "5dcfif1JyyqgJ2PNiZ5vZz8GjMhvXFWYMConv3ynXrxNKebjc3FTpuBXbiqVzvQ82gDtYvEZ1TiNjgKyzmQK5c6T",
  "key27": "5UQbT62XdusFeUfgkhjrKv1Pi3K2SQqqPPNkVFLozAXSZ8ncpjsGpwkBu8JwJwHgtoVzXpWwbftEkqXQuCwS3Mva",
  "key28": "3SdQ2NFr4MzfZtxuHQiMwKmhUS3HnG5q9PquPu8izVCnRVDeME73Mjm5WTeqEZSzhuzhxPMquCaNcSPrVmcnSvu2",
  "key29": "5TDTjsBqajDdt8vyb3U9pxC5jRw2ihxLk7JgAaBK7bx1BdH6LpxM557wmteTGPESJjmDYYXGn7nEigMm8WUqui4z",
  "key30": "2r11E9jV8jghruLZrxu6gPhNPngPTNW647oRazR6kD3aJkdzjubcsJoK3Hfs6WcD4RXLcASV67XpPbeKiTQTCTyi",
  "key31": "5T1BTJAF4aVXn4tcuyzWNkd5eny1iuUpenAn8mvWswuvXhP4qV4GpWPGkqm1WJiFMywxnYk6pAxLMZ5Yp487MpgQ",
  "key32": "58YBvgCb3Fvc3LYaHCASskjPfrQwEZAXkB28VqTM329F3zGuME4qcj2TNJLCJmZ7zmVmBoDUdCBGyPQQ5fsmLday",
  "key33": "4StdZhFYVxxMybFHWHArJTzbs77XTwD3UaE62buuLSNuDk49nHWhUi7HP342feF2We2qe3EXzynyhTAscvxctYkK",
  "key34": "5FJDJYWvMidwiw7yYf1vzQRQyb8hSd9XpaU7ozW2pDWTXyUS6qHV1GXCR3d75BCbSxoy3WBfHxXqWuDnoaB2tZe6",
  "key35": "3hcy8EsEMAuBUQb946V5K3eYcTP8wXYCcK7hnNm3RtAoNxKbxPMzCRtrSSaSFnmJsckbkdMkbYN5ggkiQNDYP9Lf",
  "key36": "3NQXa4odynF7MoFAHqtZVCySNGYCbuKVXf6ArLGap75cxMmFrZ7xusVGkFUY2x5JVLVuXoAkJ9jH8BTsCHzeBqPA",
  "key37": "Rhxm9bnTm6adsGxNv8w1MxbYbRndK3kgp5ifTSW7ZxfYhPPC3FBVKhokJ5HPAFKJDA7eGawyvva14922pDWUsGN",
  "key38": "QKTLPNf4bqecQiGJWnRHkhC82aNnn6BRbCcH2Mpx28NbVGdChAK2hXxKhAemGCJvYeixC6fSfX5iQR25gYC9zdJ",
  "key39": "3wsD1rwHLJ56nDErA6gLHzUTYBpGucZv227PftH4Sg6MPcwkU7FFFxHukGEytXjageYH26oyY6q1tA7HpjK41s9w",
  "key40": "4RUosyGUwy93LpZtB8yymfmjU2kp9ZYUB1VyqypxRzZBLLN1naWG9auXfvgMrikxapQsDyRXNV4SVmLWbuvSWjeh",
  "key41": "5QAGbzBwReyo3UzAKuKzJvjZ5ZARVyYK4dX1Nso7RquPBXFrrZvndF9UWsevktXugx2HUhbHomg5UXrcZJkMziTT",
  "key42": "4Si1tLHHG64pMxD1YS8Pwi8oSGFDdEyDtbv5v91f8uHm7699FeCiKCyi9zUUE4DajyS6s2VFhCZG6gH2wpNtcoeU",
  "key43": "2qSjh6uakiVLDAcktbjEXhsxhmb3joqTq36VvhMAh4VzFzDwErfGkTh1A4Yae7pXtNWe8S2RPmGGFhJxvyJPiPyv",
  "key44": "3T33tLfSo73wQvdxx8Qeb21AQ9U4Vb5w7JYFk3RrmrrPTrGEY97nxsfjshp94g7WeVaQKX1ikXHNKCo2hzYww4iy",
  "key45": "4DW1bVHbk96Yv6oSB1AkHtCgHVhjckzd7n7Z7gzqiqddsxuoB17u3drZ6evXS43Wr19f63jYwfrbMDbuUn2Zsqtu",
  "key46": "3LGcW7uXdtnyNqLV3unZSRunaMKctQz8pVbYuB6nKgdnWZLdbJ8sJejuT6ADoUs31ndJTkTgwUprvzuPjXPhnp1E",
  "key47": "33dYh7zykrXFHCcii7SDB3LGyoLyYA8NRSqqU82HAtrA2HxvhXsFPrgR8eNW1hrLinNkQPM1H1zTymMdXmS7J1B7",
  "key48": "cHktCkmtVnchGvTWGjoy2FTZd7Lac5bG3y8YyfBXxcxjDEg4JFm9biMCiZU7qTCMyga69QtYB9R5vQuRdW22FyF"
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
