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
    "21UBexuMeMSNetyqXvRwD8sUCdWYVCZf17CFPAQoDCtoPM12mK7iiKSr2ytfEhTwAtVkYoV6Dtk8uWMHFXychu8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yk8SvmKkLk16wVj4wSW1HwsGE4ysD4YmWVehsPUTPfz2uV6tMwpsbp1NidzWYaskHKGGTizuK7B3D6WG4aHJqE5",
  "key1": "2ez1CxqUvao8hfKLkQTTzsM81CPGUMuvnNzfTPpiYBAVibUTcmftCJzufmek839iA1Q2wrR1gTxbbyAGo7PzkZqc",
  "key2": "56yGq92HdVkpia1rBHWCV7SgNyQmgDXVaDrbmSg9Cj688VWchiP8gtsKQGoYZgqhrmSAzzUjx7XWmXQgANfnmdGM",
  "key3": "5esxTurdkZBqMmmwNrf2yZMyXQskGx57XuHR2Nh2Z9wg3VhTDWoCtWUXxSaCpKVPyjqQVbGC9uVE7CJDaajfjMq9",
  "key4": "GWVNqnMy39wSVQLEUnszySJifzYmZbzomzfuu5HF5CsWYiypGk3CRdkZ5ANDCL2dthL8pW661k27SUCtxh7Yh6K",
  "key5": "3g72dR6QmES4SoLQignNNCttsqFr5VVn42m3RbLVdhvsBvkpf8Tjp3cBTC8RCB68KywSMdrizxUnWy4Nyd47vutx",
  "key6": "2mdbdgMK3zLZPsnnLiBa5t8KNkVKnqDj3EsjkMYMfGufhoLsT18CBeq7YsipJeHmAzCCdZfYDpmHxYffGyMUZSBL",
  "key7": "eP4ZVxYcANBkhhymru6kqgoSAKLM6BnWEktWy2GcjrADEmhmtwjh1iJC3DXHaQBNdy3JgKTFp3WAVDyV65NjYDM",
  "key8": "3tPbRNcRAnTUN3MGw4WRnV3nrd4VuJxGcvR8CFK4c2Mhu3xSYUfycpaPnz6STLYWcxpfAJXPt4fRcujpyzrvJcsE",
  "key9": "ey5Xba8h3oBmnwdg1YKXwzC4qGtoNwq9cmJeGXBZ9DTwq9Vd7qqpYWCstrcfL13ztURVptbCxFDyFXzAVLqVSRD",
  "key10": "t5U8TYYh3Wzme2dmaBq5e9UQPGfKwQALCpPCfhFrWjRN5MuVEphYj8aUoSRNcDZM7NpQYwFMX6JY5eNfvZBruT4",
  "key11": "54aaggj9qAUut59c2efXWmwZi5cxE8LUNghWPRLKyXLvjxmUwRPvZhHcgQU2TezhebsYxkiZ3YBnTTdwaMppSjiM",
  "key12": "QWsZ3tGcV2yop79CgS61omUQVUc4Wi8WspDFSutonFudVuHGHJj6kXRgR9EMuFtA6PQapSvDwMCwZwayUuvkYwE",
  "key13": "YWySMEvHr3TUVJot6C3cS55bVcTMS9yxbAxCodtWc6yaBuPC4Wu9AqpL83ApogN9dTHbiRnqWjTFbqE5wyuZ6pa",
  "key14": "3ukyZjCtYKoN9ptAeMwee4LDnpBPVBUZfXLbidVynNRE5R2kNCAtyJMtUJEKnkZi6AK6PapZHXFijwpL9hNAu2Wk",
  "key15": "PJ6AabyAehpPCpxSw7DrvrSvQyy2uscSBrV2utEzwNrWh8xyfMExNeKFMnNNWaHhz9adKgCZr7kvhPXATkC7j6k",
  "key16": "3YZnf2F19S1oxiz4fpqkJ2hVd5GpMvwtM3WtXUWxT2ZvJJnFnd7ddWAvyn26jJFmQEwSYwQbrYmmkcJHir9iRh6S",
  "key17": "UPYEum8MshFjdHfBcc4bawJufBYMAJN76B8FUaYquLk9F1yPKxvdihdu74AhLRsR2p4XBfxfvqNoneKTKARWCzb",
  "key18": "cpZyn2JDSjAtRvtaDVCiVinns4mFCpU1L7Wxw957cFcUVFFLkEks1KMArEY4wMuyWRPZ8UEGH3ZmioM4xJx9H2Z",
  "key19": "ZmShDtzBxWxij58uJ3RocUMygHJWd6UDkSu6m23aiHMgcRRjSnyh1Tvc5GZKZdmNsucNjoL887NhWpXfC93fT7Y",
  "key20": "5U5DKgu9e8GhFR4zx4yaVE5fhXxK5t2KJm7TC9DWCcBY3iTUy5HRnNVtXEQhNqCitJ4k3kjLbn2qZ2YAKu16gHeg",
  "key21": "2UeTiHpxkAksdJpJ5TH9EjJzqT4T32EAQGzCj6jc6iCgHfQfxys9p6DWwPXfCGGL73LUrQsMzY9rSMb9ywW453Mx",
  "key22": "5nNLA5BV16oksFgG4UGw81o7QbQogA91SksFXsQg2ZKXpTF4Fq9wKr9qdnArYKiiMcSmE8iRgc6KLYcwAfdzhbrM",
  "key23": "3zFVkSwCRbfd8j8Awa5Bt6UMUWt63um2ALk6sBQ3YRMsLZGyUDn4Ap1foyTG56hbTSz4oaE8R6EZ1rGp5iuNUiPd",
  "key24": "q2J2nERKHWJsvCbrhSi3RBhckEuwyLopk6RagJ7gJEM5bQLcJHP9xuindLtGChLcDZSiHHXprDaTo2zkE4CBqH3",
  "key25": "3vC3jvWdVfEgEAtmYEFgDiGWMwczucM3zUpmXH5ZekZZJAbPXkaGtssjYdbs7mMkRcQVfKWry2rUudq4YdgBunKt",
  "key26": "5uXS1Bt7HNQRf7RD1YUjMhJx9PFKe2GzSoR382CYfCvjThyRvP6LqN2fwQjhbyEyTDfztSLDEdC3E6qKS2jrwU4C",
  "key27": "2FC6yrvMmKDSHJNjbvybBUF96rDSpfqNxEdsYEASPMrQzqVLZrhnP18XJ3FQaiSPNNGtbV762qUUgqBQLadYPaB",
  "key28": "5hBqK2qkgu4Bt1n8iQDTtwoSyVnj5jui3fLY75kx5kSTRs25agV9gQDx62Ph2WjoUCSpbCUj6m2nKXPWJHAKY3iw",
  "key29": "3GcWdoWvCajBeq9HFRgtXidk3m6xxLor2bLimp8H5M17xutJLgAdggvrViFmrjYAF9nDEN2w4pFPJ5iMSoYPWh7E",
  "key30": "5aHhda4as6uKaxv8EFHNRtTsJ2pxEpS1cFrzdWH72YJHUPEBoGbDdcyZc2LSH7Upk2yWDKhMV6FJnjBZRHE1F6Zx",
  "key31": "3i8virf8DfDSn3HKCithZQsgAyAs6ADByXW1vbYB81yW2qTY9TdhrPZZvrL3h2r9dHYh4ZQfV8pVdX4CQ4hcqc4q",
  "key32": "4dQa6V2X9scpa2PNCC28RQnWrM6D67Hxec5GHRaR824me8znsotHeiKBSX8ET7piKcoMc66ARbF3Wpq6wxDSnYt1",
  "key33": "4HrjBZBpyG9NDWm4NetdwVZimYCrv4aMiJx5vbsobExV1iRm23WWZeNGSVMQCNBcYgCLLKpB1dvqjTbk7AXSKi9j",
  "key34": "45oX8qzziSx8yscbrmichNkaxp6Uyhy4GLqeuN6WWqDkXUUUKYjvXctGghvWKfPtNNcVSYZdBM6EC9pAhwTW7zKU",
  "key35": "FdXKExuhq1qFLQgiyQVMxJvqNNdvZvNuT2MoAV2d1kZWFLz5sCL3pk1X7Nw6b4V88QZKqZsREQAoALgaxH8Hofg",
  "key36": "1vpmiekbz8nSdzahsL4vb7JsvqiVJQ8bZ6jv2PN3QP4oooaHJHKssepSLJJNj3Bgx2pzB7eoHiXKk4CCUGpveBy",
  "key37": "4wMk58qe1tPac1VVbmZbqxCNZHWWvM5dcnDJSt9ixKivz8FFzARRbv8Jck4F8EHKt7vHnmPNwwJcMdkKKdfUhLHg",
  "key38": "3zuHSRvCn6JEhSuGLj8dTnCvLeXpu99XwpLXas5mnjCD8zzGevKXiZbJrceWypZfczaukco3d4AjJ2zvMFC2HPdk",
  "key39": "44NS7kXQqNWifQuJU1Gxjo8CaVpvkqjkSWeaF7XHvSBrwSSKmQwcdZVUfHAT8ArRiUv3Snnh6Nzd7io5NnxLbLVf",
  "key40": "2bi8sktW6C2wZPzuMa2Ky3dHWm3oXqcUwtiwP3zFR9GGKNpmHfZev449gdv8uf21okjVaUFL3WLv1vpGh4NsSWJM",
  "key41": "4asaBPU8J922LCsGEMBWh595Hn9BuknzyApaP7ganucN9TRZamKFALq6Jm23o6JJ9hrNhXNbh8ho77AgwTi56TvS",
  "key42": "48oUh51Zu6Vcmbr35Pp4DfTqyo6hyPes3szQyTPfB1HmP2C51trPqxK5HecWUKEteGbNmxqfWxz9ghcHEJnr7zev",
  "key43": "jEc1z485TDFukYUQAstiVgrydXHhTNtMJcGUNuXdvKriySjivVWqWowZvh1CtUbGRp9L7h9DAENRsn9HZWYS2vD",
  "key44": "4Kujyb6y49qCtsqeXYky6WUcUE1sxsyjLRJaCHJXMTCfPsRd4KbU77SoDx8nRsjTqo2ycQeUTNpEMX3coUdoJonh",
  "key45": "3uDmErsG8zHMjf3NJi1zryRWvMCp1h1b3CXQBFh1R8XgEZbTrWH47iCW55EWJK5AJW7sQpQKJyNYdycubxXJebNA",
  "key46": "5tQnq1XvRNZtpvG42jNmpjQhAZTETRrDTSdfTg7www21LvqfLABMqQFxK1U3FgNbMMFFasW3e4factE3rWTCUC4H"
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
