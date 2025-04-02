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
    "2XTU1KGYcxfrGnXL4YVW4xCqrEdAos5ExG6322s6P3iQGBJkPMo859Vujdec3eFShXKBSUrfpWrUHWXXE6VbnUyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m53GKLmr1d8bcm1i4LbTcAMtKPNNCgHJgQs4c2KbUYYvzGcSH2KjjNkebtpDxoPqmGCAqZ4iaaRa63SbfWJx7yu",
  "key1": "5vMv3EmqWgMTqCYMjNfLTtxdqYQatqixHEAJveYL33Vu2R5C4EfanyiqvgiqHfUG2xXEnkNUxToNqMh4ihWou7nG",
  "key2": "2VJ4JStkY46Fbgmx8y911vW2gvu5Rs9pQwBaXoTUtE8YVGbycKu6cVRqJqtNkv6p79HAwUbZWfxczPyqg83zrBx7",
  "key3": "2YeFngVkdb2QodXJi2shAtahG9tedbhWmwjyG5vVLyhsTdWjefKnF8Tf6L4dUkaYsycRhDDmHNjvTCYJ8tb6kbLe",
  "key4": "uMnt3gb3XDUYU7rGYy8HJF1dcsbEPUzFyRrSbXi21MbtnVY4ugaSG5xVYzJZp8JC9j7DAnLSfcPeTEHFGkt31Sg",
  "key5": "4vx5NCyTeznUccUxF7ovXHmqP2r5WXPAq9M9d29QAfZYPMTSa5iPcecQPtv6CRQoFH7oEymWBQyYysR7jBc8mUg7",
  "key6": "5W6uzVxY8YeTefwszfRwgq21Yzday6miDyRXibDHNEMt57vpryei5QcwcdT1Sxtw1yLHRJ6EVwGA5fvT1ERDotp4",
  "key7": "xBxDsxf9B5SQcWwwRcuwUz14hzeH93W5Uny6svf71D99GgUq9393XWiZEBqrJjHWQEihQwym9immdYBq9A3CjNB",
  "key8": "2SHLLmnoHeb79eMtqpXYtYtJ8ufQCL9aMSruVedseihbtuM2THZM59SKdsWoVb2NMfPFA21mod1MEJdPNb5Nit99",
  "key9": "3DGGFYMtZUuDj5AhLda7tQ6hsbDWwtdVnz2cqBuoyesw4Rk2DoUzCG1v6QKR4Mk77trvAho13XXRWLkTJEDHpMY",
  "key10": "5n75MzTxDaTjQPdxvwsqncoZ441c5R5FpikBc8hcn5A6yUC7cH8tZKuGAJevg3phSimLwhTgPuM3Js6aavPyxa74",
  "key11": "2uVfGkDwHeRHSuuR76woBG29PKzM6wWCCt9rz5DgWqBTSK4JrdX2VHQ85CXmiMKVBNyfF9Ep1QMAf9juHNtkLu9X",
  "key12": "5naPwzsE8tVaaF8h7uySesoFqRuPiRkHUpVwXB5PzsQcVAudLaonpaLNYD4VEuPLVnzjQMXhse1WYFTyaG6A5gzg",
  "key13": "43LWfQj2b7ppeFWgH5UVoHjfpCRMQWwcU32xEWg8rmbsfdK4DM1yhMtnf6vDpibpLCwuq4oaNBCcYejSZ2K7RXuK",
  "key14": "4Gy2C8sv6kXmm8kKjE6WjJGZd2YCnMcbAmXKJWXoiLPrZheCvXxxoGDLAzv7UxoRjH4fW9bW5xF3iZDKjHXdCuk8",
  "key15": "3jyXWnEcdozBRhJm4tLAkmyzNMaQtY2n9cuKReW4DbV7z3G3MJBvsHMqHTC3p6fmNZ4YKDDsc5LnpVcEK4xp4Sh4",
  "key16": "44ukyDkbT1Hp2Ph1mref4wDhFp2yo7pDfAXCZmdPMu4CS4QJJyFrStomDNHCtw6r4vmdnSqSTXXV6z8dB53D4PzY",
  "key17": "4VEkiKPFpxxRD6YvcjsynbftFCLrHiVndLMWrGWNEcg5cUBMoLXgUzhTVoAx6T7GhaC3VgqVY1Npet3yYFbaJpWu",
  "key18": "5cQiqfKzMmERXL8iXVhtknMfqRDkJbf8YZCscAQQfSH4dgMG7rQSF9x3HDzhAJWz1aTUJtkRnJx8pGEsiY1gYcJE",
  "key19": "qni2xhsm26HoDgsY4gR3JddKpKzyzQPfGoKNHWh4HhibDHU8fuDZX4B4J4ddQTFsR4sAGXooF54KPwC7ynmgVtz",
  "key20": "4n7WXFiDnFLxCZyKicqNsyW8gRZktMPT81kZAJSYzDxtJukubvHWdAosvXMx8Zqn8dhC6dFbrk7mqv2kTX2aq5Wy",
  "key21": "5ybHheiGoPdkY3JFdpnLkingvNJYHZpkd6rUofTi3RQnDAZJVEAoj3LEcSKEePuGCxxe1797WR8eXAL34r7EopGH",
  "key22": "Jme3yZRDG7prvkNtorQ8NSaBeUB2cTMnkW1zkzZAHM47nQVSXQoqwyHCEfE3M1rKQRnPR8kDnbQ3MxUC1tJ19yJ",
  "key23": "ueTNHMsFJRZSZrkPzg9RedzhDqE7KXvxNpsN7w54ic5iNPnSdS4JPLjMsU2xgz4uK1J3p7y5KHzbF7AxozTYWSc",
  "key24": "3ZeNAxJxhDjBhz6gpjowHXamxxysUbGCQaMNVeF8PLFBi4aA8Q3XJ7EV5KiRUqLAhaGjDef5xUfQLBdRK9mrstD6",
  "key25": "5gYSufuHVP47xtVHtZqTJQUMFK2k8BWNpYFAEsksi4H5hWE26FAT4ooenoW3rppVLg72nyke2J37WRVeobBYDL4B",
  "key26": "5nHfbuymtkrbBxNtKbxGekPLsCc68schwMjYSAfPRoqwgeFK5uuEco158cv3TPAvrQ8t1KmEWmpZ5tkLsBjXiXrX",
  "key27": "2SFPKRKcbYfSrdETKTU8RvrdLTdkscEKdNZCoW1eomqis412cGrBpTmqyY8QkPPGSxicTaQRh7gJqa3xqomAVFWj",
  "key28": "5c55pPZbhcVcjjmMXA4xLgYkhvyrJaH6TbYftiQjfkbztCyPfd143mijQ3BtxPwjYBbyibrzZLxQ3Q8G64WhLFZJ",
  "key29": "TrLmwYvGWJ5LJ6yquSQkKUXqfL1DMHTTP7Cmovk8irBSeozGuc9QW3F2rnfLy6gzft6P16Thj72YRha2rTatbPG",
  "key30": "3QsP7rdtJg4j7Fm967Sc8595kesgPbT29aeaSoQtgSozuz24QKybwzKfPPChkPUJx5BYChuBiozkB3mznuz1PyEJ",
  "key31": "1PyFBeTdtXdd1Gvy4YgKpXd9w6oixRtAFQfm8oLHEB86eoc8z8b1DVUsEDsEmBBk7rigpj5PAkk5X6Fp7VK6Rdf",
  "key32": "3G4u9FZQ5ppzhmGdr5vKAvmyszUY3Bgg6rDcuefzFCS1eDJbS9o94xMpXQXLmD8wQNxpD9PDJsdS6RZRyg4pF93B",
  "key33": "4M2azHpzzkT6osRnXhyraxCdN3x22zvxarYmHPx9XKguk3qyWY1XNzfv2MWasyVX99DkM9CpPuZJanyboTPXkjxA",
  "key34": "8W5UBoeTfTLW6K27YPuxEFKaDGDN47hyPD23S9zxVqh9ybJVvnT3wYdGsyCGgbWiyL67fRoesxd1Q4z1exxiGYr",
  "key35": "5FCg1knnXSciGGrhs5Nu9JVbaLpZvfiJz4V6Ma3pRcZxaZELvyWRzsj7fu1D4iiUmHuuBjUSxSGzuSmS1FdkuDy6",
  "key36": "2Kdwy9jhj8jCcEcreSwaixTYTnKFx2cce3gEhGTqGaro1aXjFDb2vxeDgak9dGtkWYX2yLLKEhZKLBhcFSFWFWEB",
  "key37": "bHg1vu41qvzSyWeZREpzDfEfeC6S58azkXG75HXNM5CMSXW278FAhMRQDYfJdQ7xqpMSvEx47V5E7NhkjK2XGxy",
  "key38": "5dBz6vtRjLapDoYW4h32Y23T4vSRx3Gq1VcXb3ev8V7bVTHZqXjfyU3LHQQjR1cwy66tmZALMCL8d24TryrFRwdp",
  "key39": "5UzsSAgbSmd9HyaVmDsLjmapsbCYJBkfvVqkhn1aHJT5vorPF6sBYYN2PjufeMrHptoydAvHsBF5bymiYMjgDNKp",
  "key40": "4XeuvPKkrVc2Pbs94TsastAkVfH5DpHhXaoRE6Rujm5RiFxuGu5BnYBuy6WpFJwjTEMzLqMqC58ppx6aTPgwu9fW",
  "key41": "3uqgHpocRYFAwDVCsM876KYzukrpBdHQZiUPfzxvzaeUGKwWZS6Mi88YrvJJ5NMxiLZGAXHg4ZD7mPLeFtwLq3Bm",
  "key42": "3d9udm1pTy4G8XRvuacV2nLVxDBJiWh5d5iR7YrvfBaiUJxkY9Hrwcs6q25H2mwiejP1Ed1x4gohCPiqES13AeDu",
  "key43": "4iUGC7cTGP6HGc376KU8MJnNZwEYaoMmP5Snae4PKVtpUgrz8MhuoqSW9GqQosqps58fdmPqMvwcZBetNbd2pFdo",
  "key44": "3k9BQh4E1hV6mSyVn7tju38GWbu4edv5Zji6jp494r4mpXHsAUAdLhawaJ1Cybya4vkRjCsK9hv4irnFYyLA4Xv9"
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
