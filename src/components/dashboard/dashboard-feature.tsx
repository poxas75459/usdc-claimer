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
    "4arBEpgMuNrB2tRstUVKVS5ehjCqVVoQZ4UWgQ9ddBeXcXm8rPwtvt4BWBFV9n6XXBaCj59xFVYSuEuocLtVDbxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4by2wb4KWzNScWMMW92HfabJpvZz1QQkCQo5syhGaFkLUWLmimqHqBWXbcArSRM259xg4MXrJExANYCpPngwSB9F",
  "key1": "43SbQd1ZdR7AVM8rjBZNv3hNfoZoXAwmQXBhu1dyukmkBdGNmi8eThG9znC83NrD5uiLoQqRH2DYTcaHmu4cLk5v",
  "key2": "2BiojA4ipDL3aVW2FWptKeBXLUNJZaXa98WxiwR2ws7FFQo9uH1W1Fe2RWDTmKqr9JdnYugfNw1kUj3DQ6Why9eR",
  "key3": "ZS6f1nk22A5jd8feBndxir7M6pskobiCEek64YrpYP3pE7eTNPUtcc4UEEbJMVNLTrybuCdmex3ZNBxPXtkjvgz",
  "key4": "4KeSq98hpviS6Vc3EsPgFSCNUEza3cFzTSdZBkW7mnQLaqVvA7uYADkRKfnANTdU8TunwzTbvZXnSBDNZUUAjRuB",
  "key5": "4z1PzE2umkSgT3EDFJBBDTMGofuypypGFYxX7pF2xvimNMmDQtXcMTkk7UGwF5zcLrQ5Hup88TPKC8jgtvFsN8dJ",
  "key6": "5XLijVG1pRimNbT43V4DDh12quZKDDpryPv6NPSQaPjdGBJRYMqjYgZN6DFhwpiNqoH2WvyqjXUhNCBgcPSpc8ZS",
  "key7": "22k8ct1CNdWDGYckkMp5Qf4vy1rreu9yZrSkVPANuYP8TBumoHJtN4GnFpuZPVXYgKE4PFBZ2ExW9GSN5wY83Sm8",
  "key8": "4zhBhY41Jc9rTApQWX72QzYnoWazUQZ58wkGQWRyv7s1mdNHYQ6aLXFHoAZwk6tt6zQeidxZeXEC5ZrcqdX6cHxM",
  "key9": "ZzsvJvhg8rATyKRVG28W3CJvgr8oNAfXWXGCWgjm5ATibebjmU2KEACfChhNmB6fcToRs8C7UTSm6rZduBcaEzv",
  "key10": "rujZQj6MyjekxGF9FVaLu8XTjkwP4rkppdGVbYHtkH5NZnkTJQEKfFkBUK57mPzrJ4ftzdPuFvujDemDAN6GPyJ",
  "key11": "4yNCSh4sNDWbUzoNanR6CWQN4Wxg1eK3Bf3JbPi75fcwH6T12pqXNifeNesM7G7WbXLUDDF4PnxQSkR1HU7YUkqb",
  "key12": "4HUxTtsCHZ6Ebfp37iMrVqJvjwwqWP7XVinbrtdzG2HnnLrjntvZxy3V7GFwT9KdQJkb4RhBdveDmBcwhV4obze2",
  "key13": "5BdMGnEVVTva7jfDo92SAtuGDv6haJ9TguZZY9tQuk4ebisJAwLRJVQYCq1WpVgg33f5oF9cazxjfg9PbvjL5Ujb",
  "key14": "HPaST68tJczVhGdtyr8HBsgb5Xfux3e2keB77qEvgQdrr5m3pr4GvtMkr3iJ7kNdhzDEkjLi4fyuT5wSCtahe4Z",
  "key15": "39xRMBEyMyZhtwd4sYdRyLQBaxWd3NQURy6Kr4RUahXfnKvK9vFsFyDRcKYmSYGHuZPZSAbpGzHZqn4Zb199RJv2",
  "key16": "4xs6xRUzNMQewkkbxytdBU7iFkSZMFNjK75tFSqbFaAfVyHd6oQL3DbuCVdva72Khc9cikm4iNhwgoLhom5WqybB",
  "key17": "3U3DEH8mNoktRxf94JWkRwkaaCB4htpvpVMBrMf3VPBjgDQB5Leeq5Hk8Tt7Pq71ytH4YnuTgJUFJGvU9yWcdwmB",
  "key18": "4AevJyDKmgboJ2uz4Yfpy547S5CQPjqU8WxR3QR1QtxgTBsvKRw5EcPQgNBeQCSgq3Ld3AAxDzx9BECBpSzs4jW4",
  "key19": "2g5NbR7MgYicXFgJud559CMPGTpqUdtcNHT7pedKLgevM3w8yzFf5uT45DYz5Cevar3nYAgWWjN9YAGHq8CcD5dj",
  "key20": "5wdBypR6ZeJ97DUJKSC4j2x33XvCEr8nmxkqhxxJ2oTqw252Nx2eBtoJHSijcQ4GtAzUwUk5UND3BaPgQuJfFG8L",
  "key21": "6YVVJha1uJskKpFkMaPKU8ECMx2nBa3sp49LFMKqFdbvna56adLZzPBghf3eCRuE7vVgaB93KKsxfe7dA5oH4Sm",
  "key22": "5zJ6Cu3eNoApqLzJwMnppr384RXjTNfUutFeWj883tpWguvaAAPYGq7Tbxn8UWkrJfCfVY4LeCxmBbu8Ejj8iYYh",
  "key23": "37PY7M4Z7HwqWCXbGvGRFjmjjFQgbEbwL4hrGj99N5j6R7zdM18KdjCa1SreRCLDF7dAohf4ErHiKAaJPwzY1pLr",
  "key24": "5jqtSevJfoaMr2SYFzkJuUutdRkdczzVdvED9yQHC9dZ1FTffES5VdefjLXjqcSqfjtJ6MJowNSSeuhA2CrKGWpm",
  "key25": "42tuSh3RWt9iDKF1Z4oanTiGUUEfDgnpi4adcMgZUuSvr2UoarTFoDNinGWtBYqujwHtcygrV4BGU7C6PmufUkR3",
  "key26": "556Q2wyrgPXeFLVmYG7pFQNnLCveYiNu8GZfmz9yzf6aggDySuyPGtxjfLkeqtrEfN2vPZHfqiN5QYAjnHC9V6CY",
  "key27": "27uUCsga8iTmSNpTT285FqFe55zoxFEqRGwjgBcxy8qXivZJS5jzDd9Mcr8kouv5DjnHYfpfXjDxGibxsoLWdZwH",
  "key28": "5xkTZQoSZLkMCTq8w1ByAEg1GnKsqutfz5u3gzNgojpv8V86oJccEVdmPAgZyd8twVQjbrZQmmnutLKZjg1ZJQx1",
  "key29": "2LqUX6y3QeWg7aLabvzHRhM5mefjKf764TeUbYVW6oPorfJ3xi9aV1Pjys3EKaK6CCK3XYvPk4rZ2ApBfBYHYX59",
  "key30": "2ycLcBVmUVeKk6vB48vE4BdjKNt3zSEmnrqgqtcRgrWPxMy24f5pCEhHGV8NmkJLHz1HZv4ZWmr7Y1BPD5CC6p74"
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
