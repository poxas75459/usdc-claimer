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
    "2zZXp1CFwVs8DuDejdtu678SRbDNRW2A9xt2Mv6HeLKBLbT9eLYS8HiJCBqV8cHuaMFCCVateatzEDc7JTarrmuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M15P8edo1GkQiqejhNPLzU98rrDANhq2cfp9aCsBbfNze18WYf67miKF5ajExwwuWxtGVNDsUwCvUxNAfoWyLqQ",
  "key1": "2CRz5hkN9gZMhKWoreyzdAmVFk8a5sTLHPZ2Do2zejrUU7qQDG9uFSLQxK5L5HjWXEeVwgNbrVs3oySBCgZ2YBm6",
  "key2": "5SMRVXyVfjPp7VxuUqLUg2L2jzCPUgMvW7dPRxZF6Z7tUimig8ub5AaivCY5QC6i9u4zg4TfbxWSH8hoVoP2zWxg",
  "key3": "31EADDtXdES8TqfN99yBzRxF5D7HwUhY3Np4HLqJX4wLp8F8N3niCkUySsHRcRvcgC3eDsz4HH6dBH7764KfDAJy",
  "key4": "27h8pu8jVvSCXC6UEVcug86HreESNXNNfALcx1qRjzar4rxBFEn2s49u1KEHKdZ3p1rB3NVNTFAVP2oLSNtbjcGg",
  "key5": "bfHp6DWMAJyfZGoXRJv9p8V9AAGyGt3icFuDxCnNuj6D1m1BhnMABNvQZKGjY5V7TJkma86s7m9L1SSa9Pe3sGR",
  "key6": "5gFZARsps2B5SHmZfBJ1GBm3TZ4XqXNPnp1HUJJinkd2Gi1iBRmJpkms64aXgA5ybEqUXdV2ecAZmX4rd1dx531R",
  "key7": "kdjoWqR5Lvc4HpH3ZeTNAu1jpCSmrYz1LzX496XDHQeaCUrsaNCLqFaaDBC8YEtgRdAefWtDv7wf8TRknbWFCPg",
  "key8": "2Rsd9VfuY1b5yD2xjKjAPpxFCeHYtbNYZhaUqfuhYxQfnZZ9sQ3bcD7aYQri2nUvq8Rkn3VJSbWjyiNQma6yMPno",
  "key9": "2f5F59sACx2YnjrjPS9Q8vdoUYZqeqCjNSb92wxkk1adAHbpDdiVM4s3deyuMgJiRY965Nf7kVRuoFZpUAc1a3JB",
  "key10": "4vcaWtpkJS2sZJxbFb52rQCdZg26fqucsAjGnhagKRBvfyDF8ySTX8Mg9ptR5GmhAn4zAv8Rdi7Fo2xh2ADdZg2L",
  "key11": "4sZrhbDhV96DSosorB9gnWSRDMfYUB2ZXa9JSuLQGLVfqxpmskeujyPuEii2f81sig4sYqk87Rvuj7XpyKfjHbza",
  "key12": "4gW9eyjvJS1KWeVdHyjocW5wTmRJKWpwSLkQBiBGKzBXRbnoyboTVWhLwd1eech5d3KykQrChQpScbtqcVKAqNDg",
  "key13": "5jaCaazYFNJRvEc9AM6pbpjsLRxTGH2QU4U1YfCT3eSV8itkmpqHDxUHDrKymMpuaNLX78MCt6XxtWv1kciwg9PB",
  "key14": "3B7XgBdCpHjwJKTmzYNiTVPxuBvxz4b2HNAWCCbdRvfs685tZYUt5fzCo64b923KrBN3bKDfGjkAbfokWdgqas27",
  "key15": "31tiYDsq65dyJSMjvfCN2mjRdFdKScmEmNKf2KQEi2tYwBsJcQ7BUMtCWiLDausNtA5TLknQ4sCij7cKR2CTNHZW",
  "key16": "3n9ZELA4v62gvqLrJhL63rJjDyqt2MVHord4aPPZhZ2Smsa293rtVg7epxxceAB9d15B4zMe8tZC6WxKeQMNUUgh",
  "key17": "3UMUd75hroz3fkpHSZ7cyk6abNUYsJMcTKBpyEYdbSHEtMGmZw921BMf4TmYSNp6Xy12EPqWAV7zBsiK6UEpWFTU",
  "key18": "5BkQg4BGbbGcwWUE4UY2KzxDwKEtFvoozV6BazNcPNytJ8jeXbv9dir729bFN4ohjyy9cLKJmpLMv7H6rt3tmPUX",
  "key19": "dW92ov3UiGJ4gJ7xvhkCWfYBppoccotz6MTGAqxhhXJdu2BKX1MqrXkCAdWtW1z4grHiJDc1qZFiKQDNDeJwFu8",
  "key20": "5888KNC2nWtAiLEXAMhaaiPuyAZMj7H9S6cW7HzBAjq7NTKTED68sREf82tCnFx3eGfivRhTrPNGTmMCEirYySai",
  "key21": "2AiQQoeXhVTBNyPh3RFXtzm1doen46DE2r586DxLctrANvVQt9NvS9fpMFmZtgPMcGMQVeogdWw7tJ44TMHFRtxA",
  "key22": "3n1LsA19MF7rZAJboZn8TyqUcCB6ymrXS7Ryqi6GWMs28CdAFaZhg9wn6tXrkBhRe1CKe73615Jqgne36KZy7kDi",
  "key23": "2jf9vErRnPPhyzBjmbB1HRurRpAW82CVvZEtq78tpiRRiio76xc28maDyuj3zeHEmjKsfwkRt4x3BA6sEaNcJafP",
  "key24": "4s2xUbpPoVy7x4FPvA4G2gqhyTYMgnKvxwGtJXtKMwbsAkHfo9NfehPWXXkez9g6mZ4xtjDLoYWC2Zfb6HiUdDYb",
  "key25": "3KPJndpwB8GeVXVX274RsXpz7QGuJEXkFqxuqS7rRXFpueQX2YphoNnAnz2FcxQwyoZMErCb1MvDP3Vd1koBfywV"
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
