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
    "3FxwgLLrUjYQL2R59z8XcWDd2kMS1ERo4qD7F3xYipScWU5N99BBZmwXDi6foHFkCb5xWA14qXoStxvPYdYP8Jb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8xKnoMcuqziRS7UYn2ztKK8kwGg5ybxef4XhpfxD6GLHMUxm59a22FZUrK7jZmAAis1zpyAcsYBv9JxKFt5exW",
  "key1": "49Dk5JVDuDrBhqv1iXDMUDckvA9ingP6FgrE7fgRW5jbdGyRERi383ZmPuA6Rivey4qZFauWfp1XxFt8UbWx2S18",
  "key2": "unpQeuFkn6YZkbXU8pxEw5T2m8pRa7CyH6HUckfZLDWQbVJxZLCuRNQUnfyAGUuFNxEtiErSwL5saKcMB8G2aJL",
  "key3": "8HFS3pNr6SZ4DcdvnGWMHPZRPXCgs8VVFRqnwoWrU7R425F54yE4RoVaYkiFrqQDg7NMwhjmbsYgU27fvHWwsq8",
  "key4": "3H9j8MAKoR4PzeTW15UZDHtZ49hNunKBCJczm1bd2AZDWNtUHSrTFkFH3sbpRMA6LkbEnAimKnhmRzLyo4Yzgd9i",
  "key5": "SqwdZKeQuxfC8a1eajFeVtP8cxQuRunxLpk3sS8BxVTrBbkqMYjM2QVR6KUvw3jhdg2kG8nJtWYgknn2kbxditk",
  "key6": "3gU5eABB4mgMXSXEsLJ85vtK3to6g6b5h35q8GqY24bN9hR1ex7keYLqzXUMxBcH5NDeKPVPQVVJxTwsWxwJ2Wrs",
  "key7": "2BgRueJi8cL6iGHvnTC8usYVRdRHou62XqisZ4u9b2vzy4GpAWP5xagaM6EPbtG2WzDkMurCri2krppoJkXUj2H8",
  "key8": "bz8iKk9gN8LTsTsmVsgksrtihRCmpXw7w7Ua2Bn14a75mm7LVioCdxeiFqcL2hqm6onicYjxtuCZ1cypznjxs5b",
  "key9": "4shcDQvt6NB7XkczwxUZqRzkCsgcREvLwWW9Zyc72LxM7dYVsDykXHw4xm5ox7pei6GCR6ubK43ow7dLa87NwYhm",
  "key10": "2TRkfVqhb2iwZm4Rpvpm52sR5VMrjFUynyW7XVffDMkEhptpmDRQ2avux1TjiGUXEgMfbZPAiDsq5p8rYvziWr6J",
  "key11": "3D8hs7XW52YjoY6ijq8rgMXACff36XitBA8Cr363dGQZUGdRNxDryoAXE6zzcVzHqY41ikzdk64E1atmQTjfTdiu",
  "key12": "3VyoTkNiTN7skp12KXxRpTQRPeJcckg6r3zbEkYh47hxg8t7k77BLPpM79CtN9Rj18WPSjLKJWNkvwkpAquLKP8u",
  "key13": "2FWGZcPW5R6WFiyzURvezLxH3yNfmUgzNLJMUdLHi4FVZmzWCgwKi8hBGLNT9yHYgcePsmcgTmsAXiihMRpfzKrQ",
  "key14": "2VipKQ8i4fMckMz8DxXqLVvJfibvogP91F7Aest47bieuhTgYRioc9zj6e6GSDq3wZfLZoXSotCtkDVtkuN9FWPB",
  "key15": "5kmXFV9RCke65yhN1KVbF2eksEv6yStc6UWLxX5wtmPPDqHd7GkSWL9zD37ko9H58SA1qqqnS4uNgKgjv1MjTHSX",
  "key16": "2GGQzHPHRHKN2c8ZVEchmMZbFBzorbiXtcmAWuwW6qS5wn7vWLVMggbr54bk4AMwewt3gWQ96qfkfdRbwEj9Pid4",
  "key17": "4eBos6tMRcharbZcxApWad9cDxBWj65698uqSZQ4B7UgaxSgpJVB87rVNxYh8Etj67yWc5STALeBmGxmX1KrqESM",
  "key18": "3qiKVtf5RHx73nBXEqqLrK6FwatUi2FVq5ZSuYzNMc5ZHC3WcRL3gRamBCkTQvSEyoGKnmK1q7i9k1C5CQiVBXnk",
  "key19": "47rcY5ZW2NDRvFPEm7ULvgnRNsZ6TDv4gjRxaqdpC4Y3eKN96aviHBm3UpJEgpNMUfpaJkSs6BBzCKMvie6KrvZM",
  "key20": "3cv6TaQP7Wj3UspxLwGj4iWFkuGDVm9Z6yTsxebaZFVJWS5t3ev7Z5NjmCSF1U2ZQXfGepisEvijmDfupFicR4U",
  "key21": "3vYkUptAb9PWkd6N3r8kPX7N2PbmCsGzBN7VHWshX5wqC438SLUSajGYF5HAEYxoMtjPqzSKenZ6pGJ8ZMkpkiqK",
  "key22": "3y8xQBoSczdtcJYjNqc1AB6oiPAoQRTijEKrRwi8yvZtpEKuUJQxEGb4c82zKLWMHgw261BjAGZVhBCowpyDQrss",
  "key23": "433jnBAKn7bvRTMv5ud3U3QvsTH6MEhAVVkUVypJkMHVjTV8kdEBJuSjgD6wEzJ9eR9uGtcWedeY1k2kveqQ9kLd",
  "key24": "5j8BtCxwF88QCUq1r72FCVSUNG6cVBx3TMB1zfoqRELgm3NLLkkcdSrq6JVj9UCufQdfuhC6Ei4TjXr6id1YNDDg",
  "key25": "45wuEEJDTShEs4NDbjLmuBvES24MGekaXsb9tsK8VZGFXQSDoB55Z4isvKdUAD24qjdVykqVE4KT2Xp6DQoAtn7J",
  "key26": "5QMonccZQxe9d4LF8xE27zrFPJYDQJGCNTqRMnWFaB1cRdbDqp9cpZDxinGXRKye6Rqd6iUot3sjra9eR6jfpfYC",
  "key27": "2PCeZGsjxgFA9T1JXNH5hvUSibwvXmjCQ7Zh2DJ3CMCkd8Joutzf31FA96ZVFPLCdWoiNJHNDzBFnNdhJyvtXmoT",
  "key28": "5Tzrfhehr57SiNdJ6cmgyHFVH5kbmVhJWWcBqvVYsQQ9758xvai2Ku9znJjLeVXpkNz85GqbXSFiexzAt9mrp8RM",
  "key29": "TKawLwDkAdV5CmCe5383HWZoL4hsm8tGixmmVaAxd4hEEPsLS7YbbVkgyB3BpghkyVP1H1n5JQSQtzPLv8r69VU",
  "key30": "5EUtpgdyCf6Qt5PbTnTNjdKZwEWEHQ3Uie8Rr1LWATJKdwUecimxYzVkHfurgtmQj8QVnz5jNbV3a1fPtUJp7nKF",
  "key31": "5cX5BmxjtRsxmytKjA6ExHx1RMcqjN36KxyQ7yZ3gLZaSTG7t1Yao2Tr6G3n5mAMcvK6brA6R7gjvddcfY9Gqv6q",
  "key32": "GArqJkuuHwstTNzgTxdHYyENz6TvJBifD4EA8pKdo42uYo1sco66aMVVEdsuAUrAUqAC6x9kGzBsuBDHXNoMyEH",
  "key33": "4XEZm9sYzuxAaYq9eBoBmN8UXwPedkzVoMfym6a8jL6atW8HbeSbq1m1HH25mhuVVzebDCa6KeALEGDRvfSfZtAz",
  "key34": "2hnTKBvzQRBroQkfu3wiaFDJ92bZ4xp2TSrJ3atcSEfxmg7vFvm4ueA2EP3eWRyT4KR8E2RuGfd1DPY9U2ZSwh4P",
  "key35": "39fSpvPNarTd5tC3XbF2Dczb2YEmBwT3eC91wQ4R4oNeZb97VJpSuLF52Gep88o8gdwc6t2V7rae6xso46WDFMi5",
  "key36": "iADd7qUwkP3L36pNenS3kSXTndX1GR9rjnM74F5V4nYYvT9SgShBRr2J21GbxZ6PvZCD8VwnQztge8Q1FFGY9EK",
  "key37": "5YMyEe7CV2G4VNC3bvdwNaDjaxi6u4NsA8i4yEHNjLVZdK4QGj2SnNGZR31k2MR2DBJAxrauwx1wDKxRHFZYnLYe",
  "key38": "5NXG3rXix1Unfqow3XHn3e9bpnj3zBhDrv1AZcvMjSMXUpbMMAHvGemav9xSRwEtJ6HuNnZo4eJ2E3ac1gQDd7mj",
  "key39": "3opDxahoa2HM95xskybm23FjGVDLfvSW7xZq8nq4AQUfKFheHx2Bv57Sj1iZ1kzhLg3rEJqXrGsfDALfgNepbd4y",
  "key40": "4kvZqHRN6n6s9qM2dZD5uXqaV5tPh6Z59sBgyePr8xD7RWoXj15B1UZAVUUeyWDk2MHAtjeq1BMZsd5PTiA5XN2h"
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
