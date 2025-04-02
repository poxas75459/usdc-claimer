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
    "45Coe5gocS6t7q28WyoNMGzXWe3uZ3zN5QaF9iGDRmDsBWgX6wmgnFiMisdXiGyC736y7fSuRatLemYK4VWJq59E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2suaujTBQPqmHp44CaqGgKGHXgfCJpegSf44ny9zQFhDzm7nvZ9NFdM3Gp889Cp8P83pcZbX7fCN2P4R9EJdHc",
  "key1": "4c5HpiyP2H4UX7rqRQn7ER362bKgCNYy9xk4CevaaMQXKMhnfDGeU8DbFyJR43nFtSz6CVVtPBkAN62ornF1ByBi",
  "key2": "3M4k9xQky9duGvBSg9gCRk3rLWjd3hv6Rq3AMLkFsP8cBtWWMPRduSw9j8b5gQpXcKD73xkjahF3Q9hSJ5Ga4TkZ",
  "key3": "3qdaGbh81Rk6nDR2XN2XjSk5ZSwAYvYQtuc7xKhp42a2E777FaSH4UmEBKbAMsrSMeE5GX63H5wyYkXp1JGnPuRS",
  "key4": "4XddTApyJmRX2BE5ZppXbsUrjC5pA2dDUv3jw91jaoSkwSwfevtttkHeUj2LL9hjNXcuFfCqwq7iPJdfpmB77FJt",
  "key5": "5433TyXXd1remShsB69Fb7s3R8nmvBkrJSGjwohuGm9rfpLzthNzuW6BQdhnwr7kz2ThrtEH6npkXXuaQ74Rzpjo",
  "key6": "5retgivEYGhTP3VYXcCBFaGQGwAT3iCtQJgxtvBMPy6SjCTh16xCE9cbHLBUT8U4mNqYsmapNhfqjZGwKnfniKuY",
  "key7": "2i8cefrH9UufZVZsGRVCq9s9vmZoEp8DmqwGcNvEFuvmGbhtChnziaoSKYG4sjSXQLpz4U1sE5EHZLMbfhVGq5fm",
  "key8": "7ZNPtf12GV9jt3WyPPGW62QKCgQZK3CiuZvUZTWTMoPiwz1SjuU84gtCTa5nLNrkSzo3GSiRfASwNRCBsw2e9NE",
  "key9": "3fDFwCWJm8YhbrHNXqTcrskc9CmWx9TjcAYnPvLvVcAUpQ589XexEJg4w3seFV9yKo8B5rumKT2rNpaBWg1rVtTt",
  "key10": "3bzPa4c6TG6Gy1Jj3U3mBRf48ak3S6oPk2XgEejcaGUsU16nAXmPWXqPEp37rbgPQUDnxqSeVABFtBqCaKGMJWTT",
  "key11": "6778yp4pVSpUvKbb9QGYP2H7oj2CLGsduCX7pZAXzdKJudjsBZ6PF7yCt6xYuT1ozaGBrBFajpxn5Wd7JvK6zeVh",
  "key12": "2sBk36ApwcpMTvTCJUrRt4t3ExveaVXQHPAGVMN25oPW3MvBnZQYmpJRhWACaERa63FxNb3pVpdAw86yYT4Kw3jS",
  "key13": "opBfWCGyngtuwrADavLBmmftnnLC5UqpEsTxziM1a4X4VPox9htLEnTQ5XyEqubdmi7QbnUg6kEUiASZ129wAFT",
  "key14": "5mmXSBb47RsU9U1JuzR7s4k2HRNp9Av5x5qY8uTBBAvXMX7oKj5Y2oymmwjygEoHhjR5p2acuaHzursPKgTFN36K",
  "key15": "2UAuzhZJ3QndCDEzrGJP8d8XWN6NCgv6VUCqZDxFiDHB8GUvxMkmQsUCgAJWQeBJqTcBzbv4kjw8bxNGipekdQ4k",
  "key16": "5ApkY9wLfwQCdSwUJVv3VR6RBA1gxTg5E62PQVDzn2pDo6P5u51BnW4ctBKSLgsBeTtn7QPERffmFLTmTP6FFoEK",
  "key17": "2M7MWfFFzZ6v7ouuszGq1CMWx8SAD6ivbCDKBfF4ykGvTwhKxsRHCyWa4ippiRWZgUMcpGSxidVeAoNQJTHeKf5X",
  "key18": "2mZF3njwB29BpizxpMawZQvUs6p5udfJ9xKVERcpPwFpcdHBy2W4LqbVdPj2euzmrRF35MUWdQ3SS9BfNKsKwr28",
  "key19": "5ZBonGwfFuSHyP3JYGZLNe4fwidCaBZdfc3rDoBiFqf3qG9qZWvQT7H7NtmPFgzJut8gEmXYuRFsHaaw4BSokoHx",
  "key20": "5osm7BVctCzgM5cYPod5DBzWBG5JRHrdL2mZWAPh8PYayTmxxLg2HHpyfcJUR9XZQz3NUUxVy3n9PYz4PATmo8Nv",
  "key21": "NDVG3PmQgQxW89L5gYJBrdikLfDzeuXm4wPovhPHeuEdWMn1kN6Mu4r1PTo7SxgAriR854ZpwiD8mpUmCoG1C5n",
  "key22": "5D2TbGMk1P4ytHwAHVTYVaDXFUZaRVZHmvqtCb2d91vZKjMroJfsBqcHaPiAmZF6faS8WDoaLWVNVP8FPT1eHLbc",
  "key23": "3n3Vp5QLu8v51Dp7fN3URcDkQ9G9uWYfWo8d1mkvWUHVKiq9WbexLY91zmJB8suNQLsicteR8USpNAHMPoSyGXQx",
  "key24": "bYGWEReovBo2stdPdmTEm3TSwqeXvCb63edp73bkJtJdZaVyzbegGdyFTHDDNc5c4o1dpyEiAGkY92SDrwzks48",
  "key25": "37AeUMQxfY8qvJXPq7GtthPSNS6xUckJUgZsutEFBYccgYerdRLN5tedJgunmwU1QRN4PxLQsTRHxv5A6j3g73RX",
  "key26": "oqNLS6T7QapGaZdFtfp1MjMSe49xAJA7VVGMjLnTk6ePFtZ998WVb6bxWxaUAFcwB4MteaVZUM6bpmL9TvWeqSs",
  "key27": "4e6UBnaPML8hbBCoFCqeR7C7rKTdn2YwNW3cX9Uxq6T4dD25rg5i4Q6i5L71kbQAySKEci6xuvxsBxEVJz3fE7Mb",
  "key28": "2di1VTKN5ugu9SzbPKSpVizFmg3dXstnCXrLhvdMjGdTSzjem5FBJSSGa5n1KTuqMEGyQVK8EUGe3PD9JQvpWArx",
  "key29": "2ETv9FW5JY7gfjeDtGGJ4yRt5jRjjz8utrDDpQy8hAvZQChQ9euZDX2FUX5BRuAKcRhgv8a7TcvPmeN2Hq1ft49m",
  "key30": "2g1eTroy2ESuYLgvZMcBc5UEbNyyf1bR84ojS2ewnDZjSkkhZYT89H6pPHw1P8MMJDFgM2PvUX4WjumfpNefREyv",
  "key31": "5ddKXK5r1yRNu481T4hfnUqC82xBYkLZFTH9NqKzdmsW78bets6EFo9oGPgDRRBBndtNTwi9ssyczmyYhUSULkqA",
  "key32": "3dftFUswfvT4vAVBmCZe7aATvF7WaFs15gWs9xxqAcY7jRgHNGM3ocmrCDX8iztT3RLkrP6MoswiuFrZjyTRWxEM",
  "key33": "2wCHpDEJUXgU8ZXhYMza4cnhtEDPCZ67ZPetctifM281MY3qRtLiRZvcRSEJWd5sPWqJg1b2V6SXhd6vDZ6TNsaS",
  "key34": "4JpXCibqY99dJcojziDUJ6GDLC86kb6kwCWPR2m2y9dJ5dMfMXv2P8gEoYNG3yZNHQoPaPyyir17ULHDn6JQdnMW",
  "key35": "3Bk43dN4fmX9BnNjV4aa5vWTTVreP6VAsk5qECVgN4VrzFW9qqFmoEjeK3LBn7otXZ2NFXyYR7scEvMYterazZQo",
  "key36": "2a4vUDK2tSA7xxMBxUkdbBzdAut3ewzNccoEPdGkZiqryHHKL421o2XQt8KWJGt1gLybKd4kdVPgUYeFHoiVvVHH",
  "key37": "3TfsfsFJSwRxUUMocJxytBCaFY5mS6Jydk96iaNWM2Vbze3xx67dFTjjUNo7bR4nHUmge4KZn7nQLPGLVGkbCaM1",
  "key38": "5DDtWazFyZNJWEVgPy2PYDxMFBF7YxRxDwmTvQ52t92PNhxRsCmrQfkVtA5kFYkHc48CDqzpjZoesebdZMmyTcuy",
  "key39": "5FtAhQQsBzrqspPJNhQ4HzCyV38D3h44aUtt34QtZ6u8LkFohgLuLwpu1yZfTLx4PysLo4Tt9Nf5QwqWHbatmg6s",
  "key40": "2Nz12vmyJ1fvU1cbkLmGdwBhAH5yeAagPpMDMusp7wJfG32BpCfiopzJMrcTxckEZD1vA7YzTWGdSg3PvK1kJLdy",
  "key41": "678cVxfcpzYF9m8u1sLqTNDLYeZegrktquAjfCdNxncLJgLBog9HQshGx8EY89vqY7syneMsoJHaFT36JFKbyDtX",
  "key42": "3HbMabAZKSCBKTAQB7nocb8PBXqm5XXpsU4571U9T5pHqwkKyEHmgQEygM3ejQfZdjg3MbLAapny2YchF5bGzNdj",
  "key43": "3iibymX42qjX8BaW6TkXi6KUPi6D2EVvBWCk5qstdcZphnEFbXnkDibuy5ddAfPW51yodp2Wx8BcS2kEdTNb2CPH",
  "key44": "5eGLGBEkTmMmTxsLrXg5ywKzC1mMHfqcvqPscJ5MSCDjjsbgZfM7k233kgPVyxwXok8JASEVnjvpSAnzA8AcPvUB",
  "key45": "2Tw5pmxSzDrovYkJgJebfLD1NfUwPZXsTsSESXyqSPnuEw457s56YidfkYdzR1YpoP1iv54dFZRQStmbEKfvfZ1d",
  "key46": "231ECcotcTagHJM6voprtnciXNu4ohBFNuFVaHzKuGbQNsUm5HaTcA3izPz2cv4J2sNjDfYavcajvHuVVjbmwjWH"
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
