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
    "5j83RAToKj7NvnEcmn7h5HGZnnsW5bd9WiNyUFFVvjeJENxoDUb5W5w93w7jqCeVKLyyPjRJjcCY1aihmAPxPXXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTj6VR2vyMkur34Q7WrBR2JDM4epLszQSeDjPgbApBGYMeo3LiAnLXxcGnKgyJEp2EftbXf3e46EcDDURo8pZMu",
  "key1": "4oL5AdnWTfrQFCt9N2oDY89LBKLuu8qHXJLysbzD7mPoTbggHYAps9izd4QMe16Z6BjVKDia7RDnq4igQnmuubTF",
  "key2": "2jLE3M9dwz87xxyapEBNurwYopi4H8rsHCzycbqe6BFU544TCtjirhb4Fcs5QJs3GWhnAGmyhcNAcZpCSJg16Fj4",
  "key3": "3poQhT74udAexx9kV3tEFczw2FJADGvyEq5YTXvugxUeaRYuBhu5etqCQEvVJytj68TXgDXpL85Yia68iTKVdxYi",
  "key4": "421CCDnp5qyeBPgzXmnyvaMCbwrzpbgfLYfpePgGpxBCdg6avnSF671NBxMUPwe144z1NXCPpgewjQtyZd3HmJXs",
  "key5": "2aez1L7gkypVGdpiS7q3wd5VWW4tsB3yY1H7HMSjYqoS8LHoHUeFRZ67x1w7ujJ3GWekC5CTUz3FGnB62oBhXMZM",
  "key6": "YF8wrfBD3JnuCkPeNj4JRW7kewMdaNaxv2tR3icEb6trePD9sqNc23tg96qPJUwHVAgnwA3LVmvSFHp7PDTJg2d",
  "key7": "3Z1EWKiD1KFtVPdo4A2gF7Fh7j6jhQ1AoDSufJPhznJiBp2dcgpADuCRJ6TnBn52HzcdUy32puWQ5FKky1sqV6iw",
  "key8": "4B5SjxcLTApS4MrTM65nsWH3NsFANBknvp9Pp8TWXYcKpxyzbWGM8fU7SPCnBs9soBDiSEnVGaH5YmBxYRgfr2wn",
  "key9": "UrJDGBjVP79NPN8JoZMKA4kmy8Lkc36ZsrPsd3MXh3gvonDcu3VfDyy1NK6M1ZxrfTTSnhGRhzNrMCrJZFRU4yG",
  "key10": "2AL8yYdDbdvbHk7JJBqvLogKNqpvcZatoUDXRhLjMxC6Lt2ktPzYfUh7zFTr1CZzmTw7btdgCYm8Rxe4ZELeGvKN",
  "key11": "2DrQze5sY6fQnmHfobwpkNMhrwea4kGp6qsizdJRTVTYMUETWsz5xN6e4xGdBE6YXvBCjwgTqvq8CkuXGnfZo8Yx",
  "key12": "21EKAUHmCJjoZ51sJJwVGrCQ5m8yMH71Axts2triJD4zR7pCN2BK395zsUuHmsdHGAGqKi1dk7DYedH5tAEQeR6i",
  "key13": "5fHhtrSwPrL4FAnarLJ56V8CnALAWY5sNNiiqEeQewzAEa1LmLWdE7WUCjpD9RYWt2saL98o31DQ9ubCy4FXcYTW",
  "key14": "3QirwHfNSKuR2M1Q7Cj3ZgASpvf2EfoJSV5uApALpSkSfip7mHCz7Aw2uvehRzrEiqKiL2xQ729Y96LkTUgYeQhG",
  "key15": "3mBbyeopRhvEwuBtLnAgE4JcE1Kj2kBDyCW9vp5fv4Y4ZvuLju2pJKFszmbfXMn8p64s5iH6hrrWK1UHHUDQUw7Z",
  "key16": "yRAFqmakoTN1LhLmWjkEjyXCCmSGuSiS4FvBqrJu3Fm6djYGJukyoYuw7cfH486RdT6n9HzyKbVTrKmGkfcst79",
  "key17": "2KNv5NpWJV8PnVkqxJ2FoRe7EmDZrMd5SqzJZWU5jRt3qVAGkoWi5ciLs1bKwr7JNvXpSKkXuD8db9gKmiwU79JL",
  "key18": "5VFzRPqowPpaw8JMs3YYMXbVvvcDJFgL4UMEm4RLBsodkmYYHsyPQcpvAeFZaAo72aQejFzcRbBX9J7udc1GvgJ5",
  "key19": "4M1jhLaGWj9GQvFqbU9TBw4NnD1gLPrJ6cuRCDnUWrQz5YPAysRhMakSwASnYDaLQbwNAK3VS4WZhebVef4ePENT",
  "key20": "663Lr7YuWaUGnXCEGR64ZKVCFRWnsF91NfYtKpssRJLt4bCKE2VRX6P3TSAYtYkR4LUiAmJkeeKacYEHCcQzbM6S",
  "key21": "2XXHSedX37TN3ttLQNEReBAhZpTerwL8cBLrmt5iK5XMPxexK2SQeQAihDaDQFfTw6bE3prYVHGAggwURB5T6VWQ",
  "key22": "4d9aQPEgTDFMYLh6ESqiMceLfPoZHDMHS3X6dDPvcDcNr52LDdKeMwPLeTdjQAFdGxgdF3k7r6WkkMbufutEp91Z",
  "key23": "2LteCRPKg48PUpaxFi9X6TyaoRktwKCdqeA2UyUhcWuAyfrfHxEmmCJKpB4uTkCepmSU8HXBESv5qhxWvAL8aRkD",
  "key24": "4xuKxX9aCsyyHn2tdbiuiF1odfsscp6LGGsoF9ui1hYZiFJdZiwcGAArYnU47VVfEr6BqY3rekRPJNuEt4i5cR4F",
  "key25": "UNi2FcY6iuZH48CLMCfTYUC4GPjgHfrYqXKRSsyMbgpDkVfT3H2hwWHWfNJSoe4M1fBbGnzMUCv2qHyrPJU6d7H",
  "key26": "vyMuGSe3dAybNLGdWJL74MogrZNSBfsiRbvyVQGdf4mJgHYSpieZxYWkknPS6mjzBkVjSCCuUkgAP5svzX3GHWr",
  "key27": "KKn7MTP8u3pRRxi1vJQL7CSZXi7kibVhCSr1voopF8fbLJoq3Yu6XqDrq8d2cXdevsAC41Ptdi2hdY7sEbyPecZ",
  "key28": "4BnNVhgrwDxBCEykf1Hd7jLfpgTcWi2ThRjTSNJjsKmc2D4Z6MmHQiThh34G8XoVndgTh94ERsx6YjW5Pg7cgMpT",
  "key29": "4FJZd31PHeskxHSPUzym7u7qatjLQ9t94NqoUPoqSxcYbpcF85X8TvF89oXgeazNg1vb2YGTKsXGvAyoNmcMX8Uc",
  "key30": "5nm7Hbadqd6SxpRvHEL7dWJjijebmFYdkaZiPW7jR1upHSmpFKFBkrjrXyYQxYeGE55uR35BmZLKWE89DyGUTAqE",
  "key31": "4PuaQsDeVYhLaSkXumCXFMKwCfMTRQJU1McSjxRCq5RWXxe4sjeLLKomqG2q27eQbUfxvhL7niyQiwguNPef6oTa",
  "key32": "4KVKRJt18EefstEVLPEiWLwmgBufhJ7XJLV3qiCneEDz974dDZQcBoQiBjtL6QgbkVrbnaSCzg4Ghi4AEG1HNm9a",
  "key33": "5qTxwFqVEHSUAes2mRy4kAqxsWs2xpHhftfYgeedxnAJqpDNbse7NGPgfdKXeMiAU18zAK1Cb3e5xV2CsgCPn4EP",
  "key34": "3UfJwvmLSzR75i3XFKJUz5V5YKoyXSPKrha34jTjuBhe4V5D2bS5DjFMzHPRdHxwHANVoH3aW7kCqrxEmpyBnbHr",
  "key35": "5zi4Awy6uBu8AEgAC3xenTU8GJ4gBrV9GemfBvhyTkDGofHGRuK4H1AEAWhseg3NpnK1Pc8z2h5GJ6a6QuwpwSxo"
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
