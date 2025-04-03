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
    "yULVjTXshkuDyrk9bSKaYkjg59cT1NY87vTtUns5Ti1suxJuGqh9MyqXA2uh4VFWknXcGu33Vv9HJs4Nsa3oAEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcHd47z6U2334vuE3QUHPZcA1pbS6T2Y65RCAJ5t75895tGhpZzpzgVsHh1odAHQPGWna28qgZdFEhdzouYpBor",
  "key1": "4WEoHcGcKZujXK5ApkhLNkvm71ytMHgCTCiJZyWndX31SqRPpDodw1aUqsqaANiUt1oYC3d2Tby7j6r9cvGf3JD1",
  "key2": "5rE62NjgJqsrYKDGYii1JocXaFqsNPtpXXJC9XSe4bfPYY1m1jknjsmPKGPvtexB8cidYpm5zhVFdgf4D66MqVrX",
  "key3": "4fouktX3SNRHCxHTDofE6omGZAM9MMwUqzLffpJPkfSj11oPyDfnrqXxPDrJW8G2s45gSZzF9ztHGSZzmEELhTQ6",
  "key4": "5oFZ95JNgaG6Y6mW4mXxN5hQGXMd2GzRmSQnagbUoQJgipcPsFC3j2MjZySeDK2qrqcWh9LuoRuHvEZ7k4HWaJ6G",
  "key5": "4N3xrEmRicqsX7Ka3muyDstmgkHUkbGQrQyABSqekMD29XUicAC9ekemW9RwaBoBDLqmmV2WveFArKsx2X3aRu2i",
  "key6": "qJWF7obwPzHujSF2mjH7jidypv5k6qkjaNJxMSx39hfpQkMMkvv51gFKcRK4sfSmoCt7QtfCSgTmYrFh5xchZYV",
  "key7": "2cGGhWbktjSmVGT1rMdkGqWyKrC8uXhaVb5QywrhAa79qmCQziVoYkCvp6wbkiHc87So3fY5ReMWNKDiNWfm2ejH",
  "key8": "3RPLRoxcBaADgREgAJrXYpWvtXW5mymWLw3sUwNGGADjhndneHuLkzrGggjuVYTfZH8bJnfagGen2nt4VfA6XwvP",
  "key9": "3MaWmD39iB764Y3pcgPQNs5bWwCGRrqyBdviwxssvMyq3u6DxA92ZjoegfuV7GAztXpwwmgr9L7cyrUzkzFyDTKw",
  "key10": "5VDDNvmTPz46dWiPMmA8eGGMVE8iuHJeCchBSBVbBVZu2t3qydDDvh2T9S2dpiPtYAqG61jjtbnR5GRXwLrpURkg",
  "key11": "5kS6Q8WKysrEURsivd2t22NC56kYmgpYR3mewzJ5tV2X6qg294kh8trJoR1beFwVrF4TZpSAGEbZ9mpAzom4Zrno",
  "key12": "zA43YjSJVvyCT7sZ4JwLuefLGyWfeZ5DLxeFodrCk61BznYuY1bwcauX379CNMu8TpjRm3suR31ud8FpASX8iNL",
  "key13": "3Cvki31ihaj9PwKqukSYp2ruxGFDwN4RSKAFvrmwoetYym77sdCzoT7MSnPHn2p5ZCJ6gQzKVdRjewSWp7VcBnRz",
  "key14": "3HiyXBZzrka8wWAtGSHdppr4RbpD43r5mR9CniXhW7oGYTfj4nHH8YdQHwv9wFNykYDSuAd6WQz1yPfzpGzDArAK",
  "key15": "2LhGbuBVNnZ26WTyfwZp3K6sDpYygNkoHcqQguXXhmCtk3c6MwDzAb2gZow4NcVUi4SAYWDH1EaTYZozNCnVLxiq",
  "key16": "3GJbcHMvcGgonu49hRxeysCuhVVeWCTGNLC8TVMHCSCQBeqKM9ZNh2kBze1LjN1cnwPDs3TNjCufxEBAdscxWXWN",
  "key17": "5gTTXaugmGZQHNTfBfgSpVQ2vddNg2p96X2Zs7NFCYHKP5yo3vevfjghaFDD2meCsVi21b9PPb1MpVubV7jEpm55",
  "key18": "2ochW3jaeFdh4b1pgQ6yU4ewu1Hg2AFdJx6onT1ub5X3cmB198XF2cP7LicFXYNsovEFqdQiZNc1x62q8pJmHiD8",
  "key19": "5AsYWF2Db4yYyYfeZZ5CAuriT1R8oeqhWpkV3Ssbc55kbeN4auZHtbLNT96vSxdpUCXgfD58iQ157mM1kD6EqtAi",
  "key20": "4rKV5aU3Rn8UAjuo9ULgqapbmKh4MuodRNFD14E2F2WP4TbyCPDN2i7Tff6yBYWxKeUheHXaSe83jqE9grX79czD",
  "key21": "5bUqGms1J8BnNjFdgaCGqkm9bJc3vdwaJdDnndxRiXVn55x6KifeQmYQRLAGmHiy2UPjXAUFkKPeDrPTgPzoA1Jg",
  "key22": "4N154sSBnpUcqB2DtqtFr4Nc28VCGtNwepGynQfFPJvf3zxKeoDoBzrcVQdDGHnaV2N55GeYh8Rm45BGLqXidn4j",
  "key23": "kPEmh6PQe9VaSBrj1bzX9SC4tnYjvWXbPncLc6vjuEcKjJjyQc1BPHZyrubwkx7KSS9YAFBq4perG9LfjYt5BSD",
  "key24": "2LnE4uwjTNf4m7KoG3KrbMGQEnrVeY6MJgK6amWbdpiDc8D3abpPRfwbyT6TW2NHrNSdQfLLZF7NXDVDhdUPAf5C",
  "key25": "2YBi3dGWJLf8oTVDZuh2YgyDQ4CEgk6mbDSfqBrxPjiurVt61M61GT1ndHDdvUzA1eobvFRFaDe5v5EuTGGfxrDp",
  "key26": "6677fayJZWQr7KGHVSBMSsyQJ4amrVCpaKYUKV3HDZSRrUrFrTLmB9pEPJswv36nJAxw7KRh3d3Y7PK7uf41ThLm",
  "key27": "62vdxP3AuA8u143YY3ut93vqsSVU2vmw18YrXepE2aVdT9EBUAWswk7wKwkjo1Sqto1WFNCSgiAzQD5L9SKQyu4i",
  "key28": "42u4d23hiUgQ6zGhdvnsYe4XD6svfAGF8nZZc7iVjFJKVmd25eutQpGi25HAGwf8BCaAdJ39MMb7KnCiSxNC2rhB",
  "key29": "4MkKTG3JJDfUZzRMLwBP7P7BhV2ZxjgaeyHedTBUCvNR3SnCqKxLUJLgESyLFcrL6HFGUeb1AEe72A8nG3Zsokn5",
  "key30": "4J3W7qLfJD2ddrcK1GJXLHTWajMMPtUUfyE5FTy8ykr1onfQjcWNccFJVm5kJPWobXTUPmekwLcwHUMZoWhmDkWp",
  "key31": "3JV5V61tDhezH4daXSdgdPo4TTzSnyLBLdZ6Gb3Nb5rYzuTKjGJkfMS794jGms8b1TEsDh7vfhCKNmwAPhzWaR97",
  "key32": "29bYiZodUZZPUVM9DygGhYYKvh3KK8aoTJFpE6rFeQ6Laz2zf1otAQ1nVdk3DadjyuVfeWLQk8nbbYTet8Z3Ws5m",
  "key33": "3BTvc4VCSBMkUmNBBMtCGrf8opN3NUkZ31qu5txPkYdZEG1tqVXpekuWDPgW7qeRa9jswZKg38TtyUkGQNNKegKt"
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
