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
    "32k7ndmCfBtDdu8T9sgLEunEgHPTKSWUABfhg3s9dHLBx5yNLKZoDNTPfxvUpSUDu4uSx4HodUo7Zn13cBHr213H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VRMgvMKZLryLTh1zqdqPzCiV7gPT7GdD79LxcCC9mGk9YgazEHAamFbvNx9ENWY5Q5oNo2R5vF2gDRXLKuhosb",
  "key1": "ygKRkh9LuyvZFkcDrpRq2LMV26CYoo6WRca6M8o8Zeo6LaxTPSQ5f32N5oKf7PNGJYNaB7tM7XybXKSyUoVovzx",
  "key2": "3KHh9S4oSMuJ4aeqDzCtGUA6bC3TRGVCFZvJA3oqGhMsKj8y1k2gyrCVt819GnPUauymtk3TU9LsPerGYpLBvidB",
  "key3": "3SCfbCAiKnV78VaPDZm4MgNFFQKgiGgwYJajSVcEmhGdYGPd7gbrecTrQAki9GCN2DdcwbGKtUGLbm8bSyjsLQQh",
  "key4": "HDGkE6zpiA5XGBEX7pRThEcnGV1DRrvZ2AHKNbM7TG5xHEtvHm26Fy5xcLXuTSJBH4Bmrj9eDmuzTzzMhn5K3kq",
  "key5": "MDqE7a6mWginMAV9EcVbD9btjRsrXASY5DNmGJwiGMbkLy5EbgEmgQq4cjoZeZZ6aeGxdok5GGvM9rEoSjUjuGz",
  "key6": "4RP2cFrK6fS3YZbvVJhxMbxdniDmkGNuACF7oww5vwUkbZK5YXa7gA3Mmk9sUGN8UsSSixarMws5itiWzQp3Beeq",
  "key7": "4KwPdyzxABrPxVUrijCkC84ywN7nHguY5eyq6UxQdhuWkFswe8sTXsazX2wcwAANaoQ8YvrrEvXNB4xNSebz3iGY",
  "key8": "5bSuV9rSPB6Th26iXPDaYzzmvaJaHPZ14Qw2MbikaZzyJrGtEsyUDJosF99Tx7FGByDyt7MVwKToyhoghwjts3mh",
  "key9": "bodscDKe8pE51uP4yEWFA4yF6Z4YtEGVLPaYmPxHtf74kQmnX9EeigrweieKZSnyGuT1uCbwyTY6dj4wV5CRVPk",
  "key10": "JwnuczeJoKrPRiCetcScmXrSx1Zmqt2MbLa9nXsrgRR9CMr5HLEariSdFPTo6oZJCWCtzjEBauWSbDd2KTCF2wk",
  "key11": "rLwKc4eXV3psL4WkcniSJeuoamVvQsxG7LCm74vwAeTdUbMnoK6myQ86PgC2uo5yvdmEseBEj1Xe8Jk8DsBNi1j",
  "key12": "58a9yRhHZoB3pEDgL8hbEnzqd4TgAju9V5Fo1X1AbKKDA2aZLLvAxgeHCQVPwXPuT4dCRCh3BGcD5kRJEtVoR8yj",
  "key13": "2LszYAUa5XeZn6aVR4CasZ89uHeszPR2dmAxc9WJCPu6hjVB2juYjw9JaQEyVEAuirpHBLynDbrMB4tgvZLwKiJj",
  "key14": "25Yyd1oLnGSMqYuCMzR2FoyZKuFaPronpEdywApVqwLfpjfVGkCMXMi6hFmpveEnVNuTFjqyvXZcFoZNQePzyqYv",
  "key15": "5FzPsYPeZQTPDyVnhY85CkqyP4iyLtHuyrsnCUVjwBeQSW5KJcmVbmZ4H2kNV7jwa24SA3XTPkXEyRXysgkjbUE7",
  "key16": "3XxmmeuwVeqN4pZLXD5qqBFuRiF2A27QVFe7pCFJydAnzCPe7rqsdrgZ2a4nVKr8pTvx9yhKDKybUMkGgV7xsPnB",
  "key17": "48PiZ3Kpfd6rN23mbD8zup4UEkbLJLfYAWAGpg9vZZduVU6wEJzWMeLy8Scx8AzhkFf9YmhwDueJokMjyPntHX2g",
  "key18": "4XMWsQPF77gcz5Ux6LWu6FcEHfxRAhDvqSKWxiMwKLtuWnTb6BEFXkpakiLkkVjDurDqpgj1v7fQrfpMn6aiowQd",
  "key19": "3E9rFCWbwdhbLYRbgxWa7TaqiNjxUFGQZ6xa3xsEyySiwXogLftxuY6KEfif8DPk7ZWAqafyuSksBwnyQdEmQABY",
  "key20": "5nK8qMoTNjccVzsbEMZbgSQ4DqEVtmg1Qrzt8KdtSxhP6LrUQahkwtJEdF8mG92H1ycVkXqRLHgwWQ74AJ76e8Z9",
  "key21": "yEDk19VoGweP4KnkWSNpjwdotpc11xAAC4a9KvxAU2pMXKdJGnm8gaLvwQFWkAKk1HRP7vNpuRuQWiPB8AYU1Et",
  "key22": "29mxNv3Wu7s2pQwRf7BLXHgmnZ8fcFWhrKa2Upq9aLscz97m7NBe9VcuDD3vqHfgzz2vBLHGmvbZC84oKU6dxrse",
  "key23": "5MSBgofB5WmMrfKRr7qG2ZEXVKUXWWAEaTsRLg7MfrKn9zM95WjgRpYdgFEfMqVeEqbFhZjprsjYi7sPSN2w3bHh",
  "key24": "3r7FJm433ucUXqKe6yBNU8G2nFtcmLo2mR3k7djkaFPeMmoZQzMKHbwYGLawwPzu8vTtWSftCjm3WDnYSvjqruQE"
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
