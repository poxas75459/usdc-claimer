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
    "3cA1bgEaa5EjYpMtV1VMbNcFD2jbjdkaNotSAMHYoo2VeJk9TDr9MNwNwpFQ7KQ8piFEz14TGYwK7JprX4azvzFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38u3aRHTN7aFo2eME38CUYNcmSaXusbdp1GmaAwUAxfMADuW1vdT93E9U7dsR6MGiwLvKZUsViDHdqVEjcEaDHDU",
  "key1": "4WsDgY6eDCt4F68DxpvU8Giy1bgeHVUsBJGgY3mwGLvSBpEosMDxYTr87AqDh4R5ZcKDeLGBsbULYJ3793fv17RR",
  "key2": "hW4Eif4dm3JodbeCernHJTECC1nv3DTiSfbzvhLxEybEBVtRfMW63t69ksmCsuj3hE8bzhB8HL5Vks2XVjSWSy9",
  "key3": "3b231XC1qYXcWAbxEiZeoR95rnAgGtBGTRRB2pw1jBHcr4vQ7uL4tQRghsu1LhpNUc8Ao9f5v9E8CvSgyLgVSutN",
  "key4": "AtSjfhmrZ2uGGFthGevkiWWyFAxHT96P8Q3ndM4tHVvrh7g3zUoHwD88mVYPTcWCfJ3sV6ub84U5A371KnA4Asb",
  "key5": "5vPKfyW5cXc64A62c4wJ9VYmhauRUaMyBLtzHBVfjfsC4StH6J6GB7xNPweK7kVNWTmpvTvKDw97zkXLzqQYfM6Q",
  "key6": "2knwBmwnDr5WKLmpoGXyqUYThRubJkGKcgTh8rNAtWUm6cgdUaxryhAfdW1DbRXf86sKfZKYabAskf84J3k6VcU2",
  "key7": "2wLfcp4AHnHnCNCuSxkQNc81WsEYyhPPFpB9yYZVRe1rUedsUFUVbrLFFzSPpA8cyP9TGuHUhcksHbyQn362EMB4",
  "key8": "4Cy6yY9cM1sWJ4KprYzihTyrEkPhjpdaTN5Zs44Ez62fqtuPZaUpEc2WLXkNksEvKhhW85iDvWwyo8fgynvD73EG",
  "key9": "3N36khgqyHLgvv1RZaaSfp1T7N5dJWHksTrHEL8uSag5wt9CES8FiShSV85Vf9y4FoezWiNZwiCSRdKzwAFf64GS",
  "key10": "4g3weTPxfUVXawrrzaW18vD36kACUkpq1EHHRoWD1dgoJAVxssWLKr6itRxXNAh196bCzAVSsTeSwLaHGwH4KHSc",
  "key11": "2zvoisD4viNoH83zAAPjBZTYwx8AmJmcUJFfX92S7GBXvi1TKDe5nGfvzEvFRxHUGN8QZiVEkRHYcjCXVksjsFVG",
  "key12": "4tW5mvAyWka8o3MNPid1fFYcEppz51f6wCBKDYarrxc51byegEKzpi4Q7A381pdErbQvRXRCse7Wct7eU3cVTJai",
  "key13": "4rxiFUxLrbQKVDApR5di3jC9evgQUWVoKn27WyBoH55nsU24o4rtwj7G8QaZKeuT26QjnN3HmYe54AqC6UwxvCDa",
  "key14": "3rvbhdUCAJeUG6bgBQqDTUiV7vVEn3WGFjhw8rYfvwu2VbZMmUB8Q2W7BJvBbDHUrtwApNCFWmk1hRN6LhUnRNZa",
  "key15": "5r5oN3wGQXTJ1f4tZfvupujMf8XWiYnPAT3fKNEifTigNXNJB8AMdFFvCiAoDp1CZbY5C2psQ4Yfa722zmzA49td",
  "key16": "4XWMsDERCeU5dkxnYWN2iu2TyRmgMZV9CYWf1jyMZuHDvjvriQBkbiEoyFu9STgwU6rGt5SRZUmsvXGZyY6jLpb7",
  "key17": "64XyZXPLDYeoK2L3A2YFhc9w5mqpD4MES1SLnChSHzPzaqpGZCRYFtXCxGutHyc92YMAuxe9MucfPvdWMqXedBgD",
  "key18": "4XJp2bVv8Tb2gVBf9RZQztT4oaVhNzdNxAgg7saLr4ba8WJ8NaWkb1wyHUvvsbKv51ZigtAVeCKjfd1SPoa2ztNJ",
  "key19": "5uq7CdfjE9Do7Au1rwHo3j6xQNDS1p2Jm8hEENRvC6ZorPfpNoiqz9Fww7Uay3ejE2xrFR92oxdHghwYiQDPzDnE",
  "key20": "5U3vDbXEtEduYkhhhSumSp1Y61gRN57nk6BbqfNqG7dKMqpLNtR2JbFbdcdMfK7w1R5VMy9B8ZCge8uL2KANbqU6",
  "key21": "2D2b5ejgvMJjY9dA1ijyXWJUHu2Z549e5NhEh5vCMA6SDbZeGMDSK3B8WV5v4JP1YnNHwExETT4FNY9y9PRfBnt2",
  "key22": "4acYDQLPVTD8jAzFrvEDztv64hqzy7y6ZFfeipSFHApX9qrtaWgUspsayRxrc13FCksHLMaybfFe887XLkgb2Eet",
  "key23": "5U51ubLNHqcNDbDop2S3mmAFai6Dxdkcq14rzWny3eM2sjeQpnY7dLY1zoo2HMjap2tD1wxLfcFhDNjGcc6NUqnU",
  "key24": "2FFhbCjK8LHBhbkCBrFvnbeKYXxJ39183wa9PLH9u9be1gKmmQiH4dH94QGjajfr1frXxA35s5BzXA6iXvX7Q1GV",
  "key25": "4PjbsoEt3pAy4HTzQ3ttog75cbQKWixrofyKZHt3cpmAJrvx3tm3yGP38g6Lb6PLfDj5Gi3CpwLU77vRYmo8Veeb"
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
