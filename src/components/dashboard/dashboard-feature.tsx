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
    "37Sem1gUdCQzvVBXnjKEZM58gpriYuoGpxgqepLjgHJ1U9FcsZW4CNdZNvoTPpGo1g7mEiQcbrwzz4k6AF6TP4qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5cPxZBbtLvDzpHzPsRCW3WgsUXYqf3xXsgkbxW9rm3mjZAHyZLeoFt1YDtX1THBn1FMCZZwthQ9dhbzFMWzFJm",
  "key1": "2Vjx3DdbR8Af4AqR3kfgXKw6NvYF4AhQmb13YJa3tCuPRrSXt3TH3FPgVkr2vU9EKjYAvL9XEsPCTc77bgA99h4x",
  "key2": "2HJVm94CVstoPE68EFHCquRYfnqj8wCNp9EFv2Q2jgViQrnSJcS8UUR1nTnQ6o8yh2xeXmbibLVn9SfJLUmhLcpS",
  "key3": "5hA2EVUhd5jCwazjC1KJv8zHSLSvEpFRgC9bvQDATBcZHDpqxwpAW3V6bPScYUZBjrr1CXcVeEvrjMLyPbHmUXxX",
  "key4": "46QhhwS42iiGainBhZ92eRNMGNh9Q7U8UcyyckQqZKx6V8V4d6xZBtShMyH5so1hfq2csTomWSsFZxwHkYVeuQJh",
  "key5": "2qmFGqPUiHd4WRacEU3o672GHc15WcmG5kLW9EGNmoDahWhiY6ft8oUywqzWYcE3cifKbcAT8c2BQh8gJ5bYcCfG",
  "key6": "2JEh19JZndwzNTJECpFEkL3dEdhZBwqGAMgBiyQuY6n9ZT5MaUDXVTk8uDKiZR8U4ABGRQxvcagM6mcQeiJAzaaY",
  "key7": "5tWk6bBi7kdnnb3Nwc5MxzxGevi29njRGk4AZjea69StSbPcgtRn6yH4XfWkeqVecAdsPjBwpr32dnCG5bf9qaYR",
  "key8": "Ycg5AUTQrDjoL44JMHHBoCeKxc5mNQG3NKWhm7fYkDp4nrGGvU4f2W8janFnsjzcQay4pri3ggJPHGXPNxViugd",
  "key9": "5qEZDXXoTRjjcGYMgYxVRd2uDoVqkVC86kWum8Y8rGE8Ubd9Tu8vUHYsUYa7u8R8pV9ukwCdfsfh65phu3vZK12B",
  "key10": "33KCDp3vnLRPdE8pTXa2DiJPVnJbTKX4BHmVcyXSAsK8wQb9zbeWW7syV2J1V7bC14HvMjCQEyBJpo1ohg5rUEFU",
  "key11": "53MJnaY6jLnfeyyQ5jL7t1hAEZiaPpBFHjFn8SGKQuqoMMxTcoeJpj35JjfBYD149MzRUU618vdx7D7iUYfLWiT9",
  "key12": "5HpL6N7RUCt8F5UaAccWffZzMcRW5zUMA4B3f7LruiecrjBY2mKWmkMqKvSrBFTgWL7tcmABrbRjLKksxg3QEJC8",
  "key13": "2GgrwBYRyE7uMkfBiGrkoMsgvvEBggAsKGJxBTDxEoRSrvG4ngvNAoZeM3u7zYHQFWStSUiFbmiM9gWrAaN8cSiX",
  "key14": "39CM6GAEPAum4V2pkt22FzwSGmogjPaUEhA7NaAxT72FDD6LeKCsN9cVabsK13PqP8Qzorhu7yzeuUgSpCV5CmqK",
  "key15": "2XYqxEeQjJt2PqMCu1wKAGEpJh61bHXw2sacJTMimKmSSuDaMVS8fiZtZvuzqNwEUCCTwB69FFSSpinLRRpC7qbk",
  "key16": "M5xGSFVMUWJ5QZLHL8mdEjcpTzzqXHVBHWPZa9UU2qwmbfGRas556PphncY5D3hEj8hwYMWVdGyiBgkw2ZUps4o",
  "key17": "3PRxVU1HRyX331PRj9o7FCUpa1E7696z1sJZrdZATBUjNditaAeMhUED5sdGreZa7biCVu9qHxaqWBedWj2wgyUK",
  "key18": "41H3SaxNhWRNKBJmV8URdTERazgrho87dpZDAiU7tDjMSMjRfuG6mZM2SNMqVDckBevDJQQC1TrN8pM9Kr6dKngZ",
  "key19": "67V6FeTuSq8d2q7E2vdsw54QN8r3dGVREV81nVd7ZbHq63mWW9uAvJbdvBmm8LkGdyzfVpjyt7bTqPJo1qqr2xHh",
  "key20": "5iCNa379aNpi5ggoVRtxZTNDRUDkTaqvbyc3Uan5GhFnxS4s5afBW5HD1FHdqobYDTygHPZamQgJCUwAWT6TXZ2a",
  "key21": "3KmY1LRSnZE54DFuNZEkFosEfHZ7kQbQPtacnvb5Z7kBLfKDKZcbFmSyFX4VdRnd2h4Cz5fZfDLqvMFVF35Vkqmi",
  "key22": "5M7ZLRQ4W3UPptxPgiy9awWCPrfhYB1JqNrmQ7UYX8ddZXhHXghtZRnhrMz7DEmMDxvBVe2mimzaXvwUwnnjzF7h",
  "key23": "b6uNbspHrnQruvddVzkFLEfuep3tanizGueuE8kte3xhPayQjvcRGVBKDh7fMRvWsTzSmnRDNkqhuEjyZG8r1g9",
  "key24": "2gdDDn7aPrH7RwWGWw5moKJGtCq6A8Efj9ur8ZDVi6Nbou4m1RSrxQXAdH13cqK5mfrgSK18Q3vGkeYJN4WvquZM",
  "key25": "ywHsvaaJzmWw7dRhzizxcuZqaWkwRLV7mNgpLbGMEtAxTCspnaH5A2g8vdc9AjzRe7DrJvAmvHB8xa4tNoU5KZs",
  "key26": "3CyWtUsxDud94svdoA3Yzq8DPrCjxnVsSJBz5XY6w1Yscy9XcpLtHPJAfg6awaUsyQCJuBgwEiA5A4aMZgvGeF6c",
  "key27": "3954TgnEsiSGd5yahfCQ25Ss6LeFFdg2Nn9AXXttpdYfVTbLNSe9mg1juDHTyEZ4ViejLw959Heq2GPtXDQXGmSL"
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
