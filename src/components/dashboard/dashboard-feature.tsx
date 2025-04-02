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
    "5BUfR6pswinJNDUc7A8wnkPRZjCqPp8oh7PRRFwrV92MfJgmA9PszmCbuiD25tDp8rmeSop8CVZ8QHE2Eu1UYsoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xehrfAm5gapBU8aWkEj35Z6PevFRWD38NdjGRTstwt6YCMjveDqTotZTcK9xrqpEXEoMzypaFDww5yH3n5YWBYb",
  "key1": "4RFEGi7zjf6Um5RZsomztTUMducgc66CuTjJ5jAFSYNwipGemRmvF4yqDN2LSzLYHBWU7m17qEzmgpTeWYjJbJwz",
  "key2": "2D1uwBkDvMkXbRMpkQccrhYL9QMhgep7bcNrZk39VpTLKdquMTLMuKoxBESCDUwfAtVVqZcsjEVfD2KTR4gfWirf",
  "key3": "2oXXc55YxYyutzLhKy12mpcJsyR9VST8Dk7gvkCYGdnxApd1pbjZE9Z9FC7PGfH3hejmYFXhZQd4Mj6iiCst6Sq6",
  "key4": "3Wt2Pr2wR3iJK6oZbAa3jHwozTc2DGvgrdBSNPRCqksbGgQYgVdZLNm1CRGdjXbz8TuQLtcdbJvSAnaFu469akKW",
  "key5": "41EkzA5RjndTAWSfsDWtMbrx38aNQGxPLLeiKNnt4Kq7RFH1NhT4QLEQmVNosE1MjN2ffPEJb73DzkXgad68MJap",
  "key6": "2M2CcQFD8bsvTXCye7Q4iZ98zns7vfHqb1NqgibL4L3bAsyYajb7WJsq1ajGL7QGxbwDtK2dq61aXKypq5kityKs",
  "key7": "3KLDcwNze6oApMYYvctrp9R4U4aeURQsnqgrjuxvsZYxEjvUENnyJkbCS9tmawnHLjC1f3WjUzwvYKHEEYyHWf9B",
  "key8": "4mG16u29QEgWvyQfR9p67c77kMyXHz5DmY6WUvdEMX8ViGTGWczMakS1P1sGfnqLpnQVB2tvnvpXScejVGSYbNXn",
  "key9": "5bUM9Tmkax4ncU2NEEvqWTgJho7BsJHuHfntPNeazUoxhy5iZ7T11kCVjEA1tnZpKQ7QVhVdhGFNH9hesrkKgrgV",
  "key10": "284ygcRgLPx1he4ToEsYyHqurWd1eTdEUfMR52Fd4Gg1sLibgALmpk4d4Lsqd9JCsZvC6ZwJE8KARq1Tv8GsqiHx",
  "key11": "TMiGmQrm5JJKKZMsQ5pzLEPxJxLcPSQ6D24riGaM3PesymPpm8iQ3g1cnNr75ZEdUHUpnBbPsXTBXdxHfRi3DwH",
  "key12": "31K4QQ7TiBARpGM5mX357YukeCyhMztnNXwsYkpR2Jk7EEvAnmE8u9SEQ5grCLvgF7nGTJjHW7xE9i5ZBX9kfp1",
  "key13": "wV9etcqvUTNUHwcVAxHc5xXWKvABYwDAqmXQdEemUUt99LJfzcKRc32EwCLdXu2to3SYsXcaq9FnMP2dES7qjdZ",
  "key14": "3y1udfbtwBuVQkYErSbdViGsfK634S8GiPN8LphAZb2DWm5hm4taisUZc3oQf8fdWjSb7p7be4VrZLcNLRLu7Pi",
  "key15": "2fagCm8eS7SmKumYdNt3GENrTaJxwgB5dMdopunrqFyaViRzGX7zLpDaGXp75GYom54YryFx73Cf1UtJDCqXDrjJ",
  "key16": "3LBnrjVibhZedu6mv1DzF5S6sjYyxSR37xPBH5b7dxA582YuLsHhF8HRcdNHLFNnscmKerLp7G8A5g3hC3tE4nPm",
  "key17": "4q9961JvftahaiyraQQ9S8APKqXLQt6U7X6P7VNy5F6XmyGHbhusVDT7ixx2N9P1rtKEKLMGRkQ1rAPLUcoE4rY7",
  "key18": "3ktNJNvMSbDB8RPUBiqZ9D5BQjexCVhvDSbPQF7J1XBeSei1XUEAGqUvovy8iLUYUaJYLtjVw66ksxdJibo5S2pD",
  "key19": "saTCoJSB9PrmC7Nw4XxFAX9495g97UQ2g6AFHKRks2Lqn9vDfQPa3bk6b67oG9d8fVC7wwjQsLvHh2orHNECfpu",
  "key20": "4GDKn8Yk3fLZQQ8Nv7i7pkugh7JpMEcFt8WsDKbBr4iheBPrHJv1HCSdF2urikJhATY6Uoeaqq6349aULzsrQz5J",
  "key21": "55r8nER5H8pKsx5ns5RSSHKdCXrev1fzDENLuScArezwsJQ9iSPiwCzwLGND4eBQuw5yQWvAFbc8SPPQKiV1FuBS",
  "key22": "2CjUVgGj6KhZiVpiHPaebhqwHZFSmoF8gb7TY1HEwp3LPAgkzbEqpNxkPpPzxM5g4KTAP2BUgySPxFjTK5Z65ZK5",
  "key23": "22WUoeifgMrFkaanYSRX5PYi9wz9oWWA9waT2vC6mPWmHqazj1bgTe54KbUFs4cCcagsd7ab4r8Fvd3JWycPVjeS",
  "key24": "51LxdY6Zmvb6N5JkhucyCnhJB21Cejbotu84v96ymb5RwWKnzdkQHNQ13LQ2x2MUvnas8pwEHt4nJ59gRbprpbji",
  "key25": "7tBWvrkaZCd4rRTsjNGcky9b6sotB1Wf7tFWbDLXiFf5D6rgfsLQao3Wc8Qu6Zxy98LLcStrnopMzb3tLVYyMhg",
  "key26": "4J2JnawEb3R7ErXQuMNzs54iNHK6fSeiXdF3SEnDqcNRvELXtzLqSjGNSG2T2asRzm8uuhhY1gbBUdy5Q8uuZxih",
  "key27": "4jzNaCNHWmzCJnZPfvMzYGab9aKrx9t6iqnq8F97aT8s8T4EGqEtwNLmZxuAio12NNDmu7hVdTAo6ZuAJqW3HHpD",
  "key28": "5wMkmk5cemSt1oGKXNUFLPWakPrQgJbC34Z2HGhKqsoHnpNDb9J62gQ93nsNYrLrAmX8PDpffuEwS8yFHjtVWufe"
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
