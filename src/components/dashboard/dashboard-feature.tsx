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
    "2AEdUvJE8o9xTpiA5ZK8Z1EAi1Wwhoo6HfPrnqZhcQQarURkAEiQLjogUZvSeAL6m32DXppNPaUZEGXAd9dnjYV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mn1Lps4NPE7URmC8MCJz1yNJNCdKnCMk3HT9sHUSB9UrBnfZgs6BiPVrBuaPHmLdFSkrbtJrMPw7N5P4Nt7Nu28",
  "key1": "3QMZxEBVxzRfqEA2xQ44PVCBRn9MzgbeifiMeNTVphHkYJ3zCjmy81g8ci3D1kemyyXq94rat4guLo7Urz4MkAfR",
  "key2": "5W9xhx74f6qZsZoQxhYxm3VMFsXHeuj8VpdozN9gvbEtLTJTHCMWWqnoneXL2J1UptSofNJua3UHhqTWjw6zjJw5",
  "key3": "2CbcecMJ2Hahc2mH6qf2NspoAENdg7Zqoe65WJ6yszBHZDPfYs33m1snnfaxceVJxNkoA6nEsE8tAQ43V8U3WQFD",
  "key4": "4dTgorY8MsprLu84KL2WNy1E4wUJhCW15PAJXKAGg9LGL9Wd8zdfTawLwMVU1RZWoQG1SXvybxXoA6RGGT4vuG6q",
  "key5": "4qDk9aQjVpcQdMTrK37tM83Rk1Kwrtvk5Ei2F8TpWnPcs8Rzx8Nzh7v2b7EkfEj8NRhGa8ZdoffpkpHvLRtadFCi",
  "key6": "mDK1drzhpGajk11DLHyCmvBjKehsxUV8QaTCbHrLjaHq8UyosqPztkrsFjrKKWKRhDeQDNyHy6yXpmKJz9bBAkU",
  "key7": "5vyLK9bbYTdaEetQN3nK6KnrZmPoP1DkuBQjNg8UWShd1KyXQoPWURMKcbDbzVN8iBSNSZoHz9YSR63jhWyNhuwq",
  "key8": "2yDMzP5nAKarYef4eb2UWvCPD7umUKn2bABvA5FezSvZNxregzdYctYCbJLfyybef785haxctEth4rAPBFF76WFe",
  "key9": "xm7WvPHSeXukAkNEcxwTJmvTWmwR1ZieNrnwtqAEmvknXCJGcnMxC2gBi8RvosZM23M6nQHVBHCn5U4a8C5TnVX",
  "key10": "4mgA35zx1ttoBTBYesr8yg7dwjSuhKj2UJztNWovqSqSv4hmrXVfKn4wDLw7f7xFPX8CAWKYJjpmGZURFJyfuLnH",
  "key11": "4xveKW3XFTdyRabdE92SzKzzVGT9bBXigqjUBXx3JNu2crynoxtcBZLQfEiPy9V3rAUK5iKbNMCWZQ9QRwYWxQCZ",
  "key12": "48V3cYkoPntLMVqcUtSvKN1DMt1XS5xKzH8QAcp9LZht8gaZhJbaoYztLymW5FeHPKf4p8bhmW5LHH47miUCcGDZ",
  "key13": "5zPo7UdZYJwMybCxCvAarkMBk9MiToH7zdLuQcmzqXWiBxYtpMowheCEAsZgxizccJnBTekTQ8V67QhHbdcZLAaG",
  "key14": "53csyCDd4CEAQoGZd4F5ikCsqBYFsKRFm2qaPW9M5mvUYZhZ4qQvzJtLzTfV9LAbs9wghJYuXDm83a4kq1AB1icL",
  "key15": "4yDXTqag28g5YnZH38Ve4b2knj62MeZwi4MsohfHp9e3sgsBHK4GG8b9vBruiNnL2iM2GtPqL21YdKe2WAR7QRdn",
  "key16": "5hSzi3nCpTtpeBF8tYiSMGCCcD7kgb1BVQnE3H12Uyes3P3jipfiMLGdcG9axGmppRXsitRbAeyX5bMELsXkTeA",
  "key17": "3N8UKysc3c1VE5KnGfWomgQpHNQMKjZ2fqYJ7SnFuzirqQhGiu8Gw6y3NGg4zpL2CDfkh3RCKyT1Un6bVgrtpTC5",
  "key18": "35ZdcSX5NXgwpodB6JsVeMEyc1veduf51i2mS5xousH8RZjh4QxFgfxYt5V3D8J4gAttvnMxri4MEVP5SFwgXTAj",
  "key19": "4eAzeH8U8C7SankAaN5ARD6TdeYLAxLsUgxv4CweGxfpNHaAWshjZraECyVmQG1XgKgupzLuz2sNjZxfHZYBP94z",
  "key20": "4QX93TC79Vz5zXwzWMvgkjTjxUgi6QeXgmAGkAhQEuFhjGJss2BPN6WaLfYUR4UenCzBUR9j1c5CJ6GDCaN4fzHx",
  "key21": "rLeaJLmZJnPKUA971DVQkTuXTqV6tAMZaArN9zo8C92f1ob6eTf82XczJzQ6UxRCcpPct1jvNF119TxBaiztuWM",
  "key22": "5tpFu2Z1QGUUFSFw9ysBhxTkNkpQu2WKyhXRxk7s855iFos6tbKG5U9x28btQ8BXd8N6WQshKsjM4Q2Bj6WiEV1C",
  "key23": "qD5SoPRcJ6UHhwStL4SXm9qg4yAzPe17PoBQw6xqhVAd3bVveNWya88UR8Q6CNbFRyKSbwmMsasA9P6KkqGpKXE",
  "key24": "5Daea3nG9jZT9LcTuR9JEfADhw7W6E3whc5hscRCzCnG2xh4tpC8pio4Vj5dhoAkyLAhY8TUerdUtwf979hHu2Tt",
  "key25": "5huomkfkyBLJ6755XQePGBtegk4MNt4o6n9gUoDFMjksWUatkKhXyzHDeUxDaR9U9444P1KrMzy79TTGj8YzW5r9",
  "key26": "5EcVb9RWWckxdo88NPEHHbHAbr8jZrkSjph6YCCwLPKie4LkPegg6PuvGDDKS1BF9r6W4xR5KoiGYhPUtcLvDrLx",
  "key27": "3GvoU7b7BNbH3QMaNtgvBTbXFzRvhzdLBCLH7AQ1SjUoeu7Btu9NU4cMZ7hyHFp4tFjaX293XvmR5f4tzQoWk7kq",
  "key28": "MxVAsY1LuywX8Gq1vgSdJ7mykvY4Lv9GWsVc2ExzMouRWUtwYmCjxGSopaxvtEekEm97uuEvW98RJ49WY2kTDti",
  "key29": "5PceWNvjwo9F2tFt66WXcUyu8MwzDgzLB34oxQXP3nzYZ2qoTZKPEFEHgihAeHXoKk8iBXWM9dCHzb8NgEWfE72H"
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
