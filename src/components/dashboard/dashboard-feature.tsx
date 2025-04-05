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
    "3mEmeeNPPpV48BaeNeVYRVZgJxb6UxPoTQzoprUHrVZ68KWviyQxjff8tdthHUdAjKSxk4EVR5GCuuLiHqZ6HhHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrtJmpBZTEoYRgjCsGmZHLAZLXLwo7ySxepRSMUArsRdpafWRieDP9iice6HWc7XTNvMRfK16oRj4VcLKQu4sxT",
  "key1": "4VCsNpnC7TAWZQMdEF7bAknDmhFqypKBHZVNVeWnfhhsETkhNWfkixLTdxvPHrieyBuoX524SF4DyTE6rqR9dgQJ",
  "key2": "Kn6tPATndSKwm7fq88uxskFD1zE6dESSxP12Qey8z8SkfYW3qXXTa3VjB2dMa1wqgigRXxwGe7doGRNpbL3u3tS",
  "key3": "64AmxFMoWN799MGweBAirpELy61LJkkhJeJt1ac8VJsJb9HRq4253zWvybpY88TXpkbKxYiRffQBLYRqbBdBnB43",
  "key4": "Rs26BSvQFbCq2Byy4X4MZFDjX5xPXfE1Mjc61ipTUHYdqvTtJ9R5Ujc3G2fcndmfNQjsLpxiC8edvz4H1wuVd5f",
  "key5": "3CiFwBLkyUTBU89L32zrt22RLqgCvPGFzmEczRmH4SJLgHjBqXMRCivKcgd23ym3eew89Xc4EbXEXiCf7v6UUMe8",
  "key6": "3o11jCb1Z4vPQWvHJudLUSV9jvxbmmLjDBPZk2AozzobSRNmLGjNyhYqYpkuc4igEwM2aE8BPpJ7bv3MFe8dWT7s",
  "key7": "GNbdKXR713uMZFwYqLSGKPxXeUGbJcnbFiqRKVG17SPsKjUkFgrT6Ez9XRzLnEMGJbxWvcR5G7yvAUVVygp251s",
  "key8": "5WfbGvPQf98Yw1g7y2dWBv1dHZrwYxnPtiRdr33bKZ2bqU7PfaEprw3o9jc9waE2oRYzjKYk3KRis2vBHWmwDe5g",
  "key9": "5mhu2MEuUbZgpYVk6y9GSNk9CeMsfLwoJ3Efsx1g9q3zS5WjoZnKvoBwyAqH73oaX2wsYyqz7z3Xs4wDbMaAXqQG",
  "key10": "56Lu9kH39VeE1PAPh2DQFUC1bjbvJNk4mXL4ZYjJwGm76meWSNZMFGXhHyJFEh7dSUURqskxQTHnSHef2AedKomz",
  "key11": "5sd75eSWBj3qbSuz9fTXjNuGkeEXzHqu8SjkPnmdB6Hysnh2dE4bTKQuYptdNJoVDFbNKJSMp2p2HX3kp794ZtoX",
  "key12": "2jtNACaDoqQXuULyCReji3u7ogvVMNujxMH7jNqzKPXbCeg1jwBT6VBS2rSNZ5ESh9WYL28y4mAKV6gr7VCYTA9X",
  "key13": "3uuZESh7xPnCpmnQBhmx94CKAb4jEvurvPUJzuWQE3kNgn6i1TPsciEgEUFW6tjsPcfJ6g2gPwkAqGu49n2Jj9kV",
  "key14": "3gNnoGkFutzoqf4RfA7HS5qgW24bCbHWNqSSy99aGj5LtHuTzWErtp9ai1F93o59pBTaP8gGFbnSDbjcneiyKot9",
  "key15": "Mn6LsggSbCYpLAcBwwiAyNAqDzsJk4bZzL2h3MQK4bmrA7RMVsh8v5VJkqne31aaFZvHjHq6zCXTEFt1TZiWb39",
  "key16": "3FhYQFVsBNpwy7eYGH7BxFabAsxPjcSRy1REigRGeiF6hYAwqqPrciuVcdTrHZjjpTnGqPvSvHtDeeWMvLE49tDQ",
  "key17": "3hbNDiNwLzGBGarAAKZriqWKN7seHZUi8JogdMHuQrNvXYCkdELbQSsr354pJkAoZkwHebdB6KKpunzy7Q1U7WjG",
  "key18": "1W1Z2R5VdtNzsft1sYi82N6M22DD4RZ3XY5a3zWzxM5j3hcpQN6VEfvQb1J1caKwJhQGWH4cVTL8dDmfG8pcLEp",
  "key19": "1MidEAhrXpTjyWyo42nb6k8sPTjydinLFvNNHbpEB3eZkeUsvrHQP41UsVBmN3vJYVoXJzkUXcyjdyjuxLMya65",
  "key20": "4h3UCUpiUSXk74xEu78mRSAvciCjdRXs5D5iorepsDBh6HukTYx8NZF31dkB8LfbFpqueESa6NJXZi5D9ZPB8H7F",
  "key21": "9dhV4nsaoLLDuUTc2DbSnd9jK5Z3WPcY4K7M8yVWRrWiCvJh1J4HJT9yMtQRg7dPxKHxRNMjQPWkyGo9YCDqtHd",
  "key22": "3NFWszVFWLXEAmSYp1apNub6Tw9FysEPyKxGLhf8mKkr8qPmM4fqq6G1c3VQN66nAqDE2u854dGzTKPyE5uHmbKG",
  "key23": "C6fAJ7FBUbifvSN2LMyBKvUd7HFJgL9qHp7hfonRicrkZLtfCrFxs6ibdenwt7N8Ft6Sbk2GJXa5HFFci6fvCxL",
  "key24": "2kvE7kaKSJihVRs8kLAjCS4smPCRxySDa2thY61cmuuyWPeEtCTRS4RFCNHrSRuqFMZYH24P3H22nvvSbLAxeTLD",
  "key25": "JRimBdX5Jx8QZApnCGKhmt61Fv5LKXMg3Bxg2RGJ716hBTn6wKYkXfaHa5gQ7y5kWiX2qbzwcBHN59wAN4XPAq2",
  "key26": "488nssnsMpaEmV7Z33eWtyUkeB6848LdN9QM6hJKGB9D7kVBJdHr8cuxFibS5trQAkfP5u8EV7Pixn7ViMZvCN3n",
  "key27": "5teH3ZjgerFHdoJdW9DKr9hWvvGEtESAipybZrAaGirmN6demgN3tE1ZKEyqx9qVgAyCxaeELPtvGzJYgP6NcDCk",
  "key28": "3Q64Qv6Bhm8mX5UxY3PZDV97bxN6siy1aN3MxKwLPsTvnzRomzC7HCaCQinzQNL7mBvqPN7ebxgjo5bzdGLPBLzH"
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
