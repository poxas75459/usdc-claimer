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
    "3rJPXUTm5UoNFKrGPqNX4GRvDaPDBMYjNZ3iwJyAHj6qdSiSepjkxp59Mcqu7HQSUjSXYMpMWynpjwCg2pQmeTHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEZxAHTREYyTPJNZZD2VU8KXcEepWe2XHKtRcdzgToxB5enBfmkhyavVuTYH8UY6gpM7fyFnovadKnHZvyk2L3A",
  "key1": "4mnb1ut3RgvbDiQG5iL25c2V2NKvsTnoVs26fQyfLp6VyjNtKimHTX7SUwqNpKpgfRLperAbYsMQDtCnGNjhjhqL",
  "key2": "2U5nhG3E613veh24kh1Sm89fncM4feTbQuoJoGMyj52ujiGSMAkpnsKH3zusvjNPxFnrU5d64dbhmUC7U1a1TAsc",
  "key3": "2VPLvG6zSus2VBhcghrucvMpSpzGDEofx7nfHMR4MosnDXNfndLMcx6D1EdvjDkbw5uyP81G42QgKonuY4V8z99r",
  "key4": "2UJ9wWkQjvdX1vc897qTiDpVgi6VTrK8Z8SREpagzeGcjvW4WuXQ7fDZNHX3awW9WfoYdZc8MYGuoELvTwcCTyGb",
  "key5": "3WjEtnps6BQ9d5JaC2ZK1kPrZdmyUiGC9ejCXnLbxtgNfzYXPdaNJhNFmNea7ri4bY4rtHPGsvLDYhkZeQXSdjb9",
  "key6": "dUXiqmSQMUQg77XcUTx3pcMTpadcrGLNWFo42HULPhgZM4xTMLx8gZAJmNdPGnKRkL9cEbkxFj9ynNKbBohwUuE",
  "key7": "3ti6vbcBjYnVa3WXbStgzp6TH7VNnak7YSJZn91fxgpQgCWoZ28bx9NAce5L4TueMYgZ1wXgKX6PFvcfGm4LqPbc",
  "key8": "fbK3M8FuapX95pBxHpbGByFW43C3sjwNYKUvKibZ81iv566TW5oD31qd2meULvC8R8T16bwhFY2co4G33VRNXoj",
  "key9": "aNTUzPyWbwyBa4yp5FHpg8pUtX22F7fEeLn3zSmSSvcfMBjA87Aqo1J6Rw8tBic4jkd8J5riteGYQmSHmX7vuiC",
  "key10": "2NcRVPnht2z1Q1XNK2jXnXkA2Frarypyix1i6BKGitqPhWtGRZwpnWZLtiBu9rAuacmRLTtguQYjjZxptXU6A7KC",
  "key11": "2xD9N6PCRjUBzjPZDmxZkAD96iMSg1GUDr1Z7W1PeMvrGg269DJ6cDVV6y4n5xjitKKfgnCTYkWPisgwRJzUa7JC",
  "key12": "34TTEJKo755JRyvMr5JgPvz7FMQ9UrJpj69np2zbQzM9LZBxBDrr1hz6DuBbFeUg5xua4sUVCoQ4sdGB5DgQiRks",
  "key13": "5uLDGXCjKus5woSH7Jaix1t6tDnsZdWVUo4vpNwdqv5YGRgdFRFBPHxHrqX6KkNqar3xwBCBJDgdfvLJMeeJQVzJ",
  "key14": "zyk1dKeAtqGnGLUfsHzuTtFWrjhF52DsQZVYPEgKJg1wAYeTgm3MtorW3pwN97sm5s6W56cMa1GbVid1SjRYXNU",
  "key15": "2Mr5PeTiejmpP7J3K3EKA7duGPEFn5VG2gXwEqqm8XHnqeXeZz126dQoAX2ZpL3oQ9xoSqqd4bqwmDQ5UPVnT6TG",
  "key16": "26urq62qTUXgdVMKNqAAMCY7FjQnYikbKQYmjcNG8qvs1RHtfYWaX8uqaUcYVUCjTaM9dBZ5tmiEkkTRarbvGj7o",
  "key17": "5WV56H9thSr5jvofm7F4LRbcY9UcvXCiQeayfmRTdueUKhwXdUHzyk6pQYtPbbLbGYoBRvZ941YmabVKKsoxu24k",
  "key18": "5vc7de6zFe2CoUF4jVnc3fJhZarJSFHZe3ZHHM5VFhWUKe3HVH4gquqJV8PwgR22m7kccZGo9JBBH2SdncKKTDwB",
  "key19": "o9tR9nYYXzcnFFCFbTnbfdd3QYYdXvnPivGpHR9Guzaeq7CRbcaCBoTu9uGdWdu56VxLmKzVURhSVApLE7NyCNs",
  "key20": "2KjZaDbu78xnFTuhzUWrzGdRraYTAaRbaBSjXxyRXy7QB6BfxuKnfEtLLkYBiyiL3vFQrDhi4jhNGevFsky1SqZ2",
  "key21": "5A33CXwRSGM8QVU1hyjuvqAFpUgtSX4qEyAZQN24HS83nQ5dzmmqxVczeAeVNE2VAb31m4862BwER8fR1MCuZp3G",
  "key22": "2WZimMkkyW2PV2ZVVcySz4CTtWDKSAKHWonRMygQHwasqV3csHLyo2q253SvP2nGrvsRMTg2jRz7DGRtmYgxwFgf",
  "key23": "2rw5VYVMP3J4qMvvY51rhCrU2wk4utJ4m1piVTsNeM4vUNDaJzW5HZGEUE2WnM1BMSVSJiouaNHS7NrSY8W6aht9",
  "key24": "3sfqMrTvZxK7uaZg8z48aGf8mkFfNL7wtRsAsyU6Cms8cpifP3JFEU7yH12UHZyc9tJhpBLQrzMHApDX9cfQnRfZ",
  "key25": "5ArKegfYZAU63j2kiT5ikxuN23V59FYntcJM2gAAKKZRMKUF2gdXQL5DFrDkrDmcNbu8qBrL8PDfNF6PWS8HbZaQ"
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
