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
    "31noMsVMK827RUzeKoeRgQmsp7nKqMGhhqUNJsxVMCLarVsfGkk4jj6jcuw9nadUV7Eh9UCdKeW8KP5edkb1JztF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KndaKEqceUAVSh28nkyNEqUGdHMGDzyU7GruqmsMJqnFJfZgBVTaK5SQavcWsBc1vB8inXatUuDabyeeZaR6RPK",
  "key1": "48hq213ZbNdPQ1aqhJRVtjWJtZQbFBKfuZJwFoJNiSdfsPvBYnREkWmirDEiKKGLN3pPrTMFw4y9UZEQRJeyAqWB",
  "key2": "2dmNZV1whytzM3QuDHgh4UGwV1yDx2XoZXUydm4p7z969ANQArVWYFqS9EUTpbT3y2Dv1wUuZq2rrUD8Dq7zFjAn",
  "key3": "2ugSsi3fGmUP7DavYpyfpM3UUSBNo2nkyi4MBfuxiVXQ1FG3R8RCmtitQZ7R7EoEwmNMf7G4WHCKwivewGAqhyWH",
  "key4": "2itQ8Vm5uTXDZoHezaNxanxPoh9EMFgzagMeKjveXVzCLELDHyZdNPEfmBjWyEArBtKUvtArMFEj7MHyXEzbUeg2",
  "key5": "nA5j5KovCXjpsWEtoHhQxNKNSPyKxJCTNDLuJKfagvRXVGhCFq6hvvGEDPnY7zyZc1wp3vKbMdoA5XijHL5SQmi",
  "key6": "4tHJwSEe5PXaXijmcsYBAJbfLQ94VWjL3bqmpKMEYwuCwq7ZJM7Ga2QQjuC2TwKCg881is5qvyU1qisJ7odPRxnu",
  "key7": "3htFQ2oRo1m4FRBCyhzHWPX8anNxKRq3uhhC8bpJx77EqvMh6KxPnkKE2VeMpJQqGVgtP9gAsk4NUeg5HUEgF2Wc",
  "key8": "4juBPDhdo4NowKyhcgVXYXPznXbX3DYGbVKSBkphvUkQ8BhxfQw8eHfGTikk43j4xBA4w9nYT8gm8BTF4nEs8YvZ",
  "key9": "3CDLKQgAqdt7SL5yxPSipwd7DtVmQDGBp2wWt6cFcVo477HYtF6wUXDQYHkVQuWYEkne5Ze4dSgqHyYgNok226Ki",
  "key10": "3EVnRzrqzENreUo3njWvQd17gwNc3QCT39A6DszydDCExLDVFMNTmJu9k3AUH9r9fM9jcutXtKTkKo98vV6BcF5i",
  "key11": "4FXcrxoJRCDKdmrGqu4hTSnLCPZ6EiFQRTTDZEqL9B3cSAPY89jHyD9zkEf5WhRADvp4ixoCY6hF9NqWmTFv7vYC",
  "key12": "3BpkJst6ixsm5d18J5qjLjXKGa1FeiLvP5R6EbeK2e4CGcCr8DaQA81PbP5iaJmsSipMxno3janB6HZML1Ysq8Yo",
  "key13": "4xFAaTe2yF4TeEUfKZH8qy9Mkr9yfPHxMQy7cCce59cjakxvzZhvVTJNRX1cvfiZ5DVGzyAdDcBJihbQ6QYqkrrq",
  "key14": "4YmGD1Uz47MV6oMsoJS3GfBLmBD78Cgd9dwGzMtc7WGgF1DXCfNAqBJdDmyRKisk91CB4zihdPoMZWFG8heEa6Ro",
  "key15": "2jLBWKWcazKEJgfjuU2T2NCMU6ojfcEMU7m1kfcWFqktVmgvkL7CJ9aPbYPkBUbZU1arWRVef3Q9nJMTTtUPMa96",
  "key16": "3BTeCViBu9z5f5dnX9Cv15icMmwysk5MFyJYFFCVnhgAeQTt3rr7gVK1KxNNFwJsbs4e3p4vFVEEcZ8QTh4A2STZ",
  "key17": "4Rej6pEXPyqoGoT2Nw9NktT5NVeDTE5HMt7eSsG8niv7U55jMYSM9nU3vUVvDHQVGXvNSps7YUZz8w8VvnE9RFEV",
  "key18": "NngPbRN1PJ1jn5Wi6v9yzcg9F3YpXDS1jok6vSQt11FeYowDc2K6DxvvddXxEEcz5UA4f1qeuURFaSRL9xpREUL",
  "key19": "4UobDBx83RMAe5FEtN8w3riBxtC2YtYPW86GZX6D3oB8thPVMH4oUVFBf6LTDDtWc6V9dXyXdpcQT9Crrpdjo4ZZ",
  "key20": "5CPBsJNcnYigGj2P3DCvvickfMEZSHggUrbs2rARPsuUpVV4C28LhPruAVQN77XHRxR7LUiVsE6mmnLsZ7nUVB4i",
  "key21": "5Yu5phaTV3HsihxBGEuWAaeqmZ6dCNWfbC2o7gpLzACR3YMAoMep7LMK5wXTjw6esuEt9usdGNghTFmrrYq5okjS",
  "key22": "mtFfk5ooScCmupuxH4ztNRPDAuLk2BzCYWbDLFY1ydbDSNHbVk1xrXAaHnAoLYh98jk9Z5ooXHzWhUJAd4jh1H4",
  "key23": "4dSS3HxNv5GRX5UbTrdHLUo8KCARVehtZe72g2vZFuGCEwVamUexARAmqGB8rtxHDoEbXDGoaMU7zCNpNFnVHday",
  "key24": "KVUJUG4GTVht7v8E78eUShUtF1bmBm6QF97U4a6KwLJaR5SQJDUrphp555xCKmr7K8YVRL8MAuLoqtnMzL7RyCt",
  "key25": "3yRDussz7oGeEDHfiWhvUEJ1d3HcLAz8SuxGW47LQYmTxvojb8eTcEkVMB5jmsp7Wea3NJsP2TcuBYGo3Mr1ZpHj",
  "key26": "NFQLuyEJEQ9Mj3haMfo4pTr72Ac2ozWBMaL92TeQ2i6DfT5cZERLxejNnNrjs79i9jPu8rc3ujyz7e48H5cjztM",
  "key27": "3DAWwiXNKzJFMbZm8GCVVFGAVuRDxosS9Sp1wXFPePgLAPUPvD6qw3eXMLYyFBt9ugAWzRjqx4bJTcTSY9AEgjgN",
  "key28": "3ugqSF8ovRJtVtRp5X61bZ8z7W9Hq5WbrkNrtwGvZ1Ct1PvJc6ffXsM653tAfyq3Lafhvjakinbxu2zJ5i5uDSko",
  "key29": "KGWAX1hhRBUKtgJkApTyZM6yfyBsnNPL9Weg3uVXDqDH2qXpTsZUEHXTzzeyYdNYfM4YhQsNxCeD45YJgJu7qme",
  "key30": "22aLBFs7yb7QJW1tzMABtm26poNgCJwpB59ioAKG1Sgmpp59jpytZNBwZPgK18HWq4pk9uappovqU8QVKRAWhccx",
  "key31": "j9bHZ9skcSEUS3yCZPXkybhNFj4fcqu4w5HJrLqoPoqtUFBu7nwsAU3jaLCkpvXtQvTtTPuuszkTgSiLfKVu1An",
  "key32": "qjfoyRgpnTfXNceR3fwGuGmDXsmbaQV2dxBFzrcepBGDcVY7JbsYwFvyn9wihJajijsCYtbthmhZyfPjVDs5QK1",
  "key33": "3uCfMbQvKVSaZXe6yvqzbCxeQEGwMHG7kH9ipsyP21y2ufBEkWzSpJdiJw5FYdDuzCwPKnbJHfKyZPY3ybLrEvuG",
  "key34": "4XZxgGGKjojxcxC6zLRXTDMiqnyj9XGVrx5xM8p4qnYFPFEYi9AY6UvKpRLs4tiaNhpMxoQQRu3QSstDn8Sw6HBD",
  "key35": "3CDxBxVChh1uEFo3PUhnLo2Ngb8A6uG8PTh5RXqyeE2NbEHHDSdna6P7X6yzGpseQDCzw3ohaRZGZHjnabaWs9Bm",
  "key36": "TLFDcjebzxcPr3WgAqJzUqF99KQKeWUy3CYJejJ4m6GMbkey6DekEzdFstjeZatDb26g2ZYjSpmmDEz44NoEBN8",
  "key37": "24rHjkLz2VGBfEsfZVE7t8XavZxZdT743jV8ZVvenkN2RnpHn97SFkd6GFWWddoWJKPHtsdYLXHWaNNEPjbCNVWB",
  "key38": "2EBFzTmxyhZrDoidWANVBigqRwDPRVYUAYXnVNwWGhg89cE4Y7JELyY3dqJBwKW1JvfXYSpcCQYyESJHyh7VPsKx",
  "key39": "2N58uZwyPgrj262zS4pTD3K7kcXia7hNCNPcncUeuzz4aeYLrxTthitWivm5fyJZFbLVN2K73fzP5YRBGwtQPevo",
  "key40": "3J5aFFyembZbHKEBPkAQKFSmt937M2KysBfAhamWFKzo6Sm22sxwAAzYAuTiJPA4nk854p3JHepWTEbBrvFEdeiX",
  "key41": "1qVh9U2yVzLPo18W16CfVjWvRuQC8fYiS3kmcgogQdX5v3nUNnvB7JwSwYgYKCXfvfL5f4wFh7VxQgVFgcbdoQm",
  "key42": "2xFRjtXK88r7jnqgg6ZKSKPDQUDVvmqXR1QcL8S5rrDBMvhyhM7ogyJPguBcRgKny1frfA6DwADdayDj89dWXok2",
  "key43": "GuXkYSDXXvXGURVAR831Jm18zEziZ67Amu7vju1Jtb2kRPj5uzAishfzSMQqo8fejmXxRTwhT4yAvgu5MoeKrJ5",
  "key44": "q2JdRchNAv9NuqKJF2WqKaoCr84hPLqiifMbypz3u5owrUzVJYsefz8CgGU1KMNZ9xxVhD2KyZnLNTjxSfteqeP",
  "key45": "65yCFxLbqoCAp4geijnpPGfPA98qQiRYk7f2gUrhitMuRjKu8upRhhNtwNHMnRYckyvDpJSsLRXWU72M4rE4eQzU",
  "key46": "4F4GySQtzG9ZdiiWQutPDih2fwfMVYWVaP5MCGCARFmNLyf7nS6NFGFZoUScv7hSCK4QFv4pRdbXW5jJSsJMDm7b",
  "key47": "44y6Y42diagWvXhyRcdTEqPwFUJG7wscyKKmBhYG9e76MQyXTH8e986qRoZJUgoVKEVoRgGHZxSVy199jne4QvdC",
  "key48": "21QgFX1KRhSZqoq1siNZjfQ1FAcUm5EMNHaG2N7zhHhA6AyEjTqAg7pH6TdkZ3X4uDsDi7yqkqzH5pXQ3Kyi1TBk"
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
