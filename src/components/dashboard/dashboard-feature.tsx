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
    "4VkDxJhorGshamGXuxE6CZepr8gYM9VxGN7wf8w6G411v21YafBeKUoTHH1mSAX4qBBaFpbDrYy1okXECqBQoYPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DG2VqCC6nuEFG4LnAZuJPew4fVvP2WvwNjNpPowSBAPXMpQQb4YhwUAWzN1A4iSCR8hixyocGVpgfeRsxqVeGZ8",
  "key1": "3woNYbnyqWDPpB1hP8D97Sdk7o5nFXBbjSYcnxa9JRA6jp8rkoT5QykJFT2NCzVibqn8b7SVM3yb4ZHZWUKvks1q",
  "key2": "3MwDvzTbCpvvdkHC8vpMaRmF3CV8EsoeQrHnpJFSjJtzmtmRzZot62BYwEN9y5ABhcPCDiKUZ7JEyirZ7BLijZfs",
  "key3": "5A8U8QYLS9T2GtaFJAD91yQfVVWkNJ9RFEqjEHTKvazXG3AnZJLdWnX4yhH2wAUAiR8d4m3ETjJNaEz7wTL4yHvk",
  "key4": "2rkvR7AuhEYFwocnS1d5P1LQM5sVBLmJuipbtvH73RfnaghFqDtkF9huC5Ynxsr3KkhgotniQFURFcM3zx5JzrUk",
  "key5": "BugnAsg2kB98GH7scF2wGYNn6yfVnngeX8yrPZQwjdeewT2Jnv5PmoqEAXwgwapdJEzLTUABXpnURuRc4sLmasY",
  "key6": "4J97DG1hiTC4Tdd7v714e6fiEgZ8rsMS9R5FDJhk3jR6ZDD9jHBZpUn3K9CdFKw5qUKnXYhpurq6buUrekQSG1LE",
  "key7": "5gv7kCrpeqUL5y3MNJHRgR63JpeuxUgrvoCyd958eN7gFyZM2sSxc1oSrNG3Za2cyUyt9nPCf2xqfQyiupxNKTYq",
  "key8": "5Mm1wQRh9cdif1oZWxigMB8qr3DfsfnrKVj16qZTTNGBaFJpNbGyvJ7NozW5Wef4bd5M8s6R9QaFhSQGDBiwNtcv",
  "key9": "91VRyrgNPv457LUDNQdfSKTYdyDDWLNkmef1D6AHWS91xrqzPJGqrf3pag2EfvfCrDpUaRTA32s1nwXrpB9xzyN",
  "key10": "26terhxUjEBtbwBzS1WGW1w3uktEN97aP3DbJ8CVfTpVmXMDSXcanssDuvmnTfAXPCjqN1u942m6uLjNpfpg561y",
  "key11": "4PXKZ4qvCCw9PiuyFeMZKusBRqpqhRxzSH6uJhoPt7nSxYkoVm2tXEfCpV5mgxgaUEVESx2vr4XpHAWpxe58uX8v",
  "key12": "2uHGW9paSfrSUogQ1U7uaJxCW2SVGPMmLtCAm44V5MQRo1QkgoVbyFdG2sb1eSCCFThi7NM3VbCH7tmvxmvwY7kM",
  "key13": "4dYzGP1Qp3vnpnf8G9DY6wxFUKsyqhpv6Br5nCZ5TJxJa6ySHNWE4qtAsVgu43BteVadp4JwYpbzk2paDEnruGx3",
  "key14": "5BxZ4fvg9d1KXnQtWuKirwWPeo38gGfihiBHoxUfMRfGkAMd7rHMrA9fRAWm4Udrz3xSZr77AYCMmgCKc9YZfYCS",
  "key15": "42kGJZPZVgsEJciLv7yHWXw7HwPJo2ccgLiS6aFvdvMdPeASXzk4jCyD1DcFaEwxhW4Bj9sgYJ3zEqjCUyJhyuA8",
  "key16": "3aaDdyZr1gJHywhVKMYXoaRbx6YE5swKJz812UoGYtbkvco2Mzd84JtskEzzu75XGST4mnoW8qvJBcpGTSggBwCr",
  "key17": "3xu7U6WdPcz9rJnksegY8YJhqTeHE6s1hvdDd7bdKLah3iTFqpxmL7bGFaFfLS9NWT5UiVr8oDwYv44X2mBWASgH",
  "key18": "wJpNVYwHjBUHtP3R6CN1sBnij4meTrhVbNf6Xg7o9pnGnNoHoAVFEBAGSVSXCTrkJzB5ykhG9YnHB1a2T89MUyz",
  "key19": "2zS5szMTWKafxegM821AmM69waj7bdxmsZG2Uy39qPbDraxFAYewohqQFnKpEk5sFCB6Q4ooweFwhM6ZwHWC2KYW",
  "key20": "4m7LrXdynUhGp7vdv7gNHM1uRVcoSFrEozSVm4Hvj67oYiQbHFfvQH84pqVbUXjTcfJ9opjsN6zpkh5dp5z3LDRF",
  "key21": "4VsqNHe3o7QtDuHhxD8n9vqiMvqDzt2Qhm4Sv87tiQihpBmhgQU22krYNDonaVxNfi7nN56LNbFPGbs1THd51TR7",
  "key22": "5hiwpJ2a9WXm7QBiC4vSn4ug8UxEcuWC9ZxY3bpu7brCFdyyH2AvVpCVQGeQnuFQDitW5uz12GaFsYsiBBFrXyPx",
  "key23": "4FauvvJqFA39BaCiD5hDV3qABrHbWJ1Sfy49959ZyruAqcVEtbR1DwZLEp1BBCB3M4XHF3cvRjLegFfaZ3Xjw3kD",
  "key24": "2tPery3gXH9YdbwwCby5wu4ArdejTE47SLPUwZEa4gXpeNc8u7seZC5rAzcPgimoJNLLSLftsEmyz4wokiEy9wKh",
  "key25": "xdvBx6p6eM4XxMyd9ToUQay8bgrshPFa4csyNezdYTP3zo6Upx6idci5JHwQS2Nex56MrKBKUt6pqiQamhGuTwd",
  "key26": "2JbrhvaGzzJvqNd6DWYg7oP6wpxCp66AFiaPyrwhkZhPrknxg4SrHkyYcPSZrDC7JWt46CHRLNpKdRVUyADVXqtQ",
  "key27": "4oQqFqE1YcKA2DzXiVEAnk7KyePNaqLdGUbZvvHad6UPKqGhWjzzFB16uDD1NY9syAa75tu2GiZwaWUMZig9g5NG",
  "key28": "5qL1UyBMABC2hT7NiH6EnYD4ntae4YscPmPfov8pyeN9Xb2tPbnhYCZ887hTgevtov2vaS9GoG3sM9H85Lc7cDoj",
  "key29": "2hoGwSkJn9iZ1JZtMGNA6556Y9LLgCnLxGMjFsow5KF9BQKjJ2Vb1HDT4uViNZ4rfAvW9XrU5m5qdM76ivMWFF8L",
  "key30": "CGgZTjRHv9AC15CpmefQANS5WSH3jkeXHCdLfRw5AnyBVS55Nf2BJX58AhasgxiiFTBKuTZnyX1tYAJ1vGyt6bt",
  "key31": "4oMLuNjBptBcBBLuGfMNAUeJWUDhMfGSyskzojcvgbaCDsdMRbeewbfYJ4vt7ju7357F5SR5mcnWzidEMCBEcmHt",
  "key32": "2xWFMuwWiKvFap735YifzeEJz9eCrfjQxFMECf3W1Gg7YYoF4v8u5FneK3huQqMpLUB87vZpCU7bkgNG14KomRaJ",
  "key33": "4wLdcPRPhTtog9MmCBdqJ5FDoMhhf8jVTiQMGVvEjKsre4UzxgPtWV7H6QWMHAvuwJBcChNCsp2GMHwQYkySLTHB",
  "key34": "4WkdUt54ecMimq8D3bUSSm8ksYgFw45wYoDLKoXjQ2Zgh5mHCNSk9hreXJgo4V7iwjqdLf75tvMpP53hi8EcFFZo",
  "key35": "65RoSoDKpGxGWvXjYzyLu2TUgxeWFcpqFH3eSdH5XSicFjEZPMSx5w9PHomA2K3oFinotnXBscbnk4y4ZKHVGbgC",
  "key36": "5uP8sdwn87Ax8FgsfWjqDKh2EiJWEPrRXbnjXFEiry9hWGVHcxootTWk61tf2JHUGgv5VxVoje6PtddkJ9CRtQBW",
  "key37": "4KCB85mkWsWmGsodpgpX3EvqfMoqM7hGbtApaAQFL3MkFYQHPSNS1GzKzbcmfRCYiAZWkM9SJioKf77nUu51oS53",
  "key38": "3bvhhvvZraEbbVqb42q4qTCiWVSCudd3WDrNzxY2mMrcPovwW4ihBSBqMcgR51yhS4s4HYUzgjA6xFNqvVChz8nk",
  "key39": "G1F6CjnTZ4fHtjezMS16KwgKzFJeQncq5oYTC1rTVaKEpS3RKigPTPJrp9GGxzpNayaqXeqYdBtDd5HkRiY7Mxi",
  "key40": "4nSqDhGBcgMG9dypBPJmr8mAmdZPW5DNEKvu9AdcR7cmZ3RLnwg1Hu8ENFgBAT694P6SePtkbGe1q8cncaGzJCG4",
  "key41": "5BaL7drNSBDsPQCqF9hJTvcYTa66cMKeeuoRE1Umrgn4jNeo2DuSksGanz9XkeWzcW1P7kynddRXxSzeGnVzuWgd",
  "key42": "iostB8cpPL8W9NcJzobTUMiWcjXQjGgmrJ5WaP8qBrk5NZZvB6XwZ1aQBshz9tpSd3oT2wUUZThkYyh32Vf2xws"
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
