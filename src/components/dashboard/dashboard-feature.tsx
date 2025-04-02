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
    "3JF9KTdiAtZGDSAXBNxgC38CxwB8s4C6xc3afZgeJF3D81jR3BAVHDK3aXsQeENtsjzpSR1JFjb5zjHhfuHuKKVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwEghU6VFTBFXL71em8GMxWEJ5DFPbbPhAHWuBXYsTgk8egj3tLgdDVyzt2LzwYhHfwUt2CdLkYfUzAA2WHdM1S",
  "key1": "2xT8JVym269kQvoFRrA9AAa3BhBbK5JF4K3dQ6Nj6cgNhT5KoiD75EZtyZ8i3fFg8T88tNWD5JrbdUeJoSyD1bUs",
  "key2": "2kcmKJup5qwQySsrPiSpJgbMH4TcmyZMG4oxiFYHnGNnp4mhncpQ5tNbWNiqBtPR32UosNxzbkipd59Ug6Lj4MEd",
  "key3": "BSoLofrZzXv3BYfyK8B3db5tWrnFP67rLrYKZvcFb4g8cYdNsv1D9KUKhok91QyNUcpPAq1Qhu4EXwLPjGH2VNn",
  "key4": "8p26di5Mcof2K4C61ivBkxTRL6UoW6UsRUnRpkJvqpSN4QrZWf2DQ6SENWpLEN6yRXXmS3DeEdZQnmgwa4NVrHW",
  "key5": "2bB1UmD68aW6wWHRws5NzkT55GhjgmCW7cYktM7C4oQpTMDp3rWCVZC7YRwxJpLBabYVFnMGGqFTQ4J2X3VhGshf",
  "key6": "4BXYSEE4hvfYQfpbbfczParJJevqZThXDYUJjfLzPMYnUBHeyRo4C4wwYU6vQzQvowxHQAFzB8kJypdZjbJ8ZAqz",
  "key7": "3KEyDWip9yLwUZkqfsFaVuAaZ5XEvRri33ngHxuSg7K4j8cxErjsjvWQjiUnpt9U2PMLKyDWhEiep89jyZzSaHsK",
  "key8": "4Gm9TfPmjJoJj5zmvr3jmX98NCb87wTfnU8Et4rs2otsEfdRFdusLzQ7FG5LGWEjN8syRcrskic6icvmzyKnGgmV",
  "key9": "5hZYs8frHQBY8DjkJbFfACneHxkMuQzBZw2jggWowngYfcdjSncpVVGdNccvTP8QnSERSqvXQqNCh4XyjfV79y5g",
  "key10": "3t6waGSA325SNWEvA6KaE3M5wm4oueTgEBERxLiup9TmAQ98mYnrrgyD4Noafp9bEmpY5UiLKWu9t4R8DPxoc9K2",
  "key11": "3Fgux5FMoM4NDNfFL85KhxHhFkkLr7SsRcdtS5sSn71fvXQngmY15B7h7FXkHTvmrk5GgxehLatYW2LT4NrA5mWu",
  "key12": "4zRwCh2MCpQpXQ1C1m91jCVXnyhbFHYiq9tofiLn1EM31JGourPYDZnYrEnzf8Ez8ZDyDQpirmxHnvnQQG89erYK",
  "key13": "KroLudbabC7XnKgvoegwbnMNxnP3iWSece9GSCpH8w251A5qVm1NXUv8DExY3Pg8WL5Aa19ZWP6WwpqmRwowZKS",
  "key14": "5yiAYTERKgSHsUDHewaB8rYABZKDNazpw87uecKG6ZZo84VonTRrSCVj96e6LL9NsWvkHAetM5nLNQ61t4ivmCMC",
  "key15": "XcwAUi9nJovQkAsiHsLEh5xBDHTdGuCzJtsEv2r3YjA4dsTW2NgoeWdWsDmnVAgzAM4YqUKuGYLc8KEhT7H4E3S",
  "key16": "3puMBCVyEwugX5sPC7Kb7Rs4Co4D8Kw7GmZYiuTRpZ9eZGtAaD6xokdz17sj42JC5FyurTT1Gzkakb36PBjH7DFi",
  "key17": "2Rwb4QLiAe1K13X7fRmJ7E1SWZ19aevhrXUhB52gvuirJu4torop4iF9EiR8puD8SPjedQ3ZcnCPKpZLjDVtRgov",
  "key18": "4nFF1woAdp2dnvhh2VpHjMQ3CiBfZqj2hEF2gToXohpqDrdCpYZFjgRd7B2kjakdM7tG17xZz8suMxuuSs9PS6PJ",
  "key19": "367Hy63ugvWi7L1DcWp2wYZqeaESAT4vsWCdgr6NBe63KmXt5P3h4sGrag2NdTPses3oQWDwhAygfknz3kvwTiUW",
  "key20": "5dt45tUtokbxrUKboqX2yDwE6e3fxSRfhoGNGbRKMkntnMGzqbk9FhH2GMJZeGp7VZ9cqjvfSMd3Kc7YZkmehMBh",
  "key21": "p5ZL9jy8G7p52vLkuW94zNDJYNmvkftjkT2bJ18eEDHLgp8b7DZYGMK3VEWED1vYk7tcRMUa6tzTbUkadZP9JGj",
  "key22": "4DUpeQe7N3Q4EYwStDKVwPekJGAZSgAGsx8VC2coUsFCKqMDCyJ4QuEdLc2xDUcjcqXNafN2gq9cHaRPKgCPRWEP",
  "key23": "71dYh8V44tvAfn7aFt3wsS368PwfRiYPcAv9DaXxMhpRb8pgMUaLHtJ6FPvWwyJMCVzuNQGSX7vhU13RGAc7jXW",
  "key24": "5QhNQkn4sVdfDVDnxLzELTjW86LoQACqig9y8vssYVefr4vJPJUSf6n1i8mQFu399fuKXLZSNGWwhhhbxNhfkyAV",
  "key25": "2b6mEhsip2JdHUT9pVA2h72uof2dYgavDLtbqbeiwUsP4VAyFesDotThjprPJTmySbUpqPwaDLPu7SoWc7SMG9TQ",
  "key26": "5sXb2QTtYzWe4KFhn8cnL3qpNNvxYdP9nMaWQHg21qwpsSWZWWAvQYeefWsvZHLPMWCQQ347pGYb6G48ufYUBzPN",
  "key27": "3h9ds5FYh8YL3puixfpXKb7UgSFir7PvJJriUVn5LjGh7SkNYdp4F9cRpMe4kn42fqS98RjNsHVbU58b2NW8QsHy",
  "key28": "5y5TybC26nTfYwWEB9JRjXuXYztVaPxNH1VWLKLqUz39gvKNvgyG1r419svXa7A6Egui7TUyzspdQniesdPx3Rit",
  "key29": "33GP7Amcu7VDHSVBYyYHBZbQkHvfccrWYYjoDU93haxENC7XoFzBkLhD1GUGjbFbYuhCQtayoXVEgwRHH3377SNT",
  "key30": "23pWtA6TS8bpqSgquqv27sH5x7apo6M536VDZz1EffczCcEENY4ZXaCjLboUuf3nxtCkbmx8Cp5Jfh1thjbYhtR1",
  "key31": "5pQTE9ARSTMw86F5YZc7sELpt7zX8tjDPKSRr64JbZYsAmQmEVUJD3VKKcFAp4XhjddUwC5TR8Zs7tZg2dSxzEW4",
  "key32": "P8gz9yLm3a16Yn31hA3CxcgjTY9FEzZNSMHL6keRp35RKNfDwinnxpGx7AiobFHHUJEkHcvrYMJj3YnSyqBKDxw",
  "key33": "5wqbWafJF6kn3wZv8CFFNftiKHo46Y74CDR1PgakBhYGMM9jw4Q7UZ6V1QrkRZYBxtSz6iqggVxvUU3trYYkZf5q",
  "key34": "2coFwaVBguKLxFRPRJ6nyRvVrK6aRFRD9b1WMwona2m6NJt9wiiJDNmrTFCyH3bt9kX5dyDVvN1eP1vQWSBZrfYc",
  "key35": "aj4STifJUHqjscjprXAYxzYwwT4WFvfCE2v13A2SaKtUFzkj4bJKrRXL6drssSyYiC9vVfocLLUjgHeCtS9Dzkq",
  "key36": "29ZNcvawL8Bwu66dErLi8KDEYtBQjq1Hue4hYJyMDynufyR6TWSzoCRZS4D5nvZu27N4wj3276vkRY7JpnnejZRZ",
  "key37": "3DR89tgDST1FXone4r8DSjLhhBfUjC2ugShaEXp8QK2WB9a33bEXRNkv8jghCKPbJr6k354mYbs1VmTc9GqXiqHc",
  "key38": "kEBFJ2zMNnYwTCNsfm3gQpG98iYu37RTfvwSeK1JX2aySpyaLNaShRdvSfigKT2ms2JDMiX6gRAAcSUt33sactf",
  "key39": "dwts5RXsY9Kd8rjP129eciX5ybrCo3DuGrRWiwiuHTUs2KGaM3gX6p7AiakN6eFTUVTdqebsG3Vag5zGAEzTPDd"
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
