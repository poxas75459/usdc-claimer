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
    "5w4mmas1xXpfu8yrosNYmJfakA6rsCXFgootBv8Bwewc5UU3oPHhouoCj9FMR7RrHjtXgZvudT68azx2msis7RKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEGByssbQYTqaUwGnijciqvfmdX8u7BAYLFhHByCzxKf3ycEhJem3c5o9XHgbV3topmZ2Tcr63k9DFJ4XqZCPgA",
  "key1": "4S9k7pmYhYHNN7HfWHUUkFPYY7qvgmYBNszz5hc7jpCCAzjELgKr8Lkg85nsquHVNQvg1fN9GSQCGFuowoVnH8yE",
  "key2": "5vwNktpzJdWFN1D6nXGhm9Ds3P8Co3mWseTc5MAkkFkzeWTyyJUdjK6ktqkj71z5XvCDn9bpmvgYHcXq64njpHmq",
  "key3": "3HnyMvAcFU4A2qJapf4iyVeAPR5AnYVSYc8oSk5ZrAzF839snT9sKdMuLCsN9YicMMBVcT2w5mQmaAHAqfV8qLAj",
  "key4": "2rpwNDmsrw4MKCJfkMvNJNbRneVwUyKc4B8ahSVwov3HCJS7h2ZPvwFQtB8x1hnPWHtCtkfYo8gp17SqaAaY4Dxp",
  "key5": "3pRMgBkXV1eh5vWAdNADiyNTBtEiuX7X68KsRg9jzKHMKiaYoL9FuE8UCAZfR1qsAJLS1y5v7Qnipj9BfRUiCPKm",
  "key6": "3raKjfymvpWDi8gju1SxRMCXvv47Zk8pZuT3BubkLgrxHD9ofW1BZmvEm2MGrUGKFR1ehXKqECDfjTL8tPYFSwBX",
  "key7": "4PXC7iNFd7T3mZotB7foETw34EhcE5RxZWX8ZsXXSfRi5GFgLtUsssAJ1oUiLbYMSjSnRe8w2YB1XscxLD5xqk9M",
  "key8": "2NTLScbjCGjVuJoqrRSqPwLKnNwVL9vbJngVDoPhd8r9sXLs2ve8KYfknsoBP4Sgv3KBAk6sitr1vMxrcgTk2GZN",
  "key9": "2znYKfRQrJbozjzfyVy35UdBACewm4ENzR2N1pdJuQUX2w1TPXgDKprDVxzQNebgHEvLiMqbQAnFFGmdwPtCmygV",
  "key10": "5m9e3ddeeiLk64MqfW3w72yysKSe2yLLGTxuTNEu6MinSmsQxxqCE1Le377yhiHPDAw1URoV3AXr829VvDfurQEm",
  "key11": "5so6Un7uJbf5ApShabZfmxgzpgR7exgaqy7BqL6KDEP9sSB7mLMCqpoXJ8bFcLsnosspac6FAj3vzC4p9wgMgNHp",
  "key12": "64bzGYj4FkRdhES4JSTL4kyTGizmdvaQutxMRUWGBZir2n2cuN4fFPP38CjNYv2Z9gtLfPVYqxmYKsv2JNdwKWQB",
  "key13": "2GcvZsxhzE41ngj5Vk6wSpaKB5JMzN4CnVa8y9dxRHjKHFCG2yoFzVmuV28WoE7ZMzoJm2RicwUqc6vRBWfccVSB",
  "key14": "2PKJccKBciMyddrNWRJTsLovejYaGBJdcpsEGDyDZBaj7fCy6tN2JsA6rrEZ32KgAR6WEesF4PUEoRaFAWzhKfxY",
  "key15": "qbHUrfYXhNYU1ng6zvCJhFRCrePFdyTkkBrzpzofVmgFqdDN9ZyuXNF2Lf2rZmCYQ5EuQdKSeU353oYqSgNnNpz",
  "key16": "52YBEhFte3fSmbinUb2miLRm9LdKXW8tnghD1twasVBDxG177mwR14YRYgjwXfjtCbYVAKmEeq54Hj5B2houpdzy",
  "key17": "3RGj349JZmpmqGXJcpmHCkouHbgBbFhVHQSTYPghyuDVdgyoWMiRjeUW1rxhfeVozgHXjT6PMHDYGijk2cZ2Ly1m",
  "key18": "526Xgf1zexFX2xrbWQeJ3CecdneBcKbekLXiS1X23t1hez1hweKPAV83JDXRZr5zmhm7RsmcMYScyerFqPEJzYYg",
  "key19": "2PLDc9FtYeLhPPcGvXg4A5JnrG8qEW1BdkxE3VJpbfazEh4FF9tuKfLDEgLsC9vYb85bMY1jgTzbc5SDMtCGJu3n",
  "key20": "5cs75SvXB4HQHmuvMUjiPm8uUCSq5fHThnZfrpNg38f8DiLTiuKJSF7rQMByyzfZzh7g1mYvcTgVSu7Wfw7vJMMN",
  "key21": "4BcUhUmKGvbGwi49Q8sNPN4ZGWVPAb4pPotQwFPdHGm6ay5CX2MP24WybS1QSC4WhjBM4NvwzLryLB1CKvcchioB",
  "key22": "4FMnA4Nkot2Znp63VVVDGsYpASiWynrKaQDh4sgHjxvSxHPo22nyqzBqTWAty2uykat8XduZ49pYiX4dffd6zr6B",
  "key23": "4CnpR3wNkBRj8fVcTJYNuQzqX87NasNqgVXsFcyu2itVmJHbCVTc3KDf8nchTo7HomrZPRZ9Leu8dsxZ1DW36UEi",
  "key24": "5KmsrgoyLyFqH6FGTHRZmMiaWAQ2YA7oXCTDpsyjLgiBgVyM5C8AKELpTHTGfAomJCSEWfmytDqESGwB4XYtsD5Y",
  "key25": "rjzuMAFZJrfUF6q1FJXfm9EfAEvdDbfMsp9Ty2JSg4DHo7j5hWyp74PFuszTbSyYcdK1hryCNdR51eQGHthduAf"
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
