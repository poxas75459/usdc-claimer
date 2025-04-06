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
    "2wNZaHsSpi7Gb4hwz2xA4FiUwhUwkrEwMwNwaZ7WwnaPgMiJnchQAmSg5tEy7iWHrcnJrqAppxWi85NkuMrnEaUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdNL6ceLrH4qb4dxkjVAahvLqXAgaMpZVpPWXVSDqBzd1sjEQZkbowit1Ank11Gh9X2NYxu1kYTghSoZXTtsDEV",
  "key1": "4St8uSCDZgLbNUUhL6wLrUbgEBmcAZtEQvpLaVNW9J8sxfQr8FZx64iGousLwJpzNQ5wWNf5wvo1rHfq8fyCsBmj",
  "key2": "5tKQukYWWu1MaKa4cYVypo5Di4SyyhixQp1n1faumFddxBSt7tzoVusQJ4Uvq51CeozJp3NS4AJLfhRUx6cKe7hL",
  "key3": "61w4pcb3MQhJojVuvUNkfaQZ9abwk5yV4Ar6tro9HJ35LszFCDtnf6NRufFbYt5rfR2VZka6ksYyvSNn1Cb2BSmp",
  "key4": "3XqySJLDfHjFjfRupP2sa3SBusPXK9FoBweWMoThDzGPxP9orMRGyr1DFDjTZEyp9FiXBXKmPy7FTsja4sagZudr",
  "key5": "3a1CHkVeDxYqCW6ZuDYS5AQ4nazxwMDNt8UpwMiaZhmqVvoUJPaVdtQ8RLEqmzhbtqaooppEktMz9MMC3t4YU4pg",
  "key6": "5s6AE3L2oTQ1AQGBuBf2eD7iGRQfypMPUFDL59dqNbHVUjb9ysqRzR9T7VtUxhPwE6MPimZyZ7CCPpTLY6JfUfTS",
  "key7": "4utKRopHVbqYRfGW2yLEN15KvqSiRGDHZVyE4v41sZ7vqX5Dw8Eyj7VbHWBAoi5iKNiB4NQmGwe78aZBxaz9H5vv",
  "key8": "5CxpHLL8ZKyHLH4T1pBuQzmeAPoCo37xDN5THxZ4YUCPhCHorktePCnV8VfedtrQPKGVERUgurCM272R8Qyo75YJ",
  "key9": "4ShMCYa8U3CHAB1qufXB7HNK73uzDfYqSnor9SvkUbCRdVmvunmpgbCaxYcgyokCsZmGgSRnXKyshFPnd1JSLUK5",
  "key10": "xM1adjDVor2LB2KRZB8ykHMACJMExTtqFgf6Q1MtyHuQF2CjEMLoniH61XHGn3uX6fTb38fXftr8G2UYhbhmmKL",
  "key11": "5eYoD6pCco6o3GUMjHmBaw622MTT3AvCpHUcozbdC6dTYtDeGQCjChAtcW1XKLs2ejK1t3sE6gERzhrfcT3hdg62",
  "key12": "5eXpMRoYhTsaNktgpJA8JJq3qV9YT94EU32jy1wgWqo6JKjNHTHa9zQ95LogiFh9mMojMFzwkorrpF2GnLwwdkDh",
  "key13": "xGM6Q6ua5vbmKBKMYHQ27X2hDN6yXb3dxeiiMj2GFkQSz6zdTs2UYDMdofjvh5mPWUAg9MxcctXqrprzf2NbQSx",
  "key14": "5Eq4X7Kp7fk7sD71iBYr7SeHcYaaKyUGrMwAnnNXUVUDqVNtnNEShzujonKNcT6hDmWKPVP6VXaPd9cRyWDmVHrH",
  "key15": "2Nz1AjzHAUf9AUGH8TixJRzdPnZmdWv7CrGgVgms8kD5GAQ1hpqyseiyRJS8taXt6LxQTzuG4ADZe1cxS9J6PDYS",
  "key16": "qf1JZNcpUiDbEHT9au46DmL4xcH2paii2tp8X5yAfvfjceXENc2CVsg9hbbk5XGiwCQw1JcCaqCkvYGSi8px3kx",
  "key17": "5KErreDqLAmfos1DJXy82RWubbiyrN5BMCNGotxwxptHp2tQkUozBGC52uamdC2Y2pvo8MxN29CwLDEhdha6DBSD",
  "key18": "62fXaeH9TdSFfx7VCZ7fENoi5qm4bXjy3RupH3YE5kLoo5k6dXhvUsPoL8LQwETm6RKpBoxegokHUobHNu9xnCPx",
  "key19": "BYHpnky76CY5zBaPtmosBAmiNPqqftct2V3yGW8FwQvqwd335KRBhrPYFqWQdSDZgimnQ4zUYq8ZojHQhXrX4Ug",
  "key20": "2yYKL1JM4BNAuDnf6G4nZ1Vvy8NfwETKaKPyVbKmrTNVU46qtmitrLBgQdzpDFnN7H92UrmfzCLzrbPNXP6W1Rg4",
  "key21": "5Mr1FboQLb6okrEv3WAcjnZL7rjf9HPFE7981czFJUHz8SGpbJQBALa521yShVCk7KcsiPd6ZhUxfZzyGfJFBsmL",
  "key22": "zcg2Fsb9fnCCiW2LDt3dZr2qiZe29t7r3w3BcH8tfECZFJojUNwwjmMGVHrrHjR4h7g1Bw2o1eF8avpor7fcNXR",
  "key23": "2qCosvJTpZyuLhNrjVJD8fDni2mDF4EXoqTpyiah8aX19NKmtqwirEW7iyBSgUcwZuPC7p8L6NJErFJ4bgugrUWi",
  "key24": "44DvyKE3zKXZ7ZRbm4dLSEuDJg7rCS5PaNi6EwXseHU7oPo9JUF3riuRMPq2idrrB65XjtPqD1xNPJ3xPv4S3DLW",
  "key25": "5CHzjyXeNaK3QaJ8BjqSXziSAG8UWzMNprNxsjTvsDXUUD9G4B1b8QBTWCRMNDqkN2qn4E2yrWwLp2CBCYpJ7QW3",
  "key26": "5N1qjZUnJMRkG9nNPq1QDTS8HacGrS62mJUV5XGbCK6zeLyyHJ61ixAvwSiZfeaXCjckqjt1ovgCiivWSHwd3Nn6",
  "key27": "2qVhittNUVq8BQfTdJ8vt2FF6LGQcgHvxqbhhnNvWZR8ssy3stknuxJuMbZYs3YM36CAn6TBtgkgysanyfiAcQeU",
  "key28": "5gUGtUEKqHY7NuchmRgKUpMxu6tapK4FBGwY6CQR3YFEy7RWNNxtkPTtq18CmY9JgMKGVfkvWnKaVQdgQchzCKyt",
  "key29": "5iZccXTWVrax2u6UYYf7E8tnbpPu9jdPiD8nQagGd3xy4DiMmWQm4vEosLgkTpTD2H2eX5TH9rF1NKoWxHPLqEQa",
  "key30": "YpUMf12CPXjdJGUZBa5U4zqxEzT5tRf4C7iXAtcpsqQ2nrwqGggr9rS3gg5s2WUTie9WRx2XRpTQPf7Mc4ssEg1",
  "key31": "NDbiYRtj9W29jc7JsQmKegynTG6uVUCECh6FwFnnENbcDLSSGytRAgU5PND5Zhza3p4Ame2BpSyQu3AY7FUr45B",
  "key32": "5jXPVRKNctDZrm15zLJnixJrh7wNbzneufxGSgNHcCChe4p17d2M6ZMtEQXL7pwD4q7tq9fcLpduHUwXiQSKRp1K",
  "key33": "4qVcT4N1nbsyLpgDDj2yB3xNKP3YbrDQWa1jteykVmewwiDEh4VsGvUP5nzmrzDKMVA1xNj9EgZHj49W6LK2xZRh",
  "key34": "5LmDrLxdpMEpveh9umSpskvwiUDdQzLC29cNCmdT9Forcrr2CAAYankrWc9ocaq5jDWVmD1yvj7KfxSo9LEXR28C",
  "key35": "3xaofBdYWmYkeBAxgtztyRiji3cmoi8JDqcgYPEkYQWcj2Pk55CDGPi2uL3pWfHaHZL9HU2PsEJLeMXgAxTgj7gm",
  "key36": "5Xh49esAtdEVotvT17f42YPwbT3okzcoTHwx6faGxpRZTpGCmCTcVqKMKFesV8DBFmjtJBxLBmFa4nDGbmBXncqU",
  "key37": "5WkFA2YV6YWarYq2WiCAokNFwJyXBhx2AbcmqpUeNc77GekL4qDBQNH9EwohkBoKArZyMnFtQgrc2SbydQATmXG",
  "key38": "22o7MpoJvwRGGrYBMvK5aLhkzeNJWduL9jFaahXtuRB21PagsdGk3tZszx4azpYGnXwyQ9sVxtp3a7QKuMrtPPMu",
  "key39": "3KfZu185zdki1HRpjY3UtD4i87zeSqoFsYSLieMyhG7X7zWL7QrQkGkQf7nEUHv8b6iXF8gxNavtqLSqL1r93Bje",
  "key40": "36BR94AKEupuFSqjWJgc5GANBy7RdUzJKx9ecxoy5tjuyciUoq83mPvKfYfdoUkSUEcT5jDQeYFmfuHj12hB1KZv",
  "key41": "361tqo63TngPvpt4zTeQzjGhBrS2QGE8gYVazUWptouPY8GPabBSF7Q2emAWwiub48g4TYR3RgMFN9SPgRkAdkDH",
  "key42": "4gC5iumf2U4JTEB8bBTSaiPccLYHYhuhnMy9gMRMxU9eaVCCTp3aT1PowdxLrxUGKpjXGDsh9gn2xnKcH64sCC4V",
  "key43": "2LJkDqeSZAqH8d5eEZbLpt24yDcYanZUzBEvjMKEk3NZQsbhMRfzw6W6RGvqwadTde7v183epcvqm26MNFggPyDP",
  "key44": "4mbg2BQeVsTm1gXLTnGwR8yWVRxsZ1YNFX6FGSVi9DcSV1GSuGxcZvv3UyvReBzrs5D1aVeQJNDhCagVPvezb87n",
  "key45": "28YbKoF2DdD4HqqGKTJDoBGCDFFnwJdEm1FPziZScuuJjynugmj2VjrHDDVQU9FgJDxLEsDESEGhsxzS11zTmBTR",
  "key46": "31wK8xXPiHoFASYrfntNCUn3oYZGr3Bxp4q5bvWEZBYPWcvyyshV51AZMMcjwy96jnSv9BEfVqU7nEdPD5mzn4zq",
  "key47": "5SDdmdnG2BhX9dG5HSck1tvuGqM4iBEeLifPahZLpLFzkipVBfPYgqo74XkwPzR7oRfPnmPidYdMxG3tUbey1cKe",
  "key48": "ZAwH8QJp2HFwBNzXnZiSL2d2qCsA1yxefcbakHhYH3AKhYxSEpbQpFfRi1ZxZHhyipKPGq5X5S1JTiMB4DccSdR"
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
