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
    "3xn33NYHXkvmjNxh8eN8EoP3EYMVGD8cesavNsWvJnXoSiYtxGVCfsPe3Cys8kJF2VEfGJCK4ViGDmXRgDC3As3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gr93iCXi9ap7t6jXd7EapYTTBbFdSmmXp6YFBLozrQQHmgfNAWysnB1fc1PQvVmaN7g4FnRbc2FkND1hzTmAvuW",
  "key1": "49eVpAquDYmQYXiuJ5vBDoJmTeMn67FyMtuy7Mxo25ZWLQz4hMWHHNqSetHxWfY6ZPXX6xx8x81EoZNfwQaQbLdw",
  "key2": "45V5aWVxraN1qJzQfqMiH8ub618UGWRpcdjbZsPCRggH9HxaqU1NUMD6AqLwsiPbB9bAMAQG6RS4XgFVmFMnWdsC",
  "key3": "3EUimsxYYTkbhrR6nvNcq4CSiLj8cBW7XGdGi5GcBbWNtic6yTxYQP8jtKETeswqtsqmj1fyipTJMxnkfkJR7Z6J",
  "key4": "2tdmkzZXS8P4ixHxmwEGLq2F6VoroZEHwMUyAhkNPz9cH4dyJsUYikUMxEFP1V1486DAEnxBd1FcFv6dPiYttqW4",
  "key5": "iEL71xeHvUprtxPNss3hZftai97dVa4iLZ1QUrgATLHNK4i1Eez1wX43VehFTFPNVmCPxszWrabjtvAQetmALA7",
  "key6": "3hWSu6mQ79U8TdFKfY93WTz9NzLf8QYxKGS84gWo8FxFdcnh53rh3hRXVSyVFRgabPeWkAjQ87X68DhxpP653Jv",
  "key7": "XXgG4aewQw9pscgeUsBxSDCRhewtr7gkfckmLzb82DQze8nigZDvc1wUen7suvybK5oxU42CDMeicFF6uebWGXJ",
  "key8": "3eoWx9MX3EhKSdE5DT4dJsbRYf3s3XdeiqX4JHJJqWU9pe2RW9to47MqSZ2mrTwjtHvgrU3UvcnwMyc8k6iftncd",
  "key9": "333CJ9Uf89hpTPGvMQxHq3W2UmrE4iSbfd41xZAY2TsYrqFe8WNALsnszb5jBewbxRsUrtFXMVTcpUKH2xRrNTGF",
  "key10": "4KbGHm9wU6QxFCDZzmAJMibmb9sQ1exfctwsGWwJ5NFCvb3pWcnPhigPJbFBGwXZaFLZp3K628DmqfXDpPYkmQ2c",
  "key11": "5Jvw1uczrS5vJQDc8X3x1rEMipzKVy1G2Xp1Vxy9GULn6ohsoYEHPzntbgrLnJhPovJJfrtCijZMro3LfiGc9zpy",
  "key12": "rocda9E7aeZbcqU3rrEc6w617VuaqjHbqfShG8HTcyk2PRfwm7ypFnoX1SGv76UfPNJ8rXcZMhLot1EWYJ7SAzk",
  "key13": "5Wd3yKnnQ8iePvFQeoCGvcg1bDeZENRrGFtTLXu8HEz92xhu8HrzP8S8y9vqSMQBsBroXHi1ccPywXqEbZRcNgWR",
  "key14": "4dLudTXUQSbEcMbfior2mBZNWY3vDrggmAzytrBvar4rqVNwSYwPVKicomzq5a3MKG2oYEjAhsBCC83u2oBbDYHC",
  "key15": "5te3HveVbvh6TpAya9Lkx5Kw8wA8Kt8XATyXMFHRs4KGQjpw4zJqG8u1QRvKy7ojMTvwsZbUUpYGzDLo4Gm2tNuu",
  "key16": "uW4DsDe9jHZaW1ZC1zTvTJdyWXuedAvr4tdqJuRcfPu7eick8S9DHiEWQLSZiyQaCvRc52TRvDDaPqV6mBRP3en",
  "key17": "3b7rJg4D3zpR6MsvKzkS3CQYzJ8x5CosbUiJuq71tbDdpzGh4YAPrthBAPQxaiJLUTFAhABCA1WedndWszWqJb1v",
  "key18": "RNRuR5LEVeHzPz2Prho5vb7i4FeUQot4c3SN744D7RVtsSVobx6qsWqR9zCsZS2kWSJTfmTqsG4EogHUg7Q9URT",
  "key19": "dXnSZPsAmMTGun2SfN6yhcjire39qAwaMfZ7ub3s2no47yfT1aeoViooWoQQ76tihoPj2h6ZKs1Vuf4fFQtGQ4R",
  "key20": "2FzZijsw3n3mq5H21VfhkYCBTBWAP2U7uB6KaoN8HWjHnDn2RpYBsSC63uFoftyFTtynMWiduRvtr2dKPcMEuieb",
  "key21": "56jHx1am9CrPJPTBgLnWnst9XySUifk3f63nK22v9ZmWGtRh7ugv9xY4cTDN5vyVtGPgTdE4Tm25U7LfzbZYJmHv",
  "key22": "2q77PFBNFsCEmwaRKBNpxMBQ947GMbMepwTL2JRdq346dNR23q3oipRcxzdzsPuraXjr194hdeaZ7Guvmy4zGMaz",
  "key23": "Fo5XoSZWPa5YSxqtPVJUq54d7vpGw7TpWKs43w1ea52hhbzMjwp9kFtMJXgqbjvthdqZNbhzq82VSqsf8k2k5nP",
  "key24": "aGHfwEXzWY9zb6pcgkbgoajSd3sTGpSyXKXumHdPwW5jLCtqmXo5xMJUN1rNnxmSMnEYMinJn1V34yMXyfEqXJh",
  "key25": "4QUwWuSmbWvtE2Q1ymmEn9VS4eajf1g29QfMHLBv1rdfQfccfodWK9GiV9eJDcdDf8h565zAthMXpqRUPYoR2pjn",
  "key26": "5QGyydzWPgV2vNMsdt1BJ3RxvSV3n7qMmQkr4AJzbNQo8aXcvBkb3sd73MsmMGfZTRfUxryj7HZw5BGqqB1eV6aB",
  "key27": "4rJvCWS9HnvaxXQXwK6x4VdQN9eHCyZeQnvdUMgJdTNguhgTsbT5cgi9JoUEuuANuDzpVwk3Hi3XnvzmKV5j94oh",
  "key28": "2KNapbNkMuUv85LCiVszPmjFd2x2asyJX9k4uHxpc4Gb7t5MdYjnmm9Xj7exRVeXMX2VUBf97nv6zCtZu9czuYSy",
  "key29": "2s2aUnEpoZRrBdmbegP8Q28hN6FHsMXmemCWcM71EhYJJKMgqHoK6jWjL3MZNMJAC3ifQpHCsojRkAkRxA3jKFDc"
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
