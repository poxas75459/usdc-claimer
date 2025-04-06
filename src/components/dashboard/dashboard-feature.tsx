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
    "3hjvDtKn8RyE2k2jUwf3fMuwJV1vNf2eDATAS72MZKWCU64et1KyoHcoUo5AZHNo2QSxmthoYYqj6QbGmToo2s2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mNYycpusUJKnS81cDGAsgMNTX6a2vJCvta2fjGC8xpLKpRTjkafBzXkYEdYoeeGCViezqAysNcN1iESMBpH688X",
  "key1": "3bzZo1dCfTVkVb9x19rxHqcB9V6zoRn2nPuqpcU6FcBMYtemLz8JFcEWrkt9oc4hjeCCkicFhwhNg7U4Sf42Y46x",
  "key2": "5SY6fLZ5qf4R3a5seDvyhKn1ZHfUNA6MkXdikFFvmMRmQUDXjkU9t1Qf9C1zTaajFgo4cFnQ8WfzJnKFUAxjr1oh",
  "key3": "2Z3w7mvkiE7nzs2DqQ4runz5N4qDsGUekvaAg8hsVbAJoZ6k4bGG2caKuCQ1x36VSReqiQ29jJ3BmEtKXT6vT2Tk",
  "key4": "cxjrCdW1M2fj6sGq13oZhic2Tt1b4ptGoPg2te8S7CRa34WWAYKFCNr9WfanKMKcouu1VMGwD1eQqnpCtHqwbqU",
  "key5": "3Tf9eTrBjdPiLB8SvHdHLn5dzcgMM5Me4qduLQzNYEqcoegRugqcMz6GHpMBh1xoPNBhYw32MHFuZRZJye99Cuxq",
  "key6": "22C2GXH2X7H6MtMYgqunEwS5r5KQ79hhDpCdWJF8Y3yiRwanTrNthDt1SEtxSTRPwTt4LSk7Fng94Tvk6QkjSWco",
  "key7": "H8nU6FXNpr5UJMDpSLpaF22sNqPmeEcVPpFcPWK2uzYgyV6vb7QjcdRivJ5rrZ2o46Nhe3f8yGWwsfeH5musJfh",
  "key8": "5VstyeUkjK8kfVAbk4d5WBoEfdGE3B2NFsJtCtaRD5yvpfX73VbW1ZYwfqv7gADc7MUUgxF6eSeCnNAb3EL7Xa8z",
  "key9": "3SKN6M39pwE53wRUEuAGPYg9uA9tdieh98Be6GpSarU119yijXDjGkUynS3euyFALweTgXpTnmv9h6P3UCd45Qph",
  "key10": "5bgftaHeY4bDR5oZnytb8tBJWpqawA1gTXtifqsyMqXUbwT2xuThk9h6qvQr9R4kM6jeVHRiM9mSXjSRavxQud4c",
  "key11": "JQuBcSKvi2ZSSwrgxj6zuiGSeYsa7Q7eRT8khCVENSU7MsnrNUQ3GH8bbLWnJnV55G59Z2MFFGoirzKtum6UfL4",
  "key12": "5bLZK3H1teG9wmA7y7vC1RWeUAEgJ4R52EHLbejgEkPHVpB3T956HvvwDgqu6X6sqv3p7izWBHXX1yMPXZUr2LoD",
  "key13": "5iRrX9sjNxRLkwuGJSkUamzU3JYPmTzYAheDdHoEBBAMvsc2nGeMLvk7npX2jmPFFRkJxkQxUKsXEdU7CK3sPNMB",
  "key14": "N8NjigVEcpHciTzMyctndCXVbNRSwTqqYMwcX2bRwT3PD4DQ8k4xy5U6fDMAMhNsfudr9cwCM2ZwQoBcianZDaw",
  "key15": "4rfcNTovRCn3M2Q7bfNXuZNhhpDDkHo23SFx4GctMScb886VkCEfAUWAtHvUXA7f3NNtkqpsZJcdwYEAhQw89Bze",
  "key16": "5GEbhDTumnvpGRr3a4edRGnG28ZTaSpVVY8SiAJV6otJLM5ev3B16RVbHgcipCa1kY24Gwk1qVw4TsQaMUo3Fmtf",
  "key17": "34pNbGrsMGN7pmg5pkHy1Aoz9YPHihoLCiA4gie4MXbYxyLsJcXjaMFuYuSkV2cF7basLPvy6T3TARZm7gsihkaX",
  "key18": "4PnaPTuHPpgMzZvtFTRTBYaxd4r1N2xXHG6dBKmxBHU9yE7RfbHpApjwyjWvfzCJJ8Pk1Us5ah1MCmCSFeQBXEaK",
  "key19": "43YjXdEyTogJHQdAKvxPRkZKjUFmYwqPpTEts46LNHfYv8st3SHETLFqBZacSRBTCL2XB6xYzkMQrcJJy1DVgJoX",
  "key20": "3u8Z4ua9vttHzSn1gayyFuCQPH3Tu9obUC9Cf3wV8SUh8DgBDyH62jFFDb8K9dPvXSqD9eaDyTokY4SuVbd3f4W4",
  "key21": "2YH9NageKy3gxpG3dxEuAk7dbbZnc2NBxeUCNmUDLpZNAVD9bZijg6BE5dbQuEajjcMAZucii2Epf1DvSuz1vigC",
  "key22": "2neKL3UQ5yt4kmiotQthvyN9kdEtaJQBm6cvww5Zqwi3VzFJ6hitb5mMfnRHRbHaM4MRrmFapnEruaUPP4AeFqPn",
  "key23": "4Z2wHAzTU92sZo84Lv85H1mEBqFJGqPXTXLPozAPkRvv3ccUcB5VAkThXDE1WQD5cFzj5cpH7aLUS5RCumXirG4d",
  "key24": "5u19H8mzecC1FpZ2G2h15Vc6rWMZ7Ne32p6v4XUagRCpjapsf3xPUH1M2QZJKXtNRJDxWEpbWz7EsHexaX4M3QRu",
  "key25": "2mep6yHu2iM7BM1cZfdWHh92n1oskxGNR4fFvtfkyLHt77mqTt53jRGiy1Ng83LoPTMec5wwFTBepoSLNfYSaCx2",
  "key26": "4oboFoVUidbSpiwzEviQ91LCFzEKuM7nPjetuszFXKo1KXyzHPk3ox8q1mHumz6pWcoWRueJAAkMdM4BokskGUJt",
  "key27": "4H4R2H6pAVEpAGUcsMsRjJzkSznzjgJGWbt4o5gdEeS4SufDDDdPrK7Hpy8yi69ooHVahZQwLaHGzXRg78SDFxKN"
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
