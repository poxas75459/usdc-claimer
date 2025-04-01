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
    "5kD6jvDXGnXVnwghahgwJMB5Erms8BwxvhurksgsyEc1cNX228SgqyKtyVz2tQEvP6FLvDizAGRyAsEaRHkbc3Lu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4Smwnqg2Hx1YAbGnRnQdKrNt1bDKD8ACevx1scD3hT7p4Em5h5tRqm8eHbNdhMe4hNayeuzEakprSWeMFJf3AM",
  "key1": "3pNfSSU71Hws8dm8LW6yBMqQ8wNzADkUB2R7LdwxUKnZKGTDcBfDE4K2KWcPu1Zvx72EFH12uLzcRUutwEtbAyP3",
  "key2": "2aMjA2TizSaK5AFQeDEUF7ujhvYFUYAwwnr4oUi2xLdoWWbkDv6bwwEifZyeCeGET6LJx5UVkTXAuWxjSf6VRwSW",
  "key3": "2LVSrrg713KRJaFbp6MktSohLYBekRDGzhQBabnJMaeSBpy6GZTVxzK3ao4NrxRVKqzz5UL2ycS1MWr58Qpj6Z2N",
  "key4": "5DAa1UYhjyecF1KF4eFx4jMndFJnkX7YRYTAB8vX2DAT3cR1yPCbRPokW6vwXveawqxHKmE2hSZBHZzD5bjdT9qq",
  "key5": "iBuSpCSBy7NtYxLe2b2h5Px61LkSpxWjmibRq8ExxauqLW6iS1QTW8FSKchbcDPaURWN4dHVsztV2GD2atosGzz",
  "key6": "Hp4JLSvrcWMHAFaPEVQ2KiVXDozkaY32vtsC1W18Tyo3ofeSKLmEsCPmTEs31wCGqge6aqTdNYf7Ao13jzQNqKJ",
  "key7": "5RDcUk1EXwnKRNGkkmJ6cHEtYQigzLkZUmPDbxanTaV4R1ox5Evn2LuTuUrvjLpRssXkEGvvNz8KvELogHoiiHi4",
  "key8": "5tWn8JW6Rzy5DvXDcGP3xJnQigpw2xaSN2iuHkastCg6zQBjNn98SqAhpajZyxuJ4amCJEYHB32prhC4ycPHHXAi",
  "key9": "2SqkspzwhzWnapzgRFp8SEXWe87GmtcK2q4ur95KaWn8epTiwX5q2rUsSwbXWwL4Eb2mmgWwR8WBfRaFsusWHtSG",
  "key10": "3sFxd1LegZ1tBsBYJoYCQvAPzDGwMqV7MuHYdB5gfAaL5Hbcuuhwmhk3ZFaAsUDKQDMMJ3baJMDSR2QWeCpkwqZ2",
  "key11": "5EtS2AZdizD51BuhkxiznijGcpUmXewh33aXM7m1tPcBnJxS51eD9wjJpohNJs4fvkJUAHcEFnoUme8s5ms2TAU6",
  "key12": "Dm3yYmhYJuKNoKyYf4FmdGKxvDEAzmAiMzSrANfFdS8n4x2r4Nz7afs9VE74qQrB3u7LgvcQon9H9EkovJ4Pndc",
  "key13": "35vHAvYYivDj9ej5RzvjmJWuDVwXWY1xjDSgScgmE41eJAcV7rpBrfY1rbqZN9kQMKpvpxgUnvDb2TSFz5X85ooa",
  "key14": "55SWCzBCijFFFng9NueN1xc8ZWfQihHS4fLmDdXzuoF4tem3gHCd5Miz8qodYEw6N9sdd5m74w5b42XQTrUSpWSi",
  "key15": "wSZs3YwmcfVphsrye7VProdds8PBfk3gWVSA1SzPCfSHDU2T427Z5DfFj6NvkukL4Rmm7zYpyPy21FwALRBJZES",
  "key16": "3UZ9BmgDj6X8sRCe9q3TnQWokwFxZ5MC8UXFhhu43SFgTsxEixamzadBzVzK7k6585H8e4NdTZKtAeV9VVvq9Ci6",
  "key17": "63jQz9uMKdtkzmDoGbADe7biysYJHzqkNTLyFBNn3qvR7Jm7uPN1aRcGJntseq8K6VVfR7Q9QTZvFPXaAsyY8n3R",
  "key18": "Gnmun9UefKaFo3S2v6gCqfnqeJFXMc7Qp49zUMw4AUR3mQ6E7mGd7STv7SF1c61DcisuWv3FiAoxzeqqmNhTCQR",
  "key19": "KXmvCpHYnztZJowgwyiHsLdbw8V5eJ7Ayp5KH6CwuJVJENaeKow8gZ33tq1RvYSHKc8RDNcRMuuq2Gi8kc8gLT2",
  "key20": "27FNQo1djUAbugZm4LNEXmYX69swFMyMUioT6JnPxTPDkRi8h1P4b2LZqhnb9z9MgzDihnNb9CEFzFTME5vpvCyn",
  "key21": "tR8b6BJKE1K6E8pux9gMn3bUqhdZwadrC6dWdudfcmnDz6hn7fNBSeKPZLTpZRgjYyc8m1cQrxZeyFFAphyucDG",
  "key22": "5Egx54XNBwPySfDj5y8Yx5Whss7BkTcaV1Tqu4W21X8N7GRLsWWuziGwpsuDicitXxpze5ZXWnGSzVh7uGm22EsX",
  "key23": "38XVU3aa1dhZdsnnhDq26aXotBz31aowCrV2U8d8yhX4q9F3ws5DiPZHg1DvwmmRZxnJEWWVPaVBaqypm6LW56U1",
  "key24": "3sRBpG53pAiZ1JP3abhgU9N7zYMfBBvPLDCatc3T5BEMmP14HEZreP4ZSyPqFFqVDBvFLUCX8XNrcG3tuEDZUUjU",
  "key25": "31B8itoPrhyewXes58wPv188imAVLEcmVckTCJMWLcoJHWKpYFi2TsKF1WGJmqyjuZu2qcZ1f1iYc1PBoZ761JC8",
  "key26": "iXrbutMRyJhssnUHCEQL6mxikLBwmWtAcXYA3ALFpGWGi3FPSwDYk7AoB2xZPyYnbCeoYsLWTt2uRE6NJzQpwaR",
  "key27": "38e72YWpMT1FUkKEamKaapqUZHPRhxsdY3Npbejw5j8ko1Tz5HQuL2i1PDqDQt12i6gijnSR32REgjuwySUZz9D5",
  "key28": "61vZShXjMSs7DwfZRYMDswRyxD3NoZ1GGHyUhAgCEEmXxPVvNPVguCYTdEwVkrzczjAjV9k9PhLNR1dz3QAJAKLT",
  "key29": "41D1URj1NWvGHorqnH1N3J33dmSenMC3T6qYFjw4DqFLkBVoY3MP51JPkdYwEf86W7AtWD7FjF3kTf6cTNhdgdnt",
  "key30": "3bsfp2KSS12TFZQGYqf67pPMDkWFv8FpY6SdhWdn33MY8dH7iFi6CBbVbaFiBtgFQXD2x3KiGU97wL5LwSFLT7RR"
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
