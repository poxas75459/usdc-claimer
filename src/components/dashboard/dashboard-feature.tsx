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
    "5Wn8dipkWXh7uJYGjaBbQKJvyCxGDrVmCBRtiCg18hZmy5gz15fAAwMgcQQtzVwYkkz115My9UusuCPmkaHrrAnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTnKNZfhqUg1wcU6o82gMkwNdVRCpp7YrrE5Fyd8Fr7PrEfYzS5xAFjziCqMWXtZGJeK6RYXCrM8bpgVY1zfm7H",
  "key1": "eGVM2C9Rp6JY7p7hhvAj1fn6xwBGzCkrVZyMn9E9JkyHj31D7uW1RXciR6xSo8hEvYGYxPJtTZ1qJusDZ8BP5jL",
  "key2": "4NMy67eCSNTS2LfNdCWbqEvEUpmDRQf8wWMk8vuttdYpiPnSiBTyZRyi3UhhWypRXZQgV4o6bii1jA51DfLjtv63",
  "key3": "3Z7yNsz6Z7Q1DiVk4JbXpw59xR24crNmizXKr3SgEBodNyrCRbUwDwvbBG2dVvNark5UbuiUApxCMeXdTwQJEstP",
  "key4": "5VVM9ALRxv1Pp5KBTuobPDtXBYXS1vTEbLKgHJda2VcM9zJVAJFrBsvgPUY6YrqkTxvsrERQtPRVopZY52F2qNgY",
  "key5": "4E3rVC57DDua2jG1SW3LQYjRf57t6176YNJKwe7QiTioqiWy4qCSsXjik8buRjrVh3aA5eCu3dQqZJ4cw58mBWbK",
  "key6": "VRGQsoZviBUg1ebDE3QoJNdkdqLcZ5MQH4Vsw7JLZGBcJiaQVurvWpuNGuFXFQU7i78bvFxJRFLd3E3sQzWbmUq",
  "key7": "61WFhofnmoBuegvBDmSbVEzEVEhgxc5p5g5nt3iz6C91cRgo7TyJBhFC76PwrdhppMMv8cUkzzHfNkn9zq9MTnPK",
  "key8": "5d939Ffgjpp9VSMEnZNMHUQBS6ZuBgCNHH678LJNmeSHpUT5RfcUUriNeBXjzUsSaxaqrc1hGBE2hojDX3agdGCo",
  "key9": "44hjmF5iaMFPfkVHQJDqhEimKi1WK9QVbRyTF2e4qBTZzABrdHeKxBdQxK6X8R6ts4AbobihnpkeCHBn6nWTTDif",
  "key10": "2jGLKD8mAsy5BnQeB94iPSPbwBcrJ9cAeBLLS3XZcz7hWYtSX1Y16CfYVF2N6AyZNWGFKgt2m4SpLQyrxbBSuw6d",
  "key11": "5JxpFMPxi5Sbf3o6Frg9UEhFHWL4HtBnyYfzAMpUjsEkcfVLU1dDZEJNu3eoc2NvaoNpTACvDcLoe2afwDBf1bZB",
  "key12": "4GmBN4d5Bj6mAKT3ztviucN567CDnhMAaeQPLjxv8bxabobVqZBGoHuwnveBfaVFsxUZUFVWk8dTPZhmhNfKS9LS",
  "key13": "5xKc9mvEZj16mAEFppcHSHWAuPzXifarMejhPsNihpRuMnhjt5gfg5f6DzdYY86zCA8WTdmw9KnmWvr9LtXBsgcA",
  "key14": "XnZndU1P6CVKNDoJzGePjeou9v67fL21RJvik675429P9LMjFRoiRgr2iHbp3ypHcJTQ5M7kXhp5S3FH4FvjMyR",
  "key15": "2Q8XjfSRAFVNMBxiSBc5nzkkjbnC1Q5fkLKaF3xjqwbdqtvkXk5Umt2qoP3XnPx6cBiNxBmNSJoM72FBv3sQzGo9",
  "key16": "4BvzAaJATR4sD6kMUqtFE9YkWHPHygY2tQix6ZVCcjxgmQF8Me4mNQTZ7EM6FjWMENHPeLYgQkjdMNRrd7h8QtEo",
  "key17": "VUuRCaKNCi6JBjDcMjUiiAZc2im2sfiDUnzStb5Z1CPJpXNdwXpPxCNdePWVgyaTUwxJpsMgpDmuFa7oUyCjh4o",
  "key18": "SNmYi8S8wXY7VdUQmmEeSdG151AM4HFuspX9hJND4mALdyrFfRJhbRVefh6fH13DmFTU5NuQPoy1skJFoT42Wiv",
  "key19": "5jS5hByDpbt7akAZd3CNkU7hfVPQcxjxByJF55jrfxy8ucAKR47w88G91M7EGZpujP121J2CanSTB6yaHPTvZ7Ci",
  "key20": "w73HrLobWSykcUAh37y1VBE25yazYtm8hP5SDRv5zNCVywUt7enYsE1uekETwHDhkv8b7iADmCC1c1XxthAXtsP",
  "key21": "rGptAx4jo85uhb73VLY7wfGA5bB18VFBjZJ7wpDtmTVM9FxvLan34bxqbfhgBiMRm5NdsXdYks9G38jGmviVBYJ",
  "key22": "FUQXgn6iAtWNVq9bL8DwyzaJVr54k1mv5nsYApAj8XESF561wVMJgZf1nfYrq8UUDBvpZYBCB4Wq27eKn45GeGB",
  "key23": "4omSniGnvxzudvk8Tr8n3nS5yT94YxKhpN1AG1vXoJJHVRP9ujNHgyiNS3wP6nMqyUyV6D9WcCo5HADHQZZUZeJm",
  "key24": "3aXcBe74EJBXwfz84VHZ76uZ5VCkGN3W7dZ7jhbPsLSpPf2TFTxTbTWvtB4tJXJazKfaoxdme8LHqkutTuEac7AL",
  "key25": "5posiK8zPCcSfnnRM3o6NbqPM2JDSnAQbf7QALhVw7bvojB9qC8tm9ZR8W8tUyFVfr6YanAgaEW4F1N7n5kvWBE5",
  "key26": "2NgVpVqYeNy15YJfwRyJyhbuBqr8f2boHirYpm3r1aDe5nK7UduLjeUcB5GZGwPG1mMoNscNQxgjn2voVbb4153P",
  "key27": "3exoScPpdCaBLLFsSx8a9do3f27HQ5vZktBY7Zp7AudSHpZWbSrieHfU4ahn1MJ5eNvcbzGSmu7zQqSUjDL6WaCw",
  "key28": "3n7VyNxbSTpRSttkx98dUwv34hT9ALA3FCuPQrbqsApokDx9C91m5RdXm8n1cozXavoN9fwuEH3jF4iWz6yYvgf3",
  "key29": "3CE9SNJ4K3qJnzRjDHiT752qi6zL2WzB7SjGAiP13ELGADtFWsB54Nxyh3ELxpCqP3VPP5RJRz5pyqxCSHXLZQHS",
  "key30": "9LEYzDaJszPZ1FiAWMs6aWSSjVyvYYeHZhdG5R4ugVjcQBZQ84dAouRQz5m4b2PE9HAxFaZXy19V4mLJMXKvv4x",
  "key31": "Z1TgQUedziQfYMQ1aEaDpC2Dtb7oFGRd9qh651KSXzecAPQ7mk1612v5Z8t4gZDTB6dqYjBWDvJRt4ijg2PncMN",
  "key32": "2WshNMfjpWuwQAN8uyz692ZTVwWr2HmzrFrtN6LfMEFa8DHtU729XHGkNc77g2z3511y4vd6dNzMbkegPpcjDtNg",
  "key33": "47JxYCrc9DiqznMdCUq2ZKtVEfL1uVCThHMSepHB8Wa3Aa17Lxr9ojNunwZ9EsMGyrizNmkWhTte84HumH4VdFG7",
  "key34": "2ajL75MvCJAU1qwgoELxC9XTQ81Q7iQ6ouUVvKDaCPxoowdA8B6P459M9JB2FBKx3ciE1r1yzVyRzHr7XH2ttPQz",
  "key35": "LqWHrF2w41zAF3oFtjkXariemqns5sin75TV1HaYYixnWquYXXUnierNQcAmNqt7PBAdk7p9CNdVytsoA5erReC"
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
