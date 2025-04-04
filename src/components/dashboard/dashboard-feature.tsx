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
    "48VDVpwuKaZp4iwfBT9rcUtsLeWmDfhm6pWLvD2RicDVG9N6om1buw1oXemjGuSDamtDm1QtcUZAYZVteqfLZhBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xZSESduY9GnfKrmg7DoW3CM1jzWypMzPb3HVFCkupZ9yTG6icvq4Cg3G2kP1wxgTxKy3EEq4mtdRdNBhGu4KyY",
  "key1": "5EajcZERvUXqXB9WpXJ6T9nREkvS9Kfhg15p6UyY81tHFfaQgmfABc2cdccAFsrEBj7jfLi5WpY6hS1JGPAjNMNQ",
  "key2": "67Ue9nTjyfiRLbGnANZoQ7kFe3tkrSuf7KyszqyzVtAfF2K9Y6umQRqcdEYWc38ujAtDMBJuo2UPHwonmRyiMYvp",
  "key3": "5hX9X4icru8W2WLbbEwAyr5oPbXCrA8xfVYCfDmtDboico43GQy1gxcMBjEYcoRAFdMm1CSYVnwVBKrFEcbraV5h",
  "key4": "3k6QfdL4otprQpSQiHUpT5doA8Wz1WRNHK5dVsZTBfMH6GoJuMVazGwbvDMnFEQG2HH6ecXvMpa3z9EQrWpPRyjF",
  "key5": "2LykX254LjtK3d4AQW7VDPgHK2Np3iuLZsgK7NtYoR17nTZD4j4JXpsg2huDzdmBi1fth1Ag6jskdRebaMfhiTnH",
  "key6": "4s72kJgF2Y1JQVaJxNE8JrQvzYVJi3TP38Z6USkDJHfr162WKuMJEntrfGj7xhZqJThu9dZK28iWbFS3AkKNxUkX",
  "key7": "5ooeX1SRMaiV2aP1krATLVXqwcH9UZcaqWmxNtmYHPhaKVEGHxrtv4xaLPXaynxYzrFNKSm9TJiEyjg9TrbT7XgX",
  "key8": "3BCxeFcMMchPM232WNREMgo3gQeBp8RT4x6wWCnukU93bNFf29cxuebHvWcmAjq4u3foyHJxvMcxUXqi6SztgSrR",
  "key9": "4FA1ipouN1dG6CfNtGE1sSHYNcVH3evtbFyPWVVCQvzcvCVaZBuogvNyX3GG2knh3NLhYDn4SBW3cvFcAbMmewbM",
  "key10": "BSh9axbXQK7sjKkztbhw5kt68SbzMmU1Uu4nWumEoMWFungo3cGUyzeC2vJso213fxF6PJEhdoyH9a4jpZhe1Gk",
  "key11": "4CLccu76LzGVdXbb2QMfLcN7C5YStU6GfeCbvpppKE7GYr8mekhpgrfab5CstEURh2Cihy2LrQokk6vkSVKzg8mH",
  "key12": "358mXvFvugZDy8u1Amd9DXnZYesgSkjZBdijJeKssNUyfHRZvfq136Dj3FSCDonk9o6x8AeL29baxW1xx7u8adDS",
  "key13": "66D1VwySrAViof9AdCUTPTVUbrL9iDVzYQLxPzhSf6Q8MuHPtiq5TedDqPP9Yy21Ppt7CXEyJt7Qn6MeEQbSqTKG",
  "key14": "5JeGsHx2gt1ngUtacMcbRa58KqrCcKsB9XpTJ9dtHHc6k6AE8V8G2RMaDddsbMAKoAa6or13x9oxPYmYuXK461k",
  "key15": "3bpVfxm5yFKeT29j28saZ2VN5HuhWpnPpVV4KyEsAmRLVmzJweXnxmFf2abJxnNqYTmX4MGEXKqkfRXt7q2eHP4h",
  "key16": "5QxV4EQLRZDeby1YfFcTdy2zH87eNvowhYRYa7VndpqisyAr3tJi2okQZmAEMwkSJNksMDTcfr49gmHmm79rwvzM",
  "key17": "3YPPx7kZBs9C6vanatxYeSvjsd7vhfYYnA85MNkjtuBTLs2KeYP5z596tUVBmkZrjXeYt8EYRCCEqxj3N9JecbqE",
  "key18": "2qjcjZTNp7NFttufpJTxEf6FVbyhTPmbtGRtkymEvDHwjDRnfZpLq45fARLoiZyWYGA1oAunmUNrTLgzKeGEfsFz",
  "key19": "4BG2bbi8etEwuRxAekQYQNtJk3UYYa2QMc7voZxFrxFyJGQBp5i8AaqgKLaxkoSrU9hTXEmbAduPQWytVk1GvRHb",
  "key20": "53zijkPeYxTg8ADNGVmxTBD7gkMmK3sHR6geiixbDyf4Bg7XCU1cs5WCQM4Eno7CZuwWrcy3CX59xi6TM3Zf8dwJ",
  "key21": "3DGKkmWCfSJRCRqMsbh1nhhf4CrMysQ951nQNnFurtFiAYVMCwnLV9tHpdhFsGPdDHarMMvU4pdp4EJgKhDrWF1M",
  "key22": "3ufyc8YC4jfaZgwyia5xwKvRhq23Ceoy1V9wEWZLGw9j39NX6X6sH59v1DBM92MdMMdbWRUhBcUBVTWUifM3Na6J",
  "key23": "uE1t5r7D1jmdnWSAFyBQwLbn2yaE4giHd7sJtpfc58bvwtf3iKfCUqbRMDy1Jpf4jr9Cv7F19XcR9vRjocQJ1F4",
  "key24": "4S2thhauq8uMT2MBR6cctUS3cnw9siHp7jCDKFrs5a4pLxWHasPJzAmfBr4KTEP5uRQdbBd3RLR2tjRrwfzszEio",
  "key25": "297mpY5ErwWvpaDkoTEQtqEmCUP35YpVPG14UxrZBeNUmT98Ra9ZxBUxvQ4xRdeRDtQFZMGuxXPfAYRPGCxKoEjh",
  "key26": "7s2KMdsqt4mW8BHviW1iPhHC2SmrM9GbL9tPCpUD3BQBM5xgQr342A2g9z7HpPhESADxCBUVg6cCXKuHS7WdEZY",
  "key27": "2t23srbsBZZKCQPwx9nASGRNwqdKWGTg4jQsxi2mDsTZXFhNwXZSCZ8p6YkUrSuRFUiEJjXa8Y2DVWYhT7LRq5vi",
  "key28": "2Wmjn24Y7kaJYJyMQrBVVS5gykUCufx5ZjUS3dGnmKfaN8RzZvZ7HZHE2zGpFzdw2ADhQ5jZ5Qj41zawXjKx2n9z",
  "key29": "4AZYaRd9dPoCAEbtbSE1kZfcNTovsnPAAkXQhAeMZ7Vj9UV9EyQLQwLDjPffXZJgfMwkCfyVDm74434iBRDX36Q9",
  "key30": "4fG2ig2rW4u6uWHZ5yptz69e8F77YRUcJwaN82Bj6gY2cePA7osR3cpM7nQGXTXtyD6ygbzJm33Aqxu2Xd9jgV4K",
  "key31": "4qSzZVcenNAAfyR2TLJ1HiMZBUbGjD3t64BxrefQX9SDCkTzKzDaJgxJ9LeJoPZpox4PJRFVNYtxof2ytTHwSJEe",
  "key32": "5dXYckFqsxqEoR5tb463tG2zwNJobnTNCFypZ4aTsHTgcoDuUWxS5e5LNPQbjjfCaA3sPZRHWGZ5oozuq8fq9nnh",
  "key33": "3BfU9qoM2ycG2D3rgxKBFYERd2Q88uMwHhJePE8ukAarNhSvUKvHxLbsQ9W9SjQUYF6qwAY8yWZbmMUmMFU1jkf5",
  "key34": "mUjavhNPUtKez9NKtkYZazEa5sjAtJJeoucyDk3djQvajdYbBLE55AZ9cqUbqqd6xarpgp6dTiDTDMtJ1kExiPR",
  "key35": "4RixWKu2FJp1PMK4KSXGdwQidEvTxuHL2yeLeYF4kMXP2mopHUXtKGnCopLBhthqLL31xKAGi3iRteuPYNpqxpvw",
  "key36": "2PNNyfdQL8uzaGurVx1bqTH5AHo2jU5zwWNbzxiR8r5TDFMek9noTftFvur8Mn1pG6vjkU6u5SL67vqgpqDyCGgz",
  "key37": "2rouuwBazPbJvjRvFK8WKK9qtkRJXwTVkhMNuFFf3qAumfhhcSaniKCLS7WTGJfiwa8iSXYf1fXwnkXytgmFXJzz",
  "key38": "4xZM4dXtyP7oaCcQcY5TqYi39ATwSKGQhQp3bLuc4q7hx8xMpKir2NQBgbZC1DYYs5sQERMs7YeqgcALWGZmiP2j",
  "key39": "DuPvc2aCb3Mb5f7EWRXJ8xCN9VFQT9BsGncBQ8Sk6ayY41S22RykeQR499u2L1tEbJhFbbvnx7Bmoo6exDUzymM",
  "key40": "522exegzY7t3PdJf644UyygXnjrpjdmfRU5CCrDGZhGGKsqBy9ZGfhXVvJWR71AnUA4KdLgAdG6a7PPJG9uAjoRE",
  "key41": "2PrwyHrQCfmHdPHj8LcWc9GkzUWcVRupJwthYe5Cfmjf6NjcpjPfMZKsUZPpBK9a5KAsWwkY1Fb24q5TnbuZnKNa",
  "key42": "57gxbdAcUMCHmFbzPt9SZTt4XLX2HVMW5CDWTmwDeC2XDhnFWxNfQAQeMqyZgTT3Dn8geXCAgHQmTdvinhfEKyvZ",
  "key43": "2eDJtQkKxQaPWHZx7juwmiDNx4kpatRo5dmkEy1cXJusvCrBqjwAF9QoGgkaVn3ZScVBQAADCb2m7qFsboeLp7Hm",
  "key44": "4B1zuZrGSTGwZwSSJsnWZUBrfnkE3eZKw9PRD38Jobf3wG6wM3hed59FdRWZ3D93Qa8zuHGKZAcjqDBrKqgPLbkB",
  "key45": "54CRw3yUPZr2BysC5RXZkjJWJyWgemLPQDmnmRSoVRdcvPeqVEsDYqJv8APpGFD4NhPWa9UEc6n95LnzSG5hVVKj",
  "key46": "aC3GwKTzghynFNAV89CpV336pd82wZMVgdhWzj7jmGXzEcRu2NYjBCSFT9g4nZg29RAvxPCCxSRi1BRYbtHCxXH",
  "key47": "4H4oLEo6EEwfyxuHterQtwS2behG8MgrwS6nKxS8ZRHzrNJZyt7Lwyjhfjp2sMk9fCUx6FbSezMaXaJAqMKBVQ1C",
  "key48": "Ce6wKCR33Rh3d1bixsxwLkEvzDQe7KdEjCbT9GaWCoJH6CgVDtm9xCoqUXwJiD9TMVHnvyVEgHr9LWeXEJMDjEc",
  "key49": "5x7vx6uPRTWDbNdpdcmeKvrEcMZ3LqFpd2cHyDJS5hAHmvAn16jDbKwX7AoB8dhJAPZ29fjravnZpiWfmmsMFBKL"
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
