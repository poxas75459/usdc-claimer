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
    "2MPJttw5U11ev3F2Y1C9KErCnDGsWf95d2kc6RXsHQ7x7tJQFVqHQLFUaQAH8zzke5vNWikYERv57RVRdHtHYeEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Whor6Wm6pg46Ss1KJTJn7HqmaP6qwy97rvYj6jnq1AP86Zn9iSLyo4KY8KBUATrXL8vumY2uDmPqaejX4EmYBq",
  "key1": "31taEu4QcqatAt5s9FEtHTnGyhxFJAvoMq45QKdpK5mfFs2EApHcDAGrWSjcPRLPvwxLsuTdN3MS1qjvhURC4cPK",
  "key2": "5wMMojsewtwWZxwkwJFptP3jtBjqxQZw9nEQS1HdPBRmWxjEh8JXsFFNCQhhkEZAkojWjkxECffU36TtoQfBtXBW",
  "key3": "2QewKzx3rgQRoh89n6CHPdBwGTFLiTcwKZoGdES4gQXp8JGxCHuvMZ7auxNKgeXgjPFpJw5oENCEZ3epT1YihagJ",
  "key4": "JR3728pTWmsdsEaT25mPfu6vdCoD38SUMrjfpuqusGTtRap886j7He7TmB1dedDBQE9Ybvib97Xg58qG2bPzRUc",
  "key5": "5KksJ68pJ84eR8ToXtkBt9rDNneWyfcay6TCFBNmkyEQEfxpBCNPUZiHroLg3AVwT2UFzqQGZDDH1ZKyV4kJt7EZ",
  "key6": "3xQao2jdskjnTasuWAAbJYM1R7tEp3wk7GLsAvTdYbAV8BV78wW2nJWHLWhn9uah7CruKtL2UFzgkWAAfxivwtry",
  "key7": "m6PHK16oZKBWKwcRmNgkgevhXq5G5TejcmebjExJJN8kcYijNJadiCMjt3vH6gNqD84tLkiENA3WcaZjv1AQLaQ",
  "key8": "3i2yhAhTmnbS4fqtkKzAHvYrnEw7RoiEKxESLg26iwRDenKBATgwbGZzM4frKMkoDnYEbEmtTMYstUwuPNekmHx1",
  "key9": "2Db9PghvBYSAmdsNxpHRzrMzCkt2LdixVb6HRhDAPb8g3FDLu8PQhP6hTPMe667LiCFvvqHmtXbG65bGM8okQqVh",
  "key10": "2Qrqkif4iKrGkFYDSmRY125y8wQUpLQMTz4ZFdiyBtLmVMZJQdUiARgHapAq9mpAzkk6erzSN69bhynHYgxMRWUJ",
  "key11": "2L7T27ZwtoP1mnRK9LdwtFzF8J1u7pueZN5qKd9KivEwu6zRzAqKRPSBE6a3PAXk3iEon2KwHbQ5gokC4u1syJ47",
  "key12": "2JMj63yaiUisbMufP7CxEQkvD9EMtVRtMFZu7QaAENszXBfrUTD24jDEA4qE6SreUaLVhoWxk3RcXWhJ6AwgjDgh",
  "key13": "3gzcv3Dse8cYiWQNZXRhKwakmPswjYhGo2tWbfAzYu9rfsS732BksA4CqcV5YtN8zeJQHwq6eGW3ptYpDUHpwcnT",
  "key14": "3Qhfb8D9EMRsfa79MNNpoHcNza4NkNwKh9D5RvjznXcgCcWpgftqbBrLZoec2tBYVyhoEbWse1AXzG8Qx388hMhY",
  "key15": "2FqMid7Dw4pWJabL7nPeNefjqRBbXoZAZJb6ZASmDMAn95LpyuDHhM9Vp9uN54j31THqrTzEzzt4Lj6sNTf6a3bS",
  "key16": "545wUygn9dM1LuBARyxsvQXvgrMcy9jK7tCbFEteHNwVJ62gkTMXc8PDP4imZ2UUsfdXPewb5x8Q1zxTPCDcS6hm",
  "key17": "63V4EFvWgoxbRdrbAoAsYtT4vGWxYV8XdWp6DC7VgG8kaevGqKjidwd5c3mPD1gQzpxUTEuUBHYULYnGpNZhR6eo",
  "key18": "4HjzsmdS4yJyuQmJ63XqRBeGqzaqT59prfRNstrQKPb22QzZ45AXjjUhxmKzwSQmi7G8GVXi2YQGCbySwZHdszBB",
  "key19": "3jwjvABUw7stGhdQJFWoPdq2191CEbycLtpiUTCE6ov2Ljqj4Rs99KXqfHQbraFLvj6vbK4YREDaCkw8pCPnJNrF",
  "key20": "64arCyJsPntYjGhA2zvoU1Bosh5sYcdEGayxAhWSEzPdmnefyzjVSHy92kPMySDA4NbSSpyaYtfAbSspFLbq7h6R",
  "key21": "5yYqudLLjDRsUJrZdzCzmvEBkJEsYNt6q2nwhoCnN79qmbsPYcck1g7Po1F6GgAzoKJjTk1MPL5C3FUMemeVmg6y",
  "key22": "4oEpxVWTgU9QrdYAhscy3m6Qe2JuM8CYuhCQff5JyXdBEo9UuUSZxhxZYvCEarMugPnkkqNYZxiKAhZ3zb4XuWvv",
  "key23": "4unssoPU6Wo11XKViyAEtcNRWAwzAjkfsrGMatd5LRGTjb6pMLnSePkmF3UUdhVW5A5N1UA8c17aof21o5KWvnvN",
  "key24": "42y4GSKeV99QBgZPfSFqZzx9V1jbzgT3QhShXvp2ztBRPNaiNH3u8tAvucLvCJtREHpH2TGk4EDzbbP7pX6Awa1B",
  "key25": "4asWwsq673qky6vDGNbrY9tm4bDgrVUsBArgcoVLTsupNt3jXraoJAcGA4fR31rwUxASW1CtE8Eeq9nRGP3dpfaq",
  "key26": "5tRhNcHpr8APLdKvKtjbFQN2QAK8mw2m6pq2T7khYbJ3i6n7Sg4X7RoPNrTdiCvqAN99cc4wosTy5ZihWs3REMY7",
  "key27": "ikinBBjbBVrMSwSpqQE1HYEfbqNL6mmnJ7kwLzYmhNqpqXRaDKRgknadSnyJcLDGugcUJhjG7yRGb8URVZEhDQS",
  "key28": "vwoVnTk3gCs3DGkPLbTWYyJyVUS8gcrvXKSxxxr3Gf3NTQeohPsD1DZNbpuJ3GXt6bJuYmSu8kbbjWUS47itGnk",
  "key29": "TXv2iAdDdTHAiY5pvTUzr1Z8k79iobFJV7VLu95QppKLXB7gFJF2u9aokNUqooo7TMeGbNMxh6GXh8Ec2g3zuCu",
  "key30": "5SxQZVTfMD4QKuDQKibtJv1Xj8zA1TuPJzGirPaLSnbesbGixK6mf4MLZbVUBBV9BvNRaiDwYNEQb5p6ULNzAyPT",
  "key31": "3vP8L5ZyEC5kVKX35Tn5FS7JksEXD2igzLZPeq4MxEnix6nTpGmQwo8pCA7sjeYwKd6Y2F1SmbfujpGM9sFrz3jg",
  "key32": "5TS1xxMo1Htx4Cb31US6p1edk9XL51LkC9vFUs3MEpJH1k5RXvWHmdo6iJmYMxudBKuHMbuCptV1zVKV3DssfdYW"
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
