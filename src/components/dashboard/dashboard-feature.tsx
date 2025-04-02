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
    "45FmLsRVdAVrctoXSQDYAb2JurqEfYCVHAt6LycxvQo2dhuLHkajLKJzZJTPgsLWz58E7q41GMSif2Ghr4fAgtkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LzfTmrFtGjt6KgaAwBpi9ePnQiYAGFMf9zdqwcaodw53nkUNf7jJ2QyD3cr3nGUwVkFYo6vK2GUqSAj2cVwSnq2",
  "key1": "4UKH6ecbAHpMNcHBTB4s8byoRfekNQJ32C3Ukcke5Qop9WhUdhw9AN8Zpg2XrfJkm6WxtvtGiDpK2884m4skynnW",
  "key2": "2P4bvzqkynp8dSR6bmmd96UXTNLpR21e5s9v2rN9TRBW8SDP8aDu8f3utxRkuiAzfcFVv3a3nnCWDHggrCNH14RQ",
  "key3": "Svw7CkW8pZFEP5yWyHkUpPErYemiRNekrvE5UtmBgJMbMFnXvthFW6GR5iZnkx6dvJGuYxwhNkTCN2KjPhbiJsc",
  "key4": "2pQCxcJNuzc89gn8UsLRZ5JKggcBBwoZwXaEdK15Cyn6etsfFjsVSBpKBsFzCQrTyRhgoSB2cHhCUxuM9WKc5cWa",
  "key5": "3FtEycTuGCGWB873E3JCncLiEGMQsu37RmBh5Vojnzaic6GJJ7aZ6qBqYqY5MdGBqp6iTRGdd3U5sZqDkH1zAbWg",
  "key6": "5vcNZEieWAcCib6ovgEiGUqFvzYB78hrqsdowijy8WFfhWZCgANQGhxxCrWj7EKXJaLcZunCbcw39Vm2HTa7DJg6",
  "key7": "3SAgP6jL83tv7GTuLUp582zzPDgZH1WYZrCs5ALh7Lm9PK24u6meVu1cqSENjiPprWFqMmRqNRE8DTEDBX3Q7V7t",
  "key8": "4kYCdC4xsnthqDKWJANYj45NMgHCJ4DNBsarCpt7egJQxbS3mVBoio2dp11tBHDUaJWhfAeBh3KjVwxazGzwL57U",
  "key9": "Q9zRj4ZEoPqvPTQzVCmPT1Cn5YxhMK1YyyT4fEN66St4BD7kW6crvdYo8PA27TsV7PPQaPKqJLVsD5ATtiYNEWg",
  "key10": "5hukcgWcKbgnF3KBoBx3NU9Mb1dRqB7moZLhzujUMEEJMwkk31ugjrKneCrGCA4v8KxPxx1ayyQjARxYQwpXS8pV",
  "key11": "3tdFwd66tZ6cSUZAqCuxiSRUKYUSi9fHrBZjBakBHTmvWpS2N4UZhUNenQ9PRQfZGWQwmQwMFrv4Rv5LD7LpWBrg",
  "key12": "4cw8y4QcdVg8JZCmp2cV2YVes3q9aStmuuwvUMrC1CLERCE8XaeLza5w5j79dkoc2L7ZnassJbwrqWZofCCh4eoB",
  "key13": "TnMrVVtZcK2AbKtWF3KzuCSa8wMDgEhLgLhik2FG3hxi7XjtiLNZNydhLQZFCubkwXkzTnyRYo1h18PpiGdHpCL",
  "key14": "4EfL7juiodegecWhXuao8yniEvA7X9BF8KYZAAGSzbCMzzVCPdYZ8zbJTV8hdHpRrxZh3EfS4cRkef3LYxZUyrRA",
  "key15": "5xizg9HtNajjfwjcPfm3s23fxaWshngcpV4LJPJtvX3C7W7BcQpt2xhGmE5dcLZrGmfVcYwFzwaQZuUM2qoqF2Sw",
  "key16": "3wPyG5F2AYiRwWq7jfV2rgRttREEg4D1URqPxYb7y7DMJEejg95pz6k7SKFTZYQxkJsyiwKSpZKRAaFm2YFUjeQ2",
  "key17": "3R4abkpMHzkrkppeXNFmNFD8a1vZXahdAdijcveRjpMT3KNsnz9JxdKTco3Z18xDmQjD5XxdpLyuer9SE1BjPm8X",
  "key18": "4cnue6XeajQ2kpfipf773SG6v5icebikksiu2TnHLzbavprf1SiwJA8GfQZiP8KFAQkSe6Q4ULdnyyQV2BQ3yAws",
  "key19": "4wAPk14m27ptA2h7THSzdd22vU48TtKKbwiWVioztnVqd7DDodE77iSD7x8cqAP37W5751Te83umvvXx7xq8SS6c",
  "key20": "4dGNfEFaTfLYeDZamQS1gLjgAjgZwrngndcbcbr9Nvcq2hsPpQfS6u6DDuLMDmZFYRD4UP6b7V6ZnQgtrhTJdTwB",
  "key21": "2o3qsCbXtDxghivxaPP2MmKL4tKMNJkbMqGeriYR213ZqMpHyZhi4vuz14ixKYGtMnpx5qvgLZnTpp4PeU2QgfA3",
  "key22": "35sHFB1aNXvFyyiKJCKyYq81jaCRe1wVKiM8z43B2kT9egSNjHyikWgUBAvmc7rwGUxWM6yiZU6Mrvn6KR5AEoRT",
  "key23": "5nL1keE59iEcXrTrzxQUSrmyK31TFqBahsikMUACZiiSW3MFVdvG5ejc17q19mE7mkboQZ8giLkP1ZJ1hj3zKN1R",
  "key24": "2TBsgxErSeYLChYjQjj8gzLLqk92DnUm5GjQQR73v3vsnwi49bkzkT8UNEZXnqBmopJU7UE1UYKjCuVCy3W5m4HY",
  "key25": "5zUMqehyjuh6zuogvmu2chMkpE6qsNVTdCSgTnVRsppXtqB7k9fbu6hroLh9wieYhyVVHoscP9fm7Mwj4n2MQqk8",
  "key26": "5ajfWXCPyFwHmcbJYpLifwAKVHc2hjeCof3aVKegzXQPjUUaymPzhkj9EwsdjHfiTSE2mGrpte13b4SDvgiwo735",
  "key27": "525vpWi9Yz1M7D8fLAa8KiS75NE6fKowFP3rSCKhGS5nXEESwmfNc5yRkcFzQQG1pZyRLRmcVR4t97kbVrGCriMB",
  "key28": "3A7c9oa9kxApaCdRXuiuPqdp9fbgF4bZSmMKYQohC5FQxoi8Ye9iCs5NbQSS53SauSfgTupCJr2rdJF7xjgit341",
  "key29": "4zn1Difbizi29r7o48U49ohpHmd5FVa8yS64C33NMJFZyUcA1RA9BAhXGtEvxqPFSY22AXLMAheg6CfHCGZ9FcBL",
  "key30": "3rj9iMUVmf1g6pk2HDMthhesYftDZc1E98DfXME7TuhLYVF8rLjwQgB4EdRoFZYRc5gAu5nAiuUmhLMdDhqXTL63",
  "key31": "utP5u2KA8nErqEfJe9FLoWeNtwF8QZy9UsaGxPC4RE2htcr47UHKhKh1GVZugswpTuumtnUmX4bat1vB9Y6Y6q4",
  "key32": "5XgrnnmqhXPdfZdEhaoq15FhkyKjtWsozxTYtXLekBEW6rBDZETgEDoY6MrxLRijNQ6Bw4HuAy1ANuAcw5CYRoPf",
  "key33": "4ch5yiE2ft3fUKBVLxRWxiYbwY6x8N65V3eiskbfeXBtSPkUNadiLeeg1STmJ2ANF5zqnW3rM9owkgV4zbQEefJM",
  "key34": "yJxAFREyjivFbP26hnQ7WbkPxAfwdc45bHLygsjAV9R8SR4NUQcPBvTyQ9MGQT2ovr1MVq3oxGP1GZPgawQsnje",
  "key35": "3mUzwPEW4PXnBx5XGrZ4mjNa9VJ3P1X2tEdyb96pS1pja9ohbYbSyRXTiQvcJKTQbCZBDSajmVw5USKCzEaeADq8",
  "key36": "29usaQU8MWboiB2QWqzDs4t8iJyVJQZUw8Bit7EX7n8GrY3oiZwaNCJgfq7r3ba3S1j24nqqDaRCzBzU5DCPqMUj",
  "key37": "tUhMDhFvmqaq3gPRpzCB8sUeXirJ4dNVpJajZQi6HGiY4SeMXVekxLqN526iPWqNyECkGNBUGTUn55eHc5Duqvd",
  "key38": "uitboG88VPAPTemJokZVAcS6LFj2BfNezzGmaYNzrQ1pipVF3m38eMS9CnKJAvGVCR3kFFHu43cHwWFymvaWiU1",
  "key39": "3grnzG3zZup5Lix6bFycVMwnPAsYhYFsM4sbpKucVRRg1qm9aVWnW26MTJ92ULvrz7QCKiHtTAdvKNkgH7kLe1yG",
  "key40": "3Xiw7GS7NAXTwyQBsNqr7FGTa6Awsi9GJfvaJgTKrqTnFBpRACNX1bB4pjohhP6RoDbW6mQD9aaBcptMcfHcS9c7",
  "key41": "3BrwVRuqH5xa5qeLACZjCGfeW5HKi8Qo7CwcvEirW4i33cuZf8Y7j1eqoAyyPs6oPavxH7q29fHG4FPdju2C6LVB",
  "key42": "3HnCWo4MovWFJHiY7M1AJpkFS7ihUExxVvgYp81kcKP5ChyVxKnH9iN8SAcJR5zvLjfHfyosftwVjMFeJoSArUdD",
  "key43": "3joAxpViKneJnS4RHL2xSTwz1LPZuqy5SpCW9fezUMySBxGomjZAEurKCkGeH7okTfCtH2GzpkHc5GzwRdBDoYmZ",
  "key44": "YHK56aexVnUn9zaszcCtntU8p6RMr5DxorNrMVdB9s9UA4bJgR6wy8VRM8jN93YDaVqfQqUCS9eLofRc6b4Pr65",
  "key45": "3QPprB8AjzzUuEdCvfa6o7HNJN4gejmYdEyW1nsPrsNMHFpPNUb3k9dB8XQkt4d5JtwNwSsQx1rXfhEhLHwSJP2g",
  "key46": "41t6T8Ts7Z4Dd9HGdqhNUKszLEX7Twb3dhT2ygmPSQRCFx7zbzgQiEXyRwkVhiJEU2vXMK1avNrqA1NijmV6gjyq",
  "key47": "4EWxm4jTXqjgARswvunqcLvQoA8z5aGKSRvDLMofAX1Dcqwsy6fwWjhR2KFgzR88pvitQXe7GWUa2aEQSChipUn8",
  "key48": "668CuvXEFT1Fi4BWi29tkSSHCE7sEeWPDgy86cfuJ4c5B5oT9spQE4X2HWpPU9qFEcUSyq92J9fmJLHxTjgirztE"
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
