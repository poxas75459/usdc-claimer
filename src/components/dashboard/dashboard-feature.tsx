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
    "5K2hWpPtDsdmJiBZKVZcXXCtTvWJ2k2TVmBeseqnMxVQEyZL9rQzy5VmStEqrKiMgWruhAA6CnT6oMEmQcqhCvwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29zSdGjaQjb5KkiW3tn65nMmT5ARnn6kcnrfUDTAPcTBJcjaiDaCrDNhL2ZWCEHcAg3NVcCCWmVxkYAHWd2BS2Je",
  "key1": "47FpU61D4DDWoKApqALNYSRAx7fVdqyJsMP6mwhCLgUwoMKbiCzptQmnGzGFrmDwgjJjtnFK55JxvubC1uWVYHNf",
  "key2": "5VpcuNczRT9DF1NjbNmJAnaQoNuDyAZAYQJG1zD52Aj94QRFv5E9WW3AYNqSuAgpVzoVSA4DTJxjJZ9JfPRZ4W63",
  "key3": "2S2gtsBtMjieBPoduVpDKQ7ckYuPH9DQYd9DrVe6XDFRqn5uqxmEQHrsgSNaJjqBhgRmD1TCZL9TsF3HwVHFpg1w",
  "key4": "4c9YLEGc2vfTLaBzCwAANQBXREJdqUXFn8X5Q3XGm1MYjjJTUWpCmMsnVsLKEjPR4rnE57iecZjt3tHv7ydHw3Ng",
  "key5": "4CUyUSvnDHd48rBtFjdRPkBezQTb1YHKGhN9jvqUjnCLYJisbTT9qd6CwYXZ4iyhuDeiqBMY7UJ7ra8tewP88SpB",
  "key6": "QUAK9FTAQfh8x6kTvZb5dJPz5CtZyTAsiciDtbNYPGRc95KVVrremDCL4yHDPbR4PcZpzscSp9xA8UcKgrT49nU",
  "key7": "2xxNeshS9dbef1hx5otTjFyA8WFD3fGZLNMRFPbygYAV3oEhEifKuRrbhutnjZafbbMYbuwwwk3cY8y6Tnx5V2Aw",
  "key8": "334W4pgj3EVaTUsDqbazvxNezqwck1gA8FxTjhuaFuWwoPXE11WEkaSe9E1R64Xz5UaNfkYKVvoLYecM6ydfDm9y",
  "key9": "28BxLWN3UcZTbjPRCo3qem6Zj3pMgp6vF9ELSrSFj4iSV9p8RKZECgwKGj4YgLP1LGsxPbcGx2m1iafcH8iRdsdE",
  "key10": "3hNUjpRgGfDvjGHcnYnrZFJME7M1pYsnLvfd2Jvp72NoxFpeLeGXTKbhKkAFgQRuPkCAGSmLrWPCsNKNBkUmE7JN",
  "key11": "2sLDQciHfWuo9gUvtgGmdJp356gBocyiGvFmnELG39z1UNViHf6BEpew7rqGwxYhL12FfKyMYTGW4iFGobTzvLxz",
  "key12": "9QnXZ8z2XZfqba7m3sX9nR1Dm9Jz8wMo7M83B6d5CiyRt9eXHJcL3t2v47SZQEfZeGPxh88MhVQaik6UAP3Aqpt",
  "key13": "CpocqBSU8cSHrYfhWu6HaQqsVE5TfH9CKHRt2EAZP82vgQgipucbcisy6x3VdWLDSchNwRduHcMPh4gTj5tugk3",
  "key14": "4nDFtmFC9EHWmtfiVPPq67FTQhBN4HhC5qTYFzwtpL4DFvb4EuHVZVhpyZuc1roA1Z96yBYhRbQ7rXEMc8fZmu3B",
  "key15": "2deBYvNEwtkLCWMvsf1yaZdnVMBc4vQpASqiMwgFAuD9bph37emWjyUC4y14Z6rekNRz2fh7r6ukAz79ZPym8Hue",
  "key16": "3LEpNaJQda6nFWwnqANTCKf5F1pBNDVKdeK6Cr13nEafUfiBcrxCkvwxhhpXd1c1brij1UbvUFgjWKdMEpFHLWHa",
  "key17": "aWU5sN1tRVmC8YEHnUQBiYioQLC4deco7SsJQZBWMUABwRLvnwmPGWaGTc1avc7NjJBwHnEVFd5vYk5kUHpvXyd",
  "key18": "4ayoAvST9bSoHBwxUQfhiq7oAPF4qMFWs1VcJecxJ3Mj4s6WgwrqiTjebeXPBjCabKuLSDtqvwaTYvFkn88BZSza",
  "key19": "3zT9KJfLAmhmXVZ9mhTdRk6Nc3Lb2JpXH2MBD7w5EQb5hHJKUwEUS8SUkV3qtxC3y939J531qBT1hzDta3xNS1LR",
  "key20": "5ZGUNfFzJbKxp95s2sEXpjGekjsdFXFVbj1mLa7vmSd3dxizepZDuq6UP9c5g2gn4U5WVoYY91KQRjcuo2t1KFU4",
  "key21": "3xBMLe1bEVUDJhH7LZjCjewKJ3wD3YYrr9KEYhEJLbUbBA1YXrsFwECxn7KCRnoXhSxCVDgnntQQhdnRmqmKwfCs",
  "key22": "4ZaTndCPn4nMMHWQpiovCUvCzgadmqDVZCiruXL3VN8FD2e5ENXh81ziThvwwgnpkAjWY3AwTHdAAKY3eR1MnvPr",
  "key23": "58d9bXPHoNyhQCdMCa7gUNhDNDVnRetgMBypTDrH1R7CkBwVVEbG6gv6M2vU6YDby541cpmQN89Xddm18muknhNq",
  "key24": "2sk7WEr19dAPDDhbKyWB4REBJ3K33Ef9HEx1j3jhuNnszc7HskYHS5JaB1ctSJqjCruUPZC8fF7nEBm1BNdPKzJp",
  "key25": "uL1rs1GHryX9BwTczQm3xLEahwV3cpyefnRkWKqYX5X5ruZT1iTj7FzGNiJAtpZGt1LMboFmF3fFcCb8wfrsWGi",
  "key26": "44x3pLkYxKmSyQsa2449Bm9BRWQNZ64xVj7WnGCNtLahECkLXvMRFGUTV1FWBafuqX956NiTp6MGZ7KdB9Xe9J9S",
  "key27": "46jGfPueS9RPsGqdB2oFVTUgqoLuhbYAwE1NwMUsHdN2MWNvgL9p44XbSfU5ApuqvqBwRELLsmqDuHrfHiNG1JmQ",
  "key28": "5vMG1r1YuK7Dtom36biYJ7bMi6moyCdxsvcn1oSUYcogMMKAoZ6bqeLAFQMyaJZhqDTwuDVDAFCFGa6DAWRY3mjc",
  "key29": "5t2ux2Q2BzoEu5k9iLdKn2EgVTdAJA3doKy9qJs5GrgLKHBFMd8VKt1rKgZdemyc5vTeCt8FoRNfTbxwot97TNYa",
  "key30": "4cX2G23ca5KMfTXD1xtF2kHwRvZxE48kStTDbVBGYedZ9c5zAK8J1ham1CS38geiAnNSvzT9s6kaejxA8ZRVJRMe",
  "key31": "5FoGMzXtoR3PZd44RdA3dmaMCrc6JdE2rur3LJxdMe2sENNgSLD5x9Nnpez9inXgL2uht4jxhNC5hodkSU2P6xKr",
  "key32": "3LWizQMpX7BAMMEbVxHxBCsgrbQPmhYPvjwWbgpjKtQCAigdedSX7BdQ7XTGErQjBQVS6tmPSg1A3JAsKbbZku8Y",
  "key33": "5SfCT7omUCMN9H4J7i8ABoDThPFoxy53msggdmkQ6DXj9zrTkzXviuAssQWnGtXtrYvnwTSLU4gfVTYDX3WoX7r3"
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
