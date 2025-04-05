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
    "4zDUanXRAAvz67A8FgtqBiFGnFTnnBqqd32whZWh99DVvt9vu1gEcfV5QZqvBjsxJEjJDDQsJBUCK4gLVUzEBNW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Mgi2TFtqTrF9yyBtyrZ9g9sBk5MLouxwThVCiVE3BUJdTAYpEyCwU8iTJDfrzABXz5qjQuESw5pB2qaWem1Rgg",
  "key1": "4keehTUFweCyGBXLMHb631Pyzcfki3SWWXfSqbqQv2pf1QXyrXP9XbjZnLPmred71VLGY5gvnTL1u97CmLSoxRJx",
  "key2": "3Js6Mb3QB8d8qsApBWmH6k65aVPoiNZGP5AuAgvh27HqURay6YU6Tmnf15xDo5gjkzKafx3HTsrZeEXSMqi8dxTx",
  "key3": "1NCPqjdmaopCthYJTw3js9HhSVtgVsybtJ4g2sTHbnt826eR3Py1FQZCca7BKLfQHoGMAXrtqDVD989b4HxuNJd",
  "key4": "5uQn7tSHXC6Qo3Avy855DSssMXT3hZZBm3R5mXCRgrYyk4Lh5LaESU6sHYeZujcodx2MaqBegvwuvtQawo28rfm",
  "key5": "5uq34HSFNh92rUaX5SGE1p1vK1ps7DodjfqnJTkLWepyqZ8wG3xMQzeeWMv4QvGME1Ui9VEdE1QkQyG6ws982HoH",
  "key6": "5GHqMxeoexkv1sHzrVpLT6gvzWuTxAVhxjwZrJGEnFgEbKRgmpkoFM93kebPM4acAXjd1BSnHafomiZgMfMRunWb",
  "key7": "4YzxnmerwWG1k37rwQnwYHVSPS5jBtyuMKfjMFENeM8TuVWTaL7h9WcN5FiwvuNugtyCEhn7kY6E4j7jAd4JwGsg",
  "key8": "5htvT7bKVPCHMf9c6Fhj9T6j8YT8ShWSjUkrDoWGEJxbNnd2PgTeNNNddm29Fjo8vbSxGRKaVzHui9ezvEbEQNjm",
  "key9": "4yNRB4efgr6eaqowmWWopdZd56Y7cEXAwRPNDH3p35GjPPNLkt1RcT5Uf6MedcGH2d1gbALhEHnqxUWGKDgtvD7u",
  "key10": "5JBCLdyb6E79iTU37pRMNEfyvcGYXPiFWrJnHCMCxTgYd346tWCNhiLxYJ7xKppRYLNZ1gVHaiTwekp3Sohsvdsr",
  "key11": "5MDM9MN8pQFpa63AMkj7g573yUpvPLM7QvY5k1qdAUr4BxT6df8pRnfWC9P7zwRc9KhGTPopbUGKdH14EVx8RbCn",
  "key12": "26HkKndnMBzYT7rcjkp7v1weXwfN9FBwZpeZgbsDWHo1GWWvHeW8nA4j6UX6BpTacKphKeybgpipGrj9AVeN4DTt",
  "key13": "KFSEiSPQSvbix2ErphsHcqjLUrG2uqR4UA9ogyWqQX13ZYbmkqTTFqjEpKWNHUmNAP2WmTU2ZjJncRgSVygkvTv",
  "key14": "4kRq2dEuYejiC1JsLkp9KL8MXYgwbCyuMBskeEgFnJ2C2iofiGTUEZL54wdFbrDwfuTqp26F6iAaLjb5gTKc7F93",
  "key15": "512R2N4nd3zvLuxyHtz1WA4gwmhDvCRDXPFHBjsDgW76hEh1cW4NiQrrK4Wek8QwRViDKL3av48Myv4prFtVSBRg",
  "key16": "5jcoLRaf5BHXfBYqx6x88G1KryKvhQ84UK2f8Th82gjuy1KmbhLDCf74W1cyCNpLzfRcNRJZLCiuAgJ4fzFid67i",
  "key17": "4eeuvZMGn4GALPLUGu8GjW3ZJK6CNGqFs976jvo5zkqtP6WhaG576QqBnzQqwBwfwMhn5zwaYkRNgDbLhxy1APhx",
  "key18": "5kHyTc4W5UhzePoTGy41HoxP6P7APJGbzi2hHp1VC2JrxSZ1Ljztwo7MTj4gtyENLJVHKCGRruBfkyRmBeGHJSno",
  "key19": "5WzBmpXG33ybngKYzmV71jDr2V19fXB7TrfmVMqAn2cvLrhZQcUnzGVqCtY5aUJFSCqJeKsoNTkLeCVW4BSJNSCB",
  "key20": "4druaXQ1bzPX4qWdMGE2hqK2wPfABziW2qvBwuyHsHtbnSBZivk4xFiDu1UWn1YKz2GaPxViAwkhu7Th1bnzwpfF",
  "key21": "4rsnb6vRaxcdLonarTqMm9k662MdMnfCQQ3hyi82Ha7gR6Ygi3tV34zZQ7VfR6hZPvkoifYCS32YDCuzKdNMPJ1S",
  "key22": "3e5GJD9r6tMS9WdrhwnJMgRq7zdSFBNyZcSJm9Q4ECErUyu94Xdy7iUQuPcpPiGwNHDLUk1EMnqeZzBzYe5Ta6HZ",
  "key23": "39Lm2oCDtHkYA3TZX8a8jPHyhKH1CVKtxMVsx3kmGebwSzKvfW8wtHxc7DXE5iShuuJ189RXLi4qQzpyYWQKTo9S",
  "key24": "3ui5vSxUYqXQzSFUH8oPFiu5BEVfti8G9ht94wLzBECjpdcFm8ZFfkdFB3ZrHBMAvLhsF4QYa75NwqqfCQPhc2ie",
  "key25": "4Abv8KahsZ6E2dYgw5RvrtJXwEdrLq8rjbbb4ZVuYYCSxYrGzeu5uwWcysQoQKoonHo92PwY2soNhRssGPF8kHoc",
  "key26": "4jGzS3i88dtn9uVbpAyB6jZF7t3Luze3D5MaedkJWVGoUcGbNLLZQymcza8YjFCr835gVpT71uuLu1aMkr6vnWxq",
  "key27": "5Ys63CqqBVQ25JPwgswtCLNN2uY9Dr6XEhzqA6YnHUwH3Yzv5kwsxCRnhKtMXiMoV9z62aH5XM7JiBA8ZioEkxd8",
  "key28": "Qoox2Vu3TjkaL5kaFCeVMSMMAYRwXqyAqCWdCgwrkwvwHpMsfrkiZt8rVDn3WUVgzLA29FyofqTiy5gmZPLFshh",
  "key29": "3LsDfqBU5Ju9qMgNmBut49EjWa5BUb2wXJ5LxuwDw9MA4yv1arEmhbNAcw3JQrBBSshYoLbZTjK51m83QqkEsJW6",
  "key30": "5poP5cvoEPiQEmej9Z9n4kisrXm8JynHzN8JzXVBmrcpiTqsRgd8YFALg5q2vgJVAiSe2pfbbsw7iX1jnhBgWucq",
  "key31": "4UtRrw6N1TywVTRNegQoigvQZ8BLnQXQGTTD1C3VL4mZAhK1B2j9YX8HpeBUWnZb1UqnVwYiRaioHEbHWMDoxXDc",
  "key32": "4DaKmHeRGqGneG7uwZAdpmX2NUhPr68en4zbrkDsTUo7UiisPqzhLhmFB7oW3bu4QncFYLEQmawKfpjPqEEpzvHQ"
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
