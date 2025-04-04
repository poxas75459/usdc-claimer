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
    "vHZCqWs22woQPdEJgBBeMqdALKkhU1HQZUvuCqbxxfMCzteRBy8TeCRpf88evD6SRkFqsEkAzvHF2mSAQHsGw87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f6hpR3kfdXnpN5sxxeQJQsvWpb8VQ4LQrjY7xXfjBX5otGeY7eCXCDDji5puCCyJFwbU7ts7zFSBQL2a15hUEpG",
  "key1": "LBiRLB1qP3aM9vaeDAFqrXZcadHqQGsLAdJey73zwLCTTsn6ySdC5YRGSTJLaqMAgRk4yWEmM2S5psmcmjzpTCW",
  "key2": "4puvu9rgXbeC7URWSugFBBPQ9ZBKEpTMjUNoz1XPpvqgJRZMrZ8GeFZiKdVZm3f5vxT5aKV3qEVVgqYEimEk7tQL",
  "key3": "51XoNhnt6GE2vvFVw32E76W9b1QBzr7rcZnSyCoBXvXuE7pdVVpYmSrXNhQXSmc8nUGHqE6gETvkxPtnBCvcFcNd",
  "key4": "3FdpGk4mJ4pHQ4JwWitBo9B85oZgYroyoBSGasy88mdyP5d8ee3ApeFpiiP5UfWMX3rtbVbqRmxNeumQ8JSyFyaY",
  "key5": "591ZGU1ZHQVeSqYb4nhnfqMMzVUXHvrNKeP3A2uM9FKMccqb9ibsnYvXGqvjLEFrKB9D1cLK3NaprpVdqFT3bAPr",
  "key6": "faFA9VZTCbf6eiv7NaJVT8pBizuwRFvHgVkmyRQk8G3ePXy2gAnDNNuxgQoA8GgyzA4PHFTosaj6gCuABZYE1mw",
  "key7": "2UxVfmwizTyyhifYiVH85c6KpE8faDport68U1b24xgq9GXA4N8mny57zKREnypqxc6D3sTGSniBqXmyo1B6qcQk",
  "key8": "4QncYQoxmPpaGq7wLRkwqm3J1ZRDdjG3gCmeDRaDuQSBRbRJjDvhJkSh8CtTRXydkTfEZrZf4TDKvqPPMz9QDF3F",
  "key9": "35fxVt4GdC2bLu2mDqC8GNxBpi14myX2GY6Liqef1Vd4raer9bF2CHo5P5TceLNxwSx9xQUk8SKrSj4Mz3tqvCRs",
  "key10": "4g316T3iA4H2ck8wufFcj4x4m1fjnD4TJHLHMzGThDiB5jLNjihDMoezJiyAgmCJwAHBrhUMz6EJtYUeuyRfarEJ",
  "key11": "NaJALcKvjG4DwKzprzEbtr5K7xfjCpHdwLWELHN8ZZ5BabBUzLTCLAoJt44usprTHw5LDFDdSr5536Zibcs73aj",
  "key12": "4r9xCDqCxMJF4iMQfVvVBD8Hy2V5f2Kwuz7f5szqA7P8mqnJiBccGmKNGk7iGQxahiJWkj3Cf9hEjGpXesdJmkWW",
  "key13": "4zJDGekzKhs7jKqEfF1dstw8wTgBdrEhrVY23jW3Nhh736BG33CSRDWK2xncR1aTJ35nKrfzUzRAUvfvchga15An",
  "key14": "3q5vZyUqiaeKrQQeyu17RyjBpq3gr6RbnVnini8iANdDrbJm73wWiFi8zDVx3udE245nE7AxGLRC6LLjJ1wALvvu",
  "key15": "8BM3weeg949Z6r97fhwgjugXX6Zucaq7Ehuizk17v9o1aN6zRpC7X5nYGA1JVU9V5MapMaor53Ee4fowmSpJXKF",
  "key16": "3YixaDVLYCXpgEMzYddm87hC5NukSvnubqauNnbkjRj95bFrduQr13Y6uS2ws1QaGKiJJnFx4mpQVFoiqUqPY6hk",
  "key17": "4HJJ79DLUzuPGvZEGbXGL9TuAxzuD8nnCdLgVLXRQja4EQbPs8k82fQUSpe8H4imYSQDufm9F9axjcGX2fRqYL81",
  "key18": "YDV5MbifeQ3y4jng3jSVRhJFx3MmToT4PhEfWZ8LyE7LCJsraAggrzjqMbFyVXrKrN9mxrrVRHdoYDjS8XwDsaq",
  "key19": "2WscT8C1Y2GEYf2qPaUeEWeDS6vHXZdWnnxkmxee418nMAntNdVHzi541KsehTeQCBsdmUQ37RCDoEiseTWDrHeq",
  "key20": "4sueSDHDs1Lj9JNchsn46tpN66NsD5tjvngsHB8dbP67iMbqwZgVLzdQxGH5d1EfbcAkdnHVLBpcf458GRZ4n3ZL",
  "key21": "XnzLbWUMnjC4iBtodQBvaNirkFR7W7VMjCAciwvk5nA7kryTEWMUra8CHhCSjFFoabDbRCDZim3PBDcewHDe5Gk",
  "key22": "2LSELndieDpJM7pXFCZGXo8SY6sYYVgdVDQopbcGsettWKJSDvAc1q6CpcmBygbckjpqT3vuzgSpAPtPKY5GdQev",
  "key23": "MYXto4BQhNQb3hCNpn22xFyTAqCr2mRNRpVZZ8eLQUECaVtab3z5Ls1ZsGNotfn8CEh6jaccbkotcy4BhGKe1bx",
  "key24": "3r1Ntj3FeiyhoKdT2oLg8Wmm98mrhsvWnf8m6JsRXiWAVP1SNfRaXwCMdxMfQqH8mwp6XC6T5fwivX11eMQ6uise",
  "key25": "5GWXVZaggkK76BcvP8z3Yr1yqLpvMYiCnXFeuaPUZV3swGrxNnhSYECGpTu6if3RwUHeshdpZPCDRnU3PdofXN1R",
  "key26": "3BuyGGvhmxoNmszbbpdfyzdNtj2cjAHsQAKfhodhjhVyhS1piGccxUTKDpktPvg1UC72Xj9dZPELgeZoppihitwC",
  "key27": "3ymeeG1tdFbMrebgNNdfaWNeZ8BfLPU72UVjBb2MdSiMdhHrx86PYuxRnnU1di9KWJPVCbUE76xXezKYAKnKhFxH",
  "key28": "nsaJkLyuFYn8WqYF3gDduXf1e1vFpxw4TKGyGVaPyxrj613YJR7SHCxU74RaQasFf737787Rcbh1kiHmHfeQP67",
  "key29": "4opqszdPT5z1jx7BQwjTwixPssNVPeMbH2U5WSS4oxRHfLrgWcd8zjGQAMPgxTY83i1NBLhWxQUgu8Ey6NjFhiCk",
  "key30": "4FRvnAP4MAEvLzirbcgaMcjjn3Pxp66khDUTMZEj8aMEKE2dQHZWuZi2Dr1Xdz7cyXz1E4YWhFsePMDn5DfEqRry",
  "key31": "3hjvAq47mVyg2PFZmyC2qHZkc9sfT7t3JeYx2u22vrqj8j4hHUr7AGW4Z8oxxNytMpYp7gVQ82BSYXbY7dv5HwA3",
  "key32": "3Dvh77FjDnZaLUyemKzjKQQ4BTPR9v9rGBqvEZ3pMzqHXgyWCtUt2cNRYVfxZkf8Gv91LNiw3mJX7SutYTgDJJnL",
  "key33": "5XfYvwbKvebrTUMBhi7tGT2ERBn874sE1gGbdQjfzrdNR4HwHPS1WezPgauueiQwvvfSohdzje41uDVAGh7VKbSu",
  "key34": "5zn8GaSUgMkWm8nyqxbFsc3McGLsencGgZNVnpeWjiKedEWXJDsTD98KEPFBRXGMXchjFuQhmxCAZm3NWqJGzv6a",
  "key35": "wogKdWvn5vKa6d8X3EEBdTmtV4XQxnWWj85zSQvU71yGezhie6ywDPdhYn6tNzKCw4Vosi6seYn4LWy1oiRCdtR",
  "key36": "dRX9dUq9g9gs4Toa2xUz4eNTrJM1HaS76Aw3tGCWVm13mJWAwTsWv3fAGvk5MMKZwVF3bHHWUkbZnoSHxnVF4FJ",
  "key37": "5KxXNxvtZAydEjDZTrR8GZze3T5nrqH8t5v6ueYrmhj8sBCHr47VpW7Tkhmwjnu76eA5Yc6XmHrnhXzqq4VBq8T",
  "key38": "21nrJHq8cTDcoG4eLcBUHkpTAGeXs82TMq3LVtzc1KWyuWb47dfDJSBXdZ7j6fet9PScUpPA4WmF73vZutNGp2Jj",
  "key39": "5XFUWShg9by7D5QLdA5mwaPqb6gV4N8kwqPFynNuS6LW5JR7cekbDbVoJjqEQAVBtgesCfFgv87fY2J5FEHDVh9w",
  "key40": "3BnFG45J21uj95ibTwKSxeKdWsTMcK9aNfJF1C9p3rXHUcXFTFihCvEAN1i9BuGSqHwLpgCv2K5BuPErfnyeqnYN",
  "key41": "3YKb4BWbVyeqT7zZz4Cw24pzxmxmaa26ReqcUmFtsoWgLRrizRu6BJ9GsZZ5yZYEEsm3GUUHoRwVMT1hFHPzet15",
  "key42": "3xzwZuxfTQLs7KXh6mPsptQYxRXMTrMDVR1QNTPARyE6kWKw7YB6ct8bFDDxAeMuUQTufYKUCNLm5g4FKD9BNmTP",
  "key43": "58RHhvZXEJp5DY2unXykAGWzNKC5UiKfzLDaBCSX1sVPtLGzJCeJfAbnfRpPcVNtwbxWr6GUSWoc4PDfxy7MJRRg",
  "key44": "5mKpyvAirNPaiwmXqNcDENLTncJdXqYcCWyu5s93Kw8Bst54fEv9b8jTNkJCxynn96S7nkF8QvyMgYKVJvKSKZdv",
  "key45": "3TTK1njqysNSJ7tj68DKzR4dB5MqKqToB6sr8fFx6yVQmP8xuofqzboUbhMpt7Czz6nbUXcYVdq3s5uRm3huim7i",
  "key46": "5MUHtecWXmRJZbzPTAHAFehrDhuajKQfX6zX6RpMBhKAGzJ3524vpUa43QFH5kAwkJ8dTkLp22fow63oYuwiT4Nx",
  "key47": "5rd3o7i8CwPjFqRjgMK3kkFeTX9Jaai2Nk9T4Exkb69T6ySYzRESrxs81FQg1wRyMfXtxNzHJ5SnPPWa8RTyuEiX",
  "key48": "XpnkSnt85w1ie9WUR67RKWpBSyK45bRwtaaYGq3cWemHfNbCixYWaPif11QWMD9FWFb3yVWXg39j7QF1juRA1kT"
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
