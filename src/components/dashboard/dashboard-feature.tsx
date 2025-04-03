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
    "2Y6Td5CS3w8DbjN6FUKbFDk14AqShe5s1d9orfhuCwA87GC2EeoAkrUkyMLXSVMQSVQVGB9UY7bKArdNuRKaaHjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NPvdLWJTTvgRNtEXUgZV5GxRUYj6C1Zhu44BxDC4vpumNhP3rwJdQswqB7yCUWF4hk6GzETuRd2KK3tMuwZWts",
  "key1": "Dcx9v8jkkE5uByyGBxZsygX3ojtW2iRyW1gDhHJRsyx5fxX7HCJkMWe76qTawVe21X5PbA93pzWo3CLwY8AosQV",
  "key2": "zRzGG5N3YrhWWP4vRdJXb8BjZCE8GhKJsGsC6RjrDQqk5EmBJ7yFehG7sLqVE3jwPS51FBfPgtWL3AL8TNAntD9",
  "key3": "4KnSQJaaXtFLeMAtayN2F3Xc98U2nKVJD6sBA9VnivraM87ToCv9WuqZ1G55pXzuouR8xoPPWmynGF1a7HU2d7aT",
  "key4": "5QuEWZRxnGrVNRJH4NT5ytWPFJQGGrkM4QnZMiCtqDe8iT1BmnnfLgNtTJVLWDJGq4PpvSi27gVkbJqVSJL5RbM9",
  "key5": "2bCRvcpGfHCSaW9uAinhBEAE87DrRAQf1BpwxLJCancX24GQoqcRJApkPnEvR3WQDtFvVwuD8dS68zsxn3B1fXXj",
  "key6": "4gQh3H5Z2CHSP47zdLUuPFxLT6SttVBTVEXJz1jikkanhdpcXsst9oGRb2YNVhtMgkYcJfQh2kgH6dqoz5Lhx9X2",
  "key7": "2EqwhRuNd6KkXFXgpcQiYnwML6CoG9PKgfvNVQLgsS7dT4WSq9qpyEtmtW8HdVWae7TiCDe1QYa2x193orYg1xqR",
  "key8": "sTCXZGhQ5fJE7xr6ovqcpLQ1HsN2A3bDmHSULGUmgUhryAi861S3fDSnUPMPkMJVHq7Lc2sUe9VcJMhvXQPb2wU",
  "key9": "24bfBcse96wRRBy7okmdo8FmFb6vsEMuHUECDQNiSzycXQe1fB9Gbn9kqa1ZwzZdukNW8XvXEvEfiGXnkdTx2Ao6",
  "key10": "RCXEFV39Tidf3d5PN5hJNN2kNYRx8XGAwBHm8YiTsm7a7bLPK2uQB7UVUF6CKLCLsYbfsLgcLVX5y5bXeYkrJGS",
  "key11": "4CVoHd51Wc6FPDzVJquq97ZhshaQptbHUURKdU7JBsqfDhkK2wEpki468Y5KCoSFgT6b1gtpSfkNy9tX6fcMaHaa",
  "key12": "2p3davnxtumBsrKDJDk2ctNSMykEi5eFxCK3C3QaU6AX9sbX94ctB36rzaoANjbQjbSEQ24iFZ2A6RRKjXd1kT8s",
  "key13": "3QjKCCukVz8LMAR5GattojvXc9G6dykhc8S17QPEQcV6NfjECJ1MT13C7wWxsj8wBU1M9jeEqabUnGXpRjucsg9J",
  "key14": "4k21UzJs9vXgqVLm4XK2i111N4kYjXe4n9wEunGJD3hVREn7Hm7NtfHuJLU7GLSujHtdEemcbNWkfe3Gv982oNme",
  "key15": "5GQXab1Xv7ZvuHXQS5d7EdvUkkzs5Me97ymMLnGPxqxKjbKTZrNkeEWXJnFf9xJu1Qbvj49hoTmcovShBMvF7GwN",
  "key16": "5US8esev9tSuAGsATcqgZMzm2dxJXxQWh3gwFs8RVhBikP1ym6k9XWw87ndEYZd5E4mBy8BTd3sqX5rYMx9Vx4VS",
  "key17": "2XCfgbd7VFcAdnWbVWFojJpCVKRMd1BzTmd9rRxJCM5EQaZENj9NU4pnn9Mm5zF6YWegwohjELnxbJwP81MmkuZK",
  "key18": "3fbZXVZsEzuVJaYSx37vYhJkQg1JCbw6WujLLx8KHb7aCpkxnaF58ZtF1a2r5eMtFobr4rouMRjKj21VGoiiW7RC",
  "key19": "3W9B3VJdnyZ8MfbEZUWXTgfnzCeYczJt37vnzhNZ92bqNCtRqZNpSCzBG53N9tHMSELYLpfagQCfL3sYLQc5jm5S",
  "key20": "VixX1VTXycozz2X672KVRXC7ACVMHp2p2dPRiPiLKKv7Qtgyhf7gKQzfgMBB2UXk2MGsMDQ3NnU7SjCxy8snCgQ",
  "key21": "5KiKWFFG9mrSkueaYcCXDfjzpTKK24areDZVtzFRa8EhZ9rZZkyKKc6HHiVh7i5gVYqtugjdbZ2wtbfo4bW5HUY3",
  "key22": "5wG4jfyU8CXEzhYNCPozTBWDoPUpopJe9w7WpSjyLgJGtPkZ4NZRC4DLKyKuRNyRPdbmLsSRucWadPsetuP2vFHu",
  "key23": "282EnD65Vmyz3AXg8meNWAGz8NRhkvwziN18eAkXLhSyoePpPsQRzrGVZYp1VZprfeGwSgqAHAhzXMTSuRVncsgn",
  "key24": "24BrevZnJnJHtX9dpanBMhPfbSRTLTafeMG3Q4qDV3tZYACSNSmsURWMSA8sTDKLBsBWsztJqPby1KQGHASBpZho",
  "key25": "67mmk7RDaR3JcG8smqzYfURRxGNVCgYHJ8zXowbEv8HasUaFEQtBbL3DrocNTqFJ7dS1wyFcHfdeJLUBXGyR5gic",
  "key26": "3hM4Wq7ewMdx3G3a96WHqdezXcAj6tvbdcemN4Krng3bNzVGMxyHoZK3wFPcYXMmjhksmWyhBm6rEi7z3MYSLti9",
  "key27": "2CJfo4zX4yENRXVeYDMBANTJ3DS7HPNz7ytAaUMCZP9FJ7P1rDeCktxis1Q5dXQkCmJDVCwaDC95ptttzRXyEAZ4",
  "key28": "C6dJZRXDrNgtWtUiTiStjNvaP2menSkMjb3SGMJv5Sq4AoAhf3j566rngPtQSG7qs1KfD3QmxtfKL3h5UixiAMA",
  "key29": "3sX96nrhfsHZRtwz2pgh8UuqMVj6stxoNpwxFuxoVrJejKAWvS35DEmme4YobwiyXUpf4v4qPHSbR4rAdsWHtuU",
  "key30": "2rhE8JXNgraeUZpwjgXyJauwiE2dMjYyG77a8ru6H6SojS6ETFusKpqrbqmwURcVHUfwbDkaj9xSyoP2jvxxxJNn",
  "key31": "33remkfEbK4ZbmK2tVEtGm2qKwEyen5jUjajQbX1PnMztCfF1msaUsaKh7PCbpAuxeYtn4p2G9QeEy1EgXn413t",
  "key32": "5jWzKomzG99b4n3oynkBwTbVcM9SpiNNaj1kRqi37HH3MhLFUPAyLHxXRqBPk3vTQU5ZBVzwzP72LTA9jkEJFxkf",
  "key33": "4A1wLgqsxiBgSYk9QUvtpmutPFe2wfgSb7bW5Hz7mNAEFGBrqWkiJHzr9kATpDRtPzWygfwa6GkJS9ZjKdy1RPuz",
  "key34": "66arMudvmNQfadDTEPXD9ou7a1b8xmf6gWBU8PHWQyVXsUXPhP581Jr962z4CSesu3u27hGvGJev6HMrZTuhSMoj",
  "key35": "5zgc8PkffzfG4PpJtMEEzhhsjUptNFyLW4cmdTK7PhT1qTh7Yi9QdeSZ6G7EittJ6QHb4JVSfBFWELqcJeNAWZZ4",
  "key36": "hqqYYHkpKNfuNSJmywqQt1JYyWxJ1evwfgsiDesodLn2YvuHqWhzF2Hb5Tgx4bq3HG7pJVPyFU6Do74ZnH3uP2S",
  "key37": "4rF9zfwrVBCrQV4o5svRLU2htopmTg6i3UVijSSaLfymLysE6KYjXRnuP3zCjoCnGMdpqkA8FQSEAWAaTQArpka6",
  "key38": "5a1BeLoh9y9xA3WYjXbK7ESspUs4FnE5ccPVop42cYm3w22p7rPJbyRsdxSXeHmwQstJEeKgq8dox5wcFZa4hRvu",
  "key39": "PKYHxo7aH6wfYKtg4j4qUeErUezYp5ZZGHA4NsxsDd1zEaVgrsvYwXRVQLBXFiRQDuuFyi1QGWPTF6JaACq4oto",
  "key40": "3CaFkvnDteqngxXbXaNKTxNPrnvLiJZkWXDTYVfpWnwVwkhhgXapJWdye1KUzYp8ePjagnzyEmN54Qx3Fyqu7UnT",
  "key41": "3ZoZAh3yqBX92jRBdkmKcfAkARGuXGs6nMHZ1bKBnHkc22QaxA8hYpsdWcYG5z49zuVq4CFbZxa9fQLh2LvZMG8s",
  "key42": "wsBKQdBEJnz4F36bWvysWaismyoQGGZNh3PnPUzJSWRowekDT8zZkiUzBBxhMSC8pSRM19UMP5w2fPpsgUd6G7A",
  "key43": "yAvdGQkmABYJC9je7gAZjWKHJJQ23Efq4S9tB7jGc8n8vKgs4NKz6NmCrCWbsYeZ5Q1MQK1HgEeAqvx9eG5e7gy",
  "key44": "4W2TcqPhMu6jforz6QSDx8pyuXazALZMvX6TWdLYQFSyTNVAjWDPkwXVi77sdjY1gaaohqyFPLKLx9jmFD2JRCRP",
  "key45": "5R3Rp9uCXfmVs6uHECVQimZzNczf4rChkHc9K6chohBJLfzt8G6jJxegHSmjmDCfuNo9Si98jp8bYCaARhBtQqj",
  "key46": "61rqgVM3xpmBnCkxb9xSnSNvi4GN5GzbTBBwXRqCjbFGRCYhP4UiNh8qfa1JyFYgiPuCHXBgLFjeLw6YnJjWcDLB",
  "key47": "mTg7U9KoEE9uwv7DBaW4DxaskxHauAVHM9pTBhrAmsW7hnKHCEoqbixsQMbvboiRgeQ55j2iwcxeAUC9xDxgcqa",
  "key48": "rSoGJURSVBQUwXBM2N9fANYRmM4grRexigu8Uv8papzekq2V3G1kh4wcmeL7riaNJKKmfNkh3CUhbgeVpciUf5x",
  "key49": "2FAeaWY2NBHLwybrNpCBbWzYZvv6fXYKrb7rdY8GhdqjGspZxFoEgMsy5P9bQ3cERvNZZCpzaC5duQD1A5Qbk7Le"
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
