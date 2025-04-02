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
    "3Rw33HaGb3XTVVBbqPkafNMv6ARsEyAoAPJeUmxdVgagzTnKyEzK4HQbirCnrAD6ebjDVWTYKhp6GNLoWJhemht2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAaWSCtvJbPcy3UtFKvXm2rQqNCQMCbSAA2W2fN2V4bgsFzJakDhtM858MjZkMdpqGM6c64XG8shFReg7iGPcnn",
  "key1": "Qh9z1wZQkHAps12TeXHhv6WWpooucx9qAoxVvfyzrZVLwe2QMEWQ3DuG4F4aJ8BSGHe99ASLLYmTjQcnNzwKUJs",
  "key2": "8S26M7nREoD49gLmTsgHAMWxmxuTXM1b84VbCNLdaUV8yzGbypLFhmT7QMqoVpiZ9nHBtZDbdJub4Ccx9rsUHXD",
  "key3": "5zeHh1RVbv5smU9aznasisiunU7z3visrL4pLHAm2ePk9Wze69beh52KTZBcUyqcQtSP3W177ypYxNzFZC14c6kU",
  "key4": "5Pr9Qub37QhR62EmCRqJjfdQ7PiCvqosDYN9ukkGDSimT7pLqFStie7jcL7psz2uEgKTNaLkU2ditz6VYzs9bmkK",
  "key5": "2MNnSPAYRKpSjx67Ep9LkkYjgLpHHz4gj4usBTFGxEhpSQg4H2JC3GdYmSZzj4tTWZQ91Hhj7rAXe4fGjEPwQD6p",
  "key6": "1Awv2B7gcNspnb6GkrhNPyprEqQn1jsBAyGm4tfTsQLpK3SLXcAQyMsVxhYoPAMPcChgDwmqqRwPfTyP9tgyM52",
  "key7": "2CiTkreyeh5u7UeKmhkaNbBxusqgqv3B41VLUjtc1PZVxCXyNUtBUCf6kG2CmfZHefLADNskJggnCfXydrcqz5g2",
  "key8": "23fmit6aRVC82aHNrf7T35L7eg7kyS1ae3AA42jB8tQvx4LaUStrBwVPPqYgLKBzisQ1VSxofSLCCtmoeQNDGR8M",
  "key9": "3ujqTSXQT9L46tCzU1vWNgBBbLmhDHksrZJCmP1puPqVRXuvJUiRmEQZ51fBsbQPnUg6jj2jgnGwPCKQvLzosSm3",
  "key10": "5Hd9dQzDonRe1bzWAcU3XNDfgVe4JwQMXpAG7YTAUQ8zsNMXdaWqTbH4awifWQMB6uHqGfWitRVgKHuE7X1GNHRp",
  "key11": "3A46rbJ4jwEt8iwnFDtWdSE3vj7ya7YtLViZmdGtEN8aggYFgyA7G7LWbYcjbiMNPiQZLAtLPW8TpfHeKjia657H",
  "key12": "BFCrXa2yvSfFZa9eAnjhaXBkMSZzPYa1KQRNzpYfDqX69UBAmxTVS33dQSRr3xDBawhsBUXuy1dygZBeifKLMQf",
  "key13": "ArCfAu8ZXZYXfHXcE9d5gt1SUX7QJFqgYTkhmSZDqJRxJZyYhwvS2xADshvtBGmooUrJkbtpHLNoj7xCXRJEZLs",
  "key14": "2RTbbQQ5e6NkVsuErjkWVuRd1ZGo1bKWs8FCMYpRULLQTu5W2ZeeUPwioB2pBvc6bp5RYwM6Eg77eVzReRTAZu79",
  "key15": "5mRrFm4ExA2MeE8RzKmRoRfAJbuQvx8K3r3QFdwiAWMHTniRPL3XX759363a7hQHZoDNAWECgegdqboWyejYXoqm",
  "key16": "35rmrhQL2WCR9AUKQvZxcdep1jq8tQJ9NXMUACmCVaJrk9Wd3Fge3z44Bws2ec8J3Uhv5bD9u6Z2f1iPMKMCfL3m",
  "key17": "2J18Voj9GRHJdgdm2uZE6KKA18FKRW3qsR8BnDFbeUVT4rt2SZ64AjAMd8JGcogEENHpATE3QrWVDyRTTbzTKGco",
  "key18": "4ZF2cbCWv3EA7TfC5bvjDYKf3UdRfrziEYLTYeqdX9ZLmz76HTLsLaGAkcdGxtQQ9raRSfKz596t5fT488g825TL",
  "key19": "4anQpsEbjyZcB3XSYJdeR4JNgN6MTw9kox34pbUZikn53SFrjp1ASXTNHEtUQFmnkcpu7Nnn8Ro85xe6pZHCJJQR",
  "key20": "5EeymmtxLj2efYW3AQgnB4XTXEW3UUxenp1wbY7yUNDvKQPT3C7uRyBgg39TzhC9aEkYTi1j8RCFYVviTRq3Qz2s",
  "key21": "2EWmV8di6w6wiZagAyWhETWgPZwg3ARKm7yrc3ELH2izQs7BnJ7LYPbBvCFXvcAbMfKMearRxLdGnFQfca7Fe6n6",
  "key22": "4LwpSc2XKf95AZ45svYiBNQfRmi2tPDfR7jthnw8TniqsgfUDt3pxBKQtarouqUomBbm3UJSEoM4b1L7dfFTAWq",
  "key23": "4AS2WyLFzwXKn4mNftgZVxRPkX2WwF1Yoj8jbD5TivWGVBeDtzreWGP6WCCt3M9S42ihFmLec38dEqWzMLbKSTxp",
  "key24": "5FHTVVVFoFEQxEE6gTV6ijKiZigj6qrgPsAgdPqbGHSi4d1avH3MpeRVhtWUZPrZCxRVkd4C2XaJfD5Z7RKyk3mC",
  "key25": "24BT577rbB2QeV2QzV4sY61Qy1euZAL3xj8re1KwnrNBaUjmp4aajmFDHZwGJYidR5zHVN5JbCxdr1zTZQNhng1V",
  "key26": "4Vxcfp5Xwk5ER7VA6bYMsrRaGFsLuiZYurX5JbmS6T8LKMVtULJPg4FhRWNU6X1NzrLdcL1uS5thy9JkVzuM14a4",
  "key27": "s7ejWwbNzNuvbq3STXrP8kxrP5UeZfujSDK7BsBUfyvy7ykwzzCjPVW5K6VGF53uD1VVV27tkX4fqeTxBjWuePX",
  "key28": "42QaDhzbaBDdvkBwWwBjZ6UERAgf7UV8XKinMsTv1FedegcFg6yQAv63dVSA3n2mkNJvbbtKU1PqYbTsRBCxKrU7",
  "key29": "MXtBx5V19Gdpt4TczNZbxL5jf58Wh5hjRZ5sMZpzK6Aun5EkeePK7utrruvzUg3s9mPwBZNkVu29HQFQAjrxb3L",
  "key30": "4N3REexVjRanXJQ8vpJD6qtGrD7Cq9cp8gteV32mxBkQ1rmmdNAQj6RA8AyUjXVmfv7LG1uoscAuoKXfMvGVtz38",
  "key31": "3Jg4tCBZYAHaaA8yUWRS28jCtGX8coNcho3hRbf7zcHc43YZQ4WAD3Ve5NLdYpzngrX99UgYm86pjfJunPu9qtgi",
  "key32": "5KXjXsTF3KSCtCSwZmDbdiDjToZytLNmRBRSVafaY1gp5PkeV8bZmR2iHHTn7LS1XEYSSJ2dJUH7D3nahTLXNfzd",
  "key33": "4fk4t3suMJZa1dyYufeNYdG2jKarhfh4ZumJuLR77136qxfp7N7QY99xL5tWKhkx4aBdji91FpQKY9azkoBuBHWh",
  "key34": "3J7HfTpEQQvjDmD4p3Sz9HsxP43rA9M53uAncVtXThS2SFgPm9Q7jikmpDANn6UMfhR13Zuw8GBf2PnkiZ4JRNBE",
  "key35": "4vtPe4tPcgfQve8i2BobmJBD2gzXHrT43NPAETjzCJZLcgk6K4FabXkehVe1hRZcC3786Vrr3kLezMzKuckGzF8S",
  "key36": "4UjfoupfJsgmJBUWKUTL9mDGCfHgozJXC7iBErjU7i1YmrFX1uEe9NpzhmBJhcj5fTNYQQodUwqbt3tLe5q8adZZ",
  "key37": "42J7n6GWbwnDZgpBHK6nT1pjBfhrk3k5PeG8tBQycRPJqtFSW3FdaN131vK7mLyjGVo3B1yUhnf8TwVkfBFdX4yE",
  "key38": "zdAnbEPBCk2Nf3YHKabUhAX39g57wXihTVgTWmhrbR1y3rxrgbhSoXUwDAFjfv7h6uB87HZBK7npLMVberxoGP2",
  "key39": "4RJWq1LqX73yasQuccmvJzx4sufKnyzQokxGGSSdfX5J4Q4CUtijWE5yRKPAEja6Gcik5c7CYEEGxX4q31WK2E47",
  "key40": "ZvgPvXAcNBiLLwUPfnVHZL9oD1P5hjBVEUeDVKsvRbWTxzHaCteFiEXjm48cvv191cRGJDpuUvhpMKEfNFMxp4S",
  "key41": "52bEJNEvyPSQw4keHKephCM6sfd5NMajEVbHYfUNMR1rcT5M2j3MSANA4GjhD1ixBR5bAgVY1UKZd6a3TpaF6VZZ",
  "key42": "2t6J5BxSK7LNNo8vzNLRJcXayuPsAQU9heMhj4zXkEpzWKBPaqacanErS2JTG6XGEXsQE8ugNMu2Nv9fE1xcTPcS",
  "key43": "2Kcy9gn6Ggb9qUwWq5Yy2M9bbYmZkcMFT4CNB4vGQanWE9aJMA9DHKYnWgCpvPX5UQ4XEhdGoY37nphzGjHP7qFL",
  "key44": "3BbUoM79y1yQm1DW2xuhukaBHtKQ1NxqvtEtM14JQ7REJ63eASeYntK9Tn1q17yWDkZ4Zep6hMKSzdYhzhB2Bnev",
  "key45": "zvYj3fwxhW9QZj9RCChMTXAWvfiMiQT3ZtmboC6dgkA4PyCSeSmLv6mZwGDvQs2QpRixrDZ8cTgnb2Pqcs3fNQy",
  "key46": "2J8UvMviNhcUoo6FLdTj9L5tMzjNp58ZLKmHMmiYFUtshSeRohEro1fpN7cW3wQZrghiSdDobegKXAVJxCrfDzPi",
  "key47": "58SbuyJdhwozNpggwfC5uxkSQxczGzDwXCC8Q8VaYypqUGRwaFegyirk1xk7SinTgAngzbM21noy2RSkrr364UPL",
  "key48": "rSNpNhWeJm6pVKqSfgd1xi2PxBj7qUk2fE6JdrPxfP8sxfL7HEbCs3hsULE8HYkAJMjEkeieouEuRzHnivDsvS3"
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
