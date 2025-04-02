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
    "5s7E3MpLqnmG4K6LBnz8CHKce6oXj8QLHpwmvkCUkJoMw1TUMEuUFBSKVYg1xyx1D2dLi5tTtcJqRbWoeQux8Gn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afgtTWuk7PWCf1ZJaJuqgJsNWyP69vkEypqWdD3E5Yrc7kRz8ft6gFuTy3opSytPwEiQ61eZCrFk1SR7goZBsQx",
  "key1": "4hBKbhgnLFkCgnrPKmVnA6Jj8zdKweJMypM46BfLmHheAtZXQDDYAPcAji8RCD3cGWBZvXdsWQSVXzRps7kV4ps4",
  "key2": "5YLNQNovj1nLZ8dD7gVH4RuJ9pSrqGb5oiE4TiXcgXCFzhQjtsKtX5NQ9of6v5jNYjCMX87fyZfwjHwtnupR2Qoo",
  "key3": "BR8DUh4wfCfZcHs4hMBmp81LsHHXginbAgawanufZgXoGAPZQpg2imvJ2cWjajnAFoN3daKH2HHXEmSomNBa31S",
  "key4": "3QkLmpDPJEHsnB6YcgeT3KxZc5bZFkTbL3k3Sapi5Dr2eWbJAYGGnA37WqG37RWuxAAW2T1sQTFib8vR78d4Hcbg",
  "key5": "3HLrAmsboemLDr86kA3eCZBe484YguP7QpL3ke3uMon3q75kzwRXBKiywMxVDftWKwM4sjA1HSNdKUgTup5GttsA",
  "key6": "S9NHgoBXvJ5UbhkHEgdPYSprebnLf5ut1kDVh9Q9aD5ajXmkqFh4Njdqm6Cu7nUZdPmukeNWpX6fbMEby5LtP6X",
  "key7": "5hp2jDJd6ptFuTLCHxKwqyx6DHHq8xZ3VmfqG5nTwxcww2x4SczPd5Wj1j2tSMout3wHgJUcoAhQF9EiqLSKMQyb",
  "key8": "3VqTm8hceoT5132qCpYCcmRKNHvtDDKM5hJFqtKnMshzCtGD2BpHakeNXef1i3ZvsBUJSnrVWNpt6KTT36vx3BsQ",
  "key9": "5R1PezPgTGUvnwt9BsTzpcfXjeb1fXWKuafNMcgkrwv3eZSRftzieqZD4cJT8ucCeizASTeD6vZbkJtz2YLb2Pj2",
  "key10": "4BWw8Qn7nLnKREv4qASTU1vDdgy531kLPLMATjxnnV5aXGT8eVdHhamWMQFj4jLSHZpbc9vFhRk9iUc4ATSLmMqC",
  "key11": "55NJJtGKtxCStvoWJY29FPxU7A1ToudLkvcKMo7gViVxRDef75iwnZxnpHAHk2qBMsCLLFpWBS8fkJ2axwTGLBKH",
  "key12": "2u6wk3EWYx7i5m2GNfFTJSwRjoZ6aM4u2Cp7vo9oThbbGkUzodHKW6iSHYoZg6W7khVzFzQGB5PvnhULKHMTAM1o",
  "key13": "3EHYey7jD28XMStcqS4N64jfGD6vbHUG8JVkymCCMmMuzp7FF4i3JR3vDmbKb4iGyDTwceo43kzcBPxuDtnf9si2",
  "key14": "7ZvJyvsgUNqGWDzewpHEB4NuESk7U3S2dXVUzLCuK2aDoG5jaXiM2dqYvoAb79YWktyUTT5n4KpSicWeebfdF97",
  "key15": "jfur4iLPyE8SoTqHoDRmM3YfkA4oLAmLpnQjhrJGGCFgW7Z2oFAkYMHurd63EtiQaPjPTEWGvEBniVHXaX1B7uk",
  "key16": "5rwu8aRSfeXuUjYzffnZRGKfnWM62ih2SAMAMexBJMG4CNhWyo9dqz3bXJu2C31Q5RwQrVRgfDcjvBuQRjntrmCe",
  "key17": "5SY1Ubve5Y8Txi36Pr8yamTyeMxGxeQy3USM4utkqwH9YUCfdsaNqddNQuD3vV9mwtZmQx1aQy8RXMbKUjaVkfk2",
  "key18": "KWUkXkH4AjvKyafgK2nDfDQCZ7bmVR5VTx5kQTBzMBdn4RjKixGXUzkUyjyzyYqf4m1ihCnehMGYzu18iiLxknm",
  "key19": "3yD18jtvsqq55HfQxWkFdecxiH7iGSxBoyf2rw5Dnbhrt2ysWVYPAW3k4KFyhMWA3Ah3DX4DPpDT5WwKeSB1xmGk",
  "key20": "e51dNGztEYVzjhs6TjTVc2i8u68EnLHQ9ZhVsR29pVM8RDrPEDqAsmgYNRTb7SDxdD1FN5kWwf5w5ygevqyKFCg",
  "key21": "44q72gxA3A4SZvZwDdAUAnqzzkwpPSCLo5eEsEjzdUHZYge7XYPadoNRCuugyCQJdZePrTSsh6VpHDM4sBAn14Ae",
  "key22": "2SDb5Am7MwFuEB1tZdBFL7K5R7EPFbdnnNJ1YdbbtCmneSufgp2UWvouMWzXiQZefPDkX3NUVJBJzPQf3aD2Bz3r",
  "key23": "3QrtDD3Knhpp9YWbAyN4Yf1Jjh8kzKnFenjRfr6xHU9FcpxZoRheiLN3GEVm6gzBR9SctYd8h4WByjBQN1PqaG8k",
  "key24": "4zTaMHpdoybDsaSecdPqr3dWW8Bqzwyb28Dy428JigzFGbSZ285rc5wujQn4FrdUUZmziXyF8wqT2XhzLctJMSEP",
  "key25": "5nyV1tNtsnC8UpTPFZocoQCUCSTAoXQAbxTUTF8Ymmf7GF774DdFKCb8SiZW2Ya4ZbyumYjBQ6ifXXPvghc72sXi",
  "key26": "5i6BkdX37Ueuz16a9Dxvn9EZmFepgFLJPWsFDZGBJeXYcQUNWaimSZus9ApBVxKwHSxHEyNHKiPy997tYXaGFEQ1",
  "key27": "J5Paz3wBn3Az39m29Z8SVvLnapnNwesVnhXREH1EkKcKSUHxhPu3ps1Q8UfDgo1fPpxisnJor7xmBRZ9Ne6bk1G",
  "key28": "3bzYCoDJRk5ycuY5M8XecgUYEZfBQ5w6ePZqg2vMi862L2qxzyNHTtVre5ioQcGwy5FPcBbSRD76iM9sNzDvQFv",
  "key29": "5nSMs6dSqAj6etrFoTD98i1kMwJi42TQAjJHShb5Bs66BuNM8a86TR6SLVk3hFZMLoNrZvey8zdgcXNjMN9Q4ifE",
  "key30": "5uehFJTihsZfcmYWWEBUyozVwksKYBgKMyaUaj1RgoYGTRWDDZR9g4xu6dUFG71mKaLQGPpejFHMHmBa3WCBbaKd",
  "key31": "a39n498hJVKKRxqcMTVvJtvZdWhYz8pqwVNEn1rvJ6VGphLjyL3s6c2KwhDcYT6E7xFwamAj9euVmSJ4tqKkHcY",
  "key32": "3RupE2JcN8VThLHayy9Yf9udw9Gum4qz1aQyhjVSPM8jPfZMkFPE5JcfykcrzTz2tbcE3axbjgWG6Yrs5bTQXdXf",
  "key33": "3vGn7ihm8ejbdJdfDTETm98ctTBRqW8GYXGwdfhKrA4r1GJ6RKZRqrgVXBBYBKFLZQAJDsX843JJP9MqywXcooGm",
  "key34": "5rexf5neMpDNMeigYN7Q6jqyoAn9zLH22QEryjG9SkQjEAe62zyVkB6CNvm56qgVWZyioK6Qi1pDGcFsY5cmUshV",
  "key35": "ATHdmpX5XfWF65nYDL2nJGCrEgNHmVnfiPNrbVb5jy3MDCoZaGRB2JVhmXFdUYaHVKBXYtHnJCLtkEcDxrPWqwM",
  "key36": "5GNzzPcjTqkLycTZBAxrtouxKFuPPrU6CCYhaG9LjfA6FTdkoGoWEKgbjxstwCJGhkK1GuiR3yYhn11uGADJwdP4",
  "key37": "5SdYVv7vkakNa5v2UwAcs9vNridxxdZsyRuPQHVsMadyrvj5zu2pxyHUcYPk8NCvNHjbiZAjKti9YLUKKTZJShnE",
  "key38": "4WGcbXns1sifZiEuEueoLHWqarDQaoJ4ombgdKJCVwx7pgF8QXzokEU3d74EjXnBF7wPJcBp2rjwb6G2e4TEKkAH",
  "key39": "X7WWTnGRrV6RaBimzRxpxaTg5woZyi3Vs1cYaXCjzP6ZKyKjSKrLQ2atgQ7nfTiik4j3cptjpyayBegtYorTZ46"
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
