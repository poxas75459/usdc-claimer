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
    "2tMYvc66cioQZgJSMQQHVMAVAFPV75F41f6EANx1QNqm7VKmLgrRdySbMz9Srp8kjouTb461Q1QYhH3bnfxmgxfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWXmqtwx5mQF8uW4oGJXjHdbMcZDs2r33MVQS6RYyPVuqu8o5XseBgwQ7RBr9USSuSd7NtKmp8ZvBUjVgz3uNos",
  "key1": "3j78dkfEEFrV74rQRPEDbzsEXkSHrZPvP2GXF39xVZpZ26VkMbvuiHajwf5wQBAzRr39HSiZ2g9kG7LBdJeNaZip",
  "key2": "4yQTViRf5qD8FNsQZexR14wDckxT727eRfvdyaiFMWW83ibpnv7o7Et7YAeSwSx8X9Nyj1qEqZhjkg9oHGaKtCi3",
  "key3": "63rDjeBZSMwZXZBWi1aHBPnVFuDXQdfhShMwGKLULDaXQ14tbMvnk68M88dw4153jpzsZBGnvJ5LueewZZ3FYCEX",
  "key4": "sLZ6de2jrD1W5eLRdNnHWPkdBHLdYZSH6L3WQt3faWf7pTze189PHMWLqGxPoiUWY2D473Z6HcDCVej3uyVp2pV",
  "key5": "UAWEsfVHsXPggdn3yi3BApzawTv4Quqv2xqFHA31ox7qymhfUNR1kgTbaxxhuEzxmoByNcvPufhM6V58AZfDPhU",
  "key6": "22gMimZeQ6ro3i2a1otv7iF6FeiSePYrkFTwKdPxFwrHjuRdsj6ZYwesuSeDvXAv5SubBYN2NCHXUhzYJcxfh9K4",
  "key7": "5yu1VEtbVrxY1MHEKWStvetuowEG9VT6A43PzAPa3AgVyV4dsUvrt55r9sGj4uuoBd8BcwhczXDVDr7uhRC3Y84M",
  "key8": "3W4de6sfYsLzDzSbhyRHkVmsaf8ohLa5zUtDUVwp8GsixM6oP38r2KmpcWPfpbhax5uVGAdm9EpguVRg5pCr426y",
  "key9": "2SbPvpyWJbzo9XsDp5rTkuN85sNUWnAhQzq8q45fRz4Gms9WoSnMSNQ12mbPW9Y79Bjfv9YQtMvt7ZCDEdSLBSxP",
  "key10": "2g6FHEhXKSLrhZULHUHu29w4nniKKSnV7ZrD9v7oXN8QYe6dHmVqRQJT3LHbLK5jCtztC8rkxTTSiyeG8FFUbEq6",
  "key11": "cajfYe4Ef3dprTiRyENwNzj2swguzFb9yeZyudqDbmQRhqdWzy1Rgks7LxY1Z35uNdpa3SjJkvcRW1H8iXairdE",
  "key12": "3nHeHjmkaDUsCYRKsqtUvJAQuBGHNGzDesyVXsDx5pL6wezTzip2kdtku4F31VLZfAF5ptwEDrLcWaofWbk7jbR3",
  "key13": "2kd8Q1dsMsZJF17wr6gVrWjoCt2pn8sTgKwZaZcdhkZP3cxRnkcXwznTozc9PTaMHmDbBCimQqrHztvDJNq2cRp4",
  "key14": "44BM3ZPsjyJ1YAy2a7UwmmbufUwMk2FSsUzp8kcTxnpafEvvuE3GqrEPNgXS89H7UsaNbQCYfeepauUNR3jwh8aG",
  "key15": "27VmwMA4QxpSEdJwoT5hJechCJneBsMyDyNSDYSq6qittyUFpk6mqktjmCc5AGJSvKJYvs15mccvXz8RM6oirfCX",
  "key16": "5etXxyD7Qmrqpx1S1Yks4gGn2y9UVDntLLZdhngQXGE6HjWj6vA4RoN2h1KkqMjhkXry1fURr4hfTGdZXzaDHips",
  "key17": "5QcGkbsB1bws4GHNyAm5iTmZjExBie1K2pzJFLPNpWBB1EuTyB3jfEDLHrunRR7g5QeUvFdyH5jzrEbfQX4umcZM",
  "key18": "4dyCgfrswV4N3cCJaWMQQWcYSRAhm3Jrdxo7xVMzfCEMXKBTHeuMtAvBgWMhipeTv71U7nUNXFP2qvSWn7W7W33D",
  "key19": "2837N8usaXPgvkFWH6svGLVybMnyECryuzsK4yZ2A4FkcqbAEW8wTc9tGocv6HURXvDE2qGTvtdEco935rVfYXHb",
  "key20": "3B1nUoW382puo9iVw5LR3BeyLhEi2EimgtrLUva5gnKnKEH7c1jE63af7CYg3PWTp8UNfpaZK6fk4DhXX2rAPAqK",
  "key21": "31uWDzxcuzoAiKi2VEKoB1rSimmJgLbJRKtHqiMnv56VzDtKBNFXu8MGnCyaZaZnT2bW7cC6ocuBD29Y2bUp2TgS",
  "key22": "4qc5cwH4TeiaP5CzZ4eXxRgP1AnegsEkWXu3avBoww5w6ufjhyjyYanS35uzKccFR8tLLrxQYio7q2nhKCpC1wcD",
  "key23": "5EqEAMRfZKqT3QvtjjAz2cNqkaco8cZ81pMgmAq5QDssr2YbuSLXF7Zqb4FeZNTD3gGkmUWi536woq6Gjm7WDuSz",
  "key24": "ZPkchBAJkCSQGLSatvZQBQAyLrYzzEsxTmdden8N4DC6S9K1HdmcRoX1XzKwc7mePLy8i4FhKpJWnmdVofzUMLC",
  "key25": "5xoSKdYjqSjstTbjt9psbpqa7MrUqhsCKWcQvGd1f4YnVJkpgshF9G4pXRmmvZnCagA82tAk6HB9bSZCfZ8ksHwP",
  "key26": "4kVWx96KqcD4fyUnPyh9B6Uq9dgYk1Zcu6zj5V2JFaf2xRcNbnPQsjNKe37FZA4vBQMKVMqoGuW2VwXje4qZX3Zz",
  "key27": "5C32C9QLFFzNMbZLucv98PD4cq5LHKTxKpfKsLUpsu1nkXadMjTTyGFv1n9Tg65a9Xu7nQLxTsu3euVe7iX7hsfZ",
  "key28": "4pJ8bfP4ouka4jYn4E9j4wjciAyTLWevuRDNSrX1BgnKZcRcg3SHqc97f4y6Yj1qDnyvfLnUtidX24uaV5dkjcT3",
  "key29": "4XUZ6WSgPzrB82WkNPBq1S1ZvgAEDiNrcGuQnSHUjEAYaghoZvfGFBiEYQQAPhAS2Lx2XznU6TkmsQNaPv7EYJzh",
  "key30": "3XZu7U1EUMXfibbgdYiWRWBgzGQW3oo5s2dn6zoz91Mqpe5XjBJxZv5biibDtCSoPHCb97GxRruE4SZYK7LwGfJs",
  "key31": "2ZvEX7XW43897VcswBwANWjRgH8xBi2Qc7E61nm6s2qP8K9pgeNZvtNUq2qXzJU7zvkBCtcGF677VFR54ujp85Gx"
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
