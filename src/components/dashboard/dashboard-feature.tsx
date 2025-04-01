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
    "5uKydo3VKzRWPpwPbJiobh94XkPHqo3UZ2pojwX1EpJvLaxSfio2rxsGvbVfbCgTGmx9oTPUXQNUdbL66KiofLjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEwuT7HWv88a56xdmBMzXgRZzdJ8hViEfvw5kwi8Fte6cbqAgjYAgG8RpAEa9YomLFCPedPoLBr3nbn4PM8k38r",
  "key1": "5zKBy6MiN9P9Af3fGPsh3ZxWycfdu3gMwjedHxrjJSzopQaFJ5yBXbmaYkuSDv4sHaS8RKvgXYQhGDktBPUr3oWz",
  "key2": "55H24bmCqCdFD9uXe4F7CY86LnPxrdazbZcZu83vHWTZ7cMDYmxJoE8qkcGqwExY7u2miZ7b1VVP4oGG84bFNUR9",
  "key3": "3rSMzH86m8HPEdu14ZsgoWrXqsckSM8LRbcgAvTXSUrFFwurHerrSW9pMfVVZCJrUdnWxsXb8h5a2KC1MPSFhPRX",
  "key4": "iTpJwf4evpRaTMyeieRLS81FhsjqBats6iYumtEGaoBbqCkN4Z6mqU8iGKCC7thkqGCbjE16LDqMY6Lk1dA3q9L",
  "key5": "qS2h1yeTfCGwbSxR4jZbRtszk7HsA1MkQaqTbJd6Stm2ua9n62XfyHCP56tTegtQSQN85eCyoSf5uExBw7in9Lf",
  "key6": "5hr4ni4vvmsizuf8tCjsFWpHPJr2LUdo71cspU9LF1eFyoPmNmxh1TijdZMEfLxbAnZn1fAKKBMbEspGWJSV6LxH",
  "key7": "4hCyfMroxCttX7TxFo6aK3Ua9owKdhfHgkUZRnpNeGKyxcd955w3WVEMfUtHv1iQSk1rr4Kh9cXxhSajqZxSr2AY",
  "key8": "3r2HtutvJjakTEzNsakGpkMyCy7SATvHFT3JRcBj5PaboTB7ELnNdYuGSyjiZLb3t98ZZCdaFw43x8ZgwZvCunvr",
  "key9": "3mk3WEjb8MbHrF1m3uFBCkWEbTyFp5xX6dyf1K3tjh5WW6YdjqUBfy4SNiUSrgQfJyu22aBwPPWgokQUhSbY9fjd",
  "key10": "5Qq8BAjkGEZ1GrDtTkwcTxD7F1KDRgBVcu8o7hnKxohRcStmFonYETDJ7GzYbE3WmHn8j9gPurrXhyCe4j7Fk97T",
  "key11": "4Jm8HiFvYjDMqSaYskpmMmTjuZsm9Z4rAp8gttxDNxxi5ncbSh8pAgyLmZk52b4ukqo19s8BtVv9xKGS6xZBdqiu",
  "key12": "3jjQQXxL2YB8gMxh2XqH15gQiEmgqDchTwwwttwcNBheeC5QZWoS18Xf3qMizLzXUwuTKdjeogJ2ZUdA7aU4DgfA",
  "key13": "5JtFZcMwCgknsHj4u8sEtx2pusYJyaMr6naTEvseb4vDTBChSfqaaEhisDc7HKNeCUXkaEzd8AhMqi2fzdufiaRS",
  "key14": "4DhjVbXxLkR4bMBTEo14Yy86kJntCFocrqtPy7p2XgGkWeQ9qYP4qY6zymQ8g3EMSFKc1nx4zATLk1836pLXzALe",
  "key15": "fftgT9hdvcVXB4QeEjNDGMeoLRVoctVTsnwfz2zWJhvdUgVRCDfEsDPxfajMR7ydnbeBEyBnSgf434NH7erekUR",
  "key16": "2XYVmSNswKqKCHEBdHzMPyj567NjCAJM5MBrb9Uqhzh6kWQbqEoqgm86G6QCWCVx52taPQvXHsrUdffXrXKJjvek",
  "key17": "3PM5TnVUu361zHYqUWpEn5rHjMTm1e3AZ2SJb5XFEnTuLjx2zj6D5xTpH2fbytzXaEYWRuwFJfwSsZJtrESz1iNE",
  "key18": "3puc3a2xec2XbBfJAeFTC8Zc8QPXGPHvH1swKosoG5PaqFGJNcrfN9mpbVzBgstz3iuRmYn3WUjr6oKoQuECwVPD",
  "key19": "4hr29t63JDXGaaz5PH93iRkpf4NEW2DuEbiwxW4eMEJRLyPNC3ttdtFakhpBAC3z8qUmSGM8dnMynCBJHFBQHFD",
  "key20": "4d2Ph4teyHLpkvNN2xSGYZ7WPkSG9L5Q1n7kXpuGNn3EzpUXb8kimYV3KcmT6A2gpxmhaKgxZhMftigYNYHmuNBu",
  "key21": "XjN6o45eX2KMXGfnREHFcLX8ZEpLptXmXvsecAQUtnCWykv8ctWuTKRNk4L94woMRy9gmd27MSSwpp7cPveR8oK",
  "key22": "2SnzkiaySTGryasQLKANFgvpfU8YmYqcM5LJFuWiCwn5m6p56fkBSrXNH4aPz1jD6Ph9FMJzwwgsLTxuhLKJuCPR",
  "key23": "3tc2BGL4uKjKoniGWwbVWTVEeWsHfbdxsET6ta4oupp8sKXjtmPk3igHsca8avDJsiAuXFabrSh63ToYfWiTd3YN",
  "key24": "58eS7KeiNMphdKAq67gta8p7NJW7a31n1PbXsb6UN59DqjQWTq8qkzUWN2Lj4GNQq9tXVUwSKX1jpTSMnuKSAqi3",
  "key25": "2DcwSk1QE2xYpbGZzB6pJeVdo3SERYNhSTJ8EpzcifpmEB5Q8A41khH4nsSMX5y1aPwNmnNXZgaPxedoM1SiYu82",
  "key26": "ubbMphMyKPSQbYEdEn7XpfjQLRHfsTrBwtTzzHBjpUP92fJrZhZSLSis94516mJhxG1pzSkmoSxSdywSDCuvWfs",
  "key27": "4ZG3ANsFhSRSmaokX2zw6m9gdmWuYC5p3j6hNSAbKESLZPSRscU1qiCLu9HjKDfaU1GTjaZAvqXYyqQKLxqPHnth",
  "key28": "5zJB59cA4mus6YjfNNVyQYkVNHywU1tYVsxHAG6UBp7ZH2PW2wfVdvztQqAroPQqStwimBQZ42vWsHU54VtFsuFG",
  "key29": "4UwKW8MZmRsVtgF7RnsgcdXD239HwxTvJkUohftG14yJ8M9kgnSsmmvUUTniLbvejg1CGp5xTdANwyYxxhxPYxti",
  "key30": "aAZubUnYF48btkiHvv715x9ssCf47gfDv8izASMNUTAuM9SoVxaU5tfS88e2WNQ3HFXvqvt1inniXsvnza1TM74",
  "key31": "49C5c1bUvXcfJemzRRJ3w6xHtk18FpdMiVEYbAGrrffJ4w6JAvWr7GrM4dYkk93exfR3a7dhMFDDtm78Ns58o72n"
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
