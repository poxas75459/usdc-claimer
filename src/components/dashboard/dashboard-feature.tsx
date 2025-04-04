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
    "w1uv86K57tMG5VFMb6jJFY5F6ZACCb8W29KrimGG1crgy7wyeDdAjTB9CoAKNokHjujEao8CdeqSk18iFMxKkG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGAFqypHQgxv8CY4YfUDds1GdWxexipV34WafFYFQ3VYzeY7nDktfyZj2926uT2HvMVrFT4vkaaZzjNW5xnRXxR",
  "key1": "4CTtyS1C7PKt9Udo9WUsgDZr6A4bFv2id9wwqKR9M7qqr6av1MiBgeJZNJEoqFv4Y5fW4A9JVDmCmnGKhy5ueTim",
  "key2": "4m3b1QLD1mdhUdqjVQGJ3vNfE268459mN7xdQeG46wpWLcVpaGHuz16dmZrd9hbjUT6kMzU9YAyJiTm1SZifbPP9",
  "key3": "2VG3qkKGM3Tu75F5tSiuDy1s44N2wj1yCG6Bcj5Ns2GoptUFTeUZmRnRvYz5XidoHYDFKHk7M9kXoEk36gHoWBZf",
  "key4": "4zUrbDuDt4eLMVRZZvacwXjWWuPKkAi8VhGZrYvaURrmxNeAqiFSRQE3HWyrF41ygb6a1us8mHWg2TAeUmGpFR1G",
  "key5": "36W475WYv4HhxATRbCgN8tYcAL4ReDT2wsGGM5TndDBngNrTDG61vfs2tF9FnJ6gkTPUKXM22BiddyaCzrtUR2Rn",
  "key6": "QgERdKAPDRTLLTFNZMReP96LV17hw8tXV51U3GXsFPpbko8qPyNazrhS5nqfaVaWZmZ1doFQkTs8XQn81qLjP1N",
  "key7": "JBhc5YTSYM4Jy3dmJNEJCbzcwSxWQanKyaYeqgk1bQMWRAbNUBtanAToiGdnyhUHgmVDCpYp67Co7cnfauUqHPs",
  "key8": "2VkUG9SKUs3bNu7vigAJFqBA5bqXkHZDyQ3TcGtHSPrMrZLeMg18boRTXN16M4jLKnc9cVmLJhLkgtqd6Ahgqhdy",
  "key9": "56vWingqvjuiJESJPgaVGP5uFoeakRvPM2WTZK3aca6CR81cFaYPs9pNe3sVwVspqADdGjL8X27PN33ZrEnjRbhY",
  "key10": "5tbTAop3jN85BR6NMQawcun6LnPo45nPCti3hf8vNLaG6jr2WXAfffLrCPzmSfBxcC2ravZnN4WG9j11wmsi3C7G",
  "key11": "5cRTUybmmEjT8dAu3YnyfTC9yHBD7axqDcKV92pJYBHYKpoAsJfsb5RUkPxw587uYdQp4H5d4ogcnLJtpANvgqXV",
  "key12": "Wk8JCkxMZEz7Jwv8kuNUT5XoRfnuGzZ4gQbRu3ByFXqbJm3agiNvVXRpjSbZFVtjiwpQZLRr3reLuvQcpSurZMF",
  "key13": "4cC4qT2qGFQjNcXrgexsHQGzb3mC8WEbDxqx6y5UbkSnDkV6k5euXaCTsxriMkhYPxKjFDbE3PUNhbtEea2HxYtc",
  "key14": "5WhRB4sdn7esEyjNhzAnY77D9fLUKVhy4Njj3nKWcyGfRoj1zCTAw1oD6NLp3x86LfzRWuZxvkesf8BRovKJBdNP",
  "key15": "67nDEn98hDfXt2zZsc3XPEu6SBika9oux2AFgjPXKP5rbJ8WcmXg786Wb1v72YWZk1d9WenEmkzomtgKuusd7Szs",
  "key16": "QrbFZ8sXVhKwe2M1Rw5tuJFRjE1TrmhYpW46xmHrgiwdRcscL9uHu4Rny64f3mqFRVjcB9KmL6CYjJqP5u4HAtX",
  "key17": "37AT7B9hFMySPaq8aA7U9LmjU653rNtDfdCiydKsL7KasfSvzo88DGnBMr9ysA6K5ymvgwtgEEVWQ7ejBTwcBnoP",
  "key18": "5QB91oaccnc7i6yH6vVfeDUoLxtKbahxZhQS49KjJ5rhoq7s5pJ6e2dwieMz5SJ3R1Wa6URLVky1bnjzGPA9Nrf5",
  "key19": "dfpyN2zoaf1ZP3nXsHXuaLsEEvA7vpgLWHtxNr2QUDv1xgHVdkWM4e71QaPrehrUUQsLUy9uXhU1tp2t56jrKBB",
  "key20": "2PrMzbPaRVAigwjMokoHChBGXgHejJs3ukTstpe37sqSxEDmzuj3qKzBQgWx6gPK8Q8mfjygwEdUoTyRdhcc7uMY",
  "key21": "849V6kj4hK8k412q3a9ge3RbM1VmHjhzeWVpfNSWuNWqqJS592Z6DiS84D6opavYpyYetcqj8hHRW9JU6xksZf5",
  "key22": "4SC7uCCoWLxHYcoSicUXHWBso1cTtApQbNkUuXPTXCgkVgBC9BXEY23DoXsWDVTqnt7mcSZThv3GfEosyxmwNnmh",
  "key23": "5ADo2oVE8XM6AxZAVTzFweYY3tS6KRHVJbXrVzazynz3BeDxCA682wvKak48DhDWZh6cES31wnBzVdhSzGQDS7vA",
  "key24": "yQxyJ5f9Jjv7kjdzXDY7GgWEXoxkZ84nnrus5473wz8PWgpYrd3Ugi42jP9Nea1m1xoD2pZQich18fbhhYpt7TK",
  "key25": "3etkDfoQwhABRkNBaBhE9UobxuErL3jf4cQrY55Fbyhk5mR8WLkLjaqsSxai5D8xvgnfV5Qucm8CDchFBBFDyKdn",
  "key26": "4N1vym7WW73nJaJHU779cgkdW12fxxB5UQT2FuPL8ToKmbBiJF3CWwmSRmZEV6aPMaYWRXN7ZPsRqX7FUXFyoNL1",
  "key27": "5mqHnCrM83cVVKchNze6Kvhfy86nmuCpCaGytGR7tvu6kMRt8sU1UPfmYTZoHnpALm99DeoCAwZ48GST9e1wrgFt",
  "key28": "4Grw3SYNsQLcr2Ptx1zg3TtnUWGjgn2knQ8BAV4426MSE19jfzK6TywYbeHEfAdNvxtSJMVqDU7e49KMyvU8VJUF",
  "key29": "3FWXPpUV1kibKUP8zzeaxekpgoSjBQTKLjeDZrMzYTSSQkCVE8JCZsZMp5kcutZAR9QaHTNsc5NxYWAusjsWGTcp",
  "key30": "5dH2MJTJfKH6UEwEMgVH7XLRgCFgQWBjDocRB9cPUDCfttqe1mUCkeTE5sAFysMiDadStyQjtQnW7S2cRfAbwmjF",
  "key31": "j4e5b9MxjsVQvpdZFwt5MveyAVbD1xcKYp72nciV5XmHYTYSbdGRhygGacTarMEW2gNkUJHLawwiXYAF45UpQd7",
  "key32": "33H6Vt7Jd229ndZKkZEvChK7VFVkapUaVb9XsYZTz64oZZWzBqN5iAA2EZcFfg6VMqTnnjThv1hf3aLpp1MsoAM",
  "key33": "4UyAgk3cUggmU9B2wBqDowqnYHtPigjtc5wKEA9mTAjKwNt2mKZiP43ZLTJZ8d8nR9aMUSQKXyxxsdfd7hm8yGas",
  "key34": "3GWMrfBZzvSu4GpUekhfUJdeG9aExM2hzKV3GXERiV82gF3Np6Jfuo6Hk4DnvzVGJYeMbuL9ZzM21TXrPxvHTPAP",
  "key35": "WYgfqdyhunR83EFBhA4GQFaZAS5YvN6KM9KcPrhbsFXm4ivhCicpAn7Ey9kSGrqDNKCtfymBcvTbxvJ76Rpczju",
  "key36": "56P3tquczMgutn4UPkwN8SenKeJR2FecGNAaFH8MS5TPWWjjL42JRq9Y5zEFuZvobFhjkBEDx6vNLeBHpEq6Gfjb",
  "key37": "5DGXaQM3woKzgqzrpUZGuNEn9rsCpuJewPhr8cigCbWKYC5aWrSKFnZw4TtCwuQc4C1PsPSkLQVnLiQ4h1XiGdQo",
  "key38": "ptM88KctzGmVzzXGhqbiJXknA964y4oBujvLFL3cjha4LjCNKPcgZb1P7ytApMyaFHw9gy54N1gdXTnTRjUzFuQ",
  "key39": "2JmJwQAe2YohF8cjiLPXUEdaqHchS2yWg49AiK36epmRH9a8a7TTQR79rjhMGAsUW8XEkbumzXWpW99qVzkFEDvm"
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
