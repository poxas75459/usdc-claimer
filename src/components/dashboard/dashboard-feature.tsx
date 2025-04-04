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
    "498DnRpD3oTDrNoY5u1Kx1ytVhqcXRrTLi8jNN1WTC6hr421PCfv8vwHcg4T7hi4b5T3Adz3o4V6H3HvmU5XvVtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRTz53NiCz2bPzsPWS7KePoMS9P2GGceQkfyMJPUVR36LXREDQ1AYUMn3y67W7MqUn5adDKyjEF1AspsQ8y4THQ",
  "key1": "jZxEtQB3FSb2aUT8F7XEx3d8sMpwyNmL3AHcBeMiPpdHsAVnHvngARQHkrXKDAEHLRtBG9DBzPKUtSrcRLjYCww",
  "key2": "63Yj9WnuyaPdqM1FdBeBAnvwpLVRvzGaiNG1k6r5ThF2dpJUjHwPceGyHqpPtZQnSz391GTSPCtmDjnPo9uh4tGy",
  "key3": "2M99rcxi43s9C3iH2ew1prY4pQLfchUrFDZnf5HZDX98LjHx7BirrxxfxKQrDyFapBsWgnroij1o7wHsxDCbuc61",
  "key4": "65gqHXSQipFEJzLpTiMavohKYYspFHwEryE2efKBrSJLtsuAEnvWTTFKMnE3x3AEDugFj6stcunPBTdDxVsDM2En",
  "key5": "CMNV2CmUpHbvN4zK7UxCSkBUR4QunjdiJ14gbL5D1PLmKzE9wR8jF1f8dSRVkV7XCeNARaq8tsSr3Xctm616GfR",
  "key6": "w759kHNTxdHQ6JL75EzB8LXusJjmw6seAbxeHR5rbwB6vCsKSs1mWuJPJPtvAz3N3DJaZ7DmZ1aDEF1o5atb44Y",
  "key7": "4GzThwN6rQ92xuJUAPTtxdsPPHSoGTikWgFX1t85WPsFnMQyz545vUTK67fPLvAJMELxyxAvV1N9tfS9trN4aivx",
  "key8": "4nGAFnWtfrAjLjb6m4m3PrumBsMFF8MS3eUBNCZ4EJoizUMVeeTGA2BoakfRmJb8GYHRNKGGbL1ttDvgNFHxhH6Z",
  "key9": "5dJxgbj3JgDUfLxoJJQjatRsjWCFVbYsSpcjVdQ7hy8ukEPaNU7EZ3sXVueYqLu4i1YpXK4AWMCW1Z6znsSxko9S",
  "key10": "csyJJj8GPKsST3eB5MddjK9SKNh1W6Jdhgf4XKQTydwLwoXwGeMCoW6yLWMQvRDTFDtPxUoQKEdi2vAs5Wt5dRw",
  "key11": "5Eshg4iDVjgj2k3y9P6gv937aBLbp4LsDXY4W8sGiKYHkCRseqMRNnZfnraM8PXsqgihRDfLT3j3HNdTSaJyaSst",
  "key12": "4Z764qDnpU2jmDFzY8yWa2pvPmJntyi3AgJohB3WQ68BhvbbT56rkvanZdtcKh93Djm2KaL1L1DZxwRSkWKgx78",
  "key13": "6712Ac4PuqToMXHZ6pJhJJwhTejigzcYDx8tL4ziJBkibDxqzsBk1tzTnPFMpa2K15LUovKhKxC1CXT9uuvioyxx",
  "key14": "66nPmqm42tbMSx5iMyRLz94dCqQbJKA6rdco8Hi2YRB6uHyz2rzFbVADyNuboRzRKQHZtdgmAKyy5YTydNTGHCYG",
  "key15": "5aBkfP1rUqM6bjwzvi6DEZ7TSUqP77ubaQMGo4Ef5LCk8CYULcL7vaKUHK9xg5tf3KbCU5CAqfBGKsGXF8Y11DLR",
  "key16": "5tJy2FEjNv3zRVdF18mFS6zckyXFDUZ6ULPxLkdbuzzUc28DQS4MqY79HL66qN3vdQT5jMm2cmgmWCoorLEPgb88",
  "key17": "4h61k2PhnUSGxzJ6w1uqUhk1UY16GWNssdqYxi1ZFez86pWD9SuptSWurwAKivW4XR5RedpryWdmaMZp4qoyjD4R",
  "key18": "r7GHzbfCY4Bwr5kGeT6tKvx6zTwQcszHbThXuaU6K4hATqaP59DAKHFA22guR9Rz9Yc6UxGVyWxgjWVL8CJBy24",
  "key19": "4nZEg2yZ6YzXVAsqG7UAJdtP5ZoC9NWfkpwpP9vNbfdYGapp8VJzQCMynb4Rn1BMiC99ViVTMLhZma6ot1VN4fzk",
  "key20": "5VLRkpFy52uX7aw7MwFVS2L9GJhadDr5AshCPSRLE2RESLuesJ6BAyzbEsSPvLyJkXnNA2WtK77PcyqUWbySb22a",
  "key21": "ESsvwBSsrCfLKMb88BmTdwr9FHVLptBYVePNv5PyVLqm6UcyYu5xLFD6ADgCaPYq73nniTGnsEjSE6m2uwsmLd2",
  "key22": "34nnNXqT7d3ZkRE1sTPiZsT2eXve8HVnpofzauUaVPY9oG5LpsE5WacFb9xM2676Xhct8BcksZVvy23PeAztZMEX",
  "key23": "vYDePfWFvNbqKSupHkRMFUGsz6BnYbaa7KS5B6pccyRrPJmDnebJSowAmH5w8nah2uxCuXzWyXmiZD7h8U5C2BU",
  "key24": "2tKKtWpos2hWKFtdJCE57RsQdfmryGVo6NVg5wG3YSgJSt86G888ojwqA7Fbg27QQPYxBs9rV1P8RhzQCHMsEMcf",
  "key25": "3d8NrwZLEk6CRjwSchmgRy8DrVyVVakA65LdKWCgwt6ZyLhNFfSjyacCuQDd8mZNzDYE4Ms63Po9f2RuZ6HoBVa2",
  "key26": "4jcS32VH2zkg6CnzsZ2rtCPRGFF2hEhBTVL1wHDAZXdPbDGLL6KMrhKPJUyYhQv5K4H2nFJWfGxxzRXGdJ3gVrJT",
  "key27": "33i5f39mixuvXFdujqURxKVWBMEFtvkSAAMsTVnhgbk45UWxuRcZVB6JQb2L3Vu1X5jeNnW1z65EMLZNFw7WKNeX",
  "key28": "3GG2GcSj7y97aeNraUZ1PU3E4sw8di7XFrotxop3gfLSm9arosKDnSA9Q6mk3LJ5tBRHUkNuzbGaZptt9HZFW2Zj",
  "key29": "2PtbYYm83QwJNRAer1PFDJCLNdcDLoRfkArwVSZvMKRkqZoDQfqQTM43trHnwCa4DQQb4g8kUjjJ8rcgYxpyKbQg",
  "key30": "5ZQbyF9gJh8u1qKpseWrQtU9C3hyjCaQrsyjVoQkDgPAcnGDkDaMduivjfHBY7mhmqZJxhMrc3noaK5QLjLWxXXE"
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
