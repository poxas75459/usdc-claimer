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
    "52hrVw8zVCPAsakGdeeLVfkY8yPfv5tDC5GHGMjJB6dUh94swkBWsFvT1reRH4ftDwWXPmEmwpPQhAH54eGB7BzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvz7rnWWSrxCiZ8G2EbfwNHt7NYUaq1JHo1hKoE6AXRVRGDSrLnoYJD7n3Zua7PytvsxP2f5qxaomp6HjABCXQV",
  "key1": "4g2SVdQLCkdDGrW5uMqLkUhLDPinQXikWUBgsPESC3sxKXsbD44Rhtm7GexG45M3CpUYbHNRjZ4cWKpHgopzpz9C",
  "key2": "2hyCCNgEUf9GUUWi2YhJo9UnuYRF2LErKQyp8MPeKNZzUH8viAAJMqXVVfX4188JXqS71WRudx6JSsqMABmgzH38",
  "key3": "Fk1yak5m6TKYxGCtB24iSUePfab6uL9B5SXRagdrV7owwQ8ezMCmBH6FAZ5GQ5MQg9NYCpgqcynm5GbedSoNSzB",
  "key4": "3JXvMuyqQmv6xV6LDk6A6aQPRDWwqhyLUGkPnseUGLUoo9ZUEA9MJccC6VkLoSAnCjwXbBxC97WHvPwfjsmCKyb1",
  "key5": "2SVsrgCsGoDMqttr9oHGsTgskVK8emhh5kjCZ3e7KaEDbzPY9FiVohnekRgFiwUmqY6KtU6DTVND7aak64kjWUsd",
  "key6": "44MrGEF78xnrcfNGdTJL7zpMjTqEgJKyV37ZwhUJUJdd7VoYN9DWnFYskwVAA2w3vpMMsC7stzVwDLjXiEMU655A",
  "key7": "33jFpo4k8e87gHaQRjtMFnKGALySifMj3yx3zMmur3EW3cCnBbVbTZW8tMCisWDxFpbaT2NR6vNKcvP2SKDgCwMc",
  "key8": "Qko7FqmYnibyw1yovEA5mWXT6oZpwzKxSLbwTckHYtR8pdCFCvNy1ytHPbXkPYrpDiiG6QSeQYA8kaKLt5GY4xw",
  "key9": "5iCC8qqen8EHScmLEu1tqnHmDtCYeoBcq8enMQiRrfxzGDZtKKKFLVYbPWBL9gSsEHsAhdCGKQevDpUag75Py4Yg",
  "key10": "2j5An7fko6g6sAphF5CsppumNsXkAm3Umh1PJx6MPxzNSriL8qzMZCPoL7QvYp7NUMCv9tUsWhy1Z9WF8mGdSX9n",
  "key11": "5CMmC4vR5oMJB9dAYQQViJahoCkEMhZ4oCLxkuZnStNqyqx2rBZ3ZFjxaP5B6C1BkxyPfmeXmXesVTx3vXJfjCe",
  "key12": "4hKy2zGYEeoNptcrnSFxhD3nfVJJhGZdv9y5pY5nBTYpF71pMsw4VunpzAwe5VWr85jUv1MmToPcggKYmjg4mA4N",
  "key13": "4Ci9NaJMw5z64EspLVKEacaSE87mUrnaXzVdkMCTS4o8iYFrAMB8TUc4s1TGjGn13YiwuBSp5ZNCMdKxbQHrvEBL",
  "key14": "oMfkTYNaeEWybQ6uRjoGNYsNDziZ2zChRF5o6pJ4iyGdePEVVYdfeY8dSKLN1sPgY3LHVwSXL1mCHvMeWHqUNyo",
  "key15": "5avenvLDCeHQ9PcPPzTbQDiGyk1VU9nmyCK4soBCPZWVD8ybzvwH4njqwUYY11aWEEagqyDkodmpZsd5xjJrp8Fr",
  "key16": "41pWdemXx24ByKS1ui4aF3XH36nhSHkGfNMMtxKsm7t9CWTLxfLpFHc5fyx8tpScAd8PC3ew6xcUtNYoaqAhYvMx",
  "key17": "624Y95kagyjrjKVGYpsQBU6YebQkK3hj4vvEoAnPvNhAUFHzcwMAeJQLafFETTgtpjHxigMMaJ9jvWQtTQRwYoTQ",
  "key18": "2ErobVCoHEagYoG1rp2shSQx3RCs6Stb9yNtaDDa5HRDujGNqYPqxg9qw6yHse9cfi3BHtGvktsDaQjcoq2NgaJ3",
  "key19": "2aZr6fPKS1veJvpEGh1xRxGDyGEwUdbv3nWTaQB3GDnajq6QVsQPy7LEfyM3MZRXfpFitbmhdg7TfeRKvHBjduE1",
  "key20": "3ewwgyUgrgWQgXTKyBbcEdiurE1qQfL6rtxp9n4XCrRJAwGfMM6owVR1pKYJmKs8Maa9yng2mFUgibDTpHoNrXyq",
  "key21": "5f7k5RKrMVvxbnVgJumhq9jrnHTrtfCoAb5XqDnLjGfcJAtp3ZbsL53BcUPhNX38PdJSvtkenWeq5rGzyepFT3KU",
  "key22": "35xEQa9eFF2LMiGTro3MuxMZXhSKFFS8Fte5vP1NgJHVK1pVA79aRjG93syCaZrn3TWBazPj7qMau5snZWJahmeW",
  "key23": "gXZjLt7XjorCbLUfg3LRn41wi9wDtLkQQBeRP94qdJn4YKQ3aasEGZisA4pYV61xTqtRGk2h79XEzAeDc1xJdVx",
  "key24": "5bNTHqtJ5TKD4yHz3iC6MNFHpreYH4T6rmrywySP9UEZB2aAjUWG7Tr16PUj16VBp5e7rVjjtxfiFkdMSU22zgYM",
  "key25": "437K2xXLcrcupDpNkpzZszC49V3L2wmgEck8GF7Z9xQi8S5gUaZP838Mz7VipsppLRYz3YyMdJpPHMGZ87aUtz63",
  "key26": "3g4KD1uNwh8oEBzSieaTqeXDEMj2Bdm8ar2x7UFU79rYrXoNRKcUyeTvPyacV1K49xxVdcgpornDeZi2coi5c7HQ",
  "key27": "oXuvfJU8JjxtyJKHo8xtCqh8BYK2SEUvnTL523s2tER9JkKaP1z19v8Y6TaunzG9UXXiUAv3uHw7gPhT5wB4zNR",
  "key28": "3QaGZsyjvp2Ak95bXjv5SEbXh1rjr7wsSFBahaD2c3gj5uDZE35x5H4qz17WrSTNoJvZpbMymXj9yMuVEqqEQX5y",
  "key29": "4sxFnfamGWu9dXSDhyZXtCKbQixRJTBEdDGQ67pHTy2tLZEGD8WNHCAV2nWPVnmWuWJcWzq2HHp8m1Yhm9h2rNfG",
  "key30": "5cLotSuyDYowEsh1rTW2paUtKvBXReiPLnzVs5rwxDPTaLQbooeRoXi2xFaMty2knGtZLbs9nn3j2CwwaF2L7Lxq",
  "key31": "cpyWb6p7sKL62DpGKPKu1xjgTE4tgVng6vmvBKdqyx2Ux8UYrWs1EkqNV3b7CVgwqq7PMhJJCZJgpXiZTqJRCGK",
  "key32": "2TELktvfULqBGUtmVBY4uEgstiSQjAizNyV7sD2xysvG6bNJpJKpwwPv57jQMmdHkDdNS9F3Wg54EoudzMm63XJa",
  "key33": "2DRWjbibyAjgqwMN8ukmJHwDGTgHuxtrHZSGp4wxzuhU3bLzeWLG8VK4LdhagGEk1ZqszsSX3MUnWR8FTz5z6nDP",
  "key34": "2Ck49pmHEhqbuRrKeqDKsMVnqAzgV8dSLURmY3Vzu6XmZq4Ad1PWVHndPywT5zvpN9EXWn5naiZqyRCMw4XU3Jmv",
  "key35": "ZnpnP1vrFe8NsWuPLnupxUJdQqhajuoiavugD1PpwLfWe4tKT6NpGePAs3DQeCkJHz7St2cjKe9SBQJp5ma2hoD",
  "key36": "2BEALPPWdWb9GWtfXUpmF6212u7QVryL2RNuMs7dYn99VRFGCHQeYy72AQYHRqCUH2B7wD9z6jfpRRzCGKwavd6P",
  "key37": "2aFNL3wA49CkTCai8thyw8X79JbfuePmzvCWGsGJEU3YVqCE5zEmZHK6wEbQSSkdiTtzsH5LyszKrfQz69oL6Ltp",
  "key38": "5JfdLUwupaNG1XrLNJTExT4bd3R2HjKEGH8e4GwCnsWEcLnr3QvkTnGWGcYyAThRxvh2mFQgMbJFnCbwJEzWWo4b",
  "key39": "4ecFy7MNhNyPBwgZDPM8fLbF9cmNmygDChfGrfMiDiqSNQMq966Ucet1LCdmK4pWv794XfsXxm6UzE4gC9eXXury",
  "key40": "JP6aQdDKkN1UTos6i7gY2PTxQSnjo725WUpWEMXC4STQT7mqjwYZS5Prrcod9iZhDnbKGQayXKadayYd7yjcPCA",
  "key41": "2ekuPUEeE7oh2jEnmvaNxJFESQ5e67nWDSnp8hBhR6v3RBjWx1Jw1oYhEgqsTU2zq8bQuCidsNW8XSyN4X4NCSYT",
  "key42": "2QUwiqGchxLKwLB1RrZYLJPphXu9sMo98Pj8uGpcFaaxNrCByNskhacHEYjDdmtzNBWKTDF4MsbGiV65yitMzG7q",
  "key43": "2aySVbBzeKa4KKEwQH9C1VPpy36XvAWrScoNAA2gT7puhGVK4opwEtwBbjr9d76yRfT2Nhfu51SvHece1kbomSL6",
  "key44": "4aVg2dm5vqyftLoRFxKSu2Cr5mPKHoaTkdVWuYG5uNAaYbWxnf6C1jxUzcJjnqmBnVY33GefYBbokN2x6J1YnyYv",
  "key45": "32NPR34hL5mA2Z3XP8etbJVQ9KZLcxGQSj6JFWzzRCEw4woRy2yQA9z9tktGLcdrH2Yp3h1TFi5AAxQCrB59P7Bp"
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
