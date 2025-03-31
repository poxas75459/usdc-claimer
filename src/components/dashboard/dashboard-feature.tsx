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
    "4muu36ixdSZjn2tPPNwJY1trXtMPy4pmNSQHnbz2zhDAeSpzfdJv4UraHLuYQaUDpKp5k73bxsNfaHq8DZYpmQWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pp98VkiYJmgS34VVAHrF4Pf2NUh6otYRsMXwe1sCnRtP5yKbXVoRqjgkvzjS4XYuFgcwEPNy24TxRKgJZcgS2Cc",
  "key1": "2oTfJDH8rTUs5B8cM5bNnAyLek6HLr29uznEbceaCaXwUu369Ex8erRRKNpJ5WFGiASo8jmWrgzAfAqWEgAuU86M",
  "key2": "3ESL4kp94Sb31RDNDczuCdjstkVAeT2pLv88fAjBgXiJUiqqfUYBR3sYzGcedSmt7PjbCaE82FbtwKryZqYy6Kjv",
  "key3": "4x447bRvauj33ZQz6LRnEEEk95HmQREkoGMfVVqGDk8JfzzEct5CazQM4RYsXef45zZjna6BYMvc1AJjnUZhXJ7D",
  "key4": "5jKwhgdENaE1SBJ4VqGkE7ssat29oHrxEB4hZR6ftibBfAx1rxTayok283JjeXPzSdxLKEG8o27r9gE1bQL9UBW6",
  "key5": "dVfhXS76Z72y5Z2gHkxUD7HiQNJw7vfmutyfPa7xBrDR8madG56aqBA1VkCn7mC3BAYZDoG1APkfkekWdUKRE3c",
  "key6": "4VB2id1u3k95KHjfSLxao6xr488sngtN9qgKCFKEPd1qp5SfGdezKobVEqcVAdMNMHisBV5HyeHFsKQQDFj1zoC6",
  "key7": "36HuFc8TLXtRMfjMrUU1YiujVNZfdVxLgvw8LbrJb1kH1uDHjT3cnSiLQ4Lrze7G3oKypaL5vJnewoVkvGt6GioV",
  "key8": "vdVzwLe7gTXNYUYu1JMsMAmMYj5GnGnfm9XiitZb7Ni4yvK7pEPuc8uoNtEp2zrzWhVfrMeHnjfFketkxT2z489",
  "key9": "56326phj3HG2AdJsiEVPkEjWMyaM5kWk4fYAwhvpJkYFB3bgnZg52oTa26ToZeKG3yL8ysqGeUPFaKEzfXEzZpSN",
  "key10": "Ruke9Hhz9zZGAGbmfTHLbMnxEMTtQmj7hxKqjNyki6kufSUERje8RzUfpbRayqiP5HYiAXMQGYSxatJ1fVCHBrQ",
  "key11": "1JubaSiPcMmtBpFkNwK6z4JYHmGPABk1GS3DUgjs5JgNEtV8pKEg5hjyd1m2McotxgYS8sswcioUryavHawrE5k",
  "key12": "SfSxbU5sAwTqMTyQYvi2nk8BfVcjv6tZH8KFRAbGoPHjXYNVD7kso5vCvZ17S6DMLnh4n9V83CA5sBRVERWhnGJ",
  "key13": "5yKW4KZhAq91jw44u8z3HSkwxFmE2C7YG26c1PfQuQMjSR1DXFZSshAL1JZaWr5mJNrsL1eqomS9oF17CsXAvNiK",
  "key14": "2pQTwJbHARM4tupff9PjPR35pHiCsdztagpJGudtmW9wMTQzk8XT93LfQnLA8F5WhEJU3gEpngDMeFzBkBNDZxU6",
  "key15": "4h2Jf8rUcGiF5uTJo38thNERqsy3NRUnaYf6Mykr6Y5kzjSRtzXFsp4DrodTXVuL1MzxLDo6tYfefEagR3jiitz2",
  "key16": "62PcTPxg3zHRV4a5VGoEWSXqULfhrSU7BBhv6LBCprXVXCW6MfANfneE9ppzS7eEMGCLBHEu5tXFpD2xN79xK4PL",
  "key17": "PksHwhFaWnrQG3aYLJs8XAFXzXUzh17nA3niiqqSFEuGAhjfTLtMhPV6S1ageKGUr97M6bw8hdJQ5mmTgfSDi2J",
  "key18": "2S3pQtXH3LXJ1HXrhxXAH4maGNeaJfxb39PM9zUKVF8peJAZMox1fn7u1DN9cmkaqxTgMyMADrGt5Tv7BRCoMypo",
  "key19": "3DdAeETbZFiEfX1P31eESXHqGZvcTZLxQxaexpCSsuyLf3yJviHjBL55JZxwyGkGEpz5kh83d7DFx18Bqnf9vxQi",
  "key20": "3ewqGFxPYQavfo4C4hptDZUPcEkN1Upm2DCdQmT8uJqiUUe7YNVLLA65PbC7KQCMw8dmXcmmtY7EG6dPjqseTaMm",
  "key21": "3F5sdfbLnaUcanq4rk3tiQicGxEJhK2KuoaM9JZit5phfAba1trTV54guUvofY1jR82ojrE7sPZR8NdPxeaci4mi",
  "key22": "2etoe7cFy92yvvHKH6fYhj7MTA8VhHFBkFsXMhpzc3QUT3RfRddWvrzpEyHCZf6NcHpjfyb9Y4TrDVVcha3vVEM3",
  "key23": "8PVJtqezc1ezxoUVKdtoQ7qFGSg4dNREzzc1bZsxbqir4cqgW29Gqezy3vQ8F8jHEy98DGgkZYzHeGHTLbDWtKk",
  "key24": "2EsCMB2BAWPjGk8yH5MtM3bBSc54WpcsakztweqPxqTc7ijhmmwkVDSUsBx6jEquJKMboj4NhLQLPspNBXNb9stg",
  "key25": "3Zz6qSS1CSkh2mxyt6oFcuiPfNCnBfMNi3eKxLopwRRX79nqVB9GyWGMpqVdeSayS4YKFEjYX4ZPoNCpPQoqXke2",
  "key26": "5gto9sBtsYQ4CNE3hrnYbGYCt6kNfvxvqRNNZQ6UPQVmsunkEqdojAb6MfdSD6QQg4RU4zUEfmj5x2VuncrN7Sz1"
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
