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
    "YXWdQPVj4tuJFwU5TsDXdwXxHe9n5LbtgxkeeAcw9E7My18LJhBzmom5CXD14BiS4LvHdP76xEiMHYEyS2m8vhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vXc56HPzQyHPqg6bFP9efbxJYcsSpcMYSm3ncK6hyxW32jE5dsHkTX5P7jRHxcc2zsp6MLqwxymTpSNJHPv45K",
  "key1": "4ZZpi5Y5uSUfA61JuTvEe4wPzchNHToRLxdg975sSCxVGV791RpMunwA7YEjk3AykZAyKLHcZBVcB3viscRHXueo",
  "key2": "5czBDVx28jU2VM8h7hMHaf9BzdFx3VmUevs5qXQy634N88QGP7kv2yB2Vm3VZj9gcrgT1oiRwq5svb9ix1co6cgP",
  "key3": "5W8X4ssCZMgHinizPPf9NucE7G9Khs1dPri9Q1qdnvHQGMnU8oiX4GH9DHo4UXfevnbur3XBikEtURFAK4eDkenA",
  "key4": "WGkFamiayHvEbW8vsGzwngpDxhQUccpHTkFuTQBx4ZejkC8jKNtdmjp3QTEGtTfHNy26S3cgEkcdoWbC5LZYpYm",
  "key5": "4PvHfzzvh2yviABfSof1DD8zfPZx68UNMV8Rv3Sq6yfcsucgPfSjbQkdZpWNY2DDtumDm93vgCZG3koftApZBuKM",
  "key6": "2wTs4Lpk4vggVMuGuPqffAAG8XGpHWsjGPwrEbh4hLN8FH9UaF6vSQv8yEDkXv3YCqNQbe782WKGg7LMzS9cNwrr",
  "key7": "647VTG7oDU2w4rnTKnSPmFBXLmkMzH1C543swcA37q4Y6TLou7V5DPCgExov3KTBAq8bwEocXNYb9dBwH5AEJdH2",
  "key8": "2TmunLeUMMzepwqDY56EimoFPMD9whqArhBXBtYCecDekQBEqykc4bYaXYKUQFsAHoLQD1J7Q81haDjZ3uPKDhYH",
  "key9": "2baqnCNsVF5wrxRdJLZU2kfLiXe6AqDcBkno3HEp9x3FLYwr5BXuQg7DNjEJpSLcx87f7rS8V25ozYAJ5xTcwzEw",
  "key10": "3dZ8KRNQfGUZxuPo4U7hTzVKktJUP4WsbiEEjq9g3bTKaK13qy9bpvvfNnhHJWs3YdSPU2pK6HJFqWuUXDBSFQFZ",
  "key11": "hzp9Ty8ZneWwfc4ZMxzWeoDpozDiC3eE187gs5bvncnBErr8b9EvzkZyPA7PDaLBMjQSyVFjmttcWZf7cBrzKWK",
  "key12": "5mwHrbYTxQ3eQ52q35eFB2ivWqMLypVqTJ5SvqjuJi5fd9DkY6ckdTWbH9s2h2J92hPXH5AwdprgBHSgCwmBkLuc",
  "key13": "3g6d66RVjuaBMxM2QjEWhCgbfAVDStp8urCNmUrtGgmRHUgotXV9RxXfqKkNiYukpzTk8zz7jKmtCDuZRaZsS27e",
  "key14": "4AAAzsB4B7XCaYWhH8YZ4YZKnkm94KTLRe8fHkM2qYkEHEfJaWS7yXqGPqzofbJDqK8c27dhwiXyszWzezApRoj",
  "key15": "T9muvWcEc77f3dnBccRpKJP7ADwyA6JWHLHgxfE7eMQazckPFPXBqHSj4dhdsj1ByLYD5iWyfKst4nMjUiwQGgj",
  "key16": "5AqeQ3VWr56Qi9cUn1rduN2PhkVVh1FhTfprJReWEEkoVgZGCwaLHKp2t8QrvFFiCWNSWmW2zKPHTEwxVqu7XFrL",
  "key17": "4UCPpY8uzwMMe6P3dMZx59o81KEpy8gfYdnmXvp3M7a8NssabG18289TFQfwqeuPCYfgCXz5uMiAmidAuCRG9jHA",
  "key18": "2XsZG83FWAnLQ5GnTbrKtHMafWsKXj5qAuJWBHgNzqpoonizbgfZbPayNnqzUqQYvGZkswwEXo9UgT3MkeLZKVYW",
  "key19": "3YmKXcV4FWP5vTvqmyinnAhzgcUJnqgh4ihcgCbWFMZw7xcNikin3s948WjYqC4ScVGwQauP2by5aEuqpTv8KuJD",
  "key20": "vaBjQf5xc6xcqzMT9wzvkMiZkkHvQsZswaSFwc9H3z6n1qZd71bbhqXCPMMwZsWppkRfhiEgb16K6fzepxFb89g",
  "key21": "2CtBkzVSGapvfZVG8xqELnxA9eyRfccdG4BL5mfVWwQbiX2116op9ADRfPB8zi1LtCn93TeZDnMVUSU9jzBVoWdC",
  "key22": "5aN48aMPnmuX67nfcqnpKSbZAUgEAQHXPVBHNSsn8EH3GPfL7p6kdpsGoQxDddZyMg9krbciSrdcKbnHEWVZdNBa",
  "key23": "kXiKYbqiZ7zo1hRMKwXo35m7v9qzHfrU2Kv4afR3BYVf9NRwNuXM9Mxzp291FtnVa8rEddcxSsz8n4JpBVurvEc",
  "key24": "3MZiJEBK6TMAbexN7oEBnCo492enyFNfpY3hhGqd4DpknRzubPoqTs4BYZ5vJK2vrZmnDmm2GC9cEwsqdWoH7nSn",
  "key25": "o8PCXah8hjhvZp1hy4GDatD58AebHTVesZaGCpZThuDD2C3CLod7wJ1HR6Vpyn7Zn2tR7D53F8J4RC7CVVbM2Gk",
  "key26": "3zawZfriQV9C5boEmrUkgTgnrsb7YHLhsDJPWdKpEuo8cv1VCJR8jdcBbwCUma91qMajfxg9XSTmeXN3uN3oEGyi",
  "key27": "3QYRJVvjhbhnHfwNaEinakwbWrjCkAKgNhLdawUUqYYkcTuwzbcD4CK6gcfSU7Hohbyi9NwMxp9Gqat57msJGskH",
  "key28": "5ySZYy5pjADRj6WDm8svLHJBU2MmRucieP5w4HyZMivq4tMJjmX7Ckp5STmu6htXCq9PJAFNWq3fKkxw4F8p3Lg6",
  "key29": "2by6uVJtBucQsE7Q25Jq3Z6uDwQxNZ3WnWzQZhvUYe6vmMZFRGhiR9qQL4ZahjDUJTHvcXeopmcYG7fJJrxXvrtU",
  "key30": "5SsgFbbpjNKqYRbL9tUgCQHzxsHayfCfEUJ35uSKgNPrLiueFCQ6MRZvHopJY64dbMSMVDPf3vGr2NaC22XYj1AH",
  "key31": "64zDunQXtqhESVqgiYxvizaBrNFzxmkXwU7oj6XY5oMZphvoBkuULsVvejwHQibYGbXBAZmypRmc5gXcZfSPa73a",
  "key32": "5NxKYz4bYMWJC1wG2D8CiH9NZWAfB577LunkyvyJt47P85oDhCDTcqEjeTwVFVeZNduRLUWYM44rZaeM22ns72vD",
  "key33": "3FWvd63aqXR56YcgJkjiZoWznjgNjEZopkUtqYeivdRoNG5N96t4frQRvdtt11SoVpPXoiFGp7wScajjbQc4Pugm",
  "key34": "HFWKSDmmPVHQL9mxCf4REimYiFa9oA15jZhrgB2snw3aw56Pzt6MbndG2FR791KU9R3ULvCWMqhTtXJRawSPRiK",
  "key35": "5u64hieR8RJFcHERj5VqhjEub4BaKWjrp29dd6k9kZ447XP9SXbCMss7rCyiucTGRAGum66Sc3ZVtERfAu1YLSQG",
  "key36": "5wPgQPTovQzstvt9cerPHU3D8AT1AmMZKuKK9kdTL9xfAjgxftw63HMfkLRhXotq7dvjewUheeHiEZvJ8cPyibRo",
  "key37": "2RKnjR7UAyqre5a4rLkpdDyKUpjUvcX3d2uqUjSK9fCzt9AQKEX3Ub1n2p8fgWjzws9z1JALgLvqDt2aeZGm8Tnb",
  "key38": "4sHZN9rTxiffyVXns9bq3X5rhJ6ivWr1Y9PYH2QgkAZXP6E5mB9XxT7BhsR3WQWgT9UwJ9AkZ6WshgAFLH827uWp",
  "key39": "3B9HWmpqkkvPY4UF68enmyuG4AvhihgrzzhEwF3NeoWNkyKC6MT51qum186qZxnK1hwhYyontQpAcD7FYVQE4YAF",
  "key40": "2GWtGcEAD7exoE5FJFctM3EBdGJyRDWFWJMqrTGAWFMMnoMC7CQwfSz86BL6JxQstG9z1f3zT7wPUX6bTX5WyKFw",
  "key41": "5DJ1VwRtCyyVoHJDYV3cuPc4qFfswLqq42QfuZG4e2kKtmLuB2XFD84qQCh5Q8Qae15vYhKXo8vPLbBtopBESGky"
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
