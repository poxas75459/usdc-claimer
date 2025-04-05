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
    "bxZsA4uQCRaDvFrTUo3xSLzuRWvoMJAo33KTXUQCa3UoDg2wEubezUSoPiKKsNMCVsNvaXeJrtwqDZXMHJYqaqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pu3vjMidX1wseyyjkNbP1Du2okuirVKpYHf3CPPKDve7tuFpZZXeF4igUmoPDzRsnMEutLvdZrnhs8ZqEjcjNnM",
  "key1": "3cVpJxiGkdETCtEFNtErwXoEFyT23HwHmhvqxRvcnENP4jH423327R9Y15ctFhLn6a9hYdnXYrhDatM2Uzy2PvAm",
  "key2": "38yDJbdK5hqYRFJ6UgdGStd9QvwFZrvc9yFTdTFFUjpmHbBcjpjqme5GQ9hUT2GLuG6eBf7DvTknLHrLg7zhkPHb",
  "key3": "xoYhH77YAMDupZkPjjPth6Hb4UqDa3KtxZPa1p61EqGLgyvg73VrBAUfgFT2vK43z9QhrPcF9pLofsTAjPLf473",
  "key4": "EqYV7N4TAZxrfETbDguA4h9vJut2d4rvCU3atU4xEyfqkgfXrXbqSMxs2AF3hDetQYFt1N2AUuHyz8mynBpQ2hH",
  "key5": "4T8NN8ucZKAfn6xfhbV4FeFMAoQZuRWNRtjN6XAQ1CabMQ8nZkmtdqcWJr4yZ8w4rRtqMRipvK3zKSoDMTozkWMY",
  "key6": "42YFgpcWy7i5dGGDJpPTj5rW9Z8g5CTLNk21kQoShAgSxaTbmUfJyY5Th4xj1dRDZAgLbWNfARuw4W5Z19A3nQgN",
  "key7": "uEUdZ5Zhnyv7B47PtXvsh3FWfeQiyxQH4m7kBWbKmqcyYr736os57EMkdorPd3r5sYQ2sBb7qxH4q5eMVe9QHQf",
  "key8": "3TmRcvLez5Q8Ww5TSTZ2iZ9eNYysf4kPdTgBe4o1Z5LSYipRxLgf8ckM33MfPWPCM7WwpvCvcTM834uAjB56nbVY",
  "key9": "JFQ2fH4gYu2oV1pbCtYBZfE2SieD75Gxm2XndAQfvLxtmb6V8Nuzj48FJfairSfmSxE3Z3MhtHifPfKZdX129Zp",
  "key10": "2BX8kFwZidkT3kV2dnwMJtbiJgrkQVLv4JRf5XiUjDuuiKSFn766KSsbfCD5Xq9gDLf78zfDm4Dif6yBwoQuZyF1",
  "key11": "4ybrRH2znRgEmgf6NPxYJrAGuRLQPGQ6iHoTpmcVpcjZvrmSjhhTj1tRV4jMkLVK38Zqzj1rCg7AToRHP7UVqhzT",
  "key12": "5hcmKWMmcXkQSZEzLxX2dWv1d5qfTjrt5bteQvAcAHSk6g8a7ibdGx6WwXwbrYwgkMoFDRcPDgMqjto1ZWhuF2gT",
  "key13": "618d3fXL5eJPGBswhUoakBnmxXSu9w5EZqA9w2ShLy5otWTrhsFZD654E8TSjbYSicqVfXgfivZt1gNViaCBxMWn",
  "key14": "5bQQ1xrgbe3eG3bYazVii8CP8YEXqMVmotRyycn2SBfCo6KXD9eB54tHfU8qxHAmiznyCkqADYQ124dWeuDbEusG",
  "key15": "2tafGD6udLBFjSF4y1GqQRLaC3argQ73CXwm4HPUmsZzoL44Btm2iUWKGbdzEXhLXcADEbGdU2tMsXYGvxkAASpx",
  "key16": "3iBBnuyZTQ2nXZHAhcnUVF3buuMGwM82bfpDeiiwy83MCQ8g7q7y9YtvaoMjjseRMWKnBL6BmDRRifLZHp9PAwZX",
  "key17": "4Skj9vhnoSPcrKifznuvvJ2GWkRHGXL4zCR4FDEEjtXWsfkmsmNFLkH3kQyGtkgUcYuer4A2uxizc78g2A3bfiRC",
  "key18": "3ipVupnc9FPzUeCb1hw3rkAwtb7yha3Y7BEAHVaBLn5ZCmmbZfwNTcS24t1hePDxvbTxJvst11kEomsZDjdE9QES",
  "key19": "2qyjy1KjyqbFiJE2ZNhB59ZKFEQeyms2Yjg5JFD3fMEtkZRooBMmLx9GnA82ZesrfzeC2q5LTEBJuGwdPQHkARbD",
  "key20": "3E6vGj5LXEB1amcrkbymM3tzFNG4HTKjHMCvtzopLACTiNyG2CUdkYsVXd9vHmxpGuafTbgqtssrvqxmSTTJdnYi",
  "key21": "5bh59XHjAcznAJyKAan76sBVvoJxWWUSv46e9pFChZEu4VDdqvW4KaB92ymGXaHhKWiCH2SoZ5cxm12RzcQYQtdP",
  "key22": "3MLq82fn6HU91AtHPVx9u7RCvK1DWKKiXcmADFJnk1cMy42eFrJV6uzNgzuFbdefYqwTDk4ZsHi5a1zyJtN5qxko",
  "key23": "3m2CSiXtqFgQ6V4XJQ28j56q2jXmTgiZkvQu81xXLJDHYrihHtkLPoxSmHaK6HviBS6smZeaBU3pbmTxr3LgABXy",
  "key24": "48as8TGRcntagH4rEShRcTRt8LD6mQBkVzrsQCMBr2gXvydsc1nRhbv5hgiEabEHoSvKHkdQ7vsco1fKeKgh5YGs",
  "key25": "5B1vjebGF2EVTzqiy3YLwVWauxDz6cvfGxgd3RgGkY4y7TkumSDTmBVAzYdiYXo6KCNQHmrTQM4gHsJuTMxaQ3zK",
  "key26": "4269n1KLo3krVg1YUCdULe29xxzd23C3DaexNoBQk6umn2sQZ2LeUBdmxQowbNXfJac1KKe2qbSV46x3yyuTzFgL",
  "key27": "4fqSnE8Eb8apUjKJUqayi3AK6pruh7m8s1vzjaWWUJVCKnHComqPjKeb7zgimAHHSYzYdme5cyyX7vgPGimZ3P3g",
  "key28": "4MmLjan6etFuGtpUaxfBhdhDf3faC66kXAe6pefF2mUeGqa5toY8E3ptEuPrrH6nJRZQ8CTDRP8jHJwotHayBRgs",
  "key29": "4QAYq57UdgyS8aomdDtzA2AodBaSob5UCGuKj3FhxqbvyHYymYkSC2PnpaahQwfMa5hVCxy7Q5vPEpnThBNnwjva",
  "key30": "49xxMyGfJRdCezsVSHviUFHatiRiaJ7JuSDxmwY5GgVofC95hpLfk2qmyq1pw91GCu4268A8NkjKUnU77KKstzXM",
  "key31": "mHuBWNwDiy6KDWVgtY8rMCBBHqYpBXX9sGrRqnjWHfPoqB9Tcbk7pvs426AvHGzuLKrZ5pwqTdP2Jmgz61qjT6B",
  "key32": "4RRFwnSDeJrsoeqHUcDYfkP1Aq7kpEzjT99jNNypvpjMA2fUeksY3GpAZStQHgoc1J53xVg7BgmrVjYUd4u1NupF",
  "key33": "59nFwKsiKyQHxM14v1EXb8yiQ4AVYZ6GQGGVnjGE5i571EAimvh1B8PDhRLjNLdXez22KNRs4rfGNg4jMbSHzSwn",
  "key34": "SFSVLkpZL21Dkt1sJ9RT3vPzu1E3TtzYnWz5gKWSyBfQ7ZEp5bQTgqucVR35KKtgRvrEEcdTZrFfhwAHwB4uYwp",
  "key35": "3VJYWSDpThapHGG1xiHKk9nQtC6HxUuPZ3EjHTv8XqPyhTwhnj87hyHN3Hj5TWYownzHwrBzjDkLJi4SyZdSQz9S",
  "key36": "2aKXfJZjAcMQzpWdAtnWPHnzdngG9EcdBCbHhwFQcm6BW5ZTPAJ5uaJACZujAizo58vRPcyFHEy1D7PDWU43nsLx",
  "key37": "2wFzPwphkcTkwjSPdSmmkmwtQ4JbZsQw89Bq1exgFJjS7grV3U42JmmDeEP5D3BY6pQ2m3aXYjLF193PJhj43tBa",
  "key38": "3KzJc8Ahppeu32zRnQxsFwnSF5CEzZS1S1WZU1799c4rm81L92hQS1E64M6Nb9aY9MjjYTqkeEXmvS9bq2LYPhYF",
  "key39": "3ZMGdQUqLwsqKhLPN4khyu2NnDkdjUjMF3NXnV4Y63kYmiL4Ja2AEiezKKrBL9bUQ2opJo2evwhvcxHxALzxF18C"
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
