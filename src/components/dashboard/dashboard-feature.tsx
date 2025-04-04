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
    "4QX6nj8CYBBSK9DnY7ua7pXUGk97MmPcNR3gVmh3oDLLTmc1XQhNFmGpGDz87GcYFrDHHn7WuPXFwX5UnuJc4YG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9ryyZh8Bnwpj6EXHJupW99yEibYCAKtJxY3aZDfFAFJypmrw56oxF9v6nht1YUuojD7Sv2PhPyEkc3sHciDBbw",
  "key1": "2dPj1hb8yjh6tTmBVmNAEW1NyYiai3cpi9281YcZxVQ9RtWRVYVa3ovDNSsoHVN46z5wj4TLZ8AnPddZm7utoSuz",
  "key2": "3h6wr4gmjas8PdVQ47vPKCepGGkt1tXVnewatN6ZJjq7a8fourJgwdvNJh7EoebkuU6zMGLV2YFSnjo7szEXDAX6",
  "key3": "3daMAWYLGWcBtcevVXrjEBhB9oso5EeY8tEUcYeMYkWJWBiso4fNLKBoF9oTdgWzpLeD7YTbC4iRUySZtUYU3LTF",
  "key4": "4obGTGLuJHEN97JnLsh14ZmH9rpEJmNDqqsQaBC8xxxhqEohFxSJHqYe9PrnZew39ZCrM7jvY1SHVzAVcDrYHZjp",
  "key5": "nbUTqsKQCLehEVmRk8zaekB9WEbfe6i8iU3SbJitpjUxzJ3SyH5d8u8PACGxiqijd1xEsexaC8VQkXhNhe1US9H",
  "key6": "4CU1ficV81hLrv9u7EHbvVeC2wa5czkfvxSu9Jduv2ZvfMGNxEYXMhzPi12fvCyWpXXTwBDHEu3ebEtKEqNit1jv",
  "key7": "2HjX3y95kYSV1rhKejSTYYrnUFp1S1qeLQrHe9sb56iR6cA1MQo4xK8QUkvKGc9KYMica3BAK91EErq4V1QWdih7",
  "key8": "2ZkjaJgpkUqgVfsSQYC6EK1H6GYCvUs3o9q7KU7m1XG5FRB26UwWBLhQAmNMPddnzphgtU6NbNDmgR8xTJakUWfE",
  "key9": "reWKSSzD5CmsKBgqhRweMkgUcEk8Go9xfy2tSxy5BBXTze8Gxf5vx2dGFLzNmRpK9Vro9XZgNPoiZvtGkkTa6W6",
  "key10": "2KvuxDJ5AMy12YFb8F7GEFUYCmp1UobCRQuYHFiAdZLZJ4Y6Q5yZUay7n2DfAttoPK5swLNzjx8vXGrMfbhfsjT2",
  "key11": "kDLCA1JRgnjBQGt9YCLsWafYzmQKs1gUQUDQGeT4nBvLePqfZi7kfT7ZsbxiMjuFp54CC3hzpJYCTtX5dXFUvG4",
  "key12": "XaUYxTatoPKXyZhCgTfwcvZ7qKLED6hFW5FwX8RpcAXMZH3DZ8sAExHkWpqhTwnyZC3SrPiNoUwUUsMWXC15FVS",
  "key13": "Dz5XqiDwuTExevrLLNUDyzD3NYe2gQgkKKhdwvkSyQ79yBFE1dzc4hZDh94d8ZnCwogSn7YRoS6udAsD4rnzQU5",
  "key14": "3JCJfWz9GTqQCYKwNnAgB62tLkv2XD7L6tVuRb8474PYHb3cUqNwyV3yB7EQN4VuwkYehC2YzEJDNYa57fiFekDj",
  "key15": "59kre5CW4GYGoxcE9Gc3pNFemw5AYpv6FTvL7oFXVBLS4uVYdAVGypvaRAfPd8XCQVpmwufg7VJNFaZeYcYTTKjn",
  "key16": "3Pmz5QFX8qyz4kefaK6UkhkzFBXw876NQakLkECxq6ovRiFBnURhdRjadUFghLkFGP7WL9qmMZYDme9HgCCNnHvc",
  "key17": "j1AWPj7vgW6DjwgpH4JDVUxFRjEfTHjDHu7ixvGmRaAKhHmS9VRxAFSKmuxoz8cGKtrURzk2a9Kh31d4iLMhRS7",
  "key18": "2Ea3gsctzGn73wgio7UGfbfKw98KjimozYKMHXBHehKbq6rcjXYrG1qRzphAkwnqopn6UqVyQTNyainH63XxFnW5",
  "key19": "4aYV4GAXbYtVLr1sEQ6N8GJE8jZyEiVFumLkWG7SL677yZF3PfKRBUYwzBhcrGMaDowb3RJbkSGqbAqRhimCPWCN",
  "key20": "41bU9MRbPmdy7vy82UCrTDKB7ob3mfXfnNVk41hkwPET8ih4UaLz5Mt95tHLdb1mhRS2FzrXLxyR7RzPrJA5vFne",
  "key21": "3wbvGxQnAhrNJxsdJ6GooeLnJPGLmpbsLjxp5Ff9MdbWyyArHhSERe4DqKWXxSFyUz9ipSKnvvN55TkniZh9vEvg",
  "key22": "3sd3JzCA6VUR4LEjGEguhqkUzXqsevaryptBVF8G51sHByM1qAAeHeXmpEkxuGzpWvpn4V33Vh4TT9swcpcG5jFi",
  "key23": "5WsDpmPWZMFkS9QAqjbwr673eWgz61teBN1759bRYVycbPMDhTMJayub3tepaXboJkcd9D5VfLmprRorKm1H4r53",
  "key24": "5sjpoMfDhW7q9LngtNeNrBFMNrBE17NKcFS78fXGkNW6MjUsvQ1cQ9KUJbXogqLytrxNdKgVKZYDa8sdfLGRw4a6",
  "key25": "2Ykg3JvoVVdaKA8VYs6bwcnTAub8JnX5gtkEsZDYY2cWq6hpaVQqjCfDGKqArgwTxVs2bkDej9P76ovKTGsDdbCE",
  "key26": "2gxh4RG8owHqHapW5JbEKBbUYBC9bKYGSbABrBi4gfpbRSewXrto6Zb9MA9GS5hnVhH5H4fcgXKh3PW4MJAi4t3m",
  "key27": "5nahxbarTD9zXLHvZrTtbpTHgWjavYdfCfrLi6Fx6AFsr36HpaDvv8iXSnjspmkQCBp8YmP1824GpieSJunKH3XJ",
  "key28": "3XT9dd3oYaVBStH6uTnpVR9xW1HUan69yaNGbRZFutdKExQbiXjkzw4vfvoBN2JPPKkwHX5WZxotgJV2SngXh5cx"
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
