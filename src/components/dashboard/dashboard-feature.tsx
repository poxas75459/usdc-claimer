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
    "3CFfdxsjvR8SCYsyAfDuRrMqacXswbY1EjZ3taV4GuwrsEh1Roug6K6VaX1itrt3vDzCgAihx8wfGVw7oj9LDmq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQzoypGnPTMSPaQ2HscfC9mrDSyVRo8MuHQ8nQLE3ah5uuwdg4KBNKbVLXDdwzv6FesCyS743ntSp485LdNdJGM",
  "key1": "2VsT15Rvtng6oPpjLQ2y1FWkEVZuhW9zCsCJdFrFBG6Qm1mvaH7chuCj1fFzXQRRk3XqAVNvy4FVg5kZbf1csFmE",
  "key2": "48xiJgJvFN8tio9fWmNcvK65uGCHjQ96orKZKmAZ8yFrGHkc2VAGhRATraua55GpMimFdUZRr4TXEbZnFVxGYnXX",
  "key3": "EGnrBm4g3NdEpDptNrm6u4DX2u7X4wHkkLjt8y4B4vjTdaprY4QHsVyHnLS1o7R8T76X8NEWMoxoB1cYcHhKTGE",
  "key4": "5vtFL9CRCgwrJdLUMkN34oYaaMeV8yyvM43Nrkci9tDVsBBWRjiKtVMbtJBQP5aeUxvb3iadSG5894Y9JiqYGf6y",
  "key5": "5FjHNPW1qJ6piBwtvSZ73zrRf8mQY8svVBRk9RNFmCxZEwnCapUCG93Vgz2qcYPzXXT2p9B4ncG3QG8RGhHf9iZ3",
  "key6": "4yW7Z1q5FEg6GLuQv2mYnnxUnEBEy9yEwnVrHxNFFBcsmC7tJ4vHGwSsjBzX5ymTArC69LimA9pu8Phd3yRC6XL2",
  "key7": "5qhQNvwdN2sydBWthFcfjUUJibSF89brj6vddSkv2ygxdNYZ26czXvzAukwPwHaNLX6ANopEzKbSUA21DNMyuotx",
  "key8": "3urwAV6fzUdyViiS7oCyJmNfSHc5yWV99JJLZZ798sbFkZ9L7FvPkPABnw3b35Aoi6Pnr6miM1QnRGorSRjoHD2j",
  "key9": "2c2LFqoAMbhe3BRCgpkuSztCGZjQiB7mfYmwxuswX2SFLMTecZQURkYCgAHpgWAbAco8VunjuCGZsZnLLcAySFo1",
  "key10": "4uxYGFxCkZbEvZJMKod1Sz58vJ9J6dNrft5iWEVHgiVJfMM1ezpAHb9GKNoYcyEabXcwJm2TGb2n22ESTRZTKbqN",
  "key11": "qS2EDmPJkE6a1rwpZuaRexqQR5RnuM98NPavPAC1iwq3dzeVCdCUPKyhucbVuMN4D1uRct7PYVUGmd8ZMQvLYaz",
  "key12": "3uZ92tW4Z6xgrRGMYnAgJDmRDnJxybnW39VqxZD5ohBDQDFfewiwc4Jru1F5KwPsBcBPiMQVFWVTFhvGQE1jSxkL",
  "key13": "5qUMGnDsZnWaRjUyWWPDcxKkKXkw25ucwjQ6oKyS4nThim6zJ7JH15t5BrZqSx5Wrf2GhH5sY1kjp7hoeE4488yF",
  "key14": "4wNJDTGqmj599JsEVN8MpUV4PQGDhAXZDtKnJQn2EoVLrjGvaABk7wMVGW5LRLsxJtD2HsdnhgdjMHD85DqT9XNj",
  "key15": "33wGdpbtymdppYXkUXfpBdbxv7KQyxoZPCyjNj29yEPfkh45cbr2C5s68ndkUNiZM3jra1fN7W8UJbuQQUCYAnD5",
  "key16": "4fysPj4n7c3c9TdewDWpgirJCQxZXLZQzfZysDX98bfAVu7SnL6rqN2qgVUWaQ7mnLiqccuV16DhLzwuwFUm7sxk",
  "key17": "4ft547w47FjugQ916rs1XZetRLPW9uqmiFbTQfQVeY2H17nvF6yj8r5zAhSnUvKSFMwzcdGqsvip8Eg4JF8ns5rA",
  "key18": "GrhS6ymvJNpsJmyUfsiSvyREchA2Zh4WesSi7yrjdZt8zARzwk7jY72h2HT968NTkgyYsZcph2t7QiKh6Q7h4BL",
  "key19": "2qTqGyTUMEFRGRcK8J3p2MXHp6HmZhvxKL6T45NMPD2T2Bqtdx5yihjtYCcutXHx26FdjzWkE4QZUHSerDXK8RXo",
  "key20": "2feAsXm59rsn3KuLx45cZjZQEYRjZ9qZYq3V7cqe55UGx26Gcjt5Lri8B1sYTzPxX7VEMPM9jnGWBTRiB1phStdv",
  "key21": "5dSpGVmLneS86dY4nn7bReAMC4ENvBnkMFyzxZ24VdFg8vupbL7SdFjbwjZNSJ432VyL6Z6bPDTqgnw4BBuqjJt9",
  "key22": "2GA3ebRkMCX9Z8h2NAk62qUzg615Pojhxv8T9WRvhwSBGrCSSQ1wpLyJXDBy6MS7qgRtqpivPHwqiMBRykGYf1f9",
  "key23": "3boMHTrJiRBJxdX1u2ijQfERuc8CDuBfLzoxuQbvbX5pjXbwVtWevZA4r9FquZWXj5vkHZKQTCWvcY6z7jDjZXjm",
  "key24": "337rt3DKy9v61wiR1HmeqZNTCnyFP8sZ8eTeVv6nJa2Fd5rurAZdUWAuCYDa9jvTDfY9t9LQr8xcZmW3Ek9o8UUb",
  "key25": "3QMqfzZ8bRbsb8o6Tw1EPRv8oDut8ipeX4akdYReeFBF7josWFsRR7DKsVkN8iv4GDZNCVUSqx8HTVAAvG8PvhJQ",
  "key26": "P4ca5Z7KW84LgwDm2qcAoad7yURXPU6jrwMDBAm35Qjxc5QixdzCFFDTvT7m5owyi6ZBt5GCivdbmqxNYcTr941",
  "key27": "67WKsovhLs4bXSShy5CpxdUHK1MXzgyX3r6YCbK94jgTg7eTM9WFUYwN4PBoAMDEQ3mWaCUG1dvt2zAMMVgbfF6",
  "key28": "3DmntpngaXE3YRw87zxuTKMxDByLMsfHAcbx4gWyxJQmKutdHk97AovKag6Ceu5mB4NKoC5MxSLZqacxtVVBAwG4"
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
