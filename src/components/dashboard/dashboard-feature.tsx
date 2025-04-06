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
    "36wph3sKyfRrTsmCmWVPQrxkFv9Gn9sgVR4HHuHi8HfXAok2EU39h1DUzaMvZivDHHXq3SD9KSBHNFzPYreqmV9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcJ39USjNKwrbDy8ekVaAwe9mY1ehuXynHmH1xpa2fe8nnVCd6hRnWEePhR9Jae2uAb4uUatfMcp8dzwU5i2XBF",
  "key1": "3gwAWD3gqpX2p1uUyEJWsM5ZPMjv35tDpcfREigboWWbGAszAKZPLBeCbHUNdmPyFppcSuvm35awxgarQRmcjjk9",
  "key2": "3pCE8p5Qf4wfkVSjHEs9vH6EY4GmVTYFM1b7RigkZZeRXSyyUQ7RYvMLX1gzGUXTXbaomZQyBoNjwMqHy79uQtSb",
  "key3": "4kf75AZoSH3Vd8mZgAfwbbXemmF4fBLo3o8ChdghpBboueoXcyz2Ae3662pwQtTJiV4dddyXTwzmUKtHdfhjiaFk",
  "key4": "44Yg2vz5wquSK31TpTxb2HtCx1grQLvMzCSKpquTU99SgcJN6QFt3mBZivByve9Vw8eufrvTrQt2CTmrKJGQiprN",
  "key5": "4GAqv1AKvXsS6w2xfCtp7ELaG1cdDVw83xNHg5piXkNWgPbasDQayqykzuHt6MjrNEY6UUpusiKxrf2m1HXUGmAC",
  "key6": "3jfD6Q6qMLqaoUwcidKMbbdo8acGdUsNGkyaXagixBKz7qrDFVWya5cPQ2utxgpnzmU9qZFLhqhhKGfqhT2wbjaX",
  "key7": "9rpfa8XDMsRr4sEFYEqH5Zme511zTAd4QccZDuRnaRNGSy8nVGShRn3ijkX4LRki3yzRPDgGQhuJYRoJkPYvnrj",
  "key8": "2S6ERUtcS9qcZygmyoNVjdWaKyRs4JKCH35EfFq5wA56rtkh6pRcZYpWfxxjt91NTRr29pLrvtdYM1XyCWXC9LWm",
  "key9": "2CuKqwwZVW96buXANnfRRxJ7GPXdQS2N1RrbS43M39wfnPrsJ8meNKHvf3KE51W6A3j31T8wftV3zJTfbhG8ThN3",
  "key10": "4ZaF9WiHEc1UCASyNsLPdPfF6CBsjXk5MdXtxeUCpTenmwD92L5saPFy6D2PpmBXvAXoSeraAj19NzNHKghUhSnE",
  "key11": "4B4LdGF4vLc6sRzYKm6fF4wrET2NeaPiyxamQPbuZtztGRXYjsNcwpJAfGNXY7DU8GC7HeRFNb8fYDRMCCdzmucz",
  "key12": "q8LBMTAq3ZR9jx5TNS4ytq5djP4Di4EMWnbXDa9Hi7PXaPeETUwqzr2yPuCcbqxWhJm3FtMJ7auMDzR1isiWNLg",
  "key13": "gmRPPNGQtBQSYPMn95TcqLmCjYH761odAwcFJvK1L2q53u28DapM51Yr2dSSW2hjZTf4ZwhYMm3aWG4UpVVc5DF",
  "key14": "4Lap2B9EeWLf2TmmMezPGz5gHoUq4E6DpqVhns684sfLiNS39LqYgyRLGNR3uExbEFecpt6wUAwyc752UjwT9MQa",
  "key15": "2UhqZB5eZRbN5jMYjrqLgTqc48uYEBQeGQboUkhxPZ6XqnhH1t5iCeaWJtNPUFFQkJEzRpr4x3h6mXNGzDnCn8RS",
  "key16": "33XnH9foU19Zidakyz55HYEXj1MBJMy2tWUNt7vpf1kv3w2wYs3nJuDzyvLoJPXD1Tk1qpgUvfhNobEAutYomk6P",
  "key17": "2jDcSfzWiQZjhKFLFQypxELJ1GJ8sGCqNFhpuVieR1bXaMvsF4mmuSBKBou1GErRvHrWVELBAoioUWzNgZLRHBiH",
  "key18": "Rh5rNBPa4JDzRFhY7DE1jH79C9jJ2sJYsC988cohLtEeNGJia92g7EZkbk29gTvJP2zTWGBBFGxn2B4ejYUZ6GH",
  "key19": "qbWiPLiLrJ3qH1kkkkcinWs3eYvkt1L1AtMxFudEDXrmEHjhtfEfSW98hG3A76a7A4R1rrhGqthxjWTy3NXY6CT",
  "key20": "3xAghEKWm6ThZscJaNcFrQ9TaGXsMygKkfRbJKCe1pwHeFEkB8UphdL3Ru58PSVi2CD8aK4BY2YBbW6JnczhzT5a",
  "key21": "4dg2vG4JH2DBQdGYRbfsW46zaHVFxg7fC5iEAwxG6hnsn5iypFYLiMEXy6LWyKyZuizD4uuNffYaX12PvaBbPQ8D",
  "key22": "4RTRtm1qsFJMotSsoQGKvndUuBSsnBwrniWA46B9r9R9QoaYcrmXEJc6uzJorWktZLg2VEN33ALtPNEnKFxFr6qW",
  "key23": "ctWiLyih7vGpjFBvkDn4PyK8EhWRpddUC9KWE7Ryt9nzAMMDn2CAMXoid1yY69HupBKCcbfKGJWnF6DM1Y5tE78",
  "key24": "4rLQTpN5rHcvnpqZuNPLT2ZnnCBtHV2LCgzWzm4noKVDrqz9nPgUoL21CTQ8zWg9Tagdr2KH5Bi9sfELNgVX99dE",
  "key25": "4jMKkEVCczDSaCB1SRgmjrMuwSmqsWqhRpu6FwwWQhQHcBJFXqDzKKiUtrp4wWMSWgcwirSsuZmY8dvCdMq78jYK",
  "key26": "4HPdvVEmY45CqKWdURkBr9BBUr26RF9syaG6rkVxENuV7etw4De96RPCRdNNyXKtoiXBS6xqJyZjBSHdjKt6Rp8G",
  "key27": "5rhHjhfQryuvmAwY6jjuRrEvYHHNf8unKU4UgYzfKFpff5A6PXLTpFBrM2qysMPttaMoxkEhuTU14SUi3H5vRnXg",
  "key28": "2CMJsi8FuM5VAsM6FLw1vt4ZtbBZQc3QDynHkSuFJxTq9gNXwiEcFiNPPsCLRFTN4JvWCAqsNLjVwPTzeKP9hZMP",
  "key29": "44982fWeePgAJJyu83Q3sfCDXYvg7mrL6rZLU1a85LUeL4uGwTtt7Fa7Ad5XeP6TkiS5E6omiytJ2VU3QzoSF728",
  "key30": "3qyPFjAp7GTG8Ndzmd8F5149m9RfQbyc66RT9WMh53uSZ2Rx2Ncm2Ke9Mnm1aKsyYHdUeavZc79XjnSSfNoePxDk",
  "key31": "sa7XPcqJZhyUuSpgWzN9BWZtq2fSeWXXxCn8wY1z9TzDpfjdC5ddQocajgjgTiJx44HXz5j7AcGpvZ7nFFgVhhK"
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
