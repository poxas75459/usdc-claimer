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
    "4odWTj1Ng61yxPm7x7aHXdt3jhDiWqM5pW4XPfKLY66XGtYJyafLmnHzzFCLngnh3ppXep9M3oJTsnXHutfaVgWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBuV1DGXyTDdEgi1vqecbj6nNvunpMYF4TysToWHa7yViKE4KHwf5kQwDegG2peeLFDjExF2Crbx4zZ1XjWr1bQ",
  "key1": "4dioBfDfHATNVaoYm6E7JGrATfHp2NFe2bmb4G8SGZqvwWv4i6FG446VsfJP1c9r1kJHmMxpHb9ZWZwrokB2qTf1",
  "key2": "4mZCBPpkyWxWzgaLV1XRQm2fJDHUZNq92vDwEkyFJKDk6XeNQdws8nVFwZB3WQ3wr1Ue83Y32NVLfSQnntmLK4WN",
  "key3": "4tqP8twL8aSCyNtpKG3gpW6WonbP5Ktqi4MMBtACbHqPYdqUFcmnadpmHwtNU4biX7Kc8S1cBgg2Se7a61t3JJF4",
  "key4": "ZDr4phoTGRmbZxmtJ6VmfgSMp5vjZoWWj6XiAaru9eu99H44nohtBhM3hBi4jm1QL8S7cropx51tGabrGMx8AfF",
  "key5": "4kmSJG8uq2GM7tm19MeN5GQYM2dUyKFYjKJpV93hTEMuAXLKpqJpR6vxeHn6DD1L4GJc173M9uBJ9cLKUdCtu3Lr",
  "key6": "66JsE8gog4yLHq7iEMKg2UGR3vTVnVDbAf3JwxodYVduXwVxKr6Wztzpwc97xapXodmnuDYTVR2ygAA2D6677vpq",
  "key7": "36qSkhXDFsd1m9Egi97UwWDuNFtSoGZEbnEFCNMZ1KZyJJ6MHdqBanKZfk79AW7M5ZQaPzqiKfHFy8aMB1yxUepQ",
  "key8": "4riuTHhjGjmNWf7vfhfZUidMcdhLr55bsyyPYHSDx2pm5qDiYiYFtQDtgzrxVayFZxaKaHHxGWyQ2huXE1yP51v2",
  "key9": "9NGNeMgGKt361mkRcLRWVfhZuSheBzFMiHo1QPi2rE1E7hv3T6kYkVL7E1aqqUSZsf1UEmQCWMog6D3u3rfjhG6",
  "key10": "3bMxrNSnLodY4ucFh6CznWFBLmYC2Tv9pFR1LU7MEp5Qta9M6v334GRZWTmBJVg8YqrmuEzuHykiDSo33MhTA14",
  "key11": "22SK3R5fHjyYZ58L97AWRPzVuGK66huYenTvZnNgZQkzQ5ScCGjPRZvxEMUtv8cXb4sTf6QarwMNdCV9JyHYmzjP",
  "key12": "Gj9LGCqqc5Zo18WAGpTHFtphGyr4vC1t8hdy82DKEBvRKy7RhimmsF55E3q91Sts5mJJJQ5FEPXnCicuNGSsrGK",
  "key13": "BdTvSZ6XF37betsLQkggABQ8V3s4B2ZLexRibmbnbQ24D5LuHuCsg4X9Cmc1KCyxUzJFpf7GNTe4QZTmz7CJcRB",
  "key14": "3aCgbRCMNJRRJmAmfzqMXvPzbJdMs3y9YhoVFNT28WeTxSDj7NNcrJrrLQqbTbfuDWTWL4qHZD1rXtW1eHhJFe4w",
  "key15": "3wGrCew6mrHXEXCMLxV3iTgFRYG8Sqc3znXsgUdy9B7BqobXyjUhoGXgnnwxsCXQM9vprqLCKG3DTLzWE9n3aUTb",
  "key16": "3weXposAeHjbfvmANfHQFwwzbXYVCHD4hYRr1zmWGct8ACNPs63LUQg7h6vcMYoFa78SfWWTk1q6KzCdcCYj5TaG",
  "key17": "4fAUGQ6eD3cwjQsSHigkjH87nTgkKjdRBaPdYoy7f3zXBXruSMnF7UiDT8pnoPtNNcC71qnxsTzhjULphCVNHxPo",
  "key18": "2px9bnmtSxKVDMcmpZotpz7pAjQgZcskYSrsPEgajU1btZJSMa5Rhk4CdPXGzKAyykwWqnpq8TLYg319HWWWNoso",
  "key19": "cmJNrbZjdK1PoJWC58X7U8B7RwvUs4pjajxXcjzbP5mi2rw5cuKcr21SRsf7yT7vruzMHANa1B8V2QmB7eSWHVM",
  "key20": "27JBsLDU9U7F8cWu4n1WWLLzpbfkBR53RWNK5kZapYKZWcPzTuW1jSBhBhnwDuCcZejyvmJycGbUesB5A4R5Hrwg",
  "key21": "4EAcViLeH4c8j3cdGrZMQUBPtF38mkqup3RCJNA7dmBQc8L6vu5qratgou5ffNpcgRjNtvVnTog1ZkqQpY8ErC6M",
  "key22": "3qEuuYtu2ykTWLBSjUrdo4ZvHBPRD9FhHF9CFspBSo83MGHbBVLHFyTuYtpvd6MrLa6rkQhsuZxmitYMiMmtnG3V",
  "key23": "ZQpFMcrBrnXwFCzcAEjWfS1Z9Tqm2P87i9kmGdqbsvRhUqyRqW69oTHrA1zfvY4rECq9GZNrJU62ewoRHyE9W2W",
  "key24": "cBgCzeuySD14BM65qz3FSf37moh3qNLbiMm9B55ACmkq6rWQVzjPGgdqHJ5QMBaQMYXo3u31UfRwxMegJF8ZwRr",
  "key25": "4HWJXUhjYycNer6QQyvg1DhYheWudAN2x2PA4MY6fiCgowd1wHfDPRb9AAuaqG1ZENxcKa8ZxLBXxztoizqQE9L9",
  "key26": "5Hf6ga3NcSfFvq66hxHg9zvWci6Kb2qMFBTXKfir9ias6SpyXkzRHEx9iV7dfLE1EYajzpN544xpwKTd2rcc1mSv",
  "key27": "34KFdGDQ1XNGkAi6uotayzqtdpRMaJXkQ1phiNQJAAH3kJqEp2gmu4wB5kWSmUFhPcMbwnUCXrWU4tD4y9CHFr5c",
  "key28": "2VLCPP3XGo7Vd8Hb99yitSGceEauZAg3EUciMJuoJRfYd693Xt7bmbQ7QSxx9zwmxivHAg7eugwwF3zVAzosdg7R",
  "key29": "2JkFgmKtjkeKT7xtdSN8oJNC3soW6BW1C6EXeRhaMwmaayp6MNnQ25xB8hznKPtPmtobUzbGftAZ94nwXbnQsxvU",
  "key30": "PZtQcZr7jx5KpNHKfAKrHLAdkzmxEEM3cxBhUdYHCL1EKrQQ2FfUJG9bRPLTkxxg4t4mppYFaC7PW6uGSpA34Vx",
  "key31": "5a2cqaNPnZSeaDrUTuuMVyh73DQS8WTvL7BmgEY2m2US7AVyygnmWnDDtof4kvUtQ6YNwayjGBn7XVPX6nsKsEfF",
  "key32": "5g2mwVAjr3kCpGzF3TXkQ3AQHRVgHduG7h6WQyEkJaMMqqrx4NbEx9uicRvopaphSTtmmtxk21zPtmDAUYZ9HDDk",
  "key33": "5ks1AypBEAWNxRkpmnaCGFXh2vWduJG2eSCmuspXzHP9NBUWCewB4n6JdumSfKhaHPi7Yy6K5nZ9P7xy7QexjaP4",
  "key34": "3FpLCR3tHyurH2BhVbGabC7UbUeWfKvaEWe6P7h73auSR2hhXu4H1pAXsTDrwoahgvdKUkswQJFLt6gBCEidHqpM",
  "key35": "2brKxhX7cYNtDf8EPr5jQfPpBxWBsPc5iS51xuzv2u57FFd2nTjPsnCgu3YREqS65i6HqPH1Kh9RjbU8mMjz3TYC",
  "key36": "4NbE3Yuig6mLuvYhvnbGcMHpTvyAB1YfCHEEQn2wDFTCTxHosHUR7BHdjeSvNdig7DnPBhN8CTwEMPbMfzGqPWRH",
  "key37": "1g3i2odcRfysKF1cknJQBy6jzZTXS7pvQgj3AmdhmBrrXonVJ2b6B9ap4ia5xTRdk69BppzNg8iNtymo9GKYxbd"
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
