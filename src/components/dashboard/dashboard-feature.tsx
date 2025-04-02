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
    "5edd5SGnmB8hgrEvfbA6PrD3UD8Cmwn2x4bKi4oF1addkv1YWYyNFcrDfykuUCen3sV2d9DiYBtYXBd3iANmFHjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkLKAMFRAnMANphWNszvxkwjcMbSDEm51K5gfj1o6CEuPrs6jDJQ6gsaTWtNXQ1iYDLzZtTfYfUMYk4ypDVeY6Q",
  "key1": "5wTnFSrE3pxCzAZF31j3uM4MGW4XqpqGGbzyKxBtFhBSc1mVmqV3r8wTR7pvoFiePyF1vovVXeGPEMmdVz5zwzYS",
  "key2": "3BsRNu9ZgznuSWdmNrujmcisPu5cgWHpAEshTMQybEBSwDmw5j8gQ3BQifTs4qt8vUmpewbEejKoU3LuaFyqT5vx",
  "key3": "3MPapDpu1HuCH5YE6Y72jgNLqSaYqurAwRrrURAZYs9YBAq2pDKxYiv49rSPhfMGebstDNZB65r4cYFAjLLZwrF4",
  "key4": "3bHsjDu9MDdBtXDTVpDhwBT9mFiBaXoUBpVNhodHaceqzDc5SvTtxverQBREYjGBFqep9fwhNS7tKHGksisBgEWG",
  "key5": "3A5UbB9NiPwyv4QyFC8iQMAMoFuq7HaJtfrW9Zf1c2KSoLDRAKqRmwoZe6JFoh4twMZTEsaaA9TT61yKJvPv6nDz",
  "key6": "3qeu9xpWQxFBXKFSxpTYjABsVgibKLVsqZ1sfjXEuR64s5jLno66AWihWUR8NEdUEQPVbiP2sn9QvFBRUy6iiu8",
  "key7": "3myBj7Q3WTg9q2qqJ1Ar244fCskVMCshoQoQmejviKNSxoUmwn8ohP3mJRtcKqgiF554kqzQ3ztsWR6Azf8SarE8",
  "key8": "XVVRP6NnxVT9agFHPgHGhgJukx3Wsz3QYHRkMuzQhGNYuxEYTsZwJueehhnfzbUGBVK7r8T9ACKsGSmxCpPr98a",
  "key9": "5FCFPo8z4iD3D9jszdjbTzHq6BJZoQzF1zoPMixgZkqzYrW6z3zTm18bmGgWccLepQUStqZf3jPg8N8V9gx3xZiy",
  "key10": "27BpMU5nzTnfSMFj8ExENYYWzru7s4PSyrRftLtiHcQPnJ12iEm3frmJxBfxdAuFyB5NghdvXKay89HQpZPinUfz",
  "key11": "5EaTetCoPZ3n5EXGq94RZN9RLV8WdT9zsUFnfTVmKu8o4iF3bDsUYHxh5HMt2FjM4iiYegQLnB7U6cpYwCynKqGd",
  "key12": "3P67x3vx5p2SbCr1uF3JGixESdkPW9Lc7tN93hN5yZANuzXzZ4qT9LswuUo3MuWC5RVRoGdK8BcHN3JXPPgsdwBg",
  "key13": "2nS6tPKSb9S8uHq4TTQhRAkfe8w9XY7ppfaKgbVMCwQJpkbXyqwto8HwzTfgks9PvKWz6dgJMLp4B6FndR4fbr1Y",
  "key14": "63NAwbK23pGuA8EcaaDzifYnW2vBtvi6yH7xqpnHbUfJvR9n2dNQBdCk9dVaPUifVd7v5STphhMb6nC4y1MZUtP1",
  "key15": "22SZH1mP3shvop4X4h1Uw87nYviwGSuphLEmMRkPQL9XLMDh8huajooAq9PKVWXfXABREfNNnY5tdrFvtY56gRC2",
  "key16": "5rFtk1kjX3RBK4eVChj7J9fSezHz2MbtEjd79HvwxUKcbBy75Mwoghfheig3KDxeLyVMwYJo1amomo56WSGUYGMK",
  "key17": "jjoLh946sKabmPPVmFvN8xxmoXaScuMU76pMHeV4xsWcmHYwP9DvL3GqFT21uaRwSqtDqfLRReGMBA9EUgfZ1Gw",
  "key18": "3YdoLSXRnak1Sd6VTX8qiEphevhUurk7N1m2ocB6poMSSyqbVseXKRbiGFWAKa9tQCTLZdnsxytXsxMmn9HQ6Y9R",
  "key19": "SFboUvEMkrxf3wYQGEC4Qa57xfNkUBWFzwsur6mNzCRFibod9MJq7CpRm2mDPBUacAGLB8ksoFVtbVJd2DJ9jA5",
  "key20": "2uwHHmRKcQpDTMZDbJkeXnwDwNR6W6srefWBd4kTpbCiGvcGjXxNTZ7NzB7TDC93Pbm4E4K5k6AFnPEZSBLKg6EH",
  "key21": "3cNREv4tsfoQDXJt7xL3Jy4nqL2Lp6JCLAkZ8CXTq46NVvf1GGMFkF2KMhvFfHMtWQQrj2cK228imxFLx94XhYUM",
  "key22": "53UTPw9JLsxyJ9ywQnhu5BGmaRfY9oZnowkKz2azJJTkgRYbdzoPwsBz46rgxPn4KGA9mhYo58aZWSYHCnkY9XpX",
  "key23": "2hzQDn4iTW2Brg7wjZr3BXC7qvb5GKo6PuPVkAa3wxXp2g7hQmiAEmvdA37wSfEjgyd45yNfw5aJ1BDCyXmD1Gtw",
  "key24": "64hL8E7tdS4QsFunFHkaKT9tKgrmn6AfkNwrivJ6tZ4uFSFjcc5gtWdALDHZzDPY6jaoRQBMk5uTcrCTNDjUetkj",
  "key25": "28zo4ccpztsTg5NgQT5VK3m5hiEYcivBoNSEVPKPPHcsYj4YLvGCCBR1odkPQbDTWT6snkdgyiMATHwj9srmQPMe",
  "key26": "4XLdQk3n1uVcXF8SqE5PkRnbT7DixCbwtYkkaFQwatY7cVFs7UaVbNQKRoE7HUJUHoCtfT2j8LJ3hM3bcbUDcgdD",
  "key27": "2HTcnzCaZS14s4TmcKTcKcewjfUsPAKUALaWZXDyWMxZDAwCCrRvgLvNsmGszhihyWTY6KugYdpmxU7oxko9xd2j",
  "key28": "3V1mDHAGc6RPzPjHcgdckavGjEZDAWGPj3dMPVorX1ZWgereR8PvHKEf1GEmaQzsdJ1yYszvswEDWmVBMvXRYPAK",
  "key29": "52gqbJgbg6T2LbyzFebvZqwA8KEw4vrzPVVE6yAxKYWC5SDq1LfGynP5dJXN44nMLqm3TGQNAh3DaPKZjM3mSF9x",
  "key30": "4ZoG6kToTy2m9Zr9TBd7Hzh1ZMwq34Tci6wrC6Bm5DcFiKyeqFoSCsu5BJWm26QRh2ff4fEuJmuT9rZioK1p5Lsa",
  "key31": "LYSVgS25uwSzpuYQafC1AsDPyCYFWynQTcMKwupRQtEBhR6maqPdYTbARGNqVQyBGn7ZBymVdW9Dcdjf9HE2WDt",
  "key32": "4wWjyEvCBxNh6p1Kv6VVtdepKaF26ZAeyCdqvceZLtQqAqiFvF2CJpGu7rGskLE4NckFPF8DPcK6cMWv8TGuakhN",
  "key33": "4Uy5JpDREmkRtG3moSFKxzpAAU5Gt1kSbEXa71eT8vnvbeWGiCFcPrpxdb45XwR6bLQTc3i3kmNgHBy7vc4wvB6A",
  "key34": "53F5sCQk7cwFd4R9pUUmqbKnDxXns4A7mNZURcZJypTHezAhd6AZSAjj1BKACapTQkUw1P8j4rnXWH8BwHMeMfEk",
  "key35": "5bKugL1buzgVzAYanFRXYQg49yXAhjgWvNLvF1e1e8peMaMEUE1v93otiyKPygWfEtL2eYDmRQWSUnvqhB5oDRuV",
  "key36": "2GZrNhPiYXCgbjyGZuoLJUe4RbuUq9RfbPZngWAJnC7CSPwhfoNBSYQ16Zmb8Ke43U8ztZfud5cTZHYGyapMrgAX",
  "key37": "2QYieA2qUShSQqr9quwH45qS7kp6NQvhvqFK9dm6hH1Hq9R4aXVTVkDjxCdPFSzwAypcRWDXnuvnEBYkWf38jHbW",
  "key38": "3QakV7HGdUk29qv2TrUvVqHcXEMUd588GpN6RAkPMA9D5Y47kJkYzKkLXDrhs9c2aJ9MSkJtNv9vMY2YgvbAGsix",
  "key39": "5h1sbXhwm2ZZrSUnEcTFWVpADGDm1NHA8pEmbTXu7c3pCQnhWQ3XMSKXcvQV1C7RudC8q5eE57bii9zdwyu3GRC4",
  "key40": "5T4JgJYLg55LAG7FiJGEe2dcbYTy45wXrDNpZ2pgDJqMNSht6S86YRnLDxVym3TA4k4dtpBq3shTtKnwUKCqJQh",
  "key41": "5ECyFJMAZvfbbg7MsqG5wsBjKa1nJLmGEQhafD2vjTLKvY7cMwc5TufQQrNvvYVHSKNe3KpaVhuV7LZuYpJrtJFH",
  "key42": "32ee9w1vy3phe1Kavc4cY1uDjQL7biZiiRHSGUQ3BftG4Vn9cSQXbR5LnVw1UQZLwEFxGRSmpNoubfG5mL3C5PZs",
  "key43": "41qA7vtH7cFJkcLruwfg2wKUQrgx3xj9Vy256U6pdU661t52ak7QRRMssTtLaEFU8Vrr4TY7FVhEEzNTn5zUoCdt"
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
