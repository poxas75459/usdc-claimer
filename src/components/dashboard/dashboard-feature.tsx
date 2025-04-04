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
    "5phMYyUJsYwCLJHfo9pjgtyBGgYTEszA8PfgEi3NKxTEUKxuNQuFpv4y32995mJKUNC7Sfvf3M2PvEu1apZPVMzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nM3aezkXAgHQriTqEy4fE5rFgggzjvkfxdqL6FPgB8v8NyuTbMkF974T6vYMdJrmAxobVnbWhfK7sNUBwikPW1w",
  "key1": "4RjbAFCf74X1iyLM5995rDh6iR8TWrLzMcTpcT7ABNirqx1EFutKN2VfwtafDXyrVtF4TpkjmPfPpdGKJJZBdBXZ",
  "key2": "34jthm57wwxEDEwaJkC8eoGEaAjoZnhFUhig5M439g9zkoFcah4K7cwPQMKPXweVV53jKmny18t7jQMwb8NbmzSq",
  "key3": "3oMXJsqiS1vdRpXfieMYyipsMWsmzEL5NTEdpG9LAWK6UcwpyR5bhxb1FnEc395Kuww2HouNBnDddHXtnVRs9ajf",
  "key4": "Gqo4ywvZQpGFMGQmBHTZzPo2chRht3kpR1fZK6QaV3GNrACbo9U8VKsqMLmUa8oFzQxdskz1QiqQJ1KHwqAdL33",
  "key5": "2moDAtkF3gQv7tnpGtu6HQ1BLyLGmhYoHoD2sFpQUm2fDWaJZhUqHcCZjApFpfCN3ZSyQFJZxoho8Sw167L5Ue1F",
  "key6": "33nta4NKgXX5D3VUCfB3K2S4qYuKXU9rvmGrGCB9j4Nnv7hnoX3m6KnJFndpzvo8gep84YgPUdU8mr9RJQ3hVYZF",
  "key7": "491G5VyU4YRus9CRC8RFdKWkFfXJkpgguuV2i2HDRD86njJdyMwLahf5wdc8egajWv1ncYWkMQt1CgTnae33N3Ci",
  "key8": "33EXEKZY9m7AkF33Q723jtxgd4SbeQ39UfYS96AeBkYXViZgzJtTSoT5muabeteD4snpGLGeGS786DhTQE9j7AwQ",
  "key9": "Cd6CfBLHK9L1WUszfVaZRor2AvVL5cAVTLrxbBS8VcGJJH6r5N7tqSfQXzkCnP3kxgL7ff7F2qM4U1b6uL6Ah6v",
  "key10": "2tSeVjXpLoWch3gKiQ2CgAfYHMP6WD7jxtWmCiLVEaDM8P9HSTsBrQqVwVb3ex6vXdwjgtNN1E5YmKB8tpbuxaHA",
  "key11": "EFwU21M4AVht57N834GDRe6iEzbHd7MrahXCZZ6TzdNUVhjojo7Fo6Uwfb3h7gmZtaZud92okB39H7Ggxtgtnin",
  "key12": "25HXN2stmdyVHQ5KahV4dNjXZbjRN9JBYCLj4xCKpvA4mT4rtLRW8SF38LH8rCqGUjK4etctCmkJpGzNcKw7nfuK",
  "key13": "5y3fzCu6a9oQr65N3Q2U2qvSBL2AxGcLiyS4n9SLzkXf9zYSNHFkL88HuAhADQNngG1vF2GB5ag7vT5fqjPXHQp1",
  "key14": "3veQChXRRFSoQ9HsSNHJRbb6NapmnTqLku7BXrsfWhA8QRRv3FG4P5TDnvkNkPsjoriEjkZbeXBBx4BzYmFczqri",
  "key15": "4hoKrt6KeEBVEpCZTWctL9qkdShgV4yAoRxduHzgayofVqjk2KCPz3TZJktMmKGkujEppKdVDE24f6qiwU2FaciS",
  "key16": "21aSj3CM3F93iCzpjdMf1umNpdKGaBa4CWtg1uQ9YCFL83rkeCpqutJR8zwuTd4AuKVaQWunUpkpUKMD28eZJXxs",
  "key17": "3bWm4oGfvC5AwEb2CSR7XiZVswLtUhTkFsfg5zETeSBqqtaFBsMdn77khJRZCsWLMtbUymbr4hiBsgk7nCTECH56",
  "key18": "5uUezysADMCAmAzHd5GDYL3CxP4KuAPcks2uTSEjgRXafg1KZ18asWq6qP3wfFMJW3iLdGVnytLDiPsJVJFVZ16T",
  "key19": "NgeJK77vRkJY41Fqrd3BCKAfvRqD5or3CyGYeRGWnPPS1MCZBrerzXVgwWU5P4fU3aQUt5wL7daHz43ELh79x8d",
  "key20": "3dMBigz5oYEg2By22RLYnGWUHt6hTk5ca3N7QbLi7SVapCixUcUMVNoZsfW34RAcahtdNQRqfv8wc5NL2UsgMep3",
  "key21": "2GrCjkgK6i4NR7pTqDi9ADuv9Ytn6XN8sfejKkLU7g7ZwHQDVz9chsVqEp8cpjT1TkxbFYFBx46r3Jb5zkbD8vg2",
  "key22": "53uH5xZ7Zma5kbozx9ekRkGBgSTsWzmqrc8aFicMUnaMj6zukQM11JaEo7EQj2MCJnekFjD9jzsZsHQkHZQvDGZr",
  "key23": "4Et548JMXxcCvFnMKqEVMAbTdM3RGf7NgqWd3hyZ7k34ANCjirmtwRVW8mAMyiDy2RTPaHfuFknSUVTJ9Ng1Wgkq",
  "key24": "2P5GBV6JywteGCB4H3sr6dsPgxPAipHrWYES2juvfuAUTgAU5Kox84Zz57e1n8Adho9thpbPPZ1nB2RptwkA4VVP",
  "key25": "rfX5SzhvPhSBzciaAt9vV7wNLAZxbpFAfCEGYCMjmF9RveZtYwZh6gVWTbmouuVBmf42pbU9LCpAQjDLuW9Fvtx",
  "key26": "5xDfmASAvuQMo9xN5vkLSwnxSTet3pyhyyr3Bz7oS9VuxVxxuvbDEsd3WCA3nGnLkqPsaTx8vV4Ydicj7Y2AvVHs",
  "key27": "473EgxkgUNQ41cGcyqLWGSimPDgDwV6FbdnRnKh63r1S1wWbHiMU5QVaJZwtdNmELF7fHSsP77iWA7hwL9EwTnjx",
  "key28": "tQXsY3pAq5xyaap1YJQ5rb3qvhKLa7wa9hKWrfXBqybCtbDamjTdJvECNZMhtkmWNZJMb6peSsgCU1VU2vY44H2",
  "key29": "5uyDkWLtpTTVpyX1WsiTxpGBVzTLmuJqs3nTgcZh7QA8GvwmpKQCcqtV4pBu2zr3ExbKZtf7ChcrFqhY1X2Zx2M3",
  "key30": "2edwUzcjaoXY7na3sqVvMMJy9SvTGFjLA1oBB84CDtfEawFwc9TGgzKtmjT2h7pUqXyyiULYW2FAQkMdcG7HTCKf"
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
