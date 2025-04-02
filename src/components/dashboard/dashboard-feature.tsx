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
    "3f1yNco5VQM7SgoD78sEb5gqXL17TFMJbaciYRTVxoHkypH8aBB8goXnYhuDvjMVs52nh2Sctrc8VsJnu6GjrA56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UYq9gpdLsttQGx6v4HXbi2rimKVTRxxgnBbPrX9NgSJ36yTuQJppg5kjqLKJ4p2uVdwP6QW4devy4Vd4X7ZdNi7",
  "key1": "3zzxBckrX5NtKewhE94q5cuv2KMSwksap1sciYCkBvCMc16GtJrjy3mUBpZThCYQrMMptigut4ZoMrthjwEtQKPX",
  "key2": "sCri42KWVJ62sufLK8GrH71Z4MbLFANc8GreAfsY2t4fh2ffeHNhQacv9FtXr6AptxA4KKV74Cu3LiimULtKiFr",
  "key3": "4hBpvc3yA1pz1TyxePKmuK8gU8hzxfvoidgE8BJAr1d96VUFycfasR2VGgqYqTHuzfefKG6jVucUVRQPnh2PKcvA",
  "key4": "Mf76jqaivSx72zGYMhbQkGFcsvyhC1oEbfvmvVbXeiKLyU6FLWKRArybeTAUxosoHA5ZZKnzcDfYfUmgVBL573G",
  "key5": "4gBDiakF888uHQUh1DSSuUEyKTvcLoCAu9xUENxBLWqdyEPYhefmAL3K6yCsktbew6mtZp8oPyrrSk3RTM4mXXw6",
  "key6": "3ZMoPBbMMNgtxYBACLfKqN6SEffqKy3EQn7GrjpT4k4Kws5yn81bZAEATTDmDJqA4GXtsx844J7J44gfR3kREK8c",
  "key7": "5VjoEGZBYkQhGKZ2DAHAN2Wtu7HFjPTKJGQ5HQbtepPNqhcH5AmxKv257arqpu9TPwNfprpMBQj5hoR1tnS8v8Ho",
  "key8": "bYSckrmvTPUZpZkim3w5kUJq9DdTYdBZjSez2FEjuXM3gok2LJ8gV8MVKpcA8mDPwwEbaENv7YraQMV47rLcx3D",
  "key9": "2ixJgBa2JWE2BQsGHBJiBgKv89JuaK5zmam3h5B6G8YgmDhpDk1d5LGac9P8XAdTwUTn4JpwkLtfv1dnLeaSLPpp",
  "key10": "SuYV9ts8o1HSk4moPtqYUaWZZoT4QwJbuLRj3BtvjtrzLpN1mtX38wNTdZB9MwpKZDS6tZv6hENwF7RBeyFB2gR",
  "key11": "55NvDcynUUcHkFPpUZ9QmMaAWYBeGioBp6edHVXC5Urnf6An9uocLNn2LgwWhd7DP3wKRzC8WkiZ1PcGM1HoB9hb",
  "key12": "3SxtXw4jH1WbZQQHzqatmWoAu7coyU4XtwC9Z8rZzshivB27JcSmT6UtTdiZFaMK1pwq41aDR17mFPtRxzxJimm2",
  "key13": "3kLryUEifBrfpXvxWCy5vep6Xmrr1idgGm3tCmXq9q2ZzEW8QTgGBRdhL8KpyNHgRuEigvJrBwQ7Ga1pcjtBRofU",
  "key14": "3k7qX3VcvcHDKJPozPxcpgGisJYmgPSRJLQuvyaeBwCxesG7t3gKJaAWvXYsTrxFDMrb5PzQ1589PhvByHXT5CYK",
  "key15": "G2pHQiS21dbyEKXaqzZ7GUccWDCfuc4E82Xnk6WaW6yKsVeg2kHQPenUTvJEPWgbPVzeuwzpnfVbFDx4DDRXvaz",
  "key16": "5VhXEfdcTXg1V4cCYTBAbt4U7V3Tp2E6MBByqc8iSrwjGuL3XjZpFwzM1DTurYfP8PJxAe9cpT3xWhYYkHDkZjwo",
  "key17": "2EX7EGpW8M4WKsN9Y1FuAbP2jK6Vq1PHtmXaTe7jBd2Ghfmt3xxpQzYFjw7mPp3BkfC9CEJvUUsKLUBvwbrNhkz2",
  "key18": "5WG8Si1Z7A3zFuTGp4D9jG6zD9bBgkeCJmNhSVUVCWn9pLJtfRnikUgyWYYG28YreTACMVm6adUWNJ3XjMmuh5Jy",
  "key19": "33o4u7Dyu75A1kUHN8Pe6bpTE76GniTcNgEtgb5yGSYhDJZEMRhNo9n7ZAZmkLf17dZEwQ9wuJdiDMDE4atARLa7",
  "key20": "5hhRSazzkdvazt6eLQzK8vBBdMBtvEuSNLDdQowXkV3FF5ggC1Qyu2AooYcTNuWCfwbC5NYBsDWnuq8PhSAdZDvP",
  "key21": "4BE6G1Bx2PsUzgzKfYvujJFXxqRxmSoCkjGvsjxezd4xr8Wi1g4BJWbCRn7JsBo8ayaNrAsfD8b3rxQnHsALNK8x",
  "key22": "2ushVVmK6v3mVDbYJXND12bK3YHheizP95bApc6zw98PzF5aC2sK5AQVnKhW9FzfhbiK6szK1UhWPaqaDkfhSdxQ",
  "key23": "67TDuyfi9vZavbHSHooCC7cRAFgBPNi8iP8V2JsK1B9PBn3LEkXDSKE8A9oqvR8e1GhbeG3LjXnWc26QLr5bLerd",
  "key24": "43UT2hLEcS7UiaoYaz5bQ5rgmKHJUYFPANges3veSbc2MFq2KGd6riABybXy3VeBDRDYbk4RwEcU8wBwLAFQLRG9",
  "key25": "5LXsK4WYUkWy5xN5174UKE3SvkE8eTgu21yP1n5LyypNabUVJT1wKaokjbaVspxmv7MzAxDidrXnbYAUvpheohJK",
  "key26": "RN7miiQ3yuhw5k9RxixboPeSp3KPrgQLv9nCBkSiodcu7eXpfSep16T4GrNiHpY9voWLqzSs5AUHGT8DMiQW3do",
  "key27": "2dkGHwnLsyCz9e6uxVMThwdGo1PbTZRX4HJpsp6nXYhabk17GrDEZKvM7diRiEqRKWbUjztbvGVrFtGQCHHmVo3T",
  "key28": "sZdLWTJaXe6jcr2TukKHKCvSxnsSEKbgafMsTeomZ1175NnT3sCEKScSm2eR3TWVZUoj7mNSE7c7KJhV1FDEKee"
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
