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
    "5fPdqkhMo5iDpXUqDbncb3R5NdzMGxmF247DsqmgDQ2MHFye22FPXRdLur4cxAb8aPny1PuByjTi9GgrC8WStsN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbhesMRgS8q2ziQkmRwPCrKH2MrNSfPj8qHf9DZvU6tb9we8MLpoy8haKWzVbAnb2eBPYGYf8UtbnD2JZHWPkiA",
  "key1": "3qvnRBvyE8erN4kGQUFUmses5UCW9Qk4kuAZFQiUnXNfjsNvVJrbh3EB2sHXSYhdbzpWBiCcZw29p1yTaPqCooic",
  "key2": "HWGBHEtaMhY6c3ceUya8mCQs13ZFzXczaUwER9RAVu8q2EuVvjdVoQYboejZa9S2KiUAnbPFCmBNeBZQ2SYJMpF",
  "key3": "5qqt8CuEGB41gJVf4iyZrFtDXf9ERVhmgAg7yAQNeqtMas2tHzUtpcH4aDk5r8jYRwbfasxCXeJ6ggrJRTdgvFaR",
  "key4": "215KFXUDgTqMRboL3MHHsZqAVCyjHhAzAyC1tCp7BasNBPDtJ4K8RboRhp2iS8Pan7EW7ota2bjYCV1tv5X4agrk",
  "key5": "5VbmizuVnagmVMEZDAgD1N6kgMCLVUhhCJZat5Fay4f2JhW83QvFZp7Ja2LtSGJs1f3kYi4WMHrE4UMdc1B5TTAn",
  "key6": "kLdvaNAGkG7bBZyEdPBBr4mBvDLnAn8Sm7K5fJB9YYWotNqqt3u7xa8txQmt6AjJjG7svZCCCbY6Pao3KuxCrtr",
  "key7": "2d1XjHfNN88VzG2tsZmvZX4vH2eAB5imhR2gvXmS1rjWHv2mWspBaU7p7aR5JYq4pkVzfScbYFckjE85imVSGtR3",
  "key8": "wd6iS8aXTNGVAZgk5SPT8zScGtS3Bd9BMWpHpJWN4KwaQpKrCP1qaVqXHLtUSs6LaGu2Mf6zyzxpWXs5Lu1F6nq",
  "key9": "24XXMmkj4Rr4kgTMYxQXY4Zg6eK1p1cRoWGzdG2ySdSLvBXWvaCBRZh9fYpDM96rQmJ7aS5zkQn8upekoajyg3ic",
  "key10": "2mdFEi9dCurvug7FCWkiiFUDQSSsWR4PYZNerArddrW4eDq2iDabRWvvPsgfwWUdKx2ikYdNwrzbgW41gEM2WoKq",
  "key11": "2jmtgYhBWyA4NKZPEqgw5eC5AguxoDpapnE4T7gK3J4iJSJaVtPH9eYGBrrvkqJssAgmW4dPEey2zy1Rya7vz7yL",
  "key12": "56ZEeVnz6cbykxd4KD9UWKrxC76zX8DV7Af3TawAhq27mhqPHfZKioz9uECQ3cT2z4aWxWS3TvNScJNG2xWcKKvX",
  "key13": "3DztCMCeQRw5XVTPjFhy5NFNcDBHEagVRXCB3vUorVFqTZviBgGxzkUvPo9FeF72swvWpEwrVGTby7rDjT7FoMHQ",
  "key14": "4xPXub1b5vM2TboMJSgw2W27ySGgZu1zLDEfJE6tXmo8H4dK8KYhYKnAemTsqaxvzaZ31hYPtRzRXXauPa55xhkL",
  "key15": "5a2g1nvt8qASnq7DfPHvJCCpog7wEV4p5PrchJzr3xRAxqF6R8KnJUDYzyHpMvJojGDzrMZhwnJrfb2j42roZMXj",
  "key16": "v272RhKikQNjBgZ5a8nkf2YfpngHccaw5Q5zkG5m8mRSzYkKHz94M537Wt6rQ5bADvYp3KujdtkCktELU4YzFx4",
  "key17": "3wqbbdo7qfH3YW569yEXEuSLuhgraEsQCywsZekvhhLRrmMohbKAhzuRf3aegKEGZHhXxfubWh8VhP1nttkLCwjW",
  "key18": "5hZ2ub1Nn6dJCz6wNJWFzztPacDBRHBgd85nyUxR4oDD5kHY3uxUTfS3mx4VGu7gTYGAxJcTFXUrLSRxPDZdpkHW",
  "key19": "3VmZD9vTziGhtnFd7WHbvEnYYixaH8XBiLe2fWDSxLcyBsdS6LAypqymWEni9kvnckH91aaH9rn2CtmCAzpQedNH",
  "key20": "24QeW6KKkPuJ9cKEbic6FNLoBoEYFVhTD3d7adx4CfnBQzovq7yktkF2Q9PNJb99erhmPbXkZfAFLmqpzW3voU5Q",
  "key21": "4oqu2cubmwDEH5MtXMaFexXtadcWoBsaa5XNQwDZaKYFHfqj1CSiMtEmy6Zqf1jdVmSh7HKTNLEjv4ZDsV5rKVH2",
  "key22": "4i4pLsrSa6zupDKksoKftG7HtxvdMy5k9duTcAL7JsFpBshjXHcxtSnL4teDnka9CDxdTfvFYVTVG17kcf8BaEFx",
  "key23": "2ttp9Yvh4HpBK4dzaoJveEDAAHDCnSmDZ8uNUaEH2tCKhoyMHBBrBBPHXYurzSpHQDiG5pogLRinbGhevUe3oupC",
  "key24": "3N26HrahDHDvdaaLwnecG1RvQMPZucPufGxRtWrAfB5aEb1KS6bBsBHLi45LyScZHkDPQHN7sgykfhctFJpF75RG",
  "key25": "BhRiYebf3DucRwCsSMyBFGBXf5eFTyAD1mEgpWDhrbiymPcjVEQPW5AKmquMABu4HDrbqYaih4jBaGqdoT6pG51",
  "key26": "YLWbLocVyBaD1ALT91j2XQy8F8oi6dVouWjS2xvGr1TfSCx1PADETvegqayVFxDvqj4Gf74Ah4JvwJ7nG7w2GCu",
  "key27": "3bGCDTNaK4MvbjFj1QPpbi7HFXFS7wfgZxsBpXRgR5xDSrnTF5ZkyWfUGH981bd9VmvFGRDmWaAqCJiBu7EqBxCc",
  "key28": "33u5wyv3Kudm7CwuPHaiQ53BbW2w4P1BLF7ATUxXdxisRFANGByq471zqBsmLkS838BAreR2NQX8y9Fkopqfgiro",
  "key29": "62A4VrXwTkb62dcLfRHw9u4qFcV93T2E1GMWLq81CdiDk763BXusb6NtkrZaJowagRfCJp1Yrgig6dUr8PqVstfP",
  "key30": "5x8Nkw4AAxBKv42bbZR7wD1F4YRfQmgSk5N9qGj1LoV3Sr5sckyi7vX8Mpgp66poRaP9MTahre5qrb3X775qsnZ4",
  "key31": "3Qe6T4D6YJ8x2xgetSMFscHrD8qwhjhUW6afQ1Fch5UCKKufBEB2sJLBsWcnr9k7gkY1SHJibbcaHxSMimeZxXhb",
  "key32": "5NpSQ2TncQnk2Jh7N2WSXu4MRCzuFUmVqQwoLfQ8r3EvogffpruCytnD4w9YLdSyTLngrkbRTLYRVB1Y6KHKFRDd",
  "key33": "3mBEhZoX4aToPmNg3JHytTE5zkPtRuVwvCAWwfJtzRhBHjadvVW5FeJyeyCJYKWio3y2E9g42ogKg5JZyMgV4BBM",
  "key34": "NuCqn27jYPpkKsjrGBrMs66YRWWqp2qoe6hL7smg5KYPDeJwX3ByoHpJ8YkTXaHL2n35VdQqPF56pHwf28M7Vv1",
  "key35": "uqbiwDmi9F9Qj2mHxRmMFZBRxH7hLYVn9MFjLm4q59fRqSPcNvmBxcrQtyt3jeYA4EZFeb2YLyDJwqL86TqsqWX",
  "key36": "24dqUYA2dBk8NQta5jnXutZSc1KprehyC3Th54PypSgv4AK4x7ymJuR1NNtEUwegXUHevV2szKdw53VJCdijM3GW",
  "key37": "qBGi5onTiGYdJy2WuSzmttMC5EFzfW2TiiQy3Eo9Ab6R4aohRSdsiEePBQVpDsor878PtMNZX44q1zvE2ejYZQR",
  "key38": "4RqJ4fRpSUvAeQqSL3xZB5YR8fXmnuaxdVba8bB4bu5vjQ6HJ55ee2MdTezDpYXq8TTet6EKA98H1gyGQdswMcuZ",
  "key39": "Fh19MbP8dUYEatqZ4aUyk9N7eUNnXf9k5rtuYsk5iwiGzD2a7j8UWB5FqHNUs2oLaqawKKZ5wrhjeqHEh9UZN5D",
  "key40": "4NABRZtD99RMNXS4MB4ARTTR2HtKUgcsPZ84jFHi3T9CAYkr1Pvw9Fa9jqJo2xTF71Z8yDPvRuw53LfJB4Xb3EFh",
  "key41": "x3Py6UWF49zKGym1fjv7vRE4X5nFuDaD26iDavTwQSp8KNvvBaZBwvtqUNfyfMaXTJzBDkbXa6Lxs9rf85zv4sA",
  "key42": "2XfXVtx5cpDjW8gj6N6DrXavV3RwyzC9zBE3onA1aFYLtAycsSpAxHY4asKq2k5VySxgKALvdNtjqMAAABy3L4g7",
  "key43": "5vqg9tusiFLJ8efaoaUshV4bR5j4FfaoZb66GAceWdcUfsoJWTfAkkBV3zGyzyZBowK6XMgBqJGMt2Gq9szaX53a",
  "key44": "3sZcS1CimN68Q6MHztzshpqfaGHZcCujYNg8AuipZ1MZcteAE9N3X9SYPM99S1E4Bhjhm2XTT5qberQ93kACKhJY",
  "key45": "3LpBULzCBZbD8eKGMLLhe6H9LJQwuriUuyfhEWMP27AwaSs6o6EcM58uHPqpxi4X5AFKwK9deDky6NEKyjCHRv3m",
  "key46": "3z5ajW5dcVtxxm4B4c8DLWX9XQ45bh5MDgMD7gHQftFnys5fGf3PMLDC9qmztCxF1pmC8nMhARXJriaiahYvJELr"
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
