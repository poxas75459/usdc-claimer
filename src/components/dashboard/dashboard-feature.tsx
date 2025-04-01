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
    "25dSuUCN4vpFhzLPWZBrtddoca8LdopV1AJiBoq7ooNTj7kchdXDPGSyC79yBPJDxpjMYLoB66N8TEdwRwmTSSie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZRXBH4akbqcco1s4exCn3zQzLTrNKT9RAkii5UukTZ38gaFDbpZeTMjaJutt98cVXJysa3pPxxGfx4QBYN4qVd",
  "key1": "3ZHySoQKy11iHytemTnH11J4diHhWwvudDiKPxRFdzpDcowzjgekWUM6s3QFifgVozMzmjTqe9zspWsiRPRrkjej",
  "key2": "5yiQaP1b2eXz51yYQ3jKAzonfMmPkeWvS2Dj4YwUFEJuwSH3R68cFj7rs2H8faXid7WQEgMgheWShetn7GxuFNAY",
  "key3": "Jh9iTQfGaVtqfAUW6GJkEVkCjd6w9PSrijrcGQFSr9HBrKPfLhZqRzVWAkWwkJ6hTCiUs7kEAKHarXVE4RFYxMB",
  "key4": "56dJURDfSPqzumzjzFetiAwaCTREiQrk2cxYwBEffx33G83z6JxfpjmTsCMXMPRMLKBT2yBvyBf33i5HoZzicRP1",
  "key5": "2TCfgP8EPxew4X1jhAziLYd9uiFZM4W3ATTBNf4rBo6oKZQ787gDTtvvGA6R9uc25hFN5WUnvmYvQLpw97XqqQ67",
  "key6": "pgSe2BEioA48hVB7GHbKsjws9FRVvW15JeXMqoyVd3hrtF6vH8QiepbXQAr7zaLjQjxC9qnZGLVpadNATr5rDiv",
  "key7": "5Mne1q4i8YneLYpPqCz36soQ9VdW24Gr3B2KwQFPxRYPZVDBor8FpM9jCvSgwPQ9o2uExfGb8LLRVLyBBewJ4gHN",
  "key8": "5N85Mk8dymBQevNBVuBkPMEmSSFqXJKbJopUyFFZwxZ6JUCwbFgZv79T5p76TLErqp8kyAk8s2Wz8qy1PsCTjmi6",
  "key9": "5ztnojUpErWEBTar6sB49BdukLT9q3mzUiUBwahpPG8CYKbNJoZEtQEvW5vRa3FdCutJ2tJdbX7WxFLuctZ3XGaV",
  "key10": "4nCYdQg3EzqABe1R5wMkDA7rRsWE18aNx9osYVpBkSv44LTy7W73dMdoNTXBzPHjr9AJMCuBNPqEm44LtbMMu47P",
  "key11": "48X2B5FLkK62MT1yd2hA3QnqPKtVX272t8P7qTEYqXWZiDtwftvXj3oAkLxKT4B5MZq1SPvAHz9WtXX1R88GRN44",
  "key12": "2goZnx1iDDfrXwhzxaJpokxkLH8md8j7RUu1rEvW2Kmgo1VLtbDKeGNjzdRYWAmhMKfiE7NmgMD2mEFWRtnrn63H",
  "key13": "4h1SbQvYaW7HQyGrS6QnpizLsg66ZcTTFWkQxXWQbSBfWsHnfXmAdgqHNQPizLxtvozV7JvfnxqhBwgQHsHny5Fw",
  "key14": "64vcGF9ZagK59eoUi6bx6YsczEKxU9cqc5PQ2HhuoxWpcD91PhwSVux2GAAxXG2UaTvNDj3HGHt2ZB2X2ZzvrJJu",
  "key15": "2SKCvDUusEPVFxdDrt9M1YGi8BLuZ8AQx2pU6SDiu4RBcXYKxuEHPAHrs1obhFEVEEpbHhN9xryLupSgu2jr74Zp",
  "key16": "4iCpsvJDk19TQ9tjr9HPNvMNwnLEjaXFee9oFegZHNfX4mZw13dRCCL1cSEWm4FgADV2HiTH2KW7bp7gz5ezKC4A",
  "key17": "44Ysgg9HHVQy4RJMuXW7cNeFQRHSN9oTS17zomda4vAnPAriVpiMq1Fm9Nu92sTYLsPieqKb23K4sChWfZkK2uPK",
  "key18": "h4qtCfXkAEGSn1LzzHxr8Uo9tmgU61nyThybgqhK1jE53YXzLD645e86R3UBvGjDouL3SeM1RNyyTDrMc7HipLY",
  "key19": "3okd5D3jaYaskiciUS98Zc2hVBbGjdpoynutY9PzftsC8fzDj3D8iE4sBd5VtEypb4QCcxFFmqDBLMzB2V3pNHzd",
  "key20": "kje98MAaaXUN17cgBW4KYYJLKWzTyyCxQQvgnZwdCNZsX8QppfQ7HmP7Ak5dJW19gymc6d9bnK6miBCXQH2CtuN",
  "key21": "4u1NQ4jytqbESYLPwvME1M7JLndhcWj4AqJ7hhDt3gQFkyLezwnHEgFhpRaG9qTUkFb8NBXD3XGYqJ3rFvEfHA47",
  "key22": "jiwjbrLdwry6nSJtRbBW7JhGQ5sXqRc9mkEpTw784nENkwq5QpPYeW9WJmjRK1S8nQuBS6B8L9DL4wRbkUrB9iq",
  "key23": "3ENxe359risCSdG8MjKQ1sDZ7gyjQddpbKys8tK5uNN6bMbdjN2E5xD4iiHR21zD19gXfzh9AqpwzZDLaaH9RXwK",
  "key24": "2UPN9hHSAqXycosrkZwJ5GAK69BXPruqoeQ8EJ3LtPs82pnXVqc5frYysNCYuhuTaQWCtQmSH5fdCx2QP5Y2yGwU"
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
