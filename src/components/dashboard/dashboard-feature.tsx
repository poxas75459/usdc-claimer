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
    "4ghMh6viqQ1K7gpyLr1GrQEPzDUmYtZ7gvjCCMcxP1oz8k5zq6hRbyw2xBaS5aptaQfBH54hNoo1qcDW8djWRjhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzLt5dHXxENXQAsZEU34tzHhcDVzoHLe2JZ4pZuXJ3nSBgonreCRd8jTw2nTHiKx8r3g6JVP9ukJ16LXYS7BJt9",
  "key1": "2vFH5c3C4fJX9wKgtxvkitG4ta9JNK7Hb9wEwtDwotLQmJXUm9osKFoY6zVp6o7E6bornRx4kNc54Prpn36uBHur",
  "key2": "3yaJRpXTD9JdQm1LbsWfmRfbyt6GRKR2PaYTY4K78Njvip3MiDiSLM3bRYbf9ppxj7wJp7ecSLzZWex1dchnkqzy",
  "key3": "2wRFzpJGKvCEnSJsDXSsPmG32cmLQNdF2QpavwoaQuqs8TvRSJA6L4ki3mKS6dBkxXpnKmGptavBFqxQ4JnSPSFA",
  "key4": "5iRwKPRVVLU96pEWa6BPbWzaUJ4rGCL2GEz2XsoMxAYbkwa9vNLQ3wMrEyRifcdwKMLTu2YM9DTZyiR18Niq98Vt",
  "key5": "4ZrasRYKnkBcpgd3HZ8GQXQTLLeavwbyBLYaT1wZKfueTtsjN3sfzN8fDpLnLSLkCoZcNZk2i8oHQeMom35hmoqY",
  "key6": "1ZFir1N7E5eCd7TzmG6njuwHvmXY8RKYqZHXVpZM3UYiNXPBeBoxvWkTLXLTUJc4Ei1JrqJwf2tzdvmCNHys55L",
  "key7": "5E9b9cMtUDgdoz47MveMsTHx5CrPpVKnYD2VSsG8BtmbzJoVUWUsq1aobcVC3M54277P4CTQBfiNtCK7xyPz78U4",
  "key8": "4DJUpm6MHg1zQP1FpJvWkFKkcTYENrtE3NqczydS4C69KGTKWDKzmkQZtjZUr8geEFLDEnhCPU2iKoLwjo84cvwQ",
  "key9": "5k5Rn4TFAmLtZMzBGVaX4ncHuT7TvrXF8MxMZ27vShbFsc4JiQGyhAvxjR33Fb2SY5mCE5N9wpFM6AEYpE77raGw",
  "key10": "2ZdRGZnxh5qVCe2ueNmSun8RSWh4YdewT4SLseSHUrx1qkRLfmcPqPBijrJ5gKAJq6sPsRd5NPqi4ZS4YGpkd8yq",
  "key11": "4duJuwHPGow9ZLBK5tcj6GHvYeFWVJuDg67yYYbQo673a38uxJsnTpnLu1UZMKAqnZx2XZugSD9Xtrjz5gMPciXM",
  "key12": "2VRKaPdrVB6qdVhM8dVQHHxBynjAW6rRwpqRSrY2grxsjZMKmTCkt2oJw267cpevwssXzTrqSBALtqdQmHhNfcAg",
  "key13": "37aYxWGQdXw15tMp9naeEEZSVYLDiYKtzDU8oBxoDyj5nMyMdmM7xVR8F1TaQKLjmGHdLiYZ4QtHGDq22dNGuynY",
  "key14": "3zyWHErnDqEPNdZoxrztLrBZkrafhG8Pa56mjHA4T3z69BvgdFYcTg6GmCHQ2MutXpfVvqUdN4WHmsU6RruNyZjy",
  "key15": "2j7rYcPcWkB9K3Nphrr3vhMTyZ4kewN7g4zoLC47BNopJdMJiQzpBE8fn1ZdB2UQcbPiDTZVbykp6nutszZYXg1P",
  "key16": "2p5PREGbnVvLNTYeXV3KVyVvrBGPV4XY1LCgV6kpxgS1ZgEDF7dTptnZtQWWL5hu83qx4UqN43d3ouqWAApFKr2X",
  "key17": "4tHYXWuVG5z4GWH2KRJEGvr73J568hNYJhRymxZxQoghQx9Ywe12twfjpbbfMhx2BGmF5H1bWgrZvde8e8dnku4Z",
  "key18": "YYT2coCQahq5uaSY5tjeJCDjh4eA9a5kTeoWSMqMCBBLs46yf6iD8qDL7pnLpWgYSLmJPivYuJgWSw6CYJj8Zj9",
  "key19": "3b3QET7dZzzRHFDaveXTLibXdgAAnziLszCMPNXh3VFRfC1MMwTPM7Ya74Nt9A138rqFsu2XB6bsTuqhpod6ox2k",
  "key20": "4e7q6fVWTp25JxZs99wSKS7iXQuYQbZFUVNPoWVZyBTJq5S8WSR75KEHJ2XijK9epTaUyjq44DUpeFzLm7XxiYYf",
  "key21": "39BtPaZD8qrKDhUMQu2TLKtQfJdFePgtXZHw8FigSnAoxL5jHrcB1Y2ES9Wf3VUwJ8aCUVPGe9Niwy5Zqqax1eKA",
  "key22": "5yZzUs64TAXpV8rTDKjSKHVnraqLDzzgFz1KsNHtPUoK97t7BvpeWaxnFN9Qy8t52F7YD8WYv7oTMLTqUopcgHrd",
  "key23": "2UvH39Sn94BoG42bpF9sXiFij2gkRTKNeLHLJV18ueYvDjREUKzXDP6RCDfrFTdoVykkpoWWnokFBkD8ir48RDxC",
  "key24": "5ESaPRNVoxEd3VQ3p1PEUVEPgMb5jHfXMXDxH5da3jSaE7qHWTk1AR6wNjkTVUPBNQ4pu8fLXxAo3iWADfEqwEQZ",
  "key25": "4eeAUaYw7iGFje3TwZFvk6Da7FmeawKWj2kZpShPUYggbG8BuAv1Shwwugf7umh4iWs3QreYKFSGMBWK44RHnx79",
  "key26": "2zvquZQaQ3NbwdEE5zPNeu7FvkpR7Lo7SJZLvxhBnLZBvL7XyKneyVodAf5EMK3yigHUyzcfSxLMcLoaeFECu1eY",
  "key27": "5qsZTWGgtsLSuK7pYRmspF8JDBFTHts1s7nXLmGVaNHPdCg9ZPWkjUMDZ3W8kGDPtGNxJ5cCMNDZ1KALJgc4i2VC",
  "key28": "2aq1RdN6tdBZk96FsuujLGz6n7edxvbyaEoiPtqYLJZ6iVx1LRfN1hN4d87hq78ufgLcBrtR4DrAKpCpZv9EK7mo",
  "key29": "5pyeEXpUWUepjcBVmstu59K7YtcYTyCa9YccRC7RM1Euw2tn6foQtJEw9UxwyCDzNjhwQQ8BpCEG6oTWYgo7D2iB",
  "key30": "4kHDjR6ShVao6kmM6pS12Ta3rSmpi3VSaCa4XdtvfBDsH7XfCRMkycYiJUvQ6bPrUKoxGkh27Y2QvZZECoWF8ZtZ",
  "key31": "5rmUoEQgaZjnU86b6ax1emPbhnVoxcv4GXNapxpDqeSRUmmnquZm4rmE21gZG8cU4WhRx5Yj8v1L4UcshnXJdc3J"
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
