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
    "5foPMP9fkJ9P3bRewbcHZcxNL2SvAPb33UCWioJugEX4d4AkLjLJgLAQb1VKCrh8qZmA7fDXD3VSnkjR2CFjQSEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkxqtpDXNkKrhPWf7EyZAE5ZKwi2mcpAENad3P7PhwFGcSCyBWaDsHNcUoxFCmNFC9Goy8F4zSbd6Zp2hhgCvJf",
  "key1": "oChiNBMfreASiUVfNCbnDp79CMotakm523x4ukcBq5DiaUuBMqDKamdWrcK3Qk2WTS4q8XLtqggohYURBLYWMum",
  "key2": "3L3ZoKTv8nfTSmy1V4UygBq6tp9bf8387mb4C5nzfCpqgEGUKNJvoSBqabbqRjAEBKRoEd9oQFQc7SvCLVGPuhJn",
  "key3": "3Y6qFwCphjtwoh75FJMKxn7GseJMaPU3htkXDP13cPqCcfncs6SpDbBayryfvVwrRSAaxvUsoty5pcwHxVCKZYMo",
  "key4": "5e7JS2ynSuip39neGqv6dfkbrDMn9cSuEhVRAu5rxAENuia8cviLwKUrWep9b5JLt5azPdVokJmvZnpQAvKT9tjj",
  "key5": "MyHsDZkxa7sxwCww3AbE26q5xQtvBo6JkkcApemWNdee6Dr7PfTW1SxAQj494uAmW6e4WfjtVdUedacFtfNZAno",
  "key6": "5iFyPYwq6JthDMsaVmkUCqb7hADUY59zCJ4hvJ8YXrxRemQY7Tbfd575BYzD8YM48aVb7ZUL3yYDQJeoE9Wurffo",
  "key7": "4viKRRCCvbySiuqW3RLRke4XsTGdfZkEcafdoTLxfmyjKUEkpQJfDDu8DTkwxvmkrAF5aUwbGNTwiejyNfnquvLp",
  "key8": "24jgdhnAoHsWH3mbJ82wApfChRGdx3E7yB7FTFHJ7cLgMC3WHAWsx4aTVt77jq327YEW5swBP8ZBiQRtKRaVSar1",
  "key9": "5CR5jPGV98cQRKHCkeBTJvjtv9AzB4kHiMuTeg6VVtyj9w9QsCpuo72ckWXDuYz7eyeVKx3UH2qKrcFdsu1R2eQ7",
  "key10": "BKdotqehaT7vvXQ4zfSmUkgJXKSHqwVpoZ4Def1DU2cm1R6DuNgcV5pCGKj8r6innKEiFzr1XLNVbecJQW4c1Td",
  "key11": "5F7QyZ9KDrwGz7XmzHKXhuHwUob6Qx6Hz5SYxH8U3rsdLRuZhR5uh6o3CNPDr3tfkx6FdhZ8SfNV6t4irrCsMfkg",
  "key12": "4ior8z51BrxgAoQhQjMXFgKiUjVicjJ5dzi9KccbUVbjF79L86ogiUzRywc74oxMf7cQVXpC1NdhGei9R6ojoX7J",
  "key13": "cNykMknmdZEvHpLwZ3ghVaHUsTpnPmpDoYPANSUrLczstz5crrJATLhaEebJQ8CVmjYR3Ne2aw1KB6tf1y6Q3Aq",
  "key14": "4MT32ZMz7qAgLM7w3fyfPHovZ7N9uvaqa4ypF9r6us13ytXrNFWJdpQXzuDhcpGbwEbYjoEW6WVvPgLgwz2uHLi3",
  "key15": "671xVD1VwsxaNFsEaCDLDgfxv1rt6fYTT3MYxz8Ed5wy4aSgfJ67fviqq7omwHYopcUdVKi5vSPsQ3N1jFRKbfU9",
  "key16": "3vXynGTR8xQkFweuFzCXF5ZkEeMPQVmmwbH91YeF4arDhZSgUNw6931v9xmoVys8ULpQZhtA3hyqMLPRosMh9jVd",
  "key17": "4mrUBiAWHRJ7hKWWZSXKH6B8nekKcu339xArfRDsZfKSxA8wQ7ycdyg1VUbNxwxrY86mN24hGqKjF44KUtgi9zwp",
  "key18": "38Sc13SFtHUb3MaHcieCEh8ue2exHFnwkrRVhpzHwoAiZieHpJpzuWbVao4qExtsxbqDLtcGNjVa9sUsAVWNQf8k",
  "key19": "4nS2AnxtqduBRHQ8P2Z2rBvXSr2FDaaUbZA1A9BTFXU4gVocFYgZyM53sYTqR5K7xyuwHFyYWy18y1RS4awC6DSm",
  "key20": "43iaAC8GJ843wiPrPpD28MUdRgFpuBHPGZK1bGY8RJWZVWL2G9DR7QBm7dSUDkxKRYb7PfDKwheqxZTF36zPEVB9",
  "key21": "4DXPokqpYmrAminWRwGDaeA2z7Cfa4yAYrXRjxCUUa4pXFgMWbNTx8CDSH1gpH3WwJdMS6QKjCoJSNpucEnqLYrF",
  "key22": "3w9Xuz4yvebUntDs3v3yyqcYMJmb3kZAteFL3GJrufd5VjArgxbZovExBLWv1wjihCDwSpU179d23K8Jcd7LLxdK",
  "key23": "2ymqRXn6zsFrWHeR1DtQJz3kJ6fzvUCLuDAS8VQVYwQdt6qXJ8vcK3PHTaT9tsqLWBTZABimyC6YqFvrBqN5iRWc",
  "key24": "632wNgfVWcvurWV2Wkj95KW2HT7sCYYSWJAExW72ctHQZPDPhFLGD689y1gKuoeCuRXVD92DgLhjgXiDxpoEBspy",
  "key25": "2PHsQFbxLL2ZUQkhY7khBCD9ekUQf4FcrZX6oAQk3VA2EUBGN2dBQ9V8iaFwEiLwmYLEwasz9jQLzTX76BcGMava",
  "key26": "5iR1qqLhzfnJpFtWYmSWKaovNa77sxo87uPcdKaY213vVfChzFiPrFv3cyG3cLD76eKmCJjbum7KcGU15PJ7R5wk",
  "key27": "3izEajJM7eFbhR2twUqNxARuL2wYU9t55ZqV8BJ2r6SqrH4WgvsfDVcEAPjwV3AZtkEj88AuZpRMsFUHRz1s6TYz",
  "key28": "4epEArhUibTUVFGTzm9MgHprJXW8n1kfe3GHqiRHUBLxvHwnofsoKezY1Sy33qLWUVKmEdGCHMPPs7TiH4wARwyj",
  "key29": "4TY6vRVvbfNGXwYP8B97DNhDsHu3URw6AjhnH5qm6DWmQVRmcXAopajLkVf92sXmBUaUtHNkijM2NmpQSC8jHrTs",
  "key30": "3DGzumC6jFTiHP7unbFNKrJRyMt2SLWuR4APzZH8UxfmbqUEcJbx818dcJrjSaMXSPaCSvNBLMkXREt5Ky73p6ck",
  "key31": "Y9LEqyuZP7otRDiCoFyUKqiJ93f7vbQwBFHrswyZ2qaR7vv7PQCgRi3d3snKkxqZxJw2mHHhLksaQHtRHmqoWY1",
  "key32": "5NzcoiPoS5wKsfN1vxvZPNushmy1iUbiSHiQdmBp9Xdic86rkV1QPcLY8BQncxJQzNQV1KNJonkcaLRv329XBB4e",
  "key33": "2KNzExgt4rpinTcrTqzRsiTD9QppKUdX27fwbyqRftQPEK8ewt1Eqi65bA8AtddT5nZ4fZxhgAR3jJef8QZhbwyJ",
  "key34": "4dCLtYjpMdyv3o6au14iZPVCSg29SixZdNahGAHjxGrQGFsrKB4V7MXWsVX3YMgsvZK9RP2yo7SKDdUg1ovEUSmF",
  "key35": "51TiuSPCr1CJYMqgEqWuRh4ccLLwDBy2tEsE4LKmMbcj6PWkyipavdSC3YcLUMEQ42Cxvs34v5RctZWNupaN2u5y",
  "key36": "213YPwVNv77Gz1GnreUqvgnLSFigwpgVm9wD84xucBaFcbzda9VsP4bFNVxraJJbmfifLTkk4Qa1j6kS4u5wVvbh",
  "key37": "4RTmZSAPn6cZGvHteiwgdgF3mGFNUfVdjNYb6huJT1S3phggDo9HTdSBkZGjAspHUyDff6dsuGrNXQK5GuVYpLdX",
  "key38": "5FVDQhyUrEh26YwP8sNY1GFp1Rvt8YqPNAYQHgezckRgBsTfHwFTcNNTgWb5go3Z7vMjweh29Ms6scg3nLfGSped"
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
