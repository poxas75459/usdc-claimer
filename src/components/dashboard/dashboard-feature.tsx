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
    "5bJ589wdpS1f4RtdnYVp5Yss23eq5CUrjqyqZDXeihFBSuYi8BUwSqpJwAV5Y47bCzDiAbXaVKjBPqweyRExmfQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grP3bPdLnzcF4SKk8ADsddbm5XFPMUTBs3zMMx6kRZS1eYdatGqXpveGtyBWJhB8mJCBLThGevobSK8ydrMAzF4",
  "key1": "38Lo28Mt8ELCJ7H5iDmGNQUExiatsuqd1kJcUY8UGC1sFiuDie2jRitdKi5GfCMerhwA2uwnVT5cjY48x8xEbbeL",
  "key2": "4tDWYK1QKyVTviHeZNU3scD8YscGiGp76nu8vBDXQ7At3SPefeufZLNLweg8iixxDy3PdHJLQA9truWP2bM9M9Tn",
  "key3": "aLLzjnNkMDP2MdN35vYHxm3i3sZvaQY6yyZNFEPsDZEFsVt1a8BCT9eUtyPdMWo4CPau3M7wiX2U3dCQpLXqQv5",
  "key4": "2h3vQrmakdaHNCiTbDhQQrmHCpE4XndibXRapJ3dxcUL55rNswRvKfuzWGwxFJQZzFhekHrtPDP9x1Zzck5Lhb6U",
  "key5": "jLXiCXbFoTTza8m8zySokbuaECXWPsowM5pQGfeKhfz32ixSdJpGWdeFCsLpyr7yYU8oeQ9mVUFULenBvxjYwzQ",
  "key6": "3bnWZ4u9nHfxSDYzgFX8wMqFvf1XRUtvsEDRHPY48SrgkTxbXfNab1QTevgszWqxTZtm19fJK1LMJnY4865K8NZ3",
  "key7": "3qgcmy6NJFZepRjshBKauqL8Dhio3c6mkc8yjcVYTtsTnBvAbSqcwK3AM14FNqWr8wuo6mAvZsemV1pzZznUuCz9",
  "key8": "54VY1zYjtgnrQX8wM6VFPwHzUfZiDP9akGsbRjrp7S3rsaKAPXM61cFJkQMj1N3USvQWvP9fw6Riiowh317aEfmV",
  "key9": "3snJ1J3mJ5u7S7CN8tXhxWqwguLPAmx1FFWFA8et7Uw5jSVCYcfPkqKmEmT8yYk9zy3oayF5HX4Q9cnkj1YMsPSv",
  "key10": "MJyu4iDqSUd36qTWRN1hUX4ayjvnpLbuAC64S9KN2erFk6qmgttcyDJmkTpJogUUBkdX1oLbpy82oZaNU2GnrAe",
  "key11": "5Eajmyq346Zg46eLyCazt9jB7LL8Bugk4NyE4soy9r8hVaBF12EboLozNSDB3tRMdfWvp2B1673j5NuRSjgHzxjr",
  "key12": "62rhQUG8sKeXuesnP3WSrRdpC3ADGDPKhs2E62JrHi1C7E7fN6B2SCDL5uUtkbihTgPVQnPjhXzU1s84m2JyKTk9",
  "key13": "wP9NrGfnngUDKmakYWjhsXYstwoqm54KHFZV1s3CYRLdzCmYpQkFQzkjmtTtdrERXGqPNwrX5LKqeXoHZ2TnKuK",
  "key14": "5fDv1ojTDh8sR2wgKn6egjXWxo8HZAwq9JhcetmDLm1ffi2LgNivpJwfMkUVVbZfj1GPyo87w19RV8ESiJrt8bv9",
  "key15": "56a6baMU8D4sKyEhNtQ1uuQHTS6GhmZacQa1L6LmjsRsoXWLygbDfk2PmYx2UYaE1Q4Yjte5iXWuvwAaoTAwSUsT",
  "key16": "46SNwhVpD3PcjhGhu87mQX8KqGte5hEHBziKu8xbB3ogR4aEuCfHqueDrvKo9Mgv4xz9FTU1MBfURfSZCqMjK1ys",
  "key17": "4QANGzHVvsytFPZcDS1UAzjcmVQVi7UwDBy5vLb9U34xkDz9cnyjpMmuqmCw7Wj9HdgRuKRfB1xDpoC4QK355SAL",
  "key18": "4cjb193Czxr2UCao7GJ8mDy4jij8Lmr7sLKdg6AXNEJUvy5CmkL87yVeVrAk6omAsQ6JpUJta58me3xx5kGBdNMR",
  "key19": "3S7gNEvcXqsfVAfqpsAuwMDDxeSuUKJ9XbbGKjnvskDZbipzEQLwD71LNnwc7Sm8sFKcYJzzYGitZkC9hdv2Yuen",
  "key20": "7CM9aWANaWqpj7AuiPrxm5bzuUoK98zq8hMMMoiprim8gJ9Wc2S34Cv2uJehdA75HZmbNynCbXJBuUXoXz9Xkf7",
  "key21": "33Jr6t4Zw9L9V4Vd2szSoB3CqGvuD5yuuftvWmc16oAiq5ouKAFZeYWYxMsXSuui9qHqVLpsKsHXxD8rerRM6mL",
  "key22": "2R8htaPRTu8szGoWjYHMrZoRhNb9npsztbATxUmykg2jkMbpLEm9ApRxjkoLp71Ghkhm4dxFTbP6kXwA6nwJDRSr",
  "key23": "gApRWaHFstoQaPZ7QdmB8NqHZuQQp7rTdbUbfGa8QU1SDvWmFjYX39bYdF4Z8mrsgPdAH8KWH5iyMWBQm4Nv5Ev",
  "key24": "5rsqhZn9nDtw4Wudngzu5C9NDkbUbnjW6uppRGZHWxtdPf4uehodpujKVP2YzAoEYhauZTareEPwidYRmsydgSai",
  "key25": "3xT8g7TsrswZMbEgZgHfw6d7jieUeFFXg8hbDWugbq58NGPTAEx1fhsnt6ejEXNpxrFzvffjkoEfFkb1NSGS8LQt",
  "key26": "59sk2Uo5X3TrckmvWXtQhbgJ7icj85iFdq4vZ2zWreByLEAXkvvmjNYYcwExnMRNKRwboqvfkwEz5L9NtUvzhsTy",
  "key27": "9bY9RfQhuJ3Ux2DHbWin3xCNxeWpg8WKeBFC5P44MLVRmmdYa49eXuq3Rw8MzU3euFkPB3bQx8Fqs5TXnFaze44",
  "key28": "3D84qabQ8cmFXpXoAvNzuB2ynPiG8EaEnhFAQ4hz7HoqagzfZSZT2gRXocMBwWr38BAxCkAHJMzPDboLXXxtYUJv",
  "key29": "2PRqHQm8pvrmJJGrqiBw1Z6UL5GLaDGCGmQhDcsZGBpj8FBuTHT6yGQaBsM9NfHtrNeaLG39bag55DphMoKDiedn",
  "key30": "F2jqMDHkk1nQycXTSHFdVSxNgCsw3Q3mzq84pCvjVf4621u2rc93XRbBMcRDNWvxwDV6KmwrePtHqSxTbjxXYX3",
  "key31": "22nZD3PYD8LxfnqvaDpkcedP2v5qSmnTNJ34rLTJBYeyefTnYDm3n9pSPRznpLYAXwe7kSer7vpvXh4Ry4P6dXkJ",
  "key32": "45N2Ep1ZYbhDd5cBkmtnf6ivoDWorCoBbT1imKgV76hrfqVDAmrbH9YEac4dXLkakrwNR3FWT1h6nT98rtqMabFz",
  "key33": "urgGM3zVR9PNcDyPGjEApCk9bXut6oSfWGdNn3wPN2q3dDY647zWnETpZr3xb8yTouJdzKX2uXXZnu3sa5d8A61",
  "key34": "3MkPJ5mAGk39En8Hf1G8uANrDbD6rRHCd8Aiu9CTbDUaGSDd8WX1oSiT89xDju2ZjgVMYsYznR7Y2EHUggKaemJG",
  "key35": "3pRe2uFMwBDxDgSmgoKiSiV6Hrv2dCA9BRQ2NxgJ7tKLZyEzQdvCHJDYYxSfW1wUBnmHEMECkrYYepdJVNoKJSve",
  "key36": "4MMsoLVe7qhYWLPrq5eJ6eaAwFxMRdGq2H5q7whqUMJw1FUxtvo39A2qAGvjWr1TzbLfWQAVoSFivpBaTyd1J1TZ",
  "key37": "2C5qjDqyN547B44bs2ndVPn8tGDYSQWc14caePQ7CV5pVK8ezQk3A44oCuBFZFTMeFGoyLpRurx1j2DNAUos6xj6",
  "key38": "3YvqveTd1axRuQazccMsChnxAyHCdav9SziEwLSBWJzEPbM7szPu9wCyCcZ8hRKXWwMXraKpo81jXewJghcWMdgj",
  "key39": "3nvAukreagVLKfvBvpnw5ceUQa44TbGrqSymWHeytuvZFuzYKgMrZbYCjuGJ6uRkXwTgqoEdYLopqRPVfWGz7AqC",
  "key40": "jBMQyGRoADxBEVhq9R8xLgQqJykaV7MEPucdTY6jTjqMRczgWm7UDW4e4EjkQvy6npeK7H4e5ituoeUvVaaxB8Y",
  "key41": "SBpsN5DqcNfdPAyWnMtoe53jGXgXhpk3bqXmwW8ov2sUgx2nCbzSv2rwAPJrkjF1hfV1rKGAaLc1Rp9MHQSXFfY"
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
