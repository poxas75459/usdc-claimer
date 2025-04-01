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
    "22GzssdC9diKRLJ9tbqVwb1enrRfTKFSAYkaKc5igWHCqLDHYheyZ8dG7Zs2fnRshFhwKJjYFn5nnuwmd7JXLVgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UsKE1QRT6rsg38Psmvmu6ekfCMbSF22eNv29XQ1ov8piy4Kioaye2RYovQPmSxDJ9fUKz4wA2BzHDzfoCuomenP",
  "key1": "4pVcHFMC3hsMHFLTZEeMLdtExVun7wqAiddUHgd8uA419DKhk4sZwTXBuRZB8SJ2QDZZhouAh2eJeiFkhDnPD1PH",
  "key2": "3VsHwtWFVbSFz6iuiSHSPPapjvVr49UyEM7jmta9CoNNay84G1xp5c3FmCdczLJ5j99MGsqP1tgucW56NeKWkvvN",
  "key3": "knDdHwd9hnoHeSa64ta3B8hCQvP31LG2tuyZciRU1jrCoxTZFPk7B27YqjvceCFjjxVsEwnSMwUJ5tWJQogyhTf",
  "key4": "uZTQrnDjd699Y9nTQfEPR7rLbDwgcRbVsRcEKg1KUjFbgYbCLxz1b4HeAVhz5ty7VtWsq4VSincuyvhae7uoxSP",
  "key5": "46FUfatPUiUphTFUvabrVcLKxEKLTLvuN6YHxK3Wnxp9EFHbFXZy6DCKhx5JR8jBU3y3mMgZ13DhZfocJFbhL3tB",
  "key6": "5ApymY4fybgD9cc8egpF8SnUAynRLuN8pY56qpfvJCc2H6aop7kA72ExQB49Y7i5Em8hhi76C6GUTMcDhWFCbQ7H",
  "key7": "3zYaFYDxe8VKVdz3WtC3W7hSdJPiLtWX77Ruj15Q9UHMsaUrzp2B8VBCTBZm5XCmFZzXVMXrn5PDhRy2vJvV2U9T",
  "key8": "5WekrNvRqY8FVVUruxhr3AFfbBFRqjjmopw5HHcM9NbWkNXAbByNY5pZpwmUW4FdcXeP6NHx8knXpyqe68DZA7Vp",
  "key9": "5Zza8E5oAX9ZSJrUgrUTkcjm3vyPjTkXT9VZ5GwJMQySzHioNETZPuU6BeNhxxb7RxvXvyrDBLCh1m2XsaVEavWb",
  "key10": "4vbBAzPK41oF59FheUtRjjgmsE3GsF9YZaPwxswY7ABtgXiYFMSez456PkAGnsPp15YQDox13jeq9UhRrKDmcjEr",
  "key11": "4KvXnRN5MdzKQpYP612S6nhkSrhV4XBuQDsx5z5zzgsM9pz4E1vfGSkMzFe5RCybdetEuct26BHnKLdoaMiapB79",
  "key12": "4DLVEEsd9y86fNwqeEFy7AY4iGR5zfUbvtNtwVKvydGvSY23XhZdYDZc3yGJw7s1evqzP52DjzgkwuZmHQYp33N7",
  "key13": "5nkUBiduXNiyDp6jDy3BPkLGbnQEgyr8Q3Xrm6AdumU4dumFnXkcigBQfzyRCKJ3W2YWuopq1VKocobpyy1ughGB",
  "key14": "3bMYoJY3K97mP5UB6cBQWiwy4GRx4D3F1zRPKoY4YF3TFjJ8RXP6xR7umx55cXuugGBiPDbdXebWozgpJfSE5VRB",
  "key15": "56U6bu1vuvzVCm8sbXMj3BTHEJw5D2gWt7nMzaZZXVLFnEi1nAVjc9mrHaTV35DWuLNEgFGVneqztL6nYwApSUCS",
  "key16": "3U1tVaNngjM3D4pY4KtTXXxnNoXrKEc7WHUEWjrbkHbAzd6aRZtznKZfbQJiirD7WL1suBuQWi81VyX81eDzSdzk",
  "key17": "5J1jTAzfpU4msjd8jm1adYg1noes5Ta9sHQGfnVBZU2f7RDrq7jGz6KkNaZ1Z5W4wcX3p9eqPZMK2Boh7s6SsJPD",
  "key18": "3xzX4Qum5fyut9b2zEdw57tt6xPFxXt5yL8chqAtGDEF2Hvh8nt74WjVzKYcW5PUa84cDKAhFCHN8ugE8cKeumri",
  "key19": "MYkq652TZiQ1nM9CfoGfVjJsvzcoHesxhYpRvqNALsmkrz5EQmumXxxTKXHypinzMTVg2g3QbEzy7dQjrTzA6kk",
  "key20": "4Vh4Yp6DVH9CTupDTMwY6JfGKDzdnXhGciU1ZGAzqXFHmg6VzdNQEyZrRDVW3XuLFx5wJT6boovCEfEeXpo6adcg",
  "key21": "5CtgpUDHfn9Xso9UVSPg6GWb5ntN2y9rLdTdz5D25e73HtY1v4hfUxNdD7SoSEqbnjDuNzwjRsBFLAyPRsPjTsmU",
  "key22": "3VBEiakTE8ANjKdAnu3yVG5RjoMSYEQf227NyDZuPQ97bmVDsiSj4EHVF5Y5EogQCwfrqGpxvBsVKBMZ43PsW3ht",
  "key23": "5QhazvhYw5m3xYfj9Dox9dJhQ3tFPDTSnk3pEbui5SLSmvMdoAqf8LHH77mt7Nxjt7WY77DsUxMjC1LYCU4mYt3R",
  "key24": "2dPuqWrg5TCVwUSumxaJoKFDCZxuR4wkk6AFtGtR6dKurJSZsn5XpGWQDFv4UKefQUJuvsU4UU8uDr96KUTZdM6z",
  "key25": "5KPodiZH5NzCL7Z8fPskNttnsUNbuzpzKpvMfYUpwBa3zZi8vexcDLXe1MbAkgZevePdsgWzjn4TcawynPeTub92",
  "key26": "2jPMjpqisLHbqpG6XJyBLwcfUbvuwWRyGxoj9dLp6Qf9HiCjp1G9FV4T3DXSDt38DzX384NGfvHxdhbV4jeEYdUa",
  "key27": "28qr85gmzrC7nxDsxVjJhxYvSF4MiLSH8qCzvH1s31hNwuS1zKvi3uKPGgHRiyP8tKf5MDVHrwMzyTJvF3WVzhpm",
  "key28": "3oqtjzL1BAvDt4ohyWbzKSCzGt9iz1W6FjWS3GFQqWso2VYMdbFXzd9ppkWS1WHfbu8ESsMkyFg9dtm9qfNdq3F9",
  "key29": "3QNZk8WzBZaZ34KYoKfTfv51isK1mRz3fe7fYa2fXB7gtTbMqPLdg16ZXS53NPsv9NqGyqr1APTg28PNAHvVXYxt",
  "key30": "xf23vRaWsZBt34sFVg5Gas6j16U2PDrqFDy8VcgF4Dd6p5z1n2S3HF7ULbjWUBa3gTDUvcsNkPSZ84HHtZ4SsZN",
  "key31": "3TDz5BshpaJnx6sUno9c9XW27uE6f8RHC6aXUd4bwkCeGMxSjbmQCG2sFSsfkV2fvQkkbpEkki66AqUfBWozbUo5",
  "key32": "3uHFfQBmY1jaWSLebagZDj1EVj1iCURq3A7LWQSe4whqmxzWgBmDrnimwjifh8bUWv9HT2g3BmGBtbpD3xznKFnU"
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
