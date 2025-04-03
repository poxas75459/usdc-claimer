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
    "5NacitTCMSQjV9owKFsGxnfg29k19d1HBiAsjuZFCfDsGrtiTscEMETLgfePhAJfQo8cMR6Tq62HTodjCLUfG5NX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DujqyDQGwGd3ZRfPVf8NjF7HwxwEWezrz4kBi1tH8A6agnd7XiR3hgyNeKycBJAr6DsgJW1oayimaL13oWp2jW",
  "key1": "2EhEYiKJuyczSiCw72n3ijtfrjrapeSrx1aYE3eFd3kNaiZzi3tJ5YLdMPbGWMS2CcEtjwzZ5TNjH5szKUoB9BbS",
  "key2": "2LnfSPyMq7LpHwxmC3j7nG661UtjNzoYnGma1CWfxEgPSWMSwPNWxg6HM3L5ZrN6XjsBgA7Za6421mXxRV7GxYqv",
  "key3": "536NsxRq6KTw4aAfLsKQvJJtMyHt2C2EC7H6pAEQ4Pua2c2iysEiaBg1cthXxD94aPScAzvb2nfBkxL3qRLbD91v",
  "key4": "RaTL67Dnytw27VTTAKHck33twKUivq9wRuHea9S8DWU3moTmbXj58Md5QXbKsaAvMWotyN5JYP4rTa6RZLBSdFf",
  "key5": "3rGP3t4HirU9Nt5AZwq8KzYxMSBKNa97XbntfDmRRtw2QUnkprwq9XopCvfDhKc1uFEztsF3UQxvdnoTBSKrxh2d",
  "key6": "3NYsQ6cxrMRWhvsLFBVPsXcXSizALgZte8z7qqcGyj6Aqgrhd926HB3Gn8BC1iYEkr53N1ehZqdt54JfRE6chYDt",
  "key7": "2FwK9gn4huMKeupq1MYh1VDM9zisU1w2mwcV7Ad7G4dD4Z749vnP6fne9EFQUCX61T2uLs51qZsheD4dZ5vCUnio",
  "key8": "2v5t7oZh2aTjoqtRavPZ8uemLkfm7saCKDpM4kP7x6HJEMwyAdX6zu6zfwnDN52UCVQTQVArXhqJsiofidkQSn3i",
  "key9": "4WReWQovS8e8z6B86YXQqhagAU4JuZqmbqNSAnTs8vMDWNh94YvWdqiCyf89fdPqKuRBdELovbMnMhfT7q99Mgiv",
  "key10": "2tdn2RxNz2nT5i2DNwwwQBYXnvPBLCGh4MPTYZhPRnvBvKyd7dnFduZorXTCdeBrrbgnpQbfkPfYWjYyTCXL64ZH",
  "key11": "4cdjx2SxMaVSZDw3TY4yoyRE8jhQEij7V1ZGdKmwNWDbdeZQdjKshDj4uDdQ8yF3bMEbyJ1FUiTiirkD1cHrNs9m",
  "key12": "nyihc3bzVr7kFNmr6cvgxnqiHmTkwonVfbYswG2GmPvwbrHb9vvEJJ6E4JjVBsnpPyNfxJLdnjyME313yLzaTNx",
  "key13": "3tN2VefgXEf1acetsrpFoxDU1dX4yEg5bXEjmWKEhCBEKopagNbYcckgqpCuBYRR7r7VTv7NvJMZUgiui43EH4Pj",
  "key14": "3DztGgmrSf24gDswNBGyARkbR9BVYw1xvbMmtYb7mFW3tsgLZQmtDjCXSwnPAZA2SkssTaKpuydtiUmqFskmK5Ju",
  "key15": "3HtQAobFqYDpe4eJYNbmshkkYp2fqD8tCPNBvhkcrybEv5wxrmxETgbGfh2vPYKCnXnpmqTCzvgAaWZUMD1s6FGu",
  "key16": "3sGPqAzaaGaR6WgEzkscDLjtMYgdZTjnfiadC5Kt1Wh2vNHQyB1zyPjU6Rk8MM8vHBihM2kg4D5zotCKN9nw9skk",
  "key17": "5T4gEWNBswP3wVLk5RupGnCKUosrMMTPdWc95sUNmZ8A65dRDJkG552qDDdJzwNwSmRrgUZbp7ZoMq9unghkmBBP",
  "key18": "2JgukttrmpV3JYrdCRBBhWZ9h2shGRok2giXjampMSUuzRYVGYX9xUnizKrCsgbYmYyJ9jifhZ6LXYw1M3g5urwo",
  "key19": "5ER1wCmZ43eA16zDXbTQhcbbLjnBshboqcM48J1ZL9Dygdiut6JnaQb117mbuEd1bfMXvfhWfMMDsRs5y115DggU",
  "key20": "614xJ3JXS4C67xY4242W6WtVaJPDCyViRCcBNnrBq43pxxMbddXVu1Ha8c6gsXGnQWRXh3iTELFAoU1gXQVEwq1e",
  "key21": "3Kmc6vWriUEKJtUStEmEaZfgRVHzWNtFFEPrPCPfXKHfphDt8avBYm3jkSMdHB44pMJc3FZDeWcsHMAm364WkuVT",
  "key22": "5swdLqWJpeBhd7jCoaXFttUqDQ4CXPbGqWrVZ8ibjVkXWRRQfSbm1reySfsyeZXsxWycPS8Ewc2MpbzpeitV6fy",
  "key23": "2CRCPqWR6UuGVtRkbBuYbWUE3qvoBAFTz4gvwA8yhBDA3oiqT7twFs36QoqDmMuPu4w4S4xwQ6CLqrEvPFpfEibr",
  "key24": "6gNsfBvoGF3SvtzXUekozSttgZ2wtgSTE3BiwpynbRWyG2hdJ2XV7xAuVf8ohQAySiKVWeu1836X7aZQ9Qnttd4",
  "key25": "2nWoGs6EE8oPwNBgwxUEXPFSNyCqBhWDNSC2FDCe6B13rdusXfxpHy8irXvKpsteveD4hriYXhT5sceo8bh3YYpQ",
  "key26": "ap4oL5Z8sM3FsshSxikzvxMchQx52kzNihgknFbGM1SmoK9syR8gDEjHR5YngHnTmPdPiEwwP7HjL4uUGvcgbo1",
  "key27": "2ze6WksTU1mtajUVAoDFFt3njriaeXU3omAKeCLTJ3nm24wWEbPnmt8bkL4sBet8XqNSSmR3U9nEvtpFZA67kHWu",
  "key28": "3GpjArS5ZKaXp4zxHKXS2DZHiBF2BfyzJqaSvTsRe1Ti6MswpeAd3tLU2MGAQu7Y2guXQgaH5FxkSY9ujX5KmxYh",
  "key29": "3iV5TDLf1EYQDTvkeQLpYogaGbtMsWxnZHF5Z2FpoMnDTEc6NLPv3m5pqB9XQqyXY5s71nNNTT9j77uq68vv8Xcb",
  "key30": "477E7F4yufZsJxp6qMhA4WK1pSMuMCKJhkH33i8SQPfhnfiVtpUxLRGv5GcYf96ECNbRr3ee9LpQTXAZ4NqwB4oa",
  "key31": "35fWEek7hGKsKQagDWnrEEz3XBxrkPy35TCQSbuaz4uKWkJNMFJatv2x4Sx2aTf6zXFRVmVQJZ8BYqmkHVzz8FXL",
  "key32": "4XJyBTKobioSJJh64r2SqETwJGviWnp8qaNH2zzJ7ExR5WJTPuhrATNC9gryY6pxi13GdDvpQcA1KYEoopEgp5GY",
  "key33": "5zJqHvjkrUVo6HihPGEfArLgtResUYaFL73dfm2BviBpTPk1hN83oNNWHnmaKtRA87CntZa9UofHsN9rrVWX8VPg"
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
