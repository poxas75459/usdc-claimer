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
    "3GUMXhqJ2psqsvq7D5Rm1fxgpymWzMxgLEujF1cxCaSvhAeYA6Rj3QFcFBAqVMrDzAt3e7o3sKiAcDVrYocbQxGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnEoZEPqrM3iiUY9PaxVaLSy12aVX7AgGxAMjQtqMvK1tmShDXfJjKuaKmYqbchvp5WJUQKgvaNNWnLaBjcH62N",
  "key1": "4oSG5ZMVSUnfrszW3yycwPKBkX7WWyiucdbhHQBdmYj4FdSRXpsPN9RCG4ZpSqaAfAWMBreYq8GMfK6MkvKgkxQX",
  "key2": "ZmTQj1BkjEn6nxmj5HTUtrMQHJpKcJDmPu2C1nSmrWcWpxpk1YbcsCx3fQH4NEbKM5bTYnYDNQv1C1S9ySrPZDt",
  "key3": "5t1dATU42pu8WrSQfd7nh2dZysW94736dJUh9WxEB5w7kHPsqjtsm42BpstGCw8ekvwAWdMd841Q2BHVTHSz5Qyj",
  "key4": "67knCvDrDEW43jdaCVPHSbC4n5JuBzDh9hV1xJCDTxs3BsEDb2JyWBMPHgQizv8anKtiyyTH4BoXU6ncLanoXVDi",
  "key5": "5JXQeSqSHuJjgLCaUPfYm9zerMheFVvVLEzxjjZyhkskqVR5BysmcyvsWAppKVRPZSXkQL7RHrrWFoBL21qSHbSz",
  "key6": "2m3kjkqxfDhzeCMSdUqHotgPthuoT1aJWPWBzpCKpF2PtM1srFhwhgw1WCpUwNp2wSkjd5cztj6mF7rBFTQF8TYb",
  "key7": "4wUVcdsytrvGgfgQH9h73bAm6AuUFq6YU8caXjLhUVc976tUGQwGmcKQZUj1Pa1pakYHW7s3otqAGD4suiySSCWs",
  "key8": "3Vm7btscJRy3HqbtiXNhYccENmkEjVakr8E9ZzdH43FnyEkVAxcLupnJPJTLTuGTumXotDWPyxo65K6iepD6cwbj",
  "key9": "4GjnfNDucT5udRudJVSW7mNc6hqTHYFoFRxxv7YDujjmVFxc26EuktPXCb5eoXLZcpFWRDXTymez8ToyTGnwKHZm",
  "key10": "24qvMMA53DkheQYq1wDLdF8Cfhc3Cu1MqrUSP326pkWTz8UeeETcPo8WvboumeFw2wd8WxkaQ1dqyaja4HmAYptf",
  "key11": "3sMxikuyrHPjTrghC24SiGqvsyZp8wxH9JwosVgFMv5imUCwDEG2nfgos75TcjZxApfEbgqs8Ri9nGLwsJkBY1vh",
  "key12": "Q7aUoHda3FvvzZaA2ZJhhLkzRXuo8fVJkGRaoy9KXZF3Gvz7Rs7ZQqVZ8PrgCBUe8dkVJ5jcRh1tH7qTBRkqWCo",
  "key13": "5wo6XFnoBvWbt7aq66B5eyGA9wzoTnRcvXQRacgztW6ewZ17aboU7Bai9doX1HFHG6Jnjg6sK25EpbH1tQDvaxKa",
  "key14": "55FEjrpE2fepbQPB5fieEW8r81Bz8SwkPceEwH7ywZJNAc1hXBY6syhYrJ3o9nTn54mZbDi9Uc5wTnrUuJBp97hL",
  "key15": "2RzG6xySnjuFZ8SYAwfAExj5x8cdyWCW65mDDTGVTTJpK5gLhJkmqsp9BmC35xV5wWYZKMnL8rGrwMQjA357x3pd",
  "key16": "4omrHG5VAE1UauSnJg89Gqv4KtnXENoMK8FscZRbheYbr8Bay4d2SnbpRmBeBoqc5dPNPFv7BLGSr8hgLbZDNRLY",
  "key17": "5bE6TKBjMCAtJeHkC3bdAerXk7JRo4ApNsmJ7nt4ohPxYsrVBzWEYVeXKP6sAe9Ne6StD6mq3GuyY1aVi9DW88S1",
  "key18": "21aTQBEmDXUY2cN3CZHDvkoNiUKyg2Zy56hzwxYRCNrbGMXt3xz4CfvU7WJPqWZiLN4YfoWwoCrbTRQ5WnppVQdi",
  "key19": "3i9JcbuDDPjBLKnTETgbrNfqwRekgxNSUpaw3LJsKWJch5U8fDfuMGnijXfY9Y7L9cHMhsHTKnCEaY8nuDhz9wZn",
  "key20": "3tjW2fCSaGZepRwmP37F7Cuqy9i6quoxUb8UJeBR6H2Z1Krp45xVtxKpStYV3Qqq4KMGST17rkx8qZ5fpsmc6PVb",
  "key21": "4B1sifi1kjJH5n4NP5YUL1Z5ccA2ADPbs8M8aQtWeMKVkZZPAiKSyEX2HJiYJjFdFUmYqxafQf3XZhpritTZzMqR",
  "key22": "2PLvknpoZEcNgSxRsvYKYDMWWRx74K4AYuSi3xbdJe5oRckAq3BKNZCUAabxkRdCzqutMCTycjLtSTv7RhrqFQLv",
  "key23": "3kT96GzersNswqVS3cLQPfhYjBEEsXexSEfRJ8sTJTFBETKQqkTPqUrgJUDhnhuFDKkfttQeszGUfCF95kqyPyEn",
  "key24": "4ubkyXSPq35ad6YprfyL7B7SyA2iPWNEJ4XWL9MBBL3YXDeSnyty7zfPfnWXMDfkAmtpT1VEBLPDnNSxHgHGuRq",
  "key25": "56LQRk1eCXf5EjTYioJsDw5tYdmeRecg4QoDMV5domt9deUdVps4NPDAiL3Lo8jTKRHxViZEA6mTxAc1kZRHxzJU",
  "key26": "Qosn7janqV8pV4WpNEPKEcUFR7qv2jyaMoU5S8j5SecnWA4utFR6gXzHNAMfTJzJPH41Eff1ak9opXHzn4xkZxU",
  "key27": "56h3N44RCM51rbVMzQSY8jVLUdhjuGiuFFArXnAoPE8d12iMGiHDQSe5ddUdFk3YrbBpeETt8vCDYtS1fgx31QvR",
  "key28": "3BX1KXkdtvsLKSSx4ZbgthcBacrZYowDCwgt9gg1njR5CTTKWe3kPopjL4e7s7y4WTFKUZsx6v95syoZ84APwS6A"
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
