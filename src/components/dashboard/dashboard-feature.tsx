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
    "eu1zNsu9xZMJNysLr45jfBHF3pYbfC4zY4afkwgLUxZJ11LjjQ6FqAXVrWRwUJ3jtfNBQzLXL2nkUMswMDZzFoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpTJ3HR15nLdSyPJptQQTmEVAdsUp75LZWywqaPj71PYxUFoBiApjaectjH9FiMAqWmiiqzCWuzLLQWT7wgUNgB",
  "key1": "2bszSfKpB5sdzYEGaaCMoHvtzc3PLPoQwKNjnCZ8n8N2cAcR2ZZt1tZQ9erepKygq8fTR75mMfZgHJXUrMvpqtdm",
  "key2": "5oxjUpta7tEwhWnkaF5jAM7zTVh3rQQGs8ZbnvQyajouHF5PXGxoJCqboYrhxUd3WNHwHqVArydiTQq9bn4ATR1U",
  "key3": "2BhhD947wJKBr6b5g2vBsNAZcYW9bmYLkP7XQHwpXuGT9HnUnow5Qb4gxNPT5jGkqyUaUzaNXmHBq39Wam33QXmc",
  "key4": "2mhzjuFhgHfEKWGu758XFR6fRXV89GbfaMWzoJHqqEv64Cd3ybchosextf3iDGM61j3Ncub4yAeCooyGgtrSoBJf",
  "key5": "55d84aaThdEELFsoxhfapMuVKu92UQTqnaD9j65PEmPzrFdYz28YaDtxhKesMdDNtNHBEJz2eyCE8ZDN5srvMc75",
  "key6": "61j1B7s5z4XwyHAwHSDMY3HjC8ew39GcKdC7VMpHD6NWXqKQv999nC32GNabi2dfVpHukoPwH1Kn5rdF8qHnffk1",
  "key7": "3cGEP1BFJLYEfzbR1ewDHWitpbDDeGoPVmyCtLesjF7La16PBXDactWzqQDxrekGEvUFCLDCSWiAiAmJ4bgkiqom",
  "key8": "22ae3zv9yUvL4EdQb8LJuUier5aXqgey1HABNaWxJGRbYJFkMsca52VAoopTRjMhNxcMomgG4JuC5LdZLQLgQzxZ",
  "key9": "trauWZ95dJ99M4FEnsZ96CQBBy6xt9ZskYZ8k5NbBzhNFHq8r91PdufLd8GW1MQRUEL32KuLZBeVHTNfejpcNVn",
  "key10": "2wRccRK8akEL7Z1q8QvX3hZtn991aHfpyuZnFybK8pyfzrhFn4U7UHbkCE7VGRdpCkHWN3mHYL74rwwGhhYGuTu4",
  "key11": "2Zsq8FK13W3EiCaz5J7Na9R4mTPyqH62BUPhJKhYsrVJoZZdXbinqBuoZwRNRXHk5NFYBgvVyR6WGybquz9BgUug",
  "key12": "3KfLUvfSDNZYRnuZGbisXYs82G9W1UTPLjSa9EJgH7kDUKiGiFH9xhzAA7c1tbkcQFEdRFTH8TPbfVTC7wGYK1BM",
  "key13": "5xWGc8bssjcrqSdhkFMj7tBZuPoEeTHFQ5QjofsS2oMPJRveLSLQ4GMfGCHjnisHe8iccPNJoCYLWzcLtSSm33ZV",
  "key14": "3pMmQVbwxMP1pzVjDGEtUM7ayJGgv31KFD9EPn8ELRowHL97HN8SmKjMh9dzPfSxYp6YGNRgHaCkxeUaruYHrqb7",
  "key15": "3LnZV81kDT6VYWyCFTTr1qERjziyUATQXs7FEj8szBS3zcSnMvKXBeVRCkugPjfL7BBAyktB52cYNxfmfr6Z11AN",
  "key16": "2x8voEtKU2EVYSQ29MVqTPgxogjwWTtprb7bA3M55c7YzQ1kL2q5hNg7YzD4BJhuj5TQURQQzLUv5qexMibu6XRn",
  "key17": "59CDswVYiSq1ktHGghZh5ixZJbUSqbKGuYGdaU7CMDETEXk3NXXRCQFkve7ra6JDWb7DJDygZXhV4Sgz47MMdFvj",
  "key18": "3YPZFeyFS4yKnpbZgpH8UTzavUmWxVbahbSUnx98EVtHA7oXrT6fT2eyZK4e4LZiKC2TyPSxgdmvEExitt72jxmn",
  "key19": "bY8P6PwzKa7KVy6ss2aC5R1e3kQi9G3q4swTVXc5V8e1Y6Vc25EwmfCKh24mKBerb9k6rtQ8PHFxCwY4k9PTjnb",
  "key20": "5yT51R3k1FB7Gp7iBVNYN8Dt5CfV8HGJAZLD3q5oJozY9yNEBwLDnoeAWfkTgV6vKp2Aha7uTDj1BAkGdo3Qa4d8",
  "key21": "5QayCXRpEUF3acyKy1RxXjBHki92M3YUoP4ZMACKCPKZWFN8GpkcZTo8jDXcXWjkDb8Vry1xgbJeDRhSiGftexHb",
  "key22": "2Gv7TJxLeXDWTkRxJKKp1zhpyoJxLEQfN4xwf9eTUK2mi2ois9PgMAs3Qzc2rKuHsQnp9uTMmBL1CK3aUQcetVSG",
  "key23": "2fnwVuDbCorihpQkv27BDnxWycaFfnPmDHxShP1hbSsUHM1viGvPzk2nh2c7psagZH8sjHSHJ6wysFy2Uoy426Ps",
  "key24": "3oXuMtCyjxmFNrda7TkkWhYc7o8wgS6ksLfmCj63yz5Qy2Yk2KecXDTiRDV28e8dReKf5hzNDGLhrggctt82RqAm",
  "key25": "5zMt1RzB6S3BPRSdmbAt6Q3k4NtgWrvpyiM6oh4jeAKzPiZUm1M8eYeBcwZewsKjZ2Zh6dPo33shGiAnAP6WipST",
  "key26": "5bX1KUgdxiTUwNiz31EMJ4n7uFwgXKXwJvQccsukk2A7smxebsjXb5jVjBLsFGQ8cHRYo4ozbDe2njeLsfaqLkHk",
  "key27": "3RGDacHhDv9z4MgPZqCH6hsk2y3upbtRLsVvW3wEtPK4LwEv3AuVpsNPGzLWSKn7MbaKiUQC7MFBJnmjufQgjjpb",
  "key28": "bayhVGYkTcFvhcAxbm5EcPB3XDVZ8VGD5GL32U3PZ3Rh3DhWqSrgJPZvbSf7q8cUuUxeUj7NsMmppP6oZ6CLms6",
  "key29": "4t7bB6VB14g9SaoovExy9pX7pirXfASQKXg8aesTj5U74z3HGC9KXxEd5Qw2MmidKnTURvyzwkT6HouSDLaVwbcd",
  "key30": "2QNJ4hGceXj2aRmnjNLnHgSjfSF8HJGJ7BsRFZjSgEcKHaL9iQRRQHvMR5GLLjs2bEiZDFrRDKR5jKesgDydfJgb",
  "key31": "4tKMsHfUwPZWzsnWaANiLSxoP4o1P2h6WWHSsk4KZNsYvAQnSXLyad7bygy8CM7YCzextmMcBsXotf7fiKXiQ1VB",
  "key32": "4oLSF58tBJGG7wsRDYkyvUqAnih4jrSf94KpeVkouftgogQFBduQQNP3GrYWHe1njPZcjiqu5MErzbNgcuNvZXMB",
  "key33": "G1kSycCPeDgdGnNV2QeMTTtY8vzfT21C5zd3hdKs9cWufTTHGSFs12n1x6PSqnXPrKz2rC2PaNxZo3dzc9AYwes",
  "key34": "53KeCYVHpbAZSHbDy6HN7MAmptnUkh18qTGTpvn8XLsu5XtF4pu2k45UG31TD1bhZ8FRcz4drWRQvnzPSksn4xek"
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
