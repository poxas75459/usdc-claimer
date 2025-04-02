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
    "611rsRoPyTgXJwFjbncfcFtwy7tqZNVcgke6cUu6bYX7tWDsWXcS8BEDfXauiA8zYjoFtaAsezinZ8uFVLj4ANEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Afhj6VcE1BJevM7UHZ5etHjJu9Ywi9Md3KMg3V5M9xqjqQANrsWiz6JRbQPhgoFjUyTD8eN6C5zyJrg8CXJ83Z",
  "key1": "7V2GhDTMupgVgTBZAZB1htvGYcNmmnJUt8RpS7Yz9VWrRnyQVSaHKdFRVq4HDka18EdZNgutwD3FpWTy1PKfAeM",
  "key2": "3BzXsaAQqtJW6gJ3vZnNR8fdAP4amuqrPnAxkNHojsySmjCQp7TNiDTx9Xv4u3QRggUf7Kw5b7h3giwiLkZfkQLE",
  "key3": "49nH3UhSXQdpN93EoYdHDQdMUNahgKcGVha72aknVxpkc4DxwaNqtXNdnV8piABJeU6CudLtzv8DTEZ3K2bKjib2",
  "key4": "3LncZxAKFa3UCYTUr314SBZB87wQiwqsEJJu3rXXN1prWHFzDJrwxu2CA3ur8dF1fhWbQhFS4Hc1NhitGTf3X9hH",
  "key5": "3ZQsfqM7PycUzJfJX65oaX6q6jqpjZyfcjFMnFJrrteyRzfBa4af52h8FgNgi4dd3EiVGYQVuCizTfgxAfnHE6Gt",
  "key6": "2oSJigELvRkG816ac5FRPzHTRXCTVkH2sWDXx8GuoUWaw5xdiPxeVhxuD8Crrwke1gtXNfJszeYMe4sGZTfpWfsw",
  "key7": "3PLRb5beowpbwgtDUc121xSS8nkkS8eq1u9VTF3CcqNP8X4wF1Bv2kr92ZUqiqXWRNVnkFmjc1UZNEQXrjT1ohoA",
  "key8": "4DUWfeTDcH32PwfMXnHZ1aPsMoLQe1PYsMUCQ6gNLnBkgdTBfRgaEgV12S8YJXmNpoM7juiCMHePwhUaqfRL2euG",
  "key9": "FnfePzdxz7umTdNQFe7yD1tRZ2mGiAvoLFMGbLrGkG9An39Wq25428S8TXCgPjdPmdZKniXfpiRka7p6hfqpwv6",
  "key10": "2ZMEk7x6kNXQjtnZk3NnpuhGqKg3X9spM7sJPR2QozXXSYkVntdb8NjWzDnZYVaVy7AohNm9UCAvvnXtsRMrbsik",
  "key11": "3dBfgwWArpf8fRnNXwiktdHAxMwzF2ZRBWMWnfzWXnQ8P1XAb4jexxxdYWGriVC76fFZiuR7wFDHxiQ7Yvaxs27y",
  "key12": "2HFxkuXHJmVhag1CBwjcmjwKJ75nCE2qG9a2RqojgvHVkf51Pf3jJhgY55o1CdW3nfQZkkfjxkH5axMBtDCyM51w",
  "key13": "3m6F7qM1XoQpKtNUXcx3R1XzXD2Yk9naC5VMa3HekCh7rFtLPRW14hStPepZbzkNnYe2RmpVd2p6Fm6jsMxGUoBJ",
  "key14": "41dHW5MVaGREbvFmcGpbCqwWT6qVEcaV8Rv6QRZz2hEXR7rymAJumWB9Yn44CRbA4mgjemiRVLMcGg9WWYGNgecL",
  "key15": "nGPoRvwYtcmcWnoCiW7jEyuD1892SrtQrz1yuZcnGfabtovsmoFdR3VYFBD3Ef7KCd2MF3ywm1by32wwHtqZHGF",
  "key16": "4adibXxnTBmvLwPDumeXq92PXGFcopsoUVsdAB1mAuJf972pTvVAfLPg3pcdvqRjKE5Pu7p899MEujHpTnQTmKpK",
  "key17": "mDxp2jsNcZGsPpSrU7QiJ2vebTvGvSHfbEmbAEvvtKez8yof6iXLQPAyBCZED8Hju2DNB2qUTwJpjyFTJjU4PZs",
  "key18": "3jwbaYTxksvHQyDqSHFB33hSoasddC2gBF6mg28wLPKvE7fqEzkM9dXByk9d7E6LV9u1bJL1m9guQPu5Sxep8uJz",
  "key19": "5GkVAdyZCKp1bWNmiRVMECNEJjLqfTZ1i9MZSe1wKmHTrwmhJgnRaC2S523sq11Jkwzy6eyDtvycckNe7NqEutdZ",
  "key20": "2Y8FhAfL77ycigTeTJxWJTgyc2jTbsugkN9Yy3VKyvQnu2jchd4DiaUis5Fvi2wjM69o2abLR29SsdztAoMNx8TS",
  "key21": "4btYX3aUa2MLoCAR6mfrshNdMP5EnJCmNrfT6DE87B2v7b4qhSwqA9JeJREF8yFCd5Q3o1j89E6HtZTNK5kbd3QL",
  "key22": "cyyYqjkvr3DPiArc8mDJ99ioyd3oFxFFKujZ15SnW8FRxV5bXvo3D7g1CZoxfmE3ebnGZ8CkLnJPVFWiQaHsJwu",
  "key23": "4GEt5b8eJYSCCVMBKhFpyDxd9zdtePDZmoLf8Bt4tnuJmoNoswvScjfDzfSPLf2bkPnB6cSp43RcvAqSdg7J9nZ8",
  "key24": "2nh4yRpfmrKQsdpUSCyp8m1m3CXkszvrkKNyUwY7uw9YzDpNVhXL4EuAYY5HXjBxFBbEXobvcqTu8Whemjr53jfj",
  "key25": "2XYrVBoR277Gb17nxQKaispgMLbhsRUqG1FXf24ibTh3ZL6Noe6VAU5Joj24hWHdNEiUxga5YCsU9NUGcpTEgWwY",
  "key26": "5wtgwynLy7oBYuaS5rMFFMBewbY5RK5uDTr8awCSaCG4d631t65zae3i8cK8wjz9wC5LTgav6qZ5KdmvzG2pUofb",
  "key27": "29fhV3MacuGyf5gssJTXqy72ChX8MBt3rkxw75Qt8AKVvk8TuGetH354Nt3uUx7b8vXHxKMa5XPVFWgzfvLpxNDA",
  "key28": "RRhKYbNpTWCuUtC4eXzxXGrR3qgYF4xVssrpMGhwrX6aps9zbubiBteo8tD1HQvxnfBazzQmQRZgaPXG41k55Ef",
  "key29": "tSEqKViodUrHJ4kU298336ExBSesVpBFJWMGynfTSj73yq8GhWtjcoWef4zr22o5PPsAy2BtneaFZNa8NFc9Nfd",
  "key30": "5d6uCuju86Pr3idRF6UwZ3QcfTcWiMWVGq8gba5noFs2FgQ2fZvqVch1sX3igN5ymSGf1rPr5n5PtfMXLqnBb8YA",
  "key31": "4xkNBpseRfn7tU8DDnputRvat1Wy9R5byUQXXuMt5SR6R9rJ93gC9wyeYv76QvdukbcqLib7rHegWBA5VqtWQDxm",
  "key32": "27fWpKqHqUtqKm8DdAVeqPPuzeFQZuEUib5WxYtPGcmgtQnG2hu7PszSwbbjW3cyq7WYZVLqaAcXdCEtzbEdeNQH",
  "key33": "3UWv4mU2P7Wp5nxyEF3AwFEvsfEHGwNbx8HGZbQu2wehz9geWMTjxLFL6977zv84PfWJ2zV8JjieaWcsz5EqzZ4C",
  "key34": "qFDreAwnkLV261chMd1awakUGoPWGfrPWgoUaNPBobqv6PsryP6Me61msJo1jqRdNyMJtAvF9HU4AK86ZC42huM",
  "key35": "SdpSuHNHq8CRwbmA7gVGUntiUoZ28x3AVVzotr3MNC9qXenWTFW6W3JAyfP2FdjLacJ65tFKqyN3Zbe9pLtT59o",
  "key36": "4qQSzboy6CVJHkKabKxbowtrzkPH7CdrEwW4dJJcYTBWdfSVXnGfzg6cZs517GAWfx17oXiA2MWZZjfz5Xtkhj7h",
  "key37": "3y877YrwbKiByEchZgcmwMGxBNjrHwewkT5QdEP6iDdNT3gqHh7Fouj2LqfeP6C9m9pVsmHrEkuV1LmN592feQqj",
  "key38": "QVDxnMZAvdpsegWSBKyD4W2RsxFrCX3F9Cerrumm18KR4WJgt8RQUsXW6LFKRbPKRqYVoMXLW7YBMSSjvYzAwfy",
  "key39": "iJkSb68YMzC5TCr7YxTBudjUV4DCKrwMJjJzoYzEJDu5xVf55iQ2ZDBms57gjyTcQJc4XRJeEKoexMpt3TmzMUo",
  "key40": "2LubGPgiUoHQyeyL665yox8U9XdBVSFxcoCJbbpFGBCwjFL1GDBKSEmQLSVdovjX8ZQ8wawkZdhyzrZ1a5WWnqSy"
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
