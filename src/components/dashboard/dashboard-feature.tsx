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
    "4PYnwx6K6HdmRzU48vKdDkuyNUi5HZBQ4K4C7C17dyJW5ym2gPiuUDZvS2L9dFC8HrKMu5XKEHjDqDrU9zwEBTF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbSQDU1YJbXwBBCBhLbZa9HDBWqTM4iK1sAPfacdru5cS8xcJPJFAMH2unGmcgWUygF2n5kL39c7KktAS1kJLky",
  "key1": "HZz3NqTDtNZkiaJngFbdhynqS2puVKv8UUURWqa6Az1UsFRHsWzLdzrdZKCTDmPc5rLut49LwLggWcY7kbnggcd",
  "key2": "4Wn7cwDEG2tAkkL9fdz6N2JUqtNH9jDQfnp6QEoHbfTzcawDKX9tbTRFfQXQPXhAGaL3jwvjW6rTR4g8sWUzj8wV",
  "key3": "LBmMB7Wq8muVg7CRNgcNTEzTGqEFQNWmeVCZhHAAFPdkYrjyju943ii6LehpzRGRUaRviUGYvPcHVYvzG2tzRRP",
  "key4": "4iBaj1SHM1epzbvV87YACwBaJTq44cxSp5ED4kTjGg2edis4DxFM8TKkGKbRePpKtACQkfskXPC5S9p6tsoHaeBP",
  "key5": "1ozysxUq3k5rqsSNSpAWS2uijm8vv3AjMGVpBRKFCyGGyw3oUvTum2Rf7EdRzQgpG7Vc6xX2mXmZCyhTu5va1ro",
  "key6": "2Yta7rRrKwB5AqzrfiRQeTKi9JSuB7ntoo5RF9MAKFwMXZdXi1hzDES7a5rbpPdWNJYJQhwKbS9arB3EvnNYeUmz",
  "key7": "1oGyB1GMYjrmjJyiLG5visCE6jrPkVtkNfNeq35f47mpJucSyaFj5US9rbCWVcaR1gFQCWj4UXjhs5Bj1QiMBa7",
  "key8": "2M8rGDh2Qnq9vB4BhsaqhNCwb1BQzpmsvCeWRPXvpP5KKo7kc3X3enPwBVJd6GnxtFTb8J7x85rbgymB3smzKNAw",
  "key9": "ETokUSqa4iU7cfuLb4mHpVK9CdnU7a7qfiNvi9D93MeTGtwpgswkU3TJVxAHrQFYNDRQERsxHzqDoLsoCAMtCaB",
  "key10": "2WQKaxiz5kRMrUp3x686uVCarWEALQLTg7TThmTMQA2uRtiQDnqso2MErdy228f4DPVty72xZqpAcpLpjhz7mCZe",
  "key11": "4PT9tXdJyRzEVTtqzhLFxLSvzNuvqPEhq2rXeXKg5vedDnHJXx1Kz1VGYXqFXB5Q3XdXSBWEmhZXUbpsLR7Z7mQ6",
  "key12": "uUod5xQREn19MWGvVy7momuwLqfzVLG3dJiNFiMgrpJTpvr2gXgdCScmwZvPdGnsWaXU6nTBBPsJSEscR1fEWDh",
  "key13": "5s5aRgmUCzguJ3b72zTKYTFnJZbTpDgRh6qm8CEEpm4kfgkZ4MgcPXDmAyfR2mkw5P7eB6Q4RAzuwx4QEhVgjhkL",
  "key14": "67LVieK5fwJR3oHz7v1epN7N7AZHZ6gbYN6Nfsf6RLoqtWz4Y4EG6ZB4Vt6aKCCHNX4ADrd4FMcsWsYewu4UGHgB",
  "key15": "2q5W5VjAbdiasxuCG9wosT3BHP6g8gtH1s7vDHY3dGgK2fMTeZ3qAsfoFusVmAxSnqJYvqzBqu4NbaNXTKtD1TQH",
  "key16": "nRkDDtLHkAYQ3MCtfvqpbPia5NTTq3oTXbjn5wrmenX66awbmtRbqDraCEGovRCyADdzXqmiLTP6VLRDhhPHBTm",
  "key17": "4cMngscB153hxKNa54HaznWDUL2tJuzrEsFTXtcfsQJEkUwLNzXMCSDVxdTLKRaTrAcWHbxN7XtaFSJ3Gm58wipQ",
  "key18": "5qfWhSE7sgJPFBM5HcE75ZEsNYxcLZqDaLsKJZ9GF27QiDMyDssy1WNLDLvTauh5RwHqgrXnb4P6peLvQit7YxRh",
  "key19": "FvhqSEuLm9eEUVbJowy6LDKa1FaFJpPWxe4AX6M2PJhu9a5wCgpFoeWEEBmPMa94Uvabi7siLnnCPkhwFsrhTux",
  "key20": "3Jtjc3u4EjLEWX5jpG8YLyVvEDneWGHowtiarVGy9GvpbDBhqTuiTS7juLT6ERzUWGFNvxJiWVpLWEgvcxbz82Mn",
  "key21": "3zHCZDT85Jwd1byMk5QCN7MC5xoZvzQS9wG2gr5dR1igikGw7KJboVoAF4rsrpPtfEoTsY9VQJ7FuBac7csnyPLw",
  "key22": "Tb3LwShs3nK4Mke9nh7LrwKmRcv53LzuFHPVSpoTUuaFXxYAUfuceeBT1Bp6krcmm1wgDZTmjfzQDFQ6nVFhmNW",
  "key23": "4JeWY3KA1qBGHYHtGY738orT69TcLgcsYDAyLy1Fq9mBWwEMu8Q5MgMWuE82rxXWVTwHRCsmtUa7AXaitdKB5Ura",
  "key24": "3dVcz3AEC8ukyKtojyLrkUxqeXJ4nXoJ8meTSSEN3e3SFrnX7XTcp1sLcJszt7XiYzMtHXouBirYRKXhMTR2Bxri",
  "key25": "4TU71PPa6KzdEjhthstix8kQVTpgxHb2eomfMNbtgv4UuJ1LjkUtwKsWMSrkYTjqJ4ch5rrSsLb3X16fbTcKaHdC",
  "key26": "2yz3DLm5uXMHyURMEPUqjLA7MS4BkPFUBH4WrLDEu5qnqxbhiXXePTzPnwYE9Ejb1i6P23yBq5nD9uUHuwnKqme",
  "key27": "5NgzSomyiMvH7fXr4Bq8n6HbS57fguLzkdqpFgB1EofFmvFxgXBTS8GNBg6hUJy6UpKk9AMnpQXkVHr819EwkEkQ",
  "key28": "5zf4QNGwKWBfCpSnja4fH5jukjbHLJjjJ4hK5THBKr5MuWKi6NoSrn3baJAeEhkgmfXxnXpD2dxyftV7kCGA3srM",
  "key29": "2XbCKgRofPdQjuAUyZdoNyF4F5ats3i1oevVbwzMASzbJJzx81EiP5jeB43KvPvQoPnLi99CDHeiTSNzoftBRgts",
  "key30": "2b4eY3YD1JFgQUKRSFLHfNDcJZPDeCXmFsPiuUstNtWc5RRZxKmZQvXwLLXFGGYbbD51wpMZaW7hYUE2UnQRsjUT",
  "key31": "fz9KaPcXT5kWrbSshHTVvQXY4FcfvSF5MVwmZ1WmZ8PSgpQqSZ44Hc96E9rz4XaFJCwHWQ41UKz1j79xt2QjaUP",
  "key32": "2SkBBtC323n1KvXqZUN6antNQ6qdDQpwLwN6ziA4dwrt3JyvH8XcWA8gh2mGavDQFXER2evsq7PhMHKjJS5s9GFa",
  "key33": "63eFWmwmwUeWeUPmaRwXJJbGrBxqkpHxnrT481iFtez9hjoJDQ9ruKUKcVejCzQ2oDYsxzXNB7VKfqHjRHP6mCDF",
  "key34": "2AkUh184YGCKYXKPZBNmeEzPr6r91cDZbYEdDzLFagHNb5TheUeuRqcN5htzMPUpHMYqFMmbx3QZXBvSbFZFGQSD",
  "key35": "2mr24Ecqzwy1GTcGpNnTd41k2sFVD9bXrtc4rQLjdkSofF4LHmevYyEQQJUzM5fWQtSchwmUojugXc3wcytbAQDG",
  "key36": "4ettmej27Vms8f5MJErQSLzdXk3EZQdzzxQVSKLignAAg9wiEGtGp3fopwqqmG4ucRFdezHB4nryGz6v7Mdvdkiv",
  "key37": "2PK4ihLsh6BFKgZJyh31rXF2x169kergJcfmkc39zqJNYWJJYsPWoxVYdpV6mmG5DPfdUiPYyeoxz3RWJHqNMZWp",
  "key38": "3yZZSEX39rNgtiEN62GZ5jPTReexSr2DCiN111ZGKoi4jku1rS8ThfXGcqK6uMkh1zSVQZmaNDC5fTL5ppU5tWac",
  "key39": "3ektpzbp9sMMCDoYujJ8JuGcxo6vjurPjiGGzoM19g2Z3yCqsuhnaLqLA69sPDFsRXzgmha8MXAVANCbnnNAY8JD",
  "key40": "jgZuJv75nNjpVSUbBXPnpHbrC5yHybVKv6rcarWCRma7RGpuuyqn9RL4AJLixK9ZWUWqXRxS14AEeRtqMAAjApt",
  "key41": "2EEMGJ2zb2FFaasLXcdTLe9och8zJ32DfzFHe37YNBnR3tEBy9Cp4Qi2Mv6hmmEv6mNbU64smigH8eszGGVqNu5c",
  "key42": "61CSJYkHTpyvhkBn9eoBbcgvy43FuC34mje9qw8ixhYFpy88cYEeKKrCffpVN5tGZwpDTo1DaEtcFeG8UyoD8SxK",
  "key43": "5eDnszSSiZMCLNJgM9rRV1FG8jAFGVoJPPqryFwq1yx56dDFwoPqgz8RZEixNRKzPkL9996X9csmPfsJZgyeoy44",
  "key44": "2UZncYoadA2bSkFMyJpjXQCnV1VK9pS7TpUYoHsypEjdZXsxwQB73WHgYzXpQDQJhYmB5GQcr5Ckd2j1gWWE3DYQ",
  "key45": "4XDWfCofZqrwH2jVspzuQfS4zH839hUoC5aabf9A542CVZCirWkZZ7XgC7ynZuf389QECDdgkUYjLZed8b9HRGoo",
  "key46": "52rTcmzMCR6pBVJn9rZrPXArTG4aJZKzFetgEpJSPRHvAZFx65oEyhpUh5T52GPv9CWSzB6Vsh7QM56dQypBPzR2",
  "key47": "5TRc7JWLmTj5N6euq6Tn1SDWoKV45fApdHAMssSwZqyNMaRNR2bEBaxzx3735ZVCxQiNQtEbw4s8qotr16fRMnts",
  "key48": "3N6bDdvjxdfY5Fv4YWrEMrFgskmJ8tUYxdLYmtUHeXwHx3fuYzVmeWDX29oNuGJEqNRopUJ1psJgkTBbU9uZhwgE"
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
