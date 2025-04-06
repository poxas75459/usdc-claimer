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
    "5cyqZJVojMkqaK4625GJ5NPhD5suSg3Riiueo9sf4sSbBUN52dmyPuLsdKcs9q2xL1W6NmgMQy9zG6USsY1zeKJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52r2Wcu5pAs3CsDHDBA3phtMhDjs8YvNv7g7QKbeoYYRz7a3BcLNgxuefH5crdmmYdtuuT6YhVcunAektswpn6qu",
  "key1": "4mY79iw4Ufyh9tJLZxxVARyav51Xad2UsTrDRJUWgJUVzt25PxZZCH2U1kmmNj6PeADWMj6VHoLYL8sdGMi2w2LN",
  "key2": "BVPa76XkjJXHd8u99izBvP1gA5RYL49ucAqRvWWVSihuaLrAAkECG9DLzjV5oSqQv15mmzKnYS4adAzdC7BfRYx",
  "key3": "1tDYumvAofYyHPkSYvuLqCpB4e4z7TZXSB6LWQ1gtFoTx81xiJMqiYyfPggA8YLnCmMVj45kke1KqauwUYrBUPP",
  "key4": "2tStRtAoXzXFNb3GFXSMQnbWdGTX2caQhHcxEccT8YuyTAU1k7nWsm1WWwUiQQ5zS4PxTcfhvmaDVjSGTQanyden",
  "key5": "CWfjSuS2n7wSNBN9KKZJC2nR6Lix7xxGdFQcoqwj1mp25QNydxNu7kAT3UZBbAJH6Zp5c4RNajFBLwEV6Kr8TnW",
  "key6": "43ud9WHjiSH5LpbNwJTmJCVMUXXaipmkP8ATwwwS5h57dakQB3CjWt8hkZFcohJ3guEiNsHJ3ziAuaxCViURxUA6",
  "key7": "dgYWFERKKurgMiJ6nBDpdbECZ6tox9dcVbLJpPBBgVp7xAusZVeUMDpBXhbzzxwSfoZC2wT46GD4cKyTAh36dge",
  "key8": "uFKDwWQ9XhrYktL81iNMqUZiNNZGfjecrAmNF6AVdda8kmoRXhc1u8wXjMaRobuGpv21SsYQycnnLHhn2qakfQQ",
  "key9": "4RvJoKBkMT1f2vhBZeSUExN3jPeURxFs7awisAVNrrSXjVGAzQLb6v3xu36HT3Lfd7PFvzyLoLebtZTwWySMKYTH",
  "key10": "338iH8dDaX9uR4u8MgWyeQvJUnViN5Aca9VpUA2jt6YKjpG5aSk5CuoJgcHK1fk5VZ44L2DvZVNJ5iypoVjBkLAZ",
  "key11": "2PYMmbupWniYJdy5ajcRCeycy7t4NwVbZz7nkagCK9LnwCTB3SCsdDNbrFWYjKWJ36dqoD1AJT3T9Nrcvnz9chD8",
  "key12": "qwP8UETsNcEoKQ9ChJk9A9DjPqTYfnej9FbiQEdQbc7XKzcXdBn4tGbrGwKh7MYJeA8WknGhMcsAJfePR4zvVK6",
  "key13": "JRKRmaV8Z7y9U3NpvbP8b1dqoGyeTXVdbJvXMASHBaXBkNa73JTXE4bAqzZZbTFnDWuKzjeK9ddJbygCy9dWkER",
  "key14": "42K7QHR8bsx2ReheMPi849AuFHHzxfmfzYiydSRhhNaCce3fTQtx4kdWQRT1GsNX4s2HLEeAaSETTP7R2KYyzsM3",
  "key15": "4nLFFn5onVpwwiFkqihQXvjfbpg3cAa7t93MS4J2hip9ZS9fSPqvRKbBvrSTtnwwEZQ7h2HFa1vnTkdtdzGyeuEF",
  "key16": "2qyjz2E8k5p5WjuxZAUfzFkwBriBSNft9c2pKVkHxMWmZft1cFLkXhvfWyQiRn93e34UAWQfYLWiRQoEHDMmQV7j",
  "key17": "4T9PA6P8UEHzdik4mBVU9sqDrLPVtyPNTR5F7S5evJ9Sw8TQDfmNY4EX1UrSyvVUpQKN9ZvUL987ki9e8EZjwgTt",
  "key18": "3YNBh2JfRkXUmgA1fdeEsvzLSvVHcGpF9WQLz7cwj8dYUTLbuuEKzenEYfFdjTT5ABX64SRihkw5wMFPUorUyFfR",
  "key19": "5uwwCC9n1WqGYP1BKVSJtDEx7tLchhHiPTz8xZu8NhPEkmwvoz86Pmj9DK9rj96mUKCrzWpF9NgtxomfphvP9ZSE",
  "key20": "2fHNmLe7byERU2v5HDXYLdBuDdYua16RrMX2HPaEUp7rfxHfb1MWaEKn8nntroybR7xkKsAE3a1uUD8K6tzeREvW",
  "key21": "4KcxFb2GaxvrT6AZmnx7rhvsdVkgAZMAZ8RroBwac8FeysjX39rC1f96QprBooTFjvpKuT1rGBT4dx9bRoNBsCEh",
  "key22": "5mo3C5tmTzcVzWzii5Yqvm5MmfLPZ2BrPnLZdFhsbMTLNvfATzVRUipgBAAFyogXgsM3EjYvZzjKszvBWmuqFG1t",
  "key23": "5H1AD5LB3pWUwrWk5Sx4qRJUtpcYqq6dkSYGkKjDp3wZAz6ZffgdXwBaBgYwB1myviVtMSzxYYRNzuVayEr7xmAu",
  "key24": "5sNXvvVTfRABMUyTt6DNJ51JRNudt6YiFj214YmbodgAGEJ6rvqmFqn8T6m8GBCtjV8qNpyEqQi569rAK3KjD45o",
  "key25": "3U5S4yGZ2fFzPzoQrw7QBsyFE4frDfnoizGhWXS4XU8UMPeJekRwTUgHEuMuyWpPdQQrqgiZR5kLM3HNzP3R33pW",
  "key26": "4YSdqAjNsmRsxvvcrayPYrkJr5SGRSxXEHU91FDbUEETFewVf3QR5CXdHKARjWLxRqWhzMEd2b88jgYZZJAdajko",
  "key27": "i6bYc3VuTg9osBf82ZHv4sx1cJoFZw58QHA1Vov47oxuxTqxrosLzPKTA6x6CafjzYKmVpaeT4jE9pwWfnq4MEe",
  "key28": "3CK5eW82xoQmkTGTmufB6UxsFAS9ZzGHmo4DcNHtBrB9pChPtde89GPJYpkzJkP7Bw2i3nCXYAUdTU4hJZid7iaN",
  "key29": "2AvFc2N8ta6pWNtTw6mhQp5e7UGhaCtWvMwr6dGMrgcoJLBU2PoMDe6owAQ7v2GzaeY915be7uu6dcpSvKsPCGc3"
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
