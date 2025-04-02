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
    "4dkLh1xjgYftNeRhpuznRgMjjnbW9AS6yWy8Nkk2iAd93xA2oMSnKFxpgb6aph86TqATfMWisWcns8w7Ej1cmR7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zikSmdyY4mbjb1pwHq9rZxhr6gRf58Bu87VHAeTwSbt6zVGMk2zCV6skS7YGmQS6fcx8w6eSEzoY4yTMRMvxNGZ",
  "key1": "53bsA36mm8WBRaMzxm9N1pho8Xmc9GP8pWyTDaDpHBVQXqFS2PxxVhUfNvVmkasUMFaLJbn9GZUFRNMfuH5QkFbu",
  "key2": "3gHhXF2eJnc28RfowzMKR3rRfywnRTHbdjBfc3nhCFoLgDoCpDFxZ7ixgmzEDL9Am3rzR9AQ2LA24kxEHVk9irNm",
  "key3": "43cAh7rztt7Cd4eTP7hwiY2GVvh3fy1eQAJ3BZ5uA5NFSusj7uu47rbrNW4EZ25rdoHgKrGSE8yn4pNbQqQeR6b1",
  "key4": "3kBJ1LGQKScwyQUD5uFSKGBrj23naZZErvscajf5i4rPVcyqepLvusCXjrzZwnivaVwd23cB6P8wBviL5EhjEQaH",
  "key5": "5QqrLU3dsUx5sxA3ZLLt7DQHXpgGimTPVUq4c9e2r5UXVDzWYDjRQ1zXvGbEnQqLNP8EP2yXw89rHz5Mft1diFAv",
  "key6": "2Ukv5CxfduoiFHdpW8KrgoVg5rw9WeCAq8GgsyGq9GEWLfGpqegNwzpvqjaWMPfRxoDZh6PcpiyJ1jPWhEQwXeNG",
  "key7": "2kUteGh6WJKkBfrYWS7AXAQZLqJpctyYnYa1hvjq1dzY5ta2TTf3Z7xfgH5AE4aY4zCvhX34QLGvoQ778c3zNNwk",
  "key8": "5gXVh6xqBuuCU8y1itCECaBZWuJDzk1WwjQQrkf6vWCYxhuosEkkm7eJKHu94qjELPrTwguBjVYD2RqaF36Yk8e3",
  "key9": "2oj5oZn4Ax5LtBTQVqm9tVUL5TtGf5Ev38G9FAcpA9BReFV1BDT8W3mp8ogUhQk5Q6y2KyRJj1qUaUypiGL2hFiS",
  "key10": "3mcD4zLdRocF5uypdi1aCyWebrffm2yvMqephktgwjABfiFUgFuNCDs8CKrMaVDzLM1kDyQNmph3DGmcgNADhy1x",
  "key11": "3kKKioHrdYogUHhT5u1CNHMXJpMoXJyDfkJe2yyCVbFAFDeb1z8WSts48xhSuuGG1XgJXWJsNGxsLzJKGiwUdsvq",
  "key12": "stj9xxMHs71ApN2x1yLn1jThs9sPsW3YiX7KgiPGpCEvwF1PF8uKfStd7P9s1hFijdawJGynXRK2D8CtUX4EQWD",
  "key13": "5jDW3PSpTRTUB652s4mnHCYfvG7MjVPkF6xAqv6xSdCeygxcVe9AkTgubaKBrse4UXQdNvsaA7QAYgkUc3Wzypc1",
  "key14": "5qTkRHkT1NWiEYU1uiX4jety9nrF5GRFGHJTARrKsWgeFjqYW9bGfscJHKw7fBj3mt9Q4Sx63QDnixXAbATBqB7x",
  "key15": "2Su9GUkhbhLjt4QRhHe4Py1c1caun4PRZX5TDboUpCNRUGDNg7Z38aSqoJR6ySafWkSn1DEVRtbhk1BnS3EN3n6s",
  "key16": "3UgDwS8TkpUStV1fWQXzQzbcgMUergGv2VXcFUvvEMxsfGDu1duo1cAFoCPYvQweBdp6uA1YkFPkigE4nQVnAtJg",
  "key17": "4sWZK4NQVKQikFKREwQQgYbw5krDEWEXvzE9H1ZtagKqHus3tyJYdiY94SdKHNMWpBD4v1P8Mah9eSLBxA1vAybj",
  "key18": "3tFj9j5tdUrHFEq2uqS8PEHXiGNMJkd7LtB5Vh1CEjngE3cjo4b2U7ZrqMVP8g9dYtwPdNbPANiuCCKrXjJfRFst",
  "key19": "56X9GqGawpQQndXVzpLxWhps9gNP4nxLgFCLdGb8d8d4T9Q3dUAM4NcfoNgVPC4f3Uu2Ey4kYJzECvpzxUE1X1S4",
  "key20": "62T76eA2ofBFwsMLK5LEoyK7byQtPPV4AJJBLLj8HahP7WMecg1Rp2mWPw1VuqB3SKkqWUNkiA8qMoZMfLahDEmW",
  "key21": "2xbkkCz8jJaVWLG9GWvuyMiT6TQnWfaQfCLHZHyQyuPJ28SVRke2KFTvE3afiSoZfzUEGYFhtkQYDKSRoE1xbe3C",
  "key22": "3c6EBDAyPssn8fxQ75u3xRPvkcAMVvhAwVEG7UjVARTRg3ZbzmDLjxvknwUN9a9wu9TPkxpyYcuDZ8cFEe7C2hgQ",
  "key23": "2ARsfzoHTUMUEMPVgRXXp67zVg9TERMj4WrGsUKBgKo5SazLhWDSfhS7Vd5Y4rTkQpNAYE7rVJsbFi8QdwCTaUZ6",
  "key24": "5WyvxhKbFsBoU8MqRx5b3KjMpYixEfEuiLv6pCZip9UWrPQcYhzxoYBYMdTcz3Jr6k8xnMgCDD4239EXr4XRZ9oa",
  "key25": "2636Df2tXYAofEUm99WoungAQfhvX2ohiMnNtRgM56YHjUsMPej1jgLWiY27hEA5XVRFvctB5t833gPXdP8486M7",
  "key26": "4zXKNkymT3LfHYEtDQxaEpgH74Wa5KsouVQ519UNVjRA3RGR84Wb3eCVhHiSdauiEYHgM1Zk4jY2jsykS66bwhbp",
  "key27": "5vLju9Cb2WuRnQ7VzfK2RGzVxcosgTjhvov1ovYs9i52Rdjfe1Zdf75jWbAQq8WwwcP3TnfDvWAiLBcUiFqXGwC1",
  "key28": "4YyJ29iXyTUWuSdguHqUcuhM5LTGUd64jZbsXpN5c49ZhB6PH5JBzoZ5vhDBY7YiXKkjpKryCkpUdFU7wwW6pYtj",
  "key29": "3JNc1gVH6GWs6KwGdXE5GfEV2mJ3QJDF6b6c925bFy2jd2nbMEaMTMg9XpGfGbVe7TY3cLXcpZcZBQ3P9E8wvf2M",
  "key30": "3a39UAwfH3RSzE84HYYGoRSWrqGB5N5Lqbp4SM2PkKf9yCNKGfQMBuJN3iRLZiG1y21mSDVrnKvoeGQSCCqnRvU2",
  "key31": "3HJTBCSuJzkYY9gx6XyfhtA7Az2C4GLH42YF7A5RVGp5in6KRvc13oXt1RVgUjaXKuKV3AjXaY8TwGC4YcncZT98",
  "key32": "4asgdPNdJPtMAwoYtvomGTxU6MqGDatvPfu5dvnBbS6gsbwVsYu7xki6UDpiXCXMtzGt7VNgykrM6j8uZxGyvXBL",
  "key33": "61mSAp2cRan7D2FQHr8x3iuPBmjXirzbfvCRL2eAVvXT7jC6NwHT7cQbtvQjKhXCvZDjLt8ircGdyhf1sQLFKJcS",
  "key34": "Dvovozo1b4TngbaZJdwunBG8quMfVm2EdHePtvXnYXbtjjRwVaW6XPJCgtC165qeyij5xDkdeF81ACrZss5D74Y",
  "key35": "2G42GGZ77wBMNsZNK5d5UxaJwu1aCREZf1JkBfdyvhxsA9x8Jna39ugT8Me8i841Nh25KV3uVakxesEtHFhgBLb",
  "key36": "4dBKMtrmLBxKEFw5FTkaKiHMzgwuMUs95SKSeX4KncANgqQDb3E3khLHN7e9nCGBA1poY4LJ3ZDJLr42Avh8McSe",
  "key37": "4cDfApWGgMtUDDZ8y6ncZUdXrtYvbQkUjjAmzGkMYNM4an8MfMmTFs6GxCKneZZZwjf4m1foCa4pwREcVvAeQs9u",
  "key38": "34Mieq9hr34kcFTQ4zuSGcPiJgjWyT3FhiWDTxSxWxtWrADF2YDJJgCmjhUX9E7re1u64Stxskv1cRUhuPKZKsX",
  "key39": "2wX8qczT1qBm91ukkPE5QtcL4v23DGGp7bJtRkQku5FrjxS3BXBATLoBmUGPSuqXqpVncXLgZVLt3S1RPm7gtBUx"
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
