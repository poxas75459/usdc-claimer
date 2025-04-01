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
    "2Ahvo7zAx9Pjr9kokVhNs6dcdwHgGDsUwnNeKYgyTkHgeAtgxDTcRhXrq6mZchWu1u1qo4ae4fs4PMxiwQqG2To6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUiwAnvUFZNqoyf8AjQtz1W9XWXHk26SQFGwFVmQwn7mmZPiR13WirECLK4YpHAP15JVUZwVXDi1WKHwyqDMdTM",
  "key1": "4difBHNE1JgkYy9B3DFHwSkZBNmaE9ufzMnSLBkFnG7xTZwP4DZiitX6hKQM68M5yabGemNzi2qKEAx2Vo48TPee",
  "key2": "2ACzqi9xxn4cWpenAprprjYkQ6os2G1dbSkmpeNcHpPZB3GB1xPPFrd1ijuJdQLHQe8VWUg2DLZBwRH14fUruD3Q",
  "key3": "2kATaTCpVgm1RFXVzkGVGZut9Z7TqB3UVnqHfyw3U3TJCgXtrcREVFreaseyQghtWmm9Ty9jfJxj9ZGNhYZ55kqR",
  "key4": "2A5vB6CSJfooEUUNxa6612Tk1c3PCDS1MPExGaGJwWDozkskHuaM1vxfs2sjHEiDnN2MYM92akrvVpFqdbWnnr16",
  "key5": "5YjTeDSPTaE4ziverjhTopT161WUBvxTYVGct97rSCbcvZ1GRuMgbdPmkkxx1U33y8tTA1eATqT1qs6Hcza9Ey9F",
  "key6": "5pG4rRVDEZg8TtcWdWfVUTYZLKdRqYBiCPH5Gf6Wnqij7a9sKTHdDmws7pDVPKuD3jkBWhAVP8DxbS7pGRK71sQw",
  "key7": "wzZX3s4bgwc6GY6r9UcGo2igENpGXhTXFrYbC22LYBsEBPYRKvUFFRzDyteJt4T8ogg3Hvf7zbT1WyHeGF5LvYR",
  "key8": "4uUmnxx99W1AFSYW6VM51cPSixaTp6n44V1RZBziXYdaGWWuDBCF23EzPN74PTBi578zk9tj6m27E7MMnUzEFo9T",
  "key9": "DkgnVrjxrChKBMqDw4u4HmC45PeafxP9EWhKFzCv34KPjM7ojAmT2mH3aKZnyYmxRXrkxMP1o6HUYCHqbsHMZ65",
  "key10": "3Ff7UD3o11yyZs7HQxN8T6iG2GCLdr7KaFBWuuM86zCUp2yNUxjhF6YYyTm9CSBsd1gj2Gcgxwv7cH4kzEQMF1FU",
  "key11": "5T9y9utaeqNpaUZ1jh5F6KNCM2UjfsupAv3RkkrAiSBpGLCbVAEEjJ3atnMrHd1ADmY9fPRg46EieGfEqUYZmMW7",
  "key12": "nLXD9iK5KjWmCp7d1ctHbecqSsVXpL7r9dg5KBZy69EqiUB3D4GWaVU45ooPPX6BQhVTaRiCFivY1LV6jjwcqQY",
  "key13": "3VrPHuKKzVtwA17pfrZPJfcLYbSmznqofYMnBXzg81i3K1Z3ZWTLJCAm3Xs8qgnxkM1kdFhkjiq5L6TQjTirDB52",
  "key14": "JeQXTrpYRLojgVJWtoFF1iQiZcK71mxAXQDFyZGCjFRzi2j1SgHE1eBSrQCzKuw4CubdKBep2rBbB3cag3oEAzf",
  "key15": "3bXKtSyRSAhMt1P8MxkJvmVMBYEQEhXUSwxrVZvjGv9cdDHQPGgAEsPceLJzrdp7Vu5CJ3K7iCMNgs8ZdkZ5SxrE",
  "key16": "4EcRfS7NA9MJvLx32ZkJZ5pHNCsddAgZCA3XtQDJvn8CGoJfqrst1Nz62QiExVREMxoy5gHWrtXciBCH1tUfLdkk",
  "key17": "froR6CGAgkSJAKuC5NkWRXEphcyrHYj1eBsBPm4o4pjneeXCBciisobCMQHny7VBMP66guM4HRbed1dxQN7xGhM",
  "key18": "ahwCVQTC79jgsVJj4PnACunNx5tNvGYwix7acztwRhopCuZefVXt7KyUKN87KzzRQrmTZw11eRCLoBrsBwdrFLG",
  "key19": "2zf98tvXBMQ819k7ftPM4HBzdv9wvMJWFnKBB9S3VB7VxcQBp97duCBxjALuFQGmXBFLCrvDNygPz6Skg921Hhnd",
  "key20": "duxx1wsmwo1SxfH67XE552TYKuZjq9NZ4iMSU3bZRH4MbU8kSGfEeDabU1kFAufRdUx7uvtcYLmLdrz4ot85wvd",
  "key21": "ca9fpWKHiSRtYvXf1qRgxFqWsq3WcbeV34aRRwXW7jt9xXTwm9DT2bGeaQ9d5RTEpYmULzeh75mafZLa1vCe7RF",
  "key22": "3gQa2XXCYfgjKxemQmq9tyr98Ps9LAeqkLW2vvte5SWMn8mLmwdDgWcEXzCfnpfpgmJjmHEGyHESHcy1kV9UXNAQ",
  "key23": "duzEnAfF1UDra7NocuzJKEAsNRQwM3ZuGwpbKbEcYj3tjxU69tp8whQVrSCSyLCMkQP3Th9JmuwZNccP8CKXqLb",
  "key24": "2zG4jxSk5YjL3Kar3CCRyFRFARGFgfU5UAMPHqSvFQJCdDVBxhodnLcPcoq15UQtNiUgUMqn1pk9WDbvFruQ3vVk",
  "key25": "33wNo4hWSSNEMVXUCcNdWgkquu6dnthymrLZLW7ciVSPz6zWVxff6D1gqhaozabVrRV7AzFCFkuBJpDwTDwQyuYU",
  "key26": "5p9AvhH9fYrWGmgH2Va1pabM6kBDPyMcXBbbmt43Y16uHTjkzZJmWqFbjnh8fWKP4xRrogg7rWZs5dGxcaHVha7U",
  "key27": "2Ym5WQaPjibDpSx7sEuTXJQpTnsZPBcFj9zFHjBQdPoEydYgZkGdBeUYPdEorwDUQ6ZbsjEb7J2TaURWnRP7nLRE",
  "key28": "39GGVvvmUNJus32Ha5BPnKC3kQt17UYVGFuxDmbLFxLkmBkomf1qXBrLv7rmL3C2nuvNQC6992rGHETasy6mf8ao",
  "key29": "3FsKfMey2f7dFn7WT4Diswj9cnaRLfGWtU2XUoxLmQZZa49xJrMmMVDRBdYdr3E4GimtVLoDnyvgssTDZkqgiuz5",
  "key30": "4MAzn1xJueS439Pf2ADtzZ3B9r7ipFVWtt6kUepKemxZkKMbBpwZ2R3yFV2sqCBdQwfSzz51i3zzvawcmQFDqdrG",
  "key31": "2SHPq5qP1D2dKhMv5hA3UGCxGdyDYN3FCfQMSQjcB6gb2idqNbKynDUfZiQwrH6cRWAFTbpeZUvymvaeGmpsoGbR",
  "key32": "ei2jTra8NHaSfqr3TuAC5JEfXQHSou6hGBCepSzoApxZnwQM8E5WzEVpk2YzhqoPDH4M9Ws6YgzxpeupVooNQU1",
  "key33": "4341Coii8gdodACwXetNEVowBYxcXYyXbhJQnrGDcDWkBCiQUymVC3pJY2kN3KUrAQpqKb8JqCA1gEqLhmnsTmbf",
  "key34": "qJvqry12knpcR6VRmPDLnfp9299t3wVvHUJRJv6GpzqwbbwpmvN8yVfNP9MxHJNwF98NRxsYRoLeZv8hRkpypK6",
  "key35": "YWYyNnXby8ftvRgdiRXbhLu6S8bFypqAHiHUPqPPreVs5e27aXrNxahrTFnebdpv3rq3GkbVQyqNnPro2mbYycU",
  "key36": "3Y1f5fJ7TupF1BrTqEdL5iFc9XAvHVSnNCeDdc1xaUWvDaSLEAUkB6vexC3HMUSMrgfiUCFrdUbX21o9xpmzUUCJ",
  "key37": "4rgvBEWwqdSHQY1S4wnTaBxAG9BHFjp11Qq54zhK9UAb1KTRynzQJ4xJqAyWu5uNt7KErJynkobFSif1X1WTTEFt",
  "key38": "5EW7JZkQYfPk5NYvcrP9hpJzhA7K5Gx4Qi4fgWkCshyJ5L8pX7EGsL2cLr8cmtGbZJHfJyQrvVhAKadrZvyXZ6iy",
  "key39": "DK5j5oE9WsRhnnZzpeofKxRKtLoGtzSG3X3dv3e3wycF9wJSxxkJN9zzz4Uw93Pnv6qZKrnVXnZVPnJ4XWB4gkP",
  "key40": "cTmMG7kh6WbwidXqJpH4vsHNKzi2g6zBGiqzbb5dfmXWpQ15Q4571QAXrH785QD3rsN3StA1rnwxzhfcRtX7k5e",
  "key41": "3neDGWSW4zLJE6StUWt6ziZ4KXQPF9tWDH9j7MhqV8oweKPfyxLSZy8rbvkjLhxtjkVhbQ5pv2tHwS1VarZoNAzs",
  "key42": "ZS6PqFhBcDqUSHY8cbqRuhPQwo2zaikh7j7JSHtWoumxT1h6WYGNvsWXfmU8yQw1f97iNwanBMemwA1ouvadJaF",
  "key43": "4DtXLdYMSJKwnXgrHLYpzjeW34ziPqN5bWdL4JzENTgViA6AVjcYPYFnmqP1ZDwtzewTfSz5YG6CWR7pmUcJTi6a",
  "key44": "42ybSY84cSko1Bq2AbYQcaEnEhzhCvHSg5BPnvLTr4YXb1QoyK6L9vgRLvV3BWiZ4DkUPyJFVCzysVSQP5r2GzZX",
  "key45": "4iU9z3yPKsHs9PqWXQ5LAxBVAPKjmozjDa7sr31gFzP9dmvagxA6LE4VksyCqW6LwJ5xhfjurB7YPRdPr9UVmJh7",
  "key46": "496parcp56nLvDjDFgKaLbsWjYTJBHkCAP6M4fu4bxqGEzTmS47ymzsHCd6DBtA6Y2MFJnWLwyH9webYogE5F8cc",
  "key47": "pcujZDNtViZZDWnUixTMcyhTH5R5ScUXNS758cx7JnfhtNSV7QeFSig7RT5uqkPBBjAxkfyQirdmAehkoahWjWo",
  "key48": "356tXVeMjnR8JgkHwD52BCqik5A4VAjHv6Ro3u6muTon4Lk4xstjFFYz17dpCX4LEfSr2hvKcMY6CvxxzUKTmScu"
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
