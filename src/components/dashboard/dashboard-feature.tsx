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
    "5yYS6q6NWepts7LomZzgVr4jTwvcffXyq5ZoC4jbkRTEEMGHdi3yXkx5fXeZfydkoUh2mrb5Juvq1H4mygiAjsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27wc2LB89Dz7HP5r8enHTtEqc4uo6NeK8U1S4ksbiUUoZMkf7xzYVkB5aVUZeg2Mp7kfoLhyj9LCf8rtT7R6775m",
  "key1": "3KDYndEaTWvXaYSFDr4jwtaMJuiKbb6aRSHauLBMaQXqZ9vhaW8WXkKj5camqH8YxiaEb89WP666GEVe73vWPtPd",
  "key2": "5E8EMKWBrT9KXTdGWrsfUeK8RWdmbNp6772LdSYNhMgaULLrfVYm7jjz26fRADJhZ5zKkLQTSubp21CG5zeHu7Wi",
  "key3": "31GP4jv4HNcc2tQePzR8FqbsVptsuhHpg3KN4JHiHuATo1e5vdgx71LJ3g5r4aRbWBY2FZP1ZLSWCMNxpoGN9mTm",
  "key4": "5LJs4PFwZmqAuxFi1Tmbn3baqH2dEwD3iRSGYe16z7MKUYZRPiHfAd1zrUT1mBbCQN6J6t1G58DFkq2zTJynutW1",
  "key5": "55jaAxtjcu5q466ZcbjP1bFqFWVyCr3ugukCc3QbVpdpGnS1b2Y3TZk2p9ihynTFdUKhS1vXyktE1zgdNmTjJrLs",
  "key6": "66p9v276jfYu3XTRYQbLDPHd7ns3LXQoCbRfwuwB52J52aNopkcNbFaiGUgjcaZMfu7frEjSqag5zTH4dQ6y5p66",
  "key7": "4UKWAzAsRNNRtcbyzrx37stRxutchiQV7niK1BxPK8y2K9Ag6GTuWy2ZFRqzwXnnafbX9rN4kkhTGjn833J7WcbZ",
  "key8": "5KBca3bQG8jfwiAzxdaTCJR7xmZBn96Buyk6MmaP8TNUenmN6vUyYST5rZfpADkEvpiZw8EPLrrhuwVGofgL4Yoi",
  "key9": "4muz7mk6xvg5dA5n8DPyjFBLNxM4SmZmTqKPRcd1X3Q5QXa5rprKrFvuGKDcsd3jWVLHZQcWwJMDvcKc19UtWC9q",
  "key10": "29uhgyaYdETNfGUWK9hxQ2aiTFzcegeufZ37SmsV3i2w5fhZ6q16XMNQHDdjcRhZwdeCSFv7dR4GdUpLjAHXZJpu",
  "key11": "4Je4srMzC3D63TSxCiCKUrCFZWyyYdsULu25xfLQsk4ZSttLA1Ez8TXAQ9hA1FKRHkthLn7xnYFgGa2AbuNWs7Ji",
  "key12": "2mG2wR15PtSayitRYayAG35PMUZL8W38qqhC2xbJYUPf2Z2Lq7Ze3Vgp7xHnEK228c82BZN1xApyHPRumSCcJgga",
  "key13": "4wpWhGwySgHHQgtdj9Mr8kxyT87oQJPszwvXHuJBq4KdXxJf1jyDeZKWNktLVBnBrG1mtqxM11L8A5QXc1wHK1v9",
  "key14": "42th6URx8EYkHzAYFe2BSgfxwELUiduHzRViKgKTHLFvV3zWVrrJQwqPMjeUu57SzKXr7H1XDEnKUfDVB6vnsau",
  "key15": "5be5LqRaacjP3uUP3nyxLZty4tahGArKkJFBt8khBqyx1CvrUmDBUYEpHjoiSi8GfKfwjhnNkF4Yt99wLuLW3EBF",
  "key16": "MoJZ8NTSuYPhk8fYmANw9qcz2fzWKzm5mY5xUCeBUkKgM7ifVCSBLmwiXmhcge4S8JUCu6nBSFCr54f9rCVEYB6",
  "key17": "2U1PJLBKKC3Sp1C37KGeEXbkQrQQ7Zke9qkAzb6MTfQrwWvDCovnyHyjWrjeND2AppddZsWftyM7qnfdFhZdu7Ze",
  "key18": "5FRQc3FxvJnZnsS9fHLEvY3cBzGKBa3QJRNfT19vJjncm7CAr1RZr6WkFnBTqpTk5UDziPxigVKyMpGvSeTN4mSk",
  "key19": "2CtvhnauyYNTz4eX54kkjmcrffNzn7rcq7VMLyHkTkD1kqY5oehN7RchWaCHQuAgfJALrYwrEwzHcxLhvowuLcsT",
  "key20": "3W75B8Jnui1bwvuHkqEvx2TbFntibFmGg4in4zJoikZbCiXvaLHKCcmCr3bs4S9GuHHsmvFTnxtjhw1sAtkp1AS",
  "key21": "5k4AY5oLs5iZ8dgnbgKdXr7cG8J47ujFE3rQ76sZB3Pt2sM1vVx8yzZkxNbaA56KQQKoT9K2WqC2Gpfvu5keeqWb",
  "key22": "26CCmyJsn7EFsBQE6KAQsvePTiSZfnNgAwbA7iKvN3P9fURAa4xeWmV98LvkR1tuiRXQhLnHzWv3uYSsV6H921U5",
  "key23": "5ZAx56MEk6J1J7iJXz9Ce5KcLtuiZWv2okT4t5vuuo5vooC4sxhwfQaZcB9NaobRsLNyfNozye6aPZrBV8z1bfS2",
  "key24": "38carxKYSyEG4MNfK41ySm8BGiSAtAtSpLqcrExDJPE7YYPTFyz2m8zkhTPgyTNY5coW3Y1VQccirugqDik8iZJK",
  "key25": "39Mbm9hnogQ2AAtbJtG88811Xf3L4vaM7GhncSe9669PcBo6YMLf17LXnTBBr8u9JbGbGnoFD97naPzfbKvi5XZ2",
  "key26": "9Z7SmrvS9pVQNTgpuCH7C9Z4RUPA95C1wPSuDW9qWswkYLergG4zdFUiMubR351jK29SFzugt9X6SMiPWFSL3Pu",
  "key27": "2EoZe79Jii4YUTgvZSpRexmSF3Rga2Afjo5XipjWMFmNBdJJEqG2iU755EHGixqemjXsFqSu9rdghBpahvD2y1RV",
  "key28": "tAzjBjEFcL4WYJhowi7Jw3idNLhLasY4PJfgDALMMu7r9NNjzZaeEmfF8hwo6YXLDkMU9nRBTWmcFntYARc7GZ5",
  "key29": "2ZxKWiyXLGuSVTGRRnSbFFxZFtuvKKm4o1oGYBCCoYhz8wbPr3JybamnpTzv2Pda1wR6z1CWChQYaM1S3DimGPQT",
  "key30": "3KywHfBgL2jGj46Lnd38UDByjne5dfPFM3CtieTbGvnsjdjz3bevuC4tFmuJUskrczcLGbDMPwrEm7fEZeacCZ8q",
  "key31": "4NDbMBk7CzLChezr8QjnS1uwP2omoahwefqeGJigxQGWJdN5DEDW4bBTYg9uwp6pLWvFE36NT6787TEW1jYzFujJ",
  "key32": "2bEvjnPyFoQKTkYfsiVWhBNnAbe2evZE5Te8VTES6iFNAzrdfPLSACZvA4CoZdfZQQ69FophhUnTgjzQsXKLnCV5",
  "key33": "3yxmtRed1FHsbAPBGPq22s9oD2PaAn24kKh7qYZ9NDwNvRP9G4Qm4h8NZRrf5BGENHcGwx3zQjzShk1Kcfx8ymgZ",
  "key34": "3MVcrZnmouxn5TchByz4ey9aVEuiixnGdcCKdy9GmDVAptMtbonZhwnCqye7qQiZuujKHgCZXFJF8xukpv7ZjDj3"
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
