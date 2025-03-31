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
    "3ft2earevYtdzE4973cgtwCeTD7SC9oNcYVtfb8NhwweKP8TbxmketRo3oDnEXR6z3yGovhryJawYrzhiApX8QeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3zgVnnu2j8Lrhp1w65iPpS3qvESzmCizyto5944HDGWRWp9SUTUzCefnXaFXvgj7hqKs3owutnu6pyVXvn6Pjg",
  "key1": "oogCKQbdQ94tK5hd4hjPurBxkikE4HhV5ePZknxbCsTGj26jysDFDJpiLZRyYWNSoEAdqLmgvjXiyJFRT7E4uik",
  "key2": "4mrdDkVyARPJVjhoG8KW1r3NyB4PGx6CBY6noAw9Ymn44oh47TVpKaN2yeEVFccXz5RJ18aD2L9UmeTi4chQFXWy",
  "key3": "jbdiskepbMevPsj8hakEQ8WMQ6uVgwxJPqnk2yPpGZoZ4ngk5F1M9HLUK1jMkzC5NcqqoFmx84LhWQGa9ci4KPP",
  "key4": "3APUbM5FWCQq2W2rA2cRxWtZYx1uijUwwA2TmBuYVML7zL9SuVYHaVi3dJjT9HM2ACaeZ8Y6gYdUXRbCVWRp6RFm",
  "key5": "3j3CdesLoeZxzCMXVRw8FP6952EoMvuhqEYN9KkD67VyQDGugyAWtUay4SVLN9svwpUHH5WFfo9mfmZFCQBn7i52",
  "key6": "Lj19uRc67826LeUwJMo1YrkWsSpibaX9aWEEJFmnDCeTGBiSnuPBDJGkSp2htvTiFekc8Wy4UmH26JfGsw64fGX",
  "key7": "4Y8CV3bmQs3TfhV8LMX9X3XQmTSgjV9Zwy3DR913WRL72Y6jXBeNw2XmWuvzpMXqFdXVQQuFZciACYv1PinRfKk2",
  "key8": "4EraHT5zAPNHyD5oEcG6WskG9Z5DFLmpUukHmC1yust1aFkeXi5vGGgvkGWq4QhwB6Xk1x4PEKXbB6GzXZcexTBe",
  "key9": "5RjXm8aDfENN2V9zSUoDC4G3byvvt3GqkSy8fxrgtrRXoYNvb7ZKmRKbTC9t3Grpmk4byyZHK84Sy13Q8DPAkSMq",
  "key10": "4wnaUbFFckaPsi4VUxY2e741EDN7qRH18UCLP2rWDXjPznQdKmdEfsX4q6gVaB6AGbNK212tqzh8Pw1zMGhLZQqn",
  "key11": "2n2pAjih7gP9ywnoXZTQ8uwKZzkqjVdT4G7Qd4qnQNdh5s4TBGiypsjynQ4se1yVDqGreZbNGmfEKBfjayFxFDdZ",
  "key12": "4uG8JB33MstHr3KR9iRJzL8F6GV6hTsBMsMTaWPKa9JJTnX78VtRYgvGUNcBwbf38apFHPRbSfBfZWJdURj9kjK6",
  "key13": "5wiChQo3wcpzvG9mj7VXe3bHivEsN5xrqjkNBU3yDS3fS8Gt5ZJDeWsGrwoCSUtut2MqVDuxMicJd38b5nDntNgp",
  "key14": "2Su5kSJuiLbAk8APrhD88aJMXLdqJj1sWfzLqQ6srFroePKFLF7nniXtsqDPQeh1uaC3rdZ934q1HEeM2dRksHeU",
  "key15": "3hsPTPzpbt7NEHzvDnDJ8XKoHELShcawebqxS7LH674ycZfZTn4UXrJUQqFAoLptJxAn5AaTv49kscAsixyzdACu",
  "key16": "5bX3ZyDCYYE9bV44LdkWKnwwuxCn52mq1XSsUB1BJZaqTB9puLMtDjJ4YxBMSTZSma2Du7yrxjhmQZqRkmZ5mEZx",
  "key17": "2CoaJvC1yy5k4eBi7yLQhEyieAgZZCSeXqd9N1YxeaXErRUV21XHVHWw9q6i7ojqF29XCs4Csi82aiva3yAt5SkZ",
  "key18": "3A6oQECmmxoT5mZtkkeNavDbegobJXE4GyoSd6VdrX4pW5Mwe88DuLM8V9PHqgVtcxtfTfYR527qLvnqdXsPrxuN",
  "key19": "3NGNukVU4YpPyPTCNsoC1g1w61sosak7jLiZegK51yZb6CV2WCRoPxzgdu29CsfVSqx46WtNAD5RAo39mGxPnoBG",
  "key20": "3NUV8L1Gs4wLTteLWLBkX52By3teCQNGKAVAMWutyTpVPfe119xsAPBY6WP4uGtkfTxWTwJVeo2xQKyHD542aspH",
  "key21": "4H5TGgdqHhFQ8qxhzHNaUoiBqRr67m88mH6K5ZvweX5fMbNMiZKYrPVsL45MPyfcJDMH3SJawmxk9x9SYBZz84TM",
  "key22": "5hzdfkAENZvkZ2gEG24S4hBif7aAxPfTD8SS8V2SWyKKEw1z4ZpiqiMN81yR2ZLJrvcJoG2A2fizVuk9x6MbTNoi",
  "key23": "3DwWWAfCDMsVz7TdNfkHpLmer5U2y3wdVyJjzZ6NRJ7VewUmZwi4bGHjsAnq3U9cCHJ51Rbp4729BHLc1CLgSxUE",
  "key24": "3XkREve6quK7WbCtt2y1sUUa5UT6adsQtiCkzU7zQTaj5cPqZjqK9CQ2B7otKDu62VfaJbjcDxm5UjM82K3J5gSv",
  "key25": "53tXy1V1FcRcW2huJuzK4K8NLBZ29MJWDnsi66M4A1CGhN7s9nJwMLBPPLQ6Nn1kxuCJK9PiQDSFw8q9sCSx6ax2",
  "key26": "4PBij5gxe7gqmZpfCfF64AMTjj4yEeh4ZxsLVLbUeaZeJbC6y6uB3CU8pwyzMaJssUATu6zxjB6FrEHn4gqcXiSf",
  "key27": "3WAos9cUXXQrtyy4dXqeNYVmPDwi3DZYCYYoaMqxuCAC4gcPMcsjsKtSEynone2EAJiTx7Vg1ufsZyY9VkHfo9UC",
  "key28": "4o1PWwnVnLt9Zrh1ZznibMtrEppm6fMGgBKWVRXP1gP32uUGywxGzeHKaxeepwWGKBVo7BYsQuGyCsKWhcNUUdqZ",
  "key29": "3nAAHn1DsrPqz188jVAVV1SjfSo5A1FACKCZJSoYY4fV3QaVyA4yidtLsJQcbctTPbWJf89rM5YyV3FWy36fPCh5",
  "key30": "64S1f1ZZFQeB1ic2keCuBUCiVrLHyJ3s9LPdXXUcbB7scfTh4Ptu4vhTPw2pMgSeCyWFh6W4ETQMgfHPYHbVrbi4"
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
