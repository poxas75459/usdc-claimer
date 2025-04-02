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
    "2PSLch5KEm4RbN81DaNVUZbGiCdEqgC1reH8HXXRNUcHj5pyZ96xLRPgC8iV829nm85E77h31pBj2ZTWzrdbMqrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdk1N9KSue7aCkw7FqJQ1e8BYdhiZEoSHLCtCHNemikAQutUhRbaeRA1G2FHcnsNysZ4TiqbyGwA9ZDEeF6CcfW",
  "key1": "mx63UcNHUrmXKoWNMg6mmArpS8qEAzpJViYsMcXLhiUeM5fkv1JFW4Ywd3nuXePBm4czLKvAuhGB388ET6ct8Ms",
  "key2": "2xoTxhBjdQawXkZMZCJ8zorL81kccY6FtZn1dzLyi75pGfJAUUHDwhXANMLukUudTVqbj1UMKgKLBkS2yADhAiny",
  "key3": "4zjoUGq96X2SLLMuuazjQGXLefbQqQ3ZgqjyZou1WLvDNSvzdFfqxLy2J7iwphWxkpnRCMjDjgXeUBAXh63nfaaX",
  "key4": "5gzNSgw8g5gM9abh4rizGMjNDGqk2tXubnUs7bUeqxVYdWjxCgMcHdM4H1xsETWP4KiGmKJLiNxQzSFpV3o3QRP2",
  "key5": "4xcwtKaiu5mLAoK2Raaq5iUff4nqcYyP3tFXkbD6bR3YGmCnQnPD5Sp8u49vKozn74JorYV3XE5GejnSbiPprZdW",
  "key6": "5GVkXxNsKKv3r7f1JHvJGzKCRvS8719uqyxSzaKcmPR4zKEC2UFij6W8BVR2JVag74qV5KWBDYc7aSc3bmWkkd5U",
  "key7": "5GJBjS13vnJu62ycsXTBeRfpVm5Z9sF8LDDzxSLx2nxPv8QfXzC4vWKpQ6VYkH336UYYZrDZBAGfL6G8quWwrDmx",
  "key8": "4Xtp36v4HSKxT4LadyDDTGR9822xDjhYeqpVxLCgcHHekF4ZvjXcN7NZyf24N2uUfwT3bQyrGxr7CxjFH5MDz5WZ",
  "key9": "5nVL2nZd8j4xPh3RaCaVocyaC1hTsNFNkqiSbhuNhqSd7rkbrj7PCw9MFLDmt3SjeYbStjgRXceRxjvTbxFV7wMd",
  "key10": "5bbURP5SdjCC1j18oTUYNTChFLiSgrhiPt1jp1fRtBJgTCc9GGusuFU6zH3LnNVph1jEoCKVejQhcFQmLozkEc5z",
  "key11": "5kQFyzEGzPjHjtu5cZrYmenxDq3chruTvhaMKAVyFauS275ZgCS2TY2KXecC94U1uHXxMqvJieZptKBnohMegYrU",
  "key12": "46SU97GcJcLHtdKr2KKcTkYhziePcGdwUG6WVciPVQ8vxrWNPQv788ED5FnaaoeWhCbBHwRpSXHVv2wLxYN2LbP3",
  "key13": "3eDyWjkTWgXHC9fEwc1tTg6scrCJGRpBhBa2U3K6nz8WmRJS8BchsB2FcLBEwfaDLhQeA532HemvN7JQHNN4Nw6B",
  "key14": "5McpS7VDk1MHdXR2MAyxrac3qfag571NrREE2CaqFqZgFdodQeddZHhsjjYSbx3cFepW7FG1T3juXsMtQ3kF5xn8",
  "key15": "ZiS8rsiEtxtHxuq6znJavZ9B5rY3VTFbWodQrG7pYsy1bD6Lpo5UXWKoUtaoWv15SMGoN4s6RDNRqLPMVoQgbMW",
  "key16": "2XjNSPLXfqEbnsvtv8gUbL8ptYUmobqpVd6Q5YBFs7Gg3SSojS4zSTQC9NDwZgUS3rmD9BvCXJBVXFN74zo87oUp",
  "key17": "MSi9Eu83JnQxygNYj9xazJf4GTZ6jioVkhBGAsNiBaszufrbeVVoy5X1uAkyfFTtF5BKADmqhTWf3YBL2bAj1Rk",
  "key18": "4hakg3E2i6dtEgumuwkZmBttuKwm2qMBse49E6ZfGdXpghnYZGy54pJkgr3X9PULxEwNsoo99t3Q59Qf85E9mQDh",
  "key19": "5deRP4kvnLFkWejwss4HCVEtJgW7PCzSLYxxVCCM9mukXLXzxjQHxgnxMP9449BNwPcoWzFymPewWm8zbvAXVncR",
  "key20": "3awaC79F1CiMQR7pkFGND4hUQujH3Dzmj9TDUPHPx2wxbs1HzrqUMvHiLgR5zJBsLijxEtrTbYXjeNRQG1cSNtW9",
  "key21": "2ggLLAw4Vbt6vWnXBBd8KKgYq57iKV4ugDzF3nzud2Lykwv1ranfLY75ybM6qn9F89bgD48LnZjtvDEZUWsfZvjc",
  "key22": "5MQyTSZkm1XE49tMuiwQT9vJ4vs9UAkdzUrcNH8Dr6QurBLyGXyopn3rEcSQENxat7dEb6r946C6h2CRC7WwCJrU",
  "key23": "2yQGaDMMXT5CEWhQxgXa26tnaVfieD8nDKmyCzbKGLemNGy4eDG5pUSQFEwrfdWVPXyQYwP1UzjB2SGqP2WQMgmU",
  "key24": "24cXXJQALmDpF8gBATxqc7x1DLXXwCbSg5L9p4L7K2EzBsCT4m2tXDNKW9UKZ7Bhur7fPfJCDAMkTRAhKWxdhS35",
  "key25": "5ZsbmVuBx2YLgBhHRFbhNMAHbDdiVmAKiZqLnJ5Qi1WXAHzDdCi7nqePnMiYQ7rRwtwVG2gxCbAewZ6JKu935dYu",
  "key26": "475ViZgChwJb8k26BrPzFL2xd1jVHBEr1uc2r2XqJok1CCmjQfcG7LM4WfyDEDuv5NwhrmpoX9bNmNnvBKF63nYv",
  "key27": "3GFriNg3aH4z5qnJkw6iAwHcBuPWFMQ9CzmamN4aAj6TTZ9rR1HcQeuVv2EExS32LQmZ66u7GCKizD11qiMLvFC9",
  "key28": "3u1UkbNzTh2AQtmSJwtMZrsgU7zYRNexa9UsxPHz9KbZ37ymbEfRL9SeocueurE9WMJXu6Y1sGXJCLGmnDmuGqrA",
  "key29": "4hkaL7dewcmxJbSjKazAaG9FCuJsn8rmbVZXCTokQNypQaG39r9WAsxr4n65LbmTZ9634bgJ2NK5sq2ZdVpyfEcg",
  "key30": "2TdnT22cZLdhSMT54NzNP2TTyd548UvhbACAaEPxuJYsQnaWETqPiijYXtQQEmpLqJxfcHQYVEsjF6k648inxu7V",
  "key31": "3EVTnNokfHvPCHvsb6w1e8QneTYhconoBn6KAH8cW8sXxLmeoVso28cirDRyLmxjynQvKAwZ5sfyYKrKmPby9GJ6",
  "key32": "2eECQaradE1DzFx7RPcVVLKPmXmTZMztr9PkZdj3feKa1rUMEsypjfkpheqKgEwCNzz3sJ4sikABbC7zdp9FoYQV"
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
