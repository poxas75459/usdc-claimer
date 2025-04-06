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
    "3w6KsErRtREHGse2yAe9xrgL2ZZSTVPDxTEj8GDuje5wp38fG4TxbDRsUjKG4KrEa55van4jc1HkFVh8ekeFyJXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59z9qjRzuFffvix8124zoaqoEXswUHiK41AZwW37rVNYDRR9HM1dVRdBWbkab5eXgzG61FVgMTiSzdfTBPp7Woma",
  "key1": "2m8PjnZGi8YM96vRMB31mHQkNxSdMdHkXbNeUuANSfN9qNYA6qypg2MGzrWqCuSqjMDezNZpEFEwwhWiByx6tVvK",
  "key2": "3YwoMqd6z1fE2MYTrbR9fhmjWWS71s6c7udBEjTQV7CbURLMPFi59FGUTUunk8xxwA6mhPJcRuity6FWsyPvHUUK",
  "key3": "bPegmsEcj1smsJK4bcWFWctY84d3ja6GQrg5NELUQP1ZYhiLt35sZuTLoMFp37CMfyqJDm5iuwt1Fjp15WW6oHb",
  "key4": "m8hb4BPs4z2wZ7f1e4XUTcTkZHd6QAQWRGT2YvRGNMjKhYrQ4K7mwktMMCL3netK6FsEv4y7DbAdsST2cBodsfT",
  "key5": "2T96Q37fKYDQf6MRdL765AS9fb1ptQtskkKf75PzobcAFAuttLHEnSj4LFeAgHiYLEbHQaGvTrYgMiKr64ToLvn2",
  "key6": "2ibzzkBisXMq55Rbp4EHsqbhiKUnCPqpxcy6uGaiZSgFHWgfp4PQ5CUe9sx4AYN3CAPEqgzDi13DNBYYcjMEaVrS",
  "key7": "rALfe5Kv1xnr3S4vFMmqjpZPv38fQYz9SbyDYweviBgVXtNQZm8qgTcrLFkUGfARAetwAC3Q9Yod8SJDMHdyByw",
  "key8": "5aFHYfjj2swEpGCeSLxpQ9ud4ZRHVfgJ3ZbWL1KddVBGR8EodLxiJWjFsTwdD8wDTTkL5MQKU55aL2wv76VGnCad",
  "key9": "38zytzw64kfTU61HiGzogaBL6hHzC3B26ioHdZ1h7SWLKKe59M2Cup3h6d672v14Qv5HswL32SAYqgku4pJds5xG",
  "key10": "3nvLNACuVL8Hj9w5U8MvNv1FDWywbyoY3eHfPMhdJGjEM55qBVDgdXYVnVFYUZovMMhFtq1fNJmAj3mZbhVxxRKr",
  "key11": "xEC1BWozLm3ifZDVenVNLHdDnxqzmNbh2dv5dZyWEE8agYtZk4myTUKttVpwqkqvQj3t6L6X4JUHjw3oSLQNG9H",
  "key12": "pzJeg5D2hbQgfx4sqB2r3pfmVa4jbMHKQSoGhfrgexiCAP5UMJRbtknVV2fraJA6LadQfXoNBSSP3cQZAepmQeY",
  "key13": "3257h2984ooCfpJZo3ujjHSAixrfUzocYHFwrPELV4WfQYtno4ZinE3zyRZNB2Y51xs4P4Qa5GucydE7NzTVkCv2",
  "key14": "4gB6nK4KMiUcuFQ6AqJXg4YwYfwyRN4jDyxY4hEewgmnMuU4Q6oQHvQvF55WvXRGe8PppXgeiTJMCtq1p6Fnm9Y8",
  "key15": "s2pwdkZSHvuGYP2p2BV17cmUDi5oYtLuX5aZopQ7o2rUigLpBeTWYfcuQomcsDfSqG1zh2wRbwjXDKmH8NDhfeB",
  "key16": "43qNZtUZMuZJq82FtazztCinFtH4ZL24vosWZ2E1XUBEYbukp968vh4A3a1PUjQoVQLkniDwtfg6inwJsrWax1hi",
  "key17": "zriCPbXQVcE9667JNFdwFpf36BgwxQad8p7pGsKNXNgYr7rZpsvcTmuRqPJdSeATHwPfccNDJuoVo3vuDqHQZ6m",
  "key18": "5pxbT8oRvhdvAPfR18L5UATzDQSZK6sEg38RCqRNwPStfLCahSZJfeqvWeBg2zvKRvN82579y6KpjhRqZv8iE8AD",
  "key19": "3TgYr6cWVbakSDuycyvr8rGs1iNJD5pCpLFAFXV463kPokW9zyfDwpXGLVtnZpoLp6k5oPaZXGPYBud32TZocDhd",
  "key20": "4Nj3ktueHcLU6VGJDoX8EmCh1rrkXEK6pDr7FY7PGufDS4pUsfSQye3eSUaiUkattFYVMfVjzJtjSQte3rdfQ6iW",
  "key21": "5eycHoK1hw3UzFZEww9cTf51hxU2ERiEXDS4o2LAPEEaex8i37s89bcSpvnkTVRK6yWoYZov8dfjL8hiNzADnV7v",
  "key22": "5BDpgZaMfBHeBeRfHQQv4o7LcmAnCGUkEerLUSbDWo8dHfPpYm2uDnx2gijqFYt1Pwvdx32FCA4cJAXdsU5L58Tu",
  "key23": "AVesJvnnbhub8LjRKyozpcMDiQ2PqjUNECxumXu5svVrHkvHv57xMD6Gz9v82rU6cwWCjuPkmT2phLWw2Ka6DFe",
  "key24": "47hzDV4kP8jcg8fFCoUdBGDY1EqZt2Mbx2S3szVuGeLPineT5bSGWuRdNSPLDJ3TNNsTo9zGoLV1jxHmXPQQrryv",
  "key25": "2rXjz1FAqCKh7xDBshQPLEqN6KyRyGW8dDpe88HNmAfzZKtFZ1iKEwZYRySGQq6dveqpGzYxWTeV7Ktwty2hHgF4"
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
