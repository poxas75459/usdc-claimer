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
    "566V7qq6q6pDooZmqFm6hKzXKqw9j9EKKEb9efYvKszZwQBRApRtzQaCHekcUWiY7QvSC3ex4UxQvHuEEZPtstH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgGKbzEAefUGVypKfSnJ8A9UzBKTthxMBnZ63fxJrCKAcdo96SpNF5MXgpAUUFaCNfeMpxaohcKjYrFjkagtJGs",
  "key1": "66YH6YyxisPecktp8jY94VioZtgy1PTF56g9qTUzppi9RbMZy3oxYd3xdaypWQqBhbHtUoyR1BRSqwSsgfUEhk4",
  "key2": "5eQJexwrBaQFmcdD2tPWx4oKvwA3dpdK99tGGdo1nqmtJe9nEYvpWuGfQnf3sdMoJJqCJoNiHVJGM5Epff19RWW6",
  "key3": "4mic2iGvSCQV9mbrCqtBpnYL3UxZGBgSxBsWZEExKgkpVYqGPDeYZQxtcZYKrSb5y3zW9hoavFgk14Ax3hFEGFvZ",
  "key4": "5RtGs1KJK4c5zRjoyw94KXBRD5SZhG94MC522qj4ZqrirhXu7QQDWkWhfb6WK2zpawgFNM2wwPK3L6EEi3CrTQht",
  "key5": "4ffzBWPtsYFaeZF4tRB9N39CvDqGfvfXXxevSM1WSWJfo3Ku96C3QspbFn67iJHbRC6KzXwSoQzDGSvCrhF5eXJT",
  "key6": "2XBjYs3RnDSxmj4qVWJ49EbZCwZY34Hiu5cFva7mpQh2YDBmM9TAwaNTk5JA2tRcBHjkxSgQMctH7sML6HoDf7gb",
  "key7": "5tHRXh5y92FKjYzp2gZKqrbasNnaMF1j7e46BHpGJmpmPadFrJBJbd9ed8KkWhiuEQDedNZybN81FFvxGhoMWbp5",
  "key8": "StsxnTPJPQkPb6N8tGXPNy1n1nnxxmfL35zpB8fB9utTqzvT4fvfDD51cKBZeaWhebvmpe6Uik7SqJhbYDCdH1V",
  "key9": "3Uz29S6VKaLC64oVsvyTqHqPJXjfguwV96LbUsBEbteu53NeCdqftAPFsopChBUsVRicsjfD2aJgEVbAW3gZwFvU",
  "key10": "65tsnYqeFDrXGoHrWTGwtn4R4fQ4n3RDVBAfLcRfkUd46UTaraW6zuqugcnJtJYdNSu7pbJDzC9vn7Gi39TBDAaL",
  "key11": "2raGMefMRnVFucLTdc6TJ1P4eHAGKvCJJb2zVRTmHdYpC1aeDpN2i9K8ZZwoepT39V9hGJuqbxzTDt7tRTF7yjEJ",
  "key12": "2BoyC7umrynig55nWUT4VS6TVhGRnD6Fa8qE2xho5kfFGgFi9L6h1LJeFsZDZU5WeJS9udY77LpnKVwftdsyQKGg",
  "key13": "4A2rgEdtngMs4WA6XUa3NxKrLigcKEGRHHs9jiHL7xZMkrEqaMxjKgXF2RXmGCiDrK4G7H1EVbEqar8NceQ35V9E",
  "key14": "2mGEro6CanzArxHiY5H9tSiyB6fWjWszhHySjYcfL61Pd3PBgnaizM3ndTuQgPtjmgo9sA5mLzTC3QHjPLLv4RgU",
  "key15": "hLjsknG8ar4mGLmMYs8Jw1zV8fuowRWBaem8fXvictX3SsCP24fFHED1poJnxddHNtmMQ8QLUnqzcTBikB78CLL",
  "key16": "NYqyHGo6U78BsaqZzkDueMQeTpm45gAJ6cU4HuDWazsoRQzXqvGnkXw9LBDdEoHt5jQjS9GPPnawJjyWwfw9wNN",
  "key17": "aqkiQtqzJYBhRHqbzC8XNvzPAjNPuxJ41VURJg23Y91SoFRVEQ8jG21UKUznPMbSQ9SAu9ap9Q8NzBVNQJnbGV1",
  "key18": "3Q5SvNmY1tp5AvBpVn6JKzaiDTNXDGGE5uDt5jrXHpL8zNhMB1xT5BZX6N8s2TTwAD4TA3KoMHxB9QFZgKPXSSSV",
  "key19": "3qsH4LKfXDXfK5RD3zyJKGQrr16p975zteTaBJuib5GnZdJTBD4kdG1dyrCGEAQbhoEyibAoBb17g5rGQQ91Yevd",
  "key20": "5JYX5bgKdTnSV7MVNT6qHGKSs2VNQqNk5sYzsHzA4qfpP8Zwc1CHuo5DAYu1gHMTmQpJfMsQz2BHcMJ7BtcvZoGY",
  "key21": "4bAsdw9prVVMrcJu8CFDbNueCTnNq8qFSVL1U7WZBFFgnorLrbRWSfyH6GSNmyqcF44DdeXXYKdaUmoKxaYvj4f3",
  "key22": "5s6hzcz5HaNSo922aeJBhW3CrtYwVvsSvETQY6wbGhinDNM7UWm5BQUo7DFFMpbWMcNs3f9NhLuVh6NJZGMnrUsi",
  "key23": "5nvWYCYj6Df2haeq889RLQyfG3nANhRvw8J35dLmUrwq47hmX5eMrhKoCcaR3JdoMhxp1Kfrw6vLmeYyvRJt3gEu",
  "key24": "2R2aDHbV4RnM7Sm3t49k9dKDWXq4Lhu7SsaCECCLgqS2WmFaPrpPFLx1f6vdV4pCJUE3MZMZ6ArGX9RbiGo5wMun",
  "key25": "eh4KYXCyJABZZdNZqV6TvZ5yVfwDxVgkSfVpfx2cQFeVve4AKccH5Goe8cjwYWbvLsgKDorhKRQszyMrwPnGnQp",
  "key26": "JZn8L9tc3Wv3wzqMNK9gTk3dz2qEW8EVhJJLXrBSJrL4891VCnrm5FWWoWrSXeyurkkeww8cXHoqpjhoDgr6NKG",
  "key27": "3nVozDy5XGt8j2epUSp9dBVXiA8uy9SZvmTjhR8g7ts5Ju1MGb9nqXW3U8ifLWC4UT2wbm1jnRS6ntyt7UmwKtQh",
  "key28": "29j8BeeCATw1jth99nM2sD61NMoMWUaKfLRmiicVKREiEks2nfFvd3B1d9HP9AGeBabSM82NbhUBMvFfN3X8YDxh"
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
