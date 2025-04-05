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
    "5RofvgjHn1WNfPiMcYwSDzU2RYCKgeo1Tvr71pAwLEZVyvHAqvBkKv3kkVKNv2ZDN2QriDR3EqPEioWXnToPRMgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41z4JraXaeLbckPWShju4rrEWMnjL8HpFNDojWaU2PWJxt2x91H4APb8aZQ2qzFnrdoH1ccba6B77S4kxtpwTbL",
  "key1": "4ss6DU9PCNBwNT2m9ZPYGoHy6WSw1FiFMThVcWbS9WmFvbdRBDYWuza6wGTXiHcHmULLiDYuxD96Sve7BNHwjHEk",
  "key2": "BrF4VBQzMCj2Qjyku3zT1XwcRHceShkV5Y5tEiQghMob5sW8poGTXDHM5xt1QhM31AmhUYvLkzRtCYKU1gDHMdV",
  "key3": "2ed9z176kfrSgyZ5qpRXBdsykHtonGUid7RUnFgzGcXABKox8jYTqNEH8jqpySJGggcoEvM9dfQgjbmUVTb4WK6s",
  "key4": "tJ3wbziGWecbQz9jiNEophfmZvSfjNscym3vgmfHL9TLmGpGj51yjpaYwijmCZqRLMUbtMx4zWdW1LFFT4hNpbn",
  "key5": "vHG7ZiBH2RmQLSHu2qfmHbZ3ChNKSK2Ldt1zCEcZ2nZK72NpdndU3QNAMrufNMuMX6QwYDQuVmnqDpK2enG9mUw",
  "key6": "wbRzeGHgKtST3HTpVEg2BxqGkiuH45dQRCXu75cK3asUVcnFBSP5pMGV7JkRXJVFchUoR6J1x7A1Lb1J7NCjzVh",
  "key7": "2p2xAScYDXaP3hgFdPZVvgTFoYFtaxSpsoVKvzpaDeWsPAifja5k6xg8BhY2KS2gfPa4uLEysDMJ13Jb9LkvRgWA",
  "key8": "2bo9CmMaUDpqXgsC4xR6ETFRcGy7CtzN7BjwwTiQgMDjhQomZuRbiPdoY1gymNxRRJhQpo9jxYE2gosjeHTy83nN",
  "key9": "38dMXw15JjqBGsJXQ3yaJbHzxbu5pRRPatfT2xbbHUFR41FKJytDvpHMKwj7Foe9yL1iD8CLQfCgJH6aSAwHkG3o",
  "key10": "52fyLMbgGi5s3NsutFFmy7ZsVdTmf4WkXMAawgpbj8YkCgxhwNANWPW6KGFA3akH9zsTQm2yHnUMYjVQV1jCPfvU",
  "key11": "4EJjid6s3bZTNXHyB3uHTXawGhHP52khDQziAHZXUrNaamg9FXaJ5cECRAUJRbeMioBq3wqsrxXQbKvLaJtVB3Cz",
  "key12": "F279bNDmQp9TYAVyhWjsjeBp2yqz2qqaSL4u7djirU5funeGKj3pvwAtJJD2W9QcfMm8e85VuSfTSnZ83acQBG4",
  "key13": "5i6wEATW2HRh1rpCHvDHRiwBRpHXnYZe22BFEPuxVNLUU7sG3kc5VcKXHpet8NdbEGsKieKbFJYBdybx2nN7qR2A",
  "key14": "5aPTmRYajDbjZEexUGYEkhvFhKKL7JrDu9hC68zM5NDNZ2iu5MgEUPi8ZZWKnebvHwJvrNVrTzbLjjt4Tb5yuNDd",
  "key15": "2xcQw9aqdiRAJC4jJkEasDwphGvuwwq7SY1ragXTaM3QhjNV9BXgupwpm4qBNdEU5zq2t17XNrPf6XNsx1qB4oJx",
  "key16": "7D1WYrqZfHXXKe1FUkGw8wCMV2vsGfQWx5r4hLW7ySNXGkVmE326CuYV9BXZwDBbFDTn3Ka8DKRReGBgia1VhvW",
  "key17": "3pWrjfAumAqhFJFJWKzEnAoHb3MMYLUF9RbS1zpBMomWaRyAeCYPbcVkEjBZzaatv7PUKq1NUN7UEhBXWu7LguFT",
  "key18": "4uzDtEN362DFEcZQfEs5aeUTaa8agxPnSDWNZ7barnZVa9fbbFyiE5j3AAahRfo3gL3L5yzL35p5Pf8ioSVes1xH",
  "key19": "5FeDSXwp9bJmFda1ujwtvepwtzk6MeXJMHhFFoy2j65hYawcEiCjVqMM3me3i71cVkHC3rnfk1oc2aDBtmPH3yMX",
  "key20": "67janhBnE3NyeMMEXskoHtVbFQyQNk3rfF9eRzpdp4K7shPH2xRa8dGeREwjbKeFgru72goNrixXTg6vYvUgcpMi",
  "key21": "2kUyXouPYCuPrcnWCdWQmb41tLc1a5nvaaVBG74Gaw9gc3NAs1UV3AK9AGLcRQ9DDtCDaHkqEfjm1VQpJbaP7LFr",
  "key22": "2yNP7SiSuPxtY2NoAzbixdzQg6DMJv4HVCkm8WFfT5J2Z2N9QgmaP6xgwe87BFbP2a6WYTA2kJmevdwbo7b6PvkH",
  "key23": "28eYBk9jkSWxX6cueBRi7gS9eEenUDL8PPUUxQqetA7rBJZS5JGDuEFTHopeTYrQ1jHfyYMpoB6R6igrd8e94YMM",
  "key24": "2E5nptNrd4ATkAMemKHF4DsMpUFFBrJ42Xumd7x4bGJsgfjqCyo76B83JSoWCDLmLxN43q7sCxPWGegjCsanyFLf",
  "key25": "3ow2Nii3gXM58JVuaK5xhDmWYJwYzmApuyYiuCeNugzPE5ktbz4dgCQts3H2j55Py1yg1RUmj5bzfJCRCCuTB8km",
  "key26": "33HArQiXyLhRpp77y2m7RinZ9dMZxENZpxKFFiCVQFreri2P2qKXcgL51NpfYSfC2EHGZLX7T7GCY39pLvWSUG21",
  "key27": "QsLEdicph24tWQA7YpNXeotWNiyiMJav52tXjrrrvAi4P2RBrEnaeuo5ZtHsK6Wyz9mzQMAhdA6gQjBG67kg3AW",
  "key28": "2r67M7yApi11PAtfQ3Dhu9eFW82EqNwR36hJdW18iRVDc2qJvHQMkSAQLQ7jTWEkHXNaFGapkEKWG4rFAhNAp8R4",
  "key29": "3cGka3fSBmTCwzYQ3dPmH2ZsBxRWfu5oXQknPhGrRsx3CE4uEb4Jc8ngEuaGftmQovEW5ZYH1F1zpvfZwfZtvcZA",
  "key30": "5VWayGxzknnHhL77Ke1c1Lqnt9VrGHSnuJV3mp12KcYxytCSGDPLryhKo8S6UV7sME5XupvKYASkKocmpm1MMZHo",
  "key31": "4j1Fn8xvCddc6A28jDed97c9hT9aPygmDmriWhhGdzbHLBjjNLAPbmMkfrbuXjfiRyP4nr8XuNU8zUCqVEUgJXWq",
  "key32": "4gKgdVVE8WdUWHYQiU6mHn8SCRCxxadkXJYA9GksnWiAtGJtGC3JFLm6KUF2nveL95nmVpDFFyXYTVAKfLPq6RNc",
  "key33": "5rvC9B2329sc6CdCudC3vAZQkorv7zzFfquC4Um4YKGnUYZRUgWo6DhxnKU8DB16XcTAVGy6w6e6qGMPFPTi2rYA",
  "key34": "5Qmm3ci49neYpdQiwCCpAzkWoUhi2se6W3h6J5NEfqPEqaSS3Hh5grpHwKwgcX5SULgUcLJsKkCwfG33c5TmryxL",
  "key35": "8rUhpGUe2baKBjEfAd2dg7jvPBn32GdDs64FyksxyXnynhAmkySeMhn7LWK69vPacZLJhPyFSJ5DnDWrR89ZXVJ"
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
