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
    "5YJtxbURW2ccE7SuTciLc3VoGyLNVnCkFt622YbotJqz74LKeSK2UzGpq98zdfKRuCY4Y95o15AwrQRKgPtGs7di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pe1M4v1Ces2xzCK1xUHFwgdA1Aj33G8BEYErT5ufc9DYJw9MSb1YueCtsudRrcEgp9Z4caiAT5WhaPWp3K4MyWf",
  "key1": "5aeJBC3PPZaZS6XZRKQhVT5eyczrGAqmKZbPP5jJukLRVEvjdduox8qVpPuG18skYkuJR55kvdKfM4tHhVE6aK6q",
  "key2": "34pmU3MAMmZm8p25dbQGfZSBBGiYqGwCUX8gmVfU6CA97LsFXZMpsR5Hs71dNhywDTaPYWMh1eo5FBPAkYCMqn8T",
  "key3": "euSN3Ncse5aHbLSHdcCTKdWn5raKNw5UaPZT1UqGzY6SFV1JhDoUbgcRFsEncPq1uX3qwj1FcZRJvvpDCaLFySh",
  "key4": "4xaKkDw6pmB2nX8a47dWw4aiy11QY4f4ZP9UZHVsccA5ME1V2WhNtvc3L9VGWYc7eombedmuT7P1NKBPnrMqezNR",
  "key5": "2VcMVoEjSzqnLKSsoD8uJZLtody4jUoUeHzkgaEBWaLhKsoVg6dR4A78yJXDCD9t1cAaHSQabWiD1Bw5FzSEhzdj",
  "key6": "2nydYsx8ReXu3UQgiE9SmpQymnHrWyTD6Afxrtpo21QJ9mCgAUa11fUYRrnuK8sjpymQxU4iQ4k2ZEQcE6kTJuJ",
  "key7": "2Soeyfibp6KwNpMdS8uiXwrF2RCd7LCbjxkMCyYrKDeGfCv6Z2oeaoFjSHQGMpgTeBC6iwVVucsDbmEHtTstbqW4",
  "key8": "54YXKFn9zc624kumcnUTRH3ijqsyKvzqv5E6RBGyw1kRjJSMopP6kV5ZAFQrw3nn1E3so3qPmmwWyBZmc7GaDnZP",
  "key9": "5snPRiCqQq3V3hDUJeP62PnFpGFBHwHZu1AoFm2Fu4a9exscRup6iLrjP266RSZfND47CnpA42xBGUKiD875upYV",
  "key10": "2fxXtuc1aTKuXCYYLmHVhG8nELxRPnPhbCksadYJrjVwbhuvnXZhrVwoE2Q3XgDP86kGpT7fZ5qQ1v2wcgqFDxCR",
  "key11": "4kY69xBzovBBgwNTZ4xJgdHWKAmgSDN23UanpHy1Bwvnepx9fx4gHTKyzkomggvfFHkPiu2pwGPBSZqYqfVqwVqe",
  "key12": "5sWzVkuvaRyrwoDhjuoH4bKcdPnB2MCFP2e3wRJ6j5GqiSXANDdkDEt4NoCufeNMDzm2fFH2eHbR6mC3dZz293ia",
  "key13": "369LrBejjEqdERnpjgLsoDsr7q2HQdsMFzR4n1QGcHJdE4Pf127pdkjYJtMSwzBR5XhwEwGEVxjyXqEWLMDyUN9x",
  "key14": "5CK4QghTkhXiiQvbQwZ5UGbJ1K8G4rFhmpmkP3v933ZEmAhUkChJVUCz5EbYYNqAHVbmUBETdGmwWU2kTURrBmJT",
  "key15": "43P3ERTr2PwiuFgkWofb74Lsnr2Afz31FswjAeRQyVx5jQs8pn1h8j9uAi17QajNKoksEsL8jNYcBMUqeCyqmZUp",
  "key16": "4qUPZZc71J8QrKGgNASscAjWge2j23BJFS2JumcXGjLhVewPqMr7S6VeVPEAYTckZvQ8Nz9E5kXk7xooKVpuHQPm",
  "key17": "3buAoBJBwEz6BFhg5k874EZLnHMuRzuaRzqPnUEjyyGM3z3Mjj8oWFHpH1usg7QjWMXLmB5XwViaxkyq2Tvkyi2L",
  "key18": "2t3nBTNFWtWrLX5mGNNXmDahd1cvtnRwzux8QWiwSW9a4syNevFqYy89ToZ2gwZr9yg4wri2RQpicVjvPqnaX3AR",
  "key19": "2bzECLcyyq8wgnFfWogNKv4CZMdwYsiRXhKdnakYtsWHfGaqRLxSUViUKyvu6UtmaBNgnbWgecpEtUcP3Mw8ELf7",
  "key20": "63x9LFRePUWqrRTVu2scKctQzCc1kd3FJLAydcNxXuZeaVTSX7wBbpsP5bjrWSmWN7JMCSDYfpexJZAciuwaXqk1",
  "key21": "3Uoio8knhkrCRQ6ZfDTNbx4MXTNFsLQKrX3bwbeEGn4KgnnFCNrXn3VF88bZhZSqDzfyzXjfjNmSwTFbkX8qQdrM",
  "key22": "3PCJQHQgryUmCmUxiviEpydq4cdefGvfYQs78Zn2qB1G7ZhMAi6nYS2xr51e2b9vqXxarKhKtBxqusiJ5i2b8VUR",
  "key23": "ZnCgcB4nDdKpV3cvqrbJo3bRaeAywUzu9BETVcshNeqqpfii2ucHyCHtxP1uCHx6YVUsS1weu8LcDsLvF56u43C",
  "key24": "2TEDVaaXLH8jmDZVFGiwr2Hic6sbqvGpa8SnPTtAnB2BDteXofWPGRw89EWSNEV2htYqEumeJwewpc9ryvzcsPuq",
  "key25": "3cCb8yxNREXyw9V7K8vmn6wS9vyTLENB2iHP74fezzyA3piK56bUd5YjCnSzYTkz4UhHLXc2JtbS8kFVL2yFdF4c",
  "key26": "41tAV97H6337sHWSXZcgkg2fMggptWsY7SSbzZkNznsjokvFmMjMQzmm1QRTxxCL5Dq2KyUH1VM4x3UEJGWqcokC",
  "key27": "2PuMcb7tq8wcpnDfpa2XvUeybXLECVc7W1xmwj3LexB2Xs9ZE99hMJKtuUgh1z5cydi844jDbPyj1Qxe7Xb1Jx68",
  "key28": "2F3yHzWGEKgWfDkwHam9iJRWZSQrNvVtscpHgH6PeCQJFx7yYcCFwQf94aB2GYvkq7PQb9hBoMywADG2m5DJDUn5",
  "key29": "5xCk4dpXNDzDxJJ9aqNC3NhnMsuZwdFgCYsWxhTDbNEiDdHcYM3trq1X5NRNHrS83cgrBvfbSXxYcrsTZtGqND1X",
  "key30": "W2dSvitZD3NpYTUc8cpAp19YRPqM5kWzueUh71zBXQsMUmm12LE9WP5nsRz9q2izWv65NUYzV9okYXJR1mAjQoX",
  "key31": "3piLvdwimUKaNycn8Z3p7iW1RdMU4ZZtHzH4iLv2Qpj7H75LgMwU8LZN4GWHoSYaHeNS9zcJFeXt3hM4L2bCLRx6",
  "key32": "4ijBUTUChio3ggG3FTtzC6SoNfWV7RcPVyoHmVWk6LvmnCJdTe3Fgpc5W4iDMFMMQtj2sSdNFaLRBGrasWw4Trys",
  "key33": "2sSSGgoW4pzkU1yhByXsPvu9Yj4bmXKEFge2K5KaTykzLMAW5ZSYnyJMMfymiJcKNPK2J9YRJGVpih2sVYZ7cGTF",
  "key34": "3Zczd2tFqzo6XA5L1ebLYo66umNU6sWCTiQDqKoffceEWRH7UUHiuqXPzzKF1Eu3LzZ3WcXm5HQCPCtbuzkidi3u",
  "key35": "4Q2ZwxwVF8yq1nhLwhFr31xcUJLjMvavXoo8vnK2AdEnKWkLbH6Md9fpw47BVoCetVgtujL26d8S4aTCzA2fnRn6",
  "key36": "21Tsum3kTzUPpMofP2DDZsaRayAwLuzoSqMqDYivCaVKTXS5CcX9CyZBn7iHKfSZ5jtHJLPxTNzsxkujCj5eQbyA",
  "key37": "2mmXTH2BxXjrWhMH6Faom54hZCy4Sj6XUCRMAexnftYugy7rHJuvbKZzW5kkxsoXWBcJE7FZowqgucsPdftnQxyp",
  "key38": "5R7Z3Lw6VyLFBpgdH4D5BwQjpAsGeaFXNJEckszJCnWLBwKkvtt4okTPrQ531RrEfnFQtXhzNZG6WBuV8PUPMaUr"
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
