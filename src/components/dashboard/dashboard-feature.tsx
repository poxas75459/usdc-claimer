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
    "3yXQN6rmLyQmyPi5PdnCKAG8vyYvD1H6YBfDQGyowJKX1f3xF4oB25LDtQyXE5GCXHP5RFTzt8z3qfDV5cN9MX5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzaWnC67ZWgnab8Ferjozzq7K41DLVULVLBYAK4tDmMj4FX3Kvnwb4JNQSLAoc11yHfx7yhEz2RWWWkwUrKKLGG",
  "key1": "5KTCvSbecKCRzDhEHCXXBmgzTCkckZWQhbmmtLvyiaCqyu72yMPGHoVXqDrR9PNBrCAqoxTGX9iMcLZwLiE9dmfW",
  "key2": "pjzdPNoHAXVvJqdno4NSb6mBzSTfDhQjc6gu3iqbCX5ZBmuKHg4TKvs8Jpvh1G4xCVE9DxFhJmLtYzkoTLNSnp9",
  "key3": "2iD1GV4tx99RqYxcpbzdgtkyhSc83vgL2TbANadpDCtQo75s12jnKGH2jXPpxmEWhon9hHgq9vD7tGybpWVtFR3B",
  "key4": "UDQ9yFLQMZG2CDQubCo8oZPd9FSjhFNbzAJKKmV7Rqeu2Nf5Ue2ARt4T2SNyNRscC3qBtHy24t1jVKnRtEhnm7G",
  "key5": "9qUxejFrysxnjgCXdosbf8rK1xk5Q9b2kr8ewtpSfNhpS8YYXWL3FaFpQVaWsX7HstCx8GW6xgCFU2HRVeBSzvt",
  "key6": "3m7rKpT1mjw6sjfWwCqk3JH6M3qm35vpEQaBozXiEtGeAu28ZR8xp8rDfYM4Xj5ZN7fDoPCn3ktoZMrynvCRrhyr",
  "key7": "2jyGSWVZdDTqckgdDCGy8qDQ7hwoNa6RosC1LELjj3u9miPPvqghtSgAe4gKu7qL7ac4ZBHz12WmSsThPsWXjbkg",
  "key8": "3WbLSfKEVzdykZr6nyYvkRqfJh1GZucVj8oUEvYtcuruSK6d21jsnagWrRsegUcwVYDRs7qM5fbrDsXRjhSGaiuh",
  "key9": "2CNV9L4aWAFhQsAZDh6K2HaC6UeZ87BrGBktJby2ccpnfo1m6BT8qfQaW9TLTYYipBzFavzdXiJbuA8Nf1LupykZ",
  "key10": "pKHQFfNE7TLrrKorhDK3qZCxvbjSBvRszcVZm42MRWqiS7LKuv9qwJc7WgXTLoaWf25FKisjVmJKYt8qQPxq1yF",
  "key11": "5djDvThY3Cksgau2JupAhSZGsvekYdv6vBG3Ljgf6MAL2prn6rBQTRW5xvRyP74SSMKDCk2vYNqAuVXxHtBpTMHw",
  "key12": "3WAvrecWZ6amKZthcTJKfmFMcHfdtihRATDoYsGCsDD85mo81UsSEHSWSaeXPuM2oj6QM1odEBGpAwTmEJdHdjPM",
  "key13": "AZPTiPrYrszdMfJJqPLN51VqeaAuviiNygpkNY7SpwTvz8eagTPuh8gHyQcs32zk7P9TBsnV1qUUtkaiRUqa4TB",
  "key14": "3QAd18PDopcV3RYTWyk1sYUoDv1gqeBZoBsPWkHTv4jzfSGM5vWUkqivABPomJxrkrY47FUYpXz9QGYESbJwzxfQ",
  "key15": "yf22vNnRcuZeBg2zdks3vn9uteASMWJXZFd1nhTxuvNHYJ9LFhejfc6ZKNiopbvHmHzDTDCo3gCdFBxmPnLQFAY",
  "key16": "4bR8V4j9rHeaeTgfc6gtfmJY7B4fPhQQmM1T6wGL2aBbFmiH46vYVuQwP3WvddmKxiniZVF8pbRnHoXNrMkHLrMm",
  "key17": "4W4BsvdzdwoCixjPntVpejSBjBDhjyAz3CEfA41Xc9h6dYkQMMkZRKUH7eszwXUP8yWndQD2bgRFJEbxS9QY1ac2",
  "key18": "k4q4EJHCYviFGfiUpGmXbdU9RJr8n2WSK4vXW6bcsLpwRjyeTjbM1nZSzFu41Pocx2Fv8jiomQfTsCaKvqen4rU",
  "key19": "3Wo27aZZSo6Rt5osYUicUjA5wXZLDNmiBukGjDPE8ZDFVnFN7aXrmVNaej21PAKDv2YeFgYb8ZTVWsDZCMWepddp",
  "key20": "4oqrG5eR7RqVJW5jE1EjNWorc4b9TEnm7RYb7BsYZixb8fchVo1a8vmJc5WKXGQrMCpFWp54BkpPW26o89NkRa3D",
  "key21": "3aMkf6yw9DVxFqYvofDL5MrMdDTmf7cy1uKaFAYi59yi18zgTi5eH7WPTXxN55pCLP4Thi55zcng4SUibSYxtcsK",
  "key22": "2nx3k7jqq1gYFqnGSrtGMzW3w8WNx6znju44fcMCiH1pUSx3Vo6A1SUFigAEzLXLXe6x2YWMks4vQUSaLC1U1kSg",
  "key23": "3vpwEn3yHU4upPVwzkuuovW6zfW7oysFztXrpqdhcomCtiaSaYJkbxjj55o9RjH4HQsFKDL6kQFzP6HX7a8UW8GQ",
  "key24": "23M2pzyPv2x2V2QwTG7RTixxsBArZkboWcF1CoqgL7r1Gm2om2pgSwoKAD41qkgusypgK54B58ToSREpb9pTKbpN",
  "key25": "5MsJAX8gXYtmPWXWSv7aAN26RMNs8mgoceYVag1ZrSXuc8b4WkZF8bRPJ2F1sWiNx2HbAAvgeQZjMovr2Jn5ZDtq",
  "key26": "9TB9JNNp4WfY4pvzZmY977h8Hb6m1MZc5jguwqJa6mZPpnvCuiWk2WaAQT4Dc1qRwkuwi9X83M3HvFLGiQB8hWV",
  "key27": "2XKt5V7Rm4doJtH4fsUFBpYPguRtipWwZZVjrahrNeN2jJFC8XwyynWQ4G14URoCrDhsWGiNYNAmMA2XZkWiS7sZ",
  "key28": "4nAhPLeZbL7K5jz1CDXMNFgZyuHtHrg2jggxKoSXwWcunJShr3Qxp4HejVRHRqe71nk7tFDe9GzgD2pjMkCCqxV6",
  "key29": "3MsBxSMsGxsEGjZ3fk6A7VhnanTBM8vKNV83FdzrcUADFVENApHKkkuhPL8EKM8257TDV9H2HvDJPdTkeoci6zc",
  "key30": "5psiKqXMU72AANgQKB9spBXb7xd5yNQ4nZnFb757Gn2STcL58FLnc589zuqDiUVgi5oM3tekMiffJeDRBspMVX3d",
  "key31": "2oKa3HBVGpGP5eLZ5Zb9gKUroFSYLvgzLtnV8PUexT9BqqwX2UsfQCGp4MsWo2cEHzzxa4LkLbn9vCdUwG6eKyA9",
  "key32": "5QKGMuFtCo1VmMgmvYEUAwp1cGWDKNUjhPNbvEpPbEUiUJcwutK61CuC14TpMLpexm6YqxJ1stdiyPHfZjJBPSsj",
  "key33": "3fc2gUWXbydhRT3PDvCvLaVgMx9S6kcPBDEm8MBkpw9VRJmERkfzDaxBiBbe7pQHZKjxjX4RnS7Mor1LUJpCgQLJ",
  "key34": "2GewLZQhZ8Fnkfd29B7gHXt5E7V9hzDdM3Hb2nXLXLG2GArV3VkjPwk1VcHenMutGB4i4BTvDvmVAVh6tCpU9ygG",
  "key35": "4UctcFvmZF7iRuiP7GMaukxQDN7EuWGu2qotS4VNEhd8eA9zt1MqKuaJH6GtdUtvJK1Mr48wnxyKUktQkeU9iRSi",
  "key36": "3oRngsHodmEGY4mGsxhUcAMVteu6djA96wwRGFzBj47NaCUybNPCdQE4BvsuCcxyvBdkkkcTG3EzS3uFT9JwtJ9u",
  "key37": "5r75mTZWP3KtCvWWyeSVoUQACYnhBKhCuMjpCTmvD252t1btwK7xV4P6Fp79YnDANnhBuDQhdptq1MdEwk7QD4yE",
  "key38": "2ePZkWhJCqPfs1QdqGv8o3GAMamxt8j4cxhP3z3SwwjuSwSn8jis2tsxiVDKkgenPFHmjk5NHGaUZcgU56uUQ2bH",
  "key39": "21ATD2xEiuTUAzSJbCecjnakPeopKJrSXK68HPNYTcEhY2fu5x95oJt6ui2sgq62J25SN78RLxn7WynUZ2iWbkUm",
  "key40": "2He3JSxg3USMiuYUXXY49FrtAHdTZNFmkLojtYW5ePmTuvq3FrxaSHHgjZTrRKHWSJNZJDNG33EmE54iGxNKnFfk",
  "key41": "23m3LwLHjvnvwDaNkJjpXqTjnaNVBjfjudiSn4W6Lway7QUQyrmf5Tov7QcEuwJB1jNmKhTBYGnQftXbqtiwUnzg",
  "key42": "yffkrZTgaZ3YZR7CG2aD7FUG8XC4awxr9gfi5DhXX3eaFySbPEq1u1fVyQNx8tEuiaWcJgm96QpVq7ymKqoF5en",
  "key43": "4EdsbV2WnKu4i7aumktD3Cxx3tXPSLrHJDSDr75cf2Fmm2H4uLaWdRCYBJxiGeK5xSnmdFedzDwMUyazGmK7wJB5",
  "key44": "4oTypSqVZckVN6gy2aAGGpXde7JzNGR5GbMurwbKz2FdawhMCZEVdpuzuBkboXAMkGFMEc9vhir7o2q7XoSPNCbT",
  "key45": "5QWrjjugg15dFCjJFgx7zYjrP7hMZkSnHGj4dTbJkS6NAuiB4qCPFhrsMFEC5GfePK18q48va48JVHES9xuFHCxv"
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
