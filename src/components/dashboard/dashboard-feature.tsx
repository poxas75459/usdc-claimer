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
    "3DNpfZqQ8iVdLUBcKTavdq2RLLaM2AiLkjevLo7VzXv8n8dLsRhjwYE73u9AWqmPtgn4JF7fPuGJiAe3VnfGBTmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5KeJ56RbFaUvW2hWW5A6FAZxn82VDxDDtR6PtWDtm9jAyNKXV3f97C9SP3mmPjgRSVxHcAR41fsYzst1VZLxrm",
  "key1": "2wC9fw54BvrEs3H8Ajy5Lsubj1gdrtxWUrSebjoGncffNpoaHLUb25EGRBc63wddvz3hebEdcYH97bBdwhnNx3Jn",
  "key2": "QpyDb2Dz4Ld8KMbL7sn32h5QQ3Yk4WwpLRSuxj2pHFHKZs5gusRjFxcsSofr8DGuGkvkmp55i8Ptz8GGCMCLFvz",
  "key3": "5s76SsAKaG7S7HtrJkVPqk8KcDYEUekrfFBK7i3njTShAgDbQrCyLeVLkzPqQzZFo5C2iUcA1AfQqvXKMHKm6Q5G",
  "key4": "24uGtKaQDiJWHsvjBZSXbamAzKd3gRoi3wjSCTdx7ibgujheoUQa8ZkMjD9tGPBdf2kEj7b9NVsTdxhLo3iTaqYh",
  "key5": "36bwqZUjUPeEDiytGFdZAjEYKUnELrMecbCDQLLvcsoMK7exawWSpLJ4hsZVaMP3oodmbiX2yUz9TszBFuiX4nPN",
  "key6": "4B14veRZm6aPC199Gf3HhBH9idPSBorPXRLXmSDy87nqVNEns3uS5UCQ6hwrpLJ53xQwxzBcPyQ5oxzZCCBAmRuo",
  "key7": "LFv2oFiwqgxfP2rsUzfpE1xV1H5FVd6sfZhHydjJ3iV83uw4cyZfthGJYPVpsF2V59iZEyoLBFKf6jCS4XmRHL8",
  "key8": "5atS7mj2CQmFB6Pc8P7tcmjFUBGAgzydQTQJkSz9bDwjXFPGcosAN2E7PgcQGcNQCSgaoZ11VrmNBnfJKGhENXPg",
  "key9": "2Sfc9EEFN2DM9zYsUzzdkjHjhrt2YdJvgeCZqZEF1kLgxfwcamfvGK9uZauYt4ChrUGAKrmbkKQ83gbUzq5SZVoS",
  "key10": "2PdrmKV294tz49pC96KTZr34gaf687qGvLqSjG9KjyqXiiKitM8oVxP64nZ3WiyTRLJKL7xADJpbcHMXdo2WpyfW",
  "key11": "4deqaBzK6Xm7fMkFsChmToM8AshKtxAsi9tZwzKh2vZtH2bmcY3MBa1UkcGJPSqbWS8SndAG19fugAbapy4vmKSD",
  "key12": "4cTPGocTscbQxpoBbxscz8EPtrDbQSJpeMnMDBonUSyS6j59opsyjFJ3igKGRD9PuwQE2VxHwDaXrVN71rv3QA28",
  "key13": "j7sx3FRXng3Vo3HUPrC5Q4GUxcFJJK8KRsJUctv6iqCpn4hq1t9zTzokzHX3oNsZA2DirBAGxJRvLQqEgXGZCaN",
  "key14": "5pWLTKAqa8eRcPiNSG75KJKb4fKB3UUBrfop1MZmQXuFN5SfA1N1A9uLNaMqYvbRj4HFpzKFQv2cyrjb3kfC1CA8",
  "key15": "2MvLA4iqqyEQLQqJAqfJSr82KkH5bGWQL5tn6eKVdkdNcWR4PPHQtqkbP5izmLprWTzcsdZHbedVmkjH8QjX3Hrz",
  "key16": "2ih2mkwiRW2RhjpN4BZ7vc5evvyQeoX7qXYCiLricqDQ5uPua4pQRoASNgeKbXs33PY8KGdDH7WtY7b6msBcMiAC",
  "key17": "4szSqjzhkiqPmxyz9EYm9jq7k7vV2ovYWLZUYaVxSdppd8kw3pMz4KACkqMptjXMRUdb3baBab1GEBnR2QpYcmB7",
  "key18": "2N1sRguutqgdtsDj11TVRwqpxiMRSTFXx6fswAhVj725xBq33TfMwH1GE9nQUgSmgQaTqdpdNKFpUyqPYMRjB3aN",
  "key19": "2fBmVCipVv6hqomryiSTLc7Xhv1hQBBNhjiz9khCZK3Bs8mUPm2byYKAUoXs2uVy3j8Dh8tP6W1Atv7jpfGdsmUx",
  "key20": "61xdRjRGCzcWzsoyX98LAze592BhZzanpaQH5RExTvtsiKHEP6HMbLu3jP82oUyyx11WyvekVCwREep3GDeURzgZ",
  "key21": "5GmAT396asYvB2R26V72Rh8pBSPtgh5KWbR1GUuASpZLZGVPFfkLwnAohXy7AspLf1PFaxB7tftscB4eBT5zXrf3",
  "key22": "3GkY5iru4m6UCw2V8ETeXUsVfoATUwQaTZPMigMWRSncrLKZyrWqXCwPyZCRqi4xicgvStWSfcytv638QC2qbt1a",
  "key23": "JVhHi35qqQ3Vkyaiv9jHw5Pt7epsL8PP5uEs4Tz34ZXp3C7Jf7JFMjKoVS4LCxEvnKc3wrMvSbdZA7gXtEVQCB6",
  "key24": "2mKHZzMj2YKmgYNE8JrMxCQFpNM949igpDRyuouFRbB19p5mJXc9Z21aH3F5Aq8JrF6Hgt4NZkTFsQg4V488sz4X",
  "key25": "64x7J2QF4vVfq52HX72c8XMkxvbsDSv2B2QQNh65iUp3ucAsGWRP924z6SSMdev2PqQCxvbGoMeCELfhkuVWhDzj",
  "key26": "xfYJgYqNtiMWtShZB8L9mT9KPnypEAmxqzS9FWczzSrC2SSNUR5bRSLFXvEbyerx8zTUYK91hnwMvuBRxtucRtA",
  "key27": "5jwnido93qAAZN5EuKWgKGyzuchx2kfRXUd6wkLzhpomsjZk3zCvCajQRrF9V9R6paBxbuEYefhsFNg7YvuvCLDm",
  "key28": "4qEpqRH8hZZPfUwFYbbVkwXiFSfreMdpHpiqeg2uAdXX8i3ACwH4uG5HEdhM6WNgoJCYWTqse6REZ57q94C9FqzG",
  "key29": "4AmKL2FFaHTjrFUrD3bLCp6HDyF2Gj9rSqRpFtKYYmeehq7tmxANCe1EKzJWZJmoZ4gUi3Wj4BoYwwJ4iTJmHGcU",
  "key30": "45xdAZt2SBTVMYvwprfNmfrRDT6FE6w6cQwMYAYVWzAQoP1ZrZfoBhpW2LzmeHLRz2WkeS5NdyHpfmViAunY5qJm",
  "key31": "2oWSpfE8dUqErJDnVF4WpBgwXfrpBJ4tNLuSVcE5w8ChkJwpdPyZ59tK7EmTkb1JXqts13hi8EeS5irVLq4ZnoeP",
  "key32": "2tjPjYSKJYwCSgev7JxSGB1DAc4L6VKidFNtzQo7M6uxu9gGqjQPq3nAADF9FLTP1M7AcidrRbMbyHuf8bwJYpFY",
  "key33": "36ptJahpwWeyJtTZ2W9GTwLozX2JLAB1T6TVgEnERwFSdS5BiLYB2wjSFJLY3q7gZYPy3WDHnfP7ZWgJ4SeRuWSN",
  "key34": "5Y1SkvMD6rrNUos8y9YidJS6Wsb6Z1dJoiHiLNDFektcmrLHMqtQv4pm8gkposZLBQCnQxohLHAqGWzFPCX3J2qZ",
  "key35": "GV2svSBsziurB6Dn49KCtTcXtfzJKfWdbPifuKcoUFaadGXXQSQiNENdafGHqPNWYi5LZoGW2waQXb7M2zY1Use",
  "key36": "VgaVWyeqFN9J4voFNPEojpn21JTMQfgbHs32GHEZ7tu7KQWhw6Bc8WAS1YCiByZKvPgTYFj6pbwSPAZWiwXyCUM"
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
