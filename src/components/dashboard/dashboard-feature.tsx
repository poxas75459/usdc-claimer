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
    "3rn6zYdn8AS8ypSBSujs6eck4UKQJFqScecyGHuSGcqSrbVQ6p5gh6iDwSdzovJtGfnQJ4nYTmB4aGUCSz1aPjdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMuVgqooyr7ScBUb8HMWXd6AzTCBudazjLRULSXvZBKkQhHsFY44JuyhWwG94vYkzW4jxtQ5shXy86KmnRXH1XM",
  "key1": "vH8Myo8EMoqcWpNEp3wM2eRQPUyGakZxD71SSKyDLPsPmb2xdYroxpSJadHHXanCCVJLbuEG16Tu3bQhGvvGnya",
  "key2": "4upQ9bQbiUTCThb8cL67Yd19UgA8Q8aF2wa5Apx93PUyrgfQ3rE5PXJo8WinNnYtfLVYshwWRKtBw5Cc3TV7PFqC",
  "key3": "36yJLZzAALVA4afSzzXtNe12jhHRDWrzEfj9Hy6aJAj7yTPZYKdR1ZQJn7tuXqEYaD7RqefRd3QnHzWUoZuwfvW8",
  "key4": "3c8rSegX9NwoEJ8KfFVjnX74i5nVQ3abt6rXumu1Q2GU4nEDajuDJJV2Jrhe4g3GPFN6M7Pd9CwKtz8KBYWvtuwP",
  "key5": "24AYN5MUAqoPevfsYYZ3dFKf8Y95VBWZ2sE1abzUYK2MEB8NtgN1WP5b9QvZTusRcTscjg1oC8o6Rz8UgmCED5yu",
  "key6": "4vjYbxa7G9QXQWeyqJNx7NqcwqxX7CwoGcuAfPwpiSsRhanZkmS741qWhrZPudEoWaSoexSu4rMSqoLX4n78aqY1",
  "key7": "2RKNkY4ia14dkkfaLXWCmfjneGtNiUagwcBLZqsWpwwYJUE5XFJF5B8cHiDyuUtN78SZh1Jnequzbd7JTmhmzDdk",
  "key8": "38Np84yvAoPVnGBDzqbmWvW1sLtopgyvHC1QMZnF3DEiFzvfB8tY9AGfn9aJEGYvTn1h6Z6J6TvY6VsVitT7ngaE",
  "key9": "23fZRbb5eJ4qG6rGt3GNtCchpDsd6ZoQ8N6Mqhx5N1T95gkSwUNDXFx1KqnshVpdCM45j756cKttSivbjXHWN4QK",
  "key10": "56UVecNoigZb5Aci5qbdJ4dFCNFVNteJMWgKBn481EZ2iDoLic5D4R4nd4dhE2f1HArYo5nk6qvHCZTCu1BKBPrf",
  "key11": "613f4C51G7tM3GyCj4mhKEmomN1kYGGRjAvLRcXwXViyYfrqUYLi8tcyLvhAPHdQtvezNBF83YuEwnbx8cmZPgND",
  "key12": "4vtkKZDGu97WofmoocbnLr8bqpDjMpFWjrXUm55Zp7yDf9GBn3F8H5EhjwzuDpfV2p8jAVTj2JuZ3T73brUwTD9R",
  "key13": "45H8bY8Huge4ix8QEwVb4Z3q1yo44EaeGRNxKRAk2qyNSGQHqLrNgU7x4grQABtaVMjfa3RyxobgzotsXCaDuBP6",
  "key14": "5FPiYnhgfjKdVDKJbJSDnBfDEj7KTQF6RRc4Y6JRidMDs8Xz6YR2CWoMo3s1GwFuw32JJSLdex3VLc497ERHpb94",
  "key15": "3t71sZdu3AHvroEY7bBF5yXa2Y5FdeHMYGaVByyqhG99yhvdCqHsJPNyDoeJmzsW19w8zuxCRse6PRWXuxWzKoYR",
  "key16": "3oXQXt6o5YWXQjsHLYEDoM3HfMomyn9zCq1mcctuD9DbstuXGYuueqsPcKg2CWUu7AJAub6rhhc59u2eXzxGEFpn",
  "key17": "3RPXRgzPMgWKcvd8d2BG7mDtpmENfm683MpGKKQTQjHkNFUq4NB1KP1n9ehp2RB9rzwB3AkEHSfSrtsL2AFfNrQd",
  "key18": "WrpdXyEWgSU3JTcvbExVFz1nk2vaDXgFUTrciHSe4N1CdUjULK2tCThacmVN6puk2s6MfYgFmdcSoWENEquT8Vq",
  "key19": "jr6QXBrAfimfnDQPvE3brqzQ7Tzdas2qMJ4a1KcUQ2ZxPvZuCtahM6iJw56rH8n2rWmW6jSvnUupbQrsjobyPBv",
  "key20": "4yAWq4Cprr3ZCMbVcszUyGde65ShUyQY9BHa5fyhornWgpSCUc58EiAVD7GYyGLaqbwNo9YiGMAfSTqXWXtb5BRx",
  "key21": "3ws6UiwH3cdhetQ4dPj7QFQ3RJB4RentAyrFmaujhKALDtiTdRcXRLdEEwWoNtAUBeBaEUZjSbWAHuwFPZpRpKN4",
  "key22": "4HCSiwP95F8gkD9kvZCUQqAg7T9attuiuhMqsf9vXpZ5z1PW3JML8vT8XVGUhvm3Ltd6r6Hy9uc8VMMQ5bDYz3KZ",
  "key23": "44bGXhamMefEKz5unhzJAoRvZzKcpfjtUD4SWX9LbRkPJ2C8LchuYNqm1243sVoa8KQR8uffHemS2C8pTUJUtfsx",
  "key24": "4qxBu9dWRhfrq2j6pEQeZn1sMENpD612DzLcKdTRfUwvugMJEeh9Ycx4RYvBkmKvzuXgheXv39wEfCDXFwezVHY9",
  "key25": "2PNdtMjtiQ5Dvk6tgCCQpBgaz7pWh6Nf8YocvdzDgQ8Y6GeWLAHbYBkMDVFmAeKQggba5pYE9HFTaz3VdV1KYKoY",
  "key26": "5sCrF1BpmypvhvEzBaXJEYwxaDmryXErqc2ZJE58YGyp2XfG7L1TW1shPU1uDyJ76kzcW3u9Y2tTiBJRyKLe1jJH",
  "key27": "3hezL7CcWWgnr3RmNFcViyfXkefeTkshkJbp4GQ4RrowQYbLukwAKnc9RE4R8te8KguPdHqr7ympX9WduU2Mbr8P",
  "key28": "2PTcc6UYeYEEYrXMFvXnWozKPRyrALJKyDjX4xi19XEqrKkjEb6f1X8xKjceoHqVLaWs7uNcdFQRWewLDRvzJxd5",
  "key29": "DfzKgaQyLge9f5cBt6PpT6wLhcTH464apZDs2xpApFHRqHdQt7PEbEwu5DmT1JnAaSTeHGU14MS8PCTRvnzUAtb",
  "key30": "14GiyVALns7kyK9gUaycodmyxCfaSgSveriNqkoebdzQkRcgksYcvFJ7Ru5DXQgQskusmEhJc3wXNs8FvrW4aCB",
  "key31": "2XnemF6JxpXu8r5f8Xdu5RFBDnPLH3dr6ow8gzjbZZ3boRBMC1zZUmmowVkDgicdAxuzkjCo9QKMHQCUkXjzEcsQ",
  "key32": "2Jo6bGTNZeaayQ3EGDymGukhLuL39Nqv9V4GjSHLJUB3bRW7ychF9hwp9A2jvHgyUa2xuiz7Tray795hYsw6PQiu",
  "key33": "4iSHHZBwk5VUBodSWd8hENdquzrknfu2etCSQyhBfpubfrB3QhYt8W6vKS3h3Bp9cSKnr8g9hQoNNZ7aQZBj5tDK",
  "key34": "53gzR8Fw5WuvAkTMfxLpJwpRvenjrLnaHPwwg812s5J155zYsv7UkJRtiwpscrujTAUXznANsEM8SPuWYhdAWbJp",
  "key35": "4j6TYF9LJosStqJ7N9jfH66iXbF6nfJ846LGJBA4FPVEZE89ktyMK2fn57XfCfM7Sfn83jWUPNLimioS3LHkDwUz",
  "key36": "3jyCU1o7K4ktfRcduwDroAGtsumwoWexfnrKboRPCFHgPDCR5Tze6yhwusGHBWxrArB31MDtEHcdWHU3VEA5nQBb",
  "key37": "GhJAyDTuVMmSrfXfGKoNFVvgckyn71rF2HTokXFtf8BNMTDHff3e72LVtBtYpsxrACiXHz955yJZDQPzoKZVctt",
  "key38": "3ZjbxfveGcnpreEd6k5udmWCmoCA5CsU3X61bVp2bpSd61uWkXK8MXGDoEgihDF6psg3rgpXJdTaWbJpJFssU93z",
  "key39": "3F4mmz18je8yJdg5rszu2ydqnPoKeP2C8E5ZqekHZdDDqiEnRzdBRHya5oP6DBfh2X9Tgs5vaCPX6yugdac6NoWr",
  "key40": "4UwJbKFibfYCsK6Xev7x5G1JPL46cXThW6asXnLLp6xB6sMJTYK33iLD9tkojXGmbULfDWNWA1R6HzZYmVvC6ivm",
  "key41": "37eBxJXuzMmuNiY8XKBDxcW6yz7Sx4RNmEneUYkoHJgbpgNDXyPDaDXawWhpE44V21vc7a7BpVWE3p2rNwibXydJ",
  "key42": "2AJUkaHBPKUnTA93cVpTV1ABGQTLE2yxem5LBfv6ydshyh9CTYkpDTPCS5XFCVQMNKdmWp6TJnvL7GhqaXhkv2mr",
  "key43": "5kgvyJvuPk7KGep3ow7Pi6aDoXBr2fqdfQRb9QW9DqLtGW7tZk582X9PTMPyEZTu1Lx3A5GQntb1fWCcvwN8LUmy",
  "key44": "S1VhXWwGZuRgJwibco9buATfbx9pT7VMXAPqZi6ityuikf45mt9HU2fhjRG9QoF6LRy98b6cLzMYeG4m54rc2HF",
  "key45": "3FPVpgw3ae164wEB6zwDBHWSz4W2DD29wWKd2h4cbhKAmSRf1gSTFsXtNNS2xtfVt6Fffx1CXc6HAbVZkgnyQU1q",
  "key46": "52p1yA5dNdyYf9bdv7a2CNnnZVFRgrH5vUTkVrM6ARgvGWVrfiEPr2DGEV6wqmHyNWXAuQrWRQAnCtMwqPh81sFC",
  "key47": "icsgMkYARQyrJtK51h4pffrETwgmcjMeNmcMXCYNbHnH3JFhASw38Rg2xBkb6pv9ykyd14KhrqdQFNiVTKdnpME"
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
