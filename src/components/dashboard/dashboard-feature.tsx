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
    "3avdmXcpVwuwgKpf3LCo1aWaWQz7oPw11wGPGXWVQfoijXpXFGuMjxPq6MmDRDXSDV7xaUsdZVELBcGiLWDgqgiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCcCvb6ipyeq5bH2yZWTKFWBH3gD5yBfuvatdk72EioeZWMRFuyckZerWkK13uHuPRrwoVHcLz9LvirjUPCscwV",
  "key1": "2YdcAYUgCLSR4g81CECKcNxrDjvk8b7b9Ys2oAJ9A6GcgxNQXqeekEuhxh4JcLrnKYVztVyKn3ZieYVrt5YoLqsz",
  "key2": "2NdfvG9hEjGUFu59tXaqmqq5UfaEfCc7rh2VT7d5NzvYqsSTZ2bo9zGa1VVPqDJp1c9Wv7VDBugSa5SomRqfJVq7",
  "key3": "LhxzXimPjQcK7uofw2qRVunPzBVGeJPNnA6wy9F5jJNvgSmdU5PPifbzK3EnVyqJFYihkzTv5b5vwbM47q4e8kt",
  "key4": "EX27RRTWmgiqwLKbcvWs4UMVRkGsHkkhoEYoVPhXXefwT6wivifrNQuYn6p8FG6DFUnTg2vSxRKz39e3QGBrbgi",
  "key5": "5nAbDmG2tqW9wCPHLmHDYtu3XMmaBGc85R5Bu4NcCrVxSLYmP6uPPv2Lvnbt3uDnvRdeoAeg1JtrrXmrtsDeFzTV",
  "key6": "4ioZcUfGf3q5rPxtj1LQo7ZCUXECEMv36FmRAXNwA8hTyqZxJFXmc2J6KL4Z8gAW3VhEXttUsj3q9BT7Xq9Npy2C",
  "key7": "3HbS1FgXCyHFPo54djdn5SjTFCNE31zZXBUv5uS5ysAs8k32JVsfKC6NnJvxNYAFGKFe8F5kVJBc5qnnbs8q9dsu",
  "key8": "4r1h1E3vEPutBYcJ3X9UGdpn5GmQeVNDgpo7N9vr96pfte15uTLhEdDxsU7eiFDwjohRxFw8k2yAJtG89gemtcm8",
  "key9": "5TYex32N6VMhAU29E5TyzvmLsY7vyt59wq8RYU5dA7tfeRkDKoFiebj9o3RxYfKDc5zqw44W5yi3zr88vnJQNc7W",
  "key10": "4HUGSKCHfiumVD6y9tknNtKsNHn59dysNrsbpFA5uaHXd8XTo9AEzdQdTaR2RFyj55nSZFKBaNTyb4EfxSApah49",
  "key11": "ncugKojarX9Hr3QwS66d6GdNBqpFzQ8VaTZxjyguibYCUSVcepg8NwiGX18KybByuBbvDy7bvYDdsWhK419nApt",
  "key12": "6593XDhtNzsyuEGuTmimXturiohvWBv9doDqXcDNNYHmcgXYhvfxSmJyZ56mmFB1ZKATkwXyzgVKqaw6Wei5tzd",
  "key13": "5ozpQxUkr6kuMXyGR1q5PWqu9oqsnfx2BHk73Wx87BvGuQPwmSpjr5WVCEYoFHCveenmjearLmhdoyzL48pBKewP",
  "key14": "4NR49LCaGBr3hL7gXGsdafuYdjMkvd7DXVBtjNz63rYe3hsRahcQ3v6XhGxjCrgeXgB51dxp7WxUztNRhTQjUomo",
  "key15": "4UidFSgJPf2i7muT36yceN25fvN6ezHzEBdkFhP5v6KrsxFqKDC5DpUJUsKwc7upnRRxZybdSiHrc6mxEB6MuUy3",
  "key16": "5ga8kiv8UfXTbwbsGw7dKrpCQEeTHnDQnB5MD8f2S612dpCyu5kCQ8xaJ8yqkGeegdyrVRsZb9JaJu1WKrVQQzyy",
  "key17": "5gPkyuuGE4kH5XdtK8yKFK72nyKFkLC7wCVGuZAhozQSKVwNkfTCgcXLmimA23Fd7pHSex2YqzQC1BnZi3dHeGVe",
  "key18": "23SLMbbGMiKtJJsGkeRK5ob2dwFrjG8vNAMxQif91yRBJkjNdcFr5pGd8LYZMH6Rpmpra6QUuKqKF4xdWeBZwEwk",
  "key19": "32LcFgFtLd98UtTvp7TxDdovhBL8Q1yQf7CZCW9GVRKqrEu7UPibzswURtP62n9oYDwbBkzKaZqVPdJwQRiM1brX",
  "key20": "2cY1vQ18RxdEQBdcCMweL4jERJq4gR6gL16ca5wTArcs3J2mNxwWor27bDMRVBkjqdw8ahBYpLvk9aasQw3DHjPQ",
  "key21": "34kNFTBZiFwu55mqaA7Hs2Mo9b8C5DfKPhenibm1c4grZBuQDSBcPcwaexSRGPMXSap6Mm8JLL4syPW5iMwHUCS4",
  "key22": "3PuDwigyimgDDiqKnzjycFL7H9iBLsZNVm8GcEYd8WHtqcopdR8c6g8nykUn8EUGoE9K4tpocZiQdPe5tabhZPtP",
  "key23": "gqFrD1kxKwmVuZFDyZN7Dct7S8a3XbzMiDJKLAPR22cZAHTmoaipwkaAzkoHbzP5e9LsGk1AZvJarxP5zwy63Jn",
  "key24": "3wMAxBri7yg11hEhmwRJrT9iy8JEbCr9Y6qFRsrvcCZ598exPRcNNyVUk8xRC3y47CwtXbbV5hS2ZegBLKpQYTeW",
  "key25": "4rdaJD6VdGdB9sTryup2sX54drFaj1p8UFNW2wCJLCoDGGuKtyG4m5Qm6zUyBYDD1c8LhXpDFpYx6EB2SnRyRFLQ",
  "key26": "ELWVjxSpc4UerxSdL26B8Swj4Lggzoromipatk6ZUoDf1yiS8WcppFV7nDLrNPz8n6SEYZnYuoAQZK1UqQhS72M",
  "key27": "3q1mutDrh2kHibVZNKRjY9PuCxbhSmAURKMvc9ZfWrGiJcBVARDBaswq5SK8kDgpG8y7MvFes4BjxJYYko1LKaax",
  "key28": "23PGxtSzp6W6kkrWg9PC5GpXER74F763ygA3tpP7JPZxUfTPQsrgCj9xG1oipLo3aggQV5eVgj4GLzKYA9hGE298"
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
