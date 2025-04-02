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
    "4KJ4p875Gx9p4VKGAPV8tSyJ2tB1vCzKLUrGieEDvbfik5zhS9fyXd3f4taWWTCTwFATBgHa9oMxsW8mvXzSQhKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4528L7NVj16ik76kLKDsNiCTCUxUYtQzvgxr6cCpu1EPvx8dmkJFA2XTVVWrsr72BoePAvmejuSGx4HG3FGkFyer",
  "key1": "4t9b3wQjkgYXJvVWp72GKn5YZrYEMck2oJmT5TejKaNrt8tqUZHaV2D5hwGrxa7RPTuV28eTkRZJHMyUZuJSsPRn",
  "key2": "MeEpu8KSk3JkYD2PRENhDLhE2bWSukyFZZqnpTd8h6dRoxHcEoTcxpaEYJU7WX94sFjkuVANLE3pQHh5QjgRvFT",
  "key3": "2SYkmBqqmjdLwEFqB3cpsPbDhp6jDE2AGubksyosNdgTH3Ax6UFAnnJhYvosGMU55u2DZVd2azZ2P8Ampjn1mSct",
  "key4": "2gebhzR1PwiPdGVG7K74mprHvSCsxQaNPtkqURw3sV57RRqzT8AhLs1uN5t12zTTQwY9f4Y82JwAjUi3TXb3U2uV",
  "key5": "2rEEY7Fh8tgynRcmaw9yEmZadwJv843egT8P9XtqhG6Fwd5J99siYXS4zJHhNETPt15j9V4jRHyRzkjmVXS231g4",
  "key6": "5KaNEiNmU4mkB5rLkDhAt49HUaeYzkvfqAxcn9RUmEmiqHZPMK7pyv4rAe28aJd6L8cp8XJWpMws2gTx5ZX7W1sE",
  "key7": "4mtQuBwXcrFCqNKcFZKo7UyKczicUcyqUewEgT22or1UmtiA36anCbkanzoXXSdumk4UYQUZdsy9fr3NegRC9BJ8",
  "key8": "4JZRWFL1cNu8B2bG7Wcpuo2vR6N4h7EpEEkMHUK2cTjjkE8PFimiDdbbEGWtP6TpDrUp9ejwPmqvR4Bbe9H9Sqxc",
  "key9": "5DeaX8wkvBUTzJ9EhrVTbdZwK6e5wrdmQnzc74vVwxT427cDwsfnH7PntGrxetpXjU9Vcy8mcSeFaFi1vpiXDfHd",
  "key10": "3Pe6XPL1D31pMwwHnUMWweyYBT2DVpuGB922CrjUSXQGsS4J3rRgwPzfH2bDSGCizbWVhdW3wLDFgoyhARjQAEoP",
  "key11": "4SnEBfqmBqaRTSAMi1oBP68kbrjzNBQqgz4jgZ8fai4wHZZt57tT6DVUWCPcnwfT7ajFWxhE9DZEobFVPjCy6Y73",
  "key12": "2HemiUstMRFKKjGQzifDQa5CGJ8qnXoF9taAkJv1YweBr1L2T7VDH3M5EqQoYFdpGAbWwdVRe1591tXsPLrsDZk3",
  "key13": "2FyuR81Z9sLaHb7Jjp4oKENnWgQfmMv4MToPUnei5jcSqszjWHwBmVPKA96bcydyw3bUhgy8zkRCi6Gj4pEyLAme",
  "key14": "3sduX6mGbuizc18CC4rf4Uc2N3JPQmub1U7gfS9vivVNd9muq229W79BydtmAzpTzxw9Q9H844yxQvfjCZ7QKZaj",
  "key15": "dXrVbzCU6f3HND4pKuFZPKDhfD3qMo76CgqnH7BZnymDJB6fk47pRacBBhnnbP9ZV3BNhBaR2QUjSrotGDQVtoQ",
  "key16": "5KYF9Tb92ho92DovSvQ9qKgJLFVPNTu4Ka8GrxmYamb5kqPrdULPefiCGEkHA82Ty4FmrMbzrhHZZPJkyzDhqgm3",
  "key17": "3YCUgSQzjg26B7N4QzWLoepiufejEjyJhhvkA9whdTWHi8cWUvw8MLDeJQh1SzS8UMJtL2Z1UXbcB3DYshDqURYR",
  "key18": "2EvcW7hM9fLi2gHXbX8Av1NDV6uuRvQz4tGaTiky88b42gBggseDsxbznMbiWmnYxh8FymEAtmiqf5bqQ5WWHWxn",
  "key19": "EWXTC6aLUSLzfiyz4FiPkpXVeCkmbASnpJvfELsp7AJuwgpkQyYs1DU7KswEK5dGazsaX9wS2K54n1pAkzFmSkG",
  "key20": "2nksZE8q4hgAvJmP2ay3wpKKBUZBsz3R6eKfbtKzwVo2ULR6SPKGo1EznAbPRjNpCZHGauPMNts3LotQR92K36gV",
  "key21": "5wWxy2q8V2ZnhPSQoq4tiKKMMe9KeDrN57QgUHptAqt3uhz81bZPCV552Ga2UEFC7jDPsU5fBMfoAtxXyeRuzj1L",
  "key22": "ppXrjSaG8nBowyRiQQAXzFfqnQexAL1YGX5ZaFpt8jKs481Cu8vhSVYqRicRsZkCEPmc5esivJHfbQF6jmNzMpk",
  "key23": "YWP37Xb4UeUHhmaNuXuk9K5cPXzSfFAi8pusYNbvXawqS2H4HV1mP9T9PZGzFjAuopW9BHketBRtfNUhme45dPr",
  "key24": "wtAGvF6eQFre9mWgkr8MyA9hKZ8FKwcXPtKaufMtLghEpu2zgtKweVZDrfnMsNzupvhzwFQo7299sGP2yEab8U1",
  "key25": "jUV5b8vimNWyHjKojCK72Yo53kQacZzZZRBgePtu2vL8Ev4Q6Mg2RgWtnCBpwPYPy3pPL8tpQ7fzqXrvpLXznCS",
  "key26": "4ZLrkKiFygqh611DJ6c2in3GiJboCKhZRNbuoaMhpTH2cMYsZZcbh6XPvdLbRcdTqPb5VnqdtiVCzssiX9w8UHb7",
  "key27": "4YmuuohBBpm3D1nuW1YnniTns34oG4cjMM6kS6GtLQ9wnym5ZadWakpXXVgcBQzqr99BsqZueNeqT5inix9cK1a6"
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
