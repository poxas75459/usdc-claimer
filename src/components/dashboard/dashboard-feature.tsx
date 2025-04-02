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
    "4qDq4eaQZFwLaPn2AfLvQKXegQiU1y3Pm2wxsEnZ4bfN2FWVAkj88Y2XWaHUpBvHiQ98QfzzMNsChm5rET39asFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XHo7oYGFXj8iFZYyyPT4gJTB9f13Ccn2zabxNRHNgk5W2wGfVsbu8dXHiYZ3Y4rwNxFAqEcra57W7A9NnTRCJH",
  "key1": "4BycNqUnkHvpYJuZkZzrLpw6c69jrEdRk4BTENUiTfmLeNFKphRDTYM9zptadn3BWwdDztcZtcvZzU9UhtHrthSK",
  "key2": "2VAzSS884XSYLVkm4pjmE8RNgNYJaefiw5QehGQgThuWf3pQXJEC45C3BFnXNcYdocBU1D9PyKvchVoQVTXYgYp5",
  "key3": "bbPsRuAyvpYWPQNMvE58CtEyV4TZrj6pGmSFpuyrmBSX3QcH8VDhrd64S187tMb4xG7CUXR5dyW6y9aowfpoeRa",
  "key4": "2MtzsPPyL421W83HzgnfsryNh4FUGjbtWery39BEghHgn8jDvqWP4LGCmbX2oS62o1zVbXBrYDQYJG6ABwzAr2FP",
  "key5": "51c6eHv2KeaA2q5xPNZENMExL3PEMpUK94Wxh7ksFaHsJwiMuL3vrVQBXkJwi59bRySV5iwNr17Pad3Sc45y6bBj",
  "key6": "43SUawWLG5W2HN2rcoQvWyos7yf5nd7hEgAtjTKco7wXoX6TseHLnBvhZ5TTnpC6biHy4yFucg5YHqiHcSDtEsRD",
  "key7": "3tzhU8xXH5FXhGKcB7jHBcNjyuakHj5YQg98AfTwjXrvGdZkGQrVbvURyzYEn7kh8PFdMrFoEUtUnXnmR15AUJ2c",
  "key8": "51qw79fKAiJrQHE4zK9nGqHyBhMqm79pTZqhLXZ43N28R192QRJCHAVirdHScjtPPeBJjtzSgjDUnkCt61DQVqFg",
  "key9": "516UR7BuiJaGL7kKLNPwcXV1cxpPKUJVghH56GPwpV9QgSm9p8aqiQgVqw75s21uWtsRp3mEa3ubsXEdtuTPGvca",
  "key10": "5G7zNjCSN9FF14TmJ7nHC34pcaY9rFjNhwknEKQj8btw6P1HEoT89Yh3ZHkTBwvufgb62a2oALt3wmcdENwXaoVq",
  "key11": "4iBuRBgJUCE7cctzSn55Abc9wBBnYisj3HkpRZZaE932123EdhkJhLrfqfWowhK8xQjDv9Rmtgd19xqkDpPdP8X1",
  "key12": "2gYkZVACznnXU8FN1ctwarJEasbaDkjhP7JxzHR2QFqmTXJ6ha4Ur14eo9UzG72mChz17ntqdCssrnJXZdzigVKS",
  "key13": "2KtQRCMLVQP4nqQyxN8mMLcdEV4oDkgVBs5Hjbwd2TTZw6hdmy15eAw3TyBbNnoDcdGZj5KJyUVj9YkdmJ5DyDkZ",
  "key14": "5nwmobRx9vhQ5jQA1RVgiF3Y94iTw2yd5fqQxVi6iF9LBG6DtKv1rw7gU8oCQri93BQwD6EY95EVcVjwSam3qF4o",
  "key15": "5U8gs24HQXRCgRG1jhhvrBpVaNVVyoNQ542bz4ujDZMPAxmmwpDntGajwXHcTXvxFYK8M1uJae3BmHwiQhbx2pLY",
  "key16": "42gzTu3X2fx7N3cqqCDAwargwdk3Yg4qyTjwDVSkCG5wC9GNmjm8up2Ha7CwHsDCe14vDukStMVE7KG24rd1UfPo",
  "key17": "2AJbeuN9k7C3FZG41k3hGEMe8XKUWtgEkv3wn3v6RjWL81xmJFChy3QS9L5BpZxm4MHKhbAw1Ww7K22R8JiYwZUE",
  "key18": "2f5kuguLPD4vSsrMV86dZkWnHL6ZVmmAwPvFBQtwDVR3jsZWqVSqx3PuHrvwwiLaWDCihqt2D5JkW7sZur21CSCB",
  "key19": "6SY7xVeGoxdxB22zhoE7ftF5S5oMPBxyhpfj3E66kVsqGkrJGDJcii5ZS6BRo7v4s6dgfLtx3RJZnPdD76yQyWU",
  "key20": "EZjtjDSJY7ucqiUFr9cXFiR2CHYqEVqbCrweJ8STvQRLCg8r35NGtGJ2PprVHCfsjg7VPbjBcyuV4ZvHcf32ss6",
  "key21": "2PYiqSJQZEhiSub22nMFYurh3yiofzHg8LDg4ai3ptFPWhM8DDfyWmQcisxr361pkVccE9f78n4zSPDYfm9ubcxi",
  "key22": "5dYCpDNXmcJvbNhBCEQAMNcmRS4XtnCjTSorBButuxvwngCeRxmt2tY4HRXfTTBcbaCRjb7ugxJ5vZWUSDE2dVWR",
  "key23": "3P15ETchUjp98UEciUHviovPsBK6Zf4PYMLVeqfCMVMLgaKcQkNQ3qDCvWG6Zv2wJApofauWLR664vuy14rGHPVQ",
  "key24": "5tYqbhSRjkHywhc7iju171MNJ9Va7C6426pq6EkTxJtJ9yvRaS2cKRrxNyqUBvGjrC9Bcz97CMrKiXCCTYGbuxiq",
  "key25": "dXXmWkW4u4aMvdH4FJiwanNfia5VFZZDQaXzpQQni4T1rPCu1Die7m7JwGZQubxS2QoCZX919DmemPAUgLUonCC",
  "key26": "3VSz8PxfEdrg7wJZ4ShRmiYwBqHjFXAeyMXSFy3u9Yf28LuGeyj8ZFmPfyToHBL1SigHcqNCE574yd7p924hHWDU"
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
