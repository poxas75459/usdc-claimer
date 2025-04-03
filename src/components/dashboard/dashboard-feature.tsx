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
    "42fvYUuAfvRdBSoSyrx5UD5HqxDkCft3cT4KHxU5RybWbAxcsmqivacTexvMwqit4dAZhwPmd5g8ZpU32eHvxtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26tUGbgZUCoZty3ztttgFfj6N4vbyFnpzdzAccykKq5yvhwL4xVVADYqZJ2qT6kz7M83WtaHwfnFTmq1aj4QaaGj",
  "key1": "53zPAsNn8gpSKhCgndn7nf4cyzhmjdVcjhzrtVd5fLHvo8pQoGKdxBSf2sEp2SLrWozxemt4Sh5fhGA9J3FqG39Q",
  "key2": "4XE3rGDV4YSrgpWd2CRyQRXQBc2uarxedZK2KZDVKspd4SysXMAsXphtEsiDmvijXfbHup2ieh4oEFqSCEcp6nve",
  "key3": "4NpGq49fqoigkW2cs8BdzSCvMV6J9rsEkDiFMikmZqYZKiPBHYAXjQ9jBoGRfzTTfDULXqv7dmG6DhQ15Kc3JZjB",
  "key4": "3SqL5fBXXKdGsfn6ooL4rrz69EFrgsq5FhiMNioCcveBwBFPFXLFAfPamT7Z5RcGegUaniLP89MyYH1oBrQmRxz9",
  "key5": "3z8NMn45bMuFjobwmxKfbjfY2KtxrQGWEzVE59p42t9goksy5eZyLMLwZ9nXng28zhVABb7aSXqZFaGmZNGZyZdH",
  "key6": "4qdNuWZgyy84z1jiApgTboZByYAVwwNx8G5GuiCvhndSoKygJg21FLq3zb2WRNHEirqBEeR4iTvWs479JXfqt5kU",
  "key7": "E5CVK9vfmWDNZed9oqoxyukS375AcqARc884S2ch8xAcCAA4atbygjcx9Cfyke2QCPQBDM3MgqDnSc5LBrXmWVn",
  "key8": "48oT3eWQqJ5EkJp6UG41rogF4f7SBMCbMDsYB6gtHqNraXD9v4zMyxGMxZyP7pbpmy57T46rfsnAwC33gPUHLKXK",
  "key9": "4JhGZHv4AzH3UqJNfLDZALRjf4vH6yVLG7XsSdGFCaXkFKawK6bnMrGWQW2BfYXpDddwjQdiyXYDmAC8TvRWAx4w",
  "key10": "4SGiQTUVPgmqprpsq8kHbm8RCLGZwnAzD6Uqi1da4gJFjrCpJMgNM5Nb6nnFbVBcvwduBir8k1n1JC1jWjCZDfHz",
  "key11": "3aNM9vdXSixVquMhFMp7juM7XHgh2uSoZyT4Sag6us1ehSa197eLPYXPs7ptYtMPMMPdqDoNCgfd7mYzNxf3J8uc",
  "key12": "33ojkqGFB9dWocSunkBxPTBDkwGDQyJSA6PucAMEhTAVxgqFBH61NXTerLmGmKdXb8FZzQvSidQShU4MKLCWqWr6",
  "key13": "4ofUovpnKNhkXj1oeuuuudjUe58HWcwNrdTLgyGjg2KgQxSqJwKyKS4WZdpDQd8zQgAvVU61QDqYJhVJbWb6o8Ep",
  "key14": "3Te6N7fyD382bVYZkPoXv7FHSsFyPeRx2bLPhtJmkEJKEZrH6ityTyqfJ7J6rpMJ5hvzGkY4yVWHW2BjePs1FMeT",
  "key15": "5m6Rrmc4s63cAjS2pv5GtroDgNzLAcrc3NKLRiT4q5E9ajQbJfDJt3UrDKhntsE2EDHo7A58R2U5dRBUrUGWAuxV",
  "key16": "2RD7VHpvgXKUyhMpAP4HSY5kBxmBV1hjpfAofMcnzvQ5hy6CG7HAG4UbVt9wQFhNdq1jJnJ9McXSpdMEYX7nTCY8",
  "key17": "RfoidjUQuhyyrDEp8bdej3GEs5fvU6AbUp3com4G2nwstnmiKQJf3C36E3kEAifgtNJpNEQcoEi8tybjmqsrZEk",
  "key18": "4coBMAGpHJoomeEZG1HvGDSpjNd1EgJbbzbY6qvz5uRveT27ijg6JNZeJTekUstjNx4Fbb8UjnSV5VYuGS5P6Xpv",
  "key19": "4GurHmTn5BhwxicBYU9aRqCAT4UrApf2W5dgETywUgVUh4rWLJqUjqQTFSU1gc2A6TYXxioUePCZCp5VhmRhFxe4",
  "key20": "4y2juSuTyWfwWMJdkSFbctfGb9EYwBziZ2hmUXWfmcnPSeHWgdx7TnagT5961Xgk9Y4behZxkxZsMGQDU6WDGFJY",
  "key21": "3V2xAEUQQe9hZsagENycYFiJrJKbggLjP6a8amNkzCGFn11jXSZQ3bNnVNBBgjoLTdm6tahYMAAFkcsFSfNGFDGp",
  "key22": "3GsFBBJhixEeGUsFLrip8bJHbEWj1Nmqmiq1meFp1HxGUUn9R21tXxZ2sRsVM9ZKHvotEuhHT8NmqiuZLXTzajnt",
  "key23": "4gBy6NT2VRYDWXdJtbjj8AgJNfSVx1WVLHvptmJTa13Z61oXXsoDnW2q8LPkd5LgBQURmJpe67pBdrnKkcmazG33",
  "key24": "4JsskdJLqhheT9w85mYFwjk5sXxF93ZM1xHnPWjyprKe3cdwkJG8BnU7yXqi2PNwBMuzyvXfaK6YQy3bTdKM8F6m"
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
