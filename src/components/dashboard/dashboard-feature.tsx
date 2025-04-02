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
    "4E54BoUaJCQtBeeg5udXC3pPN2g9fR2gRLsYFQ5NfdLdp9FRsuDx3miesa2D7FDgPo8nRQZDthhBurD1yq6DQjFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HvnrhfegW6ye4UY55T2Msg4SoHcHR24eBvDAiuT9bZYAGx2DvwoPHSGAHRU3uyTqvaDPcja8PYrJdcYt8cK97",
  "key1": "5PA9X2veixQbAgkReT4WNaVYybWjWtcvjssvbb44V6BLAeEoreizjYy8GJk4UT9s3jxnzptNnPtrfj1hDUqgGWhV",
  "key2": "qZtHGiA56wj1s6pMWWgHsGXbkrZU6ADJVx2jwTzB14rYPksBwpHry9ceyRVozEVwffwxfuxen7cSa6Mr49mr5F6",
  "key3": "2oAWPrkLdcCdYQaKyVfjnKFiMswUC1jjmBtmKqShiKzLCXHaCeKYht4FmahajXHdQdDS9Ea65wHyRqQtWWinTbfY",
  "key4": "51LhtbRMkEUH33Pn5pf7MMZXW6JwbBJ8tq6g3bbqJFtvP5LKJ6r8n22woqv8Vu4e8oquGW7wHrfT36Nn3LfGaad9",
  "key5": "2siTrgihps3tMopY5iY8KaiqFnGnjnG6LkcSCf67n36gY33gibF2xhdWWs1A6JqafwJeKcUK7opcCbDGBEQfJXAs",
  "key6": "Kw8X4KeAX7bMu3obSkqrgwkcQBb887jsRMHgMo5kBZ2D1WyxfPAdMkFn5J1pUTFSE1ENLn4n67VML6DUeAdDhGg",
  "key7": "5o7rDg4ZF64MSbK4tpWy41s6ef3e1EesrMRRKSvmdxPBAPohqzJ3xtjmJMXmrnXgrLyyU2mXd8iTCr6bz9dWoM3u",
  "key8": "36Y2SUTPwEzeW4tpsY9N8kMmxorDrep6C1MWpvFgyBCXXJgYGT2xrMeHiFVxWfxE5Hjjs6KtLdcZemCaTn2XpnX1",
  "key9": "nDQmVZrqW5W49v9prm4oNTiYUMkFU4DBs5KHbycM5atqz6cdg3xo1yvC83N7snVtF84KVfzArfpMGxY6NUhkUBU",
  "key10": "5PMNP5kZZb28vVPRhyM5js3dm2XvBihgUCykZnzQq1gnhUdMtmnEYhpDGPMBtqTL7nbL9gXCkGaGe3YAguxj81F",
  "key11": "42T89p41YKXUz5mQhL52T2EAKM1K5SGMxDpSQkNsFCHkbFitRLRrrEu4JqxXqssbmt6ZTvCM5cpSaww9TyBFTma5",
  "key12": "j56dmcWZmh4n4LvqxGXX2XCScnukABuWrtN2rbQJdHRX3oR16nrnRk8HnURmV1fmzKiofFdhViZeLpHzAGxfseX",
  "key13": "31qh25RMT5nGHnM954aQGSjwsasyKKjwLVVwwg3ns8hm37TCrRnm9S1EYKDWzCVx24hA1zTXA7Wu8P2ByEsRzHdE",
  "key14": "3XMawaC4NqKdGKtY17BH7cjiCpzF17JLcbRWoeV66mdrVJv5BDbgt6NaCvJWMWdsNwTZTSGtcyza361Co2uzZonv",
  "key15": "65YSpdhnWrVsmycfxcVPwWvuvutUGZw5f6w3UqoZ2Sum6ctJ4oPwxQzXV8AddHfYkVa38dRyFUVv5dUs891q5NM5",
  "key16": "5JBQ12tvTSmDe6QL6rKmQDrDKuceb8WtcFv7FPBb6RcE28ha5m8EBJzEZ78sAQjhHWjw7Pp1Q5LLD2WWJTxmjDbv",
  "key17": "61jVYRJheAamBhcWRfS3gnAF18jJuR23F4ycym57MmZHgUfVHU1jfjY1vW1FuNysg2rFmPitCg3vo4PxAiivoGJj",
  "key18": "31EJCgdUSsDpHcQGKG1Vyb94GGkzbK4GMVkrVEgNdu4WT6US4mjHbNBFNpB8E7CNGBzSwoamRG7uEGVR4oksVbhB",
  "key19": "h614T2qmkozDrrtMUmnGTU476meLcVDWT5FFXbKbdJ5GhFoejkyjgwDFqAKBztPEwcsEQdY226uULrEVLYec3N2",
  "key20": "65vquzeBCLhWZihTXxdEbr1cLKg5Sw61GSVH9mfbykmiYMknmKoMNHKXVCnTonwyHpbe6MTmLQqALMz8BwbFiho2",
  "key21": "22s5Xq1NMBjSxLY8F6tuiKYco9SFMZT6gUbPT54hzAVA57fdSfeg5nexUqzKoX5TkXxfB49NkhL1D8HitSfUk3JM",
  "key22": "3N3PHa23QNRHB3k95PUa2BMKRtWyTSmtLrkDudrAoVkBpHvR9v4aFvNVFdwEUvU5LhEejr57igGti2ro9Q1WAVXD",
  "key23": "zvyTvEDySdoCBBkBh8hGksx67gW5b3FtraavEa4Pbrgq2J8BPHcUTzHL1HjSd5hdtKJQS1PFDPUefi2M6VzPpm3",
  "key24": "2QstcGgeB56zwQmjD482PM5SUCFnQRt7aUHxXbbpmp77ELD58ewQVPnhmRt85BVtfA4vPbmANNVDtWfE7uJHDTH8",
  "key25": "4greMECqnmRwSi3wjFSb6DEMBfFBCav41FkhzWGJ65YbZukc57EpZMVgvh7wdrCMLNVkKjpHbCbDvAbdrMWBda5M",
  "key26": "3CHtA9RuAx2JFAcRvNuaW6eAX93JHaJk7Uuh3oZvWmPYjg7cZfRZDUqgnYP82umbW4G7v6ZLLxSkt1Hnjeb5ASo1",
  "key27": "2z5SB6tn81avComz4bmJqP3yBCDojhoqqFzNP2m1M8hKuDT7nTtNnbHnwNngaEnBfurAdYk8Jhf6QFeN1mQbKezM",
  "key28": "4HiS5ZpcdKxAvLNRaS6UuiG8PdwSBfHmkD9K76zhhf1e6yZYUhFjZGwJQits78W2AvogwABpNX7sEafy4YPBPbVU",
  "key29": "2P2nFgsrpiSm1jGFscqT1RaFt49gFxwan7X3D5zSrnULswRcGNebrU93P6sjMiHzRY7ZCN5fWnuPZRd5HW96uufj"
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
