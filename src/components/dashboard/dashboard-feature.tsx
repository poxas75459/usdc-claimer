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
    "3uL44dbFxD7pg6cSLsGeuVQJiS9t6FCwqvQNJqTaj9HfyrZhPhYUMtK7h2WG4RwA8ttNm3KAXLPw2dNYac95wsbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1i62if12EW5fXpW55GWYJQaqxUBazEeNmuBihmRTmfD184UqQYCxv7QBycZyBszo6duUiohs4HK9a2sAfKydk7",
  "key1": "5Mvz2vB6Uv15ZcYDtA7BiaDndN4csXRaVDSfbievwDPdWCWwztYiT85eP2a28i9wsuzxrC4NxphwZiv5aXeC8p29",
  "key2": "2vwXbRVjPBCs4QPJ6SPDdvNyepZDepsaRXJ6izGNco8xc7m3NeTfjozHxqx5QZvr4mymHoW6rhxX3AjnMtGQxmPP",
  "key3": "4839P57XzmJuNasNqHoWhRnhthsJGpBhtqmTdZsMvC3mdMxtWTfRr4vNv1v3Pgh5xpNBKuBv4EcHbmpnJ5UUejTT",
  "key4": "h7cBfMMPNpkFit1u91fnYSbEkGF5gL7fkuTHp1qM5wFMcfVSyxChNWAQ9enrz3kkN35suExXz2UPP5zzXpToyMV",
  "key5": "2WCq5486oujvTCm9wU1Vuw5S2nVhiYB7oL9C731kFFibrHD4EtiSVJmn7v69HpwR2ptDQvQPxhUWG8VDZPkjGcAM",
  "key6": "3XkE18FPYxCY6anzXPQNm9VZ3voG2MAYdondsMpBcGtR2M7oMZZG5z7XajTQHE2BHKR9bKXE4vFCG1MVu3jfugVe",
  "key7": "3x7f3xawW3cxTt6GtTeJjfJjvVTJBVGKQ5Wx5xAoBGUewb9x5eua9NzVs5nZWRqkStLBHiK4iDDKxiHkaDSzPV8h",
  "key8": "4HmcHXdWrcHMbs34zQLqqF4GMY2UUES5G7SgLYwXXtMxNzvEEWjpPoa2gswDh96N93fP9TPUdFwteMCHRiPzS2gB",
  "key9": "4Pp1JuxDZrGubafD5cqM91qhbKNMDRSPUNAidtg3fZSoQngJ58mm5oj21E2UtC4ev3rLBAC3KEcJgeoxFE3NkfmY",
  "key10": "41JuMHYRM81CWr6EwKLA2ef5cWHbtTmY6f872CbWfkXWWvkJhyxWDxVBVL7ZtmYxN6E9ULXhWQBPFD7ke7z32bRP",
  "key11": "2uZyPdNYQY6XLuWNG6pjwuvhUTLCZkaiLf7fEmkvgevEAtSH7YJh8VewWAgw2GrfRsfMKXZucuWJWVVw3aWrViBz",
  "key12": "hNMBrNiQ2msHtaDdnyFpB2DAg4A2Pw7HQgzkjcYnDpSQ9E1kxVEV9VY8oTBngM6ZphzhH1XkTEZzTf5im4yGwQw",
  "key13": "3iRe4y3QH6jQKVe4VroX13L4dTdewzZbpUFyyVPDJ354ALFwbHWe68x1LbvB96qNEcDiYBjMESQJphN6tgfqMAAY",
  "key14": "4F2GshXwAq1v8LucXzMDWuZpQBbFuENALhe6ULqubgxujKw3s6d1JB6bdbfEif3auovJyVXAiXqsc8bvK4MGRX9m",
  "key15": "3btiho1TgqhZc5ZCShVKEkbiAKwfFxvJQrbU1uVBWeg9pvbe15FFsTaskmZ28j8uf2Ev4D8z2VWTwvr2oWSyJXQM",
  "key16": "3ZHrnStApR2X7w7rDaqExzETqWxCva5mbFkEr9rCPf1KPvGGP4XN9u8pvBcyZnmhqmr2abmHnzyRqXYYQw2AKm7A",
  "key17": "5SUEC6abMt3iCq3vLMYnqitmoEmKjacoh15wpEqk4tX48seYdSH3ZvhawgEpVSdP2RPyyGHR8cxtQobhurW6GTfE",
  "key18": "2BrY2ZLyBck1dbp4kkEKdB4q75z1Y9PXcFAJmLGetYadPCAyVwtdqQfuYptuG1V1JGZJGvuauxLWiVnDS8jn7Xiy",
  "key19": "3re9AEPh7WLpRcVgaEFaoXtJgg6AeqVVTH3prf8bZYvxLHxDz68bMGcpbnA3SRDkmh9syQtzELF9i7fvDK68u7CK",
  "key20": "4pPwohHsyRBUvS9eeiUrEX4cEanMrgqeK97g4TWZWf3tHX3DTJk7kcgcdrxDM6U384AJ9DGKCB9XxWwKShcWDF3w",
  "key21": "ZzUXCo32bNT75CKoMDww9ucq6zh9axDPiaMrj3Tf4Jj91idC8mZCTXHtedU3A1W5xpL6pHzaevAjkBJyq6F1j5Z",
  "key22": "5zHHpBgtJgaN1T4WJ83LejqdnXjCo4TGsHeTiJpMYmXqYKMNrapDNqDE4ETwdWAcHvmhomhyqowGKcPYysguLB4s",
  "key23": "3v7TPu64TETFYTLtasNq3KJ4xBe8jQLHcXMgFRyxPd9742fGu9oi683GGpMHZeMrhksH2DQWMnQzKX5NCz57yNeQ",
  "key24": "66ndKb2U76c7BGC5W3imzUkaj5vvhgFSZefkTWmAySrEyfbXGUcbVDiFV8ADQDCkEzWirE7AW24iYHzBMcNA4Bcd",
  "key25": "3K38X9kgJEuqXwMVmJm9Nwe5if47gVzC8djwEHtR5r8ALYw1MrSwMfQYCo5fhZNCBHf6fyWzvk8GbE1kK1Xxypig",
  "key26": "25qVWfUiYXZLD75c3V3oCkFZMmzJVcCiKMLmVjHum7MckiEU7YtN5FzLfjz3ze5o6n849Ted8fZtVMKNhKFKDvH7",
  "key27": "4Uzb17xFPoKzjbYxhUDqWTCANxxqqs8tL3HextjTGvmv2Ts2qYwnYbW8cJYQDuybnN5SYjXVy4x7daqV6nJxqT1Z",
  "key28": "4toRc1WNx6KHmstxH9wJRytvJXB1eUmT5Pq5GnMoiGjH1iiq1tCADCXEBYMRCtdgT8HcpmnKqSFFeva4vLcmGGZa",
  "key29": "2u9qVe15F1UXnPgudUQjy658HQa5zmJktsjTUYPBHLddVgQQCrocwAaXnYVNHQMMNbsmTgzpKne45prrs2o6JqEv",
  "key30": "5s6nDHJMmaXjPMRJx11zqWrL7juxLXTwGLMJfHYGt7SWnEs4LcL6eDXEUvWoCUN5evhQUKtkP7gVXpfxgPovLxWr",
  "key31": "418XK64AQj9tGXPpoVVmNzhpY3Dxs3Z3NqF4LUVW3JxiDo1bNN5aYpsfPE7QzVy3ZPXPPhBphYiFJbyWwPuZosc8",
  "key32": "2Fhj8spUNdbf7JNzpJmvW28pNjJzVjsEGt6GXnkb62MjBK1zUwuNa1ErTQoXGQpBoSRbtpwShe5rF5h3anB58Af2",
  "key33": "58GyogAtKR2ndTKEF5D6qkVWc7Co66ursW9tPsiRKDkeqf4ysE856jX5dZtrHjT9vQQifL1o5KjXqgPUB8vhBUsz",
  "key34": "5fFm9GkR5BpfrNFobsTa69GYRZ8ndzegxVoN9yQU3UUmLV6h66LUMd6pNkCxvTmixLSZiGjaXYtcXDpJHZUjr9ZP",
  "key35": "22d1E6HtX1pF2qZJMaXbrNWEmZFpYYjfLiJDboA71Fx1QXzVye36NtH13X39TbZBUqBukwwKdSwRt3r8Q8rELGp1",
  "key36": "2akgbnRfqLgmJYEWSNHykpLeaGL44vibeMx2zTC6mpqzRn5wZrt4hXqpAVLq4Zn1M1kkME3yUHgHcZkLBPwaYVW",
  "key37": "SSertB6zQJJcVgtiYTmU6DFX5CuY5TPQpdCUgd7SHt17kYCjb5wasMk4iNh3GZdmjP4jsNJRnw7QHahq9Qmx8F2",
  "key38": "4Hdno6774n5yUNqiQkP4KVwqPBuyrRxVBosEU3P36iKW4Aza3Ynwnuq8Rwh8qazfPsQzGFmDSbZyLwU8UcgnQa3k"
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
