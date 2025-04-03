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
    "5zH2mFBcMirhT6cshspBh6tKrfnBJ2f1Zokv4rD2VcmR4peWpnnis4JtGJmq4oRer8xb5LdWNpqbAafKHYmwtAqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReWaR4y5ZPEY9W1mawE7MYuf7WKwcqHXghVFPQSr92EUT8dN7WJjgj5zcaJnCKG1AvHaTbHaPPrAHkQGmZR52WZ",
  "key1": "27x9rMoGNzuhvDhot6NM8gUuNbk7Dx5jrwkXDziChXV5WF8hc9RxDJFfoRN9cu4NKbcMf5Bi4pyZkvfMZMmxCzAd",
  "key2": "5PbkrhFz9X43Mt5DsSdYw7LUsBK1NPskVq4BcW17AB2VhNmisBtduk8n2YtfsCiTBKTWjueHtUjbb1GKx7SMyKRx",
  "key3": "2Si2nL8KZyF4gqNJhNAEnNv1wKdSmeEm24ND5SvxKsrcJkCKTC53Xq7qAjbgkiDe3fXmdAwkhMLmaQbmNHVg36ds",
  "key4": "4kEXLvhCz5YFKUCkPouD9gBoabE5vXNC5QuSwkPiYmFsmH77iNzKVZb5bdj447jYArj5xd3EX4KpG6o9K2mpENmH",
  "key5": "3ZN1EFPmJYNCQvQhWAfdj75BCwrYuBa4WFRMTWscrod6YhCz3mejtbUAsUp5AJYKPzUbbNkYSfqE3bjJxiLh5H5e",
  "key6": "2CPd8TbNyLsXbHUcJUwQWhoanmRW8FdZykYzH52L8rt5hGBXKoeHqoy8eRPdfyjEyfrMLu4sNBkPsHvRWw75x2pm",
  "key7": "5zkfDoZ169m4xMLb3J3B7ybFmvGJnjc2nyU7wrBmu1wbq6FvtjLErAwNt3xS3zguTm2zsFh84MfGPvi18ijGWfyy",
  "key8": "248mgBYTm8e9fA5CSZNg3FucgUyg6gPcXK236H5YuP325nWy4LuMFfUjeaNbZYaYgvr6U6Cou3DvuFjxRp3sFQof",
  "key9": "3ZR8DHgqkKcJsAzKJBYnJswJBGRHvYxF1m5rFUZLchUcDWrR6isxsFRqYddHCLQtEsPqZX2KzVHQGUEKeFoootf5",
  "key10": "3xNrdD75KT8t9PGkGyHZfWAtXKxsneDZpH4ydpAV8C8mT978Qhrqgu6nf8e9wWxAmK6UaGD9MUmEkFx5eKZdiWVi",
  "key11": "hcwi1iqReWXNf4ZUEqgLeBUXzcq3QKDSgnge7pGq3KZQK3hsW2RH6unEU4srNPq2fQrUxcjuFWPk3Ycf1gWq66Y",
  "key12": "3J5P2DW7hyu61mX5tU6QF7ccrifaqcq8PJeRY4UwHEy38u6gSV7dNLiy9GwGqST78USSb4xNvmVLLJiDXXLDtU9N",
  "key13": "497BEjZLVVC5L3EduZNCBB8CndiEnkuHkSSDotitRmwyeoLTpqFZVaF2jtNA8SZq71aoTdfrWr2RdsiuHSsxS59K",
  "key14": "4JV4xuuRiVpX77jpS4LM27GgG9MDWbsLGZtLn3omsNzEFWo7FNqA7E4VZevNKdHtHAHz1DDht3Uc8uXxnNRYWBMu",
  "key15": "4d5hpN8y8ZQtSu4EsgDPpmHFcBB6mGS2xnwHZdrSZUeQuS33wczFRmBUqPvCJzGs5sEneqs4h7whHPsaUT1f7SCP",
  "key16": "5Z5KucJ4maPSeEJvgGugeHg7N2cpWR8RrCc29D5L9AtrHZhMLed7UKzph8xVG46eYXw8ZuhRV8msegAGYKC9LgjY",
  "key17": "3ctLTPXRCLzd21nukjibfJHzEF1uoCFWQ1k1CEF3BUfvfsvPuNq2NokybohWRVK4N15ZEroJfthbWfF682yqnUmr",
  "key18": "29YWqmktCHeHD69mJq6LPtmpNiJ2kNRWDnPDhHRK5Wwvks54JRa3Yvr74CpnyjtfcLzuDe4QEeyyANpvSZt1BRui",
  "key19": "3Yj6b5JyhC6rakAfR3r55Tpax7kW9nbBv5N8y1jPYTNxdLxiortCJ3DJMs8RhD7u4oSsPj8YpQPgFFkUTxvuNWEr",
  "key20": "jH94FCqVnNV4z8PHm34rXpWPWQy7mJg2T2SmJ8vD18MPrDcmVoNsXcgB4nK2XzyAhfJo2wmL68zx8vdojJCBMqP",
  "key21": "2jNCyhxKQiRrAsJyGWxm9u3XvRVzhJouHyxje3AjjQJteMpXbekwGZzFTpu3kRo8BYvYJnfadR8X6CMnAcXCxv2e",
  "key22": "AJ1x531Kb1z5BRLezMKYHQQHPwpiqB3gv5Ges1h82Ku9pncairGS4vLKpoXrUYJzMxrjZDaEQxBh3B5myKHFAkR",
  "key23": "xk3HcoGHLxBQeorMzLxCRJTz7NEPHzQcoM5hKmciXvML2QB2HY1y4cXoMBxRjgyKMiX9JKgFLhkjTWx8UGqC9Zj",
  "key24": "4EHPqU4Ttyw6HB6TijpemaDfy9hrS6NkyP4xAJ9saaqcPA7WttssQQHKhGGmiF3mJb9Q43ofr6UTQVsMnH7FH9os",
  "key25": "2SjH35Ns8xHBDR9Ukihnuujt83zym943pYaVef5aYZx7X6UsTbNYbU158GsZPELyCNycJV5KBeHtyBjzuagZ2h6j",
  "key26": "4Y6PoKNfyj6Vi4z2PDEdP1kDBjcGkRYRxJBzjckJawdG2AeeEJFbVxGCWT3zcLUakbdapT131CHn9h5mzhkfE4ha",
  "key27": "2qcEMPVwn7h7XA38VEDLSLL12KBwVtYkoAD69BT6tnvjRQgwnP54kBBjAxYEfEbM22Rnz1goSt7wnntaV5NmxbCB",
  "key28": "3ANZDjUf8CiQCk7B4Xg96HL4mzyCSqckfqtaxy1Z8ufHAKp9tLB76enURKMEDrNAQ6wLFPBhXCtz5JdG7CcHwD4r",
  "key29": "3qK3xrLs3NFz7jujVXKtV3VnuEGmbHN51htuDXXmzugyiQhARBPgDTaw5hWJRPLufZe9w1279zwnCHas5Wd8UQxc",
  "key30": "RhcHqmMH88v4v8UhJDhMD3BBcZFTBgBMjXk87dFBCtLaEVp1iBfF19u48YfwvJpws8GSW8YmN4Ji8ma2q3TwSBN",
  "key31": "5xcYsucXXrqLNMCkucobmGZHR2pPF3Xj81obApHTR8iZEJFTBxjXaZzG1E1HRgWSjq9oRtD5FdMeWTsoUgKrpHX6",
  "key32": "4HiFZF7ufaGAPst3SubfuPV4N1QTq98zpo3FnAhmmN6TcKJH2S5xdayXES7vhL9bCZ8kPi2R3zb6N1LWbM7bXCX1",
  "key33": "5nYNKTuPaTJtw6CNcePhZTTkvniYgJ8DqEgHgPcwrX4Buc2bsVXAD4qHqdUmZG3onbFC7K4bjYXYA9Lztm9wWwdG",
  "key34": "ybVdk6BTpTcRjYRuBFEHmWcLx4Sfqj1nt47KgXKxt9tcAypKz9tAtatauqoaQYJsFxsHLZrXLf8YVSsHgGSMwAR",
  "key35": "4ipcTEGcUoiUCTmFTQ9LgD71ZUuSzz4ENkCuLB3Jwmk438SyHGvEfTBhcPJsMjb8hiLEwKVfM1vfRtduiwbVqqiJ",
  "key36": "2tocARxAMm2FAPh4uMrU7eZzKQaJcFMrRwu2gUyAd3nMkA633M5BYiqhDDqpB4BuLPc9BRdBm6nZCJLL743GDPZZ",
  "key37": "jJ2vKXFtuJoCDYgyLGfPgRH5mfeMLsRmV9cLLLZ1DciqFYseedChp5181HtJF98JYMhssppWstNcmj1PKrjhyqy",
  "key38": "33oHvF7L1QzgXSx1EH4JDr5aMy9qZgsC6uaYsRandnsvbEAwRNXYH1UhafNfGrwn1gkSj65KmqoqPTnGkvWjRUSa",
  "key39": "2QCFFdUnfU7fZ8HmT4PyHVKskiN5FMWVT611AYyTou3EmZhtazhSprNDSbEuKMPYXLRuouSmxvJPprdRPuyPmUxE",
  "key40": "3WgHDbGxCCdVN4vvAM3QFtSiBDANehkxzGdAtRB4rT3vcqjDtQLSRJSqDM6bQ8STvRAnyZvctc2Tv5UfsoHF6enb",
  "key41": "5TTWrwLrJUmgtw2GsG9p9k4pztyjSRckAN1eDAfHXvweQRbaXAj5HhmActYt8DGMCN9nNvSr81iRAohz1z5tLx2G",
  "key42": "56pkM84VjBNgPQVNHDPEtSJpkeKBTeC5MdSHGEHBS6YBKqPqHyp6oAqkaDtvijzjUneYSCd7NG7PGS1uDT2yfDfF",
  "key43": "25eE1w8fKXXxz8rBgW3eNVTeJrxtnohN6dTWRJUW1BQKRwzZdQEUshgWUJA3AXBD6Kno58WSxKmy3VVtwR37Xa2m",
  "key44": "2gsQFXSxwwiw5ZT3mFmpXbLm7aWvGCsnLqfbrT6B49b44fyCTQMLLF5YfL3Afm3iRfR5gUQtB3A6QdLnc9rdqNeg",
  "key45": "5NkZZqTDwD7JzqedRqeBAMYcSDEse9BDn7Mx5WUPdYDni8gZRrdhbM7scMPmi9msJ7XQkcNLQfFTmFJftvago5vi",
  "key46": "2vnXFDEAHUQGuZ3tDAf8TDmZ5kkxqR8s1qLvoYtnABKSG5DDsBwVniRgqEzMntQKNEE9QUEw1CWh7v8ZgeGp28Jy"
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
