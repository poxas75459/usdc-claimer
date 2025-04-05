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
    "65YRHm5QLPjLhRPn1G5dHpZrZ5UCCmXs1rgpg2q6pgtwWnzPKdDGrM5WinLQeirhUFG6CJ4odvoqcxKC6meMomEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJF6ZmnQb3eLCduL64GDxLU4fYo4dbSDsHA8Q1Fhtn4u6ibhbw5Lg6TxJycXeGyc4Z19nqnpMDs1aVB95AQ5fkf",
  "key1": "5VE5xzR4hExgAQ2F4J3wB4cZNpmDtHHSaynhZSgJaSkFwChYCkkxoS7jsuXdwyZZX8UHAjckKiKFEiCFJiJq9n5D",
  "key2": "3hXAXqmvDYWxNVJ76AAc8kuadvSJfWs82LpwYzgrd2bhkjsK94cJQA7SwgDUcZCMvaigyzXAv1rWf5iCNJJ3mc5A",
  "key3": "2kbDyZ49277VJBL4LTvMp8tSwrCUs7T6Y2TQStV7oHyt2iHzS8m8FseMjBYHRrpWCd6uMq6GrgMfk6zZTYnFXoaA",
  "key4": "5KdbbBiEUSquK2wFVUiroTdyFRZ1MAVRY86V1cUDSmf4EhMzBcH7YTeFSYpVSM3XLDs97G6Eqg3jRcD2k1wQ7gUJ",
  "key5": "5WgaDjUvN6WFVhoTwsLnZoUkDGLZzb6y1rGggFaptjZTgMj8uunNPet1C2QhbyR59HYfZCJ7NSGH8VjLfzsQTLWf",
  "key6": "3fPDMvQvrQXPgAL6yCTsduDPwfLxhnbmjVQgk3t7j72t4xS4GgH3wmmNBsAEydsVtJgEMXKWFLvddrUZ1B3RkB3W",
  "key7": "5pojosBKu3Skuqzfr1Aoj1ZEXXwoYGi4qDWZrNbDuCnrDuX3egh8o2C4ao5SgG4yVRte6Nzk4sY8M63VZwWQazn5",
  "key8": "2At9qAabtedDR346SC2DUyqcv3Sm5eaJsEXmXbJgNurCsp6zFNJrUoG585c78bcJgD5ig3FhX5GkRwWL1phhc4Nm",
  "key9": "3LkzeiLQwSvNkC1h8qGFTttksNH46brWguBuknC9vhgKz2hcHno857y4iVgQfb3ja7YhmWFa1md6x9MErzQpd1YH",
  "key10": "4f2oR1FZYJVuzM6m1NWbDC7gPA8egtKrGdKb3b2Mab27NVAfGseLcaSiyuxJnAzFijpApwdVoTTKsf7RMKqUDuEa",
  "key11": "5qB3J3oq4kkua94SUSE4EVM4P6BWcAcmNzUiVuaPFaJmkENjgYd9wbVyDjjGUpRUTiKCLYvchCxDLfKpRPYeqQYU",
  "key12": "4vJi5cZUptpbR5GYDfjrm481PzTvmestBJcsjz7SYBWGADiVkMBSWiEcsM5bW3uombU7wvckheSay9QrvrPVsvye",
  "key13": "2VHNFkThThVTQyBN5CSPB3gDKwFqe6oDoSdoaCX2SbF7ZudgJZpq1kS6TPNtFZscXaiv86QfGL1R4vA4rqhH8fEy",
  "key14": "2PigQT793BajeuWNnbuWdHd2nXKG8z1aufXpRbsAUwyuf1EzUNhneERvpe5r2p8TFacfXTM82rdyHgauaZfYRrX1",
  "key15": "2zbCbyWRreFCqzeEnsDxe7t3st8tDmKLoRcT11UXDAgVr6HygoKwDqJbhsnCc4kBQDpB33w79fB1GvoRKqAnwrin",
  "key16": "4qLoM8Gf1W8PkXxT46G4HdFy27ugz3L4G4ntaViHrXPku95m4E5UjvWkSgDT1wowYLA2Ep5zU8Y5BPuMKCwkk4HH",
  "key17": "2j72SciUhdcdMi9ccG8MGQ7RF8aiGwUZ8QmhqQeiND84o2w98CsEN9LSWstCMaAd959DRm9BLK8PN6di3o4TJwwd",
  "key18": "5Dq2ibFSMVByYQjXUqh3t7UkSpEkiXSnQYHBMcfP3hGpkpmeXNomahj7EGU7JPk4XtWj7dhQBT5jt6EmC1TtQtCn",
  "key19": "3eTatdhCxBtYLYJuph3JVXdqHYkJTaMF28uvFEVuU6JgARs2QGpr9EyMnttF1ALZU55g9Zb9Pi9mtcyv8Q14APi9",
  "key20": "51T2N3aNYT8GZXwQWRaifuMmEiPQmQX1Vka8Q7RmAeRpRK7rAmnnWnArEe5Ldr7tt8rangwsjhbLevhBZ3MsLyjY",
  "key21": "5J296iMyEKRSgNz5d9e1XVrzHXuCNfFdrujobwBRDnsDNgwmk63sBN48Fhq2SSghRWyMsWZGJQdWiwkJnv3tWroq",
  "key22": "3Pj6Ep4d7d5gux552yzMo5q3ZPPEDrCLc6qqujVu7iTDdXNSXaTiZktZPRjtugfgnnPsD1yswWx8Qq7feJMeU4K4",
  "key23": "EbibiFk4sSyRePuRqLydohYGwB2ijUjuCswz1q9ejTQnb7j5DZxf1vWoUq3Fqi9Pq1ocWviRKnJC6nNZdJoeqRn",
  "key24": "2rJ5AN89XTAausCbwcmzdUu1RGA3PkbucTRJS8cbtUUm3ohMVqkbtDoZbh7ki7CKWgsK4son7U3Zz7pKTFcHnAVK"
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
