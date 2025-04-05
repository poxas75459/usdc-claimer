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
    "ums15B9WxjAmxviv7U2iBiSbVHY9xWmFijgMqTsiB7JygPv65pQeFjegb5wcMeFeGuNtmBfiXbaoH6BbRKm5uQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjhbekFxrL7Jtc3XYg9Y2tbk8XfdkRbmVJFt15nvxD6W95tmax1N4CtMCX9TXubSdAbSb15EVEiRkFE4vQrd4Hg",
  "key1": "4tEKsDiPQ8TUCeqQwSHnStLnyEEE1ShZ2wypxiEzyktxt8JPtD2LM4gvUfPSPFKEcRTrNJYorvhADRKQHyepZfC9",
  "key2": "2gr6tdTgy39SmTGRHdWsQNaipafNPz5x4BsdTjd7qffPgixjypaNoqow8EsQW5C1WcWCW2KtdV7tphwruzSMod2b",
  "key3": "4MQg19VnsAC6pjjNpAUZTm372SACmyX396wNiKtNkmwQ4GMuvGgvJEu5J1J3EKAz84FyNqGDV5smRcXBZBm1LMG4",
  "key4": "5MtFq1mEH2e5zfVARhdieoixKg2j2dsN8k1BdvgRyLvHgqRxY7ghtsUgEPzN2wCVGuziWwubTAfdCA3AuyZGg513",
  "key5": "3SSj9aC8mehDE6gHWWVakeH4YFrbhJYzmeyJRHsvA7DCXia3tmDR4RvRihv9Xg4sSwm8DpUdtimtHffP3yQv5J8j",
  "key6": "8984VdpxUt3jiCoKBFQNXsRrgUhhfowy3L2yg4jVKfANLFEf7XmeXwEr4mgmXiWgSp3UmUzB8ZrniqPue9mr9vv",
  "key7": "3gFNu9zajZ4H3SQskDhfyR9DiWMkjcKct81guN25wRSLCLx9ajtWVEANRphx5Jaqo4YgFCbWRyLcgLhRSRXns3yy",
  "key8": "5FB11QEKqnAC6sR8sxqjEYA6Jy3wAMiKjwrZra6oVuQGPa3k5S3RTSmrixBDiS6F5V13vssRmUZNJk23kTBeqL8K",
  "key9": "wnKwULQTa8Reh55WaWWsc8v6qRtrLaUMi6gew2XeMtmjASDsKcobNJoSqeJRwb71At64tPoUT8a1YsdwB7YqnmD",
  "key10": "nTjtZbdYG2Hfv2p4KCDVhiBpiRjozgpSEQMLYcTUEgXMM5TPrpfXr1gZkYkAPFcUPeCJ2bgr7pCSCZKhCd9CeUV",
  "key11": "jmYJgWMCiFWUsX88X7HZsHtbsMVWP7wZinMPGuiD6Nm9J2k8AQwm36rm95fNyovCKKzUr9U4KFYfgsntixzM5PG",
  "key12": "2spgK2xchLJdtng5cacZUBrSh7bKDqo4ywGUiJkUg3HsikpQAMB83vxenCS6XfjYBuHMSe6HYrdj4mWbiCku1Zbz",
  "key13": "4paZW7Au6FWL6DN2pcw4YYinFBUfeauDhRdnrxfKJd38YvRh3d3ymtGzvukMDxXhvp9fB85ax98r5mgfqKDoh4QX",
  "key14": "5yJoEznbqU2qVw8HAjU4gsskmAjB5Y5juE8gbM62s6PJoAJ2EVwhYEos5f6WPVgCjHSJrt2BikztddDrSVwmqs2r",
  "key15": "42ofDU1Nn6wUmYLFKYhZ2JG9MbYaTjqJjkYVgEn8k7yqJg4KourcdyiHAUodbzryZRZv8Pqa53u9q72YW3Rjckhd",
  "key16": "4qpij8fz5gbcs61s1NvKhHm4VzC5KLSiiG2jc6J9b3fkXJRDfTLhV4dqPzsKTnF9tTffdmLNVbM2bNp7iyENriG6",
  "key17": "4DGGTUmYurv4CcV1BtHJk4r6fDN2PcHH9yt9NTD8J5qScJptsHqKgqztD6GURjTN7YVK2goDzVuFDnHRuBaA7ou5",
  "key18": "4dzracVcAWA7NzbN7j8FPD8Zcoo34pEG3HWvCVyQbpJTmHQCfn1shoDF5EcV4rdH9FqzfoHozBc6yvrm4eH69yAE",
  "key19": "2bmBGTBYVyp9cuK9d7SvZeLP2JKEdPEgds9YG2HtrKNeiipjBRTMVARaidY451JcvdQ1cdJs5DUYE5ojPRwEtyL3",
  "key20": "3EdoJmTdDeZ8hA93ZnzD1mssu9z6x3BuU8B1u86csWGyG2QQtSgpjoWZAzxo2nrXKLB3kLXzAuE6vqpc4PAtFfEv",
  "key21": "31VZU5eBGE9m9vU5rhDxKKZYPxhzZoJ68TbprvrSNJHMMsGQLS3dNFHedxZukCuzsfzkgmP7W1WfJFE7r4jo8mJx",
  "key22": "2dRDCCSBR2TQaBottoVkrSVufYnYFnkzTwnmFh64ajsypSqbghgyNu7FD3cRCmhhzDXdtim73nLo2rjQzibLnaq",
  "key23": "55LC94VNA43VeeK848hgffQvXo2EW4LcsZShsJ9rjHEtoKBGNbe7Hi3KVw81UtrFN5swgLvZ52Urmd4FjDyXf7N5",
  "key24": "5F4396cEF72z3p3N3CRH1gZbCnyANMFeaaFvA4XDuhvdFQc8wy8ziZDfg6QWdZ2zqoo3j2CjSWasHbERNdQXFBtJ",
  "key25": "5BHJA3WqEERkMne8fATwLMcF5DEsUpaNNptTzxbmsYNNPrnr2r9uimSRzkc1wmNYteeYLhUaQ423k8sMgFWj8crr"
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
