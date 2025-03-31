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
    "2cjsLAuo8vz7Vfe3cWmZ5iHgUBbETjidFiW5eDVPcXWDanzaFLNWNyZrBsanVNQteZeQAoWmSVqkUMYoJC2Wnm1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wycjdeTSkEmpwRSfP3iMSAoqFbcF56JiDpfMJrd9DheLfAoerDy1BBC9jygH955iN5E594H5QuJNVcAM8mB5Z9P",
  "key1": "KXt3JdqJqJ5BEWsifaP1cFCWM3qfpH5fVpDdMxBavvTTsn1m5nTCReBURF2Rs2yMFrqHBTqcjfnC5NV5mkNTt39",
  "key2": "5BeNkxgYCgr4pgr1TVDeBD37XL8bqeqW5FHT4rsUBqxA5bojtQn2zLFWBfmwANNac5pXQDsm1byHqXo3W5owjV5k",
  "key3": "2qvbTmmD7L6vySH2yPmjrRicGMKZP3GqjXwA5U2DoGq5bY3sawS4W9UAJwvwamQWWJx7mJ6YTPc1H61qnR27YWMs",
  "key4": "5KnK2g5XwxUGra2YFaNL8HP76JfiFjW9smLLZ978ADbNz1ZNqehedr6z5j2paYgE7UWPx4FmoZfAgjK1yFx97qMo",
  "key5": "3AmW6DZTfXrCA6DQe8CVL6ouRazxUMsjw22251P2GZks5F8xKexAxCCZoSi8tmcfy394vRHJz7vUac9VCpMH2RnE",
  "key6": "32yFboEYX6EPMwkqKCdJWxcNW52U4XaD51wV6Y3ZVwUiggpAKhFc2Sm7tB6AE2vv3jNRHJdSWsbCCW6SUCFakQ2u",
  "key7": "3PGrArZMe9xkEtvkfa9goaGunscugZm9RVENYDhDLxbZ87j7rmvmB8oHt5aizTVzCF5RiBEJp7dY8JeDETsA7J5L",
  "key8": "GcX2bhjARZFppfnqF5k1hfUEeTEJGkB8NfiPN5HCAMSyrb4FwQ5iU1QZKtxamysQSsuVR8maYJ3MYPFY796zeqF",
  "key9": "2CmuMcYQWPbx7Qv3ufNFdXYgjyuRrcGN1g8TgiJuewkduRYn43vrdkowrPkCFws7itCNVdqRx9kXEvSYSjoC4s5z",
  "key10": "zDFL9m2Ahr5WwsMnCxdZRjxokdt1PixnfyGMKHKW4V4UCLr3x91qKujBAHypQkWFwErpg4mVVEVD7m3K9RTYAPX",
  "key11": "5V2CZJYyrYhiiRJK3oEpabp7gjWgwyMDyBTtN94nhLgjdjNubYE6MqvY7Ez7jdmc784NPmyDzcTDYHzQHbZUtRyh",
  "key12": "3UQbYEVL4b2vjLZjxu5QHwhTNpv2J3WsHUd3zdoGmy6fALEFdjrZNzLsxfm6yaU5DZcjWu5sKDhTzYqtEHUpZrSz",
  "key13": "5ZBDGv6xn6VeNUnnyMFLhcF7htE4pcMitBagmzRBjasU5Pfda8swfAVbatzB1qQjeNdYz6Dom2LMS8FAnz1VTLRR",
  "key14": "3uxhg6Cz9bo5kSKr1rkKLhdpX5mgkDiKzvJogBi61SiG67Ty4TLJn3uvjm1ofXzvghA3bbyxra5uXdZgURffLUhD",
  "key15": "3VhwJXwd31azmr85mLk4ssp2jYYbWJLw9grCFYjx1VCSCCfsyftCg2kM4bvwoQU5nZfSmTg9c98S5tyHiNqgyXDD",
  "key16": "4ojo8yVWkFScJ24VK23eKg5dMrPupyCYjMHs92fhiFQ6CZ5D9FHTFP3kU5ut4ytJYHh5ETtmRH3erUBrKGiTTirg",
  "key17": "4SGb4hq1ok9YdAaYiJnickwEcggaYgMyTb6gLyupAkMdKpszwn4ENgSSDEXUHQx2xx4qXgvoWbhryExZtbJHno7a",
  "key18": "4PPNfYtgEopDpZhDbHHMSx4CZEUdEDMRk21FhdqSy6h6SP2t4rppZDR8KhduoH1KbNk453c1xHK1c1Yuva9VW6V",
  "key19": "2mj9xuZWSbJmPNXsxBd5gaFjJtagNcKupfUPZcBB8kRksvDsQvaCPM5AezwuPi6cqd6dzqh1vnUKgyZZ27gzCKe6",
  "key20": "2JXyJSnFaPF32AH2KSxTvTWnLRy8pcxcY9Tcik5hit51rDi5smzQzvbtZ5GNg7ErUY5SiECZmx3J4TDKQ8ZGhMib",
  "key21": "5LKCziom4R88zU7f3BksTqAMLJHGiZDdMwCjPyCe8r4HHydE2b23HYHciZtpY3GScEt9UXwgELbo9bAmTd94NDH6",
  "key22": "uNTxPEonRrZYiajCj1pTH4T8vJs3HKqash2R2M2NBhwnN4iw7HsAi7JDGHLV4RVMd8zT4C7eRPtTNuGDpJFkhGA",
  "key23": "3oEx8xTrx3jxnBtSW2KNHVUrrWgkPzgnQcQYc2aYS5tPpmx35qNJs3F2niGNMVwc3A1aQBApURrYefppJ4TGByx6",
  "key24": "3WoqKDiopUtQ9dLfp1YLmgKSowdvDVQjCqpCDkKTr2L7xSK5rV12iNTuntMFu5cNYJuUD3dke1KUQMUsqr7akDVi",
  "key25": "25ykDJw1iYqPU7bTtiFea7Hw9DzeNb3kJSXyPRXjsVrDP5YSA1MhajQaHEojszf6eDrB28UtbpgNokrzfq3WZQQj",
  "key26": "5EF2MYWtjKmpRhABjpcThiaFvaTYQDvUvEdjAYsQeVSn632oPuVPcKq9fN2zgKKcHhSPedJBWsiauTLNAt1VfLva",
  "key27": "3e85qXnJDPxqt65mVs34Kh99gCAbSo8JuzVoSyp8cCvcDz72VFaWcPxnS6yHAC2Yuk5dCJAnY6A7JFcp9K9CUzof",
  "key28": "EjuKkc4AAa4fRzoNYibhRYd62z5M73N7aMo3E6yowcbDjK75kJWTdKft1g6GQAmobE6Kv2EQmKyBU7me4BEbDuM"
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
