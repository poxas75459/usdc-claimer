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
    "3HS1drtRZ5R1B2gG65re7ucxjEEWcSbbxyFTpb2JFN9m2SJmrj8nMoBet199U5Deaop3gsc2y4bFV8uXBy3cVJ6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53sqNbXU5uhFSQaTjVQy3BMXoH77jQFstMkFR2bGhj5JkRj8m62YKywZav5YuJLti5Qd1KV1ZQFCxoXfNeYiQH3s",
  "key1": "2uW5vrpEHDtuyhv4YY7NTEqhSzYV88a7WBqdEHo6NabxZjDkFxrKFDKmjVnGaN75UKr6QM8ZtNohbJSb1QQCz9KH",
  "key2": "2GTqMgVAcvgo1Lf6wBPa4LCBv2KPYYPHDSaFLmoPZvdeFsGY4pNW6QMwVKPPYx6AmmfqbgBYad5ZX6zprfgs9kXX",
  "key3": "4jDDg2oCgkSGsEwMYrKEbeU9ivWtiYu2QQk4zZoV6E1F2Zp4WcrE41fayaak8uWuCLDWqAMzq1GQXPprxPgd6GR9",
  "key4": "3VfyWModp1TV7FEjcTi5BBpFHpyt7ZvXBrFGwR79WuApGanzUhT6qPq1r7EdarFJYQv7RrwKQoTLzwKhfkEXqqDN",
  "key5": "3TRGE7GvGs3TksTaKKexrTBv2K46VkbQXxBVaLdXQQWofrz4QVd2SgsEMC11TZ9PGc6CbTBcYPh2fdzpW2ZpvtyK",
  "key6": "3ymYZDYvn7YJ96iTnWfBhJWVG97uJh5Qfy5Yak51jLeDAduWjN3JHPSqtomSREqVmwN4WJ3fBcpMoF5wHjCK9GEn",
  "key7": "2QYbyeuBz9wD5SQkobcXmsAuoMjt8VZXD9Enz1igWW1X8sMMoENQ9gQyMLwR4EDmGk1PNiJMuRpp6gJMWws28gmg",
  "key8": "Rtc1Y1EMgKBs3DMsVchoqzRgeb3mWQSeSotEoMKYzHRj3NHbwLLP391NnNN2LnXdNv7LnDAjMawH7V1bhmVY3Yn",
  "key9": "BTKStXeRndrbktmTXe3JZPSsvPuTeGR5tSDtithaQkEP9XgJePz5E8dQKKu5qf13R4AB12Dq82DfrSvxTyt8ANZ",
  "key10": "1zenymAfRwVayow3ejW5LuxKob3EJcJtGGAGhGwNqs7sGmxitcQomSg4NAN2TbRAMHrrtViyP5zsYqBcp4x7ZXc",
  "key11": "2Cqr6boExZyX6qedgAov6jJFAUteWTwdkhTau1KopyeWjGrgBURGsyeMu3K5sWxzsMVHGVYZBdcwdNTf9XADSxLW",
  "key12": "4WPnDXFtTfgBppvastMDhF6uRuZAeEPJFj4g8PiSC1L4taYKbp1wgXkBdG6xC4eSLTXMQ4oGRkPUDtuTEhG7dBPK",
  "key13": "4vAgyhqg43zJzJGrGx5NVyTf6QqYgmXWrWmh9CZcPNJUHECv1gAVnMTpUWdJUrrkg6ioW7cHS85HanQPbdQBt9Ge",
  "key14": "5x2MpiLL5gLoDT7JCYMj5SqRpJo1r4S5f1A4VPY5s5AiZChTJNpT1mKca1ZLh6v8oT5NeTA8HLkni2MMdcokE6ge",
  "key15": "shh1yCJBdnVkqmUqRQrMADXJWovnChFoxL84dPv2cgBAftcrywvfDt3ijrZgjxs7hswNXox7T9H6ATpwKf4QHuF",
  "key16": "4NdgHySuHVodQK9daUtBprNaRZerisF9Sk3mSmMyA8zjbHLFkqY9kwFf9FsQZZiR5cq9bVzwJk6bgEvD59X6a6To",
  "key17": "4wyTC2Ts42orBT38LeqH2rvX7p5tC1FuxgZSwrNmHyp3Mby4bA5qvWVUWdpFmncxP5pGiLGrWYdkzAgoC8uF9uwn",
  "key18": "4tNgcp6B7kYbtU8e8uskxvE5ucKvMGmHF698ubhtePkaNnna8pm2Khh3WD9RrN2qK7Lp5JjapWE5zkUFJ4cZZK3a",
  "key19": "5JX6szUueY9krVRutreZtiQXQt64DcttnxJZVsiof7v1ZsLP4naeWkqbozd6UAVfNktNuac68f3hVNcNoEqtEnBq",
  "key20": "8MSSWfh7iUPGmX6mGvnn6MTBFFay9fc8esDuGJ3XfuvjcZkbSr97oWMb6z1NVdJrM5BAvt6Nwau9M4mabskDcgj",
  "key21": "3NAhVSZJCivPtnVFNxgm3LzTy9MqP4pjq23FaCqE1Jsidw1QUzdNgmUBpartCxeUCkCYriXTffRfqUysjdQU8rqh",
  "key22": "3k4iRDGzTfhdZJuG2UVD69Mhuf1S2ugjgxusDGTQ6nPBmFVghbCJWYZWkRfZUsXPFG92GEhA2PJuJsKUvdeVJkcy",
  "key23": "LgKGGAm5pD3gs4SY4kTf1H9sZAuFmCU7jMZ1ZeWDvRPbLXkKhda8W5mU1WojTfTkViDev4F7rfRofeZ89bsr7VA",
  "key24": "4asHmrqThzncgSXroBDMWCRaaQuepqYqRXubc86oTjn8GqaZZhZYBJJnB5Wndp6NDD9tf2zx4vZaTELLkEM7JzXj",
  "key25": "4f86cUQzk8SjYV3GGqPZwAnfwkPYL985oTuX9t6ndao9vd5WLb2yd5nGy8ykwHJrRMj8Brtk8oCCuCgA3jqEzAZd"
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
