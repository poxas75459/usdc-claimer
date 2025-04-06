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
    "3oJzyrqthvAvSzb2YMa2dXhTvfvQKWcWaurWVzfwH1KibnTPVRokJKdjooqmuSys7mf7aFysZj2oJg5pwQeX7Crs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NP6Kd7RQU7KGhVEGmrRH2KVFK6nG5vnMAe9BiL759ZGh9CmACEGDVyobXyzWk2SRMyxYBHHZA3dQqFyoDSFJHpd",
  "key1": "2z4KpjuuVGAffHgCGHkdAhn4sr3VF8ZVLc6yNaDHsZzgN8QABdH2LRK9WPVQnrtNdQ4jPMDzWZ85opvEEX2JpSV4",
  "key2": "5mHvSntCXVjE7pU2JPGdVQ4CUZWnBUexDg6H9d23jjfAjFYCowxkUD3NsDix7VHrj4Lbuxf5vV34zQUZT9Hay3XB",
  "key3": "b6YHbqeDvh1ts6YfD26XRCRfjbWjZvz97V7WytvUMDs6jDjhY7UQ8GLbGomGd3V4wqJXdTCrHoPWRukGP4VDSFo",
  "key4": "p7FF5z7k7b4r1JhaCqsoULDgFCPh2LoJUMPcthJvCbpJVCUnrvtuVgDRRmgNPmwbaxVHfke7ckRVy6pv5torhYZ",
  "key5": "5M1BYdEoXGYtWHDo1xnoa7rivpeXgDZaKsrWSDJo1NvmRyPpczndKv4NQ3ki855VVJtv4P4LRuBGHfgbBV1gnZj4",
  "key6": "24YRUuD7Vda7ExjuV5jpZFUitd9tE33Jx8JTFZUrnc2c8wRFmzQZ9eoTYA2hi4QwTBHP4PTeRor3vi38pSRUSrAa",
  "key7": "2AK5CiYoHKpGrMKUPZj9ogpTsuJ755YtGNb9ZV487cgfY1bQfcz2YPoyJUw2aztEaAk4MwpdDcp8A6X89MPszKiS",
  "key8": "4XdugRaXE57SKaEebM1tdKrt1YRXpCbfuacd4CF7YEUrhFV42VX22YQzVJmECc7HKTEJaiJfGBYbeDVyP14kscfX",
  "key9": "2mb5WH933whmMVdfYTwnnZiiTiFasbMK5KNUWh9etkLGeJEmGvKMou7nkz2cLPQJVXmAzpExxH3vVdtqY4HohA58",
  "key10": "UXvcSqFWskoGrnoFP5EmokyhaK5PP2HgBie7kyTVSMkoMRWhqmMtrTLx1Mz3ucQkdbbRniWhj74rs9RcXSR2ZUN",
  "key11": "4gMwCvi7buSaXapt3ngJkeNWKAZAfcdaimi4NwkAZ5gxded9QSiDwmizJ74gb7ix8Y1CtLcd8bB165FNasSB7DMW",
  "key12": "5E95619xrS7yXJDa3rjhsfeGgciRSNgYCEyZEE3R94fVMLuDGdrqnLY9hFZ3sk97E1PTNKGpmhRLGcr9g3wX2Cu8",
  "key13": "xb6UEuDndDpNSxmxuUkDBMZGYqynQQknFXj4xeyGBMGCQGYR6hywa9oWXHfKsqtqdh8kgsQWUvW591FtbeR8aGx",
  "key14": "44MxWKHV4c7EsSP9UK3GvHY8ug7jB6EmMpBhUYGtyB3CYovMiEwd5K8fVjVSsVeNa9m21iGpai5ozwwGSY371Ay1",
  "key15": "MQYVkU2dLjgjvC6urV3RTqEwtUn6iSNwQqcry2YGnxqEz1EKobd7PBfZvkAkuJrQuceKYk9EHhofTN8sv6co4mh",
  "key16": "4sFxMbew2tLEF866esmyiELQKnR3qaMJBBdUMeEa1cYTovTFbYPHdMPegL75JvM4ND6C8pmhQQfN8hJ5fKgRWgvc",
  "key17": "5Y6FMCjrMh1x8wJR7j4KkGqVWNPabFXwe7uTmpNZ54DpcuCF6qtaB27B1QJxZgWAwunsBWbrffGEsWyMDPkdMrWb",
  "key18": "3t8cEAETupzYeL6Aja9LZJbz1vJxC5eSxbN8gw5GpvCEgd2TQUy7zStHq3jqAb1Loe1fwWFVmANi1mqKghtKdXce",
  "key19": "2AThPpPbysAqRFM74TwUPdJAxnCdGEZBLyC4q2BrjxU3QLwvhzicbtsheXQ1TuvewCBrkTDZ18tk9aLHNG4ixtqe",
  "key20": "aU8CgCfxqrw5J4C3ySmXykD2pmhkV4PhrhMetKPgh8DcomdeA2NgE8Ywd5GcdgnHhrza7YU8GrSe8JVBsVUU3qQ",
  "key21": "5KCfEhodCKMN5hQgv8PbYUFf7TChRn5xivRthrzifqP8abDkeQ9xsaExJDnHHoQUA7qhgSvDHoksa67emg48nceX",
  "key22": "64vahNrpJ79my11Q5KyC4Qr6MMWchJvz3ZsidoXH7tPYkVHsSNkVHzAiVrk2VHDesqiQ6n8mHKr6BemmXReCPVaK",
  "key23": "2qsozV8jNkdMqy4u5hueyDLeS8XWTmzp7sAQmXUrdLUR47ARmwEXUUav2mt3Myy1HCQQNQiyiEhpSibdXe4JcpjL",
  "key24": "4cPiB8qjDfJJwaxBojmY9zhzkcyo3ZQ1xvPzhp8zii8nTALuqVdvjJRmy3KJYJUYmB5HCbVMFv5gYRpHLcDPGBBK",
  "key25": "46LcQNcQpEVTRfmUjmEzJLuj88zPuePzeQedNGTJh4xYqo7gyeg9bMJryD8UFmwUPmbytTHeG68pUwHZVGHZX82R",
  "key26": "n8s8fWDGPAmy6w6XTCz9BfQKmVmM9hj7xosDKHBzj2TbgTuq7E2PVieHAx2T2372c9KAa3Vq2zfjg1ELFnErXkF",
  "key27": "4DaKUycQqnxMteNV33T7QgihFtTjxaktf4Dgcw3kC4VM71UzqBL9gomxBpDSbpDSPgagy7RE5XB6putFQe1uRkMP",
  "key28": "3rMu7GXH3ZkNhRu8YN9wB3XqFeDxBXfnHwDpqnjTvTxnU4i1sqofn5R8pNswtJhZjFgVRGszwzpgvtnw3ChgW1cw"
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
