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
    "4AWU2bp9xYtqHxnTLZdgfdd9f3vKva6yNtdCchkoCnXaJ3ffL7Eq6i92XjDr1nUd8xjSjhGm6PaHPv1PjpxMt8L9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41STn9i8qeQcREfeJuPpZWDYfhS9xyezeAvtccBPGhJB7ZBSPi5Ua25AF1UgQYeYNH9pJ4gsD4xgPTmQQSs32oud",
  "key1": "Rn7XegV8A4eUhq398xfHhY96uT8Z37N3DiWftFqvpzqzzeD8217pvSeYnYPRXeeFab4XcP5XxRgBrXNt8VG2Gkz",
  "key2": "3xpEGasirwjB3VXAM9tS5rifHCXWNsbp8jDEimdmbEo8Qibip4zVSzSuFdCMRBqYhMmeVvdRo6evLoBe2mSCwGFW",
  "key3": "2j8zKMqbLvfFEkasJFRYWJwkumiVUaYEoe5zrg244Tyg5SGTreojZ18SQ2TDr2QUV8qq9gANR4vP9yLkDk1z7bz7",
  "key4": "7XaSSC9kpM7yHQjMMFEUUtWqyLB5NTzJRXcCBuPMEtjta3anR4KacVKUpR3pd1HKpgFkBxAkMLaTAuDogcbXABd",
  "key5": "3iytdpQDzC5wD9Q5xdWY84WnVUMf4TvGs4Eb1NwuJ87Fq3tyTAsixqCznWEG3NyezbPFcFuczV6M3cWJa9P4NzB8",
  "key6": "2L7DhWA1gkpWRaF8SXqVawT7N6BL8NeamKHrzac5AgAmxZsPgnGXXw1rAQzxY9uXSMaC8FadjFkTogMbAnx5YFoe",
  "key7": "4WjC9vQna3ypNFrPuWZgGmDnkfPvn9W9tPf5NniFMwfhP1KQbqDptquGmiAxguMeVjzfAevafwmdj1qjFrEcyNd6",
  "key8": "4oBrjvV7CLW4chxqrqb4jpifivPjobHRSAHcRjhf32JEKjkPs8dtpRvgjUeYNiMraZ7b1LWDayxEzgf4aAeTtUWL",
  "key9": "KRrB17afmYvjzPv3uovCaProb4TaAfoA3QV5A8fDe6vtsBfmwvwqtBidyrBWqVEkoMD2uN1NsSSfPDpn9b8VLdD",
  "key10": "4WnFG5KWwbU2cm6eQ5gUkHPPisxTn1c26HP81b1mJnziRaWBJPnpjtCFcCyovy2QnfGD4NUwu67QcyyTRNYLgUhY",
  "key11": "2FwVo9PjV4Wz2mzZXZEzYBna7mrGkQizewYx2MqyBAhRX1Us2vhDpD8haBQM6XNr8ogJpfEs8Pjcp5r3nXQBUadz",
  "key12": "2M8sXZheQw8kdHT9CMoPSots79ugxsDYjEc4ukoB6eGU3zm9zoHcStBzGjjkuYabzNzpqbQcAMsWKdzGyz3KriDP",
  "key13": "5wwzrZ5dewRrzDydAfAofmYudCRqZ7DPGnu3qUDVB2S7URCAZC1QN8oTX6pdAeye6LprMu6euvMikdNqMnWDPy6Y",
  "key14": "494VT2xtVbCeyyamkcXNZQqpCUh3HeTZrsjBy777xXY9xUMZBhZku4ubEkDzyTRyssdmJN1nmjRdDfMXodjc7ewu",
  "key15": "5SK3F2yCJfc54swz5GWn7YdhUKgdgjSRevm4szeyeqVGotFQEQtGrb2drgywRPqSSrYGmwH3f1NMa9iwnJgVyQS",
  "key16": "3gCHv3ZbsakJGeCenrYxuoAdWMRCJVuup23aqcSrSYAuMLocHfUmiT7hkhxiD1JDHjELtcTSDLcJQ8ejdHDv27YY",
  "key17": "4robv6rERPtB41CdJE4tWjAK3mMne17rLTXGCJuDVhyM5tJDFm7nKvyckPjXHKoYnE1zU8TZQuxNoA2R8ibNjQTn",
  "key18": "5n7fe2ppcNTJJxYqCZAveCwv8p7Yy1FDucArBqynnSnp9n36zwLGgM9pDKxP4RX9XUbkeWmzZz2H5ursHFfREeDN",
  "key19": "ravvJuJKyaaZ3aR9GuAQQejUfmS5mQLumKvQnSyY3YKdMFnA4Dhirn4tp3yuNRnHLGb8zvcBJtjek57pjD3YGYn",
  "key20": "4aJ5d4Kz9ytbWhYzZXufVHxDti8AQTtoarGTGdMYXPZDMBez3Cf3TjcdxRtsWPgELtN1w9yY9wq1cKaktKBuCcKL",
  "key21": "2eaUcBXKrvFWgL4grXs3ci23uv6fLC4DQqg1ecaZAVGqFQzS9o1RjWxEmmbqNyPhwjNveb1mVcQ5SqYaxRV9xpo7",
  "key22": "3pBFTfYbJ4d37RLwoQch8aJy2AS8XMwfokj4oR42cATrXhmTjSPGs6jJq5YaGWw9qHJ4Uf1fj4Pj8oJELZ8ohbKu",
  "key23": "2Cf3yR7k3stLyyeHThm5L9NDZdHHMhTexkF6DRJXm39SRxXDo61AY4to31ZYkEfRpVCMF8znCV7QShG9kFHa5Nk2",
  "key24": "5ukrriLVcW2XsUrh29ZT7qi2DNVWQyPduroVVMx1pxWSi5TK5pBNX1TGwyJhmhryzK8TEjMJT3egaKCGtHeAmMoZ",
  "key25": "3BUizh838pMKygsfsCJZXZZQjbLmDW3SFWJtfP9i5xUcV5VaMLjJP2Y8ioKmFxMnJkA1k5DMTXRfcVNXqqMdV61M",
  "key26": "5bVhCh2W8VUWQsE5hrBJ5P8LVEzQi5yg5Ly8LNpr3SVaN4FfUcMBPNqtV2CLqegTUgHWZiBV5Kja1QsibpfToSJA",
  "key27": "2iRq7KNXcTQFeCm2grzsV4YDUHfjrpoHXvs5AkKS8z2FfqAqD3hBm6xqP2qZDC2srx6zV3jvGYgmmf8EJ3AJLRSK",
  "key28": "4YyB1pzM7HHWRFAXZ3LYUtDXksjKHHEV2m84aQ9qA4QrNU1EwDr5mK5KPivTPzQrfJUjmb3EhC4hsMjY9oqRWzNz",
  "key29": "4GkSE3x6XyDQcir2MRoLZ9LbuBqw7F9CpFW4xkziUrynk9TU91N6F1NoL8wCM2fCguWQDn5kdxHCWsM2oDnTi1SM",
  "key30": "BJbtf8ETE9vZVYuvfwatkVXDKAHb2Jkb1z1xwbusxCYqErLaaqFDA2PKgS17oPuZbworUGbHnf74L54Co44kW5K",
  "key31": "61j8qpesWuCzsD41HwLdDuYJMJMYHGEWBBytviR1NJePAaPhhJMvpNevaoeh5mhnsa5wQuFRhheFZaVH9NkdqUs3",
  "key32": "3GaPKeVLcZ6sgV37KXP4WURofmX1bHiBfDnDAJ5AzEN7cfnBZ3mEkyLAYoeNXw4ow6v3iWixZ67i2envGSY3CTMB",
  "key33": "5bmsLNiHqwxfaMguCbEmMwZZSW8a7axhzbc2KWsGxVnZFAWt2bWA5UDsKzzyZXZbo7vGt6s8WdZKXSsGtsjGuEN5",
  "key34": "5TrDeBQ7xQF8y2PWC3yzCpQ7mKtzrMKB7Y4fh9H6JXHC8dz6nc7bS3Q3iCVecCVb42L6kRJS4QFH7FMWVKAkA4wZ",
  "key35": "eCiw7gXskFFZC4ijTW5Ga1kETJ1QKiv7ZtkDntb2hNwZJML4BaKnvyL5X3MmBtzdE3f1Vk1vCvBkdMRWV8LBAud",
  "key36": "3YrMnE3fh94KJKyPz3Xd5QxdgJXeRQLkGzzyYeoCFRXR84AgK9Lg5iEkaVBqUsUucP3X8eDqWUQ9kFVFZ1B1WuTz",
  "key37": "4na21dKEZV7GcE62gifxCkP3js7kw28RoWToDFMoP8uctyp5VUMKYLa25MJofQeRwdXEbPyVG2Pw5Bu7U1vRXQxD",
  "key38": "pbK5gagyzKw7ARzYwJqWeDv517GLrRmdnytJKf1z65HQo6JLpQkn7w7Z6mc764QzhSHNRPN6pDq8JStnjNVoCE4",
  "key39": "5ELLniYq62VRkUDATVXTfD8QNRLWyRV6kp1piEZ2etV9d1ViRHYMydQ7QZwUeXgGDU6zph8TYWY38EWnRcg78uZ6",
  "key40": "5t7tTL3mu6fPretYyq5NQSw78VN8kYcsSNbuhZ7Uhi7HRkYdfK3YwActuDCcegZvDFg9duRDJ4NoTcbhZFic44Dz",
  "key41": "gXG6228BPdccUzrskgXnvx3dEfnLNbvC6u1nnWSxpWsS75DZeLH23n14FyNoNuCVFH3JjdyGko1hb2WXmvsNxoU",
  "key42": "4PaTQbM8Q5NKtCTF7QNzAwBgmSHfmAvMUG2jS9kgVoDCrhXUw4Y3C3T7wGG7MMu62dnG6PKjZcEYECTa4Vibeo2m"
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
