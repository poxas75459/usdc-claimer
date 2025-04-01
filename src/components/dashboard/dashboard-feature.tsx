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
    "4bhbVHvZgdws6EvDus3ZLsnBbzcGMYboJ5DweBQqhVbjeh29smM4VpD3bnc6fYz8dx9UhtcKvSNWM8jFRuf8mtrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnWHcv8zVDjT7W68dDpr9GzFNaiWs75HZhv3n49hZ8aTCZm5HiHKcwkWkm9HZWCRaNeTEwRBJvyEQwCK8nvsGBf",
  "key1": "5braVusqQsVCvEUabchsLbNqwKMYB9965oSdkFbEeGWJmJTUWnuG1VnBbCAxUX29f1vvtzQcqwFdKwCsEoCdsAfK",
  "key2": "3nZ97eFt1xWQxDpAZ2wzhCBaDUGyoWrSDJW9BMFnXJ14S6omKkNx7cPn1cjCLobto1zC1JF8T6o6ynwYZZvjBed3",
  "key3": "7DjSKDyfdLapgkVtbSFTL6qo3dY25PSRgVxh3nAKRMj2PGRqg8Jk4ysjsDGQgNsHQMYiNemCpuymhLnaCUdW5SJ",
  "key4": "41QA9aKfiDrd25HFHGPAHQcduCmMPKn3EnGf7A31cGhdUUrthEn6Zqut4eFUEyqxrwa78qGSzDQ5eeJakpd5hKrq",
  "key5": "2x5iGP23qsTy3PvHFH8Bnbu4bJJzYmKJDNjKiXrLt6bMVWqdvPeVSNStZ5vbA1VkbwmcurkAZkg7i6U9KE99EgHK",
  "key6": "4t9RTr3GrCkKzXZ9K2S3JATPZB36UBtBoijWdDAEbVtRWvc62tF7UJtdrURRmyHJc7zYxQf4yVb9xcKt7WZERcGW",
  "key7": "2ghPmHsQuFos8KkRnJTEzEUb61yaf9TrU8wvtMLZxGk49LiunjyMfYQpFfDmvnSKiLCfwozVeQi4GzGfVZbBPFvH",
  "key8": "4z3cKvgWKBQPA53b62Es4gH3BWrPvb6wLZCEQYXuFdwmar5xdFaVLJHtSGcq53n3Bc8FRhQKD97F8FKid4NNH5vk",
  "key9": "JmYp6Y9bzQib3iMmsBaAg3qo8NCuNVuCYNaBf8JR9iYM4jP5eUymFUeW2bvgEjdqgTSgPnGik4xrVP2DfhW94du",
  "key10": "63mruPQuQRrgpNhTTq368VKF4Sj65RBEoBe9BmNRqoRih3x8EJqQEiRhvuoewf5bHy3x1cYA3KzQTk1TdvpMpaVU",
  "key11": "3Cfc2sn18j4cYa5mrj5FCHcdGTmCQwxkwkJDJ9636YzS4gyED67ANGumTkNAwHZkuEwZnZKcUv6wjpaFH43SwS94",
  "key12": "2jWEALvBYLmBhN6UYV3Gefieymtt4UVqESq4Cvrs5AkDhp5XAbPz8YXbkHEpUkSJnme9A8g4WR2yTCQKMA385bBB",
  "key13": "47A3yQQZw4VrTcPtcenERZ9HCehykX5SXP2qxyVa9oyKYUKEVkCMDgqp2B1TDwKnHrfwQBAQYYXF4UYmBpYcxmHL",
  "key14": "3zPbJdnDHSnc51wtxcgRUr7rDuhJQMHDznH9tyTjxn5v9RhpmzYgfGvRL6GXVxe63PcBBUHwqoFU5XoYuzZNVsCZ",
  "key15": "3SxL2UqKCfNVZSDDqSpw8aWxxyAQstPEPZzv3sVPhFJwnmA2UrBwsipn2WPFCpkvfwugRPeqzBdyaLAtkMTepaqM",
  "key16": "5YouyLRtaCdQQ7mEiYCGq7pqoBzU56xkMycXXizAPkG42KqEb8Cjj9YaVdKbz8GLZ6GVc67k76G2XHjSrb3wSpnm",
  "key17": "2zvpDpJxNP8onMng1tKaxkfbzQFBpz4gjssFa6Xfw1jpTh7rQu3jjksoRZkeVPZ9CD6md88n5FEifwqcV1iFSfvU",
  "key18": "RLLXawS2KyxmnGKrDkGRW1LqzxVDrJ96wn58JT1ZgCLWcMMqVPXKhJKaP9tzDuAKZjhb9PoHxrHWBsTnPaGGB7y",
  "key19": "2b2TEveSArfxeDwCuYjMrHgk5TEEuMe7eb7wzwuqMNXPuuFm99zbmkZ2qF6uVxtiGimGNGxhSWSkKDoPfcE9zWbK",
  "key20": "35jDVoxJcHpKZtuNVmq8t5TBzWuYgph2Wee9dsFYqyVGWF6Ju1kesypBhB3uUF5QSpezrFeyfQ4aTKNirth5aPb8",
  "key21": "kPtnVw9qocvPZyEta5neAWqGLY1ZYEuzvNCwRYJgH6QZ1HyxLGhTS5vPMrxmKJ1z5qxxhY3YHagQtJZwkThaExH",
  "key22": "2ZaWsxFhZ3EvMmT4HZJaYgp9FrN7LyoUjroEnYE7ykH8hBoxc91U3owLT5qPkLiKPZo5hXjV7uMo1h5BD4CpUrz5",
  "key23": "5rezRtCmSGjKDj7zTvM1tXCq92ACeoqhEGQ1vWCL5hNUrJgP3sjEzWtZPbunWn6i7WNEYGxVrbAYPURj1zH9zg17",
  "key24": "5W3NtQQ8DEuKRRkkPWg9MCj9SoE7moiVoCTC5XFHNMWcztnuBCwjVG43DVELFFyHpqcv48Hj12mfuq7rGveiRZTQ",
  "key25": "2qeHZc8LEEKZmYrVRhzbYN223TAGhH5rSzChXBeooaEBTAepXC9D33sVTRC97bD8DMoERPUVNpTcVDbpymGJpBLT",
  "key26": "5adNwB13FMwkQRSSJ35FxoUFBbaS7iTdPwdG9EFdMYYnj7HVvU6b3t3iog4vWRYd5goKNPCY8xbC7tPGLNS6CVXo",
  "key27": "UUV3LQU5W1cRiMruGXW96zxmNr5znNFJu2ciHbxtTcVakm2ko6EGeAjKNoX3R7Fq8kMYqfEaZ2vkSioo1S7EESV"
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
