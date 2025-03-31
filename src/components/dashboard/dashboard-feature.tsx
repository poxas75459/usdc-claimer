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
    "HN81GHPV3UamgFFiT99N7njocm3DFcvoJh6JB7SPWWjcSDMpuAeZ6451vEpETbPgHDMxRn9kZxgNHdHcvPXBXkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "278vyj3n8Sm3cDnzvFPTApL593Ah3z6NWe2m7pmvYopDDnagAHXp7Ph8XyNsqMiZyTv9X4hUKqt4vpQUgRNCDv89",
  "key1": "51rmv5U5LvprYnXGejG3H3DJxxq2PdQHLANVnbnFkg4hasAEXCQxyRWDexbUjNGpVPGtFM77Pp3nbY9FWraT35UX",
  "key2": "5JY9YKJyFoW2KHohegPv4tG4RTJAc1bGvCAkCxXpYtdV4WPoV1JF4DASNfecNKmFsGyhXRfKSCxYSGurxkVELFNY",
  "key3": "4DbyKmE652TWfTPszDU9BoRSkWvxmrkvs1oB54ktfX2sq7ZdCJtDwaohwVKD7TQJcyYeWnvXpnDcNXXGSCDced4q",
  "key4": "t9zJbdLFXPnZq9rXnQqCyQ7k4LvP7MVvwJFaoWJ1gTNrj93QrcdQsmTJb8WgpTd8pMjDNU7P3e6vR5cUBhj9hBF",
  "key5": "3x9WH8XEBbn2v1G95yZEf2mWQygWbr1fgnJRuatX7h3U8p6kGWnc7jV9Gbr49m71VY8SRLx59P7mHgc2Y4Mxr16j",
  "key6": "BGNLRSdNFimupE5b7kjJce7i4ruMYbvMint3maKxJ3yvMJc62ZFSvJsckHPhWdpkoeKFHxMTtCvK6biSHBwFTNj",
  "key7": "4amtS3WK6YNemf8ERaZDED9khuwF8gQRzjoozwNftHVW1N8dpAGVbEYYGCKgMqGWRGfgrA9KWR78gQ4jWgWNwLZz",
  "key8": "2F5RYqmpp1h3x9hwd39UzQf4ofhnQUGeegHce6qpJhBm7s8mwHXTpwEjt1R8zunXYZyovPQdUQKj3Q6y4CHFWQ4D",
  "key9": "2oqzKmxKcvoomHGntZS5H3nL9ua2s4vW2ByCXr34Gs7c3cczybLKXJgdSPaH4j4AY64tC4N45LcmMLWNZ2Zgpck2",
  "key10": "4p9HzmngauV2FRUBUmTuASsaZmRnfGSgkG51mny9JgvbB7hss6Q2Frs45LDFhREpusc9RQYXSm8hSbxULM9XHvpi",
  "key11": "5SFf9UJFGGUxd8QQtkxwPMmrE8cxwqkXuuaxpXeWPCPBEzn7Q1LchLPWMcwtfvyd6kbCLFEHSHTP8cuP4FD1icmn",
  "key12": "4F4QNThP5Do9pi8VBChcWHazz8r7Yg2V6xSU85hVxtPnw4qe9dZ28eJA85q8qSJDQLSdcVk6vLSdWeaYHbPVZAjQ",
  "key13": "3HicuU1HUJerBaiJV6JvRjDtdmr9graqzbz1S8fC5GHafBtLLCrAeXhkE4TXpeoucW32omJutHgTnB8FpbAhf5Pk",
  "key14": "AJk2rxwfr6oqGHHUo7znsa9EkYWEbywNofifyNsbSn8QNL3UK1qaKskAcmaFJEDQwzRGb44fvissFpbr3FknXxr",
  "key15": "2Znzazm726v4Q6LvrmiWScNeZVZs5LSvjYfqPxRrEiuM3wLxBD4HBuUS8MTRYw3XZReZWhHd1vqks1qBwHwAoANC",
  "key16": "4d84ZsHYD2ZNdZPqrRTS5UXa2afQvXZpXF2rYfaZMfeH8SkvxMAnZKn1bfysaBNE5hq8AJTjT9ku1XpexXfBJSTo",
  "key17": "5aYKFyZ3dsQP8uLevxPnmNQXKDtsKUKTwvngYmxLFZyyY94v61MWw2v7HazWdmvqmE98Lsecy9UHtUfzEESax7s5",
  "key18": "3skTjhLFKTg4cPidWjqr7eHqqbsoXRWvCnHp7VcpF5qj8huaiDVWoz1MnsELCwYj9ZfP5iz7oFk4FHbCbGx26CUJ",
  "key19": "2TQYDiDY7P6syFhCHwTEg1gsBxE5Kv5ovnRhuC1EdoyWe7Cp92F61wCpYKFtwTeu4dWQ4sjzkt3KSHaap1PNfwkD",
  "key20": "67ScfhzbzpK3i87mTUYi8znzSKyRPS2Fkkjtg41xkAxwhg3U7eXdRDG2EHD9dmiTouot2mseFFcejdSmAzvK9xvL",
  "key21": "4hrJeF49UYq7XgWb7UWdVUNPBate2p5rVzD3LiizRVNpeHbs9zeHnjebhLfwqiAfghjWMnJUYJZdCu1MtAJJRseh",
  "key22": "Ff31dkt41aBEjdKSppUtoAqfywX8gPchuuNBHFJDbpWxD7HovvbubPrhf9LdCK6Wjbcr3PDth9PxXSSpwsxVWE2",
  "key23": "kqi29NaLaPfFT83i8wCRCJiivr8oYBX7WpuZ8VW8GDZZAZ9bG3RgCisM6qHRkuPY9Gti4FNDr5rtFq8uVM4HoAR",
  "key24": "zXtPoyE7Z26dJmLp5dxb1MJ6LLJWhUMuqqn6mUJTbxT76njgreTTYxojJEbBSEZVxTJfZ3fnQ4jqpHiUNCUEnxG",
  "key25": "3znHicsPpziycE8F9m72zgzosjGWE9hGZKWy6bHc63sFLBWsxpgF765KuCsCYs1rkAVZ28dddL7RZqsEw3cNLVmV",
  "key26": "3yyCmv4b7y4yymVWgmjyJxDhCiZ7qESKXbbJn3WwstQPCzAKojQCakoQymKQDRUVuKp6HvJDEH7Jbq7QNVGK9qAh",
  "key27": "3fAuin5sLJjCTFyewNQ1hvQwucpp7LXNA2eHsED2JX5ugR4VetvsqTrQXonFmqNRfQfEyQg6iVpmptidty5u127j",
  "key28": "tPCeuwydds5sjZGZtXmcapcHmz8DSBQKKNv4dZUfPdahqTVDXUgLuq7YUjQqqBeRigx2R8f2LxnuDDrwdR4qfQU",
  "key29": "56eePRg8HJ5uh8S8vdqh6mo1CEjJjTWec7wwA38EkF14voxnp5ozHrZaciXx3XMf9ArZ49qzduyXD6TkFeYPjUk9",
  "key30": "44E9KPghwSSnznPmeDJDtE2Jhv6ipjEcUXrARTvNjqs6nvmW3DCKvYFMfp6zRGZMwtuhaD9ycpEN2nKKFkc5iew8",
  "key31": "5hKwstuSoZqYHowUq3CbbfL9bPsJ79GajC7Q1dDN7GywbjaMTDcReUXFSSKS2ULjf1XUKyDe7yXef7p6NztSfacX",
  "key32": "3o7673S2UXKC2bTUUeNgURbJrVYTpBr3sEcCTDrbZ5V8P3WkrZnRbmvpipKKfBh5LegvFGjFCb5HRdnY8UsH6Ycg",
  "key33": "4fLWsvB9gsDH7LncxnznyAgcycT7vEYnQPiC5vuhgzLBeRXZdryg3a3rfLkDMMCFeetc7pzFDJERhkdDbFhAMYQz"
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
