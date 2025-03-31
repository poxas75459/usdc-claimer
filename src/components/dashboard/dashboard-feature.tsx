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
    "2HJPZoSQNV72Q61Rss7Q9CUcqL97YrxrdctT53BgTeQxZywL6ZqEvWWVwqMNCPQjuDc4ZFNvCJf3etNkW64rpkYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7RpCK2FGoZF4gEqydj2UR5FBzU6hDVWzC9S6EEq13gk632LhtDbkNhyxmVRxXN5v8ndtJK1SXeFKUJ2J8YYqhM",
  "key1": "s8jLU6PAUiSt7459RtLkgwjtcdRHcxD4p7WoSs7YtGMhPckwdTrx4sK3EjBHy6x4ko9uguqhwaCPv6avRC2C4AM",
  "key2": "5eeCFtdr1ymu1JbJAG5bG2rMnoT3adWUjJSL5wKMpLznToENSS5tFB5iN6rvCZ7s9DrEwcUvhLkLVAj46BcBRd7m",
  "key3": "wWYEqQrZGxY13QmYTdGW7ySRzHUyRXTCV3g1cdf6Te9C8haaVDF8CLYNC7y9dbBBswrq88zDgJcxZ71EoJqyxZ7",
  "key4": "2oxdPiZEm3mYifnZDukxbdPcpDLcWcgeA7cuL6yA57RkrRTWjRNpf7iv1rsqLWq9GV281wLagc7at87vJpxVY5tv",
  "key5": "5PWREgcYA6DfXtmb448D2UPj6cqPxCyQq7jJ5QF1mYp86nWgvVosU3sLcWSniJBqeDCPnCB6MR4NbMGL34VbGscN",
  "key6": "2MQ9bwr84mLsswmTJhkGG4jg9EK2AZGUNiBm4jn69BzqUfYeJ31KBVuGk2GPtubd22s3cp3mRMYAFSdB48kWKLjf",
  "key7": "5U6DB42mskMJu8jgswWoLxj4axFK43mfsa3Btt5s9PFqTuUNxrUVVoEYHjHKZJXqtobSTGSnyREHiukVqYNiJ2rg",
  "key8": "4FcJUA8JAto9s7UpnhHVkstxrFRpVXsociTwFn8hoWYpqfoWfhAqkHyphMLoKYRApaiGAA47kKxqXurGK5Gb6DWn",
  "key9": "2yxqk2W3v6pBd6AAtrKDNMRNEH8aSK2odvRjeHnrqyrAuqmHxf8uvDXUr6cGQBEfiru4EDhaoKhVnUKnBmxrhywV",
  "key10": "4fGtqdXPLHnDzVJyuDtGypNHYaDJ8zq26jD8557skWbYPAReC74qREZ2JJWM5kjehiAXLaAVjhHxrxrHXbsdLhGz",
  "key11": "28hGKBy52jmMV2ppwHfU3R9HZi6nZtfEYD9tWURNt5tkeKxrSM8NTzcXZpr4HTD8KcEsmzRhzy3Gj68yrEtqi4Kt",
  "key12": "5fkoeRg554G4j3g8vWg4vJwkCyM6VrLVbxLtycT3CymaehpXReBY14EsaBcjS4ujWXPiaQ6vesFLry1AJSHV2x57",
  "key13": "49h8BRMnYFMaahwiGbBVtbPk4PZfwTVbaHnCTXSDZqFxS97y56cMk1Bx4sTJkxzuqHJRuhKvX3XugNVrGVGRCgd2",
  "key14": "4GA3S6TR6Njxx24gKGtLBohKg4bvnayEM6bBNMa8ZGoDLRnFDd9cXkFQooVj2sKbtFHCuL1bSHp3hFQ9XYH28G4K",
  "key15": "4jiXc94DzXRW2ADWD6oxC81g3XQM57G6SNDrfuNdtqf9nAAvRWoATJVhDNtJ579bvdJp5LkMv4oCgWQ5zqMiwBw1",
  "key16": "5FyyRTrSA7U1NkQKfn7XLbXDP1miLKW8cMXHBm8yLctmJpQ6huasPdXPXGKVK6qpKWZtfPQcKxtckFPQjTUey6op",
  "key17": "3WZ5LdEbx5mVoFWQGSiZFQ15JqGwPVU35WqwEQxSMZgXRADuiNW2qiF4HJBip8T3YfYjDgRK4iiYzqkY4pXDqtEy",
  "key18": "2J4xduLfH15MYjgYrvurdtK7c1B26mfCPmr78f55T2uAZUVDBkVbEotAhU1q8oXt1e9tHDkXv8jtkPRxUaYzSMDM",
  "key19": "217XdN5va1Sj4eFejDm7HJnvo1Yx7FNp9p2o44sMK1vc8ddPa7rgzvP9hFE6NRMEnxBqC5CZMXR9ELZRM7sdM9wT",
  "key20": "5GucecaCYhF1hjs3KFhPNhhxeBtnipZ2gkbgLB6WKEjhZnc3DXQ2Ue7wxYEfLsgvypa3NM5Etg7obxGQfRggZhV4",
  "key21": "5tSLcQSQ53Foor1u3ZL1TYqZEJZjqY5PdLw3mUU7p5JvsLSgUYQz88kg8oNBMPGKkFytgRXUkkePyRAmsYR4idhR",
  "key22": "2yh1nrPs7HuogsAECcdgps3WuC2nkFnHuqDt7w4PgpcKW8rViTFjrZh11CXP2eJtzFvDCK3XPZ5W4qjm3kSBsEYc",
  "key23": "3PLFe4G5uH3pDEvkN7EeV89bGSDYZTH5zNK2JQuHJ7oEaEpfcVxYmeFMeKMrXzvRQddUpr8QbupLMWpt52suT4RL",
  "key24": "fUm54VQSayspMDK2RBEkqyCnYCBKQqSwJ1kVQyPujd7wvySdfM18f5ttNcpaAgBUufTy42uc2qhKE15kXZP7VzL",
  "key25": "2W1HP8jjVU3LkCuTLzdgbqBc1ZVCRrR2S3oejLArGpRd14pffW9Go5VyPaRQriQokNcqiQKRb2NnY2w4eJZobbF6",
  "key26": "G1runkU8TaXR6UZpzX8L4KP3jQ59fXPQYbrw2mu5HHN62qW1GSNWxG8N1EMFK17fjVyRaxCmPpzQjfyPyNgv8sY",
  "key27": "6DeMvFUWMDCFDCMHh9e2KVweVXgnmqVAYNYvjyUYMRuNx2J9cvV8kxCMsUWLqs7gzvL71LGp2rG12kEKk8dZJyy",
  "key28": "2WFbnbuqpSPQAK9bMt6BCjbWWV9sViMvxfQ8VykZq32SNM6P2t1nQ6tvRWgGnyxgyEwAndD6H5FQrJWkZrbRy8PD",
  "key29": "3zdgSd1vujyFntQnLKM2kFTRZyAv7U4c1PFBskxDGqULSaWbcE5NmkXHmZQCUtud7eAue9twSk9FCTvMEGgmuVAo",
  "key30": "2h2dnR3eChNpY4sDVXd3NfeRLVQDfSUHn5rVZJGYHRyqnkJkDBeKPFPmwwxXSC4cAmZeqwzs1nRTbaJkA37U67r6",
  "key31": "Sh5iFXpJAm3XqPkGDTkQ2xopsKzXahaiVjyCsYDuRw9UHXhnTvBTdR3ATbs3UGDwyXJSrPAxeDvaePHpA4P3QuV",
  "key32": "2RpRTvTZnMBpEGkDbjGFPbaYenK12HJyXbn2EdQXhZieooBSGTaivcDhich1rPgjLjFmyH5oYF34yYmLZsGNnpts",
  "key33": "7UREJP4rM5Vc6jUhLUaTTm4td76BMoJiW9yPj8jRrfDWnL1t6opRUTJhP1itF8vMKzUvoMkttcjBqPF2f78DX2P"
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
