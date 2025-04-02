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
    "2JXzkoctcHLHP2vt4DwZRSry7mA9yUesbLNepLa3HwU7RQcJu8y1kroUNZNzKZhVSDevEM6NmgNoNEfZnTKigkBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39696tgKA8HkMguPsHF1TVoSyHmzfHu9X3W9Ph5xGtuCCnWM6LuBbECTdjBKazFKKt4PDdGAmKLLhvLRHLLtzcWW",
  "key1": "4oj4aFz5ivsXHuDwNu4KTBMwSyJYGbP7ee8RTZGfs2dLvmkXr5YMerHRvvQaW5S19XJ4pqM7Y1fEisQ4HA4SBBBg",
  "key2": "7fM2HUpPwaHgJyptLE1CzbqCaLkxEPwXTXJcTt9S1EwTmxxtGpEAjA2PyafiU1PZMXBgkryi81AwRGfNAqtKMQq",
  "key3": "ja1XwPXiNxZGx8bG3xbFKEpLE2QN9rLrYE6ADKsXYB2TBAr3w3XuCb24ENyvCEaGSfaxGSkxbnkFEtgAgNib4KL",
  "key4": "nuuLUbAqJ9gEFXQtfXxW5rVy93efeAb1y7pvtqFfMuj4Rie5N6Gf1dYVnvwA8xqrDZPjt4mntyYPL7wmShaDMGL",
  "key5": "21rYYxhcrNgLEYNdbzM5XLU37jyDkJj47HkfW7m8zrLfxTzdrtRu71EPgfmD1RXV1W6KTqTrCCHMuWmktasSUk4o",
  "key6": "4NvSJUo6Tw9S318LMf1NuQXCok4S2PQ2UK3A6NGVqmVGaKU5HBpBHWDHdRwhiTZczZgGbrLE5zuC9XAsujHfXRQs",
  "key7": "4u5Ss9ujhcH6u8DyTJTSNmsjf8EiNZzME9WuL4mVsHTrGZRb2TMmaCiEGN7BPb8EJz5GYgkDv7PFXtkrbmZFhSmB",
  "key8": "5CHvLfUQUf8rj4KB9fU3zgTnLzPrsAnctGvJ6H3cQHwCVFKmfVQ3chftPVjz3DzP2WXzfdWWCvzX5MRwd4VJr3Mw",
  "key9": "4RCddbZy89rLWimo7RY8NCe6vFVViFBnaumxcbhnUz439ceFHVMHA7rKQ5RMHquHGY8KWNvNwBvayfau8336Vhho",
  "key10": "5zbZiYEWZB5Kg9Jbg36ZQVFiuNX9tawSrUpKAY5vRKUcAzHEPcgngnXMxYvbtk63QqVvZyh9PeVsp5d3mz6UjMCU",
  "key11": "xXHhTQ6P5DtiWDaXD2qSn2RM6BbiR7WzhUFkkLhuvK3CunGBCvD4WjCrK2EVYSMibWVELEJYGDCYsFq6q9kBbop",
  "key12": "wVE7MaKysnCWgdHc9GyG6TP43WYK2zDVMLpHgRSboSQgrTdZaLjxdKUKnq1d1aqGwvizFhZT2HjaeWtjUoYKoq1",
  "key13": "5mt6PQecsM6BHFDAZEdwW749zh6FzsaC54FhiscjPTfKgCN8QUjrxcEJbRDFr8VM5uRj1UVyn7st7oXcck2GdV6R",
  "key14": "5PUiDd2D5F5dPwPLQG8SL3PxTsePDESg7kEUB9499WsUdnMtfzJdfVefqr5UbKVi2jBhNMQahzeuVwx7WeZdSeM9",
  "key15": "3i5Y9ZR9fmTgua2iZf4GZFdmB6258Q1hrKRs8xFedQ7hmw69MrXLx4g9LaoeFnKgzeaGrEWg8zJVKGXt3yNGnKzJ",
  "key16": "QuGkRSxZFbsz4mFs16v51B9Gud7dogEnDFXbXZpWXCFBz91qcFNFTQ4FyXHPCtBeostsuc2TwXk33tgXQZJVywE",
  "key17": "3wAifDRqDoPC39sph99C8PtJ43VSqhMt5EqYyCyb21u1fV8UZmd6DqsJWDyFLn22xPYFLwxvs8V5XTXZCSTytC2k",
  "key18": "3gaqAEzkNEtuiPDg1JniUCre1DbuDh8Y96icBEfFeKRz1ABJqfVNf4g6yG79RRpswWLtdPjnZdkVrqLNbfXwpxGn",
  "key19": "5vk3Pwrb2aDXwHhZzoKocDN7x8rKzzFuKJA6if66nSU51RBFDNK2Bs5ZKxUi4zW65pYeYDcKhKbHrk5DUgUEHKQW",
  "key20": "J4iLZ8sutfGfH4VR1yzfWnFad75958ZWKFDm27wdq6JNN1zwg7eEwaKyFEqt7pvRKi68jTuK2Vb4vfmPR7UMsbr",
  "key21": "55YePTWh5ohAi46vz6EcWHRfSbZD7gCumDv64DioEhqiPQw2v5G4FqP9XRhRnQnviNGppppEA5TLmXfcawhER3gp",
  "key22": "37bUfupJDXMRjaoo3fSfUXEsbEDZeAT9GtxDP2aPLkzrBVCZn236347NKzfegXo2kTW96BSoAdoMKtK74kVK6e2g",
  "key23": "4hsSxCzTCHDAWuzAXJ7kkf5zTapHTqDXQCwQeyYaAuRQHyvGmJM472c8PL2nsRCYwAqvdFHVjK8CVx2kcFNjCLFU",
  "key24": "3kjyKNZ29LR2hvCXfuac9ytaGkyPqWS64WbZ1BQHkVhkdBsJ3QmXWUwfKejSVfzr6wZnrrLiSuDZLQ4HuszFMFUd",
  "key25": "4h4TVhgdN8p7WwWXZsAccPcEj9FrfW89SDn76nvgvY6347mBJp4C9TujVKyKmvTBhR3TpWsRCdDPxVfTpYYs5G3",
  "key26": "2sPDn7kRkZk4EmLxkidWb5apEPLNXmtEPjF1tXsapyRdaM9v6CAX57J1JwZoCwH2fXeT1gCfcfoRW9ntsBenpXk7",
  "key27": "4NRqJQRCfZBnEZqwMSmwni4vzicuuvDPjiYppPN5yAmb168g6BjbUt2yTojDsL1nnX6EK4P1KjFQgoivasQi4Zok",
  "key28": "4yhxqZVg5BJmw2A4trWTVTxPfZcftCNVe2SFLEQNHoPSHrGiQ2mi6MmNPenmSFGkcBHbkVHmWqRFoesdQG1ptBKh",
  "key29": "5bXV6a8xech82hY13zvoLe2TLiQD3sBpytMz1vaqkUJXk3i1dVuashYYEtMD9GyQ47WPQxBjiEaD4tBrgRxfKSY",
  "key30": "2xMbiy2R5pAmzBmzSoeXg5orNBqT3NhVGqokkFD3mmzf71RGtkA5A84Rn8vgW9DuSzRBxNfCRYFAXJWoDNnM2msy",
  "key31": "juLPxa35fBahRuBVWP8ikEAwYtZpZqBBEEqMpp9Ue3Hpq3KLBCn2g9qfeEd2Acp2nFLcHT3HQWdisFS5HvfQtjK",
  "key32": "LvCtAJJdV89sFF5uYtCRqgSXSpBoNYMsYmEQTktxuZ7hwv88TrRwCAFTrCUQEG2CWMstY4E1FS532qFvAxGnVd8",
  "key33": "5bmm8zRJpdpaDNwda3kvypWqZHFmrPQPVDcRfmjF4WUYz9smrK1hjooy1da2J4P3CDphgyyWvxgDk3SWQSVx51Ua",
  "key34": "4nNBXiWhCsaM3UhAv524NLBPQ2gLssim19skhgzejvymss8gjibsD84AGE8xZdiQAf2g53131irEmurYdXuh917J",
  "key35": "2yPx86PNY4LzfWcY2GGrRwMiVPNq2isyjF16VuNaL3o5B7SEvwdGVBmqZtjQEtJR9MNnxTRE2R9UWsXYjhEzeTbM",
  "key36": "3Q7AYcazJoacWUWRou8hG9CP96CUMhsJ2sG7TrtWNoZ8nvMXsy9ApjfK6cAw3T88UYd9e8iMtcet87hCW1Jx9J7a",
  "key37": "iTRw48aCD8kfQLcVZe7x3FfxN5S3aNy3whs17u9m5JrdKQHk9CtFQisDv6ZafeF8AcpiCheY33o8fFFrtbykYPp",
  "key38": "4B5jK9csCasdyDHVdppUmLdn4ArQknyVjyEnjLjkTfDHcpj8vhU7wdbmB89gsBSHuiRrgQtGm1s3swcoGbbN91FH",
  "key39": "5DKWppbzNKgiCLUKbyvmj4yFmw1THenx13a1UJhjhofiExHNexjy1xTxsS4nDzo3CzWBqaCCvQxxk59B9oupxmfx",
  "key40": "32mE2msssB85hcPQNKKPB2TEUVLrtpswMM1LBPWzMiY2TPyrfMZ4dYUHcYPgZbbk5h2Jg5zRvrQfohW3cy9JM7Ed",
  "key41": "4iaiHb6ShcJmuzYBN5uFG7GYg48QwNdYippjhUaxyGb7cGuNewuPTgw6JzF1MGVB6G1GGgU1ejhBEKwHDqPajRqE",
  "key42": "ZsHD48yyt9Amt7cp9EtReYFBdP44hbSF9N4L8TeB6sypFg4eKFsuvdrq5nMiwFn8ttTymF2VBaJ88WZ5PuQjVti",
  "key43": "5zEKzgutfMLAgMLAfMWfFuGowr5kREH6FieToE1XADBs9qm4PxfxLuGTcm7bV6vFULW8GH7UQfCxads6p7HexJoP",
  "key44": "8JD3qhfwZUTQYD4jdQEVoAsJLjmuvTVxikT3eCEmPSST2BGLESvfhUgA6YVCuLNq5w67nNi5kDLvEawgd3z9QhJ",
  "key45": "5QthVpV7NASeuULngygv9KUnKgS5ardD5UveSaoBpSqbtugS5KWVqUiNN1VFYaszQjjx3ccVEMj5eoDJpkS8gBf9"
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
