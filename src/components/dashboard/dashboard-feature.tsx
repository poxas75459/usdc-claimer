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
    "5QQ5RGe9qdE9AxLPnXupjtBThbPvkeZK1SQ16771La8rahNpCqHDwmtKUhAqDoacuJjE5B4ZDQn9hc8RJNVCXpoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wff86BbJiVJWve5qQwEEVw1XYaRUEDvLokrcP2gVVUjatfsHtPkdQV7iYHhmLjRn7gyf3bGwNBN2JrBgN7uFYYB",
  "key1": "5icQnNK4qMCGsJkkbbu2Hb4RMgm5jEkM27dDm5bDesPkuRQhZfDYpJeSMR67gpfwjRxmLTGGK9fqBdECEHX8DSC8",
  "key2": "37eaExxYH28sGCopBcGa6jUvbPmaUPcGobuKjykwMwFw67NUkxizcd9Atcn8CHu7TcdjboxPzBJRosjShFNdo8qB",
  "key3": "39TJDRjaByeaLbpHN3eSEcxB7zk6sFL3i7WGZ67tt9ohjYDhspVyk2sru78T843tTBfHBR9j6SgkBwi7o8HkZDRB",
  "key4": "M7PpJ29iCedL39Fm5rXXFmVcE4DcfNhsrMR9KNyL1c3P1fwzwcTCjh6rqLH7WRhxWaoFWg9gUYL3PsaGL93xaLU",
  "key5": "FnSQxrNdmgiHXSe6xN3qNN9PWksC2iNM1VZLVDEbnTnoNEqo7yRQg5BsgVzonmsybd3an4no8o23jWz79BAEmfJ",
  "key6": "SXqV3Cw3jLJeXtQpctd9Zcma37v2gssZbfmHzBejq89tv3JuMhFV4ahvJvkMSxhpycaXbNNX4JdjNoXewDdSMzt",
  "key7": "26Hb1oErxSQzGUGdgZBZYsu2P68eqVo3BBQHDBv68ECf9m8STXKjeF2CFW4CDQzvwBaZsMv54Rms8K9QGkGbWm9j",
  "key8": "5rPwbU94RVy5HDjYF32EhnJHdgq9n7PRbLDZEe2njzcPpCUWRgkAHtW44e9WAsjNQRF3Lbb5BAH184PysUcyX3FM",
  "key9": "RsA9xgoRzWCNBbk9zH6cMDSkgVCRUwY6xiLMz7Mt2JvDFVXqaXWaq9bwBBdq8gNDnwb5u4HJNJmwyGgTHhMiLPz",
  "key10": "5nqaVrvUWoHEBiS7592SVyS39SBY94x7R5dQU2SQQZFt4W85orpjPCyMGNuAScGhM6CsGGQprsQaGTuy9zSKKXYJ",
  "key11": "497zBmw52q8ZRRioQ2ysDP7QVnGMMQRWkL3y18NtoGNgxZdv8FoGDc2ajD5Z53DP4ofQhfyAYzQrz1Seebtbyp36",
  "key12": "57G4Q8KysCX1afTsXkdnFziWtJRMSJXrWfR99kmBt9RUn6qyWVRCt2rawUrkxoGKDJ6NzQtoAhdJXnSDZbjk14aG",
  "key13": "3oW9yGotcvpBiT4Wp2WcqJ1bK3HEcNzvoJ6SPkTveyGh9Kwu9JUUxepn5EtVRTqLjD1ToxrkgF1hDvJ5u1uJykHn",
  "key14": "596YVhXWFGbtkea7sHKz2XTBH4nADn7M2N2hivBZZ9BaoAnVB8QcN4rcKCkLSSDVYCmzzNZpGc49m91EiuKtfhbJ",
  "key15": "4MAeR2xRSgKphE428XSbLTUDfeaokPQarteLKEdPMgEmSgChehbDbD464UwFWo7CQVufkyMPJJXB2pXrabFPWSAn",
  "key16": "2YfBAmXnc3i67xyuMLM8XVwUpdaL95mETtMQ8CBDgbWvSKYxEr33GjURcuPQaXjvUKW5iRTKmmSUQ1mUbCz1oWXH",
  "key17": "2cQHqY9r4gzEYkju22ZHLDSdS8S5waWUsDcJCxoTqWcV6586GSS3BDhvKZE5PBvd76kkWoKDnvn1vmT1Ts3SDsfm",
  "key18": "YV2sei9bvTso41EyZ7LKfVuuZ8XrUHDXn1uRyKMizwii6PhXZe5e4u7pEtkYHgH4SQwS6KsHJcqWYf9nMvcFfNM",
  "key19": "PGGSKdaAaFBRSmfwS4PqwgdQ3uLwt3q14fGmcTN5uPnSo8MFQSFC3Md7tYZkLNiXSduRmTS5K68e8sbDjXG8hph",
  "key20": "4PnnQsAAu6wy6Y8RHZC3cj9YxdcRGtsXbBoxZPGoHjmo5tFRbpUnngicpcCL4y4PobMbaPfMA6D21jRGWy7UTfja",
  "key21": "4VnNbYiDkwjvVuQES6NwhGr4KpFLPDqc5uc97XSX9q2zcpPKMWTUpaQ8mWvPi9zi7ff33K8L27cyZBQkL7hYGNi",
  "key22": "25Rwkr7RueZQpSd6FeAdV4MchwpxGK6zyBynrLaDKQs9dpZuE2ybdvsZDJcNetpr6Kqa4tWxPsARicxqVynQhu6j",
  "key23": "3vbSjvJb4XyVKxq7EAWNuM5QiCrMjSkZunnx3nskNThJE6syRK6VfEY2HzFCoeZQmR2wwFJgjsiHghXaE5nD8qTS",
  "key24": "4NMgQyJd9aPDteB3XmKGfkdVQ8BHnyXnoMBqgrTB2EChcsScYxiXieqkiRG2HtyS7KYooEYdMUbp1ZVxDFSnoNPm",
  "key25": "3yodYFGv1ogmkRFnehah22GHCqAh95BbMeEZHJwVd7MRvdtoJEfW3dNxVRfkUTAPgwnuRDJuwEPYV7WzneJoK4rB",
  "key26": "5JGa2Rs4emLEFEL1faLESsy2V6F3FBid1mFfdkzb3Wxo4gk9NY8dPbbQVdkcke8zohd95CCBCfBWde9i4FnWt8Ak",
  "key27": "fjYwzBc2uv8QPSXumLdjGBrhUVk1wYmy6wQJX5ACQs3BrimfneQkF1ytVk8vBZpnM7FFjgYCiTWnAES7YVAaBpJ"
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
