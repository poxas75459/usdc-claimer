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
    "2wGa97SL7fDrbcqJ8pnQx4YqcbV8ksNfJGaHKZsdTmfNYAMChccbjfxWdJokdf2xBmkYPsgRrYXNj7GsQmQdRSB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfhFb9CqU6cfbo4U1gw46zfRvPPLT3mnoGL35Uwwkec2h4n3rTB46F6hCvxpqdzdD76Erh6V3X3n1dqbCtAyPvG",
  "key1": "2J82XfJQG3zSZfiAv1s88H6MJ3RwVniz3HM4TY3Uw95CGo7M3sTWcDkCT8A3mQfKAPaVW2jKHX7ZbfurrbBJBb8W",
  "key2": "WgG7ou4256UjCfk4YNMwLJs8XgPUXXUk4hjXvpdBWiWJxd3BVna2gh4p3BJ4Z2LjJiUHz9GufpQ2Dny2yvCnuEL",
  "key3": "4Y4ddc7tNGCTR4JrUnjxBAccJVUiw6Cp36Y1pmWae2AQEHfncFTds69LdgPE9cX1taHyZ6kErapY1e57Kt8q2B6e",
  "key4": "T4GutYja3aAh1DZKxhg1NYRCyMYfeQW37CejXBbFTo8xsRRsLezkBGG4svFr1Q3aBA3E7JNPyDdgU7yq8uK9rD4",
  "key5": "28ifa6zeYShxeUWRphqWQY6VLS116qzbwJG4vxCf4DgRTfs2zuk9nDqm3pET7p5tSdWmsqAf5pezdpjpum7jGPAV",
  "key6": "be5mgWqmdFWioKqXnAxwmgKFBMfzb31aQgjQNV7qFzE7nL2gfvgrShjbuvZjjAmSJnMacbf8KGhBn7fnrwy1mmj",
  "key7": "5axTSpRVF2kqKxGKkP5CL4Xe3cfm3aNqhHQ1gHv1rh9YWjUhCWPDXCuLxdeZcsKBsmahnTGxSRn4PxXcgJRmG5Ug",
  "key8": "64cSPnuyrsi6rVMdQd5cMobc3M9ByvUSHowSU7xaWoPJdeBie2ntdCHumMFC4WedVXjpG12whc9txgjFTtxexsM4",
  "key9": "66yTkDfpNEHBG1boBvqPWEp4PZj3twq48TK43HdHuZbNnqLfSFjkahWh14FZtwyuqwbFy1pfaqQcvrH7ujsMvYCE",
  "key10": "23R675wkcpWCMcZF9FjekLYWqVnstS1hqwLycBvfqfo7DXtGb9p6pQ52keQo2ZBW4szYUdQTtwVZvQnvbhU1LQoH",
  "key11": "2DAtC5PFdZcBWqAp1gAG5jUwtUoxYu9gQZBDb3WsZRipVx3jFZFytnPwUDr2pRsqW9Rr7gkoUBeJc5AgXyz5h9rz",
  "key12": "2WWFaGWqstLRFEaM8j5Mucb4Uqa2H6vwQ7hdp8JXE2xjA3XmzVuEUQ22MVSHCRgh3YiU1dxDt3jhxVEBxqygimHv",
  "key13": "3wUJ5TbEXGykNrJUfSLaFRsvZ1oVGn7JfeNaN43qAor6odihQnJBcknJez44dhjoRooyRqiZNauaCPFBHA5EQwuU",
  "key14": "2mQHysVQP9KSFk8WYDfDToohVwZxmnGV1eURr62Vh9kqcDe4zBKwAhsgZqG67EbM5DjAsCZzLRhWrPBzsUuA4BYS",
  "key15": "5hYdjbEhU57PiQoYn8CAzdg3Qk6L2qgG7SfchnQTv58dN4U1Yh7WFDxN4dxAd9j4puRpy1GNPNvKp3TfjEwkoakM",
  "key16": "2WqVYFCzvX5F9pGUGyDL9qijT6XWQ7emDRoY8YbZuChLxjNiaz8aJye7og1Ec5VJqNeddFaRSzapbb4cyEaWcufm",
  "key17": "3s1vEv8oEJkcnu9BaTdiaHUDqDd2sVnL2K9EdDXpFuBBrj52RnqgAgn22VUYYYCckBVnWtE4B28hXchb5Kn2AD7e",
  "key18": "5gTRvWFVQyp1ng5HdrhuWrzP1GhbX32vrYhhXc9vnc7UQassDysVX3sCz1b3jMAiZfUVhJViN9eYe6FVrMFAsQZw",
  "key19": "3xivMNbWWoYYDFVfBy5jdiZ8cnP5NVoXJvNEq4LVjqpmNnjkaRK5E1uJLBgy3qhqryke4V9rndkioQx931RnzcPm",
  "key20": "sndxWPigwT91mmjggiakLrwYEcnjK3D9C5cL2ktE7jb2T3dJ7dB1vjnRu5mfJAXbEnm8P3hPKdKFbqosYHg2gvW",
  "key21": "5bgLxXJeHHFgs5zLHaZsDfaKMzAL2HGrec4Qh2RCPXcLuBfWufb5hHCQQBdnJp8qT2oFHX67wxyHkAYUjdhne2d3",
  "key22": "5SETnzqkxoMwsZccQyYatsv3VCvCqS8s817a7sURQ86WZc9sfEP4h9RvRJBdvc75jynsX6B6HJtRo4e6JdBpSLgp",
  "key23": "5ehQmCpUNqqi8ChouLAVA5rceWEBhupzHv56VFFEEGDk7efpACyw7Xex27Qzg9YiKmyUEjCYBfYK5C2mEfHTBzA5",
  "key24": "1rLETyCG1PB1n7BWDCUAqEsAtxA4v9tqneTE1c661FMBHZoSPryJj2ugoF3ti5bhw46wcKhca6zjiDKnLUCeEnE",
  "key25": "46SEgTrH7T1iYMJYRubgYzVTTZUmDtGHPKGtzzHAtmJ8eV7EZWW1A11FR2QFrr7QVzNUFC6vVbtWNbuqw8n7VE8Z",
  "key26": "5Q3nRwrEWYaVbvBzyYrCDgiAMVFWAyRkKRFsddS7hc5ZQ3H7RT5LFA2iYf9Sb1u3qiiFtCDaTqgPWxtpfhKETHS6",
  "key27": "4aTEBZSVuLJmz1MA4TkGnwMnpDV1dnvTYAxnoAebntWv2KA72A68qHNjU7aQW9Uvzy8Wg3qedWGVZDJWUYA62jq8",
  "key28": "48sQbRU9gLmTEYjgfkt34UsboG1vfWsvCvMWy7rYiPHQSH6XYJk3DEDGvXz3jwzCthNKMc2Lz5vEkHCiQYg83UhX",
  "key29": "4fKzGwysMZurZcYMRYxuT3hVm4s1AawQMjf2BUiwrr9WPw5VF3HErScRtaE4VC8Q7FDGkw7PMnma4EidzxmJcEeZ",
  "key30": "x3Mh32CMucTdDoyQ5quLy712DD86F81hiQUJHE7WmNuiLkbyobi114mXFgmRmhfQugMFZW3yWVhNyCaHoLuUVnj",
  "key31": "3rUJB6BszXZbRgdvNSKkUtaFhhVsRXTWy5PxYrpmELwH3PgqthRsvMbK6ZpHBJsE4ttHfHp8LpH1hiqxWnYNCnzw",
  "key32": "5WXy4NJ614nCebn5B2kYiKarwa7Rd34KqijjGkWudtyuFdY7atWqE9otrb2WwyoJ4uMPTpDgdYxNX7ATU4thesrn",
  "key33": "uXfeBZJMpTbe43Nf3AkcftHNrgs9ahJs8d2cue4vpSot9yVzDHpDnnKRWxn7frco1cFvpRQn1qgp5iCQ1Rg9VbB",
  "key34": "64EwsYeY3sLQbSkF6gjd3jYGBUgm2y2bfTjtmLD83cV7jjuGpae7uANKe5Ha6QUTc1c34mdTRSJkjPn3W7kqJV2B",
  "key35": "4tYy75tDCMb7rEnvVr7Kuc7rGSXbXz6TKycPgVFghur96mip9G2gvAkcUSF3P6UzHMd74fS6mjEYqgsusmfGDnsp",
  "key36": "4ZJ665aRhoUsmw7PUJchx8n7DnzWqMFbATqAhp7kj1DYPsWupc8CqCK6BWjmQev2bBz8K1FLmM6Q9kBf15gWcxgS",
  "key37": "c1EX4trBcgY64aSVUHMBdQcScvCmSDw8b5QyVeMhhhvwVxXm8NMz8v8YqMJJXYkNE5NLVPcV3PT93v4qyeY2nBz",
  "key38": "JWusALoQN4jYw882d2nxNjjtDdVy5urKLej14YiQdJiTCWzXxh1xNjZFdKt6XYY7zuRYM3ptSYvL5ejHVHNs4cw",
  "key39": "42Yc4MBKKLAmuBcNozMmsGiFLhfWSh7zCt4gkFe7kmLDth6kfHePmHmqof3yNCtT9Mc9NdZzNBDiFKdEE9RuDYQG",
  "key40": "3DfP7miydEYS1eKLzoQKD8m13Wari8HLVuyysSvXFQyHPAajCuDQZ3MdW1bKngjCoCVpYd9g3JdjUGQpjJq9YeG8",
  "key41": "4ZQZBuyuQ4HCVUpAKoctRYZSqeRSxFixyd57hdVwtNRNbCtzmeSoh3FH3MRmyhuX99M9rf3F46oUbin4MbYzbaxN",
  "key42": "5WPMo85q9q7WoUeMummhGG4n4mynihFYAW1ucK42SnvNTnu8vq6Zvq4X8NbMkGvr4z8JgNsDd2YH9GEBj8eVnt3e"
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
