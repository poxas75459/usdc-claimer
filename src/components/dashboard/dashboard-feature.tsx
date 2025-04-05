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
    "3MFvSgjLC1htYoKUwj7uJZciVF5HpcbaEUxXBFyM9RTaZtXh6Rj1PPUWibXogGwy1XVb2755s1Wmhza7GGeZCK8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r9vnRbYYZwJHK1mhiiF1WA4SEdRfUfuQJC9H6LAzhk2GhixC1WDxpQ3EhmSvtk9r1pFAWcFuhMQXu7LuyyjCpDH",
  "key1": "3HncvBo871dqPCriikgaJFra5sLFdJQeaPun89Kqh61pfSGEEM97dDxhMptfvnq8GnAUjsgz4WD4gSteP5mCgLSH",
  "key2": "5dj9KKbZWJdgoYCecaDchHMdatBQbDNaVPoJYwnquMFMC8bMLqgNmsmMaabHEH4AqRXqijsJS7umYpH8p2JgU2nC",
  "key3": "4jmLPugmeMn92djQgvXNbcg4Zej8ajafwzaT2pUkWusHm2dNnr6F5LHe9Eh9dzjf38LnwL9smjAuNdswipgpSPbK",
  "key4": "28a2Y1BRXDSFegHER2zJ1f8DxQ5YiCkrzquS51kyfwNTifQqcAKZ5Pxpg6KRr17hc9w4soVq7EADDnwF9PjSRb7K",
  "key5": "3NcdKHCTzgRsGJ5YtNmeZkJx1hTjfFZnt6kRvH8i11AtX5KVvHETRyf73NMtrA2FZVnboYbph7XvdCPSbhJLd3Cw",
  "key6": "21nk9o14pi2NB4PctbtBena9ARqK1fxtMa8FfUaCDQhfAv1YhNefm7fhkouLsdVT67iQjGrdNPaB89TNMNSR8ouG",
  "key7": "5jQaZfWC1XMpe6SLfgAenQr7xiSt7bJzJv85SxMCe3gtw3WSjeEPWevWyq6xsftmbh5CUAsad8FVXEA4bBYRHK9n",
  "key8": "3jAW6CaSBR7RuJRCwnipMwF5nsPibtVk2xxAyrcYWredq7QC5Tr1VX3vwueNE8yfspcLas7wDdhXJqevA6yNK3g2",
  "key9": "3s4ZuGhiPovgxq5Lp7VZXGTheYY1TEMTzuBWe6CmM23EL8ysPT9ypD78bBZPMQsu7GwrSZWT3FCgFcikhVEDHSmJ",
  "key10": "2xJQcxxadwqStXNh1v9zKwbs9ww8aNP7dNQ1vk1oMqZmfMxa93fw4yNFVHyF1guobVpUcTEz6rt8FYgv2StwnVyK",
  "key11": "2bstiMat1UfMccV6A5ePYhS9q15YFydDwAMARcYYnUF8d93gfVATv1L6dnbxEhu1ZDGXzzPNWSVenbn4sCDGPPpz",
  "key12": "43reYb2ywyFt6u9A3gSc2TSyFi4TXkNyYCtutidoFLUtqBcyfD1SfijDKXHxyytproBWaJK3yhbB8J8euZQyVaMi",
  "key13": "54roCckNEiWmmLEHH2XwAeku5vZd4LYnbewG6p6UUojad8VN8NmhjJctFgnwRDVhKMWFfFQXvPwEjpwQJwyjsCD1",
  "key14": "5FFxq1ewXKe3KCX2EAuKfPxKkG9pp2NTFa85sJMWprGjBQwcuCHeKdv3p58nQpxAXwiaYN5RWJFLCDZ5SmYUZXFx",
  "key15": "39akEBXfa6bK8J3JpUBkUdiSvqU3nhYBgLM4hTS9VVmBwTsC35QVK6Wtc4PEkLLdMNvnTorUBtdWwMun7G7BYDG4",
  "key16": "2iJ5TSSqnanorRNVM3YXw2S99yBbPuzj4ywJtREcf6KDQ97XiLN4rs4pjicPQvvJpWAWnDsX394VTs4amMv5Hwcy",
  "key17": "4vCU5otMJJjM2zAvyFEP9RpK8pyyKKyVTfvPbcKNkQ76bKC7V2gtFQLVe4aPaVCWfeks6S8Pym3R2Zuq1QQsjZs6",
  "key18": "4op6WuvscryXz1Q6LzVg3y7AgPyigUvEFGjijE1Cmhd5iwDbWFNuPy6zCofqzybt7CRrLpcVmfEtT2x8gg8Zzsjj",
  "key19": "2oQ18zTXvqGBxP2R5g4EtdA7MjLabButTM88x1UFBZ5X5FjRjLvLUw9juDBNRFEXdEkuEezMfRr7LsEt66bJGKcf",
  "key20": "4LEScHxpw3wixSvu1e4xdzpgCd9nkevhiiyMQ4i2ENGoydpFaghh3nnyuoKkADZsB1zvYCemTXtVSJ7FtcWSjHDa",
  "key21": "2c79uXWzeRbaceJQTqpWoS1uQBkaGr6VEdYqYScf8dSy4gFjXSxsbULT9LQrXrcy7JfpF1BvLng9WV49vpwNTuEa",
  "key22": "3t2F7mtJGiDxNVvPBYsWDWhqPz3Y6caQJPLXoC3JBC85bpBCCYomYHoUA6SmeNqd4WsmjRRtsmheTwptoK3HHfKe",
  "key23": "4szva4kZagRnmSp5S16Wrbiu4ZJTavrnky5UbgFXwsQdLC72WMTweFPZjnsFVoUjMAUu6QMLsuRYWB5VdQETB5RY",
  "key24": "2hmCzxuHHc9BNfShwDb3v2DxiGYyjSoQskNzpcPbqFXy3PBzYqzhXu6N1qZqKELt6eAcvYgRnphB2XREqTfkWC7q",
  "key25": "5WdLxa5uGrFru3Tpee6HxZRrMGqzs2behfsGybrGD1nizZWGuAoz6mygiTiSoh7oz1JhQDw5krqDkQLQb1eyNKaV",
  "key26": "2CJuK1K5iXU6tDnFxBNEMNRJ9qTPhzkE2tS82e6NPmsPkwC8jH1dP3uFLeunY363R6eEoMgouLMpV3sVVEVE8JpZ",
  "key27": "5ABMddbSwNsjN2h1KxdRcNuWpEP8FYKCn2t1UGHcRcXrmBvSF1r9qHczJieSquGiDg6vFmAHE88KYqAwzCXRmeFG",
  "key28": "53ENAowa7pZpY7XvNkHb92XaDa9irKzvP8QwfLMAtwuqZtBZKh331hU1YmmVNv3jZahfUhLwiL4Jwa6rcMvM7NNH",
  "key29": "5uGCejHPbWf9k28rCYVUwoz6pgtyeH7PvGRrtwTSrmiGfargu3RGi1PrirKDVWckU8YtG4vCup5uSt5TsPnrPagm"
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
