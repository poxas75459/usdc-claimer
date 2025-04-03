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
    "u1iX8583WWRyFsSJebGKMH53cVMWr4bdsX91vRM2SfWxmNakZt8LHAT1DGdXdCHfaFZdb6kL6wuW2j25sUpFjzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmwiT3Q9LK6btSjhdUmfRAV2EYhkGDuY41Dsnppa5GNToucnMmSi1AbG8YAnPhi4fKn5N3Y7gkGUpPF14uiUXrx",
  "key1": "34Yfwmae57chiWiANurzUkF7GQzqrbNZQFERHTvQrs2VquFSLxg4Pyc1HWTkEwpd3nwMYkvJQw5Lp9dXgHWbUCKh",
  "key2": "zTBU5JLvrpANA2GgtHxQ3k19kv5gysR1ukLG1aCNUkWYA9YXNg1Tyy8AZeDbHKJhrtKJAGrdGS728B9ZJfk5Yxh",
  "key3": "4sQt7Nguj5BKzNyb7iSjLGCE2zfNgFbmvdWs5hD3GauFvm8UHDXp5hGXfdVUychxVKYBTC38xz2nD88Bx5m6UTrf",
  "key4": "GzcsH14hsQ8r3oojgxLfPkgiQ7VtQUqCm7A6j8quip49dfpKeVRGYrg9TEDz8PSzsHjCRvSzaCMJMBtXPDYrVra",
  "key5": "3Up3psmZansX8qPAruwusXA5oGsnJzHMs81k7nbkYzLEutH82KsLeRp9hcFoeU6DtFrKrMb2DnJVVDgcPis1obXp",
  "key6": "4WuLez8ube4EfWQKfpDt1AXvEhykqvFErnGRkAfcLRL4t2H9miA6SboXifhoRRXsnuVEeoocw488uaEVc97ij5vM",
  "key7": "2X3GHhh6DgEd9mLfUscEp3HPjdUQ37aT8GcegZGHTY1ZxSU8qC3VuqqKLkoyNAQRZp79ymobNLXa2a7AznWye275",
  "key8": "8TpZQagXZbjBKjRdHJR9zrZaWfV3uWAeTD1asqtAM126T6dg1FDddm68BpPAnM7swiwei3q6JBu9hpU3mDsS9tW",
  "key9": "46ZqKAci9cZKhA917ZWq5T7AewZubkeXi31981WLu7QbXEdCaqpMnDpJ5ZrSL23Fc5FfrG7wo1YHbajUXn25v4oi",
  "key10": "2yxbMhuQyzXmKaj5aV6HCaTuxTpGzEckf6a7DcS3Cf2pmETfW4piokixz2oZm8WdSVB4iZF7SgrePieVvV89MdhA",
  "key11": "4Fz9fu4mZsVnHYHYQmrt5Ahm8y1H1fWDPBAKRgFyWSjt5G42WgqmG35RPUtZpsBDo98dztM8ropnEt5mtH71krdP",
  "key12": "35WujAXEU6t1pfoBC1CjqTaqL9mGEaDGdzrdzJktcwgBz5uZgvPLexrBgcEJgFyEapG2QzDBvUB2GkUGCe24ccPo",
  "key13": "27zUhoquxsgVMv89eAdQ4bnHUzzLRKQn4wxxbqwzMA59iqVRW4roiyvJdNqFu5Gk9mtinYCJdXDztPNrU6TpLCYB",
  "key14": "2feRHoN3Mj22CoijghGoeGhhsnonu8oyjSGMzzBodBQmM2P5rLQNK1khosCPvywF9DGqzSd4nyKuT86dtkAEgC8R",
  "key15": "4cGK641zSaRA4C85tpngAr1CgEit4PEeBMcQ73r3TULQRjZ4XNMyYMtYxGA4KDDEM6PXnQ7wDmF8n6nZkzXYDL2g",
  "key16": "oTuKUBDAx1Yk5bv7rmK8EPAiLaYa2JruAnoUQ7BJUnJcBDtC1rBvrFkjHProgs62V4knQpdep3cEKh2yvWDMiZ5",
  "key17": "5jXwydixWeUc4QEsCACyfb6WpcB2W4asopoiRrx2C3YEnSbYSoKYJwrJfxtvJhfyAqriGVjd4PPmigRemapfniXX",
  "key18": "2d68ttQsTL8i3bsUKgQye9LLaSyGq5zqwk8wVbdjLwoFtnVwZDWeG6qv6pVF2iCKqrDV3nm4CjGxpvmXPNW7jLGV",
  "key19": "4aVC3yktjNLRj873uf9ELUvPAiappUwofH9LKJi8XzahPspEjCqEpTdZac4TGV5E4YF8r2jrTfAm9hWkNx5bLKGF",
  "key20": "gwexEWvthFa4y4tRbkcanREfDHHf1wKkByMCCpf7H8FSuigbkn1dqYhZjK7YeRgnw2k5rCQxSP8NRwhJwMugAP2",
  "key21": "466vKLMNarGkWtRftnnRMc1nA4x9nkxcBr5Z8gsnnmtBjmb7vRNpAxhqdTMgUp3YBVF4Gw3bFxgX9EheyvDq3VYc",
  "key22": "JFioptN7cRDxNPWCiJ5CGoeWBqMhRLGEkCWfkFkwdZHftrPEAdz1FQwN2okmSRAWNiCTyrz1wJjTyhLdECropFp",
  "key23": "4wsjHbZPtmNxVLLjaoggKjQsZ1WHpw5USK4bxVmQTtfvstR5UspEcnHAHrbswP66PMoejK7zrzcYNguBQudQhuwe",
  "key24": "3ktGKdujqDj2EWMKNmTK2tbBViVALjn2WRpfDUrhEWjv7G4qdNrLeieQUvVfSgFTd8UGuj82eoALoWWyH7mmcpU6",
  "key25": "5CTWAgYwsnmW7FcD18P3q2d5DwdmvP9CNDNZrfTbhA9X5WuhRdYrethdvp6LnbbbZzFY7ZT8gt4CJGxYeKcCGnUH",
  "key26": "4NV9ySLEvZCFDS7PmcCFZqQVMjw8okQwnkjCWupDBexcgcgAS3e4LSAVoA6NXK64cZdWgh5hRwVvnZQnBcsMUtHz"
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
