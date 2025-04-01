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
    "3LMeadGzVen2FSrk1K4CioBBz8XWPXP2ieXTU5uErbTf4eCGsvzjwv9pQMRP3GrVQ1CAoAVWF7DtqWyQcH9jM2nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29E2SfY9kA2yten9jaYpoEVUk7kVsnbjECeQSVX7rkmaaj4XvPdht1t62xy59dwwjXMoFH7n33qfXbm7ShZcg96B",
  "key1": "35aYDRuM8ssv9yTExUCPcoJ3UKLavWGYugF19EdJbU2NxdJEe6nWd6zoMb5YmCvHxJ2s5vjB5frqQcLnyD6msbZz",
  "key2": "4MyP4wPJrexBM9Hi3yARqXf9TKXeDdk8yQjFNEddeSM9JgQVrARHVgYYFX3SiMUjH5avYtg4s23D3hLB9MpWTJs5",
  "key3": "3BiiH3Ga3xYEzfkrrx2K8BdaKqE6PdCUoR5Ugwprcg9fn6UimiiJcPyxDvcc8MdMTGJbkQZtpkr2jZ4FH2CKuDbY",
  "key4": "2D1uS6a16NzbLJiko9ZSnCc2jpgsQWkbodeFTF8SBvNXGeTdR4XHP14QpuYpvqAHVCGCr6LnrWtnzxRUghnsxbxt",
  "key5": "4W58WE9g995EFwwKBVUevoWVkTwH21CMJJF8zM1JvDMAmo624drkbSUvokZWNUQakSUZL4HtKNZzhWJjAfz9SiUv",
  "key6": "5ck7zTkvTSFeLUKzusc3wsj3cf2boNirJ5QhiJFu2KEnNsVuXrgqTc3cR5QKVWXosYCwYoZLFftGov9b1DX4KtU6",
  "key7": "33UWQkGT9TGPsMBRQC5PaKqELJdHyEjE8TvqLrAabaoAh9stGPxK1Hv7SPLtv9FpdxZTKKHTDYDY1Y4EF2JxQ4Js",
  "key8": "55b5G2QAC88hTZFDTDU3NrXq3U4Kq26HhMiWmD5FRdwvnDJ7dLHhHs63AkqytLgrSwxU84D4zq9bbVEox1S3QStX",
  "key9": "4Ec2j7voFpg58dMWq7hRnMthKjnoHKYfgNykVdHCcLHgXa5YpfmXxm6cvhXHXL9Gp3frYVkWZoNHm9P6gBNd1ksv",
  "key10": "2EDcpaJiRp9u1pTs4y5kR59LYMLK1skuFUpgZVfswMrqSR5nJDAy8CvLdxmtVkUeHzm127iLmbz2CHL3ZP7QVPdx",
  "key11": "4kSQBWEjavPbZ5cMsuv3RFYWJJSntMB3uC3NHGYyAQf76pywiVGN3BPrrJ88MzPq5B5xp1ReTSSLdiSUbNeV9bwW",
  "key12": "bPaKXW7ZeJ1gVFUeMhbNAFN9TchcgFjAU8FhELYTHr4EfhCXaAPraK1v8mGrkDWFVxCKeEYkW1sTNCShKo8L7fU",
  "key13": "1pYibmiLhGanvepkGQ3spwFkeLyABca7bKS7U8nPjZQ8bYW37irbPRhZwhCEczcKganyHNPfs65SQccFayr3XuV",
  "key14": "3QhY2QqF8zVg8BfuqkzyT6RN7Bp1rR47veahbSMzVj5zuBV1nUj8WiozVVvWhh4XWqzouWBXstdVrvoFq3Goaom4",
  "key15": "2bSy2nCVK1umhy7oPeAGkV5fXc7B6efrGWSCRshQDQGzXtjwvVeBQTHU3FNN1izRJSQ8xT452qYHBzVD7nEbp8Tk",
  "key16": "4bjCEXpn49wUndLHtCqjJFSiiADZy2pUNgp1nLuCYY6Kg2etW37eDGzSHbsxfbm1egXwPozPpTTHWiQMc18g15Np",
  "key17": "3AKoCjKm9sidm9m9fdpN1NKHCyLNJBRgCze8FdL2arwvdMepDVArNFXYmn8xKn9duX8vzemHx7dbo5uoiiJHps3B",
  "key18": "2Xm5fKouyLuC4DsF9EtYFeM94Dj8Gu6TMSueXvrVSRHWDn8bVDbAjV3UPwaTttXhFnYmY3qjn2LyTmyNr65sJykh",
  "key19": "3nx5dAm2NLgPd8JJmXcVxFFmn73AyAqhEuDQZkYLJwQC29Jc3ktBFZ62JWG524XRYLxuLKUchAZRHnJMfCGQHiKZ",
  "key20": "5U6SxHrBU1tnQ9nqTjexzPcfVtWM3DisGzpBGCDijM2Gqstq8cEvrvgyk8n6fnCxvApXT2drAVU5B3r9fTTugQrk",
  "key21": "3p31GHaZL5yfh1aDv2rbMydduBJ9ndoK9NcnRmq4wyNFVL8zBU4o3LdEFNprBZeUESyi5pqfRWuDjNM6nKj3Lnxb",
  "key22": "21zc7Upbg9K3cS41irXg36rcQC7gvFxR3ArN1AchbrfAxcZtR3DA5bLwzgBD4ZJFGbxdAMPMrXgoMyF8CbZ1qVeh",
  "key23": "39YrwTTUaJcR2okAbmbZhWsUiy9cTg6gDq9uPAwpP1ebtrCNZiF272gbsonpY4JNk4zNFZBCbD4FMGrhtXXVk5Vp",
  "key24": "62SttpuchyZZR9dqkaPnkjFuininT2WwBndniPv3EW6gZ4oqgoSkVTEjYDVizM3Yuu985MyPY3hSp3YqVPJvwfPw",
  "key25": "unYWwgZ7VzCLSbb1DLKn3nAzBPmgmcMzWx775uDM3FdwwDxxjmtWf83pXCk9n8VM3o4EstJsDUq5CUMkZ6pkHg8",
  "key26": "63h6zfPru9dWciuqXrBUEzkqMHdQRGmAnDUsiGDqFQVpoVjK35oGNsQ9As1fNNKceaJ3zXzhEmaCoxaBfaE6Qcur",
  "key27": "TuMk5iKB8vz3kVED1Ztd2iHwb9feieQmgNM7smotfRguPmZCYD6oAuaHnpYPuJmgbK8gk8atj8uNq8KoQ1XQyvZ",
  "key28": "4eP7vKDqj1Q42nAGpeKVZ2DZzMzUYjJDXVYoowHk4NNcFdhGthf8zNuEMyrshcu6NatT65sC8LTCAnPmTvCaR3N6",
  "key29": "62SyQCPzBpEQ9MZFxvGgNC8j8HqFwGGgdsmHsLmMfQk246cZPComgJEgq9H7KsPFuSPWzTi1jSmQBuEB5ze6Ecuw",
  "key30": "3c4ojB682YR52WtX2Gyj8bfQG85WVt1iZ6kkUzjB683tgy6cS8bvpEmZzoqjmgaP9Ra2ADwdQENdMnckGfciCM2",
  "key31": "62cG4oHpUyZsVvf7qsiooxs3evXV9q5RvLYaeKDtpRm2naYqBQNpL2nyEfjVvMJEekbfxxvpWbHn9TZNSKdUgAgH",
  "key32": "44Q5vMFDMhr694D95DdPTfFQHiqW6oWQrfDpKrZyyBnnnnfkcEiVXtwQ95ASgzov2t9Dwm7wetmUeebMQZ9p79SX",
  "key33": "4NJeAL3v4ZyC1eHRYW9HzxgTMeqCGQrHzJN6pdwwLJGWD6z3D1cheoy4SqLd9JnBFAxEk4ETXpfB4EVCyHhJoqe1",
  "key34": "2PuKksPCvNc9E9WwvD5K3vTLVjPcJZ4Y59bENymEE3DrvAfK85H9jmcNpMfteu5vEuhbHbPbxb5ExyXiADiZDxHb",
  "key35": "esjwetmX3SD6LZjfp66W6jeVFdgTGZL6S2yKSz5aPJcLEMayzFDQtGx4aDb2XAFJ4LCgs3mP4NwZmA3gxUGtkxZ",
  "key36": "5F4Ndu6QHG2L575a5Cff1stR3U311iVfHg6Bq9pWgTkm5akGBc8ExUTXTfiN39xRiqdrofpUbgHF1jzV11BMCNxc",
  "key37": "3dPK9jLu7xGRoWQdWBSZEXFRC3MjWtcgY9AGSt6wjv46EujGA2cjZvWt5698TMV4jWbeQv9LMqCCQpvPURSLMAtg",
  "key38": "2uwTkYXq3x4jv53ASjpAmKvqvPGfKuPfBVqUhNcJxgToKQ2Y1yuZ8oeZgbdJE1fDSrreW4AFPjp91t9CVuGpZaDs",
  "key39": "4GQ6xTjneEPmzbiWzKNbMDFprGPiQT7AfgXqnSnsWVt2DYZyAtqiY7oNS7GmsvunWHqZ23dwUbJuLfKNxVrZhkLN",
  "key40": "3jQQg5SG1FMyyqn5DPYhiXhe9mt7HZRHgSjY6LXtTuVJJHqMcTkP6RQHA5DNf1c4qX1SDfHEYiy4C8U7M8wj6v1v",
  "key41": "4GfTJkMY1qNxnfeodMqmPntFKh2QjYBjnjdpzd6rtrTmYC8h8mbn4z4oMNLdWoRj3hV7MqvHbh4po2CWsTRq78sG",
  "key42": "31KqwmcE1uHjao1N2gj8DwhpyqRycpWeACHGacPTtBuZcUwmN7buJaWYaA96f7KzpPjihYwi1YHfG3ZqLNWginRM",
  "key43": "2UnP2xQDGFEV95xHGgtx2DXdYqhE8d4r6cN26AKYpa86FZLuTo6GKJsRrGQhqRvW653zV1DoNLUmC6yTb9bRg4N5"
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
