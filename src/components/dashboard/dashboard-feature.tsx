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
    "2HQbhDN2Zz3RNU5LBbi1xhL7ck9GJZm6YDq3fm4FXQdFUxjnkyEGphYeMb6UYJJBDMxFqC7tYGLxZk7utajWJkdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eYLhMsctzXHekdZKokrYANGZpxShkCdqZy9ctGwk4dnsToqwjFyoi6B8cRAVFtrhavCFqHkz3VD9RbznQyxSZq",
  "key1": "5HGGjAfyjFTZCtZFo1SU4VW3YQuhHUvDJEkWWsdveU2NVXNWkNjuqtUWFhdbDMg3uGoV4cTtEv1UZncXKHwW8P6x",
  "key2": "4CR1Y9KE9denpw8HpESuWikQRiNTcCjuLrk39AoCosCffgSQELCb8xCr1ByUHXTBjHtZbJYjAZEGkobb5fpKWwcJ",
  "key3": "4U1qGqA22uXpCSJ93qwebZYKDhvaX1xZR3hEumY7jKVJnCGd5qaqo8UCRVugBFfcBVSoFhcLxD7Ht9mmJ6UDGmQF",
  "key4": "3z4ZnRuouZhaVN2gXk14gNsbc4TCToziZeVDzALzMAmD4cV9aFYZY23oLYGFmkYtu8vSB9QkeLAnKmkqoQJ2w1kY",
  "key5": "2dTYPvdRthhAZ83rCUHLMtaNTkgsfDcpxVhX6NUmEwd5swdRikeM1E2ZQGoYyVqgAz5BBSFAheuD26sYALF6W9m6",
  "key6": "5xFNonZ3J8HXMbvRrkKpsguNzopajgLdK5crCu8YpLxCo1esTKGwBk3JhQP7uvrmftWaj7pV9a7wbswtvGtaNx9a",
  "key7": "58UbE93CfPrKzRAtZL9jtMrBU6bGXvwhsZ7dC6BYx31w259K3f1qGT9Gsursx9NMvrkh6xUfuKk1Y6JwFai8ohaM",
  "key8": "5qdq6j2S8LMb4k7h8rApobMp1dMUFLnjy2kFzGkm4nmnRzG11bLo1oRiW87XiQEGePMHjXzjUKGrCeRX8MgTvU9N",
  "key9": "36QMvvCKP3rHkH5wjz8He18AnvHbBh8KBWP41KfQaFFg6cnyDa2j4oFaCmv2regv8nPpQgqbSw7ztHe1wkc36iDM",
  "key10": "5Pr6WSJzwfGVgjBu3ZeL8UoaVwedptQScACW8LxJ9gZW2bDbeD6gbP9fQZf1KYB3yCZXMaBc82Y1etJsN2yvv9ET",
  "key11": "64XRLYAArus4FikgU9MA55ojpA5Lv8JBd6V6WzmZHF7U6zBjvxwZFPh3Eui6E1wNhRu7AwteEjtRaAc3Nq4mAdnz",
  "key12": "43CXQ1JFnYL5FD4qh5iFbJYkwMbGuva6TzSMgcDnn3fkfSUN6fhCmzVXeQqjYX7BfEyjpFHwMoM21PSR9yNzjzfY",
  "key13": "3nSRtWRrV9e9XNxbRVtYrympGLMTRKmqT3NSHvEuzh5pyafKT4bHZ8fAGtgwQ1LaN62h5A65fcvtstgzxw1etNwh",
  "key14": "3bY5wCFYSnxrryk6oZ3jM84fnDdeNPjcEh2V7k8JPrZ1fy1QRhgPV3JdNE7eStptDCn7Js2ZpvoNyRfSjsGYMk4",
  "key15": "5SK3QSVuyRUXAZGFMRVNw54ERFrMEgc1qcCanazKsrUvW48dQ3tR6nDB27bnX9uybu2Qvi64ayixdipFjDXub8p7",
  "key16": "4V98YvDFsf8LrVSK69Th7R6wJwpJPwPy58kMLTYffaAJYgD8MboCp2bSexoc38EiQegh7bwYfrLUyWhQjqbpum4d",
  "key17": "5v2drQejpY8w8qYgkn2QseybygSyQHoQScvq7RcJMJunPmqJ66dwo38SfoZs62kvRWVmf9pBpWxAUcmW3Fs41eac",
  "key18": "5tj3GgwDV4F6oHXnf19opbqvofoMdU9stQzACEBmqpRqMtDPxuNUxxr7ZYtvMdxUkbSue5Q5GG3rznTJNp5PCMdE",
  "key19": "nSnjahQ59CCehXTVSNzBq9pNG3i9yKUsPNxgL5RUCk9AE5NixBmHWrHoFfuxEXeRjt5YPPzZtmbjCoQybwPZ2Cf",
  "key20": "2osr4Bn5DBbZWfLiTeUUMvw8RvJydJSF4QucaHUveHN6kggKxi2s4nqBgF3a1u4dEuasd6XA7LH6XvrsrVp1nPS1",
  "key21": "3CqipbmckYSj8rCJDxBBMHc8CtXEkjPdoWeRHn4P1jNSHYkUPAst75KraTk9zxTvyY5hCT4hErrtMFpv44DUrA2T",
  "key22": "4G1FBicHncnpyYXU7CeoeuUab6q1NWxkKPVFbFD1RBK9TnPXqUT1P91p7nRzZ93p4Z1wef9VuQ6B8i3tBNciVnVF",
  "key23": "WhVSopbdSFqGrCdfFaGxAHxfHHdFfaiHX3mW3ihEtEQdA7UBuHnS3z9or6frgGHftieQrUUosBqpNACMEzX3Pp7",
  "key24": "2qT2zW54frPNAJhoE6Yq9Qg5U5LjYCBLS5qJWWQy3rt1PKRyVE4pWFw9V9YseQryn5TQSDAwxMKSBY8uRYCvJop7",
  "key25": "3uebQyX8f9etdYiL7h4TMcPYc2MMjbrzZaepjBu2B8CYETVEfju7sZ2quvVkfFWWqyhUiptV9862rkTnEn1QoBkT",
  "key26": "aCj9XZQR1g27JPMA1ZVZBuk6u7wMFHVfFyirMbS5AwschRsyMsXLjv82gjKCo37uqyp422h78hunwg1NKLe84Ar",
  "key27": "4kWSaioxgQuZPrUykRUmHaohrMfQEuRyCpK61zk5j5xGcXAuUVs7fJL71HeEaqEdWSgc7N64aQNwzXiWDD9f7ghR"
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
