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
    "5UBFtQxJsYuiq6g128SiVxwssX2zMhqyTxytHmmNQgJYykvZoK4xdUKWFBwUBaTskgZz1k8iD6NP3HudJZqFD7Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lz1zPNtj2sbUAfKad4MJDCF7CDhGo2x3bV66sPNVL8AhCaTyNUKMFFtAWEV23CdqdTuXqPqsetn1JKKJDdBRd1x",
  "key1": "3hf2FhTdf8oTybmnZTDQRdbWrvZfg6KVJ71Sp5Nggk9VZBvSuV5NdE9TEPrYGppAeaYvZAVfJFX47dietBHDsjCF",
  "key2": "5jDdrr5L2CrTTEunx9g8WTt7LziRErNLMbcZoxn2ayqEorWrWgEexUmTcDdi1yt3zSok7gboF19W196hoeafKxu4",
  "key3": "5K36D6XT9S4fZ7JzLgAn8vY5zz3kk413WLB6MPhiXUbnauJdruAm7ugpbrChixScx9ZG4Hka8PsdC6ZWHjbuy8B3",
  "key4": "4BCbcyipDiVav5hrEsFPc7rwJK7zwUeYyMAixnjZbSjvh42fSaF2bABb87jdEhuNbzvPqGpLdpPFp8WYY1haEsd3",
  "key5": "5gQxNtC62ifPSMPPLVhFTkBUUsD4udEGYnop7aYfi8r7rHR9RHZCuo7V8miJGmrVD1J9aaiewMcFGezUNNZQJucA",
  "key6": "4BpNDSQzN6N7vA5L1R3nNkyyoh2ui821fzBVzUEbxEPp347bSdHeU8RHBVTJyEHPiYTvPiRcrYy8cCKgK4TWupHb",
  "key7": "5bb6JWG2mNsFk5fA1RVmfXahPQqH1JG86AAnvy3UrFJRLpVGJMmqyBB6uAcDZr4N84hb6fPoxD5MweYrjygEi8aY",
  "key8": "3X7YkVyo8RYQzAcpHpmYgK2Es2kwzE3AK62avS57eCtuR2QBGXyGKCEYY9tGHeemNqGFWerPTuJrrvPcfRFg18aZ",
  "key9": "3JRfFKh9cu6jasGBZHc5SwVvYztgMsVAHKTrwwPCaeyZaNPk4fN8iad6HiVCs3facbKZpiC3oVgqsD1SpmJ1D9Bj",
  "key10": "3qsp91SAgCKn8dR9Qg4HsepzxoepG7PMkrcpdYtGFcGdV274ZBjmLZM4NkX3gdJtGAeMgbkmPzjJBWvDqbCJA71Y",
  "key11": "5MJgsRCrn3mEhSVYLsukPtKRhXr2RHpbrepPA3L9uNkg7LpScN3WqmtcTZTP4TYfHUSNMGKRWGhraXJMLvdN7MqD",
  "key12": "53euoNq93QAWZVYKPwogPewuzsi4Q94E4ckELCbmMyeTsPZRXKf3TyFq3qqa7ANtBnQ3FMtLPHJqo3h9JuFDBBcb",
  "key13": "3NQGUsygdtrdRGrJq6j8pRneTd9QAzRUsYtF2fdwsb1rkagYpUysrP8MtUwSteUufVSqSk6XfeWP1LsRYvT5P8eo",
  "key14": "4Q6u4Vjm2bqagdPnXMLxafUHmcJ6AjExPMywLw52bo6sa1nVfLtMukESWWY3Tmyscj5g4Na423txFviddY1W54JZ",
  "key15": "3zJJZf91p3TzpFUzWuAtVrYTn9myChB9doZhykNtsYxfGXNeuQWTovLkqMFAp7BX58p9HgZEDBTjxaU6QWDNUkDE",
  "key16": "4K7E6MgkfdjbCC2fUpaEcvucQBRNxC2eqRYqLMnWRsJKBnwGwa2si3C1Ms3sFkVpW3UWsYD5KieYVhgJnmqSPyrS",
  "key17": "37DxW1jKwwTSYHfgkyR3XebBJen1sHkQ3kkzTmXCNN3v9VPJi56rDxY3HyYj91PaHyU5T1jyJgkdk9k1DZcQxnBq",
  "key18": "2bQhKqBwS1Bw9JJRNeKyDSDJ2DaUmaqKCKxA61bHCcAfcmfeutkTtXsAPzHRRqhB8bywdXAdrVG27u4vd6hqjHjj",
  "key19": "dUtKiGPVRsZFDQArHcRNmKCHjHzHMUV6ppGv3Y7xLHg88Zz9jnioxGWVAc67vqoWHEbas9iVb5mth92v2QdqiW9",
  "key20": "we79nWLHYbkQv9r8qEVaBMGBXLYfiZq9mUEkDCpmVYP3iTCV99CUposeH9M4bxmoFcRZxXf3nF36j7tCAKPnzVb",
  "key21": "4dnQU7Ygg48kziXQkufGm6XdYg4PjuS4jH7xsR4yakpzbBkh928zpHQhW1DkNDBSnfTUzDdiGgvhk6GY365J6vbS",
  "key22": "4C1ChoixmgGAn4z8817hysHDw1VhH8yJGjTw4cE3xhnd3gSAarsE1F1BKNBRKxEdGc3Y4XUcYD1A7KNWBiLUQ589",
  "key23": "4tnP91CUZomnoKRv3XeVjM9UGR5KMgVUCt4cNqkmLdrvjuJ1zGC9NK85jfpHusQGvfabu9Q87wo78c9gkWEhx1T8",
  "key24": "k6sxGRzBusrkph3agpGr44L2tnQAs5GC76D8Wqpo7wdxQfLQGmtDD2DChY5R5gCen8CfaXounuCuPC8yGgr7KJk",
  "key25": "9ZM5HmRVNPycfFMBfFxicsD6ASdY7Sp1i4ADHqkRM5YFdVHewyeVUkiDVZFvT3sq23BthXaSaN7qYGdZb8kxfD6",
  "key26": "4368UrpMADLSopwjheTcgZD7osnPmUUvKc1qgtEaDeywx9PvGyC8ZP9nRSKGzHB9YAW4QeLJJF38VweA8oHbcLCs",
  "key27": "31qdPdKNc9HxzVB7bjjbxH4MGwQAbJsNSoRtMUXtctuAaRHkTpsuF8qMdtQ4VFGG3EGzqAMK35i77Ns3VjKceMRy",
  "key28": "5cbHwQzY4imBK2mAB32KJf1b99cCoByah545CTNLhE2zidXCFKYosJCXZPbBS3T5ZFX6Bm5ZGqVvFAgA82vyt3Hs",
  "key29": "3RmTsHgv6YP9jnioWYFLWTNhQWnZ4hZ8KB2rL7EURrr8egRfRsWRxcvwPEff1hfrKhaC19YmtmmFYJ1StfnTJAKE",
  "key30": "3UNwuQBNE3Zf8YMVswXf3rFiQHHGkHre7d73gkxEL1UHNPENsw5ypQibR3zdvPCFwRW1drNTA7GJkEmws6Fir3Vq",
  "key31": "5hFuqqcY896xHC6jePDPqDB3YY77RrJD8mVqK9rWpPotZiZtCGGBFGX9UvGRrGsVmgV9oA9FLaLHmgEoz8L28BnL",
  "key32": "gbgHkLArUsEGKHGok1PxsuogXjiqfeVCxUb9eWUpDBqWpSudEgngNshppd2iAx4JYESRChcYji1d8qGEJR6uuk2",
  "key33": "4aVnoWvDfBgF8scveJrSvsVMos6z7Fx3KwBFKA338gQLRXYPoQo4TYeTqwaHx2FHVr4UkMp73s5mTLsXFLaY31Pd",
  "key34": "iP9uoqisUrxKdEquriZjKGYyBRX8kv32paASDMVwVp4cSzAePqsWFh1aQuCaZPW9dBr3MDWho3LaipMLuDvATEE",
  "key35": "41xJL7hg2HVktqE8L9je4qxp47xkjpcxfQVZtrRSZRVGvKyuqbScTqko8qhSkFxUp2RysGrJhkYcVFGDMWjw7mp2",
  "key36": "5wDZoLb11ndUPGdJDWP4r1aDg7CgmQ659kRBfPmX6jXCuLt3sdwirEJaCEAeR6WKX4XHG6nC2ZbPayspn5V4gouS",
  "key37": "4RUTKeWpqLJ4JJUmm88JJmiFF2U8ZnbnTtaYnQJqrj5SGcRaLZcceLtf3MvrYnhKZWbNA8Jhzji9M9GdPdxfrhoF"
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
