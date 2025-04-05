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
    "4GdoKZYY5d56WiRY5bpqTz2bJp1heYVVkkTenC6ZQWd3aZDzcCAUe6P2Qy6ZzBuJPPWnKSGCv4CPgxE7isESEzZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCp74osb9qf6DXpaujBNVHRSq4Y5vfdiUEApM5ucS9oh8paDnkJrGF7bXfjT3eE9P2dctPxgyHgUGPRpUe5BQgW",
  "key1": "AgsWV9m54yxnCDfRgDebgERixYovjA51S9oDeuQ6SjfZond8ntxLp6mmXzNgTW3xPTDREkXQfd8u2MHezVkC3KC",
  "key2": "3daqVkm4yrZTSKnbd4njKpdyBvURVMKQ8JBoUAhuguV5EBxq7RpunfRy3QdMhp6vEsoLi2VJimkVwxmV5NGKgQWc",
  "key3": "3orCUdHJnkujNk7D69V6to2YaZvsHMxgD2RKCoioxuYaHBQ2xKaxLeyBm4dkRzZwQAFJnfAdj7dQj2tjX6s5hLcU",
  "key4": "4HQpM1j6g2CEp4e2zNvPRXXLZTcz1zaNraPzJyJwV2MJoc1mL16s2F4rcyjYQqyAsaxW3cTzvjDPQiXjVr8CpeVd",
  "key5": "2Ze2gvTACKBoL8BQFapeH2mLAUhJRanPZB9QTeg6SjwzH27Xav4TCWtHgQsZoFBqXwJPZe2aZUpcaq4pKidT4ES2",
  "key6": "1QCSxEhXA6o2VrWzYnDWM1viuMMS1NJBES5ZFdVTmoGxS56uJv1GT8appjW4xz4zPuo295SUnmTRebUQ2nidWxQ",
  "key7": "2fCq6Qx3gVgVFXWEoqP5mkTyLvVtQCTyaWrhxnFdFidCvQYo5JYuU93b1skk9JpApeULasDy66qDSnqgiDB3fZNc",
  "key8": "2xzcYV19xHtGHPczhztST6f6oWFS38TxuntfxQjVDe54UjvC6781SUMJMbcwogyphwCVSGGKrKz1DfQ6BcXuX5nq",
  "key9": "4NV28zMdZSAJ7XmKKby2q89jXetf6EhR6LoTJUCm9w82z6C84A1hQNZ37XAoB4gkboo7i3wwQtPxe5jN3cVQDJRM",
  "key10": "TNEhxSU7Ek4qqVb9cvMoeyVpMwV1qK2zxtZeEiqpvN313VV4WsyuqCZUUMzp78HP8FDLrtEQWK4W1VGNLSxAF3i",
  "key11": "3T8b4g4HNAswmHCf3p5aARR7Tt4LqnBhr5kmhs6MqKk6NZHtZ85SpNfWB6iGuF7GNV4q63qPozfmmqjrbqRxu86a",
  "key12": "44CzRrPzK8VaDVenWcb61jBa5wo1Tpaak3ws9LAscbXSfVLgFqaDvLyqF643MTeC1bDSM2pyZ87VevoXK4W5bSw",
  "key13": "YBrAdqYzDkftK7E2jatUKUeZct3sWWZk7kdhLTHF4XU8p7fEAKbrtskB3QNe2oA3EMgBFSe8Wvmu9WZygnTk5sG",
  "key14": "4rRdyYePsqWvD5czxR1uJkRG76evne43zH8i6Kg85omXhW6HreeGNEaEFXi4iZsCWE2CqYh3Sw1ihR6QuEKp6469",
  "key15": "wjA9AsnrQpeFWZ1MdZ9FDUVbGiuaGUWCAHoXjxnoNZpyHGJx3eoEQ8Zmh8EK8ZwVyeQGoAiGca9cM2YmebpsdHN",
  "key16": "3EBdkuRnqHhzgm7HiwBwpVCxyaPZYTJcvYnjKBMbVGBG6WEGKQvukBfTEd9h925fXxsE7jvq9p4KcLyBhYXACd9k",
  "key17": "wLNZELqxBjQGJU5RBDVQqd2LxFQchDxxz7gninJVka1gJXAWhjakxYdAPPPvkR6mMsM4n71h6u7JUGoF1QHGy6T",
  "key18": "PcurY4noH24xp3GVXxsyqZ57g4fk4hFz6rEJ1PnyyMf5PsuAoFwPSWvRPPArheXoWJApzzJKCrjudQYtNG8ECka",
  "key19": "MsV4mVMvBJEki1QnhAAGCmqFE5a6RsVZDxRx56XpcxHaJxPqLcVMGRRU4m5Ea3EEqFo5NuFC7irtLydWzsfJzfe",
  "key20": "4HZykwMhiMxu7gC3WnpU1mcKinRbNPn4v9TCVsK4FAQpepViUy6w4fZcV3gM52bQ8ZSpvvDHbeRtvu29CWChhaT8",
  "key21": "od28RpjMTtNDAS2CPjNNuWBAiTtwCRSFvfFgGsjwCFVpmkBemWY2R5PYzHZaoLpQaaS7ykeTWU82YV7mQwdH9Gv",
  "key22": "jJwkEShV66VQr9t3cVWv65ERDESK4QZJKDphtM1xosP2bRLGWdQzqKp62agrVBRKkLszwEnEyyQHMTjnfw167dF",
  "key23": "2GK215E8SA63Ps5CAjbxiePWV37zKjD9VZMZcu8xKF1rfXMyd64jGBwtgaCLSidXCc8nmhFbw85YWXauw14p6GrU",
  "key24": "2P22CgCxKLbYTGHgAaZ12AnwiBBCQrJozaQ7KWMWQRKDHhx8shncCi2BoxJBKVkCwnSew5NAhyscKuNYpiCH9LUx",
  "key25": "3RfVJjBFdKTBYMkFqX461XzyreR4TAVoVfjKw3PNiiH82KPucKvCEk1MPbqhz3aSaq11w4ABWnCjBwQ985WdeRrY",
  "key26": "4jhYMLDpQwfb2qxywpKN7S2k1dHn6ZEgX9YDAFvX2FKcSiAU5tkmDS4mVriKwqKdS37UtitWcW6PmEnpscseeC4h",
  "key27": "5qffSqjsjLtvnWMzF1bZKChz1VoQ5Jv1cUc2KgxcpZogJ8RaPWt6tYpGtHXbuXYDGtGtkjxxZWsh13fdfeiirQCQ"
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
