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
    "3eggTLv21WReqSKkzbgV9REk422JyhBpimwfM11tq3EMKWmFmtCdbsGfUWnbG2MPy2r9Vs7hLWPMGWfw7QnSXyY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjwrvVZVxEYSq3rdtPWmEUCHjdM4zwESwvme97rBDbAFko95X6QYjf48MGZqhkUjAPMCjeoabppHp3CtwSicLWt",
  "key1": "3guHheEftb4kYPK1rkTWbjxMaWYb7FxAULocRgiH5qeG7no6xwsJj1ouFTrnE3GGBCE6eDVRk9xp97qfuy9wR8jQ",
  "key2": "3PSh3hFXN8527oCmgLzmryTkeRhTYv6cGmJUQ7Z5GUvExQ9Mrv1CCXTJF5kHd5snY3CVaK4p7XGMZ6D8tobMRRSY",
  "key3": "4zksJnk1Sr1YWumxCPbLdrCuR7Mn12xjn9zv2jzEt3EvFHMydJffcAy7VQxZeHmnPqDy43iVjdzuMo2S6PweB4Je",
  "key4": "2sdSaZFvXooUDkutWpJFSjLFnvPQ8p7YiUNPuXg35EcV1bZm932w23xbgQPNSspP3ucKGQqNCT696foL3HshgJ9D",
  "key5": "5VKjFoJvVCKV5qL5TZfGiHJZcA9idgmPuaRjcWaK2pT4MFonQCFm2xFnNaW8WnkRMsErcuTsjduTzgS1mdmWqM39",
  "key6": "2xG5hnwcQcABK9AjobH3QnepqXLdLr3XRASaVhCbZNgQU4gB5JGwi1fYniMunNb3gnwXarupWzLnSn8NsEZoeifv",
  "key7": "5o4HZb67RrC8rCUcHMpxxK7H3KEd7MapK3CU4j4PKYKq6LRDYooCL4bKYYpbUJJFwKjdUQxwrgRrvJgw6Fhrs3gM",
  "key8": "5rgJfKoXn58Tp2rFkMgPm3mMhtyntFiAbs8bzU7WEf6UYVvTEFjsq8YKunAv836TbCusKZxSWwMAgwV5m48tg5KP",
  "key9": "5t86PAuyLJqSev7wEjshHKmgNDwS4jXbKZQoWoQVntsgHnRs7y5NHEfmJvLD8q7SWbR8JmvdsRqBAtB2o7ZLKBs2",
  "key10": "5yJURaWfyeAaheZzekNtKL92KgtCyBGZpnXNQbwMAyJdwFPbVtvFUxcNPouHw4D1GQBvEbMJ4VLxF7phEBepupZp",
  "key11": "cCprxhjQ1JHiC549CaT8A65QDUck6ut3CEFKmrZ87HEcUkd298RPhK4vc2c7WL5QnKoJRfU3fNH25sSdnjn3pvA",
  "key12": "5sU9BWrabzeY9e5moYRPNEY1yRy3rkFRYKDXos1wDaNtrx5HfG2xMqrn21Lj2oYUURSaQvKueS87gQSjGMj8ntE5",
  "key13": "3XofaTRQWJZ9NNwLnZeU76prukkzMYM3G6yTMqXpbce8tVhRcZVtn6WRRD6g346tQkpMNqo1csRqAyMoJXk2YmT1",
  "key14": "5uijgNYULhN3VM6UTPMW6yaPnaa3oh6yqviisbEby8Uoo72zdhRgHD71UAqnVDZAH5KK1ivXCev7hidaNxDCLPn2",
  "key15": "2pcQR7SLAauFZ22WGM9QnbmJa5kXbYmn4faFpUAXFstEDp2xMT3Nep5qhS7D517hf4QoiChYSorfnhuE3gDCzSbk",
  "key16": "5xENwQDx8zfzS8bXxK2HE3s49mM54xoyGtcdQksMUmFEeiTzW73r7fTZRTBDDz9555XFd7agBC7VPhr8T5rfWrSu",
  "key17": "3QHADmbkEhL31DP5MVdPBPnATu9t9E6ncMXFVA5bX2Q1YbknxABoFJqGydgeUS2b2Y2djq1Vf7gEZndsKj8PiezS",
  "key18": "5wyjK8n4FxffLExaMa3cH79Hq5tWTaQftfSYqtZZHwgx5MUsTN7wbDUWxUrwgGtkyAeoSjW7rxcjW6CA8tzACvwu",
  "key19": "4jrD5QiBZCbvbdPbs6cJ5esHYUs4brq3v79Go4cVHETWGBQD8GS74Pirgv5Eoub784nfpwPzoDRK5LJpHmEjgie4",
  "key20": "53tjC642gF4nWVnR2X7vYTHsRWAWDWa2o9iGRFnhiU9h8sr9U2U4fSx1jPsv8aoSvNNeVYD2XbUd8evtRzkMfg6Z",
  "key21": "2a1DAmHjAmXXrE99nsetrjAQ1Y1MEaoiu6zCvDYFVt3V2gj34jLVxvPoXsQwnPniWnjBj2pLJLdhtSAst9DwCCcQ",
  "key22": "3qpxqBm2tTMb5Cyqp1sdYCwsKX5FKruuAqfC9aJpFyNiH8hVCqYhLUaCTUVFtPm1u4eH6qNiPUvYXmq6iWH9qtdC",
  "key23": "3LykzgfmgPtwzWvTxRY3i3GzTqkwaw8phFBxNFUc4LCHYdVDBCbaj4aGVZXowGdMCntKSyBRLthZmzFWFeg2nXgi",
  "key24": "3Zk9V7Jz8aWLwJsLkdbnhvxBXXRNwg9qCVfH1i4D1jyudEGc2k8jYhzHivax1owSzzR96KvwbBeLHJ2zNi8fj8kE",
  "key25": "SQj9qAAhdrcoPmLSNNX7eZRPbRYFqRt97h6XsaR2tF6HYTWyrs6yt8Ce4FFw57aW7CVFtc6EAjVabJ4KeMZSqGQ",
  "key26": "2Qq3Z3i6CkhjhhvPAR2aNGcwYv5TBbJoTQq1WHnkXaQ9KwcAwJZBmNsFsjSngji778YyE7pMu8Ezdv16KHhoJqqZ",
  "key27": "q8qmMRLSKMoJ64d1rEj2ycvZq9bjDEb8tPVsVoUfncj4wE3yYxuXYYxt2gmgJxGqCSyGLvTQYwCM5dDfvnoBZgg",
  "key28": "4wkbJKkvJt2YAERZFnieMuGfUg1J3fkng4RkxGYDTykSB7ktvSG7jrTzyyyfkobJFc7vaNPXtFEu4BcmTTvhT1np"
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
