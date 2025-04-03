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
    "4KxvaF5HBYTy1MGsVFgRexu7wJ9FhgHFx8Fb9EzMax8E8hQz5oKFCs6qt8NXzUXMTZPitNHSyTMAvYhFxCoqa6P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GhML1eLFnksDuVeHMc2bZkdPAYUbcj5DViFaHA5ztUcn7brDnYNACN45WRbvW9UsewADRwj1sfr2bpDCxW9PYua",
  "key1": "3HzvxyVsgMvg5Lk725Ueb1FqyKN4ifAV3ZWbyZxMRCXdGiiLZTAvERCzQDsev5Yi86q8cu1ZPWtpiQxdXyr4AhvU",
  "key2": "4Vg1fU1CHHHpRRdLZd6KsRsrxfURNYG9ubXWYbZtRL9wq6p7Yr54rcDq5h8dguyAUG6kZcL2bpsJiMKZMyu7kXCr",
  "key3": "4bQjop3VNRaMyhWkNnTNtmFfBh9WUETvks1n2crgyWqNEoQBdbywFXPtKKqfJbtTFBd4LFgynUH1gNGxRS6UpWGY",
  "key4": "AMM198e9FHGeYzNqiJfF78wp9qM2bXQonzQPoz4AoDyZqE3u9yHysHXL7yagE48zdLLqVNi4qLjdegPw7KhF6cb",
  "key5": "5hj28aM8Na7bVBgFUcAd3aN6swD6iYQCFxAaBZk6Z9NWowNue1254Dqng3rNKdegaM8mBkfpqwBEbA9jvc1qcw9S",
  "key6": "jMrRZEHZkiwNNdugm9wMEW7HKvAY8b8zFoBcQQeAhnsYWEySp1HqiJPkBx7Qxh5x21vT7dDPBDL2KST3qze2eWe",
  "key7": "B6vbDaMaBft3Ks8E1Lw574DEwxRvQ3p9sNo8uNtYj4zks9jRHz4Rpf7vv9fsfXNG9DswLr2WqLpsNPmsYC8q1Pb",
  "key8": "9HoQsJSfnW7mGGRkP9wcSSUwnc8KJNMdrKafNtRbvvM2maPznD6b2ymvzHp8JSkEJMLEJ1DzSmSXv3U8WJyiFBQ",
  "key9": "3WL1McsaT4gcJTyx8RBjfwmVMyUEFpbUck5UFkBjmeKEFX6owHFdHPk8jgSdeDzWxHigwAJ6T5SzzNuHvePKKM9D",
  "key10": "4n6JXyzwewsrUJg1BYmRCneLFT3iVDdVVCrwjqiE9FSXo4VUYTRsdfPUW3oHNDpt5uW2nvjwZyGBfogFXQ37mhv8",
  "key11": "2236bcpgAL7QcyU7VtthA5Cb1geh2Wkv6Wmx8pqdxLHUmp12z2mgmoC4dKLVX5VgDpa5dcJaBbk6pBfQKVjk7Mh7",
  "key12": "3TAdo4qvGEUpqgimn6CEQRXGG23ChMKhoAtnVNqpKcRfG6qAuaFtKGi7yLXGCxp6tqx1DDTUEGP9YD74HsmzqQ2z",
  "key13": "5L2QYT1U6ZHKrLDycGDVTJRHJeEPsj2wmbGtGAsJstEXkdfNjYYhtuesBAfdy55CP2SZ1AKP8c5DkWfg9q9Gg9A8",
  "key14": "5HZS13nNmrkEQgJctrQ9cvYFRrYPhU4T129NJoKyW5RrkWTzovPh5EpLqdBczuMPi6Ur8jc9uhD6TDztjZd5kTtJ",
  "key15": "4sN6qbi8HAP9Gjgj9mcPuwz2UJ1VYV9LTKNo751DMxYos6dVcwLmYTEG5GKuxh22s6avuhTeo8hoc6HP3Riq7MAG",
  "key16": "3TjYfqkFR969YCnTvkeyh1pohGPHhkfEGZ1p2Yr7n777PQD6d7vB8JjiKALs5wZzUw6XH8hhgD16GA9WnkdSSuJS",
  "key17": "5J1bAGKggVkbeXNkHPkFYZGdUHZ1gDR97qByxVy4aFgH18hsTGpnZHGXsCWYm6F9gFdvaHcDi2iH9PWiqKqWdZgT",
  "key18": "XvK86R2q9BnLL1RKHGFrE6TE5dB2mcdZuoi7EDtXKk1ekzuBNpHA2zuKzkrb2QZ8dfhs4xr4dnc9M17yxoFdZEA",
  "key19": "2YLiE66DKW7xnUU9e28Ksv6mQpHgPihxaky22FD9CoGguX2vuN14nMSwmyp4kVDCN1nRkm3aJVbMMqMcUYF2iyTH",
  "key20": "9xUAPCNQUjaqzFT7WGeAVh9afM7WzazmobnXHRYbgdGsQun3J3yvjeVoLbDkUWKVseRLeTKduZjn3Mv5Fq5JQoV",
  "key21": "5jnMqgu1U4kbrvhZr9H2ekpQNJRYtZqZAXnArw3MpE5uzQ8xsx4feFJzdp9p6t1nC3Wyqh1FsHJoEWR4jmu7EisQ",
  "key22": "2hCtGDRw7vmtDKR1AjUBuTCjYhAJJompz5V3UQHgkCpvUw4RzKHTXhvMhY5Wa92jMgsEDTBYj62oLXJGdDDxt2rU",
  "key23": "35ZZHpzAZpN7DugQxWkK4Vh4nhHFPJfMN2XrwRxPNvS8VtgSbYV4SDpooJmoFWxJs3fq5iiSAQQgcEpQZP51a3p4",
  "key24": "5eSAftrRQ4JGc8HDazQ2CrwAvXQmRZ4JD45UuB3ZqLuCpnnrH6xqWrjx3nJK38LHRMajx6LabCs2PYb8BYbpm4dL",
  "key25": "4uCAooPVLR8CeitxAYdFUArHUcaXmjndbxPGQCTVf8PkdoWJrLSxpwJniEchE9R89W7at9PHdsvVaRgmfA646Dpt"
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
