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
    "4m5s7XXw8wJPCYniHCRGHaCgyHBHKN2khiWe1rqAJ2PygXRuBQuA3eLJ2j54WHs64yUPksurnwsTC4p37eF7qreA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vK2jmkwFStjbt7Yteg7BfXm7EaYEcMEuDSt1f9Kxj546phRzBwL667mqBboHT1zrgGE4og1Q7shHL2jdzQaBUqX",
  "key1": "5BxQVD7bTnpdiVGMWhDabXDLZLhxU8Km8rf5jAwZTj7AguD3szEfftRJR95Q6AKbbSqoVDkaGo1jr3SF9XQggtrv",
  "key2": "K7EG6ykc3FawGnzm9D5CCiAypqgZtdBeRQhm7bjeJ4yyQeFPQVUCvZWWSNAJ69a1bvZF9nezuyVVvQ6jdgvM1LU",
  "key3": "Kt9NES7vhy6tdU8vPd54TVqUTjuhEqgWhznoA9YZQ73yhFEZW51dSCCvywKbJVQ4x7xexgPkpBArFp3HeeR2FBk",
  "key4": "227bycbrHEpq2ruswU6BdhjcQEqQWQayKU5h77bRtjXqfzZbVZRyVYL2DoM89zoJd9SYxCXa4SE1T3Qw6vL938it",
  "key5": "5qTfFxDhRkbKgMVgaFQXBsTya6m3vom2v1mA7RkkNJyfrXie72xux9gMkPrSAiEBZkA7SLtJTdWrn4QSfBzTDAHS",
  "key6": "4y6rxxsvej6CBLvrWXZ6hntdEks99hUkbS9Fz54Urv6hAvNUWMq8FfgM43bt7s4fsAhzhv1SFWipEdkHjs7Lc9kC",
  "key7": "HgcbhaLWMzznTwXEPL3PUTTKsbqutH1iMLaWN1pMMgmpj1NVjYcA781WLDEGSge9mH3ZvkLgf19DHnKNKnQCMAn",
  "key8": "3vwKEVfVgfuAYuokegvxyMqQLCeHbDMAavSD6gpk73UJbv6SJtKHF9g1WH5t2EeRZcF8KFyZdDbhiJof8mbVqxUP",
  "key9": "5kbRYXGwrVbP93wuc8xJwamG9TpNNaLmAmn8nKS6tt3Atd3qixqJuL5VBXVhwPGpBWnJJrYehxYTMSmdwpdkpGzZ",
  "key10": "kTxHr7ZbePiV6AWs7HCfcRnjLdwJiZtFiDHMBERGykhEyoucPaPXFMvkuQ6rC6Kx8E6hvNReaLAyMU6XwftKmfr",
  "key11": "o4pYTjr8FtqFQ5Nq4Fxswv6CHoc5TApaW7Q4xKeUDhim1Edi1Tq6377F9bb59h5GQztQRmzkWW9EWdeY7sFqehN",
  "key12": "5Uv9PVNw6MPJ75YbMWpY25Hybtg3LLW1MTaRvk71XygJPpRjY4CAt63aTGTEu9i3tAV5mv8g54xFvTMSXVVuXAVk",
  "key13": "3RQ7Bs1PqbLReLbuCmdACzrDdkfgwdv6jujRafJuAJdjjjiTd2BdnpH7d2eYPrQJDkoyZaCQwsH1UGQaWFRvfydf",
  "key14": "2AgLYaYMa8UEhoQDYsLfo6BRKGcuQ4Ac5tx4fp3HT1Zcsx7YdARdGuTmJifYveR53PxQA8a1M1vVc4Q59AN8gVte",
  "key15": "3pVNbg9Zy59uW7WnoXfNLzFfrga2HMejscBJDBhkM2RgZ2wqVyBx1dEZm2AjSrLV8hsiMepsueRha7jP2c5h1Eqd",
  "key16": "2VPEHevKNZN7KyQtBRp9BT49Bg3YzzMcLNKHKEhwGY8EqU7knx3ogdAgwiHP6cJfBweCeUc1o43WPgTgSSrUwrTF",
  "key17": "p5kUg9UypZoaJRGcGox8G18t5eTbgUCGoUw26MSUsJymENrihkSjc3d8aqBrfm3vpv4e4KLuorpn5k8a2S94xS7",
  "key18": "5q1wmiV4zEvJ74DVCHfFjB2jiFPWPqKg48agRNg7wQvUg1bF9HjBjAVbJZyaqhC6ThLLxW4S8s6KdisdwyqEMkDP",
  "key19": "3pfcvEMJ3UDu8szvpEcFbgH1SoWss2pi4wPkkvH9WRstAYmyqJB3RM5mq9F123L2DMPTXdpWwprHHazC8L89DsGW",
  "key20": "61MxmxTdZayh8WGcJNvRWc6dbdZhXNPNs1ph8EKLdBd1dhaiDQ4zshafbKZsETS9dNfeyebRbeeLrvTz46sgx44Y",
  "key21": "FAFdopShSwXMMuKMNn46ah33pSaJrTxkSHDqj4yyUcvuDGu8SPnMegZj5WqwixbkJbhVfrorNhzSmsHd1YSiuYz",
  "key22": "3cHpPLTFNFBiYZBkjpCScAwt2UjS7Ts9XSeArpHE4QzibW9t3Qd8gYkUDKxwZou867hNunwBQweybggDZPwXhT7B",
  "key23": "3GnE1pYg4KpmPXmPJtTCBnmzKn48sjDxmfZw1HBbPkaRWEcp1PvEaA6tv5YTgpAQE9XASdoJu98CkdU8WWUo7knH",
  "key24": "4HwhErYaRNZ75Ud3SakPDVMqkWpLeeNX2vsud9GvEQFWhA7Uc6riks6AkjAXU41zSnsBTu6dEXnk3B5qrxePr7MH",
  "key25": "3mkSZxM5So3CvypVUQAMqVcXPLbKGoEDvGEXtPiGTcRLduFCEde77B1PL79NF1DD4L5kv1k8ugBPM26K6kkzcXf1",
  "key26": "5Qq9mhChhhS3Ex2G3nwzVYT4gvXRXgTkEUrGuJBBcun55xQiW9acTGEd47HaUUa67HgyUAK8vMiiQoemAb5LxsBH",
  "key27": "1dKpusW2RTxwx6RyUxWPbrFrbi2kYY9jKzPFu31a2UjcgmhaVEMwP1Q8ZRtEmViTseZSnkASZogmVB8chwZZFoM",
  "key28": "zJ2YdjcQMRS9484DBRSDESX9ZdsAvTgK5oH2gs9KbidMxnEgkZJZtYzA2niqQAMz14s4kt8aaxZSUgJSQaMu5XF",
  "key29": "546RDGbXDardm43ERprSrtpZ4CBjFb7TzecyvHrmWSxWYXVU91MqM4GwjDoiZ47DiMuVb5mqm6MwCwu7dS7yNJG9",
  "key30": "3CmzRHW3hycmnxW32JUEZCsSLizHYQXPnYGac9hH5DwfrzPMAi1r4zqn8jB3PAmLo4oqcEktNAfhq3QRcQZRDZ96"
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
