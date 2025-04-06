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
    "2QvG9eKHoESv6RGpeQQPvmDwFyccs1ftncRX6DhDW4KBDGV1qG8pKGvpZVTnqQ1XiPAbnWsu7VDEy1EKpXUaDhsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCXXkbxQfC2p9qESCCZXH4b7S1JSWP7ETvysC1JpW1M3fUoVM4CMBQfFocj9vxwBYDDtnhbMCBzhz8WMADHuVcs",
  "key1": "5SfFF3sH6GqqgrBp42brj6LwrsVvSCoHDPnfQt1AdFGXLuhczeBPMq2bp3uvxySS5ESwES8du9vpMfEG95ghf9b",
  "key2": "gFpYBTkqZgqzKtRrwq8ds6gnWdiLUjd8QPhtdvKWmQGzyvBR5LmtjZnpNZU5dADSHKy9cCSCKcsXL9k2dhGeVDz",
  "key3": "4Y93eLZjrHtg7BUEwTts8vdHGQN4HUiW8rwVCojYkqg6BjSPZg2v8d1BXWqEbw7eubEuUvZ8eRmUBGGo1H9ryHda",
  "key4": "2kVYTgF3oJWYM4URYpG9zCkNp8k9uaksfzDtp5SdmmXS9TnVQCk2hbDN8f5NUfmTi7axV4QasVp72KgEZnqf1YY2",
  "key5": "3idtmGRy1vZ9efxLiLbW15koXvEVuHN41qpiDXWzUAcmbCjYEpfVAhshsLWhTxCcpWyqRc5mQELxdh6pCmZ2k3Cn",
  "key6": "5sFHxtM2ArLKvYB992o8kjWdHgSw87YHcaijAdgF6UQydKnAqPknuePdMJFMHf1c5g5HZkF5PKiLZ9iaUKYsX9zn",
  "key7": "65NruDyiTDq3duU2cCy866dU1RtXdq39MYyxWPZVYiLK5qZLUAMeTNP4yQpYMLm4mfdiphMi1h9ne5sidwbiNjjk",
  "key8": "5ZcbCLucmCaJBnvTdrBBfotb2QQDrG7HhCiSnqZdrb9XWpgspY4vP8dogCUG1p6ZEg5kN872pkw6zqGjbxsTQ1sk",
  "key9": "cdtp4om3b2XZBEmhviH5Ht66UcSeyNTsfMLrQFWRj4ikk56J17MC5boghh9uaMbGwE8LpaucVvfoYCv4k4J5d8B",
  "key10": "5ywroWMQ9TmEqN1JWrryqdCvZFhHAngYiQ3hmgSa2ghNpSnb9RmvjBwb4pT3QeBCZJgJyCkPR3nZrtmZyrPbHmWP",
  "key11": "wMeiZG1uqy8xDP8ZZ8FfpNPPqtx39F3WMbCouiTosFc6SUsozogADqWpQWRaiAxetYcLmP7De3HbQriihLHM2dt",
  "key12": "3vMrvDubVNKuf2kmAHjbZpaAyiSFujwbwMf1uLDxa92Kb9n7V7aqruWDPDQkxqEHE4959UHecGF4aununzUKUf7c",
  "key13": "3kqcnmgSMNn2EKQvNM71x11Jc2NXTj5R5X3Zy7cU7KineoDfHqiqTYJ1Lg9FABJsZuxXedzk1UAjtDSr39YkTfbS",
  "key14": "22FZVfn3i57WeLJSVzHSgKjdNGURZiKnYKKjM6iVjXjRFaSYW1Z9eNMPtjw8zAbCcu98dTQTzL4DWgfHgDmF77PR",
  "key15": "fo21Tb1XAgSA5JKbL98uhimyyf5JA4caoGikGyDwrcfEQuAjW6QGAztsL7LRHjHAhEBYqc49uy2EikD5v8A7D2F",
  "key16": "2Ev2JzXERuVesuo89Ug27nzrEPUd6d6HaCGBnKWZLC5959i6dne9r9S7gxqipWoJrFLJtDeobtcUE4gnbw3Na5Kt",
  "key17": "3G4ukdR35FguiyawxY3wjA4pQnF8aiTdvFD8ik9CGJgtcMXRLHeAqfTHPvgNySKRUa1Gz9YRQVZuU5ERrg9ArzAo",
  "key18": "2nFWV2pM3qYpiACvA3Gx1GuRudmB8r6Thr7p5reMFWGhWZuHcfYrPkvmQ8w5VLj8eZf8rtCcovwgCXJCAvUb8PZm",
  "key19": "2RMPF4CSuCdK6xmbaYEiKmgRpnFcVVuxU7uzrQcJHyMSo1n9R2kvwxdWfVFJnG873dYXogCfGDXTUNAVffzxYS98",
  "key20": "4iBivyzwkPas4XCboCMSgqEmymyWmiBpTUEKHeqbc9FEz9NAeszUHEUKHizPAinvmZFn8CbbSECRufuN1fka9Am5",
  "key21": "41LZ5jp2Vk5qa3ypreMxTFL1rNJ95YdqSTWgvjHsqt1RaWsjx62BBXzWf8DZTE98r6pYvPhMQABuZBmsBCLpyEbe",
  "key22": "mWSZSKtTWg2i9azsjjk6nAofvKiC4hV25wKy1yjnzonHsE1ohR5n4UdszGEX4GXSwSwUDGWKoSVpx9eec6YVubn",
  "key23": "3ehuUxiJaXSzMwxyVEXUKTgSKMDzgrdNzKN7RAKuVVgCdmqsHEJFQ6Ci4dzsYhRdc21vAL6XPYpGxj8VdC4KbtHj",
  "key24": "3WFmiUkVi5eEmrmBoBZDd3s86JbcUDCnEPC6ip5QmpNBPUS7Z9yDjpC3X8GfsxUz1ZXZTaZMCg9U9k3qbYexAH9E",
  "key25": "24i7YyxtZ3N1PTx1HXpmR8Bjf1oBAYnoPvFFzWkvFXsMErmbKyNHtKAcUQEzHCDKhKM33yjw6n1kYUH1NaB1hwzC",
  "key26": "2QVypEDu4nG56TZsq27GcoidSPJ1kc1iFcr6pVxEHcmD5zYYrwUD3qjZbC8wRrytrV7Vf8WVnd194HZhB4cxbnHw",
  "key27": "3mFmbfk3YYNnJ1dtZhC9aZKezJLs5xWSNPvaw8pXR2R6wjgg8FwZo2Vvi7G2Kqn1gnRsuY9ttTbUycoMPyg1Xbwj",
  "key28": "5CjjjJdHUD5AALqekAcDLRRBfnQFX6FxJLAeMCggmMBkUJSGQVhUEUk81R2THQqSS7GocUw5DoD538xsrrSXmmPq",
  "key29": "7AwVpWyo98pEgNcJNpkjJwUUgoH5hrGxeXFTHDd3MXMsiRa783uNmxSVyHnTH9UytJBfoPPs5mKekQ2VPhSggqt",
  "key30": "3SFzRiBN3eD1CvLTCbCVQrMAyq84dDTT8zPwgMWgitDgq8Rw11WZpxrAnHDACpV4JtjWfwpHQp6DYsrdbsq1hU9V",
  "key31": "4EgGhyhmdZwfiFFksqf8mcSzBFxHx4Sx2fpY81AZLDQ9qvKuj7JYtNZ967N5dLCHjkTtF7LrMtWEnsfVKWzgExJa",
  "key32": "4xuDd7iuJxhPmPRFHeq6UqkZzuoWVhnVxMs8c6PMZ8MiRLnzYsHunmmdgV1uPQ24Vn4sTWTB8fJ5Z5ow8kqTDhES",
  "key33": "3RRSX2kdxY6A1muqRa86znh8c9VSWv3kY6EgfuZ5yvK6i2fAioVSej3DZKBXsXW5ovFVSomJn98NQa2qyfuweuLs",
  "key34": "63WiUNEgK8SRsH6tqNcGBMVmGbt2HGrFzYJu5G3pTWtYUxiwUxkbxzQLvVvQFKFLcmzHvaeFbnAa6sccjtjPG2xd",
  "key35": "3ChVcRLjPHFFA8BFu3PFMihUEyJh8VK4CBa4AsZYkmi7h8otqXP89yqDBLYyPJmVV1AG45uaGrRtozztktnPWryG",
  "key36": "2Rpq6ZVgU9sevsLmH49yE9fvRLs4h5Hx15w5nwyywFbTYUxnudFHebkZGoHVfCzDepxafksADqT97v598jHSrNKg",
  "key37": "3NNnh36hq7Yavtw1nZD2kY96vn8vqLHMbtLVZrv1wFLDN1dEHSaaMMosWpuhw32xm3RJ4kztedj4WGuQu6re32Pb",
  "key38": "3Uvfy1VeD3vGDAejRtodHH8FpNYFHSSkR6QrPcLSq6xAE5MWsmqrB8SvMkQeN5JapeHx6eaYDpWnq4nouXRRLDMk",
  "key39": "6VT9WSuZhZNsDEnN8dRJDJtPYzEd3mqkN1UiP9bnnMoypMnfitwN9Gy3VsZG86gG5cQSRkBtYe8GHajuvFozLqh",
  "key40": "4mtfihbrCjqJNLkRhDfWZptbbh8B8WCUXYBvaz2pdcFyRxjLugdzWTfbZ1MAj283HRTUW6MCpwstHC8bUE9GVKmL",
  "key41": "28NqAd5dsviMaa2HqX93gZeYqZE37Yo5Y18SbSfR3jRE1HEeQ8C7VgAQ8UPs1PgCaf8xyZK8cvMnBPvwonzzESe6",
  "key42": "3TqCo4uSc4b68rKWcK7yc9xMfLmFgr2bGG4GLe2rroFKKvRd1PLvkacQomxANbmgxn6Ydq9KXb9MqjT1wJp9R8C9",
  "key43": "VcdY4mhAy6U8d2jePnnxXYg476VE8vvjrDCPKYHS1uomWW8agkYSBLb2aqfm3QV5hrXNiFbeBTawcCLEDNkCxwJ",
  "key44": "47zTJwYKqrSfN36aaKE4LceoorEZPvLGVC77SdAs8YTK4GHKsNF31tceVDNZeEyCaDjda315Wt7FuqsG1DsT9HQ3",
  "key45": "4WoHqi9EjvaKpYMmxk7hPoBqSXEFXhoKv5jVYvcTvrzC7pxTkcSwtd3dUALVeCpNair7k7GHNc1azg4YygacaYqz",
  "key46": "4D5A11ceDun6NCw8xXnq8fQLpCDX6L8ZnMsTJ5etKGnahxh7QVMK4fbkWZXT5KiMmpSgjiGZSnQ7KJbne8JMqTUM"
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
