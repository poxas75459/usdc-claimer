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
    "QhAQPmucH9P7fvHx4WCUd2K7QbY2nfY39iWsu39tsVttPM28CkE28zPc5NLn9hfw98R46HqcyR6XzLyuahPATBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N87ygVTVjJytTZUFSs31rSTyScXfmH8vuJZw5PEmD32rsVtDXem2iopoz283vgVJB6X6TBuyF22FaAsJ1uFB3uS",
  "key1": "5LZen5rA64BW1kmP2XJQW95gfKVD9bmeXzEyohRn24SQcaMoQCgoL4Wv9Grdd9gieCH4JbnVZvBMT3W33sgeiqey",
  "key2": "3adJ83d7ZEuJstGjnEfnYox1ny7jTtSh55PiAh6ng5JAeZ8JVR41BR6TMSYjokPesNFJZSio33AhHkpbMufTPPEK",
  "key3": "4T8Rgc8WDGrqo2jP8q4pDACLsa3t4ofVFATPdphTYDKPzyfnowuQ6yD57C371E37iXS1wZv1P9tqEEFE3RzTmj3F",
  "key4": "2hdYa2DzAYB2qB8uKG3xa6L4ih4cP4HnVJGNEMufZkBzKCbiMV89qeW8LgcAWVrhgWj7cXJQ6CvH7EUUYt9HB16y",
  "key5": "yiMG23nu3v5K8Zp6RZ669KYzdF5VRAK52XwKirav7MPhMuBR8eFySktxnRH1CoiVHo62S8YvpfTMGLQgR6tLeW2",
  "key6": "47owKX3mguWB5DCuKRfUrMGuSFAPVSc89AW3sfSzaPZu1V6e1uv2ZsTmj71s8sHeSw1m9jpkmo5fk556a716h213",
  "key7": "3ahsrsUfhgXZpkyGxu8JNCLjcsgXLGfwLU2Jd67CKrgb7RsZzrw7gSvjktFrMV91Zc6kgjbWtQmyg8AKAo1KDF3J",
  "key8": "2fgrvxrsBU9rsujRUTJzM8Mauw3tp88kBEPeMtPKmidCu7bmuMtmhAZptk64crydUv5ZaQYGRB2Lj5uYmapZRNye",
  "key9": "39CKALkuTqUEaUWXv1cxAmKDqSgkoZoCQHjgCvvcqeB4m9zyZ8c5fMicfDEP8BhSmfFCir86cwqck62jMk6W7rma",
  "key10": "57CRDp2qr73BvYWJPTnvdjH3Akcfm3vPdYqHqrvA9yi7tCcnCnN6v1BrGzcLHzUPegcUzSFd9YEA5kwofee3waiF",
  "key11": "2oQH6crudKDNVtPbkX5qUAbev7KN1wMHydpbVoLr9Z2U7wN3gBfqV2io95DnMm7SD1Dukjp8qstQU9VZ4qBoGsG3",
  "key12": "5sZihYMYCDxEBmDSzXjVsyALDdDVCc6pBj5y89xCoYpFxgXVJ9UeWcgtNPVNZbYE8HnSjsKkqqgkivR97dQkXDjN",
  "key13": "2TtmNf8dEwydmaYvwwRZyULDLR3G7khgkNCTGpkmKNbnRSBKUJcNvosviZNJqa4KZSvd36zMseD6Q3X16jFXFMhw",
  "key14": "3CauJncraAY4T7bXzoUjSYvYhgnGXCL1Gxtt5kP1E9jguaEuVNGkUUte5tLf5C14PVewPdx5aJmpQXNLTHCRRfam",
  "key15": "2Fh5zx5JuMFXwdTG5KNP1oiCconxzwukvvAyoAnFSkUQDTp8U6PT6xHADuBcCdLm1nS5GiRogtsyTMJS6gkEZEvS",
  "key16": "41YNDGNp1UuHVww8uaU3ah8cQToJQTa6nUamTx6AdiXSs3N5v4kWvEtX9zi6T2rnGKxk9gvshPnL2yNp4y6M1cGS",
  "key17": "coezbX7AgqiCpdhjgKSCbNX75Jen93ZtU1MJSmXFdmeCKkJFfajXNDqzFuiiAtEwpgBb8RZFg5cDb33tLHfBG9d",
  "key18": "4eARwFi2R879n8hdmVdVTzxCyXAsycrKdGetgtiATRoULzVAkFp5uJ62TQUbpJr237yEnVTmtY4oEUsN2ng3zvP4",
  "key19": "4cTPsW4uhVhFtwkY8EHtfUBJQVwGC8y1tHdhG3rvTASBigYbSW3KWKtSXR5y2G41pczQRQdXHXQwnTtMDk9anfjW",
  "key20": "3wyzrYKFmMN1iGBBKYo9cD7mtyJYZhELMpy2NkNr6wfRBZqyfHYNYoPWgTW4dpp8ig2cnPxxUSARCLvU3cnU6FZz",
  "key21": "534ER4oxuzF9yzty1a9ZqGYr2oQsgVu2nru8oRYn1Ku8TyhDRgFD7rh6J45eQmCuYrTtVyahep9dNFfREfTaNj5k",
  "key22": "5g2wVAKAsiYWSDg4FSY4Xndvs8nzShYAZ2FsaWDGs8DZ2AZN5vtFW9NmCLjhhgvSpCdFqMz7PbheUgXGDaXfu5HG",
  "key23": "3YPLn6S1APqGkANfPcXeycXK19KozWvGqF5gZXbWEXs2uGcSSz2t5Mn34c3zgxgvK8dmu9qNLqgj78Ak33reSoqa",
  "key24": "39fDbUc1AbiLr5sSwddRBiXZYJ33mW4aPmyuZCnXEGgSc4UDpK6jsowiR3SPFbkjtTE2gaKRNM1cgeGXYyrM3jw",
  "key25": "3idp9GSKBzEAVA3LV5A6AATseNmLUpTJCTixZKvC7MxmXsqjaCsh8TD9msWY3KPVcHKhmUs5fwz7VwNJpY42EJZL",
  "key26": "4sf9Uy7s1qEQHZM3jMv445tQAJgkQq7c6eqSLzH1n62Jmiu6fHwL5RRt4gawX5SyCBN567oSzEau4pa4MNNR1Kgq",
  "key27": "3x36herdVVgssPxd9g84xpTfW2ypFdt976Bi9KVFv15irC6vZWYRR8qvwg8ehh72M6NdRo4BYF2B32cmPN7tS9a8",
  "key28": "5f5HVCvKyArAzaGHYpv22HJf4PunB8Zvnwuzw4nzECuCVvNrNSNcR4C5M5FVvb2aXEyTdeKLDjWRKJsPdkpJwvEU",
  "key29": "5fDyZLpPVBFznCqwJ4nX1KqPvxgJF8kMmSsozD3wyfHF8VgYN18fxPFbebPWDLCuxg9GMfgu6LLaKDobpNKPX8VR",
  "key30": "v8vpebYZXkjqYd5nxeavVb1SyTkxghirZ9zx1EPxc2BvYmztFswRiTjDbFGme48osKuiWVKcK5cySsHmKt4BiSg",
  "key31": "25a5FGaJ5vwx2WZZzCzezd3FtKh56oHAhsx9muqP38PUhupXCvzGEjNhdxCYbJbtRNvSdMJz8Jetg2CDLBiwERRS",
  "key32": "UMEaxfeprzRCCzNEhHb4hGz5BHxkK7DroBMoawEHB7agNsKocbSkG5JNbgH2DEJ6dG29NgbsziF9AbzQAuNHUiv",
  "key33": "5tyQPLtbqeJSYPk5QT8Yh8b578oaCc7P2ehZTGkD5bPpSpHg7oG8ALj762CMsyuwc4j9F9nxnujfDWhXbLCmg9MH",
  "key34": "2w7PnMGMMQJh5Z64XnwR8aNfueV8HgrEeHfkG87AvJuPA5s8dtBXiKGmG8FVRQfwJBUDn5uKHKpZshyNbYEFaUzV",
  "key35": "1EqFUNdQ25WigLj3kzre2tvTCa29pYuhhYLbxzvcmypSJqBuxUVALo1XU1SDgY65q9skbrebtTe1GuCrKVM4BvR",
  "key36": "48CxhfA8ELKaaF8NnWA8rhpvVmdBcGMxL2BxXEb5JEFAJvHbdLYgA9nW7gKMJcYyAnCMvdxX9jqXrog7VQuU5FZe",
  "key37": "2hmqAYAhQReAAtX23GKsDwz2fRFSVFBwYrF8WV4Y1ouY78GHUo3mDinmnJYkV1gHmVBAsUTdVpKDQdqJMMysEJfc",
  "key38": "5i6jxiveMSNGMBpivnhJ6gkVeQibGUoKJYBYfbm38gEkgpVsuYLL6mZZDY2dvGZx4Pa22dJMUrHGsDSH8Hbkf2tE",
  "key39": "2VAwr323NEMVdnXCv7zVa4KPGBqFcxq6osiwgDqGm6FeiUUFtefxS1vDWBG38gczJykUH6xdHp5CNoemB74N58fw",
  "key40": "2o4XaVY13kcfxYJsMi439iv7vMDRzsM5cWTnZifjJNzKrcBoCAeqvScG1ir7hRjbcXmJB6Y5whoXF1xQsZSU7UMu",
  "key41": "2uJR1o5odH3hC6wG7Sm6HSKHA8FnZzp9ydxa4nPfvPGzh7o51KUzk11MYPxgRNdGzn5EbcFmLddZgpGNikuDCgb6",
  "key42": "5kFtMDymQbXTEeLyCsGzMRVDQQTwHjfDi4aAM49pxxVS9Qfx3c9g3c1Z2tpvgctww4mD79vQkMmnxk1zC3aGeMSL",
  "key43": "5BuDm2ekBKtog9Ndh44QgEhTFt1QspDrMaUVhajk7vy56N8Nm8fMJFMdQJ1GMiARoq4F4MbwfVsaTBytHchrutSw",
  "key44": "4fJZYuZTsrKihceHfxUVrUvGzJ35Q3sH61z6G87KgLJRxsFeLYYS4z2WxiA8WbVboWuj22ZM21HKkGq1t8e8Qt5i",
  "key45": "5qmbCmoh4ZyR7nyVbcEg4yMNTZukJZmcBXDtQuD2DZLhnqmTygoeDnjeMif6EQQNDSTWzaR8iVj6tu4kbnqUB3eZ",
  "key46": "4r9NhxYzPBZiATgoaAheBUpNXKm6F3WRxdTVDRyC6o9Q2JZQ1XSYfYgraMMghW7JemwazBf681TKPqPDamHv8vob",
  "key47": "4sZxYyRYUUD8pRPQRGA1YUJDNeJns7mUc4GK88NmrNUe2eVznDuR7hGFCvWVWy4K1A9eW2tFULj1vJkWRWmvMXr9"
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
