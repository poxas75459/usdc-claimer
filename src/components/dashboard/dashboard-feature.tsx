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
    "3ao9KhLY7tZX6QVZYosVGkLE6mnsCvwrS8VWFkA7Yz1cfhMhTd7i6szVsTxsQcKN9Q2P9DHpf1b3PLaNiPHbJJHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJSfAwLSKJEZ9oFWqPJv2nKnBEAom9k3ZN57GUtNCrEsgxW4TpCP94qKzf7zt4Kf2HBTUvz8oRtMDRgpyky2z8D",
  "key1": "p4LojRQw3Gdw9ZMUtV1jTPdCCGSNdddFLo4crcgaztjNk6Egediy2ydx7sCHBAiTmp6c7E2WEZedVrh76DmoL5L",
  "key2": "5LdMgFCd61mjq3qPc9LiVdnq2MPAjStYyFBWfmZtbPX9FTaK68N9gZX4uqA67bzdeRndbw8hRDWQpFXMNS8qb8XU",
  "key3": "4LpWomdLqzWWpV719Ty4gheP3zgUDv8CNFXvF1LBGgrM2cwGsqpkEgi8ayhUYcsSRWF9UaWTJSutKNv7YsPuhMXi",
  "key4": "2S8Deuk638YBGdSVhTQewiHnn9eizD1W1VSn1YAi1PN9xruFZo2f6xsxm2Y9qkoZxvWsaLyiSVDhbnfKqM99vEsM",
  "key5": "3vE9ff6QeoZ6ypVfjJ44qPdeUJYznPCdTrM3NZYkes3DEacnX4uUciAZCGK9U273rTaqpSGKXRiW4oZ6P2CSkzjq",
  "key6": "2Hh3ymrEX8N4EPLbGCQsQATUx9LiprbS6LBfT6aACYP7TJt1cjaX3bhd1fuonSYMND7QezoFwDm8DpAE63cxoNCr",
  "key7": "2WidgvKtH2kgVLgNJVjYMyvGPR9PBQiz4ehx78eEy7yUFCnt916aj52S6dZtGh1WBDmFA6TgsfHeiznieQoVgiQB",
  "key8": "59fPCSBktUTfYU1fZ6vToifA2K6TzUVLHZvrzmDYQj5KGUFGmcmxpHA6epSzBNsDRUjWXaWMYkeZ4Sh81a24kSsP",
  "key9": "2MAnPewvGPhX23t2oMvYKfLs33Rw2paZ2B9BNUqDuVFmrn6Esasiba2Rg5zwAjTbxiHc77TaCuVpW3rJttFEcWq7",
  "key10": "491b6wiZVZE1fvohXnsT4rGomX9sFcoUkqK5xj7Hv6SSUnL4RbFoL8iGwNGtRb2XctCyqPnC1new133eHcoYN3pg",
  "key11": "4Dh9vfwKirRLeZaQfgJNUb2bYSYHvBoT3CzEJ9rhemVGFomBE8mDQ4txebfT5pqGZtboGg6RRKWfL37LJYnZo8zs",
  "key12": "3UoQqLBsNsmXArr4fveckECrqWWccFAJFx7Y2NtyppP379jD6pE66H9bS6JrYcffGZUkMNcLe2vyBYyY2fiL83Q2",
  "key13": "5msJgdyubD7ECMMj6aU1xYWB77WNfXVcKviaB3Cg81huTV4gvxRgNNkSfA6pPdeSGeWFiYftygwYs2WXgHWMFpVg",
  "key14": "2YnPPg3RrjTARedM7EZ6TZMB2spU2nMr6e6QVZJkqShptwAUZBQMyVCtPEsv4YUQwXk6zHWJULe4E3unvSZeJ1uC",
  "key15": "MY3Bk9XeMAhYrLEpjiHnjMq6TGE7v9PZKAYrLtidEcPWE3vjkpRRzpGTRACFMMCxxbue4AKhtGtssreMdTpFEVE",
  "key16": "2WA9V7DiFvkmNFXNh8UXyhN35C15RKP5kUtL2irrzrof2GUsmMJ9URGBkztwFEGidFiyNbuDA7S693Jfd3wFJcBX",
  "key17": "38vjaU7M2Fb4vRThqmmNqHo7d1PSC5sqvFqgT7hYGE9kskvigV3wPGSEmBUr4hjVpjDCiz7hZG76cC7rWnGsGrrd",
  "key18": "5upgyvKZBKPW3pBFqsGDfs1K7LHPprT2KPv8YGvcFFp6XwNLsJXzmo3F3oyUBLaz38X34oSdJSBB8cEYdtZ1kttp",
  "key19": "RzfBMkj8n47vuVrHo8f2is9oUQ1W9bZb5L2LEo3aNK9RqbKYMojE73jAYXEs4M24381sotmY3D3tEJjWXVmUuzG",
  "key20": "5BD1qWeA8sGkCc1zMSok78A7Ek1cbqcv9frUHusaiVQNv1ddfz96VghnJECeWJpbjTmzxbzExWiHoz3VLD53e3Zb",
  "key21": "4Vss2KiqMvFnR4DX4c5XZF21PLaQ5cy2GipM5eVVjKGKfNoFYXnVxKhSzxuLudxppPcpjPhzf36eqpC72MKWZBwk",
  "key22": "5Q6a5MeoNSgKccw5ZtMJ29L7Cs118XocQ3FGgFniFnqknQFjSeVdqLT1ga4NUJYWMw4JKjHbkCfZx5UaUgCeFsnn",
  "key23": "3QjpmVit1NxfRJ9vGLmY2EyCso6agwmA4BEpA1XFzWCjUcWsYFM4bwjpnkENPMgNskSLKCe3SzixPAVqbadgQ3cH",
  "key24": "5hybBum32wcdKwAqLKszCZo3Bj4Xk9foDvZCt54gfTNxdtgPvj7r6CuAxjCE5t8fkVc2Edv2Pih74cho1jyD3h7k",
  "key25": "3s1oKoX6qV1LFMLcYE2JHj58CPftcYeUBUaWJ4FU95fz9ifwExy4csQbhfUWQovHRb9n3yHXr39oSKmhfDsmd3Fv",
  "key26": "26ZbkKayfuaNTQ44j7aB7SNpk6ZxkbM4voVR6taQZooTWxWMRbH46hmkK4Bcf9DT3PDDLija9fvmhSiMsmiKHMe8",
  "key27": "5WtSFZtbD2sNhXnnWtTUAi1SMdYeyyeMAPnHMoP81BPTnTcmZR2sv4CoMWKgdRTaHFWBSrQfeUQHUTTKHNUyT1bu",
  "key28": "wVWh1WHyTMd723ir2PRCoAkyFVDgwyv34ouCSxDG7LfcKccdvmKtT7aQPTfPcwpb5J2bJMzdzUsCa3i4Nb9Hwtt"
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
