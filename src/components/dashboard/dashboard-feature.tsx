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
    "2QSBZKC59MmSCSarfbwwdNDc4ZfQ9GdQuLYJns2JEnuDCBc5jedj3ihKSynFYLQHvKjxv7AbiLKqvAUYyLzMDQTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBd9pEw3akqDiC33my9kGefbWtBFSYj4Q6zfGgrUYE6oi8KYms9bM8gMFyV5qwx6vCbL5m6uTyKjwBxzNRvLHvA",
  "key1": "3fbg78ivvzBDdHrQ8k7swZ4H34BhbFT3oAjjuidRTfVnuV3fjBhDfZ7UfPHfMsdqz1cYHyjNbQtjE4RzYa87NqAF",
  "key2": "3yazJWYS3emmNJp9Q3txNEGHKtSEx5rm1pjA5NyrXHKdTDiYNC2WbLrxpn3SzLwGxsDwv4RDYt4kdDmZQpCFmHSB",
  "key3": "PD4gH6uXzFAB9wvT1SqtDTebykxnDBjJo485QcBBGRyVdZJetTGUi3tY87d8tdRKmBEdrLG5Hy9HjxWibHbvoSk",
  "key4": "nEqUVnUuY1ojousfmaGBwq9uTxfrPkuBpbdrRspouVQu2Hc6iDLkQFxeBNFQFEtTQACSeVXt9891KfHq4LotLZo",
  "key5": "3PeVCDGS9pLKBQreUWjGc2YdxWm6CrBrecfupmRwzoaZMYZwrJJ9rA8MtAhMwwNdKTskBg6XaGpUoH8pLXjcHEJ3",
  "key6": "52JgPxxaCWHpWhNsjyA4YaxBPa4uS22PdDm8rQREm2mmL6aM762R97Qd3VpYqjZbSXWkLYBQNDwdk21sgbZE8Nup",
  "key7": "4ADHpAws8gNNnAqqfYRxVFAEvuxV18Q7R7A5xLD4b1LMbNb57VJMzSVNGE5idT2DB8oJAfLZAwEcVfcMD6ajYzMT",
  "key8": "3aPxyshyaB5HJrWBnm9QsiKQmsFnK1XBk1xus217JeffShCi7kk2KQsp8YH1j59jjjZYJMhSih4wvBuhutgTaAC2",
  "key9": "4Q7R4iCi4Z1nBxLcw8ifTUU24s7jeqnpRNqPX4Ef3VFha9h76K3B7ytUQMkzmUzSXkjjXXTQLUtto2GZ7vHZojtA",
  "key10": "5FpoqL5LeGhddN2vCUMP8878gkX97oy9mYgY77ZRSdaAf3cB3skuR76CbcC2Twv844hCAnxuNxdSHs742TW6s7Ub",
  "key11": "27LHtYfWLyort9u5Ua2nSSTYyZo7zGvjYDgTzCqUfyDFaMcLM4VtU241z1BgokeAt4t5NXqMFEDoCjKuVkp6eaZu",
  "key12": "44Qg57MGioZz7Ajst3EG1xRDchT2jMXbSe9iHqJ1KMY827vRNsS5tyE7EcLwBhar6PS9y587Y6rvXC5dwEsY2R5s",
  "key13": "2MMgiH9tNaCmSfQRncNyDsbLPD35z5z2JgnGPRBqr7b96WUpxD1s8fsM7gGqrSAmLkPgt3gG1GbfnLMustWe9dQc",
  "key14": "HuyBXV4outiZFt5fzxtRX5nWoyKGBw6LahDa4iUMG6VwsqBVbQ7C8jmbx23Pgbw8FBHdvVLQKqUNVRfW6ZrmMLe",
  "key15": "3j2gCQu8BiTBtXc8J5Wn1aKVQU9VmRPC3SWw5HE8UZkbizECMNbPfhNiDpgN41DMZ2iqvqF2rXTwnZWy56vK1YC8",
  "key16": "57En7vf3dgWLdbSiKFpb3v6KdzRya8ZvjsucFF4WVaYgo8vkPC2zkT6uh7nUvsbV7xWa8NamwsE22adu5niqt19m",
  "key17": "ziEmqK589JRjwQgD8hCFRvPnWinjsTVCpcTBPZXorReLdJu371a3V3xcYGeiRwXeb1viBepjBEUjnnztwephi7A",
  "key18": "3facZMoU4wvgeQbkHLiXe8cjLR1X6mWUP3MC5yQciZguEzBVNK3r4FBNm4iQmngCfBmqY3VCP4c8d8nMrutH6Hxc",
  "key19": "5JYXTNsvRkcwAszq76943w6vmL8FBhBfDywkERRYZk8vHYbZeAFYCLNeNL41JZ1pz1pPVZrU7mxcrfg2HsMHYFoZ",
  "key20": "3BzNibNc991FhZbJkPgGcqAXTgxiQhhRRQYQRwBzq3H9EGE3v5XRksuej9WfSti7mZyFtFDVyDPvgo9BryEvu1jT",
  "key21": "max98cy7SAmn4ULZu4bGwwbbuWzbmKKRxjH15P7suXnGqJFR2ngvGjBgAAVStX5yNUvCXa5zf5an3bQx9mBq4E9",
  "key22": "2Syvrpx1PfiYvhWTBimy1kx4GxKDcrJnHeGRWi3Yb96uYKf4wmbiYvxHaX4cTJAE2bV5u3imxX3CaxecoyUA3dhJ",
  "key23": "4VBPboKNqUtxqgPw8wxL5q6hY4x6aDvcyJze28PVkkkgRtcDesJn7s13DoTVgN6FHHEfdGobW5AKRo7AvFLdcdrL",
  "key24": "ABUCwhiopKdqPSKkDfZMo4HhZiMxfcZRyNkLqfU58b5PfKQqcxuT1USXCvg7BpfTf1nNu6uYDxGV3LFzJmrsoRe",
  "key25": "4neb3edkHrP1sLD1VroJxcidN4otJQaP5Se2ER5Fp9GfSdceGqgKSid2GZrxKizDWYFGtjj3aJ76NFsnFD1m5Cz1",
  "key26": "nDvuSrDM8qJ4jsLPqBUi1dXBX2VRDgssTJhCrvucC6EfdKuGkeLFu5YLWsgfU5Wgoz2krfoB8L4kYDCwHbFRMWF",
  "key27": "4p9SLbKPMpbFy3LWrqA2EfVaYx1AFqciBanEr6XLXarsa3xuLTfNDJ7B1gTRabrVkjDYHQcRnjCjPUkDM5Ts5mge",
  "key28": "5AK7h6MJoJESRsmWWRaRXDzdy8ES3WTeuLwfaoEhsTHXVK1D5nL5M1ioLtQDygvci7Wogji4uBZkTARmQmuoQUdQ"
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
