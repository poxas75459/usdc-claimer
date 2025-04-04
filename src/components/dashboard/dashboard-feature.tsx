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
    "HMrp8Wieu4rvAgG4ZY2Mfk9s6rrmLjvc2HZaAuDsYzsLX7AzziJkQk5BFdceoNBkevPz86FAGqdwkGuJS8bqad7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CerXojdye4Y5WjPMk6a2kHbcqGhtEdeDV8KeGmEHefehByySphw3MdrgDeytwfX6qfgxBrfPhkdU9nLw8h5KGYE",
  "key1": "65LsnN9eYgJimhTDXQWNsuDa45SEaGHEhPnPB9W1ix5Pb6Yeuqi2FDJbTmLUfwAkfG79grfFjuqZjybckJ6JXjqJ",
  "key2": "2CgepqvfPMTCTgbWEeunrX7UE9RLTYvzbidDRZhRCQjpvWMMSZza7dYzcniq3B7fFJ9ga65GdN2n6yh5n5vLzQwX",
  "key3": "4noD245Uy33C5k5qXQMtSJ4Rrx25rNwmWxX7ndB3HQgYvkVMjyPodF99ByVCSx49hn3rRw9JhrKAMmWjtPnG5kpr",
  "key4": "adbm83MLyiRG41B97qw6XQS3GBmnieKTLjEc7ack8JYJb9JwbBtWyk7wZXzwr7To6FCejFraL8jhtHMoANcSgDF",
  "key5": "3BVHSm1BdQcmDBizGGyzSS8GzHLzDzfjLPMSKfp6YUwmr818T1PRSMMcaiUG1vP1Cw9ybiDiw8CyJKAT3Xod2BJG",
  "key6": "6576jmxvPda5TnF1oDStjtY1DHmD9de1bVJfsruwwuPBx2rsWGVHt6g8JcQw2io9W16aYk3ZqhkseCxh44s98EpD",
  "key7": "5rSiM2acYbrbvQWtGNHSZrxU3oqDXgEfpqvVXeoBik54M9WnTjB4YucmqksrqQBmvnoMfkMg3CPKFN9XFFyziPHm",
  "key8": "r6ZzPUXwvueW3tKTxBJp8czmBiT4SfYd5wdMrofCWse3RVEyGg9cpeKHZyc4txfApLaS87THA5pTZmkbX79NrAE",
  "key9": "5x9yEPiFB5a7WHWYg8Bd5cZStazb3L9ezWFgG4ixVWvXwae9NztNjdAKz3fnaZ3YQvzsQHHCzvkGv2RSrEdkH8XQ",
  "key10": "3JUVoxwLRdTNbsjbsDDGZK5rAekd4fQMU1DyywfifgueVMkPSet7MGJH6APV79orrc3b52NZ1K6sUhHzEc7QV8ND",
  "key11": "5ipS3NK859vX6LbKK2QY3VgxoXvRqFzz4NQWWMTmouyXkiY7UHsvQBgZXcurTn99DhfSRkVHR5hbwUCd4dJuStXC",
  "key12": "2fv15A8pHdQR7r3udnw2kapCMJybrPinQkoTrziRVSvtPNEiZBtNqKu9Wwzi5vvgJuZaJoCFEqRZXvbMdnP2pmff",
  "key13": "2G5AgPP73QR5LPZDAQDvZZBVwRkaoU4bCjWNDTwXgZdRaxJd5U6Rg9PNsYFDjZXdG8WGJWTGaVSsPFWGftAtKquq",
  "key14": "3YpQMFx3bqJePtQ1aeY53nEGNz6MsnwznAFv8TApG7NL9g85oTmq6rHkZZuVJH4MsFQGiMnBqswPigqe6Bb8ry3R",
  "key15": "2N2PgT4PSQUCT2gY38tMYoJUSSCRBDf2kehLj1Mjw7PEmhwAR2tj4Uy6QiqBu2ckjmviLaYuXdfk7JgzyqUQNhwb",
  "key16": "3gYbbgdnWykewGq5P1btoQzRVJAcb1bHhNG8CVG4FuFPT1CrJTTSrhGMZjyYnRdbXi99YMvTtMZ18hSPqbiJfpec",
  "key17": "21zgWxT4futz5CpounMusYmfzQSnUaE8M14pKntAd4ePnYSF7m9tbmQWgUevaFHT2Rm6ugwnUWBXRXov2ddMPAyT",
  "key18": "4ypz3weheisDBvkUFHaFXfpj7MQr9JzzdibnjPboqDMXqrhWZ4ZdE8oPescSp5WdXo1WdfkpuCp9MASyFPGRDUFe",
  "key19": "4VEwrARLcLx1L2Cj569cLVa1Aqh9WsqTYs23a3CpGmF1NQbunLWhYbBMhkEWZpGg5mvSJbLGjSeuLutc88dg57EJ",
  "key20": "3hJXGTfjGMhU4efGgHb632cK8ncXgUdxZDkPyJFD4oaGexLYVndVccqhuQg9TUo9sgazYkpaKVx9ixquLbx85zCM",
  "key21": "yTRP1pDiSG2aiRUUZcKPnUV7NYL4Sbaa6eqzFjwFwA3ncBYdRdKVTTisbnvWAyqFXSuYBAFvfmVznGYYgCRozbv",
  "key22": "5PbS3VsppM6yppa9PsxrARPNfX419N6Y5X1WCauAyyRw7UP1EMFCt3t535aD3qGNiBngppyAHLmvj9c59S1bC9VG",
  "key23": "5sTXpePjJ2t8RSqj4uKxZfbTo1XEaDCadGqBF9qeao7gtN4mSHrWcjV7tdYB4sChHSJTwTnzorJHi7ypv12gWWN",
  "key24": "3yqpQBSqTaK6QPbUX2BK9V3L6fhphiHamisMc3tYWTt4d6UPdCefpEKsAiYgiG4m6jZCgNh6hPoCVLaH1pSjkoLM",
  "key25": "78q14cDWfiBX8LEjYEyED8Xv5sQk9j17khpNk73g22ub5g85mzLc7P4uVfhafasQkYYF94pZbRobmCtVTmdqzn9",
  "key26": "Jp2nPNwDGZpFhTw5h7oKeauGT41T1i6FpjjvmrEiJeWnnAKMoF9pyhRrrgrHCvnEv6X2bA8RzN2LkrGkY2GogXv",
  "key27": "3p4hJoJNcqcDvYW1CuoSEHU23DnsZ8aXT2xXWk4ALogAqcUod8DjzFkcMzkrWKWq6R1dzHVFd1QBrJbhrnZv2hVg",
  "key28": "5S52KASdQY7GtamswLPwFKXg87ynnu8MM2h1D11oSVN6EK65LBs2G2JyPLcGQAUtFZhrATH8P1ESGAFEaBGHSFkP",
  "key29": "47wWQH5Us7bcbuU8Gww9EWFwthe3ue4HRKkJG6uHjFpJ2KpKDetR54f8XsnEpwqiCrPaXALRwJWAZpNgqf1hpKeA",
  "key30": "2b3bwR2FCaj5pKMBc8ymRqXcovy6iHhUNfgvjobvc47RRCF77HyXttgx1Go57Ccfz6GdVofefeqiXUmatFf8VSxB",
  "key31": "4QXJsczhm2ujVQpWHYU6CHXRAWfsZw1vY3x6n1hkBL51yM8q4aTkxPvYZEPWrShGtsHy397cHGc9rMef48sExcSt",
  "key32": "2fkL5rTpAGpkD3c3fU87s72eWbBVJf3KCqzAfdbnu7BoCoFKS4xy7y8xtDTdzYmaEgVCTWrfUf2i6hBBLNp8Xt6a",
  "key33": "5hNVyWkZkttNbHkJ89DPsqrEP8qPrzBBVjhY8iW3taRempouLZ6Bt6Wbe4YLvJ5nNEv3tWfSJduA39ERCwmhyV7f",
  "key34": "2TNEdfD3eBhRCfkoENfifeHyPok9fHjXX1D4QB8HS8qzmR3TaWaavPMr8BgCHPyrwLH1A2Witd966qPbUbXXqGgy"
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
