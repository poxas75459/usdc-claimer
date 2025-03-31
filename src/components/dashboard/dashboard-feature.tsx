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
    "3ULBApBxHc44BnUxwPUBPz2MRCs5jYQWMASo5kVS7pyVfNg9Vpf62kNYnggmkWGgEfPUX5V3yy8q7CQvh8uVSTrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dze3n3NAkCMwC5gQjLXsvRBV4foZ5rwFqmA28JdswtZ7vqCB6VQVLQdZPgLJYCZzyysH5LF9fjbuEvLbV4Jwezy",
  "key1": "vJjK8QycF6EhhyFPqWA2VNYPrkK76usnaUcB7DRmQTyA9EoMYqt6Tdif8B7xLv5ayaj2AAZwpAoQucQTgnGtYgy",
  "key2": "BhvzRw5pGxhJu57YcJPgvNCxrttazBUsGCtSALP4N7wfQz5Q9Uwf12kTDofQDh2VomXzkkHfLCEMboNkN2pkMXt",
  "key3": "J8YpRjfg6g63arHHHReYVttRSA9x7GPb6KzcCaxMq8qbiY9Z17ceH41JhX8uXPNhstxU3n13cQpm5y9nywgwF3c",
  "key4": "328W8KB4Lc7erEKSQydVctTSXS61eVXDvTLpvRrmwZ5Wu8b3xnAJ6Ux1DLZeXHvisUwhMniPBMFUAJbcXQBNcHan",
  "key5": "3zeogAFvtZCvpTTv8itppCKNqVYgmoc2VW8kWzd7Fu13JnJhouH7ezUezcHEhpy2gLQ58vH41UaDJMBweMDNbidW",
  "key6": "MLCz1kdpNv1Myfo3yguotMDDMenh9qcTGWh9DVHFann3F56SYBfHtGEhktDk7v3YpebMNAv4VgoTj4Xn1kiqgVK",
  "key7": "3ekjjAeTcp5xpCJkDqJMhzVVaNQj1M4bjavxERCN11UwWLWjHVwGwzPArYYpbt2xrbZJZsZuRhcECXojscobk357",
  "key8": "5JEAQmGd3kfdsQEuyXtKyarpLC5JUo9zzEbaSZVSA2DgAqL42z3d61TcBqnSn1Ni7XRNbWHaZBrLyJM86NT9kzBs",
  "key9": "9eDbk9ktQo1ZENuKiAjU9SHByp8VakkBoormUurRaBCeSeiPVHkGeBuuRqwsuZ7y66pzh3GRnjHLZPxvpnUPg8T",
  "key10": "2WLRcP5uxiRKFbLdWVp2p16pcbPHVo687tJq8FB178GiGwJmoE6K8eiUTZNYUVu7KwdtWhKdwckhskmGjuhWgHMh",
  "key11": "5KE3q94aTh7Zc9G54CUhFVUmhXsSuZZwKtNrT34GFpGUwxUTgqK6VU6EggLSErR2dX2Ej2LHstKVczwjmp65PqPu",
  "key12": "5L7sz5wbbmqQywtPs3TuJHjyLkaUM8bCtt5hzuhBeQAJMS9dvGUCqiSiNg7EMs8YzvKmaVtJD3p6zkx3V6fTxizh",
  "key13": "5JXFLyFEEDpKcLLexmwtGS9m7rwtCLkANevp1iqXJMkGQzshSG56GSXVqrw8nT4Ph4tD2b94PYcNVGJC56WbdyD8",
  "key14": "5vKnvgZhYovSUQLEZX6GK3YEUN9hopCseJutAqMdps6Uc7JW3MxhicrzhcvbaX89uawKv4RszZ3KsFx5kpCiKUsa",
  "key15": "zppHKqcGAi6RbCgKR7dntwRw8msX8gbZKW5VPTwshV5gN1g4axfxouR6nzkon74eY9YD6UQjJsq9ab9EgStNzwH",
  "key16": "3d4p62tqE2y1fyhE5wia9d8J42xf9vvbhWy4WDCoMNCJL3J5JfaKc6wCLsitBe2jp2nB3mjV4GUNCqvEx5Tqi17u",
  "key17": "645PNTzekvnXcqDYNLXG997AvianDUmEMgP4APdHRaWw969BuQRfSdHDACRCbEr6ezpHAqgGBqSHH1VkRhvGz9Tp",
  "key18": "3QjTdmmiSEEf1H5g1fsHvwHSQtdF33NcSVz6dKUJ3duwJu2Vm36hAEuKJypGue3XpQq1krrY1TVy5uc2oqWtrv1j",
  "key19": "42dyN93AbX6WJjCTch3MaxzdDcjL9YcScBLd78c2jR9dzc7ikKYA4DR2KjdGCs1reKBgYyhawphTDLmjqrtPjAdx",
  "key20": "2Dog4duZ2cGyQczdPAANS3t8QhpJ6BaWtzw9RVLYoTBm5hN3ejPiMyMp551BjG2m6ysSQsF17Fh5RotrwRgDs2ik",
  "key21": "5VzkjfYqwkEpKvaEj3k3uBxMY34uzURzoGNyp4xu4ugbRQJoiw5b7skFAcw6PDABvHYdPSNXKsVtcjXRhUPp7TeL",
  "key22": "3j56eQDfxoXtyDazEbwXjTgyz44gynoNFEKS4iSA1bUXGFztj6TE1995GRiFPn41S1Ryvuipu9tZM7zwu9daf9uB",
  "key23": "2RMEbQgq8UXns6G3pBMmxyQ6feuGmsbmkW1pyYyrkfHKmfotPhWV5NN1nyb35D23ZPqBxcsdcguEX6udMQjmUohk",
  "key24": "4KB1AyBuZ1psXsFz8zG8xZQGBZSY9woqvvvCrrxangVP3MAr75S7Bq25ygxbRQ3Ff5PGxyYHGUoHBPs4UVgaUp8T",
  "key25": "DadPskbSEWBYjSLk7nYCefXseV7qpxVZHvSDusjA2HEr2NK7Cyzrc31t2JMvz5ZAhC7TUAoJEF3Cc1PCBvWok2S"
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
