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
    "2Hxtm63tLw3icry98VLa8HXspzoXRGTdvkkzSvFWETs6Ye9u9JbVL6nTeeTE9PHarhrH1noZ81iBwPbnUHMkMPQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41phks8kUtTabLUHjqwwdgKVM6BAFF5DFMFfMcDcWFrqThhqer8dJ72X3mFmVNFyXMwFjEfjKpuKAE9NGReRNAGJ",
  "key1": "49SkNUbpyuK27XcUWkuxButnriFLvkbpWeP7eXRyEYP9AbQvpQYs4wT6MCQxPpXsbyoH8rtUwSEYmRsn2Q2Ub4GE",
  "key2": "AZSUJfc88knmeJDWZArxzU5oGUGiToWAaFnwSygAo7YzRQxJ63J9gAY6pK4rmtS9EguHKUWgLruxJJCzhrjhMBd",
  "key3": "39zoetb5vsoxudhHyMvcyz5CR2Eioiad7h5SDxEV5U43i6ApEknVLdvdmnBLRdpHE9nsNuBAdRWPLxJXzPTMKB2H",
  "key4": "2FWV1y3c3gHNVYvtyvam5ifEW2zB9CzZPGmXMaCTS6APPxz3wT5KkE1xST5o21vQfJHtWB9nTo6VYX6emq16j78m",
  "key5": "PskcRgWgxhZrNpACctyEsR5U7McfM5VM9QXk2CYkNyVubSsW3vNKz7AG26zBdbHvhN63JyeGPQje87VCNYfgYog",
  "key6": "3zXpJBWGrm1kRc2XJ9J3Hopj29nmFbT3izhFobiuRt7JWDeYpYJpVLqdyYkYYMdqcRFEeeeR7TgBBFpbqmfLTA3k",
  "key7": "3RYvdbg69qqFznAAs54VxcMLHg4x1ZuNQWrmQ13jhmCPiQBXpxTZQY8GFtCqxkcSfYdWwhtodGXMwQwk3ur9hfiN",
  "key8": "2yw9o5Nae16beD1ARhALqxNdwHKxkz2fTfxFuTyYxdNrabpMrDvr4nApqGJuinmGDuk7q69MwrhUDSShJ7L619AE",
  "key9": "3nvy9X4od6sLmeoLpzVaQDdiogAivfLPh2SftVCF4g2dGEZXMurjzHvMQS6UKhzCYx2B1CV6qgmdmwEYR29X85Uq",
  "key10": "QagEs2tHMTJFAiFJ1jV7UCMLR2zGib5krPaULvNfPsV6P1S3PMoZZ4S2U7ZgjAuNpX5LYvCSfSy9JrTGfHnoTRE",
  "key11": "25ZMhy7afpnAu6rAcFn4KerYV255N1VP6AzzcoxVVqkZMvUK35HvvqXPuzCgQr9zgUyTrGKHHxGwKLtuMdMWjoLZ",
  "key12": "3uihHBhQsQzNS2rhHNw1GpFLsMQRyZZbkvRvkJWmW4F37A3PvbS1eoULBnpF1wdgziLwY97TARLuPFgV6zDHY3ET",
  "key13": "52GpUZSV4XaM28xK6XhaiR9BWau6EGS2kUBqa2ws2peKUZiNj7DpPSyLn39QY24h5XzJqGJ5CuW53wZqXwwdF4HQ",
  "key14": "wVuY997vhPnfWTGojgcxZ3J5cFaSt3uzq3AxUrTafufnkAQHJESrtPotBiwMTADfsjKfaaSN9nLfJ7pCxvVtWtZ",
  "key15": "5CSwsvHSMXPUWJMXu4TS6deprZWrBXvFjtgKzTteTVVxTJsYCf5Yhg3sDHiAW8r8YZY6EqMEzUCqcrA49yhcPCgQ",
  "key16": "5JNU57M991aEzmXBHVpqfp1XXuyhLH5wTkcJ5XXsbHuqj9L6zxFzHGVoTA5GpnnoYTtoZqxVWf5f1sNzb41zshoR",
  "key17": "3rLzpWt4TK5x6LPNDWaNzqnaniDCjfdVBi9oAFtBpZH6xn3y1iEmgbuU7r942hqp55HtimPgfbh1N5jqsBTbXVhB",
  "key18": "4MpbZ7Gbbv93ETsoA4KtwJhSFqQJ4EKqF5Sig8RjZsQrBMVtcowGqVB3Y3j6KcmYtt94eaWVyj1uf7zVMJvUk1XT",
  "key19": "3KDVSrpwXrG7fz9q1ZrxFc98Bm8ya65L2r7qCs1DLgJuuYiLQgWimj667jpEELRb61oDmEJRfB82R2gE2Qwkm4sz",
  "key20": "32GqLwJSbdGqWB4oL1XeMdcqS8ehck1FcxkDcbHkzU1khQkkDVN2vN4dwzzJbpWWXZKctAjgaBD7mPytLSy6PHh3",
  "key21": "5Sx1ueu6DPVUai4gAirC5YgbgmhSoWxu2BxjTVwjJQfU5audqF3rLvHnoxMcbtBZoFeLmoWL4XjNXRnDVwnWHmfM",
  "key22": "2fHpqQ8iSvwbEYXGKaiEuKubmJLnw6GynCgYTLGsboMKbypFnRH3McFPVCWtmgkrh4FWNoTYjoRm8KjHSBw1Hyyy",
  "key23": "46BzrjkZVNg12Qyp3i3Yc8LCy1yR2EMtj1nStyEhUqaDUyk1oNcEp4FaM4j3kycitTXNLc2C3BUWvZd3vGuTaMGn",
  "key24": "cdVezrsdJQjJfbuVPtLDybGXpSm4iLZh6coMjjwQevVuXoqEyGw96CoxGeNbguz8HsRnvbn5U894iK1iDmnkeEF",
  "key25": "3XqeFTxtMgTnQn2xpMn698CfAwuCRVyFYzy71sJgocvz6E47y1s2vdiX7X1cN4ZfZNE7x2TC1Kzcn4nqwSeFT1o4",
  "key26": "5GxLQXwbs3ZS5JQSDT1yPFX34D8XgVoiUGXVLqXx6iybAZ5jr9pv7mkNUhBVnypmzVsrHqsUJaaL4bFtxj1o8G8D",
  "key27": "62fvGcbVMz4C5zJsADxLA9bMoHKeE469N3vqhRbYDVAjozJt6uy9WJUiGgPLSPEHQHHWJACRcdvMAQtZoaVZBepR",
  "key28": "2cjEmECBvrmsrFNdSddCKKw2YwC5TiSXMv9Q7hSMQqdUb55yRx52jqPFLmAjj9sYP6ycPVhbxZWxtU6DVFS8G6ow"
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
