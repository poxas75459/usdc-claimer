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
    "43mktEHAEnHHgtcEyA9fBBT5j9gWRaQu481V7XFw81DXxVjzWbGdXt6wc3Y7E2a4Qnf6WwJGEKnJXuBcZ2fuMnRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3x3pVQeLGfTr3CU3LyoPUqnJ6DfPtZxBqpXrRhmx6Hwchss2uJjRCRLyTNr4GsbebYTPhA3o5usFod2r6wHT8C",
  "key1": "39SZNyG9tBuRRWrW2sPo374nGFm7BfSXpJaLiBTXKSbG4fL2xc1S2t79he3Lwc7wd2vzhwp17LdzdRom8a36ja8v",
  "key2": "2ouusHGhFAJoqa6b79offuVGzxqW4EZFdBsAXRFibWP72373xcR1E7vLpqR6KsL4Sf2F7QdxVqmCLGuG5UhGRU5E",
  "key3": "5gftHWbcx81XZnokiiRs6EU7tPvvvztHc73jHJ6F6pfZXqymvn98EHfNu6pxDZu4Gb5ztecM7Jx972CTBAYyrN6h",
  "key4": "5KF2TLHdSP5GboR7M5pyGF5kvRQ66FFoYcxGkdKzSgm5U1CKCsJb8LvGNgqyy8pLdSyekyLcYyLP7fqNEtkuunnW",
  "key5": "5YvVEk43kmCLBjQY83a8oVVLAB5DzPQNWhrNB7nUeh46ePANUzLMeEBUc9vc9v6DKUkELc8eP1F8oLsDiU91W9Q3",
  "key6": "N1QP4UwrDh795h9tQubpj4T8M86TLdGzJ47PKd7wNUNi6a96t8FU5UoYY2iDD6aQdcMTx2U6kCrDQNTmyW5VZHP",
  "key7": "2rh5JPqPWg2Npog4PSVBmAUrCHEUgmAungbeeeCCD8cgtT5Qts8aERFYBqD1BNNLrkPzXPtctJp8sF9Xm1dMgHNE",
  "key8": "2KHcMEeqCq2jNczRatwgYEBHw7QQbjpR9PcnzXizng9KDf539Qd5atkkZzkU8DMrXf3BmNvq2Z1sL6D2Skty3nad",
  "key9": "2ZGWBGoh83EBj6YVjnBbPPFGAupqKooWnS6kzfqpgU7asa4ZcvM1znAxNPeXo5DWQTB8bea7x2TzXAVmDgKKZXzU",
  "key10": "3fMCkzHZeSYDwJweQ8KieEW94kN9fgibUmCw4ZhZYbpEUAMBCMi3ZERoEaJjanYuvaYpDLNg4PjjfakunMUw723x",
  "key11": "5zDuzfARf33HBnEsfiyr7Q6p58oTMaSuWhxqBczwmM5NkYMDLCZKYHjCDXMm3uSMP5L3HMkohZ3YBuu56jzVsTLX",
  "key12": "WYstd9kssnRMBAZhEiDDKFPwZRaJfPcjswtQ3UuHhd9JW6qyKmS9uuQQcP6n43XnCD2o1rKtUWnKhkk3cRp5FQ4",
  "key13": "5VtnGNYfct1AgPj6qmZFczHM6aoh1AEMyQmyd6rPtAvBXC3NMjoEXUrLQKRahbpcDrgS4dbDWW7otJ7rmrsu5ZDc",
  "key14": "5wW7HkyLaXn1txGm16DJWG9Xze87jM1u46KrTL2UHJGq3iG4BX3DzifBJhTBsXAnsPu9FkNX7XDZeRQawTimZ2cv",
  "key15": "4fY8y5xoFVXRH7zAE2tWmznz3omWpmUJeapxLKfdXU5xY2xwfuf3hxztP3K7mqksomJjM67gzQ1pdhF9i3q67v6F",
  "key16": "AyKuZw1SwSiKNBNQx8MjmsoKTdAnfcAzGZ9wWbjFLkVNtFwo39XLankWid7XqcSY5fkn7SW7pjLdtRaU8hoo85f",
  "key17": "2vwhYU8DnuPnzsyAHLcMquioz6y1Uk65pJN9kDkFUyYJNz5fPkj1k1ARqVbti1SomTSTPcDe6DQJyyj2ycWwGXg3",
  "key18": "5V84zH21BzZAcjrU87Vhv9kKaDA9Ynro5iHor1fGK55QEZhkTuVVTDuY5aXSnJqh9qLVhwkbJreydDrR2eEy9gLG",
  "key19": "8iKx69fxJTbn6h2eqvxGqnWhnM5tKCQ3nQp37krDkEgU373iHctv4hr2BZwrymHu3JxWfxL52mbVcG85vFRDtWQ",
  "key20": "39AgKAU19NzjXikBcsPHyVKmeXzUB2bd8LWytDjTPAmb4dkXemkbCddKVYYFqsgiC4wEMiXzstBhdff4EkWh5GZa",
  "key21": "L7H62nqL7shTUGpZo1TJSVFwbdHkEnto4js8CA3JHx8ysJqpZcyMYFEPSvgqPkw9Nt47Ks9sgHCnEzMvmSc1nEQ",
  "key22": "Z8dB77STkNvoemb86RfJ6PBimKBEfsseqZbHiK4uBScEcNeVtZftRdeJWacahPDC1USBjFppSHMiKfACZHdcGkg",
  "key23": "4uaor8gyFy9apix1PgnJoHPgc4WkWngWC6AqszeATFwFfKikVTPiuwiHSB3ksuM1iqbFvGGFjRurYLHjgdt8hLwH",
  "key24": "5FSXSdxHUTYmkdqVMh69PsJT9zQ6jaJXMV3DABHS8iEoiwnunEGNrWh9hGgxP45uVKyXsa8pZTda2oVvy7RXTPak",
  "key25": "RNkeePrjvh1u2kxB16PomVTCX8osBSbWwWj98so2jFfA5XvpCGJqHkPs33BMyoLxyRAHDwpRMkJ7tFs4oDUKNAc",
  "key26": "5JQMJorHKbg4Y5g2q21KX5t7KXsBV9QnKeSPwmruBxSH7ffUAxuG1J8t3ypVecSThs6seucdsVYSJLJ7kXQHue6v",
  "key27": "3duooLRgjqdRPbFHrySUTSYfEifBfvvioK9iFsY7BhK7mP8Pa9NA3yFG3bG62zC2MxBPWqBZTgJJqabSucJSorBn"
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
