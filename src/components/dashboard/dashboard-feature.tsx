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
    "4mzP6Dq3Vk5VXrL1kmbb2xUBe7SJLdaDVCFQ59FEi6BcWgqGtCAUMAMT5b62bYH9acwC885Pn1DxUoG1ugd6NqYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brYGDQTzARYpR59ULBf9z9phBmYWXrrkWEoQyhMxTHFUGyhAiSFB873DNc8ePKDLWhwgzeCdiAGo7NidWmWywfp",
  "key1": "LY8FDCRz2ofgJzPXcTZ52Pi6eXNuVxRYXnNpt4oJY5yYWMo9zZtVQXBNnNVDtpjToqKczsjTMjQde6kP671BEbb",
  "key2": "2uzMMd9SUrFb3fhMFMeiCjaJW4AkeP34E1uk1kE7tQWtuz8gQbsKS8R7NsDW3HGfRtmEpAPQ77zgHMxN8JLBcyQy",
  "key3": "5reqE226YsNShVwENgMhmf6L7d13vNTW1fEkDarcNi5Kf7Fzzz6dU1FXSr3mYiJ4zWnVbvssXt7DSYkNsdNzuVkh",
  "key4": "4eW3MRpPiM2LnJX1ScmWH6C8FBR2zasbC17FZFGc1Aydg571ptGt9J41VPXoxiasa6ePJLwZy17baHYLZCnCutdC",
  "key5": "8uRokGhkyJdrZXUN47sTHiGoZQ3JSW4beEigJAyCMoaqUnE9WY7Qa8nrikvbpkmeGv73CYNavdUDMpwgSAHfXZr",
  "key6": "4JH8QaDUbhQMi29zJrEgoHJVn7CYTaYPjbzFgqSwQL2jCMJvNTyWuQAp417ZxyTjQ8zy8TvAuCH59YTcBqC4orkh",
  "key7": "3s6Fyg15NhR9c9dctrw5PPaxqeX3di5KpQ74fYgbrQyX8E2xTTaz4LWATyCV1aND5cg51ZF98yRYEhT7VeyTYjNP",
  "key8": "3bawTkxu6kcS6sQtmi7avrD4TyRWuyN3LHNSxYp2SDmraV4caxZPhzZy1jqXyrJnvxXNWzqS6EuCNFpsuLbfPE9z",
  "key9": "2ssiVV5DecsySpmXjvHzANa2EmhZ9x86PfWbtkt7TKEa4RiqqmrrN5yTHaQLQJN6XyRGXh3sq7Z16z4ebgjTodu9",
  "key10": "2bGgx72czTzJQPGGmN8851kGrU4142RYudVAH44vxw9pLj2ypizBxcx1jBAD2TUrNUbVQHCxAqtKZjZ2KTwhyRW5",
  "key11": "ZRuSABw3eagxyVnkhortRMD4YAwitkwkm4H76LrbSuDchZGfaFGuEtSmdwGcyM7ffzNJkYX9JEnrGBxHsQCRYmB",
  "key12": "41zj5iUfm9preREzDmHQDyY1YUAUcPSmSq3kLfkzA4hPqrx9J43knTaEcukLwesKKNcTznuoMWgKCLcsmJSXj9gu",
  "key13": "jMF6Vpe9UC7Dv6egrxYc5MXvXMbLg1Bt4EMEaZKyjnfaBihR1Xvk9UQKvEfYaimS1NVj1sKSu8Z5Nd1dPrScrC2",
  "key14": "GDdP4wqUpt1GJPYessN1qfcu4mi1FW3DdgBpcM4Wiq2rywg1gStHXxLsdVreGXV7vsRJDVqHsjPMViY7NkuTR1n",
  "key15": "3WuaTB2j2dmUSw4F45Nk1hkYCWzVmThtLnN2eZcAxbMLexRfrfYKhkf4mBJM7Foe1mNvoqtV9DubwPXWEgtFiPGy",
  "key16": "3KjHScBfkGu5TBtCeDc9WZjEnJoqNMqTrh68CA6RQLdzaEV4QzwHDNs1eqqMw9aG5eqbk6qDrTiRhEv5PVPpk7LF",
  "key17": "2HVRtuokS54LEBW21bryd2sJ4iHW6oB7qxkj7A4AdKtY3Wizvqk5nhG2raTACEtRZZea3oDi7NJM3pPPfRnEcPFR",
  "key18": "35kGtB69Q4CkaMhS1SLHFgQKVgDFpgyRRHRNRKyppzo5bArVjELMdURA536H5dAB4iiJ9kDogT3mijmysrANjce2",
  "key19": "3vHDXUu33jwUXtF6sTRZp5tCSS3nnYcJywnQWVhr8MCz3UrJH8AcsecSfWH41NKa4pWYnAyLFiSCGmECuUwHEZrM",
  "key20": "4nJXjdvYWxVKXWqV4qT7ZhYSwWoSpUyJDcAespMo7x5FNXyETq32Jv2bNkQT1HMSik1yjsC6exvP1JAfjm97chUb",
  "key21": "29s9gikqmVbsicRLQvGwbU3QQtyvqkZ9gLh4jdr8fK3zXXYbJNB6dbzARNN4AoQcJAptaYBv7SKyDNQGg2y3uq94",
  "key22": "4siYFMF56m2XjXKx8Kpfx3YkkMXjFvcYqwuQZ79NHuHWRQUipatwYpnLVxgdYwt9kQTkX7C68t8XpiH4GjzYh4Lp",
  "key23": "2DmG7FLpAEZDJzHYi65AbwkhPou5scpNKJnWuPqW8YvzCRNT1XaHanyLTvTMMrgtgrwNKM9aunTrGt9hPSLDD1tg",
  "key24": "2754xaWm7qXQza539617dfwLSKzuTakgX3sug8P5d3sbf7iFmGj8QvygSm82mr5nD3EbPWTxvZxTDgUnGGPWY1bT",
  "key25": "f1c4HeQ38vmz562s8MDuTise3oc5KbzHNcaMhNPyFptUqodpQUV2UkhhfTQeWugSCD39zHZ87s2qtE3NS1LGxE6",
  "key26": "31yyAiDnnT94WqEFkzKVVUEupu7BQroMSsokhBgda7oKG4b7BRxsG4yHqacWm2JwzUQtpnJp1EAwqjgmrjS6r52c",
  "key27": "3dYk1cDaJb8mjTaXeXLCdAZP4xbhC9WncHHDyxQiKFXts2tuM39sLnR8L9etaCzEP6KJZjX72iLdpFhr9RJDi12p",
  "key28": "oNMNR86UYYsLpP6cyvAMjDxetZkXZ8iYBuCh171xyW1uRP4MKt9zXn3TfsTbVv8vjdrBFGAYCLQWAQ1FZUWA1N3",
  "key29": "56FDnaNeQ5fg8Ftbemz4Hv6SJBbpZMC5NhCGA6bzzpfkggBSjM9dkDSRpvZdDdSiFXRi95A9DDR8edZp6zdPuE2",
  "key30": "55q4Xf18cFBCsMcdRPCF1kB9XfWFpnQ9ct7XP3otmwCQUZ22EZBLNwih3VkozXfv9bUtj7NUcAmjMDPdivL4ZMtw",
  "key31": "pDqJ5P7E1twvWmdsRGa9czQtzWyse69M6oB3vAjHcToqqFXJ6kZMjt4p2wqrZ46DdscT29zwNoBGq2yXoQdiv2c",
  "key32": "2SHWYfU4rmLrHazwET8NVLngfvzvGjvSRAKGfpyvGsvA5Ck7bnf8RQAdSfpAMUNdkVaVT1ruoVpDNvGkv9TbrG6N",
  "key33": "3ccv7r4ahVtiZUSNypCHuQibpaokoqTK52Vg8feewj6u9jWfgZ51zYAoVbPe7kpasHAmGCXRSbX4YyJtd8jk4LLu",
  "key34": "2sbxafRrqFYBFMWZ4M2r4zmWpnKEsmfAwg9fbXkXsBaNS4C91VQ3bP7UJH9NfNF52RgwSxDHwFR7ko3o1LDpLbnT",
  "key35": "2nZ7vgTPUVk2jbmxfv4b6eP6y9q6xhyD8HJmNEE6UM51M3rKyUQnDEYcR8znXJ4B1JSy7vo6yaJBLVxfhoFzcdBG",
  "key36": "65SS8vvi6cfpNY5Ram2kLNaGozitdayWvdKNGMXKXJMf5ULvVXde7JbqS498HMA9bKY1qb2SbLGqXttqKCmguWXR",
  "key37": "2J5a248UeQBexEyAKizgmhYt4QoKgDDAcibsFrt5prPWjBn8Y5BfDvqK9mR5WYxNFbrscEpveroKVrZCgmb5iQNW",
  "key38": "3bUPk3jEhyhsC7Pf19DnXWQ1yoooe9vb4DHfgTy9uaJWEv2rp41fATuPghrvixFQskEtggZdWAHf9BCnzm3MgCAe",
  "key39": "ZBiQw81jNxAZFtnhqLiXMemmLWsy2F9HkMJFyszzsT7TJa7MZeQTiRackvH86w3KzXfQ6ZPv1Rb2osP45HjnWja",
  "key40": "Ft7d67iURPqKJ4UYoUutUsDna7Xz3WoGdmj89Enk3EuFntzyYqNRRrPUjTnsYartKmmXgQfYQsKiaqz5jh1x5gg",
  "key41": "2NogHDrt5vsFVqbGgXVHzUzFCTDH573qM7T1wJLpvXX2vk8paidyRWjeFtiR9eYDfFh8fhTUKBZp4MGuvQXaZikJ",
  "key42": "3f6iCoSTNARA2HfkUpRbJyD5zyHFu8ZBs2jQGAYqRtUMBHKjeLW7n6cnhfm47Aa1taEmZhmMdzK1Z5jghmmUZae9"
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
