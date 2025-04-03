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
    "46KPq6hhF5PVBMh4KT82KMiV3JmQfKuBeRCyqScGcbU26VRr7amEDzbzebMkkb9t95WvZDCYaVmC8HCQVZx3eCVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BN7PtSfJiCj5cXkYkx6xDw1C3oGuteaVWhGhNgaoz6sC26gQ2QFAiHi7ToUv1w83nfnN4vJ27kJVhEb5jRzFAhK",
  "key1": "58Sbat3jFccrmzLsxfB5JqGFQ7SviMuoRsGoAxmJ8Q58PPhxZKuGP6ytGohcmtk9zLBnp5JrMo9RHt3fgfZeoWfJ",
  "key2": "5CArmepMpEMePXuqT8maTeBAN9CADcKERgX6qEjmwvSPEx2VrhFUKQCEaLutiNFsWZNe4TWSqFHuF1FyKHdaDbGm",
  "key3": "2GnAZg1mFipqxksn1q6YDYsDWKJYxKFkv7XRhQh2ivXgHZ3z1T84PKL4W9P3TDRaowS1RFGtLKCE1zf8F9aeU75",
  "key4": "2w9bsaxtDxowjMdpZ6xY4L83L41WKz3rawMVKof3aKdPQ4o7oPxomsbaJMZCj5tFtkSQmtQ2q6aoT9jD5MeEqE6R",
  "key5": "5fhuLncZ57Z3Fp6aE7bdRNkMZtGhPhCmCcxUvERcPYP3xUpBprGWAuR3btqs9UyjyZFZ8DcTsh3A7VdSqM3fE1Cs",
  "key6": "Cd9hFXqWNTBchyJ8TswmU34z4uDVKVXgNc2TrNkmVQ6qGwVubxkajKFqnY3CRvKQmyPJwyTQMzU9Uasz9cFLJXt",
  "key7": "3EqDErEgg2Z52CaPSbvoF2BjWUqRck9UC1hQhVA16bUdaFT11Ra7pymL3Znb3jnwjAj1sit9s4Q7b5XFcArfnRby",
  "key8": "3XCVrrdowbzmYattFMA4Smc5LSBn5XjLNmMAYuanHcdAXsXS5BkUMAzTPiMMmz3ibG9oLpJFsJAr6Quu1nxFvSGj",
  "key9": "RN6ZmAwFFz51zrQ9N5oggNkcNV6P4mCsKdkgeJ3WuHqzzcL7xBmEVk5cNDPGYkcqTwutJTM7BNYHztn3bcKrEdn",
  "key10": "5RRWVJc51LXegTKvRbywd8Yw3g7BeeQ8MCjARJDELqzyibmHG8BE5UJAGGJ9n9dgSFr3c8gTZCdGMhPHTXdcFAqK",
  "key11": "61h4eVRJFdNrJoFEF2Jkedspfnyed4R8Pv5TKKdXzmFRF4n1GTckPojW7TEkNvB94KsLgQRWZW7V6Yekb4G35cJy",
  "key12": "HDUbY8UcW1rvz3pVuhL3bydprSjFtURZLye43zzBtAqadjw9WQ2H5dzMXkqbu3ThHLngjAmuNsySMhU7zh4izRD",
  "key13": "58VrDiWsBTPfewtx4MuHv1vJxL8oUsgRybwpvvViSzvZKKfKAZyvCWnbgpsrj8zucVka451tvCXi78K17rmAtZ7Q",
  "key14": "2om4qR5PtbfYkVbviCWo8sRqYWtU5g3fqt2EXYzaPRPAoQBBkmQerP4wALd59pbszaAJWSFg7fZzZK1e7ZGtv7Ct",
  "key15": "8YiBUtCBzYtCNEpLDsw5KSCKq91M63b8JKbZNWArEiKAXQVduhiwHJoZoZnNs81DJxuWHrWpY7gEq2hZZG6xoLe",
  "key16": "2W6U74ZnFc5xu6SvoJuZc4gTQ7FzUJHW2CW1sj5obzMgjeFhkbMmWjnzwDnd6VG3ZoqZYHiRwQNJdcvtBcjnpvdA",
  "key17": "4RBZ8r6Y9HPaPFM1eeq9fWBPoCw89xm8sUyMtxBjbbMwgV8RYZ4PJdsEMrggMFNHcYVPmm8Qan86zt9Mdd79b9jQ",
  "key18": "2GHZPs7nfU6BN9NK7uAFLCGzcgxzqxHGxwXMHaxEXZyFWCh3V8tx3LdXwUJfDPJTW5gKBFnhL6ChEXfxLebugfuE",
  "key19": "5D9L2MzRTzspEVAQiiJXZQoMvD3ax8DPZKAQ8Rce1yAmZGJxzytqgp2zCLvpeT7pfwWLf579h24AcZaPNr6YNDP6",
  "key20": "36DXPsr8r6e4W7Pp4PCNgFLeQ6FNEFPgNdKDsTZ83zrSkgTGDetKaMxUe7eBouDH6XC3GpBACiLXvvfjSg5vzwEZ",
  "key21": "5inVHWdKWSYVF2bmJtFpPRvSopA5DYtfRsgzk55y5pfqa4QqH5X5xXQ5kbyxdAPzwAWFP11Wax5UWT8jsSWciQHh",
  "key22": "4MQBzoof8ZgApNi5z8c8HrkytT826PV6F51z2QjNiFbbuAMS4JLaGvx8ij45C66QXa9iGdrkqqQopFjFHRTvWctq",
  "key23": "YAeUTQZ5uteHkZfJMre7aoUXuWEDZG8ZieChGyJgWA3u16EuJaiQL5TgKG3HCRWCebLB6MnkqrXGHe8HJb4rimU",
  "key24": "3YcN31U7MuJepMQfmPKycmP3LgcpmeyeWMq5G1XdFftPGuhhhqvCsEsZ3xWPKm7PCpvqUsTBW75BxpS7A3zahfkp",
  "key25": "5Nqbo1Am4FQYF5PT7sjVdumWcTt9vXBeenK3fnajfcpQEcSLQH2vvYxDSJQ3xQv4Hb3cGs2NTj5Q5wXzHkBReqqw",
  "key26": "2tb5ivtZifVNoGb4tiAybMT8wfxVQ9fpFJBsW8dpskt2DbAJHPXVnGB61soHAgqmTGquj9SsbNkGL5KeQYqB5Xkg",
  "key27": "3fbAdfFFtrp1ks8bcYZB8gffi8F2dWZMhS9UiUPSFntLMFuoQARLYkT7ordutEHiFHt3bgKckCGA4LH7BLTNYwuq",
  "key28": "5yZG4idCTE6tdhFb7CJjzHz2FWYsqJKg3bwnEgn2VyemnDSEPGCbboPacRjUV4xDjvu6Rcrq6Wnb63X3EbJkated",
  "key29": "44EL8tQchBs1T7UBExSakZ3aCr4nc6D5czR3oz7TrwYvziqyMGjv5FmHp9bVabLYFDSHyFs12VFRYg12ncKNk9Lv",
  "key30": "3L4a5u7sbY6LXYwTNvHqxT8sha32roMeAYwWHLLx9FWPM91z5fHW4G3pjqhguAGeqQfyjiuNajHg7Gxq4wtsK2SC",
  "key31": "4EmnwjtZYt2ro1npC7zghhkzx22DgkxW6hCnL36WgJyeiugzLA1wWWpunWH4VWkP4JxAFw8WG1vFVaWDgUSnYWUN",
  "key32": "4pxh4VXtePdsapjt4iana12X2RrYvgAbkuuBNA2BaYm1459SJZA1Q6bJ6w2hHW5XTYWTZpZZzf1XgWbZiRayfsmz",
  "key33": "28i4qg1mGG583YJWpAixGUeW6knxAnzXHm13eHAeXBQWtVngYqWSTimBzL4qmasvwRbRV9sdzXTNeoZKdta7MbgZ",
  "key34": "3AD6d8Ve7iAdC72Z5CHgq96VbhfGiza2vKfJy9cYVpikGBmkooRdFKm4CxHjGw1VgZXH4hxdcrccjctQcfN5nkJ3",
  "key35": "5pPPTrSE4wxHBG4YcCEaq8VXwtg8ijxsMmDdKr23Bov2puYiqAptB6FrhTjJeNdvdpScWWjQjvw9ykFP3pnMw1A8",
  "key36": "3mSvP18BHzWrYtCL7VMAbsDpLPE3jgrKrpTCSKcRpqiNXiRR2zbhU1sm7pTzXtMaZuKKcjwu2LKAswkCk9NsBDV3",
  "key37": "99u2Gw8EkTPxUZ8nVGFqodCSmYEaTQzoBDc9ycbHkkWBgCX9hk5CFFDnAvefNDi3F7Px7MKXiYqdmsM8WMMCyid",
  "key38": "4ruAc3Bw5wAnL5o8zjfKisbmWHte7xypDsK7AKMcx6jDmex6BW4eo7mY3rf3N6MoFm124aVJGPbnYg4e6WBQzobi",
  "key39": "2Uujn61ZMr1EgZN2YWWWVysJUXrSQYRjnSjPivnVBKGanpcfvmcAo3zEvB66JUXjA3R6NRanbq3Na5Wb6qJDGjYS",
  "key40": "5p9nF7Jbpd5CAYftmAVPMLAACRNRovsT2t5A3avHaZAS1WVJfGumSdBb1TpSJnosTRghSbXkKN1tMNinDEvtk9sM",
  "key41": "5muNdKa2LGdCuMHUAQP5oGykRiAxHEYEgdYYWaLbEH4JCufhmZGX61QJtnrKKRurhByKwzMEnbpsEaEoy3w8YYMe",
  "key42": "5Mu2zsXeKz3HLdVwbf4axE4bDfJ56DBahgrCfKXDXSWSCrgEVQoaQpKQWmV1oEzJW5ippBTHxgCEqKbxAaP7ztKe",
  "key43": "5GUZDqL5W9jcDoCEBgg6oC8hBQ58M5CLwayXV83fxY7StS5Jv7v4sJzwaEWB5cuvFfNXVWDN4upQ5e2nxQTxz2Yz",
  "key44": "2S9JQmjKkwzLNtNHYtjsTjTsdnFer74Q5srqwt6aRjom93Uvfo76bm7BSCzeS5oxfxJppfmLrVdpREfmk5APfatN",
  "key45": "3MdW6KSEFwsn9Qa84YZEZipSRK2gPgDkHJ62w39FyaFLvCwk6C9xRgueecp9biuvKGcdMxMnUTM44jQXADTG1LMB",
  "key46": "3LR4HhJPDtpBJWcgyPAKiYSBHdYHVi56q5P6LyfrM5zA2xgPRCgTgCGdSSUs357AfwnaZ3AVfysiVxsz4yAedDNQ",
  "key47": "4sRTekcQJ4D8F1gCyvpthbui9vXLt2Unz8XQyNT55dxxMmcaqXDx8sgwBxE9XpCdMnT6zucYFMTu6HRwfhhKNGzQ",
  "key48": "2x2BdZMYA7KkMLnNsKmqU97PAB6WZZzHdvu6YU7u2zh52ZKdgrvHGkM6FscmCdboB3RmmTw2bnkWN3meqW2nREzK",
  "key49": "5op35JCHPyAZiZf83F3u4cLshbxSYRkusP2G4A8cNoQiL19zSToCmAV4ZQQw8Q57JSYTJ4Y5TABjSgE2EAXVswEC"
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
