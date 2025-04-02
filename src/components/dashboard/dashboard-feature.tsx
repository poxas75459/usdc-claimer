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
    "NEtUXqgHL9Dq6jx6cJ7dd7LeHSraKuyeaxbrT6z39XVjWL1YRgLTHzjTuPxSWV5nZM5a8kQ2HFnfxVmRerB1EmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DepCahybq6KSuDipKuHtmPgQE8NvASocoXyWmtbhPZTsmQ8rYdyEUdDe5oFNK5athMykf3Tog4AEecsdZD2HCk6",
  "key1": "2p96i2FB1ddccXC9hZJ4njvhKrc8YGHqG2VrL9s1qHMNupTQRGDWn8TCEUwR4L9wDz4QD1DTwdtQsr4gFUk2k4jA",
  "key2": "5VSNvhtjsBsJSbNryAvpYCGrrbs9o5ujJd1A5ukUTnkAc4JWRE4ZmLWu8bHv6vyLrWasHPXRadmEia7FuL2Gd9mi",
  "key3": "4XRbEmnoPUeLmPNxg9ErWP1bF2QtcPJrrUpgHfXa68y7Bz44oatNcCszWr7uVf7pRDAY7ePokwaSRGPwwHjpPgUp",
  "key4": "5H6YpaqwaYAbe6UdyHsaDguk1CrTzS9TSLVFvgGZojAnRB759xynAVb2sWBg2ktUFrct5E9sBxaPxPzuJqTnbk9f",
  "key5": "2fLs1ki2pJ1MWHNKoeYCDM4GEpKdvDFLbfgqj73JZJzvH98Hu2nKW7zKrVpz2zZvZytvRhApHMmbZQMKiScSuWoy",
  "key6": "3k35fTYr9VA56RyBPVrNumccHRDMKkn1U8FirPD11L7WdMUs8iCDgxaD1gDAePJkvpDcM1haByqNWt7Ttif26smN",
  "key7": "5rZVRuj1nFhQmYfw7ETPeTSMC1Nf3XJc65mgs4fAe1gT3PR1xbwtJ1FSqvQ48k4tS6iNKkmN5Qr8cjW1AGCk4wrJ",
  "key8": "2AwsvG9PoTZ2o1J1V7Hq7qSBNVcMS4TnNLUTaNPc8Gv3bdRBZAdC4nTjWp6pHqYk8m5g5DYjCfcYFqUZP8YBTbiT",
  "key9": "3dvX3ng3FayJPG9qPPu7wshga89d8rkLGCj9H2gAx6Pqxe6ujUffGVAGDAK8u57QcCumk8BnsRN8fUjaHfwNsE58",
  "key10": "4uPtyzHRyKv9cMXpundunQswtFwmJdDz87JDm2mkYVvutsLsVene2fTYucYhm4KyuSSQkCqMbNYiAsE44qCBpsqa",
  "key11": "4zECNukfkZgEaTRPntXtfELUwgwuv59inBf6HUWAUT47h3uA3AukXnsHjifXjGdtts3G6XhGnm9gMGKn4G6yJcqY",
  "key12": "39b2GvzPh9TgQPe11yNW7bmyubmAPT9rRGW41bB4AvBp5i51wTrhRWAQRorom1RAsCURaD9L4UjwX8jkQNkVE4nu",
  "key13": "SnHJ7Mf7uTCfzo3ThwCVuhMoVogDic88RLSKdcs1JxVQ6KM8rMStkwKSaJWXt6VFp8muVrJc2vZGRcCVcoskt5G",
  "key14": "4wyJ4KLk1gprRrCcNJo46RoXZBpvm7uEWvBAiBa1nCf4zwGMLDpGyZWUhd96k1z4R6pfJmfvUFwhj3NXcPfa6jP4",
  "key15": "bfVrjhdfNdAZfvohGSKytqdnKpbiLUiDwcxv4Jw71YMhF8dJ66cSXG9BaUd7LhDt8hJME9RyiGcUKwVN71iKJ4P",
  "key16": "5yh9JAgwyktQEvMc41D6sgG8joFaSxbX3vEsZ5i45W7uA5sy9gxrLxRCGteSVJbHHjXzbmMKBEavsxB5c2a7iPdK",
  "key17": "3QRqi8UuyW9E1QkXzHLzGA7aSTN5VNjaH4nAfKwsLvq2A3ApRcwioP97AZxThaEMaSjKxeGVy3DNKCY5EgeHsPmc",
  "key18": "2rMofjmASMaiW7ep4TBs4omACigVHrdkjn9u4qt74QQjwkbR1fKstF38dr1SmbxtnxRLDH2rp8WDbU7YQTagDKmc",
  "key19": "4p1GYo5PfgygGikETyeHYVVARcqZeCtFUgUy1xjd6XpwWfghRy8CjbD9GKS7sLqPv9wdwU6aU5s2hxfXiYLvTs2w",
  "key20": "4ebF7crSbYQuXmjAoDt1dCSzHQzeWFf3rjhmQuHPMubUTLg4K9xb3evzMwCBsNjiqqYmheZDd8ej6Nb7KM9HXCJE",
  "key21": "4wmXydVqrzwpgq1fv2fB2zMvJXV2AS5y5VVEaLrXPJhgXj8ABiLAawEC3YLyN7UyrRCRzcyAHCGnjZPwpadTE7ag",
  "key22": "4jECxhD7qrWJ6HkwyUKeYCMLhzrZf5XGttiKUrEwCj1dzRPwY8etzXL52cLvCkg1ups69PycJ7uiZjGn8WYzbWKe",
  "key23": "5m4mvDfyCJFwaNroLotrPZ4dgrxX1UUBJBNXvgwJpjoLNqJt5Yrjo4RzWGuspgNViAGYAR85D2hwio3ZamxbTbaw",
  "key24": "Cg5mknDdde8ASNs4Lmn9oqdEvLkMojqkRMHT6gWg9Jw9SjNoYwiPacQR2CKJRNGU1BbZGZ9Xt1PDADNrApfEChc",
  "key25": "4EGJyAU48tTJLaZgRgzrQpBt7SqascNbRZbbCFmX9Lrybw8FJ89dVcy6xdymNovWNk7CdYu54cSSHez654C7N76V",
  "key26": "hcRB1Qyj8nu4tApCrqSwgjm6RFoVegshhBdvxmxfVHK6v8FaiaWuutdicrMjPaCeF1SFwMux7iKTwfXnH4LDpoJ",
  "key27": "3NynZLErRteuoydEDaHRBZaqTugrKo6UDHrUPz4zx7GN7pbdzgyq7aRkw8bQBG3vEKp7ZdwZ6w2t313Q8wWyRHUN",
  "key28": "2MnbzwSWhR1g3KcQvyHpVD2XNSpfeiVKJfaVJRMg8EzAYMPTwTWwUv3gjnKzTC7RTz3bhEYxzzn11aUacQm4PD4Y"
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
