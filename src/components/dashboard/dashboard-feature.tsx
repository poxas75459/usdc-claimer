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
    "43PgBnLAcjz6RFqbiPi4jt1WpEQjccW1szGBWjNssV6rsxDkNjkRKqmmSo4gz6ZJbjaV9CS1aXUXRmX4MTWpokRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4kv7BA1jpkrJm7XirJEhLUJ2kKGwBZA7a67MFNdbciLfFAq7ZXTAHkhmj9kecVGjH1ACjziuq6oukZx6c7qMYH",
  "key1": "5Z2LyHBs1u7P8SzShJr5firxespzms7Dk3vdq6GZ4KTy1on78Lu1jRqbpWZ9c1xFn59ZWifoTMq1GEApPJcao83D",
  "key2": "qbpgvVmyDnjh3npH8XC12CVnqqVZ2n2SmxG2cNEE7qGY6ZZqJQAEVqBQWmRNT52WZuxsqLTViNSCCBvFWYYKruQ",
  "key3": "2nvLzcN51aZGU2jEmfiazDrgaPV7QP5jC25RvwPajQtw97YkK3c8orZcBq7vuk6Sux8FupFmXb1LHXE8f9tP2gc4",
  "key4": "2H3kRa6Zjp21oKeJef3wMEtaCy2WqNjhGA7bNPpZoDbmnxDjxhsK9PYR4fMpczDhVm9sdgyxmBbMbCgkx1gBUt3w",
  "key5": "4eoGHnJcTgBEWXfFeC1UPon3RP5JLEqgWvEsUnjyrkN9yJEojkpx6yypkbe2wrVFzt6xRnR59kWUq3mrB2YeT4V3",
  "key6": "5cdbAtgh7YyakYcsAFdijYsUTNe2JKAoLdiscUXEooMpWmnPhFvp4Gtk7Wzbu3eedB6gwrX6sNWjiEnM4VBffxa5",
  "key7": "5MsYnfVrrxp1zpNQpYjA18nTwLjfKFjeXY5a2A1MLdmEuT2wwWFFXw1wduMruqQZCeLE2rh16WUM4U5jwu6SdZiX",
  "key8": "5qGgB7wUQ51cEyC3wPCRHhkVzGLpVJUZrhk89YTxKGzWSXEpBgJ2SPPec2CSW7KJJ5Ya93UvkSkrRzKBKLnqs1We",
  "key9": "5LpN33UaL1ebNJP6K3xKBD23A4Wsxk72U6eYDfTCEtsgLDBBnN18FmfeFiYSey4weM8V8A8QisgJH3SC8BXENmPG",
  "key10": "3JxyvQ26kRPLm63tvEJ6u57AWQ5VRvDhkcm5mimLj8fw6Fr9CtdERjKnijcDktqgH8zmp956tfzQfRrDRbhuMPfW",
  "key11": "4FiPjE4STAiv3ajrci6PfGLNNFXCzgp2hfw3XVXJs9NJRJJjxN47CHbwzDcRJWh8zHZn86M6Nx9Nxr8zkEtJq1LP",
  "key12": "5NidUAoroh16gdCBUzbyM3MrApWZhACSnzjGPAZZNGYeM6styukc5df8Z9tmvareE2cXALLThYPBdwPhEMXWFXsc",
  "key13": "xv9H2FyrPsg2qCXZE685Qs7ERHrLF65FUeNK2HrqyNrLZUYP9XPpcQkkM8Rr5gP54ThHeR4RU5Sdf2juLLVaTiq",
  "key14": "3CcEQQ4t7aLsAKCgaWupF22QKBdCGAVWxRCZ6UHerYdnXHfhJNNhJ82sn5paVkVfxs2agkjLazmCkdogVC9TCpp5",
  "key15": "krKXoigqoBLbDRxnFj8jhVzTAKMURtvW73XpJARFdutEGBJBNB1i8EAh8r1DAN3XGtRXHFwW4rCjQ1ko7LdvetE",
  "key16": "6WhDc4534mcBzstYNc5oi7KsdiwJ8QKcovy6HqeCkyuKvpRxnYX5B7dfx7SciXrsuZnrvWbfAJjh4AjXoHR4zPE",
  "key17": "5QD17t9Ny5wCjMw92x72KeTwpCkgqGwMg9PqKMy6AKnNj6adZaQf2aPDrVBfASEDAit7czQNH6eBKLde5sQ8qPG",
  "key18": "2VD4chLaUdPXFoFvauZQhSvn52L45cxqs4s82RDb3fbxwWzTeHerJidMr6pqEd9xLU1uMBBGYNnKBpGiWe4b1Xxn",
  "key19": "5mAfSBLHuPxGybGRuhhvkjaHXH9bH1Jy1hNsCed7A8d6wN26y3wDXnKGyxUnzeAvdfkuMQrwgqcMZEGrBSrGvxds",
  "key20": "PDh4QQH1tEzihBPZa8rgcx6MHiw8bY8ywLgJp12W2XTb5JJDvTQYvppHDD1PziUcvUx7VQekZxzQ78P4xm4HMuL",
  "key21": "UngHsxPBwPP3o6fQapdDkVUniF6Xxakk3UnFSAUzdC8uArQeTFfzSp9BvJXdzMjMzSfdm88oYPiMKbuargMFZzm",
  "key22": "2e835Pcc1Hdip1nVWwNnPR7Ekch9CYbpHZoj2eiwxkMnu4nK7aq5RZc4vhnYY4RKasr6qM6VY4m6mRzp23RyyFAV",
  "key23": "yGJ2gQjSYE9SuyYodM8Gok1gqR5oL9zdUo1PNWqfBx5AsrFUzoAi9k4qQa5cQomFEb4woifGefd6rMkqRM7gys1",
  "key24": "2jy9CT87sRLZeUwo46T8aocvcmKpPT3Nxvtf1U3WtJ9yZbJD1YS3K81wo3qCfMfRbAUEFrS1MNc595NvVogbVm8z",
  "key25": "baW8mXa3yQNSWe1qqSdtr2dUJpHZAHVpZ9XmPghf6Ei6NtXfmZbHwdsZgvvsi88QBVSpzGaQtRNCduCx7sq4wDB",
  "key26": "5j54tcc2a8gKg6Q4KV4otMPsJ66dyGN6ujxvdQ9fLDo22MS1iSsNZeSUSceGJTftguFLQCjGSx8dafaDKwksATC2",
  "key27": "2VeS3UDZYQY32qcqt15NNhapTKSsFWqGtjtHz3oSPmGYt9M34EDhsXpedCAdTP3rcbaCzek3qCxf9Mf1E2bZw1Dy",
  "key28": "4Kwt1j9mfsytQQvdoV8H7Sg4EFDLXPdkeaJh1LWi7VjoJjs7indQ9p5BDqTQp4V5p82zKbRbrn379UuHX5JZkLsw",
  "key29": "L6ZzRxeAToUSXeLqqb3QCsSjfeQdt8tm2ieqKiTBbAZvCSJfFopYhpDLuCharUXEhgVFvCdundUA93o2Kbnj8D1",
  "key30": "4AN8DysAY51meV3n9byx1CvdgohVBZMxV7VkXMRvU5XUVxeK6rbBQQ8RhvDDmaRdiJxWS7qd8Nnvcv1RnVxUnaKj",
  "key31": "WApC9xN7fNxTx1t7qvvgpwbBoEhtKyDSRha11wzyUpsvY11PV18CzpcpyzTk7bVC1EGND2LFBUTQkLFbwTPkhVb",
  "key32": "3ahn3sMestNxjJvSbFscSFHBwQCboigi8A5sVWRbTUoTcLn5Ms6QvVHnKb4bUY6RzHU77GrddKuNAiv4P4TPjqB",
  "key33": "2iemUaLeG4psmCWvaWas9D6rEe2M5nWuKBXVyu8ZTfsVcdZKpuirLN7zx36WB4Fx5hkG3A6XmPEEPjdYsHQjJbmM",
  "key34": "3g4kvijtGS3wwKLVKNxj1VbWXA29hL77eKG3pMaT8n1dZApqUjz3yWBag7YDReW34NEBL8T8GDN1HgYCGwqW2jPJ"
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
