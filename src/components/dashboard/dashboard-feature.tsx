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
    "5A6Vdp4N3UEPHqmz7Eh4eHVwE4Aknux2AHrd71m5VRHJgrKpwtSbnuz2FTJYKukomsBA8uEUrSX31yUzWeaY8suq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2humTq8vMKC7fCKtzBZVFm9Eyo8i5W8ENiduaAJgJnWAhc4Mq9yKMingkq9VpZ64tESUVbDs1zKzhaFP2vkvazNJ",
  "key1": "5uS9t8QgThcwTtPV7m64UNrASpUoTavRegJkRynKMhHJJrKNHXpBzfHE1FjgSrz9TsAURXX1sUpxZjmztH9X7dFG",
  "key2": "57QcKCnZC2MhFFZUzk9jNegt42pSB9YdZDGwN4Xpdpbeoe2k2zhMC3v2xWqweFUsMpkbq4q5HUyVDLMqthZVAkpj",
  "key3": "3PPvv81dg25uKryteoF5AtFH3yh3vKqABCnNjZMotuyjdNVZKKgjX6CwRnPxregk9z34JMRCzMx9eWBSLsDy7ma3",
  "key4": "2qYbJaZBe6FjnnKEeJW8Ld1ZbUYwTEyVxk3BBh31sfEwshtsx3jX34KTEfeB3DcA9VLevvRbkr8YTV5DG5eYCtVW",
  "key5": "3mBfETkWJEVp45yNCfi9ZeuM7reXMXb5BsTU6d3DLeW6t3gg2SktSExnbfrRDkTgsf12aUyrUQvAiPrpU6gS19Bx",
  "key6": "427U9B9Dz6TgjWyXmvmhV5M2FHCxQ4sU4eoCWBdwDw2ywWHUtKAaPDjAa4wd8NK7dmMdJWxqq6fUTFJVhz1HDWPu",
  "key7": "2xBg61gL3thcgbtuRhm7517KgwaDaNEQL9UnAi81pc3bLEJtxc1Roe8njukDc2Byngciu53pXWU11J2zq88fy1Wj",
  "key8": "5MeFS5fpnCsTp1w9jhRMjvyudM2uFoZvv8RWW5kJww6svBL32yGc4NH6MUg28VmfrqYmgZYXSqa4icXS9wxaF2LK",
  "key9": "4thiXkuGgbWHsPpnrGSiKrFimu762Ub5oHQweCFpDv3SRBNEBR6w1DKwg8KUw5AB1uGWjEk2zT1xNZYzWDPfvhck",
  "key10": "3HbjvYqn8bZcfKnvV1gJG4XbZy5APtqm6ehohjXEznoGpesYspCfKNcZBKeMnLzabUtmTH1KyZir98tqaucotKpy",
  "key11": "3ztZiXGwC71d27k4ZcPaY2x75Q3XqGCu8q51CrBhmPsCZLoxbjQka4swcDmrJaqop5Bxv8CCruf1Vuaj5Xf46XgA",
  "key12": "57vY2qctrfLoK5TLFStAorhFWKas7fZMHEZH2ZuADL11j6DZPW4h1oMSeF7RmWuHTYxrrvcX77DTmPj47yE6isQZ",
  "key13": "5MeEsBdAZo6iEzJUmVUV7hLYgkdGtJ68k52AoHzDftHoDVtXBksaj5qzwVHoFLAvdK6cYsfXWZQEn7eer5TpUjaa",
  "key14": "628bu9hmaRKsEharYDaugYg3ybdncazfvp31iD8z8DtpWAtYBL36yTxay9uhUy4ZJkiJ3K69btUUhua5JXeAAAR8",
  "key15": "3azAMfsvLsJdHec38F26XUaJYaB16iPZMiwPanBJh13NruUHJMpTn7hDYdhKziqHxKYZGSNYZWtx7MLZ8xujuNJ8",
  "key16": "4vmgHnZEX9sDeSthpX3NyBPKgGgVZpUwrSY2U7NPqsJcMaDo8nKLTX6SrDLYwj34ibMjMC1JbyUza3siUEaAduFz",
  "key17": "5kdDPaX2WmKYhdV5cGpXbyju3d5PK8LP7bcJyqAEPpqbmAbPkpNx1UJXt2P5uJkvazfVE4BsP85C6TAtEqQFee1N",
  "key18": "43a6RMEpgGDTKJ3cDdrzaGMUsmM8kBtHoRjKqLX1Qwmg3NVZQbZ89HAF1FNqFfZkmxwtPh8cqJaYbDJQoKChNmNz",
  "key19": "3Y2m31Y3XTtX9qzGdoFNP8Xi5r83cP8hE45Kvw1sH1zKrRUyRsEiAd1WQTuAEJLPT8xQbHqQHpdTNaQ1hPj3eWZj",
  "key20": "4pG6BqBa8rYMfwJqSyANeoxnqPyAJZRrm3PQduJpWjcpV3yny5XQ1yQDPsEMED5kPLen8ehAE7XTqCqGuu36DW9f",
  "key21": "7SJDwsTZpNGcChpD5gekVhWvy16Tzm41dSMiaJHAt49yCXgF9iBgxk5u2cNAXbb6cvL36kVBeZHXX1xLPzf8KWW",
  "key22": "3Vg1oyYPhwnBHXn9uhkPRLC2QpHAWdNgy75DAf6NJgtJeP51ZURSinjC46rQtE3XPzJ59cBvwPYVFZMWF9fjW8UT",
  "key23": "56wLzMQr2GLVnCmVvXqV7KAn6ZfgN2u6EEQLAThyAeNLznqPCCFF8UVhVoXT2C38ixPnDdZWhkr6g3NZQJRkZa9V",
  "key24": "3bBNxq7r5TnWAYHTTY3V3Rfj7VJWaBsn3wTKx9BeBknLiaFs6QXp77eC2zkUsLNfv4htRN99n7sdm7np21CAAmwH",
  "key25": "JXWrw38PPPa5258GmMXCvBQrvBUZEVwkhvW6GsUAccfxz9LDvtoSsBABFqwzRjtD2hXnZbot8SGAQJgL4PAd7Hj",
  "key26": "4wSQKXUyo9sYqXYKqZ8FJVyJdhJ6ExjLaay1jo8VPqLNfKn1gRpZTbyyY7sMEocGgDD7s4qPUWQL62TzFy9GgWk1",
  "key27": "QLXzbJwPhcSxzKL2yHWtnf1WkbX1YuCDt1TgEaZK2X54nu62ghHhG3WKzwqLARdTnTm5VzEDt9cRvAprkCPiQJa",
  "key28": "4JbFjGpTqC73WxkbavWu6ssUqiivSyzB2Xp94T56uxfC3d3zXcbDJyadfaLD3N9i7skFzurdaL1TTm4h7dQtx42i",
  "key29": "4Z3pDs4V8qjNQhxXsXxw6RFErCVRmMB36d61HihXafSJdQaFQfycMUcZ2xrYLMKw8TNpSXArGSD8QwDKx2WwPE8A"
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
