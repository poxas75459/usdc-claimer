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
    "4nFtEf69VNWiU6oidEv5q1errH4NrVezeLpsaLf2X6U9vUpzfynhjKDXeAvxc6QRCbbiGfqjqvccRKyYGDU5UFyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q2s7dMmydJz9eynG2SU8RvYMepBXKZemhsX1etL1Yzn97Nq2Ti5WdAzgj5o4xY5tYNeBQugtZaFa7JYzg9LEZcS",
  "key1": "2uL2TdvroaxVayc9yNeSEqKztTTFKypkrCmv8xFkesZjoDcaKfTTDsJXQySQooLzGPEwzGwQRsrVteVSAekMYQej",
  "key2": "5xGu9Yi7p11hZqrTeHwuacqrx8YR7hdTf5z1scVwpcNJXuNCMZt4vWyqDJb3uUq4yJMPYG3NDVtLUk4yQsUu4KaD",
  "key3": "4nf142L9twvUSAYJdHZP1zKc26nPxup4TrT9RqXpYzd3Pt4jQVjuTV1sgBDib1ju3Ad1LHq2J7xBVW55BuUwp58C",
  "key4": "PsgFx7pSRWYJLWv1kjJhgeg3nxNVUhf8FscHhXZroiQaKSKFhojZMZcDVtxDnFAxaHbj3aEUPpiAn1ePWxU1JS7",
  "key5": "3atpFzA7nK1F4svWwj8P2Jx2JrpP39kDiRUr3a9Hcz14k8VzTm1cFvMuZw894PMZznPixLLxum8VPEwghkTi1vaH",
  "key6": "4WhBois1d1MiKDfEJis9gQgjj3WxGfihikrRrCi8HXznro4Tsr6NyehLnXB7E427m4FN1gPLDPE8oqjfPrMxa1Do",
  "key7": "35Y2rXB6oqfu9zeNsv2QRyNx2rSQKXzv6rEiRdhvrJSGinrA7kvj8apQkt5ZnjhRCprxNxXCNApTmQMGE2S5voxK",
  "key8": "5tZu3q5ABbA4gm548Zhv7bwL4EgnYkRnbMcD39TaFuuB6TUwtoXPoANWmakfVBDp7DsjnqVSmnbic2J8ZbrAYNis",
  "key9": "4yQGDeqRErbgVnkBbNSVWTj3pD1jEsQxErngLReoAxBhJTB38KuckdG7FfUyEud6YFJji26myff3q72PS66bw5Mm",
  "key10": "QUPNQHp2uuHgGnR4FQEXZstFSRV1ceEdmdGvk8xvJdctyempRw9xHzt4ghvVWNxHG1Xbos6kNsKu3vtd1xp3R2v",
  "key11": "3e6dMqQGHfESFPQWnEUByifJxL37tyjZv7kMpK4MRgyaKWqPxcdHU5xhFUbMwtCMRPJGQ3Q9XgLeRmsRyUiTt1XQ",
  "key12": "hd9XW4JEYA4LZ7DQkVs86ziGQZuQNRZK2xfiaWoqLu9NjSoDdy1XL8yduumwcwGertimRHvv83wADrXPPqmpdnE",
  "key13": "3HAn4LwBsuCJhHq387SuyBBYpHFCSsRwRmnEQ4LPG2arPYQQM317dxsfgVCg5Api4buEuzZeL8Lxw568SgNhStBH",
  "key14": "4HVbMm3rZwcSsHnRvW48TkyTD8FGCBVhhFuvwi2mDE3ZZ2HgbM78HEuRvgZqCpVMMTCbtDnbZsssQVxy9izNGkY9",
  "key15": "2BtcVdQSpiL58bppjw2bLf9vvWzhFi1o4Fxfw1DnXXgAotXMK8pEAKeXekuejBdydZz1MeNxQhtECnC8TaLZVUMv",
  "key16": "4RcyfSPcw4ZPSWWLHm48q8ZkJmHnnD9PLrdsDQ28s787NSWr6PrAmf1ossZeNrWzRyCd2rF9449C7s4hHJwDabTP",
  "key17": "58Vt49xJG3V5JEazcGMTRVufaEyCfrJKk6WY5wsCZ9qenCH5ahvWgZSjnMQE6T2xs1jMgU8JfvZsREWH5JERgkZ",
  "key18": "2DB2dCbygXzW8MYjWLwgoEG2S733nkCuU1rNvNmDR4zsK1P8sQTZR4k1WG2G5pFNA3CWrYW2ujU5Udi8s4wTiYLQ",
  "key19": "2eo4T4UsWkqc1RnynxYtvN3EHbXhrDzphcBmDeQXHoqFPtB26YQduSFaiTo7FEmrBSfRNw5yWEe9EeXxXVJXs7RQ",
  "key20": "58U1UuiEsDLNzXvjWQ4tZwcskbsALmrsFk2kxJgJF7grEd9D5FZYhANRzEq7RAPms1edpAc4FKBSH7U8GJydX6oX",
  "key21": "mS9ujGUFu99m38jtfgLsAR2cQn4vaYw6wpLkvzYaMk6apgtUhBLFQeLkEnETog4RS3YpwQbwnMqBJvmBPWW6chg",
  "key22": "2ogAxJtKyeW163RQgLiHbe5Bj396qLA85Rh4p4WpZTuUGfyLjW7Ps1mxyGbGywtj62ppVrgBtAkPnwHC4nLRDNyW",
  "key23": "Q5sw5uV4DxNxAUczoi7Pf8mTsykZMuZaUYawe5K4tckAq7UJEqw2VCXhaDZezme5vdfWfEsVbiHEUZEcMa4LBYe",
  "key24": "3dak8mHuAr5bXcUrDxeT7QjkwDHZiv3682vnMeqvokLxwwQvQLCEK4WSKSNZWkEPHoge7GJyAKTC6H1f5ScTEgnx",
  "key25": "3gW5SdRhCTuPRdaZKGtfcu7pZS8T4gaoWXjwPcZQaQNbHEPuNMMcYT1JtpaNj78oFykBDJF3fcVAKKWUk1p5hy9E",
  "key26": "5zns1f97hQs9zTmq5sFiisxt8R3XPyfsm2DHUPG3d8C29HevCc8WFF7LuwF4AU7orNx4W16ie5GQJErF4y2ex6LX",
  "key27": "3p6LBpRPa6hXUJwJLSfuhKDn9j3nGGTs7pyk4dtdpUxV6E9CEZ862YYRkJtbQ8Y36k8fubTNPNG8YsaYXUcD5jxe"
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
