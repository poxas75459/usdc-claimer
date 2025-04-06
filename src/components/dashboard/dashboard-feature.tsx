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
    "2kFX8PdTSgQ6X51jf4En5CXa31EdHExCjyLNUpKVaUGLcJfruhpBsAURAZSkkMVimCaHspg4agGH4ZGjLUcPkEMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9HRmWgxArfrMMJYv7TABxPzWi49iivchwMWtdzvMNeHyPcNPCvkMaCtEFDGt39pDyyQ2cYxjWN8g17MhdcDp8p",
  "key1": "67m59Cqxr6FWSBifunaDcMLLao7cBZkQuUwdjk3tJZ7sFmXFT5fUMcvv7Y1w1DrbAj6WF78ed2fJ5JgrXejiH6eP",
  "key2": "3m2PVa5LKGosQQNZFMMum1jLaSV4romkw75AuTFRsSeDUZ4GrUZH86z9rmPfPRzcCkS9G6KZL3NFkxoYDT7VekWm",
  "key3": "4UMKQ2ikJY4KT186RQtYA3E6LSg6bTVomjW9YvPAjuHQh6cGPsz4FTJL6FcUx1rRe2ErV1XTSxqpar26tuJYiQi1",
  "key4": "5pWno3E4h34m4rrYVQfA9NiL1o5VNUpcRW8931RWgaUih62vTiCm44KsduSRwsmJzAKcK3BD9ScLg3EGS15Ao3AB",
  "key5": "2z1SMNU8MTDGAXUFxh1uZV4zvoKMDgWbi73qxoToRCJmZK8A1jgWaUUJrqJpVx9HV11dp2SyqdzAu5RSoy3RxQXJ",
  "key6": "5xF1sHLdbkcvS8MDNgZcgv735QVVsxPL8CgEiBZXDQwhTVi7Z8eZhRxZdDdkuv8e2BLi5T6A7rHSNeVnkyJJkRnM",
  "key7": "qYYc1AV5pWxYxcpmXpbabEdSuBYuv9QwmHCxgoF1WQNkWiQPx6Bko8HL6Ag21Xew4fByKTBzgXWiHbnGHJEnUmP",
  "key8": "42CE1mDEn232DPhFwVbeGSvqgLz3Py5mnef7s44HsQfb3VwPMmQ3W1hB2VNbr4EbhsAwfBE4xzGN5ZAVP1zhERFf",
  "key9": "4AcheM1fRYMcBqXq5vKDMQSTfTiAYjLQnopPEjHmhEAjmXgStfVJz2fhVPeY2W4VhpFLE67HsxWsUH4P7GxWwghr",
  "key10": "37nicp3mJ5i3C9a5X9CRDdDaYz6A2ZYYuueQVAxFsNXrj9GW6f6Tinmc1XoEGpoBnaYfTT5SayZ1YXEFf6HR6KkA",
  "key11": "3N9f9RaskmFRHh3HNWsBm4AimcYdtzQWdAjpfWbzeHU8E9TgjCZag8CJB1fWiug3672oqgHPyzS3rcfFqHnn9TQB",
  "key12": "3cgNb49b517TToLPUDiqbngkG62hA4aHFmhzFbu7zrAcd5grezasfVURcYy5VSiLMABPy3n6UsUjXHqbvJAwQdFK",
  "key13": "5F2E4ftsLQXYEid8278snvkKdCzu6wyvTxvjFHteveaS2abmEfgQYtH4w5gH2H8RP3b16T6ikd3gfSvc9dPxN5KJ",
  "key14": "3pNDncJ59X85QCgmEoaoEY42ZM9yhANAQ3KC6zRyz1eohsa5JK74Kk1T3RNEAW2JjSDJaiRGbK8fouecmQnpyvWk",
  "key15": "3vtyGJpwkB6MSKP62zLzj524dy4Zok6AbWtGqe1mgtHzHzESPEPwZQYav52AVbP7w19uSTdLX6LBBYywjL575SmT",
  "key16": "3LtKtC9vdo2gnN7RJYcMVCU3KjARN5qDbDMta2f2hrVDaxKmXv5Pc8A3Mk8bGd3bR78sca7TvnL2vL1bar4fb4rX",
  "key17": "SAUQgjwsGB62PR18pGkFa8VZ5m6LEzELtqvbfF5MqjifUA4QgjxEKMFgrwHJC6WHbny13vmLsCTsV986hPa9cq4",
  "key18": "3qwRvo1Eag8YVDmp3Tj85sRKDEwRsxJHdyCjpDg6g7Y2Bc9eAqEBMvp5ifYxcBMdkv1qPYnGQweNsCDinajLQaJm",
  "key19": "32VHCjFLNdUPUoyyTuWEbKPNo68bMyAbxo9rR3ynbX1RZV6TZX3KQsjjCzc4fQ8haLZuqQxq44SFHDdB76csyoR8",
  "key20": "4AiWeh6gP1KT2fM9n2iEGQqzF4TjZ93aDVBQctCr2DeHvCjpi8V3WaQSU6D1z4X2TF1UfLujdJucdovg8KXn3B24",
  "key21": "2UtcWuHS2YsVQQUrsH2sSc7warG4DzTQZ5oQVKLZr3HRwgQYwAZRpDaQheaJDU7EowhEay2Po8B6MHvKiQEpkUbH",
  "key22": "5ULyYmQCnVWYN7QC9es7RAQoxNVJ1GFe3d88LH3qSt3Fegi7LD1axM5yK3Bm4wDgFm3uszjdJ4gFgtAppaDKgm6E",
  "key23": "28yH1W2Dy5NXxVi1zSvjkt96eg5cGwCQP93WcgukVwY2GXkCsigucxBku2ftSyZxAw2fpz5d234JxGsXER9irozJ",
  "key24": "4sdUQkNJeK5Ct3yoiWst4Jo4wWPL54F5FaMz5P1gbEEMv48yTq2P5gNuE8pnEfecfkCYixiMaoirvXYweKu9GATF",
  "key25": "3cQx5bam4dGqGN8nZygdgJFcZJUWEdLJRKHyBqYc5jQxpXwwQkR2qgZzEcZTKv3TwRCFkrVDKRcJ9rmt1hn191pZ"
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
