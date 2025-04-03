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
    "5eW3DHonoN1UDjwCCGiEQH9KK3AaKtpmRZwAnk8kgSFMcmUMsWvNLTJgvfpUtLjTpwCbKtF5jHePNTtmvcYGsJPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSANxzzMvi6EVzU6fFxCijPpQVMUK6vd2PgeBysz1J7vVwqixFR9VSZ2dRfbrhjruKMNYrbvorCtUiGGf6hkCmb",
  "key1": "65sx7np9qarEN2jZEWo8d2jko8QFyqXTKQKm6Ez53M1GDPD3FiSMgowvsfA1y2b9vxEEtqSRrDDyn1j9nx4FkzsX",
  "key2": "5xYTKY5FixZoCn88NoHie5Mojy614BVdqe4XWijfxxABCvP3nDYUgy64YYu6Eu9mX5E2DYMBLbL4aVpoH9h5wWP3",
  "key3": "4GixRs9eWTibk8W7WfJLxMSaSmbGZvVn79i3F6e8f2b1JN8kEEShinhujDtec3KkKmjuxgtdMoaVEKK1cLPsivY8",
  "key4": "3GPFc1FB9HA6SHvMhGZwm6LmbATrTAzWVumT8apqt4pM8yEXzsjSLDxqsQptnzWdCN5vpdtXzhDruaZZY2vSHeoa",
  "key5": "FEMp916425kc274W77qQibkFJnvT3sB9JdJmhzEL4jYwYVcoPpG7gMRp9rkZwCzAJQ6jxCDaCS7LGCrB4WzUZkH",
  "key6": "3a8mz1AQ2siLbKPRy73t7hmT6m4XV4NfLCRVXfvnDxXePtkXunoozQWvU3VqvctCC8KR8nPz3jtUvMAGnSDSgcjR",
  "key7": "4thZmScbW6Cs44PWjEb25CCbZupJKEDUiEbj5xQF2o1WnZg6hFfo3SvaDvkqy4onmLE4tDGjfVCV89FuneEHwgwc",
  "key8": "2TdPQQupAtLZ7vea6VY3T7AKizbBPFzX4vsxXnP5J325GUixQBcszCk1tQdbawyK3EbJv2YicqeqEkP7inDqLajT",
  "key9": "Vhsy6NZ2xy3irgGk88eZ8cPFysQQ5fuY9GytWr3xKCese4riNSBfjPFQaQLECDc9QkpbiBSjiMoVUoHU8bzUQiS",
  "key10": "3b48q4pR4qCCnMTkV2d3mURfTX1iNeWHJAwjjpD9FvGvM62ZH4SzrSmiAzYirEYi34XBgs6c27CkixyCFynCz1Eg",
  "key11": "3piUYQTADPZeJv98UQCrZkALFkB8UGyPePhRPX8TuhH63yooMwygb7ibjM22NfJd9LSgZUn18A22fZzmZnHKyobU",
  "key12": "4jdScwNBeUKs5KxwxMJr8gYzyrV6NqaSsykdXDbZpE64FhkCrhKVygT7kKFmRRkcvXRPNTDgJDLFKvaN6V2Y7HAZ",
  "key13": "6PHKsSu5MqeAiWXkgKLrEwJfUGbXusUcA4bzD9mT2Hxs9uNUCzidwnp5mGfjfyu1LcMLMwoB4SDwpfhQPezQzyE",
  "key14": "59Wyi5Lfhdj86jt2gbXEBkxhzaRUzMiNxWFW4VN9Auco4A4AVC2Xv3yy58TH2dPsitz9tAm3hsH5tEppLBAPGgKq",
  "key15": "5V4hGrrGtij2q3EUJA1TAmV5wZ7FMynj949oQL3ZT2k2nTFGARtrRxtBc8ei1bDXU39ZJj23NAiKNUoKZBbwV8of",
  "key16": "4GgjxQVCQV7gWxtsUWx7mcygn2mBkbNwcKNtfkMYhGkVAjcxeMeYm4XmtZV55qdjdmR5AVpJVLx6UXoKtQ3ukQTD",
  "key17": "33G2ox1vnjUX3avgcWLUc9LsAYLYzgDMfi4ssMFmoJa2ZGKDzF3JEHdmf82Z6S2Qi9Vpa13ZFT3bcgcozeknD8wK",
  "key18": "5TpqHrRxMLmEpuKw7zdHT424QkSsHV619WbV6fhDP9aEdHMdewTAa8Kt8g6ZpMuLksqy29Q9ykTxKfMmyaWFZ7vd",
  "key19": "3Nn9LdfRrDKVDcgcvBudtJvMaNj9BCNpNcKP8qsEsZm7iLaXQ5FYa1t4YtNKAiK2eYZkqan2biEU4BkgW1DFFxTA",
  "key20": "gaWKf3pc6yJ4bJyZoWGWkeqjaQ84Bx7KdQGy8ZVD1vKwvY71bzKoFUhwRr5ftgWNy8Q9A3J2uQVSCDyqYM96TZn",
  "key21": "1kQwn8n83iY3GsiP1BMhC8KDEkaxReng8ABTTXQgP7a4tZ42dCxUSJx66Zf73rmuSf8FR83xqUmM37ZyTuPMtZJ",
  "key22": "5Dp8qyAdmnC9S5qvnMW4z4SPrApdqz1yEerLTX5An8exHD5brfEc9yR5nwMJR6MCDPFZJbPQmfgBwQEyfJATuK45",
  "key23": "2QP1tbfcrWcW2NhWcacMRo92Ltpvs6z7h6hKekfx4J25PixCGc2nvN2PpRNVxSPRpxEd1GzeNMS3mtu2dXR7JQs5",
  "key24": "3udjEtUA9UgvEx26eURGmc2M9T2jPZk7rNwZ1RQGtVDnWbmRdsXVTFZS4Nz9aqd95yxi5hPvUNU5GYZCnM32rVzw",
  "key25": "5ng2TNKpar5kzH5fACAtBSNr82cwD38UiSYSmQBdHHFh9rqTkWHhBN8UEurxFvsmB5qboMYQdwC3d2HJdBBKLAyi",
  "key26": "2kLovQ5wwi6GDonkUT9VCdihP7wBM17dXx44RqDdm1KPqMA87bwUp76L5jFJYwhURKYrqCnLRWXRTL4ZjGSEnbqW",
  "key27": "4CvXVmH9JR6MBBwJA4ygriDmo9RizrqHRLZBwmw4wHb4ecwgq4AKaW6jGDXGYa6eJm6N2wDSDPeSVStDFvBSRceS"
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
