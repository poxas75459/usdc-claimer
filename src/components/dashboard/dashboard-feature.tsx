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
    "35sT1J5irpaeaHrpuNurY937QqAcGcTZUMcH5vr34ePhgtMeDqcUBwTGhjKwDoZ5uZcZxFhM7XP9kvNvEBEvk4WU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHWxJyGPLwdvacq8ZCtw1LVpqjkNq4evm8Dw2fNLSdzAqFjPuXaoy3HCBvFqXKYgoAykFwGtu4CQC4rZE2cAfwj",
  "key1": "4kwKeBKKvfJCavXXieCGm7qXgq2WSASirn36287BxaZpKb5oQ33rYyc92KM6qT8uuTNaBCd42pEi2v3sNtX6cqk5",
  "key2": "y37kimci9e8im9z87LaJbYAUNmiLDd5cNbhS5wjaWbzH8Ap5TZ9EzvRok13hN1A3DjH7HDw5x68hMEsPXcGPVUj",
  "key3": "4xFixj6iN87ky6dBHjEconhJYJJUVSGJP8fDdBgA96ppzXoRuKqatoTJpqgbGbEPyuBd8s1JbmVUXiy5fk8jabAs",
  "key4": "3zpGcVYn4uiqiMwGJcwe8zQoQYyrz8VTw7Eoij8ky4WN284bpB9KGF6arRwxcMkX1maxSeM8pUFAmnNaK6CiqmWW",
  "key5": "32YZNjWLJkdobuiCjbFM6o7E8WWXFzf47LuYo5HfX5Q2QwQqLrY6RgqiJzmYMK8NNietHL6w4svDHcN5iVG74EWv",
  "key6": "nqYwQfKhnp3wx1ePuV8UU7wginKTrHpJUP2rgdbVJEEJbHGATKxN3VvPSZo3ECKGpybW6zrxrEkRtZjYXKzZqEi",
  "key7": "QvCdreZs3aK6QbCojFvW7Q2fBg8Uk4VvrM5Gz3cArPiN78SKvasCgvH6pVmSeF6wMLd773tVC2Wpbv5GiKCmZyY",
  "key8": "5XhaxKJuoSEgveQcqTCferUfxWU8hubVuCsLXC5VqQVhMBCvex5M1HAfWZrpZP2tECqQRtvrFoLsqpBDAzFp2gsu",
  "key9": "kj5wyrb8XsvqqzN5Q639m5AGNZXCDRGcpUB4D7jqSkeWoeTgAsKgmHDeYkEvZ8bQSLjUkJwyJAN87hPusHiw78q",
  "key10": "495fAnYZ8nVvHcsTsoMvTfp2eBYQr84Mqg1ndTEts8BTnyfBp36WVnTE387hxAWJtaynTGVyRpmz5GtrXaiYk9XU",
  "key11": "5ApbHFtmxgzhBXBQ29iuKY1DuCM2qGnVGUL8KYLxBmXP9vKBsHu11CFE4t2CqfsMa3uvn8kdogPBjcMWgZuJMnwD",
  "key12": "7Wa2wtETJHrH1VombzrzqFq8CqaySXGFEdWoTAWLeH7FutTbvmpmwKsfgsrpuAzZZr9i7vvVj2WkHNYUEijQvB3",
  "key13": "4zBwTb3pF8t2adpxuxNkayhU23FwzHcvv4hs7QQac4rb3XFZtqzKuBf5Vfvooo41Z1Tap4tzFQFTT1EukyWThDQR",
  "key14": "2gjRR4dggJYAunnpwciwP8PcMPM1Qt4rWgRvuaQVEXDFc5x5SZQnqeK8hCppzL7VbC32BtbWeQWKXEc8Z84czZx4",
  "key15": "5XZMFgkr1yU9deScFT4AwdgJyWWQoXNB6cwz1SPAQsyo6zvDMhaQp2a3uBasAwsdQns6ErvFAHpARhZUfy8mTiqg",
  "key16": "5sE1QNG7FQH1Thzvkm1mHGtKBdZk6MY8QwhL89mCwC7e22b42BrvVuTT5mktq8Ci3fq5SBgTbNpFKyRYZxjwa79S",
  "key17": "5Wpw3nxvtryAofZxhNYgsHVSEDXW3wWsaTJaW4mLWEWRL392iZ5yWYaCSAj4xispRAbUWqj2DykYV7dCbaDm9DEz",
  "key18": "2E5Dt7HZwcpLoxpwFH7AaNBowzrbJoLALjXoBf4APteKrWfFrdKEdgCW3iYun4fW2joqVo1HGwL52wp5dhsqMFrr",
  "key19": "4wBSBDbC8ATidxjr78dKJYsZbxkWNePX1LmbDmWeNYGBEcsr46AbVHhUud89mZg97k32HS99NWNHUET38P6PkCZp",
  "key20": "3mmw6Pdeb2s6g7jEWZxjmARjjscw9FbFhUsfYbCFtLhyzxH18Uygud8v5ZUNADfiv7YMH8yVqroqfQRMNUhu8mGB",
  "key21": "5qXfqh3e8nyqmVHiEb73irBozu9gR8oXZ6SUPfsBhUCp2aTuzR3m7Dzvi9THrgcH8qgQmnqiJ1UWTfx47y8rJwoN",
  "key22": "3YGuXSukShMuW2yJCasgirbPjpf9j3Z6H8meRB4oxeZVrHpxk96SXzJn1SBUWuyiM4XnGXAKKkXuatuLEmRVnMEf",
  "key23": "5RWoweQTVrfArZSjnjpnnsxMyjakrLHJUXVpYa1zNJCAixYSztKpUTifmt3t4raSdJX49qTXTsk3SMszNC1mwzRU",
  "key24": "5eveTeLXRYyEL57oedUkPtxCY3nrcQM7ww7RXYBxVbmBV4kDeQGdBU1eP2LLtQ4LK636FPsc4JuQYzRePK9PaJPw",
  "key25": "4z4t1EqpPHdvEaWTd5qvY6nuciURZx23V3xUGfwgSQm34rZHwXqiXfnvCHoraoWkgJtGsLeiqhbsgQgfzzDzojCu",
  "key26": "4Tn6sxaD1kk6MztCAVHZZ5kL8wBQwR2jHC4ZmoHT5TuHZBamwLjRbm6611ypuRRLbTjAj81NpWxm6Hv6h3HPaGUS",
  "key27": "47QK95bQWMR8EFeFyqvxZWQ4Xu4wD2YgTR5QamoshZTfcDvYEyRaEZ5PdiPd32moXCaqLjYP5A6FSPLMEBMYWu88",
  "key28": "2bshBEPGuR1WqiJx6maZ4cuDBmxnKS8HgTM82wn9AsGxAbnEgzyRmTKaG52E64M16tdgrHxfhHqmetShNiLqdwBo",
  "key29": "3T85CTABfkp6sJU4mG7xjoY7dxXxsdSkxapceNWonhCETQm87XKajLfxor92bPyqPLZXwWeRJk4FYn5BJWpuFmmk",
  "key30": "521pCtA79aLYWosuQjD3KgAWcjDuELs3UmjgH9JtDDFor8aazPjcL4niuKRNo4rotDEqKKFZSrmaVEz72xyRuYes",
  "key31": "2CUGiL9JLxTtGhTY7CbZvstkFfTeGh62aXsLbay5syTLDqCGES25eU6bHbrMMLTYSRJWkCgJp5SwTf1DTEKGi3ue",
  "key32": "4p4iAbPdVD5BycwRt9whNLRgLjH5TBHQfPK8MjwuSjTAfa63f61UvJwepBk9vfxDWANaV5uWJDLxa46fZL5xU6WQ",
  "key33": "bkaiWpzFy6vsSUyc8apX7K7qYBS1cHkWTwknqTaH4hSDCL7nFw1yHbd9xQhTqzhRJLg98ABnnDheHeLuBPaGVmR",
  "key34": "32EzV4FBEK1wrhKw32Mt36K1DLXnbb6Z5dXbxivHL6U6YAwZwrWuaYSGMydfABhb8Ud4GNj3CUULhU9bj6HGbkRn",
  "key35": "2XYd4rf2ATajA4znTeTZpwdNrom8hhwUZrSPHw8vTS2ZwJ9QbpdvpXwNW9S4PQgJAU4rs9qY1FKbTpDpVZpyJdL1",
  "key36": "3JNEB1nuaK9JT6TJCDmdLtZmdvGNoKQgPq3kgyuCBcnnqtKWfRZ31tPeAmd69fNYn4b8ijbkWeNwM7SarqqyiXoo",
  "key37": "58nTX418etDd2a1wTVAv4oyH59c3GfuuzNuKLEipgCBwCymjVQZEcYqFUbN49J1GWfXdPnxcj5yAYZNJbxETk1j",
  "key38": "5QGfvim15mqaKQXTUiCYqNbwUcT8qSm8RvxuLczAooavwS8kKJdQ5oafWJQKhVx497i6ztwyFV4CkD7wp8jo1Dkd",
  "key39": "ndLdAHsoP6NZoFpxz2uYtDRr4tarVUpiiNqdVAcpsiQn186tz1R4joJVjRMGNpwD3eePBahqYhwNVsVqoSHBJiR",
  "key40": "2xKLrJSTtybL8FuR1MwQiGxyijCiv6wipZVMgzdx4UPkm9irsgQkCgv5vatnDr9p4DBuYQUDzKJunanUWeXGb6Pv"
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
