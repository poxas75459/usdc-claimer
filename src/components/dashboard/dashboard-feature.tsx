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
    "5MPSqbtpdNtxUJLmVS182Fxz2H1AsjiyKAJHMehPosycEYpnJMD8nrCrbZ2hmzajPE5FcaWWg7R5MvamxhQmnuC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oEBCWQXn7tDDUQfxskTff5zWc71ift5ccYMcnaHg87PAZUKTMU1W5TLELiP3jX4hYqHiLgMRZS6ML74tD3Tj7gt",
  "key1": "3vGRtNUDx1JFD51WQSZRUaGV7qLAD5XJXRXU4wUEx8sZzYfzL5nZNHQcEA8J1b5g9tPTh5hUAKGsuKUYyT1EwYvf",
  "key2": "5UDFbMqTjGiaPJCGxB6Fz7XuMo4iU7Rg8aASaVTQcQZ35kEPV78kVp6Jtn6zVjBegRqdkqVSp7muvZJMRegqEK4e",
  "key3": "5Sx5qxmHMmzL1uPg2WtYhQJZ4nEp7d9hFJZaLXKqJrwZpoUDExBNhMzT9pQPuuSQVqyAD6fh4z5mJqjb32xTXV9i",
  "key4": "4eYrwMQ2L9miQJzh1NLWtpSwb5jLgemFpWg9mqLP6sgNhEeBQ8HMsKNrtC6bMgzgGJ1Czcza7qyGuzA6EKsGayQ9",
  "key5": "4h2YcPT2RRGb76Pb1cwdfVeSsFHzwkY6ActYTNTvgpYNnGDSPk4PNoUTyMgvThUJBX8HEsWmAEbQWdCvBFRVHiuK",
  "key6": "uw948hkkx9q6WRW4rHxk6unkoFk7vvcYRipJzgotgnTmRmbGNzNYyZTvb8PGMaWhKg75XGn5DmBNmbVfjX9b4HH",
  "key7": "3x9DPFLsNVrnnsQp5QDVgy4arrVzTTWQEkzP7qTsUEgJ8aLhMU2Rqo4eWJ2Q3kp8vGHBRkrML7otdqGKgpDe9eRP",
  "key8": "2VKPjbwqSTbKkGtUTbLDmBBXjtmWztK2EqeT4Sj7wZV7qipySfhaYyoZMtFnZPxsD3aDTunBAodnpQWb2Pb77xiN",
  "key9": "3z7c5eFqDLrdTiWBuKeX5zMUoWaqAndwPSKGgeug1UG59jE4kiii1mKMWRLQbeFgK9Sgad9znXreY1Dt1P5b19K5",
  "key10": "2UsBwSKiorfKQbGUFhpwCBXU7muGrXrYuY12S8wbiPhjZAsppmHBz43R5A3Qdu1kapMPKeELeHPxMb2BmezWsSU4",
  "key11": "skniDWEn8kKqAxDJkzbvagMwnLX3hH1gqPsL5NqoCdPksBzsBNwbo1JiYEySsFSZsUFxhybcdsdkwasiw8pEyZX",
  "key12": "2D1z65CzJ7z2LsKDwKE5ks25DdhqrvVHk71ZyhwVHrmejwS6g6EJjpUDiw3TxMadtviAsd9eHvub5nh1cpSjnK8E",
  "key13": "3fpo1qJ55EnewdaY5yaYee69XA3khuo7XAKgCXyUyahQaF3ckZjSwSVDe9UTmhEkVa8PsyBXaLWnZXRt1yREGR8V",
  "key14": "SPG8sM75gcANdtnNUDpRAjYkSBWW72kwdX6nQK28HmGcqW8iMUyMEAjCYTA5s7fFdSAQKLNExD7LKZKcj6KFdDU",
  "key15": "41h99CnHd4bztx9WHHRvyDr1Sjseo8DPfxZN4t2uupHULtjcSi4nB1sNa5RvdEgDGtZJvy2h9jg8B3zQKgF2c1YA",
  "key16": "Fd2NUZ9MfadrBPFX8DnS4vASKp6HxWJ8waPnF3y5RyZBdXGoWFJVEsoescFrgCsD3Jem6kSNYi2DbVVWk7MLgC6",
  "key17": "3FgxcdwR2hC6tYwypWdvP4kfefb5GKE1vicSkrsAqVZR3TfMGaCcW6QHcza9KN15s9urSFcv7qXP7nF9gdZS87oQ",
  "key18": "2kHno4344h2gNpVSd8rHewvToL8gQhnhB6Kr2LNW3SRMWLcLgErrPfifLz5b6AiJ8p2brW1u1zatR84jheqNAdpN",
  "key19": "9XqHxk1mqGJeL9KacRhsEfScAZxF1NCANRhfScAz45uc6b653XQ3eEMnTSJBpiXRSwP5NYPULu4ak4c6YzoAd4g",
  "key20": "5HsfCVBbkx46hcwWLV4yEXhX2RyvWKm5eVFj8WM1Bg3uJuwJhQtUdd1FJFXfY4PuoNpczF4ePmMB5JJ9sdter6P4",
  "key21": "67XNc1UueF9wpsLeTn1BHAGcMPyz2hoeGLkdc3sZCPS2anzqYSdeb8xA2B6k6ZWeMS7TDuNJ8vh67JVNG8YXRGpa",
  "key22": "2hZy9kdJFuF8Pmk2MwdfKYBPnY4QD9BVdGV4wkBZUHLxLWcHbkVfrFhXToNnRTX1jgfBRwW51ofK4FDkf1NRWcDN",
  "key23": "riPhP7kA2epGiu4FabBK6LuaeCqFqvsbhRbaaMgckouDmjFyDUQzU7jaHHhLCHjXMsaJmiqR2pErBpGHcyNhzZk",
  "key24": "zvehjtKpvL1T1ehkx3wPsDGwn3uttvyc7MQng3TmVmxZoZ3f7Cuq46hoWMGnNHA6g3e3W3Zen8V6WofF69TDstB",
  "key25": "5iKVqiKJBfQosSLXoNp4D8D73VCQz5SVhxhDA2rn6skHB547Bx3wRg1S17TZBVtAo1KFnt2KXnh3bcftroQHQWog",
  "key26": "29866Mpcmnu8jxs5dNkZsXcEJ9oAagd7jz9LVEDQRB2oDB3nAbhn6GJZyJ62SaFzXtVMntAuZTfgCPsuGYUNf3mi",
  "key27": "4JnAtVytCEKku9q6LMyCK91HLdUAUMEFxvhEyDcDQ3cb3McDgdevmp8xwU5rEeQhqmdBD4oECWZEUgoJcofdKEJW",
  "key28": "3BTMcCewBbLqrTupzmXchWvuLTppvFYwjMHDqXpQKoRwsF2VByiUj9JtVAr7zLYG9c9rvoa2EU2AovvzWTvKxMGs",
  "key29": "5nMtjL21KfQRBqPsDhJDCf9uXBCdYhVPNuFTGsntrMenA1p1VxRiQ3mYS9fEDkCeGw4UN4e6yzDDjJ7kwqsUdrqp",
  "key30": "2bPrqwq2fJoC2RiyqYwxdMafo8yNYRkwtKxJN9NDFszTYFohijsDsPh4CX7ax96DCQQ3hJrKzVrfABHVG8wMgCv1",
  "key31": "55EJCkpq31wZN8pdRCikZXEMSRMe2H2RZ3mijXrhD4Fq8VPSreF6aYw9mUbgm3FimPjvsC8HW9aH2BqXQ4XD2zgR",
  "key32": "4BJ9nV2NUd7E5FEZLfeyqHnnoVxGMbLXTQ9LY4VdkoJvCwFgaUtNeKPCWuViKdRkKTZdmuLRp3EwzXU6uzAtUBLo",
  "key33": "4qpEqyi4NDDE2LEgo29VLkhbP4MFxrz5Km4UPcZWnm2PB5kcUwtCVzdL8MevSy4SzKaSYcQZpk9cox7RSdPCAV6s",
  "key34": "665GeAnnzKC2Mr8niixA9xAMNPLUoQYtuWQzXADDXZYGy3kviN5J2GrnqExn2txe2gBVpsKxZ9JsQXbqaVZ3uDvM",
  "key35": "2CthouLFeCHeJmW2xKgSQLDzXvC1LMC42t9bpQ27jY5kE7MgpqnmJr2bnDBBB6PFeSsdPrKWi6vgi4o2eMWmt3aS",
  "key36": "KovQkXddETa9Jr3bfsmLYaF1Wr26PNHYAwf4hQ8tkr6qPqbeKdBCJJxKHZ74qKRLdUPbo9qw23XqcD5KMEN539b",
  "key37": "4rVSzQUuEDuiVy6QrnDK6mEA7wyfi8N5bxjViCE2s1932BvzhA75bKVFtenFehiSWTraLfLqCzpvqNKt6KAKNTLT",
  "key38": "3Z7txgP22QJ5YF3hAB9NnLsfDsQmFyD2YQqVvw46zp6L2cXAvUwJ5Wk7DBvLzep3FTQUFC4tmJwVRPt1NDrP1nbC",
  "key39": "3MbwTJRaenFfwuJg9tqWcU8woPT8MYaGagDsp7rL6wFEC47pKqV6GzqabDzv8rsqHZEpEXkh88X2QFf84VUszySA",
  "key40": "5gXinFWLUVThepEKZ2QzVtQj2L1pvPDrtWGLZJ3mKoRGJKsdTJ1GXofsJmLW289VLvXKfGDemj8bc6cR3t8eirm3",
  "key41": "5s3G8D8k7sL3R5WyLEjtsGFSQJbm7TPu7qM8tNCjjP3yMnQNXMKYjRndZxhXoBHf29bN8eF7WJzGEXZZZBD251Nb",
  "key42": "3Q8nMdnuynNJS15r9H6SWPRpSWioUeds6yXtf57pW3nLCyEJMqjNZMN4tnkHVkuRUtwkPhFS2jHp6swWYuYtRHH4",
  "key43": "53NAtHPwYixd3zv9bTZq6qdTaUhmgtq94f1riVpE4GMG13rTYuLUYPyoZdPfKrt1RtLyJfX5swsgo2UHmwG2Vcph",
  "key44": "4b7on7o7z6L2inckx6ikW37uYqE1L7FSgN2guY28GEbEGMB2bTchZBEqt4CcAnNEfpHTs9wEVXxZHm98LHnFw1fF",
  "key45": "3aKMaknW3ibseuCkwHE5EuKBRmsNYZs6c7nBB56S59MYCfaDUPPKpa5feg8n7kj1EnvLWxRKS6CcZemuGa579Kr6",
  "key46": "63fC3Ma6efjCtzmXJjL2gymPBmBK22V1e7tgvn5zB4rRBmuzGpTNU78wb1Zqvf8pUK3TN1v7w1VzC4Dq5Z9xRbxP",
  "key47": "Fs6qRdxMQHCr1WkaVSjuQEhswsaP3LWd4bv1ZrtRPGVq1G9wWYLUnCkMcaUwiXKwinLDCQCuUjMcqqxDFvQEJqp"
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
