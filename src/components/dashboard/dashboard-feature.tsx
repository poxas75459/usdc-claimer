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
    "3NVYc2whZCxsdzzs9XioLrDUkLE9TEPncV9ww9LotQ1iv4KRXnCvakRbpwjeKoXettNBoCcFQkxxiQhSXQSdzRw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnUd8CXMC1HVfdgmutSwMcXUeHrwgUJUhs6K9UZUpMbfjZs6pMRn7LQpGBJESakAjy2C2NCdgUe8oiTRw3XTwf2",
  "key1": "5KmmmREnsFndt49auNYmGicmZYjHQuNgVcZP3zDBB4zLiWZJkgqWAEPYBsx4aKHgcHmUiQdof1fhgEhhh6vstGnw",
  "key2": "2B1nHfkXeyzYTVKXLDgcrjYk6DJKybmbfK5Qx4TYMosqd3LMYDjDyjJ2gbcy4tRsHrZmbkWY9ve4pNyC3MVXYMpr",
  "key3": "NPk1pvj35f1qY3iTF3WdH7S2o2LEi4g1egtZBtB7a92jiq3tfw6hgwQZTZKQMKVyQ6ehjAwiJeJugo5LYYRqyGR",
  "key4": "Avu962eC5pYUS7gbhFjTk9i2jvi5p7Q3yuZsHwTH9E7VVSG8dKGgQfrvs4EZjrrSvAnknWGefEWvyV9VKadyw8r",
  "key5": "2XpxrWNWVQ3BtVgYZgaYfkPv5BNV8HEkEUHJX2KejbuHo1kCKZnSqaJbCmxJCToYzFASVZbvYhsAyvWFA4KdMk2j",
  "key6": "5m8jVQMi1zgfrQuKpu5oSWmXae1AcA9rhQp3iLVUvEgxkH1d9oaWYuvfA3KwhQdN2vbULMM36o3JkqyCtKmbi5tZ",
  "key7": "4EyREddzu9KXgvzSy8GqeZuJct56qdStGp8Fa9mCrrmt9jYB5irKWxbm1T59iopg7ML49cnw6YjonnwkQML9snfH",
  "key8": "21u8R4o6PSMxLT3Ans7DePPL4K1KSZQYP1s8zCZ7gc71Hs72BpZRg9T6KRmoDSBXC1ySE4Uh7XgDhPvTDW9h2DhD",
  "key9": "3uqzeWRuuD3ThVGNmEfYFbYGTtuknRbhCpTaTDynymj55dSTHHyNVPEqkUXKyBPdDoLkSMZTsCzBWhQcURuUNhru",
  "key10": "33Ng47CqVajmMDaeFu9XvjsaE3VNRi8ZUaZzuGMZv2qxeRccykRkprk7XFMPqtHwzL7hkjvsMwWoHWGNSLbfP9VC",
  "key11": "2DmHHWLkiRysKV2j6PBgQ9MYV3W33VQAPCdNy7VqrPeRjKXxTVu8zhboaEfecpd5m5GJbvSzvrhciDzBiQ31ptTR",
  "key12": "4tnGFrVe9azsqg1oJXeZLaJQkp8Qf2E3KHWHjEdFchu7nGC515n7GJVnMBBJPHwZHQHwf26iQUiX9h7p6vdDJLmW",
  "key13": "39aFqiK5DNVAPuuEF6fhMtTVpAFNFUdBD45z9C9dYAzx2GASjBhMUkBRemfmBYodyctofMYenLgZQ7aqL45pciVZ",
  "key14": "fXY8rXcFKRYuniH7TjGFLR33L1mHzCkGa2vyRYAmo7CDkrR2TFfnDG1iSHKPotbM4PxcM2Zz8ncAQouSpexAYvh",
  "key15": "3duiHHJkkzPEyPey6CJBx3am653dTRRoEuUMhMKkYPzgMQs87fkwV9vvQ6Wf9rEgQnFHjB1E7qsS1CGTHvCsDUDY",
  "key16": "3RFnWN6Ywz11z5DLmSG9L4CzDYbY6baPaHwrduvn58AVfDZuH16uDoQ3iwhxYJWb2tDzzMTy2uW88fJZS8S7kQAG",
  "key17": "4kur7MGL8hgTaNbd9sCwtRUq3DpVN7sN7u7KgSBo4H9toZJSNAhNuRsiLvRGdfNMmjkdwbQWbx5JiB5uuECax8UD",
  "key18": "Sk2LyqEx1VdkrRir65Eiy51Fxeb19rQuDen34gZ7A28WYWdBSvG5EHnGyaKaSDFi45MKJtWHrZeXa4ZRPichc2y",
  "key19": "3iVnhSraJqyjyRMkzSDM21ZDKaVs1KM9xD4Y5xfYffdCmSA37tZXTEMXvWPeXkQHJtvQ5EsHCcFp9XvBy2AW4MHD",
  "key20": "5CAbqg2zvP7KmF4JLgFzWxaUkatHGd444dmdn5ZryrS2WXS1dN2eHm38iBFMXpdSpDhzJKBXZK5DTWqDfdCZAx3V",
  "key21": "KjbUiHn4CZn6ftVB68cexF51ZCvfq2S1mQoeixmmf1m7FNkxU466QdDTvhBURyJMnkZZ2tEAkzokMCTHJX9anW4",
  "key22": "3jDdx6hDDSAphbgGMFH9J1re586f1MZwJVeXMJNjzuaezscoF73sNW5vYF2dwmx62EWdvyNmgsYspqPeCu4kTjyc",
  "key23": "2eSxS8N6kFkcPFLgqYnCvpDJUpVZoU4fbSFCSJzBLeqjMsSpqg3BpaRR4dvWM3vKvyEpBPNy9ohTjBXUxpbZVkvP",
  "key24": "5hmMWycuxEH5cMJMx1U2qrdbUHF4ZFPB38gz94wUifbwpyiETau1t925Zb12Vu2W8XcHeU4gtN1PosqM33nb24or"
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
