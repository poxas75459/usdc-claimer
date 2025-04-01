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
    "62HyQBA7UeAGVDoVQvGwnMJaj2LpricJDTewmW5zzTjtyQ5oHHFa45KBoKzN21z8Q6yzS4xqazDihGQXKZay67NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YEUofNwQR236KDHYcLziGr541f1YnoZtprqxtwDjDt7CyR29N4mENK7dEPXRhmhqbrHLGyam3QsYpkEPALzbaok",
  "key1": "3oWka7AVQYKDFRMB5cuVXAdGXzB2P6U35XK9a4jSNjAvhrjyB233jpiZ7AQuVv7YqNbtPFR2GG1zSJkgfaMhLHvX",
  "key2": "2jDQEvzbniSufZLH8AwN1GeWwmjdNhYXJu8D32cmPf2CmvzsL3VgfbDaE4V574vup2YLEB7rPZbfbvEYq2JANjTY",
  "key3": "2acadoTfyBsZfomSX2R1ZdGwbgc9KMudp5AbQRg9ZGiBepdxyaNYi8jvvik8RcB29tiKwNfc8xPacDUiQcd2QucH",
  "key4": "3EjuD5XtkrKr6wFKKWY56ieWPW3BW99DfSj7AHRx3NjWDMKgLzRDSqZw1wgZR39Me8rDbCYGWVujZawH8VN1xKPG",
  "key5": "33J41kPo4dmrSaePEATmfssquyQW75t4X1bhHTjochz54dF4uknbuRcELeTKedgsZvCs67kdwHNvffVvQC9N4cXs",
  "key6": "5dVNdtFVtPeAHCPYYmFai4YwSz82vFqdhM2ZGD4rDBkpvDEu3gAdMs7NPo2dCYV6aJRSFhbimhrkz83MPByLYiDE",
  "key7": "3kRFQTbACthBQw1BnbGQvSTETz3TneTzhBj4y3S5sWNmqM3YsaxLxeyLCPMj6pkVgMpbntAoQ6CQXHzkoNjCYfUR",
  "key8": "5z4PuThrVyuydAByEPSwquLgERDwZFxnYSNUkC6jugJ8r8eCAnyebBJs4SeuCF6QHySpqi1aS1V9T6yDmo1tnpJD",
  "key9": "654pqqZRR2r4TmaET1BPDdMjDPVsvBujSaQM8Qs6DVBL51tvkB1gkTenWiLfTh31Tftur38ichXRSCrP6vymF49o",
  "key10": "2kyx78sbbPpsDVnL8df6DCZtsubdKxhrJhyhJc8LPvpCu6M6dG7MTfmaWrhn5x6KP8yJJixuJ6GmiU7xEDJcDJrZ",
  "key11": "2PDm9x5dVtUuaCmTnLVjug946H3NDmqPM4p4hjt2LkoBKoXFGJACXPfybgngQ3DnobRibSPeRNA61GoXKqbje9vf",
  "key12": "2yW7WrjNpawvsmb4HNaEJsVHyLCmyMbw7QkYHg5jQFMkadWJj8EbEZFRESEHMB8V2ZYSnr8MtYHm7ZRAcs1j2i2Y",
  "key13": "F8T9FDtdWk59mKmBq1LmQXhuWXg2QKYgwdsUiX6r9u5hefdgbBMWX61rL2eSBbi3gWKZRFzbqeQ9CJrjdG5PE9P",
  "key14": "3tDDHiAu1NisyvrHCGE25vVzNEmc9Jp6ZSh3c6CZyoojWE8U9x3eHaazg2yR9k4DCthR3E7KzgDSirDyGoUsLuQk",
  "key15": "5tmd7uP8vUX1Q6C4qqREKz4ZGmgtJ4uD3CMN5jVPqbRjqR8AFVurtApDTLvrrfzx15fiad31rCXRJCFwJvBt8EmE",
  "key16": "5hUUBE97GAHnsWy4NZGfhN1DwUibjZeLgJUBa67FYv3jAsbyexMmMkNHMYMaUgysycDg2oRymE6oMdSJDCVoLQWa",
  "key17": "4Uk1NWRcMqZEMKUvWabN5ZC3z5VungBjZCGdq6ox5hbgkcu9zS2BR9rp4cC2xqjS3asCqYPfgqGzo9w5DCECkdmZ",
  "key18": "66CT1MaJ1CbS8NKdjLEvqSYMCEcWpmUWZfkr8HJ66ri45LgjAWo6GokkBcrvCwPf15cy99hrdoRPMwDJwXrzTFax",
  "key19": "3LiSbDW6hAfzMw6jW71RaG8idyMqatJd9rDRJDPn6DBT1uwnAxnstv4r4YMLEzHqFiibFknc4zM5iFRxEKoJviYP",
  "key20": "5ofFx3PfrcDX7A5gVUrGHdYvNH7MRt8Nb5yibffsUyuh2skMWg55JRbGhzs5RNwvXWp4UKDSoxagN9Hy6fS1Q7Z8",
  "key21": "67o6RmvbHEWpfd8YZys1rwNVUduHd76Sm7wC1rCjhcB2oNzpKfcfrGQFjXRpKsY9HRphaPbe4nzSxtxEbyW5WnGo",
  "key22": "21damJCpfpTpQBmiSQMpqEh59HRHUVNSmoYaqFZrGjXdBvx1L5ezdAXeBUY8oPrNEemuzHZFpUT6Pm95Z8veNdgs",
  "key23": "5aFhrGMvPtcVNWJ2Zd9o5JEDS1dUo7NX7SBEQ3u6nwgvSzUUYFYxFxCH9eLL1yH7ccSx3aFeP2FydWWKPAqqnsn7",
  "key24": "2ySU5pYyGaA9UKUFcTz27Q6dJ5GwchEf8vEADtXJStHvpfbvkLvvb5uZhVKckmgVWbgCncnw5Db6fyKnudQTdvy3",
  "key25": "2xaeepo8EkmAPfFZVmdg6SWpX5DJDUaqziwMPRkosYYgqwa9nwpKntTofTsMn6xUNWCu8Qq73CwpfQMSpQGbRrfV",
  "key26": "5gXU1R2rL7oshEqGh3y6qZgsxEAt2vB9NBnucVZzWnsqjKx773XxHmDv2KjphAEXSjEzcwzeKsTHurpJ7c86UtXy",
  "key27": "5aSbeRu2VWcstWaaGnoCzy7eqTGMgSMsmDjjzmz4G23Rb8WBoog83mYe57R3ZAn75ucSL12bpSsAMKKg5W4eHNoZ",
  "key28": "2FR7usLLFo6VMBCAGCQvPed74WvbiheSsA2oDvNCxji5DC8YGyWbBuS48aFXfQpgVwdj9bzUPmb96CZvX7tUbpUa",
  "key29": "2WRvJ5P16aK4yBvghYSBnBbjfTg86w8pojYiHFjchgCNzUWRh8Gfy7JwoQ1eZakuKx6AndRAPGoCHqMejsFovh5t"
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
