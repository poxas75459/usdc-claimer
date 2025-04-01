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
    "3QA153mbP44fuh8i3aYpky9z3KjNot1gzA1PnjsDAG3U2jGAfaGtbUHSxuRPFjH7nsCLQeaWkEEJLkvKabes2hiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmos5YwTZWSc3dVSamsUaJKhc4RtZrLQtyHSHcMAhPAbobEEgA8NKPWR5HbAmyNTvrk9kHVhEKCFCJuUTDWDr1F",
  "key1": "2BYQR3TuUnnatS7sscCq9HVgAUxTKtkzuX3KGWWhwSQJjmWUb2jMt6w1ZgCMkHY6CVGnoZskwAmS2bXNmVbW7TkZ",
  "key2": "4MiV1fCRkzPXeStpmy16EWEt8eyhN32X8sCEvv9ci1AoCjztm4CGdvPb5bRGVYAKk5p6cPbFJEefaKuPjtsyh9kQ",
  "key3": "667jNqn57NMN1jCHGr3W3actTpzX6kEEHmt1kUXAJUs8rAy5gPoVRwcHPsdB8h2FpjMFEmiynBg59eS8dZqm9BgT",
  "key4": "5GnfHasKoyNPALXmrbx6BwxBusq4uPhJmg58XsphJ7b4WEA4mWTZayorTEihS3Y83sABo62kzvNxCSSQAY4D6GCL",
  "key5": "2vNvqBuuD9L5pxXR9uzASggD8dwhYZbsTnS5uethE7josBTE1Df3Ds4ArpqVuXtdifKu4E8wiWPDxWbXXUL9tEfN",
  "key6": "2v5F6UVm98iiqeQUN8xzKvknqYSihkxygNSa2ZmrvTt4aKLGpDYWqrh2BggDPRCPCCMHroKGJAU75n6cAVpfmVWh",
  "key7": "53Mr1eVF2xNYbxmEiH1DpRsF1wwsJZdhfBExXY2hpXeE5tGXvAjAdCDC4y4YWptnkhN4VA1bNaMEKMTTnAZBXU4S",
  "key8": "ncTd7GVogTxkfjzVZR9tdzduCCordbDsnMufuXpULfFitXmqU7UHZeQkCYvSFfvPep6xWrRn3o4d7e6zw2AkJ6R",
  "key9": "KPpUBivVnpRpHmr7qn12Zo7yvc8HPboew5PCt4kwSXrWJxnDUduYaJdgzeGfC6uhv6eyWbZwj3A6ir5pSnF1iq2",
  "key10": "3GFYmn1NxUuftzy86SgE2PxQraGK6w6wfRVJdUkMyaVP4bnYd46d7bWh95cX1aMFLzAgxh9i5dgcBJWsm4txdA5x",
  "key11": "3GuiNjTigt4ZTgRNc45zRN4ZSmkbr9VKMMZUVrksqTuCTyihUvVNx9AHaxR2DckHTJRrDxk7t75wYdBwbfKah7gQ",
  "key12": "65os7cLHjDzdhSf9m8Uq7gLwdbaHrLurrtra4fkh46j1xh3an616jxXv9ucwKhUCBJpZuY3t9B2xDUXZfa7BPdoC",
  "key13": "5TF1AU5N8S8JTB6Z7SDziDwpVVCBFXvrUB6njtLfxHHPNWUVm6Jy4yrtpoouSnqPGQKSZYY8vhaG6325nQGgpkDu",
  "key14": "epZghUyYBxFsj9zP6M8sFfH7ipWAYXq76Vujm4AiQELNMTUwrZfz8Vpi1jEvAxM9kAiJ8iTRMHcQMH5m1ucanGU",
  "key15": "3qJjoy8yEnab9M2zQ7MV57WXbRu1BpkwNayRz1Yxy3NgFzrYXjrbk6Bhz9snJ46VDDHvxVjahuADYcm79rzrDcyU",
  "key16": "2dYg4GhwZ1i4u5oLvxcbVh8Ays9Je47AG5KXFy9NNSAfukziWDj9R95rGvqEXhmpgjE4U2f1TfBjKkxc3gJrCKXp",
  "key17": "WxEGKwXwGnmRnUzbBvTbBmqaFyrxLSzE1tyXGSv2xpJcCHsckmEgmERadSv6aGfx2PdetKxYnSoZ6aA2ju8sbFx",
  "key18": "2dHbfPUkqSyXzGeNZN33yyEG64FEkv4t7GRvMkjMJHzBXYHvAGQnC4ojoaSN282L15JDCX91Kdnfh2xTU1SGSpqP",
  "key19": "bJD4meZJkGHarDmimhrWCRb948HDqyTiySvvmMKDwA6avYY7hDATbFeSnqcR2D6pzXR3uy8YBQaGRF81K6DhMVw",
  "key20": "3d47XSbcdBJ1ezpi3tPAJ9dT3j8GaZaybqFTmJxqQPo6jeeqRwywGkjckjmCS2q17bTf8qbtBSLYjDQ8FNPBD88N",
  "key21": "5XXT9CxAW5XCzFaaMzdMMfKVrevBmpg9r5X8o68GWR26HoCi37g6yfbmoGw5twKENZ6JeqCi8g4aqmQvsHSYzzki",
  "key22": "2BXFudYfuvdJHtHpMUVY6jVXCjRZ8hQTMD7Ka15bazEEnu1ZgmmerZcEMUGDrkwxgatiSnZB86XE2BFM2pcXbhQ",
  "key23": "3WQ5pzsqU1PzxXqZ3Sr8N9X7SpF5Ma6zVXKnaC6x5XCtn7Rgspka3gijF8ituGiYRWhsE6ksHDVhYeViQ47aHi2u",
  "key24": "bjhwckJToSHWJsWxyXTn2SxwQEKFejU7X1j9j5ScbUDnw4asp95joaCh8wcV1zoFeGDTPc2fgMt21zDcMrfZXBH",
  "key25": "31orcLRYyJL52KW48eVFnZnSLmCwuNc13YCQs48vm6NJF1DtGwKCKEDpKHf6pfeNM9YyMSMwX74qdNxQbFgYme58",
  "key26": "4WJwMgZbJyG38X9vE5AHcsCQ8cHarZoNJ8TLfv5hcG4qADUUgT5CmdQq68spLxzsK8wtRDms75vKn12qxHhpz3H8",
  "key27": "3TYKmNYe53rnayYVTtzzEnuRxFhsK1h7bruGx9it1yrnsdt88qWx1GVFMvnt7xxAjpPabFonyErnD6djYDeqXm3W",
  "key28": "2iuUb7394FSkZ34rCsDww1HM5gQjj8Ztw1MqCvm8zRoiher3CKWPLu2sW8x4JgxHBPro9wpDhVvXhXvndgPeoUgN",
  "key29": "4tQgiZW3XhkaAgLuFonhYcQw6cMWRe7c2ag2RjLX2hBwQefsz3cVZBs8GsyQxYRhPuCB1EHcBqAnePyeaG74XWwW",
  "key30": "41ZhT3URMSRVTeVPs2uWktXqBrEeT71MaFpq2baMi5bfAzSKx2gveSi6hQ86SpJsHWME7ctJtCiU2LdubGVrAKap",
  "key31": "45cejure51RDq7ruJUJoyaMKizM4BbcE53XQCuNvdMzdWXykRsK3SidpagXTUgbc9YuohTJvUhrLqkDcVSuYuGYH",
  "key32": "2ZhLUZ7V87GCYBr2AAcy8Xtn2P7hbv8DBiJBmvfZpqVP4PCNPGTroUShQcrUH69aLUx7ZVHzb48nFqkMJen1UgSD",
  "key33": "2DfUN9EAk1vYMXTVNMLLMTpVZ746BLQCpmP296RrnDVNJrhNRbRCs1WHRobxcZ1gQT9Z4BVa1xkn6iFAbLckHgY8"
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
