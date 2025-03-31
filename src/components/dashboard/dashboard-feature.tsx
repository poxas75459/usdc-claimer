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
    "5sPUWyQago1PG2pwyBCUEqs31GQ2uV13zAgrhBMvBsRBxswvAxRPrmBiRx7i5dhaqVaFfq7bJ8Dxh2jSwHio4Mh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWDpcmnibuq4vKxqUKP4yuXk2rX1Me8rGhqPsNQCj66cGDgHpCdG2854DdirixYDDLq8anKWbyUzeQEFZfjen64",
  "key1": "3na3aZJbUxsfKkGnVNS6KZgkNAWnb6aS9WLdQ8BNJcMiVndG77G2pEEgXSsGGQsMKiXF6t5VuHgjrety3LuTXXzj",
  "key2": "2SEHd4pFUYeFvnUYMcFVCypmo11hGJT2Y1BVpPfhj6k3qDucUvN3eRx3V8h7ZRKz2KTPJT3XtAtkXnJ4vvFf1smN",
  "key3": "4BNWhVerM79gcCjpT1NQ3msm9jjjnwPjwabGuAGo6V6Ua8M6x9AH16MZRLzrU4cSgmRL1NqHMLGDiSorF9c9QNxH",
  "key4": "2raswr8vRM1GiHbpwsQKafNKDEPNPfUcAYCUP1ASMXPRcqAYWUhd4bKrmZVcRZoffmRevt6PpgPhMPxDcnK6BUYb",
  "key5": "5iQXTRRD46SxmWFKH8jQppq1QzFgRodAQWPCjxf7kLsmVHXWryvXA72KDJkU35wT3aZKWBwhW1QkG2zycaSumJyg",
  "key6": "5VXsfmBWoHc8Q652R57tuR5JZWp9kk42Hv523EDVDFn9f2um162AU8jCzRvQvX49GkroZv4gCHyXry59uctZDBFC",
  "key7": "27rKJEb3B1nuZMHafQYP6uyoQ9zSTYn3hSjAh7y7H522gmfrpjZLMtMngLp4LTW7dJktL6msQpKcbQfh9jbi7n6J",
  "key8": "44bFQreK9PSny3MRAkWRG8r125DwquAooomp1yiFABQzAnwnTRJLdWYr6EhXnQqCQrtB5y5WyHF1QvHgi5ED3rKG",
  "key9": "w3pxbB7dRQRzvT9bcTfBkJhuqWg7kdCCgseuoHy6sDemCatUMfSsqUuVx6iW1VEg9RZ8iYQWKdAhABcDnukmdhu",
  "key10": "FhbFL5HTShrmESbVwzJUVvTJ26BSK5E84FHCVhiJcSQD8yomzfejkmM41mibKFDNSyZHPu6gHv4NSgYPeXUVFPG",
  "key11": "57qPSHmpuAhm8Mcq2HvGVBneKHgjq8jJbztV7Aad3bdKoSzBcNJ4yb5QQr1Y67fmJ9x7oLhuTSsXt9dJmsFEztwe",
  "key12": "47ZwJ3WYdGGpUaHhnescTjvb5fisQrTRB4bb17CV7y5yRgxGLDVPzgnkhv2Vp3EzHDSiPwcisExriDyR5z6krsf3",
  "key13": "2bosoMz3w66p2ubNCL14wWUJfDFuXUMkCrBB66vk4qK7GfhzXzNHjEwoKLif2M7qdJyyBaKHaiaimyasn4zPpcRe",
  "key14": "qTGxGhLkbc85CGx8Uhm7AxMZU2YFihoXqT5cAd9kGFfutNq9pyChdHneyjvJTvouRvKZDcoRrUbxPUgMGYmmppr",
  "key15": "3wXKb3FGxAsukQMExsibV3PeTStjyGBFY5735Lw4WwQsDDgwB3ruqN4tRSW3AzEmWLNbnFohbpYeJTTg9CiNNt1M",
  "key16": "4F3V6gJFT21ZfBmEiucVX4hFK91L6Efk9gFrej5oM6pN8RMJgkMiUJA9MjShKtq3CWhg9otJoCZ1RD38oeonaWwq",
  "key17": "jaZb5A2hLEvpcrPk73vV1c1MMPqaobhzGxvjDghgU5m2bxuDwwBjE9n3LjtHKXJURJzJ8Za4Tfyf6Ds3pBB4V6t",
  "key18": "2aeAyykbZAGzc8JuwphLPXdM9jZGW1aHGSsHqPgxZJruZtp5uH2afASLMKqCXrZg1rZhMGtKURgoGdnbvcVFHjRw",
  "key19": "5mX1ob9eFx8c44FcNTvVPfifvzug9amKJPyxCxijZyDTs3dsB3HMZaViKkZnDNeHnEMSs9uQKvK1Yfvekr9VGTAu",
  "key20": "4EBX6iTUJV5rV8DDA2oQ4rPrNjDksxTKsJDKUi7utJu27tv5YPN6VANRjspeWJqPMXx8MwEm56rBEKghpQWBzsWy",
  "key21": "23TqxVzPsgRptCyRYXfjq8LjAdggcnBqMF6HDLb5TX3eWUh3vVKhbFB3CqFaR23wyKTGrCAFX1rJMAx74sjhsuSw",
  "key22": "5yAtRe8MQ43pg4iUSPnm34zzUFQweuEKKXHj7UmE7WXzTGSg4Qr1UJK3kJaikHXc3bKGygsKfXVUiSkfRBqVitWc",
  "key23": "uE2AwMvyQxeV5uctRHCuJB2uVfH9QdjGjUyewCKFshd7pSLK3iNALcD7ThBjeaJ9y85tHXEMgUvPju1n9zJipLs",
  "key24": "4GmF2Nq2jJRdYTYUc2JRD5vmQJCUzgPdtBnWjaRyBz55Ka6obQD2z3R48HLjn4xM3UM1G2FjNetrmNCnktqNW59n",
  "key25": "2kyFxDZpqcbpEVefwHkQtedQMkieRref4eEYTbYUoXMYYYHhbP9ATtaiWUbxmVKNYv4QXsXxDiAaZLbCuvuHzidw"
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
