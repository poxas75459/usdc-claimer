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
    "2CR4Bct65uyqY4xZnE7KAGUz1sXGbbTgFPKwWTA7AYFecfmxn2F5gxH1qfNfYWiAykRzPc8gFNMfexknRJACXRth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XWnQgLi6CqhDLGPqVNppa5Bdf2M2AxCQHffXysHDAyuxCYBhuwN5GuavG6nYUg8Vhgabiv9UfWhSURDESSsi8i",
  "key1": "2DKonvM22WSdzVnPYEsGb6aFkF1LAW9J4Lt4qanLwUGAw3VUUcaE7QbbqtecziGjo8z5W3EphC6tQo1tbkQ9Cki5",
  "key2": "5EhufvQZf1jVSAMtq1od82sesntLbYcbWpdVgUdyRdb9nTZxYQjmV2XiSSbv2RMoBtf9kDYLKeCnkHkHivNYjm7a",
  "key3": "5eFXXNnJebNNLNJ3ftTMUCaKNpsv2LKTGjk6DiUrPt6e6EViWnoCRYQ7NUkJcuXPrujACQCwBfdT22MPVfrzmgAP",
  "key4": "3vusKC6W39oGPZmmFPBHEXpSuY7NKiDiBcs7YkHRw2WBiaD3iMooapv35zVS8hajdcE2BFLerv3ZfesKb5XUSkFe",
  "key5": "2s5Htei4tiRoXLJ6WDhbfDsxcfzthR53sqLTrkZ3FU57wHcQwKWu7hfvgqHLxAK3Bf5xmReP47HNNF5NvA8FhrZu",
  "key6": "5o3gF7FGtzpRRxBBEud1mofqUD7AwLyc5SUmiqmkqbfDgVSJdrLChgizis4ARafp7hu15uiwQo1kfZ8iJUy3tgJ6",
  "key7": "Qb8H5x3P7V1EfpGVddZU7eBjJzRPVLHzNSvuFGyYzChmYVC5akDq2WqLVWU7hSH3mME3QCGxQ8wGvCy2Fs3DpZ3",
  "key8": "2GXxsDqbdE8Srvimv8krFjRNdaUET3HnFnmPifaH1R6aH2wtH1LbqXVNptNRXttDob4X9PABHJ9cKQws6u5b2qCA",
  "key9": "5J3LnsoC3pKWh6HJUQo61SNRK4u8zMJGSafgcdDDKQrppND1HF2a9KC5XwDPSnFZQmXkTHUd31BuqeRQxPsdnf7j",
  "key10": "C3aPkc1xUam1NmkSzCM14aT3soBqMhhWBBkjJYa8jDueC9f4tmx9bkMfnArD3sdPdmB1Mw7ZhSnairdL1ZtJjvb",
  "key11": "5yV7QyF8dbHPAtLMZJgq1bfmgzPocBG5XCzZ2EtGYmGjM9G8wDdGxMu1AaDichGL9cHcZQ2bR1i56pR4ePEHinoZ",
  "key12": "5Rh4rqwRup13B4Wj6kittJKNQS14pWVGcAHyNFpjkmcEWpkGNeAabcQw1G5Si6Vdr8xrBP2hnFVMeD9q7kygRhbn",
  "key13": "5oNByLwufcoPLPA71gcNjW8kRbpuAPxFLt8BkCEfTSnNtpfNmMz1SksS1FRou5UkZR5GLWYQtYqExnoQS87oqNPy",
  "key14": "5tcSVGuKvAxkfmcHo14NuzUxPp2j2FaRPkmR7iepmbSKtaPECz5fF1zB5qhMD4p81dXifpgcsMPVPrittDzinkGb",
  "key15": "UTYUvPBhrHf6u5a5wP4hXb4wNCsjET2Fj4FTQeenjJ8zL2BpBnoivaiQUd1ApMKnKc2zh2heUh4acGcR3p9UZpf",
  "key16": "8Z7Y7HRBvyDuithq4okdQ8ktYG6ASjd9HpVL3p3LnbnV6SxY9KRB3J6jUrmVrX5Coj92K3oq9pe9x962tn18Nje",
  "key17": "4hRkQbK3hMJp18rcxeHsarXsGtt5kUNtBvy7cFGqDASwfSdk2o5178Zcax9YgukvuaW2FrFyaxWb9EJSUdoy6BR",
  "key18": "5SwjJQGgm7GFf15bw7ZWocpGUo8oKXAUEphenG47a59KuSkFgQbmZei6bx1tC2ff7ACueffLiHr3YEtdFjSrNpyr",
  "key19": "2q1VNipJ3WWMCDYMeyZbkuN5oTGdX9XPhmjkR8hqwqh2n9VVpfaBYiSXQhKn8kXsxARTmRPLEdYYxqEFcBt4TCvR",
  "key20": "3Rc73F18Kwcp7VHCxXro1wtoZmcf3nJWEHmw2BJ5BbUyZcN3UoKzoaUk8uvuWtS8u72ko4ssqEw7T8njLbxUPWrN",
  "key21": "41KH1wEEMD2Z1ovxY259PqjLKnsaxcNPAycicifurz6gNJ9WQKGRp29Pn2pUBQGQEU5QUAB5aLbEAHhTBLfWWuZ7",
  "key22": "CsCbJQZ3ncHswvpKfKVXRHEFJZhsapg3RVSWfqQJwnZbgnp2ueAgPxebA1qvsB4M9J9Fw655RPpVWMS42zS1Ajg",
  "key23": "B26niJsHcNxNMD6G6FbEpAKCXAbCPWjJJSbuNLx2Y2Bz3z8c2X46H7aSr55Kd8LogrobSeEiMySyDVD1xQQUaoH",
  "key24": "3osSdetVHyKJgfkRpaP97NQgegrHZvwdtaF1RwDTK9XeksDY4Da8evjXGsW4DhpuCyteZEyLiboSmSMudR8cdtc1",
  "key25": "2ZQrxxgNM3SL75kJS2wvnbetEddVMQFgfJw9vVMCkmR2ra9wgtxeG8cCn7pipPhrqw3d2ymxgUCeJtFfeXqxxQtc",
  "key26": "5dJxuNQ5YbHAtiujshqBiZPXWfwzwVv94UG3S1nq6dXQS9ynNx7hyjvNjnx1bubPApgH55HyxXXPuBxa2pJPGMBT",
  "key27": "57nsrLV6bsr9Pqdiyp1MmpMoGMNvATd43vzYPWz4mfsaQ8cKrLW9ScaUKxLedo6hjrkMEwZHdonQY32NrJ46ECBk",
  "key28": "52cAGi9YJtsy5kcx47F27eegFg1Tt2ma6guYShtbNJEjiVh7PnMRvuNCRxFpgNEap6N1x7g54mybuy7ZX8P9oBsH",
  "key29": "4YfcF73KpWAEgVokav7La2hAcwfCEwovuZ7eNNs5ZPBdTHa7asXS2LKuS5jytQWBu6TeDuX7LqxMnrczVNgAoLPf",
  "key30": "jCFyt55VrPsLhYy7AX9RGHEFbk1ZoSkSJbMzdt6xoyGsbivF7u8eyjghmKHqNxi5RbKUxaUikgtDPYwKejFdJcD"
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
