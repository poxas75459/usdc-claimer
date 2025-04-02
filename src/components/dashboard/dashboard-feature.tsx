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
    "4Sh8sXLYc7mLerDPUKREn5SHRHnxdByQpPWBCZbRwVpGYtbYr2C1c3CVJyhJwTNzpEyyBqWm5cQZ1QuETSwev5oG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hPtmmxvJxTsGysH82zYadaeXYTzYRQooY9ZZMr7Jpi1U1jwx86NfvaCGtbAHs1SxTREcCT73TYguQkekU2NQSah",
  "key1": "5kQVuJGPf2y6mpU74qL6LQFfT1Ee86YKAmxBDy8UUxD9UEqMosEJMJ3B3m1UFZ2rGPc6UQ2ZG3TawmV7WzTEvooY",
  "key2": "41FmE3VrF66Ame74FMsb2qELUjGB6qpv4Aa5Yp472PpBhaPKofY3xtjXmTEbyS55j519BcPWWSdRZHPkjYWMUpG",
  "key3": "3y3gY35GUYcMVBSgyHg1Tyc2nUcp2DEdxcrfqkDE4XCJ6BdSdsFCwrXk84HCFiSQcDucWhyBhFQUJdFmnWTUiaTH",
  "key4": "ge4PuuDq4DRtZR1bVmeBK5QsFS5WidRiAbY1Fz2itJwfLod3wmJnh3kmhyUJNVzRjmd9VDGUScrKDvraEJynk6i",
  "key5": "4e2BtVd4e8rbjqZdvX4qbGTg168CMK7epHbQ5fi4tLmbjQiZdCirnntPBwKdw24snRW6pwsKp9JeByMrsGuSet26",
  "key6": "4B6WkqdMYuhb6N4NmBrFiHwF8UcLUQLogjHXq6ZSwmJHmPLxMwGs76pEfCayn1jUxSJ73ydkoby48WS2gDVP7mH",
  "key7": "5vTougTBnicZCLnWCFy8wrRCJZ5zRRdg8XBde9qYVzUWiXGNjQUEQrBXJU7KZf8BhtrS95BwzvhwD5gcihzjdEXn",
  "key8": "4h27bjCfkXNT5rMB7PQ6iHGmZhJzfKrvKWx81oBKzMHiMh9wjTFGDPBZYR8wvwBKrgx9cqRZfxdZY1MeXr3Q713Q",
  "key9": "57qypp2RPdWiHjaS6FjCBBRqutr66zeV1vzhJUshqZs2jy5fWg1XVYizo4a5sUQgXGtjZ1M8HJwCHH6TaJUWWPST",
  "key10": "LQgPwgk1yjDBPWnbXbY4Ecv3vvprVdWriTpScLeEV7rBEm84PXWVTbyY3RcCGJb56Z8rjXWaxZYQ3SPg7Zghcc5",
  "key11": "34GB3Hx9yeuFCrMzW1BVCreuv9U791gpK2KrQs3uojdjubeYYdyikN9zQeV5BrvWSA1mw1e2DiAQZNK4YV9YnYJ",
  "key12": "3C63iraDgAKTq2Pdg9NFemQS75SSKrLL9QosKLBiXoMDruTipod7HbuUDWPxGPaTYU6VzE62WemABd3Rsd5vPsXP",
  "key13": "2s7dMJzHRFsBpkwbjo4idAfXiZ6G2VtM1iEumanJ8GN6ra8g5oQo3T9Cw8a5LS1jLtNwvm3dtU5Em3pfzJd69Erg",
  "key14": "27fa8CdvyfAGJ72Jz4VwV3Jhb3TvxNAXrHQCHhEKzPTjH6TMKhFvS8FvfEChSLFMeNcBJsfJamYaBLTQP3fiPPbL",
  "key15": "3JZq3PFqod1C2Y6WmUDcczQnyV5N4LqDQf53VJ9oGF21h8qFrYiatnyqAyYrqjC8AXoTKp1zbkkcWi3HZ8TJUSVN",
  "key16": "2e3cMp6NrhxPYVk23JWnRkMEJvWbdbsF2SbssPXuuyZLGMYgZ2Gxr1mezma13bvjQ6THTXQZVdcVjpursLRGfgkW",
  "key17": "3Yu2S2azMaxebJ5pfqicQ1oX12SZrmhJG39G1MU6xzGS657uxvxUqjXXiz3XopwUTi45McdFocLPUDDxtmDu5PPC",
  "key18": "3X69uvzLWr1M8k1MnxQAmoNpAbzTccqBgvTWqDQbPTn1RxynYrY6fYs3Y85qpcQLScVte1KGhNVf9bmhyqogLj1K",
  "key19": "3hBokfiVMGVkA24nTMf1fjx73wenzZEB4Hs9VVUUsomzGw7dARDgksAF9kN6LLDatYD5oy2zc1pTgUT7vGwTDeQZ",
  "key20": "3BxLXbvmfz47x6Xx6PXUPNGWnBBKn8HBaU9jv3rKHWcFH314rpFm1FnmNabREakrHw2HpGuGmNf473LJmJ9xuvgW",
  "key21": "svXjpRzy2Y749L3qJe4xpf1ZueaaUgxb4Jx8gvjTf8sDwuxSpBp8CqaRcmDtz3zGocidFAtsrcbrjWxCBQPB7Vj",
  "key22": "wQdaDgxbdD9pqmfeABmwj7bSzxBUh3rNsShBcZWto1Wy7cVAPcG96P3eYYeyaD6iMCwZX1kk9kX2TWKUG64a1SC",
  "key23": "4xrdaMihV6AybyjyRR7Z1M7DJc7NLYsELwGbc4w98Pt56CEMMFPGEqsDsKS6D8NviUwYEAstFDrg2zEvvGqoRoPY",
  "key24": "2mGoecxrBTggee7iBdDVYhA1L4FSRraDjHnwx3TH59s8oW9nCDwk1AMB3wTUKPVqFaVaa4Vd3UNMvry5Dfbs3fVZ",
  "key25": "5iggkfovTRsxxoNZ8bSTt3tsNiw4GoqbWFTT3oNTZo5g6JUqYZ3friw9TYX6DhdBcAtBunYcCVnfqXyazxNEsF8N"
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
