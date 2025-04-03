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
    "2N3wcdGF1HK2U8zegKQ7uCg9b95RjJFqCKzDQNBzHjJCn96DHHqi8hGKaJ3HbvyNjbBpgmwcf4KSA8KpSVmNs129"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47CBMu7gX3mRCeiWzVvP9qQCyPs5FC6ubo73FTiabvKLqmZ5WhrwKcGk276Gpi3V6KtkQhefBLipZaB3wLcc3VbQ",
  "key1": "MdhmNvu1aFhZQwGM7anfX5icBF35R6mwJwxo6LeVzfKgnN4xmonGfdknk6haeA39nb6WvpGRc8iyELXFdpNM1uo",
  "key2": "52dhykjhDP9W21SrzwRhDJy7BeWAEYGBkJwJ3PRA2o2Dt8w6d2dP8Y2eMPU365K2EHcnHNoQoWEayhZQfCwHy2cb",
  "key3": "31s84ubF1NqJVr8ebF9MPLohBFNL8fe5KPy7HYe3uZgHGPqNT2v72pvFQDmtXQFvVmEawirSVE4ya9vHviTipVUs",
  "key4": "2SoHzwADpjLBpxYy6gfddTDXUUWvAbi89ZN9ZoW4hcnR5mT2fXgRHweKn2nCZLQcsFpKXXkd3FPoLC4M9qiS6UEH",
  "key5": "5nMG5cLmyxRwDSHgzMPXWhD7yCcm6mDGJCD1UmU33jZpABfNQWSWtXq6Yw4exwJNyZPdJmA6bLvZUoBzkFFfh7ji",
  "key6": "5bBLYUpaFAWA6pFrGbVr7v37uSjBB3B6gTjJrvQshRJ6gciSRrU3HXJNVieSyBxxV6QtLACqyThgw5sGL2bozsMW",
  "key7": "2Pywt89bWAzq9XqWzFJfmnS7G6mubfTZyzaHAPcTiXxPCf8TtNC1eyexTymNPxsUSLH2DrahbRAxjwxfUyDmb9HQ",
  "key8": "4LXozvDNhPVwUrEaG1yQoWdUuNmMkDW9vZv3D7qm4KU6FcMMDv33F8Zyer4gZ5uMQU58hxL9xCT1dATVUe17QDn2",
  "key9": "2Y1366saA7JZsr8D3D3NC1Sxk9L2wVPMTKwSZpFd1yK6qwwrtmN9m9At4YsjqUYoRSp4G2uR43fPgHkqbcaHaqE9",
  "key10": "2Vj2J1toCu336KahBji6smZN5KZCALWm4R8NkzRbXoBTW9sFkmE58SxxNNh8fyRKtHtcEgCX2bGnyVDuYh386vBJ",
  "key11": "2wENJUNFzzYk8gVwNnfdD728bJpnGLwSdNbrAhG1P68pTvaHq9EpzEF22V7jKT77HARKQAaVQzU2w47BiRZ6gfy7",
  "key12": "2yj7KQXZf6EXJJPk5iNPmfGQ7Jj2qwU7t5MTJ7wB4HyUxcxokErQ4y8Dbo1EF2sQ4JjXbhaLNd9zyCJXK1GpL4mc",
  "key13": "5cWa2zKboWSQvLb3d54Jnx3TTTxjENGnNeRvYQHRPL9xG2D4tP5N19o8cWF9A1cxWo4qK8HJ9uKipiLFgMACt4g9",
  "key14": "632BtCeofEYPBL5F9UQqRCfyhewSrRbp6n4xyDtP7kv7SmMLowBP6aArmxL5BvCFXAZCzEuCTq11wvGhrqwQfWiL",
  "key15": "np41Cc7gWAjDzEY2zWA6U9FhXzEm3ASR4FawsJACVesrgfReiS2sjnKzWpWu1bYk4zqRRCNWKYVQTQf4HntwSeM",
  "key16": "2yDC6KL1717HPf8L2BLTgYct4mBWsqzxWMVcaPTmwfFxGoWqwPMGxQW6SgCXFDWEYqzkwZ1jG8ZaE8EZkJHD4iqV",
  "key17": "onMwbmvzmMxF89JoFK576moFWksg9LCBrGhBeSHQB1nHYPh4a26vhBDorZr18K2D56W3af9DPu5B2CAWrUEKLwB",
  "key18": "4VCw6KpaKJCUkfEoayhVUxc2N8zp1wZxxdvJHrdWQq2HPDN8RJ5jncFWRRa3KpbGuZZiJ6Q1qC18zDcz93zvsrXn",
  "key19": "4n2om9H5EhYp7krUC2kCxh5B347wGfozQEx6uGE5ENzmjFSDngSQt8cUmUQYVJj1CMRzZBemLjc2Q6Ps9e4pygTk",
  "key20": "4Y6Q8AB2t8EZjgDk2vUw59BqiENYyK6hz6jTEHBnDXB2drLieidWGzcQwBsXgPsP1Ec7paoaQ7PBz6aYPaV3BQ2E",
  "key21": "cPXQnpBkc5SYGgXTUjhQb5qCpUi1roCB7hbe97gDUwhtZ4MBsPsBwCzSwZNdQq1qLwuyi4CSZF3WFhYVR3nnoaG",
  "key22": "64wD1ML49fykDRBmgK4L4Hy1Pd7oLvMk9NLXAzQhT2sUmggAkau9H1sMzsidABeX6TNNneoa2kcpyJaSxj2AvzaR",
  "key23": "ErEQyeC3SwXa7kDygRuu3Uu2guVQCLxLC4MK6vz3dkcPVe66TmeALz8c571eRg1Z3KgXBsipVWLNmuYhErMAHZY",
  "key24": "5GrYZuLMTxR9gBC1p2nbmiVNiN37Rz6GiBLEi8VkUJXmEG3RyxdCQghZETovbZaxohsboijqh5RpaY7Z9Q2xRXAX",
  "key25": "4KwsF4iS52PuSP8CY46JjeHoHuysVYZT9bD2FieeRE3p5G3Xpz5aYbWB2WjQuBmx1ypFadxpSD9cFi4McoDxo8Xt",
  "key26": "spcPNj26mTSSpxcARwwbQdXL4h9YD252kJSS6p7znTZAEstvKSkQyDeRUPEzC1QrtwGa9fPxafCa9hjpAB3YVow",
  "key27": "EmsLW86mER6ySU5oWCZcwjht7AGPkNSJj3EgD17vgCRhcWzUFpBpmTjG2NwAPeupR5fPLJLYX75dXJKi8UDJST2",
  "key28": "2H26jAhHVSiaAGb7fzGbE7TFMDoE5Xj96Ze4yShtdyPVhDdWJLicMtj7RfMbfcU1QMtNZftTVsLGrsLeKyhqZtQ",
  "key29": "3k9YaBbdb5U97pgkYkFXYRgGDxjDC4dzHA42T9z9uoNoYintxG19QNBjXqKHetuBRcHb1h8KHGrf7bdiYzQFnmfJ",
  "key30": "4JjojZbHsVp8tE3p3rYeyfK8rAteoJhjCpxH1ZYr3VBp53QZtVKjgF7fudg2zzXGw6749v4H3m2Yf4df615Bn1Uo",
  "key31": "3SsSagT8YXE7FcBCHuvRyszTgDKQu5xk2dYwvAu57wrxvrCRQnQpChEW7ThnXNiu9BCZUHjWVFHPikvd2dzyZzNx",
  "key32": "3WR68RkavQ1FWHzeHZ142Rw7x324xsknB9ALjktJuygJuWtFkkMG8Aafg2AWWaDwx4mwEfiwqRBvzKwF3U2LcLyf",
  "key33": "2oG73upyRjV6x7T3Zw6AqQyk66mESeMMgcSyzcB9GrGUmj2c512h4i5Xxddn6KPYHcv8ocdHeKgmsLkDVZLQTrNK"
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
