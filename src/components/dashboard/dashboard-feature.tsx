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
    "6PDxcBHtsHaent9hyXDUNsDav2ABjYL67f5VGYQMNVqfV3PYropdc74qCuepRcC9Ywbre7twfaUe1QxFQNbqQ88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65sqDWLbP971DQv4tiH8txhqCZXGu311iM3GEqzVCebfs48FGg2aEUEVnQfJwwtJqQeM6CZmamhvUoMwD1hZPPub",
  "key1": "65coEdiyEGdiAoWRMVvyEyVPMYvn8owHhxtkdf9KGpaU362rVPZbJh9BUZEWfC9cMFytroWSzfJEbkHTnHQfKG3k",
  "key2": "2dJrbgkp1cLaaUYYrs2rWLX8EqxD5krVtFGCTuWFurRY7W96fqNj4sCkCCipyQrAcFMBCwQ5ocrWXPs8WSsT6e5q",
  "key3": "rEV4AUiE3neuxAkdyEH1AasQKfdUC5cEwjuxCyLNC6TdfKNUSRfrEDMopJhxYmbUbfVggcivtp99mW59XCfeZh8",
  "key4": "2xmFqj2GuXxa93hhzbUb4Sy4HoMsCCukFUPeTr9i52fuRexoeaBdxhNo5KErbKrdau8m9DUBW7LM8STUc4sbFUcn",
  "key5": "42yLLPF64zNfoNedUqFENrXG9YSrbFfERkcVVYeeeHKVhixDHvVmbV341AaWc1hbpCVL6M791XyEpyeAoufJaSNj",
  "key6": "4YNkJN3gAsD6p5CR4YFB5VLjasXxtGYXBcVYAL7E8ricTBAmR6G7iwzMuVXpbBrynM3ni4jbkEuCm5ZZgg4G7z2j",
  "key7": "4Md8LQRC79dRWVuvogD5aAeM5cSw12vhByywDuiFZ2iAyEvK6j8VcYucWQPjC3vFxWbQKoN4oVr7d4SQExXRGMm2",
  "key8": "3ZSoR3AR3DgBsc4odGnfqEsgbLVTmwVmri22APpWj3aBKRjyYHzVAZbFtjEdD7vfuKwtJ1YvPMu6AD5n76hivwKi",
  "key9": "3NNTsSfxFpp6bYFgzZCH1DEwbU6KEFnfAJYgsa7jqMpLBpjzYNXqYF6cBzTUpQL3TcW6c6ntcWLcEhR5QaMXbVpw",
  "key10": "m17Rs4Pz9DNSP5xdar7vbbjs7GyxtY1ev9yf4nSv4qnPMVkTiMgjoH1jsAmRbRbkg8YyfVk53gcMKfjNAWnQQCA",
  "key11": "2WKeycALpX3VJ8NoCS9542xmEKy1B1MWKzTVeYTmKqC9u2YZLgmunrjKGEnRwFs1UvYh2YWjrdi1e3JfytfCq98n",
  "key12": "J97svVEpDrKjj29QzSMzGCb2u9rEhLeyiFCbnHdkQwR1jqnfBuwhBFtbgxhQcAf9x5EaSS21YgRJTgsSoRurM4t",
  "key13": "5S28pnyKnXjXiNo1t6NRDpdn2BY4xCoi1F6GJkahLpmJ8YziLeoCSm1MN4ZmoTdpedRJ8dfwLPJZ1M2xr7DCWq4u",
  "key14": "2oSAw2jizfEz9K4q3mA1E2CCwWT5DvuUiJoDLvw5UrQ28bCsUMTJHrmX1hiMMaVqYGrNfRWo3Cp58e9CoDvFjLdk",
  "key15": "34BVms5whB3VcJz3uACYyyJrPsDB9bx26g7FhpmvaGnH89AaUmkyRZeHQbiq1VLYw9tN3FPCENmnudjL9Z5kMT69",
  "key16": "X4cdJzVopLjiaYYvVNbYVap3cgMTqqLhT4N5npHsozC8P54kZ77eZLBYPWsSmC8FaNSYrdfBGWbDoogK64mbBuA",
  "key17": "vmDur4mbQbQhnXzT3s4kFVqgwFkyuYWr8ePzBqkEXXG4cKhMB5dKvaPHRk8MnHne3um2vbQ7KB44shRHEU8KkLq",
  "key18": "56UAghxJA2KBRoRKB43HnczmBBBQCUvGzGPfrT8ZHNjMNpsbH6kDGBgUXDS2c8bfgQCyxaZxvSM1RS7xbVCtXnB7",
  "key19": "3Sm78CyLLNDe8H1zo1tQUtUjKqpCmMSZSb4y2q7wAuaMxJN4BKG3mws66DocopLp9coN3ygHB1B4EJ6YBEQpzzgu",
  "key20": "3g6di4T4agYQ3cqvSfnwJozvkZpiGvBaazaLCbtdLvqgSVSVTKzUdAJkz5sZ1WiJxDChnwsVDVCw8mC81Jpdr5CY",
  "key21": "4g7tQFYqsmtpQMjzFJYsP2jFESUhV6tuLTx1wAkJT22UpVsLiNMRZ89YCeXf4khMCSkHcy49J5KfzZe4JE2zGayo",
  "key22": "4MD8qdrAGjJPGNSt8sY3BykqWidE5Q8RKtEk3xxP4gBti38fp888hRH1bnmRk7VXe9VHffs42kdxeJasezXR4GaZ",
  "key23": "4hY2fB7KfatoUHz4yj7rFhMCxHCrJXaPgBeEypfo6Q6QG7UdXs95hDtjbkfvhYmce1eZSWPU9JvbtH6JczHAyLgJ",
  "key24": "xSPw5AyuWyD6F2mr5kGXpYYsYJ4EwJpw8u7e2WxqLyna2G9VQgASd2WoocPjAm3uXn1ZM85RuGt1fcT9P53YfbM",
  "key25": "23NQJUGbEtswWBeoDnQrUo1qeUG8UmuoBNZciKBRtqBxjbBcJZVd8zbHgQCVLq86r8MCmixHqUztwNXhiUHHGJNX",
  "key26": "rQZTxq2QUrdwqohmFSPhjQzL9zii2LLPUWe4VtpYYLSeMnwnDVbUgEx9Ai1uQQpXP6CKemqCrwV7ptzSh7jGdoN",
  "key27": "2GACbejksQ7NQWkQvWqpFk9N1NjAxS7bK41aKjMmveUXLyKAPPQNBC2zyz8nZNu8aq8HBqgnSHGVa6PfgBSzaRB8",
  "key28": "3N33gyd7mKFhsoaPjRSo3NXTZ1yLw7w4EiRPGb4LJakDMqmLa7EJFzFjAJYGbK5x2oekhg4tYMgxZzvfUktyqViK",
  "key29": "3sJYvqMVS92JnggcR2AjEDDfujNUxSnxU72HXVrVzdkNF2d94FkMaNvEcmz26rHt1A3k9Lu7AA8xWKZoC3enkF9f",
  "key30": "3zEHyyDCSvNBMXkuTiyz4GNxJhHT1VyswkZLjpPxw989oXhAPeebQ35swxX28ydHTu21PoLuxBPT3aBmcdPGkUGF",
  "key31": "324KWi7Fu7Bn4a2aYFmdLMYz8kMGZynVmwWGUE3isgTuZXRyzzeSNoBQDEL3DKYEDRHJx87wPZGdWKTHWXNo8gKj",
  "key32": "2267X3FKTaERttLLZLqrunSMyMzQcDg6WzyTtjBy7BddVmPuxw4duN4CN3BuJB3f835j8Ueo6J8Sz1PTHpfwLvVr",
  "key33": "SfmyLDpgH8xQ5fUu83DYoqZpRkgemfPKtvgDixnB8jdRJm91XR2quzqHAH8wsfvubHv3hVR2vA6j6Dnb2cVDpCN",
  "key34": "4v6vfDLt1L4LbBaY4mSF7e5av6DvSdsVojZR6HuRmT2rjE5LfJdWuQ6JUKzWN3MLN43nnn7bSn6Em8csywkN7CCW",
  "key35": "4L9srdncfQWa4XpMBPYh3AUBQvSvK2mHTYVYHVb9VFSuvUUhUz7kb8ZsrQeKUDRLHe5tDK3xWAPN3crV6x2vVpsc",
  "key36": "3kyhfNRSjd97aksoXQpZra4qNijr2HRqPRnAgCTJhewrafb7yEYvJaAJcFgXZby1AG7Wzz5zQ7GrkhWSkYjDJSZP",
  "key37": "QMq56qDqLjhjqqdmPB57WNJ6T35yVn3xUuK5UiiKU84TYMVGctAzFwHfBN85QNKVZc7ZDQJaCvfgZsMpjC5kjwk",
  "key38": "2ajvJZ6mXdD3YuQctPr9xsCfz4ybtkzfPZt3ZTEZp5vCypXUjhhgwd59UWUCT8hsFgAmxRKgP4nhjBCsGb9BtJ6N",
  "key39": "5Fyq9h2RCppKrmRvXaWABNuTmrexHMDCBtZ5j4vKX18Fvmkhgs8Q55ddgrw1mQ2R84EyyCXG6FN3AegcRHDv72qT",
  "key40": "2fsRpGbWJFaDfXd5drAW88Qnd3DpSk5FgKJjhr2MKtyxRHiV96Qcb7BTPEF6QKgsxpYgQ4caDxSCsaoN2actskLS"
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
