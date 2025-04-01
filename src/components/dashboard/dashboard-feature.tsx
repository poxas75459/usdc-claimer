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
    "2S25oFgUAgq2ewTLdpDS4sEFo6tirxfKhMJfvWGBQeVsyHWPYKvC295LH66FbWqCQKp3Ji68cSJUkkeR9kvyw8Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Di1tQYHWyMJbZaEYGXZVcrwdCZEaoLua1Wiybpzxdw2jqivsXBuF4ZoWxRnC1gYQCAhP3kpobRdCS1NxSZ12uTj",
  "key1": "hwMV3SpSbQa2jriSZuug2c1CoQhHy4uftzFtvzEAUsfEfUeMzu1u8VtcjmkJpwcFGF5JdgCocMhXwwmHbJp4oT6",
  "key2": "49E2aCenXMxNx3RqjVp1WVAL1FUTxdNjbzXtRW5XHxbgko4etJBZVm3hsL3Dss85jTPvwEW2oL2TZXMGqbXjgnUT",
  "key3": "2vc7jZ76Nw62rKTYg8x74EiNmbBi71d9X1BdamEqqTUmk7p5U6zixd3Bdw1LR9QrkJp3HSoBuRG7k1V5hHUgRp9d",
  "key4": "25WsfMTFX8rVkX5XxX9MuxnQ9vfvdqsCHwjbWiABcEKhT3VaSsyYwPp786KpGm56RHbSxKY5PsrvVwJYD8ekqhPM",
  "key5": "28T6b7oKrRW2i4nvTDHbDWJaZMfhbgq6iy6VjPy8mDm8WSLgwBQfpx22XHfAqoo4g5FYqFRwdDMZtu4jBfuCDrQE",
  "key6": "2UnRSCe68i6vvySAfBgqFrTVDP7GwhK5RwU7LjwGC2vHUebn85DjjvD1E43F1cExoLmPBVs881wvBmhzc2Lz7biu",
  "key7": "2Nb17HxMFo4kYGaz3uh7BdLxWqv124yGPauaXbvGvf78WeMHWL7pm5r4xxDS9SPAi2JJkjAJMwfQ6dgonpyuo7x9",
  "key8": "5BmeciamjSKY9PPcoWMTrVXWWMdEhjWbHANYPTqXKfm6qEK4CEGXhqCnJbYjXZjvD7rTjj3efJ2UMjaTmRiQmR3g",
  "key9": "YFEXgV1Sb5opKDY5stGmEy1ojLbcvPQCQpPpwPCNa5JMt4axdNWAK9RHoQnzUDgjyTHYcE2CMTaz3TY269M4tg9",
  "key10": "44LxS2Ad6M6Zxjs5NdwwGGhUEbCXSjr1UJSvpn8xkUZHPkzUpTzSZCLT5ytGNnfvXnsscf27GdXPpQFPWWp4GumF",
  "key11": "5io4ndgP9aKteLMZMCX2R44CTNZdGJGWrF6675guFRxbANBkdTTzaMnrjqqj3UY5AAtDZA8gw4DWGsGPBBqc7ujW",
  "key12": "5kypxQsEnjBGTTEeKAfzJatiPdo8oxshy6kzckq62HsjN5fVvMSXtP4WpUZAhiYj4NnsDRyAZXW3uXnTKSuRuXiX",
  "key13": "28QsvKUZ4KD2doC8R8XwnjiJyK62CWV1eBCWNQchpTvhcixRe6VLn4bWFwMqZn4UK12rhS2yCyMN1JZ2Nts7ynta",
  "key14": "ZqWVwTX6RfNdwPWj4EJeEd59Wm7cDudvx6gL44L6PvdjvCyj9bv8AJ1CL8hYwrmUMpQmRCCAWg7y88n42kQpqBd",
  "key15": "3kdKHg4b5kBUThhrRy1T5yjoQrFgy1wwSpNjrKUL6Vd33uQ1cGoGn8ef45tZ5oB7mLmaGYjjdfKrirtupDxdTt19",
  "key16": "2CrPvgUZJJ5fwHfMvMphkFbtHkxqLhVorhSQfv6UesM2KqCY1N2YifwdwfCq9Svb6tHHjqkdyQf5cfgKCa8RmLae",
  "key17": "33vUufTNM9ZZQt3LLD2KUHcy5Fbi6CYbtEwWe48AxfPdCRvYndzLsVTwucSrqP8u9tzpwumhxxwYFJkVyPFa5AHz",
  "key18": "46oyNW1Dd4hW9xDXTmC58HmwaSAehW7gjM95pWp8upWCUD48neBKjzuZALtCBfueMCNvMwB6XMAS2ntb2fcYkm9w",
  "key19": "3AzGZCfysFHBhcQUXVy2z1y5ZrFfXdeL7HmmmupEYMUmDPpSVRMLhHgazBYp4pidQXtmUzcrWS2hnpXc5ZTaRNMd",
  "key20": "4By7crh3Mfd4o6Yp6CfRmEdf4YJqAkDQpgpSwMBXQw5m5pS2apqn4uHGNPYPccuJa7iELRnHAKXjQGHjTETAzdn3",
  "key21": "2eJ3LRLQejaZPkqNtmgbQPV6UDNXHb4Y66veSDWLaThPNZxq6u7Psnu4m9MvVDczKdCxHb8zVEaJd7Ym9SWq9dBS",
  "key22": "FoarqyLcW2bUZFv2dhbWyWjABUJjjTBX4AtCWMfLNyt9Pri4LV69wBTGFk7yGcscQqRGvmfd4EAFRA4vAXqEmjy",
  "key23": "5mHo56rGtzvBQMk6EVKvL9jyXJuxswPEiFD58HD2sv8a4EFWTB9HMnFnGZrJLGGVaUmuEEkhaCqQoHS35dugw5gZ",
  "key24": "54sQv36b4Zw4Z9LXcV4PpdzDc2D6kwqkKALQWsbTS8xKLncGjiRyn2jF4drw3bL2EFXSB84jY8u3uAkSvv7cQeqn",
  "key25": "AUDeGiPMdaz6ihmbZFshjJXMH7kMVEoBf58FJD44fAxEY1iV5B15MdXSUiEfx7Bbti9LTDgehHnyAqbrYyuFHRf",
  "key26": "3W24td3BLynPwBb4GWJMS2SzBdLPAr2MhsQsg2sfkkhzUBPZDtSEzih3ep9UP4PrgYVjKHwgsREctJMQUobv84pA",
  "key27": "5xFDNmaqC9Z2HLNq41GTEMsyExouur4ioEFbnCTfGtd8pdZqDssqHaq78Eo7uVBWxvCpXG862CJcvuwiNdd73hXV",
  "key28": "35nYnHQR4foBEdbyKap4QrFSqJE729u83qomRA2BEZkdnZG6ijG67KajV8g25Smx3jNSpMjiYo39yxLQtNbpZcDT",
  "key29": "4ALCoKCtw5HbivnrC1BuUz7KjxWUv7m24G6xLgty1EZUkGmWTCM7Hj6DoTydh6mfszCsdfF7rw7kpmd2dc6qx6br",
  "key30": "5svS3J794Frp28sbVpJVYFdTjVW5ztqSDWCsp4riaQHBCdunYY4PfBu7DuqADnBZVcvBSvAiR2YfNT1hAJjDLubx",
  "key31": "4BfdCNxzbhtvgWYrTpZa5SBr6nYVitDdzv94LBnDFT4RpZ5hGEyXbvbC2T5DHnxuC8H4FDBDhzTzvD2ircyScjo8",
  "key32": "3Jj7zUoUZoYo2Jty28RoQAbg5i6pgdbGJ4gwVqrApoLJe3hkGmqXLjS2uTjkUQjn8x7RTjwRKYo6EaxcFJwJwV1c",
  "key33": "3M5D4AQViM4KvkWuAKNmqBrRE7o1CGbdovyQx6VnrfSDJXV7UX25cJbuYi6AVoLAxck14gsqhLV3K3bfRDqQStN5",
  "key34": "2SLcVC6Y2NdqArFBaePXtiWWH15rQX8n7exsD3iFncGu6u7kGTw2g5wCPtUMZpSStegzSdwKhN9QnRDQsG3sLapg",
  "key35": "2DeQmpDRNcQN8R2TsUpA9D1VQJ77Jh5q3vj4SC4cEp5ihZUabobaA3gw5i8kf4EkJosruNjATtfR88KTie5g3idW"
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
