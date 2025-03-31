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
    "5DzJTcJHSnQpKb5a58AE8jz4njistvkdhYkrhpLAuAi1SDWoMitapNZDEGop3TgbfNb5AZXygeHeNepPJgdNUsCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swVZz5DCN2YWxP2ggEk2fah5KNdSEwsPKiuBEdAHdrHp9eGn49uut6EeYVMN9UVPkUmNrwb7g2MGkC2KGw6gvy4",
  "key1": "4gZkoBj5ay3Ubn5VMkk599sz3r9GibjhZ1k4kxbhzMRSHoY2FcER13QU9XZYLdW8La2g4QygYeAoGQPg8cMtEKbZ",
  "key2": "2doQ9184rZbj7ehrR3fTyNJtApZFJz2L3nW4xHvKQTh3ZkrgThZng9TibibNXUkaMm7zRAqa1ME92x5zUYiAJKBH",
  "key3": "37beUQVG5KrHkNFKTMQLEisYmRivJazkM4ZWUBCCoREKWzofYn6imVtNH74tnH98APrKPjL7vpewsPcmTQSBJUd2",
  "key4": "3A65rA3XjgbZnWbE2E4KUFzdzXsrk2ojPnsdNGk6D6ifU3k4pjKRdNapzwH2JtY47N8HEKLwGYfGpxDJuDSmXRC1",
  "key5": "25hK9RZ9PjtNLeYUDFaUMqrqjJMneDWJaPUVoYrjc3DuUhUyDscxFCsYfaM8xyEgSs9ZokzPtn7Zfaxnv1cUiiCu",
  "key6": "4PJvJ67zTMRxCUvFy63x4uoRmEcTjT88yp6BP1cATnFYJTDuTpEZdktTJ5RAV7u4EwTnFZN2br1MfJc3Vt5ZLYbz",
  "key7": "rdfG2NUWkapH9rb5L9UPHkzzGsKr8XxbxoharRBu9LuDiZuLkWAg1C1EB1MLzHnCZ4ypkQ1CpncPzyvcb46oyKn",
  "key8": "7r8WAxqPdCnRpddrDbniXGeLz14w4exmHwWK2ByQWMoHDcp9JgcG9Q7kMNTsYhrY3ybiZFkDi3yA8XUKsxuPVRm",
  "key9": "4NJyH3C2XDJprFs7u4J2cVD6QXa9suNp5AKWGESEz2DQEhk9xjyv3kSXTS8rWEzLt5C4QziXkFqGMxFpqFhpXFVp",
  "key10": "5RATuCzDTcUJSgaRUSSJEagNRsaF4fmahFu2RZMYt2dsjChVYs6EEBLyjSpt4KWr7Wd4kn4yiDyM4ZBeacY4kqGH",
  "key11": "3a8zpmcMgHQwyKoNUASUoBZWVLVf97LUR2qeUM1AYgW4bUZBZYv9eLiaurwqezf2Ud4gZoGJXnV54RHgAAUwnKhW",
  "key12": "LPkmoKMwWqUueZ19jKzhoZv6BeaCnHHzwJgdesPip54h5hTViJfeahf9CqGcKBkorx74ZLWx2EsKJokAS7Mnsj6",
  "key13": "3WEYQNV87b8q2J5KCynUUaiH948e9RKfRYkzoxSCP3BGeWEz6kpdr8nMq6vJLvcCVS3XJvLfy2gpmwrq2aGybvPt",
  "key14": "5cnM46pqZ6D8Ypd56iC8skt3seNkXTMTCGNGenBsjeAV5rfDdPoGiEBcEXk4NsJChyMJV2667ct2J82nitbjr5C4",
  "key15": "4ZRPWzj3KCcZqbHprhpCFMAwSeWCaVFHuKPJ8fuAeF9x5w97A8m8P7vgFzwMCuLRd8CF1bEGdArEXLFGkkTQtGuF",
  "key16": "2UQDm8No3oxJoE4JtpiRr5T2TnRw35vPWzcoEWwGiPU4n5epfRNA3ePJaQbQmPaWpEPvcgSser5GrQ13QXGoPh4P",
  "key17": "3VNd1HxVQWYFnxTsYJeTBhmqJ6DRX65h7nYscXJ67XFwqBB3ZkwQty5mMQJcBUB8HuMQWLCyo5VTTci1vHZqLhWk",
  "key18": "whuH8Y74RwaViBuoNKp9ZfbubFPMiUQw6pTkTdcpT6wTG1XvBHunVsv3KKKkk4QKKYgDm11V6vMCX6cRuuxs47H",
  "key19": "5PXDBvH5urzvdEtRoyD94DWKcTcfwJDa7yJsd7pPwGALcqUHd6vS9F8MpPx8L4vqoTPQR69SedRWiurMRrF1sqXa",
  "key20": "2nkQVZzpLZtRDRfMb6TR3EpUWoMYKSpuPMozHXJmVtuFfDGkmm6KndvUg9xWgAFFvcJDwmJHpqNcQSdqYDivooo6",
  "key21": "39TcJzoge2WKHfTKiqh4htg3nap2BQAiR381NoXazi9QTs35Fz45TQ71XEXG3MHzFoBUKQ5N8rresfP1vptXvC36",
  "key22": "FTjRaSRQb155TiWQKGcEL3MFgZjFZ9jSPiBEUyUxW85BgG13uq4nzTk6a6t3Ejm9RkrNcoPX6BVqsxLAvH7VP8H",
  "key23": "gWm7ontqZ5dB59iUkZ4McftmUaKq84rohBRVQYeULPWG5nNW7ejxtD78bwYa1bRsuxRAxMHF6BTJTarqL8dqhE6",
  "key24": "3WLjcsAQJ2MG81muMVyf6g7Q65ABsyqRNXK9UKorYrnTagsXuTKUqKWgi2miYixZYJUA122b1YTj7FS5YEwZD4SZ"
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
