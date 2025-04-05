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
    "4HQdSB6TXrFFPRjGas4sHL51Je6Za8icC69GnNzr7HiMziJCqYvqhgmhdadxKXYHMzFZU3U5nys8WAnxMJqQ3xrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tk2QDnsDZ5yta1KTrnKJR6KwgLWmyhyScUjJYfoP5ifC34mpMckyDFXZwAEXHo8M5cKVxe1JSLKVguVMAykDb1Q",
  "key1": "2qs5fQQLjHyUa6a9J1DJP4TnADgcz7fnM2mT2pxt5PwCEy9qKj6S92B4UtjMmyJgDGamZeYvkwRnaU2Htg581RFE",
  "key2": "5uKoCq4UWDeeXYimLdyuWvSxY57JCtcx99ujBW3DUiHkGPputcowRDw6dnFyWMao6L6af4n95dspA7vuXQv2jrzc",
  "key3": "UgDUpEitiEd7T6AQdc8b1sxRsQXHdTp9XBeeccnnRZ1xTkkszoVZWjZxNTq7qyonVRyu45QEZ6eshFKXgM3BLB9",
  "key4": "G8rSv1NnF1RzfgxijksF76BY9afn1xzFpTTR3A9FPVmsx9Au75ARcrTZNq69VZ3og1AUecZHNNhmeR6LXnBq61W",
  "key5": "2ucwP1ViAur6AZdtqrSnqy97BZgHgMZn3DnZyQnKaJa2NaxaEL6Y2M5rjfdHDPBhRnEfqwMwj9yu83pHZ547JyNK",
  "key6": "62DZkJLUTroBxsZDRdkXqwvWsL9PY54yGZqHbB2cFGFxrG1dn6DPQYFWVtCAJDzWDABCy8byz2ouzuKdcqi14jW2",
  "key7": "3w1eNQfy72Z7sZ3cYRJ4baZqnZjwHw7QEWpXpzBJNvGaiyNAgkCK8oDZPSYYp4M8NjGCBtiqCoeTKvJU56vNdu4m",
  "key8": "RnZybhmLKZZzdoZgXHRALgviSHXgiE1Vi7UZ5877zNRiUoV4PPdds2Di9d5yDGFc581KqTgd5dAsx4tbnLBLU8Z",
  "key9": "5ebtzdr5PD77h8fJaMonkD6fx57TEW5aKJorG82KNXjgj1fjQXT9S5EreaUmL21reqx6Bw2w7xRZRP5Mho3rFknD",
  "key10": "ytqkKwJXyWCHQgCMFuZW3ve7CGdh3HC15HfDxN4Qid8AHfUrcaJ4NZGmyeHbEJCm1C4a5hUAiMwv8G5dMBbuPGb",
  "key11": "4chXejin1S2Vfjb7MerUahkuFvEMCJbwa2qK93fqR2nkVfkNSv1tg4Rgd9vgENBhwrx22GggD6YiPTM4KWmQKEU3",
  "key12": "tP9k9Upr244zT7opvXHuAgAo8Ly5LtURVSyiefyJJ4fnpmZ2YXmVUCiwrFSePiZowbutpgbgye3EAtiGLNU9b9H",
  "key13": "QKtR7hCqoj7YUKm61CU9LZ7reyYwnYEMoYABgXPUowLRaYo4wdBhgjqT1oPGsYuMqp7AAzPcRuhTzBKh5dDk1p8",
  "key14": "3QUifTjiYPrN6Cuoww61VZgjtULdsTpYpkExofpMQq1fTy51FSamNkwaeeib7RB76wERhTbvyxxSUPpEk5oUsudK",
  "key15": "242t4i2qiQ1QjVrwE1Zwe81oc5WCkKg5H1S7APeSPmNbGZzNDUdTd24NYEpYgurBaDkpuJfdqVZU2jmXtZvY97GH",
  "key16": "5fZMnPpMaYsT6L4K3HpG2e4BQC2rbzMqEdcMYgE5qgEiwu5UKWcvfneeDTLGvPkTTNXs6tUMPAdtzyRqxRaMDvsM",
  "key17": "4RbP2ZH1EFn7r63K5Jq44ihoweQAnujZfJsqLhm22LQYYNbqcC7pAWZWWXizXivN7WGe7BfjH2m8DMBFjpq5GPj3",
  "key18": "5XUSfnutuiSGeduAZT16Qf8GpPhGtJhwx7KiwEwZsBeasW1ak64A9D8H7FyRgndK7qzBX17ghNExG3qC1UKPp9DZ",
  "key19": "2at3soCXRUP2xC45k3BzWcwU1oZUfxeajFHRMtuUrx5D2C7zXuqV5YjpzpXGqRfw8TThZQBcJoUSVSWU6dkR9vE8",
  "key20": "4XZRh1xgAREVLFEkVGPoTih1jg4yAj339Pb2mPqjmtHRLXm6PL45dqgPwLNPeVcHCUS353MbaepeDHUEMjwe8rJj",
  "key21": "dnaYuaLfHPL9zy6Rcd8ZvMaLd4TUSkFuvjqaVins3qzPh3hzEY1aT9LnDrN8brkKSmwT7Uy8jHR3azZxTDTnxpC",
  "key22": "2QY56MKscXXrTXkVeSNBg8hrNsMWbrW9ifDdmVR3UNL21DpzdhfPDN2gL25ko6JCoD6NGR8phL28ywha5aPkTkur",
  "key23": "4rom7XTPnGQNKKtjaEKfeyQ2n28emC4s96zn85hy6dC6a9qfxF8LECmueHCZuYYthqt16BcwwahAUH2op7g4Paqo",
  "key24": "W1RtiMMHgbJzweaW7EzanmSngHS78srBH9oW4FAyaYVJ9qG8UKopKysNRu7YKUQu4EtiqdrFFvhxspAov7VwF7d"
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
