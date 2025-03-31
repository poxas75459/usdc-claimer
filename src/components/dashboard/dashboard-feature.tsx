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
    "2ixTeqhe3wYjj3rFLQ6TwVq8FBGX2JTAD19ujFFp572uhDyjfBHRyLxphdFcT9jh3fq7vsFycR9mEknNueNNuZuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eegc9fRtn9TQne4kWYVSzqffnZjoYmnsP5wj4MAgfNfdSfS8n941ZMi41VTneMtzdhihrMFFy6VGuBtAbzSitRV",
  "key1": "2RzcPvKakmG4ejvwkSeboP89YLyUWp9mDGVAKuHTaCAcZV2Uxw12FFxaE7eERKxPHZfYepZVAKSu8e51N9auEyZU",
  "key2": "3aKVpF5CFKiVHT4rof399G2BZbowCAp982V5d4Zw7j47AfbCJCYC5spPma3nzZzsGAJrbE8PsAGUmC3xNx1WiZop",
  "key3": "5SpCDSvc7WAGLYu3ewV4EXVgDs3MzX4juJrLcT9yi97JUUm74iX6QxPsRB724SHH89bB3vLHWiBsGXndrPzvm4WC",
  "key4": "4Boov7euUqQCM1Ra8eN5f1u6k4oGs5Tka6rdYVV1br4mNRM7QagAq5bQXhKCYRFuWvEScSjNBi69VWaXnvEeo1pC",
  "key5": "4BMPi9HTH9caVM6xQfrX9LFTYXseQs6cHEJwsQYoinjJiabJCC8Sxg3Uw1GsytBM1MF3DYmXgx62jCsDwm8urdeS",
  "key6": "2kZReqJNd8pJixLpGv7bg1ufUAKEYExSkJGngm6erccSf2GNFieHtjciDtqK3S6jM8te9w7VkDUdSZuEsWaKpPuR",
  "key7": "4CztrP1j8gGzUTiAaaWtUyfUTaqfoavdZTH8mp66xfei1cUb6mbEbPWQ3kp6Q92H6LKxV5MFr9BFREcYdqnKQSAG",
  "key8": "HwJddiAhPD4XTwDtoECeeKsbWNKGgF6xR1HKUnbZvyshncUxnTSZWtfNHYYjzCTSj1YookeQWacb21PEkoNgziZ",
  "key9": "5HEB2k6dwh2zGwe5e1dnfjvqqmkCpFQBs3jwTFAve4h7PzhQxtbwvVTNJAjeC7GAdxfsKctdY7CKcHsNTQupQDTa",
  "key10": "3MpmtKgn1jt418dQxT4AFNcYZ4skQcEksMvxBZnJsRCXX5QNRZXZbY7imFp4BY2VHJrdjNEuuDz7MrhyZZMvxDvs",
  "key11": "1LYfMyvd8sPWCczX1m9uHJC7bS7dQsjygZ3B3vDsbdW48M864XVkGVcPEpd98SnnkPk3kqWfwswQUMvJdUmbW5A",
  "key12": "41UV6zCzjtaQEK1xZ8CjVG3RpsieaTsSGfsbhKCFXUF6qBD4P4rpdgKn34rfsYTje1oGjYAH5c5ibwZ39yMGwJhH",
  "key13": "3sn6owsDGVmVGz1HGUKSvr2arEzyoRPJY9pLrHpAan7Ktz9uR5oK2JUfNXjmfsmeNm3nGEdnU5d32NHB2vEGZLxJ",
  "key14": "56bAK2ZpnCgiGi1bjQyczqbi3qzD64DHKonL1PTCdvAdcoZeXoqWoggRFGG4T5zorcHgQMNtm6ZLzuC5Fi5gy8Cv",
  "key15": "3yWwLF5osxJvx8Q3VjjS8YzMbHnn4RCqXqrr3DRj3rLcKPLUrynNXeq8XWHDzP5tiVgZm6jkKpRto198uAZkPEks",
  "key16": "2cdp4UCF5cwSWjkTDvCcAuDsEfuriurk4hoEEoxFmri8zr4TW6oVs53p6fjELgicqyc7bXDhCTZhRmMHndgqjDNc",
  "key17": "4n9eY2ngTJ4uyhc8vzoH4hWu5WJt3n19HTNoqfCu8SAS8RhqL6xHGe7bGekPZGmZ6AFV2aUveyJETbgt9hbf3woi",
  "key18": "qmevamdbHecdW2wceDKwT8YVTytHm2Fv4xocjndmMSv4jmFsF2uirELjtPJZtM6ecFpxekjsNGe3UWKyU2RyG1T",
  "key19": "5uGUgHqC1XE5ghMxMNtE4MmpuPzz1wXPqL8ygniWtufYpa1yDjW23p3wuRD5uTmRhhWyZaUg4g2KRsgFpLWsv3w7",
  "key20": "F914rE6U7ptjhDrZYeaa5VsbDVtytDwtQeBKg3yrtgrHudR4HqxrGmCBVCgPRskNpwFYDFZjKjG9jq58gFu4oQQ",
  "key21": "5uBsBZYbTgz7oAK1QAD5SzKSempYvzaTeWgbLcCgFZYAaNiJTzGPFAeojPHSYTPY38dogEuEwL6rNqEFvy81Fo5Y",
  "key22": "5MFHgnViaWa2mwJgNzDvrckByqZnvcbfhhdJMKi42zXmhyyyKGWNntDroYt97cb4mHYLypwSUdMs8JgGMo5uMwgy",
  "key23": "JRCx3CBR7yPb2EkFHv8EHzWsffw4cFyyoGqg9GnEhUKZuvzK1tHBjVEGDEiuW51jqV8Tgey871gUxMRFMzRFVrj",
  "key24": "5aca89Chw5qqXVtgaxFHi2eC2a9ik6H2VPVroPo5iwPSZuPsfyrHK6U2rk3u6uwdmd1Ras5ffz3pTgnkH1XSDFgQ",
  "key25": "5NZ7xaNorCEja5ZSBWsLCkZ9DwU1XU2SXPFjhDF8CK4gToAw1MhJF8tu3zveKVs3h7Va5NPtmjyZXKZMsa7rbyAD",
  "key26": "2rnRCNYVtc2mo34RvnD1tA8m62xA6TtWLSfag124wS9PovbU62EH6kipTk9jTXz8U74DML5SPkkXWAFbaniAnnAY",
  "key27": "3YWaX3Qubzv5FwChrBUEEpBxiaKfVGiZ1yejQFZQPVEix36urDbiHrB8kgw1nM2VfBhkTkZWBExtY1Topa6DFKr4",
  "key28": "3d6Rn7bwVX34rzPq8zJ7WXMugTWPXc8CRHwxYDVf3EtB2HGTesjGpupSJg7szHWZgmoRKh8cJj2Dpq2mbezUwbQ1",
  "key29": "4uWapr3a4Dwy9bsDYEXZGSS8DMzjaESfPAJAzXzDhBX3wLGgZ9gi2E3s9Tgw9ETt67wDYsS7GSoquT8njY6MVeiD",
  "key30": "36JNRfHaCa3kLbXJDLKgJDVp8xVBxSTXx8TVe9d2X98Nj9cf7yZvte3V92gTEQ7czQnuuwAAAUnk6rXEccVk8BNh",
  "key31": "5HhpSRcpX8ZRK6RWUhrh8CpCTgTWvDK9msHdksLnnRhMsaoTZKucvhRh5JqfCSChmW8TD1Bepu6U21h6FFbok4vD",
  "key32": "2hAGmJeN2EB1esxyirMDazFXvNiYWhabJSi7GGhRQUiDrtAcR5aH2CDYbtxQwtRwpSBoJcjR771yLnqy9T8SFzMN",
  "key33": "5bHUgirx6H4FgxLgKrCW1sL1zZLgC88FpC1Y7jnKdJmhjNvmo13z9p6RAzGF8MZ2xhNga7oVEBYnoGH3hi4m4Gah",
  "key34": "3wyH4ngRyy2q4ejEexX7vwHgPYUP1kP9z1fQrwP9JyfuxbPu7ZDX8Usss3q441pVNd6K98fUNFNMnh46cjZ37oC3",
  "key35": "4fnfBXojbuDs67oEzhR8tDkejMRGeysAdU8eAygoZoXqySv4uXxBhGz3rEyzYuP7bTkms8wKGj3a2Rs222ssV7N9",
  "key36": "4GtwFbGtXwMsy23P3RrQusEhh9h8ZEs9sxR7sh6wnKKBya7pYrDggShfWLfs8NLjrDtzq7ZVcnbdY8HdTnvsePT2",
  "key37": "4f8qn6pbZUmfXNphPb8zTbC26wigA18pdWfGb1kEpvqm6uPhzVDckRF6oMGBnptHFZzRwMdm7DjAh5REQCMkvxim",
  "key38": "5nD5a3tqAZeRix3MXBdAoWAwYjh6gKz5BuH9urqCcd7Jp4Efxq8ATReF2NcAf4wjUmKT36xghn47Xg99PE37bK17",
  "key39": "sex8mCzcmSSvNqdRCD9Jz29iWHj5dsXaJMJdhcg41KWLRQdCjNcNHWUKgfXtvyV13ogPTUDpxUiTaTYwufFHdbb",
  "key40": "58MViJhyaE5JsZ3e32QEyzNTg5ZqmqTwWpUUtgjf4p8zCsMG2qJ3bPHNeJqzEdK25RuELd4StKVVYYiHxkPCkjB2",
  "key41": "4wXzCB4NwLbThCQwZGSK9RUcdwVdfQfRD1dHtH7sRDitp35NTNK4yoc1d4wRkiN4VBi2GaZAHkSZuJpW7kXe2rdB",
  "key42": "4iDi4bUH9xn87gTiEPNb1ZvdUK4oD7yzsd7Qo1cyXURQsUTvLgJBubuEt1v4o11ZnDuEnfh1ziVE1WUDvPv5XP8W",
  "key43": "Q9ciFNUudZkqzgWVngB3KkH8xxZfsDt3qXCHN5NLjCAff1jUC1qjXURQ8ub2b9SEDMCKgzUCoPcY5MJHWQdXf6e",
  "key44": "4gdoE1YooSQBjdrn6xLAWVFu5nyETXPK4uiCV7isfofP7AZz2jS8dwxu1FyjTHCGc3EnnZv1UZWe34NHFDw2wRTL",
  "key45": "2t4mNZcppju5UBhreJhD31cw3yDugBn8Pn8b5xDgJeL92RBi1MnXKPSJ7L15tQfxas3Qy9h3XCywwK7GUbk252jX",
  "key46": "28mY2F84K8cJhKBYqGCcY8PN291ArxYaHfHbEX65ds8B5XPhf1KMsBT57hJEMjCjjgvzCdRuRTNntJjLjDcdgPdj",
  "key47": "2KxdDinNxF6nDPaZbGVjd29VUVNm5nbTYwnaPnvLuM2pDSvndm87YPJohqs3DJufMSHuyWreHwaW35sSNmfSkPQf",
  "key48": "21tLcyszjYQsaGswbXurnx3VMxG7wd3412hSazMDxKAnnsjSyyBkkPN91wzfk4E5LVAzn99dHWNHJHhdvGgse85w"
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
