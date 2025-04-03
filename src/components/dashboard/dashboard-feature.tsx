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
    "4c1VvdZkAJXB7ULXWJtksDrPEuLrmxLq8xBcusTXqkKro51T25sfL63xc5kc72DXVghFZUw57dKajQCX1hkv9LUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZgWvf6nuwzbgWfpHPw2kT83TSmNG5Z2FJqurbcuqyRrsKK2gvomGpSjrVWPZ3mHh2k9d4Mc11NU3s4pxuAnQUz",
  "key1": "31Msbmi4Li7bzzZkkUwnwoZhsCBKDfJQxC9oYfQzM7947hz4aUxKoxSJvzRqiLhzRs52gfuofshoJQrnnFp5FsNR",
  "key2": "5reNFQVxm9XCF2vgM5pupZ3Ti4m81YZqU62p4Xp1zsQ79pwaawgXyNTDTNpftSQLhaZGEcAzLYejPPGjMQKj6Tqx",
  "key3": "67FUA5i5JsQjEij2VUMt1QQjdZd1DNXN2rZN8QK4Tm3WTEmYx7ubHU1HJLpsTpmgLMZmvST7GU3tLNHwdkipFYVg",
  "key4": "4E8Lg3C7ijgJmBJ64vgwKwzKybsaWecReJZEJQXsxQa89RvwFRmii541tUJiXyGsTtqSq24PLSc6rCfpvomT1j5u",
  "key5": "5CNRoAtgNwhQVSoZGF42WRAjSDAqvmWKo6PXNx7Z6j5VWzHhQANFNT6kotJMjEDvZ4y4pNSioZ1GZ4rKqzioFXdD",
  "key6": "2QCiLXkcojRDF15jHri9v6xZuSvo1ussDZRxS7tmPefGLxh2YfwsSSEiZpKG3VrehyarVRzn9aL9LHRHyrky5VZn",
  "key7": "39Xmx7DupBRActtjmyJ7etSzLoNWW7JrEXCAkUvcK89YV7y65rBM2KV73RijKUpUQtpjB9Ps5u4LokRVFXKDC4Km",
  "key8": "YP5Rz43d3UaqgDxK1PWYfj6BYKug1LswnNnRppdXWosXZcB87UCvWBa3ABBC1pUKmpWuZfxf2yqpHb68JRoqSAP",
  "key9": "9ZW3WDu54vP7Wv1WjR3MYzF9mDj1xkpBCWkADjmVNcbWsWJk3Yp3zvMcWWCEhe4vfTnnZk6osy3BsBP6fE5jAHM",
  "key10": "5cfRmi2KSmEqNusT6N38v73hk4Fd8XGecGxpPnHVZxxf1MNiW56WRvtL6F9k9EKAQdgCAKuMe4cRTrffrbuZCbU8",
  "key11": "2xCp7Gp8SG1h1nXiKrSp5v56RUB3DeXEom9Cj4mpy6XotKLorQU2TesgjsXJ3wz1rKu6xuXb3qjawf6KPmsKAPwh",
  "key12": "65daeRkWgUhj9M4h2NZbfvCBZ1Z8fpqyo17ZYfmCeE4qpc5yHSbFQLLGyYTRk4G2pcTfe4MEtqV37Qf2CdQ4uFDQ",
  "key13": "3ANm2H9sQQtP6Gub8aTDj4bQNmXA6j8VBJwcZVjeypmtz55PoEkx9fzW8rGCmB4sdS9CAMX9Rgk7mMeVuXpAmwe9",
  "key14": "3vtNUkR6Ur7UPuZFgEnvGQnnMo198nh4xWGNAvMsU31x1VGB3C2wm3Ai1RjH8U7EZSFP8guoVPe5Wvnh3ky4emcG",
  "key15": "t3KMyWsWS42yXC4UXfzADZDDUMrUPQ3XmjGVDok3j8KiGsvg7RJMMVUhYcJyhqw13K1YkEoHmmaTFa2KVbRtvMa",
  "key16": "2brG3jo1LuYmjLVdaWk2CNsov9RBw5e6ziGemVLuC2H9kcrZN48U2gnJKuVyfWogjyh9EejMkbeyqGfUAbMNvAun",
  "key17": "sFt4n28X49UiCmYscNvHKMBTHbfXAaUCLeuUEs94sQxupeHU2QJMrDhdXPPeZJCMw3hwMgs9eLnA55ZgKxLPBm1",
  "key18": "3QU2WozFaXPbroktYCr49EfaY1MxY5oENvVBZwT2mvnNPMLpnyuTJRUQ37djbDAFM7CPEy78oAijFGKSVbfUx7ht",
  "key19": "2dkyQTKxswaVAFNRJbxPngL7tUwP25yr4bpw9sp8oXCTrpRazZmuxsoGCtV3u5z8jzR4hFbHcxSCViJkuDfczxnb",
  "key20": "5u2RQnqzrc8P5NNhPj2v8dKjkFomp5fDBRd3shHpPEYLtsR25fXiwvmfGTzi8CUMYAGcpWfNfUKrq15QHM7iJSSx",
  "key21": "4kaSN3oQEFumLEQsoMPAMsxoXLiVxT6DkxXv2sqJwU4Au9hHwz8sYzGNhHrMGRV8CuBNgTAs4S2brC9jMwyKC1Gr",
  "key22": "41wfYXuSDJRTDG8ZCnaQiYNeuPYR3JjDGj9E2xMf9QeophoPt9RwM4dCMk1DGB3aGfQgwdsCsK1FNtJ59CJVDzrk",
  "key23": "2gtXaHQMyHuCsKb15nMCdQC2byfmY9cd2pYsDzJPHutPEMpPzBef41PP54UPANcHxVLvP3TJahy2dAh7tvwCf75",
  "key24": "25whTcerP2UwzvrgDywNTYACJAecuoA52NqDSEXxdaaVnMZk9rCXKaDvNZuaQMP1NwVvXgMKFqBo7ywraN9vEp82",
  "key25": "57bzprV75m4E5F3w5f5fzhKpGf5WTskg7Zan4P6aRZ9jxU9L6dLS1H8nfDuXqoZQ2w9UoMgruBREqwrfA1WJAGRy",
  "key26": "32BPMLKC9RofjG1U6mVH9zHbwDeKSGBXKyMBLX7SqqPcL7cGJnwrbm7FFF6g2CpeZuYQTVXx1hXuGtyr8iG2DkDR",
  "key27": "5DUnynDxS5nj1xrfjCBiXFx2VsAjtH4EaQks9NbKz16viieV4LLvDa9kkhVv2MDu14ec2WZswnc8vbpNB1Xbb6bK",
  "key28": "5h94ooZdcRoofMsTqYqAaDdSYNUs9C5EaCND6CxGKejcaZepvzdJqVhBj9QNsHR9VR9tFzX3bPbn8abDDtWgERDm",
  "key29": "3YxjGbuXpiUSwddruPWDL2tXU7nUafRR9gbaoEk5VfJUFoNU53zNJVKksfvGpAbvjqM4q834725iycNPivtXwiG",
  "key30": "3h9nXpjYZGjDr82MhqXXQkxCkdBMFtRwLiZyF5Fi5hntk3PYAMSMrFe5RiYqAyQKCCDFTnAnTjLb7JKXnMQFxQuV",
  "key31": "26CvK5HNd9ZV1UNq4XrevCqL3JwgFgi2o8uKoDvYji1ZfGD78dTxjeGYcawBkp75kpfGWSdiGCDWSF5qhfMpmHfV",
  "key32": "4PXYERX1hExKKVgdyCsKn4gyfT1YBynuPTqBKtNL7JsLpGNAuZ4vWxH6zgUDQuaTUFYzdgsmNsYjer35cY8sNqwK"
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
