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
    "3QC4Vi9FGhnM5wqhbYSqpXpSwaGYKycVx2sUGyPYmRHS1AK862bi9WoczaWsQafdMEr125VJfGbdWe1bhGKyJKXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTVZ1RhHbUQeQYsCn2rnPrHQpxHfyEvnxRnJmJtTzFgCKaY5FY6iWMZ5eJB7a7AumPftoemG8cgXud6t2kF4b88",
  "key1": "5q9RDRBrbpJxzhKCf5Hhd6YrcZfgz4p1W7AtdAYJYL6LEsqz1x8SMP7knbJCPN6MHLNtoo1JhuJvp8gh8qqWNNFG",
  "key2": "1SjGjkBjBWvDbv4LsaCzCfif2mSUPY1ELcomEmvHJKdaVJKzfNLkMLzXV1XSvxdFSFRPucprBhUtUU9FuAwHhCN",
  "key3": "dcWfjFPznmxgLA89ek7D9WCRxUHP6wdAWLUrNKHCEjwZobK8v8oFhpzkQ89xQQqYJsNjTBVQMuFRwQWdUnw1uSo",
  "key4": "3MY63pMeM7QaVuSne9feox68hTQfbBtUfcfSWt1CptwmubVgbSgj4DkQ9dU2zwjixWi4DUzs8EpY3jpht2XhoEtX",
  "key5": "26ECJJYTY2GQmbeovcphWVeMUdTqzc3HwNEQEUbQLpXjk2N9cuDqG7ixrVWi7y9BLavqqFnPXswAi5LrNGJXbwiq",
  "key6": "2Aaw9V6YKGgxArRKovwRpcS1mE32KU4qfXMwd7szd1zKEkjwbve5M4keA9PB9GDacD4tC39pWFtvWqvsBa1SJu1p",
  "key7": "Q4ZJLnEtJbTnXLsQXztATiJ1U3YgwY6zdbdYbdhzstjMigxq1zQaSoC12fnYJb5xL6BP2pWcZk4a1pM2uYvLpRH",
  "key8": "4uuTypbvSTbCFePq9mckYbW8HfJEVu4pcYBQAhNvLSzZzsJE1D8UUTK7md8uuXTmMGVyuBvRPQFxU6pvNNHBdDKF",
  "key9": "5TDdLY5tayzP28rrbCqZKMCxBtgHG23eNGxtVXbBjZ6BCtNrNdk6fWHsDQSVSHGfFeCb2w9N3DPBXXnGXp7unBku",
  "key10": "5BtNo8DskCGa81aNLR3taRqaZpEj24SREbBhkpMuJwGWWHC3FPi82DKG8Mrc2Q1e7BRk9quux6aDBHk2jwaoWvBJ",
  "key11": "MqkFENZR2eQDoJHUJben3XBbzZxErbabAcH7HUwi8YihkEnD7WfJM98Noy1Zv8JfpSBU8kxP8AqLprsa3DAhncT",
  "key12": "3dikrJxzL7rgcu7kd3pX3Yia9uJCp1Fg2MHXEpmXNv51Ed21DXz7t2MQJxSGtfQiRiBYe51dLtPcJKgcGR7LovTs",
  "key13": "UXHVfKvosmrFYkUCWpy3MSphhPKKN7jqtna2QvFRuUU2QHX3YNwtwT1Gwdk2DDAAygTuZYWrt8PCgWiPw3EdMnp",
  "key14": "DzqZykCFNWsMCBSwgmEcbY8Yr8DNY7D9at3t7ECVJEMnv8kpLcjjsUmU6JJ28ZHaT915BceKCfEimdiYr2EV2HK",
  "key15": "5qUWd4x7SuykeX7RkAgZUEuM8NRCrzPs1yyZrCS5CvCxizuob9RRaYUCG63onGf5euQTWsXs5HkaXeMoB7k5F9sU",
  "key16": "4A3f3ZnEuV5EsogkfojxhBi1cnzJSDNp4uR54NQsoSMiZ1YGv2PdMfHLhq63xabKTTZTo4Z57Q4hdMPfNW6Ns5DN",
  "key17": "41JGF1B5FrS5xN5dLCzMhxGpKgiQuqXzQaMDKRGGPqom6QBcuB2aMgJ3foqkWfaEiNrFeUAA5XdSkWrFQ4uUsYPX",
  "key18": "4eFT8FbfqbvoioGWjR3w3pbbPqMUiG7k63LZMqep9jyQB1KHpgz742E9MHsyUvUF2vU7eNgzJ4x51SdD1Qf1td1z",
  "key19": "23cD3sV7nLUSVBSYr62sH7zqvHd86Mao838SChG5mDEaXeLd2qNNSJb8iTHChEP1EgFXZdkkPhp973U4LxB9VnEw",
  "key20": "NziC3xcq4U5zwnwANWs3FKAm4HYoRPEY9E2EbobXfEmqMe7DNXsR1AshkJS36kMv1HLpfpufYJ8Yg4cgb26UtS8",
  "key21": "4Rt3QRVB2VDisi4AFL2ZESk2HYX1347gTnAo54n2xwWK6hkWRvzXzVzvb1KMPKf9ucwr4FA4ojWHcpmA3R2X1MPD",
  "key22": "274SKm7CkQsTcBWSaDren4TTK5Yg8mkQnuJYP2suuKPpBgWDCEbPws4dzE9HTcP9v2vnRY4UrkLNpCWp5EWZ1TkT",
  "key23": "4tB7ZjtwXjUxfheHq8FqxxcgBUjbP8CTeWtNEdDE7fxbQszpLUfvePDEyiL984CSN8xaACnDHWc2gzsXSJVw1HuR",
  "key24": "5qYxGndPePLoNuwwb1Ddpo8Rmhr8CyK39gWDBAHgtja8ikmFnFLi21KxzHbqwR7LJ4WZQrsitb8Y2Utt5eFgZHbH",
  "key25": "3vR8eNnARMhUBbjfS8QUjHTmFUbQRxPmkV552zE79mn49eSfMqyrFnurCNcWJuC4SgQ3hgV9izTH74LwwDGXoy55",
  "key26": "64Mg8NyuAXJXKadq2fiGepCYmGVVwNkeYwVQmfgkTucJRvwHsoimeG8iBr873r396CkH82zg183aHZRhyg2nGfHd",
  "key27": "46HtABHZFMXGHggNvE5ULFXntxDuEXCozVRvxp561pHgVg3bgktjvPxfggKaJgVKPCt1MpB369H3QuJZQQZtc8fe",
  "key28": "56S8YKmDhnRrX8R7t7TctxdgB33Vpe2RqQevqiV3XWpcax4KJ6yDia9DHKEYdfCvchopgdSbq2SXtEVUhNzJS6FZ",
  "key29": "67kLQVQ4oD3BJ3KswQmtsH17mpRaBxjvNsrUVioRH3ofHMUybdcQDaj23HC6h5vQu5vBkc9wtU3PpnZsACr9CBdT",
  "key30": "3YuWknM5Qmp4H4FvPb4kM8fSx2ESUvXpA59UH2nakarJD5uirHV9jjaHRE54cEcKFWSPp3Ya9hBFYCGhyvQhkLfX",
  "key31": "4jxMJVWP48GozoABV7y8Vj29z2qfTh8zsz6iyAdnSFQ5eCAwWrcKrSMoTGXgYBYwceryNaWpMKtQkahAmvWyJ8Xa",
  "key32": "jenxscHcfFrWBC8a2rKUYJpS6vqd2K5eW89uYj5RiSBbmJG7PibZgwkkPzsJQVa1Y6sYibz64RZ7oEgnGL8uTVC",
  "key33": "4jMh5JTCM4chi9ykcKvrbXofNj4eXJwsGPZHNfgHcbUa6yznD6EgsvxLUdB6ebn5oQRDY3dfC5aSnGcqMBm8EQB",
  "key34": "5hQknc1Ma7ZPBSqP3ZjcWKtmJEKFn7eNEQUHrQCWPYML2MUKBgPNmkxtxQcpg9XMAjHBY6xzUmsWHDQJ76MUujf3",
  "key35": "5fBmeN18SbhzwFJUZkA56wpMLnJm8dLu86NQqkqDdgmFaRuogpZV9NFBRnyoFcu5AH9iXHZWEhHqdzGgXCuBxeyN",
  "key36": "5h368QEGjNaAMHrY6TDEwPgRGe3Je14Ng2UAabfjQrRF3iARGefVwzGBUuVjPGBWYxHQKEDCBPxRBEP4S7aHawUg"
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
