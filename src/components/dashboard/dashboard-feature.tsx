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
    "4F5n6ibaENEgSQaS4yd2U7XKaWvmTZce67ucekg9T4p9fBMVfBFv6tBttycdktaBhz3n7J9KAYF8xuPhHFffH2Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywcNTdRH5xNqSarFy9e3nRFRDW8z5peeYeJjGyU4Q2sZ8GUNRVrU32L2A2EXiuKHtAMwtY9xKQi7iRjUotRu9Bz",
  "key1": "3khhFvKgWnAcmNYU8yrjD9dk2MfPjLgCejh9gsmd3AakWMwrVrV5fNEehhiabvZc2PCCeyA36C6aebW4eeS4Dewt",
  "key2": "5zbMwFZAb3EELXnXePFmxQSXCfrL9vBqFXNZ68psZ1dpfusdbcDUAGb1HWBTDix2juYWFk5QMMqKtBAM2HPgQYWF",
  "key3": "663h5rcjfoAZzTHdiZDgd8CdYosbN5aQTHsuZZHSSpfqEQW7VQvbR5VvoNp9yYEy2FrLqKhP74acAdhgLQZVj94t",
  "key4": "3FBo19rkwxRmQ69skVXNBh3sEoDNiPYgrxeVYkkNd8pyCd9QWsZb6qdZv3u2Qxcc39nCubvVubS5WqQuXPAN7LJX",
  "key5": "q79LE1vYmxQwVDCh2mhUUwTuSoRkWnQaF7iZ1AfRh48yExKoHgoQG4fG4QX6DqowGoY1m5JM4zYAPoEA5ontEg3",
  "key6": "5V532ScaAacxwJz1ZdNk2T11KEmh132h1Yp6UfD15ReFghjdBp8r3a5XpKdyf8xqpR26eWBwHMpXnJ9x4FEShKMk",
  "key7": "2vT7ksasCvt1rsB5bMj1zWyGZV9mvBdRfYCLrNvuWwXmNehJW57U8f2Ft3jRcAgaXAANVCP5rLSgbqNY2TXMVN8i",
  "key8": "2FiTDcag6igedcdmtMKhrHyEhrVkQ2END2T6rA5Mn9Gp4uninZwCBnGJEXJMr4Ak6JUaBwZ3Hus4PPe7DGm6W1ar",
  "key9": "3sCkZHeb9d54DND94wxMaPL556VfXLAMZW5j31HoU4GFjYb6LNGgaokFzi9fWPyUMime18Bpn1TpZYZnPTL6riZ4",
  "key10": "2iC4ftb4WFBEVLaPMs6CxQU98fcqM5WXRykWRMmvcMNSJJj4Gb8iNbNgN3kPpDRdYEeZjQbjZW62rBJCeWVP77iJ",
  "key11": "zbqRHzjEhSC13BVdZrG1rHnYXZHdf6KHNzCmfQsC8MwRBac25KPBe8qCstSczHEm5oojwt5Cdp42aZi6PJ3o6Qa",
  "key12": "4T8xJZPB82xaqyamAMAYVDStm1BGZvbbHPbSfsUhTtcCe5GPNPWCVmoQUvkEqos5svcWFgQq66PnifF6MXAFi7SR",
  "key13": "3SQLFnGn3MKBvPQt5KzNuTtJr6CpH9ZX2ANZ2j2BgBcs93TgwYBNSnHqMB4wGQ3XBSNev3iZR2N8hcMqMwzopV3g",
  "key14": "5x9UeKCVZsKe12PidXCFr3k3XTBj7H5Ge8rS6UBuu8p61vQ5c7eepddb5gMscAzyNnLxmGfM3m37X2pyTNB82wka",
  "key15": "sTpUnhNZ3rEfHCd1AGLjq1GnoVfd8GtCfgBomA5YhqCzw1NoVfsKxTKwPFV8NcJWSx6YzfH9CwrzK89XxNqAWDz",
  "key16": "4ejUv6nTmXez3objk7sZoe4uCUFuMvgqKestLFPcggcvrEzXqfkRS2yMKExf9iMtia9xaq1CwwwrWgFmqvxqaoUn",
  "key17": "TYmbx1snFk76eytaBn8sGQCLBCJyDKe2uf4NJc8HBZagtKe45qd3ntUXFfkC69mTiRo6Up3pBRgGdC3vrrivD3d",
  "key18": "5i3By3Uvnk4pJaAp7hHhPbB2R3DoyXC8poLuaawDBACHzL8VcWTASJ3LfHWgvdPWXD9nxK4Pjz2sgpDo2XPS6wGW",
  "key19": "cirj2ME6UDrdcYNCofd12iKA5gTADo8aWaiqXQdwyhWLKqkVP7K2aVMPigYm2Awx7mWVWgLJqFUnuMFm6vsXTSA",
  "key20": "3Fo4ziuPsa2xMcheGbi99Y6D89apQTVgeawHy27GPT6rzcMVhr6wNPiBGxkGkCB1PZ9DmMCMwFmaBpoZG9KzEQKU",
  "key21": "4gPbmQecauFQZwSgycdhhLkUSvPcMFb3vs7xjBvZQxu99yUaSU3Gof8tKAANcKPzFeAtRGeX6SCjELYaLfwb9o5d",
  "key22": "2YSewaD2FKE4LPwYQPri3TTkahELEAKoh9mjYiedoRr3pDge4Twd55sKmTiDZDsiSK8jQXhVmwkKAT8Sb5Q3akY7",
  "key23": "Jsq3XSGmLbvXutqdvSCy9dnmo6JdA1fuV1S9kJKLu4c18kAnD4jskv2ZbkmPn1hCRvukoEcvpi4vHRJmHHkRhzd",
  "key24": "FzWoNeh4QpAd8J6FEmK5knvkAHkBGkrJsHMQ3yAisGQkZCn21FPTJbJV1Rbw3FBEmLR8NdEjH4dMpVHJRLqJvwf",
  "key25": "28YS95NUjSo2M8GFqoR3yNXZ99qww8iALyofSymb7mVhkkbagVxatTLpMN4D7bc9oR3npKfvhPtJZVDw2ezhLo2C",
  "key26": "2vLrDXjGuSAxRtVL8PCfZ1D7kqhSucmoJnWxQ8QUnprHcRhE8jSgt3fpcJd4D16qsdSbH2HwXmSuMaFZ8ZRSn3Jf",
  "key27": "25yWbKxtLttuXsguvbAKrD4ib5CRTshTU98KAMCba7D3dV7ZydR1geMFBS6cNVcuQLp3QqhPvZkAKHjZ3CEy5GNi",
  "key28": "2ztszjgWbX2p98wkAScgp7zNCReCAjFZPvmKg1wbf1nWaSGzjxdVLxB63RrvdFDJYdSkWLK3FH3P5xPfA2x7J4iH",
  "key29": "3AkKDZVD5FKa83NjExFBRsZRKpkqicBz7QhcGBzMJvqU7E2idCgLYYqgPU7kq5eFcSX6A5ENWsRaxKgmBDY53qzf"
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
