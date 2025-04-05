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
    "5jBmWBwnPmKEZg1wqbh1LAfBWxhNZpg4sfGtgFAeYhhXE9QpCEaADgVti4aUWLZzmpk3kGQA8RwtFkJHHgbDjq3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQhfnNGdJ3wqUxSG1cWwntY8vD3ButeabAfeuHzPjxkSwrKhvnpAcBepDWR4Lh5AStpoxTfwydkFtmW9Sxmvns6",
  "key1": "28g52RvAnFNDigroa8DBNg4rWqjjQUNwhPVFzv7L97pHW8Yx1zXpcv5UGcvn7abErHUfHpHjyf81qqMk2CsQM3VQ",
  "key2": "4qwvgaT2Luzi4tC4SU7dFzRbgKPomRcwHoD3PAxnZEqhMqaNYaEwAPAUPM1j2zfWWizTLKQkrzUhn2J2gBT65wfn",
  "key3": "32dHveZEcWMnLabuwMMsGSRaT1LFs7s6DDwhFjHsMW4TA6hSgyZVgMsKrbu3RVpMxAvQhVNXf3aMSZrFCC8CqPT2",
  "key4": "4UjXFy2WvAaQBcwcUdPzhjx9qJFv8vcpUNE2HumtbX471F6fuL1TiYM194xSRWG7vpAXpQFhQJn5b5GNKrshVgeo",
  "key5": "4ZwYnJy7mhYVCxf5yjWQ2hMoBbbHoqLe3RX1mre18mhN5Gntbq5eyVrFuiGzZYmm2TTzE8kzQ32cKKaPMSYRLwYX",
  "key6": "4WGnZiXDreZviDNRywuSntmwNLhNMniLEM5Zvba8uYWELzui3Pud3MJCrYk4fsG1FPmS3JVWcTgR3H5ieeBN4brc",
  "key7": "59QtK9k1At4WDrqRsMDsCvsLu4dSPYdYtJeJvAhNY15bwh3GANXw33fygXApRejjk1rmpmoG1NNz6y5HFW8C6Dvi",
  "key8": "4usmLRgzmmeuYeZpNs667fRZdkbrAWkujzNhCF5p9PEvyheKszWu93o13oq6otTR5NCK47aBcahsMm3PZD5PswPj",
  "key9": "2NpNoC9CCx6PXLcHfdS1FhxCXdop4eHxmbKbGR242SKC5rVAg96B6utWeLdfcsiBdi6qAUKcHWcvGS7TtoQzSjXM",
  "key10": "5hdxfzxT2HxmNdx9dPXhDbSR3XCv9Pgeof6xwviiBRJhvvxws44AiucSF7HGFCZBk5z474QzPX4om7dqyCAcqpNz",
  "key11": "59KLtQr2s9a1tbBsc7HdAtLHk4C5h5m6nJ6i2KgcKYVAVMbovc3kTgmGv1CHYEoEbs77LHwC7AQcgmaiY4DDycvn",
  "key12": "4HkJthKZ92HRDsbSS7G3cqnWf7bBHzUv2B7inVJXVbwEAxtjsTY2zPk8PKEn55aJyrge8nhn1AVyrRtL4FKLEUTp",
  "key13": "3DL5mCp4ieA8ekLovpZ1c8qAsQSmirHE9WfRAu5UiwkFTZU67sqHamUvqaXYfCQCanMmX6QG95gMMH9wKrCWbk4H",
  "key14": "5U1wgg4k2VhQiLyVFv1Fo26thetB6vyjVT1B62v4RmDQ2Ux1WHvUfopR59nY5b4QSnpmToiSgcZrUNZAT1CmbaAQ",
  "key15": "zM6Y4dCq3yXJoAhMBaUmZCLJhkSF7grn4wGRTwyvsdotiY1rzWDtYtRxw2vabRuZHYy3pRPkjNqRFNTu8dTutFQ",
  "key16": "sjTWgxsJvcUnpzxuGHYQptcffhUEjpwh1wGbF5uVK9VWTrPW9sjcsYvFAztJLv6hukUF5bDBQeCKAsxrma7bwS6",
  "key17": "3kKfD3gNWWgrs87DAyDCb2L1MB6vKeu5cgM6LHBwGJQUqP3RVM9mAWECk8dXkdWiQoo5a62Lw5wNSAS9aNzSFTYu",
  "key18": "5pWiP4sJ7mXjJQvm1fyT9VeDdhe8hUU3KATPjp1wNtoZnUwVky9tAUU7daFRBRot9PwZasX9j6MUPAo4ytMnPTXG",
  "key19": "43iahv5wiMsPuASVRFbWTVfauuN34tamrHpqaGyxcK5RKGe5xX8bcmbycuBxboXF57hAYiY5VdjUHHet4sSWnjwF",
  "key20": "Lir37Uwa3Fz847M3MtyCNRHYUXQEEBxeg6v6v8wTSg2VDbFSQ43kQgVEZN7WdaC5fX7htX3XhkRvidWLxyf3nvE",
  "key21": "hPUkNK4d3AL67ccRq2tdjJLwCj2bbrwdH7FhqCaDxFsw8KGUHEauwaKrgQQMDoXt7VYSm8pg1b3wp4kmWCfh6o9",
  "key22": "4gPkyMUgumDXT48GefiFLKzsbwLc4qrDxBe1Gzus9e28eVY8dWQuLmjvAQ5kDvXYRKFVzQJjspAkcFYdkTp9W16i",
  "key23": "5AccFwRBFKk48yjh3tGeyEcs6stxxdeTyDJ83tNX2zME9z1ZtktoEaCWmV4wTWqphRi8zPQMwjA8h2S3nwADk1v6",
  "key24": "2RVVBbhMX5HXEvxvk8fGB6s2WHVXaLnHZFE3wAxG3qA5r5vFrQxFRMSnfqdmkwLPUYG9DqvfxhDSVPUQDf8chTV5",
  "key25": "FuLe1tpN3X2NjjM3Dow6fNMyRwTUJy3Re3YKCJgSejWLKftgcxUaCzDzDNrAFH8jAC17VvgXkDsc9PTPsqiEW2C",
  "key26": "3EanbJxrEgBsHNUX2uKkFkkKadLHrjjbDHXHWM16GjQBSSLFA79YChCRY8wTePtHCCMBJxuDV2HKz2rL8mJV3rij",
  "key27": "5GbHV8vu7rLMvCu6SBpTMGWHoSCEMbPy9MnMhKZLY5h5zQYa4F4cAAmcPGt5AjVjiVjvYf7gHniWrrCb6M3oYZB3",
  "key28": "59jYx5NPtUGSEQEeCXbpVQbYxP6pgFf41dJmcfAxiUhXbn9VZNMrKrJdFruuompqcnp4BX53nSMGhkykEM4C885E",
  "key29": "3VGSF7AdZ4zbPgBgQo5NdBahYYwTAvYZd8Loa9Da6CLBZJan7DRgP5NBGL6GMTUtzwevcjVRF9FUyPRsL6m57f1f",
  "key30": "4SuQDgWWmXUbaYG8aV8vvkPK2oyhNidivqXaFLAZr66fUs9XRscaYMbVUkHQd5DHNsmZPvn2qzZS8DVzVivsDaGG",
  "key31": "3XTz9ywzv3dAqEkvW7ERSXFxjNcvFVHp9ZKwJ6u7bBTUoC2XtBqZLDdkTnCXtLYBqCKcBvMVHUifNKH1byq9udET",
  "key32": "3QFagQdL63XQxfdL9QCKahvL4N1CMuPKKP96r4qHYMMjL5pSEGZNoYNFk6vaabNGvNVABEmb3juKmEYLA2YV4Da1",
  "key33": "3SP4V7NoYLyTBfhYde41t9GvZ3xwShBbHXNGx7VC4DnqytDMLfi5dDbEoCNnH5ASskKUMCk34B6QJDw5MiN5sQjE",
  "key34": "47xwq5ymDdGmBT4npeRXbkQFZPqFszpcchxxSzq3NspvuCV5CBDAxR1uFMEzPsAR1AiXUVrBuApY4JuyhAPJYNPa",
  "key35": "5w63EdyHVCdLxCpp7USZEusZyAjp3m3ZWabnNCA1HfbxEQcqWLVPV24RM2TuTmhAVmLhZEHEGZNsVe2Z6RD27PkY",
  "key36": "39GDceqhf8VwRUEQLvExGJxAPHMSCeRvdLSMffHbaCLy3Uk5w8GnxeWrEhLb9FsqMjLaAsoEXjEqcpmSUDbYQwcf",
  "key37": "2XKJPxzDdtoefjDkLkwbPKNjPZKBjbbGdf9bJXAWXSstN1qfUaB5SdTgDVrQS893yVuPMci7L2gThiKs9jKLYzPW",
  "key38": "TuYUsAj1k2uGESPYznX6gfbqyXE3GcynWv7Y4jLYqnRKSWdr1qeM9soRyXNR1k5TNSiZ6nRm4oVgC9ehgFkaAk2",
  "key39": "w83eVbxYX3vgu5QzcLzt3BBiGN8idgY16YAhhUV1VbjuVkddtYMmsh37JZCtFMvPjKeR1sCgiZAvpBqMjyhGHoP",
  "key40": "2UyCqaqtDiXqUgLcjSKMr4AYRvViv97y4v8sNhr4xg6E9AUDbkf9Uc6cBdBAbRKWgxtHuhpnzBzjv6rzEajKXJ2b"
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
