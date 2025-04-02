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
    "5XGwhZg6H7c19Sa8FPoradQoD21P7Xnabm4qGbdfizuBBcfLo5tjK8D78aGx1p6oPBZuyHcW2SJxiFoA5e3ccqt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhSC5sqmYPX7BrgbDBHK5Ttx3KiG1tfU7bK3PZ6io2bUBDcBff3dSthrPct2UzFr56kQekombbf13qY6NM5Lqw4",
  "key1": "pkVL2KTSRiZmUFsoaaKDhERYMBGBUSXMStL4BEMPsc267nXek9RKBn7X3onn22vRD24CR5a6eeUFp2mWiufTvs3",
  "key2": "2EZadGt5LE6Q2j6qRBHyxzUhdgekaHD74pZkF6iWRU8tsjbmnicEN5CC9M4M8f9BeBDhcb67ktwS3jVJ8WGZNDJ3",
  "key3": "439FJzJLUUpZ9i7TgMUVGARW95qFpEsQHBDSQMtEwaeaivRRBGCBcRFUvgjyLmU8pH7V4DeHgEJiPHiKgPmojZGM",
  "key4": "3acLKsyznzgkoAS6CWMb7LWbZvfTfxjAGCyw7oF2szkgtrSY9f2Wq1GwyYG14rutzChZiyexnFBj1synWoWRxpZ4",
  "key5": "5Y7Rt9BGrRBUUyEvC1BjuRwQZ4ZuZ65hdZZLsrWa59RuiuqeHN5EKSphVV7rwgwPYLiQk1Ea1wfDuHuqqrRukjVa",
  "key6": "4uvA8Cjn6Vhom1X3awB6Y4nKCaRygofDpNcjB5ts5kaHtQbLjNPbsX5WzucJ2AFzwN5556tkoTPJeCiYzHZqiFFb",
  "key7": "5ofdGokaJncazBMv48hHdmje6LjtDUXyxAgTUieN7mvrVhh3S6pQG31eRy9kEpykn8gA7LQfuGS4gP8hHNNyjijL",
  "key8": "wa5EgNjrz4rGcGe8TKfm2dN52FF32k3D4FeK57iqTiMiW1QV79AYxXK8RJBjSpzjxmgX49WEqBqEysApG1cCoVk",
  "key9": "5j94pnqDPLhq2CNHQ75sPLdQnrFQWubwd1jJxPTZEaHrFJsXaMXxauFkX8hgwW4UouSfBJKAZicFp1pTxMsH1oBz",
  "key10": "3Bc7piik2SQit2Xyw6TvERpZvXWnLP9ZcXSHVZMDGjvZ3HZsfyHD13pPJQsygcqSHqDJsfJmftzBttXKWWUmHvdM",
  "key11": "42HXN6F18Lkdb7TYuvvWQdW3dTdd7rScEp84NMSM6steBtJLWRyqM4cLAJjenroiATjXK1R2uU5wDJ8N9W315nSF",
  "key12": "jKvNVNFeJ7czcMfApLWbyPnb44BXZxn1amiRzMwLecyfyuxEZdRrzn2CNgcfjBQyBHrqsMX93YMyeUaad1xAZHw",
  "key13": "2Cb9F1vs73iUBe4SyPfequEQvadEEKPdB7Tt7MKTkhKLA93RHFEG68UW7afZHzSeenidi8pCDLwW1J7XuD83BWQL",
  "key14": "2wC24bJ1yczdS3RnrrvVbyC51PafHWezyAL3fTbG2iQkMGNeDWAHpuKSYSd6k2TqBPviowZqWKNGprgZsFrvvCKj",
  "key15": "3MTYUbHb7PNaP5JGqVDdNxY1qdfzSAuvcmVwtsdwvz9mrNu3SgW3EkpmG8EFCs2zCVNnN3XSFcAFscFY1ppPY5sV",
  "key16": "3nEissfLorCnE2zkbLXSMQHThieS2YTfi8KY2SW5M1MmPwQt59dL5wfjAS3XvuJMT1ihEKcEddG4BsCgtzWDHzBH",
  "key17": "29syPJH9Zy1ieUC7Knzia9SSjoe1DLEgs8yH8ovWxaGthUsiB5rzFLjNa37RpTVySaGwNcrns1rSxKcCY9LsBAtd",
  "key18": "2Ja6zEzzn2dcHq9k7nRgPWK2KCgS1MYCjgwFVSByiKmtmZrWX1uGBg83XWH7LpJnJqndYSYrKofTGT7ouzznSxtT",
  "key19": "5PC4ZBFnqPnUYZvKszBFMerNoA94kFwn13qiGTrqiBJk48se2zXYAfuwtpiQNScmWcrRaTLZoMDu9UC6kBrBXaKv",
  "key20": "2E3r7kvq42Hdg3LeHhyaTzntLftCsVyWsXYw473W1QVvADF6JunyssUx1fSmjNkLW2uoi1eYCm54G15KS18TjjcP",
  "key21": "3VrpjPbezEeCfAMuSWX61qFsDQahz9a4DVBEemTMZhmekCWfabUABiE3SYPcCxFSJRxn1cGtq5ZkaSu2QofbMG9d",
  "key22": "42yhnLBuV2awAtiRGnhd8VFgq1ZRHtoHfg3YxXYafYFsJ1YMgvzXdvKGEfphtRn3mnG1bvD8f7AiG4XNqvwy5Vzu",
  "key23": "2vDYHbVAzotCkWarBtLUwxxKKRyyUqNPLVHTpkU92K7Uue7ixjZHAq7rajpunwMwUmwJ4xt5C7YegmeQWnQ7sQwC",
  "key24": "Ka99MsUP3NY3DEFygjg211Sz5y6mzZN7PXjdmjyLcd2B7bKDSWPNuJTaegptBM2CtCmJafWbQZFDccsZ8pPC7n7",
  "key25": "SDNHS6HJJweiNbukHnPq7SiEbgyRjGUDNSYsgqXQQowB1uCfdud44Rx7UjpYyRgvuLAVmHvZAVpbtfFxC7yFqiG",
  "key26": "5kR5DPZz2cCeMSGs8DoVxPgtfcth8kq4m1T92Cy8QE4PaEHhEjiXaeK4stJeQUQG1nG8Cd6dLZv7dxvTc4QnDAEM",
  "key27": "E3PMq6Y2TCeGMW4oSNLYvBNaF7K185o5jq12667u5mFUFfEfhVZhVQwDW7xxCCWpYsv4vssTqFHPwLsur2mXAYX",
  "key28": "2zbQy9WVQgVyZze2Hwx3Pym5da5yx559YqPbzLMBmkRAyz34PnKJvRHmVvCHCG26zfmvoRyQE6svCHEHRQuyKPVe",
  "key29": "3QeAB1v17D9zYA2xh4KnJ1ePMrSEPT4nAMY4grp8PViQFGyPNN3K2HZdxDqnJGqYWfZib1zbUGk4LJRQnjPnRjhN",
  "key30": "1CG1NpyBnE9a2T1gsANhAeQwEyYCLkTLi5W2zxS1BCPArMtfjiJFZv73QD1abhd6g7Se9HHzrJJskSTjAQmgz2p",
  "key31": "64AXGp7XdMqFLmkoJCEhQaBrhQsXnBHd2wDS5UGHEXqQMiVwWMFPhvBNLgaWp4AxqLDDq5x7TYAEqv4V53vbUkLB",
  "key32": "5oUy7MBu5G2ya9rwggnVk3hGkgy23FfyLdoqSkYSAbdCEsJv3b65SWz2dsGWCnU21LrtJ2mFn28g7rTZ9x8mS6ER",
  "key33": "54wW1kNaA8uzRjJyK2CAp6GFvpCzcwXmj32uKwWDyU3JLcNFG212YFAcKr5G5DdvfZZzrTusqZgTvDsrzgbLKe29",
  "key34": "79vbGPjrPhQe6q1kh9x8dug9i3xyKSm1faAxQukLEAcVTYFopzSbpubosDUArKtjiC5mbeinzb1MD7hMBtEq5Bz",
  "key35": "3a2qiDhrBoJ5H7NKXeEPj2P8YnQydNtDBg23d963BZEuL3DfSZjJAHEnCoYcTS6oRaSRdk5GsMibpQLnsr9fofrW",
  "key36": "4kVD4pFt613UWmnU9hV7HpqJ2L3GgDGU9JuKcLm7J65ZdMCMiPayQ8BR9vGXS77hAHXjmfVQqZv8SehEzsBRfDDn",
  "key37": "wGnjrGDgQjoVYeCA81cDUeBeXJAK3QP2X7qahWpiazcJtK7H1SVX7JiRP981N9e8cCrE5hVv1kamRUznvJTFK55",
  "key38": "5wiYVUSHFbcAc177FvgMN8xvcgdTn7b64zWEb9dvUADv4jqAyWszAKacVFToZoMDx8jEsYyW9hViBDMnyeJHMA2a",
  "key39": "3wudZ52mYc3ijLHxindZYZSnqzLs4jFVEi37RYK2qeVjdkDrKhWgkfTBm3BghNWwD4r4BE7eJcMMh4w7uCZ8HbPX",
  "key40": "5KzzxHKdsUmPpSJRNJVRHXCrgRQXvvcnAAHtDU4JANAvZYVT9rbHC1pTGsKkA5okE3z7chRHFVAPgGDeNav2wGZX",
  "key41": "4h3DiM252dtWrnwc9b4Jbqsk8AFwZuHT8RXEpYjdpS8v1dKpvPnS9G4pHiTnXMPjtiKxjfmxn1sDemFoWSQnp9eL",
  "key42": "2Wwy1FYpJwfR4rzDog2KE6jxWue7R8Y8EmgtYZjtDWGC81ayT9D23dgxVrdNSuF4znRp9gBWWmzDJb8zC8RCbM3q",
  "key43": "4h6YAAomUjN2WfxybmeojVFtNjsdzGAyiFriGygwfWARr1kKa5sVHjnn7VAGEdMtDsFLbSLihqJubJ4upgJfFivp",
  "key44": "5ZJfVg9uWhVtoQsewZBUvTFpFf3YPqb8WvyJUisBhjAKh3diM4ahAYgVxRzvRyN8CvgbanyuiJCxe85Y58d4We3f",
  "key45": "4xAv1sGVcvodPbu4oxeEAtv1nGQXYkjk8jfasbF8q3AbNoUdFM8hgrj65xjuff42wbJX8RJzGkjKmZPc9LtqkbHx",
  "key46": "2RixmWv9ToDW9dpmuKfU26nKdGNa2FeBZEZUgSCse4gSdmPSAwRyoPj4eK19HVZgdzRZ8zz19SfvpfSTkpz2adYW",
  "key47": "3bdNVuyuRuB5Ye2s2AC55rqgxyqwVcQKphWzWjD9Z8hd2DLL2KhEidGPcpyLEQyAg5XeUUX86V7WiqZhJjQUgjCc",
  "key48": "2xLCmyuYsLJ9fZhPGbBdeFLe7MJTcAmQiBzZfqip6xvm39yWSnY12vKd4sCBdNc5qmEYf3tniTaYpk3VweTtq5mU",
  "key49": "2q1939qKh61JwVTRA1EafzXs5iuSjKHtiADUf5aoe2NYUKwVmjKeVPYzoEYoCVE2wtFhu45qrmvTrqhHBPzufi1E"
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
