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
    "2X6G3mgBFJBAkkjUxsKEyMUrAJenAM9esYB5RjKij3zKUiEUYGEvx4tQiBzmrF9xSERcGM71T3ARqXHgJNUBCSuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsUxzWiPYZSCDWTN58G7Fv1Mw2HLupiveKci5gwAse8mpPKo4jzoV9r8gFZVpr26mEGnJnwh7tiGGDbQo7dj9EY",
  "key1": "32v9QMcEB8ubmSiw2AD6rUqw1NgnBoARFqD5hTQ2aBdGi3Vq4hxEX8MmTiEfzNB7cH9R7TpkywjAPBRj3aizvo2f",
  "key2": "daYjrSxumsfkP1VYexxpA2m5vsELT1kvYhSg96jUmRtb37GH9arRHR1zv6dZbx3TeaWN5qoVaJ3YsChkARNv8Rv",
  "key3": "5XQXpqoDoyd8skrt3zZpWY387G4qvPU4jZrMSgNudsBUUEWvX6qV5xkx1ohQJjGDmkNKhtHn2MF5H1jYCaEovaeK",
  "key4": "NcDrXL7T9E7drUsqZZ43gMwD6U5jaWBoUroBKCyxXGrZCVu3kJWoksLhkqypRmvEAXLv1DZnGEvczsbsTXoggc3",
  "key5": "2EhioeXxhdgR7m381FgwhGd6Rx2rHyqY7sqFGAng5DtsjwQXk5zWzonr113WiaNTDGPwWBHEGUuBh8Xi5DyCMa37",
  "key6": "rp5ZsUt4by5FaSmdibP16hahPFbk3iQ9ivJFjdzf6XSmEyi3YFjHDy3646sjoydMvExquvPGcpW3GGUGcthSYp6",
  "key7": "KY4HSuYkSCGGavwR1VDzPc5dm1EDvGL4HPew17zvmPm1zqQQCKNnCEGUkn8dngeYFC6K3NMSK1jQQtJPWZjrnNf",
  "key8": "4QtGh5n2dSCCiESEd7Vo1aRPSng8aYbbnEZ15wCGhcFweSro5v2oRmenq2N52XzaKZexUCom8nKFdspizbZx3KsW",
  "key9": "4QNjEoTyrTJQWhd91CSjpDcbT7ptd62DqgG57XGS3zrsWW9Snw6SeszMDzk981MpaeTdr3FJoNunuVrijLTrZZMt",
  "key10": "nopDopFEiZiLfLfw9tWBYwN9ByAUfVaxQWvDogPY1LFFv9kXT1jZVcu8HXZtUo54roX6tv88TEtC5W4QU5ykKFL",
  "key11": "k8rsGwat23qiBFm4KARtqB3vaZewjFWt3ArgPYRf99VvhTV7FFunKXFuFpwDdaqmT6HhQKin79ANzDeUM2PxDup",
  "key12": "4h4mce3Wmxy1WAMxaU2vE5pP5WbynbhbH75BjkuBAD4wi71dwGuA5pWfUsieREjZ6WZ3YZHpGNacahczmTdPkYyz",
  "key13": "258YerRMpV7cA85kLvHtzXrA7DBeRNR8eBu5hihv7L3tcZUKvxkuDqd6jVA7PG2KjYKpHKFXPPHp1zPmY6UxGpsz",
  "key14": "6LWghQQxUGUnsEZYV56mfBFfqw4tFHuqGN1ykY9ahH9ZEqyVJUDgLDVP6ZE4Pfm8ppNyxV4w6oqFYF2NQUGjRRC",
  "key15": "KdeLQmdUJcJTjmguavhboW8mwNS5qmzVSMo23gLNhgeJrirSDinozcNkDuejaT6eAExy3CrdK7ZiFCBnxBCU8AF",
  "key16": "5LxRfXZVKRZhjXVGii9qpbUPBRTWEjXMcY3SZT7jGMXCMfgqAmh19SKaL5Z4HEjxeCZeWPeNoRkD5wLtg41uitEx",
  "key17": "4LZ6zC9jvCzyVrqfMF1vN7CtdG99NJnJ6Wqdk49cDMoQ4XfdVo7M3T56zYf4jALGh1aWdq8AskDtFKN8ZootgRag",
  "key18": "525DmKYwa6hsVNYM4AyQ2c99u2RpMLDyeQAmb8DMJFqAmnuUFsBCbdFds395FLLeNmr2JoZFDP7KHCDZesz81vbm",
  "key19": "2RkhKtRyQt9NyL24CphfsEmztkPgcvaF4Cxkg1czB3ebbDFYFV56a61ZqjpWXi389tfd5bYRotDdZRKRNfkJYLNM",
  "key20": "3BRGCZ3ucEfUySRmdDqGyGcmpD9PPBSr43gFddMUnbXKgAbAsTxeseUPzi8HnRXEj2HhDVbUYtpRGLZs3Xkr12HE",
  "key21": "3TjyRsjP8oKWNdRiTJ4TNGX4XaruNBU4mbkEq3wdEPHP9Ven21zdddhCxhgbwN1XttL4mZiZLgeYLnmjVypU7iTY",
  "key22": "5yszRcPs89ZHZpJaxMfkC9EHCN7WZxK7mVSPFuZDyoLMMPiqQmv796zchVLktF4kaz8d1kjJkvQTU76fjW9ay2o3",
  "key23": "5WAnhb8fbEqUoHcZdWbkBnvqiDyzwyi1cLtaZrAG5UfWxvmo39zwyk2QYTPzKAnJQTbkLd7oq62qkLDsL747hMeM",
  "key24": "4mhTXUf6xH4t3p7kvP2f57vfvkbEuNBA5PdaNSm1NQ1ovNfAMSvM4kMoL2Rxus95zdt1i9S5EjXZXZy6obhqTgPq",
  "key25": "2sRLgpzeKGhiZn4RAZTMnjDNy2rSi8hjTEdM6DJUjQ3wJQYi64c9gL5EbVmm9jB77z8Jmt4x7DfMQH98B7UzEHbN",
  "key26": "2a4s2ugqDRwpDgSYTn7aRNxSDSzz8msV2pnZqkaMHMaRi9FEZ3wEesQRV4NUjT8eqjYVmzwJFdGDQhHsNoQNZpxA",
  "key27": "3664u6uR6Zbwm7SEUfoSarAyAEC64oGAsRDFAgNsSGNxEGqfhr1djHkGsv28TyrU1SLdBWYAa3BDjyeQXZrkSSgW",
  "key28": "2YCupT6UQ58MGrkW9GGuzCnKbwGRieTNiYVG92JaksHT1k6F4RD7Wr3SQARgxds9ke7bGp6WFWRLSovixvTFEYuq",
  "key29": "4W2y2b1YJsEfR5ZRxsPm8RFVju4w1zfXrvJiBKoAqDdXP6LCa9infC9osJdVDuZ8zS1JptCZw7TZnbVniheBZqf8",
  "key30": "3BpL8CtXiUbZAZfqa6N3M8yVbS8x17ZLKN4s1AAbeKSLcXdMAr75n8b7MfqWnVeXWev8KhT4Q2r1Q6gZ2bySmFcU",
  "key31": "4nRf5dkyvXqsG7HyR6QL5YCf9bXfB2ae2JfyraxGers9VRU6PJ6Qe7hU2wF2RdFD5e8unpz8AHkiRLfM21FgvPWA",
  "key32": "411kWzar7orvpccZifn9Kqa3ipFq8fZZQVbqL5mJ6bBniAWyzHdPBV7UHjYxa2xeo8GDR21v1CuPdbMbrDiFTSyt"
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
