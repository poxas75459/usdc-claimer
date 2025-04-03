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
    "2GEDf81XfHPsPTofRxUo1DV9cSfUKEnG6CpsSK7vGyrcC5WkAYvFvvvY19wfXXiQkeLZRvD1qBgKGroBv48JHVwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NUvzTbSihvcbuXoxBsbD1QB7yCbXt4yxa85WHhhNAKm3wjMchLJWc4TG7DTHQqrAUAtxFpzsCcGTLrdDoX2AFcp",
  "key1": "3hCeJXP83imkgtuhWk3SQUz8RunYp8rb2zAzaabJmuNMksfMMKqo6CpQ87cXycH4znJX8V3WWwdnfygsZo91P22A",
  "key2": "4cJyNhjvryp9CPQZ5Qzezr2GfhSiYZhFn7wutrGBh8aETkjsq6BbLGmfBGrX68ygu8YUTjFz64ahUAihYokr6t3w",
  "key3": "eDJZauxvmwqUrCY1ATAtZXAJK4yh5dwHkbT61oaPm7KyEq3WCKABjMB9xxmDeEP166Prfd1aVTt3jW9AeH44cSr",
  "key4": "UZdwL6NjJp3242UJFwTSufwPcoF9hc91tF5aw5QFyekCbensQ3PVMW91QRGFo2zzQKUJBpZ684TpdgZtxoJHjbr",
  "key5": "5oDPQbcegx6vCzDWRazJKAjAH6BKdbaL34b2LwMQNvM2uc5FsdAob2Qi6TFXnsMo5hYvGbP6ttTHA976ohH3FpW1",
  "key6": "4V5vd9P7WHHormNaCWZ18goqURVHmYx7vtg9cuD6XXhRTUnE5MayCnk8ysuixJUcPMXvrHf8qLiFwPkVYr5rjheQ",
  "key7": "2irwVo3PQs8xEP8ZS1s42RcR1TUUZ9J2EmuwxeLHrsLJuFJrtiyoXJLXNrKEMhqQGRCC5yKseDXacV7jexxJCFJn",
  "key8": "2x6sqDnwifjGvrjwpMjQedB9aY6hg6xmnJT4B3vQN2iEYjLzRRJx1Q77Q9RTqTjjXR3scJTRBiJMbw3YdL84y6o7",
  "key9": "3jejmfRk72WbwG7hhdd7yvpucza7xK5pRT3hLqADL4ShpEYRTUVad1aWCckyWoRaLgMrtMyBVZt1DpZyhvNKdWYX",
  "key10": "2qiHcKed8h5szu8S9gMxmMwJgQbTz9yUefRD2AWCsXNVbKtHhkHktdXCxA1CkwBMSpRRrTWQqtEK4vGsTkNkZpDC",
  "key11": "2xa3hdzDcLzzhcoSDRTg4m99MvHj9CohSNbzBMpjY1kh6povRqjkRqeQJNRyzGHW9V45wHT4UYtcQvNYii8Xcian",
  "key12": "31V9V8kvST5ASLzCZZgNGWKukHdD1ax1n5KkgHKkMf7t42vJXcTkaQviTAuFNsfak5mqgzJXz3W3VLzny1XEedtX",
  "key13": "2LDJJx9pMuvY7bQV8Gg6aZdy8d7dGWYs45RSpEDJije7ftdz3awqC1DzSKB7r8kwmiLxKrHuH1ZyaDZ9uVanDdTq",
  "key14": "4CRpNuYXYUz8oHivLg9dqeab2Qn2dj2pMvrXmouVJM29n8dYS8KDvrBuExWVac8jD8umRaAFFxv2M9ZLrhUFWfdH",
  "key15": "3eLwf7PwtCWX4kmm3u9YZhyTf7R46EmksCm4eeUJKMCRYANNYjc2gPLwwAcY8QCW3y51mk5aQVxaRvfPaUjrqwgp",
  "key16": "3YuaV5x8HHrsrmxWc2Mqw1km4FoTiBY4hNXFXgoXst2XFKJmEaEQbkjhHZASytTvcS5mwc42xBRg4JKPDhS48LRj",
  "key17": "5V41uv1FGU9opvCG3cbiWfDwyVcfu4UfUqyTNGNPCHkhuaNLYNzG6zuZuvVt36vo5vADZqYw7ea884A3wPzmZ8n9",
  "key18": "UJKCeKhoQwLgW9rF2rSJAjXLC4iZAM1sohTx8DN2woJrGUusSP1F8Jcpkt4Zf6kBg3pqAKkJ6NawT5eJMChYwEL",
  "key19": "3aFYxFid9gHu7kzHHQicbFDnr5R8hBCiVTosF7HLnKNAmoTC7u93kWAASi8cBY47XF3Z4j9Koho43Au1oneqMvfG",
  "key20": "4F2NxKKpHVRZ5PC9MsgaBnYpwu3rhDWxHgDfvyj3QbY5UGkhgV2RyDPoa2h6BTjXejbkSN3iHsZypkrgH43oxHAW",
  "key21": "nF7ryDT6nysW1SmXkAdEhbKKTbXwu6WU5Qgt47byuAFv185wLBU1LPA8U4RzrDKb6ZejsjhVWzoC4iHwwFf8w6p",
  "key22": "5iRFP4392MovWPzifm4ouzmmzVk8sRiLMMHvjCRnNeBoVQN26zcMo1cwyDwaN1abp2zHxZMX6Rn3WPqiPnHb7md6",
  "key23": "3ffZYZKqwyTgw1J1ZGZxZkkwuzxkAXTREPD13ma3GViU2B8bbdCk4ZGnFYG4agNmcsmB6gQbFDLHMx9rTePBecdK",
  "key24": "4T56Mv8QmTm2qTH8XSH3d7BF1TffRAGmD7WvBastcUELLzrhiigbBvW4gAKhBp3oWSDYTnJ8c9UMk84HKUjPjALT",
  "key25": "5mLxvhWodrrFJsBCkMbMEcn2dxVHxKf4iLLaFkJ56RqCuzmo3QYQTSvZDwrvn6bgiyczJp4CLuo7YPraoBmuuEXR",
  "key26": "33UZMoRiUoJnTgX5WnGX5ojebvLiCrX5GYa5A2T1XJ57XdeQJYmmyXsFAN9YvLUsWSBR2BTuwAo5roXhLSFNnnUD",
  "key27": "6345tfGFzAJ6cr52Ao7ZJDhHzZDYP8cvR594oYgJckAefvx6a8tkU1TFVMcnGXV11kNSMFysEJzTxaDZQHN9bZn8",
  "key28": "3Q87K42P82js9Pd5jkxYRkR3BeBvgebMnhahFnCVm6pntfeBknSM6q6xNhB42gsJ26YEvVJ8YunP4ncqaoXcVQkm",
  "key29": "5m6srKkvbT2bGTKgzf46Sjce9ve8xK8hv1rH4RftzzhvnuhE7tG4ksx6Gf6A483brwb3kBFrpKnFocCsr7g975MS",
  "key30": "3DY5vtz5g5jmBPAfunDk9k6pMsxCrhJ3xocVTrogaM2mYhpQnFuuNt5d4AHErh2t1EpDGm6W1qyhcwMnh25QSLGd",
  "key31": "5dJbo95VQTGYt5ivSyE4CCQcPUSVa1pUM3Mg5YvUAbrvXnMzv1TM18wYmJKJtVTzvft5z6kueespBgE3eMzKj1gB",
  "key32": "2xGU73kbv4XvjnVYNFuyJ9odE9HNFkt2BRP9wjxVRPHWhEHNwDKvbWS87SamtV8L3hWTc4LZc79auU2kXsM5uLR6",
  "key33": "eBuvG8ieQihzAfShYfGfCrqu815ANeMi43jYicNGJgsZpJAhTjHiSgW6HhajHkNKQ4HGRnxLH5TNMLKC3B1xNAS",
  "key34": "2pixdtCSQXVvnfDavRSEpX8dzHni1LUPUZJTXmsAsZkoFRZGoPwHvoK1bEEeN13LsxUETieTTN5FWv1erY3nzPna"
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
