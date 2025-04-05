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
    "4V2PZfQ2xFpSdu5d2FPdQL3wZFPUdu4FBeaPy2iWoZgzmdtsX8qhdgbDYf7h63DJ9Kc2V4JrEJr8c9J429gYgKAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MF6Gcoq2WnEsC13Pxnnrvdtrc2B3hF2fXP7bhDac3tBhjMRmrrZy6VwgeFxP97auFs85FNkL6CtTriGCnAqyyLJ",
  "key1": "4JAD3Dyd5Mn6RwHroeXtw9RWX7cs9vuHvDLJiskTgndmS5ZrC1PqAqyFa7g1DC1osgGHsPv3ruwpsZY46cfRkdTd",
  "key2": "2HALDvRhQD2BjGgXpZESpPtXcR12eWnnXq6tV6TfiZPGcCW4RqNmgCsmUjTmMeDjQ33JYGDuEWMUzjVJTMoyvp1z",
  "key3": "SfMhjq3Ucmfd5qkiPUhBtH6BucRcYWkBaXHKJ7xXs7ruGrsakss8p923GkNGwJYbWDN79muTn82sRwZesCGpfsc",
  "key4": "2j1CFgzsw4WodvVu1Ds9aUhANDWcvMzDwpM4V5eQC1iYvoShDqD4d8b9vgfgnkrJgAxc23rhdbZ46smAxTTcExae",
  "key5": "merbt1QYZLkGxYR3ULHFqH5NSBTUmTTewxvgmrED8PB8p3n5zByCNPfD4wdVQB2RhxeTdxLfMygmNBCitMZYdmk",
  "key6": "5krcN2ZTPvRPVmiZ2a4pWhZifn3EsCimVzN6NpmPyfXVpHBKjvxJE2CRH2VthkXsUxBewCJdCvVduwNW9qj7zpvK",
  "key7": "4BrrxE3DEyoHVoa4AihARFZNaUG1fH9VqdBxLkDrQi8vdnDaDNcsEwqCRXJ9grdSBDvwtx8Trd4WWwvjFTFi7ZG8",
  "key8": "3CDa4Y22Nom1epjer7zek8JiNZcsHQFy79MxQrAyNDXPx9QLNK8x8wf2LJ52ZoCHu9FuhTeUzWp5pbnm55RTxf1Q",
  "key9": "3tV9NYWpxoGjMVoCXHr8RWQ7CfqttNw1PdmUzDyQDniXJhWkQ1jdtAGLMCnMJhwdddwNwSkhdK7MEBUtiFmKoVi5",
  "key10": "679gjZPhM8UYfrx9n7CMtYbCiJmpw1JLc8FUmN7xtNbqjGyCsbXitxcxb3DY5mrLV6jfQRrizhZRQMpSrzVaFTV",
  "key11": "jqDhimjwmBeZBAh8hbK5FpzQd6SxWBL5Phr9twjqTKRVd4EunRHjjpworSSvbyycjL291ZPvCgPWPKXKn9dEFQX",
  "key12": "5hpkxbbP2jf5g1VyWLTDX78k4Lk8h8a4PALdvmcmRDkQJjxonpSp71iQZfjjjSjmUwCHbpp3XRYgAL2taMcBk16e",
  "key13": "5fjAVmFjKzKPj7FvPcvX5KG1e2FQzg4NpybpZrKzB33YMfrELdZywMzF4JyQd9FzaHJgfc9dXn84CB8jq9F9FruR",
  "key14": "5cFk4Ky3dDmUKFWFFQArWAvXaqgeRhStmzjZoFbqtEJLvyemswfEJHGD5V2bDaZrL2wn6aXQsi1PtKDanF2wtpq6",
  "key15": "2PQQ8qYA3J72uv9qgQJpPHKPocXqbyUk4DnfaRxgsxs93Qpj26mrq78nbQXGegwn1QjPKMq6FZbWpM5viT2PoYKF",
  "key16": "4a2rox4ZzPH6e4Rx6Q38JDqxB2XjcXYSQxbR5jNXBqKYpeW2Z3boBLeb9Tgb53VMS3rWSxk8nvyAAthtMMyqdyXS",
  "key17": "3CGXP681Dfu9EsMBWDptzE9F1U4gg58XiNnrTpegWjxpArE5Yp7kKF2yJriYVahHtRg5F7xG6R29XstrkjrH7G8K",
  "key18": "3r84wkH314VtSfebbGFHD71Et3b9uGedFmMWueyFXSKt49mqvZmaXjZM1NjaPwaMFxGvHWjkD42qbSCmxVQhJAyV",
  "key19": "5VUy4FHb7jXcJZeFYg5AXUqf2o1HiHgTzxr5gHSTmUBYF8n9R1rwFAm9oD1G3qwnvNZTJDWUViYiy5HS1z4YBFpZ",
  "key20": "2cuinkxh3EdYWiEcdRo9nhNgHFEtjH4u6RfJTLGyhFUMsfGFfUpjVkJwh5FvcUeqTEentSVPXRnHpa27PbDxNP5A",
  "key21": "ArwXGD5t9XoN4TfswPBLnB7U8Jc87rZxLSUUJDiQQSfHoatCgJPFwAq7a3H6uZx6HNaqxsaTB3QrfRTUbrLyEXE",
  "key22": "67emkXJnz5JWXbZb6GuvkBZ84ofGrSS5xRDcpNRj5fKsrYva3D73XKrui9zTW4MB7Wbk9sZ59kwDm8Yc6rssQWwE",
  "key23": "3xZwvRRuLkTEYuu2QU6K7Vvri2LUcDy8mbVrKzMdKaTTNzvSbp4u86yEnMNWfbDM8GXTc7WtN24bDwn1UwWqZ9LH",
  "key24": "39wSBoFK3xJWxWwUz5ooz45eSkgj95FJHhGutve2269vbTLpx3HP9jfPuinDXZrnRmHucR6pDPYRFWipPwHXpe2h",
  "key25": "37EizXozw8jpa9jbVfY7pMDZBzdUB8cj9BPxq5BbN85r6DHz8uLkrLZ4788jXsmYM7gmghd7pyUAnmLZ2g5fdgvL"
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
