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
    "5u2hiuu4LufpzDJwP8DKecAKZGMrkLGat4RGVZbBLMeKrKXoLf7JpSzAfekT246m83Af1ENnjt7Uzuw6JqnGLbJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECnpRYP1nCYa4EzFEuY6CRqReW51aGQEBhhRmC4EDwzm42xY6vMotyU6m1Cs6oo3XweWQyd1bVH1PbDT5mYPADt",
  "key1": "2eraWuebg5R4igNhGecoeSmxLfzAa7wvbuyKeZR1mZeQs23YFxbS5CzphAaD6mUzHzyx5SYi33Zcua1URX4yuFn8",
  "key2": "PyEEntVazJPAn6oahP8mQUrowf4JbSyk1mCwUGqajyodZ6qUMBdfQhVH345Wv6egMq1Yu6FXNnUefFLA93vvUC4",
  "key3": "39ZeNdDAp5tEwXnpAWU29nCMjKt9aMTghhajfkzq8ykBkH6BxjW3xxDNobwa71RivkqKuRdFKMrHFb1SjkFTJzNw",
  "key4": "59U1w8CPSUiUGkZFoRKqxBtjdhA2AfnLK3m26FNdFUudYaqxC8dQJNqTUY4ASYt1fdNuUTnafCxhtCenyisj7h5D",
  "key5": "2iAJpKZYuKc1VmHAu79AoTXBXNFTQvnR6jh8HBqrK2JTCpcymyAxG98qLNkZ834WL4dRE31jHkSW5XtQcn9dUsd9",
  "key6": "XHHuXiGtHn26CSbPdzhGCXpexFxDsK1TgYYuCFEVWxrmJLxvFLys33yizNm83TaUzEn1hmApGezdh1tCjfpikyj",
  "key7": "o4ei4AkDGP1Y2Rpr7Kwdpk4tqeJ6MRkcM8CaFvNTBAmFmzyjKZJSVAU6vZeD2rPFDd4qLkhurdu3wroo1MUwQrE",
  "key8": "bseprWS7GNHqxvDwhns2EzGkC2Qrh3VeoEEVkCf7K8uMK6Jf5c7YL86PWnppGjdeTsLR3Bzu3BnQu4VQwx4AE4g",
  "key9": "2wL6giDGPYb2J4UNfsDsywk8EZ9zX4DmGqyNrCkL9S9HcuRv9FNA9uABkUiq314fzMtF6rFFrgke1BMVyk9CXUjF",
  "key10": "3wndGWFMViyueArh4QoLGqUXaHM7XC5TxAK15ksgCK6Xxm4iZGNHM33vgbm6XSLEZNYKZNCUv7UPePNbTmTdDjqr",
  "key11": "2mxsguajg4jvgP9UjULzt5gdW3c1expW576S6xcPqGH88YzU3C1uchMVgfTwhxomKaFwRJZ71n1p2MBU5Yn6Ui1y",
  "key12": "4LuBJak74rnPFf2qVGgEBWE2W64FhtQdf3rCHpYYmpCitzWRxJ21wDVNsoiTWz9zpeswTeC7jXFAD9Sqxjy96Uhm",
  "key13": "5wSZSB8HvcVMpgc3vEuFqHSAiWBTNsJj5Ni42jTf5Gbnmm5JkCdsN37mkTp7u1xfsQNQLpTikSzpKhn9f4byAyeS",
  "key14": "2B2TyKhZ2NHFjKzuM4ihxtSAoUvFdRkDBhAgbWxeJUNjAMMsQvDPFSvPX18bwQvUWgX1MhiYTZ4DrnV8xztYxzAK",
  "key15": "47zW7qjkGkYpq33rDSvFi2AfrakEVqDVC4zW3aF5PnqGAQWgzu1x5hW7aP6k8GcXJf1a2Fc8Z7SvVtjD1oiqWf3b",
  "key16": "4EsJnCET6RVxVmeg6VDpNxK32NpPEMqXPVrbrT8k5aLfvqDrB2KymGKA16C9X93VZqhY1c4wnkBcBsrRTg5mX8sb",
  "key17": "583YwMVNBgDWx8DaJvuNZPcBkjmmC7SbVNxniQ7RhuTcsRDvsk5ewHbT7LivXSxgQALH8qonAmQxov5nxWVZFKh2",
  "key18": "4W3qzwVXst9zMkmhjW56xoEoKZNt2EfH5zz6htY5VHCZXJF2N39dZBXVgRKUEQeJpDejK22cr4jC4xFGoJn2uYw7",
  "key19": "2P2oEazjEc51T1iJP9orvRwn1MX7MkCkeFpTVTkmo9g3wX5uSHrABZJbAxA51Nk9Dnd7o2WX3Q1B8ge7KcLh334q",
  "key20": "3f2fB59iNzFqh56cW5KRzCNyJgW2ESVjUm1TmJJBPkkUXyLWkcsf2mygcznRwLqr7nXir1aGpYxguVCQxrBUHuji",
  "key21": "39qHSWkD1tvarotDdtAdgepSrK9tMfKhGpznQjnpX9v845Eee8S7nPWwJvDA2CtpA6Qh24LfGMb5qCDuyRJURBwH",
  "key22": "3eTtUuvh1nas8wZjf684dX7fA3CVeyHbcvoT5mbKQMYvgWjXAhHCLpfxq9hYgwap4cfndTGLscpfmLrwKpZ2gzPZ",
  "key23": "5A9s4sJy97kpmBB1JjWkJfDkapaMVUQ72aqJ3HbUQ5TjSmYdVQqFtZ991jdDu3o9Kvs4wkPXZRbVYr6D96XBkzsN",
  "key24": "3znFVvhh5akHU4ovsrxeckgNcfZ7ybJJAqc6qMgpmSKJ41DEdPXS3exC6eWrmyj69P8qzxWLzQWBaB5faUVsv74W",
  "key25": "4SiajcKTwCKneY1xHouXADKXVgGcQtuTNiPndVz8PqvzKd25Je8QxqqvfK3wp6wL4yZLS47uz8qxGkBG29wds36P",
  "key26": "4TMCSnxk4B8xHTaDEgqSueW8egR4LWJ51MtSgkxWXPntGfD2i7S68DH3KcWBgJ7XXFfV3qi8edC36sK17MS8wnhd",
  "key27": "5Cg8ykTx7xHJLLr9VHGWEkgR7gNXz181EBXpNHLwdeEN8LPktBges3p2RXUk6c7HXxyieV81XZeSpoxf3gXGcfnL",
  "key28": "4jQf1T26XqyCUv23kjxCvFNR5uyFowo782BgPS7xBfPqmXeoWftp5HtXC8kBXFn9TNG9rkRm3AKYrVPboXvoVP8L",
  "key29": "5hecJZqrtRmvbKUSN1rEdCjExDTnzQGreyQsEREK3BhzhxHGv7JdMVxc9LoeJDEHDoJmrvnsjbp32HyjjGGSWnX3",
  "key30": "61WSB4fSHKKjLWiRfzmefP47vCYR5ghp6o63PTYs2pBEWM3L3m5Mz6HKHTNDwesxvS7dm7xQMHTz5sdbv73D4FAC",
  "key31": "44tNVZKuL13pEKzkFSndWgPtAvhBBGrsKweyeg5SBjRepoivcLapsjHfp2FvS2PNyidaf9MzraRe7MDduu73xjXV",
  "key32": "3RaxDk7qnAoaEbD9dCyb664nZkmJBdSfrgqJxD1uEsyGo96eA4ARDQvFpi3THGryMDd4K1zYfcMxC5XgB58tTpeK",
  "key33": "4P1dkcfEU2ot8dH5J5LACBFzkAyp3BHg2RWhRfyXE4MqaRPkzgX4RY1da8jYRTtQNR9WjB3ta2DiyVpiQg4LfLTu",
  "key34": "4MsnwDwHauiqoHVNbEPRPAEqwmQZizvkF5azoiPdECPmuktPiPR4AhR4jkjsk1Mf2cs5uAKTz8JpTLfiJvwiLkT1",
  "key35": "5kTKBxS6wNtQvrkTfv83WTBEqSBprpbYiB8wg5t7ASMVRUhzdf18TKrqkE16ui9o14EevQEC8CiD545xUSWWSnSq",
  "key36": "4TvTcQW81HN1U2KYPieU1XCejU2yaprsWBgf9aXwob7ymoEmZUywnkNEbVz2hh4PXxFZ2Uv2oTPZhP1yzrm5weHT",
  "key37": "5rfoBsAcum64v1Cg7XRFue5Szd4QmhsMkbMX2iWPkMUAvTFuo3FcW4YHNFEJuW9tnvjG7nzsQ5HfMA4Z7sKRt2KY",
  "key38": "2hhtTJEnLtumaAmjY5SFTREJWa3n5tLE7MNfXjM2KGJiDroz7QuYneLAkFHsrEhJPeyjpxv5o4dy1yoMQPSpovzT",
  "key39": "22RmBcTQChsrZ1LB14wXbFivN5v5daXC2Xk911gLPhSidj3AbAS5LuFqUqkTUUXHn6egvtzfyw4rqhSr8H6AkyKj",
  "key40": "5xr5N8QHqeX5rbgdAErWhRJje3eqoagWbyfHBds4sjie8uJ5Xm6gwW2b474GyoMf8YbFzLYpeCpfb8n1JiAzzfDP",
  "key41": "54XuiA8yEXSrRC54sd9XzUrCBHyqGkdNfYJpgYbUrVGUNaqFHMLmLNvUmEUZnkmyTXtNqVgMiU4PLRf5ezKecTvG",
  "key42": "4cSBuA4ypAPuhkmrk47Qout1Jjs3q2Vk1mim6428czG1gCskvrrZvzfnFbwSAhtNVsfx4HxravTTretxZgG3yhrq",
  "key43": "2pUqW6aBNR5LmdEGNhk8SN7Eb47Kzsttxk4ujUGrSSEGtQyVy5ZguFSezkNC9HSgpgESxS4CQZJCLsuZDuHR9ojy",
  "key44": "32st82D5425Q7TUwEynA7gRCAa97rgBPLMepBo2JRPyVsgN3k3y4VDzY7dQKe4Vyif5rhnUhHKardHdSDsdz8NRL",
  "key45": "2FBhdS7u3nXxbncCKgFNN5Hh3hiun99oU37qLt27swuzpCY9Yr6LuASPnm7AN6ATZcjGvgEpvXGus1kxNCZbfen4",
  "key46": "5TJZTDALH3vEJVE8xFgtFYCpb2RzcPpwsyveJJgd92gq1XnDUAmPLuHBkV7yDMXfLRHJuj5kgsk3BhgHRPa8hhVT"
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
