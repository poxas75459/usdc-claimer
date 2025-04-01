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
    "4NDwugchiaWqSY6SHQ5tyzc9j8bdPAPq8p5TdcxZzNTaHFqhcAvRch86Fx4YZWaYBYE8GiGcEw9VUydvebaeoxho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6hMZNmD7cp8sJEXBaRyLZos6gMwVZnCkZ9qg1phS9D9uHwuBoDxN3NAAy7Lj3iV4bwRWgMPh9agEfagGbqwWDw",
  "key1": "QsPZKMxnFPu9e2L4dxFhNmr5LnuWTgH2FoRWWe16R2Noqe4S9cbuPrmned858G8BTmvBLfMbNkNHYeCZq7BtzK7",
  "key2": "4krkZ7FRQxkDUA29wrryTDNFX4o4obm62uoA5uaKcXQqjj6F9532cZqC5PYa6A8zn2vZY3HUEB1B2qEp2bWgBPrQ",
  "key3": "Hp12WnLFQQT9YZhoHvZrqAdsmk2vbbm16ZdyaFJX4DCEhLcDBjHKnApqhF7jGSS4nzQpErMVoKrjCZP3jbZ5Efs",
  "key4": "5NuJdMhy6VtDvmNmD6tBtgTWtNxFAmiK6XgwVyvvn1DVDNr2Ta7TYx6zzzuvyTkm6X4USuS9mohrz47ebBj7R38q",
  "key5": "34HS3MgvZ3pfYLtzzbJ7Uu5kZ26k4eKYpV9SFwSCzdNBzx8uEmLcAC8xXDS7ZX7uZeY6KLBCg2p1ahVVjudgdjis",
  "key6": "5CnkPvxV9wjQKKdKv4kT3yL1JqaAWhUf1Gsf5z5xYRMDBP9RczmoE2sC1uXAHCrZud28tkeBGHPNiXJTcYrJbtk8",
  "key7": "4aR2j5jN3yVLw4gibWoKNBEHwAHjVedhw6iDZZkeDSzyx5ABTdEcpQZ5rPqk9WZQiNQ3MZM4HGeJwveKDCBvZqso",
  "key8": "3Vc2z9F3LYyRvZdQh3GSth8ng9FkX3SvPaLikqmUrJq4hUxti56dDbbMxWBW165HKD4KjHRVBpeTTq6CymBXL5iP",
  "key9": "PKfe5V6fBQDLuGrGhkNEWFWiG5JXm2q7CpaqgWvUG137SvwEm6wjGVN4TG5WGmitcfkv8ixKFXTkuKcLvevxwyz",
  "key10": "5DjiWphNKLMAYdKtUNmaeWuVqbWadQzptCdJRqzDzKs7dyp81vwGHjLUJjop2gdS8RHxmQRMfze2oS28Q7qRPJKG",
  "key11": "5PPgrd87ittodkgWnDgxuPcHkR2bEUiSFpqBoN943AFz2L5B3chrQF8YktsjFKrz6ovnW8TqT5Wr5Nq2oFHVYZdu",
  "key12": "3LCe9sAwLSaJHZTMTMFiPXpoHLHQVYh2FnrqjKp7gcFtNTievKEqsK92xpUqcphSRJ7QkXj8KPsEigDse8bgwK95",
  "key13": "32FzMki3XBbUUS2NCWSHjE3pHCCuTeoQiNw6c2FrBr2kim8mocm5JdBarn7nQA5fjR1rH7jhMTokMiB9ewkFAsap",
  "key14": "4rk7pNix9QzWMv8tfKeGr57EK9VVeZcu1WKPb62rqQynEwfjJdFTJFcLsXe6sLhR2byYCrzfocsp3nFUM9fqkTaT",
  "key15": "Gq7trp74Nf6m8Us1QUnDXNpZyHfrEz2yweas7L1aDdbnAzuhicxKwHmPXfdjpr7nSNCDxijJcSwTdzsa7s1WWtU",
  "key16": "EDY98taZAziKKQ8xyErGnACrB49WJpYxfWME5RnwY3ieivWW7GnB4N5kf7CEjHQ8aVseXhbnCdAmbBYGNZ224oV",
  "key17": "4nLcyWkhucVu9a1Y5cieoe7gNyUcKV6gZ9ACBeZtWqGaSsjDSobke9q3ekBgWgqPLHUepxskDAG7jdsgqRSiS4tH",
  "key18": "5bRnFJs8kmd9wGRtAqpnSh5Dw5NQAP9Zb7nX6PugjC5dadAfaLU3YWuLwg5hc4zoi3ZYQQqQ6W1Gv65panUW3Sjn",
  "key19": "56Hj2bvT9GD4228FGo6bokNt7n2UK3Y6H5spmZ7oNyLM1YzFjxPna1ntnP9Tr4UNiVEQT8C3u2DkEBmv8rPg7YMH",
  "key20": "5n5Jzo6HFywwxwLnNeU41ZXFsdBaG2kE2qK5uaXY5bJkvAq5FXknoiNEBvJHabMBVQt3FXfWz6k6aFNSWugHr4DC",
  "key21": "2QPMpeAA2tQ4fVrjbHEpP9mAsrhrL33LTb842nRBwsqVvbh4b6PUFJhYN6TAd9efgm4r9EjcCHr9pquJ2BubkR6c",
  "key22": "22S9wPMUH9GtEKkfqu5Y3QVdUdH1C896LyqjrdwkGcHR9w7tf11CfgGKJ6aobVWpNcyoP7VYvrjSbKjK5ryQk2DH",
  "key23": "5hENxorAypX1fvuWE4ReZTAXnvWTrFh3kUaEkLGKL44wntTJ1J6a19F6DuZrL1AUjajzZhq5HuAgFSiq26Hyr44J",
  "key24": "3B7Lo5KNKqHZPknVtdN9xq3auQ9G71uF2V8XERRp9F3aRhsmfmS7zgrmD1ceCSJgR55VCKYH8sTgNV96riktAhBd",
  "key25": "2MDuQJQAZad3Gxf4ha17QuioYY1SCsDQcVJg9JGvFhU7Uaein78vzghrXtJERg2Tdoq3KKEW8fE4dzLMmpGFnNWe"
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
