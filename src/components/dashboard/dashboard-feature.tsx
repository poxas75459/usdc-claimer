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
    "2Yi4UgisSZdaVYseFWgKAunCZjUkJfLgKx9xV1RMog2wuNPezck4hTTDwDByHuw8z8TTRHSibyxf4Z37UopuWy9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82eZC3V2iWz23uQnZp3RoQ8QVxEfVbdwX4fMwiK8WrsUPd5MpBDif9qittBs4ggiqeyp9pHLAwc2pyRpj62x939",
  "key1": "26R8BzLW7euH9bw3EcBhUyoPhQAbti6FTLNQmfK56tGoZ1bT9PP8KT564Upy9z5mzAaJsG4uqX6EFmQ7MBDaQ75N",
  "key2": "61gk5Q8F4FBaWookz4fSdtqqJJfCJWPX5c6wx61kaVgWui6AfxeV8bHVjkMdFBjvdZQ4XBjC9rATrjTySdrxjZH7",
  "key3": "2ooZGnVS6ivV2Ns4W7kCKfBTeek3aZySdmNFcz9ZoAcxc3YoSZBXYstTVT8yuQ5JY6rJP1JQxrZo95P7fF1KD7xX",
  "key4": "5Q9KscsTUzrpPtGtTrRRuYzkBJzAiVEnfbF2Fts4WAr5z6CnDpXdfxckHmJdCsAKkwux5Ve7AjuChtRTDVjbnZGn",
  "key5": "38SKB3jELg8vLGFeMR4vpHwUgEE6u7SJUFwdXM6XzWukpicPHKgBtHcdQnpro9rZx98FoMfG92dN2NdBG64ZN1U1",
  "key6": "2xzXv6cU19X1sqLmV8nmkPXof5j1x4VMfpCMhBD9gVWYG6W2jTqVronmvHNCnBsNxHvAQMPwhJomqrDVezHGJYMd",
  "key7": "2xzWK4DdBiYnBmXgZUvdvUPayedYDpKv3PBNiFLKxtm3CQipgKYCzcR191f6vAQvi68jfAx9KUY43DRY5yqkh5ut",
  "key8": "2UyL4C1j3FWxCVbNDZiSByFN6VRcpAMDejYq94JEwrg7Bq6wiynVB878e24UxaZAXbDVWAZbKUENsfnq3ns3nsAc",
  "key9": "2WF7jDqfUPHSuHLarrJge2Ktw9pC97TMdPLp71CMnGa1YNvk9tJXFjC9N6HyAY2So6WGmtAcDKcNFWcUUZWjktGD",
  "key10": "2nndJzAXNs8j9yPh3qX2YpT6m8VodqBHXDCeuP5YQiWNnbPEBNe8Bjj1pdnETWptQ69FPzY2NHZ6mgWFpQT85xon",
  "key11": "GyBiYi886kEohFcjMMMtjFdeFiC68Wfm5QMEeNLgaHMeFpkG6pHM6g9wqEvNgJg9MwPV5LptDTZvCuBf2RioCad",
  "key12": "4fPKWwYomi5Bf5JwKXAise1EgNev6ed31T1iVsRPQ9naUN2ciQJaGfPstZmZP2Nf8iMWdiBt2iCdSJEzSATNuTDg",
  "key13": "2fBcW1v6KaD6UfdAsHunfgerysKFtxs1QBbebz4v2DBHpJBR5Rnr3KBjZNjdbqbGnGHrVEtUD6oDLsXbdNYW7S43",
  "key14": "JHgBJM2DbhpeUoGLiZUaBVZTAo34s6Vnd4jtkgrrZAuuD6iRBtnXT27GydNVwae3kjM3RnR1L1z2ioh6KKeB6UB",
  "key15": "rFPCfnLRcxJ3zRpjGGNKpTvYEsUdV1jJf9V6WXK237KogDoAZ9kNGkGU3t7xiCmsgBPjGCcvBcRBM2RGCNXC3ez",
  "key16": "5h7iJJSkA15Uw8nSPMWzEsjPPSiDj8ej5RKj5f4m8Vu4BgxM2ppRn9MvhTNW3YgeRBDLySwkuak1jrR7gp9emoWY",
  "key17": "4EwdBKoz3uMVrvQUxLYhMeMheJa2AmrhJ91NUVfR1MCTMPafaRbaQFx4XmCEtWubbFBfKiN5fnHkwdJY5h52H2QQ",
  "key18": "4HUKc8CvhHaXJ31vF6sX22biB9fgYLUXeCxPdUcSbAxJ2ZS1pGCbwWikhgmb7TVUHisN1nL9G6AF9gjh3kUYmDEB",
  "key19": "4FGFC4mGJNDHfbPkBEgTh1jFyKDwNsi9sVyTujRyHLkzhr1S9hM3VupmdCxQV7Pm7jXsreccy2DBCJQVuVF8CKzq",
  "key20": "3r7QyBgXRhh5ZoxhJmck8K8NXTSj16DS4n4R8382dCQ1ge64pB1ySSz9zTVeDzEoTADmDiyxfQ8n4N8VS8Ui5diN",
  "key21": "3UQEcPHMNjfrXraXjycfVtscW1Lmsp2kkogxATPtN3PqtJo8MGNtnGdPpBXUTZFS46ZcD5r5kpgToWDe3oQKkmRY",
  "key22": "4gRLXnmCJDEbcWQwYo7HHvckbzncDS5ys3C8XXBQmaRjZA7CxrY3v6zPZ3be2iL8hMbJ5mX3f4HxRVbYx1e6kdrj",
  "key23": "2imZThQwgsSJ5QLBC2B3BnARwdPXvhwsFAeEXUYaUfHYgd8jnG1VAvbdy6Wn1aTam9TstEnwqULG8U6A9teMrrs5",
  "key24": "2DUD8mfQFoRbtAPF8RWMQbjjmQjtSFz14eBeXsvD8JaY3Nyj8K3dUd7HM1gJCnYiPTSAqHGHeLJ2aBwWKaRMDL3Q",
  "key25": "4PN3fhwhLCEs6DzPYAxmqeRy93K33nb3prBycv3T7GhFJoD3Xji4RiXjK4U6gy4C4qpNU1YZmaQhXAJG1BDWBpWY",
  "key26": "4F9RYuwpowedxLqPQG47ZWky6F3ZSd8o8EmEMgWsChg8eB1yLSoW3u6CdmXLVf87pYFe9WkrpqRGDaiHoc8MrzQr"
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
