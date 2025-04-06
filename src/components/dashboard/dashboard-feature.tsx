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
    "TcYkNbE2j2yFaXSfMyTeQCsd4CnP7njBcZv3gkbz3xWsdXLpSX1H9v9s3yb6VsYSn8TkaC3Ar8mQaeZvSicN88d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SPjpjjvN4dWn9sBgR7gzkX8YxbLkpzGdvzed8pnmnrJZifyfHQk2bAYX1HKXfzLDhBhdX5hibLXzD1AqZD1YHiT",
  "key1": "2PGfSULPbfRCgesMgv6k9v6TmptVG4cK3cpXXGuVLwDqvtge6EWWkt9Zvi2ZKQWYbAgMVQuXyPZxFKq8C3sBfcMR",
  "key2": "5sudofaTwTYxxpqJxR2nesCnWVXfqpWrgNdCzMuL7qMvew5FiydsJh6fJdfXmS6NPWVWTya2vFcoTechvpoC9c6w",
  "key3": "4PXEGcLE72LRZaKZ4A38eLs74vrSgbHa74gczFa5Fnienr3EC4si1Ji8znBUA2caM6eVRYisJaUADRtmF2XG49Kh",
  "key4": "HHPvMEXmGGCth3VaXMDgzt16GQHV6DDuQUwQcA97CxrE3XvTuNDPzgEYmxi6jpye6s3isSgZTZTd5uxgAArssP7",
  "key5": "3heGgVhHeJvynDd9nUCpwXZ67ZyBuahWa9eMXgRicwcKhwiffa3E5N4hoCEdofWzZDc8rVduRZpy1PtLByMa6FDz",
  "key6": "3775jPVUw8q3w3h7oEsRBd4nH5zsnTWkP8bLhsDxUrQXtbwCW61Lfo3py52FWUUZ5qL65rpoMbryTV6ZSqSFJwhQ",
  "key7": "WycTGLN1s2BdzQrkK1YB1teg2tNP4Zny4PVNMD9Nfe72q4AND39AAMzoip4asBmdcj63iatkXJgiBxEQt5AZDP5",
  "key8": "5mJgrwz5edqxgd68YGuSbfNXpj9VfefgyVD6UyfN5vtvvP9sgKzUycNLLwUAfycJkgPmYWZhyKQhFaDdJH16FS8r",
  "key9": "3guVYaSKGENCXewkecNxKdw8nPxEtYk3jNodt8Sz6iSs6s4cFoXBZ2nGp2gf1vBQMGQLDdXtK7YBoeA7HrN3DuxS",
  "key10": "SkR2aXgbDbiHQ6yrzed9aZMtSgRVyb6wQKV4EyKEbVrctGZdUBbLpUxZ6J3KsJf6e7kqi61MfecfTPNuAun2tV9",
  "key11": "3JRp1CB4M7YJdy8rcH52uJpatk5uudnfTytBPjUCxDgMAu8TggPYqavY3Rtc8VpxcqruwmJed1qLNmfKUXUgxbVM",
  "key12": "5XyM4uKPScrCLEv42NS4YVGuayR4WNLLAbb9nnkqNNEPRbCddZs4h9dUShF7zbX1DuuGswBuWRkoxbGNp1DYJd6N",
  "key13": "47mhZxPfs2pPDrQnF37gfkGJLhRyQNprze5QhikChiSe2DfDmaPUpqH4mdBSPdmLEosPuJf25RRQAy81vLUtyKvg",
  "key14": "2mDhTDkubT1A9195zRPtjPppPkFHq62pD4Ue5BEJJjCKiHp21LsTAbaAUvQida3J4TMw4275hCx1A17BDT4FKKiN",
  "key15": "3s4EQFEoPbBJLHzPvAdBXKhF91dCjQLdmhQrHK6hpLhndTTsnXkrYuap5AXEeq3Q6ed1gEMc6t1GGEfG6W4812Rx",
  "key16": "5bzrb8uxybsw7k6Pid4ysZs2bvUAQZsafnjtsE22gBZAtjmJUZjApjgNbYXAQE6QEJufTSjv7xk5AFri3FC85P9V",
  "key17": "5pEYpaUE6JqDeA6NEaKKNMnFh3Lj2aoappCzXcmYN49135URP84N7G7z5BnLfYVu89Qd69SsU2Kn5EnautGvt2SQ",
  "key18": "3PWAvhUjLoU7Z49Lr1kG9QcQGm7yQghpEH87BPoDR96mua95VshAS2oTq9Po2TKAN7YauhoebmWEXA5wR96o3KrJ",
  "key19": "3AN3jyQqnGmxuetvKZKpvb7A4a6ncW4uRGrYGs7CmSkYtmPAoSPsQukQsMFwUkHCkHtyKA2a51gNabcvFJ5RsG4T",
  "key20": "4cqhr6STTMyjRyZXty1GVcCwfWZnw7BE7VqZXqVqCkA5ARpAJ5LDovv9GLcezz4PdNbPg8KLLR1p9pVWrkBwPFx6",
  "key21": "3cBZQTqYcHoG6ncER1Bijv5PSG6qxbcwunpYFQ5gfaRR9BYeF3HMGbFGEp5MxMiGQqx5ZeaZhTakoA4NuUxHn5tZ",
  "key22": "j7Ce2dLQbHcnzZqjUKU86zhKBUXk9nMjE9NFcfE2gFkd1NXiRxty3LUNP4wNyzsJL3edujFzVqrnau37PtX5uyE",
  "key23": "66FX2C2tyQYrTXSkHyP1skBJsrhDqyTfGCeVyAK22ivfX6KtUkZJYr19a9b7hKie5ZLu4Dz9H2K8W3QSmyXoJzyw",
  "key24": "KyHSmMhZz8VWTYWRGALFbjJVCqygf4k6Rpg6UZ1Yqrgge4wrSEvH8PR29BcBQEavJKXFKeYiGZsDfRe2B8A1jpP",
  "key25": "YuGSHCrirewH8bCkBy9HX7XaPt5Tr7bnSYH8nMhiRcnfT7JyVXkBwGZCK4aNhaJdePEiHNXwADVqivfLQf4asD3",
  "key26": "5ovNe2nV3wG8hj7Wd87TxJyMHYrEETP9cMSkpSAn6MdXntZpdkquvfiCUsTN3urCZNJd6iCDANogQpH6mVhrUS5u",
  "key27": "21vzGuSy5UjupGfFiPxusad9rjZezNnjtjuq9LwpufXFT5vCHTFPraEihyqQYyhdofP6JWygcsP9REJxtyvVkx7B",
  "key28": "5myQGj1YGHKh68w9XDQRd34qTEAnADkTiQ4ALzbsqwYtu5UmPLQHYArgAKQJspbATpoytZuuFA1Mk4A8vzM3ENEF"
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
