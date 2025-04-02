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
    "2MVyimXPa5gXDoMRhfVpDTt7NV2JDurnQwZGvDPBV6BED2wcpi6vSnbsT4LSpJDJQH6n1cmw11vWPsfN3Z3jsdRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sV9jCkKBuA4ZxaAaQGgjjmS5yvuC9w75RD3CuJYcBM8AAE49QpAQdkFTMvt87buXxGK7VnK2gamCpz8HKhXUnHh",
  "key1": "4nxxaWKuuD3rEVNhCV5FHqxJxhv3ysSocXnR17VugpLCBAMe2HH3xNo3wQSs9sJo7UXcZMXNQAT7tB3QVsiYiuu5",
  "key2": "6mifcZD2Q6wfDKAYJH2U6VAMnMMnSCYWvpB5yMqgtYDYpAGcSo1PvHg4o5wwkqgygYZbgRwGQze5PEtk89GAnaA",
  "key3": "4Ja34UUptejRGAXNy1DsnjUi4zhYGDyu3viWeVaQjSrFV4jm433uuq4dr4Gjv89j2EGwiHQnVDVvN7dtYC6b8Mg4",
  "key4": "4viMbLViFRxT5Q3mvDE7aNhaXxqxs7AUp2QL3wLUgJdFizcizbE2gsu39RYTYhx3CWbUrpRoQLmipZNgKuucVUdq",
  "key5": "3eYrqiQ9Esi458HtkRrrGuh1jAhkHR5HRgVkaPC6Ww5TmeH8Ypb83ZoQMuvg8znE2QuLB1uMqK9jfYUehbvBvFSc",
  "key6": "5FEPAVdrbu3z4wwEnkp7wJR4fAg9fXZYGdmCjBn8XaA5T9V6zR5931x93ynR48k6pzkZr5sjMHBMYb1yKCrzvocV",
  "key7": "JjCn65j147kFjK3gp7U3bftEe3fyuoS77krr6mJTgcW9qwx7S8aaAcYPTNAtKJtcqHyKGzGM1Nq43k5w1rc9Er4",
  "key8": "3YW9T6yLyc3PYYDAq5cDdEp668yAXKQYsCbmH6D3t1BjpxzGuPWD6YtKos7AGD4DVPAyEFYMz1bnqVdW7zgo9Bj4",
  "key9": "38xSgeAKhw8tMuPbKhcn4cnpwK1mo4FdmndToqAoH7WYMwdtPdZL255kpNuUWYqsnqHv4ahnnyXUaqSMtSM2VcTM",
  "key10": "3M7ZXTJhWbCyFPe1TkoMt6vhpqXT2XvQeySNeaxdf9QeCgw7jT3uyQF8rKBDzqiHD9ggo4e7BF7VWzzUDHJ1Bmic",
  "key11": "YxZauj6hxKVqfjh7m5oo9RKjDj8grCSwGjyhBdBYhqNaC896v9DMAMGvPq3Dkf1Suf9LfMLqCtuX2LLN65JMDZA",
  "key12": "2Vqb7NxZgs7UVrFFYcpim7f4t686Lbucp3e4a5q1Uf3kAyW6moDdbJMTF3HrwzDBgsPu8Nnm3hvVCMUTU9LyTCax",
  "key13": "2xop37sU2MraejaJwtynvbxmxD7bumb9cecEqdEHQyYsBpmRoX1JTd3dNesffSuUKNXcuREaCugEqow2z5Gz2BNf",
  "key14": "62cesFKYKok6LNZqMzhbkYEy3VRT3V1G3BSB3btANG1GZ7UYvxcmtjbpy1MwG1FrNF3ZR8nsXSM9FzAjrQ3jjMDy",
  "key15": "oFccFJYte7x9oKqMmDPMYRjKd3jAYTzwKyPgooDxdCFN1kcHmFcmTfjx4UoCNcrPwmigkMgC5PvmobDueXj1iFW",
  "key16": "3oaqX68hV4kgzWDAGQt717YfvW1BrAeuH18VCyFhRgHp1xZ6Q2VYXpxecB55DEJ9tFKccQNeFnaM7t87Dc6bd1RG",
  "key17": "2TStoZ3D5tWQ2NFhDEYjWMJ7A2n5SMsZHNZH16wCu84p8KBaehGJ3CX5chaqBtjyVK5BXLfRsK1kL4EA2dpfMevA",
  "key18": "2Jqod9GPRbiGp76L4rAFSMr25WiXZpTBGWDBx1YTCToUXd6m2fvTvShSTjfpzxcZ81QH5ZdSX56YpXUMatyijW42",
  "key19": "s717x6khwVeFykE1riYPBMzD8Y7poPYNb8bATeLx92ZwH3W5qygzQmHK2iV7j4Qi3CJ9mAv1aWuZHpGzWdaupuj",
  "key20": "5HKMdKTYpV3eeHM5JS8Hh7kDVT32kKZFBdHRPkgzKoNcWiSzBTYPYXoLpcTUQsbkmuFHvUbFnjU5M8u1AfN31Mpc",
  "key21": "2tHt3NS4ph3nhQE5szmL79JsHYmvtGQbYuJ4BESKZZZAVQefbfJ7NqFByozeHbJyFQfGr5gdQYPBvr5woDLaixkD",
  "key22": "33e7PPxMPH8cALHJsxijUgvWf9z5qXFfx66eJLy3DR4KozDKcUzdXPscVSHDvRvnRtFNsvKok4h14mNdLh1jBaYm",
  "key23": "63Gf4ALUJgWRM84ftbCdjEdYEnWSGRzKnogWZkcazFhMQPdg4cANMPdUrZkjrmsCR86fDvPeUteVhzKQfPXDN5xM",
  "key24": "4Eix28zBbhu9P8E4JJGY22D9RFpRme8i4egU3UaQsf1oCho4218VJKp9GdM2TRK4XGLArZq5hDBAS1GpvXhfgRMY",
  "key25": "5JtWhGHPGty53TrYBVFeeg1ygvZGojrdzLNtafWf9utTMk4YoA4waFNieqpeM2dL5X1gbynGDPN1k1WTgf3aomdQ",
  "key26": "5fcyeGiMZioHV6877wb2j1Ryow98p4oXwikyRatpzczAiamyoVKLSGsEkxt5Ama77ydEZvnPJ3Lg5N4Xff29QbbX",
  "key27": "5RPeAqweHu6KduVZa37injW39RQsVPKntpWsngMvaYpfQpDnGoviw2EkSgPyx4EcYbG6HqHSct3irKf2L147sN9U",
  "key28": "5YVRkY4pCxyZnFV46aud9nStX6eR85to5K4qLJths65LmehnSXgxdXbb6BL2spMvzG8N3J79MDgxdJyj4M8CzR2h",
  "key29": "5SouojXyKLBz3tR9vgL2a8K7riTsUs4v9H7CrbycFKLHnu7tfruCW83sMCCFJhUE3dX8VDPWxpoWdEQ8Ducos4Nz",
  "key30": "5C7dXrmqGEZDnaz4tphj4w9CogfmntKegMhtEJMeVHpDJCTdGRaEPfPtCZrH4axTR7TtZGFGmKGGoSd6wAh2TXJn",
  "key31": "5Q4CPA75pcEQU2bjdbreq3Zvetbb5R4FZiZL3vRq7HiY5PNVHoFr9UDzmEky3SHegbVrvw2UFoh5xVewY7WzH3Vw",
  "key32": "2t3W4t7YEgAqbuEavLbEhhZv5PQvdJCg2b2dJMuNnTfZ8mkBDXjEwtBHcxH53GJnuHQyrjwxxUgc74gjftntftnN",
  "key33": "5BUcTQ6pDMwthQB97csVLqDeE4TCN2xqyvuVDJ9WTzzMCQUN6TG4SZmKs9iBNNBBekddwncBY75ysMJjn1XxASbK",
  "key34": "5tLzaG33SBz9nQLJeCBKS26bFNnC4hvaR84swJcihCut1FaoJzgw6rYjdHpo6TPaFB6yhZ4SqBwr8ZFMVrFTg54W",
  "key35": "296p8ujMX99YRn87J3cqq7XiWBWYk7GNzyhxq7CAVgRaMonkU14QcHmGZJEjhU8SshFk8a59besafx4xPgAbjcvx"
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
