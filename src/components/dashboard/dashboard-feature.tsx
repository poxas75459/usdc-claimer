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
    "2ELHsyzGQkM4pjkxgxCQtrzM6xZastM2khRP9DKn1hL39JcCDfSY86K928t6ZNJryvKRUJhzZ2UdVURriQsDJoT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuYfWU8z49wyxwAD3zrhZwRWPNup2FuMa9fdxv9pGsZ6Qd3WZJpMEbvG5SPXWxBymYS3HfibUgfWBRzViKQqXGZ",
  "key1": "3J8Z9P4DBULPjiEhbXQgo1u3PeTkEgoC9AFiwtXuiCdrK7KSX29ear4fbxGhLtzHL6T6uHVH5oG3ybDm4uCd6F32",
  "key2": "5QBSWKh1TJbo13F7VHyjhgJaVh1idax86TfTDvhKtTASGF7fNF4YSuuL8S98g84kWCbvtxawgnbjv5DDQyEG3ZES",
  "key3": "2vzyt6GmEg1rwvX3uW2Y4AGtGeYyRhiVgyFres2CyPEqZLLSfPrJg7Yzsss8nEfmgGpQL9Z2uAMFxkq19aPRyjd8",
  "key4": "4oFgJTLLnoQC4XvojwMPcbrg7gSCH3k1N5CiWez7tUZifihbxuPS7tHdMVq4yLc2WKMAXbTZ5DYLtmtrUvspAWG9",
  "key5": "2rFJAMxetXp3BLEVZz1TVBGofPtA67cEvAmo2fAMm6FNKYkMNtjNLYyaxUDUGfd1RxYj7Vj2ohiXYGmM7Es4zPrG",
  "key6": "3N574U4Ny6GNFngLrbHeUiKzxjzE6UdLfuV7UGhWmQ9PP51VunEB6LoZz2t49TzBHnFtCpCRLRragWAA97xdMoHG",
  "key7": "4Wus85XrFh84GrRVgpruUC41d6vFdGrKEpNSJPo7Sc9vQpNf97P3zxchwisyGCQ2k8MSZ9KwcvJ2WT3W5FUvsjFv",
  "key8": "4HJZKpnUDxW5DpzeLjVAhY69CXyV8sTCrvjkiEAY8N8UPawNekucMusXDtjGauDaikub19AJtkYZsg4niQs9LDGm",
  "key9": "f3spo8uBjXvi26b94U2vxiTtBkzttrgJ9sS3s8groS5L9ezQVPjAky3DBni4XPq6bjmW4NKdbUMmdT9aFix2Ctm",
  "key10": "3vFPb8yXb4yHBf8EzDxa1eaW7gkoK43zSJGXJGWvFgyoa8nSb8wzrtr3SmUCsg8nrBeM3BeMQB62iu9QBenajLvM",
  "key11": "2fLTYDLbs6Z43gRxnw5KfcLeNyqFfmsm9HgQAW9VhaRiJRPVgfGseF4MzckKTFdjeWMVyfLDMbsJR4oxUiibAufC",
  "key12": "3ZvQgbw4Hz6UxXXDWSML91zuVRcwHGnGv4yZ74iuvB2JvLBrzQTSBg927fdnwUeCQFGAt1N6ZX3oNpfGrzCpypMq",
  "key13": "5eKjXy3uXRxBp4nqKq5vXYyLgrxUi4GDhvG1Vyqxc6ukkbBK2dpzbSV9D2UtdcvaWbZZtEAjs1wsmqaU5FAwX3N4",
  "key14": "55NZBoFSbGJjetyhV8prP4HLrWJLCjbr9CWAk6krA7xNLAaW15Ae9k7Ns5MjGs44y6Tm4VazywuJ8EZjSDyvK4Aw",
  "key15": "579ho4eKm3Bduc3XVPD9qSWWp6ZRW7qiDtFQqoqSLa3JjuFXkXgeKxUZTqFHUJSbfLhftG11CCBn4WLxD5Zx1JS1",
  "key16": "2t6teWF89JQaAhqNQS1feGahXrMC72n9c8kWcXyAZSQ5JsYWUeEYWdr8wZcPKvjp183mdthJNMV7RAhuokhn9yss",
  "key17": "4k6idcPFGLKMUdxVD92EzckRLL2A2jCPRaeptzej8b9xhcezQaCBETBkimjAArGDAPxofFaGL8ohQXLxv3deAYYG",
  "key18": "4VZkbDHM8DpVYwrtzecu4EfdKXtLbhwQyLfPZ22bPwLzHkPP1m7fHgY2Hsjdr6ZsvQMq5bn2uSW9VmvutxHiE1Lf",
  "key19": "2HbEd7vzmBPcqtS4JKF5cpXqZDf5V3uCpY3m9b3UbcN8HRf9kEwXu61H76zDCtqnWvmHxwF3R1eYSxUvgnwpHgTM",
  "key20": "5NXYhnZUG54VybGETLAw4Xne5mNH3CPEXXpw83i3XKWvoEQHzikeqdSWBYZcZ2XfMRcMUi5wHTkHqSbQify7Vf55",
  "key21": "4gXp9GWYsfiuQpKBPR1LxKtunsn2w8zEa7iGNApJcqPDzJCbPwv8PHPKBVG2T5Psfp87yVawjp528gScQjGHRf5j",
  "key22": "3SGnB23UoshziDpvSn42pVDfqwVExLbQKz2edGg53JaA6htqTnT5Xw8P6G9ZE6iuqqykAEUb11naFtHWKSBMgLpX",
  "key23": "58edwDKReEE1rCpTfTpn7xS6ob7Brmqj1TYXALN96hamLNsEySEjY818nnuPcebTVGbugHAAKkLvEVLGSBBeQpKW",
  "key24": "4xuCKoySTczEia3Ywj6mnWeMAocTfiA71vbGZDmq45hmCmUCKq8Lxpsc3TQTNfroNwJ2LJR8WLyZYDEZWb26hewg"
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
