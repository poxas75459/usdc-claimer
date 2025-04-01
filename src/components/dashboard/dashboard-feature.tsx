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
    "3TRZpZEHqBpems8n4avfS21JxoyDndWXYpZR1WA21KR6KDy68JSS1QxVmEDdhRuEcDT1FSdJK7dwopSZ7CNi7ruK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oKKY8LuYGzPzgveiHDqzCZ3XPg5pRTJxP4NQJ9jEgCar3ff19PDum9oajWx4Uy4EbwUpLA5uNrjE4XxMCaWSCe",
  "key1": "xLKB5B5yZ5Ad1zbx6U1BhXDiUexYZX6YCcpWW4p4ep3jXsNsXHsu5mvkwBDBzaSh7i5JWQJiiefAkevwC9L9aES",
  "key2": "3ZHm8pRtnwEeqv62fFYKhFsSDAgBmf5BpuQpVJxHDtFgDcZ4Yy8K2sKy2Cp6CKP87HubsrXrWHj8HdEaEvck9ViS",
  "key3": "49h7BuY4kmxHhpLCzYeAbTezoh99eAbmrZdkNrzUTyxoxLCiscg7WJMCSnCH6Y2GSwniRhxfDr7TyH4RDKCQC2uv",
  "key4": "5KYVPt8jaqRQZiQaK2mtXKxQzCm9jHA8p8DG9FBu6E6wHQNdyiMTgq7uKDk94eA648QNWRN5jtR9e5XFZEEkZ3KP",
  "key5": "58uoeN3U9FRm8Dow5Vh3d6pZMx9na5bnnXx7fGR9yz8sdguSkPbTtC8c9XCMASBKVgg78W4QBRuP7GNwRD6EsmnS",
  "key6": "63aday65pgwbffkaxc27RA21v7DifvYSZSY6y9VFx2ubJHm9dNL2swDCS1v8CxXqnzikDj69fmVkK68fZjdRQBqw",
  "key7": "5TwogrCcZ7AzRUDAbmTQND8ZrTP1ZXgrHSyKpMd9fRbRMmVMoG7MYniByjeXDFLZYNJ2gkUSzQzFZiKtu4txGLUZ",
  "key8": "57C5AM77TKxvfXXaCpeQFngrhWYtcMCGbqzFeRhvrxxpSPoPQenRkGEa3sSjaqdqrYnTmajnYJDP3Sd9YuJmhZdG",
  "key9": "5hucbmRPphDuifoKinCfw9XduFE8z86G11z9G3g1JKSCChuwSAEnBBnz7ugQvwBnARsSr5kpYg9sbUYtxqj9ezya",
  "key10": "4PvMEE8LxNVCTyCacziPUzWXsy3g2n29r8zwoRU2U7a6Z74M5HEm58xaSH6E4ozB49H1MAX6bnNZa9QQ7GDfjKgk",
  "key11": "3ev5JrAissh6UnPPH6dScCnew13YLGcPijcPzFsPjW4sVXU8VetVLBqKZ4Hso3c9neD7MdwfnTNuijBxbSPyrdZR",
  "key12": "5EjspKpzMRjFnrDcVAXjt7UqF3oMM7aZtebTYRxo8jHKRkD1FBGoNPBaiqS6NqFZQpS519LEZxoUHN13tgDrNmSP",
  "key13": "4oc1UQBcUifkNg6imR2PJnVoxw8mkP7P9Ls9wQgVjNWhJ4ksY1CAgsbDaR4n98ebFRLTtd1XmgJFxrMsqEbuEeVK",
  "key14": "4PmKCaQqXhZwDZvLAnWR2me5BjtugY2EYC2X5W3ZL8KJts3HEQVUMP716ZLmQ89YEyWeNvB4JRMXAG9FebgxHNLD",
  "key15": "LC85snFPqKPX5sGhVEJzcmL5jDaF5yj5nLKo5DBbJHTGusxnjMksfzfibY2R81K5AokRSszLP1xUTC98UiTYEon",
  "key16": "2SP1BUaV9N8aPWBoYDGa4VNThDHv3iMkeNzJz4QdgifVsURU5P8E8PNLp2yQ4pko1VaDgabBGuiuw6H98beCET5W",
  "key17": "2pnthD9kCU2NUMDKmPDPA9Rthbot77RQqzdeAfNzWF95Yq5SkUYFYayNAVzvcP1ikFJpXHSSTAJDsCjxZUcRD88e",
  "key18": "G5QoV84wr2TmiZwzPLgeMmE4c7C3pCizbgMGHWoCRM5P39XcZ4UQSn7ixt7j7Gv4TTLSzM9JDuB4VJYe1pUFwW5",
  "key19": "4nheuySoD5F5uDsqY65FKxoms2VMup76r4BzApvPDghqMspCwQNGTAcgMyxztUdTzc5yZydWHaJmPe7JvWxLVK82",
  "key20": "2uvnNxw1mJdbwSoPdfpT5DrniYw37n56ir7Je1PkhK4LNgKuBUcpNix43y9Kk73sT9fefVtfSinaeN8svJwKzzNQ",
  "key21": "PsekUK5P8TSa3eVWoyhVg5w4JLKmz4y4XaFxx5wbe1xrzUgUUupk5U2XmACAR5YsKD2yJ9KWcdmuCRPJNoT6zP6",
  "key22": "4evozFEg9vV88dj18thr4wM7VNeyK85Hv96McTBuCC55vnzzJ5ydUQR7ugfwNEftgJ66EyyQyxosjBSjEBHq6CTf",
  "key23": "KUutitpUh9D9KXpLcK2qgBhx8JvrHQB6SMazTkUUUEU1vvPPDqBdNPpgfX37VQtiwtjnNfQHLU4jT6e4d3mhQwi",
  "key24": "2gW8zSLC5AxtNpYPPfr97o3TnArykW93WMiyNr4q2RzZukPn1Hqp3s4mvyegCBVtcohdxAo6s6Kd8ZHgnTCqTda7",
  "key25": "4KqRTSSubQdmUomBnuWTa3mY3PZTrqmTuAyrjqNNWV24TAo4mguTfb91Np1nxJDU39g1pqphCgU4BcmYRevKg4qr",
  "key26": "58Ha1QwP6dA7DiSnwaTTWKuVgAvzkzqGFET78FetFSkevBc7BpiFJgxT8K1Z1fmpeftBD2NSaYAfpFzSHFxnq2kT",
  "key27": "55ssTP9X9r6yLJHnWsZPjSUQMtkscF9365fvy1Dp8xnhtuvA5oGy3wvAAEqyiJb7kXNFyJat5F1MzWNFwYmDgn3Q",
  "key28": "4nH7tjGpiHKEAPnqgFdKXC7abnCBg15axz4pkvFh9XiLWthxxa4REmaXx9vnSZWbW8Vd6vbfuNBmv66enx7YBstA",
  "key29": "4FsUgT63fNVKzK2dkm1Ggx8T3bohSWeJ674fiyPRPbRE1Np3P1fz9hKradqMibMcYPoVGGeGAtdJzhY4SHvqF653",
  "key30": "pkWAtQ4QuDQSAxJHfSs4cR2g1jeeUNkNxm5hoqFYpKe7XEQiM9RkFTpS5aAvouFQ66euGUWWUx69hum9A9CRUae",
  "key31": "iE2czz8J1PrBMXEG3aZhA5oHimJhTqPJ49dMRBK3ahP4HmAfkkZFN7PbYPhfVujo76mzDsxQNcvSuMvvXTWJPHA",
  "key32": "4DD5ryXddfygP7X2NJatravZVvVBARGHgo3mESxZaBhRhXfUT8RSGLeQnLjUZNv9zEQmvN6kx9pjfEPgK6FZKTuR",
  "key33": "2tTpiDYLW5xCXXFtbnPp7qzG3VSNM5K9Gszyah4XtMmU4M6EuLJMTv4UbVuhM3Wavcpi3AUuAnB6a47n9z46m6fq",
  "key34": "49FSPNmM7UstWp2N64qeJkVwPB8B8E46tTYJAJN7ib7y91KXhrtDeojjSRU85dHAuG3uUBVCAgK8pJW4KYVExVja",
  "key35": "4JN7K6cCTVEHWLPCfST6bNioSgbCykUQMBenrD6cBKevy8XuMDZw72t92PN8LBNYKNFnG4nWWL4Fvn33UgLM26To",
  "key36": "5CrPqJ57pueN2gNT9woTHLg87aPfcwHSm9xf3LYPbS8EpAxEZqFjJza1fERpyrd5ps5GPT1vy3nP4d8ciGmkYC8J",
  "key37": "KTrR5ZcfWA4n6V5hrcaE7pE4DY9JKTkV83wQVeKcdb8DNEzZvWm2oCgbNgXynnfwWC64mWduZUSXp62ZfnaPMwK",
  "key38": "5ZD8JY82RmcfM8966NAbri37MCn5NG58UMjLXpTGq1sr8rLgtH6EUJ36LfWviJ2NnScq84sCr4YV7g2EJ6J8h7Xo",
  "key39": "42hg5NpzYe98g8qzcYdaUei3Mc4xmXuWSN3N3F8e4mTd1oiFZ9MptSeuTYS2cBRhUqtoaHVnrHpVe1vn5pokMw5T",
  "key40": "4ySFMe87vJ2uKjEYRaEw3Fph89xLaLeaTuZagm9trTMMj55ZLRBYj5eHEBBKA53qP2gnJjS4u4x2Nx3i4zKBQfA5",
  "key41": "2Vj9sL3BeKiKDZgJyLi1xSWv8nUv6catmbuniHZANEyNSQCK8XYu3Px13uQqVNsUvKii4RT9kXNt5DCPowSBRBgL",
  "key42": "2j5ZXk1RGxB9737RKRtnGaxGEQ9bhAzW4iGdFv9HoahMUkzf8Kta5kyczvhE2VPhhie9v24MfdRJL6gMngzMNMMe"
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
