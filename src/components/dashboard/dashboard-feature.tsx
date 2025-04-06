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
    "28Sus5zF9oLi2rKRWL3t1XiYejh36QDSGTGDTJz55QqQELhmkY7xcA42dJqYwcd3T2T1MfT3hQ3NoMZULFNydryF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4682REoSisrVMdnVNjyQqRPqgf3MdqNt3xmTZna3Uc21dT5J6tEtAbu3uq6SmikTweJTx9nsMrzD1FaZBSNwWXHy",
  "key1": "526dzNEWBuWRqnMsmMj86rpWrnUkXjr4yKuN1vErdgtEYrAee9pkuJFbLpuEn9Mqx3ohUXUfzsNc26HXgKR9h7fg",
  "key2": "2oWbRBommavdrAXfCDBMD2UsaC2HS5ZYUGLhsm3gFZPozRYKpoJSyJdBrzEGAa5FGytBeFnPiAKmEwnZ5ivMrToj",
  "key3": "45zJ1fD2mfA1cSF1gJmsSzVAvWQB7yqcErce9BgR3SPPFXSThPDyrsj96hDcwCysWnGY8q8JsQaGSTqTTfuhUZY",
  "key4": "3suB4fyjvhEf34W3uUrV1CTKuTHGiCBwcj8GZeh9d2xWmtWpX5adikEjsbkFefFDKqwkBCEPSR5QUdfLPUtTUz16",
  "key5": "2VoLK81w1bejvDoYHYfYDCCJLTWYejovquC41i35w3zCHiKk3c5GM71ob82Rn5BkXHVriLyBfyed2GtoEYMKeR7C",
  "key6": "4zyshVsi1m2qLt4AawPkKJzaJnzqB6uQvhj8dNHKmp81QGD6FuGfcbEj9zH46rsodyANNPAj7kByHda8r6DraMqT",
  "key7": "4gsLFNmuvQZ1q69k6TeEuDDYb7fXgNMTZP2s4MFa7dPEFwM4vMc3W7U3icLmJy9JfC7zFJPG8SAGjcJnyHERqAGu",
  "key8": "3o8azvfppS7Z7TF2eHfErpqAjXZ1XhmgMCy13nYyDgE8vxDjnnFYKP9mXMFE2zEx6UarL2mokUsCPKB9g8sqBtet",
  "key9": "2A99bRD7ZnFLbciKesfRc7nmG39sG1xppj4hm82oma5aa7JdVFv33Kj1abA7MjqF4MQzcZqF2bsZQgghYPLsAwg1",
  "key10": "5AXX5RFFN7sKsK6VHoHWa3zDHDWCGXVNTtHJR7kkX155NRXs3j56FAQHMmCF6eA6EW7QDExVh4eVsSdxjFK417xn",
  "key11": "2AvTbsTfzk6dNrvPoVCghyvgqH5jCad29GZvvBr7QB96PwWUYV3KRzkJwVEJKwWEL9b5fM3YkfUAVcxFYrgXJxav",
  "key12": "dYy2aX4mMVSxvQnsfcTFXksshJXPKF2Ep2j9cU7Wqy6Qz5B7gCrsL175pkq6DbNPhPUHsayAEsSibubtdHFjTPm",
  "key13": "3q7zDmH2NUiEWrLep1C9JwrcgsQhJPmaY2Tdh2RFtsVJeWaL7iMvDLvZshn9s6ACVQXaC1BxugsjnEcWfDnx29ks",
  "key14": "VAWhCNcxsvpQ7tprTpo5zBLDmwFwSJBakJVx7QYJEbfxLYnRxnYyEAwQ8n8ZtH9xERqVP2XCHouZ3jPP2diRnR4",
  "key15": "52Cwkqbkg1747pifaWhLNhEywJxsxTqZMHeioya2QzXCAnKnTFuYHYzd2ynyXiNC1Bmnp7ktWrp1cTobHRhR5bNa",
  "key16": "3BR1egnCCqURPNMyCWScypUxZRiMS581NvWchkTrgpapHrvCb47CEvc9mRsPWX3QY7uCym6a8p3K1iXjysB11kvj",
  "key17": "4nTDW6KA6Bf5oo1SjNSQz8Xhy2eNKTm2tm6pSuYdsv42KVCFExjY51NuAVPmKdbkhPSCjVYGLcHS3K7m1tnibVtm",
  "key18": "66KwvbNRTcUTwngUEnE3GtBpVtkMKbTijNhBesDAjw7RFee16erDhYP9EPujiqdiqrbDd7Lxw2bkNh4BMCvmJuXM",
  "key19": "2Hkun43L31PHkQdtpR7uedoPkuNky1khs3dwXRBGLs9oKkdbGS6SFuqAKxXh6bHbCfNbFWoWKExNMZYuWvW2Ngvf",
  "key20": "3CiiP9hipwJd54uhWRjsgRkFuxJAKuuBXxxtoLJ1M7x13w8tL6ChxwaTt76CNWmJQw4uZ98WqWw6MG81ud1L7T9B",
  "key21": "5MQBYTDV4GyxvoYDjrdjAuB2fLqZ6NDvuonH5Eo53SYENDUgRtgSjqcXfQskojwPhZmBJ7VgTKPnntJwDsBRSpif",
  "key22": "4dvqtqeV58o6mC9ZwyuxkhtwiWzBb5AuHGwhuAqQWevN4YhhCXwcyLjS4oXLu6FHyQTnMEXVmeidg9igejF9wDVG",
  "key23": "3YKujELckzZRZsCayJyLnUPha3GTzVAiexzzXEGiuF53Js1kDjrNdLQwXH7Re5KJkj2WCVwyuixrtqJFT8satZZB",
  "key24": "4poUcG7yPFvAJTwHRgUNZGpbvLwX6q1TC4ur9wcTdB3u7mWFKpQtr5K9XbgRibt9WkL3eptqFe8HgQ2Qz7XEypyi",
  "key25": "47cWfoAFFrum4B1BqqcpbYgBxuijFQK472oKkraVMCYTGWJSdiQ8ioQL4VeSG5yQW5C4NEZ2kY4GoAtVgr2qXH5Q",
  "key26": "44A1biAaG5aLmzhdJh2RqnVJyEXnVsWyrHZHxiaaLezJMCNGyuuvq6kTNby4LvR2PRMcH2Yk7F3aJ47MhW6qaNW2",
  "key27": "5wM3ZEvbHnfWYda9piauBME7mv2DrbS4x1fsacY7xoAyNKuruHtcUzYgsKUfVFAboPB2wQhruJ6i5EBRNvVLUwMr"
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
