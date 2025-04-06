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
    "iUM2dCxCjM32HQCWupW3RqgnakDzTyuUMP1iJJrh3t7NwdijoLX2ESjCtd7XG6y63FgKesm17bMbwskqvGAtwrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAtwCT2Ces3ZTPABgxstBLznVjLPm8ETmskyRxhdwyWWDysm19GWEnDmBpMCJkfe2RBPXT3TvfdccQBDMeCkTZu",
  "key1": "4syZHs15ZuQ1ZkTYc3uo8gYw2wvDStETdVKrNi5FJQ7oDSkopr8FLCJFswQjkqcZsrWcG2i8kD6mbS9voVw9aTcU",
  "key2": "4McJzR3XHNXPDqktqvntY4WUCpysrybwkMVT99QBCH5AuFbRfBXFeJJMtJ9CeA9SCojs8cEHcPPXkT47N3gdCvaR",
  "key3": "u6RNEZceFSSC8LHwyY9t8zAxf2PeyPqzZBKTMHyKQSt9wP953dERaNH8nqNZ6S1UnVsFU7VJuFUoJcHq61LKJQa",
  "key4": "4NHTnNRkyfiVvhWtxnGtToSnDxSV9EeYRonUTJSTFR4oApjVJtJBhshJ8xJTAeDFd9qpcH2RupoeL4YJ6fpPfjc3",
  "key5": "hsLFwe6xmAfwUJzW4eEZRzEPNCKkihwcWziBAcs1fF131BHgNJWJr2skxpMqv5w96gKb8LYsmLGykaKrsGMZ3Nc",
  "key6": "3GKc1nbeWNJg1QzmAp2xnegXfy8r9sYb8RHk41LTTDt8gpqyrm1PDVQXqrLJ4Xxp9afPb2FRDkL8JyPkZyCKJQiP",
  "key7": "3icRk7kBW2Wr8iY9rDpAtdUK5DfLwMNsEbQpHXuonXHndbYgePn97nd7Vk758EzPZL1QR7vRnbnMLjNZmcextCw6",
  "key8": "2gPChJxAP8acYeeRr1LEzoCLYdPAEd9xtbnyRAtftQB8stRGSSAoPT4v2JYH4d2sDv7H69rXJbLSG655nU7kyXhW",
  "key9": "2KJiwA1GHnkbnvyvY8YSkpcTxLo3tXMUf3XHo7Pe9yUx8vKMQwiNbSSHJ8UV4d6DfbQj8N9qxLK4CC5AgJauckuZ",
  "key10": "2cs3bN17Ma6EqSVfFbKRP4oasKjK1GbAKGP2heizLKucPqfXHoYey3Xf7oC3snxstZvwTbYEP59m2ug6YPySkwrw",
  "key11": "3u94wdooNqwj944YuxmyVTyh1ZAwDcD564Xv2FZpY3R1JJef5VEjaPvPZpQBPUXw7rQbthcXCA5heyRckUEeu9Ft",
  "key12": "2SNHwwsA9A8fnNwttbJzWhDqq8nvJmbQF4ZnF3FAvKqNGCCqQpgAquGYPWaV7U3nvV1N735YaVy5TZMpU6VoaWYP",
  "key13": "2V4zu3KZoWgWSxE1RqBm6cZfWgXdprBNS3kfrdixVns8xzwGbJNtxfHjmTF5ibXCS1kqiRuL8eaE4R5MKFRM4rss",
  "key14": "28e3nX5XnuDFsNrMHR7bhBAsnK15HnFXW9vUteQuC7U64Ktw8UtL3nZxdh3qmQGfut2UA8nDwZGZVjM2d2iCJGGA",
  "key15": "5seYE5swP6bQxXTcrRH9xzk2nCis2dMYUG7qLjQ4GCRtd8Kpdz41khs8ZK8WZS4trMpwhiVJDz3jYWd2VhUY5KGi",
  "key16": "4dwad2GrAuqrS4qA69YnsC7Yw93orvR9KaN6CBogiw2rysCCxLN1kXfFUTfxKiJHYNNscVVa9GHieQfzRKc1eVLc",
  "key17": "2uAjZ2HCFhU9kb2fPxhGsPbUZLriGWGafiQNUBsN4TfkJkyaqgBbKe7HTqgdVH4smHEwMZsJjrnJLKLxq7vmJPTd",
  "key18": "3EwzoMzcSt5UXJCZyyspcMR3QdpufXX2GsE4KL6Fn5bHg5awMwQ5ECyUbGGiixeKeDLPDVNptcegZ9vaA9mWqBpp",
  "key19": "3T6rAFtq5ZeTqAu4DZfSMjSp7NzZr6JDHYSXThMvxtY69dparcv2scESvw2ZqEhphoqprN2EAs2z3smRUo268Wr6",
  "key20": "3942YCB4p17fkfKGktZrG2qs32nkHX5eKjKqXPYVut3unA7g783Kk5uBBw1gTMKvdKvLkEWnSvtvCtjQMx8P8vWJ",
  "key21": "vWUzeg8uzfpg9dAPetgmUxMJM5cxGJUSQ4kdV4FK3AS5YJJFhHFDkxrv51HDAcpEainS2KFwLwg31oHKuD6yUkt",
  "key22": "33JhGPEknXkYGvTf4cjidwg1rt8FcPWnd1UnPfsCq4AQ5AfvASitujDC1fabBCtqkPGTUqyC94cd1T8CLs622zwU",
  "key23": "5MCSuSH3PVQAjSvvvqKkZorWwhnApckLvi672XyaWfssdmkjVJHnmYMeRsvjiFgUjNVifuTWxghuo5m7TcsoMord",
  "key24": "bMeWpwVHpJSpyehRE8W4JB3hbvb8JT5VkPzFxKwqhJUZVAvaW4osFCtKdXfrGV7n1fCt6JDnV9bZsMXzqrzti9d",
  "key25": "4WzevcBcV7As1CugBF1MvdhR32xuxsBkXzUJkKvVLHvywonpMhNHWRQ3kTowsAR9TSox2xp6XrZkDDza7iZJBj6H",
  "key26": "3451G4bhw3HHoc6wJEFcqqbuKhi1aDD1bJHGTi2BTxzwTfco3TJuoeuzfG2SPw4snefsPh9NC613SHYnKsSbWMK3",
  "key27": "2Nj9jNE3xryKPFwWj2HefuFSPBEY94AUWyCkamEum3ow1YAoFVawDQ32Mdbq1Zu23bjURVqSckCHVx6EdRVBHpXn",
  "key28": "4C5dQrgvDzbZoFjGTCDD7SPR4nU2S7jiyxxztNSyhaz5CJbZGgW9GKbXYNGsRdeexJoj439ZYstnLjpURziFWRE7",
  "key29": "9QCcR1XDvcmT4FGFn6e4qQR1Yqh9ivE8cctDTmff2QbRHkBAoBEZ1zjD1taP8XFzSmgS2vi8mCCtL642Ewam1fa",
  "key30": "5TarFbT57MY4BPDzczf6dfXh3EXCA1d1LnwyKMphTNjvT37XSc7BQjeWunxdWNmtaF1M13c5vrSF17Pe24LmRkVV",
  "key31": "5qePndebHPCwCv4LTJ7RgrnbUyQNin8uu6U4C8mafFPT9mKBJMcyhCKxZbB4xnHU7akFafCDduHaVU9bFJjxG6pu",
  "key32": "aDAAYvWeRmtP27FpBrfeMfEHWDLjz5pKx9fKE9yMXfaiyZfAsUSqz5m1basA1Lnfc43aXotZrzk4j4Kq1UiJrzT",
  "key33": "3bJ881fGM6A5YDR8dVcoKfiVsvwTBdY4Fw18DMVSH1e89zQksFm32CUfwucGuozG4L7LrNzaeoDkqLPxXvu19s6Y",
  "key34": "2cF7cnNpmPw3o5qppapLSMxcxJ6VSL37pq8DbwJFTkBvY4N4e7kjNYqAEocUUFYGpjGSzEBrD3vvcC25zyJVtD2C",
  "key35": "2psxs3ezJLMMxLVZyremgCtN1J393duvxyAiqMeDhwRsFBASSH2K8rKwJgXxqCdaF8UA4n8mYM6srNqYZHcrQN7K",
  "key36": "2qrvcGwMbmTJE7HGNwS1YipMxoncSouXcPSPT2CcvdKVYSgKYwsCTn8SNb4ngzmandh3vsef3vqCzVN539TpdDd2"
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
