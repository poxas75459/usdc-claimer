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
    "4cHyRnkSjWBRLcsS7SFiTcjY3cj3EUrwUZCLfdQSpjqdvV8R72aLBQBhLhJd4UfP8DftU1KtSrF4apzJCeCz2oFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sD8qDuyd66Gu8AWj6SuBEQSj7HQhR9nK9N7QRs1Mh9Uh3hjECNHe9p2vwx1yxdLyTA8Bn67KaEPD8tehe46nUe",
  "key1": "5o8mDbKRSLj8mHFnC6ANZwUbdiMphCCeFLFiza1r11Cm7FMDhy8BLmBJs2JgkZp4pKpVrgM9hSg3S2kcK4zEjMg6",
  "key2": "36h9udn4UyzCsBxh9jnFr3biBhT3d9aNk9fuPaLqVDVpwzVckhNPCFZZM12oHpL5BCkRU5xhLYEoM1rNC5GVtfxL",
  "key3": "4uiVqHGg9bXeV6fEciLanUoUUn7NSWJEGmJdQvtjX53KXCRQvPrJKvCvTniX1rfDVyLpacrBtvwdLsFZgRB1e4cy",
  "key4": "2R2HaBBQbdX5Fk7rB2XEyz1dWHBmdZEvdofyzcQVtkzYUfAwUoj8MUADbduTrfvwghepWkAoyjszb1BYzqgr4bda",
  "key5": "5yBUCJmoVhFtqDbwGC9oHfapA1xiS767LSfUQWkBtkoF2VqJ7ewYfKbNAeZQ8aaKRuW4wjefHw8f1iFM8kPVxNJK",
  "key6": "5GTU2ax4winW5EY5QdPmo2d13xuiCWgHmaU8wPRto3BJ81HiyfFJfGw1ss5TuniJubEn9gmhxt14U1bsKxQ7ujTr",
  "key7": "3PWeSGXFviQG3XZEaVith8T9gSXaaViCNmaUSofi5gRLTTzpMs1xX3tEVsvWxcgJCPYGXdBziBt347R6BXE7QoqH",
  "key8": "21LWWQYUdqeZf76Jj7EebGS4gL4rZWBcEjKugBZ1X8FEsG1PaobwYVb375zgkdpempgR4czMSvCeRxks8j5cY7Kc",
  "key9": "4RWTW6GijSBDprefKo2twZBUGUSFPw2SZWGCmreA7zxxBATdEy8xwgdfr4bqMJJ8qRKjb9YP639Qeo15ghwWBwKy",
  "key10": "PgnVADbjk7r72hX2mqYorSnrpFXdxvVRNSHkCehR25MJtaUhVbWPfYfLAoNa4kzrUUeLJz3Zb6wTbhM1FtNaQtL",
  "key11": "2QcHHC6tC27sQdb4qDqdobNWzMvkt1YAMt334sHePtYRMzpJpJYZyPg69GLsnGzs2tLMY3AZHsVXNeiCJGK48i7i",
  "key12": "4fWFgcwsTUcpV1YjtwW5UrbkNVFdj2qpbjRe7vUEEy2YXeM91WcyRijzTfEg5eeUyjrySBRpKKd3DH8ZQjYHauro",
  "key13": "5xpv5WV8GXuRcjyK7QhmkSA8bgyQ4AJEd2FrSEKttCiAS8YJLvKwELi6fhAoq7rX4m2wrhMRNG6ZGchEidc5PPgY",
  "key14": "2MYYtwTW8pCsfHb85VT2R29yRxug7TShZAvgWD6wHmAfipwDuHTpqdwDRW8vdtkEZ8xKVSfwScN97hhfzMVXsxq9",
  "key15": "4piyQDJbq3ZFPdVjtU7qjN8uw3QCiA19cmRaNs5fWRSp28S36g3YJ5xxbxJgGx3AyU3wA6tBqLvL7JuCb8pXpRHK",
  "key16": "4wBDXJGTSnH8KNFHtdKct62Bke6Qe12jc4Sa8VGsBATvcBcRypa2raBVXYUpGnssxJAAFGgx2jAYksMXxiTwzhLf",
  "key17": "45WHyvnssC8Ebvp2EaE5xrzV5AMSsk7k1jMxGneE8MdfkKv5zSVcgUZFhGjuyZohGJQG2W3iCgnPeM1CdYALX5P7",
  "key18": "394saGVGH31s43ZZRFq5g7oYMkmhooRqPAiaJNDgnE4oYiJ8ESA6VsgmLg1JMTCqqiyvsLDG29HuUEuyuQCg8pUk",
  "key19": "3XFeiJpT7e9PsPZsY3sVgLkbphLuXSZkfd251J5nMk694U9bFReuuuMtPWMihZcLmKqxHH3FhgjzPRhMyDSWL2mv",
  "key20": "28EvoQReaT6Ha7Q1ViBDmdjgSSJnT9rRAUfsPn4ETRBCFujiw4LG3iHdQGLXNgkQkyugUDmgUR9NBVA8nPC2Xj9K",
  "key21": "4faQif8inTE7y24YQabAhYw5VSmmgabAZF6xjejWcHA3mqgB17syXwaZDFNK5zsJM41kfN2oQa8CkLCSZt7vgSu3",
  "key22": "58SHyd6xLBNFBoDsWbURK8gzqPds8adx9jXaGkRJrE9rv1BSosgzJYRkYNcGNtVuBSH7jc9xBUEbXSGtzCxGB9JG",
  "key23": "1rXn4U8xYKEcUjWgjzCVcYkeZ3KtuTeKRw8nZ39KYcufSPSzt8uCHQTzh7foXXUrR9uY85RZya4pHMUTvSbq8c6",
  "key24": "2RcWfz6HumqidMWJbivawA6PEDPm9V1xQvKsSCpATX1JF4MFmsX2QyrxcRMNLYfDAf42ZgqKDoBHf7Q4hreP2uXA"
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
