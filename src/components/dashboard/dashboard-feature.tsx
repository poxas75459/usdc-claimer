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
    "4QfFrEFPeV2MvU2QUJWoNrFx1rTSRc2JwCABdJRjpmZ6nuqUSmCyD11HQdRbt2BFHepeKTgJ8djMagnc6TsMAkdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qeMbLVmg1YyGwP5QpFpMDgFQZykBZCNLjVZvUA9TLk474JHBoQXzpQjquVBCqLZanVr9Mv2Qy9Y9h8SKqkyH5sa",
  "key1": "4S1PLmMjqh4oCNNwysvC44jyQkC67rHepUS6mYozSQoPfcWmm2VgjCgYK9oTfsNKyaiybxYeT8DZF9YPAxocDhZz",
  "key2": "3qWkbVJHF5FN6P81ygmZakmK45Rd5bkVJUibS5b5xPRkfeVrYLd8TxoE8LK51kyFxnxa7ZQLCkhWRihhKW1DjmfJ",
  "key3": "5hnstzjRg573nNxHggMu5qE1eEdffRjaov7Q5pZE8fThzG6hwGLKCAEqpyBFoQfqujwrJ1oX3pKTimbfG35hgaC9",
  "key4": "42HdzMrgdy3oFv6JU3mz2o71krun4QRQeVVemg2t279sFJUgJhdVG3BWYjDVx5nAdc28rRH3Xyx8y1CWF8BesE26",
  "key5": "57gmMrgp6cETsbCCgbLixHpvjpDrnzsEqaTNdSVciX5RVSShvXdTap2ngXn8mH6R4CBvX3Q81xhfewDsxmRNZKNC",
  "key6": "Nxdyo7drXpWUcLXDE9A9V3UB2JSSNWzph9wsLqrf94UHCzN7qhEQWpztDPmoj1g6oUXyTUkGUREqmEGKrUn59va",
  "key7": "3uNczJuEoxh8VapXptuHyV8nurkixarKTzXRpCq8aCJ5Xg13ctta6hj9cSeLg7eH8FWPAZeQfeR3xjseQRFb3hJL",
  "key8": "5Dypj8pAYhmyCAjMR7oCZUTe2f7wBS4PcGcCikErJx2qMYpg9jbzAj3LkrDYTq2n7NFJcwKabwbESP8ycFuHm2Lu",
  "key9": "3EvsqfxunRMvDaMvNQ38Fy4VLq8wnNUcrTnjjEzbya3KqdZykV7v74H1t82maYNyMAXjDE5MhHEczFPoeHw95wWY",
  "key10": "4JaMCYhWrDd9LPugYRR5KdhkuZPW93ZX9fhq7UgFEoLAxVcdiwWBK6SFuRi1LwY8ZjmYDFyPPqjLq88Q9cH3T9tq",
  "key11": "2UWM8TQjJX9HccdNYLprNLvsJcZwfCmHaNdsghJwUJjNUpwjowWgqALXjJQ34Sk7jQcNXVNrmMCjsVTamdz2mGV8",
  "key12": "rDkcxqNtf1m5dvWwXAoAFFtiUy9ivPY57Z4Cfzo1X2hyJPqyij9kG8T7PPkKR3SjdqTNMfcr756wQWjS76BFdoc",
  "key13": "4q3xY2wujumzckbZPqFYmZBjLBZEy1rXvb5kTc4uJTVMJ3t8rmzsGhiNPUhzNwEBUrgkXcSG1JxZSRnsQYJks3vW",
  "key14": "2Kn8HD3i4nVd6RAXtfuwNwUuqgWQqXEt9zYSu19s5o4QTYUBdRf5oxLKUG62T3jn4yx2AGqYfgxNSPz6h5uCz5EW",
  "key15": "2C4QQk8LV2rDvYhccq2Pycs5sLyCGQiF3yYjhbgbCV4bUnz46tup9hhgQJN8Ndqp4ZmvZHShS8D5wKMznaBJgutn",
  "key16": "3x5qanQMAg9ojedGseLTaELwFSqPZjzApfhqcvWr1DwxWLHyAPWC8PqV96fkDhrVDrddznfY4EH83KewJKofaHGN",
  "key17": "2wpaxic5d76rPYQ1xEyqQxa9yAm9exBXeK7Fy5XP1CLQiY9J8RYE5TLgTUuoUNXQowmLG4yxAgFRBiFkahS3uPjb",
  "key18": "Fo39Q8LA7kL1B4CKYkqUUHBbvejwBEBQ8dpRCpqZr617ZyKz6eBKdmssiHxeZzfeD4zpmt8cRGJogQksJJmY9e8",
  "key19": "YojzQUHP84TL4rH9LXiWt1NC5r7EpxDhSzaFFMwD5Z6pdeiXpBE9p4Rk86gNEm4GvkbyXeCEYxRbsSfsAreKRtw",
  "key20": "2U4fYeqUoDuo5soVpcNRc1y3HexTYsbRaTqAz4awDz2Dx1JSRCxtKYKPTRboVgG8rhTX8jZg1CBJtAtbNE5GARMi",
  "key21": "5DkMrFswakqUXjwbfq2VDdNaYcbw1hRP7Q9kZpJxCXmSfuSjJi88WjSMbDPB28uerLtKYBHhm732Y5Ym1KvichNv",
  "key22": "2JvaGM4hD4zDARv4L7kUhA632VTJB9cEozAZiqnNN36z1n7hHcRspT6s5uY8JAdr8MToGmNZk6YLENVeogyCVmoa",
  "key23": "5CQnRx8cABCaN7wMWphmMhSDJJr435n4g9o6Q4mH9cuDpFKaMPqYkQ664486rsFou8mMDdK6zQjmKNQeZ2bUUXzJ",
  "key24": "3DNMYvau2nKTqZkeTb2yKBQoiCmnj5HEVLHCUVuUuh3SpLFoRQYsSXKe2czMSp7UJuJaqRz91R3UFxXtabhxQWao",
  "key25": "51f3fP8B1SJwUzbG1EfrY73pf2e9PuipyK97kX3bQLcLEr566FUKVvfqzYwU8mc9tjxz1yCU8iaHZgm5efR3KEYr",
  "key26": "3bp1XeDjDRcJPVRXiKTTJc77b3BGAbRd7dx1o9t95X6ViirEN99F4DUspKm7azo8FbcRMdMZ75s5ZrvGsjpEqWh2",
  "key27": "5v1TwRWCUS4KU4B6AGMGY5xgatSN7MGgXLBpeVQFRGf8MUiLGzdUDVuhRWsvyT6rSLAKMqFy98gHf2hQKsFJDbYC",
  "key28": "25ZtoFQdeHnh3jstm2mtV1ymAEv6iCm9LbvDgUgCaKAS6azJ2LHsnux4hhYVFY9BRkh57s3WwxwRPY6SUZrxK7bA",
  "key29": "5UqEXVYioJFybYMLGFyZ2xZSsCi2Jej9nBT1D2SrVjNDdU2xasMrTYWzfJMjCZRqe2ZWzSBzqb8j85VtfekdiDFX",
  "key30": "5JP9HjfMAoqQ7KrVkBJzbgqv2Ms2yTMjjofY3vxoqtPtvPNKcRQY8LMQJpG7PT1i9veNYZBuiB2gFninMCmmkPSd",
  "key31": "4rRmyTye6ERcrT8bvXkc1CaZFobgJ1Uagr2RFgLWZ3dC7aM5DuDg9CoQ4DyzSizxwRsaxhRDbRWxTzXLsqtHHs8E",
  "key32": "2xpmQqWw5hztNK9HkHHbKkCNPsFn5kwPtMWxte9mmHQxsBizqP71Ee9s3jbUWi63ZdxdPf65whRExNYRzsf2yeT",
  "key33": "RugVwiZ7wHXcbQZG9EW65gWmZG53CMeaGGnyL5TmarHoyBJrRQULP4q5svrvXHd4PpyZaCtHU6bDfzHDxUie2mA",
  "key34": "28hn3xBjKQ7ABgGoBxXX5ngCJVWZTHrzzWb9NKAB5jU1o1SZu9ziC6oLG56aqR9RH1NX28MSVvFxCBM8UjarRoF8",
  "key35": "4NrPgu3ndVSXimUCZPx1PeCKXuduzrmvSHpEoFqGBwR666TjHTzpmGNhKWWqX1sdY9pmK8uixjXdaCaEuA5Xgf3i",
  "key36": "29bjTyvxvoNcbStDmQnHduXmdz2YuZHpQj3MdBs8jfzi3cMzXT5bSu5nsJHL22RSqSztXzDbWRs2rJJn37KDMy25"
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
