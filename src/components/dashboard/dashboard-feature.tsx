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
    "VT8v34egwwFUzWE1cn2MBgRhEeNReAWYXWpgi7VQkXe1ACzxMgNwkbwwQoZRpgbEM1Zksa21pdmsFLJDUAz57Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PQV2G3eDuZsDt8NCZr7uMwM81Va5DZnhUdhJzefRoLjfZ9s7Yu8Waq77qCCnGjrrGmeSTvjjjyfD2UrHQaWmpAq",
  "key1": "2J9Nm9LTtshde65yNJaeJ1XsFWE2ESHstSMv2hrPwk6N622Xxrwj76hVDkBpMwtvpZXAnEWALFeWBL4GXRev2UWC",
  "key2": "KymtafqLUKbqyaFV2dctv1EevKszDZdcGTiQap75bajvJDEEvtnNuFmd5EnYNcKqKtTUjycLuDzcHz2Up6GSJQ7",
  "key3": "ErSHpAfnJm2A1SgaZ8VmSutLDiErqLjfpkGmzpAdnJemX5pT9LYr6TUh8L7imhq4pc2cZw3ee71pyi65tJaVm2R",
  "key4": "53FiuUrLLPMiiFhQw326VGu9iDu518ycHBgzgm7YaRCkT4T2DxNTVDQg4W1nSpesAKfPAyk79AGWPp1Zd7VKFBaE",
  "key5": "24v5xnmKtykuksVFwypt2vnp8iD5ZgXXfhvE2jNMRzoYZdgtxtufSJT1CafEpPMabJLoqP8LGoiru9gRqdeUMt2U",
  "key6": "4TcTRG89XJZiNaw5NmLjTARJnbny2Aed4zpsA4H9K7zshnfas5jX2Upu9X7fxmKjHMyyurEzASwZkdsCzczGa7wh",
  "key7": "xnMtGg2iNfmb1uAchCEcQinBjDCkT2srh86UbPLXAb7F549W5wTV2c8TYiNMyPzvmAcWoP3xtoJ338HumF1Uphc",
  "key8": "3DR91YgFJfU2dcjzeD6QdmN4MPnHaMkD3YNWNjnNHCovLhB3332ckv4wSZGidvrupS7DXC4dsVxn1MAdkcToxH8T",
  "key9": "3w61LKR4gqXa1aEDa2WsaEwv4fsPVJze6XrcXymg7kVtrerrs3GiCxbEwJKDu8Fb1U27ABzdEaFNVryjZL7H4xS4",
  "key10": "G6M5DPpAwP7W4sRR7ohBNQ9b7zUMmXLDRcTypRAg3urd4h5SvDW4bx61pUUuNVNWJU9FU45kEdnyx3diuhNVARX",
  "key11": "XG4T7f3GZZqjL4vSpx2EvVt9ZSA8KJeu8tEeE71RUpCPdJPsuuUNtZgg5TW3Fvj7BrTiKYHgwkShLmDPJgdUnnx",
  "key12": "5nGssKhD2JXNCM2kV2jiBZU1TgcJx2zrv9V8aH11hBa3GYdyzLg7ZBZ9e3gVRe4nHcNN4GygSgYJsTSSrzdG9Lhh",
  "key13": "2xpzpPWjxSaWAAQgGW9LLxXzJyrkSUFx4ebZaWCdMREEb2nN89htUeSuJDQoc771FxhkSdbtcg1wjPRdjYQvDyN9",
  "key14": "5wJNqTBrM8ns1jGjibiqwqyaoHMLieFZEKyjv2EnYisf82PMKKFzVcdhQfpsLyS3n2HV9Wt1KLhd7YeF98GXmAQ3",
  "key15": "uCt2kb6qzyLR1uAS5U7Bd4HHmaLJK9VmVgVkkvrgBTtUtLDRiuye4LJLFPzGeZoB8rEAgTWzRo1J6nPU6rpn3gX",
  "key16": "sCzWS8yhJNdf1Z79hqQGzEG2CP2MZYBvQHD9Uvn3h8jiQtWKok8sZMjZWnJ4Y1JdY147NPAT83oeR48tQoetNV4",
  "key17": "3S67g5cpbge4dc3wUDo69XBcbZyfNcLNdjemCwgquAwbifWF8tPKHVamfdgszGUfNZdu3TVCTVTJo5H6NveEVGhi",
  "key18": "3W8gf9n67hCHbuNwqEibFx41FSyqs3Bg9CdHwomU5EbsVhKgMsyf3fGKsHJE5vWhbaHnyULYfBHzbjSj9vYkdkmD",
  "key19": "61qNziwfgR6vCcwvFAdrtMeJ17JgvjJsKgCs6rfPDQcTsWDGnPJtUL5ZtcJvi8G5d5dvT6c3zE14e7MY2nWDKFvN",
  "key20": "vAFgeb3vSZo3G19MpsW6ZR64zt4ERHzYF3iRDDcdayArABQtrLK8zVzL3zBqefoycVZsZvWDWveimfZEtLJroHi",
  "key21": "4JUJAJXeXz8aRb4QbwVxrfNvg4EeC2UqZbY39wrwBiZp9AUqtHQZnXE45z2vL76NsdTNd9jmSzzvTzC8BYNgYX61",
  "key22": "5dqvqSdmnh73uor8zcT3uFjDyzyUAhSGWSanvKGfsf1yE43f6mkqHBu8xJfB3jHVo2v94Y9rcERWQ7wpUwvNuzSk",
  "key23": "2JiCF293R7RcjeFjQXHS9n1WERerYvWH76rkDgZyAnAAyF36zFfWEBc5GhPMTTQ2q8uPUdLzN6J2fFvpZBruVzkt",
  "key24": "3evZAhwjbzMjijH25HgDHWtfiq7GrgdkWTXqyP5Tcwj5Mf1vgsNY1RzoWpp5nFejMLFKs1e5fhdGZ9jJuhbgKf6M",
  "key25": "4vXmbJgoVzDqHasHAZEL45DPBKHAyCWtzCLcmx35cUjQhZRTwJsi7B3VS5rG9CXNtjTArPEQprLfeJVAWcA9Q6bL",
  "key26": "3M2UJ5TSg1Ge659aGRYmQQWPvj5kDpSCRnWTDZjZrh2hmujdsukFQM1aeT2S2ABAKvrUUJSd6WyPKDSBp7Y7w2Uv",
  "key27": "5ohBWFAHjneUKYmJfBh75NpCuwMLDfm8chVG8TjU4vePzpu2yKYh4sDEqTLtaNzoy3mwHaKFey1FhBKTpdH2UZ3g",
  "key28": "4TFzj444VYxggukhEBQzDUvBDuMgFrmzJCfgdxvLq55K428QK89gGqGaG4LhwyX31C3RwDbzzYpFyuRE7rWJBC2K",
  "key29": "EgJaTsbkvUguidcuiNPz6QKuE7MhMbnt1GV4jotEymQEbyr6RWhqaW9Vm2ALKGfhXaWxHADLCJog37zJzVhHWZr",
  "key30": "2NBbxVBgpNvVMVKDmy8Mi85yBLDUGQ6PsxSpmsYQHkTMnSEQhred41avEHnmoZTzKDDv7nuEaLiTrVkg5TfByecz"
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
