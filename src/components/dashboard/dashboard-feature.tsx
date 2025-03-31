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
    "BUfpXh52x8JPqDnxHsUdjnVYF3uSNfzYcx13p6ZzfcHjDidqQFRKjUEqaccDmFxs9MTBunkdLXJmPh45bChqPsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D7aFNxgsaLpzrz8JX7jfhxor6azcXvbHYrvTzaiR34zaeBFC3LM4qAyu8q1iSeFwkhyAf9zj2AJ4o3WhQCYVbnM",
  "key1": "4DJbkhQjq3p3DD6iH9z3PFskVZqwma5kYyQXnqTafsCCYquyuCqhM3Q9HdKDK2RoJX9m5NuUfyJrFDEnxHUhgJ7y",
  "key2": "wAkiW8YFyWZvJcToWbCbi2YwVeCcb2bfGafaPGUuGcd8LB7f1bScu9UFpB4S6XFydrwJxeAFECyAV4c1N3P7Q1p",
  "key3": "3ou8KqvTixdx1jkbEPTjz2EafihyydHSpA3VUNFGoJZHpxx9ooUubPT3wpuERQX7a7vftcthV5QDqE9DZyJCyDCB",
  "key4": "2N4ip2XxWdkNB532GShepdty38q6nP3i83xNbt5VgT5GbUbBYG2a6NwJ4tJ54QEFxFvp1iifcwT819rexf55m25W",
  "key5": "2xoeJDaro7JwVuH3vEReCGaDm3eztaNhqNoBdJMzg64DEE9mpYEWYmL5XSWFR6scauf28LsZtF2SUxHPEVWZrf45",
  "key6": "4BcSkgqvqdU5Mg7x9WjaLNph2pvGT7XyNSfjGVe6uYkMeTwHdJrsuuN9iKCfEjtA2zRNdKRAhyvtdrTDSAQqeReT",
  "key7": "cnMCcwzwMfAeFGfg25N6ocFMRvZF3VU9zYFwtxMMVX9kHFj65mPi6y7Xf9hv3MLD2LtKhjAhDmNqsW7dLsk7urY",
  "key8": "4dLxVa8oJVtNdHDK7dU133PCU8ExdFT7zZY8MaLRbcLSRtSh3XpuSFDCKx7XPZUjL1af1J9nBvXvUfzm6HBeuggY",
  "key9": "3kH8BmEmmkmYSNkTWTuzAdWJWPZQJJAwTqAYT1XQFBqiDLSCcoSztGng868p23S4CHyouXvZRMdnitbNFV1omzBK",
  "key10": "26q4YRT33TWnh7dYBsWJhGFFsBTUmbUs2H9WFzLcLJJTd4JWewY2p7Uxu2ZansRcEskECB5QfQvEpb29wjjo9sE3",
  "key11": "5zgRHkvHJ6RcrwSxnxrR4kTXAjDYNGqqrUVGWE4BKKuXmSVmJ2FCTGMfVD5PTyZfhkEbcdoWdRGK4Z1dGnKtQfzi",
  "key12": "3zGK2ofCUhTaauo8aSgwDnz9XiYoxaJbsVTBKqd8aifzx4nQvSLZPxYD4ahEYak7TVp4hqZvtLKVFKVhRDXEuxWW",
  "key13": "2s4aM58nxtc8EKZAtCRimwwbHSNM45cSCjQh7XBj5z9tAk8DjE9xU9QTC7B8JmD1RHMkDL5rggf8uEy46p2ixGde",
  "key14": "4L3Hr8353f3XAVssTQ81dqWTieXkwSPBLhkLagb6vToRGztJXPTRpdRtwJj1Pd9uAkynfkYWkCnLSQTSGpMWyATp",
  "key15": "2rxvGVER2jioU7Wde63QooFuH9dMKLnKdxqVMfm9iPJBbuj58NhjXNifDL6PgkLASNdTxNQ8RdfktL31bbpqm3PQ",
  "key16": "3qbYCLM8ic6JELfA7GCAXdFsyzF8p1mE5dr6CYgzbVG64SThuoJr4KL8i3cK12SdR3MrNpNEZgEiz4hz9iudAM1i",
  "key17": "5yrwFif6RCiwTd7YBAv4oRurN3FezpBbv9MoxYnHY2DzoCrtteQQUB5gXtcXDc9v8Pdkq6k7XdriRwR7teE971uD",
  "key18": "4A5dXC6Pn9bymcqDTWr6N9hFh8Q8Mxat5mj5pWTvJufm7TQiZMjpKg8AqZYSTjY8ed8KcBz4tQYDPsvHx36guhk1",
  "key19": "iBZ81MfNscwMowbyYZk8qzLHoTsshGCzcxmszqbCxPit5F2MMZe9QTjF7uQH8FMvryE7QUbL2EDWz4WSPLxdTtN",
  "key20": "56yno95cjR5qbL9uNbW7C3Een7VZHfcQCtDgaSRNR3uSc86Ype9wxk8ucZRfBjSPiZDM21xB7XdF44sZWDxHDWuh",
  "key21": "3fDUTzmnH92SpwUQozFBzcroGNV56eaaUyVu6QeJcEjL2vCMEGhWv6G3TvvkESxpQh6Ff12Ti5utgkZFvSeFYmEz",
  "key22": "3smmj7yTNGYTsZapH4WZbzoa1jAQQr8n65K83XwkuBL35k8w9QwFQkkR1Ch2oy3P1U6m9F4LH2Sf7uNrp1FNnnFx",
  "key23": "3HBeCykLvXRSejSi7YYyGQho2eNMHzf475cZcxbuYARdV9yFVNNCBV3yHRNuRxLdc3WnFGKQP4CKU7YXsueaHvw1",
  "key24": "7iyc6vwoF8iNaNmcrYQV83cUSUhGMBtGjqXP5tpCMHawe8xDndWasXiq9dYLTU9qn28a7zEzvT2YZD4eYjYWr8x",
  "key25": "2darEco842WxXn4dGdvhWyoixrWfmWzVn5aHSKk9Vz61zMyQWXA5c1awYDAZkx2C2T4rCmsA4GvCEAhVtSf9rEdT",
  "key26": "2BH4muwQWsZfVUYBrE693beQsCGF1JqVFwkSHXNgi2ReUeVW14CBWYs7DqdYJ9kwqpH83SmTgmn9TE27RBtvTsxm",
  "key27": "8Tykk7eip5kBwvawEfcsyLGgpAyfMA3BiPBU2ETPTD7iE1Xpmf2zmNtAEH6LS5ruuQbDrmDEmJTVX83SYDiiiPi",
  "key28": "YvZWd26ET8gEBDLsNpwn6YREhtbZstEoxQJR1TAmdRf2YXmMuBgQBAKQB3JMKp6Yq11ZA6bvcYJccBfAWj1eJah",
  "key29": "mXjT5UepXZYbRntd8wd4NegR1iBpeCkcK9dLVWdDhSsbrhzPPuCk1dW6DCrYdcc8NHy6F6uhBxse3PHcJHpEwr7",
  "key30": "5y8DUVCVxZiPn1ZAsoaVNjG5yAk9cPozQJekxYGEUohMeZUWUQCB4DEzFj4f2HU4jivmj8XNN14VmhB2RSoZVNBv",
  "key31": "pBMQ4o3QY71Fp9ttpR3wMsMGs1dowb4n8nb4UBFe7ByS18whiLwjW2xdoVi6us96LpWHsMRcowbwbr8w6kUCzrN",
  "key32": "3fHBRERwBhtMN8xfaiSFwqEkbm2kDRFAQjxP8g86biNRsYx7N3ahyTRuZuTLwS9t3BQiEsVqACNRkEyfopSYJbyp",
  "key33": "RDQsHYf97WxDQ2JHhkuPNU5669kS68mMWpSwpRxqPLKj51fH8Yop8W15qihdb2CJwh1rTSWxAt1eb3eTnurk81C",
  "key34": "m82ZeDrUbhEmrpBbGeYRMoa35tpUK7TCxFSPAWtEentgBhU4dscK9225iTGknZVWkvAtSX6zToD9sEamjtjhyD5",
  "key35": "3bs48vzRdv16fSpcpsgHhv38tuhNm43iy2ohYpnT6XEgoNk6b11A9UFVaANrTaawgaCow8VTXzkpRUC8P2KRKwPm",
  "key36": "47aN6hTZkDXKCJp5yvNgrTQsy8xeXeNTMUKKzEDp4n54a64FG4628kWSP8jg4uxMNGeaW3LVruC2JDPm9c3zfpJ8",
  "key37": "39YpKToFLmjvcjy9sxuWqXTJwjooYRpLziSF4xxQogFXvSKuhF7NNLdR9TA2gjrzVNJp5iCdwY9aVYiAoyEEt2v6",
  "key38": "ifyC3N7PEFV7BvJU58Zxqgg2oJTkcv2GwT9pGkQ2d36uLVYsBmEu1hJ93pBb5MJq9SzQ9REW2RfErA2R7eukWzA",
  "key39": "28js87CtDV7TRNeg4ffa8jdw2ML4A7353J7zT8T2g1ppwp5FPXM26KLLB7Q2UmHJ9BpEhpQMbqhwb9HPhBCkiuTy",
  "key40": "2o4T7ZJDzMWjTA5cQYAPCGXdDmNaVasEWJJECba9yfuv6BHBv1xWPEEK3xAS2a6cSaYCi2kQZ1AK7UbKeNK2xan",
  "key41": "yWswpTDtAgbZki5odVKzJccQ7nzD9W5tV6P57vSjx6r33wt8GbKvaAvpdq7UpQsKLrSwKvMbxZe28eYSUeYZqkF",
  "key42": "5KxrxBME3eCnC59yjyw34ZmMEyR7DAEMy4fPfxuJLR7E82eUWSh9TrpB56YCA8uzFqjgiMPbPvsCSR7yKqas1c82"
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
