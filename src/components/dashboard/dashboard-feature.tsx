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
    "2UTP4iJLap1FaCav7SgW7kuDu1odTNH4wPyeT4ykHMr3gtDeV5enjnRKYg1BkWPkBh9CMVgm8guppRCLb1PbBg41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rX8tQ68XhWWzVV7tK1oLRW791BvySxjJ7YGCP23ibijEXW1CNDTzD4A9sbq2wRZkeEiwuUU4mwpe8x5TehebP6k",
  "key1": "5uTmRfu2Gq6iupsFr8dtw5v8CeC5rj8Aa8RpW3xjANTu2pUJ2eUvCMMBxmmJNWPzXKc6X6vUD8BSthpEYbDFY8cR",
  "key2": "4eZSMV81gn13AC4i8ZFcxGqeDwHueNyNQH8CY3o9T5pwZQFEdNqzVa4sTVdwSbrXk91oqggDYRH4aYQEYd45xe1Q",
  "key3": "5DipJhywSqrt32bkaRUDkcYrHD1AW53HayGb5SW6Us6mpgRdhgJMepiKoxhuhCgV7mWgkwFeRysieGJGAq4HFypN",
  "key4": "5fgqyxxudQfnGBnNu6HXtzbFsK82ff8nX5TwtdBxTcuGN45ih9SvZ39cNd4pYgBn6DT8dJWBLrmYP3HdCcMKGn6z",
  "key5": "4EwtEfcn2N6KV9MX2xe9BLci8gmYMJZ8qoZZhqWzRKGT2oswMuUTnbA28rVRug2Te1gTjx95tDV3ZGUwLTBBPpCW",
  "key6": "4vmDxLjxkgaq9ixjwrxxczFnNJzymvVN7LqNuvvrW1Syb14ED2mzxkhvgL8pJTY19Ev6X8pAqd3xpaq51MVqD7S6",
  "key7": "5vFrEAWTuxKSgh8idcDwvaSRqZuyJvv66mhvkUVxydhuxjZCNc9VMJZJbg5saa3dcxkciaUjPBKhMC9a3fyzzeqR",
  "key8": "2zuCACLKmHqyuvFrRpGA1WrkANx4T5bRTZdi2g7pM1AEgiK3YwF1chBnHgYgva2RuUhsivx7oHiuhvv63rcvv28W",
  "key9": "33SdLWoR65CZ9XiA1bbGEZWDBNDUtezBmfmg1tm3dzEp2WHZEZUaeY4dfAMfmmmgNeDpTkaUPoXLzQDdy5A4xmgo",
  "key10": "29NQPEKaMFT3XuXaAC3mf9mNUD4Mvq7hN5HKiMJVHNnZ3WSLcfR7xbpznyQj4Hs7CtQQqq6W7TVGPMD11HdhV6b2",
  "key11": "4ui5y6UeE5jePdHVzH5sq72zmK7vpgdVRpTEsmYcui662bK3Y5pv4hNsdHGW3r29XrUPA3dcSC6mMa2acaT1Kpa9",
  "key12": "62YMmVH2CcD97CXYgmx8JbMvb4poL5F7ir6bxj1fjzT2hxBQzGnig9mhXkvYW2aYKv4xDiscsFGU28M1f3fM86Jp",
  "key13": "2XM8WbPhMgWdbDEf22unY3wgVMU8he3YQqDHrUVusLRQ9BhjB1gzZrKNb3oGfSByDm2RrXkoVwfx2nkdiCVqPHQ4",
  "key14": "3Nh254ZXcfD8HddFY9Cj5Y9Vbh9Qyt6p9KHZ3A3ahrF5jAsHLK5zmF8Us6GDPzRWJMjAnSFUwN4bpVDdinBHzCi9",
  "key15": "V9A7fnBdHFWYHcBn4JqPiee45G4wezdLixzrL7GKsu5LU3xrtsmX3jgGmFay6qGU7owRqPrmJX3VqknFpGPL9jh",
  "key16": "Noo9pLtLjgCgYm6M4MhDPqgMEeUrZEkreds18mVxRhPa9Qb4peYv2SacPaJWfsdR63dpTWymNmQJ8cbox6BPfUX",
  "key17": "ivBQg4xXryhQqTwFhtgr7WUAUHNRKNC986vc4X9dJ7YQ6vTnm9zNuj58oSwdn6enhqPBZV2wU9JgoFeT1YjV8HL",
  "key18": "osCy4ttpzhjzGMaweWeKdMC3Nx3KYERxFwRgZmxJojksfTK1QNSXpMyzo57Pd2zy3BXG91cb2bSpV9EJ2VvxZ4Q",
  "key19": "2UEt5irm4iARq545n5knPVsEKrSfn1pAp3EgBMjtqbPpkxb9yAjMgnkV95CSRp3krmfgTXrWdvzL6CPLTuTzeKVs",
  "key20": "N9Kyv7pbKwymDry95qT1DRx2ehBJ9S5wbayJtqiq3vJJ5CmzpPv6ibk6RQvJBGjQMq6v4fhHgpVpcXPGGtGrM2j",
  "key21": "2hNhMRQmUamJEAT2XbeWKUuPQAhAUGJJz515kCPZ8JNPEAgzWWiFrCyXeUPeos4zwUD696Gys8C6aj6iywny7zhp",
  "key22": "3eD3RF44U28eMv61pP2oLhukhCtJFf96M6tg1DHC8B5WSjhffL2mtbcCkGBBFQu8TP9eMZbDbPV6BRbkwi4wJ8Sv",
  "key23": "3DKQ6caHjMJcR2JUkqUYinwUjsUPDatTzXeHsvpukbi2Dgh73Le6mWWZiaJD6DUgs9NKUQkZVnVeWtiXVYKmAxaF",
  "key24": "5D48BXRCtBM3u4nrxyU8uWc2nn19qotnnj7oTDXeNWUY1ikDpJMB9F6aCYcmLgTMd8m8xaeBHkPtm2rsXVPiqutZ",
  "key25": "25ovUqRZpw6WYAk981FBtrtxwUkC6QyaycX7zpA4rqVw4qpjS9ALvbY9JMPGT6wwth3GCVJvrrQYQswxHXQFxfc2",
  "key26": "P7s5R4hVCQeGpm6wfAh6LmYTCufnfyz3TpKjjmNQQmp2vw211B7cRVsbQ2KGbwQKVv2TjcCkNSHCH6fnrQoHDeK",
  "key27": "4A64jinRriAD4wK8GPAthoYChHdhiBwLwTKefZ8ee3G1dQn5mRiV3UbDDy3me2BhCKJHhRkAm5SdeWkVUMdcDWik"
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
