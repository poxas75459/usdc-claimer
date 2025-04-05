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
    "2Zs8p6LG911ot68cUhukd6t2xZbsaqLbd29MyGMjfzxxrwUdD4QV8WHJmMXBmxwHAni9JrvAJd564BVfV8DzzDdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HqGzGSpGnHR1pQXNnw31sG1TSJ5q18EyCz9DGmZ1KPdcz9uANujYuxPNJztMJ8wk7QAR55K6RQkGKdxB112XStA",
  "key1": "5dutAyEwgrfVHedgpHqJtAssyhnkdByaVsMVzZTCXMNtwmbB32P1mWMxqX9zbpsetMtnSm7kwuL3bVQzrXynwB6P",
  "key2": "5zx6MWbfet4sBTo3Gr3wU4qtkBZYqCvhi4eTEvaegYuc3TKU9EXVndbMc4tRSj7nXaUPrcrGhzJHXmwYQdP2MQfY",
  "key3": "5rYETwSWhAqz6uiGPxZP1wY9fDebwj85BDK4BWB2JDHY9A5GtJA5nA5P2ZgRyNvMt5u8sf2pSLS4WwYuZU7Xv8Ym",
  "key4": "5ab7f9qqgu9avjPtiYN6bYwbWuiDbLrTjHPyUEnRCNTcfoLNjdtwPmUvCTz33LETAMq6ysn2WhGWZaik7iPspV9",
  "key5": "58pFujHzUcqR4xe1pXrTy1pjSzryaDAEVrFFv4ZJqRXAGCF29ccCsh7rH2jwW6fxLvuXsw5DWPcGFWPuwihe59M7",
  "key6": "7EdtHRXkToE2H3QjU9JoKzfiAzwZFvxA8EbaviSHTRcBDs9sgXzcnHxa6dZ3oR3TnPwHyQuLZ4kbJ1xaskG6Uy5",
  "key7": "42zZskv9gwhDPrYLvjCzmvt5UfbwZtxN7pb5KxpkpaGg55dHoryJZpbRLqyYc929SExefRtraJX1H9F2pzrcKtU7",
  "key8": "4NdALJgrEvx9Ske72BQCJ4P3f9hfSGMbnEY6dwcRzvVY7v8136ANcJqgvn4D13gMUZ6E9ydY92LUhRaWZStsGB4F",
  "key9": "6rhFTf8t2unorn7VEowjfxd1D29xvWTp5YPPi8JBYhGLjwaBJ163a3T7ZSputtAvYYfMhdux1En38KvxwjsTcub",
  "key10": "kw9Dz1EaskBekscWF9dHAdLtHsJP7xphR26z1SLxD5dadPeJuDApexVQGVR3PUwkAoFxMDrJBTZ57CA7Bi41Go4",
  "key11": "TnXj74afegx8f3RbybnHPsQCPYkuF9Wr3gPwe3dgETywpg2c1a4C66jRe5mde68zzoipDU257tBB344ktKbo54g",
  "key12": "3wD4iQi93y34M6E7P572gnp6gVwoFEJZ2T2r9u5j9cf9a9eAJXGGJwwPkxN2R1Hpjjw6SyEggdqchZ7SzdocWcju",
  "key13": "4B9TPTkVhYT8n42sobVGfmXw2DFBkULV8GczaYwXH8nwDS2ScCnvCYENvEAmR9qUPkFwFquD67YwrxthXhW6em5z",
  "key14": "41Vng8vP25nHDmizAsdD1jURfLfviupraSayvfzn3XrjQ9cmkwVzhZ3wRNg2kp1gZJAwAgf763KqU7tWoS7tDuhP",
  "key15": "43ok9mJWT9eJTHQBUJdvBXdrgSWL4tULaozLdQDHeBepeMU4VdWUN34ZzAmRoaT5rgrAFTspZhGdbhCUtKV7vRvw",
  "key16": "53LQZjKpq3fZ7gZSHSuimfC6dvmSvgqP4pZLFkp37sMkrzZPa5yoWm6sB4ELVtqZ62vCZT4oUQNuG6QSzyPWASXA",
  "key17": "4w2XnQ2rTneELQeDKKS4N4ThdUAe3DXEnAreJ1KEXgcCZmG1Duxbu43w3K9QrWEoVDHhyFk8mNg4jv7epHktFnYj",
  "key18": "2Xh1ywthVW46eni45SAnuFLpxc7WKfvx7tiKfkhaKuVLwF1myK1XuGWJxEnC95eGKFhSG77h7si6pcnZwdPXKTsF",
  "key19": "39bKgU8LVfsiKvigDPJVdeNxXtfdVF8geFY58A5ZdNEFegiYEwZmB2fQ1AeHt5BCUduLtQuPqci3dwaG1muEtZZH",
  "key20": "3mTGdAPi5xDpgigW4pbVyrQQKyZL6BWFEKHK1wpyhF4erYGU63zbcSAiaP7Z6jpZsBfc5WixHBS6fZp38UHaP1BS",
  "key21": "3H9SQkd5UGfophoZYsXgKFcWUJaNF2NGDiZLez6Ekim9ze1LW987LqCL7SfEURVXULs1jcunnbDNh6kZgp7nkkJa",
  "key22": "cxt9hXR1g81HxT7PUeJMErzqS1Fc19VvSimtrctd5HZAiJ2cMLtnH3xNwuRPmf2gnwfyc8hTTYvd2LtQbSAogoi",
  "key23": "4gXMHMdziPDqM9BRNtRfaLdZtG7LuR1jrPd51VwMyv3fXyhfCwcNZ2gXi3LB76k9dt4PCpQAV8HDYJtJUYCp7s62",
  "key24": "2XMNJ3CX6Q7KPagByWHmSgm3UuMac9VvcpDwGS7XoPqzSMkZZQEoasPAbvgkwTsf1NbieBnxhZsVcT6fsBs488rx",
  "key25": "BxQzHEAW5AVUzq5M4KvS5Mzb1CvuiGyt3BmJ556t5DMMvejW1E6tRTYHGcPAsb2NHXHizYz1n4g9VG8ddD74jgQ",
  "key26": "5N1ZN77HVLtfsJxpKHbhnhe5frBpPjrc44oeDwnq82hAKqRAVZ8vyEqGaEsw3KyMPwWo3KkiFBdshX4u4vaEniY4",
  "key27": "3TDQaiHS4Vup3kVKwSwH5x9S1PqVqEroQvBCUKSEvbuVL4xHYR3bTwR5G73aNti5VbwKWiQSwgrCEMuZiQy9uMJL",
  "key28": "2CbxvKdiP1cD74k7ewdGLJ6V68FKqqv3XxuUMxr6Gg4mnRjvdtdBEPjsCeMYo8fLmTFT3XpthdoirTfgwDZ183hr",
  "key29": "7TgvBL5k9EACErYmDXbA9dVGcnCePcsMnHa5Tez6XzTDatc4h2SMN2Lsr4TL3xxshUyGgcQP6qu7wEfzhPkLZ3P"
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
