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
    "63QgsVjRHFaRs83gfAu17UFpxsSMA4XREdT4qVAWbutf9SupASoMNZvaMjQuDLJDdjUz3nQQ9Qr7T7Fn3s32XCVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iKRpw9AbFnsMXPcnqukdfeaz4eMrJ4SzAoZviXfyuzMa1pM2QgYXzXP2bLd8Ke9L53m2D3imiRCFAvZBTa1gVv8",
  "key1": "5FuDdenST1FJwGEQLG7JUan27V8FrcHEnxcd2JQGApxFaTaS1wS18iHjMmSZYYyKbJWvXGxxp3MHeMCE2atBb7Ri",
  "key2": "5bKghLFR7tUMGyMWwvo99k1FsXiXz1TNRCZ2m7qpM85uAZgoMGtWCdHVaro3pXdGDyB3bRgouDLeZnBSU1mQHEVN",
  "key3": "2467CZzpmy6rSbYfquWNHJr3V8TGLMq3P7LM1Uj6yDKbLwiVAaaxmUzzDw3mpVGxCoo2iyV9buvQzmR5gmuoqaxN",
  "key4": "3xrk7HjNd6Nvk3dSikzGLgcDkL5N7rmAWmDpLr1V5zuWWNKtainaYJXYUzuSdCreecr3GDDCwQbU6134vaxginA3",
  "key5": "5ZLXpDdU2xnYC1UHMbUkFSRCSywzFgNdq8BdzzBtAf5QJyTihekQUDQiWkoxMYHuU34gnBmTxbeFhom2M7dzGga7",
  "key6": "KESSNYfP38LoWrZrs9abVcBH8VH5SEbxvTyq6Hk1jhAmAQMJuAMq2J7CT3b7krQnrAXP3NoidJDEiTVtFvH1sHh",
  "key7": "3e3R6HjEpR52MjsGdrcCNuAmFheqV8EAHeC6BGN2uKFzeNWaGv2gkiQ96r3AQwZf2pBKW898qvfordWVj15fvhFH",
  "key8": "54fvFpRTZhDhWqW3SCstkaMbrCJmAhzqk24BipGagD28Dzct3QVBbyih3EdPPJrNpAc5U5dQ1Lz6jeWtCpXQh9Yc",
  "key9": "kdxntjRUoSR3txjwUgTHPS8BcMq6iNoRDJADWuouf2NnMrGC2qZ49B3b9ajNfdKytPBQLmz1d6fYdUdM16UcWPU",
  "key10": "3PGsbzGeNcWeyCi1nvavUg4NN8pcCe6pSqjFUyWM7Rx2g8rPPYyUa4MQ1H3mANPDBGeTsgcKmT8aoKgatgTYWZ76",
  "key11": "Npbnipqiwerx9c73LyGNvPG4sMLXTK6VpfUAiVn5ztrNa3Z7S1tczWacj4Mx6dtmzg8n4HjWbriTnAFskipkYnn",
  "key12": "2M1vnHKcYbFoAkiysQ26B1wTEagzdz4ziCWnroCpXeVpVPHG9v2Trn14QLDb69X9sqhJLubxAcVzpQbk4gVbW2Ly",
  "key13": "TXqbBjowcy6gbwk7usNUKNbNzNmaLRL7XXuLjYZ3xy5QRVy6E1cM1QtVHhhmtkV34mzT9mR2ffXi9w2yK6tV8Dq",
  "key14": "4SPQh3beMmAvFUyC2t6McC9fFzL4UNwfgXW2Zp8qNuxp3Tq5zfBu2TdYBfZoykmhLcEcz8UnzzVADHpte3b4MbxA",
  "key15": "4UUXy3Y3DfVT5pP8YcyTt99EG5roe567tRouu7JKGBKTXB4QGfao4smwU9k1PWWdLzLqCqAMQ9DWSqaDmXPZ228p",
  "key16": "2ixUmu3mskBYKyjFzv6St9t4HQsFjybqA6HRgwmDNT1LhSJBptzbqKSe4fU72U8Jz5GTpVVGoayBSAMGKc68ai5B",
  "key17": "yxyyVfQxW4UP9L3i75Jk8pWFo3tR9EH2kgWuZsgGMtbPadAvAq8DzxF22wDW5B86B6FiLESjsQfF6Dq7pQqr1ju",
  "key18": "Ttm8aVQL62qFhL6R3jws5GF4SbGAWW5G12DBXPtXD1RFu7L7ZFBbHaiW8ymrnf9KHo4fj8EYtWFZfdz8y5pi79P",
  "key19": "5EYGxADoiQvEUZs5guwnxovjMPifGAr7UdRyK4DvkLjU69BiCgTgV27ygaaAJ1i9MEoDcE8NXE3j4mPsLv3Lfo2h",
  "key20": "3EdeARr1aRcaLtUvmbxruS2wA3v99Jq6hqw635nY3e9b67wwL75QikxJjNAxhfY4FmfcaxfV8TLTwao1rRPDF518",
  "key21": "65e8KXESPZJ7ohRdEBBgWKEUdTvZCDybr9Eq3U5L34fHwyTEmPB9ZgpR7CEUWteMJW6ni2EjMvvynUscL9MYBUDc",
  "key22": "4MFS2HunCqJ87WFrHg7pZtqxndg66HGxQPFSR44BexJaJgSE6ZvoZdX9b8BywvZnzzGLXKQKEmqLkuErQYuFzyf1",
  "key23": "3Zq5SoC9GUzeLciKbbazdSMJuM8qLBfhCLJgTMwgDTmXQhsVbgkJTTDEKYFCbuaMgKHTe2o7zkYx9zR8r8WVtCnB",
  "key24": "UkhzaYJ17zzXBzyNNoy8UzCaVykYt3nAhEYj44EkfPDJADaHkmurqpouQwuMgi4x2KAv1bUEvMWi4aETMJkwgyA",
  "key25": "UEcbPwy337Cn4YPqPBtyk1n4MJ3Mdx6Edn2ZAf9cxFhgKmBALw4PU2Zq8dC8br5oSxF1WccTA3WXoroA7bB5Nc6",
  "key26": "5kw9482NCHg6ocT3gJP4spYaoQjSP2eQ2vgLPCn47ZZ8Y3q7yokuJDNafxiohbmzb8tQgADYnKXChHsfzfveyVcM",
  "key27": "3r1wz9q14fhGEYJhh4RiUBzy1MLM7UWNBT2haW95aHvwy9yV8TibZKc9SkhB4CRgCep784U5w6x3RBNBMFD9sLNw",
  "key28": "5yMreSbKjLg5WtLtUS5qW3U1mRtKQ4mxwVhx1JGL4tfmZAgeyq53D4AnyJk2WP93GS681HMroTWiHafpnPXpa1B",
  "key29": "3UjE5hN9XEcXQNrFx19gzQpkbVPKR83zCEEqeBJ8v41k3f4Y1z73JQ3squwXAqr5LcjciTuJagyZWNn55cGY6NYs",
  "key30": "2B5VjkFuCNR4q4v9cLKTmDeyCFNh7vyBpPPBavUXK76CHtCDybFB3i9juA1e3eEXUw34KQhuCzc1t5tppB3CUcB2",
  "key31": "3QmVZVXTDw5uNM5UUyzPUqJa1F5hm53WT3MAXLiNChjSAhBN9iFnbdkfEP3cEK9f8mBEcCsvN1wZCrho873dyh63",
  "key32": "2wNjM8p92fBKRaEJNcUNCkkRuREDzL3A4WqW1KidKBKNBPZGcE8Rktf3fokkgnMGfzhsKx3WRCvLjqfr14SEiQQD",
  "key33": "2U8CC7bFaNKak53Z3wuaGZdDYzztUbko4zfYFYQZev1kUyDcj7QzxK6QeUntKC4rBpNQwgaWcCoXwF8rjsK46E89",
  "key34": "4kp4QT9MNtYxswRN35Ac9f7gqppzFR2Rzd9nqhoDJmdHhoKxutVzswVq7Awsc67HKBsc6o7U1WDxHFjsgQ2RZ6rD",
  "key35": "5UTUTz24FTfmHxM1caNa1LvpifeLc3etA8Tu2DCgAYRk3UpVR6MSHTkQZG7H7n8KvrCfbt21EgrmW5DeEQjQ1H3C",
  "key36": "aKM8EtybZQDpfrm7g3DebtpJsRkE25o2Dyp58PhvEGpKfyB7GFsbKXzAea8Uz8Rd5sVT6P2eye5RsDxNML4mGTT",
  "key37": "37sS8KnvXL6MysHYfQrbRboSRniXDs7mwQ17hnfQHmGSFNKZ9x6AkbXQ2KYJUEWMkPe7a2qfzTANmiuuHFUQLTE1",
  "key38": "5Yh5yNzzjjusvJ6KTWXCNG63dSiTnLkkvFK1qfwgjDLW8NKf6ytEQ2YQPwpyWpUiJVyWUhJbpqmUudyWiStLAu9e",
  "key39": "2bsaPhguujwoq3cdZVFSZ9Zv9RDv2mHUyKA5iw9Qi359ieZ4ujMMNRx3LCS7C5hdDvkbT5PnutaijZH32bLVqMa7",
  "key40": "21T9zffrcSEGpoeWqsCMEkqRBQZQPHW5BQ4wxVqm4MxzfDUazKkXuyxfA2GJvpLmdduKDoSbJRD1wdauQVyu4w8Q",
  "key41": "3AyxtRj2EQNw2hFNgNcSZr1woNyKL9bZ4JBeZ6tQdeTncyxJtgmmeGw4GUxaYxFXGyWNXJRV7Za8SwVoCTyob7RY",
  "key42": "4wuxvhWRuyUnQFa3gMjkLrHggRyefJkHWWCZ4g5sXQgJVMZgpPEPNt7vGNN3CoZyKhKPgiBF7vGbB2AHZYgSEww",
  "key43": "22gXXRDQRAxYmriV1pmE4bfM8QMANPDwkZJBppsjvEqy3WuTXRjehqLCSKtQbn1TqN2Z5Fhijx7YwhUH3eRunfsb",
  "key44": "3J4kv394kSqXHeLm3SAsxmFyFJpXkzf15XJHRR3a8a8k9FkXoBqjimwz6tPigFiKukoxRfcCyVbLfjQqzreMPnSa",
  "key45": "32qvv7FtFoaFaX3fnj1gQQjpYeaVWSPXDnVmmYhDvSGCF5hXRUW6cBSiE5kALTdBQzRaQuUdLUBbTRp3rLmbBGU",
  "key46": "4wu9jZBXdJy6ib4dqPNiKVw7TRR7zm5PJmhDnCK9ti7tsh2aeVwuepyCdgGveKbhEvRECbBbkauZF8sUfALTSLi9",
  "key47": "2G5jTRWqWfBMDwiTaRWvw72StwtDKija8mG8bxHAtFaY6aptqhQQ4aACEXHY2xATXLq7deLX8KXd6doQJhKBE1wa",
  "key48": "67SZdgsBk2yGNKn4bFHH7A24wBdtWXRbTXoyJJnrrfQY1EvUab48k6oMbcR3RMLiVLRDPE5QC3EySTHCSHkNLCKV",
  "key49": "4nw4FhWGsAu5zmSscf83QtXxSSt2L6CiWuYR9WzzRtowgQaofChzwQExbLWw3gF4Ray1YhXogLtN6E7EoiSF32Q2"
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
