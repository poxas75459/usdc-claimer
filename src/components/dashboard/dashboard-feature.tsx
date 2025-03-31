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
    "3JcWnx51rVjiZmVav7nMUbZEwmwyJMTv2dn6XEtgekckqRJuhiSvWDHDPLXbupAxJLXqQJxZQz4Xgbh8HsNbxLfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owEEbJoPnPQ3yqEQFTcQTbdfrT7foG4B4GjsFDzH33P9VXi3oKrVjfFiq6DRmb4hrTXenGFxSaxXE4CdQTcCw4Q",
  "key1": "4Kq24opSNNxWFmiSeukVVhTVYL42DWxek11pvu9TnvedsWAm23RByxFtD7VoJWcBssouMLq5R2Htchhp3nhZCGeo",
  "key2": "4q7vBPQ4UoUXa9VMYycdDASsqaHuBXTpsqUiinCGLcqWuHyKZVDs57fu7wG6fbvHWjqXXND7s1nvMyQuVPBiJQyT",
  "key3": "VhWZh339KiBao19hCD66FXuMG8zNTwVHBUN68hndbqdqHKBQGQnBnWDE5CFk8fJZXU4qm5SKpcGxNgVd6Re1zx8",
  "key4": "5M4P41J79BJ2mH2XtMsykxQbCGWaSjdWWtdb7FtATZ8N9ZRhXE4tx4DDr1VCNnABhuMNsKhtRFUJyhEisz4neDk3",
  "key5": "HjEsijAnBwv9rrD9kUxzbUSeAWVaTJpjLNVPJzPDXER2z55Af3xA6ydsMgVA15X9zZc9sF7Tb8cDLBnnYBhD8qK",
  "key6": "4raUHWFYmm6jU6fTc75gxnh1iaEKCcCak7Vi4RVv3AgMqcJTivRvy6ey72XT1rLPCz9NX2aaqTM8ZLeVrzJTUjaG",
  "key7": "3BmCh9xnU9hj9TA4Zki5t1gqJSg615feyqsQmei8bRvjHboVmFNSK1aNXZrVLXYp1fcEsEzNZkG4zJvo2DBQRh9f",
  "key8": "3ZpVRvsZRvUmior1fEUdCrhJHhLE63fC79t9aaZ515YcR8xgnKb7D8mn5ALdu1LhMCaHLgPtKad5gttUMp5pkuTy",
  "key9": "pw5dCThyEVyKRzQuDouZiKmXiiWBUsk3BnrXbt5bhQ274zpXahiVeWr8TjAY2Xqmjgx4pffiGL1MFTE4LmGAHuT",
  "key10": "2NRpQDrCEZ3qUFLnhKDKZixn2uumgiDpBfaNdCutBaEfMoPmEZrJGb8htLdPEc3rTrT8k2RtKqmxKmyMH7nSo6HK",
  "key11": "4RwyCccKAhpnyBLXg1EHr9aDFNHdq69fYacnopooQqCqagoA4kMqBJgpRTU6XknhHS15vUm2UoYNENU52GayR3RB",
  "key12": "68VT3aEAYZzn3iKptkqskkWpkU1feR4pBCn2u2D3CNScMo381q5n8S14EvEWW37i8MRjHV1VixzR9c49nhDTC5G",
  "key13": "581gqEKmadmCTWcB4o6u1ukxe9vjjrgUspUYqtqVEUTFN2iuiv1LEbhxuNVBrpXnJTYxtEcPXaNudBN845MEVo9q",
  "key14": "3TzBA51P6F3ZuFtfDu3HnvyR3g4uxWCo26Aa7J9yTRTVyJjeQPQrru8rXe6DoDRmmVT7YfxrA1PJmsoL5Ratv8jA",
  "key15": "bhFBgxMMtfFRdikEJruf73bPCDawTZXH8hVANVsXFdhzz7AJDRchvz5z1MwNmWgmuz6H1DSVsr6tnm626uXMx3n",
  "key16": "2cFJkMS3S3LdTcBYMuWhM2x8Y3QwpKiTkBTCkM3T1rpDCPFpJshA8F2awe4Y96ej2Ny6uVqioMSXHEMShHpDoK1a",
  "key17": "4q5zdhH9y7QcxpGtuiFXBKjxmYMR1QHqbGL6F8RJCa3V6iA9yiduBkHhsjcwnufDfiZegc8ryCDjXmTkufYWM4xx",
  "key18": "tHZaSLCjWjvsduWJdfDrRjnGZRU9BtzvwzcZJfVmwZ86cPcuAjS7TxYxRvZAUjvibn255PYUGKkBkcCsiMmA9Fh",
  "key19": "56LbsoAe4rVBTjqUJCsSdEZ7Yashyo6oK3hQYaWRqoFNkK4FV6Z4Vc5CRVxj21vznEomXxW59UjaDX12XiZXuJ89",
  "key20": "5KiQXuhaGBgV4nrzbhiungqrgvS9EQjb81ZdDePytcTWn4HbgzoLHQsDQWwmKJoojxRmJH2HV27nsyex565Nav7w",
  "key21": "5TTsQ4BqWF1XpUtTKmrcHUKvhdmFLoaUxNLbX4BEDG3CGmiJ94uMn9D6pSu4GPMegRTWfFe5oXwptLRqu5GAcTHr",
  "key22": "5R1JLHMLrE6Dn6sCFybzrLiR2GTyoZG7FVVr1J8zqfMDTuZF1Bt9XNbBkqfQXsprkAJipHurdHf7m2hvZ34k2UhG",
  "key23": "2Y3TsYimURr9QarctZm8657P1MDsZXK1Qn1qZvfXSecGufHpaBmYQdxcvjf7Jc4xnhmeJ7eykWPZGTvT7gTfhzfM",
  "key24": "3Lkrs1rFht9GTAZ7Kue8drySL7g7AHNCfkdXDgj4zjfbULmMwayh73B5B5J36e5iRwBS1gQJS8voXFBHZxeMJ5Wt",
  "key25": "3TNRcuVKGMqrAKJPAxfmeqBjVx7BMvJDY7nTNowMxuWAoM8TKM2jtBHJ7cKdNjUBPRMDo5oxxRB9pT5DLjsRmsgF",
  "key26": "5tyXrrVMvPT8n4MBFLGerbSLiJgQEcjLKzUBSBYKtRZTEXWyteYJwEVT2MSRHyNXsuJdP6UnrunxpZ8d6V7zsirg",
  "key27": "5oobupigrbRm9vkQDb9jpj37RjLL3aefDL2K9jnwRPcFfRz1QZMZmpxj3ojnV68UJu1daYVAaY7RdnnH8612TdFa",
  "key28": "3HFAimuCJWGwbdxFnxSN6umzQoR5R5ZVxoWQoj1mmbRed2VSp55BrXbWo6owMyqSxv4nx3EFnEAECyDuhvVGMHfr",
  "key29": "2dDSojpqiTWQkEosvczG4atVRezWGwWVHedYPbmzEnKqH9XLURUbMUgSsWnKr6aARczvbfYXa8UouxkZ5UJ8qqqN",
  "key30": "sJ8cFSAibz8Ua4x46HPhvwt58roQgdPcpR9PApcjQ5vLfc6x8VZwYZLPkfg1FeuaZtyQLbFZkVbKcvRZMbrSDBg",
  "key31": "2gA4rKzbYaW2NMMzMGVQtJQmrALL9inXcLvkLnXycq1xH2G5ANQCp5HYKmUvT4uSNZLtzrCkTaZBXhM56sVhkPSB",
  "key32": "2VGAz1dGSaxMmJDcHn2YL3GsSBhSJq46sHjjU5zoYCGPxjWZFrJvtbDuQaMY9PvzYFZT4jfh3mBtPcP5QzhMmCQp",
  "key33": "4oaTTLQE7Up5FhSi8o6XXMBCXQhwFw9MNBmBXvSS4D4kzx1gwesiv94SbwfTZ1gZERo7wxj1NQpHZLHt3qhazqih",
  "key34": "5zZspocoj49Pzy21zwqMubuvpR5weJma3udgzbi33e82xYBwkPEkSptud6HGHnPyRNbcF1hY77yRN7WB4RinZyG2",
  "key35": "22KsbcTNcndJRkzxLJmq23vQHki3nFrPCURPR7GF8HTCdLRN3ymdct3bh9FgD8p3Qf6zcX8nxWYiKtpv7y4bxaqW",
  "key36": "583sDtmdsSrA93ZY7rTuU2aMC8iioU9KCYgcmpGkWWHBpDrxwuL44D888EcLeTwNTqixgDAuvGrntashWkb9itob",
  "key37": "41GjPXDQon7og73n8ztccPKnpyoeiiq6LPddWGo5FHcJH4Tbc4MMED4H39z6wnYawh5RyPcSJNDcd3YHoNxpfubR"
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
