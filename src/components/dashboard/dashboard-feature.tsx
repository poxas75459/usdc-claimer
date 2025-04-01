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
    "BCW3VktJsJA9GQt9XaL7451uZTqqhJjeyyK1iZUMy7DBS8NBCpMDijRqWJMeMem6WYd9xVMdGN7V2GwBvJ9y32b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8C8wpNiwjQadT557iz3aQjqMkgitiPUHQcVaVkuChPLSYc8SatudGxiYgHUpfDTL8hhbe5FPqqnhPdGiCHqbG9",
  "key1": "57C5615EFnEDnQeAQYLtQFHuQMSTFLjgBoHGiR7PCRRNe9zhhSWfrLxyWLUX9VkbBGtPD4osQCrKDGFzJvXEa9QR",
  "key2": "67FT8C4YMYBuUtfBGyQRk3sLgQ2iUyR3GXY21oZfTBAjbwv7ErAPisZBBxTfDCNMMbz6h8TokHCKc7sao5sbAvDx",
  "key3": "4xjKEytLg8zb4vT6C2HnnadWwYhG6xRmefReaue9ZssBJhTiKszrrsnD9d72bPMWRpr4gCWC5WbQCzCjo93YgQHD",
  "key4": "28VoP2YHXjt24WfGCHVGJ6UMJNe3ko564GdXemzqjbxYnPBri2yNroGDjVWC1GezTfa7ZDRM1BiL5rUfSFQYPVYC",
  "key5": "4SoUJYhBdJAf9XPwzd51bDDC2gsSRtnKU2sXsG7ytwwiCR5RVBf3D2trotpdB4VmmsYwg9TNLeeEfdeySJMwKPrU",
  "key6": "5ubmCHU44bqcYPGXbnNuDzEi3B3ntLD6LztMpyVZ9WwHqP62ctufRHup5hw4v9rGU42yYtRVa2DkXJrr3syXkVcu",
  "key7": "5o8x775VwNi6vmidfbhw5Tmw8CVhWiqNP37kTdPNdXkZrkAuNjFqhSxZ5TUSUfRZCzuNantQhkhdT4vYEUGVrAS4",
  "key8": "UDdMGqbboGsxzyLEwbMoqqhXZ3SNXkyRangRcB1kBneSt4aQpuFJQkUh5KicnBWBdXCLR8PEjM3eVpzjY6kw9MP",
  "key9": "uymtUzZXjfPrQ7DtE5qjTyqmUrikBiidpjhWBkEpK4xY6ETsLPeAJqZY5mJNkEfWwLtJy76CorF7A78rCnMQz3h",
  "key10": "4xNbSNWiVRy8tynGkV3PCkjrZBUjnz12mBFMsv3T9yj1egdFVKStXo3LjE54jH4kXngVfsMreVyN4mf1K6rzpcgw",
  "key11": "63XJrFB4DPJPUNhrQy6p7a7r7fsrJzsKELxr2gGD3wPkf4eRM1ioLQrpa17udDUkUhNrcDZU98hePov9Fpy7mmbC",
  "key12": "5Qp6D5zrvgj83kskGjevBPLF8wNZJw5to3ZR6JkHsQ9xiu8eyVdgoX8D8QG6Y4xXYE4MK2cDhp6Rw1G93iyg2UyX",
  "key13": "4yX6pHCndQjVvrhGU6NoHmm4ht4hV8e2ZivTJvsM2zZhwLqdKrJd6EDnQfPDHFBRcfB1dNpqqMMtrhtxJj7borgb",
  "key14": "4sJban15gvaqgHwgUmX7t14PzXP8VpCJMrqt6ujVGq4ujuWLYnH9pdaVxdk6NFssGvaMPaeECfSLCX6fpMkMZ6N8",
  "key15": "3CuEF88qUEpn2ym6mcEZm62irNRRynYiAeubNsUCmjuyqmdMpGEhY8EkwyS5k9XLWi4oTK6KX28kHeu4ChfgEpRi",
  "key16": "4WnE6hXxmi4cidBr22G3ZVibTW4JRA9LFs8YtKGFqxYYYXuDgoM98bEucEWgw1jKWuNDoyBzREzN416YhLmC1iYZ",
  "key17": "4dCRTCNmtxwYJrRqUME5XWMNJEwVoiNtv5etEk9QgUqEjPkTw7PjcYUDA4Am2Cp1BatcTwNS6bCGyQjyYhAtqGqn",
  "key18": "TKCKbngHrQUifBjTBUsekdeYjpXSbLP2vuknUiDK9Yd33GH7PPQb6hxR4ZwDFNeytAUvTgohewcAtC7nbsUGje8",
  "key19": "48WYjpei1SWDjfQg5mxj1Cbei5Rt14MRXZkpRR9VQNxWFLCLu3mrd9wGdxWR9Ex8XoTjfGQSayd2EFV8W89k4mFP",
  "key20": "47zyYg9KKwwQ77m3fAXJTy1XRF1L9Bs4rU5zadSQvUZ6DV5sFhPLjrsGdPN2rnBAFWov5zJcYYNQ7y5n9Hxi3Qw1",
  "key21": "44PL1eB7pWxsLUXnsi11Eimh6c8ENcZg19EwamjudGm8fKsUdUmdVgd6f2SsyU5DRgB7WNgdwwfzbtH5E1Nwiy1e",
  "key22": "3aphagH263ruXqTUYeARfavRP5qu43Yv5Lz7pmYuYHYShA528dpqhd9LW9bsYcSbPrBBbEJ7u9PFj79Avo43mwBf",
  "key23": "591oBMGZoEv8z73EZv1iKtXaQcPFj5gqaSe4imGBE3PsU45kzJuy6twpd1RyoDU7K6kDVFqjq1xSZjJvavQxLEgB",
  "key24": "4EVJRaqfnLqbJQ5zXjyDBvAuZpW73jHqU1AfNWyvpGNuaCz2LrUFHPG1uTVcZFp4BR7khyMrMy717ZDh3vWWckQy",
  "key25": "66d6gUkSRC8VDKmRzmQxHCvXuGkFB2hHdRMZtrh4JYEcok8GoWeEeh6rKWjy8mgPff2cdNLu2w4GKHZ2L5RVxAP3",
  "key26": "2WM6pbDvGu7ESEg5K53Z9xE56HzwTykhL2j7bzYeCP5GyMFBbHgmdXZAVTUu27eQmR3cyHKvkZa2iTRBeeYZPpjX",
  "key27": "4GXQRbCHZEDgSKViVVmuaZa5FCQ915AmuXY1dVaxfRtFE1dP9tocJjJNbnTNMjzr8uH1vAsaPiZ5UkuyT57LyJfV",
  "key28": "21UMhb1TZPjucn28wcM2hHD5bdnzzg8TLsukKBUDzfmwgHGkkYDWb7vBVmJ9w2zVY8nCov4FHJa39qmSjARWVBSW",
  "key29": "2VQpv3fZKvrnVs2A2SXeaEznHMYHYLLpUNUFmf9XmKmK5dCgMs533NRZDTjdxKVPot25Lb6m4kyEGt3TYxxR57xU"
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
