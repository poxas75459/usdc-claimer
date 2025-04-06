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
    "2dWp5ZL8mPAKVNXV64usHPaSUE8ZhvW8p7jWwcTqBePFRRiopUW2cgxxWwXWauEtkezjqvbB8zNEg82g8RfQkYd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCaXBGqtuTd8nJrfHhKGD5VTCs7QF5zeSpmXDYkur3LJSaSMGyJBE6wvzU3EReQoTNxCxxDMyPsY8jeMYmd87Vd",
  "key1": "2iP3gL668SmbwfNB76EfH9pXhy7wmUe9XC7sTZU5btkLWg1D5Eh4FDt3ew1kJX4hUST7mPwYYSXhDYa8aA74BZbJ",
  "key2": "659yHNxSQf5ZvEg9uj4rGuG6JdjDYPJUgxa99kYAra12pdpPVqjZxi6pFMwRNWwAE1b8pvEcK224gVQ9soSoSDPM",
  "key3": "5YdEJueW36KFyMKt8bwsut9Q3AdkinUM32fXzfAvjYNuzGEBSJpJQ89jHedEn64Jp99CQGLBrdDt9cf5AYhkTLzC",
  "key4": "5UyHcSUwGzvQK6eUPGwb6j4XicPrDKzACUEq9F9M9nGnQQEoSt4JypEcLPBoEQidrVKXuzGLLbQwUB5YRCSRyy87",
  "key5": "xGoeYsxNQo7A6exM92DeJj5wmctDTK9MXJzNU5E1eQMX1oTT3ESvoFkZDUXc4pmKnBVHTNLTfLuRrjmsYq9YvPa",
  "key6": "3MGq1c9ajnHwMgpeYKq3HRqzV7H1yamuBtGTDrgHJZbEWEkWMfznmKT5FH5EiCk9ETYYhpNxiR29kZV9Q6P4Agph",
  "key7": "2Gtap9cC5a9uuhWow8x1PSx8dKg4q6Dx49baq2H3X7yDZW4sr2ftRXSGFYuGBVVyuH4RmMM2QL6tk7CE5Jn7H3ns",
  "key8": "Haw1jp6EL4vJWtcqpd3Cq2X56yafnvCKDpgCxiCMTZ3N35DsGaxgymX5ugRJ9tr3AkDLjptmXyZNRkB7TiFt4bR",
  "key9": "4jK3hdA28bS4KxsAHxcdhjH2GSHhLR1irCsLwpVb4XhULCdTRwr9R2EUtqFxCYi3DhVPBLEXbHnVWg9DeF6n6pjG",
  "key10": "2aWv7yyckN5WRRH68sfSsT29Ct5nhKhpzAdeFe7WsGRr4hmfTxRvzZj3itHYLTwRTEP9tAvibbnxTLom2PQ4yTeL",
  "key11": "2L8kmKN9GYNxv9Ba4WVEC19FSmqxSeGoxbHyPu1xAerRZzfRxjXLpKVMEJko8QM8K1B5gWircBtJKQys6m978A5s",
  "key12": "5eQ2fdXt2rvygA1Z61NgsbcjnAKV7eGMDG4WFc7ZBQyqguhxnDH6RhgRjbduAmc3zF5N9bFQQuJz4XPEAhkc1eiF",
  "key13": "4VGzPpG98chKwngNndvYksvvehky84CFQyEr9pc2kitk6aWm2fN2q4t9h1FNVeaxF8FZ6d4ggPqYyLL4YJ1dykzU",
  "key14": "2EBUY2mLUarHADcTaDVtJRsBnh8CMqzh45efpbjzuirwPpfA3z3CgZ5gvHx6Y22KmjgUKWocA3pAqvu55gHu7KaN",
  "key15": "3jB7K3S8kL5Lt6XcmDrD2DQm8MQiNpASE4qX2qtSuArJbjRDxSWwyTEP6NQqYNag7DP2yxByVaqtESPjrccrXxPn",
  "key16": "5B21Thye7fko6bjudg2fDLmGtXnaRiYNkvbxYBuWV2ysrikgETLRM5DCKNjPrA784EiFoD3u7LsHSDJv9HVZxfpg",
  "key17": "2zer5guSpZXR6UAWTYmf6WaFNDxVANhQUjjGLJDtvjXLu2JhFRf8HdERjMCuYYhUSrYYcQVT7zKRNX8H18PWFD3S",
  "key18": "5mf2uJyiapCnQi6rjYbD1h8iM9rFtQ744ypbXJivLUKS817JgBirvFHAGky4b9cBaS9sAJXTh1LZbKr7m26zvFdF",
  "key19": "2moMxjbrFnywbAmmRAshHQoCgQyLcMahHd9dB4eoFeJFbvrTz6xtEWXFbe2ZZ7bCcGEZc1qLBrmAZgEZRCnVhGNi",
  "key20": "4AbqCoqK5rjD8MgKx6pJ3vYCpSdrtVzQhjn1hfVzornprt5hzTATUEA9YpKuw2ysiR2AR3c4xT6CTeJ2d23BHJdd",
  "key21": "5NmRtofHtdqLpwzyEmAcucUG4X6rEYuMXCFSjQKq2RHjp7GBmdgC3jLYFNeEkqEiZMqdyMfMduZ99jdA8B4fTfqv",
  "key22": "5eVhbArzPeDLJubLQLWbgKBCndtYQnAh61Tpfr4b2dTicapMNbrkVgQKFMi9xUa8NzRVvvBthq58NZrNf1kF1hX3",
  "key23": "46Z1pVpkNrwM8Ukr2F7dNbVyENWwHLPsKvYVH28dNzVX1PhGXLLMvBqtEoZU1j69MgHUoowMZp86nQNUYyi14K11",
  "key24": "2sWAU96BdyKiaQTmKkPiUZ7x56wcTKk4YFLbjV1vKonSL4vRoZ6XTW4pBdFaUKtQhce3maBWTHTgMQd2Q88KrMMH",
  "key25": "2ghKxriEwicYvmnSURauoQdM3gyXwzQguF43BqGXBwbZy39PtcAuRkSCYCCLSJQfkQuAugnGw3PdR6iXFj5uZcFD",
  "key26": "gN8XzRQNTsPwS7PCThoRCdTvAvJ2trPwhMSW1ZzpCKE7XbcYvqsSAuK37Qga69LAavwvwzxzrvUdT9iBHkmnbkr",
  "key27": "4CUemYq1fSxUPszfs2doWeeddz7njj9pxZESqyMhidQwLMFA3X3LCsmayoK68E3thgsEP27ShLAb6u1DNsGLn51n"
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
