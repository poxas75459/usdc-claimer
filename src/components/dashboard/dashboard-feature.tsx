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
    "2w31NQBP7AmAEQN5bTYh1xR5X15oC7vyyVF1s6uD76Y3sivZMt3t8Eh3y6is8ePvpwTwJrkBKhMUsj5zjhdGW31s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWi9BWGBkq2pr1L2h879moobKTXncvqCaPUi9FaAAk7Em5VBX77kCEbxV2g8uPaUCCQRxnKtWjkURtSpBTaFkJy",
  "key1": "wc29janJfbrdHb7bz7wRjSPB4JkqzrhCDFNmwnTpazLbumJpcxPx7MYEVpcLgqyFkCgJWUWQRjTUmvJvjTXQpY7",
  "key2": "38FFLjiiS4qTvHXMYaqC3nk9i6dLtJKKqPm86MLLPsexjJLre23Q216tb6mm5SL3hQGuzG8CkhveeTffYsvNNPqA",
  "key3": "ueC2jDpXFzmqsipuMuki3oTYv4FXErgtZE8otPNrvDxd5kGTk2ZfaBtT1HuVnanZhFqYqMB1LVkFUqossuUYejw",
  "key4": "2QLZzapSdcj86BbizsJuR5FajMRMLcQJT72arxEnUHaTBKebpT7GkxcV76TBBeqRgsrUQTzzmTyA68N4vXwLLxLN",
  "key5": "38vwimiFr4rAY7QVR8s6HjbUwxVrwv27ZtBot5zeK1tk3t7CTQpQL6bRzr8wsrrHX1mbxBBEYaYWFek3ZPuVjm1F",
  "key6": "5tL24D8p6HNF8cPCp4RwJFocbseEDmyMsVdkwDMcHBUNvVZAerhajcekkBHPq6Q8V5xJPq9FoNafCtyfeWhucH1A",
  "key7": "2BW5wFDmUCzFQmZgfDHoPid5VpDWoVVxsECpfbwfAhstWgvxikch2tNjHoaEMfoCjcxbEuHyxJVQWRgncqoo5s4k",
  "key8": "5voYUaQi5ts4z9fRpWiVd7QRG6VUqdXzMDRF7UDhB1xducitvGHTcYcK7SUCsnN6pSCkx9NrWx3hsTTcV8yrtkjr",
  "key9": "4JJBw5We2mdhL2Jpyu1A7KZptHtU8mEGFLrNZEuLarVvr87Ej3UvMkz7jtoT5L5166Q3Prwy2jorB5P4QvpnKKnM",
  "key10": "xmgFK2gYbFCg2jNUjLWoQ7gbd7A8bJ2tizo1e819FE3pcU6afzLqYASbRgRkdfEsqHcZh5au8DovHKrFGFvk6ae",
  "key11": "46Qt61VUy96trHdzuVzwCyZzJtLacFEYs1boSmmYsjj415hfj3wVacbqyqxJ3DpsLRxyLT465gProN9wpQNAUJ6p",
  "key12": "31Wxshgc7fCU2YqTRXtqiVp4Ye9d44JhvqSB925Cy4q3bvwfqVX4NfJE74obZypCXTD3biivEtRfE6cSFwFNWr2d",
  "key13": "2iEuKYjAzwJt8dJitAXtd4qfVJBCRLfouEAMcepMNq8heHVWWQoGZd6jXkKtduhHUX9nVL3YVi92U7PjTPgVsc8v",
  "key14": "bhg2BJrSEJxiHMy7BZt5md7Q5LZBBaHodxMKjSPX91YGkjFYiVewqVQdQvkdttb8WDvTgXByWvy9T9BrQdQSvKS",
  "key15": "5YVQMBuMDTgymh7wJ5sef5Wft1pWSYqG3d272goB7KtEuBCnyTzU85JCw36gQtkLsc4wnH4bMS5QAV9J7DzyesTC",
  "key16": "63p6Fn5X8davcEgsTNrKSQr2hhB1kSsMZ67XtXNjgeRya1TcGudV4xwULKQy6e5PH5DsfcUHd3RLH4sqXRV8gG5S",
  "key17": "WoANgg9FQaUwMPHcg4gaFKAhQ8Wvgfbyh9muxkwNWV4QJZxcAzsKYTNpNfyadebmsxYrcS2mQwasa1j2swSRzkV",
  "key18": "5KAxEjHUVTmX7R7CqLWRBEb2MxazJN8uqD1e3jvotRF1kMzejmyCt3ZDxrbUgUXcedoEsrQrjSpCnkyLoj95PkhK",
  "key19": "4NMkGyvCmXt4fC6wvPzsyTCmbXYABMRBgFWFMyyKQRSK9i2FFeb6rhVk8i2oossuNYABiyW6iwTsUKqJiN7sqHws",
  "key20": "3dDRbhshogXco3x8m3Ro7ZpGLxFt5cMNA86YTBfokJr4ifqoQWSzUavgowm2Fj3HLeZQCJep49d3TAcEmvk9qyG2",
  "key21": "MAaRNUP4KCWTEj64XbKpStEt34oJw1LtxMLg3FzQaaQwZPYPX8mLoV86WcEYsvSDe6UKyoV4wXbuFqaoh96BmkX",
  "key22": "5TYumJNbSJeJFVztSM3cJaxSGibGVK1VavTyCULheLcLkTEPX75GcnuNiF7PTh7HNYZkoZebfnpzXjc5WYYkPT4j",
  "key23": "28phMBWRQvsbcAP8tgwt1KoBdvqTEEWJjEi5TzLG3xx4bvh5ycdLCPSfxPrc2TPZCk6ctKggRSZMS1vXtVqgYBNF",
  "key24": "tRM5R48WuEbkV2SSMpnpdUqfw1RJAiJGWnZkhh9C1SCosCXe9aVzmoRKoNUSBr1RwosQGstihKsZNY5JzK5DYh1",
  "key25": "5Rx7HC34rFCyMuScxbSrCunnDZmj3JWHuc46cm1F6e3f5wtoV7wMVCRrZnupDdkw4pukCD9uuudSALjR88iVtdKz"
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
