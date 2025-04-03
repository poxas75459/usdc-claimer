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
    "2wbMyqzjKH8kXDVRGk7ApLNdfN1VumRBcxPWzxNUYAvfK7LR8DBMQzePAF9RsLfRQuF15kZL9bZcWE5Eeao3zsJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMWw2TwQ4U4YRJMcG698sPYjch9pu6bcaYDp18ZpbEAzJyA58Xm4x418LpjN3ShhWf1LdBMEMMTUPnaqLbKEecK",
  "key1": "4YGVNgA4kdsYu2mk2qUQEuWXYDTrPDXpjtWrupn2mvz2SePzuSFsqDGyQcdZxLP7EXRzyAYd2z9JCwj8tMzTKpr6",
  "key2": "25VyzRPp3dsJv1hLDw4RW8gb4QMm8CLdRbrupV3atXHXgTJv6oGmbovGNLap87ozxUZ49opDocraaLtfwLZvi8Jn",
  "key3": "3ViTnFfR9CMwBA9hPYesDR5UQEjG7t4jHbMNh64JxVbKje7WzgRDnjA7iZnRigYmzwXS6mdeawrMN93BXZWz35Mm",
  "key4": "5Pr2Tht1LNhgfM5UkpuRmj743sDqGU3Kfqfp5A8DDcQTRKfy6Z1TrsiYJ7aHrjWY2EXCXGxPaYJ4f89yEdyEhx5q",
  "key5": "4skWuscs1NtQW7MGDU3vHQ6tNhQrEi9hnxEqy3ucEygN9gBspHehY98JSDhE8RZckLgrbN991Qx3yaAk6jf2yKr4",
  "key6": "5mYeDysPBZJimidEq9QPgMjJeFtaAhDL6NLVaGqwL2uNSARdKSPAoc5iij3tPdHgEUq3BZraCbzy2h81RuZp3Sn7",
  "key7": "5hEXoMc4vFDcTZF17wf1yaX629PwW25RrjGDZXC6PTebL9TdCYAyjfcGxVSfZ2oNGvc9iZqN2fHADWdjDACDfyWF",
  "key8": "2kBvMbK67jBgJbyJmGVpWjrqKXU7BTc7DqTEd2NvfNYEFSFQJ5VkdaR8amfBByPxFFBkEjgASJN55unMzJ3D9wDa",
  "key9": "HN1mdXJte841PRnjYaPvVyeVcVftn64FUQQGaf37EoGGG51vrHJBee49hmVwHw4xzPRs2sny742wkvV7ELn5Hhj",
  "key10": "5LJHRY1kHS5Ee6DdN2AbJbaYztagHLL9garvaGMmNKCTzKk8MeHt7gBXdiMsJdKHn6yjts59PgBYoWkefLThq9AB",
  "key11": "5YV4hQsDp8mtAfwEaD8w6rw47EbDKjPTDj4A2K6HTJrmWMUEAcvXHNbJ6VG3HCG6p7BhzHCKRMuF24oFDf2bVfo5",
  "key12": "5QM2BsMbdsYy8fd94BEnQU7AB9XG3qY74Z4HUCNbW2qE8w9hecw6BimVsmn3u9K9ggMrnyD335ZsK4HLp4amDYYf",
  "key13": "3GwaKAag2UvjXmWNqgTeNQ4eXdwPo1mRB5aY7NtDZAbjcLVNLwgYoVGHEAShCw6xfqvffphNe698BAYtYWeiQpnQ",
  "key14": "4F7wzPYqmks2sUgmKRKPhdD8NcD4dYReFy9G5EpuVdUBd1aA8kPkdkP6dkwHGjDWvfACELHzqj12GHdW1i5EpvsV",
  "key15": "4ZZu92DJkpermNjdSVtJJhnPQhMbjGNzVJHTrYoQGKPwo6ekUUseCgV5zHarMdhVoCpiKdssRguktcEjaJCMFimF",
  "key16": "4pbYEz1wMyJbERtRMAFw4cLrZEgX1GaxzYcA8RGo3KcNifLDLxE7Xq4sP1xvEktb9eCo8iZzmAJHzip59taaDAwu",
  "key17": "22MzDW36ThPd7CAj4MeUS8N8p3TS3khfxkC6eJNc1TS3p28ubd4ubWEY3F3WZv2HNQRtK69LbhxHeY7REQckW8eA",
  "key18": "5XiCc1ZL5cPi8syMhhiHkS8LCZLNegM9P82tmDncbXb987432yLmypWXGCJwhZtXHLotoTQ7W4YjbHRZAtrtynB2",
  "key19": "4jFgtmPDBKMtAY5WHXjkorg7AVRD18wUnuASusWqPWSCefhsXDRsyjoewx1SzoaYj8hSXjzrrT2uzwgX3zYtQVo1",
  "key20": "2q4au1yoVwrskfY2j9pQWcrgrRoKsUFwFEi1vpxMVk6X2C6v1GiqGVqpgJDGps6bsimNPFxECSXZXBw2GNjoG82T",
  "key21": "22wEqB1RFufZW1k5svFQpAuP3H65mQzBNByKME4LbE5GZHnQhb6ukMrWU5uue63kAZQ84owjobCfocrf4uarfUwq",
  "key22": "dP6mqxsrQN531DGEFRjvgwDTMnLb7YS1yGkpTaW62r9bfKdg4fESf4fnXtPk22pHxV7CCMv1fc7U4LdZzQrVbPY",
  "key23": "42zkXMdkrLLJ4Hr78toD8e24s48tjTXt8q7j6EAqsFT83S3qwF2i3dNqPmqPU3NWfBLAiKb2SoqpjcUSrgxx8YTS",
  "key24": "4YND12xSJvc1TfR7gE1FSbeWDJrKWfTZdPbamiswTLYMJmj6fS2QxitGY4NTU39gxzdYeLrYQhN4rQgieNo2UjdX",
  "key25": "4GG48GL6h9ojXGTY1RCf9WbSWrdcecTXzgWz6fxo2Hoga5C21z7DGVKFRqKEw64fDtQJQQinfRfJ3feGfAqLZsQX",
  "key26": "3U7y5rPjCMKJbH8P6AQcSeF1uY9HiWRnY9pE14ALevuVBjEKWRrfFc9AHytAkzYY1AVeHobns7m9qnitn3STAvkL",
  "key27": "4hor1nnUGg4cZgpmur7LZj4n6UKTpDsPessTJjeAboPSTLyTnsAi7rCh6erKRg38FaCLPX6JQ6Jef42QMcfgZZtK",
  "key28": "gULxNeZnaaQfc5CCZ881UHqXJm4T4zsbyng1VbVqaSTBW5zzz6aqsMM634wL2UisRVsRwnKSUZRjLH8hPVYWWeT",
  "key29": "63bf1N9Lk17faaoMYNX2GFsnL22jqzSPxvBqgqDytMSbCaKLP5ezLG5MPUVERsnju7cwCkiDPGQGiqf82TH9U5b1",
  "key30": "26jiMYqcT8LGoj8iQnkN3WX2RvpqCbhsbDoVy2xWaCPuiEcdS86xZ2AhT7vbdq4M9zjaKerNpx3vPPDkQhRzJNca",
  "key31": "657Ab476ioh4CSq2dEu8CqBUdJSnmgHumUMiDidYfQhmM3RW2oRhTCDcFUHpvAA1QMSR1U31G48MhiVb3v9TKXRA",
  "key32": "5xhAtEiswBdHfQ28sJh9bn6bNhtF6B2Ut9G113dTX93xVMNNpDp8d929bythfDC1fzRSpKQTQ95swnZAMZK8kdKi",
  "key33": "2NAD1ZSY6TEiF5vmksDKiPCaai7zj6QG9JMhZJVb1kHG5b9ddPDtjEoPyNC73j37bKYpb4kTWZbsnh5uiHxYQSKh",
  "key34": "3UUKVnj7rZLAkJXaBGE4gXVU8P2He3GRyZQN9ZesptQMvFUYUgY9uBpDHXiqiZmMfSrguYgjxoAZ2XkUSdjVf2CU",
  "key35": "2NMKeN6aPqbNkmBEMZuc82SFvnMXoLcV7UaQddCyG9tDt5MfrPBc2tZRNkCH7vENwKLXRdmefx9LSU4N8sHd58gm",
  "key36": "2Y6BFzHbxgW7abvu4SqJS7fE3WgTSSwp2iS5kLMKnZuBhPVnMjbm9sUfTBGaC1NjNonuzrzoUEhcfJcMXHCBrUh2",
  "key37": "5PxcFNqRvLzw4s4w31xcUFAauBUY5i2UAXqXrZ8MhE6RhJ2TpijMchoFvaAMzJBuZKEyBxkNBeBw8w6tAd68zLPn",
  "key38": "32uzzbougbcJgDp4V2XsFMvHB1ZY7wEGRGsgqRUioMUz36c1oZMDeR5jL96e5oByE3EUjpF91838o9NkUuFrgp81",
  "key39": "5wXShfJLe3eY1DQouZWu6qinfA3xH4m1VTnpP1zNRPrReCMQGwNgVAQV8vLai7eMukBh9u24G3tqgpVxjmbYXnKH",
  "key40": "65mdL9aydR7FWGXkM12h2U3kvXGFyqkb2gxfvaT64whPJS6zYaDZMtDodLT5mNCj6V2arAURdGVYgbhCmtxwxgSY"
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
