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
    "3eZ86K7fm5mqghwmBDkBD9N4mrbf7ZzKs9aeNxvReyHHaPm2711uJW8FHv9JZMUE5BAkfTLkoLVUaHeCERbGDuJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LoYki7eQv526kd5qbg9QvSHbRyZAAbZtrm3ft1XUXjUhmhaEDN6XxMm6gh7XsCPx96ew77TNfmygwT3R3aVeE5g",
  "key1": "XRpZ3PyGa2tAzr4b7kump2iAGKKRabfne1bB5HtYb7xqJwtNq3xUqbZuw5Rna4GUGQKSFWZsDmxv8hkGKerzShb",
  "key2": "4ii2aAghiP1ePxaHJNoLQgScmhuaxCt3HZ2cAJrYM5KuKMvQJW1S7dAyNJynXrmrJoQJ1N4zqvb96GNswHzJm5XB",
  "key3": "2DuwP2FznWe79g2r8XH7qt9UvdG84Z9EzNhL9bRzHbhcdpXmxTYjecGUqosohWVoUh1PKnmVzYprCFS7jiooX2Pe",
  "key4": "Cxi85RaAWr1C7Fi8wrSzm2R9JEiLw7gBgEv5hW3uY5E1rU5arfFxupLDSW7m7yfJBWfJ4rLF1cgfEmkbR4cqoGi",
  "key5": "4yrntGnPv8FsfhPvkN6opkasvBttWoU9ZGs1q59MzrHrbGfoxnQYNqkzZwkVnvoX7tpz5MPN6p7SMRwbURUCdVJP",
  "key6": "V472ckAQQCP7BdJaJcgBPPJbvVWSjmcGJsm56pdPCEFmpVsZQLckqQWrDvhd3dM15XiWFfceoHQC9xVMc7pFqv3",
  "key7": "4zhwzCg8w3QcbkPKBwdZt279A9rABpdK3XLRNaSpA2ApbHsWKQFagVEbYEz2fRincG4Ep4b3fsg9xXMnoM2QiLdg",
  "key8": "4zUagSKMxECXWGomJPvGk35UihqSZw71Uyyrm5vLmcKM6RbyGqvhpziZXiFCW2y9hhCKSriPS33fVmA85eFAFRWM",
  "key9": "57SBXKvxssHGHCs9U1vy62sRW7VD2oH3Pv4md7wNaX1KcL7iMQN3eYHiLmmwwD9w5pjAcMExq2jPeSqsVrSDTtBC",
  "key10": "3JZuapUzRP7KWGnWLsnotozjsfHxa3qgiWzL7Rs7kf3CdUFA8yLwvRSJs6nYQzjYkKj9xcSFxCNivoAZeCEFz8x6",
  "key11": "5sDYCFgc3BLTvhMNukNT3tBZqYnz6EfNZQnbDaqjK7F2medmc72b9KyCVNUuZqX5MvFRd2TTweUELcBsY5UeCL6D",
  "key12": "4DbPFv6cLdruQfhuzEcaLkBQwqXNLEg2icvVDXDi7JqJ5PRef9jHm6rY1XzNVorseXWwHty7g81U92ViY9hBWyuK",
  "key13": "59PNv7dtv1E2B4MMoYUok73Gacr1UkjFLt6f1KJ4tFX7jDZThnyjiCEqGyht4TkmbtbWMUC8tmddJmBjhLfw8L7X",
  "key14": "FHgDKZjPimTAx8EdbfzcgizN9p9qLiPyfiH1yagHmEEL1omY6SQzKwyuH8UZYFHY5ZzVNcJiGFZDevZ1yYihfJM",
  "key15": "3uYqDAdVpSx8pdhTSJ7pnRooUGCEmqmePtJfWbsrKzEYmcS7oq2w3puasPivJqmxUGtuLfkXHzkccq6HwZ99pVPL",
  "key16": "3xNVcFZDdgtGHGvx4bA1rpD3YbkiHN1cmK7oj3KYBWfsSbnpEszCNziAPwbAP8XXrrHzgkxNiKKJHfCqgycCyWyK",
  "key17": "2TPdT5sVnPi26ALzpMCB9QcbbVdaHujd9GMKoevSM19bLN8rkt3fgXaT7uriTQvZuaE5XU3eh4n9kVDYEPbB6fBA",
  "key18": "HcE1YXcgaQF7AFH66aHeCtYBDpK9SgR5gYuozVQqfukb4PeEm9Z94dUY2wqARwWVsbHnkpZs2SRT1ZeYZCu7myQ",
  "key19": "5RVZmJhT3Xm6vmnUSG6a3xoJVdMgZAvb83ACoum93oD6ukwoB4Ws3BbukFnQWCprgxzCCTifYXTux6YfYa6T9Y3o",
  "key20": "3qHTX6kLDnKYoSXA9iELLUuewVeQuaRebjBofGFwfwrvgkHTecWceRtTQMrWy7hhjdZoiNiqbMhPMbmuZzwV3Fj",
  "key21": "4vrSApr9VoT9dFzgkkpXkCY599ActBoUdR8ArtMaxxp3MTkpMjo2rZTsJSGKumiBd5bp13vdet2y338CcLnkjRKk",
  "key22": "Hw4XHNiikKXajgnPTZ8EtaSFKRBsM3vZzoUQU6QXAcgArBsqhpsCeS2iiywS8GpuTHkfv9SW263bKSAGkz6FWHA",
  "key23": "4jLUZXRqTSrfYJzzp89nFMZrrqK43tXDLCeJavyT7finuWVSBJdn5mJ8tWTSdrWYsDzUBAat75cNbahVMdxcVBLC",
  "key24": "bGia5qgudkwt1knHA4689Wq8rNNMHZqRKHcyZhX89hLadgDie4fpBQq3mXZZ24qdmRyeNo29pc4LcPZQ1yopcfL",
  "key25": "2XFciFT1VEL2Muu3CrLmEujvkNvRtNxooPDJ79CQUhwqmpj8GDQahUg1aMkEgbHAP9J9ekfE524nV1mqGhPwYwK4",
  "key26": "5rNVcDU4q8u3vXy7vwK2avMtV43xNFk4ZDbz3Dr3dTeG8K9ajYRXxFQLUSEWqjcruCrypZ4niWP14xQaLWAc4kH9",
  "key27": "245yAjV5BxLPBioQWVYZHxs5HTvpHSRA4HocG5iJcjVr2QfBqWw9jWBfi2u683L2qHMVYnCoQcA4wgM7YFDYXiXR",
  "key28": "4B8D7iQXiQ1DQ61QEbtUr7PWc7ZF1tJGAKuAJEY7fjo1VPZM23bMHp4yJhC7aHoY9NQ9YAs24Rd1uoNYv8a9wBTZ",
  "key29": "4EGi98HwGP19AHKbwZLSLNjW1W23QKz4mVyV9L4FgARmFogdHzfy3o5mKYHQbpUXaCAM54ZUviCdKeEwXkQiN9M7",
  "key30": "h562BEWWpgFcrEchx9CDbFYg3WtizjrVwrUFZVRbAzMrhUbn87fwJTqKxQ5RLn51p3hcTRVLrjZU1ReCjanF92T",
  "key31": "2JrRCGxgdNXxWDGFnn8q3zF7an8jEDs6LvCtCrZGDvrNZUXRx6yVD82F3kp4qcUzTtmHc3a8DtufAiEuZ6ucsjak",
  "key32": "3uiP8hsrxJoPA7Mx8LTLJPxp5hKAyw6R9VtmZgGctVr6D4Qw8m3vYghEdrYmfoHZrAsD9TE9nJsU655P9i1DTtSG",
  "key33": "64PYeYDjXKGTTKNpxgCdzDXTW6J6FBegdg9C33BJxzVYQ9U8oEWJtZzHSJMUAdzz5XeH7y7zoMrpASPgeCYRih6o",
  "key34": "2J5zf2SUf1pNdV3MSiXzTFFsNxvcyajvFEozgoCTs1v4ix8pdjZKZiYXreCoyV8pxzwBgVcAjXsqQpm51x4f89gL",
  "key35": "2oJfynikCnKXkx1WsH8xnpTF8JnNBtxEtZx1kKK4WcZoQaVKdcMZXM2CJN6HKH2wgsvuJjs3hXhaDgPW7n3XfBgj",
  "key36": "ecvQDNRS4wDuxn7Xq7duTV2e6frYwpp3Fp4vM8goiVdZ3SWJ6A3Gb3LpcsEysGLrybQj9jrY3iS2ATKQrQ2kJpy",
  "key37": "41xYn8LRZWUxxAoeRu4tKTvgC62kV1xWtRBq9nwjhBX8aPCVDp7fjQLDVL2MoSHBcwCbPmgkky3rWn7tddezNt3u",
  "key38": "4yhE5bSdN1kXMxdatNoQSQePRzz2iPWJ2XKKp1HU1cy31ioLf23DqUi2kZwXtntVqsYt2sCTJhH5gXwzsg47wmHP",
  "key39": "4yybJzD9eDgEHFHngdbn2rkzPmYrNmb2TvTBnFMyXhCvWhsivnDakEzMqWbm7h2uYN2q2BBzUVAzNQ2QpvEC1LYa",
  "key40": "3S4KNA7TBA4Bw4xvVA5n4y7BvfrhyfTwisMUBY3KsyRcjXEVHrbTTTHPb8rb6Lx6xr9dx8RDXgarEHsjpvzLLH1C",
  "key41": "3nZkrFUfXa4J9f6TxLf34pdGLKuHpWE8rv1hGzVURPh2iCXYiiej4MDNMAxg38WCTNeV4RPWAQyYvpKfqbMLxRGf",
  "key42": "4p6NorsskhaQmto8GN9WKDmGY79cmzwK3U4e52CjkCwcLspUtsRHhgd2kd7a3P2edgCZDeS1oVUjNjCbmchR6HYt"
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
