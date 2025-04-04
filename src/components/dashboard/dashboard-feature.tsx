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
    "3YZTWqsLtTDYc8n4JJasiwJnhzfsabJwZxXaK93yCBPkPR7k48BB89mFpS89EvQvCQbqJX1a4tZGvundm7Q96Zsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYcz8L5kmVEsDtzoshUVdu1WM3ihXUbZJx1LryUipUar7P1zjsvJZqx4dtPHxdgUGx2QpVgKQuQGixdqWjhktMv",
  "key1": "2EnG7cmU1G72qShSgKkQnoc9fRmMqkmJCypJ3V6Gigh2Qwf1kKwpaFvuoQMpyanBwNF6ZHfhmYBXwXFutps3GGG6",
  "key2": "28gwXTTNrpd92ke2eFsbcRqG8c6oBXrQBPbfdKcqzwkXdTKKTPRMqnpZbwGnx6gJFRiYNojLLdBbD5BnnCBpMPSo",
  "key3": "2GkDzCNsGS34vA7DYHfLrvFg7oRXqzzb7cv5LheTZUqJa25n7xkji4f2nCG1xmmdoze7br4ga5hefjzRuHRS1V4h",
  "key4": "BBoCcE19CXYMttMS646TnBjohFKvo4xzRqsi6gFnnrtdKs4bK7EqJWqUFRKPtf5rqE3ujBVQh8nj7MhCJrQ7puc",
  "key5": "uqXCSoaeDtRjhkY5rQpyPGX1dzBpw1DbwHRdr6y3EPBE9phNfCrcTzkF64GYeeB3Gf1F8SRciiVEpyHGp51UiQL",
  "key6": "ehUwDXZ4T6icgbTE6V7BucLMwPq42WPBkRgJcAmxZdqUw9mb9MAGdrNgstxopvTXpnTNYb2tZhnFGk9ATdNprvS",
  "key7": "kVdtcAT2eCeuMmHzHWwpm97HURNAvZfGqA6r351g3wEiTXmA8t9EP7kVY8crf47AKDmUxEBsNbtt2CbuSByScPD",
  "key8": "2xCGm8JAG93zPhVhg7untvWEgYEAGgMiZZSKb5ZyatGwD17vCiTp7qYSnpLXXgMteueEfZ5LcmmRUMsbjaxB7nYd",
  "key9": "2tUthGijejkKpmbRep4TBraAxSTRCSzeGdKni471gqcKmzq8gvPX4U7RirHZoFT4dgY5phv6kJzMRnQfSxF9sskz",
  "key10": "5Nu8MfqmDJU6enra7vmxpLyMvK2aNxUiNtjQCLfSuMNdqDUws2BREHNsP3NwzEVjcPjiHH8Kn4QUtnKxoEzx5XQm",
  "key11": "5osGKLpTh8PP8b4hWSsWrF2cyj33QpSZjy7pasLJXkCzJHcEordccoeqhsm5JUmFzVD7uCeTLAEdUXcKWMNdEUJF",
  "key12": "5ujmzhVnBTdkjYSLtacJ39tchH7qgcEkYRiiANSWKfxpQDThfUhSMMQ3jbSYBFRUjoBS1PsNfa2c7sA5EmfkiRKA",
  "key13": "8tymLZYpzeWnfR9TVtjTFtTsXxp6phsWHNiSUAtEfYWaDfYjpEVV8yT7M9WYKm8wKNwvG5GahSRyNYWTxvupbkv",
  "key14": "5JARx1YMPShUi57SYbmBLUm5R6vGiE8udyPU9XTbJbp98zLMkQqELLetotLxGDAkAJYLRBK6dkC2jwA7ooYnposx",
  "key15": "2WBJKzUKg4uG8gCQDRdxjNAQZnjTLBAmfzYcbsV8oJ9t3xYUTA1ZbjCCsu8HbqWUbuKfSFfgq1WBU4U4ESrcTUYq",
  "key16": "2R7gb9MB2UXgqn93qmGKwUxMgowKCeTSduWGx7mnf2PcPZZQdXpDaU4M7jkm1e7sWT9TsQpWfTz3hBMvm1CgvDXa",
  "key17": "4oEPZGHxtirjKDXU1B9BZ1dhbBaykAyLxq2fhCtebsyCN3GDHDLnjEDkN3TmWHd3gbugZs3HefFRaH1ZhpnDccA8",
  "key18": "MuFCQeFEwptXs1ZJPUGDCc55dpccN39J9rLoQVFLKLdqintgNTiTHa3hFXsRwbtFYaeNnWARC2HyYSDKN2rb49Z",
  "key19": "625ZwoAhFK21vxkedXQ3peoCNWUiUGRmnQpSADzAyfAY7K4cqaZ3WDke7ctmBddkKb3etHRLXWwi29jFP6NGNtNN",
  "key20": "2FWYkWazFc3P1ay5TgW9AAfNdscYMcCriReP5xYon8LGBN9nP8gMiK9XNu76UQYnAUBhAxDPdGpPbS9PHaorTEyB",
  "key21": "fhQbUCZ5P2vsgdHeG6zAguB5G8zruEXnC9bzHhbQ2jbaVMZJK4g95XXvZ6VYDnG5aLZC44HNemzT5vs7K8a3jQQ",
  "key22": "5gQnmXFEPSCzHu6ZcEs7HGDuX8LHhWdGe63nMDQuLsGrm4wSkeGd5WQf9WGh5DgrnKjtW28dmcvuoHxzCHHwZJo",
  "key23": "E5NFVtejviG8GzUoRt87pyYTbbeTHqPFS3o8NyRsz65waEA7yhg21BtvcchMoaTTL3A8fLQEeoXPtGzbSgCPMGT",
  "key24": "81aiaP5XiUKGushq4DPHswWKCfwtkCw6xeBJWhegNcGmPyqcckNx6zT3k15Y319V6B9pSTKm7TSaSBmHMDazAW6",
  "key25": "36mxhgc5d1mv7J7F3xVWhdGujvVujzTERsiyZCxFqBjfsgEEwRpitQFJw6Q57kdesEPdgpuYYG2ET28ijqMxao8U",
  "key26": "7cUCNZCYjBxxu97AJ3JqVF7mTVmgg4JuJb1fzwza6W3AGbPHaTisngJNYadRuFR52FwJqUyNUxTR4u1kjKtNmgh",
  "key27": "2qqg6XzhqVmTsjQcShC4JQKmWFUNyMep8tXxxMBePKucoVAYWQsrGCsTcp7WB8BLJCTL8kkX1mTKzAaYCT7CvEWA",
  "key28": "5NNfsvzGJRDZBHuRMaVWTuSLmbnCtoSS5bdP6izTXwt554GE7AGqXe8vgwFNMRrcKr4Bkw9WvyWub3kEQ2suLjDk",
  "key29": "25n3afySH55umpLToUjXdMscv39WBqg9973xdK7epB1eMqsfNHVTyzTMMa93WnGyiNGAzBgCEyJ9GjkgKEtYHwCq",
  "key30": "2HbjY6oejwHPHbYvHdkbFxkDLCY3io7SSnxceNMfvRmmf2d6Nb6RAF6QqdvP98z4eKiWaKw5euiY4qee2RaLH4LH",
  "key31": "mwSPkbiY4gr45aAp4RFc92Qy8QwxmVf9AepYsFn89qRqT5Zqvm4CEXUTjf11z91gGxHmoWfamAoAz4CgZeqca72"
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
