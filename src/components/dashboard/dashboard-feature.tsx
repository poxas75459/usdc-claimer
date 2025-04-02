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
    "4iucQzRTg9a6g8zSuu5hmHdxD25CjJHYboFFJ3J1sNyYGBnd6SCwxpMvXnUUKjtrKAZocVy5sr6wxojLHbQTXajX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kxne1oCZV7tgNogc6fJdv7czJi5VTSzYifLzZWnf4Af9xiR4r6doJ9PvsxUNrG22t7b8GRy9oxpLtnZAB2jJoeZ",
  "key1": "42B6DGfsLbz9mRt2zEKFXUsjtDdT3fVdgFCxZtCzXQ3tcZweHrTEXRMtMb6gGFGJJUb9zk8ye7F6qdhxWjx63oaC",
  "key2": "sEZLAPPTpCS5qEZ1XuTa5d822gPU8yQpQZw2b8gmky8akVi24fLHoWhD7gyj9rAaPvoj1tHNN6XR3QAkJUQ656T",
  "key3": "aKaMZDy6RnEoHazfgvUMvehfJCwSuEPiaiyZmX6fTrTNKfuc9fqVZdN4fLYX4ebK3R21rsDto7jHNHfjsMd8993",
  "key4": "26tdLsfU1sXZb3mTjnGVzHDXKJm4oxgtGoyhTbJBXdeosRC5YDBshjAEH8yZg4KHtvxbpgMvMzSr3tePdCHRAZeZ",
  "key5": "26ZnBS3gNkVbYDrMzvLsGyspYtqCscaVm9XyDNrGvgUSKQndGBnjwDmEDFpjiKqg7UeADD2SEPYEBf82vvmRSDin",
  "key6": "2ChWiM8MNPYYHrKUzHRL8gfwtdstkKe75XRZvJsbQn5iyTPoJVSykoF3X6UUJW8Y9EqPUtrMVsNEAWwBpCudXxEJ",
  "key7": "2FitCbgx7MjVnTam8eTNYnk6Y6j13cMLsQpxPEQrmnCqgCpJS9VbV6osZK2eWjhSEsEFG1mnV4qkxcuumG3UevL8",
  "key8": "3k343UM7eUCXrQNS5u2i2AYRj2BbgicBHVeeS8kiWGTz1MnAuUJ9o55oifTjeVZcAEtzPjMoef9CeMQeqWLFr3WT",
  "key9": "5u5AdkD4CTe1YXaUVkWUEnTNGGpAWdV7BD6UiyqYd7xusiVuDXzMivMQ6e7vEMpo6ux69voBusfNk6765PLAQZSL",
  "key10": "4NBiFttkuDbzhc7U2hEFfgwP564TCHANKhnbT2CgxQ5W8adBbN75WoNea9AHiqLNNJH8685FwaoCbUUpbVPqC9D2",
  "key11": "zYWz6UcxDM4tJM5E7yGyTVmqCisEgxjf4dUfq3VBExQE29zYjAd9DZUR3rUA9fTy82htySxnTR8a2ZUuu2UqNb1",
  "key12": "5WWdHyHumABWbHfd4H38zeqVoRKq2k9ni9riM17Wy2AYxqaCBkrpKAEzHX4TBV9NwgDvmBonjSWUnH4xud4feRKG",
  "key13": "3dgjpJAXwNUHA86hUsfrpQcaibMdMCRceMaBzKgeQaroqNPa1Ecnmb8Pjfxtthj4j3Fie9W4tPkpMXbaxBoYYUXG",
  "key14": "2QnXXGUtSHhJJEhbfqkNHLedcdzAgz4Ep91khvnh9yzjaV4MY4t8vajhZqbKyzbVexcK2qMTNdGWmX783aC8Fg1u",
  "key15": "4V414sGjbkKWky99XsFyCStUp5Q5v1uCPcXiNkryFEcQGYz32ncVdFtY9cDkw7X1YdiBU5Quk4Rt62mdmqkcaaC4",
  "key16": "5D8YgqjSYEDpfx1x8z3SnpwWk76LZX37VtFBkxg6f6NQ9pbe4CaZVvQMMcUNHTJwXNP1STdUEJK1i3r2mLTnC5ZB",
  "key17": "i1cYU8NAhZ4wVBSWqNFJDP7S5SsNtC7R1kiAfMGAjPW6JbUEagrUeBbeHdnAyoFvzeTmsnUfpij3AYGJ7Fexcx2",
  "key18": "3gV7tswAyyuVn5WVhDWSHV8yD5az9biHednGA696QBVj4LCAhE82GPL4pWzTdaZTUxvP5KbzJhhqHuCKGBEfqUnC",
  "key19": "2dy6svX7N7LFR96FBzTnqTMpo9KxEF88euDGV4LKb9BENTdfGVB1uFB2qZmqGSBL5iFDugYEUBWoXe1GnB6TrxX3",
  "key20": "2PpgestqRdHj7L2ZX3N2BAkXBiJ27bVoSEWMrhPPwjtwZSGSd57UVqP26J87iBwBBY8iHiMJNsre8BpoyvqmW7vQ",
  "key21": "4WvaakEH2Jb3Lb2h7uGFbMe6CpQCRKvfkpBztTceAnn6BB4yHvvGNff6Ui73m1P9QbQVP8XS6JRm15U2SAaRXDCz",
  "key22": "9ToPQiS8mPmBRuZKin2A8MJVZUvpXQ9QfMyTakD8o5gMapKrn8hUGUtZECc8hUbQgiJ23iirRDWzUTampPkVTiK",
  "key23": "3ScokwDcpwLvbwU6DGuJ2xJappKKiAUHJ2c1hFRWQjFrMbvz299XycMvyhrbgknmHFAsAaJYkU4t8t3NucsyBxPt",
  "key24": "665BRju8V9zFUb7rY1SQsGxyfYujC1wiwQrvkumtysjfwkty8it58CNnSmhiVR6MEcXXPJERKmfNXwoAik8aVs1n",
  "key25": "KmUks5Zssr3DRwnWBqbRUxNmUCfw2yXVFuqMMC7BkVYiqPskArhNfsZ3TaDxENbqubFbRkgR1AnYD1oyE1tnYw4",
  "key26": "3SVPT7aBYHLMt2VhfLSQVaRNzLNA6YwTssUKN9ryZ7bjAdKraCeqejefDq6RKLEVYfP3t7xaxGsNakeZqeBZFtvK"
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
