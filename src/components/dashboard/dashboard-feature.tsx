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
    "NnnwAdhZbP9nrY4GeN4VtQLPXzveyruHuY1TG4ZMUfA8gGd7TdLvK1GRXprnszL5qYbgT6ACbodWgP1jxh6WfyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbGkm83VHTmWSTa4o1ybdx1TXzWTKjAbqZSsYuuHxv8Pstt52qVL6f99sFJMeT6KyZAiTinWumVQPCoPNPjp7rw",
  "key1": "5aC5nJzgVWafBxyGj4cHdRhec39MVcqjPWGY1C5jev6LJH8QisQYVjR42ucpFnd8DbvkwBroT1UDDy2z8fVEHrcp",
  "key2": "5znhEdxzxAByQc88bnMpuCCutsmNf53pn4Uq454AFZHMXDiih4ad8MdVmojg4AgyxjzeWz2jjzY2ms8HXJ5EpAS1",
  "key3": "3sya9W2gYXNGHQ7WPwLAsPVvLufeydp4YCtNUa6YUvdeMnombespvzNKRwsXUK1FyBUZKRMZF2G9cCQXArSSNHrt",
  "key4": "49aGjoMErcXNtaRXQ2wxYzJmLXuG3btuUTWVzVC9Hc8Woi5tF4jsAVf4s1d5e9k8c3PmxMMtgu7xKfLaKKhzhgQh",
  "key5": "2t7Y3sMEnajDhhswXNnKjd3WDRZy1CiW8BMMGKsoFF85QUoDgvS7HCx6tMEficPd5aAEJKD9azuvpxTrHQXdpe2d",
  "key6": "5G1Bz65SdUWRCYMyjYz8TxdRZDVh1GAz6vrXUoK7MbTKgR2uSb5TwR4ghHskmkEaXo6D3gzGhAEqBcKS11Le6Q2M",
  "key7": "2YyBN4xLdtVSbU9E9eGwet5EsPfViifbXxYJ6Z6MgC7o5zEoNLumFnAXMBDnT9ajnm2uawK5AWSnWpEMRbbgHyXW",
  "key8": "3gAWCosqytv4nKS89TnUjpiF3nrGZmPA2SBgSmTmbMseRqngYvzh76ScQwBWyLxfoR6SnFBBoNs4x8dfM61pLVG",
  "key9": "5BzoNjzrUXv2B888CzETREyRaU8D5y2hL2Rq3V6ZYTwYihUaVCLsrSqVc4DjxizkH1Q7nf2wm9LCYQjg1cNAHjuX",
  "key10": "4ZZQZshEEV14xSQMjN3rGibG6Mm2ep4KCF7Dxptkg299FvzGxiGHbnqJ5WaFpNakGsPabG3pwgiykt3Z6sDvKTU8",
  "key11": "4G55rjTov54iTU2wzCknUCL73VifxGTm9wMnwydfh9v43M4JGrnpyfmSq9EsRR2hP56tZw2bZvBiVePyrcShpyZM",
  "key12": "3XukQMimsGoX4AJdMaLXohqCBe7jAbLGNPqeQJ4iD65PySEyRpvDXSWrqAaHTic7Kask3Kc15ddYogVKGSYweCqT",
  "key13": "36cMDfLgHS7YbjA8T3dqndi8a19EMaaoupWRYzfvAMC7xyCDyUjAnZF7ZSxrj3ZpqWnV9GNfQ6bYAK7uhBb4iFY",
  "key14": "39nx1VZAXNwwTzJMxUvQSATdKZmHiPJEvjTCP6vyBKko3Hbw5XDMuFFkjqMmWzjVS6Ra94R5pQXfSdh5iKHzRm1D",
  "key15": "21MY1yUzxLFZDFXMTDXF5cq2VAQvY2aHZyW1VdLLRgVJtPLVsRxY9XM6BT3YExR5H8aEjoY6eJqK7Gy3ZGNTBfCV",
  "key16": "3ZSxvFyFE3gnMqwPQ7BvFovDydn5rYSwJdWZhswf4CSPQzR352wBPjnwGkazPg3bEeaCNkDH3TUrZRSxeRFh8M4H",
  "key17": "3DtTTQLjWgpA41DRsjWgiZwjssKZVKsX8BvvUvyPYm9aWoWjk5g9WMsGMdwcLo6GXjCZW7UjLaZXm8AxUHMPCxE7",
  "key18": "2MjaDLNJKMTytLRy8BeMBYFjgkMSen8MmPrUanKsYbW3CRUBRjLYowErsVzZAAuQyoL7oL9qxNVph76c3xSffecs",
  "key19": "qSwwwgAmktThQNVrJZTnJXbS8n3VUoMbe6XFbdXjjMMgsmu1ierW52kxUW3j1e3hSYGLd6B2zAtDKex4mqiEiDN",
  "key20": "3toTGoSfYhFjAYA1uuiW1kEm8L6NfMbQUDaE4ycD4bMTWysFMhKu7JWb1w2wQTgVDVSmT2Lg3VmRSeTpXjv3DmgC",
  "key21": "aznJxNXsiE4UKQgHELfj3aniXKWGfGysjmQFgEvYf9btfCnik9u9fm42gqKBvzdsyNT28um95gJosKDZWRXBdXg",
  "key22": "5LdC5gWwFGo8jUTmdmB1xvFdTxefEUhY6ZZBGryzWHZvPEas8oH5175zWrow1VvqzycAkW7ntXSrdpuuQ34vP2HD",
  "key23": "4GVuRwWqmtX5sUcNoQa2WEPCsNxeYug4x88ktAJVmmCJrm6uv3VxDwBM5Ln9kLTJBg2iCWpWCfbknpooBb2cwzjE",
  "key24": "vrZs5hiSqDcQezNq2xUrneKGf8QGSqQsTGNYQP9w81u8daqYTiiBbje2oeAtG64z25Mj7FMPYF1XFsVfScGZK3Z",
  "key25": "tXiHcBmNWBJ976J55KdSjFVndvH8U6s6Pd59psXie2SBAAfSMUDkL6FEVXT1Eyo92wpa52W4R1qbeEj93crmZq7",
  "key26": "2xaRaUvbQNiPWXfw4ys9LfupTJeE4Q8uAK4kfku5JKi1ysLGQ6XEGiDSj4H7ztyaJRzZ89qKdfZXiVfJppTq2RBs",
  "key27": "5xHWbUaUo65tkMeN3Ut2SGY3ziKzeXCtoXWn3GaafMWKAUmiCDFpvU7VYaVh79ATNdLr5vCxxz3oK5Kjra5HU1wS",
  "key28": "4UUXNoxtg1kzWvM9jwJAeDQsiPNbMKBaQ16ggMu6kHyhvhAHqE1NCR4ai6Rus7bQS1Hx8qatbo5DPhMYYFoQ6onE",
  "key29": "kg2gm8bPkypYp2XWsjMoup1UKEbjmxCqGE5SuujnRGmcaiuxRxUvkDCvofsCX7DsaLqxy9Rwjp9yUAV2tVHUJJt",
  "key30": "27iWkfkge4v4LQpecDqnBtTrJFbrhBHE7CyrKSELKw9tWgEE7Rf8t8ZnLDdVdLzdfjfpwXQEuwcggAkd9fTofpyc",
  "key31": "2usrTReD4g2rgfrYkRbXmeF91qyUo7j75nBfAQTmQQ3kj8uzC4fCk5FEdrHPyZcsrJ5U7t5uGWGbarp8qJoTSHXw",
  "key32": "3og5hguSdLb8sj2bfGbix9vhYXXLJWrKBCFBwbyEhMEFEpdsxyppGcpM6S93JArwe3sL9hAeH9QYpqjDUTJE7TRb",
  "key33": "5QnsLMKMncG9C4LqtehGYHjbBiFx8frEmxaeMCXLwb1aHwaJHNhZMygRmBosrAezKJ6tBDjXyWeaZ43NkdZkzNHS",
  "key34": "4WRcWY6az1XFTqUMnJ9DmKS5BESK3XKNfUx7GywPc3NvPgiRA3opJbhq9y2La8dAHbwe3G4x6bojRwTxbGLJJ5TB",
  "key35": "5ipXqH15N2eHd8RjdMBJfBtnYVMRaEgaEaBXjthC96w5amRX44bZn9FX8KpXmQ38j5A9j9J5tFRUxeFGSCaLZk2S",
  "key36": "4WhHSvEadrbv8v3dBebB7LUnAdwTiiWyAhNn5bG3zDfZVsvVXyQPUtQqk6cTCCNYe9CyPcK1DkCAEH9tHsdSU7V9",
  "key37": "3KCSZTsmmY9WLrTccRscVhLiv9N2YLViKtFAoSeyQwqKuhgTeSgBNdj8zQb4huhD31TGnwsS2wJJkBmkBUXxK8gb",
  "key38": "5zs8F2h4Js9nwUj65jNrqkVc8m9CmmFwBPLH51NXTHjJ8kaPS9RmmEG9jVpEPJcYhw9zZwXAH2s8XimfZXxYwXKn",
  "key39": "5qBuT7ReqnoNdazvLNCjfEgbkkxajvXRqef4jgiuejDscS8N4qTJXryM9QTsin81C5b9jah2hDejzuiY8Z5WLWJ1",
  "key40": "5i1ztANcqMyLUCqkcjAc5zMAweeCictyxiKjekBhYVn8EucLanSvyDQsp2JxJ5wazehDYaxSy9aUwFLBFv9B2vJr",
  "key41": "4nC7ZY8JbBWU9S47ZCHSxAKvx22sR7MPKDKqxgmiw7s3Zd1hrgFqiAt59ur7BXmTK2aXsYmSNtHZWp77cyQr9gDd",
  "key42": "4HqdN8xzps6HMcx4U2yspK7XUAQbJsh8uepjoM2yJuybPRKHZZo7TMyCDjaVve569ke3A4t1R3dZ7fkGYpjmiQva",
  "key43": "4YbWdZQLHzo5Hvh7t6kYnH4YYJXbVSLkUY8PW7qkBS2AYdJwR8CKAouWNkGG4DsXgbrpeSPjTH28RFq8RvknHU2P",
  "key44": "2mhSmuKf8dQvEfb1PZqkNgqpFkJoycpmogJXhi3pgx1RVW4pyaRtgzJaNtpyQT9wxmx5dSsLTbvAkjT36bXmH7nq"
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
