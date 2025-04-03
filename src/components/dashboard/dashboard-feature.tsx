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
    "3oQ4qejjd3iTTskqJvVAjojWes1o219FYwhvU6ya8wcsQpcC7mb6QA3pT9h7rRCfp8UaXVQRziLhUT9EFHpUskk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxZexU5X3oxsq2bbmP3uQjny2aWEPZSLQajbDLWmXXzDjkZBbdk2QsgdmNndxrL7VnXxULYBo5dxZMYnu6Ndf4m",
  "key1": "3Uet1rt9tzAjHEvNFFCaqjLAfFyHzkduef6MDHKHJPA22TNF2LtFDxqtNxJQxY81ixqQ43xCnhp8EERkNmipbnao",
  "key2": "5nwfKThwh1ukfoj7dzzHcuaXiAvSMdANd1BLhwgt6VS7fp5vF5jhHFjkZEY8a2sup5SBzjUchxvhxmLLfhDED2yb",
  "key3": "65t4t1pGE8PwAMJc326ZuymDeqU22ARk1uLFvDaftMBgZPT4Tde2BVFxzdE4h5hGR2LsgDnuTn4PCq1rkwwHs6sM",
  "key4": "47XGqHvLQvbyuGkodvAmRQHqtXmAeXoJkeYpW4oTZNGmLawD1R8s8CvgEfHoHkAjF9oyGPK93UrAi5SQ2XG3sXtT",
  "key5": "zAjY3b4qwBtbwZtD9p8acEDZ8Dy3YR5ADmMgTpPk5BfHGQjnPvQtEqNoVQQnCPmFFd6WLks9oQdju7S7Lokh9rv",
  "key6": "61wjcwN1RBrSmAAFW2YmZdEg393s1pDautkoc49sAnHivgxfxdFSVi5Vbot9gEJER4kiHDRaPJWU4hHwvYvnkA2T",
  "key7": "Th81pgZdjPKcjndVTdBYv3QKggk2N1MhmdjfHJkdsucF5cqd5XXu3xqVEM69i5rqwzWRMXeoLoqMdkQsGsv87Zp",
  "key8": "3931Bhy2XCBZ5Q5tyzKt7N87wunBAommxpMbEuRbbVaTumKJSDMPCisreUAMHrxnYT8TemMKsayAv3y1Y1oFvM71",
  "key9": "4ngMYG19X56FxSUmZDNpi4NZMLH89ca4NAtRk22VvoGxqDrWX4UGVJo9SZVxNYS5oXVUKDPpS1f8YXofDNZjkohV",
  "key10": "55vDpyoQCcY14icWx18L37d9LNGoZaPkBHfJgiX23ZQcnK8pw8dpTpcaxBb1ADrJr1RSkjmuL3fr84SY85z6nekT",
  "key11": "YXvQ1Bx4gCeEe1g2iF36pyFzmY3GDPZwBCC414yU2Zzom7sa4S15Qrh2yFCT8o7EzUj7SJGpZEN9NtLypy3Dvjm",
  "key12": "xbVeSSxCqarQueBMq9P7YuvGHJbx6MTwde3NSxeHxiLamUsyWuL8f4PKpsGrwqBZ5b1witdBDy2zP3bsHrivPpY",
  "key13": "4fYXm5p4Shz8fbvZiY8rMXnC2ELS2aVi9uwDXD16Guk7LiYtAa8hke2D832MHTfJ7PccM4DRzSwA6BbJg5EZLuhh",
  "key14": "YwJGqgCuWJS4m68ojusLzeeAuvv9tBrZ7CW2TzxSHKqMU4wwLg7WmRv76JVC6mW1eMYGGArifJyGjmg5yTtjZCi",
  "key15": "2TGHUckAt64tD5Z5HF9icGLqx2nJbpBktMQsRipggGfWjetXpR1Zj9P7oxGKCwB8MfffipXWRgUCquTcoNxZsMSa",
  "key16": "ksar4ksryoBNKEnAZPAhDcGiBFZ57TaKXKEcRKfW7dxbtNcunKVfN2on2twr6EHZRL8p3pLigYtFjM67gbBAsu8",
  "key17": "2CLy77FxoEmf9L9NhVEimV5FD8uBfCWbpR7VGTExx5ZQxKiyfrSwAFp9mKdJi7nnNedAB1J8FJgUJbPHF3tCrb9f",
  "key18": "tzhJxrRnBE1Bkis9CR5QZUw4jSsL5wmfvh39Vf2TC9kYX8gyKHbJ6LY7RFAYGVjiBZBqWBZNt4uJcnKWSdbvP7K",
  "key19": "U2Jo8rh9MQaJA7KerijdXX9N1eKzaAdpE3iBi8jvCWa2L5W8d2dgcMJidozRrpjkFvEUXGKtzS2SztcATjiyiuy",
  "key20": "5qY8FQTJh3j9tsF6iXHp4Lw1f7M5FWQMJgu6VAirT4CmY28rN9TytvezBrBCsSxWcWPpFL7Gs7DcPqk8413jzxV8",
  "key21": "3STsPUk5g7B4sGxrBeoZGpaGn5oLpnNyvuvZBK46EzSw1GoY7qJezUeaz58rWjkn6h41Rj4r8r1RDGDi7f5qB7ia",
  "key22": "DaNANozQqMwDfK9cnQvLURawKR228yCkJdLGQY3kvDHh7ipGY8ZWaSqfisPznTXBxcs6vyyWweUUiTNLkZmQRz7",
  "key23": "ULUfUgzDRx8P76NAKLtPrRU96Kru6pJxi7nKZ8PmWDS1QVkTP69knmZMstytjKqjHuL7TPEjkoHPDxjhduHJAJu",
  "key24": "3PGdUga3s5pYkhJVbzcwY8Ec9ohYKgdLowzbcqAYB52kzUSEPBvRLEWz3JcfL63pt3tmTK2nJUmMVXBMTUCDGu9j",
  "key25": "3nFNcazb6qkRdWaAdHnBetcTUpnizQiHZDu3b71SnCeucY7HTJc6eVPMjbxxYy433zaHTVpfXwcyjrseefyAwQGM",
  "key26": "juVfxe1byXpR8NJZd456FFA5GoLQBffLN4YYLUG9zVGpC3FJsJAUMGmNDFBEgkUaAh8n2GRTLgjG8hX8YrsbFFw",
  "key27": "3CgDhGc7L4hEfXGav6cy2PHoDvYzqGGjAfevdrLQFf8XfZpSm35ryCy8ch8jaHnzLX3jBq3yxn35uWxvZHSoajc7",
  "key28": "5CQ5ZoBRQNyk8ys9zgZ4Ezykpqr8fFyQ4PHj2mzhdwHyf7VTat8GJpGeKSjw39Ut7X2gJA4P1pbFNuqL93VTEPSh",
  "key29": "2xFWiebp3zmfjZzW6363YZRYuNS7Um1VFz8rwcjLEWVcrkWnYN7DEeJGJVvqQrDEQjX12uepU1Sini1jRb81KBz",
  "key30": "3DgUw5jr6uNpLjbCzXpFptt4T1WKsSLt4j5c61UovLP8sYVXawFrgFgo9kcYkhT28Dxn3QgkLYzN6ML7RbS9oNVk",
  "key31": "3CLW23rEnSzxLspwuPU5yo2qtdyLnN3RwDsso77XMiGWzwVqneKGYueDq29ZiDojRmirHK2AAHeLRgSFJNjVq7R5",
  "key32": "bmycpCi7hNd5APBiMuuWf2pfACcZnUT6puFXdr1Jao58oYenJ7frGDQsWw15V56i1hxCPAvKyjAFHtZu9Azn7oa",
  "key33": "2Kd2Mot2CpBXTEb7ZCTYijpimwP8zDr18utzZpk95mbmzxQF8oJJxgitwQ9hj77GnYCfezwLjTA7BJis5ggXxprQ",
  "key34": "5Mi6ETHs7oLBGr1fmGuwTv9VSWxu8CT5cfhiYB4NEXLD7P8zzvvr5aBj1tNVQ6oUnWy6eqtFp4y8vwwW7HZjuRMw",
  "key35": "5jXPp5fsqQijKgso3DRjHfXEb61o8L3mZTRDfC8Z34tFtDncscJFuQQCYtZsd7JkLybfyghLgD5ie58CkSFUsvj5",
  "key36": "1e2RfqGRU8gKERA4gNhkj1Co9DadmSKNkudMrp5VPY5AE5oq15iEd28ddfo9QbfEJuoiGS1NV3XMkVrzV244Wbc",
  "key37": "2Evo3xp9dDSVa1KATsm6JQ1sVXqEETJi82FfyooGw8ycSfGLFP4QVEcKaKXHXNZeL3UAGq7iaN9zi1chbfq3gAkk",
  "key38": "2YEjb1AQERq6e5jS4FEMzSiVhb1kjstxzVwFTCZFYDQio5uFqM78EyNwpqmNJtXRYXMs1AbC9GkfwFZMUeQ78xQz",
  "key39": "METQuZ9faS6HWBW9B1MyPkDKkPYj57bvTVSJjEKRyZDRvQcKMuP1kcb6pVMedHqrZUofSxy5iuswYBoaKSiuj1E",
  "key40": "64vXss8LthDY6bYzWxxnYwn3jjysVCQhh5JKw4VwijmfegVUgcPewRJFVQL7mTBm3Xui2KARJaBNc4kcVrx48Ycs",
  "key41": "5odg9gfvnhMWQ23hKV4kvzxBAtxqHJ6SAwvMiU1Nh3VJUX1Pijz8jxwWWpvvENcJhs2H6xj8YJkTgm4rKxnjZ8AX",
  "key42": "4zWbix3aApBJsmhT16D87SX4SLY1Vk4Y7MyVmzZjCUQk4Xi9J9QfvFTdhmFzX7pUTi9xeCAesKqZ47ydkWt9tZzk"
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
