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
    "WqzG7kL62CNz8GHbKgC3ELMxii2frEBVsH2KWaUwGYt3WebLfUhuuGiqCZcPBdBoJiP98YvZ4Rxt4LKMGyigV68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bX8WVBzcpT5hiCe9hNPQ8D5sHJCs7YnKdHSEd9HRbFvJJkgcRVVLigfrMt1xgnr8S6N8AabtBhqQgZ6h59xPvoi",
  "key1": "4TNFBpdj2x6kPuz7Egk1igsEXNcLGSMYcJLEDArj2KkD6AvkKqz34QFhDHHJq3TRviKt6c1CKFff4GxjdDFNsvDW",
  "key2": "3zfM5UVKpNWXKhDguHiEezr2jDcPd8efToh6SzQxTZgJBhvMn1SzUJNSkL5w8nrWjyFMdGStzMjGkwRRQvUq5vAA",
  "key3": "5bE8h4j3iMHN6S68MKq72FLakryw9cCN673uA1ep4f4ucfAZTAYrgZjkXMoVs6mpBkiYzuuBqC2h2Vj3TsXmdXsP",
  "key4": "3LaHLjJyRDxPP9LfnCJ1f7R8U9kxtRyTWqwNwTcUZvDc3vHayN5AvdsS1Wtm9es9WkVxfRzPawfacE3wqfrezN4b",
  "key5": "31oNwkkhs7mGBV5egw9CXXMtjv3wutFWFPFXjbXD6y4n3p4ivXiJqLF9ZPiUgQohHArn5k77LuzoTnC4J2Nt1js9",
  "key6": "3JkSDXjLezTS8Nod7zuDEkcS4VXDvesuMdyyXCyegW349QhrpgEsgMF5fzaYxvcUuZmHSQ9tJVxA2C5AjcdGhypn",
  "key7": "45skFLm2PENaTyd5nwxQdGPKXUaAihULV3Vzxm8dP5S1ZdC6bTVTxcTWToGWMfENVH6enPJuNGgGQdAZhnZMFwcF",
  "key8": "4RzZSHQsH5PM79n5rwD4SifYMrcQXfKfFqNcKpSk75qyFH8fEqJpkyN1haNounL8LGGMvQB9QNCMnEEKvh1WpKsc",
  "key9": "5Erh2sFQSiKRzTesUvnEX3d5WsNhaFGWzBwrRguCmj5ZsPqx7G3S9U7MC4SZ2NBvmYySQAJ5rdJbLz4QyNktRMdv",
  "key10": "2oykTn4ymEXQsU56qatg7snf5dc73MPcCcpx1ea5zvAKkEsr5aosP5wfhnd34pMMgrC8XjKjy84ETCYpy9PSsK6X",
  "key11": "4yRXQzJR5KW3oUExG5mhxvgVSsTGJFynGD5YChWTGJFAfvA1X3VBPELuMG4xMkQDascFGMtTnMz1q29upmA9Vjw5",
  "key12": "3QdjPKpXXNESQqRud9rnAwk3JyzSwbb8MdwtxmTQQ3tvGesPArvAPYadY3zwEwpWbT6sRHqjXHdtQDNihEDi1KBh",
  "key13": "65x8jLftB3QWtAVcHzcGGQ5ekxzVFqzhRzjQMBoVJDwQMQp5AHYkLNAYrxswdL41wyKAKJkyzmVkFZ1hmJLEW1oz",
  "key14": "5CT6iYYt2DRt4SFstdXmixKPdm32qfJwQeKD1wv6Z4GcVafaB37LxjFhqGH7mjJw8cSEriD318jKHmcuAw1sA9zK",
  "key15": "pZruBJwESGLhMRhpzYy3f4mQh1vZCphcmXEgVjTR8QeqbnuboeR5WyZXFbEwaDUkPxJroA9ZiVNkifEHihkWwPA",
  "key16": "5jrpoX8hgnBRACJGoWK9kDvwww3UXfBfGeyrdQquBjLqacM22ToEXsJT6cq5ubSbQn1NTxd9N1iVvh58aeG5nvzV",
  "key17": "2xQXaXTyTZLfrJZLDSTT4YRP1VdV1CGTg34zXP4Y1kRseWPULgJBGqiVmiwzb7N3ckDdtzgHb8E53WB6tQ96NUzt",
  "key18": "4PoCrhFdNq5n7pHCjJyae9jKGqf7QALQTwwi3xYzptBZhhr6LCBYnPqsBxjw9F76k2rN2hap19P12sqrZKxWQgut",
  "key19": "3NhjA2MV97NyhqrkDZr9nn1hoGeYcwcK5S3gd6P1uQr9dimypGnACTYoXp6SccrtzdUafCRQ1HyUWWxXfJG63eDJ",
  "key20": "4ZWkRoFpuNcLQ8ig1tXJkrUpnm3mfQszic2N23EQ7SGVJab5mRZ3wQzsAWR5HKdrKfHdKatCKkWQFzsvtN436wEQ",
  "key21": "2guyghjgrQ18sU7or9uvRuTkoBvYEghegwo1J4xfDH83YksuDiFYNn2M5bXRkcS3HtjVNzXHoFNAFgS6VvbRLxym",
  "key22": "xyHx4dSK6sMcHCnZ4TrTL4mb5oud5X4Nu9iF22KCQKidW5itdZXKFUaU24rpNKJB3Xs4unfREuT8WgfyLfM7YkT",
  "key23": "49npVMLYb829fuHjDhHgD5Xnd7NDCoesAqhMc1V3K6qk2gSmhNvuvCPSXxztBQ9bVmb3oJPvhe86Uh1jboXg2fxy",
  "key24": "5kxWfEoYxEb5MFXcTmGGBG1GWarZ5FPMjwhjwDw6fVi8ASSawcnu8JnHoLWHbgfQji3uJWAU8VEkE3vPcmvNJaGu"
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
