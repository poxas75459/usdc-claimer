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
    "3ZaDxnpJrW2fMfmLTi7MqWpEMyTxiXBT9vLSWqhMgZSGwQ6EVDyfuMuVo6Ghdm8bRqee9Ka8CL2JW7juE2iCoWPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zCejukkaPyVVw9MTXEBXao9btATVBktdLRv3qXquAgceXPMaSjdSHsGxAm6DMzRqDV4goiGFtrfojxxKdepf7G",
  "key1": "61Wh5AoBSep9vye61vYZeSDnMjjPMJYFm5SaTyoBZM9PtoVmmGN9oiDbtHKtV72V5NEGZU22Giu1V9Zf3rCKUWE4",
  "key2": "2jg2WEU5aqrCYZaMcsC33ZkCfvrobopTBW2SrS84GocjXa2Ev4UpozVrdLjEUa6AMniu1aq8YmAvyisekWgrEaFN",
  "key3": "6veHGi2f23gCWU7HCc2uwMDgmTrbEWpQWkPPmitPgrVgYqtf6q1rVsvkRdHjMKKSLkQTnn94NrGangMGiH94fXw",
  "key4": "4E65D1dn1YXdqQ8Tqog5LWYCmkdjybZHW7AXtFTFRkHgHYPJTwdVss8pTGVNa7ZBkRaSXptyv8qfCrxnfauDEVWn",
  "key5": "2KkKRJi39vbNDse3RLjZa3m5vMxKHk9UCvVipp6s89Rp6kuSfoe5UtGySwW4RtRzQ9KgaRbhvz28UQtrYenM4DEN",
  "key6": "2jjp6d5rXeWZwVpXfU3Esi8FbBNWtGAFpJbc85Exd3byrf5HrSwkHFF7KPws5BzbxibPgy2YiZKNLQ2iwyKCbocN",
  "key7": "3Lvx7wkpsr4Ngrosac2xonSD1YvcE8LujW8tEAxhiJrbskoPdg6p1moC5krgrYNEouQeYS4X1a34wAvtzuqif5GB",
  "key8": "5cPEUUrRUfP1cz9gDQvLqPwgQ6xTCe6QvRQrE5JitS7FLYddymjnFupFV8Hyed2RATHTgKVoWbTSkQ2yBTLFVDLx",
  "key9": "5h2qkms2ihoeQbM5Z5vmS9eqQodtSSrYKTb2RLQii8oXSnE976zDDYbmP5BDt26hSuaBkY2y4QnpLpFQjUrxGzQt",
  "key10": "2rE1HTbikXJwVMaz3GPHAbftwqmGzLGczHyM5wJbwfq23Uhtje9JNcXu5xAMX7bhmgWTCPUkqwCErwxg6kxR1JQB",
  "key11": "2CD9o2fThngA7Qou3drDst5Wf3fCcyRyiEJfuKZkZVBQDsrTaj2AyQdE65vgJiij6TubruFYxC5FgP92T4xHGxm3",
  "key12": "2r1ZNHDzabRyGwa7qgcvzd8j7K295pqptbcARjy8y9QANjrwLTjuLXGWd8spsmXichHNrWcLNDF2Rsa2ZkBdxnAS",
  "key13": "4EMPewUMz6zmqeWJLFYtcNQJUr1EgEMbww7H8MdWXXZekopwCmwXTGVm6j3mN3oWLVzWgRCqMeEwrtG3KNvW7WcQ",
  "key14": "5n8uhU6pG28EAMoncSMJLDsoefVQBX52vrYauECTKPvgo9S3xXJDkZH5oqEddFV9yZQMtWUn9MZNBRTNYJ6ZdV3N",
  "key15": "mth7zqYwR7symZggU72XGUMq8KukyrRoxBPiBGpnfV1pwYUaagEoGSV1Vj4VDsoMmyq29fa9Cu81zw6s1m4ztNE",
  "key16": "47XJzqbjdydUgQia4ADMUmG22ztJHBnDL8a3zhj1kDuqfWcjYytk5ZzS6rgaNAdpHzDTRPpZG3GUUemm1765B6Aq",
  "key17": "4jNfLcoMugV3GkUDh8RnWLz7a2uHCBRatrn6PKvWtLzRr17XsALdBoK9CMHm3unGq5jLN1HYPqW9aeMizyBRBXHq",
  "key18": "EJuAscQt5wCWa9ymj33tYgw6YYG3raBmJMqF5J6fbyFhHU58fbxccjmmPGmiQYMNnKPRWH1NUcwuyFmragW57Xh",
  "key19": "4XiN4mk3pWnez6xxJHMRZLHcX8a6F3agSYE4oo6DQ63hJKxao4BrATY54GfnUJ2mY7vkBwQ17GUfFqfYDNf5PaCC",
  "key20": "2UXCimVAF3gYnErT5WiX8rt7FDVrsZwc9YGCg9FAtEpT6fUFgiuFcYnKCBvnNgsaWv4L52aoU2YT9tMEHBs8syZ1",
  "key21": "4ohrzrch9YeZWASVBh69rCj4axwPVtDCcyzrPSUrta2fdHnu4qvwuLhwpXM1BVounLAjrF4SQJxSENVvUQjRhiX1",
  "key22": "3a3yr56bLRaZnDQoxcU2jos5gB65f1ebhFCpmCeNmiPgi6hdwyUWndDHMKZ7JgtZL2bftfDwRwEmUsnxkoRi9W5p",
  "key23": "3sScF8KeUKufR3H2bXx9BmbxjGc8VEs8KdBiju47bm6GTuUzV1AWm14MLwRwPY4MxD9b4ooV9FT7sBLXdRQrBdBY",
  "key24": "5vCPfQqNaQYK634V8b7yrdaK4oJVQvwokGwiQJWUfM8BwgmTpyPKrkpV9ADk1Qa5Q5kPRc4afXMmQYvwUpzj4R7Y",
  "key25": "3d7PEopwPHLLfGXPhA3JTSBsuRj5iBp3J9jbK7jeFU9uDDhSPRiCpvTuMw2pYPoN14L8sVbaopUs1ZZWHwn5afZX",
  "key26": "myA1td7PrbbvBiBESfvbBnGSYWhiEFqK2eekeLha26q4YFraXTr9rTMResb6Kwz1SmoeZGGDCwQNb1EgxXr1pQf",
  "key27": "2sCBb8PqTPCbFGH3yu6eoAd3xtXiU4Kij41EXWvuM5tK28MViZXpHB4adnP68g67uCZGktWx2xkPboZRTk4XiuC9",
  "key28": "sSFCqxkX2gBRgX2PuNDhKnsWFPnEHC9P4vbZRauLdFApWaqwPQB2CwCPW9nwMRhACyvM717RY5m1y5W8WriYznS"
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
