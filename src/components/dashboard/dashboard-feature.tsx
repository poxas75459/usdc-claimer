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
    "Tdqrj4QWWAddAF1VvoL4orMPKkYseu19tDRmQitEMAJghFjdAj2epkoo38Rm8nU9ZCNnbT4YSYRfFuAkpA62KRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6BW4PFiGUvup9hnTwuPy9gfJCaCjjjtPuPymckvDRqe2yyrMkWikCZzDFqQVPoeTExLjLvz8LSJnwKkMS3YG9C",
  "key1": "3SgnPSguNP93WHnXSwhyCEMC1KqiTdHrQsPC2i5r82aTjnBnrDo8P62eefFnypMakGHCDUteEpzFSwCqBwTAJ6d8",
  "key2": "5DSWsXqNjRSziSYc1tn9TPZGcgwrYm8XxPzx7rwGkAr4vaxRhjDZppCF5fmwLUVaBZHPeoUVN5Hg15VppAU3oWHN",
  "key3": "5ABQTZubiQnVTxhjczLrxCBk2Fm537nG7u32vo1gy3TGa6okCdQbgqzhMvXMP12TNp82hLBiucLfFhSWnUAZEuVg",
  "key4": "2tbB4FuKiee5hM5gNxVzUJcfSorEfon99q3jDdYLfz29NrkV9o1cUoseFwCfPisGwC6HXRvYXdppMR3UbXTZujft",
  "key5": "JuVyxBTJoq7ZYHqvF6Xhud1CntcJSJ2114GqXjbu4rhJPXsH5uxVAtPnuF8wN8J3KfTNnMPsw7YNZHhR8sfAdUu",
  "key6": "5jnowJZSBoPdJxZzw4f2qkuJbZu5KxRSa6JgGcBHQM3yd9P5rCtRaHmKmQcoGA5LfZAf8oq8d3cxKPoaArFkJ94q",
  "key7": "3BqfyYwDxo38RRbdLK77qguaYmKmB3RP6ZiWZ9PsRg3sFHkfwJZQ7DjvNifaTykxprHkrXDEwTx5ftLiMGKGpqvn",
  "key8": "2GNy8xR7qzxzipvViieSyrbUqKe83hyJf7Q6PjbzShuvWrqGDdysDnyp3UGRSijPqEqsEpWKTV1hrxfQNqwB4btW",
  "key9": "5N6ZtEF5mcD8DGH7AWchkgdoSLBP4V7FjNw6mGpjYLe3UP2LsVn29ns9paMYMiygBAoLAYuaj2oFyNvojZcZVWuX",
  "key10": "EX9exZfUaKNDzgUSGaxRvY6PDC932ru6FkSRAXg12E5afYNhnFEFRH9AEQwQm33qL4CL4hwpa7hHhY6bEotmSYm",
  "key11": "3av4m1j3yw612iCmzNQbKBWiN7hXrkKa6ffVC1fQuj7ymEEhdcdPjY5ZSwrSowwvSmp99czrQ8T7uAG6zuS4DkHv",
  "key12": "2GCmEhghz9bUVWPqXeXMR9wrUsix6TvSTnXMeM6F8hXtaBZn3KaYAatTdsD3cHoEycr2Ua1akarsL8TN38AbKHbL",
  "key13": "5iJ4NFC6QnU2LYDKqYimRBacFvnXjETvnei86qEschiFo7DfRezUBgaCGLNM8mtJFhbHBRTvu7zdDGANk5Ts4nio",
  "key14": "56sAX8N7JmTjur2YvCXY25vQUbdfMV9qw36FYnEcETjVmPyouLRzfoCDdBbb3bfLQcD5hp7UscLifve99YpwoeX9",
  "key15": "2DadZiNqZuoRrpbiRy8sMdrpvRCxjHDjLaSuZhrdGqAsW3Fz9DzuHNctXFTrKp8Wi6aRXrKB54RTZRrQzGRmqN67",
  "key16": "3Ae4xUpHjjao6ZWiV2EJZ8pmAVDSBNLk8PHAw6NoZWsW48vxgaucsUxGGZBhBEQuJGRtVWHggXudrVRVUgeeg8sr",
  "key17": "5euWiZXsnFCA2UXpQahBv5pbUHbiwCB6EaVzKRTYq1zDDBQoJgaJQw3oJ1s3Jb9NemAXKjyfwuAHQeDXXLSgCT2s",
  "key18": "N8rxFSJoXHp1hseW9E6hZx763CTwWkH7wexhN8LNRpknoJ8Z1JbmbU6Dxf1qdCT2QSpUWthaxeiuutFwA5AeGJp",
  "key19": "5W1BaHmZpnZAQ27tGZAAr5UUd3msfGsxNQoF9prxJwGbTBvh24H31cxNbF7CsynSt3hFcuFMDaf3sLsZLrhHvjk4",
  "key20": "J2gW1RjnC99EN8cVSfoReKJvHiAV9QCpfcxW2PVUeWmnAGgjPDLr9kt91jpAxpeZemcTrg571ComzFbBtuN6xVx",
  "key21": "4ZQmC8igHMyK7J4oiYRq3QgTyvxcuUFkJiiQfg1ZakwwhgKfdrZG2jkwdoSVKsFez5VeQVFSGJazN2QUzLc1tnCh",
  "key22": "3uebVoqMNa6CPBh4QgpzDHUfQZPs4kPsjg3qaDPDaJngvDKHexxNKKXXt5Lng6DTgXaiNWDif5aFDLS7gKbYmauT",
  "key23": "4XiG3etdkW9pmMfLKNX6GNaLNoGDowzH7TTaXQSv9G4dfwe5nVdeBwAhgUSTtHd7Cr2ncE17NwiKiYGZqUBZc2L5",
  "key24": "3yKLsuh8XnxMkTVU76oTEQRDsdmKCVFVcULoZ94BoMVsEvptnNBUtyfwqGLVThrTJ2y27i2XAYy1arru9PnLNKZs"
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
