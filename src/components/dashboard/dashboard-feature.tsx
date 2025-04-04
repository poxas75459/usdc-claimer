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
    "2cNiLohDmkxArvBHbTtCoDPFKv8dQcuyfD6kycY5hjm4br7LoFVKQLyh4YtcVsCyEuBVyCbkFzdvDYbi8y5dXGAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qGZQYizXU2NnHENMiHBne3cQJobFteoD5Ms9e25ytey2bitiCjF7NoSXks6ffiBHEJbNupjGBLyotsV59od8ME3",
  "key1": "4aiQwEEQnLPjweTPZ1UfVX8diaS1ToPpFiKKeRcGkYBPBvQtey5eMMct8b71FF7VoRZieNmDpUpqRg2LmSKn1pSW",
  "key2": "2QjM5eYBWEfiSR4daoq12CnhZEPz9sJrGf3Undy2PwjtTPKvJmhEHMdL4ARDFiaEKS6r5QydL7q8GdxTh7hdKqx1",
  "key3": "4pyZT8kquwZqmxaXofRV1q8WTeDuji8ppKa9QMw341oUMEJ4uPtvfwSjmj7TffA3hRzGJaWbxxeQaZj7JtQBHGCM",
  "key4": "5pD5Wpa5GYZsb4wMi6dMYPQ5cjnsUVTgY8o2uKpcHh8iAdiW3kocQqaqsCB33Nv19K4MHCmDz2T9oRVVS9878VJS",
  "key5": "4qymgPG1vMfq1Z7CtXKZb1kCKYHMvBtcPGVAvgBox8iF6Ht2yVho7jv5kcrpCaiNXVdYwgFGQEnoPGpodpZjkxFf",
  "key6": "4tuDS8gijLsXdtu38BUvCCznTKhKQ3UYxQJWugDidz31izrck3BX6UVDuGds2uhgdvf5y2pUUexmeDSDuGeZmAtu",
  "key7": "jVP7XAP7Pbx1LKuBxjAiFXW3dq6VJVrETkp6k9ufCtzvisQGhKEcELn95JDWh6r1yQGF1VvktZa9uxJYFDbQgRn",
  "key8": "67VtotuUgoknR5wLhUBzhmRT5REXJsar58TtnntUCv54BXXqef6uKJufrzMxy4tDWGR6bK2eKG51FVrkwz8opC1v",
  "key9": "5ULTJc4vc7y7fZ21AuCCziypXRWSpmcbn8Q5vU9i19hkJgGYeYgrpagjiR4NZZRxDDWAni7sdECZJudzc9BR3sVG",
  "key10": "4vGsZYe1dRfD81JH42EStjR5MYzq6cEieb4orw4StVqrhW5m6eNP9BFgCwyGmAg2tudtTobiLtyN8rAG95zfYoEC",
  "key11": "5NcorpR89hX86ig73Q9oJVX2KaUJ8aYtbbfR5PAQAnAdUdo6Wka5pfjPsgJQKkPniMwV5v1uHUGrADsYXUFtXHG3",
  "key12": "DcbTwjCRRfHkwVoSb7CSfGUBpzyDvq7BjiozLYTh6WW8aYt3Kk9jjBQ3zmLzT1jkBwRA2SJ93PMGKmGVwSF4zbK",
  "key13": "4x5729Lu1b95nwqnGtjH7gMw2HA3Kbnwh9F5ho1U2bcerp5DgbuEMR66sJ93Pz2sbwmeMohDgNQiDBi32C65qS2Q",
  "key14": "UTnmLqNy2ALqCU8oGFo8JCxp8GbLGXnc7V5usTzsjJDyvz9cH3YFBAaGzbSsg9d78DZFn5KhqDgupB2BJZWzwNZ",
  "key15": "2JMm8T3GhDcBTXnWLShwyqiV7tDa4USjAmiHkz9VwxZo2UXmtk1aZVr5PZ7pjPg9W2FD5c5aD5n62HXvgagtLSPc",
  "key16": "29iDxoTYcRcF1ujwXHDSn8jm2UHbE7BpSXHeqc7dLn5gM52WwNfh3J4zRq2ncyVBWzubNV1jpEZAjeY693XQovUe",
  "key17": "3fiNk1nR2sk6eV53VitpUpd2LJ4wCFxCB5WKCFpVRwvxB5X7EKDMsqK4JAREH8vEErEuGVbMMcEePmpaz6tST1H1",
  "key18": "2kEWTFQUUenLmN6WWyGNte2xriGhheuHBAaagLDTxRUBv6YpZN37XZoba4oYW2WiF8QVAnfrcHop5p8JfBBXqKmt",
  "key19": "56h2oXrzLRbF5szfafwuDMQV1ZX5g4wWYq73EFwMERsjsQQUqicjWjjra3akZJyLiktqUhMNFGjtq5B2PePyKtc2",
  "key20": "4JNh4FYR9wrBqU4ApQKfqgB836sQLsG5UCaA2MNQzaBNiTgSx9mTjwYX7ssvG6UNvbZfP2rzL74GwAjPjZzH8J6W",
  "key21": "4VtpvhN6FLdSSvhhqBHgttGXc8y3fvrcDdjoMy4v6Tu7MtF8zeYivLUcDNaRjgRbjgnzrMg6gSUcz6d4aVCSR3px",
  "key22": "stc5WcCcaxEswX7rP5zze2MKURyW3JUSoMDdyJ2tmpo878XQ77haqjFhu124mDrKpXpxLoVxL9uJK5uHwmpAKpY",
  "key23": "2LW5C6tosjvnLpfuw1Ad7aQGUdDcU3qJhLqeZeaZHX4GWFCUHM2oA4XivKvonHctPcc9mh7HNFMYdbcz7meXDoeF",
  "key24": "5AoHwptrwNSE5V2uBr3iUzEBvqu4vrQbU7kzHCRpqf7sTA51Hfgz1W3rJ5pFXdNnjKzgHdF6KQs29uNuQR8sc5Gr",
  "key25": "mcm1jpsi8Y7wRDavZdF7zRkhn3zJyjFGcwbdZuEJujqc8PqtKKY1iPiHCibjHb2KRjf97GKyzDqj9mvhTFHY53e",
  "key26": "357byMKMfoJiBtV4BpTuLUpcEYsJGnUnNm5LUvQCizLxzDar21qbfPxs6hF8eexyVihWahR96un7x1LkrvR7TTRH"
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
