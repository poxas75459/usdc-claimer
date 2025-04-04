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
    "4G41RiXBu6Ekr7cgSPWoVQCtD9b3SVTqdwThrRP46cz9PRXkD6HmpTzhTSYwRTVsyGcbDLrazNxcKSSooaWEYM4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqTU3DzzQUuEMA7at2iNuxdPHkkmwaH1EUxN6b4tpu8feBmv2cxM9V1wKHdJwX4fRuoK5s2YW6ygTvU8QBE32R8",
  "key1": "41T4qujyzKvV7EFiEC9dpK2xPNyvvBTFh34z28xt4SBFPdwePnbweX9VEHRnfQeMW8tdVmxWkcmgKTaqYNGXBKYY",
  "key2": "5u2c7k6SnekiWPkJXgKTE8D2dFyW5wSsWbEZbPzrwndbw764Ktj5casUFNMcfWLhkygcrbfxg2BDJw2V8EWCoQLJ",
  "key3": "2rKSvtNF6LfNfSGhx4DwHvMfz6SJBrR7yQrnjpWJG7oQm8CwVWVbc8MyouQkW61NV3SbngoWnbssM9HSDSD6ftd5",
  "key4": "4pJVNDzgmfB3n5NpxdFXRVEkzcKtojSaX333AtPwTswKegU2QYhADz6g4AaYrkKrgAKjKnduFWE28HJKzuup6Zug",
  "key5": "4GDUFc96Jvop6gm6VvRJhJQNoW1AEaGzgeuKvmvnvs5kWCSurUE7fvnfjjy7EhBtR8HHAZ3UPdA8RRFAuPmYoi79",
  "key6": "cRYyzYKRHd98qy5bb6PsLrSrkjDsG5rKFDzEsirYt46mHgrcM8MBSTXfmickBcKLg7qofCuxmVvNLUntczqvnkw",
  "key7": "4QV2HXWzzQYKaZjYbP6nFE8LaYhNkTJvHqZ6CzcE3vetk5CwAFuj7Q6ikqkiQqjb3Wad23zNr7DMFdFw8hfAJnYB",
  "key8": "5FTtEH3RhgJxou1QosJdXYGzLKu5ErY7udKGdr3VnaAqf11BoELZPyQQ7W8PLXdaqcYkAgVEgPWJ2GT1Rk6NsFuK",
  "key9": "2FULyxNWSqXFNkVuV1YckcqfUaYknCSXMMJm4gy4dEtkBBFCyyg6CoLyA9tiXwae2ZSQojxVvF6pgaskjuPbmxnX",
  "key10": "3XGCVFPqN9wkR621CKMonZA1fqKhUNEpFeWqu9zSm26ThhqPrSAtqkPMpEjgyM5f3pf7s9b7pHuw9iZzrnR3mSU6",
  "key11": "5AzzPUYKGyYEqwktiyBCukAadKXYeUN46aW2fa3UAmePNAPErJPoAFLmoEWjkd54HmJVY3wk22b3wddcRaNph2ay",
  "key12": "38thrQHnCD7cewJpkHuQmwSCxiyvbiwb9BcE5Qu9DYdfktb89j8E6iMKcN5iDmk5SeZPEqxv3SuKPTT5xE1Ti2og",
  "key13": "k9CNcntqYXmQyrfwHYyJXRHVoFL7QK1CnYYCJ3MQKTh1czGquy2HTf5fx7yWLoELr43MDhtCWrvSqAdVgVKM6vJ",
  "key14": "4JqR22HNuYMR8TTUEx1x9wYqxEWKyiBtjMHUWseMZFdzG83vsrmHN4D1Pgut1zvezjbLAU7jKWxJUnG4ffifDGGr",
  "key15": "4eXQsu8RnZa9GEV51cSthYyaADSC5YJiPszuKF9TzhEzCZuqzbNwgNFPmso1g2y7kczR9asRCMFmke43LWBBjamc",
  "key16": "3TtYPKG3FvoZtrMs5QXnDgoVshrmo6efYvzn4CL2MPDKuX83yy1qi3EkGGusm6zrxPQa2o49hFpbLLarDYs7yqsU",
  "key17": "2imMWjDdTX67SkpQfdzsngxNQQFGJak9FFH5seiVA1S2LKSdcJNrqmRYCq8fMZScYZcUWjepEeLmfhEje5M6T9xX",
  "key18": "4eujQyzSUfmCWiLpETF4jMj5HZk5PBHFk8NuRZ3m18M94D2LQZYCLP7cLD5o7A1tA6sayUk2BHuBqyHzDhnzTvTH",
  "key19": "5ug1infzmDGoRxemcpQzpuzBvpiXfd9jfnuGLnqcXGD4eM9F5zubGqGfjsqtffV7puv5ii6R5NAEKdsiWR73PwcE",
  "key20": "2NboJ316ZTADTiPghiBamghbWCys2JvoRmHqMfoojvgX9uGYZvw3155bqQys8qtrxorMHodbMy4BTT7LA5vvELHu",
  "key21": "4WmWfyB73e6MD8GsGTdyLPKZNmGrpr1jo9oz9ZaLiozTvbkcFwpp2VwHuUzjwhUMDBg7ouWdhQLVeErcNfuFRSrb",
  "key22": "24WCnQw3HRA4iR8g2NjthfLVEsJJ8a5qPR3J5cbDZYxVg1sgS3UuBJBCa3wSzB7APd7cARF2Uo31Hgr5QdXG93Lu",
  "key23": "6396uqns6ZeXxpxxa4q8zDMqUTHevSn3eaw5wgKJdKRTnVNxxZsGDqkdT1Z8zijzXs9UfU8AHvJ15eA3uatfX5zA",
  "key24": "5BcDq7pojNBwdqSvFivkqNgLWpWz4EkM9E2RsbJywnN7W4jZbuMeueAaBvvcHANoTvUDFWBDW89rM3zyXq13Tej",
  "key25": "5jpaugakcA4CCYPLVaF6TxRNe3beCHZE4C4vqYo1SHizeJ7d5Ps59VfVYhBHFiCG6wbppfQDb5wrrucdwNgy9VJr",
  "key26": "QMdF7NpezdHEpAb2HpnMkLS19RXsCTvkszBoKjX94rmqvcWkA9NDxvGvBqYsTnctaw9NmrEUqymRDDNKeXHmtB1",
  "key27": "4H4S5eKnVAHVrxfuYh9FRLJFzX4tMUEnGTvViHU81ogyQuuJosRfeYsThKCj3CHhwUBsLFi3jwGtRiLz1kitxTEk",
  "key28": "2e8MCWWaf8ea31mvBAwsLhUuLwykqei5EeUDrkBcEhG3N1DdzzGLRRnQ86bppjfFjx9DcyYM1q4Yh17kQLpsKhtV",
  "key29": "4Sgnja8PnY7oCGY2xvWKWhu4HxP1DfXcweeFVFkxkr8qjedH9MksXGePnvWe4mYCZJ85VSgAcjzVoHvazNVWbfqH",
  "key30": "bjzvPGo6J4KGmLZvqueWQ3YiVVHLwP8kKmRPwVW9rNF5Jp6TnPmyZiFYBFKqQfwnkNtw4MN6kw6TvUnTPVCFhKt",
  "key31": "61Fecqe4rhfP7he8jevQWz1i6MrrLUiTGhwKMbitSfQXQa5yRZTg1c1aTms2DVTSwFY8B9n32ppsrordwh3tjABr",
  "key32": "5aQ5GQBZoa22y8gVim8MYGDGAe1df6t7KQDCWADus25gSpALVeuQV4xQrTpN5Y4Fy78zwKjEHFngwKXFFZXdvpX2",
  "key33": "4VLEcJ4fC14tDkFy49wDvSZd6TLLBGyDXLb8sEqmHchLfbnWM8Af32ByiKdc5fGVirTWYHFfXErQpUxEWjeiYVkw",
  "key34": "41ZPWeLSdRxs8QgTSNorFHQhfgPzipezYgT4tiPxEMTzCZkaMRfAx7F5fxd1EvHRBsxGXAsjBiCDx7V6sUncR8Zo",
  "key35": "3RSMFbq7mnk3opSpwHhTBLMqCxg3JV3Y4FLUzgMPuqe4EgYTczkyN3PiY9NC5UJcS9Jsjc7bXk2qRsUaNxTffPge",
  "key36": "3ukXP23btcFcmESBAyUyeAbCN3Jw6na3rhVspm5FGbS4P5X89DhcfpRNiekxzh6aUEyuDPjTEbADwN9E5haHhL3J",
  "key37": "55P6VfDdrWVx2QKPM4Br4UEMNi1YHqseQSV1cWL3thCmQotTLcwq55WpshMGw5rnUrVdXbBYF6Dxhu7ufPpv6VBX",
  "key38": "2C6fkT6x1SFHbkxTJpnry8Bur1vZzm9BQhdbvGsRXTmshZuUpsLn1eN2mLWerDdN6SVi7qbEuGf7ivxmEJ812sWT",
  "key39": "2HQmWeX2FEKg79Nt1MfoabVKt7eCikhEntR14epMRN9UQNZnYCxUDTLXEZ5sxp7cMabSAnk8prXeXoY4bdgUmRrd"
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
