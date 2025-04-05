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
    "2jjyvH84uySHqF48gcDXzv5F9xh8vFjDa982UgnhEWQRYS1sZJtAVhMW39QEswoGGh4PuxCX5bbJ8rnqiSSHweFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rFVwwfQUvLvFLpzvjDD5kuo2CYcbAhjGAP9zut4UYSoMY9hyC8SRsCXSoxduPon7JcQmCbAeDWfsk7qtpxHQUe",
  "key1": "3ETVQYNExJCwDff4VzZ6DGL3PdzmLWKC9Uo8abcLqycvgJGsGuruNigrhSrf6YAvDj6EEu3Ygq3oeEYYUXt6GtjP",
  "key2": "3SNdLSKxT9epptj5vGjqc1ZC6X8RqX5EPkooG7sjD8A1BiTdoGV1TCdHF5b273kHFQawXXq8dJpPRkkD5mo3ZXed",
  "key3": "5GNSZ8R1eAJT5yG1599vxerJfoBsMBoTVZKnXbfP37V5ABgUx2dvaBiv3ogBdGuCY8vnVqDLtdQ4WkZWYgBRbFSk",
  "key4": "3eaCUattyauj4PBq3goDft29uHUaV4798u1jgAmmsCUvc4sGFVui3ET8JzCJRnRqfPtvYoR3rbubwtDWmuPrgj3g",
  "key5": "386WKLBMmT1nSYbrtWTtnLGfVf79YQhh3EcpuQj47kS6gdQZuNRsgB6Wnniix81D8a4yxAd12QdniqSuta29fFzB",
  "key6": "3RCkx23BxmYyQf6nhwpUcfrJGwNtojppWHNhK88gAs23HiTDZsQuzGKnA45kgpKtbyxzhCTQhC5WgmXBS7yFKpRA",
  "key7": "4itJx92v7UUejYZzEPgdU2uivQvdWYuz7WELJPAqn6E1JKRqd2SPqwas1WybvuBdd8X2rRMLVuWv2EjdvvAcBJnG",
  "key8": "31qpZ1L189TA8U2hfQtwNzebZvEZe93WsLFKckvnKmEGqiD4h4UxMh9meFfqmUfXcBLN2SCnHMUB8RJv2W6Yk2Nq",
  "key9": "42zj5uisrNT6jPecHwpYdmKXe6DoiCDp5TSmpp1cQ53d7ccYsG2iYyQDEk86kUSAWcVkcoipSzF8HMhicwobhf4s",
  "key10": "2EyB76DN7zHqds4Q4cVFRAf61SKEMj8rRAmgLvZkHSZN3Qfq4bPogZov6Jr4NzeVM8VdHYWye2hPWBZ73RRddJ6M",
  "key11": "2JuHLSnG4dNrHqAGhLhYK6LGfvh8LVMDQKrqSPmZjK4CRuutkVQiMqt8hnFLYjL2fBnbph6cFnskwFMj82ahd2y1",
  "key12": "3qt2nc5G59UeGZjJ5Xe5ABjBTzTsVMEZ5JBrtSq9NYFSY4gAigEcs4strijvEDQgFF2aVN8sJ6mR1vg8ah3fshDU",
  "key13": "XJgqgUhAWXoi7Mhac7P8fbvWy4eMwVU5gGr6ovU4qkQPEJ8nCheZiLvnSZRkPCKmig2rJ6wK6dLkHp4NuC3tdVY",
  "key14": "FQFW2B2juh84HmsVDfkq2ZeQXFzQhnHmr1Rv4e2B6T7eAq1ABTQNbwytsVnYUEmbBR8bzZ2epu1s2tDvoLNCmwf",
  "key15": "5FN88HXubMb1Zvaoe58LHLouzEaXWah1VAoxx7262eeiNekSfsAxCqsLAsMZrPJNYF2K46xRZNRaPpEQK8EHXNpR",
  "key16": "5vC37WcYKQbiKjFApDhEXZiXJL1VppHdv1u5qrZBqhQiLNPruDHXpVKahdjwfXaVnvYxeX7sJAVU9m8UwDzAvRZp",
  "key17": "TfefoVu8EypdBtYVtgXuqDtD7ZQfzoVon8pLa1sixR1o2WapTsLepSZRpr9DbCSmoTezvMzujPBajzUtxSff24i",
  "key18": "2uqWok8BTqw1rzudDYXZn6DtVPn9tFNQqdCC8XkzhS3EHXeUGk5KYbVHak6xmUJavgcS7EzYn2ZbXYLAArpD5K1a",
  "key19": "JaE9q7Jc7QLwzyGefdnCQaZqswW1v6XbAPQiNPTd5wYFEggED7y7fTewdS5fcibhEpLjL8uHu7SrumCY9aDPNse",
  "key20": "3sRvr1XwfuhEWMF8PfNaA24DHAJvyJoDu2sPa1fzCWHBPzmMpLjYJveQGN1eXHMGTxZi2A1Eae5sDfBGQxi3kUeJ",
  "key21": "4RKBk3oZBYnZ2hgKc7d9xJhJcB7Ss5Xibyz6A11UYsqXhzkLW9ZFCssGayt3GS8GjTtJwfcYze3o5bQkaUQyRoMq",
  "key22": "2m26xCvjFi88WuTq4GAyxiMW424hVT34z532Z9WrsKWCS4pNjvcKdCqufMXmmZRi4h9E7HzTbPwStScJ1WPazS8R",
  "key23": "5kf9ykYEPnqAHB2fdqaYfe7eKhboG8wk8g8J6mX9TQN7o5F3FMH5dxrQLGzzN8PEBPmUEHPwN4qFJLRAAAg1WbtJ",
  "key24": "NTUB59RLUj6YdatF2FiXMx9mn6WcEE7FL5T1rkR46oBFY2bYQNQRKpPppy2EVfMqR2XQhuERfx8MWur7x92Cxqq",
  "key25": "26srYRyiMDFSxPCMECB7vTUyyEsLU8WvXVKSVEBiEgkuon7nyeRrMo9BHoxb5zaUnowpswbpW8K28sSPAQaKDBKA",
  "key26": "2W2WzrhQfWBvico7doT8gAgFHXxhAERwY3TvrdCsbiirYXNBL462up2a3bdi35vKsHxg4tfjSmHqNfFZ23hFtAoi",
  "key27": "BPfBHFdoyu6B9RLNHJHzeqPPAqBY937aAhc1Ta6qQmKmiXMKovPD1h7kh796bdLNi3mB4672X4rmVysieDoPsK7",
  "key28": "46tb7hFYTprUNuBesQ6LAezx7vCnTGTepc3qEeipa1BPVfRtKfuohmLdXNW4bBNzyDyVQ7iLL623pcwLhLGgCmBr",
  "key29": "4b3df4Ua45qSHXA4qUnXQJKxbYwZxiBQZXhZUszdg2X1vwk1Y8zHmAfXAxp5Ttkkvs83F8Jeoz79AyL1YY3Earmy",
  "key30": "2PSR5Zbm6U4xmnxZmbPGLaumj9r2FRiS2ffeFzQdG1XZ5NBtWjn2BNteSfTTbs7zpC9ouwC3iEEFu5a1B7Lbki2T",
  "key31": "224nKTDHuhBoC1kMoDtxYPKLcd4Zahj9zjHGZbA2Dr7VUosgKKPFDQtxsMBwxv3mNFDCNMEGcvJNgAw5gkkA4QWV",
  "key32": "ydJrMjT67frpGYXJaSxPhFqLtbr7pKrA9Jgc5bTnUBiDGUgbtfNCoaxxPTNDQy3U3dP7jST8gUGJfBt4jmFGsB9",
  "key33": "3pxUdaDNmV7ArYCJzQ8KMBCmZpvTZmjjeY6oEYmRup4BAUWtRMPkDT7fUnVmvzdCsdroHoEUXzTQF6StUtGJ6Gzx"
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
