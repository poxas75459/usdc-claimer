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
    "4JfUzQMm6jSWwkqmCMkACEpbCJK8qUqn39BJ3MDUMcDiFzzs7xUQRnsWbpcQ6TV9u3azEH6jURJ9jCLB4Y9CHpT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REHLGfwMUahPZ7JCyaPNAN72DM8Bq9WmoyEScokMz7E9HKUx5ntmAueDmUdZbLzeWRzLFwMryf2DitWKh24o7kJ",
  "key1": "5M65NqXgfFedFPfke4Da7kkmFGsxdjSsjqbH5hC8wgb1uJWX1hZTt1TuAFkjUWxNjCqmtPgbHFJHXHJDSTd5K94f",
  "key2": "4MdXbv5vfLZakTcw4PyBpER6FdnwYGqKekK68TUiH1SYwzSyHkJVcoedD94QzVYgkfK66AL7aH9uRLPAKUZqwkLu",
  "key3": "3vRKsDTtAh2W82m4Rou2cj9PM9AREFh9nbKCNHiqaBcEFRKF4hvSqcZNsRHBpxBNrzmboJNcWdn3pyRCdgdBZSbu",
  "key4": "5qeTWTYAUr75sx22gTZKdwF3G5KjF7puLmR5mzaUrxvkA7WuCkdDfwXMwGKjCMVD9gPEGyWqC1GJZX879XqxdrUR",
  "key5": "3aL64oHjtEgxA2GuM9Swx5cGganG5tQzdhWyKp9LdZJRFZShNa2F5jq5UBJnigNmgFvdkLqhRS1pcPanVaRWBBym",
  "key6": "3PtHJhu4Q88hJQrvELMCMK8hd9xcFz2Zd4bL857XF3yvgYFLB3tVxrVf9Jo52sWzUkYgGE5xHPfAmwEmpENRJaxT",
  "key7": "3YmbVWzahY83foaoDxCQnLi3GXLhW3fMuNJfvTHyEYoXN6pk8SoNBL36s84fGKXtZekRSwTuPYYWsG4k368Z1XRe",
  "key8": "4DyvogQRraudBRLhFReBfYmjr2F7txUzDWNGZidw348bya1hTfx4W2vmU6ASSDSfHqVALNRQPzmsBFu5TV9LXGn1",
  "key9": "4z66p1qqMs1jHej3ESWRag8v9oeKchWrJM1UNigLGDf5quhs8zzkGXkLzdHUnSb4tJxZBvaf9vYGf5nWSe9WsY6s",
  "key10": "2RQEBCTmX7PWZ8zsZMJtgjXGyGvLUyf2ZAtqLmobKg9uBaW7xoJgt3Rr2KCw48qg9329XNCoUktetCHxD1JKpuTD",
  "key11": "63tRs6pdTunxcLEmkdMvd6C6kB2pD7HxhKTxbrKkaHDtSig8nGY1APfU1WGC2zzXP1gqNgpAS9upMNhCazM7Dz7W",
  "key12": "48knPeFe4c341P4n1tu9zLVB8vhcYt26Vq8uXWNGFXTugDd6rBsCmwysnF763TwpSrAnHrixMYeLjW9ADpoT2Mic",
  "key13": "5hC4qiLXSPq21BGo2bdiXnVLDrfxC5WgApyvqyJq8pXpj4uZJFWdb4GYSy1P5bkAbNmR7MsgtYnPgyzgW8PGSshJ",
  "key14": "4kZCwHtZQQ2XfyDBNJuyLDQdm5bc8SeD72yBTb7hNF2MjVSWGAmMb3oJqhfn1cFqzRA9CZx5GSpGEzY12y2dWw3f",
  "key15": "4X27aWAVcNbWGbopCHw2eFW41u5RtrZyTUKg1rSh6DiuAtUEU5PvQhCgwMBBVy7pZ75QvefPeL1w9Yq9UdvExeUR",
  "key16": "21FjJmdgUzvZKuYkD82ECx1oNrvXPvrrbKAGTyJ6pKNGFx4vDrfhGbRuFFEyDmGTKaiaJNBBCmxkJk5CuL3mErgh",
  "key17": "21dtg9qnVqxGY1HmVRMhNqras5TuE8YzDgVwKCXZanngBCLi4BCMqTqrVSgtmWMyusTCzf5LSQAQSeGjj2zf3p9f",
  "key18": "3qtT3FvJdprk2jh4cLT5oVpwTLGnEjzL8xE7r2LgwmisLNdBQvrVntLKoDjJrUZjnmYWAsE95oW2AYdkC36vGnd4",
  "key19": "2jE3ba5seXCdsts6paEo4qiNtMgW7KakyU8xsUL9v2CcRFW3KxQMgyBBpiDaU56tWqXy96p7Rxw2qAfKqzf4T9uH",
  "key20": "3nRh7jo6i5Z7GgF1y6S1xVFYcFQajcTjNdnzLkiHhPsEfyST3JuF1jde2hQimwLhvCyVNDfspXNh4CsU4hWWUwbt",
  "key21": "27gqB1KjGNE7ChGtzUnsDr9x9YKG2kWrm7QFayF48uk2sMbLMqeu5Ke7Y6CGBRZjAgPmaHDsmN1zfQmSoGUVM2sa",
  "key22": "2QHS9JSipMS8tbAFuokHrc3u7QUSoreGnP8JpVdJnToH2o34ZokWDPnccevYcUWNam8wzipSJ8C6CyveRbzRoS8j",
  "key23": "2B79Mfa2VJcJ1T6dZrqVNFaKWjL3jXKTLi6KLhyKThs85YvtHn5dNEAeqe81f1cMPFfW3uifvLZvCCKPdcp41LGL",
  "key24": "9iJYfkf2bHzxK6zWAEc6ynfDHNZiZ6gBL75yfeNKN7xuFWF4gJfuk3QQGHmd6N7xSBZwgomswb37muYP9cM4WZK",
  "key25": "4E45611kUoAb7dso1u3Auzju24USeZkXnhQVXMfTdVpULxRmwu8DQ1mAKQBTPMpkdMV4JkejwMtyW57uLzybWn9j",
  "key26": "46PLYpAFSa1WwvFZRH8roK6kWqMR7Ms8y2jdtVFkBhxWQHdEUKQnJQgV8MRYTVbNxxR4ADQ1MrWsB56gZ1sajyFa",
  "key27": "53owNnrDbiP2GKUHxJ6D3GF8QFqtoLdKhHQuKQQCRQjkUxGYNHZRoutUiTG7fNAETvjtsnoC3uVaicTBkdUJgowE",
  "key28": "5abnD8bzC3qw988VmC4qW6x7Z22kGd3ZaxqzSKAgc8sfSVwXRgLMzRz76aYZj5UdTnds2tASaYgvQYwdNaqUxkj4",
  "key29": "4miveqZif2PGFQ4B7gJvtBjTK1taCwHtyjtmibEcgiP4QwgfTNBsXJSJQ6HzWpKhwqsNfDxHdTD1XSxWUhc7kxSZ",
  "key30": "5TLC1AkhkR7mc52mvXchPkjN6UiWLwrA48wLmiMEMNWwJbb91QgHCx88hV6TQ9pt3tnuV5DPgbs1DsZ9ZoB2gFke",
  "key31": "24YL9amknVxr585ic7jWqd1gwaMEniFFs5xxzpNdcuJHrTpyd3pLf7xZ94ASzyswdqRKgm3aniFdjP7sCbwhqzKe",
  "key32": "4ZDuMfwWBBDyBXEKYravaSZzFXvtXSLoMnBG5rePBLmbrjtspxv7vq2j1wCLUrnYoGyU4nhdmDfykmBcWuqsYVK6",
  "key33": "3JXh9C2awY3fHY2qVf2P17f5qPNg3p7rPXydWndGjD1tE5sDF87veZEHtmSDH8eEzpZdnLDvGt9vUhKnBBsCZv4P",
  "key34": "2rFEWtPGWwVWn3HWZj7Hh2gJU8FKrzGcWSNkEPzLUsXpzhHEkJNG9d4tsziy46Wb1f4sy2EXCRSfgsnqGp5GABWN",
  "key35": "3Ti1KkTtDvyT9sySYSmByhHhmbzuo1jgPFGR45ZfAnwAjMmZ5z2MyZoTjdYpSLCPQvKpd4c1m1GmCGxzaJRKwtM4",
  "key36": "4MDGLXUCdxBh2nZeVN9uFCAcUSs1DYVc2gSE4KczRkcFsVd7svNGKZjGjmWG7BoQfbG5i2b35jQDPjGvZGjcHLjM",
  "key37": "3VL8KRYwQDeXnb9aHNKhj6SQWSYxgtroqb7j45z64DPQpsxhKsSqpNeA8BBCZZ3922K6UTbReySbHxruCwFeCJ9",
  "key38": "4yoo7ni6mUhAtcc2ogXowPWg3cBSkLm6PtX2At8Dm972gztS5JTzc76pPsgMRVfBE2GvkoDYbW1vXWGtmzzZVDFJ",
  "key39": "4LPSRSSjiSjmGa9rfDPRPVQQqpCuqJFgirBNo1wasE7NaTgqaPZ6H77kAkTXBoq8rTKS2HiG2HbB2LyH7nYMoDoL",
  "key40": "9MxqiNMYtLwjopPijJn4AYRPGBXGUn9g7FQtAAstp2UFc7Ap57dBkkDuDC6bWcJdLhZz57jVuDMMHR3gLJNFL3V"
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
