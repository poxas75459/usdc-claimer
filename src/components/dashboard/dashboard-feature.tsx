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
    "dQKCUXKb2mWPQ9YGQfFVas51NTs4PTU2TjCnpSeAWWhg6FSWToyLbWPEo5Wk28jaxqRkBpuwcVQQjZ8nRsnUhNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "khuJW8Ai2bS1uVRKVk2yTVWtRMukBkoTMXVt6ovmkQiE4jQr4i89tQ6Kiipv65RUmhcZtkpSoophP5kY1gvikRK",
  "key1": "2BKmLnKwgbzS5AqZwEF21fiik7yfCNFFxmYggHws94iQ8rn8r5weneFXeMb9RQiMNwUGNgnX2yez4EcYcqfXyTpY",
  "key2": "4W35b6neu5bxVfPryp3r9yVrKLstj4piKwdM5dgseP4Bt88QR83Q9aEWxqTRFmjgdjxrju6iRy1aMewV9KLA3FTs",
  "key3": "2Bz8Ak75KWua6bFX5CyrFH1usmjQTTZ3xHT7EnjPMCKZa1NQtRGrSV1v6xWzqJWBR1CjNJebngjHZ1VtBQZ2P4PG",
  "key4": "4kjD5vUqMfMaMArMpxWrp4GYASRHoTQhae8MJ8Mz2r8kfkKfPomkQPgQwkHCtjGZ3LTPptguKoSxpPxiDTRQLiwz",
  "key5": "63zAohNJ1KWo9mhsZi4sCw1XDpzkzmTxgEUSVJVPG32FgzjgbEHgwBfw1f5dpF7ho2SrrALxEYYq4fubkGz4PgX",
  "key6": "4DophBu5m7Pnx4mR28UxR5EBfDG1EUsyBYaZP4tYPa2y9UMmD2LWXFnRFHzvXgB2XBAxmb4AKXAcEZYpLxse4yUo",
  "key7": "3BeyyuqqHWAbLcvTfJzNvAzGRwQ21x2mWPEQ7TWZfn5WvbPsFWyVpUAkmDd12xWumMCXgfQVhKbii9q4aPPSkba",
  "key8": "5au4K2BzeKDfJUw9KsUHHKS1FyjvgHePvUcYSeppvXQyZ4MThbN9qVQwryyRbptxy9d8p1DsAg2GwqA8iEe2SThn",
  "key9": "2gzSL1LhQyNEb2bj67FJkBZnDNNnVS8B2qB2DhnckFZiEDjeMoiKi8mp9YuptkCWtHA3Ttgge9bnAUDKEQCeMrN1",
  "key10": "4i5oMWBsngY3SsXimwGm1TTCYFuyhMcDBCAuMNf1og1Qw1snQ5jPiPyK2AN2fyxUEG1cKeAA8SKx9vutBLLifYcY",
  "key11": "4ZTozHggx6uaUe9HYUWooQhpPhTqhz8PN8UaCAXPkJwQVZ151vEP2rGVtJxnRfBCdDKTMyp9gcXHUFMiQNSHw8gb",
  "key12": "4JXVBLgbBgVa1RuC9FJCRbM3ZBTp9nFEztK9q4AxDdnavqBs6GVg8gSbmPgv52Z2q9pij6y8o1xJLKCVBp6ZggK8",
  "key13": "3yVy7hQNFe8zAUH24FJigpVz5KkVZDFp2jRnWU1sMC9xRKfh3foP7qKwvYeGtEFc3JVCgFbcW33AgjN8ep4LbDbb",
  "key14": "4PpAJGMC42MZXqzNHciEyA27W6iGDEZSqdufJvEnbidYeQBBwnMyr94ZZq75P6wUdX41UcKp8gJrrdwoJSuX3hyr",
  "key15": "2atCKVKCsKVoCzxLLxTp9FumMddgGSNELaYupRkCQuo1xuLGE1DyKDRvG8Z8U9RwCC2vzX5icG95CWo9Nfz73NoV",
  "key16": "5CHGB8w4yWd8FYzEh5iSKPNS4wt6D26XGPzha9fyEbjZUkH4HfRMwTvARr3RiAyb3XtEfSgF9CdahuVihuvmuHuE",
  "key17": "2618jViJVtYC9bhhJqVywwJyVvbW9JWkRDMapkEBzCNxaZ9Ru3ViAFc99v5b65KgdkGpkEKL5JXY8tqgSXEKyfpk",
  "key18": "3YM1DJb5XRYfGxBNLkR1gUiftgEHz9L8jFP777yunuwYqZeNUA6REBy7dnv1c77wbFERkJ1xzW3mnBCY9qiaZhCk",
  "key19": "5f5UamiRLUQhMzhcSZTvEzPkgtaqGBEjsdPijEuUEJM7o5j3vSEqQJraeR1NgJzh2wHseBwer3FmNx1CAnpPZAFu",
  "key20": "4rtSxrqFQjbjATwTQ7EiACYN5F5JyMoCsgafVC7Fotac8XiC5HJDjir461noN2cgtXCMAvng8h1HGbazrtnkbvFd",
  "key21": "5JNBM79jkhLnDdcRcMPAVZhjmMYgetV4rvgqbzM9ZW5Lm5X9KjJ6sYt6enH1PUCQhc2E4rmRaZkDm8XEkZwdGsow",
  "key22": "j4msod2YZ9cQ9Bn5Jj1xrgwT4VHCkE2oWVfjYnA9UQRFcRQyc8k2tNbXujyKLCLUAqwnmH6hVWmE214q9q579Fd",
  "key23": "ZFSLs8nP2KBNRKyUggyUcbLU6rEQTyHQaoA6mwsbdGzD78PbgDm4E5rFkCD3UEhxCNZgJV6xU35xAmQDCzbXmFf",
  "key24": "3FB5MGY9GdW6aUBf2AvdyCUkSawa1Skepo3YfTL2XKh7Zq38uuLxpoQ6kntG4sm7GoweE3HoLTTFyawZXnaxVgaT"
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
