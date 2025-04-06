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
    "3Ku5QCkpJkaNkqXot7upy3bY9anQfPKim9BFRvzai926kZLsKjEAG8LzQ4EzBktXbnH7V9cLWdof6H6SedvdfkYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r2rVwMKZ1ASttq7gaiTQf8bXrRLHp1UBA2x2aNsqPYiDqB3N8dKjqZxiF5zgGMNsz4JprP1hymFYjxGHdX421QW",
  "key1": "3rBMQyoZfJ3M97nKg2reTgNDGfWVHHYp1KmCrzdnNeCXLcWKE7MuuWUbGgn9pJHkY8rGJWja1gVvx3TGXfbDcvKJ",
  "key2": "yEJCvNyuWgMuBu3rnGbwiczm2dsZ94UaM8wjpRetZRF3ouTG9zpXMfMF2q8hY5naHZ9K25shpR3wMHeEJ5MikDX",
  "key3": "2Embpd7iK9LgnNuq14PW8WBJp21AMzpaVURgnrHgKnnJ1CVTDS1xH8oxXqtjd1SuEQxKCFSxbBMYQXBLkefmCrAP",
  "key4": "3QZ9toamLhXmV6yGbjyLTk6Qwwmj4qfWnGnZbBq4e9SM46ENu3ANTNNpCTNW7PNdpqM4NJHRGfqGUyRcHnbqUug7",
  "key5": "5HhDZMmPqLnfkoRm15oZZn5pSJDYLG1ZodvoRVy6dVsFraUVyzkKKFmC4J2gTvo7UKFgBRFGXoCesimJuiL4VoyD",
  "key6": "3UwUMS6FJ1isUMjxuWyLeEvcddPf7iMJiWrfWqb3MeY7untB4ACiafcdpT3t6zgvBTfkKj4Eqg7vaRYeVVzm9mzp",
  "key7": "3FYtnnAC96Tsbbfv6F87odVeDjxXn7eUpj3PJHvjcMiN3atoYXuJJVPtN2sFcq4NhPVxxs7asbe3QKQtN2PZ9BYp",
  "key8": "5zkejEAry7fvDAXckeqZDWiJBWRxNLfQ7DMQKyDFq4BWLXDfu6V38csrBCsw3tL9gQwVHEBeMLXNnfXv1KQ7WrWr",
  "key9": "25f1C5dFgiwvMLHgJoUdcWnVWiEr633yz8VyoTUffMbfnCymL8JeHu6WEPnc2vRztWQX7ZAwXpqpsGgGDXitiRyh",
  "key10": "3RGeA7TLmqbBbNZg7Ga8K9Ryvx4BgRVREzgF4mHNj4ixJPGqPGe6fanJh2KbWfeSR9mFvw4m6RMhSWLNPneGf5sj",
  "key11": "3gesSdsKQSaHURWZS2D7f6NGZKcDsUsqmjCt3mjTT3wB4ieZmnp9bjULMMyCzmYdn9ERP6SJgAhGdU3up4GxHvyd",
  "key12": "514jLo5SHWRdxXt2PWnEaUh6T3a6cWVXPzJEEYer9Vs3VuLNh3ojyrArwimTD99Y1CLWU8zf55uj142XPowPJy1V",
  "key13": "T9aDZSoprQUtXJAoV1bmKP7cfgS47hjEVXM5Xj5mGiC7S4GrHEXLupFT9aDry7yR3dyWg1aCuHR7aeCZqtyp3dP",
  "key14": "5JC5wHa1jqAY5zYHQNYTygQK3qxsMbyVSTSqcnL21KjUGqHTbyDf2Sq2novMxQa2e5w38dRueNDrR4RR1pTKeVas",
  "key15": "27dpvzEBggBedF35qhFphjYUborSM1PXp8kEXYKbU3AjVLYTS5mvX2JyvQiJTMxkCqhbKiintJr9Ff7ron5v5pUa",
  "key16": "4AFM91vRgSezpfUKV8uaFEMS1WXuvbXcboXkFyyuGYanAadCm2PEXKyJkUN4QQK4fYKvNPk3avLpV8vML1mjBuEe",
  "key17": "bGsM935D8GTHwq9zCMXxEfa5TyjxzKJhQtFg6GCdhPJikYBAiEmP3TVZgPrKRGUTi2Ac5AEzEybc2Mh3xeNUd6K",
  "key18": "34CHvsz6k78A79kwUSERuyG4XAcXbbQGXFq8tR7L42UgkfVrHSoU4mY9gMn6aNWxL7TLVRx8pgGBKMB7niCEqNpd",
  "key19": "4843AKLLosaqbPoT6CDDQJvCksro7xPzG1KAFix69B36BNUBnXYHpDACmduWMR7sw58so1QNYqcWjF4JuwKoHX4B",
  "key20": "4UPTopLAx1GikNnrjEzBq3HyD1pnn1J9zU8GjqLXjZSDWFcUhppXVM8XuYuCYZRESkHbvWuh9VvwuVmXhDTuW3yB",
  "key21": "25eANtNgoa4jtQGig5dQBSjrjejudAsCyh255cneHHyUPPwYBe9jd6KekzXEySnYLjWctwB3hexU4JGRdp1oo7iW",
  "key22": "4MSCHfDApoB8gpgSSMbsfFw6K5jvGRUn3zRJhnAu9vD72Un1hvXnY7JtzKctXhkkpYtswXzvBWvMT5tXRXuq4gUb",
  "key23": "5wPMsC2tT3ic77SgHA9KsS2HkJWNhnVd2h4ourVwxawx4Wddj4LsTNwhq5qNiE1KR49j3FakTG23b3RQPSTuF8mv",
  "key24": "BtkJcBwddhANL2XEJvFpxKmgpY6Aq4JMqTNS9zgADJnzEh3T7b8i8touFcuRMe7oaLrzkjH5hnz7TEysLvDc2vm",
  "key25": "4DkMZkw1XK9o4AjYjy8YrFayQJeLtAhwnq4SyyuGLVZmYfYmHuoArTDEAQkpVCPfEF7VYmbBJtTphn9zn3TXfVvc",
  "key26": "3c7xpd5D4UtqwsKddRPj48yF82WULFLA2jdSnU2i5tzL3iqx5iopYU8doRRdidF1sSRbUsG5JRAUZXwCwMNFwpzD",
  "key27": "4pweTSNnHcDgZeqnvqMFtj9cPLtxi5aQwy6fTqkEKtainCqzGboPgE4PKaoF3PbTomp6pQHMJYPW37DrwakexUn",
  "key28": "36U7BTuagiPDU6h1vTxvNV9p1VkoHUKBLtViuG6kyp6Ywi6aTUKxbw9for62qeFsCLmaVGmz72BFjnhum3Pgs5mp",
  "key29": "4NYHnH1tiBRWi7tX4XBgRPmztF31ASnZxZCiQahAz9NxMgpbTjAV3KoS432e1vkHFvL7xirmksT2oA92WGeyLoCk",
  "key30": "iBJUH2MS9raWyyPVrmcXGuTZs6r6QQZ8gydx1KKhkt3ouYZSE9GncknrrUuhENdSesRc1CzRs5zkhdqK64dRanU",
  "key31": "64JTZUZvH7AqEX8FJKES1KsjGgFGX6UDVwU2D4E7YwFrbNSr8TSvuRBDPvRhoCgxnToEF9KCkLWiUeFxm565NQgC",
  "key32": "LS4g5Nc2un8bSjEoUDtkHJcG2MAdmQ5KGXVtftduqa8nevJPZbKPbp8vLCkG87xLDWeP5bsA5gAFeaKtufSBuW5",
  "key33": "9ochEMW8KsZMx7R46qYWGntdmEoeXrzfgQgt6bFJCKpX41LT2xdbFeTPzQXdNtjbcm84uAEzaFhK38ebJLewVmf",
  "key34": "4R9n1jjcUytcEK1jHLMZENqqPt6uY1GPK1WgTw8JYvkF3zNPctC8SEf3rAtzceAC6WkodBFDiADp946wndQ7H52S",
  "key35": "5sgvpLJdVGAt16GpwqRcaozFvjYdWRJ916sRfXL2Jmn5ZCnFJgME4FHQyrcwv8FxDXWi27zcHXBruLnrAEyKU4pw",
  "key36": "12418Xg1XwMgkzX9jH2ZsXzMLYRB1ePvwZcdQN8g7ijRbwvG9MLprJCG7XuxrST6DLQNk7rtACdTL6VptHYSPmoZ",
  "key37": "42EZdj6MR4Ti4zE67Le48UadJJTaa7ANttVxgTuU1mf3tqf7oqMYWX5iKWcz7FowxwEbuz947zcfTWWsyQ3f96ou",
  "key38": "3RKPzJzNQQForsTyEEUhdhbTjbyA7gcVGgshWAMFJEHTyoaY2wTsT4kdrBhb5wqPKN2vGEgphgB2a3B8DxghjerH",
  "key39": "roBEvMPjiCiy4TfvcUaRzhfcESBbKFwXw15Aw9E6DzHJ9Fx3VbXEJBfeU3VzEUGw9hBigMAVN1Mxx4LyFmLfpgA",
  "key40": "2C7KvtMq4H5spPm28gRpnyTXr9Uu84dQGusexVVf18g3ZZeCh2gsqUSwAB4pEssjkUYzArxVNbWoTU1bKAa78bNH",
  "key41": "4QoNbhpncZJdBFSECqxnxgTxcTR5H7edLiEqZZWNLktoi1LHsY47WP4MEdnGhnSS6NpwL6PShrRvk44gxEdKgHH8",
  "key42": "EmdbvDC87swAEN1uZihRoasDinyMg2GSoQrLXHQ5Fc8nHnaub68bARSv9ZaxYVSSG4rJ2v5i4XZnRPCsyxFVreZ",
  "key43": "78cDPNTGxbnViVZerREXmGrNAZWJ5bxUratrJwjGK7S7KFQ6CXb6AiPnrj8zZB5HQjcHK6s5U6nJw4h2N1rwPFR",
  "key44": "4wqbbrUypJfCyAAnBnX45GYw7PP6rrRaYCkxC6cdP3MxYQUb8xhAbtRhjYJor6P1C5CaajE4J7X9W33MZcHgGdmg",
  "key45": "12741Gcsmdw3KwtYdtiQbu1JYHadKhKsDKFvTJUvZ2ez5Xj9k2Q4KaUABfmeNqi7BLkozniL7npa44Y5M8vF7yRa",
  "key46": "4cGqjrM6xKEnE8oJU7hNSWvkhVsVoeoUvFi6LD6GCUsiWm7G23zigoLJBgt4jVFvgouWHdgmGtrc3V7GdUxMCJp4",
  "key47": "5m1Dq3xXJGFgCk2LETRnQUFMR5JqwNhkT1RGB5nLZcURZJdhowvf9qm4sPhn57qtrRcnFgbBXNVrMFEbU7bknY34",
  "key48": "cQJnbWo42tztTxQgVtTJ9kmkKh1bxAjitZv7aC1MpXYFZJ4QB4Y11W5PKMLRBZsoJC7UQngAJZyMzB8KnmQmvME"
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
