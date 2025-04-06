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
    "4DZUAcKUJQfB5cPXHFywGw2eerSvb6jjtkcS1zKCUd5eiTync6nMMhigdS2j9pCeVuEtFN2eyahUJ4Uizb8MuWvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLpsrTocb9TibVLFTmsF9re8nWXGVmqAcy7zUGTbuXe9T2AAyij9SAjbgtqB7QJigVfLEW5sTj1b6pqBwGveTbe",
  "key1": "3VKbQkf6orc9j8xGNrGho34Wb6mQ2MmF7SugBHfSg7dd5M1zymRd8zNo5of3pRWkNycQgTbCDRshpUyVDNPFxSZs",
  "key2": "2WmwouKCaCqgi64KZb9uoac7CvTxtAeBRpJbjkvZju1QSNg2LMVnsdfL1xL8ECqKft866mPMiKKqpjkUpmqozsz5",
  "key3": "2puy28yxqRFrk2NxJUhn6q6AHpB1a6nbAgUSPkxWhvLgidquUBLfeYFrr1qivjNFdU88N2kgonx7orLeSAuWbtXP",
  "key4": "rYciWsMJb8zXm4QhuKe1KcRugJ8WX4gbFkvxEVfbLXAnE1qUnQBg9j4BH4yChWpKgXNMsSMuqMffa63nzkUVjtQ",
  "key5": "2Q1dtcKKtWZ3c9VgyC8oDBFQTymMLgLdZTkq3C4FSWA4kCYRrKcy5SVZBWUg5MYShhLoKkqJVqu4ZgQpJJp3YrmM",
  "key6": "41gX5fpqYso6HfJcZSCMtgbKsoMFoo4nLonrrpwWu8h8EK4TJwGBqevaYQndEhBPgBVvykiyji2PeLArXFhZ3FtN",
  "key7": "5eFrPJcyVmspZAU2RSSQ1F2mq5S7ospuQ7rDxfvuCA9UWjGhAcRGws2Nh53o3yc4vLk8qViJ9vsfJuwCWkC534Zn",
  "key8": "4upu5TQ15JAXpuxhU5z2UkzsodaQt2FVoCMifmGg8nYburr3A74WcUUa2icqz4b9HH1vPxytqH1ta4yQuGfo4zfr",
  "key9": "4oC6hr1A2HENPhZWtz3oaDSimaE4hx47uv7zMprdBfa4z3zwwC5dDPDT9LRTsDYD1PiFZLXUz8Bi53HSA5Ej5Vy6",
  "key10": "3aDofHo3Yd2Mbn4mY6b2LALC4mKLbkPArfGYbjbJ34S51Lx6A2ZABkj1CkSrgwdg2NL1sT295ayVyE6kbWpAEB14",
  "key11": "4tUsM8F1ERZE8CC2fzyuNzQoXfoRa7fN1N73hG9BTU6ZNVPnovv6opYebVNjZFvGenA1NdrfrAsAELSs9VoedKtr",
  "key12": "MYu5GLb2c6W9xof3A1iZYTjfoepEuNXtvmgdHcKU2TRUcG2xU9mfkggHQyy6Ui4q567YMrS2FUjTrrca2KEw4bL",
  "key13": "5iMtTi5W418ckvMhZ2GrqGgkgXJ9U5FWhFWycmgYYbpMiYdbM5RJ37NTqifu1RA18uF5p6TXCCZwx7SWfJCh8rrc",
  "key14": "VKjuFLyaGnu3sfVzcrN9yGLXJ4KfHUZvMKUFhWJHQf8P6o5i5eJBsy4MCBq27s18NZRYskp22i6yid8ENEh595o",
  "key15": "Hk6QQg1XKyMKhrU1Z3ej3TyiALtQH3oU2qWas3Fxc4ihBGYsqDXW6GBpsmJzLdTDE3oDrM88zakhCxxi1zaLqxh",
  "key16": "2zWBCgBYY8wcuBXt7tYtwQ46EGSEoWwR9TJHJQSCuwWYxiG3SLjXNrZLUUFBNgXhnSMmYBCoWTiD4oVBQMZ1NALk",
  "key17": "3vCKFkFNWChBTFYu4h5RmLwA6rLifDXEtQM9jj1Bn9j56HLMtm2agVeRJbgBJa7DMitMWisLQSWWDA4YQut6uPg2",
  "key18": "4tSy65SmVMmk19KLNz9KaEzf28R996kS5zHNjhB3Rc5AjY7pTgeN7mwwybT4QFY3m5YgVqKYNS8jNwSRVdM5cEut",
  "key19": "5tZchvf5zBCxXsCYnMC4yFsVLVSbtGbd2q8pmsuHwxbXVqyiAdy52uoU5v5RCgubDmExDHBuT54GAnSepQNK9UHq",
  "key20": "5HG67TfmDh5vuF8uMCyaEvgAtvjKFXtH6juGPbAYjaanL2wdQQb4TBRiFc3w3TnkRheJWPJ4ReGVsSGnvU3uXWCn",
  "key21": "aSrvi4nrzoWVbHJDz7S6pmH1oxULoLzpozwMu4hjfgrUEsTqdam1Y5phWNGUJ7N2QJrEMN4oFN3d8G33pXN12R1",
  "key22": "58xYrRuyXofJiweAfn3zDSaBJHQmbzRrWYEvGto6VHHFZr8rxBozhykQQzszgNBmmaxnBh7aTeMFZGDWFcupZv8a",
  "key23": "1L5Mj5utZVnaU265khEuVn7fMCJcRYGm15hL1F1r6euwTGvr7DrnjQorqLZKNMfv7wN1RFp768KrVGQLvKxyuL3",
  "key24": "3KZn2FbgNPFn3N4k7yFZsNt8hzuW2zEzYxqGBRuyQXo1w92TzMYuc2urEzXnZoiLXXx6dKvuc5yoLfa7vWRXhyBU",
  "key25": "23xyHb8dt41AnReBjHdmYAwZoGgGdjanYtqQpWYdBKxhE3hARXryQXaty4JUaLXgJek9gWQWiMB7tuCxXUpUDWL7",
  "key26": "2F1V5tzhtjExf4LkXayt5puRDG6jdrMnjvgMUmoiXD6wSduudqPtCHNL4KQNiRTxfhPa7dJQs8XcpF2DgiETbYt",
  "key27": "5YzaetPJurLqmCLt3qmN6d5YkrtYPM2cPLuzyiQx5uGNdUykRodf2uKVZb5K3cQa3xU3osVooUt964W6VeV6JU6F"
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
