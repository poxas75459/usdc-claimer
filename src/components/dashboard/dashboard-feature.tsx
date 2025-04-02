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
    "9rXae6moJk5zcULu65tFBshtoFLUQzTQcWniHEM7ab43TZbqoXYVEU5RzX9Wg9zNseRDCcSAAy9s5zV9Khcower"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHRoHaTuH1kZy2yfm2f8ZitNaRiXKGJP2PMQPxdeNWnP6mxWXjtEGfMexqCGiB2j3AGtAEyF4eKaoCnJMJ1sPpf",
  "key1": "EXT7TgYpKjrpjHwQ23wvq4zhqn7bFRwwUU8UiWZhHn3xDoShdcci4vUyrZxLE2wQ839iaknDoQywbKCRF4kGc2L",
  "key2": "5TwDZz5wCsNtgt6xVo9F4GrnxgBtUKRPVawtEtXTK2igUBPVy72f7mGoirLEM9N794JPUFhgR9BVH3NKiw2yjcD8",
  "key3": "5EQgBK2bzWydqS7ptmrhvAxASqoQ6NfN7Dvkn79LKVKqmszCaD9rGx8chRc4BWuXuRFYrR3c1e3AWGrJC5yMREoF",
  "key4": "iZ9zM8SuYi7xYouHtU9cx24RDfh9iU4xNr2zsMem3WoLYuxyG9waSVt1BBRVbWm1ggETPMHtxoANJuGU25hMzQT",
  "key5": "395ksTBKWdcyqBBeGb7oahmiSB3siFaVLNzHSM26WSBbhGxkRPdUdsZ2Qq6mxPsfRwX3cubS4jWfVqokidWXhJXx",
  "key6": "5k3pPMeLRmZiuXRJrmkXzyTiCiod1riyxzjjHcNSDuhjofZsBXfEJkkZkjYXQiuV8S3R5n8rgLLnJTuX3v3vhSpA",
  "key7": "5zfWSao681rMJDBKeKaZRJWurSqu6JZmNPkpVGzFegyBR8W2RB8TeP5j4VfkaqCkUzoNRk7JWi17M9zEAZGLevH7",
  "key8": "uP9FVyAZZtxayzqrPpuJkPuXFhuMmSEVD55sny8FMRAPneYvBojtgbpAR3oWknUHMk6iWqGboDmRABVyw4HJtw6",
  "key9": "5UeNjEqzJT1A8nkgBA8VxvTCessAEUqNvLAvBWHf2gP3usCLY5zy9q1Dyoh8ugsJc4q1PtryZyjVf9pmcjQrzPrK",
  "key10": "jHGviKdwm7S9bDFNFyLjaJTvXWnQqGpoGEJg1PSfjGoztts1k4qrYW6VYJ9i9p5P8YZLd7fK7PwxBWUNPd9UcLE",
  "key11": "38RoudxfX11ttb8yh1eCmSuqxY3rhE67rhGgcgrtnYr7xsZAeuG8TYNW7rnALBLErv4hAw5hpFSSRSSBsBhf19qo",
  "key12": "4Crd1f77nYShkwXJJzcYWQaWya6ogusdM6bi5VeM1XmF6HXKh9WSdctEuEtKSs1JVT1as4R5gexx2gxuenQVRGBg",
  "key13": "3QJzDV8XK61DNtShdqAE3UitQVwGs66mS9WXHpxGknPEqwdtF61LVqPWcPkEsafY4kiURVLsFAByQsaa8KBoarWG",
  "key14": "5zu3wgr8trvwFLrspZJsg6Hb2nsJmizC71t4nNSMYqDLghYnqpCrWNdxV7jM5Qa31FPWQJisnnPbFPztDVULJuFg",
  "key15": "5kawAbTEBsdcsFn25rAujWYTs318QYhUPzUw4wUzdxCdAEsfYXA58vW1xENsjyoySuB7TZK6yx1gGnpjB7KRUviP",
  "key16": "3uLMRdyNhZ1qRd7gMAxjcUyJYx82NqPsuCLtiPqnECoSKUqoAQkZYAycsAP9qQyvQwnWQPiwX14dA5h5ovyPB5my",
  "key17": "31axdkZe35xm7AxbRf9PqMicjCEM6ghVPiUaznvtYW3Au78Teu5mPV33Y4bwBSvicVhdg2XVR7CowYpjXSekkY8t",
  "key18": "2UjiUK31RbsLosincU6D81Ucen6zKLFCa7YKCrJJYCE8gkcTs7u1LHN3ia6JcKLYD743VZYCrogqJphfQ1WZRyPu",
  "key19": "2sThBGXhk1YPTDVhkdXorphV9BV1eUpeRoZkHm2dRaZXDWtxvcVVwWE4XyqckWYthJmQ1e2xjV9zmJGJ41C5XA3T",
  "key20": "2svHUZ1AYbbVf5fDn6ukxMo9mkuAPFkCVMgggWLMbMQHQxa46qGfNWcd6q88jA9pp4ZS78pLqDGAumGAXkDsektT",
  "key21": "4wpFXWeCrWVghQxJ87k4RZaHwnhFadMZvUFMAecmqn9gYRDwmwT7jWv28WHbGjvc9ZWdU4UJSjiB5rxn5TsRjRyV",
  "key22": "vCSQzifvVCZdGCQy3JiP5gBimWzZEqdVRrqGpRhFazuxA6ha5XPJUBKVMtRRFPzRpTScr1wGebGxES6DGiWGC68",
  "key23": "4yX4c7NtVwoTufTutLfqFb6P5PHLBVcvYj7ELzLq68Gp3ecermXX5qgKs3fmV5FQBKAmZJkSu7CiezU9Ny1KgEk4",
  "key24": "53xFG6pZoPU23sqf4hm7GYC1diyfuAfoV7Cy8LrH7rim8KzEwTD3KiDSox7fV2xAn2t8NzHGAkYgFTpiWCJY2cid",
  "key25": "2ksNMFVZFVqQckYkbKX15yNQS26WS7ES2JA6pFiUb7rUWoB9gorwkNBzg1Wpg4EjUKaR19xZu7ryoN9DGf36H4Qz"
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
