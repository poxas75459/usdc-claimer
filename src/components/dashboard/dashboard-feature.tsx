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
    "3inBzvqH6D3sFTZBwiF389GVQ3cU4qa7GUmz9uQH4HKT6NQrmyXkA4DCJYFoHyq8LAfrPPr4p5AUoQebLP1hNMhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RP9CYu5To9nuZUcQkHJa1RGTsZPS8RMks4F6jpNpXFnuxyMgvSqcmxxAYJ5E46hHGagmZshCe92pGkcVznyRYD7",
  "key1": "4fsAPX8qnw9HXVJc3fBiLae75Pc5q8MCrjCyjP2e8nJUgH1hjpoNtzL8YA4YohUKYu3LdM7xfPuwu5oWhXmeB6j",
  "key2": "3LsVJ26n35UPDgiTNoMDzv5v6YhTrmp6cx94K5zM7CvNzUXxbbLR9iARncgYBY55fxPfy4KxA6WG1kDaTE3Yi2jq",
  "key3": "2x8iWtjYeu5s829x8ALMv7wzvsc6EAqXomehEuvVm9jN98iXMybLM1RUrTqFnoNTqGJh9YSTjjBRhmLN2HNe9ten",
  "key4": "4sJGifMrrtTUhoWnMD93zHBo8kcRwXugETpDkpxKux4bQBPyVLfQNeu3MjkmnuEPdkfrmYWCEhGxMqGmh4yasZAe",
  "key5": "53jfeqm6gGc9ztsgF8gn2ZyznXfuSxuG8wyjDoSGxrEzV5A6XwhavkJsDYJj82JgHiyYypmbZxe3fPTecW6JGT75",
  "key6": "yspQJj7uZxHTzRJnWTXC5M1SGUkxPL2FrUS5tzm3VTHLCJsE7LeVrUrXyGPf8TmH8GLX8P61E5KAsVnk59KBxLx",
  "key7": "4iTUZYK5k5uWeaUyp9iygxEr4bYob8SAPNrPZgtvzYRLKPChoHgcb7YnVZWt5R1WxFi3DinS2ycqmgxp7pmz3dtW",
  "key8": "34AeHiaMmNPnV14DHrxN7aXUENk3a4skj8raGmrQEmQcXSkMrciKd2Tq64exU2J3zmxvyQmEyREjwuAWEBfWe1wY",
  "key9": "4A7rb2Lpdh6dMavSCWd7J71yWqvbBKMQSmogGZpR6Rhe7hMu9ypr6LxsJNB1A8wJKy96TNKu37qhfbP8LfY1umc1",
  "key10": "5zuFx9h3rrryDxZnUicpJ7xtizo6WhQTC7trjgEV8kT2Aty9jnXNq125nswV84o54Hcrv4npGe3AFA4t2FSsjCz8",
  "key11": "41gFseKNA8r3XVism96LrF2Q5vm8f6pyEkk6x1pLAhi37UE9sNXXNcE1YV1sA8R9dHj8c8GHHRT7kNdJy8CaSgmA",
  "key12": "5ghBEEnsLUHrhFLapNPSAURdSLXky9CXdAUK6MbaLWKJ6pbadzaKSeEgfFqdCy6Kmv7FiHsVYKXj44mEMubpn9xp",
  "key13": "z4pZUVWtJ6psCyfH46zQPSLwyw8BqwCxcTfKLaPGquMeyeBkpS761bS8DZG3G7HE75iBwtxixh9YtdzQ8RZWExf",
  "key14": "2wfGqrBuFMUB1onxAegZAzHpSRAeeQcUEg4Tpd3zZBPr1xs8tPyw8ez1MkbgzdnYuz8m2rnKbVusUL5ZKZSksoQt",
  "key15": "2SyjrLQJ1rNMqQs7fCzUbz18cHUkz5kf6rfBWoZiUh2nYWcRMvpNZxkY228Go3Qu1tbfivyp1KTX4Gn5j57T1Wgo",
  "key16": "4WCTNadCNRnXyPNBLKxCf4ZT3zcLtwn3Mewn5irRGBHoAAC7d8Q9Di1qkUtqvKiDT72u1qHmcCAnRcK9n8gubrLF",
  "key17": "2wLwmDrsxw8s1zdoxJQZLwHhngEpgF8w8dPufKLK3dCZoX9jRGCmDXHJy6VEuUQX5LtrDakUJ93trUE6fcnXSo42",
  "key18": "1UBztz7MixiE4egwnbRi1tWQ7KG4pJhvyZRc1L7bd4V164sCq9h5E6PfwB3SojB1eC5YS16U8BrjaR4aDZe5B2",
  "key19": "2k1YyggNfJ15kSKyc4kYzqvUWaMXynWsEMkjUnKY9yMkkFYxRU6fKtupMtHT9ZZJVpNKtMeh7xssBmNwWZ5VoAp8",
  "key20": "41ZWz2vmnbGkTbiyCCRNmyhUkt3jvA1zUrB9UdgkZeepCjp9N5e6XiC2QK78sGdpSPmtT22Wy6bQkRo8apCsgcqc",
  "key21": "5CUxQGixgZGCof1sJjHsJpYjr38Ms2NRHCHH7XuJ1UEgsaitdre3oBCi8PUicAbFgBvBCwCPvSjE7tEJ7cykKrUx",
  "key22": "TkGPNW8SYoWNVZzmLxgbUbDRm1jh59CyUjQkH8rRqPCTD7r3pJ1g3Kx7HCS1b9512WRvZ7z5XfVhx3PUoe82UkX",
  "key23": "2dsnSgaFSeDnZpWF4czSZDd8TXfb7bQeKYLQBuPmo1TmfgKXF7ahreVNw2mnFTaKxLqdE8vWMn2TdpEMiaBLEeX1",
  "key24": "4VGmaaoTPBggktdeXsY6ZSqTVYok7LVLKw1bZsPAzSZzGqXfKmq8iKA6kDN5WjVcwsbMor2R9DPvhtbwmgCGAP9a",
  "key25": "5k3zWs3hH6kWeSm65MuaaQtMgzFauACsTWNqpDN9Wd3b13D474qN4HCWjgh7Pc9Vtc1X9jq8L9LXubzRsETDdx8W",
  "key26": "4ipF1Swi6z5C5g6G9nEHbUiCSkJdNjdALygRjzvvRNjVhh2xPHhBcEee3RZSrkd8y2LfgwXpQFSSneER68YTb5bv",
  "key27": "2xnVSgFNzkwN1V7QWj2KrVotDe7m1C97puJFSp8BwWqN4qRFvH35gQKMH8f7SPvrCZBabc14CX1GTKcg78DX1mF6",
  "key28": "4sF4HYxFSSydJKyfhcagNywSfrCZuXF72YkYTPePqfqtbEukGgGvoBT5JdgvkqX7tpP6ip5nLAUcUXQBtHvUPCLG",
  "key29": "U869SMHU1tmojBBrPLsAUsw3myv8poswBERdq9BMrhyv1JX4GNUx3398DnZE2wTjAoJ6JCQxp1o6YKnzyRbcYeA",
  "key30": "53tnPt83Cd7jt3YzZHRmLFFmAeV3RJ3Zi2GpkRj1AtVHCbsj9D17ysN4RqTXu1JxLddugQewLHXHWzzj7sADtXDe",
  "key31": "2Fbm9EGe4GnD9qRHvCd6eLJfSYkZPXurGeCSWi6Gf1LHqkQ7iMGxgF8odF4MWog7tkPv6evT6VNJdaBL5ru2To1C",
  "key32": "65BD2Ub8e4Ax7QUNrn1YpaqvokbdyFFW8uRRApL8RY7jFsz8c2n336hcVjnRTtYxbzkYKJ3x86eG9SeYoUEawLLm",
  "key33": "4ntV3PXM4nVscgumKLTonnCcW8U2Mo4Kak8JAQ3k6wH2MHBwtNVB5EcozKfzGFzVbRGQzk8iQtULygUEwkwvgeod",
  "key34": "3QBrwoxp9Ry8zWxRwWGceuid5XXG4rV1iSVxtdsaEr2oo9eVrigQJF1yvy2dzAaEyHEHDg1Da8x7U2AMMgP9iaDA",
  "key35": "mo4by79bwjrqW1723eJmCs6eNq3oBACP8Ni3P6CfZiC7QNcvKUYuSaGh4pwQoHtZ5Dhz9PGb1GpNXf4wnZFLt8q",
  "key36": "3jHvgFg8KAXzAXh5kayUhDhsHWCSA7XRBLoNLJMx6AVWwj9TRdWJLdUpz76ZUFjG3VFy3Y2ba7QdhHpRjYNBLnmq",
  "key37": "3ezc2qvKyqexCxbdbcMVW9Z1HDZXqsY4bmCs4s7iFvqwwrMcGVVHq8JuXzrVvhLeuvfPFmzTeGho4xU3HFFzui8P",
  "key38": "2C6bNfdUA7snXCWFQS6iWZEFBpv91Ntc6WMsefDzrWoLb1SftnhRHR5pgYgDCSJdBK8iLF6Fob9se5rv8rrt64pi",
  "key39": "7RtywtLsPXSH2j5PSt427WNeytX63HdxRUn4PiTypeCAYbnaecH19Hbbvjzx3NMXpBtMsysCTZ7hGoEcWucgbvn",
  "key40": "5ApJYJrHkxXLxfwByzGrMTffFmnAGnLqgSu986ZBBiqVunwkHHJQJwdLZA3CLEhxFsRtweULNZDAJobn4R4mSv1o",
  "key41": "2DPqVsy52hQD2pRquWihytnEt71G5PYZhVaGhFy2nHMJ2HxEmKfSqEXX19BeFfb4ZRGxMeSGm1AruBdgY46GBwPP",
  "key42": "3F7QU2YFa1phfmScfjYBkbDmd2q6qPbSkwattMGF6FEpLJK7Cia4u7evEw4PjaYQmb822L3C8F1wPEVdCgCoNYku",
  "key43": "5mRYUvfDYPXsku3wNUvyGtnsiiWfn8hneqjGViMLfK8xTRzjzyheS7iVVMqVAX8yTR8cQtWBY73tTNL2LJGZ7nJs",
  "key44": "UV8nZtAd5sozuL4S3B8zQvF1KyLdpDStMRJ6rrdwVCPsoZFrAHpMPh4Pm1iT4Ne76JqjUD2DFABeWf9k3emFUKV"
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
