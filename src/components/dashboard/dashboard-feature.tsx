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
    "2vXqizbrfmGFQRiB9mev64RSozmDp2mUnJuHR6iBFJKNgk5JmPAEaecPCcfaEfZUQ1AXhm2jmBrT1uDp36WnXRcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QYy4D95MrZqfkEgkEaifRSFasC8jEDUUzS2A18Z7fnEkfzh5LAAWrxo7iDi6rFG92Cx1CKnQLYBQwxEtaoDF3EN",
  "key1": "3onHMCBoXFDkfs3baNpWQJ9vxjMYAr23gk9kmsk6KgrFb74AxALg6ULxrWGNYatPah6AZqxfFvBc82b4pbTuqqtw",
  "key2": "66mYH2h1iob1gvcGLPsWxGav8wRQeDrzhKx4s8SBHam8YWHsarf81zKNkTjogpkecq135pEtVng5fdQNfLRiHXHz",
  "key3": "4pcPzSgfTqzSmbQ2o3mBpNF8WL1FkhFRdcEA6BGSLJ6HYW8AksFa4RzHoYKFgYj7fwuL4zsKX6sFYw1MWtdEduko",
  "key4": "378s8b4YWZw2nwwuYN5k7VhgTWqBLhSPHiv2W2HSu3JGJ31aNsohjMZYxCSDs8xLtLoG87FJ1dfoudgM9Cie2Gxz",
  "key5": "58bJeHPF6wi9C3pGvAKQsvGLj8G8pM3EisAXzqJFDjYKHjN5dtANbVaCZcGfWTGe1P3EotSJL9EWMMnbWJ2Svb3z",
  "key6": "4TL1KDSDaivcdVxgY85RoUFdCS2NQZBm3QLkifPH8ankTVKTDzp2c8xiHk7K323hA9Fzz1pTGimxUXwnEZL5jq7G",
  "key7": "zP9sSwngagqFTMNKVYtfkKRDDTfjKvcfi18mgVTSQQ5HzjESQDRJEJ3jZ7NCBwjHLDQYy9Dt2GgPNJgsLSzmj9H",
  "key8": "2vPtt5EWhgQzUAr9F5hi5gBK1dP1WQ59o4ppERBPv4Uc7sSDGdR5RmFbiQsNWpLADot7s9mV2VSZnGMyqSSSnneS",
  "key9": "4Ynesp3VYTQ9UwLW394qH6oyBHJcxdWgWkr2S6KM1kQtdXPnN1hZdWUGupCfJsofvk3uY14ddWsmxG1MU5UVAGUC",
  "key10": "5DsscF2cZuZTkpnpqzh6MAmU4zMycQZHFUR2hdgxeLutz2BAuxwPjJN4rVau3JDK5F1XHZfwjhFbkgBocqw93F1M",
  "key11": "ds5db9vMybMFjBB3yFKBFSeHEaKY3BaRRZZPD8NiHY9Xc5TADRfc91bVyb31TCgu8FjzUyu8qxiExtjR1jrfHZ9",
  "key12": "4kWPdwnARoPu7foc1XuQYEoTVqUohcvmAmyfxwQBT73daTqo7ujC285PFLtpKUZyoAdJMBfe4bugQMBqfypWDwG7",
  "key13": "3HJLQAtchreD72MbYPBuBceRzczTWQdrAFqxgWxx8RVDaGx8ajFJkJZjY5g2qBuc77bMnQcUVBNtfyzpe4R7GugY",
  "key14": "5KCVnj93oBhsMKZ8tH2HVyxJ6nwVCTxvfyGSDRZV2ZWgBjXE615otxm4tFW5aQu9nMhfaiyNWinhoyf8sXrZM3bG",
  "key15": "5384Mn1Yr1xuuATN3tAYt4GeS8qUJqJ8iiQzVwMj3T5TLtmEoLSfjpxV3fXLQoa36LxzfF1fma3g2kceaFg3HkjT",
  "key16": "E5znDxKhjGCtiN6MnfZhPWioN7rZSioo6Aw7th5NbRHq7sCkjq4TiY869Hfss4w3YedwaCwaWcZt3iyr42ADbGE",
  "key17": "2PTubtdDom7esnx23r6AkbcMQsSDnyqXscf8gsnGSM4gBZXfkMfyZseyh4yTWni2o4YLkqeeVxMwBogcyAQ82ri4",
  "key18": "eCvqta5PLraiFpVPEfykCiiiNC5JrBXh184UJAELfQUg7SiGgeBtELSmYxH5V3D3sWga9iEERg7wCNwbK9nZHwS",
  "key19": "YKeHf1kQU7GLqPsMx3KzdoRZiqYZpTA2gNpu3m7A1fGoEd4puZikNvNZMWgYAfL7SvB9tjSmrXWYim19tQz4Pwo",
  "key20": "5ZDMxPQ6wPx6AUoVPUakFaAa8saQPn4biMFALr3aHrRdhouoSgpqzPd9zBzJoEcwbeHbsaTyWNAh1eenWiJnRykx",
  "key21": "2wbj9tRBMcnRsjFnKmEGRP3V1vmugyYAnvcb3uomhanVhdcjwufgCM44LMsbFHpdEqJ67SoKGKPnM3Cy4sLMPw23",
  "key22": "4MhaZXCsdx1LiVaJyKMerLRnLe2hymsqhKnJ9FQnuzi57yJnKVtTP3r285DyH2wTZoGwr8FZKNshyoF7eg3tnDe8",
  "key23": "4Yg6bHkWLoc3Da29eUiubLtUPfSn9W67K9X85Z5VTmsrUVTCahNX23JxVYXEpkWBnJXPk5j2p9NGH1ehix6rqiPG",
  "key24": "3V4pMAoP5r2hLKiTtRMnASWmHEE9hyPmkH1EvGfk8fqh5hKQUxR2kwhHfTsTqDs3kamr8f2n7rKrpaDtrCSoWy6R",
  "key25": "2z6tPt7ec8RimtXmFQjNeppoD7PUd3kKRxxNvL832oBoAF1oppJn7gu1hG1Z4rqxcD65GvHTxXErhcnjTKvv2rRJ",
  "key26": "5AqgaiivZwMbQ4LgvNuf6MGYmNbWqfuDyhZ1PWokUgJSYPBXouvPoRKxcYAN3bUQDAgAwNKgWgnKn38GoHjaJLNw",
  "key27": "26yScdVKVQC3WR1KQFPek9DhcaYVkbZkJAGTFPmFE26xRMn8ffePyywtNvcZtRpj2RY35xV48yWkNk4S1SvtyhAR",
  "key28": "21sLhLwrVHDuCrwWTzpZBmLVrURpAWzpk8AjxJY3y2nRGYoJ4aLcpV4mCc8njE3EbMLdgbHNM7vyQXY6hcBEXpjm",
  "key29": "3Z1B4pqEnCo7mxo13DCUcydoJq9FWDmBEqaNiUVQ6ZbvrqxrZmjVVZiPiVB8oeLdfbwRwfpL7PFjJkhDoBLxN1Qs"
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
