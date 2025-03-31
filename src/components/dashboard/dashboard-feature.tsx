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
    "3wxckoDWFUUXtVh43d2YqgyoRUrpa6tjDZsrQD8YVDVR6wC4W3w43bHD1tAK5YgYZZCr5mqWYyN8JpBqyuYYXxna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekSNjusU947m7xMV8s4P9eqTCQUtGBq2TB9ecieWEVgiyz65d6RSbV8afF6xQDFPkLRQ46T7SKyBDqoeXYZxsfT",
  "key1": "3rAAY9zejaoNceokeodH327AxZ9KV4Tg2S9hQ1UTt9idfLYfo7sLGe6jV55KZqsWSJYVQ5kDkfbxqbK3H4sTDmi3",
  "key2": "bCPA2YeHPmY8xnxPBTCVqP6GLgGyXhAhLGGkrMjRMj9fdzr3SxayTdACoRr6vWqGpuGoD6k7UpmcGhmJChYVLmP",
  "key3": "4MCVadrY8uPp5eev9TLCR2McrYZsVJRfLPs1Gp2ErygCLFaNRc4R6Lnkg625ZHQ3G4ciVTjMZKf8qJ5uX7qT3LsF",
  "key4": "3KYgkcq15owRxMboUaPtUJQTJqJRfSAMG6biC2Xb8Hc87gE15Wepyrmm7G4e9DfuuaJ3L66777x2pYnaUF4mDQrt",
  "key5": "3vuNSc2cm9aXA5waJazT5eKWyUgtM7d2eJp74CFBMo1cZpPXVgpmHFKEY7qx1PAhnLEu2FcmT7pvz5HSS9ZAJx2M",
  "key6": "36QvPsxJXqiKSCG71KenQvnuWr1NuytL6A3EXTnsQcEb7vvofN8p4QyarszwGEVh3R9nx2VF9aUBY4TnfnWmfpJe",
  "key7": "623oZQZXEEhp2kJQbtWzd1PDpaJi3ebNLMDcZQRG7d66T1WZ6TFJe863Shar1MNc2yhrZpGosv2NVweARkoC2Noo",
  "key8": "yKfAic1SD3i7VXEvaLerYhT8HDt3q1oN4PpjyuR5a5NzpAjHnXF62z9ZRnMJESKBN97NWTwP1Guf4VLT2XfYJHX",
  "key9": "44ojyrTg2tfFRnVapvBuVSXAUwZgp2v8wrxEeh89J6unFjLj7YyyAXupFCtSqmCbLVeiKfzv7Uct6jUfUKLzHiyL",
  "key10": "3omgtjvogyib7R6kT3ZWRKuvQ9SzQThBW3QJ9qeQ3bbzT4dqQb14sZT6w3Ncs7nvPT9F4zst2VC39UyKvwJPPuF1",
  "key11": "2eCBai819FtPSfBomaPN2mymJiB6Y7HjEm2sNdKH5vSPrnqRpi1Bvpv3H38FejnqFG32gBAcHRSYXgmE12B2zf2c",
  "key12": "5od7enjPWRLpDjcWM6WsMScmDoxv2b6T4c2SpzUojofuN4sJxcXSk353Q4KQL5Yz4GNDyRUUUUvp36Jx8eTtTeFs",
  "key13": "4JqECkvr78rGbN3xxGp9cEJNC3kcJRgNTaRayyyZDfegHpwDVPfCso2w9HRBqoVxTysNPc84PoxmMuaB2gtm1g8z",
  "key14": "4qAgwnVEqr5xZ21uTyFp4ifmuqYDNTAnJkWyHExMapZJuWzGxSx9HgaC6VCDMv9KeBVFkzetW9Cp1XuDFSQrD7A1",
  "key15": "4r4FweRXao64bh2hyc2yE6D42tYccoPtDQMBRABPatcv1rdBN2SXYVkLYkNfmvRtUZybZEueg1uPbqtP7vwhScig",
  "key16": "hhSkgwJc1WwwFgeMxbrDEEZ5kf1yF3ENiB783AcxJ1QBaoubTZtfqg3rHWzvYuzZTCSTk1oPQkxMHNvw4BLrSXG",
  "key17": "5GbVQYX7LeavDuebDfLUVVqfYTtvbB2WqusNzz81wtXbF5iJqj9xxUqw9zcBtyZB9urteSyvvVvyueUHQTocegVn",
  "key18": "3gMRCyLfFWuSe6bRjjchDyEtDJQr46SPTDgCn8nhsNHJfw56NS8hXZ2FTnzMwvN4Dd4E3GZgMZcyP4T5RfP68huA",
  "key19": "2NzmP3VgktPDKmCgXytwcaXjQgZWJMVtHwx9MwBqHB764Ebif5BaLziwj2yzmWA7Vcf3T7y3Xqf462LbAK9gahMe",
  "key20": "BycTXEvGjhUoJubteqr9bnJ2HdDx5ZSjrn29Atnp1vMZL8VexjuWsMcx6ogtmKdRLU9dZocHbnBkkZvba4ZNixK",
  "key21": "2sNDv646Yx5yQMi4sUQHBZpqY5wtAatcRcb5xvfVc9rPSceCGW522nbp9XDMkomzmSZuGtWST9Y6X6UdPMyBvMd9",
  "key22": "hdrjicBMT4244yWCvhC9zhcbD5Kz5iyGNMSAL7zW78VX6pMVg2EaPhAVUHsveTa5omohRejWbAXtekL2tWem7uo",
  "key23": "4yxpbV62x3fwVxLRUXidhkoLPVw82nk3v2FKrU15sHPrJNy3F7NLVYieuWEwa36CrBvRpaMCPyTepHnoZt7qh9wP",
  "key24": "2ZxumVdgG7XizdQyi7tjw82HRscgiFRRTYe6U23vrqnQDAVTabTLKi2WpUzPFgWFhwxQo1Ad6P4f8DBtheGkKUiH",
  "key25": "3cQZsrS7CW68FzNp7tKH23rFqYQjjar2CS7ZEDmTsnxHRZ8AhuccjofT1UsFvtUJCJr248prL6DPn9ALjCAWXaxi",
  "key26": "3AqYQCyd1dXDHVyZ6GHDxgGieZxRQxNS4PckDQo6yapJ57yhPEr2JF81xti3BSZY8zSaomhueaGHHpNmwPCpb4gB"
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
