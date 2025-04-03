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
    "5PjELHLzBYeEHCCany6CFSS6f12X5NKqcGti3iEV3rms6Uyiu4qfkKnYiwe15K62w2wsRkjicTuR7BaLtjjqLQYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahXT6KFF8bwWg1fdP4C41SPvrMG1HCpQ48Sd4hnmURoH7zjdWCWTs9CvwH1W186vbEcpRhhwgRuSNSq8UEvyr2C",
  "key1": "4ihaYaSsUim15UUGBS68jxFrLjToMWpa4n75LBVX6od8SrHY48cUs6CJQAM9ee4bzyNdJVyAHTjiV2CzYuQCCyVC",
  "key2": "63aakhg5SCF6uPcSYGwfJRSw2Nkovdeei3AsYTiS2SNfUaZk1R65ayRB6PqXnz8GHduzk9LWD9w7UinZ2oprAKA3",
  "key3": "4x3PUPWAhjPyaRJbCaXjsy6wrPnhKtfa42GazHcqt7ewD3GMYnqA48u7wPfjmEDyrsY3LHEC4RqpkKZ7k7KuKbzh",
  "key4": "3vnQeAWm4yxU1jUn5m6uTpmLEYdiaEb53t1Znsds8jf6jLyTH6nJCurWN2WiCxcve6CENQKNw2vtvHM5YKTQH1Ww",
  "key5": "2sw29smNXFSb5aTtCYmRdUoc22QUcmpzoR3ymABZk4i131CfYpNCKPJor3Jas6KbqwrneY4ZMaxfkra1ZE6sLC5j",
  "key6": "2oBTojUAA43ebgH2n94Hojh3tgt4N6SoEQD6gDh9uW3MkfUrKpHfutdhcDxQ5n1YfApGLByZLbd8oAeVQdJqC7y8",
  "key7": "2r9roEREh4YZyqZiG7a2P9YQFkdz7NHUpYRxmcHtyLRjKDp9viYMwypK9aGtURQ4uresxpMF8nKWFVwoqXgdYffT",
  "key8": "3x5LSWchC5Y7cWEwUoKi3SotyA6uTvFwzwmMa7KTL6B6U32DmvwtqESH7hH6DFKx1fMPUMeJm6UHEY1Bvaq7SW5Z",
  "key9": "3m6TNaU61FdBf4aGLRvZaUL7VLzATSWtbRexG7GBoVjciBrPttiAorePsuDDL2Q8zdVEquxg6bJ6ZLe1rmozXrrA",
  "key10": "31FB9gFdWFzqvu3CjV7iJtCikUmeYi3oPauEfs3GdxRe1KjhPky1MLhPhbQa4Mp8h2FuDT1Wswqa6oietLdGbZJv",
  "key11": "bq4pDNGAKGemahoedT6SLhe92WbkCNSe1ssF31UGUGdbScSDRjNQgX2HgNH4WLU4fnvXKGe9DerNxYZncTEe7Q6",
  "key12": "42PKyjRpZPb4ijMJNKDToBMAhRsdkce7zzUeed2VE39UkycsPbFdus62RAaipScT7ro5Fvt5UEZSNKsxB1Vj14fB",
  "key13": "4vyNxErdvdV3t8TG1DPXuHP5yqKAN9pouQzWae5gEcv87HLHPvZN6KMAJJtZsLBmYUwArpQsVtBhcFaFj5RNzLBh",
  "key14": "5HJTk525NvMNL8zvnT4xfLyLvGBo7wuvhFjVrxVRK1hkZ3QbghcFy5XBdQ6jUtWzpQoEsSzs6Wj8XXsCMxqPVH1q",
  "key15": "4FcKRYZ7BNdcMD6uB9tjjffezYrE9yBYjZpvFEzHaAaeKfVfSLih19moFbnuYxjjP6G2bdgoD3A1E18b4M4dTUYR",
  "key16": "rUoeJpcq6ueHAZVxD9NgBTiNC5fYpYARVaFGQAkmYfhV59LvjEekff2isgnBEMDb5tJKynxgFPGrbHk5R6r9N2i",
  "key17": "hN67PmazNzr3s5itT33mZvWktG2uQtvu9YR5hibiMjH4fPTDbQEtxJ6T9CSTf6RFZ9HxRrD6FPSwyNzuYrh37hW",
  "key18": "3jxcWXAUWwp8xPZSA4sM2pMAmuUQHVQn5gwiWtDTijtrEPD977C8fnT3W5ZQ9xSbmYH99fmawsmMArND4HgDZHST",
  "key19": "3tWuvJmW9q2uhGHgm7FN1WfcYxAZALHDkffEFbD24cdAnyZkD1jVigaihxbb9GT4yZYAmNGpbuWDBhu7kKbAGwPA",
  "key20": "5Fg2yD9oTHguQBzGgJxQxUZifpfJ4nwHYJM26rLHXQkPVsj9c86MffAhVd9BKoWSDzWdPruyPrVpADrg2cx7pP6b",
  "key21": "HXZENBWGcqAGBSwVTGsXM3eUmsN3oa1SgRRpumsLBp6BgiNLfd8UqETy6YoYvKvcWHeNvXFhya5HZmdk2aPvra4",
  "key22": "2vhzdKFzw27LQkXkTHziPWcAJ1vGTaN4vSyW8ubRSnvYeGDwz3N7gBHc8as8eaL6mFERrBpgw254KioHDzTbKvnY",
  "key23": "3t76QgSk1oc8465UZ4JnGcwPCbHEC6uvp9sDvE68vKdD8SnJJeEE2zWPTfcFUZeCpJu2BiN2hjvN4wP4aVRWid9Q",
  "key24": "4Fv6Sym1tdo59EvqNqPBYj6t9KV9LAWrRMjrFEfbvmpGD5atEHAKemC896iehNsuMdf3zZXCpQDVA1Y8WMDJsQ8d",
  "key25": "3iFHQR4pbMnsx6ouUkezSpMkaqzZchiNi1P94A7LqbCdc27tzG5DwUaJv2FxpTX7CkUd3n1tB4FRrDYUwcKNDP83",
  "key26": "3jou7wgHQuBmKHVcTk5ujuRtbnph8AfKoHqZGTuqtB6Bv2xQV9SXdcHVTA4o131MpLMgpWqsTu1yUQvVHJus4GJ2",
  "key27": "2TiydZxPuFiKEHEYZoHJMniD7nv8eyDLs5PTcMzqempbT1fFK3CTwXpX9GmdK8AU7XK4KqNBPco6UX3BPcMfA7rP",
  "key28": "3unANdVeoDrRZTxZYEiCNmhsSSHAS5h2i2a9hbADoxPqgVY8QMKFXb5RrMy6VJWNQtQW2q3YtTQcT8u8bSaRuiuE",
  "key29": "4vMCmS6HRupRJ7AKQj772goxzufejoFqmaxuKrS8qekErrfpvBLnyX6s1jJxZdckAnXdKgRtmpoCTorySbdexZGQ",
  "key30": "dZaAooGK2MxqrbVD96j3sz1FnC3GUxmqzp58YN8apscLJCYo6Jh6DeNG618XmiivPmpsBpFQYTxvpeYJezbh82Z",
  "key31": "asrADnHCunAKKwr9kz55R649LyJ2ckTMmkQfc9DNA7qHKK8jsmJBKbe1e5w6AAbHqwWoeBY3x5Nu5TU2fUkdBJc",
  "key32": "3SPemGcqwQbCcDcGR2V8E18Ts4brLpmgGbFTsXnXwUjHCjL2rquFJZF69oR8NX8nhKJ3TC17MP7Aft14SEvhtrTT",
  "key33": "49KmQLXB5sr9pmwccYRKmAvCfmoezBKtNZEGFkV3azBBw5rR5LqjM7U9CHEF4DtL1cJ82WNWsGypsJpdcQxtMWu7",
  "key34": "2g1nRzeQMij3o49Strz13Z7YGqHpkVotC7MkcTscTHAiwuKnHx2JWa1R3aKdDqS6qyLAkhK7c3x5UYvAT9MrE3EC",
  "key35": "2tcd6ZTAfMxW133VarRM6C5A9hDZ8wR1eHAXo6PCxKKSpB7VW2wVBhif7R7DorTEPMnfN7gSp7TCgoU5o7Bcz5Br",
  "key36": "4R7Up5YF4cPBAtzEQQ59ZixTs9iaxAYNounVQVQyXf7UwrJcTcZ6BwKBzRrU3a9VoKqbTGV5HtXTThmNtZ6A1q1A",
  "key37": "4gffzyxfEvSYanyj3Ydj86UWLCou1nMbVEPPHPSRgUAnq5iyKxXwoRdJs4MQw3zDxGKkXGnfbs2S5WMXoJLoxtxT",
  "key38": "3tXnTM46tyrspzf4XgSXsFXACd4yyzEMTgTmum5YaHvmqMgzkNuKCGUjcWamccqPwSBXYi81nu85QqwZroRqgEcJ"
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
