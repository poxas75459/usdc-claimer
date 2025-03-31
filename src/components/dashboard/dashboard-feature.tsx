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
    "35EFHtafprsXHxkXAL6xWcQrprE3Q6xi6kfWFTsAf96yJsrNbGDcbZv8P65LEm2hQe8vHyMKxrJCmzMYx7tHVXk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrRtzSQr2VNC94GnhPNKLwGQVAjhG86DyBRqKHrPYW43vrXGrrVsy2gVRacpXP4dx6rogYg29zETwg66YcMQGLK",
  "key1": "5hRB6vzSRCWUKJFnqz3zkNR8HMCNHPBeocMPU9zG5ASTyNVNxTDxzKNXsKFYvP5jd5EjeUdDdeocg17sHBLTryt9",
  "key2": "3JFj1BfD4pfqdYziTr6fZV549Q7WB3rgLLCXqj4SUgJ7qQmoTPiNt2t7Ug9jgkS8dSk45kaf9URmWkxftnH6KceJ",
  "key3": "3tXmtb2BBfG1wB8SHZDQ9G1RNtRH8UBAY3MTLU6CzsCRZG6HcPZHUbDYaxvF8JHBd8UN5MASizP2noVZrXGnKpsx",
  "key4": "5xx86KhUGypZJ6g3r7WQhd6bfQMiLFnEadC3JfyZDTRrWrjZcdbod7QTcuuVYSJj8TMoxesRwKktMV5MKv9nEyT2",
  "key5": "xfYjKN9WGL4txyLRPhEEunF1Asb9VmMAHEVVKZyLRWwaFm9skqqV2WMaosTzsCG3cfVFMmviVQVQ5tGsmSRHNDa",
  "key6": "c1tWtmPzdbZfkZr9bQWNbwFmDmqceh4GxK8koBQnZFDhChQuDumqHoFv2vQwMMJ7ZF77Fkt3yFgXdz8aCw6SEhV",
  "key7": "5vH4HqA6ufJL8u1bLoUPmWKYq7W5nP5SfBFJN54tXGhTqixdn56aLY94H2Py7P7s1iJZX8JsJtCf5fdrH4hpW81n",
  "key8": "2KuoPYMtBqFHcDM92JRZFF7VDjKoR1JL2GgVZoNjHRf9Qd6Z4vrv2j5DqpiaXPv8ti7HGCiBRGcu3ZzTsSQFCgCA",
  "key9": "tyJ9T5C4PjWGzRgzZRVxAxbwMx4H86Ej14GQpf8NdqbukgEizSY7zTVsysTof9D23hUC3zWvbaNP4uz8GWHSmQR",
  "key10": "5iqZdjH4tHZbMKPFWY2nW3xcifwdBGQBrbwUr1VFjt8PPgjFRMoC6iFZg5yBU4rWzLx7hEhdHkuARNhnEiiqSGkt",
  "key11": "25kNQrsFmezxnCLfnU1uE6YtvGsD9qz9y1jWNu1KuVL3MNkkpyEHLebBczELf852a1Ykvprko9gu9K7wzA565m1K",
  "key12": "4pTmCh9gwVeMpBfyBMY8dV3DuZ5LgAspCTZiyd96DCqYiHGeELTtUnmDZkj3w5UdC1B6kW3zD3YDa7dMgtbYVAt1",
  "key13": "5JymDMF1XAAwwZhzqUT3octuvXiAb9nb7Qj7PJaKqmLBTcdSzekwMDc5aS9oYd2dCVdcT4JZTgfGcynGyS2NTYKZ",
  "key14": "4rnKMo4Ge2k1Ns7y3jw1n2rmWCFxHL231HsHrSLLwLB6wGb5TY5EBA2m8iChPskBcPPE346EfwzsiqefPNtvremH",
  "key15": "43vC9FMaM3oRcEXTRjD5o5cgF4VMSha5M1CHwZN7bWYkU9XgbVwaTabHuhYSJjA7vbtvEkVk4585bU1oriynqEqm",
  "key16": "cMDcYvh9GCEyMfE6EmACy6FKYxzq9yJHyTqwbD2mgPS9kfaR2qjgiK47Hek9dek8zQyCYYVau2eEqNaZz87HbN8",
  "key17": "2wPmf6QVwUdEWw46KJQ2tpAMLDDQ1RaMRoEazQGKfQwMYFYZv9vrMvkRTXMCatyavwuJH7jeR1w7a94nKnSZztRa",
  "key18": "294QbwsWGrHyjMFLcQhstpty5WZPa2ENisuxpwncCfGwYrZCSgY4ninpGarjMNYVg8PYWrS3HAhygyexC9Ddxa2y",
  "key19": "5aBY3muxQArk3u1k97KziqEgB5qpiaoK473L5T8RSh4JyZzUWZxnmmWq7ydeARZ6UZ1u31wnF3DRstHYLG38LHn7",
  "key20": "26AbKvgqGmhAQ5Cxj8fEKFCM4ZFFtzrWZQrh6Bve43TtgA1maQaNw8roVVvU2maxZ7JkQ9bGbqmDVfNnXbVDTv1m",
  "key21": "5RLTNRqcfjhP9joJjUPuCVK6immouKQ7mLHGnDkB1DnkawkWRVC2or7s945Q7aKJ1xXXh4ZNcM3hV722vaVfRZeU",
  "key22": "5ewMfLhBUhLpW8NKCfR2BBjV9KS4XtkgysiWLLtXDWnxLYw53AeoAMubAzVtCAdF27hE1jBivnUh2V7LKpY7yxaW",
  "key23": "3iu8jXj84brNDm1iJcabB8JJtET3axqviX1nwGNJpxWm9JaxDDDWfHZ2X1YET5hgnxw61LyJgs3aYLh6PKrFQYrg",
  "key24": "4kWak3zgFNgGsZgJofB6ewcXYecCkwmuY6ne3Qp7B6nb9oUjJewBJKQmC9aDFnte1ta7Txpros4sDhbxKwszXwfs",
  "key25": "4u3w8eiujmjrL74XVnV1pE8ghwnRPgkQtintAotWDptfKwmG6cSTq4T3pTnYDC6hCpC9UmKEXv9EdrtCVAhby3hs",
  "key26": "4VmfnsNhQNfHJeX3GSSC6FHnWSqzJAHWCjsQh8GpAdQjhkf927GWDXy1krmpgd6dMHC9cDFjn6DaXmijkS88zhc",
  "key27": "61VHV63ic3eHLc9kzHiZBva1zYxNwdGgqDeHKeHDn38pB93m5WTSmBMowkuSBygBdTA48wCSCiRjZcJFQAJJiUoi",
  "key28": "672crweQZHRUDqSDqmNefYtwyhS82knb6fZhuV2QEKyaSSrzQPjkD7YsKFqMDoDnjapu4ZrUm4Yu16Y9d26bAoH3",
  "key29": "4jrzp4KHxr9HiiJmq2UxDvCxHud8jTDHNT3778yiPpNopGMBagNvSEgcruCL8xr9K3znbtYS6VikC2qadE8drqnA"
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
