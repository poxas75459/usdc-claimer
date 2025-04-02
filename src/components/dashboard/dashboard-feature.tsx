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
    "fCnGUx1FWroLxfcXgTYSNePimRRtWAjXD4j8sLLr2Uwg69nRLKLVgWzAW6rgjPVHMRs9jtfE9CPVhR1KQo59eNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AxbzZpifp34e913F3QA34CrcFFbzdVr6WwxXBZcny2mD357hwgzoDmBB1tXq8x22pF2KGD28397bPRMQRwmTRs2",
  "key1": "EqZiZsYepzhCcHrsJiGQ1YxMGH9y6KWCe5dtZA76HYM6LxGS3458QrewDT2qsxvqWHvq8j27wmSVHv3avzApWF4",
  "key2": "TDk1dZscfHT8rm822yD4PPkZBMAwTz5VzBG14Boffyxe6o18QTL9HPkfuYhcGtcyQXWbXCpDvmoY8Vt5jDUmaXq",
  "key3": "5QwffDaNUP6vhCXoj34vzdKLB3iRc9T86iCtYCpE8m2LgB2pGRckvCAVyvR1fc3PVwMQUUfLW7nTJ3PCZEdUSVsk",
  "key4": "4mKdm5uUtkvJMetgyAeLhXYadNZ2ChHEq4LHVNoxVikwZRUkQaqctaANAW1nXiKrC2wbFp66Jm9HZws6WchARECD",
  "key5": "22dKyYsJ1dHrvL8FmQK1Sj2pLBUtBn1pTe1FCX3Mp8cbGm6EehCstGDSLp2yKeAGR4ehNJ3CDJR4zDMy3GkDL3Hk",
  "key6": "2qSyjBF5stTevtC5sA5hKnBsYpUPJKC3H2nosSR95YtiUFdBb6mAAGT6tpLnAHkQMXMDHdHN83ZLMZkkyH7TRcEJ",
  "key7": "4Lq2mzvrBSo3246dyNPfTrtEuhNovg1fu3SxKM5apyiFf2EuYhocFWXUFrSMCKuHQN6fomf6gHS24wg75tbPYZct",
  "key8": "2V9rKxZ8om7T8Aa5gjkLa4UbtVQx86N7QwfQj7JetffmWB234QDXpvKdYvdXX5g6EAnR7caYYo1TdTFyuR1vbpD9",
  "key9": "3ZXGDgSfVTt1i3yk4kqFcmRcxMHfDmCwPEDDeRYcNcjMvQSMW6mHBF3gLRpLrkoFotUKC9ipvxzqKC1MaCMZxznc",
  "key10": "MXFteK93tLUBXrx33TRaH5SbbfjNNpxjL2S62mZ8gNpoD9rEWmFNWXHkeCz91ihaH1Md6767t4Src5NW68fTomE",
  "key11": "2ZRkHcTNAgNHvWq6DKVVHEA5hxJ2HpuiFnt4w6nTifjneYvkoBWqukFAb7cKXy1piR9SUiXWC3G3sgyz2eswkXAj",
  "key12": "K1hZ2T5nHsdH26Qv9vhwnrpnLRfhWffSkQDgxwCcaVaFA15dBJ2CZ4pvJZgeRmewKYMEvccThT8L5V6zYbqmkXg",
  "key13": "5xKqhxhPAbFfoBkTi73WGUkbKxUtF7kwj1Jaga83dfK3gL91XuJQuNibh7bjtW3AXNqPJQ6dtYcrtY19DaXkZkwV",
  "key14": "4fH7YftFdnRXW6fLTcj3J2rjaENRxbQ9mvqQ2BJd88Z2qsGzkjn6yT7rD9LSTGiR3kzkrxrtzg9HHZF6EXojS7BW",
  "key15": "2TorryiZKdYw7P8PLi3RqS4vzyAJRsoY7eNSLdFPGoEoruG96BQpHrrXZCBJkLgZ4VsYMWYbRBMqBCwyHRJ6rAur",
  "key16": "2YvRH9WJEQemnpNYCWqkD1adEpwZtwdus2oLPHWocsFofLBJ9mDeDkVhRAEzsEq8du98g5TKmCyqC5JDJvLhbcp4",
  "key17": "5nmHaErignNMTfSiGrJZfyGkCEkMib26zz45GNcT8oZ7pZfi2YCTzMU7k4eUNEVCdL9yheUcf6YVPSHpWzhGSExW",
  "key18": "348aAefdJ5dYPj8KpQVmN6jDEYzn6yys4SAixApT5RzGzXEFSTJpSrJp7xitsNKcUMQc8Pf6smjgo5CSsHpVTBZp",
  "key19": "28uuFm8ZBLWCGLW1t959UH6AWMqT7REkRXYgAjqhTSLgq1vQYtcbbDLKYXHhgLShLXup5RpAhj2cuqbYQaPiejix",
  "key20": "5i7wNEM2mKrQfCBzActfs42nCnjcJx98rkkbjPZia9vX1FE2ED1WpiegcMrAae3fCNd3qKAGeBmdVsdCRpyoprEZ",
  "key21": "3vd3otfo6PkJ7eBzEiHYyyjr4zBTFNwa1TLnz4fUGs69ZRSLBoDHe9ooewHaZG99ASyP8r9xs6NNqa2pwXLGnkJf",
  "key22": "2caDva1s5pXfB3z1ScPkgXLKNthGrUEuA5rwkF2PU1vxqDbu32xnThnz77qEyS5LG1XPaJ4EqjXtoRZMogFBt8nn",
  "key23": "aDM6UofuRw86Gb4qjdYVYYdJwoAHVtyo5KYSoPwZnAkfHhrvdA5ASfUijPyFs4G6MNU7TDwDo5ey4LV9wqg1cP3",
  "key24": "5SxVrs1GYnz5JE3MSzEQgXXgocddxupxp4XiqnUU8sEndAqDn32g65jAx5phtKXLh3xc9kUwtR4ydYPT1x8smYBX",
  "key25": "g71gS9jgBqh4F5DrYPLkX5WXyYp9nZaC145s7bmiEBNE8w2WpXQyjsGUnaA5CrWYb73na4VbgSBotUQa23bZaLD",
  "key26": "2VRsLunTGe8SegozWhcFXDsF4ZMFhX8vVsad2Hd9eJfpXivMzJ6hWvEEBaP44p1gG3yMSVjdrg4PUWpyBWnsQM7M",
  "key27": "2faDUYd8pm2RsAhWS3Emtw7RkXNk13QY93nZg9swniqkLwQn66boGw9h4PcTFS5XJjazE5Qa1JkgRD8AKGst1o4m",
  "key28": "4yCcUWtgDh4qNqeHxH24VnUwrBw4mNBA8YcyG9b2zWBHeAgVuBhuVwhreuSHjj34rq7tPWX93yN7VTnucFVihtgt",
  "key29": "5FS5ekgcgjJp62vjuQUYXDB3HjnnBBPMZruqu3c2WevRxjgR13fJUZuuykMJhwKGGL5LeYcauQhoRoAg7BoshthV",
  "key30": "3MYULvDACNJib9BGr4eDnKzMFvWdDxmQJt6JnBue8cNwtBcfQSf3o17gZSD1rLhxAkqufjpG7vceVNL2WGKLKWMq",
  "key31": "4ftp8ZhosctRmjbvpqaWRyNW7jV6MNMi2wNdEu6Wkqz5Gr7M1tMQVm3iH7DX6Sy3iBXBnoQxXsri6eTucYfgTDSJ",
  "key32": "4KeXDFC4ryELtjcXLKv2hFPA6HhWJq2D9KbdzfwN1iVq2XSHUKgc2TomVF4mXkk7bACENuY85AsHCyHj3Kpudwwm",
  "key33": "43FaJtw5KMrLXePC8XLLg1DMPZhNKv8ZhqChQZyhfKWhxcQat1AAqJA51bpqGRes7qFTPbrn8r9uAz4Nit56ha4U",
  "key34": "5KypdyF42LsAJyzk3fCAXae5Ku6MpJ1YpRgKmQvChZT7okSKoPfn2Mdv31qHok3rjGZPiNKhSaRw4TeH6E9VVBXM"
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
