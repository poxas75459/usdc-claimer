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
    "UawCfGyebm6rexHWrbtBqMAEnejk1voqDQDck8Ax3ketpPfYqXmHNtAEPUxEELMLRFrGSoDBA8vR3cJBGnKuUAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnaHRvRFggESzYZCoqht67mUC8BW1tvwWxFChdeE5NpefZhV2NuxUy23vLVtn2y6aBFsRBoQH9EhPemWy9dDoXB",
  "key1": "3Vg34wg2p8rKnUcuJXruHq4FzpEaMgRWtaYvbYDpdkRjjouUC6Qqct1p66i5BaRyyRxDPhtS2FvfoEof86VTGmGx",
  "key2": "4tvMNWS6KJeuWqLPY4gboq9VERVR9ReHS1aM83t2ngqTpPQYtWEa6BRPpL4ZmnCndQmeQmiEuk4Xp12E5F5n4PzY",
  "key3": "2giTwPsggDUCBSQSfNynK2dNzjp6t7AFNz4NQVC17XvYtxsVmsJyh2eLF673ANf6mKGryVSFsyFsjvwB3dmU1uH4",
  "key4": "3nsfesx2EeDi8KxRcsCqm1BHktVkg9nz2s1DwbETqEEHBjLVmy6VfSVkuhRXYwuxbJySsP61aUTxwYkM6m5Qif27",
  "key5": "BFucvtUSb5fZUfW1FYenMPF5iSNFexJD9ShPcUKN1Piun4crotbABcyRPHEAbYiJocGxFD6NX3mHG7Ex6KnVTUL",
  "key6": "28LBtoGvRvHngGunfRaFDGopzBw8hiPGhNNHqSBq8LYtMsAtfdS8XpWjnzKay7qFyDjtPzk88LfNRxqiL2AGVriD",
  "key7": "248qp3v7GMXmjpjbHimg4iKERFKsyUUmQNkWX3S78E4UFcWUxJLXN2htKz3qcKVsBK4vfGYtnnb2ZyVB1Bnxh1rP",
  "key8": "46meda8T9MNKv6rkxsfyFAJLrZqknTgqWMprfRbXJVgLP6Nfr3J3Yoy6QYg557So8G6ptgr8dHV9rb6TFKL4bS8E",
  "key9": "5b2dYRv3nFzRg9vWemmgzzTUWJ52xyc4UzrvqquREjKk31T8Ks23MswePY6ajbjA6vg2YccyGX68wWzPdfgvPtNS",
  "key10": "4fS9tYP6eLSNVrFkmYWikjj2xX52wvt6hJEtxLR79rM1UmFaMRrJjsTiPfxsUdLnthD1cTXtzMNcR64j3Ybrnwf1",
  "key11": "61cUKsyQTsTjrRg7GuFruFxE25nGukKMyza8m3AdRoPrFHrN7UhzgQBCEq6AVJ1EyQChaT8kjbvYrH7rEnA3XP8w",
  "key12": "346kRZwgu9GSaLra31d48NbrHu8AdF4BGaqYbgKgv4Zz45Lr3ewGEVussdHPWKJqfuNX1izjV1wLw7n7xE9o3Jad",
  "key13": "22irttHgemwC7DxLg6rZtM8vi8NqGDUVe9uPxdrRmASrvcVzZ6ZCgWjgnGgyHVNa7adJByTvjsJtukfcm4GnzS7K",
  "key14": "2xBVg8uBZyXxvdCgvSpqXsaVrjRcM8JrPo7f7CkZGFQhcA2JzJBCgfhzevcwEXj1EfDZq422SEBw9EznqG1MVmwv",
  "key15": "23aqJfg1qD8EvXjhaagk26RtDkAatdwyN2qeSMzAwut7spcYJ94h4V8UoKNH4YcG7c59Hoj6rc4Zxkau8YT5QWh9",
  "key16": "4E2tq1SKt8oQpsHWSGuVp4pmKExzKbCrsrnhSQhBgJ4iukonLm1HYRnwTnCDWwRLUZ59Duce1adGMbNUq2QXiYzg",
  "key17": "2ifRZijmLHYh85PyegzgAJjxnq8H85H2C1fVk2Rd6AcXUsM2jME6rwYC8BauUFugpzEF2hBAAqEYGDtbzmmZNYo",
  "key18": "24GxgoZHgrDczGHj96o65RKhrSv14fsP5JxKjsUVaBot9DAKHSkVexkPcBzRBj6EJ1ZoYhwqrxzc3nZW5RZALeAQ",
  "key19": "4eYQjKzUGL4PdmcLwaoGgKFZxSwjU9UBqmztyF98GhqaHLikHU2BDXho6mMrVWLx7et9KD4oCFmNaVvh6ZvvoG2h",
  "key20": "3mfb7x7yRuKAyjP5VcYn77kCNQYuP2tkaD2Y4TZADdudWxQcmYZtNxMEvPozGxMwCkKzjveBePjBobr3nyBZsLFk",
  "key21": "1W6rQMdhWEsVkhC1AxGUpsg7hAmfqXDsXGqEYjeNEv5v9BQjyLVW1Ms8Ex5zNc9AHTkfLfi3bsC73RMkL7KrzzZ",
  "key22": "5Hdbfg5qzJdhSCC9pgBqEBkCag83hwDCUg2cXW8eR9WGJcqgZrRXJXRt68JRoE9FGqsg69o4cEzE3pVc6WDnG4wa",
  "key23": "2zq6aKgcDjYfNM7kbopR5YwiXUWdxRRFgQhSyxYEHC1mu8gQy4sYccDbHgSt4EgHCFKJdbeLFqB2sWyHetezxjip",
  "key24": "5a9GFJP4CZkx2v5YTvPWNWqx5qVQAfwZqTUuueTyo6D6ziBzcabogZzQsRzbKRgr7Ucj9oi5fvA27ah1fKxHQ5CT",
  "key25": "3ByDPHj3VE1wcqeQeXGjHaGFgAdNvBtPWGE3Z7Pky35nzKZPaB9a9PhRfonAJphxRJ9Po3sUeeuEhNS4zxTRQTTo"
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
