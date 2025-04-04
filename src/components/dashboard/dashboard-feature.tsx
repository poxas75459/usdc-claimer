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
    "2v52t41kTm5SW41qQfABAjpGajCETBSqkjNvrcGMZZbyoFez4QDjPVcNm4QhdgB7Grni9VWP8dE2KSN2RTqwxskD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkzq8HNe9Qx5pRsqeVpnT8d1CF9s2Ak6yLVHYryJp2NHE5YooxpoBvCDTfLGmWs486nSSrvShuXqRvy3KyGNFnT",
  "key1": "DXPPfWXxvgDpuPqgFGhDPcUepFaZgFLfGVWb8kMYe6ez37QkXs7fuyJZ9GeHijvHBbckLzoWthwDMv51bWV8HUR",
  "key2": "AoaCtqMXkg5aBZcQGKZchSKTCPXjF9FgNNGAYQv8mcjxsbybtAx9n7raE2xjeLZRNAAQPE6JZYKhkDgcEz12St1",
  "key3": "5Li3WqHzZJG3fj5JrpoRNA3NW2xHgKSzbU82vfocHhHGsKreSNtH3kW236a57og2Tw1UV2BRkAJaQMN7958tGtcC",
  "key4": "3yKpCDg4kzzkmETDvY5EaYPKY5nm7tbhsBXw4KSbTVkaYZ5RcrvLQXXKTiZviL85KcqYV7rAYNdmJYtejBdWYvpz",
  "key5": "64LVsoYpMreg57wXESMcBvr5avJqDueYPJnQN3muNfXJ34Z38Qy4p19Jmfkh9yaWsYhVaPn5ZV4oqygKZUfTxDaN",
  "key6": "5QGvBRG4zbvcTqyCB7eivqybF2YKS1uw3NrZskqcRuQBaeAQms4MwH2gvVsgvemJACm18BwjqC3jERtjUALeYoyM",
  "key7": "3DyMBapkX9mzE8tZMn3ezcydhNBSrtyBSYjK2pGazEr9q3doMeDau3tUi88xRJ5JxG6ps5n4XUqfiYhrmnxeawkR",
  "key8": "52564VpaL5aJkzfRaq1UG3iz5G4mzi1CBUStCARTXRabVSbJqKGJFjAKzGpMRjNLQ4Y6voRv7v3dD729aHStVwZA",
  "key9": "4bbb8EBhfXxn9vGjFstnh7rv4LH7MTRLKcsuc5nmjpSjfQTinQTY1GnaZ7gtgqEZFRPv3J6oH4UqC3bNF71U9Cec",
  "key10": "2PNJYpsQqU7vP1hJUNUGC88XS3mwQcCW3x9tHLXqbpk8Br8insEpJiwDqEuvs3MWrq2mdvVqS1bFxxU6YkoDmEqe",
  "key11": "xJAtX27ZmUYPH1LfCJHyE8mE2HWJLb1ksfesJMkYuUPdKa2fjyp4HJvG1LXJve71AstHCnjab4uxta3jp23ppwA",
  "key12": "FtSktZCo1hmFD9bx8bvs8APUnFGKyvii2MXFuQ4CHpoh9GkhJw2X5Si3JG8AdH64p1GG5bRm7k96EBEqFHrL1Nr",
  "key13": "2KkjqbJBbVNAsNkFZzg39DV2zvtaKeQwkmoCT5DdM6VyZDFfSY6kyTvX6yMgs9cniLwk74vNCpiK1G9hP1ppguoJ",
  "key14": "5feQa6NZYKqyKSx4sDgY9P1eGQ3otzrPgAiLnUFXtAGaShhBCaVub1MzhV1286Exbuw7erYNokWSepYHL6rfXDVX",
  "key15": "66RoYWRFL7RPsjC73iYWPFDspSv8AF4eFaKzZ9tYFQTDdQzYwfX1TPNCVcwLrgithqEfH8JpYBYnWufyGAeZ3xAG",
  "key16": "3Y4Caf8cGVqke1FXPtXPqwCtXppkKrGaVZPMhsUrZTGGWFWNhKzB9g1WjLLhZxTummYJpNidLbm2ua5u5ijLkd2Q",
  "key17": "eaWLk2G9HQ52KLQD4pdya3biWQAZXg1jfNm6WWpxMyXureiuA3hMt5MNEa9SETjBqQvpsXx5FJK75LXnj4jTgu3",
  "key18": "4gRJYQPMwqCzKkYGBZ9bw1SuiUZFhgcoLjaEywDnE3LJGeZm3vq7NL4s7NLWodJrnbWRStaNeT4L6QFHMdoLkvNY",
  "key19": "nAnidYpu77cd229MAmbW8NLjuoSVV8ybccodPPbtRR59GRtqQYJZz1dsTTBUqYwtQvYBb6WqxkPUCVzRKAcwCuM",
  "key20": "gcoR9GXQrJoXTdBDjiiPHgAjm6QqooRuUaovnJjpydFTR2c3TDiWEGZN1Pn9c33237KFh4KaQqwVhodNLfYYtU5",
  "key21": "4FGDyzbCcSNXPffkohLyHuag4tQYmw16k94fLwfAZ8DRLHvZZKAC5dS6gMMx2kp2bDnfhs7YNHRUFvDKhrxnuBP1",
  "key22": "YZFgSWfy6Nn9Cr5dRSAvWkmfGoXYoWgd6TEYAfWBRjruBSmW6jhPmMk8U2NAK8nd3LSUEXcUJgUKXCmNbxQnLP9",
  "key23": "2jQmGe25NVxS59rnSbk5rAGPgqsec4y1ZrgJtoYKM8avEcVMn9KbDNzvDknowCTJKtNzLxEbSjFf6w3hY1ard76g",
  "key24": "MHymmTZr8So2mFoYEJUXsUzZ2iqJonLspzeQGXg6fjue63Zh4sLZDGVNK2uz5qvHC4VG7aNx1Bf6bTDG4yvAGXN",
  "key25": "42JiuHt5F1CpkNEcNt6RErfTkkCDVM1ZcEPdFmaLia8yB6pE1wyVsxDCsMJikebigRtGJJ8gCdB78kc4dD25i1ae",
  "key26": "561tmYBQ8Gg2VfZ6ueJKiVa3KRD7TfPW36HjJ5k7T2eQicifEudWsAYDos45xveAeboKW9tSzQ1xYnWNhW3BCcyQ",
  "key27": "3mKvfTMTJQpcAZWYX524dC5mc3dqVVd9d3QzH8UA6ny6LcTcvYrUm1J6ihhtm6iB6JiPpZTQ85mMLEQ7u3YUN6mU",
  "key28": "k7UUgpNHZFxLagxrJEKqfGPBNwX8DcqBM1A1JTY3pUeoYNQ2DkEZzcha9hdLsiEryegtNR7FjZq1rtDiyjBSvbQ",
  "key29": "4xNfmp4zsMHQybbY8AvQDk73Avzx235EToraYQizjDW3xhKNn9YyosdYLZjNKZVSx867ujP6VAAhLunDguEhcH5T",
  "key30": "63vimFm7FVvQu37ioHCF3KEfz8FuF2tUTZuVqJgWx4T4Ymo5bXbVqjce1zUwxFrGCU9mtbpWefDVBXLe6Jt9XK1o",
  "key31": "33RfeYUp9MWGHc3iknu89nwbyV2udp293eqrPHHc73qbaXBF11S9XSthhdFgjS9FeojpvuDuLnpAsxrhrRMcgZFT",
  "key32": "4fasnAc2uEo6AfMsiGXHV3d8LCN3xijBiuCbtfXAzcxk1y6barJ6ia98hHYhMuKWjguWUZ2U8fBvdisAkoPBQk2L",
  "key33": "sZM4C1JT14N9fKaDSFpWa725cXw3YGWPtJVER2d3cDmnfatnArGYho8gSJ2BAPqieYYYiiMgkPC6CAiSX9nTh7r",
  "key34": "3LKxS3w8yFg2L24icZxFcArnJpNmnGCtaYFStNhXp8SPdnDSWhDAGuWFckVTNN9rGpGUGnMKDA2wZwyyyaFaWRrZ",
  "key35": "Tr2vb6iigs5EARwQ4eTbY8KjUcj4pWqKxyijYUesaXfpX6HXbbp6oonmcw8kXycd43kpnzBNcKtp6MEyEP8r4mt",
  "key36": "5FFmx3svas5fTup1kevWv7NKe2bevBXnpf1Xsg6xw5SPR1G72vHTVqZrMZoeGpU8deT7K3hDd1noh486T5DhCSGf",
  "key37": "1248EjM3zzDuiNNKm69kTUSaNQEEde9SGKxEtfNFwPCJc3svgxGzTwxuJAZqYLCRszSX8DFK9aTwpt2wiPdAZsHY",
  "key38": "5FF19g861MganExSbUpLsCuRorVFsUJTmgHrvL47o5ZpmX9rDnFjeMQUHjqsDmW1kBHYQRsEibboFt7BcAMce6Q8",
  "key39": "4cT5GGA9WxdtkHKcNuUxVRNPtt8j96rgqPRXbxWzqxbKjwwxdqvHC4C7pfnCge49pEqqbpmvUkDwhJuDUxaeeHPe"
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
