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
    "4hmKtwWNU5Dt5KjP53Sm3WXsXdiR3Hf6HtFMsER9Can8w13nHJ4q7847r245qPVrrVdut6w3CEg9RbH2quF6bWmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZnf3qfXxRLaYVFTHN9c2DefdBp4vDqt91mwJAT5eJbx5GZ8QXCjp9DaiH7rwp29f9kBMCBWD7UPxUQwF97FwX9",
  "key1": "3wkbKTrJPoQXaeALmDSugEuqh5MgYHj3Jd6VpdyJtNy7fimWXuhxzbFLpbQvz8Y64Ynivk7K2dF9Gwa8TwVBfsTV",
  "key2": "cTW7bK8X6LGX9MFWtmvDWbdT6mWKjpNnrpZmbjc5eo7d8VxBm6nLpHEXAv7L8CMbbrUg4gxoPPU2t7mbuzZjzat",
  "key3": "46ttPNMWCpCsPzcGghPxpnT6rcrCq7Rj5BjVStQ92aw669cJecThMkYP9hdBwhmkPVtnx9nKu25VR5sUbhsjS2Uh",
  "key4": "SnVdBxSSamHWL6ETKn8faiXY3JGLhKvHfXAWzXshE1a6pXbWmimYZhNCrEY6zVg936x1AB4JC6tkTS2jo3ePtTz",
  "key5": "2V77oY8kcGCxCAQNGTEDZZDXcFYYHKiD8AEoMbxSa16GGJBzfAqsqwu9ScPfBBRa1VSSKsjiPkd9VGrfR9DZ3nQX",
  "key6": "3vN6K54HgER3P6wjwi8ZjaX69fo1DhHu2st9z2Gmwe6ZeUYwAuwDQ8nWsDnA8quV2YX3NDCoMcF8ZEurej8FqtyU",
  "key7": "8gEGpWWyZEGCnH9XfTJHaF1eK8UFTfWdp2QgQ7PgaGUFCP4wP9Mk6GcayD75nps3Hy8YXWjdL9oG9jhzfiqGrBm",
  "key8": "48Xw9VjENa7ovH13dKqxLpMHhaBtYfpnCjqvoZ3YDsyFsABPyaVh1dz8stx4NWaSNUXMoa86QjPjEC35upuvzWQ3",
  "key9": "Di31vBpyNW6X1xPSheFDRd9NhydxaEdGn5NJ3pKhWDgtjVQzWszRmNShvyZfsSX1kZHrJJ7SuG76cC81kkocjbg",
  "key10": "4Tbxp2YDoUqUteAyYWBaJnZoJz7XddYc7U9Bn2rsZ14WNrtWckNHLUnTtCGPpXBaDjhCn8PsJQC6WjKo1UrqcaAF",
  "key11": "2TTP36sKVp59eHr3ncQVSXUFqMFhKmBkfBiCGBQK8soeBakeiv3g2tEBYWVic8zi1jnNQg1REMWVGgea1p3ftRWW",
  "key12": "2CQMjQmieNWaczZbBZqvWa4Q93Tz9bqgAYB3ZBcCiAeA9twgHEpz9bVK8Xm6xrmfXB1Zy1rCjfAQPpdEULxWJfH9",
  "key13": "3FT893gLXr2Rd11AxzA13TEwTpEkAQcg8aQ8nx3rX9TnepneuRovUjak8e4X6eA8c2JYZDQRcPxgaoqByRQKajga",
  "key14": "3JryADmMkENYa7jr5adJEPRCRZheTix6Xx7eoKQ7RixVMMTEhjGPusMaAqgCWfUTagpYqqf6gHxG7wdb7YUUC77h",
  "key15": "3D8EFJcD4h2WFukedwyq7pdnXauBrcLRLMJyyiP84MVCFvLzc4S7SKeJ1hwyTGJZwRmqVEuJqg9YoKvJoeinWYn",
  "key16": "WAwWtM6kvducMkqchrgqU9uQFePRNoxcGo2JnACiEhGe3Mp9M2NmqiSk791E8nXsyV7GEq6gftm16spEuEp1x8T",
  "key17": "BovfD53VDQWUWXtAhnDDZ6wkRXD26y5TkocifhjWwcxkt163AdxWUqj9DrpKEE7FCEwy3QPcQLA3SzvgETPNCWw",
  "key18": "6Ek7t4RQdudzBe29HC5dAnYZHGfvXckKRz16uhDtKfTyPP13retTCRYJNKnHSriE6e7ESPkovDzAMhA7aS3qfNa",
  "key19": "2wu92BR48cL6AqNgdPh9j2rnYFQGNT15xjMKAf7uaqaHiRpvmA5aLNMMmPSuxgvCbQwruwbTzWSqcLieRfxgR4Bo",
  "key20": "5kXB4JrLiyVLr9JVbtxF5o2piv9NSzEn47RH9FUQ4kU6pMSmKFBksJmAcW1172am83nJZ6rh4S2HudhkwdoCmHgs",
  "key21": "23mkBfPTc5C4KpqnCkx6dt2YgoDfrNrgCCUPRqKv4sRYc1jbdnMsSK1ujqVJzuAeqibgWRmHDVVgeYNPFzFZ4etM",
  "key22": "36qb3LVK5fLbMsjQ7tEarSD4HxSM2WHqMfFqjT7WQGi4efam34dHno5EvDuAtn9gn9xhGUGv6HUcdFobvyVq1Jbh",
  "key23": "57aDx2owmMnPNm4VaTH1tt2CncCx3ZAE2hsAb2c9UizFJtkNjq2NkSnSedkFrHysmXpKTYaKBH3s9rg24XmuquoA",
  "key24": "21fStiiUJZAaJ6FP6jNFKj6MVCH1WJEQudE58Nfesm6Czusm9A8LcdfsGz1MdGL3fGaT1JgYVtKzaKV891TGdyus",
  "key25": "3Jkre2p3c7bV5ihpTHM2jCkCBb2WceaNZqsWcDZMk1Y1DEY3RbofNcS8XcuPdiEVV3p98Vf4uBYKdZyqEDe8zeL6",
  "key26": "HXScafqVzumFGFphCoL9JUdS17M6N3yuFYG1jk8hL3EobE1jNXUeCS3hgTfv55PecjizY1PcbNPDeQ9L2cXUBeJ",
  "key27": "gpsSvFFuLQ8BqimArAmyLEjKFpeiMoNL4hpsWXDidW3dbMFQKKdnB6qnFHyL2enVoLwRJtyndWD82SdYrxG3Aem",
  "key28": "3wzo1z8ikJxC1z7L2H5HfDK5WyaQAd2SboNYzKiH9GjXuBvmRRHHtGDVtLpA3yiAu78DWwf2mTG5PVUvTQW2fnTY",
  "key29": "4UFwX6AFwNu4bBec9hQ4eoY892HzQyZrfSvbjvZPvHhwAt9PbbpzXtCwPJZrXXKmb8PzfgoBkGvH4MtQyd6Z6twV",
  "key30": "4pR8nmoNphUCtus6qjaePQ6VJBrCXtLbUVrjfDWo3k3oi1PJ7XRpN6sS5p2GVum9X3QEY6k6qavAgN9rCvLz6zsQ",
  "key31": "w5dRFHa1csauuhaKauMAne4p6mYNnrTc9NVB7pvfyzVZoH6PpRQsUMFE7N689RGch9aqz8DaRhdFmPXPPTjiEFs",
  "key32": "4GP6JBzAELEeZ8YWtNuGVUXaoBeb2fYDS5g2M4AK4b8pHwMWVYXsNbc9sjbBy76sqfFNdkAJZoVMt6kifNwcWtwq",
  "key33": "3RRRxWTggURcYZXGAdHRX2B9EzEgxd1rh79M9izBPnjFVMYAgAwmeRcoSGtgjWeBNy4Py3PHZyiqLRkJVjrpD8qF",
  "key34": "36QaM4TkC8AhBTzNdtokQM32U5TX4gLXX94sHiiYLWeabZKANXvQqWbUP53kXHYm2yhWTQw8UcbcaXphgZKUzA3C",
  "key35": "39PHL9pG5dLCrHdUe31tmrv87jqLHBne7wL13oB79eRPGLpVzjbkeZ2qXmniLayohFAHDmywaCktpkWuZk5P5w3D",
  "key36": "2FvTP5qJ88mzpKjF6NH6xeJ1JcuAk9oWrZDqXJHmToYd4TtvyCuvixA4VoxtnZRC5chRZxmFMFPfxCawLwmebLGX",
  "key37": "63jgoeBZkyN1d442dK5CNWohPVqFbJVpMVt8nqofeEmv1a1qkijcLZM7YW8PQijEpDbryysZJMMfUqjk2K7mYmS4",
  "key38": "3eczrbjoTpv7aKx34XbNQQNJTkMeJ4fG5NfTqk1Q2bEPPqgA6zBsLEafYwpsrRrbf9NUy4ovCuhy1ZdJ6yVNLgXd",
  "key39": "6Jf2zuciUjHnVTisW9EPxS6zK2EGN2UA5DU6b2ontmfLWs8pTqCfkw6Cm3eg8C4HWSeDgPZiNpAgYPeNGhtj6HE",
  "key40": "3Recgi5afrV4btJWm58Tybm7XpynA8hSv2PiR5URvehApvEUW3chdrt1HEx5KsPU98jZuZorSRqR6VUayJftbVtY",
  "key41": "479KTw6bgxVvKMNoJP7jUDtfJQnpajroTiS3CQQd9NP2RcjcFL1u19M3KuKciY8FAfVwqfTRTskSx5JDLikqdFVR",
  "key42": "4CbvCahc2Kf5kXskfp788M2YaThF3jyBEpnNVb1KrCmb55QLuRTx8LP61wFmh2NPjXKsjM8HyRL2XBQqnR9vcR4w"
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
