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
    "31SRx9DKPaou14JeSB1cevyfujca4YoqRdUVBZRjAVFzwsLxpQufiuB1eu9CU4nmnsCiKHwiGS3cTNDDYRPA7zCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1GJ1mP2gDTuc7FZWtjBuND6qr8FzXwLzMWakdHoZNyAYpsSWMUxsz9UsxZJaK12pZZaNabpN8Qr3e9MkueHdpj",
  "key1": "sfbzsFurZPqihEEwMmZAvZDH2nayCZRA1hsFSEFN4YAbqtcnNG4DkHKevdGdfoT8sdmycWJAAk5XxZ7wfoiZEsi",
  "key2": "4R8ZWCVYVVHXbe4tg5rBZYSRrgfzNa8q2Bay4j5wE1Dc8gfgAEMehcCUHPUPw2nRFq9yXTSWZ1WC3FjAjqCRZcAZ",
  "key3": "yJGEDmhUmxnX6MWW6p9ifMqcEeDw2W5rRoCs41RrWHu75po3CsFGihxjUmx1y1DGSntdszW73nk8Z7dTdZTmyAE",
  "key4": "5zZLLXvDAfFy9TG1Bu2Zdpu6u7UxnMbo2m32RWkWq4cYgVRCLyK7CHg7rKrd5CC2CzN5zR6L3RV46XVNJPxG3i9L",
  "key5": "avcvNfJYGUt4oWJL8RXeobMax8bKg2moxyZ2RNLvnK7iY83pmkEmvq3XuRdrNiySA9pHRbnDBK3ipMmtBxZ72FR",
  "key6": "4gReQDAE3mFtyJ6j8wZPgzmBSMJhhvKifBHQhparo7egZUHXYWCitKjZ8DJfe6JSNES31aUsBKf8r3wrWRqYyBbo",
  "key7": "466DUQXMbCXNyCjPonR3fhadT9YY8yLPH38dri7XqkYgSrUPLaGHj4y23cai8pzPjrVKUmcE8mhoDnExKLq1VqJ",
  "key8": "3QGFSqvgNANUt5F5FCp6EPmcVSgwVKAB2MeEQiZ8qPHMyaQxvXhY1WxzKVL4GFcDfPxshHRahHcVKcihPJsMowJc",
  "key9": "3Kq8dXGZ57CebPAjSPM9A4jZ4MRnrAAN78JU8yvHGazeY93AG6L8z7ihsAe9QxSRfd5zUruSQSXw5asgAvSsZnv9",
  "key10": "26S32EpyZ1YoMoR1WwHkLLfLN6uptds4sp8Xqat4ev6ChysWpjvZs3pmu1mDUPQoLdi2LRCwM6EYHgrunZxbZJqp",
  "key11": "2S5XAa9bf7E84EvzsLc88vvbqma68D8Lh3ZKLkpz4Bi9XFvA4akB4wyEXu1jEktAvo7LP1jf896mRAvFo1xmkfnk",
  "key12": "ZkxngpSktyJDPEzrpYVAebE9w3nNmtsQ6ZRzioghXCS3Zk9YCAbPZRJt8bem57DprMQh434DmMiJwYZuwuqNydg",
  "key13": "3jMj7kWrr4xa5yxyBBrie5vzogPpkWfDCKbyZTzHu9J4xnrwevFv7VixQkUeRYJyP93rNR1p9xtKHopq4NebrB4x",
  "key14": "21owBXoc46ZoSYMKM5oQeqb7iKyL1UJQpaiG8JFeXagKTcSKtHqPHd7tDfGgasacNiD7qezPARNGpgMY2eG96nHb",
  "key15": "5eSXM8etoNczCwPXp4FzUdDHHcg9eZboHBGPV41sGQWDeF15c4bhdPBqsN2q4pXo76tHCfgYZZEfguE7ocK2DWep",
  "key16": "22pXDGqUWtaE3jFV4hoKKbzpi7grqX5qcvvmCJx2HmfJX5YFx31irn8qm4TxuDLGy3umpQBRPoeFChR7X7Afi6rC",
  "key17": "5wi4V9Lvzi4QDyVUpNUmsgmoh9zgp15jNGWaBNMXdhMDT2Et7KzepMawUScwzcSMx2SXvbumsgYZuUH5vbpqSkHC",
  "key18": "AmCmRENtzheFiyZZPp2p653JySmhJUgYaVwqhvpvWaXk789LhDy51qQbznsazj5FeSUz2X173GqmA1z7Bgdrr7L",
  "key19": "3CztMAVtEXZLrYfLTUXhPA6hWvAVPLY3dW3VcHtSM3sCHReYaB5JTNFyerATWaG3HCcdd5ifpeWfaAj54a21aLpa",
  "key20": "46gFxdHeALof5VodyxpFSqmKPrAnZTV4PY5qAB7ECyzue3hyyyqQoUe1qUnDW99CWiAMpLJCpCDLeUjJikQBqcPe",
  "key21": "2zZzCpdwrbGe6ufejaBS1YZcXB6utGAhYk82yyA9zWjAbzow8yuV6pxRRWc2KvRwB1MpLXrvhuZ1ung737pxm7W1",
  "key22": "2UYHrio4KhvEecz1pnRbrXUMFnAPpKqniT5zM8hc7QbvfHQcn4FJVJRhX3Rd5iQqaniEMsCc8DT4C29biSbBwZNH",
  "key23": "38BN76ajSTaCCBEKJFnqizbas4t4mXAQVX2nm5ssEoahpmpwnbaZhivyKMPiC8FAi4PRfrN3KqaKrHgLrPE5rAKZ",
  "key24": "3Hr5tsZ2GG2gAjKtRKf8XLeSdNHrLUBFzpWnnDn8xgpVWUgu3fhNpp6vyEnV8ySiRqmw9T2o6hUFBkMUupZFnjxn",
  "key25": "67WBL59MXcqdHrPbssu7BnN3KoWtSpQo9Dea3CFQKY3uvuPJsRbYEHgHNU7cFHzF9w8tNkibyRWwWp1ny3nKQoTV",
  "key26": "3gomHDcTEDmTfZPvt9s3d2UHmMGvL5xs7fMMKAmD3qwQbW2SL1EkSANuwtHxt78zKxeojXd9nNoKtLNmEQw1po5C",
  "key27": "53R5ZsyZdaVdhwwqFcwK828D3e8sbpe2bmEe5a6Q55j8YK7iNoc28qsyLrwsvLTzjExGvV1gFzsyePMaJ5qve7EN",
  "key28": "VHwq9iJ6Rm4ezRNGVUJYbMaBBMsb61gFXc1vN8X3nsS9ePCiF3twcW5LtXkhFbx5o1DNapwFqzSwi6FoLJvVPAP",
  "key29": "5JtwYQQmsjBfiZ44pznR6gaQ98QWsdKLD9XKnYL2r8AkEVeZCYCHEKcAt4ezVDe3869J3PFivJZDcaTc8BcQnm13",
  "key30": "34ehbZ7QYTkbibvVSnKgNDhG8uybVkYYSFYkH7i6TraGvduh8vqGzaaYvduUexXTeSiajmGHsiiPxWK9WcHo8u49",
  "key31": "4pwU64ywb4opwy3REnm7Q1pPu8BG22hF1Wpokf9hfuhXS2NqKWfvj1Xrzosys8D1Wv3D5RhW3GUcaWbv5r1WCCaG",
  "key32": "mixhCZhShPXVi1ez3yU8zNbyF6pae8VMTtSueVcwSPD57ACcHzXPz96tvDvza9VM5f2UnFaYNRp99tYLjT7sV49",
  "key33": "3jWqQ3PYXwd6aJcwcodWfMFDdMtEadBonSYSUaaqamknyZPc4s7MN9zqaopc7kQJ3PcDidSzr3mRcwSXmZkQdvWg",
  "key34": "2nx4pdNbi3CAzf4pWpT42QNBqe8SWYUZ9N7Z3xQomJ1fWsRuJwSH2yQndmkQzPyHU5krfes8dn8zpZfiu3wr6mNd",
  "key35": "3NVR1mqoQHPq1c6Qx4pp3iAkx1ED2HvpARsbbMx9wtSHHxBwqLgceWATxkicE76FYZVUKLrV6R23Qk1Z3esNLySC",
  "key36": "pr9K7cQHyMD6skhUTPVR6Wg693Vb6ntps88s2aRkSte4tKR6BBWZSsusqsLLk4YumPepUHmsT9fLNtHb6DDVdr6",
  "key37": "36Xfs5t3y9yWVB2GDRAcwo82qywiEQQa5bYpThCeM8mvxJGau18oJuXncqUMTESb2UWVzE6qZZqgUUczWToguwvu",
  "key38": "HLuhNrPuVEQJMt7jV33kTtV283JPUYK3Yb7wMdjTEPAM89LCvicL95ByqqpfWHe6FmjYgHJtPqa1u8E1yssnpP9",
  "key39": "5r2Gc4SSyA7aWaY8TWWdGbnAJY7djqUvFTcLKpW8i5MQG4tCy93odrvr18vhth7pAwSFobztUgu6R64kaAa3G8b3",
  "key40": "4uzH4pBm5DdmtWQCGsD54PdARqKrcB55SYs3sAx4tFaMBUpqRF1k2rikqyFUhe5RVndzhinL6zxi8PttEPd3px9V"
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
