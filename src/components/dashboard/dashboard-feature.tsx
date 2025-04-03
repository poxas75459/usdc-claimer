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
    "FmCoA5gfmpE6i4vhUYL94ijQxHaMDWWegDbvZmNDS1PVDfY6YChoiSBG1MMJgpLH4S4cJrJz8DFANmsdg31LavQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRQErJSw31uoDkvbyDa2zBCPYWT7Yy712zw19ysUza8GWVZ3ek96YYdzAWHDYh339f7t1BzVZDV4Djhr2KkmYBW",
  "key1": "3ptzJSxfGbkA4nPdWCenr3CPu24SxijHwzSgcGm14MxGW4617JcZ5sT9c8p38dCztqjmP75JnNg4pUX83QDr8hNq",
  "key2": "mY6xUWgfvdEsK9PFT1ZPNpKxcFbVb2jSLKSQ8GH4PqShG9d1Hb1X7uqMXMosns96WkMLZXTt1HSBG917cpkZDHN",
  "key3": "4o6rFgLwKEnZbxNmm3TsKpoqvEVSyM8NqmBnMv2FMi5HSDJncQo8wDeJ2f1nK1DbCNo1LYjxfZcNwSknPXdvtBwm",
  "key4": "5wPsRSTNcQF8v1Ao2bpc8nFoBBTK4ka4Dw6DSuPZWk9dNJPUu3z89cvBKwtsnpb98AnUzK9gnPK1rF7Jt81Ah87F",
  "key5": "31rp2fr8oyLSdFn2K2Rr9tmhW3648DLx6HuqWMo6TBPUTbfXZ2wctiVVfRDxCGduRFhKrXeUufrRFPaoK3DyTMME",
  "key6": "aSdbZWWJCDK2q9qxymJgDNffEswCcrE1e4Uw4nM6YTjTch35sfXEw1zyaghn4VhD5N4dZESYWfh4brEkb3XFbAg",
  "key7": "DeVprJDNdaegji2fFZb3piqBqffZiw7YuJ3XitSXK4rF4PUJHsE9yL3AS1qxy2nksJmuCSmhyWq3bCBTsniJP1W",
  "key8": "5TnCJB2UbtANpXMWGvGaQ5juahGaeSrwUx4QbAgCc6tUbdmZdkGMnZsqvYUUhmv8Q6FEn6rqmpPMP7juWBHrobPm",
  "key9": "55v7kTwuAvH8dBgF5iyzHMym3c5hRzETLf27RAZRvtCfeVC8oeZ7kFoVCu67ipb67j3pPtu8WZ358kzCu84zC7ua",
  "key10": "3jBefhpAeM4vBjjFMWV5hnFirmSA2MDsxxxp9zDzpvCU9dQHneaTQRXgz4ratNDUa3LmgtzRwS8aWFHzseiy73XV",
  "key11": "t7idCeBTwdyTRtnrT4eH8Qe8LozvqBCJ3jXp91ksRzbGJk7bzbE9VGBuh2B9cH6oPtEWfQqddqDDDmgDULDAsX4",
  "key12": "4vaEwtqzR9KcCYFUWG9aq2HPWjFjXtXPMrsXNiKYFNZYL5fqsaZW6rXcjBJziTdHkEReHYmHkjZiGfdFtFxUU9bS",
  "key13": "47euq83YdaauPUQWLBbD17u3Ea239bn9M564fYgtunMPNRzMmUdvphpiHok7SitVt4HbcWNy3wg4LggR2sPxawC7",
  "key14": "3DACTovFDfj4tJ7vG2Am6Sw3h3HUb71swJzdqSLGb3baavzesmnqNRAxNJGHwc57ncBG7TRe4JRSykRZHmiYRqvh",
  "key15": "tcWYzQwXdgBQyVXDrPpyPHFuk59ZyrHSCaaHap8uHhSdbHGBbcELCoe1jNSJKX1VQ4kgpoH75W2dDgLeFzy3EEF",
  "key16": "2tmMZcyAopZJ4xAyNvz9231uXarAvb15pGjUAcqL1bt6EQMzi75wgufvoYqVAg6yCPJTcdDWpBtdyuN6hR2KQN9m",
  "key17": "3Ts2ifQD8Kj58pExqNZTT2djoK5YBuZ64AmgebFTXzupbkXP82dnhSjZ2YVVFkZQWqJrQAxECh38DSd9vgrG8spb",
  "key18": "2rnoWGCEqQyZDVXijuVuYmkf3zYh2U677Hm2wRCi5hLnowEtFUDDEQToxnnvY2JZNbSF186EfgQFP2YN469a4LgE",
  "key19": "5SbAUy4U37BfKKArDBFeniRtfSDxinhoFSLnM2ptWkV71F5pYR2rQs2YqvQD6w6P6GnLmoAuhqPSuFCoigqvWjvN",
  "key20": "3dqCNqnQXvAP2FF7LjNKo4FTTVRwo822dzNohhDrcHfdC6CnTQBCCRG5rdephR9nqJPnxVAc2LbLGoSd9BWqrKrm",
  "key21": "5nBrxshi4uv4Gks7GxH6fBXZGimtJe6iuVAR9JcZrqkEMh8ktuvZNBFoVVbanqG3BN5jG7jLUB6eAFngtmfHiH6J",
  "key22": "2yNGEMLKdfdcSH5HKc1to56Fxez7dhSrBpvntahYcPDvHdrsst9k8zBxQ4xVUhtjVKA3CN1WJrR2Pocpx6SeyuRn",
  "key23": "9KfJ7j6VFKaRoWZcBoH6mUD5ZhHQLbu6fCeaopnMXuemLtLcraCRxH3YMf6uuf7Rw8FCHoCqRQDgg59rGY8TGg4",
  "key24": "onNSReJFASoknDxFezNphNKA9TSF6FZV3X9YGZqnKKrhKGFjj87e2PzHskkmatWmiEvJZuL274RpPN7mNGS3Tah",
  "key25": "33ZtY92nh1QGKpi9xy25LfsdncgNoFs1vHBLyLRBfE5odwkGZmGvFfV9rkKr8pbRaNJ5KvjY8YtbV1LQijL7AJho",
  "key26": "5UCzHfHt7VKZats1w47GzM5z5SaQ6jgAHFq72rfWdX1udoT4JuK9Yk4fT6XCwwJJYYrKdzPAouwLDB4Ej8sLZGnb",
  "key27": "Pci1n3xWY599Ek6aDYJNMgfueLb5DEndmkpWSRC1YqdjEBvJjSLsaGqHs7Qc218B6rGmyVMVFLHLanwA5kierjf",
  "key28": "2aQKg9qEXAih3ywJ4WnBTCmWequGijNdaAPFxNTFRvVZHSoco77dNYnctJv7PZRe9zKq7emg1zX3dh7EuV9TVGyc",
  "key29": "3P8MK8ckxbkaDcveGhA1F4WHqaVc82kNJySurQ2LGVtQqd8sqYX7Vj7YnyFLPRz3YcFKUnDnVKjyGZS8DZiHf2Ny",
  "key30": "3tpdLRQ489F21M6mBR2oNvRjNGmDih2wfVRAQwTnGXPkfBaRJpytCKmfFz4nA78p6bWJM1SanTSrHQoC6MHhGCCZ",
  "key31": "h6kZgMJrV9gcuib7HBRxRfE7ia83cBBuNAKe5m2SbAf1Tq4227sNEuMWsS6GV8tjCpHcJNuKo32QtvzZQLdn43R",
  "key32": "2TjtbngtDrke5xBd415PiJRMwwkfQP7vTtexAyuLMCBUB5oX8NYSNUABNMJn5PcR1RsTpf632rX7u265rVx7nSQ5",
  "key33": "XfPAaCxSuejb1Weno7L3ugG8mmjwKmqHJgaDE2C4rL3S39nxvF31ovCSh4E6s1MEivR7SX9uz6eNfkwjSWoSnrw",
  "key34": "2UHb3Rv2DVCTHzZZYi2r7TLDiyDQDz44CM8XPQyjvfGY1mkZvkwyMhJ8wbXH4g69czscPgRVY3V5f16J5ju1pCEY",
  "key35": "THJVFWjhhuaGSUYcgz1K16vKGLc8DpdsfkxeuxmDbpdwqsLdrTMpHcSp4QU4rYCZ95NZwYcx9qYzayZA8GpEUDM",
  "key36": "3tqiuzVMZ6HPbhzwCH1C4qvDBmRnpceDVh7fiFdcGh8vah6FmdQsLnYNQuj7UmKSCVV2CreYaZQt8iDVHNiE8Aob",
  "key37": "4Sd4NsZixeNWLRqVxyAeq5s8PaxqnbcFuZr61ysMBhNcbDrvgKwynz9kvasiizaTYt5xHcbQyaq1GAqV9jVwRuP9"
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
