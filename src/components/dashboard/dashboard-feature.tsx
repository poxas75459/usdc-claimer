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
    "3Tp4echQKUNqetB41b4sYEQq5QJzX4y6yFUMQzDZkX8214CbkRmPZ7kfH64TtsyeSzKTomVqRp2GPaynG2mF3sWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfBETLVG5hfGxkBH2TDgEpGZmRv3LTpfbrWWyqPadpeJYBVyqdQBzyAdMirQiAJhR4RpsLjqjtc9oiFDNTn1F4A",
  "key1": "3E6qdryZHchTptRDX43WHFAeKuPFJpPtCGGKRRUhKMmjeyexWARLsMtgxQZVCEY29zXR8EYgkyRZ4xKUerPob2Vm",
  "key2": "44Rc4pYAb3NUJkCxz7zzorQdmZP4LntDF7tdazRBtWyqGkmL4bBTP16567vVHVyfWRmq8w8wAFc7qr4Tzaua8V8B",
  "key3": "5LYZ233CH5acCrsjJfgSUmLgB7MwxFAbLFaWHe7uGjLTmAeCawVS2shj5PDinTyPWt8BJaRApiyGzBgykQpfoxHi",
  "key4": "5S6TeCeNf5Asktd7iziFzTfL8a1ELEspDEpaM89BPL8UJZdXVjVRUUHjRBw2oeyTmnSV5V13zNaiwnSPS2amBTtb",
  "key5": "GoxJ8PogPC7ZVHsfLjvEgr5338we2d1EPDMCgxGD79oiiundkJod6PYa34xUqau78Eby4Bj9Fb4dHKPLHVP3D9D",
  "key6": "5zqw9N3EikRr5189GQ2TEqQrH69eaevQe2k2cjdh26jUVuU5kUyydZsSJ4HkggW4QTBLaDPPvkg7PD21JPuUXeZq",
  "key7": "UX2oU88M8VujLfQ3mGb9nyXWeMysiWaJbLU1Xq3n724mzpfBN7H7A5yiJgcL4uiYQtJbDUSZFXbFj7sjGmnUCXD",
  "key8": "4kc44FimLdFBLqpecD9ef7AahMsn9dkaZKcjrWU3kbWaSxwNCCWG1ewaGdRkJvjScMDYoXbEWH9drphQwvmnhXWc",
  "key9": "5EBm2VTLBLGgd6hnmqDwbZu4QBJU1ZxHbYRcfdpqTfhYDxXqznmxhy9DXTJfS5GA9LctF1mw79ZSzvk5B2fK6ZQm",
  "key10": "5VqL39trin6z94KHrr27ACd6WJAQYFQ8bjgiRFxo2ECP3RTj2eonMKWZCnimKwAHdZne4JpKohWPmkpCBqzzqveY",
  "key11": "28HV7p7jsQWho2SzCa4PNbYpw7Kbk4RybToQUzhqAvufFGNPsRZDwr7j9BQ6Pon2PkFtdVoLJnSeTJH86DvCpsAp",
  "key12": "zHBJyDN5BGqA5ApEHqKBH3MhUJk8ZeCUUHx4sW64aXRXTakR9RV7DQEp6hphJjiTuvBSDUaGcsBcFaa89Gs8J2b",
  "key13": "32poKBw8YEpmrNuPrh71iuEreDXVSCVJfPLyrU3HxMkSn9STqY3Q2NhWApKFzcroGL8TeWZA1KBA6Qa4NZZZhq1j",
  "key14": "2VVvVKuspMnHBR7BgVzQNpwyHVR6c4pQA2XRor6cpheJ2tozRgenC7tqF7yzfy1bhR4nJxDZpAf7s7kmpAKTZ7Fi",
  "key15": "RwDbbPFbsjcQMFXJeLWYYka3x9z1T4dhzKDAUWzX3E9KBa5hBLUSXCydJGsmv1Kg3ntxbpjXgNjaikX6VMEAqZU",
  "key16": "5eiY8Cm1XxZ9tUuJLMHXVcgWUJA3uMJvhB8gK9wKge2d2LyeVM2Veoq6DiwtMUCwNk7RZcne9KCQdTJi2qVGVffk",
  "key17": "21d5dYKC7bCGA5ddzd4pn11kJVmHRYuRhG3EtCnziyZoiVdoM9rFTee1UyLoxEM6oYmLMViNPqAg7fcdBdLydX9H",
  "key18": "3ykpfGZwT8nRaAg9Xd7GWWQDEeb5MZvuga9QVbp4qAzSJfVmmhWzECu5JQN51dHs9tr8kTs9YMVRZPufwuaod6Ju",
  "key19": "2Hh8kNd8Bsesk7Gp2kGCJBFPaEvFKGDgNpDcTqrGXTHSU7ueoaHYcvm8xKTuSH5ycacLvbKcpSWRMewaUMc8b1Gr",
  "key20": "2NDHiRX4ZFMGs5UqdQkiCkJ4ZbEf3pbX3PrkGpGuH5qkSWpYuEKnjXXJ2HA7bnqMmNvFEd8TMs2wwFJPKykeiub4",
  "key21": "2USA2Pfc66o5EwW7L6Ugvewc5GCy1bU1nmFCmHke7euRdkrhrNjei7A5EbQwD2ksMoFUfhNvVVhRfvJkPz2173Wr",
  "key22": "3ixkdgLwi3edM8w9Uw1BnmjRtRyRKBKZuWVFadeNvBdWAmGb4mmjiJ1xS6kn8d2o4gD2VWucKqufHHa2jYHAgpLy",
  "key23": "2BQ3gdJeaSzwFPe53mkJyjpSthbViNqkTe7hwbGUeKYMS5BkF48Rd5vgHrWAkcmk8jRWbAwD63uc5BWNAUHTca8g",
  "key24": "4CjFiHkn1jxsAqi2pgfmfRkRMwBnJZWrvo5oHq9DfTrpzmivHak9VyZgLu8r3D69HY3kNgXArdSro67HysYNDCSb",
  "key25": "jBAhwzGRwoMrKmw78d6EnEL6piyCczjUZuhC2M9UabHnPbzAxUByBMKhGb7jQY4EMUmpREJ9hnZsLNV84cWNQHz",
  "key26": "3wDWV2w7dd9H8Qw1i357UFXNsiFD2fqjH4sCi7Fg9XiPFhY1Mn8M37iiwvPoYFauew72ekXYiHsH6oWG5r8hGWi1"
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
