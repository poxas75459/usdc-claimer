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
    "3WQkX1rVBUderrGWShn5HLBJhM61PULC6x81PUxUzjwR9eEvCRehDR2ssFprX9n1MtezeZ2rNZFU7FM2ohPWtcnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z3oVDrNC1ep9XA238KebLCH3wouHTDTc5c23CYQJ1EB5vu1VBmcEnF7Rpq2Zr5MhdroxftCqoDGs3S4LXeLfhS1",
  "key1": "4qweBrK6nva25cYPGRK4jkvjXdUfSiHM7Gb4yEsyNLF6jg72vVpP4K6fkrxymHS1kaBDaVgjHM8Riw4itiMqLpai",
  "key2": "DdQVqPdUscdd8Zwfm5qndqRvuKygGfnceaCM7EznjssMC6AqTCALiTRzwRUayZKyYje8rEcfYfcPy7eJ4hnb16x",
  "key3": "GJYmm5PMGGLasuQxKCu4Dq9AKsb6SUW7368Zqkh8rXZj3bGXRYPY1wykmvp5BHXjogjZzrxvsDxMx8KRXDWUz6e",
  "key4": "fetd8EXUYfWXuKy14iNWskSJAyG6vcuArbBQQrsxziADuELRdKks6E1N7yMmda6R8r72hq2cZuvd2nqdumPCovF",
  "key5": "57eXqqq1GcDjMFCVNv8HvrcdiH5NwZrKxzQCUuDEJkpvQiQWdvQd7a68s95F6DEdE9XzZzTXky2wNp2FwRyUovph",
  "key6": "5hmDMyQqV8tvnSDm373BuiwfyjjxG1MgJ8Fe3T5aT7Y1VAw4EjkkGLy5q169fKpEyxBSc1MoTSKmD2VA9nWwd7dg",
  "key7": "2cJfwJ3Z9gzyFKvbM7HhxGptqdGbUxxiKiXnDpemVw61wNB5hxj6Z9xKjQHja8nz55gNaot45ZBwz4XpYdXRaQzt",
  "key8": "9MNf8fJjr1V9Lb1FeXB5AdNGUdaxuv8AeGscK8wnnNFn1iPY88YbLL3Knw9tHoSxkvHfgVAZG6Uy6PqL4qfbTRm",
  "key9": "5qw1kxn8u7meXDaYjr4i6PqGQo3MFyynqatYAyEgVVkbdaMD5mPwPEMPxdR9Cb4vCADV6ypvERHitaSCMPjJbB2h",
  "key10": "5SMRk63twKyV2dkDZ6gGy4W77mWAs14tphSFFSDEUjxzZWwsgLsP7HsiHXq477HoDJoLT9qpvswrjrBXebCFbJHH",
  "key11": "gpe2x1dph8p5TznR4CY7tLZf95m2sYsQiTZRZGGtHBGhtzFkmMioEa6pukPtSxBuWEgQoMK7Nb5Yih2LSVf1un9",
  "key12": "2y5Mc5srs5f51GtY2hXcVtpXkGeBr8zCGwHLMsrQEwQ9KHjtUQTBHCd3FjRPCaSGoLBcBEWNQUAcoDX4cgN1Zfdo",
  "key13": "3kyjy3GH6Bc4EcrK2LSuy3DHXJGRgnQ6PxVQjftoySJuwNrk9dyKLSZS9rhzxXYhJVVjbB7ZbRJTahRiMdzd3CBq",
  "key14": "3w6shhpPC31oYuqKZghjwjPsKdCVCnYWiMfZaNdoMXZ8KfSKTYKMNhpt1bHkvo2qQWJKqT2poH27oGLKL7nhsEXK",
  "key15": "o6s5rRZxwfBKVrRJEZVJnZHMC1uGj1ec4hsS9A53dZaMzm9vDExUSA75PcgpXmouz29PoHdv5dg3RXcx1Vf16MR",
  "key16": "oXVm3C84ZdygAXTkEhkUJmvvdAWfi8EWrKX5bPNzDhZ5ufWGiCFiyf1qPdTEbRo7NQaMrCtMb9d7NpNZA9gaC3T",
  "key17": "YXAQjdTFBQPVTEaBe4ZfA4YjjRN2TdSCkGQAKzWTRGjT71pjudxjhjNYZVf6MzqwmJSkiXLjGSRp8o4sNmdhnJX",
  "key18": "4PVgtiGAgf5QBWJQdfdXPa7LDwE92RNL5UndYgJheyinEsyPfr6MmLiKL1jqhP1rUjQTXJik216PrKoQKiCo2Fqs",
  "key19": "5CM6wMvWzpfNeknzJ4PXmffd1W98RBHH1qrGbmxEMxRzjyvGiLadHfkYn93YTHaEbYCzJKPRzKVjHqsQ9Q9W11Wt",
  "key20": "4mz1RpmNUCj5bYUCZ26xvyJzFnp57eDQnbU6YAidRBnZ6D1QYkzAWi2U4hzcLVG6WhQMYBYfzRYf924ZQauXS8Vp",
  "key21": "2emr6KbShYAaU56L9bxRGvRv1xY4LD2BrRgtyDj7mMUNM8AtC6LjJ4ADq1e4ayAh9erseCcYKixkNZVJrH77N2Wx",
  "key22": "5cxYPoRMGcHMeQEudiFDBTz1LdLbyJe8Gz9HyrceQgdvAgjPBFJA9p1jUVFGyznVsQdQQK8xh6JyPNUBUVVAKXLT",
  "key23": "5Y3TCm3wCE61mMZ9x5DdYz4jk2MMigzjYVqwn76aW6VETyFLZNoq52stWbvhL1oA5oDKLayAn6xjTD3AoVwbvtdB",
  "key24": "48BPqDJACs1Y4HAocVuVtxSBUyQygDwmsF1ofG9CUmvasCojaUx7iuWMF4gDkRVUiSiXTdz9YktU92RP9VYgTmpF",
  "key25": "5PCQD3WLyoDBJB4WTFjv5wanm42pbiBj92zVwGoJMJ4cdy6fxFmEb9U9g3xdiuV6LLHo4GW2SU1SbfZF8bsvEvPj",
  "key26": "5W1cPFkp3zv2gQabtv8w1jDQWuV9sKEHbPCRXW7cUxf88Dx6KmRrcsWYur5jg9XAL72EruoEUPtdZ3NGCZ53zBFg",
  "key27": "36Mp2t2bQJEjHT5dZHT5RgepKEvotcn81FPWSsHnBu9pD8aArGTjfEPMPQbSb6s3QYpgwfUoq1HwhTvXqGEbciSB",
  "key28": "PetQCnGsTSmBKQ6zAigAGXnnWC4vbopsgYgyAW1eWgN4WTN4NHTKfDa6fUJx6hGsGV1BwnTLKabeQuGyZh47ZbA"
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
