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
    "4TUDoFpLeivoVmkCjRij6QoRMhGsMnsbwbFcZPnX1wA8eYMSbtbETUtueVc2ciueVZ5Sgm7wvvPpidrcNhc9f7Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfLc5M2cLFGyZGH4ZqGZm1XfjRs6tGUPCFS5iEfLfZidYbV3s8Y86R71HMu4njESChqZhquQxkBNrPHiJjmYf9U",
  "key1": "43Y59TcDMeF1srfVSGDB287TtQhW4eXWUGNNG7bmy8FmQ7gohPxskmMAhkFKMTk4KdDmHEhxnpdJX2Pmqg7ptaNH",
  "key2": "vwFD94FtCxmtyvfVghSHejvNmuBTD4Nio61tYMt9w77ZAU7WqCZxdj6Qk92yLwtjmBxGBKstNN47dqiJ6jM49Bv",
  "key3": "5VHJwgvbtpwL7uLJ3ANuw3KshbhwpBwudid8f92LiCUDjoUyfcoE8EQuJ6Z7wWmkHa7WYdoTUpCr81poxDtPkmiJ",
  "key4": "2ZNPX9zYD6jnFGAWZpzzwbzkHLVAp9MfMPDetZntywyfAx6y4tPAUibVzmmALUVBe8FQnCjhhfQThTXZKwTGLkrr",
  "key5": "24hyVyw4KikMEMUAFyGLvPNyCFw2jF69jXv9Yz8DXWPCpjaGSh7i1orhKbEx5fyMhKjaV8n6P4TsQjhVENxmohPb",
  "key6": "5TBiJ63Tjoz1v351zRYm8foi1x6qGGCT12TxEuaTiqurJTJEj1MXw7smTBzshL4RZqBDEKhGcmgBjJWdLqHimJaP",
  "key7": "35cRTW67nGtMhp1re4KLoixKZC2jyGeTXNZAukfvNs4B6yNvvALaKruvgBfSbjEpMTY277PUD3CZWkjG8vybW8dC",
  "key8": "2EkGU1kttSpvn5kdBtvwG8TDbKwtg1MDLw8XcTsW7gfHN8bx9NwhfFNXiA6Ruy2AqwfU9X5GAvbrDfx59AaC3KjK",
  "key9": "3dNFP6wGPwRinsN4RYiiHsQZEXjVJX4C4CdM15BdFU5rq8ksCmNJZhW2GYiApXo8Jx6qivswAXkuzCxePyqwzpTu",
  "key10": "2f7GetEAyHUJZPajNctaiCcmzXzp2TEJ7CUszkJZCw9zCSK1urGsqYSrWKDoFyUu1gNAy3waB69w7yGyW4mN7SMF",
  "key11": "g6PBMBu8BCrmWFiLomBJ2oxjLyLSncBh7gaTJziHr5YrYncWit1jSHWE3vMyH6sMSDzu1W2w9YazEq6d67idVV5",
  "key12": "5kgbkMw7FjhDYgDKun9J6QmjjRb8ypkaY6qPBtk3gXt8LgUAnfCFxK89zvvBhYZSuHf925Bq1VYf4TwNPsNQrwrU",
  "key13": "5JM4zwZXn3954pWmLXKMtSumd3HRLJRdLhBnrqv5EuYNZQtTuichyNmEZKRmEdfzCqDtiPQ23Ah14QmynLFCSwMH",
  "key14": "TNfBczxKTVCiHE1Ji8ydWDgG3eN881uDtYz5j18Cq9d9t26ezJ8kbe7kx1sGLtWpfTDmNCCi7r4N66tWimdUpZw",
  "key15": "wzUXp69N47VkKtTv6yHb9iwHcsM1KWnSbQMYwqTiGFERNAawZjMHYSAQgCdhNHmpxefHBuQMjiifXcsjXrTU4qR",
  "key16": "2BvUN2Tt52dotNHfUNPdM7EuorNiXRRUbeACMAyF88cdCfjNpWVUsGV9RcBbnkfyCtpaTyTkqVVT9DSQwbBcXmLy",
  "key17": "3ao4u5DjptdgXG5MEVceS3QvBT255PZoukKquNgdhAyVttxdpQYfbJ2MSKETEDCVr3FUgZdKAtSzYtfzHV5hJjCb",
  "key18": "3LCXbNpuVvvNvVVErt9N7WHfpFXzGHeZmgPePUkA1tJBtToUVBHP1c3E4tdFEGrL4VD4QX9cSKmJK4ZFYzSjRjqz",
  "key19": "3Bp3V8EU8m53T9df9dgcYzKBQVWtFjpDUuSH2gsrAKo2QkTvHnhGGedf8jMKpYAZEF87jwpG45cf7VfeSEa93xSt",
  "key20": "N63rWuMT32ab5TdxoGMhXJnrAKXmku2UMCfgxkTuvoDWRY5ywLP18qNiuchXNdDucg6XRr67EXpXW4uBHehbJVs",
  "key21": "5ARcTpQ1V2oonLFyejT5w6APAyVp5iVETPN7h84rxwfbJdpj4bkXg8qVpZT7scbexHyzfSNJd4CyDDxn1YLD4vQ4",
  "key22": "2Sr8vR6KzrX6XyvkeTedYdQcuPtiPGGysVNdCGbXqVqqHP1CYnmYsWAST1RBFp5yuXnDzKa1shSWPSEasuuJLb5m",
  "key23": "4chovHunmRk8nxxz3Wjd7NswoE2LjchmSDNkaZ8korz7xRmyVieL9zWzByJNqdbQJ4C7B7gEyp3CgAvXk1kJrhjY",
  "key24": "3YoxEmsSahUgsjtARLV1ixVXDehF7MQzh9TCQTh2fp3Lqatyymhqhjbe9ru4dWZTpq11qAG9znxAFwftVnZwLEY8",
  "key25": "YyTL3MPBFW8UpMpAUYktK67PdaX1ezxmNpHxyJJtjiFxvCfqqnc8kVhgbWT81drNbmLrZrq4an7nfEtrG8GDds8",
  "key26": "3uraMoPDYJmSWHkyp7QQxGvNhACXsfFTq7Q2uG59gWpr3ss3QJBMYrUynVNCcuWPJj3rE2eRYPQvKiWjByRe5x42",
  "key27": "5VAbuNSjtS9cqjcUYhFKJ9XqNUzEJnVsJt79FgBX15qH4kn7meSN5M1CjN1rHLrqrrhG4DAj1MEbPsDtoy9A8gbz",
  "key28": "3QcAjHXHUZ4KNNDPksLFzcioGERBsDXgvEAQjk7TtnDfRd7VTexBs34RXPhnBMMpppuH68BfU4JwRVMnRWDMiCZQ"
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
