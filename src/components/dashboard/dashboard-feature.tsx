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
    "3W1C1epC4op6RxHVGachnc7hJtRYAMAaUMeQgPio6UgrV8W8SMe8ftwoBXNwLYEUx56FmkJ5282FGknppY4nq3Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjqZWmoEncWVXExtCHgrbLMdc59dPJgBLnPyEwocZK3xRa3vVTjbrvDtzmBBPjYprwZxZw2oYxcpGeJJ3mGosYW",
  "key1": "4ThinZQ6vyRKcaScunaMPkMJ3m28r2WB6WFR2imJbv3jy5i2gxRvgUDVj2bPjbE84eJzCcwhX96NfdpxPRuiYjyb",
  "key2": "3tGC723Gu83J4YQi22bH2hAVVek67dPzSttEnqL3Jg1g4UsiDL6reDeYR5eGgk7mmgE6tW2U9vA1uzyuPnTv3aUU",
  "key3": "P73nuu5FT8GU2WcMZQmCdJFAMEdWw5EZAw1HoVjLXrTrCfG1VTvjn3s9LHvuGPrakp7zV1EMXHVV3wsvdEmiyfA",
  "key4": "4TTa3Xk6JiADCoRMmdHVkoSe1xJgkw5Qc8HR5cXoNaQLa7qoPgnbn8ByH5nfa2c11SCBjUv8GXDmvjF4GDSKCLTB",
  "key5": "4WnofD1M8g51CH7uNcp2yGQnucur1dkcb8qZm9r5zWprbFdZMmYqLXc1T2DDoAPvnZcx7YgRjZebz2M1mhExbezA",
  "key6": "m7x7yD6oFwwJHMkpjriRon9vUqwE4ZBtENJmxM9F4J4g79aBJNnPQGkQD8HWxcf66YnYNpSVVCYwV6uZjkSVmAn",
  "key7": "4ioeGjr4nybYarzEc4ptqh6YQmQ8xLe7pgCDWkA3K46pE1iE44e6QXEHCB6HXisj6cgi6ZfQvMeaq15XM3ypk6Dr",
  "key8": "2o4KMEAPCF2R1HTPb5hprBvhjV39gfNVEebt1x1wLT8kTJ6AXCJWVFu3uWcWntFnJeF9TWej4o6bT9CQgv5J86fm",
  "key9": "4xn1kQj28fKcTyX7BjJFhAcvAarvsQDXenieVmmDVBio5swHNJhEBc2ez8zjKf7DXpYh1XeK7VxviGCVkNZPuiSo",
  "key10": "3RBdEKgFtMMmRyLMZMgFa93Yga4o9kmd6ieiav6GHeYCCXCH6mK1Hjzufa5QraPUWeagRM7kMK3VwA2UAYrfFYN3",
  "key11": "ykHcqbENNwSZ7PfkNUZh4dsDh1ZKqVPSncrEifVf6aSogwATqqZpxFWhVaWqEW7P4tCRLG5GnLjgsnhPuoTKgDA",
  "key12": "nXACfwhngoHDbpR8AHWWT9UdsffmY59d6YFinzWUoT7yL3p4NaEiajWEtSwshFoJQ8VRQDg2ENoyC2CrVvArJrj",
  "key13": "4Fb7ftPob6mnR6WiLJQWQt5CTwqx8VzRB2P38kQn9L5sFViZJgQxrMwDWevQEJazfgDDPaPCDPcN7LU2zdVzSQti",
  "key14": "3mXLiBcNZmQAcEQiLEtFCFk9K6W7CSqgvWCgy5K3n9bwLVjv2P26cH6R8vCiF2ysC4qSELL6ygMN7CBHssszUt9q",
  "key15": "222iPojyxUP1L3y1d4XnoBhouB1sqbevQguXcz7G1fkrqMEZUdqnaFH5ovRH6CMFn5g9Lh52xuN68vna5nbaRNqA",
  "key16": "3yN4d4KaZcbup3eBvZ339FGzdWTvqxd2dpoiYjZ6cPyZZNSzoxwsf6CpJWwKe73xTJUqqG62Emo4PS3aD9wqnJwD",
  "key17": "qKYe3eqEaCAX2ARHZSs8y8B9DBX8UCvzyWeMMPcHs8j2XuikJ2rvQvBiGJejKjetBAuQzcPH694UkRZXRi3HABN",
  "key18": "3GYMP2XYzFCY6zKtVRPXjptdEMknvB9jvFNb6fp3RJK3wPtxirVBx7WKF4QJQGjs9NK7mbkvTRnHLcSEajJFPEbD",
  "key19": "43hdaq9aekR5z4DKQt7owk4ZQwoqijKrc6KA1AWrSSK6SddEncpDYWrSTKFHW1NCqc1j5oR15zbb78S2wc6qaTNP",
  "key20": "xZSRfq2zBavBHPqu8chEMn8rhEvmVnwaFMKAKiUBLBDunj5G2YjEnHDkTJnm2BBjoVQzN1Wx47JCpEGNYmzYYHx",
  "key21": "21AMrwVXoPDXP1wnWQv71gZRKosi4q7Ywxyim8sdcfDJYJaEqxJUdDR2Caj2pVw9Nzvw49nFzL9NkTXGTdFYVj4r",
  "key22": "2gjM7K4GvwmsQasnY1sL391CoeSbApx5V9BGVpnDohGCJwM1pw3zRXkDo8u7PrXdAThJbkYocVQSZDCC2GG35p7a",
  "key23": "3BpxEBCXDqVtfiKKgexguJ2j81vvbPf5bUr48Yfqw1KGyir5sTpsWCJf9aE5qYPqBe496oBwnjB24W1Y8HA8YgLJ",
  "key24": "33PNBi7Fjmks2fE16QFQkmxCLZnunTThsExpnU6YZdM2DyeGA79qSJAtzkGDfDBvbs6xfsng3YmEkJymb2nPyEWa",
  "key25": "32dhSKpLNhXFupHDPFRfix5vatMGEL3gjaMfasNj4tuefJWqhjgBVHpRYKiarc26G3M7gD9SHdd4kx8vfcVbhYZe",
  "key26": "4x8sHkDgfYmKePRR73jd1tvQ6aBxHd4HAoDJgNV9uanM5YDRm3zMqAGZwV7THWCPapd9dWwLCELALPdtRevdbCkM",
  "key27": "2FkKVvJv1VuDVZoSHWPJfmdJjNVPSd9JK5KvSFvkfLxfZT6uTTp4hSwL7ZF8MLHCvQvNLqp9QL7qJkZGXeagmN7B",
  "key28": "pgCzUxfKCg7e8KxbkMvAJ1ahXqiZbbQpQFvydEsL6mackeUNzyERTCbU942kZEayBf8sjF15BjPaBmXTdfn2kPy",
  "key29": "4rXRSrDrh2AC2DwQqRG7u88vcz8zw2WPY6PJYNYJZ89xV1KCVUGkywEcR5zeXu88hq3mrYDFYMqwGab51pjJbuAd",
  "key30": "5FMECq2RXkNtLGXeeR4iiHT6Ay4MDh1UXyfcst5WzFEmYGKG61baA1VM7YJ1eqCmSHKYBXUrhDEGcFXvozryoiWF",
  "key31": "21uYaaQ9zr6RwGf2QJzXwoacH17HHN4vRNqUSqCdLfhBVGqotrfo62ZmY5b3sJ3DFuGSSszW5Gi1Hq8CBVNB4R6V",
  "key32": "3Es9qzgxZg5bPhCgxBFDjvmYnh9k1ekVC3J8soXymWaah16SZBsRnws3KtR8f15Mm61wPieR8BzQA3SBNAymyF3i",
  "key33": "4RC3USAVRwrjGX8EuKrDhr36TMwB8n2snzDfZq6kNy3BiU31o4PVu8sSfXP9JRemAomh3LYruqs6DotUa4vCgX2B",
  "key34": "5L5HNrBqo78hFrwo2nDqzoPuqiKCGoWev5ERnQtKMxS4K7s6fSjegBaLnfkUhv2HZZosBUe93zhB2EPerifxGG1n",
  "key35": "q77iwB6hm7y3g8qNCyXoaHxWhuz6qSqCLTQ5kF6NRm5MAskYPTPAKh7mZ78KkYpuefkB9o9vERQmjLZJKXSRukm",
  "key36": "4nqN2V1QtvcqSAwQRYp77PMm359hyf3PcqjEaa4eCPBojioW3oMxB18kYj8EvmB1vH7tH9ZwZfKsNJQQYCVpjA2B",
  "key37": "3rSUDyqNsTeEefbhrZdrUNFPDjxFezq187umAdHPbuaaq5VHRS6JBEduAPb4Ho1bAZ7DMh7ZdJPykrdwdEuj34i8",
  "key38": "2SXntJzwbM1kriTsJs49iVPBmKZ6xgXemxSdgteTJSYgfgbBXEgoyJj8UoHqXKQ3dSvWS8ak6zFZMVM6A1RQQhxW"
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
