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
    "6KNvJCfiC8ebHcPYt2YasM6ea4oWCr5R1RWeZNYd58oimnoZa4zkUfCsTT3TuzSxasfU6jXh3ePKB1h8p7h25bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474N4RKJ7H3LsQg4kfJq2Mv9jx9EjFRs658S2QXckdUz8pFCABhqtTqjJQUvn4GN3j6Ts5UCT33UgJm14tRpcEBW",
  "key1": "5EqPUaX4Z3ACaFrUyXEUZk4HqusUQ7V2iRde9kCsjipPtC7wn86VdPDP91M7Rpn51kTm4rj2Mw9SWmem74uc7zVE",
  "key2": "2eZdv1B845tYTccVTYxnPZJVfWtea1uZj5UfLDLAoNjb2HH58VpNN5s2ekFkPA3uwKBVrk2M97o6HW1mED1DVX9v",
  "key3": "cuH1KpbNKw6WAR1LcXWeqaHGYM1yH4oF67dxHnqNR5WKL99gG2tWejCWwg4zRVCnNF4afUjnxBbvcbQk1kkBm2D",
  "key4": "b2vJgX8S4SCaUAuQfibi98Wd4yK9bA993jZfLV6Dx51cpHu3LrKJwJ1BRxjR3JfKK3r54s1d7VBXgFhs64978a5",
  "key5": "4gTcAqKddUwtVyPMbpd3vPr16TW3UxqoTqrHsKHpkc1XHsXvhV2zFekjCkYH1ZQjWRGzuDF1r9MoUcRxiuyeqWe8",
  "key6": "43U9Fog4yexwhDQRN9wRZQPU7X47ktEXPM3yfC6BeDUAffYJ3aZD4CXbn8s8rbWE5fUd1AvXdYwTu6WjHgtrfRAF",
  "key7": "3J2HbaaMrzkXrg9upwHU9sezrdYy4sHFdnG45Ev77GmYmZwJmS5rza674Cro23RqAVbKWHtZt3awoXQKKugbYopT",
  "key8": "3bSRQocnnxPXYbZks3xyezcFMcF29RbtNgrrpZaTnK6STXnY5zhHgxQZh9Lsq2U7c19Ze1fGUb1fw2KpgJRZZhbX",
  "key9": "3TKoXx3gZtzKLjnTGWqocH9TusAfHZn8aZLN48cHN4WPcRJRK1HrmSLofrcUCY8mBmJoQVUUeviN1fp7o936uyDN",
  "key10": "2oiThJ8d6L5J4PMo61ZoYDkuUix6zavyXYGhCuHzj74gFeFJiUuTySJsNgJB9hwHYqChS1tnhxYjsgE9YitoYZwc",
  "key11": "DYNZy6mmmkvsWShNPFALij7m5Jx9qRFpy1nEriDao1sdGg6wTVWQK1kkDcXCwP17HuCozppuwpr4onvAc1A3MK7",
  "key12": "VaHDuNyHxwgAs8SW4ifR9AEzgnW4xpVHhS8z3DVCZ4Xkto6Ejgm8C1MzrfJsLRTLT5ubw8EEx9kFWLrExzwT6NX",
  "key13": "yHRppKM1SEAc5BDBceA6aamSANom5XTwsWZjw6Um6SpUoVUWdoE1dQX2CmFfbzFokK8usd7Gqp97vNyRBPjk6WL",
  "key14": "3dPXWMn6TBVrpgVUZpRBbZHaY3CV2YPMSUbax9JkuKT2Va4akx1kG4fUD46xFenCPkqaMxtPRCp2y2Sk9GmPFmyW",
  "key15": "5hAr4uwQUJqXxojSDemVkrjyTij9FVcVG69QaiyS1Gf3XuDfFLmvcydxz1nLfHEac22EHaMGxLgAoSmG5mLkGBB",
  "key16": "51Pr3bFQwqoeCabEBYVFXmqD4vMmMHfT6CpGWKfRQXYmbVJfhD8K1BYC4qfDG6Yr7ei28MDMo7wS4EdYsXmj4pjK",
  "key17": "5JxvXH6dJhAHJvEKr45tHrbj2Q6kEgi8ieobmpXJxjyf9iAZ1Csur6zPsWR23uifEW9MASPYD4M8WpjNnDTdg3wB",
  "key18": "64gYzpZSWKg25RANQoy1mZszKfa7DhEazswDiJdkCMbXcLhBjc9cDhg3HcWuffszBAJJcJmZdniWE9wG1oCmt2QN",
  "key19": "3MBy9kBg53VqvpMQ6tewkAdjg7V31ixR9RMjp63F4TsWktAe2VcnkJKQK1cy1XWcKdJVveWmqSaXF4WEASFAJGVE",
  "key20": "vBTjcEgzwmhEAx8aWQDY5PMa9hnCvJ2PVxb62eMTxZrZhPujoDihjkkxxu1vc3KKcLZyyHB3hQ8whsTMRS3GE3p",
  "key21": "4a3WdLXmKTAsHj71GCGkwqw6EJtB521Fm8WSy24AWKq8x6gVqyR8o13jvUp8H6LBCiT4G9yP1JAMkshP5rhiUgqd",
  "key22": "4kj9TNhf7jhBjuUZvejgJPbmCoQHdmBo9aMJ3wTr3NUucWUVUaRNYWVzKC9p7dofSL8QdiSjM1FdYpMJhUTU9Byj",
  "key23": "c1U1NwecrKAsTvXyrX4JMcuo3csXyBNEkhTyiZe9vkeTFGEDYvabPJddLRZzWStDyt8pEEpGZUAP46TAth7Gdmn",
  "key24": "5sna1heYPnBAMQy83JBCpqBeiheKczFBrTo5YsEKMboP8zXzwenfMGNB4WXRjcp5FTdkf1xQVuRABUdzF8kFtrjz",
  "key25": "htcEyogv4FikD5SvdbTTGvGMcp1eNyRksX7YtawRQUCdHQa79V8mCPRHGxvdjPdmg63YabZbxtsmV4ud6vvqzuu",
  "key26": "3spADKdqUK4YmDHAJYRZiS33cmnwJq6Sw3GAh3bhHXWnUMDHLu1grTtV9LNrrXVVRwKXq6jbSYeEoMhgh69ceNhN",
  "key27": "3ShBYz34dFKbTkUdBRfjJA57h2bGcZTSqPrWWu6wNj9g779HoxJdKtZuLRGtfHtiM8tefyHXPf9XynnvGWncgS6t",
  "key28": "5GHfxreprYBsN5Re1fHs27XXVct7znYxwZNf9tVxQtiQXAG14UHB5HKp7CtZqcKcgkpPDfJ8zVAFDUr4z9s75VH2",
  "key29": "4FT8SM9n2PsbnmemQGFfo2cUYuyBzzTncgWRuBGzPiMTHXuw3EsCAz2LcuvTsU8YLqUMgAWzt9hHSjryNdtPZiw1",
  "key30": "5rP6EWLwMeN8xhqnK3ybSf9BghwSqiqmisTCTQg553jqeo1mh7LaAA6uUv7L4D1UUzHecSHPdKTaa3wpRX6LuPpU",
  "key31": "3Gyxk8YoptZAFuqKArrjinbatLN7BcXNKLhTyL1KJ78ZGbjHEPXWQ9f69C8Pi26K3Hx76B1W337TXHDd6xoMsAzo",
  "key32": "2WaVuZcv8gffb78QJoj8tacur1rnMGCVYKYnhpAFED3h78teTVzQMJjiX56NPcJtL5kSgFsVXL1w5GocchoiLEPH",
  "key33": "3VUrcBPRKMYNE2B6VzkGgpd2wQBKKhHCz2PvxGUe92z2EB9Xew4xqd39GEgP2xrewnUcgUN6194sQ1PMYfnExhiF",
  "key34": "2MUAteFfEQakpKWfgnWdAsG5NtgPEYrJv4woUF8rNE2r5czBW6fPTh5B4D4kuWhCZpaQNTqwidoSrjMgZZpJSGxc",
  "key35": "4cFobhLict9z6BXL4jU8LeASQrSBSurCaCWhz1h7xsaumnzdrXjs3nY3x91Kh8Fxk8QMvaqfNs1MRwKitggV16Pj",
  "key36": "56Z5rHEHtr2voz4Wt32QmqRT5P1X7eR7wL1HE6CEgzEFThgkcsyscJuFwyA9c25aiYPSdVepSaQrChCnDo9psT6X",
  "key37": "qRt282j2QbM3zbfSspAat6Kww6aYFV3abE8uQXuBZ6AfHarXoUnUq48LZMA2DfLivruiqRxHGVH4r9UcbbnmPQi",
  "key38": "5XPqu4cg446FKMfz1fgEVU5xVKXQTbKkZ6rFTwcJhNav5wQBW3RetfJuqoTdC1qsZBAdytRc1qv5eeMGtXZsLncU",
  "key39": "3wdfEKUsyAiWXZUfZtCzibvraqkdmMpfuzRdgf7wHpTHtezdSTw4B9eGSBheBVs7DUdaMR3dBcVQdgDEmXoHyZUu",
  "key40": "2uEjKhV2z9MqiJKUoHjjyWUufL5DNPyxvsQEtaaxAnWsXM3ztYJq6dBF3rXnxvaHjtfZLQiu1yo7UKsSNggV9sEp",
  "key41": "rZj4vNZTxiLdYq2P2FxBb5LWy71czrP9ytBSB3RPhhvy8sBF5CsHGKt2M5zDJjdAdhx56rFFeeNdbs8Ww4V1Vgk",
  "key42": "EvyDzUa8Cr7MREh8y6mE6v8E5Y8JrfoyMh15zmgjw6TcsyoZjVAFyA76PXcPv1Pg13nA9z5n6tW12f32WatayKL",
  "key43": "4CNQRZFqtC7zdYFG93wS23RoGHnuHrHpsamuDLgiCMKhWrsjjiZP7XTvcRuvmKT6EoadLjWaAqdviPaf6f7g1nwk",
  "key44": "D2TmRXXKP86uQNNJZNeFVoUPQmEeKEPgdEFE4r2U8f8CimjLimxEtAoJp5v64yGv6ors1unrega19HvZZbDfjew",
  "key45": "21M2eh4bjuwvz59zTXHsSgLcXoeNVmWytvRw8rqYbWjSH4yGaU1rqFqSJZeFqU9PsoU9QcFr7spNqkCqGCpr3DNw",
  "key46": "2ECvvp3R5SWBbfVGX1WvGxHH6cRB1wPwY8LbFkTBbWv4QNfrdkibS1awfnFJxTdYmycHotguS89p8sWaggg6rEYD",
  "key47": "5C4jVMezpFxX7aRoebNpQuKHvGJoddv98vnZt6cwhKf1h667WNyhfHHDLiEWqekVSE8EtNzqN4pXUCnMxpkX5c3K"
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
