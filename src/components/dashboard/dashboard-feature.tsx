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
    "3o7dC65vVh7ajysuGEVChmp2FRhPAHmWevaYT42kJDKBc6aSR72JbMYkfqPWVR81BgkHybB7GMUuXNwpxqUNh4Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJdMVyA5G97KyvwuyjkLvV34fGpLrDqmAF3TmMVyWzg3VK31BBUD9LrbLAbwbtBSBqUBpuFUSzWQwEsVumSL774",
  "key1": "5yLfuXkgzPG1kvfZbN7MtZgEy3ZKTPS2YymtMNi9psBFU7GyLkLS3Lk6BPA3cS5QeHLk6F8js4JVPBhj5eCJev3d",
  "key2": "5icy9dxmNmzisH33To34HPp3UYCWnyd4kQmsYuTwBrBH5UbU6p5p5MmFYvNoENHAFtrgDYSqnBqtXnUsh6vhtLN",
  "key3": "5mcxXBPVEAPy4qQYNwU5pqGQnvyRWi9AcnS8rffdrE8pKC7FiLottRTDZmWzqu1p4HEcMhih9oVBhumicYW8L29g",
  "key4": "48k8NMrHodSppmYH2ngGCK16oQr5qrn3ekyRydVQabE3vXJvMkxPkU4nTPsmQcvDTqsUPiz4LJeZioyNE858dE6D",
  "key5": "3aUXXoEV2pwDuotUsTUaUFwTo7nua8yRUjiZufGjhSr4ptjsmDfimsgf2mo5bp7nrwKWUN1YKDkrLZjbbdYptzCW",
  "key6": "4jKE8Nq4PCqv244jjg7urFAtZ7zBYDbX8sYwfqjk2AuLLffLzoH5Zssg1FCq9TEb3QhjBBgw4crTXxSfB2PJHMr4",
  "key7": "TfYTEMoUGkNYckrZDKc6tpkWw4kMW65J7CsMgp8pBChEJzonWHPbsj7CJue6uc4gfMVoR5eiXG62kySWHx5pTjc",
  "key8": "4o8tgiFUqVm8hhLVW9AWcicF94SYuHwekUAxXM1Vx2qo4DrwSp5aPGcHC1MQg1yXeiuSfKpoaFUrwSXMj5VModvf",
  "key9": "5sV9xkAS7Ek4kZRCtJC5gBNULAQBorvfRXXRyHKgwoEnSLPRy2z6PL4h7Tvx9hSPwj6GT8UJ9WkjppsqbKDy3sRC",
  "key10": "65czd7YiK5MvjXDhSbiHnRTqF1a3vYca2KQX35CqKVkK1kmJTjsE3TNCmEFK4yqbt27DiqBX1qUX1Q7kVA2qwk6R",
  "key11": "4uFQdLidDjGYocgjiqeHMScLNT1Z5gx3kwCp6iEdc7R8oHKoxEwArYZRUCqHnbort1GmP1QeSJGNmRkHYe4CgvCe",
  "key12": "4PHEG1Ntbqcnc9Yz2wqCndJ4HR377ojEPamfDfz8JXwqQUSWenxy2SqowSJfGZFWnnpW7cywpMXG5QkqZ6LzBLYM",
  "key13": "LpvAk1gYSwAzoJpSRRRX6DsgZgW7zDmz3432GNSHnrQoDEkpf1ZJntiTxkLeMgKmAsmns3r4EuFwCDcm3m7AisC",
  "key14": "3e9bZbysJ4E1jGsKbyRWx4Nc62wAUY35xfvT8KTXzydPDUEyrKXnd1ubq2u7G8WSa7kkgPB9uqfSJYLhnhadwxio",
  "key15": "4STJgoemfvqZiGkypCwUVVNM9LEVpS9rzMJh2RPQHPLHf2V1BJv8f66XjF8WSYkzDsSQqbZoLYGahhXE21zED56k",
  "key16": "4Hpq8QwE8TTeBmHheUcAZKJZjtNMkUSAstkgLeXkahoeLdkTNqQ2ZZpwkSibehvu26pYeSLwXYQQpg3QXEzqkpJU",
  "key17": "49pRhPtEBFXq6UqxY9piRDPQMKNMdVMVzKjgWUa3pACd5FJSZqnFiaamQkky9VqAFvTdAppnY8ZMbwUSsKY21Jvz",
  "key18": "4vc4PPdZhhyMLYvmv7HA8hwGKbqh76vC9CXRbLEPEoeu7RQLd2LeDNAUF8hUTgXUNbzRxxgA2u4PSyN4xzU2dNcR",
  "key19": "39iaqPCYeaHvf8gSSWWap53a7HcUFcQuXAGTWRo5cDM1TEG83FnZCb7uULU6pWT1CYtPJ2kQAxoL8m8w96S5iQhb",
  "key20": "4GXLuCAtsXeS1M6DX7NG97PWomQJxW98xX8KjxoKjEcz1tTa3Tz8Lwc2LYYp4m9SC4yHW3h8be69A5gv57YWysGP",
  "key21": "4XYmv3eA3yLpcLmGvQ2J9WDmFRxmbp1HBnKUJ653ZKyeYs2qygZGgssUgfXRJQWgh9kEMkmce1uY13ExowHzzg49",
  "key22": "5THU3D4vVogf55FoE987krWi7FrhcXrrodCZTwUWCKJR67ynGtYQVsCWVDX6SzPyYQWy7AEnStxv6iSJ98t9iuvd",
  "key23": "2B8thPWouhzP6KKNVXcJaE3gYRon5Bz7viSH7RfZdRrBkVtfygaLCk9uAFts1vTbUG1qDabmSUSPW3Xma2PJdBPZ",
  "key24": "4x913rBuPU7UnzDMNKzLBENC3dkpGFCwCQuwKLW3hTq9jZwNShQSGrztzLZrVbFRCyzhGFVGfXET2NVWN24EXEtN",
  "key25": "5DpBUVXNo9aiDqYekoBT6LtXd8YR4uSjS6fMVUzUaqymhp966B7c3nfBR88KsFgigRA7SZa7MAogEeULehpyQzxh",
  "key26": "QEZVBAFsV19MvtWf9CfwRujuddP144yfbU6ZpfsNN8rywh1a6PuQpYMbrvu8khXCmdgjrHGgdTBg9f1DDY4EMXW",
  "key27": "5xcMD7zJz5gk7bnY2Yf8ZLNxU3euKsvxCF8ik5sSgLYeE8F7hdVMXxeq844UbpsjM67YEMTjJMgwHULwPUPFPwH9",
  "key28": "3dcApwVRhB5vRW32P2QPj6KVxfUPqR5yWPwU7hfbJgJG85JP1LfRpEgTnw3WRJjUR97i2A1i1KCwrD5ue6JYcnze",
  "key29": "2mF6X8pddti642rBZYSrCewnu4thfR8BU5c9GQNdmGHf6PnhmfL91iA6MaSYuqprtrL1SaMyXzx5TKqtvAZX95pr",
  "key30": "5vHyjyNDJZZKDh2qBkgeUVJ18Nt4bchKfmqxiTU5rynthdvKTFhXwgGgYiSg1KssoUG79SUSrTdcURQxA5GeJzu9"
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
