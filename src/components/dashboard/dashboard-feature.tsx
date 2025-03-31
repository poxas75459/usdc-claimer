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
    "CK8fxhrNLYPUFLGCwoFMFsTSnXdJ7NJ15Wph1G3PPZTZwV1v7Q6LREezNFSiEdyzdrhedXwJtb4Em5UCeehwA35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BtKChjPrHeRSDLP3gtHirtgGeTtdgwBb73FHMGczLNk6M8fvPPaAHsN73MRyuf2Kzn7d49cUKCyDHEffMFtzwCf",
  "key1": "ZBe352nZVZrvKtNwpATg63WirwWc2T88ZcbQcsz6RZbm3VSzFJd3SjbUbMVCe2qiBkh3yMdKkx8QM3VDEbUwNPH",
  "key2": "62BBXZxq5NQNoijTLJwudWGkkSMPv2R9jpHzLP5nLso2eSAEMnswuN7LynrBEntG3mY9sXdckRmgixXbVEg8MbKs",
  "key3": "2HqP9HgT2DND6qodnaWE75tiBRgXhtAkGkeyfXYb9pknfMnF4atwBGPi9uw1hahsiqhhf9BcHM8fTuTNnFVJ2R2Y",
  "key4": "5qukVv1jJJHaTMuGTBpcynmrEveGGeTfxTBt3tAzYtQcRg1iJPgiAsUzqB4J4mQ5SBWi2Pam81vGCqvRE4z4WGNm",
  "key5": "3HxjjvD4rvN1FYNLvvbpRg1mcdzniDFmmPiLfgpEGQpUGBqrZ1PWYY3HtsD6NMEw9y3JcLF6ogEf1A8KoGgaCd9o",
  "key6": "5q26fsFnn5c5nWwoWz3DcDsx27YFMNYgqaHhHyZhhYXsnxqkhi8muJJA1hWyPGMiLNJW2Grg6WkMi15SgHR8gDaV",
  "key7": "xHX7TYMvrb96aP6stXTVCvVNKk8jz8JXTGQWxzpVu2JMh7tbYt2ixCHyiPXKaVZPbceYTUyzKWMpWQF6rJUP8S1",
  "key8": "2mN5WCtU7DBah2Vbeogf6VNNb4QYhHsdSt1a5mN8WVC4La1BoQPZPATsVFahY6TBDPN3UwfBzXenfkiNX6RfngZx",
  "key9": "61nu6CKKcShCyoNCGQhCf5EiFA67U5UJxG53KsXVS4Wt7g6gvUhwJ32VA1W3C2xmh6w5rwN6kBEncGkcp6Snk6mH",
  "key10": "3rtizovzZm3NoDBHTGoKff8rwcYTCHy2UkYJqdJ3ZCvpN7FV52i2G7Akdf1d7BWMPME4k3f6qEmpCYWBKuAxf5Zx",
  "key11": "4aSsVeAEJAwwLAJBewSenSz7a4k8g14DtPaSfGo1LvRKBdqUsWzqHtgCr47ckjeFyA9y3ygeVtf6MApcr6GkgWoG",
  "key12": "2mNMxpmxacjFW19Rx3nsP2eVqejBBb3cWKon7aEZradZzkpYYu2GStWTjsVc2cTBhqsSdKjfQ4CfrdZtKRvhU8or",
  "key13": "4sUo4y5peGmqgzk1zv3aN5Uyjz5J1Y6tUq1KBzFbKVPibhEyrHqCN6196tfLKN9vPehp2UXWrFcCoPKx3TdKDvWK",
  "key14": "4GKK7C37XFPU3ZzciAd6gG4x4V7eo87pxLnKZBCtTbKAkVrpaiiYuiEePLve8bPLQHmpwHKeehgkQHJHzFn7EbKn",
  "key15": "JEz3fsTPcXtksay7MaBef1m5hVrKGY3vs4xq4SjZ1zy5MaqHF2rH24eV71LRbpCg2epNKbr4hgC9tr43fp4E7At",
  "key16": "2PGK2bGLdF6bGTkr9KMFLaNB5MjGU59Jg83qXT7AH55R5N7Bc5XiPqiSQJTpUSsMQtswNdt8a65wZcuUHbtDV2xx",
  "key17": "2SzVoLZ6jLBnVPFp91rf85dEvmAPTMEY6ysbjFW6NqXQ6wmMu3tKGjENNTvnjr15pw5UCiFBZnD22MzYmo35pptr",
  "key18": "3Ljo8HsekDDZNrieJuBzmZkGbZvc8Y963i9DVzUf8hBVWtQdrrkC7xLJ1nsMa18DJnhwB6cAcEnLUChaJMXyNbQf",
  "key19": "yf9a24j36GbiFNuZWpdTrgoXdRrMNTJMaHi9YL5AZgiAu4eWteSgAXJAyo6GkroRdRzLkvKm8ZNQnzKMVcvwh5Z",
  "key20": "W2MscXihLpEmHEeUx5vBPwSat5cJqmtFhp37baDuUw2hsnXZK1Q3DV1PuhVHAsxamkNMqSeZQYaRodv6ozCUmC5",
  "key21": "4ENTZgYgRiuWz2DX7GAfjUFt6RBrcPCCio27dBZtgmDg3KFXhFFnyc8Sw5bVW25H2qu4LzhME6LMYemD5436fHNR",
  "key22": "3ymEF9a93tFgtyPtH8UurD8p5KCQ1iHsdHYG1J2hug4trpd2NR2FroLy9ojmzQsMH5jnv9LdNjYM1gmYe694vdeF",
  "key23": "3Uh3kVmnjezvBHWziiqeazykjT7H8ZAkQjnfCiJ4MrBJ6wXoXRjUMesEHthtVvcu8gNzbB2mERaVfWsaR8v5AjAE",
  "key24": "27jnkdDNGWev5vZ8Q7SnDpUFP4V494FRYvdjVvVSFiaV4VxoWKEDsvDJTXbXe7m2eFP9DUweU8uVU8sKReux28xg"
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
