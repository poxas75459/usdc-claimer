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
    "4QiNToPmWU9AjSQXeTJaeU8cHoKqpc28SYUwnn6YTYjxpvZmT2kTadE1vqSeSnFFt7Go8Dq2daP6C4Qg9FJugZof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kUm6qnisog4T784DDhXFDN5gq1x6MmSj34bwqzcm8c7imvWfQ7dX4fuAmYmFrro8FVNpCWmx8T8xgPruFdTad7",
  "key1": "2BbGkYrY2xdyM6WzwRpcKue7b1aKeS6KwRJso91qM5oQkFKtSKjeMCve3mfS6M9Ts3GahxUbt8f9yhy6t2AoYLHT",
  "key2": "6XdhtgnzfvkBRupHnxkoWBEs4dksqqE9AgtB2UuXR2cnpeDrodRfTmS4UeqXHUPJ9CSvykB46YpEwcRLoigMQsV",
  "key3": "5WRc4Ztg1Z1me1mq2tQabXR5bRF3K5C4JSAbnLGSqyRNT78MHjD28Y5dsiYCn42m5xrAzh5Pwz6zmEbntvmFLw5i",
  "key4": "5ziBvWxSqYuWrN4M34kjGSRxFd4cez6nCMYtFHkeHgrXhK3FSYeqAg5rPZDnaWw2qdV6PqJeEBZqbie4qnSLtKUz",
  "key5": "zYqannw3GhiM59MX4WwYLXq79eeR2KtVHroMYwStJE2T5u5moKafsaCYqq4VigmF6C5moFAqoSUjku2Uuo2Fh19",
  "key6": "2GUugZHZF63LL6hWyJfwQ6gzDL4Xb7eRatczhoxQBCE49AGJP94BJRGmH6uD7NEJHwPwvHM3VukFoL1eDNHmEmWv",
  "key7": "5tgEvjJB9fzVQz9jLyq5xyo9yFkmGsqAtkRUD232mkDdAwv9sf8s4VzNjMorZKjjgpWFPF9fmobBnxXNhbvgbqBv",
  "key8": "2a1wLEXsbRthfQ3W7ueHi5Ptwj4E1Zf3fJ1HHHgKX5KQWopd7pJ9hPo2uaPjg1VSGPn1rX7WRx1cvZZTEGHHthPf",
  "key9": "3EmSxBPywbetSfMUz44VFXoVPx7hUSYKYEi62iWi8gXamLcZAAfoBaNn6n3vZVqoy3XBf7DsEfCrevKqmW7avHoY",
  "key10": "4SW2tj1c1WCSszDELRaSfLWvRjXLqpwB7JynvBG7ZQwXNL92gDvhgeua2scf9unxqbDnob7nE61Z86yTazs5Hb93",
  "key11": "4gS8F2wDfZkmhqo4UE6LqSyXFatdNKBQsFLjHBzpkqekBt5jsvbBeTseZBwhCJWhT5WWRZXDmzKG5rwpvqs22xxo",
  "key12": "2XsBTdHCsxueUmLwxd5DPtgdqw97zZTumMPX183KQSbT9dVwsEobkM2FW3y5s5kKr4CaATQ9kADxZmQWrk6NfBTu",
  "key13": "3H1LvGFzrBpcFP6TDfuL5pHxquhimuyTz4Sck1zjho7ZU9wPspt36urYN1kA8EoC4RffarTZ3uv2bwtNcCTXXSwR",
  "key14": "5He9TbSfdiv8czXr1C8KXatp9isTQzJS8ViwF1UYUtp1KMADXYT9ZVF3ksZYxXv88ss7eZjEzRxkzf9V5EX2UXAr",
  "key15": "2MvhJhMD4cE33VWwo72coUyLozz72WTDwKGMExbmeNBQm5P64s5QfcuLFjDvdRnY4cu68T1HhvgnL3FHWgoPLsVB",
  "key16": "64c9AN9mFxn4yiAJ6WsZVRZCBYDhkdJv6p5MgG6Mr7jvJvq77QMVjcNdzXtYpMwKZSoi915pAddjNatuCQ7wNBhb",
  "key17": "4SaYoeMUh4oUMNM1D2JF8fWY63G6AKDuXxyKX9FoSZAgTN2KWrxysmy7sCKVTaavAKaoAUQBpF1EPk6jUVVLaAfp",
  "key18": "5KtZodj8ay4BAHkTsvS4QMwabPMGieZikAbRanZfU9W59sAUNZfjFAQCQnqRqTiFXmtXcAp83eFiNS9DbMKkSGjJ",
  "key19": "2Eas9XqoF3XUuv6n6dYnsc27FSLtYkJge8a13H5Tresk4uThswkRWkUJiFmwHsggs3yS7LE43uXBVgQ6yTZCJVpU",
  "key20": "3M4spX1UVskHJn2C2ZQ6dW4G7AfkbhqyVQny5tQe3BxBQ1qSUdrzzhr513kfQ939iq6H74iSdRMvhcxbc5ryQSC5",
  "key21": "5EwqNMvKGrCTFRGMhQMyCsDrVrKsfVb59i5w9dtgkQRMN31g68S8xBpm9EdsmZpPSbQqx5QbTyttZk8XJoEGRMbD",
  "key22": "3F6cdBfzve26LEFcsCW5oZdkB8LCuAJLBHDRAwKPjV6Ja4zCxkna96vNLHPiPNqygJ8sYK2vEnX7rFy29joHs8uw",
  "key23": "kvwAmZQDBdJPExP4wwmwm8XJLUJs2ZbzuTMEMc8dMEbqCUVCzgR3BdxTpchksFitZh56fD2HaLNX5GPbJrhUHLB",
  "key24": "2WuUTJ5XUpemd4JoYyTYmteR5fX7RxxyCa4rPDautFmfogyRX68yJfKyKFpmbwoZ9dCJ12NqWJi9WxXFZBVW4zjf",
  "key25": "3wwLN9ghocCKB6GAygr8Mf7Kcf8DBNLdovxZnidwcafEXi7REpFGEXqoivqJ6rioCij75fN67EVAtBkux528xXRL",
  "key26": "583STBNxdTJmfqtyWn3Ue2zKfzeK7qgY6SdCXr3NLLKurM9SZap9ehve67mTiiTkaM8Ev7pBkfXk475a6wAFqSv",
  "key27": "2wXtJLhx9D6dZiW11KjuAEPzsqqCb6qkaZ9s5RWSMGQjp47M8zZKkVJqW3GEzafa2jzFLi5enqTesyt6nzCiCGNE",
  "key28": "3kdm1G1Vy3mfT4UEBHjuTm13JVq65Sr8nQCutj6hfdttGfCfVdFbdqi77R2748aC2sg2TsoDjPL9pyrLbxNFQiTk",
  "key29": "uJdk2nw5UjbrtkjLGTY39Z6PPDj9BVLxWG6rA13eUmXEDdpnnG9RvVUmWNBLHGpDD8fWJ1xHUee8bEydPR8ckze",
  "key30": "UGkfbSvTBZp5BbHEwFHT3LXwHpAoHmEJznucAoBvg29y9Q4aMnWap7DX7o5fuEHq16GLMLn1fgc7S7Px3QjeER1"
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
