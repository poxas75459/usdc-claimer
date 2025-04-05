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
    "3MfLcrx2Tr3vru8P1bgx969JFHdtkJtijrewUx3VYMHcs6JnYNGd9zA2ZfHjwh1NBVbKmGbophrYdkUetb9M8JNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TsuPpCFHvPUVCHDb5Bxx7e7742iqPkEDBTfQUjiTNDuJ52Z5F3aX9gZZHKhPXD21JHqwMrfrwgg9sUjnAix4Gn",
  "key1": "47N6B6ioXRotJh34umsYyQCx1fY4Cjm1L7EfvMVEkz74wcW3Bb7TgYDznV36o6AJM3hGDeeLfYKToB17wqPo7hvq",
  "key2": "5H6MRekJdQQ77UEPgSEbCiem9PZzJxTid2LHCir7VqDmvCEE75b48icGB5qbJACoqDdRVA7yxmCA8aWQ25DsbnJP",
  "key3": "5SYLQv5CKaUMiJf4iZgW1FFHBVmh84LFweA1ZpRkY376VbM2EgsJEVpJppDVmD1fbYynPvDgVZDPB4NJ1BxeaPYf",
  "key4": "63USdKbiD7UKMKT5ZFXgc9bqS3tNWk7RVwrZBksdqV9w3E6KANzbRkGEUj9bVHukFqVZ8BDPq4RkPCaxgxf5ortx",
  "key5": "3ndu47XT1yEtG8b3j2HUX1LpL8o8v6ZN4YfiZT5kAAp2SfUjkAToZMkdiRac2QsjBcikp2aVfwVQ8ggVdk1Re5va",
  "key6": "2tk7NHmGkPKP9FhHXNGKUuvUUALXj4u65sBUvbFMHFJxfo5RK8M9VJ4PEWUb5G3g89q8cgfsFmRST9C13eovJWDW",
  "key7": "4jnWKLyn9Jn4vLmvZ6ZQ4tpErxLwKmHiDzXGukzaNRKDWNzXJgu55hTRbo5XZQDWcUTA1rAFoWE4AiAXBY19WuUK",
  "key8": "2ff9Psh9vAoof1sUVXt6DfkzMHcRWYSzBBAsTwA8Gc7vR6ffgTuUk5HgLoZ5FeSEkuo7bokaKEzqk6iyUaRCtPwF",
  "key9": "52UD2suVc9RUocE31CpBk297T8nZ3PcFjunML2UBadoPzGW5hhpcRSbNRb8pwRjrvPq685idQsqxMjPw68t3g9WV",
  "key10": "2rwXWRG35GchzfhPwtPjMYfA5LfnDM7Lho4dFsZfUetC6i7pLGehC4HsrbY1uiMyLBFHDKnTsj4YQj5QxF1BEi6Z",
  "key11": "4rVPhGEVJP8V3oZsGf8HjtQzMtpf5GEPDrYNsfCiyPXAFQ2uzcoE1gcEgFddbcMWRbySfMasovDxiv1kwt3LZER5",
  "key12": "3FK7KSEZ5n9TzQK5mG2Z8oJCqh5yDg2o7MxPxG4LCNrsMPMQkexeQshWkygYfoZbdyMykmZjmwevg7thaxYSWq5t",
  "key13": "4JdLHWWV4bti7wnmJn4sQUN6zQkYTTTQ43vrdumikSujwyB6bUSBvAbZ1m5HsFCi8YwxCA26tB46d5gJYnNbqcWb",
  "key14": "4JTSY5bHMfvwPoQcV3X56SozG1yVLEFbJfNJ1J1YaDeS7ADR28Ev3FWhmMYM4Nm3PE62C3tP91u4mhf5eAybyZWF",
  "key15": "26c1z9bLVdR9k6s1SoC5hkWwBLSrYYzFSomXL7nkTCPpdnsfb6Le1J16MDTYodkWnMV7cy9RQgv942deyAtBiNSX",
  "key16": "iZoEaHrFjLAPnqBoba3tt5HMjFkWDMuxqhp4J92w7LAUogV4hTfCaSR9sJ2ZqymYTQAxGFFkW3Eyo8eRxgcUDdC",
  "key17": "ATcsYr7tp7jpr9h9qG8KCWJi6RpCJ4TdGxSbtN3MZ7hFjW6K1emFB1Me25Kr1yrjL4XtoeQH8KjtCDCLu8RBLar",
  "key18": "5eAdss9u2fb5GEnAaytCfbwV9WtNYjh6KfjHa4Vfbwz3SoK23uap5nxPYWXkgEoR6TXKTUn7p6uxQu43DkbQ9w21",
  "key19": "5tDPnehZadVdKHWYqsQrAgFMuv191dLre9nkTJnrYJfNemPFp23EKGmKnB6PbTcvWAW72txPXvysgFCgkxugiuV9",
  "key20": "2fujuvpPCJHuFK5zPYqe85mgTNh3LzUQuBeUbQCdp1RbuqBzK7gXvgwuZ9SokQrHyMxqwo9M2f7KGhSVWp3hpfnK",
  "key21": "4TJ7Me5DeyXHHHcANGmPV8Cu2mjv24hpiNXjZtJR3QtPwWs3z13ixMvaaDrvmzUyv258PjEPXDkmmqnY4aqavVD",
  "key22": "43Dq5payGkinSDBxUbRzWEXuHsKeLTpUPsF2vdXi6vpoexr4r7gNJrSaBTUCE1nq4K9JWxQ3JcQAKHGrs9Mwxrh5",
  "key23": "hbXz1gMgDgcmJu1HweHPyuFrESea6kjSFjwC9BBW1SGduLvfHk1Mt29h9RXhydKBmB1FSPJkUSJW7JPvmsg9kd6",
  "key24": "rgZ242CQS9wsY5CndUdjnYi7Krcq8HanNp2BJ34h86EKRx1o7X757YzjEgsb3aGnxmY8jPya4Wk8ZK2DAhvTJT5",
  "key25": "3TMq98ypVPkPNoER1prAJSrStaVU9qRQQzVns1JEvE4B1hG5wREDgf851qPWwxrPeGzfDjuMA41oS3xkYTCnVaqe",
  "key26": "35vPVjgmnXnftGUWzKrqxnqRCXhBpwRPbEMThpVsm13xYSPcz15cwdqS6d8WsmL2fXYDijper1K52FLpPpGYydhd"
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
