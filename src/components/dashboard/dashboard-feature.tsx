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
    "5boTPLH3AhWDwR2wULrsprtFbkjszLenV5EWzazvN6dutgS6Z2smZbc3ZAnBfTAzLm8Des8vboaP1Wup6p9w5u82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qo1cCU2hmHXhMHfo893mmR72YWdaeoHzoZcUkMVCBYMi95W14jh2pSXr4fSHZkBwZPtwWQscurmYV6qSgAMaN9i",
  "key1": "5E2fK2V9yrGDsKCFs1kMkexrkG6cLJwGikFFjf3pfGtZvSytH1m1XYCZA5dd6MmdqXtrhoHfNMqo81nV9yJJGJrE",
  "key2": "3oAYWxHWnAK8iN4Hoe3FPzJLdiea8YxT2qyAgT6Y78zWAQAJ547sJHbLbj93Khwhjt82iUeJgc4G4wS12Wb7A7Ho",
  "key3": "4QTQU2Da3xYgPVvYLN1Pr8qKsHgrGKkmE5CGRUxdFsbXzLZei1Sqa9RpTPr4zbP8FXDavbUVEoWoL3PCHQWehPqo",
  "key4": "SXyrSRD7iVadzkqbSr69QUsVsHtg6Fh1xWxvfCJxwxQR2HkTyHT4UnS2aRs3DEBoWYe37PbYinZGpujVsM1vmrC",
  "key5": "5kQendHa1GjP8gtQ4M6ZcyvQHj9nuppp3JWLn4KcqLJxkEZwBs2qCeh4XVAPMLqR8BNBU6k77KbCGKs1ExgpnckA",
  "key6": "5p48sLCwJAWzsKKENcGFT5jkh4Jnmxm5nru7cjVBB1R8t8rwcz7n62Nzcpz8KxTv2gQwXdreYJoPNWNczA2wZQsu",
  "key7": "4BtMu4ATpeh9qBYbzHAkqATqNSEg2ecKjf1mRh7mMEcySiFEuv8bhnwMLPUniVW22TabcrbeKxh9CCmSo7f937ez",
  "key8": "2y6ivo1yA43f81jZCBe8tXzzSAoDmQuJzhe5gsHyM2yuBzDDBDeFJwEaLN5QK7UJah9UvwxXQPZrTyeLs8J3HZcH",
  "key9": "3pyU95NNHwAyumGxqPkDS2G9zJoKhQ2psWo96Rrq8Dm9ak6NwnbshbmSdHfaMhz6vUxB5x6Cfvfs6mU1XicMaGsj",
  "key10": "5hSAEJ2QexVgwYJMYH1LbdJ3HRSE7624xKBjpYLphZrkRFE35TZyz8DLZWWY8QHmNoTcNfSRQ3aUfpcAYhDsztn6",
  "key11": "5BdYKnSWMDiiHuCRFNUZxhojBPTBC5CpsDReVwRarpE5DzjAauFyUVazym1tB5pyM2vw3Cvn7E1xxM87Pc6s691V",
  "key12": "343W26pPDYNa4SGx9XidfnpMJbWrn9JtkpM6SeGXC6oWwtrJTb6owLGJKLHrpoDTmQgy8W1QZ2VFN1QeUPMifx71",
  "key13": "3BB5ZAdiM9GTYrzb6rvgfzbkx4A6BQFNyNkqgipp6ywJKa23EskThewndJ5EutVUq5Sr9y1aLUHUaPY4bVcsHB8H",
  "key14": "3HuYYQMTvFc7wLnSnctTj4BeTzRkQWFHHzU54mPz5Nm8NgebXK9ghTaat1XZajU7ZgytaKbg9adY3qaxnZA6tRgT",
  "key15": "4UBMymg1V4ZfkvuK6FJmXK7yUCKGT8ALrkFsBJjqhAqWqG2iN9XmHnVqy4HsufWWrrf6geGEUeU4T4Ci1EGQtBu6",
  "key16": "3gxuGz21xJDPaJr8zMWAcNCChtmZCXDCnZGP4p14bSt1v4meVApwZpmGEjYCNrNaf2Ggk3Z4DQXP1ESV2Tdy7DKS",
  "key17": "tXM9a7FuhcKCN9pHvnTeaBVaCPgtsfmXG66LS6DnqmUn7tMfvvcByZVxENFbfqak1GmLWy2d8Az4Z7Qf9MqT3KC",
  "key18": "5noNjqvxgqsqYxG35HRzhP3uFEGMkEkZqgDdteC1ba1ammnqaGTmxr2wa9tF3mDWB2za7TYTV2srRopWN4Vf8CZU",
  "key19": "MNCNKuQ831UBAuj4TAwWnETWK8voJ9XfEnxouj9Y1NuoNp8TxoFcP5EQjNPkkabke8pQ9sUQKip79NaqyNjiKfv",
  "key20": "4TfiZSDM7tdBSXF5qCbPTjS1xa8Rb7WujdAHD5wZTPNuG1gbKWWirvHKgCAA25zyq3VoPG3EYTgLdiEReY1gAzLK",
  "key21": "4qYk89AXP3pY5gwXwrh2nLfhivGFiD9waFHBSVWLfyCCEp5nT94KsDGRBpcjFaUbTDPZ4PKCQDsESt8apRTpqNEu",
  "key22": "5PXiTLG5JxLuyuaM1JwPFuDjp8mzbPfFAdtXjZzLgTi9UQaJ5bCLijHG5VQUBmsaRkg1J9qRzowqaFu4aoqAU7Dh",
  "key23": "2U8Bnz6FFDdHNi7FdCTcuQKY1eR9gn47oSURUvMmtDfSun8PF1Z286LnEp1MMpHfy3YrKZG2iWgTb4x6UX6drSqh",
  "key24": "5DnHcaUYSioshZNTcaVoEHu2vV474G5vppyGrL8Ze3XK4yBWq4C99au1x78QV2gvhmQCQo3ffxyjQ74qBVGKfFH6"
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
