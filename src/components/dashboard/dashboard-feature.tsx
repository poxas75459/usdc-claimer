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
    "9xxmibteprPenwH1vfAn2RMUYjZYEyAUW27mEfkZQJncMWzervadzkqtmsDEiJMAcEF19f7j3F9MDoBwTHsUS9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMojUusL4VLKiXKg6esyiPW4CsJVrmxxb66xUTfcV5beYpSLxeptN4S6LXdAqRMfFReFK7vZBEXJufDKuvr4fSa",
  "key1": "2YPKfjQF4YvGQyMeJAEeBhkr6uMmXa7DvWuWKwMymrccrWa3CKyNnQtm33QwfpQRG6MgXCRg2X9L6zqw861k1t3g",
  "key2": "Qn5hAUdv8tZ2MV59LMLRMPFxtqyytaZHek8xdoDvfkTYyt679viD216oF45Yq1pHePbQ7cpXdcGpiTQzke86YoE",
  "key3": "XmVo3r7cQwtuwm92w4UjPtJMG7gVZV1p3WFMoz4RJKRnE2SpaJZ8q9juMMkQsG2kCznWxb76NRZoKHce4ojDUxj",
  "key4": "2i8YgzRn9whmNBx6puBHS7BnvvzsRhf4mErtxM1J3psTe3z8fuq7L8FxsTFs5K8XUXcUnKPWvLN4aqT4tEU6tqXD",
  "key5": "66SbsgZDRebXtgqZqd3ybCczYVFrHFZQVk4VBVeT3DJhBdqQAezXwT3PeVYaLpe9zZiB8sUb1EyjgZhiVxhnbH51",
  "key6": "5Dckj2FQfMBnwXKnf3QRCAgu9rHL91DFwZ1epMMSGj8gLthoqSN6Su74jvkfjhBXRSkuC8ECExXQXGRDhY88C8k3",
  "key7": "3jZC2Xd9vXgBbLFQYpiJif6Y3kDoYYXm3NGLzR9YBDboptoA9pneTijNuhqktyEN3rDGtobxNaUP5FtSLsDz6Z1g",
  "key8": "5yfFZnFXKmefuJw5f4cBXksFnzcTh6HsrBqSn3buTtxRqMRWtedyTfgCfgjNiLnTUEnNXUCX1PqpLgZxqUeUjTik",
  "key9": "4S7yQwxTZMDNXfGRC5m7qQ1FJkrWb4CoNXUL2siWRPyUWxJe7L9jaN3gcmSpruAqD4vUDPxkjhuUZBnTPakhR7D9",
  "key10": "5HKkoTEwsPcraEkTdjSWpdbs9A3FVw1XTByVczAjF73kyXNF42ietTp7Wrh1GoccxtDVtxdkKF3LJgHy6pb4c3va",
  "key11": "3TLsNF9ny76mwn82VWFVuEBQD7y9ZWWqSEvwER3VTAoDv4ao3HXf6S9bYWjjynSnNn38g7WBKK8d4fB2FHFqV2kC",
  "key12": "4KgMwvbE6Ecx6M1KxZm9LbtbMX6jkiG71CAwJ848Pk4WVcaZcfMgtcXJ2quG65E4ggayshXb6G2CShmhJY451URo",
  "key13": "4ueMnQD9QfbsawiVKmEz2PBKJo8DFaHnn2kPcV4C6YnFihYF5ain7dorCioSkZbPrWZAtCDaBaN4LS1gPhqMdncX",
  "key14": "5cnjZMdn3CipMGLubeAuXW1YAoFsYmHAR51Dmsw6AYeL85jB3NYvmvngesRhYJpBGJFVmuD7vr4dTPMmdtyrt22H",
  "key15": "4Py2H4ZeteNMYXLBXoJrGmoVc8RjFG5fQEmnGSVTY3dJnqTYMWhYczSbajkpN5f3pTDeAmqExePcY48u9kV58uAg",
  "key16": "SJ6PNxV9jrVhCfxrkBMhUKTeEooQncbUwj8rZaKnGLqLoBVseh85wdSWS2qke5Fm7zmVKhd8ZMGeA9V6o2WWF94",
  "key17": "u4yioy3or6mpTbb2DaN1edZztYNVUbfynd1Kh3oTGEFeRGakVAh7Mk3aS1p7BD7MUU5HqgH1y1F5vj1zvscGpPg",
  "key18": "3ZYxmzTNEayegL8VwwJVjA3qJ6vus68SZteGgp5uVDYp7YyrBA8bWDx86VAhrB2a2r6JWaMPVyAjYrVrhc4zwPDR",
  "key19": "2iKdVzj2WmPkkn7YiqKWU48MGTpBDXyMCxD8ovaUk2TESKYjmahXLgdYusCbiMQ8iMbQScV5XcBjyCMDu41bogjy",
  "key20": "dqVvjCB2bUtcmVoWeQjoiU5VgCqqxxTRxJs5kxzjYVf98bXwcQkU9JA9eAFPzWbbk8gvK4pudppJRt4asCfwtDQ",
  "key21": "5DMaJXz23cjfEvaW68rTg1BpMH6emxM9F3LqoyPHFum19K8Qsc5rZRYKYytKJV6G5J5v2gG7mfTvws2Hycfuzgpr",
  "key22": "gSBsySXVrF6oRTFcxoWruSL1duaDbbn371b2feUi6jyaqo8NoDfiNCvuLNe1ZG23Cn2HxmRKEdHoynWpGreY3Nk",
  "key23": "2nCicXZnHxVkE9EuabCvjzBVVkeRsWg7Cc49kwde3HPhJmWTxCp7HaJzqapzmYWkZ1hHKmsGKtZ1whAh56HMDiUu",
  "key24": "4cC2B1Y7cf3SPkEPXgUtuswPBxKU174snuMxezCHyGqQZ8MNAWeBK9Lmci3fKCq4ctrxn3cMGRpavpDBxGLQ7J6G",
  "key25": "4kkrhL9uBGfcuogXDGQcQCeubfsU2wTAVD6aLsUXfUoj67FSZi6sLYG5HXccETBi4AAMRTTJL44eoQBS4y6TA73s",
  "key26": "DHZenXnDAHvbR6T62sdgiXLvktbd8pv2cDUb9bSg32T1bXuN21meDY6vDjBgg2fu2QRXAtVEFf7mSUjq4eJ17NR",
  "key27": "2yCw5xThMdhXbVRarG9VmfVDpYYYcfZiTJhFxFKNpcEJqfrrDTqosPJde3BMU2TFD74mWihq87QpwQSHoFy1sMCD",
  "key28": "4WNPbyHW4kQBtri7aQvXttCw2VbpNAAZyCQ6f6riDUTSK114oAMD6PUM513KNCRZRaYrobSc5qb7xL2MoJTfjwBL",
  "key29": "2Bgcb74jqteLJCYdK11J5qGCK3MJboiEiST94BJSvap7xCpC1SzP7YMzZgb4dFH688rqePCA7WA2CkC8ihzSpdXR",
  "key30": "mfRjcxPzbcuhJ9FkCFzqjWaimrbkYfpVRmwCjS5BC1mf6iDAKdwjBvxHu1sxBmUZqugQUvFQVtaqEBezz2mHYse",
  "key31": "3sPuodZ91FUVQTip7X4Zgkm429PdYBLBQ7SzhaP5J4bFYYpRBBgDMxM7osAFLAKV6F17hdtx3zsPKdMgjkoQ8my8",
  "key32": "5YHMjNPBXgaktMS3HyS7ypLkdeQgucZCr3SiuaKMt3mL8BJX1BMZdPtJdzxyUEeUbSGqbFVj2ozJq8Cm55f1PaPb",
  "key33": "3ZE56UxSmex5374QPGRGoDWV8zWrskfzKqd97g4wGhi9kURvhJWHvNdbqdq8k1qQRQhstgL8t9bZWDqXoXfvdcCT",
  "key34": "25ZRK6bhbdo3yjwZQG6S6Xdr6s8vXdH4Wi6dQLFhqPj8mufGoNzic7o4Fs5JeGwsy6JoozhezQdeye1fXiVXLAoY",
  "key35": "4pseZc7DgTxZjaj8AYtoVVoij1VhfWA8336g9WUraSrUPyCwj8pFMy4bVW8o3eqWTg1hAWjTZiWkceRPQ4zPqiQc",
  "key36": "3ropkgH4PPM9Dd7oU3iSeXBJ2anrcFV9V8tr47C6jDoroZPVE7TwRQmjrihXperbDmwxS2UkajpvUpHogo1ZDRCd",
  "key37": "2BAqR38Njx2Scf9GHTys3BphzwmyWguqqgHCdemKHdge4Vd9tfwDaqSGCTPBZbZBPSAjNBdd4Eu5wATdTa8uCket",
  "key38": "4AVrEcCgzBac8ksYY68u1NfHNHCC5d5wA4MsnAWybKeVVzt5W6A7Z6TBbqLwT46w8LqdpgAMU8nuPySgn6xaNN3s",
  "key39": "5JKn2cmh2FM5Jq4vHsV2vVrSKBcUym8qib5ePYq851DrwDfYoUH8y4ayhejY3EjkCru9LBVzJ56taAej2v5xrVCY"
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
