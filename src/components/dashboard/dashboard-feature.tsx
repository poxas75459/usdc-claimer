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
    "4N1VmPcwL7ikuYafmMzcoddePkk6RcVs4uJheFUKsD6c6He2yHATP5jkENumtStpXWqTbE8gt3BWSagdRtPppJff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MymgdqJvs5X5BB2P6hEbNbyCaQpZr2DDyGH1y4ZtPaMi56HbBZ78pbiaQfpQP3rFoRHnBkjYRd1ULFmCUiHgtAa",
  "key1": "5y6CiZzsQ5tpE9TxKjHbHmkFCHP1nR6KazoPUmtrAwhNb4iHknbwMpAQ7FrcMtn34gZVDXs7pUukBUQYatoxdnDX",
  "key2": "4DwZZnbqKVkvUqMxRZ5fU3qgRMMFSLgJ9u1T9T3tXCnLcCaU3GVshr59Lu7LAJPCK8Cf9qpXXeSESPHwAPwboyCM",
  "key3": "47PgZPoZGpoviWwdR6GZhVquj2PXBLeCTzUZYTDN56aor4RAJgzs7MdYvbutRipebsNRvHjr8qV3n6fUanb8Hnyc",
  "key4": "4wBP76ChVqom13HNC7HqMNkfJz3zVvpsFjjX6EajYEQEm5rRP5CXccxjjqwtCtJctJFCH2PWePQXyZ1AuuNm1AAF",
  "key5": "2yamSLXN6s6VJYhyJQ5gF8VF4jjqi8QyvcTeGsHmpjFcjEBsgL7Y81izxhqNVpfDcKTw4NM4P1YmmxtvvU792eez",
  "key6": "BWxZ9no6AjBBvqtF4cW6mZSxkJbCNJabbZeC7fqKZ42k5EsCMeGBiRmheauqpBKAqyRX6tCGqc56RRq2BJXFq1E",
  "key7": "4z7ZR3UyDZU5UdhXb5YfP4XiUt4C2H8U34QdxjLAiyaBJ4rTCMREc4NdvyV9PgofaAAcZ7WTU7SpBiwd1WzgCYMP",
  "key8": "2yEid9sDogWDLvvxCPKREs3UAr4bMiVJHopZBvBcTSXaVG7JvmepkstD2WX6Dobg2EinxZm73askoYgSgkGzojLa",
  "key9": "2ew5HkNameGAqEzD73FwUqVyLeKtDnYPTnr1DgVTdEgVSSCRPb8r7A69KEApt8ujG7Ck3CyKRyrEttqrqyogrkEw",
  "key10": "2t7JVtsw6N2EE543hT5ttNitzHYFkb4qb5TH3cCmWgi1sWMnjRdAQXj3SK3auTar8dhw5EsXDhLE2T9tDGHBnq7H",
  "key11": "33YTU3GNjwUQtQ96viECHVQ9jzBVZ9u8rphACQMUBeEbTf7CRhcxSKpqxe7sXC1vbNEMcmb8MNfztW2GEuEGQVXy",
  "key12": "2YwGam7En3kecQjQ7jXRVLg1ozbgYLtAR7DetiMxRfteLxBY6TKt1ESm6jib4yuURphgCDGfiLtf27kqmUhE5NrE",
  "key13": "49Ji2GX1EcqSY3qorYtUCZuNf8c3UsWRTY7fMnVRPoedHbZU9PFyts7aZHkPqaJYTsAnT3hrCrMiU1iR4mUteSc7",
  "key14": "WdHLR2JS5byKwQJpP82x5QbP2RVJx3xZEnFFqrx5THQ3yq2ZTwoth9VHgSGMwKamxNSzoEfvMVKyzPfjqAWUUsj",
  "key15": "51UHgS2qdnUpYwkenhLAxFrm8EtMFScbborXpqpJoZNVykdP2ZPGfKLiBP5pjGHCHUjyZtnCAAi4RRSkrdpTVWJY",
  "key16": "5isZXfhDpFwpgStZwCkhnBTYHd6eu69EGRGyMyRjy1hsfNSArS1hkoAkkubpFJ5hBvXMzCutmqJatba7VwHY4KJt",
  "key17": "3m5RgXQyQnzYRkUDvQuMdCfNWKysYwj7G6wyPXnJ8JuTpxxBkqqtWofUwYx76Z6cY4G2UEND6zBMNtC8AYzX7NbQ",
  "key18": "5ccumadAZWAHwLofJcLjFPWTcHSueTrUAVaLUYNFK3s3z4fbKqgjqagFsMi2RhDUVgz89QprFEfBGBvGLfbFth5u",
  "key19": "4HGEdtn2BYeXnWX7qFeHzXuQWZXdB8CoinzfzAKD11gk9bi8FtKdhsnFnSgZAsSUQTs3aPBmvWfXdoZeFK499p95",
  "key20": "22qrbsbnnYFLUtwKCy8DMaA3FmMXDSdKabYtTCjv88Pz61G6G4cpe5WqxNDBr25nzbhU91C7Vq2W4ySznn6DyrVz",
  "key21": "53XXDK44UR4qfqcxwckPiEScshDjkFCCd1VFb2hsVJzKeRygAfrzf8oVpfTNj6ygFeM9gquxWrxmsam7c11vb8md",
  "key22": "3yUnMk3BerZYMJEVUwqzyCRVoDczw6vEW9JXwh5XMHwivim11cCJ9GgF74x4n8iQhrvGnH2QzdNLQn7DtHd6DZ5w",
  "key23": "4MAD4BkMsSRJrqskggEjsEa9k81AzKJwnSYRcxFq4hoGCARPaVNjVuFiCS6pYyiXzbTW5FgVe8gPxGmWHy89USrK",
  "key24": "tAN3ve3NmCnBDFMpnKdKNV9dKaj359Gtku7X5LEWZRXYmRiZrXHMQ1guit3BcwRd7Yh5ouqPRAJV2fnbUzxaYgK",
  "key25": "WSTmRmd2A2LQrN6HkMybjzWNfZuGAtd9yGXNUde1Nk89FMRH95HhBUBWNy4qUsf5wbPq1Zeu6ZrcRjherw41GXM",
  "key26": "32eLcjE9nchWtf1CBnWVMy3pFSEWQwcKCGDS64s8HPEeeSxZEXv5ShzRKw1fWheSVW6DK2K3VrvudzLofYdbdNK6",
  "key27": "5QX236Mj1PkxE39wB1tCuxu8Z3c9iuSyDPcPmo2pAXaRSiYms6guYx1iPd17wzcnSnTmjY3FniTxsvUzxip88Wdq",
  "key28": "5MCTUskk81Uxb1iWiDnabqFdpoCkaAnKV8SQ1dn4yBaRJTcYNRHJuq6Xtgd7KUZJ4rTNaH5v9EuKUCp4iKbpF3qi",
  "key29": "1QhRS7HgyWH5MDu7x4Sn7JVfneHX9fxVYShuBfCzreAkUMep8NSeKrj9jtboVX2pgjxtS2WqD1Z6BeNRnRUrFkY",
  "key30": "3Dr3zEtWAejSwXM6vJQm8XnESNAyLcB9YWc9L3ifkCHosRgMzuVYumsuAJLKji5MTeiQRZHVHjTeyA37md4KBR3d",
  "key31": "5Geyrms2Tx4NwpRA5ypZE8dMYsrBfFiWrMx7TMAMzqTGGNqgZBPEKF7fecnExnWES2uu1xHfqqARceHoHzsF6yNw",
  "key32": "Xdene14w22Vvz6T8tfxJ4VCAZ8oqvwZkSbvQeuLXqUB9sj1e9BKmSHXxJndR5Y8LXQi2zozaDdB8RT5mCKmkPgG",
  "key33": "57LsQVMh7ZwHnGBmdLoaBPWs9gmPzwPJo5JRK2ZB9hwZKvMe73MtoguRMTWjwsdEAnZNUwP64j6vXVdByspaLLe1",
  "key34": "ECisz4cB3dZFp5QZWHBmBzYGdVNAfMBbgvvPcjA98KK3HhMF6d2oTnaJvuQRAfzi19o2RB1inVjXTikaC3wc3aE",
  "key35": "5HghgwXrzk2fhR43S1gVrdgC8NDpJPH8m9Dtmpv3KFDtpajCJR8wdiFAbS1jMN5yadgV9vXfniJ3w7iUdLj9ZE6u",
  "key36": "39qJ9Q6K7ekMAxT8h7Q9zpYudo32YtrCrXseu7bntrKBLf1fZ5F2nbJP3rXS38DNnXQKHqbeEhoYKQh8GQmodp8v",
  "key37": "2AcY7eerqQtTzo8GMzDZUeoNaUg27e9rGVCzAA6ck24NFj2dfusq2T9r2o5S6CycP4B1TnTaDwqTs4m5bHq89L6A",
  "key38": "dWynXAbPb3biXbZfa6ezg2AWks3LJpPrbMqwYHRDfaXRe5qyU65qQtyUrJvT3hwmNoSxwgPoQrN7ZSrAsbhUHeq",
  "key39": "41jDnonDoe4XSDwjxK2DoVZ5ZMXBDnJs1DadeFJ97wT9aguhKr3a85WfNaybw3dMTRsP6CPXoUi6wXaHenveUgjm",
  "key40": "4DZ6KqgmBADnLEJqbxLKYA98R4fryG6wdztM9xzp31r71o7MCDqethenSjgt2SR3WNmRNakNTDy7iitSA4ifrvf",
  "key41": "5rdD8z6scGhvteeHMS2NDzNxSbn33SAxueVHA81RAhaDhkXF9Ho6hkQGQfW9VWkZVKYE2wSvqeUJ2n5SdVutRHUS",
  "key42": "3ie3iQ79qGYWx2f9GUyMDtutgancvK2P4vXpQeueAaJNsyNxttexKdRFUmJZgW149AraVcNMXy3dkymUYt7A8ho1",
  "key43": "2rP6TQvAtNotVoqRGzrEdowExK1dDam8puifVcvdX8xwynqMkDFR94cDSnoczHKktsLZQpUuKAinZvrjAZXpGnU4",
  "key44": "3JH5ExDnfyBUU3HUN56xNtSrKgGtfcGdGYmTub3hbx3nYUnozLZxLAHBRHCCzMip5YpQz1gWvnDXnfyYWiSpsPnK",
  "key45": "3tb3QA2qRUQQ5eMa14h2H6vAqHgXr6ge5TU6HU6QGXsMfFTwEELkWn5ndWekzmgU1Mz4tyvFhGuTitmqBdmxXadr",
  "key46": "3fCffLwP6z1ycJaDkTYwNunkjB4FzQFy1yrwUAWUND5XsTrm5ZyBneFUccjDruF5pxr4s6vTq3itCZDTUvzUgRi1",
  "key47": "AAZbfbi6Qp4v3eaomFv8PsdQWMudRNi92VyJoE8esD6ffqvw7MVqKBezJKyapwkvHDpiEze6pdKtR5z9CJHNL1C",
  "key48": "XXUb9c4Qxm5V5s52B1cLtBdof4PMqUovd21kBPN4uTpsNKpUDwcrGWAgkqdbiLfp47QYzCVG7sLZZZHsHXVthHL"
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
