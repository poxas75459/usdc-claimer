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
    "3GSAEVKP5qfcctC7811xu9WTGrS7UcieZBNJd21EufVHyBhrAzjAn6r5EnDZrefUU8ALVWDfpGSMH69f8Bz8VKQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xXyV9oKgBJoGVTJBHyw1tauoA37XFirwzGrHR9jQNbSUhToi9eKEq53rPGm3vHDP4z1KQUmcArruNbqHnwDob5",
  "key1": "1HWTYFkeC5tCcCsuaMMSNFnDaeA6McH7sozYS98EfadwPk6K1uPkq1aZqzXFrYRErnbb7f2o2dAHsr8Ao7B2t9p",
  "key2": "4rYE39Xf9Y5XD3tUSxH8gekTCvYcGCcgR1NFbKJ65WBnzTTQ4mqMx6p4LxvghnFxNESHgygqdY7vNRRZn6qd1KvS",
  "key3": "4YZ6SheofiKE4m59Jqt4Ypg3goiJjjEpxqW6gqapkdHzBSLbpZc5xa9kBE3whAbz6bxbqcPToD9vwYrfxvzbgUqx",
  "key4": "Qy8ACRxGcexe7qakDBc5sDV4biYrpXDEByD8qQUYXDvG52bcWQmszZLiSWf7Z7S2BuncBfieDriyuB4F3fZttkd",
  "key5": "3p2btKtw8sy5aDdxg2jSPHC4v2fZPLqoBSZ6wiWNQ58pPNoGpdLYNpta7876dL2MTzWXv8NnLcTbM4F4SujyBXKo",
  "key6": "54fMBpwRVkvCmb7G5pwqsVhwRJftefu5wFr71ah9QSHeqUgoDCxvwABFU4xuBWUBn6Rhfojf8jqRBv1bpqRzT1oy",
  "key7": "4sFe4rr4Sy5b5X8mTH3B2YjkpZzqL669eiCCkY1bd3j3TtHSCwrafivgvv1yb1ARaqWPdJLjN8FtwJumL7ppboJW",
  "key8": "4H7XzqqRuXTJcM25mAm8e4a3AYZPVh5LE7Dec1jFchC36w8DSafbgUqrtXh8vgbtufBeNVQ7tYoVTAKKWxiLcFau",
  "key9": "WqAKBt9Gqz9PTnYeukagRgKQw2CA97XDkjwNqyAjFtdShWcBD3ioRT5CoAoERw1FodpCQkvqPsekdFpwu3ryMfC",
  "key10": "2B7zato1BnztxsV7nEz1g1URSqMA3DfbJd97XJwZ8fW59tCyCBt6jMkdVQVW5DHyuhEotuvhaLa7Ab1Kau6DKy8L",
  "key11": "wxRFaYS1eBn1T9YHHNuGzo3jJ2FeNJU6qeVqSTnCXN94DzXEGzic5Ynz49gEqk2jxSt39EyYg2KExJZrux6v4wM",
  "key12": "29kPuoicFg9DyTzAvDL4hqN73wsEaQy1b4JDhSmVo1sV2Di9vT1m8JF9pBfT5hnyezwfNoBysB8YfER3uNMh6yGX",
  "key13": "zeKVizmFtjFBJ1dEpYk1EYXBMiWLd7Funq9AgrfMN59FtQ5KN5hLuBqSqACKKLDLrkMQZevzuDi6yf1fc4aBx2f",
  "key14": "3hztWQ7GqJxYBUKwUT9cfD8MorsRenzCxJKofMHjnp6Ux5AN5GUiFeBsYKNVWVmbgWT7h8MFWZpAhDcUFGjFDS2r",
  "key15": "zWy5hq8nq7wxX8vFaSw6PFJMzdnYkdbtjPQRHVjzGnBt9Fs5ZMX9Dp2QHwNXA9LiPu2nD5GoQPo1ndgAEcipwCK",
  "key16": "4Bjpt3Qo1kVQ5txJQpU5EdcFLZhUpk11kNUTovDNiNDLDyMWyV7ntbuTD4VsFdN4AzMxQNzNLeGspZuTG8qdtFLA",
  "key17": "NpKiArnqEwf9M4sSJT4sBRtSBYoMpvZFZCHc8s8H2zSC8sjmLXonx4mvLJn9uw2S6i3F2tCiyyMbXzNmGidP6yP",
  "key18": "3omdL2kjL8bFqteSVHMkneqyaqv7dTgo2ZKHcsXuXoFHQ8HMKccaaoLsUSDCCwkUHkv1c9dhDoHNedj42u3f4UXZ",
  "key19": "4DBe9Sc9kseyxuZXqv53iBGbaPUHEXYFkpDPfvUGRsN4qcYekeMrPrUVCRj5Layx6ftni2oaWGpp4PmfzHB5MmBq",
  "key20": "5FsVEBLThS1cFAWiLqCQUwHqNdndKiZ6qcZitM7eAgC8q5gif3E5tkRH1StQceXcyo4A5VvauMwwojcZD9Byguud",
  "key21": "2DkjgpG55onfXpC8AVS6SH8kCfAJajR644izY3oXELpJtMF6CZNJ4SqJXikcCCB2Xj1pA2ggAyGsuNcrn2o8dN8c",
  "key22": "5kCoVt7HcPGSS5o6h6A5BNo2AtZE6jMNHA93AUCDbkKoJDkjtRNEC3ngSo1of7fC4hVr9RuHHsGRBeWaedLeCCMb",
  "key23": "4auXZbs6XvE5NCFpEnswjTNTG6McupWmdqmDsfhsjhSPNZByjohVNek8dfpqKyeqRTuepfcBma7XKEhsizsLmYMt",
  "key24": "41GiKN1UE5AXRqZhzucJiMPUm4zhWgPb8oHLt77mvdXjyGbV8ZXrTwZ5QbbJDMeMr8zrzNBDttCNqJTdWs4Yo9Ug",
  "key25": "AgApZ1PtY1WW85YJRFAGNbfeowm7joCvC9SJGTkhwbep7xsonBV7ftL9scpEXE92MsC8sTLWViUSAXN5g5q2aPD",
  "key26": "5XJayaBFqCfiLXGvdhjaFN7ctzyXoucFF5g98yhPR51eJyTVToQa6wrmMzrbP3rsa4L5dJo3AUQg7vg8LtAwZm4q",
  "key27": "4pGY7VbKyiWAFsCn4zjVXhuTHCvLFZpNaHzyPv9LXXEQRLaxFPqNgT8UiBWhHN3xv4W8DgXmSaRHZB5BwswNDxwu",
  "key28": "5cvNT1bKFx6dnF2AuGrxjUmPD7nqhfgFwV1XEiL5tkeG7M1rsctuq1k7sBwEAUtG4yDoC1DnMfGoHZQdJU2Bp6D8",
  "key29": "5ywuRDMVjzDmEsfv5KawP1gkpggW31LXnycCeQ2uit1aE1vSXNfGvn2AA9Hc8mUm2qSTwboJ3GaW4qKA4iyvS2RP",
  "key30": "2Nhku1iAJQR8uerm79bmdrAD73z5L1wLx3fHhGtwL2BaVenAuVxd6V1ksnJHvvoFNW38TJ5VrEYCZ6BgrVk3tnfc",
  "key31": "cFxWfWQw5HnYXpQTYsHnYXJnNmok5jaBErA1zvnf45RrNXLmqXfqDfxHyyqG5uVsyrG75cSoscmncNoY8W4M4CK",
  "key32": "w1HiUn1VfBZ3GeJgxL7dx4nMwiHDHPB9xckvANS5nZvR3WERrgLAZFA35NZg8JU4WfweXAPE1YEihaTpUf9C8sx",
  "key33": "o7Mc6FBbqjc3ns9gX9KepEaHChvFCD5PzpPAcLq1AuH8j564fJGt3vyCQjadf1RC4yqEp9pja5sMgSzTd31HuSz",
  "key34": "3q38anNnJQAWJDez729fFXSWomxM4GwdqTKTrC1fL4iz1Nij7xp6qKrXYU7fT6BH9k11XSMz2H3j6scuvYFzBcZs",
  "key35": "8wSEVGp6zoy8Jgu6sy8LAMgLv2j38ahzGydrvrb6yDLCffvUoc8w2Mhpr3YN3oqqYxp7KdgKBKFovyUnbmwnJLb",
  "key36": "pyrTiLUhvnKRDFBVTrUJF7Rm8u7jKak7AcJrQbBo6iqrctHnTKWMpLzKCq3sCmMSHEXpzZnjcp9AbH2PUbjF5WC",
  "key37": "YdBJGk1Qz7XriKJvkXSvTYZAENgg9xfCYrv2tH2sXVerM83f3YKKghANgbK5hGkNn5DsgXWhoYgoEckMjrQzBst",
  "key38": "GCztwasEifUaktRdRZ87TLWSa6D13cdHEoj4PuRKvoe8Xgv6vc4EpMytHPohs1zMw5Pn7qWZX9AhACs2WVWw4jb",
  "key39": "SpqURyCcN7yKsTpRs93jfyFHyXFwz7WbeVHJT7BNrkhNJpEiPe1Q5vMY76WC9aS6DussRsXhSGXYNWRfrpARE1M",
  "key40": "WfbnjjY1uzYRKjmpekC3yCRkmDMTgrmXYcL3P1xUZRrwNqKfQgizgy1if4yZqMujqWkAFfyNFy3Pnk3mXmipafT",
  "key41": "5vCXG4KpSKiEeC73uzKyPVMFZQaXGCgjmtthLtw5ihxddbkdmjBo2LVngpsqeAHbc4nNyarg9PnHpmGFYDQnNd6"
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
