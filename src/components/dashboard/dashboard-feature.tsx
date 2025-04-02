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
    "fk2pqk9tCDTTqgwsRto9QWpmJ9E5T6De4X37fusnFWq917tXnqu3CFYNfD2r46y6ZUUS2K6fXnLeUE8wEcqyQes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjwqvxJopKtv2iByBy7GTV5rGrp6ks5KCDM3HddT6MuoSi3uyPwYsTQ7NcgAUpjEpjZVRFZ2c74tDg7xfRsqVN2",
  "key1": "4hGGpLwBkedDCUU9aDQfPNZWDTNX5zNXzkgDQCrhcNa5HBFoqyNSJqTZ4oLQGNxvuXtmiPc6EuLoux4PwB8ohCe5",
  "key2": "2umsQ1ZTRvooKBB5xiA4FQPA38N2RK3ZcDf2UCDC6tnLG5TBJVRagjkWRd9Yu7ucHSgWVbhuc8KUXXPi373nvu69",
  "key3": "2XzSmTVX1m6BrvVffGyJzUksXqi6WqorYwCYuxZNoGR1TRKKTMDehJxXH4AVM1mPjTCnBiFzjgW7SsXPYHC9HajG",
  "key4": "5geNwSZQSDip73344tSL44Zon75ymVkVMGUKryfAsEZU2n8qDB5vTSFUXQ2n3LusRq1z5mjJxSMJpXeY88RsR3as",
  "key5": "2oufEHXuVvtrvLjFefjYZP9GUDsfFcofup3PwSq6ata5hCJ41biQaunnUezRGNmVSLkENAu7RqMt8aQknk2Bus8X",
  "key6": "4LP4HdbuTa99BdyBDwpQ5TpP7Nmzfff5eyPDe7ofzA84EUQ5mEqzFWdLswPS3fAPGwxnVFsZekde1Ci1Fzb6mghF",
  "key7": "KUBwAgZam5T9BxDNXEDL5CFaEdZFvrSU9da7EPidABR2SYe56jjCHVSmHRHN2wC62mpKXamwdaKCqMCNFkEXpsV",
  "key8": "3TFKxEbjTvZPhYSDAEpCLYTVUF7CvfCYGhbe3HqX1GrF8xgwRtr8Bde5fNkkPa51WdSEVQGU5NGjLuT8FPtyDP8t",
  "key9": "4JQ1MGRtRwFtPJGThXMtJHo3NpG3H2SZmkqx4VGg5YLWPTiRfNzzE4onXE2CnFSkVsgKsGjDY7RfVuYpyK2Axbxj",
  "key10": "33YceCZwJciw3ayBAZYctRCERU6gMRroqCh1fNQUf4cbWjVCpej3HDDLf1c9X3vFJSmcJmvNrbbFX5jqukGSabi6",
  "key11": "2EpqdXbJnSfZVzHUECqu4nxurNT7cMRBcCoK1gUcUdXcvTAEnq9MAbQC4pGVSvM4PMUpyihxkEB6noiztz1JAzEF",
  "key12": "22pgUFLDx9J9tuczfRkjom8jZzbhaert3wxdKRkw8MfJnAbvRHJxjSRKFMAbuTgGtsV9eoKiFeBF8aujkT2DAQo1",
  "key13": "4wZ5w92unVeyqAKtJu5ujez1xfM9VTQUG9uV9Sf1HbvpPLUaUW5tuKZ2J1Nhxqp49G3WT3D8EgDuZfJNH5gsFome",
  "key14": "59uWJhsFG3ZGNCccBDDscsBaKzwiGLUPbgrRPgQKyXnNEtGudN84fzBdwjaSGpuCyTPhn9Zh9a2QzG58sUnMtkb8",
  "key15": "3aKxDg9FME93fspSveXmuyV7cGrwCR9CDoLk5L54dSqP9QgabvPQhM6pZXerSQ3k5fFhv3NB7mhbW1NeBsKGUHMY",
  "key16": "4xwr77rz3R5c63riMw5vHWcNXV7kpWmSLTBZvGj39NXXKw8N5NjTyuGPzQRx1FWpqtPucrp1dZYE4CYVoC7mig1H",
  "key17": "4vmN4Z5iDSRuNaN2xT9YFWUSrsjGfikdSmJ5JzJDSeY8F4d3tTqoTAxX4o8b1tvRVXzqcu1moNqpX5qmTLhS5w4t",
  "key18": "pFP9ZPzG8dyMv4pLnJEXvNYoDqpEsneahLtEX6t7cVJDmRyz7VJ458JavaHvEMYmWmnpbpeB6tdMQiHr6L9Fq4q",
  "key19": "4gLWMwftVemC2pt5vNgrWU6xcGN4HzgMwgoGbQKCW3uC6macLACH7aMnuxLPCX4eGDDHBRb94KxSbATecN9iysjG",
  "key20": "uk3ow6N86QFTDguMSsDCpHoAyAZmtcyMCFBEx1R3MDN5xkWnhCRwNJQn7EtsLZLWoAwLDJgfxofHJVeH8HS8Gy8",
  "key21": "aa9G5zzR1Ypwtt41L3zVcXp7R3tSrF1pXYxDxcSmxhTs1Mbvbsa4mmLggvAqkjtVX5s6jprnePE5a2yUUs9aEK3",
  "key22": "5esFJ656THUcq6BPKtm2uhGSnEZE3eJzA3yQxH6nbwLJRtLuXgjETjfC93msfp1roZ2tQ7LmEAw6W9fcfzf7LpjW",
  "key23": "5fBdYuaKwHUgrdiv4PAie7cwC9MfWA2NNirRHY4J8ELabiRFowBUMrR72BZc8umC4oy87aNK1o3bzdyZPXeXfHjP",
  "key24": "4NQ4iZsRcRy9vvcA8sqUUYANWXh5cNb6fM13pmnqCEuW3GwY7CLP4Mt6EsoorTPRJuQGuk21wqxtf49H7w8kM92P",
  "key25": "2ayHKMffwJ7pZwhXrEF9uWXp1xJqCvid43tBusFDSEd35qAYay16tXPeMP2kpVAwCibcUBvwTpjwc46vjs5jaaxA",
  "key26": "4zsYXbgjcegX3XH5ytBWEUGkapSyg6zvwn7iGAn2cMSKLvKviipFJTQr8AGZFCLQbjwxumwnrVTBiBhRMst8RvSA",
  "key27": "29HbeB1pcbNw699aUwgoh55jgpiRcVsdSj1ie8tG4Cvv52FWfndbGDw4RsnT2E8YWRnE9xCHh9w61iP5RjX4St7D",
  "key28": "2w6WjPNBWHhZifM8wzHsv1zWatfWoUpzpGCj8DWo36pdtMCZB7BUMyrG1PHosnCxdKsdRfVhNscSgp2x72H54SD2",
  "key29": "35goJkQEerWJwxse5T8Qx8d8qyPtNfajY6NKXJpG7mK3HALKBDxZqf4HVv8ih5x4sQe3vLgRgfnXNxtz8rx2ewMW",
  "key30": "2xDrJ23K6HSePbmgGhHqPYpVbmwsM1ZWoMfr89maea9vLQv36TS3K4WfJysLVqXcjg89StJzgtpmRYdYycbM32bU",
  "key31": "2U7VjBE7sX8V9cEZScf8McdbJPxe2Dg5pKGNgoyhiJ9AxbJnoZNJzYf4Vr15pfJMeckWnGjPvJPptcjXeU4Y1onj",
  "key32": "4KKvW4nKXKKbcBZLkHNyYHJrWEoHPMTrvyHBrZJnhdkEey1WFR6pZTut3Hn226nNqn45XGh3nXDeHqGo3QGjTj8q",
  "key33": "3ER7mkoXn9SsCDJKPnFqEmSFCbD7ZoMPCLVRFUpsU4bpTSEbWF9ZY3HQUxKhLkVwR2dGHBD4xLgM8eoGeWN4MhJB"
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
