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
    "FEZiR1ecwbdWiPH2mbn1SGsJjFUvnMjirVTLii2bdVg43WijxuZ7fFVTHgbqvQ29BSWmrFGL69UF3NxLjGaVC8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wQKzxYEu8joJHXPgHtXK88feVQEnYarCWArFNuvHfMDwUwg9oyBbiSJftA8xeQZqdN5Tk3mfoe18NiLZnLpzKLF",
  "key1": "pjp562GraP5J3wjgqNXJXeynUdxLg6vLQdzThUVu34dihFaNj9C3hxuiNFLEB9zgWEhU6E7VqW4MoAoLrGczW7t",
  "key2": "4q5H8RsEzzpQ63CEEcnf23JfKxTZy3NisaH3o8j394wDsTaZ489duWYs3jDnbm2NjiC3UFXXHiCrE29GCrT1Tcbt",
  "key3": "4vfBxAyMs7z6dhGhqxigMNaHfv2eakmFGFGUwWCbNLyJVQv6MYiMQKQAm4qRhR1pBAgs3M2GbFbJRktFe3yiGzxJ",
  "key4": "4PicP9Y5DtwkHTxqiqx88oLS2QnSLB6ArtRLxjJry8xRhxUFbrYp43BVvvE7cGvL66gdGSzrg26TwG8wkAgDKF5p",
  "key5": "5Tifa4qaQttEBmCwpbxHtKNwZRWZX8UDa797KnSvR7kFMFbuJZnSAL7A2JifDnjAiR4aG8V9UvSvykMAn2ERRKAj",
  "key6": "49hPfdf97E5YuRvUNjHwfMDnc824iGTJkHFFGGytGwvqoTBxAhmjcgubNw9QwRN1q5vzwSNMshGgSq1gyYdYdcgs",
  "key7": "3UudaLu2Y9pVcvXcvsH1RyBoYa4KAJDFTYYbiwi36seVYPEywRQ74zQSdqTdRdr32vrCMvd12MXPEP7Tg7N8g2tE",
  "key8": "5ypfz3qTrn7HHbhmJPP5PTNLXwjuG1H7Cotce45gdSvPVR5wBB3opRqoPQsF1XLod1goiLBUKJtbQq8HTHX11ucQ",
  "key9": "363hUa21J24AWGPfokgSxCzeHrxzKfdbFu9ojYAhUS3J86tYM26viRogfbCZkmpUNxveKARsJhTGzhDkXHNDXx45",
  "key10": "4h8KRa9iCAtMjUDUaVbqmL5p14dqTRVKLJHYHCDGxSWuWHyD4BCjgedRs1VBRvgT7tLtiKdfNLvmoV66XStRZZEo",
  "key11": "3mYbxnb6dQND385XZp2KntU4uo8Axt6cnWRYwyxqznBocWvJmimkSfzzZqx555mJu3nLQSrFMy2dhxRA1uccz6TP",
  "key12": "2Js8JUFrnyptCtgtsuXxB8At85Y3cXEEFN5c11eGNP8Pooa6HUURdWiQ7dtwg6JpXY7dE2QcMkz3iDUnjrZu5PBJ",
  "key13": "3NA1YAZkg2gPFLUaAZPerywccwG5TUspWPoXiTRWFUwBg25bWRH2corWAtcgHZNqxF91DKHPgmiqDAnpagkTFnjv",
  "key14": "PSZLAknZsf36UBZz3QF8qVZm7g7oUrg8G8nzxs9tLcG1gBeeb23dFXTFGw1Gz9CUGd6new5uf2M29pXcF4tBeYX",
  "key15": "2kjjaPjZ5iW4v9uCRUnnehRz7bCxNLdN3eMbJGgvhKDs93LNP1mAH9BzZkZ2BvNPdw8XxuLKvxEKWQH1VamXZqyF",
  "key16": "4rNxtzh6nEWmHxhC3CK1TGjWUeKn5o15RPLS845z6LDQMeUDXpqorzvLhu5nkqHz6jnhTCzGS4ehveKScZDXSQvN",
  "key17": "M2faX1GEUnftaNPqmxWjobT63chkoP3h5LxYk3h64dxYsELygWFbjaGP2CrwhTZJj5JA7Q8TGbmkqR1y72ZeZ6A",
  "key18": "5tdwV2UpskQNYjJsNYXbffRxHevS2UJHFYgkGNAEj1vJH3RznstRpVvfA6UPsmpzvCSGJ9CPda4zVDA6h5rSfGeE",
  "key19": "5xT5k1t4ygby2oEqV3fonSqRvNaiz7udYbw9PffeEtwksUXHMbSRF8dtuSQFaZzeFP5FrtksUTYVgrtwe47jMQSt",
  "key20": "4mKHRCaaLDs4XDXtBKUbz3QwxrqRFPg5PYgeGVTvfzFqHy8hNRPQUisZskAMTGJrmWuQxFwAWxLkQMaCQMoruRZo",
  "key21": "X9mMi8R8eyynTXe64THgesP6nd4B5N6W8v3CF6YAwnaws5kCLYvpJZXwvwmCPxcYc8Vi2zeWJW6CJGNPdo8vqZg",
  "key22": "h9LYosxV9oFAzBL6MCD4p6mDzmxgRG1g7RkNHWDa6cwaWEuko6MFVk1ip9aKMvxLQVtM1JyGzJ6fBDEjUgMGrwo",
  "key23": "39UdKPnj7e7uQssAAjdTAP8tq5pd6pLQHkEkPRYy6Q1qnLDm9bVTDHvWETMAK8v6vw12gTGofXD1hvum4ekCoiKH",
  "key24": "3mGRHAgqeh7vBLqcNuu5qfz3WLWzupES5vRio4ug2bq2z3gwFCAn5Q4R3p8EiRBFexmYG4NXUYEHvXxZzgbnuBGL",
  "key25": "LAxYJW3XDPBLoCAK8Sb1H95Wm5PcNgMCziKYcrB4yajMWbDKW3YjX6FygUuVMXQvAn4b9RyAgKZ61Y1kjWDK5LL"
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
