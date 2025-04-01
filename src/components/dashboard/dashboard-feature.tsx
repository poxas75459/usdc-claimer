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
    "5GDv68E4DJQ4kQmvsQorGNd77EGdwqWCs2dozBuh4cYnBz426k46DbWfvCqaKc3B4Pxz3uq4wq2WYHAnJFAzABNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auxH92oErAZrnREsjkzQRsgw4mWRDdg6AEtufJJ3tU6Q1z413P3EyuKYDnxrp16yeG4k7RH9WkSiv3XcFm1u8dc",
  "key1": "4Rb9qNaj1AdDb8qf83fPQmXfxpQRQm5WzGMdAC6QJ9zkPG7MgNV14k2mLaXshpd3HgdDxgfYkJVVf5vGZUy3hrC9",
  "key2": "5N719ckrhxBxih4w7fKs6wdNK8LoWhKxBHWcnQKJ3BTNuveb3uxX59SJiwsLxCGj5Jm6Nhioied28uCn2xGSUQA",
  "key3": "5tZjbzEa551Vru6Y1FMZtVQud8QBSyA6wKHXxjRcqmeR9idsf7ZjhVfGsiDxUv686rjJp8eFTQ6cX6eC1er5JHtG",
  "key4": "2zJtyWDKAznEWBUJBKmLCMmBY7JU6mDKjeswCk1SdrWyMN1TMw7YVV4NGhpZtAukLze5VCvGM42tuqP4ShVFocBp",
  "key5": "UxGEaiZhUxgVA9jMKvJ7233KTB8t2XeoboPKwJq8nPpjdcYEM5hDhgfPnw1pzr1mLyKud2aRPqxUpWSBigzSUdJ",
  "key6": "5MEJR1WDvh1Qtr3WBJYNNAWE8NQoqtijA8x9dXavyunXQi7iiFtGJEeKfHe2mg97qVsN37f72WYMRmaPMsbbKwYs",
  "key7": "3SKw8okRSEmWUdFePTcZ7ySYgd4WmdMDcJY2KWstArBWj1dyzfLsdENtrSN8YuiQ5AQSfgNYVrSCTJzEx2Hcerdm",
  "key8": "MJym8Y5Qahg7Y1cMeJiEZJ9reXxa8MmUELWxSges2UDwBV67szZz7NqsfqFYniLATp9jcJU1qpT5vkSG2DdUEs2",
  "key9": "485eQ3CQ9Hc9JJgwGoJid1BckseyPPiEYUXwTE5oZTToXr5yZAhJebzBjugbaZh8nsxc1D798utBGfTVdxhQG1JV",
  "key10": "4oABNoe8cBYKxPA7gm9iiintsuLfmB2aWLAWMhhZ6MRTTahaEWF4gTSe7Fp4Jw9y3ymvXnywXzmTH1uohjxyhiHn",
  "key11": "v11xPYUpXjBAkqsxNmwdTxJ9h7mAg82Z62TrWGTH2Vv5ZnCpmouAaRx7C8p6xXdmwjHnMGFMgS1czoJ7t9z4FGk",
  "key12": "5wwt6boFH6vLU6B28A6gfbxtvBo3GVTibykH32vQycerSwo1LuR4SFPjRKzEDnUodid84hz3sV2x7xm8FLP1JouZ",
  "key13": "4rQXZYbhXxBv2h9149ZwVVGGijKD3bsRJjkLmaj7vfjSjiwDsJ2qvn2zuFDuf96mTg7294hBbAQXGLggR4PQXNNU",
  "key14": "fyiuiPzDjtkq3Y1ow2aRCnpt6L9KZyM1XNkysd2ncDB5idcEVRjJLQZPh84ReyTWL7NmE6abRh8YcipmGkCHz3L",
  "key15": "3TVeTqDgiPfvVvjLop58Xwn1NXnxsaXDS1LCteQrbsYhmFxzQCdq4T3rU9ZAgu1FCv3aXgrdKbTpmZat7J4F8E21",
  "key16": "JMfnG76Urj6Hkp1N6rAiNc7DUkN3SjmAQ1ftUxW9U6nZd8z7sBmwDPiPqZNADcMqWfXrLoPSoMawd87nTb8neoG",
  "key17": "41SHzASHs7UPFjCXU9xS34e7yvkqjJMbwdHo72h9wGWUqjMX7LryxahF34F2po73VkZzYEYJeBVU7h9NKBqMALGW",
  "key18": "5peecK6bXcJMF9GpdFkNf2aCKi14f6U1EyKDRzMPiBYmfGyk4VCuBPBJFH41RhCvS8GbdotFhiVYmcgopFWSexuN",
  "key19": "3RYHYfEnGhxM8y7Ugy7bgBN1qH1fWGowfKHWV5id5S18TtoD7v7mAHa3T1Nqr1nAcaGpEp8cwyhL3SvbVnexaW2n",
  "key20": "3HPeSNcuyWuXH6rAgAugr8ADXkvaDasb8uvGtN6zmSJmQn59nxjySYxSHTodinmDsJzjKkHDrbftNW9PvvaYE5eQ",
  "key21": "4fm8pnnFnLPp5JrHHCGMynpJejDFGNc5jPWCKMPWpBDnAEPNVSefoSjFCKwDJgDgQa1vLCN6dir3ZBNsWrUUBQvj",
  "key22": "2Lho9yZBhgoK3kd4S4ghjgPbGMLsA4cTx4PxDGGkuHjQu5S6MFS7heBh9zpyXvZC1z7KGPrEsxK8Egwsfdz6GnFg",
  "key23": "eZ15kWcWKFhcrkUvfCkfERKZuiHW4UVAH3zrZs4nhBALLTnGG2TgPjqVPMTLZRXjotBXfR9uc26bTH2q2em25Eq",
  "key24": "33PFbGCDAsuQDomYw7ugjHdFZZEQVzyV2y44BkwXQFGTyPktniykh6JkVPr5KF8iJeJWSQt23RkWhbdBJxEsTALj",
  "key25": "5ktgUS57GQd2HinE6PT7tmbzWQPeaQ2uaNAHpy9TLU6dJcZ7WTfW7dxbzzqi5zLuVXJy2GMtnsBFNd5vCKshDE6X",
  "key26": "4j8JuwEHZqtChrmRyq7SLx2vsf9djCyNAVmreA3mkb6tU5JaiC4adrd9abRcpc1qBf7dK76SeupvmQakW33Cm8ZT",
  "key27": "2q59SL6L7i5e9Wh7bkKwrkvXmD8yJzWoaVfbwSBaZSKY1NBrSanjYuEPYLvbXTmszdAajHsF34FUXvaDEdrwYT8d",
  "key28": "2eyu8juCPc7aTydLTzHp1WJBvYVvDMY5H87hsKCBq7orLGsuE39RW3W5vEJ5M2h6oAD6AU8BFjKwMdpvQsZNkk5c",
  "key29": "3MkT67zpHLgvRPfLz4sGGea3czERkq22v2PUKrDL7iKn97jziHTcZGxD5Dg9gYXqQdjbf7w4JC4mh3pjy9Wnuk6k",
  "key30": "3unXJqudHyvaPLqY3gXLKXX4QgEtCmeaqfvAEWcQVMsHaf29d5i99jiwp97tmes8wT4JSCsqe25z7ssmd1wipemD"
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
