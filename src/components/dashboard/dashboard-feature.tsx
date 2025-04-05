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
    "4FqdexTu9bNJBMFxhawx5qapWgcd6fz32HcM3wkW2ccJMB9T4EuRFppMz4FikrLqvqRYzHhU3PfUC66gmDSDRH3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ocVAQYYiBovLSdj74yynAHRfrExVCcAmgSme3G8rugmePEvMTcFFnFTAQ1jbtj45FNQhMBubnN4ApxFbiCNtjr",
  "key1": "5CKsQbSxX9R6ukyp6zUPqXiMnZ1gMdWzAxk2AA5Q3uDpCN6C8QMinYxvxKyUDfKdttCZAgvaYirhfPc8FK13chLw",
  "key2": "6LJjxE3rN4z1iwYt4AmfAupGzN2AL4VbMoQ4aR431D9gKDbYWgVrnDfQhfnYZNG7rUy215JdmE9U14Ep53e3yAA",
  "key3": "2paY9FQotfJwwxGUqaDDBkEh63pQRH9Rkc7nz9HUEsfaKp8dExLy7Y27RgDMUCFzjV25M63MtjJmULhVLpc8oZU5",
  "key4": "46ZVHWiDWay5ifvcm4Cj4Pu7zqBqove8pMneRwDb6fy4pQfY9Jti76VmCStnbWHdr1d1YVQgpZztUmCxNtuc4hYV",
  "key5": "YyXCtJ4vh1b1Lm8Vuq13b4RWRviVkeGjTLTZcvhCzp1xHToahugz6FRJHiYkKNtiCWoQeSAx9jQfK29r4MUx2nb",
  "key6": "4pehYp5qvWev2mJkdwGU3MfeZDNv48ES5gJjcXb6FD2djf89tpvy3prnx5tbx1tEoMJHABy1LxHigbCb2Cvv11Rv",
  "key7": "3svKbxfmuv5crxdKfpuU4upYCgk1rUsQhXukw2UoyU2Yy6RMEiai2Ks2nRQeawnP8qcCqwcXRgwapMUrGwDXwxLF",
  "key8": "3xU2efwz3pa7cJJXKu1mgroLRhV7dD5WckTr2QrnmyUrEYWuVCnrFyfBPaHdnZh92HNrJT9ZrbeNPqKYxZwNWoZ9",
  "key9": "2cGM2rTF835qcoK21Zuo2koPkWHgjxGnjCunVCLybYWjNJYqHzJetVXHoWg3Zb4ysots5FD2mEthFfZWF1wEqC8f",
  "key10": "JthymsCv7ESAzpZVUKeeDiJM7otuEYeUBYUZ3jxBycf6pcEvKQ8RFpnNe8kZSD6uBQXedzTmSfibUJeak9idqB3",
  "key11": "3uWW5rLvaQBusDNXH6nJ2hqbVYjrhhLXU8xZ4vXCpoBuA8kLJeLycVbtWrxseMwTvC9XQZkZPBiMPew9vdzhCruv",
  "key12": "56Ec3KNY8zw4YAWPVRNTgUnMnBDAnxddYjiu1L3K9Pj1fPUWLMRuXYXZR3mwHZppdr3Rz5E3jQ3Ur5Aax3o63L8R",
  "key13": "4ETFBmYnvrVWTMeCbF4C6ZJvkbwzFEaga5T1mM9FM8FLpsvYpZEozwYrA321ZGLceJuaqj3tzsidtLa4nsshVaBn",
  "key14": "4ozCDtaZQ24orYAqrBU8BAW4S1WFiAsig9wEz9ezWa9ok18WBFLKWKaq2HrHdSW5TgLWGYqfAXXdYyHRDHvMiB54",
  "key15": "2ACurpKgMXR3XSyZqyd51tG8EXdKeuH2nGuvSTX1BpghaXj5ndK75zYjV6M3HyMYtMUTggQvUi3c8ZxvMR9X3GPL",
  "key16": "5uxThLcVr3KykqgXBJAWBrvxCu4RuSMC18h7fkVwg7iSzGKDAP5NqqvnwPqLUx9mCKSzmDbkoRHESLkwopHFcnZF",
  "key17": "u4ra98d3Ampv4PC418SrmU8dfuN7CFLbad7RmQkfKwWhXrJTscjnqgEDGgvZAV9KyX8AtQwuvM2FhLED8iHbaoz",
  "key18": "4VVmRJbzYfXmV73B7nfxeYxx8vqBKSkyzfJ5PT5kCni7xsUopL9hKBzZndAfZDXgcmhs5BGmk6zG137cdZYzyxB9",
  "key19": "h8nocWPGAvLGMhk8Pqt3Dh4bfKVsNhrd16BmMy3NUiDhGBu3ix42keB7yYkaxtxuFAyewHQyt7AkDAepYeTowKw",
  "key20": "21EZ7Uj7TcTburgSTEWspH7LpuXCQbmsavydQT6fqzcdfJ7ake5FVibMz5JjSMX3VGbZWtNHdSKWvux7cpG2nXWi",
  "key21": "65iGKMqGwzonoHUo8cMXapYftGKYYhCLByQM1CZFZbWyc62nAfr24dAtNyNywSnHaekU2SBPxZKQAykW9JE7sLo1",
  "key22": "ixJVw6AV2espa3GS9ZyGo4e3ey5B8qgUmLofbLjWm95W6vwtNpqZTo3sUgVwEQDg8XfszuvwpBnEM5tFLWPqbDk",
  "key23": "5GrRfBUbyJkkprNL2EJtzgnv2rk4kmSWDdVh6FXFUTuH96VCBhn5EHfgeUTiZNqK8ycUq7jbDn3c67dsknPLwgqj",
  "key24": "4VEFRs96KkbU2a7ZwtkGax9mncPPfJTP6K4ayNseYP23ygSFiWePJ1c36B8PWd3pQvqGjXUz56ooA1F63282Dgqo",
  "key25": "47LKxR1VF3L5R1opWacAZZ47w33Zpq4HC8wbRCac1TQPNbyTV9FCoyeN7eZCnfP56Y3D5BSrF2nLAsedcmDCUXYk",
  "key26": "382Dau8eZ8mmJ9TiKfAW1FTT71fZtxZzxjhbUDtsZjAtuhYiCuyzpojdcFyShxcKDbiJtYAgmvWdwqRRrJucmqvp",
  "key27": "ZYaMMDiXbYQ9oxSwtQtj3pu9EnP97TMQhKgWX3xuNvWmv6VH8okwzEU9jD34GXe5ezMpbcdqENXqkdcLLX5xUJJ",
  "key28": "3KAceANrFXJLRVfKAYuYxvyN5Avv3F9TUKoCKiyMioLKZDZMYukFR61saq1tVHi9tcuzje71CFB7TDRMrBJphfRa",
  "key29": "3QoWpE3XnWZfNg7JkEDLwRtNLWSNWqzHvX5rNBVSXAAnKweRcjeQi6vhdG6wsnf6tdVLo7sBYGWWRmm7iNLer1N5",
  "key30": "5o4tfHknkkb4MsuRLDCBtX6d75dGsgZsHQJBKtzpSHbLhrtMzsTahQhe2rnfhwDtu69Fi8pXFAtUhn1PhnGahMog",
  "key31": "34vNCHES2ziaFxeTEyVU31sBzYVJQNVB7e7rXGfdrQHJERgJcKTnNuDT1xXA5nrhxb2TtaUG4J894mvXt9WxwThf",
  "key32": "3a5qNiKUEXYKRo7AHgFZ16q6rs8bJUf3YeaJG6RwE7PeBvcytw12iue3s1ytJrTh7xKT7YZ6Gno3F79CQ9gjKTfU",
  "key33": "2CjTvyqMZGaJqGTGSKNGZtmJ4KEmPwabMnoQ7a3S9i1AYE8DSPXBd9YbTQSDuEu3XRGEa3ELJYqPP8R8DnAdrFMu",
  "key34": "3JsTZYwd4eQWqF8WcKYyfnGJDQWVEUkSeZ47hPapLNWUihWh6YJKRjtTZ1aFiBmyhKqM5XPgEuitZkZyHyVt7ZkF",
  "key35": "4Nkc9KT1YyTmnf2La6VESD94GqqA7ZKD6v8P75uHsiSXiXr4vUE6JAkMqM75atjn4bbFwmCf7PKn9A6jpXmZQpGy"
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
