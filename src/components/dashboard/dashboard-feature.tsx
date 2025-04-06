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
    "41N3RkUgxVFbrKwHMGCTdxfssfXSR8dR9R7QgTjbcECDHvTHguhEjr3LNq3b6JptytmJpQjPQyKUwWg6zCp3VSe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCJym3mSvP8sxdeS9X3Kc7ZPUe2xvBgX8A7UP4w3D3wR9B5jjcEVFiVcKuYsoUt6pXKgeDLycC3WihxEAfqSbEb",
  "key1": "vvW3hb9rPEwJGdKBJKu5LPE5zuDRpLSucrGVCrY3YTwhNRpBkBtFA3xQqs3S1K4DXNxSWt6zrRxWKqoARa55Ngy",
  "key2": "3cs3qjZGfhFBMGVfCHzoUXQ7ZqPCGRU2JGuM1A8zQcdUa177q4XrmV8bo4J5YrPLop1VdozGa82AzDDv3XRNpksD",
  "key3": "3Z2G19aFK9C1DVeMHMGHAJiwsXLHD69ZnUeBcNjyhwbVi2guuARkBXAEfeW5S6onbd7s8esZm7EvFnApEjDmwTip",
  "key4": "FtDGiHUo8iB9xtWsPwfBRtt8nasHc9zfW62i6A8fFoJoVjKqiGFiqDU25MLZhS2naWqDxYxEutepbGzjQXjV2BJ",
  "key5": "5S36Jf3nXdAP7TygjF5NmEtm4CgdNoY1zCeXUyHdWqkoSNVPpXuN1eensUi7vtz8xMigamqgt1aZnfN2BB6jNFnn",
  "key6": "3qtCmXyzboVSpugXxAp93WQ6D5Ph7irSt3XE2qEtFB5gkE4gdtLMe3gGavLqrubpi8KwBjPmyd6ixhCMBCp4VrAC",
  "key7": "37TDPYLdLb7AULcSG3CGA31uh48tSHHgvbHVE9ppmpL1tVRkJUVsrTCLh6j1DaHaQMnP9MKihbvVDFayypEEB75P",
  "key8": "4VhatbCr5kUNJcp6xTbRYzSuoq7Dxbv6dZ9VcDbinLXyVtJvJXj8jtMw2ovrtf5bKTUPzYeRPWAvPDVVGcv55uAc",
  "key9": "UNUWC4wRcNHTrEq19zay8RD9PVmXs3G9vQ712deqADwUQ8Ny4f3Zc68rU9K8kruZRh8ufCLbxGNwBoymTkCPiQu",
  "key10": "rM5JnEEZAqCohY7Vq2Vi3EDbAFUAToHw5qdxqTn3wa7WwdLo9kpRLuiLmJBxV5hMTwN7A2yRj9S3qGJufE7DK3y",
  "key11": "2JA5mCdszcUUiCtQonoGsi5C2VdQzAf5kASykexBEot1skHhJoLMpmCKWFwAm1G3Q293oNpwq9RgYfKQJJR4p9BF",
  "key12": "3XQ7LLHQLRJvrQEFqU6Woa3NSzjA42TsLjRJAcxvigqaJHgTXsxwLicyqgUc9U4VU6k8xc5JS6YLtXEiL8bgNqyX",
  "key13": "46FqwVa4HRxAhDKT4pmgZzhfw7yFsVp3qDHP1FThRRqXVLDHHVwAntsE7EiLzoMaitFZ4U6DAZ5MCXeAxHabtxEQ",
  "key14": "5sob82dCSa3CJXLj5RsPY2EM96qL5d1RMUcYo1PNcvouegSQykehWJNxp4SZw1M5EvMNRL97kWTfnPE2BXgxvT5X",
  "key15": "5mihRDjnH3PrUGxaApayXoMR3ZYAAzmQZaojWcyFSkyrkFWMnDRfyowMkGSKgyWqWZpAwviPBaiufFzi5JZeQK5V",
  "key16": "5kYm6zVEqo7c7BoWG6vJMXevDftZhFj7B3AFdfmf9jkEgZ9mTSDDj4Fwns7CLKpBmu7H9sSkF7MMcDDbgERMC4ff",
  "key17": "28FrzNTSrYAoxWr1CwrNqEy2yR5QAdn7V8ejSrvQkhwVuwrqLNDJtNFQcvcEoMWdrtQD1hKFT4FQJKgpXSVnVrpj",
  "key18": "4SiLQX1bcM4C5ePvRG4BbfxxbjMTHXUdvfdDcYjm78RAyPw4e7x4tWHGmvAR42xGt5oG681WDUccEw3CZ3iDQXmV",
  "key19": "3Phmfku27mk1eAqv6t9rCDPSjPv8rUNVYf5uBsTm3SffkY2FvsDmKfU5t1jCSBFCfkdDuRpygXGiR5r8jiJgi9Gj",
  "key20": "Gr7w5QyLRjKekvHwRjaJJnf8xJyQpLCTZF7KLxmLmrUqbUxQSEW5cLZj2Fsme9kWZ5SzzirJqxCpAF1WiDgEdZR",
  "key21": "3a9F1GGK1AhBL1bVxRUS49m5nt1ySKAkK23DaixGTxCAKLsx67uF9ASH7FDZfDmz8rdoJRDdkFDWz4atkzfhGh4z",
  "key22": "5dX8RweAgy5EoXcymEG89EU6zwQrLZZLmzdRuSaYuY3uHZZNx1CWpinCExYeRg2PUdEJKCf2en7rGpizbQykXqnp",
  "key23": "5oiBMLXVX8PZ6grKLtBgiiZQkzPWshD5LrDMi7HPJroKcPiUE8X4nUhwqgxMezyhrEg52CNamH1QMh7otnJeRNe",
  "key24": "4FNF9yoBNPmFH99FysvNfJzJgBZHxqGPXyYrtPqdshsdYAej2Wyo35t7URqU7ZqppLzukCcPsEx77PP9EpKoGxx4",
  "key25": "2FcSQW4Lk9yww62CYsiEKofze1GdBZ1TB2Zt4XsuaRHcca8f2rSFfCpCGn3Y57nyXZ2u3AcRdpgsjzh5fDUUu4Kz",
  "key26": "2U9EumMxypSD93ZzkKS1V47VkEhyggSojWEX8WHoZcUxDKbPdFhGakG5kcP7cZatK9HNa8NaMfeuxtmZqf5GEMep",
  "key27": "4JV5JArGxaFZmzztk2hiTdJHjjYhRWRuH8hQyTxpWdDm9kRxxWnhJEmMWCkyQJkdmy4EZMGmPUDHx4N1Fk2thVYN",
  "key28": "5jjJfLYYCStCAx8yfFLRyr7jGosffKipYeAKcgWQf2c7UeYy69BQpGwt8HEo58psrPEXdjeghRxk3VifKteinD3s",
  "key29": "5yfnKGE1ecrZFg6nHsq3qWq429947Mex7V5bpeHtC3rvmnva5uc1c5DSxaVAR53QraNkfDzP9h7paU58wyKEvcuh"
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
