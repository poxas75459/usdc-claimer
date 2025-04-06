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
    "4A52VMe9d8RQhZaY5ZdNzVjFn2ochH8DgRHPn9JSucWs2UCUoW6b5zpz5X83g4XwsQe78tYsfxLSY8qsRDZDaotx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmUykgjAYCJC56hQ7G23oscRTWc44qJVxh5QH4QuMsagMSCmiA5uUstkCmQFAKM437DnGNfs3Tj8GWn9iF3UbEb",
  "key1": "36bqmK8J8BmNAm9GH8n7UUL5AyPNfcuWEjTyDKEEhGjYqj4eby5rTZQYDamJNhRwFGovorrx3je6CYcoBNitsywv",
  "key2": "5h5MvsacukqKX5owk8t9dGL4ZripyYs2VzqXZ2veAS61qzgvTkUKrKji5GSQfqEYgZe9capCWN7sLkmv6gzh99cU",
  "key3": "5vWEip5phZAe1oGVAbBSaDkJUrthgC3ZJyThJLNCimt68JnEEodxD2TZgV8xSawUpPf4jXgqEAuTjZUZ3h9CmJSS",
  "key4": "2hDzGVVus8vATjrpgcuFpvC1HiqHgotBWqEB99sZ4jwVU7YFaAjj9fUAZcFbLX62HsywFFMa7fbYSvXzGPS2n1wx",
  "key5": "46yXPXcmB1QfZxKq8eWm8A64mBc92PA1DQSoBbaE2rfrss5xk3AjiJDfPKv8K8XdLry5MSwadiBBzABHbfeKoGKx",
  "key6": "3yueZ9pZGVUW6RP1UXwkkixp2tNGDtjaBUF5PMpbTBPDwVqsHv7rf6CXnFnoMRusFLFZ8sJJCXJSqtEkXpe6wBrN",
  "key7": "2cE23DjW71iccW1DTzhfDeQTioehr25LUqaUK9uCfpUdNALimKDA3ZojcBriLWtVtpZ7GbAgMgd985rch71vzCqx",
  "key8": "5ZZXEkKRzL3qmZCaTHfztRwW2CUNAaqLnxgVrPRniX22C4YpCrwsyMgS3c1NY9VmnXf6RDz9QdaormWnLYiJwHfH",
  "key9": "297Y7WVnKtAxRW66o4nRXFypxGUkVkBsLn9UQW2FKAhVoDv5RWxHYzcUX6ShBFYcrTnj2TxRyEYqnJvrrkJGfy5n",
  "key10": "4os17Y4B35TQ5cpxjoXFnMPtP7vom4V6oGEAFNqJBqjk27n2Sz1qt4BPXEgcadB6Hbm9B9HV733d7SAAAhkaBX3V",
  "key11": "p7PBDFZgTJdkcj7MaxmGwkTRg8c2S7gwzGPDztVyKUM9kNvPLPr8gdPM3GFtkF8jm4hfbPvtHTTtiA754e5Zd8b",
  "key12": "3Zs64kjcZuB7m84Jd8McvQ5MVYyr1vQKDxT4GkXjvHfRU7K4kyLoNKUjkESRAnASHKyghzs6xEHEd56nUrjZioRT",
  "key13": "3aAonX8XPJqSa6teKMaCcuQtQiFHRPUYoSsY77K5TGR64BXsq9mtjgNJKk5avoHgUGJR2hkDnGL56az6iNqV92VK",
  "key14": "2XfT1UiRXSBQzyuEHn9w54d9AFWsVCFYVKF737kYCCBPnWxVGJMQUJJv79rjk7ezscibSiQubDH17eKcVeiM5Ze4",
  "key15": "FChdtPZNSg3dggDV8N4xC7xvNWPTsSQQqG8P8DftnBmiBq78GnNC9gyKjbGAG6AWoXbULcNLohw5DeYoVgsbDLo",
  "key16": "5Ey7QkoNsYcZmJ3yzNYSebwc5a9Xdth1oifZ9fXwFEHUWJDw8RGkFWnYzH2Kdx1H2cJMSe4JQ32rkxQULpdxkkng",
  "key17": "2RnstPpMoQ2DALLhGcqrNjTM7gyWDiaBbNdsTzZRY3Er4tQQRUWqcsB3ioaTsKEMce1mqzCk9UHXAZ8fRJiTY5jw",
  "key18": "3JUXd8tyGhVV9fwLmTWaBtzabuGpY9QqYY6ay6Z1NFoZb1xmZDuvb4dEZ2UPiiDQ88WkcVUmo9UqUKzENkXzriTS",
  "key19": "3UBwhtWDnKv87u9JL4EwBeGYnzLC22zaUyJKiP9LqvuaU2PaczpHkvzMrD5pxANnWV9nvGM7dBvsck548bVUcNZn",
  "key20": "3B4jg8nAxfXCQkhQxfGf1eA6kCmresgZdvDGtrRvJcxHYKLoGYZ6VLuheUPoTYWRYVqvP26CsFiFX7FH3Dj6ka17",
  "key21": "463oERG5MbSvwXs2sV1cR29ByZuA6TQE8AaYFuYeEtz8QmGdbiRZwYcpHsMBfXJ7A7A2W5gKeTs4y2rWsy4AUGnz",
  "key22": "5o9fqyrMajEpmNPktdUSyLgchYYByXZkjnQ2w8iuRGxj2P4hJhMUDEJCvNUUmVsDJwR1EJ1Z5yfvKBooSxdqV2MJ",
  "key23": "S3s3Yj6xnu84q9Yci1WRHPVkQSfH7g9PvrWZwQrsj9LgmjahyCWfxEWdM4gmL7UMJGZUtFcVUnZrx2QgLgKUANy",
  "key24": "2jfg9WhEfsPkXvSWyhyqMWem5BHpTaStJNHYukebwxvKtbeKxQLeMwiAePCYZnnXYmW4xwn3nWrFLWbGwwFMVFZ1",
  "key25": "5nppZnGdi6VnnhBYpzdQn5HD3B7ATGac1aT2xCdDGKhfTLUnT7xJqjVQ7WmoTRvFZJprYyTM9RTdjakqozqptU9j",
  "key26": "Gxc9b7DLD54s4GV84qaseiy1BztpzwcuWdo6YHhaZxWfNxW9TH2X7tN1tTCx5FgR3Vd5kJshM2j9oCPr7NYJdLb",
  "key27": "63wxr4jmEqYhN1XrSQsgjewGkCNb87myZVVrszmTY7HSL76QmSSuoexsguyudP2RdhwNMgk1RL8HEXCwf2X2bfb9",
  "key28": "3DUrHCnZmeJw3VmmbrmUVHyu78wJahuy5t1hVAnvY323KtkN8Jy9GHcThtp5DVB6bML9XX3THesgHkJUvrDE4c9x",
  "key29": "4xcVhbcnKJ6HCG9DTdKatoTMLgcD8A8bbE6qUPsARphpwq7UQ1Fe4YagWKGbLUvAbbdfMrwSezx4AMDRXjYRHk4A",
  "key30": "5z2nbLVzf4KpM3JbcymJD1eg4waMpCbQHxUMu26XVmSTeYTkYnj1R51rQcZ8BbxY5LeuqmNKvpxydVhDtep9GJQA",
  "key31": "daFs3BE66c7TT4LyMxWiSKWX2mvdUjsoeLPviJH9RDBNFC1ikPsYrAYZDvm4DtHpmCyEoB95L6iJC4WWbYD3Q6r",
  "key32": "daNkExMXiRtSwSxVJMpBFUiiUVYY5iesQL6qxskWz6EQDKYdN9mFcU6GjUM8zQK3YV1rqNHnLdMp7cuHKacQbsy",
  "key33": "2TLE83FTNfvaxFLzHZrm5Jer5oVDmQXZFAof2U3izre8YTbAwSrVx51TAoVYFzS5r37Wzu3Nf52rPGFmkLa36D6S",
  "key34": "2Ng45nJDPbNrtECYptTgTbkyenUPo81xQZgxyJpB69LYAurF5Vt4ah3kS7FWJAPXPCQu7fgT9eRLWULJe5TqL3Ly"
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
