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
    "5VXJrPU4HJjC3WtV2q5w46U86WsmhngnReJ7fsgnTEDZDgQ6nzmSzETSpjZ1U2RbsFZ9jd9ZFPcQtfUDnQkFQsvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41J87yradSpLHZ1Ff7goKfhoEKnjhf63UovDxdafrro8dzXNHWW2PijM86eGixE4RqnPZ8JA2nFAnHbDaA9YoDTG",
  "key1": "3uic6aRbATgmKYCGswtaYpLXLgq8YEw4CYHbESZDGe9aDHwybMeuGrP2kMaYf1zEpd9RQdQSuoEACyPZf7YzoEJy",
  "key2": "BLUiSEbk5DvGkW8TcXmbXPTc9KGWpoqocyJNNBonx8peiVkqZUV4H1aWNqj221tCEkmQ75LFonbNGjmneQKeW9X",
  "key3": "472QrsdgeCsk2p6KVzCZqet2BRkoaeczETDwKmLHbcbh65QCR4pjzTAVk1iB4Tr72tpuyv5iruBq7zTTUnPdWqHK",
  "key4": "5vHtD8PNUWBnsMBKpHktxopouLSk1LkRtZ9NeQSMpZzYoo6bnVPXq8jJFwF8cYAvuLChtnQwotJjGEXYioiEDBQ3",
  "key5": "j85FLRkq4sqWXjQUsbtHrXawYe6xVB7DtzfkmhiVM1N87KTMyQz9zNxt3gSD6J5onPo8Qr91qeZNsbVfyikzVNz",
  "key6": "3Ak1oBe4B4ntFxVAXVH9kWBq4NBjhwqBXLFDsymbwwcAvvbabWTg5JhhAkeRSPY7e59v2AX36M7r3TYCP9kdLXcZ",
  "key7": "517pQeJMVXCMcD41gSPfUttomuef6gP2rUW4qrgeMGokBwVkgYcf6mZGR2nK6VmjMyJnfVEpxyZzaEaBemUt3Bx2",
  "key8": "5KdvjihLZ65JhLGmy3p3GsfqnzMc64kFQXgf4c34nGRiqPH5X5b6BhSD5WgNqXv7gLuQXEbA1BCKAkZ5a54capHr",
  "key9": "25gwTEKkymCfBzKeZUWXcNKgWvWaVBZsc42m5jWheEFgF3eKjeNK2LUSegHsE5MPsiSifuPeDvfgKH3zRhbxx4x9",
  "key10": "4A3pB4HVvF1me96Ks2ZSgQvmXpXw493LYhBLmu7dywrbzJFoGK168L46z3eZRrLYpPFp67Cp1cmRKYQ9UwmZGPRz",
  "key11": "38J6men7fNmpWcmNwr8x9xNNtchQ8JCBomviYggouYBnyhjaHpAjEqWMTMyoCNTnAjZZQeD71iUuzJYsaeXymzXo",
  "key12": "2spPfVp2GyXXqoTrKSHar8rbCZDyn3dHDi4DQp9f7zvn4WBuPsfFVSWvC9hZhNfwbTypgnzVmkfSk1eoZ9fRXSMW",
  "key13": "3nAigg3FhdUCfgkuqWKXcSZgfJcDScs1nnFG9eorY7RJU4zEsfGJZLqHEoJHFi2vSWV6BTzYdMjrZpopqZL72wD6",
  "key14": "348Dzh7ViGfrgdJnhZxuQj3Yf81k3uJ3W7SVzmXUqfyigqHDYziQiiLndeUT1vLd3EiQj6B6PFYEeZdJqMZ59XDb",
  "key15": "5eQtjXREFJabyA2Z2fohHwZnrb3FZ6eAQXpRkbbrsE7Hdo8uWSsqpoE6yLsHbEBB3ppzfA3gwTTsiruJQQcZGgf5",
  "key16": "YrLqfwqGZBNkF9W9z4LNRKhyxuXJLGWacmRGd7FzuFxzhtcVuRzeYt5RDg41FZp9bbchNSbszbt6oA9SHBXQajy",
  "key17": "2dPTmvS8RuQb6SNVvE1JWCobZwD5NAZHWZAtXPcjF21NVtniNMETfP93mmhvQbKdz5xxtBURq95Mqnng5SYPVgvL",
  "key18": "4TnMGYi7MgtxMzChUVjsYVEDojvx9DFxJvfpGBTsyvw1uVgbTmynQYvRHUnj6sMC8oC7TVEkjzEqzkRVa8RmzNqK",
  "key19": "3MxC2iSPbcW8m9NxpxXWGtqoKbSUMfUXELAzvFAYyhHivPhMYyMsVNmRtZyzABEsMXRNPzATCj1iH5en82bPoVHX",
  "key20": "51h4GPD37Na5iCsTzMXA86jY1hpbppJeKBmegFQDa8QGBF779SfUWZwdSN1Ac9Ktodgb3NejsE8XAepQ5nypU6qC",
  "key21": "2hNKa8wnEWoE4akTaMG2WnogkRyLgtDpT7LYFJfNXNNouy8U6eLj26eXRVBD4vtMMWkJPHSAC6M44iHFYJrQSHFw",
  "key22": "SnAt9FdPjnB5vG2wWYbZdS91kbHDNe3fmBkPqXtzQ6AXbfJnKw7RSu3f8kbTPDeMkHb4VNhLDHfC2e6fSUmit7T",
  "key23": "3Cca5APzutmkBBX7jXGQEXCLzKQ2qFCamSUPT9x9s4Xrxg8Y6sf8BzWMn54psw2hBiMRPQWL31ihw26icPK9ZCFr",
  "key24": "26nuBi9WQi6G74YiWNCQaYj6nkdN74kpgtxbFEJeS1b82fEEhcaYoCkNz8DrbBbDP9ANXdBB6xjVa27uWL331osM",
  "key25": "VG6JAjWG5qoFs5fnCfR2EXh7HejQbLQJ9KKyLNBdwJfPEmmPRjJoDBH88hodseJ8hP7Jd8x86hvqTTuXVuC96R3",
  "key26": "3bg1DyykETtKRLiKgP2uCEg6RbuoG4AUaaPGVzdyTxg3QuS2163uyD6pXQRdHuyseiB9WZBe15BwjAB2Ww6skuUn",
  "key27": "2xZcpCuz6Qn5mxe8PnQREdz2vS9cR6Sdvdh1VdsPwApVsm3xa7NJF2bxYvV4c91ZpGCgEqmSA4aAkU8WrmPmeLd5",
  "key28": "633NFshz5zTDUa9rWYxNkfLMWVCW5JSBo1NyG8aZ56pZeiSBfEF4Ykx1xHMJwQvvdfGXrZ5yDm2PTYAYiVj32v3B",
  "key29": "3bz9TirGCHsDATm6HJEmhGfrGPKKmoRyBz7HdjA9sHb9kPYvEPLiTxXynAhNbEvx3ek6t7UrUEmFkYU8g93DyXck",
  "key30": "5megNH21yF99qbeCF4Mz3UNXFSoJzCTNx9fGtungfSmYiLDJfkBbXynxTmAN8vv9p5FjhBVAbJYfJKyZ3E6ieGvB",
  "key31": "2d1sStz2nwgSqk9CX6Pjphy8j79zwbyZGcr8aLNqUCtP2L94BnhH5gMKUYq53TXqaKjieqNeRwKCxfzZMvBNKwjn",
  "key32": "eUvHEngXictmuHzZxCRqdAG439JReg6vQS5aD5muChUG3DEc6xTA21LyV7Pfum59PjGsnLRsGyyUZL9wMGmpPZu",
  "key33": "4HFCPE1jJoXGUSi1J78K31dzyhVaRikreRq4rD6n1YFyvmMz4BhDWCbAeZA9Zkg2z45LxvY1e5XZekNTwSHYrV62",
  "key34": "4EUN915MuoTfw8aXnfqtWzNjZh6Vhr23iFjtfBd5M3F23pkk57AmrYHNm6b4uwyYSy61YLNgvnRaWwRwo9CZCgNQ",
  "key35": "5bL7JCbfwd1Z1tcyhiQX2HCuDp1FNNZkWnrKa1V5tpoYdgx7a55LEQMj2hmr8qpUC1aQZSpFbKv5zdNuDFUoWiqC",
  "key36": "RqUwqUCZYHN3ih9Mg2mzZtogfMY4uE5pjTeAvDGEoh831L7UXzhbJD7qbBXPabLdndhQ7LyGUc7zjL1ASNb5Yeg",
  "key37": "2F2rwpk31AFDCxS1CVbrDkhQGP9HW7gJRXDb9gh2qyjZzpfeUcKHNPbDCjVo7ovbWU9uG7dK7MaACEBcs1rYzKz6",
  "key38": "4BKpTkaaAfuRP1JsAvbzJYe5bDBfTHAkhgyQ6CC8p8XdyfFDv4KmphXDkhttX8Lan9ueXFkoaxzu5vHGjRaN4HH3",
  "key39": "pbACwRKpKLGpfQ2YG8zUFSBpP2Rm8FXc3CHfDup32Vt2VuZTfZoVNZzEtMdE9RUdgGvzSQtRp6i8yowX4oYcnKZ",
  "key40": "2xDcxGp48PY6AfX5CKSngUEQfKWzmbckwAh1rEJxCXWjEtTvpFcT7jB4wcwinmMcJVs33jEdaJkRcnr8FykRDZYC",
  "key41": "5j7vYzq5SYEaRcWfDpRCi9xFiQM5k3y797Rx96u9x7vQmN5gq3aJS6ZQw2Mz8aR2FtmKLdDPd9XGCBbt1sEVZ9Ev",
  "key42": "5Mx3N1vAomQvtRHrLczpR8rBUBREWEzFimcbUTmitFdGB9vgxTgkkFk8tvuo3GUdra9vkRBN9aFikUKGH9btTkDD",
  "key43": "2US8jdscfXPPPFU48CPA6Ajxkgh3nHgb5MWRqD1TUkHtdYoFgdZqnQByNvQna5JXi4TYDQfwDKQB2FsFH6ojiarA",
  "key44": "5rqcTVEkqXgWuztdo3KW95vQbd9qrGNcmB3oMnRUPuFNBjB9CdaexKjwAuBf5F3bm99JkysCjYqnwQjQnd2sPMjp"
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
