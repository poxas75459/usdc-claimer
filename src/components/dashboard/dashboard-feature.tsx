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
    "23n2hkfdbRpfSWpbEBS8guBTRWFtQMMVrZhpSUWk9vx7Cj3KfJr8LZ5wSzh1WdBx6nsf9hRcHWPBj788rbvJsmyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nuj6J3fG3jJXeGDt5X5wXF6LvugfpEYPctkZdKbWbFJGyFSjMvbDFoXwKSSmJmK8WrKFiVAsL1e8y9YPCzFVmri",
  "key1": "2P5JH88dhwV1jonWzeu3NWj9VtUTxc7jxtDjB6M3sYto8NBTVFXvJTmbc2Kr4uzAGEGN3o3gij2UDnsTBqhD3D6r",
  "key2": "52iLxTNckMkJUHLcAV3a49hnwgyfFpRuvqmeyKCbvwZHPCjBRA4itkzamEvayQdWZFu9UDoQCqCJhtLYUYzd9MWV",
  "key3": "LUx8gvnf6NeS9E2txU2YX8Pi3BCisV4w1e6nJDdADArYq1YbT5c3CyBjv3CFNqXp5oaNyzSbKMECq63VuMwvpMZ",
  "key4": "2hF3MCvdpkStESRhaysd8BBHAdEcMm5krfeZHnSGnABJ3hZxg2JdqmrkwA4joFB7zxvPsT5eZigKwPekCvzV8wrF",
  "key5": "3MZB3hg8SdpNWs94QR5Ytd4y7CrTWdaCgmCKRT9X9ckzTZ8dg8Z7N7Eu4kGhsCR1G33PuZ7RAniiqPnY99dtDLdD",
  "key6": "2EzGE1tuXM5fvSeMpcgNdZcZtfuwTrhrSRqDTFdfS9X26zGqWFSjfpzkibWS3yuozBGRDNWTFmxGdQ63QEkGMSNq",
  "key7": "3EgZuQ1Vf38FGYT14bjmBZ7654tocsfh1bUQLzSjV3qd1Czk6XavAqqzCC2xvZPH7NyhCpLj6cddZhnWh5FipC3R",
  "key8": "4mS9uFSNGAE7mEv34G3b39mNUQb8tu1VJbK15Pnn7hxjBu6SFu6kGRheTBaUWsXfBv1Z9MLoGnus9FkMExMCAM8x",
  "key9": "4oyQDhFgfZFBFBrotYyL41jdZx9hjynafS1VdsBjWJhKJw7EqX2xvLdxpKNcwxEym1CPmZ9GH558Yb1LkE2HGhGF",
  "key10": "NnQnUzdPXojqHzppMb7HXXryGtyd44MPM156gSnAYXZvbM2iGu45v5R4uyWHGmSiAXnbU92c7KehvmNmz19D24m",
  "key11": "4BzxnUpGmTyDFaXe87vVvedc7T3gn9KJ628PEEhQW89Aj9SPhf14nfSafZYRavrhaW573Megh189WC9cuVx1yHCX",
  "key12": "5EFaXwPuQ7iYXptkXJef7ty7pitFF9iKf8CybNxR2QfE3agCH2tdE9vM1sZykuhiTG9oG1sZw7U24c9Sar1tzizP",
  "key13": "iqiPYt4NS2ZpoZBwNznhRahn2jacbRmLzpoVsJGLT7k77F5may9fru8mADbzehchp9yNvWsecooYHzu8K1hdDjU",
  "key14": "65y3LCb5RqAhKmZji1Q4Y5pWf7x51Zv3Np1LHoWz2mKNpeUopDMeKnxZRfMdAxawqQZp2eumnt8yUip3sPc9Y5UM",
  "key15": "5nX23eXPHGBb2cRmSvkkdEJUZFWdcCLFu5z22F52dmCDHWPhh2pTMnpvUGFDPpVo6w5YwLcb6Usby3VbpeMS9Eyx",
  "key16": "4tyLmjKZYexXbmUfzDzmBEHpBuyuncSGYRKY4xJ4RMchXTjyJ1NTLSJP5PL4TK1M75PipEf8nKFpewJCsq3LH2eD",
  "key17": "3cR12Ui88ZygzEYJkF2a9HqboSMktd5hW7iCqGnpwhbQtavzsu1jFeRLLr9TyiRUPGvLgjA2cFrxiZ3QsXn7eUFZ",
  "key18": "5vUSkQRcHBxkEQYCV6eeEmZgJNtb1sssAiWK3QgcVxuTcJVafNqzUvcTVno8C3dMfWJAsoDGBNaQfQ2QodhY6pif",
  "key19": "R2PBEj5xHCnkuqjSHRQ9eePTaRPcqFDJvJdGsu4KUCRy4Gc8vt138sCqkBG7JweUtygNcuD2tcMmV7npuTmZDEx",
  "key20": "2jfmNvTPzZCjFHpeCwMBcwRs4zcAATtHtsMh4Fq2h9dPNftLST54R7qyfenc3GN7Rquwwam23cT3nPNtFL8SNbCD",
  "key21": "32pmAzvjTWKuSJBTaSgWWChr1fTkregDRfiWUakgifCo6aiHhzRKNd6mT2osexfMDHZrHfJX8npK5V2CKYGBxNuL",
  "key22": "5oQHbNwAMyBSqoeejhJ84VKWHuH85UUsJY3p64k1zrZ3saAgqMR9DfuH4GfBoCaWrMoMx87wLQ5W7PEnctyud1gB",
  "key23": "2bopU9Ti33qWhqCDkP6P2Wo96iDHHcTzsNPMHUx6vzeB9pTzYp1bm7FD2UUf4ekaBjNKHfv3vTJEWR9cY5hPYtjT",
  "key24": "64iq3kceCrq6NecbPN43fSdr8Qg3v2Gaa3bMmsuW3JjmKHdjnt9YsZKy4UZ2dVFGgs6wWktXYUMRTqZ8Y1B3fg7b",
  "key25": "2phMh6ehj6bKdxy2zxc9RuKZWB9GcVTHJxkMnMZywzSrw7m1ybX46q7CTQ46SJhQfcAWeyHSs1xsUQMbGPdBq8ZB",
  "key26": "3ETscmTBUEqgBGyFKTxsujMR7R65saQECJ473fDYgWF4xazNN31fjstERBhotZBMP7ArQHq5YCt1pUfLzSq7p4Py",
  "key27": "4mFmJ217vLygJxfgoxZGLGFzPq6jiTGHw1Wb3MAXTgHBQ6e1gkDPeRCpJuGcHDB7EvLnEBicFH52TNonQ1mTUgxU",
  "key28": "4Qt8WvtJoPxgGbFYcyjDH6XqREgrV186Q9XiRYv2ZsHHKnEEgvH9m3un3hkfHhRAJYQ48CA57nRHMMumhbCS9pwx",
  "key29": "4ZpKsLDR9ngYpQVk4brh6PGyWKvxZkmQhrhzpxUj2FqYJhKyoMdNCHvivQWUiX6W8c7eEB7isMcrbVsNzyyvEoAH",
  "key30": "3xrAjWFdw88ePFTZeoRtgbgU5iCLhCvkFpBxwvWX5LbaT9V1zr9XiuPNeAtznDDNDi9YGAsmKcCPaMD1HnNKZaxT",
  "key31": "4bkbiRRFNCSXJwUb8xRutAj8rtLFKQmtWTK9TJSSusMXRUfBNk9UaqWn5dGsXmqKJNcseHuYL5xDqofRYGj2jHjK",
  "key32": "5Auu83YmzzvTzWPiBkUqsbFe8NukxsQ9GAwGns6vvtwJEtc5ydhuBkV5DdSB8vJrvw37iAAnXYft4BMeU311bYt2",
  "key33": "38bkG81iyFpvquGoyYEoPdUinerwWYn8VH3NsU86CjxpPXTJGj4q9N1HVju7iajaVVk8dr2taGHmXNHUuJE5Hjr5",
  "key34": "4ANfFU3rExzM7pt6dnkoTssQPbTA9gQaMzQqtijMJL7sKJEeMvLRhpPEox9rKVizyThjhimVLka2CRJXPLBWTPcp",
  "key35": "2pyWWi9dDzH2EDyiWhEA3kP8hjv7rVUNwX2UigdwY7dJCdibQhwMF94JWN8L2htERFoWB6tKFiRcMbKujQ643Myq",
  "key36": "vYEzsmX8c3wNzrY9KWs9ZaePBx3EGAznsNVguKKutSwc89VtPQQTZuBy3nAfY6KrGGPdKducG6n64gQ1otDsPsq",
  "key37": "34Hhixks9FQcbUBGyPdjFQgrwYH17AvkSQNLpNLhP73my65FSt7qyKL65iYppKLeZ37b7fWLgJeQwKJC3KWJDTr1",
  "key38": "36bbwHycUCAdJ6w1cjq1tF5qpiPGs8FrHTxtLXh3kokgAxSCimgCTfvKszrfTfPbTgqSa3Ztzdit3MShNQxFNu1B",
  "key39": "2bWn1EViLFgtgRL7hKuNTqGxY33KRfXrgqFmVZuJGxSfBqHpm9nan6QdjRvr12mC24UBqH8t2cWChPEie9RXwn32",
  "key40": "4bcm8MFGRocT9heTgjNdoPXHX8peLQ1TrQRLmDaLGfXgVyJiaZxdP6RkEAxGNM23Xpfc7KEgZApHseroPCS6WBXj",
  "key41": "23n9xwWiBRGgRt6yCymqD8dVLK6zfxx6g3nVxv5kWfWD5xgrm7p6fooMZpePJPLS8KJC3pAxi432a8thNSbQTTo3",
  "key42": "uPA5wbxgr6LAzduP5Ra9pL7REgsvt1r5nD6mbwyvtn6Z9kKTe1kFLYGXye4yosXHMxtNtVWHJ171kFSciiwzaXR",
  "key43": "22FNcMV8MQoKhxvtgYf3srk7XorH5MkcqeS9rErUnojzub9FoNKnzz9RyKDY9CsExbnTBeiLTYyzYU9h1m5KcYj9",
  "key44": "2aDJ179ktm2JVTfZ3VLMMTrQ7sEHwkhv85sbpJU6uN6FUUfpeG3mntyNZtJrEatjnp1Zyks12cqeYYyQLb8uDcZX",
  "key45": "4mFB5ainLozrarFqAoBfuiRYgQ1kLo68dk7vNvuWFuwJe3kuW5NoWf4Vwz76GhacfCkJY78ARG6dE5tD2cqtPdRT",
  "key46": "26aJz6RF5BeMGciAv3MdEkua7EC3R5ZG44AV4iNt5MvZYN5bL9qapBFv21ZfRdEtuD3xwfAnYAZ1GeJKzg3Yuu1g",
  "key47": "37UvuTYa33D5JFAtDCSTxV2YZKNP5CXwEQrNXUx4w631eoNwn3UcsB8DWD1HCs5hMvq4xNq6uz6fwY2qZ9YU6i5H",
  "key48": "2Pefa7Dh3npk1gG76xc1QbkpgauQT9HkDe2Z2esevfd1jfPTTT2G7jKz2qf5NZvhx4RQX3woUx9ZSDV3Fuk4L8aA"
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
