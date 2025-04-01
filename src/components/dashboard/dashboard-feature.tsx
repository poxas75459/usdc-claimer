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
    "2Sx6zBMJJKGzFhF8WpzLy7vANYgY1Wyhr2XJ2Kn6x5KkN5TvMjpGaD77jpuAtAqfa8rEeMT3vbwgcqDUA34Am8qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8VE94fNZTwweYkeDZzboEY83vhWFzhJtb9yeH6Va4VrfaWEuVmQ9S7d7gAQWGJAZ1iBgQ1MCVcNeRh6zLdFmpB",
  "key1": "jtcwR8ADijKZnAKEbxzhj2EEbxURjV5uTGodSZ2DgtWDXs2DoYXJTAZZEgS5W18ztqRNiRozEiKtdDFQYL2dkue",
  "key2": "3Y2HHQqpWRHEzcvFKfEFxKjbF4xJkxdPqa89uPv61b2u4cSvCTjDnVNCFhgHAuZ6dxRWav6DrbfhYgZpHvAzcRa1",
  "key3": "ty9ocLEXpgh3bdjJuWJ2EsmXPMeCmdkdF3qKkGeJzSgJ98PLMHq6jYzibWYXmdxfKCzsY6JSW49WEKNHZ4f7uLe",
  "key4": "2VLsnsQducSgbvWV5r1bxV1JV54r8zUEGhfJuFJC2rcRkhEDv2Mffb3hu5FNo52KeX9NzgpZLbRtEqnHHLfVEmj5",
  "key5": "jA3NMibDN79SVt1aMCQZgsrkMdamKp7z99YjYkd2hpjd6nnUoeiG1Nsz39TXPrvusx4vfWrAfnMuzLSjdmenE2u",
  "key6": "4CBne7mV8ywpH8s3ebD6MrAJRNtX2CBQty8UjyLxhRTRseJ25S8y5iz3D2VjbzWckzyVZN5nqAu3CBjWkVynBkZJ",
  "key7": "DNbhmxyu7Ee1Gp53Kxu8gyKx7GHNMwKU3oPzKRVtjkVoYe38Et3KKBDGw3pprTYJouHksez8voN6oiqHW7b1TyZ",
  "key8": "5h7EksPbXjPNcyTBV3bMma9LK9G734gFHKLTThjvVoPXwue4WYfuuKUGAW3kix8qVckGwt5KxRqwqU4cGhg1RZQi",
  "key9": "3LG3jSSA66V1aNFve9nMr4GuRcM32nhhSdXWTh7QMx862KT46ZNVEjYfdcLBxw31Fzm2St93wrK4yQWMWmkCx2pc",
  "key10": "5hQmYAPahR9vmc5hWD4SSaisSEq4SsbVKMGAEfwzWD1Vgh6QNVHBhQiNYKqEJbxyh3bHVHSa5g1uTSnwuR4X9y2q",
  "key11": "268GryFVc7RGfHvQ1yrrYEEhXmE1r2WFZZpFbQztrRDGz6ALvXd8CpAN2khvu3YwBBw48V3s49zXtXVKnooZqgqC",
  "key12": "3gSgsFFA1z1uUygczed3gShn767GARZpkhPhAbuEKKaVKYNPjA48YGb71uevGrAnzTG2MsERWNMhobpJZuWxmFe",
  "key13": "LpbHS4PUXSnmEfdtSpmYeYe9QGHVBrskgnmuwWQKG8GnJKJDcj3jvoq5exgmbfyppCjtaDbHrxCS2k9Lq214sf2",
  "key14": "2RBMEVGmgABtqNMQsi181wWP2pgDaUQBP5uXP6HzNfr84MMsn6nQp8wJGJwSMhDuitwNxZdYPQcQ6G86Jr9Paoki",
  "key15": "474NBjua7MuKHkebnCFBvGHHEDjbAJsTcJGRCJAxdLQkPMJfRYFUehwogQF75kbLLmmPkmDM7rEeGE5V4iixQd8s",
  "key16": "4iC2SArdT69R6MsM9RC7hYbMmxQzDiKSD8Qw1J8jvLW8CEJmBxU42XSwB3p4inXvdvec9wd8M9VuKtTAc9Rz9Bmk",
  "key17": "2onPvw1iM4N2RK8hZyJ3H58fXQ1YtVZZeRvZcL5Rb3Dy49EUFMdyGyfsYTpwZvs2jaivFusmtS14hMjNd1gLVn2W",
  "key18": "5SCNrhVgb5mcv7M644ViB2pVZhsGwBuo6LwD1d7Ma5WjDPPRCWEGWFTfpPTWAnsDhbkUBgGjMnB7eVRoygHo3G9U",
  "key19": "2UwyPqqJeLSyptxECLq93m1rR7imkSUyPn3NVgJD9HaQua3L8gvSpNHf56oTGMVCbEe4PdEdwdUPsGSUa6KhPj7r",
  "key20": "1wg8EvFMkEkSPTn8MVSAdxQqsMdU4LpRsKYp2MmYb2BPsMWMc7ApBXEFoAVbkvBHqk9FXDLJyfbPio6SaDAFjxu",
  "key21": "cCZKU7PwF3P7FjanmxwTBRwBDPf1UhWLFuj8L1Bhnryiz7SpnyrwsY1i99T22WYGU8FWCPt1z2SvXo1kJozguDY",
  "key22": "63RD86Dz7sTM4xkpwvD2Fdre8BGrmTtjggADRVTRRveuGHNQEX18R5GkfwgYwbvfT3kMwSTNttNkfNB5TTFnkrHy",
  "key23": "2aZzG9rdz9QjaHsKchEpAAGAKExTAA2cLQh93Ax2XirJR5N66vyyc4z7bUkRyeq1gJxkZ1kPFL7iXbGnZyAEHrzS",
  "key24": "2jdnP3KKYA4xKRCVd9ujYtgQEDLAvJ8mg1C4yTMgiASzzo4vDQ5HdfGdVXZTE355TgYUN5SieTMVhgKEc1XtQHPb",
  "key25": "2PaHPwmB7UAQx95vqwpwmGwQxoPvvgzULc6sjFSqioAboGqxDqpAN7ifgC5nh4Bx7hZTH68U1hKh1ArrM6ypzHtP",
  "key26": "4YVk7SvDhv54eqcLwknod6ZoeUkNVV5DgLL4HUT8PEaTDt6kXY6RbZS1VK8xV1EfP3yr2nv6uTBwuwN89z9MvN7n",
  "key27": "4dV8L6Wp7SAv4gtmH4NA4NsLcX8oM8tQqhW4xUPwy3UDLLFrD1Uqewsf9NVLjzmYDUfyJdsans2JdaLCNMjMuJC9",
  "key28": "UnAZm1v79o5kPy8zn6x7YmgU59c2gdbVqazRfcETJ8XQ2Hp5pF6DFsYs9MoHEvnFzVKwJ28LckkrLWRwHeVFe1x",
  "key29": "ghsEzhwrEGYV4DS1Kb9ssFoWp8csnkSTMSNZPY2JzUYx3wxVtiv5Z5oREYSqLdkRhCNwVoaCY2dh8Nk83Gs5YfR",
  "key30": "33UDiMmqaBdCbEtFwbPedGEhUKDTvncEKM7fHnVxvAtvtnKZm4J3Ekh55hjpkXUHtLkzhJyoT95CK7UALrT6GMqg",
  "key31": "4P1yYcyeUmiTwQy6hRTUruB5YnWsFSSXUbJBT9r81wYh5bK7xuQxY75myi3wWyxNCK2grPKmtKNZLWpakSoGftLw"
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
