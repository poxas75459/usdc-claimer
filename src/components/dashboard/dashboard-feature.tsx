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
    "3yHYKveeztmoNMiJ8WqSeSLsKzrJTbJNHzqqhWNQcwCnRJa4kd1pLKU8u2gjozvY6nuwQDbipEFHMSyiQhcaG1uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gydLNurXpxQkdL6rkhh24W9RTDR8dYGweeM4sf89eCRrM5rAS5BfUfiCx1rs4pT46feptKXL3m5qeF5x697MHSN",
  "key1": "66yseoXgUJWEHh8WTPtpu9mFfFFqbFfSMfkXXNghacSBAEa2McsMT8cwSRawyAgsdASpPuMbwULJzKMBiAymNWDS",
  "key2": "3MLonmUtwpXBiPFnzcWEHESb7woatJ7Z7dt4f1Fy5J5QfqSaZBRiC2Ju1GrD3yR7Ribz6r3JTgYGetFnncvdZrab",
  "key3": "447ptxgCB3cof7GMwvWJhxi2DwAMhmxE1u5hwPkxqf5wAf4RyEpDryshM4Jfhay5De4xxf7nrGnNb3boidHSFbM6",
  "key4": "ghyKE9YtgRbcGnAm4a6yFsYhpKB3gC83Y6vSuiy1zWsJzxm4VR6JfND3rMt7yYxBPNCuEqnPFggGwh5TECt3pfA",
  "key5": "2JanXJfrgksZ6WGYmMWx9sSmWhSxdQjkFeCKLgQmqJEnsdKiNPLEqTDywV3dLscu4KJPpDGV6rhNAfs8bijLQCoe",
  "key6": "4GFhtUYtBa5BtLmZYatDiaka2jyhSV4KJHk1Zw9zk4kB1AwFeEhzfLcB2hqovSb3EDJW5BBmx7mu1ULHDGdkceNb",
  "key7": "4ZqH79efuewYh1iacANwLwDZZbUnjX5tD6d365fGFrMqyu37EAGozBwbDxbxKjbgdR5JKdMQN1zXYxKp3ZQW9Sub",
  "key8": "659CnTeey1oGyocwhXq6WPabmfv5AUmxuCihq87Mfen5cNpHvd8sfEqWQVE5HXNdbLHrTLAb3fNLPt6LEiTPdsgs",
  "key9": "XaPC2hTKK14KKPUQCoEwEGdo7xKp5Riq3Nsr5EAe82DsRrNETPTAofP7m4R46hKhguuUEsnDw5PmHnL4BchTZ2K",
  "key10": "57u9B3AVK7DXuueB6VA4xdZUsS34ZQUnvDsYRkYwh5YDywufLfEwCC58FHZv2Qmm5Vu97RgzqiQDBUyvQTNCSFts",
  "key11": "4UBCJ2dqJDED4TFiMsENkVxyvxgYK9RbcnvZD312kapGvPMRnbEhbhsh2gfxQhDwyXxUBLaEKWDsCwSSnHLDQuCK",
  "key12": "5o3fdiqLZmLnDUVsJKRzp8K25Ui27hX7WgMrRXfa1ydWRLBDxpdz7bfdEcKvqrj8cfFV95ZaPiTXbStiXYe7yZUb",
  "key13": "2CS92M5tKGtxfshLTEmXmzgCcmpP6E5VZckYCqBUJHzuxg9cyVqrUjbLDHjEhFzyKFSuJY2jdoMVD8CuqAmwVqWD",
  "key14": "2iTz7dNxwxVkESTZT89HjVcjaUdf6gSCY59TdqmgRQaG94zDTkFcFMi22moKXSCzq1AWnW4jg2qh4gFeLCq3Lhtp",
  "key15": "3hkm4GJECNMjqjEZJfzjXHnxNJdi9dzEs2qLCXD6t92UwzDMMT52YH8X4PD3upKVXfTgDsJKXieKVbSqG7FF3unS",
  "key16": "2vkCdq3WCxx8hcE3HpHXSSF91Nmx6WVX73o1bYCaBRvaVKknYv784hLbJEmsQSfRQwmcYXs5HrmT227t3bGrMLKB",
  "key17": "27rofnVeu4n267a1qSRiVQ9DJfkiEMdf1VGBtiagDPUs8srB3mhLdeheKu5epMHx8fLjfWJyNH2SdUTYG3aHuv1G",
  "key18": "ARcnVofjA16Gd5WWLg2QuwsgYE9cjgzdQs3psbzPajZQqPRwTZpgwYJ5JWUSCpts8cNuac7sXARsLLWguKfodaj",
  "key19": "3wQitUwWd1znhyZh8q3YJdUG6U63EUd8YxqutTnbxy2PrCEeLyt4XSaeZtG5ndjxuNZAjHQ6XmH9wSC43VfvZVnc",
  "key20": "NJ3MF2fgsz464HFzZhAxMMrCRrPKUhv9peoheoGpVxxcQCkLNUReA2imdteyUnu6qndhVrnwJ1vUjCBiQzcFgd6",
  "key21": "Uww26fkfxVj3FXe3TByjrfftD5MtCWxcWQbA8HXadwRpcbYb5cNAZNZ2gei4MBrDpk9iM5o7m84DPMPRpk2R93f",
  "key22": "2AHLfKxPSTMUW4Eod9DFgFNmoDLgF45CwwAY9abKzEKqE4FnAH9i8oYk5RQQufePetq2dnhZzoFbfSYCCHutU5d",
  "key23": "579xjvWKPTnSNGdE6TR8dPoWzkBwiYVcnWKfXMcagrjxH6m5Qu8gFG63VxvaN8GpSNiL7khqoUb1EDmi4eLSVeRi",
  "key24": "5MKMEpVLTj9ybKvpkMVmiFju9nLo3CjWgEQZuWiPGp9ZtjxPBGjfqxpREHm3D3Gr8AQ1hoexs6Y8mriqbH9Lsviq",
  "key25": "4LtcxZFk8LKbT5F9zs99cCsJxXTeqjerXBgVutgypyLZP6w164o6H48uBj9WQdPz1C8UUkgBH6wfpUuBPEZFZXGM",
  "key26": "4ziAmpXg35c6gvKRubUrdDroovgFuTKwYw2RUY7tfMW2pi85d9HjebRJd1fYuhseYhPPvVYkJtWBHG4U4HL38vPp",
  "key27": "2opmZes7o9tzu2F7HwUSMftsLCMJrW79yVdVasRq1KAzRCi66iEcmLPmiDc4NxTLxBurFsaSFdDtxSvozdPhUozW",
  "key28": "uX8VvceBJXCdmvEWYMQDyZUVkDY3WRvxSYM2yMfuM9qUtQW6y8sFwscfHq4widYSYBeu5f47JrXr8EoP3HbkNhR",
  "key29": "W7YCD2zMdQUPxgYaKuYnQ7pm7uynxhH5QtFUTmQNzEWn2BTAMjkj2mQRfKpuNvcHnZF3mUqmkvWEoG24gxa6uwh",
  "key30": "5HCVL4MtCSpTZ3cNVPjiZUJsUzvUHjxaEufrF9SVdXwHhQphp3EwCYmTPc9nG3ua1LQjYdTEsdmccTbR252ZPYKN",
  "key31": "4j7au31F3Pzjg6dR83mRQxxV5DytZTvwnD8dK9z9HDCQEbKU1RS74rtfp17pTCL3L3vcfFWB4Azryut2FWP71R53",
  "key32": "47Yztro2sCLRPdzT5pHfRXAAD1eUYg5XGiu81M8p4txwq4cRuSX9dCiwxErLBodMFqLL995nuNh8p9VcjxBTKSgH",
  "key33": "35h1PKGwd1Db5JHbSu24yFKD33zaq2eRVRtYgzUxjNKHXTy9sZbPmuGgB2BsLjathfGQL22BPGB8k2bw3FqNNT1J",
  "key34": "37S15pfMbPtoPiGYe56fEiuuYctcVTfixjafwpcmN9Ef5YvVDekNJvW4r7N3FEeyfz1TcG3Cvyyaeqi1FzMS3A58"
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
