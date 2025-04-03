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
    "32qgkK3zscvStSsGrG7xbT6npD263BhXatg9S9wHgjq9G4npQAaRhXNpuh8mZHvSB5dx6J7fPvuhQ8FYSxNsjPwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UpiJuUTkC7prSqdfq3VNcBckzDHiAHJiMTHyYyiRDmuSnaBgA161qVpmabP5f938Ls3QoSdq8kprU8HxAcYe8FR",
  "key1": "kPqkuu6xZbKkcxKUPJDmWjSfrytvt3zx3QsxxwmVdx8rru7M3rBtBLQ4kzMzxJJenESPMwk7iefvmLtPhALzVzy",
  "key2": "iM3QETaymDuqDcGikg2A5UxtiJBAB2z6B3g4fi8uPUafipUgT8NjhUTMeUeVL7Hr4jmhBtQuEPP34jbmzBKEoya",
  "key3": "3e4zsoQxBmRrpxPuhaPRNALwXsry6zk1nQRyzCdDqPm15eS6SA2w8o71x4efiHtQyCawHo7AsmNBW2tB5xj7f1fQ",
  "key4": "35df6NxEzezjg9mpn6qSRqs9L9rSxtGh3DKCKFkGDjvKUhLM9XahaBzsRNrTQEAE1xY6Evy1GmvM44P88TXwerMo",
  "key5": "4SCEvGdDTvZZzuJ4TPLBcB45JScAYuAN1KWpHeBbUbSubJDMykzHNXmt73PFWQg2whsb58vuBfKRAzMymD7wE9ZF",
  "key6": "2YvyGvgpzH9yQZtqYYWAaHx1mDQxdJhLu94b272smpxsCM6vXqwFxmYB7jq1Ea1vwPtWg4drEjuEVcsuzf3LMvTr",
  "key7": "3ZKuKbeGUgt5n4CoCFUjp35653dDRTk29B6sVEUR1P5Hm69JBUGTrPqv3nfimTMtjtQdggQoMpS7V9eMvRNSMCSD",
  "key8": "42PQ7n8efSw2tov63K3DHw9SZ2bERLbK88xzgsdeQYk2xRzzTVHsUUU3BViRQNHNuRRxdG63XdNuAzxVQgiFMKWk",
  "key9": "2dSszM4mxZUZzaZ5i9UzUrHxSLatKxLzFHA3NxG6YBbd7exm81q899U7rBDHCv2BJa65n7Ea9R3znH8JaxLqoUJf",
  "key10": "54jHPpzzbmiAk3Xk1YDxDCj5AUvKW5QBcPPosFEP8PCswSppjkYhoicx6BQsfQ8K9UuYEutBYKkmEGMCx6so8tvo",
  "key11": "ejL9M4A2fLqb5j3Mvw7wAeLA1mBzB19MrUECxJQVxQxZP4if8Cvvh5hmAxtfEyDvPNEsrdjnyeTvfFXPdvPHkJv",
  "key12": "4whYWeLC7buH9ubLVWvnTDXqpvq9QT2PtbL8SBMoBC4wzBFxmBUtStU9FfBkTpD5w69Ap6ACackKQyG1RG2d1hfb",
  "key13": "4RjcXKkKKEq9iApHMEq7pyFRdFJoym4nsjBec3dLJRvqBBBiFLyMH8dy7FF7VNMwSe4Co2c7yhRfPkYVJ8NdimP",
  "key14": "43ANWE83S4NdN1bL3sj9NfzpzJGmSuqvG1ZySZEfYdseLeu3i8V3MtiKkaUfWo3w4HeHHnCP1GBcPzvTPvPmXaW7",
  "key15": "37deH8ShuDs3mcGcd3TyyVSSnLiyyyT5fxy54fJm8TpDJaLpicWei6W8ckoeRfX7Ddvm3X3VkzhWEcRxCJA15Lne",
  "key16": "3agcViuZfgEqhSnetSiKtqgkDMujPT5VKYht4QKkYg5BDApQDqmnejtcCWoVXZCTFaoFm51S8TZGbN3KE6hPQtW2",
  "key17": "e2g7Z6mWszcXQXGHUDtmoNkLUBfmxPHdx2MhSeb2ECCYMoF3aTcpcSDmboDPnTjcYmERLWrCgxCx1fgyYL5L7ML",
  "key18": "29dEzzdojWXMZWqYhC1ucig5xsi9PL5pCXratvCd1LKMbipLYuJqWVQLKXWFGNR1ToEmij6zQigq972gXyWisfGW",
  "key19": "2wiuJiFpkps7NmdFiJA1FdqwnGpBjLsqaBfGR6tBsnSXmhZfRM964aaS5K25QKYs3oWLz8zQ6PuGbUhw92m51pFJ",
  "key20": "4mv724nFJz5uPphyxX2u1DTu7JZrRaKtpW3toR1AKmzEbppFPDyFkHfyBXmRZ5b6QC4q47EU87APR7nJeq1cj6bh",
  "key21": "43YafATp2Lh83J4RuFeSardsRHDZgCmaMKftYU5usn3kjjbeoJriMoxhBEiWaW9zC2rpXfNmudiizPrUxmziKzjF",
  "key22": "4tJMj4ZtHDLYcF8AWgegubhzt8HGydLuxjbVa2pWAobdCXAPo5b9dHj3PZBPbngoCvZtVdAMXxSr1gd3k9AkTuko",
  "key23": "4o88bzMMpqmpCQHZfV5TJjnpfD11RG3wXFRAFWF77PvNK5AHYpxB4P5KpeGrrBwkP8dGgifuxiZsHrMoEe2Bcuw9",
  "key24": "3Mzu9QZwoez9jWbpZAjCJxZR93nM8G368iRaQsao7ZRCgA8wz83UNTRvU5ivXhPzK1mi1j3TzBtSTnJ6avL7ZCdz",
  "key25": "2FAKvunKk69Ud8iFnUaxAUUnyaiZf99ohd6SB4WS1nqeAV7CZdwnTgTpv4d3GGWLXdc1QywsHD3nRgp41R7d8tck",
  "key26": "57MGMTvWGsD1hfj8diL2qkBbcXZhtUN9MhCLmSnBsViM8YaXfUmXsknEt7KPAjyARTDdHq9KmtSyfF52h5YPRhTy"
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
