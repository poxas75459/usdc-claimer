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
    "mrwmuhpvkg3CfkL2yF8hM1KhXZBte9KZ2dsiUV1bPLA1KKUprKzUSkixp3RUVYo1XuzK3DrK1XpS9cB8HaA76yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZaRWv7oUUBkUK2fsRWdeo6peVbk6CEwBqg7xb1Sx526W9Kz1nQ4yywokWZbik4i1194qZQSyu6mWEcbLTwnWEQ6",
  "key1": "2wza8KChj27Amg67wSQ6VhUk3z7cZvTUL5AkhuKh5AaERecYiNtTpV95BNTaMa6dphRBYChQnFe4YrXL2UwrvmHN",
  "key2": "6m6hsrwNP67LNHshpHbCdGS35Rc65pUjwYgiw3tiKwRFega2J4u8Ekjs4ThHoAc5fMjX5nnrz8hVahxetuEvDNd",
  "key3": "5R1yTsrn25j4WfnGnPEKAQ6pAfWCyidxNKwrcLvRoYYvrtHnJcUdJbZ34NJMuy2bU8UrxJDKigYYJr1vqCUTdcN6",
  "key4": "3EWkNXZ3h3rrQuzGYYGTXSsjAkK1KiPzxQ7ef71q5JpGF17AxxRiKNcCb9BAaVxaddzFrHrABZUVcdKLh8HLYXyq",
  "key5": "5rZDW7Ty1y1LWjGr1Ka9LtgMYcX4H1rAuHeYWeSC375qiajL8gKJizkfzUV4hadwkapn2wGKHYKRQLMHmSzRY8Ji",
  "key6": "2rJ2K4KmwTGvQPkwM7sbYK6ePw33ZGMnK3SnTLUy6ft93tKTCQ9RbhDFsf9U5b7rEotTYNiwiwp2d92VQyqxzzTX",
  "key7": "5xCbjY72PMiZCVd1zzgdsAJRmdXfwo5iePknpVKRHLNKu2AeLvUyK4tqe33g1oMFcc5Ma9dhs7eHkTqBvVYR1M5T",
  "key8": "4WJuFf2JXHC73ggeCiVcDQHcT2JFBd8q2XksjWrqcqaGxvEyhyT7ZqWvkVYVg9krDVyFZVYDZxgoJCpsnq4E44A7",
  "key9": "3e2qQ8SEyYeQmPYBsBhNiTKpTh9zZaA8ge6B2hj6ZDf8vESTL3gnDwDmqPYiGL15Rdyox1DYp9eH5io8TCyz87S2",
  "key10": "2g7taE6ejeytB6ZpUsC3RVbnHRkfwJwTHRCxQK8N3wSYKo1qXw7g7mPEga5RxyURXPQBzJwKWpWCgkCpUyTJL6Rg",
  "key11": "2CBh1aDyAduwmnHxjcQXj41RehJhnunLpyVJGCPtc8FmUEBPV7KJyt1TrLaNLofxkzQYT4qchoVWgb6yU8sKH5vy",
  "key12": "56LYVz8qHvnscJRMWX12s1AKq9mDcMgJ82W1QeMGtSv5FNHZxGYWz8HQgWvZbN2srbHPnfDsjZNbMKsXdkzyTULx",
  "key13": "5Fkf2V9nGZ6UbAsHm4Gd6gCTc8p1idVUrnyZWgWNaSiQAn2YboHkuoFTEthVYrukExGNjNYQFqorC8fJUQA8tYzT",
  "key14": "4MNkCN3tqxA9CkSso9ZstRgpCJHKNJAtBukoG7SUsV1FFbd2QBoHntgU2Kxqpf1njk4v7KbJsEcynNba6XK8SAUu",
  "key15": "5ELyvfrsv3bzqVJro1JVxPMS1FCL8BEYdjZDVvL7913PAf4ieZEzRhUv9WCMbaFLRegfvxR5gk55oogywDRqiQyc",
  "key16": "36wK9qXmtKo2ifZx7fJgaiA4yC1emoqtFpGRB27m5hF9BBr8CdZtriCaZaXDq6jeiff2gfHzh9WQErYmofovNwkC",
  "key17": "5qGnCcSwP69fiLZYMbLMp1McDJUPgyCtNFs1KsMR6S76gX88CtFP8chFfqr7biTw3JqLyLCFo7nKWDLnKgNh39Nx",
  "key18": "anfzaSdyBSnbvv9SnUD8i4Bo2Yf5w2y9uGuTu9yb8vsXMrgb6EQb8CP1Jxy9gcx47SMcnhDe6ja6EeMbVyP6uJm",
  "key19": "NrurE4p6wo53weMHex9PrgQRGLwsQFLsJ62Pe118DBk4JJvj1V2K7LtDXVMTc1pLMERRTrwFxpAUp6NTJPKZ6zU",
  "key20": "4VpoJ3FD8P12j7zzVmLqX6dKf3Cwztu8RVHmnTcDXcsibeRB1F3LHPVpUr8XSinRrrCnAJrRaTz3SSkTwS2ZFbeT",
  "key21": "5H1yGgtH1LK4pMcHv1h45FZERxut6UCLYmyskytWhP4oFMuW2NrKXBxpNjJDK8enMNMxUrHJRZPZnsDXNNieZd3H",
  "key22": "5A1g3TqknVK7bNfMsQGrLaexbEFAFQCWgzojKsyBsUU5GoLxbyLa5JdeWpBjxKkxxwCYPbe69URPXsoApnaAgirZ",
  "key23": "4HXBHqKKQ7ML8uSEDjKobVU6j5cARYbw1QSNyvKVHxB8cmwhCGFGMqpVBdiGLcQwNSE4p8WL5P8cuZfWM8MHH7J4",
  "key24": "3bMLnBoJ5SLZv3hFnLuAVbFWD3ggekZpNTiWGr7sqbmPcXoHQ4RVdqWuCuwFd2mCXfs7R2Zh1vQW7Q9Xxk3YjhoX",
  "key25": "52BPcdTCXUChz8hHp2hxY5Ua7yZo5kHbPMP9ZDVS9q1Sb55xueUiNKh9ayJton9m4HnocAwj62dyYVgHLddVRMSD",
  "key26": "ojHij5g8QCNvxp7ad74CuyyPN6v81VF9RuRreikUJCC37PmH1RERb85ysKFyTRmHm5ENUe8Ar18DLemdgnDYM8u",
  "key27": "3iXYToD5rKH68eGPPiBV84rsM4zDysyTEwErk5AMeRKKictYyUDyUMynzTWMty7ZxrMudh3qPmpA3R8gtbax73tR",
  "key28": "dPhdtGDLHXVoEoerHucVy2dwVP2Ze4rg83xuqNojEWfBenBwq1CF3AdohwjebhVoZMhMPyiuPHXNG9QBkPHuHLA",
  "key29": "XYyQNd6SRz1XmJo9LMJcJ2HgNsWSv7Hy7bVVkcYwgx2jvNyjgE1keviHnoUR4M3LUytedburX8ARRYKgaXUKU22",
  "key30": "5ptqk1TmnWbV7Q8zLVusedsMQhkvWLCBD3qC4ZZGPJGZJbJHjVUJPhJEdJkd3NKZseGXnoCFKYFMgSiuCMag64WP",
  "key31": "66pY3Hw6XBy8BCMBhcBPaDjjfErJrMwiGtqPBVBjL8S7RKB3jRuEMNe5ejcV7Q8icd5veg3oFyCkGZSPjCkSs4io",
  "key32": "4abDKTu8yudJzAQ5sL5FVMzTBBFZqKYkHhpDoRmrY1M2F2xGUcxXgKajuMrLx6wnmUYhSuUJxtq3NX3jTfcmvT1B",
  "key33": "3BTbC8PdaLedVAG1aXYBKhoEeMgAkpjahUAXQEHQ9BbG7igYLywXzax5WAeaMHitKPSmKvKacphKbX7ML2Z1K62g",
  "key34": "4NMd8sbPm6x9qdaEBRXDWLoB3PkWTaZeptCS1ZPngJ7ind7uwKxXbC8NdNMY4gvgqMJ5zg1iKNhrK6eHeWvEVye3",
  "key35": "4NEhaeJ4CPCUdEm73nPN88TbqKpJEy5DYy5vbu3ZJjf8pVMZbR2KTpQNcekqJmbi1hBzF6nxu1nJQ7mRTYA5Gfym",
  "key36": "7scgvRuKEJc6hoF8xzJ3ZiB5v54ejjS9PiNuAxw5upnBuiBPr2HQyz72qghvh3gSB3cXgr8H8HhQ7PwKfUdNm2A",
  "key37": "5dDXVBbszbtHKebkmVgo9CwZwvrrHdBM3Yisg58EPD3h1NKEU1SKQiqMPNwkpG66wu96yEunzZP65afkgmuLiw7K",
  "key38": "4X5y4iohgDVuCr9QiQkeUMf5SM1gsnuE1Qb88YzPKpWK9AqczDo3pDqEJ1Xpjjw2pP4vVqHPdMZcsNCfTb6dVGVu",
  "key39": "3GGoxsXD5cCK1EadzjfZdbkbJ8HWb21ZJbiavpBwsoeFwxtygLEBxANepkPrZKettJ9EUAPq9BQRf1Hp8AmcgMCL",
  "key40": "4oFcP67LX47gfZpQz4QMxiVkzugzQ98B6v5wPtJowth6osQLDaNxYJUyqSeW4u5tEnB95k55LpCaaTiagi4aZZnB",
  "key41": "462ev7HN2UHbsSy24z2iDSXBg3GzPec5yEuEnASQsAvGPGBfJF48nf9FLXkgV5hTYEWMUrJa76GYgqLdjwrE6zSK",
  "key42": "2P5zRS57H12odavzdSrCPCkPwpa8ku4tXtGQK8FCu3yrN9734pVZwUVkk987F7FNHZXfHLXfYkoddCbEuJAXeCnb",
  "key43": "2wXEFBxqLvixHu8ayFhY8U4g7Q3FTRYnbQuDeixv98Zos1hSyzcoQmmHS1cs8uKTZVSkYd2JnJxCoxZHa1kf5Xa",
  "key44": "54Hm4zUv6Y4HGBbK5JfaNLFaZV1wKQ7tpek92SciYagPGdjhJAAo4pvmk2nM9A6k3xNALLfmzaBV9e6mwmQqa5xo",
  "key45": "4qcQst9kqSJucHq78EZBUExGfb8KW6iipA6tBzvKXaUfdRKm4xCVBz9hswkei5xMnchrPf7xU5fZbzRWbXBy3TLX",
  "key46": "621hGAmr566YfuF9H6ZBW8VsQb5reiBxXfrQRpaiZV9ZubLJA6WhBenw8MVH2Lv7sh8AmjzW8BzhXadbYqhXFzzt",
  "key47": "3AARMbnj5YiDySb3Wz7TpgsWU5WmvBCuW6pKcEZtfAsyvisn2fLk4eYW7D3LuATiDPr361j9TNRfu81sG6xXD7p"
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
