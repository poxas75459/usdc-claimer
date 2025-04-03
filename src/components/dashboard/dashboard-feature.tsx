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
    "5q8nccwGgi6k3NbVffyyczxhmg8BxWe6WYwsE5TMPmwuogWX2RTSwjEu4qk1oHsP1j4A4w1BXpYWzdZCyaezvi9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNpE2eCtLZVPk5gHVqsZmPDo2hAX7NcatDzvQAq1kCdoeBR2vzSSyCuXjqLx9XQxynKHTMZKrxULV59g9h8PHN6",
  "key1": "25XVMtYcAwTF5tS6jaNiRKD3mo8eXs3H52gVmt4h3B2TUh7D9A9ADorKxpGpgLiXFzquDWpZ9YuJTq2Xj79aETbe",
  "key2": "5pmaXniRZLFPB3XmZF73b11j58hFYahnHUouZ6A4m43vXE9j5gg4naHB4gVzAiYULyGAxRe6RC1HWLVA2NQMgCVm",
  "key3": "2YvSKBx7rp5UJaTsSozHhf8poJMZpfipihWSFdzGr8DdbPCa8VMYWANCJgqzYyE2JMYnmxvypkxsqMVeFSo3Zok6",
  "key4": "3s3C9tXzDsTLbUQGtjwa4ShEd7jCLjxudhFWjiQFP6GrcEWktbFDemsohtw73K7h468wiYdzh93he7Lb9CBC5nDu",
  "key5": "4zSkgKpN8ahbt6P6UsWyBUP1wft47UXE47XpkXdMfswPAoj2iKkYb12JjoEpdSdgsVMDzxt1FSWR8ckuXXT33JP2",
  "key6": "5eRRQA64bdVK2U3QcGAAWRBYhkMBGxzStAx2kqjVM4sX58WCwE9VKL27jeBDrhzA65RBxLtRvyRFchATcRXafPjm",
  "key7": "2gANemvoDDeUyzDXhdy9kyGB5jBp28X1WfHwTTchzYP6MYBHpQSJNzyMNPAJLTbpTqLYeNuWrB2Msqey1oG687tn",
  "key8": "2HNiz9gW2g3aHL1ES7u99ccDc91kNAhQU5mthDHaVW9cfWraDVw2C4QrFrXQTBPYYSaad7McRfUt5KHpCTzQFcGd",
  "key9": "2tBfwKcphJqw8p3JdrHjgtTmZ2ndkJHvUhmQPgqGKQsGc14P8ckig3qweqHDRTBt54YRFWinGhaQvbTrwmYaPDMd",
  "key10": "5rfFbkQybDfds1C1KrdrcysrNDHyyhfug9iWKxkXvJQrS9euQK1yXfZWLbydv739ea5g1Zszz1vVNR3fUVF3sMma",
  "key11": "2PHgC7BErsZNsBf7zJ4GPnENwAGz4x3eHd7YgBPZt427PHXagh8SMuWLVNLBtofhwmvs1uvMFttdKWy2Zp58dTAF",
  "key12": "4W3gEBwJAp4fKu1HT6Yjm5Xi73EY8b8D9vNjhgWg6TsBxBZN23pawNfaTQmaNKdSJd8MniYcFHhunCrbnQWXCuK9",
  "key13": "dmG3EF2EV9PtYAHLmrtapcDtTBHgX893WWcmwnK8LRmoHdPdpqaK7q4gFUCRy7cvGM2GmznBJPxWCVVFgfBpQ96",
  "key14": "4ytCqaKpZrzaJMnfQPsXJayLMH5LEXk3kZ1vz3X1JV848pFwVWb9FnEaHHYjcjE78SCTgiSSLWwZ9eXoCS6Hcp8R",
  "key15": "54bJ6ZrpcGTYbaueMaEHg2h3RvKTfZ5w3YZbRPBhSPGAEMYCCQ5n8NEopHef9HCEDA45SbcyyZtH4Ju1oPPBycwg",
  "key16": "23Ps3fwkvhj8pgxg7gf1vwTx7xUMkH28PAnNWiU2y84TS75pxZJsYMHYji1QPNhC1R8zmE8gEfdTJzgeDmMG7Js7",
  "key17": "24gRAgemMnedUGE9sbqyqj9yz5uLzX8sptrZhegiNxYDM1BNkWKhPad7wBDSuJZvY2ZbXV4ijLtQSNBK1vux44Q9",
  "key18": "4aW7kEcwRkG44YE9F4bmQubohC77rKguFYeHwTs13CputVCTBZZGMHc9DE18M2YmfPubvt5EvfJpX3H6iFZnU7ah",
  "key19": "5rSuicTqeDTv1CDAUEeLsvNxG2HtnMXekAnydgVvM2nimHXEyw6rUcyt8oLZkKMoBaWTteFFrKscqLtdZRbhSC2h",
  "key20": "cDpJvQBiEXNnUjuKaiFUbQYd4NrFa5q1fnWH7GtB8S1VETH7rrfovydUXVqd5K46FLK7BxU7tL4VjqeTiJjW6Pt",
  "key21": "3owXtgsEAQ5UK9UjuVSexvzqyeN8zKszqWXjRbxHdrVD5SzrVwquciRyQpB7BssCdrE5m2dDPkLKCANSRcTR1ewi",
  "key22": "egEgLK2D9oNQtMANcm4X9o1a6e3T5WNQR77XduVNev6JcGQRR3HHRjepbrV788z3pYwK5cpCa916sB7JEQkpHRP",
  "key23": "3aw4iZJQS6VkKKBmoNZNPv987ntWVG48N23yE8JakE3zEYrtZec33CKwEu9AGmEnxuxMnr3UQTis5wry3zgH8cAb",
  "key24": "3cNCWCA7cYziKsHFCuUbg2wAyxav5jmGC8zrEf7VmLC6JmNUVsu1ts9paRvzUbtLAkmjAE1292jcNsk5sSpZMvPk",
  "key25": "3gQ4THumji8N3Z6FUei9d8tsmvzJCEKLqggGpjMoDZoL4cVzNtZu1CJ1uUCJyWC6RD15wW57pZ7L9nThZrUt7Zg9",
  "key26": "5zomnAc3738wnsQaNZPFrApSFeFzRBfhXFUBfi8tEYQGfii3FMx7Ni3ApGNP5UjdUNzg4io6joem8jTBLSSV6RPQ",
  "key27": "nHRC9S3PDDSJyeVxtAZibraYpYd68DctxzPRCQapckYoHbocVZNLusiVADfFCL2paJWXCr5CKtjTcDke3oZK6jr",
  "key28": "4AFsKBDpEWMKBNSwB6XRDs8Ft44rPQf3CBps7qtsXowBW9WtX5XHa5pj9K27mQ4LHysCQHu21JQA7Du1bVCbq5fH",
  "key29": "mRfeLLM8xRBuCpE5mnLzVvZZHYH6MccrsZE3MPChJYaHCNQUiX6bF6HfmS3dE6LqbUGHNpu7VQMasu7fdNgdbMF",
  "key30": "3PqBSaqyC3FnEDSpHRvtNF1z2ByZMX4wiiQjk6w94oapuSVFa6RaibqKGfVot2gU5zYf4PbkfDvAKYMGNfr7ZXGQ",
  "key31": "5cyDwdkrh3erVS8R3c9Y5s5vusrYcje4CtV8HdX8toLMdAt9fuQq5ahXm8M3LHaj6JwQL4TfR3vxqYDDQCcjxbgz",
  "key32": "KTyiWVCTzyBFEJTmd64asndTfRnawPTmhxoQMB98cSYjLAQYAEpisJmednHAza7hj6ZuoXYenhbFzqFVRPtfjHc",
  "key33": "4o9WPt961u7LpZmBU5S8h47iwFhiC1j9XACnyoLdGW5eYRNZpkxTRdwBDaFHTJ9cwdJjaiCi6r3gxqo7dBy9aeZX",
  "key34": "2tjKBbHWw8JH8bEyEYsjmxyhrCzUwRCDcamanroi35nE7Bs1EBAxVZcwEFC8xPQq58dJKPF4fZA27Z6EXSLzpbux",
  "key35": "3pTriQj5ekRNAxNgGcTtKc7BZu5FCRJrgBwbF36xnzDjbuZQzG3Ezz7wtbmWBGEnYoS5MSVhiDkPESwAgQyp9hJ3"
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
