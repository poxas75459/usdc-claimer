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
    "2y5tcpCAbuLsgGaP5FF9ZLT3h1jmW2G4i7x3Q8SrxQXQ65jkkLWnUZtPq7PsD1DYdEF5tzZHM13bP9GLLVGN91S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5Vyyeswg6Xo8jogq3eExfKakhUNAp3f83jYpR3yAVCzsGcWkssVC7QamTWnVRJnZLDEFKuhrKAkGWjdJWVbLzo",
  "key1": "3pWQAqmXGV2pRGYF1uZXpVEbJeJWPNhc3WqcYX12DU61MLQUWyMHfrYQFQhzfUDdKFsLJuxo6mGCEqV13N1dWMax",
  "key2": "5a9B63s46Xi4qTJVQ3TASvvqFfN8UhR1JdBvec3gBA2a3hwfFS4UDNakmqNBHdMmK6qg3WthzJJk9kNvF8fYahPL",
  "key3": "4E3tb1jCgSke5dDrQfFQ2tJ8bPBE2NGvexooc8X4dLkh524X2HnkfbwZMRKMCnS4Vk1g97gaJHEQVYEKCfMnPAhe",
  "key4": "4tmAfnA6jUnWaorZWqfUh6cArieM6o32UsyMgu3kAJt7zybWNru2r1GQqNvBqVUYx9aywQ8DH7e7iN5iodyy3vM7",
  "key5": "5RQKHpp1WC7FgkR6aSgdamRwgs64h3VhUuH8BnYmEGZjfxtSaz9TP7qioc9s9fPbidxA1SHhCw7hWyGXrTaaYLPJ",
  "key6": "32YUy82fKgJ9CenFrNPsd4UVhpUMg82vvoVhx1PTDKUpouhaEuy5DxkY65Yb2c8AiLwgU8oJ2qoKgR9pEYZ7MUhL",
  "key7": "3FUzGE9xzRfY35zHpgmioefbp2agc1tJMMDHdYe9GhxqNo8yZaBFLnCqmRku3JfGAUpxsWsmC1h87wiW4RDbPdVw",
  "key8": "4aVYynBy11bcNv6tB56uqvHYRb3unrBEcU3dBrmGfXaNWDtgZDAdkBhDPx6bmeuRpeActF2AdojGhs3TAibgWcK4",
  "key9": "nQZWGNv6M1rNq9CgKpAu4mfN7p5Jm3yJRzZ7XBX8ygWk1pj6cQLLKFC6QAXgaQ7aSyhE44aFrNxNH6RhSxjKmmL",
  "key10": "U1TcktUmomYzfyukHbhMMRwTsjwY96GLRAFP6bRJrwVuvu1DkbYDT98qsKbrHDSxWC2RLmc4SfvYn948TaasnGj",
  "key11": "3z41niuTQ18sX4DequVuJgBuPZcyu6hgU2Vi1YEtCpbi8WNgmsnkQBFMjnTmcp8m7XM86LURFHaDXgTLymfNouBE",
  "key12": "3AuNqMyUwF5JfF4JMAq9jbg3qc6w4rqsa56iXX7M9qRVdH6xchjj5C6ukYx6md96urRP3EBZQFoyhQnS2Jah2Eae",
  "key13": "5mdNu92t9qbdfncUu79DjcvsuMNKhvXS8jBp2Jt2oA4JER8h4HNPj1UxFhSGqfiKvhGVV5sC9KkWVbpsp635LNW6",
  "key14": "2sfz3PrYwCbeugRqe1xck6iDxCzmvuCPgzXPBXp9Jy2HGhJkHLHgpX7zAU74RxuhzCYvfk4HWMoGpCKo6Chitwgd",
  "key15": "SxYCNnUSyCMq6grXcRGnagnaDi6He5bE23b6jGhfLUuzKQAq7Shzu7EgkDzzZvdoWiQihrA23dWPbpym8sj7KHx",
  "key16": "2PaRdtdNb9mmNdjGs4AywtxN1usBPRyFCUteJvSsDtJhSfaBVhxysXdkzmEavzo3JmbQugKaL5WkqBWhg2qsQe12",
  "key17": "BJAzp6JmEASkdrwZTpxdPk4Y7VEoatbWLAVPKThPdX6DCsAeiL7RVCbgfmg2zYYV77RJ2MZ96pDhRHXf6q8725W",
  "key18": "5ychJoboXCNfXS2XEaPByhr7uU2cLrDX6hV5xhhDWwohPJ6L1j249aDiEZQ4LqDCKv6MUeBuzWJAQ8kXyDdPaErB",
  "key19": "2rRdB9uteNB5cauYGJtjGYKP3MWdyZ1uWUw3RRYdfQVxgy5vFsHjqEGBnwShspa9Q5zemmwgcMikpBWfWqRssn2j",
  "key20": "2vq1GnvgA4oNk2nRB3cKvhp1Tw49QLT8N3A1CfKfzvAW1jXLUxLeCtH3EHmkFFYySxjLHTERbKf3tgLTyTZQcySr",
  "key21": "4fdGUdxKvnD3BRdoygg7nk7g7MgPti9Nr5JCyxzMeULd1XmNMjWnRiTj33rAGsQCkkAcSg8bDxfMUPXKfZeqvLHo",
  "key22": "4TCMJck6Uict1jL3zWeMF8S3cTArL7urAWvuV3nwiLx4JqJQUhGXozP28LGwD7BngdUHoMQQmBKpPY1psgSkPa6f",
  "key23": "5RdjFRqCaaWfmbLi6BsYwddbvECHchHcTnUA82ksHQnbHDsr36mAMGHNMRnX6qphyPma9TWsLP4LRRmYxJDgFYZp",
  "key24": "5jg2ufzq4Wc6eBz3z9ERnEVfkC6dRDSYfTcsu5MZqTCuTQMG4X4boLzGh9G9qHTX4bG8tPgoNWLNtFgB8DdK1emc",
  "key25": "35ToS4uEEVHHxHNbY2PtN42e3XuaUi7GsTknVjtxWRSZKcyzHb32KUJp7gcuWqd7sWjifjKckbnuHW8SLcqmRvcV",
  "key26": "5WHsrkZ4DAUHSDj8BMj5KdLevnfC9V6Jp9nJvdCTvDiNKFGndmJ5qXTtbPaxqxpaB57yPHkjJAF6gBG34BNUA2Ws",
  "key27": "2zWFfAdBtsTnrgFc2FBfLbM4w3hHU6La4uhSq8298GXZkWZZGguk5B2uXUqKrFfv3TT3xcE4RtxdwDcoEQu9v6qG",
  "key28": "foUkqZgxB2yhF8HHnS9Bxb3vxMzkuJgKYgsqJLaCCMdQvWdw2MfmjmuQiQy5r6dyYP39RvWt5cbwepD4Z4oQrh7",
  "key29": "5GRSQXsmJ4ce9WmFidwJd5xLvaj3xLP3x9d9NVkxaBNfjYdfgD7SbFtspJjpbAag2AF4SseHonoBRq7jo7X5tbzt",
  "key30": "3efVN3ozVd6fqPM9C4n7JFpW8V6fhDC2ZyocFvLsM5hwjhHcU2A9E7a2ozT4rhRYqWGZZvjV41AMK9AzF9kyicca",
  "key31": "LDi7hfSF6XwANSzWMn6qSJfrR9Ho5uC278HG6TY488xNDNJ5FJUXZmpCYNj85aZhV5nbejUUgjZMjBnnb2NEUEc",
  "key32": "4MkMdetikoHD9zsubv1wWYiwqoLrxYj3pvnTwmjxVuQtHzvZ6LNMGUkRHT6BzQEAu3SZdwa8rNneqeARDJBYzLRz"
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
