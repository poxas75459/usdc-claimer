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
    "2jjHfwTQtFpJBNJzQbeo7gWsRrV9LjS4KqBkwjjNy9AC93FNJ18ijwDd6bxr3Hr1WyCdTS7pdRETyN5MusuhxX36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bYck553pmYVB9zMrTJVJiUuxpeEEH2E5kudLPKJ8NZ5hYxB73W3s29x7b1bGWUCF7GukSDV19ScFqd4WjfuXL5h",
  "key1": "2zwdfhCJMpUgPvqj2rwwDL1eTBphUn3PszPWg5fUCP4x9GbHurRCPsQpEZTTZG78a6cpuMTy5so4fXbqUQeG6qNi",
  "key2": "ykUHg222vxWvMqBtFhiHuyfcongbUgiPX4dnQkLXKeNov2gwzZjTJs6x9oKpvHVXKffAyEkRP174yuRTLZ1UCEP",
  "key3": "YgGLjef1u3vvAP5dkML6TCnAnKa62BTatwYomZaJZVQMQyNNUmLmmydCJVKbANXUQC4MbNRrREtDmgZ2ojMLwf5",
  "key4": "48tMEqTzaG92mFx9hm39uTafrmypyJTjFk1r1pwMmWMSBg3qytx2sDT4TeDGEgJh4kkRDQ6GJyVtMvsYBKXQ7YEf",
  "key5": "5yKYyHdsxWwuhwFfGmDzMLf11xmByHcDvrLSSdnD9D2gyGakQzNNyTgHtBrEWjzfFAZN3SbJFw1sZqSEY3bnYwCR",
  "key6": "2X9Ldi6GqXi2N8vc3pugHbKUnsPQ6LNHDiXc9sVzCkj5fgrv8KTBRvq74mz69t6cPb7292akTkguY6tPSQ5J7vKx",
  "key7": "BCnHmr1hGiQCtYDQrFNK75Pn3gyLKCgdBMSaBJY2qi8RLGHTv5K8TaL1mecDWLvAdMLFK7m19X3zCmbYuac5HKW",
  "key8": "5MPCP9jKVdXK5DtpmjVTHywHoAEz5DZPMbLY3SYQXrD2SoLdoqFMz5GGH6nAp91fqWLQrzm9thGuNaZwCDttHHau",
  "key9": "32rvT8GCFZYZwvJNhCLh79xbzJ4CTEFRqmaggUEVSr3A3oSZGv4XyWEKF7jEC767htgwGHcZZcstALXY3DytS8CB",
  "key10": "mnLP6LXzYvMuwN5nbgrRPtHSrQdsGds4RFFai8gr7Rvu3btBbxCFdWBb2CSpTSEwo4CxNThRtg8DFwxZBjYYf69",
  "key11": "3n6bcM3x2VABdtYVWdXeoxVFK8hfwq7MbpYc4iJq8b7JG67hEr5nGpw4YXb6jofR1GPmYNpAtgpXqrJKvxJsL1Fq",
  "key12": "281dKxPKGtRC8jjmnYtJMnrBqC9qaVV1z2fihEbxmr2jt74gJ58B9wCm7rECJvbvyVjKFREWaLMSnvCr5N1XwYWR",
  "key13": "pZFsRwrRDrRFABoprXaEmZZ2RDSftqH4jUuj2NsYpg4v2pDyCvQq8hvULzPpfHTw5hM7ofxSVbw9tXd7e1Pn2yf",
  "key14": "48pP8pnQ4MhiD4XQhUHEfgwxL4YQA9XzbRbZ8HggX7m8fT8uCMxsEnLoqe971KVcTLPB7CtJGmru5emUvV2cQhoB",
  "key15": "4UfKjtKEYTr7CzmUKhFC6wMeNn7C27kUubmKtf69uDTKfKy2AagTFbXBjv7ySQMQGp8KcWLKqBFUubT5hyNox4jJ",
  "key16": "5RVETH5ucaPRdyAab5fMZhzZTnR4dFteH53ZnVGBMvnw7XCW4WkGBnwSWoZpYv3xSHEBBqqNWFmrQKuhf4u4PxXA",
  "key17": "3xdAVkagHsecEebvB79FtjhgCGZXEsEofe1NXDKXm4RhE3TccgiEnCiXfBTGzqmAnL1KehGt3Pwsh9Uvj2S9SXGi",
  "key18": "2vMW8KxVj2uSm6MqA6rULrkc6FBkeLjrA7sCCQapT3isg7ejn9UtmxSkugcwdNJW9xTUYfP4asovjhKJ3yKRQKtY",
  "key19": "41gz4rUitqLaYm2KpUZyPCGSRaMA7p3XVBTrGuPQVLhF676dsLHd185YUbt9K37LtwLnoK5b6ieEQ1i3BrPjz7v7",
  "key20": "4NKkZ1HYvoxrcEg5QDDmPSS7ioCR6Wp3qE8CRVi3S527xTQGCJQZcHvGNP13NtohDk7mEX2WMrk61rQCSvzCTUXB",
  "key21": "3gkcFGndhjyCHenqYMRb7YByjpCAxC1Vw1ugZvRTQ5xdLdcfxLTn1MVvBpUx39ShSUVmFZ8KTfxsggAaWZ4u6uMf",
  "key22": "52DrD2FGr4L7hCVkWj63pQqn1MWreyDvBht9cFyX1bVb7nTDDwXoqbixsR4BkHhwxpfUZUuJNkY5VX1fVC4mxUAk",
  "key23": "5eksAsMfoiy38TtLMXZuK7NohPMm2TBvZExiP9xE6TcCns6b9fCmc4PumKuFDJaTsc4k6eGCQMNpj7556p2m9jd3",
  "key24": "5Am9keuwN3L37BqiMi7DuMpHeBTAi3Wr91qPPz9ebGfomGACDAyAnAQme8BQGqY2TkZwaWJFHM1U51PDQRxxdggJ",
  "key25": "2LQw49Upbg8gpXc4MURU9E7zEkmXSffjKYmRhR6G28ae1PRQQHaKm5Pbe84Mo2ycMusnvjdUZ9xYJ2C23VMXQ9xo",
  "key26": "4iYxgZX4D5N58DTus64ZeTVeidM2ZpNhVXhPkGZ16f1YjfPeDPK7LyjidMFU2oFiKNUMsEE2t3X3146CzvEVdd1u",
  "key27": "PAMMM1438uoN4vyyDZeuDY3hdZSTdW2vkzyCNasvWrXwaNXruAE3EbejQ3vhTDQeqe31DfUumcAnd9o7CPRXB2M",
  "key28": "23HsvVtyf1QmnCx7gQ96AuYeiL8Hs6m7paCgiSPi5B1egnfSekYBQhF1sdUm1s3PLv7sEB3HuQHE9A76uQMYF5i5",
  "key29": "2ALNEcSipjABx2MXJgcKg3aCi7ULufiMeRoyDF7VDMYBMDgmyAHYnqSs8uJcgVTL9ANm1HdBTG57bPN41WgHvyLb",
  "key30": "4mRZcuv9yHwYea4pxpayB5rSbpGD8fWSmu7cVhZB5SJBtPxL9RoPvGqAR9AiG2tKvCKPRmGRvkhkSZcFSPiqkkxX",
  "key31": "5qxzKiNdsZpCvFciw3bTTDaAfAi6UkQrC7Lm7EvFBDnWv2WC1nRsc8APkGDSszgroNGJs7CAEzy1JykbKw1Ay5bf",
  "key32": "67RS7oGizVRT1X9RmiHhsUoVddLHDgNVuqrZ6komptdPE6fjVauzVU2Ekm8wzoBRmGFCgwVQkCcaqEue4HUWneLD",
  "key33": "3eMEDkvweW5M9WEkdFA8YU1nyiEF5t6VXu4RtAJNvk8ZXzsXQ1nunRVv47G7uPKubrtjJHScwBcwgqog2cGrZyNH",
  "key34": "5fCDzq9e1RP4pDYJtqCkdydaJczjRNbFCZgzXHkXFiSMzJEFpfgHmFoE3oStU5JmG3TiQuE83b2jDKnh3HxnNyrE",
  "key35": "46WpubM29z7st3HfdoZynwQKeWif5atSsGXvwfD3matkyA4WKvD8L4woNtiMbZ621f4vPugN7M8P9hy58hqJ3cik"
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
