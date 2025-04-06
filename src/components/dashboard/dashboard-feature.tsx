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
    "5ixynwr7m2eUjZ3y36SXFLRXdZNQEWUsjXdN2kKPC1VGn7y5gjsyyyVL4ZHZ2nJEJ5y3nm6ZPuC6hYWgKT8NCtDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S81iX2aTEgT9QWNSi8actEdbuv2ihNeGsv3JmgCPHsqcBoBUh3nnt8p7wtdsZFtxZPtfRKTnpfUM243SwgdTU2j",
  "key1": "2KTj34J8iwnrzREaepNdq8PHnMz9WZAL59Rc2JRTAuZNHyoKxmLz6L7cYycpmGBsceHTfVVfUnuJRxwuEXjGrUHk",
  "key2": "62Y72jHcUJeW8yDmphEP4qdyCBFyAT42UQdZ4nSyRYutDarwQ3btphzr6fp3BDQqMCqMsJVeANZhg4gYENPL6cVz",
  "key3": "4zV91Pk2GCHQYWG7u8T8wQVSC39JzXynpgq86htPV6i8pE8yXs7e83KcpfU6NavubKcePHQwxczdgK9Z95FfmYMS",
  "key4": "34aaWcJ9Ph6279iK1m6CXGcZVYPNwtzVt45e8KVuYghivvSPuyPNPtCfFhHFBZcGdtzUaPDhnizw7tqBnq6pBAUU",
  "key5": "2Zr2ZMArAPYLkRY8mhiWtN7LzNKkjHXRpsMHQK8LiTDerDuQsbbhSFeFiFfszhJDg4QzXb7o8ovZJWr7vQoL1Dw4",
  "key6": "2HAQm9dapa4iDFDxjNMV653hdf6zfvXWfrd3izLg73vNctvyu4WBfAbsjTXnm6VTf1z2kYrtDz3EC5CNfvuyjbBP",
  "key7": "46sLLfmct2TfUfvi3LpG1jqSu6XFBuGVGJaByF3rR6BcgbQtDcnEWfmiCNHwBAvY8czKPXCrbA2uFDxRWZaKL5Bp",
  "key8": "3h7cHbTSqp4rYYGL8eVwUup8hpWfqyXMmtriWLFeUvByqwkT9pzzX3RdMipy2iK8nEXwuqGyYK5w3S9yNDWgCNwk",
  "key9": "4DBwmuj8zQzG879qXTfSQ66w1PkfPSnBBjgcWFJ763dpZjMxbSRtk1xKASKgLWbJDHf5AbM4FprPyVBUBxGUeKg5",
  "key10": "ttZ7CGG52ugChQ68dmPBXTwLUBjYJujL7ETJLjnn1rDeHgVKTt1435ZddRBnYF7UvLwoQsPqhrwBa3aB6f4JTSv",
  "key11": "2jPMXCpzcfiXeBv9BpA5CkLHmdcUUCoJFGGqRPstuEpcBdBp4Di3GVnNxUTBbDnS8jNWVEMACZQm45yKW3VNzoBQ",
  "key12": "3h8JCs3DEQTDjux8Rafsgc4aqPBNwHXccWKdboE596uLnESgmDG7qjPr7LBC3K7gWSoQvupoPzABn4kXL22G9hJS",
  "key13": "2z2tiVk9699mVzgpAPLzzxKN6wrG7cZv7sTTXTY4fNx4v67pZsRBCHNrgcs6tZzL6qEgsLjFnirGvtPBST8wUrGL",
  "key14": "2UNW6GXdX96vzhhDsJqsymwf72baHTwpEduJFd8Lc2sxpcRuwYnov1W1C2iSP9VxAyMyCmzMgerojUzc9mQvgqoU",
  "key15": "4XriGMsDHfbwjD4roJoZNSSph9ahPuGnYsZ5G2qGJ2TPpcwtTdz7yT1pATuSJpjbtd1fjWLqBntJHExToCiJZGXB",
  "key16": "8dMHt1hN8tWgbx7br8QfRcrMeuqEMTrazW533b7w7245xAZdaF7nr3zJQxFX7uSkbk9NrmY8fSKm26YrgthVhti",
  "key17": "48ezD6r52iCqGX6BnG38Ldutqsye1q7CT3Q5qRimLGu5YsFTrt2awrnFscDJwu4Adn7t2NJkc9V7yHnqrRQJXB8G",
  "key18": "3mhWo73LPkUCnSz746XeLRURse4PNnHHon3mvYrfVisS9aLGKWYtbv9UNpRnbEESsDbSYFuY6GEhPrAZAtK2Ygir",
  "key19": "5RgCFSX1LdPA8t4cFHUKrsowDyQWwLJnBaN3RAg1kA8bEzu929czxid9ME3MmdjKESg36v6dfcGRGsMENwDBGABq",
  "key20": "2XB6pKRLEyzVoUqCF7MphM8dSk6wrh2p78j7eQQGJqb5KvxNvQRvd7SGGkEZoKHVZv7QWoHaWdRuCipMCdXFuitp",
  "key21": "fXEAz6Gi7CNji1db1ZapJk15xJoNX2Pgm4XjcbKCxdhC8iDc3kKRRNSvK7kPiLr2xjbGyvdBe2W62JsHyYkwePY",
  "key22": "2Qk9g1whfycB6YvCbgD34B61rTHuExq1esaNTyTMkBMrCdSgcCNAT1PGP9edRBYQb9EnmgQW6sBWppPktU5HHzxW",
  "key23": "4r9N26gZr4zLfo7CMC9ozNA32LopAqVQz9a84Fb8L85xKgrs4n9wnc31A4RWdnyUmkbtUhZa1yzwWA6uuhYocQ8g",
  "key24": "HMEoaDf2LXiRUtYF4Rj2VVFjJMP5ovbcutnCwNywa2STptNCLyQNxNDbfM89RvZgQX7pq9VrreaQ1YJtyiSkW1m",
  "key25": "2zDA1CWBrU6vaMGCFwaTU9UoDE6wk9NuZB7oi5uEbQdqKUoebEZr2eu9b1YTuhBcjE71dHeUkrXoR8R6RrKpBVDt",
  "key26": "y76nEjUH3uW8GEoBUmKci18uegyKT9DXXTi71i2CT3zdZGJuSvgnHBpKKfiMXieFPAFVWx841xYxcxCCpAsoFZT",
  "key27": "5wiunzhMx7uBANQvejaqrDefUvBFfEwEGiubpuKfpzKWZNzJV6jrezu3QtG4KrQJGa23DKRHHPr8iLwLFpZvwaDz",
  "key28": "3iQndHs19jJ3pbLRy3tbmaEYiTHUm3kVbAHm9KFjZ7nEgrER8XKowMcC3sYbKD6Px87x2c7LoK62sTwfQ9Y2X21L",
  "key29": "VaLofFWSdx4b624RBCfG3QP8GCLERRwPrfgR8LU52MMxDU9wcDruz1hdLoSW4o6wjfcZ2eNyJVPw2DYvHhcyeMt",
  "key30": "54uk2kdJgPj8Z2F5fvpm6LNMVP9y2NHqK8e7sEGGtE9nd7Fj87kgH5hZ1FJ8VnGEpDo3e24gabzNVtEkvibqXNhQ",
  "key31": "5rHmqQ39PFxwz5peCRnrRj2GS2Gp3AjMjY6GMZTY22N7ZgMXz3ksZX83iSNNUd1FU9HfmumMFzMMR8JndoHTop5v",
  "key32": "61khhsMquUJq8U6ppT45dQCf4WGpbTY8Dpyaihq8uEDkpyoSvdv1QC9dMeLqWqkaEc1tFfoGx6yPccSdgEsoXYb3",
  "key33": "35XiaR1DgzUmgCQn4wRN1QcmQff9rVLdcsh5C5fy8Ho52zkKwcq6mJu3dT1VReKGeS52fKB7pRCYwEwm2gThYhXY",
  "key34": "45zJ69APcPcwQZpE53QXLf1z4t3ZzvuRMYQyykzbf9QdUotCvpArh8Xqw6L8ZYq2E7XcJMunwVHDkZNgMqqszhCm",
  "key35": "L2aqwo5hd6jqHwZAWLGqNPd796au1CXGXZ8kETGhy2Pa2AEUgwyAqEMCaGHfFRqWxDyEKDbwn9ouXVojHJ7D7tX",
  "key36": "3w9nfUHMWLFETq1SzzwVtFEhp5bDvsvTwVCT4XWHs98PDscJgC3yksABt5AtiE124JVWyEE4JqjviMjpd2oFgHhy",
  "key37": "3rygsqj9kJUhrHVJBTS55pn5g9d8akH4E3j2Zgc7fJJDBH7DC8QYWXvcPZF5uJsAqxq9QAR1WDBwCucixS24ud7b",
  "key38": "4gh75cPFNBp8mG8m4CYqN6T6vy8x4H36PVtRM3YUuEPu2ZiEnWEYaPgA1U8xCEEus9f2Kq5bmWFr7wBLe1VcuAtA",
  "key39": "4mEJFeZBEERdfN9HCK64neFqFLtKhTLFYm1LCqbC7oQE3RdPYxd4kZujHuXoM583XneZE9pRNjdjRbVDVE9iGgoX",
  "key40": "3Xm5kRic8skHdtCbhPKqtr4fwH5Xcfyyd1XYFZJw9DQfGoww9LSPQg6VVZs6vCs76HMDnH9zNSCm9H518CSj7yya",
  "key41": "2q34rM9hKGM6FWM3ceyUtFEwWPvn8DCRHwLgnCiCKTygYsTjgV2eqzYzeVxU64cs7HuEZEpjaYotnUNyTqUqN6wf",
  "key42": "5GynfsZhLjYFfWEb6MhrY1BQ95DrMSu51kkxeQw36iVMy8UJ6JdQJc5jjeMEFnHg54fro8gwdiLaxzDcBMwufsYT",
  "key43": "4XJLRGFBveyCiaRhAFRd2Emr6v4UwrGH1Lu9oN6J9rxuq7WvgU1UVtPsPKWALSZE23RAu8TLboXkvUP7fVCfL7EE",
  "key44": "3tHjhmdMrb1inYwzyGVXgKs54tX4D3YKtH7m82opBNm9toLdFPt743vkFHsZWDYJ36PqGYweB3a8kfDJVwgxTbqz",
  "key45": "22ZfbuhRCR4hSyDHEGSBo8go2cixdCnGnRyaFWqFmyrYqkDvQsM9JKDkqibnxw32i7YPS67SJdFxFd8bKhj6goeV",
  "key46": "yBQM1KNuzMqJHCFAwTo8G8pnPnZ87xRmFSR9FTUcURCLg4yBdN4nv3wg9myEjfXTwQidcacfMBAoyAaTHmLowfP"
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
