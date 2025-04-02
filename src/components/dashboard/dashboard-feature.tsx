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
    "4hK3p4qYvHCnqNGneFxbeqnYRtTtjMwx7hMfbd5MuRbs6iBkQoJDfEL7d9TJSxp6jzu58xwyVy7diQ7CHPpD5DWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBj2QXr3PVAB3S2ome5ZKvzoQognNhcoduzurUPg5RdU553dFbB9BfRQgsjzD8Xw4vh8dDF5jefBWTu87P1UU7S",
  "key1": "3nYF3Votbadf1j7gkwWhs9igG62FBktp1H2F3YZJqt3AEJdz2EenQ6gEmaT7YFhU7MGY4R9DiByzvyvJZGCASzBJ",
  "key2": "4oXfLZtVhHiYFtB2vPfsFUWeMHNAn2s5hxrTgTR7BQdqNdMqRdhgCXVW8hu5HfcQ759jwfLPkQC4Ts6Z17iSF6sh",
  "key3": "bUhDpg8QtaoMsuQf7NQGgrafKujK3Q6qudv6sf7cUsy3da4kxixAWzVuyJFJDiE6S2MVTvM3F2JJ7rAsSAmzheK",
  "key4": "3S2vbYJhMdBktMBEfX8d8VgZkvknDA7gG4dWGgCgj3KEPcTUWv1n9hB4BcQASgKL3rKASLgEZAbPDzkXmKJCqhTX",
  "key5": "64SNYknWahfPevcYQSfdhmc4h6mjpJEJENekjXoLPSaXBFAYyXGYjqFiZRpRYBqFfZi98ovbEtMZqN3mLU5mCWCN",
  "key6": "KqVDP92Aab8S16MS97FXNjhUh7fFkbs4joKiv7c88vrhRaHA4f4VF5LD4hU5VjWjj9nECaAjHQRvCzvBGp9MAZC",
  "key7": "5JVRE8wiqErqqeEn3CHQ1G1yqv3nH59zXN18vsJN1L2kRMjwBZRq4EVLYKNg9Y7Js7XV7Fs6cGcfiotHGgCELLbH",
  "key8": "tXmhWdJJAyXzLU7WLP8887HbZA3j1wrNyt1p2MSkByS6EvSCGyJC7kQ799PahxNXfWf1kYqL9QnSsEguKkfEarn",
  "key9": "3VCTkTMg7Xb3GwxTACsChHRC9w6GE5zcBaaVkCoxu62od3FAQsBkBaaxgxxrSnJJ52RyuvPJjvFZDVBeVMd1Uhed",
  "key10": "5LuTd4LnZmWgQPKAJCPmX2HNP6TxXUWR5mw95AhPKKjRBjFkTZJHWQmUpQ14gPrvswZcbfQyvSoUuCiHzXS5GjoJ",
  "key11": "32tjiaiXubiueWCJSxtm5JFsqr6TVMkvfBMNvUeDyyGWtWdNSgMQjxYpBEsDq6bc6Af3znrhK5Sfd6d7z1bmGXJ3",
  "key12": "5qJW8enpx7BtaVGhBvdHAfQU23e1y7yN3777ECzoGmjPbUb8sU4eJ4Ch6oYUCFPvkN6HNdv4Bfs7P6VPAc44BGZV",
  "key13": "jq6Y8aAjAvUtydhPEB1h85nR99Ws5g8nVu3d89oEDM1Nh5aPih2sXP6gFvDHYRDjHWDcc7XLGS5YAYtmbxD7pbj",
  "key14": "w1UadB6KPS4mJPKJsT9fqkJe552QB1pqS2KkuRi7rhxjFZrv7HnNxE7QYJ3X6JLMWmmy9Lu7niHJxKPvaFTZ7pC",
  "key15": "3CyDNioi8rCe1yj9E4FQxWoWf6YT2T1DTzb1XSQ4vq3qd5gv1FtJgWYvYRMUfRvkiDigMt3kTZ4W36gWNYxjRoVD",
  "key16": "387g7r32aNCLAHbyoNCY4ESAeaT7vVjRpWVtJe7SPn8D9ZRMu6BHzd3fjdtsviKDHao8fvNSomQEcfWQrtF6N1Ev",
  "key17": "3cWr1DfLuDAbjTVQ8CWR8HTSQcmySN37asA6sVYRPSq6YaVrxwHLtpy93xjhLhU3cL53kM6vbzkgqhfBPaMrt9j2",
  "key18": "48LMhNBX9dPBHwgiiRNygiUMEyjRVQN3bg2eFCcM4NjyqbD9cYnQN9wKyC1UY4jr7U4C6MEPhmNzJ7hmjuryUhbM",
  "key19": "3DX999f3fMrd2eAk3RyzNufSuWBQzPMK7Kgz84UvoGheMCoic3V8AiWN4dukoctDJTASaWZLcF688t2q6baRfhVk",
  "key20": "4BFw46HXUbBHYQUW4FG3tZmxSj9ELbW8vNtSMiJ5HqzMbEerLxmRZ6ujAo1pSpeqaKdBDD6SzLvCttmnKZDbbP4A",
  "key21": "42JycHThgZdok2CNYjbmhdHNAowCB8hc9oo6oK5mviRY2VNYwJhiwzRrFoBw4bSzDygMo1FXE5m4yQxUsdQS6tJi",
  "key22": "39iic8d8G3vWE6KTYJDP9BDv52MsdDNZKDTiYBPKLpVYNkWzQX2EcauiGdJrx29x7marnQ1zVpKGda4mpekDfo4G",
  "key23": "2X7p2bg3JAaYMV1yBxoZqwmwZRcMy4DPMbdwYXm3E83Qqp3srQ8HPc191vwcJmNvNircyzmtzKMjp5ynbVC2KXQk",
  "key24": "3cD7Y4tcNQReGLYd331w4dN7Mn6umhPiDBUYV21nsiMj1UEkTNiBBuyRzM9r8UoYo6YnWM9BoGargLxvXWTEufnT",
  "key25": "NTjmt3UXQLnWTV7Qw63XpPVbHF47UR6ggjEKVbcWjJKBiZptHVLyoga1Mu1D1SrgjJnnTQYk9wf93VJYBeSCeHP"
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
