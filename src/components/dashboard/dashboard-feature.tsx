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
    "5SNgJajv572Bmc6ZgNEJvGTMbAzAFSDxerGuYACAxbjEShew5TVD4Yfotjx6rxW9xZTAydGpDFehM5MXPata1k2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpFWxo17r4bTABW8S5n2v1fQs54g9q45H2QSHsmio11gywqGzFnaBQtBdtLWWzQyLFUhNoGPLzeMDVVrg6Y2a48",
  "key1": "i2wSeKezNHfcM8yZhQ2KdLU7KzMo1Q91FVB7CEgupH2F5N7sx4wmJS8GUy7jr4JV66u6sNzhzsYEL8WZh31rDbk",
  "key2": "4sdv68tcAaXYiV7zLsx5K3xeeupUW1ChM8PWVyxDz6eWTAF3Ui2yHfN9UMKmuPizAwVbHZoP7nnmsWqWKqwZEk9m",
  "key3": "4VedH5a9JqujceAfkjNHJmY1AP5uhLTfDsFhD7pSGv1zY5oeLmbww9LX58DH69ks6jvsmuJEHChyLtuLA2A6AroF",
  "key4": "4WBj1njUBPPyKjkdGFYrhgi89Xar5opdDoXL6vkXCqJnitGujvkxQtKsn9ughaW3iAZUAhS1AVAHEC1c1rQ16ub2",
  "key5": "2AyorXtJJZL532DucNCcFyhrKvpgJLG2SyArD73wHwsx1jMPVkAy3ni8oZMWo1S8AUNkYy2nPQhTAEecha5MRf56",
  "key6": "65Jifyh5KeQQPZtfSwgxSHekrXRWYD3qvwSGQKbmMoeAWB1grrxoHQ96zogBEc3rYUss4y1gdZH8LvbQXQkTNMCE",
  "key7": "5mukzge35oZLCKT54SqTxcPbd5gsWfCjzt5TjnWWMzBAQXVDJAUGHsN3B3SLgZcf53xZwgXbu8vjyZzpNEp1jjjF",
  "key8": "2hvn5hJMZBNg1RMQDoRaPR2pDTQ5HMWEDgo6thvzpkUPWT8T7GjEoTAa4cL5eshW66v5d9ckXcsvsEHegqWC3Eg5",
  "key9": "uAVphs8VHuwHrfUQdcyHS8qzrDCsDXRHP4dhEQM6uYhc8GykE17nEp1vLphDA38H8JMy76GiJPMqZNefXRijpJS",
  "key10": "4NTJyq6SHYGaAdhjuRnZkUwHfBLV8EqRyP85wxWqnJBmY2nxKTPZhRzQEk5kQRLtnSwCCMZeW1URmjE8Aff4ddCm",
  "key11": "3kT2hj4khgb9KTJMZn4Emi5XMBUxgTFxfCd84BCmXJfZAF4C8wkVX4h3HFoxexqbL8rds9vc7cu6BFMGp1d88tzk",
  "key12": "4ACVpKESCijHbgm5GvuQpBFi82ZCXAGVRg7tb84Qz8gutF6M37arLrW4GbU4EC6MCS2pfZBS7CiZqjSBD64UmQFA",
  "key13": "5AWkcQ6t2CJXn3Sc3ffjoisHFy5uKNfupARrkHN5kSnZxudj6G1rVHQE1JFZLinE2qvHwg6ak7cW53SfKTqjHY2E",
  "key14": "4tGsRGUEFRksxNZBJ8QsvMv8oqg3kSGVvAofmXJ6k41ZZix8nj2KC6RskEYZmsy4io4yzgGKygnpRrfTz9qc6t5y",
  "key15": "5EPpCwkYsExN77yH4sy5M2txBmHVcbe6d8jc6ucna2JjFXErQViUEvMxSKQC3HQDKz9jTqyTU6mx4rtRPYbmNiqh",
  "key16": "2gChSE6TV2YueGZenJEqxXGyMmpN6atfALCGyyudqsgNgJf6veUYwNKo1NvpUk5nw4fakpAfPhaSFU48P1W62ZY9",
  "key17": "56p6SNTTeEVKoiS6QEUhTnCW4HEoLos8oSzryip6bbJWVqKp8HmaK3ftQu3TCA6NToc72p3JCNihsNrMsWbpBzjZ",
  "key18": "51ZnLMwmhetCPJHjkHT5bohKNjDNQzskK6sNWcgS8k6hkVVnwsFvTU37Zmn1TpK6kDBaYsd3F8kMuDBUFSG4vdzE",
  "key19": "3wScjuGjRUGakg77Ao48bhqsyt43HJSDXAMRf5JKmSs96GyEDrB4rQRxa2Bh5T29SUsyW4NtTvkxd5dShPDsPLF6",
  "key20": "5oMSfGuqcLu4owNTA7PQJj2pmCEqBmvrRqSXuVQ66LQPuxYYxYmfYQNeSQCUoV2KcgMSTE1nXkAtXYLVrico9YDa",
  "key21": "4hSReUPw6wB6nNXdTARXgbG8WnAicbWmtJEsbub4aWYvaCRC2znGDUqmyNkJoQqi6zc7P98eofoqujtT51qGy5YZ",
  "key22": "27CXmuXfYbz2rA6LEmiXmQ8wrfQE2VZiLdz3kJYeA1Tsgocfsr5CsEv2iKProfMgaJzXWbQTme1nj7wc63qugCLu",
  "key23": "528ND8wgF7xRvUA3eGW6Mf1p8p4paMNw27pMBYuJevUD2q1oFgMPbsYh3fmWwdrdxEWN4ZBbbCx1Dy1WjMdp34cw",
  "key24": "5XzFxiNrYkpLVXgEt3GD5G5Boied92B51FvTjqk78e3YghePWofzLYt6rKsaaQYuJjzmXaPFHeBGcsZ8wiCLgMVZ",
  "key25": "3uyWAch1NmgsL3jrxfpHz3Jmjwqu9wnYt34XMe5zuhXsPuP2RWdQXBQsfZgeMjvNFjwjQCom5jpebUbS4Amo6hWe",
  "key26": "62DMPVmXcDmTdmddznhSLSd87A5fn4mE5h6jcFeFLmMC5D9UYowAWQ2oc5HZx5dt1CzWtTYpUWQRUc4iaUC2BnWd",
  "key27": "5xSsPvvYiBm1uBSGFbMCQP27vqA4BTzFKWZkiHqQhzyzskEHBkEH2Bpdd58Nh7J2BQDuKhDY96GrWv86dhRsHK6q",
  "key28": "5sXdZhnpjbJjEuN521fuCtqPqhhwhtpFXn4WC9HL3iae1iBi2jajKxbgMs8cQWefmA4DZTbtZb9fdy5SxnYRduve",
  "key29": "4dg5B2ixBPZkzJKBjWSMYS56u13N3ZMai2JJ7vh1vBwLv644qzao4aRhuassPg1LpbsdPYhXsWDSStAYbLA7w6Eh",
  "key30": "5cJRrF6AsFxgPXeMHqB4UGC8ooYLp5Egm8bLiT53f9t4AbpyZ9wr7BK9qy4iRWBXeCCDMsyebHzg6m9uwFVvZAnT",
  "key31": "3fNMjc63t3y26FwxNxvR7HgYmFgEyPeSLhRWBZgt3TA9W8xS1aA24bJqbBQst3REcc5pAHwhCJLiJwd9fVwavN2a",
  "key32": "128XVxE6qDtAgeiNy3LDzK9u2Jc93xEMnPzYXHm9LzxmioKEWdVRep8p6j3NxzuK9r4U3yWPfhYb8owNRjcUuPCZ",
  "key33": "2XNQFaGC5vWs9BR7wMhg6BqVbrXe2anGcDvhtn3siX48tLowTBn4qrVMPDLC3J9hEKLQ2VwioQ5hBJA8ykXcm6na",
  "key34": "59MEddGwRwtSAb5oLcJP9hKGGoV1LjFW1CZT3yCFQNLsG7zFNwxmhVLneCMBn9TS5VuHe6TqMRczAt6839T1ngar",
  "key35": "24yCnVLEFeNCG3JwT2bnG6UVP19pyhPUpM4mUGAb9MwBSPWAySv57dTgQr8TQwntC16pK5kLidwe8vx39ARgcng8",
  "key36": "36Q4remF5KP12NU2MvkvyXQCs9Ejuvj5YqxgpogfRDokja3C5FJYD7KfCecAhV5SxSUZ4UXmraY9JGyU6mqvs6Un",
  "key37": "tQdcxc3cm1kPW9w1mXxLfrJRAPQvPyjgMrQomHpicqndrG9YuHZ9a9wUSgfDuQmpqeMaRMSsQnLwZ8abJZiqtW2",
  "key38": "3d82Rqwshctix8VbfnQPutDsFY1wT8GAPG9M7ndBSEWuvMidLxSqGtCuGPiqh8n69jo9447PcxjxbsKXrXCAWkFt"
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
