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
    "2zRYXMA5hGYxYsZXi6HemqtkT9WLeNbCXgjoQw9DRpDv3brq2aWRpgpnUj9Bu7SqEpWHmVwVBJpdxcJQG7HKSpF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SEodv7p7nuDJZ6iRNz2rqtL4GdmHaugkDCTjncBEEFYt5D15S79CztoKrDZFuZwEEvEmtKgxuG8GEDDyyxfRdVU",
  "key1": "45cvwtgrfx3BgHZiUrn8Js2HEf2U7KspqS7hk2CJVjADajxDB1Akct8Lt1ebuSPT4Wa8JtZDKJutNrcLNFPC54u8",
  "key2": "wLzvdcWYuNbiLZFi89aZ9KqGH2e3vGBcVn3gCbiNS6FnibJkist282CK4D3KdcUfeUoVvcT6dU7mCvUhSKjBU8s",
  "key3": "sU3AtQGKPCSinuEdah8Gib5napsWXJbo5Zdvrv5tKzNsszbHuAenJXunpc8xRkLCQn2njJzA2vCsHPjcAUkaLy7",
  "key4": "sh31BTnrQoPN3jCD6Abs6UrSiPmdjoBXtNJWa5HNqZto3Pa9E85HSJQbju5wWAwkrCGhBd6FFGeYgEob6g3ULDj",
  "key5": "3KTTShxNvVeYMTAhFS8zqqkSPFPhJEnzfeVKr2hyRhQS5q9nQn8bPENe5U2Em9NUMZiCqcE15zbgaJemsHrtPDZX",
  "key6": "2kY8oqpjF5HG8gxGHoXRPfREwXTGsEBcXRb9Bms2t8UxbRBLkCqJTBbtYXC1BFt2vxzx8SJceD6YL3XrP69TbXGG",
  "key7": "2AS8HuReFxavv8XHWuVcVEsBfXskqdpRpb4oQCoJp3juuQ14FsWq7T52BfKWLx7BfUhStHh64hB6bLNuamT4LFsG",
  "key8": "46AuwjdffXot2K3prPA6B9puAiekmfrw6eEpoakVkvAFnnNdMCYBTkNv9wAYTVH3QNV71HSXscc5NT5UCuNtmMKa",
  "key9": "4RfAwgraSZd6T1DicwPUWqbeZ5pZjsjbqrnNmcabwN3sYhreJkcn7fc4ZmgxEJus8AaPMuTVsSyQkJBa1R91ZgFh",
  "key10": "2YhvLrtLFSq8nxpKKTejDkrNU3SdQzyrpZJbXET7UwnvgaG3jXQD7aMrgRoxJu5TX4M7mgYRQHz8USDi3ivPwQzq",
  "key11": "5thkJJSUED25e6fqWahRXys6SissBAnXicG3BiwPryaDC17BMBSEaDG68KuhNrLBxGotoDB6vkpveWvhGVybmdEB",
  "key12": "3FwGwFU4u2Yp867HiMSExgmFdwA6EVpmfN1bwLAwV9Ym8jA1rdZU5rodVN6w1P9NXBSoPMkFhKV6PSioZRphoYR4",
  "key13": "5Kd2LdKf2rTuALXDdXpqXSgJNDfqBmkHHVRBdqbKee9dnQxT8nDSS2F48uJjeUf7wnAeYyeGn49xzehPPF5YpebU",
  "key14": "5261Y97oEZUZ3AF2jUJXNebgsjnYv2axekxnRb3mZXHMspMLTnfyf5ykwEewkMGphTdAEizS3ibqvDPno8b9AdnS",
  "key15": "5HnN8cU2AjNN4FcYqo6oNEA6tkzhZUb3UHAN8o2w6E8qC1WegwbnUQG5WmVBxQcqt9HnTvhhPYfSk8W5bPajsk5b",
  "key16": "5bHVoykQwu24nTBbGAM9PwcKzsRAFrWGFHdL9MQ5c4iJSQMfhXeRveN7sKcd3uqyektDseGnn5NSWkXf1ZC4XBvU",
  "key17": "4SUeY97Lt6xHxfoAnRU3JyAcw9CdzUdio1ov6SWNEvjPRD4bd3svyyhco3125MWG6rGHU3XFmw5Sj1HiC1LE2yLK",
  "key18": "d5wrxKDu5wwTCQyizrJUbxYv1yXswPqQTPk8ytu1uT7uMAunKMnRECKviCBN7GxKLeG9j1AJzisFvFVJApyLWHv",
  "key19": "485hdkoqs6FitrVRuPrCV9qgnom4dMeTvopDyRFHUGv7CZvHxac6FGv1u7J551fdeoQsKqJ9KFEJoRb78SU6BBhV",
  "key20": "4fvZ448XAX8KG6315g5BvSjPYEvXbYgSXNaANkZRno4bziCAbTS3pifZYzFaAzpNG1H94Zj9XUSCbabV5MzFSzC2",
  "key21": "41HesT8AexkkyWRfNv4dQbX4u5bfdJAborDjtsXWj1XKuvbGP1TFc7MkvxE5nUgAPKLRqD6Vj7zRr5VDYNPpRMeX",
  "key22": "4cYtRz4URWsbYEw9nmh8cGgiq6cWNWWsQ2WBDAQpUz4ehuThgmDd7qD1g2LqWx9c8u3mFgAEXMZFqXpsNEWy2dzo",
  "key23": "4xfHcBvdS2gyro6mxHuWXHyE36VgDQqFhPsgn2mtjdV7HPqkoqaWEC63bFa7xfJQSbQFEyPeUx8HmbmjV8cTVmAR",
  "key24": "2hTDiQtvuZdAyJvvh1Qi9n1TvNZon5P7GJoHYYWfdA86AoR227GzFgiaXymZRgbJM4VF72sTPVKrNwJRNFqPK3jp",
  "key25": "4EfUSJAT4mfoQbrrSSXFBka2QM7nxSxqcJA9fnJQUsiq4Pj1sUdhZfwdXvyKcG1eY1oBHnEMCsuFMxWMYq5jSh4J",
  "key26": "B963u3JwkQt2chNWzUCUjGDfdDuJbLWjAWmwKJ6sz1yY54rcKyV8c3VE9xaPEfdrCZB6YeMPbiujnF6rCxeNPZp",
  "key27": "GK2rjCvhPBDLGaj31eNvhQPLpsadS85owJv5VYsaXzY8kuUsP76e1U9obJPLEFcFrbuqg9fLCFD8rcmbJ93QLGw",
  "key28": "5oN2gWxpFVFpjpkNihE5aGZstVgVehv2Lu7VTxbC2d8wFduwcqTXUkVWQLrpVP7fbgnkaEerEbn1zuEm5gH8vXC9",
  "key29": "5hCUf3MvCjKMXR9UdhbsyMHXyqprdnjrAJ4Q6ue8yEwNZ3GjS4VHorQsFB4AsXffYMwapN3ZCkkTDXCj8agGQPXW",
  "key30": "32L85S7Wzfg3RdtKfn7PXMpsN58hJZDExWNm85kF9Zhw6AsqnN6mctBnn1Hr6CKv9Vped4T8Sbkx8c9pu622qdy3",
  "key31": "3VniyLvWosrJN9hHfMK2WB7KYzaAbgk1y2TY3kTPNdC9W5em6dbPuAvKn1KxLx7Hh8VQqTtsRaMtbEaoheH8H8Kc",
  "key32": "5HeaxZx2zQPjmWNHA91C9TXeQmZTXMucJvroV8X4kmmWtxuGptxbLAzjp5bSpEuirvtVnpD4B8xRLeXp3EwjDETH",
  "key33": "4s7bwHt8BuWY8RR72kxDwj7KU9LaYJBrQ2vXgjUM4cUyPWH4h78JdQ7i7ZvYPeX3VDDxExeou6rT5n7KMsLRyMqj",
  "key34": "2KcFhTaeQAypdWcQHfWnEJH327qv9X18qpcN4RDC1WG9pZtMzkBj9GPJ27jYKidRuNCFUyZBfGoqZHnYoeHRPRsQ",
  "key35": "SmvBodxkdfW1K65HcSP9JQQwML2jq8q4qyxjhurChMmhCkihnSnQri9kvUePJZ6mS2roQTMDyKQ2BKFBgCUSSqv",
  "key36": "2k47ZHVQQEVvx8HHT3X8spACxFy2DyyqT9GafSyKdoVNS2QQkhvf2hem3g8ehtA9HsgzxV9c7HTmfc8wBoARHe2b",
  "key37": "5AQ6hvNpgZ99ttDbvHayAKbrGvJGefGhm6ejGCYBdxn6auX93DvJqjfLAaEqj1626gRAsUnzczweuYZmiuaWj9TJ",
  "key38": "3dMJe3tPftUAQztE5adPXVNcEcjdAJbsdMoA4foS7YoEcASuQzzUvBLgCaoawnhh5HUFRaGfLYjX7tU1kCFR71sB",
  "key39": "5Na2aWggH1yAD2YDjwqzjx8hoiYtJMMmjTacSkLHQLvpKF8egof5bujtg5pemGDfehH5TKCqG7WDxVhpuna8xcWo"
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
