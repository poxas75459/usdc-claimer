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
    "5BT7gTpWTfZt6nTQ11L4ZACYL1ttj4NwnuWymm19nseF8b1oKBvQVaKntR4Gfhzj742Z7DVGfiWrx546PLuiKCMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzPk5aq1u7aBQ4GjcU5Q1qEyrXudecZUnndA6YfETkikxGE918B5f1brKiBvdFVpET2ugVd4i4AhgXT2gQXBW2d",
  "key1": "2vxSZGoUueKjM2A7FhYhcMi4R53kqUsrhjjsApksYvXDhYQPZnbNzWHM9jXMLXj8nfaqtZybibo5NRdNZ53uxtrE",
  "key2": "3noPkq9qWi7pUv6UFMhmdeN1ebzwZ9AwKVHUXUbK5RMZ61iunYVhp3h6YS7K6CcVBcRwAqxBc8yMkjJsKwBDtcFX",
  "key3": "3hQ9vdYZXfupNNo7ta3NaSLiafgvxAv7CPge8x6PCLJXryb9fmZ4iSfSMg3A26HSZoEM1NQ7c9DbezEKJaxX2Fpc",
  "key4": "5UHcQqRMfbp5DzNNEmWwwc6hDfy9wmqpgeSGMFftNEQUwkX3TtV5ATAqgLFX1wkqAEThAXZFB6G456mCU7mvassC",
  "key5": "sx9ux7w6XHdMgPfx2Bnxf9MgHmZw5DcXTgcfQ49TDZ5PFZRKucBobgfWtKXKbfzjWKiQRTgR7J4Dhk8Whuc3BqF",
  "key6": "331WgmUjMotZ896uqE86YwUUgngLZbDoz4NaiDd6vLhiRU8GEgpC1JGuDiSBHVvsekjZZdWo7Ewk912m7n8ABxC8",
  "key7": "4D1pwHQPhJ8HeYm4RoMWHDniWBhyGNj8PSVDGHTNwugM8wjMdYGk3PKymaZ6LaEmmorsRJVsjq1giWNncE9FXb2",
  "key8": "59wCbLPgLVLieE8QJfqDMR1odRjvm2kmkgEw4hGKJPzwxy8w6t2rbtav9EewVukJxsxNaQeSmqCdArsKb9g8iGco",
  "key9": "5uRYuwqbMjd3bdVPCahDdC1RgXqPsmBG61Wo4CcZ4ix4uh1uauxuipH1knk1QK1PoDfdfsW5Ho1ctw38urmKToFJ",
  "key10": "5PWo2Haj3n7Jp1x2B64Kyh699W8guY3KcsWtrgkHUbNZXMPtaxGXmcZtw3xFSMoHSwnhnzYo74vXG3BoaBv8XBhg",
  "key11": "25xMC5hh2MALCLkj7rmoHXwZ6MJz697WH3GcwuQroYyjj4dS9Rc2ERjWJAbDSLWEMJUUe5QGp1PBziMYguq1JBTT",
  "key12": "iemYfEhdPRymtFTJUMu8csTqcgbj24sthD34u8Ls9dVYB7sxpzvQ4oXwAZQyNwqKYomnyKY191oxyMLLE584aNn",
  "key13": "C1b1yVL8hEZVRGvDMHMpTBtYCsWZ1b3wPgsfxS1vuypcPdTwajFanp8M3fZtL8djVSb1HHytJWjc6ZeNnfGGKx8",
  "key14": "4wP4ceWmStCZaEMqsYjeXLvQrNt9bHi7jAk21b31Z6jWgBvkMBEGWn3ELofGs8obgfVo8677x1duqba6xBipL1pY",
  "key15": "4qw14LAgsesAZZCTE5Uv2h7X6sUeDB8jBDbutkzsGxk65xhz5XhuAVXkpTRvWrXKs7VdrhDhzhn3KftWjSu7ufHu",
  "key16": "5J8ge7oykPRfyZFjpKeYUJW9uByCMr6NNCWNGwJFE9mDM8mJcUrQy8eR7uQvZHh2HrJ1mkgtq8MRLuaTANW9xowd",
  "key17": "4X2se6EpnPiuFtBMn7kRbt1woRB7PHbnqafcXQfkXmCFskREVJA5Wix9TMKp9vnpiEDLMANMQjYUAAPpRuEFBUH5",
  "key18": "x1S4sVr4rKMSc7HkZURjkUt8Lq3fRVHorFviqN6wtYEdmRzGAxAgYAjmhViBt43b9zWnDb5rjjtUaSfbhqCf5XW",
  "key19": "2ufoJrfvspKooL2wKA75HWZ6Yf1cTY2qqrRb1WDQyNmu6NiFYo1BRVMSUo8FfDV4Wb5jL9xCxMHEZ9mr34Vx8i8w",
  "key20": "2PMwHmoqhZ84uXtcU8XzGcNW8YQ3pkFW6Hae8jBn1wc7uoUk1J94Uxqv1A7NEjFUsMMnH8UwkKFAAsDfXA71hvfq",
  "key21": "4bYxhd7XzU2huxeaENcczcoz8fMWg7jjNwW1AGzEhwa4s6TK7woorE3DyfXwUewKfycr5RPvua8pkp9Lhxua2WgP",
  "key22": "5greHufcdKDgiKmuXCfjtvbqrnmED52aNefx6K5BEbcHcg1hJ3udDjJ8DfLBhT6GaCvLBKWZTNcCDupoqQhWdMFY",
  "key23": "36NsHtMn1Lu1fmQxSjWLhmjZ61xbRTbXcpFFzKvZp9BkBeSMC9BGHVmDpQ7ysecM148EpuubNqyWpK1VfHXjndZg",
  "key24": "4F4FsAAKPBxsFPQfrmNUqe2S7yat7E7xsRw79VvBakzoorLFzGW6x6S1Vd9aJVNszM3gnKc3uAZmhpyJuqGp53Nw",
  "key25": "5t6dJeonowQ4tw1ZwB7Wm2kLKnTm3yFAmWzBXBjooKorz359sypTJezSvFygmxHEED5XNDPi2nqcZRVMVPyodSST",
  "key26": "5Hxs3GsfarB3p6rRZJB8i7QWKGX7FhtWbnV8nQuhK8R9HeHCWMfMQA7ntZZxfSzbjjpRB7YxE2Lh7cva5pouMrkU",
  "key27": "d2SS2j63gDv8VtPGeHN83MM3dSY4hXvfB9tzrNL2CnmzvpPEB7nYCffkHUkEEtki2ACmkjpAVvNaQE1yfWuyLch",
  "key28": "zz8ZyfygrwPUc22LTcX3kQTGx1e5zsHAUJr186BsPDEunrZe4UH3HkbutrAdW4Vq1PtDdw21o9gRYT4MBvxwDNd",
  "key29": "5kC3wx7VDpRNrWX41rWntGEm4G3aE1UDBjPpmEW11D9VFrBRPR5zqyZi8jCUhXWGK82nVWU6FoHLVkaAuN2GoK6e",
  "key30": "1BUEnSPh58nvirMAMWisqKvwi8cDvUfXFbsnxVXoiS5fjF8Xw8JjVtmdr7qHRNsc1By73Zi1LYWqWqKdJVs1eoK",
  "key31": "5SMXRxywpKGMpDaJN3fzRaA2Kgdw2yN9vgBNdqmd3NDXYBtsyWsZwpYG3XxzJMkYZJu7NzAWkf734GGmqwrRTEBj",
  "key32": "5S2jzbsdX6yEk67qeZtnGjAXVMLyLbjhyVSGZyiq8MqBdbfWsj7YdWfQp3a38vzHKkUg9oRLYYryH7cqRf6u5ngy",
  "key33": "DLXKyrEqn6K4ahCjLTSWgKhJuGiraiGnsmc3RbLvpAQjv1a3vsQNS1BVzTLdojUcXxZyK9mQZAApPRUWLBtR5sh",
  "key34": "4o3A2N3eTtxzJskssdTpiRAis4gUoA2Mq2JCV6eS3kHRQedNZ6WQNxzKziR8sV7DnRFmF1HFL428PNYvoBt7AQA1",
  "key35": "BysUvvcmvB7gtGGHVKx6nACYRtV3jYNCm4PCoHA2fHQX1pRKcbgRMFzgGeWk5fTWXnGfjYVpoprZPJBmB9MdL5j",
  "key36": "2RVLG744C5z9yBwmsvU1DJk63eWkKqL7om4BCJtRSuvPiqnPbTM1bb8fk2LHL4oADKiAXrGTzzjjBpdfC9TXXjLj",
  "key37": "4wMHMy487B53tAEdTdPPCktLz11ug22rM3eGGxXjSfsjib3STvjJm9Pgw6hZPZVxfkqNnY8M4VVSGFZdXkpHQLXE",
  "key38": "2CTji8L6fzvojJSH3nJLmUwYB8re5AWZrskgB163VRoktmAbWWc43q5UBHmLoBAcYYzs4BdJdFSunfDqJ7Z8bz4n",
  "key39": "3VqGMMnNFm5JubGvHeXBKvmXtryQep6MApkmk71kLMSmbNnLhTENMbwR6f4cx8dsJNYj8iqdEiR55ZBNgNgo7dQV"
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
