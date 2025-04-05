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
    "4XNZ41gA37XJDsEbEJm9w3P4aLUVHom7hYQq4adkksR4PM4TRwFrVLXp1pZRNki3cVZEXi6J7YrGYKcd3i5jUkZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jn8qfDcacjAQmGK3vtgDvsQ97SahVC5Q6WFJc6sSaKiCABvn4Lm4PqttHeCt6oiNaS8xSFiidoMpipFeGqASdtv",
  "key1": "4Evq3XtpBv2UkTkwKuZaPCujHUX9RF89DCQQ38t7DxWQXQmYJdvdks2n5c1G8Vu969tktVocXTWGG5pGfavYFo84",
  "key2": "3LEQ1NNNfAhsfKtxxenohfrx7puKNiaPXFPTm21Vgcx12qDDr9DNbEqDf9DFzvvnQD5FzcyQq7fTjxBWFkMUHxzF",
  "key3": "2h6qYWsFj5aTA8zyt1yk4UP8CyceqB73s18nw4f3w76M9drnUahodEzYAD7gYehoDttaSqYNX8sFq3WwVVDu4h54",
  "key4": "3TMWSoJJ4ydyNcNFfmEYFzGzPshyMrNc8s1YLiBZVfmWmpv5oVRtB5C4Xwx9Q9ZTTM3siDn1axGiRLnh3NoCAB8V",
  "key5": "5PH76MmFNxn74BPvUZpyn6GHuFf3uYzXzDjSzx6qD59GipNDcvtZ492fWmLzEPVC4FEHGBnR5W8ghCuePQg6iinR",
  "key6": "3YKdTnogAdfBFnTt9VivKM1o3HSPq68yXiLc3uRP997YPcA3G6o81tNba2NR6Nm3E93pp5oWdXFH9n1wnryE1dV7",
  "key7": "wKKzooVBrdLm6NQkCkCNLz5LitQzhJWxiSfGwRHhyRT7zU9VPgx4ZdMFspCx6Fg42NyrBWJVNSPKNEaUZPDPwq4",
  "key8": "2oE2aDL9Yzn5anuarFGcrUDRac3wgW9xeQATxjDXS5dkk7jLPy1W31ZgN7Ap7QPc2isxiho7qxc2d4GAP4s9DUz9",
  "key9": "4vs6TiqFgFAD2SrsvLfN1rmeSaDCEsK4sqLizUPCioJQvbmrcmfTyomd3y1LsAiKmWSaKGheGVkyu5Qz33gJSdzD",
  "key10": "4PyrkMNdSNB8TT1Agy5Df2G5v16BQQgVyLQbpu9swXfY6ZGjrWv3zkQmgyxY8PAD8Zq6ZCmzjbpMYU7zm9g2xCyx",
  "key11": "2YmDv6ARgTqkjdNYMhjLK4pggxzQ6zMqeWC6xAhfz2Nr1dL2RLBrE4cX9J2f6nEtZ4SvvKWU71sXhj3H76Tuj6JJ",
  "key12": "2Q7xidPwjvp1Yge7F1Kr3YctuAseY7D6Kickq6PbsuQNhVPTjdy2HWEgjXtbKH4mivaoJLY628rSnFVnxWoVbHQ8",
  "key13": "2cggyH4nQCmDdkV8aSnNhjjhA9w6NEruKzHKdLrLE1HuL3uNtVH4Hp8g1h92Sd1evNwrRvGo5BCcmaptXaMahKLs",
  "key14": "2xLDoGVWxBG32wUrwcJSKHCAE1HTMr6w8jxN11dStHitED6suoSKGCV7oBhGVFrHVzQCgYsKVSiLJffGURbhCUHR",
  "key15": "4v56pEg7vVH8TvjJNFqVe3RaTNH16GJaY9q4necHZKC6XDUGNju3kqdHKAucLe8Yj8t2R7PYLhmtJB4HfTwgfxfG",
  "key16": "DAkHdTF7Ku6eeLaC22gNqcEMjY4t6HWSs2CmceP8tmSmNLnCA9o4sdfLJeGGtHRgj4QrVMMeePg3P9ryRvo8fsR",
  "key17": "48761Se4pTVNpJnoX234LnZrkYc5eYwaZu7s2MM2LSuR2Ld1DEVPPfzu6WmNWa2gdvkjXpk5LyPhouAKrM8YiDwk",
  "key18": "29TMxefn2yKWZN7vAYJCNCiqmzHkoE8Ltz7B4Pxa8yn9LaXrAVEELbL1ZvW6unReBjEaBcfKX3hwrLRvcjCPPRSy",
  "key19": "3wHBwBAK3gCPeMN96HVdUiBdtWRYu9p5vPr9gUPLPMdEjL4CuwWPtDyG4U7L9yxYCZsadh6sumGwiHGG5AHzwKwy",
  "key20": "2KurqWM3hF2qNpgCPt7D5an6GSTvPEXoFmkNkVaGbTcSKC1ZhrBmLqVH7iBg5EQELoiu5rkhkH58u5NMFgGskeXL",
  "key21": "fBNymB2XGZVW6xxSJJeRFQNSv2UUNsEB9AdzVmsPAbBGrQZRBntrNvjRxitJ43yqgtrWi4pPB4nkf7FEkZPaLGc",
  "key22": "F9RztF7vyc38w91jBDc3airzy3vVr4hfG6RJSja14rgidZPLbmcQKN3RjAFsBB7ePhABNUcJNNhX2XMTojWbTEv",
  "key23": "49MhLhoWVNZkaFijikJSsaUgrvm7FuPasCNuHFZFdUw3XDT3LaTsxNS7WPwvUERpdCKbpWSkswwVgrVTw6WpjVL",
  "key24": "4cKb3h7Lm3aKF3BcNS7stgn4fdkwhL3q42eNy23gYcxe7WxNnYxx7UiuQEe37AA84Wmqo84wTXCnpxoCrJFCRPup",
  "key25": "3PJS6kTxqAsykyUAqiAdo6tThUDVYMbFLGnkm4TDTXxxZebgLs5QipL5r1ZAMBoEPnHj57jZkHAmEqAeswURHL37",
  "key26": "32v2EBPLYZNJnreiih2sQBFUNZVgn68ncshpy6Hof4iUvv5VccrhvgbDKmQm75GtaA43XNA6Lttkq45pu2BpEv9V",
  "key27": "2a86tdCaLzJbuhVx9nGSQ5gBq6nQcjcg3yhAPpeQtd9uycqKVMJYGm2fTpp3SNBrSvMfBSPX9MfrxeXL4k2VNWTC",
  "key28": "4sj9YPDXqbCvq3MzwbvhVG8Wem6f9CJQuniy1SfSm4bvQwvoR8tjW2iLS94QiK25sfpKfcPS2xDLfmYcjp8xs6F6",
  "key29": "61NSti1piG77Dwi7nR2eGTt39J8ThYkhCaYdHRTLxrxPV78mMtKWEm4fVhjm3As6in1uh8xjUkTTxwTBocs8MbVY",
  "key30": "C7AoW294HZwzcJq14v5NkTY1zUZVR1W9fsEbbe3aJzQmEKjnsL2wC4GFA4e8GUVe5Arq1FxLdpxMg7NCtnsmLxJ",
  "key31": "3bFnsEx3exhXb4t9rAMgAGyHhcuXeHgHRQrooSJ8Hrqg6JbpYko1aazQNqLRAtyLYDYxJhRBtUn8o23BJXsYqLUU",
  "key32": "2SFEmPkk4bzvoA8jZVdkj1XVCaZUbUm6Hzfw6YZfky4Xjr3TrrrTkuY4wZ5fUGP4DB97gnz8NgbhX6au5AV9trYk",
  "key33": "5Gewpm6FJmAUP6gmZB3xkVEu6DsXp3VZAJhzp543DbmM8X1kcE1c8UFtKzxZxVLyTyRd2Huj72kTsGv7ANYdksAD",
  "key34": "2qocHT8WutHxuEkAb5mUiep1s361Ds8XYksuquEScygZ3f3uXZnNtd9TwzP2AEMe7oVxPzgDdccdrxUdFsqr1pjF"
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
