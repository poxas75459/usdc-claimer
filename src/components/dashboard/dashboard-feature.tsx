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
    "66QJHKZCjSEGM8Heroi6zB7sJdMPcozqTSn3sk1pzR1nzaj5A6r8sYX4SbkFYRhFsKpxyyY8Equ2dW36Ux17h3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w37GFaFEZfqiurt4sscGz3M6XA2CLFZFTxzxwEdUBvzDmXr65XmYonsx1smJfM2ZQZuztY1j5edPfNp28mcSvdM",
  "key1": "ad2kJTPxT7kMoRPfVB7M4JBkbec4Cu8DP82A7VFj7bNM4EfChJDdsApUzwxmFnsFVseWhh8VFkdDS6RykFWxaHE",
  "key2": "5tVqJ9FdPUTiXQ4iNJGddHnoFfDWMb1aywfzrysaFNbmk5cH9cfNwRK6V2y284gsDaeDLPLZFCZa4WzDaoVwbmRd",
  "key3": "5CWqtVxgNRmPJAzCK3hdRxUsnN6G968sXaLJNj58hT1yg68TKiy7Y2BfXT647EdSwcorsS3trqnNhTpKZUR8tNa3",
  "key4": "4F1ofoh4jtP4k8jNYPSJKcuosw5GM25aiEHLasiUaUBDXmRLTXWPoTomAGPsHvhdv3uA5dFBNr2pTdUgH3G1eyRa",
  "key5": "hDyYAQU7BBrDFJprf3K3P2zt9C3bjEXGEzmk7r8qbvA5bQH3RqZSxmG8HSHh4iWDW2s21SgkWAHWoruabLTo5NZ",
  "key6": "5BzXgKZahmrx8KQLN4fCGWCZH5q3DbggxaifL314mZQQjVLVYtSp1XZiKuAhEWRTumu19ZnHFLuUgFGTkBXjx2xJ",
  "key7": "5S1pQrqEzqkVcmiyeB6oDW5ckpjbQwEFi4y1watW6WXgQ1toWqv3oqJnKRhWKiRPcAr3LKGUbwQNKqvzRsfBgMu9",
  "key8": "4vbnsfhTj2hofapcEr4qxfVbp7oWwBaGnZzmQUh8e57SjvaeK8XXQxwidP3K9uNEHEvUgtgv9suPLBZajb3uUsxD",
  "key9": "4Kqs7Z4v53QhzdtyA6qJ8R8Dg8VnFb3ZU2MjqXxg6SpvZrgnHoHzYEeS6EQUz5xGpmujXMsrU1JGMnRC5h7vDvbH",
  "key10": "2mJ5ptkZ2fbSARDKHGPYD1wAsc7sDtaie7vCuCYst4qFLyf8XK8u7gBmkZ3kT2aYSBgkks9T2cd1BpvjsdGC2DCW",
  "key11": "3FCnkpWQeCuH8mz1zL8CuxzF4Je12pHF9FbV97J1kymerKvs3Lf6avWyTa4Eg1GyvMzQyN4iH5b2GaXV8gxRFzVw",
  "key12": "4r1T6oCoFwHKaTNsLDjhDKaJ5gi1PcYiKWV4jnVAousHspmVqcEKVNP2NzRk13GyngBUnStYnYNykE5WtrxNzct8",
  "key13": "2zvk9p4XuneCQ8D9FSb28Q6pPS5wzjYbVq1EMjxKn65VbfpCdtrqRvZbWwuANahrdkDkzxm1GCCDS9DKJp1T7cSk",
  "key14": "2MgiErKLNVb58pNWTmvgxpZXosNh1GMNQyeLZrnNWMsWcryybUeUhETKdfH8vjKarqm7UMxcEMMffPYexcVrn5w5",
  "key15": "h98M3FbAbiEE4nZg3uhcMLMyhDDez2aBGn3vUwEVrnEfyGT6RbzLdUatZ23ZoWG4MRjprNtaw8cbL62zWrQf9ep",
  "key16": "3pPk7RQ79Kgnz7eEx6ZJkmdKBSQx8n3qZpnnF7bmLRa3CVRKWnRnJMSCbMnF1GwfanoaxeaunV3difZFStUMDssH",
  "key17": "2AepK2H92SCGvnZz7K74Aq9x4wgZu22xMaxZJ1uxSpQAMtURbFx75auwaVJEFSmZv9grVbEoP2fhg9HPNMgH724z",
  "key18": "5qzvzFLc4PHAe2ot6NPBPZhG1TU3ik4pJfGeu2mbV7boZjdDDkgqjqNwwMcLtkfbdwe7w6r6V97ZTvjBJi8DKjzZ",
  "key19": "yB6sADyxiPR9sz1t9tMGtYRpY4Uu62bUtExB1ErfuJ75CHFxmSjq3RM6jn81WnTjPtNrxBhuJ7W83UquMMbL4HL",
  "key20": "2emKe5a9ejoRUj81SQJNRWyH4FirP8mxYq34b9q9RYDERuNYVv7PvVWvRwD3fVtxNKZHYuLzhUkM1kXVvucSLr3L",
  "key21": "DUjV11qFRN5dQjXisMk9KUfs74YHW3PuMCVanGzxDMZPa33K8JjskpBM6kuKXxKk4RNDjdeYKDG9kU9Gr8fqqPR",
  "key22": "jEAnpd6bcYvEnVNe6gZY5vZEhosoBBQDFq5KEvdW6jdXpjjdr37w4nRhitEzbjAVJKzWrGWsRtj2MByNTukNHs5",
  "key23": "3tNi8qbATsgCCm3V3P1GhbUDjxtPKsW3rQRLLzxMRzdDFUM8Ta16CwHkwYmmdrMVr1FsxHSnRivJahc7own5SGw2",
  "key24": "5MnHaUZ4n3jMuJtWWDLvy6sP9P9XV3wvZrBuw5K4qDTT9S4YyhSH7XRx51GhFypHtSoMoaY2SP3aFxE3BjJBvcx2",
  "key25": "4sMrEVh9AnGTt8DDkgCeHvGTU5fZ41u9qahHayG5hptZzJdYsr1WVLAzGRFsRCSk3EQCEmG8aWChMujJKp2BuueJ",
  "key26": "3QtnHv8EgAWWBTuaDDwrE3FfbBDdqbpJCZdqLMh8iSWsbmDdfEa2DhR5TZXKbB2gAWU9MzfN9edJ4RMiNjLzKE8h",
  "key27": "5jEnWDmSeDvk5347yF7NAdzvX7Q1b6UVDgSFWiGycsPzrtdzL6wfsT8CXaukUHVG8SNaru8RDWTw9cpgbkL3i13j",
  "key28": "63cV5F8t6mvKAnj4vhQ6V8NHwfnadivNjTsMA42trnYbq2pfDzZswqbQhAwXVTjDfn1oQfCAokVYtpagePQsEpyC",
  "key29": "5yKQz1seK7F9PxHu1xEHoe4E4JZ6z5rqgyiMFqdPuDGLV5Jg6XYdTDDNSpocymYjFTD2nFhjaLGR3iXEMLcNy8HG",
  "key30": "5WaQyqM1eWYDQ1vtgR3Y64fZWh5RU7JWLqgof6RpQdJARqQBTAe46pVFbVtxugZh1q4EM6kyR1dEPkP31itt4NYk",
  "key31": "2jKRgRebkCdrU3oqgrKRQwMBiLthPoPpfHDSvYGQMCJ7VC13YgDESPdSvTfQBUjYZ1KGkrSfV1mZz5WHUamw8G6B",
  "key32": "4Ag1pXUZNZZNtAurD6S48ExzWRWc2YW8SRxL7SQj75xf29CPg77Qss6P3pRCF2n5CX3REAYqW1w6NqRKjnNP8AuZ",
  "key33": "4W2sMYwnvF5uaq6NGjnAVzstwjcVNaHyRNbWv3wuCgvMb7jYMgQwcArF269CTSHtipoA8Uhk8rQui6jfQYvBJars",
  "key34": "2KeyR84cqtE7GVvpVNJDDTJG3WZjKyybfrJQdsWWeWogQ3UNxeDv8uZ3ccmrugmZUUbL7WksM4pGGs6AauSHL3Lk",
  "key35": "378e3j1DaXgjYTgxwjFm4jaELQcepfAUmuh89d5x51k2RHrn2B31m3zs6gt9ZcS65gVzZLwaWoCjQWrKW1vsPZ1H"
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
