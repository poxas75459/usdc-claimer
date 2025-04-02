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
    "2sPTTHzgLirgniv46SzA7k1CMANGWfywARCNMGJbcB1uWxLrTbW9R12VVynyvhjVGZPUAQpZbA9BzxmBya615B5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUMfbAa8mJdnQZ44i7oMXPNxGWPZwk7GkY65GMYL17rR1YLfugasGgf5ohXKn7gKtbvwVAJdLTbwfXuk1ZQVipM",
  "key1": "5hMWDmhAHYU6f33ysBgzz8VwehivtqK81nFosuAd7vdtLLvg1T9sHkjmFmrYdjiPerAvhjHeYJDYSWWyJSGW9HX3",
  "key2": "2V15Ex15yGDFJFSXj6yexju3bZT6hrFHQFxYBoWsuWuyKhu1hB1nBAazxmCSHedjSEe8ZvRn7WBGGXL1tD3e2Znv",
  "key3": "PcWyD9R6BR6mD32KybGN1mK3k9QGhVZ6m16P4waWdL5YZrzmERai8AEojoFfMr9bm7UDdV49TJdXEyR1y6juz1H",
  "key4": "3PXBTmsGHntySUsrykm52AjjSxzV253XgSaxu6xzDkn9DxGQXF6j2kYtwun6rXP3UZrCSdc3dkVkjzgsqsMgp1LF",
  "key5": "3igd5pm3V8MQG5ic6ij5qG835WvPc5LdWqbyWaVmmnKwADotUWoQ7iz1UFVQAHpuZ5ipebfJ7YVFVLuEAKCY2Jcq",
  "key6": "4DaiVPvYJHL8hQjJLBPn3g9iwvN8HaVrFRAjxgRrw5nBXR2AcpLCY2WgRff5wGB6C89MQkiWGbYsvsriFYAuR9Mc",
  "key7": "2k9R5JgrcEeAFbRupT6BVsaPCUuVLqT7XFht4WsbGzoa7pDB58TR36kwPnJdozeu81A38AM2r87Ns1de6Ga6mrxW",
  "key8": "44vLcebZWTNu2BGepfar9H1c1VEjWDRWcq7kgjxJHDrxTmCg15g8SN6RoLizh4nHDU5E3CDvnP3qYDC25yK91Jus",
  "key9": "42HUNWkC36hdsY2WmhvezzRXNeUa8jFWa9DhJLuFg3xctpYpu3cfQNm7H1oGusrG1zSKMY7LwZg2tC27bncfMQST",
  "key10": "5FLFeCeDbh8EjXAFsczn7b4jq98rg13hNCa5CcYyeT8sgHngZLsMTQGURdJNdCHUFAHKMi6ZhZC9cgUbyoqFhSjK",
  "key11": "3iQkzaXXHshYfTJkKwMn38D6f2jCL4vJhdjQh6uEmBs8gj1t5FQSEMo9B9tVhVADtS42NYSrViAEQftEqiW7A4uf",
  "key12": "CDQPVeCZnxkhYRZVbHQhspKoFjUWeikYHqb7nTkYNk6nJwg65cFyx1pvtY4BaCmXEgL7koAKc9JN4tsREcx56P2",
  "key13": "3RGNRPE8ZXB8CDB27LWJttKV2cJ1aRyD8AFoke4veYe1RF4dXhpW78Tj6Xb6e711AaYyNEa9YnC9LP6A2tJQYs8j",
  "key14": "3AtibBMJYc7Q2NTG23sXLbRj7uaGoJFRmVWJKpSFAnoZ7waCST6L1DStqB5C5NRavEqhaz2z6wg1Mcufr3DyoChW",
  "key15": "2pP1gmz5r6tuDKBRo5hhxvFTZ92ipFoZufd8eXgGbERPVMAyTKfBmhuwwmJwRgY421dnPWSHpZfzDGReqaARUVFH",
  "key16": "2RR3JQz6Qqd7pLM7Y8H4nmZCnokzaLj1Wzm631p1hx5cF8HE8H4HasXUttFbTjmPyyqS8CP4AC4sHo7KxB2eK1PY",
  "key17": "5MZy4zQXYLxYcQgD11fS7LASgpAjv33WXujnSYT1d5pmdmomtgRQZpRigH15tebFH8XKJf7B6bZu8SmJbEX7zfBf",
  "key18": "2WJQN7JSdZ2pqJATdS9TCRrAtmWS7Kah6d8v4BjjwaMTwb4Us8RmjaBP7LxgtvfMxkFLwcgEg1kaA5CaQ6Zjf9Uj",
  "key19": "eRBw6UtPHXXC2h9APPoZTNQfLXagQYCTVv1htoJNhP9L9GqhJ5hdXyn4QiDDMPZ3zzA8QAvurY8NzZo3N8hjv34",
  "key20": "Q6EDmHNAk1JpL1mMFxYECRHnJKtnZ7RD5Tq4KeJA1oE3QubEi2m65fRzXq4bQyxb12HEuuYiK4Tryb8NGw42d9c",
  "key21": "erDP8fMk7jL4sA5Nhg2oub2nF2zvdHVAGGqz7VBSy8oQ7YMTX5s4XNMM2rp1k6iQStCbMRHmEC5Kf4BRhDJaiGa",
  "key22": "2VQ1Ms3TgMeaMq8YTSKsjHbpkLdRJcsQ5YpK5EAA4DeFd2hmsPJM6M45fBm1dNquKmeyWha1MwbqnXuA2hxzc2gk",
  "key23": "2EjarzRcrRk8scdqE7GGFmZvbtHehYWbxaBYMmjEtqGHDyFp2uEGA1F2YdANyQDYS28syW57cqPsrRSUhWvwLV3P",
  "key24": "FAtiVZnKALZipkiyxDyKbbkzD7ETsDBnjSuMSHwQjwVuX7nt4dpWCZVoEruhFcqU2kg8wR2mYYUCCyqx6bampms",
  "key25": "5KYq1M8f6AyMYhrJbCVXGqQFamNq768xjsLMZrYSnNQTPAA9VthVZXC98LZ5MuKyQwxtYm1adDrSmuEv8QgLsz6z",
  "key26": "iMVgdazW1EjaB3htdLBKs2yC5ZSnG5ThUC3fokxSxHhB9QPQgvQa84RDAhnWxWFVeN259duXKdRB8814DjXrN3a"
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
