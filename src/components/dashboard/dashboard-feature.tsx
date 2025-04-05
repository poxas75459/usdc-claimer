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
    "3Gsw6CR7AwVDGAe6ggzoXbLYD93gb1EmD7fvCGKmw1n92xVDszhohXsDn57kGKDweKp9XgqFKToH5xTf87jJ3aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U93nUnwgusvNZDPs23tvX3agbro28VcgKURDuduKeBTwb9BWHB1xHPSNehxuhHNZ3FQxBBqkndN3SRRa7ZTExGe",
  "key1": "4EpFScXcv5riNqxompTsdYuWthMTAymSbWnWDu368681Y314VTrZEJuHZDTBZQYobeBx9wJTvj9V6JnYGXa38Sda",
  "key2": "PJFtD1wMH1VXkJuF9PSLVR9v6nybZCb18zrGN6A1XZizVG7bxQ9GFP9EyZJMTAhWMVjYwAt1zF6ViWb43Zz7LJ1",
  "key3": "2H2NiY8FPFZamujVxftrPDCmFXDBPQAyCWStaY2qtVcVxywAEwF9SXFbUxf1ud9J48JyE1JhrPtkyohiSMZnRpvq",
  "key4": "2wTHEtX66RQsvFoChyZfsmMfhfYFUbFGLCjiuj2P9hDHiCn6yrB8LgHzVwpVbZmW2xJjpQdvGi5ocmqqRpZV64b2",
  "key5": "JqjprcmMiwDPtXkyLHJVVHxxMSXafoU3gYQTX5sCo6N2RsxSgty3LqgNqt2no5LFhoZjfPW9d1vwxEzZDSVajnK",
  "key6": "2Y4RLvmpcgfjy4aaDVKG72hakZZpBhvpxrgmTFTBcNJp7EB1tQ3ERhJz5maQzHhTzFXCx9F2vGUk3NGjzePWPFJz",
  "key7": "7nNH3qm2RcY9jXVn8YthWvzCgwAnxWwSUzisMjmyH9GPUJwp3ULo5pwyN6PK1mgNgtBvnvUemRmvahunesPuJpB",
  "key8": "36knsk2dQ7c81VQhRFP5oajEizc2pRiHHs2YirvhG2UhH5pZDCj7us5EN2ak5deoo8Wd7vgiMWCUeBmpgRd1T54z",
  "key9": "pVTtDxKu1SSbgATp26rgvXC1ett9a1pKQsZYCyP2ujdg3HmNYyfZr1GJaQgUjbfv7uoheFyo9fiaNX6ANKXQU45",
  "key10": "49kLhYMaPVYbCWGGMCbaMJsSswdSaxC2yHSSn22QFubx3JWd6YEwvJ5tvS1hBQLxwS2RZ6ifVyYPWuDvQ6fXYSen",
  "key11": "2ND6Wpctg6xT4Cu5CXvqh9cxxkYdw2j1gQMVUtgyo1DY3GPChhZz5Gv69isVimwZaRFtYBrhTsXFaA2fe4w9zyDQ",
  "key12": "PhVeuTAZxchmYXo3agkbB4A7y5M9AYJAgZ5Sj9kujPUv3F1G48rZwm2AWnjeQUjMStqqb8jyKEfRegHF5nitaJ9",
  "key13": "5uzi7D8nh7XzqfagEY12vPXmtwpPpkkBBGJrPTX5jekV9VUokLGTiep3jpSXw489FNDs8nWisbnsbsiLkyw4vnrR",
  "key14": "4oQVnRrRSwGG8rmWn7aEPXT9ki9649CArRT8bqTLA9qRVzCJLj1mTdWt7fW6fz4afNWENgjhHJZcE7oC66pcRZU3",
  "key15": "3tjD2wfK7nNQoMfS4SGa4gZYc7tcR64nQxXMdYaWmWzhWjsLD7x7JwkhGQXGCowVdJacXK2rs85bCzzMJCbowqSK",
  "key16": "4ciFhd6FytCjY5VFJz6P7FRwx7jyePA2yvJSFX3iDf4PY7ixTTRA46tsA1Ha3Le4pM52mywuzTE8GJnxfE2TGj6t",
  "key17": "4Qozky6R8qe6xWnCYgKKYrhAPKTDWkhmqkiQvUih9o61QBvadVU427zvDgE7hZg9roG6m8isL44dgbjHsVWMd3zF",
  "key18": "4JzL8eKjSrjytg9zQG8sQviXJBZMchRn5duj8RVaG5WMz4aE7JWzX2PkJ1pfnM9oPij3SpiDWKLnYLiLkhXiZ9hJ",
  "key19": "2S31CzupwxAVSkPffjszgQHXjtZH92kvuMmFH84JA9pqPpNEM6VFTjxA6CWEFC4edCZHEH8NMivowsNWwTXXm3T2",
  "key20": "2YRrdk3ih1ApwxDMsqUSLFerXiMR6UVQGb1F8WgztbEoFiFYctUULpgTGy1EWJo8YAb9t5ZRVZiMK7wZxZpatxfe",
  "key21": "5vxRUrFHmBBmUAQuJy4cPACVC2Eq1ceSwkmjs8LtrXHnRwUjMc3Y6R8pJ13xUs5sWkgSmeyYXN9yxgSzNLJccpGn",
  "key22": "4FAjWt532GPNno2crmJHCdF4CAXRbHKR5HeXSLLY4yTnyC8ot5M1Xt2XATw8zCiYyrhzQvBgDUKkYAd9FpJuFaQ5",
  "key23": "3FAQtMEBehC2ugDAvTzGTv8RHxNqTWsgeczw9K1LLJEgy9CxKqn53gkbi3nM175mKk3VRGEZMPMASVNNVkxwyBxC",
  "key24": "5H1GMvK97dQ6rXAnusJ84vAymGvkHN1C5vahP5ku34quBhCSoLq4LAzzw762KtmWejjxuYq2fzKtEcn1XTko9vKb",
  "key25": "3bzMKXZgAP8fL1d2dTqiG7AT2jpxbJiBvFS8EzVbL5wd75THKS4MbXcE3wcpDuPY8Zk2eV7MVQpX1MqtWDzj2JmN",
  "key26": "2fxD3V1RAU81M3TdwqZnzsCiLQhpLNEVjvQqBKJjjj7RoMkP5uHY9C9N525duy1X9WMV6eG1CAVuDURsVMvM2khz"
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
