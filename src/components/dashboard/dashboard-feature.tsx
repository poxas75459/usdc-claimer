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
    "2fW3yhLcMaRm7MGKK1A2F15shwKy6zFxB2auQmm9Q8zmpApuANPnoRQkoxHygpSJHReLEpGmu4UrPee9aUDZY1dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ehThzYqQ4Xqdh4Eb2HQmxVMZyeprQ7yF4T66gjNE7k5UefYz7GkMATsH2wNbdwbgCYNxp35DBFMy5LtYDHDV31c",
  "key1": "3Meq1Ktq92oDsb3kbGRwuxNeXHVyaH4ZmtkxfAt1aiXJ5uwdqyHEJawKMtcnW5YgFvT364p6gaRDUZcWcnHW6c3J",
  "key2": "2XqQdmxmB9UKQhZpkbbrRNTpTVNoH4KKMvg9zqzti9ZXB1whnCzkdSebuvxKmxXkd8z8ogttEqfXxrzHUKQ5H28b",
  "key3": "7qZ3xYZHwpLEuwzowf6fjQDS4NggsuZ39yNWFDKtH6qDkab62djWxi8H8xaiBrEgMR9faMyLAYGRSHBSzn9nYqc",
  "key4": "4PcTHFywXEw6aDDk8xEZYZLNAsXETKqTctsVJYzVTmMcruF4PccbGh1K71Z8hs4GLCtueUyU6ypqWfzwhP7vJeoV",
  "key5": "2PoFhcj5Dk2fKSeNQJKLMZF6dyWAroi9KnUBaoyh4dGvN4piTsVRSrH4tVi2UUx3Eqqnj6JSJyXtmcfhmJym2Wun",
  "key6": "4b94tsQbJFbtDVaWd5jEU3GRpLpeTw84APBncSt9JLKSAz9CLrxSPiGSAYZ78pc4NNnvDcLofNhs9KVmkFG3T5ve",
  "key7": "3fjqLw1teYPCzwaqVnDnpHz179N6qD5gjfMoHcCHYng27ihCmBDcnXvaZQNrGkzU31UyyyRwCA7RAsxkCjsUd8KK",
  "key8": "cTYCQ6Yo7X5JJxCU3pjfRyx943H5XxLzVCYQLLE5yz44n9swZ3CeNXJcJ5m7qxMKjZ1GBLk8dk9A3fDWaH49AUK",
  "key9": "4aBAAbPWVfaZMGefEmeb2bDU3pmbfUU1tmEnwqYYCvCB1FxyR1dNPep1kNQz3WX5ZfyTfXEmDmg5CfGsMTgyseeQ",
  "key10": "3oydnxZDNRdJNEdGFMXrpdndbvKJNiweyY3LpiUf1AgabcmUJKfBjCUq7y8ii8tDVrAC1rtysz55Do7d8AvRhnvh",
  "key11": "5aS8AzGmcwvE1eVqTTbh4hjUqQDt6TptYgsTEzSd3rWRFj2cvPkxteoXooFo3urgADHm4GtfKeB5uxYtu5mhQZSj",
  "key12": "4vucKtMQQPB6dwrhSn1C6NUt85N6BY9kyNwYKR2FDmpDQZwooejqnsGE68JtBWFWGzwd2nNifUhErhxggKnJKe8A",
  "key13": "2WR6HDfqPCUZapuvXfiWKhf99NUMgV8CUu9ZfGeRBSAfZho9TTLpfEfGhtbz44Xa8gvQ7hL7rpnsMuLm4o4ru8YD",
  "key14": "2JprsqE18jbJR8wkf6s6Tim3rtruKo9uw41R5PaY4FMLafDZvTbTevWwge1tGwRhM3KrNswChbTLJKrWHBmToaGS",
  "key15": "32zWGjybWrzzKMoGTdp4ze2RWaXGsVDWZugo9pUUWYQqQJqwfEBctAaQ1QYyCZrDSuD1gizRNusZB2qJnCTqTXLS",
  "key16": "UDACU89vFv2Mq2RH4nAs4VKtBwRrez8Q8SvNNi3GTE9Jmj77BuSS4NwKYUtyYHi1U8TH3zwtGBqwuUv87oLzrp7",
  "key17": "acFGgVwk7kc4xVwcMzneVdy3kJ2VhMLECZvc9Xv9Qyysd1WbtrAQJmN7DJtqHw6zvcbeGeeBni61N5hXDU3WrV4",
  "key18": "2HK1e2yi2GsFXjo8dV11ScpcxjYNDWG7NYVXvuGZSPJj9jCWuyFGc8VVGPGjmSUB47qK91DVeEzktPj7mJAkhMwr",
  "key19": "3SKeZzWg8T3avgybU41x8f5DFTaDAwLRDv87aKFhDHCR7D9Y4euoRDXuDNv6XUHvC5Q9fPsPKAUUGRSXyT572GPV",
  "key20": "4Vp3ZR8CtjV95AGriuzqoZVNnLmCPuaRv6PPQRk7TMG65BdWV4aqzYYQAbWrUtM3BdonDtWUhzvQgF1DQoxSQK7d",
  "key21": "5eynZCcQEaFaVmYPDP3egK1BYZcC4Poq7Y4KtE1AiunzwDArUAut4Afdhurqf7ZXxMcqhw5vptJ66dmVzKSTw2U2",
  "key22": "26LNmwQPiRiUncXvC6zzaKpjq6zv7CRue8hCvEJhTPALqUbLERQQzLPGAQmFsyQRZzm1FyrizRYocMSHcyGCpnsi",
  "key23": "3Njt8CwgXcfsDhVFpec54sXZWvXgw38KSB916ZP28T7LYxYbW6i7XBQk5nZ44Q1azFBJpY9E5pgarZgsDLuDJbmg",
  "key24": "35PVL3SabiY7V7i3xkyf2bmYCcYbHUWDSh9nmXMRtD5PQfHVCthYj4RyCpJNpAr7FbRdVX7yaPRhdmNmSRT9F9Wa",
  "key25": "VaQv8xa2yqSjY19qw5WrKUGhgcYbW2stRu3duFV84JP4ZDJydfAPuBu5cAF87s2r1xgrZDRwTT6u6C8FgF1jMUk",
  "key26": "4opQKapSqZzLcWBBepLjvWnBSnYLvsVCxtbM9rkQVb8kzbvSgqa3fqAHKZFDU66VxMQtecR8NayVRcHP5c7udoVo",
  "key27": "3VZg33Ae6FRE3Q1uwxuHDnpDPVajtPRKWGBd2n5LUGhLc3RqY1tiBuNbMvCyQBB9GidsvREy8qxqVAsy9BFpozUW",
  "key28": "5PxLtRBSJbs4btHFXqFVdQViywkxrNBvUDzNKmJ5neRFxYX8JN5THeYN9R7SwiP3tD2ggzYaVVciM8KwnKgh1pe1"
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
