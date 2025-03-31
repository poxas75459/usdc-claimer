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
    "2GggMQRtDUw7cJNmv1XVpaRYGBB5goeWE2RdhKpNrsR8FgNxhN8m87EppyrJhs6r6FjQgLDJTgUGxXSpTJKGDcBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpgz36T5tbQ643FftCh48AmVsfE5i7ousZNwd4gZpRLSfXUk5HeUp6ngVkphWGMuExncfFzBLgaXPP29MNeSpsU",
  "key1": "2p1dNS8HANhpa6HAuqQTHTJy1YifqRxAp7epQ7xELmL1bpgi34ZVeGH3befqYyiFb6v4C32RSChR89nC8wrXHe2V",
  "key2": "KGk7a648G3YveZTD7Q6edu7QzEFCrjkT6KbPwh6YuBnkXgbEUkn6CQUM6JRhDAkv95mByu7TA74rJiJGiNKwkc5",
  "key3": "5MBhUX2zdPUdJQSfFrKWi7kKXVWYF1YDSR7cL7dqvX5GJgukfVvyaV8vX3PPqn5fn8E3HHYRWsxz9idzTrCVeFo9",
  "key4": "4TQyqX5yZ8oBYmpD37ChznZFTiPaEaUxrEn2MgyvrfJfEcagDAUCCdJwQjcEikp2ToEttmCnFMT8njB56oj8m2Sc",
  "key5": "jw1zfYNnVLa8EMcanBn8VmVTbUi7e8jQerxc1qk5sbQRfPZcJc5czonbirG8jSpfQjEvuEVaFxMmiqZMSYcp2Mt",
  "key6": "567icociFXsQgHxx6DHvTA993rujfGVdaqbkwiQoGSrmZUCz1vRp2YDPG7m5QAN8WDuaqMfD9mQXCPEJXPJRsTY",
  "key7": "2AGrZoPwekch7izETKLByT6F1R5EhEX2ze6kKiY5jU91GE7gAXN77aTz8iF849MXj3gXe1mMdD8ujCKJUykb4Rz7",
  "key8": "3xDv9NZtTA913fX2CGRoQ56aBSccv9m7K8W7ZAsa52k6skYaGVG5d3xEun31nQ5okhnc52csgsaBHe7xd8u71SS5",
  "key9": "sdadcZCieFtCwzQK7ZZD8vwdhBy1kQoBw3GjRHicjZNBFvpcZTxkbhPyFAmskNgrVNjxf9bJpwVpcjRqtfx8vrf",
  "key10": "5naHw7t4o9oyS2dZ1cjTnzPW6W5egcZLMrdDWDLD35YoqdbfAxBCfDNei1w6hG9DWo6HBMKi9PzonxkgXhLXKwKu",
  "key11": "a6eFYawgd5diB842WYGt4UAvu9EvH8Pa9p6Gh9z8i8r5FZoVNLMRuMa2EqV8Z5ZnfjQHiQPQcBBDgmDZW1jGCJi",
  "key12": "HnfZ5Fhsz9pkMusZcJRH6gJuqDA6ERyqGUoiVysbMm8mqo3KLYcsUrpepGbBFQEC7bxCFcRKFz7zNXF3hQhJNT4",
  "key13": "NyRaWCaXpEjDNhdfbo4YvTh7ueEb2SMLdKpGnJWo7GSURck3AEe1DQULqQigdLXm3GmWxYigSJNy65crftRRD9B",
  "key14": "38tXzxfVxg8nbaGNBCXCmx1U2DVQX6MuT9RJWRtKjdbsSFQSJEn6wtUeWzhmHdLRxXEy5B5QeeRacFiXAmRw6Miu",
  "key15": "CS9aaVmRAnaj76ccXor2esea6FYbKQPphMbe2Eakvsf8jkXScUzTHpv6JQA1gE4G8GWofs74jNF1EMUBSukyXGT",
  "key16": "4nw9AB2nPG8yqV9qizwGqj4jXhymjyoMKMBMQot6iYFGrNHaUNphHkpuV9ATzisFzrycghRWp2zSQsfzEbyQNJs",
  "key17": "3soEBENBot4Qp6sGbMMmm9ZBHsbjbz2UpC6b1pJMYHtSSJmimWUz44A8QdFxPK1gqYVkD6NCAZzf8BNpVJdywHdT",
  "key18": "2WDyC4EtNv6ym2b2PXhkPWfaPkw8JgnaWZa2QE23QAwMy1n5ty6MgoN5UvtQCi219h4Xnxg1vs7oEdE6R91pMbae",
  "key19": "4pQZobQmfCtBCjFEi4bGLSW5dM6jv8WtfZQCRPPNj76EhYsPJcRrKZJV4WYJhqEMEnM3tmAufcQhhRdfm7jUfRHm",
  "key20": "4SqvNhi5LTP3ns5Aj6FZnWoZBgLqwMD4ygGyQ1rMecN7TwnTPLoprAsYJ9Lan6TTSyuJt3DkZb8iNGiQ7Vizfykt",
  "key21": "35xTGG41sSEnjYKYgBZReXczYDzexAxHKzhDXUF3SMECygHSoTsyJTckSjQkJLszrpcPNRUwu1kd58LUoiM47tkR",
  "key22": "5mPHncxvnDG38ZAqsDUwSBceVo2oh4DTsFAyXuArRn5AbbXAxsppnFeNsrDXrf5VihEzDKA7eMgAjVMtzgkQ7Uhd",
  "key23": "ZRuMsGzD1mYjczmr2FuUnp5DULtwK53bzhbCMQRVXamcUCdYswBsx7rGiD1QX83MfNPtJd9Bscv8FxntnULMAid",
  "key24": "3RDVePZmVWVFjzSczb9Vj1L7pBj89boFYhvpi9MpjasowK7kibUFMSRzJcg3BLguy4K4nkxmfrSDiPTo6jsYiMNm",
  "key25": "39LvQ4LamzczwYpvk6Kmwcz9eRSHAY496nE8exUXmhxqgMCZ3A9bywdm5GbFemMuDEQK2z1GjmbkRFygCr2xw1eY",
  "key26": "2FVYttJGqhKsLwGNSkGB2yyaSqLTwiJZRVaCYexysHJPDFvHD64nNxaE5Fqs5DphQrPd97MkxfZwdrZioV4ht9Kn",
  "key27": "bAsTJUFkfQjqbcum5uccHse9HS8E5BbLRjHAuiFFQP1fgg2dJ6BS3JYDeDD6uYkwC6PCgnqXCWA1WaEhDaSr929"
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
