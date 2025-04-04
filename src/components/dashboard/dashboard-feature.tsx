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
    "2s3FEhnJ4Gt7v29Dg483iafuLzGoZwVMrw2Amc3fpEKAoqhcE1Qs2g4nDvWcTa5CxdGN5RBa2hDrQVU4iXyWFFgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfJjy9BndEEETcU1Bq7zNm1T8iXjffEsataa9zz2beoPQe8XMg9U2vBryjeD6eotCrs9rUguYsmjEybY5EbfAHT",
  "key1": "5eFbuHopRMRdeCWXQHi2mwQp43Jc74FJ16SPtVv6WJkH3fvzVUaxJoYFZG2CjZuMTMBx3rQpD1zz57VxPgta1rjp",
  "key2": "2mrUGnmfEPhb4Qxz2DdgZWQbHfCf3hnijKy9zteFKid4e1trGrsXJg3xbfrzfvGphLi8rV1Rvbk51S2sWjKRAQrY",
  "key3": "5h7aFNTXvAfcEtE8RzEssdhsUE7KKs8dVj9kt1PjMd5aUB7C5QonnhMprU1YyHzLLyGcqSnPWDeKTaQGXi56ypzU",
  "key4": "Jeww3vbZkXz49SW1JmYR1nM5P4Hi41nrn9sQUnCsgNW1oedhuD6tYKW9Bdi8ptJbi89vzBvy76VLDxenffsMVS4",
  "key5": "3kxxPEp49wVo8oT7WKyvjfd4zo9HRUm7xWk4f8mbGCvddWb7rFtrFqQyYzSgdQGPHW8gSA99RZouvgUU9btmAwyH",
  "key6": "62WdCPQBq9LkX6UuCEMpCrp4ihRu8eopeti83jF6h2P3Gc8qx7iySDiewkoK23F68NQyuyGZra8DPVv8NTeuWe4D",
  "key7": "255AHZfyZjG7BR7gdrZupFTurfHsXrkzBqrXReJKab27qLZiBiDA6GQ5NqZcb2zeYNLnVn3MgwKURFj3pS7gyYYH",
  "key8": "5MBooTJLs2w8yySziMrhrrmioxXyKNGTgDc9XZZpwhHgGQRaXQ6nQYENTr4b9YXpobHsxKYfWC9C8DBqMYwMK7DC",
  "key9": "3pZoLamny625AZ5ETPMZ6yjYtQEuMbZmPJXhZuFVYZVoqSXxzvj5n5mEcVtho2HhRKtzvKvTQQFZ6s3aVyS4w6Jc",
  "key10": "5Vzvyuhe2teSsNy33k7AyE68jbxvgEBDS6V8U7iQw5ZnQ7nbvTD24Ntkn5QncYVt89hpbeXXAQRpMfD3XakDd2NK",
  "key11": "Y4nrcgvimqMw1smkBpSieC6Z3r8AW4pwUKN49YXv7PrsMS8ov5uN13YpjdecbS169uDugVFAb2FE91tX1Md7a8h",
  "key12": "3UdtWoNDPvyKWjmocfE7FXVWfFVaUQdhiGsi3ZEWQuaM6eixWEmCUvLgLmgLrvb5Js7Yh8eBi29CmzMXgYUUWuut",
  "key13": "38EfQ2xzFRdqKLhdEr3FCc6MRy87pzKkbPhFWvFuo4qS3VDAjiLgULXDKMtXZyZHd1V6h3rZVkmfuQ68yCSDKzpe",
  "key14": "4m7vYkY3QH2Fy9BE9cxHQ9bZbSvGyHfauGdNc8xsRtuCtvWQQkzN6LEo4h9RGvgAeUX3cUGEx13XJN45xhnxLHHA",
  "key15": "88pULNYKxLu6kHbZwQuHCCqy2JkFVHmWFtXSRq8VvvGz91Qn9yvnzRGJnf68FSMX41dn26nubKp3LHFQHyqXPuK",
  "key16": "21Rbr2CopxegEqaQ6L7XxziKMJwEPewMWYgwQWpnaNYwtfn8ggUm3jgaj1FxZeNjbsmqQ9pZ8z6eKH7nzGqb6QDf",
  "key17": "5z9tyZ4UA3v895fgpzGTDGjaTD26Ph7yB7psqCihZAazmGqEuuzF15zUGrYcdZ1Mp6fDbuDfnBby6YQqMDRUqGNX",
  "key18": "4odnXvqg4f8qybhYFZA4WQyhrAFReauafynApk3ygN2aXb5xcQbf4Fxu2hyamovEsb1BhU7PDXrFUPJ2ZkdgRnXh",
  "key19": "3oUwDfKQ8ygaT6EBdBAzo8VoZ5DhGL2nJFCu6kWNZkz8Zi8TNtvZyXnFg3fTsEr4U8rzhFFvKUz5aVZuLmB3obZu",
  "key20": "5YjQy8mnH8o6qDWBifwm8n6YLkjxhKKDApHAuZVzEzWMmqjUcffRLnMtXCL6TokeDRcqsaBiqXAQxUkntwvXtR9N",
  "key21": "3fhpCQ7MDytdHRB85yp6HXbKM6S44pcgXvvAe2zB8n45oAfnjftuNhp9mwRi9z5ZgEBHnK9RWEEZoXkVrxJS3CF",
  "key22": "3rDybxGoSjH9AJXsBCbQZKVum1kSCm16djzDaf7LPdzhXU5B5NzF7Dzz9UJDqcVzq6iAiTkDmSCvB3VAB6k3xJNB",
  "key23": "2b31yvMLC29CgEzsjmSF6LynAzzqvMPT1UhQsuHKX5F4GqR2h5hxt1AHS1tCcMW9R9eopKx3Z7jUGJbR5Sgk6EhB",
  "key24": "2jKgJwSW3cbKy7iVZE7hLNQHVUTeB4U9K8evQpmA6ymg5YZMQsxvqAUkFYQRrXXfjMeL1ZU3QfUuhdEEFGtZ3EJz",
  "key25": "3DrjovjM2GXY5ixHW69JSfAVqTu7BVDErSp1pzQ4UnMh2qL9zxFnAd61t2ZSt6gq6u5qUUpPqisydE1LjMd5aotz",
  "key26": "4umoudsG2en5DVxX4wFdmtkqxYqnxKqMwkKHw3SSob7sBBvPu89daMYSZXm2kSHZRzn5274LPssm3ru6AEqPmRAr",
  "key27": "5tXWkjKRtW4EGNF5nGrgQshTwFncNggCDGsXU6iTsecjvQYqEGwRFKrYEDzRjbqUnfn41K8eE51354Ck1cA5tEhR",
  "key28": "3Nu2k7uiXuk19p6HmAkobDyEKdd2qggsRNDd81nSuNXboxD49dVTeQCMA78hAFj7QASivcHe1uLRAe2r8KJq1cBX",
  "key29": "4YBKZzCx3ky1G7mwvVm7viqSzfAJnTx23pFfTyGPmJQr9KJjKm569gbNkyq9RSuRVe9LBVZ46EVyrZ617BjkX6eH",
  "key30": "2kffbzWXQckpsWPZy7hxoSSEAaTm6xVMaURChvDWckZBptsZwwVKbmg6TKZcRJLHcevVo6d5cSu2esxq9B4Rze4N",
  "key31": "5YcGXsy1vpsAkce6ecRC3uk5X31Sg5rMpXkbC7wbnqzchAdSi4msot1C8LqDTsUgirvydUnpjC2wCLwrmVFminc"
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
