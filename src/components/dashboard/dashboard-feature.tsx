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
    "2rqVoCYxgwLLMy4Bn6Cpmw6TPXArJZcs8MMfr4tgTggxDh6V4vLWiV9Toe9H7JL7hvzLVGdmHNx3XFDyJRKhS9Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9RQy3tyPa3xLAYTYZE72C8xVsdJb5SfCAFD6B8B2vXvAdnWy92xjbDFQT1ArgyGro721Cfo4poDYk8sc5FW5FL5",
  "key1": "P5Kcz6uSUgijjQCn5b9UfQ6FWJeU5GVgYv7kryDWHFGf1BemEYETeD3WYbD1nr9VpE5Dm2ZbmDbEDuLXomVwcXT",
  "key2": "5HEWXBXTWbpyZFj31C3n4GKJXNhTLT6kEXeqcpiY2r5biEs2ZdPWSc4HMAzzGAqBHNkRQARjukj3erF7wry3Snhu",
  "key3": "63ZZorsp8P16YBGSNXnuXANZxC63NkPrMoAEzLoxkfAqVSSbcm65sdxWb4h6Qy3YZJhdrYoWrTNbPGFXWswaCpWm",
  "key4": "22Yp9ELeas2Uwyx25HPND3SiCwjm2RsBX4JcSimuXTiXD266Qgnqq4NH3p3tPpBVpfAqF9LcugwvtNVGPCzLimi2",
  "key5": "65KfoDfviNBN8AWS7sNV2Kn4uGHmcM4dMQRoDwXf7TNUzKKxeixpUZvP4XzkjQSLd4JpcEjKFbVqFVBDKBShnwH6",
  "key6": "65v7XrYDissJNLWSFsgVeGYbR9y5SS9JnSFMrUwcEE7BtUy9qYvA8ZQnjT5AvkLipBG5R3NYNHb8DPYPD3s1KDd",
  "key7": "4RUxKuGQwTRiudd49reTBhrsZ5A5KMNg7B63AbwUSE9CeRG5GGPMVAafYArm5pTJdTimn5geGChAJp4qrToBFjTL",
  "key8": "34sPMb5cCTwWqtALcuFYbthThThbWT76oTXqUeQJh2W4CSkfwWvJx9yVCuu7bJKQpu267UCZRd8Kdnui3Y2qSsLx",
  "key9": "3s6RTDDXuuM5G7M2mhXAVadEV3tUr32qxCoErMpqW8SvWqigE6xuE8K7jN2qUQDQjDxY4ZeSMwsSrT2PheQRyx2X",
  "key10": "r8MsS5qxx8TmcKTdvU2JUovjiXCreDCHEPojv7LbKUnWrPEQAcsNZxZuyxFsrjyS2QNHpvCgsAPNoWPJhemX1XZ",
  "key11": "2cfkuQ3gGWcb9b3bA4XJNfAhJqVAXhJv7EFJCEoprnEV6fZWebU3Nijf2HV9S4VhhF9pm8Z5r3aMYFTwLuaD6XPe",
  "key12": "m6sHimx4mxc4dFqLsGri8Lqw9ce1gb45xkc5Edjs8xAk8nHUeUyGXwBnML7cRjCbsV14dfFjQtsKARDHB7ShQBa",
  "key13": "x7qPgfzsA2FBnUoH2NmtUXmXjCpD3HZh8S9MUguT9ThHEqWpam7MbArL42ArcXiGGnttj3g9AicEyig3Pjgoxk4",
  "key14": "4nuKCnaxWNUWM47Qz4U7LXNRES5PcdP3V7yoRVWsceGT1414R63mwr6toe1RAhD1FgF3kAefwFB9JPPtzmsZDg2u",
  "key15": "3UMmezW8y23621aYE5MDnkRN9swjWvRZVWkTus4kWZyexxXWYpamspMgSpSc7SsfSKqM6rYS444N5y8usHYEbjgH",
  "key16": "mWQpLfRAzRJQryNmcxEBt5NVW6UexiFNwVtm5jyr9P74b5sScGkAtN3Qyv9SyE8WuVHV6Y1NNg7eL2w9NiB52Zv",
  "key17": "3s6mZeaYVvf4gywYQ3oiBmsBozdB9VExNkxxJK9B42p7c4mMnX9hEY8uzaUc8EFzBorGMXxkPW3fod1yfYzmxd3r",
  "key18": "2gG2FnysREm6oD3y6QMQcUdNp1eWUJqtZKkErCX5hyxVUJBJbsuvtornV5FUEwNAy9nQcMCZBCY2WKYzP3iEcNZ1",
  "key19": "4765Zdh68F3yxpg9DRHtjbhMd8FvLLJhY9DuvoG9tv3QXuMh4yA4nckmBgEBFf6cqyGpr3neDRwvEN8QdZFSH6eU",
  "key20": "4WJ2P4YdjoRgxRM4acKt1paLY2ciqU3CGVCh6ruYayMgEACMrzyM9CHHxM58sdg5Bs6KZ23gD3GdjVXdWrDUGf5i",
  "key21": "2SgVN8YngtqxYATE789Mz6GCJLC7zf56PVANcy5ao6VkH3HYmAr8LGKGRTKLxZHwg25hPS1bKQCoHPfGxgKLEx7b",
  "key22": "3zwHZW3cMBGeMzKFsq8MHN8ijcC7a96VVkrsDji6aYnWmDqMSeXqbxZXYNWvZsgsy3skj4EjDypBTDRRPeYCp4zU",
  "key23": "2bXy4NjKcZYpHptdriXuCdmLxRCYPfZtZqzWvE1rsHkxFbdvw19ZMTbY17xPEB7vHFY79sP1eUzBRT3kQZTcseBV",
  "key24": "36rmpawMHXMFpdGMCKmcLbuyefaByyEyrHWv8wmxkcrwGdHTgJ7vDThdzKJrpLFoNfkmLMoDMV9yAujG58SN56Gn",
  "key25": "2jRwnmNnYtv2QVQLCSoQUhU4XuSN57WKRh1bPT8ZpWLfTnstEdMnthjgv7En3nd74MK2b1vh7EzD9GihVGiYosMm",
  "key26": "5iu6bustrtYQLXbcHG7MtbUUyrBqmj7Mig7PULVgWzFwpfRrq3zhLXBV1J3ZTz3qF94wxpUZrTxZh3vaEbuALKbo",
  "key27": "pzwRQGYr38JX5Jcn9UdSo19paxLC2D682nDsjHZULTcU4LgHwQAA542B5QJwHjXqvnWtyyBYH1LBeQfC5vhxKw7",
  "key28": "4GzqpjL5xDa2mkAPb2Hrr78ua2LKXGKwaiwWfyt9J1rsTVMCDis22Yj8SmqNT5Lft8nh3eafexGLhEcgqUKAUwFi",
  "key29": "34Adz2aE3iXFBwniLVbVHvvUWe5Srf386A72cAbkVRT6VcUYdPs4PsHcytq2tsXFMvfu1xhK5D8Dseqx6kxEWSpH",
  "key30": "5ZLSLKcwprPk3pJFWZpqUDK1M2Vf7uF8yzEGWD9PECmrb4Y3zx18F4629oyYg9HGbUHZZb3cvR5YneHde62msG4",
  "key31": "3hqMaZJvshcGNPkErsYosJXcUcT3MqjnN4ecRojer89ro47zr4tvD1jiaCmTfVVm5p6Y7gNFgU2JzMDtHQ8Cv9BC",
  "key32": "65NBmrQQ5odFFPQCuMaXvtcQYE3vXSfvLoTNNqteCa8nj2tAbqRyMxUxUm34BXmud4zyJRHDEfyRzBoaPRL34EH2",
  "key33": "WqviMXUwtGKJJqoMu4ge9P6k45Hwn7kdYHFuJRW7tPd1YxRop6quaoz9meWdRcaX3hspzJ1tvGniTyDfX9t39Bw",
  "key34": "9HJggTCmAvxLESN2v8gaAHsrBgrfonmiBQovQ2MdqDjnRhSFqG9QLvFqpA5eUw9WoZHbCtmoNZ743Q5hAwZ8nob",
  "key35": "4qCWnGVE4Pshpev9Z8CaSBzioaoGAXq3etEsKiHEZG8zoBdXSaxTB3oHZYndLWreXEJQnreLNVXcPGdAAb5SCb2S",
  "key36": "5PxYxkxonQXmrA6sxohjKDbhJM1h3WBT7CPcq8AzmWFj9nntn99MJegbqX31NK5KL39fE1io4xriegc3jAQrfPXS",
  "key37": "3bxzVdz2E8MykdqEmhVg1Am1KwV8L5cv5gZzAgHfifFPRzm4FxCmUALB2Upu41pVraSB2KFoaNtAr7eDGk6PUDwS",
  "key38": "211LXwpL9WKnJkwPUkxCfnEy5EYvNBHVCH3kKMKHUPDdUYK8b9CkXhA4d6xQxLx7t9xB9WrW9bdgmouH6uDmJAnQ",
  "key39": "3M8AmTa9RpWTFkk83atEBo32a4GY5ropAXdtMHspzuHV5kVKYVsQhaxgpCbQgaPeSEdHxnzP1rNBCQuQFF9crFPs",
  "key40": "4hu8PLNsmpnKFh5YbS2ahEaa9whgyYXRpXWHexKn929PacUSJixBNBmYRztU1F9LaxjtbETWuos51iAnwo2JygPY",
  "key41": "4bemkNzuutUpKcoYKqBLEQrbg6S6VxtnBamJaqjqoG8186m6YwrRwg3esVkQBbWkzexJGKqp5H2uQNgs21NTVTfZ",
  "key42": "48hi1Y6hM78uLuvAWUX9nqpg8xdQkccGGzqgdKoSUkRPmw8zwmbnSPKZnGvDhkYwS2z15dBnDJzTuugtadvy5uVw",
  "key43": "5iuqHdiJBJn2QccVNrJjV6RG63wjorwLcchJBUnHd8jeAWyiQc8kePXXbfraTgN5yENcx24gXcGF8vPNdAgkguQu",
  "key44": "3JaasAWaZtzPc4yLXmYryB7ieQyCDpuxUb2thphbjh2eygMVsyx5DS4qApggM7PpxLREFBED3cmGWXzfHtxbnb7",
  "key45": "2Ti9ZTCwrn8Ry5ydU1Enhe1e47p95Bg5W6r3kzmgCGuemZhwcnWSeKYtVE2sL14dePmEKs4Nqexjh9dMSY3CEt2x",
  "key46": "5aaCE5eKWd8qSCBfya3CJorofxFu4VYKHbmhqGbNG3m3bYd2VxeAodpngc1ouSgkX4twgSqrK2xySkZmxW9t9NeU",
  "key47": "3zAdSXBbNjedtKCUNKNghCQ46JYNKe6XqWEtC6MxStwqMDx884RQpYMwhfwewnjouFCGJa3fE7SVESv24jkyneBM",
  "key48": "3d9hpPPQLcyUaNeWnj9MkJgjheX1aNbszTReBfbAKwG1aC3F7nwEQe6Lkq4cg4CBwj81ZKFS56i5iu4D16Kh7Ycy"
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
