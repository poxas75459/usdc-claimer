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
    "48uVHxpctzsVF5LAPmZ7TKVYkf2VC7C4yRpnC2Lkdnap2nPFKxDb3pLRvSWJNJzVoSphUQpTbmBQDKLCQR6LXDUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjpRWvHPEkShyUEdUqzbrC9RNeoChTFSBwfurjc5mMQmhGj5syaNMKRY9kLLC4Ew6AigPYq2kW49DTtk5jui9cC",
  "key1": "wZf9bm9kx7TdjomYwyNra3T4scJUatKbAFFrp8nfkyfZzUxGHxtjHnYMQbge2ej6pYYKs2Euhf6fUosWPwjysV8",
  "key2": "VYgtQRw4zeGvt5g2wmwtuo5E1USiFbeZBdVeepEyhAss6ZHJTnEvWGZU9dmHKg3iM1Q39mKUEgmrJ9c8y4Zgwv1",
  "key3": "4FduYk2pM7xgjzdCzqrK3ADFtbSQKwXvGRcuG6qPwDpiLaG3SRhTfMdHrDH6Bspe8SJRsuD9aV5HRH8WBtZrapRT",
  "key4": "5Bxv77TR9xhSVH5ncYoTdwMS1ig1nb9vEDyHLgmSEVD8JuqjakZ9SDg6SCS9WqUhcpw6HjmXXtR1ZEkK9YxyutCJ",
  "key5": "4wsGB6NAX9SqCv55hViLGMeArW1EyNRjybdF4eVEN5wwizqgsgfSdQhmiAsMPhspo7kxDk7rm8zVQyFWFGM866ro",
  "key6": "42QrwSsv7cQk1LNb6uc5B1CgFzA61QdWxXMeFyYiJPP5kV3uyhKBvKxDjv2DsMTo9Hf8oE5CWR9CRVjd9EuNvhQH",
  "key7": "3N6H9S4SPkRvrBi9VqS3wXdqRsgWrcxk88ETKY4DvVWV7QZVm1i28U5pZQgAH4dtrNTDjmJyQqzGkfXww7ZxQTTA",
  "key8": "3zE1cfh5gYgUwCJ8z3gzndLHyJBrRv4FbWfgfKwua3HXSKfpkSZU8RMBMDhA7qFL8N96p4NvtdHoNZ5bWy8Ba1Kz",
  "key9": "5ZZmJmbmDXtAGNnw9uFaFLDCZKQ7ACRHSRT1sgR8XuWCNYUoQLCmjUGe3fcGWarkMe9zKKhmvPMxnxbMsv9wBk7z",
  "key10": "aJ26kCwY3xMvuiAmnSprgiuNsZwSsPRTNo5PqKRXkv3qzUAFktyn9Yj8iAqQwjdTz8tMLBru18w2rKXQrATtUue",
  "key11": "5qFfXEzbud68AgtazwSoydZbMRVxSHkfR6fGHKEy6bgm6eoAJfvNFsanxj3QLryvJ4iArdPJx7zRqCNQRcUKFQ1p",
  "key12": "4XopWtwDGfKLvbTPnQNxGad5AkfH4eoG2WzrWN86HJCqzjChccukyN5psoZgZu5muFu5FuxUuuZ4hDceWP1ZSzZe",
  "key13": "4ZPY3V2zzVcvcdv6Z51fZJMQDiq2mY7PVoGi2DfdmCuEKyJhSaLvstPFZpgFWv3bhUL5C9jmXBEeJDbuGLQrqdTv",
  "key14": "38bdhT6SfYQ2aj19NzwxarNJX7kqiJcb9AGfw8rcnewPxAsNfCUwM9r2szk4CsGPypneqwQTx5Dt6o1BRK15C46W",
  "key15": "2KN2S7i1KXWjj3KnS5JDcQ4dhWxvvuTzV5VSrYmUrj7JSg8YKyPyzNo7dZRDZt9es7UhwFDkHR74a64uXULPWKwg",
  "key16": "8vG6wLRTpULrqTPZRFpLkogvL38GDNpfQc8cmYe3jUxSvAvV7HaJks5YjafMywxSEjZaRvD3gGvB3tpFE7UgcKw",
  "key17": "4HiQUSksptXEunAXRBg65AsodPA5vbPASYgbevS3Dp4ZSjzLY8jjZsmSv8Yj3CJNV1SrTnF3Rx4VdNm1X57dcxkV",
  "key18": "5GahVLorchKDMtFFWCSpwhNRT2sdY2jReiHWhr8tEjuU4c4kHFydPYX3BQMCuhCu8FSm2xS2L4Zvm6A7f9mk3jt2",
  "key19": "4huMajAi6LDi2S2Q9S1nuoqPahcbURhWvtxJBY43p1TXBhyZ8RURTuP97G6W73H9nr8TNUU5wdXjtV8wpfn8nBWN",
  "key20": "5hxYavR7QZE31NX4WYpqKaxM9vZkmi49N5eeAmvbBsTSHNMJQVnpfNco9UGKH6sYvjmCKQTCRGuTFLbanrUJWr2Y",
  "key21": "3sDuB6BJsXeVQ5ajqnijQ9kuWWZa6gtKW6VrKozUYVegBxNBJWXh65LWqzvybjXK4dz2CKqaQz652iv6X1svLUDQ",
  "key22": "3ZbLNBy6G4JEfd5oKp2ozKgWHUm3MzQhaVswn4X9VMetDA664dthBVK5uewPMyrQ5NqzW4UqHb43iLPsHDvqjpfE",
  "key23": "oPPHbSd1rgpysJxYcMzdKcnsRQkguvNPSyDVBu8ZHeX3B3Ztfgc4SznJMddJB2P7KuBHZR9nYedijXxb8jyGF6T",
  "key24": "399ucZGkBLf8B7qXUCKKwF4Jo43jDfYJ6tRnCdh3YYEfyHYkM8MZJZgRhE6MWpYyvc8JbuhN2oAmS9VKJeBz7zys",
  "key25": "adWM5Db21nZsNVDf8huZhXQNbTK7jnQ9cfku4uekyXSoKVp5DWWKs9sjruJSpmd53KE2wcssjV2WTa88HD5Q9n5",
  "key26": "5vw5sYbcYGWZB3HZwMAxw4jRvTHGpseFsZmTQumJVBF7bndDdBeinj7CyHggGXDNgHN7jKonxcmYgPZDEZpRz1WY",
  "key27": "4oNfA22VrhUtPN35s5vzDWRiYnTykdTcAJtzB76dpb1TtzoFTXHsYqNRqDqgFG2QaaeUZKWXHgXwC3cpDZ2rPxYD",
  "key28": "5QqwpuPed7gH2KsrxzGx6PjFH5Yj86d9sTMdX3jDTjiEChHviB8PrZFtc8p7Cmw9tr6LvoFmBFcTXBWhACpz5zNr",
  "key29": "3sAS1qrjkFkoMU2SgrTcYWx8VFszyXqwwMs8HTrjjVxH3LavxoBeReDQf1qLbLrBoRis4nUrear1z7wEpDr3xz69",
  "key30": "E3YyxssFofVwMk3fWgjnnq8FA3fr3zfJoH4xQTcLJjDkiUhMKpf3ADT6hH1jzpDYd3TcTy67j3dMYfJkUpooR49",
  "key31": "5uGU8MranBjN3ZRpz2ch5dhw7rktbHBonqbrZJDdN33JPJPhowehckyLLw5DwRF9QT4GSx4VA6zSeHPTUusrk1M4",
  "key32": "5v6rNYc1UgN85fgn91mVj2Y3C9DkuuNPqSbtfbPSdBttWoBmWdt5D8MvZXfXLUWfJhmtFVhruXgNmpEMfLWU7sXH",
  "key33": "42UHZmeejVFQFnFLAdY9uFD1NfKvxhc47AxQThwGETVKiZ6JnXDRVRWMCm3UvJFJb9eEmb4HYJBnMLB6P5feEzQn",
  "key34": "3sy89rso7Nx1DFjTM6GfRnNvYzy38796zfWjob88wYxP3f3sg3y4ex3MgWMc8ZSTh3y7Mi5szstrpzSKGMaXkgzg"
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
