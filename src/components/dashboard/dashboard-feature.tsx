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
    "4vQjBR9xA46eGYjFSAyC9npCv9rofNs2H15CCXcRgnPd4hhedsQmLFZwahxdyJ6QaHyteao7N2g8CwBEZrNshptN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9TmM7cnM9BSS2W8axABNQTjaNzAGm8bHeYGHwKiYPjLCGq6XNb7q5mYcXCJTn7iR2EVYNWzcUiFyark4rCP4yz",
  "key1": "2WUf7y6JGaPH7EghYXzB1cXJ2SytfWm15XztY7yZFUALLkwMvxbRWYWv91C8pTEry3xynE2pnF4TnVR2peWU2Lj4",
  "key2": "4sSPCt9iCn7pSkyvMWMkf7MNZt7WSnMnhzwzJysmHD7hXk1kTZBNmRp6aVFE2RuBp1q1wSEV6Pqi5MZJ9FbNbXx6",
  "key3": "37TDwLHabHqiof3Xin9poifB5vNaJjbTqdBKLJarpHmGjUU7ZiZnqpZ3c3kQDvU8sHVq4LG4QH1KVC8pE9nxpdKJ",
  "key4": "5qGRwEBYgks4A1vFhW9dtryQJGpWBXUoAvMYvsC9sAFpXVaodr1zKS4MtqrNoXuLhgJa9ncoYS4N4NcXuPLn5u3y",
  "key5": "4hScafp4KVotaqTPEZCNVtrgBZGyp6WurqbB4cQy3hCJqzLHKuzEp7UgJ9xQkRhydx2wPzUXJva59mN8CWvgJyMg",
  "key6": "4XbUoMRGwDa29rZACSGBFZvmY2k5Lq4PnnhcSiEJf8FaPzsEgVrBFofvpxRQFx7wDi8x6mCoNyM4gZLfS8qaKVZZ",
  "key7": "2KAUEJEimpcpz5URKXZjEyap8jwY5TSZwcTBzUM45P4E8TGx3wF9DKH2Q7w88rNSG72JRWGZH4YQyESuTk86BcUR",
  "key8": "sTjpG8ydrp8jJhWJcggUZdC1BEpDyJkvfKbgEqU5u332MfUgtqFJ2TpNQroZ8jjhpBpY9eifPesFRFCopE18U2s",
  "key9": "2styGp7RLTjyGc2MmgdX5kFMNASs6CgY5Xn6RBBABBvKWrD9Q93Q6p2FNr8249L1MmrmgLa18Z8mPBRNA1Mrjhyn",
  "key10": "4Ya5LuWqCtY9n4eDDdECacYZ387JjJBrUi1Q5Qo4uGFjuKZADDbaumdY8RgzXgA1TuYRzbMdg8wMhu1uZmGdEZax",
  "key11": "51nKEgn76bXMDHFqcJvcKHXQiQZUy68H7MjiGvSs9L7Cz18cUTachio9FjWryms7tpeaicSmBssrgEJTV6deKHSJ",
  "key12": "3ep23uXqrn2NU2vWwCX8RtYjp6evcaASCBKvbV6RrraVqbbWFWuhT1q2pNt1cqbr311q1rn4dKeAcwzN5hvGrVUR",
  "key13": "2dk2pSHMXresctUkew5QZSc3ppHY6m3PN3ijtH69MpfJDZFSp8cZQUFfe16NB912sq4JT8cfYjrjAfDc9CcrYDAd",
  "key14": "5BAzub9qYUD3H1VXdgYoCtdvj7uf5gdm1xeaZzYKDZjRUEyRJ8moFem6yMo5P9aNZb4Lhbbau8hVtnQrv6GXf6eb",
  "key15": "Ku6wGvsDbmdncgXv68d7rAqGeyf3D2hhCoRVgZTvAS8bkBUZqKwoVAsQwnBG2QYhohtwvz4s666tHQqFd1o8ML6",
  "key16": "2YzSw5cTJtLsy6TEhFauThpGt1om29x274ib3BWEdbiQYgFytREzPn3v18K19RByKnufBBi2hFUemJYXPP1U6ugU",
  "key17": "xvmgvAfLoiqKnUuohD7FxjaNriAsmM6kj3oGvAruXn94vtU13Nw4vVkdXjwn83vq6Qwt3Gdbm8p4QhVbMYJqeiu",
  "key18": "67BSLWBtPu5CKfuakgfqUGYyuRdE419v8JnhxU9ZWhEdwwYvFTytjHsEss5heTjRj4ihym9KhHJaFXpUWXw3fReq",
  "key19": "4CWZrE4H6WFtVkoX8ggEJwe9hgeQx7wZyQn1hKJkKSMytD34pNksMo9fuyHE1VjSrhLTxfC4ZYgD3ffahbJ7WTgo",
  "key20": "UesZTiJRTNzbMnZdj8sxTTv2MrEJ17d83tECasK61YC92yi3o73Bzcy9gZF1RtSopZTRyziN2K3CT7aVcStKUav",
  "key21": "21YHmPNQkCo3YgsMXKEQU9kLX4Tw5G7JEGp4Qv8o6CT12o8yVaRAHJprYgBy1cn6qHygi2u5f5K9pV5HiHmbDxUd",
  "key22": "41fBamnHWxf6c2cddsHyFBGWfMg2egbLnG9ihvp8Do9dzjQNHzdx168uAyMr26FUAJLPTFZgH5r8iLrdAAnaLeLC",
  "key23": "5hbuKH6ivKSuqTvAQ1w9D5MiJPRXHrw5MrU5fAow5uAwACJ5RzpUgLS3D6HxmKkE6atvW4MAnZLBeNBYLLU7GhVU",
  "key24": "24SGAagcB5rwcvV65W3LFifSPSLMpxafkkNxicEa9iJZHrHBPVnqCeoiqVhMcSD4TRo9gBcGwuZNnvY18r5YhpQo",
  "key25": "352hLmWskGcSrZZLMNZzDTd7Mw7RGSTB15fxKUG5NowVBLET4LzYRnGqK9Kbj3LtZWSeCZtHhTSgUrFVNzgCPEgC",
  "key26": "31RTxaDhY5wMVzbnTq9gihhYomcJpcjdP4cR2z4aYHDr8GPcnM2xUrVNok7bDD5PVhoUx8CCRTvoFRDq2KFT8C4W",
  "key27": "3SLWGXqYoz1HXkHHPSKbwATqeSw8MEfMDRUG6wPdTSjC5yZLuZGnKerTPra3sJQcLcQB7TGE8YxGytK7EsdSmBvh",
  "key28": "Ve8Z2VkK5LqroumtTmqJjdYs3RnfJzdXd8PXsSQt6D5c4e5m5cfcJR4Abf4GzVw2tmGdxpLQszZyivx4H4ydW7Y",
  "key29": "4ZehWAj5aRDGYCEdkHX15xLwa5iRhxwWurMbV3A8QFutQ7CgUgfhhy6S5zGATfjE32Xv5ewKv4odJhRKWfvRPiee",
  "key30": "eiKAqeUzgvzQcZHbR7Lru2kkbPV3oLz9JGaC14mw8woCpzj2tqemM8NjFtjfeUQbH2BfnGz9gH5dTToqwURf38N",
  "key31": "4ShiH78LTZoKWe2qtR46NMELWUmVU5owuFjusVCFCyQqR34CpharJHLtTHbbQQncXRpNemkPbN3kng91U8zBFDJf",
  "key32": "2Wf7kKxc2dQep1mVHLvFNUWkXTDWcAZHJnf3xMuisinyfDRhWW7oSNFfppYWZCm67r7htjqsiRH4fQis6z4VtCoe",
  "key33": "3Aq9zMaS96u5iarYfH5Z2jocMFfA8BD6YAGzgcgUHwu44kGBBnSv9PsosFPNGhukv9v9WSArTELbUzUnLF7rW1kJ",
  "key34": "4cBmsRzZQ1TyYRbHZRA9prEgtrjVUZza2MiGTCTB6KUSzCLwDnCdVUJ1hLGtyFrkMLkLsTyko9nskJrCLmu4NCXg",
  "key35": "jgYw8n6EG9YjWiHvG8Q4WYQjfN2FUj6BdwMxNi2d5T2WL4Q446Y7MTpmRw9XVTQJAo4vtXiwHaozP8QVYGhvLzQ",
  "key36": "4e9Eh8fby7jk2mrtnJNq6ufEp8bZUUZXfsMz3i3TzaGKj6H9tninyYzfmnytD6GsinBE3rywm3bdKxx2tELQcJf5",
  "key37": "55vKWScr47EMiaxkLJJQFpa5GnrvL6S2mCpkMiyRM9szwWy31zeHXGiuKc9j1eVd5AZdx7eKzhcbTwn9u7PSzsw",
  "key38": "669d2ixYXRZqANMoDudJCahtCbvCFdJjzoAgkCWLhX2zcdVQRqxDrM5vgAMJW8pUzqsgCUXGe5aZ1vNbc8Vyp59r",
  "key39": "4KSWjYPhup4hPNEaeZW2GfNsruv7RGGBxKBwA6ZFqRQyaGDLjhXggkhBFHFm3y7tyfXZX4Kt8fhB3VqSv2DUnfNi",
  "key40": "4QZiuigrJuSnCvUZDH4mftA7cD8CYtx5DY9nX8yGnsLGAV1W4dof6TYmZDdNmCVaAQhFjF8rgdwRpZiigzLkQ2gA",
  "key41": "3hgjjvKYQiZdXKLo235MH8irQuko1Ux7EBf5u6veMxkKPycm1R9qUBmF3LqdFkf3SQnY4JqGz9pQe1pPhsjns6m3",
  "key42": "4UdHx7Y8ohMpTYP3JiK6Fco1ytoJWQ6fxFF627UyyCdgGT15Xz5asFRcQEx4wVkEhhSQMv4Ez2skdCHAYsQJiNRR",
  "key43": "2gT2UHFCMm73R5uTqDJCQzd4JZEtuF1JZ85zxLLgMAzqE8PCTfN7KfKXLHnrQEUzokpCCzSE3iku86T7nNYSWSeo",
  "key44": "2bdgJBNZWjWEfJen4qtJdQy5y6q38vyrsD5YZudVv3wFcwUiRwa8XrLiZkYPPKGnTFiuyYoobT5d2EL8MxnQPTVg",
  "key45": "2dnP9j8S7D7Cw1b9acyATijieWLhh9SyGQHkURPFCu5Rq4jvxSDMxjJUoKJMV3VH1Hbgc9334FbsiUVQr9crztsZ",
  "key46": "4qpYBmgxdJpKJR4R3YXw3dG5iEnwKnCAwMxvaNYLFwZRqN3QM5F1oMUEKiUxWpqhYCWdZKwVNkYaBgP3ooEECsZG",
  "key47": "3C4L454xJ4841ZoCvsQpRHKzif3ri5rvJkjPKYAGyhSHjnK4ud5AFtczEXwrfr7F1PQ6pTkZn2Yb8MB4WeqWVw8u"
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
