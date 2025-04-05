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
    "27uHke82QVWBYvAcCVFcY5D9n6RmnawEw1MUM91PdpJxfexstdGoG4xr6aBRJViv3RHY8N718jpMzMLBBEHGJBS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hch2ZqWB5JsvexSoitBnnoQ8B8Z18xp6NNCqqBDevbFD9NFM6EPXWkLyr5q7n3b3c2UHmVks2Pw2Htd1RJxfRF",
  "key1": "EDGzanr5jafhq9Ag751Beu6qGQLJdEfL2adAUFakxkoqDBDEq83NxdNhxX3jg1SHc7EfQAFGN1T8Jbz2kP22wji",
  "key2": "4c9ouB59X6wViwixp57fzAwgStw1MUT7jyzjJMXVnb1difEJ1MKU13FE4xbQyVnkKPbp7e2a9kiXo5WHzUfZDe7m",
  "key3": "4thPSA2sMNDxGHQQz1aHUBga9LpWqPw6suNbZaJGcbs2aLn1tQuWJcAE1QxdiFstsbcBj73nEfQMr2SXf89yy4Ry",
  "key4": "FhhXJJ1dd3jhBD1vTPLSfQeqhESh9XsyVrJRaYaf2fTGzhWrMwhAPBVd7psotYDfDzYYZ8Rbg5BJNr2hpxBm6ia",
  "key5": "5ZQCHB6t2FAaSVbsLqkB5X5TwkRTSMbLc4sRCooofToDc8oVAeTkcYLB3QsyV2bpHPu3PYSgHac3v2EvFivBEJvk",
  "key6": "3ug7rRX63u37tcaKBNywvQxapsFbEhY4Ls4cBiEoURghUQdajm1Vxi3b2jX2gXGtib37kjGww2Q1ZXnqKCjstFc8",
  "key7": "dRUmtFUErreRNqptYiScaz3qgXNpzqaihNLRd7a8YUAYLSGb6DMXnBkVdELofHn792SV2HDH7QVLLDwRT6tjBgd",
  "key8": "JrFtEk3nF4PWzzmgkbkuhmjA2BE4iEVWLEvjBJ8WyMvPMi9qdR2XTaBwoDANfz177txUJ7A9GZmqSi248yxa5gP",
  "key9": "3o6t1RRstJRMFkUBVxHYo9jZnJZ143TubwwL1vCModtuVafiJ34Kkk59R3UqUVoGLWWiwLpZ5ujuWVADgfm14Gxo",
  "key10": "4dBdxNA1dvHDqmVoRd8tt713A7oaaJdsXgiH3d9o8NpFnyMoBvs6vMzYMztFdHGSvJoyg4eqVmLrVz3rVJVizTi3",
  "key11": "43ihdabpfhAjCvTiJAm4kakewQqRT7xRpaCi2p3UziV4yk3pCqtNBVRcKoNALCwfmDgpapDR2yY791JwsRdyA3Je",
  "key12": "4mUs2rECpCXLwYZ6qnhLXcZHuMbKRBggMYbvhHZrSonyKmzErmSAWFCeWpxYh4RDXvPiSQ8MWTnkMkvhYbyFjxed",
  "key13": "GrD9GQgpoKpwvqCdR8UPmsPsoWgfScUEa9uf7VmddkHvC7Vcf9Te12HCHCRqi85mqxRwEJbSYsbJyeYV14Mea4U",
  "key14": "2dQzGQJZorv4KLrQQnESpfCxFwJPa9SvtppSxddMDQj9rXGd1QGvQuE5dbtrJmSwPJpfUk9GywMDHtFQkwdZNabk",
  "key15": "31xMDN2FsjDN443exQwsnB5F7ViaABE5sRPjQQbDujZaLe48DUDuDsMSywkDMN7A6cBR1LLDwi1s8qCmYsSQW1dq",
  "key16": "RZtPofJwyH1H8R7mfs4yv2cnwnmRCVGC14JUofp1LbFRaMNrCikAU3zuwZyb2dJsd94nLLzHTEBaYwzWW4NNEYK",
  "key17": "4kDUskbKrsqpC4YfpsA1NiSyZ6GGANmAdhC42rK28tMPiVpt5E5AWgacR9nCKCZoKCv2wq1BeKdSU5Vf3jcSWsiS",
  "key18": "5zu6uxGxBVvkxebsG8vsgzmcAbHXgA93yCgfGBfG2byu7aYDA9iXcGauhecm1AL2aehQKYGZKB3U8z9MJyzoLgY4",
  "key19": "4dAXDWMYYjGwXqzwQ2XPx7Y9XAPSnAzcsyVT8xTb5xBs5xLDeo8awt9nk3q1JaAtLFLsQT8tjnRQi7TRpVNvezX3",
  "key20": "4oHvSkHQgPmmwCHEa2vdxCgSkycSszuEz9DFqeKeyUU6SNZskeHN5JpEpoCgKLimXad7Xi95hqJTEYrk33oFsVoe",
  "key21": "3C9ntGKN6M6i2VuKhwzZcrRxXgNsmGMreYqGbN6nbiNRH6ncAs5u6H6ZRaQtFzeJWYwpR5dpNTgwUaqeHzAmaQch",
  "key22": "BeeVrL3V2LWVgxai4kJ6MX2mPaqaAnXKQAVnF9HmzEwdXJxkC7hA7WUjafdh8GuvCMrsye43CzV4wRqAeF4nhZj",
  "key23": "3T1js7GNmY4ECuj2MyTAXLBx6C2bceWUDqtbS65NGTEEHaxAx7t5dKVYMQCdVe9uh9cMajGTMhpLTun2RW8S1HRw",
  "key24": "2QcYtFjdMQ8A6kdYHnjZucfKm1HwVuRntdfVk5E51vcqLt3gytdtTHgcQ17hfdBpGAjYeS7i1GJtU5KbLef3qmRF",
  "key25": "swTGCQ5Rf7HZ16c9K1Hoe5QcUNkEBoruLAQ2dmYixgpNsGVTcnr2CQ5soFebzrG9LCgpYMiXP6oHfANZAVsyBxw",
  "key26": "5MZcfJZkQVRjcrcN39Y9ppmaH4m8Zyq8Dj1KnQQHPcHaLG8hhi1d2y6LWpHyBLsZLJG46BdB5gaoomk9zjdeYrKh",
  "key27": "3fXyRWbALkyBZtfaRPSBhiHTv5W8eTZG4k9iLHm6cXpVg2itDD9QFaJEGFu8WuyWUMLjMWFgm2u8DNJaov4Yn4cG",
  "key28": "vc1GUtzcEbE1GaubcUdQuBvvU7oha9k8Dk6gNVguALpktiYKb3Hu7hMjTyeGL9S9c1mW37x3nVkYt8nZW7fWG5F",
  "key29": "KqqWH1zKteBm4SRFi3bNhRzeYFQfikzAMEXLCG5viuKxLu36vd718ZustT4FfVa5qcDbm6Mfx65KcDXjqhobksg",
  "key30": "37k8d55Kb9DpJdDRHJjKGnd69ESL6pD6VMX5pZooA6p4VBGTLfh7zpSpWZ6weZQPNrcAxmVHdJxoihEg94d575Gi",
  "key31": "3eLD3H8zEbbiFatwgRHPTUgLimX6iH4su2GE9LQsT2FPUySAhHe3gz5XApaiUvGHTd7yiu9jweFzHmW831GURZAW",
  "key32": "2vDAj8DwDCRJ5EXjssDWJ1WWuHvKxeJsbztMGjH8ZonQYQtwuL1MKqP4trxFfs2Xb1QUnt6zghxGiGMyLhM9e3vf",
  "key33": "5aQfNXCpeTHaRGx2PoPUN6W3Fmi32Fi4DKcYgw7WGMvUfsquZQhQ234QsqkDTtVUbbSAkTN4ozfNTW3evrj7Q8j7",
  "key34": "54AY5ZsWA2Rf3RbfTRD5FAgK7yatyWn1VVWe6NF9cJDU4pCMYRcFyvwH8fg1XyHMvsvfQzrTibV4Ya9WhRmq7QZq"
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
