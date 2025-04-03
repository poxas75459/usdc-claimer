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
    "4pTnZQTv8m92oV3BPgFd2AuvgbUmAEorTNsvafTmZvD5WugTfuQGFZySEfgYi8K9aidNBoY7c7mz61hst9dP1et3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387ipSa2goLGdtGagJKcbWV5J3cqSpDPDXXJUnF2i14ihKYuUneK4gE9CXYoHWyy84QRpCneQipwuoLK6mZVxk55",
  "key1": "4WjySEBnLZThnu9BzjMJEVWry9nomuLv9ttUvhuHaFzGB5rzMEAW1qsruAZxhxAJLVydoF8XP54rWBoHDFKk34hw",
  "key2": "2dkxADXNP6rYDz4wopJyDySobSfiv8nUH5hav9S5CKXNFigz3dsvg98Xw5KACEaPQ81FUJxqq7RwtinJL85VBo39",
  "key3": "3wXnnasiHMnBnnDyHmSm94iD5BqgRTp85THjaRbbissHsHfw31GcxB9jcc5e9KWrtsntjWV78jm9XDzwg8XWfqDW",
  "key4": "5gQWEeCJo9bSVgKws2RttTqvxzM2TAVmEyy4SnwifhpGvUwWT5WFBfKK1qPgo9N3Fbdqfft6Y8kFBYPNaVjuKYQd",
  "key5": "2jUKNkXY2FqMzUntVAy7UegS6qwxe3qSaxt1sLjhZV7Axp8EWZJjDj3xwi1JJ5NabESTMUg4FV5qYDsXNR2wMVpC",
  "key6": "4nb87RcvWfNwCm7tnXSFBrsCEk8wXvp2Jg7QHtDznzMGHdVR5MFWZPozEMo1ZdLX9SKyrBaYru2qUpukSxrNsx2X",
  "key7": "6iusSLHdzrazAt3H1WjGBDdbkWYx2iSrZ6h7vqhpeK4A7yNDL1nYsLKEQzQmTtzpMiai1qfnenCWbEKDnEJZefq",
  "key8": "5JocibbPFKJV34Xch95r8umfTMyyKnL7Hgiu7T5PZ6KxE5r5qDZu8d5igccLndubfK7v2ZRFZXn4i8tVPhmVYSha",
  "key9": "2WFuy7gJX5KUd76eV6iHdqWHg6ZgTN2HWcAwfCR9rYxF8v3CrFMF1C3ZodNUKoQgdAMhNfC1T3npKnjFKSjTR9Uv",
  "key10": "5yHfphvQUNZrUiR7Uz3HwigJeTda2STGtWGg6LcFFcQaSEVHGRHvSv4wL3hfuJFczprB3YVr2tkvcjf3WGL2T1at",
  "key11": "2NR1bpvVUW2v2z8fWJVCTHcgXW5VXaxSYxB5wX1pyNrUNghn4XS19bLHAyvoLHEqD3v7oMASFZCERrdcSnx2bkb7",
  "key12": "4fwVXThFHaz1efMGKwCJTZei8WYVG12ajq91t1bAFLmg8GznZTumm3XmaTeoRfdSX9U4ta5XCVHQs3D2KCqNBgH7",
  "key13": "2qNxhu3HqB7PNJZhgQYKeZwMPSvDMHE1jj7ez3VinKreUGxnQxwE41EEG4MJNyKpSegBQkRMPfo3Fi1SNAEiMgyM",
  "key14": "2U5ivvGTc2WGKm6M4gDumjXPBwRBdBNWRPceqjmRbMgz5Tqb4mDSAqZJdW9gDNZ922ATbBJPorRFTXGTpk6DcNxF",
  "key15": "vjHmhfWyLh1zrshbHZumNiWpFh3c2ApPueWzy52TjiWRbs2iRRgfKD5tmuY1pRbzM2DLgmcwZHBkkd8rYDsqZ8s",
  "key16": "4gpUFdgQVjbcZPaurBTfi8tyjKL3ighmz23GM7h1RqFevoVCy4cSxzAzTTqkhdHZ5m3Y1RQGr9tDLduQjdKpe7hZ",
  "key17": "5EnbTHh29QC4tKkGJThck6LbDth5Qkk5LyNm7wyFXkzURN8FTMoCtDggi49dNGRmy847o4vZtRAe6UJKAoKwcdD1",
  "key18": "AQWZdJ426D8WFUkoamc2fDFBoTkUSXihMYFc1PeSKtjjfcwMgR16FfQXJqpRj7NzUvYwzYGyZHPPhtWhioUBHnQ",
  "key19": "2Da7Gsi7suRKxmyxX7ianJYi3Af3pJSTSqeYUMzdCsSCbSo4XZa8ptbxCezigBRbSS4uWfea9okeGWtBP6t93mcW",
  "key20": "2rztfPTrWSEtfMx9GrcVLmQQGMrS3vxLMY82NVmy98RaMbMuJ9BugQ24zuJMkkFDuxG8eEZYbVPLRk9Jp8zzDZUH",
  "key21": "4EWmYh2Cg7enGWuX7JbQD4WLhWvoDz8goXPV15vLpnBfmS4hNGvxhjjohAoLkhPHXhQV6fjBNySJoNw9YjZbse9S",
  "key22": "2VaTvAAWEWxryDZTJUSriDHtEHvSbCdn4cKh1m3iXh1dYsWEXm4cXjGEAa261TsKXFYTZSiZcPMdwNErwvzQFND1",
  "key23": "5XTWbiimmYUPqxVFvgBiinBpBXPdbJAPms85TTFc1CTL7YbEJybvPuVm5qv6nQnaKyomSyPcz5G2M8zwXR3r7cSQ",
  "key24": "5k99dtfwzDxdU1TK4oW1Jr6jqso2aZ8DxkrXziXM8tpzFjPsjWhu12yXaA9BNHtdbjA8PXWQVxkQFz6cD5CK2Qek",
  "key25": "3pieayg6UAyZQ8L5p42QC4ko99sVqRtEZsA5E7hx9HwxjTHj8Vii1rxMCY4E1zHebQJtxVmvtnmfuzV7tH7e89qH",
  "key26": "4H55QDnjyWwUjLABzyptAtgnALpdhAVmM9bPwTPffWGDgAk1YBBMoPDEmKR5C1mcaNZHiqvcroz25NXQEdkj8fPM",
  "key27": "3W48yDzgqQ7LBKdoXGZyJWsB2V7HyUb2YcRRLquBPuDHgRWCehJZYVarKCkxgMCzkSg4w8ahYz1pPDec2YrnX7YU",
  "key28": "3HeKiz2rzPyhvTP82nDW8FtGknQiE6txesXdnsXuZHbdyet122JbXnthYgZ31a6eh3sPrk5hekSzHLisfjxdEo9G",
  "key29": "t37wSmPvRYVbt6XPnyfe7jvUrEVdePhHRysNXyDihwTW96a53CKPA8gc8MsnxXuDXh6yWx9xMH2qTHJFBuJDFUk",
  "key30": "YHyF15dSc7qt86XkGX2ytNasV7Ny4o3tPkrVvVeYpKuiKWJ4JQyRULn7VNCTiwUA7dVgQ6myLCDECsHNcUMMhu4"
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
