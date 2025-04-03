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
    "625cCvermqVGFw94zsPySPoAW4hhpYHLT12kiwRNXhXpb5296FJJomSK8gb4kPSTSq7Wx3RovTZVjAt6KGFehzjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grDmYH31Jn3ZLRXpjBbT2rA3GrGQMVSqE3npYGvyS4U5xahsDiWfCmrFFMfUdT23x5quCfetKb5B4v6KEBjSW4h",
  "key1": "3tn6zUkn4eV52rHsw9oaDuuWsropvvbaZYSwfzGFP7E7VnZhxdrAaPqEME3SLZJ9sTRps39wh7DHMoaL7LjjY5HC",
  "key2": "5Gdtvhv6fP5bCwWfEMydJ3a27BaRnMGm14pn8h1dmKChmoim2L6N6RawcDRc1HYDqNhfcZGoWZMCP8hRyvRJ7kop",
  "key3": "k9LyGg48Hc6wCDojsEQRngyHA5wC2nFwXN7A6MbiRtcKWv22LkGchMwjKGYSou1rbs2UvvSXDSBj5YkmxRFdRV2",
  "key4": "jXZ7FgFa4s5Z2Eha1hskcMJ3s1TT2dSj8xU7riWWfNahDba14ZST1jAWg7ztD9ihLhLV7p78hYyL6KKVoLpWnsW",
  "key5": "26TpRvSunh5udaAKKNCWs4dQq9xWn77BQ59ZaM5d2unb2FNo7XdVPME5nPPZgADek613EHoCyumAwHSijJ4bvFmH",
  "key6": "4gHERM4ENx8cbVWUYZmbtHtzyyp9azGuSg3gG7ppiJtN6cAugPwZJHUy5UNxMeEx5kFfFFkkRwN84M6QYjZ1PSD2",
  "key7": "5KRXRSxKQncbHFBunmEbmo9WLyT8nqLHyczz6nhyoLkbVhojADni47XPP4ThEe7y4YnPmGXvZXC6V7tmPG8U54dA",
  "key8": "55EUX4X7mxxoMbHDm7yqbvDfTmVaSwKspyHuXgMBG7SUKPfLSUhywgkDbXTRUgT9Fuwa5hAi8cqks4ZKnXhkaDN4",
  "key9": "4AfyBKo911JoZTzEVG6Pc2FZY6qwdwoZUPbmQkXpCpPeS6incyDBRxs7Lp8AvuRpfKWT6WBuLQqt3Eo6vaaThQVc",
  "key10": "4DAzWcvYHyruSV8y6Mk9KHGvMLpsGVdDZEwWupPXgiPD7j3pRjDctuhoMpkC5WdNzPRxARSMN71PGN15SMdaB5rf",
  "key11": "2xmiZ9bjJ2kWocET3S3zhoCN9QwFXDmtETPRb7gaSoS6U5LRe76fe8FiP2Us9h9f5csfi8VdmsbTqM7ZEL7LqBNB",
  "key12": "52ABVj73cp2KfCUqX49on6hB3EjuWdGr2tR8Rf4uayxz1cqeNLpmebcU9tPyedBtohNJQrPXGKy6LPHrtBiCivXa",
  "key13": "3PxEydTRiupmecrnvLZCPLYkJZYNqVq27peQZ9SumQQsXcrUe2M11c5xtNPhcuFqe5PN3JBQTAyncrxkQRppB9L9",
  "key14": "4yEND73cGEHxjEXbeNqDWyHEmEPP3WcZP7ttpssWPtx7BzCKMaigbq8AB9b4vQHVLjNCR256GRiXymWAooraDERs",
  "key15": "LMxM1c3LtU2DbjVG4koSE1dieSaeubUHYg8Uc5DQpSVJRq6Q4Md9pKMTaLW7P2QjuyJdaQfqLvCySR5ptBPrzMj",
  "key16": "3iHfD2yosMc97kYzy3Qor8jBYK81gFKFRxmwcikghSQzviPvjCQpQkmzMvkvSmpCFpFVWWDLSCRrwzmJ1QFNcScr",
  "key17": "yEGQU1HmRhRcpsFaP7HtqBeMB4C1ap3DXiojaQT799fxiE4TfH8bAfZd9AcL1HZwFgR2eYJinMwAVi5Boi8Sf5E",
  "key18": "3rZYfrwvVqcJmE4efHTkdF4qCSRrz2YZUk14cVFUdDQmUJANsM1yEzEnT4bAR3LfjUpuYcddXxoJjjzaR6dpc85w",
  "key19": "W4iVpXhu8Scf2T7g283PfR9VJdGRGdTxrtWQi5YTCthcL9x72J9x3wbzBbX4whzxCuACww4ZGqcCssNNsGWnH7S",
  "key20": "56zXvD8zHTywXyWpk8tGbijFQicXnwVGv7jg3JDqmv99EYL19mi2esLFaDBaBY2G9tVSW2kNFrgovjUxFJ8s2vY4",
  "key21": "3xbaBqWKmCVphcbqnJXYgcMfDctw3ZqMjU7gyrpC3ao7pMNFpzTaTGiZJKwgxvs5XLspVV3bAids3x9jUZurRmpP",
  "key22": "5XXfMwfHBikWeHYQLcbAGqP6Q1P91TntFeheVsBKqBhJy35u24EHfptNj1VhM4MJpiaKSgXPo1qiWieHxscRcgAQ",
  "key23": "54VWTGVUifKuSrpkBGeu8xUVQS8FtQRGXCdhvTkpKTA9ChDZ9RgDH2cvPy7acGLrLoKneLH2anTCmvSHZcMMTfUy",
  "key24": "3ECS94QUrhP37CQsYcocBMhCdRWY25vAs4uj99rwqxCPNrqZhqwQXgJCKGvNxnM4ieviiEnQZg55oUoxPMKPR9Se",
  "key25": "5dg5kGFB8puXGMeeeYLZshusRPoYSMVP2kx8HKHPtK5V75cPauA6iZFuFnxCXp8EHJxMdCuX4QFyEdeAPSJ7TXA6",
  "key26": "2U6773T2AefrkbVaa277ZSfKLHf3rAeKrT6nhqYmVvdnGuz8EVcRsRogT8N4qgq699VTaas1wSDPyFR1JL9DpHPJ",
  "key27": "4KdJauhnWuULUnB2FdPj3A1NywtvSghsVkxQkkq6eweXGHLhUwwf659EUh5HjTiiJmQpd3ks4HLB5jzWMtNARuXJ",
  "key28": "2XmidB9bGgXNqRErVJjB7jQ6rAd7ZC8Lw94byDQi5VhKcgnp4C2KETkqAEosXfZ5EnrkCBpFgvBgAPsWyEfvYwtX",
  "key29": "2ePCfQ1pVawuxZ6P9aUou2rZUA7h5RnH9pPLKMtd9chakVnnqyEGSuiJh5jMpHpX4CY6XAvZfvd2n2UaKQEwpiY6",
  "key30": "2w827ZrPLw5m6FhQKr9fScsXA3bbn8V867PjKvvVD7zqozjmeXXQQPneDviewWadAHXUXQfiD6iUxthCMfZ8s5BV",
  "key31": "4kF36xbhw3NtkBznHzmQqxWWu1rPLUtbgA3EroXjBFiJLiA3nv9umY3HmhZ4J2ED95EbJAf9Y528ZoamCBjUuny3",
  "key32": "5uoj6yoBCMsXuHGRV63vidxcCd1dCpSq1Rkj3AsSeKPVLef6G8Z68AMzNqVSEqCFti5pfBxpUUGAEaC1JzFPFayp",
  "key33": "3hfSCjnL88YBNmcmsZoM1PAxxQvrFjzG93g7mUgWegC6TXTFJzxVMv1gBWNNYDGwFNsuPAVfC4CLwLyyH6DGwr39",
  "key34": "2Bh9uhVTqaDguUeczzWs2TRjGwYygmE6EJQmWrSD64nhdeifhLgMNj5SQaDwzx4z5piuMqFRyLcjtSksoRU6pAyi"
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
