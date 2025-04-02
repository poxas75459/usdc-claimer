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
    "35pcbph4adz1iADvwTzPf2iE7gZLWqjfU9E6iTqkixmtj8XKk5ncwPnk8qTFUJr2atHH48ybqa8FdV98ZQpPFNgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j7EiXckVYKnR4LBM4R4BJrSBtUf92WVJSVbwBWRieA5dhqpjo8tyVbt2UJpPecdMzqfNVCpsTur4fV1UKfch4n5",
  "key1": "23UAY6fuYFEroRT7JE54qwb5bfz7w8D9eBEccc21ofdQ8QHJ5v6S37Pher3a14aJhRY9Hg7f3jk3PT7U1fNcz7uy",
  "key2": "j41LpMJkmksHaA6HKpB25JFxdQdP2EiaYozD2678jqErz1e258bUKwafXgJ7A9CdNwKhBDHegNrZ9hn5QX14TPe",
  "key3": "3mgjrvkHyxnsT91dYWpFHSMAvUjDBWfSLLS7J41siwgTRLQEqbzLP2kRrhqHYTLhhP52zPuZCiKJKwFwojv4ybnR",
  "key4": "4B8vRvPwu8EKxqLxFbWTkjPybhWdb2kQsPyna8dwdy2TTd3K6kbi1xHi7334invz38EXQHVZYrAtF2RaxSSExm7m",
  "key5": "2gL1zeniKBLaGFThLNCXktwLSuVrajRivgewNf7Wutux4mxsGbaiKo3QY6ZkWXnmDEFugqtUm9cFcAuvM4rBkzrM",
  "key6": "3y4uVh3vsDKK1P4Vmrv3RAv5DVnK2KUZpfPi2gDEPziAyENJDJpvUbAGUqgUJq2XU5goHrA6hTEZgwqT1AVcZwqJ",
  "key7": "5YvJ3eaSiFbKp4JhNpoQ9LXscVzhAnSbkTFWrykVuDcjiwAED4RcdXZd3S62p7DnTDHE6MY5Dk7vKoZrF2iDNzJU",
  "key8": "48zmVvZBMD71Pw4jt8GCV739hUZRaat7zXZj944Ba7d6cExL3kuzEscaP8wqaUAkUiof2utZd13zEw2aXSeVQ8D1",
  "key9": "Dcwwg9fpEkfNra74MKZNCwt2CVm5nhoWDnggaJ6bqZbFK8iFH6vHviH6hY5TeKG7vv8XcigafvvLuVxS1zjqn7K",
  "key10": "2v2ir3ivxrhNWoJaghSMhyKm6cNpCcT9wvad7o29xGFFqXcR7BULSdPieDGKXBHDFsfudjCWG7dPNFPnR5YeoRmj",
  "key11": "3Qg3VnLPXViGbaJV18h91CmjLm89ZiPRs52kphgKJzNRTMYDD4ckzvhh8UqRaDhfZ9hjPmf5qFCJjmshZj2SmpYP",
  "key12": "2fPAsxx8jQhuwXGFJfTHtP7Qk7fkQrKeYRfvAn8ZAoubvd2TppFDvV4mB31MboYxPaoKM1dcSFj55hAZjkaFkAxz",
  "key13": "5HDDNSPAeuJxhuWn4w3LHapvaEf2V2xwbek1R5M2fLcUTnfDGLSR8omhgijEf6tkDwMuGdozvmTqbKQhgFALwW2t",
  "key14": "61MYQy1cbg4UaAC5djBJuDfWAyhF3LZZJ4ajx2drHYCXNS4hnReusMRQobvwADWThoXooyR2JxU44cofUu5Kf4n4",
  "key15": "3oLrnNB9rb2T7LnXimygQHssCZA3FeN13F8dio61dpJ5pPqq3vput7Mn2FwrngJdsyAJ4DMmbnDQGg1vN9eivPEu",
  "key16": "65TrXjgaQsr6cz8mbvp5HZUSdqRKZ2Xr1TmPwYuZKVkoFM9YrhcogKUHYsctKwSbssu3GyPTYAZ3zmaurMX1Dz2c",
  "key17": "mPQPmWLdZnmqEuiRuqFeND6i1m8rokDuLTXU9NsHCwugnB8ck25dAWrrA87S3YJ78whhb4m7Y65Hf72DHUhFuqH",
  "key18": "58mMAPjwYpsCwmLbqNsVjRHW3N8GbbWtuciWVM7dkjQVqRbgYeGGDz8BinUenNQj9ZvtAWczNdKRdgmaMPHbp4QL",
  "key19": "rLWCWXc4C9zV7cWtpLRhbnBMFcSaozsJZDjrNJD8mSK2ES4G5juA44iqvjq4DMvdk2PzuX8N3WYaAzdHscqKrjJ",
  "key20": "3cZjtDAboRtR6q9YJwPkKzU5RKiDji2GsHz74v6nAPvN7xboBGcZJpsVUjyficmgM5GgB9RsfXoVgUyrcNrJe47v",
  "key21": "3aXGPTAycZNANd7mGFFiiE3GGEZ7TKERQtipxYkBQY9XLg35hmcZBwn72cdJSQxNKGUKEUQm2BnEaJexB4jSvKT3",
  "key22": "5qz8jLnddzHLgVfBKBdKzWA1ZBXjBSy2NyCGTdWREpsmrUKeebrcxVFm8Ubt6FujAXXfTHKzH4nsYTH3Mgvog1Tv",
  "key23": "5ERZGMvQ1PaacZeDhHonK42n9JXjxNhdtPQ1D2rMePwmsk4DBQmsg9N5z9KhRFqS5F4Dv9LF9joTEseKrkYjNmGe",
  "key24": "kDqR6xnUkKPmbYmggAztGKFt4gRKGFfsjAbqKdAF3XuA7twpeX1rLYxCtdDWkPLZ5tZPkqr4RkWM69iHmdGcZqT",
  "key25": "2k6vMchpViE2F7uXdmg84Wd49Gs2yZgEuNheL1B3wwECywhuaby3puxgjuGAkQyS8jr9iowyvabaSoDPVL2tDWyG",
  "key26": "5ngL5ZQRDjjvY9Jqb6UfumysaV3RPKM122zhab68doLwYfYAscZBRKwNmogKnSfqHsvMuneAAF7eQvbJ3ScirDdz",
  "key27": "37jjfXaLJ9y64tGva95wjwzLTJz4jJ1egr3uUnvfWdwpCFCQDKE7kahMUPwcmj2t8ubvL7GXPc4oBdRZqCgME2F",
  "key28": "5r8UnwryP4ebaCjmvvrEppy8xENk44iXdq35LiEpY1exMz7GRXqz3eJWoX5cf4FhskpnTAQwxMacLbf5HPpv5znE",
  "key29": "3J986sdqrRijob5N27c2MxREYupkNriEiFvzo7QdDT5Dn3RoPfxcjEH44y4VM8zJcngnJgiK13qhQvGcxKLMB4Xg"
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
