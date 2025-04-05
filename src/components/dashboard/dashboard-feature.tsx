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
    "38FvEC4F14KNxns67mp6UGnZ51u5E1nLSUneuFACwGrQ1cJdqsaaHDn3B8BLGoN8zNXD1CeXHijnSMiHZH4Jho9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCv7pDyQbpU55hAGFYdYM5KG5YzTvfeZwNFTr7VdeGdy7Wgq2gyDgYdqsuosJmhTfmHNREuj7ytXg3NFw7K4Uqr",
  "key1": "2DhFSQ1ktUVnpyre586eh2fSLL1LL6cGeaxiP4Fyrb1oGryjp8NzxeCoyDNrQe2EfzarJiU5zutH8by88Sv9kGGP",
  "key2": "37rRTCwrSZuB2EDrvU3AV5eDT8yWyPFX5obip2KL4x3xsfpwm2eEeCms1a2DhYq4VsTcsYjUmWb39EFTpAXgChbR",
  "key3": "41Vcsw9bCaR9L8hvSrERNvz88FotUaFzf1qkoFwfao5wjpwQjYCQmsRGqqp4RPQWi9cUdd4MKjTyBt4wBqdCLUKm",
  "key4": "3KejRf6qzW6VZoyDb4FHipkk59kSFQrSPKMT9YzLGdhRB1QAVWTUrnD6bSkK2bKfHBosBoKWD1ySetFqBDJ4PXUc",
  "key5": "46PJHajnUqLL8oJP6Kf3txNpNxaUA3viz5ipbw7ajHMdsY8eWqAKk9jyQrk5J8q6LPdfFG5H8MK2prLwBJsNSR5N",
  "key6": "335CuGaopUJ4MfTGtc2E4zKrLy58M7Z4hcYjeHrDm2svM3zpCedJaqqQ6dHtQbKJgh63oy2e6gPJZm5mvkHHEaai",
  "key7": "5VDQNjNCYBK8NrDACwwMdawpBH3KmwKyphBVt46Gb3C1t6uDAscXJQCZ4mKtFN5mPveozri57YpfqKQ5aaFhFb3S",
  "key8": "2Ei49MaXD9X8AQBiMWgPPuNvXC2AUtTLNFfeEWqHhaVyDLWxZTyzbzDga2Zuo8JjUyCvLADabK9o8gbXtkYUvg81",
  "key9": "5GwkYmiFMtRZNi4F4CYms1dKgG2GVtDvs4kSLtmCumjY7p4fAQUpPR7qEQCPtmLNnUQoxUsLpXsWwHrN9LoaoTSd",
  "key10": "22A9yqyr46NsSRzWYpWtf6ajGCe5bdFTkvufqEu5cbu4EGXTpRAEwkNsJqLM4AMoKy1xKQhwvHfeQWJyw8bg9VKq",
  "key11": "hAHZd9Hw4Kf5G37xYKGQfsgPpkAHqjRLXJAieALriewxb6S94yYMfTHPMJYDvxQbhe93t7TfeLdZimJvDbJ9MMs",
  "key12": "43HfwFYV2NBRXVtkVeYFD4L4DcBprwFZXaUwepxbmqh6VSvHC3wZaZqWvXEuNkFkagrQ8E2vJXhom1mh4t9LmY7Q",
  "key13": "4Ph82NYAsWg9dbKGvLTiNyZDxbGtkEBLDL5D46s9gWr7Yng1ZHgyyT2K5t1uQokvi7RRsSy1fD3woJgHS44oqGjA",
  "key14": "3HgB14E5tXGFSBkkv3LixAzod72dFsVX1UsGFxw4BSSGTZpWBkMybFaAzNsxCeTgkNkQ4y1PhPLRJzFUjo159a1k",
  "key15": "3YePMoHLCsdCcKC192NWf6SETD1q9nd9tiELqALg4uTTctyehG36BDu4TcSKBH767wHGtyY3JcK9cQk17kVt9LFb",
  "key16": "TTEVmFKsEXcyTzyHfAxvDf7zcyUpyroLTNZoQZMmzjDH8L9s9jJNdKuA8J5VPX73UpZTN7Zh6bybSLrxJeV6bSS",
  "key17": "3RbEFczykZi4jtFXXF9TfTpsY2r6FXeRj8xMLdP5JNbNsv9AZoqVvyzTzwKz19J2jz3tPF8BM4sRo1XusozwTSZ4",
  "key18": "3bPyVFhzX5S59dxJZ59JFJ9bubYkp2J2QmBx7Ec8ZBPXPA5KrCWGMWDC6Ka5Tv6h36EZA5s8X15QqWb5QoeLJ6hv",
  "key19": "5XPa6eFMDwjJb1thqYFZcTf4nNLLcVmTvsgNUtxCar2cmik4aQVaqm6gXRty6LyaZRQgUfWKC4RR3cQm3zLsRLm9",
  "key20": "gSVXaZqMx4Mvrm6ZkvBGJ7DBsL7CwDxQeQ8DSLNVsw9uuLT1Cox1UDkd8btKCtkgbzATy36gysSkb5Uhdi5va7o",
  "key21": "5X37S14d9vPdehhaay1wH3oxi7t61HYqk1FYe6Lq1cDKC48Ncyx9w1ew6nAqjkUY5WHzLxkiJjRgvWu1xpiDxyrw",
  "key22": "5fsQKhJ2YSE9fiW5JByv9ShbMCgLXkQyybbFpQFnNtfBqpW4G7ancBrUxrrbW41sXc5MsH2HxKNBVy8VXnGKs1WH",
  "key23": "2eC2npXY2taUzybWHTCx5xfLauyZiTo3AdcgxaPN1RzJtPUjwnLEBqWZFRwg2kD4NoE1uXFzTooxha1biV99JfX6",
  "key24": "5ueJYdKDvQwieLh9wwaS9JCZbjkNJyoiXdDfqoYiLbk7GVyS26z44SHMEsL72dqM2FEnSgotNLLoXL9zjJYZExjW",
  "key25": "Nvr7kKsZXahYcm4YhR3wZRCWYdQjELguyrjoGCxMRib34k4pGYLENVt9fDzw2KY472DcD16canpu9ycCRwtUpX1",
  "key26": "4gWeU8zfCL6CzZSZMiV24vXsckNe3yUkyDWHF78WtE1TQrRHJUPXyBQEfuiCZf7myEETrZtFK6psRsg5RkxGwhnb",
  "key27": "3tXYaqyrvGWj7vHFPXJz7m99A6cpQyYveUVisPk2g7j4higAe7DaHCEQ6kHuKGsA43AtrRYo2i6FoqFFuDe5bKRg",
  "key28": "5761SEnEPZkC7d8uSpqRxdL5HGCLB8X7hucptKwQn7sv3Xj6FmZDA3Fh9gdBAMoco4ed6NLaHSBFqNSfxYd5XdDT",
  "key29": "4qibmecMWwcuSp5H4hqaFK9CV1XihmtXpEgQP2XGHtxwkGFQH1YL19mhMi8GRimDUFDTYtoZQPQk9H1bEszXBXVu",
  "key30": "2KJk5RJNcadngbv4dwSRCm2d29kxEVU2KKJ2UkLqgNTMbux2WzvpsBhvnCnHou7NXzzfpoqERn74quLspFz3RiPF",
  "key31": "2bBaXCQFeubonQvtQqs8Ymshm39uR53wV1VgUwAcSrn9omcWLJG5a1ZHwNFYCGbVsWpTE1PuvvKBEq2uviUJvGqb",
  "key32": "29j66Zd2V2tc7uoQDh6xGXhBiqbN6rx4nvW8DpZQAk5VZic1syUvBt7nckefZKpbY5BmBJC2WrNMTToQXS1Uc65N",
  "key33": "3exa8rG2n8285fD1qziLV2qWVvz9EdWKawP1pNhWzK8VmJxitdTf7YF1ry8J38gnsdJunjfYZjJ59CayDugasoKi",
  "key34": "5VUUxowWhWkfh2ii59DDSpSSNwZU33pZpyoFXXLFiVammepS6MFBaGbT1ToMbj21feiAqPRcVXL2ikkKgofrcWHP",
  "key35": "54j7xyj8RVX7THpyQsbsKScEeEinsXKDPZ7Z9YH5LwJqZcqHzuTGKGHpmaRaE76unp83Sxdvi45xqoqZBWDSa99r",
  "key36": "5NzPW6iyinr5Zme23VF5n8CnX3pWDE6HuofbDgwpAQzHtcMhEJ1gnwyGEAhqS7pHVCJip4g9U5BLCThDXAoxGdEa",
  "key37": "3GRFKGRm6dN6okW3k9e6fdui4w2bcwckUTRQm93RzCzrXgNrfzyfLAnbpw4wborac3KnDBW6rfney7GWiSRv8JNU",
  "key38": "ADDRRUGTKLDJFTjS8GEVTk7RNdTuEeCU5PbNCej48HXVhZiHV2ZbNmhsckYHY2U1vGrGia5p763AtPh7LCEgJTy",
  "key39": "4AtqFcHS58m2Gyoh2dVCvxzbbo53nSrBCVyjykLZRcJi3p8U65amMdCLwMd3AhxfE4MM94mXiRzx3jt9ypqdG31w",
  "key40": "2pKZaKrevgYj1ZVXaGTroDkmr1GjVncdQm3kmM9aoZd17yV7MF4GiBXFGoKniP2bgpTkWKGK98UbVhu3qvGxKDSv"
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
