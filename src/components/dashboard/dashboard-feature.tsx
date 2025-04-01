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
    "NH2qHJ1FL9CF7sXNtyx818xQdh2nUKYrdQaZGp27KvyVFiwYfSTK3MZzQH5TFe8sUgm3DNVSz5JGtuNbHv4UE5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aD1ENbHtdvrGjASmBmM8Q8R6gZyXtiG2aek1wTRp9vsG8XAKYpkHhpMZ3bDkg7nJMMGzmkMp7MBZGGBh1jTykv2",
  "key1": "fU1jkiok9gzJUscpCagmXCnM2GusEaAPvN8JTEADs5L9eEAgkdExYcvWzVqhoq1hv5TVDs6GnHSnX39wcB2Hx4C",
  "key2": "5EUt6NPMukNS2qzVyFBdhkwCHVvQuwGBQT36bq9HLVcsye8mkvbS4ZY4ahw64S9LxbrPfYVWdgcrCUVhUJ4nbTZy",
  "key3": "4nCfZX1tf4Vrm5LGY6Qq6EqZkJbqhYsVDdWA3tmYLvEKYdaSPdqfLEX6BfKgAMD2dyFru44wjtPWYtMeoLDyrXQ5",
  "key4": "2G7QnG64hgt6ZEdxNoXNpnJrWE8BeKAwU4FgjddD7Tp4Y9oRpHLfBCGjcQLMHRoJaazQgNy9MZqij8xpzGnnZWk3",
  "key5": "2cJuTESfhVC3aW2aeTYcng5iqqUzdfuV6BroexKdAfY1PmYyMKt45Mjp7XeMaNBsaCfV23vbGGp1wfqFLu9he3uC",
  "key6": "zmsNQ6LNB8daKUNsEkcDDnZWZZwrKumzNwVfQtFLgzfxp9wVuQxkJAjYwkM5jJtbJnoXT2gM18PPNstHsnZS6A9",
  "key7": "F7qka3gc9uVEUJFNDXGiWXxaKdi2rGmbFPnhqKwxy1L4bPDbqdg78TUoQFo1JmeaDwKcfL35oVrKuKfkrVNpWco",
  "key8": "G1QQCgnHaSPv6ze3G3uzGyGy32QZZ9xnG8pWJxAzc3QtAL8Wze6Wkp2JEpsCcx21RUCWMK1RoWoNrLnRDXvdPYP",
  "key9": "7kzYEtVXbqnUYkHRENDWSnpvzLF3xbFJ33TtQdj2FQ5yVEYfshwiMpoykNLSv6YPfJYKSmofComJpQs9bq6yNYV",
  "key10": "63iT86eQTBuZs2eyfegcDYA9k3auVAXCZRFbFnVNfmSh6Eq8xTnX73GQJiLA4DjxEAPtgGwGMVtksyyJprN4dq3F",
  "key11": "4iHUJwktEV7C955qEyduhrRFLA2B55YqZX7X8rXUwU9DxMeqFsG5ABPDPvDQkXWzWBxJ1hwSpDHTDesFedyZikZt",
  "key12": "317rULyUv53B8cUkuCMnoTrtYpXGVik3dmco9ZuJjC4c3xeGr9g2kfYzf5P9WTd7LECbQVkjyVbVqMWZv21mF6Pq",
  "key13": "4ntSjRUu8iRG1G5MKjBL9yJMJ8UhdDF7gEw68fRhhgwajRPRsBH435wbUBUeD7nAjvFyXc2obo6Q3w8Cc1okER8Y",
  "key14": "545r956NHvJEjAMzzpfZwid6Hcnqhh2hQoEQGFSiG4XZmbYHpN8NSwcWXPnndePd9iXMG9E1qGRxVQviAhxKDTZT",
  "key15": "2NUpNCSiFAkXEXgXs5Z6qwcfnmqgcYw53KsJVhhhrEyiBFMcj8cho7Px44ZAc4u8jiGesvLARVFY4yShcUhjjpmN",
  "key16": "3F4ZsKHkcNdMwxr3Z3LZJjngjwbb5xCtuPeGHSZBe5LogZAipWwCmGHaL4crvPyvoAAus1Us3qV85PWbNUEwpGT3",
  "key17": "3kXiYCQuZ1M63ZTyspKo2xKWCWVaRhCRd8oQXh5ExK9DVbH5weuFEnuqAH41MA2A5NVXkQu5K4bVMX2qvdQdSHjk",
  "key18": "2vH1VydgsZt8jY6bA5FGc4Xw6UZFiCbvs66wJm2yMysjRbTApUMdmrQXh2e6qKX4xjFzjuXpBnc5NpKDrMX24onH",
  "key19": "3ZqZ4VCQcbKSscBMrnZ9C4T8APFcpkhW695jtVoo9mx1PVKDcpx36sFko8XQGKJ1xcbfPPZPF3eTijGKeWiNT9rm",
  "key20": "5zuD9scyuWxpoRF5nn4qi96SjDv7SGtkcBpTuQPEGEoi5uKd5efPwPKsDvgwDE5T7MYZVYXo5S9e7YteipBRCjdf",
  "key21": "4FphiPcz9zr4kNdo9tsV8EQ22cSshZTKNLipAcjoyzk6fZci9NVAKETefB7Y3s5wuJFgSrC7Ff7gvHW83EXEtYho",
  "key22": "2x5BhP9ywAhKh1yRbWNH8gy5ng3QwwjHA4Hnht28KrFG55YyeMqCVdt8saKppi6TDwnxj2x7Yng1wzDn2WuagPhM",
  "key23": "61BstNbJbrKD31HzxLjqvsRoEyRzzpMy71pEs1HPRtGpHFHq7xEwoAPS5f3WLM9AJ8XQB4PN8arsar1y5WasVZZz",
  "key24": "3uvipJYrC95tsyZAYWmowvxVGxxDQTap762UwBKh4Lkq5Yw837GoJy5Lm3J4vW3bbjRkNoXrgvWPaCHtAd7mqX9a",
  "key25": "5kaz4hSeyd8uE7ebNiEQM5FJkbUHpSDvSThNx2zGe3F3sXGbUSgvspmkApTmYM1ZucG9cGqPfnJP7BxAjwiCkeT4",
  "key26": "3de5RgYWszfmML44vjpvvcF6MpqW8RJkyszuX2HL9uKpVw6oNSydjc6LcL1WYi2AtUtq2c5LUJuqEuo6g9GNx6QR",
  "key27": "3uJgBC3bbBeNrMbqcwWMSioEBvts7gGhRLvctVGy4aPp6yLyFzK8Ta1egQyqKd8f5HDk78sheEfqmM8gJ6uk9x2P",
  "key28": "25sYUG2sWfZG1aGYE6QfNNauEBU325RZvEdpS84tPp9Y6rxBacPMFMnAvsdLEReUEnj6QPA76LxUHnwrkg7rDTeF",
  "key29": "3X4Un7kDf1mgXq6tJNE3ZnCT5gFpLtxFU4EeaDANbyh3N6UwXwQgBDRt7GaPAhk1NV7EzqyVsJWWHLKsSYiM5xjk",
  "key30": "GrzfwkhEBQMnPkf3pGJBtuKEWhBvj4R28N2dmctVVu6TG56jS7cgvHFrfLdG365DefgGb1GEhmzQPST3zXMtaZH"
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
