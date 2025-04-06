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
    "3Ncq8ZTZnwokh93j1nADge2pxVRdmr1LBZQudAKQ8G5R7EvQw4vnNtRBSbrNFXvfVYNEnBahQDL1N12y6uw3ZEaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KNXnogZMLGu7kKT4mc6sJNjqBtuCdHZ3W2pA5UAQnSSgxdSWKRoVqqmzZV4GFezbUuTBfxd4L5XqhEdwDC1kyNd",
  "key1": "B4Arf45PfVkL266p8zrR6MynerT7h5oYW1nz3DEmEoMDSwvnMfU3oyiSN1SxhTw91iLsW58WNZngPNPBsVpbSA6",
  "key2": "3ZyEVEv2uhSAitTzQJ6WbEjDzmDv5vrTW3yn1ZtPK2KcBEYg1ZBmR2UCqzz1EAL2hvWpMZfCE24c9skTi4cy64jB",
  "key3": "5XGFf1Nz95kCH1o23RK6BtxCV2sMhMkJ5XLohSTgwY89NjQEPXfDzryPv4Tk2TCgTaNxnkV46R6JM78VqdrEniH2",
  "key4": "4sAmrgwCt1MjtZBMuULHyvUe1wwfqiJBKcA2FhKKwE8r8fR2VrryGvL9UnVyCn7E6ToSLyq2zBpeB8pU5UkE5WnD",
  "key5": "3duinxenr2wbYbsmptGn8wSb8W3Vrh25V3qxmEVNsashPUNFKUH38C9tdqo5o3EFZ5Svhj5MbESJNsyZoeH843Wx",
  "key6": "3XDa3My1KUFDpKTxScDoFbDgVTUr9HTBJMkvpT2TcUD5qR6MTm3tiXTMNDkTewN7qz2VsYWrkkkpvtJuSkcdhqGW",
  "key7": "3fYPeiePZvoMimGJ2ah7SiMZB1f2DRtCKm3HHdYQKnUeE4BjNa68UjPun5KVKP6nBKVqGNGAjNRDr7ksm1FxNFBT",
  "key8": "2id2fEmmzugF6aTrbV1qhZyX8Gwyj19ESx9V4bczDwZ9vVE2KtULwuLak2bS6GFHgY2178kPWpr2BfDN11ivhR7J",
  "key9": "3FbjYCVgLR8Yax7V4XwrSfG5PnUbjR61Zr9AqEyvhgsXPW61BVMrALVQfHZ1ApngDpvy8odALNLrpwWR8Fjkm1oa",
  "key10": "3FSH9wovGKRJcF3ciP6BAPSxHKmCe7tY19EvXZHPsNJBTq7Arw8NCD2RMLXRce2uXgk4pWdFVAbKBUF72ATZbun8",
  "key11": "2cdGzHAmQKc67tQsugAAH3YYKQtgqoGZYV7DTT62cXgR3xkfUtByS2dV9NLdXeHKKEvqAp45PrSMA28PyDrtLPXu",
  "key12": "3KkJRxRBcb8ULvPoYe9Z7kD9C1zbXCPZPpmr89ppgWNKMGS1L6kf5oPXGK3GNrzeCzUnU5dTL4Mfr49a73CHRyia",
  "key13": "18vvm83qASPNamhv96KocXoc4HLDkvokdfRhSDiNL3RG8pMtP619beQm4nRA3SrsEjMCR2HVQL9ct1FTBqf16PN",
  "key14": "2g58xWpKpE9upQxH2nxmjDSu5EUHpmUvud3yM4eXmzkcCyYm8RZRwsH5FknYxpftqCEfJKgfSK9EwVLbRufenvGM",
  "key15": "2bj7P7zizgLjAZ6X2RtdA8JtAWpmij3V67fpspK9akTu2zxGk49vDMyRrc5pTq2mNkTUVYJoMtU4DQAp1LSvtKyD",
  "key16": "4U59L8ku63Xku4XKmWB6bXB81ZPy4iyNRc7X2tFK9XbntQ7o8siYrv6YdVD4zYK9wYN8ywRuTGDPQwg8r3ZCq9S8",
  "key17": "PoQxDVEuqSVf3Eb7Ea97kvjhmdiBnHBAPT1pwwfMDVav9qvmMzV964NzPQgbkNDTHjWva3qSaHT9bskQ1D9tZfh",
  "key18": "4tT1dUuC1SUGyHLXnx2zYD8xVzKxzr6hiRc7np5HjDpMHkP2AUuJttZVvvrVUKZkERt5zGe84JjtKpys3DNFm2D8",
  "key19": "tcdai129Pw5UCrZP7s4BEzKvfY5J274Vfz5RT4BCZghUS433ZJGmv2FZc2orZAYUNh4jHyNbsH4nAEJ1BJYeuNU",
  "key20": "4LcgMXqENU9ofthCJSmLuSCHtQNPqgxyGu37tpoLtaGcWDXVegNhBTNxdmZnHL1FCbTzRyaGEEu4fAXwaodXxvGX",
  "key21": "2b3tjNZLPYFTn9jJpeALH4S773qPuA5wL1YjLiSBsthgWxiGq95eG3TyUA8rCjnwrfQXWHHs95ZVbN6huhe5hzyV",
  "key22": "3eZ9hnbYWJ1tdDAHTtHac5v9GCRUvuwKFbNwm62kHeVTBsEDfQyZFesrHW5ZUN99uRvNoC6DoJqbNjrrR8sWZcD9",
  "key23": "5w81Bh5RvmGJQhB7oWx5uiUcCZYZFgAzQ7hg2KFaGMsJ94KBPjbNZaYhY3py1wspVuVrLdxpxqwYwjieWnpchNwh",
  "key24": "3fi3cERkXaZxYBeQ5LfMGASjHyMAGnTmWgkCHsaQ5GAUVRnnnEXcNkmdu5aNBrnMugS8BbHA7Ce9oZ6EBZwBTues",
  "key25": "4AAAauhNE1Wc3ohoRwTVA8nGgutuHnPF4edRcepwiXmXDu1rHvR8GE7SXszchnp7YHYTe6xicZsjCushnSf6YfFD"
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
