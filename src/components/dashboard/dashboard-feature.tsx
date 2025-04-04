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
    "3W3o2NYdfMrgnHMd4xZLJdHyT7HAC6tfHPcgJJ3JCGL2DdzLabYdHYEtzvNdhcyxwyaJ2WvKPNuBvCNJZ78m1yMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3tmG3DSow2gfZTV6dpF2svZH7zX4wYh83JoqjPqqCoHdUx47EEjDmjqBBgQAZaL3UKmtJWcEDYEFcCG1fME5wp",
  "key1": "7enZ5p1jLTWghY6oke5JdC9BVyoercALCMCZxKyQmnwcSwibJt7Z4pU93MgPfAW5RVmZLZ8aXzoEPUB8WFBihG5",
  "key2": "2GV5CTHHpmKF72KrezZVym89fJ9KwRDM8X6DqZWMkLpUC3QGj5Zp4N87mpX7ascuSgghzecwJrF54M6DgT1SHw5s",
  "key3": "4iR7pSPooFHCTiZeUToPxLKcCkERTvd8PJ69Tx9MEiScXw7GNtFESs4s4YwYgMbQN2JMVxpFvfV55FsVUKfWCqws",
  "key4": "33rM8GatDA4MHmangiNcUvATbiZL56mgw7SsS1BMKiD34a3nWvZrfSGvXFhXAin6EvSrU3qGkS9w2uzJdSzC1RN1",
  "key5": "5XXHWh3E6p689f5AdVjesreRs3qfpbZbKmdMF3feWeo4SShYx7hhNPGFV35nGRo1fCRXSJCdfoSbWrzjyYnhfsgb",
  "key6": "43wKpfwYsAvoKaTu5pcnPvpJrNLAwm7p7S444kUxbdPwy5Wu1ws5Y7QmimDFffjguYqmFp58gEuX1eGYne8xMjwR",
  "key7": "52zEbnEbonkeNEYYuaaNegZtFk3gm7opeLhU25TFqs56aXj5FHLEpnUywDh5RzHuNaYxKLTw5V7THTZgnrZanaW",
  "key8": "2V6rNVQPW5u5wuVX3LV5rEHxtgf4GTUuNa5T88vu8WRKfmUYWJGyG5fDHkR2DySDuSyzziEn7ZeBBYjX9M8e35Ub",
  "key9": "3gMuzsac82eE3HU3q92hQbdKes3kQCSfbkcMsCV8uxQTcnqUPsPUgNkLp85eDryMtwGkhgeeY1nEEjoqGGxa7FK7",
  "key10": "3PFSrcMSHj6YX7jjfEYtb1xKtBRTUKxVT99qRJDkgfhAvrfZDVPXZFHBhPcZGkEDUK3sWpD9QFZ8eHQ34qztWdgK",
  "key11": "3MJLeJba8rD7WwJuEM28QN9RNk1B2iAJGNrNStb5DY9HK72bC77BA4gbzi1UAJ7PNRCX4ZgCUQkxEgTREHgGfBX5",
  "key12": "5EGzsXVMviwQ1HynaxcyRqwfqG7DSzsPW1jJitAGzmqAEuNVRN9b8r2Xn5mFNRt1AnTLkEnt1w65Aqya79Aij2J6",
  "key13": "5EuMrijuz9rvuftATpW51SqUzEZpwyekpW8uN5ESxBFKhRxnLkC5HHLMojuKSA6BsrdmEf33QK9wPifdwV9Exivq",
  "key14": "2UrVvBYasLgJcSGwaGgge4NTYteutHdCcwX4AnEKzGABmff2Vr7E37ouSCjbTctYT5KWWKURTZMEvezMLvzbr3Hj",
  "key15": "5uBKvVFiDi4DY2bLm9ywSt6zBxWNGhDr8ApwSXTkVsB1kLHK7uF8wnQMmfEf2cs21QoTZLCujzzJZWbFaGU7yVCK",
  "key16": "34JecHaG21KgCNVHNNRwyd17HEotdczJYJ8hCD1aWa6iKdLgi7iLErzr3PVM88GJ8S3wfJujPEECgvB63YCBtB5f",
  "key17": "36UNCNHRh7R7eWi1BSq1dCS5fxy6wkzzstrnkCWdRsu2gL6PsnzaCbTbHCiETDM9q58KDja3Nb7tQd1CkytNi1JB",
  "key18": "5PM63NHu6RA94G2Pmk8GNYURQrD1Sk2HV5Wh3XPaA29Nkgg5M2w9HKqAxqhjHaafCfca4fvW1RezqPtwW6pGYSsT",
  "key19": "357DTzzr9BS8wwmd3ZVPvo45nyPp54eG56oehFbYwGkzgCEWrtPoPn4ZnWAM1L2BdcFy6DwU6hQmfixzUAsYWhMW",
  "key20": "4YspcCEPMUTdEaip4qJ1JRueWy4hLH8CycyzNPd38xHtEdmrc55skZpD2UER7Nuky7rojH1coC58ZZ7MVAUaBbi5",
  "key21": "4AHf91Ufr7XSAZQCF6iwbTcPa6Ahxy7KtVMf33tq9nEAHGsy3P2QoQq9y5R51RyutbpCMWMagKXqVLJ1dSmJXeau",
  "key22": "UyfzkG61VYCXZbmesZCHjXUja2EGaNZWiqAmPpWuhgdx848S8BX1nkv1HopfrUawXeYKQ45w8F5t2VmCjPN1baL",
  "key23": "29wqvMfGY7EgbJzdonorWpeJEFWUrz6zWG97LkjntptVAK4Kv4p6hdC63nZqVsC6C1yxHrVU6FLcihaHMrn3JogA",
  "key24": "2jkXtcyr1idSkCFnCdDihj4mSkD2dvjzJ37F4LEpSggiySGJHn6zPfzK4HsHt2RC2SL5gKpZwiAKQrJioJ6hv9a4",
  "key25": "2vPrbkKiTe8xhxj83Bgn5k2KiR3BPA7BeZu7poyc4P2Be6EoZ241oBdnHDMTTN2e6r2mLFCo4cqmbVikcXJDwG6K",
  "key26": "4ZqvWybpHH2HuSurvPPBNXqESrFQhqp2hDHQPZhAyrQ8A5HZ2cpX3qqc5UE8BJK9TWsJ2mautgEtpmHQ6rEnht2D",
  "key27": "3ovhQkR3agFmeG73psvja7Xsa1vTHregSQk9BKbqLuJC1pMy3HZiDeDEBU9NWrPnaZEhJEjiT5Efs8Q9wGzttY7R",
  "key28": "ZF6eEterjYsU75rK8Wn99wu5ZJLuADY63qziucnRD9FDPySYSzHvCRuuygSWMwEK4V3x2ywb8iDKHE2U3QTDrPH",
  "key29": "2eYCqfGBgMJ9zpe1yr1TDs1n3P3LrhQPyp51ietHmtq9HY756nHG3rpiJ6no7qp4Ph9pomHbfbpZ69gdKgRo8pvL",
  "key30": "3yf2GY1CHoJ76hPTGd4nNmwxxrWjJKvrdvBgpQUV1oQyvq5dUSzYHpuiS7oLUpVfhS6pijps7YgrcZotjcjuGUkz",
  "key31": "4mPGBCzvrCUR6xN5Y4DnKh6n1HLdLnEin8xFWsrT4MtAtf71FahtTeXCFkdJCcYGaidsnx1WjK4kzUutv2RUFeLj",
  "key32": "4ShKVZ7sNXvDw3pG5ykM2ycHdAKUsgWc48wsstWRPmuNBZ39rLGSJjpUH5wGzTXH5NyUjtoRmriwgn1zqzHypzu3",
  "key33": "3t5Feg5iGn5Ho3FzA22e38PGAyNqEUofCxikvvSqF7gGRJamM2JWPCLm2ckduq6XMr3AMzeYWvugny474hewZunn",
  "key34": "UQesqdzbjQ2BFziZjsSmSqx3mEdAT9J64gxnvXFjbY4yFVVJfhXBBv2aXuPaHx1FM3YBWMmL61nixwo1imybKPy",
  "key35": "3uCx4JHzibXzCpXvFZQrq2KzwUU7vf5p4Ayq2VP4txCHwNnzo9vLVs12MYY9D8rbkU6wBR2V6w3ydRKvLRUmJkug",
  "key36": "56D7fzKdAoH1AZYehTQ5do1CpkVHKfcGMTfyURPNPe1vsQSj5s53NMdSubuFA2HdWhS5SGXQFDQT3kEETn12ZSeg",
  "key37": "2NvqAuaVv5eT7Rjueo7ctE6RpzQSkSpUHRQXvFsRwJZLCsMRXSZjL4gZ2YDQmbShB7XqUJ9wh5FdfRSEQ7XZSVXX",
  "key38": "38Xx1FsdArKDx5onz7VRFFB5VYytWyRRutDDLuo6eqKnnLQBCxXV1f3U3uzoqracNUmYF6kjM8tVUXiQofHoz6My",
  "key39": "5Uaq1DbE1HtgSwfnDSyG2VjPH4amFKmWbobn3auMB6ADkQ5iB1CPnUntce7x8Sv5FBdy5BVz7obekD92NqSk4K3J",
  "key40": "5nVnhwqffceDhLcRHArSvrx5bWsroM7YHTEborjo7upbiaXNATjTQNzkh8ZpU174srNFSgmWtNkWXEvcV6BJrQYH"
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
