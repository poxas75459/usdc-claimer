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
    "3NLNU8LjzY766yoTg9PNdxQAsX83PsfXQ272eG1aTYRGMvx6vJKGZ6xkvXQwDcRZ8pqeXA3LZishpGpDDE3aYLFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55wTGhScty136rSwPMczJ8JcSA3uAW3sdYfJQjvqCVenJBrSfPnhcGrS4FzRRiAjSFtRQrmouvSwHqVKfxxNt6o1",
  "key1": "5NnRE6VvHWvMGsaaKGybqKGNQad3XHUBkJkzPAgBSrnHJJ8zCNme3MAWZGZ8TpNwMkFrfRkxEfw5Yf3iDPEGdaJk",
  "key2": "4fKkkuqejW9612owQck53vRKvYyiDqnK3xUydfffLSEtuMmqTUkSe1Jf5zeBUhYSdvnbyU2dzkWqEPWK3J1woxSo",
  "key3": "27z9xHqJMotm2UMsxQiFTKiY1E64yNbAxaP485Vs37G4x5Ef2GLBtqVZNRSKMCcsWHWn9jEWcR2cwTPjFW9KuC3E",
  "key4": "dNqk3GW7fmnYznMD57V2NBXs31QRrioJrjy8kyvE1exPHFrEFZJbXgF3Zmm3uLw25YZioyXufoUVsgYQjqPpnVs",
  "key5": "4SJo8Z5jdaX7GnjANkSPLS8v4CosssFXz2tCHuF9DBF8tmued3Jje3CrxrbJKaBwvrrzHwWWz8sSNM5vNfeNBFF4",
  "key6": "2RFWweRvoWWpExZLgrVaC35x41BynwAWikFTRSnd1hxx6VjAonmoT6hvT9hs2YXiuWPyjwzK9qEJ1twGDs9EG3KC",
  "key7": "ixK6YgzeHuth3ipaaQxAMEcKyag7KYVG3GuRQrmQFHaLmZ19yMnjjtJvcTdSW4fbN2XqmRmbK8WEBP8hL4NFrRZ",
  "key8": "4r5cjHxEhLPF1B4fdRQzT9i6byaTYiKyBXGuTL8ztx9YBi6XfMnJYuXK45QzVzn1QAfoU8MW2nc5pgiyrmNMTx5L",
  "key9": "2JFZB4Fh3UJAPxgypkutYwv2bDpp86qvy5b3Z7YvqTRoB7S7mPN6NTsJY8232Bcht3ZrY9716Hj69CkDtzv8nbx2",
  "key10": "5F3qy6svitQPgemgeGt2dWKxfjEnFBjnsTvoGMKAtMFfiXBCXsmkiMSJbGhDMUNFHf9kJv7Fz5hFjqRy7CEnMb8D",
  "key11": "PiWiaxSbPUdHrAPUUmxzH2HnRzPLrUPMuy8anAP4dCXVeFx53WnscaTCEHEgExWwhqntGo9zS1cFSdhyUsu8iJX",
  "key12": "62CovR4T7HYrB7pR1bt3ZWwC4d6LDWB5ykYVDrrQJL73RbwP8x26XZ3jrs3XJeuRtkv5QKBvoQokV3GLzXj5q7UM",
  "key13": "KU836K3ghtV3tE1q5WAfpcbesjG1Gmst5XbUa3ed7j3XVyrs4AVrvThHY4Yhv6C4DMFJFbeScBwh5nWA24M3Fob",
  "key14": "34CdzJFkiDSRohaRb98XzQD4PgGd2pUqbegyZRS8ahYpGnsbRA2AKjGrRc31MKZRtVDrcSVwMhZ96VWxqavHhrQQ",
  "key15": "5f4DqKEFCzCVnCXV1qMzHu9UHjWz3Z35gW9Fu2hGAFL7fXBtt6JGFaxy6dMjrMy4gGaWWjeVYyWdPi7ncv2dbvMX",
  "key16": "3Aw3dK84wdN1ww9UNyU3AP6kR8nektwyGVxcn7onH9kWAXmeTEE8Ar1CfR3URWC4U3AduSyk4pX7rLm68CuYs716",
  "key17": "4Svu6q7BDtCwPNY5sEb6brhc8M4ozJPXVrdBGd5Xd9vCqz5pzBAxwUofen6ouxDSch9KoqSqRYVbTqAX3Cpi5ihm",
  "key18": "o9AF2Ks4ZhrWvKQevKLrQKUxM3gGE1FhzN1orkd8H8DceE1LCrZBQ68h3SyHMYhPSJGJZR1H3Voc9HM7K1nN1Rd",
  "key19": "hF9T9Hi6Gy7CoHLnW3wjckbjhHvjmxciKgq15H9bFXTjstDSNTPDw9KYiRf9SR7JVzSk3jC6kAUPr4EteET2FmH",
  "key20": "qYJckEKgfEpLxQFQtseiAvBgm9NkNAFbfquWShSo8EtTkYeLE1m5hKCv7YL4nH9PXmetPpsF7XrYcAvhSg6inJ8",
  "key21": "5tMGSAc6xmCB3PcN5aTpYieFSUh3H4dQWce9Av5C82LFXZ4Qy7fkRhLFAnGUK2pT9d7uRMZqu14wtM9UAA3vvRpT",
  "key22": "CGGafLxTwWmYm5EFrTDCnM6Tzpe3JrDRMbMa4SJR8zWA2DhEiEXft5Z3i4K1JfGLF7phEmbb8NgB9Sv4rrBELCq",
  "key23": "5Z5rotgoeMp46SLHV6Uqb5h9fFidt1RkkZkcKMXcg2SvQSLtf28gG4TZ6kWDvzJWq7kN8hjT2xQguGCU1crf9wVb",
  "key24": "55yQZSVwVdEdYsNaJLYMfJPp8Ky8yy1oNYg6JYBPpzXQ87wZ5UGbWw7Z4gmx7e6C7X3sd9xraBGyfpPWCwvzYcKv",
  "key25": "3ga1E2wepGHBLs1HVekZqRRDxnr3KsApmuXym5FimQZucYpr7h1vPYJFPvJxR75nBHU8DZ3TQvauB29dMLoMzmq3",
  "key26": "4Jh2ZTKALUzQGU2r26h32TeJPhcTMkRefaLzmsm6HG2F3izkGFz1Q6xNpi22ziEbDi4dM9nAPoVDKva13Kk3yqTa",
  "key27": "244866RLqQ5VSJVUhjVQhcvWRTMxQ3Ja7Rq9VbBRAjmQWN1SKt892piPfH17e4kjmmjpeQTP6hXYpBcaNWUW1Py3"
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
