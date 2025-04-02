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
    "5XKqgbxAfihdNAsZz6eHArwoTVR9YtADrATxNkDBBm9yt1RGXmvyEVaQhpsfU6ZCCZU8TDLn7Vdu82JapqyJq97C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9f6KPaj4EJE7cK2LiVskiAPPuFaVVwMDYkYbdXHY6PGyhuodvTieBAqLT6sGdho3kGZeFNs63hTctFvG3MEYMt",
  "key1": "bS5KWTUAezuDBzcsrkve1ZHMP1DXDCzF2my289PutWfDWSm5GCPkZJiGAUQNqHAwsy73FVaQBajsTPwnC3MpfNX",
  "key2": "4egXnfNsFqxs7DC2X716YCG6w3BcRwRSVhXWSxGx5TmAQ7FCWPiLvpaagaAGWSRtKrQ86khxcYUUEzoo7EtbbFdu",
  "key3": "j5sXag45mcMkwXHtWSQT3pSFTHr6b57pUR3yWAxkjHN9NMFzt9BLQdYFhhjdV6Ex5XifCR3MCCNfqSCYXaQsKNS",
  "key4": "4ki9Ae5mpNw7gyptf5nM5dLPy4z8EBWo86XEW7nHqFDV4kQGg2YC7cG7popaR3xr1cEbigeeG4Hf2wkCtMeMz837",
  "key5": "2SW88eM4rnS15xQ3thm1DoqeihsKTW6ti8txKz3Em3m7Aeoii9nMVX3uy694dLnSczgiBRNzjf1EASw2Q45Vdc2e",
  "key6": "4FpvSoNG6qq1aJpSGrGJGHkMPug1BsiEU178V3ktXF6ev19ALT63Fghu1bNP8dYkJxpxSUw6nNKKhx1P8dxvR3cc",
  "key7": "2MTqid6oF7ZviMRaTmgWFzsrkKAzPjJdaBqTwyAQ1MtkuvdjQwqUJR9tnUqv93yFC6HJ1jhvqKLwqbsPtHVK49sq",
  "key8": "4ewmrsnXMyKn3y9axVxSZmkPibmuciTteL27JHv37q1Yx9MGVxrXihQ41K8vBqnHRWxGSF7dQZQeJVweeXz9zuTE",
  "key9": "4U6SE7yCzktPjjqrZrtHzhYvv6E1KBbWX8qrRKizbHGLcZePCDtgiWw9PgWLqhuPYTkBN8gJXe7MqWMtwhtRzo3N",
  "key10": "2ttRU2VXXreRsR6wLCCzAoW67zX7B6n2rnPsieh5DcUA1ZCmmCxiAR55Wg3FrjbtbSgsnW8fTSe6HCbxPeL3vgrf",
  "key11": "HPoPgjvuHC87VDPKSuGA36fWhjmL3oejfVW3TjsV96Y59752ExYQqvn47RoCcZi9rWKwh4MdCD82f38HrYQPdC2",
  "key12": "287muPHnR4Vv12ts4xpgLwef2EKpGSMdEVP62jBmcSi65ieqHKhitF73XCK6ABT65JVof43ZGpQCSqdhvLN8CmBH",
  "key13": "4PVq5JNwE3h9CmmSyvHS8J7mnEK28KvaXbG5YFV42hmihLzwcYepnnYLhQQCP8jPczdXCVbW49fsuuaTTmbqKTA1",
  "key14": "ZQg84LNL5J5uZpb5QTrWuVrkS9aWRB2SUE1mghHixWLJdhzk72Vd6qtd7F4h86ptC4w6egccbgjWQxKJobCoXG3",
  "key15": "5K9G9LGJSH6kaQWrta8y1Gkotg3xekHZ1f26FuMyN9ntWjvSz6i8bfDqwFdHToaC8eYtB4u3xktE4khXp8HxQXvP",
  "key16": "zMw1kj5A76ym2Q1H3VM5EYX98Lm3oBpEqWaCiKvxjtxWpy6Foc9dQgVxH94eiK2nXoi7gGz6Ehz9hm81DTL8Vjr",
  "key17": "3KE212aVVJRJrAGybhGQYjV87sh8tfckCPkAZM1dtud5MgQu3zEbXBRNh5TBjeu9zhce8MpjroKBp3ty1147Za8J",
  "key18": "3KuaSnhG7ZomqJQCBvhUpv1xuhceYeLiZqFYqRcrc3tNBqdZ8w84MoF9NEyUgaxBWu8EHz3oLxtpjC17u5aVotZd",
  "key19": "5beBBNqVh5dnoHHjMqPt79BgMRUWBdEkfUj23XWvSnCzZgRnggyHboJ8J8FuwZNXef3Tefqk6tTxbfvsRYRhUAru",
  "key20": "KaiQgCY2Lx7PX2iUGy5UEPj1SMU2JbG9ReLzwYnkLBevMfMfoPzXx5RBWc7dG7BgUJTzCBVewiiG1m8xndqStgM",
  "key21": "6biTyv7zTbcLnMhZmbcJhi9SCu3kiMLWBRjRbWe5tZ3xRv8TFuhAiDGN7rmiY2iNxLa89tr7SepmTSVmH4ndk3d",
  "key22": "5Xyr7MYHKSyHbxjGgknYAWPLjcgCX8MatJ7w5QtuxFSyxzh9ZpetueyBFcNdf5vjMg8b9dzprZyBRmxRoSuHHoDV",
  "key23": "2hG6WDfdYfsXshzNJWA1jF3pjppAbhyAeRySQpTXnJv1WW8wX871wAGb5Z11Q6w9mELncH31nXmxViJD5dbg3yo4",
  "key24": "5pz1r59nAn4q51J3QgG2fd9zJMJHsKnehJAk3L6SbHG39zAt1CjVVj71Giza3mqR6snmSY8DsQyrgUpBMycXcVaL",
  "key25": "29nXvbHKdH6JDbnf9arzqEF8VqTmx2GiS6aY4KdW3MoZH2zTzduXmu8qRTyDg4grp4jMbAbbrdnfnfTSKWKPrCF4",
  "key26": "3S4TnzMqeNZ5Mq95nLdgDjozP75HoCWR447KChRjACeV3MiZCzPJs6Xmk2in9XnyqBdNqhuAhDXaNfyEZPc6e7By",
  "key27": "5rZ1ozeEEGBgiKywJUN1C2QVvDnrEDHcKbPfb7AHVNowG3BqXijte1YEjezkdgjLdPi8bW97X9ryjs5RMcz65hu2",
  "key28": "4ZYfiSPrP2DumrxJSKNKt1irjogbUvA7GVbeTZCpBSQGfwFBJMxiuZmHBrZUKmuwcqTzqibhbuXKvsDDwoPnM8DH",
  "key29": "2sB3GmotdTDXngJULxeU9eibMiiVYr45PtT5VWkgt4g7THxdXDGindYBwkYEFbBn7C2TS83jbFK6B8CZpREUQgrs",
  "key30": "3jw8bwYdBxPgkqkJg7EEeSYm7A3bjr4WCU3H3YhS7eEDLeb4AXPGsyRKNUWfqzv1JhPNVEGKb2gnXLGnA8dquroa",
  "key31": "3boP5s29utGaKsRdPHyX67iomxDYJeCMrNz6EwJAGffLCp3ML2Dk7QfDr93Uh57REBfLD11atN1nFC1c4JHQaugT",
  "key32": "4TckiB7rYPHccc3ox8rB6qePHEHjWvsgfw4bSSbtypmKBcT6GVMJDJpvKFJwUpfxVskV17fpKFeoDDt48Yd6JKY6",
  "key33": "67DNfs1YHfQXGQZJLJWuyeoEs3cY4tSV319RXpQ8uDZeua1ER84kBcdrrVD8CkBjQEuFAc1hj2uSXmVSPABZUMx1",
  "key34": "5FSitq3ebDJXSCKkLtK69kLNmtbw1j1ALQp5PfNLmmczbSLhVoRd4dvde2zuRXBTRpzkrveiQsBxCsmXecEjSgQ8",
  "key35": "tBHCpkZP5Pp4DSsYqSKPQe2CcF6ehNCUJSobGAdmnNjrcPseEMBzAeB5WjJCE1cJr9zHYgXza3MmmKyTmsLtTPu",
  "key36": "4ixcsRCMw4PUP1KbQE676eMmwyL5axoaR3prqUcyE6yXjaxquqPLGH78cFKvEaPxVReCaSx6HifsWSoB5QAM874",
  "key37": "5HZoP6QdKm4t17duSnPBvciEFsaoocahFiNGJzixLgGAMGzSnraquh4GMffQ8QGzAYfSaHfwDDozRZJK9HrDJifb"
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
