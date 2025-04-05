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
    "4UN5AzNW6ofTiFqo8AqFeFuqhViybBQLomyoM3TwYqYvnkS5KhMDkJafPfY52FpQSJJa2vBC7owDT758LQoG58YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxmaVcGWGs8CF4sCpyXmCAAaDZSp4AVnqmQeRNq5QepUyceupc7Xv6FDqjPLvUUYMziJpmbWxVNSEY9jWoprFHd",
  "key1": "635tFFRXDkD9ZwDqUK4crTpHGS638z2MfEUBEinshYPPxobhgysQaGs1eYPPFbC4QGiZ7EpDNiEUcXD5LFKZZFqk",
  "key2": "Hj7FoNtP2XYWsfU6w2DUDz9yMeExXuxbQroW8xKg9tQR8H1wpfAYhEwTaBunR1w1Qh6YcULFMbd8gwENbqqBiWz",
  "key3": "5DdLFaaozrnJ692H7RnS8TqA9QmS5xYmgk8TnemVBfe1pWN3uSjDmTyrWBKrPrYgmwsmff76LtRsgF1jZyino23X",
  "key4": "5uUTEBLFCqm6d4HKxCYhY59sS9scNNucN26c1CiHH9ZSfzReoJoevEVSHzsKGe8JQFoooMwDHw337W9SDfY89UHP",
  "key5": "ZcmoSvuN8jAPnJQyVFG2jwPaACHn2jTbfiJicMwZt5vQbGBBLuiUGpVQcRCBZ9yD7Ukn9ZkA6AHrstqsqcXFLVF",
  "key6": "3DcBCsEv5FNrCupoxfmBKjSbFUwEDoj6WRP9JXHDsPch7RXS81wkAqgqE8ejJtPTnyQW9Hkh3UbHGnSd8g81qZYn",
  "key7": "2JAn4ARYRHUMKKTvjKUQUU2gmsh5mXt3ErzJFqDPghyL9Nv37rz26hwsiReoXUBGeiPmdBBn8ugD8ZSefvAUPcJs",
  "key8": "34ZJCEHQcBj4CMNRTqh74M7BLS18yWPG1LzvruhpxvSHnmkMEjmwmW7VdhD52jqcfaUTL2m63kYsuXYvxjCqYpGu",
  "key9": "3ivrWe5wXYLPhhExwMeqsjHK47isDKnnNvPigPdCbvpHHP1x7zzcPndFoYxsK2XNvR8cSZXoqW74pHcJ7WkGEeSf",
  "key10": "5KUpymY6SvtuxL2YwLYNU1ZCjRHZuzUxUXrPdDFKiVMKEu8h7RXosV11yhgf7JuuJ2Tc3yBSF8T1Sxub8WAtZ8HV",
  "key11": "43oQZxGjx6ZJyVAgugXoAi5iJuVfgtSBzz5kr4SMadJdoW2JKXtA63VXUnqK9X3WLgfiHpjoqJJo5AnFzzvNmYkA",
  "key12": "2seJ2DvcWr3E8VoZC6TGvQCokjDf3BrbMnFFFY24P9W4uanL4mN2CkUmXQZ92XcS4xoE8VhpdAeyXTj7fqHs1rQe",
  "key13": "54ayar5FD2guoHyt4UCRrnWZMEEcKw1r1mrkhqVDvRtfokCgJGNJ5yDKsXA4xjvcafwwcQopjzW39LJ3HHYhmfv1",
  "key14": "3M9uaCAZwWDb53vMyW57eybpDscYPUdbvH6ALFQvpMQ5eKEN5FdjSoxyZmhg57FVZS9wrg23dgYKSGCHrxFURJTb",
  "key15": "2vNNdcMtR4CJRFiywLNiUaWPdAZDRyURcDiSKHT3YiHLwjuTMJZdQpEthS2L3VC1r6zsv4Vbv3DzFLTFfX846iM4",
  "key16": "Ar1vHBbJKoSQLLn6ns25XmcbB9VcZq1TP5zLpYZDXREEa7vexTsYPCFuLPRGKB5tGDgxRadHKsAYFb9KVFX8NVQ",
  "key17": "2Vb5BAxZm36wkqBdyu8YxiTxCDBUiUA6xaUrBFMFprHtX69hr69SZWEAekqi3F7KzmThySmSKnjXcXiAT8GEG9D3",
  "key18": "3fuZk6CummqsKwPjUraopzTQ7QN6EJ7NeFE5Y5JE6KP7w9pociCPMu1uPfv1sxtWsny4upsnjGhfM7qyFKg5WvZt",
  "key19": "xyuzfWWnDCFQrCMpKm6DdgWeGv1JpZNg4agMKrNiWFAzKmbJm7JgcdRe2cXWKTWJ2HyxSzSdLTbCmhrisC1Urfv",
  "key20": "5s4yvaY6EfpJhUFEQ9uC7ahz7E3Csxh38642fbofU9dZtcCu4o12Q5RiH6vCsJjUwuRB8aYpjhjHBjChgN2fnm1b",
  "key21": "2pnKAqV8gf1UXRksSEwFcBsngQX8pNGYvMT76uGPnHdbosZy3MpUeEvaeRTkCCnqayDFhxEjGtomucAHwcz7RvYZ",
  "key22": "4hRgBbEw8DJssJ4Nvqf1cGpVuJnFa3pZRcdd1DXmfXuDfhBeoNKyRYaFsjYtXX1tFAJ47GhVnz67sXjuUGJBuVEs",
  "key23": "3S8uqmx3o91nU3KZknYHyLTJd76LAU1GaG9b9d3B91mipRGL3J4vSHGUTXmdt6WQHzVtk9dmR5EvD3EjW1XUnXyM",
  "key24": "5XSJ3NG7DfZDsk5HpADRKqgfJuiCHrAPBNFYQKerASbHz8gXTKzC7xduU454UDcWFGvtS93uNoeia7jQYx8fjqzm",
  "key25": "5Vmi1163rbUwLZTxEFgW6XMCQMf3De5SDCzLocshSpXaFo9W3keLvCYMv4GNpRSvn82TE2B9GqeEhWgNRdEcnhe2",
  "key26": "3ongR5dBpdLqDrr9CwyJCzD11GgymTmqauYWoAupsXjV8HhzTrdCVmtKG3yARBKMKvXjE7rVjwTishsoAkV7WpmG",
  "key27": "4rce8N6nitXwNEHKkzHgqoFSKTWbSi8fLBC6ttpq6bKmCT5ZkeJmDpE3BDLWEXZMsHiMkjiVMifY85ag1VrnCm3d",
  "key28": "4nMyKTz4KkutzP3XzfGnZLh5srQBAwbZ7wzkmUY58TKTbeCNW9szwfoUUgehHwLNjqxzaFA7Ejdm8QzeckDAqxjp",
  "key29": "21PX8spmRRW4CiMUomw61ygtPfuGLPMavVXXqQsV2YZJE4itCzrYNXhAj1ETcMBmYJQLSqEYXXAQpyiG9K9NUQPx",
  "key30": "2tqtTgBvKvGDfG3crPumAHpycxa2m7MLH6xwCjJegrb7VL3mfRNKXYTmtUK9f9WczSNVTJXHvgKcF81qhmBBWCv9",
  "key31": "4xbUYia4m7sB6cVPBzsRv8E9MX7BQXi8DD2jS3NzZAptdhU8r6QmoYbpCqY5DYtTcZdNq9YUVeLxzWeybq6HeaJs",
  "key32": "4yNi6yhF8Ke7HiFg3PbwfpjsYDspyUXDWiggsKxowTQHwNEdrWVbBb5Gi4Syrv2y4EELAVXVtvx5Xso1dheGa67G",
  "key33": "4eCdnoYaJRx9GGJTMePokYeE4DhGC55wtHhya3fN9FdjsSkev3gtRkG1QNXBeiMwcbf59nvVEBb6qWNBtwA4jJsH",
  "key34": "4PJK7ne6mUGQzDKbCgofrjVj5VEE7pAWXPt2QdjvfJYAC3AvECNXBA4cBtRo3okjfSh3nPUXsYNe7oa5tUsYvRHx",
  "key35": "gRAkXYawznyzYN4f9ZqrQXExYieRx1n85nkN7pgkUaA9B2jFEwa3XzNPi6t3oxGvKKN5YbTt9si3i5XqnkwvnfT",
  "key36": "sxLk2RNhH3n1eAx94JiG5oA4daorw8Yr3z21pAoq86A5c5RKJdfk1qZPF3g1p6p66LZ8NQJyFU3KPMieDTq7nrm",
  "key37": "4b9nvFB9GsqRy2Eegyjd8dZYfZu2h8g9e2rUTjWLmhZuhEmwpiMdNEuJCCrRuyv6iyHc5nw4pxAoWr4WcqD2P2Ps",
  "key38": "3PGgnwdKqVyv5kjw6hGU5g24k2AEEaxySTRT52Cenuw37VYMxim3SQUmvZVrriUTv3wGCGSw51REpc9xYk6jPEir",
  "key39": "4Ko29wcozvCjiDaQzampr6XDge19DoWadVFpMK6GiCSBv49JtiRxm1kMd6poqm1TBdL8rcKn8excwtBG9iMe5K4G",
  "key40": "4D29MUd1Bn6skHGeMwkE3vDcRoffdQzL9JWcRU6pn8nwYobqB3pYupomZgz38PFe1HndmXzfwEA995nMsdpbD1s9"
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
