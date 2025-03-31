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
    "5AcrPXpoftd1kTG2CkKUhU63RhasAiwYh7JTn1gCCd9N6dWxo4eSrNqeydiKUryt86DEt5AFXbYcTkeUVteAHPfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fy8uvscPyFSje8haiiqwKJFJY6kayCRq9Bh5uoF1UjATsWPYLN52ZVVHKSHpzpkMBMUP5PJMVPk2GC7dN6uzUfu",
  "key1": "5xRPdV7LDSCknhJdsKv3joqLNs2xotPPEGahnpDNgYDiYWeN1xHRVgzxXEHjeenXVcoTURK6gTnyWrMB2tDen67P",
  "key2": "5epStCT2qtdLzTBbyccWsvHNbTEqftzbYf6WV3aJG8aqvb8XtMauCusDZPycTnjWdjE7KPkNP6h8AFKcoE6mP5po",
  "key3": "5jdM8pb5L3aWFLqbW37M5n6HCFAqCtG686754nWcSmrjmy3e9eKUPJxpDtXvdD37KjLnmfmTmzabertud1wK8TnA",
  "key4": "37RTusQEo7kxAFHwkXgHCJ8hsgdabq7HMRxdNGgjt7hiH7MrukB9QTPoqhk2A3T5W1KzS3UJGgAc6Def5Qmyu58S",
  "key5": "5YYCnGS23gDM4X9opGP4uqR9JQXj1vWV8jCiWipqK9EXZkc39UNEwiwGtZdR1pLk3ibZhByjPCifGvyffZyLLYa4",
  "key6": "eibTgb1zkJzo8TG9yUqqeknCWGfgByHkhPkLttSu16F4NYuGmi9iWYJMDyMRorJ7B4yfcc3jSn5cKgbvp1N2Zqk",
  "key7": "56gLz2nYideF6dPp4FhUwZTZYbNQfXGkSTFxsiWDAZnN8JUY9qtNsCp9F9MVic7QZC1wuLVQzv4gSSwXLvfhDKvq",
  "key8": "5KZs76kGbqjZTvHhxtm5sT8JmcaC5qnNmRuXoLArzJtDR5pQZtpuQ4n2cpcbLR4fn19wGk63YaGbi7u1aLXgnMhu",
  "key9": "3ir35ahsXss8URftwxo9mxYqeaeUEUZjSxYjXqtorpLfDA8uFTe3mBXuCkYAU26TLW6to84r2qvK95EWspqutE9w",
  "key10": "cY4jP1ntfgBxt19UJcNRpYBf4mybK2ckCDWLQfiMwB7k5a6P5pqn8eywWWa1U68cwaJP5jDoWkQ8d3iya86BdAX",
  "key11": "5UfnXgZNaEgh3oWUipYY5QizbwLUDqQgpc7vNaCrZBV53tpzcWnUiKKNrs6BjxuuXXXPnerQWxS8PjBaYGFoFoSX",
  "key12": "rgDcyR7yzpgUD2ZmWJHaG9cvVLbgCV1mqVtNJrXMVczsj3BW29QHs2kAhtBMv4zzrbDzecB5YkYnrYkao4BWUed",
  "key13": "5jtJiZyy8q98jaeigs2hKmXgYkueapr4hhD1mixuxCUeTagcUmeAe9xnx3xhPe26Hd8VhAG5UDkB2sFWExBeQgG9",
  "key14": "2q2c8tpC6JzQTCma4g7VBXDcQ7FJpjPZdhN9rsC1JwmGj5Vx87sg7WwWsBxfARRtmk6EsdU7tbs3FqyvZ134kHA3",
  "key15": "3yHEufokCe4HJaTFqVijEAEXqP8D4GxPwop8v5zX7EKwtH7BKufLga1HnXiMCjiFrCqK73gPZNxPRJCKk1cwxzcj",
  "key16": "7AnrxthJzMnHSHWjBi9HnSzQSJZF9bYytFVv7MyCAAaAcs9PVNmNLGhrYWSifmJVP6pymgzPkCzt4H62hjrfSdr",
  "key17": "PrNm3EjsLGaKc31df1VyreDejUgeezzXUkfpH9DeFmK9z4jqP3ZadF82YWxU2WY3TqWFHY6uhMUCVekZWVQartd",
  "key18": "2776fGNgfCVaNK2Yhgwd5W4qTSjETYSPVNaBGWEPQCzNm9DD9kiuLqYLG3QwCkm2owPTrYLNqLTwBokBgbe1cgQJ",
  "key19": "TECvgnchRkLQRtaPP8Qs2xR4Q5j7Ubq5XQTWJBcncJJbY3wCwdSHuxF5iHwMM5Vp7Ypr63bhrR9WRxe7GMv5RdY",
  "key20": "4Dy3MBXXP8q1xWEMLE59Sr2EP1FqTthMGQeCwCoRGN42d1ARVvhL7h2HYL8xikFu8r13KVp3YDjxPauUBW2m7MBK",
  "key21": "3nqL488egzn27aNzWi7n7k9fF47ThsCawkcsjNHXCmtYLpg16XqwpJuVZyKA5mtK95Btd95AD3Nbj7hzxrNvmJ6t",
  "key22": "5V7MHkUPVvMLCrVeLeP98iV7sWdFbjmGe5kUGzHkTioRRf6198v1Dcn6RDdbWVnxMuJp641bLz27uozi5YQXEsB8",
  "key23": "2XkuKtnLcMsi1cFXHbHBN1C97JpsaMihrPT1U2yD3es8KSgRC4Z455BWbmfLjftRvdTCUnV1LPXLPcLzVw7pSrJv",
  "key24": "32FwfhcTNGT6K8STx61PJFBYNLg8VSghY3htXE3AJjZMS5SGRuYFFyzSB3AsnLEkGiQT8iiAEmmquKUduZp6hfw3",
  "key25": "4XxPjedTVGph3jbrRuxMqCMq79sBMGc1SMFMqhYfieEnrtW46kEneeSvuZrdSQ6x95Rn4V7fWaXjotppfG6kYMvr",
  "key26": "2L5iFfp4Wg1d8h9AGEiEq1FgXhQH2BZkpa3twGTqducHHMtrmfXojnTV9B7JGANCuYEW7Maa4Zu77yAVWuaA9VTr",
  "key27": "3HPve3HkqA9yMKxoMeDDMg9vFRCgja5WCRi5cCBDLfCEnN185ARG5KLbPA5hXvUTKKn1mYevJrZmdJLsQMicSWcF",
  "key28": "2oSCfei2qn4XkgxSZCvxH7xD9VGUkMdPJFJiCLjRKpWkvHqfv4snH27a1pdTHkt9t2ViEgXqCTuY4VFfakoGNVaS",
  "key29": "5L4EA1cLcCemr77YvrL37Tkyih7tfWpGyBRTpRUa561aEE2gvCWCf2Y44Yvk4kQ6s5x5MnunPXupZWbZbprmEj6o",
  "key30": "FNwm3TFnV4HW64JyHF4x1mQQJjam9aT12ht4rNLC2SHVjxCKENs35c7wPNcGAgwJ53eCRbUXQxExUeZbfwgRE5k",
  "key31": "2mx7rwbg5t86nhaWrr8wgsUWBV9ogbCVpPrL7hg3wuvgbtJ9uGeNGG7BJfnPJYBWEaeUi77HyMDzWNcZjQEJ5AwN",
  "key32": "4UBiX2waBmyVdDb7LYjTCv2RPCzmQe9hx65WvEK8rwTEJCYTrmwp9qzZQ9GucBH54jZisUGQVPyy3zBVu19n286R",
  "key33": "qHvozq353yn2Fwau1inYGn9yvZr8UghtPGCPSnY6m5V4SByiN45Bp38tcEo1rYH41orZH9pPmJ7DQh1cLosc19e",
  "key34": "jnrz7fvgZt4PmszdLjzunhuAQutwr5u64tBxHtGkhtWGuY1aNWpf8bWRVzXZmZNPSFfSmYh9Fe1p7DP9Vng4HD3",
  "key35": "3oAR8CqVr9hkEpybUZp752iZG1Qy7hBScAhwsWaxwoUpJmQCMuYqXBuWjDN28kf64KWHEuhkuWWobdVWGtHRhx3c",
  "key36": "EVpnjDDTnTCarP9T9yxGd1xXMiUPdiMhgskPZvePCareTDMtvFTZGn5Mvhtexam1K3mDhwqh1Sor89QMJ7nu44e",
  "key37": "2c8DanDBF4M1jaTQ2EwHkXAMytHzppP8UuPsYVRsQoDBdZdFgEfdN1CyCSxLGHsxKVzc3iW6aJPaVE8DKEJrXmJ4",
  "key38": "5h25tE7GbDLtYhFizXExWWF4LGwLYcMDfWca4SLMNJmLFWBq9rQeDgypEXH5ZUZgGzhZjbVPHTAGGmMKSutRz4Et",
  "key39": "2jYQw88LeQxscJg5BzrPtMEfsJ2Z9yaC5yGFWKAAvvRXEgVfiicJRpyQAB6xqp1oUHAoR149bk8i2UNTwm6eedJ9",
  "key40": "21Jj4WzDDhgkj5aNwvSwKQRZc55vpAGRtADPGqJDAvCzFxYj1kCekfm54FL6yXNkCRawbZKHvXUNNx7cRM6D6cRz",
  "key41": "5ZRjQBSPWpQoxkMJd6aNtvQ6z9PL6Sb6vfDw3rtP4AVKcPiu3mMJrKJSMmXJNLuEJ5jfyTLD6vZv9BG8jgJnJVbf",
  "key42": "4gVohJScp1rJyomcF2AYB9c3eW6k5EEWXfeZQTB6ByxS26JJ9QTPk4Qng7DWNdgtS3sa8TFdba5C41B5Gn45ozsf"
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
