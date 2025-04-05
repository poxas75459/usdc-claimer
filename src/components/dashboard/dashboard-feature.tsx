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
    "2AJgms3BLi36RQujgcGFnVZjnBZjLboNjYL45syDg1EfqmVEffUS6d8AThyyFFVdoBU8HQaEkJRy238kHFcHfn26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GeAp4AKpMJzjhV4wCvUL3wWPtExWXtVuTUE6g1eKRsXPAC3jB4wg4nUzf1mpChyGuZSdaVcDLixQAdEDSCk15T",
  "key1": "2YPfC7tMiASJ51HZ9dahQCb7CrtZtyU9L6xAr1Q8cWmX5w2Y3xJ5rP4GmNFffTnpftTMSkKuhAujcnu9YdMzczf5",
  "key2": "LC9cr7j5YTSexyqPBwDD6RuTtRSqcL5R3iDxVL7KJ8xQTcENchZBQho1RReDQaPKTnWAbi2YJta1CKUDeLrvYaL",
  "key3": "54wCtzFLVb7q7XyjggMKytzgtMvnKznUf8dPAfo9yidZR8cRQXj7zuf6Epd69JoG6VKkKMAUevKNjuPKb7uLwjc7",
  "key4": "4b7JvP5HudVrAdSvxRXSV6K3XJvf8GrLN8J2crGuv5cjKhfBHJvBg8VcKRENTVS4JEKtLJLBxbyBm4We49Q5mKtQ",
  "key5": "2CFVFJMaNEjhVMAZeR8W8obH1fs8DtJK1u4qrBK1SHQoJ39sdt9GpgW7BvdhATR8Epbqqw3ohxeAyYUdhQywxYNz",
  "key6": "2y9Zfa6cjtUqA1NWzuEHPPsBDVgr3okLWmfYXSj98LrqRF5idXqnvvkSUiP2f3Sgm1gTtK9fmgrsidD88KM2MS1s",
  "key7": "2VDgdNRcnNTzYSazdkA4W9pf5tsxAFcTzQQ3HkNghtvvj26F4whxcdnpHrxjHTTYLke7T8kxCsqdwCR5T8zuw9c8",
  "key8": "2dwbgBNKiz8RVRSR8ByxJ1P2MGobzzUtfPrHrXZRivJt1U8HnQFxkgDQSFW5yjPfNXuuo4sCWNdHPHBy2zvyF51P",
  "key9": "58yYz6XVWkaMEqCFzwHs1DPtXPyj8t5hs2BxnkZhFeqyh3qHzy5CNi2CXSC4RmQQgLfSNzELoHP6oaHXpxEuwZNT",
  "key10": "56jvjTX2qZBKyX72QjFQ93opnGoHzBGcgM6c7fo5AkcLX85XF2yq6KFKzMX4jzHMwidvzMM1pXM1abaVpcZ2wi7u",
  "key11": "dhfKLEK3ZQhVHaRyofs86hQMUyLfYog6AEL2ueKa2rt19NLVDWNFrFdG2EWMLMzaZDEm4fgx2yoiYpyyzjvZfPS",
  "key12": "KLRFqBTkL8vwzMy86M5HRsot3iRXYe6kggG4GSYmnTkazwhR95Y9WYv9CdpfNvy9TTRiyS1d5vn3U9QFMCnrkVA",
  "key13": "4nJBaNg6yBXLf4En8mpdML9FRWfor8ezKGNDp8jryGR1bKBEVzMMkFAymfbLN2osPG4MXqyLesN5SjZG34hEfN5G",
  "key14": "2DBnk9uFYgZgJc67fgz5DWVDkWh5AoVYqsB9aQfKJMv44ARLzfno5xUWz6pPR1wMXmEv2tP3tBTGvrCRUf62fpfA",
  "key15": "2WkuoR93EG1Xm3AHkPgGhJ5SCafdunwr8ZM1DgquwkSmvwnTt8cj8mc6Kie1DieQCswa817NHo5a7Mbou5B4pzgo",
  "key16": "36p724CktupGh5ST9ro9bkvQ2EMRVnujhHZZb2mXwumQSMtUXAvRqGn1HpCXHne89hqkTmwD96GEVbMGxE5uhnXy",
  "key17": "39B5fZk9L6fcEvGSiKa8C1yFhspN4TPsifrntudt7BZTzZnJMsmDuJ5Y7fHPktoLvQUTonGRTzNQtJcK5zkKkNJq",
  "key18": "2ztQN8c6HmiGv1PMqLn3sMe8mVQqqxbSPT6nX9uLovhdME8Ar32VFRGY65tSwQ5LLp4tDkCyMiUb1TN5Us7xWmrk",
  "key19": "WXxFqiZaupVfJ1u2bsX7z7T2W7ZqgYqUDgg5VJ8XmBfg3WVNQbKQyZqfmQGyLpjirEa9qC3ad1m5WjXtrko2dNj",
  "key20": "43CFFkfufk1DE8hNu7Q7XGYmgUF9zyM4Hd3banVvDFdwxnkF9pWubNcsiHmJSKtSMyQXDLrk8oKsBxWsNy6jR2qz",
  "key21": "pNGa1ARJjRvPvtKUSEX58wheBKERYsY1vGdmTYAACDoLj6ii7A8CbhZdoUTsZ25VcqZUEJafxjH4B9ddPvPr1Uq",
  "key22": "iixQnE2FnSwqDYMcqjzoWn4iHNmA8vFSNLQgJ27Bq9pXr1dKvDKGmb3gZwChXJ7PyUt2PfmzpjhNiJhxTiJAdpt",
  "key23": "3to5zakiHNK2H2omRdDZWn3mn6VveivrTzuhMrpGf6SBQD7vyux3C6WaRCgwzASFB6A2kPRRaZYtv3AbrJwkHgCs",
  "key24": "2Uypgc9cSeL2BLjeVNCwpzTMhTSYfBHckM2RVJyjush1MmRc9KcdntEEUdsP7UF4qTUaJn3yUdxdv8RTFZeATQj9",
  "key25": "m6crgWFVLGdAnhsesYp17yTZMX73vj57Yb3c2rAZjf4rT8EzFppoMbdixgnVAFVoHnjjp6my9y9xWSrK9cQn8mN",
  "key26": "2ppXuSh4YZg8Q6VGXzuDod7M4uhoB3647fQdWua5yWudv4LyavQmhfuwgwdgUqcyjjuHPaq2A8Bd6kc7G4cXv1B3",
  "key27": "4uNNGVD4eWwtDd1d82V8swNmN87XfCRJXKLF2EuZraxwUhwTQerqoBmXzxynVdKJkXqwWmMEP7fiDYgDXwGsMJXJ",
  "key28": "5PckMPo65S36kDBGsevCpLVPiaUwzEfD7w5gLnPhXxUYoazve4p9VKyAA96EyQLtcDYaJnJo7UpvVDx5e2kdWTGn",
  "key29": "2mzqAqsAKtpDgyqH1xVKc1WGQzwcSrdfnFh7hSaTzq2eUP498wQSaJMBFV81x6gQQbN5zXNNShAjad6kvzMxGD3S",
  "key30": "2tgvZQfBW2GgRbvMX6TjtGsZXGh6DXpHj36PbMTZcXifqQP9FPzDsshCBhjDSepSbiGFJ4MxwGfQBbX4nPn4PKGR",
  "key31": "4HRy3UfKU28QkKi6QDHipryLu464tfm2iaUXM9kCPEMHbm9WgV6aRWQ646FtJUGRGpoTMkcQVp1HTH3eXsDSxwCH",
  "key32": "4kC7HhDJbWpiabvdwEpDEDthpKw2LcieWaEV5VYWf1rM8gc1ophtoq2nmDcRAtiHusaGMa5f1iwXc2pFFpdV4Bhh",
  "key33": "4askv4cGYfdiGPzSjUHGrCHqRxBgUuVUL4VJteadLFgoSmz2GWqXCy4adzFDveeTKR54xaWrE97NQrZk4xdKPRAP",
  "key34": "4NZxhsAy6NfU5H2x6wbxLRaQA4Giu9XBeK7p3JgkSsUbdGL32B9cbPGssXZUq8879UCD3HKEi3hbF5ayJAjPiCjE",
  "key35": "5hbZGBcTLEjZ17JYrvZpujBCUPEB2HU3hEzzFjAAAJNdd7ibE3BkRhq1VptMdcDoRjm77EGxfFd3qJcBnrZ7qMoJ",
  "key36": "3Q1AneGTcS2Av9YsP5gUiXHu1rbuNd546z4WzUyHKR6kjF6NQL4U6bfyjzhXb7SaDa7kkWbpr568f3aFncfFyEzj",
  "key37": "DFrx1Dsz1ktoWpdUXnuK7mczACMYuZd1ReDhbw6oiWLyKW1tXU7mbWtcQE2Yq2ESMqs6Uf3Pxv8fGP4TdVaL6sx",
  "key38": "3CWSFADHHUgLRRsjqTQuhSuGt5coRiHRD8s6JNaEQJjdNFb1WPcAHoLzKZWwwTcpdPPo9vkuVCMK2MvkGnrMKrPQ"
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
