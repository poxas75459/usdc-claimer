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
    "Kyz6dVsPGaFuUBSVkZ7bMbGnnSygPMacywvyh3muCfx2R2ogKEJEwweGDyyq3MFjVWDHupwjJWhVRJtBUDNPebw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GdQY7xgyfPorjFbcujgpYKKWdKJBBnarorzWsovYyRMnz2LTbddbcA27aAjqZ9SbimgzE8NVPjphTQCXxDhRGYw",
  "key1": "4FQvZ8EVVFoydpAuTigersatRipFG2qYYGBVvjeX2wZ3dqbNsMqLxKbhAzjgpHjjrnvmGJJ65U9X2t7DhgsT2xJN",
  "key2": "TTNzbLWSPkqqunT5gibnFrFwqjgLex7BiMZFqGkjdmuDmajiiMtHG2b7SuJPNfhCRVK2h8unyaN3vjxDfa9XWVd",
  "key3": "21mR8TiJZQgKoTeGtUXhgoQkW6HHPFJUCjAJZPXqiUi8Wp67xGqC5hdAvdaqY55z8RhF6B1nZ2RmdYgejJLgynsb",
  "key4": "65T75PzAFZMJeXgGcHmSxNkwx12SHC6wEBQ2Lzg4wjtnnqRnQQgLDweqLsFVkPpRoUAEokSvTGNsYunNLWcDFF8B",
  "key5": "2GbPR9d4va3reQQwvtbh3n2RFvRgYKF2ieYoSBWkFKTBi3HnhkzDPQ8zBtXQAEoX9DKK2GZY56HH7YtQ2DnDZ6Z2",
  "key6": "h7zTozWKNwgLCyyhExyYJHyPV1AtcMCGySp6mEQnkfbTJKXgLeNJ6qYgEHiZX1ESBBV3obAg2q6xdpj7fL5CmKN",
  "key7": "5qwV2ysD5fXmPbEM3RJHQrQ5PSZ9w6Xcvx9McRXHbKtbUwsMBqxTqYusdt9hAdbbyEKgfnExwh16kswLJjbDrMGW",
  "key8": "mXcTHhpEkCEaHZsQui98qkJZ37pJrt46qauQDuCpb7fAPQsg3nmttJFfenRiHsVrpwRcXotxnA1toR1aYKri8Wd",
  "key9": "AnbPVuVmMt5u8NEALEP93AacPi9mu5VBiPa9iu3SwUbDebWDBppLd5mNdtVBEUX4C5fCCLSsiZ6E7ofUGiRCTrJ",
  "key10": "2zvnRWRhpg2iakKMzjCpBFeUL5xbDn2CvcfWFLRLcw9texubfsrPw3b3VE34h2ZpCvJzsMGrujYuKtGdLAQL38oy",
  "key11": "hgu5B6tF5Pfr3eou2usFZhpjBmdv17S4eo5yowpSfgkFg67KqPaSsUfzAQwQApEgFFdoWo5G3KuW2rR1FZhnQj7",
  "key12": "Dpf6uxx1SUqj4TDc3nG2TpBr9htQ9uKT4PNfMkovL6iYTV2rYEG8PX8nmNNKgp79y3rDDCaymHvLVSovGy3ZvoZ",
  "key13": "3LFTaBQk4k82pGW5CjNkH1Ct4G6ZvGaHZePnYZGXpjAjExQBUeiK5M6ucXu6F5kw2Cr1opfjDfCNy25WLpRUnZAy",
  "key14": "22KVJQj1pAF8CYAaCNrtQsEcDGPRU32GNUsyfZYzY12Uq3fK4BtbKNWKKNkVzWConvJetRfbm1ofwToZU2ckYP7F",
  "key15": "5qLzhLKxK7NYPxEsbcZAMX12pAbxhb6TaVC9XB6uAzKHDfvcY1mSE694NbgRgoN4S9sxmPxoHgrDnfeP2XoNqa6D",
  "key16": "4ucgy3JqC8xv3spd3qVfBSzXyFJT3XDktv8mhNPcvNq55p56mfkU99NBpMrmJdbCBFE8UqfsZsRtZdM7xoHR5DWa",
  "key17": "3zvVz7eBHydeBTMrpjyC8mQjNUo6qPR2j7SNSkBjEkhJXPE7TpCwjF45bYBgh56NBXbmYX6DnAmYqWsgKfVZzYG8",
  "key18": "61hzXPgVxs8SXmszpURZZ5Zn4k8TLrRKdqdBZrbif15wmoys8g2jDjBConshghcCL8Wo8dhWVt7bCHgp2TCz5Wdc",
  "key19": "5eH4zSFPrUxrpT6AaMRDPMnW2QAawzSsMYYcRXA4MBwqwB5VbjJ1GTZcQr6vz33xWpaX2wDP3DwmK4SV4Vg7uM4u",
  "key20": "4wtY13JNf4cynBezZyH3P5yu6Bwe1Ykgmrq5vHpXmonHDccd7V4y4vTp5EAVdfUyNRB9Sz66EjGbYiJguuBGTLV2",
  "key21": "s78JQGmtkCpogbpeLnoQ5XydyH9hSjoqY6A3zb3hmd1cMxyao6QAPCFZgx2efYbVZyB1CrbF8ks34yV7gnBKEFn",
  "key22": "5whfXJvH41ySuP3G4721Nq3hjaAqeiVhcvCMMY4YBcfyk2iFP2gDgtgqoZvePw75cVMWUgV2My7dYxSJGKEGLEJS",
  "key23": "31BiyZmMjvtCyUTV9fMnTc1fdM9Hyfr2VtuV128zDqChzSBsQgccxEBzvWkqh9T8KfP1Yqo96XbCwwJy7eJPy1zt",
  "key24": "3Vxt6SVMptA1TNcm3gQjYqDYXqghMajmmM55yvnvpuf79Udq4EMjoAW9mjEnhT6zL5kHHo1RarC2kAzUDDUgXbce",
  "key25": "5tFLTQGtT7wSNQFeiJDRPjLc85WQ7kG9np6g9CHenPJL2DNufh9LnSvy94d4ojgZpHTYx9iQbf6SoVgxBKkJjzx7",
  "key26": "2hAVKBwrHLvMMT1168oLC6wUFz4LJ2JD2manEsn1Eo7JHkxWhq8ipyW2nr5hsmL4WGCvsDbV8HBWFGc9qitK6vTx",
  "key27": "51xG5hhCeQv4AoXki3nejDTuKD2CKXQhxVWYVDPu3Rsdr1VbpvJNBxdmDRwE7m85GHoaDp5NaBAi6ox3hTWVRTEg",
  "key28": "2sLCoDF8ayLtJ89CWi8mE1yjM8o3CK64gfLFCGsNzk6pRYNH7qX9vwoyNhQ9W3mxWm7XgSUidbtHHj8FC27VNkUr",
  "key29": "3cfFbNpLQjXmU7TaJXENf8DLgQTNF9ve7iSjc5UxUjtsk8ng3cRhDiwLtQE3mSseywefKWL15u8SHvUzikVoab7P",
  "key30": "5kmhG6zWMsNVqYY5TN37nmSht1wTvtnVejYPErh5LfBESEADfSYPZzuqpZ8cC3MC2HL2jW8tRahDe5T2Tw4RG1fb",
  "key31": "Wpqmf4dcc8NoH1VTJJUzGvErjK8dAaJ6LvNMh9VrsKm1TiL4qwoT5UNVaU5b46mjDuaLkdsdqLFGsEsoevbRFCQ",
  "key32": "3WETUY36pCVTpbdtPBSEah7Cq2vHS1SBrpDbK1X9RxqFZAz98YQG7UvXCEMooH6MdWRFLtdgAAYEDLtEj8ryPAUy",
  "key33": "3BktfrhkE7pzEZqd6ea2hCb6cVwNu3GrgczNy8XF5WUfNCDxsuoKTJLgmEofwWVzDhsiPymt9Buv4LJmsDPCVkgK",
  "key34": "dVTAmFjsBFXVx7VPnXG9t8zg7tJUEHREg8m6YXXeYVPyQtgaNLaGV3V19jikYdhwrhzGPKZbvppuwMpXvMLHPRy",
  "key35": "xJDfdrvM6b5nSRZdUuvkaxGi3kUoBTwPkskHD64LGGcCMP6SbJhKAe2SsSe4YJkyeqJ4qK5EFAWizwJjmp5N92m",
  "key36": "kbEcxAxvC57qfTe2U2SDRBUo62wT3XxJhvkzgu49CmcaSSeHV1VhJqg8nvL5CjemqfWduW6fVXsaDxEjcu6A7qb",
  "key37": "3iFuFXDr8g7wNPF82dMbygY5BWgE82cFxVQ5VfMZcc2gVqYP9dHUh1aQ3jqQm5ReJKPG58M7NDvdLdN2n3EeZWfq",
  "key38": "2b968t6sUf34iv5DszPaTVAX1o1NyX9pQbUhM6oLAtEjB9g4zyt9JZ4g751CdAE7XwT9BxJZjuoxLYdfYmjKnPV2"
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
