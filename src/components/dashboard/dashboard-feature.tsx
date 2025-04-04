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
    "39DFnqPtVnLoaH2QttLaNAYEtWdZZN9D1uvvooq9Zt3vQXDzndLtgpfoXsLkWwhJpLz7iEBkEiyw6uF4K1K3i7iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikLGCfT4fdextJZZn62qLnnM9g3sKXrDhXGJdkeQmcmVDSEMF2Nsya4RgGN3QMUVNdMzQWH3FsbikwNA9HCpSk5",
  "key1": "2o3tNj3UFS9Xhi7xBtzjr1RxZ2aue91jozDVfpxTSR7nsR21ujeiMLNkFNqmAtJK9mg16vYdHqQyK9RLYTtBd8mT",
  "key2": "2YRQ2c5gxaGaj539wDxt5Q8ftGXM19E2WeCPkgRTZgSfA6y4XuzVGtzZtC28eruJFgnfrn27Ti8ijkwbGr93TbNo",
  "key3": "m3hggR19LkP5QjCFPxyRWvFQ5EhdSeFAkRjbWskzUoWZoimoSPzkVNp7cyaLPrkAPrVVi7SqQBGCdRk3YU4HMLH",
  "key4": "4ddq8pgVp7xn2we8bdVor8Y6H6z7s4wF8VK6M8zjFWhyDzMXe1FnjhMZyByFtV59SAZCqrh4To42mUHa5ibbnKwJ",
  "key5": "2KMBzRarHVjpUjtmeHJPLeJVXxPoeqDBbiBNQ4PsCgoKbYDMRgg435GuF7zQoceWsR7BimDcPf1jGNv8WSYXKPsB",
  "key6": "2TFzWG3zNb94ZpzBNcbU1cJwfUu8TcmFyBcGi8SrQHQcQdumXnrXjUTrWepK48cwzmAosi7T6LqCagfvNoMpgLEe",
  "key7": "EQorBqMCGcUBWdVfeSofhamUdPgLogAL1JRFa3nrPuirpr5ojiQaX5UUnj5yAMJMzpimuZ4wpYgbQVBsTeb154F",
  "key8": "4JTsyaf9RNFxVs9SfsGiMqDquZBbztcnNm244jMXmx59ZqcPqAF9kPkghPzsqm1uni5So3T6HWiPhHLHPCzBDXfN",
  "key9": "39y1u38MY3bWvAygq5ZZdQxHsdTNDLcMNiBjM7NvH5eQnH4uerAM3wU1YiUskgjeD3rsN4G66TjtD4RZCzhqWsg6",
  "key10": "3qqj85149E7gbtqvtzzEtXV1vyiDUBs5T5LdWKHv7bDChtpkpMP3XF3zj54FCdCp4eiBNcQXt5JwgHRFLEmLNj8f",
  "key11": "2QdJLkpAgG3gb7GsWZCXopegBjupmaynD4VU3YpTycx86dJpBm969izzKDh74B47bcoiBGrZY4aHNaBbWbpJbN2q",
  "key12": "3BjH4sv5bRBeuC42DKNXP2m6ohxYvKA92CmCkV8SeuKto13D38SUL2N27QVanZLzhwynrxnsreQqiF7eZYPNhJgg",
  "key13": "2fG5BsqmqiCto4z15bZG6dBDutA46Uj7LKYws67JByiPf1ScTBifAvUdqgrbnzxFRiegDSFys18mJrxNMYaj5FdX",
  "key14": "5U77s3Gq7gaubhvBCLaUbs27eFraggWHrajHqyhgtyYTqS7P1x3gkgD9dLjihYvJMkpeD7wpH6yuGx3Vx1qechJL",
  "key15": "33X15waEGFcr2mwLgwYmv4bDfS37gHnkQkFPsDgFQCt2brQPNgi9gnwD8FcNAMLbZWoLWJUcQfATZT1Q9HWCeRAr",
  "key16": "67hUDazBUP6ydtKCukAzknHJCZmSRQYR4qykYJ3tHX83Pm1xj7pdefdt8obKnHa2bzYj98TXKe9vBtkixFisebnh",
  "key17": "4jQZw9A2AMtpF72oMzueDJccmj19anfofwqvVwzeq9jxKvjCWbi7SSxH1EdtGDfUQZHHqbLTtipuZCm2jxbR2RVM",
  "key18": "VcVwvvPVCB396MNsNvUByuJEj1v76Rf5hYfP1VaB5gt9Rf4t3XE4AGPu5xX7KaJzMvzNMaoCNGTAufmqo4Cb2pH",
  "key19": "3BpnCcugpQKqReHotff4MoWKCteg8d7KT2Dv5dH3scxyNqCE9mPcmUa3hfcZpxJFKtQLGPYCbp73NovQyq5KKtEk",
  "key20": "4nkVVmcryDDtAMdv6q2QRakZmz2P8cRB8ghZznMzrHqMenQh6BNDehJJcrUUkDFo7w5MUbKmjddDtQeRFCfVWjwz",
  "key21": "3ogG9Fmn3L72gtBccV1cYK1um5C1hnz8Egw67kGCzVxY7EH26V9ykMyPwVDBBRTZqBYfH9wuabsWPdCJ1YzoTjkv",
  "key22": "4HbCmrHd6caKReNRWKqZajjVYijiRB4DEmwVcNpiHinrb58DXs4ThBZgeGZ5jHoD3adbYCs48tCqowP2uhWKjKuT",
  "key23": "4Rr6gQcagujGWeAKPfWeTLSRF79tw6aC8uYZzB2hffy5iTLWGpr8L3o2AVY3qodoKGYXQCSgNFEUNZfgDd8ARRxe",
  "key24": "2SZ4EoDgNxYUGSocvLMsrUZTsixHs4WxE45QU7JPgNZ1jMNjxJHwtv6MPPHF2YoNGYTUbpf7zDDXWHVxMgXkrUp7",
  "key25": "2qS1y6LBySqAhKYFQ5kAAXaRWQwDP4EA7XZaZQEq4wFkBAWfd86DxZHfr1dZY4cF3qzgiMhRRPsp8FsjqjihdCY2",
  "key26": "4xfSfYJrFZbEUYzDTuWPs3UsZThpkdgHXWzzFKigkuddK9jPMderLEDtgwUVkyRZPYYdxvuZDFkJi9WEiiPA2Ncw",
  "key27": "3C9eUtD9DgPtXPPqpgTXBbFUYvpHJvW4GboUnZXN4D9bdp2fpG8iofmezjfXg1uFmhTnxV1TPgAE37hm7CaD83Z4",
  "key28": "44rZLj4wh1Sr4e9vGU8KKEYGRX52CVrqWBspaShDiBiAMHCNyRPHJhXk3134b54bMYZ4ZsenSTV19W7TLfdxF6JL"
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
