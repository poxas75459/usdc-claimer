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
    "2boJ1kyJcnCHsToPEW195haJ1TYgfuftR3rSyqirLvhQzBETZYrbB3KUm5UbppJoSoRPUWa2BHV89oShtbCgCby9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "384ss55KetS8KccKfRWiwS4pihFJA5NY4yB7A5TX2JYvFt91AoKCD7zhuCHWrJK76VcCdsDgj6hK77wPPBhw1pTb",
  "key1": "3iu6J23E88YbgJ3mg7K32fKikbL1uC9fcyfKcB6gmVhsq4swdWNrrGwimukXQcS4EfqJ18qQQjz5Fs8MbXUAt7wo",
  "key2": "B2JuSH5ULhmyzLsaUc4Naufdz2DnvUV7xcXkcXQ5uPXQCqY6VALpLLSa69TxpDSvZCUz9v9YVYX31w4KKEWMdcb",
  "key3": "UJYYpKmWNgzsSsARyHn5van61gAfVJ3LmYCS1p5hVoPnAkzTQSJrJvXVuFrW5kG3A8GR62Gr4fpqMzGWoX3QNVz",
  "key4": "2ghozcmEJV26KD5wfSFjZxYXXApVQSCbk4VnrLdPzN6XiHPS2oBJuFZ9RqFSHCprPHLdpBzhge7QaaBWpq8bYBBd",
  "key5": "LnqTDXLtm73FpXw65FBZpqQ7soSHo1BJDM51t6H6nUTjnG5taG8EDuVqW2dN7uK27t4nVcnU32Vzk2BNDJbrmA6",
  "key6": "2HYvwCcHYZcEFNVKpbBa8FHVU65xXrvxkuza4pfkE7bTvkmFCHAWEy2rgUHcVrLYgd8FvJj8uShkBhc8xUt3pVkK",
  "key7": "VoHKwQQqHEDmtk5zB4KU2fLQGYDk7Sgh3rSjetjebvxwJdgELSFwuYSu11WzLKzzBeVMH7dSzWDvGTNtvB5SFJY",
  "key8": "hGYZxRvWLXJFG6GxLdnueH6gRJXcp7Jfp1BhfdwcwXabprisu1irw5NYmMmJMxnqyVVsdd1aW541cCtq7hJT4m9",
  "key9": "4gKtbGLo8zVxcCDZNYDphSXR8Z9Y86ahbPUP9P9TGL5YskwQT3u7aQmXtq3EpnLLoHnzgP8WZ2wKbeLWVBSDpbAF",
  "key10": "7Q8J8NdsaBfpHDGFjheazuGJ5YTM3RiaAihBkvmBNcEsUL1tWHpCFspQFLD2iTRdy4fnDuMsCegea5TYhTMGiA3",
  "key11": "3nKYzu9z69QWjXfhYfvSwYNsuGmoxAN8gs8z4UBNx2ce6nscq88Dg64LYmoiVg2saHufjBMPhiFgX694F12qut2S",
  "key12": "MUFSUTt4RmQqsZEMdzXZe9q6ADagV4rjtnnQ73WPKRDqgJdn1a6kHjtfrhSTemCSnvBexvU6ctqcA1z8iEvEciG",
  "key13": "3bgU4WMExoswJnnANYXzPV1gTrba4EuaeiHoWYAPr5HQixEcaddfxVUpVCJNFJse81LhwBs5kZH1KAoPvvn5m9t6",
  "key14": "24MePZbdmZKqycUDS3DHXTSq4yXmURi4Jc6yEFsJAJwy84Z7XJjq7dp9pRvN1c8X31Ke71VjcyyrmVy9auhVWHxV",
  "key15": "5XmytiPyQ6ZP6aWEjmdsHs6XV5skyHsmiWWELUDWr1tbLmWLSW1nGqCiPMQDiFmznqFo5aBiZw56ymWz53eM6EEE",
  "key16": "2MdL3WiVHxUjKtHVoDP2dTVsFyLJJip1XMVbCGwHiPXZHyaXc2Swb9mqhLVyxRNMjccd93thoiyfSN8JGEzHpCbS",
  "key17": "3RT2oN2cQgvofacrY7iAzAPJiWNpaZnJCeRE3d3Lg33UEknejLRngHc2pnS6cHBzwts9Ei3YhnLTph1ytyZhRg4N",
  "key18": "5ownZNfVqt3cvWWd67bUrTznPaBeAdiZkAchNHsfRTvKihE4ddd7QRzLLuqzZN1Pv9CEPA9WCJXpG6YigcahrVeL",
  "key19": "212gbWnFr1KqK7oGbXfborgPhDfcS8yus7EMKx6iPgYwq7rbg9RmPXb5FYVRgAiiYoqfvcXaham2qm27rsobWzMr",
  "key20": "4Cqq4Zwu77NykaDLYz3vTnA4uvhCTkoGKHJCqitTRueKEUvpwzKG9JRDAPwTnkc398KeLZFeLMcPTyrsuDeYNi1Z",
  "key21": "2Zeyu4YL4gRGfA7qEFGUj1oohCNZZLzNbdiznQRmyz2RTwfZuxKCJNhavXZo5LkJdugkhjr9WX6hTVonQops4HBe",
  "key22": "Zy7DUCHMYuyzFMkPKQXNpeoYxWrp9WgBY2MpusrfFiF1KdEi4ecXsJsrHD2kKFLD8ythzB63odeuVQCxPQeB4rM",
  "key23": "3bW5ckHsbDqxRTofNhnAhjhnVGheARC6Me7TwBHCF6w7xmnjegkczovbEsCUfcFVeXGoiTLG54hXsTfyGXJmyuWo",
  "key24": "21nzSbe4HKDzU6d337DW1VGnSJFQe9aTvM6d55JFSKQhePL2NTLx65kcsnPXcXurbyoC1FvVTAmHNEG5gYNsQA3q",
  "key25": "53bi4X6oXvf63PK2yi7542fPHPCZyVtBVmD95XrK6BjyBvYzEBf4A9Z2V8kh51nnJstQCEGTNjKZQyMCR5ynELPD",
  "key26": "2e6NzBz6NADV1ZGMp42pac6YBSFFcR6jadJdzCEoS7sT2t5YBhk4tVJCrKrwZhHiJNfcoWhzhGoFMw6oCZcqTRAX",
  "key27": "GkPFr916kdxYvjgK1xqfngRQJSDVbQR8sEvib4fyJazFr9eBFjHy4i4X4wsdPNTHDSaMfCnEkBCHr8KWjKTt8he",
  "key28": "4Kuy3v7LbFb4E71Fjm5bREeFzC426QBxAJe4hy4kLtExjTDyZ1PCz9zaVwpHuyFVGVGmJTgNszJjbtSAjCT9L9aU",
  "key29": "67Y6d3uoBuSscESwdjsiKFagwR4qEJ8NMuGQLLPVhGjLpLWXyBmhJ4Pxazu6wtgHUVDcqjNWL1KKdpL9UY2aNDvX",
  "key30": "2DS7jEDyhXp27E3x4vvynDmzJs2o8E6UCu7QZNqe9gE2B4jxyMfTQjum6wfKjup9oE1vdQhqz9EXzvYjDn2yHijx",
  "key31": "4HKzVeK2Jgrs7GQAPcHgav9meVeM5tkTGvCHVKS2WmBKxrHL7V1ctGtVedffui4i3LzYYQNZ44istgzM3acDKHMf",
  "key32": "4BCaMTvU77q3N8p3rWadySm8i3jk1mY8JnP7AExiE1DC1rfASr6PC75mZ6oCeusHQWmPcsKqu12Tke4FAPfZANcU",
  "key33": "Qg5a2MvqZkaYYHRTG83JyucQj8FKMCv2dsV4s9fxMyzcBSzQB7Wbvv6hshT8bSymrHKbrTPzeRxpY2fHd7qeEtT",
  "key34": "3mxwFJn8CLqQGqz8gCKqtYgUwbeBxenMoPLW1baHiEbLEbiq6bqqToyJaTkm6hnWXS5pB5oPydEGmXNcYcE6ebWt",
  "key35": "4MpuVm2L57eguSrDsJuqyKbgAx3ph3dwUbiAvP5DkMNN9wnU7C352zaDtr2XctHGxxDFKEwc22W2sA9xjNJR3s1i",
  "key36": "52DYoDrmFUpAGUsfWkiREJ67VccnKbWwHvr6eGnQvWL6aEWUSH4LKdCjUEbFcsWCcPGihLRU2L5WPXrtAmAfGQzh",
  "key37": "25F9FfzaijzWVBcepeu9s5zg8sC1BGosq3iTGEvyDgcYcHu3QnYfGBXmPzb7s399aXboayHXEXnmzFGnD7STPuom",
  "key38": "5ArUJCmkakGq1DF1rrsiMngtnnCqoKf9Q4k5ZLWHB3poYuNojUkdWRUHeF6ZCyUYLq7Wrnm6GNkNJVGdPzfCFpaF"
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
