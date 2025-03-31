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
    "XKLVU1CJ9r9se6pXdVHFXBx9ajGHJenEEwW9RdaXd2ZVrC68vZTargJ91cFLLuiGP25hnuPiD2EjY4yBGESrH3N"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2PHiRHwGTkNdMmJftxZVvQuUHFi5fWNqqm2kGMmfhMFDVhEULEq9kQ3Rvf5j9hAX6kwq9PtpwmJQEHCqb2owYYaD",
  "decoyKey1": "4fHU4hsXPaw9AJ4zNkqfY93jZMyoBJAb6MZMA5F5C1gsXXv8mEjBLQKzqQS2uhSd5cnFXQRjtPptd4ZVv9oaJJo",
  "decoyKey2": "5xNZtq2qmfy8VfgUNSWdWBvNSWud3LWUyPcsDpKuom1UeF33JdWzKzZ8nMFEdtJTgz4P3iEvQ8qREe8VkedZYkd8",
  "decoyKey3": "5mSBjiEJpSGhJCHvAN8x73ajrpKiXeCpoyDNJb8Rki5HXFPSzf511g4YgV2YQ4VGF5fYWpcgkU1gpqEaWPJfV8Rn",
  "decoyKey4": "ZZFvbaU9RaTc9LWtQChFMVfeS2YcgpAaqCaE6MLDH8fvAM5E8y41yQWnHoKYS1nTw7Tgi1NqzFgLvtQF4KnHdWa",
  "decoyKey5": "5Wm9aPwSKtdNzqCaszAZBsdB4chT8CigRQgh4Ak8BESHo1PJSoJSeu7DH1t8iNFRP5UF3jMTWnzSoxs4we1CP1fV",
  "decoyKey6": "4qfVQuehZs3jHddEs7LAR5CKeJ8hksQWWoZwoE2arkFyy6uomuLozwDsFB23StyFGWvzqtChzUTd1fTwrdees6FD",
  "decoyKey7": "5yrkwv4BtfFo4pS7LwTV5huC3yng7Sk6dEEEyFBUoKq5gqDCnvWjV6ArJFvqCf5USa212z3hWURsKb46FandeBeG",
  "decoyKey8": "4W1zfXBXQXBeAZbrEqXF8mWdGai7EVhrx3i4hdZu6eQUVXgXZaQ1Pxn3iwvFPMJiZhyFxde9WwC9psJoAkSUUMoA",
  "decoyKey9": "27hsCCwLpf1NNwMMLwnkh7GPwD5yKypdiBvz8GyXwjsHq72mD8M5FWXmRhFeKY8Vnt7ZvDLe61mSzZvNZbp7wuGY",
  "decoyKey10": "4bsHeB6A8YKC7arjW7nvDz37NWDTJuvTB3SxWvz8cCPgk8t32VdxaTy6jfgrB96qnxHj9DRdfToKnJEtwPsjqaeN",
  "decoyKey11": "41vbuNvanob66Twe9qEGpKSazKUqswn54NPPRthekod7dLAatE3ep4Q7QKnVrSMqmWEYWcACwBmYdHCmp5Ak17yh",
  "decoyKey12": "2z5HqTUX6BhV68GMP1TyneFswicK4prp9tHBvuvtYfujTgKBqaiDdrLhSmtRGWHhu8JsXwqdyvqfmyC1ha2SXTDS",
  "decoyKey13": "12375jXLQuL6NWS7tPu5aHGJhh5RhfGMwPqoi4Fg6wAgP82QnjS9Hd5vd9BV3dQx63YZemqr8BPP2Teuybk36txZ",
  "decoyKey14": "4UnKwNUAYRwarCW45JCVpbo29vspSC4QbbKf2JZT1uBeCea4fvBZesLopPxeWAtLVNR8SH8mGoGiWrxkoRHZHraQ",
  "decoyKey15": "2Ea4diE1rDp6nVANqW3EngaA1RHZB6oouoS2dT2u4tJZjTNpzP9DgTmT3Agf6VruwxcQ81q4GH8usi51fBHs2udz",
  "decoyKey16": "3AYiJC3319f4Q4czJTnRhAScTrtN3ENVuS3rZVahd4omE5zYLzGc43HBYgaaNenqpXCfP3Ebi3PgoShxZpgPnd35",
  "decoyKey17": "2oCcHhWHScfzNgAmuq5Hfb7ouDTReozjABAkD74fCLnp6hXastwTK3sRYgpqFvVJKvpn2YX8wP5Npb1gCWXxheVw",
  "decoyKey18": "4j8QWRmjcKGLV6Yor87bUJY8S5mVWRrmvS76cvgPsJRjeKcWTP6KCfo5qW5R4DZW7UtmXX9nsmeVJyXRPSPH4XMx",
  "decoyKey19": "47H1RsmDVPYM5y5Zi5VXAAXYmzXG7LK1gw2hdgpVimEJwAf4BCdMrpJ6Q9UAgbgeZufZHC6MJuAmhctLHNxR7X9G",
  "decoyKey20": "67HgSoKuQ6UWcU7n25882XKjDE693ejpT8niVoStBftL7629fhTnS3AYJqAvi12tPC2pTyEjvAW96vmUUGdRV3h8",
  "decoyKey21": "3LMtZ85t9SFVsHfbFkt2cVnvxPY1k32ABjLL13vfEEX5zUpe191LHE8fnGcJ7eBra2KKfr6xtp1noP2hQQturwFn",
  "decoyKey22": "4NLiATArbGt7L7U2AXLCx2qxBF1kbdyPYPy4az8QZP4z3GfzbSfEKZ9NTK2NyPeDGwnrukzaUmhjepspWbdrjCck",
  "decoyKey23": "2E9pociG8Pn2daY9V5ZfdZtVjwzU8fQPZqR8JUUMHwtuVfXZ8z9pXPYUBxqai9MCtzgScLFqyat3WroDx6v8ah7n",
  "decoyKey24": "5NFU8nBPPC3i7HukCN8yovGCygEYyLBk2iFfsSKAiEcqRamqTt4SMiAXaSD9cFVtsPFZ3sFDmaYomEyYgFnAdi4A",
  "decoyKey25": "3ugUEqEFY2Pg5aeE5ywyKugUDKnu8APYs75KyQWKyq5wFGtXWukMsgNzx7v4sJ8S8e7q9HeVm54hrAKV4Wom3xfR",
  "decoyKey26": "78SkjhGwfz7BLXTd9XvD5HyQZnsNrtjPJzboZ421L6zVTUbBmuEcdcTCquZS3gL13DiZxV1KwVY592J3jMfLcUr",
  "decoyKey27": "2cNf9DWr71bYknZW5EWNXDYpbFkmR5y65bE3kSnb45Ha5hxuE6r8qpJ9EZ6Xcnnj12z6qBzheKZKJKgUGcvm8VCS",
  "decoyKey28": "sCqjbK2m5DpnTuK3dXmxaQCrpJzNxhZ9geih1qbehdmKX5sjfAoN6RZsfrJUBaAxEjnRY6BudQbn7kg7Xz5PBDi",
  "decoyKey29": "2NtVdWZUhU5wCTGcr3j6XN7AvXgnVSegFj3rw2QGndhTt3ZRaoRdbxDcqKbkFznjXwkzzsUxxNdQ23sYpAM22AWj",
  "decoyKey30": "5xWngoWARRRPaWZP28mu5pAT6a93jZ6vYrqkt1JjnuMe1fqZ1PvfJJx9J1JQKvHUYJ9xrSV2cnQopnHb4UNtVn5D",
  "decoyKey31": "3Hs8zSkxPSPkZyS17idg4hMaP3n98kGkGsePGXxZK9uNFFoZd3ifVKsPN4GZt7HrNanSe8zMN4amkKkhpr1zTa1a",
  "decoyKey32": "4ki9L6DrUTm4rfxm5WwFdtaVtQPJfcvNeviryr4uAYeqvhuDrNYSdXmU69y2oxvKZ33mTxroJTRdfpmxCpP55e9m",
  "decoyKey33": "2ffoHYH9jvv3degBnPnqJAAHpnNdkPBBRTr9Q5V49smuDD9G3fC9ZNvb82dZifZ8MwcDrbuz73MyCUAvS2QZ81dd",
  "decoyKey34": "36wxWCPiYbVkxfG5AA2uWcn4xvLHHvdHjbuKf7e3iG3rshK5s6QuViNNTgVZhpCJwRjNZtuidpaKEfPCJjTqVAnh",
  "decoyKey35": "4qe1a2u8Uik45QKXaDA5dtr4bc6KJ436Eph7ENNsP8giRCHLMesrnMTJVUk7u417Ah6A93u3GUksEet2eSTCEL6Y",
  "decoyKey36": "2qtY8cEmAD6qZ1h9ujS7VaM4889YFhV411jAhHeJaeaxcajWVGRFv6wcZMRexdYdcxT6Ak8SXWqnUhrV7FXs8pFu",
  "decoyKey37": "5YRVqKpefsPrMSJeqfC4EiGgYjiQebKnA7h3LT9ekxeT5jGNd4teTdp5vCL7ePU2oE52bkvDbDJUT1Mky7zgL5sy",
  "decoyKey38": "KJRM7oZUb1AEM7nKQfmiHi3sjYLwQHP1RMGdR3wSTAHXNkFsTos1Swu1PjBwY8qhvSVTUCvrTRdFfp58cBXBhLA",
  "decoyKey39": "4pVgDpreVpSpq5ox3BEQgihtPPoU9HVHz3Jhra7z4pCedAg6FNB7aSvQBNx2hwPCsvj2ZgwFHPkCKehNvG65Rqcf",
  "decoyKey40": "KDz5FiQcsY49pRHXpN8ydTwPcKurhMM5eGjYQTZejVVPz6HBtPoBpCtKyrbmNMrxXFCpwn3pRiq2zorVJuqypay",
  "decoyKey41": "4V3gwBQnkSZVevCN339hsM1xvAcFUAoyCs4p8Uy4GsemptGFYSB7TAjgsLjkyZf1CGfSGtEk7ikWGVNfPVfgbp32",
  "decoyKey42": "PU1aucMbtJC3SgW7R19VvY1L1GDq92T7BwcYMhBh7A324rUg63f7pWSBoU8vvg21ctr156Wo3RxqtcBvtq5UJVY",
  "decoyKey43": "2nSKMeqFYSGqA2PUpLitc8kEGJC3iCj4ojKLogkSF8WFRmJ41T5dhfjf83pnk2BWgAGf27USkXfegjKMBmYv848U"
};
// DECOY_KEYS_END
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