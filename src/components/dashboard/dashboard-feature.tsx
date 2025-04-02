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
    "3Ct8jeDQ8e7bGLNQtpfXYDPphsWrbbVDe4VfjgTiTCovfmELu8jZ4VecEvygpc6R6kA4u6nRZTCi5rv6KQuZp8QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHuyUmcmAeYtjc8YWoKUpFoDCC1kppMTMGgY89S9PUQtuX1MiVbwTBeuhR42Eap1vgaHgfRZ3tQArwQmSipgEQF",
  "key1": "3zvD1XkXSXGPaQZ8Ry3n2j8mNFYtvN1UuLVrrQrNqg6uYryW79FAVkpPhWsLUqP5rzqZ3f8gzaFpYenjnn4DP9kN",
  "key2": "4Vi4Ed1q1Sm4NdWgtFqH7pnVVGi98Xjny5PV2ByTTimiayLEi8HMp7aDxqsWHSANr3Fz67DnFMFzyupki4umTVG3",
  "key3": "5mEkhATNA4WRW7LEh8RWncUvtG1Kojgy9Kw2xxyvYz2LsMHSVEpvqvnnebKgQf424nS2z841hQ11HiRXE73dzdmV",
  "key4": "64vkrfLtJh4pZUY3NR14A3Y7stvHwVfgt2qbz7ocCtV8DGrMX3FdbNoV9k9B8XhsJVP66KRy27bMZaR5d9BbiwLR",
  "key5": "JpvFkihvBPtegKvNjUTP1PMXfDueDga5MKqHW5UVFSx7cVj39YNQvduJNKN8P7dnw2nFKSypeNfMFfmGfXZN5Ww",
  "key6": "4DosL1Ze8HNarXnmPqYTwMAieqjargwmRVGMb2RMTYjBPsiL2giMeYrz4Yy8ARo2r6XZYWMn3bTQVnsUUqESuddM",
  "key7": "38oL817Eb2beXaBLegcjgoTLvjqME57NdfVXKvRPbN8AkK5pAes5V6vPNf6puDUXvMQCSNWb6mvtH8bA2gpM4XzM",
  "key8": "kkoASms276gDAgwFa76jCkiBvE3zNfkS6AaAuJmHYiBPXvnM3xWVtDV9GbUpanTJsdNjzRS2swwMsasT51aBLdG",
  "key9": "tJj7SKBP4mNJC8oCmCnWkKdvyfqjeiZNKX4jfJyAzwcBhRnQ6Xn3Bg5PemUS5vtnXvX3yJFxEyKgQ3FNHWbTMoH",
  "key10": "3JE4SgyKYXrmH6P1P5t86LJT3i9KgAbgKDudgpm2vCXuJMH6VGx7Cy9gheUpKSSz4xoCtCXecsJRvTfHsas2Ydhi",
  "key11": "2Ek4GeqxK5MWAeoQVvbyCHdHzTqBm4aBVSWQcPtUVyg4AdEVJt5tWGBAd4SbG7CrpCT7GTnM37cEsL3Ly7nyfDzS",
  "key12": "4sge5vRZUCgitzP4ggQ7KEghWKZbsqddFa2nBcmk7fF9jdrigE1xN2DboZhQPQ9Yi8yDqNCx9HgfpX14zyjHafJV",
  "key13": "5drSMqShDzG4HVrt6WzJQLjtdJE9Hn64qbct4YA6i6xLx26s9F4t3T9ynp95NbZnAKyRpHkw5TpLcyycjbEvVVzj",
  "key14": "2TgaWBoMDVMcwER9DvCYS8sLGGMXMpYix2U3zgtfrRsTLaMzQDHsbbQ4uq3Xyho7JZSid7Z88Kbcgg7JDbq7ZdoB",
  "key15": "2kf2hWASbA21mtjqrny242v1rVGZ1t1icHoy1V5bsHAYPCd5Af6kRTmgQz1XPMBPNAQKeHZAm3hJ4MnU296cBMUg",
  "key16": "3h18H318W4GNLVr8Y3ynjmjq98CB1mSoci6uKv4UgaXsBiPk1QftSmsq8YipzXT2sHSkuGfegR1TvJtY1tCyoYJn",
  "key17": "48e97QMyJB7GZZ3w9GwVstTM3yv4PJNPssbgzmED3khAFr6E6XLs5Wq7t8fv8o3GPDDpAR2hewZeseBkEi48pxW1",
  "key18": "35MY9CZkXAi2MBASW1FSXmu4itgyz5VD2p1BgKWBmsLqEMzw6w9bWBFat45LW3BAfE5n3CWyHKdzMivGJZirwGxc",
  "key19": "XF41LxtE2wVUHAh2KE6iuwsZE1sQboBesCThsfrCMWFevmsVmDzMccLN5oFbF1mp5NFKVKLKtL1ob5Jdi9TEhGM",
  "key20": "eNs1vxFJxP11XLsk5EaLZav5eKEeTEaC2yv7zoX4WKE91egM3sx3hV1aPr1cnxZ2ZoCNKn5miCuge1dHG8mjbaP",
  "key21": "4HGM5tp2ER4T8PcmG3BNSRRRRMKHgDbHVkkeJ2Qok31U7iNmZSVbkL4xUA9LUZzMWRq4dSEXxmqMRKWD8JTraZDK",
  "key22": "FrqQUrNAe8NbazQyPVZziF6oBZiyfiYqM3njb2Q2zrxJHKuSjR9BmLnVTwaRL3Xh5fVZPid1i6ezj8qr1zZrvsW",
  "key23": "2jp7PALvz13DZYnCfK3Ntu8ei7Nc8CsNgpsXtYa1E9LcX8vHwVGAe1TkjCmSjDHCRU5yMkGfG521jzkBycXCChMj",
  "key24": "KhCqhXTt3nz1Q8eLTqk6urs19RRPyyo7WojtRVbqkz15cieAGtDQQLhBTJWmGcCh7G6KGdfLWtxWMg9ZNQ14Foe",
  "key25": "5KBRFwx2CSVuBfyxRaDnw9qDoQCt8qX13RB5nhM4xB5AVjHaN3aUQpJjEUS8T2MYT9TqmgqEE7m9mzYp4vcVsuUe",
  "key26": "5QkeK2Q8YXn1z5S4ba82AuocvzT6xv4Eo4gGe9ApDkt4ktDBY5AR5qAxEPNY7cQt6ZuSBAQ6nz11rMXmzMpXXWKw",
  "key27": "2sbMd8sHCpVnpSWnY2tsQusdQrDV46CvSCxA6C5gXaozJQLvtejbvznhQAGVLs2p8TkWsyMY6ytDUau9Sf8hAq66",
  "key28": "2KTBZ6KDGH8YAYoanCoygi4LvjPkTV4nXsBUCvgarTDHirGaXXbA8Hjv9M125QthqH3hzEUxK1cGywex2TUcD3BF",
  "key29": "4qFfoocA4JzPUtuKKiSU88ibf8xbUq3iCQ6z295ZqdBA4fCi2tCzzfGzc8n5mamvY1beBzmPePwgvFUKfCf4es4Z",
  "key30": "UVQfC4TnhZjg2xUZHZmki3G3p2yNXYwtQf5h5XeE1y8iXrZEniDitYrcXbC7qPiZ3A9CsFPyBM8xzBdS1nC6DgA",
  "key31": "3LGi2wdc3AJKy1F9tQVjvRuagsB4TJZGBePP6uk73gghCDBfkyYj2d2vpKk52Epc4b6Cjsmi8GJZuipuWcMQyoFP",
  "key32": "RNpSZQnvqsiCdq9cD57A4Bqj6yVqPnYMgd1n4zYk7hZxvi6asfB5kYb2cUQvZwQ4fhTwPYtwKxA8fFfHG3YDC2P",
  "key33": "27u4vb42nbvkunhLqb2hLyTqMSF5CHxqjRihgQnrHCcaATuPfSqdDXmce36rjZKABsxJN2AV9JP4ciCu2nkc8iDi",
  "key34": "4XAjrM9XHeeJxLHkyYayfvtGDQbhwgv8bERXxShK1RjdDGGrxUxpDb9LSTLxKj2QEDTQ1i9SMXNJ8bNe85pGBrdA",
  "key35": "5KmxZ5KYYUXvoKkCr4nxNC3QrMp6EsaFjGgJWwdyYai284jk2pPE2fHcUqhhtXPfRKudQZaCY4Mvmso698ijkQzX",
  "key36": "5JqMRkgXVT8AwYmipC36Mg33fCn4eTAbQ8DbdjLs9RF3KXdSwfqtvmMPYQkSQjjsdxKG9Fw7oCp9QjomvvvXRLA3",
  "key37": "4zuJeyq9sXXcvnBhsKt69ibE15WenrWn9XLqKP58oLYE7f5wCWNT7z4PLrJUmgf8AhFQ8VeZf2jd8WjbK1RbuZT8",
  "key38": "3qywBvKEupBxsUGyNeeRfBWQcgmd4KGjDZVxrNRTe4dTBFZxQuM7JDxQjoWQ2doZURHqT4Eth9N15Dn3yufekki2",
  "key39": "4yeLyAgTYLknPDhMrGzZUJYCwhUscAW39QypfjXth65f8hzMitgKYd1USrnFpzzFbYuYzF6LbLrjnubpPUMZVtvn",
  "key40": "3JjUB9s9bqyMexMMfqrBjw7JHNsZZwEhoKSLCY2s3Mt2zEGkadMa4deWzUoXzML7BPoFLGPcdPFcqCfCTyiQAoju"
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
