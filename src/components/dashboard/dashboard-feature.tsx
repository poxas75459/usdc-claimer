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
    "3JwxKdFVNPf6BPHSE2r8rcgFjHkcsc5paJZCoxX3yfWJA9R1mDVvj7sQt5EyC21rT6kkvnECcLm8JMVThpb5WdHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VypcNBowGhJ1S84eeDmxbh961YWZARCZrzaQs28UJgSXs7X9Aq2vsfciym5NKPcu1kyEvUhypV86Jk4aef1be15",
  "key1": "2KQKZa7uE5narJZbyHRAS6k4uMBWyM85CGeqc1tyJaRX2m8wnn63KP6fTUxn63qA5y8SRtDK4Yfz8jQYKrqQk7S3",
  "key2": "DMP6sdmHUhjXxNZuw8zLWKhotHZWEVpKEiY9AvQmWhMs6Rb7As1eRUwcrcJMkCx27nB9VLQ75B8wxwsqCQsdqZf",
  "key3": "rQzgmnCiVvrLZefY837am3h9pMNEBhohCoctVHsr3a4LQZUtFiaJq55UDznU9EZoKjGX7Z33AoHUncaivhuBjH4",
  "key4": "5qjr2JryFZNgDbNzvYBV2haVgD5gJ7udhR4Mx2xboNwMisUzeH4p54iADB5sAvTDYHho5JEQn8WD9rvbYHr4Em8x",
  "key5": "5QADeqUT4ne6MpmPBGuf4eyZHe4y4Sz7HeA9YVHZ7emeawFibct8V2URHnZAQ4H1dHGBftdPVAwyGQXSR2qm9ibT",
  "key6": "3zfZh2mxcMovZ69K2sRPyUWmfZ4AKp4BMVFHgAUDG9FPvfSoNtFPJg828VhCNkfsXqfEYdRxAZvyJ9E1DhpZMgF9",
  "key7": "4k69JfVQxqGD4593HrwWmuLopUDiT6Hi6ExPFGVfqqmaqKohsK6djaVvvkpDmxMdRcMSGiKvfwEY8oDnZBeKoDXo",
  "key8": "5h6FAtyL6WAjZPnHHiaSXJnZoeQZs7J5AehJFz9oZ4Z4Pf4SWz24RwQJEDESdKPj533oT48Ct7EUnJApcp9YpAKG",
  "key9": "5trQ5tLH54ESLP1rp34iXU5n8m8oTXgaEz5sdxhkKintMwqwL645L82drrtA8pXSbN348aiWL8yf8iXW43DJvZpS",
  "key10": "39GQJHdJK28Z7XyYawx2CnMcJm6hywio9dZkj9TNJtzNqfctpR6q7pkH3DmJTBBUkMZHmRNyKAGZjRnRfFAsQ1EK",
  "key11": "57oFKjHLTnN2QURDdVobmTHAA95RdgHqwcwnUTxpGeiradEDpQyNxhHvs457JmtqK5Wdu48g8FsapRPJGf6AUtNr",
  "key12": "4tsERTgNStzRXwhCyZUSpJqATyjAPJJybT7oKqVh4x8Vi7eeu3kyFsSxtV6omUq1fpv5DRtewjMMuNfuK6JuQ8fi",
  "key13": "2W2nz1cL1mDwrLbbkcinUzdWHbpMH5oTYHRrXxuHccQWEWSRqPDGFCJCL8GjHg6XCfNob2YSxPDcqa6ZwHfSoC9y",
  "key14": "2x3xvePfz7iS2dwxoe1JKd1EtLupmYhzdw8unjjv4yMuiyEUhMZYYJX6JVAQeYGmsKv96HfQXkJJw5G9WXEMgQcp",
  "key15": "2PBzotbj6J7Hr4HWHD3G6fThCntXyUcxQUS8UC1efjPgTwqWffViDz5Fiv79RJyxZx6rV3Sau3bJAwttUv1mJb75",
  "key16": "4SyphVsgYs5LPY4UaumBJSBw16xY9PtrR4bu6mmAV22xbBB8J8LGqkTuDhfb3rtBHjU8N5kw4AM5144L8QtLUBjP",
  "key17": "3EBnzCdgKuUYkS4omfqoddhB9Kr8quSYUeR5U1mmE5VvjxHqjxRZxVFmUcYdkBojyp8GjAPUENGfEpuNXKmU1Jj9",
  "key18": "2tMGreERkNZQwh4awP5ixjyfmYdMbP1U2CS7djddcnsur7pajAUnCcPxnvF2zudcS7YzZpCrtm73Bzc9xp7FXTXc",
  "key19": "3Z1nLvs5YsHXAyPsMoJr9VaCsokzWwiWTfSdBrzaH1kUuFExFX2dkWPY2SzbNimL5jdbW1dk4wEJNwP2EKaLyeV7",
  "key20": "2sqg1pyHpSwiyGB8vobHv5gnCiRc3S3KZXNwgDTTvDko9MsySr66GpLGnN62xCmqm1tyYkv29ZAqtWzX2USK4bbw",
  "key21": "3J9DGgmNLhz9gYX2MoCZsB16A5JYZ7aSJHtbaoQNu44VrDCFYmasxpbCjsk9dEtqUKCTG3KVAzn4bJdb1yLTN2W3",
  "key22": "3UayBUaAWzmgku3jVLHngWv6Enuu96TKDYPCubK9wzqfKhqaLDxvY7vv5RPYwdCjuZvvZhwXLExjrEycp5ygrDuY",
  "key23": "3aQ44SNVYnNAUPfpVwKS3jUn7wkSFFKAcdibB5K84ZX6pdU9qeVHz5QkMGNsVrJUoSvFmsLPSWkdR81EbXWHK8gv",
  "key24": "goi3bL2a6Qn49cfQPHQTj84VZY31t1SZRThJC9mSv3hdLRc3XnvQSA1SzVh2UmS74y77gRafZZUQFQRF996u7zo",
  "key25": "3ibEYsZ1GuV47WaHYSotAnohzuLG4QzEDMWS8icrSUFaf21MbPgm17nfUwCTTVahRn6ZtCxRVmKRgh5a7xaZ6LyD",
  "key26": "2WWP1d1T2nJEZsgMFvtaBbjA4nyM2mxgfU8H8GkPcEVNE9wu1P8PZxTnRC9vanB1S8rP8NBLqmxV1AuKdGDA2rLp",
  "key27": "3RK37Eyvg8re5VrKWJLhJmY6qgAjmth2Tj143ecZfMbcq8fsRw64B3wQfRJD56HHw92ZqKQHooCKqc9NXNQ4S9ZZ",
  "key28": "5kPx9RgVHoTRTQ7CNX25SA7ZoPypi4MhFEULHreKmzZeZNC4XFGCjD6AR4ZHBviNgbm1dwqw4QpsxfXkNPxJjDQo",
  "key29": "4KXGwkXyfHTePQkSwcRtn5swRMSeFT3Ew3iiNvUtJUAUxjK2GrMdQ5dXPF2Y1RmtiJe7wFbeDMCDvjTmioX6wDS5",
  "key30": "5CAW8NqqerhmdJKdW7RUhsZHnpDvyPLi86SNrYUSKBjoYeZvRBFmhQH7GhemHo2HuWGtjzeXtvCSSifZXXckpnaN",
  "key31": "3aktXzrp2XDxRwGZafyPqGoEqaFNJBuV7vcEMfKZyXZr2HecHy9hE5SAQTXJ5PJEk4XFHWHeYjciKAejRQjKWio6",
  "key32": "51ofxtMz13KCwKpQuBLHbz8GUaZGQBfbVAwFVBbdiBt55uVKKkGu4Dj5cMVfuGFsWwvxcj9o3xQTc456cswvXaFN",
  "key33": "4x8kM2Dz2BwRwELrSz5YAwwxmaHvRpZMH3AAzDPSWjMbd2phzXsHmqgyCf9L3RewAvzwy2QuZ6enNwudPZEmPffU",
  "key34": "UngSARLnVnZ37PjyJfbGTunX73t8nofHEvGdPiEiNdWkz2dNmzf4i6f3WwMEBRHgWn51ZuBkkFxcBi6GZFfbFEW",
  "key35": "5sXS5skzgVFHGPCe3rnAzzCeD52onSu7qAQafqL5EtWbFZ8T3FSCTjeJo3SugmYi4EX6RtPqAYmRioTt3u9SqDrz",
  "key36": "2jvc9NoXi1VGUyNyEYWHC2ufdjwhrN7E7KM2ktoGCg4sga9FzEBnbYcDhdCNTx4GT4y4dT8FXFfEY5BZqzDZdqES"
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
