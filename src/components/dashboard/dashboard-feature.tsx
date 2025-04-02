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
    "4LnrHSfVqHkRaddFx92CctWHTFwwLyQE4Bdt3BMS5Q5oQGXrWVxXVCXccd19RXt2izcXiYnrCFkPRnJbtiwu8AAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S34NmTiVtivdgSbFVRg3dHLF2aoDFcBH26WMbpfccYRDm9hwEyuDiAznB8pvxtA2rdR12gX7FihP2R3zjpufXVS",
  "key1": "3jBtLcBhKoYEJC6f5MPAzJ3151gJjymaKLXmEho8M48tGdKTsL28D5iUEEHZDucxGSguQMXjvvq6tL45gCDphdus",
  "key2": "2Ras2uGiPJQHZFhyLnmHXyzR3XVyNYoS3GeJLyY7fGHMwBzTp1oAswQJPkXhQg1mk74qUHymD8eodx3S7fMNzWqm",
  "key3": "3bWKFZozZetm8e6orhKFttcfw1VbKBJbePyoDPoLM1TdvKT8EGPbbJ9T2NQWMM5RHi5noEwd3XdhcNNX45L2g8n",
  "key4": "2SaaTB8EdyH4ns8FSnwPwG2hPAatn68RZvoswhm8ZqqPcZmn9aUmwD8BL3x4Dsv9htsUybBJ6U2jFcVdmy1sWGzW",
  "key5": "jPc6EvstUyP2JUTtKbiRcaCT5NNwSAyHEsR7BSUc9G5N5Gytv8PL5xt5c3PjCGJYiGs2gkfXSEiRNnR45HWvpND",
  "key6": "2TNSKsnJMMwiybfWGn5UxgkHivMSLNUK8GrnfpytmCFt4JHYubDRqLwoddLi4ZTZPNWMRZAdfsAunCYdBHBBwhAA",
  "key7": "Z9Dkq1oBqie1N4H99Qs9YSHy1RSGfLaUVj9arbLc9Q1Xwrjqi7SeCbkEgpkfUnEfdkPcMMqsdTfR6vjTJA1yUFN",
  "key8": "2gFfB5kwDWXPLBrRqbgfohNstnFm1sTNCzaAQwFg3vapUKnTLe6GJN1cz7vFaSJu6MxXmCgm7XN6375LmM3v2SUa",
  "key9": "5dkXD75dtApKA9VaYVso3mcKbYCbhNnToVZm1f4Nw5bRstC1ado7RSLH64nx2QRTK6hxphmPqBzvycZ5uZNHzE8K",
  "key10": "FKq8ehC4uw2GsfYjQ7wLa5UYrUvtdcPirB8KzbhTFBnb21ue3TQEfMa4QUvr6XjRkEmzDgnWfHUnYnQm523nn87",
  "key11": "5M3QpbV2g3kr4ev92iQgkNeiCH9BKyoGKxmXXrwLNM3bCpWkYL14FQ4EmPJ4rtb8PcZ7DiXxvYKTZAk5LSRm84R2",
  "key12": "6TW37eRyvvuiqaNGqAUEq1SN4FkxkbqfTnwo2PArGbUnSi57vsG6PY6sXHyU9Zz4WmAaSHxF8uutrrxY1bPRbib",
  "key13": "2QWYKYgr84oHCySUqNSwM9JZecct8sUTdiLf5dPiSHx9kt2xYWFLfXqPJwnBhV1V4jWbrdFAnewjumf97ykSUWsY",
  "key14": "3Qap1kWv7UDC3Xmguye3Rx54umNpcP3LSkf5eRdoSmyd8TbhNg3u8eHVY3ptWAYggEfNE3JkP5PzFQezntVE691F",
  "key15": "2cib4q7Jv73kwg8pHx35cvJfKMCHvqaz2aU4dSMkRdPjuRo9i7fMHZks3LobKN6jJu74NgTvF7w2scaWtrYPJicp",
  "key16": "34v6DjTKxiDYSf5BY2Yxf3gyjNkeSXUfTvQJyzp94FvNvTYDbD5gvpYC82Z3uzER5CDSEQT2zt4ao3oM8vmRehCd",
  "key17": "28zt9aPfjejE6ky3N6Dm6LdpfrXUAPgXyxdXZFquW2RbZ7QzS2EHKurnK3xzuFMDrwHHQf51SUPDK63cG6faSrqF",
  "key18": "3knSJGicwSR7KGdrbRQLn36awRTcpnX2qGLaFtoKxXjZHGgFz8Uqkzx5GoGGnaHH9GMy2nn3ryqFGZLMZfFrAGiU",
  "key19": "59tofH9eCxdAAet9QukBJAGW2LNUa4HaXNFeaHZrC3KEdnq3B3abCLC8zTwMb8jSsbvyeKdrAFMZQEDfNBJq8xBJ",
  "key20": "5AbgQ1DviLCS3r2WTGzqXV7tkoTpogbzMdTMsZLCDLrpxcUAgcgXzmUWBuCTcQN71mUtNvt862ChmvvyQxgzWYYW",
  "key21": "3YYuuny3ZCinD7bdKhemDytkZyRwzD3tmgPmPeFVfUkCvF3AdPRYcgSomvtJtTQk2RQbYCtY99hKGhmxQXXL3xGE",
  "key22": "5FxVL5J3dvyrbMT1kn5kn85bwUiZFveke2aZHh89KsTGKwsFqVxbjaZvi39hMVrnSc5CLKyPA1x49VjmEtgHi72r",
  "key23": "3GgeusoJ2QNfdWCTtJiSPrpwg4G88qaXjgdsDTxXsQjvRQSSQKyWSz7BhbPMZJPKut2VSbbS5d4f4hP2wg6wbQdU",
  "key24": "CrMLUBqRLLrh5y6XpG8r9JU6LXggzTbgGtvaKjiGEmCnKztBRQcuPNYh964MVFzfCEgA4WwtoyBCsRpcayx6CsU",
  "key25": "32iPCehNVJLV4RfiKjWh1w3nmM9YrPa1s9Z9UXpwWkGgCFkoaovZwvy1X3n1yDfGnq5gpizNGatkBgPiitVzBq9o",
  "key26": "3zSE4meyuptRn2RVg68n9zdhNHM6DXvTEFdKdYR4zT5BmGwKJGGjMKVao6Fxn665BJQqyqA27jcTUWgUPHUrVpfk",
  "key27": "4y71DLexbmhWPxNmMRLdzSj3khvNCJTr7PZYwNygGrZBb8869j54WuWwBCET92XEq5rDYVNdEaFX5EAVKRwQj3jn",
  "key28": "LJhbyQyeZRSUzhgmz46FR7DznCqKzgG8Nid4F5ApNYxNbyv2g2F5Tr98ryju4eX2XyBnaXrBYqpJeGCho9HgAGU",
  "key29": "4nwugy6LxQmdPTCvFoJfndjdSnLaeHWAs78qraDKe2S5N56ekfE2ZECtTaachnzXypAWNYP6WnxC4fCHAWarhsnx",
  "key30": "2ov6Xa73GLyE4JyXywM5EJxbc7y7ZVpApkKk2j4YFksMiL8Ria11xQzzxBUi6V73ywuEE974QeKLDkCaBfVaQktp",
  "key31": "hGAbbTNdWFHdPHY55QVqjGDpdwmUmZf5pMyzFYjaQTsdTP6u3CrHDzrxJg2E5LrD5vB5o9761SAsZ4aYvMvm48b",
  "key32": "4qT4Gtv4CRAutHoVT2RvF25sAQQy6TtG6dKQdxA91PXhiqRYvXSLqJsz2TD9yKFVoPJjwL6gdRXLuYgGGagyjRU2",
  "key33": "4rP6axqx2okxCCzoMo1KQ3p8at3NnCGB8whYha7XfmCUQyAjfYn62saYjRN8KfDzc9TyPHQxAhJWfY7phKzbpvE1",
  "key34": "2yjkdyL92cv6z27KHNa2wMioYsTpuNgaxNnaGZihy4mz4xmZ8gxKQLG95UkbTTqVNE8kFoRyyYEqvBNYi1YPGbAw",
  "key35": "dFxrGdG8sR9fYDkqPrtYnEfBs9ZeMSdwdZcfewoFybbJGhEGsxSvk61Khv2NrKhS8r2gzCFiXn9kw2Y3UnK52T4",
  "key36": "2dkihEiFDuGSsuMKse2yBdtzqugJwhWn6iNcrxNF9faqszdSzV5Vt4GetGaWfnRgHKYMA6u2Qd8zaMrZoXDZFZwS",
  "key37": "nCf7JGHdw5ftkXC2eNHeASWFbHCaKxECqzDEzPmHgGySkJ4UGkG78vZvrJSDT1JiXdJJdcwPjhg6SEoJmVWsgPb",
  "key38": "3pQcts37sPRF6eYCWPxzvdaBjy78MmfpokC86ZXZwqNQbM3ZznEw31qkUhsbeKkZXDW1u8dVqDsNLN2FnxeXqaBr",
  "key39": "3KebdpgTjJqzP49nK5Ywyykq3E22QGBpE3sCNXgVxjJniSzwFf3EW6MNPD9ms9q7aka4LmSHKV43eP4KRAGRNYxN"
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
