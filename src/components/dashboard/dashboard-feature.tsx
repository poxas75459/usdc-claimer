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
    "5wL31EGZgD8yWcJXstXYrgcgcXYPAGgLTMhKsGAxjCHiqMvRF1VkU1Va2g44ntE9AHALEbL42U3K67aMEo5S8Hcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mZaL8Wrsa37gef1tY8w6bDspWtUG1H9Gb7c6BQPQZxTpXsnZKjbaWFZupLSiXCAHrKP1cpkhe1usUYLw4C9yH97",
  "key1": "3rsxgPMwjYfDSnj6wRmcBFtKS7eooZDrEXp85CqnFQMWFPzpzxgsktPiCRe9V3udnYbL6vWBgcPUEy3awAVh4cDr",
  "key2": "3bHwm3iT9Vqui3zCQePrfgpjNy9j5LcQUVnETmMavsuDZSFVGRfdGgN2i2xzF18vAmEQHttzdbfMaer854SUKqNZ",
  "key3": "4523JyhG5nzurkhzKcBiGMwQaFdSenBMWwM9hu3CML7JiioExiaxMrbYC8hXASY7L4VYLEPUk7aAjXwUvLE63jcu",
  "key4": "36MbHAR1ZktRdRwSGVX6wMH9TT1WmbFsTfGgTTH8CLBEnUqMm9KZuQY2dQqE9Gw5EsuTpQsuhTCshmpcq5XvQgT4",
  "key5": "abzKVEnypjxNQS4kHhkaKz8dCG63cXqBNwnJkY8C6tnfdhBgm49KyudaPP9pA3BmbftFpM4pJWYkJBLyNfY9LjV",
  "key6": "4atMrz2CswpKCGB1Js65mYvF9bKPmyskZf8bsxzrgWo4B6C7hBxBymDDwKzBZM1y9sfLZQHjfKjeF6g6UaPpKPSP",
  "key7": "2v1VeqqJbPQCQmSSsvmxKVFeHeXvFoBZdAQirUc8XbsxrABz1TdsJ7uXWgeaeSgNsGAscrR6nhk3vD43d4GoC1NQ",
  "key8": "3PfdRCXwF2uMRXPsk1B1ZB48vVtKgWWh3c8xDi2wQbyqhe8s9C2NW3h12VVNUtkwg28ieciM4ZMyXXCtK8iqeQ7E",
  "key9": "36s9nh5HFE4yhoSsg1naNMz43kSBuivzkh3jWXNGw9rf99wbym3p74Z8LMJDNPpNwUWEdUQeQhfLGVibdH2ZFayg",
  "key10": "2PHwFQEAUYtGkryW84SWfVT8aaykA3G5SBRiMLwAFqdB9sSwVZ7DarDT4v1smbpMHFbyUqDsvw341AyEbdWP6SeG",
  "key11": "3ZVs7jZFnJphKC1oMCXzBMg7cxZBB9zT6hqhv5qKBnuzmXJQ1a1QuWgWJnLxMuNUN8pCbAPWaRu374e2ujoMYDLP",
  "key12": "5f4yxB4Bjbs1c76FHHsMvRMt1yWyxERy245PnSZd5oCLzMt85oVAuV9u8yTQCsckxfXqFTRcXEixFdPSEFT9gvYB",
  "key13": "3TAJGa8qZpnqTTp6gG5oxNrczSLvdwt4Z4dXNBcY8Mf6zW6uU8WTbd5FzC7NkuGiLH8V7ZaFNeNYWf5HhKuRZYbk",
  "key14": "5MLSsjWWRi2AHvPLeFSU4uxpeDt9j1iEiCkg3DtDnqVhKgLTyBS6gqpi2sfjEtS8wvLrSWUBpWSvCeLZ3dmySQvi",
  "key15": "5HrDAjVmcTrFACFXoTcHWGTdmyijXWtGRX9jDNY5a9m3bSWZPS1dCZM2bR38ANJ48CGjwNjhtBhqJ6oWZMrXVHE7",
  "key16": "7gEPvoEXTffJPnJBbpqfRef7jjgEfKEWKheSp2WzvVraToXnuciL1auXSou2KiUADu76Hb49rjBYjDUF1bwH9MW",
  "key17": "4xbJ2MgcqZcFJiRbV1rMMBPXL21UaV8sywNgCtxyvtU5MHhvWJgZFNeySrSou2mPRAaUme6vEPqCUyutcp3gtg18",
  "key18": "51U3x4y1opTVJan76pL8oavkNrSdHpd1MJFkTJLnZNyNETEfxknkyr6b3mnbb3PBzCTHwLNGBkCpUooP7sShemSn",
  "key19": "3fSUfHwQf4EVbokEjVquGrZNmbPdZk1kE5sd27UoLnQqiDypGA51Z49dHc4LhNCx3PZ6dt1J2ykJ2DBwqHfJpFuw",
  "key20": "48G4wz6waf9cTYU4gSZ2EskBrDkoeDqKW16B1cDiuxU1mAbc88cuueQUSBQS7HtAUzZZi6a98QRmsTPWKWr4qLQR",
  "key21": "Z1nCr4qfCURXiFgfqsdHCWQBHkpEREGcwZ7eyGMMMXWV3oZEpULT7HN7GSvDtcijnHrjx1eyjnpGoPMqJNdkvNL",
  "key22": "2tEw9pNuT3yKTsR5mjb7rz3QpDwnkWJxnw8taGgVqe4WD5ZnaZptSMjegncm5uEd85ifysLRmw5ob2u2bZqoQ1HD",
  "key23": "2VYYrA9NGqBRUKBjp4JdPtpVzQbDd6iocVUTXTAL5RETJ3AyREH4dTG2kg2vWcz1iwZd3NVvBi7bygGKiNcSsKdv",
  "key24": "36x2m6jYvgEArTGf1BwQqRWCcJX2E7wBZRAWu4ysMmH2RQDWzjpQQWw4fjVcDTeYrFuqHGxsJJp876JAJPsEcJcX",
  "key25": "3Nf2w6Nep6bcBbkg1RPD1Qj3skcJnhdrCzuau5EfsMjcqj5Rq5xjBv7zaVra8rMre9ErpqXewEG1U9PzVzDk7YiF",
  "key26": "2Wi72iiCzNqU3naALy83pZTRm6BkD9B4JN8ynCRhdHJeb9oTLZJJBmnGX8R7qxAtvP6zVLxRYsQTEVqr57Sitc4y",
  "key27": "5a2U9Et2r5kqqHxBbjiQoFLx33XHe39aNqqCV7pr1iz6TdecjxnaJ7fHTH94auJ1bXckGAb5f9Q41pW5MjsvqeA3",
  "key28": "4qH5t7xeywN1NeHM4ayXHMvJEtnw6XMoXh77Hgw9vRD72rtmnLkDFDrpiTa8Gn5PsFspbVTBBRScwWcjzY2a3diA",
  "key29": "2sgSjxXjqCPdiFYUdnsm8vjhvj6yZsU5Ygxy9JbzV8hrvnmpmAmTyxdCBGPhbDfMirTd1xDi64VR96ZqASS5co1x",
  "key30": "31FGYqETpRXVAArMKFMQX4ihmW2eLHRgwhChq2V2rEwEfqLUGmHirL3bfisFBDDBGzUen6SsYRudbVLzsgJPrEiD",
  "key31": "5JDuNjAJBjRak3vae9CXt9zoJ87QsMp5Ndc2wPc15tjoraSaPSaiitgDkmCC5z6NPbjg9jbJ2wf7djkErQHm2swM",
  "key32": "5SGSQMeSvVHjpfWAwGF2948PXpQM2nf3BsT8AvxsJRoSnFUxDNWxz4A4vnStyCYcAXRjh31XpijG9t7gkSFhDfG4",
  "key33": "372LVoDJ21dhe3hebueeiQhDqYWeJpAqAQ5VkLa7kHuNgrbkFGP5B7phAaHmrNQnbWvUxw8qcJw6i6dboza2omaT",
  "key34": "2Z6XG4aYvmiSSb8riHaCujd15y5yECKxihvfKTWzwGSjK3h9MwsSWtiuDjDVuUFfBiVeqyVqeH1Ga5pUNvseifh3",
  "key35": "4s9vcQDHv9NhFKYg7M625kxmPEk1w7djbuTMw3BN2kUJFuzdd8bc9aHzwe1UP2m1ZvsMLNW1rF8keNaq5UiFTTNW",
  "key36": "4Q3od9QEAwkK6iuj6m7bEqP3KnG4gCBT9jsW64jeV1LWp7SCeJRMwowA2cErjpPc4QoHjhi96zZuEUMrKkVHUZns",
  "key37": "4Fb8UxSSYSWvbH658AiXezbw4ZXBaCRZio71eufCDAhq8HNbyzhZgNnDjvosKptN9ijXUbnkkGNgdUAyqFtVrJhD",
  "key38": "4JKfL9FNKyxniCVrZXz7zgNAueB3LoJuK6ktmMznWL2SuisZwg66tKGMuMZ9foCyPCsShL7fMwMqMp6suSR21dGJ",
  "key39": "nCTw6LrCVByPBC7oNzAawX8seSzt9VV6bZvt8eu8tewF4SSUSBRTsHz8MTkYuwM26G3ASMSaPpW5MFjyx7aojD8",
  "key40": "2i6B4WGeCywXXrtpx5fMuqVQ2M6zuqLabRyCqGzqobUTEDMHsJZbWU5M8fQVQD8yRDZQJK9fZEDC17Zb24RvyNNG",
  "key41": "49HuUoHcBwSgjMCDbkQ8H6UWzCaA4ffe4L22Hcws2nqThLfpVjVYPWkQhPZVJV4vj8oiDLTCK5hRX6mac1J3bQ1y"
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
