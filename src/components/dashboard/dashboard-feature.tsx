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
    "3UXcjKL44rG38LVMPHLKnhdYHfwjW8xGz8QpGPYCpqo8s5MLStG8qxLj97x5Y2nPaDVmmbnbq2Mj9QeXjM7spomQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDUaVqLBfgM1U3KKjwS2Qv3a3UZTKFTm56muR3HJCDWiLcAYokbFRWdfRRqbCJEaPVpFo1tJ4j9kRact5HU7Bdd",
  "key1": "2mnarAD6matdyuLEGQDVfn3dxRESBoUdJzjEJXTRAHVpszPrat4jVR8hiwzdPUs3JWkZEdiX7niz7bcFDooMzJHe",
  "key2": "51hF4EtFU5QN5GwWzTouuEQC12GrcWvzNUXvY5BzTiVbGoQ3TXYhACriAAvQwwsckjLG8pzN7meojjnegqskMdBw",
  "key3": "3VUGcfF7h5tStKtRNsr8zkT3XZc4tEL8Kb59KYEwaToK6AoJVZfcBDpc7fkmXtTAeXB4FNSMNHpJ2afoVz8K3GN7",
  "key4": "5RaFDt52WhcsxDWLYA8JeVsjqswTbAj85wEecPKv6nYU2y3DAN41p2j7R6Ysc5nnCTcZJp1KxedHvHakfXKAdvbV",
  "key5": "5Z3CVcNPg6MT6eQ1b57XCajWPE34dtB17HQKJ1Q7UfAjoxNQJkQs9PnQ8XKLHmTC8HqE7dM5sZWjAqrcsyZYETQH",
  "key6": "5zxjs8anCB7UzADxsRqP1tXVefPrHmgF89E8dvEaemBkCxZWjxDQt7bfqEgBVgCqctoUyuZo24Yxjpbkt7KHv3D7",
  "key7": "5rnvpxAESyMkyWewCQ8u6MRp4WQAcgPA92T1tPJBttcnrCB7ni4zJgCscX463j31pozU2hyLKfTcpGime2vCx59g",
  "key8": "5McqRaB5N15YjrT95z5RotfiWP8AFrGbJx2zB7F4arjuEnkRsTCjMPcU3FyKWJ5di9bG6cJjNU3UstWBEgRyMt39",
  "key9": "4VQ3HrDL6xorz73wMzrRFJDfSCxbcEV3r5wGu3ZPocXEStLDmtKEWXsjuFzzGEdAZyXdDAtNpZKgBxCH2W4SZgbY",
  "key10": "47roHMaQLnaLn2WLfnyhcRxw9seLD64CjCejXnhXfKMUzJLesgcZGP99Ebvg4NanCkBHXNsxhBUK4NjE5Q7A2mMt",
  "key11": "Db5dW6rn9WcEkprscuZdcU9o1C5HxHAG6mXHRcVhQsYA7mH7n73EKFeFBFxDuSpXDVyrhsL77bjdYsCvyRMonmj",
  "key12": "5ULxDNW8WHgHaDzMfMJFE7A19RMMhrqw2wdG9K423wP8zUqoYw7pWDNr3CL4rnmbQF1E53J5UGwUTuFEARbm7FQE",
  "key13": "Mtaj8mtHqLSujsQACDxA3jokQHEF9atfjj8NYyr9rQxLACmkf9MbJoJ1KiCoU2QddNJC2pPejn7KXeF4WtmeTZK",
  "key14": "4ibmE6gTXHxdWMaLDd6jGkDXbc1pSaEbEZ6XbEUoo5xteESoUcs3mivYhg1d7HoT5cD7xzDsG6bW8FRNeKvJY7Hq",
  "key15": "hxGyYsPyTwGqpoqcPjf4dZVyatMBpN43FAys5ATwhDm9dVWwxdJembJcTmccUBcbhKqrDRymFxEti2sPDsyHZSY",
  "key16": "3LVg6qzWAHKEPZX5jkKDweLbRSsjhD9Esb6z82gFSX5vNPwvewUjg2AuHdt652jy3QqXPMrMb3Kj44rz7ggpB9LH",
  "key17": "3ALwzkNvJ9KvnqzCwQTyo5D7KNEeGnL8GvdDbZKhtstDk3LtReAmhPBPJNV2ssqGrtd38gLULMo4cLMQPFokFHZZ",
  "key18": "tTXbZLH3vhJMVbVkpv3A1q9BNzjvLbXSuMkbt7etVV8hyoZEoG3EXGHjRuXFTeVtpE18qsy9bVuut5oRbNHe9rM",
  "key19": "2THJ5izbDnh9q8KeNx1e1E8Th4x1mHD3hD2LFxXGoLPk3f2zoVY8Qbqt89WFPxQVQWNc9QwXDxXCNqdxwMGjninc",
  "key20": "2VQmUAJFqbF4MMj28qqXuHkkNUAVmXGz8BS91J5eCDJ2muWMf6H3jJxHhGoMxxmDZ2FC3v5k97VfynnrcqGBnUKL",
  "key21": "26EprEafKgM1yo9YoPmFsUsxi4YHeKLw6QrBea4uz2tHhA3CGr4YQVPNRXfxJi6kFcxmQF4jHbFtyiLESBMbM3Bj",
  "key22": "4zZi7c9oAmwTDaSN15b3vY6VNoeqnQNr4U2idL1abw4zco2vH8cF3kkBhQB4dUpTdNV1c3bNk7kH4KoUoA63APgs",
  "key23": "2BxpnZy95zf9tcCb22ScsBXjVPwiecCdaRwNkED14HeyXsNgWhjabVvJnmN4Lyzhjst6s7YXKbSuAdx8rTkqCCDB",
  "key24": "3Gu8t63E4dHbaMjRUEzdrMnW91QpSVM4W9Sect9BP7CwX6Q4Gx4846sufwJXRsetefUMAUzvYFn2wpQzmX1DS17b",
  "key25": "QBt9Bufi1UKagEL1zWRNDNGnJAMqxSzCDKxjpy4or9a1G4Tk71YnbVdiuo4yGXMDHgWbgjJLPxdeNDSua7FFyBP",
  "key26": "5nYzLyuMUPzda3FrHufvNcq3KAkzi3smSsDwFJrmJ1CirGb96bWCNXNn6A6EGBHGM3H2pTW6p1BXnKzuQgSBNwWV",
  "key27": "6vAiH3Yx8WLs8fMcdaiSvhimVgxLz6n8wVjBFFH9CXp8MfeTMi2mXNffHqNMxk7Txq6dLU5v4jvRwvGyk3opQdD",
  "key28": "3V8KuuLTUhVdb7SGZ2RcqM3sfZaaqfZZhP6tdbtpjgsFTutEnPsboD8omb6DwzKY5DPjZzGVbzQZQxv1xNaTYfkA",
  "key29": "5b6vWNQZ9YaKWxKnf4vBk6BGY5Kh3H3nUbBaq3duxKyC23x8d8N7shmRq72v67zy6MtENtSe9wLjAESGfPyXD3oH",
  "key30": "3ZbkSb1EXDesGK6kGydv5JaoDCBhgGnwEibdJ36FtWk31prZ1pgTzD4DhKg3ZetT62VtGkvoyaTuDcmEARunsYJE",
  "key31": "4D55253VfMJCLMbVmf1RD2EJyDsXf5cpY8h6fVsV6aAhnB2V8ci8WruNaGDar1oNCkPkpVwfi6HfCtN3eYxoD2ms",
  "key32": "44up139Fpuou4Ws2EPg293AuXqAHr7oK9TLHu1QQQSvfdd1DbejseDRNUUVYPsBNvT5SqVvRigLe6V7mTxg82mF1",
  "key33": "21rRteDHGWDAz2FozoG3X3Vc89TvMfmXKcZCK9GLnSnvNYRfa39D2utGi73ojHbWt5iyrVQrYZFtCDN34Vn9R6Hv",
  "key34": "3UczaDgVhdAV9Xska7zT65NpMKxpLUAwoPJhZv4SuWvqZbZPmJ4AP4fwaWKAdwmwQexGKtcpkoU6nMytT3r5S13m",
  "key35": "rbr5BpHaLAxqMq8BjpLXCVwBY57LczRKfqgUaAf5SN2Gku6f5cHHwSdqYpgyxi1Wk1x7ceGz1B4YRn4QwnSNTyu",
  "key36": "5DMfFJqfpd1Wkxho44Q76ur2ZsoKfbJbwkvqKew3gF1cUikzcUgrhS6QZSxwsaNT7jbkHWqk8dGwhURXFCwveVGW",
  "key37": "RsMqfCp666eqr8QwnSTLpnMz98MVzEd1fVWw9QFct1SLPv3nmTTkuqd8S6vKTeQPPp5yE679H6CewDkbG2SFywd",
  "key38": "3RE7XUm1ZBdb2YQzLFqSyqvQqF6E86xUK5kyTxSfnaQM6fNRBRRFrqYo4sDiBsi2swDqFEtFwUpwAakiycRkazhw",
  "key39": "4yugYm61KY2ruCCZoifXrD6jC1KDyXPoCAsx9nCy7azcyv5V5VydZnJpEirBQhdqWz2A1ks22MRo6A4Pqwiv3yw5"
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
