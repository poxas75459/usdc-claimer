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
    "21f2pYQ2xwyf2XxMdeKUdaY1Ukm9rH5FVgMYWp9U6hZwPhFNLn959wpjuA8DR2NUaX5CFRnU82SDLw1ThoqP2dUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDV37HUKptfZ6TTUJqe6RBgYxeuyXhNyxfeykHQJFNa6ZqVgj1mmWncL9KjnAa3sY6nJusAg4HqUqxQnU2UYzKf",
  "key1": "2ZJ3pv6JpiXYkjZv9ZF7bfwSVWPDrbizQB3YrSmmHKp2KxKtEDY1hkfoEqxfWmU84egEuTwxhNtYYSGiiL8rDTAq",
  "key2": "3cutQg8hYA7PJimRDXYf5AN2EERkc1JzLyaMyuMR88ATSiH3ieZNTk7VyyuNtTSm5pw1qXvSeiMzspRWuit7b1xW",
  "key3": "5XYVV6hKHsk5drC6HkC72nmQZTs8WArEefNhbAiwEotueZGWLQkKuYCtiFtPWXmYL5aNajuwc2xUzXhw21KwwuDQ",
  "key4": "5JFeuJ4y3Mn8LFUfhacD6CLYBcTvZAk3VAYp17n1JoYJASo9EVN9eDYh9swGP3FrG65ZvCDNfPqTE1XxjCRhqKhu",
  "key5": "54PxGTv1Y6ZkxpDVMNtppHS5iQJSwsBSrmwY2zQSr78Gmc2dWvXZSAS8HX7saMccP5JXWFYLrDNBNDuknWF8Mryn",
  "key6": "48itdyN1w4q82kQXkTNfDHhrYhu5gkWctva5w9bGizEjjBMpMbg5NHGodjRC6ukN1JdLGp6615miXHxfCvkQMeAF",
  "key7": "rwZre2r8T5Wysy8DAEaWRcNVRLHQt9xDgpkYF9VDAo6MFbTMvjMkKh8R3YqrmMftwvWiZAsCGLFx8HdTDLUL1sd",
  "key8": "291xMTfrFoX4mHQrwy1EP9N6a7sadRhF511rTfgWHzQrwsPkQ23MmAohmRVS2w95NdunFJCftituXNvL5WiS8E8R",
  "key9": "5fBJYfkKcoqCGDaB3fQq6WZzvJcNHiNbNC7r9DLAoT9tLraimHHaXKAKaqQUgfCSpQ2YARLm8sMErMwpn3kvjn7o",
  "key10": "5sqXuET1Q8U4kFq8Lbgryf53wPKyYivkQuyxMiDAnYMiKDtPgG1VqD8qKmthFGWravvG5YoLffG7rqrLC45TCN55",
  "key11": "idfFSBomvAMQi4pk4WxAMYC7fPvNNKHvZ7AGTLv1tzLSU6Mtvf4pCi8621XRRahrbRgn5JcBZEPZZSjkEu5tCYi",
  "key12": "3wxp6tpR6SGmiFHYf2AEMQDkELARcw2fDNe5ukqj1mMgTjwHxCBrvcK3XRXJNvYFM7EjoYN813eoHCh64e9CsksJ",
  "key13": "4mdqC86fuSh8Nseb6sKSybiG99ezh5qC1tr2EyUBXTjQUnqZJdqM4WvKtARUwCFKxroWaR2BbrofQZqMB18EDGvM",
  "key14": "35Smrxy4tZAvC24mv7M1PyXEcGyPTxWNrniTiymgHHLQy2K8LFPSTQcvUTDkZBEahWEy11B2FtP9aYe8vmUS8BEF",
  "key15": "Y9eph2st1KnfFQRdrcizdvgdd9yvRsbx7Nt9wX2itFCxfxmuroBUk87o42KbAAYvjL2YoMx3Shad2xEzyQJCd7W",
  "key16": "5SLm5qTbLBWNmhsg8zQ7oYNNFngt6yKpedynXt4pUjZgkSr1oVLMhSkoULakxmxQ61o64CrddKa1KMZu7x8ktGSY",
  "key17": "4xWuPfNutvWdWeQqVP8ZY8evkgv2CfY7AxV9HY8F2xkKYu31mmkS2XsvagpF7y5rnxvD42PcsaT5Y68Kg1McQ2um",
  "key18": "57Vyvp9kCoRjMsxpmLrVpfpZi6qWi7VhkFfsepd8KdhVF6Fyu9313kJTxfydxAdK1R6fjwrxV22fcy5BccNusMit",
  "key19": "2mq48WqmPDqALSXZkREVxEeYP3n28GWWjjs1zshRg2iTWfQz3WJbNPGsL4q5ZcBkh71Vny3zcJEkdUi2EoTgYtWX",
  "key20": "3eQJkt3KF5B6HA8YEQUh5oYa8BUkQYcVRXzHKUVD15ch3Gyyv8qEED7HHVXgfW59Pw4tAQfh7G4mBiTiC2bZsJm3",
  "key21": "XFkv4DT1X6xWFSCuC1N6r9ssQbrrEKKUR9jizWDpBC6t8ezVf52k1yiGV5KfjsVy4CG2WTWouR9XQ8vvKz7JJwm",
  "key22": "V2vyzkBCErQKo4a2RoXFnC5xpv8Y3KYqQXujwCYvLUi1awDHjsF9XGQqhvXrdDtVrC765eUBAiK42B5JDbseTCF",
  "key23": "3uAqaNPw4sog7h1JCfwBsM4s3TQNcJSV7SQ6JGtvbBmLnzZWSkvkSiPt9Lnht5CfiqiCs2vQHmfrgsFhQttp3nQt",
  "key24": "5AhMHcqZ1LrSDSkuRQMrzMouGJUoFrmpAUBK9AXvFn71yeq5iAtCWr7TmKcu4BY3oMV2Pg7QYZ7qedExZtePNnqK",
  "key25": "43W5nv3Z5optDz7k2BH4v4YmvquaHvZqgJhkXDjB1RJdhxGyJL2RTuLtnu6EuNgYrogZadqfs38bzwvBJu1qMHCa",
  "key26": "4RX1MNujR2oqVY1BXunTk6aWaCunQyrRfNarkP9p8oZDLvn6TdPHwKApkUuGGSJu4WErJysvkkgQuFx3GnwXGPpk",
  "key27": "64EHF5VjR1EEgFyd4vAFDNN5CBt6Lumx9SKkvbHy3fBNWFkXreZPacQojukLP7o6gZ75hubs72QmWXrnJb9vy2np",
  "key28": "CL7g4mUsntTp8bTk9LtQjB8nUUpqd4fnJDCREKkWu3gobWPKjzsyCdmcxdNDLkNYEZnt4xZdRr3kWRYsSaDetw6",
  "key29": "2AE39fJoGaaj9L44YXofUNJeCqq1hzZ16PP14xZo7GRkaQ1Bh9siZQwtkhNyjozUPNmmNTi2vMvZMhxs5nY3GwKy",
  "key30": "5UZ9oEorFBo1DyiqKmL5Md4qHnD5okmzptqRXv3zuBV4tEPJeWwHCE7quCFf2uEvMQSaVQfLjAsUFUijqkVwQguL",
  "key31": "4m5fkVQar5YL7a8WSXdf2KmS2LyjHct3Xghdndi33E989KvG2JJjxTeN5qYc9miqcArfLtveSQEku6MkjXTpMV3Z",
  "key32": "NroBUhAMjjMZfP7BUZSk3srFYPP5XW2jT39QmBqVEMfxKoXgs1YBxCsRYa5JiJLVpzBWf6nRn9oYKt3fc3LDdXJ",
  "key33": "cp1BpCXvaVJjxYSNmQxpusVTrK9yx6RsVRuq2StBBAHAPo3v9PCekyPsCxgdt1YMy1x4rMwWvhYak7QX8nygvdv",
  "key34": "3shk84yNttWBHoU2qDpHoWrTNH7woCXPBSuFhsUcPt1NPJhbLWbKvFmqTA8FuFVNbf5dy6rcZyXqAYNy5AQZn5xD",
  "key35": "2zQPu6NZYFDcumX7dT7p74k85aS969ucjiUAbr3Y3mh4joV24vJMwQmbjbVivzR1U82trTUfU1bjLrg4WgcBz6hs"
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
