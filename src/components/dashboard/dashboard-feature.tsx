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
    "5NC8C7gxA2yhqYkJRNn24LKVauzAeCekGvFQNi5J14fcEcbB2vQYocojVuG2WugdNcudm56TL9sXWqXATtXSAvWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuPGJAFDVBTvAAYESnjNwJXS7XStQf2wXs5ULyPpNzMSfc4gVtXXTDT7MmuR963GGmr9aXVxSJZbXviJGEp3USd",
  "key1": "UCiJKSdPNS283x4iMYx8JYP7uGaBHWb5c719G31qtnZ2tAJXnFzPC7y8NNbtNNmWfpc7v3dH1eCndzrvr8Wb5RE",
  "key2": "2HV83sDdtJenEdevt37bovhWoj15e6h2W3iMcLHxey6NZpzUy5xiguRfxCQU8eR43re76PAW5TdVk6rSjF4C1m3P",
  "key3": "4VTVDtSMrbgafwT9vdvUfGqLSeapVVuu59mhjTDw6uANT5MX1cAq41ba1ctCffLzX7hRuiEcc8hv4jt9btxWYtHK",
  "key4": "4BC1FEq2hFAVMQEHjMQm69dHQGMmYf97yaf3zHvXmnNPH2DXiJUMvp3pcarFYWDoGkZ24vzixb794cNNmmPSPNfS",
  "key5": "2uPAJxKqjY5HKzjUU5wiQRjSAJorqmUMdqwYbtSP5katuPCAyYTHukhWN6MBVpyfGo96vAGzkkjweQLce3rqAVPT",
  "key6": "2hCf3Qk92hUKMDEZdZJ5rJ3pnths5Sb5PTc5pVDLWn4PL9XFrSpDpoR9cEivnW86QbXTSCTnwBJsjTypSWvXfi9Z",
  "key7": "29AG6ENAibvrm33xySVswH7M3SVzcArND14icaLzSya8bFWf2PqYGbyHgUD9dvdd8E1RsRNTnHogHxEgPGcp8NjM",
  "key8": "3k9qFKH7HkGP2e6MPb7efrivS8L4ZDpSacjp3aGXcVGmBzAMNoNHRMiBNdZoV8DivSMxypfTwEyrB8W14MrLJQfi",
  "key9": "4jvBy8iLm1gzKk3yWBq4w3iJj8Vrkwod11nEGrk8NjEt2YLLitCk2cxNq8ccJfpBpzUdzFnf5HKfvx9eapn9GBYM",
  "key10": "zF68s4b946eMCUGS8RwLJK64QG4JPwvvWjVgmbuoMhiUVfu9DAjvsQA8rfBspS8LZyd5SXv9hxn6xD7HMkV96Pa",
  "key11": "3Ar4ooW8gGCs8Pr9tjYsVcbypTShxx41oRCeUsbEyM9UTB6WxjTDmhJpyQmqV7hr7zV7pZ923VEeACRcbL4SNCuE",
  "key12": "3pLQNVqDZMTLaWwPiTz4t9nHY9FmizC2mxsTpKSSYMcytx6bUjD9iUsAbKugrFnpTjrdWdeK4mDagUEeErYMShN8",
  "key13": "3qxEhN6knWQAUfxr1RD8ZuxjiKjqEqFPb28HEZ7WKhMbRdxdDhmu2EwAzWWF3go2ME7NpQCk5vYj9LGn2WhLQoNg",
  "key14": "3UQEnVvKQ7g66PBrTrKe2mSpv5pW5vFsysziCmwtCQhRcDxzdDRuirSMByNWRKttqyAbzF1i5Z872nLKDXFwgRR",
  "key15": "61HhaV3jRH34BZKeSQk2gNoizArNdUBE1Q5jbYBUky3QpUggYKSBJaBSXras2Hpb4HCRus68aemPrqauFXRapsGt",
  "key16": "2tyUpi1a8VGBP55nPpwwVxEamqZP3eyFDT7NtwTpmZ8YWnXWYkVeE2aqACMJFtWktUHb6bVMt1QBzoAXxwhFixYh",
  "key17": "48Q6agsWcpQRAhANaHCrhEMwt18BoSGdJFfiXDJy7HUzceMKxWADKA3XRdAuDi1p6WsxAc6EV7zXys38YGN6xEtv",
  "key18": "gMTR4Xx2xcWRYZcWsNmXzL687p5LMD1vajeM4uwrx7Q87fE8KBXRXQqEcD379pjMigjRfukbGKH69QDvAc4p98h",
  "key19": "2XRe1urnNCrgHwcA8nUuJXUuCbeX6vNafUTzG7DjwpLPsqjNhpoDap31WY6FdqMxY2xANuKYCNbHseUjh1nSgbY2",
  "key20": "ARjNS1tPK4td7GJze4q8USAT6kn4gP9X5JMNfeu5o1hHhBfwYJYby5QwHYxXw9gRibQAhGkGXXGeZxVWGFDWjqp",
  "key21": "2Ea6DXbUW4SuccfS5ajEzA1Y6iYrGZAZcSixy7gWhcso1qLpJgGAczdZNFZmzThMNDNFFXDbjfsRTxh5aZE92Mzi",
  "key22": "4bMvuFGyzzRy3u4ph7wHCsk7Fk1DERhQHx95qxJh5cS76rPggaHB7huM2hvRCwCJnxZNNiKzDSFcMJX6xMUtwWZ2",
  "key23": "2f25LLvrAWPUSaeoSn9ghpjbW1vAnT2QUTKKHjAF3PMpaRA93xHJENgMNCGqwGG1A5fWn6cAJ9PwbvSqpQW9otiR",
  "key24": "2w1RN9rcNyQ6zHWAfRnUJzT8dUG4YnRRfD1QsuL2iVt3NTdLoM4CkemBpt8S58QdVLoKZq4y1eA57NTjEUZj7k6F",
  "key25": "46VQ5ejhCXfH9UQMcQHY7wEB9gSycKKdV3DBJx3EQJFKWg3ZHBJLQoRZLNPYa8SszsvSj3skZyeD3eM8cT213LkK",
  "key26": "59LjEYGnT9o9sGQnEJALsnuwbC6aG2DEkQfdr76LiERU4B52XvMv3kemvbPf5RbBLY8SEW3ha7BeVcEVTpYVHYZS",
  "key27": "2ZqmTXiEPeyqp1Jnme3gL5VnT9ZdDYoJoXoBGohPpgdUq2tARe862RTjkFv64hr16ExG48Q2JbVKwcbxEYapjo1t",
  "key28": "2QxKt3Ddbqeemq2Frxng3xf2u9bA4gnBXC1r4bt2cYJuJZ4Wug8E3iwYh8jSmockhKB1vsCXwT9frWbiUR4tWtDE",
  "key29": "4BDVcZNdGDMgTurCcBgWXUkmYyuX1p1NMEGgQMdKhPuKQGVW9pp8TNw6vaXgUsHHxzfwvycfpZrr68SVDY7PPwja",
  "key30": "4KjZnPVPfQ7dnhXBDWaHWewk2V4LaDZA8vvLT9gCJefhb1NSCuumjogmeM966u8w1Y8zDFtSH1qZbkouZp4sq5N7",
  "key31": "4BBnHfXGxbUdq7vAytmzKo8rm6uKbVc4pi9JR56SmLWHoTEBbAPsYdAiCm8edJ48oWd6b4XscNsfkQrKQ3vJ4Mu4",
  "key32": "3vQqDCTqPgxHK189nKzUp2TT2GZ1M6PVu9g8dmSjUh9deN2nz1ui4hPbweqVSiip1z15Z8ctA9Jb9QHYKy9vPaJ2",
  "key33": "JFcH9BfHh9oRmAZMNNb2urLfgHL73CojVWzAoPZqrPKRdvrrMv7AzDGLJAe26MErMMjRL6XxUenTx1v2zWKij4m"
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
