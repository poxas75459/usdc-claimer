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
    "3DiVtcSQ1PP8VAhfTcak2mztCvVWwaMYJ33L8o8nAHdLZQAcpzNUTfpQgVeEBfdHK4No2KvUm7jLDMsJZuPYmQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QmUjkz67bt3UcH83NJTU1gxVv91EPLZuU4a6S4izmbSGPaxHA4N3h5kz2eY5mS82un2BTfn4sKLRg5o6SqHm9K",
  "key1": "2MUa7ycnpEpVVzx5EjjQ5CwJz3wXkyp4syiPdrQMj2ZxxbyxSNJhqgADzm8J47iU9Vr9rTU6LoQB2vmY7kTAhdmw",
  "key2": "3Tuj74aDRdM9iqQRUihNnojSG42tqs493qrsGgYYbZrMNwJpJMjnFuyeLeocTBUDgrTPodn6rW5CFUiXiXKzQ5K9",
  "key3": "5Gq1NSu6tf3xBDLXCgGbF9jKZfM6UbViVzaE19KcN4eCkvcPm5FfpaNK8h77fygF4vmr4PnAhYVMrejmLvG2rdJv",
  "key4": "3bzYnDDrLhZoeytJE3tSxt57WR3KU2UZhBs2hBjaCUfA5nRSLHWMXsbQsZNojGKVRZcnr1ezQt3KxF95KoSb5tJF",
  "key5": "59Sm7JoQ2XBLU5cGZVX4BdxM2FzaWJvb7LfWLDpruRRvuXzNch4D3t1YBvYfs4mV5Fgv5ZuCqQWLk99Tia7otfNo",
  "key6": "4NEfmvD8kYLahQ3sygbAS4KpXiaKoJbthGVk4SwawEFVjkeEsF1GgqXZSXFoWqzQrF5oHc7hnKxgoHnk3iiba2nF",
  "key7": "3C8K1T4A9K4wAoVvPgWX5nb1tmmu7rXAWkUZrAeCz9UcHqzKZuKd2eFFVpjTxe9GoRSoGJFCkXAKgA9GmrFQpKmp",
  "key8": "9V6E14fbT7RVZTxGiG6W4qWp3zGuBHL6HJ78iih78PF9r1JCx3xSmhnc1FYs1rTpgi4jWeaiuAVgPmTXRcPJ814",
  "key9": "3erMRNbqAnSf9yjmuPEPpJr5FDFDphgmi1wtuAdzQszt7mq8JYXNjSZwVsxAShf3ChhTTwU6KR8L8HK8PyfrBsDy",
  "key10": "5tz7eZq3Y5GgyMf6Ucr5H8bZpr9fmkUEKrL2Fm9xAP2nvLQpEKYxGXbgVjcoWq3FqeWSnY3zXGAkB1KdY7tmBd8N",
  "key11": "5QPznhwmPqPPWJFBi4Y2JFKAmyUU8gfiCsX9tkd2Ye42h9L8k4XyE6kfGTgXGaEsb17kZbCyKnWSpU5ya8caz3o6",
  "key12": "3R7hRMPCxQfi7dWkVTRETPHHLo3B4UYVchETnhjGSK6HieDEpPdYh3DCYTbEBA8qnyfzYbZikhhzAd5cSngjEZhf",
  "key13": "4QGv5d2Pry54Td7Jdm5fKBF9PJCof1c7xxP9tVeMeoCeC9CuJy7Cn5a6x8h775eVSoaRChyWeg2B7y5SMR9zCQyJ",
  "key14": "4TeZ9xN6Jb2SoxGkzwyNBZMZEXgsBx71YNJWqF4tToMwd6kpKoCbj5dDck1fCbDEK6AexXAAnWvDnnLQci9X7Rdw",
  "key15": "34B2bn2iWChMZhzbuxt4yM2Qstfndt7pzfbWMhYT6zgXtHtHhq9daaTeE6gBsTNKSCE2EHPZhxHY4Fi8ZX4irf6c",
  "key16": "4eX4GPg5AU1ufciFJTNerUdfE23uebVWnSzv68En8QzGpxCv2gcRL9CPg7SzUvjzg6FWCE4r8RUzBigM4U2YRaUo",
  "key17": "5hik3PhNCosfZ2FMPGvz51LMoDRoWCkCkcZSFAXZ9g5j5CNAkhQD84VboiS8WxDsLoY7e9nscmS6pf8daHF9BxKV",
  "key18": "3D7JNR16LqJop6U7sdDtXfi2sUgYELcUpZ4ATU4L92Rzf2jRVxWRqNCNdj7235ff2n1C822mKuEc7tQj77YHPdsQ",
  "key19": "QxeHEwCsAbQoaJjBuZ9spHtVaAp89QWoD4meViNGHYvhNZrCPfFqe2JvWaMiCcqrMs4BF8Xboz1ZE8M8PFNmvBd",
  "key20": "22aBuwbgg7B3UMEFJBw7EHe8THiHeY3Yoz8RSPmfsnbRSxjz1iRQ6PJfv2WqnmgLWeyQKuVfxHbkCi7HPcP77y3K",
  "key21": "4B8ckP8QUS13z5tVvMN6SNrit5BZ4akHKPgs5CPgdhDWcUNaC91Q9moGA1cpcnVcCyLReqB5py85RgLbLbdn9Jaj",
  "key22": "3HcCyaeewyPZwQvDoQBPLQ7HL6BS84KaeGUXjQhWZC4tj8a4tUWoRBZQUWBXy4XVUMV8RMWvziyTKafWKNtyEbCn",
  "key23": "5aCKVsECgoc3abYMT4kXLeQPG4ejdQJuHWPEzqU9sDVrKzMUqJppAW4rcCSR3WNkzrQ82Ci3X7LXsNjbRaGi45VK",
  "key24": "7uJ3HGNCVByB7MMqXBndZd2DzW5cFPWtTh9yfjQYL6MVZTRZJUxYgm3cKkzj48uAoMGCboGzwtWvMFTLEkyUfUs",
  "key25": "QioX91ZomYb3X4a7D1j6wdUqMfxaeiUDx4uW53SfYPtDQJtDKytgu82BJfZChnw14TMVnFu7Azj8AroAzbRKZ2q",
  "key26": "C4H2ynyVwJdkBCUqr2uL1RRuNjKZq8iAuH1zRYZYmQ6BkxqKF8xhThFGYQCLVEMfHgLxn3vZLSZZ97wAjHpTGGz",
  "key27": "4DVPqUkYYet6FWbnzbUx4feymSMU954Rb7UveioYKpR3Zp3yAvMfHa43PSuB5jv72QFjS7ooFe6zqUDvrHMyeQh2",
  "key28": "4orT6y1qYy6tW2Lk1oZAw8Cg4h8FaCwftXfqUPVLNGutFMQc3HMDqDWjhekCqtjfN55zmxxmHW157qmDY2ZC3CWw",
  "key29": "3wvKeWVhJfZo2ZoLG8HLNU45eg4US4Yrdr5MEmGoPrvYs7eBWqfVcHzccEz42f7btE9r9HAUdW7C5TReaForPtTf",
  "key30": "4EjKPXgZZg5vU1SZb63qMiJVHdnhogRwURAg5kEmmodYEhqQ5PXeQmMx8AvzT7AT5xLq3wHobQVxB5rKdQMvWtQu",
  "key31": "RaeNPFVDFrnFY7XPLHYsT2Sh3mxnaw49gNFUDtjyrJsDKxK4QraZ1L1X2nwaZhmnrPnBvV3NC9WXaQokbBcfatp",
  "key32": "2N8FWRiE9Sws5bZUFnqb9dPYwCVXHPkdVZGU9P4fpzWbRuP4ePdAmRZobJTkagRYAFuzZMMpKbpoSKn4NWaffARA"
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
