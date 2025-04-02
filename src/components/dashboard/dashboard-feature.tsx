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
    "4yX2ehVYrgHzsuWw2stS6t2WZhD7b4pNgvA58N9kx2cZSHbesTAk5TpmgUnn1GMFVh3Mjbg6bmQRuSjJFyXK9RZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xXUaufV5mbauaxGHiiLwjgf5uZSQhr3YyHFSNJfv7PBQCRJn3y4T1hCiprad6Y27jeAdcKmbxvpAMuZZmbRYSTQ",
  "key1": "2kt162gyfQp5mEWk1rXbwhwDxmMRB6j3HxtsDmw53yc1a8vxRNy6c9nJgTxwxdGuZyomVKLEXcQE4a9eUP9gMSuS",
  "key2": "32MQYPdPToEF1JJZ8uxF9aoVqXhwC3oHgS5YJMFJNHMzKshMsvz1eZvwWsHZTvFBYPk3HfHdso6Rv42GxZ3CNQrR",
  "key3": "316bnTzEuJDr55jDsYYs3GbgmYu1mSTL7KvckWfMrxEscqmVZfSs5p24WupacRFeh9UqvzGJB4LWrJ9E3DWqhjBH",
  "key4": "2F67kQFJMynj8X9CSjUHPEEssPQU5AwZ2xZkhztwQ7LNZcjJBGShXoi6onRczszhwsbY9ZqQLvF1Bgjg9qwHTqah",
  "key5": "4CJhZXbm6d5jF83Pm92TBNJEJpwMgvChwWVN9Dfz48ExAMBuD8eiFjqQuwnfQBmpu1D6npKoVeUTDuPHcZ8feZah",
  "key6": "54ceJzfw9FWNTMskAgJn5QALSa2VWUYssCGxcgzHra5mfyRjXEe3rw4yfK7R3KivLTDDuF1bb4oNwupVxx29NMN",
  "key7": "37rTrhYHCohY5AR2KoS6qYnEhHwc1MdvwzuHRspzi2T9fwxr4ixgbB31FMFXU5EV2HyLu68RLXvSBE27etHuAWNK",
  "key8": "2ZfHZY5TsFekMCGzQXNCjCc4EUCUUMFmXRT7LcKLTVHrf2er1kf9zd3b14Q6yJfH76dnqNsvF6UXhzfrySzHPiQT",
  "key9": "5LBwt9dRuAe5xk5wrrVeRGWqbV3YVQooMx3yTcqCfKMD7sMk1r5wD2pfK8oyBzS1PZfMbjFHZkrbBdhUGNK6wzW3",
  "key10": "5k84DhcR3pesfpmsjW5hGerXCAZhVn4XGzKjmUGLZCsK8morTRP14W1cczSd87C1RXMy2Rf1pi4v5JY8vF4vDJay",
  "key11": "Gi2RFJU9f4TjqEXtZhV3qMGeMQNdnCJjin7GyBYQNLXV2iuKFoUHUo9CcC2CPYXBJrzdFpdXjf5JmKceDwhoFyg",
  "key12": "3yzpjWBYJhQRLXNJi2beUKzik7dqhjr2YXfhbUUF7MD7gWc2HJQ1vc4V1oagtovugx4V2JqhaELw9G6QZGyU5AMz",
  "key13": "4ndpfbMM635PmsN89RbbR27BsFhyu39tNi2EiygYYLccLFJUsJJiR1QApgtZ7ingVTwTL2hGnx5eFTNpkfAeya8",
  "key14": "3eLszNScKwhVxAenRaApsQ8Dt1FUhcBVcftSWWoqRKCeSNoKrn7f3LVs1GyJJ5LonnVPRFArNK2bkKzySxgdZvGB",
  "key15": "3NoDN45CdMQVaJSiPg72DzupyDpjVasHAHeuJHeSyjUVVxiktvVSnReoMGsExKfMmy8PDDHotKjuxX3Edx5UYNY9",
  "key16": "5x4RL8Un49HsZAZxQ7RTAWUg9fZx7Yf5NKEGeHbaV8ZaJ982hfr5ZRYg5Mt4st5eRz7HMfMsha4kLj7Wf47bQ1vB",
  "key17": "4QzQzLMFVW8Nt2LUnx55JShYde9VpbK6KqrxcBrasiBbM2DzYDs1NigSvBKWnnRJ2h7hKctLENR1pp2UuUPbjCSE",
  "key18": "RgkPfrGwZUdExQC5CEDMK2RjfBDZKwuVjgHjDeyFpw8uVCUxeB53GBYpLxG4u1yGhKuFMuj52cuUeZckfZEnhGP",
  "key19": "3yvJ9QmUMHUg7M4vBMJ7XdG7a8uekoc6kQLuiGpRcSVj6uMZRfhntwebQpXn25Eh9VCttFcpk5NsjNEybb3eJdAD",
  "key20": "iHi1sLEQTcq5nmZajTXF7PmkCX4cv7HxYh7aAtmCAg7fqxSDjfPmbsdbxT4xijbWrZa5HoFuGEhCxacXNquSeew",
  "key21": "4njSrfDv2G4wqFPc9TKF9Dxmyi7M2w1eb1t45mAzMwSme8hbnK4e8RTrscQYXhb5QLpMaeLMsyPkmUoE8d8oihkf",
  "key22": "43EjbG5SidnGQetu1iCgJoWx4g6M2Kn7SZ5KtDqZLejMPD3tkPcUkn5cQgPt9P1c3otEti7khHsFEcEwvkxeaVRv",
  "key23": "2xm1mP3iWfkNzqRcdcxRQfC22QQFp7XYSsWCk9QjXMFKD6sgBzB7VF4SchgWrpzsiLtKGAuDPQ7G8EfYeBHKLKuT",
  "key24": "5UfArhWRivcWbri8aCTJnFBv1cLcsUW9o1tBz5b6F1GxGaeJRjWL8XYkm14D9sMP1a6bATrZSCt72fC1Y7DZBJn8",
  "key25": "2JMTLR55mreZkkAFhZaj9DNhwH3W3a4kAJUdGGvCSXJYPa4Ho8wZEaxDc31NJ7K2XyjqtDps7yYy6HAPTBNzVsZm",
  "key26": "cuqbejYLhynW8Qim9FmArqFoCX34PGsjuQkuTzsNqfmCJ5JGGguGwZYaxF5adRLBxvSDWfwMufAwV7ugqcRvPpR",
  "key27": "4ZCCJGwdu35ZPGmfPfb7AcxbH4P6vnWofM9nrJkfTscyr8gzCV7LXM89mk93QZYyxoWgFRJDVC2hpks3NGAPwgBz",
  "key28": "4Zn8Jq8sbgJJMsFgTF99nrRKd2NeyMBceUh22LSsTtWLGmJX94v11BhwegWVFnpoNVPD2arAxPbVBBbVs7Du4XVc",
  "key29": "4b7DqzSjWiqbPgrF5U2ZAxsSVwtgczkVXFzYsdFiKFCp3P6Zi8M9hAMzL1qGNcCjrBpyaZENBcgnsoWwpjQXGLc2"
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
