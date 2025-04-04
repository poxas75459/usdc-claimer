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
    "5XsDKbdCRoWARPMtpi6jnu728eG7trQM6YDB7kCcoY6rgfKHAdLVFWAYnsiC6QHYEiJWr4obPmjTLo2sANSCPhjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lp9rn3bEBZoMPRxvGwYzxE4cgNsBFraVUwiMJsdy9fXBCfKm1VkiBm1M96z5weUDYiyzK58vdcSfCfVyKi4vFDc",
  "key1": "4Zi5yNuEfKun2h3AW2CZfPqbpHWygmHzxzxChzdoy8yAL5t7vQ9PmkhmMBc2zoopq3vbbcDATEX6wa8ArSfRNXSx",
  "key2": "4Zys5iFwLQeu6zKTohwXa1ULkyzDkJGrrWK8NKk5YMnJUTkcEbUkKDAMXAJyfy11PTwuavT1L49kBJT8iFHVrL1z",
  "key3": "4ufiVdmygKnutp8MMnF9tZJBXUiV1xSW6q2THoh34gxAFGCUNXrGGRNNYGNS5jjyub9JwQyk7k9ENKJ2h5h16Qae",
  "key4": "5zu6H8qztzsRNXmBngn5GtYLvgTcSoijCcw6ASs3AtPjPx1dtdCpgGy3UkUtoD2HLVqdZtE5uWD3mWFWiMkSi7GD",
  "key5": "5wKENjXqLF1TwC2vt6HbyCtiwadoL4TrQNQnVJL6qPN8zsApxsr3znpHEmexvjHGnQZyeir2SDqTqFpoZ1KkJieC",
  "key6": "3MQ8EQuJonCdfzn53ApbGTAGvcJbcKBWBZWxN81wPW9Rm6drkDLyHN9RJfqrWAbgeuQLowUhBGjaBq191k4QdRpS",
  "key7": "3itAKKTFmRMgKUH2WW229BWYpnVZgsq1d5HWVcGcyqENF7HXgJiFe9CkJro8arpgtwEbtfQC1i698wD8A9o1UwRF",
  "key8": "2RF2cic2PTS22M2DeseUQFnbBdNRF71C3QXzMkPZBincwi8uSPQn8Ruj1RVdiQ9NyKrVgnHwpjfPsrnq4BLa37Ua",
  "key9": "UEKnvHvjwncWXXn7reGpYWJWTpNKDmWsTT1PjjPLAPxpAn9Qiue3hmdC1hZcbdWawjsqdhznzjeFA4mULDm6HiP",
  "key10": "4DvEAceVh6rFoT2b6PAEn6TJU1d1wuRFe2Zto9jUq9cDf4uXt5g7GEWvTUSRN3jZxtpo4Ku1Ke3RpoBDsePzxThR",
  "key11": "2s215kCqyGmBfKmxz76tyfwZEnqn6QqdNP3MpC1ayTZHzJF3vLs2w6AMRFGjQRbgTdabuDZzbzB1YJnAN3rn2SHB",
  "key12": "2z4KcSe9dysXTh1AjFN2f4APmBmfkzLyxWcNjVimE3teU3xRDh8qtEAWJAzTHtL2yW7GZMDx99QQFEWmkbRgEPCD",
  "key13": "3UbDJjqrivMfBN9T6WWz2WNTRx2xeVEdxp1ZvXUsrZMox3fwSA25Z7kA8WcHnWvNEndikshuUpBDaZtdVraqnBS6",
  "key14": "22PJHVP9cNNKB4adBZCtpun9Fxq5c4hQA67s5zt8SW2fHbfiwQYbhXPXHDxz1u4QebyvEfvA8rGBT3TzTf9JVngE",
  "key15": "4PSoe8apTTvC1RUoj1aDV2EUch2YosH3TkN2ugWn83TVNMwwb3AkeDsr51iE8FTBLK9FHQKjkbJTs7ZnNDmnUYGg",
  "key16": "2C8TEHcpreoLEAB2TjxgJ9ZdG7QNXB2dTehxFdadRDonQLcQvfarFMbZ6GjXfWrimPCuHLUTbgFUBLJCfbwi6zCm",
  "key17": "67ogLQwQeBHzzPwnsVeRKGz22Se2mhmrvt6ppnq2xLiJ7H2UEijtaDVAWGX2sdBevYPRErFg5e763KrnCFLLeBU2",
  "key18": "3Wjs3MBtDtjbX39xHDxEcK68huEjaA2YfHMdtz5WAictPtCuJYhRWJvEkP94g7itw3zEXGXpnK45CwLxwKUUpPL",
  "key19": "2MpXETwC1J8YJXTMg5NZV11pcE9BBmHHEW8iM36r4yTaUUrJ9Duw27meq9GWmUZYn5LdJohTapu9d5U4DasXRmd7",
  "key20": "52JFgHxxJEC4QMx9UvhVVgMT9vKt6zk7JUDeKtADpnsZYPwaRSuXES3McS4tCp5Vum3XLBy5Jpr5RzcAqEaq4X7k",
  "key21": "5eqCBKCBXsFwtGSWMZoiCbfmkNHXw8dZk8keAEdA9EJAQfdj61vptotq5Sz7TBxnu6JqA32HqD3c8vhVmAXGqCR8",
  "key22": "3pnCKbGvrkGM2d2LHnLTBi3QHYGoDndxmPZuNixxWKEjTE5bTrDYJBwraBQ2dXFT9j55h9UyS5d6xhyw9gTBJDLT",
  "key23": "6VPzPF4QWnvdrfcozwDG5n7FsZhRCdJy2J4HAYUBHYojVLvjmsgJ4Cz7xKP61e2uvtixqRuziYU9My5pdZHPQ5e",
  "key24": "3k8jBoVX8MQUm2vWfjQju4yWgqoFoipFFkYozF5fEgPRWfgyG2DokSkqFik6XCy1y7PSAvU1mJjuzmf4XM2BfCaZ",
  "key25": "eoiGfKpmdptiUnAX4iB4fWt19T9He4Hx9x8FMK3jgbN6FFGN6mTeos1wjqDJS6hi14zVLpHCdjer9fXqrLrbwRE",
  "key26": "nmvUw88k3h3PRyPsa6ZtVoVJqNvePvWtvfatq1kV4A1c65o3GSd3Xt5CzdLTHDe2Aowh9favzAkzxztXbsp534y",
  "key27": "3czwck6ybE887n3HNUdemKQekqwA3FHx9b7FLLmVWRF18HDhY8km6fToM53SkbQdGUEupzUAysFBVqwYZxjy7BJ2",
  "key28": "4aPvm42P4dAdtocnEvxazAeS6SyZSmp9AZ6PXAsnpT7kcvg37nyofM6zrBidjhB3mJbQYfE2F4rFAhEvcemdWFiF",
  "key29": "5MWP6h5ifM3nqwb7rvSHsajYe1EufEqspSVg1fzwdvdX5x5JxWhkaXcjscymUo39VYMipFkdQUsUbPb7cGgq2DXd",
  "key30": "4B9FcP9uoKmAmZUuZ5X283CjvN1ZoqTGxJ2qzeEBNSDXcYhnun5rdUHUi1vzhAk9zQqr1FF4g1or4duEEE85Vrfk",
  "key31": "52Amzosu8mwHCay9vdoBBHCGNpjJ5NQcXmsEpEhVwHpdfw5ePsYTuV7hxajUdTgF6qJpVxEDKVasfRx3wo3kPumK",
  "key32": "v1N9qw9fiDH1h5zgMMAno3PXYAsoAtJbwEVZ1ivYvYPXjXCBFbGHQafoovi3ntjiT1z6RfQitoVDDhnAdo3C6ZQ",
  "key33": "57pmuVVVZcxHHdxBgn7TS2D8d5uzTRHgTRn62yp4tFoq7gPKKyaDbBZjbHRCMJsvrvZrPbcUSb6ab7Jd8YkuUS8W",
  "key34": "RjCZGmMSxFEtew8J7DEVHS1CfnQmRd6JLE18w1XWTrv2DQ2QY3UjEM2pET8oWD13JBBQCxN5KWrFomwkCQV14pC",
  "key35": "4RjLHcvPjscW6CSbHU7TBgrgps2pS9R22wPJ2bLbDvPQV5mUbPMoXw6ymmFckrnpjwouXaFdKM56xveDGywzuncf",
  "key36": "2iuPLBfS78b8GwYmts6PY6NDYWQKHs6sTFwxXuaGFWJE5jtKhDjPfCyjuUZaVDCX2kXezXYUAMQh7A1Nijc2kweN",
  "key37": "48B2xnwzudqWetoGyoypL5Q2SLjiNRF9yUFfUSTZ67TEPm7xzL5K5K4fq5PgL8XaeuHPGd53gWimAhPwMzGZvbdR",
  "key38": "23eQ9PGh1ASDzBsCZjWWaLHSc4JxwYr1L78YWGJX1q6N4dPRaP2zZqgjhmSHifZ48mbYtmtYuyCC7QL4G3qPLZDX",
  "key39": "2Gwkx6QtiZ2vMGLte24EhPgXuQtHGWuqcd3vxcCLz3v4dL8H9Ks84hjgJvxtaWo92RcJdZoQhCZ7CrBLbfFmszbi",
  "key40": "HMy6nvCsvE8tjVVpsvQH7KwCmDpkd9qBPmHBYBoXUZAjjKp59oF1sZq7tcrwbKGK6JkXC8nTAyn1Qc2a3gBaTa9",
  "key41": "2Y5rcypAZW5nBx7JwcdV2rKmuqHxCWTWv7g23MhdZt2a6h6ixRXDDkgqMagT6aKjg3xyRR6VMYwvwNz2ynd1nwbY",
  "key42": "4mbgoqbCfbjxuQCjeAtJ9EzhmsZqHATXNoQtjLxhDDTYc2Dj3VBGczsqhi9YfyvB4QsV1ZDZ9VT625To8k7fVqKJ",
  "key43": "42ua1EEAdxqYNG6Fvi2Nkxyf1ZdbZc42mh2MUTvLMq7cAarGXutFHfzcUijEjDMuf3nvHZ14zVuHZZUorNGxT7An",
  "key44": "5XAC5H3E7tTXbNj7SsvzWx95Ex8vE7HeRBYsdLC3Q6U9rNYYUm11cNpg8yeodKVTiWQfDKUQ1rSvNy7QveCNEFjn"
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
