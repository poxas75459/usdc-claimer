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
    "31pVnLmDPPbghPoK9jgHhNEk15zhra4AeEfi2QryXg73FNggDoYcwHocM7MEZKuGYoo1nrHLjrvFPQZdhr52pTNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYSboW9pZiPMMvVjYShreCejBsXC3PjoxJeGNayzt4esG47afVo8dZeaxFhTj2MFca4TVPPQmERP8mD75ckGXGc",
  "key1": "2F6udvxTodFPBNGsV2eHQQwVG5DBsfveSfnFMUPDRNay8Tc8drKbkWBaRnV59H3k7NtEsN9mE1HE2sB4rB9phdj5",
  "key2": "SQAQ9MxTR3QPeeM18FSLKQX7PvEZ26sxx7zKwbH12Rxt3Y9qy6kmQGBX5BMgdm2GnenY48Frhm5HNS2LRXkRx34",
  "key3": "3CVVYdCWkoAwh9xwcoLs11kgSFUrYbawCtDxaoppN81TiChWzNCzbHFV1mEJPvQWSKUjv6dv59sgueZzujB2MK6C",
  "key4": "3u5wLP9Qyzyo9g1edJrDLN4y4m4YofpissRHq48yXvzvtQ1idrvUemkm56W1vEULzbTwyTd7UvHxEtUv4ZyxuJ8j",
  "key5": "Dkj8YAv2R67QkuzgpyLeH4sj2CaYbfcEhAKLTffscNsfrxD25SJM9U8jQsCUUV7eQVT8aeionmDUZRoN6WnLt7H",
  "key6": "22qBMU33WqaedJahteTuVgkKiTLwWtBzqZ2p38m96PYY9fhxKCAyTUeiCwJyVnaTk9chLYkwYgnc7YxbvNhiy1sL",
  "key7": "5k184ndT2fCvHT4yCXQAz6TkHjLbfUej1wXJFHYGiyXMKvkcov2npTyRYgEjg4DKdimQ8u87kKkjHwdAZMDcm3Fg",
  "key8": "2sEWgWqUSdjjKPwGgLFuduXELCJEkZekzeVGd5WrJR4ZurHnpMgyt2AMpN7HWQ7xzmaickPzejpuS3SZiV2Ws6ob",
  "key9": "5BKbHJAYBVJ3TRFhDLtefaaLjcSFT52vN5PVJ3SfH1kHYQ5THTy4AKG2aMTEos4MbiKcWBRj1cQdXo6ECBJifRsM",
  "key10": "zqsFZExR667sfF67vqAaAa4Uq2yuMuXRCfURwdbXXDPZW9TScANNk7U7cASGhBUMFgEq8Edxzu15v5M2ZYHrdKq",
  "key11": "3u2agjoWp2E1NeyRTxiDU512CFB9PVHuemiGWgQoRRGhFjgbBDeQEPCR7jftGoZKH5ujVNs9563peC6jLgnvUZ2u",
  "key12": "58CLXs8Xm8ppziJ2u5ei8EQbsd3hKDYaMF1urVJuiBkyUVe46aLfvzXD7qeEAauz3HWLzDboeKgzERPYUVHSvQEk",
  "key13": "5SSqtxdXV5hkYUCnnAb5wt3NqcQRjK7aaJF93KDjAhdTkhsrJxBEiUJjpo5F5nJTY2GuxWodSvJNueSR9GjQPRGj",
  "key14": "64uEySuKCSu2BcwunLck37uEWabVGcFEiwsSZC7kmQHtehPnn79r8hKg18B9LJzjiVn1tvCJ8HrYmGAfd37x9X5Q",
  "key15": "4kv1HfCZCE5ZdgLAChNoDQ89hU8b4vdg6emeER8kbAVxwF6JXXkAG1weqw6QJKJMBwWdKB7JvoxknRNL7xf9mvDA",
  "key16": "36HEVyvKWtDaEWeVZ7UAiGe84YxyvU9EP1JiT98oSoFq3syeytLdyDtyvAXL8AfkmG5yc52oqTMQhEJ562Jgmgtg",
  "key17": "hoA8u9oqMtPKcEbytty2rS4o1CysXc5wUtPEaAQnaN4ioQusUeY8vSfF1zqdFEY8r4U6qiBXgXXGfYzNTZXD3Zr",
  "key18": "52bf36rYKykSs8hYcbr7yn3inkPE9kkWsRFfHgqAut7i1GG3okWw2BHFAZjdhaUzfZWwYook7gFrQmnyCkkvCsi5",
  "key19": "2bPYwhoCZM1A7KvmiuZT3dTcBof3RNEeFCf3DMyZz9UY3JKwS7p9yjAfAwXEcGUXMQEy1uecTWxLqj7RFA1Uojxx",
  "key20": "P6KCrJybCTWTM2kXsyxaJhnrLuBgLTQqgmSnU1TuFPd1ZFQD44GyzoFHcjT2fxC4uRPneuwyhPuPZxCb4gEiKQq",
  "key21": "2keW6GrkCEvwnVw3TkgCTW2ALz6twqPg933V6YnGjQxjrPbsNwn8nLot3hqdB6j895PffHjVCSkfV7PqymVyqcF6",
  "key22": "Je6nNUqG94AABSZmbMhzcQYNu3eceZfD8D7myedgKJMGHw1U3KncG4skQ2EuovF2RAF8j6o5zqg8FbeC5dRaPjM",
  "key23": "3oTFmNu2nnGinsSRack3Ci531ME4B6ofczpNY1NhLjh5tsmMGKebT63wQpJRnbCCrgMBHXPGxdN95QGQr4dN12Ua",
  "key24": "3GnGjqjwNPWStgk31R5gfmH36BXnpaViYfCnif49uZwej3aH1vhrJMg8M66ETfc9fUagE8pvqDfeFMngXfrwTRCf",
  "key25": "2wET1rXsreTwxv4ZkZ1LLNoc7Vi3BPenE24YXC3WQa58BuPdMgonuR9Cbksz7QNFcS9Lf8Ppp7CMxCU7oQigSRmk",
  "key26": "LDpkh5P1Mpk8eA81Gf7qH42ocAbH17rDmjTtarEAqeYkLWLAdBWmZSKQsRyuoLgUuPyiJaRverfEYi3UHEWZpoD",
  "key27": "VX4jRqacxuF91mUrAz8ZeBT2GXEJ3DEcau6PY1KjnmW6SgPj49FmVYpEnn6AqH2YFrsJRdtPvJK9VsFKccfKRXP",
  "key28": "32shK4pCHbcNxRXuYuuwsgjg131nCAaf17Q8g9wurokeAGTRb4QwjfwA5bLouh34uwDATtndRAmZhEwYkHc2D1Fe"
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
