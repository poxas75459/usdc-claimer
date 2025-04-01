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
    "2qjCxtAgrh2h3A1exfmY5jV9GLPSsRVjfsrvjTkDiHBnXPJ4YRRcsnJ1XhPkunegrwUJ9X4nbTib3TmXzENQqvoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43XHkPYsk7Wk8YJc33hsGwhbGyQsagk1rVuUoP3dChjQyBr9oUdAiciBwqUua4zDn56TGKVY8fmKYLpbMSJDRBRQ",
  "key1": "3oQABdGtt7gVSfuh3X5vj2RzohfodYvXaSEJNHATMQUtrAjgULkDi6msqvoR52H1sHvgT7sxoBRa7rmpD9Ns9Smr",
  "key2": "5NKHHxUHB6yACu5T8nTvSP71RqQV5LsUtJsKbYSegcG2x6Jf8y38xfWjQXq4FZFypnafg1cbXP15g5LiWiErYEbf",
  "key3": "4tjXuP1Qa7aB4eHPJTFoVzL5r9B4ftNV3d8t9S8GhYGnR34di14gNy99gvNvy3bagijTueHL88WsMB5VREhhPFnv",
  "key4": "PdpmsVhFNsKaGjVLabpM6MUy3r5ui61b2SCmb619uzs6hx7GUsC4NaDxVGxWzcC2yxvfu6TF5Wb6rKpRn5rfHed",
  "key5": "2mhYcEBYa35CBcCFDwpbEHL49YrBPVbh6R9Q82TQwXZjgMKSY6AM1Do8GcteE5vBm1fQcL1oF4hUrRm1FdrZdvRw",
  "key6": "3nBBTrwih6gPPQTYNLADNh25EnMZzEVMrB2h5KzhWmndimfr11QosVWtVJFZtFbxbWaHnu2pS3E9w8hY7SzSGbp3",
  "key7": "AcwQZf9A584JVAJb9ezErCqpLLkNxhpxwhU91qmuZFZ7zmPRNSzAT28Ya4C9kigFarJEaGMhYgoguGXchBXiV2z",
  "key8": "4rmU19XGqR1i3qJEghVdq3j1XmL2CCBZsEWTinRQKXeecRpuFk8E1ajSRnmqbTAwVTuedTN6QtHGAPH4BveMuLTT",
  "key9": "GGjcENLGAjEvdSXCRi5fJfdxNF2yUiYP6HAZVcjR3PpTsehsm8oMSo89G719r3kYTU83VUEzBGtERE8GEEwD8c3",
  "key10": "5JjLmp7P28uXFZZQQntLrLuBonHTbmmPR38wfFh9qgHmaQjGo9uRxpMNugCjwBkvtSC2krRZD5WaH2vBRmDTQd7d",
  "key11": "34AjeqrzDf2aiKt9CkGGTzciS4Y9ghgv8m67awGj5TisRCBDY5BboWqKjJm7KARZgr896ZvdiQwERPx6dEqvoFLb",
  "key12": "2tvVhcQErmehN6BEpbyuNP2pka9cu47Ti2PuLDq811CJ8VrL2NjiBFstP2qkKxPd85Ykj524LeLnd12aFaD9r4My",
  "key13": "d5dSYJJj2bigi6iJdZujYFMFQqmGWqrQT7UDx7wwJHBsa3mWqdgvrwncJpVGoKYSYYjMskPBE8PtfpzUWG9PeYe",
  "key14": "4vSPSxKSYsF3Vshatge1hQnEoeumDegWVTrDfXohsZHb9hXWnQGo5n22ap46wukcaFmWXCZwASNw9LPPiXU483ci",
  "key15": "58hqPsCC8TNGw6QoKhqBBnj2jDw4rGFNTtHyxsoKVdhpMmCJcz3zaPX3DDnRPyYYEhnbwLCwAuCtDqzVCCKNkFz8",
  "key16": "2R7H3KUmaXQSuP1xo8JCjWveTZ65jf95atgLGw482VFJJr3KtWZxVAXqmeFvhnPLRyeCVWVFDscSCXuDcUJSpcuY",
  "key17": "5xmo2Ldfr1pR1mUA4BVJHFMuKjiKikAZMQeLvPseta9zSFpsCF9RU3kdg4Dx37n65cMCfe6o7oRXZDEsZUxe1PPh",
  "key18": "37hK3PDLZvZDYSxSX46AteKJp2chpoHGZ8KPZe7eKFVg4GgveUfnxKrP96WNJQd3wBwmCqj7TakAxyMFFD1WA3fu",
  "key19": "2o1iPzjbpLw4ej4RiXh5LapMKSjrHxxubW9LYtBx35QrCdJ671VY5tMutFjdf1h5rgohxJ8KYMpCBZgcvycg9yvZ",
  "key20": "5ShjhbSYefGBsjqA7dme66HDDyQXa9efgU3JPC7fWunJbmMfRkLuJLPWiDyDzoFFUA6GVVTarGJh99zCdiZmxHMd",
  "key21": "59co9XBTrzJjStWLtnaqkdi43NiAG27XZAVZHWfZxDf3a2iLyMtUqSm7MW62xzWHjSALF9x64Frs63h9WCZvn1JG",
  "key22": "55vz55C88e3rF8VE8GfoHywx4e9RKEvk4P4gfswZvWZyRQ3SSaQ8bTEcR8meown92qCQQjKGNFpKZxRBpmiJDp3G",
  "key23": "3NHgZfABAn1N2FectZfRCuWRcu4yHN9XWUngxCMy3DTUTg6gPZrmeaY3AcYFwhduGJrvYcVhqs1pvb6ZKYKzVn3p",
  "key24": "MohsVeZKnPew7sJW6CAHE38PhcPZEsATSAixVwqTNwtXyANb2U1n7M14iKnXmFLFpNJKhtWShEdzHNMdd8cuvh2",
  "key25": "icKhBN8SMxjS5HxoyEw4aPsmTA8ydLdKxDPJhLo7j5WtpDrJTE9PooTmAmDHvuuy75X6utkYfawBiREYEe1PZ24",
  "key26": "24k47NCZqjqER1idxZTCZCggjnd9ZYJhNdn8ocwUZTTMtd3hRGSdxeoB3dq9LSVn2NeLDaVVV2JQ6M45QyvKB2Lt",
  "key27": "4VkTSooMEvFDk5Lo9E4ZZFSdSwRmHw3A2XPb18K7WA4Wyvi6jHy58LYVgDzZRL1xJWtsGYiGnUG47YS2UCdwMmn9",
  "key28": "xuxrbE6rV8uqH6tYjei8Vbd7jW9qJFHwGrc7SKHnJ2MhhvvQTmRDtwR3QGTaSMCr21VtURT6epMgFoqS3bFoyYu",
  "key29": "4ScrZ8wbo7F7binz41AALHt7Kfx5j2wL2qnLpecDYWnz5sJK6gZRupSTXa3EmF4JhnkmuBi3kCjaXdVnXVWuzegf",
  "key30": "2pAiHt1kKdRxgsWxthavCnXoGGGuZFP4bYUJCTRWg2xtjxpTK4RKV9txLbEp9nprNX2CH5fz1Fqid3KPRL5EXTvY",
  "key31": "51tDfzKJ2xgAczELMuVEBdFuhsnhnDF125wLmnFsN4wKu5GkkcCnVpxM7eAdb4F3pZaNGBfeVjxRKkuVaw5Zpz4A",
  "key32": "d5tGSjGEZTBJSpubj9fBghPdR84fJFbRBJcCMveWBctPCWL884otyy45BKHhDARofEs5H4xyB5DVKxuMLDtX9Fh",
  "key33": "52UgRuGApNP8t6vzRFcdU3Kzd1guTffMgRQen3zF1J6aDjwDakypqpc7gCXHenc2n9xdptyW9vFonojJoLLhnQgP",
  "key34": "2XV11QtDZbiTJjyQvesSZz9FfGb4PcCRK8S3TEsFaewxx8PLfF8dwXz1kg8o2HRLjxhsdGo8nSk2z2emUSwGkJdM",
  "key35": "3W12WreVxdBtKCiWk5CWFzUZUeQ1RCLKFDHkUvyVgo95uSdR39C7R5mNpA5zGkaGxpgqqyLTq9ab6umJJg6bcyEH",
  "key36": "3vd1SkmhM75P56Qdy4NVMNiSMvFq281tLn856DP3sDLR6yAnKG6hPGsoETFihctyj9tqiGaqzQCSz8iTjstWqQiY",
  "key37": "3mmGDwT7z48uk4JNZ3wuPzEHdJxYTevW31jo6ea2yavqSjk8d6qtQNqT1Lneb92ST8pokSpBRZ1f6R7b4fmToSy7",
  "key38": "5aJuNC6qwTzFjZWYHzgzkKUowjs4yJYYCf5gaJ6gx7V3UV59kQr821eDJLzGdp5GXVfbrBAh3pe3fnJrHqH4JE2r",
  "key39": "3qJuydbphhHJjLswL3wWJJJZtcZqFZ9wnjrynoEm4qDRKi6W8iakFhpnKSMtq6nH1Bnf9BJCCWrzoPdiTPeu5sx4",
  "key40": "5twmTBxW9weAQgkCJ8E17KWs91SfYCRwnqbkFNWt54VVXdMDvRXwxrdC74uZe6UoqWT5gFW8ry5CZ2JH2rAvQaRc",
  "key41": "2q1bdkPjDgnPUtjCU6wJDsR3umkwsLNuGnJZbPofuzHDNYKDcNmR1MCaEPZ5g5fNaJto4h7vAn5iKjBPBtRR19cC"
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
