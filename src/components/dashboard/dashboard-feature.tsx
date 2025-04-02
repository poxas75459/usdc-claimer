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
    "X2MP1ZAiJWCKTf5F3FfX5WFzQ4NupJwMQALBMwvoVnJeJbKmpJHBaQUv5NS2BayxZg2QSk1bsmBz1dK2rHobsfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mupB6fE4fMeLJbsennUamohiQ8GHGvzPfBxBxweXyEUxur63QSgiK5eXxzXu7JM6TyMbD8QN3eEeo5naG2r1cYL",
  "key1": "5evgoYaAiEwBxpSFToGCPtt7Ad31DDPNPtyFbr4nSLrLojUjvRNQqPYiu9XYZ4sMZye41iCHtkL5r3eQ58cPexar",
  "key2": "sPAKDLzcCgn3njWK2FfYk7aSN1V9mkp2o3hC5WabXpzRUsnUy8DdQhGL5PCwcwkeQR3xy2fdVjM4TWzktoqw7sE",
  "key3": "2Z7Rtmn63RmxG4SqLvSpx6cbipnUFPm5FYpzYqSWJApN2DkidsCjmfALAKteK8hPb4NHazyEBnRUDCHHFhmZTGj7",
  "key4": "5fSucdv1soTFo1pBRoeUzXL1BWmAqNjndeoCX2Q6DMtRMs433QndPDiMhBdnPqKmafdy8Fb7cRqvZUYFaDDK86e7",
  "key5": "4fyZuJZfbUG7vBZMkRKJMczYdRcGaPAuqNueu6Gy978LJPovkjpQPPabpk4e33BExKo1thCfM3m5ezpYiv56V3Wt",
  "key6": "4ovAtNarnZvDQp6UzWBB8bM3GKRk3hWGasNgFQycDC16zGG8bonZFuFUyGg5eKq3GjtUMzcbPbbEqa8KMNj5KCSw",
  "key7": "tZRHqUNDdz8B6LnJnHjNjJSDgqLFENpxmLLGxxsHoKuk5WucCYpjt3qxZeSrTXQt4Es3P96LfF6r4Aeag9MuXiT",
  "key8": "5h3tGbpd1YLHArGPt2PNKfeD6985QF2JL2nVuaHN6BsABFUKjVrsJEfba9vG3ev5jwzKyS6D76sNiu2FcihxemRF",
  "key9": "j6G7ZjnazD2qkmYcEd6Br5Wwm124gH1iEYFeoTKcmbL6d7ehvvu8e1gQPdZjBU9yYmNyHQ8q2QT7MjWv4sNgJSr",
  "key10": "5P4PJDCKPJuX142y2vUeZvbTC1r7zcyvAwDnShArQ7zYr3XHZWpsoy7NtGUYWCWqdPta8UZB5BRVynQguTxzbF2K",
  "key11": "3AgJx26G2iFg53rLFs8268HgD6saNoeFbAdbseTT5hCkxYWGfnVYB3VPLnYhQ71uq4UyjfBmxXFtjrLJwhhJhxp1",
  "key12": "5vqfj9CBDM5cB4LdTC8TexvjbR7fgmMcqpDByFMiKh1eaVy4Q7dgUtuHhgf8ArZWYgLYpzcaCFsLeW96AaiVuVov",
  "key13": "3EzgnMdLY7GDyEKoB3zw9btDnWJGgoRD9aQU9dBpxBpnaFvsw2hd71uJT1QSVggqHqSrdqW3bfJMU2VUmjsddpdy",
  "key14": "31gaRhSF8CSvEEzdLgxeeUeZTVFTdyKpftzZXmQxbb5TLZVmGt7fD4ZcP7WMFV6WfC6gyxkPrL3sHyKs8WURJo6t",
  "key15": "3vMdBVkWBCdzoSSL6Ja4gVmEa1MHHceW3hF9x4pKJGrBTibPZ7sAnUKPceZ4HBFs88hCgvwXURbSWRNe96tjaRez",
  "key16": "3vZnQaC5ih1Spq7L2MmoRKC6Fhc7riA7sDNgfo8qeixLPGa4UoADxgfENKu3gw4vUEi9u9zQtvPFDQJTL7u2qcc",
  "key17": "3QJvHFzdxJZExxZBDXgKUAynakhuQrPj6GoUiz9PfWn5c7Zzw2CkVxtsuX8h15av6tobfEhfPaMELf6D8vGcBvQp",
  "key18": "2pNnpCaQHZTexSTiaLkMDCVVhCRueEq3vi4So96K7uyW3RmGCFeobQHxtwysAn6HTggtTUU8sadoSx86fG911CG2",
  "key19": "4gTmkJAZjoU6K5mJ3EQuupi9MnLPjari6CXTkPFgEmUhXLSDe8SoX34X3xgx54Pf8qM5AoeUbkdR65JSCeDyLgwG",
  "key20": "3oavDM8a9oz7pabQMHWjHvY6wdGKeLpdGRTS348BECnNRwtQmLecVoLWzvwXB4ynxBKno5hv9kAjjnEZzKB9eeqA",
  "key21": "4zCQ2wqgmHntu3vTG3auznrmEXKhsv4Uz9oVcL7nWUCeng7UudkAskWMBPZbToczmrFZma8SWuK3uAmTFCVF4QFn",
  "key22": "36kipvyMwgGSycv3W3kWKyhEn7AsfC647DnbEYdEdgZT16xBsUsrbN4dVBjVe9MJTHNnNzeRiKVbCUVCD15k3Rvc",
  "key23": "2B7V6Cq1ps4yBnBeDGvq7Ho4y36FGufhmiaYfDi3jL55zF3dqriuw8tzETR3XF49s8uGpAxoJ4pUxuTJDUUDARu8",
  "key24": "3rLjELKwPFygNUPQrZm4kuudoRbT1qVeCtUeprVvapbFZDvEUYTN9xRGdaQ6DH1aVJT7MvUSvj5ojqsARe1gMHgg",
  "key25": "41otFyrKhu9XKBWNvYyocnr6mgebEYTSncAkHrMJVYFLqQPt1q2hraCB88NXBSkGirVwFA48FXsufD4iZ1rd61kG",
  "key26": "4ohfyH7G4VwKhAG9D4tYnJbrRARH9ZzPduLU8yjAkG5Y9MqivVotwc5U5iArDqtqZDj5zK3jsqm2Nq8toAL4RmbS",
  "key27": "22fM8d4mf1vdjJh6T3xhM7CctNPUQ5XT7RX79A6cc9HDeCtmx86hZgjgQF1eGREgUsBrifZz4Bd7769sjGWYrs86",
  "key28": "64zBHpTqSDsjNgcgG973v2phUPpLNf3pkxBJ2y5kA3gqMpiTQxdPauH1gcEktvZzbHULUzEeZe5UtdYKpKSawj4t"
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
