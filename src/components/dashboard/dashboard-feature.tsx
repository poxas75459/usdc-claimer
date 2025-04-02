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
    "5bmGE6QAKd8X2NPf3Nv6FNn7MPYjaF14VMT5ECDhrK7Q55FdPdBN9WCa43ctSCaTK8EYkKLNsX7UVRVRAQuRogwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpnL9eksJ4jT8GuWtaYYa9yTW8dw1S4ro1jBcZJEsz8anpfcm89R4SSg9aefvGbKfbDG8tE8GHpJyUSrEMfMh26",
  "key1": "4LJxzquHaCaVyZFkNuV8TL5RQhq2LJWHtH2CLPMSPP3mTVodCFXM8oU7WMQSoNzfQLDJoatnrLVUvAz8SzKrXMB9",
  "key2": "24FfRDo1GfxTBcXKAEtQoNE4JRg3nidGb62UBPU9QeCcT3wsmnPxhCoTTV4SgRqp7R24cX7uoWsBwNzsvQ5qUSh2",
  "key3": "MzysMF9ZwUJ6U8rdaU6ruxvgkNdSiQRro9PYic7LZ5G4aX6cpiF9WBRJy4Pgmb8RospWR1fXvAjpNehcwBx14Ag",
  "key4": "4iuHqQAuNEMGeonNPWjutwd6oJ93t8mcRULQse3yUpiBF9owy4aPYHviLhzns1E5YnYqAyomzDJSgMbMZTXG6bPh",
  "key5": "2FjgT1SGwF8X4vMFaPisFWkUozv5iWj3cVU1R1fq1o1xnXJ9N4hrpykrzbPSVrkY3FCk4dZrtmxiH9zeLvrwUA4s",
  "key6": "54uY8YoYb5BgdwGKsPMQt4LrvUjVgiU5d2iffRguDygZ8uYCJeLF7nMHrrm5zLG7bkEZwp8aX7JmzUrgfEYp4Lxr",
  "key7": "2LELmtf9r1Sp3n2bLQNU9d1Mj32SLkR7mHEwRbBjjY9nYHZnz89fy5QaksfDUhT7ef8wii7JCQsJBCQYtKwQ9xjH",
  "key8": "2VqrmpvGYB89UrZhwFhL6KLhmYLLr4F9XhHnb3CXVXK9yRExGyVurmn69GeEonNepsW2rgL55EyBMvcEVFe8x5DW",
  "key9": "48xh4fddFHE2CDV7aGqVeoew9y4vPAtXiAZBj1Fp2z89pCiC7U3AFUR9KRqWVTr4vZh873ix5298psTkAm6xzizN",
  "key10": "cpYSZ24j5EoG695sTVL1ybecTADFCWwNHBigaFuxJarGAn3i62WUtPhfEkGRSWvKjRjg1nTHhvgNhJCWn6BzDvk",
  "key11": "ndSZjU2TdfKV4tekQ4ppkU1DkKJXF5BVsqRNW4Ngbd6Xrqv5S6qLQyeeDgoKwEh2TQykUpg1e4xHM8jnUwd9EGA",
  "key12": "5GWfTWb7qGDWDky1MSAQ58QL8pzZbWLq7yhUa7En1zDyBDvNdNUQkyCYmNHMjPVkfNi6u9k35PJUfxwJrNhoa334",
  "key13": "5NC2p8kznLn1NhvkU5iwAGHueNUQShNEjhsLkGcaFgG8dD6UBJy9YQvym4TJsWJbJz6qKnZeAvaZT6zTqZ3gLTWC",
  "key14": "JzSi8XxaAjMbaYz51oziUuaVn3rP1zKahwZaZ9R348DVDXUceMc22sDuzAcf7xSZsh7mP1xBJrrmN8pk5VGdDJ2",
  "key15": "3Ex4tguywG2Wp5TYnevH8uby5fm57ku4z8fjNUpDjwHo3T3cA95M1uXQWxonGm92ZYPe5Q4BAbC3Z36TADNKTPhb",
  "key16": "245VJjLp4FSQgazCLe34MoN9dCg4jabHSobwFgxv6ZznuN4kmehDwaHAHxRKcVpMdbWsnKVxt9mRS8SmxmAffkXu",
  "key17": "PQG3L5iEHb5iiRbEj3TVouZcTuHXbAyC66354mzvLTK8uRyr6XEdbM6SoDhxr7FMV6AfEZpxPacG7S9MSTu935y",
  "key18": "593bjBXhNC4YyBmduSBZXQJehq5rGKS5Fgbsfihzny6EBVSNXSUdpYZyrxcumZBbsE9gbiDjhW6E6eaG9sLk3dWj",
  "key19": "5yK2KFLpNHzWgJQE3NfMXsP2QZr7sASDtXp2vDHrnM3HPjfZWPrJiFY7t3qFRwCJRRvYmugXLbnmL2HwCoEhzTAA",
  "key20": "3XxNdrDwUGA2HY5D3ptY95p59QzWrk88qa1ke5XrfV6cZBqFEXCfAqTkZmFGufzcD72VvuRrj8pGFFgvxZTiej4K",
  "key21": "3wNYQXUXXjkNQVPD9oq5AtQHHbTNS4VP58tMQfAcYiDQbQvsz8rMEs8fAaDeJpGSzqA9KDr9kX9FX9hczWCNkGFu",
  "key22": "3HGYe2J7oU6CLJbDwcxRRPEJMdQBjTZTi2b8Ms5fDymqVKfkfuGcx2LzrVdTdKosb5bmMDXMR6RjLN9JDpJbT21",
  "key23": "4XU6ucmrnCfcjXxxp61UxmQ8mZvTTM759Yx7ivJQGrkyvaTGUWv1ci4xH58wp5MwqrGyetXFaVtV5csXzi8Asfn7",
  "key24": "2RXpt9myxsaDf4hEZ5gmUB4W8LB2qNa3vvi1om2fSetV3Lb35ydVJosy1EeU3hBkgzBaRUDU3gRFtED87UjfnLtx",
  "key25": "29Qph6FbgGm9w5boPbrDBYEzWPJLWGbc1EcQTjW2mtbuYkwYGykV9uqiFNN6wfgoNw9955BAhVumU3WCp4SLaEto",
  "key26": "4FCosnGaJRE7yQqgLAouso2mDGf9Lj2PbnkfdWsWEb9u4XqYs5NtcatgWu8fJSiCBxHMRjRqL9GAo3hvPUnvPSU6",
  "key27": "45xNGP8dh9a7CdXf4vqpd3ajajM4zx73F1RqabQwc46ZQenvLSMd2q6iizAhkCfZiKCRxvnDQtcQ7nzLYqKhK3Bo",
  "key28": "BpomobYMcgWF5tvYGTdMcx8vpxxq34LycZ6sdvDaXKo8vG2PG8hZ72ttxNGDXJ9LwUheWfYdu9ReoBK8XQUMboZ",
  "key29": "49yib6kDKi11bqrPSDCJhb6ctJdsVmHvA8vLmL5yPSqAEUmRVkakCQ4FWKs6zxM2t545LQkqh5ivw8u9uKN1Mirn",
  "key30": "3gyvdTM9xnRHMQ3nXGdY2yy8JHVAHixZLEoiDP6Bbep9hVVJjDpJPSpfGh1nq67cmM8L53529wpUnuot4jxSV8GK",
  "key31": "2bHCQz3963WdKeWuc9ybgaBqHLdwaG8pvpqg9CwRqvseRuwoUEfNYNeNjEMmntPih9ivuqghBYSTqXLFTFUvxZHQ",
  "key32": "3HUdksjU5KGUNsPxQ1KJVrSSRZsze7hjurPTySNyF48PVLAZNm3BbVBhQa6JjMRzwLaZZhaNYRNu4o7yBVVTKEUd",
  "key33": "2AQCNJH3opvNoMN3p4e7igyhWReFPdQbmvUf5pst8SyhmJkrMpmV4fSp6cKaFE7GhRpb9ygMy4pJbSqbM5Snv6U4"
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
