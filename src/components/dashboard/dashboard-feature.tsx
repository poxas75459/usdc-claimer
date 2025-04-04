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
    "JrvhUmtuBPgz62jpm4hpdLA9XaAEejFfWZcwFJVy4HYcLLhNAJpEowi77jRXfEsGRFGdGn72hHWcf7hvNANeswb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kicXVvA4P2i2Jn1LsDW4ucoJiXWZ1BNkEkzgiqc55rLo1nmbpZURkPQuvzx9TQ3rrC26D2PjEMzgPw9PbdYQB97",
  "key1": "3J9uvPjspGarHTJhTUFPeggV747t32GPNjuD2BMBX9dBrUCSkukbusx9tVun4GYF1scuptKZtdAbuaoBLHtqKTxY",
  "key2": "5YEsXJabPBWumqax2126Byk2xwcVrF4f9UbTNZfDqmoE67iwpSgiGtwX6XdA9AVrkyymrpghyG6Q12wPSaUW9R59",
  "key3": "2PrB7Rxman4qCJfMnhkiJsZUcreij9tg6HtdApEDRpaCQUEjeEpgcZRdz6bRAcKZKxmZTLNLtygRSyCxvhjen71H",
  "key4": "2jc8LLyXRBt3Y7MxP3YXu1i8WJqS4VrMzbvExvDiGHPHGjYJbzsy4S59KdSm4siDgXibmvTEimUrvXAMRbrfvK8e",
  "key5": "tjt2Vx4KTzfiri7yj9wUb2okdMLEdpxzAjQKgXTn5fbPbtANoYhuJ67hXBaCLUXBzywCHrBCbJV8n89Ae2uBdi8",
  "key6": "3h1vRTdFekefXipms7Z7cK7AHxQPgBTS6CpYN4MBdmqsUPLory9PJEHt9AnosT9CkuojKRbm5Vqy8hdudd7WP57Z",
  "key7": "dzJSrYEU9PKF4npGA3nFh4ucMFuepGKRU8XxAmub27AffLFb9BYXM3eRYRc3C9AW9VFV3JZfKamfKycRaJLqToM",
  "key8": "63gpSMYe5nxyABisMKJ14uSKpEdPakjEhM5XwUXTcxUCRLfnuu8L5U6uuMQotcekL749JXbVAKQtbVwJp7SkYpQ5",
  "key9": "5FiaE37fgSjWUhcMLTFaDpuT4nMiH323WASeSfpsoPjFpPc9eTvRZTzCyGeYXmxsrK1QWiW516P2AMUrottfdy4v",
  "key10": "2UtE8UKLWDmXy11kErWBCBgspZ3zafywHxrLVFXUNmgwPfcmCThhUAMAnzEugh4MrAKdJ19SC9YEkU6zBNZC9Ub3",
  "key11": "4u41ooNp3Xxj9GGDDqUKnRcx1oxSQXYRMFjAKVTRz4CPP3CGHqWackrmgzMyC6iZbvDBDNWtJzmYgxwuLxX9cck1",
  "key12": "2r5HeNR4DPHfayuQ2ja38hMXrR6Y2r1RdVC1dg9BtWT3EyzgRbUitF4dfWZAoNMi15SiLoD24Ddpgt2PxAbcEfRd",
  "key13": "3n3GJV8dpbTkMit3NAc4mHNLQyD8L1dfgA4owDXHvP2oNK8urMgnCs2LnZodFHBrtsyVeeUytr18V47Xv21Q9Q4s",
  "key14": "2YSUkSbWvLe7BaVtXHpqD5a6xanVef8tqdrQ57e8R3sdEyzYAwL7WApK8JsfFUJuvPNW3iNzv53N3NcnLkZc3Bti",
  "key15": "5SzmBpEvJc6dohJNjWcxdonkiYyym7UGx1SsbryRvNnKtXwxAq3cvyF7ZH6VGb4xFLQUDKMPnhf4nZX7UMoTqAMB",
  "key16": "3ygWrGfKHyBjCKqLb14t3GYFxALecPAD8MbhzX4NbxBS53VC63H31RfqrFo5YyR6QcQY8MDPBH4GbkKGgSmMopGd",
  "key17": "5zThTeJhva1oNT2GWcrMEi7ZgTnfZSSzEfvgjevDXky1yFvzxJvHEEHNhCLuWRHqw81gDE35uQG1JFPN3e7PB2t1",
  "key18": "6zk6yXNg44keSX8D6SkjVCFxZ8CuSawzMKWBWuJqV6icH2mMuR1qv5TdrSK1Ead8ap2HzzXMB1AcNU3cauLdFR1",
  "key19": "5pNrxpsaAHpHBnrve6t61jSr9oFL3JCwtCk3B5qDf9wwZo5mvb8NCFeF9bwapoKQpK2yyDpXV6zpBtRqjqPmRgPK",
  "key20": "26vb76aAbG1XXuEk2wYpRHXWbwWr6ht9AHTpyCMGef5ih7zepkJ3tTAzzeVqyyBS3UJMzjVq8kxTXnyRX7bWQrEV",
  "key21": "4uQhT6v7LJqAoCDfiMhzj1bsn5z67ymUP8FQYypzewtB9Z7cPhUBzc8azn77GJcg3Un9U7FBUbfeP1ffKxEPYrhL",
  "key22": "3ZrNx67B92kDc6Ujeymxrm3r4debmhEkgZHNbrjW2ojWck1yWmhXMicjKHmhJnmQgvjoSgTXqnN4t1nQra9H6Q9T",
  "key23": "66GWLzeDFkBiTq2ceiQ8soSapEwGPBzaaLVZTrkxfVjThfoEHL2Ye9aSNJkyoVSSYGP8VkzNNjPnbGQKb9Mm65c8",
  "key24": "5gTYTopMMnEZjxz1hQ7Xnv2bxNiGx2345ujJCccXcw61vigEM87ujttJ1DXpM4AwF3PTMCAfaCXLtXLvZ3rwyX8C"
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
