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
    "5dEPU6z4HYMw3MSKzkrfWA8dKWs5UtYozdZ25h4LRNCACMYwV1HoePbU1KuJpFnMAvYcZC5avNPQGrP4FicSeyeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ap1AtF6fEaECyNXBjSzdHX77x3mfRuDNQCuWsQiGfFZ49qv5uyhmgiKAKHxeihKUW1qjr1WRDpgz8D7CdwtTvNi",
  "key1": "3zLJN75aNPdzNJszNBjvb6MJNRZupYTA913PQFEVtrmVnJVogKGWw3A5QDoX7eQVn4yGacQoKHK99XCo5p7uTGD6",
  "key2": "5vieGSKT2BmfRDbKxQyb3BR143z8QpnmGLyVuVYhz65vyuta8xvScx54sm7n9DjFPvSv5kMsMR5u6h4ChZKjk1D9",
  "key3": "EfCTCRau4s6ewkA9Efd2tpjUWfkuxZhP6H6RAEfDZokqJRFJBVBBQwecGbkMeiFpx3HBcVHU4PW5DYak8BLvSLC",
  "key4": "4ZV8UAitmJjrckgyacMtgpruHdQz2KoaLsbn5gJj42uBCNr2cpPeSC3Q9mUmh29Ua7jvMSHvHBwmAFbLVq11iCR9",
  "key5": "3o2raYNfEm6JLPH2x7cg9mn4aTxffvqCM5YX2BJZyczwGyDdJjUrQXCcE2PtotMfTVvk87rLS7p2R4Y8dTrFgCbr",
  "key6": "2MyxpDUarDmsYu1QYKRpFWBUHpeo6TfcydFv1KjT5NpW9emrz4nsn4Bt2JaVQ64yozDCBGonic4inWHXKZ5kYJPz",
  "key7": "38ZAQ6QeptE6AaZW44qyEG1Rrcp15om8sWTshfaHzJJFFEcAGMCF21eKNDUQbAdkDKqvpzzKmTwdrU7AUW3ef1nA",
  "key8": "6VmYaMBnT76SKEa6v6bdCggHh7kxzyHFg23tz9p6HoAZeHo35dakk472t9CddSUtXtDYzEFNtqYJWUzRWLaLvpv",
  "key9": "DjAkxstwPMb31kdrxT4Vx7Y1x18mE9JopvkmU8h8mx2KmWEArDc1E3V3hUFM3kpNwQGarcdiUpiyxwaKfqy4GV2",
  "key10": "vEV4s2f6vFUbKMv44ppgptUZkyepoUUCFgdGDR6k6S2HFR2ojUATY2Q1yCPYszarZXkAFtmiWEL2ChsoZ1ptuAh",
  "key11": "4iZWKgDo1L3dPfGCHueR3vYX5hEFnmxunpc1CDGKaFmAiQ1qf4JMU6aYZ5hb7hJee2izb1JiUmYh7GR76vhz39zn",
  "key12": "5VBLNwRgcHCamyLw2EvBUFhcT3nTLgcxNzhEkFc76P1FU4at4Y2TDajvQnE7iwD9R8mFppk47RzZRzAHhan9bM95",
  "key13": "3MtnioNi1sqSBFnnMQxkc9hQ6HH3BYfQGYLhQb28z5dfxhaTjenN7TKqa4ViEui92mV5z4hpkYZbSTWqvJpgJ89w",
  "key14": "3iqFFbcRAnDT2DfDLeUsu3ZBbRTpNQtY7gAffMgij7Y4UDCmNXGWwQhVHKP3gXhGhu8dw8j5xtyvJogDMKvUQWBf",
  "key15": "5CtBhZA6Aso3nGLmEJiEvmE9CZ252A1LKecECJsH74JWyndZBghmpBTsgg87BJX9co4oYVZKK2hcxdTg6zfu4fds",
  "key16": "33kWrbHVenNU6WnJ8vFoj3ujrfSoEYbPCeKsNRS1yEvvfurvesiCkqThmBvmUGcZPpDdpVxEsdUUMu3v2nJEvBLx",
  "key17": "8UUx1DcCpXzhrfwCHzFzE8qpxipPKwHdjYTqiWhtV2hZ5MtsbJ4DLWudZnDZ8qTsJzYFNrtfZTvFbKNNX5KbXZ9",
  "key18": "5rVmhcoYYfV6ARmfnL4F2B3SCM2iKzmnbPQFauxcEpcQbfSAsjL2wHZr6fJW4sHA2J4NBzCucH6rwad9LorTNuyi",
  "key19": "3B5XRcqqpHdfRvZD8anumzW3mDTL4Qmpeh9kyB3R3w3i8MZPgHzrg9YmfdYHyXMANtffmEjgN83XHoE9GSjdJucA",
  "key20": "ztwvty8kV8jDZ1TMffREVUhYMdEhVy8Nbx8bYSaLMYjGkon74FMzyAok7m3ryMoa761anF5tyds4BALRfHiyWnG",
  "key21": "47J4AcfkuJP8vtzfFYEoFZH7HbQVpQgyJsAS6BxQ2qgG4mz72G8qLtxopP9zCPpPABaVsEsNLZma18bg2CfYGtic",
  "key22": "49ovMTY42CG6z4puAsHULxhg6rmaHM5mPkmAVPTRDWTEUSj8BcHemCi2sQuEKBwgHYJU3Pn6wU349LWjXKghKKfD",
  "key23": "4NvZe6FuWBrYYJ7Y1AftD5PoXJsb74v33dy2McDZqishesrhA7YvcK7c26NGVrWGA1Fxr9sFVyv6g4iQLkeDo3cG",
  "key24": "gNSpY1VqjmhxrwuYQodYt4MZBESixRo9tdiJV4c1LinJgAA6Rm4TgYfgHomhx2HVz69YCkGAPQZCSwKpUdAiqrg",
  "key25": "2P5p6pH3J18gLEFqnexXEdmE9Qf4fhhUm9hne2rdWK9XJyGFKcvsuXB3WfHD9kNnZXyhpg9UGRkQMo4UJk6tRwVY",
  "key26": "5DRoZ2ovXDfkU4zeE1JbGV2DoMvGmJWgFpoM4qSBNbL89dT5ez7J8J3PPeu3S3XahESK7oqcss4M38gi73N9APS3",
  "key27": "5t5hXxC6iEn7X1Nc849CkdUYueTtqaoBoAxJbZwqt35tefDkD3xbUs1JgZWdUFcC8HHmDZU1kopbn1ZD5cDfL672",
  "key28": "2PfEK4bgyBjGiDmWNrAk4u7uCxy4kjHeTrCBqWZqCBex4p58QVAXvCr4jCyF3qWSaiAZkUAGc2gmtah3RCjBgwHJ"
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
