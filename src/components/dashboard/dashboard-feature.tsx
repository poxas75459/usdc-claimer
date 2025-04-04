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
    "46cnkfFfUbXDrph8yhA1TKMgDsMHWxXV1t9x7aLTKRwH3GnzyN42u7Rzwf2nRst8kLYBGFZKh3ubFkjuYGU2XWrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBWMwhmCvXdXT55pkT8JHew2WJqfkgBFhwpZm2gAXiEcYK4weTT7qjvAKrVsq1RdjGxt1tsvYoMvS9q4ynKX3Ce",
  "key1": "4pJk1ZvSbYehc2jux7uvzVmfSTQ4MTdp3kZXxQu68XKPeEfSkL8FXRoo8v5FaMzwCeGjk2ytbhjuEgSmKwEBVGkX",
  "key2": "4kykAqUbrV6DDktAfoC9pZGydfxjDEfDskt9ygdUQmzNQBnmK2FNfdbyv5oBz5gWw3V49EZi6HWvvV6zMq8zGBN7",
  "key3": "3cNJLpY7R96zeLYd7h1BL7nyNUreQLsMPBXyh4kZWzKYBYPozms7JNSh44GGNTsgrqnoxoAdasn9VkhY23bFHqyW",
  "key4": "EL6mGbSbS2Gs9DAFUVXw2vMDRaFctzLB5kDpMvcSuA37GieA24yJgCpTppqbKh6SLG2QMNoiQHdvkMbzyuT9NNz",
  "key5": "4fTNZGwBLxoqK1SgSFG1kgFGQHq3PfLZrPJ16e3Jy28LCKj9Ke2g2om7mwAaH39KmRqhMGU37As9a2YWK3r5cvL8",
  "key6": "3z5HZ3H7xCNqkfEF6bRy57SeXpDgzfzS5BL3m54SbYgra24FvYJ5F2T9Vg4enFt3mcArJfXnSkDu5a3B1tVFGMKc",
  "key7": "55iHYr1TMs1VmgDJpwfXSsjcaoB4ig8urq7Go8atMo2q5b2LYTNe4vgrMVFzXUvHuRPjcM1qXkdHW5eAEMiA6rGP",
  "key8": "3wPsQXrSXmpXyytg4LrQUQ5MpZF172KwDYa3eMQm2N4TqL6WuT54fa42p7uqUaA3VkK7Uf7vKkkGvdH5ZToZC5HL",
  "key9": "2dCePw2d2h83hE27an6u31vUTA5FHC6jjSDHwiS459cL9t8EdFrA9ZDEacKeBKBipHPmJs7bgS6X7ZkNV79g4m1w",
  "key10": "mnR5GAvYhXYEXgkFpGG4iwapY4PJyTVrzJN7tjNFGDWrdKHs77niVgvznLiD4ZfYdabWxz5nMxoWFmGicsWHCd1",
  "key11": "4bLsHVUFGbTQxCb1Bs8JF3gtbqK6gtfFFdy8jamYAytTCFyrThobkrMchAdPHTt7tfMMC4yYLa9KTADyrLXh9t7n",
  "key12": "39Gc7BmkWcNH4RJ8PGHcL26yr6ZBnQEVLNjz8svE6yTGd1EQj4zwGidEjNYPKn8Jc4URjY7EQLzeELv1Q8J4MExr",
  "key13": "uH7UKn4EfPyi3tNdptNePtVEvoHZPmBdCDi1xMLG6h3KwTHvkvBv8YdGyxfXxy4vhnEpdZjRed2pko48ETZyYRX",
  "key14": "5J6daxJMY7UXwvTe9PchuLFBt9GAW7LB3zm6D9E1yQoAzRFwykDgj671sC1Xr78iXh55Bx9C5j3S2rcL4tE3Qjq1",
  "key15": "4K6KWfwXnLD1zfk6WSfAFbQ2Fp2XTZvW8tcqhyNdbVhpAyR7yGyVefsM3m6UtKCDp4bwW3MafRhkh51pQ1wCvggA",
  "key16": "3ujNTEkgvGDNRKW1xxx86bbvVAgBzSZcj93mchgdd8Pxv8jyyPe7BYTsFN5uBK5ypHWQ4ehAeFcBdrwZdkpAzXhy",
  "key17": "4fSf2F7rfb7ZmUac4iMopR2bDbmEFjE7eNTAYJKYLa7k2N2Mr4snVnKkij8k4shpcgmWbSpzfKaQ6XUZuGUEnuj2",
  "key18": "3rLsc6QHeYrNVfaK55NpdqS6iaJjwAs1D12F6JqBxN5b4BbgUM5wf3CaD8gFnimkR8Htci5V6TrVsghhQLoLeVVB",
  "key19": "nDqY9cafAsJEvSaJ2BfAoLBs4niCSRmnadkS7nz8GCGdaX62NENYoTURqTyr7XMKxqYBD42qt3SuvduYmQZ4tXp",
  "key20": "VZMNssCQuJDBUKurkNKjU9uvrsqysTPpRkgCEsfV3QyfGhwxoQwAsmuwYaWRSofGzNr2Yf8bSZcGQEmhQyCziXD",
  "key21": "37A4w6S56zHWFvCcKxw2DJ9uvBTR73h3fAPvB95ax32BsJwQzAknpFXHJ274asEiYS3qQVP8HhfqvRnFhq5YmK6A",
  "key22": "3fBUDdDcBGmTsBBCdYpVUfxwktecw5pdL7bKrsn9WRVLnzPzpRVeVcYPavyYTKNyveXiUcH9v5vKND5yXo8KgfXq",
  "key23": "5WPJMYpoxNYqzN2UKb5BG8CohmfHzZ4iM33zSf1fV1gJDqYasKn6AHQ9NxAiAsev9wXjeP3G6h3vpssNrD7H9Mtv",
  "key24": "2FFiYqXPvQKMUKvNzAGj1ArJwyNNte9xii3T8Rowixg3Shbd5HhcepYBPkMtwgHVtDJJY4xS1ugxxrHxC19Pj1vv",
  "key25": "ckEUBeC3GUGYkcGcxWNd7oZdXgbrR1RGgMFitkTFaoa3TQaw9YrzWgsfB885fQyTdrnigofdPcm6cyptMkeveMU",
  "key26": "54j2EhPTeN7zRcMz2pBS53mZXqqF3yRwDmaCyDJXZxuq2oQcx2twM5MDk3mAkD6tr9Bwv5Ex8PukTDrci1LxZvEp",
  "key27": "3rqkQm1UQn8G2MoWjJ3o7rnmnDnRjSkK8PymcZLL2iN3r5jV5tYwJzjAMEV5oz3Q1misj4tN6yY26K7gWuvMHndV",
  "key28": "59twfziNyhqxGym2WTAgxspZiqxG5LCsY4VFEhLLwups63J6ZERMCRUBUArkjXbth2LbFJ8NcspHpY25vKt1CG9S",
  "key29": "5UkAipjT7opaPtohm6fNEKrEvfTdC8ph131BfofRhwYyVRBt2iBHuSSj3jdS4pY9GXJ7yRmn8nxMkwt2aJ3GVNsM",
  "key30": "5416brjYousAXkiwGGt4f9azttJQDHhhNTgZuesFxPU2quVESL3rcLeFya6vCJUDDvv2qPJhTiuKorX8z49a4oZM",
  "key31": "GTaaejnrDGTno81XtoApB5JykdWR1AuZpU3bhn3zqokpfrqpt6yUXQenCgZgAWuswUX4H6uEj5son7fbY6dEHtr",
  "key32": "4pQByJk3of3n8Hjsgo9cG9uV2PVuxREsbW5mtqMRYtPXLXrKbM8HjJtjpETGzbGPvdTDBJ8thJq4jPJqE3wD7MK8",
  "key33": "39RecDCd1A8yn6A7weqD5KyFWSsF9DphHnYLETb3uGK23L15YgTi8f7aCT6zZeHC1zjouBoQFU1mqsd3Tb592RF",
  "key34": "4KFh3jLffyFB6H5BXRwBVEusghpjkV2eNzJsRc13VVt96E52Y9uR6akBsH2S2zWJb7bSDxeHn2mvQPM2jvGcRqUN",
  "key35": "56xzAgPuGxLMXejBTyjrGfqRuEUrDHH7n51gSjp7x1u87ytLqjijXW3sA3dPnhtAJrnzKzz7QVcym3ErLfhvxnYQ",
  "key36": "4xmp7JuCczwGGLVMGNog2nGbTD6cutV6jUkZpvPNFUapH4hGGj1tnGTcFMDcveLBSPz9qE6iSdftSXt9MTtkD9j7",
  "key37": "7BSqX3BXDjHSLaxBFfGnD2mZLFkAcjoabBfLX41xaBAYRyguBZeanq9JhqKoxH1A9cGwy45uVQkbWHcMvk7WTL6"
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
