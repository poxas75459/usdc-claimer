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
    "45yDHq2AUwZru8FvvJFbJ4adwq5MpLowqroTsSX5NcPiwvcfnWThM52A6W1mZHnp55krejhBffG56B7suwV1BRt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4DnVK7dBP4rxJb74KYtVF9iPqCa5ZwWfhRXeNYd4NoQe6U9vwVunjcapi5eaKgEstjbhPTzWVs7weqVSspvc5Y",
  "key1": "ZXPrw6euJRPAP4B8QkHYgDxmeNPKAiK5C1fJhcLyLjuJS7sBjLvuWD2dFt5HnsyMcU5fj9p8wqDLC121dKhQWRb",
  "key2": "2v8KHRznLtHZJpEkFfxDhYyemxDgoeZ2Fi9Qd3NiCaixiaLrvS4U74TGKUSV4gV6j1KbUPTTGujuq2JFd69xvkRw",
  "key3": "52vVD22gJSz6Xid3CYKfSDc7ywwD8EM3qeZTzSYNSm1aivudsWhnbaDYUAZyh8cFQVsZmRH5b8VUb7ZcKN8EjcbQ",
  "key4": "22qUrVGBXgY2AX5MBriRxmH5tzon4vKM3HhZn4R7akwRMM9ynBXNhEENA2ZmivjMfyxAUb6EATzizEDtS6nD9YGm",
  "key5": "ojfqCfQE6cdM68oj4Krxd2J6DKshJrex14cgxLZBFLxsQEnARc9PJ1uVDHYDtYqDHXGJF8tKvYeBgTg76jmFY52",
  "key6": "4wArvaSiy7HbDeMfD92E27SuMp7DPoEcvezn79MhLFHLx2PZpEj7nPhqD7cVw9QKxwU3gXSwmxzP1zr56Gmg1gTo",
  "key7": "Avf1C1SPCTMiDxagY8mmm1g85AQ22dALM4c94RyGYQNvH4VRRKpVnZ1bQaASgypqFxkYs2VcBehZh4F3jy31hcS",
  "key8": "QgcAWo7sVcVUgZLVfjpP4besDc89LR4Cxa21Q5dxsMZFmqcueYGYLWsDZ8tho6jJGRaVDTpHZWU99LNRaG7c7sw",
  "key9": "2Phfanoio7vcDisYtM451u2WzZ2v6rXHQ7HnS8QpRnqUV1kuGLjEmewPHAR6VgQCRkJ5gDoUdwFdZyWB4NFUsPqJ",
  "key10": "2q8Re9fCCQeeqHWNFj1KhTWBC5VUmvbULdGuCcek5mx5k4BJCTtYvvfaq6w92FjWXxshB6xBHjTnp5p5jQh6Dug7",
  "key11": "W7doywcuxkNQe2Z83RWpJGiCXLbo1fxTa5ZU5KrJ3s7ued6FraZgEheJTxUxeVegecVcohx5jewhNSQ41ecGXS9",
  "key12": "3B2tkFQ4x4YCsK4ThfhTmBv7rZiVZ8BHNUBKhkZ7uvcZh5YKXwQXvXEE7MMJKuF8txCVfTVdBWqJRzRa1hmGBCGV",
  "key13": "DLe65mutoVhmRWMH3tA8TqX8bxLsWTxZb2kuyiAeRUpuMH9fqmf9JbEoLATXeNGJo9fG7vcmjUCMrjjsgE8KLy3",
  "key14": "318KEtffmDxXphwqfYkEodiXRZEvhCp1NB5fmbvxzztrkd3R1qcLheeiPTWodQ1JTzUeUNa5EoHjsZcy5hTAiAAK",
  "key15": "5yyvYj1gJUS5q8jYEJh4B3cYTQL4Ekv3LfC9mJwVc9xsdJVQrRRDVntwkbGRm6rX6Md1xN9TPKBuTC34WfLkENgk",
  "key16": "3Cc5ReXaxPDmh6NV3M1gQwDaKBXZpfXEzpVEtJTGrKRqyMHhrZ8DRthDzj6CLoiGE1MW3HWm1DEAingv7bdfjG8o",
  "key17": "4jy1BNBAkG5x8Hj6qbqwWrzkSuV5yBF8o5JZizMVJK5LLJkKYaUT5P1VXej6AgfkmoVHWMFUNXFHng13s73YuyUr",
  "key18": "4138hQZ8hzLpgnGNk4hbA6E4UavYPfNjL7iPjMkDFdNGNixrxFPnzFg4edqwj5kuLN6B4tY4iDfXGezjYiit37zY",
  "key19": "4xiDT56uNGpipiAiKMHy6HRuoK6B6RQFaFTb5cBuDv74HyXnnoMGHXLdiCQqV2RcPewwEkEeFfdfkojXeNs8XHRE",
  "key20": "564vAE42QDzrtyCTWqmsLnSYVPSPaByrvkekgpc8Y6L269nXvTeGHGPZ4kiB1AT6DNqZ7tojUULPbF3awnLjfJkh",
  "key21": "ySvqJnUJ4DJVPSuTHkLrfdg39N1zgUVs41YckK1PFcJ3RYrXSVeigXiG4ZXH1JCRotQqNpscobVDiiivs72biSg",
  "key22": "4RogsyWHVsrka681kEcsYuAAR38nNsGB9TtRX492gMkiKbVQriEK2oZDbJ7ReuDi7AuzYEQ1cuCpyWN8wUiEnC6W",
  "key23": "5rQNX7b9NHeHFa3RCSJekGer3oVrSv9C2U7rHLVcqNhwtiJmqGMpb5KZSvNETNEgwz5joe7jCpxC5DMoxJNyGX4W",
  "key24": "3CSt1bHX5nZdFQzx1VzoHrVJuGoK5XDjLrEm6DCikTGpaDMF9hYCYPynjsvchvnQqvGWeNJfGV7STPYdBQQB2k2w",
  "key25": "227MCA5ep8T3xZCfvvKGmSSDJaxwRN6YPHqWxAtPD1odF7xTcqPGjCFStYmQTpacN3iZ3zHZ1vHCkWUBkeFWT81W",
  "key26": "3efh35veyT4b6Ph8ctPyiHhxmr9fZAsp1VYsWAiV7XyvSTqSao1hkA1VwybBFt3vYTwua3PYcT3VeyGnff9rcAHT",
  "key27": "o1Zhh7scdECZpceWR727afu6ZGyts4VEcGiKmzBziVCqxdTybeKMbUKG8kKVmNE1BFtQAuWVmemg5xj2BzcZynm",
  "key28": "2MJNUgB9i2Mrwu7Mo8zQqqWDcVE3fzxY5DynLDYDduARQJVPHkgR8V1rmAqSuokLo3Cz8TjoLKeiRs5RMFs6LN5U",
  "key29": "27f1eV2m1tmF98wju4FCR5KsT2tZrhBaL8ftoaN3DFofY2BWDwc6B7bFvZ1XPNp1R2CEYZRELoxBn7a6q4j6Zjms",
  "key30": "65GjEfhjMSSbPMknNJDDQPZWXFQqaCyCHSXCQ84HmMGsdLsjmeDmvg6RML3nRSnmxpNxhTmBLT3mfPC1u4KwCMeT",
  "key31": "2SiDZespbbwJwMCZAs3njvN3sweT6wy2XRs1UKJooofzfWhtvpizG3zhs8Wjd2tAzCKkJyRTfgNpBkCZU3MuJV2T",
  "key32": "27oFLUafdbEQZWnMkYZb2iEW7Ykaw7Q2vvCYBteYxAx3498qg9cXGKLSQr9BEwAAE9rYeX5RpCgYPiWu4hy3VmJS",
  "key33": "5AFEhLG9GxiVUBGHFU5KH4PTtvhPet8dm8sxYQ9dP4y7SAzXn4G1nkLs4JEgtQf2fVaUfPfe1dGxqzhtp79qnPbB",
  "key34": "4CojvU9Yn595K5jo9dGkEPPB4FZqbdz3uPDSqPEgXEgxTo8q88UGzBcC81NABwDRhcTJtRYjUtmt3sQHeFHQgNCY",
  "key35": "2HSubybUZpPGFXLfgJ7VADqtYhfrXVbSDZy8jDEHYX9tPgCeeAwRZkXr5NbnxShYHBk52VEcXCbFxx8ZNcnFvAAA",
  "key36": "55pXfizksJ1kBnoa1Jxm5oouyEscbuoGM3ye1MZooxkLMewJTJH6CDue1UYpuDkrpTSUADTUrcrToY3WXLXwkn7z",
  "key37": "5EhqrCf5x7MU93wSYS7Rr5XMsUvgxqMEkeHnCvUA5ei2pvW4bvL4xwdxvbX7D7uscBSY9xKUPp7XiiyhoAMpCZ9W",
  "key38": "qz1RjoTKpwCujRzrseKutGJWFiRM57yrDUjQLa2bC2SvjaZ3P8YtvCh9ks31FKF5574x8DXBphnaDbzZpZ88csL",
  "key39": "krsNWyTdcqSSVB8viSanT1qRh4h9eh8RScXFD36X32yWf75Kosg2cKwQtvgsKaABbr7uo4oyHQ2XNK5jqBNgTwS",
  "key40": "5YQ9zr9sW2E6DoEmJfMhTEm9jrqQZFUBB3Pq8vK6Dv5DcxEKhQYfunbjzWkMHSegrcbG6ue7SXdXKBSBWBWfWkjW",
  "key41": "2BvY5vZNf9gu7SSLr9QvwSx6S2gkACMDRf4NkiECn9utdA2377xZVGUJyFwaiyfqJopYJiWpLhT8iZH2XxUAQbKq",
  "key42": "5L9p86S5sbBSGDsqcHSpXUb91nVc23SDaAvRGmE8ChciwTKFueEBH31GC5fPjFi32Qvh29xVS1F1CaScEjDqCKeP",
  "key43": "5yVWCoohjEwtWFQNMRR7gVRkBWb4A9qjDk2PF9BZUUK44Qpn756E3zzPdXxohoGbYkx4yUft65r8xnFWEv9aVpv6",
  "key44": "bkK7kcXjY5TBiVA4DeT5o6WpCJGxuAfZSysVa82xfjXvdxUkA8XFnVgPSzMsp8YsQsUCDZSbrv7PhN2ZDrT83Du",
  "key45": "67RAAhfDzUr32fF8MPD3jPo25WkHg9oabhX1Ny9NWdpDGTFhDZgesvsUPsJtcGBCowcFDbxGf31SRbUBpEE62bFU"
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
