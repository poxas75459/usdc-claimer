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
    "5K1TVUKy8bzr1yp2tCFSqUUioyEJGNcPxn79NgxPDHjkgDmJSTCimGzzfriYAEDBn6T5wmR2fpARyNFhVN6wFKym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fh1oB36hK2p5zuEyQVPAM8M8iic3bSc9R2EZkYaNfPq4HKsWmnYyK6XWPfCEZjWB6BgMKJjRW4PHqpoLXN7ZRXJ",
  "key1": "21HCfWEoeKUTZJccYoj8kuAvSSmFQyYW1x3rcmdHkAjPypechpu5V9RHJW6K5Tsw9TmC2c63ttnHLo9YTK8JC7MH",
  "key2": "5QhJVVnpxdk1U4DCVE63uKfUYZ8e2MtxCxu9vMKAf3tBLdWzPoYEuBPoBH5ZhtqbS7MoiVEZXC1BXTJg8pr8oG1n",
  "key3": "5gbfp3msg2C2PMWbEvYeSpmTmsfXVbX4GxZX4CpVNb26qB5GD6hQZndbXTZ3N2C4Y8XeyYftdixYRqxzSFiHRTWc",
  "key4": "5TbbbAgYk6yffSPVQwKecz4tA7JUGXefGhiRpBk9zvxrGvfwkSSdA8Wurp6oxXGvXedNocJdRp2RBeAHWtoj4t9p",
  "key5": "39hXssCntsLF1vfnexRiGaVafWENnMxgzWrtXyQSqqhVfeJBEGWiVuFCdmMugJkFF13ncxSJYavVF7xUUDAb2QfK",
  "key6": "3GGhzqWSe9if6ubkCk87572uZJznd2rAyxP1HfmSWGdetM5ifSmZjEFXqrGKJYvVbfqrLAvTVV5q5tQ6fzSyjh7s",
  "key7": "2i5p5dLqWVLauVcgnLi8koyWzANKSR3Mbr3h1ktaiGPDnSZsUaCTQ56KqQ1KEMKqJgJngMdWnFacByxjCovUzmkc",
  "key8": "4EEUA7BUUmxQmNVHDDmCnJ8R8yr6mUGjvcn7TU5hgcTMiuw7SibZM6J4cAVk2mwrSmxThDa8MVrDqVAAM8tAz5jT",
  "key9": "NeQtrsmyoEdLvxwMrzjjQg93ZJTsyBFHht9TcLyUDb4gHaaystunNdmbbMHKSbAY243MHSERp6TZnsXi81ifpSu",
  "key10": "3A9P1KaHKLMDq32RbjAejqjyoTe6oRaonniCVuzb9MeKZHSfXCgJCGAggLHWCSkk3nZ6D3631pPBv8GGeVuViLui",
  "key11": "NbRzLskLoRp7LaR7NzrFqdkkkaZjNEHpdRohenThno5ip4xybaqJvQX2HFURHofKhUXWWJt3yukuRvTFos44Hnn",
  "key12": "38AwtqNmvLnLcTWfvmJyBrr4Vps9LEtj5yEat7CkTNpEvjtqESN1VpK1pvNt4L9LW11zsvoCTf514D7etZEkfxsb",
  "key13": "33dQsMscZzdnGLcXUoeyia2ca2LLzV7XhXbVXQgr4j8J5msMznHN6Q1u15myZ1ygf8Z24VEbB1bySDiQMMqLqYdX",
  "key14": "4nUn1eBceLHU8gLN534RMUTEnwBJtcNLc329Y2Yw58KTA1kLqZrNuTiYvSUm5Eusj3TDRaxQUxYBVCMqnXP7wBU3",
  "key15": "24etZr193Bii4kfDs3HeQyxMwR6VLzJeYZm3Qpbbkqi8PH2g93mnbgn2CndLeVN4u3p3hr9SCU5i9YyzFGxdTZBt",
  "key16": "4cU1XNjiQ8EByXaZxjkkwy6KeikEYf32XAinZBkhW51h5SWVXcb5XxHkwgPsM5BdRhvHFs1reTBaubbKk1kKtJ8S",
  "key17": "a8YRPhFRb8hMsUGuaEtrrowdbF4bmSKsZN5dTdzTARQEdDjUqU82sPE6z3AEWd3VAEhy5T5BikbYozCCqXmdZzG",
  "key18": "4FRc6yFnPwXRzCBiqKdtBYkpZv1mjc99YFfH3TXLj63DYDw336tBQcw85xXJJRq5irULGgGK8eGWkbZgNXUrypQj",
  "key19": "4osCA7a8VhYXYRzfuUZHb6gKLrF61VZVQKJ5QVUzoxvRRsQ677sJQYyPw6Dr7ZqDdVzZJtUVvkhDQVhSmNTB9psa",
  "key20": "5hCbE8d17biLMcYurwx4LHhZKHji2dqijktRVDYB2fDrGfYZ1CuVmZoG1Rm395itFPhLmZJsYNXNzYUtpM36hH3w",
  "key21": "24n9woeiG9diHfsxDuUX1XuVHXKzvEn5ij4S5zrCHUaWbPPthfynceF5ipriZZMoFcgVV1aVm8Y9rU1ddDMP3fCf",
  "key22": "5D6VS4u9bE2BxoRF3h69jgmKaeFtbwdnojV7RHVe1TFJKwwsCcTCBGeEtFiZhYxorKMaMS6qChYxS1wFo91arQqk",
  "key23": "589u4wyu75RxLXMHkR8UnSdsFzHRwyUr7aN8GKoYFTJ76mUUU35yArQC37f9MsQ3e1Nwjxru4VpyuVvz1f7cWKum",
  "key24": "2wdi43bUPzp4Y9wh4aRo9fxJ2aqKQSJau6z7nVgtvvECcrDupdDkzfpcddCZAhJDUgEivY8hMVkbt8jchwimo2Rw",
  "key25": "LknS7bVTJSfUVQLzoFWmLgvKDBDucMuV1uYKhBdwdVz1Y4Aye4EvqBfiTtoEQXbGHnBNowLEgxxymKrA26gnVuC",
  "key26": "2dP3UHLm7qbF3uHyAioUmwtT46MHWb8VaEBrEhFcsEpXVDcGdWY7BtcN3RyYSy7tabpHx3Y9Kk2D7dpKG6KWGzQX",
  "key27": "2r8oUmLjf9UFMxTGpF2cBDwt5nLEjB5n3zxpUZLYjKmt7tXzbx1xDEhUk1y7aWxWHa4zjUsEriSKYHXWs88ky91J",
  "key28": "5Q3d3a1mAW7iq5DH94csNAKsts7b63WGscRpH85a9mcqaruNbLzmXg8Uts51MKmocEceZKM7qvxbAGQKK5b6iTdq",
  "key29": "5YoBwCFP6NcWVMgfW1nWtykY1TqMhWDmN6SH7R2vFJDW3GFVKXNfTrEBx63Rich49B4gkEStQbSFKLxAAcgG7LAp",
  "key30": "5wr5Tjm5dP3YhDjRdpZF3usCwoTqNLXitwCNSdgUZH4EBmnZdhU4zy7SrYXL4z6zTeJX7xmGBAL4DUJVk1Pi2zUu",
  "key31": "4ThQaCxw3toPpdZxGnSq431ytSDayUhnq1hVmS7BFbimwCoHMCEj8z8nCS4iAjWzwiJsqVry73FcLHJh5iRay4g3",
  "key32": "66uYu1zb1y68HvaqVK6ngno64mtTQij5xZJy3zG82nRsLCVcYwwCCQu6JF9arX6yKdp5jRHzhUXunTQwybwxegSh",
  "key33": "4gHvFEJ1KrXHbbd4myFiSowBaxxPWRcz3ayFjkF1VggJQdUw1zbCN9RDT4k4Fo2FKbQysBg2cvByXnNZJJ635uZj",
  "key34": "3J4eJ7bqG7gxCbue5xaH4PGnqVg2LpeZ6snDy7q7Qom5xYNnusNCuhA5Mw8J1num4HmRyHhQEyaPcJTmNnQdaYE1",
  "key35": "53ZQdaxeoEtGWtG3pX5rvMb9YRa89AgJxC6QogJVzrArdrUL4frFTE3V6PjBqgn9cQu72vayEXBhnqdeNsGfKwyK",
  "key36": "2vAEzsUC4J9Vg8qKSk7D2U7HycZxvdJH3D15EXsTQan1VLe7C5hZirUZZU6XfkYQV1Hb4kv7bYpdSYrzqqMDFc27",
  "key37": "ie2nezPMQzdbqyZVcLiwhnvnnCZwsiK9ApuqD1a2bq1dKgv6BDXkbwgeNqthXxP7WyyJDj5CGDYDvsfXx2NaD2Q",
  "key38": "57w3N7scAUCkXKTDZkpTSTCcQBAX7hGa5oBVVeTL4eVijJPaqsjeWucgWL9jewKSjMGRcCurBmmTF5d6RYF2d9as",
  "key39": "5Rb9Z12ygwnKKE5CBSjJjYQK9o4cSC2u2VARvcTm2KQ9jNmiSWRUbXGk2W77RgwDhD2DgGAd1aq9NwaZ6yYNkgVx",
  "key40": "3vFqnPExC5EaiU4yGyrnQycDMKJzt1PJJJzSE4JMb93DN22jW7r3vfMbrGo4QcCVANF2uazuEQfsd7EvvYv36RtT",
  "key41": "3wByASxPGkFjebrb7K2LmCn9gdmpgXWPpwyXUoo5n2p2PhAnxcummwAgsCUJTao3NsjyHYjNK7GGkpTmGs4hZi7a"
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
