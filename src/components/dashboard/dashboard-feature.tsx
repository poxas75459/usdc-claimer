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
    "4qkPxsvwV5adRKWmMdnWevJ9Rea2R9mKtfK9eS4j8czSMCxMLnqGdsvvcFPadaCWmq7DMp36fk6QdNUoYn9PwpD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWTdP5ZvtDqCB2a1tE7ULobx5o7bUVeRPUksBEAX8uWqEdqk1jGJ165tDqH2fB3RgtwrdMEAPBNzfo4fA4peEiM",
  "key1": "4pZSseDAVGtMMwv4NReBHgnDyqJShwbdzxgF5NH4HnjUABEbtupxUKy7vo6F4CfzpE4n1vtsK8K4C9psZbt65Ggm",
  "key2": "56z11f7Em83vVhztQ2ByVR3UWAVvgk3ADwYVuv9G7wsgh555tqPTGq222nQVbVcY7ekgr1E8mpD6C8CVZxr7yAKT",
  "key3": "5o8FzNqoxQcSKqooNrgRoUHi3rSNioEr2eEh294tHjbpwPEXcZMVoCgo9HGkR3pFBWS3fNBCXhgmVns5tZjTbtQ6",
  "key4": "5rec1DXsJ2PjG5LgiTiXv7hJ4us3uDZoPYKeDJjvmvnHRwZySeHdR9W3Ch7ynMjHoVJCpP8zZiz37iGZJsw2Tpyr",
  "key5": "3BrADPrAsSYTZNUPD8pwrvg9F1eKEoBTL1fK67ZHF6b7WsKogracSSuiyLsb5ENTNyMQYBP6Md7spG23NZbS87Li",
  "key6": "3K3zFBhZrsvr1MegFdCEP1Aoom39UC4G5QanvVqKBoQb8narCaxrWx5cEsvqYDfv8Npq9kxs8LYbCLtKgpAFrhMn",
  "key7": "4xzYHCuZRUrJbRkZjSt5EYEwaRTmachuohhe269YsmG6DFkynv28gANGThZKM7n7mCncdPcJHbxHRCkbhM7cMb4K",
  "key8": "4z766pwgsYJLd3dv9AEU23XeMDML5HWKjaCZjTVqotdS62Ley52JyhQysXiBCuNs1ZqtMr5SWKiAuk59tf3kmyss",
  "key9": "4PRBbKLYnPWKVQzeyHYSuxuc9o7Xa4SPcdux7284JtgFVHoVUgby82a9ZBcEKveGctphWyL8XGnVxDW3o2TyycRB",
  "key10": "4ebyfT6XAfbL7myb4ztvjRZqNrZaAHXF9ZQjCqCdYsBp68WUydjpCMKd9Bft5WK95PikhKVNZz6NnhFoN4NgpKmh",
  "key11": "5uD5SPLFhZmb3X1tMqv2ZULFhwqAVSUvetUr82dc32n1aWXHpHpj6tCeRHTF7wLgCafEMk4euNGTK2nHrzz4Vjqe",
  "key12": "3PcqUhyRhqRQ8xHwg7c9y6t8ifLqfNNmRNwiS164B7Hh8vkSmux1st31N9StPJcQzZwUGnP5QaHR9vw7LXjkPcGQ",
  "key13": "4YSphbdqSJFGYs1wPnGfCANBRAtgZN6dZSgDS2bL9hbxjBHk2QuZbkc3Btb1Uvv88oqVEwvv8gShM3ZZWDssEWqU",
  "key14": "5tAZcTeCUYWB1wzpyjngPcbiSiLfvaMXMPCzmKQgbnUHE864CamsKw5LLyb5C3Q6DegD5UqsPRprgFtNvVeLGHco",
  "key15": "5VNcmSUDnPF9yzxABsqqEnbkQnYgqs6wDqPFFxLX1kSryb6QVN4XhAFM9kzDvpxmE7tgPuUKmcEL5Ha8VKCguzpi",
  "key16": "5tUrkKRZFFd1MxbAJrrUzmzCbYEvhedPyGQjLbXB6UrSxnKDQBVkFHd14cmVybVfk4ZVhYLEiDjemchERUHjMi5j",
  "key17": "41TH5XgZhTMR9qfBk362sHtXU3kMetS9Vg3GHMnnJRV9iib3KeaZkAESytn4SBn7Rec7Qe6CEVKxBby8sXcjefoB",
  "key18": "4h3gN5PrCBtM1qdZ14SZw8dR5wtxB3pN1KfhNT71zRFZVPMUhKTL2r9abuLAgPr1kFVtMaHUEnFrNEESdqVifKwC",
  "key19": "4Kx7fKDbz5WuomKcut1VLA8XymqXpzETP1oSXNdCKcsxCdQUzWe57vLTMNWZ2E9S8kQAwmjeYUrgx5BoPrs8WirY",
  "key20": "3jRrqKMrQS4H2LGfG8DrpkXXQ8wPVZL7skvpTgC49YdC595SH9HukdfNZjNM4Z4zzkdKvkP2yuHhtPqahqnkQhZf",
  "key21": "ebK5ddpgT2iSDWmvpB6LnGANtfUGb3DkRkQzg7Hz4stf6LfqbVT8FyUxzigKYd2ttGFa5gMySfHYrPsDmf7NBjZ",
  "key22": "5LFzwHB4BNakDzkgmM9jsCXeJivDTX1pc99LELhWhAXRo9BxvCnBmxBjevgZMm2iGeQbmsgmu9VjjXrxNJs5TdeZ",
  "key23": "2nQgy1Rd89XDPHtYmnUyTeMv7Gx3yzVzx3KvB3wQNGbkcKPrBzXk8jGv7BjYddQ5EtSyuUcekNi9oGbC4TfvUwid",
  "key24": "5QdccUQjdsM93vezcBXbnJcdVm3FydW14SrCoDhm2YHohHReqgqtG3KkzUxumdJgRG5R91iKeMWaNsUodoqnN9dK",
  "key25": "4tPqDwobFoFTiu2k9kxvhHPjZFhUiQKN8MsiLqhszMxHEr4YjfEBEHzAghFm9nyoXobNaLxf7Q3JzzwaVmnfitBs",
  "key26": "hxv7F4dDLub8pnvXVSND5GJhLXf3N8ama83aGQ6neEpodWkdrpit33oH22QHf7g6cgDH6vBbVJdxko8ESkVwdhv",
  "key27": "cTxLcpfcjs8RD6aD6hihc2SGX9smA648bCvyzPRvg6EqNhRNekwLhu7t3D81oz3i29WzmJtEthVx11UP2Big8BP",
  "key28": "6RHZNdwA1D1gWsNkRre4WovpCk9z9RVg88srgeGGxPAU95RkZJC6XkuG8TLAL79AhtAcRH3whhEijDWusEcSK9B",
  "key29": "3iKxWMoKXWHX5fFwRh6ht4Viyjdw3diX6cfLX6iXYwywRGgpkgHNxUAYcVudBZhKSBWTEAzvRgEUcvWux7Ypy8yH",
  "key30": "2mCnzVwkwxKvd8yKQvT14eLJNbBAoQ8brTj5AQiLQVTPUsMyapqzMihr6BEoTbzZyCwMWaDjcwkPRNpoUpZuSaS6",
  "key31": "yhJRRigamNxUy7aA8ioUzYpEvb3MyTPWhCKscJLmjVDKMRSi6Br6ozFUN2BjwgbjBjSBbqNqRBmJ8aWFBcY8Y8B",
  "key32": "5CaurdSGbAoFr8TgFi9H4NgJZcWAEaJDZPRbrt2Gqdh56Z3KyeU3iq3C2AgpCnC3bnT7HYzZjrXYWWaErVXWQ7o6",
  "key33": "27y8svdnXXPFFFHbhfRXRgXWiQzasynUhhVE7T2ibrCFzZz7j58Ya6cKe3otxD4jMWxCyw5VghaL4P7zNSsoMaH7",
  "key34": "4LTKLwoo1P1oZ1Ymd2g5xVgKuGvp1KGxrX4g6LepV3Mjp1pTvLJnZ4vnqc8R4pb7wwKCHeBUZvdkMNrsezsT5UwE",
  "key35": "3pbH8hoCzEjdpb522vhUjcaMEAmRG7a5y1xP1EaHqdoKHpq9ABqCBjZwV4PmmYp4369nZBnA4fQBm8GFSYFt6xy2",
  "key36": "2ShLzxFqMuNZSEcKH9ksQFZC5zqX3C44nC5dATGj8LE9K3FxjooVLkjZfYaqZq2i7t5G3TbQRDNs6zCrNLqkDYGe",
  "key37": "3KwJhpNQz2DXtmRbsPXC3gMgFCAnEnWWXgMtsfSZMyW7EiRDNBoQaGRRfPX9DWksz8S5yFAtwBLoeby1pnkh9vig",
  "key38": "hvETit3NY4BqH2Qa1jiHVqU6ERYUQ7U2Ywp1PRKfFzWuuMsmwvzPiopsZpx9wc3oVB9UuiwmnY7ZVbbv7BX3ibk",
  "key39": "5LKnAofJchECnbjmGKdg6mNF8LNqumcP1c8eA1xD7cK5CdGmYKrrybUCuGms6dJBvgZum6hc4yFEkpyK3mhbeds",
  "key40": "QL35A3rVNdhhz2bzgspqNF4XRu8ZGzRKAiVPtVdrfXt3GD9iggANGG5JuSjYpbV5z3gvVms1HjR1g4UYjDU7rhd",
  "key41": "2grgvYrjjXFdY6jgoB7NBcvuv1VCH74Xd91KDgm37U4RQo64zhRcCrG7Zo5yo3M1DbdKJWjYB6fdrMjLmTEkPdJz",
  "key42": "22QR1wbrxnyd4ZJyyq5D1kfapZAVFPJNPd9uMC3nzoyPYRjdoyy5Y1qdooAyfN6PzoiHGmAY5V5NyXcre5cbRAyq",
  "key43": "54duevSopQrkRDas7CTB7Koo6hWdcVgkfSTMnjr6e4CNhfk5eQyzDZw6HgwPkemi9ygJ2gf2i42LNFrYRkj9H5RH",
  "key44": "3d5R3YMBovyMFnXBiUpuzcYiJoREuX13SgyoPB2hooSz7r1pqbhoZZo2wWpJr35poaJh8fsZSomaHKyFsFzy6B64",
  "key45": "5d2UbAowLuQhTs9vCj4gX5V4KPGjCM7FJtG6FCHWZjvTjrFPLLEjTbwsW9qKfSzES135Su1QZ8qhK72QAsdASAqe",
  "key46": "DwMZp64WDynFqSzD7ETuxSC7tZsBWMXYsVxTEUWryihuwA5Ab1tRXe5a28q3uv4sGwtSVCcaWjhLcRrwxGVEp56",
  "key47": "41tdYELDqqFhFktvNjZ1BrqRsW9t7VScyGY1TJsiH8Hny68U3Cv9UfFWsdsA1CYWqEKhngmoQDa5cA8NTLLbitsz"
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
