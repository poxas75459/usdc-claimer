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
    "4coqqg8KGdm2xo3f3ka2W118dJmWCSQ2F2QNK2pjrfr6CTfAMw8cztVyjKieA4mnEtQczAMGkAPdESH1n2m9uYG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qomXnM1chha6hcyshnggs37kQVMFWqi83v4U473QE9j7KY8rFotdRzNZ5kVYC7adLr64qbzsssJg7k7qEtaHKCN",
  "key1": "eAdN5iDPjZh2GjJYd1NxztzGovXT2hF8dEvmqPQoCvKshk1GXGPQWHztHdpNZkQgSRHRo6KiK8ryJtzffBinNPu",
  "key2": "4CSq3gppRBosVErN2om1miFbiK1dXjypFwyJGmhnLjeky51XoAvqJiDQBJRZKR1C235bS3oWCdYLhcBT2TgUQ7a8",
  "key3": "33CMpawCjRYo8kfa1iqpdok8gL68oRwMdhMvTiih9WHzHSLDF7K8Ngy8FAoKLpuebYme396rweWK4oS8ub8hoy8B",
  "key4": "5TfLkSU3f1Bghz2yKDBMywSFkvYSKWX8yWtVDajUHNLsETk8mWzJRPKnndiYuGfRnYJCeS2hrKk56X32uakPtQ8w",
  "key5": "4YkMXFaQn9tYQfBUR4FSnKhhjgZezve4tARhgurr7XDJQHik6xMCmvePAarc3pT6B4JtjhsTdMYvTbTBCs2Lyp3n",
  "key6": "4EKyfeiUeNjf4xbFX8HNRkCQmjNegAWoubqhdL27QaRAyePn2ucQMRdd5mNsptDZBpNNMX1hGLrxw3ym1voi2Pxw",
  "key7": "DfygSeZNp4vqud2aVcgZXtkkTyetQSbK6RHN3uXLXtDBzgaKWF1R65WPzQTmA9BbGdCyXpyKogFjkVj2K4JKc1U",
  "key8": "4AcoX1njaQz4fjNbCRRbbjQ8ZDoL4LZBVSgY39Wx6BSWqFYdT3kmhYutximdjm1b9k3CMGUEEwx9jMQp2qKLPdM2",
  "key9": "3FJLy5AHCKFKbCof5btJEu7dm5ZEjRTqA9DW45e2GNMdrimLX7Jb1pfaRSsAnQ1uXY4MWVugu1U65b9YiHik4PmB",
  "key10": "2UMGasEgVuhCCTFsEbEJfsynX4HSNV66FvCtXEAeT5DBohcw4hQfSXWMQkpn2eMCyyWXzpEBdyey42K1hcKGDYGZ",
  "key11": "4T66MgiConQPuwuuy3JWKPaPywgECWVH52Vr6PbHqTWF9WoC7voeDNYE1qotmtbxm7tUMNw5egD7VCVnQaGEPkiw",
  "key12": "3swvWgVka44b4mqtp1YETCNt29RP7FYLHgkc82ppvcdxQfti6U9dkLW23Fs6Ur44QMv4Hku9sdX4SSeLMjkYm17u",
  "key13": "42xCU9iLnycePc44Tc5E4TvqZjnW1gDyJr8HBDANneRQx7pExf12RJXU6NDLU7gNyejS4GhyUFPMvoLx9PNBGZEp",
  "key14": "2tp5kgAnjcQWrhvDbCqkJqUTMPukv1S4zCrrfvoGkt7JU87gFpKEARUgsau8txNhYAt1JhyoMP9bPW9RDpis7jwT",
  "key15": "398gqvjY4my7qMurRem2m1TpJX11VNL615MNBq6S7L2UacgqWZ2EXFUFDYbAYgKHVqFH1iv1g6HP3aJneTvePPdJ",
  "key16": "4UokWzpcjxGoFZm26VC6WW46uFCbHBKXdrAGrDqLzicHt84CvCvehJ8N6QXN5Jx6WHfNb4rgZagoBap8MWbb375",
  "key17": "2j8vuXETwcsGSCj3gzf199jbt1228gSNuifSYctxo9Sc8WSDAo8jAtnppVkfMYov7LwqFYCUx1uYdwwGjNPAWWY1",
  "key18": "b7gvVHEooyuGiGEy2pKekDxJMRE2PLYueDTCpW7cmyMVprTiN2ugj6wBA3uDsfyPLF1gLBY3HsDinFiTYwxUKKL",
  "key19": "25Jc5Zec9XhzrX5SL5hpJFmvvmQ5aDS5uoPSM2AvwarpB5EFY8vqjH9d7hGfrDSHaYmRYNiHwKa3kDEzaF9GbyWd",
  "key20": "4Wxg958XW94pbxCkfERDQma4mHY5HJrjaTwMBUXkYhGr4F2bgHFtKhkSgCJHc5AnP3uNBCNmtuZnEKjdSRobwaCT",
  "key21": "3p8HFpSjD1bCkjyhHHtr3eWhLUgfoQXskR3ypQph48nvRAyo7xvhiCHq9kCUihV4pgPomMbt45UEyUTV1VNK2iZ1",
  "key22": "4Syzdh38qptZQjUG9d9zfzXmkCm2yXRmsAPLykhUFRZA359Cx7q8sKwJpATUJ2iHzgjHkE41cJTesSy482B9kH1y",
  "key23": "3gdvomHNkzANgrVGBxPdD8KzyenY3jmmynWYCGkPAtLF3Utnj2a9Ejnssu6RvgbwwzDidsrBwWgppa7LcZwc7byd",
  "key24": "63p4F86Qu3mtZ9VYmaa1LfC3vxfvdRbQjJAws6FTwq4XzKPaKR1DAZU7dx7Ff4hPhnr4uLhBNyR83W2i8ZVRQ1tH",
  "key25": "2j8Am6BzKxnT7cFpB1S1NbsYtWjjBVFrZCa3XqCePyFztNafrEghTzxx1QpznjEHiYy1DoUs5EiYRiTgBrR87nX8",
  "key26": "5PDW4XyrRZQk567KAgzTW2JH725bgpmGoEpwSYhpJQkAjdn8aNYJ3hDJxVRJeuzhkvyPioqg6g8bVJso4SSzURkb"
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
