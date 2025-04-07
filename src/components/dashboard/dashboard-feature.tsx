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
    "4MR2ecMXFRZ2gwGYamwPE66GkESCnuXd9s6pMDsmKsjDYXqVEL1fmFCZMtxtGWGejUf3FrQC1z8CuwrFjHQr1nSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LULztEwQCNXbP9TByLzKpY2G12NfBKHnEhuJSx5A36Fim7jDM82GcgomNu233FPT3QhTFWX776BuDfJHQQLgpFt",
  "key1": "4RHQXn181XPMMB5mYeMYanu4XYb5DV4iFMVqTQoUmEA5vM7WPaUn1q38VM3uAnhyA8bgiwD6NztaWAjhGKiFebxD",
  "key2": "248j7YcCg23G3KAPZZfUpPcSJpjXaQkX9FcEKQkXUard9riCR4uc5BGKmDKVmL19HwKenofjKYGozvyCb4BnhVBt",
  "key3": "4EFmVYiE9gNopreHQkubvbieM5ffr1L6wVxm7NUTSCFtGw1QPtUTFWzdbqR2aK3g7hM5utdTjfGSSQG29GreRbFY",
  "key4": "5FBR1qpruRMpeRDnrwAf5X24FZnBC8izkS1Rv3b4X6Ddpb43WipwFrtZwAGtQSQMXTKdAoCSGNs7yQ6gSNRjtDa8",
  "key5": "6Jcxx47NrBRuPkYqURZ4NXnux59U63uYKSx8H7LtTZir8kELkw7hhn1r3csUsKWxPgB4bC4iM4uPyHjncDA6vyf",
  "key6": "31QN8DjLYbc2dofPCXcvrEgkANGDyWSRmu55RBNY9BPAsmJYm4UEkCeGj9skqrn2QE8tvNYWKfHPG63og64qTfXr",
  "key7": "4wHrs17AmwKzqrttH6hhUrWKAJ2MXMLZquG27UhrgjpgVxJZUnS7zaj3PQnCrP186RKheP6SsWj6QMcu4TCvwwo1",
  "key8": "4LFvU5TKmjgLqKjHAUEvR5hrAQ7LVc8c5ACqifahmBUnEpD4fPJ6uZWeYenLY4PjawviDahvYbJEPt68FbgxB7bu",
  "key9": "2BG1DyMHf5LTWi7HthuYLef9q8c9CGLVAuodErWydz18dH437Rj3Be5rwMe6hWZaEEVkib3cPNy2PwSxJMxrpzuH",
  "key10": "47gs3afvgctFhZn5xHa8P2EZPWNNbUcihzgS7VKp54y76dK4UZcatom21jyTFCJy8UpeqVuXncpxv4VUsLY1z3wG",
  "key11": "45DTwkCN7QbY5c5Yj31qsrfKZVnAUHA4AUWK8Wy2Z9NUYzTJnGEuGrfiBsx6H5PzqiyHkHAuouuBiz1gWFqr3iJ3",
  "key12": "2uD3m89dEpMqVTPk9Qrwdhx1RZv64ucJTtDijRGjojPxDgsF4zzk4s17ndX8gk9M7MmvLMtHYZjzQQUoEa2N1haq",
  "key13": "4cZaTRXSVwrcMBSEDimsfWdPjdaaonphrY5vboHvQL6oBdevwJeVNfcgf5MAcqPEAUQsNTDgtf9dn7tEMZDYu7sn",
  "key14": "3AQuY8JRwoBBMsyfAgPxhXhibi2eX1LCxqBDzD2DHoi2EdaEsuh9g4XGa7vxmJjdYChjg5zpyPKiHdRmr3SvvEMu",
  "key15": "2vo1zThoCUEUaeiGh75rYyuBYx4PFA6bR6rYtwf5rqPYPCu7dad9a2DxetWKFm4MVtwZAxyZcZ6raLHkdaVUhQjY",
  "key16": "2r1hmYzYayEwMUB15D76uH2j7w5p32kjQDQvU1qWJqoymkcQGuCdv6DKEXT4XYeX89416WPihgcJBTsyPpb53NwR",
  "key17": "5unqt8USPeu7ZN9CrkZheFGzgcQzKN3TYC3CB6BwD5ADmeJVqLDRg9fFQfBkETdKymkCH2vU7p5EAaN3Yfsu9b6o",
  "key18": "5nZxsEDdU9FFP21ZBNKATr8MrgWJPRUduWKMhC4KNny5pv3FkBpLWrar9LcsXfbk2UFGiUntR5KHKxWWcPrbMdLY",
  "key19": "4wYp3myjBUWcm8TCsxJm47AnbcCERLBXwE3w6fUzGFPyY5kLiKRViWNAnoEu8LQwMVRJxNe5JyuFenWHKHqzG6pQ",
  "key20": "2GzXGe7HBZsPam6v93XJsyYq7GFDoFYXhDpmz6bT3Az31skbUhU3kWQCiVS4xYF2GrDDR4EAqWuvTDqc2xm5Ncyq",
  "key21": "5mWKYW5g9jCRYMxdzwd6pKXtma43PhkxuRqxB4LRKw2Rvm1AGPi29K8b4sM1PjD7SVgBwbPyM1rgpj8PdLk9G29",
  "key22": "4V3BzNjvPLkJxhBX7UkemTNcXxXBxHq8bUdAnigjYVGcFdQCkfZvHyhBEzYbi31XYZvhtfXs8yGbPdit7h1s1bjS",
  "key23": "5FhUh2eitZ1vhHvLJ7xk3Ucjw4EE9cNBhwHEztgw99siFd5B1ZmXij2dGwP1x4NjzGkbFaentVZsgHntoxFdr6SU",
  "key24": "3zwhg7ssSvvXm1wdfhHs58YhhQbP2p5gPBhcDnQ94YbGCJcAT3kSgMCNTTHBvWvRW7etZCJnE2v8ScvmSG3DFW9c",
  "key25": "5kXuooGv87tWD3DSNxV1vKTJJw2PTg8sN5evVxHBndr6arCAbH8LYj3ygusCSKqiPyWvrFfPrjt6WE6sThiVeBFH",
  "key26": "5XMSTaStPfmXddzoV9Q42ZyxQMb4HLHgLV49x59LvprcFj7FZyoVv2hXUvUK9dCtEjSbiVJAnXsvHx5Y4QjyJuzy",
  "key27": "5w2YP17JGptyEtLXzVV8ya5BWfLfVrhH9Lm68RBUrmvHP1G1gaMy7YN3w7VRK9bVuuNv8EcBsQZpEzTprS7G3LbM",
  "key28": "57E8kH8pNme289SNpnyW6jHee7tnygEvA4eP1n2FxXz1mXUQcorGtBofRNecUqT12x5gwsrPbcfvUyP1Bp2yv7Wh",
  "key29": "5WU25imnoeQ3tipkNMnscXVNLDBeFxSe6coaPRidXiTejSxyb3FuecS1C3U54TCYVKA8GTyqHfL3LJYFquqxK5vC",
  "key30": "4JqtmimcPfy6vku2YnG2rFiJYBx2iw9ELLt7psbdp7ybwiFRWLkqhP4XxA1bPpbQruwLFRdgWxghtr4U9cdQ2DLa",
  "key31": "4vwZyL9rVnKBJJ4grD9vgXKBwKWQvFp4ZZFSpjr3udBfZnXAKa7rLmEZVvGFo2dSwJ6BcvkQgbzqqh27Jir8D3gb",
  "key32": "3zf8dbHGSTnmu4eEN1NzEJyNB7VY7GQD3sNg3kK6p64G2X1XRHbupdTCY8v6tTiDFbdfC4AKLGmNAxASNxybbjnK",
  "key33": "4s7XJ9zcVbYxtGHP6H2edyhoVreiMihDoTmTAT7DEFK9vN8Emmf1x31vnhdj7CyvwqB4cUg2QdpyhzWPViyAaZM2",
  "key34": "38woLYgcQEqaNREzNgxH9y3gGggerRPZbMv5oH8tBNPMBw1MbR9DpcNrqZANXzW6R3vPFXvS5Nh6vvidJQEY3BXZ",
  "key35": "3zJWXDALsab9pzGRu29PYiPgkzEo86SYVp9V1Yh5tSBPNC3HCxNyhABmYe7c1vmTyH4XKaKzBcwGRRcfLhXRjYQ5",
  "key36": "3tbFAmc9ZShRgSe6PGJHigcoqZ1NejqhWwnwEXj1Hg3YcjwtjxiRbRDSXvJHkUFzkMyjEfdHNov8NJnPznzSo1cb",
  "key37": "4ZMGmdbokpj1M5H8uHJVGYuB5EbPwnLvsnWADv62a9QfH3LiDy5jixf9kmBceBdQJKssgjWjm8hNWpUfGxpTHxP7",
  "key38": "5NKxDwfn6PH3s9e3sgdTmVeDkvWkDBysFVbazhNFAn3zLrdJjQjXw5sbuu78HD14CKbGDGMkRJi2K91w35CiT4zH",
  "key39": "2RkLT4KgAUt3Y2Jn6PjYc3eJhKKnGry29us3icp16zcALpThHPuqATGw5yuEFPdZKmLD3v1D7b3BUC9GRNqcZyH9",
  "key40": "4GQD1yR62skxrGdKG11TQEAzbKB7ivf2mTjxmUHH8fyAvJPjHQteBSa8nGPe3K7hu3mkLe7AiNzcY9KkPjuaQnNr"
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
