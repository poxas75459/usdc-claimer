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
    "2WT9UJf8V4CfsctmM3vkceUs9LxGbqefmFqmrTw6ztKztrYvYb3uPruyJZ2jNxFUrH3L15RSHvmVLsAkLk8bDoCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJ2bEfsnRZqkxLvKwTavPDYCm4b1j5GLiLJo7o36kpF2nNGpkSjzhYpKKi64DvDCHstkk8QXRCYSjHxnYPCxAb8",
  "key1": "4zbCFp1tvj2ZHhN5AhSvKUL1LvkNY1DiRX3VTNEFAUtvtnhqksRDYUtibTyogAT1ksmfUcBTTka5mSdn2c3bdkhz",
  "key2": "JiUbFAEd4bhPPEL7E2zPguqY5sqyiuyUe9fJk5k1XjNRo7z6Qq5xjEWq6gYzQnTaFNkoTqgxuZh9x8dmQVxGfy8",
  "key3": "274G1wB54mR6k9NVrv75QFYvew8E2MX5etbtmUp9p6vcLSbHcdrZrTNwTNVeDha22x3fcWzLskatwyVLEmttozeK",
  "key4": "EB3tjd42BDBRYrMwjuLwB4FbGzoqhKCo2GjRiEPUA4vANikewMVAGxbQVc8ZUJW5Cuk85iRFoqaPhcrLJDZ7Li6",
  "key5": "HtQEZZNW4SRXxZBj6MjenFyfK93CDi7fsJ2FMb9KqPaV1TcBZifUj8MZNv65wPJqspAnbXxPVfj1LdbjCMjuMFb",
  "key6": "2kZ8FrMfbfD77qZVQa7kTMnzo8reyr9XNY7rDzkUHz1y3Lq7S8q6bL4PzL919zpDBDwkwSixkZDTPsMs8RJDnwRK",
  "key7": "MG4ZaTDL3bP63Qv2rYRZYM6FXQgeCpNgcb5xrBEFAiJ1ndQy3o5NekesZRZKnHptiCSSyy2phzskZzR97pZAPhq",
  "key8": "2VypknHjmBwPo233eFwacuk5jrmnUyx3t8oB762U1pcwCbDX5p3EDa6Q6ge37hR3Udh2jk4h2jTarTxpCDVPwuVF",
  "key9": "5qCf6ogsDi7aeZzsqK86dEF41ZLLXJHopNMfcbeYqJguF7hXzLaM72yjcfLeYFogVSG57mD9zQGEA8sEvhXKMgAH",
  "key10": "Kqe4n9T6vio13jPA1JHfLyz17Fo8HenYoXXx1U1ECRB5jG6UqNxKywL1V4QmSPbe1tj9NDKbvPnCHVVVXVvHVKq",
  "key11": "5N2kEu5WQ4er434xf2NoobGaD8sn1s8xs7y3ZeVnG1R7e9knxJime2W43ig6So4rCtC5cEFZm1P4p85LAo3vCWbB",
  "key12": "3mCxBUBRoRL16nf4GrxLzzcheMNtXkaWXQaXw6nSe7hvBQSFknm3uAj8scjXtCvgza9LoqYZeaXSZNPZbK1Bcnod",
  "key13": "38oTr5BTKMepkLPuS2LLCf2d96De1oc8agJXScbiwkhqJLzuG7KsL9tEchf3XYSmWcJhtyxy6c4eGiJ5yJbMj5Ss",
  "key14": "5Endsi4gE1RzPoNELCjuvRj66H8EmwewYHMeokWjQWf4iRGbbLbvfK7pjHNE9Sy7xReSAp5AoxGkRB8nXzZPRdni",
  "key15": "RXqtuMzCF9T6Dzu7Pco9i3P94TmrUNd62DuLBLtaTYetHHhsCERBxX6nHszvnSu858FDAbmZFSeujgX19hCZH61",
  "key16": "5zKQTLE1rHSSpQdUTzKj4aQ98i4MiHUoc8px3L49bvm8XM533Yy5bqsM36LiRhgzpjnhGaEQzRrVqa919RB4PUDd",
  "key17": "2vQLebRgTKoMJA6bAxW1LgoY8c5ruhervJE758xUaVJe17fhKZyc5pdNfscnzaM88dLwj6Yud8NGCPNp4HVgBYQr",
  "key18": "27YEUM9Lfvr3kUiFZ24taqpjh29P7HXPp9SBQM5mjKJdvv96akEa2JPTubvqfL68qCyYftjfu9DgsGSMZokPxbcY",
  "key19": "m6QucgzBdCcxEgv5fsC3CgjMTPHUwUHKv9VmA92Lumsp2C5YuxQG81fXDEHGcXMez2MwVeG9PP5qHsznnZbwd6E",
  "key20": "MSm1DAZHsUwQ3zXiv5ZHCd5uCEmdYDUX7JsgcSQboKr38FpivM8v45DkJ9RRpfZu1hvdV3Yh2mR9cVLBRkwEqbx",
  "key21": "3D5V2Mu9VK2Rgt3oTKbFFZnryzLCikT9zcUi8g6a426WRpaLF5VyamvtegPTMDJVsxwpc6fWRjNm3eZCiBFpHWe2",
  "key22": "3cHZAWhXxNXgjnd5m8GuT3hDcQLVWWEdoyF6RMPjj6QoHaNshY2CvdkCkThmek1WAgQDaX8hhkeAg1rMamdK6FVb",
  "key23": "2R1DGianTMpFkBZ5Z29VyNcHULFUNv99M8jbuxABmNHpPvwJdLfhZJyuJkXB2Y7sF2aPZHCdmAKhxRgWAp2h5fu",
  "key24": "2sAaBNFDxK4e6QznymxHPhyeBtZpfwUq4v3a1m4eVrSLRVyDbebiHzSH1jd35yJ7ao6aWEaeugF6sdfxUz9RwsK",
  "key25": "ba8UTfDXfXC6qUr7mh1NAZdyM4LHyhMALS6oBas8uLaWwcGQE1uJ2xnv8huKt9EZ2Qd1q2vsPopZYC8PgdkjV8b",
  "key26": "q9Z8BRr4a25Q5KdNNdqGt8L2jPnEPHADGQ3EXfiEEEwexxmohjNHLvv7vBq5ftkyR4fJA1fXfGSRPQkkixiSW7f",
  "key27": "2obv3L1SBQSTSnT4AsY3mv824E8bX6tX7MCCs7TtA2KcS9W1MCU44duDBDzHVwMis1KMoV4dk4qV1bVMX9J4Avhx",
  "key28": "5JeYJVcnvwnY2FWKNEaUE3nGnav1Yhq3U8jSmJSycj9RdDfYb7d5rXbZuDGqk6vTKJVd8pHYsa1xV8mHCnjKZ4Wz",
  "key29": "5kNJdke7iVGV1fw7VV964n8uw5hHMDJK1C4VhDufJV9Ysm4Mhw17tt5cPs2BZHQFJSZvhe4wN28gyLmuPBugVd8n",
  "key30": "3AZZGXNs1mLLSVbi9vyNrmtSeAUM6zfWHrxo43EWQNHWWFT5SwD64p22G8GK9jCBKviya13Eq37epE8Y17ce5WT1",
  "key31": "2TfXZgkT4ceY6Lkoja45KtyW6xcijyvKYJdjorb4BhnrCBXuTEzWUKkwh54Xd3hKUyaF2wJ4H2Q3eRpDKRy2XrgR",
  "key32": "e2hockMphZYzBEhFZhbpdrwqtwBnd2AwnvEqzMdD5KhYVodQLgWHHCxTsehC8PwPXrCAP32KX8kVx1bGUACmRo7",
  "key33": "5FPg4KUJcEuuMWssSiEMqfwEi6Ab8dmDH5sGu9j3pkPGCvciCZuh43tQGTHdxMyTRRzayLwThiHzT2vpARJTpd29",
  "key34": "3yB7MNBDRfMos1XgRTe62MpAZJRK4h8RZuK34LJjVaC5ybpVsn5qbM7DjYrYZwPYYdLhWWitkce6BWBnTBrphVUh"
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
