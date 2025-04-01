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
    "3xm7eYBaG4igWc5hXh9ehvB57JCEVcf44AiutrB2KYnN2xfpbYchZm3fsB4Cwb3MiammjvM8vNKX4Wic7BWQ29Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NRoURZVLG94fd7ENNFSo74JMsXxfoADaCp8eKjzb27Xr83ia82qiQFpWXeAWW2xmMuxGnT4gGx2L1okeqWGoQxG",
  "key1": "5JVS8RfXo2AmAqh36pHpWj9Y8BS6tqxquweXA5kvA3r7o3ERUBUdCCjTMaSd42P4KmS3pmngAPbVXnAs7Tcb2zXX",
  "key2": "35ri9Mwd1VjFvzkJhPUXBPVqEboJiHrPjyHtF2R1EzsvNhYuERzsMVkupLMq2gG3Qrf7ujsRvogjYdGXBoDuLetJ",
  "key3": "2cbTtqFR2NMz2WUYq3tqfD8XQ73KiRbJTrMvhiPW9H4JhHGvFBaW569SC8UVJKTs7DTZxMDxKM8XLkZ8QZ3yqZ9o",
  "key4": "3fkRiPnr3KxXJGqbcxveJNkgVgiBQBYd11JUXLyHk1wRK2Xf8SWoQojSj3uTSZM22eaXhxpdF43f7desALSuEJj9",
  "key5": "4YiSzRtzP5eDTNuppAoyT8EB2EaCk333m6Xvzb6pXrgXuaL4JLFHTnHfH1Dn6Z1JfJHrs9WwFFHVBmaUEisc1eEC",
  "key6": "4YU4j9S7xEY529o6Wgx1RWqawbsRF7RmqB5br42cTgEJozJ7nNz2HeoMy64qskqocrv3nimJoeWcgd89w8pTfecK",
  "key7": "2cLCsFpi6zecnRqd6Akne1CZDixYSNRrNBSLWJ5Y1vPNoSfs8kkr3xfoRwqwxP9Y1vBi4W6eibVRXBe6o1viGS79",
  "key8": "3rxwNxHqaw3ScTqKJht7a6wYsW8zPda9JhoYmofG69u7RSugmynq7dAtNX1d1oBsPMvyYxXUNE7NpmifrByYF9yT",
  "key9": "3baHXNryujSX1uBcfPaj2bnLgPDSo1tiBu6GUCoiVv3ZKgFivdfmhcjdVpTgdbaxc8DMCL2YP52pT7YatNGqyseM",
  "key10": "5A6c6Zr66YgMCw5Rg1f39EM5em7rys8B3Yd6k5QwuKWAF5upKxHEBRB6SXo8MtLXx8ZJnnMk1x8zUMjoyfmMYNNU",
  "key11": "wSng66C17JQLuvqg2V2c7NjzdHBSF2V72FaMxFT8jgRqGDube5UEDA2d5Nt7RjQL1cSfRBx6dm7srM2N4dqeHTG",
  "key12": "4NkBC87Ynm5DaucD9wsu6RmwEpSvvZ6qWtTvs3X1E5oZLhegxV3ovk2wgYXkzDSy7h5twqWtfA5HtjQX8AufD7eF",
  "key13": "4FtNS4TvfB7Ma1Yp3AmkQPpMNyL6MnU52mG1T1HA3jBSzgp1HdP4BJXD2Jio8vFAAWf7GeShDCYpQsJUMDxvuX1e",
  "key14": "4raan8KdEwk83JtwvtpiRJDEjeuF8ZBkreCvpNbLshEA6sewaSLcXSPDQruFsVZmioNrqvQH68p2seXXpZDDfgmN",
  "key15": "z1QADjL5Tpo5ABNnJuV7sfqZUVgjKRb8UCuFoqx1RWm2hfHpVDFEYNycwunTwb2YZq4BA8bs4JPmoHzzzceDVFA",
  "key16": "2qvRj5gziT6AKZcAah7zuDQ8UTGN28nXmet9LzwbmykF94a1ozSdz7t3tu5viBKXYNeRd3mBfSGEVuiAsTn5hLsj",
  "key17": "47e5AnQHmnVaiPEtib7AJuDg9nasB1DoXbydryWqoaWeiQHPdsn5PAYjNHwhd1SCRripg5Fmym8hRsJ6afpD2UxM",
  "key18": "4brt2K9opwnRALcQCKYHx5QS1TS3WUEhQbzB6vFGFSz2vAEUVqfAjN9Vf1RXWsnqAVbFSipRyhWsVG8R9RzM7jje",
  "key19": "2MZc5jHBLP8SteNZvU2EwQyXDDQMhKkQwwBZNs8ze7ZztJZcfLC3i3vDMduiRjv15uYtRSgP2QQjtTpS73Z7jw3x",
  "key20": "3gdr9q51XdAkHVd6rfH5DqouBdvKnN8gwXFEaQXB4NTbXz2yAm8hS5oVaWvgUExiLx1a8Bb7ejWoKsk1zTacQHjo",
  "key21": "4ks9zvJniNJK9knhcdQGBjKKt1uQjTcpNsWbCPo9CGBeqoBDEHJsQWxDV19ieq93YqvPJZE1W4DK8xb3Q3NmB23B",
  "key22": "25dCPDGa65LZ1aKpsQzZXSjAXNbHw7NBU14YUB9US7CJYq54wXV9xPGYFKv4WM1hSoNfFSejUAnAD2NiengXN8X3",
  "key23": "3WxtfXC6oqXd1pPH21RxNrLY12BW8gXjgR2ToJ4AtWSmZ79TieZ29ukE5UEo1JcEZntgY2vq2wt1pcE6STVqz1en",
  "key24": "5jKmGmffwGjKnMQ15mhwfFaGQeCry7i2X6ci6jsC3A4tp8EYscPzn236oAcRCPH5Vs1j5PghQaw7pmDiKG4Axkpq",
  "key25": "4ZHDvm4LH2mP44BDhVvu27Uaf7n26r68uHZsFFiPmCg6GBhhQzBJZfTDC5SDVDCXkRAtjWcWSeTjGyQau7dxviJn",
  "key26": "4C1YoLmSjWT8ZMfaL9xsd3snAoNErciUEij1so7Eadc5rBvzcdumciR8L8nMbuzYQejsCMkB3JCaLw723qfoVz9c",
  "key27": "oYMqXsfTciiCz66LhxhMDMhTU47TPMStfh3XQLoc3EorkY5BcTDn7D4m8p9HSv443xkJzrCRcnBtgUnnd2wPUC6",
  "key28": "5Mt7d627Kt1NKRhsPPFJjfgEUNG5jxkPVqyYxBGQbwoGq9R8ZwZTeZ3QM5RzFvpm6cHeasEucKG2jBd72hHrRWxA",
  "key29": "2T2PAVL4xYoD7E96PUYeyfPC14MBcAqJxpj3kpNpZ4FCjNiE9PVjD1GPF382k1DeGAyeehZpGLE9cJ4tnMnzPJ1Z",
  "key30": "5VfatZZfVePrVbjAh793Q1N1GMNeDDAn1tYqwzTfaQLX8D3qnLJxMXwc59rT6wdAX9zGa6RY19Vumpqh1u7MkuEq",
  "key31": "fbY3SfkYZmuhxyMtZpSaeGGVjqGdYRbDzrAfYG1cPMPE24TovJW6U2Z7ZJ8TM65TG5wsvwjU62GVvffNyfJwNdr",
  "key32": "2w1cUzw9rRufEBRXS5TX2KRZPgnyjgAp7Ev69MEFBZRkSmnAhgTAMqT2GfSbohbMoaDhAhb2DufoxzaiLC5V1ijN",
  "key33": "34NNZ7SJgsyfKQAgfwo57VbfJoxr9hokukG2BRypwbYth7t8sYromewYbFMNHZAXfzY7ucoa9dJqxH58yNCGdfED",
  "key34": "2Mxzjw1SJuvgjDktW16vXy4qhxXFiZ2kHCRX5pFq5NhMVeHDvCpqjsZw4TG7bEpP7tMqKW1hZdvr1SJL8KUJa41x"
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
