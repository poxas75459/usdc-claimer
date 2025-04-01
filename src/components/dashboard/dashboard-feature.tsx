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
    "3Y3J7fZhavREALX9NC8B8vMSAQWRhHncjdxxGSkx1wEFAPWChh8DnJJKwpUe8oKfAcYCWbGEHhijLX88XKFa8CUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aoveUJm2sWkLijqHTkHvib2U8SvQYczkTYLcFRixouvbSd4YyDBuPa5i7MRCoR1khP5L25tGSqpUBCGMbyYTf5M",
  "key1": "2Jh4vqoxapQdd8HjBMrxHVJTbPLoTvAyewyBthHTkCMnYR7AdWqLnNGcLU9qTgaMJ4pZsYrqnhJCBJ4nEULAjUW5",
  "key2": "Kyq5MDM8Rjp2M9U2f72t9V8F74dJTzEGsCx7tvRNLi5wQkC8wtunmCEGRAFZGbsgBFfnco41BcvDfRZfZWZKGwK",
  "key3": "QtPAkzPQKGjaLC5NXcs4WpDomsrCP9kTVLz8trKcobYXzhsjAUL9rcTSHwdnL962rAMGfk83MPLabwXN1r95Rt4",
  "key4": "3Y1CZUHkBybAVFgMqVKL33K7jo5kKKCSFKhzUm7GB1HBPpwUEDqnW3PJ5NwWG3Kgnhjyqdhg7CRdxNt9uaFDiMQP",
  "key5": "3ujuyansEue5vAWheCxCm21eW6aj3z2nPNe66EZUgyU5yWGcKYXGkx4zNFKfCYvsgwH2u41JiieVTMa38Cuxa65z",
  "key6": "4Xgoh4HzM1QDH8VjThYKHAUVVhTBmzjSNSBXnPnrVshs1EKQzKZDYzZL58yQzoqTQvoiepJo29qrtZy15gN2cT8z",
  "key7": "4VdnCpG1jd1T4yJaE6NPVfEW17eLeSJzbdgP9Ugh9JCjAqpUCzGLfdKNqwpNjHRXHF71iaDsAqZay5YfJwZXrC3t",
  "key8": "5ayQkvL1yW5iZmvY5ZdWoXZhxe5qwqq1ZtjEC2Cc2v9JEVyX3wwb3b2m4szKdr8gLdykQ2mayQdf2AZCuBLCEzsV",
  "key9": "5G8WHxACEQfbTWvcaWYQAR4wedDKYuaZY8N12PcxcTP6AtYfCVvNgo7ML7muDvpnGMGuYGs7AvNRgzyVxQBEv8pq",
  "key10": "2Bah4SFZbdWcWFJXY45rGpsF277DAUazMPPNUTuZke1ZYhPT655UZy83BSoQjwJR7fNHbUKuZeDcW3buHjgmVuH3",
  "key11": "TPGRmz7T6Ae5jZAeficJDk8EDNhqGABwweeC9wHPBctQtqpns4RdBgCBeiddnyA1W6A8N25g8t6vJBqAcpDVDS6",
  "key12": "4aHUJyHg9kupUgKrv16SQ3NqoKjQaAFgmLiRZaDPnURKCPR3oZr47FJJd7thy2rYrPXkKRt44bxoZfRz5jrmDfFR",
  "key13": "336y7KZ2NZGaYKNcp1PsqftMmCbAAroMkFKK9C4M3iqGFnL3LHvm1cRw7yESXKUbtyhQpuZArRxy9ZSNJukHQCRX",
  "key14": "tvcFuwc3BdvG2zbXdh19DVyLC6DzBSgmdX8rF2bm9cUmAkczXsbpXA9LcDmiNtUfQ3vTN75kLvhBx24Mp4UZfo2",
  "key15": "58XXxtD9427YALsecsMQenfyj7kK1jj1Sxj2UeMXPSXZ3uZ3BchN8JFGxjQDtNtAjCP4N8s2ednzffGXHfPBrWwe",
  "key16": "3RP84gx2ESer8k8vCYJHrQL8gT3ze2L3rg3gFxiAMBLTLRQ6NwFpTwbmpUymM682PUhBqeaRjmzGWapeaDswiSXm",
  "key17": "412NnJnH3sM6uD8is28eNiUEo8JTRuafQH3hAZPNB1N9SzX54RCeeZ9CVZ6dsgzutUSPdfKhjAtZWvKwmaWUxLcw",
  "key18": "ZmmxCkE9KNq3Vp1AqGigvrxW3o9DzKAjiv5tvkTLah47Aq7NJb2K943J6zQdZXD3b5bhNwccUeujmmWr7PRZ651",
  "key19": "3NV3ZZWQ8jnwjcH7aP6MZ9FrcWrtraFyPuPehdTjqAqTz2HV2iTaZskotouXUteetuxKS71Dr6LkbWwrv9cYTHTV",
  "key20": "5EDWxPqrqxAcwEgLgw1XKxQZi7devqA7J4tyXDk55183Kx6jc7rZz3jUoFGS7ey3tytujtcoWEwYqDRP3BEKbxn2",
  "key21": "2e5TFUySvLYxYUSB7VhvYAr4N9nYtJpp4PxAxMb4wMQFu8mRhXFz44U3EUWLczbwL9acHHMWQdVyhRxQpP39A7hM",
  "key22": "2f4AcEoPtWQ4mAEay3xpDxDLkCSJ3864hGR9rDsTJSjQx9iogBkJhCgTjFRgoTjwysSQMo8gWMqszvUpQtkejz7F",
  "key23": "4EPfbjkLYTY7X3p5RhL5BC7bYqywVQ4cCdtaKgnRWtUGwYQZZA5Hpm99JuGHyRQ2hSZxnjeoBeygyLaHgPbuMwqJ",
  "key24": "4ewwsnB4X2G7sCRtPwUBxX16G34RnLMxLDcJ3KRoQPwtmXS13irhUdh1SbDue55iv6LiaMwbNHErcvXV3nNjiZXY",
  "key25": "2GvS97HDnpweFY95uhsEzft3gpK9wSgzyQ9vpU7YqQGgRAbg28d4QFFEAyW7Y25d75MnYzHe3f8cxEKdZNqA7Bp3",
  "key26": "5uA4z8rCoo9FR17s8avf9FKEqVJkv1TuwgGG62PYfxybadxMhFSzrGCmSKpgn1WzE76cYXC2WDVcxRa3uX1FkZbK",
  "key27": "2uDUDPKawBjswtCe5grLYqkJJxKLLzCcnhmGp2tby3Zg1Gt9ipCqzqR9FjbrHW6of4qRbgL7qonnBnAsoqY7M46t",
  "key28": "2viAMcr2VZ3NNXU6CTS7nx8EiCBbRUUqeCjtTEiV5JNUXoRwb7ju1bjUFb2cpGepBSgaqxvYnsJUEVAMynB42Pgh",
  "key29": "5tGSMrZW1mEg79mejEWZdwhpm7AaHmZCxvbpzUvf5JqGWKw69SvfEwyzS8VffbyuRrvFNNXreQJyb9xqc58VCVek",
  "key30": "5JZE6qdbAtYApnL6eHAqNrNB2qZgij5s7MYFiJ1hiXQDkkRJ7gXxDzXYfwjHiuczKp4KgHx8RsG7txa1udWCjsX2",
  "key31": "45nVKvrT4UYSJYPr63mVdPRga6yHhW34GnC2AtYGGhctvSgJoXwJKXyH4WSeT3ozWAs8SmPmi5fs8vSvwEmGZ92d",
  "key32": "YXJVqnqgeAcjiia8yx2XJKvcz6BabaLicRGJbbyXmL6BPZdbcuepgeW2TEkNsSE3HGQXVNfgjMH3R5KVDpMyj3H",
  "key33": "ur5bPzbJ43XDhc3Fu8gYMmXpsrkJ9oDDggPkFAAw2h9QW9Nrd7gtVTNvKzoTo4ym6fBBCVMUs1MoCM4Jhr5Z8yo",
  "key34": "2mzPNkL3bTrLgyJyyZ85i6gEKnbeY5g1hrockW5Xsjic3XGMyDe6wuB7nVLQxtfJH4RxsfbeH3idnEqXbNDEEvdy",
  "key35": "fo29MG4gDCq6LFKDJptEHvf8YFHc6zLHR5dHAdjwbWW3KFAkgVD26TA4bHqfkxycARcZGZLrAL2RcWgqRsFEjyU",
  "key36": "5panjSBpJs7ybWDm6yeymYQNvgJhQk1zkycL4C53HeuSmAk6e5HbBSff9fhxHMpwk4qP9Xo24wGCtfXFJksuKR7G",
  "key37": "2zynRmnWurEpZwSKpieg1iX2KrgbXW2nBdaYCBczMzk186Cr8bGreDev5EiW28Vjq4MkGg1V31nQ5BX1Kzw4FPvB",
  "key38": "2qWBHAFQt11h6dHtDT22JwJKd5CcHq4TMoAsoJjyfvRLxBAkNiyU7VdF8yAftKVV83CcvaszBaXnBdYbcCAWHiMu",
  "key39": "5pC649KcjTjZF3KeiTsVkX9BGAkiRZyBGqGywT9h4Q7UKkQNfALMhS4WjJZgnyjd14dznbcLCjrsVHKCgMgVaRfH",
  "key40": "3jsruC3CDhXhhMY7J9xrVQW6AcUfE5NynZk3EBv82rPmQiBDNcV7C8gRfzgdtiL4SwUFHo6UV1d1mEchujPijQSJ",
  "key41": "4cD5Z9ETbYeHxVmNPnWWMz3K425L6vPS2VRfA9Stg16zWGwNgArdB2Txfg7WuFCu18qnnvBzEUnaBrPAnfPhqdUi",
  "key42": "Gt79DZ2GnNzjNsrxdu1BDTzxqHY3BRBMbSEzjtuogxHPHwewPRfijzNnsWiU7MaQM1RddZHCZWavAUFMu3JwgjV",
  "key43": "4sAiW8jtffdQwNMaWdVPVtrxVQvoAjk3ixc7bTNe7Bibdn3Y2AevaaGJCzvYJu55yZTNBF8X97DzRxwjRqh32ywY",
  "key44": "2pwi1xNvKGEiHFRkTDV4CmJ27beUgyhmxb1LjCMQcjGydVQ5MuEuywbop7iGfXsp2GENqRiFAzpj7FLLcYA1a2C4",
  "key45": "5zFs5NF9ChQy1yL6kJ7XB6PFhgXUDeCm2xta92g8G166FBRZ3dGBHD1MnAwrVKZr5Ff72m9xxY5m82wVw6A6z18Q",
  "key46": "D6cMRGkKuVD7B1sGhYsAVKBiUNKYDW3rWLz98g74GmRLyRufmEam2njkqe87L8tBMEGDB4qQFCELwRLrQ3MvFAA"
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
