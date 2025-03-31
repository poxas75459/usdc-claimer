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
    "3zEvqGQHK2gZitGYyFQEVB2niFT3LDb8owwrEwZV9FM1Q3DLHa93CL9Yqbq2deWXVvk8oA5WjFQhvTWEidhJtEud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCDbkRdkq1S3YE22Azk6YX8mGzf1SRiWjWZKRAzVmZvkQFVVQ7rppuyudtzLa7BuJiWbDNo5R736Z3rZvHY9CCH",
  "key1": "2nPhYPZTubxR53GV1guRGQzCYhxw9SHibKgV4ET2VURPt9QQo5o9msYXkHv18StavM2622vEExrFQqmxfZxZzWwv",
  "key2": "3NvaGLacggtZWWruR8681jcXBjwVTeLtmY7ZAfYTw6cQ1YxzJTn6gtVQB3CgNbzHRhJrKzPxiGsf6y4FkdWcKTwj",
  "key3": "4dUthuHUPTPGBR6WLcmZAhudedRBxogg1Cxdko9xCNNdHGYQPMSNYqHRtWi7oUwSJ6K3ouynsp4bXdXpFtZKybJe",
  "key4": "2cTmQM8hAcjMRHu4eMg6eQ1Umm3pAAMnh1mSjSWf5feSbKDrQ5EyL4CidAiqe1SEPxoanLP8HL7P73wQZ5wnQisf",
  "key5": "5ZifsqAUkwLAsfsxM4cannrzrHhTzLwrxHmCb5oMrsesh8TFf1hCdznv8TzyNdVeYpfH8ermTFVcjp2U9RmhtKGG",
  "key6": "4APMX2BXJGVhxLsGMH1pwduFaD26ZrFDUtveeeoNC7Pza6VfVoqBRnsLJ1qWk5JbZyZBHv6PqYbheWBjc1PawXvi",
  "key7": "3sL74XXZV178pUuVNFH7atLZbBcrgQvYzWsjCHe8tLBuVk4owh2DoKCev76vXGAgjugJiJwP8KGabxqjc8G53Gyi",
  "key8": "2MgN2ZjWDN1tCmm5KeJRKs8eDBc3V9v2n5ZUMzSdWTaPTBx5C7m7dFyhxCf2oSnK3vECA18ShrjmFgv2cKcH9gUg",
  "key9": "55fNgKMu8qUz6BbfjC3PFE1BeKRJuC4SmefcLWQCWahhetHkg99zsLgiSJz8Geuz3r8gbDGZWpyRAW1bAthVSmwd",
  "key10": "3t6JJzkuuRJr3D1NZsZU1QwwjtkbJH4vmyHkvQLRbw3phQWmmdvN5yiRVmhPD1NrNnNC7wgaHtprMTttb92Lhh2J",
  "key11": "5BMc5u1PVF4QNs77KVqnyWUEVPsNo4syx9BjuS1aNV5zhhjPJEfCKSsiFyhv8XCWkyNpkLf1JyohLv8LSDwhUSn2",
  "key12": "4QrMFhekWgLp2ewppdbE7Q9kNxv8LhFcHPFDoCVD34B1RJiuzEC25Xp4MTEeJCe7e8cqWoy9RkiZ12yJz51d2565",
  "key13": "5Hn2Pax54TRJ1rwTRGaeV3A1e1ubMzwZraedMj8CsBBsYVaKJ7sGSjSxA2VbaTZyLFKFn3qH75VRdkFZEhAssGy2",
  "key14": "2a5BCUBCmBQuqFZXJ2VPKpNCNYxiiK9BuJGfXtoLHMF5364nALVSPFiDgBNDay9ozP7yooAAQGRfkjRK9yZgMxQU",
  "key15": "2DUbytVn3aJDMUouaYFAchHiPo7zbRphj56QiuPeqMRjwxvjW6MtFgn9cabAbTsVmewCwKawqqMrgBZbr6CCpj2T",
  "key16": "5jVfez757UXAnFfZjbP7VRm3v2c9RzFvAm6EdojTPEPiTECEsMp8HuqVNS5R65TBWrD2Sc8znRjfBFVK3u1VWvqz",
  "key17": "5VRMqt4ZXNnxGApKWkSwRZrp6P6NztL3R4PmGRKXzt47WEVfQGCA4Q2bpMNnxLnrgDwi2YJKyRKvuFWtfi9kQRev",
  "key18": "3jRe3FTsgWK5zGUjEk3KjfxHCSRyKxV2f4vt5uU91zwLhimamQsuCyYxbZ9sgJ44PAo6a9gRDvJHP9Fq2y4pvF8a",
  "key19": "bXCNcLaX9dvkcuUkT1VDEYHTsgwTyoZke6D5ptmjBDVqrqruM5Sr4nRRaWaZ5JZX4S9wPu5rrAxYyLbMsQZ3GzJ",
  "key20": "gryZJC8eXj8rUaDVQkyVKCzc6h6y8kGk71tarCqeBvKhco8n2FHVDHDWPRcD8qyr7yzzkEJFYmCQvzU4E57WTiL",
  "key21": "3Chy2LrPZQY2qDJ5qRnQ8U1KqcJgiEa7pEADFQUnKMcJ2BnkMZm2KTAdjZfRL4KgYb8d2dCsmcM4zPcb6YQgq7Ga",
  "key22": "2VyhrFWM813WmGMLV3KysKDcN4HgErhPgkRECMUSrQxVdH4K23TNMt2oDNsS7eCQbU8XCiYGuLpJS4K3JK32tiqJ",
  "key23": "ttvzpUTz14K7chjMaAzrMckBsGNJ8vZoF63c9h9XCp1Ey8F66XBQvWLq6Z1JWvM8zJyDqcVZvT9NqtY2w1wWLRN",
  "key24": "4539vJnmo14DPKSQci1P4b3ZCwM6mGbg1FU6VrDLH8st1ruyjZo3Aiaumj5wS1uhdb4aqRnra7YJuJ3owp8mRYm4",
  "key25": "2geFghEU31MB4uVZCdAvLxtPDbZYZ9s1ZkWXv2cbzN8WvXitA8Nxtv11PkyFrmZunKEospgmh67tcn4ccx6wQXyN",
  "key26": "4tszy7LGmJ1BfhrEzgMfqvdGozMmC3MtcKGoA4qcXLxSsKhGAKRgcP4Dk8p1XHGjmouBvSDE3LK9Z6HtzWBvS2eV",
  "key27": "2wWpupc5JwH1xdbDnc6LGYk3Bh1rGVA8RJBvAcRyDfWJWgkZNUYcQoP7L3qhfXa9mQV4J3zDbojSAB2jxz2R1G2F",
  "key28": "CDkc1kRfWQv435i3599FKb4AsX5vjiJXWtTYmHeSGXaTgLEwSpqy2bVHDgttn385sPYojWkkeSPR7V5qTiw6EUx",
  "key29": "rRWzFogi5BPXSUkm9M4QeDTwqa3WvCx2dXvUc8bPp2FUGWpELJQv7WxzmobWMZEnkqCjXanptibFpvZYJCadLUx",
  "key30": "5GRxHETbTwdvEYkn41VYH6mEoBHtk77eoXCJG6vb8WF5EFKLWMn5xcy588R9QdTqrAnqpdCTcLB9eEBuTd6aoj8w",
  "key31": "4jwyauehwhtvrPA9rXACzRDZWy9P6dRqw1xZif8VegAY6PTT9guW22qaPWi5h9VTwPoe65kDYFLcuKXEH4TnTPp5",
  "key32": "5cB6tVi6b7qoQ9Xi38faJR4dSYdEo3bpSwyfoj5JzZKSQEuvgDE2JXopkV7gxzxEjZThGxcoJiRYw9fL3NT9aj5e",
  "key33": "9L4ZvPRYscAiCaYsbhG7ubBWTNXpEYbZukn4UhV289ch1imF11ztXu4TAygKar3xtRr9RmwTVwc68FTYTHMFXNV"
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
