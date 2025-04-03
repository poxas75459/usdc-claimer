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
    "514ekuGgQPkN3Bbk2mPZGPjLhPA9Pw7vLkitw9GJywn2NUrAMJfYFcD3NocBsPoprrqyL8CP4q642kSJozex2hGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTmJRbNWfTCsUkzK6CjrKPW4Rkd33DJGra4zMh1zzqfPiWY86giSonDwujm14voyBUJYeW4wnYh1g5QZmfF95ML",
  "key1": "JyMBmFDR1yhrTXyWFdszqEbrJA1m7bZczzQoC2AQ2i8WMsMexo5MAmBvMZMagjNFhxWdRFbxL9vGuo5ScPSs6Ar",
  "key2": "5ceT1DXFxv5DT3SfnV3x6wBL9iCt6sXqBWAaRSD6zJdYmryNGMnxTo2XmRfR4rMPPdWJEJRh9mwkYxkCkdreSaR1",
  "key3": "2uaZtiCfajY77pVfW6p6jJBiC2h8S5L8LSzzUewKQ39UiPfAkkycRrH4EiYCcHoDTqGndGqr9fLZVnmyXomRrtaZ",
  "key4": "4FVpJgfCs2gGR8ax7QeKPBhkkgmEjtwvfaAjUkFzYPPqBunXjusX6DjTHb3D6jiWSrMd8sdSyobBcK43nKT8T4wY",
  "key5": "5g7RuRLy2jzS9rYDthXH5sNgkTkzWpj7RFhcUeP7Hqkn2sbirpgNgXHJPJDkJYJn7djQnYraBAi61q6SwrHzdqTY",
  "key6": "5KWdaJE7h1Lo1CNLiWB1seBT3VPBtTrpBombqUQcvJgVUeQXqVRUP5aKLCYow8gRiBD3Hai7kxUAQvTLiMs4LEre",
  "key7": "121egTamx2qnGZkA4795qGqkHaLWmMgxHXCCyZscq49heqma4UAovkeW9cd5sBVJieFAeAo1ZBHJ1UDM7LY1UdtK",
  "key8": "4EYVQcXQVTJmexmZXPVRvkx3NmnqiVGAcuzcn6A8wethEn7FtMneQY8wYNJQXdFrnf93MM3xWPifmNccLyVXF6ao",
  "key9": "4NcrwKboJvAqFQScDprfdimns5sekVwUCZ1ovWGY72Pfa94BJ6PULSRsYW9MvGumiTpCDXNr2dP7fckHTPoUkJMD",
  "key10": "2dXeQrRDHnvUUtnzdSVTrSG7CKmqWbjUVmNG2d9gpxbcTME6QDq7yhL6x3kojREBSEN58o94pDwAqVUgADKNaEPc",
  "key11": "cpyP2FdQcEjNrRvPWm8iXDCKNABgPRPQP1BAZorbjqabqmJCdB2VKRnXWc2AsPtqzYbVTfnLu6TNeLeNJGa4tjn",
  "key12": "zKmbhXYYay6xCN1c36QvreNZPB214N9ZNsGkBtioZ171huvRTd4sVDrdN3hGzL18TSusABudkwgqAeeFj2b2GVx",
  "key13": "45QpUWE2jnz6jZpnA5a1nuy36AQTWCA3L9YDYPtqjPyzzNPT21ngYNURQF37vr4s5RnQZd3vf8i7Kk6xBKWZJtPE",
  "key14": "66stcwKdavxeCVV18yBCCYhApk4tgjN5FerZdteu5v2kosF3xmBgJmuKWd4swoGKdMnRZbC3dsPzgRztrJXjUcDP",
  "key15": "hTEsoHiosJC3SfyEgc7rUGhps8J15XbBHXUJvHwPSvQo8dhiNSSaDeScGWavfnyuj8496NUQJm17d8UzviFdHDT",
  "key16": "rijKvcNDEDjkvwqXh8vABDsvRAsEhshusDQizcQFXGzXJBchPuuhGYjsQWtJXjtLK6a85NGyeNrLWQJ6axAWFGQ",
  "key17": "5VzFVYq968oCD1d8jB5yy4Dcd3q1np78T72gFB5zrodzszu7APeW15YkjWVtvKuwUEmLtrT1GWH24KGT9RSnP6U9",
  "key18": "4H7LHMf22EMLXrHHHh417jzBXYkyCvpiDLBEx6LXQ3ffWGbx46dzdbDD3tTXRknx7PxfWfFXaELx6iBQx69TYk4Z",
  "key19": "31PJnqg3sbkrAUMe5ucokBghEgWeajVw3fpB8atQsqhpU6W81vorruTxzg8t1CD6z6k1fFQPgp8qaxYtxxSEetb9",
  "key20": "4o9sv9w3vtvyAmQRn5EPdTn7BhXtzb9fH7WUFLfLVzNi6DpTHYrxfNZhjYp3tWtxm1BWqGiL3fi3SnwMweDxkKbM",
  "key21": "bcW66DAWJE2TNELUaz1ufsB1YuNjoJpXsZeZKDzkhvis7F2euhLpJVF2R3N7DYeyaVoXzF7KABp9WReCKCCpZC2",
  "key22": "41wge8x4UsnS3tKfewDtW6YNxAgJQvtB4CfrrvosWm5tXCLwMdrrvFmhXUe6QePaWB2oVRDMExKfBTCY3hvJUAi6",
  "key23": "422WEY8Be7tRmpoArkjXczdKmsMJjnmDtMKD1epd4yksxYZZvH4q4puktcFsfpRFfupbWz2WAF2tW9mzo6Sazsro",
  "key24": "2NuKzkS8PkXouxMV3HZcTjxTP9USZBCE7FggTDo2Y44XwtxCNmHbxdV8R7JR3S4Ph12kb2ktQoGuQsAuNWYCqFPc",
  "key25": "4iLYpd7pVsVNxzazbzRTrX9SVMbXSdsjuaZiBmS8EnQozwesAg6Fr7jgbDkesVCAuGnJfwra7qGBegjkwk796XwW",
  "key26": "2CfEFFFZUv2FCawfQo6s9gUfyG2ZbCHjnsEsEfL34dBKqAKBzwFksmKdgGHpK7J8aNpSykwVVKDiSEzfTM112onA",
  "key27": "2Fb7hwJCg3JaK72mq2MyXccw2bzRYKt7TuqSNcQp9JFsNgJm9imHCgpBQ4wHnwyEfyyEf8221D3daTbXrsYcT4Hm",
  "key28": "5o69ihxQktVDb24soiCDhWzEpifXNkQ8dNbZZ7zMdXXRSEwuqQSYnJbjZ2r1ZzrsaAPiAoZxhazrhcTJbXgYymtQ",
  "key29": "2f4MUzg9voo93g8pU59bqq9gcn6ZRLwHzbayMq18g66MUzwpGSe2btQQavqhgGCeH5kupQJayDMA5FZDeehqnUsL",
  "key30": "5eh5XqkJKfiiFBPejVqndeoBTc6DqzqK83tnRmqPXVcMj3n3jVh231DngL5P7mQbe3gv2vrdHyFZcFmRQHzez3Wc",
  "key31": "2BxiRdgMbaCNLYBLDbHshBT4r2j5V9PEs1S5joVC6g23FxvDUmVxtbs7v21bjHkVaV9WPmRNPceg2QTSDRrpQwmc",
  "key32": "NQscwpqdpWnn1uTA4C6eCKUc66ATT3WMdGKusGpskdLgS1QY5j1pPHQxKZKndLm3yTLUhn9sp2pZ5DXLoHRtCxX",
  "key33": "5qcQPRaZeQUGNE3jvvuRyzMWDL4u65H25ovjCXiNUa3Ujz8AxdXH5erLWaR7QXFV3Wa3xW2NB9RE4vgGVo96XpB4",
  "key34": "2oBAsWTA5bXrqeNPb4JYTqzunfGBYrPCfknJBbtfV8bzMSTMs9mn2Cw3X1ZVf3mGvWbagoeKgjPASSZPE5zhK3hP"
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
