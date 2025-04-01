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
    "VAFL3xbxtZgFZ8bi95jk4ZcMd6v8G21ftuiwaeawBh1SVjaX5oE8LYWDySLvEbzeUyeSCdunKURXQFadxJBnTWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5zwdAsfPY3R4RfNLqDkFjYJG3BKr19ApZ7ucVFqkPTJxTPwRU7TnWDnj4yhiisJLFWA3wW8gphyKnJSTgQQutX",
  "key1": "2JYpFuHKLbZNd3Aw8jwC5kttW5gKLmtxLi31uCiZPgTLdpSYeL5otdXEVKbNAvcNp4K89NrViA5EBV1MLz6xdgi5",
  "key2": "B84bj3fW9tw6cbZrFPsTb28GUki2zn67ivkZ8pkPrRWUwyWi46cBEKkxd6GaszG1JXi6cCqr6B81JS2Xz997DhS",
  "key3": "4rs5eQ8JzFvHvynYrMtyNWqocma21V5o49hxbinGhPpEZG87uSUDb389qiLugyLCLmyyLFPeEHtPVCD4ZuNwWZuV",
  "key4": "xTfuBgdMNf22G2bnp8poZQnoEe4SLijXS9mnxzXKVcVbEtUHfdt5Xzx5j8Gf1YZ24desdZb9WY4pWS47J48Ed9d",
  "key5": "ztqeeGqR2vHqeN9HCSbLDqtGkBX5WyF9GDQDQTsQqDBhADTwHXR5yxDdJzr7wsBQmtULKNSSYCA5RwVnJU6jnmK",
  "key6": "4j9q56TTuRmiS2X7A7im26bSPo8TF83wiisu7nSJAyv96WzN8GjZFHiKD7t9q4dMPugW1kqE9yxoaGgMy8SCCwed",
  "key7": "24xy6tSisyvspd1Zjsg1ZmvwG9wtW2xS93P98Q82F4YaU5ThftpNdX34jBzuLj4RPWQW9yKFBbj4dQsLrY7qXV4d",
  "key8": "2QziDDPEUKczRuFNLXB5ZWKVmDHBjxePQJ9tEpaU6vDUbFSJJ9sJa7vUoCfYLQmDn4U5CYy9uJB2qW3h6RakBnLq",
  "key9": "32k7PEhZnz4Q5eu7b4WQ9rnTdFeU8YuRr81bCVGvRDkpSq18WEAon17HDGi47KAyMkmZdo3Khxzn27HuPSy26Rrn",
  "key10": "4gnAmHUgRCkFr1ZTaGyZsQoRiCWSj2Wc9jS7QCRdrkeji4kHGpjLxL8iZHti7qKqw5WDhL5jYbiwFjd7nGoGvV25",
  "key11": "5rsY1f2oYYP55Ts38hR3BM2Yh8LRr6yNcLVTBJVdT57ondoam3GF3gYtrLzjH29Z5dqLbsQYMWCyCNzWAEqGX6uy",
  "key12": "JUBz8uoN6LtsFBASkrM37nko5wDKEEtFAbgXeB6T28aSveW6yLTUfrZYVwdwxzNWV8xej7Xz1YSGc3pyE1p8nLG",
  "key13": "6UYT3sxsPt6e96rzA343shmZhiHxG7BokwTVvmgJD37Rj1is7z3DY8StLzjBKGLLAs1qmEhpCGgr2mMcQgwUto8",
  "key14": "3uf1B4DraZxs6APnYX4bdyvLT2F8his5fRyMgHnbM1TzaBfF88Ahixr7TZEfj45gaZGHufjHjPDsxrnpw9YxUCQi",
  "key15": "55BuV8oN99n8RKkTNheNUCWMQgvGYDhoPebfo7LJnY39LcnUgbNYwSsuUkojv4184NUwLT8U8yWgq1gGSgWuZFk8",
  "key16": "4LWB873zH1HKpgEZRAaf7UYcSVeyevF9Ry2A3h1M3BuaZAcPB68b7MjnM3yPpE4vrikwhjyqbdnaiAMULmsVs5TT",
  "key17": "Ka6LSiDpVVXY6JyBrBb4tzg35mK9PYdEyxrTAojbb67nM5JjCDLnrnyUws3QpQWhU9VcqAARxCFQwhZUWKTYcy5",
  "key18": "5SPVku5q4KqbPBKRGyt5WcN9YysN3JQnSMRp6QvmmpVi6ATbamXE5YpeWcLEzMftqPwXvaQgtYXyhCbPSTs3ieXT",
  "key19": "3zkKm1qRetDi3kakdedfwgzXofoKTu9eqDxpHsBPqAK9wcXXzRdcjw7XihMgkppX7VYFDZ3AuQfBBaSPFGpGUR9M",
  "key20": "3vWQkZc1AZwRrtJs3mFtS16PH1zo3rFfoMhRxNi7fZf1vjm66sjZd2DNnff9BwKDEBkwo7dVqi6prtX7cTpiNaEE",
  "key21": "56ppaftRhMuGKk6MPQSQdDaTXfGMG4y7dUgxytwzQJPxbhGszU9oUuMBFwKRk6tGZWuHFh12DhgqXsTYSawcCjZQ",
  "key22": "5XsvQNWJdgMyrhcfDY5J9ojnfJQ95VR4QTJDemEUrn7HdUimvhdCXrmn5f7ttbavnF6jMYPLUac4NeYjC5h6B7a1",
  "key23": "hZMSRAuGWnWivkoNzBy5SUFRjow4b1Vua2nVf4ACGycZVUabyF1Krg4guMUerJ8TCXMvZkoZcijtHCMbSzGvDEZ",
  "key24": "3LvJtAQZ1NxkaYVeAwcyr6mh1EvqZPypNfdvwq4ckiJ52HBtnjTqTGcdFhFPZrk9JGvYzvP7J7wS4NqPPjb46rmK",
  "key25": "3oqWixAhcK1szNj3FBV26UWiwpZDJYhRw1mo6ZM68xgJcpVikecaEXFNcZtr1U39KLznhpQ2AmH3NLktrUB2Xebt",
  "key26": "2S91GDAXLxcgmY7XaSSTkiY4s2zRxo4ao2Ro38uC3gPxUp3VdpBVmQgWhzVjWeM5eb8WPvohsUY5RkL5WLFBgTPp",
  "key27": "64ev9VDGTDWAv8gEnxUcDMewp5ZgsfMHfLfNpckmqW9YgHynUiHZM4wg8B93pyvfamt2Kww5bTx2d38gDs6XjXoU",
  "key28": "5MMVHDvo9yrR8EMDsRaLzaobaNMfxZqwSkF1DJQheqqMndZptGwVGP297XRymYMbpq66771fnz8mChCC6gaHKYBz",
  "key29": "kUtjPS9E2uzv4WmNChfcijpmqaL9yyV7FysRQDwJ6AXBFFVp1rzKY9QXT4ouYTxSHhT5t2cqzLaaxkRJ8zVXMJm",
  "key30": "4K7F9wxZUQzBZPevwEB9noKEdbq9THLpnagchFVVHGsX6xPWDQhsVUgEXhksAqQ3Ted46D3SfV8WXkk3qUQ5eomP",
  "key31": "56HWAsBeMcpbd3p5o3nLRMAJz4UxjUEhazaDWPMmh9GRgn68cph8uDCPT9P8iSwQYafBMqm7AJtRZhmnh8HWEQzv",
  "key32": "231VUJs4bsErrCm3iZsJxrb5pkcnpZSLYx9JxkWPGU648uDJZ1xTj9A6LtHWR3HqhDdR81FVkegszStvSnckJR6v",
  "key33": "4W8v6Z3MrUzxL7n8G1QuGort5DaDF3XE75LtsBKLZmfJPChDyu1GyAbySWeUoZAMaNw42rFpgwtfaKZGA9DG3fs3",
  "key34": "2qdjMSndUCZgn2aHxqZ7aUqoYkswBcfsMnxAEFeUATpGR98MdSKQn4mmTGXf622zrVHFcEorbvyTENXZaFKc9Ur",
  "key35": "5D37S53ggvTm5pZH1qp864toyXxXU5vgfGGcJPBP8sc21fkHwqrWd41wZe29MF61JSHrNMed3TD2ZAPibiCVVNif",
  "key36": "62fzrT4BgKFKoKGXWRfh5jzSbG41jVMJRAvgBPCjdBBRJhLwkQizETmroXzP3HCeEnutMNUd2d6hNMD99zjLcchB"
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
