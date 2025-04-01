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
    "37fb1E6XmjpUAU6w3PxRFAb4oHi2tVCE2hJa1QfMsJnkHH78wwzn3eSxT8X2LHm1ApGHYV8nkFeWP222FMyt47hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Z4whF8wvKaBfMELVL6De7Px8UoqCixqUoNSEgZm2CsP1C4JbWRUHD53Q5M2DhvFCe3vwV5zvBj5VzrZ68UBQ8U",
  "key1": "BnLiHXSKtcutFj96w662EVwH5mHyF99dDQx2sY2Y7zde6Ff7w3D7rxjH56F33VniVK1sJT5kwVrep9aV8y9meBz",
  "key2": "2WWxgndpAWtQS6SBJVyC9XWPwmNFhXBpXGvbTe5tLV2t2oMFy9GJ4Vn4N786eJr7KrsCuzEjz7BpMMig9XgHcZw9",
  "key3": "5TCpEPd3NeGG3ekaF6nrThWu2BAwAQqDJ5okTwd4GYXhuZnNNLmcwAGXSJqEfKwB8tsuQHXDB1eCcsUDZ3TG2j6z",
  "key4": "2bzPsXNyn6gT29G6ekFQH8MR53xyGXPMLrBjFempGg5cc67L5t8tNKjMPrYgRWNpK5XcbxBWsukPsedVKQNveauu",
  "key5": "jMd66J3jotaeT85YgBqbPWHu5gAW9Hi5PNbnv1y2QJG5AEmQge5P55r5ALAfH9JaHHeq9VgebeYxCya6H4pkya4",
  "key6": "27ZEMmqsjcPPRnBNNkK8q1fscvPiinw8jYGnfGyAPERkB8J9D8ZFk2JGm8bD9W4Q5R2QLdLqprpTMUabfDvLNK2j",
  "key7": "2nmQYY5DGUNfTTCijkVKhEWkgRGmoUADcDMik4QeumKXP2NLLwDuuHRvFDS9cCQWuScTgiSRL47Pu4vWAB8cZMnB",
  "key8": "5cHiUGTnnTdofFQAierzrmbspDVEr2XzpbFZG8R1Mm2CqfoCLEdSw5KeDghzzgTQ6ANVshaowB4mkhkW9k2k8iM9",
  "key9": "5JmmEg8reyGMhy8zNGHieyEQj1A1DrrHxbsJLRKGz8QWhAe8zz7BQo3rksGcT52XjSTjiMWiAXV9vVituh77Y3fK",
  "key10": "2LSj7mym7ni2YAtAaRZKF2xAaWVZpHKNRA79DDoMtXawjRVwNMaWBvjcvP1CMiewGNGF34iqzT7aMfATsLr8fLcW",
  "key11": "3Z982PKNXmpPy2me68CnYhyBqeAH5m8KGZUJ3S9NHQueK1FTUYNYgj5iHNu7RPSVXvacq5x7BdoCdBD3d6i9AakM",
  "key12": "4aVfRB5bd8LNXKfCS1ERQfwLBYMpuwxTKkz2kcQogmQpdem2w48T8GPhjmefhWyTkkehkVnJFi1EZWun4VocvkQP",
  "key13": "5235ADCLAxLGSUir8dUDwBs6MbXRUR4HM6D9SDpeNC9XRGF43WKTgQRZjgSjbpfFEuD1SFsh27fEPPGFEJhdgRg1",
  "key14": "4hizjRUzj35hiQ4MkfUgYjNcR8tenCTVpjBDGDcnDN8AX3NxSQmanHRdDMia6d9NNMUy41SMDyBh12uNCF6Bb58",
  "key15": "5cjS79xTBwcTeEPtJo1DMzzFEJ7CJhXyT66wwwbB4HNziJntY5h8fNtSjYfnD9dppjyecQGpDgwCkF1Ndnrvpknc",
  "key16": "2YL9E1R1oRgsG1pqEqZffZ4Bo62YMb68mPqoDFKxv4sFxLpXZ4VB3yTuqtMFnTcV7xbNrhKns8DFGS919iVdmwLi",
  "key17": "67PzdZ5JRVYdQCV5DHMiDMtDgAvLFMDh7NNW5ceXqrh9EHGf5KdtrALS8Ct5He4tkyn8naMd23g62Upf6vfSYgQy",
  "key18": "3gxX5UsLiVjuyhxBzhj746vnJjhajjPfkVxBkoTuqbPcpcaYG45WyWqCLfgGDSaKhnS2PzjyQ9HUaqy8UQFdG2Bt",
  "key19": "3kixv84F2FuLKg3FhRGSCjhPQi9HDoj511yHVJtNJUVtdNp9KdEtKunY29CMKmUr2vwEgLpe8qXCesWCJYLvBRWu",
  "key20": "4xuP2TrvXjPde3wXC9RcDPk4DcxsucBzWyN3hs3JjwzTVB8nUboXqH5SB1Arr2qyFyQbJKfN3d7NkXiHAZmydmKM",
  "key21": "4WXMQaVTAAwewxoTVrzNEeigawmgwqdePTPQ7sHJw2N2StB3Zu1BxCZ1nLK4BgTb1nWd6tKcuimWL6QpGpAmV8Mf",
  "key22": "5t41ppCcMReQitjZ6dKiN5dhJHXKANmMARgxVbXHxFGCkXHy545ZYN8BV4dLubvWzR1raCkHKQwWXWaYHp6nKk5Y",
  "key23": "4tzkg2QrhXoM1oTdY9JzGJE22vxvHMx3ZzPPUqxqJnr8wh6Cbs13nChVZb8axQwUM3vvWRDjtXp1LeeAPcRKxsxt",
  "key24": "kZs7drMTrNTbRbQriQqjfw8V75g88kJhB6hJ3iEYefguCP8KLNkfak8L1KDrTDmzoE8cW8oHxsTvhYqyETMuUwC",
  "key25": "ARxpAbVFPwRVy3nvecTZCwgTPnJXAXxU6AsT1WLe16GW1dH1UdbNfLHNhG7SJMpXJVtsGsobzn45oV6wWXgJ9YP"
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
