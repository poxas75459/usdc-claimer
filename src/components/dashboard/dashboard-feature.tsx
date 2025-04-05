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
    "5mXQqeZJU2g2v5HtyeME67Ss58k7GpNd7yeD6umSePeJAjb18qeKWB26GMWdJW4VPXKYFoJcfjeAHmKaBo6J3MPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjsdX7pvzf72VnmD359WsVQn7SvZ6MjEnRpednh4fHQEtLGH1i3Ho86WayuSgiKMPZwTX3wTmqmQpUKbHwcg8NC",
  "key1": "2Z3UV82dV2B7vF1aGZcku25qH5qbMNeiJupeTBnBdHQg4ML6Z2bkQZcvGchXU7nNAHNJZAEqeg9TKJKWc1ouN3in",
  "key2": "3Wn5UTMViXt4DDy6B6yQ8xH47GE2aixkXHVS4DV79aRDcaGmG9zosJQeDZKSE9kQvTEocMcU2RYrYCR47JDTVVSY",
  "key3": "3vScKHSHJFyAE98VtXhTFp8v8sdxQTLU9ZQB9BZpGktQ5rBofZ5AvhwUF7N7LD5fk2M1C6PFMCW4Y1cc3PE8s35X",
  "key4": "3JMfk5SbhzsCtdcqJpzz8ugwrEjitjpfR84CQjVn29cs6pX4fby9kuTaU3cCz9yWQ8FRFAEfF2S85tFMMZQd4JP3",
  "key5": "2kjuUPbrbztZQaPGwgu3iiZYTr3KLz4QQ5ZtbbpqxBtKzRtTomALwnkSWBc4tFSB7sUMNZWCjaiPAxRoCy3RTsJu",
  "key6": "ZuUBMijptXXU54eXmKhEuNVRrNVWBWSSnY4i85ZYrwkLMt4e26dBNAJaSWMrx9Xh8gAS5bERhVQbFMagKw7WzgD",
  "key7": "4udHwd48cyhX4wkpQYttipFc1UzszujjXL6ByiKCtCqE7AycaEcjJKvrWcQWvd8Dg5xRsWY8RsxAZJquBZYXFCeA",
  "key8": "TFJPxocJfFtEqvsDfcRpQtFLL7mnwfmQgdpPe7Lx5nANXczDRAYyJTKk9FPoDzhLT3aF3tj7kRAhNy7gfmbGs6y",
  "key9": "29wQqNmaYZJSb9VbXzPyS7TJCFHANqhdG4NKvEX1axnoU7rA77UfxcTcESkSTc1TY6vCtqRaohkACfUwTGHVJrMe",
  "key10": "2w5YhqoVPV7HcyPKUcp8NBLNi3zjqqjrjdBzhsnKRACTg4MspENy6nxEBKBJHsAsSbived2zHukuq7WF2qPkaoht",
  "key11": "5nfiFdbxMqgyr5deRuReNLn4wGuEXKnR56VAr9Wd7sAtAavR44mUU3yjVLi1mytqDM9k8LC8xMoM54sJrB2bfcBa",
  "key12": "2nu3LBAHBMZukSomEY6J3erjuCdnYwS3iEvnzWwJLkLYwMYc4TZU5AFMF5JLbgVvN2ZYhRcA7fGhPHqT5ApXBfhu",
  "key13": "3QjohaFXVoeLRYskta3b5m2nJhMx6jYVzZeoNdvmc7bjE7ditmPT93SE3Xa4qiXQhF6JwAYrnBbUSMoWsMJMPt17",
  "key14": "5jUoYFkFUPNuDvtToupg2Mn6mHj9M5ycuYcbUKfxigM4uDHX6K2pTqJ9J1FwoyGAZcDwYbsHjDJgaokc96EYWckW",
  "key15": "2rm94x1VZVXZtyGFgUrDZErKPENcpiacAD4r1PiRqu74crCjN9V6GZ7KexNsj8HKnafhHijB8e8arfoXs8ovoVH8",
  "key16": "3HszRtGSvu5QLDKbpAxxv5f1ciYEGbCeRjEdSuwUaPoF7zURd8wHPZnJtzLe5yAFif9Vse5naCS7ENm6btMoAzwK",
  "key17": "G33FT5EHS2G6694rrxwxfsvf7dCS5rAmnM3aFGfT5DwKzkBrgwGhakRNVbdwKsEbHxqqAMWU2mhuL43Keu45LSX",
  "key18": "4mE3D8krPvv6aPRSzScsJjWCHpR5HqE6e9bqMGq3jM7vtMJmP8DpwW2h79bPegHCE4ApWUSiMGoPjc71RGDWLwGF",
  "key19": "2emDPSWWrN3SeivaVY8K6hjemuNSQSceBzzr3L4xx4Azs7sKHbDtjW4VqT1FjL71W9pXUuQAjVtB9GG5Dx7aLT3b",
  "key20": "2F6HaYnZJSv5YCA7jMhKpv5dZHF9oLPkEVjAjXwZZBefYgeQbqVBn1ohwYFcKxQr8u4LuKogGAeG2dp6Fv2Bb5hA",
  "key21": "4Q4TSXoyYuGyhFR4HgkuvbmqSpxhURGczbyAj8ep1MzqzNQZuC6vp7jSsKg3zdi8k8hNwRudDXpFJU2bS7QWuN7X",
  "key22": "LC18rV7q97qYaQEwnfFdELA6cnVftPJfm66RNMZp6xprUsasJRvAdmk2XAnBAw9dNGgMnR2zfYPDecAR2EM5mMH",
  "key23": "Vv4ztC44P1fi9VCxEtdgE91JMFeVTPW3UdkxAz8feXfK7ieLew2mNzfPUuyaxkQieqQCykefyG6airz19daFVmR",
  "key24": "dx3BQ8t7AavHsDRXJYGSnVEckvM6DBberVo27UDUMgXVSYRP8oDEAsXSmfwgS5AfwwCjp79syB8Nzu9xJaAefaS",
  "key25": "4vTE3UHVKscMp4Srkn4xhvuf7a2HExtLcoeRoWxFvW2mFc8cK4oujn6ZxAu4LUC5ZE6nXc3GXV7eyw2pYF3siaS5",
  "key26": "24PotCoFoafCMRtNBSVH4hxbvajNJQ4SSAVNTkXufa1Z6TGpnF2hVW513EhAMMdCHyY3RoV1Acssf4Xv2nYUZRwu",
  "key27": "4QzvSHurSh3kkwfYXVMa2JboHdZdmcvwwVXk2g8MfttnAGx65Xdj193JtMKyzXeD5RbtyyYC3qQWuYARVbCgoMYx",
  "key28": "31px79x6TiByJyCTQAfPBupwEhWHE8wFUb7y7KQz4wPUW9LYskyzLroY9znAVHEvRAze8KN2WjUSQB1M2PPSMHFq",
  "key29": "2stAuhvYZWRFsA7bHidpnjqmYBvL6HJp7WVrJGDQR67YJuH6D3uB8CtGKTLeEyC6ix1rz69KZ5ceW3LYKVWL9HzH",
  "key30": "2gMEH4hu3E1zfqt7gR3s8RjQjcbBp6Zro4JJtwz67HSbGu6cScaRuzHwtJRYGgGQfHf1voTtnGdrToxDUWG92pKk"
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
