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
    "4kmAZtaMqJTkzsX7YRMa3wGmZ7pEXv8ZygpNWeJPhtWuCvfwmoQqZrhaNsW9S6HbBhsvonpreFeg3mRMnBV3Mbsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgTJQv6hoYyJPeVQvyjow8bNguS7pydibfwtsekGwCR92HQemup2obE39mFjyJBH8kTeCygefFdAm3uMaQz9o4n",
  "key1": "47eWu62E6fWag5iNMBNezZteDrUy7sA8PGvvEZggXJnEGp9gVTc46HkDt9xLzY8emCAV5QyDb1jemExSGRM9CKWq",
  "key2": "5FvEBJJUXTXUCAjcRyMNABZnzcm6QjqSoRorQ8fnWXBki3hekrxu8RTo7qcMVDj1FE3vgKNxaLCoGkWeW7Jo83Zk",
  "key3": "2QgUHSyzq2rynaoqRYKpbLiYZLWY1haJsc6qe1GKwEMTBrkeQsSYBPe8iDGQH2fomu8163LJvJF8fTmRYWJa1Afw",
  "key4": "4kXjBJvFibw6YUna4XPhe4AgkE1R7LxeC9vkUD9WAuHuQHPRDdEm1k3wF9fG3fKWFPvQwoLiprC84YcQhzbmo2rf",
  "key5": "Xp5wu2dGwtpZMTLp8dcmnCHCCpurqvY6CNd4N22tTa2mZPqiP7ZBYu95GpSCR3cqpEDZY4Wr77Tr8zVt8Qzi2Sx",
  "key6": "51cFe3sfPBUDBhaNXZgwGTVk7nh5GTWQCrA71PJCMGKpdLuQqoL9d5daFVCBkEFL8ExiodEwbCPKzrzcRSZh6PCY",
  "key7": "5ScCewaf53u9kyybwGzThVHFToiMohcfPZGXVjM5G91459UfCjWPQe55xwti5QZgnqJrrgNteqHJSbK75tVFEkSe",
  "key8": "34juv4ijMzXKoYQoyfBBkp8cjsbPc1XysLfWJyrK9ixdfYbdYCLahqeW3p3CAm3YvSV1J3SPXa8Pzd6ZvdUvfNHo",
  "key9": "5qZxTN7KrX56RNFNWPddLks4QkPbVu9UGoseQGUdrmQYQRgxoLaEsPTgJNRCCwpL3fg5sjZnmycCjKNCckYe2b6B",
  "key10": "5AEeJ9FMhbGfZwHGXCyaXTGwo9UedgMCLpfrK6nHBpjGKFhhRKJZ7q2Na16wYJFDP2bfqP6bZ6jccn1DUuz14V9T",
  "key11": "25QEZsawkSuyHbUm8daG52wL8pxoFC6KEzoGwUPcoAJ1NCGRkRghCAwYY6f7XqkvBofa5NSnijUp3JMHSHcobgww",
  "key12": "2hR3Uj2ynx19EHoRzsHdRXcfjJYtVVNWDHmM1jUfMRQqFnxAFVWQQWYokhGiZLa34gz1LHQJf6K6zJ36ZVQULbHy",
  "key13": "2XUvRQp1sM9TNM3eLVCt5v7M2CvBgqDzJi9BSqbv5mwyrtaMkq4BWdLbjUWN6LLn5Qwj4K8D8AZTWcCAA2T5Vt5T",
  "key14": "2X5EpYf9g2jhTtqPcbgtLjXRFXqvhoBpnQ7SMW8pgV2ENT3A8YsHHQ5Vo4EJxkYpW1hVnP5cw9SfjuTY51S1pYia",
  "key15": "3gVaYB8FbVpjuoshi1jCKQ3HYmrHKX97QxqWoguqTL6oCdinAgwPaPKmkrBWYgBC4bmowEKFH2eQkhz9mEauJmLj",
  "key16": "3E6BjSrHLZ6SKvLhzedb9ZoM4eRfZfwoQD9g4f6X78jvGNXJqAVuDmKq5CvGANpbnHzfYkK9zRTqPsJ6K1x1Sahv",
  "key17": "2FHGNmaF1LFXVq3K8LSTuZA8BmgDMf28K1B35LHChYcvnLd7qWtjqV4f43XGo7BTNdPN47nD3UmshK1McNevW6z4",
  "key18": "2Y8sJ23crReqkDKVGBfStUEoDGNgbd2Kvm7BEUqZn35H2TLC92EkY6KgsnZc1sT2zWAjjPS4RavnbSJPnoDtPfho",
  "key19": "HaQhkZydffJkpm2KLhGp8xw6BySVpRzVmu4qwYg8FpwYhwp1nkBarRZy1qSq66xdq8RUhoKjZGm39SDj9m9XR6y",
  "key20": "4NmHwcR68zFhAtBVzioTGxM3fEWGu4P2A7jAjjr3DNbLCFjgEz3EHRYbFNUVkeG6sQTs8zKCPW2sZBvwzPfTMADu",
  "key21": "2LxECxBdm82GgF5yo8iKNQPdzEWpt7pyVS42okhE4fUp4FhbyYkCZn4cybVzhujrmQwT3hxUZn2xvF8H82JVGFXK",
  "key22": "3zDJ2sopZiFTPEEnWnqJWz3BZJPY44XTd2ZGMR8qcbGs2TNA2LZbWepU12EzdcyZvk4kLZkLp43TwAB1y22gxRbj",
  "key23": "4QpED9Nf2bas312QC75jzbYDYgNUnQ9EmAGFJrDPyeNed5Fuqg1j6iPctQQKBjjjxCrGdEuabGDjr6mnkvRugfHx",
  "key24": "TYEAf89Y7BnJswTiyyRvm2XM3ZVoyPETVz8oYNAuCWFLr6rUa8ZhA1ng7DUXqJC1FsNc9krDQXD4UdW345UY1GH"
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
