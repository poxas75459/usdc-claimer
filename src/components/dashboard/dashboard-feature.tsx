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
    "22TLYTXwE6siq2Aoux4nMPR8X73cJvsXW4Aw6eYo6WqipRF41PP2AKsu3V4d2J3U6vqaqwsJGMp4M79z5LPkT7Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWjbVYqhHbVwSZdMzWiCLAQJ2vi76wERJfAWobygUmm2CaKNbCug9vKgLACnKrS1qrLhS1bUZbDmUutCFegmmqc",
  "key1": "4HBYEUHxdbRC84WeWoVV2s2UnMKreYit3TtJezYA6DSYqxP2H89TcfaenqbvTrTK8pw9uuq6jHS7WhrYhUZ1uU5z",
  "key2": "FDQyuRw5eF3sY9SNtMh5A7GgzPRNdQBMpvm4kQMKyCLZTG2VNVTVhDz2BJ36CLQK9NKhJvLMt4A24BsdaoAzBQ2",
  "key3": "5iky6r3jsXB91iXTMhb43x6QvijctpNamoM9HWEomo8CLHLr3nZDGndhChb8kqzRFL8bpYnqrNymmDtejuY3g4zJ",
  "key4": "4uLeUZHHiJxJpWkKGdCViTQAdepktTsxbcpc9geLWcKTUQQcQQjYLU34y4skENi8vnc4Muaz3i2u7kD1M9z6fk5P",
  "key5": "5knGoGHuRUKbxm7G4jYeFZN63HXrkkT2LpEjrKjNeTbEqJLzjZyGNZFN9UNBPUZUC5fqt5JvCuZH3KehoVV9NbFd",
  "key6": "2LSCrnZhj5ZMEzJWXhRZhGjWPtmrc7mgJRPTuwSzpwYPV3BvS8TApi7kgGgC65ExJSQ16gHLLrj76E5uRbqXoG8c",
  "key7": "iHUwiHjFW3dUQmdu7x9HNviv3QtNKwqMHUCQUxFpy5kdTAnaWhM11D4fn4JJwEDN4t6mUhafKFEzN4tTzcij9pr",
  "key8": "4TYgjdyaQRRKKsHzXuKUp4DAJ7omcZm6fWWr8i5qabeCm3cCYkESPYY5ZvqxUq3SGDWczaNvr4asC84cJzSSBox3",
  "key9": "yVkfP3fmaz9hgKMzsRpF72U5KaoPxVFAKUziPBthbvoLvFXyRy6SRiJdxhNCFk9EC5eehavErtWVf8meB2PdhXk",
  "key10": "4o6evnffcEtLKqDVqaf6Ut57RCwaPRFvhM827v2j8QDzHJAyTuvzuHrZAkye3hXaeZq4YuUf1HcLb7CBkCmxC5PK",
  "key11": "3RDnJy58fBCo62GX2Ps8b2kxd6LKxXpAwhMF8dBDNuMA38jVbTTNNddvzrggDidXZrQqAkVBNvMygBfLe88xeyLy",
  "key12": "3gq1C55DKL1eQsdJRjq5RzcpEfRHBFaKPeVucbjoywLSmLymvFUSHm2GCNFJeEqaBz9EnfKovf2aNdvhKSdpRKAK",
  "key13": "2goGBvaDwtgVq6YvFYUgy56pVAbiCcduuiCCdPR4HWZMy4bFq4skCBBPQ28Y9RibLpe5UW6C4H9q7Pu2evGwg4T8",
  "key14": "3AFJpQVT3PXXAwULgW2ccTd6J2Eftk6b1m1SZfGQfYkhhF5GapUQdWsEPsFkRUyT3PvMdu9pJE4uGAQnp1Y6R8aQ",
  "key15": "5qPvKSWkauwv2A17YHP5sh9ezq3eVdTDb1WZBW2P4gC5na8F9WY1WGJuaaSU8MGGYdkAqQWW6jbhdaFap2yuriSS",
  "key16": "3S5VrpGiK5oVdG3Dy9W1fmBajzWLgiMYTHbbrsDZjFdRD3RS7YPfM4dggTdgHHctY2tm1mTW9XQGJDb5YvE8o5kf",
  "key17": "4bvvYMFMKhf3K1cGRuwzHff8MECaZNmfVdwmhJPdxFvXYrZfhbo4uymmYUKRHQmE4oiyG58ZWgoaPBygK6L3Cv56",
  "key18": "8rces3ZnVpKutUGt2aFtuuU7PTrHpqTDN76QFZiQPGShifHyeydWSeRsrmgmbqCMGuHFjCnCUEvjKN8RJDutrTV",
  "key19": "54Mo1tLLdv19ePAD5oUofGGkwRXApcR8DRwFSLEyAXzvMH4h7BNgxu32J27ckTnMuBDMzfoFDUgiUFvc8bQUY1yE",
  "key20": "3SJK4er5YMUdAbjNMrniTrR3iG4d47ccv31MZwByMFWqEmTHTVGtXtHx7pWsLTdZLgmsAXryVRfwUsU6deC6Xict",
  "key21": "VrNkjQkhVXF73d1k8E1j4N2aEtAq6YphXbFpMkTxkT7hEvTTmgTMRgcLCCBAU6vfZrpveji93gYMkRdPKhweVVj",
  "key22": "4QZMqC86FeC5qJfkCH2JcREn2dHdhE72jfBKmP93FAVx3K9VQC3qcAPSkeC6CdtxLh5oXa8FDw2u9ztrJnXyf736",
  "key23": "KM7F6WpRFKn55TiMcHSBhfiQwSt2amk8pN8Lhqm3zzNGdRb77ww2EiE43nCmGwwTMN3tLXyiHcGbrpkMvdJHFjS",
  "key24": "3CiDS1tqwWoCECxHRyW9CdWMupREpHy5XvRaSkAqQqKdgt3PqQhwWQiyFNgMKA4wkdTf8N7CaZ3U7kmFDSC5e3K9",
  "key25": "3QqAk6kk7rwt4nZ4Mfgsv68Zz4XuHoB3K9E4ZozN5WaZbb2uCatRjfp4XA9FHTydR8dmjd13VwTSoYoPP5swx7dk",
  "key26": "5oexp6tiv9Rk8V4Px4NDeDaiKrZvBL9UupHi37ECfCpNgwSo8YUEr8z53s9tWtpgYMe9AwrmAMf6saiSfhkWYLrt",
  "key27": "4vZ1uxLEdgGaRMADbjHqMp2FUoo3rYV1mi4CCyEqmPsNSdcM1ffXk5LCfjFohZKkeQnnoceydHMRZyPbLE1NXrge",
  "key28": "aRgio7SfHfRyzeSKATWN7RMdepQecN43f7wws6iuaQv6BbMpjo9qCuNaEXGnrteroq8Ep7sK7niUHg5uJTDkXMm",
  "key29": "3LKygo2LgdFururfYSa44QLhJ53pZKzYwSCKmwMFQc4WaJaM63e9E1aepZXWLqnR321bLjRJfGwJuTMM9cD6x7j2",
  "key30": "4hVwCcW55CamJBfJMKPC1GcERJEcYMaLghuraca3kwfC9fCHqZE5j7E1YYbzjBYfXQCFNqPE8mfdN4HitZSc6KeG",
  "key31": "4tBSMt9VfVz6VDdMuwD6TtBVM33hWsau8kAUm2CiGU93ciuf4ZosgmNU9EvDUZoWR2E1W65QfoF3Wr3tqfYYuTtj",
  "key32": "2ajYSzBsQmvBBF3jfb43S4o6fuz2XYZdduyG6h5pF6fibNMiGoCVqzTBRYcKzGPpwxsJQbCx45M4gRHgYzge4nA6",
  "key33": "34x944UpCWGnYPoN2RKi1B1tatueB8siUVqpXv6WzSCobLkkd59Y3GgLLXFGKJUW8SKLaL8uNniruXxCChN7aPEq",
  "key34": "8rjteTxMQ7kq1Fj9pXrS2yuCbkayESFPjumY77KRpZCGKEoB1P9gBqeSUgPv9jnkukRciysXjrY61ALvT1fcMT8",
  "key35": "658bZ4NJ31Nzo8ebA7qS8ki5inRkQnVqnVAKs6XwL6zpzAQzgmwdog8j2L2RKV2VWezgjZ84hTDJnus63LeNmRPQ",
  "key36": "44fDdtxhN3kwJXv3tBR1ZERUXznQRdbzn394rKN9uABy9wJGUDCvqLKAVBzHRdTiLUkV5rwJyaXejCiv8N3XXpaT",
  "key37": "9nm64shPCJSAKg7o2A4X5Z69hkddGuWUmbEBd3saSs7WWiyCMcZFvAv19FS7v6ctu1BwWMUtJcVAFGZTgsSAucx",
  "key38": "2G3KxSsWLbCXP6gUEmMiXYRZZnjT2Yx47RmKi7grTrELCV9sS7c9ZENN6dFefjfkwvQhVGco58XRaXnjHow7Z2s4",
  "key39": "33V57NpYhWXSS973amYLG4a7yfCESEU72ozcXmpm1MYGXv91diZBWSkW2MJqYu4J2uwqmbJfdw17SuiiCyzN9EMS",
  "key40": "3kz3Z43eVimmRQuumVPs7EjwFsgGwTXDFmvLfYwdZyqSfJ5fzZQLK2jcaoHogcXv4QZF9NYT3D7LUxVPwdwmBxFP",
  "key41": "4LWVEomAh7f8gkT7YueMieBFgyQEhECVuKBkAmfDtVKSryP7opRGZB92f8rUHjc9tnkm4dRg79RVhejYLwffkFN3",
  "key42": "5rG1EaAhLTyi7DUNqZD2HNQhGQso7JLA8rjyxhTYbaSkXjQ9bWzfpdhfjNpoCmnHyZyi25CActHKnyrZZv1GwXku",
  "key43": "2BaUcPpuigm3v5bZW8mysjcJ8JNEVSnUSkMFyZEn2xtkJB4uGRL8Ceqt3puCriMVAfopDKawLZG2wsKCzJpXmx7m",
  "key44": "3pYHEdmrYVXkWrcEvLU3aZdQZEyn5kS7tc79a2Dm8x8z4tFprKzzZrKsNVRx82mZgDXQ62WEaYpfdnSay7UL3YgS",
  "key45": "5caRuxas8Qw1kApWzcVEHLRsffRHoX33PS9mQqRvTRSAHN41ZGadgXpwTgmhXCzRyskZSD6CC21CpNdsLYt3jMmR"
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
