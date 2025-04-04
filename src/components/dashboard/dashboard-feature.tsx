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
    "4UjzgxQ5pDWpQAF5UwbBkfiWjS9iF1uNpsoNdYaH1zHyc1x2KYSeBmvSzPzUb52kn3HSx2YtKxMmWHH2QvDLJ5Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yz9KHqh7o8mTAiFEJUkAVsYg6aWz6Yr6TqsUxf4UHqebsGxEYTnrKner9xT7SGDogoqsEZjkb3rzGqMPL2Vkm5n",
  "key1": "tSkPobgQjsS6d7D9tKaFabgEpSNTfYDqWNNo9Rb5nXiy3wFLVAi16d1a9EkVCGq4bfygNBucKQ5YxtwsrkessVE",
  "key2": "29r9WhtkiLkbm5KyfMVLEVLPLjwJM9PTLUJZjch5ai62R7X2kQhTLz67cBf82KbTyAuBSL2BxnD8GwhfgjCDiBX9",
  "key3": "4DTmZHwJLpESy4t9FDqQjxeYYRxEFWBa8qqqmkAyeAcoW95naKksu7JbCpPXtcApiqvP96awkEBnLk2xQ3ncs5Ge",
  "key4": "5fLiH4WdQAnBGeGSRQ49BuUxFt4uxyPNnXYw2WqgydrJkP63T6vEFCU5iUS3CCHzMj62GnBhPhYuCF9V2WhV2c38",
  "key5": "W67hNDGzSCUzXLDPzbysmJbmCs3Sn4X7HL9f8D6W8wciE6f7XUYeRu48UFfbkcif3xU3wHfKKbJrT2Lmtg5tD3m",
  "key6": "5NHpzMPCYz1YdH1TrcRpn5ZXxFiQiVxjYCJVDprpwyeNegSS5nYnipaaMr52pGjvGwJi9bXLakyzETKYzN43ReQM",
  "key7": "5atTeJTSehnwZTKbrRRQyWhBWWcu8J7AULSGEooD4cJEnMAH4e1tzgTBGGe76WzHBFpfCvEsGU8prD8GGK3pMJZz",
  "key8": "2zSwJv1bUpnPVrbng2d6ivtfSaXYoj3dj6fzKCK2TBMdH8gYunC97HCbQGxTYVa5MPnxbhbq5AXzDeH2DSBsPeP6",
  "key9": "5xv2bGMrBxiNdb5sbUrbEq96pNdqXGcPDzEgv3vEaUy5GUgY3PkBMqFUQh2sWjHmXQ9daoszQ3CSRTiSmCj1QBDi",
  "key10": "2UhVhwdtHugFmbaD1vEXhr97SMny6RcVdd5i7FagYsrefDPTHnMEYKwuZzTrrRRxwQucWoNxAvRV3LKa6fJVT5Sm",
  "key11": "4qwfTQwcNZB6sBLSzvVjkPHHtcMx8ENMAT8QbSQTPWQeFhoQW6GLDTZ6Wq7NSxqkebE6LH83jbD9W5bmkNpjz1EE",
  "key12": "2NtCpiknJCqHJP8cnTiTX8dUzYrEENk3cu8mS5DbSA2hbK1WFDXc7x8Z6p3CPfMge9QFRLzRpxWmwyUjpUZ5pCbJ",
  "key13": "5hRJ72uLJXZicpNYmnMpm8rGKgoQBSpSRFysqitdMy12qN6ZPjUyPGWndTWW51HaCqNQRFN9kQFJCNjcPBYD7s96",
  "key14": "325g4h3CmUfA7vSV78tGf1d998n5SVAnKfYHN6Grw5QA3P4rn5P6rCzcEKGVdy47T691SVrYNxP1mCarDEYQJVV2",
  "key15": "5rwugiYXPQsRuK9cVwQxQdJ4wi1DcP5d5KRy5aCCw3go2CdcVVAm9a1NMFgMDpp2s512aRDotvscerdsr8Tn4LZQ",
  "key16": "k124jupZVvgXbP7JCWuW5uXiDddCaxKJHHA6MS7mJ4HkYv7gGjx44oT3QUghMiBciZLPRChRzkQmsq6SHd6Td83",
  "key17": "2pvCddfTHRrnRrwqf5uH2vxRDc8HyUZg41abosh52B8WaRTFK2tHh8tKXwSa1njWCv79bfFt2GZpbVoMVi8GHXLy",
  "key18": "63moMjgLwKeLbzKigg36deeTAbnSWhi3vfTgk82xFMSTWa2ansbw5PQKteseePeLkQxFjQXPaYrn6yf3e5iwYJgG",
  "key19": "2ndBreuymUzkVV4mxGA7J8ct8prc2W7s3Zq3kQiPQf87JpzwYTVdjjsBjg4dGVn1wPsm2FD2Uqp8uGt6v6HAr3da",
  "key20": "4BYCj399pc6SffWsm9DK7vNiHe95Gje797Z8c4BdVk8otG3dqZagXrifxxxG1woqPHscSVsoH25NnC7jFecrmEBw",
  "key21": "2BDec3hJPas333mXKfJqZTRWjMnxc8yEy2Vu1ZXUadsFzU7o4XBLNiqc7tQbyYrZeK3FASFj7KsiczAn9XLwiTEr",
  "key22": "45Tx1xiEyLnLwr8aGMfLrc2A7i19okmzuhKPwTF2wtePND5bVTpDEertMmPU9nfjzqEJHuprw8h4h5oCPaZW415B",
  "key23": "3DGEuFet677KYnUBVQ76tVaaDBL7w7TsjihBjWUqBQuAuNM5xjMGUwpq3uwcpqreeo6Yq2QaqridZTRA6N41ze6z",
  "key24": "2emyomdK3NhTTfFCkJpVD59bhoW11XzCghPYbXaavzGJBU141eRBV33fvWPvLSaihYXZis1v7y99iwfWa6nfKBG7"
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
