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
    "3PwUcZFbcHMTxwU1pkYwfrgW9CMdPFXvp41TSt5Zor3h323SpXJVXrPi2PiwjkjxgcsrNdFpeuUnNE1CtKr6XoFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HF33DjQNs27oQAbJHSzSVXu1HmfsHYoU2hqV1MHACmmmKQGKykmYePUBVspHTkfbFFQUKQenD2PbFkAr8C6vER3",
  "key1": "24LuEwrGiLNM5ZaMCxuWMgTiSTURH7AWuQnSsWYxX4E3skh3zMnSdTk8nh7yDbavRx2rCsuNZ4EpRo3Q5HUBCP8E",
  "key2": "2wfBstVq3uYCHEFrqNdwJxFh33fVyfVZLN7xzsn6bEtkFX2aNzuEX31ZV5AHFqPwSyUFGGHmBytrsxW4FS4d9sDk",
  "key3": "E6sRYD7WUMayiVoThtbTVY9dgjmdrbkVxfcCxEfwWrhwvzfCb6ToQ4knkjETouKrmeXLp6Ynnve5w8u4zvFyxq6",
  "key4": "2xLQJkikPGFwF7bwcFadzemyanW7tZsC96KdFLi5vUyz3xVVdRWfdMPJAb9BTNFjm8WquBYRqajRNdExWcWYiPdV",
  "key5": "cCKeJNRt9HeTtQS6NQwYbxYHzWdZKkffHRz8vGXmiLALzKYmANzf9KHEJrvYLJrSQ2zZwbCuLLNHtukwy1ZTJdW",
  "key6": "43dusW9qM3FQWMq98SzunY4DANYAp5fwMp9rAsbgt7uNFVgvacj3hpirtvS4EHq5z41Ru3BYNJb5JNgKy56Uhqrt",
  "key7": "2WiEb6LBbaRDBqQMmzxiXqLaNCoTqhwL522oo3sP3evi9CkMiZMGHUiKMn1B2z7S14Dsf3dPh1zZFRM1pNBjYJB2",
  "key8": "2L1p3SpJR99VS2ENJ4NuhaUdS5t31dZiCTJMvVDv2pdL64FvadGhbyozgeSy2REMoV1hAnH6kugEauAbAJPCkDnx",
  "key9": "267gwyCML1QUYtQBQDny1g2wwDuqMmKv1SdRssiNuK1g6hqZFzJseWCEVsfEdmxU6LSoYkoCtGrBiYC6tCGusZ1N",
  "key10": "3wif27WSaHudd5ND3RVAf79UPV9RUTjKhaHsNibGoTuFfE2muKXSQP5AyggfepgWfa1gxuMSQFSyxLLMVJhgVrGD",
  "key11": "5NHT9QVrKsyPApun4AMQZKY6goVMHrLGVTo7pbpdV6BnLRFiUBd5eFnEvQmmURkBFeEKBwPxGV1ZmqEr9w1NDnyF",
  "key12": "4njeQQZcNHHQDx5gmRtujckBSM2p7JcqPw4AWPMwGAqEEM9CQpsaL2c8W4pXR7ceqt33Fivqm9gGR8oTQPid96pS",
  "key13": "KhBzZmxFJSnaBRwust3pPeu7PkKeHzuj6aoxRNYDmLCmLHg36mRkFdT7Av6nRqMkgYFKjQeMepMqwiHwqZhwLk7",
  "key14": "5kZJ8bNJWYCAxxgR964RSf25vY6tMtYjcRLpWJPKVvCQ2sPYE4FstCtM6Lk5egngt1PAY9JCQxRMFQ12zZBSDhpP",
  "key15": "5hJfeamoBSeaeEZ53kwLBirELa5aQKGqWJHqBEvxcrmU6LeWuRiqB4w9t3HTaENDQ2iam4SCLgsGHCFZqnrprsKU",
  "key16": "5LGeH11n9JRXPDsDADuAvkmVMN6VPdG6a88h9dywRKEsVL4aN8MMucMUtbq2EVCNxTTZ8bCTDwigcPSZr9u41LbA",
  "key17": "53yjzKZRpQRvDo4r3hiMmQaGyQChyitKm7KghDAEtA7bCHWWwNq6FWHLpihVKe5foqLRRmyBFHQEvs4erxFGM4kz",
  "key18": "26FBY6prLaeSVLXCKUV5JvdYGs3Jwi4V5AQhBRcgCa67tvrZh8WH4fuzmGhiEFKkdkYCEUxy1x1zSnQKV1TpzHNR",
  "key19": "29BtwnzFX9yMkVeY7eVBDzNyiz1hMx7Gfd5HtAVJuot73J1inaPF33psGcm1VdDUf6dJxs1evTrrqFtSjYb3ma7X",
  "key20": "55xHZHm61YmwLNGGRq7NViHSwFz7i3vQphxFsean2SEeuKsLfUpfoaYemUVdghmjbtHNXh4HqNJBEhHsyeeGMby9",
  "key21": "5YuP6yaxDfPHUmVVq7vo9UzboouAzebxreFhNvWfu75u4FazSpHUc7G6c4vYE1bwJqBpEPwyvUUho39Toar7yWnb",
  "key22": "hveizPGNqCDCzpVuUokUdU1F1RWGyxCcAV9mssoeomGjCDJKkcoV9D2YxVBhvqfvUFGaQGMny8JF2ez379nBpVZ",
  "key23": "38zRr3FEHw1hvMV9nS5px4UW2d365sSBKtFWv4RQa9aV51reu5oJqfMqhVhvAjWUMUBhZFAGDDTtENx6KFddZaG5",
  "key24": "45TEV9JVCxG4yUxSMoRni5v4xPycZJKdW6FPHJaoKbcwdzy48MTtpH3ZS4LtYhd8mBzaZk3PZmVxWZmrYHUh3wu",
  "key25": "4wcTRNsqJ78cVnKot75DsKoWfd3wL57szkRXv9qFCkHw2qPu2pEXY1MC342q5jqYLR4DPETWHsvPLokub2D6CHX7",
  "key26": "3xb3TkroznZVzue4RqPMaotfvVfncaiwcXDgPX7M1Sq4SrL97Caws6VSVy4efdhmfvEtwtzd4G9whu1isyBHybXH",
  "key27": "3JBpP7GKcdPJeqJQpRYqZWo6NPNPKkx1s3iA1C1MFV3AgDvvJ89JmwbsuGSSPMgptFe3xMYjJaCwb9HQfxqQYZ5G",
  "key28": "2x6Do4xJNgEiMQUyU9dBg4QwEpzJqHBS8ukz9H1xSJjj2UDjrbu7FaVcSFfd7DZJ59CeWv3okBoBnwVgy5fnnMbS",
  "key29": "58ZWEQVqNQSDvZSjqnD6qcsckt8xpf2npQCe6qvBJgWXqmr9hgQvmwgvGYY3UmTF3uV6xdFa7Hv9nnfZ9ZNLmP1N",
  "key30": "3C4AEd9UgTPhHebzp4pPBbVYaKMGyd5RTN5XQgk1h8UuUmHS2YRZX8kUhw6QmUtSc9kwsyCqjNBxxrxMJTsz1Mgz",
  "key31": "5vPvZtkVeyXuNUiqVEo9RcrN4JRPcWssyZQE4AnySCek4C15vi6uvLeTKNdkjgceAu7U3bo6HEDkcvnFXCBD9N43",
  "key32": "3KE9syzpKftfNkXfi3wuqnyHRBaejbk7VConyJWe4pWk2a1JYbDB8mrA5vFUwngX9jPsgkFSpy3GT9QW3BqcxUyN",
  "key33": "3HCvVMn2oUogwaoLEnxPi3Znp2BcnhamDru2CD2r4zM3BmUW8RWYq4gefjjMyyz22VDzK4QPAL7RyubR38gTV3gQ",
  "key34": "36VzjiStGR5gb1rRwqFeAh7TZBnciZM9WZZLVXUEsjswMTjony9YCdAUG25Yd7r9D9dy1Xv43pQTcN7cbbAimHDK",
  "key35": "UgMy4ZHtKyeKX9YyPRfUnhJVCLXEBCnd69cz9so6wewiACFYm75kr7pe1RX3TZstgDc1NWDUmAyp1ko6Wxdyhfo"
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
