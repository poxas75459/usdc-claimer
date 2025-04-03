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
    "2zUVbjvZPityNyJQg3kyLLQPcVmxJw92xRjhwu3XYD8bat3gitMq1ssZeAmovhBkgA8MXZksnBgfPm6S14oKSayJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kQKWoote4ym9JSqKuVVbJ26QAEVdLdYV4dyybsVh7GWGbHL62mP1CQdk2dXrNR8KEumQk3PGckXXvZGNMy4KiUK",
  "key1": "5XaFgPjQfrsyyvyDXqTLDy7rihCteob8Z4wsboSiv4uiyp1Wedv46N7dLUCWLmdGETWCjcdsK4DBHgEQpoj9LZ1X",
  "key2": "2VuBi1geTNb1J3DkXkoLLmDNDFgMC3s7f42ZJkdzVH4k9PtwZbg2ggnkG9SqSp8fCAqUQZn1uwt1zNjfcAv25HKz",
  "key3": "28MADqKUsskbqu2mS94YAF6hMdMCpW22nNWYEJeznxuMT4D6uRSFpBeiFMns6BfaRZuWTYReoqsZDX6pBmcJonnf",
  "key4": "4WejHRzxCC92yzZ9qCSKBPVXKf9khNLdnjgsWDospeAFjroCokksthDPBKsrAd2NMuMJx7ECCZuowW5jNpA5HaLq",
  "key5": "2RMHz9EufJMq3jjCYzCiR2LojM1AbQkWCUojWVaBnY6BtfvxCFHoVa5tptM3bK4XU5cpxiSppFH7U2rxWHXKnotQ",
  "key6": "37bjKAfaAGKBbPrr8avBuWtrAq748xdz1T9dKbKCATUgTy7yc2osiwLmKN6SN6zhGg9jEgLepTUCJBnabXTTC5ua",
  "key7": "GdQU8UVUu5RNJMMmm7XGUAk2rbGYqkrqU15PJhR7zcby61bVj74CrFD6GK1c4PK2fQWfyqRATUmPXyr3JdNTtvB",
  "key8": "4yY6uWYc3fGHVd6etc3tVT3XhAMeDFXZcYHCcbVjszTvv6PzP59grLG1hRwXR74ysPfZXEhhsSEZLw31PvR5trjV",
  "key9": "3AdigE8rqsabqHoFUpAvYoDhfQFximNUgZjbmRLCuuug9a6Ur67BjzyTPrkbC5UW8QeaSCsbZo37LYQGG6QZ9rto",
  "key10": "2tDGR9X8oep6ts5tZVtZh1Rp5NCNScfA9swVoUiwYFA58ZLsWphvcMv6iBt2EAeZg6iwp8EEFkP55XyRoLzpFeaW",
  "key11": "64WDxy7wx4BAaW9sZ1czCfDzUXtrR2EpsdZBpZKUWd8w5VwJeFTnvJFtdm7zcUCejsKYqR9PERabWHYkYxsxjkAJ",
  "key12": "23c2fps19NnsKm6M9dYDS3zUXNX7Xdu4WVUegWi1XcNyS3rJ42mMUtZbYTpPJVMmGcTXU1KRqEQTXNC64Na6vkE4",
  "key13": "6vYJjHNKeMUGSbnFfFkgCLgJLbVhALybHpJjhS9HtFRUVqZ5XXWb8B5FV8fJUWphxgEJeNb2vANi5Rguzhp7nqH",
  "key14": "4Q57kXMfZQh2mjkYcBkzma8MdSQYS5KF6QvHB2FWxkWexQ8rj946LeihQhirYaTC6Zj57r9oGKyZfHrfBtnNVsas",
  "key15": "3pop427iXwyWH76VzeFRJyuMPSPHDS9pgamWvdQrrjbwufrC4pcm9jUTZZaYD7DZ3a5NyRx5T65BuyWZWtL49MUk",
  "key16": "SZJrhmHYaTqNv1DfRAcrTBwHEtv3BDJ4XJDr3rW2ihggSC9Z9iYSdzgRymJirY8iDAcVCRe8SaM4s7SscQ8N1sd",
  "key17": "qekaeeS6Q8816b74ihWSv9iE5kxnn5F5T3onKLMWcKs6vXP8L8w49Lhdruo9DbQA9krJhZaamig3s8nXUhYHsqW",
  "key18": "4hjtGHfxAknszrMXF3PPJqY5VAX1LAPxyQXgScGPS6EQ3EpcGkxmcwQDqJWy8TyjWneYtfamk3aBCt6rR1Y4a56w",
  "key19": "58HjgdqHw2ZP5m3n1zNaCmZBBDZtnKd6fc9LjuWwksQNVMCWNrk46k5Yvb22sn8fqQzJCiFC6rw4qgepvKB2LCBk",
  "key20": "4H73B3KoNMmh9UoKVwhZRvCXstMBm1LnAJAy1LU3v36hUJdWLnFoUZ5JkvhqLvLUAKZaNe8s2mB1xbCn11tUrSF",
  "key21": "4yVbUu8EnHgDNUgZ2qv5m9XneNDM6CR2X5CykdDjHDEbHo5db9eXtwFMwR4eSbMqK9ELXhaxVLf8GqxdmFuK1oqf",
  "key22": "43bwFkkiXJ466EhePKj7XVnQ7NF6n5iHwSE17sX7ZJ3VKPjToiWcHb3kdakonKYqdCd88Eo93pfDgobUnkr948Wt",
  "key23": "29enM4LZ1Qnh5jCHD8NRUYAJFMsHjzvPo58t6Qf3Stw9kXeEziPzTs9FmDS8B5MJ7tDxDepxBb6TmB32bMPKkJw3",
  "key24": "2PZprrbFupuWUd8LJ22xDjpJfhfoeDvWvh8cWDGdZvw9HECwb6WRLfyWmSjWikdZ6Ssu8JeSBZFA3T6YcCcDpmiC",
  "key25": "4EP1icWZ7rh5fURFpmXDPu9Mxr1TDZCHPdwtLp4S3e89mrwkwMUnJ3Nzk5L6AfK6X6RnDfbEne6sCrMwb6oauBhR",
  "key26": "275QfzoGx2W4pbv7wU4iEfQZh6kwMQS1jf6u9WeTie1AXAYrmnmPecEqfhmpjs75hU2aE34ogDNDhWZygYDJDutZ"
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
