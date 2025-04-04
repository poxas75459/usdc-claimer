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
    "3vv8qMtp74ZyQWx5hs9myuXycAwvXEY23sak95xeBgY2PfMshvC57twpxeiHAfWP44CoVYoBUzigBz3gBJehQibD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p8MsMhLofMqg21CMuV77rJeSPW6x7P1RHggMRAEj2vuQEsWkZSfu7tMk8mVFSJipt7oHbMEFiZ3kwem9MLPc6WX",
  "key1": "48ncaV3dpGNwbBjmD3Qi3DjXoaekSSQhhfWy6LV8zVp5vjZDYh8vzWg24un1R4Bgr7hm115VTVSRv7MPgtDdnovT",
  "key2": "3hUQf9ZTEs9jjF9fHtGmMWvZLGpyAUyTdnxM16YQYGdJBvjc4R7i7VvtTSeZUNJmWtkwbFpH7TPZyzU1xy5BGuMp",
  "key3": "2ThV6oaVfRgPCZC8LwfG3Pq5aNXUBMS77Aw23K6Vb97p3qvCrGgYV2zhKqdzoS5hjeW1B8T2VD8JEPhfNYEoDjB",
  "key4": "3598SYqweuLZAodPJMWRa8invVkDQ3uRsuSFd99vMChmpAcqyVuwWHCLRkpAPnU9AaemGtmkCGs9rjpbsAvNd7sx",
  "key5": "1MMpe1YVz5HC35ifDMkVfrPeC8EPTum38k3MaY1xVF9vTb3yuRaB8kAv1sRmdrg2xQvyZg5FrQwYaPK1kANkwNG",
  "key6": "5tuk8WnheRNZJMZqLQZoDW2ZWGTH7rBQ9Jt7APH9PjqXQJvGcgNyydKSPNEExGTohxhcsrWDo7pbSZq4kZCyJFe7",
  "key7": "4UevFMAbK7eC5C87LffEN7Z7nrHJ5QfhQwkpGcAMbtCW5r7uAGCChHtEZ1qaBj9BqoaJGFVo6JQ6sKuAg2uuCGbX",
  "key8": "2pUAmTRTeMoaCGX3E8Rrk4UkCuYgzkeyYgennM7VfoZAdBRdE2BCrkhJUprzR5LhimNLeCAwKMQYvjm5b1WjD32Y",
  "key9": "63DgFJCb6PPDmJUmsgxAtyWPQ5csLfHr7DUiY8mgc9zPoJpohpTmEHTjCdTP9EEEKrrCYfL2wFyRRwyLgjKepBxo",
  "key10": "zLkQHheoXBmbVW9LiJKhubaVGvnU8B3CX9L14auRefg9j9RvorJrWGWQJuPerBEvpjt6XdA4rPr6N8Lui4hZkqP",
  "key11": "2ZeuTKbi2eeifdR6fs2ms1suy2L3iacnNoXK4S7B9KAa5QwTonqa6zzLYngoYbVEUqNYxERH3kdx2JQWq6sD8aU1",
  "key12": "aFXvNfooNyTeCaoj4WRd16mzo7mHpUT6FHM28ZvKVnRKQJnfq7SCAG3dcNybytvQYogStri1pidmsU6VKVNMv8k",
  "key13": "34y7BPXhLxuLzeZVzto1u1nMCYRrBp37YZuVPNPuCqdAT9LtauK6HG9AEM7JjA2snQr4CvbdXar1FzRxdh7oqwF8",
  "key14": "4NSgsMSb5jfRRoJFZzULDKWqgksxd87exLL2YAi3bz32eUd3ymhoMxR85PfNTKdVkeCcGA7u177CUXZRB624c5WX",
  "key15": "ccDEpvQWYxT6Yg5UajGCfFkFyS6u7CRj1JhDGJXoR5RscqNMEJoaBbAQEe2By7QkiWi85Nbm9ycQYob2A9qm9NT",
  "key16": "45dcAmCBHjoyaN2ESrV3WCuHiawVvXnac4LEi5LTR8pCJk3pwfojNF4nJAeZnSdQG2K4cAFaoU8s6wJ8aMtfgGce",
  "key17": "2NztkviebakeFcL7QZkATBCFFavRceE28zjgy8aAais4EBtGfF75YJsSsTCjUvEBEsTtkSTuEqb2s2Nn8nksTDo5",
  "key18": "59tRaqeU7VQ3U6Wcd3cAgzW9wS5ZYVSrtfGEN6hUrJEzbuYXkXdoNSuQNmqt4G8TEpNfzT3et7ZGJmyEnM77TfnY",
  "key19": "2iVuUPikGFTMrtaXdbW4ogzRpxXP3tTv4D1gG99BohcyQPS37EkPAKTVrWqTL5d24TmhCFfKE67YgQMuazd95cmC",
  "key20": "4qdoY3gnR5KCh8fkp4a4WyZvMz3TpP8WudBTnMxDyrNytDbX6ykhevewfm3oL2uPVNTKE4NEWykebHyueQG554Am",
  "key21": "42rmxpzkmwNwfvF6D8qBKu7Kvmo6DjAmNfZ4vkXkGgn2H3T6ZwvUsDCqr8HNJoppeTFDj2YuJCXbwvAzKQwF5zBh",
  "key22": "stZFkNjDxYutxDTwZyt3GvDrKXjAtCtGYJE3xzokyfGKfmMgT4KfW9MFqJAetUer6i8BFisLyUjvjawViezF8xv",
  "key23": "5vwtN132Sx45KN8m4uBn52RxGSbnjaKNFHt3Tu1Gqa3kZJU4Foz1t1RYQu1b6snkKycEN3jFMFL2kKtaAyccFrzM",
  "key24": "toz1XdcQC6b84xrLdEZz4s9SmRBVHKW8ncxsqbAp1aPZdiKpush49FuT7zCrgG3ZF9XAzPPPspjJzLdNEdYfKxQ",
  "key25": "4AF7qv7ogJgTgLVfk2GXf7pvx1VYTVwGTRn6NEWPVPNiac9b88wG7Yv7mMDa17yxjrtUoznR1MDb9EogWL12AHbw",
  "key26": "2vfEk7Mj49UouLuV2puNSbPSMjh3MiwUoTvomMwVn4ya5RVBXpXYfSymdzoSSK4mfRCYTM87HGup5WBGE4PftDji",
  "key27": "2Hg5tVhE7C35ruCLMW3bEmRqvs1N67Mz8JJQzAPqy2KoW5MkL548LcnyLk438Z7XRoXjWcm7xs1F4qaxzFqZq2Vp",
  "key28": "2cJnBUVvuiinid6MHUQmkmMpcnv2sMeQihgUzn56N2budUJekgVSc8d1Btn3W8Ch68NxSTYDVMkPvsHHjLTouXwM",
  "key29": "38JYhvboeotNVMcUZHB9adL6Eyew6NvrSuUBLvLNejXY1njW8aHzkDLZTncRzMZB67ykw5s5LubUq8iy5G1oyuTC",
  "key30": "3m4wE6wpBbPe9TxCQPGFSAu3WcGmzLmya6i9hQ416FABCnjx6yTyDg2xEDPcgm26LxhRbmzJr1aReevPWYikF3x2",
  "key31": "qtDUvkJetiVP5Logygcfc9aFYUAtXQsoSH4hPkrQDuo4QLUg6k4DTdj2LNHUwKDuKLLkczvjap5o17k6u1U7w2R",
  "key32": "4iVm4ognHgZh8KSx6fjKdmEqvCcL5YSUon2gsEbLMSBKjnC5fX3AV2eXTTfsmapK7iVjtLdgDqvcTBSy38VwM6m1",
  "key33": "56YGiDfYzas5QpeGsdKdhv41JYVbczQvDiV1mi1g2Cb7Vik92QcVhrS6gMJsYMd4LbSbV7d5JPeAMVzkH2uLPXCT",
  "key34": "4qGW2iNtpqHFCf3sLDQrPTWxoBSsD7T2XRwSFZTubQLSwEVPfqU6hh61zCfuDC38XhRN2oPXXX7aBp3xXZNqtobT",
  "key35": "2Lue11A7Qiu9rPXSNPRmyrgSXMQPKTiEFxS6sLpja8qDwmkSmbvY4Drjyw56ioyTFG47WcSZzCd2TW6SwrKeN9C8",
  "key36": "5FxQpQfxS3Y3R3CExo6LnQzknNcCWLoaJNTNm3NAccVi3PFzEKtVVt15r8UH9MHwHt3nbcTevySSVVp7wKeJMJyc"
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
