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
    "N17nVJa6B7iNFkcCvo2wEfc7gcHw7icFAgit5qoDKu1Qr8NRdyaFnFeW8yEiJ7vk4fffUTSzNkGoP9ZQ3M3sqGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byXWsZ82d8WtHT9da9D5LdEkB8Q9PRaQ5fAujby791kGoVqE6bgxpDk2xEje44EckazQYEDh9UyEU3UuHkKojqM",
  "key1": "44hXDVgTCKuwLdwMG431bgmEHsfKVJfmijGsdEyzCfN6dJdwudViZsb7Y6KBToZX6LDSWoiUA4iSa4ckavM6FoJv",
  "key2": "58adT6ArPz7nuYdNKdsprGZsbPWLmMzub8VEYTT8V5roo39tuiGE9hCFXXsYK6wipJHFpLri6G4BxQdwL5y4z1vc",
  "key3": "3nDXvXxMFwDTYrfoqZJnhE6nN3v946pNs98yazUQ2qGbYVnwHVDFVj7La2Z7B8pkrhPrAbhDyQhXsqxjt2adJMxa",
  "key4": "2i5mRUqipu7oUcSrAs86L3KtCfcULgy1nD2ocYTFzLftRiwzEaJPmqjwMKZJnTEqdzLH2WEjMstornYVdvyDaMHG",
  "key5": "2y4ZPNSYhNk6D4cBgcLFM56EjoGsSZ2RxiLkZty8bMqXHEvj9FVwWk5YuvgQAwhHs3GKA658QuqXsCze2J2oUQQW",
  "key6": "23dipEVnxg2WcsdvXBdf8qnntk3piEZ6mHRmDKUh1ua9XEC7b6woEq9fzWb5Ez6hToZfCiqZsxKnG7aeSDdAnCJz",
  "key7": "qgcBx2wtV2Gaqx4rGn5axwPBDEfJ4NhkfUzxcbqXuVzk6pwSyyXSUTLB3dxpGszLsqkiNNWiYWCF6gRhhpJ63DS",
  "key8": "2gYSx5FDXm6kSpfqzGftMou1z6hck6kNUFx5G1qGavJY7FiKp5muMTJ7Q3K5vpzJRtLt99eZpCHfJRShAvTSgN79",
  "key9": "VwH2fC9XxXrYSoQnRXvQhYhrrfbh2z1qP5feYTKm7AxESTzBiLNJ9YaJmLBYSnCFHt6cErYLYwFH6fiWN2UnKxC",
  "key10": "4q2pN666nToqDgfF9LFqSvSkC7BwX7DP7YbabpmpCwv8SKUHvrzkdMhhDXJrTYAQJhanTP9QCuUCxDq6ksyGThL7",
  "key11": "5k2pkQWrBPMDuFPm8fQ3p9UEuvPVsGBQAst185UDxvS2Z2yHx88rfuaDoCXKkuJhLAaxX89WTp4HTNR77pQDMek9",
  "key12": "5xDLSDVNn5cjkehzKpHXfkdP8X7xssFJzzLT2KkuWyZ7mvCa7vSQ2zFoa4H4veiDtdnSWWwAeovKhbP2pbQavA43",
  "key13": "3EV3Ynqxq1kFhBEatodZGQmVegNCbvnAZXP9y9rQm99mjgv8pJKobrfsd2gR6tWRneHpxwmrKQri9uNfkKDfHjUF",
  "key14": "5J1V2HR5EJjeR7BVd3bwS82zi9yDjqoCcXN5GvEze5PcnNB5UjpqupvqE1vDpvVXuUApqLKxx2rTHSQ7N2Bj7DH1",
  "key15": "4f57Qba5LGszgfG2saAYDuPeLrNarxL4KjsuxWrkfqknkg5GmcGBvJZ44n8TqPFGDSozyhDj47zkdMUi2EpV34UA",
  "key16": "3V3RaXh5LLihLjpRyyFSE7r2y7UbGLaz8wViCbiTHQszGXqCbYCrFwMyc316P8hHGfBMoQo81tMdajvpXvRfUyWF",
  "key17": "q1VJGrn5jtMynfMbArsfyu6yhWQgxXZ7f7YfWaHDsYnQgzzvR9RPfPu64hGtsCGtMKg4uFYzgj19KG3VidvcCev",
  "key18": "2aFYb1HdMxREYRctR5UVVM4Ntrf5xcRThLpMEuTzS4nkfna8HWvi5hUobg8ddaagnAnJUKeDF83Vcm26jPNg2oP5",
  "key19": "5scdJzLVniF2mu9KNWEn5wCnyjmqLDUfaNZLcyRCN9hr7qVCihBJWgF7UUPmx1TFL2P2wh4kMgy7ba2jcRJqTtq3",
  "key20": "493cAbwzfS4GQcUvYQzTd5XyGL7ZZ53iGwh2ivhaf4ApvacL5i1p3gn8EvaiBz7R3kaeKWJdjHW68HZBxi4jhA8p",
  "key21": "66Q978zdPDydqNDSCzuQ4AJ783cpxuREHbsQwN8AggwqHQxG2LVeNUntRsHyMX8R1qXnhC4eRBkJkKUzPT9Ep8NY",
  "key22": "DkZ9C6WwGR7DCmPNFB5BxJgZsDh1nXk7StuVfwRA4vocvmrAmwJukBaifrxzAkEmS8HNiQyWncYGyBdRy9g14Z6",
  "key23": "4mphaaG4GD5gtMSn3QGwxvbveM7uL6BmFd2ZP2WyfamekxtdduAUytHaTNDyhEytB3bXawUtJpu36zugdm5TuRsG",
  "key24": "2NjMpQyxjUuCQiaF8p69npCs7vk1BKakufbQ3An4cK83Q4QCswwBgz7Qd64D3kSsiQym2v4ng7AMED6uykmFDcYK",
  "key25": "gFbmykMsXUkhpYVCV29BcMKsLr12wqhooUaXkQfEAuuYxJadyrEnUVVz2xjc79jHEaohrnybrRKt5WpouUumvSR",
  "key26": "2hGFPda6vNEa6ER73vSAAYka1iHaC4898835Pd6Vp84F6pZRaTUJXUv3MqihqSufZEw9fzYLq7meVdkFxe73enbB",
  "key27": "3YVXgG43eRfee2vgkvEAqocA6vLJjUYboFxkznnjoaCusiLQG6XUW7Qb83GVUneGpAewFaseJ3cJcfbWSpFVgHPw",
  "key28": "3cyEQnJQEBh1XyMkibxKzzmfN2i2eFp9H9mDffeL16DtNaeoGSn6aVAsFxVhePAvQJoGdCRksSGDEbTaheezhNhV",
  "key29": "3i4EBxskC2YfVFEn4AAqycyZhQjcDxVY81S2stVFe4ouUmHqSz23yRYJ3bWYdR3B7sCaNqUefgD6ZgCQAue4e1wM",
  "key30": "4uGGMivQbvzn5chWjXxUzKGoJgMQWJ1rUG8HBXDBUTE4YNatEMhXXn1WtMkxkRH7Y9BZhyHERXFBi61F5rjjQonk",
  "key31": "3mNrHpZfh4jUD47eoiGq3bYub5XvzJ5tNsecCfzmWGimnsxq6jrzUPZPmQT8haaCw1GfupcTYf5qwBC8R8v4tHSx",
  "key32": "2oAwk4kHncTM1mcvXYbWSxPZ5t4XGAGL8gfnwwDPz8XuUEkcuCxkXr15h8VUsA94oNVi8CqFQjYgKoFMDJWbjcr6",
  "key33": "36mQvarv9UFPcLEDSfvWFFwRx4SXEEhvTnzxFQqR5ZyzaHiXkxiKYFHRGZV8zeY4vdZoaANnuLvE4bAwqeiDMf4A",
  "key34": "39TCEJ1CBr1JkLQYpx4i9FjSXKsUThhy6pbkYczY5xXejJewaEaZUFKRYWrq14YNsoSHGRmK88zeCsX3PZJ8526k",
  "key35": "xpC9aYoxwmG1NcPiMsViPjhnYnJGepUiDdHfeM9QRpfLXW6uq8R89NwTBupyjRHdk5HAUJm5j6PCPSxZZEm83rr",
  "key36": "5VFe7KpwzUJ9PmCx7e9i9fkPz8yrqP8B31Uq1FkywcrC5yaU8MHFwf6BRmcbXddcAdzU2BRGxpixFccW29XhEFSY",
  "key37": "3n668zNHhkfgvSiFSoS7CTsTu4NYqveS5XcnuFEZXPTum3Ex7xwq61n8RESLcuz3p8RuNLhKKkZmoKMEnA2BdQKW",
  "key38": "2J5zQ1rTbXR12e2fNNJXJjceweEUX4pEP9avxHF4KQqsxRj5Wd2QdusUwwJWSvAAormumgCBdcZgWKzkc7JoxdwM",
  "key39": "5azCXaXgPupZrZ22pLTgpbm4bZLwD7PrNMNtejBWDuDnwBJLTwZ1u1FeRS8HRVDrCbnftn8pFN4JN7ukxojTZPyy",
  "key40": "5AXRhKiEAf7rjYBcXEs6nusbvqz57xgJuq2mw8EjpT5Cvmb18A4PWc6m8e1VL7nifdFkpMHkKmePzkgp7DFchFAn",
  "key41": "3wyN99FHw6QCSEDfKh4Wmagpth1FDBYZoNR6ty26dL3riK1oWCkViMoWdR6rvtuTdNcydMr1R3DvJLyNJRnoCKVT"
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
