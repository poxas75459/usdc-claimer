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
    "2oim3FwR5PoYaoVQyRYptgDHGhWz9wdn9yD1zdEWZKTYwZkwA938iqBMnhXooXG7yrtP9ULMfSkBYyuzdAFN9gFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56baAyBLbiqGDSTcQwe3iYQzC4qzG7GL6Rc2DPyHATRqy49WVqxP4isLyPaLXuyo2D5hxAQEPFg7EAd2evtSLTU4",
  "key1": "4pmpd4BE7sc7VKkjxmHBXNAWA4QaAxdembswC2VnCXhNu9o44fsK4SqibzFGNM8KzCuupPvufvqqX6scRTGgz7yu",
  "key2": "5KGTrY4NtPosA7hnJtKbZjKpoqFsErc6UWoRhnvsqXTJmXY4mWqNQ6nDyJS4MwLBjjSpd3KNSB1S3PqKQ5y1VFzi",
  "key3": "9KN188bLuauL63SsgRHypN6kwu9ao2JoJPy5f1dSJqGdW3W64TYXeUP1zYdVB7TYk55G4B3S9WPDyLNKk1sZqNa",
  "key4": "4ziP1y4iqtfrHyhx6FeokjMaeSbwoJBtFNPik1hAt5GXadF2HJ1DCKeatpsFBvzKD8h66dTHeXzj47cngSMzrfyV",
  "key5": "52cPUgw5gWMWuaUGYpNkZC37PhgTnwnZifNEzAbXbAbpucyGW11PUBdVG4CAkMaZnkjA5oBWfrYRD3GGsz3hqyuA",
  "key6": "77NwTE1Hp1QyoDYPx1BAAazjVjiogv1yhrHbcW3DiwwiKkWAZtjHTNQGB9NWoGxceuLgwio23zpqo3LMgFvDz6g",
  "key7": "4xaDd5wFWHaM1V28JE2Euxz6LM1Ss4aPKFaxj2aos1vWjVgC8yVCQJtxXdodhfQNjaboYo19RV4FipvLVwLB3BaJ",
  "key8": "5dM2Yfxxk3VgYtLhtYYvYkNaqvHXzfU94zafbS5XCBR9rSh9pR74LaeMtf7ZLygvUGSZPDBpZ664NtcKdfRDvYd8",
  "key9": "5GKwxd7QXu8G7fFRDQyek7gnoaeEshESTKpeaA36zwX5G3grHor1PmybQoiGBuZkBHdy2d5Nib2gcL6mPJPznZdY",
  "key10": "3S7hVhxTCFCVZZNpRDfF8XodzdzumNfwzssurrcoN8uyHaueoyeD5Test4rSHAdkH6JkVq74iXrp2j8T6wAJQoVk",
  "key11": "3yRJpwA5BtZwH1SPSC7xdLfriUBE6g7rT6YapnmzMvuTLCizMWvNbD9kRfsvEy3HEs3vihRruiYeZssotLvyrGmF",
  "key12": "3HEmKt4R1waMMVA9QEUPPXw3fjQKe3jcLfW6nSVxDGE3XKa9hFiyVBRUzQbdWVPSp8wEVh6WS7SLeGJrFNcHNiF5",
  "key13": "3dKyifFLKMegg9DiKPYFywoYWzGabBV426V4ddwRWsvvE35pDcBNgcSBv7G6pmrjHyAcbAwCLWhn1iJfvgXVUMx1",
  "key14": "5uXEPF2BPay45zSvvCCF6CcNUURQGARBmEYmijuBT8gcPtHpmob19hkDSWYoZchBNq8L28NH3YHHEdoKHsJBtrcc",
  "key15": "3TTfNDvnXNZQLMCTzsW1zZMfo54yWDfctr7swxd8aHx54LNCWrC3AZS4zkkP1VuwfVF52dGWU6AZKMgReGqNj8Df",
  "key16": "CMEmSy8xgzBPviVi6ZXuuWibLifPkCQditwuvmeJ5ReauFAaSu8Lj6nqo2FTvXm48hubAPKXk7Fh1z7nc3C2E9M",
  "key17": "5G9fs6kKPzK79W25gu3JAUqzpEPE5GhbEZWW1xdECXH5CshSLVcgLNG8w8VtfXAvJFsATURQmpb73gmRVsaHbXfX",
  "key18": "5EgrvwjeYETHv2YFK5cfd4dG8dgZx65sfcVqAtfGnaiKHh4wn3e4ZfJUMoA4oZLmkBs1JuP8HqTmhq8Boy9BrSvg",
  "key19": "3hEcM1FSspU5P6Gf5pmnQKYPKVM1YMfSN1AgXAoWQpcaBrg6UgqagpSo3V8xN3sboYKouVq2FifU1rJaPB2qtKgL",
  "key20": "2Bwb3fZ2k7kvBQ23jdAFsarNqHNbZY9Ai3TbDSU7Z5bLAewcB5uvoCBLU2gLUkAsYpVzjdVwzTGSo8cCwzGnhpdE",
  "key21": "3pGeLm6r8pNLSCNhnjziskWHoUpvKkztQQZhRtH78dK6K3SyVMk4ztXXpg9miLcPTkHfdAmB9MU1mESgqLczctg7",
  "key22": "2GezVyeuj91NEHu4mkz4FfnXRqdP3wjvXYXu7sYxBfXNQ24FLnBzf6iNWymM1XzLRvs3n3aZNa31TUQVTTpwcsDy",
  "key23": "2UcTkmRsdJ9g5KYa6qJ28jKPimB9fFWKojnLjHqPzCg9BNtabS83A8arrVSBzHdaa9q15ZfKviqkUzy72nbEDZiC",
  "key24": "5HFfWNt6e8g9yf3MnkveTZ1BbWFYXSthAhyhi4pzhwSR1e2DCf6ZNTdz9rrGVguLAPxUNY4zXVvN3C1NSNeMKZwz",
  "key25": "55ZXAgHev8EtMAQefZQZYQJzQT6zPn6MLzwW2Nzq6d5zSy3cREmXjJ8pReuP49BgMhbtVKV4BgM6Uvc86Ba7jb6W",
  "key26": "5qaMa9r3KmQeiNaf8VdBHt9QurJBU7TvXdSi8LqsEMe6ZMEhVNMAbKuhYH71q5NhBpJLmoaT3nMd5PCLGzANs9Az"
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
