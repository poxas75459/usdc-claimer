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
    "65PXrkFza52wiBRZasPH2HPfSCgL7JWvz6kgYWtcwnKPNaSbss2KbrDsMZYS6rwfyTPn1LFYbZxcrG65sTdjuSi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VWoj42TWNGB1rvkve9QN6GyRY7fVLfm436QBCfBn6njTxn4XS3yYnW7oKdpnC6LaFTF4X3Hjj3J6NerURdvL1m",
  "key1": "47MwEJjpyYNy9gGzv3P2BZ3JVT2QW8tp1KYAy4XviePck4jNKUHUfyRD6RAymcsaaWcxNMPwSWjZZZrsNES4nSJW",
  "key2": "419ryJxqZbDG9vr2RUboT1xnyQHsgqbiL8DiTZguNj4xSz8e1aCXCik3eHT4fTE7SabGxk8fAijk3GZj9qCerFSD",
  "key3": "4hgDr2xd9s168PN1VAvBp7DGcHNxEpZgTXBYfr3Goi29ShtUN5yUkq3kHSQaDiZK91karTxY3e8eY63A2uHEhwZK",
  "key4": "2GxQUSC9Tcvf6PW6UvsrfUU9g2WsM3pVeLyuBLomhuAPYsxUxYZ1nm7dz4VUfCpaiWpcnjveyH1gN4CZCG9vJp4A",
  "key5": "3SvLgjbkVhq4PnqC3ewg42R4ykbpznJrGagh6UgPbL8gtt9rGUFYd6exR5GCJdC3UYD8WgCx6mjev3ZgVRq2T85H",
  "key6": "57ZjdsS2vLNT6NjJRwjmeCmFxGuLUCqnctN8fTDLWrL96qEaAQyvHFDDrXUHajWiEN4rDo4xYMFA2fYbFwUp6uMM",
  "key7": "wKyHFsrDHuMTiRj1JuKRNvDQdfcfuvDaZV6E5XXwMr8FuKRZUE4BETfhVSDA7ZsNuFRLG5XkNdNnXamtZ2PVXfN",
  "key8": "3TEfX8pvjLMHUT5x1hkuBy5KhAS1nfSKe6RKEmWNnohmBN2VZXB328eQHo2vcxfg3SAXMCPtyFKuCy9UK4Pm5eeV",
  "key9": "5vSaSpe2Qw1mhAbKdRXGieQ3KXXjuYbrerVbDkNkrFi6H6JqhZ1pcKjNA49vzs4saTtC55h7wRpmRU2DqCAAM43F",
  "key10": "2eAWt4UCQLFRimzbeHCPxGFe5a6vVYnnmJYNFtd991m4wKkgoX5J3gGmH6S9erY5uXpnDr6edapPJ2GREWGpkVsK",
  "key11": "4Ucr4LRcLj38X8oRCYt7KbTwYmLzoay7VBheiJ2pqPH7bD8SKtwshesFPBs1qhdrNktRkzwSXLCNrhMZe4FDeZ91",
  "key12": "3pnNYzAEvr8dk6x76SSGtbmQa6y5fh9iu4sjk99vm4pexTdgRxcEYLz6XKzPU9p9DqqdvbAkWEKSriLBihZ4uX8C",
  "key13": "5Kvg5b9WRWuERngfJX8CbQ6dq3K3QN8C5VevzFTsnogiEDiGoQYKSus3fkaMap8RvkB6319pNNSxYdJzSkgSNHTr",
  "key14": "YvKhyHyPr4Z9ipW5pV8tKmw1yfZfSNqmvxioL41RSDjHUCdPgwELv5PPX95LMeurkmSHDnJt1ZnxBHWtLefZw2U",
  "key15": "4K8sCbXpDX9v97iiWkKLNYhTZ8NhBHrQXEW2cDYkgznqGAf3vKdMoUDNCCGwszX4cPnHqvwPc5w2TLgnjquoLJPU",
  "key16": "5H6G6udVsn2L2SEN8aVGtprrCEL36BX7sA4MPqnS6qsPZ28e8J9ioVmHnk4F3GRAkScectxULZdv5LWqi3T4LmSS",
  "key17": "3dhrwSVGptev3QqkqryjNsE4mGZvJa8xhrCFcVJWC54gaHQWk7joYTA1RWb8PKC1BrbY6WpaWdiMU9zGk82BWp17",
  "key18": "67CxsuxAvNuaXAmzGa76TQLr9KJhurgAvAesVAiay3ccKk1EoLi1Vd7UftAvJYnx2xydSyigAfumiWTdxvntD52S",
  "key19": "5vDugh6SKN2VcgPJAsyzyJ2VGLBD5dSF5uXzZZhPt7S2zxPfXaLPXGMvGmprttAATtUFdbxbvKnLBi6New9zDu5Y",
  "key20": "44ygZt5pgKyn49fWq1tjx6KR8xuRwDR4DXqs1F38Ur4jPcRbXPGi1rFK7Z2MS3mgL6S9Ein5YGxvoef9PYqbwaRn",
  "key21": "62Fu3iWCjTp4JwRR9WV5jsQUdYSiToseyyTshU7vxqKsZHqJ3TCNEcy1fFojkhFU3o28yo6CdHUFiU5hPEjy6Q3e",
  "key22": "rDQAGUemFWdeHdW6j71fAX1sTXefpR7ZUBf11Eg6x9qN2PvbXG6vZhB2NR4mZaKGzrgsKUdUQAnhQ9e8fpCApW8",
  "key23": "L8ud37zn5iHJoYmmuGRJoHRfP6SFVrWHJJ3GwsKahAEXHk1w1grRacDk9hgJb55WJEjCjdVYiikZDkPPEZFtBix",
  "key24": "4LnqApk8AaSMJ6KJesMnzLUcBs9oQcBpZSSKA5ui7JYsNSF9mbfjCzM6Sq8qL28q2TtEgnkr9WdRT7LGMXxnHzYk",
  "key25": "2oiyy1FA3xWCwXL2w3ukaVtFDVTAuCCki8h3Bzp4sHpeuW7c5g9Zmff8VAM3WTrJqtYfWT4T8sytGhpQ1uWGzjEi",
  "key26": "3CkCi2zfXTv5wxYd57xfGBy6VhD1niJcjRLWXGVA7vFUgWjywotf56yrFQ67iE88rVhpinkAcKorz8xDFxRswFge",
  "key27": "2ZyDFRo7zmN1u3BE3MHQNuwBbNGbHqitpqrdyqeSVXToosfbxWv3TYasurwDB5rjb6rt1viPSBiPwLL6wwWToqhR",
  "key28": "bNoAJvcVAdhGaN8Mm7ydDWpi1dA6sUt5NnZFnB8AkQt4UY3NxJuJ8dCBSGCgKGp4nFMn93iWuNKfFRu6uUM7xT4",
  "key29": "5Zkbe79s44dpBwtv3Ngdb4zeDzJcwpA6LBDJCwB2Cup1WrkcoxBj5kN45jh68ZSkjy1WZUsnyZaSevQMN3CU6SGs",
  "key30": "4brAwynAVySZJuk34XmoRgdZ7Kbw931Q9FcAr3c5aKgpmvFVuaSv56ScxpANAwyNXTgFS6rj3qKcV61fDt5wsFui",
  "key31": "S62mNmEwyWpFURc2pzXbPFudiNdbXiysCkn5XVzm3TMygVcALe1BDetDMXX1AbqCxLA2RKhwiSRGLDmqR2LVhXe",
  "key32": "2iKtJnAPNHrf8uUS6gtUWS2xL6WtdcAGgp6AfDbzyJd776H2xWRXR86hkKEfsJ1wZNMwcA7ag8z39ff6tCftNaXy",
  "key33": "5oWLjfx1iTk1LhdtrghYefwt6fsyfkpMN1fDDM86N8ESJrcbLRUoJ1BCT1NttMfusgK58Z7j4vLSfA3GNM8x2Sbr",
  "key34": "3gGPWFy6RYxkTm1hbM31yq8tBwnpUj8musk5e43F1m5wA6BtVDaesn8HhH5GKH8evzy1xTzDtyS3CGAbvi8dEiXz",
  "key35": "4wGaSbuUWhVRYqXmevi3qWjXgwvKvSZEEJovdQMspWTn4GsZVaMMn4SoLjQNFufZLxEH4KfmGmS1PeDHWwNVq5vZ",
  "key36": "52ZQ4oU5Rdt9YTBM8h1aWcHcC9MK4vkagt66ZUhL7VSsHGSe8EKTXHPHyCRWxbgQB992NNh4W6PBXMKDukuGiPrs",
  "key37": "r7BQRBzaQ5pem7Dt6JYwmedz7KHyupCmY39t6iUc2fi9EKzgyMBHPzHV9PkPDSxPkLFWDtYdxPGBV1v4Sp4V2Wt"
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
