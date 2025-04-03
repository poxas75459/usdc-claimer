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
    "2nnZVvPpvDKZ9AcKNox21VSxP9ovzNNckQmB6ntpabCBvPkGGxC9SoCgEaU74yd6RUBkfUQqa1Dz1Dfc4ddh4htP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAaa1M9MqEa9yp6waZtnUaNjQpu3zhR82DCYYomGBMDAKNvduPLGWafCZ6a9grTtHVh1JGHgnso7cbfWK5DuZ3e",
  "key1": "55hPUkFeGNCngBd8hh9HUzhTp12HdtdAPHvPiUdLbh1BUv8kGzgGoNqjYxHT3jMzmBDz835mwYmxKsJ5nSWHw7H8",
  "key2": "kEnZie7JBZPF6PnagHGvfgZzhhGiBUhqL6dyLVypiC1AYYnnuySb4w4kVA5MpYXFQJ1ZEtx5qkRWZJYrADHuTuz",
  "key3": "3dcmVGRQKL6PcQLthtYMA2sLeVBumX5ggNeAP7NhtmH8oZzoP5SxoQfwhDSmCyytaHjkdhwP2BqLCi9oY7pMrv7j",
  "key4": "5eW5tqSQSh7w7DfpkN65QmATdVsvpSsMoy2kvo7SAgytxydvTBw3wibEnBWrvtPopbmWx1EgWwigN7j38u22Vp6a",
  "key5": "M5o59pAxZtWUQstLhq9oj7sYPVRLbUbd82vhtc4aXkT24cF57DQebD2ycwPwVFdKcya8NtUPC56cKdraNawh4Wf",
  "key6": "3F84Y8qs36C1uxvRsaVxgKwm7gqyzsMPsyiCfzT8Q88AdNdUEiyUFPL2GpWbhUWYM3nuQgkMZGeVLQwBqpR6nxgX",
  "key7": "5LnSgdE5GbFbs7UcWMsToKDCZKKAyasdRoBTArinddw6w4rskUR8RMgD5X5XdX5xUV7Df7bFu7CNLjka3JGXx7Gx",
  "key8": "5f7bZYxPAnYxpKatueeiLegdtruJcQEJm35zDi3pKuwCLWRAKu3DF3jZVYsnZJ736D95khW4XTKZEG1Jc8fTDDGX",
  "key9": "4SZWqVSgBtze8xvXVtCdRoepGXQWWdi7HFsDBhwjiZdBmGB5N1tE4dzc41aM9aQ5YF7D2Si4HG9NUVqXgrpFrPjH",
  "key10": "3XnqhkWhExZ2jjumS6TFfa9fmv1oFf7J7spS2hfosytRNFJ27CBFxBaii8Qz1MWQuGpbkwTzMHHKeiZygADAfRz7",
  "key11": "2uuhUCsAPHyqbshSpy8e4wgWpCznBCG4sB123wpjpVE15gWiFQTmVLX2eXPhdfWRF7UTvjuMHfAYvHCJLB2Mrsya",
  "key12": "2ZELyCvVDXyZTaFYYgoUyQe54b4CccZNMYdaUND6PMqVPBHFZ6UxBtYBpCitSjAbHHFsVonfMTCTixj3uWXsXnx3",
  "key13": "5LqugRdPKCpjbUCT3Jh9nS7qsQBDdnx5nfUGUN2WjCLUGFbZdXZsgc9SonNswVYF1MosmPFEoET4jA3UBzm8rFfP",
  "key14": "3sBQD9vUGVy9TZdmZvRqgqF6hdB3wDk4XSUvczeehoFJ4G2yr5C79YfndAuee4BfdhwGrNpaWYRaQUn5uq47cPu7",
  "key15": "bCqGbPuAQmDj2cBbH5hPmUAiMYevzMoRKiY2vQphE3yahi5szHVMivDoUVZWHy7vXtwTL53CuAfgxxou2qj5YFL",
  "key16": "5WCpgXVbPKw7DtTD64QqtnDTPLMvk73FNczE5Th4TkdMvTScYDAwGWooKeQCF4zJ8xcZE3Jy9QMc8Zi6tFNNgQrU",
  "key17": "2K8qX86v6A4Kg6uXjGRnXEm1ghTSrjZk3MY5tffBxYh5Z7J87B91GMPDmJJ846sL83kni5nSYAze6zw1NHiw9Rxi",
  "key18": "2CR2C1DSA1mWiR5ZA8Yuw9SNpAasYW7e7JkraAx5X3JqjJS5mxfsNdpivGtEgc3SKciVKxQNsy9i1bwHkPrkToSR",
  "key19": "4EyhVcFtemHs69b9c4R4T6Ho7onv5fotMr7tE9PbPAjRKHPtGid5BkarrYRzvLmmvuMyxVVYvr899D6vyMxFvrE1",
  "key20": "2VaiFWP1e42PXQ22UrEKNDumkwZCjaWpXxHyEN4TVLeiqQhJmHpi1hKDaiv5FrGGZf8rfftaWNbb9irbFBr5hZvp",
  "key21": "3BuYBFSR4kERwXPxLgpXAyXY4XW5ukRBuniKEPWX7r4eKB4AjbBZ5Gr4x6MD9qUggTYexxM9dVWPWUdjmubR795j",
  "key22": "47cJoR9HrceuYvedhR2jAcNBks44u3PEswPRg3EihknVG2NRx5CgVZgNeB88gG4amdRxHv7uxtnJcTnAoc1pZauV",
  "key23": "jkMnynkf8p4gRonF9hAp3NwFJJVGbTSPeEwoFrfko8hYnEBzYDCv9zMhbJrPpypmavpa1Uv89qb6H6Hk6BdQ67u",
  "key24": "4ErFyihDzKYaxB5aQRQNBdQ6n9FLv4wUMjjbtwcGwUqMg4UqrJKzzdwvA8Sbe9YG1zddv5Jf9XjyaAmgYeSYjQxh",
  "key25": "4mizV8CjhHwtEUfB3mfhrrzuQZsSLE5SxqpdSTkh4SJNcmhJC4Cx8yebzm8Q5J46p4FRtJreRjGzWGLpzCCrsETU"
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
