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
    "67mUVgMwpP3Y66V2kJvYghnGpC86s8oh69pWECWwvo2m76mb9gA1KJqrFuHWKAoavjGYg5eJ7mubKXkvX5UHzyVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59njsNT7UVnSivQTb5ZQKrwK5mS7Fb4m3imnHHTf6YeMhiCDGL9npSgWdYWHE7nZLZS5LLAiLEo81vuRSWzMetf8",
  "key1": "5hSBVA8ntysmCbFzo9Ty71o1hA4gXqwkn62dtnavS9P3xjWEDhRmXQqqELigBE1EQitgMCP7ZGjYE2nF4J5c2NPD",
  "key2": "66BDYhKx9J1zPXTJ1kjAR48DkrEVTDjR32L12PF9J21EYE1Gd6RcPqLo8PwwZdH8T1GdqfuXyXjU37pv7cvcnYVu",
  "key3": "394vMK95AcUPmjcY8vaUeqTf8Hbs6xsHa4ECGshKKpibvc61gZmGcKT8dri5H9Ma7cTjVtwMRkxtMCbDPjjes4BA",
  "key4": "24B47HfRJaovv7Zf6oEBy9uFpLen4RJJqyCUv3kNXXNxQeSiWoBjpcvUcPWxbxdCvsSDzeJkrNtbStA1VMNxSZmE",
  "key5": "5v4r7LCnckwi3YfxxAC1vfjj2BJCwc3jkcJsY355E3JizsDKdpdFnN7Vhf3BkpsDjjJ3EQryB49gSFTCo8atqjhK",
  "key6": "4AX9NubSkWo8iw978MnX5rR2VBQ271WFfoLZUaAhvTY6gEYXW2EGFVDRoMEw7edwqY2GTL56rQZsRK9ZYikwiRgz",
  "key7": "4TxyP74H2BHJNZtK1m6yQi6RykaQNFW3Yq3tqR5x5Xippb1uiJArcM6tz7Xg8PDBCtbffVVYqqrddXabw8hiiT1",
  "key8": "67GCL2pUD7TpTtGCG4xSnB1R7APqpg6tzUPNX4oe2CeuwcAFQ8hScB3sDTCGTTDkPADYpa2VmAfK9hJG9LHqzWi3",
  "key9": "5K8R5SZ1XzJjJmydkdfT1HdvSN5ei3KL8NFd1J6GEH1NbNVRhntoWLfMZ8GU7gZxAZeCFbXD8pBXRWUnUqbCihhf",
  "key10": "398GMxh8QTehFpPJmVuoEuHQcbjBYrfXHpNVVpwenBc62aLycSFpSAAWtH7RCaZ2VB9mm5ee8vYBP13bp3bqCt9q",
  "key11": "2Expo48D5W35ETg6ciVqMybD8PTpE5xEQf1DLHuWpfgoWHFMNxfQW2FLLeVETdc3R8SECH7veSeDvW4djvdoFJPc",
  "key12": "FhwbsHMfv9Xyyp94cdCzNgzN8ff76RmyRuyRob9uECjTo21bNdhqERgfWnT4UEqTjyq4sQj1m3J6FMSsdBunUjs",
  "key13": "5yH3Tpd4o6vdm5BZ3bTJCw3EwwmJBvFioLQ7AKoCy1s1ybfCg6gXiGEbUCfoooc9gFZzDxcMckVTu5cgTTDsncNu",
  "key14": "hihtL3vezKhpDb2xsaKNSLAKCN7Ggt5sWK9YXSsNLMxz6x15bLx2k1YY1EUNnJfL1g5zKd4cwNSZ9e2y3iZVrNy",
  "key15": "634PquJoF1vvaXFsvnf57czdgQ4ESFxrg2wC12eLJeJhvBcPwnDDHwfUawZtfSgrkXKqxZeZmirMjjxffx7FmsNj",
  "key16": "3smBb7xJGvsPrEZareukGGgybVXEhXGDbVxXtkgjvC4y7V37Z3uaqCEVcagF33ZX8wgENCZtdT3H5JKvC8x8qvw1",
  "key17": "24bANLT43dWZQJLvBr1v3UXnBFCzm8211GCrJcMrfkwohqhTcn2uk92GMGj9C8kPP2zEGGDMSipmHj2JmmqXN4Um",
  "key18": "4eCP5i4cCAA9xJZUjHmSV4nZNB64jho9dP7dy3qVNAg3opfj9gPCdVq8mUieGpRNSzqn7xRzd9Hs8JpgrrYShZgn",
  "key19": "6P4FmrZLVWsK9RvJEDGNnVNZ1zHGYZJA3wfNu3oSoA8WhPpgoA22BQ9KSs37XjaTccDkCoG1UXh7RvxiuQZ8CXX",
  "key20": "5Qk9n8jXtXBcqi22bDW5MdPvExd7y7dFgbcWPo82RCd9tUMyzZW3iVkeEQ2xy2E4W8JM97TnDn5z7U8M3WE1EVmr",
  "key21": "3XtwftdHgxdTY92zHHQ21ts4sRjQHhe4CLPQsXc1RH7yoLNM17fi6mqZVB8Dx6E93QjBcwusC6FPhWmZkMusXhUY",
  "key22": "24ttYhmhaUwhykQuWjaTnoSVvSYZucLGr2kZzeZP6AdqC93b4NxBgyawf6HwXWu8HNbnT16WrPBxWSGckq8fMsm3",
  "key23": "46JVNSG11WTr5Mx7Gs4v4VtSvpc7UJmAcbo41nLHB9SYNuENTDmDpmei1jQpgwX7J7a8R6KMXDf1a3Q8mWdZ43rE",
  "key24": "4zEY9x1yqeZgXigCh5FD9NcCzsHjjjgFj1cgF2uJsKP4k3w4krMcMYsnbhsSCUGATuA8oBn8kaDHHFXnq9xVnmK1",
  "key25": "2RTKmpCnvEfRfoyZqZX4p435ADhonWLmoW86fPmZRKak8wqyYaWQ4qA7UqudZVc7QB6KYQa3yzUgJNQL8e3HE1hu",
  "key26": "254YHsuGvJHDUTRDRTeXCN8ULuLLDwzMtEHQKy4n1oAkexKGNhmCQ6Hjm1A551E5NEpt5vR3ADFTp5dSzipevbxL",
  "key27": "5usLWE6ruoAt3YckT3LKjnNaw39AAvEmDB7239DeQMNgdDBRUzr1rwbf6dJzWTfXWbGsDpdw8Q28GegA7bvXFBzL",
  "key28": "5wArKNbfk4EtAHFPFyo2MmgbiKrpuHWQEL5DvQgcU2BAhmd9VCPdWndU4MGMzdqLGqUHzRAowheRtqiZXyWrgQuR",
  "key29": "5FMbtVeF2fRRPF4nZrqT1SMEHHiXUe1KZzv5v2E3PJFMNt61m9NZxHHYz5GuXjgLLB9vzNkMZAdMruAnyJSbEmmo",
  "key30": "5GqXwHxA2bLfSsr4KpwfA9zSoq5np915XZURC3rXWyDNFjG4w3GTJ3BHoYJrMKFe4wS2atpssKQ1iZ1J9uSHCjpM",
  "key31": "4EVD2dapHKjNJq5N5nwHtLXZMAPpRw45sxqjNSbrPft3uxU4XFHadsyHdezBhVawePCpX9SoX8miyKNf2gLVi5ZS",
  "key32": "39jtKW44vHmAQvEsVRuVpwicZroUgaBFBhtmgF9BpjJacEAxKjhySLQyz2HXfJXaN8S88vgR1wkxQSrnawHtobud",
  "key33": "2hTZkgGKAHsvGcYcraTZAChQC7hV6s27st4qkhJQYg62ngCReHPP2Q3EXgsKUKyuhT2NVKVZ47Evavhinb7JZWd1",
  "key34": "3TgMmBhNDk8T1T4Ukv16YCUqo5xcBJM559ijhfYStpWkLgCyzZs1H51zFP1TTH7LtZ3CPaM19np6mEgmvGtdE2qH",
  "key35": "58QTGQjM8wtVheAYoA2WaJsW3KPPRktdr3ngn1qnK8CZxUjZwvswwGK3nec6XYtePPEiLxFSx9TJjXEmnS3CDhMv",
  "key36": "51WK2bxcuxbmifGZ6ifrkePdncCKXncooawZegtfpWmNnR2TrxoN5SSABa5N2BkBeQoUemSYuKEwtJed95xJD3DB",
  "key37": "4db6eCBkT5Cy6PxjoXoWQ1raNik3pCkCihC4m1izii8MwzqVWhuFCzyi5vP7KFyRx7k7F91skwxBAtMd7NqcR3Yf",
  "key38": "3AH9F2LmhEN4kf4qKmS1CL89Wd3uizLqs9UJSRTV86ZBVkaQEGp7zx8YtdbjPifpH9qMkDD5rtAVh27wSGekmZa",
  "key39": "59cBmXmy2adGQpankc1Zt9zA3WCBkTh2BsEKz8mej6TeFvdR7cX4v3XNT8rZkAUeWdp2Qqs4ejPzVSqbFJTU5Bet"
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
