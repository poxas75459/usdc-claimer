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
    "2NCbnqu7TYh9tw2WM9S6vRr4cvpXiZTAML7ZZ2PJHfn9yBR4HMAb512PkGAYDoifu39aGFVF3dCi5VJXJdY6gCy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvp5yN7hdxhz58kDteh2Vera5avfgw7KKKJVkodweFR2qNN6bJ6c2KUCc2Qu4Lg4v8vV4agxtooRvk7A2zj39Ce",
  "key1": "4bui79sms6a26Fgpi2Dr5GJ4QMY8fiJP6Vb93qQ1xLKrgavpp5pqc3qi32GEnUDhrDLmMTFqN4PJBjDPEDkxuryY",
  "key2": "4kcRm78gtigHpMbxibinf6XWicTBzqvCoVs5z7E89dqUdLLfYd7TG5kZgxiMMuEAGcYBN5XX6zittLQWvfx7ydKv",
  "key3": "2wdhoVYPouT6HDqowNz2kb2WPtj4XuChhSFwLtUme37TyKjie6YDcCbDjgbPPnMjKwqWj3dixRjn3xwCdKw9aKeZ",
  "key4": "5hd8mVYg5CyzmPB1U4WwEi7Bn6cesMZcpPZBZbaQEXfdduWDkmhe3V8ZaNR4JZmDCoekK1yW7a3NBMTG9YhxDk5Y",
  "key5": "2ZKWXPGUxP3afYKo3zwS9AeccTraEdLD82UrXGXMtNpaYriiDv8fdqMgU9W2fhzWmafsMiDSGrCHqxNdk33JyY4X",
  "key6": "6xNixsyenywt3oMojKPN2yA6w2pn8vXXeSKM1kxHY2xFD7TDWYFBBfwPRdRMs35pgTV62r279kaq8vKpdbU8Rix",
  "key7": "3tqwxdZ7WDp535ixcJmcXqmGFN5Akmkm6sN99pmyXSH9x3GxqwNKeZnJ87rZPGG3rfBeyZRQzcq8SYf9vviBLVbd",
  "key8": "AMW63GYnZPsWYZFzC9U8oBaYEddNAdHS87KxHTneZYgPFc9qEuACK9p3XH7nHckutZWvC7vUZPPmpU6rsXAw5D3",
  "key9": "2Vvto2o67n66d6HKPcZ9pVaXNvtjSe1KxCFb5fkEzE3XHvPkL5n4CqoALwdpSSfBMKkkXUv6ftD9ZQEyBaaGqWcS",
  "key10": "2sLPYmXEE1s2H51Qn3MpqQX4kyWxuG48mAn2qeAXjDrZCUZa3Nwymu4k3vj7HEhy6iC2XvM1UwvwCJEGfbEaDhka",
  "key11": "5krVS5VDJjLKhTt7MNnJzLFvZaD7XiaqJV3gqPeFFcF4YtrNjRAvkYP9ZxeEymrHCXfPjtN6x8mZQqWQqJN8v6DC",
  "key12": "4b6gbt5g5qmgp2e9byy7yEq5h7pSRyoTm1Y6PfSySkdecXU9HHkeuwXJ7CCcbM1Jtcb5tTypmFrE8bpCKTtiAKem",
  "key13": "28yiETUDfJq5v9b8ykuKwDsyeADB2hKmTQ2pBhfQcDQHpifFEiQyf1Fb3eeYBJzEaDuvmsE4arySH2pzRd2j4dbz",
  "key14": "4XUse8C34tBBi1LGiMoQ2vD1pGNLqTbSGWmVMusq2cHFSGmeYVYnH8qvncAwHJ69ALXnPbqPYpLMRDyKnZ1DMXPY",
  "key15": "5E8n8bB1m23j87qtcjX9yP9MApQXE49XovKyLtGApSLNESpTrL3ZmyDkF564nGNbD6LbwCF1ajKPk9WkRjvFXvux",
  "key16": "2dFZA2bBpUGafxWHdg8x3jYW9mDY3JqnsWuHwmENHz7zS23tdBdygzQpFfEasasdGM3HoLWbY4VoZsipwMX9DrK1",
  "key17": "2jtJPXzjXa9HqhEA2MqKru5GfZaDJVh8pYD8RFx2Q1MPFZmSpa4EjXU9zffxCjRDVtCJUxeWLVVM3L9vYjcaEr6f",
  "key18": "PwnKsJTCwa4Rhx3GCdjBAb49zpiQvcB4UmyrqzPj28VGQ2o91LpwWhumKTjFA1q45sHZSxdNRwPsBRuEd3aSmwo",
  "key19": "49h1XBRmKmAo5X3n7rdFWhr8AYaRLXBNoaNBGi59y1W9nNL3ha1HosQc4kGpWGWNfvhTrFqtPzjD1QDrXjwoMg5P",
  "key20": "2dEn9KF6axhnHua2KTE912rWbw1toTwfRhoEPwxarBTQs6mjHReT3puYmgLNUcMPxhWEKtthutfsZy1JywY8Y6Yn",
  "key21": "4cdzGzyy7oFkFCjL7SW4PiEnGKd9qKoqSs7EVXvUd2EkUAMwRG7jVRMt7aQdUjeBoZXjQN8wdnpNtZrB2gNgXfpw",
  "key22": "31SAULbWZMJNuM3LrBz2CGMWdiVMBxr2znV3LrqQwke7tGUCPswCLAFY8B9AFH4ThpNRTxZB6J2WDvAFpeB8UKFY",
  "key23": "5VKpAmSjxVqHoVCGzf6vp7pRKEvEVdV3uMPXHi48FL3TtJCK2eVw9FhQaY8jXSj4vTeaXquyt2hpDtSkGspNBdUe",
  "key24": "5gE4GxjLNsxYJ9wc9TaDv9EryouXSuWrfBZ6Z1ijUTHqN3LRJh2fk6Y7ER3yYYjfkiU6jNgDv7PvGLoKzDuY5v1Q",
  "key25": "Q2US7kwwrvMtpywHwSU6uNVsz4c2RAM866BP9sfkDcBTdffBmec25Hx9NuwgLMahskpMpUV3nM9EdJT4bZdDsMC",
  "key26": "3panYMPoNTnNaG7VxySE89cbKdA8tdFzbAPgwQt8Lk9oXRnYGj9xhn8S7sL3eLSKJJswwbJ8pP8F6JrG1fDXECEG"
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
