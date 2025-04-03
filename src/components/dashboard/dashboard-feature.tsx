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
    "2VVcDbYAhZWYsPa157syF9iWRJHbAkN5Was6mswfQ9iCsBmjZiComdWBceyyxVa1EPQ7vrQDjZEgscS67izuMjR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2QNEekMGgzBRhPamo8pTzo8X3Sb4SpqQB1adnGkFHjWndPouww6NdoEBDD4Zh5duGhgPSPwsBNXgoaLSF54SC9",
  "key1": "2uPDnETZLuuKZheTiRsKoe34N2S2ChActw887BV3bozPwHH3NiXkHvbZK4J4cxinMUAY47GvYz8yVT3Dfa5f5Gw4",
  "key2": "hUrWGJAbzXMBQhTBQRxS1eM7BcgQi1uU8mb4KrZE69UKqW7e3SZKthEcrZvLScMmc96TgXEnveQTfFywKg2ztJG",
  "key3": "3QWADsiQoT9sU3c7E3dvtzRd1eSF6rTUUzNixDzFaXCxgyYuNXNZtZedR1PVupvC5Wm48eszZoak3LYUv5u92ff6",
  "key4": "3pCDj3kFZxDBLZ5TB5azHDr9Fd1uQy5tmFwQzDRkeC8dYYAy315Tb8cQemdHvFwxqe2LwAzWr7V7UtN5ETViM5ow",
  "key5": "21ipcU6QsoxEZpvtW3sy5C2R7EnzCc3UycwXp3Wye787529ABTJagHeALnMUv4Hy7ee2HZz81FwnkBppnUqEhdBA",
  "key6": "4w7CsNE2CUjj5DNk9zKSf2SUQZtt1cs4UVocLs8WV58AXMh5Vsha295PwDmkZBgAkk6yRNowVpJEujTFiy6kZUZP",
  "key7": "2pMmJUM9c3BQuowtaP6WgAMkQ5wrQATWboRfejFB591uDMmGMGvhCEJte7NahLkaTyDiXx8qajWN8j1eHoL6EVVc",
  "key8": "4j3HrkcfD5xcSzxqyC6vZcCzSHchHcntkG9nvQw2qv8cYuMr6oDBQKao6KouNmyukzVzNe5PMQJnxFJqdB2HyTyE",
  "key9": "hvEbfp2ScqTWLMWzeSVG8AYuYPE4d1MzJ8KePJMX2HY4pKNvDTPLHAMS6gjK7FWrA9xfNdjJANJ2D1UNwm9fcuo",
  "key10": "5ZYWJjoQHEAUHNmznAAgztDv62TnrmaoQboCwZ9RzY8wJdcYX4GEJXtFd67GtSqowkwrqE5QEUC6wN4iGR6dGm6k",
  "key11": "55f2tNnhMEdvjxwSHULNiHhExrSFXg6Xv2wwMMZobSxqA9xbzhj3cmbDyPgcjcrFyVsTFJgpHs7hdoV4NuF8EU7h",
  "key12": "4CAYuyM4oDDQG7Fm3uvAtHLrHA3qfgn9QV8vBhMcAJMebJTErj51jgyiFEw2EvJ42z7WQkejhQmLKsd9bbjbj4Ht",
  "key13": "bLXzMe3Hwd75c5Skx6YBq3nRkRt8q2wFatjXVTVqQpjnFzhaVgVf2LdK2wWXUxgqbev2mUNfXLonBPw9tFmU89B",
  "key14": "3SYToHaurJzkzPu7QzM2d46S6KrAjsTQZjcx2x61gNwaPTmUkA9RYmZcBxniN5aKujRFhL36QSrK7zw14EFhM7mt",
  "key15": "iGj5hfXTURM59TfjURHvz66vViegdzfiGGWU2ZzoPmA95jMkzHPudDtY8LqhKLqerbgEvRzGvWVtASsX1Dtvk6U",
  "key16": "3SuXhjwFAaRQjoTr9ZDktQ9ByFYxhcWgmJdsrEftDxGxJ6hMVQXxMQFVmisM4cpi5dXgWbTZsYawY98WZUbrAgCR",
  "key17": "4FiKH4Ur3KFRSUQDv7A2juoDVVvmkhS6a3PEwkbTXUZUzWG2zwQQLq4egRdSePRXE1pEMHCzSy31fhXMDRLiorTF",
  "key18": "yVLYBfmoV64C8QxcL5uGWJmf1yYPM5Gbx4FcVJbyt1xteDkmw2w8Lhx5dnh8mABoevPKyVH5BacmZveVhUQubPf",
  "key19": "4VxrdHXaXJDYV1xrsZkjAD6PvFa9Z2jNCPbs6MK97gKC2bWjFGtx9dV54A7sjKZRAjdD9C6suu6nWfPysAGauX8q",
  "key20": "MoWbDsBHELndaNQTPUZ1AnnHDg11ByxEkQMHMdeRnaZbWhua2r3fhCa6wejNDRFgcJYHe3GYxMezmVxj7rzY8bY",
  "key21": "5HmqukoM8rLtCeCWfz7KzekV65frsgpeJD6Etv1pBeZHipZLoF63Vr6e3LaNgZvECCLWfn7by7rBjpFUtzsqw2h7",
  "key22": "4WxXtf59JY33JdQzfdH927VfHEV7vjLMi3xdKZshN51hfgBG241h4VUtiBj6CA1J6ibgRrWZ16SZzCT6NGmRssXK",
  "key23": "3vuD82n1bU4VSU8RhcQHuBXGKKPToL81wuMZuidHx73iBSkenQCngA5sf1mHU1446rsYnRfkknCzVr4WTjsjcyq7",
  "key24": "5aUo5DZWCavqCwQGx8HjNwH9dCef4XZvtURC7dfaiTLRAMWwtawuoFyUUQ11RGkzThMwkT3CnuJ1YwokmDo3RuwQ",
  "key25": "3Jn5imjXCmpF52UbdNK1n1QkhnwtihUmbQsaemmgueK79KFt3DrLJeLFFvg5TYBgkEkChSTKXt5qsJvBvHnX1ggv",
  "key26": "5nVGACC9uaUnFWBb5XnuuegJbwURA9Vi7RbqPKj5aZ2iaGKGypu8UopSDEbWsSQSGJu4m2JYVacfgDorjiZgNwXX",
  "key27": "5qNRxFYyJMAg3ib3pwSv1AzVmV5GRN2yYfKEviGKmJn7A5kDKFoacMGPzU1Z9KBgBChpicW7RutGCWhFNQhpQ7EZ",
  "key28": "42hozDoJhXJyidaFUZ1rbdjVyCQqVxwedQGSCaAZfqDfeBgirViSbtoq2YJsEDzaSQKKUfziSJRStXJR95v1r7Hw",
  "key29": "XEZsRZPLwwiEMvFjT5FEdt9rdquEmsyc4YQmnEtRbkSaQFmynizGFytKTgQjDN6Z4bf9PwDPxfzcMixQpzQETxc",
  "key30": "655yLnXhn5RcfaDBiQxDKHsu18EAabhEDwY6yFsYiWXoY1nfZhADPFrhNzMX84cR1fLEtHZg5uNNjUF6e2QzNcDn",
  "key31": "UnaXWSp6uSWmAF41q4AschSRtzP6Mo6H8pp6XCVuPJoWa7yECEWVSLFZMWXNkpNDpwEvtpzByxciUg9DzeUyLTj",
  "key32": "3nkyDGA9H5cM6pdTD2uTCK25o7u1KXJsEcDdgAsFTtryYChvBpmS9W9XSwBbE3XNVFfDRXNY5Vn2YMb5Pn1h1mUz",
  "key33": "UUV9kozcDG6NnCMrrmQ455iY6SFmMd7AzJaYEMzfCiV4tP6Xcf1fpCmMBCbE3gLz6rvpZoP5UeAHG1CmqsmVwPy",
  "key34": "2Q4KKeUVUe4edi6hsik48w7qFom5NG6PxYsES3wcMzsRWQdZAHxMMJ1BhX8i7VtEE69WLv4RYGzqeKerHok8SByf",
  "key35": "4W8PspFyCkSybWFfprq1F6GPV9tkkJqkzCGn5sF9ApeHRqMtMVbPpYpsBu6Ht6xvZjmH51N9VjuJrT1ykg7Ts2qu",
  "key36": "ADENq7PPzRw1Uo1wcMWXZdvHvRfL1zEZixDyV1fPVXFdKDPipYwTFRwcz1JiNnX7YFuP2JAXffEamhX5pTFguGh",
  "key37": "JHMkt2vKj9mVkXRbALsi5mPWkx2VP7cv8HuWci3RKJ184wmJR6przPrtZwnSfJErAhR5VYajk9fpQCgNAFfmCL2",
  "key38": "DbV1meVzqsZSSQstwmFnEch9KU3jZguxddEK6wpPDTtr7NS79R51JmSFGruAKQEtxGuquEbyAs5ad9paYk7ojWg",
  "key39": "3gbFxEsJ7THWbiXqMjXP1ZqBJkK8bSLzkcKnuWYAP26cNMQhsrvsDRoz9ZqzitUfXidBs9NDKS1wGpWQgnwymKAv",
  "key40": "36QRQ8rRMs5ZF5kS6NMfUwnuuEJDzBLmtJx44yt54Nu6C3vXD48J7Kq9vYj2pgkHHUTfZR8T1MAtvp41pQXKNSaj",
  "key41": "5qLburErZBg4uCftDKQ2M2c59sz4q846GCpDWHV8gvDzjuXZEL4thUutZW5na4oD5DRFnzhb4XJRRQGKv6v2Pc6k",
  "key42": "49eGMtnhPod2SsvPtd2LKQhisFDhFVuM92Qe7Ks6x5YdX8FZj2UGaVtsLMgymDz4Uc5dLD2sTfUK1yW81tf7FnkQ",
  "key43": "GFa51fx8rAYQXJhUadTPk7KgTd3h6ZpAkqjH78gFiQasqxF17FMwH3TdvZuaDUH1wCjcErNXdAEg1XXbgxLrvVB",
  "key44": "Recm6ds7eTRnCHTEdYduyXBx12RpeFaEwAsCbLKhpmz2DrneWcvthjVhAR7v48sjvHqfrKYRC7e8TzQxB6MJnds"
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
