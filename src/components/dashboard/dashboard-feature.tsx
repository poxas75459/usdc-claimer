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
    "3nmRHFXMBUz5r41xQYTasqkKPapEMHLsAsHPqNu61DCtVRr6P6dPyq2HfTH8BFj2KKu4HomxQhQNLr8uZo3yvNud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637B7yQUXG9yjYBPvcChr5LhukCpbrWHe7GRjbdTQkszQJUZyGyvH3GaVbPDgRwrnTk25X1ZGMbTM1HCy3ofRUrB",
  "key1": "4uP2pQAqzmc6GLSEtXQfN1VQq9PTPsD7ZT6uq2iccwtDHC6nQcez4nEnVrYz5VyyWD9YKSQHkvQgNCXHJXGv1RRv",
  "key2": "61v9dmt8qPZM4zKcdnuF9JtT7Tqxe8GFVQEx4LsN2fcZ6XeNGUWczrRLdU4aEBTfqB7knNwPuveMZzQTrFCrAYGQ",
  "key3": "3VGmZbtV181JdwGE4cvJJDTyv7kbvFxx2kdc9AiQAaQqSBK7AL25tkJswEVEA8sjtUD5LwWDGjBEkLhzwMzYZgas",
  "key4": "255cNMkfu4iyFrzXnws53jYndtRNJWupwyoTN2EgWiUpftGTqq2L6PmsbNvVajUTrY7H542dT9s5xRobJeAYDBGg",
  "key5": "Drzoo2fBRqC2knqXKvHKxfCuTDaBKJnGW4vz7mizmW4eQ1o5zMWfLgeBWSg1PaLo15pXKocXXLHHjTggvKh6G92",
  "key6": "U7bu2pxJSYtcaqVBGXzkoXrxMh79Ru8AnPtnFqiganxhhoWz3zj38M65a1SDD9JSGy5xaeVcQuKsc4yB7KDCanH",
  "key7": "5xWFCdJsQoLpLN7d6Bd8rjyG86eSiyazeouh9mAN7Chq5psn1rWFTyjQ85XufZbRzDjpAWsUCJvrmPM96iyvz4TW",
  "key8": "F92nwT8hEPHSmxijaHwnThVZTtNQ85oUXNYc66GwsQ28VkYJe8LB2wBt1rNTRDgjXkF4u7C3X4fTaXt3r3czK2e",
  "key9": "4huzTc5bC8EZUzpZrREx5Xt3mGXftUyzhPwNgo8r7NWDaEUHL4UGazv7uCCtkJuEBmfvkuxRvs2R2SeYsxjabmu5",
  "key10": "3bGJxiaxtNRbLT2b6RYDtiCoAoTxdPC33u36tJ2EesH7MWRoRzQq732gfKb6fMYgPpKb93Nm1srVoKLohtQMyo4W",
  "key11": "45rmNNu3GWovcxRyXLY6q3Zf2XJP4SHfKBFTNdcqikr6ZVw6z81NF5WMhs8gkDMuVcYXnSXzDENdw57WfdhcfZFd",
  "key12": "5kbWspcqwJTGFkppamkZuDgYaoHUic99mexHoxc3eZ8cLAPKunXGNuSmLpFoXyKpoDKdnKBCNde3C876162XBstQ",
  "key13": "5shbmyi3bxYzJHjVRL4nvGKSKtLPWYLCbGTBqrmt2HW1tS1X8oDbNgBfmned2QXqwBq6td9qiQDE2TcRfJb7BCV",
  "key14": "k24xPg1idbNLsLj21xMKDy49pRTS4Kw54akkdxsmn93xapSPNyWFunXf8YeFCP8iBvdHzNDqG5zvNtiGnUZsmKU",
  "key15": "phjFdj6nD2oCPUKmAncCSjB34gwmXheSsifHUZPvt4ciwhLUJF7USFUF2dMvM7zEidGyLWpiMNW7VpGV3pvrDsB",
  "key16": "4vbq3UzGEv2NwfCpwuh94TrzmMGiKuKheS7wv73QBGYjAqmJetfNdZGDvMvL7aFgHfbGvXCzL6jYPPUFZEZ4ikws",
  "key17": "5wbcXULhCMEqrb5J1GJ4mMpQ22hPvvCHT7hx9KkzLXqmceGwzvizrqQaw9A7thNY2Gu2G7FfGLSUPCkY1Um6WVQC",
  "key18": "42p19o89PaMrrwVesszdZMUfHvCtHnRGZGaYQrwry8oDncrvYcH4XxbSKjaxGmjwQtN5bNXLStztnsrX9Yk1oQjQ",
  "key19": "3WWwpH7MCU9RoCw7VNZbh6fXBn7Q1wxgjz2ehwHNvppA164L8nn5iPfG8swLXGekE4DoU7UasT7WeGYyFMXgpaa9",
  "key20": "4Cwp8b7nay3gYW1qpdePByxGwaoCzHNmtdCy29pn3joMuLzsRgVEM3BFPzeHUYTAUXbmHDhC6gpFzcYRqpstNPDi",
  "key21": "3LZDen4s48uJZ2mXzH21Nqh5fcdcg4LxRdzYzoDEdw3tNMy1De9DPTkTXiQ1G3bgJTN8kSKK3wW7TmkNmeGiT38s",
  "key22": "2sRp9LnT3WxTuKdQFx5NfELtvviREqj2VBYeRekik3niwHn65raXQ6wEqYgBBaV52f1bSCRKKVuyUgHJKbWYuurj",
  "key23": "4WZ67ByCxfZYi6KjfWjrzNBvWTcZRyFtA4uQvvNi7W2VC1FjkGVMzBhJep2ufza19JiN6NZzDjmC1PqaVWBtevWr",
  "key24": "5JPTHG9eKBzHSxh5FUieXeTevkd6njxdNVQtbEAivjwRyGhQP13ZMuenwiMdXXBm8oe9vkrT3YjaEuiG3wzL9XmD",
  "key25": "34DcUGWon5XoN6CNMQDdD9rRorFxxus44x7Sa58uar28rEcStAZk799yhWLCs4JfNmvRRwSgw96HYVGiespvkTBL",
  "key26": "4NXcR64BqB1Ft5tbQJBRHNeJzN765GUcaWbg9Nq1NWyDj1S2vn3bkwExvbKzTt9UfaQhiv1qP11vP885mhbm4HBk",
  "key27": "24P8w2LGUJWTAxxs5CDfKqdX5pHpaC6qbXM7UwSHTA461muXXPzf3quauuH4n1TJte9ZXuRkCFpfhCYxvbj95iCL",
  "key28": "5mZZkp8SG9o9uc5m7qY3TyutNyyygjMvGH1htJJLTZ9iPHcqCPJQyG89ZX3kVzsECi1DpjDG6Q2tVLc9K2GvvLyB",
  "key29": "7w6WybW4jmjjZfYD5CJi7P7vr23NmjQMhcrmWBWJA7iBDyXB9242NFakZfjLm6hPiPMXne5DxCf8xX6KHgshtK8",
  "key30": "ZoyzpWaLwCfbrUHMvtkvwSQ7HC7rhYSHoGTURWNmNchLBncbJLkVafS2MHZ1ZThyt9UY2vs78dVqxhYJC56AZTZ",
  "key31": "3oqqoU5NkjpJvatbMEvBBt3VQYyh7cE3bzfHrYLLDvezM3jBkfhuoRVgzNaMky2Hu5Tmnoep13B3BZfsALY7FKDp",
  "key32": "5j1TssAuuH9Nk4vHkzvFRkvKda1DgsdapWznt1vnfJeHKfKmz2fWxuNtSPPz73Z5Lo8U6n8icZ7ZkhVKfuSLiaar",
  "key33": "2y24FLcvSVQipdz5xTgCmi4NKCNG1FU2mZdJ79m57jvRTQ7CTxCeiVtMiC6tUdkF8Ca8CNyM5ErALkRrkz3P6TMm"
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
