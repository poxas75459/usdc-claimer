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
    "3dYZjvEEwgb1BD3Vx5qis9Afi78QozXkEzNgg7F797bP4ZEzQyr3MMf4LGeYRuADXFLTwFcwaD5pF6ED7H65SPin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYcRd4C4PzbEDQ3kGMSoSBjVDRDePofUcxPZgEPeY53iYmnh8tMCjG1drJGURKeL8BiqEWSiQuBzaKLevLxMWuH",
  "key1": "4CVyBCTrV2YiqsuJWdWonHakrB465kVK1xwbsd6n1NtKNi4DpQhasNcgWcFjs99CzdiEpCrWV9q4FWJXhzrAogVy",
  "key2": "4hSeHBCDvfZJwkt1hPn7Hny7VYPiux1VVy16daeCNwR4kqKhByaR9TXXdvwntRGH1Jw5WpVpfLNbYdqnn9WGcYeZ",
  "key3": "3EcXgVptAYGd1rMtKVtvYa48B8f8CYRoMWNyNhrTXxcYxQJkvoXhh1s5ix2RAj9hQM4puWmThCwqJzLbV82tqLcH",
  "key4": "5z4pVCVjrHAm4h4pL9omrZKA8HW3v9gZDQ8MAtwLcaYHK5CordE5HahusAg1VRJVrXV1xb8h2WXAciaQxkRFR1Aw",
  "key5": "4qnPnER388scTa428GRh6Zgr9iBkeET1rayKXjYkJ1FBFTS1pszwzZWGXj64e4UjussLVWBQe3ZhND469jBYxCVP",
  "key6": "2rHAkmq5asDk5k5G41xzJgQJXDqsGnPu7fHVEe9ndmvMNou9cikHMEVNp7yyxGi8MjbyPxuV8KioYcxwJ2Pw57yo",
  "key7": "2YS1vSxxAjzq9sBPaYgTx4r1xbQLwaHHiFEDSAJxsPx3L3xZVTpdKTjdyut3JQf6Pv6r7atKf4WzVntNMzmdSpkL",
  "key8": "8g1B7KZQo66RfnDEw3w4KxsaJuQu9KgDgtSSSw6BbHZjWyNgRindjDBmd3N9AhWgwHhCEHtCc3qHZG5bRuyZQew",
  "key9": "3fPs36iDm5D8BstdNkffEZR5rov7gAT1H3gzHookUocNZXNpyD5yEFwJHSuMzAACPF3bQKE2peYH2iNB3CLqjo32",
  "key10": "13kVQZBVxr9Z1AjWKFwoueVxFhFkRbR3bdFPHSEiV12MRZdLd5ya1EW1Ei4cG7xK8iVgJ39NGxwb9WZiEdniJW4",
  "key11": "5Ekg7rb5D8dcJArjZr1dZ8Gqeuud5zKTApmEWxhBzvNwc1x6krMahujoPjnhdFGPdsczdkqZBei6weL6U92meVon",
  "key12": "3bxqhFwKi7yN7x7DSDbfPcZUcs5zNLZhBdaNPKLFFKRzvKmvyMyAbwbWkGhfKhAR5ckc9k9hxtfkiE763dLWcpfP",
  "key13": "5N9mUDobYYMdWy35HCEECdAj919zzuc2q6W5r9ZJ4aKvjySNAeoXXutvbSg2MvMwYwbkGUUJetEfuDkkkR9eJWAD",
  "key14": "2vDzUCzd4s4yWNA35x9864PeKLrmLUVyqRxMPE5ShGZUhWFUPdiDr8AC9cF11qpUpggZYYQg9dotNfP2pCzkytTy",
  "key15": "2ufxcHqYwbuJMnJ49q31Y6zggSrJGcwFPzDng6SpDi5JRJDGRzhe43kPy3QrsC6VcFTzEH1XmudQxEhwH1ZBZqm9",
  "key16": "54oLsbpuwaz9NMomKqGKGQujd4yu5wjX7f3Xjd5YnJYSfGTGxSoi1qPVxrsQRdF8GxnE8b6vXenchWakQAKg9tT",
  "key17": "214fprxehPykThCxHZJwHsus3i5yECADvU1Vk6KRCBA74nfy4WRvrUhQzCPYfjtttmuhH5ZhcZR4YSXY6GiZoXPL",
  "key18": "2pHQAV1tPrBsRApMJK8ZcvSwdCENmoWc41jup33Me5PnVf9NsRGnk7sJmr4nT2reFd7kC83me17qCgxQaMooogK",
  "key19": "2rH8MhU6fd2pV7TTmUYSxAqps1QFx64LWrEghD7kt1geWfSZNKDtJFJ1PWgK3Unuxv6KXUuoeDb5LexeEqkCa2jX",
  "key20": "wS5NvDFQ5vk93ZBeAovsKHeJxJ7d96iQoTSDNxML3H4eg21KkQEUAgdsUY7may8a1bmYVafEF6dmai682CE4fbB",
  "key21": "4Gbi3nwokZLpPsksR9bB23efSBXK7LwvRjZ5c3k4VWzt4ijYwryPn4Be5fyY1E4bonArfNc27BHEdz7k6v1QXnHb",
  "key22": "2wT7WqtsF2A9WfeedXmgFbDNVAkVXSx8iagqw2B5PEE4RvabHKyByofPnjWPUmwzu4Rf6jtfU2t3KgS2VcZqkr9b",
  "key23": "2tWsqS5VtNz2t4rFxHbXcwJDsjhz9SN9E5ak5nzw4g5tKs5L9vbV4yGs9GsGpS5Cw6PhT6nJY7EgRggZ6PnhuvTr",
  "key24": "4yD2V32ipYaUKz7tBn1wUhh7WzEXvXqrzkjoCp2p2wj2Dx3n8agxfJz4h2hiPQgZ53BiExwdwjYd7H3S5zq8FfD6",
  "key25": "3pwQtuX7KtrYpwA5wQ2LWtHmo9s83N1EA8ApzaEQXx5NRsRCDDhXcLtH4mDcxxWaoxcRNVR5mrjUP8BQvvecNiad"
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
