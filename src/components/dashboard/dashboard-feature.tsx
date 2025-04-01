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
    "5R28K52fX177DkGdp6gkeyTbZoy1CsmFGDSJaD43y72F6zVCsq9po4AMmrxaupfuL41RHpj7mGWvmpp1Up2cpyeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGCez2oKsD5H7wzx968hiad59TvqddTTXX2bBZx4vxnw3x3YaSFcnhYhCG6nzYfq1Ncah45vzy8a2Nbozs37AnZ",
  "key1": "s2sA4iqyoqHnzVSn9KP37H51SVmMJzoUW8ZquHt8iTEos4j66cmpJ1YMz1BsKsUTthSexB7qZGJb83WAtSSmi56",
  "key2": "4bi2qNxNPfdwfb9RrVjhK1XtpPnYVFu6YE1d4EHLPyEuWuwFpsdpKqzkZQFvQbXE4NWrLzCikY3QPL2s1EDZ9gtR",
  "key3": "57THmAeR3ktJFBcioxKEaVY8NXfZJ8tbT6hZZLJ2SvSJGCXS19pZQoAkvRoMv6wFiSc4JFiFXho3XqZMrsmwD4q9",
  "key4": "y19HFNYa7oDmF1aYEgdjZuKRuGnL6w2hj89yD4XiEYBHLLV1Q9tsJvhdZKTRFjVbiRNtunqkTeTnFLxQiE1NfNx",
  "key5": "37gXZPEoxxt4AXFZH7aYZWRuTjvNkYcwTLRBgZQzaCtes3nCTuFiH7p2aLAwqtzi6RQ8Q1xHsrDaMbxrzaPHtRdz",
  "key6": "2HLvMXnM7mbNvwbDhQv1d57MmkzwTUpcqS5eREWcmEyF7PBjigkv4vCmkiQMb5sQA6f6rKNenvSYyfRtvV5Kbxfz",
  "key7": "5KXexmZBrbmmjvPDUD1UMh9AYpiPgtUBYETYh4dT2WBfh5nRjkvdkQknVen92s26CVWZZGBjzj97qXd1gCcGp8UN",
  "key8": "5XjVdkTbM4bnhe4dvyF3pBdcr98sNW9htSioC1VwGqruD31cu7b6fcJdzb7WQikY6mbdNhq8dtFY993CsHghrPqz",
  "key9": "2hYMjWcvZZGPF8UcnsRCgfpTnvhuFJjbW3TT4rGTKdgofmTqT9UUnFcdy84LznpWvQ1LBc3YjfNqQKnCxr6VMEp2",
  "key10": "4KTRS3RoUiXSu1CpM999fyKWibEFEB6TWNWXmXk3TPjaDfq5mngdSRsse8rxaBZG9rd4BceB3FBSMeyn5AQ5xis9",
  "key11": "5if9ZDc9rSg6iwwq97HktjvgWidRqtxKq3SEsGD2W9Y5DGFKCGN6GrcK5P2RTz1hgsMna7Uub34Q2drbYffT9hCr",
  "key12": "wgYQHPTxpapt2ZraA1GJKrD6js91gmFBarXgENysuzR1ouP9aui7KDbYZdTezwevmkzw1DbuWaD98bnpFafhmo7",
  "key13": "2rmhbXjnDoehdA84xpma8KHk481RBaoCcaVZerjDqbBMpWoZaKE99wAQmiccWcJevQ3Ltyb3qj38iUFGKuJBVJut",
  "key14": "2mM8DFGQMDnMcjg2HmgxBjisG6JG6aaac6hf23ZW9rBnXiLfE954rtSxw1f3jmmdsgrgQi1E1E9fpT8izs7iDd1n",
  "key15": "3C6eQ4dndzt8GzLTrRRkQXHhrT4riy7YboR2VWCNC4rPo9UqDnK38GipZwCjUJVkNUQADxjop6jsJnLXLv5Nycfi",
  "key16": "C55i3aw8viJ8my7jd6u8rERF9jSSgxoZMM9Yur3TFVhpLRr2x7WvuCK6aPFx3wrLGxpmPnvx2DYrSz9ZaXvvsxJ",
  "key17": "4AY2uGAdf5z9RzQsFfeeSGNCcp9oqNTFzpUrh29JpFV54wvmu94uawodbUhHn9P6qUK51MjQ6zj5iwqRuBzNhmuQ",
  "key18": "54ysJEcFcRbHaytmgbRiHox3v7kXHkxZ3XCZ1bdhKH8GV23Px1it9KimhGFJXrg9rYdNFf3ZTqkQ16FGqdK9UugJ",
  "key19": "5qb8QHnhBemRdKBYugZLeJsADm4QDBUTeVYdz4MPJ4cKQv7VcVgA85seTCiZ1LuKvD8b7cJ3snuwhh5UU1kJafqr",
  "key20": "5Pm692vBom8SuqQsCUxBHQHuTgoLEavw5AR74iciFzvkM8hb9ae8VCR5qArt4SEbgXbeesa7HhB7wtxtdPCQBZKp",
  "key21": "ZgFopr3tiu2FYXCmpYo5mM4hqQLhB8wa8ADDTNerNhZ86k56MauN5CS5PfJcVqc6sUbngKema1M3eEszwFVhbUi",
  "key22": "3a8TS4m1s39fgxq7cbpKXZpG6Uddkb6UdisLv2LYxUYmGcYfRugqHp8sy8pQB1z23mEJi33r12Vu3Z4K18ZuCB96",
  "key23": "7zChmmAnyb1ju7aEfdbCaBC5jcZhGGUgdQkQPKLTsRE6WBvuJDEfVU2tfkZ51r6j9zfM73yZrZT8TqrM8XCo3jy",
  "key24": "4QzEdAQPiVvS9JLMV9UzpsbmnKKXon6tiRvshHcz1fxhZjLQcr9TKMMnAHTgcME3bKgsvW6Ji1kTRG33ysdAkNK1",
  "key25": "4KCgiSnr7VKfdss2oz7GySprU6nYqFFsFzP8CgjhsF6UHHZt6vSFicjwH4mmvq4TRpCURLWWMN7i5XqygFvUf1VL",
  "key26": "3pr3daKzoTkYWn3qZUiD7BqLRmrmDC6Sp9sacc2w786DUxpdtjLYrZ2UVmADFEUuzt5R7oMdC29mJMcqDMbT1144",
  "key27": "2zUGrTtjSVQNMTxJc2zvMfFiD8dpTWxGMSEotK6WBfhdLSivGJe2qheN92m9ghVphjSufts6Q9gSfhsvuAib8aRv",
  "key28": "2JPuWQ8tfVM1sbdNzG1nW578AiqY1UWWvN9HwSGiASx7sqhTMzUiwzrxANdJJMDTvMrKHHV3qV2XVPLJueGykxdo",
  "key29": "52LmfxzJsUGLe2rfV1kpCeZdyfcjYpZhiJypgrhUHz4BHnPBHddXGSduvBNZA2ZS5ftGtEqBVAwarHLGMhjLor4K",
  "key30": "5BKzGS9mxgazdXsHEiLPZZPj6JTUu2GzFbESra1CYVCnbjaGFVsa39ev6bLWhT5EaedsT3zdtoQnKgv46JwfTyMN",
  "key31": "NLUbEjhnv8JxLLfxe72UMSZbJQNLhyqziFcYHTfoqujFSkGVc6caYCMj8oFZ4TFXAz3xGsDfPXdHjyhULLQNFK6",
  "key32": "2w9gHcrZ8w3hT7Yo8HNJVCixGEuCLeu34FBM8RGKmebDX6wtRKFePG5VRqRcKCpQhpDVkt8C99KQpwtiwi4dwWPE",
  "key33": "4xQyqP2VTvTQBPKMi1i6mGXckr9xEhcxTbhxMUUW1FxpxciK22ta9EHjTxKYnihb2NmdDEZL24j7fXN318B99vBi",
  "key34": "5tc7BqPU31Bi1wKoTyr2E12dn8FyoN4RKscu3B9gyyw3N4eygDAn8wL8D7M3B1KdpxkrPLZyZ2UMPHF2Lj39R6Ku",
  "key35": "2JtuF92WBaT9AH8hbsMMMX19My9pzVPJjmsccKCaTsMQgYiwTJCWkTKzxJDzK8oLaieSfx94sE5ye1RrpBYH9hkU",
  "key36": "4WVfHhymoztqQL9ztatvBUyyo7vQevkPTnNTPSGNAj3ZLvJXdAMokFCmFKFKbnUmPQsCdEYkWcsqpxfz89MocXV2",
  "key37": "5ojRFndV65xWKznhyaNeqViras875qbkEY9FCGexnn12vXkdAGTsKZRQ8z3R5aLKK4XFUdFe6VvG6vtQvKdnEUBh",
  "key38": "5To72MHCykRMPmLTVZRyAT8vWyGQ9uBZnnc4cBkyB2TXMGCchJX1e2P6jyEk8Xf8iSvdk8iAr2xB4xjyparq8LmR",
  "key39": "3ZERwK4A9DbWrAfVFXi7JWpEcoBGxPDCwSspgBRwjKZ6kj8PPBcuTAHPy2SSg5oNdFG3wBxkjJJqUQ5tM3FKzrXN",
  "key40": "a7BoxmipwaTiBc3FyTBeNBTmVraVHqZ6bHHrcKXNgxiAMbxbqmNbgxfx6hzpYCcG21X41tomkLCsr7zgqWMuSSb",
  "key41": "AofZbFvwSLw931vqB6LKH3eca1ypoMAZwfubapcp7yjMbN5HQN31Fow1uiUKPwrhcTa8og4CT7GDqqNLunHtNEj"
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
