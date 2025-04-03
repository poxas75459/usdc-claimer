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
    "7DMQSyxy8LLeB7HV684vzQEFTkZRbsDgwJAHXmHGVTR4NW7TVmh3uJYgw8u328CjRN52Tipm6KxqUW78kSZ2HEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYGKGtbaKYf2HBBcuY8VA9rVxwdXNWMkeZBffBbSoLJe7XX2N765Bh2Lhf8fbW5xM9RvNNFh1ZijxHPHaMu4G7N",
  "key1": "26ae6jj6c5cpf3gaDZE8rwzeTrYy61Wp9nYnigNqHkGeFzGM15pPPiFGkskdSzpRTuxdnpsZWKJh1KHCxaoCQi8m",
  "key2": "2qkNVnvxvv5EdZwybzdR1rUgeeBN7vx1oF7NsExRfzgeABLXKsLyehJ6VURca3agTACzzVEhxZ3HPDGJV6MxTiKN",
  "key3": "229oBkv6CGCqGQmHto9RQScY1yij75A1n8Hx2XS6DtAuG8CBi1b2is8q5W6AcgCiTXNEPTCe9UxyxR1qNUurDKi8",
  "key4": "653H1F1AYpqCrx77a5igbRqXJEBbY96SYLKedDUD4ZS2R1rvXdjPUDxRNWQaTwG7BCv9NR5nCguNFFRmJJfBmgw1",
  "key5": "4PXG2u57ePo7C6NNkFgfBgpBtGX1nhA9XFgcCjSVrneuZjbr4QWQYysxKAWaYQeYUKiu6rUnEpiBab3Lan5FbvAX",
  "key6": "3QYkWNrEmjWoe3CCJBf7ESNP3sgrHWUHt2Aeu9FKhsnvUmd7wu4e37Rhf9hefvoY63qbfTNmmjsEPbxZuYhDQhS9",
  "key7": "2oQfbNpTHUgakiq2FKV6F7avdSft6geWp3PxuQacProvLqZcCdXf4gGxSvZkfzNPdSBgTVFbpFbT5YXvMGXKxU5J",
  "key8": "3e3yEBAQxS3Hy18dtgH76gkL115Crr8k7Zn1TkVNJQ6yJnt8VPkUjbSGxegEUeGvGetDtqniujfwzgASsFGxzekH",
  "key9": "Hh4ECtw2vnPyWs5ThjfpJAcoHTJ7Zvj71mvFshhvv9wzMUxbm8udyod7b9z1Tgi2fYy52EtB5SvKgtu3XSvBsTx",
  "key10": "3dd7zXTarCosBycuzHHt2LewTbcUxANCxZr34FL78KhyQCe9VrySQukZ3LVkJoBdD1ayt83V3kng6MaWNnNpFSz2",
  "key11": "ejpxTNoUyxgm3Zd33Zqs8K3hxR2x8FZCLBJQtmaHitjGXHNhRFgeSy8YatzFgFpNramao3ZkVWjgTmp27Vsv4py",
  "key12": "3CRhzxcnkvV4qL6QdvB16JPjwqA5sTkNadojCCHtK7wJUsuBfdwjpx55s9oDn3qJFsbukJaAXiqFMaucH1Cain3r",
  "key13": "2AEbv8vBRrKa9SF1KoDFdg1fLL3RaqY1ocoBJoR7RUGm4zQatkrWGTcbKYiCqzrxSf1tJRbpZW6fC3PRgU1Mri6Z",
  "key14": "GYKuJFyUpaHfJk77MftJ6F6oDVcABV46PAv1iQicZz7Ge8U4T8WN62HGUdxpDabVkiAuzhk7J73kax68bZ5hK3H",
  "key15": "3ghobarpmsLc3Fw3QNK3YYtcJx1afSTH1a5DsqSZvyPPcjTKz5JV93CwFiV2q8FEwR8LsdQKLKjGq8r4G2ekWSn3",
  "key16": "CNzmku9cNDBa39rDH7QccDxC4qgbE6cYcADU9ZrvAUGieNQ4YEZvnA5dqctwnMRd38fNMuZcmf9FVyR52ccUvhh",
  "key17": "4KN7dgq1UDFEcnMRyjhECnX4SzG5uAshoJQ26ep4eJbZZZhqfYZxtsMYDKGycK4NYZhaM1qCheASg15KoLpcbNvo",
  "key18": "uxNR2j652gzUqAGzxrabkGhWTgC1tUanY6Z5RF8DFGqxoQhk7mcaAKmqMtFgC6YyctVbZn3xhCq5HLgdbnJA7Ax",
  "key19": "3occnKH4jXNKvSenxmUmsuWSTafFbEGn2E2i9fSX54SkmWg7NQ4yMGY3nNe6CDyCmbt7E1nCQxbvSnMbW2o3PmKd",
  "key20": "46cqW9dJAD65MD3R7cv3Bwmi5yvLSX8pGW2BPvHU9GucLxC6QvL5KCP829cHCrcSBdeZtGxC14BqrjPQTmtSCTQo",
  "key21": "5jiMo2yXMB4f9dnkRVHqqfJWFmVgZKLvdYkse88ydZzgHTxU7ALUdTEXXZhwAmPRV7Rz5xamkvgBNpQB7U4ciF46",
  "key22": "5uPzR5Gzp7maMdeYesZShxmgADevEmS4dyaGDcYAvSM51HK4GaFbdpThK3RWVm2ou9vCz7Vj5wYoxJ9iFnM6BS42",
  "key23": "2NAePqpNZoidaiRJs1iYaYE2rUV32d113MbQddR82GCruGVh9CPEexpyCpzD2qzdiLVvvmCwj19saS86MzCdwXXy",
  "key24": "5nu3K1TNJYqWMamVhgbddKutKS7BJWjNrrKVVAdgUzPFyomGvTti7muZqc8zprYJPj7b4ahU4MCdG9gJdit2Hnwt",
  "key25": "4AstLpyiMqabbXm91H9AbsdzCbTqZtyiA8QiYVnbXDh6TPJjdp8P5xDxnzPqv3juLUhnzb6TtxBSox4gmuWiiKPE"
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
