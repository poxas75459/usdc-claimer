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
    "2rECmZSZZBpC1SbwPguvBFD1ZGYqmLM8dcvLvjA18ofWuTRsC3yih3sKM3hUrzU43xi1gxfhk91oUomR2nf1SDwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CidSfpBT7hhTv2dGsQSeXesQWFvuwR6whNe4FiGWzgoxgZZkPCfZE225wmthkYuvyxihwxkqYyZqzvoJGvNLy84",
  "key1": "4DYAiQkzEu55WLustM3wtfdkS8YPj3cuGZAwid333iyrf4VyBWRDA9U44ppj7H9ZXUFDEXMi3SQRcZ25dAJwWX28",
  "key2": "2cZTsiGgUqNjjEUDNm5LAgeFcqZ6gFaheX7c1Ktka18KCRpMRY9214HuHAmc3N3mkTEpkceopKVmMy6vysen8bD",
  "key3": "5bDUScfKKxdy1Xx2n8VAfwoVEhNbtRXTkmEDypCUaDxzJeUaYw5GtVptaccxqL8EhgLHkJxkiSeTAYaxA4BJFwnE",
  "key4": "4gmAGTTcrLZFKvHNka4Qu3zcLXrMvyrghJFo9YeEqBRC46r7ywNEgrMPJSkPvVBLpSygqhWsy6nEgp9iLcQ9fMDK",
  "key5": "cWHddmkFYUBYCWCxNrr55agCwrGbZTcSx4qizoDf6sh88KNCf8ZqUokMHuXbfaagpjJUMoaQa1s6nZUNYDYSBAN",
  "key6": "5976uB9JdfDQQaUta4YLGGDv27tA2wTk17C9gc4jripiedqvZ3N7emBUmCBfQV7stjZz6yqKCtLCSCsxD19Z4p6X",
  "key7": "KeAwyDWCc7q284rCGqHZBiTvcBDRYsDLVmZwCW8pb13XtdeUpx6EANfzkLeJu1EFhAGxwJU5UGGDvXR22GHRPAb",
  "key8": "2o87Aso1asnj52b54oVAfTvD94JkDPvE6ESdHSAjHquEQAbJn3tbwTMeTUzFJKKGR4Ed5anCJDWyU4qschCpAWj3",
  "key9": "56QBvE46nMvGFZWB4Pj95Gh2wz5KTnFsicYiKQGrC1EjjddECtssVVKEtpHprBReGhvkz6nqD6RZs1DVBNkky7h8",
  "key10": "2yYnvXywFTKun8fwwhKfN1G1nBPo8ks8JWEA899eGPSsDa4oEmeDVD5F7C7yUKThJeD48JEf48UXnX7DhJYwy16H",
  "key11": "229GekQJhcsnzNKTQotkXDbBwieqgtM1opL7eshmAEPZiXiLK1oV63yLMkdn3GfFdBrkgwHXqFmR4DUFskFV37QJ",
  "key12": "2BYHop7dB34WT6LhD4YqdZFvWuZrYuKjHgGWLobD2z4r1SvVCEs5wFsXwbwdrzu5KfuMYUzSBghYeJeUQbP3C4FG",
  "key13": "4XH8cQN2f6kPkVExw1YqSxnM2MXr6opteWdemGjSmSi1MgRS8Ahoms19Zmbd4DDRV968UTmQxUqewchBEtFpmtEQ",
  "key14": "4iBVAjvWKtuHVk3KC6HhpCqLPjicN6kChV4KRonuT4coZ5py1UKBgvJaPm3VJYNVvwTuHGDkxvcUWACqgZvEMZqL",
  "key15": "3DEh4FdGff57vVBPt81XVSzvi8r65k1nJp3QsvgvNFzz4nHEMPANsPAU3eWr3RgwovZRdYSZLb1oDYwd4GSMv6uw",
  "key16": "5WrGhFh3hMDKqehAfJynfHLxSDPqWP3ieSynaaxGJKL1t5mqtAMxZrC2yoDbcVU5YTSfUHMYCUBkeKHAixVgykBa",
  "key17": "3wS5tZi6mELAAttBpUGEzghQb9uyPRyXustSExTVGV73QcXfoGBVFzjFYxaT7yqhXyNVRDga9pJNM5QCqQbpukT3",
  "key18": "64nxjXsxosxz4qRDP6BmCExjFNNkG9Ymc4w21pVzTo4wnSgGhKAhtJEzjA8LPLQKoayDbjii7fdRcxPAeik6gQ82",
  "key19": "DUruWS8ur2TMNXPBfZFm1CQ2yQxTrjTduGpeN9B9QfjP5ncFKbEmmTzXxtPo89aSko6pEYJqvoVRMqm9qiBbkVr",
  "key20": "59ZEk4oYmBcEKpDjSXCDjC9HuUGMosKENGDB4VKJ6mGVoYTUpUgMCz48y4vZopJJGzR25NLpLyXzYWn9cShhmHqf",
  "key21": "3KFyhcC7PND5RKap4DrrdGiPFobqtuEHctkhvi5fP6ZzAEQko35t13HiQGbsVrNiEapueYfP4WZMhYnDBhvY3ocZ",
  "key22": "5P9pjaZNrUKtC3wE9PE6fTT8dbjxn9FyfgZPCsfVnq33G6qqkjFS2U88qRtumeKpwwxu8Vf2uX1PSnc6BLpagVG9",
  "key23": "2BdSqK8BrdtB4MTu2FXZcMPgkEUGLSETo7nLrirvAyvzWp5KVJhD9HczEMjkyWhJWUk2P1xPHPCMvbBgYsoVE6Te",
  "key24": "4HWK3B3nni2gPuMHKREV6Ws4FnrXgpNWRDocBsW2gf1QxrN8Nuyai6jqqWiVLCSiY6YFhmQFw8SKJ4X1s6LQDUov",
  "key25": "5YwZzXJFmidaWeYg3SZg8GrSWqF3jT4JrUYEgazWvo364MZUdBazTVgid4r7Z2hjMh4H7TsA11VhyA9y878tykH4",
  "key26": "5Dbdes1F5qNtGmfWiMm2DEfwvVb2QKKY9JszhU3HR44bHGvWu8CQjqheewSH8TFYbSMRfSnSSE9q39TEtz366rpb",
  "key27": "56J8d9VGUcaYgEuFyY3MgsPiASLkEtveoMS5zDGTxnW3XTBkEngDgcEQn8eMXC4TcUeurEVe7GzVXyXcXxQnP9r7"
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
