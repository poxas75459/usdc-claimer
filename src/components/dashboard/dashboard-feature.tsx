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
    "3YUeLHK6R8tTuupcpby6AyffXGHnrVyBHcoXygSszVHJADbRtaQDaruV91Jn3hb9KWxyEekwwdJ4Q3aHMAxD8GhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwYUUDP1AiScTCGbRnhL46h3hHn3z4R3dfgugLyDNMtVRDAHLLUJLnfGswLQ2V53VtjCATNKJk2zEUZyYjCaLep",
  "key1": "L3uqAq8AE2Ewn7PJW9bsmTrDCDXFmKgxQWZrKDGFbxoX5QJeRpoBE1VnBrJyP4miaBM4KmLrrLH1wPLxFfX1TyP",
  "key2": "2LfVREE5xafABRkhULr4YfGkY3gQ3o41HZq2BuRdw7ayMMbYVj2icfZHQ4bRJLZ7mcsudNcgR6JRcYPvKFe7722c",
  "key3": "35V6iE42Ys5hnPmVjBwQVcU7MrNpLqVsqn5pdZ5FD2Hf1nCcYSZgRXh9AFNJbKSm1Vdj7FmNAc4G5wSYW9wsP6xH",
  "key4": "2kVAXTh5Pyf2BT6RydufP4ySHnMmatkUzZSm6y5eHECZrgFGRyA2JV1VYXrD5otQpBY3oeoKJraQT742XRsATKWy",
  "key5": "2P5SE6HeHLTQfyYjNYE4686wrkFASKHTf1gCMuGXAJ7HMQn929hn5cBh2HjYRaSsizvMC3jfjmfD6W97yRs3X4b2",
  "key6": "4Z2VbGyTBwbCqjHeaJWXnnQv3qX1tTT5UFyAu7XKtqAWFcohrs596QQ4eVBpRAp7Gv3yDxTipEz2t1aJHPscdtNj",
  "key7": "4gd9zUdYK5nv228GPR4xBaUSUssEALPiehU4kyrb98xMdAMkAJtGmLoPLkY6CR1roEnrEkn4FKirrZHQo2h9AYJC",
  "key8": "3DkfZjD6g9MMb7MsWHJwhosBNR3b2ZnXNPbEUKmRRfH3TuZ4619PRCrJ9SFhFm9ZAaZzxT9foq7nDpKSek2subg1",
  "key9": "iwGcqPmcXN9ByiixcTRBHapZ5ea9v9SaTvQ8mtTtnyUbrqsWU664vREEvaqxEVCaYRHvMryqM55UPk7LcnrEezb",
  "key10": "64NtVPUmreSZ67HFva8devQQbrtjo5FRshevAJnNZ4jpSaU7Uedt5HykZh526bSHJeoqTRonvN5LCn7mwH14mFc4",
  "key11": "3Mk5yPp3BEW7zphLizJU8jDYWVDGuGrez3KENhvwFk2ZZeWYbFSs19sFhD7wUE5N8cAkxFdse2Sfr4m69bdxyQnq",
  "key12": "2jY9pwKjEsdVWhkc63TLALvfFg242vf4RHmfMmfsbenDqdznLY4AxCZZF9tLped7xt6CfvUmu8CPxjQecgnXUL21",
  "key13": "39ymwzuViruuBJ5YxMtizpLTJ98MuuwcC2JD3da23MP8uumSzwrkeJerfsTtoFwdjz6cKNY8crZom3wWXu5qbr3h",
  "key14": "ZfbRje8x2uwJSgzDx2PsxxdTYP5BcX1NZSFQh9Yfka1tdX9kxTtw5KQp2hEhU8MzCpSnzp3JNmMbwLs3ubys1ab",
  "key15": "zH1GCwgEB9VRDiB3L5phzryEcmrzAfEi7RYaCfe7pGWYqjZcm3fH6UPveG5yvaoirUxch9UYJqh7c6bWKkF19QC",
  "key16": "sLpDjYucoWPGV2BQHTXX7sgS6q1muDuSFt1PfrfTfz4w5LdS5gkkPgGVTKjQJZFtBDgnjEgbLuwQ1Avndkgu3fJ",
  "key17": "2fqaB6re9w88htGoMkt5ntLHFUybufBisDQUMhArM9fuBz4wcWm8PQE2TDZj5WoQPHvZFimreVUX5RQ1LjU156Lj",
  "key18": "3ebPb1REGB69p8S2KeRCChpHuDJUfxhnZ1CVMHnKChpF2bGRsn4jXBjpGqUjb5AeT2G81hdTHdwvbkSfBM46WFjr",
  "key19": "2sPT8wXE3tePo5ba8fgEdnSMCw4EYF1bZgy8SpdtQHFA3swP1MNesQ9NmAvzu5kSVEEC8nqtdMw7RfEvTUuggwUJ",
  "key20": "39xdZdQBL2p8jQCx8eU4yKAgZ4xZbBX9K65xqE1KANkBPiGAF9svFyxSteLqBiSSLkjQ7Ue6XngMcau7qozf7KMY",
  "key21": "2NjmMxZk62TSScDJhyW1dTWnFUwXBuQLMipPH9NDKbqb8yAfe9qGkqe81JsQmRvahfyCYsJ1n1QTfFfEM4mYK3ZP",
  "key22": "aUiL1gtqTqrTnovnMu2HApqCbTt68QyKJiAhMEfBwtYyanVdzdnEEXsWc4Fy6yFm7qL7x4SvUKc7zhjzMDeS8DN",
  "key23": "3af1kWtMdGVntWDC1dTMLnbEsXMyGLwWAVi2snw3MzZitpeCqssKUQmPvz2T7vZyVXhbbUcnjFsdybSjT3D4j41r",
  "key24": "2JAXJBah1KQKfFSRWe2QvEy5j1iwysbtz3VA38Gi5in7RETiK7LALucdEHjkdMpMStEghb1gxtHSXzvLxCQsLbMN",
  "key25": "5nA3HkvuKRavUNB7M1sLAjEZMBhMrXCEmA3wXuahWDsQyRvRG4ybi1gUK8WSR5fdWW1eESkokRM8KW7LmHErUgGj",
  "key26": "3yPdkoj2TBSezqgwTBPDVJJWHtJ6uiNX6Vtb5hgH4xFg9R5aWdLiHJ8qLFevzSZvnQdpDdFWJqCYYiPAxseLdK3d",
  "key27": "27PfbuJaKJYNdppPknA4qd9JdLwh3mNWKbLnhA9vmnuHE2ihoEFtUaDkvFoufFiURT4q4rHDQx6SU99uddUqd1Pk",
  "key28": "3y3aSLsLF4Sr2CbRiZJA4iF2yMjxKHYU5dMyAgdmY87oAPmBuGPokCRJ1HuyN1qVCVvA4zehZbhXqmVDCYddVf8D",
  "key29": "2fXcB2wwGNg9zAE7vy5xp5XYSh3meCB59Lcct4csxedvqtQFDFcne7DCByFbpQWEaePkrzLmRLxfruXW5GKYrhto",
  "key30": "2jUDfB7SfTMLY84s44HBuHXXbcqSXz5ufVdD8UAgxTSmsgZsJ4cEYqiJWZW6BbCcg89W3HLvHBTArdNn58CuCVBH",
  "key31": "vU6SQ82ebUmcp83AXm65JWMuuxygRprjw85eYxT7NtP2w4EVbgLigahqUpkh8B4vUvmVZFbPpphFFnBqbWfLcH3",
  "key32": "3TFMq2SHaA6CSsfp3yHxrtSZXGq74rgDTsj5Cx1ifXUYj7Hs3JTJQbfkyJkQvJmCrqeqsLrGWpkJg3P8inGkg3j3",
  "key33": "uzrxkM5zriLJfNDNihf9jShstATrJEpf12f2dvRvxpuZ9iJKuw7f49h5wcsgPfYsU9mEvtWbJ7TvW5NGS43NLEV"
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
