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
    "4GLp4q1V74UyXz8PX29H158W8C13PaowR5TGDkLmMvqDVBqQg2k6XnjVwCwPAQpeEUJBdZBvqioytFLrVAD7JWbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBSzwWMZ32rm82DGfMqwMZp94oWhXoCG857QxLsdExyJ41UhpCaggN1zdPEcg21VaLkXgtk2GLaC4ZC64f5nhNR",
  "key1": "2PqPhi3iDDRcwBb5z3isDfdxjrqZouMX15BbFEzHnrruAZcinZdMC5jMAqatBrdgz6vQX3PiJQNVMNJfzskKXKo4",
  "key2": "27x4q6YU3SM7riXgrzSLW91RfhxTG2kR1f9CD1T2ZFTEyqgYmQp6Z3h8otimLQHj1jrz5wvHZGH2deEKLRHZcTgp",
  "key3": "gt5UYmxVhkkg8C7NwQMVzyUggUU3j4wbhaVJszui1Qe4fBYAyxtrRvR7gv4LMsEKsRPaUHFX9e1yKYU8gF5tMbp",
  "key4": "2YB1ZHcJmpsiqqfiDYGJ7NsNCWWZvnwjb2FCPyiDssMaDv4D8yCu9gEUDeg5PwKTmfHYTmHUT4c841NRGS2crmAy",
  "key5": "5Q2AFjXd6weng8ncNXNNtKwsM1rrKEZHayS9BihqWWPNXGyYoN94LabZEx3YtxBe3EVvmowSYHWabNywxbg1JVD4",
  "key6": "4QtsFhhuT4XA3446bsHWiFTVYctbLAUwtsfef5sjZpBVLTXVuozAhWenjF2BnL2cHi3FCXiKHkaMFBwAZ6gAqZn3",
  "key7": "3ZqRQhHYYH2BpgHXGMDgL888gg2HLhLemHxbFPv8m4UZhLiriNCnsTpeR5Sn1mAb92do1TKCM4RZiVKiQqFefig8",
  "key8": "5ELtTnaD9XCu2op3d7Cwxf8yFzmZkb7a4z2ofDEuST6dabBwLA9Xu1ynXXGiQbYUhLjyM7CjcFnxjSzXadXVwqRp",
  "key9": "4cD8omHYbeo59mdFj1YwK8vsr3qYodD4Mv2Zf6sZrbUaXT48Vs9wrk9HcUwEHyEABtdFKBHhtP42JGGa6hizgBGV",
  "key10": "3NY7P3dzHx6MCJnNnoq5yMXdLLqSp4SN6pY9NtxBV25LjR555yuZfZ8fmLP19U7qiZab7xXtxLPj7d9xvd23e6Vi",
  "key11": "5jMoffjvMCPwkB9X8Py8ZqnwfZnoYq8eSJnLWSB4ktjntK9Kez1nmqWdC7oPFkSHSd51nNbhoZzcZvCSBGJeVboZ",
  "key12": "3LGWWDYxeXeURkdBxNiiMt95BTCRiHiXGUm2UEr7qRgRkw4L5FXdTsczaCxEMgTDvm4CXFoSDeM9qb4bvXYXAfa9",
  "key13": "2vvUjRnC7HkqSg96fSTniWN673gT1x48pFAeQtxXMqEA2uEdfMsBE3dv1bSQ5oP2v8WHpgfDdjzcqtvvjmtg5Hq8",
  "key14": "3BYzg69XDkuqEKqu3vmk9FsbiJ5beQ79AGKLvrJBuPm3WVddmPTPc57JBKaAtWoDqKFmwDTZcFfFRyu543wtZcgY",
  "key15": "Zrf3n9ZCruQBvV69gBaANSgPafcQ77okTiVXJ6g3dPEMkW1XrzsxEqVjEacDYH8E6SYVB9Mqywshmad77axfADK",
  "key16": "2GtQug11suQrC6iZW58SAk8BHUJd5yBKHPuPwoexG3Kxu5f4CbtBapxpEMGgpdSF4fj89gpDHdYoE7fFS3Skdort",
  "key17": "47EyzLS7p749EzJfz7JpM6ua8Dmz8cyJSRRgj57hfm4ZpF7a6auZDKMSYtFgzD3wENfiuNzZ3aRcRasFM78rxe8j",
  "key18": "23cgQEc7WnjxCi6qh5yaPhJNqtjsbW7zQoGwGNZ4MMn5GMcJpudYM3NvQZr7WjKYqkMMkfA1tYL4KHovy7Z4iQ89",
  "key19": "5H4nfRmxS4V1nB5tBjx9FPDwoW5n2Hxp4zdTJviW7rWFu1TtzzmAsDdBKmoCaaijQkYVR8jMNj9QaqNe9ntG3e77",
  "key20": "38MtXAZuvfTS5CoLH5nCkuMEURAeA8ujckgaoNSod3yHx9t2HC7p9RkxtZpsSmfwnGzqhDqrx9N3jxZVG3vU6XRx",
  "key21": "5bBDiCk56nhcsRCbcMuJLFRpAtBa8YLvkc2p4jBcHkqQv9msrZxV5Vpb5j84sk1ma1dwYdoHfZ1z5dJtUbPaFvJU",
  "key22": "5dRkH7BFwMqEQejwaiTKZP57i7xWgK6oFifBRdygFTnewsVKYPxFCTkFA8n33NyMmrEbK9dKmXeV9MZ34FgkGSnY",
  "key23": "47YWmXww4iweyor98bDinfYzG4swZJkw3nUJJSuRjpLNej17Rmauzbe5ajLRsa71BUhWoBS5UfVsVpAhzbBQYdrv",
  "key24": "5m5dznq5SG3zoyEdaiWu4ozy4DqK4ZcDUDHVJDpVEDWLgELNA2KHp7nSshgnX7PP69UMHKEmLENTadvp6uDrouPz",
  "key25": "pNJ81LjSFvp2XGq7naaEGspZWaJcw7PB1EBsW9brLiEprztXdP7Mww4W2njuGFPETmrrU8chAXHdkVBajfHuF6N",
  "key26": "29e7hp693Wfgk6HGADJmMWQbQvAowkXhAUFDr9b11LJ7TgCPeRQ45zkUFVSeF3KTZxPdDWfwcgLciNg2dwq1oEcK",
  "key27": "2FtogUNN1DKL1j6PjK61xaRAkXCrEjjkVMUXTjMCUniuHRdC283wwHQwmmeaddKNKwm6n3kJNCS1Tksaid1fPgwo",
  "key28": "3YzQcAHbszxXePpox2ig7QF27RN54FsDFWbmpCbCjeJnMfJqqB13QnyhtkuoEjfU6c693zAhAJyMAYxrtY5PYL2f",
  "key29": "RyXF6bHppjPEsDza2kjHyq35PaYLAmgN8tuw71ggTKiAhnrtH2iVNazLSAbkriwP66Zn7dPSDGyDKhhAkBwPNed",
  "key30": "3snkGJX98jsEM96c7pPmYpBSWZAWWLpciVGtWbAEewEjU7NJWpLgchzU7ypR8aTKE4hwLTBfKvBdZS6SZ6SNqycs",
  "key31": "3tXT3j6rWjSmEJEEXeXJ2swFWk38F6ezBbc3pqzynRJzbC7vkv6Smq2s9Ni1FhkY9gJ6KaDVBr9CnVTV43h3Dmts",
  "key32": "2YvVEYN1U2vy8UDpzEAMN7h18DJuaXY1PzE1DrVsTax3AG3aErEh4XSSDL7sJfcLRLcAYSDmuSvW1qMAeStwpDNZ",
  "key33": "26czBp4aybxtVMCsVUraC17xFbi3cz4f8f3zKt5mfgUF92R5vdhqzJ7T7uXueLNWrLAbsykHDBQrc7NvzVYC6fDn",
  "key34": "5CMxakoUqJNjB9BaGqXZLvbRBBvUPhJhCdkGuBitTdNjTa2JZjh5HJ3uqHTP5HbDmhTFSKqCkgckVDUJqdakg5yQ",
  "key35": "128uQEgZy2RbYBPM85s5suu324t2ixXcE2sLHE6kPFJiCf7HkqfbbmMQ5wgmPHnKYh7uu6J54T7Bx8mgTRmosTYb",
  "key36": "2nCaVAhvynAYgpBhi4GduBKsPKu767dHnPeiU14eFckrUEz5dB3BViJLH8YGjr6YbDQuqWiGxnfHNpeBa4cgDKjV",
  "key37": "4LwBbvu5ZVgfLibMAsscwrGVN5uLS2M1G181wenWFP3nwXaBTu2TSqXDdk3jpTskeqqqh3X248tGToCHE188by4n",
  "key38": "2Tbo3qTx4R8wJtUquc13CcBDRWVWViCibBBnHNkDuSZX4qywWAWiCLV3dkGUe7qo7HE1WcgXxC74QmNc8RydwPEp",
  "key39": "3nMxmwsa8ksQJrfDSUJ3ASV1UfLp8ADfU9Les8j889sCfKT6wnrYMmztbQLRwxbeoAMCQgrurVX1az493Bai4dqd",
  "key40": "2g185DX5hDFdpnBVC5F1sZsDoMd1P8Unx7smvdDtqPyQcbHegfKJWWBnk2jj9VhKkDimFvvJ9miSgkDpeiqwiHXH"
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
