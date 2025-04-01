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
    "4HnzbbfYJmaWdRMHdWHkvYgaUidyFTAnX2cbfGWHorfU77JxWDFrVLxyyTKvBP6qHicpcsHvuU2d85PcdUN7MTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TfPtmAGrVp2LAHrsKzqEqjVxnxtZemCXpjNUQMvKgDjK7xyxGA3JpHyyxegviSM4Pac1UcASi5wLenZM85dZC8M",
  "key1": "VPii3vzKdZZY97sKPzLn7p8tVqybAK74vNi36TKatHYJkCFiB3uQ8piUjh8jvGhgwLtZNQeSq4Sd6fKnNtmPhnP",
  "key2": "5xBG5EQhYDMAjxMeEfXDV21d5JTojXuBShKWbr4R9EhoDJfw5SURvSthaPeaXinc2TZAXAqGXEeijsYUYVFpdvxk",
  "key3": "5tUgFgLyaC269WAnAA4Bbjmz8EZ5DP9bwPYkQdeDjv6pHtsp72RqhRxvoyLeo3iYpjnWork1LHUE5GG1tV9FGZik",
  "key4": "5FLm6rhXorewe6Xvf9uSGeMUD6KCu5cTCtYdSNCN9JVRbFAEKNtTr75BUygjqm1LhhNX47MpW57vmPnkFwqobUap",
  "key5": "557ozVKkKWSrgkrpdk9CBHBBzS2Q1F6dkqtWQEQXdsH9uSn7XYuoAEDndZUXNJrEa2rPBibLYDRx8Q9m8ekXKJoY",
  "key6": "29BgCzGh83WFnjbWvjG8U3HVdfSbNDUxKHGekA9pWL621hYiutzYW2wVCWcpYn1t4LpXtoqmTMYFVqL4yUezfkLV",
  "key7": "3swfGcAjNfLjBGMKnZwVxPfduq895zgVXj3cMse91bkzKBe7AJ2g1j4sn48EMi9s74qg7bmdrDZvu35q73KmvD2F",
  "key8": "5Cpde3MJojBYQdKmFCoervrzng1BcgcukRpcyutcjyhrVKryXe7S2Yd7nQKDWWA6YkGK4XVdCjAiopKMfrgiMqci",
  "key9": "5YYyE2NG4qWaq8x3dwHfFQsEUGcfiVSHuZQHxBsFJjssawfUHKBxwafyw1cYNFbVkkHXR2Mr33BMAhnCv52g1xYb",
  "key10": "2f4eRU6DFqL2gyZ8oSmKx369wBZYUYLxd3ueE3U8Fka9C8jw7EjC5iJ3NUb7bh1JUzsYTXwcjfapzn2uMeRjPFnr",
  "key11": "5qszoDnj3T8x4ZUT3gVMsTMNhCNrBzEvCuPQpLtC5vRtUN5fWd8dqzb6kGzLhoXekNjGePPcKzpBSjfMapBEbbdz",
  "key12": "2fJW9h7a2uUZ23TcaebrGYB1CHRuuDJpEr3W3Ejz9QNFm33Cd56FRwZ7VSpFpwrt51f3maZ8Z6B25fBTsNDJhYum",
  "key13": "4C1MSy175imf6a6Dq9GYRiRy5Rf8G5i4ooQGNHDNba3V1hQDxmdQWnzsVzKnqPBRsJAmSWyTfXaBC4kxWEhdqRwJ",
  "key14": "2CYrQaAQSh7eTbGPgYpDA3zr6kyAhi8wuaZKuV6f41wCTFhPEcuT5kkymGh2cquzvmBZR8nezcZuzqHKa24cEAUh",
  "key15": "XyfhtF8RzCCkNLoeFUbmjr3SHbj6Vcg656id37Zo3EdAt9GqwhdvvhrqdNR9WtGntuTAv6oFwXT4NDgFDfjyYYJ",
  "key16": "3Lt989THtWsAQKGtfhhSSH8gVoeafipvkSxBYi3vXALq7Jo26B6x4Cp2nX8ZsJZuiKsWarJsaR2tWA6GQrQX61G6",
  "key17": "5oL6K3kPPX6n3iA996GYWjGkg4d787LN7c86HsU5t7moZh69Wp4jwCf2P7HNnUGxbBPxspTMPEhNgCFNGFos4Qfj",
  "key18": "3XKYH2x1GdkQ1M74PWp55ebzyXetbQ1o1tJQkZdhZLjPSEgs5t75chpDVK9WbzwuzLBj8KX47cppH8h8TLVE5xC8",
  "key19": "jXduuGCwg4PRk7gkr49B53qk9mPj8z4eri1gLppyPAC949nWi6uWTW6xziXo3ptZqQsSAv7WpGpp6RiFzzQ4Vkb",
  "key20": "5EQdtTX93VbuDQcLuRNFixf5BjVFpZ6ytYAt9hwtMzpUYDv5t2GD95qcvXDbSCbgPMa7qzh9XNyr7CFqjyEKt17R",
  "key21": "212p2fvy3fBSWLLuXSMhcZiuSofWtr7pA845kmHS5urGJmzHnT4W4uFUNiE9oppSpeBe2noPFtctbQJBNgGehaBr",
  "key22": "2xf3MHUpXfm9C3C54D2o2Hs7JrPC8ZwKQquc75wp9ntt13xf3fhwvyVNboPfQf7Ag24GbHnmDxvuoMhqAoR36Nob",
  "key23": "52dqttR4KoaJPLNkTfP8zd5TAGMezAjFfzudSUobWfhqNV3ehJ2gnYysQ14JnPsbGEsEeaCfmTXXzEwvopqmZLzh",
  "key24": "4A6TNjmH5SfxkYzPdA2yvLj6mMPM8rKQngSoiH3G3QdrWdFJNMpBFbbW69zD3iiMxPAba9ZFMde4XpR61xfGwBNf",
  "key25": "fRFypqDb33BCd1pTuiXWCefU316tPZtjVoLPVyuckXn1R8p3vQAk5vR9am5JXHnWs4Y9CA6FMsYE8JxvQGhdhes",
  "key26": "DHjMiSzRRLWpxUgSsgVScgnwWugQJ5wppqgESJCTcmJTTqx2WEHqz8wkzmUaLdMgprMUP5RX72jeXQwpsjaPzBf",
  "key27": "5xyuvrCon7scRoDni3PsZCeBVbqquMA3ZgjNV2Tk1phVXRJbcnCUE5fzKzfs4EM9RMtZSMz3X3mXjULvSiezB9yk",
  "key28": "5LwLDeoEDoAYkMCkkZqFKGgcMnyFGaiodqukKjgYcLYxatdELj8h8YSfUpAqRHE9sA6zkkY8UnEpGuM8SYxQYgzj",
  "key29": "2KkumZDV8duPLvwyWp9st8RQot3xjcLXJCsWmHzPPg1YBYzcd89d9kdihX3ui6QRmeMuvrhdqVfTWX4NM3VZxCWG",
  "key30": "5f7dd2NTWxqZ5oM3DyLtJ2vSsJ1ZGvprdBDS2VSeDsvCVEw3TAPqgba716BGS4mxPTxm7XKDtHLFQjJAPSwPeNKv",
  "key31": "4TJbKJ18HsnLmcLixMaj9qXPQoyYLPqV2ekyCazFHWSLPAgwxeZJh3w9Zix8n3t6EQpJXSrck8JWVUrm5Lo1nzdJ",
  "key32": "4xz312J5EznPzgwxuoVJ4AyxEvqCG2YJgFeHmyGQnjuVfkxMBypVjBEbKGnAsNW6yNc3dYmtnWmPEiwZsBfStNVk",
  "key33": "PJeqccrkihxcHRVtbkuHsHtMsZ5LwJY42HZunub4xop5Fid55iroeJR56QeuyVqQfqxvYMTBBjeZwZXWsLB8Myk",
  "key34": "55YHKkqj7rD3d64Hs2nXwbfj4X4oDnZTkwT53dduM7BRsj3TYP6aBxaDKxEt6FpS493JbDzoq8npAL8ynTJZ3VTR",
  "key35": "4BshJ9hcHLWiEdfYBootTa7My9PD4rNGwu1fm5pS9W1KsGKanFW1hnubyX2v8Lqxg3n7wnGzCtde98Z24E6fBfMA",
  "key36": "5hEunbcyKLGwYPYQK8vYmDqB3heC6Nj8Lh1n64aJE2MmFJGde6M4RgGp2grGEiY6iSVbKPhjCGbPftQMpomMknG5"
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
