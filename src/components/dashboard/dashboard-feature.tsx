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
    "5rBSiqRXCdnfoCezGgxRdrcsV1ss52PW4FgRXxmzpcMu8Rx8XG4Qc6P11rUtutvwjN4HiyXMkBmZMFyn5K8aH5by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LkxMaqBzuLz3KsWtMFovxtCtKCcQpNfpiNavVrcEvgUnx4JyYeCbA7vip38GqfvZteD9x3mwn7QWu1iTR5HQCZv",
  "key1": "29YusWXvNDieDAncytfeKPhSLBga1CHaFviY9BufpNyXtUBPMwzQ1Q2wGCBBbyTxiMpWTXK2dWTg8fhJ68gqj5pJ",
  "key2": "GkT9kHKGRWvGeBZAFUHQC8Q22JKmCBy7bSYUmA3DK9WZ8GSfveqw17pNEm1ppwpz1H7Qijv4xzNBsC2FUAaHUim",
  "key3": "5tGCAnzLJVmTKqtkWhNerPhh3PAswm2NEvX856AevGdNVpn25wjRFKQMnfGx38angRtiUjEdWT4ttMUVoo3Gc7pm",
  "key4": "5TXZaEDqodGVGEvkHy64g1ohD43ehE7Jym5ycHbcShJ8MKKk2k3anv5jRNYubJ4LqfG2by5JqmMTsivcy3D5ixGp",
  "key5": "5Tyk4vyCL6YwMdFN6nnKChrw3Cygbi4EwtGxVLoaEiMpsCxikvJMRgA4URZRjxybNShEiA3W4Hh4FhiePhgBZoV",
  "key6": "3kWWuSeM6mxsTFbGaJBLgJ99fTvYGzUo8Be9bizUirZRURgN3vdFs4AcdsoMWNSPqmAKYCbVRnuyrEwXDR5ccFkj",
  "key7": "47xYq9oU8FZNWXcMMkRVgWH7v3GgNeXC8mWfEHcSaaZjmnqdW83B8d9UDMmrXcEnr5x3Dd4GjQqkk9iP6uNyFnDp",
  "key8": "4UYr5uak6i71U8VXUj9zS8QdHrvbj9aT2JjdbCVnd2jFfWpmp5Rcte9H2vkzpe6R8FV8qV8Cdv7UHWzSWum51WmG",
  "key9": "5fmSDeA6sGMMaW48CLHetTDj99MibQvfEEwXrZErLDPVXGBMfD8UjYgYLC31qGwRKFFP1ERr5QLGavUS6LeS2YMk",
  "key10": "5M9qPdQ7gEyHBAtG4xDA8foUCwDpbQeQ2W4QnuJGKjqYQyeYJDYbiBj1YLxFv5y2Byh2jiVQBTjtxXhgS96969sD",
  "key11": "mN86V2C1p3bioxp9ubtcoEuLNU85z4ugQMtuQnBSMgxQwVXirUtqdcnSx7CM8sU3gYVMdcqJBdk94Ad8NvkYJPR",
  "key12": "xSmTXztm8chtTMpVhcG7FpvA3KAsaa6xA6FdZFt1g353qeNHSku3kyKQz2mVJmJNzRzdgmCbFekWLEruYNuuAZo",
  "key13": "rxPVsY6YWu47xoN4h1C4z3zMzTpn4A4BgavtFKxbNcJg2nHAqLJf8uPQQxFREqJNxoHnmS93ygg4wXzbZnKi6XC",
  "key14": "4an6dEPGj4G49iidAVXyM8Es88EehQHCw6uZYQe8GfR2Va4NiVdgZZwX5BE4RMZRPRAVrp356PA1MFvruhj9KubN",
  "key15": "4ukhFij473ra1sNJYjYatp33UR1ZUJQwWqZvL5Ekv3QWik8swMjN3ogB8riiXcQ6NfxWNZ6ZqeSnvG2aUmmwRGwk",
  "key16": "2opDXFj17n1PuE1RZZDFk1hAEpQM5shpGrM11GuSuPykmXgFTFUNs4Q6QBr1wKkn2mJkpM2iWBLY6NkmEFDkm7NS",
  "key17": "4B8MVgdrrZpT3uogsYracSd9HgsbRobBJhU44XmgpeZ3iCF9j4yG2qY8YWdzRFJ6rbC2WF3bLtxAhYCUUuxf9tQn",
  "key18": "3e2fqSVX6sZn44erPJpWjkJstTzn5qHN9dA2VHnZfg1ZBXqpnxZHdua9F8YEXF5uCDSJLyM4LgJk6PJbtTDNws86",
  "key19": "TUvBiuNPxD6pYpemKxzQR1ogrAH7ohNcRNicXyyq1jaRofkfJFKEjncnoXDSYewyX79TxYCPDUWtpcoANPFKX8Z",
  "key20": "3auJKzPBw6yA3EokMuScJFZ33MBCXBBfoy48kbNMjsX7YKWPfbhUgx2uDqJjoVeQdrTnXjz3QgVVHZc8qqV9DU5F",
  "key21": "5voWdDsCKi22FMpK2wYwnfWs7Qd3VYnhHmH1QEPoNQ4stZyxraxtgBWyUVDRauBP8dHey83RTMNec1MXfRdECYZ1",
  "key22": "2NMwQwHCoVCF11KjY4aXiu5uHML4dCf72vCrzZuH36vQtfhGS1RVYPGFy6arrAh4kHk8RExzeEdNwkQA5UMx8Rnv",
  "key23": "2r5wZoViEqCheT9vRHwqkwJifSGFb2TtPmSXjCwgJN6f8ukWrbJesizuAWeavfAsXcEZQY9NvB5gjNy1z4By1kc7",
  "key24": "4R9DUV1VV1vVoq8TzcmBCGop3EPqasLvHocNQPA7kyfkcAVjnt24mi387aq5aKADuNG82uj9yRbmt6QpSQEBTuTW",
  "key25": "4Zqfd5sbRM7axk9jDFq5eocqJ3gGqtHznVjvY4PBUvZq2UoR4vbUi7a1Cz8ZbSH2VZFcePmkjByep6fohDS2aoGF",
  "key26": "3qvFXY36TERniwcdBFNFVPX7nKS3tVPaiMnhEWdwT5TXHkqQMi6LYeoMLVQMxNncsCzdorusokj1fRsjdwC33zj2",
  "key27": "MnxkZ3c96K5dDJNKwzK6NKpHNCf8nb2i1T8kzLifYyUAX3U1EaYuo2oxzLQTMagCL4dkQ5amhqGKtdguJZrKqLm",
  "key28": "37BfjRciz1o79ES7PzypXgNoozvPao8wGnzCx3TEkaz4NTwrTyZPYGZUPfXgmeVuw381nCHgPHGHcQULdRhwBdsT",
  "key29": "5peUdxHVzYUYcZyNTSJgtSKFfAeBBJfQvyf4kqiwLGsZbWFpUNidbwtDwrkkWgcpeg1GpTB2QncKtUR96UrZqY5b",
  "key30": "nMA9LA3Rmc5tArrbJf4rttp5h9NHtZow629MD4LS1t4bh1ZoGPzG3YYC1p8LQpr4y8Ptd3oBMkuUAdxe1UznDNU",
  "key31": "S5JpyDrSxrYQ4UAZuppRs86Ry1bbjF7X54kYKtimC8BYDXfuaQ4pcH2sGPhkBWeR2AsWUu8kzdhjFg8tMEWgQmN",
  "key32": "46Yx5PW4VRWBEHNMLddrrUiJyeHKUuJHfMVdnj3XZcbHxiA4F8VGpBpc4Pbn5txYzqmWGo6eMM4SrJHxxo67WhZY",
  "key33": "3PDBxz8keQsCaaAJPp7BmkNV3EDoHq8ponEqoSMHzdD2Y7kyRHDZzDziWSNdovgZkc73bJaqEsjsed4YFTGNzCqC",
  "key34": "2ppvPSHJp1GBmWZEfvT77nUQA8Ydyv4D5o4Fjgcwargoi6UVhTY3ZhzFyFvJvK7FLN4WwZ1AXu5pwbsTR8Ace88z",
  "key35": "3Fdmv2HiB75UwBEHP7vM2xi9jS94SZzBusWfoduU8bV362bTVBD5Du3n5C8XEMncGvXQV1iFxpL7L3BN9kT6saCj",
  "key36": "22GTJns3DbTMoajVsBQxWDMafndShiM6FTBJrBesn4du22RnkbquvrYB8xzfmTPqdWTESyJ1kJksi2saVrqE4dsD",
  "key37": "5b5PyEQ5xx3k78ccoPWPD94Wy7DnoFBeUvWKB5toz6V6yWre3hvaF7obzEkjpUrvy1TeBgXhysk6VoJ2v7YwFx5X"
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
