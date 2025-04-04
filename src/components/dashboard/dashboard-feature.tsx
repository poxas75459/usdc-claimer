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
    "2S68fv7Vyj4ewRophR2JXXifxgAjeWA96QfJKfXbChyZAioJb5w7ooBTHG3Lij9f47gHWxvzMaBGP1JCCRMT1XLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WRJgnpWfwuyqcK7sFy76ZbvmTRDLNxfxKtG7kx48si1ZCpicofbf42N6BdHtmk3x4Pjnk9XbjsPFhvyuPc7yTbg",
  "key1": "2NwWwE4PY8ie1Gj2cryRzUb8me5ViFZ5ygiDVv4XXe4HC51duSKTczxQospWGuYv3xLdfJoEqSMgVnybCyeF99Vo",
  "key2": "dx66uTXURKiMFN7hAVXtjcFq4fvQJYZF4BtumXGgewZXiBKRwCaPNnxwtFdWRczus3e4vkwuQZKWXWd1vcFaSjw",
  "key3": "5Y8eMTiKRvUS74K1BeqvmvGTkHm16EUqPwDPaTbgGKoaiLhZyp3SeUb2oUr86eXdJ9Ler9M5Ao59GTGf6SM9ohLy",
  "key4": "4tvEFutTBbUvn61d8A2i6hPL1Vrw2R6G62GzDAnSrsk7Tdn8sRS6bvoJEW2tSMhBx8LhcWSEXJxap788ZPN3F8b7",
  "key5": "2nystrHnYrviwtiXTUFJXZoyVB9j7apnucwzr4X1CeDXXb8Wr5hzbrQw35CQWEh8Z5gxmkb7sP8yiWR42CwV9HFT",
  "key6": "2Kbngdfcm1c94hTaTeXtFEaQ2rZrQ7C2V11URFgxw6faDxmSNHavRfA8RTRyguyfhkmW4BRf1iw2npAMpf3nxN8z",
  "key7": "3yaH44Yh2MEvbFVThMPy2EpnPNvThjssFqHbSGndGNMFqfkGJuohBU4LzRcoAZXCFG7vMBPb85Z6dezmg4xiQiii",
  "key8": "3Kew59cEgWNjU6udxu9SXAxUdJon2kEwjByFSQU3W3jXEvP93bowguJCKuXGAzwH5iguWYDbD4wDBC863oLaYJLe",
  "key9": "4GaaMPaoxc44zMsokdRqpFZYCa37Lth79gpydJozhFEu21VCYYoyZpwJvziSbPRrA9RqmE3kRMETX8hfxvz38pZ6",
  "key10": "2dVGDAMMaqpdn55xCxhNNpgAWKQNafrbdAqexJT738YBGfkJiDuwqHN5S173tCcjtAVMNiUuNJdFfXyMjaVMYZjK",
  "key11": "5idQyPnj2wpfA3Cni2DHif9cFaLccJZkSJ5MtQNQ3nfwRF4waTLXYXbJrFmGT5LsTWxNUtN14bvhVHEw1EEPFpSE",
  "key12": "ZoT4f8wL9D5AFrh6U3kCRTio4iTYS738TtDHfHmJBDDH9eKeHidchaNSxRc3NiJB4d4yQ9N9YeiTwx5KV53viGk",
  "key13": "4XnfDzpp3A1HCiHxqfzPneVqzV1EcMzAhrzxYrowu4sKuvN1sv29D82uPzDjQCbfPFdMZ25rvnTxWrGpt6q7oxex",
  "key14": "4aEiinrXdW7YKMuMBJcXma6Se6XtKcg7jcbd6Trto9G46s85GHosstcp2hLCfZfNri2u9zedp6H64fSH5YTQT1pH",
  "key15": "2Nv38pmWnVnEdyT14SdDUcLzhZ8AEZYkHaeLiU7omr22X8XP81sZxauzLocV3NnxTt7QmL1aGq8kEXT9V71SWxR8",
  "key16": "mihtueYqJMdVBUo6dUWifiDFk8dh7cm3g3DNCa1kRzLtasiJyd2hduMFNv7fVURLCQqKFVfUiDny9fjns1m3SGM",
  "key17": "d7KDyKhaCP7owAJ4qTD4eLXjgeMSyzV3SNtierRKhfsqQKmQdFb7VaEoS8VRP3tm95grSjN2N3whbf9jfNAnpFK",
  "key18": "59mVUqBtSLMztd7CfnaqkUTuD1YjAEYXBHQgw1vZ6bfHDW2fewuMxPyKFHXjDjsEBT2AMR2YMkxmLsFSMj1Jw8LJ",
  "key19": "3sXEHmwyF3hPTxf8EAyPESEkYR3UhDQsV1GFMTtznNF1gR4PX9PYm2uRCsYd2Nxh2sKU48efHdHPpbQE4FNyEs6Z",
  "key20": "4w3spRqz69sDj8cWzmMpupuiFo7cnPJBAjfZVcyg4wauSB4uJzsxDvoBvmQLF8thdPq8krKaCnECGjmpma8vRrKA",
  "key21": "2rRiTxh5z5X64iMaGfiFxukWRBPgeVLvbCysC2PgDm7RJ9XGrRvusE6TyX1f64ccZkFBBCDJ3JCVUw4iPqWvBd2y",
  "key22": "yDpZraNoGXug7i33JgrdwgqBBg4drV2BG4jA9xLnuHrUCDUVq1iMeSzjfqLL3uJaty4ZaDL1jtB89qpBX4bMafo",
  "key23": "a7qX9oBDcRM4RWbmPnfAqixoaNv7pJ2ovtdP3hcJTHof37TqPqLSw8nZRCqnNyyM4vScRxkYjZKsH29CokeB6Rb",
  "key24": "3QJ1Qwm3yWPUCWRXjF7VjegLBAx1VTz6T2wMPwtfR6Wtspi3jDh7jTxMvUsB2yWWsaWTiF97PKDPGEcxAArHSSEW",
  "key25": "2RYCk7aN6oZUZYeyvvxdhojms6hnxKtLA5j2vm3arFQpJiih8GxJrrzMfcfYA9Pm768GUWVhUowjynxZP8cyzKW6",
  "key26": "2QzLzRMbee62Ju1bS8V5udq9jpDHSX7FE4Yy7bMdAnGdaHaDddBMtFyPJVtj19xxaoLsjtQjTeW2cJF7TqooyH5G",
  "key27": "13Ftbu9PcBWVXQv8enoqaaiAHDyZ4bfuuR41BMmbNUPKcUe9VZ3cF4VzcLVUCQ7nV2iLixE3BRfiF6QnTX13JgC",
  "key28": "3PyaR7dGKYjp8fyBbDQF8u742aj5wjZaVwCyD8euFSqq9FsNiay9UYhCNeCK6EwSJPyJtFkTcaXdjNXeik2HieyZ",
  "key29": "4cw7Zgoen3FZ8s7T35aRwh2GLaPBQytrH65j91H6bz3ma4jtW3qHQakB2dE5o9zEeadZJQN657K3uRsWC7VRVKTN",
  "key30": "5ycwkd2HVx9YRJYPkJC67nni3KaonneJ6D2y5oCUAYgsAX1ua4GskeA3aNmig6fP4Ar3H8C7Zf5tRVDbJ9XqLki2",
  "key31": "4oVGQgUmCPPeAbz2bhPV63Nu9Y3kmCt5UFDP3FmWvsunLGendLEUEgS1gNDk6aDncRYnttRHg6MkeCBcaEX3rkTx",
  "key32": "3tGVGtCd9eA4QM4NcomgK3UcrDHD4BW1MAFtZXeguRuTkcxt2coyZWUCa5NX7JkaMyLwHkSkX7PC1B437YZzMGFX",
  "key33": "4PYCqtKsgsus7mQPr1s9FWx35WwsHdQVuoJBdZ63k8bT2rro4i955agzZmdde4SnDAmjVFrF7jigM7vZVwqP77B5",
  "key34": "4nKjVA5bnvh3zqYubrzu1voRzeggEA43a4N54gymKediRjUqidJcojS3HjV3dTRPXk2aPNMZW7Ppd55gvf5XN4hx",
  "key35": "4pAzohN9Tav2GgCjWrpPJC8dcWhjsFzm3gQbUhidFPEbDu1ohX6KQjnev8YpzuTvctDT2Sc6rULoG1yAkUuioNZC",
  "key36": "5MXK4HbXnhGndHf2nTN4aifRd1MhxDtXPwZhmRxmn7dPRz9eY4JzvQpCXwWA3H8AVbkpbDk86n9utAFoX6SeK2d3",
  "key37": "5ibXs8nv35KDndKYfRgJQFXyzudNnh4hFytgZ7z1GMbKD3vSLTtzDKnAVxFC7jEhbvoTcfi7dApomciUgESaxWyY",
  "key38": "2jDuTLktHbWmRdDm8zxGQn9mXt2jnS7cdcnaHcPmWNjcS1xgFmjN9AQQwZ7XeRYet5KKPpyd1GaQUxzpPFrtJiJh",
  "key39": "425v1g3YqDFpC5RQvSKAat4tb24zrofDBNDqcFT3ss33zQs5dC2YxxfD3nA5PxuqtYypABfiqXUWQE4NdX2GAjJb",
  "key40": "q6JNWyQfqn4drANkEV4hwo19GtkPP1fzCLwn2RusMDZK35Pmir8vBKJtcWEEyVbMhaUgty1Pfg2QPsENuJhMjJv",
  "key41": "65NzeFyoUxEwhMRPHKmSU1jnACz7WzjgfEGnSkZco8G2rgkLTGvpVmgdveZgutuTMRcXE91cLbCCG84bxwdwwspF",
  "key42": "QxAQgyPjW1JZX1DcmGoFccB362ePqoRpzPJWeCAMD3pdkWV6hkvFYpBKGaFHtmj3CERbE77JffMJSjjYgHp9QsG",
  "key43": "2z3Kyiiu7MhJxtaQUrPtdg1ZcgJbiKw88Gk3gqxKjfr5fF5jLGBVj1XAg7f8DMg1g4gZMBkYoD3cFFuNLeSjMjF7"
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
