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
    "4Cq1r7zbLKzE3vdyNyU1ioc1Y4SNP9JbasTyhFXns3DAt2wLQaXTvSgM6Q4DTBXenotbW2nXivAQoDMqt9Zs6qwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdmryUBgfvrCTzGHDgtUtHsWd36LUP281E7TShV52pMU8uYiEhtfAX717N7B5pihu8VoN4UBRYS5Mh5V85E9VJs",
  "key1": "5MyjWG4vZ36NpQx4HpPxgUCVXswwtymB96CNnSD2shxFQagBEQ1mwiQDwMWdU3P8NHUn2fbmVqshtTVhnXeAPQ82",
  "key2": "2GLRMdQECuaBLWfjsW4DYvxnAtpLaHfjkPLEVMZh6pfcEMaLfUc1TWuBBhaWZRtqjwNk4DDohhd7W31xewJwKurz",
  "key3": "3T3VGApogZu1xYaEGDcMkSGYHXsJguC22akHzvWeH2tWKu7V8VyeFBtXKkFDykXDp9RUfTopxzxa8uewN5rQBvF9",
  "key4": "3ycQtA1iT4i7aXZuNp6CUrqHpFt5LjJN8oHu9HjFKHNquQdiWGUUohDV5V4QNEqtg6AdU1j9h6HWbwzAPjFvgvjy",
  "key5": "3aLNiRLtmJFXo3KCqmpCeq2SaCfTKz9h16X4KjRfwsdhS4W7iiS62V8ZviZur8hx4bmL1LSBGq2kpd4A7vpZ1dnX",
  "key6": "2XNNDq9pFKyA33gvcah85CHX3Wd9ZjUoyaGz5sPFEcsaSwkPW4e4sPM4xVxr184qjrtCM7LYmbKzWH4VpA6XQVi2",
  "key7": "4cL24qZzHeyJ7dM1i7dAES2ZsST146gbqbReWhNo2vshS35qr7744aGWWdqGjqk75TMsk5WR4ZYfv1exnz5UCARg",
  "key8": "2Nh9QQEnyccSgFu4VFLvsL6wy2CUUz2ofPFUyc1qb54kV343hYcJR1fKLE5MqAT8gi8aNPihVCrh9BEfDiHuyyH2",
  "key9": "nE9FxLcSoxch9j8rhmesyfjG5otw7t2zPJhsTnhkmjTC7fdYH8MZYV2L9feyvwECu1F2A1nriMoRjFdJ2tJGCaP",
  "key10": "2R6V1ac3NjDuxYKMeF9kmiRwKjvSpQamWgDW5WHG2kLHQvUsTqtMmAnhqPMDBSreVdnrHHbDm8xQjvXsXvrxVtyo",
  "key11": "4CPxVgF3tqoPTxsXMHh1EMyUvFXRTQLcwhoNzX5DepvWTJB7pUimQW2L7nN68Zz6wSxqSEzd6NURAzqrQeVv58NR",
  "key12": "3tZ8qAtD5jqzeW5kG5mQSaJeXsRuZ17AwRCKGinq9rW98aZz8wGGgAC5XSbZxxfTCPRUUhM7feEyjDphJX5G9Du5",
  "key13": "2QiBAsavL4oGh9v5YM3pLrkSBnYh2EMPczQVcJZepnrjRh1jZ5nZj3YYKPk1onP4Ct5YggBJGFsQ4QLBhQ1ik2zN",
  "key14": "5LmdXjovQhPSi8mdMJiaV43hqiZcYSyfkx3CTG1wy1NqqcRG46ZdkjJRce9WjvZJbVkdfN3CZAEb8RDASDcnUKYz",
  "key15": "2owPg7n4Y1MbmxX8DVBRDiQHGifgTPTrXVSwPDM5tKVenrk4ZWCXd2qLGCYRJSCrLTyRnr9SoDPsKDqjPRNLREHJ",
  "key16": "3ZhXs3TCYvCmeCg4pGBaLgJma4tJeH9cTsJ8GbzE6bYSFEXSM464TLUhYyUdD1DuHFvTVFopCYesZx3EbHuRApkP",
  "key17": "4cDH6buQBrLwYtT7rujxJvJRSxt9PQMqoTxAFyE8dbpV2CqYvbSs9JLNkTPBYnt1x4bhFgUzySs54YjfUNuDQ3yk",
  "key18": "4HqhxaKkq5BGvKYEC2CDQt2P5qQFsa49K2avp591hDUW7VNkCHgjmGBNGeUVjm4XmM2hXR3rRA2FCoCPCVqKNtHc",
  "key19": "545udToMEDy7wh55oYdhcjwGyQNedfTa3c32rNY1MbLz3Tj57h4UY7ZapMMaXKR9EZwCuK3EyynnnskZFEeHQUhm",
  "key20": "3WECTyUCcQNnuFVoJ1Guv8brupZYrFdjwew8qyjRxdACZJMvgSVVAYh6s7rWU41XS8ddDeia2Sx4c4Rw7agjfPBv",
  "key21": "3GEsBt2hHWxrKc8k3HUyZPkS76swjJ3M1cKxTnTQet68xojMcfsGGeKSoMFKBtuy13VRnW86zvpBFhkVxN4N22mB",
  "key22": "36oeYrwsgaa1WPbtXncSrghRguyXUZG2FdFhQKxrVzo8tPrmzM18Frm12Gq6dNqCTcvA9okW2GSz33HkUUKUdnDc",
  "key23": "531yxpz7n1dTKXFyciW2iv6gpyyMGi9AKTp7AYMRi6giGTwcjyDcrWXBGo2kR5cETDxphXKP4JbFQcf5q5NWgo7R",
  "key24": "4XmkkXu77FJbqpExPLc3jetnAGymZ7madAbPTMxe5czSv4QHBDjAXWgHWKpLfyrwxD15hGC5Ag7GPUAZ1Ds5zE1x",
  "key25": "4eckP1y3vfQdQoTMucN1JnGqTBxTvkcukKm4isVDDUvCH3AVh5NFQZsGvNnKxDZ56U1imZa768XyR3LVP7GuYwba",
  "key26": "3vfWhcshbWBfgMXuFvvfYYyyXsRtdhDJv8PTeoJA2oME7gdJCrpXbbCKA2tEN7XGwDtVVUpmqDAey83kxo7YoDe5"
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
