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
    "3qLVLjtU87C3mmPWCdaKMMZVHSicpc8GEnau2BETpqYW25NhHXRjkKswMUNKeqdDLn53AepGS3AsFi7vXyhWRYzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WR8ncNnQkL2fKhsqfRTsMHaksaNinJsMmsMEKKQgyVvNS5vrWfrhxQYyFPJQSB8My2L21ALynfV4Y2MKxaM2kpV",
  "key1": "L6gXHcd5HyE3r88qz2e9Gt3nUgHhjGfx3km5uPuEpnaRaDFTZUCRWnfrmzwCvhCk4MYXQRx8UQQTv13eGmTuyun",
  "key2": "49oSTfxEMLVxE6h7hGmQHWpVdtkapowFsDMiJoeWv791VhzGZgACptJZssGGC4bBaVCJtvYPKuaZwdRzXjFjECkE",
  "key3": "3eHRFoiby5MJhCGKqbaH9yef35KUcsRZg4zFCK2cN2chRd6WVnsumgbanZNxw3ifKjf2L5QhojjWYtUZWLu7z691",
  "key4": "2KuiVDywf6tHuKzdVckx4KDTun7QfG7ej7bFwVmbfFJkQD1PyvLMgQuwNtnsLExZdaeLWqzkqLorwjjJ2Rg7Lb6R",
  "key5": "4xeHWE4R14TJm4ML76PE2822yqjeKAUfNaWqW23dvekGhY8eW1UqARwoz1ej9bJy81eULgVRqMgbnTh6sHL6Us25",
  "key6": "YNxtSugYCVfbBvLtq4aKfC1TYrwqkvPagv4JKm9niRcghYFjTt8ef2KxbVEs7zcLXrjf7hLEBd6epzxKfwrwCwy",
  "key7": "4DFQuxH1cm37joYU4gxyBk5a7nq2vRfC4RjwyvRwEVf52ptVCZQ2LpkYvS51xD81v2KuoWUkBHtNU8PEfqY6bwVD",
  "key8": "4sakynap7xgTrL4vpPDSSKYoNWs59MDJ5MZAkWazb6xAGzZV7C2u5skAbnbSKZVac74JsgmxksDKKHASiwQbwVZx",
  "key9": "2hGc7V6aKq3dJgCTu8yVRszvXNuwWrK1HmDszKUoWYyqeQBzUqyTgnwuGyXJ14igv2n3qAXxbwBroK8TbqSoUcxF",
  "key10": "4CqsqndWFH1TskJpjQhQDmJdvbCA5VVKmS1XEHcDmB7PhY8BkxL3TaVNcKHCAUdeufSeiYQgSi4hRspqbvJ1tYbj",
  "key11": "vL6PiLGuNg2DTdSadYz2kpXjdapFee4a3DTQU8jH98Vy1cXEbxgiVLzMBAc3qDCtX1b6BcZueYp4Rv85bKg2vNw",
  "key12": "4UMUibkXSwDZ8D7qDieCTJuyMkALod4ViUzKxDUp1XQCEhTwNfQzR2n8Pphh582UjBGb1MQVaGyH9KHTpAo2jkRB",
  "key13": "1NTvDW7AUgeEaCkwEnqiQFt1KuV6C4s2kuyx8mYXGRSU6QsvznfUfF7rSijBSnLuvp3xi4reda7Muiev49wxUc5",
  "key14": "RcbSeswgTzUXdb2SbNEtXzqTNuP9q1PC1YtCzeYMQ6x7QAXUxuQ1oqDQmH4EQYk8FCUaQAUm2x4cGUqoBX5jQzb",
  "key15": "28eyQepAoYdxE7cWxdkiSYt7HgoPGPueSCdbAEGbMita1L5WLYHcm55A9QL1D24GbbuCTUrctzLMJHnA37fh2R8K",
  "key16": "5pp9dsK4ZD2NgzEMktxew5ekmET3AyLryX4s5CtxC5QxgvEYKzZRGeg36zWAv9HKMGAthaNckGEbaeytzoi4eYAo",
  "key17": "3AhmfBxk6mk7jsWhWFh29UeQQip7PLy5YcEAg8dMFSJLGeQUrSZWbo3iQbUSGpN1Q3FED5PUSDur3VspPd3yLWxo",
  "key18": "4XCE49GEha1bjG3msjPn2W4PDSgbroM3kamM4iXSumyNK1ZhkPx4XGWoeCKyRfsoCmrNyUkrFwU6xGmChNaCYEye",
  "key19": "5YXWJrDjtd5wEEeboux4fQB3LQxae2UCJvzvtz69e8hqqGcbr9DzTDf78iLe4sEHTiFSZVNSPVQDEghfeHzNfYYv",
  "key20": "saitobBNQHyDmYud9ZnNWkqkqNkwZLnsTGidzSp9345u6cmeCZN14aH5mJZtQdmdBDdJGLGNmDkSd8EPNGX4hck",
  "key21": "3D1cgVaR6kKP2jDufsKU6bYccC9vMcZnBNdSVzbMG9SYggeeQvDX9AcHc9dt35bWoR1NQWwo7mz6Zain3ASeAfcx",
  "key22": "2A7dpuxyynhdV4Zz9nuFKBsHJoWtfBuqCUanaHujWjQGDc3eMvmdG2oJfNCA9MjEWdr1eJsjfNJTWef2uLTmb9yk",
  "key23": "2bXpQSs9HWjSJ8DihJFMVtirj18kp1T5BsGjn7uToeRpxa3quGA98LSfzKMpzN9moBSSWecv9wHaqmybnTjTYkvk",
  "key24": "8sXJD9pW9ir211eCxZrgdCP2LpBtTt395aEwG6nUo9JN7A5ogJQk5D3QQge8vAdLRp4FhBfbac14UeQG8EUwEEM",
  "key25": "4oQjEqxGoi4McMtHhLbWbDFw4snnZwvzpb8Xs2rq8Uogxi19i2FDQmr3P5w92MA1qFVTL2BYG7DBuuMY5XWrttkJ",
  "key26": "3qmY19iCJ7of4FupTvJtbkz5ndaoSbp9F8eDZYJiArGH3uUJnGXd7XCyGU7S6hK4mvbSsBCYMAEiUSqippcDK5dz",
  "key27": "5KbZDapnGkTCXrkKoWNH8qtGfJfk5fFP5rW7pyApXXzEbxSQfmsecwsbvj6N2TvYUuEA5wXmZKXaDE14ujipeU7e",
  "key28": "3VFKnQbgUQBuLufQmoh3KSnkhEy7vVuCfYT8KW7E8jjmPJG8qSFCsGPVVAqm7B5vDgKgLcwB9UbYCXL7g5opmAeX",
  "key29": "xq2LDnhFaQSnmnjC4jzUi5sMJhUJsE7ey1umMh59x7feGdiWfL6Z8SJ8Ne79v9xZKPSrL3fYnZjabdLd4GfAF2m",
  "key30": "2KKDWumbhb8fVvqAoWvbmg6GASuQurtrrEKqko2FRB85VPUCsyLRFvd6YngRZZR87Va46ja88TTM6H7JPpjFGM7D",
  "key31": "4jYTBMo7CpEsCtUcdiK7tjXP1WAZf8acwQEgNDYV2Vcn6icM7BPbYsBTrRb2BoxzDLeMVPxZnX7QGFiYfaj9ihVp",
  "key32": "5MPdUUqBHHgz5RdRpiKUPx6bjoePitpfwyneh2qozgrDc351W2cRufjuxjzsA6z6zkdvAkGyMjLHZ8irBruTCNx9",
  "key33": "2mNAvBApUQ9agPY7chkYUNPGYChyL7eR1eNsUk82MYwX3MqxRCog4aJLegkHLZciiHBeyZBrWa8M9SnJHoWewDAY",
  "key34": "5Uxn5u6x5h4gLVyNRw6hT5eUKb1eVtpcNB7yGnhXzTjEiUK9NdvWsWNCius34g5xdMowQywwgByf2284G29WGmFd",
  "key35": "3Vs7T8aq5KoTSNGrMzuKFTkH42FfywNNoXCRppmgAwDSe9z3TY88q2WmriLr1uSAwBe2FQdferJmiVfcV5fU3vq7",
  "key36": "38RcU6f1KonoGrWj4jBq1MPPbsSD4CDPuW1kmf7GRLsFh5AMoNPMHai9F64FNH7vwaJEYJrRbwkgzDrsA6z6p9Dd",
  "key37": "3aeMviGiTgRz9to4X4sFgCoi6PMbN8gHCVkZJcmDtjmqVBhUTt5oB9uxL7Ybg43jr2WTk5qLZV19W7jCyMjMrUKF",
  "key38": "4JbYhnP9Ee3Qm6Fb7KKsfu7Tfy878ysXxE3izJjgrZHZ7v1tDdwRLwfufhHBRAhYgm7xDjZN3tBowA2tWz62S5BY",
  "key39": "5t9qBu5B6aCsEzH2sLLdiGwJqgQrcKFSvVtxJMye1pjU3tMzqpAF3P5QCLHhaoHNjEuQDzva9KjEWnhZo6Tp8U6u",
  "key40": "2gj7qstubUaehjmu2Wk7yWDfz6RVNhej6nAoSFaJSJ65JEi4PiUnPqaHW8dFwkiMkotsrufNgLBQHWXdRLejbiG5",
  "key41": "627nDUEK4coknk96HgPZ8iPJf456NPs53218vRefudtFMaTKjk6JFmzGe1Wj2ngPtjnqcsTiDeGthBVGUfgvN6nH",
  "key42": "52FgMxzgSSNqWxjfH4cE9s6oYndSQheahm11kug8KscTpb2C9CPuirAc5RDwXbzGqRCawGqfq4HD7jeXCbXBnKK5",
  "key43": "cWAqEWggNiVRY2tFEAnQpQHExVSMRL7YaD1t45FSqT42sjkgxhbj2fbqiKAquc6tGEoz7CZN4o2XGdpwKHr72gw",
  "key44": "3hkpjnox8PMLWKUk4WD1vXsoWQhcgqVWj7aBsiivkmNweU9E7NaRESVB4mJhxcWz2etHNoV5V2cFtHdkhv8pSaDM",
  "key45": "5q1hMPJBx5z9eEkg3azDWv7YXLKVLAWS5e3iHM8EZ9Nnpv7cH9iMAiSxf4wRC27DjaXWWRaysbzfjYyCWkfr9aw1",
  "key46": "4SjDG85hXBdHt4jYb7pzPG8ros2AXakxrFMutgnoReRyadpnowm4Hkv2dNv4QKrr6vD1823RPSVyesVHM1E2kdjN",
  "key47": "4aKWd26aJ9Xvwj8VP99ThfNi97eHeNhdbVTGfxQ4w5eUGa8KTktfX9bPUH5x92gNsJYNu6RErxzMdHWaMgiqYFa9",
  "key48": "4wAszkJgy3YG4RiZYJ2PcYtAGHA7miaYMcGvU1eYEqFupyfJTuBwGW6JkHoJ2Znjqq8iqc5Wi1z4nKzbpzSpakh5",
  "key49": "nANV7wcM8aVVm4uRH2zwnYiVqYMoU6pYZKEhbHKfSj5uGZVz8VxKLhAVHWWYGg5U6RC5tApN6xY7uZ6dViQVQzS"
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
