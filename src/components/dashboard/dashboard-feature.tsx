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
    "3Dt1FpSeC6eTCYADsLL4R2DUQ6rKauNdmbLzN6oEdfpnBmdTcsss2NFvh88XrfsrbR2TBqNhCkFfsca17Q655o4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7c1542CBDh3WtSmpWXebRLJcvXHni3aBetyGJoHS28nkfP71UNhLjKQWz5xiabNnFWWF39MGA9Lr1pQgzxVghrp",
  "key1": "34oyQfXEekUcMg5cx9jr5CDfJRyfS3s9ETC4nc6u1DEZULGt9zowW8X7YaZMUgK1rXxYgBcw7GRdWavRVoAfX1MT",
  "key2": "3E8UhgxktpFeegS2WdiGzRYetP2sm9MaFsZWp9opHdfUaNYZffjxr9vjdz25LKsNSNdP4UTLLKJwrGsrxgTiunW8",
  "key3": "3CygCrn3xTq95NNUanmq5vQF8JSr3BwjRLkkvs4QfvN9VjYpKBe5G5apivgDNvzLJQQTuK2AXgzAc8NkVAeQJPSK",
  "key4": "33evCxiAVxzd9vKDrDUPcMNUiPntEe39ezCTZsjiQpiGRjSBR6uNKse7hf6KbTWQPyREHJMg9KDVvT4fAZ79Dgrn",
  "key5": "3CFWh2SjoxmgGiCuS3n1r5MNDiYB3t8iW82LJa6svUPchfLEBTbqA9Ro5bHmcmG7qyqhJnu2orHSUS3Z6BxEuQeH",
  "key6": "5bWgS71qGzYp4o6V7fakiVXTwvCGjeKem7f6iZV7aNPuH7G2tcDYk8t9PqP4azk3gA4AtmZAQJLbsfvDQ5HXivcB",
  "key7": "2V6cNCbRJxXi4fABNaVLAsPCy6JVwnws8RZA3KEBhz7h7mvkofn2ejURQS18xHQVeHtepW283wmHCsKPNfVHxyAP",
  "key8": "3kmRq5rg3Asmst3tpAPT353ofynuDd8txJq6G5WGxGNQ8yycYgacYPTsMQ5sNkLMq4zcm1ovBC2PQcymhzWbAPyR",
  "key9": "2MM1t7oH1nbwSpfcFPNb7x1Nbyogsn1ZPEQt4uCpvrCzETYefYpkXE1U1GzQmVELVJ1eHnF8a5ec2w2jV1qsmL6K",
  "key10": "2uD3dTUhrMpYBTi8QkMEvkWXJRdVrSvRATZB3M8GtS2eVDjycd1tGEG66mWAL56xRus6NYBfwcHPi1akcKqtvTSa",
  "key11": "Cg5uzBrA8M2hE654Grw7PrdCrbAHn4ywdHRg4d7g3tNSwf48SDeiVFPja9SWAyYeXiBELH9ebMJWDLxoegD4WL6",
  "key12": "5Vtybht2zJugzT1AQuCQWn2nWAzvcJNNxj9kxKBQuiWcrFcPKuTdBfdqmmw7FMDkaSDyd95rv5c7Yw2NFjnJ2xyA",
  "key13": "nXzz57B7oMAxvwhXHWTPgwrAAmeEzLuC9AXknggj36bpWu2PqzzJSgZjSZUKFDSUSfTSmaFTsm1oUWNG7hqSECz",
  "key14": "35cj8qVH26TfYsXHj3Gi1H2xCw2zzrrXUcdszWCxwQnbUaoX2XepVDwFnhvYZ2NCPpd332TMarLWBtEi12Vbiq6s",
  "key15": "VPsBPDGC636mhZfLfcNDCYqpi4sAGvDk9KFhYYbp9m5HiARLyh6rxqManb5eqSkNRyxokGVA8rwaCw1PZLN3Mw5",
  "key16": "5uPyGJdPa5z3qtzK7ueS69QC6u6jWjqS7baCxRsoHANbzZaoWHywDydH6B6JdXySnpk9zXmHRYgiS4fp1ahLD8yM",
  "key17": "3fTbp8GPbVFqiRWbCVatAtEF1Eq36HHtY8r2r9hdny2NtoXDNnkMiKydFMKPLUPt8EfLMuu8udEHuegGJjBySGtE",
  "key18": "26NDWQXaNHg89xxVufq5EmsRpvUrVfPZSoSRWQdPpn4We1QqN8uXAEVbu7uigSwYCx4nYqUyyd5TwxATg3QH42j4",
  "key19": "5jBZBcbwLYie1bJwAuEEjk3ri38XkMvfmGQ583BzUepTQpLzKMYVjuUgsLuUxHW1WyrQ6GeNbpcAVFmPYBdxhvWQ",
  "key20": "5yV2x5GiKskYHF2hgpASSkM67HPyGqsSuN5473tFkRNEuQEAMbj93ab9rBf9r69bdFzgUqsk3ShcJiSNjtkS32Ka",
  "key21": "42EREwJo7Tju2dKF1tgunjEtCAAzV8VAsVNWjGj7yEAtW64zAmQuxaMYR9wwDUG7iCfz4bPuCNwc6ggF36p5EJWU",
  "key22": "4AYUN7EoE6rmYut83wuSuqTJr1kebxmurm3PqCeDEovq8gJsjgAfaZ7DKSCFi3QBVgB6fT4tFWQLAe6ceaDQcRKW",
  "key23": "4E8nnpQSXXWhgyBJ3owT4KYKPHvVBPAeEShc9cgcpsDGZvSsTRfjfvqsxfCukRrCeK3UgWXT9Y5idz8Vqp4SoMdg",
  "key24": "4vXYuzbWTA86x7i3zN2NWv9x7tACeyVt9wxshXjMuLi9GqCjzwJxwGC3XWfFu5E6KBpoo5eaca1kq642Kwyd6U74",
  "key25": "4wnViD1Ae3XFBQuvenVPdWhQCLTLZ8mzQbADbPEDXqssdjbWbJbwcdpfou1EovoHJxGh2BBAJEnNxW4MFVvYMeR9",
  "key26": "2nrsazGdyTnfFx5VuuMmES6PvdLs8PYMaHTmmwQ2idrF5a2uJhX9K7Cvahouro4n7gp9sviCNs8EtBZJFc45ii9p",
  "key27": "5iubL5ZR2CC88wJnvSBcX2arah3tqvUuiFXXqW7scvgiVJvQVJU9iLXZkpWgQhs4ByMqiUtNbi6q8RcbNBw3Crv1",
  "key28": "FR7M1eQb9NEmvwhNt1AyTERKE5wBJh1d3zRBPr52nKaTvBjwkT2fEW3i6yCznThHLwHibvh3iCXhXZGzYUPUwJP",
  "key29": "3KhUfGSA81xtS2Yu24Eud4HVjbHLzvMWU4gETgA2LENCNAWxUekANmuWnpzeqpRNCir8yYNnoJuCkcxrRrWfBqib",
  "key30": "4v5EcPfjsnDSsTYAW8szev9bgKcD69ZRwrcNNd1DgyBSTfuynCatH8237JHtZ99JSxnx7ejoamNJVoyvTNLCYFQi",
  "key31": "3Ewmb9XXMNhCkn8RC3pREGB6qZWj6spbSkUEcCcB39pgbq9h7R8JhLQNqnrq9e7UVsmu6DogSAu1iMFajgqaBrRG",
  "key32": "2mNzh5VpertZrnr6ZiTo6Mya3NZ9ViSpTss4Rv6nqJV37z9NqVSHo8spEJP9FSaNPNo8nuR8zWu6wiX4hL9ws5MV",
  "key33": "2y5Yyfv4Qjq1Mh9tGimm12i41QeEKshUZhbeWkV6H9nfW8TmUD43MqWQxjnSqVqD41r2ZUjKKngtPr22z7bD42jn",
  "key34": "3nYLPcoRNh5PFrY9LwTEVTG6Q7v1pmjxeMMEk6LohWAzy6SoTaFk7uGEBh9cEt9FYhkEt77dcy1TEVWGSgJ9F7y6",
  "key35": "45t9X9QTHMSu4CKhu7eDhK9gvHhc91bwGiSXtMGC8hxP9BtZQgUdrwcKTk3eFMZ1RUR5ZjsDY2sB8ZfA3UQ3PC4q",
  "key36": "XYy1PGLAkFdpTrgAz4AXDWixe7RzmaXjNxmh4pqNRn96SMNtWW3bHg7Dahw5KJ5J8wZndZbeS7wocfn39v4jRKP",
  "key37": "4EJkGQBGej2EnYVb6AmDMAv4CJgmjk3txQjMMJ9GUwrGpN53XLxKQyskgYQKQ9HqbCNR3X2ZBoMMwACZXQdRMqUG",
  "key38": "4kdzJYkc75o9RHoZ48A4iWfcKcQKoCwpfRpdDwctBGkGvPKPNF16q3RuW5oDgwmoZF2KeoVkj3zSorYTCQhTDbhP",
  "key39": "4wHAtZcGXVX81LppKAJkNT6E82Sritydb8g7HYsEkTimM2WE9PNHvY2MDq92ttyD4b33s438XAj3yVe1CR6q11sa",
  "key40": "2pssEmy5WiJFHYgAHosjSNGJzeW133TMJV9fkbtXbEUYMk1fXRQoTsFEpnSubSTecAxPNoocuSoJzmZdH89SeB8h",
  "key41": "4JDFBmUWLQuKwWEK6TPio3TRoXR65JqYiDyvRCCV8zUgSTd6JwMWrcPVgDu3nWntYGF5WhL9kKgnao9ShhQeNdg2"
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
