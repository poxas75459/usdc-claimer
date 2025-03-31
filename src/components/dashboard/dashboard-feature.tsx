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
    "3WbvoXB9YcFKQepZV1pJtJ5LGtNXfK61rEybjuYdcYdne3bGoBnJMmKeTMLjrwUehwS7VECKzZZDdzUETeekcAGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEcSVbjaYYU5cwemEHVu2iVtoG6tAnjRFcvHwRZ1fHZ28XXtcpX3H1DW1RkyL8LcKZgE6LZJGPRk2pZZAtBmSAx",
  "key1": "3fbk2XVjYniZG7hqW8q458rnNVyz5D6kV1Y9JnRz6uSMZgP6P7vUsB1CUQEZN3kDKbkswJnfzj2dNBXPRjpqCGTz",
  "key2": "2nFZFJyKDog5DsTvjbmFRMi4mAjgcN6syionwukgQQaTVkZbcgXAvmhfA3DVEEF2v9bSZiCbHPRoB7bsV1FMuV78",
  "key3": "3FqzF4y1utTEzv2HGEwNpYwKVsHUQdP4N6o2KzoeSd6YUtEUFNoYYFoYirLxeLRAgZJfuK2EQiYqr7k93ieCao58",
  "key4": "3Fx485Zhdgg6U5wt4ATihnWsz7DTscpPA7eCLfiTnkCojQEivVWTrJSnwoRRJH6vTBnNP5RcZfWoGFoNTYyp4dDM",
  "key5": "5XzdZJvp3bAczrjjPUrWQn8iusSmU15th7PMvqhD38zxw8BiY8XgbJHZ1xBfP8beSNjuzq8P2aMCLgL9DKpqmqh2",
  "key6": "5UqpiL5A2hvzTJn9jfEBM1EKxNdedehFBh3VehcXuTXsgBfdJHUkvMkvWgbKcUBf39BBZqVyZzTk5FZGgUBiwHHp",
  "key7": "615RHnV7JX2Qcd69bLLhY8U1gBxLj9qkHUt9pzEtg1dDoCxXttrfiEgAA4BjztKzujZq5oKZuuMoca8ZSqG8KDnH",
  "key8": "63qWieTBFZsNTw5WsqGV7x4bPdXjKrcJSFDzmmYdzAT7QWA4L4veVPdbKQLA1HxYchz46KaQrLKPPJ364fzY7Rn9",
  "key9": "9VF2oh63ZNvEtisAgvhjEwULptAmqNZbAy65DPrdAxaaa52xsWmptbyHaKC2Hj38TLb2mRkpMeeV4Kfrcjj28Lm",
  "key10": "5ZBrNhZDgLprzfVJbyNKsnr2fM85MKHxjSFyP8b4rwbgDURqF6SgUqBJnPw8sFpD2pPXx73zR7D24y14Sj77un3F",
  "key11": "1G8KSfd6tGeJhpBeXCsoumSnhps5mwMngknmk6HDZMmVgx68Vhd4ouGuW8uazXDxBCUfRBLNkv44Sm5RpZ5AfZW",
  "key12": "5W4F5dVeHMzVZkqUvyu7NaJW5CajMyBLG7GVRe557Xf4AznbN7ViCkWJ2ytmsc23YvgDajadEvjdb9dBMFGfhovC",
  "key13": "SXDL6X6WAbgpEG8bomSPbgeESC7qXKVkxMiQnJDNRaG7hduQbrmqkziD7SicC8x6T9zeJ91VxMAYB5UwnvEDPMF",
  "key14": "4eNwZtRjpb8NibB7EHdHadDfvCCUKYu4F2jCmgYFJk15ZC3XVz5jA6KXWMMory5P9hvHY3YxssGXWi88vpLVenBT",
  "key15": "43S3rQBZFoDeSbbDEu2Q31RPjPEWojzpV9eq4NrkGGAswiSbA28FXKbpWLXw98fQFnf7WpgMdCppE4NxeLuTkvwb",
  "key16": "3gZHgyQVCyr79DT5APRAeUfW3BETkouFJMt4WApfofA5NvujeDuLyXmyChGZKsG5zkeypdkP1my7bFtJrGXvKAvP",
  "key17": "4WXiRM8rr16WVWBesNi9X1f8oQdpyRKsTgxZDjYn2WFGF7xk32FKazYWJvEyp8dY24i1TT4jF38zojCPTSnKAAin",
  "key18": "4QqgwPDuJKWfAx5vNMpNVqpXiV6dMKemy1xEDZcxgih5AhhqQkzYmbGcRLpVWiCqdJ37nGWaAErcLFDrXEX3aYUZ",
  "key19": "4tPp29CsxsqXzX3yN58bnSkMSXs1qnEAyR6xzHzuJDEC3dsVG4zw3nkxH9MFqyPvr9m8HMeYD1fqitGLa21WzHaV",
  "key20": "3gEftjrGSoFzU1F14dZzu3HrnDTWhf5w2dCoxQ9URao7oiAbome7nuWJaKQMHUKyciiBTnbbh8RdvWSU9wRDFMSY",
  "key21": "2YvaTff4dzLpR7YhdHurNq7keAxsTvUVkFNcFrYmwTnb4nbtwQ9iCgGXRnSSJdPeB19FCBEXTjdCxWQZXQEfgE1i",
  "key22": "2mVrNXusfoKBfXZ9NuQNCnyDPMyf9fGdPagL6X2YbiHz1LDSuFt78kAK6pfKTsVGXKEL6jpCQy3wmjhWFnevTufr",
  "key23": "3ActF8SK7kYaujLR6Wat1JPF6KyqepiAB1uzGVB1Pt1PXyAJ6iKBX4DkycrnjfdKuozNdg3RmA9mBByLfb1vo2Nv",
  "key24": "2YdQEUgjAgTy3pf614vzBcbC9z3kKL6q4poKKMfwF9Rh5NPR8EsCP86hWpGV1bVcbj7vjxhdowYpv8o5EMANBX7b",
  "key25": "S5ckD8n7fv7CQeW4fQRUS8tdKxTo93sS45gJknx1imdumEF7uv8ygoLNmXHyf1WPpYgCmhNbYUXCNyabFNzBeyi",
  "key26": "4amfBnh4KSXfUL2jxvY4Wra3L7C4gi5LJwB5ZnVddPBv883JPqgTGfpuUCGwekJHMA8Su3BTkMNv4SS1dLQN8fqq",
  "key27": "5whZN63HMTGyLi9C9tHhYfxVuoYpZaDSNfEdKyURRdiD3wMXA36peBfpN4mdQkb8BiC7gdFF19bzH6oCfw5Kp42W",
  "key28": "5Mnyo9uuEKJYfjrjsMw35Tw21gg8DeymbYFhwduy6xrgkP9dREUiUwfkz6GBrNHyDu2wE7xwda2C14Z1MBr1oN5y",
  "key29": "5rzmmMtemvcgnMev3ckffQmRr1VXjzXWo1fWPWceSmqLgugm7NzRKtiHzYXPV1DxYUYjwZdApiQCes1zJx8adJyF",
  "key30": "4JF2Ew8TmZo9xjq791rWmLFJiUFRx21giSTPRAwi38KDixs1zdBn3FJET7kKccvSQo5CxdbEg6wjGVyPwr4yz6G6"
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
