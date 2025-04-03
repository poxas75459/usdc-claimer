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
    "gMDSYShxqNsLggH1MdeGuJgwJYur9A3YRB49V6gnAfz9rtKXDjhcKpRz18wQ4QJDjM9LbHeuM6GshXH4Ny7rD4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgL8irau3isViG1WJC7j4UryVb6C5dSzwq4Y8N9j59co9X7ecTrYgWzsYxvxVZoR5FVZQMg1uVhbFf835i9CZAU",
  "key1": "5KbVn71jUUUz1AZwLVTFTegqjuB8ZxkvBTtUiq8NfCJMwgHhxMUQq2vz3HStrbpg1hj78YgDD1Ce83iEfxadiGLH",
  "key2": "34YgZp8ZRgJgnqCQ8ARDEoDNMCc3hKrGcHt6ZAXYN4jm1B7e7ZJMrATUeDuXYpPMPfuhUoSp3trFj96aKvjGYs5w",
  "key3": "4Locwakti1Z5i1Y94KQU9cerVJ8jocAYo5fQbr22BXAj9WiKkgJxdidkBgry6nTxXt5gr7k6u7h6EMHmRoiqEaiy",
  "key4": "5PREbGtQUJJUXCnhMiNqfjRagHy8DQweM4emNGwcKGyy9Nxa9Tm93dioejoo2Qieogpiwz4siGxcE3mczacNDv79",
  "key5": "LVuMi8iQvQkZvWQt1AkmjkKxk332vBbgZM9kxRmyGSDcnXqUN9K8WuQftvW22J4jRjA8UkTqAW3bSfPatB9zFX7",
  "key6": "3JBgdzJ9NCWX7C5nB8D8Gpm8Tt7Z8aon8byFHsgbXmCGTjFVnM5a142jAE8r7zHVQcrE2iJBSoaoeaT644Z9LJCQ",
  "key7": "4muRz5mLWGk6xKcn7fodP5Fp8VhxNCrpu1joTVY2gTvbqXQtKT4GrWAKdScYBhCuuB2v5wsVgrLYssGRGgTdiTKF",
  "key8": "BK3cmexmJLPnez2rEftzBoGA5KeAyxuPkfr4dTwkkQJhVqAQ65W3NqcKeeJNxKWXKMkQ68W1NnPXLT7cEk5Rrkn",
  "key9": "4F4iu59WMA5ieF17nshobAXTXBTiWDwKxX3VrhvKv9ANw7Q5ewevWB7D4Fvb1rzCxEMnLzjj9HZxPFdQv2P3EQC9",
  "key10": "SKvGbJaoD6ay7mQfKgPAV37p48n69DLtxe87QZbxAVoKZEaCr735p6s5vgjXjsg4XGUDuuTk8yn75X19FGfRxFt",
  "key11": "4jT1CRgeFz1Tbr94N9GQahB3ZnyQdHsdwWkhMpKiTJKiHwYLt9KvaDrQcBN3h9n8q9Xw7tBdWD5QUpgSftZrKjH4",
  "key12": "4a21t3jJbsLNMh6QYDefNtVxtBnEZiWmf17z8ecgd1PdrEYpNt7VAfrKaqJHswhAE71Gpnghxo5wQ9GQ734wUWU1",
  "key13": "58UywmsCXv2JNicLnzgsHqEfgGP5Mc53GYL79ybrrfHm5Fu1h6NB9n15mSge8ahHWPxkTyiAypuK11vRroxtYXAC",
  "key14": "4FmJVByuyD4vfKLjjDUJW436b92qFEYitiG4UtAuouZ1EYZDbPJvEaGCE5ZEvjMNvNtSDEH2nib2TbqqtjuJnDN3",
  "key15": "3GWDNtrEXnrL5SpraBWKReTxzWv9Hr6uL29YXhf3BBtjTFXYCMcZubMpGsypbyUXVhMtwmehj4jZPT9h6Ljg87co",
  "key16": "bcFZuRvTmGLgPSLzwTb9JX8BG6SWehouN2TnAZNKcSYTqXtmkTFbcbAzpygZWURaVtae74iQaG7jXjf9SHYNC1b",
  "key17": "3zbRStTcwTN7CYtfo5q7YnpQH8LKMStBCbFgfFdnpFHyDoav7i152Ui3q39DTi3DQzxAtkyfHbjetA6YNkrVjYob",
  "key18": "2m4EGGHLZMFVUZbafxWDMYmwejQZiwYxtLXzDnG7nokkYSTL4ndHZ3hoXFtYg5Dg57yWVPqM6t7dYcKsceUPefdK",
  "key19": "5rPurKBfKBF4rV9bCA7NpEBuNiToJRVpGNPwBfKa9MqHoGTYapLCrhqw63gzgwa96xP8cWt8CBubBnE1U6gWkS5S",
  "key20": "21ps1HAx3r1jkWeT1TDwZMWrHAnX5LoBV2pkVDozfzxBYXvFjX7gL7cszXTkEKbF9J6eUEKd1Q6BibgYdfGJrkrP",
  "key21": "5yoH36pE9SRmRPoKCtHXyHxpJuai2bVvQ7tccPWj9yzBWF3dqMmBpJdATwMsBxRfEW6UVzqDDeEMjLZM95NgJirq",
  "key22": "3wZ94vY3nTdixXspfyPpXwadr3KU811tMRJBxazJ19pX4ouQ5Hmd8iJiUTHFzpyfXTRLPgmoobj5bdwvdfFXYzeE",
  "key23": "FvhR9gEU3GA5fY23aEgGFaifZ99bPPSVWEGdBbXyvU6BL7A16Ve2SFrUnLrbjXTH86FEukL6uDDosAAjBXMGeGb",
  "key24": "j8nRUpEBu4H25UZCnKimMAaKxLyeEP6eYebLw7s6xu2Rg7m4TJJ6KmzPBhce1ZDU9Sd3fP1Ums32PhV6TV2WwB2",
  "key25": "47B8ZCmYXLtS7tgFjDKwKu8U5cfvxv246goFLoH6XaEBurTq3xX8kaG5idvjpHXc3xZAo5cZ1AeNCCfQz8RGWhtt",
  "key26": "5HEvRC3LYtWvyqr2dKitjP5JxpAC6mvy4U5hQB4sdiGEfX9wnEZmS57DfEF6zAwtBT3SwTK5GXYtKmFQV1aDHnCP",
  "key27": "3fQp2yvhyuRRtxPuLPpQ5DxYUAHCLsvyETTXanQtL2bMRwTcKMa3Zw5veG1oxohRiBu7RVtA5WtkZTy62iamoF4n",
  "key28": "2rzHHyAR6vertrX48qmd7yEVBqzbpDUnAbscwQkqkTdy61nNmyVL1Ytc15FP8gLAMy6v5WLnLzHXiQGvW4oQFP4Z",
  "key29": "3CoaNkwLL4YxSR3giLpQxW9LDMX7NQj79s15YzZZFCBK9mpYQpwxUQ2CDia8WtTYrqALzokPMZccVmj5Sv4tqBkE",
  "key30": "2hNVsauUWZ1pPPEgrSYxcqCU8JcoJKRSXyoFSUEgxbfVyp4UZjpuk9TpLjKteK2k1LT76ZLXgs35V41gwJJEybpJ",
  "key31": "4zVZpCEeK4S2oVGtjBqcAprcmHMuKSji4NTNnLxg9ivbnrEXxPTmCpc4cxCf6FHvq3FkGCr43GfTsT5evNtbLwRh"
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
