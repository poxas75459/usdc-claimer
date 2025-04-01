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
    "2vb6H81NWCgP3KQuYRWjXXmLXZcWKiGEiA5WM6ypYHeKeNKk2UsDJizdx4YCKJtiq48aSejQH6DJjw5Gbp4rcXBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHwM44Xn8h7tddUNBRdAxquxeRDRAHoZBiGZdY8gWWo23An6vJEkRgzXhkjYEhdnP16TCgi1jrza5HtavuHHWRi",
  "key1": "4GydRwJ713SmpoKe2yfBGhHtnLhXAQBdUtLg7Dbd3ULaoh43foM5ixi9spNMNufzRY2iWkRP3BFMMsvWEUBAoo6g",
  "key2": "4yJJNuc72DbdBKv4LNDFYwd4614rbrEU3TWpSVeNpyi1SFuX6L6hueePHPFbcP9v83VTHrZTZTJuyWG3FXVXmQ4B",
  "key3": "5UnX84KbXGVmoPhmpyPY1opjw5DmLrZmwmiZduumw5QRriS35cUMw7D5afK5NRXfzv3bbQ1r1pXmA6iQN3HgdsbM",
  "key4": "4bRQw81TxKVh4d9rMyjmWU74wbvZTgjFf7CawBDK4B8mKANqhQMgYikF8P3QHXiFsXT5Cdy8yB1UrWi6FKqTPY5t",
  "key5": "4S9wd2s8qyZQbTa16ZNdKH1agPpZGLgwBWAopweg8kMN9A3egNX7c4hoPMAcNKcjhb53RfpCYWNMqmHMLY6YpB5U",
  "key6": "3XCZ2WDyfr5TFdzFLLMNtve3smG7W9TfVyDpb9z7eehboQxAA7iNAMG655E4peGeJpa3vxpkvBVfcGEi4W1Tongh",
  "key7": "66dGSzyzGH6RZnecoDMkBnt3oU417VSPg1oVQFz3bNhEkuZsixtzepcBEyG353fRverVGiP1fX2owsuc75hZtzGR",
  "key8": "53JBqs6xvKapL9AkWxZ1HoXsxUyeqJUdH1pfYbD2KxMRW9sTpmV4vnqm9hugy5VADxGyg9YV6VDw8bxwv1zrrbm5",
  "key9": "2Q83LPHtyjuvTbEeMwYxdVr7aZ62rrDJTtp3VwaqP5A4UfmcSUamMpk51r5STdSqR9meYefLzkbYmKmhFQpjUT9M",
  "key10": "58rhL9nfa4CQgWbRJVsTnD1faKvjSkxnQvDBHF637nW5JfdoB9TPRsytDdZHESMPNxVCbdLTPGHhiRLHdkFEM89r",
  "key11": "4GSofTyvRp8iWfcduCScMQAACBdAAXvaFbkYGDywVxmnyUotGjM1Ehwda73PzNnXFXhMC9Rzzr7G2P1YL5rHkHxC",
  "key12": "ah8ntcn61e9RxNMTQyqQ6L7uo9DwYHCpNSgfwX1EZspCXuV16yC4DH8pWidhzWio87Ajjmqty6GMQXmM6kjiE7P",
  "key13": "23RGwD5YewviLPvWgTYtKHZuqfDWcqffd9tQaU5oqCxZpicPyrvtqb5syMqNZGHq7yH6oAydsgy2k7DCygVoaeeF",
  "key14": "jowoaqTjJwsp1oaRVAU43ZNH83Lj2CxaLyA16SmdcqbgkkZYPKpbSiXPxpXNPLhKz5WU924Cjp4DuBhZjS5Uv3o",
  "key15": "2TB1X6bxyESG1mjtZ2oCtaVoi1678s2A3chr4wg9niu1TnajzwkePQSM6pet14NNgrgBoqfKdaWndgZWmU5gy4uH",
  "key16": "3ieX66Qu9ow3tBptGHj8tyqHAAnNLcRmkAxHJihk1XL9AHmWpaketxnTQCo8zQvayFKw24hShQmixJ1Abu23Wzhf",
  "key17": "nRmwxCFfUMFdTWtwx9kd2hrFAnv3MEFQyrsarZm6g9KAquQMLXs4tFs1nEunR3LzRSPArS3gC43FkNCGDyxHbBG",
  "key18": "pJGw66FApvBYVNwL6Q8xMYySNFkPoS2SwcGEicD1WvNGK8z7LQ4psmL2RWh9ZH6kW9X95BRtuz62LCbtcV2EE5P",
  "key19": "4J98cTPbrY6HNiXLakzpMXtazqqYfqZm9G2LW76G6pkYbTcV1wzE1aiN7nm2uBiQ3mfuTt2j9QZ2Qxms7rkYmRHq",
  "key20": "5x63wX5xYyZMDdaCpsztvX33zjaX4AamaJkRF5DPUMKGytZ4vsB68vyUuNoxVShYQXQJkt3wYf6P4kVt2ejctGc1",
  "key21": "3DHj6p3QujwH3aKsx2FKoSuivLChuPc6n1BfgLhT5LbxH8Sv1sCGRbxiByg2xECz7oTeHzjkQS2YQ4v2V3C4XwiA",
  "key22": "4anL5EH9596384zZ5huQK3r467yMNiodQ4YRSUWByeuhRGFBybHrmMZMqNAxNvtgFQ7aq8AieUmdB4VEw5VPYPR4",
  "key23": "243ohNHH5tWFwV2Q7YCLPTeVT255KEJqUjcWjeoEKHqZh8kvHb1dhP8tjULpdd8dAt5usHVvRFJ5einTDcSqdQQ8",
  "key24": "3EiushpTxYzp2EXyUDVC1RSrNh4Qn1dPmzcvrcE3aTNrDaeW9ZdMQsMcBHBzt4Ha45UPadeZB7CaFvr6SJT2rFtb",
  "key25": "2pTnCq51QEFRfRHNtQvAg1QBjFdyuNQgdUCPdYWsBA3b3EzjpCwpsnMyR2KdzfAaMQPnhvEJFSFskztUn6GfzMsi",
  "key26": "5xVXM5s5XL3AhXRVHgnfd9LpM8fJppoEX8HoeN4DMDgWcbfv4Wv9Ja1QtNXQ7FbDguPB9XgdY6UMDb1kHSUg59gf",
  "key27": "mC786bQgiFbaWBsioB9kGaZEhZ15MydiWB9kRbBsUs2JTRRczoBk4Gb3seTvh5QUZpDxNeRpJgxFs7vKzjPnpqg",
  "key28": "VJwiWsh2BhWeLKUR72aixWyrxEmCzP1Q4sahaoR9wTa36rnkDBMYHCe2WJjevaKGgkgXnsmzRU1bfzKS9tUVUXo",
  "key29": "5CHgipXhiTwtUoLNdVaQpPsepj2VEneSQNtRseLkemjLXm1tRoCN8qtJxYLiuJTQTuJ8S24wX43LNz1FCSotohv",
  "key30": "Dp7kRP5ynYALo29rwMXPSNzkGCovdd6cBmiXTAxq3yjCSVehGssUjz6HNrzzermLJ3f9wSmrXBe3D6wgMCx2tzs",
  "key31": "4jwZFFmqwt2miJuhPRTEWdrNFEpsNsqKX2p1PDhbAWm4mvEtEKnBFUks3wcGRwcGXjSk2DJe6BPGeqz8WfpS8HSi",
  "key32": "4eh7w3WMPWbu6SBpRDBoiSZt67PXSEGLoH6LHwN9DmXe4udCUdBB5fdngBt7YD1Tyr5cxgWgscMcqXfJ6cxBn5Nd",
  "key33": "626of3rJm2ekcpbk7etdAcdCEoXA4StmeHsnRjhF2RrLAujgeeC6GXDQA5yBioFrYjoXNLpoPTkjej8o67PoUd6k",
  "key34": "BTEf3X6JVy6CszNSMUz9xNu15aNVKdcUsBj3BfQoqozf1EAx7nKN9k3H4CGeFC3hukgU5zmsNWYLiQS2FBARgUn",
  "key35": "gxzLYGteYPc1Ay9TpvmSQzh6UH7cLw1YQJuHzfF9EQhJKvYFNTrncnMdBKmFouwWmo1wQzfGx1nma8XQ6DZyQwT",
  "key36": "2j2XfgbhNvwN7mvz8dzgNWJDUWGSCkAUcApH6Rbjk7C2Grg8yGDSW3deyf8J7A8sr2mP7t5sQZxjpDpquzPbqQS9",
  "key37": "5bSS4WTukMMBQhmDSge7GYfu2kSJ6zGR4dYnHxmsaFGgtqncXxk47j9vcxfXrkLWYhAmq6diq7ajV2q7MYZNpXgm",
  "key38": "VeHhQP3LU6WcCdiwKSRLeRKTuxU9NcpCLCKbNRt9tCpPt6f8zeG1Pb5aibsfMfMMs45Bve24Y3MqcgtsbqB1ovY",
  "key39": "4qFifzAFXf3KGyQ5pRa1GDB3BumvwRgz25mUrTAvGYSENTZCmfyyz1jgRjvpEwtCtDMtRwrPsPwfZNqbrRsVZrpD",
  "key40": "2pfY8qtMnMSu3yXGKXEYnCqDbd7gnmiFYwsiC3wXHum3QaRRADzxmG847Br2d6QijuRzqjPL78w5XLGJ9729SBNE",
  "key41": "4Jh62RQgrMw1mc8cmBc1KZKSXat525LXeZ2Y7oT3hFMuXqeAwEgNFthM23dX7gCNgAHCXhcM3XRsnxbNRQdCAdSx"
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
