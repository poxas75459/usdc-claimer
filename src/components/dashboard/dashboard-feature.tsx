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
    "3j8uj68TbYTxwWGYkiEoE3Rh6om7Um7sC2uxXBFEsjPWgw5KJj1UqJhWeaCj8VhgQYhBh3NogCCwqZWNTDYC9zVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1DQuhTLZLEpvASfNnhv2rBSui7VnUYWNGHBn5RVz2buY1ayk8vpWAXjjVRuWJVc3mx9CqxxwTu9PH17eKHEbNh",
  "key1": "54MMJnqJpKVpizRNGPF2YCC9oLaxoqPKQGgk9zm55KCpLGS2MDjJETZLDbmk8f3SXcSRpRo4Px1VvHsGy1RFhERi",
  "key2": "3Yb5TBonR5LJg6n9rx5WjjYU6K48GBWQ9YmEzKRdJdwQe2bRgE72RriWksx2HWMwdWUtxZ5k8YYbnKWA5UqGBh4k",
  "key3": "3QEduugWWp9bAVSsLMQczcSnja7sQKyKjKbVYNLaVfNZou98iXy5GdZr73XAuuqQkK7ZqxiBXQsjgnU4WjQAsXiQ",
  "key4": "2K7gfWsuprnq6NxzZB6JprcobaTpcQ8gJJiNdx1m2a7vbJfqQyRgSuc3YY3Cq4AdXi56MaFLYwfWA215PGeQoNPM",
  "key5": "4khyLVuzJ7hCkmmb6737NKytxGckBu2zXMZKrUsoo6BTbfqjL7ENrSn3HALL7pKkoyJWKnG7PK6Ngg58XfZM6W4W",
  "key6": "4EYwtGMB1ppWNzDn3C9j1PoEzCakSbJriAUkYfsCEjrQqst3SYdzcsQv8yGdUH9SyJFKp6wpuN6XrYtmXR4kyePb",
  "key7": "2xdHXYREH15tteF92wiSJpS4tRosrXrWNaQ6ddMJ27oe1fpD7g6LKSYga3TUaMcz6AjtVYUnpe8eTBsZbg1azpQV",
  "key8": "3oiFY2tMNHdXxCaEfc68s74QuVx7BkGGrrkvJnMdXzphzwXuAt7YrxjAqeUaJyxk9aA3DB2CdXUzPMTrnjCmaZTV",
  "key9": "2QxkfUrQCAG8fPTEudtuyHyJFo785HMNdjEHHW5y2bbf2o1ptRcwHggSv2jc9VDAVh25wTz5ove6PcT3smHZm9wy",
  "key10": "4wvFCcnaqoVSY1ukXMy2BbjMJWygmJEmUE7VzbNbecvrkQBBzeYiQis1A233oPe8PSLzaSN7mkgB1Mb63sWLbW5f",
  "key11": "29jSeBnVde8Ao7qa11FgAsRpXHkk6obkTXJF35PTaQ2VhakiRHBRDgDFHPLEbQh2swfaFSvjgZY82xnfjqWkniA5",
  "key12": "2AXge9NWE2p5tWBnvyxt4KR5PZxYrLrWkGFd8DZH6jcDWiQ4wRChb779tTzC77g4eTr6ydiSY6X1bwswK1kWRkb8",
  "key13": "4Ss7jNYsumJAe9LwSFjbnEs6xSQ79A85CDotkyWmaeQZsLQwjtkDgXS99ASM1egt5n5kWP1c51xCKHKLuAHMf76F",
  "key14": "2qtHDkFM4xFYj9wwAzG1inPUEVb1gnwoXoqq5KoSukkyms6iuQQZwWMSfAo7D6o2UwNZEHDLi3WdsXuQPSNPyma4",
  "key15": "61pntjgPzc5oPjbNtZiMqTH6Y9onwHPNNdu8LrCwRpy9sCdXhhyAezbgxydXfJmqvwDYyvVTqmLurxQZVYUrLv9K",
  "key16": "2p5GDWpjXkfkSRfXcXSkfWw46joyYABs7pah2w43Eai12MDxuGPeiRav3doerZfRWAD3F3ShJ4YDcn7ypKZyBdCd",
  "key17": "2LHhhiTVXGonKceb9hPbUHZBzMK8K8rkzfpqUUNqahjH77AViAonosCuwv3f5EGCibgwzy9KYgX9WDhyNrkfsh4H",
  "key18": "2ZAhkpLoUtuiBNpqe8kMgrF24inKJ3as8BMMU9jBmN2XNiXTcuFNwyJ9n5AqWxf9owW4Yd6E15Zq1jCGwnobLixw",
  "key19": "2qTyyFg356A5fdUGX6vXPb1nmr8bAEZencfH2H79tFFtdui4GsFgYYb6EVfpqCEkjjAxZu9dL4vkfsVhf3Niv9vX",
  "key20": "5aCQRAnLEUQMTrcHZJvURP5SKUnQnkGHB3tspDERXKYji662KK4jb4aV19W4gWD2XnmjmicEyFFHj557rT3Mdbii",
  "key21": "GtG2HjvuSeuTXD6gLuddHaUFHUroudZo8cMqQMz3kSyRgFHrVHoRLxQLewGPffhi8gpPTkcVNV3JiJLaArzaVDr",
  "key22": "3YPky1Ut9AqdWLatdUFqVtKesoyPe1jPC4foCps5QP8QnvsWcn8en1SL4w9VRYAEZdWc3wSgsHmdAkBge8gghnbc",
  "key23": "UV2ckMqzh7c8WgPTtKSb9UnyRSJ7Uz9vx7RkFTWfWZXDrvY3bBAw3tX7sybbnYFKtNbqFDXmywEusxgEhvYRG1v",
  "key24": "ha7GTxrRxkuEduJGzVCpXuGjHky4c71jebSA5Ag3XPBVAerr8CJ2KYcbaNu9pPuvYHv6SJ6CW3c26BGxzhitrEN",
  "key25": "3dcuBr55VtLv9pedHxnuNT8Ymbz2APrH1ypv4QLXrMYiYgKY6gwq3LqoRXtpf9knNnFsNpEW7y8oGWhLzgeNP8e9",
  "key26": "3bbsq15yoTwJ5mpHbDeibevtRitExPDiKBw7UqHz8QeUb3Zb7HiYUBMdQBxh65p6ofwdGwKQWgdLmSznCnAF5eFM",
  "key27": "4cQAcnri6Q16ytA9Yz1fD74jrDVAc22iNszRyzRgLKmqjoV9EdCFffouw56diE92Rp7QJ2F1iMhoYDt2RNeTun2w",
  "key28": "2UDaAKb21kQxaZxsWDnfePvHZEn88JBhqDK9y7HfqYDkjd8w7xqFakVBuRRcKsrm1YJcnp9hQ1GGi7EB7TY217BM",
  "key29": "33EHawwKEM94XMpsdiVJxpKNaUUGFWz5AdDLDVYzmNEDxbvnJuyLCcJ5HqY5fUiwAjitQJwowUmzGA1wVXKJHpwA",
  "key30": "2GJEv2avyJoSZssTiMyp4zKy7GM3gC4KSBgqTnmLxuMta8EV6UKfBXnCfF6taw3KWFG3JCwBp3dr2FWj9UvxXvUh",
  "key31": "4znXebJP3Vvm2YGbKHanrhjkcKzaRkWkZhgdfSBDstr6Jd2rCYb2qRYtykzSQwVZtZfEk1Qpcn4LwZNC4ZUwqEqn",
  "key32": "24sywpvzbG6VYiV6fxZ1xKUB86FDXBCbmei2zhXq5oijA5gyhkJtib8x5UG7o347J32uJrRDgXsvi48kALHoaSJh",
  "key33": "3ddiJgVM6ytXFjgNxtxMs5s8KQ5cWBrKnFZttiHwNkQsDDZF9FK6yTe5VyGHrsJS9gAxA4SVnhRH3tjrHeET5n1o",
  "key34": "646SJ9nrUtSGwt6MZUXpFEg88fkreCw9G7EQKJRegsvECHc4vZftZXaCmMTn4o1cwcjx5NJJkSC1AJGn3RrjkByQ",
  "key35": "3r9anCDMESCXjys4rdG4is2G3J1z3x7KHjqGdE2nwnpbz4onUNmjdnHqbHhzTSEMkh7uLTrPQQyxuZQtNC6aqsaX",
  "key36": "uon1z4LcpJrQKvnSWNKDMoCRroTvKk6FZycJ4opQuKPHKdcSjtjJjg626zgKfUKGSVCrQt3Zun6MJEU2iCttns4",
  "key37": "2xX6WzmAyvjP8PqewKVYF1eb3FRu52nXsfNxgbQrHi1tqj3auwvwE1ssmnasRniuzqcxdof19hpH1ucyRvviF4ag",
  "key38": "568dnsMt6GSBaqRWUF5QWLeaioC3BDTLB1G6fkXHf3nPCXuQjotRpcbsGgjsyD6LS4vTfFz7t3PJ9Bkfi2a7BD5x",
  "key39": "4U2zxQDUZFcX8ctgdxb4ybkCVxmMJ8o8scCB5kapCybgD4aEruEKbe7CX4xUSc9DqSYBfqwMuctLoyikyNBg9XQR",
  "key40": "46g6kXjk4Ltkfadsn4YCy7odHhaXxHA65QsUujWu9D3jeZCN5aRp2vtxHj8YaY55TkTeKU2c3aNvKihZVFtQxQQg",
  "key41": "4pLCgH1yL57Jt3D2K1YKdYs7UwbZf1ycRBjupUxg1AzFdFKUk7aDssD58PnhAcipPkN4BYKfdPLTfHZDuBmNXK8K",
  "key42": "4wezQbz5dWc4ic6rrwxL5o29RrK1pRHyUjuy4AdJ3YhiQ5WLCvaoCNGLe9WYvNrTG5XiPUhmRvX6VE8v4JQxdzC5",
  "key43": "4Tocth6BcyMydZ7gpjAF29mWmP49bE4hffPrSsN54R7LJyfgMSH4fiuhJqXeh4JdJATvgr2ppRHrpybpmEUjGuvR",
  "key44": "5PYBE1hwkkuc4J7mL7c9w5KJme8vf3gvwkMssuaVaibtwMvBgwzvzAhH1wAnyEewj4HzwCW81XCmJRjBw6XBvQEB"
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
