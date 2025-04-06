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
    "4P3BXKR4qEDXmRfkuonEu539QUrs5yREgoHzSntvh4CzPMLtCZ1jz1tTSNG8FSKX4BFrNbsfcGGzbciyHZktfsKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xg26TEm753nvUbijgUbhTaxGestku3qUizZHk19o5i5Txfpz646AhLNGFCoh3qRXdsnAzohuZ5Xwmo2Usc5kKNH",
  "key1": "5Y3RS2RdqxifDSfw2yJiVpFAmDoDP3rrCqWgH57CHSf6FWXocyKy3g69TGovBuTCKEx1DTAGFoPZhm1TeSMjAdjP",
  "key2": "4823QJWb7KjxEYh8R2p9cEQgS4pR5n19ZLfbjgPm2JLncsAsXiRSvv4QVnQGiUVHFphqD3iN65gBRoXEXDAoUMpe",
  "key3": "61QrDHwLJTZMAvJDpQCXuptcaFw3tw4DASCBLitm9GspWJNeVc1vYimWBNXg3uAXJY6cexU8UjnUDZ4PBfGZWx9q",
  "key4": "4WVTW2ZpfjBP849qzZ7xsrb3yaknbs9EmNoCoBdG5EggQwwiYGfmyiMEMDuiJQpSQuwzeZyPwrrxXqNSahh4bY2v",
  "key5": "45EPpWrvM2dri3Q6E7M1VwC2iTMZ6QcT7mFks7duneEJAE7M8QZYRwVeETF5kWNUTmLWijMrY8iiWWqvSsYtGhwB",
  "key6": "jtgsi9Ay6nHKBtD149QiSVLDs4FHuBYSgV6mpZgj8BLLMuJfZDMzoucTT6BhFdnAujRsHL4UrmnKStkPFvpP9Dj",
  "key7": "2VDMmwAZSW6vAMA9BQ5hhnt5UMT7bVwxGnzReMrXJZ5kTetmj1973jbXEbgoghR4EEkTu1cnx5sH76jD1BbGs81w",
  "key8": "28D5peEQcyRDkTJLZGEPac8s1Zo4vTbby5CtLeoAmrEFwUbKhTzwico8g1qMBWfmfdSAi2MhFMWjLQke48b9HUJt",
  "key9": "6REbcgXB8Zkxrncw9EzZa2zN7fvDadcrMvCUw5Dwj3oMJaacBQw8D6MFPUTuSt9D3skGj8WwWh3PAqpPDfX3vzu",
  "key10": "2UzvZBLyUaHkKJjwEFvbwrSHX39TJ4jDqvGXoi5oJVDTNNyj19pfR17keK7qCzEBjdHwxRqq2Y8PzBh1k5uAL9s1",
  "key11": "3TRQQVjusBXLKMepTNUcdcRtLf5F3cotKcp4o8RgquaTenqAv151H2Kdss4RJsTSS7aUrbYJpGPo9WyRQHMT8BsU",
  "key12": "4i5bQvUqaQEGMjB1sQSVx5AXKhv4SU5XEHFSbMYP2bbRdwAHJddzVq4CTu7hn1z7hx4mhq3gJEvuyhCnhMonD2ec",
  "key13": "3PZZJ9k7Qh57MKzeDUrtZg18WvgtsdqBzXStihzB3SFFJpjbjVHwU9Du2917rTSeDZZaGfiWToHiUxdF8U6H7VMG",
  "key14": "5quYiqhcN7KPmTVrN39DQqdDx3e3PPSH8HuJAjU5eRVhGAo57y1r1NKCst5EKHKVTgavvw5sciZHUEQCq1zm87oW",
  "key15": "3td2q6fLHR4RgVnYiih3iu22SWzF1d1a32cPUVvp3CU6KDsYA1SV9oUKtuF3TS25MKD9HkPktAHjmwJjz8otRE4E",
  "key16": "4AbcHaD8fz8n9GYFS6MzQeXZck7B4et9zGdhQLXUyTaAAoePt5gWbZsGmWeLntjF3sFBdyy8t5tJQTzbMVUDmika",
  "key17": "5D3XgfPKJDRfJu8yBvD9uKJP4u27bdUjt6jXetiAZjZwcQF7e6a1hHY7d1t6LWayhCGxDqBpdpFpA6VNXKwC4jJJ",
  "key18": "4dizNy4AVNBFAVfZPFZpDFDkV6BUjDfaifpY1da1ZFfD56LKjf2dYyAEUTDFZSJ1ydBp4iNy4H9tPU3c74QpesRu",
  "key19": "4nNCHh7tDj6arKJmpLDLeDCuspx5ZCRt8vKLJXQAozH4dr1XohtpqLmya3X6rn5rbbUjkG6cHHsGN5YvqZ7Q1V3m",
  "key20": "3qZ3nETiyAg2L8AXiQndpMcxzMfYgJ9WeLtNwPyaZLneKkmS1D9cDqVk7y9Q5mUTZxGqX2xdRavpiEbfpBBoZYxs",
  "key21": "3na2RgS7G32F2eNY25hiBEzkPEwWi3QungeS4dwwFoQbp5mB5ngq2Fjpfr1EgmspFByadAgJbEA2Eo7n4uzs5rJ4",
  "key22": "32F6BGaFGJGpUYutBDW2UBBuGgPmEdtaDhygzxfsupu236JMgmGQh5YUB8Hhcer53Qo9Pn4ZD5sVZThuboKSmtUY",
  "key23": "5xuoXZefqJBVGQXprVeKHjqjzWEQg5y4bCowT9hVTNBqmQ3H4rBnTuJcR2rBACKEbfetxRJeo9RSncRU6Ns4qWrm",
  "key24": "oC2SHXKabuBsUCfWsnmrw41nYqRHYHthfQHNBH6xZoz74EPpHD36b7PLbccC3MwqFVXth4E8SxvZxKQsVHdtCiy",
  "key25": "cazXz2LhCf8wW9WFtJ2jANLPXVER5Gz7cHVjPV1yzv2biTWY8R3VfZbHYh7SEazkFhNxCJH6MKUb8MNNugS2aMT",
  "key26": "2CaitWrgxh4GwhKviDC1Pa3sKgtS6m9s9vc2aGb1nryNB9UAxpgPqbqdQ6BAJSmmVP5kFQN89f6av6hfFcyT7Pkn",
  "key27": "3TLKTpTeSAratYxbRhmzsBqnSSLGzT3mY939HMvo8DzZZdJatwwqYvqSoa9sop8Va3XhPFXSY1aT5FcWN7xst3tw",
  "key28": "mSfLqkhX9JzufMXiYb56SLd48wqVngyyppXgW9JSGRSvsyx8KvFQuow61SznSB2k5gWtCMvAi5X9bDzSwY2VZp8",
  "key29": "w7SaAhDoJjyV8kRNg1okS7Vextu8VNjiNwGUso9Fwz2MmvLvKaoJ6vEGEPwntuNUYZddivzZwdfPPqukgRW7tB8",
  "key30": "4WDA14a5KALEkcTkoLCzYX4VwSzgMsqUUdphaxxtGUpEapbCyLcXCoUkdcsAoSYzZKGor1L3ZGehvJSdAprMdXny",
  "key31": "EYkgZrXgi1kkjjDi1UN5b9hiHq8eukvQ4M8sbE7xizkLJk72gXsVMrRSzb6DvdEZMxn7UxTY7w2FLiNK47vr7rC",
  "key32": "vxpd2sysUrJdqLnCvGAawiTyNpbF6Jcb9tGG78KDL7tSMTEgZ19XmrtDeoyT59DUjw3mSuDNvJSBWBJr7mTfQ7Z",
  "key33": "3cpGrtHVjC7mcsm8a8xSabmNnubAYTwfqYigdAoWWMoW1Wm1do3hb9xYwJz5sCN4nJQDv5ywwijtT3px6nYZDFBy",
  "key34": "558gLZFyiRj169BDm4gdWnUCZwoic5JmtjuuT4oUckXbsFpFwq4T7k4urjwC6CZAFxt825ZpZGrsCZKn7EvUj1EK",
  "key35": "bbsAa6GKQdtAj39cMVL3dKjzCknATMLbDDVLobqG2fEXecuoaNSjUHzgzBiGJL63epfDSVF2TrdVtrf6Qki7WbW",
  "key36": "4FvTcjj6ZA3NLhYtfSUAdcWyCP5arWVF9NVMo4FiNu8HuQubmKgbNgzBnvVh6nQ3BTb514kdbAWx9P6ebFwo1Jcv",
  "key37": "3gpr4itbV54LqHVu9jMsp7xybtGfrpxqLyH9imrvpMs4rzii6h3qcSdTGrhF1jRpnjGX9LgKkjnakyyLAimG4aew"
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
