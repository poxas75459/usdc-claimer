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
    "4HxQqaYuowWxbcnaWvcHpsvUzJibiffpHZeTdXYS8a7EiLHEaFEszsfverGGsDTD2erv4veVqRx8uUYxohZwoQAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVeTJmmmjRDab6mCjSoie75jmYoENVn77uAP8SqwGzF3McwmdM5dDFPktydyrrLEZp1ynJGhAHua354MdVTzqYw",
  "key1": "5JEv7XGqgNtQd3FkGey7x2gc9KtSqeeoQxEWy86y3aAZ59VF5EETUfvqakCuwyAX4WUWZKZWh5Mam3zRvien3U8Y",
  "key2": "5fTLwCcAZ8CyHZDj3CZqomFsmrT2iA1kcBRBcxWH1odNJoRoWaBypcGQ88wCLSHK1onLbPaX39s8PGCgjGkkMft1",
  "key3": "3dSdpeWVaSTQRBXRMatGYmQTFYxb8WD7Dmu1G3YNFpyzU4atRtKtgSSK4dF4cHXyPjxCwu8J2gS5TqMzwxPraZkH",
  "key4": "32vr6MRV8hFJ66U8ewNeV1RyrjB62g7M6FYY1VffcyQShvSNKSkoo5SmCMycVF578Exg66giW2cZamGGJN5yoYff",
  "key5": "S9XaQkCY6AdgYvCs2r6jwTUbE1jbNGYXonxRQNRmsNtTZNr5vRnU3D5U83Uh4qA8jWiTCEczrDKUyyDuGB9dTZF",
  "key6": "2BzsctVv8yNRSCmSNvo5QvyTctxDC8wtZUs76PWZhhc3Fdubq4kXhaAxmn2jRYiSf9HV9azXFTkHuaoeviEgPFyz",
  "key7": "4ZmzuKxz41748KQ2T73KrGqRuLyRfWpKS3iy5fquibBrmYbvomWBjJypgi7gH8drbyF3ChJupeF7eQpK9iz4Pg78",
  "key8": "5s8dY8cK17Xhs5w1DvMPEuGQtFQ57q4kKJUpZfcusp5v7C2kUoEdACZ87BeGKCHCBp6B5Vg7vTQH4r3Y4GD9osv4",
  "key9": "3ettzf5f7VE9eU5UKR7vGHz65JV9s6k4KffQcZ5WpvFMiXoqzgCN2UeFegahfGd9VhYiSsfnviPuTa3Kktg4Rqxb",
  "key10": "51oGwFUMdRc1xxt7L9sLVcstkzbM5BXQowTrrGtX9kFXb3VAWujuSepReQqhHzZUa7MgetwbMDM1feTa1kTqS6bo",
  "key11": "KbxvPVvrijSSmeqnDXRKa4JBgfdUTLzSeQ3t2kzeXkRncM8C34xffomzNbqxL2m1oQ6cPCHTWGQQPujdZtwF7AA",
  "key12": "2DEUN3B7oUMwn9u4bY7ASUzbrUKvogyLNMMHhSR4piYkZLX36DwmNTpSkX5bUizdgRThdVaqifkHY48SappPbWN3",
  "key13": "51MhMDcvme8RMz3hZtR7FxmwyJJB5aFQG8TAZPdhwA5ymV1712bu7d9n5xMFUSJLvXMe7j3W3Y8tuqJFKxn5Wh8R",
  "key14": "2r79NjENvpXV8AUbub4QEnWjr35oeM4cit9691vD7XZAmC51vGyAa96WnmCCPGZdaLouSfjGhfbTo1SGZS9j8tUw",
  "key15": "4UxGNSS9ZtBxLfTPRRPfMZvHEBRhnwuRVw8gAyVS6B3uvHNcaTDd5XrnHf7UiHWutrSvi1DCewKezkEGCY6UeFVN",
  "key16": "4LQzuH5UBEt9iEEwpfWTCkmmx9HGeKHwsVgfRDqg36iiXaGDSHTawhakCPDzJUYphbLV2QwqCubxh2EMW6zdSvEb",
  "key17": "64EDjz9oYDy9ZjEeoBs7JZVuR9NcjmtDtnDXrviApbwu8KG7hWYf2CotnJYkorzeFBYZimiLMpBq1wXZ8yNzoUEb",
  "key18": "3PLvjiTsKvNJsDotnUeLhdPnA9P783Z7kMvNKTA8d8ud1qGJtLjdyxapV8trATmFULpuNeRpukwiZFxbzQ4FbWQh",
  "key19": "2qZfSVE8cWypYg4xLpQxxyBgSezC5j9QZwfdcqzsNXEDcTUQXtzXYCwL3G6va9tgJFjGCmofq7cwQqocKTNnjBPR",
  "key20": "2DoZztv68RHZHQdzComRHu4QVS8shBuLfvXJm3oQZGMKT6hnPNXHyhek4BtFaNN7cov97SgMTcc7Mx1F2kRnVecA",
  "key21": "4Siovt6TYYDNpe7Mo5Y5uGU88C5JQKxeHCoCE9th4qde6D7gfDMmFxVBQZi8AS6gdoBb3aVCkjRFmUsWqid1THsi",
  "key22": "YVoWqCME8MrdsF35eBS1HivUkQ5pqMCkrwuSwGqCBSZufzjXxAiNA8z1LYJd9ek6RNGaX77yWnTQqQhdrzXY1Gf",
  "key23": "5wYpZptwLggwr1ipShBnBFSrUz7zgoyDHCTeaJsLBEfDyzRh8S4LdNHkzJU8pr8cfs7GQjicmpCB5tRwUiUUzDij",
  "key24": "2iJHXysz1WLuTZWsRst3hmXGSjntqLhXTa8WYcgz19pFyYF4T4ntB9FVcPtuX3fPp5NJoeqBzUZXeZkXesQi3bwm",
  "key25": "21qvdmMKrwFWZuAY1NVu5hyBsbRM4crev4W6wf53v3rWSTzPmvzMko2WJChb2F9dJ5yaZng6tZptu4vtoweyrPjN",
  "key26": "ALqe1JmJiYKRgWBCLf1jSgJ6xpSqHR3Sjdm6cBqRcFCSURS9d5GqaHLWQ6HkUorQW9sR5H8MWzqy2kU4rMPmbwd",
  "key27": "4pcqjbWFx1F3yx3hck8hJFo1za6bteAf9ENdcMShpt8sivvx9iyo3FSqjhAq5BaH8XvDZ7xH9t8oEAb8KQhwSKpV",
  "key28": "3m9cPoMPV9mSFy34DAmNaVUDoALLfSu4rMma1j4gmQHVW2zi71vWK7tApBz1TyQAwwNZ4CmCzKrxwFTWzRp9edZL",
  "key29": "26G5H13W8DMsty4rLcw3AKMfxYFVtpB6qXyyQtDZqNVyqAX3oqpQ4HnRPXrM4G2BPb5ZSDohinv8qXiKfyG3DAc8",
  "key30": "2czpnMJzEjrVMqNMohS7gUyMjr6dtFMHcYjBKZer5BuGSJZQjoZfLpmGxEQDHQttoraknmRKs47TtswcxjnDpGsT",
  "key31": "3ynFfN5njHrULAzwBnDp8829yxa5xuoWbwBJY7jUW3zp2g1fuZPqg5AJnpHEGpME1ATdcPhr5vEtgpjszPwbED3L",
  "key32": "2nwbXr647QZSroVCHvemAabhn9uXGXJLogVfoZGaUrYUE4t36E36cguZV4E3aLtbr5wEtJjexvLAjVApaaWSY3WZ",
  "key33": "3Dg3h8hFpS3fg1uspEKJ9bDyHLmzPgTCKmw7bRgoiUT2Pe53kuYvwRuGJXA6rGAF8joXesYSq43YUvMgtVGbnQS9",
  "key34": "4DiTmPaG3hhiEbhhAFk9RFWuaKMuuZEixv55ZqaMssySANLheFNUgaaL75gFqbGgdoRPTpEN2QEBuvuU9cAGuLC1",
  "key35": "5aAz3Aio3p1an1xxue4n8fGroh9D9g9irM1rJa8VpfMEzou8oMHzGqJ9YQzDqJf1CA32UKSnSbgxtAtVEGrpYMrW",
  "key36": "5fgHhFw3gGoQdQ56yHxg7ddfiMhxU3EzrkRNLabCsmUFB3QEG6BRpyaApkNZ1t7nu2rBBkENgvtkgAcpkLpCYXT6"
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
