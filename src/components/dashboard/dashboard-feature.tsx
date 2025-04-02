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
    "29DNceB54tTaJHVmSFxedZkPw1p2yWFKZpJHYa45w8HQkuDhFjtSeLpU34D4kA2NkpPUfaJaZRXqADEjWruawcSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3feZ9gfrTpg55iG1y15fiVGYsNg6LvvMQ1uJKQLTHtz22iE8mFGG5PHk8pP4UDMf8QkT2ypMxMwM4hJxTzP7uN",
  "key1": "53HyxRSnjnAjL6dedVEQP6YJtUmbQm1ZrXVCZr7sy9YjLE3jdNXGsoi9YHrXK14qJb3gXQB4uG3DxDdBgumNNmLn",
  "key2": "4QyZ3j2QLG4avsW4fF6RE8ZUsF1ifoCvEQ2qxBfg67k5xevYv2yVAeEDd5uerfcxz14C434Cg1YA3YapCFK31V7F",
  "key3": "3YMoKwzQp1aeGQQjdKxkkWmUijoapgfTrb56XL4U1iYmJE6QhEBiat3Zm9v6XYT79ia1811BPvSiFWSgKHC7XHTh",
  "key4": "3wPAkXGJhRA7mSuf3F2NCaRPMcfZhreaYGre1RqSugezo6UBPjYn81wCxj3nQdbBro2kPbwPyz6hCjUZQGwbVSZW",
  "key5": "2F8R31tPY5cZDL2YT2pktuTN1oarCUQdrD2jAZQXJcsuLoFfLvGm2LPkZxQG9qZ7Kk3L6iFN63yG1YYHwu2GXSzM",
  "key6": "3faBZgjoUnWGWB5bGRg8BS29Vb474UcZPHq3ecVXqpjCiuqc9x5ep5V2SUUecezpKQVF6ZjNhsqYZMNozdmn1CDL",
  "key7": "42Lme2N6ykthBKQZaZutdj6cxwPaFv7cp2nzYNYkMayhZvw9QWSNQrwcNEf8NACJouyR3T9UF7Cej8CB9aa5WEKw",
  "key8": "4pgP76ytieGyiGWw7pH5LX3q1MUWPLAko2ziAKH1DAbQoXnhgKNG3cu5P9rH9uJ9A3m9sEbRoRWceGZedt1eCDmK",
  "key9": "nf8AgxQa7nfb5FnhoE1Ls1a4XgjVfnpygzEBXSwbucXXLpRNFq3Cho9pXAJt5iBcAMDUEgwCmSaeDk8nN2FcuTe",
  "key10": "5cihXPGxGKJ8ztsBn4tb7vcAhCnirZAsfvbtsfWLgznvDtxjFouTN3sNNGPuzr8KCdGskBn2EeqxRhRc3gPaX8fw",
  "key11": "2DBVkWeySzP5rNdB2wEZLNRkZj2wvDTXnMdFPzVxu6BjgKTyLyJg1QeHnD2o52BKJpXwqF4cMH94W3vh83kHhkZp",
  "key12": "5kuuQjRbDZhNCdkM3cQ2zyprZer71beC4sXU1WjoZxHegVUsUNCWCLZLViMEQXDa4q4uL2EtYowC471nEKgg7kwv",
  "key13": "4YYMLXKMKHYhRGWeAMjLikTF4c9g62ZfqQVR14o6rhU7cWnz7WM3vxiwQo3jAzux6bhLvuken289y7Sy8NgMyLiD",
  "key14": "a3PjxFoHGmkBDru1LCF6EJ8h2hqQj63JWHqQLXQYoDvRW983fNXAKWEpYd1WqCynd44pHRhxRTf6tpkWWFD53JH",
  "key15": "2bBEdx6nosQTwcXPzh5XUpBnxXZDrC1ooYvVaV77AJZC41o4kcAiBnnP4ku6vW4jN19TyaNYSXS8LXgFfi1Ewp3a",
  "key16": "5Soq4o9gwGRSV6eevg1rxzLJcz8w98FRXcUvaRahfjzr3y2aXEscYffi1taHpkW5DK98X1NZYy2yc37HC2i9W89g",
  "key17": "5FqBks8mdgDXJCVqe3m57S1kiCcpAS64Cx9DkpLcyP8TjqF7WgHhppE1zAtoT1aUcHkr8TaHsVctzZZtHULH9vu3",
  "key18": "Av5EuYEMAHbEr5CSmQ7R1axU4uUZwS96Sai2LdabannLACDNAXnKFbL4h5UouaBCroP3EuixK1YZhXPGBC9n4Qu",
  "key19": "43trtDkTuxJQymAEPaHnTfiYgPitYfeE1Svewomoy17Q5C6ths4b7H7GEVndJQqw9hgGZZzehzr2Ux5DcfbC4J8X",
  "key20": "44AXsBvGQhARy2ZbSPck5XWPTpAy6dywfxBNYPzXXJQR9dNA32CN91dwqLDRXpzPgmh4vuymDhU8TkYcZafC2PAv",
  "key21": "HiKWz1uPhv5chXwwx6MXvJCyXg3GSBCRb7ycL5jTihzWP4sZrfEbgYbSz9LaBJUBDpDwW4JQY9Ph3CXreJXH3Tp",
  "key22": "4wi5o78wBh1i6sABQCTEhm1udjm1yRQjWdxCMWaMBoUpN1TjzzUvqBnNJVePrJ63UU375wDSyUtsdHoe7LtLdfDU",
  "key23": "4sFooiGWoaNXdFzxBgxyAyJFmZpWEbYfo5ejKFsPfoyaKynazsoZszE3uR2kxPdaPcbk2dwLVJnVtXpkKhQehoPT",
  "key24": "k2dgUEoABR1N7a6Js1xQR4kcC2H3auQFgNMJPQGgVdqFoQPWar8JhW56ZkWpZDyhrrknaX7NUSkAn3qjhw3hnmM",
  "key25": "4CZPwvVkBqUid4rKiEB4ZFcfga7YUHcDrBqwk5XK2Q6RCvxQ3v1uHcX2DK3p7DPt44uh9mXQUChEbUqP88tmWpWN",
  "key26": "42geFMPket6MQoGjr5RTsYoCAxhLQhF72o94VyMKnQndysKB1J2gkTL3deUjptb4LTCmVGwbaZkoPDFqwKxCByzs",
  "key27": "45bs1eDPyivmBJm6AP8Uhy1siwmxTXJcLJJvmBAeveMW6WPQAq2xoup8f45F5C8V87fyWJxHNq5qkGc6uLDmmaBB",
  "key28": "3aiTrHEV4xqthp6Jid6XpgT727PknYwURFXyzUg2j4UiU9phRqkXfgQ26LX26phERWkYkhthKGgEVAAWwZk7ZGmp",
  "key29": "5J5mbdM98bJeHbGDPc38VauJRRAEbsKc5xxUEYj7MhMfFX9e88FrdtphJzqsYWmoAipFhfciyhrTcZNEshqB9NVn",
  "key30": "E8xaJPh7txBwHcabr9iv6SXwpjiGDAZr1CHokUfKnaKwwLBUFRAcVDyGdSfMkPLUiwJdK4AZVTQJEsyYs1T86am"
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
