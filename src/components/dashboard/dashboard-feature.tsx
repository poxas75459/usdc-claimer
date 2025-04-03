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
    "4nDS9ykeSmZAkxqcNikSDjQYF64gZomazZBFEqnXLJJtDSmDaU3FM3EHJgGRJzyMkTZyjPxFxyVQYAtiEGSwTFgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHqLMMnbibM9EBptcsifA4geL1NK41HDb1K6i96ZtBPVJMzavAF8q4GC8zoHJZqYubew2LfchG3w9jMr95TELT5",
  "key1": "3yWxWtNatNJPDUKhCEwvUFrxMketyn58LwXH8CxtF56Kc2RnjRCCarACcw2Xu1zrWqZKg8uG74qrzowzLD7mCSsv",
  "key2": "5MQ1eTap1134Rif8xfy9Zbf9oWGW5URBdqFJW1eky9kQgMEo77QNsnDbhkDx4PzPAn9F5qdoiWkZTPbtJuRWL8kX",
  "key3": "3kWWdwQ5fCgcF7PthRGxyh642rnZyZCefam6GowSeexY67rAUVSfc4eo3e2h3SALcwf9CwA1MiKhSqTQgbw2QJQ8",
  "key4": "3eBNtV3SxC1nGhACZAiCmiHW1DPXQFuSVUhnnQyavjwaT2Ti7JBrc8M3r7WKLWaFKxFZVS7BB2odcjjELSjGDh2K",
  "key5": "PRhtjsgK6kdkiuDDGb8RCCxF974SgwnnsmG2bZAhHEmjgY6zKJ4R58gL38Fmf9oZ9yaUXQH1CiePqVhZU14JW4g",
  "key6": "3iG6tM6fTVyv4NbWAuJKLxhBxBXZNKzNdqExEAP97A1BD7hXaEKSmuQ8W636BpKAeQYp3nHU1ynWXyG1Z2RVrHnf",
  "key7": "wWHKAjgpYhitfKXrhFBrc5v94Wk1YXkepaFVaHq4LtWHGv4ujYM3SSx2jLp3wvWschg1vy266X3qk35Ls7vLV3f",
  "key8": "4jGRw8ykbNShKQ57PFDAPN4kR6SXfvKs7aQ5zkUkx5Hf7CCin9KeGY593vMah1pJYpwWKxarTGhAJJrGVaDLJNhT",
  "key9": "2UJu1Xp8y7iwJ2vnTaCTDrjHRGLL8rwcFr7J3MPMufx539X3LcUYm53sDT6hiR3Jo3tR5hkW2p1yw1firtP62es9",
  "key10": "3tJg6KoNjrE71FztENNZwU4TLdeuDUBUQtZHKWw7qsEq5Ees9CR1NCrvp812mF1asWmKPR9eTLUnsiavj1uMfdAM",
  "key11": "pHgFtJTmd3GKGnNeF7CFXRzKgTMkPGo1tBCe7Jp419oiqVCmPXf9KpHbQQvKWxyh39VEA3MVVrcCQvXFgFtKRZY",
  "key12": "5vD7SS8uL9KNoBU7VsmCEvvgWuBdy3TuGEHYWDyHd8QpzJPno2pdLGbm62LiqciUK2UxoyrpgJ5Ra1WNcD6fsYSw",
  "key13": "4kuCrJXrPbg8DCyx1iiwYMXz8YxQRTC4ALFZ4Q4uMavit3uX3MgesAL6D7qyZ1EqzTzhL8koMM23ziXFfErfCxSb",
  "key14": "3qRwxzfKBmaFjYbUQMyrxyXWKViPERMPAaDK3dErhj76CZUZvRQZyfHfQzD7r8F5J6XS9TUz63xy3yKqqXuvC6EX",
  "key15": "2st6R29Qf3CLCKRmu226h1TYm3oVDfe2UVdoiVYp8QyFd7mr6e53ZhfiQS4UJAegEWsn1huVi5FY87V2SiCGrzg9",
  "key16": "3o7nSffUgPTa9KZTyMpcXFzCjJ6grXLwrFzPnrKQ1CSy3rM6RVBr1CWanrbc2vPyw2U621DfmUZeVYPi11aBY38K",
  "key17": "5k1wRkTjDB3mzJ5LKxRG6G5C5rRUFVwKfzgNzFFc4GeEinJ9QtK1Hz2BwEM6svY67KAECd1Cm421Fkd37ghqemWk",
  "key18": "5V1voJGurJoncqUkZJGaQnZmTynbFYsCJaQWzPWiPDMdFH6r98khhhs922re5faGNabcUGzLk615Yz8raDV6H9fB",
  "key19": "5fwKDWeLJ62chUCAmY4PkrpchmLTQTr8JkDHVCcUv5HyyT7T43YDw6LSUVRvfNGJpeFnBS9mETKF5xMwoYyzF6yR",
  "key20": "5Hs39THYbebfp6kqPbJWwnhBrV4GBtyCLbHUQvvtjUMWQtShfQdhWzWHAmqZXbo79jc34MERX8aciXmkhGiAqoZW",
  "key21": "2XKDSDaBXQnsyj8cy1ywgi5DfNf6YJ5xZYY8zrJtfPUuWvZD11KBCSJH3zmZms8e6zyjgNk5mB3yzjt4u4UZg8D7",
  "key22": "3DFHraHjHtWfbAdW3fVESxiuG6F2CyKH5MsLDH3ErKsNJpDDDxC2Czp8maXphpGZwGDtSr6B7igeAZvh8j5sYE98",
  "key23": "2bZCLqENxHKheZCUTTCiKn29weQH73gstZBPV1U9yPfvgsDZ5joQdy9aXVvs8iLFkHP474vRueF2SpEGZLUaNnnw",
  "key24": "5LyNBXya7Rufezn3KDWG7iD4DuE9rWLoS76FpHLrbQGvUtrikwuX4Lj1jhjuHabuJHikQjxErzJQFtfBxEG6rttN",
  "key25": "5cmJXJvq3b8Wwwumc8wK4hUiJGeUuZrhdky2kj9i3Rg9yVJHBQ4hEAbtYgVnUHQ1JThUXqdnc8Eb8EekEnChRyUs",
  "key26": "2UwuFusbePeiwmYJHBeesHqxaBPcorHVQz7ZsEB2fDmRWft8D8BRqozDBvJABA6u52vFR6iCn3xTLaA14zCksTmJ",
  "key27": "5ZVoiNEzgg3mLZJkwCwoGEwNJqHKZAQ4Y99hqTw1eWzcRqk9PLB4VvDLmKa4HLPRBzgSabymmHziZDDoPFSifVA5",
  "key28": "du9rFQr4C5UF7u93o5DFbuonKbAHSm49bWAtCFPCipnjpw4eMDGSDsLmK9PmFf9hn74tXPThyiDeooUPcEkvnH9",
  "key29": "5F8hzwcQiQptK5Cbgcf5YSD4scWELCk3HDuQk3fyge8oeaqZhhX7oVYuQ16K3af4yK41GQTJbjYuHPdF6S7e66EV",
  "key30": "2wpf8gwMhTS9Re5bEWsALcnzu4td93Bux5QR3Z5A9KcZrVvrJGcvpXggEGiTk6BsrXBpAsqf6NobLMUHXbJAdNr2",
  "key31": "5FoCu23XCddb7vM9DD3CVLz35hM5JbahtN8EJ7CSgF3GQgUEeoXDwhEK8UN4nPedkAEUChKMobjtrHDnV7k5it6f",
  "key32": "4dewraHiNkiD4hbgsNjYi6JCZZyiLdUHLsHok3ajFNt3spgrsUTMozBfK7JPzeaLDxFXoYGwEL7ZvDbh8CyjWvyF",
  "key33": "3xVjuAxKmYt3A3yYSoFPwL62n7XugezU5VDZ84riCxfFM6ryLHtjRbh8YgQPACLP3Wb1sjQf1hTan9QcV9eTCG9a",
  "key34": "RKQcTxvWtiZXYZsJFt5koLqyRCiMKT5cXtybEutoskNj7TVA43pyX1ApMm8JSx6sD3DrTqsML9o5JWDrVE87Hby",
  "key35": "2MmNEsBWES59Yh2DHgexd5qL9Q2haKmEkBmAy5sm5Cr598z3ZxtnCJJ5z2NHLdG4FHDgXUeFQM9ZPK5M2wTGo3zh",
  "key36": "4r69Ktp78NUCVj2Y3ZW5rSMwFgxYtLBXqVDU6PApmDZoA3goHfc3TM54z8Ptzo9ygxZJXcsosmoiLerVUbe1pAiG",
  "key37": "sxJaX7pB5HayLauxqMSCFML7H7XQe2drXQ2P3idTRipMxBQXrtDzNKWW6oidVP97UBz946o6kjfKjCmiCmR3vvR",
  "key38": "4SfEQZmyyUd75nZNgYH3GSCmoKtYb1y4Aw1H2VBU7jHL7UhcJ8EyKH4mw3R2TuWqVKHbPtmHehKwRXnEb2H9rKmm"
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
