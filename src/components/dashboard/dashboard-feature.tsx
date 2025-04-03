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
    "5gQh5zPf1ZmT32VmHapV23ioPfpZ93pZkDU92coS2uHF6qVRSNGYY9WExEccobjYH5wLz77FgFca2j1pCuzEAfFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1sra1db1REyFZghphaKwUthaYNSvVrUSzXtFbqnrBhcyGjgqGFZvybBhqBiGNARcEb8u5GARX29FWG7KhztRke",
  "key1": "45ZC2BftnkRJAnNi2UuxJg8cWHV4q8muq5a6bZhQvZW696h6rEq8QivvYmCLoUjpyT11yucC6CdXDPRHUvAyGzVQ",
  "key2": "StXzaxFkSvTYpE17tsLFkE2HRWsdkefNgTDV99Wm7EFyMsQFhqvuE5Br5iVZup79zHdQQojyFDwbec5zzMjJ9d9",
  "key3": "2himDQy75GzWBBXSfDYbfBeFFbBZHUYufeymQn7QJASoCMq53U7arzop92Y6f7PiYVg89e2cwsUZRGdALWewQsBu",
  "key4": "u3SwP1wndCxbXHKoTseD3EdLt9QF2y8dP75pLw69os8WxucEEtH29rumk6bCuWe6yZ84uRpnBnj5Wb1MCVLWyfJ",
  "key5": "5b7NWMn3XUQ1eAqnS9XpWgVrYeDT2fwC1rBTXyiEpKmrBFzWm1RRwpxAG8cKjUecexFFqdUZ6KFFSjNThPaG9TT3",
  "key6": "49BRDPXsVYBPmgjQ2q4P8LwaAtkYL1ngPL9CqpjGXCtreq36NK8ErvSVYfPf5TLydtx8PLRvcLz8t46G3BHxtkSK",
  "key7": "2DUcDdU5L7FgRfdtb61LDxkBaNt6C1UtGxRw1ewGQ9nMViSpPNTkWNA6ZWVUFzFkdvwF8u4DhpdbMgpURx13weEQ",
  "key8": "5DJkMiwqaXH1z8tQzv86oFBDNy5iHGEppbADcuQzbZpu963s6ruAz5V4a7QEC23dQbFPMxZAWwrgyHJcWTWbQKGp",
  "key9": "Vrru3cJsUhnVmckfMQ8XKXUWbYZPrXGdbLJBesQSiv61rCKioen2UaprZmC4XTdLoYBatfoQD5tmV1GskeAtrJD",
  "key10": "122whStPnMzrmi2PFKK1JRCq7NPrcKaiCZSs3BKHAXCErxmxXBnkKpL9KvP26sgJVYAGzwbv2yn77SD4N4FSCqwr",
  "key11": "4qmiRQzKeEvL1UycQ3beLFZbSGbBHnkvrsuPe6N2Nax9M5qtf4UzBcHXtaKrbhc7XZu9fJ8YfEUutWFA2EqZDMjA",
  "key12": "49Liydr42FsmKHT2WuoWGeiEkvNHm1tP8k6twRPUEbHedt6gHCJ5sbyzy6dwL7w1efdWgfHXqFERgMBefqq13suP",
  "key13": "3eH9b65v5ij1snwADEwPm5zkfb5mz8Z4C1Pww1g51H7F8QcfZw2RsA4ux9kUtd1EDHa9SCTYYodRmJpnx3ptc68S",
  "key14": "33dtB6dEXLgRmxucYEaAowMaBYhrcAHfqBGUigCsCgut7R5bc2jecweGg7fkmKKgFwUuDpRmXJ7T8fbYc7kY7TxQ",
  "key15": "CfvYcthWxxhDwJBRU67c5KHzmug4kPbn3y6csF4a91sZNUZxUoAggL6JSwHC6X6vAf7uTbPHXGusjydujn6R5BQ",
  "key16": "5gKNrPdrCBD7gcRr86qxzGFfZRaNhH72dvcntPSNwHQZndcryx3rMCwdcDN7pxCxqgvY64u4Qj5Ms6Zn7gKpfGDo",
  "key17": "4p7rbaMAMMe6Mxz4eeJ1SNRZoDLDDT8PKog6tgRXHbiR9hyDY1jA25tUSDWSvY5mokdFMZYuFLwm9ThV4dGiKnwr",
  "key18": "354bJQWaoVQfFyRPnopPTnNtJQBCy7KR2EaoDUBVsHZJP2TFFBWVUotSZqSZ4H2Jq6bmWFSV5uffXeDSWLo5EQds",
  "key19": "5zTb4FVSBynhS4zgBp7cnwGKuWLYz2Rd8Ggy2VxbT38mMgjaBXBUmVoECZ7YgWptSkCQKeQUCoDxKGoWSPboBUKx",
  "key20": "42H3FQ1S2ocHqUgmsTmv4ayJAvX5Fx6phjRt3o8vFzahn3YRAUc8FfAEkWGPVRwRTgU2fL7MNA3fSmoF5nswUTw4",
  "key21": "PfusavDd4ekMJot4EBPDd64ENsQW4CzG4NCMALU56AFg7MpVbCB8EujNLUUr2phSKrbn5VyRN8feAzgAo8xt6bC",
  "key22": "4HCTo6RHRF4BjtiV5TBbWw4XcFggXX8heoMeh6vmYvw4qYkdKEcmLQUdMMWuswBb6qdoTDUowuERQCGjkeAgfQg4",
  "key23": "WVA9EJTo6Du1bZPGwPgNREHyHEQ25UoEVVWLYeq9jEy62497cg8k4HSP75pfJAiVnwguZjXgAMDh8Z3REQgAreT",
  "key24": "4o5SD9at9p7sEHsSn8VhHfWjdmu7H5sabCUavZgeDU3BQH5pzwVrDpr9TqTqWvAfPdoQiy57XqzbtuxZerGQxT62",
  "key25": "66tpBDgY1kcCd6dXMLVtvaSGb6p1fMs9G7ZS9xTNcatYyxggGmewsPLzFBVpcfGXoyAjA5ZhQQfmCea9iExPa6Sw",
  "key26": "L5ZLph9q3wFZUJX7U64Mu43w4mcLBDiDZAyDhnMEds9geUk9yp2PxKY4tTT3P4gfH6ezCJvzQeT8d8F36XX1FDZ"
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
