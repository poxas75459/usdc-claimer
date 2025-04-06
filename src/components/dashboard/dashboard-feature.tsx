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
    "561cNZFKgoagn9dRXAhN9VDBAjEQXjdo8gGfoonsvTQyRbTG7JaWNnogZjPD1FqA8mqsrWNKG58TRktPwH8SQFP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mka9U7xpBdvBcdFYm5cwuaYW1XH3q24o5q3pvz1ZoTkaCrEajixPBek1m3boy4RZQCricX3DAFiDuj7qVvCqHiJ",
  "key1": "4qq1M24hwt62NeCZahHL7bu6pSBDPsWp2p48fdN2nTNjHkSAb5VeXmtzWX7fhzCiSZyfjrUR7LD677aJF6YqdpNV",
  "key2": "YzVT7awjvZeR6ECRgZPfA6C2wVxNSV8ZFDQ56Ax6jsj6XAre2zCuDadkwkfuV4q1xwayJ2G15NkCFNDQtWM4bfm",
  "key3": "64TCsigMK78w1t8k6xCYusekrTHQwEjVkbqi9phqBVj3bL16jN64DwF7RaFzhfGYrj7q68NUMdE5nDec1bbxyMXt",
  "key4": "3ixuNC79ZGxL2cYmwj9tmq4f7iaotfhMTa8W6DXLsC9uXAJzcJHBngsQ1xkH39QK27W3y9Dwusz8jg19KyhD9RdG",
  "key5": "4apuHopVb3TK7tZPLsHJYGWCfiEpPANpLv8VSuvKYNJf4CgvNo7F7CJHW2sgfQ5w33n4eZDLxdS6LaJ32gPJFZeP",
  "key6": "5nAnpj5qb9fZgXdcV8jCfXqzYZEBv3FJtNMppyWUGN59hfCs1asTUtxx49uksomveURXKR7tQnQiKFVECJeZyQ6f",
  "key7": "2Bi74FYyuT8AFSWcMbirnmyudi8tM1euRKo2wP7dWcLVbP25UFVUHX6PFZokekhsg8Rm5GhXGkuiJFKM7FUU6SGz",
  "key8": "4Kk3BrQQxx7fPE5m3xfh9pWY2MNwt9enS3ZpxC6wuCG6i8j42Zn1j9XwPRb2S6GzRrY7Y44Z3Kfpqne51fDYCoAU",
  "key9": "2sopsVe4Mj4bmPC55eekdxJ8UzvgEGNJqnd85UXmn2jyyzXQER8qVs2vpZWAjUuqcXJGiYGMEY8wQR4Z9hRWvP2H",
  "key10": "5LwyZ7x5nnyM7tFwvTjN8HitoETCQANL83bNQht9orWwbkJvX72cXMdKdSqA7rZdkZgErJpo9AD3NNesphVRyMWL",
  "key11": "2vH2QqG2F1U8pAw99fV5vWWcYQSiNTHL97q87pJBwDWc1d9cHjobH3RFvagaGqHSvW3CKAqji65xZj5Gvy5e4HoB",
  "key12": "3bAyZfyDq5BaSZssgMk79h3Rp2c5xJKbVSGgnGvWh4wirrA5u75TJk3PcN3CTZNk7pdNw62iPPRC1HchrNNPtnCq",
  "key13": "2Kaqk9DmUQb4eg3g63cWje1HUopUD9D5xfraUf9xdnpyk2to5sKwQMTvzWS8yvK6UqJfefbMoT28sDhkFyYYL4yS",
  "key14": "5pVhRiqEGR3n4q4S7ezx9n6oNsmKfzoG3RT97MRb1Fethx4Hffik41rn9ZdfqWLxWYWurw4r4n5JPHXUJYMJxZf8",
  "key15": "3q2ChVi21dqjgdZkEqtS8Y2uiBMF5Pzdxqcj9zL6yTSN46vxigVU8g7GTBrDE8mL2juDptCHKtrmpnSFVUuiWHRz",
  "key16": "3ZQtcxxJtDiBrhRaW7Dq5WbRs51axoj6HN3cxLkL2sB7PYScRyhb1PqEya6e5NZCHBkZMRcJhxHpnGoTke3cAH6s",
  "key17": "2Ff5WVpAzRVWDTrQRJUBZwgx8oPsAE3yTnSmhhcpK1DeuTr1mwhD2XPF7dx1YbrHfZ15kj7iRzbf1tCQi3ygSEB7",
  "key18": "5w1NdrWiGEX6z9r9aVYCBqvfhHUr2w5hSMmybRfyxFPY52aLFqqb8wQUoAbFdqmZT4gNSDdQtfifBFCpzPivqEPv",
  "key19": "5EaYz8H94UgsYiWndo6Jz8qVsQ4gLYBq82eCk6nu4FLzjBQj4eDJaxXEsYU6k9gXyCq8N7yH9b2cNiEPAbsnpLZC",
  "key20": "2US5V2qKjMf6BoHecdH2QsmaSaySDyzKAhXXCHujzK9UipeTyJf3DVwF9uAjAMht6QCfEKRFcpmJ9TuGhDfVQ3w",
  "key21": "H2a2XS78S15KYcDX3U3838QmeYPU6QMpdHRgyBFZmtFjBdMcU8DM3jVhHQxpFLyW82LW2gPWpC5s7NfpHydqTuW",
  "key22": "59RbtdQ2Jq8dDMgVix8vNCE7bVe31jJN1VqSFWA9HVB83VpduA9WQj5kJmfi2nGUHohBirYtuMhVnx6cFdAZFE2K",
  "key23": "51UfgEDaxyHghoHaPt5Da2XdHmEBPP6n7yXhLv5Sn8aticaUpzzQNeHX2GWfZHg7M1KraARa9Bz1ipDxSXgX1Rrk",
  "key24": "3sepSHgaUz9PsfmJtTBws7rkQPV3m9B6d5LGgq8ueyWE3uZ6dKesqYtqPiHg8VCfbb44Nfrui3UufdXJMsZ7PbcF",
  "key25": "4vJXmcqtkfXGDG9BBzgHzQC4kCeEBznfHWUZcY4ezRNquK8vVY6JDvAtR6Qb658oQT8R5YDbhgGjQLFcRQaBvBdM",
  "key26": "3r2B71kxxs2Lns41xajoEPfYxf9UMSjis6YBwr6pAa9ux5d2jSMviPEJk9qvrk7TozxhCXVhZUm4gzHiuE8u13cr",
  "key27": "5kdFNAux4ddZrYR5mFpGjuDNWtVsuS3i7LFVyU4hdpjRNBTaovEEBydPbhvYsivLdhqPmvYoGLpZyMZhzxJZzE9Z",
  "key28": "53R3baeCVAKp7vaqRnVf6w52qWkFFF11CxM7zmCZdV3icL3katG7VW2zesfjHxNsK9T9dBKFwFcUooR5JVUmBKAn",
  "key29": "mtRhbxA3AkEaiom9Dq5tpBsKogcuAo9avPG2Cp7F3avbaJFfQfEKRZENbeE8KBGd5BpviMfYetogpXMotVgwriL",
  "key30": "5LB2HuudfY8zHV1Dzo1NeRYJKqgddu7VWPzRXrwkEak2PsqfwKFHQ5Cy9G5GJRub9184VoDGuXTL8da5xCnwnC11",
  "key31": "4VVfXqcvTSZNtoNpfKKDKsM6FNTTSdC3SBBEZp6PhA7snwGWcH19Py9LYLvHR15ZnMsrHAN6Xb9M8bxikLmfd9no",
  "key32": "5D9FChqFgGMFgEyP28HJeA2eyZQBcGgyYsop1xJkguHwH6ogPQY3tvRpvxgLHxMm6fLyvHX9pCRmiVmc6MhU15CP",
  "key33": "ZeGnqGp5A3nbGAPpgNhRE2oESe4EyA49pXreXiseH63YwDJwfC5aPcFN9rMku7xLt7db1owKLmsxbV5A55rweLH",
  "key34": "4rwPmFv33zq4LzDNyPjxTyLEBbjoKU8bb26waDG6TWXrJR1qBAxGcKtkoMwJkk9qbWchw81dgbvEufh6EzCrEBsZ",
  "key35": "4cp2WxVeJCwt75puZgbDXSY9W6uFCHqm88qmhi1PyVvmDbvmCX84Ms7rnbv5srhdxrbzm1nr44AxoumQuQ9potwD",
  "key36": "jzMGx6o3QUHTaeBFGivqQGYovPob7m2V5NLpuFwBLqmURVUgtJVmrAEgmrbWWj8sfZ7a44jcRXPuYvWdyxDjXz3",
  "key37": "4BX6LVMqJyo8jmiv3DmvWdLttnzckMAzwBayV8E2umwzNtL4cc2F8NpZfYQhY1TzsmQxJiKFLFjCiL6ZEFKEhpqx",
  "key38": "RoivN6jrzEjRZGotGPeiqkj1DeDCV66msZurUtpFHrJ94rLVEPfwvAg3G7KoTctN56rpQ5a6HvkrJYAD3Vpz4MA",
  "key39": "5CiiWEK94imkxbYQuiZHYHsPCF4r1viR3oiRRiRDLQknymQDi8swFRgoWg4v6zXW5Rt3Z9E7SSAbN416xMAy1yKy",
  "key40": "3WhJjHfv3k8ya3PdQbyHKPZuonnwW76bPqCPwAR88M7G6sv28KAFv9idBb5HVd2KxtjrrnkjbLTybpCwrVW2kAqZ",
  "key41": "yLm98VusunbaoErCK3HTESkKXaufn7muUoyp73wgJzTbVpy4xf9WPeW5uJxVgqUycVjSJXyPgFfJaQLQxkfQkt8",
  "key42": "5yeo3NNq7gq4EJveD3NNJbXRDGbh2zVErfFoCcUE1AHcBySuw5SBwvBdDEcnHnXfCWp9fhAHmcXtXYxLyBux1HEn",
  "key43": "4RnMuQXoiVhN4zx7K6Wmf4Sf1cYFcUZQ2Z76dZupNYi4NZX9xsCHZ9gd6huYKa3qWa6Uwr5bQENvUqnBFJ29bk1i",
  "key44": "41GrCgnELorgLnF5K3ukEdGnpr4fRMdRWD8pMgFfz9hgSaLDZLoCuMnJKaT7EjiMc9xkcPqqqAUCnV3bsiVpvv8m",
  "key45": "55utpKDDECYnqWe5v4T2QjNPaY88NYZRdN3U1ETD8awQY8bp1S95vHAeyfHW9sWqXsXGYjCNiWpcgknDQvkPT2Cy",
  "key46": "g4zo9wkN5i32prwBXU7TC3baEt47iHt8mevjKBtqYVEriN3jXwDMap22XYaYy2H1XAY7ZQVruVjRsmEpPCMyutv"
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
