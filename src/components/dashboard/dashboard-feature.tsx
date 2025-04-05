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
    "hJ7DMgVcvLaGsgeRTcnokFeps4nFGojv8TurTJizEBczuYZuVax13kdcXPsfdiwWj3m4C66AkCSsyencLnaHTNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TbHhmR16pBo5ax3ZzH3NC7kzW3pQvNwQR6pz9oHaeLsiTjJD1sLxmgkXh23i8QDF2EA8PqV3WzYSefpQcXdxmmW",
  "key1": "44GpiPKCAbNbc2kTJJH6VWG13uYJkKsGdwBMDfcSXjtyJsJa4R9A8X2Tc31ADyhQS3V9LCWrrqDxoHvjEtS6pUo6",
  "key2": "5rFRGgYaQGiRetgciQ33vF6J6xBBgYpb2fzodAB34vucGe1TtQLvK7LwsbEKAiKrwtkVEptf1GiXe5wYnRgfcDdg",
  "key3": "Y4hWbYP2GFsVgoNmsN9cw4WBRBsYjw95Bvez1Z9oMLRKo9NVySdjKi47imtwsQYAYu2c13AdW6Hfj5JZVSGArkg",
  "key4": "MyW86cibBwMViBAG4FvyFYDydBbGRARGBTjpGn6ZiAscqw5ZtZeNwZiA6poZ7KLCn8jTNZ7vmryQCVUPV4UDUgj",
  "key5": "538J8HPqKpVLgsfNAoFtFekYWYfdC5FLZRpVPjqTQCsJEBinKr53co3hzXtawXiRGYV1vhXwDPGUYER5STiS38YQ",
  "key6": "2TQR55zpFNvjqhXjhDLH4vSffqpXorJBsfFKa4BxLuqBnzWSDX16HEwNxEdB63VqmG4C2A45756BdrGfrPRdvC8z",
  "key7": "4RELReeWS8pmHFkUm7KwSNWobMxAJWXgaj6qzgBdB1cjHkZZcAsbNf8QVCqcM49oKPuARioianQpbeW4D9Jc9e52",
  "key8": "3rWeb9TEE1PYNNb1EMLPR79ZWxEj3WqpUo9hjysfc25r8NPDDTgnutrUj1Pt74DzmEvV26Zk3hTKcpvv69iH6vyQ",
  "key9": "4QW7gw7rJvUW33FNRG9eut2USJC8iEh6Mdxur9NfzWnJshzmoV6Y1ftNPynqERPeevKgFdcUcNKKijHtGkJT1JrS",
  "key10": "HHAExdWo7mCKR96Pvd5UMBRS6W6ij6CE2MVcWyZoW5AcJaZuEjCXmpFjixNRhjs1bCJwhoYJva3fLdusNcqWSkn",
  "key11": "3GzuQrmhZV7DE6VpWjoMp6BKNLcunXSomELrPKDn5vYW1zVppfavQJ2Dk4KGx7uw29x51AQThuwgxwKsn1PPuHGq",
  "key12": "QqzQNBFKFKGWyBAUofoHpqafoAc2R33CCHsJ5RNAT84ySuhSXsoroNoxGcjX7LyMWBCPzqLofMiFCPQbPmhSXry",
  "key13": "5ismo1S6gex2eZtoeG9NCW1bwe2G4XAw92YbcjEWmYpBzSBRTrGQmeAunDK99eMPCE84e4Vyr7dLbGGosggmst1z",
  "key14": "3pcM4VeYTSCE89QZxy4dARb5eBnSWCydnkTM3A7R74Zh2GxdzmS6xs2JLp7WL7LQ6zcJ9i2XpwFME2x9roeuwsbs",
  "key15": "2iGg3FZ8Kvj2deTbSkK3qscqG8Yqdpkmef2x1wemkKmGTfbVWsEMKMhpDR6rvV86wMiN28fQ5iGjDMuhFDuMGXDi",
  "key16": "3RxaAmdr7QwpHhfZskYvb6vvEQUw7Asu1j8YNCm6FxEVGpe9n9eiN67nV4yeUyn1v99ekX7oRogA7HseRDQofWfV",
  "key17": "4J3WyQ52vZhCqLZMrCFroK8cPK88BufsefBUvpysPw5iM5BQVm6PgySfRuTicsEHcMYEq23qGg1TV1AC1zUADPDD",
  "key18": "9WPKffaZf8syi5T7sPYYUoBd13nu5BZ7nfZpu9DKptQjdKvdRDxTg21yc4kkPPKqyf46xuKcK9j7wcGS3xwpRcx",
  "key19": "4kmhg5uvkXPGArGnMHif6oDd8SFoPfAm4GMmFHPCb3BgeK7DXBWWJCzprC6QbanaaEHb7sgW9mB9fjVK1Mz7GWAG",
  "key20": "2uvBkSWyZGYCjLzgiRg5HoNBGehEa7znvX2gvGxg1vk6Jas4tMwaQSLWdcWESgZN33isxPpHJMTpfnheQhJQTkf1",
  "key21": "3bVw2zyCCZ6FvBuyNwE6YyPSwPDRci6R4tUndAqQkwXD5X2dvHQVmLjSSfFPDXFmfh3PHDWBptUWtDXdSwHaVNNU",
  "key22": "2V8kh2ipCaR4aieSR6KRskrv9Eje5cLeWuiXSzTq6RS8g9om29o7TKmhybYLciMrK8vUMWnuv9W8YyxbgF3rB4TN",
  "key23": "4zc6Wfj43ke88DM37VE8aSnnox8LRpNN38uBGodRkWeWFBHYWhFiuYB3R6qHYa7CNauSgURnM7WD8EFQS8g27sC8",
  "key24": "h3r1apMTxJw2nm3kLdmkAYHNiM1TsepmREXTKNXic2sWqjakjnZvuSWoNJpSJDF58oWYRMh13fEH3gKFB6Zhhv4",
  "key25": "676yV3JiaVgdjtHh8F5NtdKijP4mDT9TLiobh2Kr7Y2kD5TqcLQqp4uEgZVdWaFmYwYj4MXqwiS2LNCqdB3bGhKu",
  "key26": "4mvX95WanMKvukKPr62UcYni1RyUeas3z4gssMDF74SiSNnR3oL1va649wYtivWXQ79rfFRwcjzBiwLyRHFwSZvL",
  "key27": "2bDZMRo9JFoyFgJ1ZS9qAHzmAgwtwsg2UockdSYTotp5VfxgJRa8C8KPLju99CwHGnQBMUVNeubdBSnDAA4qnp4c",
  "key28": "8XnUzUq3rVL5m5gYkRNYVvg5dVLBfsZLJyNeTJqo7SVThg8txyVeGFHkP8J5tdpYWo8ceU44Dr1iPHVGjruVVdj",
  "key29": "NW1NjumEJ8aNLFvosKBUcWq6XYAfeH4SHfThkjBCUcCT99aGPxjcXEAfpLspjZj2CNqXEQsdjuTH5hAFKMpPti1",
  "key30": "3x5rQpagz2Udix99NRmGCU7XbQN2Ev9EjRHoiC841sKuUBJUaPLAdMsj1T7xX8UJuw2rDbPtrgj2k6jRSHdL3wSR",
  "key31": "3qWcVtxWdEssX9gxKgUUg8kqv947uA7bXw1W99z6buXHxRSKqhcFPi2koDRGCLntEDpBX95s7bYtHFJTtvJbmEku",
  "key32": "3df5EJTpXNHzzrznSRAeay84vP7qdVpGpNMQEC8gACKAf7zKtQgxbnYLCLjEZMSDYtM5Ly8f6bWFEZGMvz672TKV",
  "key33": "5Gnc9FC4KWoR5rapFjkACpBH2WMr4eZt6TcFXnDEXrXVqFJjLPzKNRugsARFm5R4UbfCnG5zxkPQ8pu6DMMSfuna",
  "key34": "4NAsjZfPYEiRpUQ8DMkjpZA81jqai8gPyMn9DfsVb1mCTGNQzwv9xrjw96P2AGGVHJdpySMK6KFGUtH8qQvmf6Nw",
  "key35": "4EtKtS2vMkmA9upWv7a66v52FTZTD51VMuvQh6kDGHySr4f8WS35Msu8v14f9jHuDT5i5uEhpCe5TzSvoM7uYXL7",
  "key36": "5Bz9VQg3VdjPebiFBJLkZFKV5GY6XF31mDEnmjhGED1s1136147k6pBQobfQCHiqdfHv3vvAPofo2bA9WL68ZXKF",
  "key37": "3RTzYDCmVhJ7FkwdavWcdzxbHXh3rL6S6L27cWs1BpRNEr31JJbG93Ccbd1FqNRnenewXKCXpEa3wCLL6r77tBpH",
  "key38": "4Poh79ucfHiTBSTcWgsWCTzUVBEdXjUew1mbEGmUgG2XetzYsrZ9zhMEmT7jQhpiyut8WsyA8F3drN1DZoLMyKB5",
  "key39": "4vFe2nLcZsj9rG6eQHgNeLWDjjT1D6fk4PtA7AYkhug2RNotLpeYDhFxLTrqZTZewgWEkjwfB5MAnfmVEyQmyRqX",
  "key40": "4KeKGuxPqc6G9hwLJ99zDqpuf2ggC6mAvjgj5gHetGH5MTfwzKG4tKUXxaVLYJa3MLKKEmNX9mgSgY5BZw1p3Z9t"
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
