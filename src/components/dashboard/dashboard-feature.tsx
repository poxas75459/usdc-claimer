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
    "2f3G3csG9hbz6amihGypF837dVTzfdacpMqAXsG64W5REVyztgQnMPkRc1WKwfgn8mutrbA5D2yetCjgf5H6bUyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRSnihVmDSJ9rfjFfdAT7uf6G4nnMtaekAUubmGBw7W6ZmrbTbpsXMjEEHfxEqqExv7s5JP7kWXDYVzXHFPJWyQ",
  "key1": "bQAitZv76usqCj2d5nwvKRcSgEynpYyo68uadn37kGZnECHbtuvJWCt6sEx6VeZ3Pt6AYqLAfYRBZGpXUcPyzb1",
  "key2": "3LHagX1D5LVk6zUv18wkpGJz5cn6tE46AABHB4VqHPMhZqDSSx7T94zRrBomrNDkeAj4k2XrZdDGaegecr6ri2Ex",
  "key3": "3fSZ6WCf66Wwbfx4GZVcRJYGHNTUMdpPJATQpynUqmybCgFRUX78Gw4NyD1EG3hrUJHQfY2YLHSY7hUJaU7CaPfL",
  "key4": "2DGcyMNWPvFL5FEprbDwVqV6pfB2rqPaKVBLjzVnTePGSe5y8cNikFnw2Rc7397C7aQKWESgcwwdHxC9VuW139jz",
  "key5": "5QAmfiMPXFSYS7rKUK4NnLHL8HH7EPv8tmNwTyNqkYgDrDqpfG5exh7aL8iM6DmoPhCwtBUT1zdA1oG3r6Sao73x",
  "key6": "31jguCPrXtVEzwLRpmvGj6p6CPaCfX8ncMKHFAKqQLosTG95GFN6xhjiGrSN1wvS5RLkrKnmKzj6sdzy4ePKkxeE",
  "key7": "3y6FqG5npNzWMb7ASAuQgBcR6hvkPzQckAzmPqJ5c6maWwzJkiAgzfL1dULrUGMxiAEpRciwFiAgTeXJQf7RWotw",
  "key8": "87Gd292ZS1tQ2q5BUJqBUZHMcdibun2ddWS5jvSuYJydtrHLhmtU5y8Tzd1wGXujmBwcbVcdaT8T6tDZ88SNRnG",
  "key9": "cFBSocBhoY3VZP92b7XRMhrRFKwdYPhpstf8WrvN2tm9hmfLTPkzpWgQM6hwnNBCNAJhSZf99H61eY28bwc2CZw",
  "key10": "2AiyxgrnUM6wWiW9uMSLZt78KHfxF8CmAqyN4hPXcDHUPc8xtc5LP96HMTT1BDRbPNDRVT1KEXqYmGu92K7faim8",
  "key11": "2KfKLPDRAksc29y8Jp2nuMGKqptW8EeLQ22bZ5gPSGaufTBt674LbzAv85svQN6Tjf62694DpTxVj96LzAWPWN4W",
  "key12": "pzbA9q6HanqUq9BTLuapby47ND5m43MTao4XTaGk7rsBAZfa5FfTas3ov6tgR8tTQD4TSB7YLnNJ9YLDt9XbuYV",
  "key13": "2XgZvY1WyXCLWT4QhnPc48CrDUko7aiKqGvwJoBoivE7zExZBNzazj8L7AmrCL45LPyDWaa4yuu5fHtkcvFqZGEH",
  "key14": "2om85QpYPSph54HC7i3tQ8w7UDvjep813VuGWWEqCBVNar13X5HQkEP9FY899zaNhxm7sGnsLDp2bcXRM1nGqNpq",
  "key15": "43ZqFAuo7SZbH6hcvEa3EcHHPaiSjqbUPS3qUpYA9myGyBTTZTc4hP1tNJhK1gP1md3NvA2GwA8NoD4mbRbLPZ35",
  "key16": "3uzMfJrQiknq9S9owHZUhQXbmDub7gNRf5deYbjANjhwibJ8AwCSvZ3TKyf8oYgULTCP6TobLgvkR8MBaDac7b4i",
  "key17": "5v1r2cdgKhJ7DwXKRuvftYNAbvMrjKMr3qpvbR89v5Q4U4fxZnV4KM2BCEJodLbf7A9cwU6nNaig8QsdwpzF94kF",
  "key18": "44QMbdP6QsoDLs5r1Kidg5oLRqmXkw9dsFH4BvuqFL8sptaXKGRH8xqkfioVx7UazEamCGaN3SQXXMr32A6Tf6tJ",
  "key19": "RAsdoHWFGxoajKLd4SgdmVHc2H7GaQQYsfcSTNXbV2VPowRy8ARej6DWXdQ35ZPuna1i6Y4Kmrju3uCeeeEvV6t",
  "key20": "2rNQCTzC37z9a4beyVio3Q6QeLsXQVYe7nvMDvp83HXspH8YmBHbUVzHmh2sMaNsTHh6CTnVrm8TU7vZwm9MwtNX",
  "key21": "6JpGVvQLngLk9n2Pbr5eWKiD7dcdx7SzxPNmNS1W89EY72nFp6s4mEFfSpkHy51wCXrJeigVj7BtvXZ43GbXLsa",
  "key22": "4fZsom5TVVHXtdPPXKktApiyDDwKgEwCWfd8ch6b5q4XCxbQkuLNn842Q2zhxCPigJaHQ43HDwZzeMHEUtYpE2Rw",
  "key23": "2SMBBAAQhrCaRj9xYVbKfgrDGEKKzXBjsWy2hXtwdLZEroC6uMZP1RXq7NL86RaavfHXX9xrYBEC3K3QGMZV9qQ2",
  "key24": "S2of9eykJiPzxCrFwqqRCk6BBrrvq8T4xHYGBUWV31emoDgpP8TZVWJFvWCiUEYqJAvhMJiYccsseKDDSumQZzH",
  "key25": "4HbVLEh5gEW7PPdsYKFZj1MaAxkJez9ss4QWJBwqEiucd9JHYDy2ZM8RM9thDcPhZSZneK7P9maXXFCeweoPRbrJ",
  "key26": "3PTDZKSuDZjERbxdY3LnRGXsEPvCP4uVTzmsZaqE3btCsXLScYHUzvF4Myx3AmLiUhSFDpNfb4MEryHNQjPrC8f5",
  "key27": "65VX6AMwkduJBK5BEXUArNGwKc9x95YkvBAf9Kn9cLs1LRD2Pddqcpo9ehBcirsdMHTuQ3M6hFDvPihEAztAd6vD",
  "key28": "3G5xDmrJ8tFJDWqSxZb6FixvSXS5wv2pEhT5yCZPVpRj5VAMMjyKWDgoySF9gkfHbKShJ3646NwdiBoHgDzjV7fP",
  "key29": "3kyZLkR9Xn3pxo3zWj3THmCSQdHUSSveMS9pFjA9QrjGsZ6AMiBnfeT5jJ3aQFr9LozHxG5mUB5sjD8jYPCq7FGe",
  "key30": "2ACmmSe1BnjjbLbui8qbbyS3p3GrJdEYnZ3kAL2zCjRduwV9qqDEViRgGqA41mpwvheML7VW8jc1P2Vjky7QXtFU",
  "key31": "3dvZfHFo3RrDbtVcjv7tSEiBisZgAGk59H63B8dvL7K48ky8Kqbh2JtKGJ1u9dC2CWHUspqarPzCfEHYARXTThAW",
  "key32": "5B1VMu9jViBzzdLf1ABkfHTUnd1ASGg6VirKDEa16J47zrKUnMm3WDfhfwmK1SKLCNJhnk96YN8jeArrDoof4shB",
  "key33": "2np7nDKJ67RibC4SEbGbrBEJ6ehFwqGbbBYrV2Dm3CmJE6fhdSCT97m1wLYQ11ZyVb9x7FmPjSd7j5v9Wxds2BWC",
  "key34": "3JxEpabSjR52DJDNBBh7gZs9zXWmH8JTzzKadBu1ocEjfDnWCYqUQeL8pXTHXCLAYzMoYjCvQV1vt4mgRRKSzKMm",
  "key35": "24YLKiDU5MsiAzajzfBNVdvUzMCp7MHEGui3UtxjD4x7oLrxBYXn3Qmfr8CMqrA1YoNvujkymAnJDpdEEidTngQK",
  "key36": "5H2CzLbiyCQxZiMKWM6ScAEm9EvLShQ7utxgs862LPg4gbfdKdzpqCxKtmaBFpRNEam55rQCGEf8DWpiNtsn7ptk",
  "key37": "2CzvJK2X1rsduamqo3iNoTrtTuGVJT15j7DSyq1XHWTiPKyHj9yNd6Rdpkx3cGof1tUEiK4YSeELKB19jYStetsr",
  "key38": "39t3rMoyjNAAk3RpXfDwBcKgun5EcDYgY7JoUJiLffWBJMtbHqFs1XGsQ5UyD3K3Xi7L4iEuwJnZebmQQ6pHnYxj",
  "key39": "5EW5vDAvdZMxud96zSeRYoGKngAVKiCvbX6rspMa3MuB1cFJgAAQXJYrrUhxVFMT3FFcCK32EmweEUZpr7WcoRyD",
  "key40": "46KWiuLGSToSSsxZHvYbDUaAvPH9SRRqYg3gzBPiaKh8GquePsqXe3LnTGwMGLsKF7m9euYUQVPpnaoWSxpFU1Rk",
  "key41": "A7mD81shdicWtPAafpN5F9T1UxPvwaDJACT81GZnSeC7NacUpPKsZAvQVyoYY31jUKoGaza2GN7A3zSzVF5j6Kh",
  "key42": "2QVDVxtMWcrxiUA7FqinDVPcjp7ugmACXbeQd8yxdZxGm2aZuFkg5oihmriF8ngiR3ppHuRYhwNdD4Fre5vgJZTQ",
  "key43": "4NMg3btFHxoPhm4WafHN5dRdYSKF9pM7va3L9FP8Lvc45V2BwyN1RpCPKgKM6jzxwTBC8WbXCfwiDtZxihk2q3Ds",
  "key44": "WFe6krHnWhEW8fYPW5ketsVyvu21MAGspuVLsm9PfiZpybRrzNKh4T49E6zJ9z1q3mNojbFm4E4y9GNviw8oDGQ",
  "key45": "56KLQKRXe6AjWyYBuk3yAgQQj7aXDr7vyuZF85TJmnZxkmcjwhssd2PgwGuWxpJDbvvSuNFQhCWZevU9jw6Jarkw",
  "key46": "wxEdc2popZ1BmD47UVVbHQPDRC84xPVLKuNRgGsWrjzyzJB2Hr2v5YDLyWURKm6vBAWYe66EgSxYbe6ogiDfZ17",
  "key47": "Ve6w9pNST5ro35kDCJDd3YZvXnpW9n1769ZQmWoN28pWdqiBmtuyxoBmv3yKBjzRtqqbLyk6cpHb8c21VnnPiNC",
  "key48": "5q5tdCt5XUkmz5Af9N86RN1HWeE49E96tK9RYvgkVGSZA8Q7zYPRhF8qA3fWhsUsQXcp6JwRUYYuFn6hYh3LsWFL"
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
