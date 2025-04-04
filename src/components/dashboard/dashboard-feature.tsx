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
    "5x3ogM6XPaegBc4gCoKD7ouLimM5b16fdM4RTziQsNsC6fiHZDePMvNGKhhL8SBd9tfxEjjY5Y2J8N8fQqEoAT5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Beo74U8CayxwbPCKyvPDcFANF4qdScxLszGzEm8spVAee4aLNvatEdBnPPoqgVXg5abbeXmXciyDqtYCP2KKRaF",
  "key1": "4WARcH71hzyKp6kYhH8rwWiAjCkynhm8ErhSDWw6cATeiYWRgwsodUBduZg6ace6cvnXjPtWjKXA1DiykiYa8nk7",
  "key2": "5zWzws5dWwoqNDXhJt3e7QmyfJAmKAaid6ynhJ9uDaH5B3KH72h1edNNR4x5MZ5JGaUTdVzBvHzJjxWMB2Ay5fRv",
  "key3": "4zktuZX73myXuUBKEE6Dx6PNaEcxLDgw4AN9r1gtUm6k9ne5T4yzvnDeMrEsgjYoc6Azuo98gJ1Y3LGGLwez8UKn",
  "key4": "4G5UY9aDP2CuLLdtofpxE4K32AC3SZ6YAPhxLCEw2CKhLUsuHLv6hecskLzw9xVaQ639jVj1nAHTJuQsSReUM5Yq",
  "key5": "ymLkCYDiy1umkSQA7wjKVHZEwud6cof4Jgm9oA1xV2Ux599xcmisvMSRh3CYQYEBRjC4UkBxvVYANc5EgUMXsFF",
  "key6": "2d8GNSHeoMGkkd6UUbyW1uPsy29D68ZC16sjNzKGuPw9a5sBxvyfwYaCqf4DsyrXKv56rR2oEBQmUPfRBNfsfjAm",
  "key7": "38h5pDfq3hNVGN9Uxk2pdKELRFdjKtJLJdDoePEw6crgrXZSdM6aRw7MVPgVQsLNStnyu2RRtZq7V2HwPF7cy4mV",
  "key8": "kBzvQ3UpvK26UPp1JTvA7bVvd1YzaRrny4U189zwrF1W7gFukpqQ6Djq7ePAQ6yYxEQRPtLDGG8nVD1UGtjkjxA",
  "key9": "2549Yic5APwWgz8zpnivqtLGvXnvp6KbR4qBi5mT7bagfPvnLtHuar2kRP6vToSKc52NHWtzxRav2GJfUfucCCTG",
  "key10": "9jdWPLsRNWpW4eSNHiyEhu76iTTvggiR5Qujb1KwCdeeLku4crNqcoawrsGvtR5FjMxAnPniVeVMpwFx6VBb6my",
  "key11": "5GyRZDGJQDVUm5NugbXt5sRSREWpzVTbkfzb6Tsok1YMaq1FsMyAhCymSGd9fwUsHu4qc7VWSG718MXf9LC7o2jE",
  "key12": "2odXefVPEv7eBpWJekN5Sc5BxYUNHv97bK5pEEsPR99xnkYFySsPRMxW9T9NLhGXNG8FuGwTFYC78D7iuyhUMTyL",
  "key13": "23sGbCisJMtC1icTRN25bf8JUcUw69q139F25XCAfzoSz8uLoAZpTeGpi7vAHvPAMc78NCXoDuhETNReMTwuVSe5",
  "key14": "4wBPKNwhTFXZcmUXMm8nk8XdmJTZ9exMSw7VdYUKo1MaizNiBVqVqPxt3UhRLmFTRb8v7Rt6Giuw1UNYsG4T93Bq",
  "key15": "4RU1Dj8n2WcWxGxyoDo7xzFzyp8tRAVup3aUsDrLrcmLD4m8MnbNsnfEeLyxZz8X3f5VxXaBhfRYAG6m63pmSpe2",
  "key16": "67diodyWUcpHSu7iTrnhPdpjUGsJEYWLst1zB1tXdknpohGFaxYBGncH3WfiiAZaWDMd2UWUCetpVrrKiE33ECiX",
  "key17": "3oDBGnN9nKLtA8qu2r2sbzHfCHvpCLQS4pqiWA3q1cyaYDQkmy5f6ogE98zo1FH7TwBt7kgZhsGFBG7dswUpopVq",
  "key18": "61FqpqCJYbN5enFvjmXHV15Sk5feaHrdCxrd7gyrRV9VGYxp7f8EiUS9Fe1y8wYmjzQ7fQky7cuJohN3R1sfLRAX",
  "key19": "5UGYAgWaDgeHC7q2NqirCq4STNKuqr9uH7wUnexBVrHt8fdri3JdJmhWsyFLxBZA8miH4hD9U3HAus8eS2pF3rEL",
  "key20": "d5KKnH2jjWZ7Y46BzY4ah2N9EMT5czyeYd3WSiYXNFruSF3rws25Ck4K9p8KGdXuwTxW7gK5X3n7kVMvZ4MLC3H",
  "key21": "3ULYcs8v5QGJJ3YrQFcjBTCRAuNiguubFsRbWpj4YrdXgX5yHzTChHDq3wNGfUywkFm7pxiHPmXCNCGfwZBESMZF",
  "key22": "qQ6NYbifB4CrLkRamA9mL1Lvj1UZNi4uYLs1vvnBeQXCrCSrG6p1SRLfmHV4zMwTUacrdnxe39cPW5przsatFKN",
  "key23": "5ZAjTknXS7Jiac572EhvFimnyLquVuCs3UpfrGBxYquQco3TEdE7MYhh3Br5VcQURxDxegSmzfxpnTUjvAS1GHTw",
  "key24": "rEfJssULNhVaXSGkeGjp1z7tJoeuYrpGb6Y8gkfjavHchKzyT4xrKErF8CXWkwGmW8cbou3GEmdtQgWDkSJfQgv",
  "key25": "5UVng94XpoRm7fZer9gGFfa25jz7F8PhySLAC1nuzvDhVJRkxZtCAzZkWxT7m9GFGuq5Pf4J3MhFP92wk5ofcgmB"
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
