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
    "5M5RAdp4hvAoWPjV4QtWaTHHjNcjPp4jHN7CZJgXWtz4v1TZU9EymuSwUvDK6Rvw8KV6PCxKsQu9RpkyoauMq8KP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQarwuepngYXG4QbCQNkFcB9u7puABZAwzcsbedWWbT717inysnZGbpaXKhs793Z2csHppJLquKRVkeGJ5AhwsF",
  "key1": "3s97CcKQJdzJKNbTx2V6jTuUQYNscBzzp4EsMfyycaAnwjwJ1T1QK1PwiuzzByGy3hbsLVdTXbHSGNVrEp73rZxH",
  "key2": "3KWaw2V486TXWs2tCSMg2oWnvTftbKtaTwgu7LxXNzbSHRRhW2RuSyRkhZ7DqQBKKBdoM1VqWNTojzjTm1ssbXpR",
  "key3": "28qQ8HWhAeNo2ZWpji93rJVUSruLPDNxyYEsWCZ7zKq8YNrcaDQB6pFdnM9vR9XZ8hwyFqTFKon2XU2wKBg7gLhb",
  "key4": "54TFF4qd2TT4CpbFntJ45NNzx5Pk5DC2FQbFJ6Hufnu7iAwsUDbGGmPseCLbAGEA95omvFuHXWqNZaNtakoSgw6r",
  "key5": "52owW1HoayHhMCPAApF4oKPEhcT45xDdMuQ1VyvJmNiyQi11YwbNJ3LuzdpkQiATPV3Cv2jTK5D2bpdAAnoGbDzk",
  "key6": "41bbdSw9ud8bYu4sS6FgE2YgFLEALrGPQaEQdST1igMUM2kAwFGQBsa9ErsEVE7Qnd25tZRZRADfdqgohbipKRZx",
  "key7": "LWCC5FgcP8kGSd98knm59YHnk7S6RahrAitQjVHXMEGpuPjxARKe1oixS68R2eVwfwxh7TM9e7P8sU5ruTBYJeB",
  "key8": "336meiFjMhCV7uJ1USWGdUdHcNyCoNS4QmPE57F94bGF79dNqw69uuxaRFxyTM7PTquHhc3pF6tM35UY1hihzKmY",
  "key9": "2mSuuq2TDXTHvz5JZGv9zUZ32C8LcfFvNXDvTzvdvKyhZXQT9W28ixRy5Spj2U4c3PAX9LGZvyURCwZtZB2WnXaq",
  "key10": "2ZzMcj4DU2AiaeP8iKtVsBGNEKiATXbdnuDK6MecEzykB9Gv6ZTiYRRKSJ2czXV9vNsgSkh2J9JqukokQcRjyf7L",
  "key11": "2Nmo8fj7d91h5YStAnQPpnHwMD5Hwj2NsrBR4yiLZMzcvKCS9jg1tpyKa7ngQi4WqnjTvmmZLDfQcjmZGLDWJFHr",
  "key12": "5zpEokXf7SCSogMEi71SE3AMgVENszi4bDGnRegTkQMfqxbmHgzq1JUV1pEAr4XtA6ab3i2vwcc2wMu2gjRL39J8",
  "key13": "5Dfv2FChRytS77d5oA52TeUzXfgVNui7i7bJFmiy8UwPUwAAr29MT1rBtZa1aaBFmnaMF4azgRGbS69f712yoNQw",
  "key14": "5prGnbYyPw7mbBvPnfmN1ho7iXqyir6tJzbBkmdro4981vFR1fKcDqmF8JPxwogKATnHXLPNJ86TsDvNjsBeq3sk",
  "key15": "5rHThr1Ggn3EEJdHwXF1uiedUv8LVeaa4dYvQSTRm9rQLFzCGcmyJXE5QWMhxfcKy9oviYGHreoLESdaqaHCEV68",
  "key16": "5Xt2UwDQiaQiiMJUzhMVJbSsePZdEP5kTobJ46AwxxoF7TzhBsAHJPMXQ2hSYYiEtqbchgw2tcbdNBPraUvSLF5L",
  "key17": "dMJdcsddjHtMV6Fx2qn14Utr8xLXx5gkYASfQAcNWYq3uCbef3yXHUyvGKT8aWgaZKaFoRZw9VV3tq61AtWdBF6",
  "key18": "5q7xGHTEEqBcgSHt2eAwVBSGqWink9Aou4by9jKvgYvPxh2uXYbwE47MKtMgaapWktzpgZnwAFiiBi9AgMpCLdo8",
  "key19": "HxVYL4v1McCePYmxmmNWWgNnvFmwYWsT2fBaqyzuTxKMfXraBgDcrPB8wCSgN4hTY15Je2TYB1HNM7JDF759rvD",
  "key20": "4a5vicstt7q6eRosyShmCm8gvcN4b81iuqjnn4zvMMsohgiZA4KrHxn345V5WLewhun3zXfy1CLYsqPJuezJBjzY",
  "key21": "5Zf1txCnLBNHyW3TyQCU91XJsX1WtwKH85WUDz3FYt6PZ6RkaB4JxymD1EjUhDynJeoSmZc7gawAG5Z32ySXnvut",
  "key22": "2z1H4kLVDxCmv9BiyWLEau8dqkH94koLQCP11jW69XGUr5ZFPN621GU4eZBxvAJ13dYgHsdsEXepNch5bLBqagRu",
  "key23": "4RzVGMfQ4AcCoQ8VXQT2oZnijFptHbPbXLrNBUswyrwjZPYgYEdKpvj5NjL3Ctcdvi5gVTiMg6HU9KNKJf7PoAHa",
  "key24": "2Yxh2F2S7pu2EeWKvhw8FN5P6UFjavWmbHTtJDrwyErPzxMjeg8e8TgkRHWL1jF1GaRjbnh1AUtBh7DNseBDDpgz",
  "key25": "53nirHpDRgeYDtr9k3qbtTVEvzMMqjpo1xmCA9AgZFof4AahWabUd3bx7wuyA8HtEkSe5LRjWbP9BgbxE6xWpQ4m",
  "key26": "4qB4Nr7vnGao1avU3sGwLYrGTjJHjjVzHw2gMUPoM8G9X9JeoJM5FqCsJTu5GyyBjfBZqPWe74R6s2Rfg41dzJq8",
  "key27": "fMjSq5VyKRSUsZxEoY1YSkReqdYhzQ2Q5rN173PmHhhsNoKppmS4wy5XrwCnNa3vBhNEY1QRUF4jSBUdt7Tc2E8",
  "key28": "ArBB9SxsnSW6ZWaVBNnhrQVYTvJd5NCUQ7ZA6Ep1LHho43rAtnCFLtDnNTVtX4ZUAbvtNpYvZDHh448hpQdutuU",
  "key29": "29Cs1u64T1dJrevW8UEMACqyYAKVuxTzAhSsCwPJKBVwTmh1m3iWv6fLSKPXuFRbXnr3ft27fAm9LxdFcmE6batv",
  "key30": "4bTirWqBNm5gpUd8aCRteTm9h6CVv9e11Cyi7nhvDiaKuGQ6n3j7EkEJGPy5X6FkCmGvxrTCGiRpQcWP8CADHZp7",
  "key31": "4Pi58LE6dX8FXinuhw6mSmeanasZ847f1DPKLeN9NTBNijwnLqaCQCN8mS5JoQ4gPmQdTAgs5gvrgv2dbqpe2prB",
  "key32": "5mgCRgRfMc9qhP68CzBKGLCFqTxqzmDFn69X3ezQS9iPEo8t6MHZAZqTNMkCJUemVefh8SdeM2ZanvciuwbXVMLB",
  "key33": "Wcr2ogowCey7eU7afn8WTofa1K2gBT8vD1dy3o6RKRQ2Mmf9d2ato7oYRBHkNjuai3ynWsBCkNij9cxuduwdTPc"
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
