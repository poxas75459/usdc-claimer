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
    "2usxaT3ezCYTYkXtZwiB4DfLZhMvtrZ6TFozbH64bXfphMs2XxKvbDqY5HN1gSm6fT536x4FSMffEoTyaxMYDBCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7Tyi9ho4SVbvKt7rXeP87CQXdzimoyD7T8C4wtwSRXFWrVuM3zp1Eudx36p7HMroKtyGN51vDzWi35FP59ePJN",
  "key1": "2STx3gWWD1umeLsSr3ufWeZoJSdzrHsi1w26qkQo2qtS5PxS69wC1jAanzR2rGLKin4aaxPisQHjL2oc1geH64cq",
  "key2": "NaQovLmHXn7sG94PHtEDRsJvtHvUVsL37geA7yRGsaBEQ9k98SxHZYYj9pNkb6oGQRHiGANxtefNNCVfWxRktFL",
  "key3": "2iiyR8y7LgoQUq8sgpYYNWdA8FLKPhMC93iDrj7CiNk5mVGVuBD96QXhHnnbJAchmDZTruBGVZQ4HLVghbzDyDFx",
  "key4": "4PA9qj3nLp25H682BM1gN6W3nFfBZxUrd6frByCbCGwEVjiwM7jxHfSuDoGT2nocY6vV3GLjkaGXL4KsjrLfYEWP",
  "key5": "24ERPJr8xghpN5JdStAKGxQ15X73xFhjHEYmP5cGqgURAp8mCFgFwJME4o4Awp6SsLMqXKPf8gY4DHEru1ZjuNqo",
  "key6": "4ZVRUsrGv3d6iUGy7wTE4Vf3rAnaJJqu5ixFY6nrGRQG5S6MiAAKdprK6QQHMLQWXxSCXugL6CE86XYKeB1KrhtV",
  "key7": "31xHPYAD5DZeu9DgdxQkiqgbaDpLnFsAtaeBbBH7VFE8uoe2UgtLpJmyj2bqX48u3fVTTey3UTpC76nos88q9nPK",
  "key8": "jB4ra5EgsnZeBU8bHcHW58yNsQNNtpVqsmNwUUsKpsAGJv6m6jVhuVVW6BQG7Aaz2ZyK7YuQMcVDupu6wLKA81H",
  "key9": "3fqbX3zWxpcNVZooirSxWb6TGVec8NfWPyPE4DDejWHBh3V6wriW3jfiEN1Z41TsfY6eusoTTfjxeUZBoeMUvtyt",
  "key10": "4aYyXYq9R53GSFqBAKA2S9AEBVYBJZs7vGfPrRy6gBQDJWeVGowUg8YvtvS5w24pqWV7REdVZCBoVBPjb6qoY5Rc",
  "key11": "4Lm9H5XWVdHh4zVDitjSayMLfkoabc1GQnTjsXBS3HfEgFtnD7rTZoaJVYCwMeA4yRJoruLUF1tbYte5GqB43dkJ",
  "key12": "5qGtbtnTBFzV5VJrBt5YrtjoftVoxy6mhtSfb5nGjSUk8TsYbovfPmjxrMyPay5QSeBoLJL4LPKyzubZ1Gh9HFZt",
  "key13": "iy9p5rhEJueBx4cKDgxqiwThBTLtWyPuoJjgGYacNWKfdpYiYxrzAu5jVbKXsSAq9ZejUsQza3B5RuZdNpNbuDB",
  "key14": "F2TUw6HRpfP6rRSJDjtYFJhVgWEW7m8cXYjTQNpD3jbZZ2C9mAY78rg4SFARSgRt62YnfigdHZZSZdhJVzYHKU9",
  "key15": "Mbnh5oUpWkjb1V1kHQ4rVrLVu8trpRU4poFQuxDu4RCmYmbBSu6QNj4Po4pUGjau6ktBF3fr4DAVVXMpYCWag7R",
  "key16": "2pEYcZnZF1d824jC8k6waQ4QjWC7YySRsCGnhwDK155Z8EPxNmouneDZVw6r1DCe5TEWnZCJyN5VnQFPAx2tCQoF",
  "key17": "2aij8XfNtu5cyqjmpqAohpTYKj6FjbvoGnMy29VdBYk8ZSm4Ni4LfqtzuDougLisHMdT4jmtxsNBUiUNdrhcoNVS",
  "key18": "3vdNqUPioMaWXxfcPmdjkmo8Y32ZNDDVb6iwSMfWNZi4Xtx4wW1gTXX16sc7M8rm7BGB5hbffeSMpPz1JC5wgcrA",
  "key19": "dyhSukorGQvFUmzi25phnWf5uRSnLrnWxLNLw7LFc4Nim4WebQSzF56yL93jrX37KbvAuzmTWSj2Pa8gF9RLwyc",
  "key20": "kjmaxQeZN112mWVai4M7oWoFYLba3S1SwtNYoehKtDJWzopHNZSVDq1gsBhSLr1jfp2J6Gg7ZFk4bEALMTj1HVb",
  "key21": "41zn35HNnfvGKzktp1cBa8diumSwK8ih1rhbW7CSykuqFBQhnpdqGm2aJgcLfUD3f8wncsAYhR6X5aTgcix31DEk",
  "key22": "J6fq4AkmZ6FJZwy3DKP934PYDAr1CdwHN24cpjVeFZHTu1PAV9FJybyBCKQjX7GB7QnTKJK6MSx89N1jghZBbza",
  "key23": "4RNXZ8QUkPQLBzCb2KCUj5TMoi16u7qk2CVrvcYdDbrB5wYWCRde5w7ZzqNQjGA8VhK9G9JJJyNj1EHmt8HcGcAL",
  "key24": "ydoh6bfw3ULQqHyUDrQKZFCeNk4TSkpzZQusjSLpTyhekrYgYE4AA7YrKf3feFLWyWhVQM2aJFMG41E1dpqZUfa",
  "key25": "2cmq2izahJEqAwbv3EJZHK94kahs7byodrquPmKeTr3BvNdD6y1WoMAxZtotaQafRMwjrz964aA3fn6GNXbcxUEB",
  "key26": "4qBFxHX7FHzw3x8CLuQNzdgKoczFFP2KBBUhUobgqhD3kzw9ixC5S3mUZGeZzMnn4JaQ2RNxVYwJ8QWiHUzsAfM",
  "key27": "5xcngAVpYFDmCEw95BHMbsQVpcWPcKJa2sEcL4VDrMDBjrsdRPHzwP96gDxf82pjynjaxqgLcaZsL9UgLsKP3FNT",
  "key28": "5Td3VdZim4fCGZXstcC1ZvsG5CrabDaTbHNKnqan29wRtH1A34K3yZ92FqaPk6Kw3Q5JU9bHReXBEf7jqxKNJ1PT",
  "key29": "4Cao9CfxQQUwii8k2VuLGqBgUauqja23X8qzSogSAENj2Agx52XNmc8dhE8SpXYvKFS34JEjbjHM4Tq8kAjGAzWs",
  "key30": "4wtu7BvFhJN9XPviPWbHGpPvYNdQ5QmfieEfdbYK7UvDPTke88ngeX6mntqrzN9uAdqBoVafair1FSnpi4Br1mpR",
  "key31": "4fZ87M8pDn12NJ1Rw2vWV8bX5YNn1nj7NRXRZ7UXS9sCmcnW9jJRybtc7pCwKQhkfMUPnMBnQo8MZXFfzjEyeYoJ",
  "key32": "3pLxy7JDs9gwEQ3nWAkSMfTeESLjw8v9d7jgW1U1YtQj3bNJUd5FjSqZEHPpjJ4PkDHyr8aM7bE8w46jDsuxdpBj",
  "key33": "38mdmUxq7jFxs5yysfT2PxLz9RTzq3MgjVg7vrFt13UtQer9PWKV8hdoM6YMfjyNQyf85ZyjYJY4shWnixaKyzzW",
  "key34": "4n7aWRaKCkrZzoLBJMa7pzu8Dgp7g9sRyMwbZ6cGeShNhozbZwz7hEe7TCncJsbXB7NnATZteMD9NuPuhi3GVXzV",
  "key35": "4n8DaKjfQUEVTChCTkHeX7kd1KC2V5CsdcjXGUiv7sj47GEGfchpp7E959Diu9df2d8tyYBjYSq45FbwFeimkoJn",
  "key36": "2H3haHrbVnsg5Tkt7nrf33JCupzccu4uJ6nUC1AwboZBGoPgqZ21GhFyGWGT22upd7wKysTvHLiTV6B53pzwNgMB",
  "key37": "5ewfWAnSV8AiC8G36Lzc2mEnczuajfUN9w2BVEygzfZA5dHrQq5hRazNWNTtT6xgMvXPKjGqmW99W6eVuGAB1kPz",
  "key38": "2vUhSyZ1bKgu7ScwqWmY9A2ecWTZzNYqcCm5MKZV7xBERkTbamhHyrqeTVMTUSQHr6UieZvxQH83sozsBzh281sB",
  "key39": "3AhidXJgWjaUsLnTXtfy8bBm5dKjvVooXj5HZQMbhSueLMaoEcEPcCjjdVmDdeMtPNfsm1hKrdEk8GtTw8Kq7DVH",
  "key40": "3Up2pcYzwPXBCt8wd2yiwmK6bvY2p5ridwvopE9j88K7mSu1rx3TsZvMdYe8csFS5ysjtfvnegu3L72uAAWS2f1P",
  "key41": "45wQs6uQLV5HKREGHH1jZXSqReFMCCcJP4kFdTKKvANdTnGKuyKbwoqq82XGGQ4JSw187H2D5tHFvqVP4yJUvvTm",
  "key42": "M82WgWW2QtDiZH1b53wqUabasbZxCdSJyqLtytiUjv6EVb1YR4dZhvNNwDU24r1JNo2YGe7sd39skpku4xnoM3D",
  "key43": "2khQ9yzMwqBCR3jnRw79BP1hDHEeFZWZMFumUj9ra6oRZT26UyVWsmiSj5NwfEVqhL5S3M9iqWJjNwGhgLxc7qwD"
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
