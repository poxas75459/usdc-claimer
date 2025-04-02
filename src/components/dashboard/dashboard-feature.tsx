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
    "3mcR6yLFK1jetL65ZsmtwM1nn97yMcCbLZKz9cqnk94FoH2ky454uVHCfsMivMW274DhXrYD4vMXteAzvbriiwPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hg4bSKstUuYpPt1d5sbX8vhPUZ1A9TTRERamkCtyHSTfuZAznt3eLsS9pZKoYq31BzbNhuh8F5fShvjPPgt5vRX",
  "key1": "4eQAQLaKCpzSsKAyx4xwVsr1f1br3aaDEDJTeSd73tZ9R1CKDWZmhBytQtGtfDAjeaEaHRu3FtyRkkokgDhtKN4N",
  "key2": "4bmhoC2jFVNyQ1y4roqEnDtRagm3XaA2WGFiiWEvbtURMEdY8xGyP8PkT9Nx15V3T7NeYAE1WepBgnNLGzfQqBGo",
  "key3": "4NajgQ6G4Wag7xA8wE7F2V4ZW3PPxTYUWGABS46zNDTEnZBamhhZLnJrqzLtqLLRDEDzjkpbeAXrkhdMU5r6qNc3",
  "key4": "5UpSkCX6spypdXxwYimNZNNWjtQrUcCXtv6DBk9QMg47FkDYc6SDN4bsrkjbQCjnWdo8bgCi7bzrUj65K3xkVfAs",
  "key5": "38BXydCWKDkcLjMnNFfQ1Suy7JRukbGULpkPAXeaXQepNkUZbVEr2QHj3SfLAVW6sL6rnnitGJyCsG4sAYzRbn6F",
  "key6": "nLPB8djiwqmMrSCPqPeaB7QHLJi44QtUJW39jfnmks5g2SVM6Yrb46XXeVhjztGKafxLqSZeWrtXo2DBUmhdsag",
  "key7": "2NS2sY73DvMKnXn5x591zy44xjvzEEi8xQyqhFLYTE6sxmvPjZLS2sSfCRiGq1GggsyXaTMD754B3cqKSwsbkSi8",
  "key8": "5J1qioixxzM5kopky3crrFZkbHwL4z6j9D3s4SzC5zyMPHWv4qiCAkcjAUpyrtkk1ENSXxv8mHngeNFaDco3onfg",
  "key9": "3qQWAgcXLoMDcd446Stk2FpbGw78ospkBPbHSMuAj1xPzkNH6kuKSzgxj9jCnC5mRhYq4kiPrntXc8dT8LgoSk9U",
  "key10": "5uG9PQycTYG1xi6e82Tg9rfh6DSncxGb1kzocBU4TaJKWAuTtexdjowHT68EyPX45pu9jpv6vnKkiezsuHmAjKo8",
  "key11": "29vsVZVEg3oVBC1qJqmrUxUbig3QEiVMfAB1SZjSmZVdfUo3t5vn52gvJeBpoimS7FCmwPPsaG1kEZxG5kBqp2p7",
  "key12": "4yveYUi9Df8gPRgngGUTAacwRqAdeLMJCbhh1CVYskgvqxTNdpMy5fobF8GXH41nmkHTRNaoBicpzRG6xcnjDAtE",
  "key13": "3YNevkm8Dsyr2LnKt8B1byi6cZbGEb8aMgES3Xfct9SCp2gNXFzuVPRjiatVxPFvcRitBFZUE1Kp6e1Yf52LW89m",
  "key14": "Sycw4WvJiiRqFY65ryhwjfi3G1g63a9rQ5pCiaFgC9thhjbCQiq61LymYcnc6ALxysmo13oPq7PedLMjGiD6Kxd",
  "key15": "jnuuaimQBcpFGuPSd4DCCSCFJQooEdRXK1nE9LNoF2fzoiepdq4U9PBwcJZG8LFo1YfjGdrXHtgmGfA9QVC4q5z",
  "key16": "3SppB8BmTQ4j7n2ybZQwqAhxTE612vBhqNukYh4CVEDWcQgRsjrC3rAK51ukLRELtT7h5oF1ZXtMvWDmV6Q4jwkp",
  "key17": "3wYxxnkhTBcqgP77PdLVsUfUfzjeVcPy7tjpY5f2tfoNVwjZ2eUL8jNmwr1bhsD66mYPWRr74Kcm3GVB7QSq54gS",
  "key18": "5fJTBGpLgyBPjHNL4LbioR1LjYYk9mJf4YvchDwkYaCzW3C6xHHCy2TmB7e7HDPycQGbne5GPvvUFHdALijWCeD7",
  "key19": "2kjdiJE52GpQN6QyjU8HhTUUTs569nT3HtJQSfpnQGQ8qdW6WraUEggDmfmpgwxZiqPa7TtFuDyNzgUoD1DL5ZmC",
  "key20": "zht42WBBRdSz8umKA5hdzPAfhhrZao6HEfVkvTh7q1iWovyfgFDdJfm6ZcdjYAApSakNLMNKPjYCXtsuVAfCHad",
  "key21": "5GH8pbprHdEaiYcWrjgzvQbhhKykNxCssRB6sBYf4Ym39gXiVZpeTtcaLQC1zTX1pXfZ2rYptSWgKLHYtihtj415",
  "key22": "4MmeCVKxquCETmaMv41TK5Ypct1CC6Uw8UjtdXgfQHAYrMLxgqWwQeuS5nSHWUdSf8AngrSidKe2TBunqLj3uo8F",
  "key23": "54qVjgzdMGMBQeJfvHVFKtKqRZrE7xxbFmoeyrVhpAxPA6Yk3PgAdwE9eQjiuYXh3C6qsBBkdzURK5VJUDMPLxSc",
  "key24": "3qaDheRuLhGQwPjotsQfevCtsrwgf93aJ6z8dunikvKR4FhVzXmHtjE5s9B8QbsPrfdXhiSp7rS4QZ7YgP5UFR2m",
  "key25": "35mkQ1Vfi1GLwitY3FdFnsuBNWR8gBURbNKwzqLeqNMLmqkcEZeNqnyapfwBu9gaTDzxu4d9RTaQJ23w1CJNLSEH",
  "key26": "2yhybAmERBUEdAjTbXCeob6BYyUJxRDYgBHXUbETvg7LVBNmzZSRSH1QUUaZBCEiFgFHpzs4CDrDtxSsB66SfzeS",
  "key27": "5EcNMSx6eZDXbCBsskY1azkyr59obKXyTYoDnidTZJhQGDachnGHx3fc1Jo1RNZgkQRP2t8LE8aZ2EcBFB9E97qs",
  "key28": "3czfRZfcegoYAJF2jCQc87QJgGK3wUvT7nXM47mXaAkXV7Vma9FD6HXLCA7y9etxt2MdgxcaQ58gUvhhAG8x41xU",
  "key29": "2aK5hkgTDMQGWrdwjtdvoEBa4axQtxGTBt4f6M1rkTUndBYy3nFoVxUuMzofWSsBHu47qK2CA3jowE83GsdYS1F7",
  "key30": "3LXmUmUkrvjjCHdpGQFpfH6y56WZMAFKBmjbDgKUTLYWXgepV82Tie4soEs4ebFsjSG25MsZsnD351CiazkYbZfp"
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
