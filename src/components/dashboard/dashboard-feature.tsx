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
    "4MtdEJXbNvXf4vVC2TTfsCVVL64K4g664JeasTQR36oxxJn32GKUfT7kwx7bJPP6VcFfb8hWTLq795AgoebeaxFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tT26S9gCEZTnUDSQR6s7q3ECLuVoHEs7iR9H1tD6NW1tXxAnMMou21wopEfTioGXiPubq7tDF951TbWLB9nxFH7",
  "key1": "66fyJJHAZdBwegbgh3ohJViJd5c3MqhokHG62631JJaMvFxQytRNdzuwfG886sn2kG1SJqUj9sUfRxrJRvbhvd1Q",
  "key2": "3VJFBpKr4Ra8zFB3HgeDvyt3MqeABGiS4hejfjakSzXXwumAYZqJh7twgJ3nkQDGbkrsdCHoq3KVWGEjigG9U3c5",
  "key3": "2sTdW4E9wgcpwgBoQDcnk8qpehRYfR4sgrhmGAXNxQy2DCjCUkc3H6TTJZv2iRbiQomfPXyt18uM8vMzhYJrG8yj",
  "key4": "35WpVyX4oKBv8oNLdCJiMS1CTaAo7XPfX4WdnPMkujG4xXbSFta14kaA1ZvwDcTCGESTtCrdM6Khttm2VeYn3ziu",
  "key5": "cAumF6P7PfFeBAMRBif8KX56FCijvk7PmnkmiQh4VaikATEbAC86DnsqS3gfN7xzwKobqmcA87moLs3rquj1YzR",
  "key6": "5YENridoZn6BecWeDDpcfzJbZE9V6gkeDm4sFdjCfSNFRrL6Z2DgazSgLdhAixqPQ3GSmo6xtYCGCzh5wDLtbhNu",
  "key7": "EwwxmDawjfHX9MuCbGghWSbRiuqTKK9bDR7q5AvDJPuh2kGRk3uqiMVvZkyZWsXY1pPDr8t14fymojL9dxgDYDB",
  "key8": "WHQQUiYrQVUxKsXqYyfuXUVmsSqDDwNLAQt2zVHzSxnCJAywSC9HauXQmV6BogRy3DX5qfAXXBLMMDboJ6JRPXV",
  "key9": "2toDQuEuQqzLf4XEFi4Am9Np5f6PpwfZwk5RHwTcp6CimxSasER6bhqAamaX33HMojKCb1FpLs57nd34XFGLo2Bj",
  "key10": "2ELsKozBpCD1rLhi9i5UgFKfNxiUYF3d84w6bBLWDY97ecaDi15mz65bvWCVz4Dkvkqz3S2cFiUoByX9WeFPWwbK",
  "key11": "JBRWHwYvpvDtk5McAaSG95vo3qqCAykop93ZxxUAsD8g6fg5TZte2918imX8exGMdRk8aFPXfNUK9LygGpZduYM",
  "key12": "4ocnoBPRbNpNgFbak3K5XMw25tZaC3KBFuvET8iq7nLKrSUda85cgc32WnPJUaJsdMk6S8KZc2EX3TDWmUYucAVd",
  "key13": "2MqaXpZdrnMJjso6t17gARTQPYk9xgrKMoHt7sfrC1EZ6vDvPkLhPbAEqPvnRzLMrLa52fy3Yy6PiY47SRsYJ1xU",
  "key14": "4cWDb9fi9o78v4fJP682JeHhfD63C7KKNZDPi3DeZ2v9fDw6AcAJHiWpUz2X1tPk6Lu2BF8tQKZQFeuyYmsjsPn",
  "key15": "26MDceLVkTAjkDCtYh1dcdvDhqsnXbKc9QwwaFsFLuPrHyGoxSKQdmBNSDmwh9fWoQonMhTRd8DQ9nx4XCB1oip8",
  "key16": "3ZwY5kAZyFqdrKTZrgkvRdVdu7w2s61LA2xUAsq9EHTZum56Qg94Jt1D2kNRHPqfvbpM5bqpvgN3xsMobNUkMsWS",
  "key17": "39aqEzCT1sB1jPyT4zaxqSzsKb8dM4PXFxWDVMzAHrFrTJXPAGdvpaxZ4ZoSEbronvwbgdt2tMwrbNCZgRZ4rdmw",
  "key18": "5j9b8Bbyj79TN4ZwGKx3NyB7q288qoq9cJzXuQouD8SnNRnHrkgKLTAwbkFpPFzPAPKrNaYSRYB4sPkSC1BG84V",
  "key19": "53zC59FmnqkSHcaCoZn8zkDUo44xr1G4KfznLx79xYUjs4pjFHDqqavQXN1x9yPDARK8AgcShKLg1daquki8nX2G",
  "key20": "3hSFT7ZAZvmdJzfYL65L7y3g8MHMSzdb7vXxdgfFHsyt2HDmxT6CUB2gZsWiiB9EJNytT9reV2Nwqq4wWwohgiio",
  "key21": "4ufqjJ2uZfLfm6kPF8aza1fsa8bCfjoEStRjvwg9WfCqS4fDrCoLj173xzQt9c3DE3mxSz38yop7zKw2RbWPU1on",
  "key22": "4yJTxyZqpPPi7z9TSHtr7ZF4ZYgbXg486W3rUeSifJrCrUJwq42qVmByD4tnSFisat914z3dYKW4KC9eNYHvo51f",
  "key23": "3GFTVRioCyQdwpci2T1Nn3b3CzDPqUPMxDVwV6iJDtTh7CmRDhDPKUTMz92s7GeowMV2MUEmGHasKj4VWLaUqMgc",
  "key24": "5c4unRNRo3eR7mkxUvhan7QZbgBZMjeZpBiTbGgeDBL4fwUPzsvXGjiJJHpYAwqdw8huHbCEhcCkp6NpWcWwiEAX",
  "key25": "556iGYYkvqhnLqTuW6ZgSEVQQjxnTEPiaDLE1Kxx4uNAGzCVtcyjP2DeDU2RKG1eYYawgPmmKKMZUS6RSxyPEXNY",
  "key26": "2HkFgjTEQZC3bichdTkkcaeiEYFX9s8wvtP23pDrHqaTmbVXEnZA1X7dP7qvZDYxJ7TY88QM4ztXXjk3vxdr7L4M",
  "key27": "3coUkdoM9Qp8Ht3g2ZU4nWuBxiiDtA6A5zBnYAfra8qyv5p21cuoyfYXWhPRvNhGgm2xnq29yoJTMcPm3KDk1NM4",
  "key28": "3EMBkJZGaLVKKXadHVwkp34bErfhrEybmXFEBRjJFUELUh1xFWWg796gWUpzjMDWLX81SdFpnxXvfZAP9MiUrVmB",
  "key29": "5t4P55brgo1ZDX4N5cFG78Ke4dmyMUErW9NNXwuW6o6Yhj7i9gs6cANM2HSASj765sf6GkYFsxCdhebhF3gLn38y",
  "key30": "61mFjY5AqdMAWcXWSy14EqnjfEnHyRVgJ52FYq5P9nwmqWjYRaYojurei57ETPL7rawf2T59ksR5yTGNmbzBzgHt",
  "key31": "xYB2CEGDppwhejbxWXHCPPRXq8NRyigxvnodgBJLxg8RnFZLFBr9SiX3rtsm3hkm1nm2hZoW3jvG9gXu73N6RTf",
  "key32": "5vZ4AmjT25CZUi7m6BHxQ3zpf2P6T4b1NhdHpwQJ16ekekMo82fPN94ES8NJezs4oRvC3VX3YrVo395JHbnYVe4i",
  "key33": "3siY8UJDHScqYXrALK5VxFqLYJHDGw1x9BoZt7jdLtwzEw3cre76bsSV4sfJKbEyfRc9QzY3Z7Cd4hYNoaJN4mkV",
  "key34": "4KsbiNEvYBUUVtGVmgBgLDBcBhER74XRKhZ2e9rfLezCsSfaEHyj5jedYQsfQCNMtdZogfzqctgzJHD3dzC9ap95",
  "key35": "4vTMvTTcZ23xuHwbYB8UTbCcXUimGTPEN1JKreM9ZWtXNK2pdTDTZbDEqrWmY2mZiZev6GCmR5wx8E5xVxaSYhEX",
  "key36": "5X7WsEnnCFQKNYLtohZ1GQHgKuaNUobKyBcYVVpwnAXygC3xxbgSfu2xS2asDr95GCfL1Cm7jfz7t8Bdu5jb4zNo",
  "key37": "Cu8p2Ce6wZ8MWjakw7pSLuN8yyNsorB2nA9joP3vRekZRMVmAHeKTMN4pvmAUh9gscoyZd9ZCHvdk33HxN1sKu3",
  "key38": "31uMmdjgS5FnP5RxPW7bPjsvWWmP8bKnDH51PM3p9h3CQwDM6QrzazQeDNKo27NyQgkbz6BKf15GURtE76SaFhwL",
  "key39": "3UqnPCRm6EqvJUThLysiZRdRZ2vc3nMhDevaPtei5pGYPuHmgRmexMafZa5ngftzxc6m4roTSqasVCJ1zxAgEYAy",
  "key40": "3iPhvU8tAeEZoQdYC78e3rSYcHwoG72j6BcNHpheuLppjWKwDUrVLHEFdkiQZ215pkrQNw26U2sT4sqTQ5gcj4pK",
  "key41": "4iAHcra9panFFeUQdLaU9a1dArn2cSCuMqjrJydVkFVbVmJDqsi5E61JBUFm9vkssb7PT8hTMymsxRa5ATUogyWA",
  "key42": "3cZeNc69jWDeQsb6ziixrUX6Ar4EdULa9Qn2TNS42FpgtE54EdyWuueaiDehyjbPUB7CdR5trSmhEq57ucAC4FrT",
  "key43": "XXv3ru1FoCSLwYCTiukDFiRzNPMpVK6zdW9B5t2J6bNnwpBdVvti4sZcLiun3oV8gg2jY8C8UJijdUgn35SRzsE"
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
