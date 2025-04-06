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
    "67Bt7n1t4Nedh9EbvK3haFoTwUMEzZ4zVqR8ivP9YsUBmAjMxxvnZJTwdgRdZVjsE4e5kGKMjwVWvPMaeT7HaLqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwpJXPvnwSCSH141uT3RUSqZ1wXYVfy6HyQmqxpsaFFVofx8RE1ojL1YMjcmoMVNiV5PtGmQZxYX3ramdVxnLXd",
  "key1": "3SuoQ5uRYgdRKrnVR727ffynYkU9yas5thbJfj8vtDoLEyeLVT9vB4ydf4sxKBJgXdZ3JeZu62AXFprPt3mYhJ5s",
  "key2": "5F9q6YstfMpKMrKBEAnwiFWbX8UM1RrdawiymtEDvUoncaYv2mVaYeTK1CrJvdxVE1eRm8rysc1YVe9gBw3v7yUG",
  "key3": "22UnhBC62iXuU1qbdWyBsLQbJChRTpCFqjNvgdDjp8va2QVpb6EyEL1gE1TeEPu6V3h8J1KbWKueV29v5Yz1G4B8",
  "key4": "B1msLW1fHhaBuVjoHEDN4HWcXcGuXnF16cWygamPTGWCtggN5bkFq3n9rmHkDzB2mVU3yVHyd7oD8wZJvaH3djT",
  "key5": "3txM8S7xbAf1D5SPXHTtfLAtsZyb7gLhgEhf5Gv5oicoX2cj2TUugidC8FwZzZs6yvxrmJg6n9sAgA7LHLoseEWs",
  "key6": "2UzE7Qo1vXELFbiCLPuehA5tGyzFwDHfNBm5FxDLWgCv6UkahEpase1dUinRQWDAnFtCYDxcjXbnz6aWNDCzK2LA",
  "key7": "MRzaoDfxgmk3QhSUss15vy96yaA846s7Jq7sCaxEXMkuBv7HwJuVGPLr9zJTWb7kkeSduduxWqUSumFnLAyAZAs",
  "key8": "3NdVGc5DEmeq6WjeTAb4Sc7KfvARy7fst4btiHQNdw9FCpss6vJzriLAqU5VGipBn6ED42D4pDJTVrtmvf9bPNr7",
  "key9": "5ui4LVAHz32EvLTVGnipe8E7FUc2Lb6vYu7XX8ArE7VSacxt1VJvH6ew6v29EEHute7mBdos6hsPzkygkrXx2BMz",
  "key10": "o6VQ61oHvLPWvSbEC8bUDDzz5Yke49woATaRjju544ioXoG6emnhpbCSTEFtf2pWuc7NX9yy2zh3kiYeB7AAnF3",
  "key11": "3tPqLt91itoUdbimR1TDiLvcYXuGVXcbJjLaWpfXuokKPL5zqA6V9ocwQgxv18THLUhkk6pkrod4htsTGQkKZou6",
  "key12": "3rwkoxxroRRpjpDzVfMHKijjoZJYiCTDqPYxMiGLGXWaVXTFur17uFA5JsKHfk87wJ2LxrBf1VinMzJofAmWXzfN",
  "key13": "4gF8gi7A9JCdnEF7mNuTHSAZoxP9FK8JmxE6xS1e3N3Nh9YvWiruRTttPY1ruXZ3DByGxVzS8RmRMt6AA2WVoPcS",
  "key14": "5AyzbtCiNGcmqkDZBAmGUgXzKvg8C6Ty2ugUiNWvd75pBHsPoFhgvTYUeKudZMaKcx7w3dDr7Fh7Xs9FnWM4c54k",
  "key15": "nvXvTjvNXVQrdk8QkC8B7Q2z9XMjpLfQf7aXweBqQL6h5adpuRtSb9xJr9q9VwmocNirthQzxDDPCqnEPuhGfQJ",
  "key16": "26EjsBfL3xkBW8wxCj5mbv1Qw4Sv8tPrgNT5Yv8fCe1oJgpsbqgq9NSA1nY4KZBkK1n38R49dcLAcRULqxqnisgM",
  "key17": "5Nn2dH79NoK8xmgnK6PQ4JJvP1KrV9jYkVpFASxGsSyaAn2kmnHno6jU7tkozWNb9eZQJwmRPUuBfCb58wJrCF3g",
  "key18": "ZEhke4HQ4zj9SKMCscJfcoT2JF6rPBtSkLWamQwvudeujDTHXNYTDUwdZeA7dBnjfSRQQkdPx6VoJcdsqWU23kU",
  "key19": "678ndCEXfQi7TXjwngjYLPCTtcmWdeUXx6nQUagDcWVkX9ZJ6bT8ZY9BWNxsFQxP8wfdbF9J46M4hiECrp4RVrVM",
  "key20": "5f9tBzPN5htQMLbuydN9TLeC3iLeFFaQjpgPF1KZyYTUsXT8Pbd2aWpvaYpB3Kw5v4puvspuh1E25RdxwqhzeKgW",
  "key21": "3xQ18XoxSGjDqNuFmUQCmVGL4kdVNEnjSWX1X8qmVRENJgCQ8qqqgpr1NLQ4Uxf4526USuY14ycWEMtD5XJRG9Vg",
  "key22": "3KX5EZ8SqiLYNpuR18rktPXWfLPXMz9kssPAqDN8EaHwHnsZ7HR4CjF81dKJAoSKoWe5oeSno7jyAV1cM6ttnL7N",
  "key23": "5MuMcAzHuUfbpi22Wxs8E4aVUUpYotsqoorQoDRb4GSH1sqepeo1iYLKmgoPKoDxW25aR96GjcZUDFJ9cvXtNZTe",
  "key24": "4PXJ68zavUywZ9TrbTYzBXCNqka6LrbUp81K9nsg9tezKasdFSZcngUmSQiQHQUS1cbYCRvsKUWXxuA78PidrKVB"
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
