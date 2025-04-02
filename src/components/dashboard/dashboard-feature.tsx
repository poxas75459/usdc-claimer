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
    "48wryCPQw79CPU9cvCHVa1KSe7F8fKxw5zo8zoMfHudtB5MxCGt8NXK92wcL1RRLCf4xmnuHb6iH9NzLYvKPaMHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cc64HCuiJKgbybkm2YMdehauGczpK8PEcAGYsasyk5qAUfQKhxvEQANMVR5dQS1QvMLR9ZCmyb8FWZNYxT5Tmku",
  "key1": "3YrQHtt78q6eNgzwaQKS3CFLP4jw1zpLFDNREeqvGTbvq4XsQJRGbBu2hpq3igF4NefuFbJ3SoBau5NZ2AShaVp7",
  "key2": "27y1vFjMHCPiMYTKK2gyQvu9HR1SoRfEdx8fcNHhvBzjTZU2ekzmw1Xr32YHd4aUREaRgZTGdBUNFHpi936U7LeE",
  "key3": "5UbDopb7i1Wop4sKk2MiBy5Jza72bsiMCTY86Ep2Z1uUjiMhtCz1rYs7SAE9hMRUwVSgZYzCLFEbqgEFR4yFRbz2",
  "key4": "EopY6YPBT5g7GjnUd4j9XNynucBuLXisUzuZA1poaXNWTRaCrtwaZv9nTtn3chKXtgZJea6spyCbV3WLF1S3HWU",
  "key5": "31wcr8Rv5Abbrsdtr3npfbeZEQj4WaqmejEda6dJCtGXb1toR6LJzqm8ZTa1uYjsajhU51Chy3fPzpvL2N28Qxxx",
  "key6": "SnGZfmjNQ43zV5LZfa3cusWWzg9XThaPz1u1u4MmxAyZfzqmd9auHRMWRWJqTfS9VWWHiJEecT21y11Mj9pEjiS",
  "key7": "5FH6c4rB8Uv4YiJL9P2EYEEsNQvzcfK7mYiqwsziFpcpu1ySo5nED3r2293pPv8QJHe53xT6dwLA9e8U33dTMgb2",
  "key8": "9nmo1mP62yK3dnaQDZM3rG1sTbAdPYnJ8awZ2csseQ1r2VGdB167s5WfBSSo4rHe492p1rGotMRQxFgu7B9qBbJ",
  "key9": "3SyvP4D6Gqbw79aqHcqSSGkDABxwA7tSV9rfPbVvb6F2Mr7dQieapub3VNU4QrqHsensAMuNkttACwg26XJaNg8R",
  "key10": "4YEenrHLEcXS9bZtHHnRzHwTLjcHvMFqj59HfGVAA9MD1nariVYNVRZUfqx1psgVVcihR177d3pXgGU9TuTiqM5b",
  "key11": "5yj6GoGgyPf7jgN4aUE9y6mf6xCzfBV33G2rioNph927o7mxXgyHQHMuZAbhSnU8UTdMaT1dBj9b4LGmR4CaoZut",
  "key12": "289KsUKjv5tdVZCECAj66CWnxBzbwV5iJZ4KpEKbwoai7KP7K3ezjyKYWdXkz69EvfdmQgx6DV6cUeNSMMGXZTAb",
  "key13": "3RddaaNJP2cLnNvJF953QUoVCfpv9K2vrJmriFyiyK7C6vo8bAbTRJkW4U4nM47cTyf8MsZAgZe8vf5YPRCiM5kc",
  "key14": "4kctsVMyYNBMvSmnxKYqLd7YDVVHL8HipTkqQC6EXcKrhhtm2MNfaMKk5Br1Hc1esa7vQiABwbnxxj8X6mBMb5XJ",
  "key15": "4fmxraDSfLY6unr37fuoaahKNSGQPGHyqLSWHxJYSMT7dzYxnEAszWScpN5kZhX8iqwXC2asQDnVr7dqe2YSWPxZ",
  "key16": "338A5Afvh8gUe6kGwSerrJX3Z8q2333cLw6miJG4S2dwnXFNktZ4F5ZNitkCcqBdTpE1XEk54G32oyvmqPxnmCSD",
  "key17": "3FgRyP6W9jSUv9HiwqiKV3BYqeotcYdSZ56KvirnTWsQT8juoa3UE9nRweazKzZCKrbhtzUw1SksCehMd48Gqp97",
  "key18": "36YbRMFX4LnhAHJrSiGdAuNo8RJ8sVG77ZBsUgYN6H4sLtHqhLJpNPV9kRFzkYbwr8DC9aVu2EyDkuHhDuFpuUba",
  "key19": "3tE399jwzsXCKiMYJ4EEG62cwpFxd8K6afaeU7CmjfP2DHoizaLYRBHfN9XKPpAgTdo8gHtempBHmFo9GoNDQPzT",
  "key20": "sipbm8veg9MrKZetix8TpvYFuhAK9RPwpEfEjGjMrGg9cpZ4E68UpS9NLHbgn7LCLooXTXLuJXunXqCvEXq27Ja",
  "key21": "5xWdQJc1tQHXSKXvViEVqKL2Rpjc6JR37JXHfEjE87pYY1aYLgZYpL4S7Gt4NihAeM6UsH7oyWDEtUXri2Skz5V2",
  "key22": "3LmZU82L6pQRrirLxPfA7JKihpvRSLSUzYRYTA1YWGjZPpup8ezS2pSm1FYfJu7Z87MoH812nTyHxrP1Q5dSP2VD",
  "key23": "2m1ZDkaQBa75NnvhqfWCju5puxyBLMeHxgTuWv7MzGHqK3XhgUg6UA2fy4KgPDcSb5zNbhcDWMTk8FKSTiYCxGYD",
  "key24": "5FtfhEprbNgoHRpVR88LgUywu2HHKKQ9Y9mUtEJtQcMfHUXubeyyJR3auggKf3cMrqWkcwWA8qtuXeDSyxTKPvZS",
  "key25": "VYnrUgT2cbKK6qj7kjogbPPGFybCfubp1TA3K6bUjqxAEzAZCzHVZVsRZU2t5DRZ43oc2foVF5rQa9UnwfvSyCu",
  "key26": "3HryHZgn6mF8fQmfDA3M676PaBTrHWfRt4dg58wjy8PtX1nUQxQqytveVMzicL7aqGsM4Me2DcZ4dXxCAyh7ssrZ"
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
